(window.webpackJsonp=window.webpackJsonp||[]).push([[19,15],{226:function(t,e,l){var content=l(232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(99).default)("4cf5348a",content,!0,{sourceMap:!1})},228:function(t,e,l){"use strict";l.r(e);var r={name:"FieldWrapper"},o=(l(231),l(41)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"field-wrapper"},[l("label",{staticClass:"label"},[t._t("label")],2),t._v(" "),t._t("field")],2)}),[],!1,null,"520929b8",null);e.default=component.exports},231:function(t,e,l){"use strict";l(226)},232:function(t,e,l){var r=l(98)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@300);"]),r.push([t.i,".field-wrapper[data-v-520929b8]{position:relative;display:flex;flex-direction:column;width:100%}.field-wrapper .label[data-v-520929b8]{font-size:14px;color:#828ba2;margin-bottom:6px}",""]),t.exports=r},237:function(t,e,l){var content=l(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(99).default)("594723ef",content,!0,{sourceMap:!1})},239:function(t,e,l){"use strict";l.r(e);l(230),l(287);var r=l(288),o={name:"BaseTextArea",components:{FieldWrapper:l(228).default,quillEditor:r.quillEditor},data:function(){return{editorOption:{theme:"snow"}}},props:{placeholder:{type:String,default:""},value:{type:[String,Number],default:""}},methods:{onChange:function(t){this.$emit("input",t.target.value)}}},n=(l(250),l(41)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("FieldWrapper",{staticClass:"base-text-area",scopedSlots:t._u([{key:"label",fn:function(){return[t._t("default")]},proxy:!0},{key:"field",fn:function(){return[l("quillEditor",t._g(t._b({staticClass:"quill-editor",attrs:{options:t.editorOption,value:t.value}},"quillEditor",t.$attrs,!1),t.$listeners))]},proxy:!0}],null,!0)})}),[],!1,null,"a61f4a44",null);e.default=component.exports},250:function(t,e,l){"use strict";l(237)},251:function(t,e,l){var r=l(98)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@300);"]),r.push([t.i,".base-text-area .quill-editor[data-v-a61f4a44]{height:auto;min-height:150px;border:none;background:#eff2f8;color:#262b22;border-radius:8px;resize:none;outline:none}@media (max-width:576px){.base-text-area .base-text-area-field[data-v-a61f4a44]{font-size:16px}}",""]),t.exports=r}}]);