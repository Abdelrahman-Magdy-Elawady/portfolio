import { cn } from "../../utils";
import { useTransition } from "../../hooks";
import { useRef } from "react";
import styles from "./styles.module.css";

export default function RectSectionClip({ children, className }) {
  const ref = useRef(null);
  const { to } = useTransition(ref);

  return (
    <div className="relative isolate" ref={ref}>
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
            "absolute bg-[--red] text-[--black] top-0  w-full z-10 clip",
            styles["red-sec"]
          )}
          style={{
            clipPath: `inset(50% 0 50% 0)`,
          }}
        >
          {children}
        </div>
        <div className={styles["black-sec"]}>
          <div className={cn(className, "bg-[--black] text-[--white]")}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
