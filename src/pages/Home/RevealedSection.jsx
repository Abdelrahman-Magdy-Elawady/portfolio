import { myImg } from "../../assets";
import {
  hero,
  aboutMe,
  whatIDo,
  projects,
  skills,
  motivation,
  contacts,
} from "./constants";
import {
  TextRevealWithScroll,
  HiddenTextReveal,
  RectSectionClip,
  Projects,
  Skills,
  CurvedText,
  MagneticLink,
} from "../../components";
import { useTransition } from "../../hooks";
import { useRef } from "react";

export default function RevealedSection() {
  const revealedSection = useRef(null);
  const { to } = useTransition(revealedSection);
  return (
    <article ref={revealedSection} className="bg-[--black] text-[--white]">
      <section className="relative">
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
            {hero.showen.map((p, index) => (
              <HiddenTextReveal key={index}>{p}</HiddenTextReveal>
            ))}
          </div>
        </div>
      </section>
      <section
        className="relative top-shadow about-me-container-wrapper"
        id="about"
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

      <section className="what-i-do-container-wrapper" id="what-i-do">
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
        id="work"
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
        <div className="projects-container inner-padding">
          <p className="section-title inner-padding">{projects.title}</p>
          <div className="projects-content">
            <Projects className="inner-padding ">{projects.content}</Projects>
          </div>
        </div>
      </section>

      <section className="skills-container-wrapper" id="skills">
        <div className="skills-container">
          <p className="section-title inner-padding">{skills.title}</p>
          <Skills skills={skills.content} className="skills-logos" />
        </div>
      </section>
      <section>
        <CurvedText className="curved-footer">{motivation.showen}</CurvedText>
      </section>

      <section className="contacts-container" id="contact">
        <div className="contacts-content">
          {contacts.map((contact, index) => (
            <MagneticLink
              link={contact}
              key={index}
              className="contacts-links"
            />
          ))}
        </div>
      </section>
    </article>
  );
}
