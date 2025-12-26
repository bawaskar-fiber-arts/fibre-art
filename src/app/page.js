"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Category from "@/components/ShopByPurpose";
import BestSellers from "@/components/BestSellers";
import WhatsNew from "@/components/WhatsNew";
import Blogs from "@/components/Blogs";
import PromiseSection from "@/components/PromiseSection";
import JoinStory from "@/components/JoinStory";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import StructuredData from "@/components/StructuredData";
import { useState } from "react";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <>
      <StructuredData />
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
    </>
  );
}
