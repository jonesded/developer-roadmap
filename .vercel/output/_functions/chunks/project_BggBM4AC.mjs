import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { B as Badge } from './Badge_B3aqcRRK.mjs';
import { Users } from 'lucide-react';
import { f as formatCommaNumber } from './number_D9-I_I5P.mjs';
import { c as cn } from './BaseLayout_DfQviQZ5.mjs';
import 'js-cookie';
import { a as api } from './api_ybG8o1AR.mjs';

const badgeVariants = {
  beginner: "yellow",
  intermediate: "green",
  advanced: "blue"
};
function ProjectCard(props) {
  const { project, userCount = 0, status } = props;
  const { frontmatter, id } = project;
  const isLoadingStatus = status === void 0;
  const userStartedCount = status !== "none" && userCount === 0 ? userCount + 1 : userCount;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: `/projects/${id}`,
      className: "flex flex-col rounded-md border bg-white p-3 transition-colors hover:border-gray-300 hover:bg-gray-50",
      children: [
        /* @__PURE__ */ jsxs("span", { className: "flex justify-between gap-1.5", children: [
          /* @__PURE__ */ jsx(
            Badge,
            {
              variant: badgeVariants[frontmatter.difficulty],
              text: frontmatter.difficulty
            }
          ),
          /* @__PURE__ */ jsx(Badge, { variant: "grey", text: frontmatter.nature })
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "my-3 flex min-h-[100px] flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "mb-1 font-medium", children: frontmatter.title }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: frontmatter.description })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "flex min-h-[22px] items-center justify-between gap-2 text-xs text-gray-400", children: isLoadingStatus ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("span", { className: "h-5 w-24 animate-pulse rounded-sm bg-gray-200" }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "h-5 w-20 animate-pulse rounded-sm bg-gray-200" }),
          " "
        ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Users, { className: "size-3.5" }),
            userStartedCount > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
              formatCommaNumber(userStartedCount),
              " Started"
            ] }) : /* @__PURE__ */ jsx(Fragment, { children: "Be the first to solve!" })
          ] }),
          status !== "none" && /* @__PURE__ */ jsxs(
            "span",
            {
              className: cn(
                "flex items-center gap-1.5 rounded-full border border-current px-2 py-0.5 capitalize",
                status === "completed" && "text-green-500",
                status === "started" && "text-yellow-500"
              ),
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: cn("inline-block h-2 w-2 rounded-full", {
                      "bg-green-500": status === "completed",
                      "bg-yellow-500": status === "started"
                    })
                  }
                ),
                status
              ]
            }
          )
        ] }) })
      ]
    }
  );
}

function projectApi(context) {
  return {
    listProjectsUserCount: async function(projectIds) {
      return api(context).post(
        `${"https://api.hnmdevs.com"}/v1-list-projects-user-count`,
        {
          projectIds
        }
      );
    }
  };
}

export { ProjectCard as P, projectApi as p };
