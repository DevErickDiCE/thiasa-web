# 📧 Migración a Resend - Formulario de Contacto

## ✅ Cambios Realizados

### 1. **Dependencias Actualizadas**
- ❌ **Eliminado:** `nodemailer` y `@types/nodemailer`
- ✅ **Agregado:** `resend` (v6.7.0)

### 2. **Archivo API Completamente Reescrito**
- **Ubicación:** `src/app/api/contact/route.ts`
- **Cambios:**
  - Eliminado todo el código SMTP (153 líneas → 44 líneas)
  - Implementación limpia con Resend SDK
  - Sin configuración de transporter, certificados SSL, ni SMTP

### 3. **Variables de Entorno**

#### **LOCAL** (`.env.local`)
```env
RESEND_API_KEY=re_123456789_REPLACE_WITH_YOUR_ACTUAL_KEY
```

#### **VERCEL** (Ya configurado)
```env
RESEND_API_KEY=********
```

---

## 🚀 Cómo Funciona

1. El formulario envía datos al endpoint `/api/contact`
2. Resend API envía el correo desde `onboarding@resend.dev`
3. El email llega a `info@thiasa.es`
4. El campo `replyTo` permite responder directamente al usuario

---

## 📝 Implementación Final

```typescript
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Faltan campos obligatorios" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "THIASA <onboarding@resend.dev>",
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
```

---

## 🔧 Para Desarrollo Local

1. **Obtén tu API Key de Resend:**
   - Ve a [resend.com/api-keys](https://resend.com/api-keys)
   - Crea una nueva API key
   - Cópiala

2. **Actualiza `.env.local`:**
   ```bash
   RESEND_API_KEY=tu_clave_real_aquí
   ```

3. **Reinicia el servidor:**
   ```bash
   npm run dev
   ```

---

## 🌐 Despliegue en Vercel

La variable `RESEND_API_KEY` ya está configurada en Vercel.

### **Comandos para subir:**
```bash
git add .
git commit -m "Migración completa de SMTP a Resend"
git push origin main
```

Vercel detectará automáticamente los cambios y desplegará la nueva versión.

---

## ✨ Ventajas de Resend

- ✅ **Sin configuración SMTP** (no más certificados ni puertos)
- ✅ **Compatible con Vercel serverless**
- ✅ **Más confiable** que SMTP del hosting
- ✅ **Mejor deliverability** (menor probabilidad de spam)
- ✅ **Código más limpio y mantenible**

---

## 📌 Notas Importantes

- El email se envía desde `onboarding@resend.dev` (dominio de Resend para testing)
- Para producción, puedes configurar tu propio dominio en Resend
- El campo `replyTo` asegura que las respuestas vayan al usuario correcto
- No hay limitaciones de hosting ni certificados SSL

---

**Fecha de migración:** 12 de enero de 2026
**Estado:** ✅ Completado
