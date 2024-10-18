import { useRef } from "react";
import { useScrollProgress } from "../hooks";
import { cn } from "../utils";
export default function TextRevealWithScroll({
  children,
  className,
  detectionConfig,
  ...rest
}) {
  const ref = useRef(null);
  const progress = useScrollProgress(ref, ".trigger", detectionConfig);
  return (
    <div ref={ref} {...rest}>
      <div className={cn(className, "trigger text-[--light-white]")}>
        <span
          style={{
            backgroundImage: `linear-gradient(180deg,var(--white),var(--white))`,
            backgroundRepeat: "no-repeat",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            backgroundSize: `${progress}% 100%`,
          }}
        >
          {children}
        </span>
      </div>
    </div>
  );
}
