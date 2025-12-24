"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import { useState } from "react";
import { X } from 'lucide-react';

const galleryImages = [
    "/shivaji_maharaj.png",
    "/sambhaji_maharaj.png",
    "/vitthal_rukhmini.png",
    "/gajanan_maharaj.png",
    "/hero-ganesha.png",
    "/hero-diya.png",
    "/hero-buddha.png",
    "/whatsnew-tortoise.png",
    "/whatsnew-conch.png",
    "/all_category_bg.png"
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <main className="min-h-screen bg-white">
            <Header />
            
            <section className="py-12 md:py-20 bg-[#F9F6F0]">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-5xl font-serif text-gray-800 mb-6">Gallery</h1>
                    <p className="max-w-xl mx-auto text-gray-600 mb-12">
                        A visual journey through our finest creations. Experience the detailing and craftsmanship of our idols.
                    </p>
                    
                    {/* Masonry-like Grid */}
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        {galleryImages.map((src, index) => (
                            <div 
                                key={index} 
                                className="break-inside-avoid relative rounded-lg overflow-hidden cursor-pointer group hover:opacity-95 transition-opacity"
                                onClick={() => setSelectedImage(src)}
                            >
                                <Image
                                    src={src}
                                    alt={`Gallery Item ${index + 1}`}
                                    width={500}
                                    height={500}
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage && (
                <div 
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button className="absolute top-4 right-4 text-white hover:text-gray-300 p-2">
                        <X size={32} />
                    </button>
                    <div className="relative w-full max-w-5xl h-[85vh]">
                        <Image 
                            src={selectedImage} 
                            alt="Selected" 
                            fill 
                            className="object-contain" 
                        />
                    </div>
                </div>
            )}

            <Footer />
        </main>
    );
}
