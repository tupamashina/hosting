(this.webpackJsonphosting=this.webpackJsonphosting||[]).push([[6],{214:function(n,e,t){"use strict";t.d(e,"a",(function(){return O}));var r=t(1),i=t(2),c=t(215),o=t.n(c),a=t(3),u=t(4);function s(){var n=Object(a.a)(["\n  position: relative;\n  height: 260px;\n  background-repeat: no-repeat;\n"]);return s=function(){return n},n}function d(){var n=Object(a.a)(["\n  position: absolute;\n  top: 50%;\n  left: calc((100% - 1200px) / 2);\n  color: white;\n  white-space: nowrap;\n  text-transform: uppercase;\n  transform: translateY(-50%);\n\n  @media (max-width: 1250px) {\n    left: calc((100% - 1160px) / 2);\n  }\n  @media (max-width: 1200px) {\n    left: 20px;\n  }\n  @media (max-width: 1000px) {\n    left: 50%;\n    transform: translateX(-50%) translateY(-50%);\n  }\n  @media (max-width: 600px) {\n    "," {\n      font-size: 3.5rem;\n    }\n    "," {\n      font-size: 1.5rem;\n    }\n  }\n"]);return d=function(){return n},n}function l(){var n=Object(a.a)(["\n  font-weight: 300;\n  font-size: 2rem;\n  letter-spacing: 0.1em;\n"]);return l=function(){return n},n}function b(){var n=Object(a.a)(["\n  font-weight: 800;\n  font-size: 4rem;\n  letter-spacing: 0.025em;\n"]);return b=function(){return n},n}var j=u.d.div(b()),p=u.d.div(l()),f=u.d.h2(d(),j,p),m=Object(u.d)((function(n){var e=n.className,t=n.rowOne,i=n.rowTwo,c=n.bg,o=n.bgPosition;return Object(r.jsx)("div",{className:e,style:{backgroundImage:"url(".concat(c,")"),backgroundPosition:o},children:Object(r.jsxs)(f,{children:[Object(r.jsx)(j,{children:t}),Object(r.jsx)(p,{children:i})]})})}))(s()),h=t(17),x=function(n,e){return Object(h.b)("mainContentSectionPromo/".concat(n,"_").concat(e),"jpg")},O=function(n){var e=n.sectionName,t=n.titleRowOne,c=n.titleRowTwo,a=n.bgPosition,u=Object(i.useMemo)((function(){return{"540x960":x(e,"540x960"),"720x1280":x(e,"720x1280"),"1280x720":x(e,"1280x720"),"1600x900":x(e,"1600x900"),"2048x1152":x(e,"2048x1152")}}),[e]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{minDeviceWidth:1600.1,children:Object(r.jsx)(m,{rowOne:t,rowTwo:c,bg:u["2048x1152"],bgPosition:a})}),Object(r.jsx)(o.a,{minDeviceWidth:1250.1,maxDeviceWidth:1600,children:Object(r.jsx)(m,{rowOne:t,rowTwo:c,bg:u["1600x900"],bgPosition:a})}),Object(r.jsx)(o.a,{minDeviceWidth:700.1,maxDeviceWidth:1250,children:Object(r.jsx)(m,{rowOne:t,rowTwo:c,bg:u["1280x720"],bgPosition:a})}),Object(r.jsx)(o.a,{minDeviceWidth:500.1,maxDeviceWidth:700,children:Object(r.jsx)(m,{rowOne:t,rowTwo:c,bg:u["720x1280"],bgPosition:a})}),Object(r.jsx)(o.a,{maxDeviceWidth:500,children:Object(r.jsx)(m,{rowOne:t,rowTwo:c,bg:u["540x960"],bgPosition:a})})]})}},216:function(n,e,t){"use strict";t.d(e,"c",(function(){return x})),t.d(e,"a",(function(){return h})),t.d(e,"b",(function(){return m}));var r=t(29),i=t(21),c=t(3),o=t(1),a=t(2),u=t(4);function s(){var n=Object(c.a)(["\n  position: relative;\n  color: var(--text-color);\n  font-size: 1.4rem;\n  letter-spacing: 0.01em;\n"]);return s=function(){return n},n}function d(){var n=Object(c.a)(["\n  width: 100%;\n  height: 100%;\n  padding: 20px;\n  border: solid 1px var(--border-color);\n  resize: none;\n"]);return d=function(){return n},n}function l(){var n=Object(c.a)(["\n  position: absolute;\n  top: 21px;\n  left: 20px;\n  cursor: text;\n  transition: 0.2s;\n  ","\n  ","\n"]);return l=function(){return n},n}function b(){var n=Object(c.a)(["\n  &:after {\n    color: var(--accent-color);\n    font-size: 1.6rem;\n    content: '*';\n  }\n"]);return b=function(){return n},n}function j(){var n=Object(c.a)(["\n  visibility: hidden;\n  opacity: 0;\n"]);return j=function(){return n},n}var p=Object(u.c)(j()),f=Object(u.c)(b()),m=u.d.label(l(),(function(n){return n.isHidden?p:""}),(function(n){return n.isRequired?f:""})),h=u.d.div(d()),x=Object(u.d)((function(n){var e=n.className,t=n.inputAs,c=n.type,u=n.name,s=n.placeholder,d=n.isRequired,l=Object(a.useState)(!1),b=Object(i.a)(l,2),j=b[0],p=b[1],f=Object(a.useCallback)((function(n){0===n.target.value.length&&p((function(n){return!n}))}),[]),x=Object(a.useState)(""),O=Object(i.a)(x,2),v=O[0],g=O[1],w=Object(a.useCallback)((function(n){return g(n.target.value)}),[]),y=Object(a.useMemo)((function(){return{name:u,required:d,onChange:w,onFocus:f,onBlur:f}}),[u,d,w,f]),A=Object(a.useRef)();return Object(o.jsxs)("div",{className:e,children:["input"===t&&Object(o.jsx)(h,Object(r.a)({as:t,ref:A,type:c,value:v},y)),"textarea"===t&&Object(o.jsx)(h,Object(r.a)({as:t,ref:A,value:v},y)),Object(o.jsx)(m,{isHidden:j,isRequired:d,onClick:function(){var n;return null===(n=A.current)||void 0===n?void 0:n.focus()},children:s})]})}))(s())},217:function(n,e,t){"use strict";t.d(e,"b",(function(){return I})),t.d(e,"d",(function(){return x})),t.d(e,"c",(function(){return A})),t.d(e,"a",(function(){return y}));var r=t(21),i=t(3),c=t(1),o=t(2),a=t.n(o),u=t(4),s=t(18),d=t.n(s);function l(){var n=Object(i.a)(["\n  display: flex;\n  height: 100%;\n  transition: transform 1s ease;\n"]);return l=function(){return n},n}function b(){var n=Object(i.a)(["\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n"]);return b=function(){return n},n}var j=u.d.div(b());var p=Object(u.d)((function(n){var e=n.currentSlide,t=n.children,r=n.className,i=Object(o.useMemo)((function(){return function(n){return a.a.Children.toArray(n).map((function(n){return{content:n,itemKey:d.a.generate()}}))}(t)}),[t]);return Object(c.jsx)("div",{className:r,style:{transform:"translateX(-".concat(100*e,"%)")},children:i.map((function(n){var e=n.content,t=n.itemKey;return Object(c.jsx)(j,{children:e},t)}))})}))(l());function f(){var n=Object(i.a)(["\n  display: flex;\n  column-gap: 5px;\n"]);return f=function(){return n},n}function m(){var n=Object(i.a)(["\n  width: 15px;\n  height: 15px;\n  font-size: 0;\n  background: none;\n  border: 2px solid;\n  border-color: ",";\n  border-radius: 50%;\n  transition: all 0.3s ease;\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"]);return m=function(){return n},n}var h=u.d.button(m(),(function(n){var e=n.active,t=n.theme;return e?t.activeDotColor:t.dotColor}),(function(n){var e=n.active,t=n.theme;return e?t.activeDotColor:t.dotColor}));var x=Object(u.d)((function(n){var e=n.currentSlide,t=n.count,r=n.handleDotClick,i=n.className,a=Object(o.useMemo)((function(){return function(n,e){for(var t=[],r=function(n){t.push({slideNum:n,handleClick:function(){return e(n)},dotKey:d.a.generate()})},i=0;i<n;i+=1)r(i);return t}(t,r)}),[t,r]);return Object(c.jsx)("ul",{className:i,children:a.map((function(n){var t=n.slideNum,r=n.handleClick,i=n.dotKey;return Object(c.jsx)("li",{style:{display:"contents"},children:Object(c.jsx)(h,{type:"button",onClick:r,active:e===t,children:"Show slide number ".concat(t+1)})},i)}))})}))(f()),O=t(0),v=t(218);function g(){var n=Object(i.a)([""]);return g=function(){return n},n}function w(){var n=Object(i.a)(["\n  color: white;\n"]);return w=function(){return n},n}var y=u.d.button.attrs({type:"button"})(w()),A=Object(u.d)((function(n){var e=n.className,t=n.handleClickOnLeft,r=n.handleClickOnRight;return Object(c.jsx)("div",{className:e,children:Object(c.jsxs)(O.b.Provider,{value:{size:"100%"},children:[Object(c.jsx)(y,{onClick:t,"aria-label":"Previous",children:Object(c.jsx)(v.a,{})}),Object(c.jsx)(y,{onClick:r,"aria-label":"Next",children:Object(c.jsx)(v.b,{})})]})})}))(g());function k(){var n=Object(i.a)(["\n  user-select: none;\n  touch-action: pan-y;\n"]);return k=function(){return n},n}function C(){var n=Object(i.a)(["\n  height: 100%;\n  overflow: hidden;\n"]);return C=function(){return n},n}var N=u.d.div(C());function D(n,e,t){return"right"===n?t===e-1?0:t+1:0===t?e-1:t-1}var I=Object(u.d)((function(n){var e=n.children,t=n.className,i=n.navArrows,u=Object(o.useState)(0),s=Object(r.a)(u,2),d=s[0],l=s[1],b=a.a.Children.count(e),j=Object(o.useCallback)((function(n){return D("right",b,n)}),[b]),f=Object(o.useCallback)((function(n){return D("left",b,n)}),[b]),m=Object(o.useState)(!1),h=Object(r.a)(m,2),O=h[0],v=h[1];return Object(o.useEffect)((function(){if(!O){var n=setTimeout((function(){return l(j)}),5e3);return function(){return clearTimeout(n)}}})),Object(c.jsxs)("div",{className:t,onPointerEnter:function(){return v(!0)},onPointerLeave:function(){return v(!1)},children:[Object(c.jsx)(N,{children:Object(c.jsx)(p,{currentSlide:d,children:e})}),i&&Object(c.jsx)(A,{handleClickOnLeft:function(){return l(f)},handleClickOnRight:function(){return l(j)}}),Object(c.jsx)(x,{currentSlide:d,count:b,handleDotClick:l})]})}))(k())},222:function(n,e,t){"use strict";t.d(e,"a",(function(){return D}));var r=t(3),i=t(1),c=(t(2),t(4)),o=t(13),a=t(27),u=t(217),s=t(30);function d(){var n=Object(r.a)(["\n  display: flex;\n  gap: 30px;\n  align-items: center;\n\n  @media (max-width: 1000px) {\n    flex-direction: column;\n    ",",\n    "," {\n      text-align: center;\n    }\n    "," {\n      margin-top: 32px;\n    }\n  }\n"]);return d=function(){return n},n}function l(){var n=Object(r.a)(["\n  margin-top: 20px;\n  color: var(--text-color-primary);\n  font-weight: 800;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  &:before {\n    display: block;\n    font-weight: 400;\n    content: 'By';\n  }\n"]);return l=function(){return n},n}function b(){var n=Object(r.a)(["\n  color: var(--text-color);\n  font-style: italic;\n  line-height: 24px;\n  letter-spacing: 0.01em;\n"]);return b=function(){return n},n}function j(){var n=Object(r.a)(["\n  font-size: 1.4rem;\n"]);return j=function(){return n},n}function p(){var n=Object(r.a)(["\n  width: 200px;\n  height: 200px;\n  border-radius: 50%;\n"]);return p=function(){return n},n}var f=Object(c.d)(s.a)(p()),m=c.d.div(j()),h=c.d.p(b()),x=c.d.div(l());var O=Object(c.d)((function(n){var e,t=n.className,r=n.children,c=n.photos,o=n.name,a=(e=r).length>380?"".concat(e.slice(0,378),"..."):e;return Object(i.jsxs)("div",{className:t,children:[Object(i.jsx)(f,{image:c.jpg,imageWebp:c.webp,alt:o}),Object(i.jsxs)(m,{children:[Object(i.jsx)(h,{children:a}),Object(i.jsx)(x,{children:o})]})]})}))(d(),h,x,f),v=t(17);function g(){var n=Object(r.a)(["\n  position: relative;\n\n  "," {\n    position: absolute;\n    top: -8px;\n    right: 0;\n\n    @media (max-width: 1000px) {\n      right: 50%;\n      transform: translateX(50%);\n    }\n  }\n"]);return g=function(){return n},n}function w(){var n=Object(r.a)(["\n  margin-bottom: 30px;\n\n  @media (max-width: 1000px) {\n    align-self: center;\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(r.a)(["\n  padding-top: 120px;\n  padding-bottom: 130px;\n\n  @media (max-width: 1000px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]);return y=function(){return n},n}var A=Object(c.d)(o.a)(y()),k=Object(c.d)(a.a)(w()),C={dotColor:"#ccdee3",activeDotColor:"var(--accent-color-active)"},N=function(n){return Object(v.a)("happyClientsSlider/".concat(n),["jpg","webp"],"object")},D=Object(c.d)((function(n){var e=n.className;return Object(i.jsx)(c.a,{theme:C,children:Object(i.jsx)("section",{children:Object(i.jsxs)(A,{children:[Object(i.jsx)(k,{rowOne:"Happy",rowTwo:"Clients"}),Object(i.jsxs)(u.b,{className:e,children:[Object(i.jsx)(O,{photos:N("user1"),name:"Misha Merinov",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make. a type specimen book. It has survived not only five centuries. but also the leap into electronic typesetting, remaining essentially unchanged."}),Object(i.jsx)(O,{photos:N("user2"),name:"Grisha Gremlinov",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make. a type specimen book. It has survived not only five centuries. but also the leap into electronic typesetting, remaining essentially unchanged."}),Object(i.jsx)(O,{photos:N("user3"),name:"Taras Aueshkin",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make. a type specimen book. It has survived not only five centuries. but also the leap into electronic typesetting, remaining essentially unchanged."}),Object(i.jsx)(O,{photos:N("user4"),name:"Valentin Pidorkin",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make. a type specimen book. It has survived not only five centuries. but also the leap into electronic typesetting, remaining essentially unchanged."})]})]})})})}))(g(),u.d)},233:function(n,e,t){"use strict";t.r(e);var r=t(1),i=(t(2),t(214)),c=t(3),o=t(4),a=t(13),u=t(27),s=t(28),d=[".ask",".nk",".man",".bac",".wiki",".com",".info",".org",".lib",".net",".shop",".en"];function l(){var n=Object(c.a)(["\n  padding-top: 110px;\n  padding-bottom: 110px;\n  background-color: var(--blue);\n\n  @media (max-width: 1000px) {\n    "," {\n      justify-self: center;\n    }\n  }\n  @media (max-width: 900px) {\n    "," {\n      grid-template-columns: 1fr;\n    }\n    "," {\n      &:nth-child(n + 3) {\n        padding-top: 6px;\n        border-top: 1px solid var(--border-color);\n      }\n    }\n  }\n"]);return l=function(){return n},n}function b(){var n=Object(c.a)(["\n  width: 95px;\n  height: 35px;\n  text-transform: none;\n"]);return b=function(){return n},n}function j(){var n=Object(c.a)(["\n  color: var(--text-color);\n"]);return j=function(){return n},n}function p(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 0;\n  font-size: 1.4rem;\n  border-top: 0;\n  &:nth-child(n + 4) {\n    padding-top: 6px;\n    border-top: 1px solid var(--border-color);\n  }\n"]);return p=function(){return n},n}function f(){var n=Object(c.a)(["\n  margin-bottom: 30px;\n"]);return f=function(){return n},n}function m(){var n=Object(c.a)(["\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  column-gap: 30px;\n  row-gap: 6px;\n"]);return m=function(){return n},n}var h=Object(o.d)(a.a)(m()),x=Object(o.d)(u.a)(f()),O=o.d.div(p()),v=o.d.p(j()),g=Object(o.d)(s.a)(b()),w=Object(o.d)((function(n){var e=n.className;return Object(r.jsx)("section",{className:e,children:Object(r.jsxs)(h,{children:[Object(r.jsx)(x,{rowOne:"New",rowTwo:"Domains"}),d.map((function(n,e){return Object(r.jsxs)(O,{children:[Object(r.jsx)(v,{children:n}),Object(r.jsx)(g,{children:"Register"})]},e)}))]})})}))(l(),x,h,O),y=t(222),A=t(216);function k(){var n=Object(c.a)(["\n  padding-top: 80px;\n  padding-bottom: 100px;\n\n  @media (max-width: 900px) {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n\n    "," {\n      display: contents;\n    }\n    "," {\n      margin-top: 15px;\n    }\n  }\n"]);return k=function(){return n},n}function C(){var n=Object(c.a)(["\n  min-width: 175px;\n  height: 60px;\n  font-weight: 700;\n  letter-spacing: 0.1em;\n"]);return C=function(){return n},n}function N(){var n=Object(c.a)(["\n  min-width: 175px;\n  height: 60px;\n  padding-left: 20px;\n  color: #8d9198;\n  background: url(",") no-repeat right 15px center;\n  background-color: white;\n  border: 1px solid var(--border-color);\n  appearance: none;\n"]);return N=function(){return n},n}function D(){var n=Object(c.a)(["\n  width: 100%;\n"]);return D=function(){return n},n}function I(){var n=Object(c.a)(["\n  display: flex;\n  gap: 20px;\n  width: 100%;\n  margin-top: 35px;\n  font-size: 1.4rem;\n"]);return I=function(){return n},n}var R=o.d.form.attrs({name:"register-domain",action:"",method:"post"})(I()),J=Object(o.d)(A.c)(D()),T=o.d.select(N(),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGBAMAAAAI3hL1AAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAnUExURVJebVJebVJebVJebVJebVJebVJebVJebVJebVJebVJebVJebf///wOujCYAAAALdFJOUwBYjAG8BeIR/Cssgs+YmgAAAAFiS0dEDIGzUWMAAAAHdElNRQfkBxwOAC9IoddQAAAAKklEQVQI12OQ3r1790YGJiCpwMDsvXuLAQND2O5UBgYG9o4CIMkwi4EBAOf/Ck0By8fHAAAAAElFTkSuQmCC"),P=Object(o.d)(s.a).attrs({type:"submit"})(C()),V=Object(o.d)(a.a)(k(),R,J),L=function(){return Object(r.jsx)("section",{children:Object(r.jsxs)(V,{children:[Object(r.jsx)(u.a,{rowOne:"Register",rowTwo:"Domain"}),Object(r.jsxs)(R,{children:[Object(r.jsx)(J,{inputAs:"input",type:"text",name:"name",placeholder:"Domain name"}),Object(r.jsxs)(T,{name:"domain",children:[Object(r.jsx)("option",{value:"com",children:".com"}),Object(r.jsx)("option",{value:"net",children:".net"}),Object(r.jsx)("option",{value:"wiki",children:".wiki"}),Object(r.jsx)("option",{value:"org",children:".org"})]}),Object(r.jsx)(P,{children:"Register"})]})]})})};e.default=function(){return Object(r.jsxs)("section",{children:[Object(r.jsx)(i.a,{sectionName:"domain",titleRowOne:"Domain",titleRowTwo:"Registration",bgPosition:"center 80%"}),Object(r.jsx)(L,{}),Object(r.jsx)(w,{}),Object(r.jsx)(y.a,{})]})}}}]);
//# sourceMappingURL=6.67174d47.chunk.js.map