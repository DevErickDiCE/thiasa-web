import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
    try {
        const { name, email, phone, message } = await request.json();

        // Validación básica
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Por favor completa todos los campos requeridos' },
                { status: 400 }
            );
        }

        // Validar formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Por favor ingresa un email válido' },
                { status: 400 }
            );
        }

        // Configurar el transporter de nodemailer con SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || '465'),
            secure: true, // true para puerto 465, false para otros puertos
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Verificar la conexión SMTP
        await transporter.verify();

        // Configurar el contenido del email
        const mailOptions = {
            from: process.env.SMTP_FROM,
            to: process.env.SMTP_TO,
            subject: `Nuevo mensaje de contacto - ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            line-height: 1.6;
                            color: #333;
                        }
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                            background-color: #f8f9fa;
                        }
                        .header {
                            background: linear-gradient(135deg, #00D9FF 0%, #0099FF 100%);
                            color: white;
                            padding: 20px;
                            border-radius: 10px 10px 0 0;
                            text-align: center;
                        }
                        .content {
                            background: white;
                            padding: 30px;
                            border-radius: 0 0 10px 10px;
                            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        }
                        .field {
                            margin-bottom: 20px;
                        }
                        .label {
                            font-weight: bold;
                            color: #0099FF;
                            text-transform: uppercase;
                            font-size: 12px;
                            letter-spacing: 1px;
                            margin-bottom: 5px;
                        }
                        .value {
                            color: #333;
                            font-size: 16px;
                        }
                        .message-box {
                            background: #f8f9fa;
                            padding: 15px;
                            border-radius: 8px;
                            border-left: 4px solid #00D9FF;
                            margin-top: 10px;
                        }
                        .footer {
                            text-align: center;
                            margin-top: 20px;
                            color: #666;
                            font-size: 12px;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0;">Nuevo Mensaje de Contacto</h1>
                            <p style="margin: 5px 0 0 0;">THIASA - Reformas Integrales</p>
                        </div>
                        <div class="content">
                            <div class="field">
                                <div class="label">Nombre</div>
                                <div class="value">${name}</div>
                            </div>
                            
                            <div class="field">
                                <div class="label">Email</div>
                                <div class="value"><a href="mailto:${email}">${email}</a></div>
                            </div>
                            
                            ${phone ? `
                                <div class="field">
                                    <div class="label">Teléfono</div>
                                    <div class="value"><a href="tel:${phone}">${phone}</a></div>
                                </div>
                            ` : ''}
                            
                            <div class="field">
                                <div class="label">Mensaje</div>
                                <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
                            </div>
                            
                            <div class="footer">
                                <p>Este mensaje fue enviado desde el formulario de contacto de thiasa.es</p>
                                <p>Fecha: ${new Date().toLocaleString('es-ES', {
                timeZone: 'Europe/Madrid',
                dateStyle: 'full',
                timeStyle: 'short'
            })}</p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `,
            text: `
Nuevo mensaje de contacto de THIASA

Nombre: ${name}
Email: ${email}
${phone ? `Teléfono: ${phone}` : ''}

Mensaje:
${message}

---
Enviado desde thiasa.es el ${new Date().toLocaleString('es-ES', { timeZone: 'Europe/Madrid' })}
            `.trim(),
        };

        // Enviar el email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Mensaje enviado correctamente' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error al enviar el email:', error);
        return NextResponse.json(
            { error: 'Error al enviar el mensaje. Por favor intenta de nuevo o contacta por WhatsApp.' },
            { status: 500 }
        );
    }
}
