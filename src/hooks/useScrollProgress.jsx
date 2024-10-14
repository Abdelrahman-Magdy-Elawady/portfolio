import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import { useState } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function useScrollProgress(ref, trigger, config) {
  const [scrollprogress, setScrollProgress] = useState(0);
  useGSAP(
    () => {
      ScrollTrigger.create({
        start: "clamp(top 75%)",
        end: "clamp(top top)",
        ...config,
        trigger,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        },
      });
    },
    { scope: ref }
  );

  return Number((scrollprogress * 100).toFixed(2));
}
