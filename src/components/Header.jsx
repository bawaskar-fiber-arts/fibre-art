
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Search, MessageCircle, X, Menu, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PHONE_DISPLAY, PHONE_HREF, whatsappLink } from '@/lib/contact';

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Our Collection", href: "/collection" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contacts", href: "/contact" },
    ];



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
        <>
            {/* Announcement Bar: what we make + how to reach us */}
            <div className="w-full bg-espresso text-ivory/80 text-[11px] md:text-xs font-sans">
                <div className="px-4 lg:px-8 py-2 flex items-center justify-center md:justify-between gap-4">
                    <p className="hidden md:block tracking-wide">
                        Handcrafted fiber idols &amp; statues · Custom sizes and designs · Shegaon, Maharashtra
                    </p>
                    <a href={PHONE_HREF} className="flex items-center gap-1.5 text-saffron hover:text-saffron-light font-medium tracking-wide transition-colors">
                        <Phone size={12} />
                        Call / WhatsApp: {PHONE_DISPLAY}
                    </a>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`w-full font-sans border-b border-sand/50 sticky top-0 z-40 transition-all duration-300 transform
                ${isVisible ? 'translate-y-0' : '-translate-y-[150%]'}
                ${lastScrollY > 10 ? 'bg-ivory/85 backdrop-blur-md shadow-sm' : 'bg-ivory'} 
                `}
            >
                <div className="px-4 lg:px-8 py-3 flex items-center justify-between gap-4">

                    {/* Left: Mobile Menu & Logo */}
                    <div className="flex items-center gap-4">
                        <button
                            className="lg:hidden p-1 text-ink hover:text-maroon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        <Link href="/" className="flex items-center gap-2 relative group">
                            <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
                                <Image src="/logo-b.png" alt="B Logo" fill className="object-contain" />
                            </div>
                            <span className="text-lg md:text-xl font-serif text-saffron-deep tracking-tight leading-none flex flex-col">
                                Bawaskar
                                <span className="text-[10px] md:text-xs text-muted font-sans tracking-widest uppercase">Fiber Arts</span>
                            </span>
                        </Link>
                    </div>

                    {/* Center: Desktop Nav Links */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-ink">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-maroon transition-colors uppercase tracking-wide text-xs xl:text-sm"
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
                                className="w-40 lg:w-48 xl:w-60 border border-sand rounded-full py-1.5 pl-4 pr-8 text-sm focus:outline-none focus:border-saffron-deep transition-all bg-transparent"
                            />
                            <button onClick={handleSearchClick}>
                                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted/70 hover:text-maroon cursor-pointer" size={16} />
                            </button>
                        </div>

                        {/* Mobile Search Icon */}
                        <button
                            className="md:hidden text-ink hover:text-maroon"
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                        >
                            <Search size={22} />
                        </button>

                        {/* WhatsApp: icon on small screens, labelled button on wide screens */}
                        <Link
                            href={whatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Order on WhatsApp"
                            className="flex items-center gap-2 text-green-700 hover:text-green-800 xl:bg-green-700 xl:hover:bg-green-800 xl:text-white xl:hover:text-white xl:px-4 xl:py-2 xl:rounded-full transition-colors"
                        >
                            <MessageCircle size={22} className="fill-current xl:w-4 xl:h-4" />
                            <span className="hidden xl:inline text-sm font-semibold">Order on WhatsApp</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden absolute top-full left-0 w-full bg-ivory/95 backdrop-blur-md border-t border-sand/60 shadow-lg p-4 flex flex-col gap-4 z-50">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-ink font-medium hover:text-maroon py-2 border-b border-sand/40 last:border-0"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}

                {/* Mobile Search Overlay */}
                {isSearchOpen && (
                    <div className="absolute top-full left-0 w-full bg-ivory/95 backdrop-blur-md shadow-md border-t border-sand/60 p-3 z-50 flex items-center gap-2 md:hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            autoFocus
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onKeyDown={handleSearch}
                            className="flex-1 border border-sand rounded-full px-4 py-2 text-sm focus:outline-none focus:border-saffron-deep bg-transparent"
                        />
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className="p-2 text-muted hover:text-red-500"
                        >
                            <X size={20} />
                        </button>
                    </div>
                )}
            </nav>

            {/* Floating WhatsApp button: always on mobile; on desktop once the header button has scrolled away */}
            <Link
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on WhatsApp"
                className={`fixed bottom-5 right-5 z-40 ${lastScrollY > 400 ? 'flex' : 'flex md:hidden'} items-center gap-2 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-xl p-3.5 md:px-5 md:py-3 transition-transform hover:scale-105`}
            >
                <MessageCircle size={24} className="fill-current" />
                <span className="hidden md:inline text-sm font-semibold">Order on WhatsApp</span>
            </Link>
        </>
    );
}
