import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate } from '../chunks/astro/server_Cqa-EqH9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { c as cn, $ as $$BaseLayout } from '../chunks/BaseLayout_C3JOBLhD.mjs';
import { Users2, Zap, FolderKanban, Users, GitPullRequest } from 'lucide-react';
import { E as ErrorIcon } from '../chunks/ErrorIcon_C-N2vwX6.mjs';
import { a as api } from '../chunks/api_z2VutCmy.mjs';
export { renderers } from '../renderers.mjs';

function TrophyEmoji(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 36 36",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#ffac33",
            d: "M5.123 5h6C12.227 5 13 4.896 13 6V4c0-1.104-.773-2-1.877-2h-8c-2 0-3.583 2.125-3 5c0 0 1.791 9.375 1.917 9.958C2.373 18.5 4.164 20 6.081 20h6.958c1.105 0-.039-1.896-.039-3v-2c0 1.104-.773 2-1.877 2h-4c-1.104 0-1.833-1.042-2-2S3.539 7.667 3.539 7.667C3.206 5.75 4.018 5 5.123 5m25.812 0h-6C23.831 5 22 4.896 22 6V4c0-1.104 1.831-2 2.935-2h8c2 0 3.584 2.125 3 5c0 0-1.633 9.419-1.771 10c-.354 1.5-2.042 3-4 3h-7.146C21.914 20 22 18.104 22 17v-2c0 1.104 1.831 2 2.935 2h4c1.104 0 1.834-1.042 2-2s1.584-7.333 1.584-7.333C32.851 5.75 32.04 5 30.935 5M20.832 22c0-6.958-2.709 0-2.709 0s-3-6.958-3 0s-3.291 10-3.291 10h12.292c-.001 0-3.292-3.042-3.292-10"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#ffcc4d",
            d: "M29.123 6.577c0 6.775-6.77 18.192-11 18.192s-11-11.417-11-18.192c0-5.195 1-6.319 3-6.319c1.374 0 6.025-.027 8-.027l7-.001c2.917-.001 4 .684 4 6.347"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#c1694f",
            d: "M27 33c0 1.104.227 2-.877 2h-16C9.018 35 9 34.104 9 33v-1c0-1.104 1.164-2 2.206-2h13.917c1.042 0 1.877.896 1.877 2z"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#c1694f",
            d: "M29 34.625c0 .76.165 1.375-1.252 1.375H8.498C7.206 36 7 35.385 7 34.625v-.25C7 33.615 7.738 33 8.498 33h19.25c.759 0 1.252.615 1.252 1.375z"
          }
        )
      ]
    }
  );
}

function SecondPlaceMedalEmoji(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 36 36",
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { fill: "#55acee", d: "m18 8l-7-8H0l14 17l11.521-4.75z" }),
        /* @__PURE__ */ jsx("path", { fill: "#3b88c3", d: "m25 0l-7 8l5.39 7.312l1.227-1.489L36 0z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#ccd6dd",
            d: "M23.205 16.026c.08-.217.131-.448.131-.693a2 2 0 0 0-2-2h-6.667a2 2 0 0 0-2 2c0 .245.05.476.131.693c-3.258 1.826-5.464 5.307-5.464 9.307C7.335 31.224 12.111 36 18.002 36s10.667-4.776 10.667-10.667c0-4-2.206-7.481-5.464-9.307"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#627077",
            d: "M22.002 28.921h-3.543c.878-1.234 2.412-3.234 3.01-4.301c.449-.879.729-1.439.729-2.43c0-2.076-1.57-3.777-4.244-3.777c-2.225 0-3.74 1.832-3.74 1.832c-.131.15-.112.374.019.487l1.141 1.159a.36.36 0 0 0 .523 0c.355-.393 1.047-.935 1.813-.935c1.047 0 1.646.635 1.646 1.346c0 .523-.243 1.047-.486 1.421c-1.104 1.682-3.871 5.441-4.955 6.862v.374c0 .188.149.355.355.355h7.732a.37.37 0 0 0 .355-.355v-1.682a.367.367 0 0 0-.355-.356"
          }
        )
      ]
    }
  );
}

function ThirdPlaceMedalEmoji(props) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 36 36",
      ...props,
      children: [
        /* @__PURE__ */ jsx("path", { fill: "#55ACEE", d: "m18 8l-7-8H0l14 17l11.521-4.75z" }),
        /* @__PURE__ */ jsx("path", { fill: "#3B88C3", d: "m25 0l-7 8l5.39 7.312l1.227-1.489L36 0z" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#FF8A3B",
            d: "M23.205 16.026c.08-.217.131-.448.131-.693a2 2 0 0 0-2-2h-6.667a2 2 0 0 0-2 2c0 .245.05.476.131.693c-3.258 1.826-5.464 5.307-5.464 9.307C7.335 31.224 12.111 36 18.002 36s10.667-4.776 10.667-10.667c0-4-2.206-7.481-5.464-9.307"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            fill: "#7C4119",
            d: "m14.121 29.35l1.178-1.178a.345.345 0 0 1 .467-.038s1.159.861 2.056.861c.805 0 1.628-.673 1.628-1.496s-.842-1.514-2.225-1.514h-.639a.367.367 0 0 1-.354-.355v-1.552c0-.206.168-.355.354-.355h.639c1.309 0 2-.635 2-1.439c0-.805-.691-1.402-1.496-1.402c-.823 0-1.346.43-1.626.747c-.132.15-.355.15-.504.02l-1.141-1.122c-.151-.132-.132-.355 0-.486c0 0 1.533-1.646 3.57-1.646c2.169 0 4.039 1.328 4.039 3.422c0 1.439-1.085 2.505-1.926 2.897v.057c.879.374 2.262 1.533 2.262 3.141c0 2.038-1.776 3.572-4.357 3.572c-2.354 0-3.552-1.16-3.944-1.664c-.113-.134-.093-.34.019-.47"
          }
        )
      ]
    }
  );
}

function LeaderboardPage(props) {
  const { stats } = props;
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "container pb-5 sm:pb-8", children: [
    /* @__PURE__ */ jsxs("h1", { className: "my-5 flex items-center text-lg font-medium text-black sm:mb-4 sm:mt-8", children: [
      /* @__PURE__ */ jsx(Users2, { className: "mr-2 size-5 text-black" }),
      "Leaderboard"
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-2 sm:gap-3 md:grid-cols-2", children: [
      /* @__PURE__ */ jsx(
        LeaderboardLane,
        {
          title: "Longest Visit Streak",
          tabs: [
            {
              title: "Active",
              users: stats.streaks?.active || [],
              emptyIcon: /* @__PURE__ */ jsx(Zap, { className: "size-16 text-gray-300" }),
              emptyText: "No users with streaks yet"
            },
            {
              title: "Lifetime",
              users: stats.streaks?.lifetime || [],
              emptyIcon: /* @__PURE__ */ jsx(Zap, { className: "size-16 text-gray-300" }),
              emptyText: "No users with streaks yet"
            }
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        LeaderboardLane,
        {
          title: "Projects Completed",
          tabs: [
            {
              title: "This Month",
              users: stats.projectSubmissions.currentMonth,
              emptyIcon: /* @__PURE__ */ jsx(FolderKanban, { className: "size-16 text-gray-300" }),
              emptyText: "No projects submitted this month"
            },
            {
              title: "Lifetime",
              users: stats.projectSubmissions.lifetime,
              emptyIcon: /* @__PURE__ */ jsx(FolderKanban, { className: "size-16 text-gray-300" }),
              emptyText: "No projects submitted yet"
            }
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        LeaderboardLane,
        {
          title: "Most Referrals",
          tabs: [
            {
              title: "This Month",
              users: stats.referrals.currentMonth,
              emptyIcon: /* @__PURE__ */ jsx(Users, { className: "size-16 text-gray-300" }),
              emptyText: "No referrals this month"
            },
            {
              title: "Lifetime",
              users: stats.referrals.lifetime,
              emptyIcon: /* @__PURE__ */ jsx(Users, { className: "size-16 text-gray-300" }),
              emptyText: "No referrals yet"
            }
          ]
        }
      ),
      /* @__PURE__ */ jsx(
        LeaderboardLane,
        {
          title: "Top Contributors",
          subtitle: "Past 2 weeks",
          tabs: [
            {
              title: "This Month",
              users: stats.githubContributors.currentMonth,
              emptyIcon: /* @__PURE__ */ jsx(GitPullRequest, { className: "size-16 text-gray-300" }),
              emptyText: "No contributors this month"
            }
          ]
        }
      )
    ] })
  ] }) });
}
function LeaderboardLane(props) {
  const { title, subtitle, tabs } = props;
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const { users: usersToShow, emptyIcon, emptyText } = activeTab;
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-[450px] flex-col overflow-hidden rounded-xl border bg-white shadow-xs", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between gap-2 px-3 py-3", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-sm font-medium", children: [
        title,
        " ",
        subtitle && /* @__PURE__ */ jsx("span", { className: "ml-1 text-sm font-normal text-gray-400", children: subtitle })
      ] }),
      tabs.length > 1 && /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: tabs.map((tab) => {
        const isActive = tab === activeTab;
        return /* @__PURE__ */ jsx(
          "button",
          {
            onClick: () => setActiveTab(tab),
            className: cn(
              "text-xs transition-colors py-0.5 px-2 rounded-full",
              {
                "text-white bg-black": isActive,
                "hover:bg-gray-200": !isActive
              }
            ),
            children: tab.title
          },
          tab.title
        );
      }) })
    ] }),
    usersToShow.length === 0 && emptyText && /* @__PURE__ */ jsxs("div", { className: "flex grow flex-col items-center justify-center p-8", children: [
      emptyIcon,
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-gray-500", children: emptyText })
    ] }),
    usersToShow.length > 0 && /* @__PURE__ */ jsx("ul", { className: "divide-y divide-gray-100 pb-4", children: usersToShow.map((user, counter) => {
      const avatar = user?.avatar ? user?.avatar?.startsWith("http") ? user?.avatar : `${"https://dodrc8eu8m09s.cloudfront.net/avatars"}/${user.avatar}` : "/images/default-avatar.png";
      const rank = counter + 1;
      const isGitHubUser = avatar?.indexOf("github") > -1;
      return /* @__PURE__ */ jsxs(
        "li",
        {
          className: "flex items-center justify-between gap-1 py-2.5 pl-2 pr-5",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "relative mr-1 flex size-6 shrink-0 items-center justify-center rounded-full text-xs tabular-nums",
                    {
                      "text-black": rank <= 3,
                      "text-gray-400": rank > 3
                    }
                  ),
                  children: rank
                }
              ),
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: avatar,
                  alt: user.name,
                  className: "mr-1 size-7 shrink-0 rounded-full"
                }
              ),
              isGitHubUser ? /* @__PURE__ */ jsx(
                "a",
                {
                  href: `https://github.com/kamranahmedse/developer-roadmap/pulls?q=is%3Apr+is%3Aclosed+author%3A${user.name}`,
                  target: "_blank",
                  className: "truncate font-medium underline underline-offset-2",
                  children: user.name
                }
              ) : /* @__PURE__ */ jsx("span", { className: "truncate", children: user.name }),
              rank === 1 ? /* @__PURE__ */ jsx(TrophyEmoji, { className: "size-5" }) : rank === 2 ? /* @__PURE__ */ jsx(SecondPlaceMedalEmoji, { className: "size-5" }) : rank === 3 ? /* @__PURE__ */ jsx(ThirdPlaceMedalEmoji, { className: "size-5" }) : ""
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-500", children: user.count })
          ]
        },
        user.id
      );
    }) })
  ] });
}

function ErrorPage(props) {
  const { error } = props;
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "container py-10", children: /* @__PURE__ */ jsxs("div", { className: "flex min-h-[250px] flex-col items-center justify-center px-5 py-3 sm:px-0 sm:py-20", children: [
    /* @__PURE__ */ jsx(ErrorIcon, { additionalClasses: "mb-4 h-8 w-8 sm:h-14 sm:w-14" }),
    /* @__PURE__ */ jsx("h2", { className: "mb-1 text-lg font-semibold sm:text-xl", children: "Oops! Something went wrong" }),
    /* @__PURE__ */ jsx("p", { className: "mb-3 text-balance text-center text-xs text-gray-800 sm:text-sm", children: error?.message || "An error occurred while fetching" })
  ] }) }) });
}

function leaderboardApi(context) {
  return {
    listLeaderboardStats: async function() {
      return api(context).get(
        `${"https://api.roadmap.sh"}/v1-list-leaderboard-stats`,
        {}
      );
    }
  };
}

const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const prerender = false;
const $$Leaderboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Leaderboard;
  const leaderboardClient = leaderboardApi(Astro2);
  const { response: leaderboardStats, error: leaderboardError } = await leaderboardClient.listLeaderboardStats();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Leaderboard", "permalink": "/leaderboard" }, { "default": async ($$result2) => renderTemplate`${leaderboardError && renderTemplate`${renderComponent($$result2, "ErrorPage", ErrorPage, { "error": leaderboardError })}`}${leaderboardStats && renderTemplate`${renderComponent($$result2, "LeaderboardPage", LeaderboardPage, { "stats": leaderboardStats, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/Leaderboard/LeaderboardPage", "client:component-export": "LeaderboardPage" })}`}` })}`;
}, "/workspace/src/pages/leaderboard.astro", void 0);

const $$file = "/workspace/src/pages/leaderboard.astro";
const $$url = "/leaderboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Leaderboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
