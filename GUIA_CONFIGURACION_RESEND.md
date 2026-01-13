# 📘 Guía Definitiva: Configurar Contact Form con Resend + Hosting cPanel + Vercel

Esta guía resume cómo configurar un formulario de contacto en Next.js alojado en Vercel, usando un dominio comprado en un hosting cPanel (como Sered), asegurando que **lleguen los correos**.

---

## 1. Configuración en Resend (El Cartero)
1.  Crea cuenta en [Resend.com](https://resend.com).
2.  Ve a **Domains** y agrega tu dominio (ej: `tudominio.com`).
3.  Resend te dará 3 registros DNS (MX, SPF, DKIM). **No cierres esta pestaña.**
4.  Ve a **API Keys** y crea una nueva key. Copiala.

---

## 2. Configuración en el Código (Next.js)
En tu archivo `/app/api/contact/route.ts`:

```typescript
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    // ... validación de datos ...
    
    // IMPORTANTE: El 'from' DEBE ser el dominio verificado
    const { data, error } = await resend.emails.send({
        from: "Web Contact <noreply@tudominio.com>", 
        to: ["info@tudominio.com"], // Tu email real
        replyTo: email_cliente, // Para responderle directamente
        subject: `Nuevo mensaje de ${name}`,
        html: `<p>${message}</p>`,
    });
    
    // ... manejo de errores ...
}
```

---

## 3. Configuración DNS en cPanel (La Clave)
Aquí es donde suelen ocurrir los fallo. **Hazlo desde cPanel -> Zone Editor**, NO desde el área de cliente externa si es posible.

### A. Apuntar la web a Vercel
1.  Busca el registro **A** principal (`tudominio.com`).
2.  Apunta a la IP de Vercel: `76.76.21.21`.

### B. Autorizar a Resend (Para que no vaya a Spam)
Agrega los 3 registros que te dio Resend en el paso 1:
1.  **MX**: `send.tudominio.com` → `feedback-smtp...`
2.  **TXT (SPF)**: `send.tudominio.com` → `v=spf1 include:amazonses...`
3.  **TXT (DKIM)**: `resend._domainkey` → `p=MIGf...`

### C. Verificar "Email Routing"
1.  En cPanel ve a **Email Routing**.
2.  Selecciona tu dominio.
3.  Asegúrate que esté en **"Local Mail Exchanger"**.
    *   *¿Por qué?* Porque el correo (`info@tudominio.com`) se guarda ahí mismo en el hosting.

---

## 4. Troubleshooting (Si NO llegan los correos)

Si Resend dice "Delivered" pero no te llega nada:

1.  **Revisa el registro `mail.tudominio.com`**:
    *   Haz un ping o `dig mail.tudominio.com`.
    *   Debe apuntar a la IP de tu hosting (ej: `193.x.x.x`), **NUNCA** a Vercel ni a otra rara.
    *   *Solución:* Edita el registro A `mail` en Zone Editor y pon la IP correcta del hosting.

2.  **"Truco del Refresco"** (Split-Brain DNS):
    *   Si tienes los DNS bien en cPanel pero Internet ve otros (pasa en hostings compartidos).
    *   Edita el registro `mail` -> pon IP falsa -> guarda -> vuelve a poner IP buena -> guarda. Esto fuerza la actualización.

3.  **Firewall / Anti-Spoofing**:
    *   Si todo lo anterior está bien, es el Firewall del hosting bloqueando la IP de Amazon/Resend. Toca abrir ticket a soporte pidiendo "Revisar logs de Exim por bloqueo a Amazon SES".

---

**Resumen:** Web a Vercel (Record A), Correo a Hosting (Record Mail + MX Local), Resend Autorizado (TXT/DKIM).
