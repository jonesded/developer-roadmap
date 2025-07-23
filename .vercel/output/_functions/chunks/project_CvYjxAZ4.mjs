import { a as createComponent, m as maybeRenderHead, u as unescapeHTML, b as renderTemplate } from './astro/server_Cqa-EqH9.mjs';
import 'clsx';
import { _ as __variableDynamicImportRuntimeHelper } from './dynamic-import-helper_uMTE3ehW.mjs';
import { b as getRoadmapById } from './roadmap_VC9fOZso.mjs';

const html$14 = () => "<p>In this project, you are required to create a form UI using only HTML and CSS. The form will include fields for a full name, email, password, and confirm password, along with a button to toggle the visibility of the password text. Additionally, the form will feature a completeness progress bar and a checklist of requirements that must be met for the form to reach 100% completeness. While this version of the form won’t be functional, it will be a static UI component that can be enhanced with JavaScript in the future.</p>\n<p>The goal of this project is to not only help you practice your HTML and CSS but also to focus on creating an accessible form that is easy to use for all users, including those with disabilities. Given below is the rough mockup of the form UI that you need to create:</p>\n<p><a href=\"https://assets.roadmap.sh/guest/form-components-7t4b3.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/form-components-7t4b3.png\" alt=\"Form UI\"></a></p>\n<h2 id=\"accessibility-guidelines\">Accessibility Guidelines</h2>\n<p>You should read up on accessibility guidelines and best practices before starting this project. However, here are some key points to keep in mind while creating an accessible form UI:</p>\n<ul>\n<li><strong>Labeling</strong>: Ensure that each form field has a corresponding <code>&#x3C;label></code> element that is clearly associated with the field using the <code>for</code> attribute.</li>\n<li><strong>Focus State</strong>: Style the focus state of each input field so that users navigating with a keyboard can easily see which field is currently active.</li>\n<li><strong>Error Messaging</strong>: Consider adding space for error messages that can be displayed when a user inputs invalid data. These messages should be clearly associated with the relevant input field.</li>\n<li><strong>ARIA Attributes</strong>: Use ARIA (Accessible Rich Internet Applications) attributes where necessary, such as <code>aria-required</code> for required fields and <code>aria-invalid</code> for fields with errors.</li>\n<li><strong>Color Contrast</strong>: Ensure that the color contrast between text and background is sufficient to meet WCAG (Web Content Accessibility Guidelines) standards, making the form readable for users with visual impairments.</li>\n<li><strong>Interactive Elements</strong>: Make sure that the button to show/hide the password is accessible via keyboard and screen readers, providing clear feedback on the current state (e.g., “Password is hidden” or “Password is visible”).</li>\n</ul>\n<p>Once done, you can test the form UI using a screen reader or browser extensions like Axe or Lighthouse to check for accessibility issues and make necessary adjustments.</p>\n<hr>\n<p>After completing this project, you will have a solid foundation in creating accessible and well-structured forms using HTML and CSS. You can later enhance this form by adding JavaScript to make it fully functional and dynamic in future projects.</p>";

				const frontmatter$14 = {"title":"Accessible Form UI","description":"Create an accessible form UI using HTML and CSS.","isNew":false,"sort":7,"difficulty":"beginner","nature":"Accessibility","skills":["HTML","CSS","Layouts","Positioning","Accessibility"],"seo":{"title":"Create an Accessible Form UI for a Website Using HTML and CSS","description":"Learn how to create an accessible form component using HTML and CSS.","keywords":["accessible forms","css project idea","responsive design","html and css"]},"roadmapIds":["frontend"]};
				const file$14 = "/workspace/src/data/projects/accessible-form-ui.md";
				const url$14 = undefined;
				function rawContent$14() {
					return "   \n                             \n                                                                 \n              \n         \n                        \n                       \n         \n            \n           \n               \n                 \n                   \n      \n                                                                          \n                                                                                       \n             \n                          \n                          \n                           \n                      \n             \n                \n\n   \n\nIn this project, you are required to create a form UI using only HTML and CSS. The form will include fields for a full name, email, password, and confirm password, along with a button to toggle the visibility of the password text. Additionally, the form will feature a completeness progress bar and a checklist of requirements that must be met for the form to reach 100% completeness. While this version of the form won’t be functional, it will be a static UI component that can be enhanced with JavaScript in the future.\n\nThe goal of this project is to not only help you practice your HTML and CSS but also to focus on creating an accessible form that is easy to use for all users, including those with disabilities. Given below is the rough mockup of the form UI that you need to create:\n\n[![Form UI](https://assets.roadmap.sh/guest/form-components-7t4b3.png)](https://assets.roadmap.sh/guest/form-components-7t4b3.png)\n\n## Accessibility Guidelines\n\nYou should read up on accessibility guidelines and best practices before starting this project. However, here are some key points to keep in mind while creating an accessible form UI:\n\n- **Labeling**: Ensure that each form field has a corresponding `<label>` element that is clearly associated with the field using the `for` attribute.\n- **Focus State**: Style the focus state of each input field so that users navigating with a keyboard can easily see which field is currently active.\n- **Error Messaging**: Consider adding space for error messages that can be displayed when a user inputs invalid data. These messages should be clearly associated with the relevant input field.\n- **ARIA Attributes**: Use ARIA (Accessible Rich Internet Applications) attributes where necessary, such as `aria-required` for required fields and `aria-invalid` for fields with errors.\n- **Color Contrast**: Ensure that the color contrast between text and background is sufficient to meet WCAG (Web Content Accessibility Guidelines) standards, making the form readable for users with visual impairments.\n- **Interactive Elements**: Make sure that the button to show/hide the password is accessible via keyboard and screen readers, providing clear feedback on the current state (e.g., \"Password is hidden\" or \"Password is visible\").\n\nOnce done, you can test the form UI using a screen reader or browser extensions like Axe or Lighthouse to check for accessibility issues and make necessary adjustments.\n\n---\n\nAfter completing this project, you will have a solid foundation in creating accessible and well-structured forms using HTML and CSS. You can later enhance this form by adding JavaScript to make it fully functional and dynamic in future projects.";
				}
				async function compiledContent$14() {
					return await html$14();
				}
				function getHeadings$14() {
					return [{"depth":2,"slug":"accessibility-guidelines","text":"Accessibility Guidelines"}];
				}

				const Content$14 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$14;
					content.file = file$14;
					content.url = url$14;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$14())}`;
				});

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$14,
	compiledContent: compiledContent$14,
	default: Content$14,
	file: file$14,
	frontmatter: frontmatter$14,
	getHeadings: getHeadings$14,
	rawContent: rawContent$14,
	url: url$14
}, Symbol.toStringTag, { value: 'Module' }));

const html$13 = () => "<p>You are required to create an accordion component that displays a list of questions or headings. When a user clicks on a question, its corresponding answer or content section will expand while collapsing any previously opened section. This allows only one section to be open at a time, keeping the UI clean and organized.</p>\n<p>Given below is the mockup showing the accordion in its default and expanded states:</p>\n<p><a href=\"https://assets.roadmap.sh/guest/accordion-rbvpo.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/accordion-rbvpo.png\" alt=\"Accordion\"></a></p>\n<p>This project will help you practice DOM manipulation, event handling, and implementing responsive design patterns using JavaScript.</p>";

				const frontmatter$13 = {"title":"Accordion","description":"Create an accordion component using HTML, CSS, and JavaScript.","isNew":false,"sort":18,"difficulty":"beginner","nature":"JavaScript","skills":["HTML","CSS","JavaScript","DOM Manipulation"],"seo":{"title":"Build an Accordion Component with JavaScript","description":"Learn how to create a responsive accordion component that allows users to toggle between different sections of content.","keywords":["accordion","javascript accordion","html and css"]},"roadmapIds":["frontend"]};
				const file$13 = "/workspace/src/data/projects/accordion.md";
				const url$13 = undefined;
				function rawContent$13() {
					return "   \n                    \n                                                                               \n              \n        \n                        \n                      \n         \n            \n           \n                  \n                        \n      \n                                                         \n                                                                                                                                          \n             \n                 \n                            \n                      \n             \n              \n   \n\nYou are required to create an accordion component that displays a list of questions or headings. When a user clicks on a question, its corresponding answer or content section will expand while collapsing any previously opened section. This allows only one section to be open at a time, keeping the UI clean and organized.\n\nGiven below is the mockup showing the accordion in its default and expanded states:\n\n[![Accordion](https://assets.roadmap.sh/guest/accordion-rbvpo.png)](https://assets.roadmap.sh/guest/accordion-rbvpo.png)\n\nThis project will help you practice DOM manipulation, event handling, and implementing responsive design patterns using JavaScript.";
				}
				async function compiledContent$13() {
					return await html$13();
				}
				function getHeadings$13() {
					return [];
				}

				const Content$13 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$13;
					content.file = file$13;
					content.url = url$13;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$13())}`;
				});

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$13,
	compiledContent: compiledContent$13,
	default: Content$13,
	file: file$13,
	frontmatter: frontmatter$13,
	getHeadings: getHeadings$13,
	rawContent: rawContent$13,
	url: url$13
}, Symbol.toStringTag, { value: 'Module' }));

const html$12 = () => "<p>The goal of this project is to help you learn about how to use external packages using <a href=\"https://www.npmjs.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">npm</a>. The user inputs their birthdate via a <a href=\"https://www.npmjs.com/package/js-datepicker\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">JavaScript Datepicker</a>, and the app calculates and displays their exact age, including years, and months using <a href=\"https://www.npmjs.com/package/luxon\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Luxon</a>.</p>\n<p><img src=\"https://assets.roadmap.sh/guest/age-calculator-do1un.png\" alt=\"Age Calculator\"></p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You are required to develop an age calculator with the following features:</p>\n<ul>\n<li>A form that allows users to input their birthdate using a JavaScript datepicker (avoid the default HTML date picker)</li>\n<li>Use the <a href=\"https://www.npmjs.com/package/luxon\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Luxon</a> library to calculate the exact age in years, months, and days</li>\n<li>Display the result on the same page after the user submits the form</li>\n<li>Implement basic validation to ensure the birthdate is valid</li>\n<li>Use simple styling to make the calculator visually appealing and responsive</li>\n</ul>\n<hr>\n<p>This project will help you understand how to manipulate dates and times in JavaScript using <a href=\"https://www.npmjs.com/package/luxon\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Luxon</a>. You’ll gain experience handling user input via a datepicker, performing date calculations, and designing a simple user interface.</p>";

				const frontmatter$12 = {"title":"Age Calculator","description":"Create an age calculator using HTML, CSS, and JavaScript.","isNew":true,"sort":19,"difficulty":"beginner","nature":"Frontend","skills":["HTML","CSS","JavaScript","DOM Manipulation","Package Management"],"seo":{"title":"Build an Age Calculator App with JavaScript","description":"Create an age calculator using HTML, CSS, and JavaScript.","keywords":["age calculator","frontend project idea","luxon date manipulation","javascript datepicker"]},"roadmapIds":["frontend"]};
				const file$12 = "/workspace/src/data/projects/age-calculator.md";
				const url$12 = undefined;
				function rawContent$12() {
					return "   \n                     \n                                                                      \n           \n        \n                      \n                  \n       \n          \n         \n                \n                      \n                        \n    \n                                                    \n                                                                        \n           \n                      \n                             \n                               \n                             \n           \n              \n   \n\nThe goal of this project is to help you learn about how to use external packages using [npm](https://www.npmjs.com/). The user inputs their birthdate via a [JavaScript Datepicker](https://www.npmjs.com/package/js-datepicker), and the app calculates and displays their exact age, including years, and months using [Luxon](https://www.npmjs.com/package/luxon).\n\n![Age Calculator](https://assets.roadmap.sh/guest/age-calculator-do1un.png)\n\n## Requirements\n\nYou are required to develop an age calculator with the following features:\n\n- A form that allows users to input their birthdate using a JavaScript datepicker (avoid the default HTML date picker)\n- Use the [Luxon](https://www.npmjs.com/package/luxon) library to calculate the exact age in years, months, and days\n- Display the result on the same page after the user submits the form\n- Implement basic validation to ensure the birthdate is valid\n- Use simple styling to make the calculator visually appealing and responsive\n\n<hr />\n\nThis project will help you understand how to manipulate dates and times in JavaScript using [Luxon](https://www.npmjs.com/package/luxon). You'll gain experience handling user input via a datepicker, performing date calculations, and designing a simple user interface.\n";
				}
				async function compiledContent$12() {
					return await html$12();
				}
				function getHeadings$12() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$12 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$12;
					content.file = file$12;
					content.url = url$12;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$12())}`;
				});

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$12,
	compiledContent: compiledContent$12,
	default: Content$12,
	file: file$12,
	frontmatter: frontmatter$12,
	getHeadings: getHeadings$12,
	rawContent: rawContent$12,
	url: url$12
}, Symbol.toStringTag, { value: 'Module' }));

const html$11 = () => "<p>The goal of this project is to setup a scheduled workflow to backup a Database every 12 hours and upload the backup to <a href=\"https://developers.cloudflare.com/r2/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Cloudflare R2</a> which has a free tier for storage.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>The pre-requisite for this project is to have a server setup and a database ready to backup. You can use one of the projects did in <a href=\"/projects/multi-container-service\">the other project</a>. Alternatively:</p>\n<ul>\n<li>Setup a server on <a href=\"https://m.do.co/c/b29aa8845df8\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Digital Ocean</a> or any other provider</li>\n<li>Run a MongoDB instance on the server</li>\n<li>Seed some data to the database</li>\n</ul>\n<p>Once you have a server and a database ready, you can proceed to the next step.</p>\n<h3 id=\"scheduled-backups\">Scheduled Backups</h3>\n<p>You can do this bit either by setting up a cron job on the server or alternatively setup a <a href=\"https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#schedule\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">scheduled workflow in Github Actions</a> that runs every 12 hours and execute the backup from there. Database should be backedup up into a tarball and uploaded to <a href=\"https://developers.cloudflare.com/r2/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Clouodflare R2</a>.</p>\n<p>Hint: You can use the <code>mongodump</code> to dump the database and then use <code>aws cli</code> to upload the file to R2.</p>\n<h3 id=\"stretch-goal\">Stretch Goal</h3>\n<p>Write a script to download the latest backup from R2 and restore the database.</p>\n<hr>\n<p>Database backups are essential to ensure that you can restore your data in case of a disaster. This project will give you hands on experience on how to setup a scheduled workflow to backup a database and how to restore it from a backup.</p>";

				const frontmatter$11 = {"title":"Automated DB Backups","description":"Setup a scheduled workflow to backup a Database every 12 hours","isNew":false,"sort":1600,"difficulty":"intermediate","nature":"Backups","skills":["bash","devops"],"seo":{"title":"Automated DB Backups","description":"Setup a scheduled workflow to backup a Database every 12 hours","keywords":["Backup","Database","MongoDB"]},"roadmapIds":["devops"]};
				const file$11 = "/workspace/src/data/projects/automated-backups.md";
				const url$11 = undefined;
				function rawContent$11() {
					return "   \n                             \n                                                                             \n            \n          \n                          \n                 \n       \n          \n            \n    \n                               \n                                                                               \n           \n              \n                \n               \n           \n            \n   \n\nThe goal of this project is to setup a scheduled workflow to backup a Database every 12 hours and upload the backup to [Cloudflare R2](https://developers.cloudflare.com/r2/) which has a free tier for storage.\n\n## Requirements\n\nThe pre-requisite for this project is to have a server setup and a database ready to backup. You can use one of the projects did in [the other project](/projects/multi-container-service). Alternatively:\n\n- Setup a server on [Digital Ocean](https://m.do.co/c/b29aa8845df8) or any other provider\n- Run a MongoDB instance on the server\n- Seed some data to the database\n\nOnce you have a server and a database ready, you can proceed to the next step.\n\n### Scheduled Backups\n\nYou can do this bit either by setting up a cron job on the server or alternatively setup a [scheduled workflow in Github Actions](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows#schedule) that runs every 12 hours and execute the backup from there. Database should be backedup up into a tarball and uploaded to [Clouodflare R2](https://developers.cloudflare.com/r2/).\n\nHint: You can use the `mongodump` to dump the database and then use `aws cli` to upload the file to R2.\n\n### Stretch Goal\n\nWrite a script to download the latest backup from R2 and restore the database.\n\n<hr />\n\nDatabase backups are essential to ensure that you can restore your data in case of a disaster. This project will give you hands on experience on how to setup a scheduled workflow to backup a database and how to restore it from a backup.\n";
				}
				async function compiledContent$11() {
					return await html$11();
				}
				function getHeadings$11() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"scheduled-backups","text":"Scheduled Backups"},{"depth":3,"slug":"stretch-goal","text":"Stretch Goal"}];
				}

				const Content$11 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$11;
					content.file = file$11;
					content.url = url$11;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$11())}`;
				});

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$11,
	compiledContent: compiledContent$11,
	default: Content$11,
	file: file$11,
	frontmatter: frontmatter$11,
	getHeadings: getHeadings$11,
	rawContent: rawContent$11,
	url: url$11
}, Symbol.toStringTag, { value: 'Module' }));

const html$10 = () => "<p>The goal of this project is to learn and practice the basics of DNS. You are required to purchase a custom domain name and setup the basic DNS records.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You are required to have a custom domain name to complete this project. You can use the domain name you already own or purchase a new domain name from any provider such as Cloudflare, Namecheap, Godaddy etc. Once you have a domain name, you can proceed to the next step.</p>\n<h3 id=\"task-1---custom-domain-for-github-pages\">Task #1 - Custom Domain for GitHub Pages</h3>\n<p>If you have not completed the <a href=\"/projects/github-actions-deployment-workflow\">GitHub pages project</a>, go ahead and complete that project first. Once you have a github pages site setup, set up your custom domain name to point to your github pages site.</p>\n<h3 id=\"task-2---custom-domain-for-digitalocean-droplet\">Task #2 - Custom Domain for DigitalOcean Droplet</h3>\n<p>If you have not completed the <a href=\"/projects/static-site-server\">Static Site Server project</a>, go ahead and complete that project first so you have a basic static site to serve. Once you have a digital ocean droplet setup serving a static site, set up your DNS records to point to your droplet.</p>\n<hr>\n<h3 id=\"submission-guidelines\">Submission Guidelines</h3>\n<p>Output for this project is the steps you took to setup the custom domain name for both GitHub Pages and a DigitalOcean Droplet. You can write a simple markdown file in tutorial format, add screenshots and any other relevant information to help you remember the steps.</p>\n<hr>\n<p>Once you have completed the project, you should have a basic understanding of how to setup a custom domain name for both GitHub Pages and a DigitalOcean Droplet.</p>";

				const frontmatter$10 = {"title":"Basic DNS Setup","description":"Purchase a custom domain and set up basic DNS records.","isNew":false,"sort":700,"difficulty":"beginner","nature":"DNS","skills":["devops","dns"],"seo":{"title":"Basic DNS Setup","description":"Purchase a custom domain and set up basic DNS records.","keywords":["basic dns","dns","domain"]},"roadmapIds":["devops"]};
				const file$10 = "/workspace/src/data/projects/basic-dns.md";
				const url$10 = undefined;
				function rawContent$10() {
					return "   \n                        \n                                                                     \n            \n         \n                      \n             \n       \n            \n         \n    \n                          \n                                                                       \n           \n                 \n           \n              \n           \n            \n   \n\nThe goal of this project is to learn and practice the basics of DNS. You are required to purchase a custom domain name and setup the basic DNS records.\n\n## Requirements\n\nYou are required to have a custom domain name to complete this project. You can use the domain name you already own or purchase a new domain name from any provider such as Cloudflare, Namecheap, Godaddy etc. Once you have a domain name, you can proceed to the next step.\n\n### Task #1 - Custom Domain for GitHub Pages\n\nIf you have not completed the [GitHub pages project](/projects/github-actions-deployment-workflow), go ahead and complete that project first. Once you have a github pages site setup, set up your custom domain name to point to your github pages site.\n\n### Task #2 - Custom Domain for DigitalOcean Droplet\n\nIf you have not completed the [Static Site Server project](/projects/static-site-server), go ahead and complete that project first so you have a basic static site to serve. Once you have a digital ocean droplet setup serving a static site, set up your DNS records to point to your droplet.\n\n<hr />\n\n### Submission Guidelines\n\nOutput for this project is the steps you took to setup the custom domain name for both GitHub Pages and a DigitalOcean Droplet. You can write a simple markdown file in tutorial format, add screenshots and any other relevant information to help you remember the steps.\n\n<hr />\n\nOnce you have completed the project, you should have a basic understanding of how to setup a custom domain name for both GitHub Pages and a DigitalOcean Droplet.\n";
				}
				async function compiledContent$10() {
					return await html$10();
				}
				function getHeadings$10() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"task-1---custom-domain-for-github-pages","text":"Task #1 - Custom Domain for GitHub Pages"},{"depth":3,"slug":"task-2---custom-domain-for-digitalocean-droplet","text":"Task #2 - Custom Domain for DigitalOcean Droplet"},{"depth":3,"slug":"submission-guidelines","text":"Submission Guidelines"}];
				}

				const Content$10 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$10;
					content.file = file$10;
					content.url = url$10;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$10())}`;
				});

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$10,
	compiledContent: compiledContent$10,
	default: Content$10,
	file: file$10,
	frontmatter: frontmatter$10,
	getHeadings: getHeadings$10,
	rawContent: rawContent$10,
	url: url$10
}, Symbol.toStringTag, { value: 'Module' }));

const html$$ = () => "<p>In this project, you will write a basic Dockerfile to create a Docker image. When this Docker image is run, it should print “Hello, Captain!” to the console before exiting.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<ul>\n<li>The Dockerfile should be named <code>Dockerfile</code>.</li>\n<li>The Dockerfile should be in the root directory of the project.</li>\n<li>The base image should be <code>alpine:latest</code>.</li>\n<li>The Dockerfile should contain a single instruction to print “Hello, Captain!” to the console before exiting.</li>\n</ul>\n<p>You can learn more about writing a Dockerfile <a href=\"https://docs.docker.com/engine/reference/builder/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">here</a>.</p>\n<hr>\n<p>If you are looking to build a more advanced version of this project, you can consider adding the ability to pass your name to the Docker image as an argument, and have the Docker image print “Hello, [your name]!” instead of “Hello, Captain!”.</p>";

				const frontmatter$$ = {"title":"Basic Dockerfile","description":"Build a basic Dockerfile to create a Docker image.","isNew":false,"sort":1000,"difficulty":"beginner","nature":"Docker","skills":["docker","dockerfile","linux","devops"],"seo":{"title":"Basic Dockerfile","description":"Write a basic Dockerfile to create a Docker image.","keywords":["basic dockerfile","dockerfile","docker"]},"roadmapIds":["devops"]};
				const file$$ = "/workspace/src/data/projects/basic-dockerfile.md";
				const url$$ = undefined;
				function rawContent$$() {
					return "   \n                         \n                                                                 \n            \n          \n                      \n                \n       \n            \n                \n           \n            \n    \n                           \n                                                                   \n           \n                        \n                  \n              \n           \n            \n   \n\nIn this project, you will write a basic Dockerfile to create a Docker image. When this Docker image is run, it should print \"Hello, Captain!\" to the console before exiting.\n\n## Requirements\n\n- The Dockerfile should be named `Dockerfile`.\n- The Dockerfile should be in the root directory of the project.\n- The base image should be `alpine:latest`.\n- The Dockerfile should contain a single instruction to print \"Hello, Captain!\" to the console before exiting.\n\n\nYou can learn more about writing a Dockerfile [here](https://docs.docker.com/engine/reference/builder/).\n\n<hr />\n\nIf you are looking to build a more advanced version of this project, you can consider adding the ability to pass your name to the Docker image as an argument, and have the Docker image print \"Hello, [your name]!\" instead of \"Hello, Captain!\".\n";
				}
				async function compiledContent$$() {
					return await html$$();
				}
				function getHeadings$$() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$$ = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$$;
					content.file = file$$;
					content.url = url$$;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$$())}`;
				});

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$$,
	compiledContent: compiledContent$$,
	default: Content$$,
	file: file$$,
	frontmatter: frontmatter$$,
	getHeadings: getHeadings$$,
	rawContent: rawContent$$,
	url: url$$
}, Symbol.toStringTag, { value: 'Module' }));

const html$_ = () => "<blockquote>\n<p>Goal of this project is to teach you how to structure a website using HTML i.e. different sections of a website like header, footer, navigation, main content, sidebars etc. Do not style the website, only focus on the structure. Styling will be done in separate projects.</p>\n</blockquote>\n<p>In this project, you are required to create a simple HTML only website with multiple pages. The website should have following pages:</p>\n<ul>\n<li>Homepage</li>\n<li>Projects</li>\n<li>Articles</li>\n<li>Contact</li>\n</ul>\n<p>The website should have a navigation bar that should be present on all pages and link to all the pages.</p>\n<p>You are not required to style the website, you are only required to create the structure of the website using HTML. Goals of this project are:</p>\n<ul>\n<li>Learn how to create multiple pages in a website.</li>\n<li>Structure a website using HTML in a semantic way.</li>\n<li>Structure in a way that you can easily add styles later.</li>\n<li>Add SEO meta tags to the website.</li>\n</ul>\n<p>You can use the following mockup example to create the structure of the website (remember, you are not required to style the website, only focus on the structure that you can style later):</p>\n<p><img src=\"https://assets.roadmap.sh/guest/portfolio-design-83lku.png\" alt=\"Basic HTML Website\"></p>\n<p>Again, make sure that your submission includes the following:</p>\n<ul>\n<li>Semantically correct HTML structure.</li>\n<li>Multiple pages with a navigation bar.</li>\n<li>SEO meta tags in the head of each page.</li>\n<li>Contact page should have a form with fields like name, email, message etc.</li>\n</ul>\n<hr>\n<p>After completing this project, you will have a good understanding of how to structure a website using HTML, basic SEO meta tags, HTML tags, forms etc. You can now move on to the next project where you will learn how to style this website using CSS.</p>";

				const frontmatter$_ = {"title":"Basic HTML Website","description":"Create simple HTML only website with multiple pages.","isNew":false,"sort":2,"difficulty":"beginner","nature":"HTML","skills":["HTML","Layouts","semantic HTML"],"seo":{"title":"Basic HTML Website Project","description":"Create a simple HTML only website with multiple pages.","keywords":["basic html","html project idea"]},"roadmapIds":["frontend"]};
				const file$_ = "/workspace/src/data/projects/basic-html-website.md";
				const url$_ = undefined;
				function rawContent$_() {
					return "   \n                           \n                                                                   \n            \n       \n                      \n              \n       \n          \n             \n                   \n    \n                                     \n                                                                       \n           \n                  \n                         \n           \n              \n   \n\n> Goal of this project is to teach you how to structure a website using HTML i.e. different sections of a website like header, footer, navigation, main content, sidebars etc. Do not style the website, only focus on the structure. Styling will be done in separate projects.\n\nIn this project, you are required to create a simple HTML only website with multiple pages. The website should have following pages:\n\n- Homepage\n- Projects\n- Articles\n- Contact\n\nThe website should have a navigation bar that should be present on all pages and link to all the pages. \n\nYou are not required to style the website, you are only required to create the structure of the website using HTML. Goals of this project are:\n\n- Learn how to create multiple pages in a website.\n- Structure a website using HTML in a semantic way.\n- Structure in a way that you can easily add styles later.\n- Add SEO meta tags to the website.\n\nYou can use the following mockup example to create the structure of the website (remember, you are not required to style the website, only focus on the structure that you can style later):\n\n![Basic HTML Website](https://assets.roadmap.sh/guest/portfolio-design-83lku.png)\n\nAgain, make sure that your submission includes the following:\n\n- Semantically correct HTML structure.\n- Multiple pages with a navigation bar.\n- SEO meta tags in the head of each page.\n- Contact page should have a form with fields like name, email, message etc.\n\n<hr />\n\nAfter completing this project, you will have a good understanding of how to structure a website using HTML, basic SEO meta tags, HTML tags, forms etc. You can now move on to the next project where you will learn how to style this website using CSS.\n";
				}
				async function compiledContent$_() {
					return await html$_();
				}
				function getHeadings$_() {
					return [];
				}

				const Content$_ = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$_;
					content.file = file$_;
					content.url = url$_;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$_())}`;
				});

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$_,
	compiledContent: compiledContent$_,
	default: Content$_,
	file: file$_,
	frontmatter: frontmatter$_,
	getHeadings: getHeadings$_,
	rawContent: rawContent$_,
	url: url$_
}, Symbol.toStringTag, { value: 'Module' }));

const html$Z = () => "<p>The goal of this project is to learn and practice how to set up a <strong>bastion host</strong>—a secure entry point that enables authorized users to access private infrastructure or internal systems without exposing them to the public internet.</p>\n<p>A <strong>bastion host</strong> is a server specifically designed to act as a secure gateway between external users and a private network. It reduces the attack surface of your infrastructure by being the only publicly accessible server, ensuring that all external connections go through a single, well-secured entry point. Typically, bastion hosts are configured to allow secure SSH or RDP access and are heavily monitored.</p>\n<hr>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You will set up a bastion host in a cloud environment and configure it to securely allow access to a private server.</p>\n<ul>\n<li>\n<p>Choose a cloud provider (e.g., AWS, DigitalOcean, GCP, Azure) and create <strong>two servers</strong>:</p>\n<ul>\n<li><strong>Bastion Host</strong> (publicly accessible).</li>\n<li><strong>Private Server</strong> (accessible only from the bastion host IP address and not publicly).</li>\n</ul>\n</li>\n<li>\n<p>Configure both the servers to allow SSH connection and configure SSH in a way that you can SSH into the private server by jumping through the bastion host</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#50FA7B\">Host</span><span style=\"color:#F1FA8C\"> bastion</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">    HostName</span><span style=\"color:#FF79C6\"> &#x3C;</span><span style=\"color:#F1FA8C\">bastion-i</span><span style=\"color:#F8F8F2\">p</span><span style=\"color:#FF79C6\">></span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">    User</span><span style=\"color:#FF79C6\"> &#x3C;</span><span style=\"color:#F1FA8C\">bastion-use</span><span style=\"color:#F8F8F2\">r</span><span style=\"color:#FF79C6\">></span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">    IdentityFile</span><span style=\"color:#FF79C6\"> &#x3C;</span><span style=\"color:#F1FA8C\">path-to-bastion-private-ke</span><span style=\"color:#F8F8F2\">y</span><span style=\"color:#FF79C6\">></span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">Host</span><span style=\"color:#F1FA8C\"> private-server</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">    HostName</span><span style=\"color:#FF79C6\"> &#x3C;</span><span style=\"color:#F1FA8C\">private-server-i</span><span style=\"color:#F8F8F2\">p</span><span style=\"color:#FF79C6\">></span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">    User</span><span style=\"color:#FF79C6\"> &#x3C;</span><span style=\"color:#F1FA8C\">private-server-use</span><span style=\"color:#F8F8F2\">r</span><span style=\"color:#FF79C6\">></span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">    ProxyJump</span><span style=\"color:#F1FA8C\"> bastion</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">    IdentityFile</span><span style=\"color:#FF79C6\"> &#x3C;</span><span style=\"color:#F1FA8C\">path-to-private-server-private-ke</span><span style=\"color:#F8F8F2\">y</span><span style=\"color:#FF79C6\">></span></span></code></pre>\n</li>\n<li>\n<p>Connect to the bastion host using:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#50FA7B\">ssh</span><span style=\"color:#F1FA8C\"> bastion</span></span></code></pre>\n</li>\n<li>\n<p>From the bastion host, connect to the private server:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#50FA7B\">ssh</span><span style=\"color:#F1FA8C\"> private-server</span></span></code></pre>\n</li>\n<li>\n<p>Alternatively, connect directly using your local machine:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#50FA7B\">ssh</span><span style=\"color:#F1FA8C\"> private-server</span></span></code></pre>\n</li>\n<li>\n<p>Optionally set up basic monitoring for SSH access attempts using tools like <code>fail2ban</code> for example.</p>\n</li>\n</ul>\n<h2 id=\"stretch-goals\">Stretch Goals</h2>\n<ul>\n<li><strong>Harden Security</strong>: Configure multi-factor authentication (MFA) for the bastion host. Use <code>iptables</code> or similar tools for more granular traffic filtering.</li>\n<li><strong>Automate Setup</strong>: Use Terraform or Ansible to automate the deployment and configuration of your bastion host and private server.</li>\n</ul>\n<hr>\n<h2 id=\"important-note-for-solution-submission\">Important Note for Solution Submission</h2>\n<p><strong>Do not share sensitive information (e.g., private keys, IP addresses) in public repositories.</strong> Your submission should contain a <code>README.md</code> file describing the steps and configurations you used to complete the project.</p>\n<hr>\n<p>After completing this project, you will have a strong understanding of how to set up a bastion host and securely manage access to private infrastructure. This foundational knowledge will prepare you for more advanced projects in network and infrastructure security.</p>";

				const frontmatter$Z = {"title":"Bastion Host","description":"Setup a bastion host for managing access to private infrastructure.","isNew":true,"sort":1601,"difficulty":"intermediate","nature":"Networking","skills":["devops","security","linux"],"seo":{"title":"Bastion Host Setup","description":"Learn how to set up a bastion host to securely manage access to your private infrastructure.","keywords":["bastion host","linux","security","devops"]},"roadmapIds":["devops"]};
				const file$Z = "/workspace/src/data/projects/bastion-host.md";
				const url$Z = undefined;
				function rawContent$Z() {
					return "   \n                     \n                                                                                  \n           \n          \n                          \n                    \n       \n            \n              \n           \n    \n                             \n                                                                                                             \n           \n                    \n             \n                \n              \n           \n            \n   \n\nThe goal of this project is to learn and practice how to set up a **bastion host**—a secure entry point that enables authorized users to access private infrastructure or internal systems without exposing them to the public internet.\n\nA **bastion host** is a server specifically designed to act as a secure gateway between external users and a private network. It reduces the attack surface of your infrastructure by being the only publicly accessible server, ensuring that all external connections go through a single, well-secured entry point. Typically, bastion hosts are configured to allow secure SSH or RDP access and are heavily monitored.\n\n---\n\n## Requirements\n\nYou will set up a bastion host in a cloud environment and configure it to securely allow access to a private server.\n\n- Choose a cloud provider (e.g., AWS, DigitalOcean, GCP, Azure) and create **two servers**:\n  - **Bastion Host** (publicly accessible).\n  - **Private Server** (accessible only from the bastion host IP address and not publicly).\n\n- Configure both the servers to allow SSH connection and configure SSH in a way that you can SSH into the private server by jumping through the bastion host\n\n   ```bash\n   Host bastion\n       HostName <bastion-ip>\n       User <bastion-user>\n       IdentityFile <path-to-bastion-private-key>\n\n   Host private-server\n       HostName <private-server-ip>\n       User <private-server-user>\n       ProxyJump bastion\n       IdentityFile <path-to-private-server-private-key>\n   ```\n\n- Connect to the bastion host using:\n  ```bash\n  ssh bastion\n  ```\n- From the bastion host, connect to the private server:\n  ```bash\n  ssh private-server\n  ```\n- Alternatively, connect directly using your local machine:\n  ```bash\n  ssh private-server\n  ```\n\n- Optionally set up basic monitoring for SSH access attempts using tools like `fail2ban` for example.\n\n## Stretch Goals\n\n- **Harden Security**: Configure multi-factor authentication (MFA) for the bastion host. Use `iptables` or similar tools for more granular traffic filtering.\n- **Automate Setup**: Use Terraform or Ansible to automate the deployment and configuration of your bastion host and private server.\n\n---\n\n## Important Note for Solution Submission\n\n**Do not share sensitive information (e.g., private keys, IP addresses) in public repositories.** Your submission should contain a `README.md` file describing the steps and configurations you used to complete the project.\n\n---\n\nAfter completing this project, you will have a strong understanding of how to set up a bastion host and securely manage access to private infrastructure. This foundational knowledge will prepare you for more advanced projects in network and infrastructure security.";
				}
				async function compiledContent$Z() {
					return await html$Z();
				}
				function getHeadings$Z() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":2,"slug":"stretch-goals","text":"Stretch Goals"},{"depth":2,"slug":"important-note-for-solution-submission","text":"Important Note for Solution Submission"}];
				}

				const Content$Z = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$Z;
					content.file = file$Z;
					content.url = url$Z;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$Z())}`;
				});

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$Z,
	compiledContent: compiledContent$Z,
	default: Content$Z,
	file: file$Z,
	frontmatter: frontmatter$Z,
	getHeadings: getHeadings$Z,
	rawContent: rawContent$Z,
	url: url$Z
}, Symbol.toStringTag, { value: 'Module' }));

const html$Y = () => "<p>You are required to create a simple RESTful API with basic CRUD operations for a personal blogging platform. CRUD stands for Create, Read, Update, and Delete.</p>\n<h2 id=\"goals\">Goals</h2>\n<p>The goals of this project are to help you:</p>\n<ul>\n<li>Understand what the RESTful APIs are including best practices and conventions</li>\n<li>Learn how to create a RESTful API</li>\n<li>Learn about common HTTP methods like GET, POST, PUT, PATCH, DELETE</li>\n<li>Learn about status codes and error handling in APIs</li>\n<li>Learn how to perform CRUD operations using an API</li>\n<li>Learn how to work with databases</li>\n</ul>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You should create a RESTful API for a personal blogging platform. The API should allow users to perform the following operations:</p>\n<ul>\n<li>Create a new blog post</li>\n<li>Update an existing blog post</li>\n<li>Delete an existing blog post</li>\n<li>Get a single blog post</li>\n<li>Get all blog posts</li>\n<li>Filter blog posts by a search term</li>\n</ul>\n<p>Given below are the details for each API operation.</p>\n<h3 id=\"create-blog-post\">Create Blog Post</h3>\n<p>Create a new blog post using the <code>POST</code> method</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>POST /posts</span></span>\n<span class=\"line\"><span>{</span></span>\n<span class=\"line\"><span>  \"title\": \"My First Blog Post\",</span></span>\n<span class=\"line\"><span>  \"content\": \"This is the content of my first blog post.\",</span></span>\n<span class=\"line\"><span>  \"category\": \"Technology\",</span></span>\n<span class=\"line\"><span>  \"tags\": [\"Tech\", \"Programming\"]</span></span>\n<span class=\"line\"><span>}</span></span></code></pre>\n<p>Each blog post should have the following fields:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">title</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">My First Blog Post</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">content</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">This is the content of my first blog post.</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">category</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Technology</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">tags</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#F8F8F2\"> [</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">Tech</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">, </span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">Programming</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">]</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<p>The endpoint should validate the request body and return a <code>201 Created</code> status code with the newly created blog post i.e.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 1</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">title</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">My First Blog Post</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">content</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">This is the content of my first blog post.</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">category</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Technology</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">tags</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#F8F8F2\"> [</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">Tech</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">, </span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">Programming</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">],</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">createdAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">updatedAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<p>or a <code>400 Bad Request</code> status code with error messages in case of validation errors.</p>\n<h2 id=\"update-blog-post\">Update Blog Post</h2>\n<p>Update an existing blog post using the <code>PUT</code> method</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>PUT /posts/1</span></span>\n<span class=\"line\"><span>{</span></span>\n<span class=\"line\"><span>  \"title\": \"My Updated Blog Post\",</span></span>\n<span class=\"line\"><span>  \"content\": \"This is the updated content of my first blog post.\",</span></span>\n<span class=\"line\"><span>  \"category\": \"Technology\",</span></span>\n<span class=\"line\"><span>  \"tags\": [\"Tech\", \"Programming\"]</span></span>\n<span class=\"line\"><span>}</span></span></code></pre>\n<p>The endpoint should validate the request body and return a <code>200 OK</code> status code with the updated blog post i.e.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 1</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">title</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">My Updated Blog Post</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">content</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">This is the updated content of my first blog post.</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">category</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Technology</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">tags</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#F8F8F2\"> [</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">Tech</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">, </span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">Programming</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">],</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">createdAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">updatedAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:30:00Z</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<p>or a <code>400 Bad Request</code> status code with error messages in case of validation errors. It should return a <code>404 Not Found</code> status code if the blog post was not found.</p>\n<h3 id=\"delete-blog-post\">Delete Blog Post</h3>\n<p>Delete an existing blog post using the <code>DELETE</code> method</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>DELETE /posts/1</span></span></code></pre>\n<p>The endpoint should return a <code>204 No Content</code> status code if the blog post was successfully deleted or a <code>404 Not Found</code> status code if the blog post was not found.</p>\n<h3 id=\"get-blog-post\">Get Blog Post</h3>\n<p>Get a single blog post using the <code>GET</code> method</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>GET /posts/1</span></span></code></pre>\n<p>The endpoint should return a <code>200 OK</code> status code with the blog post i.e.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 1</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">title</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">My First Blog Post</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">content</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">This is the content of my first blog post.</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">category</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Technology</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">tags</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#F8F8F2\"> [</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">Tech</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">, </span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">Programming</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">],</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">createdAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">updatedAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<p>or a <code>404 Not Found</code> status code if the blog post was not found.</p>\n<h3 id=\"get-all-blog-posts\">Get All Blog Posts</h3>\n<p>Get all blog posts using the <code>GET</code> method</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>GET /posts</span></span></code></pre>\n<p>The endpoint should return a <code>200 OK</code> status code with an array of blog posts i.e.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">[</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">  {</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 1</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">title</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">My First Blog Post</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">content</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">This is the content of my first blog post.</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">category</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Technology</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">tags</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#F8F8F2\"> [</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">Tech</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">, </span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">Programming</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">],</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">createdAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">updatedAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">  },</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">  {</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 2</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">title</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">My Second Blog Post</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">content</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">This is the content of my second blog post.</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">category</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Technology</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">tags</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#F8F8F2\"> [</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">Tech</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">, </span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F1FA8C\">Programming</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">],</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">createdAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:30:00Z</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">    \"</span><span style=\"color:#8BE9FD\">updatedAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:30:00Z</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">  }</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">]</span></span></code></pre>\n<p>You don’t have to implement pagination, authentication or authorization for this project. You can focus on the core functionality of the API.</p>\n<p>While retrieving posts, user can also filter posts by a search term. You should do a wildcard search on the title, content or category fields of the blog posts. For example:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>GET /posts?term=tech</span></span></code></pre>\n<p>This should return all blog posts that have the term “tech” in their title, content or category. You can use a simple SQL query if you are using a SQL database or a similar query for a NoSQL database.</p>\n<hr>\n<h2 id=\"tech-stack\">Tech Stack</h2>\n<p>Feel free to use any programming language, framework, and database of your choice for this project. Here are some suggestions:</p>\n<ul>\n<li>If you are using JavaScript, you can use Node.js with Express.js</li>\n<li>If you are using Python, you can use Flask or Django</li>\n<li>If you are using Java, you can use Spring Boot</li>\n<li>If you are using Ruby, you can use Ruby on Rails</li>\n</ul>\n<p>For databases, you can use:</p>\n<ul>\n<li>MySQL if you are using SQL</li>\n<li>MongoDB if you are using NoSQL</li>\n</ul>";

				const frontmatter$Y = {"title":"Blogging Platform API","description":"Build a RESTful API for a personal blogging platform","isNew":false,"sort":800,"difficulty":"beginner","nature":"API","skills":["Programming Language","CRUD","RESTful API","Database"],"seo":{"title":"Blogging Platform API Project Idea","description":"Build a RESTful API for a personal blogging platform. Users can create, read, update, and delete blog posts using the API.","keywords":["blogging platform api","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$Y = "/workspace/src/data/projects/blogging-platform-api.md";
				const url$Y = undefined;
				function rawContent$Y() {
					return "   \n                              \n                                                                   \n            \n         \n                      \n             \n       \n                          \n          \n                 \n              \n    \n                                             \n                                                                                                                                           \n           \n                             \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nYou are required to create a simple RESTful API with basic CRUD operations for a personal blogging platform. CRUD stands for Create, Read, Update, and Delete. \n\n## Goals\n\nThe goals of this project are to help you:\n\n- Understand what the RESTful APIs are including best practices and conventions\n- Learn how to create a RESTful API\n- Learn about common HTTP methods like GET, POST, PUT, PATCH, DELETE\n- Learn about status codes and error handling in APIs\n- Learn how to perform CRUD operations using an API\n- Learn how to work with databases\n\n## Requirements\n\nYou should create a RESTful API for a personal blogging platform. The API should allow users to perform the following operations:\n\n- Create a new blog post\n- Update an existing blog post\n- Delete an existing blog post\n- Get a single blog post\n- Get all blog posts\n- Filter blog posts by a search term\n\nGiven below are the details for each API operation.\n\n### Create Blog Post\n\nCreate a new blog post using the `POST` method\n\n```plaintext\nPOST /posts\n{\n  \"title\": \"My First Blog Post\",\n  \"content\": \"This is the content of my first blog post.\",\n  \"category\": \"Technology\",\n  \"tags\": [\"Tech\", \"Programming\"]\n}\n```\n\nEach blog post should have the following fields:\n\n```json\n{\n  \"title\": \"My First Blog Post\",\n  \"content\": \"This is the content of my first blog post.\",\n  \"category\": \"Technology\",\n  \"tags\": [\"Tech\", \"Programming\"]\n}\n```\n\nThe endpoint should validate the request body and return a `201 Created` status code with the newly created blog post i.e.\n\n```json\n{\n  \"id\": 1,\n  \"title\": \"My First Blog Post\",\n  \"content\": \"This is the content of my first blog post.\",\n  \"category\": \"Technology\",\n  \"tags\": [\"Tech\", \"Programming\"],\n  \"createdAt\": \"2021-09-01T12:00:00Z\",\n  \"updatedAt\": \"2021-09-01T12:00:00Z\"\n}\n```\n\nor a `400 Bad Request` status code with error messages in case of validation errors.\n\n## Update Blog Post\n\nUpdate an existing blog post using the `PUT` method\n\n```plaintext\nPUT /posts/1\n{\n  \"title\": \"My Updated Blog Post\",\n  \"content\": \"This is the updated content of my first blog post.\",\n  \"category\": \"Technology\",\n  \"tags\": [\"Tech\", \"Programming\"]\n}\n```\n\nThe endpoint should validate the request body and return a `200 OK` status code with the updated blog post i.e.\n\n```json\n{\n  \"id\": 1,\n  \"title\": \"My Updated Blog Post\",\n  \"content\": \"This is the updated content of my first blog post.\",\n  \"category\": \"Technology\",\n  \"tags\": [\"Tech\", \"Programming\"],\n  \"createdAt\": \"2021-09-01T12:00:00Z\",\n  \"updatedAt\": \"2021-09-01T12:30:00Z\"\n}\n```\n\nor a `400 Bad Request` status code with error messages in case of validation errors. It should return a `404 Not Found` status code if the blog post was not found.\n\n### Delete Blog Post\n\nDelete an existing blog post using the `DELETE` method\n\n```plaintext\nDELETE /posts/1\n```\n\nThe endpoint should return a `204 No Content` status code if the blog post was successfully deleted or a `404 Not Found` status code if the blog post was not found.\n\n### Get Blog Post\n\nGet a single blog post using the `GET` method\n\n```plaintext\nGET /posts/1\n```\n\nThe endpoint should return a `200 OK` status code with the blog post i.e.\n\n```json\n{\n  \"id\": 1,\n  \"title\": \"My First Blog Post\",\n  \"content\": \"This is the content of my first blog post.\",\n  \"category\": \"Technology\",\n  \"tags\": [\"Tech\", \"Programming\"],\n  \"createdAt\": \"2021-09-01T12:00:00Z\",\n  \"updatedAt\": \"2021-09-01T12:00:00Z\"\n}\n```\n\nor a `404 Not Found` status code if the blog post was not found.\n\n### Get All Blog Posts\n\nGet all blog posts using the `GET` method\n\n```plaintext\nGET /posts\n```\n\nThe endpoint should return a `200 OK` status code with an array of blog posts i.e.\n\n```json\n[\n  {\n    \"id\": 1,\n    \"title\": \"My First Blog Post\",\n    \"content\": \"This is the content of my first blog post.\",\n    \"category\": \"Technology\",\n    \"tags\": [\"Tech\", \"Programming\"],\n    \"createdAt\": \"2021-09-01T12:00:00Z\",\n    \"updatedAt\": \"2021-09-01T12:00:00Z\"\n  },\n  {\n    \"id\": 2,\n    \"title\": \"My Second Blog Post\",\n    \"content\": \"This is the content of my second blog post.\",\n    \"category\": \"Technology\",\n    \"tags\": [\"Tech\", \"Programming\"],\n    \"createdAt\": \"2021-09-01T12:30:00Z\",\n    \"updatedAt\": \"2021-09-01T12:30:00Z\"\n  }\n]\n```\n\nYou don't have to implement pagination, authentication or authorization for this project. You can focus on the core functionality of the API.\n\nWhile retrieving posts, user can also filter posts by a search term. You should do a wildcard search on the title, content or category fields of the blog posts. For example:\n\n```plaintext\nGET /posts?term=tech\n```\n\nThis should return all blog posts that have the term \"tech\" in their title, content or category. You can use a simple SQL query if you are using a SQL database or a similar query for a NoSQL database.\n\n<hr />\n\n## Tech Stack\n\nFeel free to use any programming language, framework, and database of your choice for this project. Here are some suggestions:\n\n- If you are using JavaScript, you can use Node.js with Express.js\n- If you are using Python, you can use Flask or Django\n- If you are using Java, you can use Spring Boot\n- If you are using Ruby, you can use Ruby on Rails\n\nFor databases, you can use:\n\n- MySQL if you are using SQL\n- MongoDB if you are using NoSQL";
				}
				async function compiledContent$Y() {
					return await html$Y();
				}
				function getHeadings$Y() {
					return [{"depth":2,"slug":"goals","text":"Goals"},{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"create-blog-post","text":"Create Blog Post"},{"depth":2,"slug":"update-blog-post","text":"Update Blog Post"},{"depth":3,"slug":"delete-blog-post","text":"Delete Blog Post"},{"depth":3,"slug":"get-blog-post","text":"Get Blog Post"},{"depth":3,"slug":"get-all-blog-posts","text":"Get All Blog Posts"},{"depth":2,"slug":"tech-stack","text":"Tech Stack"}];
				}

				const Content$Y = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$Y;
					content.file = file$Y;
					content.url = url$Y;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$Y())}`;
				});

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$Y,
	compiledContent: compiledContent$Y,
	default: Content$Y,
	file: file$Y,
	frontmatter: frontmatter$Y,
	getHeadings: getHeadings$Y,
	rawContent: rawContent$Y,
	url: url$Y
}, Symbol.toStringTag, { value: 'Module' }));

const html$X = () => "<p>The goal of this project is to practice setting up a blue-green deployment strategy for a simple web application. This will allow you to deploy your application in a more efficient and reliable way.</p>\n<h2 id=\"requirement\">Requirement</h2>\n<p>You are required to take an existing application (e.g. the one you built in <a href=\"/projects/multi-container-service\">multi-container service project</a>) and setup a blue-green deployment strategy for it. The goal is to deploy the next version of the application in a separate container and switch the traffic to the new container only when the new version is ready.</p>\n<h2 id=\"bonus\">Bonus</h2>\n<ul>\n<li>Setup a CI/CD pipeline to automatically deploy the application to the server when the code is pushed to the repository.</li>\n<li>Setup a monitoring system to monitor the application and the deployment process.</li>\n</ul>\n<hr>\n<p>After finishing this project you will have a good understanding of how to deploy a containerized application in a more efficient way without downtime and with zero data loss.</p>";

				const frontmatter$X = {"title":"Blue-Green Deployment","description":"Setup a blue-green deployment strategy for your application.","isNew":false,"sort":1700,"difficulty":"advanced","nature":"DevOps","skills":["bash","devops","monitoring"],"seo":{"title":"Blue-Green Deployment","description":"Setup a blue-green deployment strategy for your application.","keywords":["Blue-Green Deployment","Deployment Strategy","DevOps","Server Metrics"]},"roadmapIds":["devops"]};
				const file$X = "/workspace/src/data/projects/blue-green-deployment.md";
				const url$X = undefined;
				function rawContent$X() {
					return "   \n                              \n                                                                           \n            \n          \n                      \n                \n       \n          \n            \n                \n    \n                                \n                                                                             \n           \n                             \n                           \n              \n                      \n           \n            \n   \n\nThe goal of this project is to practice setting up a blue-green deployment strategy for a simple web application. This will allow you to deploy your application in a more efficient and reliable way.\n\n## Requirement\n\nYou are required to take an existing application (e.g. the one you built in [multi-container service project](/projects/multi-container-service)) and setup a blue-green deployment strategy for it. The goal is to deploy the next version of the application in a separate container and switch the traffic to the new container only when the new version is ready.\n\n## Bonus\n\n- Setup a CI/CD pipeline to automatically deploy the application to the server when the code is pushed to the repository.\n- Setup a monitoring system to monitor the application and the deployment process.\n\n<hr />\n\nAfter finishing this project you will have a good understanding of how to deploy a containerized application in a more efficient way without downtime and with zero data loss.";
				}
				async function compiledContent$X() {
					return await html$X();
				}
				function getHeadings$X() {
					return [{"depth":2,"slug":"requirement","text":"Requirement"},{"depth":2,"slug":"bonus","text":"Bonus"}];
				}

				const Content$X = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$X;
					content.file = file$X;
					content.url = url$X;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$X())}`;
				});

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$X,
	compiledContent: compiledContent$X,
	default: Content$X,
	file: file$X,
	frontmatter: frontmatter$X,
	getHeadings: getHeadings$X,
	rawContent: rawContent$X,
	url: url$X
}, Symbol.toStringTag, { value: 'Module' }));

const html$W = () => "<p>You are required to create a simple broadcast server that will allow clients to connect to it, send messages that will be broadcasted to all connected clients.</p>\n<h2 id=\"goal\">Goal</h2>\n<p>The goal of this project is to help you understand how to work with websockets and implement real-time communication between clients and servers. This will help you understand how the real-time features of applications like chat applications, live scoreboards, etc., work.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You are required to build a CLI based application that can be used to either start the server or connect to the server as a client. Here are the sample commands that you can use:</p>\n<ul>\n<li><code>broadcast-server start</code> - This command will start the server.</li>\n<li><code>broadcast-server connect</code> - This command will connect the client to the server.</li>\n</ul>\n<p>When the server is started using the <code>broadcast-server start</code> command, it should listen for client connections on a specified port (you can configure that using command options or hardcode for simplicity). When a client connects and sends a message, the server should broadcast this message to all connected clients.</p>\n<p>The server should be able to handle multiple clients connecting and disconnecting gracefully.</p>\n<h2 id=\"implementation\">Implementation</h2>\n<p>You can use any programming language to implement this project. Here are some of the steps that you can follow to implement this project:</p>\n<ol>\n<li>Create a server that listens for incoming connections.</li>\n<li>When a client connects, store the connection in a list of connected clients.</li>\n<li>When a client sends a message, broadcast this message to all connected clients.</li>\n<li>Handle client disconnections and remove the client from the list of connected clients.</li>\n<li>Implement a client that can connect to the server and send messages.</li>\n<li>Test the server by connecting multiple clients and sending messages.</li>\n<li>Implement error handling and graceful shutdown of the server.</li>\n</ol>\n<hr>\n<p>This project will help you understand how to work with websockets and implement real-time communication between clients and servers. You can extend this project by adding features like authentication, message history, etc.</p>";

				const frontmatter$W = {"title":"Broadcast Server","description":"Build a server that can broadcast messages to connected clients.","isNew":false,"sort":1500,"difficulty":"intermediate","nature":"CLI","skills":["Programming Language","Networking","Websockets","HTTP"],"seo":{"title":"Broadcast Server Project Idea","description":"Build a server that can broadcast messages to connected clients.","keywords":["broadcast server","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$W = "/workspace/src/data/projects/broadcast-server.md";
				const url$W = undefined;
				function rawContent$W() {
					return "   \n                         \n                                                                               \n            \n          \n                          \n             \n       \n                          \n                \n                \n          \n    \n                                        \n                                                                                 \n           \n                        \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nYou are required to create a simple broadcast server that will allow clients to connect to it, send messages that will be broadcasted to all connected clients.\n\n## Goal\n\nThe goal of this project is to help you understand how to work with websockets and implement real-time communication between clients and servers. This will help you understand how the real-time features of applications like chat applications, live scoreboards, etc., work.\n\n## Requirements\n\nYou are required to build a CLI based application that can be used to either start the server or connect to the server as a client. Here are the sample commands that you can use:\n\n- `broadcast-server start` - This command will start the server.\n- `broadcast-server connect` - This command will connect the client to the server.\n\nWhen the server is started using the `broadcast-server start` command, it should listen for client connections on a specified port (you can configure that using command options or hardcode for simplicity). When a client connects and sends a message, the server should broadcast this message to all connected clients.\n\nThe server should be able to handle multiple clients connecting and disconnecting gracefully.\n\n## Implementation\n\nYou can use any programming language to implement this project. Here are some of the steps that you can follow to implement this project:\n\n1. Create a server that listens for incoming connections.\n2. When a client connects, store the connection in a list of connected clients.\n3. When a client sends a message, broadcast this message to all connected clients.\n4. Handle client disconnections and remove the client from the list of connected clients.\n5. Implement a client that can connect to the server and send messages.\n6. Test the server by connecting multiple clients and sending messages.\n7. Implement error handling and graceful shutdown of the server.\n\n<hr />\n\nThis project will help you understand how to work with websockets and implement real-time communication between clients and servers. You can extend this project by adding features like authentication, message history, etc.\n";
				}
				async function compiledContent$W() {
					return await html$W();
				}
				function getHeadings$W() {
					return [{"depth":2,"slug":"goal","text":"Goal"},{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":2,"slug":"implementation","text":"Implementation"}];
				}

				const Content$W = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$W;
					content.file = file$W;
					content.url = url$W;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$W())}`;
				});

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$W,
	compiledContent: compiledContent$W,
	default: Content$W,
	file: file$W,
	frontmatter: frontmatter$W,
	getHeadings: getHeadings$W,
	rawContent: rawContent$W,
	url: url$W
}, Symbol.toStringTag, { value: 'Module' }));

const html$V = () => "<p>You are required to build a CLI tool that starts a caching proxy server, it will forward requests to the actual server and cache the responses. If the same request is made again, it will return the cached response instead of forwarding the request to the server.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>User should be able to start the caching proxy server by running a command like following:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><code><span class=\"line\"><span style=\"color:#50FA7B\">caching-proxy</span><span style=\"color:#BD93F9\"> --port</span><span style=\"color:#FF79C6\"> &#x3C;</span><span style=\"color:#F1FA8C\">numbe</span><span style=\"color:#F8F8F2\">r</span><span style=\"color:#FF79C6\">></span><span style=\"color:#BD93F9\"> --origin</span><span style=\"color:#FF79C6\"> &#x3C;</span><span style=\"color:#F1FA8C\">ur</span><span style=\"color:#F8F8F2\">l</span><span style=\"color:#FF79C6\">></span></span></code></pre>\n<ul>\n<li><code>--port</code> is the port on which the caching proxy server will run.</li>\n<li><code>--origin</code> is the URL of the server to which the requests will be forwarded.</li>\n</ul>\n<p>For example, if the user runs the following command:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><code><span class=\"line\"><span style=\"color:#50FA7B\">caching-proxy</span><span style=\"color:#BD93F9\"> --port</span><span style=\"color:#BD93F9\"> 3000</span><span style=\"color:#BD93F9\"> --origin</span><span style=\"color:#F1FA8C\"> http://dummyjson.com</span></span></code></pre>\n<p>The caching proxy server should start on port 3000 and forward requests to <code>http://dummyjson.com</code>.</p>\n<p>Taking the above example, if the user makes a request to <code>http://localhost:3000/products</code>, the caching proxy server should forward the request to <code>http://dummyjson.com/products</code>, return the response along with headers and cache the response. Also, add the headers to the response that indicate whether the response is from the cache or the server.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span># If the response is from the cache</span></span>\n<span class=\"line\"><span>X-Cache: HIT</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span># If the response is from the origin server</span></span>\n<span class=\"line\"><span>X-Cache: MISS</span></span></code></pre>\n<p>If the same request is made again, the caching proxy server should return the cached response instead of forwarding the request to the server.</p>\n<p>You should also provide a way to clear the cache by running a command like following:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"shell\"><code><span class=\"line\"><span style=\"color:#50FA7B\">caching-proxy</span><span style=\"color:#BD93F9\"> --clear-cache</span></span></code></pre>\n<hr>\n<p>After building the above project, you should have a good understanding of how caching works and how you can build a caching proxy server to cache responses from other servers.</p>";

				const frontmatter$V = {"title":"Caching Proxy","description":"Build a caching server that caches responses from other servers.","isNew":false,"sort":1200,"difficulty":"intermediate","nature":"CLI","skills":["Programming Language","Text Processing","Markdown libraries","File Uploads"],"seo":{"title":"Caching Proxy Project Idea","description":"Build a caching proxy server that caches responses from proxied server.","keywords":["backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot","cpp"]};
				const file$V = "/workspace/src/data/projects/caching-server.md";
				const url$V = undefined;
				function rawContent$V() {
					return "   \n                      \n                                                                               \n            \n          \n                          \n             \n       \n                          \n                     \n                        \n                  \n    \n                                     \n                                                                                        \n           \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n         \n   \n\nYou are required to build a CLI tool that starts a caching proxy server, it will forward requests to the actual server and cache the responses. If the same request is made again, it will return the cached response instead of forwarding the request to the server.\n\n## Requirements\n\nUser should be able to start the caching proxy server by running a command like following: \n\n```shell\ncaching-proxy --port <number> --origin <url>\n```\n\n- `--port` is the port on which the caching proxy server will run.\n- `--origin` is the URL of the server to which the requests will be forwarded.\n\nFor example, if the user runs the following command:\n\n```shell\ncaching-proxy --port 3000 --origin http://dummyjson.com\n```\n\nThe caching proxy server should start on port 3000 and forward requests to `http://dummyjson.com`.\n\nTaking the above example, if the user makes a request to `http://localhost:3000/products`, the caching proxy server should forward the request to `http://dummyjson.com/products`, return the response along with headers and cache the response. Also, add the headers to the response that indicate whether the response is from the cache or the server.\n\n```plaintext\n# If the response is from the cache\nX-Cache: HIT\n\n# If the response is from the origin server\nX-Cache: MISS\n```\n\nIf the same request is made again, the caching proxy server should return the cached response instead of forwarding the request to the server.\n\nYou should also provide a way to clear the cache by running a command like following:\n\n```shell\ncaching-proxy --clear-cache\n```\n\n<hr />\n\nAfter building the above project, you should have a good understanding of how caching works and how you can build a caching proxy server to cache responses from other servers.";
				}
				async function compiledContent$V() {
					return await html$V();
				}
				function getHeadings$V() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$V = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$V;
					content.file = file$V;
					content.url = url$V;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$V())}`;
				});

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$V,
	compiledContent: compiledContent$V,
	default: Content$V,
	file: file$V,
	frontmatter: frontmatter$V,
	getHeadings: getHeadings$V,
	rawContent: rawContent$V,
	url: url$V
}, Symbol.toStringTag, { value: 'Module' }));

const html$U = () => "<p>In this project you are required to create a simple component for a website that displays a changelog. A changelog is a log or record of all notable changes made to a project or software. It is often used to keep users informed about the latest updates and improvements.</p>\n<p>The goal of this project is to teach you about positioning and layout in CSS. You will create a simple HTML structure and use CSS to style it into a visually appealing and responsive changelog component. Given below is a rough mockup of the changelog component you need to create.</p>\n<p><a href=\"https://assets.roadmap.sh/guest/changelog-component-1m86j.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/changelog-component-1m86j.png\" alt=\"Changelog Component\"></a></p>\n<p>Feel free to customize the design and layout of the component as you see fit. The focus should be on creating a well-structured and responsive component that can be easily integrated into a website.</p>\n<hr>\n<p>After completing this project, you will have a good understanding of how to create simple layouts using HTML and CSS. You can further enhance your skills by exploring more complex layouts, such as grids and flexbox, in future projects.</p>";

				const frontmatter$U = {"title":"Changelog Component","description":"Create a changelog component for a website using HTML and CSS.","isNew":false,"sort":4,"difficulty":"beginner","nature":"CSS","skills":["HTML","Layouts","CSS","Flexbox"],"seo":{"title":"Create a Changelog Component Website Using HTML and CSS","description":"Learn how to create a changelog component for a website using HTML and CSS.","keywords":["basic css","css project idea","responsive design","html and css"]},"roadmapIds":["frontend"]};
				const file$U = "/workspace/src/data/projects/changelog-component.md";
				const url$U = undefined;
				function rawContent$U() {
					return "   \n                            \n                                                                             \n            \n       \n                      \n             \n       \n          \n             \n         \n             \n    \n                                                                  \n                                                                                            \n           \n                 \n                        \n                         \n                    \n           \n              \n   \n\nIn this project you are required to create a simple component for a website that displays a changelog. A changelog is a log or record of all notable changes made to a project or software. It is often used to keep users informed about the latest updates and improvements.\n\nThe goal of this project is to teach you about positioning and layout in CSS. You will create a simple HTML structure and use CSS to style it into a visually appealing and responsive changelog component. Given below is a rough mockup of the changelog component you need to create.\n\n[![Changelog Component](https://assets.roadmap.sh/guest/changelog-component-1m86j.png)](https://assets.roadmap.sh/guest/changelog-component-1m86j.png)\n\nFeel free to customize the design and layout of the component as you see fit. The focus should be on creating a well-structured and responsive component that can be easily integrated into a website.\n\n---\n\nAfter completing this project, you will have a good understanding of how to create simple layouts using HTML and CSS. You can further enhance your skills by exploring more complex layouts, such as grids and flexbox, in future projects.";
				}
				async function compiledContent$U() {
					return await html$U();
				}
				function getHeadings$U() {
					return [];
				}

				const Content$U = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$U;
					content.file = file$U;
					content.url = url$U;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$U())}`;
				});

const __vite_glob_0_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$U,
	compiledContent: compiledContent$U,
	default: Content$U,
	file: file$U,
	frontmatter: frontmatter$U,
	getHeadings: getHeadings$U,
	rawContent: rawContent$U,
	url: url$U
}, Symbol.toStringTag, { value: 'Module' }));

const html$T = () => "<p>The goal of this project is to introduce you to the basics of configuration management using Ansible. You will write an Ansible playbook to configure a Linux server.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>If you have been doing the previous projects, you should already have a Linux server running. If not, setup a Linux server on <a href=\"https://m.do.co/c/b29aa8845df8\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">DigitalOcean</a>, AWS or another cloud provider.</p>\n<p>You are required to write an Ansible playbook called <code>setup.yml</code> and create the following roles:</p>\n<ul>\n<li><code>base</code> — basic server setup (installs utilities, updates the server, installs <code>fail2ban</code>, etc.)</li>\n<li><code>nginx</code> — installs and configures <code>nginx</code></li>\n<li><code>app</code> — uploads the given tarball of a static HTML website to the server and unzips it.</li>\n<li><code>ssh</code> - adds the given public key to the server</li>\n</ul>\n<p>Set up the inventory file <code>inventory.ini</code> to include the server you are going to configure When you run the playbook, it should run the roles above in sequence. You should also assign proper tags to the roles so that you can run only specific roles.</p>\n<p>Example:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#6272A4\"># Run all the roles</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">ansible-playbook</span><span style=\"color:#F1FA8C\"> setup.yml</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Run only the app role</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">ansible-playbook</span><span style=\"color:#F1FA8C\"> setup.yml</span><span style=\"color:#BD93F9\"> --tags</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">app</span><span style=\"color:#E9F284\">\"</span></span></code></pre>\n<h3 id=\"stretch-goal\">Stretch goal</h3>\n<p>Modify the <code>app</code> role to pull the repository from GitHub and deploy it.</p>\n<hr>\n<p>Once you are done with the project, you should have a basic understanding of how Ansible works and how it can be used to manage server configuration.</p>";

				const frontmatter$T = {"title":"Configuration Management","description":"Write an Ansible playbook to configure a Linux server.","isNew":false,"sort":1100,"difficulty":"intermediate","nature":"Ansible","skills":["ansible","linux","devops"],"seo":{"title":"Configuration Management","description":"Write an Ansible playbook to configure a Linux server.","keywords":["Configuration Management","Ansible","Linux"]},"roadmapIds":["devops"]};
				const file$T = "/workspace/src/data/projects/configuration-management.md";
				const url$T = undefined;
				function rawContent$T() {
					return "   \n                                 \n                                                                     \n            \n          \n                          \n                 \n       \n             \n           \n            \n    \n                                   \n                                                                       \n           \n                                \n               \n             \n           \n            \n   \n\nThe goal of this project is to introduce you to the basics of configuration management using Ansible. You will write an Ansible playbook to configure a Linux server.\n\n## Requirements\n\nIf you have been doing the previous projects, you should already have a Linux server running. If not, setup a Linux server on [DigitalOcean](https://m.do.co/c/b29aa8845df8), AWS or another cloud provider.\n\nYou are required to write an Ansible playbook called `setup.yml` and create the following roles:\n\n- `base` — basic server setup (installs utilities, updates the server, installs `fail2ban`, etc.)\n- `nginx` — installs and configures `nginx`\n- `app` — uploads the given tarball of a static HTML website to the server and unzips it.\n- `ssh` - adds the given public key to the server\n\nSet up the inventory file `inventory.ini` to include the server you are going to configure When you run the playbook, it should run the roles above in sequence. You should also assign proper tags to the roles so that you can run only specific roles.\n\nExample:\n\n```bash\n# Run all the roles\nansible-playbook setup.yml\n\n# Run only the app role\nansible-playbook setup.yml --tags \"app\"\n```\n\n### Stretch goal\n\nModify the `app` role to pull the repository from GitHub and deploy it.\n\n<hr />\n\nOnce you are done with the project, you should have a basic understanding of how Ansible works and how it can be used to manage server configuration.\n";
				}
				async function compiledContent$T() {
					return await html$T();
				}
				function getHeadings$T() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"stretch-goal","text":"Stretch goal"}];
				}

				const Content$T = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$T;
					content.file = file$T;
					content.url = url$T;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$T())}`;
				});

const __vite_glob_0_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$T,
	compiledContent: compiledContent$T,
	default: Content$T,
	file: file$T,
	frontmatter: frontmatter$T,
	getHeadings: getHeadings$T,
	rawContent: rawContent$T,
	url: url$T
}, Symbol.toStringTag, { value: 'Module' }));

const html$S = () => "<p>This project is designed to introduce you to basic DOM manipulation and event handling in JavaScript.</p>\n<p>Many websites display a cookie consent popup to inform users about the use of cookies and to obtain their consent. In this project, you will create a simple cookie consent popup that appears when the user visits the page. The popup will include a message and a button to accept the consent. Once accepted, the popup will disappear. Given below is an example of how the popup might look:</p>\n<p><a href=\"https://assets.roadmap.sh/guest/cookie-consent-banner-07etz.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/cookie-consent-banner-07etz.png\" alt=\"Cookie Consent Popup\"></a></p>\n<p>Bonus points if you persist the user’s consent using cookies or local storage and prevent the popup from appearing on subsequent visits.</p>";

				const frontmatter$S = {"title":"Cookie Consent","description":"Create a simple cookie consent banner using JavaScript.","isNew":false,"sort":12,"difficulty":"beginner","nature":"JavaScript","skills":["HTML","CSS","JavaScript","DOM Manipulation"],"seo":{"title":"Create a Cookie Consent Popup Using HTML, CSS, and JavaScript","description":"Learn how to build a cookie consent popup with basic JavaScript for managing user consent.","keywords":["cookie consent","javascript popup","html and css","javascript project"]},"roadmapIds":["frontend"]};
				const file$S = "/workspace/src/data/projects/cookie-consent.md";
				const url$S = undefined;
				function rawContent$S() {
					return "   \n                         \n                                                                        \n              \n          \n                        \n                      \n         \n            \n           \n                  \n                        \n      \n                                                                          \n                                                                                                             \n             \n                      \n                        \n                    \n                            \n             \n                \n\n   \n\nThis project is designed to introduce you to basic DOM manipulation and event handling in JavaScript.\n\nMany websites display a cookie consent popup to inform users about the use of cookies and to obtain their consent. In this project, you will create a simple cookie consent popup that appears when the user visits the page. The popup will include a message and a button to accept the consent. Once accepted, the popup will disappear. Given below is an example of how the popup might look:\n\n[![Cookie Consent Popup](https://assets.roadmap.sh/guest/cookie-consent-banner-07etz.png)](https://assets.roadmap.sh/guest/cookie-consent-banner-07etz.png)\n\nBonus points if you persist the user's consent using cookies or local storage and prevent the popup from appearing on subsequent visits.";
				}
				async function compiledContent$S() {
					return await html$S();
				}
				function getHeadings$S() {
					return [];
				}

				const Content$S = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$S;
					content.file = file$S;
					content.url = url$S;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$S())}`;
				});

const __vite_glob_0_14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$S,
	compiledContent: compiledContent$S,
	default: Content$S,
	file: file$S,
	frontmatter: frontmatter$S,
	getHeadings: getHeadings$S,
	rawContent: rawContent$S,
	url: url$S
}, Symbol.toStringTag, { value: 'Module' }));

const html$R = () => "<p>You will create a custom dropdown menu that lets users select an item from a list. The dropdown should have a default state showing a placeholder text, an open state revealing all options, and a selected state where the chosen item is displayed. When an item is selected, the dropdown closes, and the selected item is highlighted.</p>\n<p>Given below is the mockup showing the dropdown in its default, open, and selected states:</p>\n<p><a href=\"https://assets.roadmap.sh/guest/dropdown-1f4b3.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/dropdown-1f4b3.png\" alt=\"Custom Dropdown\"></a></p>\n<p>This project will help you practice DOM manipulation, event handling, and creating responsive and interactive elements with JavaScript.</p>";

				const frontmatter$R = {"title":"Custom Dropdown","description":"Create a custom dropdown using HTML, CSS, and JavaScript.","isNew":false,"sort":20,"difficulty":"intermediate","nature":"JavaScript","skills":["HTML","CSS","JavaScript","DOM Manipulation"],"seo":{"title":"Build a Custom Dropdown Menu with JavaScript","description":"Learn how to create a fully customizable dropdown menu that allows users to select an item and see the selection reflected in the dropdown.","keywords":["custom dropdown","javascript dropdown","html and css"]},"roadmapIds":["frontend"]};
				const file$R = "/workspace/src/data/projects/custom-dropdown.md";
				const url$R = undefined;
				function rawContent$R() {
					return "   \n                        \n                                                                        \n            \n        \n                          \n                    \n       \n          \n         \n                \n                      \n    \n                                                       \n                                                                                                                                                            \n           \n                       \n                           \n                    \n           \n              \n   \n\nYou will create a custom dropdown menu that lets users select an item from a list. The dropdown should have a default state showing a placeholder text, an open state revealing all options, and a selected state where the chosen item is displayed. When an item is selected, the dropdown closes, and the selected item is highlighted.\n\nGiven below is the mockup showing the dropdown in its default, open, and selected states:\n\n[![Custom Dropdown](https://assets.roadmap.sh/guest/dropdown-1f4b3.png)](https://assets.roadmap.sh/guest/dropdown-1f4b3.png)\n\nThis project will help you practice DOM manipulation, event handling, and creating responsive and interactive elements with JavaScript.\n";
				}
				async function compiledContent$R() {
					return await html$R();
				}
				function getHeadings$R() {
					return [];
				}

				const Content$R = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$R;
					content.file = file$R;
					content.url = url$R;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$R())}`;
				});

const __vite_glob_0_15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$R,
	compiledContent: compiledContent$R,
	default: Content$R,
	file: file$R,
	frontmatter: frontmatter$R,
	getHeadings: getHeadings$R,
	rawContent: rawContent$R,
	url: url$R
}, Symbol.toStringTag, { value: 'Module' }));

const html$Q = () => "<p>You are required to build a command-line interface (CLI) utility for backing up any type of database. The utility will support various database management systems (DBMS) such as MySQL, PostgreSQL, MongoDB, SQLite, and others. The tool will feature automatic backup scheduling, compression of backup files, storage options (local and cloud), and logging of backup activities.</p>\n<h2 id=\"project-requirements\">Project Requirements</h2>\n<p>The CLI tool should support the following features:</p>\n<h3 id=\"database-connectivity\">Database Connectivity</h3>\n<ul>\n<li><strong>Support for Multiple DBMS:</strong> Provide support for connecting to various types of databases (e.g., MySQL, PostgreSQL, MongoDB).</li>\n<li><strong>Connection Parameters:</strong> Allow users to specify database connection parameters. Parameters may include host, port, username, password, and database name.</li>\n<li><strong>Connection Testing:</strong> Validate credentials based on the database type before proceeding with backup operations.</li>\n<li><strong>Error Handling:</strong> Implement error handling for database connection failures.</li>\n</ul>\n<h3 id=\"backup-operations\">Backup Operations</h3>\n<ul>\n<li><strong>Backup Types:</strong> Support full, incremental, and differential backup types based on the database type and user preference.</li>\n<li><strong>Compression:</strong> Compress backup files to reduce storage space.</li>\n</ul>\n<h3 id=\"storage-options\">Storage Options</h3>\n<ul>\n<li><strong>Local Storage:</strong> Allow users to store backup files locally on the system.</li>\n<li><strong>Cloud Storage:</strong> Provide options to store backup files on cloud storage services like AWS S3, Google Cloud Storage, or Azure Blob Storage.</li>\n</ul>\n<h3 id=\"logging-and-notifications\">Logging and Notifications</h3>\n<ul>\n<li><strong>Logging:</strong> Log backup activities, including start time, end time, status, time taken, and any errors encountered.</li>\n<li><strong>Notifications:</strong> Optionally send slack notification on completion of backup operations.</li>\n</ul>\n<h3 id=\"restore-operations\">Restore Operations</h3>\n<ul>\n<li><strong>Restore Backup:</strong> Implement a restore operation to recover the database from a backup file.</li>\n<li><strong>Selective Restore:</strong> Provide options for selective restoration of specific tables or collections if supported by the DBMS.</li>\n</ul>\n<h2 id=\"constraints\">Constraints</h2>\n<p>Feel free to use any programming language or framework of your choice to implement the database backup utility. Ensure that the tool is well-documented and easy to use. You can leverage existing libraries or tools for database connectivity and backup operations.</p>\n<ul>\n<li>The tool should be designed to handle large databases efficiently.</li>\n<li>Ensure that the backup and restore operations are secure and reliable.</li>\n<li>The utility should be user-friendly and provide clear instructions for usage (e.g., help command).</li>\n<li>Consider the performance implications of backup operations on the database server.</li>\n<li>Implement proper error handling and logging mechanisms to track backup activities.</li>\n<li>Ensure compatibility with different operating systems (Windows, Linux, macOS).</li>\n</ul>\n<hr>\n<p>Working on this project will help you gain a deeper understanding of database management systems, backup strategies, command-line interface development, and error handling. You will also learn about cloud storage integration and logging mechanisms. This project will enhance your skills in programming, database management, and system administration.</p>";

				const frontmatter$Q = {"title":"Database Backup Utility","description":"Build a database backup utility that can backup and restore any DB","isNew":false,"sort":2100,"difficulty":"advanced","nature":"CLI","skills":["Programming Language","Databases","CLI"],"seo":{"title":"Database Backup Utility Project Idea","description":"","keywords":["multiplayer game server","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot","cpp"]};
				const file$Q = "/workspace/src/data/projects/database-backup-utility.md";
				const url$Q = undefined;
				function rawContent$Q() {
					return "   \n                                \n                                                                                 \n            \n          \n                      \n             \n       \n                          \n               \n         \n    \n                                               \n                 \n           \n                               \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n         \n   \n\nYou are required to build a command-line interface (CLI) utility for backing up any type of database. The utility will support various database management systems (DBMS) such as MySQL, PostgreSQL, MongoDB, SQLite, and others. The tool will feature automatic backup scheduling, compression of backup files, storage options (local and cloud), and logging of backup activities.\n\n## Project Requirements\n\nThe CLI tool should support the following features:\n\n### Database Connectivity\n\n- **Support for Multiple DBMS:** Provide support for connecting to various types of databases (e.g., MySQL, PostgreSQL, MongoDB).\n- **Connection Parameters:** Allow users to specify database connection parameters. Parameters may include host, port, username, password, and database name.\n- **Connection Testing:** Validate credentials based on the database type before proceeding with backup operations.\n- **Error Handling:** Implement error handling for database connection failures.\n\n### Backup Operations\n\n- **Backup Types:** Support full, incremental, and differential backup types based on the database type and user preference.\n- **Compression:** Compress backup files to reduce storage space.\n\n### Storage Options\n\n- **Local Storage:** Allow users to store backup files locally on the system.\n- **Cloud Storage:** Provide options to store backup files on cloud storage services like AWS S3, Google Cloud Storage, or Azure Blob Storage.\n\n### Logging and Notifications\n\n- **Logging:** Log backup activities, including start time, end time, status, time taken, and any errors encountered.\n- **Notifications:** Optionally send slack notification on completion of backup operations.\n\n### Restore Operations\n\n- **Restore Backup:** Implement a restore operation to recover the database from a backup file.\n- **Selective Restore:** Provide options for selective restoration of specific tables or collections if supported by the DBMS.\n\n## Constraints\n\nFeel free to use any programming language or framework of your choice to implement the database backup utility. Ensure that the tool is well-documented and easy to use. You can leverage existing libraries or tools for database connectivity and backup operations.\n\n- The tool should be designed to handle large databases efficiently.\n- Ensure that the backup and restore operations are secure and reliable.\n- The utility should be user-friendly and provide clear instructions for usage (e.g., help command).\n- Consider the performance implications of backup operations on the database server.\n- Implement proper error handling and logging mechanisms to track backup activities.\n- Ensure compatibility with different operating systems (Windows, Linux, macOS).\n\n\n<hr />\n\nWorking on this project will help you gain a deeper understanding of database management systems, backup strategies, command-line interface development, and error handling. You will also learn about cloud storage integration and logging mechanisms. This project will enhance your skills in programming, database management, and system administration.\n\n";
				}
				async function compiledContent$Q() {
					return await html$Q();
				}
				function getHeadings$Q() {
					return [{"depth":2,"slug":"project-requirements","text":"Project Requirements"},{"depth":3,"slug":"database-connectivity","text":"Database Connectivity"},{"depth":3,"slug":"backup-operations","text":"Backup Operations"},{"depth":3,"slug":"storage-options","text":"Storage Options"},{"depth":3,"slug":"logging-and-notifications","text":"Logging and Notifications"},{"depth":3,"slug":"restore-operations","text":"Restore Operations"},{"depth":2,"slug":"constraints","text":"Constraints"}];
				}

				const Content$Q = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$Q;
					content.file = file$Q;
					content.url = url$Q;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$Q())}`;
				});

const __vite_glob_0_16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$Q,
	compiledContent: compiledContent$Q,
	default: Content$Q,
	file: file$Q,
	frontmatter: frontmatter$Q,
	getHeadings: getHeadings$Q,
	rawContent: rawContent$Q,
	url: url$Q
}, Symbol.toStringTag, { value: 'Module' }));

const html$P = () => "<p>In this project, you are required to create a simple datepicker UI using only HTML and CSS. It will not be a functional datepicker, but a static UI component that you can later enhance with JavaScript.</p>\n<p>The goal of this project is to help you practice positioning, layout, and styling techniques in CSS. Below is a rough mockup showing the datepicker UI you need to create.</p>\n<p><a href=\"https://assets.roadmap.sh/guest/datepicker-ui-7l480.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/datepicker-ui-7l480.png\" alt=\"Datepicker UI\"></a></p>\n<p>Feel free to customize the colors, fonts, and overall design to match your style.</p>\n<hr>\n<p>While this version won’t be functional, it will provide a solid foundation for creating an interactive datepicker in a future project.</p>";

				const frontmatter$P = {"title":"Datepicker UI","description":"Create a simple datepicker UI using HTML and CSS.","isNew":false,"sort":6,"difficulty":"beginner","nature":"CSS","skills":["HTML","CSS","Layouts","Positioning"],"seo":{"title":"Create a Datepicker UI for a Website Using HTML and CSS","description":"Learn how to create a datepicker component using HTML and CSS.","keywords":["basic css","css project idea","responsive design","html and css"]},"roadmapIds":["frontend"]};
				const file$P = "/workspace/src/data/projects/datepicker-ui.md";
				const url$P = undefined;
				function rawContent$P() {
					return "   \n                        \n                                                                  \n              \n         \n                        \n             \n         \n            \n           \n               \n                 \n      \n                                                                    \n                                                                                 \n             \n                   \n                          \n                           \n                      \n             \n                \n\n   \n\nIn this project, you are required to create a simple datepicker UI using only HTML and CSS. It will not be a functional datepicker, but a static UI component that you can later enhance with JavaScript.\n\nThe goal of this project is to help you practice positioning, layout, and styling techniques in CSS. Below is a rough mockup showing the datepicker UI you need to create.\n\n[![Datepicker UI](https://assets.roadmap.sh/guest/datepicker-ui-7l480.png)](https://assets.roadmap.sh/guest/datepicker-ui-7l480.png)\n\nFeel free to customize the colors, fonts, and overall design to match your style.\n\n---\n\nWhile this version won't be functional, it will provide a solid foundation for creating an interactive datepicker in a future project.";
				}
				async function compiledContent$P() {
					return await html$P();
				}
				function getHeadings$P() {
					return [];
				}

				const Content$P = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$P;
					content.file = file$P;
					content.url = url$P;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$P())}`;
				});

const __vite_glob_0_17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$P,
	compiledContent: compiledContent$P,
	default: Content$P,
	file: file$P,
	frontmatter: frontmatter$P,
	getHeadings: getHeadings$P,
	rawContent: rawContent$P,
	url: url$P
}, Symbol.toStringTag, { value: 'Module' }));

const html$O = () => "<p>The goal of this project is to dockerize a simple Node.js service and deploy it to a remote server using GitHub Actions. You will also practice secrets management.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>There are 4 parts to this project:</p>\n<ul>\n<li><strong>Step 1</strong> — Creating a Node.js service</li>\n<li><strong>Step 2</strong> — Dockerizing the Node.js service</li>\n<li><strong>Step 3</strong> — Setup a remote Linux Server</li>\n<li><strong>Step 4</strong> — Deploying the Dockerized Node.js service to a remote server using GitHub Actions</li>\n</ul>\n<h3 id=\"part-1-creating-a-nodejs-service\">Part 1: Creating a Node.js service</h3>\n<p>You are required to create a simple Node.js service with two routes:</p>\n<ul>\n<li><code>/</code> route - which simply returns <code>Hello, world!</code></li>\n<li><code>/secret</code> route - protected by Basic Auth</li>\n</ul>\n<p>Project should have a <code>.env</code> file with the following variables:</p>\n<ul>\n<li><code>SECRET_MESSAGE</code> - the secret message that the <code>/secret</code> route should return</li>\n<li><code>USERNAME</code> - the username for the Basic Auth</li>\n<li><code>PASSWORD</code> - the password for the Basic Auth</li>\n</ul>\n<p>When user visits the <code>/secret</code> route, they should be prompted for the username and password. If the username and password are correct, they should be able to see the secret message. If the username and password are incorrect, they should see an error message.</p>\n<h3 id=\"part-2-dockerizing-the-nodejs-service\">Part 2: Dockerizing the Node.js service</h3>\n<p>Create a Dockerfile for the Node.js service that will build a Docker image. You should be able to run the Docker image locally. Make sure that the <code>.env</code> file is not included in the Docker image.</p>\n<h3 id=\"part-3-setup-a-remote-linux-server\">Part 3: Setup a remote Linux Server</h3>\n<p>Setup a remote Linux server on either <a href=\"https://m.do.co/c/b29aa8845df8\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">DigitalOcean</a>, AWS, or any other provider. You can either set it up manually by using SSH or use a mix of Ansible or Terraform from previous projects.</p>\n<h3 id=\"part-4-deploy-the-dockerized-nodejs-service\">Part 4: Deploy the Dockerized Node.js service</h3>\n<p>Create a workflow that will build a Docker image and push it to the container registry. The workflow should then deploy the Docker image to the remote server. Feel free to explore secrets management in GitHub Actions. I will leave the implementation details to you.</p>\n<hr>\n<p>Once you are done with the project, you will have practiced dockerizing applications, setting up remote servers, implementing CI/CD workflows and secrets management.</p>";

				const frontmatter$O = {"title":"Dockerized Service","description":"Use GitHub Actions to Deploy a Dockerized Node.js Service","isNew":false,"sort":1400,"difficulty":"intermediate","nature":"Docker","skills":["nodejs","docker","devops"],"seo":{"title":"Dockerized Service Deployment","description":"Use GitHub Actions to Deploy a Dockerized Node.js Service to a remote server","keywords":["Docker","DigitalOcean","Node.js","GitHub Actions"]},"roadmapIds":["devops"]};
				const file$O = "/workspace/src/data/projects/dockerized-service-deployment.md";
				const url$O = undefined;
				function rawContent$O() {
					return "   \n                           \n                                                                        \n            \n          \n                          \n                \n       \n            \n            \n            \n    \n                                        \n                                                                                             \n           \n              \n                    \n               \n                      \n           \n            \n   \n\nThe goal of this project is to dockerize a simple Node.js service and deploy it to a remote server using GitHub Actions. You will also practice secrets management.\n\n## Requirements\n\nThere are 4 parts to this project:\n\n- **Step 1** — Creating a Node.js service\n- **Step 2** — Dockerizing the Node.js service\n- **Step 3** — Setup a remote Linux Server\n- **Step 4** — Deploying the Dockerized Node.js service to a remote server using GitHub Actions\n\n### Part 1: Creating a Node.js service\n\nYou are required to create a simple Node.js service with two routes:\n\n- `/` route - which simply returns `Hello, world!`\n- `/secret` route - protected by Basic Auth\n\nProject should have a `.env` file with the following variables:\n\n- `SECRET_MESSAGE` - the secret message that the `/secret` route should return\n- `USERNAME` - the username for the Basic Auth\n- `PASSWORD` - the password for the Basic Auth\n\nWhen user visits the `/secret` route, they should be prompted for the username and password. If the username and password are correct, they should be able to see the secret message. If the username and password are incorrect, they should see an error message.\n\n### Part 2: Dockerizing the Node.js service\n\nCreate a Dockerfile for the Node.js service that will build a Docker image. You should be able to run the Docker image locally. Make sure that the `.env` file is not included in the Docker image.\n\n### Part 3: Setup a remote Linux Server\n\nSetup a remote Linux server on either [DigitalOcean](https://m.do.co/c/b29aa8845df8), AWS, or any other provider. You can either set it up manually by using SSH or use a mix of Ansible or Terraform from previous projects.\n\n### Part 4: Deploy the Dockerized Node.js service\n\nCreate a workflow that will build a Docker image and push it to the container registry. The workflow should then deploy the Docker image to the remote server. Feel free to explore secrets management in GitHub Actions. I will leave the implementation details to you.\n\n<hr />\n\nOnce you are done with the project, you will have practiced dockerizing applications, setting up remote servers, implementing CI/CD workflows and secrets management.\n";
				}
				async function compiledContent$O() {
					return await html$O();
				}
				function getHeadings$O() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"part-1-creating-a-nodejs-service","text":"Part 1: Creating a Node.js service"},{"depth":3,"slug":"part-2-dockerizing-the-nodejs-service","text":"Part 2: Dockerizing the Node.js service"},{"depth":3,"slug":"part-3-setup-a-remote-linux-server","text":"Part 3: Setup a remote Linux Server"},{"depth":3,"slug":"part-4-deploy-the-dockerized-nodejs-service","text":"Part 4: Deploy the Dockerized Node.js service"}];
				}

				const Content$O = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$O;
					content.file = file$O;
					content.url = url$O;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$O())}`;
				});

const __vite_glob_0_18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$O,
	compiledContent: compiledContent$O,
	default: Content$O,
	file: file$O,
	frontmatter: frontmatter$O,
	getHeadings: getHeadings$O,
	rawContent: rawContent$O,
	url: url$O
}, Symbol.toStringTag, { value: 'Module' }));

const html$N = () => "<p>The goal of this project is to get familiar with <code>systemd</code>; creating and enabling a service, checking the status, keeping an eye on the logs, starting and stopping the service, etc.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>Create a script called <code>dummy.sh</code> that keeps running forever and writes a message to the log file every 10 seconds simulating an application running in the background. Here is an example script:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#6272A4\">#!/bin/bash</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#FF79C6\">while</span><span style=\"color:#8BE9FD\"> true</span><span style=\"color:#F8F8F2\">; </span><span style=\"color:#FF79C6\">do</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FD\">  echo</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Dummy service is running...</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#FF79C6\"> >></span><span style=\"color:#F1FA8C\"> /var/log/dummy-service.log</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">  sleep</span><span style=\"color:#BD93F9\"> 10</span></span>\n<span class=\"line\"><span style=\"color:#FF79C6\">done</span></span></code></pre>\n<p>Create a systemd service <code>dummy.service</code> that should start the app automatically on boot and keep it running in the background. If the service fails for any reason, it should automatically restart.</p>\n<p>You should be able to <code>start</code>, <code>stop</code>, <code>enable</code>, <code>disable</code>, check the <code>status</code> of the service, and check the logs i.e. following commands should be available for the service:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#6272A4\"># Interacting with the service</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">sudo</span><span style=\"color:#F1FA8C\"> systemctl</span><span style=\"color:#F1FA8C\"> start</span><span style=\"color:#F1FA8C\"> dummy</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">sudo</span><span style=\"color:#F1FA8C\"> systemctl</span><span style=\"color:#F1FA8C\"> stop</span><span style=\"color:#F1FA8C\"> dummy</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">sudo</span><span style=\"color:#F1FA8C\"> systemctl</span><span style=\"color:#F1FA8C\"> enable</span><span style=\"color:#F1FA8C\"> dummy</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">sudo</span><span style=\"color:#F1FA8C\"> systemctl</span><span style=\"color:#F1FA8C\"> disable</span><span style=\"color:#F1FA8C\"> dummy</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">sudo</span><span style=\"color:#F1FA8C\"> systemctl</span><span style=\"color:#F1FA8C\"> status</span><span style=\"color:#F1FA8C\"> dummy</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Check the logs</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">sudo</span><span style=\"color:#F1FA8C\"> journalctl</span><span style=\"color:#BD93F9\"> -u</span><span style=\"color:#F1FA8C\"> dummy</span><span style=\"color:#BD93F9\"> -f</span></span></code></pre>\n<hr>\n<p>After completing this project, you will have a good understanding of systemd, creating custom services, managing existing services, debugging issues, and more.</p>";

				const frontmatter$N = {"title":"Dummy Systemd Service","description":"Create a long-running systemd service that logs to a file.","isNew":false,"sort":900,"difficulty":"beginner","nature":"Systemd","skills":["Linux","DevOps","Systemd"],"seo":{"title":"Dummy Systemd Service","description":"Create a long-running Systemd service that autorestarts and logs to a file.","keywords":["Dummy Systemd Service","Systemd Service","Systemd"]},"roadmapIds":["devops"]};
				const file$N = "/workspace/src/data/projects/dummy-systemd-service.md";
				const url$N = undefined;
				function rawContent$N() {
					return "   \n                              \n                                                                         \n            \n         \n                      \n                 \n       \n           \n            \n             \n    \n                                \n                                                                                            \n           \n                             \n                       \n               \n           \n            \n   \n\nThe goal of this project is to get familiar with `systemd`; creating and enabling a service, checking the status, keeping an eye on the logs, starting and stopping the service, etc.\n\n## Requirements\n\nCreate a script called `dummy.sh` that keeps running forever and writes a message to the log file every 10 seconds simulating an application running in the background. Here is an example script:\n\n```bash\n#!/bin/bash\n\nwhile true; do\n  echo \"Dummy service is running...\" >> /var/log/dummy-service.log\n  sleep 10\ndone\n```\n\nCreate a systemd service `dummy.service` that should start the app automatically on boot and keep it running in the background. If the service fails for any reason, it should automatically restart.\n\nYou should be able to `start`, `stop`, `enable`, `disable`, check the `status` of the service, and check the logs i.e. following commands should be available for the service:\n\n```bash\n# Interacting with the service\nsudo systemctl start dummy\nsudo systemctl stop dummy\nsudo systemctl enable dummy\nsudo systemctl disable dummy\nsudo systemctl status dummy\n\n# Check the logs\nsudo journalctl -u dummy -f\n```\n\n<hr />\n\nAfter completing this project, you will have a good understanding of systemd, creating custom services, managing existing services, debugging issues, and more.";
				}
				async function compiledContent$N() {
					return await html$N();
				}
				function getHeadings$N() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$N = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$N;
					content.file = file$N;
					content.url = url$N;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$N())}`;
				});

const __vite_glob_0_19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$N,
	compiledContent: compiledContent$N,
	default: Content$N,
	file: file$N,
	frontmatter: frontmatter$N,
	getHeadings: getHeadings$N,
	rawContent: rawContent$N,
	url: url$N
}, Symbol.toStringTag, { value: 'Module' }));

const html$M = () => "<p>The goal of this project is to create an AWS account, set up a Linux server on AWS EC2, and deploy a simple static website. This project will help you gain hands-on experience with cloud computing, specifically with Amazon Web Services (AWS).</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You are required to complete the following tasks:</p>\n<ul>\n<li>Create an AWS account if you don’t have one already.</li>\n<li>Familiarize yourself with the AWS Management Console.</li>\n<li>Launch an EC2 instance with the following specifications:\n<ul>\n<li>Use Ubuntu Server AMI.</li>\n<li>Choose a <code>t2.micro</code> instance type (eligible for AWS Free Tier).</li>\n<li>Use the default VPC and subnet for your region.</li>\n<li>Configure the security group to allow inbound traffic on ports <code>22</code> (SSH) and <code>80</code> (HTTP).</li>\n<li>Create a new key pair or use an existing one for SSH access.</li>\n<li>Assign a public IP address to your instance.</li>\n</ul>\n</li>\n<li>Connect to your EC2 instance using SSH and the private key.</li>\n<li>Update the system packages and install a web server (e.g., Nginx).</li>\n<li>Create a simple HTML file for your static website.</li>\n<li>Deploy the static website to your EC2 instance.</li>\n<li>Access your website using the public IP address of your EC2 instance.</li>\n</ul>\n<h2 id=\"stretch-goals\">Stretch Goals</h2>\n<p>If you want to challenge yourself further, try these additional tasks:</p>\n<ul>\n<li>Set up a custom domain name for your website using Amazon Route 53.</li>\n<li>Implement HTTPS using a free SSL/TLS certificate from Let’s Encrypt.</li>\n<li>Create a simple CI/CD pipeline using AWS CodePipeline to automatically deploy changes to your website.</li>\n</ul>\n<h2 id=\"learning-outcomes\">Learning Outcomes</h2>\n<p>After completing this project, you will have gained practical experience in:</p>\n<ul>\n<li>Creating basic AWS resources</li>\n<li>Learn about <a href=\"https://kamranahmed.info/posts/up-and-running-with-aws-ec2\" target=\"_blank\">AWS instances, types and differences</a></li>\n<li>Launching and configuring EC2 instances</li>\n<li>Connecting to Linux servers using SSH</li>\n<li>Basic server administration and web server setup</li>\n<li>Deploying static websites to cloud infrastructure</li>\n</ul>\n<hr>\n<p>After finishing this project you should have a good understanding of launching and connecting to EC2 instances, basic knowledge of security groups, and be able to deploy any of the projects from previous tasks using AWS EC2. Future project ideas will be based on these concepts.</p>";

				const frontmatter$M = {"title":"EC2 Instance","description":"Create an EC2 instance on AWS and connect to it using SSH.","isNew":false,"sort":1001,"difficulty":"beginner","nature":"AWS","skills":["aws","ec2","linux","devops"],"seo":{"title":"EC2 Instance","description":"Create an EC2 instance on AWS and connect to it using SSH.","keywords":["ec2","aws","linux"]},"roadmapIds":["devops"]};
				const file$M = "/workspace/src/data/projects/ec2-instance.md";
				const url$M = undefined;
				function rawContent$M() {
					return "   \n                     \n                                                                         \n            \n          \n                      \n             \n       \n         \n         \n           \n            \n    \n                       \n                                                                           \n           \n           \n           \n             \n           \n            \n   \n\nThe goal of this project is to create an AWS account, set up a Linux server on AWS EC2, and deploy a simple static website. This project will help you gain hands-on experience with cloud computing, specifically with Amazon Web Services (AWS).\n\n## Requirements\n\nYou are required to complete the following tasks:\n\n- Create an AWS account if you don't have one already.\n- Familiarize yourself with the AWS Management Console.\n- Launch an EC2 instance with the following specifications:\n   - Use Ubuntu Server AMI.\n   - Choose a `t2.micro` instance type (eligible for AWS Free Tier).\n   - Use the default VPC and subnet for your region.\n   - Configure the security group to allow inbound traffic on ports `22` (SSH) and `80` (HTTP).\n   - Create a new key pair or use an existing one for SSH access.\n   - Assign a public IP address to your instance.\n- Connect to your EC2 instance using SSH and the private key.\n- Update the system packages and install a web server (e.g., Nginx).\n- Create a simple HTML file for your static website.\n- Deploy the static website to your EC2 instance.\n- Access your website using the public IP address of your EC2 instance.\n\n## Stretch Goals\n\nIf you want to challenge yourself further, try these additional tasks:\n\n- Set up a custom domain name for your website using Amazon Route 53.\n- Implement HTTPS using a free SSL/TLS certificate from Let's Encrypt.\n- Create a simple CI/CD pipeline using AWS CodePipeline to automatically deploy changes to your website.\n\n## Learning Outcomes\n\nAfter completing this project, you will have gained practical experience in:\n\n- Creating basic AWS resources\n- Learn about [AWS instances, types and differences](https://kamranahmed.info/posts/up-and-running-with-aws-ec2)\n- Launching and configuring EC2 instances\n- Connecting to Linux servers using SSH\n- Basic server administration and web server setup\n- Deploying static websites to cloud infrastructure\n\n\n<hr />\n\nAfter finishing this project you should have a good understanding of launching and connecting to EC2 instances, basic knowledge of security groups, and be able to deploy any of the projects from previous tasks using AWS EC2. Future project ideas will be based on these concepts.\n";
				}
				async function compiledContent$M() {
					return await html$M();
				}
				function getHeadings$M() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":2,"slug":"stretch-goals","text":"Stretch Goals"},{"depth":2,"slug":"learning-outcomes","text":"Learning Outcomes"}];
				}

				const Content$M = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$M;
					content.file = file$M;
					content.url = url$M;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$M())}`;
				});

const __vite_glob_0_20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$M,
	compiledContent: compiledContent$M,
	default: Content$M,
	file: file$M,
	frontmatter: frontmatter$M,
	getHeadings: getHeadings$M,
	rawContent: rawContent$M,
	url: url$M
}, Symbol.toStringTag, { value: 'Module' }));

const html$L = () => "<p>You are required to build an API for an e-commerce platform. If you have developed the other projects in this roadmap, you will have to keep in mind everything you have learned so far:</p>\n<ul>\n<li>JWT authentication to ensure many users can interact with it.</li>\n<li>Implementing simple CRUD operations.</li>\n<li>Interaction with external services. Here you’ll be integrating with payment gateways such as Stripe.</li>\n<li>A complex data model that can handle products, shopping carts, and more.</li>\n</ul>\n<p>The goal of this project is to help you understand how to build a logic-heavy application with complex data models. You will also learn how to interact with external services and handle user authentication.</p>\n<p><img src=\"https://assets.roadmap.sh/guest/simple-ecommerce-api-thzqo.png\" alt=\"E-Commerce API\"></p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>Here is a rough list of requirements for this project:</p>\n<ul>\n<li>Ability for users to sign up and log in.</li>\n<li>Ability to add products to a cart.</li>\n<li>Ability to remove products from a cart.</li>\n<li>Ability to view and search for products.</li>\n<li>Ability for users to checkout and pay for products.</li>\n</ul>\n<p>You should also have some sort of admin panel where only you can add products, set the prices, manage inventory, and more.</p>\n<p>Start with building the API first and then frontend; you can use tools like Postman to interact with your API. Alternatively, build a simple frontend with HTML, CSS and some templating engine like Jinja or EJS.</p>\n<hr>\n<p>This project is a great way to learn how to build a complex application with a lot of moving parts. I will highly recommend you to complete this project before moving on to more advanced projects.</p>";

				const frontmatter$L = {"title":"E-Commerce API","description":"E-Commerce platform with cart and payment gateway integration.","isNew":false,"sort":1600,"difficulty":"intermediate","nature":"API","skills":["Programming Language","Database","Payment Gateway","Inventory Management"],"seo":{"title":"E-Commerce API Project Idea","description":"E-Commerce platform with cart and payment gateway integration.","keywords":["backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$L = "/workspace/src/data/projects/ecommerce-api.md";
				const url$L = undefined;
				function rawContent$L() {
					return "   \n                       \n                                                                             \n            \n          \n                          \n             \n       \n                          \n              \n                     \n                          \n    \n                                      \n                                                                               \n           \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nYou are required to build an API for an e-commerce platform. If you have developed the other projects in this roadmap, you will have to keep in mind everything you have learned so far:\n\n- JWT authentication to ensure many users can interact with it.\n- Implementing simple CRUD operations.\n- Interaction with external services. Here you’ll be integrating with payment gateways such as Stripe.\n- A complex data model that can handle products, shopping carts, and more.\n\nThe goal of this project is to help you understand how to build a logic-heavy application with complex data models. You will also learn how to interact with external services and handle user authentication.\n\n![E-Commerce API](https://assets.roadmap.sh/guest/simple-ecommerce-api-thzqo.png)\n\n## Requirements\n\nHere is a rough list of requirements for this project:\n\n- Ability for users to sign up and log in.\n- Ability to add products to a cart.\n- Ability to remove products from a cart.\n- Ability to view and search for products.\n- Ability for users to checkout and pay for products.\n\nYou should also have some sort of admin panel where only you can add products, set the prices, manage inventory, and more.\n\nStart with building the API first and then frontend; you can use tools like Postman to interact with your API. Alternatively, build a simple frontend with HTML, CSS and some templating engine like Jinja or EJS.\n\n<hr />\n\nThis project is a great way to learn how to build a complex application with a lot of moving parts. I will highly recommend you to complete this project before moving on to more advanced projects.";
				}
				async function compiledContent$L() {
					return await html$L();
				}
				function getHeadings$L() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$L = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$L;
					content.file = file$L;
					content.url = url$L;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$L())}`;
				});

const __vite_glob_0_21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$L,
	compiledContent: compiledContent$L,
	default: Content$L,
	file: file$L,
	frontmatter: frontmatter$L,
	getHeadings: getHeadings$L,
	rawContent: rawContent$L,
	url: url$L
}, Symbol.toStringTag, { value: 'Module' }));

const html$K = () => "<p>Build an API for an expense tracker application. This API should allow users to create, read, update, and delete expenses. Users should be able to sign up and log in to the application. Each user should have their own set of expenses.</p>\n<p><img src=\"https://assets.roadmap.sh/guest/expense-tracker-api-m72p5.png\" alt=\"Expense Tracker API\"></p>\n<h2 id=\"features\">Features</h2>\n<p>Here are the features that you should implement in your Expense Tracker API:</p>\n<ul>\n<li>Sign up as a new user.</li>\n<li>Generate and validate JWTs for handling authentication and user session.</li>\n<li>List and filter your past expenses. You can add the following filters:\n<ul>\n<li>Past week</li>\n<li>Past month</li>\n<li>Last 3 months</li>\n<li>Custom (to specify a start and end date of your choosing).</li>\n</ul>\n</li>\n<li>Add a new expense</li>\n<li>Remove existing expenses</li>\n<li>Update existing expenses</li>\n</ul>\n<h2 id=\"constraints\">Constraints</h2>\n<p>You can use any programming language and framework of your choice. You can use a database of your choice to store the data. You can use any ORM or database library to interact with the database.</p>\n<p>Here are some constraints that you should follow:</p>\n<ul>\n<li>You’ll be using <a href=\"https://itnext.io/demystifying-jwt-a-guide-for-front-end-developers-ead6574531c3\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">JWT (JSON Web Token)</a> to protect the endpoints and to identify the requester.</li>\n<li>For the different expense categories, you can use the following list (feel free to decide how to implement this as part of your data model):\n<ul>\n<li>Groceries</li>\n<li>Leisure</li>\n<li>Electronics</li>\n<li>Utilities</li>\n<li>Clothing</li>\n<li>Health</li>\n<li>Others</li>\n</ul>\n</li>\n</ul>\n<hr>\n<p>This is the last “beginner” project in the backend roadmap. If you have completed all the projects in the backend roadmap, you should have a good understanding of how to build a backend application. You can now move on to the “intermediate” projects in the backend roadmap.</p>";

				const frontmatter$K = {"title":"Expense Tracker API","description":"Build an API for an expense tracker application.","isNew":false,"sort":1000,"difficulty":"beginner","nature":"API","skills":["Programming Language","Data modeling","User Authentication"],"seo":{"title":"Expense Tracker API Project Idea","description":"Build an API for an expense tracker application.","keywords":["backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$K = "/workspace/src/data/projects/expense-tracker-api.md";
				const url$K = undefined;
				function rawContent$K() {
					return "   \n                            \n                                                               \n            \n          \n                      \n             \n       \n                          \n                   \n                         \n    \n                                           \n                                                                 \n           \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nBuild an API for an expense tracker application. This API should allow users to create, read, update, and delete expenses. Users should be able to sign up and log in to the application. Each user should have their own set of expenses.\n\n![Expense Tracker API](https://assets.roadmap.sh/guest/expense-tracker-api-m72p5.png)\n\n## Features\n\nHere are the features that you should implement in your Expense Tracker API:\n\n- Sign up as a new user.\n- Generate and validate JWTs for handling authentication and user session.\n- List and filter your past expenses. You can add the following filters:\n  - Past week\n  - Past month\n  - Last 3 months\n  - Custom (to specify a start and end date of your choosing).\n- Add a new expense\n- Remove existing expenses\n- Update existing expenses\n\n## Constraints\n\nYou can use any programming language and framework of your choice. You can use a database of your choice to store the data. You can use any ORM or database library to interact with the database.\n\nHere are some constraints that you should follow:\n\n- You’ll be using [JWT (JSON Web Token)](https://itnext.io/demystifying-jwt-a-guide-for-front-end-developers-ead6574531c3) to protect the endpoints and to identify the requester.\n- For the different expense categories, you can use the following list (feel free to decide how to implement this as part of your data model):\n  - Groceries\n  - Leisure\n  - Electronics\n  - Utilities\n  - Clothing\n  - Health\n  - Others\n\n<hr />\n\nThis is the last \"beginner\" project in the backend roadmap. If you have completed all the projects in the backend roadmap, you should have a good understanding of how to build a backend application. You can now move on to the \"intermediate\" projects in the backend roadmap.\n\n";
				}
				async function compiledContent$K() {
					return await html$K();
				}
				function getHeadings$K() {
					return [{"depth":2,"slug":"features","text":"Features"},{"depth":2,"slug":"constraints","text":"Constraints"}];
				}

				const Content$K = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$K;
					content.file = file$K;
					content.url = url$K;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$K())}`;
				});

const __vite_glob_0_22 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$K,
	compiledContent: compiledContent$K,
	default: Content$K,
	file: file$K,
	frontmatter: frontmatter$K,
	getHeadings: getHeadings$K,
	rawContent: rawContent$K,
	url: url$K
}, Symbol.toStringTag, { value: 'Module' }));

const html$J = () => "<p>Build a simple expense tracker application to manage your finances. The application should allow users to add, delete, and view their expenses. The application should also provide a summary of the expenses.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>Application should run from the command line and should have the following features:</p>\n<ul>\n<li>Users can add an expense with a description and amount.</li>\n<li>Users can update an expense.</li>\n<li>Users can delete an expense.</li>\n<li>Users can view all expenses.</li>\n<li>Users can view a summary of all expenses.</li>\n<li>Users can view a summary of expenses for a specific month (of current year).</li>\n</ul>\n<p>Here are some additional features that you can add to the application:</p>\n<ul>\n<li>Add expense categories and allow users to filter expenses by category.</li>\n<li>Allow users to set a budget for each month and show a warning when the user exceeds the budget.</li>\n<li>Allow users to export expenses to a CSV file.</li>\n</ul>\n<p>The list of commands and their expected output is shown below:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#50FA7B\">$</span><span style=\"color:#F1FA8C\"> expense-tracker</span><span style=\"color:#F1FA8C\"> add</span><span style=\"color:#BD93F9\"> --description</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Lunch</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#BD93F9\"> --amount</span><span style=\"color:#BD93F9\"> 20</span></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Expense added successfully (ID: 1)</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">$</span><span style=\"color:#F1FA8C\"> expense-tracker</span><span style=\"color:#F1FA8C\"> add</span><span style=\"color:#BD93F9\"> --description</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Dinner</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#BD93F9\"> --amount</span><span style=\"color:#BD93F9\"> 10</span></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Expense added successfully (ID: 2)</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">$</span><span style=\"color:#F1FA8C\"> expense-tracker</span><span style=\"color:#F1FA8C\"> list</span></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># ID  Date       Description  Amount</span></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># 1   2024-08-06  Lunch        $20</span></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># 2   2024-08-06  Dinner       $10</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">$</span><span style=\"color:#F1FA8C\"> expense-tracker</span><span style=\"color:#F1FA8C\"> summary</span></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Total expenses: $30</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">$</span><span style=\"color:#F1FA8C\"> expense-tracker</span><span style=\"color:#F1FA8C\"> delete</span><span style=\"color:#BD93F9\"> --id</span><span style=\"color:#BD93F9\"> 2</span></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Expense deleted successfully</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">$</span><span style=\"color:#F1FA8C\"> expense-tracker</span><span style=\"color:#F1FA8C\"> summary</span></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Total expenses: $20</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">$</span><span style=\"color:#F1FA8C\"> expense-tracker</span><span style=\"color:#F1FA8C\"> summary</span><span style=\"color:#BD93F9\"> --month</span><span style=\"color:#BD93F9\"> 8</span></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Total expenses for August: $20</span></span></code></pre>\n<h2 id=\"implementation\">Implementation</h2>\n<p>You can implement the application using any programming language of your choice. Here are some suggestions:</p>\n<ul>\n<li>Use any programming language for any available module for parsing command arguments (e.g. python with the <code>argparse</code>, node.js with <code>commander</code> etc).</li>\n<li>Use a simple text file to store the expenses data. You can use JSON, CSV, or any other format to store the data.</li>\n<li>Add error handling to handle invalid inputs and edge cases (e.g. negative amounts, non-existent expense IDs, etc).</li>\n<li>Use functions to modularize the code and make it easier to test and maintain.</li>\n</ul>\n<hr>\n<p>This project idea is a great way to practice your logic building skills and learn how to interact with the filesystem using a CLI application. It will also help you understand how to manage data and provide useful information to users in a structured way.</p>";

				const frontmatter$J = {"title":"Expense Tracker","description":"Build a simple expense tracker to manage your finances.","isNew":false,"sort":300,"difficulty":"beginner","nature":"CLI","skills":["Programming Language","CLI","Filesystem","Logic Building"],"seo":{"title":"Expense Tracker","description":"Build a simple expense tracker application to manage your finances.","keywords":["expense tracker cli","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot","cpp"]};
				const file$J = "/workspace/src/data/projects/expense-tracker.md";
				const url$J = undefined;
				function rawContent$J() {
					return "   \n                        \n                                                                      \n            \n         \n                      \n             \n       \n                          \n         \n                \n                    \n    \n                          \n                                                                                    \n           \n                           \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n         \n   \n\nBuild a simple expense tracker application to manage your finances. The application should allow users to add, delete, and view their expenses. The application should also provide a summary of the expenses.\n\n## Requirements\n\nApplication should run from the command line and should have the following features:\n\n- Users can add an expense with a description and amount.\n- Users can update an expense.\n- Users can delete an expense.\n- Users can view all expenses.\n- Users can view a summary of all expenses.\n- Users can view a summary of expenses for a specific month (of current year).\n\nHere are some additional features that you can add to the application:\n\n- Add expense categories and allow users to filter expenses by category.\n- Allow users to set a budget for each month and show a warning when the user exceeds the budget.\n- Allow users to export expenses to a CSV file.\n\nThe list of commands and their expected output is shown below:\n\n```bash\n$ expense-tracker add --description \"Lunch\" --amount 20\n# Expense added successfully (ID: 1)\n\n$ expense-tracker add --description \"Dinner\" --amount 10\n# Expense added successfully (ID: 2)\n\n$ expense-tracker list\n# ID  Date       Description  Amount\n# 1   2024-08-06  Lunch        $20\n# 2   2024-08-06  Dinner       $10\n\n$ expense-tracker summary\n# Total expenses: $30\n\n$ expense-tracker delete --id 2\n# Expense deleted successfully\n\n$ expense-tracker summary\n# Total expenses: $20\n\n$ expense-tracker summary --month 8\n# Total expenses for August: $20\n```\n\n## Implementation\n\nYou can implement the application using any programming language of your choice. Here are some suggestions:\n\n- Use any programming language for any available module for parsing command arguments (e.g. python with the `argparse`, node.js with `commander` etc).\n- Use a simple text file to store the expenses data. You can use JSON, CSV, or any other format to store the data.\n- Add error handling to handle invalid inputs and edge cases (e.g. negative amounts, non-existent expense IDs, etc).\n- Use functions to modularize the code and make it easier to test and maintain.\n\n<hr />\n\nThis project idea is a great way to practice your logic building skills and learn how to interact with the filesystem using a CLI application. It will also help you understand how to manage data and provide useful information to users in a structured way.\n";
				}
				async function compiledContent$J() {
					return await html$J();
				}
				function getHeadings$J() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":2,"slug":"implementation","text":"Implementation"}];
				}

				const Content$J = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$J;
					content.file = file$J;
					content.url = url$J;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$J())}`;
				});

const __vite_glob_0_23 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$J,
	compiledContent: compiledContent$J,
	default: Content$J,
	file: file$J,
	frontmatter: frontmatter$J,
	getHeadings: getHeadings$J,
	rawContent: rawContent$J,
	url: url$J
}, Symbol.toStringTag, { value: 'Module' }));

const html$I = () => "<p>You are required to develop a tool that verifies the integrity of log files to detect tampering. This tool can be used to enhance security measures by using techniques such as file integrity monitoring and hashing to ensure that no unauthorized changes have been made to the log files.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>The tool should be capable of the following:</p>\n<ul>\n<li>Accept a directory or a single log file as input.</li>\n<li>Utilize a cryptographic hashing algorithm, such as SHA-256, to compute hashes for each log file provided.</li>\n<li>On first use, store the computed hashes in a secure location.</li>\n<li>For subsequent uses, compare the newly computed hashes against the previously stored ones.</li>\n<li>Clearly report any discrepancies found as a result of the hash comparison, indicating possible file tampering.</li>\n<li>Allow for manual re-initialization of log file integrity.</li>\n</ul>\n<p>Here is the example of how it might look like</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#FF79C6\">></span><span style=\"color:#F8F8F2\"> ./integrity-check init /var/log  </span><span style=\"color:#6272A4\"># Initializes and stores hashes of all log files in the directory</span></span>\n<span class=\"line\"><span style=\"color:#FF79C6\">></span><span style=\"color:#F8F8F2\"> Hashes stored successfully.</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#FF79C6\">></span><span style=\"color:#F8F8F2\"> ./integrity-check check /var/log/syslog</span></span>\n<span class=\"line\"><span style=\"color:#FF79C6\">></span><span style=\"color:#F8F8F2\"> Status: Modified (</span><span style=\"color:#50FA7B\">Hash</span><span style=\"color:#F1FA8C\"> mismatch</span><span style=\"color:#F8F8F2\">)</span></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Optionally report the files where hashes mismatched</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#FF79C6\">></span><span style=\"color:#F8F8F2\"> ./integrity-check -check /var/log/auth.log</span></span>\n<span class=\"line\"><span style=\"color:#FF79C6\">></span><span style=\"color:#F8F8F2\"> Status: Unmodified</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#FF79C6\">></span><span style=\"color:#F8F8F2\"> ./integrity-check update /var/log/syslog</span></span>\n<span class=\"line\"><span style=\"color:#FF79C6\">></span><span style=\"color:#F8F8F2\"> Hash updated successfully.</span></span></code></pre>\n<p>After completing this project you will get the idea of hashing algorithms, security and writing scripts.</p>";

				const frontmatter$I = {"title":"File Integrity Checker","description":"Verify the integrity of application log files to detect tampering.","isNew":false,"sort":1602,"difficulty":"intermediate","nature":"Security","skills":["Bash","Python","Linux","Cyber Security"],"seo":{"title":"Build A File Integrity Checking Tool","description":"Learn how to build a CLI tool that validates the integrity of a file using hashes.","keywords":["integrity","hashing","security","devops","cyber security"]},"roadmapIds":["devops"]};
				const file$I = "/workspace/src/data/projects/file-integrity-checker.md";
				const url$I = undefined;
				function rawContent$I() {
					return "   \n                               \n                                                                                 \n            \n          \n                          \n                  \n       \n          \n            \n           \n                    \n    \n                                               \n                                                                                                   \n           \n                 \n               \n                \n              \n                      \n           \n            \n   \n\nYou are required to develop a tool that verifies the integrity of log files to detect tampering. This tool can be used to enhance security measures by using techniques such as file integrity monitoring and hashing to ensure that no unauthorized changes have been made to the log files.\n\n## Requirements\n\nThe tool should be capable of the following:\n\n- Accept a directory or a single log file as input.\n- Utilize a cryptographic hashing algorithm, such as SHA-256, to compute hashes for each log file provided.\n- On first use, store the computed hashes in a secure location.\n- For subsequent uses, compare the newly computed hashes against the previously stored ones.\n- Clearly report any discrepancies found as a result of the hash comparison, indicating possible file tampering.\n- Allow for manual re-initialization of log file integrity.\n\nHere is the example of how it might look like\n\n```bash\n> ./integrity-check init /var/log  # Initializes and stores hashes of all log files in the directory\n> Hashes stored successfully.\n\n> ./integrity-check check /var/log/syslog\n> Status: Modified (Hash mismatch)\n# Optionally report the files where hashes mismatched\n\n> ./integrity-check -check /var/log/auth.log\n> Status: Unmodified\n\n> ./integrity-check update /var/log/syslog\n> Hash updated successfully.\n```\n\nAfter completing this project you will get the idea of hashing algorithms, security and writing scripts.\n";
				}
				async function compiledContent$I() {
					return await html$I();
				}
				function getHeadings$I() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$I = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$I;
					content.file = file$I;
					content.url = url$I;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$I())}`;
				});

const __vite_glob_0_24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$I,
	compiledContent: compiledContent$I,
	default: Content$I,
	file: file$I,
	frontmatter: frontmatter$I,
	getHeadings: getHeadings$I,
	rawContent: rawContent$I,
	url: url$I
}, Symbol.toStringTag, { value: 'Module' }));

const html$H = () => "<p>This project involves creating a backend system for a workout tracker application where users can sign up, log in, create workout plans, and track their progress. The system will feature JWT authentication, CRUD operations for workouts, and generate reports on past workouts.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You are required to develop an API for a workout tracker application that allows users to manage their workouts and track their progress. Your first task is to think about the database schema and the API endpoints that will be needed to support the application’s functionality. Here are some of the key features you should consider:</p>\n<h3 id=\"exercise-data\">Exercise Data</h3>\n<p>You should write a data seeder to populate the database with a list of exercises. Each exercise should have a name, description, and category (e.g., cardio, strength, flexibility) or muscle group (e.g., chest, back, legs). Exercises will be used to create workout plans.</p>\n<h3 id=\"user-authentication-and-authorization\">User Authentication and Authorization</h3>\n<p>Users will be able to sign up, log in, and log out of the application. You should use JWTs for authentication and authorization. Only authenticated users should be able to create, update, and delete workout plans. Needless to say, users should only be able to access their own workout plans.</p>\n<ul>\n<li><strong>Sign-Up</strong>: Allow users to create an account.</li>\n<li><strong>Login</strong>: Allow users to log in to their account.</li>\n<li><strong>JWT</strong>: Use JSON Web Tokens for authentication.</li>\n</ul>\n<h3 id=\"workout-management\">Workout Management</h3>\n<p>Users will be able to create their workout plans. Workout plans should consist of multiple exercises, each with a set number of repetitions, sets, and weights. Users should be able to update and delete their workout plans. Additionally, users should be able to schedule workouts for specific dates and times.</p>\n<ul>\n<li>Create Workout: Allow users to create workouts composed of multiple exercises.</li>\n<li>Update Workout: Allow users to update workouts and add comments.</li>\n<li>Delete Workout: Allow users to delete workouts.</li>\n<li>Schedule Workouts: Allow users to schedule workouts for specific dates and times.</li>\n<li>List Workouts: List active or pending workouts sorted by date and time.</li>\n<li>Generate Reports: Generate reports on past workouts and progress.</li>\n</ul>\n<h2 id=\"constraints\">Constraints</h2>\n<p>You are free to choose the programming language and database of your choice. Actual decisions for the database schema, API endpoints, and other implementation details are up to you. However, you should consider the following constraints:</p>\n<ul>\n<li><strong>Database</strong>: Use a relational database to store user data, workout plans, and exercise data.</li>\n<li><strong>API</strong>: Develop a RESTful API to interact with the database.</li>\n<li><strong>Security</strong>: Implement JWT authentication to secure the API endpoints.</li>\n<li><strong>Testing</strong>: Write unit tests to ensure the correctness of your code.</li>\n<li><strong>Documentation</strong>: Learn about OpenAPI Specs. Document your API endpoints and provide examples of how to use them.</li>\n</ul>\n<hr>\n<p>This project is a great way to practice building a backend system for a real-world application. You will learn how to design a database schema, implement user authentication, and create RESTful API endpoints. Additionally, you will gain experience in writing unit tests and documenting your code.</p>";

				const frontmatter$H = {"title":"Workout Tracker","description":"App to let users track their workouts and progress.","isNew":false,"sort":1700,"difficulty":"intermediate","nature":"API","skills":["Programming Language","Date and Time","Database","Seeder","OpenAPI"],"seo":{"title":"Workout Tracker Project Idea","description":"App to let users track their workouts and progress.","keywords":["backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$H = "/workspace/src/data/projects/fitness-workout-tracker.md";
				const url$H = undefined;
				function rawContent$H() {
					return "   \n                        \n                                                                  \n            \n          \n                          \n             \n       \n                          \n                   \n              \n            \n             \n    \n                                       \n                                                                    \n           \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nThis project involves creating a backend system for a workout tracker application where users can sign up, log in, create workout plans, and track their progress. The system will feature JWT authentication, CRUD operations for workouts, and generate reports on past workouts.\n\n## Requirements\n\nYou are required to develop an API for a workout tracker application that allows users to manage their workouts and track their progress. Your first task is to think about the database schema and the API endpoints that will be needed to support the application's functionality. Here are some of the key features you should consider:\n\n### Exercise Data\n\nYou should write a data seeder to populate the database with a list of exercises. Each exercise should have a name, description, and category (e.g., cardio, strength, flexibility) or muscle group (e.g., chest, back, legs). Exercises will be used to create workout plans.\n\n### User Authentication and Authorization\n\nUsers will be able to sign up, log in, and log out of the application. You should use JWTs for authentication and authorization. Only authenticated users should be able to create, update, and delete workout plans. Needless to say, users should only be able to access their own workout plans.\n\n- **Sign-Up**: Allow users to create an account.\n- **Login**: Allow users to log in to their account.\n- **JWT**: Use JSON Web Tokens for authentication.\n\n### Workout Management\n\nUsers will be able to create their workout plans. Workout plans should consist of multiple exercises, each with a set number of repetitions, sets, and weights. Users should be able to update and delete their workout plans. Additionally, users should be able to schedule workouts for specific dates and times.\n\n- Create Workout: Allow users to create workouts composed of multiple exercises.\n- Update Workout: Allow users to update workouts and add comments.\n- Delete Workout: Allow users to delete workouts.\n- Schedule Workouts: Allow users to schedule workouts for specific dates and times.\n- List Workouts: List active or pending workouts sorted by date and time.\n- Generate Reports: Generate reports on past workouts and progress.\n\n## Constraints\n\nYou are free to choose the programming language and database of your choice. Actual decisions for the database schema, API endpoints, and other implementation details are up to you. However, you should consider the following constraints:\n\n- **Database**: Use a relational database to store user data, workout plans, and exercise data.\n- **API**: Develop a RESTful API to interact with the database.\n- **Security**: Implement JWT authentication to secure the API endpoints.\n- **Testing**: Write unit tests to ensure the correctness of your code.\n- **Documentation**: Learn about OpenAPI Specs. Document your API endpoints and provide examples of how to use them.\n\n<hr />\n\nThis project is a great way to practice building a backend system for a real-world application. You will learn how to design a database schema, implement user authentication, and create RESTful API endpoints. Additionally, you will gain experience in writing unit tests and documenting your code.\n";
				}
				async function compiledContent$H() {
					return await html$H();
				}
				function getHeadings$H() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"exercise-data","text":"Exercise Data"},{"depth":3,"slug":"user-authentication-and-authorization","text":"User Authentication and Authorization"},{"depth":3,"slug":"workout-management","text":"Workout Management"},{"depth":2,"slug":"constraints","text":"Constraints"}];
				}

				const Content$H = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$H;
					content.file = file$H;
					content.url = url$H;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$H())}`;
				});

const __vite_glob_0_25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$H,
	compiledContent: compiledContent$H,
	default: Content$H,
	file: file$H,
	frontmatter: frontmatter$H,
	getHeadings: getHeadings$H,
	rawContent: rawContent$H,
	url: url$H
}, Symbol.toStringTag, { value: 'Module' }));

const html$G = () => "<p>The goal of this project is to help you learn about how to use state management and component-based architecture using JavaScript frameworks. You will build a flash card app with pre-defined JavaScript questions and answers that users can flip through to test their knowledge.</p>\n<p><img src=\"https://assets.roadmap.sh/guest/flash-cards-crzw6.png\" alt=\"Flash Cards\"></p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You are required to develop a flash cards app with the following features:</p>\n<ul>\n<li>Pre-defined flashcards with questions and answers</li>\n<li>Progress bar to show the user’s progress</li>\n<li>Ability to view flashcards one at a time and flip to reveal the answer</li>\n<li>Simple navigation to cycle through the flashcards</li>\n</ul>\n<hr>\n<p>This project will help you understand how to manage state and create reusable components. You can use any framework of your choice, such as React, Angular, or Vue.js, to build this project.</p>";

				const frontmatter$G = {"title":"Flash Cards","description":"Create a flash card app using JavaScript frameworks.","isNew":true,"sort":20,"difficulty":"beginner","nature":"Frontend","skills":["HTML","CSS","JavaScript","JavaScript Frameworks"],"seo":{"title":"Build a Flash Cards App","description":"Create a flash card app using JavaScript frameworks","keywords":["flash cards","frontend project idea","javascript frameworks"]},"roadmapIds":["frontend"]};
				const file$G = "/workspace/src/data/projects/flash-cards.md";
				const url$G = undefined;
				function rawContent$G() {
					return "   \n                  \n                                                                 \n           \n        \n                      \n                  \n       \n          \n         \n                \n                           \n    \n                                \n                                                                  \n           \n                   \n                             \n                             \n           \n              \n   \n\nThe goal of this project is to help you learn about how to use state management and component-based architecture using JavaScript frameworks. You will build a flash card app with pre-defined JavaScript questions and answers that users can flip through to test their knowledge.\n\n![Flash Cards](https://assets.roadmap.sh/guest/flash-cards-crzw6.png)\n\n## Requirements\n\nYou are required to develop a flash cards app with the following features:\n\n- Pre-defined flashcards with questions and answers\n- Progress bar to show the user's progress\n- Ability to view flashcards one at a time and flip to reveal the answer\n- Simple navigation to cycle through the flashcards\n\n<hr />\n\nThis project will help you understand how to manage state and create reusable components. You can use any framework of your choice, such as React, Angular, or Vue.js, to build this project.\n";
				}
				async function compiledContent$G() {
					return await html$G();
				}
				function getHeadings$G() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$G = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$G;
					content.file = file$G;
					content.url = url$G;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$G())}`;
				});

const __vite_glob_0_26 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$G,
	compiledContent: compiledContent$G,
	default: Content$G,
	file: file$G,
	frontmatter: frontmatter$G,
	getHeadings: getHeadings$G,
	rawContent: rawContent$G,
	url: url$G
}, Symbol.toStringTag, { value: 'Module' }));

const html$F = () => "<p>The goal of this project is to help you learn the notion of continuous integration and continuous deployment. You will write a simple GitHub Actions workflow to deploy a static website to GitHub Pages.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You are required to write a GitHub action that deploys any changes made to the <code>index.html</code> file to GitHub Pages. It should only deploy the file when the <code>index.html</code> file is changed.</p>\n<p>Here are the steps to get you started:</p>\n<ul>\n<li>Create a GitHub repository for the project called <code>gh-deployment-workflow</code> for example.</li>\n<li>Repository should contain a simple <code>index.html</code> file saying “Hello, GitHub Actions!”</li>\n<li>It should also have a <code>README.md</code> file explaining the project.</li>\n<li>There should also be a <code>deploy.yml</code> file in the <code>.github/workflows</code> directory which contains the GitHub Actions workflow to deploy the website to GitHub Pages.</li>\n<li>Every push to the <code>main</code> branch that changes the <code>index.html</code> file should trigger the workflow to run and deploy the website to <a href=\"https://docs.github.com/en/pages\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">GitHub Pages</a>.</li>\n<li>Website and any changes you make should be accessible at the GitHub pages URL for the repository e.g. <code>https://&#x3C;username>.github.io/gh-deployment-workflow/</code>.</li>\n</ul>\n<p>Stretch goal: You can also make this project more practical e.g. use some sort of a static site generator such as <a href=\"https://gohugo.io/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Hugo</a>, <a href=\"https://jekyllrb.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Jekyll</a>, <a href=\"https://astro.build/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Astro</a> or similar generator to create a more complex website e.g. your own personal portfolio.</p>\n<hr>\n<p>After finishing this project, you will have a good understanding of the following concepts:</p>\n<ul>\n<li>GitHub Actions</li>\n<li>GitHub Pages</li>\n<li>Continuous Integration and Continuous Deployment</li>\n<li>Writing GitHub Actions workflows</li>\n</ul>\n<p>Continue solving more projects for advanced CI/CD concepts.</p>";

				const frontmatter$F = {"title":"GitHub Pages Deployment","description":"Write a simple GitHub Actions workflow to deploy a static website to GitHub Pages.","isNew":true,"sort":400,"difficulty":"beginner","nature":"CI / CD","skills":["github actions","ci/cd"],"seo":{"title":"GitHub Actions Deployment Workflow","description":"Write a simple GitHub Actions workflow to deploy a static website to GitHub Pages.","keywords":["GitHub Actions Deployment Workflow","devops project idea"]},"roadmapIds":["devops"]};
				const file$F = "/workspace/src/data/projects/github-actions-deployment-workflow.md";
				const url$F = undefined;
				function rawContent$F() {
					return "   \n                                \n                                                                                                 \n           \n         \n                      \n                 \n       \n                    \n           \n    \n                                             \n                                                                                                   \n           \n                                          \n                           \n           \n            \n   \n\nThe goal of this project is to help you learn the notion of continuous integration and continuous deployment. You will write a simple GitHub Actions workflow to deploy a static website to GitHub Pages.\n\n## Requirements\n\nYou are required to write a GitHub action that deploys any changes made to the `index.html` file to GitHub Pages. It should only deploy the file when the `index.html` file is changed.\n\nHere are the steps to get you started:\n\n- Create a GitHub repository for the project called `gh-deployment-workflow` for example.\n- Repository should contain a simple `index.html` file saying \"Hello, GitHub Actions!\" \n- It should also have a `README.md` file explaining the project. \n- There should also be a `deploy.yml` file in the `.github/workflows` directory which contains the GitHub Actions workflow to deploy the website to GitHub Pages. \n- Every push to the `main` branch that changes the `index.html` file should trigger the workflow to run and deploy the website to [GitHub Pages](https://docs.github.com/en/pages).\n- Website and any changes you make should be accessible at the GitHub pages URL for the repository e.g. `https://<username>.github.io/gh-deployment-workflow/`.\n\nStretch goal: You can also make this project more practical e.g. use some sort of a static site generator such as [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/), [Astro](https://astro.build/) or similar generator to create a more complex website e.g. your own personal portfolio.\n\n<hr />\n\nAfter finishing this project, you will have a good understanding of the following concepts:\n\n- GitHub Actions\n- GitHub Pages\n- Continuous Integration and Continuous Deployment\n- Writing GitHub Actions workflows\n\nContinue solving more projects for advanced CI/CD concepts.";
				}
				async function compiledContent$F() {
					return await html$F();
				}
				function getHeadings$F() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$F = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$F;
					content.file = file$F;
					content.url = url$F;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$F())}`;
				});

const __vite_glob_0_27 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$F,
	compiledContent: compiledContent$F,
	default: Content$F,
	file: file$F,
	frontmatter: frontmatter$F,
	getHeadings: getHeadings$F,
	rawContent: rawContent$F,
	url: url$F
}, Symbol.toStringTag, { value: 'Module' }));

const html$E = () => "<p>This project is designed to introduce you to working with external APIs, handling asynchronous requests, and managing different UI states with JavaScript.</p>\n<p>You will create a GitHub repository finder that allows users to select a programming language from a dropdown menu. The app will then use the GitHub Repository Search API to fetch and display a random repository that matches the selected language. The displayed information should include the repository name, description, number of stars, forks, and open issues. Users can fetch another random repository with a button click.</p>\n<p><a href=\"https://assets.roadmap.sh/guest/github-repo-finder-n2qz4.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/github-repo-finder-n2qz4.png\" alt=\"GitHub Random Repository\"></a></p>\n<p>The application should handle loading, empty, and error states effectively. After successfully fetching a repository, a “Refresh” button should appear to allow users to get another random repository.</p>\n<p>Here are the links to the resources you will need for this project:</p>\n<ul>\n<li><a href=\"https://docs.github.com/en/rest/reference/search#search-repositories\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">GitHub Repository Search API</a></li>\n<li><a href=\"https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Programming Language Data</a></li>\n</ul>\n<p>This project will help you practice API integration, managing asynchronous data, and enhancing user experience with responsive UI states.</p>";

				const frontmatter$E = {"title":"GitHub Random Repository","description":"Create a GitHub random repository finder using GitHub API.","isNew":false,"sort":25,"difficulty":"intermediate","nature":"API Integration","skills":["HTML","CSS","JavaScript","API Integration","DOM Manipulation"],"seo":{"title":"Build a GitHub Repository Finder with JavaScript and GitHub API","description":"Learn how to create a dynamic application that fetches random GitHub repositories based on a chosen language and displays key information like stars, forks, and issues.","keywords":["github api","repository finder","javascript project"]},"roadmapIds":["frontend"]};
				const file$E = "/workspace/src/data/projects/github-random-repo.md";
				const url$E = undefined;
				function rawContent$E() {
					return "   \n                                   \n                                                                           \n              \n          \n                            \n                           \n         \n            \n           \n                  \n                       \n                        \n      \n                                                                            \n                                                                                                                                                                                           \n             \n                  \n                         \n                            \n             \n                \n\n   \n\nThis project is designed to introduce you to working with external APIs, handling asynchronous requests, and managing different UI states with JavaScript.\n\nYou will create a GitHub repository finder that allows users to select a programming language from a dropdown menu. The app will then use the GitHub Repository Search API to fetch and display a random repository that matches the selected language. The displayed information should include the repository name, description, number of stars, forks, and open issues. Users can fetch another random repository with a button click.\n\n[![GitHub Random Repository](https://assets.roadmap.sh/guest/github-repo-finder-n2qz4.png)](https://assets.roadmap.sh/guest/github-repo-finder-n2qz4.png)\n\nThe application should handle loading, empty, and error states effectively. After successfully fetching a repository, a \"Refresh\" button should appear to allow users to get another random repository.\n\nHere are the links to the resources you will need for this project:\n\n- [GitHub Repository Search API](https://docs.github.com/en/rest/reference/search#search-repositories)\n- [Programming Language Data](https://raw.githubusercontent.com/kamranahmedse/githunt/master/src/components/filters/language-filter/languages.json)\n\nThis project will help you practice API integration, managing asynchronous data, and enhancing user experience with responsive UI states.";
				}
				async function compiledContent$E() {
					return await html$E();
				}
				function getHeadings$E() {
					return [];
				}

				const Content$E = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$E;
					content.file = file$E;
					content.url = url$E;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$E())}`;
				});

const __vite_glob_0_28 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$E,
	compiledContent: compiledContent$E,
	default: Content$E,
	file: file$E,
	frontmatter: frontmatter$E,
	getHeadings: getHeadings$E,
	rawContent: rawContent$E,
	url: url$E
}, Symbol.toStringTag, { value: 'Module' }));

const html$D = () => "<p>In this project, you will build a simple command line interface (CLI) to fetch the recent activity of a GitHub user and display it in the terminal. This project will help you practice your programming skills, including working with APIs, handling JSON data, and building a simple CLI application.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>The application should run from the command line, accept the GitHub username as an argument, fetch the user’s recent activity using the GitHub API, and display it in the terminal. The user should be able to:</p>\n<ul>\n<li>Provide the GitHub username as an argument when running the CLI.\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#50FA7B\">github-activity</span><span style=\"color:#FF79C6\"> &#x3C;</span><span style=\"color:#F1FA8C\">usernam</span><span style=\"color:#F8F8F2\">e</span><span style=\"color:#FF79C6\">></span></span></code></pre>\n</li>\n<li>Fetch the recent activity of the specified GitHub user using the GitHub API. You can use the following endpoint to fetch the user’s activity:\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span># https://api.github.com/users/&#x3C;username>/events</span></span>\n<span class=\"line\"><span># Example: https://api.github.com/users/kamranahmedse/events</span></span></code></pre>\n</li>\n<li>Display the fetched activity in the terminal.\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>Output:</span></span>\n<span class=\"line\"><span>- Pushed 3 commits to kamranahmedse/developer-roadmap</span></span>\n<span class=\"line\"><span>- Opened a new issue in kamranahmedse/developer-roadmap</span></span>\n<span class=\"line\"><span>- Starred kamranahmedse/developer-roadmap</span></span>\n<span class=\"line\"><span>- ...</span></span></code></pre>\nYou can <a href=\"https://docs.github.com/en/rest/activity/events?apiVersion=2022-11-28\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">learn more about the GitHub API here</a>.</li>\n<li>Handle errors gracefully, such as invalid usernames or API failures.</li>\n<li>Use a programming language of your choice to build this project.</li>\n<li>Do not use any external libraries or frameworks to fetch the GitHub activity.</li>\n</ul>\n<hr>\n<p>If you are looking to build a more advanced version of this project, you can consider adding features like filtering the activity by event type, displaying the activity in a more structured format, or caching the fetched data to improve performance. You can also explore other endpoints of the GitHub API to fetch additional information about the user or their repositories.</p>";

				const frontmatter$D = {"title":"GitHub User Activity","description":"Use GitHub API to fetch user activity and display it in the terminal.","isNew":false,"sort":200,"difficulty":"beginner","nature":"CLI","skills":["Programming Language","CLI","API Consumption"],"seo":{"title":"GitHub User Activity CLI","description":"Build a command line interface (CLI) to fetch and display GitHub user activity.","keywords":["github user activity cli","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot","cpp"]};
				const file$D = "/workspace/src/data/projects/github-user-activity.md";
				const url$D = undefined;
				function rawContent$D() {
					return "   \n                             \n                                                                                    \n            \n         \n                      \n             \n       \n                          \n         \n                     \n    \n                                   \n                                                                                                \n           \n                                \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n         \n   \n\nIn this project, you will build a simple command line interface (CLI) to fetch the recent activity of a GitHub user and display it in the terminal. This project will help you practice your programming skills, including working with APIs, handling JSON data, and building a simple CLI application.\n\n## Requirements\n\nThe application should run from the command line, accept the GitHub username as an argument, fetch the user's recent activity using the GitHub API, and display it in the terminal. The user should be able to:\n\n- Provide the GitHub username as an argument when running the CLI.\n  ```bash\n  github-activity <username>\n  ```\n- Fetch the recent activity of the specified GitHub user using the GitHub API. You can use the following endpoint to fetch the user's activity:\n  ```\n  # https://api.github.com/users/<username>/events\n  # Example: https://api.github.com/users/kamranahmedse/events\n  ```\n- Display the fetched activity in the terminal.\n  ```\n  Output:\n  - Pushed 3 commits to kamranahmedse/developer-roadmap\n  - Opened a new issue in kamranahmedse/developer-roadmap\n  - Starred kamranahmedse/developer-roadmap\n  - ...\n  ```\n  You can [learn more about the GitHub API here](https://docs.github.com/en/rest/activity/events?apiVersion=2022-11-28).\n- Handle errors gracefully, such as invalid usernames or API failures.\n- Use a programming language of your choice to build this project.\n- Do not use any external libraries or frameworks to fetch the GitHub activity.\n\n<hr />\n\nIf you are looking to build a more advanced version of this project, you can consider adding features like filtering the activity by event type, displaying the activity in a more structured format, or caching the fetched data to improve performance. You can also explore other endpoints of the GitHub API to fetch additional information about the user or their repositories.\n";
				}
				async function compiledContent$D() {
					return await html$D();
				}
				function getHeadings$D() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$D = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$D;
					content.file = file$D;
					content.url = url$D;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$D())}`;
				});

const __vite_glob_0_29 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$D,
	compiledContent: compiledContent$D,
	default: Content$D,
	file: file$D,
	frontmatter: frontmatter$D,
	getHeadings: getHeadings$D,
	rawContent: rawContent$D,
	url: url$D
}, Symbol.toStringTag, { value: 'Module' }));

const html$C = () => "<p>The goal of this project is to introduce you to the basics of IaC using Terraform. You will create a DigitalOcean Droplet and configure it using Terraform.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>If you have been doing the previous projects, you should already have a Linux server running. If not, setup a Linux server on <a href=\"https://m.do.co/c/b29aa8845df8\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">DigitalOcean</a>, AWS or another cloud provider.</p>\n<p>You are required to write a Terraform script that will create a Droplet on DigitalOcean. The Droplet should have a public IP address, and SSH access. You should also be able to SSH into the Droplet using the private key.</p>\n<p>You can use <a href=\"https://www.digitalocean.com/community/tutorials/how-to-use-terraform-with-digitalocean\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">this guide from Digital Ocean</a> and <a href=\"https://registry.terraform.io/providers/digitalocean/digitalocean/latest/docs\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Digital Ocean provider documentation</a> to get started.</p>\n<h2 id=\"stretch-goal\">Stretch goal</h2>\n<p>Write Ansible playbook that will configure the server. You can use the same playbook from <a href=\"/projects/configuration-management\">the previous project</a>.</p>\n<hr>\n<p>Once you are done with the project, you should have a good understanding of setting up a basic infrastructure on DigitalOcean using Terraform and configuring it using Ansible.</p>";

				const frontmatter$C = {"title":"IaC on DigitalOcean","description":"Write Terraform code to create a Droplet on DigitalOcean","isNew":false,"sort":1200,"difficulty":"intermediate","nature":"Terraform","skills":["terraform","linux","devops"],"seo":{"title":"IaC on DigitalOcean","description":"Write Terraform code to create a Droplet on DigitalOcean","keywords":["IaC","Terraform","DigitalOcean"]},"roadmapIds":["devops"]};
				const file$C = "/workspace/src/data/projects/iac-digitalocean.md";
				const url$C = undefined;
				function rawContent$C() {
					return "   \n                            \n                                                                       \n            \n          \n                          \n                   \n       \n               \n           \n            \n    \n                              \n                                                                         \n           \n           \n                 \n                    \n           \n            \n   \n\nThe goal of this project is to introduce you to the basics of IaC using Terraform. You will create a DigitalOcean Droplet and configure it using Terraform.\n\n## Requirements\n\nIf you have been doing the previous projects, you should already have a Linux server running. If not, setup a Linux server on [DigitalOcean](https://m.do.co/c/b29aa8845df8), AWS or another cloud provider.\n\nYou are required to write a Terraform script that will create a Droplet on DigitalOcean. The Droplet should have a public IP address, and SSH access. You should also be able to SSH into the Droplet using the private key.\n\nYou can use [this guide from Digital Ocean](https://www.digitalocean.com/community/tutorials/how-to-use-terraform-with-digitalocean) and [Digital Ocean provider documentation](https://registry.terraform.io/providers/digitalocean/digitalocean/latest/docs) to get started.\n\n## Stretch goal\n\nWrite Ansible playbook that will configure the server. You can use the same playbook from [the previous project](/projects/configuration-management).\n\n<hr />\n\nOnce you are done with the project, you should have a good understanding of setting up a basic infrastructure on DigitalOcean using Terraform and configuring it using Ansible.";
				}
				async function compiledContent$C() {
					return await html$C();
				}
				function getHeadings$C() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":2,"slug":"stretch-goal","text":"Stretch goal"}];
				}

				const Content$C = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$C;
					content.file = file$C;
					content.url = url$C;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$C())}`;
				});

const __vite_glob_0_30 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$C,
	compiledContent: compiledContent$C,
	default: Content$C,
	file: file$C,
	frontmatter: frontmatter$C,
	getHeadings: getHeadings$C,
	rawContent: rawContent$C,
	url: url$C
}, Symbol.toStringTag, { value: 'Module' }));

const html$B = () => "<p>In this project, you are required to create a grid layout using HTML and CSS. You will be provided with six images that need to be arranged in a grid pattern based on the provided mockup. The primary focus of this project is to help you learn and practice the CSS Grid layout technique, which is essential for creating responsive and flexible web layouts.</p>\n<p>The goal of this project is to give you hands-on experience with CSS Grid, allowing you to create complex layouts with ease. Below is a rough mockup showing the grid layout you need to create along with the six images that you should use.</p>\n<p><a href=\"https://assets.roadmap.sh/guest/image-grid.jpg\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/image-grid.jpg\" alt=\"Grid Layout Mockup\"></a></p>\n<p>You can use the same images provided in the mockup or replace them with your own images. The grid layout should be responsive, meaning it should adapt to different screen sizes and maintain a visually appealing design.</p>\n<ul>\n<li><a href=\"https://unsplash.com/photos/a-foggy-beach-with-a-large-rock-formation-in-the-foreground-TTExgxV06KA\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">A foggy beach with a large rock formation in the foreground</a></li>\n<li><a href=\"https://unsplash.com/photos/a-living-room-with-a-white-couch-and-a-round-window-Wuu6H3mI7UA\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">A living room with a white couch and a round window</a></li>\n<li><a href=\"https://unsplash.com/photos/a-table-topped-with-plates-and-bowls-of-food-zx8_8jwZ5m8\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">A table topped with plates and bowls of food</a></li>\n<li><a href=\"https://unsplash.com/photos/a-building-with-a-red-door-and-a-tree-in-front-of-it-uTd-kylh7bE\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">A building with a red door and a tree in front of it</a></li>\n<li><a href=\"https://unsplash.com/photos/a-row-of-white-apartment-buildings-next-to-a-street-f1PzRPbqt0M\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">A row of white apartment buildings next to a street</a></li>\n<li><a href=\"https://unsplash.com/photos/a-view-of-a-beach-from-the-top-of-a-hill-SAyIShcE5rs\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">A view of a beach from the top of a hill</a></li>\n</ul>\n<p>Key learning objectives of this project include:</p>\n<ul>\n<li>\n<p><strong>Grid Structure</strong>: Understand the fundamentals of CSS Grid, including defining grid containers, rows, columns, and how to place items within the grid.</p>\n</li>\n<li>\n<p><strong>Responsive Design</strong>: Learn how to make the grid layout responsive so that it adapts to different screen sizes. This might involve changing the number of columns or the layout of the images based on the viewport width.</p>\n</li>\n<li>\n<p><strong>Alignment and Spacing</strong>: Explore how to align grid items and manage spacing between them to achieve a clean and visually appealing layout.</p>\n</li>\n</ul>\n<hr>\n<p>By completing this project, you will gain confidence in using CSS Grid to create flexible and responsive layouts. You can further apply these skills to more complex projects as you continue learning web design and development.</p>";

				const frontmatter$B = {"title":"Image Grid Layout","description":"Create a grid layout of images using HTML and CSS.","isNew":false,"sort":8,"difficulty":"beginner","nature":"CSS","skills":["HTML","CSS","Grid Layout","Responsive Design"],"seo":{"title":"Create an Image Grid Layout for a Website Using HTML and CSS","description":"Learn how to create a responsive grid layout of images using HTML and CSS.","keywords":["css grid","image layout","responsive design","html and css"]},"roadmapIds":["frontend"]};
				const file$B = "/workspace/src/data/projects/image-grid.md";
				const url$B = undefined;
				function rawContent$B() {
					return "   \n                            \n                                                                   \n              \n         \n                        \n             \n         \n            \n           \n                 \n                       \n      \n                                                                         \n                                                                                             \n             \n                \n                    \n                           \n                      \n             \n                \n\n   \n\nIn this project, you are required to create a grid layout using HTML and CSS. You will be provided with six images that need to be arranged in a grid pattern based on the provided mockup. The primary focus of this project is to help you learn and practice the CSS Grid layout technique, which is essential for creating responsive and flexible web layouts.\n\nThe goal of this project is to give you hands-on experience with CSS Grid, allowing you to create complex layouts with ease. Below is a rough mockup showing the grid layout you need to create along with the six images that you should use.\n\n[![Grid Layout Mockup](https://assets.roadmap.sh/guest/image-grid.jpg)](https://assets.roadmap.sh/guest/image-grid.jpg)\n\nYou can use the same images provided in the mockup or replace them with your own images. The grid layout should be responsive, meaning it should adapt to different screen sizes and maintain a visually appealing design.\n\n- [A foggy beach with a large rock formation in the foreground](https://unsplash.com/photos/a-foggy-beach-with-a-large-rock-formation-in-the-foreground-TTExgxV06KA)\n- [A living room with a white couch and a round window](https://unsplash.com/photos/a-living-room-with-a-white-couch-and-a-round-window-Wuu6H3mI7UA)\n- [A table topped with plates and bowls of food](https://unsplash.com/photos/a-table-topped-with-plates-and-bowls-of-food-zx8_8jwZ5m8)\n- [A building with a red door and a tree in front of it](https://unsplash.com/photos/a-building-with-a-red-door-and-a-tree-in-front-of-it-uTd-kylh7bE)\n- [A row of white apartment buildings next to a street](https://unsplash.com/photos/a-row-of-white-apartment-buildings-next-to-a-street-f1PzRPbqt0M)\n- [A view of a beach from the top of a hill](https://unsplash.com/photos/a-view-of-a-beach-from-the-top-of-a-hill-SAyIShcE5rs)\n\nKey learning objectives of this project include:\n\n- **Grid Structure**: Understand the fundamentals of CSS Grid, including defining grid containers, rows, columns, and how to place items within the grid.\n\n- **Responsive Design**: Learn how to make the grid layout responsive so that it adapts to different screen sizes. This might involve changing the number of columns or the layout of the images based on the viewport width.\n\n- **Alignment and Spacing**: Explore how to align grid items and manage spacing between them to achieve a clean and visually appealing layout.\n\n---\n\nBy completing this project, you will gain confidence in using CSS Grid to create flexible and responsive layouts. You can further apply these skills to more complex projects as you continue learning web design and development.";
				}
				async function compiledContent$B() {
					return await html$B();
				}
				function getHeadings$B() {
					return [];
				}

				const Content$B = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$B;
					content.file = file$B;
					content.url = url$B;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$B())}`;
				});

const __vite_glob_0_31 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$B,
	compiledContent: compiledContent$B,
	default: Content$B,
	file: file$B,
	frontmatter: frontmatter$B,
	getHeadings: getHeadings$B,
	rawContent: rawContent$B,
	url: url$B
}, Symbol.toStringTag, { value: 'Module' }));

const html$A = () => "<p>This project involves creating a backend system for an image processing service similar to Cloudinary. The service will allow users to upload images, perform various transformations, and retrieve images in different formats. The system will feature user authentication, image upload, transformation operations, and efficient retrieval mechanisms.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>Here is the list of features that you should implement in this project:</p>\n<h3 id=\"user-authentication\">User Authentication</h3>\n<ul>\n<li><strong>Sign-Up</strong>: Allow users to create an account.</li>\n<li><strong>Log-In</strong>: Allow users to log into their account.</li>\n<li><strong>JWT Authentication</strong>: Secure endpoints using JWTs for authenticated access.</li>\n</ul>\n<h3 id=\"image-management\">Image Management</h3>\n<ul>\n<li><strong>Upload Image</strong>: Allow users to upload images.</li>\n<li><strong>Transform Image</strong>: Allow users to perform various transformations (resize, crop, rotate, watermark etc.).</li>\n<li><strong>Retrieve Image</strong>: Allow users to retrieve a saved image in different formats.</li>\n<li><strong>List Images</strong>: List all uploaded images by the user with metadata.</li>\n</ul>\n<h3 id=\"image-transformation\">Image Transformation</h3>\n<p>Here is the list of transformations that you can implement:</p>\n<ul>\n<li>Resize</li>\n<li>Crop</li>\n<li>Rotate</li>\n<li>Watermark</li>\n<li>Flip</li>\n<li>Mirror</li>\n<li>Compress</li>\n<li>Change format (JPEG, PNG, etc.)</li>\n<li>Apply filters (grayscale, sepia, etc.)</li>\n</ul>\n<p>Feel free to add more transformations based on your interest and expertise.</p>\n<h2 id=\"how-to-implement\">How to Implement</h2>\n<p>Here is the list of endpoints that you can implement for this project:</p>\n<h3 id=\"authentication-endpoints\">Authentication Endpoints</h3>\n<p>Register a new user:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>POST /register</span></span>\n<span class=\"line\"><span>{</span></span>\n<span class=\"line\"><span>  \"username\": \"user1\",</span></span>\n<span class=\"line\"><span>  \"password\": \"password123\"</span></span>\n<span class=\"line\"><span>}</span></span></code></pre>\n<p>Response should be the user object with a JWT.</p>\n<p>Log in an existing user:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>POST /login</span></span>\n<span class=\"line\"><span>{</span></span>\n<span class=\"line\"><span>  \"username\": \"user1\",</span></span>\n<span class=\"line\"><span>  \"password\": \"password123\"</span></span>\n<span class=\"line\"><span>}</span></span></code></pre>\n<p>Response should be the user object with a JWT.</p>\n<h3 id=\"image-management-endpoints\">Image Management Endpoints</h3>\n<h4 id=\"upload-an-image\">Upload an image:</h4>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>POST /images</span></span>\n<span class=\"line\"><span>Request Body: Multipart form-data with image file</span></span>\n<span class=\"line\"><span>Response: Uploaded image details (URL, metadata).</span></span></code></pre>\n<h4 id=\"apply-transformations-to-an-image\">Apply transformations to an image:</h4>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>POST /images/:id/transform</span></span>\n<span class=\"line\"><span>{</span></span>\n<span class=\"line\"><span>  \"transformations\": {</span></span>\n<span class=\"line\"><span>    \"resize\": {</span></span>\n<span class=\"line\"><span>      \"width\": \"number\",</span></span>\n<span class=\"line\"><span>      \"height\": \"number\"</span></span>\n<span class=\"line\"><span>    },</span></span>\n<span class=\"line\"><span>    \"crop\": {</span></span>\n<span class=\"line\"><span>      \"width\": \"number\",</span></span>\n<span class=\"line\"><span>      \"height\": \"number\",</span></span>\n<span class=\"line\"><span>      \"x\": \"number\",</span></span>\n<span class=\"line\"><span>      \"y\": \"number\"</span></span>\n<span class=\"line\"><span>    },</span></span>\n<span class=\"line\"><span>    \"rotate\": \"number\",</span></span>\n<span class=\"line\"><span>    \"format\": \"string\",</span></span>\n<span class=\"line\"><span>    \"filters\": {</span></span>\n<span class=\"line\"><span>      \"grayscale\": \"boolean\",</span></span>\n<span class=\"line\"><span>      \"sepia\": \"boolean\"</span></span>\n<span class=\"line\"><span>    }</span></span>\n<span class=\"line\"><span>  }</span></span>\n<span class=\"line\"><span>}</span></span></code></pre>\n<p>User can apply one or more transformations to the image. Response should be the transformed image details (URL, metadata).</p>\n<h4 id=\"retrieve-an-image\">Retrieve an image:</h4>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>GET /images/:id</span></span></code></pre>\n<p>Response should be the image actual image detail.</p>\n<h4 id=\"get-a-paginated-list-of-images\">Get a paginated list of images:</h4>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>GET /images?page=1&#x26;limit=10</span></span></code></pre>\n<h2 id=\"tips\">Tips</h2>\n<ul>\n<li>Use a cloud storage service like AWS S3, Cloudflare R2, or Google Cloud Storage to store images.</li>\n<li>Use some image processing libraries to apply transformations.</li>\n<li>Put a rate limit on image transformations to prevent abuse.</li>\n<li>Consider caching transformed images to improve performance.</li>\n<li>Implement error handling and validation for all endpoints.</li>\n<li>Optionally use a message queue like RabbitMQ or Kafka to process image transformations asynchronously.</li>\n</ul>\n<hr>\n<p>This project will help you understand how to build a scalable image processing service with user authentication and image transformation capabilities. You can use this project to showcase your backend development skills and learn about image processing techniques.</p>";

				const frontmatter$A = {"title":"Image Processing Service","description":"Build a service that allows users to upload and process images.","isNew":false,"sort":1800,"difficulty":"intermediate","nature":"API","skills":["Programming Language","Image Processing","Database","Queues"],"seo":{"title":"Image Processing Service Project Idea","description":"Build a service that allows users to upload and process images.","keywords":["image processing service","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$A = "/workspace/src/data/projects/image-processing-service.md";
				const url$A = undefined;
				function rawContent$A() {
					return "   \n                                 \n                                                                              \n            \n          \n                          \n             \n       \n                          \n                      \n              \n            \n    \n                                                \n                                                                                \n           \n                                \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nThis project involves creating a backend system for an image processing service similar to Cloudinary. The service will allow users to upload images, perform various transformations, and retrieve images in different formats. The system will feature user authentication, image upload, transformation operations, and efficient retrieval mechanisms.\n\n## Requirements\n\nHere is the list of features that you should implement in this project:\n\n### User Authentication\n\n- **Sign-Up**: Allow users to create an account.\n- **Log-In**: Allow users to log into their account.\n- **JWT Authentication**: Secure endpoints using JWTs for authenticated access.\n\n### Image Management\n\n- **Upload Image**: Allow users to upload images.\n- **Transform Image**: Allow users to perform various transformations (resize, crop, rotate, watermark etc.).\n- **Retrieve Image**: Allow users to retrieve a saved image in different formats.\n- **List Images**: List all uploaded images by the user with metadata.\n\n### Image Transformation\n\nHere is the list of transformations that you can implement:\n\n- Resize\n- Crop\n- Rotate\n- Watermark\n- Flip\n- Mirror\n- Compress\n- Change format (JPEG, PNG, etc.)\n- Apply filters (grayscale, sepia, etc.)\n\nFeel free to add more transformations based on your interest and expertise.\n\n## How to Implement\n\nHere is the list of endpoints that you can implement for this project:\n\n### Authentication Endpoints\n\nRegister a new user:\n\n```\nPOST /register\n{\n  \"username\": \"user1\",\n  \"password\": \"password123\"\n}\n```\nResponse should be the user object with a JWT.\n\nLog in an existing user:\n\n```\nPOST /login\n{\n  \"username\": \"user1\",\n  \"password\": \"password123\"\n}\n```\nResponse should be the user object with a JWT.\n\n### Image Management Endpoints\n\n#### Upload an image:\n\n```\nPOST /images\nRequest Body: Multipart form-data with image file\nResponse: Uploaded image details (URL, metadata).\n```\n\n#### Apply transformations to an image:\n\n```\nPOST /images/:id/transform\n{\n  \"transformations\": {\n    \"resize\": {\n      \"width\": \"number\",\n      \"height\": \"number\"\n    },\n    \"crop\": {\n      \"width\": \"number\",\n      \"height\": \"number\",\n      \"x\": \"number\",\n      \"y\": \"number\"\n    },\n    \"rotate\": \"number\",\n    \"format\": \"string\",\n    \"filters\": {\n      \"grayscale\": \"boolean\",\n      \"sepia\": \"boolean\"\n    }\n  }\n}\n```\nUser can apply one or more transformations to the image. Response should be the transformed image details (URL, metadata).\n\n#### Retrieve an image:\n\n```\nGET /images/:id\n```\nResponse should be the image actual image detail.\n\n#### Get a paginated list of images:\n\n```\nGET /images?page=1&limit=10\n```\n\n## Tips\n\n- Use a cloud storage service like AWS S3, Cloudflare R2, or Google Cloud Storage to store images.\n- Use some image processing libraries to apply transformations.\n- Put a rate limit on image transformations to prevent abuse.\n- Consider caching transformed images to improve performance.\n- Implement error handling and validation for all endpoints.\n- Optionally use a message queue like RabbitMQ or Kafka to process image transformations asynchronously.\n\n<hr />\n\nThis project will help you understand how to build a scalable image processing service with user authentication and image transformation capabilities. You can use this project to showcase your backend development skills and learn about image processing techniques.\n";
				}
				async function compiledContent$A() {
					return await html$A();
				}
				function getHeadings$A() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"user-authentication","text":"User Authentication"},{"depth":3,"slug":"image-management","text":"Image Management"},{"depth":3,"slug":"image-transformation","text":"Image Transformation"},{"depth":2,"slug":"how-to-implement","text":"How to Implement"},{"depth":3,"slug":"authentication-endpoints","text":"Authentication Endpoints"},{"depth":3,"slug":"image-management-endpoints","text":"Image Management Endpoints"},{"depth":4,"slug":"upload-an-image","text":"Upload an image:"},{"depth":4,"slug":"apply-transformations-to-an-image","text":"Apply transformations to an image:"},{"depth":4,"slug":"retrieve-an-image","text":"Retrieve an image:"},{"depth":4,"slug":"get-a-paginated-list-of-images","text":"Get a paginated list of images:"},{"depth":2,"slug":"tips","text":"Tips"}];
				}

				const Content$A = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$A;
					content.file = file$A;
					content.url = url$A;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$A())}`;
				});

const __vite_glob_0_32 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$A,
	compiledContent: compiledContent$A,
	default: Content$A,
	file: file$A,
	frontmatter: frontmatter$A,
	getHeadings: getHeadings$A,
	rawContent: rawContent$A,
	url: url$A
}, Symbol.toStringTag, { value: 'Module' }));

const html$z = () => "<p>In this project, you will build a tool to archive logs on a set schedule by compressing them and storing them in a new directory, this is especially useful for removing old logs and keeping the system clean while maintaining the logs in a compressed format for future reference. This project will help you practice your programming skills, including working with files and directories, and building a simple cli tool.</p>\n<p>The most common location for logs on a unix based system is <code>/var/log</code>.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>The tool should run from the command line, accept the log directory as an argument, compress the logs, and store them in a new directory. The user should be able to:</p>\n<ul>\n<li>Provide the log directory as an argument when running the tool.\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#50FA7B\">log-archive</span><span style=\"color:#FF79C6\"> &#x3C;</span><span style=\"color:#F1FA8C\">log-director</span><span style=\"color:#F8F8F2\">y</span><span style=\"color:#FF79C6\">></span></span></code></pre>\n</li>\n<li>The tool should compress the logs in a tar.gz file and store them in a new directory.</li>\n<li>The tool should log the date and time of the archive to a file.\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#50FA7B\">logs_archive_20240816_100648.tar.gz</span></span></code></pre>\n</li>\n</ul>\n<p>You can learn more about the <code>tar</code> command <a href=\"https://www.gnu.org/software/tar/manual/tar.html\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">here</a>.</p>\n<hr>\n<p>If you are looking to build a more advanced version of this project, you can consider adding functionality to the tool like emailing the user updates on the archive, or sending the archive to a remote server or cloud storage.</p>";

				const frontmatter$z = {"title":"Log Archive Tool","description":"Build a tool to archive logs from the CLI with the date and time.","isNew":false,"sort":200,"difficulty":"beginner","nature":"CLI","skills":["linux","bash","shell scripting"],"seo":{"title":"Log Archive Tool","description":"Build a tool to archive logs from the CLI with the date and time.","keywords":["log archive tool","devops project idea"]},"roadmapIds":["devops","linux"]};
				const file$z = "/workspace/src/data/projects/log-archive-tool.md";
				const url$z = undefined;
				function rawContent$z() {
					return "   \n                         \n                                                                                \n            \n         \n                      \n             \n       \n           \n          \n                     \n    \n                           \n                                                                                  \n           \n                        \n                           \n           \n            \n           \n   \n\nIn this project, you will build a tool to archive logs on a set schedule by compressing them and storing them in a new directory, this is especially useful for removing old logs and keeping the system clean while maintaining the logs in a compressed format for future reference. This project will help you practice your programming skills, including working with files and directories, and building a simple cli tool.\n\nThe most common location for logs on a unix based system is `/var/log`.\n\n## Requirements\n\nThe tool should run from the command line, accept the log directory as an argument, compress the logs, and store them in a new directory. The user should be able to:\n\n- Provide the log directory as an argument when running the tool.\n  ```bash\n  log-archive <log-directory>\n  ```\n- The tool should compress the logs in a tar.gz file and store them in a new directory.\n- The tool should log the date and time of the archive to a file.\n  ```bash\n  logs_archive_20240816_100648.tar.gz\n  ```\n\nYou can learn more about the `tar` command [here](https://www.gnu.org/software/tar/manual/tar.html).\n\n<hr />\n\nIf you are looking to build a more advanced version of this project, you can consider adding functionality to the tool like emailing the user updates on the archive, or sending the archive to a remote server or cloud storage.\n";
				}
				async function compiledContent$z() {
					return await html$z();
				}
				function getHeadings$z() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$z = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$z;
					content.file = file$z;
					content.url = url$z;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$z())}`;
				});

const __vite_glob_0_33 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$z,
	compiledContent: compiledContent$z,
	default: Content$z,
	file: file$z,
	frontmatter: frontmatter$z,
	getHeadings: getHeadings$z,
	rawContent: rawContent$z,
	url: url$z
}, Symbol.toStringTag, { value: 'Module' }));

const html$y = () => "<p>You are required to build a simple note-taking app that lets users upload markdown files, check the grammar, save the note, and render it in HTML. The goal of this project is to help you learn how to handle file uploads in a RESTful API, parse and render markdown files using libraries, and check the grammar of the notes.</p>\n<p><img src=\"https://assets.roadmap.sh/guest/markdown-note-taking-app-tymi3.png\" alt=\"Markdown Note-taking App\"></p>\n<h2 id=\"features\">Features</h2>\n<p>You have to implement the following features:</p>\n<ul>\n<li>You’ll provide an endpoint to check the grammar of the note.</li>\n<li>You’ll also provide an endpoint to save the note that can be passed in as Markdown text.</li>\n<li>Provide an endpoint to list the saved notes (i.e. uploaded markdown files).</li>\n<li>Return the HTML version of the Markdown note (rendered note) through another endpoint.</li>\n</ul>\n<h2 id=\"tips-to-get-started\">Tips to Get Started</h2>\n<p>Feel free to use any programming language and framework of your choice. Use the package manager of the chosen language to install the required libraries for parsing and rendering markdown files.</p>";

				const frontmatter$y = {"title":"Markdown Note-taking App","description":"Build a note-taking app that uses markdown for formatting.","isNew":false,"sort":1300,"difficulty":"intermediate","nature":"API","skills":["Programming Language","Text Processing","Markdown libraries","File Uploads"],"seo":{"title":"Markdown Note-taking App Project Idea","description":"Build a note-taking app that uses markdown for formatting.","keywords":["backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$y = "/workspace/src/data/projects/markdown-note-taking-app.md";
				const url$y = undefined;
				function rawContent$y() {
					return "   \n                                 \n                                                                         \n            \n          \n                          \n             \n       \n                          \n                     \n                        \n                  \n    \n                                                \n                                                                           \n           \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nYou are required to build a simple note-taking app that lets users upload markdown files, check the grammar, save the note, and render it in HTML. The goal of this project is to help you learn how to handle file uploads in a RESTful API, parse and render markdown files using libraries, and check the grammar of the notes.\n\n![Markdown Note-taking App](https://assets.roadmap.sh/guest/markdown-note-taking-app-tymi3.png)\n\n## Features\n\nYou have to implement the following features:\n\n- You’ll provide an endpoint to check the grammar of the note.\n- You’ll also provide an endpoint to save the note that can be passed in as Markdown text.\n- Provide an endpoint to list the saved notes (i.e. uploaded markdown files).\n- Return the HTML version of the Markdown note (rendered note) through another endpoint.\n\n## Tips to Get Started\n\nFeel free to use any programming language and framework of your choice. Use the package manager of the chosen language to install the required libraries for parsing and rendering markdown files.\n";
				}
				async function compiledContent$y() {
					return await html$y();
				}
				function getHeadings$y() {
					return [{"depth":2,"slug":"features","text":"Features"},{"depth":2,"slug":"tips-to-get-started","text":"Tips to Get Started"}];
				}

				const Content$y = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$y;
					content.file = file$y;
					content.url = url$y;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$y())}`;
				});

const __vite_glob_0_34 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$y,
	compiledContent: compiledContent$y,
	default: Content$y,
	file: file$y,
	frontmatter: frontmatter$y,
	getHeadings: getHeadings$y,
	rawContent: rawContent$y,
	url: url$y
}, Symbol.toStringTag, { value: 'Module' }));

const html$x = () => "<p>The goal of this project is to implement a comprehensive monitoring system for your server infrastructure using Prometheus for metric collection and Grafana for visualization. This setup will provide real-time insights into your server’s performance, resource utilization, and overall health.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>To begin this project, you’ll need:</p>\n<ul>\n<li>A running server to monitor. You can use an existing server from a previous project or setup a new server on <a href=\"https://m.do.co/c/b29aa8845df8\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Digital Ocean</a> or another cloud provider</li>\n<li>An application running on the server using some dependencies e.g., Nginx, Node.js, or others.</li>\n</ul>\n<p>Once your server is operational, you’ll proceed with setting up Prometheus and Grafana.</p>\n<h3 id=\"prometheus-setup\">Prometheus Setup</h3>\n<p>Prometheus is a powerful, open-source monitoring and alerting toolkit. Follow these steps to set it up:</p>\n<ul>\n<li>Install Prometheus on your server</li>\n<li>Configure prometheus for scarping intervals, endpoints and retention policies</li>\n<li>Install and configure exporters for System metrics (CPU, memory, disk, network). Also setup additional exporters for services like Nginx, MySQL, MongoDB, etc.</li>\n<li>Implement custom exporters or instrumentation for application-specific metrics</li>\n</ul>\n<p>Prometheus offers extensive data collection capabilities and a flexible query language (PromQL) for data analysis.</p>\n<h3 id=\"grafana-configuration\">Grafana Configuration</h3>\n<p>Grafana provides customizable dashboards for your metrics. You can setup a dashboard for system metrics and another for application metrics. Follow these steps:</p>\n<ul>\n<li>Install Grafana on your server</li>\n<li>Connect Grafana to Prometheus as a data source</li>\n<li>Create dashboards for various metrics:\n<ul>\n<li>System overview (CPU, memory, disk, network)</li>\n<li>Application-specific metrics</li>\n<li>Custom panels using PromQL queries</li>\n</ul>\n</li>\n<li>Set up user authentication and authorization for your Grafana instance</li>\n</ul>\n<h3 id=\"advanced-goals\">Advanced Goals</h3>\n<p>For those looking to expand their skills and create a more robust monitoring system, consider implementing these advanced features:</p>\n<ul>\n<li>Set up alerting rules in Prometheus and configure notification channels in Grafana (e.g., email, Slack)</li>\n<li>Implement Prometheus recording rules to optimize query performance</li>\n<li>Use Prometheus service discovery for automatic monitoring of dynamic environments</li>\n<li>Integrate log aggregation using Loki and correlate logs with metrics in Grafana</li>\n<li>Create a custom exporter for a specific application or service you’re running</li>\n</ul>\n<hr>\n<p>This project will provide you with hands-on experience in setting up a production-grade monitoring system. You’ll gain valuable skills in metric collection, data visualization, and system observability, which are crucial for maintaining reliable and performant infrastructure.</p>";

				const frontmatter$x = {"title":"Prometheus and Grafana","description":"Setup monitoring using Prometheus and visualize metrics in Grafana.","isNew":false,"sort":1800,"difficulty":"advanced","nature":"Monitoring","skills":["bash","devops","monitoring"],"seo":{"title":"Monitoring with Prometheus and Grafana","description":"Setup monitoring using Prometheus and visualize metrics in Grafana.","keywords":["Prometheus","Grafana","Monitoring","Server Metrics"]},"roadmapIds":["devops"]};
				const file$x = "/workspace/src/data/projects/monitoring.md";
				const url$x = undefined;
				function rawContent$x() {
					return "   \n                               \n                                                                                  \n            \n          \n                      \n                    \n       \n          \n            \n                \n    \n                                                 \n                                                                                    \n           \n                  \n               \n                  \n                      \n           \n            \n   \n\nThe goal of this project is to implement a comprehensive monitoring system for your server infrastructure using Prometheus for metric collection and Grafana for visualization. This setup will provide real-time insights into your server's performance, resource utilization, and overall health.\n\n## Requirements\n\nTo begin this project, you'll need:\n\n- A running server to monitor. You can use an existing server from a previous project or setup a new server on [Digital Ocean](https://m.do.co/c/b29aa8845df8) or another cloud provider\n- An application running on the server using some dependencies e.g., Nginx, Node.js, or others.\n\nOnce your server is operational, you'll proceed with setting up Prometheus and Grafana.\n\n### Prometheus Setup\n\nPrometheus is a powerful, open-source monitoring and alerting toolkit. Follow these steps to set it up:\n\n- Install Prometheus on your server\n- Configure prometheus for scarping intervals, endpoints and retention policies\n- Install and configure exporters for System metrics (CPU, memory, disk, network). Also setup additional exporters for services like Nginx, MySQL, MongoDB, etc.\n- Implement custom exporters or instrumentation for application-specific metrics\n\nPrometheus offers extensive data collection capabilities and a flexible query language (PromQL) for data analysis.\n\n### Grafana Configuration\n\nGrafana provides customizable dashboards for your metrics. You can setup a dashboard for system metrics and another for application metrics. Follow these steps:\n\n- Install Grafana on your server\n- Connect Grafana to Prometheus as a data source\n- Create dashboards for various metrics:\n  - System overview (CPU, memory, disk, network)\n  - Application-specific metrics\n  - Custom panels using PromQL queries\n- Set up user authentication and authorization for your Grafana instance\n\n### Advanced Goals\n\nFor those looking to expand their skills and create a more robust monitoring system, consider implementing these advanced features:\n\n- Set up alerting rules in Prometheus and configure notification channels in Grafana (e.g., email, Slack)\n- Implement Prometheus recording rules to optimize query performance\n- Use Prometheus service discovery for automatic monitoring of dynamic environments\n- Integrate log aggregation using Loki and correlate logs with metrics in Grafana\n- Create a custom exporter for a specific application or service you're running\n\n<hr />\n\nThis project will provide you with hands-on experience in setting up a production-grade monitoring system. You'll gain valuable skills in metric collection, data visualization, and system observability, which are crucial for maintaining reliable and performant infrastructure.\n";
				}
				async function compiledContent$x() {
					return await html$x();
				}
				function getHeadings$x() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"prometheus-setup","text":"Prometheus Setup"},{"depth":3,"slug":"grafana-configuration","text":"Grafana Configuration"},{"depth":3,"slug":"advanced-goals","text":"Advanced Goals"}];
				}

				const Content$x = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$x;
					content.file = file$x;
					content.url = url$x;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$x())}`;
				});

const __vite_glob_0_35 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$x,
	compiledContent: compiledContent$x,
	default: Content$x,
	file: file$x,
	frontmatter: frontmatter$x,
	getHeadings: getHeadings$x,
	rawContent: rawContent$x,
	url: url$x
}, Symbol.toStringTag, { value: 'Module' }));

const html$w = () => "<p>You are required to build backend system for a movie reservation service. The service will allow users to sign up, log in, browse movies, reserve seats for specific showtimes, and manage their reservations. The system will feature user authentication, movie and showtime management, seat reservation functionality, and reporting on reservations.</p>\n<h2 id=\"goal\">Goal</h2>\n<p>The goal of this project is to help you understand how to implement complex business logic i.e. seat reservation and scheduling, thinking about the data model and relationships, and complex queries.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>We have intentionally left out the implementation details to encourage you to think about the design and implementation of the system. However here are some requirements that you can consider:</p>\n<h3 id=\"user-authentication-and-authorization\">User Authentication and Authorization</h3>\n<ul>\n<li>Users should be able to sign up and log in.</li>\n<li>You also need roles for users, such as admin and regular user. Admins should be able to manage movies and showtimes.</li>\n<li>Regular users should be able to reserve seats for a showtime.</li>\n</ul>\n<blockquote>\n<p>You can create the initial admin using seed data. Only admins should be able to promote other users to admin and be able to do things related to movie management, reporting, etc.</p>\n</blockquote>\n<h3 id=\"movie-management\">Movie Management</h3>\n<ul>\n<li>Admins should be able to add, update, and delete movies.</li>\n<li>Each movie should have a title, description, and poster image.</li>\n<li>Movies should be categorized by genre.</li>\n<li>Movies should have showtimes.</li>\n</ul>\n<h3 id=\"reservation-management\">Reservation Management</h3>\n<ul>\n<li>Users should be able to get the movies and their show times for a specific date.</li>\n<li>Users should be able to reserve seats for a showtime, see the available seats, and select the seats they want.</li>\n<li>Users should be able to see their reservations and cancel them (only upcoming ones).</li>\n<li>Admins should be able to see all reservations, capacity, and revenue.</li>\n</ul>\n<h2 id=\"implementation-considerations\">Implementation Considerations</h2>\n<ul>\n<li>Think about the data model and relationships between entities.</li>\n<li>Think about how you will avoid overbooking, and how you will handle seat reservations.</li>\n<li>Think about how you will handle the scheduling of showtimes.</li>\n<li>Think about how you will handle the reporting of reservations.</li>\n<li>Think about how you will handle the authentication and authorization of users.</li>\n</ul>\n<hr>\n<p>This project is quite complex and will require you to think about the design and implementation of the system. You can use any programming language and database of your choice. I would recommend using a relational database such as MySQL or PostgreSQL. Once you have finished this project, you will have a good understanding of how to implement complex business logic, think about the data model and relationships, and complex queries. You can also extend this project by adding more features such as payment processing, email notifications, etc.</p>";

				const frontmatter$w = {"title":"Movie Reservation System","description":"Build a system that allows users to reserve movie tickets.","isNew":false,"sort":1900,"difficulty":"advanced","nature":"API","skills":["Programming Language","Database","Scheduling","Authentication"],"seo":{"title":"Movie Reservation System Project Idea","description":"Build a system that allows users to reserve movie tickets.","keywords":["movie reservation system","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$w = "/workspace/src/data/projects/movie-reservation-system.md";
				const url$w = undefined;
				function rawContent$w() {
					return "   \n                                 \n                                                                         \n            \n          \n                      \n             \n       \n                          \n              \n                \n                    \n    \n                                                \n                                                                           \n           \n                                \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nYou are required to build backend system for a movie reservation service. The service will allow users to sign up, log in, browse movies, reserve seats for specific showtimes, and manage their reservations. The system will feature user authentication, movie and showtime management, seat reservation functionality, and reporting on reservations.\n\n## Goal\n\nThe goal of this project is to help you understand how to implement complex business logic i.e. seat reservation and scheduling, thinking about the data model and relationships, and complex queries.\n\n## Requirements\n\nWe have intentionally left out the implementation details to encourage you to think about the design and implementation of the system. However here are some requirements that you can consider:\n\n### User Authentication and Authorization\n\n- Users should be able to sign up and log in.\n- You also need roles for users, such as admin and regular user. Admins should be able to manage movies and showtimes.\n- Regular users should be able to reserve seats for a showtime.\n\n> You can create the initial admin using seed data. Only admins should be able to promote other users to admin and be able to do things related to movie management, reporting, etc.\n\n### Movie Management\n\n- Admins should be able to add, update, and delete movies.\n- Each movie should have a title, description, and poster image.\n- Movies should be categorized by genre.\n- Movies should have showtimes.\n\n### Reservation Management\n\n- Users should be able to get the movies and their show times for a specific date.\n- Users should be able to reserve seats for a showtime, see the available seats, and select the seats they want.\n- Users should be able to see their reservations and cancel them (only upcoming ones).\n- Admins should be able to see all reservations, capacity, and revenue.\n\n## Implementation Considerations\n\n- Think about the data model and relationships between entities.\n- Think about how you will avoid overbooking, and how you will handle seat reservations.\n- Think about how you will handle the scheduling of showtimes.\n- Think about how you will handle the reporting of reservations.\n- Think about how you will handle the authentication and authorization of users.\n\n<hr />\n\nThis project is quite complex and will require you to think about the design and implementation of the system. You can use any programming language and database of your choice. I would recommend using a relational database such as MySQL or PostgreSQL. Once you have finished this project, you will have a good understanding of how to implement complex business logic, think about the data model and relationships, and complex queries. You can also extend this project by adding more features such as payment processing, email notifications, etc.";
				}
				async function compiledContent$w() {
					return await html$w();
				}
				function getHeadings$w() {
					return [{"depth":2,"slug":"goal","text":"Goal"},{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"user-authentication-and-authorization","text":"User Authentication and Authorization"},{"depth":3,"slug":"movie-management","text":"Movie Management"},{"depth":3,"slug":"reservation-management","text":"Reservation Management"},{"depth":2,"slug":"implementation-considerations","text":"Implementation Considerations"}];
				}

				const Content$w = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$w;
					content.file = file$w;
					content.url = url$w;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$w())}`;
				});

const __vite_glob_0_36 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$w,
	compiledContent: compiledContent$w,
	default: Content$w,
	file: file$w,
	frontmatter: frontmatter$w,
	getHeadings: getHeadings$w,
	rawContent: rawContent$w,
	url: url$w
}, Symbol.toStringTag, { value: 'Module' }));

const html$v = () => "<p>The goal of this project is to practice using Docker Compose to run a multi-container application in production. You will use Docker Compose to run a Node.js application and a MongoDB database.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>Create a simple unauthenticated Node.js API service for creating a simple todo list. The API should have the following endpoints:</p>\n<ul>\n<li><code>GET /todos</code> — get all todos</li>\n<li><code>POST /todos</code> — create a new todo</li>\n<li><code>GET /todos/:id</code> — get a single todo by id</li>\n<li><code>PUT /todos/:id</code> — update a single todo by id</li>\n<li><code>DELETE /todos/:id</code> — delete a single todo by id</li>\n</ul>\n<p>The API should connect to MongoDB to store the todo items. You can use <a href=\"https://expressjs.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Express</a> for the API and <a href=\"https://mongoosejs.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Mongoose</a> to connect to MongoDB. You can use <code>nodemon</code> to automatically restart the server when the source code changes.</p>\n<h3 id=\"requirement-1---dockerize-the-api\">Requirement #1 - Dockerize the API</h3>\n<p>You are required to dockerize the API and have a <code>docker-compose.yml</code> file which will spin up a <a href=\"https://hub.docker.com/_/mongo\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">MongoDB container</a> and the API container. If everything works, you should be able to access the API via <code>http://localhost:3000</code> and the todos should be saved to the MongoDB container. Data should be persisted when the containers are stopped and started.</p>\n<h3 id=\"requirement-2---setup-a-remote-server\">Requirement #2 - Setup a remote server</h3>\n<p>Setup a remote server on <a href=\"https://m.do.co/c/b29aa8845df8\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Digital Ocean</a>, AWS or any other cloud provider. You should use terraform to create the server and Ansible to configure it properly i.e. setup docker, docker-compose, pulling the image from Docker Hub and running the containers.</p>\n<h3 id=\"requirement-3---setup-a-cicd-pipeline\">Requirement #3 - Setup a CI/CD pipeline</h3>\n<p>Once you have everything working locally, push your code to GitHub and setup a CI/CD pipeline to deploy the application to the remote server. You can use <a href=\"https://github.com/features/actions\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">GitHub Actions</a> to setup the pipeline. Make sure to use <code>docker-compose</code> to run the application in the production environment.</p>\n<h3 id=\"bonus---setup-a-reverse-proxy\">Bonus - Setup a reverse proxy</h3>\n<p>Setup a reverse proxy using Nginx to allow you to access the application via <code>http://your_domain.com</code>. You should use <code>docker-compose</code> to setup the reverse proxy.</p>\n<hr>\n<p>After completing this project, you will have a good understanding of Docker Compose, multi-container applications, CI/CD pipelines, and more.</p>";

				const frontmatter$v = {"title":"Multi-Container Application","description":"Use Docker Compose to run a multi-container application","isNew":false,"sort":1500,"difficulty":"intermediate","nature":"Docker Compose","skills":["nodejs","docker","devops"],"seo":{"title":"Multi-Container Application","description":"Use Docker Compose to run a multi-container application","keywords":["Docker","Docker Compose","Node.js","MongoDB"]},"roadmapIds":["devops"]};
				const file$v = "/workspace/src/data/projects/multi-container-service.md";
				const url$v = undefined;
				function rawContent$v() {
					return "   \n                                    \n                                                                      \n            \n          \n                          \n                        \n       \n            \n            \n            \n    \n                                      \n                                                                        \n           \n              \n                      \n               \n               \n           \n            \n   \n\nThe goal of this project is to practice using Docker Compose to run a multi-container application in production. You will use Docker Compose to run a Node.js application and a MongoDB database.\n\n## Requirements\n\nCreate a simple unauthenticated Node.js API service for creating a simple todo list. The API should have the following endpoints:\n\n- `GET /todos` — get all todos\n- `POST /todos` — create a new todo\n- `GET /todos/:id` — get a single todo by id\n- `PUT /todos/:id` — update a single todo by id\n- `DELETE /todos/:id` — delete a single todo by id\n\nThe API should connect to MongoDB to store the todo items. You can use [Express](https://expressjs.com/) for the API and [Mongoose](https://mongoosejs.com/) to connect to MongoDB. You can use `nodemon` to automatically restart the server when the source code changes. \n\n### Requirement #1 - Dockerize the API\n\nYou are required to dockerize the API and have a `docker-compose.yml` file which will spin up a [MongoDB container](https://hub.docker.com/_/mongo) and the API container. If everything works, you should be able to access the API via `http://localhost:3000` and the todos should be saved to the MongoDB container. Data should be persisted when the containers are stopped and started.\n\n### Requirement #2 - Setup a remote server\n\nSetup a remote server on [Digital Ocean](https://m.do.co/c/b29aa8845df8), AWS or any other cloud provider. You should use terraform to create the server and Ansible to configure it properly i.e. setup docker, docker-compose, pulling the image from Docker Hub and running the containers.\n\n### Requirement #3 - Setup a CI/CD pipeline\n\nOnce you have everything working locally, push your code to GitHub and setup a CI/CD pipeline to deploy the application to the remote server. You can use [GitHub Actions](https://github.com/features/actions) to setup the pipeline. Make sure to use `docker-compose` to run the application in the production environment.\n\n### Bonus - Setup a reverse proxy\n\nSetup a reverse proxy using Nginx to allow you to access the application via `http://your_domain.com`. You should use `docker-compose` to setup the reverse proxy.\n\n<hr />\n\nAfter completing this project, you will have a good understanding of Docker Compose, multi-container applications, CI/CD pipelines, and more.";
				}
				async function compiledContent$v() {
					return await html$v();
				}
				function getHeadings$v() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"requirement-1---dockerize-the-api","text":"Requirement #1 - Dockerize the API"},{"depth":3,"slug":"requirement-2---setup-a-remote-server","text":"Requirement #2 - Setup a remote server"},{"depth":3,"slug":"requirement-3---setup-a-cicd-pipeline","text":"Requirement #3 - Setup a CI/CD pipeline"},{"depth":3,"slug":"bonus---setup-a-reverse-proxy","text":"Bonus - Setup a reverse proxy"}];
				}

				const Content$v = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$v;
					content.file = file$v;
					content.url = url$v;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$v())}`;
				});

const __vite_glob_0_37 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$v,
	compiledContent: compiledContent$v,
	default: Content$v,
	file: file$v,
	frontmatter: frontmatter$v,
	getHeadings: getHeadings$v,
	rawContent: rawContent$v,
	url: url$v
}, Symbol.toStringTag, { value: 'Module' }));

const html$u = () => "<p>The goal of this project is to help you practice a more advanced docker setup involving multiple services, volumes, networks, custom base images, multi-stage builds, secrets and more. The project will simulate a real-world scenario with multiple interconnected services, each with its own build requirements and optimizations.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>Create a multi-service application using Docker that consists of the following components:</p>\n<ul>\n<li><strong>Web Application</strong>: A basic react-based frontend application.</li>\n<li><strong>API Service</strong>: A Node.js Express backend API.</li>\n<li><strong>Database</strong>: A MongoDB instance for storing application data.</li>\n<li><strong>Cache</strong>: A Redis cache for improving performance.</li>\n<li><strong>Reverse Proxy</strong>: An Nginx reverse proxy to handle incoming requests.</li>\n</ul>\n<p>Implement the following Docker features and best practices:</p>\n<ul>\n<li>Use Docker Compose to define and run the multi-container application.</li>\n<li>Create custom base images for the web application and API service.</li>\n<li>Implement multi-stage builds for the web application to optimize the final image size.</li>\n<li>Set up a Docker network to allow communication between services.</li>\n<li>Use Docker volumes for persistent data storage (database and cache).</li>\n<li>Implement Docker secrets for sensitive information (e.g., database passwords).</li>\n<li>Configure health checks for each service.</li>\n<li>Optimize Dockerfiles for each service to reduce image sizes and improve build times.</li>\n<li>Implement logging and log rotation for all services.</li>\n</ul>\n<hr>\n<p>By completing this project, you’ll gain hands-on experience with advanced Docker concepts and best practices in a realistic, multi-service environment. This will prepare you for working with complex containerized applications in production scenarios.</p>";

				const frontmatter$u = {"title":"Multi-Service Application","description":"Setup a multi-service optimized docker implementation","isNew":false,"sort":1900,"difficulty":"advanced","nature":"Docker","skills":["docker","docker-compose"],"seo":{"title":"Multi-Service Docker","description":"Setup a multi-service optimized docker implementation","keywords":["Multi-Service Docker","Docker"]},"roadmapIds":["devops"]};
				const file$u = "/workspace/src/data/projects/multiservice-docker.md";
				const url$u = undefined;
				function rawContent$u() {
					return "   \n                                  \n                                                                    \n            \n          \n                      \n                \n       \n            \n                    \n    \n                               \n                                                                      \n           \n                            \n              \n           \n            \n   \n\nThe goal of this project is to help you practice a more advanced docker setup involving multiple services, volumes, networks, custom base images, multi-stage builds, secrets and more. The project will simulate a real-world scenario with multiple interconnected services, each with its own build requirements and optimizations.\n\n## Requirements\n\nCreate a multi-service application using Docker that consists of the following components:\n\n- **Web Application**: A basic react-based frontend application.\n- **API Service**: A Node.js Express backend API.\n- **Database**: A MongoDB instance for storing application data.\n- **Cache**: A Redis cache for improving performance.\n- **Reverse Proxy**: An Nginx reverse proxy to handle incoming requests.\n\nImplement the following Docker features and best practices:\n\n- Use Docker Compose to define and run the multi-container application.\n- Create custom base images for the web application and API service.\n- Implement multi-stage builds for the web application to optimize the final image size.\n- Set up a Docker network to allow communication between services.\n- Use Docker volumes for persistent data storage (database and cache).\n- Implement Docker secrets for sensitive information (e.g., database passwords).\n- Configure health checks for each service.\n- Optimize Dockerfiles for each service to reduce image sizes and improve build times.\n- Implement logging and log rotation for all services.\n\n<hr />\n\nBy completing this project, you'll gain hands-on experience with advanced Docker concepts and best practices in a realistic, multi-service environment. This will prepare you for working with complex containerized applications in production scenarios.\n";
				}
				async function compiledContent$u() {
					return await html$u();
				}
				function getHeadings$u() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$u = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$u;
					content.file = file$u;
					content.url = url$u;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$u())}`;
				});

const __vite_glob_0_38 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$u,
	compiledContent: compiledContent$u,
	default: Content$u,
	file: file$u,
	frontmatter: frontmatter$u,
	getHeadings: getHeadings$u,
	rawContent: rawContent$u,
	url: url$u
}, Symbol.toStringTag, { value: 'Module' }));

const html$t = () => "<p>The goal of this project is to help you practice some basic shell scripting skills. You will write a simple tool to analyze logs from the command line.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>Download the sample nginx access log file from <a href=\"https://gist.githubusercontent.com/kamranahmedse/e66c3b9ea89a1a030d3b739eeeef22d0/raw/77fb3ac837a73c4f0206e78a236d885590b7ae35/nginx-access.log\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">here</a>. The log file contains the following fields:</p>\n<ul>\n<li>IP address</li>\n<li>Date and time</li>\n<li>Request method and path</li>\n<li>Response status code</li>\n<li>Response size</li>\n<li>Referrer</li>\n<li>User agent</li>\n</ul>\n<p>You are required to create a shell script that reads the log file and provides the following information:</p>\n<ol>\n<li>Top 5 IP addresses with the most requests</li>\n<li>Top 5 most requested paths</li>\n<li>Top 5 response status codes</li>\n<li>Top 5 user agents</li>\n</ol>\n<p>Here is an example of what the output should look like:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"text\"><code><span class=\"line\"><span>Top 5 IP addresses with the most requests:</span></span>\n<span class=\"line\"><span>45.76.135.253 - 1000 requests</span></span>\n<span class=\"line\"><span>142.93.143.8 - 600 requests</span></span>\n<span class=\"line\"><span>178.128.94.113 - 50 requests</span></span>\n<span class=\"line\"><span>43.224.43.187 - 30 requests</span></span>\n<span class=\"line\"><span>178.128.94.113 - 20 requests</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>Top 5 most requested paths:</span></span>\n<span class=\"line\"><span>/api/v1/users - 1000 requests</span></span>\n<span class=\"line\"><span>/api/v1/products - 600 requests</span></span>\n<span class=\"line\"><span>/api/v1/orders - 50 requests</span></span>\n<span class=\"line\"><span>/api/v1/payments - 30 requests</span></span>\n<span class=\"line\"><span>/api/v1/reviews - 20 requests</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>Top 5 response status codes:</span></span>\n<span class=\"line\"><span>200 - 1000 requests</span></span>\n<span class=\"line\"><span>404 - 600 requests</span></span>\n<span class=\"line\"><span>500 - 50 requests</span></span>\n<span class=\"line\"><span>401 - 30 requests</span></span>\n<span class=\"line\"><span>304 - 20 requests</span></span></code></pre>\n<p>There are multiple ways to solve this challenge. Do some research on <code>awk</code>, <code>sort</code>, <code>uniq</code>, <code>head</code>, <code>grep</code>, and <code>sed</code> commands. Stretch goal is to come up with multiple solutions for the above problem. For example, instead of using <code>awk</code>, you can use <code>grep</code> and <code>sed</code> to filter and count the requests.</p>";

				const frontmatter$t = {"title":"Nginx Log Analyser","description":"Write a simple tool to analyze logs from the command line.","isNew":true,"sort":300,"difficulty":"beginner","nature":"CLI","skills":["linux","bash","shell scripting"],"seo":{"title":"Nginx Log Analyser","description":"Build a simple CLI tool to analyze logs from the command line.","keywords":["Nginx Log Analyser","devops project idea"]},"roadmapIds":["devops"]};
				const file$t = "/workspace/src/data/projects/nginx-log-analyser.md";
				const url$t = undefined;
				function rawContent$t() {
					return "   \n                           \n                                                                         \n           \n         \n                      \n             \n       \n           \n          \n                     \n    \n                             \n                                                                               \n           \n                          \n                           \n           \n            \n   \n\nThe goal of this project is to help you practice some basic shell scripting skills. You will write a simple tool to analyze logs from the command line.\n\n## Requirements\n\nDownload the sample nginx access log file from [here](https://gist.githubusercontent.com/kamranahmedse/e66c3b9ea89a1a030d3b739eeeef22d0/raw/77fb3ac837a73c4f0206e78a236d885590b7ae35/nginx-access.log). The log file contains the following fields:\n\n- IP address\n- Date and time\n- Request method and path\n- Response status code\n- Response size\n- Referrer\n- User agent\n\nYou are required to create a shell script that reads the log file and provides the following information:\n\n1. Top 5 IP addresses with the most requests\n2. Top 5 most requested paths\n3. Top 5 response status codes\n4. Top 5 user agents\n\nHere is an example of what the output should look like:\n\n```text\nTop 5 IP addresses with the most requests:\n45.76.135.253 - 1000 requests\n142.93.143.8 - 600 requests\n178.128.94.113 - 50 requests\n43.224.43.187 - 30 requests\n178.128.94.113 - 20 requests\n\nTop 5 most requested paths:\n/api/v1/users - 1000 requests\n/api/v1/products - 600 requests\n/api/v1/orders - 50 requests\n/api/v1/payments - 30 requests\n/api/v1/reviews - 20 requests\n\nTop 5 response status codes:\n200 - 1000 requests\n404 - 600 requests\n500 - 50 requests\n401 - 30 requests\n304 - 20 requests\n```\n\nThere are multiple ways to solve this challenge. Do some research on `awk`, `sort`, `uniq`, `head`, `grep`, and `sed` commands. Stretch goal is to come up with multiple solutions for the above problem. For example, instead of using `awk`, you can use `grep` and `sed` to filter and count the requests.\n";
				}
				async function compiledContent$t() {
					return await html$t();
				}
				function getHeadings$t() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$t = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$t;
					content.file = file$t;
					content.url = url$t;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$t())}`;
				});

const __vite_glob_0_39 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$t,
	compiledContent: compiledContent$t,
	default: Content$t,
	file: file$t,
	frontmatter: frontmatter$t,
	getHeadings: getHeadings$t,
	rawContent: rawContent$t,
	url: url$t
}, Symbol.toStringTag, { value: 'Module' }));

const html$s = () => "<p>The goal of this project is to practice setting up a CI/CD pipeline for a Node.js service using GitHub Actions. You will practice using GitHub Actions for deployment (including Secrets and environment variables), Terraform to provision a server, Ansible to configure the server, and SSH to deploy the application.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>If you haven’t completed the previous projects for <a href=\"/projects/configuration-management\">Configuration Management</a> and <a href=\"/projects/iac-digitalocean\">IaC</a>, you should do that first. You will be able to reuse the Ansible and Terraform code from those projects.</p>\n<p>You are required to have the following setup:</p>\n<ul>\n<li>Setup a <a href=\"/projects/iac-digitalocean\">DigitalOcean droplet using Terraform</a></li>\n<li>Setup the server using <a href=\"/projects/configuration-management\">Ansible</a> including installing Node.js and <code>npm</code></li>\n<li>Create a simple Node.js service that just has a <code>/</code> route which returns <code>Hello, world!</code></li>\n<li>Push the codebase to GitHub repository</li>\n</ul>\n<p>Once you have the above setup, you are required to implement the following:</p>\n<h3 id=\"task-1-manual-ansible-deployment\">Task #1: Manual Ansible Deployment</h3>\n<ul>\n<li>\n<p>Setup a role in ansible called <code>app</code> that will connect to the server, clone the repository, install the dependencies, build the application, and start the application.</p>\n</li>\n<li>\n<p>You should be able to run the playbook using the following command and the application should be up and running on port <code>80</code>:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#50FA7B\">ansible-playbook</span><span style=\"color:#F1FA8C\"> node_service.yml</span><span style=\"color:#BD93F9\"> --tags</span><span style=\"color:#F1FA8C\"> app</span></span></code></pre>\n</li>\n<li>\n<p>You should be able to access the application using the public IP address of the server.</p>\n</li>\n</ul>\n<h3 id=\"task-2-automate-deployment-using-github-actions\">Task #2: Automate Deployment using GitHub Actions</h3>\n<p>Write a GitHub Action workflow that will deploy the application to the server using one of the following methods. You are welcome to try both options, but you are not required to do that. You are also welcome to use any other method to accomplish the same result.</p>\n<h4 id=\"option-1-run-the-playbook-in-github-actions\">Option #1: Run the playbook in GitHub Actions</h4>\n<p>Use the <code>ansible-playbook</code> command to run the playbook and deploy the application</p>\n<h4 id=\"option-2-use-ssh-to-connect-and-deploy-the-application\">Option #2: Use SSH to connect and deploy the application</h4>\n<p>Use SSH to connect and deploy the application. Look into <a href=\"https://linux.die.net/man/1/rsync\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">rsync</a> and these GitHub Actions to accomplish this: <a href=\"https://github.com/webfactory/ssh-agent\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">web-factory/ssh-agent</a>, <a href=\"https://github.com/appleboy/ssh-action\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">appleboy/ssh-action</a>.</p>\n<hr>\n<p>Once you have the application deployed, you should have a good understanding of automating the process of setting up a server and deploying an application to it.</p>";

				const frontmatter$s = {"title":"Node.js Service Deployment","description":"Use GitHub Actions to Deploy a Node.js Service to a remote server","isNew":false,"sort":1300,"difficulty":"intermediate","nature":"CI/CD","skills":["nodejs","docker","devops"],"seo":{"title":"Node.js Service Deployment","description":"Use GitHub Actions to Deploy a Node.js Service to a remote server","keywords":["Node.js","DigitalOcean","Docker"]},"roadmapIds":["devops"]};
				const file$s = "/workspace/src/data/projects/nodejs-service-deployment.md";
				const url$s = undefined;
				function rawContent$s() {
					return "   \n                                   \n                                                                                \n            \n          \n                          \n               \n       \n            \n            \n            \n    \n                                     \n                                                                                  \n           \n               \n                    \n              \n           \n            \n   \n\nThe goal of this project is to practice setting up a CI/CD pipeline for a Node.js service using GitHub Actions. You will practice using GitHub Actions for deployment (including Secrets and environment variables), Terraform to provision a server, Ansible to configure the server, and SSH to deploy the application.\n\n## Requirements\n\nIf you haven't completed the previous projects for [Configuration Management](/projects/configuration-management) and [IaC](/projects/iac-digitalocean), you should do that first. You will be able to reuse the Ansible and Terraform code from those projects.\n\nYou are required to have the following setup:\n\n- Setup a [DigitalOcean droplet using Terraform](/projects/iac-digitalocean)\n- Setup the server using [Ansible](/projects/configuration-management) including installing Node.js and `npm`\n- Create a simple Node.js service that just has a `/` route which returns `Hello, world!`\n- Push the codebase to GitHub repository\n\nOnce you have the above setup, you are required to implement the following:\n\n### Task #1: Manual Ansible Deployment\n\n- Setup a role in ansible called `app` that will connect to the server, clone the repository, install the dependencies, build the application, and start the application.\n- You should be able to run the playbook using the following command and the application should be up and running on port `80`:\n\n  ```bash\n  ansible-playbook node_service.yml --tags app\n  ```\n\n- You should be able to access the application using the public IP address of the server.\n\n### Task #2: Automate Deployment using GitHub Actions\n\nWrite a GitHub Action workflow that will deploy the application to the server using one of the following methods. You are welcome to try both options, but you are not required to do that. You are also welcome to use any other method to accomplish the same result.\n\n#### Option #1: Run the playbook in GitHub Actions\n\nUse the `ansible-playbook` command to run the playbook and deploy the application\n\n#### Option #2: Use SSH to connect and deploy the application\n\nUse SSH to connect and deploy the application. Look into [rsync](https://linux.die.net/man/1/rsync) and these GitHub Actions to accomplish this: [web-factory/ssh-agent](https://github.com/webfactory/ssh-agent), [appleboy/ssh-action](https://github.com/appleboy/ssh-action).\n\n<hr />\n\nOnce you have the application deployed, you should have a good understanding of automating the process of setting up a server and deploying an application to it.";
				}
				async function compiledContent$s() {
					return await html$s();
				}
				function getHeadings$s() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"task-1-manual-ansible-deployment","text":"Task #1: Manual Ansible Deployment"},{"depth":3,"slug":"task-2-automate-deployment-using-github-actions","text":"Task #2: Automate Deployment using GitHub Actions"},{"depth":4,"slug":"option-1-run-the-playbook-in-github-actions","text":"Option #1: Run the playbook in GitHub Actions"},{"depth":4,"slug":"option-2-use-ssh-to-connect-and-deploy-the-application","text":"Option #2: Use SSH to connect and deploy the application"}];
				}

				const Content$s = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$s;
					content.file = file$s;
					content.url = url$s;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$s())}`;
				});

const __vite_glob_0_40 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$s,
	compiledContent: compiledContent$s,
	default: Content$s,
	file: file$s,
	frontmatter: frontmatter$s,
	getHeadings: getHeadings$s,
	rawContent: rawContent$s,
	url: url$s
}, Symbol.toStringTag, { value: 'Module' }));

const html$r = () => "<p>You are required to build a simple number guessing game where the computer randomly selects a number and the user has to guess it. The user will be given a limited number of chances to guess the number. If the user guesses the number correctly, the game will end, and the user will win. Otherwise, the game will continue until the user runs out of chances.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>It is a CLI-based game, so you need to use the command line to interact with the game. The game should work as follows:</p>\n<ul>\n<li>When the game starts, it should display a welcome message along with the rules of the game.</li>\n<li>The computer should randomly select a number between 1 and 100.</li>\n<li>User should select the difficulty level (easy, medium, hard) which will determine the number of chances they get to guess the number.</li>\n<li>The user should be able to enter their guess.</li>\n<li>If the user’s guess is correct, the game should display a congratulatory message along with the number of attempts it took to guess the number.</li>\n<li>If the user’s guess is incorrect, the game should display a message indicating whether the number is greater or less than the user’s guess.</li>\n<li>The game should end when the user guesses the correct number or runs out of chances.</li>\n</ul>\n<p>Here is a sample output of the game:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>Welcome to the Number Guessing Game!</span></span>\n<span class=\"line\"><span>I'm thinking of a number between 1 and 100.</span></span>\n<span class=\"line\"><span>You have 5 chances to guess the correct number.</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>Please select the difficulty level:</span></span>\n<span class=\"line\"><span>1. Easy (10 chances)</span></span>\n<span class=\"line\"><span>2. Medium (5 chances)</span></span>\n<span class=\"line\"><span>3. Hard (3 chances)</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>Enter your choice: 2</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>Great! You have selected the Medium difficulty level.</span></span>\n<span class=\"line\"><span>Let's start the game!</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>Enter your guess: 50</span></span>\n<span class=\"line\"><span>Incorrect! The number is less than 50.</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>Enter your guess: 25</span></span>\n<span class=\"line\"><span>Incorrect! The number is greater than 25.</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>Enter your guess: 35</span></span>\n<span class=\"line\"><span>Incorrect! The number is less than 35.</span></span>\n<span class=\"line\"><span></span></span>\n<span class=\"line\"><span>Enter your guess: 30</span></span>\n<span class=\"line\"><span>Congratulations! You guessed the correct number in 4 attempts.</span></span></code></pre>\n<p>To make the game more interesting, you can add the following features:</p>\n<ul>\n<li>Allow the user to play multiple rounds of the game (i.e., keep playing until the user decides to quit). You can do this by asking the user if they want to play again after each round.</li>\n<li>Add a timer to see how long it takes the user to guess the number.</li>\n<li>Implement a hint system that provides clues to the user if they are stuck.</li>\n<li>Keep track of the user’s high score (i.e., the fewest number of attempts it took to guess the number under a specific difficulty level).</li>\n</ul>";

				const frontmatter$r = {"title":"Number Guessing Game","description":"Build a simple number guessing game to test your luck.","isNew":false,"sort":400,"difficulty":"beginner","nature":"CLI","skills":["Programming Language","CLI","Logic Building"],"seo":{"title":"Number Guessing Game Project Idea","description":"Build a simple number guessing game to test your luck.","keywords":["number guessing game","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot","cpp"]};
				const file$r = "/workspace/src/data/projects/number-guessing-game.md";
				const url$r = undefined;
				function rawContent$r() {
					return "   \n                             \n                                                                     \n            \n         \n                      \n             \n       \n                          \n         \n                    \n    \n                                            \n                                                                       \n           \n                            \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n         \n   \n\nYou are required to build a simple number guessing game where the computer randomly selects a number and the user has to guess it. The user will be given a limited number of chances to guess the number. If the user guesses the number correctly, the game will end, and the user will win. Otherwise, the game will continue until the user runs out of chances.\n\n## Requirements\n\nIt is a CLI-based game, so you need to use the command line to interact with the game. The game should work as follows:\n\n- When the game starts, it should display a welcome message along with the rules of the game.\n- The computer should randomly select a number between 1 and 100.\n- User should select the difficulty level (easy, medium, hard) which will determine the number of chances they get to guess the number.\n- The user should be able to enter their guess.\n- If the user's guess is correct, the game should display a congratulatory message along with the number of attempts it took to guess the number.\n- If the user's guess is incorrect, the game should display a message indicating whether the number is greater or less than the user's guess.\n- The game should end when the user guesses the correct number or runs out of chances.\n\nHere is a sample output of the game:\n\n```plaintext\nWelcome to the Number Guessing Game!\nI'm thinking of a number between 1 and 100.\nYou have 5 chances to guess the correct number.\n\nPlease select the difficulty level:\n1. Easy (10 chances)\n2. Medium (5 chances)\n3. Hard (3 chances)\n\nEnter your choice: 2\n\nGreat! You have selected the Medium difficulty level.\nLet's start the game!\n\nEnter your guess: 50\nIncorrect! The number is less than 50.\n\nEnter your guess: 25\nIncorrect! The number is greater than 25.\n\nEnter your guess: 35\nIncorrect! The number is less than 35.\n\nEnter your guess: 30\nCongratulations! You guessed the correct number in 4 attempts.\n```\n\nTo make the game more interesting, you can add the following features:\n\n- Allow the user to play multiple rounds of the game (i.e., keep playing until the user decides to quit). You can do this by asking the user if they want to play again after each round.\n- Add a timer to see how long it takes the user to guess the number.\n- Implement a hint system that provides clues to the user if they are stuck.\n- Keep track of the user's high score (i.e., the fewest number of attempts it took to guess the number under a specific difficulty level).\n";
				}
				async function compiledContent$r() {
					return await html$r();
				}
				function getHeadings$r() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$r = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$r;
					content.file = file$r;
					content.url = url$r;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$r())}`;
				});

const __vite_glob_0_41 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$r,
	compiledContent: compiledContent$r,
	default: Content$r,
	file: file$r,
	frontmatter: frontmatter$r,
	getHeadings: getHeadings$r,
	rawContent: rawContent$r,
	url: url$r
}, Symbol.toStringTag, { value: 'Module' }));

const html$q = () => "<p>You are required to build a personal blog where you can write and publish articles. The blog will have two sections: a guest section and an admin section.</p>\n<p><strong>Guest Section</strong> — A list of pages that can be accessed by anyone:</p>\n<ul>\n<li><strong>Home Page:</strong> This page will display the list of articles published on the blog.</li>\n<li><strong>Article Page:</strong> This page will display the content of the article along with the date of publication.</li>\n</ul>\n<p><strong>Admin Section</strong> — are the pages that only you can access to publish, edit, or delete articles.</p>\n<ul>\n<li><strong>Dashboard:</strong> This page will display the list of articles published on the blog along with the option to add a new article, edit an existing article, or delete an article.</li>\n<li><strong>Add Article Page:</strong> This page will contain a form to add a new article. The form will have fields like title, content, and date of publication.</li>\n<li><strong>Edit Article Page:</strong> This page will contain a form to edit an existing article. The form will have fields like title, content, and date of publication.</li>\n</ul>\n<p>Here are the mockups to give you an idea of the different pages of the blog.</p>\n<p>Pages that anyone can access</p>\n<p><img src=\"https://assets.roadmap.sh/guest/blog-guest-pages.png\" alt=\"Personal Blog\"></p>\n<p>Pages that only the admin can access</p>\n<p><img src=\"https://assets.roadmap.sh/guest/blog-admin-pages.png\" alt=\"Personal Blog\"></p>\n<h2 id=\"how-to-implement\">How to Implement</h2>\n<p>Here are some guidelines to help you implement the personal blog:</p>\n<h3 id=\"storage\">Storage</h3>\n<p>To keep things simple for now, you can use the filesystem to store the articles. Each article will be stored as a separate file in a directory. The file will contain the title, content, and date of publication of the article. You can use JSON or Markdown format to store the articles.</p>\n<h3 id=\"backend\">Backend</h3>\n<p>You can use any programming language to build the backend of the blog. You don’t have to make it as an API for this project, we have other projects for that. You can have pages that render the HTML directly from the server and forms that submit data to the server.</p>\n<h3 id=\"frontend\">Frontend</h3>\n<p>For the frontend, you can use HTML and CSS (no need for JavaScript for now). You can use any templating engine to render the articles on the frontend.</p>\n<h3 id=\"authentication\">Authentication</h3>\n<p>You can implement basic authentication for the admin section. You can either use the <a href=\"https://youtu.be/mwccHwUn7Gc?t=20\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">standard HTTP basic authentication</a> or simply hardcode the username and password in the code for now and create a simple login page that will create a session for the admin.</p>\n<hr>\n<p>After completing this project, you will have practised templating, filesystem operations, basic authentication, form handling, and rendering HTML pages from the server. You can extend this project further by adding features like comments, categories, tags, search functionality, etc. Make sure to check the other backend projects that go into more advanced topics like databases, APIs, security best practices etc.</p>";

				const frontmatter$q = {"title":"Personal Blog","description":"Build a personal blog to write and publish articles on various topics.","isNew":false,"sort":600,"difficulty":"beginner","nature":"Web App","skills":["Programming Language","Basic Authentication","Markdown","Filesystem","Libraries"],"seo":{"title":"Personal Blog Project Idea","description":"Build a personal blog to write and publish articles on various topics. Learn how to create a blog using a programming language and frontend technologies.","keywords":["personal blog project","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$q = "/workspace/src/data/projects/personal-blog.md";
				const url$q = undefined;
				function rawContent$q() {
					return "   \n                      \n                                                                                     \n            \n         \n                      \n                 \n       \n                          \n                          \n              \n                \n               \n    \n                                     \n                                                                                                                                                                          \n           \n                             \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nYou are required to build a personal blog where you can write and publish articles. The blog will have two sections: a guest section and an admin section.\n\n**Guest Section** — A list of pages that can be accessed by anyone:\n\n- **Home Page:** This page will display the list of articles published on the blog.\n- **Article Page:** This page will display the content of the article along with the date of publication.\n\n**Admin Section** — are the pages that only you can access to publish, edit, or delete articles.\n\n- **Dashboard:** This page will display the list of articles published on the blog along with the option to add a new article, edit an existing article, or delete an article.\n- **Add Article Page:** This page will contain a form to add a new article. The form will have fields like title, content, and date of publication.\n- **Edit Article Page:** This page will contain a form to edit an existing article. The form will have fields like title, content, and date of publication.\n\nHere are the mockups to give you an idea of the different pages of the blog.\n\nPages that anyone can access\n\n![Personal Blog](https://assets.roadmap.sh/guest/blog-guest-pages.png)\n\nPages that only the admin can access\n\n![Personal Blog](https://assets.roadmap.sh/guest/blog-admin-pages.png)\n\n## How to Implement\n\nHere are some guidelines to help you implement the personal blog:\n\n### Storage\n\nTo keep things simple for now, you can use the filesystem to store the articles. Each article will be stored as a separate file in a directory. The file will contain the title, content, and date of publication of the article. You can use JSON or Markdown format to store the articles. \n\n### Backend\n\nYou can use any programming language to build the backend of the blog. You don't have to make it as an API for this project, we have other projects for that. You can have pages that render the HTML directly from the server and forms that submit data to the server.\n\n### Frontend\n\nFor the frontend, you can use HTML and CSS (no need for JavaScript for now). You can use any templating engine to render the articles on the frontend.\n\n### Authentication\n\nYou can implement basic authentication for the admin section. You can either use the [standard HTTP basic authentication](https://youtu.be/mwccHwUn7Gc?t=20) or simply hardcode the username and password in the code for now and create a simple login page that will create a session for the admin.\n\n<hr />\n\nAfter completing this project, you will have practised templating, filesystem operations, basic authentication, form handling, and rendering HTML pages from the server. You can extend this project further by adding features like comments, categories, tags, search functionality, etc. Make sure to check the other backend projects that go into more advanced topics like databases, APIs, security best practices etc.";
				}
				async function compiledContent$q() {
					return await html$q();
				}
				function getHeadings$q() {
					return [{"depth":2,"slug":"how-to-implement","text":"How to Implement"},{"depth":3,"slug":"storage","text":"Storage"},{"depth":3,"slug":"backend","text":"Backend"},{"depth":3,"slug":"frontend","text":"Frontend"},{"depth":3,"slug":"authentication","text":"Authentication"}];
				}

				const Content$q = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$q;
					content.file = file$q;
					content.url = url$q;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$q())}`;
				});

const __vite_glob_0_42 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$q,
	compiledContent: compiledContent$q,
	default: Content$q,
	file: file$q,
	frontmatter: frontmatter$q,
	getHeadings: getHeadings$q,
	rawContent: rawContent$q,
	url: url$q
}, Symbol.toStringTag, { value: 'Module' }));

const html$p = () => "<p>The goal of this project is to learn and practice frontend development skills by building a <strong>Pomodoro Timer</strong>, a productivity tool based on the Pomodoro Technique. The Pomodoro Technique is a time management method that uses a timer to break work into intervals (typically 25 minutes) separated by short breaks.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You will create a Pomodoro Timer web application using the frontend framework of your choice e.g. React, Vue or Angular. Here is the list of requirements for the application:</p>\n<ul>\n<li>User should be able to start stop and resume a pomodoro timer.</li>\n<li>User should be able to configure the default interval configuration; default work session should be 25 minutes, short break should be 5 minutes and longer break after 4 work sessions should be 15 minutes.</li>\n<li>Application should display the current session type (e.g., Work, Short Break, Long Break).</li>\n<li>It should also track the number of tracked work sessions</li>\n<li>Play a sound when a session ends to notify the user.</li>\n<li>Ensure the app is accessible and visually appealing on both desktop and mobile devices.</li>\n</ul>\n<p>You can use any existing pomodoro apps for the UI inspiration e.g.</p>\n<ul>\n<li><a href=\"https://time.fyi/pomodoro\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">time.fyi - Pomodoro Timer</a></li>\n<li><a href=\"https://pomofocus.io/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Pomofocus - Pomodoro Tracker</a></li>\n</ul>\n<h2 id=\"technical-requirements\">Technical Requirements</h2>\n<ul>\n<li>Use <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> (or a frontend framework/library such as React, Vue, or Angular).</li>\n<li>Implement state management for the timer and session tracking.</li>\n<li>Use a modular and reusable code structure.</li>\n<li>Maintain proper accessibility standards (e.g., keyboard navigation, ARIA labels).</li>\n</ul>\n<h2 id=\"feel-free-to-deploy-the-application-on-github-pages-vercel-or-cloudflare-pages\">Feel free to deploy the application on <a href=\"https://pages.github.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">GitHub Pages</a>, <a href=\"https://vercel.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Vercel</a> or <a href=\"https://pages.cloudflare.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Cloudflare pages</a></h2>\n<p>By completing this project, you will enhance your frontend development skills while building a functional and customizable Pomodoro Timer application. This knowledge will prepare you for more advanced projects and improve your ability to create interactive and user-friendly web applications.</p>";

				const frontmatter$p = {"title":"Pomodoro Timer","description":"Create a pomodoro tracker application for productivity","isNew":true,"sort":28,"difficulty":"intermediate","nature":"Frameworks","skills":["HTML","CSS","JavaScript","Frameworks"],"seo":{"title":"Pomodoro Tracker","description":"Create a pomodoro time tracker application for productivity tracking.","keywords":["frontend project","frontend frameworks","javascript","frontend project idea"]},"roadmapIds":["frontend"]};
				const file$p = "/workspace/src/data/projects/pomodoro-timer.md";
				const url$p = undefined;
				function rawContent$p() {
					return "   \n                       \n                                                                     \n           \n        \n                          \n                    \n       \n          \n         \n                \n                \n    \n                           \n                                                                                      \n           \n                        \n                           \n                  \n                             \n           \n              \n   \n\nThe goal of this project is to learn and practice frontend development skills by building a **Pomodoro Timer**, a productivity tool based on the Pomodoro Technique. The Pomodoro Technique is a time management method that uses a timer to break work into intervals (typically 25 minutes) separated by short breaks.\n\n## Requirements\n\nYou will create a Pomodoro Timer web application using the frontend framework of your choice e.g. React, Vue or Angular. Here is the list of requirements for the application:\n\n- User should be able to start stop and resume a pomodoro timer.\n- User should be able to configure the default interval configuration; default work session should be 25 minutes, short break should be 5 minutes and longer break after 4 work sessions should be 15 minutes.\n- Application should display the current session type (e.g., Work, Short Break, Long Break).\n- It should also track the number of tracked work sessions\n- Play a sound when a session ends to notify the user.\n- Ensure the app is accessible and visually appealing on both desktop and mobile devices.\n\nYou can use any existing pomodoro apps for the UI inspiration e.g.\n\n- [time.fyi - Pomodoro Timer](https://time.fyi/pomodoro)\n- [Pomofocus - Pomodoro Tracker](https://pomofocus.io/)\n\n## Technical Requirements\n\n- Use **HTML**, **CSS**, and **JavaScript** (or a frontend framework/library such as React, Vue, or Angular).\n- Implement state management for the timer and session tracking.\n- Use a modular and reusable code structure.\n- Maintain proper accessibility standards (e.g., keyboard navigation, ARIA labels).\n\nFeel free to deploy the application on [GitHub Pages](https://pages.github.com/), [Vercel](https://vercel.com/) or [Cloudflare pages](https://pages.cloudflare.com/)\n---\n\nBy completing this project, you will enhance your frontend development skills while building a functional and customizable Pomodoro Timer application. This knowledge will prepare you for more advanced projects and improve your ability to create interactive and user-friendly web applications.";
				}
				async function compiledContent$p() {
					return await html$p();
				}
				function getHeadings$p() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":2,"slug":"technical-requirements","text":"Technical Requirements"},{"depth":2,"slug":"feel-free-to-deploy-the-application-on-github-pages-vercel-or-cloudflare-pages","text":"Feel free to deploy the application on GitHub Pages, Vercel or Cloudflare pages"}];
				}

				const Content$p = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$p;
					content.file = file$p;
					content.url = url$p;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$p())}`;
				});

const __vite_glob_0_43 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$p,
	compiledContent: compiledContent$p,
	default: Content$p,
	file: file$p,
	frontmatter: frontmatter$p,
	getHeadings: getHeadings$p,
	rawContent: rawContent$p,
	url: url$p
}, Symbol.toStringTag, { value: 'Module' }));

const html$o = () => "<blockquote>\n<p>The goal of this project is to teach you how to style a website using CSS. You will take the structure from the <a href=\"/projects/basic-html-website\">previous HTML-only project</a> and apply various CSS techniques to enhance its appearance and responsiveness.</p>\n</blockquote>\n<p>In this project, you will style the HTML website structure you created previously <a href=\"/projects/basic-html-website\">in a different project</a>. The focus will be on learning how to use CSS to create responsive layouts, apply color and typography, and enhance the overall design of your website.</p>\n<p>Rough mockups of the website structure for mobile and desktop devices are given below. Do not worry about the design details i.e. colors backgrounds etc at this stage; we are not looking for a beautiful design, but a well-structured and responsive website. Just focus on making the layout same as the mockup and ensuring it looks good on different screen sizes.</p>\n<p><a href=\"https://assets.roadmap.sh/guest/portfolio-template-xdhki.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/portfolio-template-xdhki.png\" alt=\"Styled HTML Website\"></a></p>\n<h2 id=\"submission-requirements\">Submission Requirements</h2>\n<p>Your submission should include:</p>\n<ul>\n<li>A fully styled, responsive website with the same structure as the previous project.</li>\n<li>Consistent use of a chosen color scheme and typography.</li>\n<li>Proper use of CSS techniques like Flexbox, media queries, and the box model.</li>\n<li>A responsive navigation bar and well-styled contact form.</li>\n</ul>\n<h2 id=\"bonus-points\">Bonus Points</h2>\n<p>For bonus points, you can:</p>\n<ul>\n<li>Use <a href=\"https://fonts.google.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Google Fonts</a> to enhance the typography of your website.</li>\n<li>Look into <a href=\"https://pages.github.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">GitHub Pages</a> or <a href=\"https://pages.cloudflare.com/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Cloudflare Pages</a> to host your website for free.</li>\n<li>Add support for dark mode using CSS variables.</li>\n</ul>\n<hr>\n<p>After completing this project, you will have a solid understanding of how to style a basic HTML website using CSS. You can move on to more advanced topics, such as CSS animations, transitions, and grid layouts, in future projects.</p>";

				const frontmatter$o = {"title":"Personal Portfolio","description":"Convert the previous simple HTML website into a personal portfolio.","isNew":false,"sort":3,"difficulty":"beginner","nature":"CSS","skills":["CSS","Responsive Design","Box Model","Typography","Flexbox"],"seo":{"title":"Create a Personal Portfolio Website Using HTML and CSS","description":"Learn how to style a website using CSS by converting a simple HTML website into a personal portfolio.","keywords":["basic css","css project idea","responsive design","html and css"]},"roadmapIds":["frontend"]};
				const file$o = "/workspace/src/data/projects/portfolio-website.md";
				const url$o = undefined;
				function rawContent$o() {
					return "   \n                           \n                                                                                  \n            \n       \n                      \n             \n       \n         \n                       \n               \n                \n             \n    \n                                                                 \n                                                                                                                      \n           \n                 \n                        \n                         \n                    \n           \n              \n\n   \n\n> The goal of this project is to teach you how to style a website using CSS. You will take the structure from the [previous HTML-only project](/projects/basic-html-website) and apply various CSS techniques to enhance its appearance and responsiveness.\n\nIn this project, you will style the HTML website structure you created previously [in a different project](/projects/basic-html-website). The focus will be on learning how to use CSS to create responsive layouts, apply color and typography, and enhance the overall design of your website.\n\nRough mockups of the website structure for mobile and desktop devices are given below. Do not worry about the design details i.e. colors backgrounds etc at this stage; we are not looking for a beautiful design, but a well-structured and responsive website. Just focus on making the layout same as the mockup and ensuring it looks good on different screen sizes.\n\n[![Styled HTML Website](https://assets.roadmap.sh/guest/portfolio-template-xdhki.png)](https://assets.roadmap.sh/guest/portfolio-template-xdhki.png)\n\n## Submission Requirements\n\nYour submission should include:\n\n- A fully styled, responsive website with the same structure as the previous project.\n- Consistent use of a chosen color scheme and typography.\n- Proper use of CSS techniques like Flexbox, media queries, and the box model.\n- A responsive navigation bar and well-styled contact form.\n\n## Bonus Points\n\nFor bonus points, you can:\n\n- Use [Google Fonts](https://fonts.google.com/) to enhance the typography of your website.\n- Look into [GitHub Pages](https://pages.github.com/) or [Cloudflare Pages](https://pages.cloudflare.com/) to host your website for free.\n- Add support for dark mode using CSS variables.\n\n---\n\nAfter completing this project, you will have a solid understanding of how to style a basic HTML website using CSS. You can move on to more advanced topics, such as CSS animations, transitions, and grid layouts, in future projects.\n";
				}
				async function compiledContent$o() {
					return await html$o();
				}
				function getHeadings$o() {
					return [{"depth":2,"slug":"submission-requirements","text":"Submission Requirements"},{"depth":2,"slug":"bonus-points","text":"Bonus Points"}];
				}

				const Content$o = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$o;
					content.file = file$o;
					content.url = url$o;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$o())}`;
				});

const __vite_glob_0_44 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$o,
	compiledContent: compiledContent$o,
	default: Content$o,
	file: file$o,
	frontmatter: frontmatter$o,
	getHeadings: getHeadings$o,
	rawContent: rawContent$o,
	url: url$o
}, Symbol.toStringTag, { value: 'Module' }));

const html$n = () => "<p>In this project, we will be making a browser based quiz. The app will present users with a series of multiple-choice questions and after each question, the app will provide immediate feedback on whether the selected answer is correct or incorrect.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>As a developer, feel free to come up with a JSON based quiz the questions as you see fit.</p>\n<ul>\n<li>The user will be initially presented with a “start” button and some detail about the quiz</li>\n<li>When the user presses start they’re presented with the first multiple choice question.</li>\n<li>The questions are to be presented as <code>cards</code> with the answers being buttons on the card.</li>\n<li>When the user selects an answer, the answer buttons are to turn red or green depending on the result. It should also show what the correct answer was.</li>\n<li>If the user answers correctly, a score is to be incremented.</li>\n<li>At the end of the quiz, the user is presented with a final score and all of the results.</li>\n<li>Optionally add a timer of 1 minute to each question, if user doesn’t attempt the question in that time, it should skip to next question and score should be decremented by 1.</li>\n</ul>\n<p>You can use any frontend framework such as React, Vue or Angular and some state management library to handle the state.</p>\n<hr>\n<p>After finishing this project, you will have a good understanding of managing complex states and building an app of moderate complexity using any frontend framework.</p>";

				const frontmatter$n = {"title":"Quiz App","description":"Build a browser-based quiz application to test any knowledge","isNew":true,"sort":29,"difficulty":"intermediate","nature":"Frameworks","skills":["HTML","CSS","JavaScript","Frameworks"],"seo":{"title":"Quiz App","description":"Build a browser-based quiz application to test any knowledge","keywords":["frontend project","frontend frameworks","javascript","frontend project idea"]},"roadmapIds":["frontend"]};
				const file$n = "/workspace/src/data/projects/quiz-app.md";
				const url$n = undefined;
				function rawContent$n() {
					return "   \n                 \n                                                                           \n           \n        \n                          \n                    \n       \n          \n         \n                \n                \n    \n                   \n                                                                             \n           \n                        \n                           \n                  \n                             \n           \n              \n   \n\nIn this project, we will be making a browser based quiz. The app will present users with a series of multiple-choice questions and after each question, the app will provide immediate feedback on whether the selected answer is correct or incorrect.\n\n## Requirements\n\nAs a developer, feel free to come up with a JSON based quiz the questions as you see fit. \n\n- The user will be initially presented with a \"start\" button and some detail about the quiz\n- When the user presses start they're presented with the first multiple choice question.\n- The questions are to be presented as `cards` with the answers being buttons on the card.\n- When the user selects an answer, the answer buttons are to turn red or green depending on the result. It should also show what the correct answer was.\n- If the user answers correctly, a score is to be incremented.\n- At the end of the quiz, the user is presented with a final score and all of the results.\n- Optionally add a timer of 1 minute to each question, if user doesn't attempt the question in that time, it should skip to next question and score should be decremented by 1.\n\nYou can use any frontend framework such as React, Vue or Angular and some state management library to handle the state.\n\n---\n\nAfter finishing this project, you will have a good understanding of managing complex states and building an app of moderate complexity using any frontend framework.";
				}
				async function compiledContent$n() {
					return await html$n();
				}
				function getHeadings$n() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$n = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$n;
					content.file = file$n;
					content.url = url$n;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$n())}`;
				});

const __vite_glob_0_45 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$n,
	compiledContent: compiledContent$n,
	default: Content$n,
	file: file$n,
	frontmatter: frontmatter$n,
	getHeadings: getHeadings$n,
	rawContent: rawContent$n,
	url: url$n
}, Symbol.toStringTag, { value: 'Module' }));

const html$m = () => "<p>This project involves creating a backend system for a real-time leaderboard service. The service will allow users to compete in various games or activities, track their scores, and view their rankings on a leaderboard. The system will feature user authentication, score submission, real-time leaderboard updates, and score history tracking. Redis sorted sets will be used to manage and query the leaderboards efficiently.</p>\n<h2 id=\"project-requirements\">Project Requirements</h2>\n<p>You are to build an imaginary real-time leaderboard system that ranks users based on their scores in various games or activities. The system should meet the following requirements:</p>\n<ol>\n<li><strong>User Authentication</strong>: Users should be able to register and log in to the system.</li>\n<li><strong>Score Submission</strong>: Users should be able to submit their scores for different games or activities.</li>\n<li><strong>Leaderboard Updates</strong>: Display a global leaderboard showing the top users across all games.</li>\n<li><strong>User Rankings</strong>: Users should be able to view their rankings on the leaderboard.</li>\n<li><strong>Top Players Report:</strong> Generate reports on the top players for a specific period.</li>\n</ol>\n<h2 id=\"tip---use-redis-sorted-sets\">Tip - Use Redis Sorted Sets</h2>\n<ul>\n<li><strong>Leaderboard Storage:</strong> Use Redis sorted sets to store and manage leaderboards.</li>\n<li><strong>Real-Time Updates:</strong> Utilize Redis sorted sets for efficient real-time updates and queries.</li>\n<li><strong>Rank Queries:</strong> Use Redis commands to query user ranks and leaderboard positions.</li>\n</ul>\n<hr>\n<p>After finishing this project, you will have a good understanding of how to create a real-time leaderboard system that updates scores in real-time. You will also gain experience working with Redis sorted sets and implementing user authentication and score submission features.</p>";

				const frontmatter$m = {"title":"Real-time Leaderboard","description":"Create a real-time leaderboard system for ranking and scoring.","isNew":false,"sort":2000,"difficulty":"advanced","nature":"API","skills":["Programming Language","Database","Scheduling","Authentication"],"seo":{"title":"Real-time Leaderboard System Idea","description":"Create a real-time leaderboard system that updates scores in real-time.","keywords":["movie reservation system","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$m = "/workspace/src/data/projects/realtime-leaderboard-system.md";
				const url$m = undefined;
				function rawContent$m() {
					return "   \n                              \n                                                                             \n            \n          \n                      \n             \n       \n                          \n              \n                \n                    \n    \n                                            \n                                                                                        \n           \n                                \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nThis project involves creating a backend system for a real-time leaderboard service. The service will allow users to compete in various games or activities, track their scores, and view their rankings on a leaderboard. The system will feature user authentication, score submission, real-time leaderboard updates, and score history tracking. Redis sorted sets will be used to manage and query the leaderboards efficiently.\n\n## Project Requirements\n\nYou are to build an imaginary real-time leaderboard system that ranks users based on their scores in various games or activities. The system should meet the following requirements:\n\n1. **User Authentication**: Users should be able to register and log in to the system.\n2. **Score Submission**: Users should be able to submit their scores for different games or activities.\n3. **Leaderboard Updates**: Display a global leaderboard showing the top users across all games.\n4. **User Rankings**: Users should be able to view their rankings on the leaderboard.\n5. **Top Players Report:** Generate reports on the top players for a specific period.\n\n## Tip - Use Redis Sorted Sets\n\n- **Leaderboard Storage:** Use Redis sorted sets to store and manage leaderboards.\n- **Real-Time Updates:** Utilize Redis sorted sets for efficient real-time updates and queries.\n- **Rank Queries:** Use Redis commands to query user ranks and leaderboard positions.\n\n<hr />\n\nAfter finishing this project, you will have a good understanding of how to create a real-time leaderboard system that updates scores in real-time. You will also gain experience working with Redis sorted sets and implementing user authentication and score submission features.";
				}
				async function compiledContent$m() {
					return await html$m();
				}
				function getHeadings$m() {
					return [{"depth":2,"slug":"project-requirements","text":"Project Requirements"},{"depth":2,"slug":"tip---use-redis-sorted-sets","text":"Tip - Use Redis Sorted Sets"}];
				}

				const Content$m = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$m;
					content.file = file$m;
					content.url = url$m;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$m())}`;
				});

const __vite_glob_0_46 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$m,
	compiledContent: compiledContent$m,
	default: Content$m,
	file: file$m,
	frontmatter: frontmatter$m,
	getHeadings: getHeadings$m,
	rawContent: rawContent$m,
	url: url$m
}, Symbol.toStringTag, { value: 'Module' }));

const html$l = () => "<p>You are required to create a browser-based Reddit client that displays multiple subreddits in separate, customizable lanes. You’ll work with the Reddit JSON feed to fetch posts from different subreddits and display them in a dynamic, responsive layout.</p>\n<p>The application will allow users to add new subreddit lanes by entering a subreddit name. It will verify the existence of the subreddit, fetch its posts, and display them in a new lane. Each lane will show the subreddit’s posts, including titles, authors, and vote counts.</p>\n<p><a href=\"https://assets.roadmap.sh/guest/reddit-client-o876k.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/reddit-client-o876k.png\" alt=\"Multi-Lane Reddit Client\"></a></p>\n<p>To fetch data from reddit, you can use the JSON feed available at the following URL. You can also use the Reddit API to fetch more details about the posts, such as comments, upvotes, and more.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>https://www.reddit.com/r/{subreddit}.json</span></span></code></pre>\n<p>The application should handle loading states while fetching data, display error messages for invalid subreddits or API issues, and provide a smooth user experience when adding or removing lanes. You can use local storage to save the user’s custom lanes and restore them when the application is reloaded.</p>\n<p>This project will help you practice API integration, state management, asynchronous programming, and creating a responsive, dynamic user interface. It’s an excellent opportunity to enhance your skills in frontend development and working with real-time data.</p>";

				const frontmatter$l = {"title":"Reddit Client","description":"Create a Reddit client with customizable subreddit lanes.","isNew":false,"sort":26,"difficulty":"intermediate","nature":"API Integration","skills":["HTML","CSS","JavaScript","API Integration","DOM Manipulation","Asynchronous Programming"],"seo":{"title":"Build a Multi-Lane Reddit Client with JavaScript and Reddit API","description":"Learn how to create a dynamic browser-based Reddit client that allows users to add and view multiple subreddits in customizable lanes.","keywords":["reddit api","subreddit viewer","javascript project","multi-lane client"]},"roadmapIds":["frontend"]};
				const file$l = "/workspace/src/data/projects/reddit-client.md";
				const url$l = undefined;
				function rawContent$l() {
					return "   \n                      \n                                                                        \n            \n        \n                          \n                         \n       \n          \n         \n                \n                     \n                      \n                              \n    \n                                                                          \n                                                                                                                                                       \n           \n                  \n                        \n                          \n                         \n           \n              \n\n   \n\nYou are required to create a browser-based Reddit client that displays multiple subreddits in separate, customizable lanes. You'll work with the Reddit JSON feed to fetch posts from different subreddits and display them in a dynamic, responsive layout.\n\nThe application will allow users to add new subreddit lanes by entering a subreddit name. It will verify the existence of the subreddit, fetch its posts, and display them in a new lane. Each lane will show the subreddit's posts, including titles, authors, and vote counts.\n\n[![Multi-Lane Reddit Client](https://assets.roadmap.sh/guest/reddit-client-o876k.png)](https://assets.roadmap.sh/guest/reddit-client-o876k.png)\n\nTo fetch data from reddit, you can use the JSON feed available at the following URL. You can also use the Reddit API to fetch more details about the posts, such as comments, upvotes, and more.\n\n```plaintext\nhttps://www.reddit.com/r/{subreddit}.json\n```\n\nThe application should handle loading states while fetching data, display error messages for invalid subreddits or API issues, and provide a smooth user experience when adding or removing lanes. You can use local storage to save the user's custom lanes and restore them when the application is reloaded.\n\nThis project will help you practice API integration, state management, asynchronous programming, and creating a responsive, dynamic user interface. It's an excellent opportunity to enhance your skills in frontend development and working with real-time data.\n";
				}
				async function compiledContent$l() {
					return await html$l();
				}
				function getHeadings$l() {
					return [];
				}

				const Content$l = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$l;
					content.file = file$l;
					content.url = url$l;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$l())}`;
				});

const __vite_glob_0_47 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$l,
	compiledContent: compiledContent$l,
	default: Content$l,
	file: file$l,
	frontmatter: frontmatter$l,
	getHeadings: getHeadings$l,
	rawContent: rawContent$l,
	url: url$l
}, Symbol.toStringTag, { value: 'Module' }));

const html$k = () => "<p>You are required to create a textarea that tracks and displays the number of characters typed by the user, along with a maximum character limit. As the user types, the character count will update dynamically. Once the limit is reached, the textarea will prevent further input and the border will turn red to visually indicate the limit has been hit.</p>\n<p><a href=\"https://assets.roadmap.sh/guest/textarea-input-vdclr.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/textarea-input-vdclr.png\" alt=\"Restricted Textarea\"></a></p>\n<p>This project will help you practice manipulating input elements with JavaScript, handling user input events, and providing real-time feedback to enhance user experience.</p>";

				const frontmatter$k = {"title":"Restricted Textarea","description":"Create a textarea with live character count and a max character limit.","isNew":false,"sort":15,"difficulty":"beginner","nature":"JavaScript","skills":["HTML","CSS","JavaScript","DOM Manipulation"],"seo":{"title":"Build a Restricted Textarea with JavaScript","description":"Learn how to create a textarea with live character count and a maximum limit, with visual feedback as the limit is reached.","keywords":["character count","textarea limit","javascript input","html and css"]},"roadmapIds":["frontend"]};
				const file$k = "/workspace/src/data/projects/restricted-textarea.md";
				const url$k = undefined;
				function rawContent$k() {
					return "   \n                              \n                                                                                       \n              \n          \n                        \n                      \n         \n          \n         \n                \n                      \n    \n                                                        \n                                                                                                                                              \n           \n                       \n                      \n                        \n                    \n           \n              \n   \n\nYou are required to create a textarea that tracks and displays the number of characters typed by the user, along with a maximum character limit. As the user types, the character count will update dynamically. Once the limit is reached, the textarea will prevent further input and the border will turn red to visually indicate the limit has been hit.\n\n[![Restricted Textarea](https://assets.roadmap.sh/guest/textarea-input-vdclr.png)](https://assets.roadmap.sh/guest/textarea-input-vdclr.png)\n\nThis project will help you practice manipulating input elements with JavaScript, handling user input events, and providing real-time feedback to enhance user experience.";
				}
				async function compiledContent$k() {
					return await html$k();
				}
				function getHeadings$k() {
					return [];
				}

				const Content$k = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$k;
					content.file = file$k;
					content.url = url$k;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$k())}`;
				});

const __vite_glob_0_48 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$k,
	compiledContent: compiledContent$k,
	default: Content$k,
	file: file$k,
	frontmatter: frontmatter$k,
	getHeadings: getHeadings$k,
	rawContent: rawContent$k,
	url: url$k
}, Symbol.toStringTag, { value: 'Module' }));

const html$j = () => "<p>Build a scalable e-commerce platform using microservices architecture and Docker. The platform will handle various aspects of an online store, such as product catalog management, user authentication, shopping cart, payment processing, and order management. Each of these features will be implemented as separate microservices, allowing for independent development, deployment, and scaling.</p>\n<h2 id=\"core-microservices\">Core Microservices:</h2>\n<p>Here are the sample core microservices that you can implement for your e-commerce platform:</p>\n<ul>\n<li><strong>User Service:</strong> Handles user registration, authentication, and profile management.</li>\n<li><strong>Product Catalog Service:</strong> Manages product listings, categories, and inventory.</li>\n<li><strong>Shopping Cart Service:</strong> Manages users’ shopping carts, including adding/removing items and updating quantities.</li>\n<li><strong>Order Service:</strong> Processes orders, including placing orders, tracking order status, and managing order history.</li>\n<li><strong>Payment Service:</strong>  Handles payment processing, integrating with external payment gateways (e.g., Stripe, PayPal).</li>\n<li><strong>Notification Service:</strong> Sends email and SMS notifications for various events (e.g., order confirmation, shipping updates). You can use third-party services like Twilio or SendGrid for this purpose.</li>\n</ul>\n<h2 id=\"additional-components\"><strong>Additional Components:</strong></h2>\n<p>In addition to the core microservices, you can include the following components to enhance the scalability, reliability, and manageability of your e-commerce platform:</p>\n<ul>\n<li><strong>API Gateway:</strong> Serves as the entry point for all client requests, routing them to the appropriate microservice. It might be worth looking into Kong, Traefik, or NGINX for this purpose.</li>\n<li><strong>Service Discovery:</strong> Automatically detects and manages service instances. You can use Consul or Eureka for service discovery.</li>\n<li><strong>Centralized Logging:</strong> Aggregates logs from all microservices for easy monitoring and debugging. You can use the ELK stack (Elasticsearch, Logstash, Kibana) for this purpose.</li>\n<li><strong>Docker &#x26; Docker Compose:</strong> Containerize each microservice and manages their orchestration, networking, and scaling. Docker Compose can be used to define and manage multi-container applications.</li>\n<li><strong>CI/CD Pipeline:</strong> Automates the build, test, and deployment process of each microservice. You can use Jenkins, GitLab CI, or GitHub Actions for this purpose.</li>\n</ul>\n<h2 id=\"steps-to-get-started\">Steps to Get Started:</h2>\n<p>Here’s a high-level roadmap to guide you through the development of your scalable e-commerce platform:</p>\n<ul>\n<li><strong>Set up Docker and Docker Compose:</strong> Create Dockerfiles for each microservice. Use Docker Compose to define and manage multi-container applications.</li>\n<li><strong>Develop Microservices:</strong> Start with a simple MVP (Minimum Viable Product) for each service, then iterate by adding more features.</li>\n<li><strong>Integrate Services:</strong> Use REST APIs or gRPC for communication between microservices. Implement an API Gateway to handle external requests and route them to the appropriate services.</li>\n<li><strong>Implement Service Discovery:</strong> Use Consul or Eureka to enable dynamic service discovery.</li>\n<li><strong>Set up Monitoring and Logging:</strong> Use tools like Prometheus and Grafana for monitoring. Set up the ELK stack for centralized logging.</li>\n<li><strong>Deploy the Platform:</strong> Use Docker Swarm or Kubernetes for production deployment. Implement auto-scaling and load balancing.</li>\n<li><strong>CI/CD Integration:</strong> Automate testing and deployment using Jenkins or GitLab CI.</li>\n</ul>\n<hr>\n<p>This project offers a comprehensive approach to building a modern, scalable e-commerce platform and will give you hands-on experience with Docker, microservices, and related technologies. After completing this project, you’ll have a solid understanding of how to design, develop, and deploy complex distributed systems.</p>";

				const frontmatter$j = {"title":"Scalable E-Commerce Platform","description":"Build an e-commerce platform using microservices architecture.","isNew":false,"sort":2200,"difficulty":"advanced","nature":"API","skills":["Microservices","Database","Docker","Authentication"],"seo":{"title":"Scalable E-Commerce Platform Project Idea","description":"Build a scalable e-commerce platform using microservices architecture and Docker.","keywords":["e-commerce platform","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$j = "/workspace/src/data/projects/scalable-ecommerce-platform.md";
				const url$j = undefined;
				function rawContent$j() {
					return "   \n                                     \n                                                                             \n            \n          \n                      \n             \n       \n                   \n              \n            \n                    \n    \n                                                    \n                                                                                                  \n           \n                           \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nBuild a scalable e-commerce platform using microservices architecture and Docker. The platform will handle various aspects of an online store, such as product catalog management, user authentication, shopping cart, payment processing, and order management. Each of these features will be implemented as separate microservices, allowing for independent development, deployment, and scaling.\n\n## Core Microservices:\n\nHere are the sample core microservices that you can implement for your e-commerce platform:\n\n- **User Service:** Handles user registration, authentication, and profile management.\n- **Product Catalog Service:** Manages product listings, categories, and inventory.\n- **Shopping Cart Service:** Manages users' shopping carts, including adding/removing items and updating quantities.\n- **Order Service:** Processes orders, including placing orders, tracking order status, and managing order history.\n- **Payment Service:**  Handles payment processing, integrating with external payment gateways (e.g., Stripe, PayPal).\n- **Notification Service:** Sends email and SMS notifications for various events (e.g., order confirmation, shipping updates). You can use third-party services like Twilio or SendGrid for this purpose.\n\n## **Additional Components:**\n\nIn addition to the core microservices, you can include the following components to enhance the scalability, reliability, and manageability of your e-commerce platform:\n\n- **API Gateway:** Serves as the entry point for all client requests, routing them to the appropriate microservice. It might be worth looking into Kong, Traefik, or NGINX for this purpose.\n- **Service Discovery:** Automatically detects and manages service instances. You can use Consul or Eureka for service discovery.\n- **Centralized Logging:** Aggregates logs from all microservices for easy monitoring and debugging. You can use the ELK stack (Elasticsearch, Logstash, Kibana) for this purpose.\n- **Docker & Docker Compose:** Containerize each microservice and manages their orchestration, networking, and scaling. Docker Compose can be used to define and manage multi-container applications.\n- **CI/CD Pipeline:** Automates the build, test, and deployment process of each microservice. You can use Jenkins, GitLab CI, or GitHub Actions for this purpose.\n\n## Steps to Get Started:\n\nHere's a high-level roadmap to guide you through the development of your scalable e-commerce platform:\n\n- **Set up Docker and Docker Compose:** Create Dockerfiles for each microservice. Use Docker Compose to define and manage multi-container applications.\n- **Develop Microservices:** Start with a simple MVP (Minimum Viable Product) for each service, then iterate by adding more features.\n- **Integrate Services:** Use REST APIs or gRPC for communication between microservices. Implement an API Gateway to handle external requests and route them to the appropriate services.\n- **Implement Service Discovery:** Use Consul or Eureka to enable dynamic service discovery.\n- **Set up Monitoring and Logging:** Use tools like Prometheus and Grafana for monitoring. Set up the ELK stack for centralized logging.\n- **Deploy the Platform:** Use Docker Swarm or Kubernetes for production deployment. Implement auto-scaling and load balancing.\n- **CI/CD Integration:** Automate testing and deployment using Jenkins or GitLab CI.\n\n<hr />\n\nThis project offers a comprehensive approach to building a modern, scalable e-commerce platform and will give you hands-on experience with Docker, microservices, and related technologies. After completing this project, you'll have a solid understanding of how to design, develop, and deploy complex distributed systems.";
				}
				async function compiledContent$j() {
					return await html$j();
				}
				function getHeadings$j() {
					return [{"depth":2,"slug":"core-microservices","text":"Core Microservices:"},{"depth":2,"slug":"additional-components","text":"Additional Components:"},{"depth":2,"slug":"steps-to-get-started","text":"Steps to Get Started:"}];
				}

				const Content$j = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$j;
					content.file = file$j;
					content.url = url$j;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$j())}`;
				});

const __vite_glob_0_49 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$j,
	compiledContent: compiledContent$j,
	default: Content$j,
	file: file$j,
	frontmatter: frontmatter$j,
	getHeadings: getHeadings$j,
	rawContent: rawContent$j,
	url: url$j
}, Symbol.toStringTag, { value: 'Module' }));

const html$i = () => "<p>Goal of this project is to write a script to analyse server performance stats.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You are required to write a script <code>server-stats.sh</code> that can analyse basic server performance stats. You should be able to run the script on any Linux server and it should give you the following stats:</p>\n<ul>\n<li>Total CPU usage</li>\n<li>Total memory usage (Free vs Used including percentage)</li>\n<li>Total disk usage (Free vs Used including percentage)</li>\n<li>Top 5 processes by CPU usage</li>\n<li>Top 5 processes by memory usage</li>\n</ul>\n<p>Stretch goal: Feel free to optionally add more stats such as os version, uptime, load average, logged in users, failed login attempts etc.</p>\n<hr>\n<p>Once you have completed this project, you will have some basic knowledge on how to analyse server performance stats in order to debug and get a better understanding of the server’s performance.</p>";

				const frontmatter$i = {"title":"Server Performance Stats","description":"Write a script to analyse basic server performance stats.","isNew":true,"sort":100,"difficulty":"beginner","nature":"CLI","skills":["linux","bash","shell scripting"],"seo":{"title":"Server Performance Stats","description":"Write a script to analyse server performance stats.","keywords":["Server Stats","Server Performance Stats"]},"roadmapIds":["devops"]};
				const file$i = "/workspace/src/data/projects/server-stats.md";
				const url$i = undefined;
				function rawContent$i() {
					return "   \n                                 \n                                                                        \n           \n         \n                      \n             \n       \n           \n          \n                     \n    \n                                   \n                                                                    \n           \n                    \n                                \n           \n            \n   \n\nGoal of this project is to write a script to analyse server performance stats.\n\n## Requirements\n\nYou are required to write a script `server-stats.sh` that can analyse basic server performance stats. You should be able to run the script on any Linux server and it should give you the following stats:\n\n- Total CPU usage\n- Total memory usage (Free vs Used including percentage)\n- Total disk usage (Free vs Used including percentage)\n- Top 5 processes by CPU usage\n- Top 5 processes by memory usage\n\nStretch goal: Feel free to optionally add more stats such as os version, uptime, load average, logged in users, failed login attempts etc.\n\n<hr />\n\nOnce you have completed this project, you will have some basic knowledge on how to analyse server performance stats in order to debug and get a better understanding of the server's performance.";
				}
				async function compiledContent$i() {
					return await html$i();
				}
				function getHeadings$i() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$i = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$i;
					content.file = file$i;
					content.url = url$i;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$i())}`;
				});

const __vite_glob_0_50 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$i,
	compiledContent: compiledContent$i,
	default: Content$i,
	file: file$i,
	frontmatter: frontmatter$i,
	getHeadings: getHeadings$i,
	rawContent: rawContent$i,
	url: url$i
}, Symbol.toStringTag, { value: 'Module' }));

const html$h = () => "<p>The goal of this project is to help you understand how service discovery works and how to setup Consul to manage your services. The learning objectives are:</p>\n<ul>\n<li>Understand how services register with Consul</li>\n<li>Learn how to query Consul for service information</li>\n<li>Implement a basic service discovery mechanism</li>\n<li>Understand service-to-service communication in a microservices architecture</li>\n</ul>\n<h2 id=\"requirements\">Requirements</h2>\n<p>The project has multiple parts:</p>\n<h3 id=\"dummy-services\">Dummy Services</h3>\n<p>You are required to create 3 dummy services, each service will just have a dummy endpoint (e.g. <code>/info</code>) that returns the current timestamp and the service name (e.g. Service A, Service B and Service C). Services should register themselves with Consul on startup.</p>\n<h3 id=\"api-gateway\">API Gateway</h3>\n<p>API gateway acts as a single point of entry for the application. It will be responsible for discovering the services using Consul’s DNS interface or the API. The API gateway should be able to route requests to the appropriate service.</p>\n<h3 id=\"consul\">Consul</h3>\n<p>Consul will be used to store the service information and to provide a single point of contact for the API gateway to discover the services.</p>\n<hr>\n<p>Once you have completed the project, you should have a basic understanding of how service discovery works and how to setup Consul to manage your services.</p>";

				const frontmatter$h = {"title":"Service Discovery","description":"Setup service discovery with dummy services and Consul","isNew":false,"sort":2000,"difficulty":"advanced","nature":"DevOps","skills":["devops","consul","api-gateway","monitoring"],"seo":{"title":"Service Discovery","description":"Setup service discovery with dummy services and Consul","keywords":["Service Discovery","DevOps","Consul"]},"roadmapIds":["devops"]};
				const file$h = "/workspace/src/data/projects/service-discovery.md";
				const url$h = undefined;
				function rawContent$h() {
					return "   \n                          \n                                                                     \n            \n          \n                      \n                \n       \n            \n            \n                 \n                \n    \n                            \n                                                                       \n           \n                         \n              \n              \n           \n            \n   \n\nThe goal of this project is to help you understand how service discovery works and how to setup Consul to manage your services. The learning objectives are:\n\n- Understand how services register with Consul\n- Learn how to query Consul for service information\n- Implement a basic service discovery mechanism\n- Understand service-to-service communication in a microservices architecture\n\n## Requirements\n\nThe project has multiple parts:\n\n### Dummy Services\n\nYou are required to create 3 dummy services, each service will just have a dummy endpoint (e.g. `/info`) that returns the current timestamp and the service name (e.g. Service A, Service B and Service C). Services should register themselves with Consul on startup.\n\n### API Gateway\n\nAPI gateway acts as a single point of entry for the application. It will be responsible for discovering the services using Consul's DNS interface or the API. The API gateway should be able to route requests to the appropriate service.\n\n### Consul\n\nConsul will be used to store the service information and to provide a single point of contact for the API gateway to discover the services.\n\n<hr />\n\nOnce you have completed the project, you should have a basic understanding of how service discovery works and how to setup Consul to manage your services.";
				}
				async function compiledContent$h() {
					return await html$h();
				}
				function getHeadings$h() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"dummy-services","text":"Dummy Services"},{"depth":3,"slug":"api-gateway","text":"API Gateway"},{"depth":3,"slug":"consul","text":"Consul"}];
				}

				const Content$h = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$h;
					content.file = file$h;
					content.url = url$h;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$h())}`;
				});

const __vite_glob_0_51 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$h,
	compiledContent: compiledContent$h,
	default: Content$h,
	file: file$h,
	frontmatter: frontmatter$h,
	getHeadings: getHeadings$h,
	rawContent: rawContent$h,
	url: url$h
}, Symbol.toStringTag, { value: 'Module' }));

const html$g = () => "<p>The goal of this project is to learn the basics of monitoring. It is to help you understand how to monitor the health of a system and how to set up a basic monitoring dashboard.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>In this project, you will set up a basic monitoring dashboard using <a href=\"https://github.com/netdata/netdata\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Netdata</a>. Netdata is a powerful, real-time performance and health monitoring tool for systems and applications.</p>\n<ul>\n<li>Install Netdata on a Linux system.</li>\n<li>Configure Netdata to monitor basic system metrics such as CPU, memory usage, and disk I/O.</li>\n<li>Access the Netdata dashboard through a web browser.</li>\n<li>Customize at least one aspect of the dashboard (e.g., add a new chart or modify an existing one).</li>\n<li>Set up an alert for a specific metric (e.g., CPU usage above 80%).</li>\n</ul>\n<p>You can learn more about installing and configuring Netdata <a href=\"https://learn.netdata.cloud/docs/agent/packaging/installer\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">here</a>.</p>\n<p>You can follow the above steps manually to get the understanding of the project. Once you have a working setup, create a few shell scripts to automate the setup and test the monitoring dashboard.</p>\n<ul>\n<li><code>setup.sh</code>: A shell script to install Netdata on a new system.</li>\n<li><code>test_dashboard.sh</code>: Script to put some load on the system and test the monitoring dashboard.</li>\n<li><code>cleanup.sh</code>: Script to clean up the system and remove the Netdata agent.</li>\n</ul>\n<p>The goal with this automation is to slowly get accustomed to DevOps practices and CI/CD pipelines.</p>\n<hr>\n<p>Once you have finished this project, you will have a basic understanding of how to set up a monitoring dashboard and how to automate the setup and testing processes. We will revisit the topic of monitoring and look at more advanced tools and techniques in later projects.</p>";

				const frontmatter$g = {"title":"Simple Monitoring","description":"Set up a basic monitoring dashboard using Netdata.","isNew":false,"sort":800,"difficulty":"beginner","nature":"Monitoring","skills":["monitoring","netdata","linux","devops"],"seo":{"title":"Simple Monitoring","description":"Learn how to set up a basic monitoring dashboard using Netdata.","keywords":["monitoring dashboard","netdata","system monitoring","devops"]},"roadmapIds":["devops"]};
				const file$g = "/workspace/src/data/projects/simple-monitoring-dashboard.md";
				const url$g = undefined;
				function rawContent$g() {
					return "   \n                          \n                                                                 \n            \n         \n                      \n                    \n       \n                \n             \n           \n            \n    \n                            \n                                                                                \n           \n                            \n               \n                         \n              \n           \n            \n   \n\nThe goal of this project is to learn the basics of monitoring. It is to help you understand how to monitor the health of a system and how to set up a basic monitoring dashboard.\n\n## Requirements\n\nIn this project, you will set up a basic monitoring dashboard using [Netdata](https://github.com/netdata/netdata). Netdata is a powerful, real-time performance and health monitoring tool for systems and applications.\n\n- Install Netdata on a Linux system.\n- Configure Netdata to monitor basic system metrics such as CPU, memory usage, and disk I/O.\n- Access the Netdata dashboard through a web browser.\n- Customize at least one aspect of the dashboard (e.g., add a new chart or modify an existing one).\n- Set up an alert for a specific metric (e.g., CPU usage above 80%).\n\nYou can learn more about installing and configuring Netdata [here](https://learn.netdata.cloud/docs/agent/packaging/installer).\n\nYou can follow the above steps manually to get the understanding of the project. Once you have a working setup, create a few shell scripts to automate the setup and test the monitoring dashboard.\n\n- `setup.sh`: A shell script to install Netdata on a new system.\n- `test_dashboard.sh`: Script to put some load on the system and test the monitoring dashboard.\n- `cleanup.sh`: Script to clean up the system and remove the Netdata agent.\n\nThe goal with this automation is to slowly get accustomed to DevOps practices and CI/CD pipelines.\n\n<hr />\n\nOnce you have finished this project, you will have a basic understanding of how to set up a monitoring dashboard and how to automate the setup and testing processes. We will revisit the topic of monitoring and look at more advanced tools and techniques in later projects.\n";
				}
				async function compiledContent$g() {
					return await html$g();
				}
				function getHeadings$g() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$g = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$g;
					content.file = file$g;
					content.url = url$g;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$g())}`;
				});

const __vite_glob_0_52 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$g,
	compiledContent: compiledContent$g,
	default: Content$g,
	file: file$g,
	frontmatter: frontmatter$g,
	getHeadings: getHeadings$g,
	rawContent: rawContent$g,
	url: url$g
}, Symbol.toStringTag, { value: 'Module' }));

const html$f = () => "<p>This project is designed to introduce you to basic DOM manipulation and event handling in JavaScript.</p>\n<p>You are required to create a simple tabs functionality using HTML, CSS, and basic JavaScript. The page will have four tabs, with the first tab being active by default. When the user clicks on another tab, the content of the current tab will be hidden, and the content of the selected tab will be displayed.</p>\n<p><a href=\"https://assets.roadmap.sh/guest/simple-tabs-8e6gy.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/simple-tabs-8e6gy.png\" alt=\"Tabs Component Mockup\"></a></p>\n<p>This project will help you practice selecting elements with JavaScript, listen for click events, and manipulate the dom to show or hide relevant tab content.</p>";

				const frontmatter$f = {"title":"Tabs","description":"Create a simple tabs component using HTML, CSS, and JavaScript.","isNew":false,"sort":10,"difficulty":"beginner","nature":"JavaScript","skills":["HTML","CSS","JavaScript","DOM Manipulation"],"seo":{"title":"Create a Tabs Functionality Using HTML, CSS, and JavaScript","description":"Learn how to build a tabs component with basic JavaScript for switching between content sections.","keywords":["javascript tabs","dynamic content","html and css","javascript project"]},"roadmapIds":["frontend"]};
				const file$f = "/workspace/src/data/projects/simple-tabs.md";
				const url$f = undefined;
				function rawContent$f() {
					return "   \n               \n                                                                                \n              \n          \n                        \n                    \n         \n            \n           \n                \n                      \n      \n                                                                        \n                                                                                                                    \n             \n                       \n                       \n                    \n                            \n             \n                \n\n   \n\nThis project is designed to introduce you to basic DOM manipulation and event handling in JavaScript.\n\nYou are required to create a simple tabs functionality using HTML, CSS, and basic JavaScript. The page will have four tabs, with the first tab being active by default. When the user clicks on another tab, the content of the current tab will be hidden, and the content of the selected tab will be displayed.\n\n[![Tabs Component Mockup](https://assets.roadmap.sh/guest/simple-tabs-8e6gy.png)](https://assets.roadmap.sh/guest/simple-tabs-8e6gy.png)\n\nThis project will help you practice selecting elements with JavaScript, listen for click events, and manipulate the dom to show or hide relevant tab content.";
				}
				async function compiledContent$f() {
					return await html$f();
				}
				function getHeadings$f() {
					return [];
				}

				const Content$f = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$f;
					content.file = file$f;
					content.url = url$f;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$f())}`;
				});

const __vite_glob_0_53 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$f,
	compiledContent: compiledContent$f,
	default: Content$f,
	file: file$f,
	frontmatter: frontmatter$f,
	getHeadings: getHeadings$f,
	rawContent: rawContent$f,
	url: url$f
}, Symbol.toStringTag, { value: 'Module' }));

const html$e = () => "<blockquote>\n<p>The goal of this project is to teach you how to create a structured, single-page CV using only HTML. You will focus on laying out your education, skills, and career history in a clean, semantic manner. Styling will be addressed in a later project.</p>\n</blockquote>\n<p>In this project, you are required to create a single-page CV (Curriculum Vitae) using only HTML. Your webpage should look like the following image:</p>\n<p><img src=\"https://assets.roadmap.sh/guest/resume-template-zyl70.png\" alt=\"Single-Page HTML CV\"></p>\n<p>Key requirements for this project:</p>\n<ul>\n<li><strong>Semantic HTML</strong>: Use appropriate HTML tags to structure your CV.</li>\n<li><strong>SEO Meta Tags</strong>: Include essential meta tags for SEO.</li>\n<li><strong>Open Graph (OG) Tags</strong>: Add OG tags for better social media sharing.</li>\n<li><strong>Favicon</strong>: Add a favicon for your CV page.</li>\n</ul>\n<p>The structure of your CV should be easily understandable and ready for styling in a future project.</p>\n<h3 id=\"submission-checklist\">Submission Checklist:</h3>\n<ul>\n<li>Semantically correct HTML structure.</li>\n<li>Single-page layout with sections for education, skills, and career history.</li>\n<li>SEO meta tags in the head section.</li>\n<li>OG tags for better social media sharing.</li>\n<li>A favicon linked in the head section.</li>\n</ul>\n<hr>\n<p>By completing this project, you’ll gain a solid understanding of how to create a single-page CV using HTML, apply basic SEO principles, and prepare your webpage for future styling. This foundation will enable you to move on to styling the CV using CSS in subsequent projects.</p>";

				const frontmatter$e = {"title":"Single-Page CV","description":"Create a single-page HTML CV to showcase your career history","isNew":false,"sort":1,"difficulty":"beginner","nature":"HTML","skills":["HTML","Semantic HTML","Layout","SEO"],"seo":{"title":"Single-Page HTML CV Project","description":"Create a simple single-page HTML CV that displays your education, skills, and career history.","keywords":["html cv","single-page cv","html resume"]},"roadmapIds":["frontend"]};
				const file$e = "/workspace/src/data/projects/single-page-cv.md";
				const url$e = undefined;
				function rawContent$e() {
					return "   \n                       \n                                                                           \n            \n       \n                      \n              \n       \n          \n                   \n            \n         \n    \n                                      \n                                                                                                              \n           \n               \n                      \n                   \n           \n              \n   \n\n> The goal of this project is to teach you how to create a structured, single-page CV using only HTML. You will focus on laying out your education, skills, and career history in a clean, semantic manner. Styling will be addressed in a later project.\n\nIn this project, you are required to create a single-page CV (Curriculum Vitae) using only HTML. Your webpage should look like the following image:\n\n![Single-Page HTML CV](https://assets.roadmap.sh/guest/resume-template-zyl70.png)\n\nKey requirements for this project:\n\n- **Semantic HTML**: Use appropriate HTML tags to structure your CV.\n- **SEO Meta Tags**: Include essential meta tags for SEO.\n- **Open Graph (OG) Tags**: Add OG tags for better social media sharing.\n- **Favicon**: Add a favicon for your CV page.\n\nThe structure of your CV should be easily understandable and ready for styling in a future project.\n\n### Submission Checklist:\n\n- Semantically correct HTML structure.\n- Single-page layout with sections for education, skills, and career history.\n- SEO meta tags in the head section.\n- OG tags for better social media sharing.\n- A favicon linked in the head section.\n\n<hr />\n\nBy completing this project, you'll gain a solid understanding of how to create a single-page CV using HTML, apply basic SEO principles, and prepare your webpage for future styling. This foundation will enable you to move on to styling the CV using CSS in subsequent projects.\n";
				}
				async function compiledContent$e() {
					return await html$e();
				}
				function getHeadings$e() {
					return [{"depth":3,"slug":"submission-checklist","text":"Submission Checklist:"}];
				}

				const Content$e = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$e;
					content.file = file$e;
					content.url = url$e;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$e())}`;
				});

const __vite_glob_0_54 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$e,
	compiledContent: compiledContent$e,
	default: Content$e,
	file: file$e,
	frontmatter: frontmatter$e,
	getHeadings: getHeadings$e,
	rawContent: rawContent$e,
	url: url$e
}, Symbol.toStringTag, { value: 'Module' }));

const html$d = () => "<p>The goal of this project is to learn and practice the basics of Linux. You are required to setup a remote linux server and configure it to allow SSH connections.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You are required to setup a remote linux server and configure it to allow SSH connections.</p>\n<ul>\n<li>Register and setup a remote linux server on any provider e.g. a simple droplet on <a href=\"https://m.do.co/c/b29aa8845df8\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">DigitalOcean</a> which gives you $200 in free credits with the link. Alternatively, use AWS or any other provider.</li>\n<li>Create <strong>two new SSH key pairs</strong> and add them to your server.</li>\n<li>You should be able to connect to your server using both SSH keys.</li>\n</ul>\n<p>You should be able to use the following command to connect to your server using both SSH keys.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#50FA7B\">ssh</span><span style=\"color:#BD93F9\"> -i</span><span style=\"color:#FF79C6\"> &#x3C;</span><span style=\"color:#F1FA8C\">path-to-private-ke</span><span style=\"color:#F8F8F2\">y</span><span style=\"color:#FF79C6\">></span><span style=\"color:#F1FA8C\"> user@server-ip</span></span></code></pre>\n<p>Also, look into setting up the configuration in <code>~/.ssh/config</code> to allow you to connect to your server using the following command.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#50FA7B\">ssh</span><span style=\"color:#FF79C6\"> &#x3C;</span><span style=\"color:#F1FA8C\">alia</span><span style=\"color:#F8F8F2\">s</span><span style=\"color:#FF79C6\">></span></span></code></pre>\n<p>The only outcome of this project is that you should be able to SSH into your server using both SSH keys. Future projects will cover other aspects of server setup and configuration.</p>\n<p>Stretch goal: install and configure <code>fail2ban</code> to prevent brute force attacks.</p>\n<hr>\n<h2 id=\"important-note-for-solution-submission\">Important Note for Solution Submission</h2>\n<p><strong>Do not push your private key to any public repository.</strong> The solution to this project should just contain one <code>README.md</code> file with the steps you took to complete the project.</p>\n<hr>\n<p>After completing this project, you will have a basic understanding of how to setup a remote linux server and configure it to allow SSH connections. Future projects will cover other aspects of server setup.</p>";

				const frontmatter$d = {"title":"SSH Remote Server Setup","description":"Setup a basic remote linux server and configure it to allow SSH.","isNew":false,"sort":500,"difficulty":"beginner","nature":"SSH","skills":["devops","linux"],"seo":{"title":"SSH Remote Server Setup","description":"Setup a remote linux server and configure it to allow SSH.","keywords":["ssh","linux","server"]},"roadmapIds":["devops"]};
				const file$d = "/workspace/src/data/projects/ssh-remote-server-setup.md";
				const url$d = undefined;
				function rawContent$d() {
					return "   \n                                \n                                                                               \n            \n         \n                      \n             \n       \n            \n           \n    \n                                  \n                                                                           \n           \n           \n             \n              \n           \n            \n   \n\nThe goal of this project is to learn and practice the basics of Linux. You are required to setup a remote linux server and configure it to allow SSH connections.\n\n## Requirements\n\nYou are required to setup a remote linux server and configure it to allow SSH connections.\n\n- Register and setup a remote linux server on any provider e.g. a simple droplet on [DigitalOcean](https://m.do.co/c/b29aa8845df8) which gives you $200 in free credits with the link. Alternatively, use AWS or any other provider.\n- Create **two new SSH key pairs** and add them to your server.\n- You should be able to connect to your server using both SSH keys.\n\nYou should be able to use the following command to connect to your server using both SSH keys.\n\n```bash\nssh -i <path-to-private-key> user@server-ip\n``` \n\nAlso, look into setting up the configuration in `~/.ssh/config` to allow you to connect to your server using the following command.\n\n```bash\nssh <alias>\n```\n\nThe only outcome of this project is that you should be able to SSH into your server using both SSH keys. Future projects will cover other aspects of server setup and configuration.\n\nStretch goal: install and configure `fail2ban` to prevent brute force attacks.\n\n<hr />\n\n## Important Note for Solution Submission\n\n**Do not push your private key to any public repository.** The solution to this project should just contain one `README.md` file with the steps you took to complete the project.\n\n<hr />\n\nAfter completing this project, you will have a basic understanding of how to setup a remote linux server and configure it to allow SSH connections. Future projects will cover other aspects of server setup.";
				}
				async function compiledContent$d() {
					return await html$d();
				}
				function getHeadings$d() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":2,"slug":"important-note-for-solution-submission","text":"Important Note for Solution Submission"}];
				}

				const Content$d = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$d;
					content.file = file$d;
					content.url = url$d;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$d())}`;
				});

const __vite_glob_0_55 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$d,
	compiledContent: compiledContent$d,
	default: Content$d,
	file: file$d,
	frontmatter: frontmatter$d,
	getHeadings: getHeadings$d,
	rawContent: rawContent$d,
	url: url$d
}, Symbol.toStringTag, { value: 'Module' }));

const html$c = () => "<p>The goal of this project is to help you understand the basics of setting up a web server using a basic static site served using Nginx. You will also learn how to use <code>rsync</code> to deploy your changes to the server.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>Here are the requirements for this project:</p>\n<ul>\n<li>Register and setup a remote linux server on any provider e.g. a simple droplet on <a href=\"https://m.do.co/c/b29aa8845df8\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">DigitalOcean</a> which gives you $200 in free credits with the link. Alternatively, use AWS or any other provider.</li>\n<li>Make sure that you can connect to your server using SSH.</li>\n<li>Install and configure <code>nginx</code> to serve a static site.</li>\n<li>Create a simple webpage with basic HTML, CSS and image files.</li>\n<li>Use <code>rsync</code> to update a remote server with a local static site.</li>\n<li>If you have a domain name, point it to your server and serve your static site from there. Alternatively, set up your nginx server to serve the static site from the server’s IP address.</li>\n</ul>\n<p>You can write a script <code>deploy.sh</code> which when you run will use <code>rsync</code> to sync your static site to the server.</p>\n<hr>\n<p>Once you have completed the project, you should have a basic understanding of how to setup a web server using a basic static site served using Nginx. You should also have a basic understanding of how to use <code>rsync</code> to deploy your changes to the server.</p>";

				const frontmatter$c = {"title":"Static Site Server","description":"Setup a basic linux server and configure it to serve a static site.","isNew":false,"sort":600,"difficulty":"beginner","nature":"Nginx","skills":["nginx","SSH","linux","devops","rsync"],"seo":{"title":"Static Site Server","description":"Setup a basic linux server and configure it to serve a static site.","keywords":["static site server","nginx","SSH","linux","devops","rsync"]},"roadmapIds":["devops"]};
				const file$c = "/workspace/src/data/projects/static-site-server.md";
				const url$c = undefined;
				function rawContent$c() {
					return "   \n                           \n                                                                                  \n            \n         \n                      \n               \n       \n           \n         \n           \n            \n           \n    \n                             \n                                                                                    \n           \n                          \n             \n           \n             \n              \n             \n           \n            \n   \n\nThe goal of this project is to help you understand the basics of setting up a web server using a basic static site served using Nginx. You will also learn how to use `rsync` to deploy your changes to the server.\n\n## Requirements\n\nHere are the requirements for this project:\n\n- Register and setup a remote linux server on any provider e.g. a simple droplet on [DigitalOcean](https://m.do.co/c/b29aa8845df8) which gives you $200 in free credits with the link. Alternatively, use AWS or any other provider.\n- Make sure that you can connect to your server using SSH.\n- Install and configure `nginx` to serve a static site.\n- Create a simple webpage with basic HTML, CSS and image files.\n- Use `rsync` to update a remote server with a local static site.\n- If you have a domain name, point it to your server and serve your static site from there. Alternatively, set up your nginx server to serve the static site from the server's IP address.\n\nYou can write a script `deploy.sh` which when you run will use `rsync` to sync your static site to the server.\n\n<hr />\n\nOnce you have completed the project, you should have a basic understanding of how to setup a web server using a basic static site served using Nginx. You should also have a basic understanding of how to use `rsync` to deploy your changes to the server.";
				}
				async function compiledContent$c() {
					return await html$c();
				}
				function getHeadings$c() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$c = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$c;
					content.file = file$c;
					content.url = url$c;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$c())}`;
				});

const __vite_glob_0_56 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$c,
	compiledContent: compiledContent$c,
	default: Content$c,
	file: file$c,
	frontmatter: frontmatter$c,
	getHeadings: getHeadings$c,
	rawContent: rawContent$c,
	url: url$c
}, Symbol.toStringTag, { value: 'Module' }));

const html$b = () => "<p>You are required to build a “Story” feature similar to those found in popular social media platforms like Instagram and WhatsApp. The goal is to allow a user to post short, ephemeral content that disappears after 24 hours. As this is a Frontend project this is going to be client-side only.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>There will be a list of stories at the top and a plus button. Clicking the plus button will allow user to upload an image which will be converted to base64 and stored in local storage. The image will be displayed in the list of stories. The image will be removed after 24 hours. User should optionally be able to swipe through the stories.</p>\n<p><img src=\"https://assets.roadmap.sh/guest/stories-project.png\" alt=\"Stories project clone\"></p>\n<h2 id=\"constraints\">Constraints</h2>\n<ul>\n<li>You can use any frontend framework to build this</li>\n<li>Feel free to use any libraries or tools you are comfortable with</li>\n<li>The project should be client-side only</li>\n<li>The project should be responsive</li>\n<li>Image dimensions should be constrained to a maximum of 1080px x 1920px</li>\n</ul>\n<hr>\n<p>After building this project, you will have a better understanding of how to work with client-side storage, timeouts, and how to create a responsive design.</p>";

				const frontmatter$b = {"title":"24hr Story Feature","description":"Create a client-side instagram stories feature clone.","isNew":false,"sort":32,"difficulty":"advanced","nature":"Frameworks","skills":["JavaScript","Storage","Timeouts"],"seo":{"title":"Build an Instagram Story Clone","description":"Create a client-side instagram stories feature clone.","keywords":["html","css","javascript","instagram story"]},"roadmapIds":["frontend"]};
				const file$b = "/workspace/src/data/projects/stories-feature.md";
				const url$b = undefined;
				function rawContent$b() {
					return "   \n                             \n                                                                      \n              \n        \n                        \n                      \n         \n                  \n               \n                \n      \n                                           \n                                                                        \n             \n            \n           \n                  \n                         \n             \n              \n   \n\nYou are required to build a \"Story\" feature similar to those found in popular social media platforms like Instagram and WhatsApp. The goal is to allow a user to post short, ephemeral content that disappears after 24 hours. As this is a Frontend project this is going to be client-side only.\n\n## Requirements\n\nThere will be a list of stories at the top and a plus button. Clicking the plus button will allow user to upload an image which will be converted to base64 and stored in local storage. The image will be displayed in the list of stories. The image will be removed after 24 hours. User should optionally be able to swipe through the stories.\n\n![Stories project clone](https://assets.roadmap.sh/guest/stories-project.png)\n\n## Constraints\n\n- You can use any frontend framework to build this\n- Feel free to use any libraries or tools you are comfortable with\n- The project should be client-side only\n- The project should be responsive\n- Image dimensions should be constrained to a maximum of 1080px x 1920px\n\n---\n\nAfter building this project, you will have a better understanding of how to work with client-side storage, timeouts, and how to create a responsive design.";
				}
				async function compiledContent$b() {
					return await html$b();
				}
				function getHeadings$b() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":2,"slug":"constraints","text":"Constraints"}];
				}

				const Content$b = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$b;
					content.file = file$b;
					content.url = url$b;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$b())}`;
				});

const __vite_glob_0_57 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$b,
	compiledContent: compiledContent$b,
	default: Content$b,
	file: file$b,
	frontmatter: frontmatter$b,
	getHeadings: getHeadings$b,
	rawContent: rawContent$b,
	url: url$b
}, Symbol.toStringTag, { value: 'Module' }));

const html$a = () => "<p>You are required to create a task tracker that lets users add new tasks, mark them as complete, or delete them. Completed tasks will be moved to the end of the list and will have strikethrough, and users can unmark tasks to return them to the pending list.</p>\n<p>Here is the mockup of the task tracker:</p>\n<p><a href=\"https://assets.roadmap.sh/guest/task-tracker-2diba.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/task-tracker-2diba.png\" alt=\"Task Tracker\"></a></p>\n<h2 id=\"hint\">Hint</h2>\n<p>Store your tasks in an array of objects, where each object represents a task with properties like description and status (completed or not). Whenever a new task is added, updated, deleted, or marked as complete/uncomplete, update the tasks array. Write a function <code>renderTasks</code> which will remove all tasks from the DOM and re-render them based on the updated tasks array.</p>\n<p>This project will help you practice array manipulation, event handling, and dynamic DOM updates using JavaScript.</p>";

				const frontmatter$a = {"title":"Task Tracker","description":"Create a task tracker with a to-do list using JavaScript.","isNew":false,"sort":22,"difficulty":"intermediate","nature":"JavaScript","skills":["HTML","CSS","JavaScript","DOM Manipulation"],"seo":{"title":"Build a Task Tracker with JavaScript","description":"Learn how to create a dynamic task tracker that allows users to add, complete, and delete tasks with real-time updates.","keywords":["task tracker","to-do list","javascript project"]},"roadmapIds":["frontend"]};
				const file$a = "/workspace/src/data/projects/task-tracker-js.md";
				const url$a = undefined;
				function rawContent$a() {
					return "   \n                     \n                                                                        \n            \n        \n                          \n                    \n       \n          \n         \n                \n                      \n    \n                                               \n                                                                                                                                        \n           \n                    \n                  \n                          \n           \n              \n   \n\nYou are required to create a task tracker that lets users add new tasks, mark them as complete, or delete them. Completed tasks will be moved to the end of the list and will have strikethrough, and users can unmark tasks to return them to the pending list.\n\nHere is the mockup of the task tracker:\n\n[![Task Tracker](https://assets.roadmap.sh/guest/task-tracker-2diba.png)](https://assets.roadmap.sh/guest/task-tracker-2diba.png)\n\n## Hint\n\nStore your tasks in an array of objects, where each object represents a task with properties like description and status (completed or not). Whenever a new task is added, updated, deleted, or marked as complete/uncomplete, update the tasks array. Write a function `renderTasks` which will remove all tasks from the DOM and re-render them based on the updated tasks array.\n\nThis project will help you practice array manipulation, event handling, and dynamic DOM updates using JavaScript.\n";
				}
				async function compiledContent$a() {
					return await html$a();
				}
				function getHeadings$a() {
					return [{"depth":2,"slug":"hint","text":"Hint"}];
				}

				const Content$a = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$a;
					content.file = file$a;
					content.url = url$a;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$a())}`;
				});

const __vite_glob_0_58 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$a,
	compiledContent: compiledContent$a,
	default: Content$a,
	file: file$a,
	frontmatter: frontmatter$a,
	getHeadings: getHeadings$a,
	rawContent: rawContent$a,
	url: url$a
}, Symbol.toStringTag, { value: 'Module' }));

const html$9 = () => "<p>Task tracker is a project used to track and manage your tasks. In this task, you will build a simple command line interface (CLI) to track what you need to do, what you have done, and what you are currently working on. This project will help you practice your programming skills, including working with the filesystem, handling user inputs, and building a simple CLI application.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>The application should run from the command line, accept user actions and inputs as arguments, and store the tasks in a JSON file. The user should be able to:</p>\n<ul>\n<li>Add, Update, and Delete tasks</li>\n<li>Mark a task as in progress or done</li>\n<li>List all tasks</li>\n<li>List all tasks that are done</li>\n<li>List all tasks that are not done</li>\n<li>List all tasks that are in progress</li>\n</ul>\n<p>Here are some constraints to guide the implementation:</p>\n<ul>\n<li>You can use any programming language to build this project.</li>\n<li>Use positional arguments in command line to accept user inputs.</li>\n<li>Use a JSON file to store the tasks in the current directory.</li>\n<li>The JSON file should be created if it does not exist.</li>\n<li>Use the native file system module of your programming language to interact with the JSON file.</li>\n<li>Do not use any external libraries or frameworks to build this project.</li>\n<li>Ensure to handle errors and edge cases gracefully.</li>\n</ul>\n<h3 id=\"example\">Example</h3>\n<p>The list of commands and their usage is given below:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#6272A4\"># Adding a new task</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">task-cli</span><span style=\"color:#F1FA8C\"> add</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Buy groceries</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Output: Task added successfully (ID: 1)</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Updating and deleting tasks</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">task-cli</span><span style=\"color:#F1FA8C\"> update</span><span style=\"color:#BD93F9\"> 1</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Buy groceries and cook dinner</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">task-cli</span><span style=\"color:#F1FA8C\"> delete</span><span style=\"color:#BD93F9\"> 1</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Marking a task as in progress or done</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">task-cli</span><span style=\"color:#F1FA8C\"> mark-in-progress</span><span style=\"color:#BD93F9\"> 1</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">task-cli</span><span style=\"color:#F1FA8C\"> mark-done</span><span style=\"color:#BD93F9\"> 1</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Listing all tasks</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">task-cli</span><span style=\"color:#F1FA8C\"> list</span></span>\n<span class=\"line\"></span>\n<span class=\"line\"><span style=\"color:#6272A4\"># Listing tasks by status</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">task-cli</span><span style=\"color:#F1FA8C\"> list</span><span style=\"color:#F1FA8C\"> done</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">task-cli</span><span style=\"color:#F1FA8C\"> list</span><span style=\"color:#F1FA8C\"> todo</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">task-cli</span><span style=\"color:#F1FA8C\"> list</span><span style=\"color:#F1FA8C\"> in-progress</span></span></code></pre>\n<h3 id=\"task-properties\">Task Properties</h3>\n<p>Each task should have the following properties:</p>\n<ul>\n<li><code>id</code>: A unique identifier for the task</li>\n<li><code>description</code>: A short description of the task</li>\n<li><code>status</code>: The status of the task (<code>todo</code>, <code>in-progress</code>, <code>done</code>)</li>\n<li><code>createdAt</code>: The date and time when the task was created</li>\n<li><code>updatedAt</code>: The date and time when the task was last updated</li>\n</ul>\n<p>Make sure to add these properties to the JSON file when adding a new task and update them when updating a task.</p>\n<hr>\n<h2 id=\"getting-started\">Getting Started</h2>\n<p>Here are a few steps to help you get started with the Task Tracker CLI project:</p>\n<h3 id=\"set-up-your-development-environment\">Set Up Your Development Environment</h3>\n<ul>\n<li>Choose a programming language you are comfortable with (e.g., Python, JavaScript, etc.).</li>\n<li>Ensure you have a code editor or IDE installed (e.g., VSCode, PyCharm).</li>\n</ul>\n<h3 id=\"project-initialization\">Project Initialization</h3>\n<ul>\n<li>Create a new project directory for your Task Tracker CLI.</li>\n<li>Initialize a version control system (e.g., Git) to manage your project.</li>\n</ul>\n<h3 id=\"implementing-features\">Implementing Features</h3>\n<ul>\n<li>Start by creating a basic CLI structure to handle user inputs.</li>\n<li>Implement each feature one by one, ensuring to test thoroughly before moving to the next e.g. implement adding task functionality first, listing next, then updating, marking as in progress, etc.</li>\n</ul>\n<h3 id=\"testing-and-debugging\">Testing and Debugging</h3>\n<ul>\n<li>Test each feature individually to ensure they work as expected. Look at the JSON file to verify that the tasks are being stored correctly.</li>\n<li>Debug any issues that arise during development.</li>\n</ul>\n<h3 id=\"finalizing-the-project\">Finalizing the Project</h3>\n<ul>\n<li>Ensure all features are implemented and tested.</li>\n<li>Clean up your code and add comments where necessary.</li>\n<li>Write a good readme file on how to use your Task Tracker CLI.</li>\n</ul>\n<hr>\n<p>By the end of this project, you will have developed a practical tool that can help you or others manage tasks efficiently. This project lays a solid foundation for more advanced programming projects and real-world applications.</p>\n<p>Happy coding!</p>";

				const frontmatter$9 = {"title":"Task Tracker","description":"Build a CLI app to track your tasks and manage your to-do list.","isNew":false,"sort":100,"difficulty":"beginner","nature":"CLI","skills":["Programming Language","CLI","Filesystem"],"seo":{"title":"Task Tracker CLI","description":"Build a command line interface (CLI) to track your tasks and manage your to-do list.","keywords":["task tracker cli","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot","cpp"]};
				const file$9 = "/workspace/src/data/projects/task-tracker.md";
				const url$9 = undefined;
				function rawContent$9() {
					return "   \n                     \n                                                                              \n            \n         \n                      \n             \n       \n                          \n         \n                \n    \n                           \n                                                                                                     \n           \n                        \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n         \n   \n\nTask tracker is a project used to track and manage your tasks. In this task, you will build a simple command line interface (CLI) to track what you need to do, what you have done, and what you are currently working on. This project will help you practice your programming skills, including working with the filesystem, handling user inputs, and building a simple CLI application.\n\n## Requirements\n\nThe application should run from the command line, accept user actions and inputs as arguments, and store the tasks in a JSON file. The user should be able to:\n\n- Add, Update, and Delete tasks\n- Mark a task as in progress or done\n- List all tasks\n- List all tasks that are done\n- List all tasks that are not done\n- List all tasks that are in progress\n\nHere are some constraints to guide the implementation:\n\n- You can use any programming language to build this project.\n- Use positional arguments in command line to accept user inputs.\n- Use a JSON file to store the tasks in the current directory.\n- The JSON file should be created if it does not exist.\n- Use the native file system module of your programming language to interact with the JSON file.\n- Do not use any external libraries or frameworks to build this project.\n- Ensure to handle errors and edge cases gracefully.\n\n### Example\n\nThe list of commands and their usage is given below:\n\n```bash\n# Adding a new task\ntask-cli add \"Buy groceries\"\n# Output: Task added successfully (ID: 1)\n\n# Updating and deleting tasks\ntask-cli update 1 \"Buy groceries and cook dinner\"\ntask-cli delete 1\n\n# Marking a task as in progress or done\ntask-cli mark-in-progress 1\ntask-cli mark-done 1\n\n# Listing all tasks\ntask-cli list\n\n# Listing tasks by status\ntask-cli list done\ntask-cli list todo\ntask-cli list in-progress\n```\n\n### Task Properties\n\nEach task should have the following properties:\n\n- `id`: A unique identifier for the task\n- `description`: A short description of the task\n- `status`: The status of the task (`todo`, `in-progress`, `done`)\n- `createdAt`: The date and time when the task was created\n- `updatedAt`: The date and time when the task was last updated\n\nMake sure to add these properties to the JSON file when adding a new task and update them when updating a task.\n\n<hr />\n\n## Getting Started\n\nHere are a few steps to help you get started with the Task Tracker CLI project:\n\n### Set Up Your Development Environment\n\n- Choose a programming language you are comfortable with (e.g., Python, JavaScript, etc.).\n- Ensure you have a code editor or IDE installed (e.g., VSCode, PyCharm).\n\n### Project Initialization\n\n- Create a new project directory for your Task Tracker CLI.\n- Initialize a version control system (e.g., Git) to manage your project.\n\n### Implementing Features\n\n- Start by creating a basic CLI structure to handle user inputs.\n- Implement each feature one by one, ensuring to test thoroughly before moving to the next e.g. implement adding task functionality first, listing next, then updating, marking as in progress, etc.\n\n### Testing and Debugging\n\n- Test each feature individually to ensure they work as expected. Look at the JSON file to verify that the tasks are being stored correctly.\n- Debug any issues that arise during development.\n\n### Finalizing the Project\n\n- Ensure all features are implemented and tested.\n- Clean up your code and add comments where necessary.\n- Write a good readme file on how to use your Task Tracker CLI.\n\n<hr />\n\nBy the end of this project, you will have developed a practical tool that can help you or others manage tasks efficiently. This project lays a solid foundation for more advanced programming projects and real-world applications.\n\nHappy coding!\n";
				}
				async function compiledContent$9() {
					return await html$9();
				}
				function getHeadings$9() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"example","text":"Example"},{"depth":3,"slug":"task-properties","text":"Task Properties"},{"depth":2,"slug":"getting-started","text":"Getting Started"},{"depth":3,"slug":"set-up-your-development-environment","text":"Set Up Your Development Environment"},{"depth":3,"slug":"project-initialization","text":"Project Initialization"},{"depth":3,"slug":"implementing-features","text":"Implementing Features"},{"depth":3,"slug":"testing-and-debugging","text":"Testing and Debugging"},{"depth":3,"slug":"finalizing-the-project","text":"Finalizing the Project"}];
				}

				const Content$9 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$9;
					content.file = file$9;
					content.url = url$9;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$9())}`;
				});

const __vite_glob_0_59 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$9,
	compiledContent: compiledContent$9,
	default: Content$9,
	file: file$9,
	frontmatter: frontmatter$9,
	getHeadings: getHeadings$9,
	rawContent: rawContent$9,
	url: url$9
}, Symbol.toStringTag, { value: 'Module' }));

const html$8 = () => "<p>This project is designed to help you practice DOM manipulation, form handling, and basic calculations in JavaScript.</p>\n<p>You will create a temperature converter that allows users to enter a temperature value, select the unit they want to convert from, and select the unit they want to convert to. The “Convert” button should only be enabled when all three fields are filled in. Once the user clicks “Convert,” the tool will display the converted temperature below the form.</p>\n<p>Here is a mockup of what the temperature converter might look like:</p>\n<p><a href=\"https://assets.roadmap.sh/guest/temperature-converter-8omel.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/temperature-converter-8omel.png\" alt=\"Temperature Converter\"></a></p>\n<p>This project will help you gain experience with handling user input, conditionally enabling form elements, and performing simple calculations using JavaScript.</p>";

				const frontmatter$8 = {"title":"Temperature Converter","description":"Build a temperature converter that converts between different units.","isNew":false,"sort":27,"difficulty":"intermediate","nature":"JavaScript","skills":["HTML","CSS","JavaScript","DOM Manipulation"],"seo":[{"title":"Build a Temperature Converter with JavaScript"},{"description":"Learn how to create an interactive temperature converter that converts between Celsius, Fahrenheit, and Kelvin using JavaScript."},{"keywords":["temperature converter","javascript project","unit conversion","html and css"]}],"roadmapIds":["frontend"]};
				const file$8 = "/workspace/src/data/projects/temperature-converter.md";
				const url$8 = undefined;
				function rawContent$8() {
					return "   \n                            \n                                                                                 \n            \n        \n                        \n                  \n       \n        \n       \n              \n                    \n    \n                                                        \n                                                                                                                                                 \n             \n                             \n                          \n                       \n                    \n             \n              \n   \n\nThis project is designed to help you practice DOM manipulation, form handling, and basic calculations in JavaScript.\n\nYou will create a temperature converter that allows users to enter a temperature value, select the unit they want to convert from, and select the unit they want to convert to. The \"Convert\" button should only be enabled when all three fields are filled in. Once the user clicks \"Convert,\" the tool will display the converted temperature below the form.\n\nHere is a mockup of what the temperature converter might look like:\n\n[![Temperature Converter](https://assets.roadmap.sh/guest/temperature-converter-8omel.png)](https://assets.roadmap.sh/guest/temperature-converter-8omel.png)\n\nThis project will help you gain experience with handling user input, conditionally enabling form elements, and performing simple calculations using JavaScript.";
				}
				async function compiledContent$8() {
					return await html$8();
				}
				function getHeadings$8() {
					return [];
				}

				const Content$8 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$8;
					content.file = file$8;
					content.url = url$8;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$8())}`;
				});

const __vite_glob_0_60 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$8,
	compiledContent: compiledContent$8,
	default: Content$8,
	file: file$8,
	frontmatter: frontmatter$8,
	getHeadings: getHeadings$8,
	rawContent: rawContent$8,
	url: url$8
}, Symbol.toStringTag, { value: 'Module' }));

const html$7 = () => "<p>In this project, you are required to create a bunch of testimonial cards. Testimonials are quotes or statements from satisfied customers or users, often used on websites to build credibility and trust.</p>\n<p>The goal of this project is to teach you about positioning and layout in CSS. Below is a rough mockup showing some testimonial cards. Each card is designed to help you understand different layout and positioning techniques.</p>\n<p><a href=\"https://assets.roadmap.sh/guest/testimonials-min-3j2j4.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/testimonials-min-3j2j4.png\" alt=\"Testimonials Component\"></a></p>\n<p>Feel free to use any content and images you like for the testimonials.</p>\n<hr>\n<p>After completing this project, you will have a good understanding of how to create layouts using HTML and CSS. You can further enhance your skills by exploring more complex projects as you progress.</p>";

				const frontmatter$7 = {"title":"Testimonial Cards","description":"Create testimonial cards for a website using HTML and CSS.","isNew":false,"sort":5,"difficulty":"beginner","nature":"CSS","skills":["HTML","CSS","Layouts","Flexbox","Positioning"],"seo":{"title":"Create Testimonial Cards for a Website Using HTML and CSS","description":"Learn how to create testimonial components using HTML and CSS.","keywords":["basic css","css project idea","responsive design","html and css"]},"roadmapIds":["frontend"]};
				const file$7 = "/workspace/src/data/projects/testimonial-cards.md";
				const url$7 = undefined;
				function rawContent$7() {
					return "   \n                            \n                                                                           \n              \n         \n                        \n             \n         \n            \n           \n               \n             \n                 \n      \n                                                                      \n                                                                                 \n             \n                   \n                          \n                           \n                      \n             \n                \n\n   \n\nIn this project, you are required to create a bunch of testimonial cards. Testimonials are quotes or statements from satisfied customers or users, often used on websites to build credibility and trust.\n\nThe goal of this project is to teach you about positioning and layout in CSS. Below is a rough mockup showing some testimonial cards. Each card is designed to help you understand different layout and positioning techniques.\n\n[![Testimonials Component](https://assets.roadmap.sh/guest/testimonials-min-3j2j4.png)](https://assets.roadmap.sh/guest/testimonials-min-3j2j4.png)\n\nFeel free to use any content and images you like for the testimonials.\n\n---\n\nAfter completing this project, you will have a good understanding of how to create layouts using HTML and CSS. You can further enhance your skills by exploring more complex projects as you progress.";
				}
				async function compiledContent$7() {
					return await html$7();
				}
				function getHeadings$7() {
					return [];
				}

				const Content$7 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$7;
					content.file = file$7;
					content.url = url$7;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$7())}`;
				});

const __vite_glob_0_61 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$7,
	compiledContent: compiledContent$7,
	default: Content$7,
	file: file$7,
	frontmatter: frontmatter$7,
	getHeadings: getHeadings$7,
	rawContent: rawContent$7,
	url: url$7
}, Symbol.toStringTag, { value: 'Module' }));

const html$6 = () => "<p>In this project, you will build a simple command line interface (CLI) to fetch data from The Movie Database (TMDB) and display it in the terminal. This project will help you practice your programming skills, including working with APIs, handling JSON data, and building a simple CLI application.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>The application should run from the command line, and be able to pull and show the popular, top-rated, upcoming and now playing movies from the TMDB API. The user should be able to specify the type of movies they want to see by passing a command line argument to the CLI tool.</p>\n<p>Here is how the CLI tool usage should look like:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"bash\"><code><span class=\"line\"><span style=\"color:#50FA7B\">tmdb-app</span><span style=\"color:#BD93F9\"> --type</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">playing</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">tmdb-app</span><span style=\"color:#BD93F9\"> --type</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">popular</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">tmdb-app</span><span style=\"color:#BD93F9\"> --type</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">top</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#50FA7B\">tmdb-app</span><span style=\"color:#BD93F9\"> --type</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">upcoming</span><span style=\"color:#E9F284\">\"</span></span></code></pre>\n<p>You can look at the API documentation to understand how to fetch the data for each type of movie.</p>\n<ul>\n<li><a href=\"https://developer.themoviedb.org/reference/movie-now-playing-list\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Now Playing Movies</a></li>\n<li><a href=\"https://developer.themoviedb.org/reference/movie-popular-list\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Popular Movies</a></li>\n<li><a href=\"https://developer.themoviedb.org/reference/movie-top-rated-list\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Top Rated Movies</a></li>\n<li><a href=\"https://developer.themoviedb.org/reference/movie-upcoming-list\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Upcoming Movies</a></li>\n</ul>\n<p>There are some considerations to keep in mind:</p>\n<ul>\n<li>Handle errors gracefully, such as API failures or network issues.</li>\n<li>Use a programming language of your choice to build this project.</li>\n<li>Make sure to include a README file with instructions on how to run the application and any other relevant information.</li>\n</ul>";

				const frontmatter$6 = {"title":"TMDB CLI Tool","description":"Use TMDB API to fetch movie information and display it in the terminal.","isNew":false,"sort":1100,"difficulty":"beginner","nature":"CLI","skills":["Programming Language","CLI","API Consumption"],"seo":{"title":"TMDB CLI Tool","description":"Build a command line interface (CLI) to fetch and display common TMDB requests.","keywords":["tmdb user activity cli","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot","cpp"]};
				const file$6 = "/workspace/src/data/projects/tmdb-cli.md";
				const url$6 = undefined;
				function rawContent$6() {
					return "   \n                      \n                                                                                      \n            \n          \n                      \n             \n       \n                          \n         \n                     \n    \n                        \n                                                                                                \n           \n                              \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n         \n   \n\nIn this project, you will build a simple command line interface (CLI) to fetch data from The Movie Database (TMDB) and display it in the terminal. This project will help you practice your programming skills, including working with APIs, handling JSON data, and building a simple CLI application.\n\n## Requirements\n\nThe application should run from the command line, and be able to pull and show the popular, top-rated, upcoming and now playing movies from the TMDB API. The user should be able to specify the type of movies they want to see by passing a command line argument to the CLI tool.\n\nHere is how the CLI tool usage should look like:\n\n```bash\ntmdb-app --type \"playing\"\ntmdb-app --type \"popular\"\ntmdb-app --type \"top\"\ntmdb-app --type \"upcoming\"\n```\n\nYou can look at the API documentation to understand how to fetch the data for each type of movie.\n\n- [Now Playing Movies](https://developer.themoviedb.org/reference/movie-now-playing-list)\n- [Popular Movies](https://developer.themoviedb.org/reference/movie-popular-list)\n- [Top Rated Movies](https://developer.themoviedb.org/reference/movie-top-rated-list)\n- [Upcoming Movies](https://developer.themoviedb.org/reference/movie-upcoming-list)\n\nThere are some considerations to keep in mind:\n\n- Handle errors gracefully, such as API failures or network issues.\n- Use a programming language of your choice to build this project.\n- Make sure to include a README file with instructions on how to run the application and any other relevant information.\n";
				}
				async function compiledContent$6() {
					return await html$6();
				}
				function getHeadings$6() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"}];
				}

				const Content$6 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$6;
					content.file = file$6;
					content.url = url$6;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$6())}`;
				});

const __vite_glob_0_62 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$6,
	compiledContent: compiledContent$6,
	default: Content$6,
	file: file$6,
	frontmatter: frontmatter$6,
	getHeadings: getHeadings$6,
	rawContent: rawContent$6,
	url: url$6
}, Symbol.toStringTag, { value: 'Module' }));

const html$5 = () => "<p>In this project you are required to develop a RESTful API to allow users to manage their to-do list. The previous backend projects have only focused on the CRUD operations, but this project will require you to implement user authentication as well.</p>\n<p><img src=\"https://assets.roadmap.sh/guest/todo-list-api-bsrdd.png\" alt=\"Todo List API\"></p>\n<h2 id=\"goals\">Goals</h2>\n<p>The skills you will learn from this project include:</p>\n<ul>\n<li>User authentication</li>\n<li>Schema design and Databases</li>\n<li>RESTful API design</li>\n<li>CRUD operations</li>\n<li>Error handling</li>\n<li>Security</li>\n</ul>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You are required to develop a RESTful API with following endpoints</p>\n<ul>\n<li>User registration to create a new user</li>\n<li>Login endpoint to authenticate the user and generate a token</li>\n<li>CRUD operations for managing the to-do list</li>\n<li>Implement user authentication to allow only authorized users to access the to-do list</li>\n<li>Implement error handling and security measures</li>\n<li>Use a database to store the user and to-do list data (you can use any database of your choice)</li>\n<li>Implement proper data validation</li>\n<li>Implement pagination and filtering for the to-do list</li>\n</ul>\n<p>Given below is a list of the endpoints and the details of the request and response:</p>\n<h3 id=\"user-registration\">User Registration</h3>\n<p>Register a new user using the following request:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>POST /register</span></span>\n<span class=\"line\"><span>{</span></span>\n<span class=\"line\"><span>  \"name\": \"John Doe\",</span></span>\n<span class=\"line\"><span>  \"email\": \"john@doe.com\",</span></span>\n<span class=\"line\"><span>  \"password\": \"password\"</span></span>\n<span class=\"line\"><span>}</span></span></code></pre>\n<p>This will validate the given details, make sure the email is unique and store the user details in the database. Make sure to hash the password before storing it in the database. Respond with a token that can be used for authentication if the registration is successful.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">token</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<p>The token can either be a JWT or a random string that can be used for authentication. We leave it up to you to decide the implementation details.</p>\n<h3 id=\"user-login\">User Login</h3>\n<p>Authenticate the user using the following request:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>POST /login</span></span>\n<span class=\"line\"><span>{</span></span>\n<span class=\"line\"><span>  \"email\": \"john@doe.com\",</span></span>\n<span class=\"line\"><span>  \"password\": \"password\"</span></span>\n<span class=\"line\"><span>}</span></span></code></pre>\n<p>This will validate the given email and password, and respond with a token if the authentication is successful.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">token</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<h3 id=\"create-a-to-do-item\">Create a To-Do Item</h3>\n<p>Create a new to-do item using the following request:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>POST /todos</span></span>\n<span class=\"line\"><span>{</span></span>\n<span class=\"line\"><span>  \"title\": \"Buy groceries\",</span></span>\n<span class=\"line\"><span>  \"description\": \"Buy milk, eggs, and bread\"</span></span>\n<span class=\"line\"><span>}</span></span></code></pre>\n<p>User must send the token received from the login endpoint in the header to authenticate the request. You can use the <code>Authorization</code> header with the token as the value. In case the token is missing or invalid, respond with an error and status code 401.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">message</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Unauthorized</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<p>Upon successful creation of the to-do item, respond with the details of the created item.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 1</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">title</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Buy groceries</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">description</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Buy milk, eggs, and bread</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<h3 id=\"update-a-to-do-item\">Update a To-Do Item</h3>\n<p>Update an existing to-do item using the following request:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>PUT /todos/1</span></span>\n<span class=\"line\"><span>{</span></span>\n<span class=\"line\"><span>  \"title\": \"Buy groceries\",</span></span>\n<span class=\"line\"><span>  \"description\": \"Buy milk, eggs, bread, and cheese\"</span></span>\n<span class=\"line\"><span>}</span></span></code></pre>\n<p>Just like the create todo endpoint, user must send the token received. Also make sure to validate the user has the permission to update the to-do item i.e. the user is the creator of todo item that they are updating. Respond with an error and status code <code>403</code> if the user is not authorized to update the item.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">message</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Forbidden</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<p>Upon successful update of the to-do item, respond with the updated details of the item.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 1</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">title</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Buy groceries</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">description</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Buy milk, eggs, bread, and cheese</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<h3 id=\"delete-a-to-do-item\">Delete a To-Do Item</h3>\n<p>Delete an existing to-do item using the following request:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>DELETE /todos/1</span></span></code></pre>\n<p>User must be authenticated and authorized to delete the to-do item. Upon successful deletion, respond with the status code <code>204</code>.</p>\n<h3 id=\"get-to-do-items\">Get To-Do Items</h3>\n<p>Get the list of to-do items using the following request:</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>GET /todos?page=1&#x26;limit=10</span></span></code></pre>\n<p>User must be authenticated to access the tasks and the response should be paginated. Respond with the list of to-do items along with the pagination details.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">data</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#F8F8F2\"> [</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">    {</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">      \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 1</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">      \"</span><span style=\"color:#8BE9FD\">title</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Buy groceries</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">      \"</span><span style=\"color:#8BE9FD\">description</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Buy milk, eggs, bread</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">    },</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">    {</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">      \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 2</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">      \"</span><span style=\"color:#8BE9FD\">title</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Pay bills</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">      \"</span><span style=\"color:#8BE9FD\">description</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">Pay electricity and water bills</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">    }</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">  ],</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">page</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 1</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">limit</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 10</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">total</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 2</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<h2 id=\"bonus\">Bonus</h2>\n<ul>\n<li>Implement filtering and sorting for the to-do list</li>\n<li>Implement unit tests for the API</li>\n<li>Implement rate limiting and throttling for the API</li>\n<li>Implement refresh token mechanism for the authentication</li>\n</ul>\n<hr>\n<p>This project will help you understand how to design and implement a RESTful API with user authentication. You will also learn how to work with databases, handle errors, and implement security measures.</p>";

				const frontmatter$5 = {"title":"Todo List API","description":"Build a RESTful API to allow users to manage their to-do list.","isNew":false,"sort":900,"difficulty":"beginner","nature":"API","skills":["RESTful API","Database","CRUD Operations","Data Modeling","Authentication"],"seo":{"title":"Todo List API Project Idea","description":"Build a RESTful API to allow users to manage their to-do list.","keywords":["todo list api","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$5 = "/workspace/src/data/projects/todo-list-api.md";
				const url$5 = undefined;
				function rawContent$5() {
					return "   \n                      \n                                                                             \n            \n         \n                      \n             \n       \n                 \n              \n                     \n                   \n                    \n    \n                                     \n                                                                               \n           \n                     \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nIn this project you are required to develop a RESTful API to allow users to manage their to-do list. The previous backend projects have only focused on the CRUD operations, but this project will require you to implement user authentication as well.\n\n![Todo List API](https://assets.roadmap.sh/guest/todo-list-api-bsrdd.png)\n\n## Goals\n\nThe skills you will learn from this project include:\n\n- User authentication\n- Schema design and Databases\n- RESTful API design\n- CRUD operations\n- Error handling\n- Security\n\n## Requirements\n\nYou are required to develop a RESTful API with following endpoints\n\n- User registration to create a new user\n- Login endpoint to authenticate the user and generate a token\n- CRUD operations for managing the to-do list\n- Implement user authentication to allow only authorized users to access the to-do list\n- Implement error handling and security measures\n- Use a database to store the user and to-do list data (you can use any database of your choice)\n- Implement proper data validation\n- Implement pagination and filtering for the to-do list\n\nGiven below is a list of the endpoints and the details of the request and response:\n\n### User Registration\n\nRegister a new user using the following request:\n\n```\nPOST /register\n{\n  \"name\": \"John Doe\",\n  \"email\": \"john@doe.com\",\n  \"password\": \"password\"\n}\n```\n\nThis will validate the given details, make sure the email is unique and store the user details in the database. Make sure to hash the password before storing it in the database. Respond with a token that can be used for authentication if the registration is successful.\n\n```json\n{\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\"\n}\n```\n\nThe token can either be a JWT or a random string that can be used for authentication. We leave it up to you to decide the implementation details.\n\n### User Login\n\nAuthenticate the user using the following request:\n\n```\nPOST /login\n{\n  \"email\": \"john@doe.com\",\n  \"password\": \"password\"\n}\n```\n\nThis will validate the given email and password, and respond with a token if the authentication is successful.\n\n```json\n{\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\"\n}\n```\n\n### Create a To-Do Item\n\nCreate a new to-do item using the following request:\n\n```\nPOST /todos\n{\n  \"title\": \"Buy groceries\",\n  \"description\": \"Buy milk, eggs, and bread\"\n}\n```\n\nUser must send the token received from the login endpoint in the header to authenticate the request. You can use the `Authorization` header with the token as the value. In case the token is missing or invalid, respond with an error and status code 401.\n\n```json\n{\n  \"message\": \"Unauthorized\"\n}\n```\n\nUpon successful creation of the to-do item, respond with the details of the created item.\n\n```json\n{\n  \"id\": 1,\n  \"title\": \"Buy groceries\",\n  \"description\": \"Buy milk, eggs, and bread\"\n}\n```\n\n### Update a To-Do Item\n\nUpdate an existing to-do item using the following request:\n\n```\nPUT /todos/1\n{\n  \"title\": \"Buy groceries\",\n  \"description\": \"Buy milk, eggs, bread, and cheese\"\n}\n```\n\nJust like the create todo endpoint, user must send the token received. Also make sure to validate the user has the permission to update the to-do item i.e. the user is the creator of todo item that they are updating. Respond with an error and status code `403` if the user is not authorized to update the item.\n\n```json\n{\n  \"message\": \"Forbidden\"\n}\n```\n\nUpon successful update of the to-do item, respond with the updated details of the item.\n\n```json\n{\n  \"id\": 1,\n  \"title\": \"Buy groceries\",\n  \"description\": \"Buy milk, eggs, bread, and cheese\"\n}\n```\n\n### Delete a To-Do Item\n\nDelete an existing to-do item using the following request:\n\n```\nDELETE /todos/1\n```\n\nUser must be authenticated and authorized to delete the to-do item. Upon successful deletion, respond with the status code `204`.\n\n### Get To-Do Items\n\nGet the list of to-do items using the following request:\n\n```\nGET /todos?page=1&limit=10\n```\n\nUser must be authenticated to access the tasks and the response should be paginated. Respond with the list of to-do items along with the pagination details.\n\n```json\n{\n  \"data\": [\n    {\n      \"id\": 1,\n      \"title\": \"Buy groceries\",\n      \"description\": \"Buy milk, eggs, bread\"\n    },\n    {\n      \"id\": 2,\n      \"title\": \"Pay bills\",\n      \"description\": \"Pay electricity and water bills\"\n    }\n  ],\n  \"page\": 1,\n  \"limit\": 10,\n  \"total\": 2\n}\n```\n\n## Bonus\n\n- Implement filtering and sorting for the to-do list\n- Implement unit tests for the API\n- Implement rate limiting and throttling for the API\n- Implement refresh token mechanism for the authentication\n\n<hr />\n\nThis project will help you understand how to design and implement a RESTful API with user authentication. You will also learn how to work with databases, handle errors, and implement security measures.\n";
				}
				async function compiledContent$5() {
					return await html$5();
				}
				function getHeadings$5() {
					return [{"depth":2,"slug":"goals","text":"Goals"},{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":3,"slug":"user-registration","text":"User Registration"},{"depth":3,"slug":"user-login","text":"User Login"},{"depth":3,"slug":"create-a-to-do-item","text":"Create a To-Do Item"},{"depth":3,"slug":"update-a-to-do-item","text":"Update a To-Do Item"},{"depth":3,"slug":"delete-a-to-do-item","text":"Delete a To-Do Item"},{"depth":3,"slug":"get-to-do-items","text":"Get To-Do Items"},{"depth":2,"slug":"bonus","text":"Bonus"}];
				}

				const Content$5 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$5;
					content.file = file$5;
					content.url = url$5;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$5())}`;
				});

const __vite_glob_0_63 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$5,
	compiledContent: compiledContent$5,
	default: Content$5,
	file: file$5,
	frontmatter: frontmatter$5,
	getHeadings: getHeadings$5,
	rawContent: rawContent$5,
	url: url$5
}, Symbol.toStringTag, { value: 'Module' }));

const html$4 = () => "<p>In this project, you are required to create a tooltip that appears above navigation items when hovered, using only HTML and CSS. A tooltip is a small pop-up box that provides additional information about a navigation item when a user hovers over it. This project will focus on mastering CSS positioning, hover effects, and creating visually appealing tooltips without relying on JavaScript.</p>\n<p>The goal of this project is to help you understand how to use CSS for dynamic UI effects. You will learn how to position elements relative to each other, create smooth transitions, and make your navigation more interactive and user-friendly. Below is a rough mockup showing the tooltip appearing above a navigation item.</p>\n<p><a href=\"https://assets.roadmap.sh/guest/tooltip-zh8gm.png\" rel=\"noopener noreferrer nofollow\" target=\"_blank\"><img src=\"https://assets.roadmap.sh/guest/tooltip-zh8gm.png\" alt=\"Tooltip Mockup\"></a></p>\n<p>Bonus points for different animations for the tooltip, such as fade-in, slide-in, or scale-in effects.</p>\n<p>After completing this project, you will have a better understanding of CSS positioning, hover effects, and creating interactive UI elements without JavaScript.</p>";

				const frontmatter$4 = {"title":"Tooltip UI","description":"Create a tooltip for navigation items using only HTML and CSS.","isNew":false,"sort":9,"difficulty":"beginner","nature":"CSS","skills":["HTML","CSS","Positioning","Hover Effects"],"seo":{"title":"Create a CSS Tooltip for Navigation Items","description":"Learn how to create a tooltip that appears above navigation items on hover using only HTML and CSS.","keywords":["css tooltip","hover effects","navigation menu","html and css"]},"roadmapIds":["frontend"]};
				const file$4 = "/workspace/src/data/projects/tooltip-ui.md";
				const url$4 = undefined;
				function rawContent$4() {
					return "   \n                     \n                                                                               \n              \n         \n                        \n             \n         \n            \n           \n                 \n                   \n      \n                                                      \n                                                                                                                      \n             \n                   \n                     \n                       \n                      \n             \n                \n\n   \n\nIn this project, you are required to create a tooltip that appears above navigation items when hovered, using only HTML and CSS. A tooltip is a small pop-up box that provides additional information about a navigation item when a user hovers over it. This project will focus on mastering CSS positioning, hover effects, and creating visually appealing tooltips without relying on JavaScript.\n\nThe goal of this project is to help you understand how to use CSS for dynamic UI effects. You will learn how to position elements relative to each other, create smooth transitions, and make your navigation more interactive and user-friendly. Below is a rough mockup showing the tooltip appearing above a navigation item.\n\n[![Tooltip Mockup](https://assets.roadmap.sh/guest/tooltip-zh8gm.png)](https://assets.roadmap.sh/guest/tooltip-zh8gm.png)\n\nBonus points for different animations for the tooltip, such as fade-in, slide-in, or scale-in effects.\n\nAfter completing this project, you will have a better understanding of CSS positioning, hover effects, and creating interactive UI elements without JavaScript.";
				}
				async function compiledContent$4() {
					return await html$4();
				}
				function getHeadings$4() {
					return [];
				}

				const Content$4 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$4;
					content.file = file$4;
					content.url = url$4;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$4())}`;
				});

const __vite_glob_0_64 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$4,
	compiledContent: compiledContent$4,
	default: Content$4,
	file: file$4,
	frontmatter: frontmatter$4,
	getHeadings: getHeadings$4,
	rawContent: rawContent$4,
	url: url$4
}, Symbol.toStringTag, { value: 'Module' }));

const html$3 = () => "<p>You are required to build a simple web app that can convert between different units of measurement. It can convert units of length, weight, volume, area, temperature, and more. The user can input a value and select the units to convert from and to. The application will then display the converted value.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>Build a simple web page that will have different sections for different units of measurement. The user can input a value to convert, select the units to convert from and to, and view the converted value.</p>\n<ul>\n<li>The user can input a value to convert.</li>\n<li>The user can select the units to convert from and to.</li>\n<li>The user can view the converted value.</li>\n<li>The user can convert between different units of measurement like length, weight, temperature, etc (more given below).</li>\n</ul>\n<p>You can include the following units of measurement to convert between:</p>\n<ul>\n<li>Length: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile.</li>\n<li>Weight: milligram, gram, kilogram, ounce, pound.</li>\n<li>Temperature: Celsius, Fahrenheit, Kelvin.</li>\n</ul>\n<h2 id=\"how-it-works\">How it works</h2>\n<p>You don’t need to use any database for this project. There will be a simple webpage that will submit the form to the server and get the converted value back and display it on the webpage.</p>\n<p><img src=\"https://assets.roadmap.sh/guest/unit-converter-be-project.png\" alt=\"Unit Converter\"></p>\n<p>You can have 3 webpages for each type of unit conversion (length, weight, temperature) with forms to input the value and select the units to convert from and to. Submitting a form will submit the data to the current page (i.e. <code>target=\"_self\"</code>) and display the converted value. You can do this using the backend programming language of your choice i.e. check if the form is submitted and then calculate the converted value and display it on the webpage, if not submitted then display the form.</p>";

				const frontmatter$3 = {"title":"Unit Converter","description":"Unit converter to convert between different units of measurement.","isNew":false,"sort":500,"difficulty":"beginner","nature":"Web App","skills":["Programming Language","HTML","Server","Logic Building"],"seo":{"title":"Unit Converter","description":"Build a Unit Converter to convert between different units of measurement.","keywords":["unit converter","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$3 = "/workspace/src/data/projects/unit-converter.md";
				const url$3 = undefined;
				function rawContent$3() {
					return "   \n                       \n                                                                                \n            \n         \n                      \n                 \n       \n                          \n          \n            \n                    \n    \n                         \n                                                                                          \n           \n                      \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nYou are required to build a simple web app that can convert between different units of measurement. It can convert units of length, weight, volume, area, temperature, and more. The user can input a value and select the units to convert from and to. The application will then display the converted value.\n\n## Requirements\n\nBuild a simple web page that will have different sections for different units of measurement. The user can input a value to convert, select the units to convert from and to, and view the converted value.\n\n- The user can input a value to convert.\n- The user can select the units to convert from and to.\n- The user can view the converted value.\n- The user can convert between different units of measurement like length, weight, temperature, etc (more given below).\n\nYou can include the following units of measurement to convert between:\n\n- Length: millimeter, centimeter, meter, kilometer, inch, foot, yard, mile.\n- Weight: milligram, gram, kilogram, ounce, pound.\n- Temperature: Celsius, Fahrenheit, Kelvin.\n\n## How it works\n\nYou don't need to use any database for this project. There will be a simple webpage that will submit the form to the server and get the converted value back and display it on the webpage.\n\n![Unit Converter](https://assets.roadmap.sh/guest/unit-converter-be-project.png)\n\nYou can have 3 webpages for each type of unit conversion (length, weight, temperature) with forms to input the value and select the units to convert from and to. Submitting a form will submit the data to the current page (i.e. `target=\"_self\"`) and display the converted value. You can do this using the backend programming language of your choice i.e. check if the form is submitted and then calculate the converted value and display it on the webpage, if not submitted then display the form.\n\n";
				}
				async function compiledContent$3() {
					return await html$3();
				}
				function getHeadings$3() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":2,"slug":"how-it-works","text":"How it works"}];
				}

				const Content$3 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$3;
					content.file = file$3;
					content.url = url$3;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$3())}`;
				});

const __vite_glob_0_65 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$3,
	compiledContent: compiledContent$3,
	default: Content$3,
	file: file$3,
	frontmatter: frontmatter$3,
	getHeadings: getHeadings$3,
	rawContent: rawContent$3,
	url: url$3
}, Symbol.toStringTag, { value: 'Module' }));

const html$2 = () => "<p>You are required to create a simple RESTful API that allows users to shorten long URLs. The API should provide endpoints to create, retrieve, update, and delete short URLs. It should also provide statistics on the number of times a short URL has been accessed.</p>\n<p><img src=\"https://assets.roadmap.sh/guest/url-shortener-architecture-u72mu.png\" alt=\"URL Shortening Service\"></p>\n<h2 id=\"requirements\">Requirements</h2>\n<p>You should create a RESTful API for a URL shortening service. The API should allow users to perform the following operations:</p>\n<ul>\n<li>Create a new short URL</li>\n<li>Retrieve an original URL from a short URL</li>\n<li>Update an existing short URL</li>\n<li>Delete an existing short URL</li>\n<li>Get statistics on the short URL (e.g., number of times accessed)</li>\n</ul>\n<p>You can optionally setup a minimal frontend to interact with the API and setup redirects for the short URLs to the original URLs.</p>\n<h2 id=\"api-endpoints\">API Endpoints</h2>\n<p>Given below are the details for each API operation.</p>\n<h3 id=\"create-short-url\">Create Short URL</h3>\n<p>Create a new short URL using the <code>POST</code> method</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>POST /shorten</span></span>\n<span class=\"line\"><span>{</span></span>\n<span class=\"line\"><span>  \"url\": \"https://www.example.com/some/long/url\"</span></span>\n<span class=\"line\"><span>}</span></span></code></pre>\n<p>The endpoint should validate the request body and return a <code>201 Created</code> status code with the newly created short URL i.e.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">1</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">url</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">https://www.example.com/some/long/url</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">shortCode</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">abc123</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">createdAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">updatedAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<p>or a <code>400 Bad Request</code> status code with error messages in case of validation errors. Short codes must be unique and should be generated randomly.</p>\n<h2 id=\"retrieve-original-url\">Retrieve Original URL</h2>\n<p>Retrieve the original URL from a short URL using the <code>GET</code> method</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>GET /shorten/abc123</span></span></code></pre>\n<p>The endpoint should return a <code>200 OK</code> status code with the original URL i.e.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">1</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">url</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">https://www.example.com/some/long/url</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">shortCode</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">abc123</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">createdAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">updatedAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<p>or a <code>404 Not Found</code> status code if the short URL was not found. Your frontend should be responsible for retrieving the original URL using the short URL and redirecting the user to the original URL.</p>\n<h2 id=\"update-short-url\">Update Short URL</h2>\n<p>Update an existing short URL using the <code>PUT</code> method</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>PUT /shorten/abc123</span></span>\n<span class=\"line\"><span>{</span></span>\n<span class=\"line\"><span>  \"url\": \"https://www.example.com/some/updated/url\"</span></span>\n<span class=\"line\"><span>}</span></span></code></pre>\n<p>The endpoint should validate the request body and return a <code>200 OK</code> status code with the updated short URL i.e.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">1</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">url</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">https://www.example.com/some/updated/url</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">shortCode</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">abc123</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">createdAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">updatedAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:30:00Z</span><span style=\"color:#E9F284\">\"</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<p>or a <code>400 Bad Request</code> status code with error messages in case of validation errors. It should return a <code>404 Not Found</code> status code if the short URL was not found.</p>\n<h3 id=\"delete-short-url\">Delete Short URL</h3>\n<p>Delete an existing short URL using the <code>DELETE</code> method</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>DELETE /shorten/abc123</span></span></code></pre>\n<p>The endpoint should return a <code>204 No Content</code> status code if the short URL was successfully deleted or a <code>404 Not Found</code> status code if the short URL was not found.</p>\n<h3 id=\"get-url-statistics\">Get URL Statistics</h3>\n<p>Get statistics for a short URL using the <code>GET</code> method</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"plaintext\"><code><span class=\"line\"><span>GET /shorten/abc123/stats</span></span></code></pre>\n<p>The endpoint should return a <code>200 OK</code> status code with the statistics i.e.</p>\n<pre class=\"astro-code dracula\" style=\"background-color:#282A36;color:#F8F8F2; overflow-x: auto;\" tabindex=\"0\" data-language=\"json\"><code><span class=\"line\"><span style=\"color:#F8F8F2\">{</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">id</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">1</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">url</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">https://www.example.com/some/long/url</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">shortCode</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">abc123</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">createdAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">updatedAt</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#E9F284\"> \"</span><span style=\"color:#F1FA8C\">2021-09-01T12:00:00Z</span><span style=\"color:#E9F284\">\"</span><span style=\"color:#F8F8F2\">,</span></span>\n<span class=\"line\"><span style=\"color:#8BE9FE\">  \"</span><span style=\"color:#8BE9FD\">accessCount</span><span style=\"color:#8BE9FE\">\"</span><span style=\"color:#FF79C6\">:</span><span style=\"color:#BD93F9\"> 10</span></span>\n<span class=\"line\"><span style=\"color:#F8F8F2\">}</span></span></code></pre>\n<p>or a <code>404 Not Found</code> status code if the short URL was not found.</p>\n<hr>\n<h2 id=\"tech-stack\">Tech Stack</h2>\n<p>Feel free to use any programming language, framework, and database of your choice for this project. Here are some suggestions:</p>\n<ul>\n<li>If you are using JavaScript, you can use Node.js with Express.js</li>\n<li>If you are using Python, you can use Flask or Django</li>\n<li>If you are using Java, you can use Spring Boot</li>\n<li>If you are using Ruby, you can use Ruby on Rails</li>\n</ul>\n<p>For databases, you can use:</p>\n<ul>\n<li>MySQL if you are using SQL</li>\n<li>MongoDB if you are using NoSQL</li>\n</ul>\n<p>Your job is to implement the core functionality of the API, focusing on creating, retrieving, updating, and deleting short URLs, as well as tracking and retrieving access statistics. You don’t have to implement authentication or authorization for this project.</p>";

				const frontmatter$2 = {"title":"URL Shortening Service","description":"Build a URL Shortener API that helps shorten long URLs.","isNew":false,"sort":1400,"difficulty":"intermediate","nature":"API","skills":["Programming Language","Database Indexing","HTTP Redirects"],"seo":{"title":"URL Shortening Service Project Idea","description":"Build a URL Shortener API that helps shorten long URLs.","keywords":["url shortening service","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$2 = "/workspace/src/data/projects/url-shortening-service.md";
				const url$2 = undefined;
				function rawContent$2() {
					return "   \n                               \n                                                                      \n            \n          \n                          \n             \n       \n                          \n                       \n                    \n    \n                                              \n                                                                        \n           \n                              \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nYou are required to create a simple RESTful API that allows users to shorten long URLs. The API should provide endpoints to create, retrieve, update, and delete short URLs. It should also provide statistics on the number of times a short URL has been accessed.\n\n![URL Shortening Service](https://assets.roadmap.sh/guest/url-shortener-architecture-u72mu.png)\n\n## Requirements\n\nYou should create a RESTful API for a URL shortening service. The API should allow users to perform the following operations:\n\n- Create a new short URL\n- Retrieve an original URL from a short URL\n- Update an existing short URL\n- Delete an existing short URL\n- Get statistics on the short URL (e.g., number of times accessed)\n\nYou can optionally setup a minimal frontend to interact with the API and setup redirects for the short URLs to the original URLs.\n\n## API Endpoints\n\nGiven below are the details for each API operation.\n\n### Create Short URL\n\nCreate a new short URL using the `POST` method\n\n```plaintext\nPOST /shorten\n{\n  \"url\": \"https://www.example.com/some/long/url\"\n}\n```\n\nThe endpoint should validate the request body and return a `201 Created` status code with the newly created short URL i.e.\n\n```json\n{\n  \"id\": \"1\",\n  \"url\": \"https://www.example.com/some/long/url\",\n  \"shortCode\": \"abc123\",\n  \"createdAt\": \"2021-09-01T12:00:00Z\",\n  \"updatedAt\": \"2021-09-01T12:00:00Z\"\n}\n```\n\nor a `400 Bad Request` status code with error messages in case of validation errors. Short codes must be unique and should be generated randomly.\n\n## Retrieve Original URL\n\nRetrieve the original URL from a short URL using the `GET` method\n\n```plaintext\nGET /shorten/abc123\n```\n\nThe endpoint should return a `200 OK` status code with the original URL i.e.\n\n```json\n{\n  \"id\": \"1\",\n  \"url\": \"https://www.example.com/some/long/url\",\n  \"shortCode\": \"abc123\",\n  \"createdAt\": \"2021-09-01T12:00:00Z\",\n  \"updatedAt\": \"2021-09-01T12:00:00Z\"\n}\n```\n\nor a `404 Not Found` status code if the short URL was not found. Your frontend should be responsible for retrieving the original URL using the short URL and redirecting the user to the original URL.\n\n## Update Short URL\n\nUpdate an existing short URL using the `PUT` method\n\n```plaintext\nPUT /shorten/abc123\n{\n  \"url\": \"https://www.example.com/some/updated/url\"\n}\n```\n\nThe endpoint should validate the request body and return a `200 OK` status code with the updated short URL i.e.\n\n```json\n{\n  \"id\": \"1\",\n  \"url\": \"https://www.example.com/some/updated/url\",\n  \"shortCode\": \"abc123\",\n  \"createdAt\": \"2021-09-01T12:00:00Z\",\n  \"updatedAt\": \"2021-09-01T12:30:00Z\"\n}\n```\n\nor a `400 Bad Request` status code with error messages in case of validation errors. It should return a `404 Not Found` status code if the short URL was not found.\n\n### Delete Short URL\n\nDelete an existing short URL using the `DELETE` method\n\n```plaintext\nDELETE /shorten/abc123\n```\n\nThe endpoint should return a `204 No Content` status code if the short URL was successfully deleted or a `404 Not Found` status code if the short URL was not found.\n\n### Get URL Statistics\n\nGet statistics for a short URL using the `GET` method\n\n```plaintext\nGET /shorten/abc123/stats\n```\n\nThe endpoint should return a `200 OK` status code with the statistics i.e.\n\n```json\n{\n  \"id\": \"1\",\n  \"url\": \"https://www.example.com/some/long/url\",\n  \"shortCode\": \"abc123\",\n  \"createdAt\": \"2021-09-01T12:00:00Z\",\n  \"updatedAt\": \"2021-09-01T12:00:00Z\",\n  \"accessCount\": 10\n}\n```\n\nor a `404 Not Found` status code if the short URL was not found.\n\n<hr />\n\n## Tech Stack\n\nFeel free to use any programming language, framework, and database of your choice for this project. Here are some suggestions:\n\n- If you are using JavaScript, you can use Node.js with Express.js\n- If you are using Python, you can use Flask or Django\n- If you are using Java, you can use Spring Boot\n- If you are using Ruby, you can use Ruby on Rails\n\nFor databases, you can use:\n\n- MySQL if you are using SQL\n- MongoDB if you are using NoSQL\n\nYour job is to implement the core functionality of the API, focusing on creating, retrieving, updating, and deleting short URLs, as well as tracking and retrieving access statistics. You don't have to implement authentication or authorization for this project.";
				}
				async function compiledContent$2() {
					return await html$2();
				}
				function getHeadings$2() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":2,"slug":"api-endpoints","text":"API Endpoints"},{"depth":3,"slug":"create-short-url","text":"Create Short URL"},{"depth":2,"slug":"retrieve-original-url","text":"Retrieve Original URL"},{"depth":2,"slug":"update-short-url","text":"Update Short URL"},{"depth":3,"slug":"delete-short-url","text":"Delete Short URL"},{"depth":3,"slug":"get-url-statistics","text":"Get URL Statistics"},{"depth":2,"slug":"tech-stack","text":"Tech Stack"}];
				}

				const Content$2 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$2;
					content.file = file$2;
					content.url = url$2;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$2())}`;
				});

const __vite_glob_0_66 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$2,
	compiledContent: compiledContent$2,
	default: Content$2,
	file: file$2,
	frontmatter: frontmatter$2,
	getHeadings: getHeadings$2,
	rawContent: rawContent$2,
	url: url$2
}, Symbol.toStringTag, { value: 'Module' }));

const html$1 = () => "<p>In this project, instead of relying on our own weather data, we will build a weather API that fetches and returns weather data from a 3rd party API. This project will help you understand how to work with 3rd party APIs, caching, and environment variables.</p>\n<p><img src=\"https://assets.roadmap.sh/guest/weather-api-f8i1q.png\" alt=\"Weather API\"></p>\n<p>As for the actual weather API to use, you can use your favorite one, as a suggestion, here is a link to <a href=\"https://www.visualcrossing.com/weather-api\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Visual Crossing’s API</a>, it’s completely FREE and easy to use.</p>\n<p>Regarding the in-memory cache, a pretty common recommendation is to use <a href=\"https://redis.io/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Redis</a>, you can read more about it <a href=\"https://redis.io/docs/latest/develop/clients/client-side-caching/\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">here</a>, and as a recommendation, you could use the city code entered by the user as the key, and save there the result from calling the API.</p>\n<p>At the same time, when you “set” the value in the cache, you can also give it an expiration time in seconds (using the <code>EX</code> flag on the <code>SET</code> command). That way the cache (the keys) will automatically clean itself when the data is old enough (for example, giving it a 12-hours expiration time).</p>\n<hr>\n<h2 id=\"some-tips\">Some Tips</h2>\n<p>Here are some tips to help you get started:</p>\n<ul>\n<li>Start by creating a simple API that returns a hardcoded weather response. This will help you understand how to structure your API and how to handle requests.</li>\n<li>Use environment variables to store the API key and the Redis connection string. This way, you can easily change them without having to modify your code.</li>\n<li>Make sure to handle errors properly. If the 3rd party API is down, or if the city code is invalid, make sure to return the appropriate error message.</li>\n<li>Use some package or module to make HTTP requests e.g. if you are using Node.js, you can use the <code>axios</code> package, if you are using Python, you can use the <code>requests</code> module.</li>\n<li>Implement rate limiting to prevent abuse of your API. You can use a package like <code>express-rate-limit</code> if you are using Node.js or <code>flask-limiter</code> if you are using Python.</li>\n</ul>\n<p>This project will help you understand how to work with 3rd party APIs, caching, and environment variables. It will also help you understand how to structure your API and how to handle requests.</p>";

				const frontmatter$1 = {"title":"Weather API","description":"Build a weather API that fetches and returns weather data.","isNew":false,"sort":700,"difficulty":"beginner","nature":"API","skills":["Programming Language","3rd Party APIs","Caching","Environment Variables"],"seo":{"title":"Weather API Project Idea","description":"Build a weather API that fetches and returns weather data from a 3rd party API.","keywords":["weather api","backend project idea"]},"roadmapIds":["backend","php","nodejs","python","java","golang","spring-boot"]};
				const file$1 = "/workspace/src/data/projects/weather-api-wrapper-service.md";
				const url$1 = undefined;
				function rawContent$1() {
					return "   \n                    \n                                                                         \n            \n         \n                      \n             \n       \n                          \n                    \n             \n                           \n    \n                                   \n                                                                                                \n           \n                   \n                            \n           \n             \n         \n            \n            \n          \n            \n                 \n   \n\nIn this project, instead of relying on our own weather data, we will build a weather API that fetches and returns weather data from a 3rd party API. This project will help you understand how to work with 3rd party APIs, caching, and environment variables.\n\n![Weather API](https://assets.roadmap.sh/guest/weather-api-f8i1q.png)\n\nAs for the actual weather API to use, you can use your favorite one, as a suggestion, here is a link to [Visual Crossing’s API](https://www.visualcrossing.com/weather-api), it’s completely FREE and easy to use.\n\nRegarding the in-memory cache, a pretty common recommendation is to use [Redis](https://redis.io/), you can read more about it [here](https://redis.io/docs/latest/develop/clients/client-side-caching/), and as a recommendation, you could use the city code entered by the user as the key, and save there the result from calling the API.\n\nAt the same time, when you “set” the value in the cache, you can also give it an expiration time in seconds (using the `EX` flag on the `SET` command). That way the cache (the keys) will automatically clean itself when the data is old enough (for example, giving it a 12-hours expiration time).\n\n<hr />\n\n## Some Tips\n\nHere are some tips to help you get started:\n\n- Start by creating a simple API that returns a hardcoded weather response. This will help you understand how to structure your API and how to handle requests.\n- Use environment variables to store the API key and the Redis connection string. This way, you can easily change them without having to modify your code.\n- Make sure to handle errors properly. If the 3rd party API is down, or if the city code is invalid, make sure to return the appropriate error message.\n- Use some package or module to make HTTP requests e.g. if you are using Node.js, you can use the `axios` package, if you are using Python, you can use the `requests` module.\n- Implement rate limiting to prevent abuse of your API. You can use a package like `express-rate-limit` if you are using Node.js or `flask-limiter` if you are using Python.\n\nThis project will help you understand how to work with 3rd party APIs, caching, and environment variables. It will also help you understand how to structure your API and how to handle requests.\n";
				}
				async function compiledContent$1() {
					return await html$1();
				}
				function getHeadings$1() {
					return [{"depth":2,"slug":"some-tips","text":"Some Tips"}];
				}

				const Content$1 = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter$1;
					content.file = file$1;
					content.url = url$1;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html$1())}`;
				});

const __vite_glob_0_67 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content: Content$1,
	compiledContent: compiledContent$1,
	default: Content$1,
	file: file$1,
	frontmatter: frontmatter$1,
	getHeadings: getHeadings$1,
	rawContent: rawContent$1,
	url: url$1
}, Symbol.toStringTag, { value: 'Module' }));

const html = () => "<p>In this project you are required to build a weather app that displays the current weather details based on the location entered by the user. We will be leveraging a common weather API to achieve this.</p>\n<p>You can use the <a href=\"https://www.visualcrossing.com/weather-api\" rel=\"noopener noreferrer nofollow\" target=\"_blank\">Visual Crossing Weather API</a> to fetch the weather data.</p>\n<h2 id=\"requirements\">Requirements</h2>\n<ul>\n<li>The User should be able to enter a location into an input field</li>\n<li>The User will be presented with temperature, wind speed, likelihood of rain, and general weather i.e. Sunny, Raining, Cloudy etc.</li>\n<li>The User will be shown the previous and future 24 hour periods.</li>\n<li>The weather outlook can be refreshed by the user.</li>\n</ul>\n<h2 id=\"stretch-goals\">Stretch Goals</h2>\n<ul>\n<li>Animation libraries such as framer can used to make the loading of weather more visually appealing</li>\n<li>The default weather view is the Users current location.</li>\n</ul>";

				const frontmatter = {"title":"Weather Web App","description":"Build a weather app that fetches and displays weather for a given location.","isNew":false,"sort":31,"difficulty":"intermediate","nature":"API","skills":["Programming Language","3rd Party APIs","JavaScript","HMTL","CSS"],"seo":{"title":"Weather App Project Idea","description":"Build a web-based weather app that fetches and displays weather data.","keywords":["weather api","frontend project idea"]},"roadmapIds":["frontend"]};
				const file = "/workspace/src/data/projects/weather-app.md";
				const url = undefined;
				function rawContent() {
					return "   \n                        \n                                                                                          \n            \n        \n                          \n             \n       \n                          \n                    \n                \n          \n         \n    \n                                   \n                                                                                      \n           \n                   \n                             \n           \n              \n   \n\nIn this project you are required to build a weather app that displays the current weather details based on the location entered by the user. We will be leveraging a common weather API to achieve this.\n\nYou can use the [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api) to fetch the weather data.\n\n## Requirements\n\n- The User should be able to enter a location into an input field\n- The User will be presented with temperature, wind speed, likelihood of rain, and general weather i.e. Sunny, Raining, Cloudy etc.\n- The User will be shown the previous and future 24 hour periods.\n- The weather outlook can be refreshed by the user.\n\n## Stretch Goals\n\n- Animation libraries such as framer can used to make the loading of weather more visually appealing\n- The default weather view is the Users current location.\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":2,"slug":"requirements","text":"Requirements"},{"depth":2,"slug":"stretch-goals","text":"Stretch Goals"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const __vite_glob_0_68 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
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

const projectDifficulties = [
  "beginner",
  "intermediate",
  "advanced"
];
function projectPathToId(filePath) {
  const fileName = filePath.split("/").pop() || "";
  return fileName.replace(".md", "");
}
async function getProjectsByRoadmapId(roadmapId) {
  const projects = await getAllProjects();
  return projects.filter(
    (project) => project.frontmatter?.roadmapIds?.includes(roadmapId)
  );
}
let tempProjects = [];
async function getAllProjects() {
  if (tempProjects.length) {
    return tempProjects;
  }
  const projects = /* #__PURE__ */ Object.assign({"/src/data/projects/accessible-form-ui.md": __vite_glob_0_0,"/src/data/projects/accordion.md": __vite_glob_0_1,"/src/data/projects/age-calculator.md": __vite_glob_0_2,"/src/data/projects/automated-backups.md": __vite_glob_0_3,"/src/data/projects/basic-dns.md": __vite_glob_0_4,"/src/data/projects/basic-dockerfile.md": __vite_glob_0_5,"/src/data/projects/basic-html-website.md": __vite_glob_0_6,"/src/data/projects/bastion-host.md": __vite_glob_0_7,"/src/data/projects/blogging-platform-api.md": __vite_glob_0_8,"/src/data/projects/blue-green-deployment.md": __vite_glob_0_9,"/src/data/projects/broadcast-server.md": __vite_glob_0_10,"/src/data/projects/caching-server.md": __vite_glob_0_11,"/src/data/projects/changelog-component.md": __vite_glob_0_12,"/src/data/projects/configuration-management.md": __vite_glob_0_13,"/src/data/projects/cookie-consent.md": __vite_glob_0_14,"/src/data/projects/custom-dropdown.md": __vite_glob_0_15,"/src/data/projects/database-backup-utility.md": __vite_glob_0_16,"/src/data/projects/datepicker-ui.md": __vite_glob_0_17,"/src/data/projects/dockerized-service-deployment.md": __vite_glob_0_18,"/src/data/projects/dummy-systemd-service.md": __vite_glob_0_19,"/src/data/projects/ec2-instance.md": __vite_glob_0_20,"/src/data/projects/ecommerce-api.md": __vite_glob_0_21,"/src/data/projects/expense-tracker-api.md": __vite_glob_0_22,"/src/data/projects/expense-tracker.md": __vite_glob_0_23,"/src/data/projects/file-integrity-checker.md": __vite_glob_0_24,"/src/data/projects/fitness-workout-tracker.md": __vite_glob_0_25,"/src/data/projects/flash-cards.md": __vite_glob_0_26,"/src/data/projects/github-actions-deployment-workflow.md": __vite_glob_0_27,"/src/data/projects/github-random-repo.md": __vite_glob_0_28,"/src/data/projects/github-user-activity.md": __vite_glob_0_29,"/src/data/projects/iac-digitalocean.md": __vite_glob_0_30,"/src/data/projects/image-grid.md": __vite_glob_0_31,"/src/data/projects/image-processing-service.md": __vite_glob_0_32,"/src/data/projects/log-archive-tool.md": __vite_glob_0_33,"/src/data/projects/markdown-note-taking-app.md": __vite_glob_0_34,"/src/data/projects/monitoring.md": __vite_glob_0_35,"/src/data/projects/movie-reservation-system.md": __vite_glob_0_36,"/src/data/projects/multi-container-service.md": __vite_glob_0_37,"/src/data/projects/multiservice-docker.md": __vite_glob_0_38,"/src/data/projects/nginx-log-analyser.md": __vite_glob_0_39,"/src/data/projects/nodejs-service-deployment.md": __vite_glob_0_40,"/src/data/projects/number-guessing-game.md": __vite_glob_0_41,"/src/data/projects/personal-blog.md": __vite_glob_0_42,"/src/data/projects/pomodoro-timer.md": __vite_glob_0_43,"/src/data/projects/portfolio-website.md": __vite_glob_0_44,"/src/data/projects/quiz-app.md": __vite_glob_0_45,"/src/data/projects/realtime-leaderboard-system.md": __vite_glob_0_46,"/src/data/projects/reddit-client.md": __vite_glob_0_47,"/src/data/projects/restricted-textarea.md": __vite_glob_0_48,"/src/data/projects/scalable-ecommerce-platform.md": __vite_glob_0_49,"/src/data/projects/server-stats.md": __vite_glob_0_50,"/src/data/projects/service-discovery.md": __vite_glob_0_51,"/src/data/projects/simple-monitoring-dashboard.md": __vite_glob_0_52,"/src/data/projects/simple-tabs.md": __vite_glob_0_53,"/src/data/projects/single-page-cv.md": __vite_glob_0_54,"/src/data/projects/ssh-remote-server-setup.md": __vite_glob_0_55,"/src/data/projects/static-site-server.md": __vite_glob_0_56,"/src/data/projects/stories-feature.md": __vite_glob_0_57,"/src/data/projects/task-tracker-js.md": __vite_glob_0_58,"/src/data/projects/task-tracker.md": __vite_glob_0_59,"/src/data/projects/temperature-converter.md": __vite_glob_0_60,"/src/data/projects/testimonial-cards.md": __vite_glob_0_61,"/src/data/projects/tmdb-cli.md": __vite_glob_0_62,"/src/data/projects/todo-list-api.md": __vite_glob_0_63,"/src/data/projects/tooltip-ui.md": __vite_glob_0_64,"/src/data/projects/unit-converter.md": __vite_glob_0_65,"/src/data/projects/url-shortening-service.md": __vite_glob_0_66,"/src/data/projects/weather-api-wrapper-service.md": __vite_glob_0_67,"/src/data/projects/weather-app.md": __vite_glob_0_68




});
  tempProjects = Object.values(projects).map((projectFile) => ({
    ...projectFile,
    id: projectPathToId(projectFile.file)
  }));
  return tempProjects;
}
async function getProjectById(groupId) {
  const project = await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../data/projects/accessible-form-ui.md": () => Promise.resolve().then(() => __vite_glob_0_0),"../data/projects/accordion.md": () => Promise.resolve().then(() => __vite_glob_0_1),"../data/projects/age-calculator.md": () => Promise.resolve().then(() => __vite_glob_0_2),"../data/projects/automated-backups.md": () => Promise.resolve().then(() => __vite_glob_0_3),"../data/projects/basic-dns.md": () => Promise.resolve().then(() => __vite_glob_0_4),"../data/projects/basic-dockerfile.md": () => Promise.resolve().then(() => __vite_glob_0_5),"../data/projects/basic-html-website.md": () => Promise.resolve().then(() => __vite_glob_0_6),"../data/projects/bastion-host.md": () => Promise.resolve().then(() => __vite_glob_0_7),"../data/projects/blogging-platform-api.md": () => Promise.resolve().then(() => __vite_glob_0_8),"../data/projects/blue-green-deployment.md": () => Promise.resolve().then(() => __vite_glob_0_9),"../data/projects/broadcast-server.md": () => Promise.resolve().then(() => __vite_glob_0_10),"../data/projects/caching-server.md": () => Promise.resolve().then(() => __vite_glob_0_11),"../data/projects/changelog-component.md": () => Promise.resolve().then(() => __vite_glob_0_12),"../data/projects/configuration-management.md": () => Promise.resolve().then(() => __vite_glob_0_13),"../data/projects/cookie-consent.md": () => Promise.resolve().then(() => __vite_glob_0_14),"../data/projects/custom-dropdown.md": () => Promise.resolve().then(() => __vite_glob_0_15),"../data/projects/database-backup-utility.md": () => Promise.resolve().then(() => __vite_glob_0_16),"../data/projects/datepicker-ui.md": () => Promise.resolve().then(() => __vite_glob_0_17),"../data/projects/dockerized-service-deployment.md": () => Promise.resolve().then(() => __vite_glob_0_18),"../data/projects/dummy-systemd-service.md": () => Promise.resolve().then(() => __vite_glob_0_19),"../data/projects/ec2-instance.md": () => Promise.resolve().then(() => __vite_glob_0_20),"../data/projects/ecommerce-api.md": () => Promise.resolve().then(() => __vite_glob_0_21),"../data/projects/expense-tracker-api.md": () => Promise.resolve().then(() => __vite_glob_0_22),"../data/projects/expense-tracker.md": () => Promise.resolve().then(() => __vite_glob_0_23),"../data/projects/file-integrity-checker.md": () => Promise.resolve().then(() => __vite_glob_0_24),"../data/projects/fitness-workout-tracker.md": () => Promise.resolve().then(() => __vite_glob_0_25),"../data/projects/flash-cards.md": () => Promise.resolve().then(() => __vite_glob_0_26),"../data/projects/github-actions-deployment-workflow.md": () => Promise.resolve().then(() => __vite_glob_0_27),"../data/projects/github-random-repo.md": () => Promise.resolve().then(() => __vite_glob_0_28),"../data/projects/github-user-activity.md": () => Promise.resolve().then(() => __vite_glob_0_29),"../data/projects/iac-digitalocean.md": () => Promise.resolve().then(() => __vite_glob_0_30),"../data/projects/image-grid.md": () => Promise.resolve().then(() => __vite_glob_0_31),"../data/projects/image-processing-service.md": () => Promise.resolve().then(() => __vite_glob_0_32),"../data/projects/log-archive-tool.md": () => Promise.resolve().then(() => __vite_glob_0_33),"../data/projects/markdown-note-taking-app.md": () => Promise.resolve().then(() => __vite_glob_0_34),"../data/projects/monitoring.md": () => Promise.resolve().then(() => __vite_glob_0_35),"../data/projects/movie-reservation-system.md": () => Promise.resolve().then(() => __vite_glob_0_36),"../data/projects/multi-container-service.md": () => Promise.resolve().then(() => __vite_glob_0_37),"../data/projects/multiservice-docker.md": () => Promise.resolve().then(() => __vite_glob_0_38),"../data/projects/nginx-log-analyser.md": () => Promise.resolve().then(() => __vite_glob_0_39),"../data/projects/nodejs-service-deployment.md": () => Promise.resolve().then(() => __vite_glob_0_40),"../data/projects/number-guessing-game.md": () => Promise.resolve().then(() => __vite_glob_0_41),"../data/projects/personal-blog.md": () => Promise.resolve().then(() => __vite_glob_0_42),"../data/projects/pomodoro-timer.md": () => Promise.resolve().then(() => __vite_glob_0_43),"../data/projects/portfolio-website.md": () => Promise.resolve().then(() => __vite_glob_0_44),"../data/projects/quiz-app.md": () => Promise.resolve().then(() => __vite_glob_0_45),"../data/projects/realtime-leaderboard-system.md": () => Promise.resolve().then(() => __vite_glob_0_46),"../data/projects/reddit-client.md": () => Promise.resolve().then(() => __vite_glob_0_47),"../data/projects/restricted-textarea.md": () => Promise.resolve().then(() => __vite_glob_0_48),"../data/projects/scalable-ecommerce-platform.md": () => Promise.resolve().then(() => __vite_glob_0_49),"../data/projects/server-stats.md": () => Promise.resolve().then(() => __vite_glob_0_50),"../data/projects/service-discovery.md": () => Promise.resolve().then(() => __vite_glob_0_51),"../data/projects/simple-monitoring-dashboard.md": () => Promise.resolve().then(() => __vite_glob_0_52),"../data/projects/simple-tabs.md": () => Promise.resolve().then(() => __vite_glob_0_53),"../data/projects/single-page-cv.md": () => Promise.resolve().then(() => __vite_glob_0_54),"../data/projects/ssh-remote-server-setup.md": () => Promise.resolve().then(() => __vite_glob_0_55),"../data/projects/static-site-server.md": () => Promise.resolve().then(() => __vite_glob_0_56),"../data/projects/stories-feature.md": () => Promise.resolve().then(() => __vite_glob_0_57),"../data/projects/task-tracker-js.md": () => Promise.resolve().then(() => __vite_glob_0_58),"../data/projects/task-tracker.md": () => Promise.resolve().then(() => __vite_glob_0_59),"../data/projects/temperature-converter.md": () => Promise.resolve().then(() => __vite_glob_0_60),"../data/projects/testimonial-cards.md": () => Promise.resolve().then(() => __vite_glob_0_61),"../data/projects/tmdb-cli.md": () => Promise.resolve().then(() => __vite_glob_0_62),"../data/projects/todo-list-api.md": () => Promise.resolve().then(() => __vite_glob_0_63),"../data/projects/tooltip-ui.md": () => Promise.resolve().then(() => __vite_glob_0_64),"../data/projects/unit-converter.md": () => Promise.resolve().then(() => __vite_glob_0_65),"../data/projects/url-shortening-service.md": () => Promise.resolve().then(() => __vite_glob_0_66),"../data/projects/weather-api-wrapper-service.md": () => Promise.resolve().then(() => __vite_glob_0_67),"../data/projects/weather-app.md": () => Promise.resolve().then(() => __vite_glob_0_68)})), `../data/projects/${groupId}.md`, 4);
  const roadmapIds = project.frontmatter.roadmapIds || [];
  const roadmaps = await Promise.all(
    roadmapIds.map((roadmapId) => getRoadmapById(roadmapId))
  );
  return {
    ...project,
    roadmaps,
    id: projectPathToId(project.file)
  };
}
async function getRoadmapsProjects() {
  const projects = await getAllProjects();
  const roadmapsProjects = {};
  projects.forEach((project) => {
    project.frontmatter.roadmapIds.forEach((roadmapId) => {
      if (!roadmapsProjects[roadmapId]) {
        roadmapsProjects[roadmapId] = [];
      }
      roadmapsProjects[roadmapId].push(project);
    });
  });
  return roadmapsProjects;
}

export { getRoadmapsProjects as a, getAllProjects as b, getProjectById as c, getProjectsByRoadmapId as g, projectDifficulties as p };
