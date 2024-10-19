import { cn } from "../utils";

export default function CurvedText({ children: text, className, ...rest }) {
  return (
    <svg
      className={cn("w-full ", className)}
      viewBox="0 0 964.79 150"
      {...rest}
    >
      <path
        id="curvy-path"
        fill="none"
        stroke="none"
        d="M0.05,150c102.24-9.81,181.61-21.58,235.05-33.05c124.52-26.74,154.51-46.43,236.86-46.79
        c67.52-0.3,95.83,12.73,209.9,36.03C746.5,119.4,842.46,136.68,964.74,150"
      />

      <text>
        {[...Array(3)].map((_, index, arr) => (
          <textPath
            key={index}
            href="#curvy-path"
            startOffset={offsetEquation(index) + "%"}
            textAnchor="middle"
            className={cn("fill-current", {
              "opacity-70": index !== parseInt(arr.length / 2),
            })}
          >
            {text}
            {index !== arr.length - 1 && ","}
          </textPath>
        ))}
      </text>
    </svg>
  );
}

const offsetEquation = (index) => {
  return index % 2 === 0 ? 30 * index + 20 : 25 * index + 25;
};
