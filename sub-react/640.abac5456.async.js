(self.webpackChunksub_react_name_=self.webpackChunksub_react_name_||[]).push([[640],{8212:function(k,b,r){"use strict";r.d(b,{Z:function(){return j}});var u=r(67294),E={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},n=E,q=r(27029),_=function(R,le){return u.createElement(q.Z,Object.assign({},R,{ref:le,icon:n}))};_.displayName="EditOutlined";var j=u.forwardRef(_)},97432:function(){},34719:function(){},39144:function(k,b,r){"use strict";r.d(b,{Z:function(){return Ne}});var u=r(96156),E=r(22122),n=r(67294),q=r(94184),_=r.n(q),j=r(98423),C=r(65632),R=function(y,d){var x={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&d.indexOf(s)<0&&(x[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,s=Object.getOwnPropertySymbols(y);h<s.length;h++)d.indexOf(s[h])<0&&Object.prototype.propertyIsEnumerable.call(y,s[h])&&(x[s[h]]=y[s[h]]);return x},le=function(d){var x=d.prefixCls,s=d.className,h=d.hoverable,pe=h===void 0?!0:h,oe=R(d,["prefixCls","className","hoverable"]);return n.createElement(C.C,null,function(se){var te=se.getPrefixCls,J=te("card",x),W=_()("".concat(J,"-grid"),s,(0,u.Z)({},"".concat(J,"-grid-hoverable"),pe));return n.createElement("div",(0,E.Z)({},oe,{className:W}))})},de=le,ee=function(y,d){var x={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&d.indexOf(s)<0&&(x[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,s=Object.getOwnPropertySymbols(y);h<s.length;h++)d.indexOf(s[h])<0&&Object.prototype.propertyIsEnumerable.call(y,s[h])&&(x[s[h]]=y[s[h]]);return x},X=function(d){return n.createElement(C.C,null,function(x){var s=x.getPrefixCls,h=d.prefixCls,pe=d.className,oe=d.avatar,se=d.title,te=d.description,J=ee(d,["prefixCls","className","avatar","title","description"]),W=s("card",h),fe=_()("".concat(W,"-meta"),pe),ve=oe?n.createElement("div",{className:"".concat(W,"-meta-avatar")},oe):null,ce=se?n.createElement("div",{className:"".concat(W,"-meta-title")},se):null,Ce=te?n.createElement("div",{className:"".concat(W,"-meta-description")},te):null,xe=ce||Ce?n.createElement("div",{className:"".concat(W,"-meta-detail")},ce,Ce):null;return n.createElement("div",(0,E.Z)({},J,{className:fe}),ve,xe)})},T=X,$=r(51752),Q=r(71230),P=r(15746),ue=r(97647),Be=function(y,d){var x={};for(var s in y)Object.prototype.hasOwnProperty.call(y,s)&&d.indexOf(s)<0&&(x[s]=y[s]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,s=Object.getOwnPropertySymbols(y);h<s.length;h++)d.indexOf(s[h])<0&&Object.prototype.propertyIsEnumerable.call(y,s[h])&&(x[s[h]]=y[s[h]]);return x};function Ue(y){var d=y.map(function(x,s){return n.createElement("li",{style:{width:"".concat(100/y.length,"%")},key:"action-".concat(s)},n.createElement("span",null,x))});return d}var Te=function(d){var x,s,h=n.useContext(C.E_),pe=h.getPrefixCls,oe=h.direction,se=n.useContext(ue.Z),te=function(Ze){var ne;(ne=d.onTabChange)===null||ne===void 0||ne.call(d,Ze)},J=function(){var Ze;return n.Children.forEach(d.children,function(ne){ne&&ne.type&&ne.type===de&&(Ze=!0)}),Ze},W=d.prefixCls,fe=d.className,ve=d.extra,ce=d.headStyle,Ce=ce===void 0?{}:ce,xe=d.bodyStyle,De=xe===void 0?{}:xe,be=d.title,Ie=d.loading,we=d.bordered,ze=we===void 0?!0:we,$e=d.size,Oe=d.type,Ke=d.cover,Le=d.actions,ye=d.tabList,D=d.children,Pe=d.activeTabKey,Re=d.defaultActiveTabKey,ke=d.tabBarExtraContent,We=d.hoverable,Me=d.tabProps,He=Me===void 0?{}:Me,Fe=Be(d,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),N=pe("card",W),Ge=De.padding===0||De.padding==="0px"?{padding:24}:void 0,H=n.createElement("div",{className:"".concat(N,"-loading-block")}),Ve=n.createElement("div",{className:"".concat(N,"-loading-content"),style:Ge},n.createElement(Q.Z,{gutter:8},n.createElement(P.Z,{span:22},H)),n.createElement(Q.Z,{gutter:8},n.createElement(P.Z,{span:8},H),n.createElement(P.Z,{span:15},H)),n.createElement(Q.Z,{gutter:8},n.createElement(P.Z,{span:6},H),n.createElement(P.Z,{span:18},H)),n.createElement(Q.Z,{gutter:8},n.createElement(P.Z,{span:13},H),n.createElement(P.Z,{span:9},H)),n.createElement(Q.Z,{gutter:8},n.createElement(P.Z,{span:4},H),n.createElement(P.Z,{span:3},H),n.createElement(P.Z,{span:16},H))),me=Pe!==void 0,_e=(0,E.Z)((0,E.Z)({},He),(x={},(0,u.Z)(x,me?"activeKey":"defaultActiveKey",me?Pe:Re),(0,u.Z)(x,"tabBarExtraContent",ke),x)),Se,he=ye&&ye.length?n.createElement($.Z,(0,E.Z)({size:"large"},_e,{className:"".concat(N,"-head-tabs"),onChange:te}),ye.map(function(Ee){return n.createElement($.Z.TabPane,{tab:Ee.tab,disabled:Ee.disabled,key:Ee.key})})):null;(be||ve||he)&&(Se=n.createElement("div",{className:"".concat(N,"-head"),style:Ce},n.createElement("div",{className:"".concat(N,"-head-wrapper")},be&&n.createElement("div",{className:"".concat(N,"-head-title")},be),ve&&n.createElement("div",{className:"".concat(N,"-extra")},ve)),he));var Xe=Ke?n.createElement("div",{className:"".concat(N,"-cover")},Ke):null,Qe=n.createElement("div",{className:"".concat(N,"-body"),style:De},Ie?Ve:D),Je=Le&&Le.length?n.createElement("ul",{className:"".concat(N,"-actions")},Ue(Le)):null,Ye=(0,j.Z)(Fe,["onTabChange"]),je=$e||se,qe=_()(N,(s={},(0,u.Z)(s,"".concat(N,"-loading"),Ie),(0,u.Z)(s,"".concat(N,"-bordered"),ze),(0,u.Z)(s,"".concat(N,"-hoverable"),We),(0,u.Z)(s,"".concat(N,"-contain-grid"),J()),(0,u.Z)(s,"".concat(N,"-contain-tabs"),ye&&ye.length),(0,u.Z)(s,"".concat(N,"-").concat(je),je),(0,u.Z)(s,"".concat(N,"-type-").concat(Oe),!!Oe),(0,u.Z)(s,"".concat(N,"-rtl"),oe==="rtl"),s),fe);return n.createElement("div",(0,E.Z)({},Ye,{className:qe}),Se,Xe,Qe,Je)};Te.Grid=de,Te.Meta=T;var Ne=Te},58024:function(k,b,r){"use strict";var u=r(43673),E=r.n(u),n=r(97432),q=r.n(n),_=r(18106),j=r(13062),C=r(89032)},15746:function(k,b,r){"use strict";var u=r(21584);b.Z=u.Z},89032:function(k,b,r){"use strict";var u=r(43673),E=r.n(u),n=r(6999)},71230:function(k,b,r){"use strict";var u=r(92820);b.Z=u.Z},13062:function(k,b,r){"use strict";var u=r(43673),E=r.n(u),n=r(6999)},59289:function(k,b,r){"use strict";r.d(b,{Z:function(){return st}});var u=r(22122),E=r(96156),n=r(67294),q=r(94184),_=r.n(q),j=r(42550),C=r(65632),R=r(21687),le=function(a,i){var l={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&i.indexOf(e)<0&&(l[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(l[e[t]]=a[e[t]]);return l},de=function(i,l){var e=i.prefixCls,t=i.component,o=t===void 0?"article":t,c=i.className,f=i["aria-label"],p=i.setContentRef,v=i.children,g=le(i,["prefixCls","component","className","aria-label","setContentRef","children"]),m=l;return p&&((0,R.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),m=(0,j.sQ)(l,p)),n.createElement(C.C,null,function(S){var M=S.getPrefixCls,F=S.direction,B=o,A=M("typography",e),Y=_()(A,(0,E.Z)({},"".concat(A,"-rtl"),F==="rtl"),c);return n.createElement(B,(0,u.Z)({className:Y,"aria-label":f,ref:m},g),v)})},ee=n.forwardRef(de);ee.displayName="Typography";var X=ee,T=X,$=r(90484),Q=r(98423),P=r(85061),ue=r(6610),Be=r(5991),Ue=r(10379),Te=r(44144),Ne=r(50344),y=r(20640),d=r.n(y),x=r(8212),s=r(79508),h=r(99165),pe=r(4084),oe=r(69224),se=r(42051),te=r(34952),J=r(32637),W=r(31808),fe=r(69713),ve=r(28481),ce=r(15105),Ce={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},xe=Ce,De=r(27029),be=function(i,l){return n.createElement(De.Z,Object.assign({},i,{ref:l,icon:xe}))};be.displayName="EnterOutlined";var Ie=n.forwardRef(be),we=r(45839),ze=function(i){var l=i.prefixCls,e=i["aria-label"],t=i.className,o=i.style,c=i.direction,f=i.maxLength,p=i.autoSize,v=p===void 0?!0:p,g=i.value,m=i.onSave,S=i.onCancel,M=i.onEnd,F=n.useRef(),B=n.useRef(!1),A=n.useRef(),Y=n.useState(g),ae=(0,ve.Z)(Y,2),U=ae[0],ge=ae[1];n.useEffect(function(){ge(g)},[g]),n.useEffect(function(){if(F.current&&F.current.resizableTextArea){var L=F.current.resizableTextArea.textArea;L.focus();var I=L.value.length;L.setSelectionRange(I,I)}},[]);var O=function(I){var K=I.target;ge(K.value.replace(/[\n\r]/g,""))},Z=function(){B.current=!0},z=function(){B.current=!1},w=function(I){var K=I.keyCode;B.current||(A.current=K)},G=function(){m(U.trim())},re=function(I){var K=I.keyCode,et=I.ctrlKey,tt=I.altKey,nt=I.metaKey,at=I.shiftKey;A.current===K&&!B.current&&!et&&!tt&&!nt&&!at&&(K===ce.Z.ENTER?(G(),M==null||M()):K===ce.Z.ESC&&S())},V=function(){G()},ie=_()(l,"".concat(l,"-edit-content"),(0,E.Z)({},"".concat(l,"-rtl"),c==="rtl"),t);return n.createElement("div",{className:ie,style:o},n.createElement(we.Z,{ref:F,maxLength:f,value:U,onChange:O,onKeyDown:w,onKeyUp:re,onCompositionStart:Z,onCompositionEnd:z,onBlur:V,"aria-label":e,autoSize:v}),n.createElement(Ie,{className:"".concat(l,"-edit-content-confirm")}))},$e=ze,Oe=r(73935),Ke=1,Le=3,ye=8,D,Pe={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function Re(a){if(!a)return 0;var i=a.match(/^\d*(\.\d*)?/);return i?Number(i[0]):0}function ke(a){var i=Array.prototype.slice.apply(a);return i.map(function(l){return"".concat(l,": ").concat(a.getPropertyValue(l),";")}).join("")}function We(a){var i=[];return a.forEach(function(l){var e=i[i.length-1];typeof l=="string"&&typeof e=="string"?i[i.length-1]+=l:i.push(l)}),i}function Me(a,i){a.setAttribute("aria-hidden","true");var l=window.getComputedStyle(i),e=ke(l);a.setAttribute("style",e),a.style.position="fixed",a.style.left="0",a.style.height="auto",a.style.minHeight="auto",a.style.maxHeight="auto",a.style.top="-999999px",a.style.zIndex="-1000",a.style.textOverflow="clip",a.style.whiteSpace="normal",a.style.webkitLineClamp="none"}function He(a){var i=document.createElement("div");Me(i,a),i.appendChild(document.createTextNode("text")),document.body.appendChild(i);var l=i.offsetHeight,e=Re(window.getComputedStyle(a).lineHeight);return document.body.removeChild(i),l>e?l:e}var Fe=function(a,i,l,e,t){D||(D=document.createElement("div"),D.setAttribute("aria-hidden","true")),D.parentNode||document.body.appendChild(D);var o=i.rows,c=i.suffix,f=c===void 0?"":c,p=window.getComputedStyle(a),v=He(a),g=Math.floor(v)*(o+1)+Re(p.paddingTop)+Re(p.paddingBottom);Me(D,a);var m=We((0,Ne.Z)(l));(0,Oe.render)(n.createElement("div",{style:Pe},n.createElement("span",{style:Pe},m,f),n.createElement("span",{style:Pe},e)),D);function S(){return Math.ceil(D.getBoundingClientRect().height)<g}if(S())return(0,Oe.unmountComponentAtNode)(D),{content:l,text:D.innerHTML,ellipsis:!1};var M=Array.prototype.slice.apply(D.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(O){var Z=O.nodeType;return Z!==ye}),F=Array.prototype.slice.apply(D.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,Oe.unmountComponentAtNode)(D);var B=[];D.innerHTML="";var A=document.createElement("span");D.appendChild(A);var Y=document.createTextNode(t+f);A.appendChild(Y),F.forEach(function(O){D.appendChild(O)});function ae(O){A.insertBefore(O,Y)}function U(O,Z){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,w=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Z.length,G=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,re=Math.floor((z+w)/2),V=Z.slice(0,re);if(O.textContent=V,z>=w-1)for(var ie=w;ie>=z;ie-=1){var L=Z.slice(0,ie);if(O.textContent=L,S()||!L)return ie===Z.length?{finished:!1,reactNode:Z}:{finished:!0,reactNode:L}}return S()?U(O,Z,re,w,re):U(O,Z,z,re,G)}function ge(O,Z){var z=O.nodeType;if(z===Ke)return ae(O),S()?{finished:!1,reactNode:m[Z]}:(A.removeChild(O),{finished:!0,reactNode:null});if(z===Le){var w=O.textContent||"",G=document.createTextNode(w);return ae(G),U(G,w)}return{finished:!1,reactNode:null}}return M.some(function(O,Z){var z=ge(O,Z),w=z.finished,G=z.reactNode;return G&&B.push(G),w}),{content:B,text:D.innerHTML,ellipsis:!0}},N=function(a,i){var l={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&i.indexOf(e)<0&&(l[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(l[e[t]]=a[e[t]]);return l},Ge=(0,W.GL)("webkitLineClamp"),H=(0,W.GL)("textOverflow");function Ve(a,i){var l=a.mark,e=a.code,t=a.underline,o=a.delete,c=a.strong,f=a.keyboard,p=a.italic,v=i;function g(m,S){!m||(v=n.createElement(S,{},v))}return g(c,"strong"),g(t,"u"),g(o,"del"),g(e,"code"),g(l,"mark"),g(f,"kbd"),g(p,"i"),v}function me(a,i,l){return a===!0||a===void 0?i:a||l&&i}var _e="...",Se=function(a){(0,Ue.Z)(l,a);var i=(0,Te.Z)(l);function l(){var e;return(0,ue.Z)(this,l),e=i.apply(this,arguments),e.contentRef=n.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,o=e.context.getPrefixCls;return o("typography",t)},e.onExpandClick=function(t){var o,c=e.getEllipsis(),f=c.onExpand;e.setState({expanded:!0}),(o=f)===null||o===void 0||o(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var o=e.getEditable(),c=o.onChange;c==null||c(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,o;(o=(t=e.getEditable()).onCancel)===null||o===void 0||o.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var o=e.props,c=o.children,f=o.copyable,p=(0,u.Z)({},(0,$.Z)(f)==="object"?f:null);p.text===void 0&&(p.text=String(c)),d()(p.text||""),e.setState({copied:!0},function(){p.onCopy&&p.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var o=e.getEditable(),c=o.onStart;t&&c&&c(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){J.Z.cancel(e.rafId),e.rafId=(0,J.Z)(function(){e.syncEllipsis()})},e}return(0,Be.Z)(l,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var o=this.props.children,c=this.getEllipsis(),f=this.getEllipsis(t);(o!==t.children||c.rows!==f.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),J.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var o=this.state.edit,c=t||this.props,f=c.editable;return f?(0,u.Z)({editing:o},(0,$.Z)(f)==="object"?f:null):{editing:o}}},{key:"getEllipsis",value:function(t){var o=t||this.props,c=o.ellipsis;return c?(0,u.Z)({rows:1,expandable:!1},(0,$.Z)(c)==="object"?c:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,o=this.props,c=o.editable,f=o.copyable,p=this.getEllipsis(),v=p.rows,g=p.expandable,m=p.suffix,S=p.onEllipsis,M=p.tooltip;return m||M||c||f||g||!t||S?!1:v===1?H:Ge}},{key:"syncEllipsis",value:function(){var t=this.state,o=t.ellipsisText,c=t.isEllipsis,f=t.expanded,p=this.getEllipsis(),v=p.rows,g=p.suffix,m=p.onEllipsis,S=this.props.children;if(!(!v||v<0||!this.contentRef.current||f)&&!this.canUseCSSEllipsis()){(0,R.Z)((0,Ne.Z)(S).every(function(Y){return typeof Y=="string"}),"Typography","`ellipsis` should use string as children only.");var M=Fe(this.contentRef.current,{rows:v,suffix:g},S,this.renderOperations(!0),_e),F=M.content,B=M.text,A=M.ellipsis;(o!==B||c!==A)&&(this.setState({ellipsisText:B,ellipsisContent:F,isEllipsis:A}),c!==A&&m&&m(A))}}},{key:"renderExpand",value:function(t){var o=this.getEllipsis(),c=o.expandable,f=o.symbol,p=this.state,v=p.expanded,g=p.isEllipsis;if(!c||!t&&(v||!g))return null;var m;return f?m=f:m=this.expandStr,n.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},m)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var o=t.icon,c=t.tooltip,f=(0,Ne.Z)(c)[0]||this.editStr,p=typeof f=="string"?f:"";return n.createElement(fe.Z,{key:"edit",title:c===!1?"":f},n.createElement(te.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":p},o||n.createElement(x.Z,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,o=this.props.copyable;if(!!o){var c=this.getPrefixCls(),f=o.tooltips,p=o.icon,v=Array.isArray(f)?f:[f],g=Array.isArray(p)?p:[p],m=t?me(v[1],this.copiedStr):me(v[0],this.copyStr),S=t?this.copiedStr:this.copyStr,M=typeof m=="string"?m:S;return n.createElement(fe.Z,{key:"copy",title:m},n.createElement(te.Z,{className:_()("".concat(c,"-copy"),t&&"".concat(c,"-copy-success")),onClick:this.onCopyClick,"aria-label":M},t?me(g[1],n.createElement(s.Z,null),!0):me(g[0],n.createElement(h.Z,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,o=t.children,c=t.className,f=t.style,p=this.context.direction,v=this.getEditable(),g=v.maxLength,m=v.autoSize,S=v.onEnd;return n.createElement($e,{value:typeof o=="string"?o:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:S,prefixCls:this.getPrefixCls(),className:c,style:f,direction:p,maxLength:g,autoSize:m})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(o){return o})}},{key:"renderContent",value:function(){var t=this,o=this.state,c=o.ellipsisContent,f=o.isEllipsis,p=o.expanded,v=this.props,g=v.component,m=v.children,S=v.className,M=v.type,F=v.disabled,B=v.style,A=N(v,["component","children","className","type","disabled","style"]),Y=this.context.direction,ae=this.getEllipsis(),U=ae.rows,ge=ae.suffix,O=ae.tooltip,Z=this.getPrefixCls(),z=(0,Q.Z)(A,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,P.Z)(oe.nf))),w=this.canUseCSSEllipsis(),G=U===1&&w,re=U&&U>1&&w,V=m;if(U&&f&&!p&&!w){var ie=A.title,L=ie||"";!ie&&(typeof m=="string"||typeof m=="number")&&(L=String(m)),L=L.slice(String(c||"").length),V=n.createElement(n.Fragment,null,c,n.createElement("span",{title:L,"aria-hidden":"true"},_e),ge),O&&(V=n.createElement(fe.Z,{title:O===!0?m:O},n.createElement("span",null,V)))}else V=n.createElement(n.Fragment,null,m,ge);return V=Ve(this.props,V),n.createElement(se.Z,{componentName:"Text"},function(I){var K,et=I.edit,tt=I.copy,nt=I.copied,at=I.expand;return t.editStr=et,t.copyStr=tt,t.copiedStr=nt,t.expandStr=at,n.createElement(pe.Z,{onResize:t.resizeOnNextFrame,disabled:w},n.createElement(T,(0,u.Z)({className:_()((K={},(0,E.Z)(K,"".concat(Z,"-").concat(M),M),(0,E.Z)(K,"".concat(Z,"-disabled"),F),(0,E.Z)(K,"".concat(Z,"-ellipsis"),U),(0,E.Z)(K,"".concat(Z,"-single-line"),U===1),(0,E.Z)(K,"".concat(Z,"-ellipsis-single-line"),G),(0,E.Z)(K,"".concat(Z,"-ellipsis-multiple-line"),re),K),S),style:(0,u.Z)((0,u.Z)({},B),{WebkitLineClamp:re?U:void 0}),component:g,ref:t.contentRef,direction:Y},z),V,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),o=t.editing;return o?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var o=t.children,c=t.editable;return(0,R.Z)(!c||typeof o=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),l}(n.Component);Se.contextType=C.E_,Se.defaultProps={children:""};var he=Se,Xe=function(a,i){var l={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&i.indexOf(e)<0&&(l[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(l[e[t]]=a[e[t]]);return l},Qe=function(i){var l=i.ellipsis,e=Xe(i,["ellipsis"]),t=n.useMemo(function(){return l&&(0,$.Z)(l)==="object"?(0,Q.Z)(l,["expandable","rows"]):l},[l]);return(0,R.Z)((0,$.Z)(l)!=="object"||!l||!("expandable"in l)&&!("rows"in l),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),n.createElement(he,(0,u.Z)({},e,{ellipsis:t,component:"span"}))},Je=Qe,Ye=function(a,i){var l={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&i.indexOf(e)<0&&(l[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(l[e[t]]=a[e[t]]);return l},je=function(i,l){var e=i.ellipsis,t=i.rel,o=Ye(i,["ellipsis","rel"]);(0,R.Z)((0,$.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var c=n.useRef(null);n.useImperativeHandle(l,function(){var p;return(p=c.current)===null||p===void 0?void 0:p.contentRef.current});var f=(0,u.Z)((0,u.Z)({},o),{rel:t===void 0&&o.target==="_blank"?"noopener noreferrer":t});return delete f.navigate,n.createElement(he,(0,u.Z)({},f,{ref:c,ellipsis:!!e,component:"a"}))},qe=n.forwardRef(je),Ee=r(93355),Ze=function(a,i){var l={};for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&i.indexOf(e)<0&&(l[e]=a[e]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(a);t<e.length;t++)i.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(a,e[t])&&(l[e[t]]=a[e[t]]);return l},ne=(0,Ee.a)(1,2,3,4,5),rt=function(i){var l=i.level,e=l===void 0?1:l,t=Ze(i,["level"]),o;return ne.indexOf(e)!==-1?o="h".concat(e):((0,R.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),o="h1"),n.createElement(he,(0,u.Z)({},t,{component:o}))},it=rt,lt=function(i){return n.createElement(he,(0,u.Z)({},i,{component:"div"}))},ot=lt,Ae=T;Ae.Text=Je,Ae.Link=qe,Ae.Title=it,Ae.Paragraph=ot;var st=Ae},402:function(k,b,r){"use strict";var u=r(43673),E=r.n(u),n=r(34719),q=r.n(n),_=r(22385),j=r(47673)},20640:function(k,b,r){"use strict";var u=r(11742),E={"text/plain":"Text","text/html":"Url",default:"Text"},n="Copy to clipboard: #{key}, Enter";function q(j){var C=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return j.replace(/#{\s*key\s*}/g,C)}function _(j,C){var R,le,de,ee,X,T,$=!1;C||(C={}),R=C.debug||!1;try{de=u(),ee=document.createRange(),X=document.getSelection(),T=document.createElement("span"),T.textContent=j,T.style.all="unset",T.style.position="fixed",T.style.top=0,T.style.clip="rect(0, 0, 0, 0)",T.style.whiteSpace="pre",T.style.webkitUserSelect="text",T.style.MozUserSelect="text",T.style.msUserSelect="text",T.style.userSelect="text",T.addEventListener("copy",function(P){if(P.stopPropagation(),C.format)if(P.preventDefault(),typeof P.clipboardData=="undefined"){R&&console.warn("unable to use e.clipboardData"),R&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var ue=E[C.format]||E.default;window.clipboardData.setData(ue,j)}else P.clipboardData.clearData(),P.clipboardData.setData(C.format,j);C.onCopy&&(P.preventDefault(),C.onCopy(P.clipboardData))}),document.body.appendChild(T),ee.selectNodeContents(T),X.addRange(ee);var Q=document.execCommand("copy");if(!Q)throw new Error("copy command was unsuccessful");$=!0}catch(P){R&&console.error("unable to copy using execCommand: ",P),R&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(C.format||"text",j),C.onCopy&&C.onCopy(window.clipboardData),$=!0}catch(ue){R&&console.error("unable to copy using clipboardData: ",ue),R&&console.error("falling back to prompt"),le=q("message"in C?C.message:n),window.prompt(le,j)}}finally{X&&(typeof X.removeRange=="function"?X.removeRange(ee):X.removeAllRanges()),T&&document.body.removeChild(T),de()}return $}k.exports=_},11742:function(k){k.exports=function(){var b=document.getSelection();if(!b.rangeCount)return function(){};for(var r=document.activeElement,u=[],E=0;E<b.rangeCount;E++)u.push(b.getRangeAt(E));switch(r.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":r.blur();break;default:r=null;break}return b.removeAllRanges(),function(){b.type==="Caret"&&b.removeAllRanges(),b.rangeCount||u.forEach(function(n){b.addRange(n)}),r&&r.focus()}}}}]);
