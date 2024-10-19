import { cn } from "../utils";
import { useTransition } from "../hooks";
import { useEffect, useRef } from "react";

export default function TextMoveVertical({
  children,
  direction = "bottomUp",
  ...rest
}) {
  const ref = useRef();
  const { to } = useTransition(ref);
  useEffect(() => {
    let xPercent = 0;
    let yPercent = 0;
    switch (direction) {
      case "bottomUp":
        yPercent = "-100";
        break;
      case "upDown":
        yPercent = "100";
        break;
      case "rtl":
        xPercent = "-100";
        break;
      case "ltr":
        xPercent = "100";
        break;
      default:
        xPercent = yPercent = 0;
    }
    to(".link", {
      yPercent,
      xPercent,
      repeat: -1,
      duration: 2,
      ease: "sine",
    });
  }, []);

  return (
    <div {...rest} ref={ref}>
      <div className="overflow-hidden">
        <div className="link relative">
          <div>{children}</div>
          <div
            className={cn("absolute left-0 top-0 opacity-50", {
              "top-full": direction === "bottomUp",
              "-top-full": direction === "upDown",
              "left-full": direction === "rtl",
              "-left-full": direction === "ltr",
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
