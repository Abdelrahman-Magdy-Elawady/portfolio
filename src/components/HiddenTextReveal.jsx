import { useRef, useEffect } from "react";
import { useTransition } from "../hooks";
import { cn } from "../utils";
export default function HiddenTextReveal({ children, className }) {
  const ref = useRef(null);
  const { from } = useTransition(ref);
  useEffect(() => {
    from(".text-reveal", {
      yPercent: 100,
      delay: 0.75,
      duration: 0.5,
      ease: "sine",
    });
  }, []);

  return (
    <div className={cn(className, "overflow-hidden")} ref={ref}>
      <div className="text-reveal">{children}</div>
    </div>
  );
}
