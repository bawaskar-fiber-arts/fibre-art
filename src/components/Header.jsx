
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Search, MessageCircle, X, Menu, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { PHONE_DISPLAY, PHONE_HREF, whatsappLink } from '@/lib/contact';

// `transparent`: the bar floats over a dark hero (homepage) until the visitor scrolls.
export default function Header({ transparent = false }) {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Our Collection", href: "/collection" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contacts", href: "/contact" },
    ];



    // Track scroll position for the navbar shadow and the floating WhatsApp button.
    // The navbar itself always stays visible (sticky).
    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // See-through only at the very top, and solid while a menu is open so it stays readable.
    const overHero = transparent && scrollY < 10 && !isMobileMenuOpen && !isSearchOpen;
    const iconColor = overHero ? 'text-ivory hover:text-saffron' : 'text-ink hover:text-maroon';

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

            {/* Main Navbar: see-through over the homepage hero, frosted glass everywhere else */}
            <nav
                className={`w-full font-sans sticky top-0 z-40 border-b transition-[background-color,box-shadow,border-color] duration-300
                ${transparent ? '-mb-14 md:-mb-16' : ''}
                ${overHero
                    ? 'bg-gradient-to-b from-black/60 via-black/25 to-transparent border-transparent'
                    : `bg-ivory/75 backdrop-blur-lg backdrop-saturate-150 border-sand/50 ${scrollY > 10 ? 'shadow-md' : ''}`}
                `}
            >
                <div className="h-14 md:h-16 px-4 lg:px-8 flex items-center justify-between gap-4">

                    {/* Left: Mobile Menu & Logo */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <button
                            className={`lg:hidden p-1 -ml-1 transition-colors ${iconColor}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>

                        <Link href="/" className="flex items-center gap-2 relative group">
                            <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
                                <Image src="/logo-mark.png" alt="Bawaskar Fiber Arts logo" fill sizes="40px" className="object-contain" priority />
                            </div>
                            <span className={`text-lg md:text-xl font-serif tracking-tight leading-none flex flex-col transition-colors ${overHero ? 'text-saffron' : 'text-saffron-deep'}`}>
                                Bawaskar
                                <span className={`text-[10px] md:text-xs font-sans tracking-widest uppercase transition-colors ${overHero ? 'text-ivory/80' : 'text-muted'}`}>Fiber Arts</span>
                            </span>
                        </Link>
                    </div>

                    {/* Center: Desktop Nav Links */}
                    <div className={`hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium transition-colors ${overHero ? 'text-ivory' : 'text-ink'}`}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`transition-colors uppercase tracking-wide text-xs xl:text-sm ${overHero ? 'hover:text-saffron' : 'hover:text-maroon'}`}
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
                                className={`w-40 lg:w-48 xl:w-60 border rounded-full py-1.5 pl-4 pr-8 text-sm focus:outline-none transition-all ${overHero
                                    ? 'border-ivory/40 bg-black/20 text-ivory placeholder:text-ivory/70 focus:border-saffron'
                                    : 'border-sand bg-white/60 text-ink focus:border-saffron-deep'}`}
                            />
                            <button onClick={handleSearchClick} aria-label="Search">
                                <Search className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer ${overHero ? 'text-ivory/80 hover:text-saffron' : 'text-muted/70 hover:text-maroon'}`} size={16} />
                            </button>
                        </div>

                        {/* Mobile Search Icon */}
                        <button
                            className={`md:hidden p-1 transition-colors ${iconColor}`}
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            aria-label="Search"
                        >
                            <Search size={22} />
                        </button>

                        {/* WhatsApp: icon on small screens, labelled button on wide screens */}
                        <Link
                            href={whatsappLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Order on WhatsApp"
                            className={`flex items-center gap-2 p-1 xl:p-0 ${overHero ? 'text-green-400 hover:text-green-300' : 'text-green-700 hover:text-green-800'} xl:bg-green-700 xl:hover:bg-green-800 xl:text-white xl:hover:text-white xl:px-4 xl:py-2 xl:rounded-full transition-colors`}
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
                className={`fixed bottom-5 right-5 z-40 ${scrollY > 400 ? 'flex' : 'flex md:hidden'} items-center gap-2 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-xl p-3.5 md:px-5 md:py-3 transition-transform hover:scale-105`}
            >
                <MessageCircle size={24} className="fill-current" />
                <span className="hidden md:inline text-sm font-semibold">Order on WhatsApp</span>
            </Link>
        </>
    );
}
