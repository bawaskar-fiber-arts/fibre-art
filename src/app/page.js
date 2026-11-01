"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Category from "@/components/ShopByPurpose";
import BestSellers from "@/components/BestSellers";
import WhatsNew from "@/components/WhatsNew";
import PromiseSection from "@/components/PromiseSection";
import HowToOrder from "@/components/HowToOrder";
import CustomOrder from "@/components/CustomOrder";
import Footer from "@/components/Footer";

import StructuredData from "@/components/StructuredData";
import { useState } from "react";

// Section order follows a customer's questions:
// what do you make -> why trust you -> show me -> how do I order -> can you make mine?
export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <>
      <StructuredData />
      <main className="min-h-screen flex flex-col bg-ivory">
        <Header />
        <Hero />
        <PromiseSection />
        <Category
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <BestSellers selectedCategory={selectedCategory} />
        <HowToOrder />
        <WhatsNew />
        <CustomOrder />
        <Footer />
      </main>
    </>
  );
}
