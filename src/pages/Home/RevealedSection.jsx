import { myImg } from "../../assets";
import { hero, aboutMe } from "./constants";
import { TextReveal } from "../../components";
import { useTextReveal } from "../../hooks";
import { useRef } from "react";

export default function RevealedSection() {
  const revealedSection = useRef(null);
  useTextReveal(".hero", revealedSection, "lines", {
    yPercent: 100,
    ease: "sine",
    delay: 0.75,
  });

  return (
    <article ref={revealedSection} className="bg-[--black] text-[--white]">
      <section id="about">
        <div
          className="h-screen w-full relative isolate heroImg"
          style={{
            backgroundImage: `url(${myImg})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          {/* <img
            src={myImg}
            role="presentation"
            loading="lazy"
            decoding="async"
            className="size-full object-cover object-center"
          /> */}
          <div className="absolute inset-0 text-[--white] flex justify-center items-center flex-col uppercase text-9xl font-extrabold">
            <div className="text-2xl hero overflow-hidden">
              {hero.showen.name}
            </div>
            {hero.showen.content.map((p, index) => (
              <div key={index} className="hero overflow-hidden">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative h-screen w-full font-extrabold  flex justify-center items-center shadow-[0_-4px_100px_100px_var(--black)]"
        id="work"
      >
        <div className="max-w-[1024px] space-y-8 ">
          <h6 className="uppercase">{aboutMe.title}</h6>
          <TextReveal>{aboutMe.showen}</TextReveal>
        </div>
      </section>
    </article>
  );
}
