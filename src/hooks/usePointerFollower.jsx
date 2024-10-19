import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function usePointerFollower(ref, target, config) {
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

        gsap.to(target, {
          [x]: `${xmouse}%`,
          [y]: `${ymouse}%`,
          duration: 0.3,
        });
      };
      window.addEventListener("pointermove", mouseHandler);
      return () => window.removeEventListener("pointermove", mouseHandler);
    },
    { scope: ref }
  );
}
