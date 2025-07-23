import{c as s}from"./createLucideIcon.BSLrQS80.js";import{j as o}from"./jsx-runtime.D_zvdyIk.js";import{r as p}from"./index.Z3BHPS3u.js";import{c as d}from"./classname.y9b8gBZq.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]],w=s("chevrons-down",m);/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]],k=s("chevrons-up",x);function y(c){const{topicTitles:t,onSelectActivity:u,className:n}=c,[e,r]=p.useState(!1),a=t.slice(0,e?t.length:3),l=t.length>3;return o.jsxs("div",{className:d("flex flex-wrap gap-1 text-sm font-normal text-gray-600",n),children:[a.map((i,h)=>o.jsx("span",{className:"rounded-md bg-gray-200 px-1.5",children:i},h)),l&&!e&&o.jsx("button",{onClick:()=>r(!e),className:"bg-white border border-black text-black rounded-md px-1.5 hover:bg-black text-xs h-[20px] hover:text-white",children:e?"- Show less":`+${t.length-3}`})]})}export{y as A,k as C,w as a};
