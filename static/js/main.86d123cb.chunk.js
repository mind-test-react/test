(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],[,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(7),a=n.n(r),i=(n(2),n(4)),o=(n(12),n(13),n(5),n(6),n(0)),l=function(e){var t=e.handleMode;return Object(o.jsx)("header",{id:"header",children:Object(o.jsx)("button",{className:"logo head",onClick:t})})},d=function(){return Object(o.jsx)("footer",{id:"footer",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("span",{className:"highlight",children:"React Study "}),"\xa9 2021"]})})},u=function(){return Object(o.jsx)(o.Fragment,{children:"Start"})},h=function(){return Object(o.jsx)(o.Fragment,{children:"Qna"})},j=(n(15),function(e){var t=e.handleStage,n=c.a.useRef();return c.a.useEffect((function(){setTimeout((function(){n.current.style.display="block",n.current.style.animation="going-up 0.5s forwards, fade-in 0.5s forwards"}),700),setTimeout((function(){n.current.style.animation="",n.current.style.animation="going-left 0.4s forwards, fade-out 0.4s forwards",setTimeout((function(){n.current.style.display="none",t()}),400)}),9e3)}),[]),Object(o.jsxs)("section",{id:"calc",ref:n,children:[Object(o.jsxs)("div",{className:"calc-bar",children:[Object(o.jsx)("div",{className:"calc"}),"CALCULATING"]}),Object(o.jsx)("p",{className:"wait",children:"\uc7a0\uc2dc \uae30\ub2e4\ub824\uc8fc\uc138\uc694..."})]})}),b=(n(16),function(e){var t=e.props;return Object(o.jsxs)("div",{id:"score-box",children:[Object(o.jsxs)("div",{className:"title",children:[t.name," \ub2d8\uc740..."]}),Object(o.jsx)("div",{className:"point",children:t.score})]})}),f=function(e){var t=e.props;return Object(o.jsxs)("div",{id:"desc-box",children:[Object(o.jsx)("div",{className:"result title",children:t.result}),Object(o.jsx)("div",{className:"res desc",children:t.desc})]})},m=function(e){var t=e.props,n="https://mind-test-react.github.io/test/";return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("p",{children:"\uce5c\uad6c\ub4e4\uacfc \uacf5\uc720\ud558\uae30"}),Object(o.jsx)("div",{className:"hash"}),Object(o.jsxs)("div",{id:"share-box",children:[Object(o.jsx)("a",{onClick:function(){return window.open("https://twitter.com/intent/tweet?text=\ub098\uc758 \uc815\uc2e0\uc5f0\ub839\uc740... ".concat(t.score," ").concat(n),"twittersharedialog","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"),!1},target:"_blank",children:Object(o.jsx)("span",{className:"tw"})}),Object(o.jsx)("a",{onClick:function(){return window.open("https://www.facebook.com/sharer/sharer.php?u=".concat(n,"&t=\ub098\uc758 \uc815\uc2e0\uc5f0\ub839\ud14c\uc2a4\ud2b8"),"facebooksharedialog","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600"),!1},target:"_blank",children:Object(o.jsx)("span",{className:"fb"})}),Object(o.jsx)("a",{onClick:function(){return window.open("http://share.naver.com/web/shareView.nhn?url=".concat(n,"&title=\ub098\uc758 \uc815\uc2e0\uc5f0\ub839\ud14c\uc2a4\ud2b8"),"naversharedialog","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600"),!1},target:"_blank",children:Object(o.jsx)("span",{className:"nv"})}),Object(o.jsx)("a",{onClick:function(){return window.open("https://band.us/plugin/share?url=".concat(n,"&title=\ub098\uc758 \uc815\uc2e0\uc5f0\ub839\ud14c\uc2a4\ud2b8"),"naversharedialog","menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600"),!1},target:"_blank",children:Object(o.jsx)("span",{className:"band"})})]}),Object(o.jsx)("button",{onClick:function(){var e=document.createElement("textarea");document.body.appendChild(e),e.value=n,e.select(),document.execCommand("copy"),document.body.removeChild(e)},className:"btn",children:"\ub9c1\ud06c \ubcf5\uc0ac\ud558\uae30"})]})},p=function(e){var t=c.a.useRef();return c.a.useEffect((function(){setTimeout((function(){t.current.style.display="block",t.current.style.animation="going-up 0.5s, fade-in 0.5s forwards"}),600)}),[]),Object(o.jsxs)("section",{id:"result",className:"container",ref:t,children:[Object(o.jsx)(b,{props:e}),Object(o.jsx)(f,{props:e}),Object(o.jsx)("hr",{}),Object(o.jsx)(m,{props:e})]})},x=function(){var e=c.a.useState(2),t=Object(i.a)(e,2),n=t[0],s=t[1],r=function(){s(n+1),3===n&&k()},a=document.getElementById("header"),b=document.getElementById("footer"),f=c.a.useState(!1),m=Object(i.a)(f,2),x=m[0],O=m[1],g=document.getElementsByTagName("head")[0],w=document.createElement("link");w.rel="stylesheet",w.type="text/css",w.href="style/darkmode.css";var y=function(){O(!0),g.appendChild(w)},v=function(){O(!1),"stylesheet"===g.lastChild.rel&&g.removeChild(g.lastChild)};c.a.useEffect((function(){return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?y():v()}),[]);var k=function(){setTimeout((function(){a.current.style.display="block",b.current.style.display="block",a.current.style.animation="fade-in 0.3s forwards",b.current.style.animation="fade-in 0.3s forwards"}),600)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(l,{handleMode:function(){return x?v():y()},flag:x}),function(e){switch(e){case 0:return Object(o.jsx)(u,{});case 1:return Object(o.jsx)(h,{});case 2:return Object(o.jsx)(j,{handleStage:r});case 3:return Object(o.jsx)(p,{name:"rey",score:51});default:return Object(o.jsx)(o.Fragment,{children:"Something wrong..."})}}(n),Object(o.jsx)(d,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("wrap")),O()}],[[17,1,2]]]);
//# sourceMappingURL=main.86d123cb.chunk.js.map