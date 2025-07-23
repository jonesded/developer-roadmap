import MarkdownIt from 'markdown-it';
import MarkdownItAsync from 'markdown-it-async';

function replaceVariables(markdown, variables = {}) {
  const allVariables = {
    ...variables,
    currentYear: (/* @__PURE__ */ new Date()).getFullYear().toString()
  };
  return markdown?.replace(/@([^@]+)@/g, (match, p1) => {
    return allVariables[p1] || match;
  });
}
const md = new MarkdownIt({
  html: true,
  linkify: true
});
function markdownToHtml(markdown, isInline = true) {
  try {
    if (isInline) {
      return md.renderInline(markdown);
    } else {
      return md.render(markdown);
    }
  } catch (e) {
    return markdown;
  }
}
function sanitizeMarkdown(markdown) {
  return markdown.replace(/\\\[([^\\]+)\\\]\(([^\\]+)\)/g, "[$1]($2)");
}
const markdownItAsync = MarkdownItAsync({
  html: true,
  linkify: true,
  async highlight(code, lang, attrs) {
    const { codeToHtml } = await import('shiki');
    const html = await codeToHtml(code, {
      lang: lang?.toLowerCase(),
      theme: "dracula"
    }).catch((e) => {
      console.warn(e);
      return code;
    });
    return html;
  }
});
async function markdownToHtmlWithHighlighting(markdown) {
  try {
    const defaultRender = markdownItAsync.renderer.rules.link_open || function(tokens, idx, options, env, self) {
      return self.renderToken(tokens, idx, options);
    };
    markdownItAsync.renderer.rules.link_open = function(tokens, idx, options, env, self) {
      tokens[idx].attrSet("target", "_blank");
      return defaultRender(tokens, idx, options, env, self);
    };
    return markdownItAsync.renderAsync(markdown);
  } catch (e) {
    return markdown;
  }
}

export { markdownToHtml as a, markdownToHtmlWithHighlighting as m, replaceVariables as r, sanitizeMarkdown as s };
