(window.webpackJsonp=window.webpackJsonp||[]).push([[23,24],{100:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(90);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},79:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(85),l=n(82),c=n(22),i=n(90),s=n(2),u=n(6),m=n(83),p=n(103),d=n(105),h=n(106),y=n(107),f=n(104),b=n(84),g=n(95),v=n(61),k=n.n(v);var j=function e(t,n){return"link"===t.type?(a=t.href,r=n,(o=function(e){return e.endsWith("/")?e:e+"/"})(a)===o(r)):"category"===t.type&&t.items.some((function(t){return e(t,n)}));var a,r,o};function E(e){var t,n,o,l=e.item,c=e.onItemClick,i=e.collapsible,p=e.activePath,d=Object(u.a)(e,["item","onItemClick","collapsible","activePath"]),h=l.items,y=l.label,f=j(l,p),b=(n=f,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!i&&(!f&&l.collapsed)})),v=g[0],E=g[1];Object(a.useEffect)((function(){f&&!b&&v&&E(!1)}),[f,b,v]);var O=Object(a.useCallback)((function(e){e.preventDefault(),E((function(e){return!e}))}),[E]);return 0===h.length?null:r.a.createElement("li",{className:Object(m.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:y},r.a.createElement("a",Object(s.a)({className:Object(m.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&f},t[k.a.menuLinkText]=!i,t)),onClick:i?O:void 0,href:i?"#!":void 0},d),y),r.a.createElement("ul",{className:"menu__list"},h.map((function(e){return r.a.createElement(N,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:c,collapsible:i,activePath:p})}))))}function O(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,["item","onItemClick","activePath","collapsible"])),l=t.href,c=t.label,i=j(t,a);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(b.a,Object(s.a)({className:Object(m.a)("menu__link",{"menu__link--active":i}),to:l},Object(g.a)(l)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function N(e){switch(e.item.type){case"category":return r.a.createElement(E,e);case"link":default:return r.a.createElement(O,e)}}var C=function(e){var t,n,o=e.path,c=e.sidebar,i=e.sidebarCollapsible,u=void 0===i||i,g=Object(a.useState)(!1),v=g[0],j=g[1],E=Object(l.a)(),O=E.siteConfig,C=(O=void 0===O?{}:O).themeConfig,x=(C=void 0===C?{}:C).navbar,_=(x=void 0===x?{}:x).title,w=void 0===_?"":_,P=x.hideOnScroll,L=void 0!==P&&P,T=E.isClient,S=Object(y.a)(),I=S.logoLink,B=S.logoLinkProps,M=S.logoImageUrl,D=S.logoAlt,A=Object(p.a)().isAnnouncementBarClosed,R=Object(f.a)().scrollY;Object(d.a)(v);var W=Object(h.a)();return Object(a.useEffect)((function(){W===h.b.desktop&&j(!1)}),[W]),r.a.createElement("div",{className:Object(m.a)(k.a.sidebar,(t={},t[k.a.sidebarWithHideableNavbar]=L,t))},L&&r.a.createElement(b.a,Object(s.a)({tabIndex:-1,className:k.a.sidebarLogo,to:I},B),null!=M&&r.a.createElement("img",{key:T,src:M,alt:D}),null!=w&&r.a.createElement("strong",null,w)),r.a.createElement("div",{className:Object(m.a)("menu","menu--responsive",k.a.menu,(n={"menu--show":v},n[k.a.menuWithAnnouncementBar]=!A&&0===R,n))},r.a.createElement("button",{"aria-label":v?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){j(!v)}},v?r.a.createElement("span",{className:Object(m.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:k.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},c.map((function(e){return r.a.createElement(N,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),j(!1)},collapsible:u,activePath:o})})))))},x=n(92),_=n(100),w=n(96),P=n(93),L=n(62),T=n.n(L);function S(e){var t=e.version,n=e.isLast?[t,"latest"]:[t];return r.a.createElement(P.a,null,r.a.createElement("meta",{name:"docsearch:version",content:n.join(",")}))}function I(e){var t,n,a=e.currentDocRoute,c=e.versionMetadata,s=e.children,u=Object(l.a)(),m=u.siteConfig,p=u.isClient,d=c.permalinkToSidebar,h=c.docsSidebars,y=c.version,f=c.isLast,b=d[a.path],g=h[b];return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,{version:y,isLast:f}),r.a.createElement(i.a,{key:p},r.a.createElement("div",{className:T.a.docPage},g&&r.a.createElement("div",{className:T.a.docSidebarContainer,role:"complementary"},r.a.createElement(C,{key:b,sidebar:g,path:a.path,sidebarCollapsible:null===(t=null===(n=m.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:T.a.docMainContainer},r.a.createElement(o.a,{components:x.a},s)))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(w.matchPath)(a.pathname,e)}));return o?r.a.createElement(I,{currentDocRoute:o,versionMetadata:n},Object(c.a)(t)):r.a.createElement(_.default,e)}},87:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),l};e.exports=a,e.exports.default=a},88:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],l=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=l);for(var c=n;c!=r;c+=l)o.push(c);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},89:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),l=n(83),c={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:n(20).a,theme:c};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},h=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=u({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=u({},n,{backgroundColor:null}),r};function y(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var f=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),s(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?h(e.theme,e.language):void 0;return t.themeDict=n})),s(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=u({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),s(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),s(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=u({},y(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=a[l]++)<r[l];){var s=void 0,u=t[l],h=n[l][o];if("string"==typeof h?(u=l>0?u:["plain"],s=h):(u=d(u,h.type),h.alias&&(u=d(u,h.alias)),s=h.content),"string"==typeof s){var y=s.split(m),f=y.length;c.push({types:u,content:y[0]});for(var b=1;b<f;b++)p(c),i.push(c=[]),c.push({types:u,content:y[b]})}else l++,t.push(u),n.push(s),a.push(0),r.push(s.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return p(c),i}(void 0!==l?t.tokenize(a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),b=n(87),g=n.n(b),v=n(88),k=n.n(v),j=n(82),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},O=n(91),N=function(){var e=Object(j.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,n=Object(O.a)().isDarkTheme,a=t.theme||E,r=t.darkTheme||a;return n?r:a},C=n(47),x=n.n(C),_=/{([\d,-]+)}/,w=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},P=/title=".*"/;t.a=function(e){var t=e.children,n=e.className,c=e.metastring,s=Object(j.a)().siteConfig.themeConfig.prism,u=void 0===s?{}:s,m=Object(r.useState)(!1),p=m[0],d=m[1],h=Object(r.useState)(!1),y=h[0],b=h[1];Object(r.useEffect)((function(){b(!0)}),[]);var v=Object(r.useRef)(null),E=[],O="",C=N();if(c&&_.test(c)){var L=c.match(_)[1];E=k.a.parse(L).filter((function(e){return e>0}))}c&&P.test(c)&&(O=c.match(P)[0].split("title=")[1].replace(/"+/g,""));var T=n&&n.replace(/language-/,"");!T&&u.defaultLanguage&&(T=u.defaultLanguage);var S=t.replace(/\n$/,"");if(0===E.length&&void 0!==T){for(var I,B="",M=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}}(T),D=t.replace(/\n$/,"").split("\n"),A=0;A<D.length;){var R=A+1,W=D[A].match(M);if(null!==W){switch(W.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":B+=R+",";break;case"highlight-start":I=R;break;case"highlight-end":B+=I+"-"+(R-1)+","}D.splice(A,1)}else A+=1}E=k.a.parse(B),S=D.join("\n")}var F=function(){g()(S),d(!0),setTimeout((function(){return d(!1)}),2e3)};return o.a.createElement(f,Object(a.a)({},i,{key:String(y),theme:C,code:S,language:T}),(function(e){var t,n,r=e.className,c=e.style,i=e.tokens,s=e.getLineProps,u=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,O&&o.a.createElement("div",{style:c,className:x.a.codeBlockTitle},O),o.a.createElement("div",{className:x.a.codeBlockContent},o.a.createElement("button",{ref:v,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(x.a.copyButton,(t={},t[x.a.copyButtonWithTitle]=O,t)),onClick:F},p?"Copied":"Copy"),o.a.createElement("div",{tabIndex:0,className:Object(l.a)(r,x.a.codeBlock,(n={},n[x.a.codeBlockWithTitle]=O,n))},o.a.createElement("div",{className:x.a.codeBlockLines,style:c},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return E.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},u({token:e,key:t})))})))}))))))}))}},92:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),l=n(84),c=n(89),i=n(6),s=n(83),u=n(82),m=(n(48),n(49)),p=n.n(m),d=function(e){return function(t){var n,a=t.id,r=Object(i.a)(t,["id"]),l=Object(u.a)().siteConfig,c=(l=void 0===l?{}:l).themeConfig,m=(c=void 0===c?{}:c).navbar,d=(m=void 0===m?{}:m).hideOnScroll,h=void 0!==d&&d;return a?o.a.createElement(e,r,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",(n={},n[p.a.enhancedAnchor]=!h,n)),id:a}),r.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):o.a.createElement(e,r)}},h=n(50),y=n.n(h),f={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(c.a,e):o.a.createElement("code",e):t},a:function(e){return o.a.createElement(l.a,e)},pre:function(e){return o.a.createElement("div",Object(a.a)({className:y.a.mdxCodeBlock},e))},h1:d("h1"),h2:d("h2"),h3:d("h3"),h4:d("h4"),h5:d("h5"),h6:d("h6")};t.a=f}}]);