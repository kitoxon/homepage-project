import Navbar from "@/components/Navbar";
import "../styles/global.css";
import { Noto_Sans_JP, Poppins } from "next/font/google";

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
  return (
    <html lang="ja" className={`${notoSansJP.className}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
