"use client";
import Image from "next/image";
import { companyInfo } from "@/constants/company";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import XIcon from "./Icons/XIcon";
import FbIcon from "./Icons/FbIcon";
import FileIcon from "./Icons/FileIcon";
import { useHoverStore } from "@/app/store";
import ArrowForward from "./Icons/ArrowForward";
import FooterLink from "./Global/FooterLink";
export default function Footer() {
  const { setActive, setFrom } = useHoverStore();
  const links = [
    {
      title: "トップ",
      href: "/",
      to: "hero",
    },
    {
      title: "私たちについて",
      href: "/#about",
      to: "about",
    },
    {
      title: "事業内容",
      href: "/#business",
      to: "business",
    },
    {
      title: "会社概要",
      href: "/#company",
      to: "company",
    },
    {
      title: "新着情報",
      href: "/#news",
      to: "news",
    },
  ];
  return (
    <footer className="rounded-tr-[150px] bg-white py-[60px]">
      <div className="max-w-[80rem] w-full mx-auto px-10">
        <div className="flex items-center gap-10">
          <div className="w-1/2">
            <div className="w-40 h-40 content-center">
              <Image
                src="/logo.webp"
                width={184}
                height={40}
                alt="Navbar Logo"
              />
            </div>

            <div className="flex flex-col mt-5">
              <p className="text-base font-semibold leading-[1.4]">
                {companyInfo.name}
              </p>
              <p className="mt-[5px] text-[15px] leading-[1.4] flex flex-col">
                <span>
                  {companyInfo.address.zip}
                  {companyInfo.address.street}
                </span>
                <span> {companyInfo.contact.email}</span>
                <span>{companyInfo.contact.phone}</span>
              </p>
            </div>
          </div>

          <div className="flex w-1/2 flex-col">
            <ul className="w-full">
              {links.map((link) => (
                <li key={link.title}>
                  <FooterLink link={link} />
                </li>
              ))}
            </ul>
            <div className="mt-10 flex gap-5 text-xs leading-[1.4]">
              <Link
                className="hover:bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] hover:bg-clip-text hover:text-transparent transition-all duration-300 ease-[cubic-bezier(0.4, 0.4, 0, 1)]"
                href="https://drive.google.com/drive/folders/1oyFmxl3D1XzYlFwANvEDKbq24Ixsmeq1?usp=sharing"
              >
                プレスキット
              </Link>
              <Link
                className="hover:bg-[linear-gradient(0deg,_#00c6fb_0%,_#005bea_100%)] hover:bg-clip-text hover:text-transparent transition-all duration-300 ease-[cubic-bezier(0.4, 0.4, 0, 1)]"
                href="/privacypolicy"
              >
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-between items-center">
          <div className="text-[13px]">
            ©️ {new Date().getFullYear()} NextStairs Co., Ltd.
          </div>
          <div className="flex">
            <a
              className="p-[10px] opacity-80"
              href="https://twitter.com/NextStairsjp"
              onMouseEnter={() => {
                setActive(true);
                setFrom("twitter");
              }}
              onMouseLeave={() => {
                setActive(false);
              }}
            >
              <XIcon />
            </a>
            <a
              href="https://www.facebook.com/NextStairsjp"
              className="p-[10px] opacity-80"
              onMouseEnter={() => {
                setActive(true);
                setFrom("facebook");
              }}
              onMouseLeave={() => {
                setActive(false);
              }}
            >
              <FbIcon />
            </a>
            <a
              href="https://note.com/nextstairs"
              className="p-[10px] opacity-80"
              onMouseEnter={() => {
                setActive(true);
                setFrom("note");
              }}
              onMouseLeave={() => {
                setActive(false);
              }}
            >
              <FileIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
