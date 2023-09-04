import{_ as C}from"../chunks/preload-helper.a4192956.js";import{r as re,e as oe}from"../chunks/index.3a808bdd.js";import{s as D,C as A,f as v,g as w,h as E,d as u,j as g,i as $,G as N,H as z,I as H,z as Z,o as ie,S as ce,r as F,A as fe,a as U,P as ue,c as B,R as me,T as x,x as q,p as _e,q as ee,B as de,l as G,m as K,n as J}from"../chunks/scheduler.9a75ed56.js";import{S,i as T,a as _,t as d,b as O,d as k,m as I,e as y,c as pe,g as ge}from"../chunks/index.7ac402cb.js";import{p as $e}from"../chunks/stores.d448a2eb.js";import{c as P,g as he}from"../chunks/index.96f6542b.js";import"../chunks/index.313e2785.js";function be(l){return l.replace("/content/","").replace(".md","")}async function ve(l){var r;if(l==="components")throw re(303,"/docs/components/accordion");const e=Object.assign({"/content/headless-usage.md":()=>C(()=>import("../chunks/headless-usage.1e531813.js"),["../chunks/headless-usage.1e531813.js","../chunks/scheduler.9a75ed56.js","../chunks/index.7ac402cb.js","../chunks/index.96f6542b.js","../chunks/singletons.01533805.js","../chunks/index.3a808bdd.js","../chunks/control.f5b05b5f.js","../chunks/layout.af29b115.js","../chunks/index.313e2785.js","../chunks/events.ac042ba1.js","../chunks/h3.39d5449e.js"],import.meta.url),"/content/introduction.md":()=>C(()=>import("../chunks/introduction.acd138b0.js"),["../chunks/introduction.acd138b0.js","../chunks/scheduler.9a75ed56.js","../chunks/index.7ac402cb.js","../chunks/index.96f6542b.js","../chunks/singletons.01533805.js","../chunks/index.3a808bdd.js","../chunks/control.f5b05b5f.js","../chunks/layout.af29b115.js","../chunks/index.313e2785.js","../chunks/events.ac042ba1.js","../chunks/steps.a18f2f58.js","../chunks/h3.39d5449e.js"],import.meta.url),"/content/options.md":()=>C(()=>import("../chunks/options.023a58a6.js"),["../chunks/options.023a58a6.js","../chunks/scheduler.9a75ed56.js","../chunks/index.7ac402cb.js","../chunks/index.96f6542b.js","../chunks/singletons.01533805.js","../chunks/index.3a808bdd.js","../chunks/control.f5b05b5f.js","../chunks/layout.af29b115.js","../chunks/index.313e2785.js","../chunks/events.ac042ba1.js"],import.meta.url),"/content/quick-start.md":()=>C(()=>import("../chunks/quick-start.57c88b7d.js"),["../chunks/quick-start.57c88b7d.js","../chunks/scheduler.9a75ed56.js","../chunks/index.7ac402cb.js","../chunks/index.96f6542b.js","../chunks/singletons.01533805.js","../chunks/index.3a808bdd.js","../chunks/control.f5b05b5f.js","../chunks/layout.af29b115.js","../chunks/index.313e2785.js","../chunks/events.ac042ba1.js","../chunks/steps.a18f2f58.js","../chunks/h3.39d5449e.js"],import.meta.url)});let n={};for(const[a,t]of Object.entries(e))if(be(a)===l){n={path:a,resolver:t};break}const s=await((r=n==null?void 0:n.resolver)==null?void 0:r.call(n));if(!s||!s.metadata)throw oe(404);return{component:s.default,metadata:s.metadata,title:s.metadata.title}}function we(l){let e,n,s;const r=l[2].default,a=A(r,l,l[1],null);return{c(){e=v("section"),a&&a.c(),this.h()},l(t){e=w(t,"SECTION",{class:!0});var o=E(e);a&&a.l(o),o.forEach(u),this.h()},h(){g(e,"class",n=P("relative border-b border-border pb-8",l[0]))},m(t,o){$(t,e,o),a&&a.m(e,null),s=!0},p(t,[o]){a&&a.p&&(!s||o&2)&&N(a,r,t,t[1],s?H(r,t[1],o,null):z(t[1]),null),(!s||o&1&&n!==(n=P("relative border-b border-border pb-8",t[0])))&&g(e,"class",n)},i(t){s||(_(a,t),s=!0)},o(t){d(a,t),s=!1},d(t){t&&u(e),a&&a.d(t)}}}function Ee(l,e,n){let{$$slots:s={},$$scope:r}=e,{class:a=void 0}=e;return l.$$set=t=>{"class"in t&&n(0,a=t.class),"$$scope"in t&&n(1,r=t.$$scope)},[a,r,s]}class Pe extends S{constructor(e){super(),T(this,e,Ee,we,D,{class:0})}}function Oe(l){let e,n,s;const r=l[2].default,a=A(r,l,l[1],null);return{c(){e=v("h1"),a&&a.c(),this.h()},l(t){e=w(t,"H1",{class:!0});var o=E(e);a&&a.l(o),o.forEach(u),this.h()},h(){g(e,"class",n=P("scroll-m-20 text-4xl font-bold tracking-tight",l[0]))},m(t,o){$(t,e,o),a&&a.m(e,null),s=!0},p(t,[o]){a&&a.p&&(!s||o&2)&&N(a,r,t,t[1],s?H(r,t[1],o,null):z(t[1]),null),(!s||o&1&&n!==(n=P("scroll-m-20 text-4xl font-bold tracking-tight",t[0])))&&g(e,"class",n)},i(t){s||(_(a,t),s=!0)},o(t){d(a,t),s=!1},d(t){t&&u(e),a&&a.d(t)}}}function Ie(l,e,n){let{$$slots:s={},$$scope:r}=e,{class:a=void 0}=e;return l.$$set=t=>{"class"in t&&n(0,a=t.class),"$$scope"in t&&n(1,r=t.$$scope)},[a,r,s]}class ye extends S{constructor(e){super(),T(this,e,Ie,Oe,D,{class:0})}}function ke(l){let e,n,s;const r=l[2].default,a=A(r,l,l[1],null);return{c(){e=v("p"),a&&a.c(),this.h()},l(t){e=w(t,"P",{class:!0});var o=E(e);a&&a.l(o),o.forEach(u),this.h()},h(){g(e,"class",n=P("capitalize font-medium mb-4 text-sm/6 text-accent-foreground",l[0]))},m(t,o){$(t,e,o),a&&a.m(e,null),s=!0},p(t,[o]){a&&a.p&&(!s||o&2)&&N(a,r,t,t[1],s?H(r,t[1],o,null):z(t[1]),null),(!s||o&1&&n!==(n=P("capitalize font-medium mb-4 text-sm/6 text-accent-foreground",t[0])))&&g(e,"class",n)},i(t){s||(_(a,t),s=!0)},o(t){d(a,t),s=!1},d(t){t&&u(e),a&&a.d(t)}}}function De(l,e,n){let{$$slots:s={},$$scope:r}=e,{class:a=void 0}=e;return l.$$set=t=>{"class"in t&&n(0,a=t.class),"$$scope"in t&&n(1,r=t.$$scope)},[a,r,s]}class Se extends S{constructor(e){super(),T(this,e,De,ke,D,{class:0})}}function Te(l){let e,n,s,r;const a=l[7].default,t=A(a,l,l[6],null);let o=[{"data-br":l[3]},{"data-brr":l[1]},{style:"display: inline-block; vertical-align: top; text-decoration: inherit;"},l[5]],c={};for(let i=0;i<o.length;i+=1)c=F(c,o[i]);return{c(){e=v(l[0]),t&&t.c(),n=U(),s=new ue(!1),this.h()},l(i){e=w(i,(l[0]||"null").toUpperCase(),{"data-br":!0,"data-brr":!0,style:!0});var f=E(e);t&&t.l(f),n=B(f),s=me(f,!1),f.forEach(u),this.h()},h(){s.a=null,x(l[0])(e,c)},m(i,f){$(i,e,f),t&&t.m(e,null),q(e,n),s.m(l[4],e),l[8](e),r=!0},p(i,f){t&&t.p&&(!r||f&64)&&N(t,a,i,i[6],r?H(a,i[6],f,null):z(i[6]),null),x(i[0])(e,c=he(o,[{"data-br":i[3]},{"data-brr":i[1]},{style:"display: inline-block; vertical-align: top; text-decoration: inherit;"},f&32&&i[5]]))},i(i){r||(_(t,i),r=!0)},o(i){d(t,i),r=!1},d(i){i&&u(e),t&&t.d(i),l[8](null)}}}function Re(l){let e,n=l[0]&&Te(l);return{c(){n&&n.c()},l(s){n&&n.l(s)},m(s,r){n&&n.m(s,r),e=!0},p(s,[r]){s[0]&&n.p(s,r)},i(s){e||(_(n,s),e=!0)},o(s){d(n,s),e=!1},d(s){n&&n.d(s)}}}const M="__wrap_balancer";function Ae(l,e,n){const s=["as","ratio"];let r=Z(e,s),{$$slots:a={},$$scope:t}=e;const o="span",c=1;let i,f,m;const h=crypto.randomUUID();ie(()=>{if(!i)return;const p=i.parentElement;p&&(m=new ResizeObserver(()=>{i&&window[M](0,c,i)}),m.observe(p))}),ce(()=>{m&&f&&m.unobserve(f)});const b=(p,Q,R)=>{R=R||document.querySelector(`[data-br="${p}"]`);const W=R.parentElement,X=le=>R.style.maxWidth=le+"px";R.style.maxWidth="";const L=W.clientWidth,ae=W.clientHeight;let Y=L/2,V=L,j;if(L){for(;Y+1<V;)j=~~((Y+V)/2),X(j),W.clientHeight===ae?V=j:Y=j;X(V*Q+L*(1-Q))}},te=b.toString(),se=`<script> window.${M}=${te};window.${M}("${h}",${c}) <\/script>`;function ne(p){_e[p?"unshift":"push"](()=>{i=p,n(2,i)})}return l.$$set=p=>{e=F(F({},e),fe(p)),n(5,r=Z(e,s)),"$$scope"in p&&n(6,t=p.$$scope)},l.$$.update=()=>{l.$$.dirty&4&&i&&(window[M]=b)(0,c,i)},[o,c,i,h,se,r,t,a,ne]}class Ne extends S{constructor(e){super(),T(this,e,Ae,Re,D,{as:0,ratio:1})}get as(){return this.$$.ctx[0]}get ratio(){return this.$$.ctx[1]}}function ze(l){let e;const n=l[1].default,s=A(n,l,l[2],null);return{c(){s&&s.c()},l(r){s&&s.l(r)},m(r,a){s&&s.m(r,a),e=!0},p(r,a){s&&s.p&&(!e||a&4)&&N(s,n,r,r[2],e?H(n,r[2],a,null):z(r[2]),null)},i(r){e||(_(s,r),e=!0)},o(r){d(s,r),e=!1},d(r){s&&s.d(r)}}}function He(l){let e,n,s,r;return n=new Ne({props:{$$slots:{default:[ze]},$$scope:{ctx:l}}}),{c(){e=v("p"),O(n.$$.fragment),this.h()},l(a){e=w(a,"P",{class:!0});var t=E(e);k(n.$$.fragment,t),t.forEach(u),this.h()},h(){g(e,"class",s=P("text-lg text-muted-foreground mt-4",l[0]))},m(a,t){$(a,e,t),I(n,e,null),r=!0},p(a,[t]){const o={};t&4&&(o.$$scope={dirty:t,ctx:a}),n.$set(o),(!r||t&1&&s!==(s=P("text-lg text-muted-foreground mt-4",a[0])))&&g(e,"class",s)},i(a){r||(_(n.$$.fragment,a),r=!0)},o(a){d(n.$$.fragment,a),r=!1},d(a){a&&u(e),y(n)}}}function Le(l,e,n){let{$$slots:s={},$$scope:r}=e,{class:a=void 0}=e;return l.$$set=t=>{"class"in t&&n(0,a=t.class),"$$scope"in t&&n(2,r=t.$$scope)},[a,s,r]}class Ve extends S{constructor(e){super(),T(this,e,Le,He,D,{class:0})}}const je=async l=>{const{component:e,title:n,metadata:s}=await ve(l.params.slug);return{component:e,title:n,metadata:s}},Ze=Object.freeze(Object.defineProperty({__proto__:null,load:je},Symbol.toStringTag,{value:"Module"}));function Ce(l){let e;return{c(){e=G(l[0])},l(n){e=K(n,l[0])},m(n,s){$(n,e,s)},p(n,s){s&1&&J(e,n[0])},d(n){n&&u(e)}}}function Me(l){let e=l[1].title+"",n;return{c(){n=G(e)},l(s){n=K(s,e)},m(s,r){$(s,n,r)},p(s,r){r&2&&e!==(e=s[1].title+"")&&J(n,e)},d(s){s&&u(n)}}}function qe(l){let e=l[1].description+"",n;return{c(){n=G(e)},l(s){n=K(s,e)},m(s,r){$(s,n,r)},p(s,r){r&2&&e!==(e=s[1].description+"")&&J(n,e)},d(s){s&&u(n)}}}function Ue(l){let e,n,s,r,a,t;return e=new Se({props:{$$slots:{default:[Ce]},$$scope:{ctx:l}}}),s=new ye({props:{$$slots:{default:[Me]},$$scope:{ctx:l}}}),a=new Ve({props:{$$slots:{default:[qe]},$$scope:{ctx:l}}}),{c(){O(e.$$.fragment),n=U(),O(s.$$.fragment),r=U(),O(a.$$.fragment)},l(o){k(e.$$.fragment,o),n=B(o),k(s.$$.fragment,o),r=B(o),k(a.$$.fragment,o)},m(o,c){I(e,o,c),$(o,n,c),I(s,o,c),$(o,r,c),I(a,o,c),t=!0},p(o,c){const i={};c&33&&(i.$$scope={dirty:c,ctx:o}),e.$set(i);const f={};c&34&&(f.$$scope={dirty:c,ctx:o}),s.$set(f);const m={};c&34&&(m.$$scope={dirty:c,ctx:o}),a.$set(m)},i(o){t||(_(e.$$.fragment,o),_(s.$$.fragment,o),_(a.$$.fragment,o),t=!0)},o(o){d(e.$$.fragment,o),d(s.$$.fragment,o),d(a.$$.fragment,o),t=!1},d(o){o&&(u(n),u(r)),y(e,o),y(s,o),y(a,o)}}}function Be(l){let e,n,s,r,a,t,o;s=new Pe({props:{$$slots:{default:[Ue]},$$scope:{ctx:l}}});var c=l[2];function i(f,m){return{}}return c&&(t=ee(c,i())),{c(){e=v("main"),n=v("div"),O(s.$$.fragment),r=U(),a=v("div"),t&&O(t.$$.fragment),this.h()},l(f){e=w(f,"MAIN",{class:!0});var m=E(e);n=w(m,"DIV",{class:!0});var h=E(n);k(s.$$.fragment,h),r=B(h),a=w(h,"DIV",{class:!0});var b=E(a);t&&k(t.$$.fragment,b),b.forEach(u),h.forEach(u),m.forEach(u),this.h()},h(){g(a,"class","markdown pt-8"),g(n,"class","mx-auto w-full min-w-0"),g(e,"class","relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]")},m(f,m){$(f,e,m),q(e,n),I(s,n,null),q(n,r),q(n,a),t&&I(t,a,null),o=!0},p(f,[m]){const h={};if(m&35&&(h.$$scope={dirty:m,ctx:f}),s.$set(h),m&4&&c!==(c=f[2])){if(t){ge();const b=t;d(b.$$.fragment,1,0,()=>{y(b,1)}),pe()}c?(t=ee(c,i()),O(t.$$.fragment),_(t.$$.fragment,1),I(t,a,null)):t=null}},i(f){o||(_(s.$$.fragment,f),t&&_(t.$$.fragment,f),o=!0)},o(f){d(s.$$.fragment,f),t&&d(t.$$.fragment,f),o=!1},d(f){f&&u(e),y(s),t&&y(t)}}}function We(l,e,n){let s,r,a;de(l,$e,c=>n(4,a=c));let{data:t}=e,o;return l.$$set=c=>{"data"in c&&n(3,t=c.data)},l.$$.update=()=>{l.$$.dirty&8&&n(2,s=t.component),l.$$.dirty&8&&n(1,r=t.metadata),l.$$.dirty&16&&(a.url.pathname.split("/")[2]==="components"?n(0,o="Components"):n(0,o="Overview"))},[o,r,s,t,a]}class xe extends S{constructor(e){super(),T(this,e,We,Be,D,{data:3})}}export{xe as component,Ze as universal};
