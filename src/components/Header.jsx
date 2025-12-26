
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Search, MessageCircle, X, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [marqueeIndex, setMarqueeIndex] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const marqueeMessages = [
        "Spl. Discounted Prices on 📦 Bulk Orders",
        "Free Shipping on Orders Above ₹999",
        "New Festivale Collection is Live! ✨",
        "Customization Available on Selected Idols"
    ];

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Our Collection", href: "/collection" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contacts", href: "/contact" },
    ];

    // Marquee Timer
    useEffect(() => {
        const interval = setInterval(() => {
            setMarqueeIndex((prev) => (prev + 1) % marqueeMessages.length);
        }, 3000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, []);

    // Scroll Logic
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            setIsSearchOpen(false);
            router.push(`/collection?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    const handleSearchClick = () => {
        setIsSearchOpen(false);
        router.push(`/collection?search=${encodeURIComponent(searchTerm)}`);
    }

    return (
        <div className="w-full flex flex-col font-sans relative">
            {/* Top Banner with Fade Transition */}
            <div className={`bg-[#D4AF37] text-svastika-brown text-sm font-medium py-2 relative z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="flex justify-center items-center h-6 overflow-hidden relative">
                    {marqueeMessages.map((msg, index) => (
                        <span
                            key={index}
                            className={`absolute transition-all duration-500 transform ${index === marqueeIndex
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                                }`}
                        >
                            {msg}
                        </span>
                    ))}
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`border-b border-gray-100/50 sticky top-0 z-40 transition-all duration-300 transform 
                ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}
                ${lastScrollY > 10 ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'} 
                `}
            >
                <div className="px-4 lg:px-8 py-3 flex items-center justify-between gap-4">

                    {/* Left: Mobile Menu & Logo */}
                    <div className="flex items-center gap-4">
                        <button
                            className="lg:hidden p-1 text-gray-700 hover:text-[#D4AF37]"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        <Link href="/" className="flex items-center gap-2 relative group">
                            <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
                                <Image src="/logo-b.png" alt="B Logo" fill className="object-contain" />
                            </div>
                            <span className="text-lg md:text-xl font-serif text-[#D4AF37] tracking-tight leading-none flex flex-col">
                                Bawaskar
                                <span className="text-[10px] md:text-xs text-gray-600 font-sans tracking-widest uppercase">Fiber Arts</span>
                            </span>
                        </Link>
                    </div>

                    {/* Center: Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-gray-700">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-[#D4AF37] transition-colors uppercase tracking-wide text-xs xl:text-sm"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right: Search & WhatsApp */}
                    <div className="flex items-center gap-4">
                        {/* Compact Search Bar (Desktop) */}
                        <div className="hidden md:flex items-center relative">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onKeyDown={handleSearch}
                                className="w-40 lg:w-48 xl:w-60 border border-gray-300 rounded-full py-1.5 pl-4 pr-8 text-sm focus:outline-none focus:border-[#D4AF37] transition-all bg-transparent"
                            />
                            <button onClick={handleSearchClick}>
                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#D4AF37] cursor-pointer" size={16} />
                            </button>
                        </div>

                        {/* Mobile Search Icon */}
                        <button
                            className="md:hidden text-gray-700 hover:text-[#D4AF37]"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            <Search size={22} />
                        </button>

                        {/* WhatsApp Icon */}
                        <Link href="https://wa.me/918554875216" target="_blank" className="text-green-600 hover:text-green-700 transition-colors relative">
                            <MessageCircle size={22} className="fill-current" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg p-4 flex flex-col gap-4 z-50">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 font-medium hover:text-[#D4AF37] py-2 border-b border-gray-50 last:border-0"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}

                {/* Mobile Search Overlay */}
                {isSearchOpen && (
                    <div className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md border-t border-gray-100 p-3 z-50 flex items-center gap-2 md:hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            autoFocus
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearch}
                            className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-[#D4AF37] bg-transparent"
                        />
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="p-2 text-gray-500 hover:text-red-500"
                        >
                            <X size={20} />
                        </button>
                    </div>
                )}
            </nav>
        </div>
    );
}
