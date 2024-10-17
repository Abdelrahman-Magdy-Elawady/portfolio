import { links } from "./constants";
import { Navbar, SocialLinks } from "../../components";
import { useOnSectionEnter, usePointerFollower } from "../../hooks";
import { useRef, useState } from "react";
import RevealedSection from "./RevealedSection";
import HiddenSection from "./HiddenSection";

export default function HomePage() {
  const ref = useRef(null);
  const [activeOnEnterSection, setActiveOnEnterSection] = useState(0);

  useOnSectionEnter(
    links.map((link, i) => {
      return {
        target: link.to,
        whatToDo: () => setActiveOnEnterSection(i),
      };
    }),
    ref
  );
  usePointerFollower(ref, document.documentElement, { x: "--x", y: "--y" });

  return (
    <main className="w-full  select-none relative" ref={ref}>
      <header className="fixed h-screen w-full z-50  grid  grid-rows-2 pointer-events-none px-2 md:px-8 py-4 md:py-16 top-shadow bottom-shadow">
        <Navbar
          activeOnEnterSection={activeOnEnterSection}
          links={links}
          className="justify-self-end w-min h-min pointer-events-auto"
        />
        <SocialLinks className="self-end pointer-events-auto  w-min" />
      </header>
      <RevealedSection />
      <HiddenSection />
    </main>
  );
}
