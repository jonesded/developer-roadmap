const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/dom-to-image.CphBTX1t.js","_astro/index.Z3BHPS3u.js"])))=>i.map(i=>d[i]);
import{_ as l}from"./preload-helper.BlTxHScW.js";async function h({url:r,name:n,extension:a="png",scale:o=1}){try{const d=await(await fetch(r)).text(),i=`data:image/svg+xml;base64,${window.btoa(d)}`,t=new Image;t.src=i,t.onload=()=>{const e=document.createElement("canvas");e.width=t.width*o,e.height=t.height*o,e.getContext("2d")?.drawImage(t,0,0,e.width,e.height);const m=e.toDataURL("image/png",1),s=document.createElement("a");s.href=m,s.download=`${n}.${a}`,s.click()}}catch{alert("Error downloading image")}}async function p(r,n){const a=document.createElement("div");a.className="flex justify-end absolute top-4 right-4 gap-2",a.innerHTML=`
    <span
      class='rounded-md bg-black py-2 px-2 text-white'
    >
      roadmap.sh
    </span>
  `,n.insertAdjacentElement("afterbegin",a);const o=(await l(async()=>{const{default:i}=await import("./dom-to-image.CphBTX1t.js").then(t=>t.d);return{default:i}},__vite__mapDeps([0,1]))).default;if(!o)throw new Error("Unable to download image");const c=await o.toJpeg(n,{bgcolor:"white",quality:1});n?.removeChild(a);const d=document.createElement("a");d.download=`${r}-roadmap.jpg`,d.href=c,d.click()}export{p as a,h as d};
