/* esm.sh - esbuild bundle(shiki@1.3.0/dist/langs/angular-html) esnext production */
import t from"/v135/shiki@1.3.0/esnext/dist/langs/html.js";import e from"/v135/shiki@1.3.0/esnext/dist/langs/angular-expression.js";import a from"/v135/shiki@1.3.0/esnext/dist/langs/angular-template.js";import n from"/v135/shiki@1.3.0/esnext/dist/langs/angular-template-blocks.js";import"/v135/shiki@1.3.0/esnext/dist/langs/javascript.js";import"/v135/shiki@1.3.0/esnext/dist/langs/css.js";var m=Object.freeze({displayName:"Angular HTML",injections:{"R:text.html - (comment.block, text.html meta.embedded, meta.tag.*.*.html, meta.tag.*.*.*.html, meta.tag.*.*.*.*.html)":{comment:"Uses R: to ensure this matches after any other injections.",patterns:[{match:"<",name:"invalid.illegal.bad-angle-bracket.html"}]}},name:"angular-html",patterns:[{include:"text.html.basic#core-minus-invalid"},{begin:"(</?)(\\w[^\\s>]*)(?<!/)",beginCaptures:{1:{name:"punctuation.definition.tag.begin.html"},2:{name:"entity.name.tag.html"}},end:"((?: ?/)?>)",endCaptures:{1:{name:"punctuation.definition.tag.end.html"}},name:"meta.tag.other.unrecognized.html.derivative",patterns:[{include:"text.html.basic#attribute"}]}],scopeName:"text.html.derivative.ng",embeddedLangs:["html","angular-expression","angular-template","angular-template-blocks"]}),h=[...t,...e,...a,...n,m];export{h as default};
//# sourceMappingURL=angular-html.js.map