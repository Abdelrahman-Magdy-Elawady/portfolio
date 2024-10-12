import { twMerge } from "tailwind-merge";
import classNames from "classnames";

export default function cn(...className) {
  return twMerge(classNames(className));
}
