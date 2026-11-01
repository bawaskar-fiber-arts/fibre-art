"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Category from "@/components/ShopByPurpose";
import BestSellers from "@/components/BestSellers";

function CollectionContent() {
    const searchParams = useSearchParams();
    const search = searchParams.get('search') || "";
    const categoryParam = searchParams.get('category');
    const [selectedCategory, setSelectedCategory] = useState(categoryParam || "ALL");

    // Update state if URL param changes (e.g. back button)
    useEffect(() => {
        if(categoryParam) {
            setSelectedCategory(categoryParam);
        }
    }, [categoryParam]);

    // Reset category to ALL when a new search is performed (search takes precedence or resets)
    useEffect(() => {
        if (search) {
             // If searching, we might want to search in ALL or keep current. 
             // Logic: If search is fresh, maybe reset category? 
             // Current logic: setSelectedCategory("ALL");
             // But if user was on a category and searches, maybe they want to search WITHIN category?
             // User requirement: "functional search integration".
             // Simplest: Global search resets category, as implemented.
             setSelectedCategory("ALL");
        }
    }, [search]);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Little content at top */}
            <div className="bg-cream py-8 text-center px-4">
                <h1 className="text-4xl font-serif text-espresso mb-2">Our Exclusive Collection</h1>
                <p className="text-muted max-w-2xl mx-auto text-sm md:text-base">
                    Discover our premium range of handcrafted idols, home decor, and spiritual essentials,
                    meticulously designed to bring peace and prosperity to your life.
                </p>
            </div>

            <Category
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            <BestSellers
                selectedCategory={selectedCategory}
                searchQuery={search}
            />
        </div>
    );
}

export default function CollectionPage() {
    return (
        <main className="min-h-screen bg-ivory">
            <Header />
            <Suspense fallback={<div>Loading...</div>}>
                <CollectionContent />
            </Suspense>
            <Footer />
        </main>
    );
}
