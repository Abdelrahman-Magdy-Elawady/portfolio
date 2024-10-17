import { useRef, useEffect } from "react";
import { cn } from "../utils";

export default function Carousel({
  children,
  className,
  buttonPosition = "middle",
  styles,
}) {
  const wrapper = useRef(null);

  const toLeft = () => {
    const element = wrapper.current;
    element.scrollBy({
      left: element.offsetWidth,
      behavior: "smooth",
    });
  };

  const toRight = () => {
    const element = wrapper.current;
    element.scrollBy({
      left: -element.offsetWidth,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const element = wrapper.current;
    if (element.scrollLeft === 0) {
      element.scrollLeft = element.scrollWidth / 2;
    } else if (
      element.scrollLeft + element.clientWidth >=
      element.scrollWidth
    ) {
      element.scrollLeft = element.scrollWidth / 2 - element.clientWidth;
    }
  };

  useEffect(() => {
    const element = wrapper.current;
    element.scrollLeft = element.scrollWidth / 2;
  }, []);

  return (
    <div className={cn(className, "flex flex-col gap-3 relative ")}>
      <div
        className="flex flex-nowrap overflow-hidden [&_>_*]:snap-start snap-mandatory snap-x [&_>_*]:flex-[0_0_auto]"
        ref={wrapper}
        onScroll={handleScroll}
      >
        {children}
        {children}
      </div>
      <div
        className={cn(
          "px-2 flex justify-center items-center text-4xl gap-4",
          buttonPosition === "middle"
            ? "justify-between absolute top-1/2 -translate-y-1/2 w-full p-0"
            : "",
          buttonPosition === "center" ? "self-center" : "",
          buttonPosition === "left" ? "self-start" : "",
          buttonPosition === "right" ? "self-end" : ""
        )}
      >
        <div
          className={cn(
            "w-8 bg-black text-white flex justify-center items-center aspect-square rounded-full support-hover:hover:cursor-pointer p-2",
            buttonPosition === "middle" ? "-translate-x-1/2" : "",
            styles?.button
          )}
          onClick={toRight}
        >
          <LeftArrow />
        </div>
        <div
          className={cn(
            "w-8 bg-black text-white  flex justify-center items-center aspect-square rounded-full support-hover:hover:cursor-pointer p-2",
            buttonPosition === "middle" ? "translate-x-1/2" : "",
            styles?.button
          )}
          onClick={toLeft}
        >
          <RightArrow />
        </div>
      </div>
    </div>
  );
}

const RightArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      className="size-full fill-current"
    >
      <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
    </svg>
  );
};

const LeftArrow = () => {
  return (
    <svg viewBox="0 0 320 512" className="size-full fill-current">
      <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
    </svg>
  );
};
