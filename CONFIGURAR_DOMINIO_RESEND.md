# Cómo Configurar Tu Dominio en Resend

## 🎯 Objetivo
Poder enviar emails desde `noreply@thiasa.es` en lugar de `onboarding@resend.dev`

---

## 📝 Pasos para Verificar tu Dominio

### 1. **Accede a Resend Dashboard**
- Ve a: https://resend.com/domains
- Haz clic en "Add Domain"

### 2. **Agrega tu Dominio**
- Ingresa: `thiasa.es`
- Haz clic en "Add"

### 3. **Configura los Registros DNS**
Resend te mostrará 3 registros DNS que debes agregar en tu proveedor de dominios:

#### **SPF Record (TXT)**
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all
```

#### **DKIM Record (TXT)**
```
Type: TXT
Name: resend._domainkey
Value: [Resend te dará el valor específico]
```

#### **DMARC Record (TXT)**  
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none;
```

### 4. **Espera la Verificación**
- Puede tomar de 10 minutos a 24 horas
- Resend verificará automáticamente los registros DNS

### 5. **Actualiza el Código**
Una vez verificado, cambia en `/src/app/api/contact/route.ts`:

```typescript
from: "THIASA <noreply@thiasa.es>",  // En lugar de onboarding@resend.dev
```

---

## ⚡ Mientras Tanto...

El sistema **YA FUNCIONA** con `onboarding@resend.dev`:
- ✅ Los emails llegarán a `info@thiasa.es`
- ✅ El `replyTo` seguirá siendo el email del usuario
- ✅ Solo el remitente mostrará `onboarding@resend.dev`

---

## 🔍 ¿Dónde Configurar DNS?

Depende de dónde tengas registrado `thiasa.es`:
- **Cloudflare**: Cloudflare Dashboard → DNS → Add record
- **GoDaddy**: My Products → DNS → Manage DNS
- **Namecheap**: Domain List → Manage → Advanced DNS
- **Otro**: Busca la sección de "DNS Management" o "DNS Records"

---

**Fecha**: 12 de enero de 2026  
**Estado Actual**: Usando dominio temporal de Resend (funcional)  
**Próximo Paso**: Verificar dominio thiasa.es en Resend
