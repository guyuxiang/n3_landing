(self.webpackChunknarrate=self.webpackChunknarrate||[]).push([[851],{9857:function(t,e,n){"use strict";n.r(e);var r=n(7294),o=n(5444),u=n(1804),a=n.n(u),i=n(5414),f=n(9),c=n(9505),l=f.ZP.main.withConfig({displayName:"post__StyledPostContainer",componentId:"sc-1jed77t-0"})(["max-width:1000px;"]),s=f.ZP.header.withConfig({displayName:"post__StyledPostHeader",componentId:"sc-1jed77t-1"})(["margin-bottom:50px;.tag{margin-right:10px;}"]),d=f.ZP.div.withConfig({displayName:"post__StyledPostContent",componentId:"sc-1jed77t-2"})(["margin-bottom:100px;h1,h2,h3,h4,h5,h6{margin:2em 0 1em;}p{margin:1em 0;line-height:1.5;color:var(--light-slate);}a{",";}code{background-color:var(--lightest-navy);color:var(--lightest-slate);border-radius:var(--border-radius);font-size:var(--fz-sm);padding:0.2em 0.4em;}pre code{background-color:transparent;padding:0;}"],(function(t){return t.theme.mixins.inlineLink}));e.default=function(t){var e=t.data,n=t.location,u=e.markdownRemark,f=u.frontmatter,x=u.html,p=f.title,m=f.date,g=f.tags;return r.createElement(c.Ar,{location:n},r.createElement(i.q,{title:p}),r.createElement(l,null,r.createElement("span",{className:"breadcrumb"},r.createElement("span",{className:"arrow"},"←"),r.createElement(o.Link,{to:"/blog"},"all blogs")),r.createElement(s,null,r.createElement("h1",{className:"medium-heading"},p),r.createElement("p",{className:"subtitle"},g&&g.length>0&&g.map((function(t,e){return r.createElement(o.Link,{key:e,to:"/blog/tags/"+a()(t)+"/",className:"tag"},"#",t)}))),r.createElement("p",null,r.createElement("time",null,new Date(m).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})))),r.createElement(d,{dangerouslySetInnerHTML:{__html:x}}),r.createElement(c.sv,null)))}},2705:function(t,e,n){var r=n(5639).Symbol;t.exports=r},9932:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},2663:function(t){t.exports=function(t,e,n,r){var o=-1,u=null==t?0:t.length;for(r&&u&&(n=t[++o]);++o<u;)n=e(n,t[o],o,t);return n}},9029:function(t){var e=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;t.exports=function(t){return t.match(e)||[]}},4239:function(t,e,n){var r=n(2705),o=n(9607),u=n(2333),a=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?o(t):u(t)}},8674:function(t){t.exports=function(t){return function(e){return null==t?void 0:t[e]}}},531:function(t,e,n){var r=n(2705),o=n(9932),u=n(1469),a=n(3448),i=r?r.prototype:void 0,f=i?i.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(u(e))return o(e,t)+"";if(a(e))return f?f.call(e):"";var n=e+"";return"0"==n&&1/e==-Infinity?"-0":n}},5393:function(t,e,n){var r=n(2663),o=n(3816),u=n(8748),a=RegExp("['’]","g");t.exports=function(t){return function(e){return r(u(o(e).replace(a,"")),t,"")}}},9389:function(t,e,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});t.exports=r},1957:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},9607:function(t,e,n){var r=n(2705),o=Object.prototype,u=o.hasOwnProperty,a=o.toString,i=r?r.toStringTag:void 0;t.exports=function(t){var e=u.call(t,i),n=t[i];try{t[i]=void 0;var r=!0}catch(f){}var o=a.call(t);return r&&(e?t[i]=n:delete t[i]),o}},3157:function(t){var e=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;t.exports=function(t){return e.test(t)}},2333:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5639:function(t,e,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,u=r||o||Function("return this")();t.exports=u},2757:function(t){var e="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",u="["+o+"]",a="\\d+",i="[\\u2700-\\u27bf]",f="["+n+"]",c="[^\\ud800-\\udfff"+o+a+e+n+r+"]",l="(?:\\ud83c[\\udde6-\\uddff]){2}",s="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+r+"]",x="(?:"+f+"|"+c+")",p="(?:"+d+"|"+c+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",g="(?:['’](?:D|LL|M|RE|S|T|VE))?",v="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",b="[\\ufe0e\\ufe0f]?",h=b+v+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",l,s].join("|")+")"+b+v+")*"),y="(?:"+[i,l,s].join("|")+")"+h,E=RegExp([d+"?"+f+"+"+m+"(?="+[u,d,"$"].join("|")+")",p+"+"+g+"(?="+[u,d+x,"$"].join("|")+")",d+"?"+x+"+"+m,d+"+"+g,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,y].join("|"),"g");t.exports=function(t){return t.match(E)||[]}},3816:function(t,e,n){var r=n(9389),o=n(9833),u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");t.exports=function(t){return(t=o(t))&&t.replace(u,r).replace(a,"")}},1469:function(t){var e=Array.isArray;t.exports=e},7005:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},3448:function(t,e,n){var r=n(4239),o=n(7005);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},1804:function(t,e,n){var r=n(5393)((function(t,e,n){return t+(n?"-":"")+e.toLowerCase()}));t.exports=r},9833:function(t,e,n){var r=n(531);t.exports=function(t){return null==t?"":r(t)}},8748:function(t,e,n){var r=n(9029),o=n(3157),u=n(9833),a=n(2757);t.exports=function(t,e,n){return t=u(t),void 0===(e=n?void 0:e)?o(t)?a(t):r(t):t.match(e)||[]}}}]);
//# sourceMappingURL=component---src-templates-post-js-d3d079ac6029159d850e.js.map