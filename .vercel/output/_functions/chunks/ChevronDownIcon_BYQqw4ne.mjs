import { jsx } from 'react/jsx-runtime';

function ChevronDownIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      className,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
        }
      )
    }
  );
}

export { ChevronDownIcon as C };
