"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    id: 1,
    title1: "White",
    title2: "Horse",
    title3: "Antique",
    subtitle: "Statue",
    desc: "Showpiece for Home Decor",
    image: "/horse-statue.png",
    bgGradient: "from-[#5C4033]/90 via-[#4A3228]/80 to-transparent",
    bgColor: "bg-[#2B1B17]",
    titleColor: "text-[#D4AF37]",
    accentColor: "text-[#C5A059]/70",
    scriptColor: "text-white"
  },
  {
    id: 2,
    title1: "Lord",
    title2: "Ganesha",
    title3: "Divine",
    subtitle: "Idol",
    desc: "Premium Brass Collection",
    image: "/hero-ganesha.png",
    bgGradient: "from-[#3E2723]/90 via-[#3E2723]/80 to-transparent",
    bgColor: "bg-[#1A120B]",
    titleColor: "text-[#FFD700]",
    accentColor: "text-[#FFA000]/80",
    scriptColor: "text-orange-100"
  },
  {
    id: 3,
    title1: "Brass",
    title2: "Diya",
    title3: "Lamp",
    subtitle: "Collection",
    desc: "Illuminate Your Spiritual Space",
    image: "/hero-diya.png",
    bgGradient: "from-[#422006]/90 via-[#713F12]/80 to-transparent",
    bgColor: "bg-[#291B0E]",
    titleColor: "text-[#FCD34D]",
    accentColor: "text-[#D97706]",
    scriptColor: "text-yellow-100"
  },
  {
    id: 4,
    title1: "Zen",
    title2: "Buddha",
    title3: "Fountain",
    subtitle: "Decor",
    desc: "Find Peace & Serenity",
    image: "/hero-buddha.png",
    bgGradient: "from-[#14532D]/90 via-[#166534]/80 to-transparent",
    bgColor: "bg-[#052E16]",
    titleColor: "text-[#86EFAC]",
    accentColor: "text-[#4ADE80]",
    scriptColor: "text-green-100"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full h-[calc(100vh-76px)] overflow-hidden flex items-center justify-center bg-black">
        {slides.map((slide, index) => (
            <div 
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'} ${slide.bgColor}`}
            >
                 {/* Background Image / Texture (Shared) */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/hero-bg.png" 
                        alt="Background" 
                        fill 
                        className="object-cover opacity-60 mix-blend-overlay"
                        priority={index === 0}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`}></div>
                </div>

                <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center relative z-10">
                    
                    {/* Left Text Content */}
                    <div className={`w-full md:w-1/2 flex flex-col justify-center items-center md:items-start pt-10 md:pl-20 transition-all duration-700 delay-200 transform ${index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <div className="relative text-center md:text-left">
                        <span className={`font-script text-6xl md:text-8xl absolute -top-12 -left-10 z-10 drop-shadow-md ${slide.scriptColor}`}>
                        {slide.title1}
                        </span>
                        <h1 className={`font-serif text-6xl md:text-8xl lg:text-9xl leading-[0.8] ${slide.titleColor}`}>
                        {slide.title2}
                        </h1>
                        <h1 className={`font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.8] md:ml-12 mt-2 md:mt-0 ${slide.accentColor}`}>
                        {slide.title3}
                        </h1>
                        <h2 className="font-serif text-4xl md:text-6xl text-white text-right w-full mt-2">
                        {slide.subtitle}
                        </h2>
                    </div>
                    
                    <p className="text-xl md:text-2xl text-white/90 font-light mt-6 tracking-wide">
                        {slide.desc}
                    </p>

                    <Link href="#" className="mt-8 px-10 py-3 bg-gradient-to-b from-[#D84315] to-[#BF360C] text-white font-medium text-lg rounded shadow-lg hover:shadow-xl hover:scale-105 transition-transform z-20">
                        BUY NOW
                    </Link>
                    </div>

                    {/* Right Image Content */}
                    <div className={`w-full md:w-1/2 h-full flex items-center justify-center relative transition-all duration-1000 delay-300 transform ${index === currentSlide ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
                        <div className="relative w-[300px] h-[400px] md:w-[500px] md:h-[600px] drop-shadow-2xl">
                            <Image 
                                src={slide.image}
                                alt={slide.title2}
                                fill
                                className="object-contain"
                                priority={index === 0}
                            />
                        </div>
                        {/* Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-yellow-500/10 blur-[100px] -z-10 rounded-full"></div>
                    </div>
                </div>
            </div>
        ))}

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 p-2 hover:bg-black/20 rounded-full"
      >
        <ChevronLeft size={48} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 p-2 hover:bg-black/20 rounded-full"
      >
         <ChevronRight size={48} />
      </button>
      
      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition-colors ${idx === currentSlide ? 'bg-[#D4AF37]' : 'bg-white/30 hover:bg-white/50'}`}
            />
        ))}
      </div>
    </section>
  );
}
