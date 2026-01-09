# Configuración del Formulario de Contacto - THIASA

## ✅ Estado de la Configuración

El formulario de contacto ha sido configurado con éxito. Solo falta **UN PASO** para que funcione completamente.

---

## 🔧 Último Paso: Configurar la Contraseña SMTP

### 1. Editar el archivo `.env.local`

Abre el archivo `.env.local` en la raíz del proyecto y reemplaza `TU_CONTRASEÑA_AQUI` con la contraseña real del correo `info@thiasa.es`:

```env
# Configuración SMTP para el formulario de contacto
SMTP_HOST=mail.thiasa.es
SMTP_PORT=465
SMTP_USER=info@thiasa.es
SMTP_PASSWORD=tu_contraseña_real_aquí   ← CAMBIA ESTO
SMTP_FROM=info@thiasa.es
SMTP_TO=info@thiasa.es
```

### 2. Reiniciar el servidor de desarrollo

Después de guardar el archivo `.env.local`, reinicia el servidor:

```bash
# Detén el servidor con Ctrl+C
# Luego vuelve a iniciarlo
npm run dev
```

---

## 🎯 Cómo Funciona

1. **Usuario completa el formulario** en la sección de Contacto
2. **El formulario envía los datos** a `/api/contact`
3. **La API valida los datos** y envía un correo usando SMTP
4. **El correo llega a** `info@thiasa.es`
5. **El usuario ve un mensaje** de confirmación o error

---

## 📧 Formato del Email que Recibirás

Los correos que lleguen desde el formulario tendrán:

- **De:** info@thiasa.es
- **Para:** info@thiasa.es
- **Asunto:** "Nuevo mensaje de contacto - [Nombre del Cliente]"
- **Contenido:** 
  - Nombre del cliente
  - Email del cliente (clicable)
  - Teléfono (si lo proporcionó) (clicable)
  - Mensaje completo
  - Fecha y hora del envío

---

## 🔒 Seguridad

- ✅ Las credenciales SMTP están en `.env.local` (NO se suben a GitHub)
- ✅ Validación de emails en el frontend y backend
- ✅ Protección contra spam básica (campos requeridos)
- ✅ Manejo de errores con mensajes amigables

---

## 🧪 Probar el Formulario

### En Local (Development):
1. Ve a `http://localhost:3000/#contact`
2. Completa el formulario
3. Haz clic en "Enviar mensaje"
4. Verifica que llegue el correo a `info@thiasa.es`

### En Producción (Vercel):
1. **IMPORTANTE:** Debes agregar las variables de entorno en Vercel:
   - Ve a tu proyecto en Vercel
   - Settings → Environment Variables
   - Agrega todas las variables de `.env.local`
   - Redeploya el proyecto

---

## ❗ Variables de Entorno en Vercel

Para que funcione en producción, debes agregar en Vercel:

| Variable | Valor |
|----------|-------|
| `SMTP_HOST` | `mail.thiasa.es` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `info@thiasa.es` |
| `SMTP_PASSWORD` | `tu_contraseña` |
| `SMTP_FROM` | `info@thiasa.es` |
| `SMTP_TO` | `info@thiasa.es` |

---

## 🐛 Solución de Problemas

### El formulario no envía:
- ✅ Verifica que la contraseña en `.env.local` sea correcta
- ✅ Reinicia el servidor después de cambiar `.env.local`
- ✅ Verifica la consola del navegador (F12) para errores

### El correo no llega:
- ✅ Verifica que el correo `info@thiasa.es` esté activo
- ✅ Revisa la carpeta de spam
- ✅ Verifica los logs del servidor en la terminal

### Error de autenticación SMTP:
- ✅ Verifica usuario y contraseña en cPanel
- ✅ Asegúrate de que el puerto sea `465`
- ✅ Verifica que el host sea `mail.thiasa.es`

---

## 📁 Archivos Modificados

- ✅ `/src/components/contact.tsx` - Formulario con lógica de envío
- ✅ `/src/app/api/contact/route.ts` - API para enviar correos
- ✅ `/.env.local` - Variables de entorno SMTP
- ✅ `package.json` - Dependencias (nodemailer)

---

## 🚀 Siguiente Paso

**Edita `.env.local` y agrega tu contraseña, luego reinicia el servidor.**

¿Necesitas ayuda? Contáctame.
