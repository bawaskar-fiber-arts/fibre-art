import Link from 'next/link';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#A68B51] text-[#F9F6F0] pt-16 pb-8 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 relative">

          {/* Column 1: Customer Service */}
          <div>
            <h3 className="font-serif text-lg text-[#2B1B17] mb-6 font-semibold">Customer Service & FAQ</h3>
            <ul className="flex flex-col gap-3 text-sm font-light">
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Track Order</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Frequently Asked Questions (FAQs)</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Return & Refund Policy</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Contact us</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Buyback Program</Link></li>
            </ul>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="font-serif text-lg text-[#2B1B17] mb-6 font-semibold">About</h3>
            <ul className="flex flex-col gap-3 text-sm font-light">
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">About Bawaskar Fiber Arts</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Sustainability & Impact</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Jobs & Career</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Our Blog</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Column 3: Popular Now */}
          <div>
            <h3 className="font-serif text-lg text-[#2B1B17] mb-6 font-semibold">Popular Now</h3>
            <ul className="flex flex-col gap-3 text-sm font-light">
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Traditional Wedding Gifts</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Housewarming Gifts</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Wedding Return Gifts</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Car Dashboard Idols</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Corporate Gifts</Link></li>
              <li><Link href="#" className="hover:text-[#2B1B17] transition-colors">Radha Krishna Gifts For Marriage</Link></li>
            </ul>
          </div>

          {/* Column 4: Our Store */}
          <div>
            <h3 className="font-serif text-lg text-[#2B1B17] mb-6 font-semibold">Our store</h3>
            <p className="text-sm font-light mb-4 leading-relaxed">
              For any suggestions, queries or complaints please contact us at:
            </p>
            <div className="text-sm font-medium mb-6">
              <p>+91 9429690080</p>
              <p>contact@bawaskar.in</p>
            </div>

            <div className="flex gap-4">
              <Link href="#" className="bg-[#7D6636] p-2 rounded-full hover:bg-[#5C4B25] transition-colors"><div className="w-4 h-4 flex items-center justify-center font-bold">P</div></Link>
              <Link href="#" className="bg-[#7D6636] p-2 rounded-full hover:bg-[#5C4B25] transition-colors"><Facebook size={16} /></Link>
              <Link href="#" className="bg-[#7D6636] p-2 rounded-full hover:bg-[#5C4B25] transition-colors"><Instagram size={16} /></Link>
              <Link href="#" className="bg-[#7D6636] p-2 rounded-full hover:bg-[#5C4B25] transition-colors"><Twitter size={16} /></Link>
              <Link href="#" className="bg-[#7D6636] p-2 rounded-full hover:bg-[#5C4B25] transition-colors"><Linkedin size={16} /></Link>
              <Link href="#" className="bg-[#7D6636] p-2 rounded-full hover:bg-[#5C4B25] transition-colors"><Youtube size={16} /></Link>
            </div>

            {/* Floating Scroll Top Button (positioned relative to container or fixed) */}
            <button
              onClick={scrollToTop}
              className="absolute right-0 bottom-0 md:-right-4 bg-[#7D4E24] hover:bg-[#5D3A1B] text-white p-3 rounded shadow-lg transition-transform hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#BCA673] pt-8 text-xs font-light text-[#2B1B17]/80">
          <p>
            &copy; Bawaskar Fiber Arts | Made with <span className="text-red-600">❤</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
