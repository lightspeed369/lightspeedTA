(function(){"use strict";var e={5113:function(e,t,o){var s=o(144),a=o(1096),r=o(3551),i=function(){var e=this,t=e._self._c;return t(a.Z,[t(r.Z,[t("light-speed")],1)],1)},n=[],l=o(9203),c=o(8983),m=o(4546),u=o(1828),p=o(3058),d=o(5223),g=o(1313),v=o(4437),f=o(5452),h=o(5057),b=o(5294),y=o(5646),x=o(4397),Z=o(3347),_=o(1212),k=o(4562),w=o(5891),S=o(2680),C=o(1002),N=o(2370),P=function(){var e=this,t=e._self._c;return t("div",[t("div",[[t("div",[t(l.Z,{attrs:{color:"black",height:"100%",dense:"",dark:""}},[t(c.Z),t(N.qW,[e._v("LightSpeed Time Trial Calculator")]),t(Z.Z),t(u.Z,{attrs:{href:"https://www.lightspeedclub.com/",target:"_blank",icon:""}},[t(h.Z,[e._v("mdi-home")])],1),t(u.Z,{attrs:{href:"https://www.lightspeedclub.com/collections/all",target:"_blank",icon:""}},[t(h.Z,[e._v("mdi-car")])],1),t(u.Z,{attrs:{href:"https://www.lightspeedclub.com/pages/schedule",target:"_blank",icon:""}},[t(h.Z,[e._v("mdi-calendar")])],1),t(u.Z,{attrs:{herf:"https://lightspeed.motorsportreg.com/",target:"_blank",icon:""}},[t(h.Z,[e._v("mdi-ticket")])],1)],1)],1)]],2),t("div",{staticClass:"select-box"},[t(_.Z,{attrs:{vertical:""},model:{value:e.e6,callback:function(t){e.e6=t},expression:"e6"}},[t(w.Z,{attrs:{complete:e.e6>1,step:"1"}},[e._v(" Select Your Make "),t("small",[e._v("Brand of your car")])]),t(k.Z,{attrs:{step:"1"}},[t(v.Z,{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[t(y.Z,{attrs:{items:e.carmake,label:"Make",solo:""},model:{value:e.carspec.make,callback:function(t){e.$set(e.carspec,"make",t)},expression:"carspec.make"}})],1),t(u.Z,{attrs:{color:"primary"},on:{click:function(t){e.e6=2}}},[e._v(" Continue ")])],1),t(w.Z,{attrs:{complete:e.e6>2,step:"2"}},[e._v(" Select Your Model ")]),t(k.Z,{attrs:{step:"2"}},[t(v.Z,{staticClass:"d-flex",attrs:{cols:"12",sm:"6"}},[t(y.Z,{attrs:{items:e.getModel(),label:"Model",solo:""},model:{value:e.carspec.model,callback:function(t){e.$set(e.carspec,"model",t)},expression:"carspec.model"}})],1),t(u.Z,{attrs:{color:"secondary"},on:{click:function(t){e.e6=1}}},[e._v(" Back ")]),t(u.Z,{attrs:{color:"primary"},on:{click:function(t){e.e6=3}}},[e._v(" Continue ")])],1),t(w.Z,{attrs:{complete:e.e6>3,step:"3"}},[e._v(" Select Mods ")]),t(k.Z,{attrs:{step:"3"}},[t(b.Z,{attrs:{align:"center"}},[t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(S.Z,{domProps:{textContent:e._s("Engine")}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(y.Z,{attrs:{items:e.engine,label:"Select",multiple:"","small-chips":"",hint:"","persistent-hint":""},model:{value:e.carspec.engine,callback:function(t){e.$set(e.carspec,"engine",t)},expression:"carspec.engine"}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(S.Z,{domProps:{textContent:e._s("Drivetrain")}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(y.Z,{attrs:{items:e.drivetrain,"menu-props":{maxHeight:"400"},label:"Select",multiple:"","small-chips":"",hint:"","persistent-hint":""},model:{value:e.carspec.drivetrain,callback:function(t){e.$set(e.carspec,"drivetrain",t)},expression:"carspec.drivetrain"}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(S.Z,{domProps:{textContent:e._s("Suspension")}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(y.Z,{attrs:{items:e.suspension,label:"Select",multiple:"","small-chips":"",hint:"","persistent-hint":""},model:{value:e.carspec.suspension,callback:function(t){e.$set(e.carspec,"suspension",t)},expression:"carspec.suspension"}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(S.Z,{domProps:{textContent:e._s("Chassis")}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(y.Z,{attrs:{items:e.chassis,label:"Select",multiple:"","small-chips":"",hint:"","persistent-hint":""},model:{value:e.carspec.chassis,callback:function(t){e.$set(e.carspec,"chassis",t)},expression:"carspec.chassis"}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(S.Z,{domProps:{textContent:e._s("Aerodynamic")}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(y.Z,{attrs:{items:e.areo,label:"Select",multiple:"",chips:"",hint:"","persistent-hint":""},model:{value:e.carspec.areo,callback:function(t){e.$set(e.carspec,"areo",t)},expression:"carspec.areo"}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(S.Z,{domProps:{textContent:e._s("Tires")}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(y.Z,{attrs:{items:e.tires,label:"Select",multiple:"",chips:"",hint:"","persistent-hint":""},scopedSlots:e._u([{key:"item",fn:function({item:o}){return[t(g.Z,{staticClass:"tire-item-template-checkbox",attrs:{inline:"","input-value":e.carspec.tires.includes(o),label:`${o}`,messages:"SUPER 200TW"==o?"SUPER 200TW LIST: CR1/S, RT660, A052, SUR4G, V730, Rival S1.5, RE71-R/RS, GY SC3, Continental ECF, Dir ZIII, 494RS-RR, Michelin cup2 connect.":""}})]}}]),model:{value:e.carspec.tires,callback:function(t){e.$set(e.carspec,"tires",t)},expression:"carspec.tires"}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(S.Z,{domProps:{textContent:e._s("Weight Savings")}})],1),t(v.Z,{attrs:{cols:"12",sm:"6"}},[t(y.Z,{attrs:{items:e.weight,label:"Select",multiple:"",chips:"",hint:"","persistent-hint":""},model:{value:e.carspec.weight,callback:function(t){e.$set(e.carspec,"weight",t)},expression:"carspec.weight"}})],1)],1),t(u.Z,{attrs:{color:"secondary"},on:{click:function(t){e.e6=2}}},[e._v(" Back ")]),t(u.Z,{attrs:{color:"primary"},on:{click:function(t){e.e6=4}}},[e._v(" Continue ")])],1),t(w.Z,{attrs:{step:"4"}},[e._v(" View Your Results ")]),t(k.Z,{attrs:{step:"4"}},[t(m.Z,{attrs:{outlined:""}},[e._v(" If a car accumulate 14 or more points it will be bumped up in Class. There is no limit! A car with a high level of modifications might move up several Classes. ")]),t(x.Z,{scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",{staticClass:"text-left"},[e._v("Name")]),t("th",{staticClass:"text-left"},[e._v("Classification")])])]),t("tbody",e._l(e.categories,(function(o){return t("tr",{key:o.name},[t("td",[e._v(e._s(o.name))]),t("td",[e._v(e._s(o.score))])])})),0)]},proxy:!0}])}),t(f.Z,{attrs:{transition:"dialog-top-transition","max-width":"600"},scopedSlots:e._u([{key:"activator",fn:function({on:o,attrs:s}){return[t(u.Z,{attrs:{text:""},on:{click:e.reloadPage}},[e._v(" Reset ")]),t(u.Z,e._g(e._b({attrs:{color:"primary"},on:{click:e.calculateScore}},"v-btn",s,!1),o),[e._v("View Score")]),t(u.Z,{attrs:{color:"secondary"},on:{click:function(t){e.e6=3}}},[e._v(" Back ")])]}},{key:"default",fn:function(o){return[t(p.Z,[t(C.Z,{attrs:{color:"primary",dark:""}},[e._v("View your score and join the challenge")]),t(d.ZB,{staticClass:"score-panel"},[t("div",{staticClass:"base-class"},[e._v("Base class: "+e._s(e.carclass))]),t("div",{staticClass:"modification-score"},[e._v(" Modification point: "+e._s(e.score)+" ")]),t("div",{staticClass:"calculated-score"},[e._v(" Calculated class: "+e._s(e.finalclass)+" ")]),t("div",{staticClass:"challenge"},[t("hr"),t("p",[e._v("Submit your modification info and join the challenge.")]),t("form",{on:{submit:function(t){return t.preventDefault(),e.joinChallenge.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"submit-email"}},[e._v("Email")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"submit-email",type:"email",required:""},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"submit-firstname"}},[e._v("First Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{id:"submit-firstname",type:"text",required:""},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"submit-lastname"}},[e._v("Last Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{id:"submit-lastname",type:"text",required:""},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"submit-carnumber"}},[e._v("Car Number")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.carnumber,expression:"carnumber"}],attrs:{id:"submit-carnumber",type:"text",required:""},domProps:{value:e.carnumber},on:{input:function(t){t.target.composing||(e.carnumber=t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"submit-team"}},[e._v("Team")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.team,expression:"team"}],attrs:{id:"submit-team",type:"text"},domProps:{value:e.team},on:{input:function(t){t.target.composing||(e.team=t.target.value)}}})]),t("br"),t(u.Z,{attrs:{type:"submit",color:"primary"}},[e._v("Join the Challenge")])],1)])]),t(d.h7,{staticClass:"justify-end"},[t(u.Z,{attrs:{id:"close-viewscore-dialog-button",text:""},on:{click:function(t){o.value=!1,e.googleFormSubmitted=!1}}},[e._v("Close")])],1)],1)]}}])}),t(f.Z,{attrs:{"max-width":"300"},model:{value:e.googleFormSubmitted,callback:function(t){e.googleFormSubmitted=t},expression:"googleFormSubmitted"}},[t(p.Z,[t(C.Z,{attrs:{color:"primary",dark:""}},[e._v("Form Submitted")]),t(d.ZB,{staticClass:"submission-result"},[e._v(" Thanks for your submission! ")]),t(d.ZB,{class:e.googleFormSubmitError?"":"display-none"},[e._v(" Error: "+e._s(e.googleFormSubmitError)+" ")]),t(d.h7,[t(u.Z,{attrs:{color:"primary"},on:{click:function(t){e.googleFormSubmitted=!1}}},[e._v("Close")])],1)],1)],1)],1)],1)],1),t("form",{staticClass:"display-none",attrs:{id:"googleform",action:"https://docs.google.com/forms/d/e/1FAIpQLSfrxF4fbhj1-6i8ZetEW8y8bZaJ1z_tpyOXNjHbEKwQib2i7A/formResponse",method:"POST"},on:{submit:function(t){return t.preventDefault(),e.submitGoogleForm.apply(null,arguments)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.carspec.make,expression:"carspec.make"}],attrs:{type:"text",name:"entry.40609722",id:"make",placeholder:"make"},domProps:{value:e.carspec.make},on:{input:function(t){t.target.composing||e.$set(e.carspec,"make",t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.carspec.model,expression:"carspec.model"}],attrs:{type:"text",name:"entry.1281760678",id:"model",placeholder:"model"},domProps:{value:e.carspec.model},on:{input:function(t){t.target.composing||e.$set(e.carspec,"model",t.target.value)}}}),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.googleformMods,expression:"googleformMods"}],attrs:{type:"text",name:"entry.1712825003",id:"mods",placeholder:"mods"},domProps:{value:e.googleformMods},on:{input:function(t){t.target.composing||(e.googleformMods=t.target.value)}}}),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.googleformEngine,expression:"googleformEngine"}],attrs:{type:"text",name:"entry.1423215431",id:"engine",placeholder:"engine"},domProps:{value:e.googleformEngine},on:{input:function(t){t.target.composing||(e.googleformEngine=t.target.value)}}}),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.googleformDrivetrain,expression:"googleformDrivetrain"}],attrs:{type:"text",name:"entry.1624417641",id:"drivetrain",placeholder:"drivetrain"},domProps:{value:e.googleformDrivetrain},on:{input:function(t){t.target.composing||(e.googleformDrivetrain=t.target.value)}}}),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.googleformSuspension,expression:"googleformSuspension"}],attrs:{type:"text",name:"entry.618590664",id:"suspension",placeholder:"suspension"},domProps:{value:e.googleformSuspension},on:{input:function(t){t.target.composing||(e.googleformSuspension=t.target.value)}}}),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.googleformChassis,expression:"googleformChassis"}],attrs:{type:"text",name:"entry.243170770",id:"chassis",placeholder:"chassis"},domProps:{value:e.googleformChassis},on:{input:function(t){t.target.composing||(e.googleformChassis=t.target.value)}}}),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.googleformAerodynamic,expression:"googleformAerodynamic"}],attrs:{type:"text",name:"entry.1365604446",id:"aero",placeholder:"aerodynamic"},domProps:{value:e.googleformAerodynamic},on:{input:function(t){t.target.composing||(e.googleformAerodynamic=t.target.value)}}}),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.googleformTires,expression:"googleformTires"}],attrs:{type:"text",name:"entry.128405044",id:"tires",placeholder:"tires"},domProps:{value:e.googleformTires},on:{input:function(t){t.target.composing||(e.googleformTires=t.target.value)}}}),e._v(" "),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.googleformWeight,expression:"googleformWeight"}],attrs:{type:"text",name:"entry.581053342",id:"weight",placeholder:"weightSavings"},domProps:{value:e.googleformWeight},on:{input:function(t){t.target.composing||(e.googleformWeight=t.target.value)}}}),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.carspec.nafi,expression:"carspec.nafi"}],attrs:{type:"text",name:"entry.636352486",id:"nafi",placeholder:"nafi"},domProps:{value:e.carspec.nafi},on:{input:function(t){t.target.composing||e.$set(e.carspec,"nafi",t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.firstName,expression:"firstName"}],attrs:{type:"text",name:"entry.413973931",id:"firstname",placeholder:"firstname"},domProps:{value:e.firstName},on:{input:function(t){t.target.composing||(e.firstName=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.lastName,expression:"lastName"}],attrs:{type:"text",name:"entry.1022827596",id:"lastname",placeholder:"lastname"},domProps:{value:e.lastName},on:{input:function(t){t.target.composing||(e.lastName=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",name:"entry.44168671",id:"email",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.carnumber,expression:"carnumber"}],attrs:{type:"text",name:"entry.1688656240",id:"carnumber",placeholder:"carnumber"},domProps:{value:e.carnumber},on:{input:function(t){t.target.composing||(e.carnumber=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.team,expression:"team"}],attrs:{type:"text",name:"entry.287944984",id:"team",placeholder:"team"},domProps:{value:e.team},on:{input:function(t){t.target.composing||(e.team=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.finalclass,expression:"finalclass"}],attrs:{type:"text",name:"entry.394340936",id:"timetrialclass",placeholder:"timetrialclass"},domProps:{value:e.finalclass},on:{input:function(t){t.target.composing||(e.finalclass=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.score,expression:"score"}],attrs:{type:"text",name:"entry.978014260",id:"modpoints",placeholder:"modpoints"},domProps:{value:e.score},on:{input:function(t){t.target.composing||(e.score=t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",name:"emailAddress",id:"emailAddress",placeholder:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),t("button",{attrs:{type:"submit"}},[e._v("Submit")])])])},T=[],E=(o(7658),{name:"HelloWorld",data:()=>({...window.config,carspec:{make:"",model:"",engine:[],drivetrain:[],suspension:[],chassis:[],areo:[],tires:[],weight:[],nafi:""},score:0,carclass:null,finalclass:null,e6:1,e7:[],email:"",firstName:"",lastName:"",carnumber:"",team:"",googleFormSubmitted:!1,googleFormSubmitError:null}),computed:{carmake(){return Object.keys(this.models)},model(){let e={};for(let t in this.models)e[t]||(e[t]=[]),e[t].push(...Object.keys(this.models[t]));return e},classLookupTable(){return{}},oneStarModel(){return[]},twoStarModel(){return[]},googleformMods(){let{carspec:e,score:t,carclass:o,finalclass:s}=this;return JSON.stringify({carspec:e,score:t,carclass:o,finalclass:s})},googleformEngine(){return["[Engine]",...this.carspec.engine].join("\n")},googleformDrivetrain(){return["[Drivetrain]",...this.carspec.drivetrain].join("\n")},googleformSuspension(){return["[Suspension]",...this.carspec.suspension].join("\n")},googleformChassis(){return["[Chassis]",...this.carspec.chassis].join("\n")},googleformAerodynamic(){return["[Aerodynamic]",...this.carspec.areo].join("\n")},googleformTires(){return["[Tires]",...this.carspec.tires].join("\n")},googleformWeight(){return["[Weight]",...this.carspec.weight].join("\n")}},methods:{calculateScore(){this.score=0;let e=this.models[this.carspec.make][this.carspec.model].baseClass,t=(e.match(/\*/g)||[]).length;this.score+=7*t,"FI"==this.carspec.nafi&&(this.score+=5),this.carspec.engine.forEach((e=>{this.score+=this.scoreLookupTable.engine[e]})),this.carspec.drivetrain.forEach((e=>{this.score+=this.scoreLookupTable.drivetrain[e]})),this.carspec.suspension.forEach((e=>{this.score+=this.scoreLookupTable.suspension[e]})),this.carspec.chassis.forEach((e=>{this.score+=this.scoreLookupTable.chassis[e]})),this.carspec.areo.forEach((e=>{this.score+=this.scoreLookupTable.areo[e]})),this.carspec.tires.forEach((e=>{this.score+=this.scoreLookupTable.tires[e]})),this.carspec.weight.forEach((e=>{this.score+=this.scoreLookupTable.weight[e]})),this.carclass=e.replace(/\*/g,"");var o=this.score+this.classesScore[this.carclass],s=parseInt(o/14);this.finalclass=s>5?"TTX":this.classes[s]},joinChallenge(){this.submitGoogleForm().then((()=>{this.googleFormSubmitError=null})).catch((e=>{e.message.match(/Invalid response/i)?this.googleFormSubmitError=e.message:console.log("ignored fetch error:",e)})).finally((()=>{this.googleFormSubmitted=!0}))},async submitGoogleForm(e){const t=e&&e.target||document.querySelector("#googleform"),o=new FormData(t),s=t.getAttribute("action");return fetch(s,{method:"POST",body:o}).then((e=>{if(!e.ok)throw console.log("googleform submit invalid response:",e),new Error(`Invalid response, status: ${e.status}`)}))},getModel(){return this.model[this.carspec.make]},reloadPage(){window.location.reload()}}}),j=E,F=o(3736),M=(0,F.Z)(j,P,T,!1,null,null,null),O=M.exports,A={name:"App",components:{LightSpeed:O},data:()=>({})},R=A,$=(0,F.Z)(R,i,n,!1,null,null,null),L=$.exports,W=o(2250);s.ZP.use(W.Z);var D=new W.Z({});s.ZP.config.productionTip=!1,new s.ZP({vuetify:D,render:e=>e(L)}).$mount("#app")}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,o),r.exports}o.m=e,function(){var e=[];o.O=function(t,s,a,r){if(!s){var i=1/0;for(m=0;m<e.length;m++){s=e[m][0],a=e[m][1],r=e[m][2];for(var n=!0,l=0;l<s.length;l++)(!1&r||i>=r)&&Object.keys(o.O).every((function(e){return o.O[e](s[l])}))?s.splice(l--,1):(n=!1,r<i&&(i=r));if(n){e.splice(m--,1);var c=a();void 0!==c&&(t=c)}}return t}r=r||0;for(var m=e.length;m>0&&e[m-1][2]>r;m--)e[m]=e[m-1];e[m]=[s,a,r]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,r,i=s[0],n=s[1],l=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(a in n)o.o(n,a)&&(o.m[a]=n[a]);if(l)var m=l(o)}for(t&&t(s);c<i.length;c++)r=i[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return o.O(m)},s=self["webpackChunklightspeedcal"]=self["webpackChunklightspeedcal"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(5113)}));s=o.O(s)})();
//# sourceMappingURL=app.d5e907ca.js.map