import { sections } from "./constants";
import { Navbar } from "../../components";
import { useOnSectionEnter, useMediaQuery } from "../../hooks";
import { useRef, useState } from "react";
import RevealedSection from "./RevealedSection";
import HiddenSection from "./HiddenSection";

export default function HomePage() {
  const ref = useRef(null);

  const [activeOnEnterSection, setActiveOnEnterSection] = useState(0);
  const { isMd } = useMediaQuery();
  useOnSectionEnter(
    sections.map((link, i) => {
      return {
        target: link.to,
        whatToDo: () => setActiveOnEnterSection(i),
      };
    }),
    ref
  );

  return (
    <main className="w-full select-none relative" ref={ref}>
      <div className="pointer-events-none fixed h-screen w-full z-50  top-shadow bottom-shadow" />
      <Navbar activeOnEnterSection={activeOnEnterSection} links={sections} />
      <RevealedSection />
      {isMd && <HiddenSection />}
    </main>
  );
}
