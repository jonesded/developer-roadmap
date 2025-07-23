import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CeJ2iKZU.mjs';
import { manifest } from './manifest_CRsOFIv1.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/account/billing.astro.mjs');
const _page4 = () => import('./pages/account/friends.astro.mjs');
const _page5 = () => import('./pages/account/notification.astro.mjs');
const _page6 = () => import('./pages/account/road-card.astro.mjs');
const _page7 = () => import('./pages/account/roadmaps.astro.mjs');
const _page8 = () => import('./pages/account/settings.astro.mjs');
const _page9 = () => import('./pages/account/update-profile.astro.mjs');
const _page10 = () => import('./pages/account.astro.mjs');
const _page11 = () => import('./pages/advertise.astro.mjs');
const _page12 = () => import('./pages/ai/chat/_chatid_.astro.mjs');
const _page13 = () => import('./pages/ai/chat.astro.mjs');
const _page14 = () => import('./pages/ai/community.astro.mjs');
const _page15 = () => import('./pages/ai/course.astro.mjs');
const _page16 = () => import('./pages/ai/courses.astro.mjs');
const _page17 = () => import('./pages/ai/guide/_slug_.astro.mjs');
const _page18 = () => import('./pages/ai/guide.astro.mjs');
const _page19 = () => import('./pages/ai/guides.astro.mjs');
const _page20 = () => import('./pages/ai/quiz/search.astro.mjs');
const _page21 = () => import('./pages/ai/quiz/_slug_.astro.mjs');
const _page22 = () => import('./pages/ai/quiz.astro.mjs');
const _page23 = () => import('./pages/ai/quizzes.astro.mjs');
const _page24 = () => import('./pages/ai/roadmap.astro.mjs');
const _page25 = () => import('./pages/ai/roadmap-chat.astro.mjs');
const _page26 = () => import('./pages/ai/roadmaps.astro.mjs');
const _page27 = () => import('./pages/ai/staff-picks.astro.mjs');
const _page28 = () => import('./pages/ai/_courseslug_.astro.mjs');
const _page29 = () => import('./pages/ai.astro.mjs');
const _page30 = () => import('./pages/ai-data-scientist/career-path.astro.mjs');
const _page31 = () => import('./pages/ai-data-scientist/lifecycle.astro.mjs');
const _page32 = () => import('./pages/ai-data-scientist/skills.astro.mjs');
const _page33 = () => import('./pages/ai-data-scientist/tools.astro.mjs');
const _page34 = () => import('./pages/ai-data-scientist/vs-ai.astro.mjs');
const _page35 = () => import('./pages/ai-data-scientist/vs-business-analytics.astro.mjs');
const _page36 = () => import('./pages/ai-data-scientist/vs-computer-science.astro.mjs');
const _page37 = () => import('./pages/ai-data-scientist/vs-cyber-security.astro.mjs');
const _page38 = () => import('./pages/ai-data-scientist/vs-data-analytics.astro.mjs');
const _page39 = () => import('./pages/ai-data-scientist/vs-data-engineering.astro.mjs');
const _page40 = () => import('./pages/ai-data-scientist/vs-machine-learning.astro.mjs');
const _page41 = () => import('./pages/ai-data-scientist/vs-software-engineering.astro.mjs');
const _page42 = () => import('./pages/ai-data-scientist/vs-statistics.astro.mjs');
const _page43 = () => import('./pages/ai-roadmaps/explore.astro.mjs');
const _page44 = () => import('./pages/ai-roadmaps/_airoadmapslug_.astro.mjs');
const _page45 = () => import('./pages/ai-roadmaps.astro.mjs');
const _page46 = () => import('./pages/authors/_authorid_.json.astro.mjs');
const _page47 = () => import('./pages/authors/_authorid_.astro.mjs');
const _page48 = () => import('./pages/backend/developer-skills.astro.mjs');
const _page49 = () => import('./pages/backend/developer-tools.astro.mjs');
const _page50 = () => import('./pages/backend/frameworks.astro.mjs');
const _page51 = () => import('./pages/backend/job-description.astro.mjs');
const _page52 = () => import('./pages/backend/languages.astro.mjs');
const _page53 = () => import('./pages/backend/project-ideas.astro.mjs');
const _page54 = () => import('./pages/backend/technologies.astro.mjs');
const _page55 = () => import('./pages/befriend.astro.mjs');
const _page56 = () => import('./pages/best-practices/_bestpracticeid_.json.astro.mjs');
const _page57 = () => import('./pages/best-practices/_bestpracticeid_.astro.mjs');
const _page58 = () => import('./pages/best-practices/_bestpracticeid_/_---topicid_.astro.mjs');
const _page59 = () => import('./pages/best-practices.astro.mjs');
const _page60 = () => import('./pages/card/_version_/_userid_.astro.mjs');
const _page61 = () => import('./pages/changelog.astro.mjs');
const _page62 = () => import('./pages/community.astro.mjs');
const _page63 = () => import('./pages/courses/master-sql.astro.mjs');
const _page64 = () => import('./pages/courses/sql.astro.mjs');
const _page65 = () => import('./pages/dashboard.astro.mjs');
const _page66 = () => import('./pages/data-analyst/career-path.astro.mjs');
const _page67 = () => import('./pages/data-analyst/how-to-become.astro.mjs');
const _page68 = () => import('./pages/devops/automation.astro.mjs');
const _page69 = () => import('./pages/devops/automation-tools.astro.mjs');
const _page70 = () => import('./pages/devops/best-practices.astro.mjs');
const _page71 = () => import('./pages/devops/career-path.astro.mjs');
const _page72 = () => import('./pages/devops/devops-vs-sre.astro.mjs');
const _page73 = () => import('./pages/devops/how-to-become-devops-engineer.astro.mjs');
const _page74 = () => import('./pages/devops/job-description.astro.mjs');
const _page75 = () => import('./pages/devops/lifecycle.astro.mjs');
const _page76 = () => import('./pages/devops/principles.astro.mjs');
const _page77 = () => import('./pages/devops/shift-left-testing.astro.mjs');
const _page78 = () => import('./pages/devops/skills.astro.mjs');
const _page79 = () => import('./pages/devops/test-automation.astro.mjs');
const _page80 = () => import('./pages/devops/tools.astro.mjs');
const _page81 = () => import('./pages/devops/vs-agile.astro.mjs');
const _page82 = () => import('./pages/devops/vs-developer.astro.mjs');
const _page83 = () => import('./pages/devops/vs-devsecops.astro.mjs');
const _page84 = () => import('./pages/devops/vs-full-stack.astro.mjs');
const _page85 = () => import('./pages/discord.astro.mjs');
const _page86 = () => import('./pages/forgot-password.astro.mjs');
const _page87 = () => import('./pages/frontend/developer-skills.astro.mjs');
const _page88 = () => import('./pages/frontend/frameworks.astro.mjs');
const _page89 = () => import('./pages/frontend/how-to-become-frontend-developer.astro.mjs');
const _page90 = () => import('./pages/frontend/job-description.astro.mjs');
const _page91 = () => import('./pages/frontend/languages.astro.mjs');
const _page92 = () => import('./pages/frontend/technologies.astro.mjs');
const _page93 = () => import('./pages/frontend/web-developer-portfolio.astro.mjs');
const _page94 = () => import('./pages/full-stack/developer-skills.astro.mjs');
const _page95 = () => import('./pages/full-stack/how-to-become.astro.mjs');
const _page96 = () => import('./pages/full-stack/job-description.astro.mjs');
const _page97 = () => import('./pages/full-stack/vs-backend.astro.mjs');
const _page98 = () => import('./pages/full-stack/vs-software-engineer.astro.mjs');
const _page99 = () => import('./pages/g/_linkgroupid_/_linkid_.astro.mjs');
const _page100 = () => import('./pages/get-started.astro.mjs');
const _page101 = () => import('./pages/github.astro.mjs');
const _page102 = () => import('./pages/golang/rest-api.astro.mjs');
const _page103 = () => import('./pages/golang/vs-java.astro.mjs');
const _page104 = () => import('./pages/guides/_guideid_.astro.mjs');
const _page105 = () => import('./pages/guides.astro.mjs');
const _page106 = () => import('./pages/java/developer-skills.astro.mjs');
const _page107 = () => import('./pages/java/vs-javascript.astro.mjs');
const _page108 = () => import('./pages/java/vs-python.astro.mjs');
const _page109 = () => import('./pages/javascript/vs-typescript.astro.mjs');
const _page110 = () => import('./pages/leaderboard.astro.mjs');
const _page111 = () => import('./pages/login.astro.mjs');
const _page112 = () => import('./pages/og/best-practice/_slug_.astro.mjs');
const _page113 = () => import('./pages/og/guide/_slug_.astro.mjs');
const _page114 = () => import('./pages/og/roadmap/_slug_.astro.mjs');
const _page115 = () => import('./pages/og/user/_username_.astro.mjs');
const _page116 = () => import('./pages/pages.json.astro.mjs');
const _page117 = () => import('./pages/premium.astro.mjs');
const _page118 = () => import('./pages/privacy.astro.mjs');
const _page119 = () => import('./pages/projects/_projectid_/solutions.astro.mjs');
const _page120 = () => import('./pages/projects/_projectid_.astro.mjs');
const _page121 = () => import('./pages/projects.astro.mjs');
const _page122 = () => import('./pages/questions/_questiongroupid_.astro.mjs');
const _page123 = () => import('./pages/questions.astro.mjs');
const _page124 = () => import('./pages/r/embed.astro.mjs');
const _page125 = () => import('./pages/r/_customroadmapslug_.astro.mjs');
const _page126 = () => import('./pages/r.astro.mjs');
const _page127 = () => import('./pages/reset-password.astro.mjs');
const _page128 = () => import('./pages/respond-invite.astro.mjs');
const _page129 = () => import('./pages/roadmaps.astro.mjs');
const _page130 = () => import('./pages/signup.astro.mjs');
const _page131 = () => import('./pages/sql/hard-to-learn.astro.mjs');
const _page132 = () => import('./pages/sql/how-long-to-learn.astro.mjs');
const _page133 = () => import('./pages/sql/vs-mysql.astro.mjs');
const _page134 = () => import('./pages/sql/vs-python.astro.mjs');
const _page135 = () => import('./pages/team/activity.astro.mjs');
const _page136 = () => import('./pages/team/member.astro.mjs');
const _page137 = () => import('./pages/team/members.astro.mjs');
const _page138 = () => import('./pages/team/new.astro.mjs');
const _page139 = () => import('./pages/team/progress.astro.mjs');
const _page140 = () => import('./pages/team/roadmaps.astro.mjs');
const _page141 = () => import('./pages/team/settings.astro.mjs');
const _page142 = () => import('./pages/team.astro.mjs');
const _page143 = () => import('./pages/teams.astro.mjs');
const _page144 = () => import('./pages/terms.astro.mjs');
const _page145 = () => import('./pages/terms-of-sale.astro.mjs');
const _page146 = () => import('./pages/thank-you.astro.mjs');
const _page147 = () => import('./pages/twitter.astro.mjs');
const _page148 = () => import('./pages/u/_username_.astro.mjs');
const _page149 = () => import('./pages/v1-health.astro.mjs');
const _page150 = () => import('./pages/v1-stats.json.astro.mjs');
const _page151 = () => import('./pages/verification-pending.astro.mjs');
const _page152 = () => import('./pages/verify-account.astro.mjs');
const _page153 = () => import('./pages/verify-email.astro.mjs');
const _page154 = () => import('./pages/videos/_videoid_.astro.mjs');
const _page155 = () => import('./pages/videos.astro.mjs');
const _page156 = () => import('./pages/x.astro.mjs');
const _page157 = () => import('./pages/youtube.astro.mjs');
const _page158 = () => import('./pages/_roadmapid_.json.astro.mjs');
const _page159 = () => import('./pages/_roadmapid_/ai.astro.mjs');
const _page160 = () => import('./pages/_roadmapid_/courses.astro.mjs');
const _page161 = () => import('./pages/_roadmapid_/projects.astro.mjs');
const _page162 = () => import('./pages/_roadmapid_/svg.astro.mjs');
const _page163 = () => import('./pages/_roadmapid_.astro.mjs');
const _page164 = () => import('./pages/_roadmapid_/_---topicid_.astro.mjs');
const _page165 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.7.13_@types+node@22.15.17_jiti@2.4.2_lightningcss@1.30.1_rollup@4.40.2_tsx@4.19.4_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/account/billing.astro", _page3],
    ["src/pages/account/friends.astro", _page4],
    ["src/pages/account/notification.astro", _page5],
    ["src/pages/account/road-card.astro", _page6],
    ["src/pages/account/roadmaps.astro", _page7],
    ["src/pages/account/settings.astro", _page8],
    ["src/pages/account/update-profile.astro", _page9],
    ["src/pages/account/index.astro", _page10],
    ["src/pages/advertise.astro", _page11],
    ["src/pages/ai/chat/[chatId].astro", _page12],
    ["src/pages/ai/chat/index.astro", _page13],
    ["src/pages/ai/community.astro", _page14],
    ["src/pages/ai/course.astro", _page15],
    ["src/pages/ai/courses.astro", _page16],
    ["src/pages/ai/guide/[slug].astro", _page17],
    ["src/pages/ai/guide/index.astro", _page18],
    ["src/pages/ai/guides.astro", _page19],
    ["src/pages/ai/quiz/search.astro", _page20],
    ["src/pages/ai/quiz/[slug].astro", _page21],
    ["src/pages/ai/quiz/index.astro", _page22],
    ["src/pages/ai/quizzes.astro", _page23],
    ["src/pages/ai/roadmap/index.astro", _page24],
    ["src/pages/ai/roadmap-chat.astro", _page25],
    ["src/pages/ai/roadmaps.astro", _page26],
    ["src/pages/ai/staff-picks.astro", _page27],
    ["src/pages/ai/[courseSlug].astro", _page28],
    ["src/pages/ai/index.astro", _page29],
    ["src/pages/ai-data-scientist/career-path.astro", _page30],
    ["src/pages/ai-data-scientist/lifecycle.astro", _page31],
    ["src/pages/ai-data-scientist/skills.astro", _page32],
    ["src/pages/ai-data-scientist/tools.astro", _page33],
    ["src/pages/ai-data-scientist/vs-ai.astro", _page34],
    ["src/pages/ai-data-scientist/vs-business-analytics.astro", _page35],
    ["src/pages/ai-data-scientist/vs-computer-science.astro", _page36],
    ["src/pages/ai-data-scientist/vs-cyber-security.astro", _page37],
    ["src/pages/ai-data-scientist/vs-data-analytics.astro", _page38],
    ["src/pages/ai-data-scientist/vs-data-engineering.astro", _page39],
    ["src/pages/ai-data-scientist/vs-machine-learning.astro", _page40],
    ["src/pages/ai-data-scientist/vs-software-engineering.astro", _page41],
    ["src/pages/ai-data-scientist/vs-statistics.astro", _page42],
    ["src/pages/ai-roadmaps/explore.astro", _page43],
    ["src/pages/ai-roadmaps/[aiRoadmapSlug].astro", _page44],
    ["src/pages/ai-roadmaps/index.astro", _page45],
    ["src/pages/authors/[authorId].json.ts", _page46],
    ["src/pages/authors/[authorId].astro", _page47],
    ["src/pages/backend/developer-skills.astro", _page48],
    ["src/pages/backend/developer-tools.astro", _page49],
    ["src/pages/backend/frameworks.astro", _page50],
    ["src/pages/backend/job-description.astro", _page51],
    ["src/pages/backend/languages.astro", _page52],
    ["src/pages/backend/project-ideas.astro", _page53],
    ["src/pages/backend/technologies.astro", _page54],
    ["src/pages/befriend.astro", _page55],
    ["src/pages/best-practices/[bestPracticeId].json.ts", _page56],
    ["src/pages/best-practices/[bestPracticeId]/index.astro", _page57],
    ["src/pages/best-practices/[bestPracticeId]/[...topicId].astro", _page58],
    ["src/pages/best-practices/index.astro", _page59],
    ["src/pages/card/[version]/[userId].ts", _page60],
    ["src/pages/changelog.astro", _page61],
    ["src/pages/community.astro", _page62],
    ["src/pages/courses/master-sql.astro", _page63],
    ["src/pages/courses/sql.astro", _page64],
    ["src/pages/dashboard.astro", _page65],
    ["src/pages/data-analyst/career-path.astro", _page66],
    ["src/pages/data-analyst/how-to-become.astro", _page67],
    ["src/pages/devops/automation.astro", _page68],
    ["src/pages/devops/automation-tools.astro", _page69],
    ["src/pages/devops/best-practices.astro", _page70],
    ["src/pages/devops/career-path.astro", _page71],
    ["src/pages/devops/devops-vs-sre.astro", _page72],
    ["src/pages/devops/how-to-become-devops-engineer.astro", _page73],
    ["src/pages/devops/job-description.astro", _page74],
    ["src/pages/devops/lifecycle.astro", _page75],
    ["src/pages/devops/principles.astro", _page76],
    ["src/pages/devops/shift-left-testing.astro", _page77],
    ["src/pages/devops/skills.astro", _page78],
    ["src/pages/devops/test-automation.astro", _page79],
    ["src/pages/devops/tools.astro", _page80],
    ["src/pages/devops/vs-agile.astro", _page81],
    ["src/pages/devops/vs-developer.astro", _page82],
    ["src/pages/devops/vs-devsecops.astro", _page83],
    ["src/pages/devops/vs-full-stack.astro", _page84],
    ["src/pages/discord.astro", _page85],
    ["src/pages/forgot-password.astro", _page86],
    ["src/pages/frontend/developer-skills.astro", _page87],
    ["src/pages/frontend/frameworks.astro", _page88],
    ["src/pages/frontend/how-to-become-frontend-developer.astro", _page89],
    ["src/pages/frontend/job-description.astro", _page90],
    ["src/pages/frontend/languages.astro", _page91],
    ["src/pages/frontend/technologies.astro", _page92],
    ["src/pages/frontend/web-developer-portfolio.astro", _page93],
    ["src/pages/full-stack/developer-skills.astro", _page94],
    ["src/pages/full-stack/how-to-become.astro", _page95],
    ["src/pages/full-stack/job-description.astro", _page96],
    ["src/pages/full-stack/vs-backend.astro", _page97],
    ["src/pages/full-stack/vs-software-engineer.astro", _page98],
    ["src/pages/g/[linkGroupId]/[linkId].astro", _page99],
    ["src/pages/get-started.astro", _page100],
    ["src/pages/github.astro", _page101],
    ["src/pages/golang/rest-api.astro", _page102],
    ["src/pages/golang/vs-java.astro", _page103],
    ["src/pages/guides/[guideId].astro", _page104],
    ["src/pages/guides/index.astro", _page105],
    ["src/pages/java/developer-skills.astro", _page106],
    ["src/pages/java/vs-javascript.astro", _page107],
    ["src/pages/java/vs-python.astro", _page108],
    ["src/pages/javascript/vs-typescript.astro", _page109],
    ["src/pages/leaderboard.astro", _page110],
    ["src/pages/login.astro", _page111],
    ["src/pages/og/best-practice/[slug].ts", _page112],
    ["src/pages/og/guide/[slug].ts", _page113],
    ["src/pages/og/roadmap/[slug].ts", _page114],
    ["src/pages/og/user/[username].ts", _page115],
    ["src/pages/pages.json.ts", _page116],
    ["src/pages/premium.astro", _page117],
    ["src/pages/privacy.md", _page118],
    ["src/pages/projects/[projectId]/solutions.astro", _page119],
    ["src/pages/projects/[projectId]/index.astro", _page120],
    ["src/pages/projects/index.astro", _page121],
    ["src/pages/questions/[questionGroupId].astro", _page122],
    ["src/pages/questions/index.astro", _page123],
    ["src/pages/r/embed.astro", _page124],
    ["src/pages/r/[customRoadmapSlug].astro", _page125],
    ["src/pages/r/index.astro", _page126],
    ["src/pages/reset-password.astro", _page127],
    ["src/pages/respond-invite.astro", _page128],
    ["src/pages/roadmaps.astro", _page129],
    ["src/pages/signup.astro", _page130],
    ["src/pages/sql/hard-to-learn.astro", _page131],
    ["src/pages/sql/how-long-to-learn.astro", _page132],
    ["src/pages/sql/vs-mysql.astro", _page133],
    ["src/pages/sql/vs-python.astro", _page134],
    ["src/pages/team/activity.astro", _page135],
    ["src/pages/team/member.astro", _page136],
    ["src/pages/team/members.astro", _page137],
    ["src/pages/team/new.astro", _page138],
    ["src/pages/team/progress.astro", _page139],
    ["src/pages/team/roadmaps.astro", _page140],
    ["src/pages/team/settings.astro", _page141],
    ["src/pages/team/index.astro", _page142],
    ["src/pages/teams.astro", _page143],
    ["src/pages/terms.md", _page144],
    ["src/pages/terms-of-sale.md", _page145],
    ["src/pages/thank-you.astro", _page146],
    ["src/pages/twitter.astro", _page147],
    ["src/pages/u/[username].astro", _page148],
    ["src/pages/v1-health.ts", _page149],
    ["src/pages/v1-stats.json.ts", _page150],
    ["src/pages/verification-pending.astro", _page151],
    ["src/pages/verify-account.astro", _page152],
    ["src/pages/verify-email.astro", _page153],
    ["src/pages/videos/[videoId].astro", _page154],
    ["src/pages/videos/index.astro", _page155],
    ["src/pages/x.astro", _page156],
    ["src/pages/youtube.astro", _page157],
    ["src/pages/[roadmapId].json.ts", _page158],
    ["src/pages/[roadmapId]/ai.astro", _page159],
    ["src/pages/[roadmapId]/courses.astro", _page160],
    ["src/pages/[roadmapId]/projects.astro", _page161],
    ["src/pages/[roadmapId]/svg.astro", _page162],
    ["src/pages/[roadmapId]/index.astro", _page163],
    ["src/pages/[roadmapId]/[...topicId].astro", _page164],
    ["src/pages/index.astro", _page165]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "4ab04ff6-6673-45d0-9eef-d3f1922dd035",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
