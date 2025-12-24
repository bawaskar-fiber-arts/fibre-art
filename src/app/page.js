"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Category from "@/components/ShopByPurpose"; // Renamed component export conceptually, file name remains
import BestSellers from "@/components/BestSellers";
import WhatsNew from "@/components/WhatsNew";
import Blogs from "@/components/Blogs";
import PromiseSection from "@/components/PromiseSection";
import JoinStory from "@/components/JoinStory";
import { useState } from "react";

import Footer from "@/components/Footer";

import Services from "@/components/Services";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header />
      <Hero />
      <Services />
      <Category
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <BestSellers selectedCategory={selectedCategory} />
      <WhatsNew />
      <Blogs />
      <JoinStory />
      <PromiseSection />
      <Footer />
    </main>
  );
}
