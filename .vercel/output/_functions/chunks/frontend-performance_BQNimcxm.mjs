import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_Cqa-EqH9.mjs';
import 'clsx';

const html = () => "";

				const frontmatter = {"jsonUrl":"/jsons/best-practices/frontend-performance.json","pdfUrl":"/pdfs/best-practices/frontend-performance.pdf","order":1,"briefTitle":"Frontend Performance","briefDescription":"Frontend Performance Best Practices","isNew":false,"isUpcoming":false,"title":"Frontend Performance Best Practices","description":"Detailed list of best practices to improve your frontend performance","dimensions":{"width":968,"height":1270.89},"schema":{"headline":"Frontend Performance Best Practices","description":"Detailed list of best practices to improve the frontend performance of your website. Each best practice carries further details and how to implement that best practice.","imageUrl":"https://roadmap.sh/best-practices/frontend-performance.png","datePublished":"2023-01-23","dateModified":"2023-01-23"},"seo":{"title":"Frontend Performance Best Practices","description":"Detailed list of best practices to improve the frontend performance of your website. Each best practice carries further details and how to implement that best practice.","keywords":["frontend performance","frontend performance best practices","frontend performance checklist","frontend checklist","make performant frontends"]}};
				const file = "/workspace/src/data/best-practices/frontend-performance/frontend-performance.md";
				const url = undefined;
				function rawContent() {
					return "   \n                                                          \n                                                       \n        \n                                  \n                                                       \n            \n                 \n                                            \n                                                                                   \n           \n            \n                 \n       \n                                                 \n                                                                                                                                                                                         \n                                                                        \n                             \n                            \n    \n                                              \n                                                                                                                                                                                         \n           \n                            \n                                           \n                                      \n                          \n                                 \n   \n";
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

const __vite_glob_2_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

export { __vite_glob_2_4 as _ };
