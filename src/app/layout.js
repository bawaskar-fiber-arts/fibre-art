import { Inter, Playfair_Display, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});
//j
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
  title: "Bawaskar Fiber Arts - Premium God Idols & Home Decor",
  description: "Buy Premium God Idols, Gifting, Pooja Essentials, and Home Decor.",
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
