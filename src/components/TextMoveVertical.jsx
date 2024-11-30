import { cn } from "../utils";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function TextMoveVertical({
  children,
  direction = "bottomUp",
  className,
  ...rest
}) {
  const ref = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
        yoyo: false,
        delay: 1,
        repeatDelay: 1,
      });
      tl.to(".original-char", {
        stagger: 0.03,
        rotationX: 90,
        transformOrigin: "50% 50% -50",
        ease: "sine.inOut",
      }).to(
        ".clone-char",
        {
          stagger: 0.03,
          rotationX: 0,
          transformOrigin: "50% 50% -50",
          ease: "sine.inOut",
          opacity: 1,
        },
        0
      );
    },
    { scope: ref }
  );

  const splitCharsOriginal = [...children].map((ch, index) => (
    <span
      key={index}
      className="original-char inline-block"
      style={{
        transform: "rotateX(0deg)",
      }}
    >
      {ch}
    </span>
  ));
  const splitCharsCloned = [...children].map((ch, index) => (
    <span
      key={index}
      className="clone-char inline-block"
      style={{
        transform: "rotateX(-90deg)",
        opacity: 0,
      }}
    >
      {ch}
    </span>
  ));

  return (
    <div {...rest} ref={ref} className={cn(className, "relative")}>
      <div
        style={{
          perspective: "200px",
        }}
      >
        {splitCharsOriginal}
      </div>
      <div
        className={cn("opacity-50 absolute top-0")}
        style={{
          perspective: "200px",
        }}
      >
        {splitCharsCloned}
      </div>
    </div>
  );
}
