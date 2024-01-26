import{e as $,L as U,f as T,E as M,h as V,u as E}from"./links.125d59c9.js";import{a as v}from"./addons.dca3a5e7.js";import{C as F,a as D,S as q}from"./ScrollAndHighlight.b153b270.js";import{U as O}from"./AnimatedNumber.5b54d9b9.js";import{x as i,o as s,c as a,C as l,l as h,a as u,T as b,D as w,t as f,m as W,I as Y,k as p,b as c,H as S}from"./vue.runtime.esm-bundler.4a881941.js";import{_ as g}from"./_plugin-vue_export-helper.abeb2ae0.js";import{S as x}from"./Caret.02d7c74a.js";import{S as G}from"./LogoGear.49550bdb.js";import{S as Z}from"./Logo.0d9f9e6e.js";import{a as j}from"./index.e978df4e.js";const I={components:{UtilAnimatedNumber:O},props:{percentage:Number},data(){return{fromNumber:0,number:0}},watch:{percentage:{deep:!0,handler(e){e!==this.number&&(this.fromNumber=this.number,this.number=e)}}},mounted(){this.number=this.percentage}},R={class:"aioseo-percent-circle"},z={class:"aioseo-seo-site-score-svg",viewBox:"0 0 33.83098862 33.83098862",xmlns:"http://www.w3.org/2000/svg"},K=u("circle",{class:"aioseo-percent-circle-score__background",stroke:"#BFD6F7","stroke-width":"2",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"},null,-1),Q=["stroke-dasharray"],J={class:"aioseo-percent-circle-percent"};function X(e,r,o,t,d,n){const _=i("util-animated-number");return s(),a("div",R,[l(b,{name:"fill-percent-circle"},{default:h(()=>[(s(),a("svg",z,[K,u("circle",{class:"aioseo-percent-circle-score__circle",stroke:"#005AE0","stroke-width":"2","stroke-dasharray":`${o.percentage},100`,fill:"none",cx:"16.91549431",cy:"16.91549431",r:"15.91549431"},null,8,Q)]))]),_:1}),u("div",J,[u("div",null,[l(_,{number:d.number,"from-number":d.fromNumber},null,8,["number","from-number"]),w("% ")])])])}const A=g(I,[["render",X]]);const ee={emits:["close"],components:{CorePercentCircle:A,SvgClose:x},props:{strings:Object,percentage:Number}},te={class:"aioseo-processing-popup"},se=u("br",null,null,-1);function oe(e,r,o,t,d,n){const _=i("core-percent-circle"),m=i("svg-close");return s(),a("div",te,[l(_,{percentage:o.percentage},null,8,["percentage"]),u("div",null,[u("strong",null,f(o.strings.header),1),se,w(f(o.strings.description),1)]),l(m,{onClick:r[0]||(r[0]=y=>e.$emit("close"))})])}const ne=g(ee,[["render",oe]]);const re={setup(){return{settingsStore:$()}},components:{SvgAioseoLogoGear:G,SvgClose:x},data(){return{strings:{boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO",this.$t.__("Free",this.$td)),url:this.$links.utmUrl("lite-upgrade-bar"),linkText:this.$t.sprintf(this.$t.__("upgrading to %1$s",this.$td),"Pro")}}},computed:{link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank" class="text-white">%2$s</a> <a href="%1$s" target="_blank" class="text-white upgrade-arrow">&rarr;</a></strong>',this.strings.url,this.strings.linkText)},upgradeText(){return this.$t.sprintf(this.$t.__("You're using %1$s. To unlock more features, consider %2$s",this.$td),this.strings.boldText,this.link)}},methods:{processHideUpgradeBar(){document.body.classList.remove("aioseo-has-bar"),this.settingsStore.hideUpgradeBar()}},mounted(){document.body.classList.add("aioseo-has-bar")}},ie={class:"aioseo-upgrade-bar"},ae={class:"upgrade-text"},ce=["innerHTML"];function le(e,r,o,t,d,n){const _=i("svg-aioseo-logo-gear"),m=i("svg-close");return s(),a("div",ie,[u("div",ae,[l(_),u("div",{innerHTML:n.upgradeText},null,8,ce)]),l(m,{onClick:n.processHideUpgradeBar},null,8,["onClick"])])}const ue=g(re,[["render",le]]);const de={props:{hero:{type:Boolean,default:!1},fluid:{type:Boolean,default:!1},fullWidth:Boolean,small:Boolean},computed:{classes(){let e=this.fluid?"aioseo-container-fluid ":"aioseo-container ";return e+=this.hero?"aioseo-hero ":"",e+=this.fullWidth?"full-width ":"",e+=this.small?"small ":"",e}}};function _e(e,r,o,t,d,n){return s(),a("div",{class:Y(n.classes)},[W(e.$slots,"default")],2)}const pe=g(de,[["render",_e]]),ge={},me={viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-notifications"},he=u("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M15.8333 2.5H4.16667C3.25 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V4.16667C17.5 3.25 16.75 2.5 15.8333 2.5ZM15.8333 15.8333H4.16667V13.3333H7.13333C7.70833 14.325 8.775 15 10.0083 15C11.2417 15 12.3 14.325 12.8833 13.3333H15.8333V15.8333ZM11.675 11.6667H15.8333V4.16667H4.16667V11.6667H8.34167C8.34167 12.5833 9.09167 13.3333 10.0083 13.3333C10.925 13.3333 11.675 12.5833 11.675 11.6667Z",fill:"currentColor"},null,-1),fe=[he];function ke(e,r){return s(),a("svg",me,fe)}const ve=g(ge,[["render",ke]]);const Se={setup(){return{helpPanelStore:U(),licenseStore:T(),linkAssistantStore:M(),notificationsStore:V(),rootStore:E(),settingsStore:$()}},components:{CoreApiBar:F,CoreLicenseKeyBar:D,CorePercentCircle:A,CoreProcessingPopup:ne,CoreUpgradeBar:ue,GridContainer:pe,SvgAioseoLogo:Z,SvgCircleQuestionMark:j,SvgNotifications:ve},mixins:[q],props:{fullWidth:Boolean,small:Boolean,pageName:String,actions:{type:Boolean,default(){return!0}},upgradeBar:{type:Boolean,default(){return!0}}},data(){return{activeScan:null,strings:{linkAssistantPopup:{header:this.$t.__("Link suggestions are being processed.",this.$td),description:this.$t.__("Depending on the number of posts being scanned, this process can take some time. You can safely leave this page and check back later.",this.$td)},searchStatisticsPopup:{header:this.$t.__("Search statistics are being fetched.",this.$td),description:this.$t.__("Depending on the amount of content on your site, this process can take some time. You can safely leave this page and check back later.",this.$td)}}}},computed:{percentage(){switch(this.activeScan){case"linkAssistant":return this.linkAssistantStore.suggestionsScan.percent;default:return null}},showPopup(){switch(this.activeScan){case"linkAssistant":return this.linkAssistantStore.suggestionsScan.showProcessingPopup&&this.linkAssistantStore.suggestionsScan.percent!==100;default:return null}},popupStrings(){switch(this.activeScan){case"linkAssistant":return this.strings.linkAssistantPopup;default:return null}}},methods:{debounce(e){let r;return(...o)=>{r&&cancelAnimationFrame(r),r=requestAnimationFrame(()=>{e(...o)})}},storeScroll(){document.documentElement.dataset.scroll=window.scrollY},toggleModal(){document.getElementById("aioseo-help-modal").classList.toggle("visible"),document.body.classList.toggle("modal-open")},checkForActiveScan(){this.rootStore.aioseo.page==="link-assistant"&&v.isActive("aioseo-link-assistant")&&!v.requiresUpgrade("aioseo-link-assistant")&&v.hasMinimumVersion("aioseo-link-assistant")&&(this.$route.name==="links-report"||this.$route.name==="overview")&&this.linkAssistantStore.suggestionsScan.percent!==100&&(this.activeScan="linkAssistant")},toggleCirclePopup(){switch(this.activeScan){case"linkAssistant":return this.linkAssistantStore.toggleProcessingPopup();default:return null}}},mounted(){this.storeScroll(),document.addEventListener("scroll",this.debounce(this.storeScroll),{passive:!0}),this.checkForActiveScan()}},be={class:"aioseo-header"},ye={class:"aioseo-header-content"},Ce=["href"],$e={key:2,class:"spacer"},we={key:3,class:"page-name"},xe={key:4,class:"header-actions"},Ae={key:0,class:"round number"};function Be(e,r,o,t,d,n){const _=i("core-upgrade-bar"),m=i("core-license-key-bar"),y=i("core-api-bar"),C=i("svg-aioseo-logo"),B=i("core-percent-circle"),P=i("core-processing-popup"),N=i("svg-notifications"),H=i("svg-circle-question-mark"),L=i("grid-container");return s(),a("div",be,[!e.$isPro&&t.settingsStore.settings.showUpgradeBar&&o.upgradeBar&&t.rootStore.pong?(s(),p(_,{key:0})):c("",!0),e.$isPro&&t.licenseStore.isUnlicensed&&t.rootStore.pong?(s(),p(m,{key:1})):c("",!0),t.rootStore.pong?c("",!0):(s(),p(y,{key:2})),l(L,{"full-width":o.fullWidth,small:o.small},{default:h(()=>[u("div",ye,[t.licenseStore.isUnlicensed?(s(),a("a",{key:0,href:e.$links.utmUrl("header-logo"),target:"_blank"},[l(C)],8,Ce)):c("",!0),t.licenseStore.isUnlicensed?c("",!0):(s(),p(C,{key:1})),o.pageName?(s(),a("span",$e)):c("",!0),o.pageName?(s(),a("span",we,f(o.pageName),1)):c("",!0),o.actions?(s(),a("div",xe,[l(b,{name:"fade-percent-circle"},{default:h(()=>[d.activeScan&&n.percentage!==100?(s(),p(B,{key:0,percentage:n.percentage,onClick:n.toggleCirclePopup},null,8,["percentage","onClick"])):c("",!0)]),_:1}),l(b,{name:"fade-processing-popup"},{default:h(()=>[n.showPopup?(s(),p(P,{key:0,strings:n.popupStrings,percentage:n.percentage,onClose:n.toggleCirclePopup},null,8,["strings","percentage","onClose"])):c("",!0)]),_:1}),u("span",{class:"round",onClick:r[0]||(r[0]=S((...k)=>t.notificationsStore.toggleNotifications&&t.notificationsStore.toggleNotifications(...k),["stop"]))},[t.notificationsStore.activeNotificationsCount?(s(),a("span",Ae,f(t.notificationsStore.activeNotificationsCount>9?"!":t.notificationsStore.activeNotificationsCount),1)):c("",!0),l(N,{onClick:S(t.notificationsStore.toggleNotifications,["stop"])},null,8,["onClick"])]),t.helpPanelStore.docs&&Object.keys(t.helpPanelStore.docs).length?(s(),a("span",{key:0,class:"round",onClick:r[1]||(r[1]=S((...k)=>n.toggleModal&&n.toggleModal(...k),["stop"]))},[l(H)])):c("",!0)])):c("",!0)])]),_:1},8,["full-width","small"])])}const De=g(Se,[["render",Be]]);export{De as C,pe as G,ne as a,ue as b};
