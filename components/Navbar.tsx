"use client";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import GradientButton from "./Global/GradientButton";
import NavLink from "./Global/NavLink";
import MailOutline from "./Icons/MailOutline";
export default function Navbar() {
  return (
    <nav className="px-10 fixed top-0 h-[80px] w-full z-10">
      <div className="m-auto h-[inherit] content-center">
        <div className="flex justify-between items-center">
          <ScrollLink
            duration={200}
            className="cursor-pointer"
            to="hero"
            smooth={true}
          >
            <Image src="/logo.webp" width={184} height={40} alt="Navbar Logo" />
          </ScrollLink>

          <ul className="flex space-x-10">
            <li className="relative group content-center">
              <NavLink text="私たちについて" to="about" />
            </li>
            <li className="relative group content-center">
              <NavLink text="事業内容" to="business" />
            </li>
            <li className="relative group content-center">
              <NavLink text="会社概要" to="company" />
            </li>
            <li className="relative group content-center">
              <NavLink text="お役立ち資料" href="/document" />
            </li>
            <li className="relative group content-center">
              <NavLink text="セミナー" href="/seminar" />
            </li>
            <li className="relative group content-center">
              <NavLink text="お知らせ" to="news" />
            </li>
            <li className="relative group content-center">
              <NavLink text="採用情報" to="recruit" />
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
