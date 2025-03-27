import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
// Enhanced NavLink that uses ScrollLink for same-page navigation and regular Link for cross-page navigation
// Usage: <NavLink text="About" to="about-section" href="/#about-section" isHomePage={isHomePage} />
type EnhancedNavLinkProps = {
  text: string;
  to?: string;
  href: string;
  isHomePage?: boolean;
};

export default function EnhancedNavLink({
  text,
  to,
  href,
  isHomePage,
}: EnhancedNavLinkProps) {
  // If we're on the home page, use ScrollLink for smooth scrolling
  if (isHomePage && to) {
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

  // If we're on a different page, use regular Link to navigate to home page with hash
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
