import { cn } from "../utils";
import Link from "./Link";
import BurgerIcon from "./BurgerIcon";
import { useRef, useState } from "react";
import { useClickOutside } from "../hooks";

export default function Navbar({ activeOnEnterSection, links, className }) {
  const [menuClosed, setMenuClosed] = useState(true);
  const ref = useRef();
  useClickOutside(ref, () => setMenuClosed(true));
  /*--------------------------------------------------*/
  const navLinks = links.map((link, index) => (
    <Link
      key={index}
      to={link.to}
      className="cursor-pointer"
      active={index === activeOnEnterSection}
    >
      {link.label}
    </Link>
  ));
  /*---------------------------------------------------*/
  return (
    <div
      className={cn(
        "pointer-events-none flex  flex-col items-end  overscroll-contain fixed  z-50 inset-5 md:left-auto md:bottom-auto md:w-60",
        className
      )}
      ref={ref}
    >
      <BurgerIcon
        onClick={() => setMenuClosed(!menuClosed)}
        className="absolute z-10 pointer-events-auto"
      />
      <div
        className={cn(
          "flex flex-col md:items-start items-center justify-center gap-4  w-full h-full transition-all duration-700 pt-16  px-4 pb-4 origin-top-right rounded-md pointer-events-auto border-[--white] border-2 bg-[--black]",
          {
            "scale-0": menuClosed,
          }
        )}
        onClick={() => setMenuClosed(true)}
      >
        {navLinks}
      </div>
    </div>
  );
}
