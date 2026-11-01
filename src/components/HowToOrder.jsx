import Link from 'next/link';
import { Search, MessageCircle, Truck, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF, whatsappLink } from '@/lib/contact';

const steps = [
    {
        id: 1,
        title: "Choose Your Idol",
        description: "Browse our collection, or send us a photo of the design you have in mind.",
        icon: Search
    },
    {
        id: 2,
        title: "Get a Quote on WhatsApp",
        description: "Tell us the size and finish you want. We confirm the price and making time.",
        icon: MessageCircle
    },
    {
        id: 3,
        title: "Delivered to Your Home",
        description: "Every idol is packed securely and shipped across India and abroad.",
        icon: Truck
    }
];

export default function HowToOrder() {
    return (
        <section className="py-16 bg-ivory">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-saffron-deep uppercase tracking-widest text-sm mb-2">Simple &amp; Personal</p>
                    <h2 className="text-3xl md:text-4xl font-serif text-espresso">How to Order</h2>
                </div>

                <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {steps.map((step) => (
                        <li key={step.id} className="relative flex flex-col items-center text-center bg-white border border-sand/60 rounded-lg p-8 shadow-sm">
                            <span className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-maroon text-ivory text-sm font-bold flex items-center justify-center">
                                {step.id}
                            </span>
                            <div className="mb-4 p-4 rounded-full bg-cream text-saffron-deep">
                                <step.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h3 className="font-serif text-xl text-espresso mb-2">{step.title}</h3>
                            <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                        </li>
                    ))}
                </ol>

                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={whatsappLink()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors"
                    >
                        <MessageCircle size={20} className="fill-current" />
                        Get a Quote on WhatsApp
                    </Link>
                    <a
                        href={PHONE_HREF}
                        className="flex items-center gap-2 border-2 border-espresso text-espresso hover:bg-espresso hover:text-ivory font-semibold py-3 px-8 rounded-full transition-colors"
                    >
                        <Phone size={18} />
                        Call {PHONE_DISPLAY}
                    </a>
                </div>

                <p className="mt-6 text-center text-sm text-muted">
                    Prefer to see it in person? Visit our workshop near Gajanan Maharaj Mandir, Shegaon.
                </p>
            </div>
        </section>
    );
}
