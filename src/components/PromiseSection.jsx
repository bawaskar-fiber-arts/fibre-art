import { HeartHandshake, Palette, Headset, Package } from 'lucide-react';

const promises = [
    {
        id: 1,
        title: "Handcrafted with Care",
        description: "Handcrafted and quality-checked for perfection.",
        icon: HeartHandshake
    },
    {
        id: 2,
        title: "Customizable for You",
        description: "Personalize the product to match your style and preference.",
        icon: Palette
    },
    {
        id: 3,
        title: "Support That Cares",
        description: "Reach out to us anytime, 24/6, for dedicated assistance.",
        icon: Headset
    },
    {
        id: 4,
        title: "Secure Packaging",
        description: "Perfect packing that keeps your product safe from damage.",
        icon: Package
    }
];

export default function PromiseSection() {
    return (
        <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif text-center text-gray-800 mb-12">
                    Bawaskar's Promise
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {promises.map((item) => (
                        <div key={item.id} className="flex gap-4 items-start p-4 hover:shadow-sm rounded-lg transition-shadow">
                            <div className="shrink-0 p-3 rounded-full bg-[#FAF9F6] text-[#D4AF37]">
                                <item.icon size={28} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif text-lg text-gray-800 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
