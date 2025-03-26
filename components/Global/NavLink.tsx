import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
type NavLinkProps = {
  text: string;
  href?: string;
  to?: string;
};
export default function NavLink({ text, href, to }: NavLinkProps) {
  if (href) {
    return (
      <Link
        href={href}
        className="cursor-pointer transition duration-200 font-medium text-sm/snug"
      >
        {text}
        <span className="absolute left-0 bottom-[5px] h-[2px] w-0 transition-all bg-black duration-200 ease-in-out group-hover:w-full"></span>
      </Link>
    );
  }
  if (to) {
    return (
      <ScrollLink
        to={to}
        smooth={true}
        duration={200}
        className="cursor-pointer transition duration-200 font-medium text-sm/snug"
      >
        {text}
        <span className="absolute left-0 bottom-[5px] h-[2px] w-0 transition-all bg-black duration-200 ease-in-out group-hover:w-full"></span>
      </ScrollLink>
    );
  }
}
