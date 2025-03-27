"use client";

import Image from "next/image";
import GradientButton from "./Global/GradientButton";
import NavLink from "./Global/NavLink";
import MailOutline from "./Icons/MailOutline";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export default function Navbar() {
  const router = useRouter();
  const pathName = usePathname();
  const isHomepage = pathName === "/";

  const navigateTop = () => {
    if (isHomepage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <nav className="px-10 fixed top-0 h-[80px] w-full z-10">
      <div className="m-auto h-[inherit] content-center">
        <div className="flex justify-between items-center">
          <div onClick={navigateTop} className="cursor-pointer">
            <Image src="/logo.webp" width={184} height={40} alt="Navbar Logo" />
          </div>
          {/* )} */}
          <ul className="flex space-x-10">
            <li className="relative group content-center">
              <NavLink
                text="私たちについて"
                to="about"
                href="/#about"
                isHomePage={isHomepage}
              />
            </li>
            <li className="relative group content-center">
              <NavLink
                text="事業内容"
                to="business"
                href="/#business"
                isHomePage={isHomepage}
              />
            </li>
            <li className="relative group content-center">
              <NavLink
                text="会社概要"
                to="company"
                href="/#company"
                isHomePage={isHomepage}
              />
            </li>
            <li className="relative group content-center">
              <NavLink text="お役立ち資料" href="/document" />
            </li>
            <li className="relative group content-center">
              <NavLink text="セミナー" href="/seminar" />
            </li>
            <li className="relative group content-center">
              <NavLink
                text="お知らせ"
                to="news"
                href="/#news"
                isHomePage={isHomepage}
              />
            </li>
            <li className="relative group content-center">
              <NavLink
                text="採用情報"
                to="recruit"
                href="/#recruit"
                isHomePage={isHomepage}
              />
            </li>
            <li>
              <GradientButton
                iconComponent={<MailOutline />}
                href="/contact"
                text="お問い合わせ"
                from="navbar"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
