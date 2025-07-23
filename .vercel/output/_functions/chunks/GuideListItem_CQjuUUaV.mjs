import { jsxs, jsx } from 'react/jsx-runtime';
import './sql_CVVaw0yS.mjs';
import 'slugify';
import './william_CzEL3-Tg.mjs';
import './why-build-it-and-they-will-come-wont-work-anymore_YFYGVNGT.mjs';
import './markdown_rbU7j7cH.mjs';
import dayjs from 'dayjs';

function isQuestionGroupType(guide) {
  return guide.questions !== void 0;
}
function GuideListItem(props) {
  const { guide } = props;
  const { frontmatter, id } = guide;
  let pageUrl = "";
  let guideType = "";
  if (isQuestionGroupType(guide)) {
    pageUrl = `/questions/${id}`;
    guideType = "Questions";
  } else {
    const excludedBySlug = frontmatter.excludedBySlug;
    pageUrl = excludedBySlug ? excludedBySlug : `/guides/${id}`;
    guideType = frontmatter.type;
  }
  const isNew = frontmatter.date ? dayjs().diff(dayjs(frontmatter.date), "day") < 15 : false;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      className: "text-md group block flex items-center justify-between border-b py-2 text-gray-600 no-underline hover:text-blue-600",
      href: pageUrl,
      children: [
        /* @__PURE__ */ jsxs("span", { className: "text-sm transition-transform group-hover:translate-x-2 md:text-base", children: [
          frontmatter.title,
          isNew && /* @__PURE__ */ jsxs("span", { className: "ml-2.5 rounded-xs bg-green-300 px-1.5 py-0.5 text-xs font-medium text-green-900 uppercase", children: [
            "New",
            /* @__PURE__ */ jsxs("span", { className: "hidden sm:inline", children: [
              " · ",
              frontmatter.date ? dayjs(frontmatter.date).format("MMMM") : ""
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "hidden text-xs text-gray-500 capitalize sm:block", children: guideType }),
        /* @__PURE__ */ jsx("span", { className: "block text-xs text-gray-400 sm:hidden", children: " »" })
      ]
    }
  );
}

export { GuideListItem as G };
