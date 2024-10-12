import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
export default function usePointerFollower(ref, target, config) {
  const clipPosition = useRef({ x: 0, y: 0 });
  const { x, y } = config;
  // parseInt((100 * e.clientY) / window.innerHeight);
  // parseInt(
  //   (100 * (e.clientY + window.scrollY)) /
  //     document.documentElement.scrollHeight
  // );
  useGSAP(
    () => {
      const mouseHandler = (e) => {
        const xmouse = parseFloat(
          ((100 * e.clientX) / window.innerWidth).toFixed(2)
        );
        const ymouse = parseFloat(
          (
            (100 * (e.clientY + window.scrollY)) /
            document.documentElement.scrollHeight
          ).toFixed(2)
        );

        clipPosition.current = { xmouse, ymouse };
        gsap.to(target, {
          [x]: `${xmouse}%`,
          [y]: `${ymouse}%`,
          duration: 0.2,
        });
      };
      window.addEventListener("mousemove", mouseHandler);
      return () => window.removeEventListener("mousemove", mouseHandler);
    },
    { scope: ref }
  );
}
