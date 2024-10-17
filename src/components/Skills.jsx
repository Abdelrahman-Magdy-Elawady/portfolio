import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Skills({ className, skills }) {
  const ref = useRef();
  useGSAP(
    () => {
      const tl = gsap.timeline({
        repeat: -1,
      });
      const svgs = gsap.utils.toArray("svg");
      svgs.forEach((logo) => {
        const tween = gsap.fromTo(
          logo,
          {
            strokeDasharray: 3000,
            strokeDashoffset: -3000,
          },
          {
            strokeDasharray: 3000,
            strokeDashoffset: 0,

            duration: 1,
            ease: "sine",
          }
        );
        tl.add(tween);
        const fill = gsap.fromTo(
          logo,
          {
            fill: "none",
          },
          {
            fill: "currentColor",
            duration: 0.1,
            ease: "sine",
          }
        );
        tl.add(fill);
      });
    },
    { scope: ref }
  );
  return (
    <div className={className} ref={ref}>
      <div className="flex  flex-wrap justify-center items-center gap-16 text-3xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full sm:w-auto flex flex-col justify-center items-center gap-2 "
          >
            <div className="w-20 h-20 [&_>_svg]:size-full [&_>_svg]:fill-none [&_>_svg]:stroke-current [&_>_svg]:stroke-[15px]">
              {skill.logo}
            </div>
            <div>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
