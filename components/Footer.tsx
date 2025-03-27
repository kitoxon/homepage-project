import Image from "next/image";
import { companyInfo } from "@/constants/company";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import XIcon from "./Icons/XIcon";
import FbIcon from "./Icons/FbIcon";
import FileIcon from "./Icons/FileIcon";
import { useHoverStore } from "@/app/store";
export default function Footer() {
  const { setActive, setFrom } = useHoverStore();
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
              <li className="cursor-pointer transition duration-200 font-medium text-[15px] h-[50px] border-b content-center">
                <ScrollLink to="hero" smooth={true} duration={200}>
                  トップ
                </ScrollLink>
              </li>
              <li className="cursor-pointer transition duration-200 font-medium text-[15px] h-[50px] border-b content-center">
                <ScrollLink to="about" smooth={true} duration={200}>
                  私たちについて
                </ScrollLink>
              </li>
              <li className="cursor-pointer transition duration-200 font-medium text-[15px] h-[50px] border-b content-center">
                <ScrollLink to="business" smooth={true} duration={200}>
                  事業内容
                </ScrollLink>
              </li>
              <li className="cursor-pointer transition duration-200 font-medium text-[15px] h-[50px] border-b content-center">
                <ScrollLink to="company" smooth={true} duration={200}>
                  会社概要
                </ScrollLink>
              </li>

              <li className="cursor-pointer transition duration-200 font-medium text-[15px] h-[50px] border-b content-center">
                <ScrollLink to="news" smooth={true} duration={200}>
                  新着情報
                </ScrollLink>
              </li>
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
                href="/"
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
