import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState } from 'react';
import { c as cn } from './BaseLayout_C3JOBLhD.mjs';
import { d as decimalIfNeeded } from './number_D9-I_I5P.mjs';

function Rating(props) {
  const {
    rating = 0,
    starSize,
    className,
    onRatingChange,
    readOnly = false
  } = props;
  const [stars, setStars] = useState(Number(rating.toFixed(2)));
  const starCount = Math.floor(stars);
  const decimalWidthPercentage = Math.min((stars - starCount) * 100, 100);
  return /* @__PURE__ */ jsxs("div", { className: cn("flex", className), children: [
    [1, 2, 3, 4, 5].map((counter) => {
      const isActive = counter <= starCount;
      const hasDecimal = starCount + 1 === counter;
      return /* @__PURE__ */ jsx(
        RatingStar,
        {
          starSize,
          widthPercentage: isActive ? 100 : hasDecimal ? decimalWidthPercentage : 0,
          onClick: () => {
            if (readOnly) {
              return;
            }
            setStars(counter);
            onRatingChange?.(counter);
          },
          readOnly
        },
        `start-${counter}`
      );
    }),
    (props.total || 0) > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("span", { className: "ml-1.5 text-xs font-medium text-gray-400", children: decimalIfNeeded(Number(props.rating)) }),
      /* @__PURE__ */ jsxs("span", { className: "ml-1 text-xs text-gray-400", children: [
        "(",
        Intl.NumberFormat("en-US").format(props.total),
        ")"
      ] })
    ] })
  ] });
}
function RatingStar(props) {
  const { onClick, widthPercentage = 100, starSize = 20, readOnly } = props;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "relative block cursor-pointer text-gray-300 disabled:cursor-default aria-disabled:cursor-default",
      style: {
        width: `${starSize}px`,
        height: `${starSize}px`
      },
      onClick,
      "aria-disabled": readOnly,
      role: "button",
      children: /* @__PURE__ */ jsxs("span", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "fill-none",
            style: {
              width: `${starSize}px`,
              height: `${starSize}px`
            },
            children: /* @__PURE__ */ jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute inset-0 overflow-hidden",
            style: {
              width: `${widthPercentage}%`
            },
            children: /* @__PURE__ */ jsx(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                className: "fill-yellow-400 stroke-yellow-400",
                style: {
                  width: `${starSize}px`,
                  height: `${starSize}px`
                },
                children: /* @__PURE__ */ jsx("polygon", { points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" })
              }
            )
          }
        )
      ] })
    }
  );
}

export { Rating as R };
