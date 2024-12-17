"use strict";(self.webpackChunkalluxio_dashboard=self.webpackChunkalluxio_dashboard||[]).push([[37],{23725:function(hn,G,o){o.r(G),o.d(G,{default:function(){return un}});var te=o(90228),B=o.n(te),oe=o(26068),H=o.n(oe),re=o(87999),R=o.n(re),ae=o(48305),se=o.n(ae),le=o(9863),ie=o(32259),ce=o(42956),x=o(35361),i=o(50959),de={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM332 240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224H332V240zm460 600H232V536h560v304zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 10-56 0z"}}]},name:"lock",theme:"outlined"},ue=de,ge=o(92260),X=function(e,n){return i.createElement(ge.Z,(0,x.Z)((0,x.Z)({},e),{},{ref:n,icon:ue}))};X.displayName="LockOutlined";var me=i.forwardRef(X),A=o(56929),fe=o(38292),ve=o(96558),pe=o(82187),O=o.n(pe),he=o(49547),W=o(88357),xe=o(69601),ye=function(e){var n;return n={},(0,W.Z)(n,e.componentCls,{"&-container":{display:"flex",flex:"1",flexDirection:"column",height:"100%",paddingInline:32,paddingBlock:24,overflow:"auto",background:"inherit"},"&-top":{textAlign:"center"},"&-header":{display:"flex",alignItems:"center",justifyContent:"center",height:"44px",lineHeight:"44px",a:{textDecoration:"none"}},"&-title":{position:"relative",insetBlockStart:"2px",color:"@heading-color",fontWeight:"600",fontSize:"33px"},"&-logo":{width:"44px",height:"44px",marginInlineEnd:"16px",verticalAlign:"top",img:{width:"100%"}},"&-desc":{marginBlockStart:"12px",marginBlockEnd:"40px",color:e.colorTextSecondary,fontSize:e.fontSize},"&-main":{minWidth:"328px",maxWidth:"580px",margin:"0 auto","&-other":{marginBlockStart:"24px",lineHeight:"22px",textAlign:"start"}}}),(0,W.Z)(n,"@media (min-width: @screen-md-min)",(0,W.Z)({},"".concat(e.componentCls,"-container"),{paddingInline:0,paddingBlockStart:32,paddingBlockEnd:24,backgroundRepeat:"no-repeat",backgroundPosition:"center 110px",backgroundSize:"100%"})),n};function Se(t){return(0,xe.Xj)("LoginForm",function(e){var n=(0,x.Z)((0,x.Z)({},e),{},{componentCls:".".concat(t)});return[ye(n)]})}var s=o(11527),Ce=["logo","message","contentStyle","title","subTitle","actions","children","containerStyle","otherStyle"];function Pe(t){var e,n=t.logo,r=t.message,a=t.contentStyle,c=t.title,d=t.subTitle,f=t.actions,u=t.children,g=t.containerStyle,m=t.otherStyle,l=(0,A.Z)(t,Ce),$=(0,fe.YB)(),I=l.submitter===!1?!1:(0,x.Z)((0,x.Z)({searchConfig:{submitText:$.getMessage("loginForm.submitText","\u767B\u5F55")}},l.submitter),{},{submitButtonProps:(0,x.Z)({size:"large",style:{width:"100%"}},(e=l.submitter)===null||e===void 0?void 0:e.submitButtonProps),render:function(v,M){var h,V=M.pop();if(typeof(l==null||(h=l.submitter)===null||h===void 0?void 0:h.render)=="function"){var T,L;return l==null||(T=l.submitter)===null||T===void 0||(L=T.render)===null||L===void 0?void 0:L.call(T,v,M)}return V}}),j=(0,i.useContext)(ve.ZP.ConfigContext),y=j.getPrefixCls("pro-form-login"),C=Se(y),P=C.wrapSSR,S=C.hashId,p=function(v){return"".concat(y,"-").concat(v," ").concat(S)},Z=(0,i.useMemo)(function(){return n?typeof n=="string"?(0,s.jsx)("img",{src:n}):n:null},[n]);return P((0,s.jsxs)("div",{className:O()(p("container"),S),style:g,children:[(0,s.jsxs)("div",{className:"".concat(p("top")," ").concat(S).trim(),children:[c||Z?(0,s.jsxs)("div",{className:"".concat(p("header")),children:[Z?(0,s.jsx)("span",{className:p("logo"),children:Z}):null,c?(0,s.jsx)("span",{className:p("title"),children:c}):null]}):null,d?(0,s.jsx)("div",{className:p("desc"),children:d}):null]}),(0,s.jsxs)("div",{className:p("main"),style:(0,x.Z)({width:328},a),children:[(0,s.jsxs)(he.A,(0,x.Z)((0,x.Z)({isKeyPressSubmit:!0},l),{},{submitter:I,children:[r,u]})),f?(0,s.jsx)("div",{className:p("main-other"),style:m,children:f}):null]})]}))}var K=o(959),je=o(3691),$e=o(50925),Ie=o(25666),Ze=o(71770),D=o(628),Me=["fieldProps","proFieldProps"],be=["fieldProps","proFieldProps"],F="text",Be=function(e){var n=e.fieldProps,r=e.proFieldProps,a=(0,A.Z)(e,Me);return(0,s.jsx)(D.Z,(0,x.Z)({valueType:F,fieldProps:n,filedConfig:{valueType:F},proFieldProps:r},a))},Te=function(e){var n=(0,je.Z)(e.open||!1,{value:e.open,onChange:e.onOpenChange}),r=(0,K.Z)(n,2),a=r[0],c=r[1];return(0,s.jsx)($e.Z.Item,{shouldUpdate:!0,noStyle:!0,children:function(f){var u,g=f.getFieldValue(e.name||[]);return(0,s.jsx)(Ie.Z,(0,x.Z)((0,x.Z)({getPopupContainer:function(l){return l&&l.parentNode?l.parentNode:l},onOpenChange:c,content:(0,s.jsxs)("div",{style:{padding:"4px 0"},children:[(u=e.statusRender)===null||u===void 0?void 0:u.call(e,g),e.strengthText?(0,s.jsx)("div",{style:{marginTop:10},children:(0,s.jsx)("span",{children:e.strengthText})}):null]}),overlayStyle:{width:240},placement:"right"},e.popoverProps),{},{open:a,children:e.children}))}})},Le=function(e){var n=e.fieldProps,r=e.proFieldProps,a=(0,A.Z)(e,be),c=(0,i.useState)(!1),d=(0,K.Z)(c,2),f=d[0],u=d[1];return n!=null&&n.statusRender&&a.name?(0,s.jsx)(Te,{name:a.name,statusRender:n==null?void 0:n.statusRender,popoverProps:n==null?void 0:n.popoverProps,strengthText:n==null?void 0:n.strengthText,open:f,onOpenChange:u,children:(0,s.jsx)(D.Z,(0,x.Z)({valueType:"password",fieldProps:(0,x.Z)((0,x.Z)({},(0,Ze.Z)(n,["statusRender","popoverProps","strengthText"])),{},{onBlur:function(m){var l;n==null||(l=n.onBlur)===null||l===void 0||l.call(n,m),u(!1)},onClick:function(m){var l;n==null||(l=n.onClick)===null||l===void 0||l.call(n,m),u(!0)}}),proFieldProps:r,filedConfig:{valueType:F}},a))}):(0,s.jsx)(D.Z,(0,x.Z)({valueType:"password",fieldProps:n,proFieldProps:r,filedConfig:{valueType:F}},a))},U=Be;U.Password=Le,U.displayName="ProFormComponent";var Y=U,b=o(72518),Ne=o(22471),Ee=o(19644),Oe=o(20819),Fe=o(26032),ze=o(11387),we=o(57026),He=o(98808),Re=o(11493),Ae=o(76144),k=o(601),We=o(54531),De=o(79349);const z=(t,e,n,r,a)=>({background:t,border:`${(0,k.bf)(r.lineWidth)} ${r.lineType} ${e}`,[`${a}-icon`]:{color:n}}),Ue=t=>{const{componentCls:e,motionDurationSlow:n,marginXS:r,marginSM:a,fontSize:c,fontSizeLG:d,lineHeight:f,borderRadiusLG:u,motionEaseInOutCirc:g,withDescriptionIconSize:m,colorText:l,colorTextHeading:$,withDescriptionPadding:I,defaultPadding:j}=t;return{[e]:Object.assign(Object.assign({},(0,We.Wf)(t)),{position:"relative",display:"flex",alignItems:"center",padding:j,wordWrap:"break-word",borderRadius:u,[`&${e}-rtl`]:{direction:"rtl"},[`${e}-content`]:{flex:1,minWidth:0},[`${e}-icon`]:{marginInlineEnd:r,lineHeight:0},["&-description"]:{display:"none",fontSize:c,lineHeight:f},"&-message":{color:$},[`&${e}-motion-leave`]:{overflow:"hidden",opacity:1,transition:`max-height ${n} ${g}, opacity ${n} ${g},
        padding-top ${n} ${g}, padding-bottom ${n} ${g},
        margin-bottom ${n} ${g}`},[`&${e}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0}}),[`${e}-with-description`]:{alignItems:"flex-start",padding:I,[`${e}-icon`]:{marginInlineEnd:a,fontSize:m,lineHeight:0},[`${e}-message`]:{display:"block",marginBottom:r,color:$,fontSize:d},[`${e}-description`]:{display:"block",color:l}},[`${e}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}},Ve=t=>{const{componentCls:e,colorSuccess:n,colorSuccessBorder:r,colorSuccessBg:a,colorWarning:c,colorWarningBorder:d,colorWarningBg:f,colorError:u,colorErrorBorder:g,colorErrorBg:m,colorInfo:l,colorInfoBorder:$,colorInfoBg:I}=t;return{[e]:{"&-success":z(a,r,n,t,e),"&-info":z(I,$,l,t,e),"&-warning":z(f,d,c,t,e),"&-error":Object.assign(Object.assign({},z(m,g,u,t,e)),{[`${e}-description > pre`]:{margin:0,padding:0}})}}},Ge=t=>{const{componentCls:e,iconCls:n,motionDurationMid:r,marginXS:a,fontSizeIcon:c,colorIcon:d,colorIconHover:f}=t;return{[e]:{["&-action"]:{marginInlineStart:a},[`${e}-close-icon`]:{marginInlineStart:a,padding:0,overflow:"hidden",fontSize:c,lineHeight:(0,k.bf)(c),backgroundColor:"transparent",border:"none",outline:"none",cursor:"pointer",[`${n}-close`]:{color:d,transition:`color ${r}`,"&:hover":{color:f}}},"&-close-text":{color:d,transition:`color ${r}`,"&:hover":{color:f}}}}},Xe=t=>({withDescriptionIconSize:t.fontSizeHeading3,defaultPadding:`${t.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${t.paddingMD}px ${t.paddingContentHorizontalLG}px`});var Ke=(0,De.I$)("Alert",t=>[Ue(t),Ve(t),Ge(t)],Xe),Ye=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]]);return n};const ke={success:Ne.Z,info:ze.Z,error:Ee.Z,warning:Fe.Z},Je=t=>{const{icon:e,prefixCls:n,type:r}=t,a=ke[r]||null;return e?(0,Re.wm)(e,i.createElement("span",{className:`${n}-icon`},e),()=>({className:O()(`${n}-icon`,{[e.props.className]:e.props.className})})):i.createElement(a,{className:`${n}-icon`})},Qe=t=>{const{isClosable:e,prefixCls:n,closeIcon:r,handleClose:a}=t,c=r===!0||r===void 0?i.createElement(Oe.Z,null):r;return e?i.createElement("button",{type:"button",onClick:a,className:`${n}-close-icon`,tabIndex:0},c):null};var J=t=>{const{description:e,prefixCls:n,message:r,banner:a,className:c,rootClassName:d,style:f,onMouseEnter:u,onMouseLeave:g,onClick:m,afterClose:l,showIcon:$,closable:I,closeText:j,closeIcon:y,action:C}=t,P=Ye(t,["description","prefixCls","message","banner","className","rootClassName","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","closeIcon","action"]),[S,p]=i.useState(!1),Z=i.useRef(null),{getPrefixCls:w,direction:v,alert:M}=i.useContext(Ae.E_),h=w("alert",n),[V,T,L]=Ke(h),gn=N=>{var E;p(!0),(E=t.onClose)===null||E===void 0||E.call(t,N)},ee=i.useMemo(()=>t.type!==void 0?t.type:a?"warning":"info",[t.type,a]),mn=i.useMemo(()=>j?!0:typeof I=="boolean"?I:y!==!1&&y!==null&&y!==void 0,[j,y,I]),ne=a&&$===void 0?!0:$,fn=O()(h,`${h}-${ee}`,{[`${h}-with-description`]:!!e,[`${h}-no-icon`]:!ne,[`${h}-banner`]:!!a,[`${h}-rtl`]:v==="rtl"},M==null?void 0:M.className,c,d,L,T),vn=(0,He.Z)(P,{aria:!0,data:!0});return V(i.createElement(we.ZP,{visible:!S,motionName:`${h}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:N=>({maxHeight:N.offsetHeight}),onLeaveEnd:l},N=>{let{className:E,style:pn}=N;return i.createElement("div",Object.assign({ref:Z,"data-show":!S,className:O()(fn,E),style:Object.assign(Object.assign(Object.assign({},M==null?void 0:M.style),f),pn),onMouseEnter:u,onMouseLeave:g,onClick:m,role:"alert"},vn),ne?i.createElement(Je,{description:e,icon:t.icon,prefixCls:h,type:ee}):null,i.createElement("div",{className:`${h}-content`},r?i.createElement("div",{className:`${h}-message`},r):null,e?i.createElement("div",{className:`${h}-description`},e):null),C?i.createElement("div",{className:`${h}-action`},C):null,i.createElement(Qe,{isClosable:mn,prefixCls:h,closeIcon:j||y,handleClose:gn}))}))},qe=o(5952),_e=o(97086),en=o(90242),nn=o(14553),tn=function(t){(0,en.Z)(n,t);var e=(0,nn.Z)(n);function n(){var r;return(0,qe.Z)(this,n),r=e.apply(this,arguments),r.state={error:void 0,info:{componentStack:""}},r}return(0,_e.Z)(n,[{key:"componentDidCatch",value:function(a,c){this.setState({error:a,info:c})}},{key:"render",value:function(){const{message:a,description:c,children:d}=this.props,{error:f,info:u}=this.state,g=u&&u.componentStack?u.componentStack:null,m=typeof a=="undefined"?(f||"").toString():a,l=typeof c=="undefined"?g:c;return f?i.createElement(J,{type:"error",message:m,description:i.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},l)}):d}}]),n}(i.Component);const Q=J;Q.ErrorBoundary=tn;var on=Q,q=o(47698),rn=o(13179),an=o(10422),sn=o(57415),_=(0,rn.kc)(function(t){var e=t.token;return{action:{marginLeft:"8px",color:"rgba(0, 0, 0, 0.2)",fontSize:"24px",verticalAlign:"middle",cursor:"pointer",transition:"color 0.3s","&:hover":{color:e.colorPrimaryActive}},lang:{width:42,height:42,lineHeight:"42px",position:"fixed",right:16,color:e.colorText,borderRadius:e.borderRadius,":hover":{backgroundColor:""}},container:{display:"flex",flexDirection:"column",height:"100vh",overflow:"auto",backgroundColor:e.colorBgBase,backgroundImage:"url(https://cdn.prod.website-files.com/66d9c7ee21a87e61fe5d0e22/66e303a3b89c66d91852392c_pattern%20with%20light.webp)",backgroundPosition:"100% 176%",backgroundRepeat:"no-repeat",position:"relative"},blurOverlay:{position:"absolute",right:0,bottom:0,background:e.colorBgBase,filter:"blur(100px)",zIndex:1,width:500,height:100},logo:{display:"flex",justifyContent:"center",marginBottom:36}}}),ln=function(){var e=_(),n=e.styles;return(0,s.jsx)("div",{className:n.lang,"data-lang":!0,children:b.SelectLang&&(0,s.jsx)(b.SelectLang,{})})},cn=function(e){var n=e.content;return(0,s.jsx)(on,{style:{marginBottom:24},message:n,type:"error",showIcon:!0})},dn=function(){var e=(0,i.useState)({}),n=se()(e,2),r=n[0],a=n[1],c=(0,b.useModel)("@@initialState"),d=c.initialState,f=c.setInitialState,u=_(),g=u.styles,m=(0,b.useIntl)(),l=function(){var j=R()(B()().mark(function y(){var C,P;return B()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,d==null||(C=d.fetchUserInfo)===null||C===void 0?void 0:C.call(d);case 2:P=p.sent,P&&(0,an.flushSync)(function(){f(function(Z){return H()(H()({},Z),{},{currentUser:P})})});case 4:case"end":return p.stop()}},y)}));return function(){return j.apply(this,arguments)}}(),$=function(){var j=R()(B()().mark(function y(C){var P,S,p,Z;return B()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.prev=0,v.next=3,(0,ie.x4)(H()({},C));case 3:if(P=v.sent,P.status!=="ok"){v.next=13;break}return S=m.formatMessage({id:"pages.login.success",defaultMessage:"Login successful!"}),q.ZP.success(S),v.next=9,l();case 9:return p=new URL(window.location.href).searchParams,localStorage.setItem("token",P.token||""),window.location.href=p.get("redirect")||"/",v.abrupt("return");case 13:console.log(P),a(P),v.next=22;break;case 17:v.prev=17,v.t0=v.catch(0),Z=m.formatMessage({id:"pages.login.failure",defaultMessage:"Login failed, please try again!"}),console.log(v.t0),q.ZP.error(Z);case 22:case"end":return v.stop()}},y,null,[[0,17]])}));return function(C){return j.apply(this,arguments)}}(),I=r.status;return(0,s.jsxs)("div",{className:g.container,children:[(0,s.jsx)(b.Helmet,{children:(0,s.jsxs)("title",{children:[m.formatMessage({id:"menu.login",defaultMessage:"Login Page"}),"- ",sn.Z.title]})}),(0,s.jsx)(ln,{}),(0,s.jsx)("div",{className:g.blurOverlay}),(0,s.jsx)("div",{style:{flex:"1",padding:"32px 0"},children:(0,s.jsxs)(Pe,{contentStyle:{minWidth:280,maxWidth:"75vw"},initialValues:{autoLogin:!0},onFinish:function(){var j=R()(B()().mark(function y(C){return B()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,$(C);case 2:case"end":return S.stop()}},y)}));return function(y){return j.apply(this,arguments)}}(),children:[(0,s.jsx)("div",{className:g.logo,children:(0,s.jsx)("img",{style:{width:250,height:"auto"},alt:"logo",src:"/alluxio-logo.svg"})}),I==="error"&&(0,s.jsx)(cn,{content:m.formatMessage({id:"pages.login.accountLogin.errorMessage",defaultMessage:"Wrong username or password (admin/ant.design)"})}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(Y,{name:"username",fieldProps:{size:"large",prefix:(0,s.jsx)(ce.Z,{})},placeholder:m.formatMessage({id:"pages.login.username.placeholder",defaultMessage:"\u7528\u6237\u540D: admin or user"}),rules:[{required:!0,message:(0,s.jsx)(b.FormattedMessage,{id:"pages.login.username.required",defaultMessage:"\u8BF7\u8F93\u5165\u7528\u6237\u540D!"})}]}),(0,s.jsx)(Y.Password,{name:"password",fieldProps:{size:"large",prefix:(0,s.jsx)(me,{})},placeholder:m.formatMessage({id:"pages.login.password.placeholder",defaultMessage:"password: admin"}),rules:[{required:!0,message:(0,s.jsx)(b.FormattedMessage,{id:"pages.login.password.required",defaultMessage:"Please enter your password!"})}]})]})]})}),(0,s.jsx)(le.$_,{})]})},un=dn}}]);
