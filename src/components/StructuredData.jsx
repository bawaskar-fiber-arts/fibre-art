export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Bawaskar Fiber Arts",
        "image": "https://bawaskarfiberarts.com/logo-b.png",
        "@id": "https://bawaskarfiberarts.com",
        "url": "https://bawaskarfiberarts.com",
        "telephone": "8554875216",
        "email": "bawaskarfiberarts1997@gmail.com",
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "Near Vighnaharta Hotel, Khamgaon Road",
                "addressLocality": "Shegaon",
                "addressRegion": "Maharashtra",
                "postalCode": "444203",
                "addressCountry": "IN"
            },
            {
                "@type": "PostalAddress",
                "streetAddress": "Near Gajanan Maharaj Mandir, Paschim Gate, Kumbhar Wada",
                "addressLocality": "Shegaon",
                "addressRegion": "Maharashtra",
                "postalCode": "444203",
                "addressCountry": "IN"
            }
        ],
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 20.7891,
            "longitude": 76.6981
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "09:00",
            "closes": "20:00"
        },
        "priceRange": "₹₹",
        "description": "Handcrafted God idols, spiritual artifacts, home decor, and gifting items. Premium quality fiber art from Shegaon, Maharashtra.",
        "foundingDate": "1997",
        "sameAs": [
            "https://www.facebook.com/bawaskarfiberarts",
            "https://www.instagram.com/bawaskarfiberarts"
        ]
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Bawaskar Fiber Arts",
        "url": "https://bawaskarfiberarts.com",
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://bawaskarfiberarts.com/collection?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bawaskarfiberarts.com"
            }
        ]
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
}
