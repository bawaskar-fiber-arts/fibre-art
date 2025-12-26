import { db } from './firebase';
import { collection, getDocs, doc, getDoc } from 'firebase/firestore';

/**
 * Fetch all categories from Firestore
 * Structure: category/{document name is category name}/image
 * Returns: Array of { id, name, image }
 */
export async function fetchCategories() {
    try {
        const categoriesRef = collection(db, 'category');
        const snapshot = await getDocs(categoriesRef);

        const categories = [];

        // Add "ALL" category first
        categories.push({
            id: 'all',
            name: 'ALL',
            image: '/all_category_bg.png' // fallback image
        });

        snapshot.forEach((docSnap) => {
            const data = docSnap.data();
            categories.push({
                id: docSnap.id,
                name: docSnap.id, // document name is category name
                image: data.image || '/all_category_bg.png'
            });
        });

        return categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

/**
 * Fetch all items from Firestore
 * Structure: items/{document name is item name}/category, dis, image, price
 * Returns: Array of { id, name, category, description, image, price }
 */
export async function fetchItems() {
    try {
        const itemsRef = collection(db, 'items');
        const snapshot = await getDocs(itemsRef);

        const items = [];

        snapshot.forEach((docSnap) => {
            const data = docSnap.data();
            items.push({
                id: docSnap.id,
                name: docSnap.id, // document name is item name
                category: data.category || '',
                description: data.dis || '',
                image: data.image || '/all_category_bg.png',
                price: data.price || '0'
            });
        });

        return items;
    } catch (error) {
        console.error('Error fetching items:', error);
        return [];
    }
}

/**
 * Fetch gallery images from Firestore
 * Structure: website-info/gallery/links[array]
 * Returns: Array of image URLs
 */
export async function fetchGalleryImages() {
    try {
        const galleryDocRef = doc(db, 'website-info', 'gallery');
        const galleryDoc = await getDoc(galleryDocRef);

        if (galleryDoc.exists()) {
            const data = galleryDoc.data();
            return data.links || [];
        }

        return [];
    } catch (error) {
        console.error('Error fetching gallery images:', error);
        return [];
    }
}

/**
 * Fetch about section data from Firestore
 * Structure: website-info/about/image, tittle
 * Returns: { image, title }
 */
export async function fetchAboutData() {
    try {
        const aboutDocRef = doc(db, 'website-info', 'about');
        const aboutDoc = await getDoc(aboutDocRef);

        if (aboutDoc.exists()) {
            const data = aboutDoc.data();
            return {
                image: data.image || '/workshop.png',
                title: data.tittle || '' // Note: typo in field name as per user specification
            };
        }

        return {
            image: '/workshop.png',
            title: ''
        };
    } catch (error) {
        console.error('Error fetching about data:', error);
        return {
            image: '/workshop.png',
            title: ''
        };
    }
}
