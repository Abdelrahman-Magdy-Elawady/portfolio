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
    to(".link", {
      yPercent: direction === "bottomUp" ? "-100" : "100",
      repeat: -1,
      duration: 1,
      ease: "sine",
    });
  }, []);

  return (
    <div {...rest} ref={ref}>
      <div className="overflow-hidden">
        <div className="link relative">
          <div>{children}</div>
          <div
            className={cn("absolute left-0 opacity-50", {
              "top-full": direction === "bottomUp",
              "-top-full": direction === "upDown",
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
