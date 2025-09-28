import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json()

        // ✅ Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { success: false, error: "All fields are required" },
                { status: 400 }
            )
        }

        if (!isValidEmail(email)) {
            return NextResponse.json(
                { success: false, error: "Invalid email address" },
                { status: 400 }
            )
        }

        if (message.length < 10) {
            return NextResponse.json(
                { success: false, error: "Message is too short (min 10 chars)" },
                { status: 400 }
            )
        }

        // ✅ Mail transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL_USER, // Gmail
                pass: process.env.GMAIL_PASS, // App Password
            },
        })

        // ✅ Send mail
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER,
            subject: `Portfolio Message from ${name}`,
            text: `From: ${name} <${email}>\n\n${message}`,
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error("Email send error:", error)
        return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
    }
}
