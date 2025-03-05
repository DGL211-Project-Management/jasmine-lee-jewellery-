import{c as j,g as Z,Q as ee}from"./QBtn-BVg5AeRP.js";import{c as L,a as f,h,r as z,i as K,o as E,g as _,b as O,n as X,d as A,l as F,e as Y,f as $,j as W,w as T,p as G,k as te,m as H,q as oe,s as ne,t as le,u as Q,v as ie,x as q,y as re,z as ae,A as se}from"./index-BsjmmQLL.js";import{h as M,a as ue,b as ce}from"./render-DjSmuU3c.js";const de=L({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:i}){const t=f(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>h("div",{class:t.value},M(i.default))}}),fe=L({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:i}){const t=f(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>h("div",{class:t.value,role:"toolbar"},M(i.default))}});function ve(){const e=z(!K.value);return e.value===!1&&E(()=>{e.value=!0}),{isHydrated:e}}const J=typeof ResizeObserver<"u",U=J===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},N=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:i}){let t=null,o,n={width:-1,height:-1};function u(a){a===!0||e.debounce===0||e.debounce==="0"?c():t===null&&(t=setTimeout(c,e.debounce))}function c(){if(t!==null&&(clearTimeout(t),t=null),o){const{offsetWidth:a,offsetHeight:r}=o;(a!==n.width||r!==n.height)&&(n={width:a,height:r},i("resize",n))}}const{proxy:m}=_();if(m.trigger=u,J===!0){let a;const r=p=>{o=m.$el.parentNode,o?(a=new ResizeObserver(u),a.observe(o),c()):p!==!0&&A(()=>{r(!0)})};return E(()=>{r()}),O(()=>{t!==null&&clearTimeout(t),a!==void 0&&(a.disconnect!==void 0?a.disconnect():o&&a.unobserve(o))}),X}else{let a=function(){t!==null&&(clearTimeout(t),t=null),v!==void 0&&(v.removeEventListener!==void 0&&v.removeEventListener("resize",u,F.passive),v=void 0)},r=function(){a(),o?.contentDocument&&(v=o.contentDocument.defaultView,v.addEventListener("resize",u,F.passive),c())};const{isHydrated:p}=ve();let v;return E(()=>{A(()=>{o=m.$el,o&&r()})}),O(a),()=>{if(p.value===!0)return h("object",{class:"q--avoid-card-border",style:U.style,tabindex:-1,type:"text/html",data:U.url,"aria-hidden":"true",onLoad:r})}}}}),he=L({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:i,emit:t}){const{proxy:{$q:o}}=_(),n=Y(W,$);if(n===$)return console.error("QHeader needs to be child of QLayout"),$;const u=z(parseInt(e.heightHint,10)),c=z(!0),m=f(()=>e.reveal===!0||n.view.value.indexOf("H")!==-1||o.platform.is.ios&&n.isContainer.value===!0),a=f(()=>{if(e.modelValue!==!0)return 0;if(m.value===!0)return c.value===!0?u.value:0;const l=u.value-n.scroll.value.position;return l>0?l:0}),r=f(()=>e.modelValue!==!0||m.value===!0&&c.value!==!0),p=f(()=>e.modelValue===!0&&r.value===!0&&e.reveal===!0),v=f(()=>"q-header q-layout__section--marginal "+(m.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(r.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),x=f(()=>{const l=n.rows.value.top,b={};return l[0]==="l"&&n.left.space===!0&&(b[o.lang.rtl===!0?"right":"left"]=`${n.left.size}px`),l[2]==="r"&&n.right.space===!0&&(b[o.lang.rtl===!0?"left":"right"]=`${n.right.size}px`),b});function d(l,b){n.update("header",l,b)}function y(l,b){l.value!==b&&(l.value=b)}function R({height:l}){y(u,l),d("size",l)}function V(l){p.value===!0&&y(c,!0),t("focusin",l)}T(()=>e.modelValue,l=>{d("space",l),y(c,!0),n.animate()}),T(a,l=>{d("offset",l)}),T(()=>e.reveal,l=>{l===!1&&y(c,e.modelValue)}),T(c,l=>{n.animate(),t("reveal",l)}),T(n.scroll,l=>{e.reveal===!0&&y(c,l.direction==="up"||l.position<=e.revealOffset||l.position-l.inflectionPoint<100)});const C={};return n.instances.header=C,e.modelValue===!0&&d("size",u.value),d("space",e.modelValue),d("offset",a.value),O(()=>{n.instances.header===C&&(n.instances.header=void 0,d("size",0),d("offset",0),d("space",!1))}),()=>{const l=ue(i.default,[]);return e.elevated===!0&&l.push(h("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push(h(N,{debounce:0,onResize:R})),h("header",{class:v.value,style:x.value,onFocusin:V},l)}}}),me=L({name:"QPageContainer",setup(e,{slots:i}){const{proxy:{$q:t}}=_(),o=Y(W,$);if(o===$)return console.error("QPageContainer needs to be child of QLayout"),$;G(te,!0);const n=f(()=>{const u={};return o.header.space===!0&&(u.paddingTop=`${o.header.size}px`),o.right.space===!0&&(u[`padding${t.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(u.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(u[`padding${t.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),u});return()=>h("div",{class:"q-page-container",style:n.value},M(i.default))}}),ge=[Element,String],pe=[null,document,document.body,document.scrollingElement,document.documentElement];function be(e,i){let t=Z(i);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return pe.includes(t)?window:t}function ye(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function we(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let P;function k(){if(P!==void 0)return P;const e=document.createElement("p"),i=document.createElement("div");j(e,{width:"100%",height:"200px"}),j(i,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),i.appendChild(e),document.body.appendChild(i);const t=e.offsetWidth;i.style.overflow="scroll";let o=e.offsetWidth;return t===o&&(o=i.clientWidth),i.remove(),P=t-o,P}const{passive:I}=F,ze=["both","horizontal","vertical"],xe=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ze.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:ge},emits:["scroll"],setup(e,{emit:i}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,n,u;T(()=>e.scrollTarget,()=>{a(),m()});function c(){o?.();const v=Math.max(0,ye(n)),x=we(n),d={top:v-t.position.top,left:x-t.position.left};if(e.axis==="vertical"&&d.top===0||e.axis==="horizontal"&&d.left===0)return;const y=Math.abs(d.top)>=Math.abs(d.left)?d.top<0?"up":"down":d.left<0?"left":"right";t.position={top:v,left:x},t.directionChanged=t.direction!==y,t.delta=d,t.directionChanged===!0&&(t.direction=y,t.inflectionPoint=t.position),i("scroll",{...t})}function m(){n=be(u,e.scrollTarget),n.addEventListener("scroll",r,I),r(!0)}function a(){n!==void 0&&(n.removeEventListener("scroll",r,I),n=void 0)}function r(v){if(v===!0||e.debounce===0||e.debounce==="0")c();else if(o===null){const[x,d]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];o=()=>{d(x),o=null}}}const{proxy:p}=_();return T(()=>p.$q.lang.rtl,c),E(()=>{u=p.$el.parentNode,m()}),O(()=>{o?.(),a()}),Object.assign(p,{trigger:r,getPosition:()=>t}),X}}),Se=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:i,emit:t}){const{proxy:{$q:o}}=_(),n=z(null),u=z(o.screen.height),c=z(e.container===!0?0:o.screen.width),m=z({position:0,direction:"down",inflectionPoint:0}),a=z(0),r=z(K.value===!0?0:k()),p=f(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),v=f(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),x=f(()=>r.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${r.value}px`}:null),d=f(()=>r.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${r.value}px`,width:`calc(100% + ${r.value}px)`}:null);function y(s){if(e.container===!0||document.qScrollPrevented!==!0){const g={position:s.position.top,direction:s.direction,directionChanged:s.directionChanged,inflectionPoint:s.inflectionPoint.top,delta:s.delta.top};m.value=g,e.onScroll!==void 0&&t("scroll",g)}}function R(s){const{height:g,width:S}=s;let w=!1;u.value!==g&&(w=!0,u.value=g,e.onScrollHeight!==void 0&&t("scrollHeight",g),C()),c.value!==S&&(w=!0,c.value=S),w===!0&&e.onResize!==void 0&&t("resize",s)}function V({height:s}){a.value!==s&&(a.value=s,C())}function C(){if(e.container===!0){const s=u.value>a.value?k():0;r.value!==s&&(r.value=s)}}let l=null;const b={instances:{},view:f(()=>e.view),isContainer:f(()=>e.container),rootRef:n,height:u,containerHeight:a,scrollbarWidth:r,totalWidth:f(()=>c.value+r.value),rows:f(()=>{const s=e.view.toLowerCase().split(" ");return{top:s[0].split(""),middle:s[1].split(""),bottom:s[2].split("")}}),header:H({size:0,offset:0,space:!1}),right:H({size:300,offset:0,space:!1}),footer:H({size:0,offset:0,space:!1}),left:H({size:300,offset:0,space:!1}),scroll:m,animate(){l!==null?clearTimeout(l):document.body.classList.add("q-body--layout-animate"),l=setTimeout(()=>{l=null,document.body.classList.remove("q-body--layout-animate")},155)},update(s,g,S){b[s][g]=S}};if(G(W,b),k()>0){let s=function(){w=null,B.classList.remove("hide-scrollbar")},g=function(){if(w===null){if(B.scrollHeight>o.screen.height)return;B.classList.add("hide-scrollbar")}else clearTimeout(w);w=setTimeout(s,300)},S=function(D){w!==null&&D==="remove"&&(clearTimeout(w),s()),window[`${D}EventListener`]("resize",g)},w=null;const B=document.body;T(()=>e.container!==!0?"add":"remove",S),e.container!==!0&&S("add"),oe(()=>{S("remove")})}return()=>{const s=ce(i.default,[h(xe,{onScroll:y}),h(N,{onResize:R})]),g=h("div",{class:p.value,style:v.value,ref:e.container===!0?void 0:n,tabindex:-1},s);return e.container===!0?h("div",{class:"q-layout-container overflow-hidden",ref:n},[h(N,{onResize:V}),h("div",{class:"absolute-full",style:x.value},[h("div",{class:"scroll",style:d.value},[g])])]):g}}}),Te=(e,i)=>{const t=e.__vccOpts||e;for(const[o,n]of i)t[o]=n;return t},Le={};function qe(e,i){const t=ie("router-view");return le(),ne(Se,{view:"lHh Lpr lFf"},{default:Q(()=>[q(he,{elevated:""},{default:Q(()=>[q(fe,null,{default:Q(()=>[q(ee,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),q(de,null,{default:Q(()=>i[0]||(i[0]=[ae(" Quasar App ")])),_:1}),re("div",null,"Quasar v"+se(e.$q.version),1)]),_:1})]),_:1}),q(me,null,{default:Q(()=>[q(t)]),_:1})]),_:1})}const _e=Te(Le,[["render",qe]]);export{_e as default};
