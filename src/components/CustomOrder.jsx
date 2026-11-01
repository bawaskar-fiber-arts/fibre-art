import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';
import { PHONE_DISPLAY, PHONE_HREF, whatsappLink } from '@/lib/contact';

const CUSTOM_MESSAGE = "Hello Bawaskar Fiber Arts, I would like a custom idol made. Here is my idea:";

export default function CustomOrder() {
    return (
        <section className="py-20 relative overflow-hidden bg-gradient-to-r from-maroon-dark via-maroon to-maroon-dark">
            <div className="container mx-auto px-4 relative z-10 text-center text-ivory">
                <p className="text-gold-light uppercase tracking-widest text-sm mb-3">Custom Orders</p>
                <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6 drop-shadow-sm">
                    Have a Design in Mind?
                </h2>

                <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed text-ivory/90">
                    Send us a photo or describe your idea. Our artisans will craft it in the size, finish
                    and colours you want — for your home, temple, mandal or as a gift.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href={whatsappLink(CUSTOM_MESSAGE)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-gold hover:bg-gold-light text-espresso font-semibold py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105"
                    >
                        <MessageCircle size={20} />
                        Discuss on WhatsApp
                    </Link>
                    <a
                        href={PHONE_HREF}
                        className="flex items-center gap-2 border-2 border-ivory/70 text-ivory hover:bg-ivory hover:text-maroon font-semibold py-3 px-8 rounded-full transition-colors"
                    >
                        <Phone size={18} />
                        Call {PHONE_DISPLAY}
                    </a>
                </div>
            </div>
        </section>
    );
}
