import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

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

        await resend.emails.send({
            from: "THIASA <contacto@thiasa.es>",
            to: ["info@thiasa.es"],
            replyTo: email,
            subject: `Nuevo mensaje de contacto – ${name}`,
            html: `
        <h2>Nuevo mensaje desde la web</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Teléfono:</strong> ${phone}</p>` : ""}
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error enviando email:", error);
        return NextResponse.json(
            { error: "Error al enviar el mensaje" },
            { status: 500 }
        );
    }
}
