import { Resend } from "resend";
import { NextResponse } from "next/server";

// Escapa el texto del usuario antes de meterlo en el HTML del correo
function escapeHtml(value: unknown): string {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

export async function POST(req: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error("RESEND_API_KEY no está configurada");
            return NextResponse.json(
                { error: "El servicio de correo no está disponible" },
                { status: 500 }
            );
        }

        const resend = new Resend(apiKey);
        const body = await req.json();
        const name = String(body.name ?? "").trim();
        const email = String(body.email ?? "").trim();
        const phone = String(body.phone ?? "").trim();
        const message = String(body.message ?? "").trim();

        // Validación de campos obligatorios
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Faltan campos obligatorios" },
                { status: 400 }
            );
        }

        // Validación de formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Formato de email inválido" },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: "THIASA <noreply@thiasa.es>",
            to: ["thiasamadrid@gmail.com", "info@thiasa.es"],
            replyTo: email,
            subject: `Nuevo mensaje de contacto – ${name.replace(/[\r\n]+/g, " ")}`,
            html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>` : ""}
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\r?\n/g, "<br>")}</p>
      `,
        });

        if (error) {
            console.error("Error de Resend:", error);
            return NextResponse.json(
                { error: "Error al enviar el mensaje" },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true, id: data?.id });
    } catch (error) {
        console.error("Error enviando email:", error);
        return NextResponse.json(
            { error: "Error al enviar el mensaje" },
            { status: 500 }
        );
    }
}
