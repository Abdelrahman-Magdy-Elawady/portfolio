export const links = [
  {
    label: "about",
    to: "#about",
  },
  {
    label: "work",
    to: "#work",
  },
  {
    label: "contact",
    to: "#contact",
  },
];

export const hero = {
  showen: {
    name: "abdelrahman magdy",
    content: [
      "making",
      <span className="text-[--red]" key={1}>
        good
      </span>,
      <span className="text-[--red]" key={2}>
        shit
      </span>,
      "since",
      "2009",
    ],
  },
  hidden: {
    name: "abdo magdy",
    content: ["hiding", " bad", "shit", "since", "2009"],
  },
};

export const aboutMe = {
  title: "about me",
  showen: (
    <>
      I&apos;m <span className="text-[--red]">selectively skilled</span> product
      designer with strong focus on producing high quality & impactful digital
      experience
    </>
  ),
  hidden: (
    <>
      A visual designer - with skills that haven&apos;t been replaced by A.I
      (yet) - making good shit only if the paycheck is equally good.
    </>
  ),
};
