import { jsx } from 'react/jsx-runtime';
import { c as cn } from './BaseLayout_B-BXcELP.mjs';

function CategoryFilterButton(props) {
  const { category, selected, onClick } = props;
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: cn(
        "border-b bg-linear-to-l py-1.5 pr-3 text-center text-sm text-gray-500 hover:text-gray-900 sm:text-right",
        {
          "from-white font-semibold text-gray-900": selected && category !== "All Roadmaps",
          "font-semibold text-gray-900": selected && category === "All Roadmaps",
          "hover:from-white": category !== "All Roadmaps"
        }
      ),
      type: "button",
      onClick,
      children: category
    }
  );
}

export { CategoryFilterButton as C };
