import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { c as cn } from './BaseLayout_B-BXcELP.mjs';

function TableOfContent(props) {
  const { toc } = props;
  const [isOpen, setIsOpen] = useState(false);
  if (toc.length === 0) {
    return null;
  }
  const totalRows = toc.flatMap((heading) => {
    return [heading, ...heading.children];
  }).length;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative min-w-[250px] px-5 pt-0 max-lg:min-w-full max-lg:max-w-full max-lg:border-none max-lg:px-0 lg:pt-5",
        {
          "top-0 lg:sticky!": totalRows <= 20
        }
      ),
      children: [
        /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium max-lg:hidden", children: "In this article" }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            className: "flex w-full items-center justify-between gap-2 bg-gray-300 px-3 py-2 text-sm font-medium lg:hidden",
            onClick: () => setIsOpen(!isOpen),
            children: [
              "Table of Contents",
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  size: 16,
                  className: cn(
                    "transform transition-transform",
                    isOpen && "rotate-180"
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "ol",
          {
            className: cn(
              "mt-0.5 space-y-0 max-lg:absolute max-lg:top-full max-lg:mt-0 max-lg:w-full max-lg:bg-white max-lg:shadow-sm",
              !isOpen && "hidden lg:block",
              isOpen && "block"
            ),
            children: toc.map((heading) => /* @__PURE__ */ jsxs("li", { children: [
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: `#${heading.slug}`,
                  className: "text-sm text-gray-500 no-underline hover:text-black max-lg:block max-lg:border-b max-lg:px-3 max-lg:py-1",
                  onClick: () => {
                    if (!isOpen) {
                      return;
                    }
                    setIsOpen(false);
                  },
                  children: heading.text
                }
              ),
              heading.children.length > 0 && /* @__PURE__ */ jsx("ol", { className: "my-0 ml-4 mt-1 space-y-0 max-lg:ml-0 max-lg:mt-0 max-lg:list-none", children: heading.children.map((children) => {
                return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: `#${children.slug}`,
                    className: "text-sm text-gray-500 no-underline hover:text-black max-lg:block max-lg:border-b max-lg:px-3 max-lg:py-1 max-lg:pl-8",
                    onClick: () => {
                      if (!isOpen) {
                        return;
                      }
                      setIsOpen(false);
                    },
                    children: children.text
                  }
                ) }, children.slug);
              }) })
            ] }, heading.slug))
          }
        )
      ]
    }
  );
}

function RelatedGuides(props) {
  const { relatedTitle = "Other Guides", relatedGuides } = props;
  const [isOpen, setIsOpen] = useState(false);
  const relatedGuidesArray = Object.entries(relatedGuides).map(
    ([title, url]) => ({
      title,
      url
    })
  );
  if (relatedGuidesArray.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: cn("relative min-w-[250px] pt-0 lg:px-5 lg:pt-10"), children: [
    /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium max-lg:hidden", children: relatedTitle }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "flex w-full items-center justify-between gap-2 border-b bg-gray-300 px-3 py-2 text-sm font-medium lg:hidden",
        onClick: () => setIsOpen(!isOpen),
        children: [
          relatedTitle,
          /* @__PURE__ */ jsx(
            ChevronDown,
            {
              size: 16,
              className: cn(
                "transform transition-transform",
                isOpen && "rotate-180"
              )
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      "ol",
      {
        className: cn(
          "mt-0.5 space-y-0 max-lg:absolute max-lg:top-full max-lg:z-10 max-lg:mt-0 max-lg:w-full max-lg:bg-white max-lg:shadow-sm",
          !isOpen && "hidden lg:block",
          isOpen && "block"
        ),
        children: relatedGuidesArray.map((relatedGuide) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          "a",
          {
            href: relatedGuide.url,
            className: "text-sm text-gray-500 no-underline hover:text-black max-lg:block max-lg:border-b max-lg:px-3 max-lg:py-1",
            onClick: () => {
              if (!isOpen) {
                return;
              }
              setIsOpen(false);
            },
            children: relatedGuide.title
          }
        ) }, relatedGuide.url))
      }
    )
  ] });
}

export { RelatedGuides as R, TableOfContent as T };
