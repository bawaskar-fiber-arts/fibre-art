"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { X, ZoomIn, MessageCircle } from "lucide-react";
import products from "../data/products.json";
import { motion, AnimatePresence } from "framer-motion";

export default function BestSellers({ selectedCategory, searchQuery = "" }) {
    const [zoomedImage, setZoomedImage] = useState(null);

    // Filter Logic
    const filteredProducts = products.filter(p => {
        const matchesCategory = selectedCategory === "ALL" || p.category === selectedCategory;
        const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getWhatsappLink = (productName) => {
        const message = `I'm interested in getting a quotation for: ${productName}`;
        return `https://wa.me/919429690080?text=${encodeURIComponent(message)}`;
    };

    return (
        <section className="py-8 md:py-12 bg-white transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center mb-6 md:mb-8">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-xl md:text-3xl font-serif text-gray-800 border-b-2 border-gray-200 pb-2 text-center"
                    >
                        {searchQuery ? `Search Results for "${searchQuery}"` : (selectedCategory === "ALL" ? "Our Collection" : `Explore ${selectedCategory}`)}
                    </motion.h2>
                </div>

                {filteredProducts.length === 0 ? (
                    <div className="text-center text-gray-400 py-10">
                        <p>No products found matching your criteria.</p>
                    </div>
                ) : (
                    // Grid: 2 columns on mobile (compact), 3 on tablet, 4 on large desktop
                    <motion.div
                        layout
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
                    >
                        <AnimatePresence>
                            {filteredProducts.map((product) => (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={product.id}
                                    className="group flex flex-col bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden"
                                >

                                    {/* Image Container - Reduced height/aspect ratio */}
                                    <div className="relative w-full aspect-[4/3] bg-[#F5F5F5] overflow-hidden">
                                        <div
                                            className="relative w-full h-full cursor-zoom-in"
                                            onClick={() => setZoomedImage(product.image)}
                                        >
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Quick Zoom Icon Overlay */}
                                        <button
                                            onClick={() => setZoomedImage(product.image)}
                                            className="absolute bottom-2 right-2 bg-white/90 p-1.5 rounded-full text-gray-700 hover:text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm"
                                        >
                                            <ZoomIn size={16} />
                                        </button>
                                    </div>

                                    {/* Content */}
                                    <div className="p-2 md:p-4 flex flex-col flex-1">
                                        <h3 className="text-xs md:text-base font-serif font-bold text-gray-800 mb-1 leading-tight line-clamp-2">
                                            {product.name}
                                        </h3>

                                        {/* Description - Hiding on mobile to save space if requested compact, or keep 2 lines */}
                                        <div className="hidden md:block text-[10px] md:text-xs text-gray-500 mb-2 line-clamp-2">
                                            {product.description}
                                        </div>

                                        {/* Price & Action */}
                                        <div className="mt-auto pt-2 border-t border-gray-50">
                                            <div className="flex flex-col gap-1">
                                                <span className="text-xs md:text-sm font-medium text-gray-500">From</span>
                                                <span className="text-sm md:text-lg font-bold text-gray-900">₹ {product.price.toLocaleString('en-IN')}</span>
                                            </div>

                                            <Link
                                                href={getWhatsappLink(product.name)}
                                                target="_blank"
                                                className="mt-2 w-full flex items-center justify-center gap-1.5 bg-black text-white text-[10px] md:text-xs py-2 rounded hover:bg-[#25D366] hover:border-[#25D366] transition-colors font-medium border border-transparent"
                                            >
                                                <MessageCircle size={14} className="md:w-4 md:h-4" />
                                                Get Quotation
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>

            {/* Image Zoom Modal */}
            <AnimatePresence>
                {zoomedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center p-4"
                        onClick={() => setZoomedImage(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors bg-white/10 rounded-full p-2"
                            onClick={() => setZoomedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <motion.div
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            className="relative w-full max-w-4xl h-[80vh] cursor-default"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={zoomedImage}
                                alt="Zoomed Product"
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
