import "../styles/global.css";
import { Noto_Sans_JP, Poppins } from "next/font/google";
import ClientLayout from "@/components/Global/ClientLayout";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    default: "株式会社NextStairs | ネクストステアーズ",
    template: "%s | 株式会社NextStairs | ネクストステアーズ",
  },
  metadataBase: new URL("https://nextstairs.co.jp"),
  description:
    "「インサイトを通じて、あらゆるスポーツの価値を高める」をミッションに掲げ、スポーツチームの日々のメディア露出を可視化するメディア露出価値換算サービス「Brand Insight(ブランドインサイト)」の開発、スポーツメディアSpoShipメディアの運営、営業支援事業をしています。",
  keywords: [
    "NextStairs",
    "スポーツ広告",
    "スポンサー支援",
    "スポーツメディア",
    "福岡",
    "スタートアップ",
  ],
  openGraph: {
    title: "NextStairs | スポーツ広告支援",
    description:
      "アスリートとスポンサーをつなぐ次世代スポーツプラットフォーム。",
    url: "https://nextstairs.co.jp",
    siteName: "NextStairs",
    images: [
      {
        url: "/og-image.jpg", // ← add this to /public
        width: 1200,
        height: 630,
        alt: "NextStairs Open Graph Image",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextStairs | スポーツ広告支援",
    description:
      "アスリートとスポンサーをつなぐ次世代スポーツプラットフォーム。",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSansJP.className}`}>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
