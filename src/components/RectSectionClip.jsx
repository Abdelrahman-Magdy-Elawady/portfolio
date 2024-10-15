import { cn } from "../utils";
import { useTransition } from "../hooks";
import { useRef } from "react";

export default function RectSectionClip({
  className,
  showen,
  hidden,
  ...rest
}) {
  const ref = useRef(null);
  const { to } = useTransition(ref);

  return (
    <div className="relative isolate" ref={ref} {...rest}>
      <div
        onMouseEnter={() => {
          to(".clip", {
            clipPath: `inset(0% 0%)`,
            duration: 0.5,
            ease: "sine",
          });
        }}
        onMouseLeave={() =>
          to(".clip", {
            clipPath: `inset(50% 0 50% 0)`,
            duration: 0.5,
            ease: "sine",
          })
        }
      >
        <div
          className={cn(
            className,
            "absolute bg-[--red] text-[--black] top-0  w-full z-10 clip"
          )}
          style={{
            clipPath: `inset(50% 0 50% 0)`,
          }}
        >
          {hidden}
        </div>
        <div>
          <div className={cn(className, "bg-[--black] text-[--white]")}>
            {showen}
          </div>
        </div>
      </div>
    </div>
  );
}
