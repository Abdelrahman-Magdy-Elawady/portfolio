import { useRef } from "react";
import { useTextRevealScrollTrigger } from "../hooks";
import { cn } from "../utils";
export default function TextReveal({ children, className }) {
  const ref = useRef(null);
  useTextRevealScrollTrigger(".textReveal", ref);

  return (
    <div className={cn("isolate relative text-5xl", className)} ref={ref}>
      <div className="textReveal invisible">{children}</div>
      <div className="absolute top-0 opacity-30">{children}</div>
    </div>
  );
}
