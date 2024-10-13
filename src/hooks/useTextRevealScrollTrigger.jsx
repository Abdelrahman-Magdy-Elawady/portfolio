import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

export default function useTextRevealScrollTrigger(target, ref) {
  useGSAP(
    () => {
      const el = document.querySelector(target);
      const text = el.innerHTML;
      gsap.to(target, {
        text: {
          value: text,
          newClass: "visible",
        },
        scrollTrigger: {
          toggleActions: "play play reset reset",
          start: "clamp(top 70%)",
          end: "clamp(top top)",
          trigger: target,
          scrub: true,
        },
      });
    },
    { scope: ref }
  );
}
