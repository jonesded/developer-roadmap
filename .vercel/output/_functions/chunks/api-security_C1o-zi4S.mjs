import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_Cqa-EqH9.mjs';
import 'clsx';

const html = () => "";

				const frontmatter = {"jsonUrl":"/jsons/best-practices/api-security.json","pdfUrl":"/pdfs/best-practices/api-security.pdf","order":2,"briefTitle":"API Security","briefDescription":"API Security Best Practices","isNew":false,"isUpcoming":false,"title":"API Security Best Practices","description":"Detailed list of best practices to make your APIs secure","dimensions":{"width":968,"height":1543.39},"schema":{"headline":"API Security Best Practices","description":"Detailed list of best practices to make your APIs secure. Each best practice carries further details and how to implement that best practice.","imageUrl":"https://roadmap.sh/best-practices/api-security.png","datePublished":"2023-02-21","dateModified":"2023-02-21"},"seo":{"title":"API Security Best Practices","description":"Detailed list of best practices to make your APIs secure. Each best practice carries further details and how to implement that best practice.","keywords":["API Security","API Security Best Practices","API Security Checklist"]}};
				const file = "/workspace/src/data/best-practices/api-security/api-security.md";
				const url = undefined;
				function rawContent() {
					return "   \n                                                  \n                                               \n        \n                          \n                                               \n            \n                 \n                                    \n                                                                       \n           \n            \n                 \n       \n                                         \n                                                                                                                                                              \n                                                                \n                             \n                            \n    \n                                      \n                                                                                                                                                              \n           \n                    \n                                   \n                              \n   \n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const __vite_glob_2_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { __vite_glob_2_0 as _ };
