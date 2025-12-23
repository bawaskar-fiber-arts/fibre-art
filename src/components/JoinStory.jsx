import Link from 'next/link';

export default function JoinStory() {
    return (
        <section className="py-20 bg-[#D4AF37] relative overflow-hidden">
            {/* Background Texture/Pattern Overlay used in original site logic? or just flat color/gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#C5A059] to-[#E5C168] opacity-100"></div>
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div> {/* Optional noise texture if we had one */}

            <div className="container mx-auto px-4 relative z-10 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-serif mb-6 drop-shadow-sm">
                    Join Our Story
                </h2>

                <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
                    Experience the difference of Bawaskar Fiber Arts — where every piece carries positive energy,
                    enhances your space, and helps create a more beautiful world.
                </p>

                <Link href="#" className="inline-block bg-[#8B4513] hover:bg-[#6D360E] text-white font-medium py-3 px-8 rounded-full shadow-lg transition-transform hover:scale-105">
                    Explore Our Collection
                </Link>
            </div>
        </section>
    );
}
