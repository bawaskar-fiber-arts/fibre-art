import nodemailer from "nodemailer";

// Leads from the Contact Us form are emailed to this inbox.
const LEAD_INBOX = process.env.CONTACT_TO || "bawaskarfiberarts@gmail.com";

const escapeHtml = (value) =>
    value.replace(/[&<>"']/g, (ch) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[ch]);

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch {
        return Response.json({ error: "Invalid request." }, { status: 400 });
    }

    // Honeypot: real visitors never see or fill this field, bots usually do.
    if (body.company) {
        return Response.json({ ok: true });
    }

    const name = String(body.name || "").trim().slice(0, 100);
    const phone = String(body.phone || "").trim().slice(0, 20);
    const message = String(body.message || "").trim().slice(0, 2000);

    if (!name || !phone || !message) {
        return Response.json({ error: "Please fill in your name, phone number and message." }, { status: 400 });
    }
    if (!/^[+\d][\d\s-]{6,}$/.test(phone)) {
        return Response.json({ error: "Please enter a valid phone number." }, { status: 400 });
    }

    const { GMAIL_USER, GMAIL_APP_PASSWORD } = process.env;
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
        console.error("Contact form: GMAIL_USER / GMAIL_APP_PASSWORD are not set.");
        return Response.json({ error: "Sorry, we could not send your message right now. Please call or WhatsApp us." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
    });

    const submittedAt = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });
    const waNumber = phone.replace(/\D/g, "").replace(/^(\d{10})$/, "91$1");

    try {
        await transporter.sendMail({
            from: `"Bawaskar Fiber Arts Website" <${GMAIL_USER}>`,
            to: LEAD_INBOX,
            subject: `New enquiry from ${name} (${phone})`,
            text: `New enquiry from the website Contact Us form\n\nName: ${name}\nPhone: ${phone}\nReceived: ${submittedAt}\n\nMessage:\n${message}\n`,
            html: `
                <h2 style="margin:0 0 12px">New enquiry from the website</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Phone:</strong> <a href="tel:${escapeHtml(phone)}">${escapeHtml(phone)}</a>
                   &nbsp;·&nbsp; <a href="https://wa.me/${waNumber}">Reply on WhatsApp</a></p>
                <p><strong>Received:</strong> ${submittedAt}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space:pre-line">${escapeHtml(message)}</p>
            `,
        });
    } catch (error) {
        console.error("Contact form: failed to send email", error);
        return Response.json({ error: "Sorry, we could not send your message right now. Please call or WhatsApp us." }, { status: 502 });
    }

    return Response.json({ ok: true });
}
