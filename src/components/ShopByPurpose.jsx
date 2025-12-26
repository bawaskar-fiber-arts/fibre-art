"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { fetchCategories } from "../lib/firestoreService";

export default function Category({ selectedCategory, onSelectCategory }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
      } catch (error) {
        console.error("Error loading categories:", error);
      } finally {
        setLoading(false);
      }
    }
    loadCategories();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-serif text-center text-[#2B1B17] mb-10 tracking-wide"
        >
          Category
        </motion.h2>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 md:gap-10"
          >
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                variants={itemVariants}
                onClick={() => onSelectCategory(cat.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group flex flex-col items-center focus:outline-none"
              >
                <div
                  className={`relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg transition-shadow duration-300 group-hover:-translate-y-2 bg-white ${selectedCategory === cat.name ? 'ring-4 ring-[#AF984E]' : ''}`}
                >
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover"
                  />
                  {cat.name === "ALL" && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <span className="text-white font-serif text-xl md:text-2xl font-medium tracking-widest">ALL</span>
                    </div>
                  )}
                </div>
                <span className={`mt-4 text-[10px] md:text-xs font-bold tracking-widest uppercase text-center max-w-[120px] ${(cat.name === "ALL" || selectedCategory === cat.name) ? 'text-[#AF984E]' : 'text-[#4A4A4A] group-hover:text-[#AF984E]'
                  }`}>
                  {cat.name}
                </span>
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
