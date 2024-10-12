import { cn } from "../utils";
import Link from "./Link";

export default function Navbar({ activeOnEnterSection, links, className }) {
  const navLinks = links.map((link, index) => (
    <Link key={index} to={link.to} active={index === activeOnEnterSection}>
      {link.label}
    </Link>
  ));

  return <div className={cn(className, "flex flex-col ")}>{navLinks}</div>;
}
