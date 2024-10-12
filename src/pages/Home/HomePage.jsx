import { links, hero } from "./constants";
import { Navbar, SocialLinks } from "../../components";
import {
  useOnSectionEnter,
  usePointerFollower,
  useTransition,
} from "../../hooks";
import { myImg } from "../../assets";
import { useRef, useState } from "react";
import { cn } from "../../utils";

export default function HomePage() {
  const ref = useRef(null);
  const [activeOnEnterSection, setActiveOnEnterSection] = useState(0);
  const cursorSize = "25px";
  const bigCursorSize = "200px";
  useOnSectionEnter(
    links.map((link, i) => {
      return {
        target: link.to,
        whatToDo: () => setActiveOnEnterSection(i),
      };
    }),
    ref
  );
  usePointerFollower(ref, ".red_section", { x: "--x", y: "--y" });
  const transitionHandler = useTransition(ref);

  return (
    <main
      className="w-full bg-[--black] text-[--white] select-none relative"
      ref={ref}
    >
      <header className="fixed h-screen w-full z-50 px-8 py-16 grid grid-cols-2 grid-rows-2 pointer-events-none">
        <div></div>
        <Navbar
          activeOnEnterSection={activeOnEnterSection}
          links={links}
          className="justify-self-end w-min h-min pointer-events-auto"
        />
        <SocialLinks className="self-end pointer-events-auto  w-min" />
      </header>

      <section className="dark__black">
        <div id="about">
          <div className="h-screen w-full relative isolate">
            <img
              src={myImg}
              role="presentation"
              loading="lazy"
              decoding="async"
              className="size-full object-cover object-center"
            />
            <div className="absolute inset-0 text-[--white] flex justify-center items-center flex-col uppercase text-9xl font-extrabold ">
              {hero.showen.map((p, index) => (
                <div
                  key={index}
                  className={cn({
                    "text-2xl": index === 0,
                  })}
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div id="work">
          <div className="h-screen w-full relative isolate ">
            <img
              src={myImg}
              role="presentation"
              loading="lazy"
              decoding="async"
              className="size-full object-cover object-center"
            />
            <div className="absolute inset-0 text-[--white] flex justify-center items-center flex-col uppercase text-9xl font-extrabold ">
              {hero.showen.map((p, index) => (
                <div
                  key={index}
                  className={cn({
                    "text-2xl": index === 0,
                  })}
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        className="red_section absolute top-0 z-10 w-full"
        style={{
          clipPath: `circle(var(--size,${cursorSize}) at var(--x,50%) var(--y,50%))`,
        }}
      >
        <div className="text-[--black] bg-[--red]  flex justify-center items-center flex-col uppercase text-9xl font-extrabold h-screen w-full border-2">
          <div
            className="text-center p-16 "
            onMouseEnter={() => {
              transitionHandler("to", ".red_section", {
                "--size": bigCursorSize,
                duration: 0.5,
                ease: "sine",
              });
            }}
            onMouseLeave={() => {
              transitionHandler("to", ".red_section", {
                "--size": cursorSize,
                duration: 0.5,
                ease: "sine",
              });
            }}
          >
            {hero.hidden.map((p, index) => (
              <div
                key={index}
                className={cn({
                  "text-2xl": index === 0,
                })}
              >
                {p}
              </div>
            ))}
          </div>
        </div>

        <div id="work">
          <div className=" text-[--black] bg-[--red] flex justify-center items-center flex-col uppercase text-9xl font-extrabold  h-screen">
            {hero.hidden.map((p, index) => (
              <div
                key={index}
                className={cn({
                  "text-2xl": index === 0,
                })}
              >
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
