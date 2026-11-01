"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Image from "next/image";
import { useState, useEffect } from "react";
import { fetchAboutData } from "@/lib/firestoreService";

export default function AboutPage() {
    const [aboutData, setAboutData] = useState({ image: '/workshop.png', title: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadAboutData() {
            try {
                const data = await fetchAboutData();
                setAboutData(data);
            } catch (error) {
                console.error("Error loading about data:", error);
            } finally {
                setLoading(false);
            }
        }
        loadAboutData();
    }, []);

    return (
        <main className="min-h-screen bg-ivory">
            <Header />

            {/* Intro Hero */}
            <section className="relative py-20 bg-espresso text-ivory text-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image src="/hero-bg.png" alt="bg" fill className="object-cover" />
                </div>
                <div className="relative z-10 container mx-auto px-4">
                    <h1 className="font-serif text-4xl md:text-6xl text-saffron mb-4">About Us</h1>
                    <p className="text-lg font-light tracking-wide max-w-2xl mx-auto">
                        Preserving heritage through art, crafting devotion with passion.
                    </p>
                </div>
            </section>

            {/* Our Journey */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2 relative h-[400px]">
                        {loading ? (
                            <div className="flex justify-center items-center h-full">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-saffron"></div>
                            </div>
                        ) : (
                            <>
                                <Image
                                    src={aboutData.image}
                                    alt="Our Journey"
                                    fill
                                    className="object-cover rounded-lg shadow-xl"
                                />
                                {/* Decorative element */}
                                <div className="absolute -z-10 top-10 -left-10 w-full h-full bg-saffron-light rounded-full blur-[80px] opacity-60"></div>
                            </>
                        )}
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-serif text-espresso mb-6">Our Journey</h2>
                        {loading ? (
                            <div className="animate-pulse space-y-4">
                                <div className="h-4 bg-sand rounded w-full"></div>
                                <div className="h-4 bg-sand rounded w-5/6"></div>
                                <div className="h-4 bg-sand rounded w-full"></div>
                            </div>
                        ) : aboutData.title ? (
                            <p className="text-muted leading-relaxed whitespace-pre-line">{aboutData.title}</p>
                        ) : (
                            <>
                                <p className="text-muted leading-relaxed mb-4">
                                    Bawaskar Fiber Arts began with a simple mission: to bring the divine presence into homes through exquisitely crafted idols. What started as a small workshop has grown into a renowned name in premium fiber and metal art.
                                </p>
                                <p className="text-muted leading-relaxed">
                                    Inspired by the rich cultural heritage of India, our artisans pour their heart and soul into every creation. From the majestic statues of Chhatrapati Shivaji Maharaj to the serene idols of Lord Ganesha, each piece tells a story of devotion, tradition, and artistic excellence.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Our Process */}
            <section className="py-16 bg-ivory">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif text-center text-espresso mb-12">The Art of Creation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                <Image src="/all_category_bg.png" alt="Sketching" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-saffron-deep mb-2">1. The Vision</h3>
                            <p className="text-muted leading-relaxed font-light">Every masterpiece begins with a prayer and a sketch. Our artists visualize the divine form, ensuring strict adherence to Shilpa Shastra.</p>
                        </div>
                        <div className="text-center">
                            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                <Image src="/workshop.png" alt="Molding" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-saffron-deep mb-2">2. Handcrafting</h3>
                            <p className="text-muted leading-relaxed font-light">Using clay, wax, and fiber, the idol takes shape. Hands that have shaped thousands of deities work with precision and devotion.</p>
                        </div>
                        <div className="text-center">
                            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                                <Image src="/vitthal_rukhmini.png" alt="Finishing" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                            <h3 className="text-xl font-serif font-bold text-saffron-deep mb-2">3. The Soul Prana</h3>
                            <p className="text-muted leading-relaxed font-light">The final touches—painting the eyes, polishing the ornaments—breathe life into the idol, making it ready for your home.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <Services />

            {/* Vision */}
            <section className="py-16 bg-cream">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-serif text-espresso mb-8">Our Vision</h2>
                    <p className="max-w-3xl mx-auto text-muted leading-relaxed text-lg">
                        To becomes the global torchbearer of Indian craftsmanship, ensuring that our rich legacy of art and spirituality adorns homes worldwide. We strive to blend traditional aesthetics with modern durability, ensuring our culture stands the test of time.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
