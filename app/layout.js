



import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KPRIMESTORES",
  description: "kprimestores website",
  icons: {
    icon: "/kprimelogo.img.png",          // 👈 your website logo
    shortcut: "/kprimelogo.img.png",      // 👈 browser shortcut icon
    apple: "/kprimelogo.img.png",         // 👈 Apple touch icon
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar />
        {children}
       <Footer />
        </body>
    </html>
  );
}
