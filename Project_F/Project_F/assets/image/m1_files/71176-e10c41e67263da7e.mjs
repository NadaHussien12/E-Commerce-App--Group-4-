(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[71176],{693099:(e,n,t)=>{t.d(n,{AA:()=>i,E9:()=>d,EU:()=>f,IO:()=>h,KH:()=>u,QR:()=>c,Uw:()=>r,ZR:()=>w,dy:()=>_,eA:()=>g,k7:()=>a,rT:()=>p,tz:()=>l,u9:()=>k,zR:()=>s,zu:()=>o});const o="OPEN_UNAUTH",r="openUnauthType",i="_isAfterLogin",a="_lastVisitedPages",s="_lastVisitedPagesBeforeLogin",_="_lastVisitedBoardPages",c="_lastVisitedPagesBeforeNavPage",u="_lastVisitedSessionPages",l="_unauthVisitedPages",g=20,d="unauthTopicsFollowed",p=["US","CA","NZ","AU"],h=new Set(["GB","IE"]),f=new Set(["AT","BE","CH","DE","DK","ES","FR","IT","NL","NO","PT","SE"]),w=new Set(["BR","MX","AR","CL","CO","PE"]),k="ad_img"},81759:(e,n,t)=>{t.d(n,{CC:()=>w,Ff:()=>N,H$:()=>m,Mt:()=>f,Yi:()=>O,Yy:()=>A,Z4:()=>h,dc:()=>R,dp:()=>k,i$:()=>d,p9:()=>E,t_:()=>g,vV:()=>p});var o=t(231486),r=t(6637),i=t(826067),a=t(400660),s=t(226198),_=t(539497),c=t(622096),u=t(957161),l=t(693099);const g=()=>(0,u.qn)(l.tz,""),d=()=>{const e=g();let n;try{n=JSON.parse(e)}catch(t){n=[]}return n},p=()=>(0,u.L_)(l.tz),h=(e,n)=>{const t=d(),o=t.length,r=o?t[0].path:"";if(o<l.eA&&(!o||e!==r)){const o={path:e,pageType:n,ts:Date.now()};(0,u.Nh)(l.tz,JSON.stringify([o].concat(t)))}},f=(e,n,t,o,r,i,a=l.k7)=>{const s=(0,u.qn)(a)?JSON.parse((0,u.qn)(a)):[];if(!s[0]||s[0].path!==e){const _=[{path:e,ts:Date.now(),pin_id:t||0,first_pin_image_signature:n||"",first_pin_id:t||"",image_info:o||"",pin_description:r||"",is_shared:!!i,pin_invite_code:i}];(0,u.Nh)(a,JSON.stringify(_.concat(s)))}},w=({path:e,image:n,dominant_color:t,pin_description:o,pin_id:r})=>{const i=(()=>{const e=(0,c.qn)(l.KH);if(!e)return[];let n;try{n=JSON.parse(e)}catch(t){n=[]}return n})();if(!i[0]||i[0].path!==e){const a=[{path:e,image:n,pin_description:o||"",dominant_color:t||"",pin_id:r||""}];(0,c.Nh)(l.KH,JSON.stringify(a.concat(i)))}};function k(e,n,t,o,r,i){f(e,n,t,o,r,i,l.zR)}const m=(e,n)=>{var t,o;f(e,n.image_signature,n.id,null===(t=n.images)||void 0===t?void 0:t["236x"],null!==(o=n.description)&&void 0!==o?o:"","",l.dy)};function E(e,n,t,o,r){f(e,n,t,o,r,"",l.QR)}function R(){return d().filter((e=>"closeup"===e.pageType)).length}function O(){const e=r.Z.create("UnauthUserDataResource");return new Promise(((n,t)=>{e.callGet().then((e=>{const r=e.resource_response.data,i=!!o.U2(s.x3);return r?((0,a.Wn)(r.medium_image_url)&&(r.medium_image_url=""),(0,_.My)("mweb.unauth.personalized_login.fetch_user_info.info.user_info_found.logged_out_cookie_"+(i?"true":"false")),n(r)):((0,_.My)("mweb.unauth.personalized_login.fetch_user_info.info.no_user_info.logged_out_cookie_"+(i?"true":"false")),t({}))})).catch((e=>{if(e&&e.message){const n=e.message.replace(/\s/g,"_").toLowerCase();(0,_.My)(`mweb.unauth.personalized_login.fetch_user_info.error.${n}`)}else(0,_.My)("mweb.unauth.personalized_login.fetch_user_info.error.unknown");return t(e)}))}))}function b({i18n:e,location:n}){const t=n.pathname.startsWith("/signup"),o=n.pathname.startsWith("/login");if(!t&&!o)return{showPLPBanner:!1,pinForBanner:null};let r;try{r=JSON.parse((0,c.qn)(l.KH))}catch(i){r=[]}if(r&&r.length>0){const n=r[0];if(n)return n.bannerCopy=e._('More ideas like this await', 'page banner with pin image that was signed up from', 'page banner with pin image that was signed up from'),{showPLPBanner:Boolean(n.image),pinForBanner:n}}return{showPLPBanner:!1,pinForBanner:null}}const A=e=>e.search&&e.search.startsWith("?next=")?e.search.split("?next=")[1]:null;function I({i18n:e,location:n}){var t;const o=(null===(t=n.state)||void 0===t?void 0:t.next)||A(n);if(o){const n=o.indexOf("?"),t=(0,i.mB)(o.substring(n));if(t.url&&t.media)return{showPLPBanner:!0,pinForBanner:{image:{url:(0,i.Jx)(t.media),height:1,width:1},pinDescription:t.description,bannerCopy:e._('Save this idea and discover more inspiration like it.', 'page banner with pin image that was signed up from', 'page banner with pin image that was signed up from')}}}return{showPLPBanner:!1,pinForBanner:null}}function N({i18n:e,location:n}){return I({i18n:e,location:n}).showPLPBanner?I({i18n:e,location:n}):b({i18n:e,location:n}).showPLPBanner?b({i18n:e,location:n}):{showPLPBanner:!1,pinForBanner:null}}},400660:(e,n,t)=>{function o(e){return Boolean(null==e?void 0:e.is_matured_new_user)}t.d(n,{IR:()=>a,V0:()=>o,Wn:()=>i,xT:()=>r});const r=e=>!!e&&2===e.login_state,i=e=>!(!e||!e.match(/\/static\/images\/user\/default_\d+\.png$/));function a(e){return!e||void 0===e.third_party_marketing_tracking_enabled||null===e.third_party_marketing_tracking_enabled||e.third_party_marketing_tracking_enabled}},56641:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(567831),r=t(539497);function i(e,n){if(n&&!(()=>{try{return window.localStorage.test=2,!1}catch(e){return!0}})()){const n=window.open(e,"_blank");return n&&(n.opener=null),n}{const n=(0,o.Z)(e);return setTimeout((()=>{(0,r.My)("setting_new_window_location")}),0),window.location.href=n,window}}},995146:(e,n,t)=>{t.d(n,{a$:()=>c,kv:()=>_,pH:()=>u});var o=t(643913),r=t(966113),i=t(584595),a=t(6637);const s=({path:e,data:n,unauthId:t})=>{const a=e=>{const n=new Error(e.statusText);throw n.response=e,!n.api_error_code&&n.response&&(n.api_error_code=n.response.code,n.message=n.response.message),n};return fetch(`${r.Z.settings.ACCOUNTS_PINTEREST_URL}/v3/${e}/handshake/`,{credentials:"include",mode:"cors",method:"POST",body:(0,o.Z)(n),headers:{"Content-type":"application/x-www-form-urlencoded; charset=UTF-8","X-Pinterest-InstallId":t}}).then((e=>200===e.status||401===e.status||409===e.status?e:(a(e),{}))).then((e=>e.json())).then((e=>"success"===e.status?Promise.resolve(e):e.code===i.Zn?(e.api_error_code=e.code,Promise.reject(e)):(a(e),{}))).catch((e=>{throw e}))},_=(e,n=!1)=>a.Z.create("HandshakeSessionResource",{token:e,isRegistration:n}).callCreate(),c=(e,{facebookToken:n,inviteCode:t,locale:o,referrer:r,unauthId:i})=>{const a=(e.business_name?"partner":(e.gplus_code||e.gplus_id_token)&&"gplus")||e.facebook_id&&"facebook"||"email";let _={email:e.email||"",username:e.username||"",password:e.password||"",first_name:e.first_name||"",last_name:e.last_name||"",country:e.country||"",locale:o,referrer:r};const{age:c}=e;if(c){const e=new Date;e.setFullYear(e.getFullYear()-c),_={..._,birthday:parseInt(e/1e3,10).toString()}}return e.birthday&&(_={..._,birthday:e.birthday}),e.custom_gender&&(_={..._,custom_gender:e.custom_gender}),e.gender&&(_={..._,gender:e.gender}),e.business_name&&(_={..._,business_name:e.business_name,first_name:e.business_name}),t&&(_={..._,invite_code:t}),e.facebook_id?_={..._,facebook_id:e.facebook_id,facebook_token:n||e.facebook_token||"",social_username:""}:(e.gplus_code||e.gplus_id_token)&&(_={..._,password:e.password||"",one_time_code:e.gplus_code,id_token:e.gplus_id_token,redirect_uri:e.gplus_redirect_uri}),e.recaptchaV3Token&&(_={..._,recaptcha_v3_token:e.recaptchaV3Token}),s({path:`register/${a}`,data:_,unauthId:i})},u=(e,{facebookToken:n,recaptchaV3Token:t,referrer:o,unauthId:r})=>{const i=(e.mfa_token?"login/mfa":e.gplus_id_token&&"login/gplus")||e.facebook_id&&"login/facebook"||"login";let a=Object.freeze({});return e.username_or_email&&(a={...a,username_or_email:e.username_or_email.trim(),password:e.password,referrer:o}),e.facebook_id&&(a={...a,facebook_id:e.facebook_id,facebook_token:n||e.facebook_token||"",facebook_autologin:e.facebook_autologin||!1}),e.gplus_id_token&&(a={...a,gplus_id_token:e.gplus_id_token,gplus_access_token:e.gplus_access_token,gplus_expires_at:e.gplus_expires_at,gplus_autologin:e.gplus_autologin||!1}),e.mfa_token&&(a={...a,mfa_token:e.mfa_token}),t&&(a={...a,token:t}),s({path:i,data:a,unauthId:r})}},120767:(e,n,t)=>{t.d(n,{Z:()=>I});var o=t(667294),r=t(231486),i=t(6637),a=t(966113),s=t(584595),_=t(330102),c=t(290148),u=t(81759),l=t(817656),g=t(532975),d=t(487116),p=t(995146),h=t(539497),f=t(226198);const w=e=>!!(e.facebook_autologin||e.gplus_autologin||e.autologin),k=function(e,n,t,o,r="",i="",a="",s=""){let c="referrer_unknown";try{const e=document.referrer;c=e?e.indexOf("/t.co/")>-1?"twitter":e.indexOf("google.")>-1?"google":e.indexOf("bing.")>-1?"bing":e.indexOf("facebook.")>-1?"facebook":"other":"direct"}catch(d){}const u=n===Object(n)?n.container:"container_unknown";(0,h.My)("login.referrer."+c+"."+t),(0,h.My)("login.container."+String(u)+"."+t),(0,h.My)("login.type."+t);const l=t||"method_unknown",g=n.page||"page_unknown";e.gplus_autologin?((0,h.My)("web_autologin_google"),(0,h.My)("new_web_autologin_google",{page:g,referrer:c,container:u})):e.facebook_autologin?((0,h.My)("web_autologin_facebook"),(0,h.My)("new_web_autologin_facebook",{page:g,referrer:c,container:u})):((0,h.My)(`web_login.${l}.success.${g}.${String(u)}.${c}.tier1`),(0,h.My)(`new_web_login.${l}.success`,{page:g,referrer:c,container:u})),(0,_.ko)({country:r,countryFromHostName:i,countryFromIp:a,regionFromIp:s,deviceType:"Desktop",eventCategory:"Logins"}),(0,h.De)({action:o?"autologin":"login",event:"success",trigger:n&&n.trigger,type:t})},m=(e,n)=>{(0,h.My)(`web_cross_domain_login.${e}.${(0,c.eD)(n)}`)},E=(e,n,t,o="other",r=!1)=>{if(e){const i=e.http_status===l.Ej?l.Ej:e.api_error_code;let a=i;s.qF.has(i)&&(a=s.qF.get(i));const{container:_,trigger:c}=n;r?(0,h.My)(`unauth_web_client_cctld_login_api_error.${String(a)}.${_||"unknow_container"}.${o}`):(0,h.My)(`unauth_web_client_login_api_error.${String(a)}.${_||"unknow_container"}.${o}`),(0,h.De)({action:t?"autologin":"login",event:"fail",trigger:c,type:o})}},R=function(e,n,t){w(e)&&(0,h.dy)({event:n,provider:t})},O=({creds:e,loginContext:n,loggingData:t=Object.freeze({}),isAccountSwitch:o=!1,recaptchaV2Token:s,recaptchaV3Token:_})=>{const l=w(e),O=(0,c.eD)(e);if((0,h.De)({action:l?"autologin":"login",event:"attempt",trigger:t.trigger,type:O}),function(e){return!e.mfa_resend&&!!e.username_or_email}(e)){const o=a.Z.settings.CORS_HANDSHAKE_DOMAINS;if(n&&-1!==o.indexOf(n.origin))return function({creds:e,recaptchaV3Token:n,isAutologin:t,loggingData:o,loginContext:r,type:i}){m("attempt",e);const{referrer:a,facebookToken:s,unauthId:_}=r;return(0,p.pH)(e,{recaptchaV3Token:n,referrer:a,facebookToken:s,unauthId:_}).then((n=>{const r=n&&n.data;if(r)return m("success_with_token",e),(0,p.kv)(r).then((n=>(m("success_token_exchanged",e),k(e,o,i,t),Promise.resolve())),(n=>{throw m("success_token_not_exchanged",e),n}));throw m("success_without_token",e),new Error}),(n=>{throw m("failure",e),E(n,o,t,i,!0),n}))}({creds:e,recaptchaV3Token:_,isAutologin:l,loggingData:t,loginContext:n,type:O})}const b=e.google_open_id_token?"google":"facebook";R(e,"login_api_call_start",b);const A=(0,u.t_)(),I={...e,get_user:e.get_user||e.switch_account&&o,app_type_from_client:7===n.appType?7:5,visited_pages_before_login:A||null,recaptchaV2Token:s,recaptchaV3Token:_};return i.Z.create("UserSessionResource",I).callCreate({showError:!1,async:!0}).then((n=>{const{client_context:o}=n||{},{country:i,country_from_hostname:a,country_from_ip:s,region_from_ip:_}=o||{};return k(e,t,O,l,i,a,s,_),R(e,"login_api_call_success",b),(0,g.B)(!1),r.zN(f.e7.name),r.zN(f.x3.name),(0,d.D)("login").then((()=>n))}),(n=>(E(n,t,l,O),R(e,"login_api_call_failure",b),Promise.reject(n))))};var b=t(383690),A=t(283943);const I=()=>{const e=(0,A.hq)(),n=(0,b.Z)();return(0,o.useCallback)((({creds:t,...o})=>(n(),O({...o,creds:t,loginContext:e}))),[e,n])}},532975:(e,n,t)=>{t.d(n,{B:()=>i,a:()=>r});var o=t(704177);const r=()=>o.ZP.localStorage.getItem("uoiou")||!1,i=e=>{o.ZP.localStorage.setItem("uoiou",!!e)}},411938:(e,n,t)=>{t.d(n,{Z:()=>o});function o(e,n,t=28){if(!(e||{}).resurrection_info&&!(n||{}).resurrectionInfo)return!1;let o;o=n?((n||{}).resurrectionInfo||{}).resurrectionDate:((e||{}).resurrection_info||{}).resurrection_dt;const r=new Date,i=o?new Date(o):r;return i.setDate(i.getDate()+t),(new Date).getTime()<i.getTime()}},283943:(e,n,t)=>{t.d(n,{aU:()=>s,hq:()=>a,o_:()=>r});var o=t(425288);const{Provider:r,useHook:i}=(0,o.Z)("AuthenticationContext");function a(){return i().loginContext}function s(){return i().logout}},584595:(e,n,t)=>{t.d(n,{$j:()=>P,Cx:()=>x,D4:()=>T,E:()=>_,E6:()=>I,H9:()=>U,Jt:()=>C,Jw:()=>i,LJ:()=>Z,NF:()=>s,OW:()=>u,Pv:()=>v,RL:()=>R,ZP:()=>B,Zn:()=>b,_K:()=>p,aG:()=>d,an:()=>N,at:()=>L,bd:()=>c,cZ:()=>l,dO:()=>g,hU:()=>f,iK:()=>m,iZ:()=>y,ky:()=>M,lg:()=>h,nY:()=>k,nf:()=>E,oP:()=>w,pH:()=>o,qF:()=>V,rM:()=>D,rm:()=>S,tL:()=>a,tz:()=>r,xN:()=>A,yV:()=>O});const o=101,r=93,i=117,a=116,s=111,_=118,c=9,u=8,l=16,g=12,d=3,p=18,h=105,f=79,w=78,k=77,m=76,E=1402,R=85,O=88,b=1201,A=30,I=84,N=83,S=2901,T=2904,D=2905,y=95,P=19,v=113,L=91,C=2501,M=2915,Z=2986,U=3050,x=[u,c],V=new Map([[1,"INVALID_PARAMETERS"],[100,"INVALID_NETWORK_ACCESS_TOKEN"],[h,"FACEBOOK_ACCOUNT_NOT_LINKED"],[g,"API_SERVER_ERROR"],[1202,"LOGIN_MFA_TOKEN_INVALID"],[1203,"MFA_CONNECTION_ERROR"],[13,"API_DOWN"],[181,"GPLUS_CONNECTION_ERROR"],[14,"API_SERVER_SPAM_CONTENT"],[l,"API_REQUEST_TIMEOUT"],[50,"API_ERROR_PIN_NOT_FOUND"],[k,"INVALID_PASSWORD_FB_USER"],[w,"INVALID_PASSWORD_ERROR_CODE"],[f,"INVALID_EMAIL_ERROR_CODE"],[80,"INVALID_EMAIL_OR_PASSWORD"],[82,"LOGIN_DEACTIVATED_USER"],[N,"LOGIN_POLICY_VIOLATION_USER"],[R,"AUTO_PASSWORD_RESET_ERROR_CODE"],[86,"LOGIN_PANICKED_USER"],[87,"LOGIN_SOFT_BANNED_USER"],[r,"API_ERROR_UNDERAGE_REGISTER_ATTEMPT"],[a,"API_ERROR_OVERAGE_REGISTER_ATTEMPT"],[99,"LOGIN_PASSWORD_NOT_CREATED"],[u,"API_LIMIT_EXCEEDED_ERROR"],[c,"API_EVENT_BLOCKED_ERROR"],[P,"USER_IN_SAFE_MODE"],[I,"LOGIN_VOLUNTARILY_DEACTIVATED_USER"],[R,"LOGIN_BAD_PASSWORD_ASK_RESET"],[b,"LOGIN_MFA_REQUIRED"],[A,"LOGIN_USER_NOT_FOUND"],[O,"LOGIN_HARD_BANNED_USER"],[429,"RESPONSE_CODE_TOO_MANY_REQUESTS"],[S,"SAR_DOWNLOAD_LIMIT"],[T,"SAR_EMAIL_UNVERIFIED"],[D,"SAR_EMAIL_MISSING"]]),B=[u,c,P,N,R,O]},383690:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(667294),r=t(773285);const i=()=>{const e=(0,r.F)();return(0,o.useCallback)((()=>{e.flush()}),[e])}},817656:(e,n,t)=>{t.d(n,{AB:()=>o,Ej:()=>r,Sf:()=>i});const o=412,r=429,i=500},487116:(e,n,t)=>{t.d(n,{D:()=>a,N:()=>i});var o=t(172071);const r=.1;async function i(){const e=navigator.serviceWorker;if(o.Z.increment("web_service_worker.update",r),e&&e.getRegistration){const t=await e.getRegistration();if(!t)return o.Z.increment("web_service_worker.update.registration.not_exist",r),await async function(){const e=navigator.serviceWorker;if(o.Z.increment("web_service_worker.install",r),e&&e.register)try{const n=await e.register("/sw.js");return o.Z.increment("web_service_worker.install.success",r),n}catch(n){throw o.Z.increment("web_service_worker.install.error",r),n}}();o.Z.increment("web_service_worker.update.registration.exist",r);try{return await t.update(),o.Z.increment("web_service_worker.update.success",r),t}catch(n){throw o.Z.increment("web_service_worker.update.fail",r),n}}}async function a(e){const n=navigator.serviceWorker;if(o.Z.increment("web_service_worker.unregister",r,{source:e||"unknown"}),n&&n.getRegistration)try{const t=await n.getRegistration();t?(o.Z.increment("web_service_worker.unregister.registration.exist",r,{source:e||"unknown"}),await t.unregister(),o.Z.increment("web_service_worker.unregister.success",r,{source:e||"unknown"}),async function(e){const n=navigator.serviceWorker;if(o.Z.increment("web_service_worker.clear_app_shell",r,{source:e||"unknown"}),n&&window.caches){const n=(await window.caches.keys()).find((e=>e.startsWith("workbox-precaching")));n?(o.Z.increment("web_service_worker.clear_app_shell.precache.exist",r,{source:e||"unknown"}),(await window.caches.open(n)).delete("/sw-shell.html"),o.Z.increment("web_service_worker.clear_app_shell.delete",r,{source:e||"unknown"})):o.Z.increment("web_service_worker.clear_app_shell.precache.not_exist",r,{source:e})}}(e)):o.Z.increment("web_service_worker.unregister.registration.not_exist",r,{source:e||"unknown"})}catch(t){o.Z.increment("web_service_worker.unregister.fail",r,{source:e||"unknown"})}}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/71176-e10c41e67263da7e.mjs.map