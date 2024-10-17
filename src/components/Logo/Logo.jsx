import { useEffect, useRef } from "react";
import { cn } from "../../utils";

import styles from "./Logo.module.css";

export default function Logo({ className }) {
  const ref = useRef();
  //          className={cn("size-full fill-current", styles["svg-style"])}

  useEffect(() => {
    const path = document.querySelector("#svg-path");
    console.log(path.getTotalLength());
  }, []);
  return (
    <div
      className={cn(className, "absolute top-32 left-10 md:w-[30rem] w-44")}
      ref={ref}
    >
      <svg
        viewBox="0 0 8500 11000"
        className={cn("size-full fill-current", styles["svg-style"])}
      >
        <g id="Layer_x0020_1">
          <path
            id="svg-path"
            d="M2278.96 1273.55c0,30.56 1.78,109.1 6.67,140 5.51,34.85 10.93,79.7 22.22,113.33 9.95,29.63 25.17,82.07 54.44,100 15.81,9.68 53.01,-4.99 66.67,-16.67 82.36,-89.22 113.54,-254.22 150,-366.67 0.99,-6.28 -1.6,-7.81 3.33,-33.33m1096.67 170c0.86,-10.97 -0.07,-6.41 3.33,-16.67l0 -20m156.67 56.67c9.05,-15.68 6.67,-11.22 6.67,-30 2.31,-6.67 4.36,-13.32 6.67,-20l0 -16.67m720 26.67c-6.51,-16.78 -0.15,-19.88 -6.67,-36.67m-350 -3.33c-19.04,15.03 -41.04,21.7 -60,36.67 -31.23,35.53 -48.67,135.79 -113.33,146.67l-16.67 0c-13.17,-14.61 -10.14,-17.42 -16.67,-33.33 4.66,-14.37 3.33,-17.62 3.33,-33.33 13.37,-41.23 17.17,-93.76 30,-133.33 2.69,-18.28 -16.97,-73.07 -43.33,-73.33l-36.36 10.59c-28.97,21.37 -41.75,61.62 -46.97,66.07 -16.91,6.78 -34.13,17.16 -50,26.67l-13.33 0 -3.33 -103.33c-3.07,-9.48 -5.87,-22.91 -6.67,-33.33 -18.82,-16.55 -42.84,1.06 -63.33,13.33 -11.66,29.08 -24.56,70.63 -36.67,96.67 -18.92,12.37 -39.75,28.1 -60,36.67 -5.29,-13.62 -3.33,-21.23 -3.33,-36.67m-616.67 3.33c0,45.01 -6.59,113.83 13.33,156.67 15.36,0 45.54,-7.87 56.67,-16.67 21.19,-16.75 51.34,-124.48 63.33,-136.67 17.83,-10.68 35.85,-21.9 53.33,-33.33m-3.33 -143.33c18.63,0 45.22,-4.98 60,-16.67 32.1,-40.67 35.17,-74.26 50,-120l3.33 -66.67c-1.48,-9.38 -10.08,-50.63 -16.67,-56.67 -15.33,-7.13 -32.08,-16.28 -50,-16.67 -16.59,17.96 -29.82,47.09 -33.33,66.67 -0.32,14.7 -2.25,17.24 -6.67,30l-3.33 46.67c-8.5,26.2 -3.33,100.71 -3.33,133.33l0 20c8.11,25.02 3.33,92.47 3.33,123.33 9.25,7.95 6.27,-1.64 6.67,16.67 4.92,29.04 7.77,77.91 16.67,93.33 20.23,-8.11 34.62,-18.79 53.33,-30 5.64,-6.26 57.18,-158.13 106.74,-173.21 0.1,-0.03 42.24,-6.23 49.93,-0.12 4.48,3.56 27.63,49.48 23.33,76.67 -6.88,43.53 -32.72,141.68 -36.67,166.67 0,16.24 1.47,21.85 -3.33,36.67 3.67,8.94 4.81,13.51 6.67,23.33l13.33 13.33c26.52,-5.01 40.59,-7.65 53.33,-23.33 33.23,-50.81 51.21,-84.83 73.33,-140 17.24,-10.33 47.35,-31.85 66.67,-33.33 0.29,-13.11 -0.48,-8.23 3.33,-20l0 -13.33c-2.33,-7.02 -3.61,-10.09 -6.67,-16.67m-780 60l6.67 46.67c5.48,15.85 1.1,9.77 13.33,23.33 67.8,0 69.84,-40.11 79.54,-50.24l67.13 -26.43c1.48,-7.07 0.52,-5.5 3.33,-13.33l0 -33.33m-473.33 -53.33c0.84,-38.59 23.77,-82.68 16.67,-126.67 -3.42,-21.17 -7.44,-20.78 -23.33,-36.67l-33.33 0c-13.83,14.14 -23.09,28.12 -26.67,46.67 -5.3,27.46 5.89,87.02 26.67,106.67 15.46,8.93 14.29,4.91 30,10l10 0c33.39,12.96 68.98,-6.68 90,-10l33.33 -3.33 23.33 23.33m343.33 -6.67c-1.17,15.2 -5.5,18.13 -6.67,33.33 -5.32,15.37 -0.37,8.64 -10,16.67 -50.87,-50.88 -29.02,-22.82 -50,-36.67 -11.04,-7.29 -11,-26.67 -76.67,-26.67 -23.7,23.7 -33.3,33.74 -40,73.33l-3.33 43.33c-25.43,8.8 -39.87,20.59 -63.33,30 -25.76,43.01 -44.34,82.33 -73.33,126.67 -17.08,6.85 -37.24,16.24 -56.67,16.67 -18.72,-20.77 -12.25,-32.73 -10,-46.67l0 -26.67c2.51,-15.87 42.07,-150.91 46.67,-180l0 -16.67c16.29,-10.19 10.38,-13.15 26.67,-23.33m1620 113.33c0,45.01 -6.58,113.83 13.33,156.67 15.36,0 45.54,-7.87 56.67,-16.67 15.34,-12.13 39.31,-84.11 43.33,-90 14.83,-9.7 51.18,-33.4 66.67,-36.67 1.48,-7.07 0.52,-5.5 3.33,-13.33l0 -16.67c4.66,-14.39 5.5,-12.5 0,-26.67m-180 -3.33c-50.88,-50.88 -29.02,-22.82 -50,-36.67 -11.04,-7.29 -11,-26.67 -76.67,-26.67 -23.7,23.7 -33.3,33.74 -40,73.33 -2.34,13.83 -1.93,34.47 -6.67,46.67 14.7,21.93 -1.05,39.62 23.33,66.67 67.8,0 69.83,-40.11 79.54,-50.24l67.13 -26.43c1.48,-7.07 0.52,-5.5 3.33,-13.33l0 -33.33c9.63,-8.02 4.68,-1.29 10,-16.67 1.17,-15.2 5.5,-18.14 6.67,-33.33m163.33 163.33c1.27,-6.57 2.06,-10.1 3.33,-16.67 21.09,-13.79 42.02,-26.06 63.33,-40 0.27,-0.39 46.83,-151.22 96.67,-166.67 0.06,-0.02 38.17,-6.43 46.67,0 15.69,11.87 29.85,66.55 26.67,86.67l-20 93.33c-3.83,22.64 -10.23,98.33 -3.33,113.33l13.33 13.33c17.19,-0.37 39.28,-8.56 53.33,-16.67 37.91,-56.09 87.67,-151.42 100,-216.67m-3203.33 30c7.52,-19.38 -0.3,-35.18 6.67,-56.67m93.33 -336.67c-6.33,9.37 -8.09,11.23 -16.67,20 -7.31,18.24 -19.98,46.6 -30,63.33 -1.09,14.24 -3.23,18.27 -10,30 -0.4,18.3 -17.25,81.25 -23.33,100l-13.33 123.33 26.67 0 36.91 -19.52c22.7,-21.64 77.12,-216.05 83.09,-253.81l0 -40c-15.54,-14.34 -32.05,-22.87 -53.33,-23.33m193.33 420c9.43,16.33 6.67,13.85 6.67,33.33l13.33 53.33c4.37,11.8 17.19,27.19 26.67,36.67 13.5,0 50.86,-7.48 60,-13.33 11.5,-7.37 66.59,-93.24 66.67,-93.33 18.25,-16.85 27.13,-14.96 46.67,-26.67l20 0 0 -76.67c3.91,-12.05 2.19,-15.12 6.67,-26.67m83.33 -316.67l-30 36.67c-4.98,23.62 -19.73,51 -26.99,80 -6.16,24.6 -12.25,60.45 -19.67,83.33l-3.33 50c-6.28,19.38 -3.33,44.97 -3.33,66.67 38.97,0 54.56,0.84 80,-30 25.41,-37.61 33.07,-58.23 53.33,-93.33 10.81,-34.92 22.42,-90.28 16.67,-126.67 -6.25,-19.27 -6.09,-31.67 -16.67,-50 -15.74,-9.09 -31.95,-13.26 -50,-16.67m-1010 556.67c-7.14,34.06 -2.91,39.13 -20,73.33 -14.1,28.24 -51.65,73.09 -76.67,73.33 -9.9,-3.21 -19.02,-5.82 -30,-6.67 -14.83,-7.19 -13.33,-30 -13.33,-30 -4.35,-14.39 -4.35,-5.61 0,-20 1.79,-12.08 -4.87,-6.88 10,-36.67 12.86,-25.74 47.26,-60.42 66.73,-66.58 14.15,-0.4 26.5,-4.22 39.94,-6.76 9.78,9.78 12.1,13.13 23.33,20 3.15,-6.62 4.33,-9.6 6.67,-16.67 0.9,-11.44 -0.12,-6.01 3.33,-16.67 0,-15.11 -1.87,-19.93 3.33,-33.33m373.33 10c-12.76,4.95 -12.24,3.33 -26.67,3.33 -43.32,7.28 -39.31,24.67 -70,40 -15.33,7.13 -38.62,12.94 -56.67,13.33 -29.8,-30.46 -33.33,-73.71 -33.33,-113.33m500 -113.33l20 20c21.56,-1.66 42.2,-5.98 56.67,-26.67 7.35,-10.52 6.97,-20.59 6.67,-30 -24.22,-21.83 -56.08,-24.9 -73.33,10 -4.73,10.18 -5.91,16.7 -10,26.67 -19.22,21.32 -13.57,47.06 -16.67,66.67 -4.66,14.37 -3.33,17.62 -3.33,33.33 -12.43,11.47 -41.67,27.32 -56.67,33.33 -14.3,23.87 -24.29,48.43 -38.87,73.33 -13.76,23.47 -62.22,96.38 -84.46,110 -12.09,7.41 -47.89,10 -63.33,10 -10.28,-11.13 -14.23,-18.77 -23.33,-30 -1.37,-17.39 2.87,-3.28 -6.67,-16.67 -3.1,-16.42 -8.42,-44.84 -13.33,-60 -1.05,-6.62 2.46,-26.48 -6.67,-50l0 -96.67c-21.7,0 -33.31,2.78 -56.35,-13.96 -23.3,-16.94 -13.41,-30.52 -73.65,-39.37 -19.51,-2.87 -29.95,13.21 -40,33.33 -13.83,27.69 -10.87,29.32 -16.67,60 -13.07,-3.55 -4.6,1.11 -16.67,-10 -19.26,0.42 -30.55,9.66 -50,13.33 -0.13,0.07 -32.56,35.83 -80,43.33l-40 0c-0.86,-10.97 0.07,-6.41 -3.33,-16.67 -1.2,-7.42 -0.29,-45.28 -10,-76.67 -3.59,-11.62 -18.45,-34.86 -30,-46.67 -34.77,0 -56.46,1.48 -80,30 -34.11,50.48 -54.11,77.1 -76.67,133.33 -17.55,10.51 -35.44,25.04 -56.67,26.67 -9.15,-23.57 -7.7,-52.15 -10,-66.67 -6.97,-21.49 3.9,-21.64 -13.33,-33.33m-593.33 223.33l0 -23.33c-8.31,-25.63 -3.33,-61.67 -3.33,-90 -4.49,-13.83 -3.33,-14.85 -3.33,-30 6.6,-41.77 3.7,-111.2 6.67,-130 4.66,-14.37 3.33,-17.62 3.33,-33.33 6.16,-38.97 0.69,-32.4 6.67,-63.33m-126.67 60c8.22,-17.67 4.8,-27.41 36.67,-43.33 24.24,-12.11 63.06,-16.67 90,-16.67l6.67 -6.67m330 10c5.2,-13.4 3.33,-18.22 3.33,-33.33 2.33,-7.02 3.61,-10.09 6.67,-16.67m236.67 40c-8.95,-23.06 -3.33,-81.76 -3.33,-110 4.8,-14.81 3.33,-20.43 3.33,-36.67 3.36,-10.35 3.31,-16.31 6.67,-26.67l0 -20c3.05,-18.13 18.3,-63.59 30,-80l13.33 -13.33c21.59,1.66 47.89,7.31 60,26.67 13.17,21.03 17.02,83.34 13.33,106.67 -17.69,54.57 -25.59,97.93 -70,143.33 -13.19,7.06 -36.87,10 -53.33,10l0 153.33c-10.99,14.57 -33.61,25.95 -50,36.67 -15.11,32.5 -31.98,100.99 -45.53,140 -13.37,38.5 -64.11,142.2 -101.14,156.67 -8.89,3.47 -41.91,9.89 -53.33,0 -6.03,-9.22 -11.09,-17.36 -16.67,-26.67 -1.13,-14.76 0.8,-7.05 -6.67,-20 -6,-21.47 -9.7,-137.51 -6.67,-156.67l26.67 -213.33c5.82,-36.83 0.99,-30.6 6.67,-60 -11.23,-6.87 -13.55,-10.22 -23.33,-20l-70 3.33c-25.96,8.42 -76.59,3.33 -106.67,3.33 -25.81,8.37 -97.96,3.33 -130,3.33 0,-32.63 16.01,-97.99 27.48,-126.67 16.49,-41.26 41.15,-101.36 75.86,-130 34.34,-23.21 40.82,-29.78 80,-43.33l73.33 -3.33c25.43,6.32 61.17,46.17 70,70 0.94,12.29 3.05,13.49 3.33,26.67l13.33 93.33c-6.87,21.17 -3.33,49.75 -3.33,73.33 26.92,19.18 73.36,-0.56 96.67,-20 15.51,-15.85 21.54,-28.47 30,-46.67"
          />
        </g>
      </svg>
    </div>
  );
}