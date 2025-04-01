import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
// Enhanced NavLink that uses ScrollLink for same-page navigation and regular Link for cross-page navigation
// Usage: <MobileNavLink text="About" to="about-section" href="/#about-section" isHomePage={isHomePage} />
type MobileNavLinkProps = {
  text: string;
  to?: string;
  href: string;
  isHomePage?: boolean;
  eng: string;
  onClick?: () => void;
};

export default function MobileNavLink({
  text,
  to,
  href,
  isHomePage,
  eng,
  onClick,
}: MobileNavLinkProps) {
  // If we're on the home page, use ScrollLink for smooth scrolling
  if (isHomePage && to) {
    return (
      <ScrollLink
        to={to}
        smooth={true}
        duration={200}
        className="cursor-pointer transition-colors duration-200 active:bg-blue-700/20 hover:bg-blue-700/10"
        onClick={onClick}
      >
        <p className="text-xl">{eng}</p>
        <p className="text-[15px]">{text}</p>
      </ScrollLink>
    );
  }
  // If we're on a different page, use regular Link to navigate to home page with hash
  return (
    <Link
      href={href}
      className="cursor-pointer transition-colors duration-200 active:bg-blue-700/20 hover:bg-blue-700/10"
      onClick={onClick}
    >
      <p className="text-xl">{eng}</p>
      <p className="text-[15px]">{text}</p>
    </Link>
  );
}
