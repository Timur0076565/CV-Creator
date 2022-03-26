(window.webpackJsonp=window.webpackJsonp||[]).push([[41,13],{237:function(t,e,n){var content=n(251);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("594723ef",content,!0,{sourceMap:!1})},239:function(t,e,n){"use strict";n.r(e);n(230),n(287);var o=n(288),r={name:"BaseTextArea",components:{FieldWrapper:n(228).default,quillEditor:o.quillEditor},data:function(){return{editorOption:{theme:"snow"}}},props:{placeholder:{type:String,default:""},value:{type:[String,Number],default:""}},methods:{onChange:function(t){this.$emit("input",t.target.value)}}},l=(n(250),n(41)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("FieldWrapper",{staticClass:"base-text-area",scopedSlots:t._u([{key:"label",fn:function(){return[t._t("default")]},proxy:!0},{key:"field",fn:function(){return[n("quillEditor",t._g(t._b({staticClass:"quill-editor",attrs:{options:t.editorOption,value:t.value}},"quillEditor",t.$attrs,!1),t.$listeners))]},proxy:!0}],null,!0)})}),[],!1,null,"a61f4a44",null);e.default=component.exports},250:function(t,e,n){"use strict";n(237)},251:function(t,e,n){var o=n(98)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@300);"]),o.push([t.i,".base-text-area .quill-editor[data-v-a61f4a44]{height:auto;min-height:150px;border:none;background:#eff2f8;color:#262b22;border-radius:8px;resize:none;outline:none}@media (max-width:576px){.base-text-area .base-text-area-field[data-v-a61f4a44]{font-size:16px}}",""]),t.exports=o},252:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("2e59c68f",content,!0,{sourceMap:!1})},270:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("bad800a8",content,!0,{sourceMap:!1})},273:function(t,e,n){var content=n(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("52e251cc",content,!0,{sourceMap:!1})},275:function(t,e,n){var content=n(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("6f24be92",content,!0,{sourceMap:!1})},282:function(t,e,n){"use strict";n(252)},283:function(t,e,n){var o=n(98)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@300);"]),o.push([t.i,".employment-history-form[data-v-9ebd606c]{border:1px solid rgba(130,139,162,.2);padding:0 20px 20px;border-radius:8px;margin-bottom:10px;display:flex;flex-direction:column}.employment-history-form .inputs_wrapper[data-v-9ebd606c]{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}.employment-history-form .inputs_wrapper[data-v-9ebd606c]:last-of-type{margin-bottom:0}.employment-history-form .inputs_wrapper .base-input[data-v-9ebd606c]:first-of-type{margin-right:30px}",""]),t.exports=o},286:function(t,e,n){"use strict";n.r(e);n(176);var o=n(2),r=n(227),l=n(239),c=n(238),f=o.a.extend({name:"DynamicForm",components:{BaseTextArea:l.default,BaseInput:r.default},props:{formData:{type:Object,required:!0},titles:{type:Object,required:!0}},computed:{title:function(){return Object(c.a)(this.formData[this.titlesList[0][0]])||"(".concat(this.titlesList[0][1],")")},titlesList:function(){return Object.entries(this.titles)},config:function(){return{mask:"##.##.#### - ##.##.####",masked:!0,prefill:!0}}}}),d=(n(282),n(41)),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"employment-history-form"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"inputs_wrapper"},[n("BaseInput",{staticClass:"base-input",model:{value:t.formData[t.titlesList[0][0]],callback:function(e){t.$set(t.formData,t.titlesList[0][0],e)},expression:"formData[titlesList[0][0]]"}},[t._v("\n      "+t._s(t.titlesList[0][1])+"\n    ")]),t._v(" "),n("BaseInput",{staticClass:"base-input",model:{value:t.formData[t.titlesList[1][0]],callback:function(e){t.$set(t.formData,t.titlesList[1][0],e)},expression:"formData[titlesList[1][0]]"}},[t._v("\n      "+t._s(t.titlesList[1][1])+"\n    ")])],1),t._v(" "),n("div",{staticClass:"inputs_wrapper"},[n("BaseInput",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],staticClass:"base-input",attrs:{placeholder:"12.12.2012 - 12.12.2022"},model:{value:t.formData[t.titlesList[2][0]],callback:function(e){t.$set(t.formData,t.titlesList[2][0],e)},expression:"formData[titlesList[2][0]]"}},[t._v("\n      "+t._s(t.titlesList[2][1])+"\n    ")]),t._v(" "),n("BaseInput",{staticClass:"base-input",model:{value:t.formData[t.titlesList[3][0]],callback:function(e){t.$set(t.formData,t.titlesList[3][0],e)},expression:"formData[titlesList[3][0]]"}},[t._v("\n      "+t._s(t.titlesList[3][1])+"\n    ")])],1),t._v(" "),n("BaseTextArea",{model:{value:t.formData[t.titlesList[4][0]],callback:function(e){t.$set(t.formData,t.titlesList[4][0],e)},expression:"formData[titlesList[4][0]]"}},[t._v("\n    "+t._s(t.titlesList[4][1])+"\n  ")])],1)}),[],!1,null,"9ebd606c",null);e.default=component.exports;installComponents(component,{BaseInput:n(227).default,BaseTextArea:n(239).default})},289:function(t,e,n){"use strict";n.r(e),n.d(e,"BASE_BUTTON_VARIANTS",(function(){return o}));var o={grey:"grey",disabled:"disabled"},r={name:"BaseButton",props:{disabled:{type:Boolean,default:!1},variant:{type:String,default:""}},computed:{dynamicClass:function(){var t;return null!==(t=o[this.variant])&&void 0!==t?t:""}}},l=(n(290),n(41)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._g(t._b({staticClass:"base-button",class:t.dynamicClass,attrs:{disabled:t.disabled,type:"button"}},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,"44a25415",null);e.default=component.exports},290:function(t,e,n){"use strict";n(270)},291:function(t,e,n){var o=n(98)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@300);"]),o.push([t.i,".base-button[data-v-44a25415]{display:block;justify-content:center;width:100%;font-style:normal;font-weight:700;text-align:center;border-radius:4px;transition:.3s;color:#fff;background-color:#1a91f1;cursor:pointer;align-items:center;font-size:18px;padding:12px;outline:none;border:none}.base-button.grey[data-v-44a25415]{background-color:#eff2f8;color:#262b22}.base-button.disabled[data-v-44a25415]{opacity:.5;border:none;pointer-events:none}",""]),t.exports=o},298:function(t,e,n){t.exports=n.p+"img/user-placeholder.a614358.png"},299:function(t,e,n){"use strict";n(273)},300:function(t,e,n){var o=n(98)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@300);"]),o.push([t.i,".upload-file[data-v-f01f86a8]{display:flex;flex-direction:row;justify-content:space-between;width:100%;max-width:460px;margin:25px 0 15px}.upload-file input[data-v-f01f86a8]{display:none}.upload-file .image[data-v-f01f86a8]{width:40px;height:40px;border-radius:50%}.upload-file .file-name[data-v-f01f86a8]{display:flex;align-items:center;cursor:pointer}.upload-file .file-name img[data-v-f01f86a8]{margin-left:10px}.upload-file .file-name span[data-v-f01f86a8]{font-size:14px;font-style:normal;line-height:14px}.upload-file .attach-file[data-v-f01f86a8]{display:flex;align-items:center;background-color:transparent;border:none;outline:none;cursor:pointer;width:100%}.upload-file .attach-file[data-v-f01f86a8]:hover{background-color:rgba(26,145,241,.1)}.upload-file .attach-file img[data-v-f01f86a8]{width:50px;height:50px;margin-right:10px}.upload-file .attach-file span[data-v-f01f86a8]{font-size:16px;font-style:normal;line-height:14px}@media (max-width:768px){.file-upload[data-v-f01f86a8]{flex-direction:column}.file-upload .file-name[data-v-f01f86a8]{margin-bottom:20px}}",""]),t.exports=o},301:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("af51e4d0",content,!0,{sourceMap:!1})},302:function(t,e,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("789f2c7c",content,!0,{sourceMap:!1})},303:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("e21d26ee",content,!0,{sourceMap:!1})},304:function(t,e,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("5412bd87",content,!0,{sourceMap:!1})},309:function(t,e,n){"use strict";n(275)},310:function(t,e,n){var o=n(98)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@300);"]),o.push([t.i,".employment-history-form[data-v-0d4c02b6]{border:1px solid rgba(130,139,162,.2);padding:0 20px 20px;border-radius:8px;margin-bottom:10px;display:flex;flex-direction:column}.employment-history-form .inputs_wrapper[data-v-0d4c02b6]{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}.employment-history-form .inputs_wrapper[data-v-0d4c02b6]:last-of-type{margin-bottom:0}.employment-history-form .inputs_wrapper .base-input[data-v-0d4c02b6]:first-of-type{margin-right:30px}",""]),t.exports=o},313:function(t,e,n){"use strict";n.r(e);var o=n(19),r=(n(230),{name:"UploadFile",model:{prop:"value",event:"onChange"},data:function(){return{acceptList:["image/*"],image:""}},props:{inputName:{type:String,default:""},value:{type:[String,Number],default:""}},computed:{imageUrl:function(){return this.image||n(298)}},methods:{selectFile:function(t){var e=Object(o.a)(t.target.files,1)[0],n=new FileReader;n.addEventListener("load",this.imageLoaded),n.readAsDataURL(e)},imageLoaded:function(t){this.image=t.target.result,this.$emit("onChange",this.image)},deleteImage:function(){this.image=""}}}),l=(n(299),n(41)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"upload-file"},[n("input",{ref:"fileInput",attrs:{type:"file",accept:t.acceptList},on:{change:t.selectFile}}),t._v(" "),n("button",{staticClass:"attach-file",attrs:{type:"button"},on:{click:function(e){return t.$refs.fileInput.click()}}},[n("img",{staticClass:"image",attrs:{src:t.imageUrl,alt:""}}),t._v(" "),t.image?n("span",{on:{click:function(e){return e.stopPropagation(),t.deleteImage.apply(null,arguments)}}},[t._v(" Delete image ")]):n("span",[t._v(" Upload image ")])])])}),[],!1,null,"f01f86a8",null);e.default=component.exports},315:function(t,e,n){"use strict";n.r(e);n(42);var o=n(2),r=n(227),l=n(238),c=o.a.extend({name:"LinkForm",components:{BaseInput:r.default},props:{formData:{type:Object,required:!0}},computed:{title:function(){return Object(l.a)(this.formData.name)||"(Link label)"}}}),f=(n(309),n(41)),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"employment-history-form"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"inputs_wrapper"},[n("BaseInput",{staticClass:"base-input",model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}},[t._v("\n      Label\n    ")]),t._v(" "),n("BaseInput",{staticClass:"base-input",model:{value:t.formData.href,callback:function(e){t.$set(t.formData,"href",e)},expression:"formData.href"}},[t._v("\n      Link\n    ")])],1)])}),[],!1,null,"0d4c02b6",null);e.default=component.exports;installComponents(component,{BaseInput:n(227).default})},320:function(t,e,n){"use strict";n(301)},321:function(t,e,n){var o=n(98)(!1);o.push([t.i,'.personal-details-part[data-v-4066debc]{margin-bottom:30px}.personal-details-part.bg-error[data-v-4066debc]{position:relative}.personal-details-part.bg-error[data-v-4066debc]:before{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:100%;height:100%;padding:20px;background-color:rgba(255,0,0,.3);border-radius:8px;z-index:-1}.personal-details-part .required[data-v-4066debc]{color:red}.personal-details-part .inputs_wrapper[data-v-4066debc]{display:flex;align-items:center;justify-content:space-between;margin-bottom:15px}.personal-details-part .inputs_wrapper[data-v-4066debc]:last-of-type{margin-bottom:0}.personal-details-part .inputs_wrapper .base-input[data-v-4066debc]:first-of-type{margin-right:30px}',""]),t.exports=o},322:function(t,e,n){"use strict";n(302)},323:function(t,e,n){var o=n(98)(!1);o.push([t.i,".personal-info-part[data-v-012a04b0]{display:flex;flex-direction:column}",""]),t.exports=o},324:function(t,e,n){"use strict";n(303)},325:function(t,e,n){var o=n(98)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@300);"]),o.push([t.i,".employment-history-part[data-v-a1768932]{margin-bottom:30px}",""]),t.exports=o},326:function(t,e,n){"use strict";n(304)},327:function(t,e,n){var o=n(98)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@300);"]),o.push([t.i,".employment-history-part[data-v-0f7c7ced]{margin-bottom:30px}",""]),t.exports=o},336:function(t,e,n){var content=n(371);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(99).default)("283aef69",content,!0,{sourceMap:!1})},348:function(t,e,n){"use strict";n.r(e);var o=n(313),r={name:"PersonalDetailsPart",components:{BaseInput:n(227).default,UploadFile:o.default},props:{formData:{type:Object,required:!0},bgError:{type:Boolean,default:!1}},computed:{config:function(){return{mask:"+380 (##) ###-##-##",masked:!0,prefill:!0}}}},l=(n(320),n(41)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"personal-details-part",class:{"bg-error":t.bgError}},[t._m(0),t._v(" "),n("div",{staticClass:"inputs_wrapper"},[n("BaseInput",{staticClass:"base-input",model:{value:t.formData.jobTitle,callback:function(e){t.$set(t.formData,"jobTitle",e)},expression:"formData.jobTitle"}},[t._v("\n      Job Title\n    ")]),t._v(" "),n("UploadFile",{model:{value:t.formData.avatar,callback:function(e){t.$set(t.formData,"avatar",e)},expression:"formData.avatar"}})],1),t._v(" "),n("div",{staticClass:"inputs_wrapper"},[n("BaseInput",{staticClass:"base-input",model:{value:t.formData.firstName,callback:function(e){t.$set(t.formData,"firstName",e)},expression:"formData.firstName"}},[t._v("\n      First name\n    ")]),t._v(" "),n("BaseInput",{staticClass:"base-input",model:{value:t.formData.lastName,callback:function(e){t.$set(t.formData,"lastName",e)},expression:"formData.lastName"}},[t._v("\n      Last name\n    ")])],1),t._v(" "),n("div",{staticClass:"inputs_wrapper"},[n("BaseInput",{staticClass:"base-input",attrs:{type:"email"},model:{value:t.formData.email,callback:function(e){t.$set(t.formData,"email",e)},expression:"formData.email"}},[t._v("\n      E-mail\n    ")]),t._v(" "),n("BaseInput",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],staticClass:"base-input",attrs:{placeholder:"+ 380 ("},model:{value:t.formData.phone,callback:function(e){t.$set(t.formData,"phone",e)},expression:"formData.phone"}},[t._v("\n      Phone\n    ")])],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h2",[t._v("Personal Details"),n("span",{staticClass:"required"},[t._v("*")])])}],!1,null,"4066debc",null);e.default=component.exports;installComponents(component,{BaseInput:n(227).default})},349:function(t,e,n){"use strict";n.r(e);var o={name:"PersonalInfoParts",components:{BaseTextArea:n(239).default}},r=(n(322),n(41)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"personal-info-part"},[n("h2",[t._v("Personal info")]),t._v(" "),n("BaseTextArea",t._g(t._b({staticClass:"base-text-area"},"BaseTextArea",t.$attrs,!1),t.$listeners))],1)}),[],!1,null,"012a04b0",null);e.default=component.exports;installComponents(component,{BaseTextArea:n(239).default})},350:function(t,e,n){"use strict";n.r(e);var o=n(286),r={name:"EmploymentHistoryPart",components:{AddButton:n(254).default,DynamicForm:o.default},props:{formData:{type:Array,required:!0}},data:function(){return{titles:{jobTitle:"Job Title",employer:"Employer",date:"Start & End Date",city:"City",description:"Description"}}},methods:{addNewForm:function(){this.$emit("onAddNewForm")}}},l=(n(324),n(41)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"employment-history-part"},[n("h2",[t._v("Employment History")]),t._v(" "),t._l(t.formData,(function(form,e){return n("DynamicForm",{key:e,attrs:{formData:form,titles:t.titles}})})),t._v(" "),n("AddButton",{on:{click:t.addNewForm}},[t._v("\n    Add one more employment\n  ")])],2)}),[],!1,null,"a1768932",null);e.default=component.exports},351:function(t,e,n){"use strict";n.r(e);var o=n(286),r={name:"EducationPart",components:{AddButton:n(254).default,DynamicForm:o.default},props:{formData:{type:Array,required:!0}},data:function(){return{titles:{school:"School",degree:"Degree",date:"Start & End Date",city:"City",description:"Description"}}},methods:{addNewForm:function(){this.$emit("onAddNewForm")}}},l=(n(326),n(41)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"employment-history-part"},[n("h2",[t._v("Education")]),t._v(" "),t._l(t.formData,(function(form,e){return n("DynamicForm",{key:e,attrs:{formData:form,titles:t.titles}})})),t._v(" "),n("AddButton",{on:{click:t.addNewForm}},[t._v("\n    Add one more education\n  ")])],2)}),[],!1,null,"0f7c7ced",null);e.default=component.exports},353:function(t,e,n){"use strict";n.r(e);var o=n(2),r=n(254),l=n(315),c=o.a.extend({name:"LinksPart",components:{LinkForm:l.default,AddButton:r.default},props:{formData:{type:Array,default:function(){return[]}}},methods:{addNewForm:function(){this.$emit("onAddNewForm")}}}),f=n(41),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links-part"},[n("h2",[t._v("Links")]),t._v(" "),t._l(t.formData,(function(form,t){return n("LinkForm",{key:t,attrs:{formData:form}})})),t._v(" "),n("AddButton",{on:{click:t.addNewForm}},[t._v("\n    Add one more link\n  ")])],2)}),[],!1,null,"3a7980a9",null);e.default=component.exports},361:function(t,e,n){var o=n(6),r=n(179).values;o({target:"Object",stat:!0},{values:function(t){return r(t)}})},370:function(t,e,n){"use strict";n(336)},371:function(t,e,n){var o=n(98)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@300);"]),o.push([t.i,".cv-creator[data-v-467bc6af]{max-width:768px}.cv-creator .error[data-v-467bc6af]{color:red;text-align:center}.cv-creator .base-button[data-v-467bc6af]{max-width:200px;margin:20px auto 0}",""]),t.exports=o},404:function(t,e,n){"use strict";n.r(e);n(17),n(72),n(67),n(361),n(28);var o=n(2),r=n(348),l=n(349),c=n(350),f=n(344),d=n(289),m=n(351),v=n(402),x=n(353),h=n(269),y=o.a.extend({name:"IndexPage",components:{LevelRadioButton:h.default,LinksPart:x.default,SkillsPart:v.default,EducationPart:m.default,BaseButton:d.default,CVFile:f.default,EmploymentHistoryPart:c.default,PersonalInfoParts:l.default,PersonalDetailsPart:r.default},data:function(){return{selectedTheme:"green",personData:{details:{avatar:"",jobTitle:"",firstName:"",lastName:"",email:"",phone:""},links:[],skills:[],profile:"",employmentHistory:[],education:[]},showWarning:!1}},computed:{isEmailCorrect:function(){return this.testEmail(this.personData.details.email)},isPhoneCorrect:function(){return 19===this.personData.details.phone.length},isDetailsCompleted:function(){var t=this;return!["",null,void 0].some((function(e){return Object.values(t.personData.details).includes(e)}))},isInvalidForm:function(){var t=this;return[!1].some((function(e){return Object.values({details:t.isDetailsCompleted,email:t.isEmailCorrect,phone:t.isPhoneCorrect}).includes(e)}))}},methods:{testEmail:function(t){return/^(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){255,})(?!(?:(?:\x22?\x5C[\x00-\x7E]\x22?)|(?:\x22?[^\x5C\x22]\x22?)){65,}@)(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22))(?:\.(?:(?:[\x21\x23-\x27\x2A\x2B\x2D\x2F-\x39\x3D\x3F\x5E-\x7E]+)|(?:\x22(?:[\x01-\x08\x0B\x0C\x0E-\x1F\x21\x23-\x5B\x5D-\x7F]|(?:\x5C[\x00-\x7F]))*\x22)))*@(?:(?:(?!.*[^.]{64,})(?:(?:(?:xn--)?[a-z0-9]+(?:-[a-z0-9]+)*\.){1,126}){1,}(?:(?:[a-z][a-z0-9]*)|(?:(?:xn--)[a-z0-9]+))(?:-[a-z0-9]+)*)|(?:\[(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){7})|(?:(?!(?:.*[a-f0-9][:\]]){7,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,5})?)))|(?:(?:IPv6:(?:(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){5}:)|(?:(?!(?:.*[a-f0-9]:){5,})(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3})?::(?:[a-f0-9]{1,4}(?::[a-f0-9]{1,4}){0,3}:)?)))?(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))(?:\.(?:(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9]{2})|(?:[1-9]?[0-9]))){3}))\]))$/.test(t)},addNewEducationPartForm:function(){this.personData.education.push({school:"",degree:"",date:"",city:"",description:""})},addNewEmploymentHistoryForm:function(){this.personData.employmentHistory.push({jobTitle:"",employer:"",date:"",city:"",description:""})},addNewForm:function(){this.personData.links.push({name:"",href:""})},addSkill:function(t){this.personData.skills.push(t)},changeSkill:function(t,e){this.personData.skills[t].level=e},onSubmit:function(){this.isInvalidForm?this.showWarning=!0:(localStorage.setItem("form-data",JSON.stringify(this.personData)),this.$router.push({name:"preview"}))}}}),_=(n(370),n(41)),component=Object(_.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{staticClass:"cv-creator",on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[n("PersonalDetailsPart",{attrs:{formData:t.personData.details,bgError:t.showWarning&&t.isInvalidForm}}),t._v(" "),t.showWarning&&t.isInvalidForm?n("div",{staticClass:"error"},[t.isDetailsCompleted?t.isEmailCorrect?t.isPhoneCorrect?t._e():n("span",[t._v("Phone number must be 12 characters")]):n("span",[t._v("Email is incorrect")]):n("span",[t._v("Personal details is required")])]):t._e(),t._v(" "),n("PersonalInfoParts",{model:{value:t.personData.profile,callback:function(e){t.$set(t.personData,"profile",e)},expression:"personData.profile"}}),t._v(" "),n("EmploymentHistoryPart",{attrs:{formData:t.personData.employmentHistory},on:{onAddNewForm:t.addNewEmploymentHistoryForm}}),t._v(" "),n("EducationPart",{attrs:{formData:t.personData.education},on:{onAddNewForm:t.addNewEducationPartForm}}),t._v(" "),n("LinksPart",{attrs:{formData:t.personData.links},on:{onAddNewForm:t.addNewForm}}),t._v(" "),n("SkillsPart",{attrs:{skills:t.personData.skills},on:{onAddSkill:t.addSkill,onChangeSkill:t.changeSkill}}),t._v(" "),n("BaseButton",{staticClass:"base-button",attrs:{type:"submit"}},[t._v("\n    Create CV\n  ")])],1)}),[],!1,null,"467bc6af",null);e.default=component.exports;installComponents(component,{BaseButton:n(289).default})}}]);