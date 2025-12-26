import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  variable: "--font-script",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://bawaskarfiberarts.com'),
  title: {
    default: "Bawaskar Fiber Arts - Premium God Idols & Home Decor | Handcrafted Spiritual Artworks",
    template: "%s | Bawaskar Fiber Arts"
  },
  description: "Discover exquisite handcrafted God idols, spiritual artifacts, home decor, and gifting items at Bawaskar Fiber Arts. Premium quality fiber art from Shegaon, Maharashtra. Custom orders available.",
  keywords: [
    "god idols",
    "fiber art",
    "handcrafted idols",
    "spiritual artwork",
    "home decor",
    "ganesha idol",
    "shivaji maharaj statue",
    "pooja essentials",
    "gifting items",
    "Shegaon Maharashtra",
    "Gajanan Maharaj",
    "Vitthal Rukhmini",
    "Indian handicrafts",
    "religious idols",
    "premium fiber idols"
  ],
  authors: [{ name: "Bawaskar Fiber Arts" }],
  creator: "Bawaskar Fiber Arts",
  publisher: "Bawaskar Fiber Arts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://bawaskarfiberarts.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://bawaskarfiberarts.com',
    siteName: 'Bawaskar Fiber Arts',
    title: 'Bawaskar Fiber Arts - Premium God Idols & Home Decor',
    description: 'Handcrafted God idols, spiritual artifacts, home decor, and gifting items. Premium quality fiber art from Shegaon, Maharashtra.',
    images: [
      {
        url: '/logo-b.png',
        width: 1200,
        height: 630,
        alt: 'Bawaskar Fiber Arts Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bawaskar Fiber Arts - Premium God Idols & Home Decor',
    description: 'Handcrafted God idols, spiritual artifacts, home decor, and gifting items.',
    images: ['/logo-b.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  category: 'Handicrafts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
