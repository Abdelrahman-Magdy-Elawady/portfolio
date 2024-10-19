import { cn } from "../utils";
import Link from "./Link";
import BurgerIcon from "./BurgerIcon";
import { useRef, useState } from "react";
import { useClickOutside } from "../hooks";

export default function Navbar({ activeOnEnterSection, links, className }) {
  const [menuClosed, setMenuClosed] = useState(true);
  const [resetBurger, setResetIcon] = useState(false);
  const ref = useRef();
  const closeHandler = () => {
    setMenuClosed(true);
    setResetIcon(!resetBurger);
  };
  useClickOutside(ref, () => closeHandler());
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
        "pointer-events-none flex  flex-col items-end  overscroll-contain fixed  z-50 inset-5 md:left-auto md:bottom-auto md:w-60 ",
        className
      )}
      ref={ref}
    >
      <BurgerIcon
        toggleMenu={() => setMenuClosed(!menuClosed)}
        key={resetBurger}
        className="absolute z-10 pointer-events-auto"
      />
      <div
        className={cn(
          "flex flex-col md:items-start items-center justify-center gap-4  w-full h-full transition-all duration-700 pt-16  px-4 pb-4 origin-top-right rounded-md pointer-events-auto",
          {
            "scale-0": menuClosed,
          }
        )}
        style={{
          backdropFilter: `blur(1000px)`,
        }}
        onClick={closeHandler}
      >
        {navLinks}
      </div>
    </div>
  );
}
