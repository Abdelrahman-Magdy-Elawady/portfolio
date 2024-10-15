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
      I&apos;m
      <span className="text-[--light-red]">
        &thinsp;selectively skilled&thinsp;
      </span>
      product designer with strong focus on producing high quality & impactful
      digital experience
    </>
  ),
  hidden: (
    <>
      A visual designer - with skills that haven&apos;t been replaced by A.I
      (yet) - making good shit only if the paycheck is equally good.
    </>
  ),
};

export const whatIDo = {
  title: "what i do",
  content: [
    {
      topic: "3d",
      explanation: 'i can produce anything that my 16" laptop can render',
    },
    {
      topic: "visual",
      explanation:
        "I search the internet for visual references and then combine them to create my own work.",
    },
    {
      topic: "motion",
      explanation:
        "I use fancy motion that makes my design more interesting that it actually is",
    },
    {
      topic: "product",
      explanation:
        "I utilize common design best practices, test, and re-iterate until it works (hopefully).",
    },
    {
      topic: "tutorial",
      explanation: "I thought I’d make millions of $ from Youtube but I didn’t",
    },
  ],
};

export const projects = {
  title: "recent work",
  content: [
    {
      title: "burek restaurant",
      img: "/src/assets/imgs/me.jpg",
    },
    {
      title: "doe donuts",
      img: "/src/assets/imgs/reel-poster.jpg",
    },
    {
      title: "burek restaurant",
      img: "/src/assets/imgs/me.jpg",
    },
    {
      title: "doe donuts",
      img: "/src/assets/imgs/reel-poster.jpg",
    },
    {
      title: "burek restaurant",
      img: "/src/assets/imgs/me.jpg",
    },
    {
      title: "doe donuts",
      img: "/src/assets/imgs/reel-poster.jpg",
    },
  ],
};
