"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import slides from "../data/hero.json";
import { motion, AnimatePresence } from "framer-motion";

// --- Mobile Component ---
function MobileHero({ currentSlide, nextSlide, prevSlide, setSlide }) {
  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[calc(100vh-60px)] overflow-hidden flex flex-col bg-black">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 z-0 ${slide.bgColor}`}
        >
          <div className="absolute inset-0">
            <Image src="/hero-bg.png" alt="bg" fill className="object-cover opacity-60 mix-blend-overlay" priority />
            <div className={`absolute inset-0 bg-gradient-to-b ${slide.bgGradient} from-transparent via-transparent to-black/80`}></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full w-full">

        {/* Main Content Area (Image + Text) */}
        <motion.div
          className="flex-1 flex flex-col items-center justify-center p-4"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = offset.x; // +ve right (prev), -ve left (next)
            if (swipe < -50) nextSlide();
            else if (swipe > 50) prevSlide();
          }}
        >
          {/* Image - Upper Half */}
          <div className="relative w-full h-[45vh] mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.6 }}
                className="relative w-full h-full"
              >
                <Image src={slide.image} alt={slide.title2} fill className="object-contain drop-shadow-2xl" priority />
              </motion.div>
            </AnimatePresence>
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-yellow-500/20 blur-[60px] rounded-full -z-10"></div>
          </div>

          {/* Text - Lower Half */}
          <div className="w-full flex flex-col items-center text-center -mt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="relative"
              >
                <span className={`block font-script text-4xl mb-1 ${slide.scriptColor}`}>{slide.title1}</span>
                <h1 className={`font-serif text-5xl leading-none ${slide.titleColor}`}>{slide.title2}</h1>
                <h1 className={`font-serif text-4xl leading-none mt-1 ${slide.accentColor}`}>{slide.title3}</h1>
                <p className={`text-sm mt-3 font-light tracking-wide max-w-[80%] mx-auto ${slide.isLight ? 'text-gray-800' : 'text-gray-200'}`}>
                  {slide.subtitle}
                </p>

                <Link href="/collection" className="inline-block mt-6 px-8 py-3 bg-[#D4AF37] text-white text-sm font-bold tracking-wider rounded-full shadow-lg active:scale-95 transition-transform">
                  EXPLORE
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20 pb-safe">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-[#D4AF37] w-6' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Desktop Component ---
function DesktopHero({ currentSlide, nextSlide, prevSlide, setSlide }) {
  const slide = slides[currentSlide];

  return (
    <section className="relative w-full h-[calc(100vh-76px)] overflow-hidden flex items-center justify-center bg-black -mt-1">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 z-0 ${slide.bgColor}`}
        >
          <div className="absolute inset-0">
            <Image src="/hero-bg.png" alt="bg" fill className="object-cover opacity-60 mix-blend-overlay" priority />
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`}></div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 h-full flex flex-row items-center relative z-10">
        {/* Left Text */}
        <div className="w-1/2 flex flex-col justify-center items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="relative text-left"
            >
              <span className={`font-script text-8xl absolute -top-14 left-0 z-10 drop-shadow-md ${slide.scriptColor} whitespace-nowrap`}>
                {slide.title1}
              </span>
              <h1 className={`font-serif text-9xl leading-[0.9] mt-2 ${slide.titleColor}`}>
                {slide.title2}
              </h1>
              <h1 className={`font-serif text-8xl leading-[0.9] ml-16 transform translate-x-4 ${slide.accentColor}`}>
                {slide.title3}
              </h1>
              <h2 className={`font-serif text-4xl text-right w-full mt-4 pr-10 ${slide.isLight ? 'text-gray-800' : 'text-white'}`}>
                {slide.subtitle}
              </h2>

              <p className={`text-2xl font-light mt-8 tracking-wide max-w-lg ${slide.isLight ? 'text-gray-700' : 'text-white/90'}`}>
                {slide.desc}
              </p>

              <Link href="/collection" className="inline-block mt-10 px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B4941F] text-white font-bold text-lg rounded shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                Explore Collection
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Image */}
        <div className="w-1/2 h-full flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ scale: 0.8, opacity: 0, x: 100 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-[500px] h-[700px] drop-shadow-2xl"
            >
              <Image src={slide.image} alt={slide.title2} fill className="object-contain" priority />
            </motion.div>
          </AnimatePresence>
          {/* Glow */}
          <div className={`absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-${slide.isLight ? 'white' : 'yellow-500'}/10 blur-[120px] rounded-full -z-10 transform -translate-x-1/2 -translate-y-1/2`}></div>
        </div>
      </div>

      {/* Controls */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white backdrop-blur-sm transition-all z-20">
        <ChevronLeft size={32} />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white backdrop-blur-sm transition-all z-20">
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setSlide(idx)}
            className={`transition-all duration-300 rounded-full border border-white/30 ${idx === currentSlide ? 'w-4 h-4 bg-[#D4AF37] border-none' : 'w-4 h-4 bg-transparent hover:bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
}

// --- Main Hero Wrapper ---
export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* Mobile View */}
      <div className="block md:hidden">
        <MobileHero
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          setSlide={setCurrentSlide}
        />
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <DesktopHero
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
          setSlide={setCurrentSlide}
        />
      </div>
    </>
  );
}
