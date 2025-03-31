import "../styles/global.css";
import { Noto_Sans_JP, Poppins } from "next/font/google";
import ClientLayout from "@/components/Global/ClientLayout";
export const metadata = {
  title: "株式会社NextStairs | ネクストステアーズ",
  description:
    "「インサイトを通じて、あらゆるスポーツの価値を高める」をミッションに掲げ、スポーツチームの日々のメディア露出を可視化するメディア露出価値換算サービス「Brand Insight(ブランドインサイト)」の開発、スポーツメディアSpoShipメディアの運営、営業支援事業をしています。",
  icons: {
    icon: "/favicon.ico",
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
