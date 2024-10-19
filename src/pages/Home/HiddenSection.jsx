import { useRef } from "react";
import { cn } from "../../utils";
import {
  hero,
  aboutMe,
  whatIDo,
  projects,
  skills,
  motivation,
  contacts,
} from "./constants";
import { useTransition, usePointerFollower } from "../../hooks";
import {
  Skills,
  CurvedText,
  Projects,
  MagneticLink,
  Signature,
} from "../../components";

export default function HiddenSection({ className }) {
  const hiddenSection = useRef(null);
  const cursorSize = "20px";
  const bigCursorSize = "200px";
  const { to } = useTransition(hiddenSection);
  usePointerFollower(hiddenSection, document.documentElement, {
    x: "--x",
    y: "--y",
  });
  console.log("first");

  return (
    <article
      className={cn(
        "absolute top-0 z-10 w-full text-[--black] bg-[--red] pointer-events-none",
        className
      )}
      style={{
        clipPath: `circle(var(--size,${cursorSize}) at var(--x,-10%) var(--y,-10%))`,
      }}
      ref={hiddenSection}
    >
      <section className="hero flex justify-center items-center flex-col  h-screen w-full pointer-events-auto">
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
          {hero.hidden.map((p, index) => (
            <div key={index}>{p}</div>
          ))}
        </div>
      </section>
      <section className="pointer-events-auto about-me-container-wrapper">
        <div
          className="about-me-container"
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
          <p className="section-title">{aboutMe.title}</p>
          <div className="about-me-content">{aboutMe.hidden}</div>
        </div>
      </section>

      <section className="what-i-do-container-wrapper">
        <div className="what-i-do-container ">
          <p className="section-title what-i-do-padding">{whatIDo.title}</p>
          <div className="divide-y-2 divide-[--white]">
            {whatIDo.content.map((skill, index) => (
              <div key={index} className="what-i-do-padding">
                <div className="flex justify-between items-center  flex-col md:flex-row gap-4 md:gap-8">
                  <div className="what-i-do-topic">{skill.topic}</div>
                  <span className="what-i-do-explan text-center md:text-end">
                    {skill.explanation}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-container-wrapper">
        <div className="projects-container inner-padding">
          <p className="section-title inner-padding">{projects.title}</p>
          <div className="projects-content">
            <Projects className="inner-padding">{projects.content}</Projects>
          </div>
        </div>
      </section>

      <section className="pointer-events-auto  skills-container-wrapper">
        <div
          className="skills-container"
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
          <p className="section-title inner-padding">{skills.title}</p>
          <Skills
            skills={[...skills.content].reverse()}
            className="skills-logos"
          />
        </div>
      </section>
      <section
        className="pointer-events-auto"
        onMouseEnter={() => {
          to(document.documentElement, {
            "--size": "50px",
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
        <CurvedText className="curved-footer">{motivation.hidden}</CurvedText>
        <div className="contacts-container">
          <Signature />
          <div className="contacts-content">
            {contacts.map((contact, index) => (
              <MagneticLink
                link={contact}
                key={index}
                className="contacts-links"
              />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
