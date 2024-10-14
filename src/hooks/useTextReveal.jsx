import { useGSAP } from "@gsap/react";
import gsap from "gsap";

//------------------------------------------------------------
export default function useTextReveal(targets, ref, config) {
  useGSAP(
    () => {
      const targetsArr = gsap.utils.toArray(targets);
      targetsArr.forEach((target) => {
        gsap.from(target, {
          ...config,
        });
      });
    },
    { scope: ref }
  );
}
