"use client";

import Image from "next/image";
import GradientButton from "./Global/GradientButton";
import NavLink from "./Global/NavLink";
import MailOutline from "./Icons/MailOutline";
import MobileNavLink from "./Global/MobileLink";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import ContactButton from "./Global/ContactButton";
import XIcon from "./Icons/XIcon";
import FbIcon from "./Icons/FbIcon";
import FileIcon from "./Icons/FileIcon";
import { useHoverStore } from "@/app/store";
export default function Navbar() {
  const { setActive, setFrom } = useHoverStore();
  const router = useRouter();
  const pathName = usePathname();
  const isHomepage = pathName === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const navigateTop = () => {
    if (isHomepage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.replaceState(null, "", "/");
    } else {
      router.push("/");
    }
  };
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  return (
    <nav className="px-5 md:px-10 fixed top-0 h-[80px] w-full z-10">
      <div className="m-auto h-[inherit] content-center">
        <div className="flex justify-between items-center">
          <div onClick={navigateTop} className="cursor-pointer">
            <Image src="/logo.webp" width={184} height={40} alt="Navbar Logo" />
          </div>
          <ul className="hidden md:flex space-x-10">
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
                gradientId="mailGradient"
                iconComponent={MailOutline}
                href="/contact"
                text="お問い合わせ"
                from="navbar"
              />
            </li>
          </ul>
          <button
            className={`md:hidden z-30 rounded-[50px] h-[50px] w-[50px] text-white flex justify-center items-center cursor-pointer ${
              !menuOpen
                ? "bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)]"
                : "bg-none"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <div
            className={`md:hidden fixed top-0 right-0 w-full h-screen bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] z-20 transition-transform duration-500 ease-in-out rounded-[10px] px-5 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div
              onClick={navigateTop}
              className="cursor-pointer h-20 content-center"
            >
              <Image
                src="/white-logo.webp"
                width={184}
                height={40}
                alt="Navbar Logo"
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <div className="space-y-6 pt-16 grid grid-cols-2 font-bold text-white">
              <MobileNavLink
                eng="Home"
                text="ホーム"
                to="hero"
                href="/"
                isHomePage={isHomepage}
                onClick={() => setMenuOpen(false)}
              />
              <MobileNavLink
                eng="About Us"
                text="私たちについて"
                to="about"
                href="/#about"
                isHomePage={isHomepage}
                onClick={() => setMenuOpen(false)}
              />
              <MobileNavLink
                eng="Our Business"
                text="事業内容"
                to="business"
                href="/#business"
                isHomePage={isHomepage}
                onClick={() => setMenuOpen(false)}
              />
              <MobileNavLink
                eng="Company"
                text="会社概要"
                to="company"
                href="/#company"
                isHomePage={isHomepage}
                onClick={() => setMenuOpen(false)}
              />
              {/* <NavLink text="お役立ち資料" href="/document" />
              <NavLink text="セミナー" href="/seminar" /> */}
              <MobileNavLink
                eng="News"
                text="お知らせ"
                to="news"
                href="/#news"
                isHomePage={isHomepage}
                onClick={() => setMenuOpen(false)}
              />
              <MobileNavLink
                eng="Careers"
                text="採用情報"
                to="recruit"
                href="/#recruit"
                isHomePage={isHomepage}
                onClick={() => setMenuOpen(false)}
              />
            </div>
            <div className="mb-5">
              <ContactButton />
            </div>
            <Link
              className="text-[13px] text-white"
              onClick={() => setMenuOpen(false)}
              href="/privacypolicy"
            >
              プライバシーポリシー
            </Link>
            <div className="flex mt-5">
              <a
                className="p-[10px]"
                href="https://twitter.com/NextStairsjp"
                target="_blank"
                onMouseEnter={() => {
                  setActive(true);
                  setFrom("twitter");
                }}
                onMouseLeave={() => {
                  setActive(false);
                }}
              >
                <XIcon defaultFill="#fff" />
              </a>
              <a
                href="https://www.facebook.com/NextStairsjp"
                className="p-[10px]"
                target="_blank"
                onMouseEnter={() => {
                  setActive(true);
                  setFrom("facebook");
                }}
                onMouseLeave={() => {
                  setActive(false);
                }}
              >
                <FbIcon defaultFill="#fff" />
              </a>
              <a
                href="https://note.com/nextstairs"
                target="_blank"
                className="p-[10px]"
                onMouseEnter={() => {
                  setActive(true);
                  setFrom("note");
                }}
                onMouseLeave={() => {
                  setActive(false);
                }}
              >
                <FileIcon defaultFill="#fff" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
