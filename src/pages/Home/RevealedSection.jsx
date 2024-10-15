import { myImg } from "../../assets";
import { hero, aboutMe, whatIDo, projects } from "./constants";
import {
  TextRevealWithScroll,
  HiddenTextReveal,
  RectSectionClip,
  Projects,
} from "../../components";
import { useTransition } from "../../hooks";

import { useRef } from "react";
export default function RevealedSection() {
  const revealedSection = useRef(null);
  const { to } = useTransition(revealedSection);

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
          <div className="hero absolute inset-0 text-[--white] flex justify-center items-center flex-col ">
            <HiddenTextReveal className="name">
              {hero.showen.name}
            </HiddenTextReveal>
            {hero.showen.content.map((p, index) => (
              <HiddenTextReveal key={index}>{p}</HiddenTextReveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative before:w-full before:h-5 before:bg-[--black]  before:top-0  before:absolute before:shadow-[0_0_50px_50px_var(--black)] about-me-container-wrapper"
        id="work"
      >
        <div className="about-me-container">
          <p className="section-title">{aboutMe.title}</p>
          <TextRevealWithScroll
            className="about-me-content"
            detectionConfig={{
              start: "clamp(top 80%)",
              end: "clamp(top 45%)",
            }}
          >
            {aboutMe.showen}
          </TextRevealWithScroll>
        </div>
      </section>
      <section className="what-i-do-container-wrapper">
        <div className="what-i-do-container ">
          <p className="section-title what-i-do-padding">{whatIDo.title}</p>
          <div className="divide-y-2 divide-[--white]">
            {whatIDo.content.map((skill, index) => (
              <RectSectionClip
                key={index}
                className="what-i-do-padding"
                showen={
                  <div className="flex justify-between items-center  flex-col md:flex-row gap-4 md:gap-8 ">
                    <TextRevealWithScroll
                      className="what-i-do-topic"
                      detectionConfig={{
                        start: "clamp(top 75%)",
                        end: "clamp(top 45%)",
                      }}
                    >
                      {skill.topic}
                    </TextRevealWithScroll>
                    <span className="what-i-do-explan text-center md:text-end invisible">
                      {skill.explanation}
                    </span>
                  </div>
                }
                hidden={
                  <div className="flex justify-between items-center  flex-col md:flex-row gap-4 md:gap-8 ">
                    <div className="what-i-do-topic">{skill.topic}</div>
                    <span className="what-i-do-explan text-center md:text-end">
                      {skill.explanation}
                    </span>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>
      <section
        className="projects-container-wrapper"
        onMouseEnter={() => {
          to(document.documentElement, {
            "--size": "0",
            duration: 0.3,
            ease: "sine",
          });
        }}
        onMouseLeave={() => {
          to(document.documentElement, {
            "--size": "20px",
            duration: 0.3,
            ease: "sine",
          });
        }}
      >
        <div className="projects-container">
          <p className="section-title">{projects.title}</p>
          <div className="projects-content">
            <Projects>{projects.content}</Projects>
          </div>
        </div>
      </section>
    </article>
  );
}
