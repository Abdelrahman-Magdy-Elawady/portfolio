import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function useOnSectionEnter(config, ref) {
  useGSAP(
    () => {
      config?.forEach((section) => {
        ScrollTrigger.create({
          trigger: section?.target,
          start: "clamp(top center)",
          end: "clamp(top top)",
          onEnter: () => section?.whatToDo(),
          onEnterBack: () => section?.whatToDo(),
        });
      });
    },
    { scope: ref }
  );
}
