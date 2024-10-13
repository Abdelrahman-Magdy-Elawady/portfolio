import { useRef } from "react";

import { hero, aboutMe } from "./constants";
import { useTransition } from "../../hooks";

export default function HiddenSection() {
  const hiddenSection = useRef(null);
  const cursorSize = "20px";
  const bigCursorSize = "200px";
  const { to } = useTransition(hiddenSection);

  return (
    <article
      className="absolute top-0 z-10 w-full text-[--black] bg-[--red]  "
      style={{
        clipPath: `circle(var(--size,${cursorSize}) at var(--x,-10%) var(--y,-10%))`,
      }}
      ref={hiddenSection}
    >
      <section className="flex justify-center items-center flex-col uppercase text-9xl font-extrabold h-screen w-full ">
        <div
          className="text-center p-16 "
          onMouseEnter={() => {
            to(document.documentElement, {
              "--size": bigCursorSize,
              duration: 0.3,
              ease: "sine",
            });
          }}
          onMouseLeave={() => {
            to(document.documentElement, {
              "--size": cursorSize,
              duration: 0.3,
              ease: "sine",
            });
          }}
        >
          <div className="text-2xl">{hero.hidden.name}</div>
          {hero.hidden.content.map((p, index) => (
            <div key={index}>{p}</div>
          ))}
        </div>
      </section>
      <section className="h-screen w-full font-extrabold  flex justify-center items-center">
        <div
          className="max-w-[1024px] space-y-8"
          onMouseEnter={() => {
            to(document.documentElement, {
              "--size": bigCursorSize,
              duration: 0.3,
              ease: "sine",
            });
          }}
          onMouseLeave={() => {
            to(document.documentElement, {
              "--size": cursorSize,
              duration: 0.3,
              ease: "sine",
            });
          }}
        >
          <h6 className="uppercase">{aboutMe.title}</h6>
          <div className="text-5xl">{aboutMe.hidden}</div>
        </div>
      </section>
    </article>
  );
}
