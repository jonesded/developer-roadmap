import { jsx, jsxs } from 'react/jsx-runtime';
import { useQuery } from '@tanstack/react-query';
import { a as aiLimitOptions } from './ai-course_C2IOZ4Jw.mjs';
import { q as queryClient } from './query-client_CBXGK_YM.mjs';
import { u as useIsPaidUser } from './billing_5mov2PsZ.mjs';
import { PlusIcon, SearchIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { u as useDebounceValue } from './use-debounce_BdAoSD5T.mjs';

function AITutorHeader(props) {
  const { title, subtitle, onUpgradeClick, children } = props;
  const { data: limits } = useQuery(aiLimitOptions(), queryClient);
  useIsPaidUser();
  const { used, limit } = limits ?? { used: 0, limit: 0 };
  return /* @__PURE__ */ jsx("div", { className: "mb-3 flex min-h-[35px] items-center justify-between max-sm:mb-1", children: /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-row items-center justify-between gap-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "gap-2", children: [
      /* @__PURE__ */ jsx("h2", { className: "relative top-0 mb-1 flex-shrink-0 text-2xl font-semibold sm:mb-3 sm:text-3xl lg:top-1", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "mb-4 text-sm text-gray-500", children: subtitle })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-row items-center gap-2", children: /* @__PURE__ */ jsxs(
      "a",
      {
        href: "/ai",
        className: "flex flex-row items-center gap-2 rounded-lg bg-black px-4 py-1.5 text-sm font-medium text-white max-sm:hidden",
        children: [
          /* @__PURE__ */ jsx(PlusIcon, { className: "h-4 w-4" }),
          "New"
        ]
      }
    ) })
  ] }) });
}

function AICourseSearch(props) {
  const { value: defaultValue, onChange, placeholder, disabled } = props;
  const [searchTerm, setSearchTerm] = useState(defaultValue);
  const debouncedSearchTerm = useDebounceValue(searchTerm, 500);
  useEffect(() => {
    setSearchTerm(defaultValue);
  }, [defaultValue]);
  useEffect(() => {
    if (debouncedSearchTerm && debouncedSearchTerm.length < 3) {
      return;
    }
    if (debouncedSearchTerm === defaultValue) {
      return;
    }
    onChange(debouncedSearchTerm);
  }, [debouncedSearchTerm]);
  return /* @__PURE__ */ jsxs("div", { className: "relative mb-4", children: [
    /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", children: /* @__PURE__ */ jsx(SearchIcon, { className: "h-4 w-4 text-gray-400" }) }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        className: "block w-full rounded-lg border border-gray-200 bg-white py-3 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-gray-300 focus:ring-blue-500 focus:outline-hidden disabled:opacity-70 sm:text-sm",
        placeholder: placeholder || "Search courses...",
        value: searchTerm,
        onChange: (e) => setSearchTerm(e.target.value),
        disabled
      }
    )
  ] });
}

function AITutorTallMessage(props) {
  const { title, subtitle, icon: Icon, buttonText, onButtonClick } = props;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-grow flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-8", children: [
    /* @__PURE__ */ jsx(Icon, { className: "size-12 text-gray-300" }),
    /* @__PURE__ */ jsxs("div", { className: "my-4 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "mb-2 text-xl font-semibold", children: title }),
      subtitle && /* @__PURE__ */ jsx("p", { className: "text-base text-gray-600", children: subtitle })
    ] }),
    buttonText && onButtonClick && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: onButtonClick,
        className: "rounded-lg bg-black px-4 py-2 text-sm text-white hover:opacity-80",
        children: buttonText
      }
    )
  ] });
}

export { AITutorHeader as A, AICourseSearch as a, AITutorTallMessage as b };
