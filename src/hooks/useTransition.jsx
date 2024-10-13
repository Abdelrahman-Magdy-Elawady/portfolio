import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function useTransition(ref) {
  const { contextSafe } = useGSAP(() => {}, { scope: ref });

  const to = contextSafe((target, config) => {
    gsap.to(target, { ...config });
  });
  const from = contextSafe((target, config) => {
    gsap.from(target, { ...config });
  });
  const fromTo = contextSafe((target, config1, config2) => {
    gsap.fromTo(target, { ...config1 }, { ...config2 });
  });

  return { to, from, fromTo };
}
