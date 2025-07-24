import { c as createAstro, a as createComponent, m as maybeRenderHead, s as spreadAttributes, u as unescapeHTML, b as renderTemplate, g as renderScript, e as addAttribute, r as renderComponent, d as renderSlot, av as renderHead, F as Fragment$2 } from './astro/server_Cqa-EqH9.mjs';
/* empty css                           */
import { clsx } from 'clsx';
import { parse } from 'node-html-parser';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useEffect, useRef, useState, useId, Fragment as Fragment$1 } from 'react';
import * as jose from 'jose';
import Cookies from 'js-cookie';
import { twMerge } from 'tailwind-merge';
import fp from '@fingerprintjs/fingerprintjs';
import { X, Cookie, Menu, Database, ArrowRight, FolderKanban, BookOpenText, Users, Map, Sparkles, Globe, ChevronDown, Plus, Swords, MessageCircle } from 'lucide-react';
import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

const accept = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"#000\" class=\"w-6 h-6\">\n  <path stroke-linecap=\"round\" strokeLinejoin=\"round\" d=\"M4.5 12.75l6 6 9-13.5\" />\n</svg>\n";

const __vite_glob_0_0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: accept
}, Symbol.toStringTag, { value: 'Module' }));

const analytics = "<svg viewBox=\"0 0 14 14\" focusable=\"false\" fill=\"currentColor\">\n    <path d=\"M 8 1C 8 0.447693 8.44772 0 9 0C 9.55228 0 10 0.447693 10 1L 10 13C 10 13.5523 9.55228 14 9 14C 8.44772 14 8 13.5523 8 13L 8 1ZM 5 4C 4.44772 4 4 4.44769 4 5L 4 13C 4 13.5523 4.44772 14 5 14C 5.55228 14 6 13.5523 6 13L 6 5C 6 4.44769 5.55228 4 5 4ZM 1 8C 0.447716 8 0 8.44769 0 9L 0 13C 0 13.5523 0.447716 14 1 14C 1.55228 14 2 13.5523 2 13L 2 9C 2 8.44769 1.55228 8 1 8ZM 13 6C 12.4477 6 12 6.44769 12 7L 12 13C 12 13.5523 12.4477 14 13 14C 13.5523 14 14 13.5523 14 13L 14 7C 14 6.44769 13.5523 6 13 6Z\" />\n</svg>";

const __vite_glob_0_1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: analytics
}, Symbol.toStringTag, { value: 'Module' }));

const badge = "<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 384 512\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M256 48V64c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H256zM0 64C0 28.7 28.7 0 64 0H320c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zM160 320h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H96c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z\"></path></svg>\n";

const __vite_glob_0_2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: badge
}, Symbol.toStringTag, { value: 'Module' }));

const bell = "<svg viewBox=\"0 0 24 24\" class='h-24 w-24 mx-auto mb-5 text-gray-300' focusable=\"false\">\n  <path fill=\"currentColor\" d=\"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z\"></path>\n</svg>\n";

const __vite_glob_0_3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: bell
}, Symbol.toStringTag, { value: 'Module' }));

const bestPractices = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n     stroke-width=\"1.5\" stroke-linecap=\"round\" strokeLinejoin=\"round\">\n    <line x1=\"10\" x2=\"21\" y1=\"6\" y2=\"6\"></line>\n    <line x1=\"10\" x2=\"21\" y1=\"12\" y2=\"12\"></line>\n    <line x1=\"10\" x2=\"21\" y1=\"18\" y2=\"18\"></line>\n    <polyline points=\"3 6 4 7 6 5\"></polyline>\n    <polyline points=\"3 12 4 13 6 11\"></polyline>\n    <polyline points=\"3 18 4 19 6 17\"></polyline>\n</svg>\n";

const __vite_glob_0_4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: bestPractices
}, Symbol.toStringTag, { value: 'Module' }));

const blusky = "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\" id=\"Bluesky--Streamline-Simple-Icons\" height=\"24\" width=\"24\"><desc>Bluesky Streamline Icon: https://streamlinehq.com</desc><title>Bluesky</title><path d=\"M12 10.8c-1.087 -2.114 -4.046 -6.053 -6.798 -7.995C2.566 0.944 1.561 1.266 0.902 1.565 0.139 1.908 0 3.08 0 3.768c0 0.69 0.378 5.65 0.624 6.479 0.815 2.736 3.713 3.66 6.383 3.364 0.136 -0.02 0.275 -0.039 0.415 -0.056 -0.138 0.022 -0.276 0.04 -0.415 0.056 -3.912 0.58 -7.387 2.005 -2.83 7.078 5.013 5.19 6.87 -1.113 7.823 -4.308 0.953 3.195 2.05 9.271 7.733 4.308 4.267 -4.308 1.172 -6.498 -2.74 -7.078a8.741 8.741 0 0 1 -0.415 -0.056c0.14 0.017 0.279 0.036 0.415 0.056 2.67 0.297 5.568 -0.628 6.383 -3.364 0.246 -0.828 0.624 -5.79 0.624 -6.478 0 -0.69 -0.139 -1.861 -0.902 -2.206 -0.659 -0.298 -1.664 -0.62 -4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z\" fill=\"currentColor\" stroke-width=\"1\"></path></svg>";

const __vite_glob_0_5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: blusky
}, Symbol.toStringTag, { value: 'Module' }));

const bolt = "<svg class='w-4 h-4 fill-current' viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <path\n        d=\"M7.41016 2.5C7.05632 2.5 6.75061 2.74731 6.6767 3.09336L4.4267 13.6285C4.37942 13.8499 4.43468 14.0809 4.57707 14.2569C4.71947 14.4329 4.93376 14.5352 5.16016 14.5352H10.6842L10.0637 21.6852C10.0338 22.0302 10.244 22.3509 10.5724 22.4611C10.9008 22.5712 11.2619 22.4422 11.4461 22.1489L19.4749 9.36368C19.6201 9.13255 19.6282 8.84081 19.4962 8.60195C19.3641 8.36309 19.1127 8.21482 18.8398 8.21482L13.1876 8.21482L15.368 3.56863C15.477 3.33632 15.4597 3.0644 15.3221 2.8478C15.1845 2.6312 14.9457 2.5 14.6891 2.5H7.41016Z\"\n        fill=\"currentColor\" />\n</svg>";

const __vite_glob_0_6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: bolt
}, Symbol.toStringTag, { value: 'Module' }));

const building = "<svg data-v-56bd7dfc=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-building-2\"><path d=\"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z\"></path><path d=\"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2\"></path><path d=\"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2\"></path><path d=\"M10 6h4\"></path><path d=\"M10 10h4\"></path><path d=\"M10 14h4\"></path><path d=\"M10 18h4\"></path></svg>";

const __vite_glob_0_7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: building
}, Symbol.toStringTag, { value: 'Module' }));

const bulb = "<svg width=\"22\" height=\"26\" viewBox=\"0 0 22 26\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"h-3\">\n    <path d=\"M13 20.5833H8.66667C8.36767 20.5833 8.125 20.826 8.125 21.125C8.125 21.424 8.36767 21.6667 8.66667 21.6667H13C13.299 21.6667 13.5417 21.424 13.5417 21.125C13.5417 20.826 13.299 20.5833 13 20.5833ZM13 22.75H8.66667C8.36767 22.75 8.125 22.9927 8.125 23.2917C8.125 23.5907 8.36767 23.8333 8.66667 23.8333H13C13.299 23.8333 13.5417 23.5907 13.5417 23.2917C13.5417 22.9927 13.299 22.75 13 22.75ZM13.2708 24.9167H8.39583L9.68283 25.7638C9.84967 25.9133 10.0945 26 10.3491 26H11.3187C11.5722 26 11.8181 25.9133 11.9849 25.7638L13.2708 24.9167ZM17.3333 9.96775C17.3333 13.8342 13.8515 16.4493 13.8515 19.5H7.81517C7.81517 16.4493 4.33333 13.8342 4.33333 9.96775C4.33333 5.9345 7.58117 3.71475 10.8301 3.71475C14.0812 3.71475 17.3333 5.93667 17.3333 9.96775ZM21.6667 9.21917V10.7055H18.9172C18.9388 10.4639 18.9583 10.2202 18.9583 9.96775C18.9583 9.711 18.9399 9.46508 18.9204 9.22025H21.6667V9.21917ZM10.1313 2.12008V0H11.6166V2.12767C11.3544 2.10383 11.0922 2.08975 10.8301 2.08975C10.5972 2.08975 10.3642 2.10058 10.1313 2.12008ZM6.07642 3.52192L4.94975 1.42025L6.25842 0.71825L7.38183 2.81233C6.929 3.00842 6.49133 3.24675 6.07642 3.52192ZM17.5446 5.4015L19.6484 3.89133L20.514 5.09925L18.2888 6.695C18.0819 6.22917 17.8306 5.79908 17.5446 5.4015ZM14.2837 2.81342L15.4082 0.71825L16.7169 1.42025L15.5892 3.523C15.1753 3.24783 14.7377 3.01058 14.2837 2.81342ZM3.37675 6.695L1.15158 5.10033L2.01717 3.89242L4.121 5.4015C3.835 5.798 3.58475 6.22808 3.37675 6.695ZM18.226 13.4366L20.7762 14.4701L20.2193 15.847L17.5922 14.7832C17.8197 14.3531 18.0342 13.9035 18.226 13.4366ZM4.02567 14.6878L1.47333 15.8362L0.8645 14.4809L3.3995 13.3413C3.58692 13.8103 3.80142 14.2567 4.02567 14.6878ZM2.7495 10.7055H0V9.21917H2.74625C2.72675 9.464 2.70833 9.711 2.70833 9.96775C2.70833 10.2202 2.72783 10.4639 2.7495 10.7055Z\" fill=\"currentColor\"></path>\n</svg>";

const __vite_glob_0_8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: bulb
}, Symbol.toStringTag, { value: 'Module' }));

const chat = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-message-circle\"><path d=\"m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z\"/></svg>";

const __vite_glob_0_9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: chat
}, Symbol.toStringTag, { value: 'Module' }));

const checkCurrent = "<svg width=\"14\" height=\"10\" viewBox=\"0 0 14 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M5.5 9.99933L14 1.49933L12.5 0L5.5 6.99933L1.5 2.99687L0 4.49933L5.5 9.99933Z\" fill=\"currentColor\"/>\n</svg>\n";

const __vite_glob_0_10 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: checkCurrent
}, Symbol.toStringTag, { value: 'Module' }));

const check = "<svg width=\"14\" height=\"10\" viewBox=\"0 0 14 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M5.5 9.99933L14 1.49933L12.5 0L5.5 6.99933L1.5 2.99687L0 4.49933L5.5 9.99933Z\" fill=\"white\"/>\n</svg>\n";

const __vite_glob_0_11 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: check
}, Symbol.toStringTag, { value: 'Module' }));

const chevronDown = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\">\n  <path stroke-linecap=\"round\" strokeLinejoin=\"round\" d=\"M19.5 8.25l-7.5 7.5-7.5-7.5\" />\n</svg>\n";

const __vite_glob_0_12 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: chevronDown
}, Symbol.toStringTag, { value: 'Module' }));

const clipboard = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\"\n     stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-clipboard-list\">\n    <rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\" ry=\"1\"/>\n    <path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/>\n    <path d=\"M12 11h4\"/>\n    <path d=\"M12 16h4\"/>\n    <path d=\"M8 11h.01\"/>\n    <path d=\"M8 16h.01\"/>\n</svg>";

const __vite_glob_0_13 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: clipboard
}, Symbol.toStringTag, { value: 'Module' }));

const closeDark = "<svg aria-hidden=\"true\" class=\"w-5 h-5\" fill=\"#000\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\"\n        d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\"\n        clipRule=\"evenodd\"></path>\n</svg>";

const __vite_glob_0_14 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: closeDark
}, Symbol.toStringTag, { value: 'Module' }));

const close = "<svg aria-hidden=\"true\" class=\"w-5 h-5\" fill=\"#c6c7c7\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\"\n        d=\"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z\"\n        clipRule=\"evenodd\"></path>\n</svg>";

const __vite_glob_0_15 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: close
}, Symbol.toStringTag, { value: 'Module' }));

const cog = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" class=\"w-6 h-6\">\n  <path stroke-linecap=\"round\" strokeLinejoin=\"round\" d=\"M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z\" />\n  <path stroke-linecap=\"round\" strokeLinejoin=\"round\" d=\"M15 12a3 3 0 11-6 0 3 3 0 016 0z\" />\n</svg>\n";

const __vite_glob_0_16 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: cog
}, Symbol.toStringTag, { value: 'Module' }));

const comment = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 14\"><path fill=\"currentColor\" d=\"M.913.921C1.499.332 2.293 0 3.123 0h7.753c.83 0 1.625.332 2.21.921S14 2.307 14 3.137v4.992c-.004.385-.094.842-.237 1.199-.15.354-.408.742-.676 1.018a3.51 3.51 0 0 1-1.014.681 3.5 3.5 0 0 1-1.197.239h-.753v1.301h-.002c-.001.225-.058.511-.143.694-.115.204-.366.458-.57.576h0l-.003.001c-.176.086-.46.155-.655.16h-.003a1.48 1.48 0 0 1-1.038-.438l-2.315-2.295H3.123c-.83 0-1.625-.332-2.21-.921-.268-.275-.526-.663-.676-1.018C.094 8.971.004 8.514 0 8.129V3.137C0 2.307.328 1.509.913.921zm2.21.674a1.52 1.52 0 0 0-1.079.45 1.55 1.55 0 0 0-.449 1.092v4.992c-.004.23.026.381.117.592.084.213.169.341.332.501a1.52 1.52 0 0 0 1.079.45h2.6c.21 0 .412.083.561.231l2.243 2.224v-1.657a.8.8 0 0 1 .797-.797h1.551a1.24 1.24 0 0 0 .583-.117 1.25 1.25 0 0 0 .496-.333c.164-.159.249-.287.332-.501.091-.211.121-.362.117-.592V3.137a1.55 1.55 0 0 0-.449-1.092 1.52 1.52 0 0 0-1.079-.45H3.123z\"/></svg>";

const __vite_glob_0_17 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: comment
}, Symbol.toStringTag, { value: 'Module' }));

const construction = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 68 68\" width=\"150\" height=\"150\" xmlns:v=\"https://vecta.io/nano\"><path fill=\"#febb50\" d=\"M66 34.005C66 51.678 51.678 66 34.005 66 16.322 66 2 51.678 2 34.005S16.322 2 34.005 2C51.678 2 66 16.332 66 34.005\"/><path d=\"M28.771 28.236a7.82 7.82 0 0 1-.139 1.484 8.65 8.65 0 0 1-8.524 7.167 8.61 8.61 0 0 1-4.07-1.02 8.64 8.64 0 0 1-4.581-7.631c0-4.789 3.874-8.663 8.651-8.663s8.663 3.874 8.663 8.663\"/><g fill=\"#fff\"><path d=\"M25.962 25.68c0 1.415-1.148 2.551-2.563 2.551a2.55 2.55 0 1 1 0-5.102c1.415 0 2.563 1.136 2.563 2.551\"/><use xlink:href=\"#B\"/></g><path d=\"M33.759 40.213a10.84 10.84 0 0 0-10.821 10.831c0 .763.619 1.382 1.383 1.382a1.38 1.38 0 0 0 1.382-1.382c0-4.448 3.614-8.066 8.056-8.066a8.08 8.08 0 0 1 8.066 8.066c0 .763.619 1.382 1.382 1.382s1.383-.619 1.383-1.382c0-5.973-4.859-10.831-10.831-10.831m22.783-11.977a7.82 7.82 0 0 1-.139 1.484 8.65 8.65 0 0 1-8.524 7.167c-1.472 0-2.853-.371-4.07-1.02a8.64 8.64 0 0 1-4.581-7.631c0-4.789 3.874-8.663 8.651-8.663s8.663 3.874 8.663 8.663\"/><g fill=\"#fff\"><path d=\"M53.733 25.68c0 1.415-1.148 2.551-2.563 2.551a2.55 2.55 0 1 1 0-5.102c1.415 0 2.563 1.136 2.563 2.551\"/><use xlink:href=\"#B\" x=\"27.771\"/></g><defs ><path id=\"B\" d=\"M16.52 29.391a1.78 1.78 0 0 1-1.785 1.777c-.978 0-1.777-.791-1.777-1.777s.799-1.777 1.777-1.777a1.78 1.78 0 0 1 1.785 1.777\"/></defs></svg>";

const __vite_glob_0_18 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: construction
}, Symbol.toStringTag, { value: 'Module' }));

const copy = "<svg stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\" viewBox=\"0 0 24 24\" stroke-linecap=\"round\" strokeLinejoin=\"round\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"></path><path d=\"M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z\"></path><path d=\"M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2\"></path></svg>\n";

const __vite_glob_0_19 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: copy
}, Symbol.toStringTag, { value: 'Module' }));

const creditCard = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-credit-card\"><rect width=\"20\" height=\"14\" x=\"2\" y=\"5\" rx=\"2\"/><line x1=\"2\" x2=\"22\" y1=\"10\" y2=\"10\"/></svg>";

const __vite_glob_0_20 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: creditCard
}, Symbol.toStringTag, { value: 'Module' }));

const discord = "<svg width=\"20\" height=\"15\" viewBox=\"0 0 20 15\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<g clip-path=\"url(#clip0_1303_4)\">\n<path d=\"M2.79481 1.71886C2.80349 1.70994 2.81651 1.70101 2.82953 1.68762C3.86686 0.830474 5.25576 0.392973 6.23667 0.183152C7.20455 -0.0266694 8.17242 0.540293 8.48492 1.50012C8.48925 1.51798 8.49792 1.53136 8.5023 1.54922C6.87467 1.71886 5.42067 2.17869 4.24013 2.89744C3.93196 3.08494 3.83214 3.49565 4.01443 3.81708C4.13596 4.0269 4.35296 4.14298 4.57434 4.14298C4.68717 4.14298 4.80438 4.11172 4.90855 4.04923C6.23667 3.23672 7.9988 2.80815 9.99967 2.80815C12.0005 2.80815 13.7627 3.23672 15.0908 4.04923C15.4033 4.23673 15.8026 4.13404 15.9849 3.81708C16.1672 3.49565 16.0674 3.08494 15.7592 2.89744C14.5787 2.17869 13.1247 1.71886 11.4971 1.54922C11.5014 1.53136 11.5101 1.51798 11.5144 1.50012C11.8269 0.540293 12.7948 -0.0266694 13.7627 0.183152C14.7436 0.392973 16.1325 0.830474 17.1698 1.68762C17.1828 1.70101 17.1958 1.70994 17.2045 1.71886C18.1681 2.63851 19.9476 7.31707 19.9476 11.5671C19.9476 11.6831 19.9215 11.7947 19.8651 11.8974C18.8061 13.8126 16.3104 14.5135 15.2818 14.7233C15.1559 14.7501 15.03 14.7635 14.9042 14.7635C14.2879 14.7635 13.6933 14.4599 13.3243 13.9331L13.0986 13.6162C15.3339 13.0715 16.4797 12.0894 16.5448 12.0314C16.8183 11.7903 16.853 11.3707 16.6186 11.0894C16.3842 10.8082 15.9763 10.7724 15.7028 11.009C15.6681 11.0403 13.754 12.6341 9.99967 12.6341C6.22796 12.6341 4.31392 11.0269 4.29655 11.009C4.02311 10.7724 3.61078 10.8082 3.38075 11.0939C3.15071 11.3751 3.1811 11.7947 3.45453 12.0314C3.51964 12.0894 4.66546 13.0715 6.90071 13.6162L6.67501 13.9331C6.30609 14.4599 5.71146 14.7635 5.09517 14.7635C4.9693 14.7635 4.84342 14.7501 4.71755 14.7233C3.68891 14.5135 1.19325 13.8126 0.134222 11.8974C0.0777986 11.7947 0.0517578 11.6831 0.0517578 11.5671C0.0517578 7.31707 1.83127 2.63851 2.79481 1.71886ZM12.8078 10.3573C13.6368 10.3573 14.3096 9.56707 14.3096 8.58941C14.3096 7.61171 13.6368 6.82156 12.8078 6.82156C11.9745 6.82156 11.3018 7.61171 11.3018 8.58941C11.3018 9.56707 11.9745 10.3573 12.8078 10.3573ZM7.20455 10.393C8.04221 10.393 8.72363 9.59386 8.72363 8.60724C8.72363 7.62067 8.04221 6.82156 7.20455 6.82156C6.36251 6.82156 5.68542 7.62067 5.68542 8.60724C5.68542 9.59386 6.36251 10.393 7.20455 10.393Z\" fill=\"currentColor\"/>\n</g>\n<defs>\n<clipPath id=\"clip0_1303_4\">\n<rect width=\"20\" height=\"15\" fill=\"currentColor\"/>\n</clipPath>\n</defs>\n</svg>\n";

const __vite_glob_0_21 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: discord
}, Symbol.toStringTag, { value: 'Module' }));

const down = "<svg clipRule=\"evenodd\" fill-rule=\"evenodd\" strokeLinejoin=\"round\" stroke-miterlimit=\"2\" viewBox=\"0 0 24 24\"\n    xmlns=\"http://www.w3.org/2000/svg\">\n    <path d=\"m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z\" fill=\"currentColor\" />\n</svg>";

const __vite_glob_0_22 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: down
}, Symbol.toStringTag, { value: 'Module' }));

const download = "<svg viewBox=\"0 0 14 14\" focusable=\"false\" class='h-3 w-3' aria-hidden=\"true\">\n  <path fill=\"currentColor\" d=\"M11.2857,6.05714 L10.08571,4.85714 L7.85714,7.14786 L7.85714,1 L6.14286,1 L6.14286,7.14786 L3.91429,4.85714 L2.71429,6.05714 L7,10.42857 L11.2857,6.05714 Z M1,11.2857 L1,13 L13,13 L13,11.2857 L1,11.2857 Z\"></path>\n</svg>\n";

const __vite_glob_0_23 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: download
}, Symbol.toStringTag, { value: 'Module' }));

const dropdown = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-5 h-5\">\n  <path stroke-linecap=\"round\" strokeLinejoin=\"round\" d=\"M19.5 8.25l-7.5 7.5-7.5-7.5\" />\n</svg>\n";

const __vite_glob_0_24 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: dropdown
}, Symbol.toStringTag, { value: 'Module' }));

const email = "<svg viewBox=\"0 0 24 24\" focusable=\"false\" class='h-3 w-3' aria-hidden=\"true\">\n  <path fill=\"currentColor\"\n        d=\"M12,.5A11.634,11.634,0,0,0,.262,12,11.634,11.634,0,0,0,12,23.5a11.836,11.836,0,0,0,6.624-2,1.25,1.25,0,1,0-1.393-2.076A9.34,9.34,0,0,1,12,21a9.132,9.132,0,0,1-9.238-9A9.132,9.132,0,0,1,12,3a9.132,9.132,0,0,1,9.238,9v.891a1.943,1.943,0,0,1-3.884,0V12A5.355,5.355,0,1,0,12,17.261a5.376,5.376,0,0,0,3.861-1.634,4.438,4.438,0,0,0,7.877-2.736V12A11.634,11.634,0,0,0,12,.5Zm0,14.261A2.763,2.763,0,1,1,14.854,12,2.812,2.812,0,0,1,12,14.761Z\"></path>\n</svg>\n";

const __vite_glob_0_25 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: email
}, Symbol.toStringTag, { value: 'Module' }));

const error = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 48 48\" width=\"512px\" height=\"512px\">\n    <linearGradient id=\"wRKXFJsqHCxLE9yyOYHkza\" x1=\"9.858\" x2=\"38.142\" y1=\"9.858\" y2=\"38.142\"\n                    gradientUnits=\"userSpaceOnUse\">\n        <stop offset=\"0\" stop-color=\"#f44f5a\"/>\n        <stop offset=\".443\" stop-color=\"#ee3d4a\"/>\n        <stop offset=\"1\" stop-color=\"#e52030\"/>\n    </linearGradient>\n    <path fill=\"url(#wRKXFJsqHCxLE9yyOYHkza)\"\n          d=\"M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z\"/>\n    <path d=\"M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414\tc-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414\tc-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414\tc0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414\tC33.973,30.997,33.973,29.731,33.192,28.95z\"\n          opacity=\".05\"/>\n    <path d=\"M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414\tc-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414\tc-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414\tc0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414\tC33.425,30.839,33.425,29.889,32.839,29.303z\"\n          opacity=\".07\"/>\n    <path fill=\"#fff\"\n          d=\"M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485\tc-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142\tC30.047,15.124,30.681,15.124,31.071,15.515z\"/>\n    <path fill=\"#fff\"\n          d=\"M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343\tc-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142\tC32.876,30.047,32.876,30.681,32.485,31.071z\"/>\n</svg>\n";

const __vite_glob_0_26 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: error
}, Symbol.toStringTag, { value: 'Module' }));

const externalLink = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-external-link\"><path d=\"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6\"/><polyline points=\"15 3 21 3 21 9\"/><line x1=\"10\" x2=\"21\" y1=\"14\" y2=\"3\"/></svg>";

const __vite_glob_0_27 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: externalLink
}, Symbol.toStringTag, { value: 'Module' }));

const facebook = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" fill='currentColor' class='h-[26px] w-[26px]'>\n  <!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->\n  <path d=\"M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z\" />\n</svg>\n";

const __vite_glob_0_28 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: facebook
}, Symbol.toStringTag, { value: 'Module' }));

const github = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 98 96\" xmlns:v=\"https://vecta.io/nano\"><path fill-rule=\"evenodd\" d=\"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362l-.08-9.127c-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126l-.08 13.526c0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z\" fill=\"currentColor\"/></svg>\n";

const __vite_glob_0_29 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: github
}, Symbol.toStringTag, { value: 'Module' }));

const globe = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm9.567 9.098c-.059-.058-.127-.108-.206-.138-.258-.101-1.35.603-1.515.256-.108-.231-.327.148-.578.008-.121-.067-.459-.52-.611-.465-.312.112.479.974.694 1.087.203-.154.86-.469 1.002-.039.271.812-.745 1.702-1.264 2.171-.775.702-.63-.454-1.159-.86-.277-.213-.274-.667-.555-.824-.125-.071-.7-.732-.694-.821l-.017.167c-.095.072-.297-.27-.319-.325 0 .298.485.772.646 1.011.273.409.42 1.005.756 1.339.179.18.866.923 1.045.908l.921-.437c.649.154-1.531 3.237-1.738 3.619-.171.321.139 1.112.114 1.49-.029.437-.374.579-.7.817-.35.255-.268.752-.562.934-.521.321-.897 1.366-1.639 1.361-.219-.001-1.151.364-1.273.007-.095-.258-.223-.455-.356-.71-.131-.25-.015-.51-.175-.731-.11-.154-.479-.502-.513-.684-.002-.157.118-.632.283-.715.231-.118.044-.462.016-.663-.048-.357-.27-.652-.535-.859-.393-.302-.189-.542-.098-.974 0-.206-.126-.476-.402-.396-.57.166-.396-.445-.812-.417-.299.021-.543.211-.821.295-.349.104-.707-.083-1.053-.126-1.421-.179-1.885-1.804-1.514-2.976.037-.192-.115-.547-.048-.696.159-.352.485-.752.768-1.021.16-.152.365-.113.553-.231.29-.182.294-.558.578-.789.404-.328.956-.321 1.482-.392.281-.037 1.35-.268 1.518-.06 0 .039.193.611-.019.578.438.023 1.061.756 1.476.585.213-.089.135-.744.573-.427.265.19 1.45.275 1.696.07.152-.125.236-.939.053-1.031.117.116-.618.125-.686.099-.122-.044-.235.115-.43.025.117.055-.651-.358-.22-.674-.181.132-.349-.037-.544.109-.135.109.062.181-.13.277-.305.155-.535-.53-.649-.607-.118-.077-1.024-.713-.777-.298l.797.793c-.04.026-.209-.289-.209-.059.053-.136.02.585-.105.35-.056-.09.091-.14.006-.271 0-.085-.23-.169-.275-.228-.126-.157-.462-.502-.644-.585-.05-.024-.771.088-.832.111-.071.099-.131.203-.181.314-.149.055-.29.127-.423.216l-.159.356c-.068.061-.772.294-.776.303.03-.076-.492-.172-.457-.324.038-.167.215-.687.169-.877-.048-.199 1.085.287 1.158-.238.029-.227.047-.492-.316-.531.069.008.702-.249.807-.364.148-.169.486-.447.731-.447.286 0 .225-.417.356-.622.133.053-.071.38.088.512-.01-.104.45.057.494.033.105-.056.691-.023.601-.299-.101-.28.052-.197.183-.255-.02.008.248-.458.363-.456-.104-.089-.398.112-.516.103-.308-.024-.177-.525-.061-.672.09-.116-.246-.258-.25-.036-.006.332-.314.633-.243 1.075.109.666-.743-.161-.816-.115-.283.172-.515-.216-.368-.449.149-.238.51-.226.659-.48.104-.179.227-.389.388-.524.541-.454.689-.091 1.229-.042.526.048.178.125.105.327-.07.192.289.261.413.1.071-.092.232-.326.301-.499.07-.175.578-.2.527-.365 2.72 1.148 4.827 3.465 5.694 6.318zm-11.113-3.779l.068-.087.073-.019c.042-.034.086-.118.151-.104.043.009.146.095.111.148-.037.054-.066-.049-.081.101-.018.169-.188.167-.313.222-.087.037-.175-.018-.09-.104l.088-.108-.007-.049zm.442.245c.046-.045.138-.008.151-.094.014-.084.078-.178-.008-.335-.022-.042.116-.082.051-.137l-.109.032s.155-.668.364-.366l-.089.103c.135.134.172.47.215.687.127.066.324.078.098.192.117-.02-.618.314-.715.178-.072-.083.317-.139.307-.173-.004-.011-.317-.02-.265-.087zm1.43-3.547l-.356.326c-.36.298-1.28.883-1.793.705-.524-.18-1.647.667-1.826.673-.067.003.002-.641.36-.689-.141.021.993-.575 1.185-.805.678-.146 1.381-.227 2.104-.227l.326.017zm-5.086 1.19c.07.082.278.092-.026.288-.183.11-.377.809-.548.809-.51.223-.542-.439-1.109.413-.078.115-.395.158-.644.236.685-.688 1.468-1.279 2.327-1.746zm-5.24 8.793c0-.541.055-1.068.139-1.586l.292.185c.113.135.113.719.169.911.139.482.484.751.748 1.19.155.261.414.923.332 1.197.109-.179 1.081.824 1.259 1.033.418.492.74 1.088.061 1.574-.219.158.334 1.14.049 1.382l-.365.094c-.225.138-.235.397-.166.631-1.562-1.765-2.518-4.076-2.518-6.611zm14.347-5.823c.083-.01-.107.167-.107.167.033.256.222.396.581.527.437.157.038.455-.213.385-.139-.039-.854-.255-.879.025 0 .167-.679.001-.573-.175.073-.119.05-.387.186-.562.193-.255.38-.116.386.032-.001.394.398-.373.619-.399z\" fill=\"currentColor\"/></svg>";

const __vite_glob_0_30 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: globe
}, Symbol.toStringTag, { value: 'Module' }));

const google = "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-[18px] w-[18px]\" viewBox=\"0 0 90 92\" fill=\"none\" xmlns:v=\"https://vecta.io/nano\"><path d=\"M90 47.1c0-3.1-.3-6.3-.8-9.3H45.9v17.7h24.8c-1 5.7-4.3 10.7-9.2 13.9l14.8 11.5C85 72.8 90 61 90 47.1z\" fill=\"#4280ef\"/><path d=\"M45.9 91.9c12.4 0 22.8-4.1 30.4-11.1L61.5 69.4c-4.1 2.8-9.4 4.4-15.6 4.4-12 0-22.1-8.1-25.8-18.9L4.9 66.6c7.8 15.5 23.6 25.3 41 25.3z\" fill=\"#34a353\"/><path d=\"M20.1 54.8c-1.9-5.7-1.9-11.9 0-17.6L4.9 25.4c-6.5 13-6.5 28.3 0 41.2l15.2-11.8z\" fill=\"#f6b704\"/><path d=\"M45.9 18.3c6.5-.1 12.9 2.4 17.6 6.9L76.6 12C68.3 4.2 57.3 0 45.9.1c-17.4 0-33.2 9.8-41 25.3l15.2 11.8c3.7-10.9 13.8-18.9 25.8-18.9z\" fill=\"#e54335\"/></svg>";

const __vite_glob_0_31 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: google
}, Symbol.toStringTag, { value: 'Module' }));

const group = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-users\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></svg>";

const __vite_glob_0_32 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: group
}, Symbol.toStringTag, { value: 'Module' }));

const guide = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\">\n    <path stroke-linecap=\"round\" strokeLinejoin=\"round\" d=\"M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z\" />\n</svg>\n";

const __vite_glob_0_33 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: guide
}, Symbol.toStringTag, { value: 'Module' }));

const hackernews = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" fill='currentColor' class='h-[26px] w-[26px]'>\n  <path d=\"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM21.2 229.2H21c.1-.1.2-.3.3-.4 0 .1 0 .3-.1.4zm218 53.9V384h-31.4V281.3L128 128h37.3c52.5 98.3 49.2 101.2 59.3 125.6 12.3-27 5.8-24.4 60.6-125.6H320l-80.8 155.1z\" />\n</svg>\n";

const __vite_glob_0_34 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: hackernews
}, Symbol.toStringTag, { value: 'Module' }));

const hamburger = "<svg class='h-5 w-5' viewBox=\"0 0 24 24\" focusable=\"false\" aria-hidden=\"true\">\n  <path fill=\"currentColor\" d=\"M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z\"></path>\n</svg>\n";

const __vite_glob_0_35 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: hamburger
}, Symbol.toStringTag, { value: 'Module' }));

const home = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\">\n    <path stroke-linecap=\"round\" strokeLinejoin=\"round\" d=\"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25\" />\n</svg>\n";

const __vite_glob_0_36 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: 'Module' }));

const letter = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" aria-hidden=\"true\" role=\"img\" class=\"iconify iconify--ic\" width=\"35\" height=\"35\" viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z\"></path></svg>";

const __vite_glob_0_37 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: letter
}, Symbol.toStringTag, { value: 'Module' }));

const linkedin2 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n    <g clip-path=\"url(#clip0_2344_20)\">\n        <path d=\"M0 0V24H24V0H0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.397 7.179 20 6.988 20 12.241V19Z\" fill=\"currentColor\"/>\n    </g>\n    <defs>\n        <clipPath id=\"clip0_2344_20\">\n            <rect width=\"24\" height=\"24\" rx=\"2\" fill=\"white\"/>\n        </clipPath>\n    </defs>\n</svg>\n";

const __vite_glob_0_38 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: linkedin2
}, Symbol.toStringTag, { value: 'Module' }));

const linkedin = "<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"100\" height=\"100\" viewBox=\"0,0,256,256\">\n<g transform=\"translate(-26.66667,-26.66667) scale(1.20833,1.20833)\"><g fill=\"none\" fill-rule=\"nonzero\" stroke=\"none\" stroke-width=\"1\" stroke-linecap=\"butt\" strokeLinejoin=\"miter\" stroke-miterlimit=\"10\" stroke-dasharray=\"\" stroke-dashoffset=\"0\" font-family=\"none\" font-weight=\"none\" font-size=\"none\" text-anchor=\"none\" style=\"mix-blend-mode: normal\"><g transform=\"scale(5.33333,5.33333)\"><path d=\"M42,37c0,2.762 -2.238,5 -5,5h-26c-2.761,0 -5,-2.238 -5,-5v-26c0,-2.762 2.239,-5 5,-5h26c2.762,0 5,2.238 5,5z\" fill=\"#0288d1\"></path><path d=\"M12,19h5v17h-5zM14.485,17h-0.028c-1.492,0 -2.457,-1.112 -2.457,-2.501c0,-1.419 0.995,-2.499 2.514,-2.499c1.521,0 2.458,1.08 2.486,2.499c0,1.388 -0.965,2.501 -2.515,2.501zM36,36h-5v-9.099c0,-2.198 -1.225,-3.698 -3.192,-3.698c-1.501,0 -2.313,1.012 -2.707,1.99c-0.144,0.35 -0.101,1.318 -0.101,1.807v9h-5v-17h5v2.616c0.721,-1.116 1.85,-2.616 4.738,-2.616c3.578,0 6.261,2.25 6.261,7.274l0.001,9.726z\" fill=\"#ffffff\"></path></g></g></g>\n</svg>";

const __vite_glob_0_39 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: linkedin
}, Symbol.toStringTag, { value: 'Module' }));

const logo = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"30\" height=\"30\" viewBox=\"0 0 283 283\" fill=\"#000\" xmlns:v=\"https://vecta.io/nano\"><path fill=\"#fff\" d=\"M0 39C0 17.46 17.46 0 39 0h205c21.539 0 39 17.46 39 39v205c0 21.539-17.461 39-39 39H39c-21.54 0-39-17.461-39-39V39Z\"/><path d=\"M121.215 210.72c-1.867.56-4.854 1.12-8.96 1.68-3.92.56-8.027.84-12.32.84-4.107 0-7.84-.28-11.2-.84-3.174-.56-5.88-1.68-8.12-3.36s-4.014-3.92-5.32-6.72c-1.12-2.987-1.68-6.813-1.68-11.48v-84c0-4.293.746-7.933 2.24-10.92 1.68-3.173 4.013-5.973 7-8.4s6.626-4.573 10.92-6.44c4.48-2.053 9.24-3.827 14.28-5.32a106.176 106.176 0 0 1 15.68-3.36 95.412 95.412 0 0 1 16.24-1.4c8.96 0 16.053 1.773 21.28 5.32 5.226 3.36 7.84 8.96 7.84 16.8 0 2.613-.374 5.227-1.12 7.84-.747 2.427-1.68 4.667-2.8 6.72a133.1 133.1 0 0 0-12.04.56c-4.107.373-8.12.933-12.04 1.68s-7.654 1.587-11.2 2.52c-3.36.747-6.254 1.68-8.68 2.8v95.48zm45.172-22.4c0-7.84 2.426-14.373 7.28-19.6s11.48-7.84 19.88-7.84 15.026 2.613 19.88 7.84 7.28 11.76 7.28 19.6-2.427 14.373-7.28 19.6-11.48 7.84-19.88 7.84-15.027-2.613-19.88-7.84-7.28-11.76-7.28-19.6z\"/></svg>";

const __vite_glob_0_40 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: logo
}, Symbol.toStringTag, { value: 'Module' }));

const map = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-map\"><polygon points=\"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21\"/><line x1=\"9\" x2=\"9\" y1=\"3\" y2=\"18\"/><line x1=\"15\" x2=\"15\" y1=\"6\" y2=\"21\"/></svg>";

const __vite_glob_0_41 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: map
}, Symbol.toStringTag, { value: 'Module' }));

const moreVertical = "<svg clipRule=\"evenodd\" fill-rule=\"evenodd\" strokeLinejoin=\"round\" stroke-miterlimit=\"2\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"m12 16.495c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25zm0-6.75c1.242 0 2.25 1.008 2.25 2.25s-1.008 2.25-2.25 2.25-2.25-1.008-2.25-2.25 1.008-2.25 2.25-2.25z\"/></svg>";

const __vite_glob_0_42 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: moreVertical
}, Symbol.toStringTag, { value: 'Module' }));

const notification = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"2\" stroke=\"currentColor\" class=\"w-6 h-6\">\n  <path stroke-linecap=\"round\" strokeLinejoin=\"round\" d=\"M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0\" />\n</svg>\n";

const __vite_glob_0_43 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: notification
}, Symbol.toStringTag, { value: 'Module' }));

const plus = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-file-plus-2\"><path d=\"M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4\"/><polyline points=\"14 2 14 8 20 8\"/><path d=\"M3 15h6\"/><path d=\"M6 12v6\"/></svg>";

const __vite_glob_0_44 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: plus
}, Symbol.toStringTag, { value: 'Module' }));

const progress = "<?xml version=\"1.0\"?><svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 24 24\" width=\"512px\" height=\"512px\">    <path fill=\"#0E033B\" d=\"M 10.017578 2.2246094 C 9.9418633 2.2236094 9.8629062 2.2302969 9.7851562 2.2480469 C 8.6621563 2.5020469 7.6129688 2.948875 6.6679688 3.546875 C 6.1309688 3.886875 6.0607656 4.6467031 6.5097656 5.0957031 L 6.5117188 5.0976562 C 6.8337188 5.4196562 7.3386563 5.4959531 7.7226562 5.2519531 C 8.4896562 4.7639531 9.3448125 4.4032187 10.257812 4.1992188 C 10.700812 4.1002187 11 3.6854219 11 3.2324219 C 11 2.6741719 10.547582 2.2316094 10.017578 2.2246094 z M 13.984375 2.2246094 C 13.45418 2.2322793 13 2.6741719 13 3.2324219 L 13 3.234375 C 13 3.692375 13.308859 4.1001719 13.755859 4.2011719 C 17.324859 5.0031719 20 8.193 20 12 C 20 15.807 17.324859 18.996828 13.755859 19.798828 C 13.308859 19.899828 13 20.307625 13 20.765625 L 13 20.767578 C 13 21.405578 13.592844 21.893953 14.214844 21.751953 C 18.665844 20.741953 22 16.753 22 12 C 22 7.247 18.665844 3.2590469 14.214844 2.2480469 C 14.137094 2.2304219 14.060117 2.2235137 13.984375 2.2246094 z M 4.2792969 6.21875 C 3.9904219 6.247 3.716875 6.3994688 3.546875 6.6679688 C 2.948875 7.6129688 2.5030469 8.6621563 2.2480469 9.7851562 C 2.1070469 10.407156 2.5944219 11 3.2324219 11 C 3.6854219 11 4.1002187 10.699813 4.1992188 10.257812 C 4.4022188 9.3438125 4.7639531 8.4896562 5.2519531 7.7226562 C 5.4959531 7.3386562 5.4196562 6.8337187 5.0976562 6.5117188 L 5.0957031 6.5097656 C 4.8712031 6.2852656 4.5681719 6.1905 4.2792969 6.21875 z M 15.980469 8.9902344 A 1.0001 1.0001 0 0 0 15.292969 9.2929688 L 11 13.585938 L 9.7070312 12.292969 A 1.0001 1.0001 0 1 0 8.2929688 13.707031 L 10.292969 15.707031 A 1.0001 1.0001 0 0 0 11.707031 15.707031 L 16.707031 10.707031 A 1.0001 1.0001 0 0 0 15.980469 8.9902344 z M 3.2324219 13 C 2.5944219 13 2.1060469 13.592844 2.2480469 14.214844 C 2.5030469 15.337844 2.947875 16.387031 3.546875 17.332031 C 3.885875 17.869031 4.6467031 17.939234 5.0957031 17.490234 C 5.4187031 17.167234 5.4959531 16.661344 5.2519531 16.277344 C 4.7639531 15.510344 4.4032187 14.655187 4.1992188 13.742188 C 4.1002187 13.299188 3.6854219 13 3.2324219 13 z M 7.0957031 18.613281 C 6.8809531 18.642031 6.6727187 18.741344 6.5117188 18.902344 L 6.5097656 18.904297 C 6.0607656 19.353297 6.1309688 20.113125 6.6679688 20.453125 C 7.6129688 21.051125 8.6621563 21.496953 9.7851562 21.751953 C 10.407156 21.892953 11 21.405578 11 20.767578 C 11 20.314578 10.699813 19.899781 10.257812 19.800781 C 9.3448125 19.596781 8.4906094 19.236047 7.7246094 18.748047 C 7.5326094 18.626047 7.3104531 18.584531 7.0957031 18.613281 z\"/></svg>";

const __vite_glob_0_45 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: progress
}, Symbol.toStringTag, { value: 'Module' }));

const question = "<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1 16h-2v-2h2v2zm.976-4.885c-.196.158-.385.309-.535.459-.408.407-.44.777-.441.793v.133h-2v-.167c0-.118.029-1.177 1.026-2.174.195-.195.437-.393.691-.599.734-.595 1.216-1.029 1.216-1.627a1.934 1.934 0 0 0-3.867.001h-2C8.066 7.765 9.831 6 12 6s3.934 1.765 3.934 3.934c0 1.597-1.179 2.55-1.958 3.181z\"></path></svg>";

const __vite_glob_0_46 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: question
}, Symbol.toStringTag, { value: 'Module' }));

const reddit = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" fill=\"currentColor\" class=\"h-[26px] w-[26px]\" xmlns:v=\"https://vecta.io/nano\"><path d=\"M283.2 345.5c2.7 2.7 2.7 6.8 0 9.2-24.5 24.5-93.8 24.6-118.4 0-2.7-2.4-2.7-6.5 0-9.2 2.4-2.4 6.5-2.4 8.9 0 18.7 19.2 81 19.6 100.5 0 2.4-2.3 6.6-2.3 9 0zm-91.3-53.8c0-14.9-11.9-26.8-26.5-26.8a26.67 26.67 0 0 0-26.8 26.8c0 14.6 11.9 26.5 26.8 26.5 14.6 0 26.5-11.9 26.5-26.5zm90.7-26.8c-14.6 0-26.5 11.9-26.5 26.8 0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-11.9 26.8-26.5a26.67 26.67 0 0 0-26.8-26.8zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-99.7 140.6c-10.1 0-19 4.2-25.6 10.7-24.1-16.7-56.5-27.4-92.5-28.6l18.7-84.2 59.5 13.4c0 14.6 11.9 26.5 26.5 26.5 14.9 0 26.8-12.2 26.8-26.8s-11.9-26.8-26.8-26.8c-10.4 0-19.3 6.2-23.8 14.9l-65.7-14.6c-3.3-.9-6.5 1.5-7.4 4.8l-20.5 92.8c-35.7 1.5-67.8 12.2-91.9 28.9-6.5-6.8-15.8-11-25.9-11-37.5 0-49.8 50.4-15.5 67.5-1.2 5.4-1.8 11-1.8 16.7 0 56.5 63.7 102.3 141.9 102.3 78.5 0 142.2-45.8 142.2-102.3 0-5.7-.6-11.6-2.1-17 33.6-17.2 21.2-67.2-16.1-67.2z\"/></svg>";

const __vite_glob_0_47 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reddit
}, Symbol.toStringTag, { value: 'Module' }));

const reset = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M10.3193 4.93528C11.5957 4.63203 12.9306 4.68137 14.1811 5.07803C15.4317 5.47469 16.551 6.20375 17.4193 7.18728C17.639 7.43552 17.9483 7.58631 18.2793 7.60647C18.6102 7.62663 18.9355 7.51451 19.1838 7.29478C19.432 7.07505 19.5828 6.7657 19.603 6.43479C19.6231 6.10389 19.511 5.77852 19.2913 5.53028C18.1237 4.20738 16.6187 3.22659 14.9369 2.69273C13.2552 2.15887 11.46 2.092 9.74327 2.49928C8.00102 2.9367 6.404 3.82349 5.11164 5.07111C3.81927 6.31873 2.87678 7.88352 2.37827 9.60928C2.36179 9.66642 2.32541 9.71578 2.27571 9.74843C2.226 9.78108 2.16625 9.79486 2.10727 9.78728L1.07427 9.65728C0.982658 9.64551 0.889587 9.65981 0.805742 9.69855C0.721897 9.73729 0.650678 9.79889 0.600266 9.87628C0.548506 9.95352 0.519307 10.0437 0.515951 10.1366C0.512595 10.2295 0.535213 10.3215 0.581266 10.4023L3.05727 14.7443C3.09587 14.8118 3.14969 14.8693 3.21444 14.9124C3.27919 14.9554 3.35309 14.9828 3.43027 14.9923C3.45091 14.9938 3.47163 14.9938 3.49227 14.9923C3.55924 14.9923 3.62552 14.9788 3.68719 14.9527C3.74886 14.9266 3.80466 14.8884 3.85127 14.8403L7.32827 11.2473C7.39298 11.1803 7.43773 11.0967 7.45745 11.0057C7.47718 10.9147 7.47111 10.82 7.43993 10.7323C7.40875 10.6445 7.35369 10.5673 7.28096 10.5091C7.20823 10.451 7.12071 10.4144 7.02827 10.4033L5.15027 10.1713C5.11341 10.1661 5.07817 10.1527 5.04714 10.1322C5.01611 10.1116 4.99006 10.0844 4.97089 10.0525C4.95173 10.0205 4.93993 9.98475 4.93636 9.9477C4.93279 9.91065 4.93754 9.87326 4.95027 9.83828C5.37211 8.64203 6.08295 7.56852 7.01961 6.71315C7.95627 5.85779 9.08973 5.24707 10.3193 4.93528Z\" fill=\"currentColor\"/>\n  <path d=\"M23.4056 14.1003C23.4568 14.0226 23.4853 13.9323 23.4879 13.8394C23.4905 13.7465 23.4672 13.6547 23.4206 13.5743L20.9206 9.24526C20.8815 9.17807 20.8272 9.12095 20.7621 9.07841C20.697 9.03588 20.6229 9.00912 20.5456 9.00026C20.4685 8.99013 20.3901 8.99854 20.3168 9.02481C20.2436 9.05107 20.1777 9.09442 20.1246 9.15126L16.6686 12.7653C16.6045 12.8323 16.5602 12.9158 16.5408 13.0065C16.5214 13.0972 16.5277 13.1915 16.5588 13.2788C16.5899 13.3662 16.6447 13.4432 16.7171 13.5012C16.7895 13.5592 16.8766 13.5959 16.9686 13.6073L18.8166 13.8283C18.854 13.8327 18.8898 13.8455 18.9215 13.8658C18.9532 13.886 18.9799 13.9132 18.9996 13.9453C19.0192 13.9773 19.0315 14.0133 19.0355 14.0507C19.0394 14.088 19.0351 14.1258 19.0226 14.1613C18.6013 15.3575 17.8906 16.4309 16.9538 17.2859C16.017 18.1408 14.8833 18.7507 13.6536 19.0613C12.3771 19.3639 11.0423 19.3142 9.79178 18.9174C8.54129 18.5206 7.42206 17.7916 6.55361 16.8083C6.44613 16.681 6.31431 16.5765 6.16589 16.5009C6.01746 16.4253 5.85543 16.3802 5.68931 16.3681C5.52318 16.356 5.35632 16.3773 5.19852 16.4306C5.04072 16.4839 4.89517 16.5682 4.77042 16.6786C4.64566 16.7889 4.54422 16.9231 4.47205 17.0732C4.39989 17.2233 4.35845 17.3864 4.35018 17.5527C4.3419 17.7191 4.36696 17.8854 4.42388 18.0419C4.48079 18.1985 4.56842 18.3421 4.68161 18.4643C5.84954 19.7869 7.35483 20.7674 9.03668 21.3011C10.7185 21.8347 12.5138 21.9015 14.2306 21.4943C15.9751 21.0573 17.5742 20.1696 18.8675 18.9199C20.1608 17.6703 21.103 16.1027 21.5996 14.3743C21.6162 14.3173 21.6524 14.2681 21.7019 14.2354C21.7513 14.2026 21.8107 14.1884 21.8696 14.1953L22.9276 14.3223C22.9476 14.3237 22.9676 14.3237 22.9876 14.3223C23.0702 14.3227 23.1516 14.3026 23.2245 14.2638C23.2975 14.2251 23.3597 14.1689 23.4056 14.1003Z\" fill=\"currentColor\"/>\n</svg>\n";

const __vite_glob_0_48 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: reset
}, Symbol.toStringTag, { value: 'Module' }));

const roadmap = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-milestone\"><path d=\"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z\"></path><path d=\"M12 13v8\"></path><path d=\"M12 3v3\"></path></svg>\n";

const __vite_glob_0_49 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: roadmap
}, Symbol.toStringTag, { value: 'Module' }));

const search = "<svg class=\"h-3 w-3\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M23.4145 20.5913L18.7695 15.9463C20.1838 13.8291 20.7601 11.2616 20.3862 8.74311C20.0123 6.22462 18.715 3.93524 16.7466 2.32029C14.7782 0.705331 12.2795 -0.119724 9.73651 0.00560621C7.19351 0.130936 4.78803 1.19769 2.98799 2.99837C1.18795 4.79905 0.122047 7.2049 -0.00238424 9.74795C-0.126815 12.291 0.699123 14.7894 2.31477 16.7572C3.93042 18.725 6.22026 20.0215 8.73889 20.3945C11.2575 20.7675 13.8248 20.1903 15.9415 18.7753L20.5865 23.4193C20.9647 23.7882 21.4721 23.9947 22.0005 23.9947C22.5288 23.9947 23.0363 23.7882 23.4145 23.4193C23.7894 23.0442 24 22.5356 24 22.0053C24 21.4749 23.7894 20.9663 23.4145 20.5913ZM10.2505 3.00527C11.6844 3.00527 13.0861 3.43047 14.2784 4.22711C15.4706 5.02375 16.3999 6.15605 16.9486 7.48081C17.4973 8.80558 17.6409 10.2633 17.3612 11.6697C17.0814 13.076 16.3909 14.3679 15.377 15.3818C14.3631 16.3957 13.0712 17.0862 11.6649 17.366C10.2585 17.6457 8.80078 17.5021 7.47602 16.9534C6.15125 16.4047 5.01896 15.4754 4.22232 14.2832C3.42568 13.0909 3.00047 11.6892 3.00047 10.2553C3.00259 8.3331 3.7671 6.49026 5.12628 5.13108C6.48546 3.7719 8.3283 3.00739 10.2505 3.00527Z\" fill=\"currentColor\"/>\n</svg>\n";

const __vite_glob_0_50 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: search
}, Symbol.toStringTag, { value: 'Module' }));

const security = "<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 24 24\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" d=\"M0 0h24v24H0z\"></path><path d=\"M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z\"></path></svg>";

const __vite_glob_0_51 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: security
}, Symbol.toStringTag, { value: 'Module' }));

const skip = "<svg width=\"26\" height=\"19\" viewBox=\"0 0 26 19\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"h-4 mr-2\">\n    <path d=\"M12.48 0.639663C8.49598 0.639663 5.86381 2.42203 4.27883 4.19333C2.69385 5.96464 2.10641 7.75716 2.10641 7.75716C2.08193 7.82275 2.07095 7.8926 2.07413 7.96254C2.0773 8.03247 2.09456 8.10104 2.12487 8.16415C2.15518 8.22725 2.19792 8.28358 2.25053 8.32977C2.30314 8.37596 2.36453 8.41105 2.43102 8.43294C2.49751 8.45483 2.56774 8.46307 2.6375 8.45717C2.70726 8.45126 2.7751 8.43134 2.83697 8.39858C2.89884 8.36583 2.95346 8.32092 2.99756 8.26655C3.04165 8.21218 3.07432 8.14946 3.09359 8.08216C3.09359 8.08216 3.61428 6.49468 5.05375 4.88599C6.49322 3.2773 8.80182 1.67966 12.48 1.67966C15.7445 1.67966 18.1902 2.90378 19.9042 4.29185C21.3143 5.43384 22.1991 6.69232 22.5926 7.39966H19.76C19.6911 7.39869 19.6227 7.41142 19.5587 7.43711C19.4948 7.46281 19.4366 7.50096 19.3875 7.54934C19.3385 7.59772 19.2995 7.65538 19.2729 7.71895C19.2463 7.78252 19.2326 7.85075 19.2326 7.91966C19.2326 7.98858 19.2463 8.0568 19.2729 8.12038C19.2995 8.18395 19.3385 8.2416 19.3875 8.28999C19.4366 8.33837 19.4948 8.37652 19.5587 8.40221C19.6227 8.42791 19.6911 8.44064 19.76 8.43966H24.44V3.75966C24.441 3.69009 24.4279 3.62104 24.4017 3.55659C24.3755 3.49214 24.3366 3.43361 24.2874 3.38446C24.2381 3.3353 24.1795 3.29653 24.115 3.27044C24.0505 3.24435 23.9814 3.23147 23.9119 3.23255C23.7741 3.23471 23.6429 3.29142 23.5469 3.39024C23.451 3.48906 23.3981 3.62192 23.4 3.75966V6.68466C22.889 5.8157 21.9615 4.62003 20.5593 3.48443C18.7062 1.98372 16.0245 0.65003 12.5166 0.640678C12.5044 0.639911 12.4922 0.639572 12.48 0.639663ZM0 11.5597V18.8397H7.28V11.5597H0ZM9.36 11.5597V12.0797V18.8397H16.64V11.5597H9.36ZM18.72 11.5597V18.8397H26V11.5597H18.72ZM10.4 12.5997H15.6V17.7997H10.4V12.5997Z\" fill=\"currentColor\"></path>\n</svg>";

const __vite_glob_0_52 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: skip
}, Symbol.toStringTag, { value: 'Module' }));

const spinner = "<svg class='h-6 w-6 sm:w-12 sm:h-12 text-gray-200 animate-spin fill-blue-600' viewBox=\"0 0 93 93\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path fill-rule=\"evenodd\" clipRule=\"evenodd\" d=\"M46.5 93C72.1812 93 93 72.1812 93 46.5C93 20.8188 72.1812 0 46.5 0C20.8188 0 0 20.8188 0 46.5C0 72.1812 20.8188 93 46.5 93ZM46.5 77C63.3447 77 77 63.3447 77 46.5C77 29.6553 63.3447 16 46.5 16C29.6553 16 16 29.6553 16 46.5C16 63.3447 29.6553 77 46.5 77Z\" fill=\"#e5e7eb\"/>\n  <path d=\"M84.9746 49.5667C89.3257 49.9135 93.2042 46.6479 92.81 42.3008C92.3588 37.3251 91.1071 32.437 89.0872 27.8298C86.0053 20.7998 81.2311 14.6422 75.1905 9.90623C69.15 5.17027 62.031 2.00329 54.4687 0.687889C49.5126 -0.174203 44.467 -0.223422 39.5274 0.525737C35.2118 1.18024 32.966 5.72596 34.3411 9.86865V9.86865C35.7161 14.0113 40.2118 16.1424 44.5681 15.8677C46.9635 15.7166 49.3773 15.8465 51.7599 16.2609C56.7515 17.1291 61.4505 19.2196 65.4377 22.3456C69.4249 25.4717 72.5762 29.5362 74.6105 34.1764C75.5815 36.3912 76.2835 38.7044 76.7084 41.0666C77.4811 45.3626 80.6234 49.2199 84.9746 49.5667V49.5667Z\" fill=\"#2463eb\" />\n</svg>\n";

const __vite_glob_0_53 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: spinner
}, Symbol.toStringTag, { value: 'Module' }));

const star = "<svg class='w-4 h-4 fill-current' focusable='false' width=\"14\" height=\"15\" viewBox=\"0 0 14 15\" xmlns=\"http://www.w3.org/2000/svg\">\n  <path d=\"M6.99999 11.1515L2.88574 13.4545L3.80449 8.82984L0.342407 5.6285L5.02482 5.07317L6.99999 0.791504L8.97516 5.07317L13.6576 5.6285L10.1955 8.82984L11.1142 13.4545L6.99999 11.1515Z\"></path>\n</svg>\n";

const __vite_glob_0_54 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: star
}, Symbol.toStringTag, { value: 'Module' }));

const teamProgress = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-line-chart\"><path d=\"M3 3v18h18\"/><path d=\"m19 9-5 5-4-4-3 3\"/></svg>";

const __vite_glob_0_55 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: teamProgress
}, Symbol.toStringTag, { value: 'Module' }));

const twitterFill = "<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"100\" height=\"100\" viewBox=\"0 0 50 50\">\n<path d=\"M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z\"></path>\n</svg>";

const __vite_glob_0_56 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: twitterFill
}, Symbol.toStringTag, { value: 'Module' }));

const twitter = "<svg width=\"23\" height=\"23\" viewBox=\"0 0 23 23\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n  <rect width=\"23\" height=\"23\" rx=\"3\" fill=\"currentColor\"/>\n  <path d=\"M12.9285 10.3522L18.5135 4H17.1905L12.339 9.5144L8.467 4H4L9.8565 12.3395L4 19H5.323L10.443 13.1754L14.533 19H19M5.8005 4.97619H7.833L17.1895 18.0718H15.1565\" fill=\"#E5E5E5\"/>\n</svg>\n";

const __vite_glob_0_57 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: twitter
}, Symbol.toStringTag, { value: 'Module' }));

const userPlus = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" strokeLinejoin=\"round\" class=\"lucide lucide-user-plus-2\"><path d=\"M14 19a6 6 0 0 0-12 0\"/><circle cx=\"8\" cy=\"9\" r=\"4\"/><line x1=\"19\" x2=\"19\" y1=\"8\" y2=\"14\"/><line x1=\"22\" x2=\"16\" y1=\"11\" y2=\"11\"/></svg>";

const __vite_glob_0_58 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: userPlus
}, Symbol.toStringTag, { value: 'Module' }));

const user = "<svg stroke=\"currentColor\" fill=\"currentColor\" stroke-width=\"0\" viewBox=\"0 0 1024 1024\" height=\"1em\" width=\"1em\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z\"></path></svg>";

const __vite_glob_0_59 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: user
}, Symbol.toStringTag, { value: 'Module' }));

const users = "<svg data-v-f24af897=\"\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" strokeLinejoin=\"round\" class=\"lucide-icon customizable\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path></svg>";

const __vite_glob_0_60 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: users
}, Symbol.toStringTag, { value: 'Module' }));

const verifyLetter = "<svg xmlns=\"http://www.w3.org/2000/svg\"  viewBox=\"0 0 256 256\" width=\"512px\" height=\"512px\"><path fill=\"#f79219\" d=\"M222.58,114.782c0-8.69-3.979-16.901-10.8-22.286l-69.526-54.889c-8.357-6.598-20.15-6.598-28.508,0 L44.22,92.496c-6.82,5.385-10.8,13.596-10.8,22.286v12.732H222.58V114.782z\"/><path fill=\"#ffa91a\" d=\"M213.336,223.341H42.664c-5.105,0-9.244-4.138-9.244-9.244V113.116c0-5.105,4.138-9.244,9.244-9.244 h170.672c5.105,0,9.244,4.139,9.244,9.244v100.981C222.58,219.203,218.441,223.341,213.336,223.341z\"/><path fill=\"#f79219\" d=\"M213.336,103.872h-0.756v100.225c0,5.105-4.138,9.244-9.244,9.244H33.42v0.756 c0,5.105,4.138,9.244,9.244,9.244h170.672c5.105,0,9.244-4.138,9.244-9.244V113.116 C222.58,108.011,218.441,103.872,213.336,103.872z\"/><path fill=\"#ef7816\" d=\"M213.336,103.872H42.664c-4.488,0-8.229,3.199-9.067,7.441l79.417,62.697 c8.787,6.937,21.186,6.937,29.973,0l79.417-62.698C221.564,107.071,217.824,103.872,213.336,103.872z\"/><path fill=\"#f1f2f2\" d=\"M203.33,73.49v52.88l-60.34,47.64c-8.789,6.939-21.191,6.939-29.98,0l-60.34-47.64V73.49 c0-4.418,3.582-8,8-8h134.66C199.748,65.49,203.33,69.072,203.33,73.49z\"/><g><path fill=\"#fff\" d=\"M58.67,125.46c-1.101,0-2-0.9-2-2V73.49c0-2.2,1.8-4,4-4h106.89c1.101,0,1.99,0.9,1.99,2s-0.89,2-1.99,2 H60.67v49.97C60.67,124.56,59.77,125.46,58.67,125.46z M175.55,73.49c-1.1,0-2-0.9-2-2s0.9-2,2-2c1.11,0,2,0.9,2,2 S176.66,73.49,175.55,73.49z\"/></g><g><path fill=\"#e6e7e8\" d=\"M195.33,65.49h-2v50.88l-60.34,47.64c-8.789,6.939-21.191,6.939-29.98,0l-50.34-39.745v2.105l60.34,47.64 c8.789,6.939,21.191,6.939,29.98,0l60.34-47.64V73.49C203.33,69.072,199.748,65.49,195.33,65.49z\"/></g><g><path fill=\"#d1d3d4\" d=\"M197.9,65.92c0.274,0.808,0.43,1.67,0.43,2.57v52.88l-60.34,47.64c-8.789,6.939-21.191,6.939-29.98,0 l-55.34-43.692v1.052l60.34,47.64c8.789,6.939,21.191,6.939,29.98,0l60.34-47.64V73.49 C203.33,69.972,201.056,66.991,197.9,65.92z\"/></g><g><path fill=\"#d1d3d4\" d=\"M109.036,99.997H80.422c-1.431,0-2.591-1.16-2.591-2.591v0c0-1.431,1.16-2.591,2.591-2.591h28.614 c1.431,0,2.591,1.16,2.591,2.591v0C111.627,98.836,110.467,99.997,109.036,99.997z\"/><path fill=\"#d1d3d4\" d=\"M175.578,124.03H80.422c-1.431,0-2.591-1.16-2.591-2.591v0c0-1.431,1.16-2.591,2.591-2.591h95.156 c1.431,0,2.591,1.16,2.591,2.591v0C178.169,122.87,177.009,124.03,175.578,124.03z\"/><path fill=\"#d1d3d4\" d=\"M175.578,138.881H80.422c-1.431,0-2.591-1.16-2.591-2.591l0,0c0-1.431,1.16-2.591,2.591-2.591h95.156 c1.431,0,2.591,1.16,2.591,2.591l0,0C178.169,137.721,177.009,138.881,175.578,138.881z\"/><polygon fill=\"#d1d3d4\" points=\"156.425,163.403 99.575,163.403 106.139,168.585 149.861,168.585\"/></g><g><polygon fill=\"#d1d3d4\" points=\"175.236,148.551 80.764,148.551 87.328,153.733 168.672,153.733\"/></g></svg>";

const __vite_glob_0_61 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: verifyLetter
}, Symbol.toStringTag, { value: 'Module' }));

const video = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\" class=\"w-6 h-6\">\n    <path stroke-linecap=\"round\" d=\"M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z\" />\n</svg>\n";

const __vite_glob_0_62 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: video
}, Symbol.toStringTag, { value: 'Module' }));

const youtube = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"currentColor\" xmlns:v=\"https://vecta.io/nano\"><path d=\"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.55 23.971 18.196 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 3.993L9 16z\"/></svg>";

const __vite_glob_0_63 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: youtube
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://doc.imoogleai.xyz/");
const $$AstroIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AstroIcon;
  async function getSVG(name) {
    const filepath = `/src/icons/${name}.svg`;
    const files = /* #__PURE__ */ Object.assign({"/src/icons/accept.svg": __vite_glob_0_0,"/src/icons/analytics.svg": __vite_glob_0_1,"/src/icons/badge.svg": __vite_glob_0_2,"/src/icons/bell.svg": __vite_glob_0_3,"/src/icons/best-practices.svg": __vite_glob_0_4,"/src/icons/blusky.svg": __vite_glob_0_5,"/src/icons/bolt.svg": __vite_glob_0_6,"/src/icons/building.svg": __vite_glob_0_7,"/src/icons/bulb.svg": __vite_glob_0_8,"/src/icons/chat.svg": __vite_glob_0_9,"/src/icons/check-current.svg": __vite_glob_0_10,"/src/icons/check.svg": __vite_glob_0_11,"/src/icons/chevron-down.svg": __vite_glob_0_12,"/src/icons/clipboard.svg": __vite_glob_0_13,"/src/icons/close-dark.svg": __vite_glob_0_14,"/src/icons/close.svg": __vite_glob_0_15,"/src/icons/cog.svg": __vite_glob_0_16,"/src/icons/comment.svg": __vite_glob_0_17,"/src/icons/construction.svg": __vite_glob_0_18,"/src/icons/copy.svg": __vite_glob_0_19,"/src/icons/credit-card.svg": __vite_glob_0_20,"/src/icons/discord.svg": __vite_glob_0_21,"/src/icons/down.svg": __vite_glob_0_22,"/src/icons/download.svg": __vite_glob_0_23,"/src/icons/dropdown.svg": __vite_glob_0_24,"/src/icons/email.svg": __vite_glob_0_25,"/src/icons/error.svg": __vite_glob_0_26,"/src/icons/external-link.svg": __vite_glob_0_27,"/src/icons/facebook.svg": __vite_glob_0_28,"/src/icons/github.svg": __vite_glob_0_29,"/src/icons/globe.svg": __vite_glob_0_30,"/src/icons/google.svg": __vite_glob_0_31,"/src/icons/group.svg": __vite_glob_0_32,"/src/icons/guide.svg": __vite_glob_0_33,"/src/icons/hackernews.svg": __vite_glob_0_34,"/src/icons/hamburger.svg": __vite_glob_0_35,"/src/icons/home.svg": __vite_glob_0_36,"/src/icons/letter.svg": __vite_glob_0_37,"/src/icons/linkedin-2.svg": __vite_glob_0_38,"/src/icons/linkedin.svg": __vite_glob_0_39,"/src/icons/logo.svg": __vite_glob_0_40,"/src/icons/map.svg": __vite_glob_0_41,"/src/icons/more-vertical.svg": __vite_glob_0_42,"/src/icons/notification.svg": __vite_glob_0_43,"/src/icons/plus.svg": __vite_glob_0_44,"/src/icons/progress.svg": __vite_glob_0_45,"/src/icons/question.svg": __vite_glob_0_46,"/src/icons/reddit.svg": __vite_glob_0_47,"/src/icons/reset.svg": __vite_glob_0_48,"/src/icons/roadmap.svg": __vite_glob_0_49,"/src/icons/search.svg": __vite_glob_0_50,"/src/icons/security.svg": __vite_glob_0_51,"/src/icons/skip.svg": __vite_glob_0_52,"/src/icons/spinner.svg": __vite_glob_0_53,"/src/icons/star.svg": __vite_glob_0_54,"/src/icons/team-progress.svg": __vite_glob_0_55,"/src/icons/twitter-fill.svg": __vite_glob_0_56,"/src/icons/twitter.svg": __vite_glob_0_57,"/src/icons/user-plus.svg": __vite_glob_0_58,"/src/icons/user.svg": __vite_glob_0_59,"/src/icons/users.svg": __vite_glob_0_60,"/src/icons/verify-letter.svg": __vite_glob_0_61,"/src/icons/video.svg": __vite_glob_0_62,"/src/icons/youtube.svg": __vite_glob_0_63


});
    if (!(filepath in files)) {
      throw new Error(`${filepath} not found`);
    }
    const root = parse(files[filepath].default);
    const svg = root.querySelector("svg");
    return {
      attributes: svg?.attributes,
      innerHTML: svg?.innerHTML
    };
  }
  const { icon, ...attributes } = Astro2.props;
  const { attributes: baseAttributes, innerHTML } = await getSVG(icon);
  const svgAttributes = { ...baseAttributes, ...attributes };
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(svgAttributes)}>${unescapeHTML(innerHTML)}</svg>`;
}, "/workspace/src/components/AstroIcon.astro", void 0);

var __freeze$7 = Object.freeze;
var __defProp$7 = Object.defineProperty;
var __template$7 = (cooked, raw) => __freeze$7(__defProp$7(cooked, "raw", { value: __freeze$7(cooked.slice()) }));
var _a$7;
const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$7 || (_a$7 = __template$7(["", ` <script async src="https://www.googletagmanager.com/gtag/js?id=G-EZHDT2S2LF"><\/script> <script>
    // @ts-nocheck
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-EZHDT2S2LF');
<\/script>`])), renderScript($$result, "/workspace/src/components/Analytics/Analytics.astro?astro&type=script&index=0&lang.ts"));
}, "/workspace/src/components/Analytics/Analytics.astro", void 0);

var __freeze$6 = Object.freeze;
var __defProp$6 = Object.defineProperty;
var __template$6 = (cooked, raw) => __freeze$6(__defProp$6(cooked, "raw", { value: __freeze$6(cooked.slice()) }));
var _a$6;
const $$Clarity = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$6 || (_a$6 = __template$6([`<script type="text/javascript">
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', 'qcw723i36o');
<\/script>`])));
}, "/workspace/src/components/Analytics/Clarity.astro", void 0);

var __freeze$5 = Object.freeze;
var __defProp$5 = Object.defineProperty;
var __template$5 = (cooked, raw) => __freeze$5(__defProp$5(cooked, "raw", { value: __freeze$5(raw || cooked.slice()) }));
var _a$5;
const $$GoogleAd = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$5 || (_a$5 = __template$5([`<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"><\/script> <script async>
  const ignoredPages = [
    'login',
    'signup',
    'best-practices',
    'guides',
    'videos',
    'roadmaps',
    'community',
    'start-here',
    'ai-roadmaps',
    'ai',
    'teams',
    'about',
    'account',
    'projects',
    'questions',
    'guides',
    'advertise',
  ];

  function sanitizeSettingValue(value) {
    return (
      String(value)
        .trim()
        // Remove characters forbidden at https://support.google.com/admanager/answer/10020177.
        .replace(/'|\\\\|'|=|!|#|\\*|~|;|\\^|\\(|\\)|<|>|\\[|\\]|,|&/g, '')
        // Extra spaces aren't forbidden, but rarely desired.
        .replace(/\\s+/, ' ')
        // The + sign is also forbidden, but is being replaced with 'and' instead.
        .replace('+', 'and')
        // Maximum length of 40 for values.
        .substring(0, 40)
    );
  }

  const page = window.location.pathname;
  const pageParts = page.split('/').filter(Boolean);

  const isRoadmapPage =
    pageParts.length === 1 && !ignoredPages.includes(pageParts[0]);
  const isBestPracticesPage =
    pageParts.length === 2 && pageParts[0] === 'best-practices';

  let adSettings = {};
  if (isRoadmapPage) {
    adSettings = {
      post_id: sanitizeSettingValue(pageParts[0]),
      page_type: 'roadmap',
      category: ['roadmap', sanitizeSettingValue(pageParts[0])],
    };
  } else if (isBestPracticesPage) {
    adSettings = {
      post_id: sanitizeSettingValue(pageParts[1]),
      page_type: 'best-practice',
      category: ['best-practice', sanitizeSettingValue(pageParts[1])],
    };
  }

  // @ts-nocheck
  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(function () {
    // Always use non-personalized ads
    googletag.pubads().setPrivacySettings({
      restrictDataProcessing: true,
      nonPersonalizedAds: true,
    });

    // Define ad slot and enable services
    googletag
      .defineSlot(
        '/22873384501/roadmap',
        ['fluid'],
        'div-gpt-ad-1742391132948-0',
      )
      .addService(googletag.pubads());

    // Set targeting for all ad slots on the page.
    for (let key in adSettings) {
      if (adSettings.hasOwnProperty(key)) {
        googletag.pubads().setTargeting(key, adSettings[key]);
      }
    }

    googletag.pubads().enableSingleRequest();
    googletag.enableServices();

    googletag.pubads().addEventListener('slotRenderEnded', function (e) {
      if (!e.isEmpty) {
        return;
      }

      const slotId = e.slot.getSlotElementId();
      if (!slotId) {
        return;
      }

      // If empty, hide the ad slot after a small delay.
      setTimeout(() => {
        const adContainer = document.getElementById(slotId);
        if (adContainer) {
          adContainer.style.display = 'none';
        }
      }, 1800);
    });
  });
<\/script>`], [`<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"><\/script> <script async>
  const ignoredPages = [
    'login',
    'signup',
    'best-practices',
    'guides',
    'videos',
    'roadmaps',
    'community',
    'start-here',
    'ai-roadmaps',
    'ai',
    'teams',
    'about',
    'account',
    'projects',
    'questions',
    'guides',
    'advertise',
  ];

  function sanitizeSettingValue(value) {
    return (
      String(value)
        .trim()
        // Remove characters forbidden at https://support.google.com/admanager/answer/10020177.
        .replace(/'|\\\\\\\\|'|=|!|#|\\\\*|~|;|\\\\^|\\\\(|\\\\)|<|>|\\\\[|\\\\]|,|&/g, '')
        // Extra spaces aren't forbidden, but rarely desired.
        .replace(/\\\\s+/, ' ')
        // The + sign is also forbidden, but is being replaced with 'and' instead.
        .replace('+', 'and')
        // Maximum length of 40 for values.
        .substring(0, 40)
    );
  }

  const page = window.location.pathname;
  const pageParts = page.split('/').filter(Boolean);

  const isRoadmapPage =
    pageParts.length === 1 && !ignoredPages.includes(pageParts[0]);
  const isBestPracticesPage =
    pageParts.length === 2 && pageParts[0] === 'best-practices';

  let adSettings = {};
  if (isRoadmapPage) {
    adSettings = {
      post_id: sanitizeSettingValue(pageParts[0]),
      page_type: 'roadmap',
      category: ['roadmap', sanitizeSettingValue(pageParts[0])],
    };
  } else if (isBestPracticesPage) {
    adSettings = {
      post_id: sanitizeSettingValue(pageParts[1]),
      page_type: 'best-practice',
      category: ['best-practice', sanitizeSettingValue(pageParts[1])],
    };
  }

  // @ts-nocheck
  window.googletag = window.googletag || { cmd: [] };
  googletag.cmd.push(function () {
    // Always use non-personalized ads
    googletag.pubads().setPrivacySettings({
      restrictDataProcessing: true,
      nonPersonalizedAds: true,
    });

    // Define ad slot and enable services
    googletag
      .defineSlot(
        '/22873384501/roadmap',
        ['fluid'],
        'div-gpt-ad-1742391132948-0',
      )
      .addService(googletag.pubads());

    // Set targeting for all ad slots on the page.
    for (let key in adSettings) {
      if (adSettings.hasOwnProperty(key)) {
        googletag.pubads().setTargeting(key, adSettings[key]);
      }
    }

    googletag.pubads().enableSingleRequest();
    googletag.enableServices();

    googletag.pubads().addEventListener('slotRenderEnded', function (e) {
      if (!e.isEmpty) {
        return;
      }

      const slotId = e.slot.getSlotElementId();
      if (!slotId) {
        return;
      }

      // If empty, hide the ad slot after a small delay.
      setTimeout(() => {
        const adContainer = document.getElementById(slotId);
        if (adContainer) {
          adContainer.style.display = 'none';
        }
      }, 1800);
    });
  });
<\/script>`])));
}, "/workspace/src/components/Analytics/GoogleAd.astro", void 0);

const $$GoogleAdSlot = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="div-gpt-ad-1742391132948-0" class="gam-slot fixed bottom-4 right-4 z-50 h-[160px] w-[350px] cursor-pointer max-md:bottom-0 max-md:right-0 max-md:h-[106px] max-md:w-full"> ${renderScript($$result, "/workspace/src/components/Analytics/GoogleAdSlot.astro?astro&type=script&index=0&lang.ts")} </div> ${renderScript($$result, "/workspace/src/components/Analytics/GoogleAdSlot.astro?astro&type=script&index=1&lang.ts")}`;
}, "/workspace/src/components/Analytics/GoogleAdSlot.astro", void 0);

var __freeze$4 = Object.freeze;
var __defProp$4 = Object.defineProperty;
var __template$4 = (cooked, raw) => __freeze$4(__defProp$4(cooked, "raw", { value: __freeze$4(cooked.slice()) }));
var _a$4;
const $$Hubspot = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$4 || (_a$4 = __template$4(['<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/46095657.js?businessUnitId=2306992"><\/script>'])));
}, "/workspace/src/components/Analytics/Hubspot.astro", void 0);

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(cooked.slice()) }));
var _a$3;
const $$RedditPixel = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$3 || (_a$3 = __template$3(["<script>\n  // @ts-nocheck\n  !(function (w, d) {\n    if (!w.rdt) {\n      var p = (w.rdt = function () {\n        p.sendEvent\n          ? p.sendEvent.apply(p, arguments)\n          : p.callQueue.push(arguments);\n      });\n      p.callQueue = [];\n      var t = d.createElement('script');\n      (t.src = 'https://www.redditstatic.com/ads/pixel.js'), (t.async = !0);\n      var s = d.getElementsByTagName('script')[0];\n      s.parentNode.insertBefore(t, s);\n    }\n  })(window, document);\n  rdt('init', 'a2_ghq8846qpphp');\n  rdt('track', 'PageVisit');\n<\/script>"])));
}, "/workspace/src/components/Analytics/RedditPixel.astro", void 0);

const $$Astro$4 = createAstro("https://doc.imoogleai.xyz/");
const $$Popup = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Popup;
  const { id, title, subtitle } = Astro2.props;
  return renderTemplate`${renderScript($$result, "/workspace/src/components/Popup/Popup.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<div${addAttribute(id, "id")} tabindex="-1" class="hidden bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-999 h-full items-center justify-center popup"> <div class="relative p-4 w-full max-w-md h-full md:h-auto"> <div class="relative bg-white rounded-lg shadow-sm popup-body"> <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "close" })} <span class="sr-only">Close popup</span> </button> <div class="p-5"> <h3 class="text-2xl mb-0.5 font-medium"> ${title} </h3> <p class="mb-4 text-sm font-normal text-gray-800"> ${subtitle} </p> ${renderSlot($$result, $$slots["default"])} </div> </div> </div> </div>`;
}, "/workspace/src/components/Popup/Popup.astro", void 0);

function AccountTerms() {
  return /* @__PURE__ */ jsxs("div", { className: "mt-3 text-left text-xs leading-normal text-gray-500", children: [
    "By continuing to use our services, you acknowledge that you have both read and agree to our",
    " ",
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/terms",
        className: "font-medium underline underline-offset-2 hover:text-black",
        children: "Terms of Service"
      }
    ),
    " ",
    "and",
    " ",
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "/privacy",
        className: "font-medium underline underline-offset-2 hover:text-black",
        children: "Privacy Policy"
      }
    ),
    "."
  ] });
}

function GitHubIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className: className || "",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 98 96",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362l-.08-9.127c-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126l-.08 13.526c0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",
          fill: className?.indexOf("text-") !== -1 ? "currentColor" : "#24292f"
        }
      )
    }
  );
}

const TOKEN_COOKIE_NAME = "__roadmapsh_jt__";
const FIRST_LOGIN_PARAM = "fl";
const COURSE_PURCHASE_PARAM = "t";
const COURSE_PURCHASE_SUCCESS_PARAM = "success";
function decodeToken(token) {
  const claims = jose.decodeJwt(token);
  return claims;
}
function isLoggedIn() {
  const token = Cookies.get(TOKEN_COOKIE_NAME);
  return !!token;
}
function getUser() {
  const token = Cookies.get(TOKEN_COOKIE_NAME);
  if (!token) {
    return null;
  }
  return decodeToken(token);
}
function setAuthToken(token) {
  Cookies.set(TOKEN_COOKIE_NAME, token, {
    path: "/",
    expires: 30,
    sameSite: "lax",
    secure: true,
    domain: ".roadmap.sh"
  });
  removeAIReferralCode();
}
function removeAuthToken() {
  Cookies.remove(TOKEN_COOKIE_NAME, {
    path: "/",
    domain: ".roadmap.sh"
  });
}
function visitAIRoadmap(roadmapId) {
  const isAlreadyVisited = Number(Cookies.get(`crv-${roadmapId}`) || 0) === 1;
  if (isAlreadyVisited) {
    return;
  }
  Cookies.set(`crv-${roadmapId}`, "1", {
    path: "/",
    expires: 1 / 24,
    // 1 hour
    sameSite: "lax",
    secure: true,
    domain: ".roadmap.sh"
  });
}
const AI_REFERRAL_COOKIE_NAME = "referral_code";
function setAIReferralCode(code) {
  const alreadyExist = Cookies.get(AI_REFERRAL_COOKIE_NAME);
  if (alreadyExist) {
    return;
  }
  Cookies.set(AI_REFERRAL_COOKIE_NAME, code, {
    path: "/",
    expires: 365,
    sameSite: "lax",
    secure: true,
    domain: ".roadmap.sh"
  });
}
function removeAIReferralCode() {
  Cookies.remove(AI_REFERRAL_COOKIE_NAME, {
    path: "/",
    domain: ".roadmap.sh"
  });
}

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

async function httpCall(url, options) {
  let statusCode = 0;
  try {
    const fingerprintPromise = await fp.load();
    const fingerprint = await fingerprintPromise.get();
    const response = await fetch(url, {
      credentials: "include",
      ...options,
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${Cookies.get(TOKEN_COOKIE_NAME)}`,
        fp: fingerprint.visitorId,
        ...options?.headers ?? {}
      })
    });
    statusCode = response.status;
    const doesAcceptHtml = options?.headers?.["Accept"] === "text/html";
    const data = doesAcceptHtml ? await response.text() : await response.json();
    if (response.ok) {
      return {
        response: data,
        error: void 0
      };
    }
    if (data.status === 401) {
      removeAuthToken();
      window.location.reload();
      return { response: void 0, error: data };
    }
    if (data.status === 403) {
      return { response: void 0, error: data };
    }
    return {
      response: void 0,
      error: data
    };
  } catch (error) {
    return {
      response: void 0,
      error: {
        status: statusCode,
        message: error.message
      }
    };
  }
}
async function httpPost(url, body, options) {
  return httpCall(url, {
    ...options,
    method: "POST",
    body: JSON.stringify(body)
  });
}
async function httpGet(url, queryParams, options) {
  const searchParams = new URLSearchParams(queryParams).toString();
  const queryUrl = searchParams ? `${url}?${searchParams}` : url;
  return httpCall(queryUrl, {
    credentials: "include",
    method: "GET",
    ...options
  });
}
async function httpPatch(url, body, options) {
  return httpCall(url, {
    ...options,
    method: "PATCH",
    body: JSON.stringify(body)
  });
}
async function httpPut(url, body, options) {
  return httpCall(url, {
    ...options,
    method: "PUT",
    body: JSON.stringify(body)
  });
}
async function httpDelete(url, options) {
  return httpCall(url, {
    ...options,
    method: "DELETE"
  });
}

function Spinner({
  className = "",
  isDualRing = true,
  outerFill = "#404040",
  innerFill = "#94a3b8"
}) {
  className += className?.includes("w-") ? "" : " w-3.5 h-3.5";
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      className: `animate-spin ${className ?? ""}`,
      viewBox: "0 0 93 93",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        isDualRing && /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M46.5 93C72.1812 93 93 72.1812 93 46.5C93 20.8188 72.1812 0 46.5 0C20.8188 0 0 20.8188 0 46.5C0 72.1812 20.8188 93 46.5 93ZM46.5 77C63.3447 77 77 63.3447 77 46.5C77 29.6553 63.3447 16 46.5 16C29.6553 16 16 29.6553 16 46.5C16 63.3447 29.6553 77 46.5 77Z",
            style: { fill: outerFill }
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M84.9746 49.5667C89.3257 49.9135 93.2042 46.6479 92.81 42.3008C92.3588 37.3251 91.1071 32.437 89.0872 27.8298C86.0053 20.7998 81.2311 14.6422 75.1905 9.90623C69.15 5.17027 62.031 2.00329 54.4687 0.687889C49.5126 -0.174203 44.467 -0.223422 39.5274 0.525737C35.2118 1.18024 32.966 5.72596 34.3411 9.86865V9.86865C35.7161 14.0113 40.2118 16.1424 44.5681 15.8677C46.9635 15.7166 49.3773 15.8465 51.7599 16.2609C56.7515 17.1291 61.4505 19.2196 65.4377 22.3456C69.4249 25.4717 72.5762 29.5362 74.6105 34.1764C75.5815 36.3912 76.2835 38.7044 76.7084 41.0666C77.4811 45.3626 80.6234 49.2199 84.9746 49.5667V49.5667Z",
            style: { fill: innerFill }
          }
        )
      ]
    }
  );
}

function useOutsideClick(ref, callback) {
  useEffect(() => {
    const listener = (event) => {
      const isClickedOutside = !ref?.current?.contains(event.target) && !document?.getElementById("gtx-trans")?.contains(event.target);
      if (!isClickedOutside) {
        return;
      }
      callback?.();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref]);
}

function useKeydown(keyName, callback, deps = []) {
  useEffect(() => {
    const listener = (event) => {
      if (!keyName.startsWith("mod_") && event.key.toLowerCase() === keyName.toLowerCase()) {
        callback?.(event);
      } else if (keyName.startsWith("mod_") && event.metaKey && event.key.toLowerCase() === keyName.replace("mod_", "").toLowerCase()) {
        event.preventDefault();
        callback?.(event);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, deps);
}

function Modal(props) {
  const {
    onClose,
    children,
    bodyClassName,
    wrapperClassName,
    overlayClassName,
    hasCloseButton = true
  } = props;
  const popupBodyEl = useRef(null);
  useKeydown("Escape", () => {
    onClose();
  });
  useOutsideClick(popupBodyEl, () => {
    onClose();
  });
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "fixed top-0 right-0 left-0 z-99 flex h-full items-center justify-center overflow-x-hidden overflow-y-auto bg-black/50",
        overlayClassName
      ),
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "relative h-full w-full max-w-md p-4 md:h-auto",
            wrapperClassName
          ),
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              ref: popupBodyEl,
              className: cn(
                "relative h-full rounded-lg bg-white shadow-sm",
                bodyClassName
              ),
              children: [
                hasCloseButton && /* @__PURE__ */ jsx(
                  "button",
                  {
                    onClick: onClose,
                    className: "absolute top-4 right-4 text-gray-300 hover:text-gray-700",
                    children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
                  }
                ),
                children
              ]
            }
          )
        }
      )
    }
  );
}

function GoogleIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 90 92",
      fill: "none",
      className,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M90 47.1c0-3.1-.3-6.3-.8-9.3H45.9v17.7h24.8c-1 5.7-4.3 10.7-9.2 13.9l14.8 11.5C85 72.8 90 61 90 47.1z",
            fill: "#4280ef"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M45.9 91.9c12.4 0 22.8-4.1 30.4-11.1L61.5 69.4c-4.1 2.8-9.4 4.4-15.6 4.4-12 0-22.1-8.1-25.8-18.9L4.9 66.6c7.8 15.5 23.6 25.3 41 25.3z",
            fill: "#34a353"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M20.1 54.8c-1.9-5.7-1.9-11.9 0-17.6L4.9 25.4c-6.5 13-6.5 28.3 0 41.2l15.2-11.8z",
            fill: "#f6b704"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M45.9 18.3c6.5-.1 12.9 2.4 17.6 6.9L76.6 12C68.3 4.2 57.3 0 45.9.1c-17.4 0-33.2 9.8-41 25.3l15.2 11.8c3.7-10.9 13.8-18.9 25.8-18.9z",
            fill: "#e54335"
          }
        )
      ]
    }
  );
}

function urlToId(url) {
  return url.replace(/^https?:\/\//, "").replace("roadmap.sh", "").replace(/localhost:[\d]*?/, "").replace(/\?.*$/, "").replace(/\/$/, "").replace(/^\//, "").replace(/[^a-zA-Z0-9]/g, "-").toLowerCase() || "home";
}
const LAST_PATH_KEY = "lastPage";
function storePathAsLastPath() {
  if (typeof window === "undefined") {
    return;
  }
  const ignoredPaths = [
    "/login",
    "/signup",
    "/verfication-pending",
    "/verify-email",
    "/forgot-password"
  ];
  if (ignoredPaths.includes(window.location.pathname)) {
    return;
  }
  const pagePath = [
    "/respond-invite",
    "/befriend",
    "/r",
    "/ai-roadmaps"
  ].includes(window.location.pathname) ? window.location.pathname + window.location.search : window.location.pathname;
  localStorage.setItem(LAST_PATH_KEY, pagePath);
}
function getLastPath() {
  if (typeof window === "undefined") {
    return;
  }
  return localStorage.getItem(LAST_PATH_KEY) || "home";
}
function triggerUtmRegistration() {
  const utmParams = getStoredUtmParams();
  if (!utmParams.utmSource) {
    return;
  }
  localStorage.removeItem("utm_params");
  window.fireEvent({
    category: "UserRegistration",
    action: `Registration: ${utmParams.utmSource || "unknown"}-${utmParams.utmCampaign || "unknown"}`,
    label: `Registration: ${utmParams.utmSource || "unknown"}-${utmParams.utmCampaign || "unknown"}`
  });
}
function getStoredUtmParams() {
  if (typeof window === "undefined") {
    return {};
  }
  const utmParams = localStorage.getItem("utm_params");
  if (!utmParams) {
    return {};
  }
  return JSON.parse(utmParams);
}
function getUrlParams() {
  if (typeof window === "undefined") {
    return {};
  }
  const params = new URLSearchParams(window.location.search);
  const paramsObj = {};
  for (const [key, value] of params.entries()) {
    paramsObj[key] = value;
  }
  return paramsObj;
}
function parseUrl(url) {
  const parser = document.createElement("a");
  parser.href = url;
  return {
    protocol: parser.protocol,
    hostname: parser.hostname,
    port: parser.port,
    pathname: parser.pathname,
    search: parser.search,
    hash: parser.hash,
    host: parser.host
  };
}
function deleteUrlParam(key) {
  if (typeof window === "undefined") {
    return;
  }
  const url = new URL(window.location.href);
  if (!url.searchParams.has(key)) {
    return;
  }
  url.searchParams.delete(key);
  window.history.pushState(null, "", url.toString());
}
function setUrlParams(params) {
  if (typeof window === "undefined") {
    return;
  }
  const url = new URL(window.location.href);
  let hasUpdatedUrl = false;
  for (const [key, value] of Object.entries(params)) {
    if (url.searchParams.get(key) === String(value)) {
      continue;
    }
    url.searchParams.delete(key);
    url.searchParams.set(key, value);
    hasUpdatedUrl = true;
  }
  if (hasUpdatedUrl) {
    window.history.pushState(null, "", url.toString());
  }
}

const GOOGLE_REDIRECT_AT = "googleRedirectAt";
const GOOGLE_LAST_PAGE = "googleLastPage";
function GoogleButton(props) {
  const { isDisabled, setIsDisabled, className } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");
    const provider = urlParams.get("provider");
    if (!code || !state || provider !== "google") {
      return;
    }
    setIsLoading(true);
    setIsDisabled?.(true);
    const lastPageBeforeGoogle = localStorage.getItem(GOOGLE_LAST_PAGE);
    httpGet(
      `${"https://api.roadmap.sh"}/v1-google-callback${window.location.search}&src=${urlToId(lastPageBeforeGoogle || getLastPath() || window.location.pathname)}`
    ).then(({ response, error: error2 }) => {
      if (!response?.token) {
        setError(error2?.message || "Something went wrong.");
        setIsLoading(false);
        setIsDisabled?.(false);
        return;
      }
      triggerUtmRegistration();
      let redirectUrl = new URL("/", window.location.origin);
      const googleRedirectAt = localStorage.getItem(GOOGLE_REDIRECT_AT);
      if (googleRedirectAt && lastPageBeforeGoogle) {
        const socialRedirectAtTime = parseInt(googleRedirectAt, 10);
        const now = Date.now();
        const timeSinceRedirect = now - socialRedirectAtTime;
        if (timeSinceRedirect < 30 * 1e3) {
          redirectUrl = new URL(lastPageBeforeGoogle, window.location.origin);
        }
      }
      const authRedirectUrl = localStorage.getItem("authRedirect");
      if (authRedirectUrl) {
        localStorage.removeItem("authRedirect");
        redirectUrl = new URL(authRedirectUrl, window.location.origin);
      }
      redirectUrl.searchParams.set(
        FIRST_LOGIN_PARAM,
        response?.isNewUser ? "1" : "0"
      );
      const shouldTriggerPurchase = localStorage.getItem(CHECKOUT_AFTER_LOGIN_KEY) !== "0";
      if (redirectUrl.pathname.includes("/courses/sql") && shouldTriggerPurchase) {
        redirectUrl.searchParams.set(COURSE_PURCHASE_PARAM, "1");
        localStorage.removeItem(CHECKOUT_AFTER_LOGIN_KEY);
      }
      localStorage.removeItem(GOOGLE_REDIRECT_AT);
      localStorage.removeItem(GOOGLE_LAST_PAGE);
      setAuthToken(response.token);
      window.location.href = redirectUrl.toString();
    }).catch((err) => {
      setError("Something went wrong. Please try again later.");
      setIsLoading(false);
      setIsDisabled?.(false);
    });
  }, []);
  const handleClick = () => {
    setIsLoading(true);
    setIsDisabled?.(true);
    httpGet(
      `${"https://api.roadmap.sh"}/v1-google-login`
    ).then(({ response, error: error2 }) => {
      if (!response?.loginUrl) {
        setError(error2?.message || "Something went wrong.");
        setIsLoading(false);
        setIsDisabled?.(false);
        return;
      }
      if (!["/login", "/signup"].includes(window.location.pathname)) {
        const pagePath = [
          "/respond-invite",
          "/befriend",
          "/r",
          "/ai-roadmaps"
        ].includes(window.location.pathname) ? window.location.pathname + window.location.search : window.location.pathname;
        localStorage.setItem(GOOGLE_REDIRECT_AT, Date.now().toString());
        localStorage.setItem(GOOGLE_LAST_PAGE, pagePath);
      }
      window.location.href = response.loginUrl;
    }).catch((err) => {
      setError("Something went wrong. Please try again later.");
      setIsLoading(false);
      setIsDisabled?.(false);
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: cn(
          "inline-flex h-10 w-full items-center justify-center gap-2 rounded-sm border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-hidden hover:border-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",
          className
        ),
        disabled: isLoading || isDisabled,
        onClick: handleClick,
        children: [
          isLoading ? /* @__PURE__ */ jsx(Spinner, { className: "h-[18px] w-[18px]", isDualRing: false }) : /* @__PURE__ */ jsx(GoogleIcon, { className: "h-[18px] w-[18px]" }),
          "Continue with Google"
        ]
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "mb-2 mt-1 text-sm font-medium text-red-600", children: error })
  ] });
}

function LinkedInIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: [
        /* @__PURE__ */ jsx("g", { clipPath: "url(#clip0_2344_20)", children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M0 0V24H24V0H0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.397 7.179 20 6.988 20 12.241V19Z",
            fill: "currentColor"
          }
        ) }),
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: "clip0_2344_20", children: /* @__PURE__ */ jsx("rect", { width: "24", height: "24", rx: "2", fill: "white" }) }) })
      ]
    }
  );
}

const LINKEDIN_REDIRECT_AT = "linkedInRedirectAt";
const LINKEDIN_LAST_PAGE = "linkedInLastPage";
function LinkedInButton(props) {
  const { isDisabled, setIsDisabled, className } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");
    const provider = urlParams.get("provider");
    if (!code || !state || provider !== "linkedin") {
      return;
    }
    setIsLoading(true);
    setIsDisabled?.(true);
    const lastPageBeforeLinkedIn = localStorage.getItem(LINKEDIN_LAST_PAGE);
    httpGet(
      `${"https://api.roadmap.sh"}/v1-linkedin-callback${window.location.search}&src=${urlToId(lastPageBeforeLinkedIn || getLastPath() || window.location.pathname)}`
    ).then(({ response, error: error2 }) => {
      if (!response?.token) {
        setError(error2?.message || "Something went wrong.");
        setIsLoading(false);
        setIsDisabled?.(false);
        return;
      }
      triggerUtmRegistration();
      let redirectUrl = new URL("/", window.location.origin);
      const linkedInRedirectAt = localStorage.getItem(LINKEDIN_REDIRECT_AT);
      if (linkedInRedirectAt && lastPageBeforeLinkedIn) {
        const socialRedirectAtTime = parseInt(linkedInRedirectAt, 10);
        const now = Date.now();
        const timeSinceRedirect = now - socialRedirectAtTime;
        if (timeSinceRedirect < 30 * 1e3) {
          redirectUrl = new URL(
            lastPageBeforeLinkedIn,
            window.location.origin
          );
        }
      }
      const authRedirectUrl = localStorage.getItem("authRedirect");
      if (authRedirectUrl) {
        localStorage.removeItem("authRedirect");
        redirectUrl = new URL(authRedirectUrl, window.location.origin);
      }
      redirectUrl.searchParams.set(
        FIRST_LOGIN_PARAM,
        response?.isNewUser ? "1" : "0"
      );
      const shouldTriggerPurchase = localStorage.getItem(CHECKOUT_AFTER_LOGIN_KEY) !== "0";
      if (redirectUrl.pathname.includes("/courses/sql") && shouldTriggerPurchase) {
        redirectUrl.searchParams.set(COURSE_PURCHASE_PARAM, "1");
        localStorage.removeItem(CHECKOUT_AFTER_LOGIN_KEY);
      }
      localStorage.removeItem(LINKEDIN_REDIRECT_AT);
      localStorage.removeItem(LINKEDIN_LAST_PAGE);
      setAuthToken(response.token);
      window.location.href = redirectUrl.toString();
    }).catch((err) => {
      setError("Something went wrong. Please try again later.");
      setIsLoading(false);
      setIsDisabled?.(false);
    });
  }, []);
  const handleClick = () => {
    setIsLoading(true);
    setIsDisabled?.(true);
    httpGet(
      `${"https://api.roadmap.sh"}/v1-linkedin-login`
    ).then(({ response, error: error2 }) => {
      if (!response?.loginUrl) {
        setError(error2?.message || "Something went wrong.");
        setIsLoading(false);
        setIsDisabled?.(false);
        return;
      }
      if (!["/login", "/signup"].includes(window.location.pathname)) {
        const pagePath = [
          "/respond-invite",
          "/befriend",
          "/r",
          "/ai-roadmaps"
        ].includes(window.location.pathname) ? window.location.pathname + window.location.search : window.location.pathname;
        localStorage.setItem(LINKEDIN_REDIRECT_AT, Date.now().toString());
        localStorage.setItem(LINKEDIN_LAST_PAGE, pagePath);
      }
      window.location.href = response.loginUrl;
    }).catch((err) => {
      setError("Something went wrong. Please try again later.");
      setIsLoading(false);
      setIsDisabled?.(false);
    });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: cn(
          "inline-flex h-10 w-full items-center justify-center gap-2 rounded-sm border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-hidden hover:border-gray-400 focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",
          className
        ),
        disabled: isLoading || isDisabled,
        onClick: handleClick,
        children: [
          isLoading ? /* @__PURE__ */ jsx(Spinner, { className: "h-[18px] w-[18px]", isDualRing: false }) : /* @__PURE__ */ jsx(LinkedInIcon, { className: "h-[18px] w-[18px] text-blue-700" }),
          "Continue with LinkedIn"
        ]
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "mb-2 mt-1 text-sm font-medium text-red-600", children: error })
  ] });
}

function EmailLoginForm(props) {
  const { isDisabled, setIsDisabled } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDisabled?.(true);
    setError("");
    const { response, error: error2 } = await httpPost(`${"https://api.roadmap.sh"}/v1-login`, {
      email,
      password
    });
    if (response?.token) {
      setAuthToken(response.token);
      const currentLocation = window.location.href;
      const url = new URL(currentLocation, window.location.origin);
      url.searchParams.set(FIRST_LOGIN_PARAM, response?.isNewUser ? "1" : "0");
      url.searchParams.set(COURSE_PURCHASE_PARAM, "1");
      window.location.href = url.toString();
      return;
    }
    if (error2.type === "user_not_verified") {
      window.location.href = `/verification-pending?email=${encodeURIComponent(
        email
      )}`;
      return;
    }
    setIsLoading(false);
    setIsDisabled?.(false);
    setError(error2?.message || "Something went wrong. Please try again later.");
  };
  const emailFieldId = `form:${useId()}`;
  const passwordFieldId = `form:${useId()}`;
  return /* @__PURE__ */ jsxs(
    "form",
    {
      className: "w-full",
      onSubmit: handleFormSubmit,
      suppressHydrationWarning: true,
      children: [
        /* @__PURE__ */ jsx("label", { htmlFor: emailFieldId, className: "sr-only", children: "Email address" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: emailFieldId,
            name: "email",
            type: "email",
            autoComplete: "email",
            required: true,
            className: "block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            placeholder: "Email Address",
            value: email,
            onInput: (e) => setEmail(String(e.target.value))
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: passwordFieldId, className: "sr-only", children: "Password" }),
        /* @__PURE__ */ jsx(
          "input",
          {
            id: passwordFieldId,
            name: "password",
            type: "password",
            autoComplete: "current-password",
            required: true,
            className: "mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-xs outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
            placeholder: "Password",
            value: password,
            onInput: (e) => setPassword(String(e.target.value))
          }
        ),
        /* @__PURE__ */ jsx("p", { className: "mt-2 mb-3 text-sm text-gray-500", children: /* @__PURE__ */ jsx(
          "a",
          {
            href: "/forgot-password",
            className: "text-blue-800 hover:text-blue-600",
            children: "Reset your password?"
          }
        ) }),
        error && /* @__PURE__ */ jsx("p", { className: "mb-2 rounded-md bg-red-100 p-2 text-red-800", children: error }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: isLoading || isDisabled,
            className: "inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",
            children: isLoading ? "Please wait..." : "Continue"
          }
        )
      ]
    }
  );
}

function EmailSignupForm(props) {
  const { isDisabled, setIsDisabled } = props;
  const { rc: referralCode } = getUrlParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsDisabled?.(true);
    setError("");
    const { response, error: error2 } = await httpPost(
      `${"https://api.roadmap.sh"}/v1-register`,
      {
        email,
        password,
        name,
        src: urlToId(getLastPath() || window.location.pathname)
      }
    );
    if (error2 || response?.status !== "ok") {
      setIsLoading(false);
      setIsDisabled?.(false);
      setError(
        error2?.message || "Something went wrong. Please try again later."
      );
      return;
    }
    window.location.href = `/verification-pending?email=${encodeURIComponent(
      email
    )}`;
  };
  useEffect(() => {
    if (!referralCode || isLoggedIn()) {
      deleteUrlParam("rc");
      return;
    }
    setAIReferralCode(referralCode);
    deleteUrlParam("rc");
  }, []);
  return /* @__PURE__ */ jsxs("form", { className: "flex w-full flex-col gap-2", onSubmit, children: [
    /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "sr-only", children: "Name" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        name: "name",
        type: "text",
        autoComplete: "name",
        min: 3,
        max: 50,
        required: true,
        className: "block w-full rounded-lg border border-gray-300 px-3 py-2 outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
        placeholder: "Full Name",
        value: name,
        onInput: (e) => setName(String(e.target.value))
      }
    ),
    /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "sr-only", children: "Email address" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        name: "email",
        type: "email",
        autoComplete: "email",
        required: true,
        className: "block w-full rounded-lg border border-gray-300 px-3 py-2 outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
        placeholder: "Email Address",
        value: email,
        onInput: (e) => setEmail(String(e.target.value))
      }
    ),
    /* @__PURE__ */ jsx("label", { htmlFor: "password", className: "sr-only", children: "Password" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        name: "password",
        type: "password",
        autoComplete: "current-password",
        min: 6,
        max: 50,
        required: true,
        className: "block w-full rounded-lg border border-gray-300 px-3 py-2 outline-hidden placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",
        placeholder: "Password",
        value: password,
        onInput: (e) => setPassword(String(e.target.value))
      }
    ),
    error && /* @__PURE__ */ jsxs("p", { className: "rounded-lg bg-red-100 p-2 text-red-700", children: [
      error,
      "."
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "submit",
        disabled: isLoading || isDisabled,
        className: "inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",
        children: isLoading ? "Please wait..." : "Continue to Verify Email"
      }
    )
  ] });
}

const CHECKOUT_AFTER_LOGIN_KEY = "checkoutAfterLogin";
const SAMPLE_AFTER_LOGIN_KEY = "sampleAfterLogin";
function CourseLoginPopup(props) {
  const { onClose: parentOnClose, checkoutAfterLogin = true } = props;
  const [isDisabled, setIsDisabled] = useState(false);
  const [isUsingEmail, setIsUsingEmail] = useState(false);
  const [emailNature, setEmailNature] = useState(
    null
  );
  function onClose() {
    localStorage.removeItem(CHECKOUT_AFTER_LOGIN_KEY);
    localStorage.removeItem(SAMPLE_AFTER_LOGIN_KEY);
    parentOnClose();
  }
  useEffect(() => {
    localStorage.setItem(
      CHECKOUT_AFTER_LOGIN_KEY,
      checkoutAfterLogin ? "1" : "0"
    );
  }, [checkoutAfterLogin]);
  if (emailNature) {
    const emailHeader = /* @__PURE__ */ jsxs("div", { className: "mb-7 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3.5 pt-2 text-2xl leading-5 font-semibold text-slate-900", children: emailNature === "login" ? "Login to your account" : "Create an account" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-4 text-slate-600", children: "Fill in the details below to continue" })
    ] });
    return /* @__PURE__ */ jsxs(Modal, { onClose, bodyClassName: "p-5 h-auto", children: [
      emailHeader,
      emailNature === "login" && /* @__PURE__ */ jsx(
        EmailLoginForm,
        {
          isDisabled,
          setIsDisabled
        }
      ),
      emailNature === "signup" && /* @__PURE__ */ jsx(
        EmailSignupForm,
        {
          isDisabled,
          setIsDisabled
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "mt-2 w-full rounded-md border border-gray-400 py-2 text-center text-sm text-gray-600 hover:bg-gray-100",
          onClick: () => setEmailNature(null),
          children: "Back to Options"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs(Modal, { onClose, bodyClassName: "p-5 h-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-7 text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "mb-3.5 pt-2 text-2xl leading-5 font-semibold text-slate-900", children: "Create or login to Enroll" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-4 text-slate-600", children: "Login or sign up for an account to start learning" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-2", children: [
      /* @__PURE__ */ jsx(
        GitHubButton,
        {
          className: "rounded-md border-gray-400 hover:bg-gray-100",
          isDisabled,
          setIsDisabled
        }
      ),
      /* @__PURE__ */ jsx(
        GoogleButton,
        {
          className: "rounded-md border-gray-400 hover:bg-gray-100",
          isDisabled,
          setIsDisabled
        }
      ),
      /* @__PURE__ */ jsx(
        LinkedInButton,
        {
          className: "rounded-md border-gray-400 hover:bg-gray-100",
          isDisabled,
          setIsDisabled
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center gap-4 py-6 text-sm text-gray-600", children: [
      /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-gray-200" }),
      "OR",
      /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-gray-200" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row gap-2", children: [
      !isUsingEmail && /* @__PURE__ */ jsx(
        "button",
        {
          className: "grow rounded-md border border-gray-400 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100",
          onClick: () => setIsUsingEmail(true),
          children: "Use your email address"
        }
      ),
      isUsingEmail && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "grow rounded-md border border-gray-400 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100",
            onClick: () => setEmailNature("login"),
            children: "Already have an account"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "grow rounded-md border border-gray-400 px-4 py-2 text-sm text-gray-600 hover:bg-gray-100",
            onClick: () => setEmailNature("signup"),
            children: "Create an account"
          }
        )
      ] })
    ] })
  ] });
}

const GITHUB_REDIRECT_AT = "githubRedirectAt";
const GITHUB_LAST_PAGE = "githubLastPage";
function GitHubButton(props) {
  const { isDisabled, setIsDisabled, className } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");
    const provider = urlParams.get("provider");
    if (!code || !state || provider !== "github") {
      return;
    }
    setIsLoading(true);
    setIsDisabled?.(true);
    const lastPageBeforeGithub = localStorage.getItem(GITHUB_LAST_PAGE);
    httpGet(
      `${"https://api.roadmap.sh"}/v1-github-callback${window.location.search}&src=${urlToId(lastPageBeforeGithub || getLastPath() || window.location.pathname)}`
    ).then(({ response, error: error2 }) => {
      if (!response?.token) {
        const errMessage = error2?.message || "Something went wrong.";
        setError(errMessage);
        setIsLoading(false);
        setIsDisabled?.(false);
        return;
      }
      triggerUtmRegistration();
      let redirectUrl = new URL("/", window.location.origin);
      const gitHubRedirectAt = localStorage.getItem(GITHUB_REDIRECT_AT);
      if (gitHubRedirectAt && lastPageBeforeGithub) {
        const socialRedirectAtTime = parseInt(gitHubRedirectAt, 10);
        const now = Date.now();
        const timeSinceRedirect = now - socialRedirectAtTime;
        if (timeSinceRedirect < 30 * 1e3) {
          redirectUrl = new URL(lastPageBeforeGithub, window.location.origin);
        }
      }
      const authRedirectUrl = localStorage.getItem("authRedirect");
      if (authRedirectUrl) {
        localStorage.removeItem("authRedirect");
        redirectUrl = new URL(authRedirectUrl, window.location.origin);
      }
      localStorage.removeItem(GITHUB_REDIRECT_AT);
      localStorage.removeItem(GITHUB_LAST_PAGE);
      setAuthToken(response.token);
      redirectUrl.searchParams.set(
        FIRST_LOGIN_PARAM,
        response?.isNewUser ? "1" : "0"
      );
      const shouldTriggerPurchase = localStorage.getItem(CHECKOUT_AFTER_LOGIN_KEY) !== "0";
      if (redirectUrl.pathname.includes("/courses/sql") && shouldTriggerPurchase) {
        redirectUrl.searchParams.set(COURSE_PURCHASE_PARAM, "1");
        localStorage.removeItem(CHECKOUT_AFTER_LOGIN_KEY);
      }
      window.location.href = redirectUrl.toString();
    }).catch((err) => {
      setError("Something went wrong. Please try again later.");
      setIsLoading(false);
      setIsDisabled?.(false);
    });
  }, []);
  const handleClick = async () => {
    setIsLoading(true);
    setIsDisabled?.(true);
    const { response, error: error2 } = await httpGet(
      `${"https://api.roadmap.sh"}/v1-github-login`
    );
    if (error2 || !response?.loginUrl) {
      setError(
        error2?.message || "Something went wrong. Please try again later."
      );
      setIsLoading(false);
      setIsDisabled?.(false);
      return;
    }
    if (!["/login", "/signup"].includes(window.location.pathname)) {
      const pagePath = [
        "/respond-invite",
        "/befriend",
        "/r",
        "/ai-roadmaps"
      ].includes(window.location.pathname) ? window.location.pathname + window.location.search : window.location.pathname;
      localStorage.setItem(GITHUB_REDIRECT_AT, Date.now().toString());
      localStorage.setItem(GITHUB_LAST_PAGE, pagePath);
    }
    window.location.href = response.loginUrl;
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: cn(
          "inline-flex h-10 w-full items-center justify-center gap-2 rounded-sm border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-hidden hover:border-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60",
          className
        ),
        disabled: isLoading || isDisabled,
        onClick: handleClick,
        children: [
          isLoading ? /* @__PURE__ */ jsx(Spinner, { className: "h-[18px] w-[18px]", isDualRing: false }) : /* @__PURE__ */ jsx(GitHubIcon, { className: "h-[18px] w-[18px]" }),
          "Continue with GitHub"
        ]
      }
    ),
    error && /* @__PURE__ */ jsx("p", { className: "mb-2 mt-1 text-sm font-medium text-red-600", children: error })
  ] });
}

function AuthenticationForm(props) {
  const { type = "login" } = props;
  const [isDisabled, setIsDisabled] = useState(false);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-2", children: [
      /* @__PURE__ */ jsx(GitHubButton, { isDisabled, setIsDisabled }),
      /* @__PURE__ */ jsx(GoogleButton, { isDisabled, setIsDisabled }),
      /* @__PURE__ */ jsx(LinkedInButton, { isDisabled, setIsDisabled })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex w-full items-center gap-2 py-6 text-sm text-slate-600", children: [
      /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-slate-200" }),
      "OR",
      /* @__PURE__ */ jsx("div", { className: "h-px w-full bg-slate-200" })
    ] }),
    type === "login" ? /* @__PURE__ */ jsx(EmailLoginForm, { isDisabled, setIsDisabled }) : /* @__PURE__ */ jsx(
      EmailSignupForm,
      {
        isDisabled,
        setIsDisabled
      }
    )
  ] });
}

const $$LoginPopup = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Popup", $$Popup, { "id": "login-popup", "title": "", "subtitle": "" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-7 text-center"> <p class="mb-3 text-2xl leading-5 font-semibold text-slate-900">
Login or Signup
</p> <p class="mt-2 text-sm leading-4 text-slate-600">
You must be logged in to perform this action.
</p> </div> ${renderComponent($$result2, "AuthenticationForm", AuthenticationForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/AuthenticationFlow/AuthenticationForm", "client:component-export": "AuthenticationForm" })} <div class="mt-3 w-full rounded-md border py-2 text-center text-sm text-slate-600">
Don't have an account?${" "} <a href="/signup" class="font-medium text-blue-700 hover:text-blue-600 hover:underline">
Sign up
</a> </div> ${renderComponent($$result2, "AccountTerms", AccountTerms, {})} ` })}`;
}, "/workspace/src/components/AuthenticationFlow/LoginPopup.astro", void 0);

const $$Authenticator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/workspace/src/components/Authenticator/Authenticator.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspace/src/components/Authenticator/Authenticator.astro", void 0);

function BestPracticesIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      children: [
        /* @__PURE__ */ jsx("line", { x1: "10", x2: "21", y1: "6", y2: "6" }),
        /* @__PURE__ */ jsx("line", { x1: "10", x2: "21", y1: "12", y2: "12" }),
        /* @__PURE__ */ jsx("line", { x1: "10", x2: "21", y1: "18", y2: "18" }),
        /* @__PURE__ */ jsx("polyline", { points: "3 6 4 7 6 5" }),
        /* @__PURE__ */ jsx("polyline", { points: "3 12 4 13 6 11" }),
        /* @__PURE__ */ jsx("polyline", { points: "3 18 4 19 6 17" })
      ]
    }
  );
}

function UserIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 1024 1024",
      height: "1em",
      width: "1em",
      xmlns: "http://www.w3.org/2000/svg",
      className,
      children: /* @__PURE__ */ jsx("path", { d: "M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z" })
    }
  );
}

function GroupIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" }),
        /* @__PURE__ */ jsx("circle", { cx: "9", cy: "7", r: "4" }),
        /* @__PURE__ */ jsx("path", { d: "M22 21v-2a4 4 0 0 0-3-3.87" }),
        /* @__PURE__ */ jsx("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })
      ]
    }
  );
}

function RoadmapIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      children: [
        /* @__PURE__ */ jsx("path", { d: "M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z" }),
        /* @__PURE__ */ jsx("path", { d: "M12 13v8" }),
        /* @__PURE__ */ jsx("path", { d: "M12 3v3" })
      ]
    }
  );
}

function ClipboardIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className,
      children: [
        /* @__PURE__ */ jsx("rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }),
        /* @__PURE__ */ jsx("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
        /* @__PURE__ */ jsx("path", { d: "M12 11h4" }),
        /* @__PURE__ */ jsx("path", { d: "M12 16h4" }),
        /* @__PURE__ */ jsx("path", { d: "M8 11h.01" }),
        /* @__PURE__ */ jsx("path", { d: "M8 16h.01" })
      ]
    }
  );
}

function GuideIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      className,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
        }
      )
    }
  );
}

function HomeIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      className,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        }
      )
    }
  );
}

function VideoIcon(props) {
  const { className } = props;
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      strokeWidth: "1.5",
      stroke: "currentColor",
      className,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          strokeLinecap: "round",
          d: "M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
        }
      )
    }
  );
}

const defaultPages = [
  {
    id: "home",
    url: "/",
    title: "Home",
    group: "Pages",
    icon: /* @__PURE__ */ jsx(HomeIcon, { className: "mr-2 h-4 w-4 stroke-2" })
  },
  {
    id: "account",
    url: "/account",
    title: "Account",
    group: "Pages",
    icon: /* @__PURE__ */ jsx(UserIcon, { className: "mr-2 h-4 w-4 stroke-2" }),
    isProtected: true
  },
  {
    id: "team",
    url: "/team",
    title: "Teams",
    group: "Pages",
    icon: /* @__PURE__ */ jsx(GroupIcon, { className: "mr-2 h-4 w-4 stroke-2" }),
    isProtected: true
  },
  {
    id: "friends",
    url: "/account/friends",
    title: "Friends",
    group: "Pages",
    icon: /* @__PURE__ */ jsx(GroupIcon, { className: "mr-2 h-4 w-4 stroke-2" }),
    isProtected: true
  },
  {
    id: "roadmaps",
    url: "/roadmaps",
    title: "Roadmaps",
    group: "Pages",
    icon: /* @__PURE__ */ jsx(RoadmapIcon, { className: "mr-2 h-4 w-4 stroke-2" })
  },
  {
    id: "account-roadmaps",
    url: "/account/roadmaps",
    title: "Custom Roadmaps",
    group: "Pages",
    icon: /* @__PURE__ */ jsx(RoadmapIcon, { className: "mr-2 h-4 w-4 stroke-2" }),
    isProtected: true
  },
  {
    id: "best-practices",
    url: "/best-practices",
    title: "Best Practices",
    group: "Pages",
    icon: /* @__PURE__ */ jsx(BestPracticesIcon, { className: "mr-2 h-4 w-4 stroke-2" })
  },
  {
    id: "questions",
    url: "/questions",
    title: "Questions",
    group: "Pages",
    icon: /* @__PURE__ */ jsx(ClipboardIcon, { className: "mr-2 h-4 w-4 stroke-2" })
  },
  {
    id: "guides",
    url: "/guides",
    title: "Guides",
    group: "Pages",
    icon: /* @__PURE__ */ jsx(GuideIcon, { className: "mr-2 h-4 w-4 stroke-2" })
  },
  {
    id: "videos",
    url: "/videos",
    title: "Videos",
    group: "Pages",
    icon: /* @__PURE__ */ jsx(VideoIcon, { className: "mr-2 h-4 w-4 stroke-2" })
  }
];
function shouldShowPage(page) {
  const isUser = isLoggedIn();
  return !page.isProtected || isUser;
}
function CommandMenu() {
  const inputRef = useRef(null);
  const modalRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [allPages, setAllPages] = useState([]);
  const [searchResults, setSearchResults] = useState(defaultPages);
  const [searchedText, setSearchedText] = useState("");
  const [activeCounter, setActiveCounter] = useState(0);
  useKeydown("mod_k", () => {
    setIsActive(true);
  });
  useOutsideClick(modalRef, () => {
    setSearchedText("");
    setIsActive(false);
  });
  useEffect(() => {
    function handleToggleTopic(e) {
      setIsActive(true);
    }
    getAllPages();
    window.addEventListener(`command.k`, handleToggleTopic);
    return () => {
      window.removeEventListener(`command.k`, handleToggleTopic);
    };
  }, []);
  useEffect(() => {
    if (!isActive || !inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, [isActive]);
  async function getAllPages() {
    if (allPages.length > 0) {
      return allPages;
    }
    const { error, response } = await httpGet(`/pages.json`);
    if (!response) {
      return defaultPages.filter(shouldShowPage);
    }
    setAllPages([...defaultPages, ...response].filter(shouldShowPage));
    return response;
  }
  useEffect(() => {
    if (!searchedText) {
      setSearchResults(defaultPages.filter(shouldShowPage));
      return;
    }
    const normalizedSearchText = searchedText.trim().toLowerCase();
    getAllPages().then((unfilteredPages = defaultPages) => {
      const filteredPages = unfilteredPages.filter((currPage) => {
        return currPage.title.toLowerCase().indexOf(normalizedSearchText) !== -1;
      }).slice(0, 10);
      setActiveCounter(0);
      setSearchResults(filteredPages);
    });
  }, [searchedText]);
  if (!isActive) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { className: "fixed left-0 right-0 top-0 z-50 flex h-full justify-center overflow-y-auto overflow-x-hidden bg-black/50", children: /* @__PURE__ */ jsx("div", { className: "relative top-0 h-full w-full max-w-lg p-2 sm:mt-20 md:h-auto", children: /* @__PURE__ */ jsxs("div", { className: "relative rounded-lg bg-white shadow-sm", ref: modalRef, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ref: inputRef,
        autoFocus: true,
        type: "text",
        value: searchedText,
        className: "w-full rounded-t-md border-b p-4 text-sm focus:bg-gray-50 focus:outline-hidden",
        placeholder: "Search roadmaps, guides or pages ..",
        autoComplete: "off",
        onInput: (e) => {
          const value = e.target.value.trim();
          setSearchedText(value);
        },
        onKeyDown: (e) => {
          if (e.key === "ArrowDown") {
            const canGoNext = activeCounter < searchResults.length - 1;
            setActiveCounter(canGoNext ? activeCounter + 1 : 0);
          } else if (e.key === "ArrowUp") {
            const canGoPrev = activeCounter > 0;
            setActiveCounter(
              canGoPrev ? activeCounter - 1 : searchResults.length - 1
            );
          } else if (e.key === "Tab") {
            e.preventDefault();
          } else if (e.key === "Escape") {
            setSearchedText("");
            setIsActive(false);
          } else if (e.key === "Enter") {
            const activePage = searchResults[activeCounter];
            if (activePage) {
              window.location.href = activePage.url;
            }
          }
        }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "px-2 py-2", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
      searchResults.length === 0 && /* @__PURE__ */ jsx("div", { className: "p-5 text-center text-sm text-gray-400", children: "No results found" }),
      searchResults.map((page, counter) => {
        const prevPage = searchResults[counter - 1];
        const groupChanged = prevPage && prevPage.group !== page.group;
        return /* @__PURE__ */ jsxs(Fragment$1, { children: [
          groupChanged && /* @__PURE__ */ jsx("div", { className: "border-b border-gray-100" }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              className: cn(
                "flex w-full items-center rounded-sm p-2 text-sm",
                counter === activeCounter ? "bg-gray-100" : ""
              ),
              onMouseOver: () => setActiveCounter(counter),
              href: page.url,
              children: [
                !page.icon && /* @__PURE__ */ jsx("span", { className: "mr-2 text-gray-400", children: page.group }),
                page.icon && page.icon,
                page.title
              ]
            }
          )
        ] }, page.group + "/" + page.id);
      })
    ] }) })
  ] }) }) });
}

function CookieSettingsButton() {
  return /* @__PURE__ */ jsx("div", { className: "mt-12 flex items-center justify-start", children: /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: () => {
        const ot = window.OneTrust;
        const optanon = window.Optanon;
        if (ot) {
          ot.ToggleInfoDisplay();
        } else if (optanon) {
          optanon.ToggleInfoDisplay();
        } else {
          console.warn("OneTrust/Optanon SDK not found or not loaded yet.");
        }
      },
      className: cn(
        "flex items-center gap-2 rounded-md bg-slate-800/80 px-3 py-1.5 text-sm text-gray-400 transition-colors hover:bg-slate-700 hover:text-white"
      ),
      children: [
        /* @__PURE__ */ jsx(Cookie, { className: "h-4 w-4" }),
        "Cookie Settings"
      ]
    }
  ) });
}

const $$Astro$3 = createAstro("https://doc.imoogleai.xyz/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="bg-slate-900 py-6 pb-10 text-white sm:py-16"> <div class="container"> <p class="mb-8 flex flex-col justify-center gap-0 font-medium text-gray-400 sm:mb-16 sm:flex-row sm:gap-4"> <a class="border-b border-b-gray-700 px-2 py-1.5 transition-colors hover:text-white sm:border-b-0 sm:px-0 sm:py-0" href="/roadmaps">Roadmaps</a> <a class="border-b border-b-gray-700 px-2 py-1.5 transition-colors hover:text-white sm:border-b-0 sm:px-0 sm:py-0" href="/best-practices">Best Practices</a> <a class="border-b border-b-gray-700 px-2 py-1.5 transition-colors hover:text-white sm:border-b-0 sm:px-0 sm:py-0" href="/guides">Guides</a> <a class="border-b border-b-gray-700 px-2 py-1.5 transition-colors hover:text-white sm:border-b-0 sm:px-0 sm:py-0" href="/videos">Videos</a> <a class="border-b border-b-gray-700 px-2 py-1.5 transition-colors hover:text-white sm:border-b-0 sm:px-0 sm:py-0" href="/about">FAQs</a> <a class="px-2 py-1.5 transition-colors hover:text-white sm:border-b-0 sm:px-0 sm:py-0" href="https://youtube.com/theroadmap?sub_confirmation=1" target="_blank">YouTube</a> </p> <div class="flex flex-col justify-between gap-8 lg:flex-row lg:gap-2"> <div class="max-w-[425px]"> <p class="text-md flex items-center"> <a class="inline-flex items-center text-lg font-medium text-white transition-colors hover:text-gray-400" href="/"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "logo" })} <span class="ml-2">HNM Devs</span> </a> <span class="mx-2 text-gray-400">by</span> <a class="font-regular rounded-md bg-blue-600 px-1.5 py-1 text-sm hover:bg-blue-700" href="https://x.com/hnmdevs" target="_blank"> <span class="hidden sm:inline">@hnmdevs</span> <span class="inline sm:hidden">@hnmdevs</span> </a> </p> <p class="my-4 text-slate-300/60">
Community created roadmaps, best practices, projects, articles,
          resources and journeys to help you choose your path and grow in your
          career.
</p> <div class="text-sm text-gray-400"> <p>
&copy; HNM Devs
<span class="mx-1.5">&middot;</span> <a href="/terms" class="hover:text-white">Terms</a> <span class="mx-1.5">&middot;</span> <a href="/privacy" class="hover:text-white">Privacy</a> <span class="mx-1.5">&middot;</span> <a aria-label="Follow on LinkedIn" href="https://www.linkedin.com/company/hnmdevs" class="hover:text-white" target="_blank"> ${renderComponent($$result, "AstroIcon", $$AstroIcon, { "icon": "linkedin-2", "class": "inline-block h-5 w-5 fill-current" })} </a> <a aria-label="Subscribe to YouTube channel" href="https://youtube.com/hnmdevs?sub_confirmation=1" target="_blank" class="ml-2 hover:text-white"> ${renderComponent($$result, "AstroIcon", $$AstroIcon, { "icon": "youtube", "class": "inline-block h-5 w-5" })} </a> <a aria-label="Follow on Twitter" href="https://twitter.com/hnmdevs" target="_blank" class="ml-2 hover:text-white"> ${renderComponent($$result, "AstroIcon", $$AstroIcon, { "icon": "twitter-fill", "class": "inline-block h-5 w-5 fill-current" })} </a> <a aria-label="Follow on Blusky" href="http://hnmdevs.bsky.social/" target="_blank" class="ml-2 hover:text-white"> ${renderComponent($$result, "AstroIcon", $$AstroIcon, { "icon": "blusky", "class": "inline-block h-5 w-5 fill-current" })} </a> </p> </div> </div> <div class="max-w-[340px] text-left lg:text-right"> <a href="https://thenewstack.io" target="_blank"> <img src="/images/tns-sm.png" alt="ThewNewStack" class="my-1.5 mr-auto lg:mr-0 lg:ml-auto" width="200" height="24.8" loading="lazy"> </a> <p class="my-4 text-slate-300/60">
The top DevOps resource for Kubernetes, cloud-native computing, and
          large-scale development and deployment.
</p> <div class="text-sm text-gray-400"> <p> <a href="https://thenewstack.io/category/devops?utm_source=roadmap.sh&utm_medium=Referral&utm_campaign=Footer" target="_blank" class="text-gray-400 hover:text-white">DevOps</a> <span class="mx-1.5">&middot;</span> <a href="https://thenewstack.io/category/kubernetes?utm_source=roadmap.sh&utm_medium=Referral&utm_campaign=Footer" target="_blank" class="text-gray-400 hover:text-white">Kubernetes</a> <span class="mx-1.5">&middot;</span> <a href="https://thenewstack.io/category/cloud-native?utm_source=roadmap.sh&utm_medium=Referral&utm_campaign=Footer" target="_blank" class="text-gray-400 hover:text-white">Cloud-Native</a> </p> </div> </div> </div> ${renderComponent($$result, "CookieSettingsButton", CookieSettingsButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/CookieSettingsButton", "client:component-export": "CookieSettingsButton" })} </div> </div>`;
}, "/workspace/src/components/Footer.astro", void 0);

const pageProgressMessage = atom(void 0);
atom(false);
const roadmapsDropdownOpen = atom(false);
const navigationDropdownOpen = atom(false);
atom(false);
const aiDropdownOpen = atom(false);

const links$2 = [
  {
    link: "/courses/sql",
    label: "SQL Course",
    description: "Our premium SQL course",
    Icon: Database,
    isHighlighted: false,
    isNew: true
  },
  {
    link: "/get-started",
    label: "Get Started",
    description: "Pick a path and get started",
    Icon: ArrowRight,
    isHighlighted: false
  },
  {
    link: "/projects",
    label: "Projects",
    description: "Skill-up with real-world projects",
    Icon: FolderKanban,
    isHighlighted: false
  },
  {
    link: "/guides",
    label: "Guides",
    description: "In-depth articles and tutorials",
    Icon: BookOpenText,
    isHighlighted: false
  },
  {
    link: "/teams",
    label: "Teams",
    description: "Collaborate with your team",
    Icon: Users,
    isExternal: false,
    isHighlighted: false
  },
  {
    link: "/advertise",
    label: "Advertise",
    description: "Promote your product or service",
    Icon: Menu,
    isHighlighted: false
  }
];
function NavigationDropdown() {
  const dropdownRef = useRef(null);
  const $navigationDropdownOpen = useStore(navigationDropdownOpen);
  const $roadmapsDropdownOpen = useStore(roadmapsDropdownOpen);
  useOutsideClick(dropdownRef, () => {
    navigationDropdownOpen.set(false);
  });
  useEffect(() => {
    if ($roadmapsDropdownOpen) {
      navigationDropdownOpen.set(false);
    }
  }, [$roadmapsDropdownOpen]);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", ref: dropdownRef, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: cn("text-gray-400 hover:text-white", {
          "text-white": $navigationDropdownOpen
        }),
        onClick: () => navigationDropdownOpen.set(true),
        onMouseOver: () => navigationDropdownOpen.set(true),
        "aria-label": "Open Navigation Dropdown",
        "aria-expanded": $navigationDropdownOpen,
        children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "pointer-events-none invisible absolute left-0 top-full z-90 mt-2 w-48 min-w-[320px] -translate-y-1 rounded-lg bg-slate-800 py-2 opacity-0 shadow-xl transition-all duration-100",
          {
            "pointer-events-auto visible translate-y-2.5 opacity-100": $navigationDropdownOpen
          }
        ),
        role: "menu",
        children: links$2.map((link) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: link.link,
            target: link.isExternal ? "_blank" : void 0,
            rel: link.isExternal ? "noopener noreferrer" : void 0,
            className: cn(
              "group flex items-center gap-3 px-4 py-2.5 text-gray-400 transition-colors hover:bg-slate-700",
              {
                "mx-2 mb-1 rounded-md border border-slate-600 bg-slate-700 pl-2.5 text-gray-200 hover:bg-slate-600": link.isHighlighted
              }
            ),
            role: "menuitem",
            children: [
              /* @__PURE__ */ jsx("span", { className: "flex h-[40px] w-[40px] items-center justify-center rounded-full bg-slate-600 transition-colors group-hover:bg-slate-500 group-hover:text-slate-100", children: /* @__PURE__ */ jsx(link.Icon, { className: "inline-block h-5 w-5" }) }),
              /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxs("span", { className: "font-medium text-slate-300 transition-colors group-hover:text-slate-100", children: [
                  link.label,
                  " ",
                  link.isNew && /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold text-black py-0.5 uppercase tracking-wider bg-yellow-400 rounded-full px-1.5 relative -top-0.5", children: "New" })
                ] }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: link.description })
              ] })
            ]
          },
          link.link
        ))
      }
    )
  ] });
}

function NavigationDropdownMenu(props) {
  const { links, trigger, isOpen, onOpen, onClose } = props;
  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, onClose);
  return /* @__PURE__ */ jsxs("div", { className: "relative flex items-center", ref: dropdownRef, children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: cn("text-gray-400 hover:text-white", {
          "text-white": isOpen
        }),
        onClick: onOpen,
        onMouseOver: onOpen,
        "aria-label": "Open Navigation Dropdown",
        "aria-expanded": isOpen,
        children: trigger
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "pointer-events-none invisible absolute top-full left-0 z-90 mt-2 w-48 min-w-[320px] -translate-y-1 rounded-lg bg-slate-800 py-2 opacity-0 shadow-xl transition-all duration-100",
          {
            "pointer-events-auto visible translate-y-2.5 opacity-100": isOpen
          }
        ),
        role: "menu",
        children: links.map((link) => /* @__PURE__ */ jsxs(
          "a",
          {
            href: link.link,
            target: link.isExternal ? "_blank" : void 0,
            rel: link.isExternal ? "noopener noreferrer" : void 0,
            className: cn(
              "group flex items-center gap-3 px-4 py-2.5 text-gray-400 transition-colors hover:bg-slate-700",
              {
                "mx-2 mb-1 rounded-md border border-slate-600 bg-slate-700 pl-2.5 text-gray-200 hover:bg-slate-600": link.isHighlighted
              }
            ),
            role: "menuitem",
            children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: cn(
                    "flex h-[40px] w-[40px] items-center justify-center rounded-full bg-slate-600 transition-colors group-hover:bg-slate-500 group-hover:text-slate-100",
                    {
                      "bg-slate-500 text-slate-100": link.isHighlighted
                    }
                  ),
                  children: /* @__PURE__ */ jsx(link.Icon, { className: "inline-block h-5 w-5" })
                }
              ),
              /* @__PURE__ */ jsxs("span", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsxs(
                  "span",
                  {
                    className: cn(
                      "font-medium text-slate-300 transition-colors group-hover:text-slate-100",
                      {
                        "text-white": link.isHighlighted
                      }
                    ),
                    children: [
                      link.label,
                      " ",
                      link.isNew && /* @__PURE__ */ jsx("span", { className: "relative -top-0.5 rounded-full bg-yellow-400 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-black uppercase", children: "New" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: link.description })
              ] })
            ]
          },
          link.link
        ))
      }
    )
  ] });
}

const links$1 = [
  {
    link: "/roadmaps",
    label: "Official Roadmaps",
    description: "Made by subject matter experts",
    Icon: Map,
    isHighlighted: true
  },
  {
    link: "/ai?format=roadmap",
    label: "AI Roadmaps",
    description: "Generate roadmaps with AI",
    Icon: Sparkles,
    isHighlighted: false
  },
  {
    link: "/community",
    label: "Community Roadmaps",
    description: "Made by community members",
    Icon: Globe,
    isHighlighted: false
  }
];
function RoadmapDropdownMenu() {
  const isOpen = useStore(roadmapsDropdownOpen);
  const isNavOpen = useStore(navigationDropdownOpen);
  useEffect(() => {
    if (isNavOpen) {
      roadmapsDropdownOpen.set(false);
    }
  }, [isNavOpen]);
  return /* @__PURE__ */ jsx(
    NavigationDropdownMenu,
    {
      links: links$1,
      trigger: /* @__PURE__ */ jsxs("span", { children: [
        "Roadmaps",
        " ",
        /* @__PURE__ */ jsx(ChevronDown, { className: "inline-block h-3 w-3", strokeWidth: 4 })
      ] }),
      isOpen,
      onOpen: () => {
        navigationDropdownOpen.set(false);
        aiDropdownOpen.set(false);
        roadmapsDropdownOpen.set(true);
      },
      onClose: () => roadmapsDropdownOpen.set(false)
    }
  );
}

const links = [
  {
    link: "/ai",
    label: "Create with AI",
    description: "Learn something new with AI",
    Icon: Plus
  },
  {
    link: "/ai/quiz",
    label: "Test my Skills",
    description: "Test your skills with AI",
    Icon: Swords
  },
  {
    link: "/ai/chat",
    label: "Ask AI Tutor",
    description: "Career, resume guidance, and more",
    Icon: MessageCircle
  },
  {
    link: "/ai/roadmap-chat",
    label: "Roadmap Chat",
    description: "Chat with AI Tutor about a roadmap",
    Icon: Map
  }
];
function AIDropdownMenu() {
  const isOpen = useStore(aiDropdownOpen);
  const isNavOpen = useStore(navigationDropdownOpen);
  useEffect(() => {
    if (isNavOpen) {
      aiDropdownOpen.set(false);
    }
  }, [isNavOpen]);
  return /* @__PURE__ */ jsx(
    NavigationDropdownMenu,
    {
      links,
      trigger: /* @__PURE__ */ jsxs("span", { className: "group relative flex items-center gap-1 hover:text-white", children: [
        "AI Tutor",
        /* @__PURE__ */ jsx(ChevronDown, { className: "inline-block h-3 w-3", strokeWidth: 4 })
      ] }),
      isOpen,
      onOpen: () => {
        navigationDropdownOpen.set(false);
        roadmapsDropdownOpen.set(false);
        aiDropdownOpen.set(true);
      },
      onClose: () => aiDropdownOpen.set(false)
    }
  );
}

const $$Astro$2 = createAstro("https://doc.imoogleai.xyz/");
const $$Navigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="bg-slate-900 py-5 text-white sm:py-8"> <nav class="container flex items-center justify-between"> <div class="flex items-center gap-5"> <a class="flex items-center text-lg font-medium text-white" href="/" aria-label="HNM Devs"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "logo" })} </a> <a href="/ai" class="group relative inline text-gray-400 hover:text-white sm:hidden">
AI Tutor
</a> <!-- Desktop navigation items --> <div class="hidden gap-5 sm:flex sm:items-center"> ${renderComponent($$result, "NavigationDropdown", NavigationDropdown, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/NavigationDropdown", "client:component-export": "NavigationDropdown" })} ${renderComponent($$result, "RoadmapDropdownMenu", RoadmapDropdownMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TopNavDropdowns/RoadmapDropdownMenu", "client:component-export": "RoadmapDropdownMenu" })} ${renderComponent($$result, "AIDropdownMenu", AIDropdownMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/TopNavDropdowns/AIDropdownMenu", "client:component-export": "AIDropdownMenu" })} ${renderComponent($$result, "UpgradeProButton", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/TopNavDropdowns/UpgradeProButton", "client:component-export": "UpgradeProButton" })} </div> </div> <ul class="hidden h-8 w-[172px] items-center justify-end gap-5 sm:flex"> <li data-guest-required class="hidden"> <a href="/login" class="text-gray-400 hover:text-white">Login</a> </li> <li class="flex items-center gap-2"> ${renderComponent($$result, "AccountStreak", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/AccountStreak/AccountStreak", "client:component-export": "AccountStreak" })} ${renderComponent($$result, "AccountDropdown", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/Navigation/AccountDropdown", "client:component-export": "AccountDropdown" })} <a data-guest-required class="flex hidden h-8 w-28 cursor-pointer items-center justify-center rounded-full bg-linear-to-r from-blue-500 to-blue-700 px-4 py-2 text-sm font-medium text-white hover:from-blue-500 hover:to-blue-600" href="/signup"> <span>Sign Up</span> </a> </li> </ul> <!-- Mobile Navigation Button --> <button class="block cursor-pointer text-gray-400 hover:text-gray-50 sm:hidden" aria-label="Menu" data-show-mobile-nav> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "hamburger" })} </button> <!-- Mobile Navigation Items --> <div class="fixed top-0 right-0 bottom-0 left-0 z-40 flex hidden items-center bg-slate-900" data-mobile-nav> <button data-close-mobile-nav class="absolute top-6 right-6 block cursor-pointer text-gray-400 hover:text-gray-50" aria-label="Close Menu"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "close" })} </button> <ul class="flex w-full flex-col items-center gap-2 md:gap-3"> <li> <a href="/roadmaps" class="text-xl hover:text-blue-300 md:text-lg">
Roadmaps
</a> </li> <li> <a href="/ai" class="text-xl hover:text-blue-300 md:text-lg">
AI Tutor
</a> </li> <li> <a href="/guides" class="text-xl hover:text-blue-300 md:text-lg">
Guides
</a> </li> <!-- Links for logged in users --> <li data-auth-required class="hidden"> <a href="/account" class="text-xl hover:text-blue-300 md:text-lg">
Account
</a> </li> <li data-auth-required class="hidden"> <button data-logout-button class="text-xl text-red-300 hover:text-red-400 md:text-lg">
Logout
</button> </li> <li> <a data-guest-required href="/login" class="hidden text-xl text-white md:text-lg">
Login
</a> </li> <li> <a data-guest-required href="/signup" class="hidden text-xl text-green-300 hover:text-green-400 md:text-lg">
Sign Up
</a> </li> </ul> </div> </nav> </div> ${renderScript($$result, "/workspace/src/components/Navigation/Navigation.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspace/src/components/Navigation/Navigation.astro", void 0);

const formatter$1 = Intl.NumberFormat("en-US", {
  notation: "compact"
});
const defaultStarCount = 224e3;
let starCount = void 0;
async function countStars(repo = "kamranahmedse/developer-roadmap") {
  if (starCount) {
    return starCount;
  }
  try {
    const repoData = await fetch(`https://api.github.com/repos/${repo}`);
    const json = await repoData.json();
    starCount = json.stargazers_count * 1 || defaultStarCount;
  } catch (e) {
    console.log("Failed to fetch stars", e);
    starCount = defaultStarCount;
  }
  return starCount;
}
async function getFormattedStars(repo = "kamranahmedse/developer-roadmap") {
  const stars = await countStars(repo);
  return formatter$1.format(stars);
}
const defaultRanking = "7th";
let ranking;
async function getRepositoryRank(repo = "kamranahmedse/developer-roadmap") {
  try {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=stars:>100000&o=desc&s=stars`
    );
    const json = await response.json();
    const repositories = json.items || [];
    for (let rank = 1; rank <= repositories.length; rank++) {
      if (repositories[rank - 1].full_name.toLowerCase() === repo.toLowerCase()) {
        ranking = `${rank}${getOrdinalSuffix(rank)}`;
      }
    }
  } catch (e) {
    console.log("Failed to fetch ranking");
    ranking = defaultRanking;
  }
  return ranking;
}
function getOrdinalSuffix(rank) {
  if (11 <= rank % 100 && rank % 100 <= 13) {
    return "th";
  }
  switch (rank % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
function getTopGitHubLanguages(languages) {
  const total = Object.values(languages).reduce((a, b) => a + b, 0);
  let sum = 0;
  let topLanguages = [];
  for (const [language, bytes] of Object.entries(languages)) {
    sum += bytes;
    topLanguages.push(language);
    if (sum / total >= 0.9) {
      break;
    }
  }
  return topLanguages;
}

const siteConfig = {
  title: "HNM Devs - Roadmaps to becoming a modern developer",
  description: "Community driven roadmaps, articles and guides for developers to grow in their career.",
  keywords: [
    "roadmap",
    "hnm devs",
    "developer roadmaps",
    "developer roadmap",
    "how to become a developer",
    ...[
      "frontend developer",
      "backend developer",
      "full stack developer",
      "sre",
      "devops",
      "devops engineer",
      "android developer",
      "database administrator",
      "blockchain developer",
      "qa",
      "qa engineer",
      "software architect",
      "asp.net core developer",
      "react developer",
      "angular developer",
      "vue developer",
      "node.js developer",
      "javascript developer",
      "python developer",
      "go developer",
      "java developer",
      "design system",
      "software design",
      "graphql",
      "ux design",
      "terraform developer",
      "sql developer",
      "spring boot developer",
      "php developer",
      "ios developer",
      "game developer",
      "flutter developer",
      "data analyst",
      "aws developer",
      "cyber security specialist",
      "ai developer",
      "ai engineer",
      "ai data scientist"
    ].flatMap((roadmapKeyword) => [
      `${roadmapKeyword} roadmap`,
      `${roadmapKeyword} roadmap 2024`,
      `${roadmapKeyword} roadmap 2025`
    ])
  ]
};

const formatter = Intl.NumberFormat("en-US", {
  notation: "compact"
});
let discordStats = null;
async function getDiscordInfo() {
  if (discordStats) {
    return discordStats;
  }
  const response = await fetch(
    "https://discord.com/api/v9/invites/cJpEt5Qbwa?with_counts=true"
  );
  try {
    const json = await response.json();
    discordStats = {
      url: `https://discord.gg/${json.code}`,
      total: json.approximate_member_count,
      totalFormatted: formatter.format(json.approximate_member_count),
      online: json.approximate_presence_count,
      onlineFormatted: formatter.format(json.approximate_presence_count)
    };
  } catch (e) {
    discordStats = {
      url: `https://roadmap.sh/discord`,
      total: 17e3,
      totalFormatted: "17k",
      online: 0,
      onlineFormatted: formatter.format(0)
    };
  }
  return discordStats;
}

const $$Astro$1 = createAstro("https://doc.imoogleai.xyz/");
const $$OpenSourceStat = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$OpenSourceStat;
  const { value, text, secondaryValue } = Astro2.props;
  const isGitHubStars = text.toLowerCase() === "github stars";
  const isRegistered = text.toLowerCase() === "registered users";
  const isDiscordMembers = text.toLowerCase() === "discord members";
  return renderTemplate`${maybeRenderHead()}<div class="flex items-start sm:items-center justify-start flex-col sm:justify-center sm:gap-0 gap-2 sm:bg-transparent sm:rounded-none rounded-xl p-0 sm:p-4 mb-3 sm:mb-0"> ${isGitHubStars && renderTemplate`<p class="flex items-center text-sm text-blue-500 sm:flex"> <span class="rounded-md bg-blue-500 px-1 text-white">Rank ${secondaryValue}</span>
&nbsp;out of 28M!
</p>`} ${isRegistered && renderTemplate`<p class="flex items-center text-sm text-blue-500 sm:flex"> <span class="mr-1.5 rounded-md bg-blue-500 px-1 text-white">${secondaryValue}</span>
every month
</p>`} ${isDiscordMembers && renderTemplate`<p class="flex items-center text-sm text-blue-500 sm:flex"> <span class="mr-1.5 rounded-md bg-blue-500 px-1 text-white">${secondaryValue}</span>
every month
</p>`} <div class="flex flex-row items-center sm:flex-col my-1 sm:my-0"> <p class="my-0 sm:my-4 mr-1 sm:mr-0 text-base font-bold sm:w-auto sm:text-5xl"> ${value} </p> <p class="mb-0 mt-0 text-base sm:text-xs tracking-wide text-black sm:-mt-3 sm:mb-5"> ${text} </p> </div> ${isGitHubStars && renderTemplate`<a href="https://github.com/kamranahmedse/developer-roadmap" target="_blank" class="group mt-0 flex flex-col items-center rounded-lg border border-black bg-white px-3 py-2 text-sm hover:bg-black hover:text-white"> <div class="mb-0.5 flex items-center font-semibold"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "star", "class": "-ml-1 fill-current" })} <span class="ml-1.5 hover:block">Star us on GitHub</span> </div> <span class="text-xs text-gray-500 group-hover:text-gray-100">
Help us reach #1
</span> </a>`} ${isRegistered && renderTemplate`<a href="/signup" class="group mt-0 flex flex-col items-center rounded-lg border border-black bg-white px-3 py-2 text-sm hover:bg-black hover:text-white"> <div class="mb-0.5 flex items-center font-semibold"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "users", "class": "-ml-1 h-[15px] fill-current" })} <span class="ml-1 hover:block">Register yourself</span> </div> <span class="text-xs text-gray-500 group-hover:text-gray-100">
Commit to your growth
</span> </a>`} ${isDiscordMembers && renderTemplate`<a href="https://roadmap.sh/discord" target="_blank" class="group mt-0 flex flex-col items-center rounded-lg border border-black bg-white px-3 py-2 text-sm hover:bg-black hover:text-white"> <div class="mb-0.5 flex items-center font-semibold"> ${renderComponent($$result, "Icon", $$AstroIcon, { "icon": "discord", "class": "-ml-1 h-[13px] fill-current" })} <span class="ml-1 hover:block">Join on Discord</span> </div> <span class="text-xs text-gray-500 group-hover:text-gray-100">
Join the community
</span> </a>`} </div>`;
}, "/workspace/src/components/OpenSourceStat.astro", void 0);

const $$OpenSourceBanner = createComponent(async ($$result, $$props, $$slots) => {
  const repoName = "kamranahmedse/developer-roadmap";
  const starCount = await getFormattedStars(repoName);
  const repoRank = await getRepositoryRank(repoName);
  const discordInfo = await getDiscordInfo();
  return renderTemplate`${maybeRenderHead()}<div class="border-b border-t bg-white py-6 text-left sm:py-16 sm:text-center"> <div class="container max-w-[650px]!"> <p class="text-2xl font-bold sm:text-5xl">Join the Community</p> <p class="my-2.5 text-sm leading-relaxed text-gray-600 sm:my-5 sm:text-lg">
roadmap.sh is the <a href="https://github.com/search?o=desc&q=stars%3A%3E100000&s=stars&type=Repositories" target="_blank" class="font-medium text-gray-600 underline underline-offset-2 hover:text-black">${repoRank} most starred project on GitHub</a> and is visited by hundreds of thousands of developers every month.
</p> <div class="mt-5 grid grid-cols-1 justify-between gap-2 divide-x-0 sm:my-11 sm:grid-cols-3 sm:gap-0 sm:divide-x mb-4 sm:mb-0"> ${renderComponent($$result, "OpenSourceStat", $$OpenSourceStat, { "text": "GitHub Stars", "value": starCount, "secondaryValue": repoRank })} ${renderComponent($$result, "OpenSourceStat", $$OpenSourceStat, { "text": "Registered Users", "value": "+2.1M", "secondaryValue": "+90k" })} ${renderComponent($$result, "OpenSourceStat", $$OpenSourceStat, { "text": "Discord Members", "value": discordInfo.totalFormatted, "secondaryValue": "+2k" })} </div> </div> </div>`;
}, "/workspace/src/components/OpenSourceBanner.astro", void 0);

function PageProgress(props) {
  const { initialMessage } = props;
  const [message, setMessage] = useState(initialMessage);
  const $pageProgressMessage = useStore(pageProgressMessage);
  useEffect(() => {
    if ($pageProgressMessage === void 0) {
      return;
    }
    setMessage($pageProgressMessage);
  }, [$pageProgressMessage]);
  if (!message) {
    return null;
  }
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "fixed left-0 top-0 z-100 flex h-full w-full items-center justify-center bg-white/75", children: /* @__PURE__ */ jsxs("div", { className: "flex  items-center justify-center rounded-md border bg-white px-4 py-2 ", children: [
    /* @__PURE__ */ jsx(
      Spinner,
      {
        className: "h-4 w-4 sm:h-4 sm:w-4",
        outerFill: "#e5e7eb",
        innerFill: "#2563eb"
      }
    ),
    /* @__PURE__ */ jsxs("h1", { className: "ml-2", children: [
      message,
      /* @__PURE__ */ jsx("span", { className: "animate-pulse", children: "..." })
    ] })
  ] }) }) });
}

function PageVisit(props) {
  const { resourceId, resourceType } = props;
  useEffect(() => {
    storePathAsLastPath();
    if (!isLoggedIn()) {
      return;
    }
    httpPost(`${"https://api.roadmap.sh"}/v1-visit`, {
      ...resourceType && { resourceType, resourceId }
    }).finally(() => {
    });
  }, []);
  return null;
}

const HIDE_ANNOUNCEMENT_END_KEY = "__course_announcement_closed_at__";
function CourseAnnouncement() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const hiddenEndAt = Number(
      localStorage.getItem(HIDE_ANNOUNCEMENT_END_KEY) || "0"
    );
    const shouldShow = hiddenEndAt < Date.now();
    if (!shouldShow) {
      return;
    }
    const timer = setTimeout(() => setIsVisible(true), 5e3);
    return () => clearTimeout(timer);
  }, []);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "sticky top-0 z-91 h-0 overflow-hidden transition-[height] duration-300",
        isVisible ? "h-[30px] sm:h-[36px]" : "h-0"
      ),
      children: [
        /* @__PURE__ */ jsx("a", { href: "/courses/sql", className: "flex items-center bg-yellow-400 py-1.5", children: /* @__PURE__ */ jsxs("span", { className: "container mx-auto flex items-center justify-start gap-2 text-center sm:justify-center sm:gap-4", children: [
          /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-xs font-medium text-black md:text-base", children: [
            /* @__PURE__ */ jsx(Database, { className: "hidden h-4 w-4 shrink-0 text-black sm:block" }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:block", children: "Master SQL with our new premium course" }),
            /* @__PURE__ */ jsx("span", { className: "block sm:hidden", children: "Announcing our SQL course" })
          ] }),
          /* @__PURE__ */ jsxs(
            "span",
            {
              className: cn(
                "items-center gap-1.5 rounded-full bg-black px-2 py-0.5 text-xs font-medium tracking-wide text-white uppercase hover:bg-zinc-800 sm:px-3 sm:py-1",
                isVisible && "animate-wiggle [animation-delay:0.25s]"
              ),
              children: [
                /* @__PURE__ */ jsx("span", { className: "mr-1.5 hidden sm:inline", children: "Start Learning" }),
                /* @__PURE__ */ jsx("span", { className: "mr-1.5 inline sm:hidden", children: "Visit" }),
                /* @__PURE__ */ jsx("span", { className: "", children: "→" })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: "absolute top-1/2 right-3.5 -translate-y-1/2 rounded-lg px-1.5 py-1.5 text-gray-500 hover:bg-yellow-500 hover:text-gray-700",
            onClick: (e) => {
              setIsVisible(false);
              const fourteenDaysFromNow = Date.now() + 1e3 * 60 * 60 * 24 * 14;
              localStorage.setItem(
                HIDE_ANNOUNCEMENT_END_KEY,
                String(fourteenDaysFromNow)
              );
            },
            children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
          }
        )
      ]
    }
  );
}

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Bluconic = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<script async defer src="https://b174.roadmap.sh/script.js"><\/script>'])));
}, "/workspace/src/components/Analytics/Bluconic.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$OneTrust = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<!-- OneTrust Cookies Consent Notice start for roadmap.sh --><script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js" type="text/javascript" charset="UTF-8" data-domain-script="01977e0e-9a37-7b4a-aad2-8cf9247d94b6"><\/script> <script type="text/javascript">\n  function OptanonWrapper() {}\n<\/script> <!-- OneTrust Cookies Consent Notice end for roadmap.sh -->'])));
}, "/workspace/src/components/Analytics/OneTrust.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a, _b, _c;
const $$Astro = createAstro("https://doc.imoogleai.xyz/");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = siteConfig.title,
    htmlClassName,
    bodyClassName,
    briefTitle,
    description = siteConfig.description,
    ogImageUrl = "https://roadmap.sh/images/og-img.png",
    keywords = siteConfig.keywords,
    noIndex = false,
    permalink = "",
    canonicalUrl: givenCanonical = "",
    jsonLd = [],
    redirectUrl = "",
    initialLoadingMessage = "",
    resourceId,
    resourceType,
    hasVarify = false
  } = Astro2.props;
  const currentPageAbsoluteUrl = `https://hnmdevs.com${permalink}`;
  const canonicalUrl = givenCanonical || currentPageAbsoluteUrl;
  const commitUrl = `https://github.com/jonesded/developer-roadmap/commit/${undefined                          }`;
  Astro2.url.pathname.replace(/^\//, "").replace(/\/$/, "").replace(/\//g, ":");
  return renderTemplate(_c || (_c = __template(['<html lang="en"', '> <head><meta charset="UTF-8"><meta name="generator"', '><meta name="commit"', "><title>", '</title><meta name="description"', '><meta name="keywords"', ">", "", '<meta name="viewport" content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0"><meta http-equiv="Content-Language" content="en"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:creator" content="@kamrify"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image"', '><meta property="og:image:alt" content="roadmap.sh"><meta property="og:site_name" content="roadmap.sh"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', '><link rel="canonical"', '><meta name="mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="roadmap.sh"><meta name="application-name" content="roadmap.sh"><meta name="ahrefs-site-verification" content="04588b1b3d0118b4f973fa24f9df38ca6300d152cc26529a639e9a34d09c9880"><link rel="apple-touch-icon" sizes="180x180" href="/manifest/apple-touch-icon.png"><meta name="msapplication-TileColor" content="#101010"><meta name="theme-color" content="#848a9a"><link rel="manifest" href="/manifest/manifest.json"><link rel="icon" type="image/png" sizes="32x32" href="/manifest/icon32.png"><link rel="icon" type="image/png" sizes="16x16" href="/manifest/icon16.png"><link rel="shortcut icon" href="/manifest/favicon.ico" type="image/x-icon"><link rel="icon" href="/manifest/favicon.ico" type="image/x-icon"><link rel="preconnect" href="https://www.google-analytics.com/"><link rel="preconnect" href="https://api.roadmap.sh/">', "<!-- Google Tag Manager Start --><script>\n      (function (w, d, s, l, i) {\n        w[l] = w[l] || [];\n        w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });\n        var f = d.getElementsByTagName(s)[0],\n          j = d.createElement(s),\n          dl = l != 'dataLayer' ? '&l=' + l : '';\n        j.async = true;\n        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;\n        f.parentNode.insertBefore(j, f);\n      })(window, document, 'script', 'dataLayer', 'GTM-T66KC7S8');\n    </script><!-- Google Tag Manager End -->", "", "", "", "", "", "</head> <body", '> <!-- Google Tag Manager (noscript) --> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T66KC7S8" height="0" width="0" style="display:none;visibility:hidden"></iframe> </noscript> <!-- End Google Tag Manager (noscript) --> ', " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " </body></html>"])), addAttribute(htmlClassName, "class"), addAttribute(Astro2.generator, "content"), addAttribute(commitUrl, "content"), title, addAttribute(description, "content"), addAttribute(keywords.join(", "), "content"), redirectUrl && renderTemplate`<meta http-equiv="refresh"${addAttribute(`1;url=${redirectUrl}`, "content")}>`, noIndex && renderTemplate`<meta name="robots" content="noindex">`, addAttribute(ogImageUrl || "https://roadmap.sh/images/og-img.png", "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(currentPageAbsoluteUrl, "content"), addAttribute(canonicalUrl, "href"), hasVarify && renderTemplate`${renderComponent($$result, "Fragment", Fragment$2, {}, { "default": ($$result2) => renderTemplate(_a || (_a = __template([`<style>.varify-antiflicker{opacity:0 !important}</style><script>
            window.setTimeout(() => {
              document.querySelectorAll('.varify-antiflicker').forEach((el) => {
                el.classList.remove('varify-antiflicker');
              });
            }, 4000);
            window.varify = window.varify || {};
            window.varify.iid = 4013;
          </script><script src="https://app.varify.io/varify.js"></script>`]))) })}`, renderSlot($$result, $$slots["after-header"]), jsonLd.length > 0 && renderTemplate(_b || (_b = __template(['<script type="application/ld+json">', "</script>"])), unescapeHTML(JSON.stringify(jsonLd))), renderComponent($$result, "Analytics", $$Analytics, {}), renderComponent($$result, "GoogleAd", $$GoogleAd, {}), renderTemplate`${renderComponent($$result, "Fragment", Fragment$2, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "OneTrust", $$OneTrust, {})}${renderComponent($$result2, "Clarity", $$Clarity, {})}${renderComponent($$result2, "RedditPixel", $$RedditPixel, {})}${renderComponent($$result2, "Hubspot", $$Hubspot, {})}${renderComponent($$result2, "Bluconic", $$Bluconic, {})}` })}`, renderHead(), addAttribute(cn("flex min-h-screen flex-col", bodyClassName), "class"), renderSlot($$result, $$slots["course-announcement"], renderTemplate` ${renderComponent($$result, "CourseAnnouncement", CourseAnnouncement, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/SQLCourse/CourseAnnouncement", "client:component-export": "CourseAnnouncement" })} `), renderSlot($$result, $$slots["page-header"], renderTemplate` ${renderComponent($$result, "Navigation", $$Navigation, {})} `), renderSlot($$result, $$slots["default"]), renderSlot($$result, $$slots["page-footer"], renderTemplate` ${renderSlot($$result, $$slots["changelog-banner"])} ${renderSlot($$result, $$slots["open-source-banner"], renderTemplate` ${renderComponent($$result, "OpenSourceBanner", $$OpenSourceBanner, {})} `)} ${renderComponent($$result, "Footer", $$Footer, {})} `), renderComponent($$result, "Authenticator", $$Authenticator, {}), renderSlot($$result, $$slots["login-popup"], renderTemplate` ${renderComponent($$result, "LoginPopup", $$LoginPopup, {})} `), renderComponent($$result, "Toaster", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/Toast", "client:component-export": "Toaster" }), renderComponent($$result, "CommandMenu", CommandMenu, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/workspace/src/components/CommandMenu/CommandMenu", "client:component-export": "CommandMenu" }), renderComponent($$result, "PageProgress", PageProgress, { "initialMessage": initialLoadingMessage, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/workspace/src/components/PageProgress", "client:component-export": "PageProgress" }), renderComponent($$result, "GlobalUpgradeModal", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/workspace/src/components/Billing/GlobalUpgradeModal", "client:component-export": "GlobalUpgradeModal" }), renderComponent($$result, "GoogleAdSlot", $$GoogleAdSlot, {}), renderSlot($$result, $$slots["after-footer"]), renderComponent($$result, "PageVisit", PageVisit, { "resourceId": resourceId, "resourceType": resourceType, "client:load": true, "client:component-hydration": "load", "client:component-path": "/workspace/src/components/PageVisit/PageVisit", "client:component-export": "PageVisit" }));
}, "/workspace/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, AuthenticationForm as A, GitHubIcon as B, parseUrl as C, getTopGitHubLanguages as D, COURSE_PURCHASE_PARAM as E, FIRST_LOGIN_PARAM as F, GroupIcon as G, SAMPLE_AFTER_LOGIN_KEY as H, COURSE_PURCHASE_SUCCESS_PARAM as I, CourseLoginPopup as J, Modal as M, RoadmapIcon as R, Spinner as S, TOKEN_COOKIE_NAME as T, decodeToken as a, getUrlParams as b, cn as c, deleteUrlParam as d, httpGet as e, $$Popup as f, getUser as g, httpPost as h, isLoggedIn as i, $$AstroIcon as j, getRepositoryRank as k, useKeydown as l, $$LoginPopup as m, httpPatch as n, AccountTerms as o, pageProgressMessage as p, setAuthToken as q, removeAuthToken as r, setUrlParams as s, triggerUtmRegistration as t, useOutsideClick as u, httpDelete as v, httpPut as w, setAIReferralCode as x, visitAIRoadmap as y, $$Footer as z };
