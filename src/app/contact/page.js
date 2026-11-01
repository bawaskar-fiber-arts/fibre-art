"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [status, setStatus] = useState("idle"); // idle | sending | sent | error
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        setStatus("sending");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Object.fromEntries(new FormData(form))),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
            form.reset();
            setStatus("sent");
        } catch (error) {
            setErrorMessage(error.message);
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-ivory">
            <Header />

            <section className="py-16 md:py-24 bg-cream">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-serif text-center text-espresso mb-12">Contact Us</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        {/* Contact Info */}
                        <div className="flex flex-col gap-8 bg-white p-8 rounded-lg shadow-sm border border-sand/60">
                            <div>
                                <h2 className="text-xl font-bold text-espresso mb-4 font-serif">Get in Touch</h2>
                                <p className="text-muted text-sm">We&apos;d love to hear from you. Reach out for customizations, bulk orders, or any queries.</p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-saffron-light/50 p-3 rounded-full text-saffron-deep"><Phone size={24} /></div>
                                <div>
                                    <p className="font-bold text-espresso">Phone</p>
                                    <a href="tel:+918554875216" className="text-muted hover:text-maroon">8554875216</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-saffron-light/50 p-3 rounded-full text-saffron-deep"><Mail size={24} /></div>
                                <div>
                                    <p className="font-bold text-espresso">Email</p>
                                    <a href="mailto:bawaskarfiberarts@gmail.com" className="text-muted hover:text-maroon">bawaskarfiberarts@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-saffron-light/50 p-3 rounded-full text-saffron-deep"><MapPin size={24} /></div>
                                <div>
                                    <p className="font-bold text-espresso">Workshop & Store</p>
                                    <p className="text-muted text-sm leading-relaxed">1) Near Vighnaharta Hotel, Khamgaon Road, Shegaon, Maharashtra, 444203<br />2) Near Gajanan Maharaj Mandir, Paschim Gate, Kumbhar Wada, Shegaon, Maharashtra, 444203</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        {status === "sent" ? (
                            <div className="flex flex-col items-center text-center gap-4 bg-white p-8 rounded-lg shadow-sm border border-sand/60" role="status">
                                <CheckCircle2 size={48} className="text-green-700" />
                                <h2 className="text-xl font-bold text-espresso font-serif">Thank you! Your message has been sent.</h2>
                                <p className="text-muted text-sm">We will call you back soon on the number you shared.</p>
                                <button
                                    type="button"
                                    onClick={() => setStatus("idle")}
                                    className="text-sm text-maroon underline underline-offset-4 hover:text-maroon-dark"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-sm border border-sand/60">
                            <h2 className="text-xl font-bold text-espresso mb-2 font-serif">Send Message</h2>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="contact-name" className="text-sm font-medium text-ink">Name</label>
                                <input id="contact-name" name="name" type="text" required maxLength={100} autoComplete="name" placeholder="Your Name" className="border border-sand rounded px-4 py-2 focus:outline-none focus:border-saffron-deep" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="contact-phone" className="text-sm font-medium text-ink">Phone</label>
                                <input id="contact-phone" name="phone" type="tel" required maxLength={20} pattern="[+0-9][0-9\s\-]{6,}" title="Please enter a valid phone number" autoComplete="tel" placeholder="Your Phone Number" className="border border-sand rounded px-4 py-2 focus:outline-none focus:border-saffron-deep" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="contact-message" className="text-sm font-medium text-ink">Message</label>
                                <textarea id="contact-message" name="message" rows="4" required maxLength={2000} placeholder="How can we help you?" className="border border-sand rounded px-4 py-2 focus:outline-none focus:border-saffron-deep"></textarea>
                            </div>

                            {/* Honeypot for spam bots: hidden from real visitors */}
                            <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

                            {status === "error" && (
                                <p className="text-sm text-maroon" role="alert">{errorMessage}</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="bg-maroon text-ivory py-3 rounded hover:bg-maroon-dark transition-colors font-medium mt-2 disabled:opacity-60 disabled:cursor-wait"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>
                        </form>
                        )}
                    </div>

                    {/* Map Section */}
                    <div className="mt-16 w-full h-[300px] md:h-[400px] bg-sand rounded-lg overflow-hidden shadow-md">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3746.123456789012!2d76.6989876!3d20.793617800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd745c11090332f%3A0x6291a8264775d714!2sBawaskar%20Fiber%20Arts!5e0!3m2!1sen!2sin!4v1735714497000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    {/* FAQ Section */}
                    <div className="mt-16 max-w-3xl mx-auto">
                        <h2 className="text-2xl md:text-3xl font-serif text-center text-espresso mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-sand/60">
                                <h3 className="font-bold text-espresso mb-2">Do you ship internationally?</h3>
                                <p className="text-muted">Yes, we provide secure international shipping to over 20 countries. Shipping rates are calculated at checkout.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-sand/60">
                                <h3 className="font-bold text-espresso mb-2">Can I customize an idol?</h3>
                                <p className="text-muted">Absolutely! We specialize in custom orders. Please contact us via WhatsApp or the form above with your requirements.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-sand/60">
                                <h3 className="font-bold text-espresso mb-2">What materials do you use?</h3>
                                <p className="text-muted">We use high-quality fiber, bronze, brass, and marble dust to ensure durability and intricate detailing in every piece.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
