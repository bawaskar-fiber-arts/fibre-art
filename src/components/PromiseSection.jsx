import { HeartHandshake, Palette, Headset, Package } from 'lucide-react';

const promises = [
    {
        id: 1,
        title: "100% Handcrafted",
        description: "Made by hand and quality-checked in our Shegaon workshop.",
        icon: HeartHandshake
    },
    {
        id: 2,
        title: "Custom Size & Design",
        description: "Choose the size, finish and colours you want.",
        icon: Palette
    },
    {
        id: 3,
        title: "Support 24/6",
        description: "Talk to us on WhatsApp or phone, anytime.",
        icon: Headset
    },
    {
        id: 4,
        title: "Safe Packaging",
        description: "Packed securely so your idol arrives without damage.",
        icon: Package
    }
];

// Compact trust strip shown right below the hero, so the reasons to buy are seen first.
export default function PromiseSection() {
    return (
        <section className="bg-cream border-y border-sand/60">
            <h2 className="sr-only">Bawaskar&apos;s Promise</h2>
            <div className="container mx-auto px-4 py-5 md:py-7 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {promises.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                        <div className="shrink-0 p-2.5 rounded-full bg-ivory text-saffron-deep">
                            <item.icon size={24} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="font-serif text-sm md:text-base text-espresso leading-tight">{item.title}</h3>
                            <p className="hidden md:block text-xs text-muted leading-snug mt-0.5">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
