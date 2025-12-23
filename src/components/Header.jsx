"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Search, User, Heart, ShoppingBag, ChevronRight, ChevronLeft, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div className="w-full flex flex-col font-sans relative">
            {/* Top Banner */}
            <div className="bg-[#D4AF37] text-svastika-brown text-sm font-medium py-2 px-4 flex justify-between items-center z-50">
                <button className="p-1 hover:bg-black/5 rounded-full">
                    <ChevronLeft size={16} />
                </button>
                <span className="tracking-wide text-center flex-1 truncate">Spl. Discounted Prices on 📦 Bulk Orders</span>
                <button className="p-1 hover:bg-black/5 rounded-full">
                    <ChevronRight size={16} />
                </button>
            </div>

            {/* Main Navbar */}
            <nav className="bg-white border-b border-gray-100 flex flex-col sticky top-0 z-40 shadow-sm">

                {/* Upper Nav: Logo & Search & Icons */}
                <div className="px-4 lg:px-12 py-3 flex items-center justify-between gap-4 relative">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 relative group">
                        {/* Ganesha Background Symbol (Subtle) */}
                        <div className="absolute -left-2 -top-2 w-20 h-20 opacity-10 pointer-events-none">
                            <Image src="/ganesha-bg.png" alt="Ganesha" width={80} height={80} className="object-contain" />
                        </div>

                        {/* Logo Icon B */}
                        <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
                            <Image src="/logo-b.png" alt="B Logo" fill className="object-contain" />
                        </div>

                        {/* Brand Text */}
                        <span className="text-xl md:text-2xl font-serif text-[#D4AF37] tracking-tight leading-none">
                            Bawaskar <br /> <span className="text-sm md:text-base text-gray-600 font-sans tracking-widest uppercase">Fiber Arts</span>
                        </span>
                    </Link>

                    {/* Desktop Search Bar (Central) - Only visible if search is NOT expanded? Or distinct style */}
                    <div className={`hidden lg:flex flex-1 max-w-xl mx-8 transition-all duration-300 ${isSearchOpen ? 'scale-105' : ''}`}>
                        <div
                            className="relative w-full"
                            onClick={() => setIsSearchOpen(true)}
                        >
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full border border-gray-300 rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-[#D4AF37] placeholder-gray-400"
                            />
                            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        </div>
                    </div>

                    {/* Common Icons */}
                    <div className="flex items-center gap-4 text-gray-600">
                        <button
                            className="lg:hidden hover:text-[#D4AF37] transition-colors"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            <Search size={22} />
                        </button>
                        <button className="hover:text-[#D4AF37] transition-colors">
                            <User size={22} />
                        </button>
                        <button className="hover:text-[#D4AF37] transition-colors">
                            <Heart size={22} />
                        </button>
                        <button className="hover:text-[#D4AF37] transition-colors relative">
                            <ShoppingBag size={22} />
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">0</span>
                        </button>
                    </div>
                </div>

                {/* Navigation Links (Desktop) */}
                <div className="hidden lg:flex items-center justify-center gap-8 py-3 text-sm font-medium text-gray-700 border-t border-gray-100">
                    <Link href="#" className="hover:text-[#D4AF37] transition-colors uppercase tracking-wide">God Idols</Link>
                    <Link href="#" className="hover:text-[#D4AF37] transition-colors uppercase tracking-wide">Gifting</Link>
                    <Link href="#" className="hover:text-[#D4AF37] transition-colors uppercase tracking-wide">Pooja Essentials</Link>
                    <Link href="#" className="hover:text-[#D4AF37] transition-colors uppercase tracking-wide">Home Decor</Link>
                    <Link href="#" className="hover:text-[#D4AF37] transition-colors uppercase tracking-wide">Support</Link>
                    <Link href="#" className="hover:text-[#D4AF37] transition-colors uppercase tracking-wide">About us</Link>
                </div>

                {/* Mobile Expanded Search Overlay/Area */}
                {isSearchOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-4 z-50 animate-in slide-in-from-top-2 fade-in duration-200">
                        <div className="relative mb-4">
                            <input
                                type="text"
                                placeholder="Search products..."
                                autoFocus
                                className="w-full border border-gray-300 rounded px-4 py-3 text-gray-700 focus:outline-none focus:border-[#D4AF37] pr-10"
                            />
                            <button
                                onClick={() => setIsSearchOpen(false)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
                            >
                                <X size={20} />
                            </button>
                        </div>
                        <div>
                            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Popular Searches</h3>
                            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                                <span className="cursor-pointer hover:text-[#D4AF37] underline decoration-dotted">Wedding Gifts</span>
                                <span className="cursor-pointer hover:text-[#D4AF37] underline decoration-dotted">Kamdhenu</span>
                                <span className="cursor-pointer hover:text-[#D4AF37] underline decoration-dotted">Diwali Gifts</span>
                                <span className="cursor-pointer hover:text-[#D4AF37] underline decoration-dotted">Krishna Hands</span>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </div>
    );
}
