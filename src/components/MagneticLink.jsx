import { cn } from "../utils";
export default function MagneticLink({ className, link }) {
  const factor = 2;
  const handleMouseMove = (e) => {
    const transX = e.nativeEvent.offsetX - e.currentTarget.clientWidth / 2;
    const transY = e.nativeEvent.offsetY - e.currentTarget.clientHeight / 2;
    e.currentTarget.style.transform = `translateX(${
      transX * factor
    }px) translateY(${transY * factor}px)`;
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transform = `translateX(0px) translateY(0px)`;
  };

  return (
    <a
      className={cn(
        "cusror-pointer support-hover:hover:text-[--black] text-[--white]  aspect-square  transition-transform duration-500 w-8 p-2",
        className
      )}
      style={{
        transitionTimingFunction: `cubic-bezier(0.33, 1, 0.68, 1)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      target="_blanck"
      href={link.to}
    >
      {link.icon}
    </a>
  );
}
