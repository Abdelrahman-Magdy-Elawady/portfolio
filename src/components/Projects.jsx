import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import RectSectionClip from "./RectSectionClip";
import TextRevealWithScroll from "./TextRevealWithScroll";

export default function Projects({ children: projects }) {
  const ref = useRef();
  const { contextSafe } = useGSAP(() => {}, { scope: ref });
  const mouseHandler = contextSafe((e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    gsap.to(".imgs-container", {
      x: `${offsetX}`,
      y: `${offsetY}`,
      xPercent: -50,
      yPercent: -50,
      width: `250px`,
      height: "200px",
      ease: "sine",
      duration: 0.1,
    });
  });
  const leaveHandler = contextSafe(() => {
    gsap.to(".imgs-container", {
      width: `0px`,
      height: `0px`,
      ease: "sine",
      duration: 0.3,
    });
  });
  const translateHandler = contextSafe((index) => {
    gsap.to(".imgs-container-inner", {
      yPercent: `${-index * 100}`,
      ease: "sine",
      duration: 0.5,
    });
  });
  return (
    <div ref={ref} className="relative isolate w-full h-full ">
      <div
        className="w-full h-full"
        onMouseMove={mouseHandler}
        onMouseLeave={leaveHandler}
      >
        <div className="pointer-events-none imgs-container absolute  overflow-hidden h-0 w-0 z-10 -translate-y-1/2 -translate-x-1/2">
          <div className="imgs-container-inner h-full w-full">
            {projects.map((project, index) => (
              <div
                key={index}
                className="h-full w-full border-[--red] border-2"
              >
                <img
                  src={project?.img}
                  alt=""
                  className="size-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="divide-y-2 divide-[--white]">
          {projects.map((project, index) => (
            <RectSectionClip
              className="py-2"
              onMouseEnter={() => {
                translateHandler(index);
              }}
              key={index}
              showen={
                <TextRevealWithScroll
                  detectionConfig={{
                    start: "clamp(top 75%)",
                    end: "clamp(top 50%)",
                  }}
                >
                  {project.title}
                </TextRevealWithScroll>
              }
              hidden={<div>{project.title}</div>}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
