import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { Check, Copy, Share2, Code2, Facebook, Linkedin } from 'lucide-react';
import { useState, useRef } from 'react';
import { M as Modal, c as cn, u as useOutsideClick } from './BaseLayout_BrSKT5L_.mjs';
import { u as useCopyText } from './use-copy-text_Bqwbcq8G.mjs';
import { T as TwitterIcon } from './TwitterIcon_0dO1HZCz.mjs';
import { useStore } from '@nanostores/react';
import './toast_BJ-iAXal.mjs';
import { c as currentRoadmap, i as isCurrentRoadmapPersonal } from './roadmap_41ouUrOm.mjs';

function EmbedRoadmapModal(props) {
  const { onClose } = props;
  const $currentRoadmap = useStore(currentRoadmap);
  useStore(isCurrentRoadmapPersonal);
  const roadmapId = $currentRoadmap?._id;
  const { copyText, isCopied } = useCopyText();
  const baseUrl = "https://roadmap.sh";
  const embedHtml = `<iframe src="${baseUrl}/r/embed?id=${roadmapId}" width="100%" height="500px" frameBorder="0"
></iframe>`;
  return /* @__PURE__ */ jsxs(Modal, { onClose, wrapperClassName: "max-w-[500px]", children: [
    /* @__PURE__ */ jsx("div", { className: "p-4 pb-0", children: /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold leading-5 text-gray-900", children: "Embed Roadmap" }) }),
    /* @__PURE__ */ jsxs("div", { className: "px-4 pt-3", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-2 text-sm text-gray-500", children: "Copy the following HTML code and paste it into your website." }),
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          value: embedHtml,
          readOnly: true,
          onClick: (e) => {
            e.currentTarget.select();
            copyText(embedHtml);
          },
          className: "w-full resize-none rounded-md border bg-gray-50 p-2 text-sm"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between px-4 pb-4 pt-2", children: /* @__PURE__ */ jsx(
      "button",
      {
        className: cn(
          "flex h-9 w-full items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white outline-hidden",
          {
            "bg-green-500 hover:bg-green-600 focus:bg-green-600": isCopied,
            "bg-gray-900 hover:bg-gray-800 focus:bg-gray-800": !isCopied
          }
        ),
        onClick: () => {
          copyText(embedHtml);
        },
        children: isCopied ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Check, { size: 14, className: "mr-2 stroke-[2.5]" }),
          "Copied"
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(Copy, { size: 14, className: "mr-2 stroke-[2.5]" }),
          "Copy Link"
        ] })
      }
    ) })
  ] });
}

function ShareRoadmapButton(props) {
  const { description, pageUrl, allowEmbed = false, roadmapId } = props;
  const { isCopied, copyText } = useCopyText();
  const [isEmbedModalOpen, setIsEmbedModalOpen] = useState(false);
  const containerRef = useRef(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${description}&url=${pageUrl}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?quote=${description}&u=${pageUrl}`;
  const hnUrl = `https://news.ycombinator.com/submitlink?t=${description}&u=${pageUrl}`;
  const redditUrl = `https://www.reddit.com/submit?title=${description}&url=${pageUrl}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${description}`;
  useOutsideClick(containerRef, () => {
    setIsDropdownOpen(false);
  });
  return /* @__PURE__ */ jsxs("div", { className: "relative", ref: containerRef, children: [
    isEmbedModalOpen && /* @__PURE__ */ jsx(
      EmbedRoadmapModal,
      {
        onClose: () => {
          setIsEmbedModalOpen(false);
        }
      }
    ),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setIsDropdownOpen(!isDropdownOpen),
        className: cn(
          "inline-flex h-full items-center justify-center rounded-md bg-yellow-400 px-3 py-1.5 text-xs font-medium hover:bg-yellow-500 sm:text-sm",
          {
            "bg-yellow-500": isDropdownOpen,
            "bg-green-400": isCopied
          }
        ),
        "aria-label": "Share Roadmap",
        children: [
          !isCopied && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Share2, { size: "15px" }),
            /* @__PURE__ */ jsx("span", { className: "ml-2 hidden sm:inline", children: "Share" })
          ] }),
          isCopied && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Check, { size: "15px" }),
            /* @__PURE__ */ jsx("span", { className: "ml-2 hidden sm:inline", children: "Copied" })
          ] })
        ]
      }
    ),
    isDropdownOpen && /* @__PURE__ */ jsx("div", { className: "absolute right-0 z-999 mt-1 w-40 rounded-md bg-slate-800 text-sm text-white shadow-lg ring-1 ring-black ring-opacity-5 w-[175px]", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col px-1 py-1", children: [
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            copyText(pageUrl);
            setIsDropdownOpen(false);
          },
          className: "flex w-full items-center gap-2 rounded-xs px-2 py-2 text-sm text-slate-100 hover:bg-slate-700",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex w-[20px] items-center justify-center", children: /* @__PURE__ */ jsx(Copy, { size: "15px", className: "text-slate-400" }) }),
            "Copy Link"
          ]
        }
      ),
      allowEmbed && roadmapId && /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            setIsDropdownOpen(false);
            setIsEmbedModalOpen(true);
          },
          className: "flex w-full items-center gap-2 rounded-xs px-2 py-2 text-sm text-slate-100 hover:bg-slate-700",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex w-[20px] items-center justify-center", children: /* @__PURE__ */ jsx(Code2, { size: "15px", className: "text-slate-400" }) }),
            "Embed Roadmap"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: twitterUrl,
          target: "_blank",
          className: "mt-1 flex w-full items-center gap-2 rounded-xs px-2 py-2 text-sm text-slate-100 hover:bg-slate-700",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex w-[20px] shrink-0 items-center justify-center", children: /* @__PURE__ */ jsx(TwitterIcon, { className: "h-[16px] text-slate-400" }) }),
            "Twitter"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: fbUrl,
          target: "_blank",
          className: "flex w-full items-center gap-2 rounded-xs px-2 py-2 text-sm text-slate-100 hover:bg-slate-700",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex w-[20px] items-center justify-center", children: /* @__PURE__ */ jsx(Facebook, { size: "16px", className: "text-slate-400" }) }),
            "Facebook"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: hnUrl,
          target: "_blank",
          className: "flex w-full items-center gap-2 rounded-xs px-2 py-2 text-sm text-slate-100 hover:bg-slate-700",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex w-[20px] items-center justify-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                alt: "hackernews logo",
                src: "/images/hackernews.svg",
                className: "h-5 w-5"
              }
            ) }),
            "Hacker News"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: redditUrl,
          target: "_blank",
          className: "flex w-full items-center gap-2 rounded-xs px-2 py-2 text-sm text-slate-100 hover:bg-slate-700",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex w-[20px] items-center justify-center", children: /* @__PURE__ */ jsx(
              "img",
              {
                alt: "reddit logo",
                src: "/images/reddit.svg",
                className: "h-5 w-5"
              }
            ) }),
            "Reddit"
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: linkedinUrl,
          target: "_blank",
          className: "flex w-full items-center gap-2 rounded-xs px-2 py-2 text-sm text-slate-100 hover:bg-slate-700",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex w-[20px] items-center justify-center", children: /* @__PURE__ */ jsx(Linkedin, { size: "16px", className: "text-slate-400" }) }),
            "LinkedIn"
          ]
        }
      )
    ] }) })
  ] });
}

export { ShareRoadmapButton as S };
