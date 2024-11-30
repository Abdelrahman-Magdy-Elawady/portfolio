import { cn } from "../utils";
import { useMediaQuery } from "../hooks";

export default function CurvedText({ children: text, className, ...rest }) {
  const { isMd } = useMediaQuery();
  return (
    <svg
      className={cn("md:w-1/2 mx-auto", className)}
      viewBox="0 0 324.4 285.3"
      {...rest}
    >
      <path
        id="curvy-path"
        fill="none"
        stroke="#fff1"
        d="M0.5,90.7C52,3.4,164.6-25.5,251.8,26c69.8,41.2,93,131.3,51.7,201.1c-33,55.8-105,74.4-160.9,41.4
        c-44.7-26.4-59.5-84-33.1-128.7c21.1-35.7,67.2-47.6,102.9-26.5c28.6,16.9,38.1,53.8,21.2,82.4c-13.5,22.9-43,30.5-65.9,17
        c-18.3-10.8-24.4-34.4-13.6-52.7c8.6-14.6,27.5-19.5,42.2-10.8c11.7,6.9,15.6,22,8.7,33.7"
      />

      <text>
        {[...Array(isMd ? 3 : 2)].map((_, index, arr) => (
          <textPath
            key={index}
            href="#curvy-path"
            startOffset={isMd ? 25 * index + 12 + "%" : 17 + 40 * index + "%"}
            textAnchor="middle"
            dominantBaseline="hanging"
            className={cn("fill-current", {
              "opacity-70": index !== parseInt(arr.length / 2),
            })}
          >
            {text}
          </textPath>
        ))}
      </text>
    </svg>
  );
}
