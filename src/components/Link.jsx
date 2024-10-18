import { cn } from "../utils";
import { useScrollTo } from "../hooks";
import { useRef } from "react";
export default function Link({ children, to, className, active, ...rest }) {
  const ref = useRef();
  const scrollTo = useScrollTo(ref);
  return (
    <div
      className={cn(
        "uppercase font-bold  group/link  overflow-hidden text-end text-nowrap",
        className
      )}
      {...rest}
      ref={ref}
    >
      <div
        onClick={() =>
          scrollTo(window, { duration: 2, scrollTo: to, ease: "power2" })
        }
        className={cn(
          "text-[--color-link] support-hover:group-hover/link:-translate-y-full transition-transform duration-500 relative p-2",
          {
            "-translate-y-full": active,
          }
        )}
      >
        <span className="">{children}</span>
        <span className="text-[--color-link-active] absolute top-full   left-0 h-full w-full p-2">
          {children}
        </span>
      </div>
    </div>
  );
}
