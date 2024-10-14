import { useRef } from "react";
import { useTextReveal } from "../hooks";
import { cn } from "../utils";
export default function HiddenTextReveal({ children, className }) {
  const ref = useRef(null);
  useTextReveal(".text-reveal", ref, {
    yPercent: 100,
    ease: "sine",
    delay: 0.75,
    duration: 0.5,
  });

  return (
    <div className={cn(className, "overflow-hidden")} ref={ref}>
      <div className="text-reveal">{children}</div>
    </div>
  );
}
