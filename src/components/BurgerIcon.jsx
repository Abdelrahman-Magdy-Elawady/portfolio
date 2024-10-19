import { useTransition } from "../hooks";
import { useRef, useState } from "react";
import { cn } from "../utils";
export default function BurgerIcon({ toggleMenu, className }) {
  const [opened, setOpened] = useState(false);
  const ref = useRef();
  const { to } = useTransition(ref);
  const rotateHandler = () => {
    const duration = 0.25;
    const y_translate = 10; //halfGap + halfHeight of bar
    if (!opened) {
      to("#bar-0", {
        y: y_translate,
        rotate: -45,
        duration,
      });
      to("#bar-1", {
        y: -y_translate,
        rotate: 45,
        duration,
      });
    } else {
      to("#bar-0", {
        y: 0,
        rotate: 0,
        duration,
      });
      to("#bar-1", {
        y: 0,
        rotate: 0,
        duration,
      });
    }
    setOpened(!opened);
    toggleMenu();
  };
  return (
    <div
      className={cn(
        "rounded-md w-14  aspect-square bg-[--white]  cursor-pointer",
        className
      )}
      ref={ref}
    >
      <div
        onClick={rotateHandler}
        className="w-full h-full flex justify-center flex-col items-center gap-4  px-2"
      >
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            id={`bar-${index}`}
            className="w-full rounded-full h-1 bg-[--black] origin-center"
          />
        ))}
      </div>
    </div>
  );
}
