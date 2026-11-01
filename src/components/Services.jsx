"use client";

import { Crown, Truck, ShieldCheck, PenTool } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: <Crown size={40} className="text-saffron-deep" />,
            title: "Premium Quality",
            desc: "Handcrafted idols with intricate detailing and superior finish."
        },
        {
            icon: <Truck size={40} className="text-saffron-deep" />,
            title: "Worldwide Shipping",
            desc: "Secure packaging and reliable delivery across the globe."
        },
        {
            icon: <PenTool size={40} className="text-saffron-deep" />,
            title: "Customization",
            desc: "Get idols made to your specific requirements and vision."
        },
        {
            icon: <ShieldCheck size={40} className="text-saffron-deep" />,
            title: "Authenticity",
            desc: "Genuine materials and traditional craftsmanship guaranteed."
        }
    ];

    return (
        <section className="py-12 bg-ivory">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-serif text-center text-espresso mb-10">
                    Our Services
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 border border-sand/60 rounded-lg hover:shadow-lg transition-shadow bg-cream">
                            <div className="mb-4 bg-white p-4 rounded-full shadow-sm">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-serif font-bold text-espresso mb-2">{service.title}</h3>
                            <p className="text-sm text-muted leading-relaxed font-light">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
