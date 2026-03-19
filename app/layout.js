



import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LFC ELELENWO",
  description: "Winners Chapel Elelenwo Website",
  icons: {
    icon: "/winnerslogo.png",          // 👈 your website logo
    shortcut: "/winnerslogo.png",      // 👈 browser shortcut icon
    apple: "/winnerslogo.png",         // 👈 Apple touch icon
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
