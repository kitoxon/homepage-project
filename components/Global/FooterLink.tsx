import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import ArrowForward from "@components/Icons/ArrowForward";
import { usePathname, useRouter } from "next/navigation";
type FooterLinkProps = {
  link: any;
};

export default function FooterLink({ link }: FooterLinkProps) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  if (isHomePage) {
    return (
      <ScrollLink
        to={link.to}
        smooth={true}
        duration={200}
        className="cursor-pointer flex justify-between items-center transition duration-200 font-medium text-[15px] h-[50px] border-b group"
      >
        <div>{link.title}</div>
        <div className="group-hover:translate-x-2 transition duration-200">
          <ArrowForward />
        </div>
      </ScrollLink>
    );
  }

  return (
    <Link href={link.href}>
      <div className="cursor-pointer flex justify-between items-center transition duration-200 font-medium text-[15px] h-[50px] border-b group">
        <div>{link.title}</div>
        <div className="group-hover:translate-x-2 transition duration-200">
          <ArrowForward />
        </div>
      </div>
    </Link>
  );
}
