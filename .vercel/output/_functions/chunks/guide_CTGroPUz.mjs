import { _ as __vite_glob_0_98, a as __vite_glob_0_97, b as __vite_glob_0_96, c as __vite_glob_0_95, d as __vite_glob_0_94, e as __vite_glob_0_93, f as __vite_glob_0_92, g as __vite_glob_0_91, h as __vite_glob_0_90, i as __vite_glob_0_89, j as __vite_glob_0_88, k as __vite_glob_0_87, l as __vite_glob_0_86, m as __vite_glob_0_85, n as __vite_glob_0_84, o as __vite_glob_0_83, p as __vite_glob_0_82, q as __vite_glob_0_81, r as __vite_glob_0_80, s as __vite_glob_0_79, t as __vite_glob_0_78, u as __vite_glob_0_77, v as __vite_glob_0_76, w as __vite_glob_0_75, x as __vite_glob_0_74, y as __vite_glob_0_73, z as __vite_glob_0_72, A as __vite_glob_0_71, B as __vite_glob_0_70, C as __vite_glob_0_69, D as __vite_glob_0_68, E as __vite_glob_0_67, F as __vite_glob_0_66, G as __vite_glob_0_65, H as __vite_glob_0_64, I as __vite_glob_0_63, J as __vite_glob_0_62, K as __vite_glob_0_61, L as __vite_glob_0_60, M as __vite_glob_0_59, N as __vite_glob_0_58, O as __vite_glob_0_57, P as __vite_glob_0_56, Q as __vite_glob_0_55, R as __vite_glob_0_54, S as __vite_glob_0_53, T as __vite_glob_0_52, U as __vite_glob_0_51, V as __vite_glob_0_50, W as __vite_glob_0_49, X as __vite_glob_0_48, Y as __vite_glob_0_47, Z as __vite_glob_0_46, $ as __vite_glob_0_45, a0 as __vite_glob_0_44, a1 as __vite_glob_0_43, a2 as __vite_glob_0_42, a3 as __vite_glob_0_41, a4 as __vite_glob_0_40, a5 as __vite_glob_0_39, a6 as __vite_glob_0_38, a7 as __vite_glob_0_37, a8 as __vite_glob_0_36, a9 as __vite_glob_0_35, aa as __vite_glob_0_34, ab as __vite_glob_0_33, ac as __vite_glob_0_32, ad as __vite_glob_0_31, ae as __vite_glob_0_30, af as __vite_glob_0_29, ag as __vite_glob_0_28, ah as __vite_glob_0_27, ai as __vite_glob_0_26, aj as __vite_glob_0_25, ak as __vite_glob_0_24, al as __vite_glob_0_23, am as __vite_glob_0_22, an as __vite_glob_0_21, ao as __vite_glob_0_20, ap as __vite_glob_0_19, aq as __vite_glob_0_18, ar as __vite_glob_0_17, as as __vite_glob_0_16, at as __vite_glob_0_15, au as __vite_glob_0_14, av as __vite_glob_0_13, aw as __vite_glob_0_12, ax as __vite_glob_0_11, ay as __vite_glob_0_10, az as __vite_glob_0_9, aA as __vite_glob_0_8, aB as __vite_glob_0_7, aC as __vite_glob_0_6, aD as __vite_glob_0_5, aE as __vite_glob_0_4, aF as __vite_glob_0_3, aG as __vite_glob_0_2, aH as __vite_glob_0_1, aI as __vite_glob_0_0 } from './why-build-it-and-they-will-come-wont-work-anymore_YFYGVNGT.mjs';
import { g as getAllAuthors } from './author_BfF8YtJE.mjs';
import { r as replaceVariables } from './markdown_rbU7j7cH.mjs';

function guidePathToId(filePath) {
  const fileName = filePath.split("/").pop() || "";
  return fileName.replace(".md", "");
}
async function getGuidesByAuthor(authorId) {
  const allGuides = await getAllGuides();
  return allGuides.filter((guide) => guide.author?.id === authorId);
}
async function getAllGuides() {
  const guides = /* #__PURE__ */ Object.assign({"/src/data/guides/ai-data-scientist-career-path.md": __vite_glob_0_0,"/src/data/guides/ai-data-scientist-lifecycle.md": __vite_glob_0_1,"/src/data/guides/ai-data-scientist-skills.md": __vite_glob_0_2,"/src/data/guides/ai-data-scientist-tools.md": __vite_glob_0_3,"/src/data/guides/ai-data-scientist-vs-ai.md": __vite_glob_0_4,"/src/data/guides/ai-data-scientist-vs-business-analytics.md": __vite_glob_0_5,"/src/data/guides/ai-data-scientist-vs-computer-science.md": __vite_glob_0_6,"/src/data/guides/ai-data-scientist-vs-cyber-security.md": __vite_glob_0_7,"/src/data/guides/ai-data-scientist-vs-data-analytics.md": __vite_glob_0_8,"/src/data/guides/ai-data-scientist-vs-data-engineering.md": __vite_glob_0_9,"/src/data/guides/ai-data-scientist-vs-machine-learning.md": __vite_glob_0_10,"/src/data/guides/ai-data-scientist-vs-software-engineering.md": __vite_glob_0_11,"/src/data/guides/ai-data-scientist-vs-statistics.md": __vite_glob_0_12,"/src/data/guides/asymptotic-notation.md": __vite_glob_0_13,"/src/data/guides/avoid-render-blocking-javascript-with-async-defer.md": __vite_glob_0_14,"/src/data/guides/backend-developer-skills.md": __vite_glob_0_15,"/src/data/guides/backend-developer-tools.md": __vite_glob_0_16,"/src/data/guides/backend-frameworks.md": __vite_glob_0_17,"/src/data/guides/backend-job-description.md": __vite_glob_0_18,"/src/data/guides/backend-languages.md": __vite_glob_0_19,"/src/data/guides/backend-project-ideas.md": __vite_glob_0_20,"/src/data/guides/backend-technologies.md": __vite_glob_0_21,"/src/data/guides/basic-authentication.md": __vite_glob_0_22,"/src/data/guides/basics-of-authentication.md": __vite_glob_0_23,"/src/data/guides/big-o-notation.md": __vite_glob_0_24,"/src/data/guides/character-encodings.md": __vite_glob_0_25,"/src/data/guides/ci-cd.md": __vite_glob_0_26,"/src/data/guides/consistency-patterns-in-distributed-systems.md": __vite_glob_0_27,"/src/data/guides/data-analyst-career-path.md": __vite_glob_0_28,"/src/data/guides/data-analyst-how-to-become.md": __vite_glob_0_29,"/src/data/guides/design-patterns-for-humans.md": __vite_glob_0_30,"/src/data/guides/devops-automation-tools.md": __vite_glob_0_31,"/src/data/guides/devops-automation.md": __vite_glob_0_32,"/src/data/guides/devops-best-practices.md": __vite_glob_0_33,"/src/data/guides/devops-career-path.md": __vite_glob_0_34,"/src/data/guides/devops-engineer.md": __vite_glob_0_35,"/src/data/guides/devops-job-description.md": __vite_glob_0_36,"/src/data/guides/devops-lifecycle.md": __vite_glob_0_37,"/src/data/guides/devops-principles.md": __vite_glob_0_38,"/src/data/guides/devops-shift-left-testing.md": __vite_glob_0_39,"/src/data/guides/devops-skills.md": __vite_glob_0_40,"/src/data/guides/devops-test-automation.md": __vite_glob_0_41,"/src/data/guides/devops-tools.md": __vite_glob_0_42,"/src/data/guides/devops-vs-agile.md": __vite_glob_0_43,"/src/data/guides/devops-vs-developer.md": __vite_glob_0_44,"/src/data/guides/devops-vs-devsecops.md": __vite_glob_0_45,"/src/data/guides/devops-vs-full-stack.md": __vite_glob_0_46,"/src/data/guides/devops-vs-sre.md": __vite_glob_0_47,"/src/data/guides/dhcp-in-one-picture.md": __vite_glob_0_48,"/src/data/guides/dns-in-one-picture.md": __vite_glob_0_49,"/src/data/guides/free-resources-to-learn-llms.md": __vite_glob_0_50,"/src/data/guides/frontend-developer-skills.md": __vite_glob_0_51,"/src/data/guides/frontend-frameworks.md": __vite_glob_0_52,"/src/data/guides/frontend-job-description.md": __vite_glob_0_53,"/src/data/guides/frontend-languages.md": __vite_glob_0_54,"/src/data/guides/frontend-technologies.md": __vite_glob_0_55,"/src/data/guides/frontend-web-developer-portfolio.md": __vite_glob_0_56,"/src/data/guides/full-stack-developer-skills.md": __vite_glob_0_57,"/src/data/guides/full-stack-how-to-become.md": __vite_glob_0_58,"/src/data/guides/full-stack-job-description.md": __vite_glob_0_59,"/src/data/guides/full-stack-vs-backend.md": __vite_glob_0_60,"/src/data/guides/full-stack-vs-software-engineer.md": __vite_glob_0_61,"/src/data/guides/go-vs-java.md": __vite_glob_0_62,"/src/data/guides/golang-rest-api.md": __vite_glob_0_63,"/src/data/guides/history-of-javascript.md": __vite_glob_0_64,"/src/data/guides/how-to-become-devops-engineer.md": __vite_glob_0_65,"/src/data/guides/how-to-become-frontend-developer.md": __vite_glob_0_66,"/src/data/guides/how-to-setup-a-jump-server.md": __vite_glob_0_67,"/src/data/guides/http-basic-authentication.md": __vite_glob_0_68,"/src/data/guides/http-caching.md": __vite_glob_0_69,"/src/data/guides/introduction-to-llms.md": __vite_glob_0_70,"/src/data/guides/java-developer-skills.md": __vite_glob_0_71,"/src/data/guides/java-vs-javascript.md": __vite_glob_0_72,"/src/data/guides/java-vs-python.md": __vite_glob_0_73,"/src/data/guides/javascript-vs-typescript.md": __vite_glob_0_74,"/src/data/guides/journey-to-http2.md": __vite_glob_0_75,"/src/data/guides/jwt-authentication.md": __vite_glob_0_76,"/src/data/guides/levels-of-seniority.md": __vite_glob_0_77,"/src/data/guides/oauth.md": __vite_glob_0_78,"/src/data/guides/proxy-servers.md": __vite_glob_0_79,"/src/data/guides/random-numbers.md": __vite_glob_0_80,"/src/data/guides/scaling-databases.md": __vite_glob_0_81,"/src/data/guides/session-authentication.md": __vite_glob_0_82,"/src/data/guides/session-based-authentication.md": __vite_glob_0_83,"/src/data/guides/setup-and-auto-renew-ssl-certificates.md": __vite_glob_0_84,"/src/data/guides/single-command-database-setup.md": __vite_glob_0_85,"/src/data/guides/sql-hard-to-learn.md": __vite_glob_0_86,"/src/data/guides/sql-how-long-to-learn.md": __vite_glob_0_87,"/src/data/guides/sql-vs-mysql.md": __vite_glob_0_88,"/src/data/guides/sql-vs-python.md": __vite_glob_0_89,"/src/data/guides/ssl-tls-https-ssh.md": __vite_glob_0_90,"/src/data/guides/sso.md": __vite_glob_0_91,"/src/data/guides/token-authentication.md": __vite_glob_0_92,"/src/data/guides/torrent-client.md": __vite_glob_0_93,"/src/data/guides/unfamiliar-codebase.md": __vite_glob_0_94,"/src/data/guides/what-are-web-vitals.md": __vite_glob_0_95,"/src/data/guides/what-is-internet.md": __vite_glob_0_96,"/src/data/guides/what-is-sli-slo-sla.md": __vite_glob_0_97,"/src/data/guides/why-build-it-and-they-will-come-wont-work-anymore.md": __vite_glob_0_98

});
  const allAuthors = await getAllAuthors();
  const guideFiles = Object.values(guides);
  let enrichedGuides = guideFiles.map((guideFile) => {
    let relatedGuides = [];
    if (guideFile.frontmatter.relatedGuidesId) {
      relatedGuides = guideFiles.filter(
        (g) => g?.frontmatter?.relatedGuidesId === guideFile.frontmatter.relatedGuidesId && g.file !== guideFile.file
      );
    }
    return {
      ...guideFile,
      id: guidePathToId(guideFile.file),
      author: allAuthors.find(
        (author) => author.id === guideFile.frontmatter.authorId
      ),
      frontmatter: {
        ...guideFile.frontmatter,
        title: replaceVariables(guideFile.frontmatter.title),
        description: replaceVariables(guideFile.frontmatter.description),
        seo: {
          ...guideFile.frontmatter?.seo || {},
          title: replaceVariables(guideFile.frontmatter.seo?.title || ""),
          description: replaceVariables(guideFile.frontmatter.seo?.description || "")
        }
      },
      relatedGuides: relatedGuides.reduce(
        (acc, guide) => {
          acc[replaceVariables(guide.frontmatter.title)] = guide.frontmatter?.excludedBySlug || `/guides/${guidePathToId(guideFile.file)}`;
          return acc;
        },
        {}
      )
    };
  });
  return enrichedGuides.sort(
    (a, b) => new Date(b.frontmatter.date).valueOf() - new Date(a.frontmatter.date).valueOf()
  );
}
async function getGuideById(id) {
  const allGuides = await getAllGuides();
  return allGuides.find((guide) => guide.id === id);
}
const NUMBERED_LIST_REGEX = /^\d+\.\s+?/;
function getGuideTableOfContent(headings) {
  const tableOfContents = [];
  let currentGroup = null;
  headings.filter((heading) => heading.depth !== 1).forEach((heading) => {
    if (heading.depth === 2) {
      currentGroup = {
        ...heading,
        text: heading.text.replace(NUMBERED_LIST_REGEX, ""),
        children: []
      };
      tableOfContents.push(currentGroup);
    } else if (currentGroup && heading.depth === 3) {
      currentGroup.children.push({
        ...heading,
        text: heading.text.replace(NUMBERED_LIST_REGEX, "")
      });
    }
  });
  if (tableOfContents.length > 5) {
    tableOfContents.forEach((group) => {
      group.children = [];
    });
  }
  return tableOfContents;
}

export { getGuideById as a, getGuidesByAuthor as b, getAllGuides as c, getGuideTableOfContent as g };
