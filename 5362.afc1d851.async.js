(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5362],{64335:function(O,H,i){"use strict";var I=i(67294),B=(0,I.createContext)({});H.Z=B},85224:function(O,H,i){"use strict";var I=i(22122),B=i(28991),E=i(84305),T=i(69224),U=i(81253),M=i(67294),P=i(94184),j=i.n(P),W=i(97435),r=i(56264),R=i.n(r),w=i(64335),Q=["children","className","extra","style","renderContent"],_=function(D){var K=D.children,k=D.className,$=D.extra,re=D.style,G=D.renderContent,se=(0,U.Z)(D,Q),de=(0,M.useContext)(T.ZP.ConfigContext),fe=de.getPrefixCls,Y=D.prefixCls||fe("pro"),ue="".concat(Y,"-footer-bar"),C=(0,M.useContext)(w.Z),ne=(0,M.useMemo)(function(){var q=C.hasSiderMenu,V=C.isMobile,ee=C.siderWidth;if(!!q)return ee?V?"100%":"calc(100% - ".concat(ee,"px)"):"100%"},[C.collapsed,C.hasSiderMenu,C.isMobile,C.siderWidth]),oe=M.createElement(M.Fragment,null,M.createElement("div",{className:"".concat(ue,"-left")},$),M.createElement("div",{className:"".concat(ue,"-right")},K));return(0,M.useEffect)(function(){return!C||!(C==null?void 0:C.setHasFooterToolbar)?function(){}:(C==null||C.setHasFooterToolbar(!0),function(){var q;C==null||(q=C.setHasFooterToolbar)===null||q===void 0||q.call(C,!1)})},[]),M.createElement("div",(0,I.Z)({className:j()(k,"".concat(ue)),style:(0,B.Z)({width:ne},re)},(0,W.Z)(se,["prefixCls"])),G?G((0,B.Z)((0,B.Z)((0,B.Z)({},D),C),{},{leftWidth:ne}),oe):oe)};H.Z=_},21349:function(O,H,i){"use strict";var I=i(84305),B=i(69224),E=i(53645),T=i.n(E),U=i(67294),M=i(94184),P=i.n(M),j=i(64335),W=function(R){var w=(0,U.useContext)(j.Z),Q=R.children,_=R.contentWidth,S=R.className,D=R.style,K=(0,U.useContext)(B.ZP.ConfigContext),k=K.getPrefixCls,$=R.prefixCls||k("pro"),re=_||w.contentWidth,G="".concat($,"-grid-content");return U.createElement("div",{className:P()(G,S,{wide:re==="Fixed"}),style:D},U.createElement("div",{className:"".concat($,"-grid-content-children")},Q))};H.Z=W},75362:function(O,H,i){"use strict";i.d(H,{ZP:function(){return Tt}});var I=i(65056),B=i(70883),E=i(22122),T=i(96156),U=i(6610),M=i(5991),P=i(10379),j=i(60446),W=i(90484),r=i(67294),R=i(94184),w=i.n(R),Q=i(98423),_=i(48717),S=i(65632),D=i(85061),K=i(75164);function k(l){var e,a=function(o){return function(){e=null,l.apply(void 0,(0,D.Z)(o))}},t=function(){if(e==null){for(var o=arguments.length,s=new Array(o),c=0;c<o;c++)s[c]=arguments[c];e=(0,K.Z)(a(s))}};return t.cancel=function(){return K.Z.cancel(e)},t}function $(){return function(e,a,t){var n=t.value,o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(a))return n;var c=k(n.bind(this));return o=!0,Object.defineProperty(this,a,{value:c,configurable:!0,writable:!0}),o=!1,c}}}}var re=i(64019);function G(l){return l!==window?l.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function se(l,e,a){if(a!==void 0&&e.top>l.top-a)return a+e.top}function de(l,e,a){if(a!==void 0&&e.bottom<l.bottom+a){var t=window.innerHeight-e.bottom;return a+t}}var fe=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],Y=[];function ue(){return Y}function C(l,e){if(!!l){var a=Y.find(function(t){return t.target===l});a?a.affixList.push(e):(a={target:l,affixList:[e],eventHandlers:{}},Y.push(a),fe.forEach(function(t){a.eventHandlers[t]=(0,re.Z)(l,t,function(){a.affixList.forEach(function(n){n.lazyUpdatePosition()})})}))}}function ne(l){var e=Y.find(function(a){var t=a.affixList.some(function(n){return n===l});return t&&(a.affixList=a.affixList.filter(function(n){return n!==l})),t});e&&e.affixList.length===0&&(Y=Y.filter(function(a){return a!==e}),fe.forEach(function(a){var t=e.eventHandlers[a];t&&t.remove&&t.remove()}))}var oe=function(l,e,a,t){var n=arguments.length,o=n<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,a):t,s;if((typeof Reflect=="undefined"?"undefined":(0,W.Z)(Reflect))==="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(l,e,a,t);else for(var c=l.length-1;c>=0;c--)(s=l[c])&&(o=(n<3?s(o):n>3?s(e,a,o):s(e,a))||o);return n>3&&o&&Object.defineProperty(e,a,o),o};function q(){return typeof window!="undefined"?window:null}var V;(function(l){l[l.None=0]="None",l[l.Prepare=1]="Prepare"})(V||(V={}));var ee=function(l){(0,P.Z)(a,l);var e=(0,j.Z)(a);function a(){var t;return(0,U.Z)(this,a),t=e.apply(this,arguments),t.state={status:V.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var n=t.props.offsetBottom,o=t.props.offsetTop;return n===void 0&&o===void 0&&(o=0),o},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(n){t.placeholderNode=n},t.saveFixedNode=function(n){t.fixedNode=n},t.measure=function(){var n=t.state,o=n.status,s=n.lastAffix,c=t.props.onChange,d=t.getTargetFunc();if(!(o!==V.Prepare||!t.fixedNode||!t.placeholderNode||!d)){var m=t.getOffsetTop(),v=t.getOffsetBottom(),g=d();if(!!g){var f={status:V.None},u=G(g),h=G(t.placeholderNode),y=se(h,u,m),p=de(h,u,v);y!==void 0?(f.affixStyle={position:"fixed",top:y,width:h.width,height:h.height},f.placeholderStyle={width:h.width,height:h.height}):p!==void 0&&(f.affixStyle={position:"fixed",bottom:p,width:h.width,height:h.height},f.placeholderStyle={width:h.width,height:h.height}),f.lastAffix=!!f.affixStyle,c&&s!==f.lastAffix&&c(f.lastAffix),t.setState(f)}}},t.prepareMeasure=function(){if(t.setState({status:V.Prepare,affixStyle:void 0,placeholderStyle:void 0}),!1)var n},t.render=function(){var n=t.context.getPrefixCls,o=t.state,s=o.affixStyle,c=o.placeholderStyle,d=t.props,m=d.prefixCls,v=d.children,g=w()((0,T.Z)({},n("affix",m),!!s)),f=(0,Q.Z)(t.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return r.createElement(_.Z,{onResize:function(){t.updatePosition()}},r.createElement("div",(0,E.Z)({},f,{ref:t.savePlaceholderNode}),s&&r.createElement("div",{style:c,"aria-hidden":"true"}),r.createElement("div",{className:g,ref:t.saveFixedNode,style:s},r.createElement(_.Z,{onResize:function(){t.updatePosition()}},v))))},t}return(0,M.Z)(a,[{key:"getTargetFunc",value:function(){var n=this.context.getTargetContainer,o=this.props.target;return o!==void 0?o:n||q}},{key:"componentDidMount",value:function(){var n=this,o=this.getTargetFunc();o&&(this.timeout=setTimeout(function(){C(o(),n),n.updatePosition()}))}},{key:"componentDidUpdate",value:function(n){var o=this.state.prevTarget,s=this.getTargetFunc(),c=null;s&&(c=s()||null),o!==c&&(ne(this),c&&(C(c,this),this.updatePosition()),this.setState({prevTarget:c})),(n.offsetTop!==this.props.offsetTop||n.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),ne(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var n=this.getTargetFunc(),o=this.state.affixStyle;if(n&&o){var s=this.getOffsetTop(),c=this.getOffsetBottom(),d=n();if(d&&this.placeholderNode){var m=G(d),v=G(this.placeholderNode),g=se(v,m,s),f=de(v,m,c);if(g!==void 0&&o.top===g||f!==void 0&&o.bottom===f)return}}this.prepareMeasure()}}]),a}(r.Component);ee.contextType=S.E_,oe([$()],ee.prototype,"updatePosition",null),oe([$()],ee.prototype,"lazyUpdatePosition",null);var We=ee,Kt=i(84305),he=i(69224),zt=i(59903),jt=i(81262),$t=i(30887),_t=i(59250),kt=i(94233),pe=i(28481),A=i(28991),we={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},Fe=we,be=i(27029),Ce=function(e,a){return r.createElement(be.Z,(0,A.Z)((0,A.Z)({},e),{},{ref:a,icon:Fe}))};Ce.displayName="ArrowLeftOutlined";var He=r.forwardRef(Ce),Ke={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},ze=Ke,xe=function(e,a){return r.createElement(be.Z,(0,A.Z)((0,A.Z)({},e),{},{ref:a,icon:ze}))};xe.displayName="ArrowRightOutlined";var je=r.forwardRef(xe),$e=i(50344),_e=i(57254),ke=i(81555),Ge=function(l,e){var a={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&e.indexOf(t)<0&&(a[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(a[t[n]]=l[t[n]]);return a},Ee=function(e){var a=e.prefixCls,t=e.separator,n=t===void 0?"/":t,o=e.children,s=e.overlay,c=e.dropdownProps,d=Ge(e,["prefixCls","separator","children","overlay","dropdownProps"]),m=r.useContext(S.E_),v=m.getPrefixCls,g=v("breadcrumb",a),f=function(y){return s?r.createElement(ke.Z,(0,E.Z)({overlay:s,placement:"bottomCenter"},c),r.createElement("span",{className:"".concat(g,"-overlay-link")},y,r.createElement(_e.Z,null))):y},u;return"href"in d?u=r.createElement("a",(0,E.Z)({className:"".concat(g,"-link")},d),o):u=r.createElement("span",(0,E.Z)({className:"".concat(g,"-link")},d),o),u=f(u),o?r.createElement("span",null,u,n&&r.createElement("span",{className:"".concat(g,"-separator")},n)):null};Ee.__ANT_BREADCRUMB_ITEM=!0;var Pe=Ee,ye=function(e){var a=e.children,t=r.useContext(S.E_),n=t.getPrefixCls,o=n("breadcrumb");return r.createElement("span",{className:"".concat(o,"-separator")},a||"/")};ye.__ANT_BREADCRUMB_SEPARATOR=!0;var Xe=ye,Oe=i(99210),Ye=i(21687),Ve=i(96159),Je=function(l,e){var a={};for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&e.indexOf(t)<0&&(a[t]=l[t]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(l);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(l,t[n])&&(a[t[n]]=l[t[n]]);return a};function Qe(l,e){if(!l.breadcrumbName)return null;var a=Object.keys(e).join("|"),t=l.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),function(n,o){return e[o]||n});return t}function qe(l,e,a,t){var n=a.indexOf(l)===a.length-1,o=Qe(l,e);return n?r.createElement("span",null,o):r.createElement("a",{href:"#/".concat(t.join("/"))},o)}var Re=function(e,a){return e=(e||"").replace(/^\//,""),Object.keys(a).forEach(function(t){e=e.replace(":".concat(t),a[t])}),e},et=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",t=arguments.length>2?arguments[2]:void 0,n=(0,D.Z)(e),o=Re(a,t);return o&&n.push(o),n},me=function(e){var a=e.prefixCls,t=e.separator,n=t===void 0?"/":t,o=e.style,s=e.className,c=e.routes,d=e.children,m=e.itemRender,v=m===void 0?qe:m,g=e.params,f=g===void 0?{}:g,u=Je(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),h=r.useContext(S.E_),y=h.getPrefixCls,p=h.direction,b,z=y("breadcrumb",a);if(c&&c.length>0){var Z=[];b=c.map(function(x){var L=Re(x.path,f);L&&Z.push(L);var F;return x.children&&x.children.length&&(F=r.createElement(Oe.Z,null,x.children.map(function(X){return r.createElement(Oe.Z.Item,{key:X.path||X.breadcrumbName},v(X,f,c,et(Z,X.path,f)))}))),r.createElement(Pe,{overlay:F,separator:n,key:L||x.breadcrumbName},v(x,f,c,Z))})}else d&&(b=(0,$e.Z)(d).map(function(x,L){return x&&((0,Ye.Z)(x.type&&(x.type.__ANT_BREADCRUMB_ITEM===!0||x.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),(0,Ve.Tm)(x,{separator:n,key:L}))}));var N=w()(z,(0,T.Z)({},"".concat(z,"-rtl"),p==="rtl"),s);return r.createElement("div",(0,E.Z)({className:N,style:o},u),b)};me.Item=Pe,me.Separator=Xe;var tt=me,at=tt,rt=i(51890),nt=i(34952),ot=i(42051),it=function(e,a,t){return!a||!t?null:r.createElement(ot.Z,{componentName:"PageHeader"},function(n){var o=n.back;return r.createElement("div",{className:"".concat(e,"-back")},r.createElement(nt.Z,{onClick:function(c){t==null||t(c)},className:"".concat(e,"-back-button"),"aria-label":o},a))})},lt=function(e){return r.createElement(at,e)},ct=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:a==="rtl"?r.createElement(je,null):r.createElement(He,null)},st=function(e,a){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",n=a.title,o=a.avatar,s=a.subTitle,c=a.tags,d=a.extra,m=a.onBack,v="".concat(e,"-heading"),g=n||s||c||d;if(!g)return null;var f=ct(a,t),u=it(e,f,m),h=u||o||g;return r.createElement("div",{className:v},h&&r.createElement("div",{className:"".concat(v,"-left")},u,o&&r.createElement(rt.C,o),n&&r.createElement("span",{className:"".concat(v,"-title"),title:typeof n=="string"?n:void 0},n),s&&r.createElement("span",{className:"".concat(v,"-sub-title"),title:typeof s=="string"?s:void 0},s),c&&r.createElement("span",{className:"".concat(v,"-tags")},c)),d&&r.createElement("span",{className:"".concat(v,"-extra")},d))},dt=function(e,a){return a?r.createElement("div",{className:"".concat(e,"-footer")},a):null},ft=function(e,a){return r.createElement("div",{className:"".concat(e,"-content")},a)},ut=function(e){var a=r.useState(!1),t=(0,pe.Z)(a,2),n=t[0],o=t[1],s=function(d){var m=d.width;o(m<768)};return r.createElement(S.C,null,function(c){var d,m=c.getPrefixCls,v=c.pageHeader,g=c.direction,f=e.prefixCls,u=e.style,h=e.footer,y=e.children,p=e.breadcrumb,b=e.breadcrumbRender,z=e.className,Z=!0;"ghost"in e?Z=e.ghost:v&&"ghost"in v&&(Z=v.ghost);var N=m("page-header",f),x=function(){var ae;return((ae=p)===null||ae===void 0?void 0:ae.routes)?lt(p):null},L=x(),F=p&&"props"in p,X=(b==null?void 0:b(e,L))||L,ie=F?p:X,ve=w()(N,z,(d={"has-breadcrumb":!!ie,"has-footer":!!h},(0,T.Z)(d,"".concat(N,"-ghost"),Z),(0,T.Z)(d,"".concat(N,"-rtl"),g==="rtl"),(0,T.Z)(d,"".concat(N,"-compact"),n),d));return r.createElement(_.Z,{onResize:s},r.createElement("div",{className:ve,style:u},ie,st(N,e,g),y&&ft(N,y),dt(N,h)))})},vt=ut,Ne=i(81253),Gt=i(18106),Te=i(51752),Ze=i(64335),mt=i(21349),gt=i(85224),Xt=i(12395),ht=i(83832),pt=function(e){if(!e)return 1;var a=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/a},bt=function(e){var a=e.children,t=e.style,n=e.className,o=e.markStyle,s=e.markClassName,c=e.zIndex,d=c===void 0?9:c,m=e.gapX,v=m===void 0?212:m,g=e.gapY,f=g===void 0?222:g,u=e.width,h=u===void 0?120:u,y=e.height,p=y===void 0?64:y,b=e.rotate,z=b===void 0?-22:b,Z=e.image,N=e.content,x=e.offsetLeft,L=e.offsetTop,F=e.fontStyle,X=F===void 0?"normal":F,ie=e.fontWeight,ve=ie===void 0?"normal":ie,ge=e.fontColor,ae=ge===void 0?"rgba(0,0,0,.15)":ge,Be=e.fontSize,Me=Be===void 0?16:Be,De=e.fontFamily,Ae=De===void 0?"sans-serif":De,Zt=e.prefixCls,Bt=(0,r.useContext)(he.ZP.ConfigContext),Mt=Bt.getPrefixCls,Se=Mt("pro-layout-watermark",Zt),Dt=w()("".concat(Se,"-wrapper"),n),At=w()(Se,s),St=(0,r.useState)(""),Le=(0,pe.Z)(St,2),Lt=Le[0],Ie=Le[1];return(0,r.useEffect)(function(){var le=document.createElement("canvas"),J=le.getContext("2d"),te=pt(J),It="".concat((v+h)*te,"px"),Ut="".concat((f+p)*te,"px"),Wt=x||v/2,wt=L||f/2;if(le.setAttribute("width",It),le.setAttribute("height",Ut),J){J.translate(Wt*te,wt*te),J.rotate(Math.PI/180*Number(z));var Ft=h*te,Ue=p*te;if(Z){var ce=new Image;ce.crossOrigin="anonymous",ce.referrerPolicy="no-referrer",ce.src=Z,ce.onload=function(){J.drawImage(ce,0,0,Ft,Ue),Ie(le.toDataURL())}}else if(N){var Ht=Number(Me)*te;J.font="".concat(X," normal ").concat(ve," ").concat(Ht,"px/").concat(Ue,"px ").concat(Ae),J.fillStyle=ae,J.fillText(N,0,0),Ie(le.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[v,f,x,L,z,X,ve,h,p,Ae,ae,Z,N,Me]),r.createElement("div",{style:(0,A.Z)({position:"relative"},t),className:Dt},a,r.createElement("div",{className:At,style:(0,A.Z)({zIndex:d,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(v+h,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(Lt,"')")},o)}))},Ct=bt,xt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Et=["children","loading","className","style","footer","affixProps","ghost","fixedHeader"];function Pt(l){return(0,W.Z)(l)==="object"?l:{spinning:l}}var yt=function(e){var a=e.tabList,t=e.tabActiveKey,n=e.onTabChange,o=e.tabBarExtraContent,s=e.tabProps,c=e.prefixedClassName;return a&&a.length||o?r.createElement(Te.Z,(0,E.Z)({className:"".concat(c,"-tabs"),activeKey:t,onChange:function(m){n&&n(m)},tabBarExtraContent:o},s),a==null?void 0:a.map(function(d,m){return r.createElement(Te.Z.TabPane,(0,E.Z)({},d,{tab:d.tab,key:d.key||m}))})):null},Ot=function(e,a,t){return!e&&!a?null:r.createElement("div",{className:"".concat(t,"-detail")},r.createElement("div",{className:"".concat(t,"-main")},r.createElement("div",{className:"".concat(t,"-row")},e&&r.createElement("div",{className:"".concat(t,"-content")},e),a&&r.createElement("div",{className:"".concat(t,"-extraContent")},a))))},Yt=function(e){var a=useContext(RouteContext);return React.createElement("div",{style:{height:"100%",display:"flex",alignItems:"center"}},React.createElement(_Breadcrumb,_extends({},a==null?void 0:a.breadcrumb,a==null?void 0:a.breadcrumbProps,e)))},Rt=function(e){var a,t=(0,r.useContext)(Ze.Z),n=e.title,o=e.content,s=e.pageHeaderRender,c=e.header,d=e.prefixedClassName,m=e.extraContent,v=e.style,g=e.prefixCls,f=e.breadcrumbRender,u=(0,Ne.Z)(e,xt),h=(0,r.useMemo)(function(){if(!!f)return f},[f]);if(s===!1)return null;if(s)return r.createElement(r.Fragment,null," ",s((0,A.Z)((0,A.Z)({},e),t)));var y=n;!n&&n!==!1&&(y=t.title);var p=(0,A.Z)((0,A.Z)((0,A.Z)({},t),{},{title:y},u),{},{footer:yt((0,A.Z)((0,A.Z)({},u),{},{breadcrumbRender:f,prefixedClassName:d}))},c),b=p.breadcrumb,z=(!b||!(b==null?void 0:b.itemRender)&&!(b==null||(a=b.routes)===null||a===void 0?void 0:a.length))&&!f;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(Z){return!p[Z]})&&z&&!o&&!m?null:r.createElement("div",{className:"".concat(d,"-warp")},r.createElement(vt,(0,E.Z)({},p,{breadcrumb:f===!1?void 0:(0,A.Z)((0,A.Z)({},p.breadcrumb),t.breadcrumbProps),breadcrumbRender:h,prefixCls:g}),(c==null?void 0:c.children)||Ot(o,m,d)))},Nt=function(e){var a,t=e.children,n=e.loading,o=n===void 0?!1:n,s=e.className,c=e.style,d=e.footer,m=e.affixProps,v=e.ghost,g=e.fixedHeader,f=(0,Ne.Z)(e,Et),u=(0,r.useContext)(Ze.Z),h=(0,r.useContext)(he.ZP.ConfigContext),y=h.getPrefixCls,p=e.prefixCls||y("pro"),b="".concat(p,"-page-container"),z=w()(b,s,(a={},(0,T.Z)(a,"".concat(p,"-page-container-ghost"),v),(0,T.Z)(a,"".concat(p,"-page-container-with-footer"),d),a)),Z=(0,r.useMemo)(function(){return t?r.createElement(r.Fragment,null,r.createElement("div",{className:"".concat(b,"-children-content")},t),u.hasFooterToolbar&&r.createElement("div",{style:{height:48,marginTop:24}})):null},[t,b,u.hasFooterToolbar]),N=r.createElement(Rt,(0,E.Z)({},f,{ghost:v,prefixCls:void 0,prefixedClassName:b})),x=(0,r.useMemo)(function(){if(r.isValidElement(o))return o;if(typeof o=="boolean"&&!o)return null;var F=Pt(o);return r.createElement(ht.Z,F)},[o]),L=(0,r.useMemo)(function(){var F=x||Z;return e.waterMarkProps||u.waterMarkProps?r.createElement(Ct,e.waterMarkProps||u.waterMarkProps,F):F},[e.waterMarkProps,u.waterMarkProps,x,Z]);return r.createElement("div",{style:c,className:z},g&&N?r.createElement(We,(0,E.Z)({offsetTop:u.hasHeader&&u.fixedHeader?u.headerHeight:0},m),N):N,L&&r.createElement(mt.Z,null,L),d&&r.createElement(gt.Z,{prefixCls:p},d))},Tt=Nt},56264:function(O){O.exports={"ant-pro-footer-bar":"ant-pro-footer-bar","ant-pro-footer-bar-left":"ant-pro-footer-bar-left","ant-pro-footer-bar-right":"ant-pro-footer-bar-right"}},53645:function(O){O.exports={"ant-pro-grid-content":"ant-pro-grid-content",wide:"wide"}},12395:function(O){O.exports={"ant-pro-page-container-children-content":"ant-pro-page-container-children-content","ant-pro-page-container":"ant-pro-page-container","ant-pro-page-container-warp":"ant-pro-page-container-warp","ant-tabs-nav":"ant-tabs-nav","ant-pro-page-container-ghost":"ant-pro-page-container-ghost","ant-pro-page-container-main":"ant-pro-page-container-main","ant-pro-page-container-detail":"ant-pro-page-container-detail","ant-pro-page-container-row":"ant-pro-page-container-row","ant-pro-page-container-title-content":"ant-pro-page-container-title-content","ant-pro-page-container-title":"ant-pro-page-container-title","ant-pro-page-container-content":"ant-pro-page-container-content","ant-pro-page-container-extraContent":"ant-pro-page-container-extraContent","ant-pro-page-container-logo":"ant-pro-page-container-logo","ant-pro-page-container-action":"ant-pro-page-container-action"}},70883:function(O){O.exports={"ant-affix":"ant-affix"}},81262:function(O){O.exports={"ant-breadcrumb":"ant-breadcrumb",anticon:"anticon","ant-breadcrumb-separator":"ant-breadcrumb-separator","ant-breadcrumb-link":"ant-breadcrumb-link","ant-breadcrumb-overlay-link":"ant-breadcrumb-overlay-link","ant-breadcrumb-rtl":"ant-breadcrumb-rtl"}},59903:function(O){O.exports={"ant-page-header":"ant-page-header","ant-page-header-ghost":"ant-page-header-ghost","has-breadcrumb":"has-breadcrumb","has-footer":"has-footer","ant-page-header-back":"ant-page-header-back","ant-page-header-back-button":"ant-page-header-back-button","ant-divider-vertical":"ant-divider-vertical","ant-breadcrumb":"ant-breadcrumb","ant-page-header-heading":"ant-page-header-heading","ant-page-header-heading-left":"ant-page-header-heading-left","ant-page-header-heading-title":"ant-page-header-heading-title","ant-avatar":"ant-avatar","ant-page-header-heading-sub-title":"ant-page-header-heading-sub-title","ant-page-header-heading-extra":"ant-page-header-heading-extra","ant-page-header-content":"ant-page-header-content","ant-page-header-footer":"ant-page-header-footer","ant-tabs":"ant-tabs","ant-tabs-nav":"ant-tabs-nav","ant-tabs-tab":"ant-tabs-tab","ant-page-header-compact":"ant-page-header-compact","ant-page-header-rtl":"ant-page-header-rtl","ant-page-header-heading-tags":"ant-page-header-heading-tags","ant-tabs-bar":"ant-tabs-bar"}},34952:function(O,H,i){"use strict";var I=i(22122),B=i(67294),E=i(15105),T=function(P,j){var W={};for(var r in P)Object.prototype.hasOwnProperty.call(P,r)&&j.indexOf(r)<0&&(W[r]=P[r]);if(P!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,r=Object.getOwnPropertySymbols(P);R<r.length;R++)j.indexOf(r[R])<0&&Object.prototype.propertyIsEnumerable.call(P,r[R])&&(W[r[R]]=P[r[R]]);return W},U={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},M=B.forwardRef(function(P,j){var W=function(K){var k=K.keyCode;k===E.Z.ENTER&&K.preventDefault()},r=function(K){var k=K.keyCode,$=P.onClick;k===E.Z.ENTER&&$&&$()},R=P.style,w=P.noStyle,Q=P.disabled,_=T(P,["style","noStyle","disabled"]),S={};return w||(S=(0,I.Z)({},U)),Q&&(S.pointerEvents="none"),S=(0,I.Z)((0,I.Z)({},S),R),B.createElement("div",(0,I.Z)({role:"button",tabIndex:0,ref:j},_,{onKeyDown:W,onKeyUp:r,style:S}))});H.Z=M},97435:function(O,H){"use strict";function i(I,B){for(var E=Object.assign({},I),T=0;T<B.length;T+=1){var U=B[T];delete E[U]}return E}H.Z=i}}]);
