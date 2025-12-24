"use client";

import Image from "next/image";
import categories from "../data/categories.json";
import { motion } from "framer-motion";

export default function Category({ selectedCategory, onSelectCategory }) {
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

        {/* Horizontal Scrollable/Flex Container */}
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
                {/* Optional Overlay for ALL to make it distinct if needed, or just pure image */}
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
      </div>
    </section>
  );
}
