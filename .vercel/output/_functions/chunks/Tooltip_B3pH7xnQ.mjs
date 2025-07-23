import { jsx } from 'react/jsx-runtime';
import 'react';
import { clsx } from 'clsx';

function Tooltip(props) {
  const { children, additionalClass = "", position = "right-center" } = props;
  let positionClass = "";
  if (position === "right-center") {
    positionClass = "left-full top-1/2 -translate-y-1/2 translate-x-1 ";
  } else if (position === "top-center") {
    positionClass = "bottom-full left-1/2 -translate-x-1/2 -translate-y-0.5";
  } else if (position === "bottom-center") {
    positionClass = "top-full left-1/2 -translate-x-1/2 translate-y-0.5";
  } else if (position === "left-center") {
    positionClass = "right-full top-1/2 -translate-y-1/2 -translate-x-1";
  } else if (position === "right-top") {
    positionClass = "left-full top-0";
  } else if (position === "right-bottom") {
    positionClass = "left-full bottom-0";
  } else if (position === "left-top") {
    positionClass = "right-full top-0";
  } else if (position === "left-bottom") {
    positionClass = "right-full bottom-0";
  } else if (position === "top-left") {
    positionClass = "bottom-full left-0";
  } else if (position === "top-right") {
    positionClass = "bottom-full right-0";
  } else if (position === "bottom-left") {
    positionClass = "top-full left-0";
  } else if (position === "bottom-right") {
    positionClass = "top-full right-0";
  }
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: clsx(
        "pointer-events-none absolute z-10 block w-max transform rounded-md bg-gray-900 px-2 py-1 text-sm font-medium text-white opacity-0 shadow-xs duration-100 group-hover:opacity-100",
        positionClass,
        additionalClass
      ),
      children
    }
  );
}

export { Tooltip as T };
