import Image from 'next/image';

const items = [
    {
        id: 1,
        title: "Home Decor",
        subtitle: "Auspicious energy that blesses every home",
        image: "/whatsnew-conch.png",
        size: "large"
    },
    {
        id: 2,
        title: "Car Dashboard Idol",
        subtitle: "Symbol of strength, faith, protection",
        image: "/whatsnew-dashboard.png",
        size: "large"
    },
    {
        id: 3,
        title: "Wall Frame",
        subtitle: "Eternal love captured in art",
        image: "/whatsnew-wallframe.png",
        size: "small"
    },
    {
        id: 4,
        title: "Animal Decor",
        subtitle: "Touch of charm for every space",
        image: "/whatsnew-tortoise.png",
        size: "small"
    },
    {
        id: 5,
        title: "Pocket Temple",
        subtitle: "Carry blessings and peace wherever you go",
        image: "/whatsnew-pocket-temple.png",
        size: "medium" // This one spans 2 cols in the reference screenshot
    }
];

export default function WhatsNew() {
    return (
        <section className="py-16 bg-[#FAF9F6]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-serif text-center text-gray-800 mb-12">
                    What's new on Bawaskar
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Top Row: 2 Large Cards */}
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {items.slice(0, 2).map((item) => (
                            <div key={item.id} className="relative group overflow-hidden rounded-xl h-[300px] md:h-[400px]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 text-center">
                                    <h3 className="text-white text-2xl font-serif mb-1">{item.title}</h3>
                                    <p className="text-white/80 text-sm font-light">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column / Side Stack */}
                    <div className="lg:col-span-1 grid grid-cols-1 gap-6">
                        {items.slice(2, 4).map((item) => (
                            <div key={item.id} className="relative group overflow-hidden rounded-xl h-[250px] md:h-[190px]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4 text-center">
                                    <h3 className="text-white text-xl font-serif mb-1">{item.title}</h3>
                                    <p className="text-white/80 text-xs font-light">{item.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Full Width Card (Pocket Temple) */}
                    <div className="lg:col-span-3 relative group overflow-hidden rounded-xl h-[300px] md:h-[350px]">
                        <Image
                            src={items[4].image}
                            alt={items[4].title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/70 flex flex-col justify-center items-center p-8 text-center">
                            <h3 className="text-white text-3xl font-serif mb-2">{items[4].title}</h3>
                            <p className="text-white/90 text-lg font-light">{items[4].subtitle}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
