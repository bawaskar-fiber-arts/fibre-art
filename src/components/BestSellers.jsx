"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

// Expanded product list with categories
const products = [
    // Best Sellers (Mixed)
    {
        id: 1,
        name: "Lord Balaji Face Idol - Silver Plated",
        category: "SPIRITUAL (GOD IDOLS)",
        rating: 5.0, reviews: 236, price: 1250.00, originalPrice: 1999.00, discount: "-37%", tag: "BESTSELLER",
        image: "/hero-ganesha.png"
    },
    {
        id: 2,
        name: "Silver plated Kamdhenu Cow with Calf Idol",
        category: "HOME DECOR",
        rating: 5.0, reviews: 87, price: 1299.00, originalPrice: 1999.00, discount: "-35%", tag: "",
        image: "/whatsnew-tortoise.png"
    },
    {
        id: 3,
        name: "Ashtalakshmi Tortoise Idol - Silver Plated",
        category: "HOME DECOR",
        rating: 5.0, reviews: 49, price: 1499.00, originalPrice: 1999.00, discount: "-25%", tag: "TRENDING",
        image: "/whatsnew-tortoise.png"
    },
    {
        id: 4,
        name: "Kamdhenu Cow with Calf Idol - Gold Plated",
        category: "SPIRITUAL (GOD IDOLS)",
        rating: 5.0, reviews: 361, price: 1449.00, originalPrice: 1999.00, discount: "-27%", tag: "",
        image: "/whatsnew-conch.png"
    },
    {
        id: 5,
        name: "Tirupati Balaji Idol - Gold & Silver Plated",
        category: "SPIRITUAL (GOD IDOLS)",
        rating: 5.0, reviews: 89, price: 1549.00, originalPrice: 1999.00, discount: "-22%", tag: "",
        image: "/whatsnew-dashboard.png"
    },
    // New Items
    {
        id: 6,
        name: "Antique Silver Conch Shell (Vamavarti Shankh)",
        category: "HOME DECOR",
        rating: 4.8, reviews: 54, price: 2100.00, originalPrice: 3000.00, discount: "-30%", tag: "NEW",
        image: "/whatsnew-conch.png"
    },
    {
        id: 7,
        name: "Brass Diya Lamp Stand (Pair)",
        category: "POOJA ESSENTIALS",
        rating: 4.9, reviews: 120, price: 3500.00, originalPrice: 5000.00, discount: "-30%", tag: "",
        image: "/hero-diya.png"
    },
    {
        id: 8,
        name: "Zen Buddha Indoor Water Fountain",
        category: "HOME DECOR",
        rating: 4.7, reviews: 32, price: 4200.00, originalPrice: 6000.00, discount: "-30%", tag: "PREMIUM",
        image: "/hero-buddha.png"
    },
    {
        id: 9,
        name: "Lord Shiva Car Dashboard Idol",
        category: "CAR DASHBOARD",
        rating: 5.0, reviews: 200, price: 599.00, originalPrice: 999.00, discount: "-40%", tag: "HOT",
        image: "/whatsnew-dashboard.png"
    },
    {
        id: 10,
        name: "Luxury Corporate Gift Hamper Box",
        category: "GIFTING",
        rating: 4.6, reviews: 15, price: 1800.00, originalPrice: 2500.00, discount: "-28%", tag: "",
        image: "/blog-hampers.png"
    },
    {
        id: 11,
        name: "Handcrafted Pocket Temple (Wooden)",
        category: "POOJA ESSENTIALS",
        rating: 4.9, reviews: 78, price: 899.00, originalPrice: 1499.00, discount: "-40%", tag: "",
        image: "/whatsnew-pocket-temple.png"
    },
    {
        id: 12,
        name: "Premium Diwali Decoration Set",
        category: "FESTIVAL DECOR",
        rating: 4.5, reviews: 40, price: 1200.00, originalPrice: 1800.00, discount: "-33%", tag: "",
        image: "/blog-diwali.png"
    },
    {
        id: 13,
        name: "Premium Brass Ganesha Idol",
        category: "SPIRITUAL (GOD IDOLS)",
        rating: 5.0, reviews: 500, price: 5500.00, originalPrice: 8000.00, discount: "-31%", tag: "MUST HAVE",
        image: "/hero-ganesha.png"
    }
];

export default function BestSellers({ selectedCategory }) {
    // Filter Logic
    const filteredProducts = selectedCategory === "ALL"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <section className="py-16 bg-white transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-10">
                    <h2 className="text-3xl font-serif text-gray-800 border-b-2 border-gray-200 pb-2">
                        {selectedCategory === "ALL" ? "Explore Best Sellers" : `Explore ${selectedCategory}`}
                    </h2>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center text-gray-400 py-10">
                        <p>No products found in this category.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {filteredProducts.map((product) => (
                            <Link key={product.id} href="#" className="group flex flex-col">
                                <div className="relative w-full aspect-square bg-[#F5F5F5] rounded-lg overflow-hidden mb-3 border border-gray-100">
                                    {/* Discount Badge */}
                                    <span className="absolute top-2 left-2 bg-[#D84315] text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10 shadow-sm">
                                        {product.discount}
                                    </span>
                                    {/* Tag Badge */}
                                    {product.tag && (
                                        <span className="absolute top-2 right-2 bg-[#D4AF37] text-white text-[10px] font-bold px-2 py-1 rounded-sm z-10 shadow-sm">
                                            {product.tag}
                                        </span>
                                    )}

                                    {/* Image */}
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500 mix-blend-normal"
                                        // Fallback logic handled by Next.js if src is valid, but here we used mapped images. 
                                        />
                                        {/* If image fails to load or is placeholder text */}
                                        <div className="absolute inset-0 bg-gray-50 -z-10 flex items-center justify-center text-gray-300 text-xs">Loading...</div>
                                    </div>
                                </div>

                                <h3 className="text-sm font-medium text-gray-700 line-clamp-2 group-hover:text-[#D4AF37] transition-colors mb-1 min-h-[40px]">
                                    {product.name}
                                </h3>

                                <div className="flex items-center gap-1 mb-1">
                                    <span className="text-yellow-500 font-bold text-sm">{product.rating}</span>
                                    <div className="flex text-yellow-400">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={12} fill="currentColor" />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-400">({product.reviews})</span>
                                </div>

                                <div className="flex items-center gap-2 mt-auto">
                                    <span className="text-sm font-bold text-gray-900">From ₹ {product.price.toLocaleString('en-IN')}.00</span>
                                    <span className="text-xs text-gray-400 line-through">₹ {product.originalPrice.toLocaleString('en-IN')}.00</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
