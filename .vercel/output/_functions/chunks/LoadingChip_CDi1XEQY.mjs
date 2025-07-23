import { jsxs, jsx } from 'react/jsx-runtime';
import { Loader2Icon } from 'lucide-react';

function LoadingChip(props) {
  const { message = "Please wait..." } = props;
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-gray-300 bg-white py-2 pr-4 pl-3 text-sm", children: [
    /* @__PURE__ */ jsx(Loader2Icon, { className: "size-4 animate-spin text-gray-400" }),
    /* @__PURE__ */ jsx("span", { children: message })
  ] });
}

export { LoadingChip as L };
