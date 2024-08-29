"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[263],{1972:function(){},7912:function(e,t,r){var n,l,i=r(7653);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let o=["children","options"],c={blockQuote:"0",breakLine:"1",breakThematic:"2",codeBlock:"3",codeFenced:"4",codeInline:"5",footnote:"6",footnoteReference:"7",gfmTask:"8",heading:"9",headingSetext:"10",htmlBlock:"11",htmlComment:"12",htmlSelfClosing:"13",image:"14",link:"15",linkAngleBraceStyleDetector:"16",linkBareUrlDetector:"17",linkMailtoDetector:"18",newlineCoalescer:"19",orderedList:"20",paragraph:"21",ref:"22",refImage:"23",refLink:"24",table:"25",tableSeparator:"26",text:"27",textBolded:"28",textEmphasized:"29",textEscaped:"30",textMarked:"31",textStrikethroughed:"32",unorderedList:"33"};(n=l||(l={}))[n.MAX=0]="MAX",n[n.HIGH=1]="HIGH",n[n.MED=2]="MED",n[n.LOW=3]="LOW",n[n.MIN=4]="MIN";let s=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce((e,t)=>(e[t.toLowerCase()]=t,e),{for:"htmlFor"}),u={amp:"&",apos:"'",gt:">",lt:"<",nbsp:"\xa0",quot:"“"},d=["style","script"],p=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,f=/mailto:/i,h=/\n{2,}$/,m=/^(\s*>[\s\S]*?)(?=\n{2,})/,g=/^ *> ?/gm,y=/^ {2,}\n/,k=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,x=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,b=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,v=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,S=/^(?:\n *)*\n/,E=/\r\n?/g,w=/^\[\^([^\]]+)](:(.*)((\n+ {4,}.*)|(\n(?!\[\^).+))*)/,$=/^\[\^([^\]]+)]/,C=/\f/g,z=/^---[ \t]*\n(.|\n)*\n---[ \t]*\n/,O=/^\s*?\[(x|\s)\]/,T=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,L=/^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,A=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,R=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?((?:[^>]*[^/])?)>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1\b)[\s\S])*?)<\/\1>(?!<\/\1>)\n*/i,M=/&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,I=/^<!--[\s\S]*?(?:-->)/,j=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,B=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,D=/^\{.*\}$/,U=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,N=/^<([^ >]+@[^ >]+)>/,_=/^<([^ >]+:\/[^ >]+)>/,P=/-([a-z])?/gi,F=/^(.*\|.*)\n(?: *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*))?\n?/,W=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,H=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,V=/^\[([^\]]*)\] ?\[([^\]]*)\]/,Z=/(\[|\])/g,q=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,G=/\t/g,Q=/(^ *\||\| *$)/g,X=/^ *:-+: *$/,J=/^ *:-+ *$/,K=/^ *-+: *$/,Y="((?:\\[.*?\\][([].*?[)\\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~~.*?~~|==.*?==|.|\\n)*?)",ee=RegExp(`^([*_])\\1${Y}\\1\\1(?!\\1)`),et=RegExp(`^([*_])${Y}\\1(?!\\1|\\w)`),er=RegExp(`^==${Y}==`),en=RegExp(`^~~${Y}~~`),el=/^\\([^0-9A-Za-z\s])/,ei=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,ea=/^\n+/,eo=/^([ \t]*)/,ec=/\\([^\\])/g,es=/ *\n+$/,eu=/(?:^|\n)( *)$/,ed="(?:\\d+\\.)",ep="(?:[*+-])";function ef(e){return"( *)("+(1===e?ed:ep)+") +"}let eh=ef(1),em=ef(2);function eg(e){return RegExp("^"+(1===e?eh:em))}let ey=eg(1),ek=eg(2);function ex(e){return RegExp("^"+(1===e?eh:em)+"[^\\n]*(?:\\n(?!\\1"+(1===e?ed:ep)+" )[^\\n]*)*(\\n|$)","gm")}let eb=ex(1),ev=ex(2);function eS(e){let t=1===e?ed:ep;return RegExp("^( *)("+t+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+t+" (?!"+t+" ))\\n*|\\s*\\n*$)")}let eE=eS(1),ew=eS(2);function e$(e,t){let r=1===t,n=r?eE:ew,l=r?eb:ev,i=r?ey:ek;return{match(e,t,r){let l=eu.exec(r);return l&&(t.list||!t.inline&&!t.simple)?n.exec(e=l[1]+e):null},order:1,parse(e,t,n){let a=r?+e[2]:void 0,o=e[0].replace(h,"\n").match(l),c=!1;return{items:o.map(function(e,r){let l;let a=RegExp("^ {1,"+i.exec(e)[0].length+"}","gm"),s=e.replace(a,"").replace(i,""),u=r===o.length-1,d=-1!==s.indexOf("\n\n")||u&&c;c=d;let p=n.inline,f=n.list;n.list=!0,d?(n.inline=!1,l=s.replace(es,"\n\n")):(n.inline=!0,l=s.replace(es,""));let h=t(l,n);return n.inline=p,n.list=f,h}),ordered:r,start:a}},render:(t,r,n)=>e(t.ordered?"ol":"ul",{key:n.key,start:t.type===c.orderedList?t.start:void 0},t.items.map(function(t,l){return e("li",{key:l},r(t,n))}))}}let eC=RegExp("^\\[((?:\\[[^\\]]*\\]|[^\\[\\]]|\\](?=[^\\[]*\\]))*)\\]\\(\\s*<?((?:\\([^)]*\\)|[^\\s\\\\]|\\\\.)*?)>?(?:\\s+['\"]([\\s\\S]*?)['\"])?\\s*\\)"),ez=/^!\[(.*?)\]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,eO=[m,x,b,T,A,L,I,F,eb,eE,ev,ew],eT=[...eO,/^[^\n]+(?:  \n|\n{2,})/,R,B];function eL(e){return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function eA(e){return K.test(e)?"right":X.test(e)?"center":J.test(e)?"left":null}function eR(e,t,r,n){let l=r.inTable;r.inTable=!0;let i=e.trim().split(/( *(?:`[^`]*`|<.*?>.*?<\/.*?>(?!<\/.*?>)|\\\||\|) *)/).reduce((e,l)=>("|"===l.trim()?e.push(n?{type:c.tableSeparator}:{type:c.text,text:l}):""!==l&&e.push.apply(e,t(l,r)),e),[]);r.inTable=l;let a=[[]];return i.forEach(function(e,t){e.type===c.tableSeparator?0!==t&&t!==i.length-1&&a.push([]):(e.type!==c.text||null!=i[t+1]&&i[t+1].type!==c.tableSeparator||(e.text=e.text.trimEnd()),a[a.length-1].push(e))}),a}function eM(e,t,r){r.inline=!0;let n=e[2]?e[2].replace(Q,"").split("|").map(eA):[],l=e[3]?e[3].trim().split("\n").map(function(e){return eR(e,t,r,!0)}):[],i=eR(e[1],t,r,!!l.length);return r.inline=!1,l.length?{align:n,cells:l,header:i,type:c.table}:{children:i,type:c.paragraph}}function eI(e,t){return null==e.align[t]?{}:{textAlign:e.align[t]}}function ej(e){return function(t,r){return r.inline?e.exec(t):null}}function eB(e){return function(t,r){return r.inline||r.simple?e.exec(t):null}}function eD(e){return function(t,r){return r.inline||r.simple?null:e.exec(t)}}function eU(e){return function(t){return e.exec(t)}}function eN(e,t,r){if(t.inline||t.simple||r&&!r.endsWith("\n"))return null;let n="";e.split("\n").every(e=>!eO.some(t=>t.test(e))&&(n+=e+"\n",e.trim()));let l=n.trimEnd();return""==l?null:[n,l]}function e_(e){try{if(decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(e){return null}return e}function eP(e){return e.replace(ec,"$1")}function eF(e,t,r){let n=r.inline||!1,l=r.simple||!1;r.inline=!0,r.simple=!0;let i=e(t,r);return r.inline=n,r.simple=l,i}function eW(e,t,r){let n=r.inline||!1;r.inline=!1;let l=e(t,r);return r.inline=n,l}let eH=(e,t,r)=>({children:eF(t,e[1],r)});function eV(){return{}}function eZ(){return null}function eq(e,t,r){let n=e,l=t.split(".");for(;l.length&&void 0!==(n=n[l[0]]);)l.shift();return n||r}t.ZP=e=>{let{children:t="",options:r}=e,n=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)t.indexOf(r=i[n])>=0||(l[r]=e[r]);return l}(e,o);return i.cloneElement(function(e="",t={}){var r,n;let l;function o(e,r,...n){let l=eq(t.overrides,`${e}.props`,{});return t.createElement(function(e,t){let r=eq(t,e);return r?"function"==typeof r||"object"==typeof r&&"render"in r?r:eq(t,`${e}.component`,e):e}(e,t.overrides),a({},r,l,{className:function(...e){return e.filter(Boolean).join(" ")}(null==r?void 0:r.className,l.className)||void 0}),...n)}function h(e){let r;e=e.replace(z,"");let n=!1;t.forceInline?n=!0:t.forceBlock||(n=!1===q.test(e));let l=ec(Y(n?e:`${e.trimEnd().replace(ea,"")}

`,{inline:n}));for(;"string"==typeof l[l.length-1]&&!l[l.length-1].trim();)l.pop();if(null===t.wrapper)return l;let a=t.wrapper||(n?"span":"div");if(l.length>1||t.forceWrapper)r=l;else{if(1===l.length)return"string"==typeof(r=l[0])?o("span",{key:"outer"},r):r;r=null}return i.createElement(a,{key:"outer"},r)}function Q(e,r){let n=r.match(p);return n?n.reduce(function(r,n,l){let a=n.indexOf("=");if(-1!==a){var o,c,u;let d=(-1!==(o=n.slice(0,a)).indexOf("-")&&null===o.match(j)&&(o=o.replace(P,function(e,t){return t.toUpperCase()})),o).trim(),p=function(e){let t=e[0];return('"'===t||"'"===t)&&e.length>=2&&e[e.length-1]===t?e.slice(1,-1):e}(n.slice(a+1).trim()),f=s[d]||d,m=r[f]=(c=p,u=t.sanitizer,"style"===d?c.split(/;\s?/).reduce(function(e,t){let r=t.slice(0,t.indexOf(":"));return e[r.trim().replace(/(-[a-z])/g,e=>e[1].toUpperCase())]=t.slice(r.length+1).trim(),e},{}):"href"===d||"src"===d?u(c,e,d):(c.match(D)&&(c=c.slice(1,c.length-1)),"true"===c||"false"!==c&&c));"string"==typeof m&&(R.test(m)||B.test(m))&&(r[f]=i.cloneElement(h(m.trim()),{key:l}))}else"style"!==n&&(r[s[n]||n]=!0);return r},{}):null}t.overrides=t.overrides||{},t.sanitizer=t.sanitizer||e_,t.slugify=t.slugify||eL,t.namedCodesToUnicode=t.namedCodesToUnicode?a({},u,t.namedCodesToUnicode):u,t.createElement=t.createElement||i.createElement;let X=[],J={},K={[c.blockQuote]:{match:eD(m),order:1,parse:(e,t,r)=>({children:t(e[0].replace(g,""),r)}),render:(e,t,r)=>o("blockquote",{key:r.key},t(e.children,r))},[c.breakLine]:{match:eU(y),order:1,parse:eV,render:(e,t,r)=>o("br",{key:r.key})},[c.breakThematic]:{match:eD(k),order:1,parse:eV,render:(e,t,r)=>o("hr",{key:r.key})},[c.codeBlock]:{match:eD(b),order:0,parse:e=>({lang:void 0,text:e[0].replace(/^ {4}/gm,"").replace(/\n+$/,"")}),render:(e,t,r)=>o("pre",{key:r.key},o("code",a({},e.attrs,{className:e.lang?`lang-${e.lang}`:""}),e.text))},[c.codeFenced]:{match:eD(x),order:0,parse:e=>({attrs:Q("code",e[3]||""),lang:e[2]||void 0,text:e[4],type:c.codeBlock})},[c.codeInline]:{match:eB(v),order:3,parse:e=>({text:e[2]}),render:(e,t,r)=>o("code",{key:r.key},e.text)},[c.footnote]:{match:eD(w),order:0,parse:e=>(X.push({footnote:e[2],identifier:e[1]}),{}),render:eZ},[c.footnoteReference]:{match:ej($),order:1,parse:e=>({target:`#${t.slugify(e[1],eL)}`,text:e[1]}),render:(e,r,n)=>o("a",{key:n.key,href:t.sanitizer(e.target,"a","href")},o("sup",{key:n.key},e.text))},[c.gfmTask]:{match:ej(O),order:1,parse:e=>({completed:"x"===e[1].toLowerCase()}),render:(e,t,r)=>o("input",{checked:e.completed,key:r.key,readOnly:!0,type:"checkbox"})},[c.heading]:{match:eD(t.enforceAtxHeadings?L:T),order:1,parse:(e,r,n)=>({children:eF(r,e[2],n),id:t.slugify(e[2],eL),level:e[1].length}),render:(e,t,r)=>o(`h${e.level}`,{id:e.id,key:r.key},t(e.children,r))},[c.headingSetext]:{match:eD(A),order:0,parse:(e,t,r)=>({children:eF(t,e[1],r),level:"="===e[2]?1:2,type:c.heading})},[c.htmlBlock]:{match:eU(R),order:1,parse(e,t,r){let[,n]=e[3].match(eo),l=RegExp(`^${n}`,"gm"),i=e[3].replace(l,""),a=eT.some(e=>e.test(i))?eW:eF,o=e[1].toLowerCase(),c=-1!==d.indexOf(o),s=(c?o:e[1]).trim(),u={attrs:Q(s,e[2]),noInnerParse:c,tag:s};return r.inAnchor=r.inAnchor||"a"===o,c?u.text=e[3]:u.children=a(t,i,r),r.inAnchor=!1,u},render:(e,t,r)=>o(e.tag,a({key:r.key},e.attrs),e.text||t(e.children,r))},[c.htmlSelfClosing]:{match:eU(B),order:1,parse(e){let t=e[1].trim();return{attrs:Q(t,e[2]||""),tag:t}},render:(e,t,r)=>o(e.tag,a({},e.attrs,{key:r.key}))},[c.htmlComment]:{match:eU(I),order:1,parse:()=>({}),render:eZ},[c.image]:{match:eB(ez),order:1,parse:e=>({alt:e[1],target:eP(e[2]),title:e[3]}),render:(e,r,n)=>o("img",{key:n.key,alt:e.alt||void 0,title:e.title||void 0,src:t.sanitizer(e.target,"img","src")})},[c.link]:{match:ej(eC),order:3,parse:(e,t,r)=>({children:function(e,t,r){let n=r.inline||!1,l=r.simple||!1;r.inline=!1,r.simple=!0;let i=e(t,r);return r.inline=n,r.simple=l,i}(t,e[1],r),target:eP(e[2]),title:e[3]}),render:(e,r,n)=>o("a",{key:n.key,href:t.sanitizer(e.target,"a","href"),title:e.title},r(e.children,n))},[c.linkAngleBraceStyleDetector]:{match:ej(_),order:0,parse:e=>({children:[{text:e[1],type:c.text}],target:e[1],type:c.link})},[c.linkBareUrlDetector]:{match:(e,t)=>t.inAnchor?null:ej(U)(e,t),order:0,parse:e=>({children:[{text:e[1],type:c.text}],target:e[1],title:void 0,type:c.link})},[c.linkMailtoDetector]:{match:ej(N),order:0,parse(e){let t=e[1],r=e[1];return f.test(r)||(r="mailto:"+r),{children:[{text:t.replace("mailto:",""),type:c.text}],target:r,type:c.link}}},[c.orderedList]:e$(o,1),[c.unorderedList]:e$(o,2),[c.newlineCoalescer]:{match:eD(S),order:3,parse:eV,render:()=>"\n"},[c.paragraph]:{match:eN,order:3,parse:eH,render:(e,t,r)=>o("p",{key:r.key},t(e.children,r))},[c.ref]:{match:ej(W),order:0,parse:e=>(J[e[1]]={target:e[2],title:e[4]},{}),render:eZ},[c.refImage]:{match:eB(H),order:0,parse:e=>({alt:e[1]||void 0,ref:e[2]}),render:(e,r,n)=>J[e.ref]?o("img",{key:n.key,alt:e.alt,src:t.sanitizer(J[e.ref].target,"img","src"),title:J[e.ref].title}):null},[c.refLink]:{match:ej(V),order:0,parse:(e,t,r)=>({children:t(e[1],r),fallbackChildren:t(e[0].replace(Z,"\\$1"),r),ref:e[2]}),render:(e,r,n)=>J[e.ref]?o("a",{key:n.key,href:t.sanitizer(J[e.ref].target,"a","href"),title:J[e.ref].title},r(e.children,n)):o("span",{key:n.key},r(e.fallbackChildren,n))},[c.table]:{match:eD(F),order:1,parse:eM,render:(e,t,r)=>o("table",{key:r.key},o("thead",null,o("tr",null,e.header.map(function(n,l){return o("th",{key:l,style:eI(e,l)},t(n,r))}))),o("tbody",null,e.cells.map(function(n,l){return o("tr",{key:l},n.map(function(n,l){return o("td",{key:l,style:eI(e,l)},t(n,r))}))})))},[c.text]:{match:eU(ei),order:4,parse:e=>({text:e[0].replace(M,(e,r)=>t.namedCodesToUnicode[r]?t.namedCodesToUnicode[r]:e)}),render:e=>e.text},[c.textBolded]:{match:eB(ee),order:2,parse:(e,t,r)=>({children:t(e[2],r)}),render:(e,t,r)=>o("strong",{key:r.key},t(e.children,r))},[c.textEmphasized]:{match:eB(et),order:3,parse:(e,t,r)=>({children:t(e[2],r)}),render:(e,t,r)=>o("em",{key:r.key},t(e.children,r))},[c.textEscaped]:{match:eB(el),order:1,parse:e=>({text:e[1],type:c.text})},[c.textMarked]:{match:eB(er),order:3,parse:eH,render:(e,t,r)=>o("mark",{key:r.key},t(e.children,r))},[c.textStrikethroughed]:{match:eB(en),order:3,parse:eH,render:(e,t,r)=>o("del",{key:r.key},t(e.children,r))}};!0===t.disableParsingRawHTML&&(delete K[c.htmlBlock],delete K[c.htmlSelfClosing]);let Y=((l=Object.keys(K)).sort(function(e,t){let r=K[e].order,n=K[t].order;return r!==n?r-n:e<t?-1:1}),function(e,t){return function e(t,r){let n=[],i="";for(;t;){let a=0;for(;a<l.length;){let o=l[a],c=K[o],s=c.match(t,r,i);if(s){let l=s[0];t=t.substring(l.length);let a=c.parse(s,e,r);null==a.type&&(a.type=o),n.push(a),i=l;break}a++}}return n}(e.replace(E,"\n").replace(C,"").replace(G,"    "),t)}),ec=(n=t.renderRule,r=function(e,t,r){let l=K[e.type].render;return n?n(()=>l(e,t,r),e,t,r):l(e,t,r)},function e(t,n={}){if(Array.isArray(t)){let r=n.key,l=[],i=!1;for(let r=0;r<t.length;r++){n.key=r;let a=e(t[r],n),o="string"==typeof a;o&&i?l[l.length-1]+=a:null!==a&&l.push(a),i=o}return n.key=r,l}return r(t,e,n)}),es=h(e);return X.length?o("div",null,es,o("footer",{key:"footer"},X.map(function(e){return o("div",{id:t.slugify(e.identifier,eL),key:e.identifier},e.identifier,ec(Y(e.footnote,{inline:!0})))}))):es}(t,r),n)}},7659:function(e,t,r){r.d(t,{default:function(){return l.a}});var n=r(5469),l=r.n(n)},5954:function(e,t,r){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7653),l="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=n.useState,a=n.useEffect,o=n.useLayoutEffect,c=n.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!l(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=i({inst:{value:r,getSnapshot:t}}),l=n[0].inst,u=n[1];return o(function(){l.value=r,l.getSnapshot=t,s(l)&&u({inst:l})},[e,r,t]),a(function(){return s(l)&&u({inst:l}),e(function(){s(l)&&u({inst:l})})},[e]),c(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},6465:function(e,t,r){/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(7653),l=r(2666),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=l.useSyncExternalStore,o=n.useRef,c=n.useEffect,s=n.useMemo,u=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,l){var d=o(null);if(null===d.current){var p={hasValue:!1,value:null};d.current=p}else p=d.current;var f=a(e,(d=s(function(){function e(e){if(!c){if(c=!0,a=e,e=n(e),void 0!==l&&p.hasValue){var t=p.value;if(l(t,e))return o=t}return o=e}if(t=o,i(a,e))return t;var r=n(e);return void 0!==l&&l(t,r)?t:(a=e,o=r)}var a,o,c=!1,s=void 0===r?null:r;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]},[t,r,n,l]))[0],d[1]);return c(function(){p.hasValue=!0,p.value=f},[f]),u(f),f}},2666:function(e,t,r){e.exports=r(5954)},9202:function(e,t,r){e.exports=r(6465)},4300:function(e,t,r){r.d(t,{oR:function(){return s}});var n=r(7653),l=r(9202);let{useDebugValue:i}=n,{useSyncExternalStoreWithSelector:a}=l,o=!1,c=e=>e;function s(e,t=c,r){r&&!o&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),o=!0);let n=a(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return i(n),n}},4682:function(e,t,r){r.d(t,{M:function(){return l}});let n=e=>{let t;let r=new Set,n=(e,n)=>{let l="function"==typeof e?e(t):e;if(!Object.is(l,t)){let e=t;t=(null!=n?n:"object"!=typeof l||null===l)?l:Object.assign({},t,l),r.forEach(r=>r(t,e))}},l=()=>t,i={setState:n,getState:l,getInitialState:()=>a,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},a=t=e(n,l,i);return i},l=e=>e?n(e):n}}]);