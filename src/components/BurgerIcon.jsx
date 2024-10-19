import { useTransition, useClickOutside } from "../hooks";
import { useRef, useState } from "react";
import { cn } from "../utils";
/*------------------------------------------------*/
const duration = 0.25;
const y_translate = 10; //halfGap + halfHeight of bar
/*------------------------------------------------*/
export default function BurgerIcon({ className, ...rest }) {
  const [opened, setOpened] = useState(false);
  const ref = useRef();
  useClickOutside(ref, () => {
    opened && rotateHandler(0, 0);
    setOpened(false);
  });

  const { to } = useTransition(ref);
  /*------------------------------------------*/

  const rotateHandler = (angle, y_translate) => {
    to("#bar-0", {
      y: y_translate,
      rotate: -1 * angle,
      duration,
    });
    to("#bar-1", {
      y: -y_translate,
      rotate: 1 * angle,
      duration,
    });
  };

  const clickHandler = () => {
    if (!opened) {
      rotateHandler(45, y_translate);
    } else {
      rotateHandler(0, 0);
    }
    setOpened(!opened);
  };

  return (
    <div
      className={cn(
        "rounded-md w-14  aspect-square bg-[--white]  cursor-pointer",
        className
      )}
      ref={ref}
      {...rest}
    >
      <div
        onClick={clickHandler}
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
