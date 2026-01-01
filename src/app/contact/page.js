"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="py-16 md:py-24 bg-[#Fdfcf8]">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl md:text-5xl font-serif text-center text-gray-800 mb-12">Contact Us</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                        {/* Contact Info */}
                        <div className="flex flex-col gap-8 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800 mb-4 font-serif">Get in Touch</h2>
                                <p className="text-gray-500 text-sm">We'd love to hear from you. Reach out for customizations, bulk orders, or any queries.</p>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#D4AF37]/10 p-3 rounded-full text-[#D4AF37]"><Phone size={24} /></div>
                                <div>
                                    <p className="font-bold text-gray-800">Phone</p>
                                    <a href="tel:+918554875216" className="text-gray-600 hover:text-[#D4AF37]">8554875216</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#D4AF37]/10 p-3 rounded-full text-[#D4AF37]"><Mail size={24} /></div>
                                <div>
                                    <p className="font-bold text-gray-800">Email</p>
                                    <a href="mailto:bawaskarfiberarts1997@gmail.com" className="text-gray-600 hover:text-[#D4AF37]">bawaskarfiberarts1997@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-[#D4AF37]/10 p-3 rounded-full text-[#D4AF37]"><MapPin size={24} /></div>
                                <div>
                                    <p className="font-bold text-gray-800">Workshop & Store</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">1) Near Vighnaharta Hotel, Khamgaon Road, Shegaon, Maharashtra, 444203<br />2) Near Gajanan Maharaj Mandir, Paschim Gate, Kumbhar Wada, Shegaon, Maharashtra, 444203</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <form className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 font-serif">Send Message</h2>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Name</label>
                                <input type="text" placeholder="Your Name" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#D4AF37]" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Phone</label>
                                <input type="tel" placeholder="Your Phone Number" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#D4AF37]" />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea rows="4" placeholder="How can we help you?" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-[#D4AF37]"></textarea>
                            </div>

                            <button className="bg-black text-white py-3 rounded hover:bg-[#D4AF37] transition-colors font-medium mt-2">
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Map Section */}
                    <div className="mt-16 w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden shadow-md">
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
                        <h2 className="text-2xl md:text-3xl font-serif text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-800 mb-2">Do you ship internationally?</h3>
                                <p className="text-gray-600">Yes, we provide secure international shipping to over 20 countries. Shipping rates are calculated at checkout.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-800 mb-2">Can I customize an idol?</h3>
                                <p className="text-gray-600">Absolutely! We specialize in custom orders. Please contact us via WhatsApp or the form above with your requirements.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                                <h3 className="font-bold text-gray-800 mb-2">What materials do you use?</h3>
                                <p className="text-gray-600">We use high-quality fiber, bronze, brass, and marble dust to ensure durability and intricate detailing in every piece.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
