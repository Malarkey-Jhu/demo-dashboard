"use strict";(self.webpackChunkalluxio_dashboard=self.webpackChunkalluxio_dashboard||[]).push([[986],{17104:function(k,P,n){n.d(P,{n:function(){return K}});var o=n(959),g=n(97382),E=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,u=function(e){return e==="*"||e==="x"||e==="X"},y=function(e){var t=parseInt(e,10);return isNaN(t)?e:t},B=function(e,t){return(0,g.Z)(e)!==(0,g.Z)(t)?[String(e),String(t)]:[e,t]},z=function(e,t){if(u(e)||u(t))return 0;var r=B(y(e),y(t)),s=(0,o.Z)(r,2),a=s[0],d=s[1];return a>d?1:a<d?-1:0},j=function(e,t){for(var r=0;r<Math.max(e.length,t.length);r++){var s=z(e[r]||"0",t[r]||"0");if(s!==0)return s}return 0},T=function(e){var t,r=e.match(E);return r==null||(t=r.shift)===null||t===void 0||t.call(r),r},K=function(e,t){var r=T(e),s=T(t),a=r.pop(),d=s.pop(),C=j(r,s);return C!==0?C:a||d?a?-1:1:0}},47390:function(k,P,n){n.d(P,{Z:function(){return o}});const o=g=>g?typeof g=="function"?g():g:null},23229:function(k,P,n){n.d(P,{C:function(){return pe}});var o=n(50959),g=n(82187),E=n.n(g),u=n(28033),y=n(38152),B=n(54814),z=n(76144),j=n(15676),T=n(9454),i=o.createContext({}),e=n(601),t=n(54531),r=n(79349),s=n(56352);const a=l=>{const{antCls:m,componentCls:v,iconCls:c,avatarBg:h,avatarColor:Y,containerSize:N,containerSizeLG:_,containerSizeSM:U,textFontSize:b,textFontSizeLG:H,textFontSizeSM:re,borderRadius:R,borderRadiusLG:W,borderRadiusSM:V,lineWidth:w,lineType:q,calc:J}=l,Z=($,ee,M)=>({width:$,height:$,lineHeight:(0,e.bf)(J($).sub(J(w).mul(2)).equal()),borderRadius:"50%",[`&${v}-square`]:{borderRadius:M},[`${v}-string`]:{position:"absolute",left:{_skip_check_:!0,value:"50%"},transformOrigin:"0 center"},[`&${v}-icon`]:{fontSize:ee,[`> ${c}`]:{margin:0}}});return{[v]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,t.Wf)(l)),{position:"relative",display:"inline-block",overflow:"hidden",color:Y,whiteSpace:"nowrap",textAlign:"center",verticalAlign:"middle",background:h,border:`${(0,e.bf)(w)} ${q} transparent`,["&-image"]:{background:"transparent"},[`${m}-image-img`]:{display:"block"}}),Z(N,b,R)),{["&-lg"]:Object.assign({},Z(_,H,W)),["&-sm"]:Object.assign({},Z(U,re,V)),"> img":{display:"block",width:"100%",height:"100%",objectFit:"cover"}})}},d=l=>{const{componentCls:m,groupBorderColor:v,groupOverlapping:c,groupSpace:h}=l;return{[`${m}-group`]:{display:"inline-flex",[`${m}`]:{borderColor:v},["> *:not(:first-child)"]:{marginInlineStart:c}},[`${m}-group-popover`]:{[`${m} + ${m}`]:{marginInlineStart:h}}}},C=l=>{const{controlHeight:m,controlHeightLG:v,controlHeightSM:c,fontSize:h,fontSizeLG:Y,fontSizeXL:N,fontSizeHeading3:_,marginXS:U,marginXXS:b,colorBorderBg:H}=l;return{containerSize:m,containerSizeLG:v,containerSizeSM:c,textFontSize:Math.round((Y+N)/2),textFontSizeLG:_,textFontSizeSM:h,groupSpace:b,groupOverlapping:-U,groupBorderColor:H}};var S=(0,r.I$)("Avatar",l=>{const{colorTextLightSolid:m,colorTextPlaceholder:v}=l,c=(0,s.TS)(l,{avatarBg:v,avatarColor:m});return[a(c),d(c)]},C),x=n(18668),F=function(l,m){var v={};for(var c in l)Object.prototype.hasOwnProperty.call(l,c)&&m.indexOf(c)<0&&(v[c]=l[c]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,c=Object.getOwnPropertySymbols(l);h<c.length;h++)m.indexOf(c[h])<0&&Object.prototype.propertyIsEnumerable.call(l,c[h])&&(v[c[h]]=l[c[h]]);return v};const X=(l,m)=>{const[v,c]=o.useState(1),[h,Y]=o.useState(!1),[N,_]=o.useState(!0),U=o.useRef(null),b=o.useRef(null),H=(0,y.sQ)(m,U),{getPrefixCls:re,avatar:R}=o.useContext(z.E_),W=o.useContext(i),V=()=>{if(!b.current||!U.current)return;const p=b.current.offsetWidth,f=U.current.offsetWidth;if(p!==0&&f!==0){const{gap:D=4}=l;D*2<f&&c(f-D*2<p?(f-D*2)/p:1)}};o.useEffect(()=>{Y(!0)},[]),o.useEffect(()=>{_(!0),c(1)},[l.src]),o.useEffect(V,[l.gap]);const w=()=>{const{onError:p}=l;(p==null?void 0:p())!==!1&&_(!1)},{prefixCls:q,shape:J,size:Z,src:$,srcSet:ee,icon:M,className:oe,rootClassName:te,alt:ae,draggable:he,children:ue,crossOrigin:Ee}=l,ie=F(l,["prefixCls","shape","size","src","srcSet","icon","className","rootClassName","alt","draggable","children","crossOrigin"]),O=(0,j.Z)(p=>{var f,D;return(D=(f=Z!=null?Z:W==null?void 0:W.size)!==null&&f!==void 0?f:p)!==null&&D!==void 0?D:"default"}),Ce=Object.keys(typeof O=="object"?O||{}:{}).some(p=>["xs","sm","md","lg","xl","xxl"].includes(p)),me=(0,T.Z)(Ce),Oe=o.useMemo(()=>{if(typeof O!="object")return{};const p=B.c4.find(D=>me[D]),f=O[p];return f?{width:f,height:f,lineHeight:`${f}px`,fontSize:f&&(M||ue)?f/2:18}:{}},[me,O]),A=re("avatar",q),ge=(0,x.Z)(A),[Pe,ye,Se]=S(A,ge),xe=E()({[`${A}-lg`]:O==="large",[`${A}-sm`]:O==="small"}),fe=o.isValidElement($),_e=J||(W==null?void 0:W.shape)||"circle",Me=E()(A,xe,R==null?void 0:R.className,`${A}-${_e}`,{[`${A}-image`]:fe||$&&N,[`${A}-icon`]:!!M},Se,ge,oe,te,ye),be=typeof O=="number"?{width:O,height:O,lineHeight:`${O}px`,fontSize:M?O/2:18}:{};let ne;if(typeof $=="string"&&N)ne=o.createElement("img",{src:$,draggable:he,srcSet:ee,onError:w,alt:ae,crossOrigin:Ee});else if(fe)ne=$;else if(M)ne=M;else if(h||v!==1){const p=`scale(${v}) translateX(-50%)`,f={msTransform:p,WebkitTransform:p,transform:p},D=typeof O=="number"?{lineHeight:`${O}px`}:{};ne=o.createElement(u.Z,{onResize:V},o.createElement("span",{className:`${A}-string`,ref:b,style:Object.assign(Object.assign({},D),f)},ue))}else ne=o.createElement("span",{className:`${A}-string`,style:{opacity:0},ref:b},ue);return delete ie.onError,delete ie.gap,Pe(o.createElement("span",Object.assign({},ie,{style:Object.assign(Object.assign(Object.assign(Object.assign({},be),Oe),R==null?void 0:R.style),ie.style),className:Me,ref:H}),ne))};var L=o.forwardRef(X),G=n(40253),I=n(25666),ce=n(11493);const se=l=>{const{size:m,shape:v}=o.useContext(i),c=o.useMemo(()=>({size:l.size||m,shape:l.shape||v}),[l.size,l.shape,m,v]);return o.createElement(i.Provider,{value:c},l.children)};var de=l=>{const{getPrefixCls:m,direction:v}=o.useContext(z.E_),{prefixCls:c,className:h,rootClassName:Y,style:N,maxCount:_,maxStyle:U,size:b,shape:H,maxPopoverPlacement:re="top",maxPopoverTrigger:R="hover",children:W}=l,V=m("avatar",c),w=`${V}-group`,q=(0,x.Z)(V),[J,Z,$]=S(V,q),ee=E()(w,{[`${w}-rtl`]:v==="rtl"},$,q,h,Y,Z),M=(0,G.Z)(W).map((te,ae)=>(0,ce.Tm)(te,{key:`avatar-key-${ae}`})),oe=M.length;if(_&&_<oe){const te=M.slice(0,_),ae=M.slice(_,oe);return te.push(o.createElement(I.Z,{key:"avatar-popover-key",content:ae,trigger:R,placement:re,overlayClassName:`${w}-popover`},o.createElement(L,{style:U},`+${oe-_}`))),J(o.createElement(se,{shape:H,size:b},o.createElement("div",{className:ee,style:N},te)))}return J(o.createElement(se,{shape:H,size:b},o.createElement("div",{className:ee,style:N},M)))};const le=L;le.Group=de;var pe=le},58484:function(k,P,n){var o=n(82187),g=n.n(o),E=n(3846),u=n(50959),y=n(76144),B=n(47390),z=n(25115),j=function(e,t){var r={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(r[s[a]]=e[s[a]]);return r};const T=(e,t,r)=>{if(!(!t&&!r))return u.createElement(u.Fragment,null,t&&u.createElement("div",{className:`${e}-title`},(0,B.Z)(t)),u.createElement("div",{className:`${e}-inner-content`},(0,B.Z)(r)))},K=e=>{const{hashId:t,prefixCls:r,className:s,style:a,placement:d="top",title:C,content:S,children:x}=e;return u.createElement("div",{className:g()(t,r,`${r}-pure`,`${r}-placement-${d}`,s),style:a},u.createElement("div",{className:`${r}-arrow`}),u.createElement(E.G,Object.assign({},e,{className:t,prefixCls:r}),x||T(r,C,S)))},i=e=>{const{prefixCls:t,className:r}=e,s=j(e,["prefixCls","className"]),{getPrefixCls:a}=u.useContext(y.E_),d=a("popover",t),[C,S,x]=(0,z.Z)(d);return C(u.createElement(K,Object.assign({},s,{prefixCls:d,hashId:S,className:g()(r,x)})))};P.ZP=i},25666:function(k,P,n){var o=n(50959),g=n(82187),E=n.n(g),u=n(47390),y=n(74435),B=n(76144),z=n(38546),j=n(58484),T=n(25115),K=function(t,r){var s={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&r.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(t);d<a.length;d++)r.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(t,a[d])&&(s[a[d]]=t[a[d]]);return s};const i=t=>{let{title:r,content:s,prefixCls:a}=t;return o.createElement(o.Fragment,null,r&&o.createElement("div",{className:`${a}-title`},(0,u.Z)(r)),o.createElement("div",{className:`${a}-inner-content`},(0,u.Z)(s)))},e=o.forwardRef((t,r)=>{const{prefixCls:s,title:a,content:d,overlayClassName:C,placement:S="top",trigger:x="hover",mouseEnterDelay:F=.1,mouseLeaveDelay:X=.1,overlayStyle:Q={}}=t,L=K(t,["prefixCls","title","content","overlayClassName","placement","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle"]),{getPrefixCls:G}=o.useContext(B.E_),I=G("popover",s),[ce,se,ve]=(0,T.Z)(I),de=G(),le=E()(C,se,ve);return ce(o.createElement(z.Z,Object.assign({placement:S,trigger:x,mouseEnterDelay:F,mouseLeaveDelay:X,overlayStyle:Q},L,{prefixCls:I,overlayClassName:le,ref:r,overlay:a||d?o.createElement(i,{prefixCls:I,title:a,content:d}):null,transitionName:(0,y.m)(de,"zoom-big",L.transitionName),"data-popover-inject":!0})))});e._InternalPanelDoNotUseOrYouWillBeFired=j.ZP,P.Z=e},25115:function(k,P,n){var o=n(54531),g=n(36109),E=n(57134),u=n(91899),y=n(79349),B=n(56352),z=n(9280);const j=i=>{const{componentCls:e,popoverColor:t,titleMinWidth:r,fontWeightStrong:s,innerPadding:a,boxShadowSecondary:d,colorTextHeading:C,borderRadiusLG:S,zIndexPopup:x,titleMarginBottom:F,colorBgElevated:X,popoverBg:Q,titleBorderBottom:L,innerContentPadding:G,titlePadding:I}=i;return[{[e]:Object.assign(Object.assign({},(0,o.Wf)(i)),{position:"absolute",top:0,left:{_skip_check_:!0,value:0},zIndex:x,fontWeight:"normal",whiteSpace:"normal",textAlign:"start",cursor:"auto",userSelect:"text",transformOrigin:"var(--arrow-x, 50%) var(--arrow-y, 50%)","--antd-arrow-background-color":X,"&-rtl":{direction:"rtl"},"&-hidden":{display:"none"},[`${e}-content`]:{position:"relative"},[`${e}-inner`]:{backgroundColor:Q,backgroundClip:"padding-box",borderRadius:S,boxShadow:d,padding:a},[`${e}-title`]:{minWidth:r,marginBottom:F,color:C,fontWeight:s,borderBottom:L,padding:I},[`${e}-inner-content`]:{color:t,padding:G}})},(0,E.ZP)(i,"var(--antd-arrow-background-color)"),{[`${e}-pure`]:{position:"relative",maxWidth:"none",margin:i.sizePopupArrow,display:"inline-block",[`${e}-content`]:{display:"inline-block"}}}]},T=i=>{const{componentCls:e}=i;return{[e]:u.i.map(t=>{const r=i[`${t}6`];return{[`&${e}-${t}`]:{"--antd-arrow-background-color":r,[`${e}-inner`]:{backgroundColor:r},[`${e}-arrow`]:{background:"transparent"}}}})}},K=i=>{const{lineWidth:e,controlHeight:t,fontHeight:r,padding:s,wireframe:a,zIndexPopupBase:d,borderRadiusLG:C,marginXS:S,lineType:x,colorSplit:F,paddingSM:X}=i,Q=t-r,L=Q/2,G=Q/2-e,I=s;return Object.assign(Object.assign(Object.assign({titleMinWidth:177,zIndexPopup:d+30},(0,z.w)(i)),(0,E.wZ)({contentRadius:C,limitVerticalRadius:!0})),{innerPadding:a?0:12,titleMarginBottom:a?0:S,titlePadding:a?`${L}px ${I}px ${G}px`:0,titleBorderBottom:a?`${e}px ${x} ${F}`:"none",innerContentPadding:a?`${X}px ${I}px`:0})};P.Z=(0,y.I$)("Popover",i=>{const{colorBgElevated:e,colorText:t}=i,r=(0,B.TS)(i,{popoverBg:e,popoverColor:t});return[j(r),T(r),(0,g._y)(r,"zoom-big")]},K,{resetStyle:!1,deprecatedTokens:[["width","titleMinWidth"],["minWidth","titleMinWidth"]]})},71770:function(k,P){function n(o,g){for(var E=Object.assign({},o),u=0;u<g.length;u+=1){var y=g[u];delete E[y]}return E}P.Z=n}}]);
