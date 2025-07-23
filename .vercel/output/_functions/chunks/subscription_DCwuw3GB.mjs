import { jsxs, jsx } from 'react/jsx-runtime';
import { c as cn } from './BaseLayout_B-BXcELP.mjs';
import { atom } from 'nanostores';

function FormatItem(props) {
  const { label, onClick, icon: Icon, isSelected } = props;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      className: cn(
        "flex w-full flex-col items-center justify-center gap-2.5 rounded-xl border border-gray-200 p-2 py-8",
        isSelected ? "border-gray-400 font-medium bg-white" : "bg-white text-gray-400 hover:bg-white hover:border-gray-300"
      ),
      onClick,
      children: [
        /* @__PURE__ */ jsx(Icon, { className: "size-6" }),
        /* @__PURE__ */ jsx("span", { children: label })
      ]
    }
  );
}

const isUpgradeModalOpen = atom(false);
function showUpgradeModal() {
  isUpgradeModalOpen.set(true);
}

export { FormatItem as F, showUpgradeModal as s };
