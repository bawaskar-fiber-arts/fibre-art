# Firebase Integration - Bawaskar Fiber Arts

## Overview
This project has been successfully integrated with Firebase Firestore to dynamically fetch and display:
- Categories
- Products/Items
- Gallery Images
- About Section Data

## Changes Made

### 1. Firebase Configuration
- **File**: `src/lib/firebase.js`
- Initialized Firebase app with Firestore and Analytics
- Configured for browser-only Analytics to avoid SSR issues

### 2. Firestore Service
- **File**: `src/lib/firestoreService.js`
- Created helper functions to fetch data from Firestore:
  - `fetchCategories()` - Fetches categories from `category` collection
  - `fetchItems()` - Fetches products from `items` collection
  - `fetchGalleryImages()` - Fetches gallery images from `website-info/gallery`
  - `fetchAboutData()` - Fetches about section data from `website-info/about`

### 3. Updated Components

#### ShopByPurpose (Category Component)
- **File**: `src/components/ShopByPurpose.jsx`
- Now fetches categories dynamically from Firestore
- Added loading state with spinner
- Maintains the "ALL" category as default

#### BestSellers (Products Component)
- **File**: `src/components/BestSellers.jsx`
- Fetches items dynamically from Firestore
- Added loading state
- Properly parses price strings (handles comma-separated values)
- Updated WhatsApp number to **8554875216**

#### Gallery Page
- **File**: `src/app/gallery/page.js`
- Fetches gallery images from Firestore
- Added loading state
- Shows "No images" message when gallery is empty

#### About Page
- **File**: `src/app/about/page.js`
- Fetches dynamic image and journey text from Firestore
- Added loading states for both image and text
- Falls back to default content if Firestore data is unavailable

### 4. Footer Updates
- **File**: `src/components/Footer.jsx`
- Updated contact information:
  - **Phone**: 8554875216
  - **Email**: bawaskarfiberarts1997@gmail.com
  - **Workshop \u0026 Store**:
    1. Near Vighnaharta Hotel, Khamgaon Road, Shegaon, Maharashtra, 444203
    2. Near Gajanan Maharaj Mandir, Paschim Gate, Kumbhar Wada, Shegaon, Maharashtra, 444203

### 5. Header Updates
- **File**: `src/components/Header.jsx`
- Updated WhatsApp link to use new number: **8554875216**

## Firestore Structure

### Categories Collection
```
category/
  {category-name}/
    image: "url"
```

### Items Collection
```
items/
  {item-name}/
    category: "Category Name"
    dis: "Description"
    image: "url"
    price: "2,100" or 2100
```

### Website Info
```
website-info/
  gallery/
    links: ["url1", "url2", ...]
  
  about/
    image: "url"
    tittle: "Journey text"  (Note: field name has typo as per user spec)
```

## Search Functionality
The search functionality works properly with the Firebase integration:
- Searches across product names and descriptions
- Can be accessed from the Header search bar
- Results are displayed on the `/collection` page
- Resets category filter to "ALL" when searching

## How to Use

### Prerequisites
- Ensure Firebase project is set up with the correct configuration
- Firestore database must have the correct structure as documented above

### Running the Application
1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Firebase Dependencies
- `firebase` package installed and configured
- Uses Firebase SDK v9+ modular syntax

## Notes
- All Firebase operations are client-side
- Loading states are implemented for better UX
- Analytics is only initialized in the browser (not during SSR)
- Price parsing handles both string and number formats
- Search is case-insensitive and searches both name and description fields

## Future Enhancements
Consider implementing:
- Real-time updates using Firestore listeners
- Image optimization and lazy loading
- Error boundaries for better error handling
- Caching strategy to reduce Firestore reads
- Admin panel for managing categories and products
