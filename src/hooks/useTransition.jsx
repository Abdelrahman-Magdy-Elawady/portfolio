import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function useTransition(ref) {
  const { contextSafe } = useGSAP(() => {}, { scope: ref });
  const transitionHandler = contextSafe((method = "to", target, config) => {
    gsap[method](target, { ...config });
  });

  return transitionHandler;
}
