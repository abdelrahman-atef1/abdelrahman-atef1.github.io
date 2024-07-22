import{r,j as f}from"./jsx-runtime-DexIYAB0.js";import{c as C,g as V,t as L,h as R,a as P,n as E,u as H,B as Q,I as J}from"./heading-BqLERMAu.js";const X="/assets/gotham-bold-italic-C_msAlmW.woff2",Y="/assets/gotham-bold-D1kvQ7KV.woff2",Z="/assets/gotham-book-italic-Bm2IEtSK.woff2",ee="/assets/gotham-book-Bnaws0Ef.woff2",te="/assets/gotham-medium-italic-Dok430ou.woff2",oe="/assets/gotham-medium-0VT3RO8I.woff2",ae="/assets/IBMPlexSansArabic-Regular-DsN3Thpy.ttf",z=r.createContext({}),xe=({theme:e="dark",children:t,className:n,as:a="div",toggleTheme:l,...s})=>{const o=W(),c=!o.theme;return f.jsxs(z.Provider,{value:{theme:e,toggleTheme:l||o.toggleTheme},children:[c&&t,!c&&f.jsx(a,{className:C(n),"data-theme":e,...s,children:t})]})};function W(){return r.useContext(z)}function p(e){return e.replace(/\s\s+/g," ")}function j(e){return p(Object.keys(e).map(t=>`--${t}: ${e[t]};`).join(`

`))}function se(){return p(Object.keys(V).map(e=>`
        @media (max-width: ${V[e]}px) {
          :root {
            ${j(L[e])}
          }
        }
      `).join(`
`))}const ne=p(`
  @layer theme, base, components, layout;
`),re=p(`
  :root {
    ${j(L.base)}
  }

  ${se()}

  [data-theme='dark'] {
    ${j(R.dark)}
  }

  [data-theme='light'] {
    ${j(R.light)}
  }
`),ce=p(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${ee}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${Z}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${oe}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${te}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${Y}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${X}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IBMPlex;
    font-weight: 400;
    src: url(${ae}) format('ttf');
    font-display: swap;
    font-style: normal;
  }
`),Ie=p(`
  ${ne}

  @layer theme {
    ${re}
    ${ce}
  }
`);function le(){const[e,t]=r.useState(!1);return r.useEffect(()=>{t(!0)},[]),e}function ie(e,t,n={},a=!0){const[l,s]=r.useState(!1),[o,c]=r.useState(!1);return r.useEffect(()=>{if(!(e!=null&&e.current))return;const i=new IntersectionObserver(([u])=>{const{isIntersecting:m,target:h}=u;s(m),m&&t&&(i.unobserve(h),c(!0))},n);return!o&&a&&i.observe(e.current),()=>i.disconnect()},[e,t,n,o,a]),l}async function fe({src:e,srcSet:t,sizes:n}){return new Promise((a,l)=>{try{if(!e&&!t)throw new Error("No image src or srcSet provided");let s=new Image;e&&(s.src=e),t&&(s.srcset=t),n&&(s.sizes=n);const o=()=>{s.removeEventListener("load",o);const c=s.currentSrc;s=null,a(c)};s.addEventListener("load",o)}catch(s){l(`Error loading ${t}: ${s}`)}})}async function ue(e=1,t=1){return new Promise(n=>{const a=document.createElement("canvas"),l=a.getContext("2d");a.width=e,a.height=t,l.fillStyle="rgba(0, 0, 0, 0)",l.fillRect(0,0,e,t),a.toBlob(async s=>{if(!s)throw new Error("Video thumbnail failed to load");const o=URL.createObjectURL(s);a.remove(),n(o)})})}async function me({srcSet:e,sizes:t}){const n=await Promise.all(e.split(", ").map(async o=>{const[c,i]=o.split(" "),u=Number(i.replace("w","")),m=await ue(u);return{src:c,image:m,width:i}})),a=n.map(({image:o,width:c})=>`${o} ${c}`).join(", "),l=await fe({srcSet:a,sizes:t});return n.find(o=>o.image===l).src}const de="_image_1yz75_3",he="_container_1yz75_83",ye="_elementWrapper_1yz75_97",pe="_placeholder_1yz75_141",ge="_element_1yz75_97",we="_button_1yz75_207",y={image:de,container:he,elementWrapper:ye,placeholder:pe,element:ge,button:we},$e=({className:e,style:t,reveal:n,delay:a=0,raised:l,src:s,srcSet:o,placeholder:c,...i})=>{const[u,m]=r.useState(!1),{theme:h}=W(),g=r.useRef(),w=s||o.split(" ")[0],S=ie(g,!D(w)),v=r.useCallback(()=>{m(!0)},[]);return f.jsx("div",{className:C(y.image,e),"data-visible":S||u,"data-reveal":n,"data-raised":l,"data-theme":h,style:P({delay:E(a)},t),ref:g,children:f.jsx(ve,{delay:a,onLoad:v,loaded:u,inViewport:S,reveal:n,src:w,srcSet:o,placeholder:c,...i})})},ve=({onLoad:e,loaded:t,inViewport:n,srcSet:a,placeholder:l,delay:s,src:o,alt:c,play:i=!0,restartOnPause:u,reveal:m,sizes:h,width:g,height:w,noPauseButton:S,cover:v,...T})=>{const x=H(),[F,U]=r.useState(!0),[G,I]=r.useState(!x),[_,B]=r.useState(),[M,A]=r.useState(!1),K=r.useRef(),d=r.useRef(),b=D(o),N=n,O=le();r.useEffect(()=>{b&&a?(async()=>{const k=await me({srcSet:a,sizes:h});B(k)})():b&&B(o)},[b,h,o,a]),r.useEffect(()=>{if(!d.current||!_)return;const $=()=>{I(!0),d.current.play()},k=()=>{I(!1),d.current.pause()};i||(k(),u&&(d.current.currentTime=0)),!M&&(n?n&&!x&&i&&$():k())},[n,i,x,u,M,_]);const q=$=>{$.preventDefault(),A(!0),d.current.paused?(I(!0),d.current.play()):(I(!1),d.current.pause())};return f.jsxs("div",{className:y.elementWrapper,"data-reveal":m,"data-visible":n||t,style:P({delay:E(s+1e3)}),children:[b&&O&&f.jsxs(r.Fragment,{children:[f.jsx("video",{muted:!0,loop:!0,playsInline:!0,className:y.element,"data-loaded":t,"data-cover":v,autoPlay:!x,onLoadStart:e,src:_,"aria-label":c,ref:d,...T}),!S&&f.jsxs(Q,{className:y.button,onClick:q,children:[f.jsx(J,{icon:G?"pause":"play"}),G?"Pause":"Play"]})]}),!b&&f.jsx("img",{className:y.element,"data-loaded":t,"data-cover":v,onLoad:e,decoding:"async",src:N?o:void 0,srcSet:N?a:void 0,width:g,height:w,alt:c,sizes:h,...T}),F&&f.jsx("img",{"aria-hidden":!0,className:y.placeholder,"data-loaded":t,"data-cover":v,style:P({delay:E(s)}),ref:K,src:l,width:g,height:w,onTransitionEnd:()=>U(!1),decoding:"async",loading:"lazy",alt:"",role:"presentation"})]})};function D(e){return typeof e=="string"&&e.includes(".mp4")}export{oe as G,$e as I,xe as T,W as a,ee as b,me as r,Ie as t,ie as u};
