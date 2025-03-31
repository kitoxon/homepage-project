"use client";

import Navbar from "@/components/Navbar";
import "../styles/global.css";
import { Noto_Sans_JP, Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");
  return (
    <html lang="ja" className={`${notoSansJP.className}`}>
      <body>
        {!isStudio && <Navbar />}
        {children}
        {!isStudio && <Footer />}
      </body>
    </html>
  );
}
