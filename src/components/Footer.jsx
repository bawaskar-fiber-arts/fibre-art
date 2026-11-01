import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso text-ivory/80 pt-16 pb-8 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative">

          {/* Column 1: Customer Service */}
          <div>
            <h3 className="font-serif text-lg text-saffron mb-6 font-semibold">Customer Service</h3>
            <ul className="flex flex-col gap-3 text-sm font-medium">
              <li><Link href="/contact" className="hover:text-saffron transition-colors">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-saffron transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-saffron transition-colors">Gallery</Link></li>
              <li><Link href="/collection" className="hover:text-saffron transition-colors">Collection</Link></li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg text-saffron mb-6 font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-3 text-sm font-medium">
              <li><Link href="/collection?category=SPIRITUAL" className="hover:text-saffron transition-colors">God Idols</Link></li>
              <li><Link href="/collection?category=HOME%20DECOR" className="hover:text-saffron transition-colors">Home Decor</Link></li>
              <li><Link href="/collection?category=GIFTING" className="hover:text-saffron transition-colors">Gifting</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="font-serif text-lg text-saffron mb-6 font-semibold">Contact Us</h3>
            <ul className="flex flex-col gap-3 text-sm font-medium">
              <li>Phone: 8554875216</li>
              <li>bawaskarfiberarts@gmail.com</li>
              <li className="leading-relaxed">Workshop store:<br />
                1) Near Vighnaharta Hotel, Khamgaon Road, Shegaon, Maharashtra, 444203<br />
                2) Near Gajanan Maharaj Mandir, Paschim Gate, Kumbhar Wada, Shegaon, Maharashtra, 444203</li>
            </ul>
          </div>

          {/* Column 4: Socials */}
          <div>
            <h3 className="font-serif text-lg text-saffron mb-6 font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="#" className="bg-ivory/10 p-2 rounded-full hover:bg-saffron hover:text-espresso transition-colors"><Facebook size={18} /></Link>
              <Link href="https://www.instagram.com/murtikar_ashish_bawaskar?igsh=MTZubzhnYnd5c292eA==" target="_blank" rel="noopener noreferrer" className="bg-ivory/10 p-2 rounded-full hover:bg-saffron hover:text-espresso transition-colors"><Instagram size={18} /></Link>
              <Link href="#" className="bg-ivory/10 p-2 rounded-full hover:bg-saffron hover:text-espresso transition-colors"><Twitter size={18} /></Link>
            </div>

            {/* Floating Scroll Top Button */}
            <button
              onClick={scrollToTop}
              className="absolute right-0 bottom-0 md:-right-4 bg-saffron hover:bg-saffron-light text-espresso p-3 rounded shadow-lg transition-transform hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-ivory/15 pt-8 text-xs font-medium text-ivory/60 text-center md:text-left">
          <p>
            &copy; {new Date().getFullYear()} Bawaskar Fiber Arts | <span className="hidden md:inline">Crafting Devotion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
