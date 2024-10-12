import { cn } from "../utils";
export default function Link({ children, to, className, active, ...rest }) {
  return (
    <a
      href={to}
      className={cn(
        "uppercase font-bold  group/link  overflow-hidden text-end",
        className
      )}
      {...rest}
    >
      <div
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
    </a>
  );
}
