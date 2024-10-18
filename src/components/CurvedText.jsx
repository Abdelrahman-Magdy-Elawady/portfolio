import { cn } from "../utils";
import { useScrollProgress } from "../hooks";
import { useRef } from "react";

export default function CurvedText({ children: text, className, ...rest }) {
  const ref = useRef();
  const progress = useScrollProgress(ref, "#curvy-path", {
    start: "clamp(top 75%)",
    end: "clamp(bottom bottom)",
  });

  return (
    <svg
      className={cn("w-full", className)}
      viewBox="0 0 250 90"
      ref={ref}
      {...rest}
    >
      <path
        id="curvy-path"
        fill="none"
        stroke="none"
        d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
      />
      <text>
        {[...Array(3)].map((_, index, arr) => (
          <textPath
            key={index}
            href="#curvy-path"
            startOffset={-50 + 50 * index + progress / arr.length + "%"}
            className="fill-current "
          >
            {text}
          </textPath>
        ))}
      </text>
    </svg>
  );
}
