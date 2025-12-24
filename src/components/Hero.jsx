"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import slides from "../data/hero.json";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="relative w-full h-[calc(100vh-60px)] md:h-[calc(100vh-76px)] overflow-hidden flex items-center justify-center bg-black -mt-1">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 z-0 ${slides[currentSlide].bgColor}`}
        >
          {/* Background Image / Texture (Shared) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero-bg.png"
              alt="Background"
              fill
              className="object-cover opacity-60 mix-blend-overlay"
              priority
            />
            <div className={`absolute inset-0 bg-gradient-to-r ${slides[currentSlide].bgGradient}`}></div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 h-full flex flex-col-reverse md:flex-row items-center relative z-10 pt-16 md:pt-0">
        {/* Left Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start -mt-12 md:mt-0 relative overflow-hidden">

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative text-center md:text-left"
            >
              <span className={`font-script text-5xl md:text-8xl absolute -top-10 md:-top-12 left-1/2 md:-left-10 -translate-x-1/2 md:translate-x-0 z-10 drop-shadow-md ${slides[currentSlide].scriptColor} whitespace-nowrap`}>
                {slides[currentSlide].title1}
              </span>
              <h1 className={`font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] mt-4 md:mt-0 ${slides[currentSlide].titleColor}`}>
                {slides[currentSlide].title2}
              </h1>
              <h1 className={`font-serif text-4xl md:text-8xl lg:text-9xl leading-[0.9] md:ml-12 mt-2 md:mt-0 ${slides[currentSlide].accentColor}`}>
                {slides[currentSlide].title3}
              </h1>
              <h2 className={`font-serif text-xl md:text-5xl text-right w-full mt-2 ${slides[currentSlide].isLight ? 'text-gray-800' : 'text-white'}`}>
                {slides[currentSlide].subtitle}
              </h2>

              <p className={`text-base md:text-2xl font-light mt-4 md:mt-6 tracking-wide ${slides[currentSlide].isLight ? 'text-gray-700' : 'text-white/90'}`}>
                {slides[currentSlide].desc}
              </p>

              <Link href="/collection" className="inline-block mt-4 md:mt-8 px-6 md:px-10 py-2 md:py-3 bg-gradient-to-b from-[#D84315] to-[#BF360C] text-white font-medium text-base md:text-lg rounded shadow-lg hover:shadow-xl hover:scale-105 transition-transform z-20 mb-8 md:mb-0">
                Explore Collection
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Image Content */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full flex items-end md:items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ scale: 0.8, opacity: 0, x: 50 }}
              animate={{ scale: 1, opacity: 1, x: 0 }}
              exit={{ scale: 1.1, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-[280px] h-[320px] md:w-[500px] md:h-[600px] drop-shadow-2xl"
            >
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title2}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-yellow-500/10 blur-[80px] md:blur-[100px] -z-10 rounded-full"></div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 p-2 hover:bg-black/20 rounded-full hidden md:block"
      >
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20 p-2 hover:bg-black/20 rounded-full hidden md:block"
      >
        <ChevronRight size={48} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-[#D4AF37] scale-125' : 'bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}
