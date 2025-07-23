import { jsxs, jsx } from 'react/jsx-runtime';

function ShareIcon(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" }),
        /* @__PURE__ */ jsx("polyline", { points: "16 6 12 2 8 6" }),
        /* @__PURE__ */ jsx("line", { x1: "12", x2: "12", y1: "2", y2: "15" })
      ]
    }
  );
}

export { ShareIcon as S };
