webpackJsonp([2],{"7rHv":function(t,e,o){var n=o("YWvF");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("68f79962",n,!1,{sourceMap:!1})},GnaI:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o("c7zX"),a=o("VfjC"),r=!1;var i=function(t){r||o("7rHv")},f=o("VU/8")(n.a,a.a,!1,i,null,null);f.options.__file="pages/article/_id.vue",e.default=f.exports},HHoN:function(t,e,o){t.exports=o.p+"fonts/fontello.8d4a4e6.woff2"},JhQI:function(t,e,o){t.exports=o.p+"img/fontello.9354499.svg"},QSTu:function(t,e,o){t.exports=o.p+"fonts/fontello.e73a064.eot"},T4AC:function(t,e,o){var n=o("kxFB");(t.exports=o("FZ+f")(!1)).push([t.i,"@font-face{font-family:fontello;src:url("+n(o("QSTu"))+");src:url("+n(o("QSTu"))+'#iefix) format("embedded-opentype"),url('+n(o("HHoN"))+') format("woff2"),url('+n(o("V7jC"))+') format("woff"),url('+n(o("yxwh"))+') format("truetype"),url('+n(o("JhQI"))+'#fontello) format("svg");font-weight:400;font-style:normal}[class*=" fa-mavon-"]:before,[class^=fa-mavon-]:before{font-family:fontello;font-style:normal;font-weight:400;speak:none;display:inline-block;text-decoration:inherit;width:1em;margin-right:.2em;text-align:center;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-variant:normal;text-transform:none;line-height:1em;margin-left:.2em;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.fa-mavon-bold:before{content:"\\E800"}.fa-mavon-italic:before{content:"\\E801"}.fa-mavon-thumb-tack:before{content:"\\E802"}.fa-mavon-link:before{content:"\\E803"}.fa-mavon-picture-o:before{content:"\\E804"}.fa-mavon-repeat:before{content:"\\E805"}.fa-mavon-undo:before{content:"\\E806"}.fa-mavon-trash-o:before{content:"\\E807"}.fa-mavon-floppy-o:before{content:"\\E808"}.fa-mavon-compress:before{content:"\\E809"}.fa-mavon-eye:before{content:"\\E80A"}.fa-mavon-eye-slash:before{content:"\\E80B"}.fa-mavon-question-circle:before{content:"\\E80C"}.fa-mavon-times:before{content:"\\E80D"}.fa-mavon-align-left:before{content:"\\E80F"}.fa-mavon-align-center:before{content:"\\E810"}.fa-mavon-align-right:before{content:"\\E811"}.fa-mavon-arrows-alt:before{content:"\\F0B2"}.fa-mavon-bars:before{content:"\\F0C9"}.fa-mavon-list-ul:before{content:"\\F0CA"}.fa-mavon-list-ol:before{content:"\\F0CB"}.fa-mavon-strikethrough:before{content:"\\F0CC"}.fa-mavon-underline:before{content:"\\F0CD"}.fa-mavon-table:before{content:"\\F0CE"}.fa-mavon-columns:before{content:"\\F0DB"}.fa-mavon-quote-left:before{content:"\\F10D"}.fa-mavon-code:before{content:"\\F121"}.fa-mavon-superscript:before{content:"\\F12B"}.fa-mavon-subscript:before{content:"\\F12C"}.fa-mavon-header:before{content:"\\F1DC"}.fa-mavon-window-maximize:before{content:"\\F2D0"}.markdown-body strong{font-weight:bolder}.markdown-body .hljs-center{text-align:center}.markdown-body .hljs-right{text-align:right}.markdown-body .hljs-left{text-align:left}',""])},V7jC:function(t,e,o){t.exports=o.p+"fonts/fontello.a782baa.woff"},VfjC:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{},[o("div",{staticClass:"article-contanier"},[o("div",{staticClass:"title",domProps:{textContent:t._s(t.article.title)}}),o("div",{staticClass:"adition"},[o("img",{staticClass:"avator",attrs:{src:t.avatorSrc}}),o("router-link",{staticClass:"author",attrs:{to:"/about"}},[t._v(t._s(t.author))]),o("span",{staticClass:"time",domProps:{textContent:t._s(t.article.createdAt)}})],1),o("div",{staticClass:"article-content"},[o("mavon-editor",{attrs:{toolbarsFlag:!1,subfield:!1,defaultOpen:"preview"},model:{value:t.article.content,callback:function(e){t.$set(t.article,"content",e)},expression:"article.content"}})],1)])])};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a},YWvF:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,".article-contanier{max-width:700px;margin:0 auto}.title{color:#293846;line-height:42px;font-size:30px;font-weight:700;margin-bottom:20px}.adition{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:30px}.adition .avator{width:20px;height:20px;margin-right:10px;border-radius:20px;border:1px solid #ddd}.adition .author{text-decoration:none;color:#293846;margin-right:10px}.adition .time{color:#7f8c8d}.article-content .v-note-wrapper .v-note-panel.shadow{-webkit-box-shadow:none;box-shadow:none}.article-content .v-note-wrapper .v-note-panel .v-note-show .v-show-content{background:#fff}",""])},c7zX:function(t,e,o){"use strict";var n=o("Dd8w"),a=o.n(n),r=o("NYxO"),i=o("FhoZ"),f=o("pw1w");o.n(f);e.a={data:function(){return{author:i.a.author,avatorSrc:i.a.avatorSrc}},computed:{article:function(){return this.$store.state.articles.article}},methods:a()({},Object(r.mapActions)(["articles/getArticlesViewList"])),mounted:function(){this.$store.dispatch("articles/getArticleById",this.$route.params.id).then(function(t){}).catch(function(){})}}},kxFB:function(t,e){t.exports=function(t){return"string"!=typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t)}},pw1w:function(t,e,o){var n=o("T4AC");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);o("rjj0")("5bc8739c",n,!1,{sourceMap:!1})},yxwh:function(t,e,o){t.exports=o.p+"fonts/fontello.068ca2b.ttf"}});