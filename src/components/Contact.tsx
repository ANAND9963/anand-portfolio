"use client"

import { useState } from "react"

export function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("sending")

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })

            const data = await res.json()

            if (res.ok && data.success) {
                setStatus("sent")
                setForm({ name: "", email: "", message: "" })
            } else {
                alert(data.error || "Failed to send message")
                setStatus("error")
            }
        } catch (err) {
            console.error(err)
            setStatus("error")
        }
    }


    return (
        <section id="contact" className="container mt-16 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Me</h2>
            <form onSubmit={handleSubmit} className="card p-6 space-y-4 max-w-xl">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 dark:border-gray-700 p-3"
                ></textarea>

                <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary"
                >
                    {status === "sending"
                        ? "Sending..."
                        : status === "sent"
                            ? "Sent ✅"
                            : status === "error"
                                ? "Error ❌"
                                : "Send"}
                </button>
            </form>
        </section>
    )
}
