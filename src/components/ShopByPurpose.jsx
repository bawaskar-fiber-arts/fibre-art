"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: 1, name: "ALL", image: null }, // Special case for ALL
  { id: 2, name: "GIFTING", image: "/blog-hampers.png" },
  { id: 3, name: "SPIRITUAL (GOD IDOLS)", image: "/hero-ganesha.png" },
  { id: 4, name: "HOME DECOR", image: "/whatsnew-conch.png" },
  { id: 5, name: "POOJA ESSENTIALS", image: "/hero-diya.png" },
  { id: 6, name: "CAR DASHBOARD", image: "/whatsnew-dashboard.png" },
  { id: 7, name: "FESTIVAL DECOR", image: "/blog-diwali.png" },
];

export default function Category({ selectedCategory, onSelectCategory }) {
  return (
    <section className="py-12 bg-[#F9F6F0]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center text-gray-800 mb-10">
          Category
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {categories.map((cat) => (
            <button 
                key={cat.id} 
                onClick={() => onSelectCategory(cat.name)}
                className="group flex flex-col items-center focus:outline-none"
            >
              <div 
                className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md transition-all duration-300 group-hover:-translate-y-1 ${
                    selectedCategory === cat.name ? 'ring-4 ring-[#D4AF37] scale-105' : 'group-hover:shadow-xl'
                }`}
              >
                {cat.name === "ALL" ? (
                    <div className="absolute inset-0 bg-[#D4AF37] flex items-center justify-center text-white font-serif font-bold text-lg">
                        ALL
                    </div>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gray-200"></div> 
                         <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    </>
                )}
              </div>
              <span className={`mt-4 text-xs md:text-sm font-bold tracking-wide transition-colors text-center px-2 ${
                  selectedCategory === cat.name ? 'text-[#D4AF37]' : 'text-gray-700 group-hover:text-[#D4AF37]'
              }`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
