(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function L_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Cm={exports:{}},zl={},bm={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Va=Symbol.for("react.element"),I_=Symbol.for("react.portal"),N_=Symbol.for("react.fragment"),F_=Symbol.for("react.strict_mode"),O_=Symbol.for("react.profiler"),B_=Symbol.for("react.provider"),z_=Symbol.for("react.context"),k_=Symbol.for("react.forward_ref"),H_=Symbol.for("react.suspense"),V_=Symbol.for("react.memo"),G_=Symbol.for("react.lazy"),vh=Symbol.iterator;function W_(t){return t===null||typeof t!="object"?null:(t=vh&&t[vh]||t["@@iterator"],typeof t=="function"?t:null)}var Pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dm=Object.assign,Um={};function Vs(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Pm}Vs.prototype.isReactComponent={};Vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lm(){}Lm.prototype=Vs.prototype;function id(t,e,n){this.props=t,this.context=e,this.refs=Um,this.updater=n||Pm}var rd=id.prototype=new Lm;rd.constructor=id;Dm(rd,Vs.prototype);rd.isPureReactComponent=!0;var _h=Array.isArray,Im=Object.prototype.hasOwnProperty,sd={current:null},Nm={key:!0,ref:!0,__self:!0,__source:!0};function Fm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Im.call(e,i)&&!Nm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Va,type:t,key:s,ref:a,props:r,_owner:sd.current}}function X_(t,e){return{$$typeof:Va,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ad(t){return typeof t=="object"&&t!==null&&t.$$typeof===Va}function j_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xh=/\/+/g;function ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?j_(""+t.key):e.toString(36)}function Wo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Va:case I_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+ou(a,0):i,_h(r)?(n="",t!=null&&(n=t.replace(xh,"$&/")+"/"),Wo(r,e,n,"",function(u){return u})):r!=null&&(ad(r)&&(r=X_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(xh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",_h(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+ou(s,o);a+=Wo(s,e,n,l,r)}else if(l=W_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+ou(s,o++),a+=Wo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function to(t,e,n){if(t==null)return t;var i=[],r=0;return Wo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Y_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},Xo={transition:null},q_={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:Xo,ReactCurrentOwner:sd};function Om(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:to,forEach:function(t,e,n){to(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return to(t,function(){e++}),e},toArray:function(t){return to(t,function(e){return e})||[]},only:function(t){if(!ad(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Vs;Ve.Fragment=N_;Ve.Profiler=O_;Ve.PureComponent=id;Ve.StrictMode=F_;Ve.Suspense=H_;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q_;Ve.act=Om;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Dm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=sd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Im.call(e,l)&&!Nm.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Va,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:z_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:B_,_context:t},t.Consumer=t};Ve.createElement=Fm;Ve.createFactory=function(t){var e=Fm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:k_,render:t}};Ve.isValidElement=ad;Ve.lazy=function(t){return{$$typeof:G_,_payload:{_status:-1,_result:t},_init:Y_}};Ve.memo=function(t,e){return{$$typeof:V_,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Xo.transition;Xo.transition={};try{t()}finally{Xo.transition=e}};Ve.unstable_act=Om;Ve.useCallback=function(t,e){return ln.current.useCallback(t,e)};Ve.useContext=function(t){return ln.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return ln.current.useEffect(t,e)};Ve.useId=function(){return ln.current.useId()};Ve.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return ln.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};Ve.useRef=function(t){return ln.current.useRef(t)};Ve.useState=function(t){return ln.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return ln.current.useTransition()};Ve.version="18.3.1";bm.exports=Ve;var Ss=bm.exports;const $_=L_(Ss);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_=Ss,Z_=Symbol.for("react.element"),Q_=Symbol.for("react.fragment"),J_=Object.prototype.hasOwnProperty,e0=K_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t0={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)J_.call(e,i)&&!t0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Z_,type:t,key:s,ref:a,props:r,_owner:e0.current}}zl.Fragment=Q_;zl.jsx=Bm;zl.jsxs=Bm;Cm.exports=zl;var Z=Cm.exports,mc={},zm={exports:{}},Rn={},km={exports:{}},Hm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,X){var Q=O.length;O.push(X);e:for(;0<Q;){var oe=Q-1>>>1,re=O[oe];if(0<r(re,X))O[oe]=X,O[Q]=re,Q=oe;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var X=O[0],Q=O.pop();if(Q!==X){O[0]=Q;e:for(var oe=0,re=O.length,De=re>>>1;oe<De;){var Ke=2*(oe+1)-1,tt=O[Ke],$=Ke+1,ie=O[$];if(0>r(tt,Q))$<re&&0>r(ie,tt)?(O[oe]=ie,O[$]=Q,oe=$):(O[oe]=tt,O[Ke]=Q,oe=Ke);else if($<re&&0>r(ie,Q))O[oe]=ie,O[$]=Q,oe=$;else break e}}return X}function r(O,X){var Q=O.sortIndex-X.sortIndex;return Q!==0?Q:O.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,h=null,f=3,p=!1,v=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=O)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function y(O){if(M=!1,_(O),!v)if(n(l)!==null)v=!0,G(R);else{var X=n(u);X!==null&&I(y,X.startTime-O)}}function R(O,X){v=!1,M&&(M=!1,c(S),S=-1),p=!0;var Q=f;try{for(_(X),h=n(l);h!==null&&(!(h.expirationTime>X)||O&&!b());){var oe=h.callback;if(typeof oe=="function"){h.callback=null,f=h.priorityLevel;var re=oe(h.expirationTime<=X);X=t.unstable_now(),typeof re=="function"?h.callback=re:h===n(l)&&i(l),_(X)}else i(l);h=n(l)}if(h!==null)var De=!0;else{var Ke=n(u);Ke!==null&&I(y,Ke.startTime-X),De=!1}return De}finally{h=null,f=Q,p=!1}}var A=!1,C=null,S=-1,T=5,F=-1;function b(){return!(t.unstable_now()-F<T)}function H(){if(C!==null){var O=t.unstable_now();F=O;var X=!0;try{X=C(!0,O)}finally{X?V():(A=!1,C=null)}}else A=!1}var V;if(typeof m=="function")V=function(){m(H)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,k=Y.port2;Y.port1.onmessage=H,V=function(){k.postMessage(null)}}else V=function(){g(H,0)};function G(O){C=O,A||(A=!0,V())}function I(O,X){S=g(function(){O(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,G(R))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var Q=f;f=X;try{return O()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,X){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var Q=f;f=O;try{return X()}finally{f=Q}},t.unstable_scheduleCallback=function(O,X,Q){var oe=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?oe+Q:oe):Q=oe,O){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Q+re,O={id:d++,callback:X,priorityLevel:O,startTime:Q,expirationTime:re,sortIndex:-1},Q>oe?(O.sortIndex=Q,e(u,O),n(l)===null&&O===n(u)&&(M?(c(S),S=-1):M=!0,I(y,Q-oe))):(O.sortIndex=re,e(l,O),v||p||(v=!0,G(R))),O},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(O){var X=f;return function(){var Q=f;f=X;try{return O.apply(this,arguments)}finally{f=Q}}}})(Hm);km.exports=Hm;var n0=km.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var i0=Ss,An=n0;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Vm=new Set,Ta={};function Vr(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(Ta[t]=e,t=0;t<e.length;t++)Vm.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gc=Object.prototype.hasOwnProperty,r0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sh={},Mh={};function s0(t){return gc.call(Mh,t)?!0:gc.call(Sh,t)?!1:r0.test(t)?Mh[t]=!0:(Sh[t]=!0,!1)}function a0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function o0(t,e,n,i){if(e===null||typeof e>"u"||a0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ld(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(od,ld);$t[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(od,ld);$t[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(od,ld);$t[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function ud(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(o0(e,n,r,i)&&(n=null),i||r===null?s0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),ls=Symbol.for("react.portal"),us=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),vc=Symbol.for("react.profiler"),Gm=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),_c=Symbol.for("react.suspense"),xc=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),qi=Symbol.for("react.lazy"),Xm=Symbol.for("react.offscreen"),yh=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=yh&&t[yh]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,lu;function ua(t){if(lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lu=e&&e[1]||""}return`
`+lu+t}var uu=!1;function cu(t,e){if(!t||uu)return"";uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ua(t):""}function l0(t){switch(t.tag){case 5:return ua(t.type);case 16:return ua("Lazy");case 13:return ua("Suspense");case 19:return ua("SuspenseList");case 0:case 2:case 15:return t=cu(t.type,!1),t;case 11:return t=cu(t.type.render,!1),t;case 1:return t=cu(t.type,!0),t;default:return""}}function Sc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case us:return"Fragment";case ls:return"Portal";case vc:return"Profiler";case cd:return"StrictMode";case _c:return"Suspense";case xc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wm:return(t.displayName||"Context")+".Consumer";case Gm:return(t._context.displayName||"Context")+".Provider";case fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dd:return e=t.displayName||null,e!==null?e:Sc(t.type)||"Memo";case qi:e=t._payload,t=t._init;try{return Sc(t(e))}catch{}}return null}function u0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sc(e);case 8:return e===cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function jm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function c0(t){var e=jm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function io(t){t._valueTracker||(t._valueTracker=c0(t))}function Ym(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=jm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function ll(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mc(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Eh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function qm(t,e){e=e.checked,e!=null&&ud(t,"checked",e,!1)}function yc(t,e){qm(t,e);var n=fr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ec(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ec(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Th(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ec(t,e,n){(e!=="number"||ll(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ca=Array.isArray;function Ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Tc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(ca(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function $m(t,e){var n=fr(e.value),i=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ah(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Km(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Km(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ro,Zm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ro=ro||document.createElement("div"),ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ma={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f0=["Webkit","ms","Moz","O"];Object.keys(ma).forEach(function(t){f0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ma[e]=ma[t]})});function Qm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ma.hasOwnProperty(t)&&ma[t]?(""+e).trim():e+"px"}function Jm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Qm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var d0=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ac(t,e){if(e){if(d0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Rc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cc=null;function hd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bc=null,ys=null,Es=null;function Rh(t){if(t=Xa(t)){if(typeof bc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=Wl(e),bc(t.stateNode,t.type,e))}}function eg(t){ys?Es?Es.push(t):Es=[t]:ys=t}function tg(){if(ys){var t=ys,e=Es;if(Es=ys=null,Rh(t),e)for(t=0;t<e.length;t++)Rh(e[t])}}function ng(t,e){return t(e)}function ig(){}var fu=!1;function rg(t,e,n){if(fu)return t(e,n);fu=!0;try{return ng(t,e,n)}finally{fu=!1,(ys!==null||Es!==null)&&(ig(),tg())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var i=Wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Pc=!1;if(Ci)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Pc=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Pc=!1}function h0(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var ga=!1,ul=null,cl=!1,Dc=null,p0={onError:function(t){ga=!0,ul=t}};function m0(t,e,n,i,r,s,a,o,l){ga=!1,ul=null,h0.apply(p0,arguments)}function g0(t,e,n,i,r,s,a,o,l){if(m0.apply(this,arguments),ga){if(ga){var u=ul;ga=!1,ul=null}else throw Error(ee(198));cl||(cl=!0,Dc=u)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function sg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(Gr(t)!==t)throw Error(ee(188))}function v0(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ch(r),t;if(s===i)return Ch(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function ag(t){return t=v0(t),t!==null?og(t):null}function og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=og(t);if(e!==null)return e;t=t.sibling}return null}var lg=An.unstable_scheduleCallback,bh=An.unstable_cancelCallback,_0=An.unstable_shouldYield,x0=An.unstable_requestPaint,wt=An.unstable_now,S0=An.unstable_getCurrentPriorityLevel,pd=An.unstable_ImmediatePriority,ug=An.unstable_UserBlockingPriority,fl=An.unstable_NormalPriority,M0=An.unstable_LowPriority,cg=An.unstable_IdlePriority,kl=null,ci=null;function y0(t){if(ci&&typeof ci.onCommitFiberRoot=="function")try{ci.onCommitFiberRoot(kl,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:w0,E0=Math.log,T0=Math.LN2;function w0(t){return t>>>=0,t===0?32:31-(E0(t)/T0|0)|0}var so=64,ao=4194304;function fa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function dl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=fa(o):(s&=a,s!==0&&(i=fa(s)))}else a=n&~r,a!==0?i=fa(a):s!==0&&(i=fa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function A0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function R0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-$n(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=A0(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Uc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fg(){var t=so;return so<<=1,!(so&4194240)&&(so=64),t}function du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function C0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function md(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function dg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var hg,gd,pg,mg,gg,Lc=!1,oo=[],nr=null,ir=null,rr=null,Ra=new Map,Ca=new Map,Ki=[],b0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ph(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function $s(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&gd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function P0(t,e,n,i,r){switch(e){case"focusin":return nr=$s(nr,t,e,n,i,r),!0;case"dragenter":return ir=$s(ir,t,e,n,i,r),!0;case"mouseover":return rr=$s(rr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ra.set(s,$s(Ra.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ca.set(s,$s(Ca.get(s)||null,t,e,n,i,r)),!0}return!1}function vg(t){var e=Pr(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=sg(n),e!==null){t.blockedOn=e,gg(t.priority,function(){pg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ic(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Cc=i,n.target.dispatchEvent(i),Cc=null}else return e=Xa(n),e!==null&&gd(e),t.blockedOn=n,!1;e.shift()}return!0}function Dh(t,e,n){jo(t)&&n.delete(e)}function D0(){Lc=!1,nr!==null&&jo(nr)&&(nr=null),ir!==null&&jo(ir)&&(ir=null),rr!==null&&jo(rr)&&(rr=null),Ra.forEach(Dh),Ca.forEach(Dh)}function Ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Lc||(Lc=!0,An.unstable_scheduleCallback(An.unstable_NormalPriority,D0)))}function ba(t){function e(r){return Ks(r,t)}if(0<oo.length){Ks(oo[0],t);for(var n=1;n<oo.length;n++){var i=oo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(nr!==null&&Ks(nr,t),ir!==null&&Ks(ir,t),rr!==null&&Ks(rr,t),Ra.forEach(e),Ca.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)vg(n),n.blockedOn===null&&Ki.shift()}var Ts=Fi.ReactCurrentBatchConfig,hl=!0;function U0(t,e,n,i){var r=st,s=Ts.transition;Ts.transition=null;try{st=1,vd(t,e,n,i)}finally{st=r,Ts.transition=s}}function L0(t,e,n,i){var r=st,s=Ts.transition;Ts.transition=null;try{st=4,vd(t,e,n,i)}finally{st=r,Ts.transition=s}}function vd(t,e,n,i){if(hl){var r=Ic(t,e,n,i);if(r===null)yu(t,e,i,pl,n),Ph(t,i);else if(P0(r,t,e,n,i))i.stopPropagation();else if(Ph(t,i),e&4&&-1<b0.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&hg(s),s=Ic(t,e,n,i),s===null&&yu(t,e,i,pl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else yu(t,e,i,null,n)}}var pl=null;function Ic(t,e,n,i){if(pl=null,t=hd(i),t=Pr(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=sg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return pl=t,null}function _g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S0()){case pd:return 1;case ug:return 4;case fl:case M0:return 16;case cg:return 536870912;default:return 16}default:return 16}}var Qi=null,_d=null,Yo=null;function xg(){if(Yo)return Yo;var t,e=_d,n=e.length,i,r="value"in Qi?Qi.value:Qi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Yo=r.slice(t,1<i?1-i:void 0)}function qo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Uh(){return!1}function Cn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:Uh,this.isPropagationStopped=Uh,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xd=Cn(Gs),Wa=St({},Gs,{view:0,detail:0}),I0=Cn(Wa),hu,pu,Zs,Hl=St({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(hu=t.screenX-Zs.screenX,pu=t.screenY-Zs.screenY):pu=hu=0,Zs=t),hu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),Lh=Cn(Hl),N0=St({},Hl,{dataTransfer:0}),F0=Cn(N0),O0=St({},Wa,{relatedTarget:0}),mu=Cn(O0),B0=St({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),z0=Cn(B0),k0=St({},Gs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H0=Cn(k0),V0=St({},Gs,{data:0}),Ih=Cn(V0),G0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function j0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=X0[t])?!!e[t]:!1}function Sd(){return j0}var Y0=St({},Wa,{key:function(t){if(t.key){var e=G0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?W0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),q0=Cn(Y0),$0=St({},Hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nh=Cn($0),K0=St({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),Z0=Cn(K0),Q0=St({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),J0=Cn(Q0),ex=St({},Hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tx=Cn(ex),nx=[9,13,27,32],Md=Ci&&"CompositionEvent"in window,va=null;Ci&&"documentMode"in document&&(va=document.documentMode);var ix=Ci&&"TextEvent"in window&&!va,Sg=Ci&&(!Md||va&&8<va&&11>=va),Fh=" ",Oh=!1;function Mg(t,e){switch(t){case"keyup":return nx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function yg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function rx(t,e){switch(t){case"compositionend":return yg(e);case"keypress":return e.which!==32?null:(Oh=!0,Fh);case"textInput":return t=e.data,t===Fh&&Oh?null:t;default:return null}}function sx(t,e){if(cs)return t==="compositionend"||!Md&&Mg(t,e)?(t=xg(),Yo=_d=Qi=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Sg&&e.locale!=="ko"?null:e.data;default:return null}}var ax={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ax[t.type]:e==="textarea"}function Eg(t,e,n,i){eg(i),e=ml(e,"onChange"),0<e.length&&(n=new xd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var _a=null,Pa=null;function ox(t){Ig(t,0)}function Vl(t){var e=hs(t);if(Ym(e))return t}function lx(t,e){if(t==="change")return e}var Tg=!1;if(Ci){var gu;if(Ci){var vu="oninput"in document;if(!vu){var zh=document.createElement("div");zh.setAttribute("oninput","return;"),vu=typeof zh.oninput=="function"}gu=vu}else gu=!1;Tg=gu&&(!document.documentMode||9<document.documentMode)}function kh(){_a&&(_a.detachEvent("onpropertychange",wg),Pa=_a=null)}function wg(t){if(t.propertyName==="value"&&Vl(Pa)){var e=[];Eg(e,Pa,t,hd(t)),rg(ox,e)}}function ux(t,e,n){t==="focusin"?(kh(),_a=e,Pa=n,_a.attachEvent("onpropertychange",wg)):t==="focusout"&&kh()}function cx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vl(Pa)}function fx(t,e){if(t==="click")return Vl(e)}function dx(t,e){if(t==="input"||t==="change")return Vl(e)}function hx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zn=typeof Object.is=="function"?Object.is:hx;function Da(t,e){if(Zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!gc.call(e,r)||!Zn(t[r],e[r]))return!1}return!0}function Hh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,e){var n=Hh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hh(n)}}function Ag(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ag(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Rg(){for(var t=window,e=ll();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ll(t.document)}return e}function yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function px(t){var e=Rg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ag(n.ownerDocument.documentElement,n)){if(i!==null&&yd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Vh(n,s);var a=Vh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mx=Ci&&"documentMode"in document&&11>=document.documentMode,fs=null,Nc=null,xa=null,Fc=!1;function Gh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fc||fs==null||fs!==ll(i)||(i=fs,"selectionStart"in i&&yd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xa&&Da(xa,i)||(xa=i,i=ml(Nc,"onSelect"),0<i.length&&(e=new xd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=fs)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ds={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},_u={},Cg={};Ci&&(Cg=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Gl(t){if(_u[t])return _u[t];if(!ds[t])return t;var e=ds[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Cg)return _u[t]=e[n];return t}var bg=Gl("animationend"),Pg=Gl("animationiteration"),Dg=Gl("animationstart"),Ug=Gl("transitionend"),Lg=new Map,Wh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){Lg.set(t,e),Vr(e,[t])}for(var xu=0;xu<Wh.length;xu++){var Su=Wh[xu],gx=Su.toLowerCase(),vx=Su[0].toUpperCase()+Su.slice(1);pr(gx,"on"+vx)}pr(bg,"onAnimationEnd");pr(Pg,"onAnimationIteration");pr(Dg,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(Ug,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);Vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_x=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function Xh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,g0(i,e,void 0,t),t.currentTarget=null}function Ig(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Xh(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Xh(r,o,u),s=l}}}if(cl)throw t=Dc,cl=!1,Dc=null,t}function pt(t,e){var n=e[Hc];n===void 0&&(n=e[Hc]=new Set);var i=t+"__bubble";n.has(i)||(Ng(e,t,2,!1),n.add(i))}function Mu(t,e,n){var i=0;e&&(i|=4),Ng(n,t,i,e)}var co="_reactListening"+Math.random().toString(36).slice(2);function Ua(t){if(!t[co]){t[co]=!0,Vm.forEach(function(n){n!=="selectionchange"&&(_x.has(n)||Mu(n,!1,t),Mu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[co]||(e[co]=!0,Mu("selectionchange",!1,e))}}function Ng(t,e,n,i){switch(_g(e)){case 1:var r=U0;break;case 4:r=L0;break;default:r=vd}n=r.bind(null,e,n,t),r=void 0,!Pc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function yu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Pr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}rg(function(){var u=s,d=hd(n),h=[];e:{var f=Lg.get(t);if(f!==void 0){var p=xd,v=t;switch(t){case"keypress":if(qo(n)===0)break e;case"keydown":case"keyup":p=q0;break;case"focusin":v="focus",p=mu;break;case"focusout":v="blur",p=mu;break;case"beforeblur":case"afterblur":p=mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=F0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Z0;break;case bg:case Pg:case Dg:p=z0;break;case Ug:p=J0;break;case"scroll":p=I0;break;case"wheel":p=tx;break;case"copy":case"cut":case"paste":p=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Nh}var M=(e&4)!==0,g=!M&&t==="scroll",c=M?f!==null?f+"Capture":null:f;M=[];for(var m=u,_;m!==null;){_=m;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,c!==null&&(y=Aa(m,c),y!=null&&M.push(La(m,y,_)))),g)break;m=m.return}0<M.length&&(f=new p(f,v,null,n,d),h.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Cc&&(v=n.relatedTarget||n.fromElement)&&(Pr(v)||v[bi]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?Pr(v):null,v!==null&&(g=Gr(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(M=Lh,y="onMouseLeave",c="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(M=Nh,y="onPointerLeave",c="onPointerEnter",m="pointer"),g=p==null?f:hs(p),_=v==null?f:hs(v),f=new M(y,m+"leave",p,n,d),f.target=g,f.relatedTarget=_,y=null,Pr(d)===u&&(M=new M(c,m+"enter",v,n,d),M.target=_,M.relatedTarget=g,y=M),g=y,p&&v)t:{for(M=p,c=v,m=0,_=M;_;_=Yr(_))m++;for(_=0,y=c;y;y=Yr(y))_++;for(;0<m-_;)M=Yr(M),m--;for(;0<_-m;)c=Yr(c),_--;for(;m--;){if(M===c||c!==null&&M===c.alternate)break t;M=Yr(M),c=Yr(c)}M=null}else M=null;p!==null&&jh(h,f,p,M,!1),v!==null&&g!==null&&jh(h,g,v,M,!0)}}e:{if(f=u?hs(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var R=lx;else if(Bh(f))if(Tg)R=dx;else{R=cx;var A=ux}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(R=fx);if(R&&(R=R(t,u))){Eg(h,R,n,d);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Ec(f,"number",f.value)}switch(A=u?hs(u):window,t){case"focusin":(Bh(A)||A.contentEditable==="true")&&(fs=A,Nc=u,xa=null);break;case"focusout":xa=Nc=fs=null;break;case"mousedown":Fc=!0;break;case"contextmenu":case"mouseup":case"dragend":Fc=!1,Gh(h,n,d);break;case"selectionchange":if(mx)break;case"keydown":case"keyup":Gh(h,n,d)}var C;if(Md)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else cs?Mg(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Sg&&n.locale!=="ko"&&(cs||S!=="onCompositionStart"?S==="onCompositionEnd"&&cs&&(C=xg()):(Qi=d,_d="value"in Qi?Qi.value:Qi.textContent,cs=!0)),A=ml(u,S),0<A.length&&(S=new Ih(S,t,null,n,d),h.push({event:S,listeners:A}),C?S.data=C:(C=yg(n),C!==null&&(S.data=C)))),(C=ix?rx(t,n):sx(t,n))&&(u=ml(u,"onBeforeInput"),0<u.length&&(d=new Ih("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=C))}Ig(h,e)})}function La(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ml(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(t,n),s!=null&&i.unshift(La(t,s,r)),s=Aa(t,e),s!=null&&i.push(La(t,s,r))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=Aa(n,s),l!=null&&a.unshift(La(n,l,o))):r||(l=Aa(n,s),l!=null&&a.push(La(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var xx=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function Yh(t){return(typeof t=="string"?t:""+t).replace(xx,`
`).replace(Sx,"")}function fo(t,e,n){if(e=Yh(e),Yh(t)!==e&&n)throw Error(ee(425))}function gl(){}var Oc=null,Bc=null;function zc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,Mx=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,yx=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(t){return qh.resolve(null).then(t).catch(Ex)}:kc;function Ex(t){setTimeout(function(){throw t})}function Eu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ba(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ba(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $h(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ws=Math.random().toString(36).slice(2),ai="__reactFiber$"+Ws,Ia="__reactProps$"+Ws,bi="__reactContainer$"+Ws,Hc="__reactEvents$"+Ws,Tx="__reactListeners$"+Ws,wx="__reactHandles$"+Ws;function Pr(t){var e=t[ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[bi]||n[ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$h(t);t!==null;){if(n=t[ai])return n;t=$h(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[ai]||t[bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function Wl(t){return t[Ia]||null}var Vc=[],ps=-1;function mr(t){return{current:t}}function mt(t){0>ps||(t.current=Vc[ps],Vc[ps]=null,ps--)}function ht(t,e){ps++,Vc[ps]=t.current,t.current=e}var dr={},nn=mr(dr),hn=mr(!1),Fr=dr;function Ps(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function vl(){mt(hn),mt(nn)}function Kh(t,e,n){if(nn.current!==dr)throw Error(ee(168));ht(nn,e),ht(hn,n)}function Fg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,u0(t)||"Unknown",r));return St({},n,i)}function _l(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Fr=nn.current,ht(nn,t),ht(hn,hn.current),!0}function Zh(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=Fg(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,mt(hn),mt(nn),ht(nn,t)):mt(hn),ht(hn,n)}var yi=null,Xl=!1,Tu=!1;function Og(t){yi===null?yi=[t]:yi.push(t)}function Ax(t){Xl=!0,Og(t)}function gr(){if(!Tu&&yi!==null){Tu=!0;var t=0,e=st;try{var n=yi;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,Xl=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),lg(pd,gr),r}finally{st=e,Tu=!1}}return null}var ms=[],gs=0,xl=null,Sl=0,Pn=[],Dn=0,Or=null,Ei=1,Ti="";function wr(t,e){ms[gs++]=Sl,ms[gs++]=xl,xl=t,Sl=e}function Bg(t,e,n){Pn[Dn++]=Ei,Pn[Dn++]=Ti,Pn[Dn++]=Or,Or=t;var i=Ei;t=Ti;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ei=1<<32-$n(e)+r|n<<r|i,Ti=s+t}else Ei=1<<s|n<<r|i,Ti=t}function Ed(t){t.return!==null&&(wr(t,1),Bg(t,1,0))}function Td(t){for(;t===xl;)xl=ms[--gs],ms[gs]=null,Sl=ms[--gs],ms[gs]=null;for(;t===Or;)Or=Pn[--Dn],Pn[Dn]=null,Ti=Pn[--Dn],Pn[Dn]=null,Ei=Pn[--Dn],Pn[Dn]=null}var Tn=null,En=null,gt=!1,Xn=null;function zg(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,En=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,En=null,!0):!1;default:return!1}}function Gc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Wc(t){if(gt){var e=En;if(e){var n=e;if(!Qh(t,e)){if(Gc(t))throw Error(ee(418));e=sr(n.nextSibling);var i=Tn;e&&Qh(t,e)?zg(i,n):(t.flags=t.flags&-4097|2,gt=!1,Tn=t)}}else{if(Gc(t))throw Error(ee(418));t.flags=t.flags&-4097|2,gt=!1,Tn=t}}}function Jh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function ho(t){if(t!==Tn)return!1;if(!gt)return Jh(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!zc(t.type,t.memoizedProps)),e&&(e=En)){if(Gc(t))throw kg(),Error(ee(418));for(;e;)zg(t,e),e=sr(e.nextSibling)}if(Jh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Tn?sr(t.stateNode.nextSibling):null;return!0}function kg(){for(var t=En;t;)t=sr(t.nextSibling)}function Ds(){En=Tn=null,gt=!1}function wd(t){Xn===null?Xn=[t]:Xn.push(t)}var Rx=Fi.ReactCurrentBatchConfig;function Qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function po(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ep(t){var e=t._init;return e(t._payload)}function Hg(t){function e(c,m){if(t){var _=c.deletions;_===null?(c.deletions=[m],c.flags|=16):_.push(m)}}function n(c,m){if(!t)return null;for(;m!==null;)e(c,m),m=m.sibling;return null}function i(c,m){for(c=new Map;m!==null;)m.key!==null?c.set(m.key,m):c.set(m.index,m),m=m.sibling;return c}function r(c,m){return c=ur(c,m),c.index=0,c.sibling=null,c}function s(c,m,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<m?(c.flags|=2,m):_):(c.flags|=2,m)):(c.flags|=1048576,m)}function a(c){return t&&c.alternate===null&&(c.flags|=2),c}function o(c,m,_,y){return m===null||m.tag!==6?(m=Du(_,c.mode,y),m.return=c,m):(m=r(m,_),m.return=c,m)}function l(c,m,_,y){var R=_.type;return R===us?d(c,m,_.props.children,y,_.key):m!==null&&(m.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&ep(R)===m.type)?(y=r(m,_.props),y.ref=Qs(c,m,_),y.return=c,y):(y=tl(_.type,_.key,_.props,null,c.mode,y),y.ref=Qs(c,m,_),y.return=c,y)}function u(c,m,_,y){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=Uu(_,c.mode,y),m.return=c,m):(m=r(m,_.children||[]),m.return=c,m)}function d(c,m,_,y,R){return m===null||m.tag!==7?(m=Nr(_,c.mode,y,R),m.return=c,m):(m=r(m,_),m.return=c,m)}function h(c,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Du(""+m,c.mode,_),m.return=c,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case no:return _=tl(m.type,m.key,m.props,null,c.mode,_),_.ref=Qs(c,null,m),_.return=c,_;case ls:return m=Uu(m,c.mode,_),m.return=c,m;case qi:var y=m._init;return h(c,y(m._payload),_)}if(ca(m)||Ys(m))return m=Nr(m,c.mode,_,null),m.return=c,m;po(c,m)}return null}function f(c,m,_,y){var R=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return R!==null?null:o(c,m,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case no:return _.key===R?l(c,m,_,y):null;case ls:return _.key===R?u(c,m,_,y):null;case qi:return R=_._init,f(c,m,R(_._payload),y)}if(ca(_)||Ys(_))return R!==null?null:d(c,m,_,y,null);po(c,_)}return null}function p(c,m,_,y,R){if(typeof y=="string"&&y!==""||typeof y=="number")return c=c.get(_)||null,o(m,c,""+y,R);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case no:return c=c.get(y.key===null?_:y.key)||null,l(m,c,y,R);case ls:return c=c.get(y.key===null?_:y.key)||null,u(m,c,y,R);case qi:var A=y._init;return p(c,m,_,A(y._payload),R)}if(ca(y)||Ys(y))return c=c.get(_)||null,d(m,c,y,R,null);po(m,y)}return null}function v(c,m,_,y){for(var R=null,A=null,C=m,S=m=0,T=null;C!==null&&S<_.length;S++){C.index>S?(T=C,C=null):T=C.sibling;var F=f(c,C,_[S],y);if(F===null){C===null&&(C=T);break}t&&C&&F.alternate===null&&e(c,C),m=s(F,m,S),A===null?R=F:A.sibling=F,A=F,C=T}if(S===_.length)return n(c,C),gt&&wr(c,S),R;if(C===null){for(;S<_.length;S++)C=h(c,_[S],y),C!==null&&(m=s(C,m,S),A===null?R=C:A.sibling=C,A=C);return gt&&wr(c,S),R}for(C=i(c,C);S<_.length;S++)T=p(C,c,S,_[S],y),T!==null&&(t&&T.alternate!==null&&C.delete(T.key===null?S:T.key),m=s(T,m,S),A===null?R=T:A.sibling=T,A=T);return t&&C.forEach(function(b){return e(c,b)}),gt&&wr(c,S),R}function M(c,m,_,y){var R=Ys(_);if(typeof R!="function")throw Error(ee(150));if(_=R.call(_),_==null)throw Error(ee(151));for(var A=R=null,C=m,S=m=0,T=null,F=_.next();C!==null&&!F.done;S++,F=_.next()){C.index>S?(T=C,C=null):T=C.sibling;var b=f(c,C,F.value,y);if(b===null){C===null&&(C=T);break}t&&C&&b.alternate===null&&e(c,C),m=s(b,m,S),A===null?R=b:A.sibling=b,A=b,C=T}if(F.done)return n(c,C),gt&&wr(c,S),R;if(C===null){for(;!F.done;S++,F=_.next())F=h(c,F.value,y),F!==null&&(m=s(F,m,S),A===null?R=F:A.sibling=F,A=F);return gt&&wr(c,S),R}for(C=i(c,C);!F.done;S++,F=_.next())F=p(C,c,S,F.value,y),F!==null&&(t&&F.alternate!==null&&C.delete(F.key===null?S:F.key),m=s(F,m,S),A===null?R=F:A.sibling=F,A=F);return t&&C.forEach(function(H){return e(c,H)}),gt&&wr(c,S),R}function g(c,m,_,y){if(typeof _=="object"&&_!==null&&_.type===us&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case no:e:{for(var R=_.key,A=m;A!==null;){if(A.key===R){if(R=_.type,R===us){if(A.tag===7){n(c,A.sibling),m=r(A,_.props.children),m.return=c,c=m;break e}}else if(A.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===qi&&ep(R)===A.type){n(c,A.sibling),m=r(A,_.props),m.ref=Qs(c,A,_),m.return=c,c=m;break e}n(c,A);break}else e(c,A);A=A.sibling}_.type===us?(m=Nr(_.props.children,c.mode,y,_.key),m.return=c,c=m):(y=tl(_.type,_.key,_.props,null,c.mode,y),y.ref=Qs(c,m,_),y.return=c,c=y)}return a(c);case ls:e:{for(A=_.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(c,m.sibling),m=r(m,_.children||[]),m.return=c,c=m;break e}else{n(c,m);break}else e(c,m);m=m.sibling}m=Uu(_,c.mode,y),m.return=c,c=m}return a(c);case qi:return A=_._init,g(c,m,A(_._payload),y)}if(ca(_))return v(c,m,_,y);if(Ys(_))return M(c,m,_,y);po(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(c,m.sibling),m=r(m,_),m.return=c,c=m):(n(c,m),m=Du(_,c.mode,y),m.return=c,c=m),a(c)):n(c,m)}return g}var Us=Hg(!0),Vg=Hg(!1),Ml=mr(null),yl=null,vs=null,Ad=null;function Rd(){Ad=vs=yl=null}function Cd(t){var e=Ml.current;mt(Ml),t._currentValue=e}function Xc(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){yl=t,Ad=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function Nn(t){var e=t._currentValue;if(Ad!==t)if(t={context:t,memoizedValue:e,next:null},vs===null){if(yl===null)throw Error(ee(308));vs=t,yl.dependencies={lanes:0,firstContext:t}}else vs=vs.next=t;return e}var Dr=null;function bd(t){Dr===null?Dr=[t]:Dr.push(t)}function Gg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,bd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $i=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,bd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function $o(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,md(t,n)}}function tp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function El(t,e,n,i){var r=t.updateQueue;$i=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=u=l=null,o=s;do{var f=o.lane,p=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,M=o;switch(f=e,p=n,M.tag){case 1:if(v=M.payload,typeof v=="function"){h=v.call(p,h,f);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,f=typeof v=="function"?v.call(p,h,f):v,f==null)break e;h=St({},h,f);break e;case 2:$i=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else p={eventTime:p,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=p,l=h):d=d.next=p,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=a,t.lanes=a,t.memoizedState=h}}function np(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var ja={},fi=mr(ja),Na=mr(ja),Fa=mr(ja);function Ur(t){if(t===ja)throw Error(ee(174));return t}function Dd(t,e){switch(ht(Fa,e),ht(Na,t),ht(fi,ja),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wc(e,t)}mt(fi),ht(fi,e)}function Ls(){mt(fi),mt(Na),mt(Fa)}function Xg(t){Ur(Fa.current);var e=Ur(fi.current),n=wc(e,t.type);e!==n&&(ht(Na,t),ht(fi,n))}function Ud(t){Na.current===t&&(mt(fi),mt(Na))}var vt=mr(0);function Tl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var wu=[];function Ld(){for(var t=0;t<wu.length;t++)wu[t]._workInProgressVersionPrimary=null;wu.length=0}var Ko=Fi.ReactCurrentDispatcher,Au=Fi.ReactCurrentBatchConfig,Br=0,xt=null,Dt=null,kt=null,wl=!1,Sa=!1,Oa=0,Cx=0;function Zt(){throw Error(ee(321))}function Id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zn(t[n],e[n]))return!1;return!0}function Nd(t,e,n,i,r,s){if(Br=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ko.current=t===null||t.memoizedState===null?Ux:Lx,t=n(i,r),Sa){s=0;do{if(Sa=!1,Oa=0,25<=s)throw Error(ee(301));s+=1,kt=Dt=null,e.updateQueue=null,Ko.current=Ix,t=n(i,r)}while(Sa)}if(Ko.current=Al,e=Dt!==null&&Dt.next!==null,Br=0,kt=Dt=xt=null,wl=!1,e)throw Error(ee(300));return t}function Fd(){var t=Oa!==0;return Oa=0,t}function ri(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?xt.memoizedState=kt=t:kt=kt.next=t,kt}function Fn(){if(Dt===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=kt===null?xt.memoizedState:kt.next;if(e!==null)kt=e,Dt=t;else{if(t===null)throw Error(ee(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},kt===null?xt.memoizedState=kt=t:kt=kt.next=t}return kt}function Ba(t,e){return typeof e=="function"?e(t):e}function Ru(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((Br&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,xt.lanes|=d,zr|=d}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Zn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Cu(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Zn(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function jg(){}function Yg(t,e){var n=xt,i=Fn(),r=e(),s=!Zn(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Od(Kg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,za(9,$g.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(ee(349));Br&30||qg(n,e,r)}return r}function qg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function $g(t,e,n,i){e.value=n,e.getSnapshot=i,Zg(e)&&Qg(t)}function Kg(t,e,n){return n(function(){Zg(e)&&Qg(t)})}function Zg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zn(t,n)}catch{return!0}}function Qg(t){var e=Pi(t,1);e!==null&&Kn(e,t,1,-1)}function ip(t){var e=ri();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ba,lastRenderedState:t},e.queue=t,t=t.dispatch=Dx.bind(null,xt,t),[e.memoizedState,t]}function za(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Jg(){return Fn().memoizedState}function Zo(t,e,n,i){var r=ri();xt.flags|=t,r.memoizedState=za(1|e,n,void 0,i===void 0?null:i)}function jl(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&Id(i,a.deps)){r.memoizedState=za(e,n,s,i);return}}xt.flags|=t,r.memoizedState=za(1|e,n,s,i)}function rp(t,e){return Zo(8390656,8,t,e)}function Od(t,e){return jl(2048,8,t,e)}function ev(t,e){return jl(4,2,t,e)}function tv(t,e){return jl(4,4,t,e)}function nv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function iv(t,e,n){return n=n!=null?n.concat([t]):null,jl(4,4,nv.bind(null,e,t),n)}function Bd(){}function rv(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function sv(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function av(t,e,n){return Br&21?(Zn(n,e)||(n=fg(),xt.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function bx(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Au.transition;Au.transition={};try{t(!1),e()}finally{st=n,Au.transition=i}}function ov(){return Fn().memoizedState}function Px(t,e,n){var i=lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},lv(t))uv(e,n);else if(n=Gg(t,e,n,i),n!==null){var r=an();Kn(n,t,i,r),cv(n,e,i)}}function Dx(t,e,n){var i=lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(lv(t))uv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Zn(o,a)){var l=e.interleaved;l===null?(r.next=r,bd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Gg(t,e,r,i),n!==null&&(r=an(),Kn(n,t,i,r),cv(n,e,i))}}function lv(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function uv(t,e){Sa=wl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,md(t,n)}}var Al={readContext:Nn,useCallback:Zt,useContext:Zt,useEffect:Zt,useImperativeHandle:Zt,useInsertionEffect:Zt,useLayoutEffect:Zt,useMemo:Zt,useReducer:Zt,useRef:Zt,useState:Zt,useDebugValue:Zt,useDeferredValue:Zt,useTransition:Zt,useMutableSource:Zt,useSyncExternalStore:Zt,useId:Zt,unstable_isNewReconciler:!1},Ux={readContext:Nn,useCallback:function(t,e){return ri().memoizedState=[t,e===void 0?null:e],t},useContext:Nn,useEffect:rp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zo(4194308,4,nv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zo(4,2,t,e)},useMemo:function(t,e){var n=ri();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ri();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Px.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=ri();return t={current:t},e.memoizedState=t},useState:ip,useDebugValue:Bd,useDeferredValue:function(t){return ri().memoizedState=t},useTransition:function(){var t=ip(!1),e=t[0];return t=bx.bind(null,t[1]),ri().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=ri();if(gt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Vt===null)throw Error(ee(349));Br&30||qg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,rp(Kg.bind(null,i,s,t),[t]),i.flags|=2048,za(9,$g.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ri(),e=Vt.identifierPrefix;if(gt){var n=Ti,i=Ei;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Oa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Cx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lx={readContext:Nn,useCallback:rv,useContext:Nn,useEffect:Od,useImperativeHandle:iv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:sv,useReducer:Ru,useRef:Jg,useState:function(){return Ru(Ba)},useDebugValue:Bd,useDeferredValue:function(t){var e=Fn();return av(e,Dt.memoizedState,t)},useTransition:function(){var t=Ru(Ba)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:Yg,useId:ov,unstable_isNewReconciler:!1},Ix={readContext:Nn,useCallback:rv,useContext:Nn,useEffect:Od,useImperativeHandle:iv,useInsertionEffect:ev,useLayoutEffect:tv,useMemo:sv,useReducer:Cu,useRef:Jg,useState:function(){return Cu(Ba)},useDebugValue:Bd,useDeferredValue:function(t){var e=Fn();return Dt===null?e.memoizedState=t:av(e,Dt.memoizedState,t)},useTransition:function(){var t=Cu(Ba)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:jg,useSyncExternalStore:Yg,useId:ov,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jc(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yl={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=an(),r=lr(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Kn(e,t,r,i),$o(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=an(),r=lr(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Kn(e,t,r,i),$o(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=an(),i=lr(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(Kn(e,t,i,n),$o(e,t,i))}};function sp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Da(n,i)||!Da(r,s):!0}function fv(t,e,n){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nn(s):(r=pn(e)?Fr:nn.current,i=e.contextTypes,s=(i=i!=null)?Ps(t,r):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function ap(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Yl.enqueueReplaceState(e,e.state,null)}function Yc(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Nn(s):(s=pn(e)?Fr:nn.current,r.context=Ps(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jc(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Yl.enqueueReplaceState(r,r.state,null),El(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e){try{var n="",i=e;do n+=l0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function bu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Nx=typeof WeakMap=="function"?WeakMap:Map;function dv(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Cl||(Cl=!0,sf=i),qc(t,e)},n}function hv(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){qc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){qc(t,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function op(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Nx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=$x.bind(null,t,e,n),e.then(t,t))}function lp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var Fx=Fi.ReactCurrentOwner,dn=!1;function sn(t,e,n,i){e.child=t===null?Vg(e,null,n,i):Us(e,t.child,n,i)}function cp(t,e,n,i,r){n=n.render;var s=e.ref;return ws(e,r),i=Nd(t,e,n,i,s,r),n=Fd(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(gt&&n&&Ed(e),e.flags|=1,sn(t,e,i,r),e.child)}function fp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,pv(t,e,s,i,r)):(t=tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Da,n(a,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=ur(s,i),t.ref=e.ref,t.return=e,e.child=t}function pv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Da(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return $c(t,e,n,i,r)}function mv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(xs,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(xs,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(xs,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(xs,Sn),Sn|=i;return sn(t,e,r,n),e.child}function gv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $c(t,e,n,i,r){var s=pn(n)?Fr:nn.current;return s=Ps(e,s),ws(e,r),n=Nd(t,e,n,i,s,r),i=Fd(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(gt&&i&&Ed(e),e.flags|=1,sn(t,e,n,r),e.child)}function dp(t,e,n,i,r){if(pn(n)){var s=!0;_l(e)}else s=!1;if(ws(e,r),e.stateNode===null)Qo(t,e),fv(e,n,i),Yc(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Nn(u):(u=pn(n)?Fr:nn.current,u=Ps(e,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&ap(e,a,i,u),$i=!1;var f=e.memoizedState;a.state=f,El(e,i,a,r),l=e.memoizedState,o!==i||f!==l||hn.current||$i?(typeof d=="function"&&(jc(e,n,d,i),l=e.memoizedState),(o=$i||sp(e,n,o,i,f,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Wg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Gn(e.type,o),a.props=u,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Nn(l):(l=pn(n)?Fr:nn.current,l=Ps(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&ap(e,a,i,l),$i=!1,f=e.memoizedState,a.state=f,El(e,i,a,r);var v=e.memoizedState;o!==h||f!==v||hn.current||$i?(typeof p=="function"&&(jc(e,n,p,i),v=e.memoizedState),(u=$i||sp(e,n,u,i,f,v,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Kc(t,e,n,i,s,r)}function Kc(t,e,n,i,r,s){gv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Zh(e,n,!1),Di(t,e,s);i=e.stateNode,Fx.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,o,s)):sn(t,e,o,s),e.memoizedState=i.state,r&&Zh(e,n,!0),e.child}function vv(t){var e=t.stateNode;e.pendingContext?Kh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kh(t,e.context,!1),Dd(t,e.containerInfo)}function hp(t,e,n,i,r){return Ds(),wd(r),e.flags|=256,sn(t,e,n,i),e.child}var Zc={dehydrated:null,treeContext:null,retryLane:0};function Qc(t){return{baseLanes:t,cachePool:null,transitions:null}}function _v(t,e,n){var i=e.pendingProps,r=vt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(vt,r&1),t===null)return Wc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Kl(a,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qc(n),e.memoizedState=Zc,t):zd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return Ox(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ur(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ur(o,s):(s=Nr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Qc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Zc,i}return s=t.child,t=s.sibling,i=ur(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zd(t,e){return e=Kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mo(t,e,n,i){return i!==null&&wd(i),Us(e,t.child,null,n),t=zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ox(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=bu(Error(ee(422))),mo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Kl({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Us(e,t.child,null,a),e.child.memoizedState=Qc(a),e.memoizedState=Zc,s);if(!(e.mode&1))return mo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ee(419)),i=bu(s,i,void 0),mo(t,e,a,i)}if(o=(a&t.childLanes)!==0,dn||o){if(i=Vt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Kn(i,t,r,-1))}return Xd(),i=bu(Error(ee(421))),mo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Kx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=sr(r.nextSibling),Tn=e,gt=!0,Xn=null,t!==null&&(Pn[Dn++]=Ei,Pn[Dn++]=Ti,Pn[Dn++]=Or,Ei=t.id,Ti=t.overflow,Or=e),e=zd(e,i.children),e.flags|=4096,e)}function pp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xc(t.return,e,n)}function Pu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function xv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&pp(t,n,e);else if(t.tag===19)pp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Tl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Pu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Tl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Pu(e,!0,n,null,s);break;case"together":Pu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=ur(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ur(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Bx(t,e,n){switch(e.tag){case 3:vv(e),Ds();break;case 5:Xg(e);break;case 1:pn(e.type)&&_l(e);break;case 4:Dd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?_v(t,e,n):(ht(vt,vt.current&1),t=Di(t,e,n),t!==null?t.sibling:null);ht(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return xv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,mv(t,e,n)}return Di(t,e,n)}var Sv,Jc,Mv,yv;Sv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Jc=function(){};Mv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ur(fi.current);var s=null;switch(n){case"input":r=Mc(t,r),i=Mc(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=Tc(t,r),i=Tc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=gl)}Ac(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ta.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};yv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Js(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function zx(t,e,n){var i=e.pendingProps;switch(Td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return pn(e.type)&&vl(),Qt(e),null;case 3:return i=e.stateNode,Ls(),mt(hn),mt(nn),Ld(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ho(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(lf(Xn),Xn=null))),Jc(t,e),Qt(e),null;case 5:Ud(e);var r=Ur(Fa.current);if(n=e.type,t!==null&&e.stateNode!=null)Mv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return Qt(e),null}if(t=Ur(fi.current),ho(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ai]=e,i[Ia]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<da.length;r++)pt(da[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Eh(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":wh(i,s),pt("invalid",i)}Ac(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&fo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&fo(i.textContent,o,t),r=["children",""+o]):Ta.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&pt("scroll",i)}switch(n){case"input":io(i),Th(i,s,!0);break;case"textarea":io(i),Ah(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=gl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Km(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ai]=e,t[Ia]=i,Sv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Rc(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<da.length;r++)pt(da[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":Eh(t,i),r=Mc(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),pt("invalid",t);break;case"textarea":wh(t,i),r=Tc(t,i),pt("invalid",t);break;default:r=i}Ac(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Jm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Zm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(t,l):typeof l=="number"&&wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&ud(t,s,l,a))}switch(n){case"input":io(t),Th(t,i,!1);break;case"textarea":io(t),Ah(t);break;case"option":i.value!=null&&t.setAttribute("value",""+fr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=gl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)yv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Ur(Fa.current),Ur(fi.current),ho(e)){if(i=e.stateNode,n=e.memoizedProps,i[ai]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:fo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ai]=e,e.stateNode=i}return Qt(e),null;case 13:if(mt(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&En!==null&&e.mode&1&&!(e.flags&128))kg(),Ds(),e.flags|=98560,s=!1;else if(s=ho(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[ai]=e}else Ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else Xn!==null&&(lf(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Lt===0&&(Lt=3):Xd())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Ls(),Jc(t,e),t===null&&Ua(e.stateNode.containerInfo),Qt(e),null;case 10:return Cd(e.type._context),Qt(e),null;case 17:return pn(e.type)&&vl(),Qt(e),null;case 19:if(mt(vt),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Js(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Tl(t),a!==null){for(e.flags|=128,Js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(vt,vt.current&1|2),e.child}t=t.sibling}s.tail!==null&&wt()>Ns&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304)}else{if(!i)if(t=Tl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!gt)return Qt(e),null}else 2*wt()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,i=!0,Js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,n=vt.current,ht(vt,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return Wd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function kx(t,e){switch(Td(e),e.tag){case 1:return pn(e.type)&&vl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),mt(hn),mt(nn),Ld(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ud(e),null;case 13:if(mt(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(vt),null;case 4:return Ls(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var go=!1,tn=!1,Hx=typeof WeakSet=="function"?WeakSet:Set,ge=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){yt(t,e,i)}else n.current=null}function ef(t,e,n){try{n()}catch(i){yt(t,e,i)}}var mp=!1;function Vx(t,e){if(Oc=hl,t=Rg(),yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,h=t,f=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(p=h.firstChild)!==null;)f=h,h=p;for(;;){if(h===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++d===i&&(l=a),(p=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=p}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bc={focusedElem:t,selectionRange:n},hl=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var M=v.memoizedProps,g=v.memoizedState,c=e.stateNode,m=c.getSnapshotBeforeUpdate(e.elementType===e.type?M:Gn(e.type,M),g);c.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){yt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return v=mp,mp=!1,v}function Ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ef(e,n,s)}r=r.next}while(r!==i)}}function ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function tf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ev(t){var e=t.alternate;e!==null&&(t.alternate=null,Ev(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ai],delete e[Ia],delete e[Hc],delete e[Tx],delete e[wx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Tv(t){return t.tag===5||t.tag===3||t.tag===4}function gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Tv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=gl));else if(i!==4&&(t=t.child,t!==null))for(nf(t,e,n),t=t.sibling;t!==null;)nf(t,e,n),t=t.sibling}function rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rf(t,e,n),t=t.sibling;t!==null;)rf(t,e,n),t=t.sibling}var Xt=null,Wn=!1;function ki(t,e,n){for(n=n.child;n!==null;)wv(t,e,n),n=n.sibling}function wv(t,e,n){if(ci&&typeof ci.onCommitFiberUnmount=="function")try{ci.onCommitFiberUnmount(kl,n)}catch{}switch(n.tag){case 5:tn||_s(n,e);case 6:var i=Xt,r=Wn;Xt=null,ki(t,e,n),Xt=i,Wn=r,Xt!==null&&(Wn?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(Wn?(t=Xt,n=n.stateNode,t.nodeType===8?Eu(t.parentNode,n):t.nodeType===1&&Eu(t,n),ba(t)):Eu(Xt,n.stateNode));break;case 4:i=Xt,r=Wn,Xt=n.stateNode.containerInfo,Wn=!0,ki(t,e,n),Xt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ef(n,e,a),r=r.next}while(r!==i)}ki(t,e,n);break;case 1:if(!tn&&(_s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){yt(n,e,o)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,ki(t,e,n),tn=i):ki(t,e,n);break;default:ki(t,e,n)}}function vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Hx),e.forEach(function(i){var r=Zx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Xt=o.stateNode,Wn=!1;break e;case 3:Xt=o.stateNode.containerInfo,Wn=!0;break e;case 4:Xt=o.stateNode.containerInfo,Wn=!0;break e}o=o.return}if(Xt===null)throw Error(ee(160));wv(s,a,r),Xt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Av(e,t),e=e.sibling}function Av(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ti(t),i&4){try{Ma(3,t,t.return),ql(3,t)}catch(M){yt(t,t.return,M)}try{Ma(5,t,t.return)}catch(M){yt(t,t.return,M)}}break;case 1:zn(e,t),ti(t),i&512&&n!==null&&_s(n,n.return);break;case 5:if(zn(e,t),ti(t),i&512&&n!==null&&_s(n,n.return),t.flags&32){var r=t.stateNode;try{wa(r,"")}catch(M){yt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&qm(r,s),Rc(o,a);var u=Rc(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?Jm(r,h):d==="dangerouslySetInnerHTML"?Zm(r,h):d==="children"?wa(r,h):ud(r,d,h,u)}switch(o){case"input":yc(r,s);break;case"textarea":$m(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ms(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ia]=s}catch(M){yt(t,t.return,M)}}break;case 6:if(zn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){yt(t,t.return,M)}}break;case 3:if(zn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(M){yt(t,t.return,M)}break;case 4:zn(e,t),ti(t);break;case 13:zn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vd=wt())),i&4&&vp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(u=tn)||d,zn(e,t),tn=u):zn(e,t),ti(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(ge=t,d=t.child;d!==null;){for(h=ge=d;ge!==null;){switch(f=ge,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ma(4,f,f.return);break;case 1:_s(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(M){yt(i,n,M)}}break;case 5:_s(f,f.return);break;case 22:if(f.memoizedState!==null){xp(h);continue}}p!==null?(p.return=f,ge=p):xp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Qm("display",a))}catch(M){yt(t,t.return,M)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(M){yt(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zn(e,t),ti(t),i&4&&vp(t);break;case 21:break;default:zn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Tv(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wa(r,""),i.flags&=-33);var s=gp(t);rf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=gp(t);nf(t,o,a);break;default:throw Error(ee(161))}}catch(l){yt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Gx(t,e,n){ge=t,Rv(t)}function Rv(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||go;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||tn;o=go;var u=tn;if(go=a,(tn=l)&&!u)for(ge=r;ge!==null;)a=ge,l=a.child,a.tag===22&&a.memoizedState!==null?Sp(r):l!==null?(l.return=a,ge=l):Sp(r);for(;s!==null;)ge=s,Rv(s),s=s.sibling;ge=r,go=o,tn=u}_p(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):_p(t)}}function _p(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&np(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}np(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&ba(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}tn||e.flags&512&&tf(e)}catch(f){yt(e,e.return,f)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function xp(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function Sp(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ql(4,e)}catch(l){yt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{tf(e)}catch(l){yt(e,s,l)}break;case 5:var a=e.return;try{tf(e)}catch(l){yt(e,a,l)}}}catch(l){yt(e,e.return,l)}if(e===t){ge=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ge=o;break}ge=e.return}}var Wx=Math.ceil,Rl=Fi.ReactCurrentDispatcher,kd=Fi.ReactCurrentOwner,Ln=Fi.ReactCurrentBatchConfig,$e=0,Vt=null,bt=null,Yt=0,Sn=0,xs=mr(0),Lt=0,ka=null,zr=0,$l=0,Hd=0,ya=null,fn=null,Vd=0,Ns=1/0,Mi=null,Cl=!1,sf=null,or=null,vo=!1,Ji=null,bl=0,Ea=0,af=null,Jo=-1,el=0;function an(){return $e&6?wt():Jo!==-1?Jo:Jo=wt()}function lr(t){return t.mode&1?$e&2&&Yt!==0?Yt&-Yt:Rx.transition!==null?(el===0&&(el=fg()),el):(t=st,t!==0||(t=window.event,t=t===void 0?16:_g(t.type)),t):1}function Kn(t,e,n,i){if(50<Ea)throw Ea=0,af=null,Error(ee(185));Ga(t,n,i),(!($e&2)||t!==Vt)&&(t===Vt&&(!($e&2)&&($l|=n),Lt===4&&Zi(t,Yt)),mn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ns=wt()+500,Xl&&gr()))}function mn(t,e){var n=t.callbackNode;R0(t,e);var i=dl(t,t===Vt?Yt:0);if(i===0)n!==null&&bh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&bh(n),e===1)t.tag===0?Ax(Mp.bind(null,t)):Og(Mp.bind(null,t)),yx(function(){!($e&6)&&gr()}),n=null;else{switch(dg(i)){case 1:n=pd;break;case 4:n=ug;break;case 16:n=fl;break;case 536870912:n=cg;break;default:n=fl}n=Nv(n,Cv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Cv(t,e){if(Jo=-1,el=0,$e&6)throw Error(ee(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var i=dl(t,t===Vt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Pl(t,i);else{e=i;var r=$e;$e|=2;var s=Pv();(Vt!==t||Yt!==e)&&(Mi=null,Ns=wt()+500,Ir(t,e));do try{Yx();break}catch(o){bv(t,o)}while(!0);Rd(),Rl.current=s,$e=r,bt!==null?e=0:(Vt=null,Yt=0,e=Lt)}if(e!==0){if(e===2&&(r=Uc(t),r!==0&&(i=r,e=of(t,r))),e===1)throw n=ka,Ir(t,0),Zi(t,i),mn(t,wt()),n;if(e===6)Zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Xx(r)&&(e=Pl(t,i),e===2&&(s=Uc(t),s!==0&&(i=s,e=of(t,s))),e===1))throw n=ka,Ir(t,0),Zi(t,i),mn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Ar(t,fn,Mi);break;case 3:if(Zi(t,i),(i&130023424)===i&&(e=Vd+500-wt(),10<e)){if(dl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){an(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=kc(Ar.bind(null,t,fn,Mi),e);break}Ar(t,fn,Mi);break;case 4:if(Zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-$n(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Wx(i/1960))-i,10<i){t.timeoutHandle=kc(Ar.bind(null,t,fn,Mi),i);break}Ar(t,fn,Mi);break;case 5:Ar(t,fn,Mi);break;default:throw Error(ee(329))}}}return mn(t,wt()),t.callbackNode===n?Cv.bind(null,t):null}function of(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=Pl(t,e),t!==2&&(e=fn,fn=n,e!==null&&lf(e)),t}function lf(t){fn===null?fn=t:fn.push.apply(fn,t)}function Xx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Zi(t,e){for(e&=~Hd,e&=~$l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function Mp(t){if($e&6)throw Error(ee(327));As();var e=dl(t,0);if(!(e&1))return mn(t,wt()),null;var n=Pl(t,e);if(t.tag!==0&&n===2){var i=Uc(t);i!==0&&(e=i,n=of(t,i))}if(n===1)throw n=ka,Ir(t,0),Zi(t,e),mn(t,wt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,fn,Mi),mn(t,wt()),null}function Gd(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ns=wt()+500,Xl&&gr())}}function kr(t){Ji!==null&&Ji.tag===0&&!($e&6)&&As();var e=$e;$e|=1;var n=Ln.transition,i=st;try{if(Ln.transition=null,st=1,t)return t()}finally{st=i,Ln.transition=n,$e=e,!($e&6)&&gr()}}function Wd(){Sn=xs.current,mt(xs)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Mx(n)),bt!==null)for(n=bt.return;n!==null;){var i=n;switch(Td(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vl();break;case 3:Ls(),mt(hn),mt(nn),Ld();break;case 5:Ud(i);break;case 4:Ls();break;case 13:mt(vt);break;case 19:mt(vt);break;case 10:Cd(i.type._context);break;case 22:case 23:Wd()}n=n.return}if(Vt=t,bt=t=ur(t.current,null),Yt=Sn=e,Lt=0,ka=null,Hd=$l=zr=0,fn=ya=null,Dr!==null){for(e=0;e<Dr.length;e++)if(n=Dr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}Dr=null}return t}function bv(t,e){do{var n=bt;try{if(Rd(),Ko.current=Al,wl){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wl=!1}if(Br=0,kt=Dt=xt=null,Sa=!1,Oa=0,kd.current=null,n===null||n.return===null){Lt=1,ka=e,bt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Yt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=lp(a);if(p!==null){p.flags&=-257,up(p,a,o,s,e),p.mode&1&&op(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var M=new Set;M.add(l),e.updateQueue=M}else v.add(l);break e}else{if(!(e&1)){op(s,u,e),Xd();break e}l=Error(ee(426))}}else if(gt&&o.mode&1){var g=lp(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),up(g,a,o,s,e),wd(Is(l,o));break e}}s=l=Is(l,o),Lt!==4&&(Lt=2),ya===null?ya=[s]:ya.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var c=dv(s,l,e);tp(s,c);break e;case 1:o=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(or===null||!or.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=hv(s,o,e);tp(s,y);break e}}s=s.return}while(s!==null)}Uv(n)}catch(R){e=R,bt===n&&n!==null&&(bt=n=n.return);continue}break}while(!0)}function Pv(){var t=Rl.current;return Rl.current=Al,t===null?Al:t}function Xd(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Vt===null||!(zr&268435455)&&!($l&268435455)||Zi(Vt,Yt)}function Pl(t,e){var n=$e;$e|=2;var i=Pv();(Vt!==t||Yt!==e)&&(Mi=null,Ir(t,e));do try{jx();break}catch(r){bv(t,r)}while(!0);if(Rd(),$e=n,Rl.current=i,bt!==null)throw Error(ee(261));return Vt=null,Yt=0,Lt}function jx(){for(;bt!==null;)Dv(bt)}function Yx(){for(;bt!==null&&!_0();)Dv(bt)}function Dv(t){var e=Iv(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?Uv(t):bt=e,kd.current=null}function Uv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=kx(n,e),n!==null){n.flags&=32767,bt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,bt=null;return}}else if(n=zx(n,e,Sn),n!==null){bt=n;return}if(e=e.sibling,e!==null){bt=e;return}bt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Ar(t,e,n){var i=st,r=Ln.transition;try{Ln.transition=null,st=1,qx(t,e,n,i)}finally{Ln.transition=r,st=i}return null}function qx(t,e,n,i){do As();while(Ji!==null);if($e&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(C0(t,s),t===Vt&&(bt=Vt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,Nv(fl,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var a=st;st=1;var o=$e;$e|=4,kd.current=null,Vx(t,n),Av(n,t),px(Bc),hl=!!Oc,Bc=Oc=null,t.current=n,Gx(n),x0(),$e=o,st=a,Ln.transition=s}else t.current=n;if(vo&&(vo=!1,Ji=t,bl=r),s=t.pendingLanes,s===0&&(or=null),y0(n.stateNode),mn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Cl)throw Cl=!1,t=sf,sf=null,t;return bl&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===af?Ea++:(Ea=0,af=t):Ea=0,gr(),null}function As(){if(Ji!==null){var t=dg(bl),e=Ln.transition,n=st;try{if(Ln.transition=null,st=16>t?16:t,Ji===null)var i=!1;else{if(t=Ji,Ji=null,bl=0,$e&6)throw Error(ee(331));var r=$e;for($e|=4,ge=t.current;ge!==null;){var s=ge,a=s.child;if(ge.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(ge=u;ge!==null;){var d=ge;switch(d.tag){case 0:case 11:case 15:Ma(8,d,s)}var h=d.child;if(h!==null)h.return=d,ge=h;else for(;ge!==null;){d=ge;var f=d.sibling,p=d.return;if(Ev(d),d===u){ge=null;break}if(f!==null){f.return=p,ge=f;break}ge=p}}}var v=s.alternate;if(v!==null){var M=v.child;if(M!==null){v.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}ge=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ge=a;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ma(9,s,s.return)}var c=s.sibling;if(c!==null){c.return=s.return,ge=c;break e}ge=s.return}}var m=t.current;for(ge=m;ge!==null;){a=ge;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,ge=_;else e:for(a=m;ge!==null;){if(o=ge,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ql(9,o)}}catch(R){yt(o,o.return,R)}if(o===a){ge=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,ge=y;break e}ge=o.return}}if($e=r,gr(),ci&&typeof ci.onPostCommitFiberRoot=="function")try{ci.onPostCommitFiberRoot(kl,t)}catch{}i=!0}return i}finally{st=n,Ln.transition=e}}return!1}function yp(t,e,n){e=Is(n,e),e=dv(t,e,1),t=ar(t,e,1),e=an(),t!==null&&(Ga(t,1,e),mn(t,e))}function yt(t,e,n){if(t.tag===3)yp(t,t,n);else for(;e!==null;){if(e.tag===3){yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){t=Is(n,t),t=hv(e,t,1),e=ar(e,t,1),t=an(),e!==null&&(Ga(e,1,t),mn(e,t));break}}e=e.return}}function $x(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=an(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Yt&n)===n&&(Lt===4||Lt===3&&(Yt&130023424)===Yt&&500>wt()-Vd?Ir(t,0):Hd|=n),mn(t,e)}function Lv(t,e){e===0&&(t.mode&1?(e=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):e=1);var n=an();t=Pi(t,e),t!==null&&(Ga(t,e,n),mn(t,n))}function Kx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lv(t,n)}function Zx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Lv(t,n)}var Iv;Iv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,Bx(t,e,n);dn=!!(t.flags&131072)}else dn=!1,gt&&e.flags&1048576&&Bg(e,Sl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Qo(t,e),t=e.pendingProps;var r=Ps(e,nn.current);ws(e,n),r=Nd(null,e,i,t,r,n);var s=Fd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,_l(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pd(e),r.updater=Yl,e.stateNode=r,r._reactInternals=e,Yc(e,i,t,n),e=Kc(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&Ed(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Qo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Jx(i),t=Gn(i,t),r){case 0:e=$c(null,e,i,t,n);break e;case 1:e=dp(null,e,i,t,n);break e;case 11:e=cp(null,e,i,t,n);break e;case 14:e=fp(null,e,i,Gn(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),$c(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),dp(t,e,i,r,n);case 3:e:{if(vv(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Wg(t,e),El(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Is(Error(ee(423)),e),e=hp(t,e,i,n,r);break e}else if(i!==r){r=Is(Error(ee(424)),e),e=hp(t,e,i,n,r);break e}else for(En=sr(e.stateNode.containerInfo.firstChild),Tn=e,gt=!0,Xn=null,n=Vg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ds(),i===r){e=Di(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return Xg(e),t===null&&Wc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,zc(i,r)?a=null:s!==null&&zc(i,s)&&(e.flags|=32),gv(t,e),sn(t,e,a,n),e.child;case 6:return t===null&&Wc(e),null;case 13:return _v(t,e,n);case 4:return Dd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Us(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),cp(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,ht(Ml,i._currentValue),i._currentValue=a,s!==null)if(Zn(s.value,a)){if(s.children===r.children&&!hn.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xc(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ee(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Xc(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ws(e,n),r=Nn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),fp(t,e,i,r,n);case 15:return pv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Qo(t,e),e.tag=1,pn(i)?(t=!0,_l(e)):t=!1,ws(e,n),fv(e,i,r),Yc(e,i,r,n),Kc(null,e,i,!0,t,n);case 19:return xv(t,e,n);case 22:return mv(t,e,n)}throw Error(ee(156,e.tag))};function Nv(t,e){return lg(t,e)}function Qx(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new Qx(t,e,n,i)}function jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jx(t){if(typeof t=="function")return jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fd)return 11;if(t===dd)return 14}return 2}function ur(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")jd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case us:return Nr(n.children,r,s,e);case cd:a=8,r|=8;break;case vc:return t=Un(12,n,e,r|2),t.elementType=vc,t.lanes=s,t;case _c:return t=Un(13,n,e,r),t.elementType=_c,t.lanes=s,t;case xc:return t=Un(19,n,e,r),t.elementType=xc,t.lanes=s,t;case Xm:return Kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Gm:a=10;break e;case Wm:a=9;break e;case fd:a=11;break e;case dd:a=14;break e;case qi:a=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=Un(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function Kl(t,e,n,i){return t=Un(22,t,i,e),t.elementType=Xm,t.lanes=n,t.stateNode={isHidden:!1},t}function Du(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function Uu(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=du(0),this.expirationTimes=du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yd(t,e,n,i,r,s,a,o,l){return t=new eS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(s),t}function tS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Fv(t){if(!t)return dr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(pn(n))return Fg(t,n,e)}return e}function Ov(t,e,n,i,r,s,a,o,l){return t=Yd(n,i,!0,t,r,s,a,o,l),t.context=Fv(null),n=t.current,i=an(),r=lr(n),s=Ai(i,r),s.callback=e??null,ar(n,s,r),t.current.lanes=r,Ga(t,r,i),mn(t,i),t}function Zl(t,e,n,i){var r=e.current,s=an(),a=lr(r);return n=Fv(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,a),t!==null&&(Kn(t,r,a,s),$o(t,r,a)),a}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Ep(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){Ep(t,e),(t=t.alternate)&&Ep(t,e)}function nS(){return null}var Bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function $d(t){this._internalRoot=t}Ql.prototype.render=$d.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));Zl(t,e,null,null)};Ql.prototype.unmount=$d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;kr(function(){Zl(null,t,null,null)}),e[bi]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=mg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&vg(t)}};function Kd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function iS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Dl(a);s.call(u)}}var a=Ov(e,i,t,0,null,!1,!1,"",Tp);return t._reactRootContainer=a,t[bi]=a.current,Ua(t.nodeType===8?t.parentNode:t),kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Dl(l);o.call(u)}}var l=Yd(t,0,!1,null,null,!1,!1,"",Tp);return t._reactRootContainer=l,t[bi]=l.current,Ua(t.nodeType===8?t.parentNode:t),kr(function(){Zl(e,l,n,i)}),l}function eu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Dl(a);o.call(l)}}Zl(e,a,t,r)}else a=iS(n,e,t,r,i);return Dl(a)}hg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fa(e.pendingLanes);n!==0&&(md(e,n|1),mn(e,wt()),!($e&6)&&(Ns=wt()+500,gr()))}break;case 13:kr(function(){var i=Pi(t,1);if(i!==null){var r=an();Kn(i,t,1,r)}}),qd(t,1)}};gd=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=an();Kn(e,t,134217728,n)}qd(t,134217728)}};pg=function(t){if(t.tag===13){var e=lr(t),n=Pi(t,e);if(n!==null){var i=an();Kn(n,t,e,i)}qd(t,e)}};mg=function(){return st};gg=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};bc=function(t,e,n){switch(e){case"input":if(yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Wl(i);if(!r)throw Error(ee(90));Ym(i),yc(i,r)}}}break;case"textarea":$m(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};ng=Gd;ig=kr;var rS={usingClientEntryPoint:!1,Events:[Xa,hs,Wl,eg,tg,Gd]},ea={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},sS={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ag(t),t===null?null:t.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||nS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{kl=_o.inject(sS),ci=_o}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kd(e))throw Error(ee(200));return tS(t,e,null,n)};Rn.createRoot=function(t,e){if(!Kd(t))throw Error(ee(299));var n=!1,i="",r=Bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yd(t,1,!1,null,null,n,!1,i,r),t[bi]=e.current,Ua(t.nodeType===8?t.parentNode:t),new $d(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=ag(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return kr(t)};Rn.hydrate=function(t,e,n){if(!Jl(e))throw Error(ee(200));return eu(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Kd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Bv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ov(e,null,t,1,n??null,r,!1,s,a),t[bi]=e.current,Ua(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ql(e)};Rn.render=function(t,e,n){if(!Jl(e))throw Error(ee(200));return eu(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!Jl(t))throw Error(ee(40));return t._reactRootContainer?(kr(function(){eu(null,null,t,!1,function(){t._reactRootContainer=null,t[bi]=null})}),!0):!1};Rn.unstable_batchedUpdates=Gd;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Jl(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return eu(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zv)}catch(t){console.error(t)}}zv(),zm.exports=Rn;var aS=zm.exports,wp=aS;mc.createRoot=wp.createRoot,mc.hydrateRoot=wp.hydrateRoot;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="183",oS=0,Ap=1,lS=2,nl=1,uS=2,ha=3,Ui=0,Ht=1,yn=2,on=0,Rs=1,uf=2,Rp=3,Cp=4,cS=5,Cr=100,fS=101,dS=102,hS=103,pS=104,mS=200,gS=201,vS=202,_S=203,cf=204,ff=205,xS=206,SS=207,MS=208,yS=209,ES=210,TS=211,wS=212,AS=213,RS=214,df=0,Ul=1,hf=2,Fs=3,pf=4,mf=5,gf=6,vf=7,kv=0,CS=1,bS=2,di=0,Hv=1,Vv=2,Gv=3,Wv=4,Xv=5,jv=6,Yv=7,qv=300,Hr=301,Os=302,Lu=303,Iu=304,tu=306,_f=1e3,wi=1001,xf=1002,jt=1003,PS=1004,xo=1005,Pt=1006,Nu=1007,Lr=1008,Ut=1009,$v=1010,Kv=1011,Ha=1012,Zd=1013,hi=1014,Yn=1015,Li=1016,Qd=1017,Jd=1018,Bs=1020,Zv=35902,Qv=35899,Jv=1021,e_=1022,qn=1023,Ii=1026,er=1027,t_=1028,eh=1029,zs=1030,th=1031,nh=1033,il=33776,rl=33777,sl=33778,al=33779,Sf=35840,Mf=35841,yf=35842,Ef=35843,Tf=36196,wf=37492,Af=37496,Rf=37488,Cf=37489,bf=37490,Pf=37491,Df=37808,Uf=37809,Lf=37810,If=37811,Nf=37812,Ff=37813,Of=37814,Bf=37815,zf=37816,kf=37817,Hf=37818,Vf=37819,Gf=37820,Wf=37821,Xf=36492,jf=36494,Yf=36495,qf=36283,$f=36284,Kf=36285,Zf=36286,qa=3200,DS=0,US=1,oi="",lt="srgb",hr="srgb-linear",Ll="linear",rt="srgb",qr=7680,bp=519,LS=512,IS=513,NS=514,ih=515,FS=516,OS=517,rh=518,BS=519,Pp=35044,Dp="300 es",li=2e3,Il=2001;function zS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Nl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kS(){const t=Nl("canvas");return t.style.display="block",t}const Up={};function Lp(...t){const e="THREE."+t.shift();console.log(e,...t)}function n_(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Pe(...t){t=n_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Qe(...t){t=n_(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Fl(...t){const e=t.join(" ");e in Up||(Up[e]=!0,Pe(...t))}function HS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const VS={[df]:Ul,[hf]:gf,[pf]:vf,[Fs]:mf,[Ul]:df,[gf]:hf,[vf]:pf,[mf]:Fs};class Oi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fu=Math.PI/180,Qf=180/Math.PI;function $a(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function We(t,e,n){return Math.max(e,Math.min(n,t))}function GS(t,e){return(t%e+e)%e}function Ou(t,e,n){return(1-n)*t+n*e}function ta(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,n=0){Ie.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],d=i[r+2],h=i[r+3],f=s[a+0],p=s[a+1],v=s[a+2],M=s[a+3];if(h!==M||l!==f||u!==p||d!==v){let g=l*f+u*p+d*v+h*M;g<0&&(f=-f,p=-p,v=-v,M=-M,g=-g);let c=1-o;if(g<.9995){const m=Math.acos(g),_=Math.sin(m);c=Math.sin(c*m)/_,o=Math.sin(o*m)/_,l=l*c+f*o,u=u*c+p*o,d=d*c+v*o,h=h*c+M*o}else{l=l*c+f*o,u=u*c+p*o,d=d*c+v*o,h=h*c+M*o;const m=1/Math.sqrt(l*l+u*u+d*d+h*h);l*=m,u*=m,d*=m,h*=m}}e[n]=l,e[n+1]=u,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],d=i[r+3],h=s[a],f=s[a+1],p=s[a+2],v=s[a+3];return e[n]=o*v+d*h+l*p-u*f,e[n+1]=l*v+d*f+u*h-o*p,e[n+2]=u*v+d*p+o*f-l*h,e[n+3]=d*v-o*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=f*d*h+u*p*v,this._y=u*p*h-f*d*v,this._z=u*d*v+f*p*h,this._w=u*d*h-f*p*v;break;case"YXZ":this._x=f*d*h+u*p*v,this._y=u*p*h-f*d*v,this._z=u*d*v-f*p*h,this._w=u*d*h+f*p*v;break;case"ZXY":this._x=f*d*h-u*p*v,this._y=u*p*h+f*d*v,this._z=u*d*v+f*p*h,this._w=u*d*h-f*p*v;break;case"ZYX":this._x=f*d*h-u*p*v,this._y=u*p*h+f*d*v,this._z=u*d*v-f*p*h,this._w=u*d*h+f*p*v;break;case"YZX":this._x=f*d*h+u*p*v,this._y=u*p*h+f*d*v,this._z=u*d*v-f*p*h,this._w=u*d*h-f*p*v;break;case"XZY":this._x=f*d*h-u*p*v,this._y=u*p*h-f*d*v,this._z=u*d*v+f*p*h,this._w=u*d*h+f*p*v;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-u)*p,this._z=(a-r)*p}else if(i>o&&i>h){const p=2*Math.sqrt(1+i-o-h);this._w=(d-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+u)/p}else if(o>h){const p=2*Math.sqrt(1+o-i-h);this._w=(s-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-i-o);this._w=(a-r)/p,this._x=(s+u)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,d=n._w;return this._x=i*d+a*o+r*u-s*l,this._y=r*d+a*l+s*o-i*u,this._z=s*d+a*u+i*l-r*o,this._w=a*d-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),d=Math.sin(u);l=Math.sin(l*u)/d,n=Math.sin(n*u)/d,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Ip.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*u+a*h-o*d,this.y=i+l*d+o*u-s*h,this.z=r+l*h+s*d-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bu.copy(this).projectOnVector(e),this.sub(Bu)}reflect(e){return this.sub(Bu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bu=new z,Ip=new Xs;class Oe{constructor(e,n,i,r,s,a,o,l,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],d=i[4],h=i[7],f=i[2],p=i[5],v=i[8],M=r[0],g=r[3],c=r[6],m=r[1],_=r[4],y=r[7],R=r[2],A=r[5],C=r[8];return s[0]=a*M+o*m+l*R,s[3]=a*g+o*_+l*A,s[6]=a*c+o*y+l*C,s[1]=u*M+d*m+h*R,s[4]=u*g+d*_+h*A,s[7]=u*c+d*y+h*C,s[2]=f*M+p*m+v*R,s[5]=f*g+p*_+v*A,s[8]=f*c+p*y+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8];return n*a*d-n*o*u-i*s*d+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],h=d*a-o*u,f=o*l-d*s,p=u*s-a*l,v=n*h+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=h*M,e[1]=(r*u-d*i)*M,e[2]=(o*i-r*a)*M,e[3]=f*M,e[4]=(d*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=p*M,e[7]=(i*l-u*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(zu.makeScale(e,n)),this}rotate(e){return this.premultiply(zu.makeRotation(-e)),this}translate(e,n){return this.premultiply(zu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zu=new Oe,Np=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fp=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WS(){const t={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===rt&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===rt&&(r.r=Cs(r.r),r.g=Cs(r.g),r.b=Cs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===oi?Ll:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Fl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Fl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[hr]:{primaries:e,whitePoint:i,transfer:Ll,toXYZ:Np,fromXYZ:Fp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:lt},outputColorSpaceConfig:{drawingBufferColorSpace:lt}},[lt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:Np,fromXYZ:Fp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:lt}}}),t}const je=WS();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let $r;class XS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{$r===void 0&&($r=Nl("canvas")),$r.width=e.width,$r.height=e.height;const r=$r.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=$r}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Nl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jS=0;class sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jS++}),this.uuid=$a(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ku(r[a].image)):s.push(ku(r[a]))}else s=ku(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ku(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?XS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let YS=0;const Hu=new z;class qt extends Oi{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=wi,r=wi,s=Pt,a=Lr,o=qn,l=Ut,u=qt.DEFAULT_ANISOTROPY,d=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=$a(),this.name="",this.source=new sh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hu).x}get height(){return this.source.getSize(Hu).y}get depth(){return this.source.getSize(Hu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Pe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Pe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _f:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _f:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=qv;qt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],d=l[4],h=l[8],f=l[1],p=l[5],v=l[9],M=l[2],g=l[6],c=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+M)<.1&&Math.abs(v+g)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,y=(p+1)/2,R=(c+1)/2,A=(d+f)/4,C=(h+M)/4,S=(v+g)/4;return _>y&&_>R?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=C/i):y>R?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=S/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=S/s),this.set(i,r,s,n),this}let m=Math.sqrt((g-v)*(g-v)+(h-M)*(h-M)+(f-d)*(f-d));return Math.abs(m)<.001&&(m=1),this.x=(g-v)/m,this.y=(h-M)/m,this.z=(f-d)/m,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this.w=We(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this.w=We(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qS extends Oi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new qt(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new sh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class It extends qS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class i_ extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $S extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jt,this.minFilter=jt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class At{constructor(e,n,i,r,s,a,o,l,u,d,h,f,p,v,M,g){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,d,h,f,p,v,M,g)}set(e,n,i,r,s,a,o,l,u,d,h,f,p,v,M,g){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=s,c[5]=a,c[9]=o,c[13]=l,c[2]=u,c[6]=d,c[10]=h,c[14]=f,c[3]=p,c[7]=v,c[11]=M,c[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),a=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,p=a*h,v=o*d,M=o*h;n[0]=l*d,n[4]=-l*h,n[8]=u,n[1]=p+v*u,n[5]=f-M*u,n[9]=-o*l,n[2]=M-f*u,n[6]=v+p*u,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,p=l*h,v=u*d,M=u*h;n[0]=f+M*o,n[4]=v*o-p,n[8]=a*u,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=p*o-v,n[6]=M+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,p=l*h,v=u*d,M=u*h;n[0]=f-M*o,n[4]=-a*h,n[8]=v+p*o,n[1]=p+v*o,n[5]=a*d,n[9]=M-f*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,p=a*h,v=o*d,M=o*h;n[0]=l*d,n[4]=v*u-p,n[8]=f*u+M,n[1]=l*h,n[5]=M*u+f,n[9]=p*u-v,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*u,v=o*l,M=o*u;n[0]=l*d,n[4]=M-f*h,n[8]=v*h+p,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-u*d,n[6]=p*h+v,n[10]=f-M*h}else if(e.order==="XZY"){const f=a*l,p=a*u,v=o*l,M=o*u;n[0]=l*d,n[4]=-h,n[8]=u*d,n[1]=f*h+M,n[5]=a*d,n[9]=p*h-v,n[2]=v*h-p,n[6]=o*d,n[10]=M*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KS,e,ZS)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Hi.crossVectors(i,_n),Hi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Hi.crossVectors(i,_n)),Hi.normalize(),So.crossVectors(_n,Hi),r[0]=Hi.x,r[4]=So.x,r[8]=_n.x,r[1]=Hi.y,r[5]=So.y,r[9]=_n.y,r[2]=Hi.z,r[6]=So.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],d=i[1],h=i[5],f=i[9],p=i[13],v=i[2],M=i[6],g=i[10],c=i[14],m=i[3],_=i[7],y=i[11],R=i[15],A=r[0],C=r[4],S=r[8],T=r[12],F=r[1],b=r[5],H=r[9],V=r[13],Y=r[2],k=r[6],G=r[10],I=r[14],O=r[3],X=r[7],Q=r[11],oe=r[15];return s[0]=a*A+o*F+l*Y+u*O,s[4]=a*C+o*b+l*k+u*X,s[8]=a*S+o*H+l*G+u*Q,s[12]=a*T+o*V+l*I+u*oe,s[1]=d*A+h*F+f*Y+p*O,s[5]=d*C+h*b+f*k+p*X,s[9]=d*S+h*H+f*G+p*Q,s[13]=d*T+h*V+f*I+p*oe,s[2]=v*A+M*F+g*Y+c*O,s[6]=v*C+M*b+g*k+c*X,s[10]=v*S+M*H+g*G+c*Q,s[14]=v*T+M*V+g*I+c*oe,s[3]=m*A+_*F+y*Y+R*O,s[7]=m*C+_*b+y*k+R*X,s[11]=m*S+_*H+y*G+R*Q,s[15]=m*T+_*V+y*I+R*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],d=e[2],h=e[6],f=e[10],p=e[14],v=e[3],M=e[7],g=e[11],c=e[15],m=l*p-u*f,_=o*p-u*h,y=o*f-l*h,R=a*p-u*d,A=a*f-l*d,C=a*h-o*d;return n*(M*m-g*_+c*y)-i*(v*m-g*R+c*A)+r*(v*_-M*R+c*C)-s*(v*y-M*A+g*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],d=e[8],h=e[9],f=e[10],p=e[11],v=e[12],M=e[13],g=e[14],c=e[15],m=n*o-i*a,_=n*l-r*a,y=n*u-s*a,R=i*l-r*o,A=i*u-s*o,C=r*u-s*l,S=d*M-h*v,T=d*g-f*v,F=d*c-p*v,b=h*g-f*M,H=h*c-p*M,V=f*c-p*g,Y=m*V-_*H+y*b+R*F-A*T+C*S;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/Y;return e[0]=(o*V-l*H+u*b)*k,e[1]=(r*H-i*V-s*b)*k,e[2]=(M*C-g*A+c*R)*k,e[3]=(f*A-h*C-p*R)*k,e[4]=(l*F-a*V-u*T)*k,e[5]=(n*V-r*F+s*T)*k,e[6]=(g*y-v*C-c*_)*k,e[7]=(d*C-f*y+p*_)*k,e[8]=(a*H-o*F+u*S)*k,e[9]=(i*F-n*H-s*S)*k,e[10]=(v*A-M*y+c*m)*k,e[11]=(h*y-d*A-p*m)*k,e[12]=(o*T-a*b-l*S)*k,e[13]=(n*b-i*T+r*S)*k,e[14]=(M*_-v*R-g*m)*k,e[15]=(d*R-h*_+f*m)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,d=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,d*o+i,d*l-r*a,0,u*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,d=a+a,h=o+o,f=s*u,p=s*d,v=s*h,M=a*d,g=a*h,c=o*h,m=l*u,_=l*d,y=l*h,R=i.x,A=i.y,C=i.z;return r[0]=(1-(M+c))*R,r[1]=(p+y)*R,r[2]=(v-_)*R,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(f+c))*A,r[6]=(g+m)*A,r[7]=0,r[8]=(v+_)*C,r[9]=(g-m)*C,r[10]=(1-(f+M))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),l=Kr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kn.copy(this);const u=1/a,d=1/o,h=1/l;return kn.elements[0]*=u,kn.elements[1]*=u,kn.elements[2]*=u,kn.elements[4]*=d,kn.elements[5]*=d,kn.elements[6]*=d,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,n.setFromRotationMatrix(kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=li,l=!1){const u=this.elements,d=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let v,M;if(l)v=s/(a-s),M=a*s/(a-s);else if(o===li)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Il)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=h,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=li,l=!1){const u=this.elements,d=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let v,M;if(l)v=1/(a-s),M=a/(a-s);else if(o===li)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===Il)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=d,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=h,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=v,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Kr=new z,kn=new At,KS=new z(0,0,0),ZS=new z(1,1,1),Hi=new z,So=new z,_n=new z,Op=new At,Bp=new Xs;class Ni{constructor(e=0,n=0,i=0,r=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],d=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Op.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Op,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Bp.setFromEuler(this),this.setFromQuaternion(Bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class r_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QS=0;const zp=new z,Zr=new Xs,gi=new At,Mo=new z,na=new z,JS=new z,eM=new Xs,kp=new z(1,0,0),Hp=new z(0,1,0),Vp=new z(0,0,1),Gp={type:"added"},tM={type:"removed"},Qr={type:"childadded",child:null},Vu={type:"childremoved",child:null};class gn extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=$a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new z,n=new Ni,i=new Xs,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Oe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(kp,e)}rotateY(e){return this.rotateOnAxis(Hp,e)}rotateZ(e){return this.rotateOnAxis(Vp,e)}translateOnAxis(e,n){return zp.copy(e).applyQuaternion(this.quaternion),this.position.add(zp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(kp,e)}translateY(e){return this.translateOnAxis(Hp,e)}translateZ(e){return this.translateOnAxis(Vp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Mo.copy(e):Mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(na,Mo,this.up):gi.lookAt(Mo,na,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(gi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Qe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gp),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):Qe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(tM),Vu.child=e,this.dispatchEvent(Vu),Vu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gp),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,JS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,eM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new z(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yo extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nM={type:"move"};class Gu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),c=this._getHandJoint(u,M);g!==null&&(c.matrix.fromArray(g.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=g.radius),c.visible=g!==null}const d=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=d.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(nM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new yo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const s_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},Eo={h:0,s:0,l:0};function Wu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=GS(e,1),n=We(n,0,1),i=We(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Wu(a,s,e+1/3),this.g=Wu(a,s,e),this.b=Wu(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=lt){function i(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=lt){const i=s_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=lt){return je.workingToColorSpace(en.copy(this),e),Math.round(We(en.r*255,0,255))*65536+Math.round(We(en.g*255,0,255))*256+Math.round(We(en.b*255,0,255))}getHexString(e=lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const d=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=d,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=lt){je.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==lt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(Eo);const i=Ou(Vi.h,Eo.h,n),r=Ou(Vi.s,Eo.s,n),s=Ou(Vi.l,Eo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new qe;qe.NAMES=s_;class Jf extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Hn=new z,vi=new z,Xu=new z,_i=new z,Jr=new z,es=new z,Wp=new z,ju=new z,Yu=new z,qu=new z,$u=new _t,Ku=new _t,Zu=new _t;class jn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),vi.subVectors(i,n),Xu.subVectors(e,n);const a=Hn.dot(Hn),o=Hn.dot(vi),l=Hn.dot(Xu),u=vi.dot(vi),d=vi.dot(Xu),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-o*d)*f,v=(a*d-o*l)*f;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return $u.setScalar(0),Ku.setScalar(0),Zu.setScalar(0),$u.fromBufferAttribute(e,n),Ku.fromBufferAttribute(e,i),Zu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($u,s.x),a.addScaledVector(Ku,s.y),a.addScaledVector(Zu,s.z),a}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),vi.subVectors(e,n),Hn.cross(vi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),vi.subVectors(this.a,this.b),Hn.cross(vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Jr.subVectors(r,i),es.subVectors(s,i),ju.subVectors(e,i);const l=Jr.dot(ju),u=es.dot(ju);if(l<=0&&u<=0)return n.copy(i);Yu.subVectors(e,r);const d=Jr.dot(Yu),h=es.dot(Yu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*u;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Jr,a);qu.subVectors(e,s);const p=Jr.dot(qu),v=es.dot(qu);if(v>=0&&p<=v)return n.copy(s);const M=p*u-l*v;if(M<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(es,o);const g=d*v-p*h;if(g<=0&&h-d>=0&&p-v>=0)return Wp.subVectors(s,r),o=(h-d)/(h-d+(p-v)),n.copy(r).addScaledVector(Wp,o);const c=1/(g+M+f);return a=M*c,o=f*c,n.copy(i).addScaledVector(Jr,a).addScaledVector(es,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ka{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(s,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),To.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),To.copy(i.boundingBox)),To.applyMatrix4(e.matrixWorld),this.union(To)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),wo.subVectors(this.max,ia),ts.subVectors(e.a,ia),ns.subVectors(e.b,ia),is.subVectors(e.c,ia),Gi.subVectors(ns,ts),Wi.subVectors(is,ns),xr.subVectors(ts,is);let n=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-xr.z,xr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,xr.z,0,-xr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-xr.y,xr.x,0];return!Qu(n,ts,ns,is,wo)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,ts,ns,is,wo))?!1:(Ao.crossVectors(Gi,Wi),n=[Ao.x,Ao.y,Ao.z],Qu(n,ts,ns,is,wo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new z,new z,new z,new z,new z,new z,new z,new z],Vn=new z,To=new Ka,ts=new z,ns=new z,is=new z,Gi=new z,Wi=new z,xr=new z,ia=new z,wo=new z,Ao=new z,Sr=new z;function Qu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Sr.fromArray(t,s);const o=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),u=n.dot(Sr),d=i.dot(Sr);if(Math.max(-Math.max(l,u,d),Math.min(l,u,d))>o)return!1}return!0}const Ct=new z,Ro=new Ie;let iM=0;class In{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:iM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Pp,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ro.fromBufferAttribute(this,n),Ro.applyMatrix3(e),this.setXY(n,Ro.x,Ro.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ta(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ta(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ta(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ta(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ta(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pp&&(e.usage=this.usage),e}}class a_ extends In{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class o_ extends In{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class wn extends In{constructor(e,n,i){super(new Float32Array(e),n,i)}}const rM=new Ka,ra=new z,Ju=new z;class nu{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):rM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const n=ra.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ra,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(Ju)),this.expandByPoint(ra.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let sM=0;const bn=new At,ec=new gn,rs=new z,xn=new Ka,sa=new Ka,zt=new z;class On extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=$a(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zS(e)?o_:a_)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return ec.lookAt(e),ec.updateMatrix(),this.applyMatrix4(ec.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Qe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(xn.min,sa.min),xn.expandByPoint(zt),zt.addVectors(xn.max,sa.max),xn.expandByPoint(zt)):(xn.expandByPoint(sa.min),xn.expandByPoint(sa.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(zt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,d=o.count;u<d;u++)zt.fromBufferAttribute(o,u),l&&(rs.fromBufferAttribute(e,u),zt.add(rs)),r=Math.max(r,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Qe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Qe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<i.count;S++)o[S]=new z,l[S]=new z;const u=new z,d=new z,h=new z,f=new Ie,p=new Ie,v=new Ie,M=new z,g=new z;function c(S,T,F){u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,F),f.fromBufferAttribute(s,S),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,F),d.sub(u),h.sub(u),p.sub(f),v.sub(f);const b=1/(p.x*v.y-v.x*p.y);isFinite(b)&&(M.copy(d).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(b),g.copy(h).multiplyScalar(p.x).addScaledVector(d,-v.x).multiplyScalar(b),o[S].add(M),o[T].add(M),o[F].add(M),l[S].add(g),l[T].add(g),l[F].add(g))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let S=0,T=m.length;S<T;++S){const F=m[S],b=F.start,H=F.count;for(let V=b,Y=b+H;V<Y;V+=3)c(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const _=new z,y=new z,R=new z,A=new z;function C(S){R.fromBufferAttribute(r,S),A.copy(R);const T=o[S];_.copy(T),_.sub(R.multiplyScalar(R.dot(T))).normalize(),y.crossVectors(A,T);const b=y.dot(l[S])<0?-1:1;a.setXYZW(S,_.x,_.y,_.z,b)}for(let S=0,T=m.length;S<T;++S){const F=m[S],b=F.start,H=F.count;for(let V=b,Y=b+H;V<Y;V+=3)C(e.getX(V+0)),C(e.getX(V+1)),C(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new In(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,u=new z,d=new z,h=new z;if(e)for(let f=0,p=e.count;f<p;f+=3){const v=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,g),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,M),u.fromBufferAttribute(i,g),o.add(d),l.add(d),u.add(d),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const u=o.array,d=o.itemSize,h=o.normalized,f=new u.constructor(l.length*d);let p=0,v=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?p=l[M]*o.data.stride+o.offset:p=l[M]*d;for(let c=0;c<d;c++)f[v++]=u[p++]}return new In(f,d,h)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new On,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let d=0,h=u.length;d<h;d++){const f=u[d],p=e(f,i);l.push(p)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],d=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const d=r[u];this.setAttribute(u,d.clone(n))}const s=e.morphAttributes;for(const u in s){const d=[],h=s[u];for(let f=0,p=h.length;f<p;f++)d.push(h[f].clone(n));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,d=a.length;u<d;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let aM=0;class Wr extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=$a(),this.name="",this.type="Material",this.blending=Rs,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cf,this.blendDst=ff,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Pe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Pe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==cf&&(i.blendSrc=this.blendSrc),this.blendDst!==ff&&(i.blendDst=this.blendDst),this.blendEquation!==Cr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new z,tc=new z,Co=new z,Xi=new z,nc=new z,bo=new z,ic=new z;class l_{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){tc.copy(e).add(n).multiplyScalar(.5),Co.copy(n).sub(e).normalize(),Xi.copy(this.origin).sub(tc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Co),o=Xi.dot(this.direction),l=-Xi.dot(Co),u=Xi.lengthSq(),d=Math.abs(1-a*a);let h,f,p,v;if(d>0)if(h=a*l-o,f=a*o-l,v=s*d,h>=0)if(f>=-v)if(f<=v){const M=1/d;h*=M,f*=M,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+u}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;else f<=-v?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(tc).addScaledVector(Co,f),p}intersectSphere(e,n){Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){nc.subVectors(n,e),bo.subVectors(i,e),ic.crossVectors(nc,bo);let a=this.direction.dot(ic),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);const l=o*this.direction.dot(bo.crossVectors(Xi,bo));if(l<0)return null;const u=o*this.direction.dot(nc.cross(Xi));if(u<0||l+u>a)return null;const d=-o*Xi.dot(ic);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class u_ extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=kv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xp=new At,Mr=new l_,Po=new nu,jp=new z,Do=new z,Uo=new z,Lo=new z,rc=new z,Io=new z,Yp=new z,No=new z;class Qn extends gn{constructor(e=new On,n=new u_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Io.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const d=o[l],h=s[l];d!==0&&(rc.fromBufferAttribute(h,e),a?Io.addScaledVector(rc,d):Io.addScaledVector(rc.sub(n),d))}n.add(Io)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),Mr.copy(e.ray).recast(e.near),!(Po.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Po,jp)===null||Mr.origin.distanceToSquared(jp)>(e.far-e.near)**2))&&(Xp.copy(s).invert(),Mr.copy(e.ray).applyMatrix4(Xp),!(i.boundingBox!==null&&Mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const g=f[v],c=a[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,R=_;y<R;y+=3){const A=o.getX(y),C=o.getX(y+1),S=o.getX(y+2);r=Fo(this,c,e,i,u,d,h,A,C,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let g=v,c=M;g<c;g+=3){const m=o.getX(g),_=o.getX(g+1),y=o.getX(g+2);r=Fo(this,a,e,i,u,d,h,m,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,M=f.length;v<M;v++){const g=f[v],c=a[g.materialIndex],m=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=m,R=_;y<R;y+=3){const A=y,C=y+1,S=y+2;r=Fo(this,c,e,i,u,d,h,A,C,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),M=Math.min(l.count,p.start+p.count);for(let g=v,c=M;g<c;g+=3){const m=g,_=g+1,y=g+2;r=Fo(this,a,e,i,u,d,h,m,_,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function oM(t,e,n,i,r,s,a,o){let l;if(e.side===Ht?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ui,o),l===null)return null;No.copy(o),No.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(No);return u<n.near||u>n.far?null:{distance:u,point:No.clone(),object:t}}function Fo(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Do),t.getVertexPosition(l,Uo),t.getVertexPosition(u,Lo);const d=oM(t,e,n,i,Do,Uo,Lo,Yp);if(d){const h=new z;jn.getBarycoord(Yp,Do,Uo,Lo,h),r&&(d.uv=jn.getInterpolatedAttribute(r,o,l,u,h,new Ie)),s&&(d.uv1=jn.getInterpolatedAttribute(s,o,l,u,h,new Ie)),a&&(d.normal=jn.getInterpolatedAttribute(a,o,l,u,h,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a:o,b:l,c:u,normal:new z,materialIndex:0};jn.getNormal(Do,Uo,Lo,f.normal),d.face=f,d.barycoord=h}return d}class lM extends qt{constructor(e=null,n=1,i=1,r,s,a,o,l,u=jt,d=jt,h,f){super(null,a,o,l,u,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const sc=new z,uM=new z,cM=new Oe;class Rr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sc.subVectors(i,n).cross(uM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(sc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||cM.getNormalMatrix(e),r=this.coplanarPoint(sc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yr=new nu,fM=new Ie(.5,.5),Oo=new z;class c_{constructor(e=new Rr,n=new Rr,i=new Rr,r=new Rr,s=new Rr,a=new Rr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=li,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],d=s[4],h=s[5],f=s[6],p=s[7],v=s[8],M=s[9],g=s[10],c=s[11],m=s[12],_=s[13],y=s[14],R=s[15];if(r[0].setComponents(u-a,p-d,c-v,R-m).normalize(),r[1].setComponents(u+a,p+d,c+v,R+m).normalize(),r[2].setComponents(u+o,p+h,c+M,R+_).normalize(),r[3].setComponents(u-o,p-h,c-M,R-_).normalize(),i)r[4].setComponents(l,f,g,y).normalize(),r[5].setComponents(u-l,p-f,c-g,R-y).normalize();else if(r[4].setComponents(u-l,p-f,c-g,R-y).normalize(),n===li)r[5].setComponents(u+l,p+f,c+g,R+y).normalize();else if(n===Il)r[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const n=fM.distanceTo(e.center);return yr.radius=.7071067811865476+n,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oo.x=r.normal.x>0?e.max.x:e.min.x,Oo.y=r.normal.y>0?e.max.y:e.min.y,Oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class f_ extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ol=new z,Bl=new z,qp=new At,aa=new l_,Bo=new nu,ac=new z,$p=new z;class dM extends gn{constructor(e=new On,n=new f_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Ol.fromBufferAttribute(n,r-1),Bl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Ol.distanceTo(Bl);e.setAttribute("lineDistance",new wn(i,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),Bo.radius+=s,e.ray.intersectsSphere(Bo)===!1)return;qp.copy(r).invert(),aa.copy(e.ray).applyMatrix4(qp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const p=Math.max(0,a.start),v=Math.min(d.count,a.start+a.count);for(let M=p,g=v-1;M<g;M+=u){const c=d.getX(M),m=d.getX(M+1),_=zo(this,e,aa,l,c,m,M);_&&n.push(_)}if(this.isLineLoop){const M=d.getX(v-1),g=d.getX(p),c=zo(this,e,aa,l,M,g,v-1);c&&n.push(c)}}else{const p=Math.max(0,a.start),v=Math.min(f.count,a.start+a.count);for(let M=p,g=v-1;M<g;M+=u){const c=zo(this,e,aa,l,M,M+1,M);c&&n.push(c)}if(this.isLineLoop){const M=zo(this,e,aa,l,v-1,p,v-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function zo(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Ol.fromBufferAttribute(o,r),Bl.fromBufferAttribute(o,s),n.distanceSqToSegment(Ol,Bl,ac,$p)>i)return;ac.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(ac);if(!(u<e.near||u>e.far))return{distance:u,point:$p.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const Kp=new z,Zp=new z;class hM extends dM{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Kp.fromBufferAttribute(n,r),Zp.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Kp.distanceTo(Zp);e.setAttribute("lineDistance",new wn(i,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class d_ extends qt{constructor(e=[],n=Hr,i,r,s,a,o,l,u,d){super(e,n,i,r,s,a,o,l,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ks extends qt{constructor(e,n,i=hi,r,s,a,o=jt,l=jt,u,d=Ii,h=1){if(d!==Ii&&d!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,d,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class pM extends ks{constructor(e,n=hi,i=Hr,r,s,a=jt,o=jt,l,u=Ii){const d={width:e,height:e,depth:1},h=[d,d,d,d,d,d];super(e,e,n,i,r,s,a,o,l,u),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class h_ extends qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Za extends On{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],d=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new wn(u,3)),this.setAttribute("normal",new wn(d,3)),this.setAttribute("uv",new wn(h,2));function v(M,g,c,m,_,y,R,A,C,S,T){const F=y/C,b=R/S,H=y/2,V=R/2,Y=A/2,k=C+1,G=S+1;let I=0,O=0;const X=new z;for(let Q=0;Q<G;Q++){const oe=Q*b-V;for(let re=0;re<k;re++){const De=re*F-H;X[M]=De*m,X[g]=oe*_,X[c]=Y,u.push(X.x,X.y,X.z),X[M]=0,X[g]=0,X[c]=A>0?1:-1,d.push(X.x,X.y,X.z),h.push(re/C),h.push(1-Q/S),I+=1}}for(let Q=0;Q<S;Q++)for(let oe=0;oe<C;oe++){const re=f+oe+k*Q,De=f+oe+k*(Q+1),Ke=f+(oe+1)+k*(Q+1),tt=f+(oe+1)+k*Q;l.push(re,De,tt),l.push(De,Ke,tt),O+=6}o.addGroup(p,O,T),p+=O,f+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Qa extends On{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,d=l+1,h=e/o,f=n/l,p=[],v=[],M=[],g=[];for(let c=0;c<d;c++){const m=c*f-a;for(let _=0;_<u;_++){const y=_*h-s;v.push(y,-m,0),M.push(0,0,1),g.push(_/o),g.push(1-c/l)}}for(let c=0;c<l;c++)for(let m=0;m<o;m++){const _=m+u*c,y=m+u*(c+1),R=m+1+u*(c+1),A=m+1+u*c;p.push(_,y,A),p.push(y,R,A)}this.setIndex(p),this.setAttribute("position",new wn(v,3)),this.setAttribute("normal",new wn(M,3)),this.setAttribute("uv",new wn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qa(e.width,e.height,e.widthSegments,e.heightSegments)}}function Hs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Hs(t[n]);for(const r in i)e[r]=i[r]}return e}function mM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function p_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const gM={clone:Hs,merge:rn};var vM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_M=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gt extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vM,this.fragmentShader=_M,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=mM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xM extends Gt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class SM extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qa,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MM extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ko=new z,Ho=new Xs,ni=new z;class m_ extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ko,Ho,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ho,ni.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(ko,Ho,ni),ni.x===1&&ni.y===1&&ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Ho,ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new z,Qp=new Ie,Jp=new Ie;class Mn extends m_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qf*2*Math.atan(Math.tan(Fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,Qp,Jp),n.subVectors(Jp,Qp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class ah extends m_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ss=-90,as=1;class yM extends gn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(ss,as,e,n);r.layers=this.layers,this.add(r);const s=new Mn(ss,as,e,n);s.layers=this.layers,this.add(s);const a=new Mn(ss,as,e,n);a.layers=this.layers,this.add(a);const o=new Mn(ss,as,e,n);o.layers=this.layers,this.add(o);const l=new Mn(ss,as,e,n);l.layers=this.layers,this.add(l);const u=new Mn(ss,as,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Il)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(h,f,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class EM extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ye{constructor(e){this.value=e}clone(){return new Ye(this.value.clone===void 0?this.value:this.value.clone())}}class TM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Pe("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}class wM extends hM{constructor(e=10,n=10,i=4473924,r=8947848){i=new qe(i),r=new qe(r);const s=n/2,a=e/n,o=e/2,l=[],u=[];for(let f=0,p=0,v=-o;f<=n;f++,v+=a){l.push(-o,0,v,o,0,v),l.push(v,0,-o,v,0,o);const M=f===s?i:r;M.toArray(u,p),p+=3,M.toArray(u,p),p+=3,M.toArray(u,p),p+=3,M.toArray(u,p),p+=3}const d=new On;d.setAttribute("position",new wn(l,3)),d.setAttribute("color",new wn(u,3));const h=new f_({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function em(t,e,n,i){const r=AM(i);switch(n){case Jv:return t*e;case t_:return t*e/r.components*r.byteLength;case eh:return t*e/r.components*r.byteLength;case zs:return t*e*2/r.components*r.byteLength;case th:return t*e*2/r.components*r.byteLength;case e_:return t*e*3/r.components*r.byteLength;case qn:return t*e*4/r.components*r.byteLength;case nh:return t*e*4/r.components*r.byteLength;case il:case rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mf:case Ef:return Math.max(t,16)*Math.max(e,8)/4;case Sf:case yf:return Math.max(t,8)*Math.max(e,8)/2;case Tf:case wf:case Rf:case Cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Af:case bf:case Pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Df:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Nf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Of:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Xf:case jf:case Yf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case qf:case $f:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Kf:case Zf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function AM(t){switch(t){case Ut:case $v:return{byteLength:1,components:1};case Ha:case Kv:case Li:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case hi:case Zd:case Yn:return{byteLength:4,components:1};case Zv:case Qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function g_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function RM(t){const e=new WeakMap;function n(o,l){const u=o.array,d=o.usage,h=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,d),o.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,u){const d=l.array,h=l.updateRanges;if(t.bindBuffer(u,o),h.length===0)t.bufferSubData(u,0,d);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){const v=h[f],M=h[p];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++f,h[f]=M)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){const M=h[p];t.bufferSubData(u,M.start*d.BYTES_PER_ELEMENT,d,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var CM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,LM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,NM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,OM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,BM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,VM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,KM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ZM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ey=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ny=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",sy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ay=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,oy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,py=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,my=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_y=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,My=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ay=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ry=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,by=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Py=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ly=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Iy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ny=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Oy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,By=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ky=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gy=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$y=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ky=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,iE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,oE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,cE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_E=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ME=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,NE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,BE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,QE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,nT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,aT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:CM,alphahash_pars_fragment:bM,alphamap_fragment:PM,alphamap_pars_fragment:DM,alphatest_fragment:UM,alphatest_pars_fragment:LM,aomap_fragment:IM,aomap_pars_fragment:NM,batching_pars_vertex:FM,batching_vertex:OM,begin_vertex:BM,beginnormal_vertex:zM,bsdfs:kM,iridescence_fragment:HM,bumpmap_pars_fragment:VM,clipping_planes_fragment:GM,clipping_planes_pars_fragment:WM,clipping_planes_pars_vertex:XM,clipping_planes_vertex:jM,color_fragment:YM,color_pars_fragment:qM,color_pars_vertex:$M,color_vertex:KM,common:ZM,cube_uv_reflection_fragment:QM,defaultnormal_vertex:JM,displacementmap_pars_vertex:ey,displacementmap_vertex:ty,emissivemap_fragment:ny,emissivemap_pars_fragment:iy,colorspace_fragment:ry,colorspace_pars_fragment:sy,envmap_fragment:ay,envmap_common_pars_fragment:oy,envmap_pars_fragment:ly,envmap_pars_vertex:uy,envmap_physical_pars_fragment:Sy,envmap_vertex:cy,fog_vertex:fy,fog_pars_vertex:dy,fog_fragment:hy,fog_pars_fragment:py,gradientmap_pars_fragment:my,lightmap_pars_fragment:gy,lights_lambert_fragment:vy,lights_lambert_pars_fragment:_y,lights_pars_begin:xy,lights_toon_fragment:My,lights_toon_pars_fragment:yy,lights_phong_fragment:Ey,lights_phong_pars_fragment:Ty,lights_physical_fragment:wy,lights_physical_pars_fragment:Ay,lights_fragment_begin:Ry,lights_fragment_maps:Cy,lights_fragment_end:by,logdepthbuf_fragment:Py,logdepthbuf_pars_fragment:Dy,logdepthbuf_pars_vertex:Uy,logdepthbuf_vertex:Ly,map_fragment:Iy,map_pars_fragment:Ny,map_particle_fragment:Fy,map_particle_pars_fragment:Oy,metalnessmap_fragment:By,metalnessmap_pars_fragment:zy,morphinstance_vertex:ky,morphcolor_vertex:Hy,morphnormal_vertex:Vy,morphtarget_pars_vertex:Gy,morphtarget_vertex:Wy,normal_fragment_begin:Xy,normal_fragment_maps:jy,normal_pars_fragment:Yy,normal_pars_vertex:qy,normal_vertex:$y,normalmap_pars_fragment:Ky,clearcoat_normal_fragment_begin:Zy,clearcoat_normal_fragment_maps:Qy,clearcoat_pars_fragment:Jy,iridescence_pars_fragment:eE,opaque_fragment:tE,packing:nE,premultiplied_alpha_fragment:iE,project_vertex:rE,dithering_fragment:sE,dithering_pars_fragment:aE,roughnessmap_fragment:oE,roughnessmap_pars_fragment:lE,shadowmap_pars_fragment:uE,shadowmap_pars_vertex:cE,shadowmap_vertex:fE,shadowmask_pars_fragment:dE,skinbase_vertex:hE,skinning_pars_vertex:pE,skinning_vertex:mE,skinnormal_vertex:gE,specularmap_fragment:vE,specularmap_pars_fragment:_E,tonemapping_fragment:xE,tonemapping_pars_fragment:SE,transmission_fragment:ME,transmission_pars_fragment:yE,uv_pars_fragment:EE,uv_pars_vertex:TE,uv_vertex:wE,worldpos_vertex:AE,background_vert:RE,background_frag:CE,backgroundCube_vert:bE,backgroundCube_frag:PE,cube_vert:DE,cube_frag:UE,depth_vert:LE,depth_frag:IE,distance_vert:NE,distance_frag:FE,equirect_vert:OE,equirect_frag:BE,linedashed_vert:zE,linedashed_frag:kE,meshbasic_vert:HE,meshbasic_frag:VE,meshlambert_vert:GE,meshlambert_frag:WE,meshmatcap_vert:XE,meshmatcap_frag:jE,meshnormal_vert:YE,meshnormal_frag:qE,meshphong_vert:$E,meshphong_frag:KE,meshphysical_vert:ZE,meshphysical_frag:QE,meshtoon_vert:JE,meshtoon_frag:eT,points_vert:tT,points_frag:nT,shadow_vert:iT,shadow_frag:rT,sprite_vert:sT,sprite_frag:aT},fe={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},si={basic:{uniforms:rn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:rn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:rn([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:rn([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:rn([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new qe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:rn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:rn([fe.points,fe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:rn([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:rn([fe.common,fe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:rn([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:rn([fe.sprite,fe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:rn([fe.common,fe.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:rn([fe.lights,fe.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};si.physical={uniforms:rn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Vo={r:0,b:0,g:0},Er=new Ni,oT=new At;function lT(t,e,n,i,r,s){const a=new qe(0);let o=r===!0?0:1,l,u,d=null,h=0,f=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const y=m.backgroundBlurriness>0;_=e.get(_,y)}return _}function v(m){let _=!1;const y=p(m);y===null?g(a,o):y&&y.isColor&&(g(y,1),_=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(m,_){const y=p(_);y&&(y.isCubeTexture||y.mapping===tu)?(u===void 0&&(u=new Qn(new Za(1,1,1),new Gt({name:"BackgroundCubeMaterial",uniforms:Hs(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Er.copy(_.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(oT.makeRotationFromEuler(Er)),u.material.toneMapped=je.getTransfer(y.colorSpace)!==rt,(d!==y||h!==y.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,f=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Qn(new Qa(2,2),new Gt({name:"BackgroundMaterial",uniforms:Hs(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==rt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,d=y,h=y.version,f=t.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,_){m.getRGB(Vo,p_(t)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,_,s)}function c(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),o=_,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(m){o=m,g(a,o)},render:v,addToRenderList:M,dispose:c}}function uT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(b,H,V,Y,k){let G=!1;const I=h(b,Y,V,H);s!==I&&(s=I,u(s.object)),G=p(b,Y,V,k),G&&v(b,Y,V,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(b,H,V,Y),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function u(b){return t.bindVertexArray(b)}function d(b){return t.deleteVertexArray(b)}function h(b,H,V,Y){const k=Y.wireframe===!0;let G=i[H.id];G===void 0&&(G={},i[H.id]=G);const I=b.isInstancedMesh===!0?b.id:0;let O=G[I];O===void 0&&(O={},G[I]=O);let X=O[V.id];X===void 0&&(X={},O[V.id]=X);let Q=X[k];return Q===void 0&&(Q=f(l()),X[k]=Q),Q}function f(b){const H=[],V=[],Y=[];for(let k=0;k<n;k++)H[k]=0,V[k]=0,Y[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:Y,object:b,attributes:{},index:null}}function p(b,H,V,Y){const k=s.attributes,G=H.attributes;let I=0;const O=V.getAttributes();for(const X in O)if(O[X].location>=0){const oe=k[X];let re=G[X];if(re===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),oe===void 0||oe.attribute!==re||re&&oe.data!==re.data)return!0;I++}return s.attributesNum!==I||s.index!==Y}function v(b,H,V,Y){const k={},G=H.attributes;let I=0;const O=V.getAttributes();for(const X in O)if(O[X].location>=0){let oe=G[X];oe===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(oe=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(oe=b.instanceColor));const re={};re.attribute=oe,oe&&oe.data&&(re.data=oe.data),k[X]=re,I++}s.attributes=k,s.attributesNum=I,s.index=Y}function M(){const b=s.newAttributes;for(let H=0,V=b.length;H<V;H++)b[H]=0}function g(b){c(b,0)}function c(b,H){const V=s.newAttributes,Y=s.enabledAttributes,k=s.attributeDivisors;V[b]=1,Y[b]===0&&(t.enableVertexAttribArray(b),Y[b]=1),k[b]!==H&&(t.vertexAttribDivisor(b,H),k[b]=H)}function m(){const b=s.newAttributes,H=s.enabledAttributes;for(let V=0,Y=H.length;V<Y;V++)H[V]!==b[V]&&(t.disableVertexAttribArray(V),H[V]=0)}function _(b,H,V,Y,k,G,I){I===!0?t.vertexAttribIPointer(b,H,V,k,G):t.vertexAttribPointer(b,H,V,Y,k,G)}function y(b,H,V,Y){M();const k=Y.attributes,G=V.getAttributes(),I=H.defaultAttributeValues;for(const O in G){const X=G[O];if(X.location>=0){let Q=k[O];if(Q===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),Q!==void 0){const oe=Q.normalized,re=Q.itemSize,De=e.get(Q);if(De===void 0)continue;const Ke=De.buffer,tt=De.type,$=De.bytesPerElement,ie=tt===t.INT||tt===t.UNSIGNED_INT||Q.gpuType===Zd;if(Q.isInterleavedBufferAttribute){const ce=Q.data,Fe=ce.stride,Ce=Q.offset;if(ce.isInstancedInterleavedBuffer){for(let Ue=0;Ue<X.locationSize;Ue++)c(X.location+Ue,ce.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let Ue=0;Ue<X.locationSize;Ue++)g(X.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let Ue=0;Ue<X.locationSize;Ue++)_(X.location+Ue,re/X.locationSize,tt,oe,Fe*$,(Ce+re/X.locationSize*Ue)*$,ie)}else{if(Q.isInstancedBufferAttribute){for(let ce=0;ce<X.locationSize;ce++)c(X.location+ce,Q.meshPerAttribute);b.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ce=0;ce<X.locationSize;ce++)g(X.location+ce);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let ce=0;ce<X.locationSize;ce++)_(X.location+ce,re/X.locationSize,tt,oe,re*$,re/X.locationSize*ce*$,ie)}}else if(I!==void 0){const oe=I[O];if(oe!==void 0)switch(oe.length){case 2:t.vertexAttrib2fv(X.location,oe);break;case 3:t.vertexAttrib3fv(X.location,oe);break;case 4:t.vertexAttrib4fv(X.location,oe);break;default:t.vertexAttrib1fv(X.location,oe)}}}}m()}function R(){T();for(const b in i){const H=i[b];for(const V in H){const Y=H[V];for(const k in Y){const G=Y[k];for(const I in G)d(G[I].object),delete G[I];delete Y[k]}}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const H=i[b.id];for(const V in H){const Y=H[V];for(const k in Y){const G=Y[k];for(const I in G)d(G[I].object),delete G[I];delete Y[k]}}delete i[b.id]}function C(b){for(const H in i){const V=i[H];for(const Y in V){const k=V[Y];if(k[b.id]===void 0)continue;const G=k[b.id];for(const I in G)d(G[I].object),delete G[I];delete k[b.id]}}}function S(b){for(const H in i){const V=i[H],Y=b.isInstancedMesh===!0?b.id:0,k=V[Y];if(k!==void 0){for(const G in k){const I=k[G];for(const O in I)d(I[O].object),delete I[O];delete k[G]}delete V[Y],Object.keys(V).length===0&&delete i[H]}}}function T(){F(),a=!0,s!==r&&(s=r,u(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:F,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:M,enableAttribute:g,disableUnusedAttributes:m}}function cT(t,e,n){let i;function r(u){i=u}function s(u,d){t.drawArrays(i,u,d),n.update(d,i,1)}function a(u,d,h){h!==0&&(t.drawArraysInstanced(i,u,d,h),n.update(d,i,h))}function o(u,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=d[v];n.update(p,i,1)}function l(u,d,h,f){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)a(u[v],d[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,d,0,f,0,h);let v=0;for(let M=0;M<h;M++)v+=d[M]*f[M];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function fT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==qn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const S=C===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ut&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Yn&&!S)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const d=l(u);d!==u&&(Pe("WebGLRenderer:",u,"not supported, using",d,"instead."),u=d);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),c=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:c,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:y,maxSamples:R,samples:A}}function dT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Rr,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,c=t.get(h);if(!r||v===null||v.length===0||s&&!g)s?d(null):u();else{const m=s?0:i,_=m*4;let y=c.clippingState||null;l.value=y,y=d(v,f,_,p);for(let R=0;R!==_;++R)y[R]=n[R];c.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=m}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,p,v){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,v!==!0||g===null){const c=p+M*4,m=f.matrixWorldInverse;o.getNormalMatrix(m),(g===null||g.length<c)&&(g=new Float32Array(c));for(let _=0,y=p;_!==M;++_,y+=4)a.copy(h[_]).applyMatrix4(m,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const tr=4,tm=[.125,.215,.35,.446,.526,.582],br=20,hT=256,oa=new ah,nm=new qe;let oc=null,lc=0,uc=0,cc=!1;const pT=new z;class im{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=pT}=s;oc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=am(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,lc,uc),this._renderer.xr.enabled=cc,e.scissorTest=!1,os(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hr||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),uc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Li,format:qn,colorSpace:hr,depthBuffer:!1},r=rm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=mT(s)),this._blurMaterial=vT(s,e,n),this._ggxMaterial=gT(s,e,n)}return r}_compileMaterial(e){const n=new Qn(new On,e);this._renderer.compile(n,oa)}_sceneToCubeUV(e,n,i,r,s){const l=new Mn(90,1,n,i),u=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(nm),h.toneMapping=di,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Qn(new Za,new u_({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let c=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,c=!0):(g.color.copy(nm),c=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(l.up.set(0,u[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):y===1?(l.up.set(0,0,u[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,u[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const R=this._cubeSize;os(r,y*R,_>2?R:0,R,R),h.setRenderTarget(r),c&&h.render(M,l),h.render(e,l)}h.toneMapping=p,h.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hr||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=am()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;os(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,oa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),d=n/(this._lodMeshes.length-1),h=Math.sqrt(u*u-d*d),f=0+u*1.25,p=h*f,{_lodMax:v}=this,M=this._sizeLods[i],g=3*M*(i>v-tr?i-v+tr:0),c=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=v-n,os(s,g,c,3*M,2*M),r.setRenderTarget(s),r.render(o,oa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,os(e,g,c,3*M,2*M),r.setRenderTarget(e),r.render(o,oa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Qe("blur direction must be either latitudinal or longitudinal!");const d=3,h=this._lodMeshes[r];h.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*br-1),M=s/v,g=isFinite(s)?1+Math.floor(d*M):br;g>br&&Pe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${br}`);const c=[];let m=0;for(let C=0;C<br;++C){const S=C/M,T=Math.exp(-S*S/2);c.push(T),C===0?m+=T:C<g&&(m+=2*T)}for(let C=0;C<c.length;C++)c[C]=c[C]/m;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=c,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=v,f.mipInt.value=_-i;const y=this._sizeLods[r],R=3*y*(r>_-tr?r-_+tr:0),A=4*(this._cubeSize-y);os(n,R,A,3*y,2*y),l.setRenderTarget(n),l.render(h,oa)}}function mT(t){const e=[],n=[],i=[];let r=t;const s=t-tr+1+tm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-tr?l=tm[a-t+tr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),d=-u,h=1+u,f=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,v=6,M=3,g=2,c=1,m=new Float32Array(M*v*p),_=new Float32Array(g*v*p),y=new Float32Array(c*v*p);for(let A=0;A<p;A++){const C=A%3*2/3-1,S=A>2?0:-1,T=[C,S,0,C+2/3,S,0,C+2/3,S+1,0,C,S,0,C+2/3,S+1,0,C,S+1,0];m.set(T,M*v*A),_.set(f,g*v*A);const F=[A,A,A,A,A,A];y.set(F,c*v*A)}const R=new On;R.setAttribute("position",new In(m,M)),R.setAttribute("uv",new In(_,g)),R.setAttribute("faceIndex",new In(y,c)),i.push(new Qn(R,null)),r>tr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function rm(t,e,n){const i=new It(t,e,n);return i.texture.mapping=tu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function os(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function gT(t,e,n){return new Gt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:hT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:iu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function vT(t,e,n){const i=new Float32Array(br),r=new z(0,1,0);return new Gt({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function sm(){return new Gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function am(){return new Gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:on,depthTest:!1,depthWrite:!1})}function iu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class v_ extends It{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new d_(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Za(5,5,5),s=new Gt({name:"CubemapFromEquirect",uniforms:Hs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ht,blending:on});s.uniforms.tEquirect.value=n;const a=new Qn(r,s),o=n.minFilter;return n.minFilter===Lr&&(n.minFilter=Pt),new yM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function _T(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?a(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Lu||p===Iu)if(e.has(f)){const v=e.get(f).texture;return o(v,f.mapping)}else{const v=f.image;if(v&&v.height>0){const M=new v_(v.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",u),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,v=p===Lu||p===Iu,M=p===Hr||p===Os;if(v||M){let g=n.get(f);const c=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==c)return i===null&&(i=new im(t)),g=v?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const m=f.image;return v&&m&&m.height>0||M&&m&&l(m)?(i===null&&(i=new im(t)),g=v?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",d),g.texture):null}}}return f}function o(f,p){return p===Lu?f.mapping=Hr:p===Iu&&(f.mapping=Os),f}function l(f){let p=0;const v=6;for(let M=0;M<v;M++)f[M]!==void 0&&p++;return p===v}function u(f){const p=f.target;p.removeEventListener("dispose",u);const v=e.get(p);v!==void 0&&(e.delete(p),v.dispose())}function d(f){const p=f.target;p.removeEventListener("dispose",d);const v=n.get(p);v!==void 0&&(n.delete(p),v.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function xT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Fl("WebGLRenderer: "+i+" extension not supported."),r}}}function ST(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const v in f.attributes)e.remove(f.attributes[v]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function u(h){const f=[],p=h.index,v=h.attributes.position;let M=0;if(v===void 0)return;if(p!==null){const m=p.array;M=p.version;for(let _=0,y=m.length;_<y;_+=3){const R=m[_+0],A=m[_+1],C=m[_+2];f.push(R,A,A,C,C,R)}}else{const m=v.array;M=v.version;for(let _=0,y=m.length/3-1;_<y;_+=3){const R=_+0,A=_+1,C=_+2;f.push(R,A,A,C,C,R)}}const g=new(v.count>=65535?o_:a_)(f,1);g.version=M;const c=s.get(h);c&&e.remove(c),s.set(h,g)}function d(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function MT(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*a),n.update(p,i,1)}function u(f,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,f*a,v),n.update(p,i,v))}function d(f,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let g=0;for(let c=0;c<v;c++)g+=p[c];n.update(g,i,1)}function h(f,p,v,M){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let c=0;c<f.length;c++)u(f[c]/a,p[c],M[c]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,M,0,v);let c=0;for(let m=0;m<v;m++)c+=p[m]*M[m];n.update(c,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function yT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Qe("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ET(t,e,n){const i=new WeakMap,r=new _t;function s(a,o,l){const u=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let F=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",F)};var p=F;f!==void 0&&f.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,c=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),g===!0&&(y=3);let R=o.attributes.position.count*y,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*A*4*h),S=new i_(C,R,A,h);S.type=Yn,S.needsUpdate=!0;const T=y*4;for(let b=0;b<h;b++){const H=c[b],V=m[b],Y=_[b],k=R*A*4*b;for(let G=0;G<H.count;G++){const I=G*T;v===!0&&(r.fromBufferAttribute(H,G),C[k+I+0]=r.x,C[k+I+1]=r.y,C[k+I+2]=r.z,C[k+I+3]=0),M===!0&&(r.fromBufferAttribute(V,G),C[k+I+4]=r.x,C[k+I+5]=r.y,C[k+I+6]=r.z,C[k+I+7]=0),g===!0&&(r.fromBufferAttribute(Y,G),C[k+I+8]=r.x,C[k+I+9]=r.y,C[k+I+10]=r.z,C[k+I+11]=Y.itemSize===4?r.w:1)}}f={count:h,texture:S,size:new Ie(R,A)},i.set(o,f),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let g=0;g<u.length;g++)v+=u[g];const M=o.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function TT(t,e,n,i,r){let s=new WeakMap;function a(u){const d=r.render.frame,h=u.geometry,f=e.get(u,h);if(s.get(f)!==d&&(e.update(f),s.set(f,d)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==d&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,d))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return f}function o(){s=new WeakMap}function l(u){const d=u.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:a,dispose:o}}const wT={[Hv]:"LINEAR_TONE_MAPPING",[Vv]:"REINHARD_TONE_MAPPING",[Gv]:"CINEON_TONE_MAPPING",[Wv]:"ACES_FILMIC_TONE_MAPPING",[jv]:"AGX_TONE_MAPPING",[Yv]:"NEUTRAL_TONE_MAPPING",[Xv]:"CUSTOM_TONE_MAPPING"};function AT(t,e,n,i,r){const s=new It(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new It(e,n,{type:Li,depthBuffer:!1,stencilBuffer:!1}),o=new On;o.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new wn([0,2,0,0,2,0],2));const l=new xM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Qn(o,l),d=new ah(-1,1,1,-1,0,1);let h=null,f=null,p=!1,v,M=null,g=[],c=!1;this.setSize=function(m,_){s.setSize(m,_),a.setSize(m,_);for(let y=0;y<g.length;y++){const R=g[y];R.setSize&&R.setSize(m,_)}},this.setEffects=function(m){g=m,c=g.length>0&&g[0].isRenderPass===!0;const _=s.width,y=s.height;for(let R=0;R<g.length;R++){const A=g[R];A.setSize&&A.setSize(_,y)}},this.begin=function(m,_){if(p||m.toneMapping===di&&g.length===0)return!1;if(M=_,_!==null){const y=_.width,R=_.height;(s.width!==y||s.height!==R)&&this.setSize(y,R)}return c===!1&&m.setRenderTarget(s),v=m.toneMapping,m.toneMapping=di,!0},this.hasRenderPass=function(){return c},this.end=function(m,_){m.toneMapping=v,p=!0;let y=s,R=a;for(let A=0;A<g.length;A++){const C=g[A];if(C.enabled!==!1&&(C.render(m,R,y,_),C.needsSwap!==!1)){const S=y;y=R,R=S}}if(h!==m.outputColorSpace||f!==m.toneMapping){h=m.outputColorSpace,f=m.toneMapping,l.defines={},je.getTransfer(h)===rt&&(l.defines.SRGB_TRANSFER="");const A=wT[f];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,m.setRenderTarget(M),m.render(u,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const __=new qt,ed=new ks(1,1),x_=new i_,S_=new $S,M_=new d_,om=[],lm=[],um=new Float32Array(16),cm=new Float32Array(9),fm=new Float32Array(4);function js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=om[r];if(s===void 0&&(s=new Float32Array(r),om[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ru(t,e){let n=lm[e];n===void 0&&(n=new Int32Array(e),lm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function RT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function CT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function bT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function PT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function DT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Nt(n,i))return;fm.set(i),t.uniformMatrix2fv(this.addr,!1,fm),Ft(n,i)}}function UT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Nt(n,i))return;cm.set(i),t.uniformMatrix3fv(this.addr,!1,cm),Ft(n,i)}}function LT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Nt(n,i))return;um.set(i),t.uniformMatrix4fv(this.addr,!1,um),Ft(n,i)}}function IT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function FT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function OT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function BT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function zT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function kT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function VT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ed.compareFunction=n.isReversedDepthBuffer()?rh:ih,s=ed):s=__,n.setTexture2D(e||s,r)}function GT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||S_,r)}function WT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||M_,r)}function XT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||x_,r)}function jT(t){switch(t){case 5126:return RT;case 35664:return CT;case 35665:return bT;case 35666:return PT;case 35674:return DT;case 35675:return UT;case 35676:return LT;case 5124:case 35670:return IT;case 35667:case 35671:return NT;case 35668:case 35672:return FT;case 35669:case 35673:return OT;case 5125:return BT;case 36294:return zT;case 36295:return kT;case 36296:return HT;case 35678:case 36198:case 36298:case 36306:case 35682:return VT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}function YT(t,e){t.uniform1fv(this.addr,e)}function qT(t,e){const n=js(e,this.size,2);t.uniform2fv(this.addr,n)}function $T(t,e){const n=js(e,this.size,3);t.uniform3fv(this.addr,n)}function KT(t,e){const n=js(e,this.size,4);t.uniform4fv(this.addr,n)}function ZT(t,e){const n=js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function QT(t,e){const n=js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function JT(t,e){const n=js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function e1(t,e){t.uniform1iv(this.addr,e)}function t1(t,e){t.uniform2iv(this.addr,e)}function n1(t,e){t.uniform3iv(this.addr,e)}function i1(t,e){t.uniform4iv(this.addr,e)}function r1(t,e){t.uniform1uiv(this.addr,e)}function s1(t,e){t.uniform2uiv(this.addr,e)}function a1(t,e){t.uniform3uiv(this.addr,e)}function o1(t,e){t.uniform4uiv(this.addr,e)}function l1(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=ed:a=__;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function u1(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||S_,s[a])}function c1(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||M_,s[a])}function f1(t,e,n){const i=this.cache,r=e.length,s=ru(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||x_,s[a])}function d1(t){switch(t){case 5126:return YT;case 35664:return qT;case 35665:return $T;case 35666:return KT;case 35674:return ZT;case 35675:return QT;case 35676:return JT;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return r1;case 36294:return s1;case 36295:return a1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return f1}}class h1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=jT(n.type)}}class p1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=d1(n.type)}}class m1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const fc=/(\w+)(\])?(\[|\.)?/g;function dm(t,e){t.seq.push(e),t.map[e.id]=e}function g1(t,e,n){const i=t.name,r=i.length;for(fc.lastIndex=0;;){const s=fc.exec(i),a=fc.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){dm(n,u===void 0?new h1(o,t,e):new p1(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new m1(o),dm(n,h)),n=h}}}class ol{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);g1(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function hm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const v1=37297;let _1=0;function x1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const pm=new Oe;function S1(t){je._getMatrix(pm,je.workingColorSpace,t);const e=`mat3( ${pm.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case Ll:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function mm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+x1(t.getShaderSource(e),o)}else return s}function M1(t,e){const n=S1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const y1={[Hv]:"Linear",[Vv]:"Reinhard",[Gv]:"Cineon",[Wv]:"ACESFilmic",[jv]:"AgX",[Yv]:"Neutral",[Xv]:"Custom"};function E1(t,e){const n=y1[e];return n===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Go=new z;function T1(){je.getLuminanceCoefficients(Go);const t=Go.x.toFixed(4),e=Go.y.toFixed(4),n=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function A1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function R1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function pa(t){return t!==""}function gm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C1=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(t){return t.replace(C1,P1)}const b1=new Map;function P1(t,e){let n=Be[e];if(n===void 0){const i=b1.get(e);if(i!==void 0)n=Be[i],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return td(n)}const D1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _m(t){return t.replace(D1,U1)}function U1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const L1={[nl]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function I1(t){return L1[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const N1={[Hr]:"ENVMAP_TYPE_CUBE",[Os]:"ENVMAP_TYPE_CUBE",[tu]:"ENVMAP_TYPE_CUBE_UV"};function F1(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":N1[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const O1={[Os]:"ENVMAP_MODE_REFRACTION"};function B1(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":O1[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const z1={[kv]:"ENVMAP_BLENDING_MULTIPLY",[CS]:"ENVMAP_BLENDING_MIX",[bS]:"ENVMAP_BLENDING_ADD"};function k1(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":z1[t.combine]||"ENVMAP_BLENDING_NONE"}function H1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function V1(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=I1(n),u=F1(n),d=B1(n),h=k1(n),f=H1(n),p=w1(n),v=A1(s),M=r.createProgram();let g,c,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(pa).join(`
`),g.length>0&&(g+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(pa).join(`
`),c.length>0&&(c+=`
`)):(g=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),c=[xm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==di?"#define TONE_MAPPING":"",n.toneMapping!==di?Be.tonemapping_pars_fragment:"",n.toneMapping!==di?E1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,M1("linearToOutputTexel",n.outputColorSpace),T1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(pa).join(`
`)),a=td(a),a=gm(a,n),a=vm(a,n),o=td(o),o=gm(o,n),o=vm(o,n),a=_m(a),o=_m(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,c=["#define varying in",n.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=m+g+a,y=m+c+o,R=hm(r,r.VERTEX_SHADER,_),A=hm(r,r.FRAGMENT_SHADER,y);r.attachShader(M,R),r.attachShader(M,A),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function C(b){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(M)||"",V=r.getShaderInfoLog(R)||"",Y=r.getShaderInfoLog(A)||"",k=H.trim(),G=V.trim(),I=Y.trim();let O=!0,X=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,R,A);else{const Q=mm(r,R,"vertex"),oe=mm(r,A,"fragment");Qe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+k+`
`+Q+`
`+oe)}else k!==""?Pe("WebGLProgram: Program Info Log:",k):(G===""||I==="")&&(X=!1);X&&(b.diagnostics={runnable:O,programLog:k,vertexShader:{log:G,prefix:g},fragmentShader:{log:I,prefix:c}})}r.deleteShader(R),r.deleteShader(A),S=new ol(r,M),T=R1(r,M)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(M,v1)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_1++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=A,this}let G1=0;class W1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new X1(e),n.set(e,i)),i}}class X1{constructor(e){this.id=G1++,this.code=e,this.usedTimes=0}}function j1(t,e,n,i,r,s){const a=new r_,o=new W1,l=new Set,u=[],d=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return l.add(S),S===0?"uv":`uv${S}`}function M(S,T,F,b,H){const V=b.fog,Y=H.geometry,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?b.environment:null,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,I=e.get(S.envMap||k,G),O=I&&I.mapping===tu?I.image.height:null,X=p[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Pe("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const Q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,oe=Q!==void 0?Q.length:0;let re=0;Y.morphAttributes.position!==void 0&&(re=1),Y.morphAttributes.normal!==void 0&&(re=2),Y.morphAttributes.color!==void 0&&(re=3);let De,Ke,tt,$;if(X){const it=si[X];De=it.vertexShader,Ke=it.fragmentShader}else De=S.vertexShader,Ke=S.fragmentShader,o.update(S),tt=o.getVertexShaderID(S),$=o.getFragmentShaderID(S);const ie=t.getRenderTarget(),ce=t.state.buffers.depth.getReversed(),Fe=H.isInstancedMesh===!0,Ce=H.isBatchedMesh===!0,Ue=!!S.map,Ot=!!S.matcap,Xe=!!I,nt=!!S.aoMap,ut=!!S.lightMap,ze=!!S.bumpMap,Et=!!S.normalMap,P=!!S.displacementMap,Rt=!!S.emissiveMap,et=!!S.metalnessMap,ft=!!S.roughnessMap,Ee=S.anisotropy>0,w=S.clearcoat>0,x=S.dispersion>0,U=S.iridescence>0,K=S.sheen>0,J=S.transmission>0,q=Ee&&!!S.anisotropyMap,_e=w&&!!S.clearcoatMap,le=w&&!!S.clearcoatNormalMap,Re=w&&!!S.clearcoatRoughnessMap,be=U&&!!S.iridescenceMap,te=U&&!!S.iridescenceThicknessMap,se=K&&!!S.sheenColorMap,xe=K&&!!S.sheenRoughnessMap,Me=!!S.specularMap,pe=!!S.specularColorMap,ke=!!S.specularIntensityMap,D=J&&!!S.transmissionMap,ue=J&&!!S.thicknessMap,ae=!!S.gradientMap,ve=!!S.alphaMap,ne=S.alphaTest>0,j=!!S.alphaHash,Se=!!S.extensions;let Le=di;S.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Le=t.toneMapping);const dt={shaderID:X,shaderType:S.type,shaderName:S.name,vertexShader:De,fragmentShader:Ke,defines:S.defines,customVertexShaderID:tt,customFragmentShaderID:$,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ce,batchingColor:Ce&&H._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&H.instanceColor!==null,instancingMorph:Fe&&H.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:hr,alphaToCoverage:!!S.alphaToCoverage,map:Ue,matcap:Ot,envMap:Xe,envMapMode:Xe&&I.mapping,envMapCubeUVHeight:O,aoMap:nt,lightMap:ut,bumpMap:ze,normalMap:Et,displacementMap:P,emissiveMap:Rt,normalMapObjectSpace:Et&&S.normalMapType===US,normalMapTangentSpace:Et&&S.normalMapType===DS,metalnessMap:et,roughnessMap:ft,anisotropy:Ee,anisotropyMap:q,clearcoat:w,clearcoatMap:_e,clearcoatNormalMap:le,clearcoatRoughnessMap:Re,dispersion:x,iridescence:U,iridescenceMap:be,iridescenceThicknessMap:te,sheen:K,sheenColorMap:se,sheenRoughnessMap:xe,specularMap:Me,specularColorMap:pe,specularIntensityMap:ke,transmission:J,transmissionMap:D,thicknessMap:ue,gradientMap:ae,opaque:S.transparent===!1&&S.blending===Rs&&S.alphaToCoverage===!1,alphaMap:ve,alphaTest:ne,alphaHash:j,combine:S.combine,mapUv:Ue&&v(S.map.channel),aoMapUv:nt&&v(S.aoMap.channel),lightMapUv:ut&&v(S.lightMap.channel),bumpMapUv:ze&&v(S.bumpMap.channel),normalMapUv:Et&&v(S.normalMap.channel),displacementMapUv:P&&v(S.displacementMap.channel),emissiveMapUv:Rt&&v(S.emissiveMap.channel),metalnessMapUv:et&&v(S.metalnessMap.channel),roughnessMapUv:ft&&v(S.roughnessMap.channel),anisotropyMapUv:q&&v(S.anisotropyMap.channel),clearcoatMapUv:_e&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:le&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:te&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:se&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(S.sheenRoughnessMap.channel),specularMapUv:Me&&v(S.specularMap.channel),specularColorMapUv:pe&&v(S.specularColorMap.channel),specularIntensityMapUv:ke&&v(S.specularIntensityMap.channel),transmissionMapUv:D&&v(S.transmissionMap.channel),thicknessMapUv:ue&&v(S.thicknessMap.channel),alphaMapUv:ve&&v(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Et||Ee),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!Y.attributes.uv&&(Ue||ve),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||Y.attributes.normal===void 0&&Et===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ce,skinning:H.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ue&&S.map.isVideoTexture===!0&&je.getTransfer(S.map.colorSpace)===rt,decodeVideoTextureEmissive:Rt&&S.emissiveMap.isVideoTexture===!0&&je.getTransfer(S.emissiveMap.colorSpace)===rt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yn,flipSided:S.side===Ht,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Se&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&S.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function g(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const F in S.defines)T.push(F),T.push(S.defines[F]);return S.isRawShaderMaterial===!1&&(c(T,S),m(T,S),T.push(t.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function c(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function m(S,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const T=p[S.type];let F;if(T){const b=si[T];F=gM.clone(b.uniforms)}else F=S.uniforms;return F}function y(S,T){let F=d.get(T);return F!==void 0?++F.usedTimes:(F=new V1(t,T,S,r),u.push(F),d.set(T,F)),F}function R(S){if(--S.usedTimes===0){const T=u.indexOf(S);u[T]=u[u.length-1],u.pop(),d.delete(S.cacheKey),S.destroy()}}function A(S){o.remove(S)}function C(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:_,acquireProgram:y,releaseProgram:R,releaseShaderCache:A,programs:u,dispose:C}}function Y1(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function q1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Sm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Mm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,v,M,g,c){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:p,material:v,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:g,group:c},t[e]=m):(m.id=f.id,m.object=f,m.geometry=p,m.material=v,m.materialVariant=a(f),m.groupOrder=M,m.renderOrder=f.renderOrder,m.z=g,m.group=c),e++,m}function l(f,p,v,M,g,c){const m=o(f,p,v,M,g,c);v.transmission>0?i.push(m):v.transparent===!0?r.push(m):n.push(m)}function u(f,p,v,M,g,c){const m=o(f,p,v,M,g,c);v.transmission>0?i.unshift(m):v.transparent===!0?r.unshift(m):n.unshift(m)}function d(f,p){n.length>1&&n.sort(f||q1),i.length>1&&i.sort(p||Sm),r.length>1&&r.sort(p||Sm)}function h(){for(let f=e,p=t.length;f<p;f++){const v=t[f];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:h,sort:d}}function $1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Mm,t.set(i,[a])):r>=s.length?(a=new Mm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function K1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new qe};break;case"SpotLight":n={position:new z,direction:new z,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function Z1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Q1=0;function J1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ew(t){const e=new K1,n=Z1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new z);const r=new z,s=new At,a=new At;function o(u){let d=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,M=0,g=0,c=0,m=0,_=0,y=0,R=0,A=0,C=0;u.sort(J1);for(let T=0,F=u.length;T<F;T++){const b=u[T],H=b.color,V=b.intensity,Y=b.distance;let k=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===zs?k=b.shadow.map.texture:k=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)d+=H.r*V,h+=H.g*V,f+=H.b*V;else if(b.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(b.sh.coefficients[G],V);C++}else if(b.isDirectionalLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const I=b.shadow,O=n.get(b);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,i.directionalShadow[p]=O,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=b.shadow.matrix,m++}i.directional[p]=G,p++}else if(b.isSpotLight){const G=e.get(b);G.position.setFromMatrixPosition(b.matrixWorld),G.color.copy(H).multiplyScalar(V),G.distance=Y,G.coneCos=Math.cos(b.angle),G.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),G.decay=b.decay,i.spot[M]=G;const I=b.shadow;if(b.map&&(i.spotLightMap[R]=b.map,R++,I.updateMatrices(b),b.castShadow&&A++),i.spotLightMatrix[M]=I.matrix,b.castShadow){const O=n.get(b);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,i.spotShadow[M]=O,i.spotShadowMap[M]=k,y++}M++}else if(b.isRectAreaLight){const G=e.get(b);G.color.copy(H).multiplyScalar(V),G.halfWidth.set(b.width*.5,0,0),G.halfHeight.set(0,b.height*.5,0),i.rectArea[g]=G,g++}else if(b.isPointLight){const G=e.get(b);if(G.color.copy(b.color).multiplyScalar(b.intensity),G.distance=b.distance,G.decay=b.decay,b.castShadow){const I=b.shadow,O=n.get(b);O.shadowIntensity=I.intensity,O.shadowBias=I.bias,O.shadowNormalBias=I.normalBias,O.shadowRadius=I.radius,O.shadowMapSize=I.mapSize,O.shadowCameraNear=I.camera.near,O.shadowCameraFar=I.camera.far,i.pointShadow[v]=O,i.pointShadowMap[v]=k,i.pointShadowMatrix[v]=b.shadow.matrix,_++}i.point[v]=G,v++}else if(b.isHemisphereLight){const G=e.get(b);G.skyColor.copy(b.color).multiplyScalar(V),G.groundColor.copy(b.groundColor).multiplyScalar(V),i.hemi[c]=G,c++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==p||S.pointLength!==v||S.spotLength!==M||S.rectAreaLength!==g||S.hemiLength!==c||S.numDirectionalShadows!==m||S.numPointShadows!==_||S.numSpotShadows!==y||S.numSpotMaps!==R||S.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=M,i.rectArea.length=g,i.point.length=v,i.hemi.length=c,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,S.directionalLength=p,S.pointLength=v,S.spotLength=M,S.rectAreaLength=g,S.hemiLength=c,S.numDirectionalShadows=m,S.numPointShadows=_,S.numSpotShadows=y,S.numSpotMaps=R,S.numLightProbes=C,i.version=Q1++)}function l(u,d){let h=0,f=0,p=0,v=0,M=0;const g=d.matrixWorldInverse;for(let c=0,m=u.length;c<m;c++){const _=u[c];if(_.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(_.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(_.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(g),f++}else if(_.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function ym(t){const e=new ew(t),n=[],i=[];function r(d){u.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function tw(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ym(t),e.set(r,[o])):s>=a.length?(o=new ym(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const nw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,rw=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],sw=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Em=new At,la=new z,dc=new z;function aw(t,e,n){let i=new c_;const r=new Ie,s=new Ie,a=new _t,o=new SM,l=new MM,u={},d=n.maxTextureSize,h={[Ui]:Ht,[Ht]:Ui,[yn]:yn},f=new Gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:nw,fragmentShader:iw}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new On;v.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Qn(v,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let c=this.type;this.render=function(A,C,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===uS&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nl);const T=t.getRenderTarget(),F=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),H=t.state;H.setBlending(on),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const V=c!==this.type;V&&C.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(k=>k.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,k=A.length;Y<k;Y++){const G=A[Y],I=G.shadow;if(I===void 0){Pe("WebGLShadowMap:",G,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const O=I.getFrameExtents();r.multiply(O),s.copy(I.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/O.x),r.x=s.x*O.x,I.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/O.y),r.y=s.y*O.y,I.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(I.camera._reversedDepth=X,I.map===null||V===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===ha){if(G.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new It(r.x,r.y,{format:zs,type:Li,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),I.map.texture.name=G.name+".shadowMap",I.map.depthTexture=new ks(r.x,r.y,Yn),I.map.depthTexture.name=G.name+".shadowMapDepth",I.map.depthTexture.format=Ii,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=jt,I.map.depthTexture.magFilter=jt}else G.isPointLight?(I.map=new v_(r.x),I.map.depthTexture=new pM(r.x,hi)):(I.map=new It(r.x,r.y),I.map.depthTexture=new ks(r.x,r.y,hi)),I.map.depthTexture.name=G.name+".shadowMap",I.map.depthTexture.format=Ii,this.type===nl?(I.map.depthTexture.compareFunction=X?rh:ih,I.map.depthTexture.minFilter=Pt,I.map.depthTexture.magFilter=Pt):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=jt,I.map.depthTexture.magFilter=jt);I.camera.updateProjectionMatrix()}const Q=I.map.isWebGLCubeRenderTarget?6:1;for(let oe=0;oe<Q;oe++){if(I.map.isWebGLCubeRenderTarget)t.setRenderTarget(I.map,oe),t.clear();else{oe===0&&(t.setRenderTarget(I.map),t.clear());const re=I.getViewport(oe);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),H.viewport(a)}if(G.isPointLight){const re=I.camera,De=I.matrix,Ke=G.distance||re.far;Ke!==re.far&&(re.far=Ke,re.updateProjectionMatrix()),la.setFromMatrixPosition(G.matrixWorld),re.position.copy(la),dc.copy(re.position),dc.add(rw[oe]),re.up.copy(sw[oe]),re.lookAt(dc),re.updateMatrixWorld(),De.makeTranslation(-la.x,-la.y,-la.z),Em.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),I._frustum.setFromProjectionMatrix(Em,re.coordinateSystem,re.reversedDepth)}else I.updateMatrices(G);i=I.getFrustum(),y(C,S,I.camera,G,this.type)}I.isPointLightShadow!==!0&&this.type===ha&&m(I,S),I.needsUpdate=!1}c=this.type,g.needsUpdate=!1,t.setRenderTarget(T,F,b)};function m(A,C){const S=e.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new It(r.x,r.y,{format:zs,type:Li})),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,S,f,M,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,S,p,M,null)}function _(A,C,S,T){let F=null;const b=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)F=b;else if(F=S.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const H=F.uuid,V=C.uuid;let Y=u[H];Y===void 0&&(Y={},u[H]=Y);let k=Y[V];k===void 0&&(k=F.clone(),Y[V]=k,C.addEventListener("dispose",R)),F=k}if(F.visible=C.visible,F.wireframe=C.wireframe,T===ha?F.side=C.shadowSide!==null?C.shadowSide:C.side:F.side=C.shadowSide!==null?C.shadowSide:h[C.side],F.alphaMap=C.alphaMap,F.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,F.map=C.map,F.clipShadows=C.clipShadows,F.clippingPlanes=C.clippingPlanes,F.clipIntersection=C.clipIntersection,F.displacementMap=C.displacementMap,F.displacementScale=C.displacementScale,F.displacementBias=C.displacementBias,F.wireframeLinewidth=C.wireframeLinewidth,F.linewidth=C.linewidth,S.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const H=t.properties.get(F);H.light=S}return F}function y(A,C,S,T,F){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===ha)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const V=e.update(A),Y=A.material;if(Array.isArray(Y)){const k=V.groups;for(let G=0,I=k.length;G<I;G++){const O=k[G],X=Y[O.materialIndex];if(X&&X.visible){const Q=_(A,X,T,F);A.onBeforeShadow(t,A,C,S,V,Q,O),t.renderBufferDirect(S,null,V,Q,A,O),A.onAfterShadow(t,A,C,S,V,Q,O)}}}else if(Y.visible){const k=_(A,Y,T,F);A.onBeforeShadow(t,A,C,S,V,k,null),t.renderBufferDirect(S,null,V,k,A,null),A.onAfterShadow(t,A,C,S,V,k,null)}}const H=A.children;for(let V=0,Y=H.length;V<Y;V++)y(H[V],C,S,T,F)}function R(A){A.target.removeEventListener("dispose",R);for(const S in u){const T=u[S],F=A.target.uuid;F in T&&(T[F].dispose(),delete T[F])}}}function ow(t,e){function n(){let D=!1;const ue=new _t;let ae=null;const ve=new _t(0,0,0,0);return{setMask:function(ne){ae!==ne&&!D&&(t.colorMask(ne,ne,ne,ne),ae=ne)},setLocked:function(ne){D=ne},setClear:function(ne,j,Se,Le,dt){dt===!0&&(ne*=Le,j*=Le,Se*=Le),ue.set(ne,j,Se,Le),ve.equals(ue)===!1&&(t.clearColor(ne,j,Se,Le),ve.copy(ue))},reset:function(){D=!1,ae=null,ve.set(-1,0,0,0)}}}function i(){let D=!1,ue=!1,ae=null,ve=null,ne=null;return{setReversed:function(j){if(ue!==j){const Se=e.get("EXT_clip_control");j?Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.ZERO_TO_ONE_EXT):Se.clipControlEXT(Se.LOWER_LEFT_EXT,Se.NEGATIVE_ONE_TO_ONE_EXT),ue=j;const Le=ne;ne=null,this.setClear(Le)}},getReversed:function(){return ue},setTest:function(j){j?ie(t.DEPTH_TEST):ce(t.DEPTH_TEST)},setMask:function(j){ae!==j&&!D&&(t.depthMask(j),ae=j)},setFunc:function(j){if(ue&&(j=VS[j]),ve!==j){switch(j){case df:t.depthFunc(t.NEVER);break;case Ul:t.depthFunc(t.ALWAYS);break;case hf:t.depthFunc(t.LESS);break;case Fs:t.depthFunc(t.LEQUAL);break;case pf:t.depthFunc(t.EQUAL);break;case mf:t.depthFunc(t.GEQUAL);break;case gf:t.depthFunc(t.GREATER);break;case vf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=j}},setLocked:function(j){D=j},setClear:function(j){ne!==j&&(ne=j,ue&&(j=1-j),t.clearDepth(j))},reset:function(){D=!1,ae=null,ve=null,ne=null,ue=!1}}}function r(){let D=!1,ue=null,ae=null,ve=null,ne=null,j=null,Se=null,Le=null,dt=null;return{setTest:function(it){D||(it?ie(t.STENCIL_TEST):ce(t.STENCIL_TEST))},setMask:function(it){ue!==it&&!D&&(t.stencilMask(it),ue=it)},setFunc:function(it,pi,mi){(ae!==it||ve!==pi||ne!==mi)&&(t.stencilFunc(it,pi,mi),ae=it,ve=pi,ne=mi)},setOp:function(it,pi,mi){(j!==it||Se!==pi||Le!==mi)&&(t.stencilOp(it,pi,mi),j=it,Se=pi,Le=mi)},setLocked:function(it){D=it},setClear:function(it){dt!==it&&(t.clearStencil(it),dt=it)},reset:function(){D=!1,ue=null,ae=null,ve=null,ne=null,j=null,Se=null,Le=null,dt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let d={},h={},f=new WeakMap,p=[],v=null,M=!1,g=null,c=null,m=null,_=null,y=null,R=null,A=null,C=new qe(0,0,0),S=0,T=!1,F=null,b=null,H=null,V=null,Y=null;const k=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,I=0;const O=t.getParameter(t.VERSION);O.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(O)[1]),G=I>=1):O.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),G=I>=2);let X=null,Q={};const oe=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),De=new _t().fromArray(oe),Ke=new _t().fromArray(re);function tt(D,ue,ae,ve){const ne=new Uint8Array(4),j=t.createTexture();t.bindTexture(D,j),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Se=0;Se<ae;Se++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,ne):t.texImage2D(ue+Se,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ne);return j}const $={};$[t.TEXTURE_2D]=tt(t.TEXTURE_2D,t.TEXTURE_2D,1),$[t.TEXTURE_CUBE_MAP]=tt(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[t.TEXTURE_2D_ARRAY]=tt(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),$[t.TEXTURE_3D]=tt(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(t.DEPTH_TEST),a.setFunc(Fs),ze(!1),Et(Ap),ie(t.CULL_FACE),nt(on);function ie(D){d[D]!==!0&&(t.enable(D),d[D]=!0)}function ce(D){d[D]!==!1&&(t.disable(D),d[D]=!1)}function Fe(D,ue){return h[D]!==ue?(t.bindFramebuffer(D,ue),h[D]=ue,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ue),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Ce(D,ue){let ae=p,ve=!1;if(D){ae=f.get(ue),ae===void 0&&(ae=[],f.set(ue,ae));const ne=D.textures;if(ae.length!==ne.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let j=0,Se=ne.length;j<Se;j++)ae[j]=t.COLOR_ATTACHMENT0+j;ae.length=ne.length,ve=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,ve=!0);ve&&t.drawBuffers(ae)}function Ue(D){return v!==D?(t.useProgram(D),v=D,!0):!1}const Ot={[Cr]:t.FUNC_ADD,[fS]:t.FUNC_SUBTRACT,[dS]:t.FUNC_REVERSE_SUBTRACT};Ot[hS]=t.MIN,Ot[pS]=t.MAX;const Xe={[mS]:t.ZERO,[gS]:t.ONE,[vS]:t.SRC_COLOR,[cf]:t.SRC_ALPHA,[ES]:t.SRC_ALPHA_SATURATE,[MS]:t.DST_COLOR,[xS]:t.DST_ALPHA,[_S]:t.ONE_MINUS_SRC_COLOR,[ff]:t.ONE_MINUS_SRC_ALPHA,[yS]:t.ONE_MINUS_DST_COLOR,[SS]:t.ONE_MINUS_DST_ALPHA,[TS]:t.CONSTANT_COLOR,[wS]:t.ONE_MINUS_CONSTANT_COLOR,[AS]:t.CONSTANT_ALPHA,[RS]:t.ONE_MINUS_CONSTANT_ALPHA};function nt(D,ue,ae,ve,ne,j,Se,Le,dt,it){if(D===on){M===!0&&(ce(t.BLEND),M=!1);return}if(M===!1&&(ie(t.BLEND),M=!0),D!==cS){if(D!==g||it!==T){if((c!==Cr||y!==Cr)&&(t.blendEquation(t.FUNC_ADD),c=Cr,y=Cr),it)switch(D){case Rs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uf:t.blendFunc(t.ONE,t.ONE);break;case Rp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Cp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Qe("WebGLState: Invalid blending: ",D);break}else switch(D){case Rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case uf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Rp:Qe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cp:Qe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qe("WebGLState: Invalid blending: ",D);break}m=null,_=null,R=null,A=null,C.set(0,0,0),S=0,g=D,T=it}return}ne=ne||ue,j=j||ae,Se=Se||ve,(ue!==c||ne!==y)&&(t.blendEquationSeparate(Ot[ue],Ot[ne]),c=ue,y=ne),(ae!==m||ve!==_||j!==R||Se!==A)&&(t.blendFuncSeparate(Xe[ae],Xe[ve],Xe[j],Xe[Se]),m=ae,_=ve,R=j,A=Se),(Le.equals(C)===!1||dt!==S)&&(t.blendColor(Le.r,Le.g,Le.b,dt),C.copy(Le),S=dt),g=D,T=!1}function ut(D,ue){D.side===yn?ce(t.CULL_FACE):ie(t.CULL_FACE);let ae=D.side===Ht;ue&&(ae=!ae),ze(ae),D.blending===Rs&&D.transparent===!1?nt(on):nt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ve=D.stencilWrite;o.setTest(ve),ve&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(D){F!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),F=D)}function Et(D){D!==oS?(ie(t.CULL_FACE),D!==b&&(D===Ap?t.cullFace(t.BACK):D===lS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ce(t.CULL_FACE),b=D}function P(D){D!==H&&(G&&t.lineWidth(D),H=D)}function Rt(D,ue,ae){D?(ie(t.POLYGON_OFFSET_FILL),(V!==ue||Y!==ae)&&(V=ue,Y=ae,a.getReversed()&&(ue=-ue),t.polygonOffset(ue,ae))):ce(t.POLYGON_OFFSET_FILL)}function et(D){D?ie(t.SCISSOR_TEST):ce(t.SCISSOR_TEST)}function ft(D){D===void 0&&(D=t.TEXTURE0+k-1),X!==D&&(t.activeTexture(D),X=D)}function Ee(D,ue,ae){ae===void 0&&(X===null?ae=t.TEXTURE0+k-1:ae=X);let ve=Q[ae];ve===void 0&&(ve={type:void 0,texture:void 0},Q[ae]=ve),(ve.type!==D||ve.texture!==ue)&&(X!==ae&&(t.activeTexture(ae),X=ae),t.bindTexture(D,ue||$[D]),ve.type=D,ve.texture=ue)}function w(){const D=Q[X];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function K(){try{t.texSubImage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function J(){try{t.texSubImage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function q(){try{t.compressedTexSubImage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function _e(){try{t.compressedTexSubImage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function le(){try{t.texStorage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function Re(){try{t.texStorage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function be(){try{t.texImage2D(...arguments)}catch(D){Qe("WebGLState:",D)}}function te(){try{t.texImage3D(...arguments)}catch(D){Qe("WebGLState:",D)}}function se(D){De.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),De.copy(D))}function xe(D){Ke.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ke.copy(D))}function Me(D,ue){let ae=u.get(ue);ae===void 0&&(ae=new WeakMap,u.set(ue,ae));let ve=ae.get(D);ve===void 0&&(ve=t.getUniformBlockIndex(ue,D.name),ae.set(D,ve))}function pe(D,ue){const ve=u.get(ue).get(D);l.get(ue)!==ve&&(t.uniformBlockBinding(ue,ve,D.__bindingPointIndex),l.set(ue,ve))}function ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},X=null,Q={},h={},f=new WeakMap,p=[],v=null,M=!1,g=null,c=null,m=null,_=null,y=null,R=null,A=null,C=new qe(0,0,0),S=0,T=!1,F=null,b=null,H=null,V=null,Y=null,De.set(0,0,t.canvas.width,t.canvas.height),Ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ie,disable:ce,bindFramebuffer:Fe,drawBuffers:Ce,useProgram:Ue,setBlending:nt,setMaterial:ut,setFlipSided:ze,setCullFace:Et,setLineWidth:P,setPolygonOffset:Rt,setScissorTest:et,activeTexture:ft,bindTexture:Ee,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:be,texImage3D:te,updateUBOMapping:Me,uniformBlockBinding:pe,texStorage2D:le,texStorage3D:Re,texSubImage2D:K,texSubImage3D:J,compressedTexSubImage2D:q,compressedTexSubImage3D:_e,scissor:se,viewport:xe,reset:ke}}function lw(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ie,d=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,x){return p?new OffscreenCanvas(w,x):Nl("canvas")}function M(w,x,U){let K=1;const J=Ee(w);if((J.width>U||J.height>U)&&(K=U/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const q=Math.floor(K*J.width),_e=Math.floor(K*J.height);h===void 0&&(h=v(q,_e));const le=x?v(q,_e):h;return le.width=q,le.height=_e,le.getContext("2d").drawImage(w,0,0,q,_e),Pe("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+q+"x"+_e+")."),le}else return"data"in w&&Pe("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),w;return w}function g(w){return w.generateMipmaps}function c(w){t.generateMipmap(w)}function m(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(w,x,U,K,J=!1){if(w!==null){if(t[w]!==void 0)return t[w];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=x;if(x===t.RED&&(U===t.FLOAT&&(q=t.R32F),U===t.HALF_FLOAT&&(q=t.R16F),U===t.UNSIGNED_BYTE&&(q=t.R8)),x===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(q=t.R8UI),U===t.UNSIGNED_SHORT&&(q=t.R16UI),U===t.UNSIGNED_INT&&(q=t.R32UI),U===t.BYTE&&(q=t.R8I),U===t.SHORT&&(q=t.R16I),U===t.INT&&(q=t.R32I)),x===t.RG&&(U===t.FLOAT&&(q=t.RG32F),U===t.HALF_FLOAT&&(q=t.RG16F),U===t.UNSIGNED_BYTE&&(q=t.RG8)),x===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(q=t.RG8UI),U===t.UNSIGNED_SHORT&&(q=t.RG16UI),U===t.UNSIGNED_INT&&(q=t.RG32UI),U===t.BYTE&&(q=t.RG8I),U===t.SHORT&&(q=t.RG16I),U===t.INT&&(q=t.RG32I)),x===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(q=t.RGB8UI),U===t.UNSIGNED_SHORT&&(q=t.RGB16UI),U===t.UNSIGNED_INT&&(q=t.RGB32UI),U===t.BYTE&&(q=t.RGB8I),U===t.SHORT&&(q=t.RGB16I),U===t.INT&&(q=t.RGB32I)),x===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(q=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(q=t.RGBA16UI),U===t.UNSIGNED_INT&&(q=t.RGBA32UI),U===t.BYTE&&(q=t.RGBA8I),U===t.SHORT&&(q=t.RGBA16I),U===t.INT&&(q=t.RGBA32I)),x===t.RGB&&(U===t.UNSIGNED_INT_5_9_9_9_REV&&(q=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(q=t.R11F_G11F_B10F)),x===t.RGBA){const _e=J?Ll:je.getTransfer(K);U===t.FLOAT&&(q=t.RGBA32F),U===t.HALF_FLOAT&&(q=t.RGBA16F),U===t.UNSIGNED_BYTE&&(q=_e===rt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(q=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(q=t.RGB5_A1)}return(q===t.R16F||q===t.R32F||q===t.RG16F||q===t.RG32F||q===t.RGBA16F||q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function y(w,x){let U;return w?x===null||x===hi||x===Bs?U=t.DEPTH24_STENCIL8:x===Yn?U=t.DEPTH32F_STENCIL8:x===Ha&&(U=t.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hi||x===Bs?U=t.DEPTH_COMPONENT24:x===Yn?U=t.DEPTH_COMPONENT32F:x===Ha&&(U=t.DEPTH_COMPONENT16),U}function R(w,x){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==jt&&w.minFilter!==Pt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){const x=w.target;x.removeEventListener("dispose",A),S(x),x.isVideoTexture&&d.delete(x)}function C(w){const x=w.target;x.removeEventListener("dispose",C),F(x)}function S(w){const x=i.get(w);if(x.__webglInit===void 0)return;const U=w.source,K=f.get(U);if(K){const J=K[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(w),Object.keys(K).length===0&&f.delete(U)}i.remove(w)}function T(w){const x=i.get(w);t.deleteTexture(x.__webglTexture);const U=w.source,K=f.get(U);delete K[x.__cacheKey],a.memory.textures--}function F(w){const x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let J=0;J<x.__webglFramebuffer[K].length;J++)t.deleteFramebuffer(x.__webglFramebuffer[K][J]);else t.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)t.deleteFramebuffer(x.__webglFramebuffer[K]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=w.textures;for(let K=0,J=U.length;K<J;K++){const q=i.get(U[K]);q.__webglTexture&&(t.deleteTexture(q.__webglTexture),a.memory.textures--),i.remove(U[K])}i.remove(w)}let b=0;function H(){b=0}function V(){const w=b;return w>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),b+=1,w}function Y(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function k(w,x){const U=i.get(w);if(w.isVideoTexture&&et(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&U.__version!==w.version){const K=w.image;if(K===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{$(U,w,x);return}}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+x)}function G(w,x){const U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){$(U,w,x);return}else w.isExternalTexture&&(U.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+x)}function I(w,x){const U=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){$(U,w,x);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+x)}function O(w,x){const U=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&U.__version!==w.version){ie(U,w,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+x)}const X={[_f]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[xf]:t.MIRRORED_REPEAT},Q={[jt]:t.NEAREST,[PS]:t.NEAREST_MIPMAP_NEAREST,[xo]:t.NEAREST_MIPMAP_LINEAR,[Pt]:t.LINEAR,[Nu]:t.LINEAR_MIPMAP_NEAREST,[Lr]:t.LINEAR_MIPMAP_LINEAR},oe={[LS]:t.NEVER,[BS]:t.ALWAYS,[IS]:t.LESS,[ih]:t.LEQUAL,[NS]:t.EQUAL,[rh]:t.GEQUAL,[FS]:t.GREATER,[OS]:t.NOTEQUAL};function re(w,x){if(x.type===Yn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Pt||x.magFilter===Nu||x.magFilter===xo||x.magFilter===Lr||x.minFilter===Pt||x.minFilter===Nu||x.minFilter===xo||x.minFilter===Lr)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,X[x.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,X[x.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,X[x.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Q[x.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Q[x.minFilter]),x.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,oe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===jt||x.minFilter!==xo&&x.minFilter!==Lr||x.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function De(w,x){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));const K=x.source;let J=f.get(K);J===void 0&&(J={},f.set(K,J));const q=Y(x);if(q!==w.__cacheKey){J[q]===void 0&&(J[q]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),J[q].usedTimes++;const _e=J[w.__cacheKey];_e!==void 0&&(J[w.__cacheKey].usedTimes--,_e.usedTimes===0&&T(x)),w.__cacheKey=q,w.__webglTexture=J[q].texture}return U}function Ke(w,x,U){return Math.floor(Math.floor(w/U)/x)}function tt(w,x,U,K){const q=w.updateRanges;if(q.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,U,K,x.data);else{q.sort((te,se)=>te.start-se.start);let _e=0;for(let te=1;te<q.length;te++){const se=q[_e],xe=q[te],Me=se.start+se.count,pe=Ke(xe.start,x.width,4),ke=Ke(se.start,x.width,4);xe.start<=Me+1&&pe===ke&&Ke(xe.start+xe.count-1,x.width,4)===pe?se.count=Math.max(se.count,xe.start+xe.count-se.start):(++_e,q[_e]=xe)}q.length=_e+1;const le=t.getParameter(t.UNPACK_ROW_LENGTH),Re=t.getParameter(t.UNPACK_SKIP_PIXELS),be=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let te=0,se=q.length;te<se;te++){const xe=q[te],Me=Math.floor(xe.start/4),pe=Math.ceil(xe.count/4),ke=Me%x.width,D=Math.floor(Me/x.width),ue=pe,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,ke,D,ue,ae,U,K,x.data)}w.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(t.UNPACK_SKIP_ROWS,be)}}function $(w,x,U){let K=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=t.TEXTURE_3D);const J=De(w,x),q=x.source;n.bindTexture(K,w.__webglTexture,t.TEXTURE0+U);const _e=i.get(q);if(q.version!==_e.__version||J===!0){n.activeTexture(t.TEXTURE0+U);const le=je.getPrimaries(je.workingColorSpace),Re=x.colorSpace===oi?null:je.getPrimaries(x.colorSpace),be=x.colorSpace===oi||le===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let te=M(x.image,!1,r.maxTextureSize);te=ft(x,te);const se=s.convert(x.format,x.colorSpace),xe=s.convert(x.type);let Me=_(x.internalFormat,se,xe,x.colorSpace,x.isVideoTexture);re(K,x);let pe;const ke=x.mipmaps,D=x.isVideoTexture!==!0,ue=_e.__version===void 0||J===!0,ae=q.dataReady,ve=R(x,te);if(x.isDepthTexture)Me=y(x.format===er,x.type),ue&&(D?n.texStorage2D(t.TEXTURE_2D,1,Me,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Me,te.width,te.height,0,se,xe,null));else if(x.isDataTexture)if(ke.length>0){D&&ue&&n.texStorage2D(t.TEXTURE_2D,ve,Me,ke[0].width,ke[0].height);for(let ne=0,j=ke.length;ne<j;ne++)pe=ke[ne],D?ae&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,xe,pe.data):n.texImage2D(t.TEXTURE_2D,ne,Me,pe.width,pe.height,0,se,xe,pe.data);x.generateMipmaps=!1}else D?(ue&&n.texStorage2D(t.TEXTURE_2D,ve,Me,te.width,te.height),ae&&tt(x,te,se,xe)):n.texImage2D(t.TEXTURE_2D,0,Me,te.width,te.height,0,se,xe,te.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){D&&ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Me,ke[0].width,ke[0].height,te.depth);for(let ne=0,j=ke.length;ne<j;ne++)if(pe=ke[ne],x.format!==qn)if(se!==null)if(D){if(ae)if(x.layerUpdates.size>0){const Se=em(pe.width,pe.height,x.format,x.type);for(const Le of x.layerUpdates){const dt=pe.data.subarray(Le*Se/pe.data.BYTES_PER_ELEMENT,(Le+1)*Se/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,Le,pe.width,pe.height,1,se,dt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,se,pe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Me,pe.width,pe.height,te.depth,0,pe.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,pe.width,pe.height,te.depth,se,xe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Me,pe.width,pe.height,te.depth,0,se,xe,pe.data)}else{D&&ue&&n.texStorage2D(t.TEXTURE_2D,ve,Me,ke[0].width,ke[0].height);for(let ne=0,j=ke.length;ne<j;ne++)pe=ke[ne],x.format!==qn?se!==null?D?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Me,pe.width,pe.height,0,pe.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ae&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,pe.width,pe.height,se,xe,pe.data):n.texImage2D(t.TEXTURE_2D,ne,Me,pe.width,pe.height,0,se,xe,pe.data)}else if(x.isDataArrayTexture)if(D){if(ue&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ve,Me,te.width,te.height,te.depth),ae)if(x.layerUpdates.size>0){const ne=em(te.width,te.height,x.format,x.type);for(const j of x.layerUpdates){const Se=te.data.subarray(j*ne/te.data.BYTES_PER_ELEMENT,(j+1)*ne/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,j,te.width,te.height,1,se,xe,Se)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,se,xe,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,se,xe,te.data);else if(x.isData3DTexture)D?(ue&&n.texStorage3D(t.TEXTURE_3D,ve,Me,te.width,te.height,te.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,se,xe,te.data)):n.texImage3D(t.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,se,xe,te.data);else if(x.isFramebufferTexture){if(ue)if(D)n.texStorage2D(t.TEXTURE_2D,ve,Me,te.width,te.height);else{let ne=te.width,j=te.height;for(let Se=0;Se<ve;Se++)n.texImage2D(t.TEXTURE_2D,Se,Me,ne,j,0,se,xe,null),ne>>=1,j>>=1}}else if(ke.length>0){if(D&&ue){const ne=Ee(ke[0]);n.texStorage2D(t.TEXTURE_2D,ve,Me,ne.width,ne.height)}for(let ne=0,j=ke.length;ne<j;ne++)pe=ke[ne],D?ae&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,se,xe,pe):n.texImage2D(t.TEXTURE_2D,ne,Me,se,xe,pe);x.generateMipmaps=!1}else if(D){if(ue){const ne=Ee(te);n.texStorage2D(t.TEXTURE_2D,ve,Me,ne.width,ne.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se,xe,te)}else n.texImage2D(t.TEXTURE_2D,0,Me,se,xe,te);g(x)&&c(K),_e.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ie(w,x,U){if(x.image.length!==6)return;const K=De(w,x),J=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+U);const q=i.get(J);if(J.version!==q.__version||K===!0){n.activeTexture(t.TEXTURE0+U);const _e=je.getPrimaries(je.workingColorSpace),le=x.colorSpace===oi?null:je.getPrimaries(x.colorSpace),Re=x.colorSpace===oi||_e===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const be=x.isCompressedTexture||x.image[0].isCompressedTexture,te=x.image[0]&&x.image[0].isDataTexture,se=[];for(let j=0;j<6;j++)!be&&!te?se[j]=M(x.image[j],!0,r.maxCubemapSize):se[j]=te?x.image[j].image:x.image[j],se[j]=ft(x,se[j]);const xe=se[0],Me=s.convert(x.format,x.colorSpace),pe=s.convert(x.type),ke=_(x.internalFormat,Me,pe,x.colorSpace),D=x.isVideoTexture!==!0,ue=q.__version===void 0||K===!0,ae=J.dataReady;let ve=R(x,xe);re(t.TEXTURE_CUBE_MAP,x);let ne;if(be){D&&ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,ke,xe.width,xe.height);for(let j=0;j<6;j++){ne=se[j].mipmaps;for(let Se=0;Se<ne.length;Se++){const Le=ne[Se];x.format!==qn?Me!==null?D?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,Le.width,Le.height,Me,Le.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,ke,Le.width,Le.height,0,Le.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,0,0,Le.width,Le.height,Me,pe,Le.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se,ke,Le.width,Le.height,0,Me,pe,Le.data)}}}else{if(ne=x.mipmaps,D&&ue){ne.length>0&&ve++;const j=Ee(se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ve,ke,j.width,j.height)}for(let j=0;j<6;j++)if(te){D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,se[j].width,se[j].height,Me,pe,se[j].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,se[j].width,se[j].height,0,Me,pe,se[j].data);for(let Se=0;Se<ne.length;Se++){const dt=ne[Se].image[j].image;D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,dt.width,dt.height,Me,pe,dt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,ke,dt.width,dt.height,0,Me,pe,dt.data)}}else{D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Me,pe,se[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,ke,Me,pe,se[j]);for(let Se=0;Se<ne.length;Se++){const Le=ne[Se];D?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,0,0,Me,pe,Le.image[j]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+j,Se+1,ke,Me,pe,Le.image[j])}}}g(x)&&c(t.TEXTURE_CUBE_MAP),q.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ce(w,x,U,K,J,q){const _e=s.convert(U.format,U.colorSpace),le=s.convert(U.type),Re=_(U.internalFormat,_e,le,U.colorSpace),be=i.get(x),te=i.get(U);if(te.__renderTarget=x,!be.__hasExternalTextures){const se=Math.max(1,x.width>>q),xe=Math.max(1,x.height>>q);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,q,Re,se,xe,x.depth,0,_e,le,null):n.texImage2D(J,q,Re,se,xe,0,_e,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),Rt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,J,te.__webglTexture,0,P(x)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,J,te.__webglTexture,q),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(w,x,U){if(t.bindRenderbuffer(t.RENDERBUFFER,w),x.depthBuffer){const K=x.depthTexture,J=K&&K.isDepthTexture?K.type:null,q=y(x.stencilBuffer,J),_e=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Rt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,P(x),q,x.width,x.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,P(x),q,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,q,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,w)}else{const K=x.textures;for(let J=0;J<K.length;J++){const q=K[J],_e=s.convert(q.format,q.colorSpace),le=s.convert(q.type),Re=_(q.internalFormat,_e,le,q.colorSpace);Rt(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,P(x),Re,x.width,x.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,P(x),Re,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Re,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(w,x,U){const K=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(x.depthTexture);if(J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(J.__webglInit===void 0&&(J.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),re(t.TEXTURE_CUBE_MAP,x.depthTexture);const be=s.convert(x.depthTexture.format),te=s.convert(x.depthTexture.type);let se;x.depthTexture.format===Ii?se=t.DEPTH_COMPONENT24:x.depthTexture.format===er&&(se=t.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,se,x.width,x.height,0,be,te,null)}}else k(x.depthTexture,0);const q=J.__webglTexture,_e=P(x),le=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,Re=x.depthTexture.format===er?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ii)Rt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,le,q,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,Re,le,q,0);else if(x.depthTexture.format===er)Rt(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,le,q,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,Re,le,q,0);else throw new Error("Unknown depthTexture format")}function Ue(w){const x=i.get(w),U=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=K}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let K=0;K<6;K++)Ce(x.__webglFramebuffer[K],w,K);else{const K=w.texture.mipmaps;K&&K.length>0?Ce(x.__webglFramebuffer[0],w,0):Ce(x.__webglFramebuffer,w,0)}else if(U){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=t.createRenderbuffer(),Fe(x.__webglDepthbuffer[K],w,!1);else{const J=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,q)}}else{const K=w.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Fe(x.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,q),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,q)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ot(w,x,U){const K=i.get(w);x!==void 0&&ce(K.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Ue(w)}function Xe(w){const x=w.texture,U=i.get(w),K=i.get(x);w.addEventListener("dispose",C);const J=w.textures,q=w.isWebGLCubeRenderTarget===!0,_e=J.length>1;if(_e||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=x.version,a.memory.textures++),q){U.__webglFramebuffer=[];for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[le]=[];for(let Re=0;Re<x.mipmaps.length;Re++)U.__webglFramebuffer[le][Re]=t.createFramebuffer()}else U.__webglFramebuffer[le]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let le=0;le<x.mipmaps.length;le++)U.__webglFramebuffer[le]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(_e)for(let le=0,Re=J.length;le<Re;le++){const be=i.get(J[le]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&Rt(w)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const Re=J[le];U.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[le]);const be=s.convert(Re.format,Re.colorSpace),te=s.convert(Re.type),se=_(Re.internalFormat,be,te,Re.colorSpace,w.isXRRenderTarget===!0),xe=P(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,se,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,U.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Fe(U.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(q){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),re(t.TEXTURE_CUBE_MAP,x);for(let le=0;le<6;le++)if(x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)ce(U.__webglFramebuffer[le][Re],w,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,Re);else ce(U.__webglFramebuffer[le],w,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);g(x)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let le=0,Re=J.length;le<Re;le++){const be=J[le],te=i.get(be);let se=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(se=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(se,te.__webglTexture),re(se,be),ce(U.__webglFramebuffer,w,be,t.COLOR_ATTACHMENT0+le,se,0),g(be)&&c(se)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,K.__webglTexture),re(le,x),x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)ce(U.__webglFramebuffer[Re],w,x,t.COLOR_ATTACHMENT0,le,Re);else ce(U.__webglFramebuffer,w,x,t.COLOR_ATTACHMENT0,le,0);g(x)&&c(le),n.unbindTexture()}w.depthBuffer&&Ue(w)}function nt(w){const x=w.textures;for(let U=0,K=x.length;U<K;U++){const J=x[U];if(g(J)){const q=m(w),_e=i.get(J).__webglTexture;n.bindTexture(q,_e),c(q),n.unbindTexture()}}}const ut=[],ze=[];function Et(w){if(w.samples>0){if(Rt(w)===!1){const x=w.textures,U=w.width,K=w.height;let J=t.COLOR_BUFFER_BIT;const q=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(w),le=x.length>1;if(le)for(let be=0;be<x.length;be++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Re=w.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let be=0;be<x.length;be++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[be]);const te=i.get(x[be]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,U,K,0,0,U,K,J,t.NEAREST),l===!0&&(ut.length=0,ze.length=0,ut.push(t.COLOR_ATTACHMENT0+be),w.depthBuffer&&w.resolveDepthBuffer===!1&&(ut.push(q),ze.push(q),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let be=0;be<x.length;be++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.RENDERBUFFER,_e.__webglColorRenderbuffer[be]);const te=i.get(x[be]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+be,t.TEXTURE_2D,te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function P(w){return Math.min(r.maxSamples,w.samples)}function Rt(w){const x=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function et(w){const x=a.render.frame;d.get(w)!==x&&(d.set(w,x),w.update())}function ft(w,x){const U=w.colorSpace,K=w.format,J=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||U!==hr&&U!==oi&&(je.getTransfer(U)===rt?(K!==qn||J!==Ut)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qe("WebGLTextures: Unsupported texture color space:",U)),x}function Ee(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=k,this.setTexture2DArray=G,this.setTexture3D=I,this.setTextureCube=O,this.rebindTextures=Ot,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function uw(t,e){function n(i,r=oi){let s;const a=je.getTransfer(r);if(i===Ut)return t.UNSIGNED_BYTE;if(i===Qd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Zv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Qv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===$v)return t.BYTE;if(i===Kv)return t.SHORT;if(i===Ha)return t.UNSIGNED_SHORT;if(i===Zd)return t.INT;if(i===hi)return t.UNSIGNED_INT;if(i===Yn)return t.FLOAT;if(i===Li)return t.HALF_FLOAT;if(i===Jv)return t.ALPHA;if(i===e_)return t.RGB;if(i===qn)return t.RGBA;if(i===Ii)return t.DEPTH_COMPONENT;if(i===er)return t.DEPTH_STENCIL;if(i===t_)return t.RED;if(i===eh)return t.RED_INTEGER;if(i===zs)return t.RG;if(i===th)return t.RG_INTEGER;if(i===nh)return t.RGBA_INTEGER;if(i===il||i===rl||i===sl||i===al)if(a===rt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Sf||i===Mf||i===yf||i===Ef)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Sf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ef)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Tf||i===wf||i===Af||i===Rf||i===Cf||i===bf||i===Pf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Tf||i===wf)return a===rt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Af)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rf)return s.COMPRESSED_R11_EAC;if(i===Cf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===bf)return s.COMPRESSED_RG11_EAC;if(i===Pf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Df||i===Uf||i===Lf||i===If||i===Nf||i===Ff||i===Of||i===Bf||i===zf||i===kf||i===Hf||i===Vf||i===Gf||i===Wf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Df)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===If)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Nf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ff)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Of)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===zf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wf)return a===rt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xf||i===jf||i===Yf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xf)return a===rt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qf||i===$f||i===Kf||i===Zf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$f)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Zf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const cw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new h_(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Gt({vertexShader:cw,fragmentShader:fw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Qn(new Qa(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hw extends Oi{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,d=null,h=null,f=null,p=null,v=null;const M=typeof XRWebGLBinding<"u",g=new dw,c={},m=n.getContextAttributes();let _=null,y=null;const R=[],A=[],C=new Ie;let S=null;const T=new Mn;T.viewport=new _t;const F=new Mn;F.viewport=new _t;const b=[T,F],H=new EM;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=R[$];return ie===void 0&&(ie=new Gu,R[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=R[$];return ie===void 0&&(ie=new Gu,R[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=R[$];return ie===void 0&&(ie=new Gu,R[$]=ie),ie.getHandSpace()};function k($){const ie=A.indexOf($.inputSource);if(ie===-1)return;const ce=R[ie];ce!==void 0&&(ce.update($.inputSource,$.frame,u||a),ce.dispatchEvent({type:$.type,data:$.inputSource}))}function G(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",I);for(let $=0;$<R.length;$++){const ie=A[$];ie!==null&&(A[$]=null,R[$].disconnect(ie))}V=null,Y=null,g.reset();for(const $ in c)delete c[$];e.setRenderTarget(_),p=null,f=null,h=null,r=null,y=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",G),r.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Fe=null,Ce=null;m.depth&&(Ce=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=m.stencil?er:Ii,Fe=m.stencil?Bs:hi);const Ue={colorFormat:n.RGBA8,depthFormat:Ce,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Ue),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new It(f.textureWidth,f.textureHeight,{format:qn,type:Ut,depthTexture:new ks(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ce={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new It(p.framebufferWidth,p.framebufferHeight,{format:qn,type:Ut,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function I($){for(let ie=0;ie<$.removed.length;ie++){const ce=$.removed[ie],Fe=A.indexOf(ce);Fe>=0&&(A[Fe]=null,R[Fe].disconnect(ce))}for(let ie=0;ie<$.added.length;ie++){const ce=$.added[ie];let Fe=A.indexOf(ce);if(Fe===-1){for(let Ue=0;Ue<R.length;Ue++)if(Ue>=A.length){A.push(ce),Fe=Ue;break}else if(A[Ue]===null){A[Ue]=ce,Fe=Ue;break}if(Fe===-1)break}const Ce=R[Fe];Ce&&Ce.connect(ce)}}const O=new z,X=new z;function Q($,ie,ce){O.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const Fe=O.distanceTo(X),Ce=ie.projectionMatrix.elements,Ue=ce.projectionMatrix.elements,Ot=Ce[14]/(Ce[10]-1),Xe=Ce[14]/(Ce[10]+1),nt=(Ce[9]+1)/Ce[5],ut=(Ce[9]-1)/Ce[5],ze=(Ce[8]-1)/Ce[0],Et=(Ue[8]+1)/Ue[0],P=Ot*ze,Rt=Ot*Et,et=Fe/(-ze+Et),ft=et*-ze;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ft),$.translateZ(et),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Ce[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ee=Ot+et,w=Xe+et,x=P-ft,U=Rt+(Fe-ft),K=nt*Xe/w*Ee,J=ut*Xe/w*Ee;$.projectionMatrix.makePerspective(x,U,K,J,Ee,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function oe($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ie=$.near,ce=$.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ce=g.depthFar)),H.near=F.near=T.near=ie,H.far=F.far=T.far=ce,(V!==H.near||Y!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),V=H.near,Y=H.far),H.layers.mask=$.layers.mask|6,T.layers.mask=H.layers.mask&-5,F.layers.mask=H.layers.mask&-3;const Fe=$.parent,Ce=H.cameras;oe(H,Fe);for(let Ue=0;Ue<Ce.length;Ue++)oe(Ce[Ue],Fe);Ce.length===2?Q(H,T,F):H.projectionMatrix.copy(T.projectionMatrix),re($,H,Fe)};function re($,ie,ce){ce===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(ce.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Qf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function($){return c[$]};let De=null;function Ke($,ie){if(d=ie.getViewerPose(u||a),v=ie,d!==null){const ce=d.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Fe=!1;ce.length!==H.cameras.length&&(H.cameras.length=0,Fe=!0);for(let Xe=0;Xe<ce.length;Xe++){const nt=ce[Xe];let ut=null;if(p!==null)ut=p.getViewport(nt);else{const Et=h.getViewSubImage(f,nt);ut=Et.viewport,Xe===0&&(e.setRenderTargetTextures(y,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(y))}let ze=b[Xe];ze===void 0&&(ze=new Mn,ze.layers.enable(Xe),ze.viewport=new _t,b[Xe]=ze),ze.matrix.fromArray(nt.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(nt.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(ut.x,ut.y,ut.width,ut.height),Xe===0&&(H.matrix.copy(ze.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Fe===!0&&H.cameras.push(ze)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const Xe=h.getDepthInformation(ce[0]);Xe&&Xe.isValid&&Xe.texture&&g.init(Xe,r.renderState)}if(Ce&&Ce.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let Xe=0;Xe<ce.length;Xe++){const nt=ce[Xe].camera;if(nt){let ut=c[nt];ut||(ut=new h_,c[nt]=ut);const ze=h.getCameraImage(nt);ut.sourceTexture=ze}}}}for(let ce=0;ce<R.length;ce++){const Fe=A[ce],Ce=R[ce];Fe!==null&&Ce!==void 0&&Ce.update(Fe,ie,u||a)}De&&De($,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const tt=new g_;tt.setAnimationLoop(Ke),this.setAnimationLoop=function($){De=$},this.dispose=function(){}}}const Tr=new Ni,pw=new At;function mw(t,e){function n(g,c){g.matrixAutoUpdate===!0&&g.updateMatrix(),c.value.copy(g.matrix)}function i(g,c){c.color.getRGB(g.fogColor.value,p_(t)),c.isFog?(g.fogNear.value=c.near,g.fogFar.value=c.far):c.isFogExp2&&(g.fogDensity.value=c.density)}function r(g,c,m,_,y){c.isMeshBasicMaterial?s(g,c):c.isMeshLambertMaterial?(s(g,c),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)):c.isMeshToonMaterial?(s(g,c),h(g,c)):c.isMeshPhongMaterial?(s(g,c),d(g,c),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)):c.isMeshStandardMaterial?(s(g,c),f(g,c),c.isMeshPhysicalMaterial&&p(g,c,y)):c.isMeshMatcapMaterial?(s(g,c),v(g,c)):c.isMeshDepthMaterial?s(g,c):c.isMeshDistanceMaterial?(s(g,c),M(g,c)):c.isMeshNormalMaterial?s(g,c):c.isLineBasicMaterial?(a(g,c),c.isLineDashedMaterial&&o(g,c)):c.isPointsMaterial?l(g,c,m,_):c.isSpriteMaterial?u(g,c):c.isShadowMaterial?(g.color.value.copy(c.color),g.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function s(g,c){g.opacity.value=c.opacity,c.color&&g.diffuse.value.copy(c.color),c.emissive&&g.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.bumpMap&&(g.bumpMap.value=c.bumpMap,n(c.bumpMap,g.bumpMapTransform),g.bumpScale.value=c.bumpScale,c.side===Ht&&(g.bumpScale.value*=-1)),c.normalMap&&(g.normalMap.value=c.normalMap,n(c.normalMap,g.normalMapTransform),g.normalScale.value.copy(c.normalScale),c.side===Ht&&g.normalScale.value.negate()),c.displacementMap&&(g.displacementMap.value=c.displacementMap,n(c.displacementMap,g.displacementMapTransform),g.displacementScale.value=c.displacementScale,g.displacementBias.value=c.displacementBias),c.emissiveMap&&(g.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,g.emissiveMapTransform)),c.specularMap&&(g.specularMap.value=c.specularMap,n(c.specularMap,g.specularMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest);const m=e.get(c),_=m.envMap,y=m.envMapRotation;_&&(g.envMap.value=_,Tr.copy(y),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),g.envMapRotation.value.setFromMatrix4(pw.makeRotationFromEuler(Tr)),g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=c.reflectivity,g.ior.value=c.ior,g.refractionRatio.value=c.refractionRatio),c.lightMap&&(g.lightMap.value=c.lightMap,g.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,g.lightMapTransform)),c.aoMap&&(g.aoMap.value=c.aoMap,g.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,g.aoMapTransform))}function a(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform))}function o(g,c){g.dashSize.value=c.dashSize,g.totalSize.value=c.dashSize+c.gapSize,g.scale.value=c.scale}function l(g,c,m,_){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.size.value=c.size*m,g.scale.value=_*.5,c.map&&(g.map.value=c.map,n(c.map,g.uvTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function u(g,c){g.diffuse.value.copy(c.color),g.opacity.value=c.opacity,g.rotation.value=c.rotation,c.map&&(g.map.value=c.map,n(c.map,g.mapTransform)),c.alphaMap&&(g.alphaMap.value=c.alphaMap,n(c.alphaMap,g.alphaMapTransform)),c.alphaTest>0&&(g.alphaTest.value=c.alphaTest)}function d(g,c){g.specular.value.copy(c.specular),g.shininess.value=Math.max(c.shininess,1e-4)}function h(g,c){c.gradientMap&&(g.gradientMap.value=c.gradientMap)}function f(g,c){g.metalness.value=c.metalness,c.metalnessMap&&(g.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,g.metalnessMapTransform)),g.roughness.value=c.roughness,c.roughnessMap&&(g.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,g.roughnessMapTransform)),c.envMap&&(g.envMapIntensity.value=c.envMapIntensity)}function p(g,c,m){g.ior.value=c.ior,c.sheen>0&&(g.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),g.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(g.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,g.sheenColorMapTransform)),c.sheenRoughnessMap&&(g.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,g.sheenRoughnessMapTransform))),c.clearcoat>0&&(g.clearcoat.value=c.clearcoat,g.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(g.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,g.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(g.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===Ht&&g.clearcoatNormalScale.value.negate())),c.dispersion>0&&(g.dispersion.value=c.dispersion),c.iridescence>0&&(g.iridescence.value=c.iridescence,g.iridescenceIOR.value=c.iridescenceIOR,g.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(g.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,g.iridescenceMapTransform)),c.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),c.transmission>0&&(g.transmission.value=c.transmission,g.transmissionSamplerMap.value=m.texture,g.transmissionSamplerSize.value.set(m.width,m.height),c.transmissionMap&&(g.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,g.transmissionMapTransform)),g.thickness.value=c.thickness,c.thicknessMap&&(g.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=c.attenuationDistance,g.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(g.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(g.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=c.specularIntensity,g.specularColor.value.copy(c.specularColor),c.specularColorMap&&(g.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,g.specularColorMapTransform)),c.specularIntensityMap&&(g.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,c){c.matcap&&(g.matcap.value=c.matcap)}function M(g,c){const m=e.get(c).light;g.referencePosition.value.setFromMatrixPosition(m.matrixWorld),g.nearDistance.value=m.shadow.camera.near,g.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function gw(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const y=_.program;i.uniformBlockBinding(m,y)}function u(m,_){let y=r[m.id];y===void 0&&(v(m),y=d(m),r[m.id]=y,m.addEventListener("dispose",g));const R=_.program;i.updateUBOMapping(m,R);const A=e.render.frame;s[m.id]!==A&&(f(m),s[m.id]=A)}function d(m){const _=h();m.__bindingPointIndex=_;const y=t.createBuffer(),R=m.__size,A=m.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function h(){for(let m=0;m<o;m++)if(a.indexOf(m)===-1)return a.push(m),m;return Qe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(m){const _=r[m.id],y=m.uniforms,R=m.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,C=y.length;A<C;A++){const S=Array.isArray(y[A])?y[A]:[y[A]];for(let T=0,F=S.length;T<F;T++){const b=S[T];if(p(b,A,T,R)===!0){const H=b.__offset,V=Array.isArray(b.value)?b.value:[b.value];let Y=0;for(let k=0;k<V.length;k++){const G=V[k],I=M(G);typeof G=="number"||typeof G=="boolean"?(b.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,H+Y,b.__data)):G.isMatrix3?(b.__data[0]=G.elements[0],b.__data[1]=G.elements[1],b.__data[2]=G.elements[2],b.__data[3]=0,b.__data[4]=G.elements[3],b.__data[5]=G.elements[4],b.__data[6]=G.elements[5],b.__data[7]=0,b.__data[8]=G.elements[6],b.__data[9]=G.elements[7],b.__data[10]=G.elements[8],b.__data[11]=0):(G.toArray(b.__data,Y),Y+=I.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,b.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(m,_,y,R){const A=m.value,C=_+"_"+y;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const S=R[C];if(typeof A=="number"||typeof A=="boolean"){if(S!==A)return R[C]=A,!0}else if(S.equals(A)===!1)return S.copy(A),!0}return!1}function v(m){const _=m.uniforms;let y=0;const R=16;for(let C=0,S=_.length;C<S;C++){const T=Array.isArray(_[C])?_[C]:[_[C]];for(let F=0,b=T.length;F<b;F++){const H=T[F],V=Array.isArray(H.value)?H.value:[H.value];for(let Y=0,k=V.length;Y<k;Y++){const G=V[Y],I=M(G),O=y%R,X=O%I.boundary,Q=O+X;y+=X,Q!==0&&R-Q<I.storage&&(y+=R-Q),H.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=I.storage}}}const A=y%R;return A>0&&(y+=R-A),m.__size=y,m.__cache={},this}function M(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",m),_}function g(m){const _=m.target;_.removeEventListener("dispose",g);const y=a.indexOf(_.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function c(){for(const m in r)t.deleteBuffer(r[m]);a=[],r={},s={}}return{bind:l,update:u,dispose:c}}const vw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ii=null;function _w(){return ii===null&&(ii=new lM(vw,16,16,zs,Li),ii.name="DFG_LUT",ii.minFilter=Pt,ii.magFilter=Pt,ii.wrapS=wi,ii.wrapT=wi,ii.generateMipmaps=!1,ii.needsUpdate=!0),ii}class xw{constructor(e={}){const{canvas:n=kS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Ut}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const M=p,g=new Set([nh,th,eh]),c=new Set([Ut,hi,Ha,Bs,Qd,Jd]),m=new Uint32Array(4),_=new Int32Array(4);let y=null,R=null;const A=[],C=[];let S=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let F=!1;this._outputColorSpace=lt;let b=0,H=0,V=null,Y=-1,k=null;const G=new _t,I=new _t;let O=null;const X=new qe(0);let Q=0,oe=n.width,re=n.height,De=1,Ke=null,tt=null;const $=new _t(0,0,oe,re),ie=new _t(0,0,oe,re);let ce=!1;const Fe=new c_;let Ce=!1,Ue=!1;const Ot=new At,Xe=new z,nt=new _t,ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function Et(){return V===null?De:1}let P=i;function Rt(E,L){return n.getContext(E,L)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ya}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",dt,!1),P===null){const L="webgl2";if(P=Rt(L,E),P===null)throw Rt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Qe("WebGLRenderer: "+E.message),E}let et,ft,Ee,w,x,U,K,J,q,_e,le,Re,be,te,se,xe,Me,pe,ke,D,ue,ae,ve;function ne(){et=new xT(P),et.init(),ue=new uw(P,et),ft=new fT(P,et,e,ue),Ee=new ow(P,et),ft.reversedDepthBuffer&&f&&Ee.buffers.depth.setReversed(!0),w=new yT(P),x=new Y1,U=new lw(P,et,Ee,x,ft,ue,w),K=new _T(T),J=new RM(P),ae=new uT(P,J),q=new ST(P,J,w,ae),_e=new TT(P,q,J,ae,w),pe=new ET(P,ft,U),se=new dT(x),le=new j1(T,K,et,ft,ae,se),Re=new mw(T,x),be=new $1,te=new tw(et),Me=new lT(T,K,Ee,_e,v,l),xe=new aw(T,_e,ft),ve=new gw(P,w,ft,Ee),ke=new cT(P,et,w),D=new MT(P,et,w),w.programs=le.programs,T.capabilities=ft,T.extensions=et,T.properties=x,T.renderLists=be,T.shadowMap=xe,T.state=Ee,T.info=w}ne(),M!==Ut&&(S=new AT(M,n.width,n.height,r,s));const j=new hw(T,P);this.xr=j,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=et.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=et.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return De},this.setPixelRatio=function(E){E!==void 0&&(De=E,this.setSize(oe,re,!1))},this.getSize=function(E){return E.set(oe,re)},this.setSize=function(E,L,W=!0){if(j.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=E,re=L,n.width=Math.floor(E*De),n.height=Math.floor(L*De),W===!0&&(n.style.width=E+"px",n.style.height=L+"px"),S!==null&&S.setSize(n.width,n.height),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(oe*De,re*De).floor()},this.setDrawingBufferSize=function(E,L,W){oe=E,re=L,De=W,n.width=Math.floor(E*W),n.height=Math.floor(L*W),this.setViewport(0,0,E,L)},this.setEffects=function(E){if(M===Ut){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let L=0;L<E.length;L++)if(E[L].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(G)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,L,W,B){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,L,W,B),Ee.viewport(G.copy($).multiplyScalar(De).round())},this.getScissor=function(E){return E.copy(ie)},this.setScissor=function(E,L,W,B){E.isVector4?ie.set(E.x,E.y,E.z,E.w):ie.set(E,L,W,B),Ee.scissor(I.copy(ie).multiplyScalar(De).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(E){Ee.setScissorTest(ce=E)},this.setOpaqueSort=function(E){Ke=E},this.setTransparentSort=function(E){tt=E},this.getClearColor=function(E){return E.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(E=!0,L=!0,W=!0){let B=0;if(E){let N=!1;if(V!==null){const de=V.texture.format;N=g.has(de)}if(N){const de=V.texture.type,me=c.has(de),he=Me.getClearColor(),ye=Me.getClearAlpha(),we=he.r,Ne=he.g,He=he.b;me?(m[0]=we,m[1]=Ne,m[2]=He,m[3]=ye,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=we,_[1]=Ne,_[2]=He,_[3]=ye,P.clearBufferiv(P.COLOR,0,_))}else B|=P.COLOR_BUFFER_BIT}L&&(B|=P.DEPTH_BUFFER_BIT),W&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),Me.dispose(),be.dispose(),te.dispose(),x.dispose(),K.dispose(),_e.dispose(),ae.dispose(),ve.dispose(),le.dispose(),j.dispose(),j.removeEventListener("sessionstart",uh),j.removeEventListener("sessionend",ch),vr.stop()};function Se(E){E.preventDefault(),Lp("WebGLRenderer: Context Lost."),F=!0}function Le(){Lp("WebGLRenderer: Context Restored."),F=!1;const E=w.autoReset,L=xe.enabled,W=xe.autoUpdate,B=xe.needsUpdate,N=xe.type;ne(),w.autoReset=E,xe.enabled=L,xe.autoUpdate=W,xe.needsUpdate=B,xe.type=N}function dt(E){Qe("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const L=E.target;L.removeEventListener("dispose",it),pi(L)}function pi(E){mi(E),x.remove(E)}function mi(E){const L=x.get(E).programs;L!==void 0&&(L.forEach(function(W){le.releaseProgram(W)}),E.isShaderMaterial&&le.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,W,B,N,de){L===null&&(L=ut);const me=N.isMesh&&N.matrixWorld.determinant()<0,he=R_(E,L,W,B,N);Ee.setMaterial(B,me);let ye=W.index,we=1;if(B.wireframe===!0){if(ye=q.getWireframeAttribute(W),ye===void 0)return;we=2}const Ne=W.drawRange,He=W.attributes.position;let Ae=Ne.start*we,at=(Ne.start+Ne.count)*we;de!==null&&(Ae=Math.max(Ae,de.start*we),at=Math.min(at,(de.start+de.count)*we)),ye!==null?(Ae=Math.max(Ae,0),at=Math.min(at,ye.count)):He!=null&&(Ae=Math.max(Ae,0),at=Math.min(at,He.count));const Tt=at-Ae;if(Tt<0||Tt===1/0)return;ae.setup(N,B,he,W,ye);let Mt,ot=ke;if(ye!==null&&(Mt=J.get(ye),ot=D,ot.setIndex(Mt)),N.isMesh)B.wireframe===!0?(Ee.setLineWidth(B.wireframeLinewidth*Et()),ot.setMode(P.LINES)):ot.setMode(P.TRIANGLES);else if(N.isLine){let Kt=B.linewidth;Kt===void 0&&(Kt=1),Ee.setLineWidth(Kt*Et()),N.isLineSegments?ot.setMode(P.LINES):N.isLineLoop?ot.setMode(P.LINE_LOOP):ot.setMode(P.LINE_STRIP)}else N.isPoints?ot.setMode(P.POINTS):N.isSprite&&ot.setMode(P.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Fl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))ot.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Kt=N._multiDrawStarts,Te=N._multiDrawCounts,vn=N._multiDrawCount,Ze=ye?J.get(ye).bytesPerElement:1,Bn=x.get(B).currentProgram.getUniforms();for(let ei=0;ei<vn;ei++)Bn.setValue(P,"_gl_DrawID",ei),ot.render(Kt[ei]/Ze,Te[ei])}else if(N.isInstancedMesh)ot.renderInstances(Ae,Tt,N.count);else if(W.isInstancedBufferGeometry){const Kt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Te=Math.min(W.instanceCount,Kt);ot.renderInstances(Ae,Tt,Te)}else ot.render(Ae,Tt)};function lh(E,L,W){E.transparent===!0&&E.side===yn&&E.forceSinglePass===!1?(E.side=Ht,E.needsUpdate=!0,eo(E,L,W),E.side=Ui,E.needsUpdate=!0,eo(E,L,W),E.side=yn):eo(E,L,W)}this.compile=function(E,L,W=null){W===null&&(W=E),R=te.get(W),R.init(L),C.push(R),W.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(R.pushLight(N),N.castShadow&&R.pushShadow(N))}),E!==W&&E.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(R.pushLight(N),N.castShadow&&R.pushShadow(N))}),R.setupLights();const B=new Set;return E.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const de=N.material;if(de)if(Array.isArray(de))for(let me=0;me<de.length;me++){const he=de[me];lh(he,W,N),B.add(he)}else lh(de,W,N),B.add(de)}),R=C.pop(),B},this.compileAsync=function(E,L,W=null){const B=this.compile(E,L,W);return new Promise(N=>{function de(){if(B.forEach(function(me){x.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){N(E);return}setTimeout(de,10)}et.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let su=null;function A_(E){su&&su(E)}function uh(){vr.stop()}function ch(){vr.start()}const vr=new g_;vr.setAnimationLoop(A_),typeof self<"u"&&vr.setContext(self),this.setAnimationLoop=function(E){su=E,j.setAnimationLoop(E),E===null?vr.stop():vr.start()},j.addEventListener("sessionstart",uh),j.addEventListener("sessionend",ch),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){Qe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;const W=j.enabled===!0&&j.isPresenting===!0,B=S!==null&&(V===null||W)&&S.begin(T,V);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(j.cameraAutoUpdate===!0&&j.updateCamera(L),L=j.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,L,V),R=te.get(E,C.length),R.init(L),C.push(R),Ot.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Fe.setFromProjectionMatrix(Ot,li,L.reversedDepth),Ue=this.localClippingEnabled,Ce=se.init(this.clippingPlanes,Ue),y=be.get(E,A.length),y.init(),A.push(y),j.enabled===!0&&j.isPresenting===!0){const me=T.xr.getDepthSensingMesh();me!==null&&au(me,L,-1/0,T.sortObjects)}au(E,L,0,T.sortObjects),y.finish(),T.sortObjects===!0&&y.sort(Ke,tt),ze=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ze&&Me.addToRenderList(y,E),this.info.render.frame++,Ce===!0&&se.beginShadows();const N=R.state.shadowsArray;if(xe.render(N,E,L),Ce===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&S.hasRenderPass())===!1){const me=y.opaque,he=y.transmissive;if(R.setupLights(),L.isArrayCamera){const ye=L.cameras;if(he.length>0)for(let we=0,Ne=ye.length;we<Ne;we++){const He=ye[we];dh(me,he,E,He)}ze&&Me.render(E);for(let we=0,Ne=ye.length;we<Ne;we++){const He=ye[we];fh(y,E,He,He.viewport)}}else he.length>0&&dh(me,he,E,L),ze&&Me.render(E),fh(y,E,L)}V!==null&&H===0&&(U.updateMultisampleRenderTarget(V),U.updateRenderTargetMipmap(V)),B&&S.end(T),E.isScene===!0&&E.onAfterRender(T,E,L),ae.resetDefaultState(),Y=-1,k=null,C.pop(),C.length>0?(R=C[C.length-1],Ce===!0&&se.setGlobalState(T.clippingPlanes,R.state.camera)):R=null,A.pop(),A.length>0?y=A[A.length-1]:y=null};function au(E,L,W,B){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)R.pushLight(E),E.castShadow&&R.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Fe.intersectsSprite(E)){B&&nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ot);const me=_e.update(E),he=E.material;he.visible&&y.push(E,me,he,W,nt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Fe.intersectsObject(E))){const me=_e.update(E),he=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),nt.copy(E.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),nt.copy(me.boundingSphere.center)),nt.applyMatrix4(E.matrixWorld).applyMatrix4(Ot)),Array.isArray(he)){const ye=me.groups;for(let we=0,Ne=ye.length;we<Ne;we++){const He=ye[we],Ae=he[He.materialIndex];Ae&&Ae.visible&&y.push(E,me,Ae,W,nt.z,He)}}else he.visible&&y.push(E,me,he,W,nt.z,null)}}const de=E.children;for(let me=0,he=de.length;me<he;me++)au(de[me],L,W,B)}function fh(E,L,W,B){const{opaque:N,transmissive:de,transparent:me}=E;R.setupLightsView(W),Ce===!0&&se.setGlobalState(T.clippingPlanes,W),B&&Ee.viewport(G.copy(B)),N.length>0&&Ja(N,L,W),de.length>0&&Ja(de,L,W),me.length>0&&Ja(me,L,W),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function dh(E,L,W,B){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[B.id]===void 0){const Ae=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[B.id]=new It(1,1,{generateMipmaps:!0,type:Ae?Li:Ut,minFilter:Lr,samples:Math.max(4,ft.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const de=R.state.transmissionRenderTarget[B.id],me=B.viewport||G;de.setSize(me.z*T.transmissionResolutionScale,me.w*T.transmissionResolutionScale);const he=T.getRenderTarget(),ye=T.getActiveCubeFace(),we=T.getActiveMipmapLevel();T.setRenderTarget(de),T.getClearColor(X),Q=T.getClearAlpha(),Q<1&&T.setClearColor(16777215,.5),T.clear(),ze&&Me.render(W);const Ne=T.toneMapping;T.toneMapping=di;const He=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),R.setupLightsView(B),Ce===!0&&se.setGlobalState(T.clippingPlanes,B),Ja(E,W,B),U.updateMultisampleRenderTarget(de),U.updateRenderTargetMipmap(de),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let at=0,Tt=L.length;at<Tt;at++){const Mt=L[at],{object:ot,geometry:Kt,material:Te,group:vn}=Mt;if(Te.side===yn&&ot.layers.test(B.layers)){const Ze=Te.side;Te.side=Ht,Te.needsUpdate=!0,hh(ot,W,B,Kt,Te,vn),Te.side=Ze,Te.needsUpdate=!0,Ae=!0}}Ae===!0&&(U.updateMultisampleRenderTarget(de),U.updateRenderTargetMipmap(de))}T.setRenderTarget(he,ye,we),T.setClearColor(X,Q),He!==void 0&&(B.viewport=He),T.toneMapping=Ne}function Ja(E,L,W){const B=L.isScene===!0?L.overrideMaterial:null;for(let N=0,de=E.length;N<de;N++){const me=E[N],{object:he,geometry:ye,group:we}=me;let Ne=me.material;Ne.allowOverride===!0&&B!==null&&(Ne=B),he.layers.test(W.layers)&&hh(he,L,W,ye,Ne,we)}}function hh(E,L,W,B,N,de){E.onBeforeRender(T,L,W,B,N,de),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(T,L,W,B,E,de),N.transparent===!0&&N.side===yn&&N.forceSinglePass===!1?(N.side=Ht,N.needsUpdate=!0,T.renderBufferDirect(W,L,B,N,E,de),N.side=Ui,N.needsUpdate=!0,T.renderBufferDirect(W,L,B,N,E,de),N.side=yn):T.renderBufferDirect(W,L,B,N,E,de),E.onAfterRender(T,L,W,B,N,de)}function eo(E,L,W){L.isScene!==!0&&(L=ut);const B=x.get(E),N=R.state.lights,de=R.state.shadowsArray,me=N.state.version,he=le.getParameters(E,N.state,de,L,W),ye=le.getProgramCacheKey(he);let we=B.programs;B.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;const Ne=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;B.envMap=K.get(E.envMap||B.environment,Ne),B.envMapRotation=B.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",it),we=new Map,B.programs=we);let He=we.get(ye);if(He!==void 0){if(B.currentProgram===He&&B.lightsStateVersion===me)return mh(E,he),He}else he.uniforms=le.getUniforms(E),E.onBeforeCompile(he,T),He=le.acquireProgram(he,ye),we.set(ye,He),B.uniforms=he.uniforms;const Ae=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=se.uniform),mh(E,he),B.needsLights=b_(E),B.lightsStateVersion=me,B.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=He,B.uniformsList=null,He}function ph(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=ol.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function mh(E,L){const W=x.get(E);W.outputColorSpace=L.outputColorSpace,W.batching=L.batching,W.batchingColor=L.batchingColor,W.instancing=L.instancing,W.instancingColor=L.instancingColor,W.instancingMorph=L.instancingMorph,W.skinning=L.skinning,W.morphTargets=L.morphTargets,W.morphNormals=L.morphNormals,W.morphColors=L.morphColors,W.morphTargetsCount=L.morphTargetsCount,W.numClippingPlanes=L.numClippingPlanes,W.numIntersection=L.numClipIntersection,W.vertexAlphas=L.vertexAlphas,W.vertexTangents=L.vertexTangents,W.toneMapping=L.toneMapping}function R_(E,L,W,B,N){L.isScene!==!0&&(L=ut),U.resetTextureUnits();const de=L.fog,me=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,he=V===null?T.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:hr,ye=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,we=K.get(B.envMap||me,ye),Ne=B.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,He=!!W.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ae=!!W.morphAttributes.position,at=!!W.morphAttributes.normal,Tt=!!W.morphAttributes.color;let Mt=di;B.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Mt=T.toneMapping);const ot=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Kt=ot!==void 0?ot.length:0,Te=x.get(B),vn=R.state.lights;if(Ce===!0&&(Ue===!0||E!==k)){const Bt=E===k&&B.id===Y;se.setState(B,E,Bt)}let Ze=!1;B.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==vn.state.version||Te.outputColorSpace!==he||N.isBatchedMesh&&Te.batching===!1||!N.isBatchedMesh&&Te.batching===!0||N.isBatchedMesh&&Te.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Te.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Te.instancing===!1||!N.isInstancedMesh&&Te.instancing===!0||N.isSkinnedMesh&&Te.skinning===!1||!N.isSkinnedMesh&&Te.skinning===!0||N.isInstancedMesh&&Te.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Te.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Te.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Te.instancingMorph===!1&&N.morphTexture!==null||Te.envMap!==we||B.fog===!0&&Te.fog!==de||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==se.numPlanes||Te.numIntersection!==se.numIntersection)||Te.vertexAlphas!==Ne||Te.vertexTangents!==He||Te.morphTargets!==Ae||Te.morphNormals!==at||Te.morphColors!==Tt||Te.toneMapping!==Mt||Te.morphTargetsCount!==Kt)&&(Ze=!0):(Ze=!0,Te.__version=B.version);let Bn=Te.currentProgram;Ze===!0&&(Bn=eo(B,L,N));let ei=!1,_r=!1,Xr=!1;const ct=Bn.getUniforms(),Wt=Te.uniforms;if(Ee.useProgram(Bn.program)&&(ei=!0,_r=!0,Xr=!0),B.id!==Y&&(Y=B.id,_r=!0),ei||k!==E){Ee.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ct.setValue(P,"projectionMatrix",E.projectionMatrix),ct.setValue(P,"viewMatrix",E.matrixWorldInverse);const zi=ct.map.cameraPosition;zi!==void 0&&zi.setValue(P,Xe.setFromMatrixPosition(E.matrixWorld)),ft.logarithmicDepthBuffer&&ct.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ct.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,_r=!0,Xr=!0)}if(Te.needsLights&&(vn.state.directionalShadowMap.length>0&&ct.setValue(P,"directionalShadowMap",vn.state.directionalShadowMap,U),vn.state.spotShadowMap.length>0&&ct.setValue(P,"spotShadowMap",vn.state.spotShadowMap,U),vn.state.pointShadowMap.length>0&&ct.setValue(P,"pointShadowMap",vn.state.pointShadowMap,U)),N.isSkinnedMesh){ct.setOptional(P,N,"bindMatrix"),ct.setOptional(P,N,"bindMatrixInverse");const Bt=N.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ct.setValue(P,"boneTexture",Bt.boneTexture,U))}N.isBatchedMesh&&(ct.setOptional(P,N,"batchingTexture"),ct.setValue(P,"batchingTexture",N._matricesTexture,U),ct.setOptional(P,N,"batchingIdTexture"),ct.setValue(P,"batchingIdTexture",N._indirectTexture,U),ct.setOptional(P,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(P,"batchingColorTexture",N._colorsTexture,U));const Bi=W.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&pe.update(N,W,Bn),(_r||Te.receiveShadow!==N.receiveShadow)&&(Te.receiveShadow=N.receiveShadow,ct.setValue(P,"receiveShadow",N.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(Wt.envMapIntensity.value=L.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=_w()),_r&&(ct.setValue(P,"toneMappingExposure",T.toneMappingExposure),Te.needsLights&&C_(Wt,Xr),de&&B.fog===!0&&Re.refreshFogUniforms(Wt,de),Re.refreshMaterialUniforms(Wt,B,De,re,R.state.transmissionRenderTarget[E.id]),ol.upload(P,ph(Te),Wt,U)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(ol.upload(P,ph(Te),Wt,U),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ct.setValue(P,"center",N.center),ct.setValue(P,"modelViewMatrix",N.modelViewMatrix),ct.setValue(P,"normalMatrix",N.normalMatrix),ct.setValue(P,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Bt=B.uniformsGroups;for(let zi=0,jr=Bt.length;zi<jr;zi++){const gh=Bt[zi];ve.update(gh,Bn),ve.bind(gh,Bn)}}return Bn}function C_(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function b_(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(E,L,W){const B=x.get(E);B.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),x.get(E.texture).__webglTexture=L,x.get(E.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:W,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,L){const W=x.get(E);W.__webglFramebuffer=L,W.__useDefaultFramebuffer=L===void 0};const P_=P.createFramebuffer();this.setRenderTarget=function(E,L=0,W=0){V=E,b=L,H=W;let B=null,N=!1,de=!1;if(E){const he=x.get(E);if(he.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(P.FRAMEBUFFER,he.__webglFramebuffer),G.copy(E.viewport),I.copy(E.scissor),O=E.scissorTest,Ee.viewport(G),Ee.scissor(I),Ee.setScissorTest(O),Y=-1;return}else if(he.__webglFramebuffer===void 0)U.setupRenderTarget(E);else if(he.__hasExternalTextures)U.rebindTextures(E,x.get(E.texture).__webglTexture,x.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ne=E.depthTexture;if(he.__boundDepthTexture!==Ne){if(Ne!==null&&x.has(Ne)&&(E.width!==Ne.image.width||E.height!==Ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(E)}}const ye=E.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(de=!0);const we=x.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[L])?B=we[L][W]:B=we[L],N=!0):E.samples>0&&U.useMultisampledRTT(E)===!1?B=x.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?B=we[W]:B=we,G.copy(E.viewport),I.copy(E.scissor),O=E.scissorTest}else G.copy($).multiplyScalar(De).floor(),I.copy(ie).multiplyScalar(De).floor(),O=ce;if(W!==0&&(B=P_),Ee.bindFramebuffer(P.FRAMEBUFFER,B)&&Ee.drawBuffers(E,B),Ee.viewport(G),Ee.scissor(I),Ee.setScissorTest(O),N){const he=x.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+L,he.__webglTexture,W)}else if(de){const he=L;for(let ye=0;ye<E.textures.length;ye++){const we=x.get(E.textures[ye]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+ye,we.__webglTexture,W,he)}}else if(E!==null&&W!==0){const he=x.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,he.__webglTexture,W)}Y=-1},this.readRenderTargetPixels=function(E,L,W,B,N,de,me,he=0){if(!(E&&E.isWebGLRenderTarget)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye){Ee.bindFramebuffer(P.FRAMEBUFFER,ye);try{const we=E.textures[he],Ne=we.format,He=we.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+he),!ft.textureFormatReadable(Ne)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(He)){Qe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-B&&W>=0&&W<=E.height-N&&P.readPixels(L,W,B,N,ue.convert(Ne),ue.convert(He),de)}finally{const we=V!==null?x.get(V).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,L,W,B,N,de,me,he=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=x.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&me!==void 0&&(ye=ye[me]),ye)if(L>=0&&L<=E.width-B&&W>=0&&W<=E.height-N){Ee.bindFramebuffer(P.FRAMEBUFFER,ye);const we=E.textures[he],Ne=we.format,He=we.type;if(E.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+he),!ft.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.bufferData(P.PIXEL_PACK_BUFFER,de.byteLength,P.STREAM_READ),P.readPixels(L,W,B,N,ue.convert(Ne),ue.convert(He),0);const at=V!==null?x.get(V).__webglFramebuffer:null;Ee.bindFramebuffer(P.FRAMEBUFFER,at);const Tt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await HS(P,Tt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ae),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,de),P.deleteBuffer(Ae),P.deleteSync(Tt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,L=null,W=0){const B=Math.pow(2,-W),N=Math.floor(E.image.width*B),de=Math.floor(E.image.height*B),me=L!==null?L.x:0,he=L!==null?L.y:0;U.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,me,he,N,de),Ee.unbindTexture()};const D_=P.createFramebuffer(),U_=P.createFramebuffer();this.copyTextureToTexture=function(E,L,W=null,B=null,N=0,de=0){let me,he,ye,we,Ne,He,Ae,at,Tt;const Mt=E.isCompressedTexture?E.mipmaps[de]:E.image;if(W!==null)me=W.max.x-W.min.x,he=W.max.y-W.min.y,ye=W.isBox3?W.max.z-W.min.z:1,we=W.min.x,Ne=W.min.y,He=W.isBox3?W.min.z:0;else{const Wt=Math.pow(2,-N);me=Math.floor(Mt.width*Wt),he=Math.floor(Mt.height*Wt),E.isDataArrayTexture?ye=Mt.depth:E.isData3DTexture?ye=Math.floor(Mt.depth*Wt):ye=1,we=0,Ne=0,He=0}B!==null?(Ae=B.x,at=B.y,Tt=B.z):(Ae=0,at=0,Tt=0);const ot=ue.convert(L.format),Kt=ue.convert(L.type);let Te;L.isData3DTexture?(U.setTexture3D(L,0),Te=P.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(U.setTexture2DArray(L,0),Te=P.TEXTURE_2D_ARRAY):(U.setTexture2D(L,0),Te=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,L.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,L.unpackAlignment);const vn=P.getParameter(P.UNPACK_ROW_LENGTH),Ze=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Bn=P.getParameter(P.UNPACK_SKIP_PIXELS),ei=P.getParameter(P.UNPACK_SKIP_ROWS),_r=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Mt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Mt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,we),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ne),P.pixelStorei(P.UNPACK_SKIP_IMAGES,He);const Xr=E.isDataArrayTexture||E.isData3DTexture,ct=L.isDataArrayTexture||L.isData3DTexture;if(E.isDepthTexture){const Wt=x.get(E),Bi=x.get(L),Bt=x.get(Wt.__renderTarget),zi=x.get(Bi.__renderTarget);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let jr=0;jr<ye;jr++)Xr&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(E).__webglTexture,N,He+jr),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,x.get(L).__webglTexture,de,Tt+jr)),P.blitFramebuffer(we,Ne,me,he,Ae,at,me,he,P.DEPTH_BUFFER_BIT,P.NEAREST);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(N!==0||E.isRenderTargetTexture||x.has(E)){const Wt=x.get(E),Bi=x.get(L);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,D_),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,U_);for(let Bt=0;Bt<ye;Bt++)Xr?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Wt.__webglTexture,N,He+Bt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Wt.__webglTexture,N),ct?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Bi.__webglTexture,de,Tt+Bt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Bi.__webglTexture,de),N!==0?P.blitFramebuffer(we,Ne,me,he,Ae,at,me,he,P.COLOR_BUFFER_BIT,P.NEAREST):ct?P.copyTexSubImage3D(Te,de,Ae,at,Tt+Bt,we,Ne,me,he):P.copyTexSubImage2D(Te,de,Ae,at,we,Ne,me,he);Ee.bindFramebuffer(P.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ct?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Te,de,Ae,at,Tt,me,he,ye,ot,Kt,Mt.data):L.isCompressedArrayTexture?P.compressedTexSubImage3D(Te,de,Ae,at,Tt,me,he,ye,ot,Mt.data):P.texSubImage3D(Te,de,Ae,at,Tt,me,he,ye,ot,Kt,Mt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,de,Ae,at,me,he,ot,Kt,Mt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,de,Ae,at,Mt.width,Mt.height,ot,Mt.data):P.texSubImage2D(P.TEXTURE_2D,de,Ae,at,me,he,ot,Kt,Mt);P.pixelStorei(P.UNPACK_ROW_LENGTH,vn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ze),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Bn),P.pixelStorei(P.UNPACK_SKIP_ROWS,ei),P.pixelStorei(P.UNPACK_SKIP_IMAGES,_r),de===0&&L.generateMipmaps&&P.generateMipmap(Te),Ee.unbindTexture()},this.initRenderTarget=function(E){x.get(E).__webglFramebuffer===void 0&&U.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?U.setTextureCube(E,0):E.isData3DTexture?U.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?U.setTexture2DArray(E,0):U.setTexture2D(E,0),Ee.unbindTexture()},this.resetState=function(){b=0,H=0,V=null,Ee.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}/**
 * postprocessing v6.39.0 build Fri Mar 20 2026
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2026 Raoul van Rüschen
 * @license Zlib
 */var Sw=(()=>{const t=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),n=new On;return n.setAttribute("position",new In(t,3)),n.setAttribute("uv",new In(e,2)),n})(),Jn=class nd{static get fullscreenGeometry(){return Sw}constructor(e="Pass",n=new Jf,i=new ah){this.name=e,this.renderer=null,this.scene=n,this.camera=i,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const n=this.fullscreenMaterial;n!==null&&(n.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let n=this.screen;n!==null?n.material=e:(n=new Qn(nd.fullscreenGeometry,e),n.frustumCulled=!1,this.scene===null&&(this.scene=new Jf),this.scene.add(n),this.screen=n)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,n=qa){}render(e,n,i,r,s){throw new Error("Render method not implemented!")}setSize(e,n){}initialize(e,n,i){}dispose(){for(const e of Object.keys(this)){const n=this[e];(n instanceof It||n instanceof Wr||n instanceof qt||n instanceof nd)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},Mw=class extends Jn{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(t,e,n,i,r){const s=t.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},yw=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,y_="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",E_=class extends Gt{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new Ye(null),depthBuffer:new Ye(null),channelWeights:new Ye(null),opacity:new Ye(1)},blending:on,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:yw,vertexShader:y_}),this.depthFunc=Ul}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(t){const e=t!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){const e=t!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=t}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(t){this.colorSpaceConversion!==t&&(t?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(t){t!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=t):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(t){this.uniforms.inputBuffer.value=t}getOpacity(t){return this.uniforms.opacity.value}setOpacity(t){this.uniforms.opacity.value=t}},Ew=class extends Jn{constructor(t,e=!0){super("CopyPass"),this.fullscreenMaterial=new E_,this.needsSwap=!1,this.renderTarget=t,t===void 0&&(this.renderTarget=new It(1,1,{minFilter:Pt,magFilter:Pt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(t){this.autoResize=t}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(t){this.autoResize=t}render(t,e,n,i,r){this.fullscreenMaterial.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){this.autoResize&&this.renderTarget.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTarget.texture.type=n,n!==Ut?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":t!==null&&t.outputColorSpace===lt&&(this.renderTarget.texture.colorSpace=lt))}},Tm=new qe,T_=class extends Jn{constructor(t=!0,e=!0,n=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=t,this.depth=e,this.stencil=n,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(t,e,n){this.color=t,this.depth=e,this.stencil=n}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(t){this.overrideClearColor=t}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(t){this.overrideClearAlpha=t}render(t,e,n,i,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=t.getClearAlpha(),l=s!==null,u=a>=0;l?(t.getClearColor(Tm),t.setClearColor(s,u?a:o)):u&&t.setClearAlpha(a),t.setRenderTarget(this.renderToScreen?null:e),t.clear(this.color,this.depth,this.stencil),l?t.setClearColor(Tm,o):u&&t.setClearAlpha(o)}},Tw=class extends Jn{constructor(t,e){super("MaskPass",t,e),this.needsSwap=!1,this.clearPass=new T_(!1,!1,!0),this.inverse=!1}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get inverted(){return this.inverse}set inverted(t){this.inverse=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(t){this.inverted=t}render(t,e,n,i,r){const s=t.getContext(),a=t.state.buffers,o=this.scene,l=this.camera,u=this.clearPass,d=this.inverted?0:1,h=1-d;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,d,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?u.render(t,null):(u.render(t,e),u.render(t,n))),this.renderToScreen?(t.setRenderTarget(null),t.render(o,l)):(t.setRenderTarget(e),t.render(o,l),t.setRenderTarget(n),t.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},hc=1/1e3,ww=1e3,Aw=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(t){typeof document<"u"&&document.hidden!==void 0&&(t?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=t)}get delta(){return this._delta*hc}get fixedDelta(){return this._fixedDelta*hc}set fixedDelta(t){this._fixedDelta=t*ww}get elapsed(){return this._elapsed*hc}update(t){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(t!==void 0?t:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(t){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},Rw=class{constructor(t=null,{depthBuffer:e=!0,stencilBuffer:n=!1,multisampling:i=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,n,r,i),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new Ew,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new Aw,this.autoRenderToScreen=!0,this.setRenderer(t)}get multisampling(){return this.inputBuffer.samples}set multisampling(t){const e=this.inputBuffer,n=this.multisampling;n>0&&t>0?(this.inputBuffer.samples=t,this.outputBuffer.samples=t,this.inputBuffer.dispose(),this.outputBuffer.dispose()):n!==t&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,t),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(t){if(this.renderer=t,t!==null){const e=t.getSize(new Ie),n=t.getContext().getContextAttributes().alpha,i=this.inputBuffer.texture.type;i===Ut&&t.outputColorSpace===lt&&(this.inputBuffer.texture.colorSpace=lt,this.outputBuffer.texture.colorSpace=lt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),t.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(t,n,i)}}replaceRenderer(t,e=!0){const n=this.renderer,i=n.domElement.parentNode;return this.setRenderer(t),e&&i!==null&&(i.removeChild(n.domElement),i.appendChild(t.domElement)),n}createDepthTexture(){const t=this.inputBuffer,e=new ks;this.depthTexture=e,t.stencilBuffer?(e.format=er,e.type=Bs):e.type=Yn;const n=e.clone();return n.name="EffectComposer.StableDepth",this.depthRenderTarget=new It(t.width,t.height,{depthBuffer:!0,stencilBuffer:t.stencilBuffer,depthTexture:n}),n}blitDepthBuffer(t){const e=this.renderer,n=this.depthRenderTarget,i=e.properties,r=e.getContext();e.setRenderTarget(n);const s=i.get(t).__webglFramebuffer,a=i.get(n).__webglFramebuffer,o=t.stencilBuffer?r.DEPTH_BUFFER_BIT|r.STENCIL_BUFFER_BIT:r.DEPTH_BUFFER_BIT;r.bindFramebuffer(r.READ_FRAMEBUFFER,s),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,a),r.blitFramebuffer(0,0,t.width,t.height,0,0,n.width,n.height,o,r.NEAREST),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const t of this.passes)t.setDepthTexture(null)}}createBuffer(t,e,n,i){const r=this.renderer,s=r===null?new Ie:r.getDrawingBufferSize(new Ie),a={minFilter:Pt,magFilter:Pt,stencilBuffer:e,depthBuffer:t,type:n},o=new It(s.width,s.height,a);return i>0&&(o.samples=i),n===Ut&&r!==null&&r.outputColorSpace===lt&&(o.texture.colorSpace=lt),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(t){for(const e of this.passes)e.mainScene=t}setMainCamera(t){for(const e of this.passes)e.mainCamera=t}addPass(t,e){const n=this.passes,i=this.renderer,r=i.getDrawingBufferSize(new Ie),s=i.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(t.renderer=i,t.setSize(r.width,r.height),t.initialize(i,s,a),this.autoRenderToScreen&&(n.length>0&&(n[n.length-1].renderToScreen=!1),t.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?n.splice(e,0,t):n.push(t),this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!0),t.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(t of n)t.setDepthTexture(o)}else{const o=this.depthRenderTarget.depthTexture;t.setDepthTexture(o)}}removePass(t){const e=this.passes,n=e.indexOf(t);if(n!==-1&&e.splice(n,1).length>0){if(this.depthTexture!==null){const s=(o,l)=>o||l.needsDepthTexture;if(!e.reduce(s,!1)){const o=this.depthRenderTarget.depthTexture;t.getDepthTexture()===o&&t.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&n===e.length&&(t.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const t=this.passes;this.deleteDepthTexture(),t.length>0&&(this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!1),this.passes=[])}render(t){const e=this.renderer,n=this.copyPass;let i=this.inputBuffer,r=this.outputBuffer,s,a=!1;t===void 0&&(this.timer.update(),t=this.timer.getDelta());for(const o of this.passes)if(o.enabled){if(i.depthTexture=this.depthTexture,r.depthTexture=null,o.render(e,i,r,t,a),o.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(i),o.needsSwap){if(a){n.renderToScreen=o.renderToScreen;const l=e.getContext(),u=e.state.buffers.stencil;u.setFunc(l.NOTEQUAL,1,4294967295),n.render(e,i,r,t,a),u.setFunc(l.EQUAL,1,4294967295)}s=i,i=r,r=s}o instanceof Tw?a=!0:o instanceof Mw&&(a=!1)}}setSize(t,e,n){const i=this.renderer,r=i.getSize(new Ie);(t===void 0||e===void 0)&&(t=r.width,e=r.height),(r.width!==t||r.height!==e)&&i.setSize(t,e,n);const s=i.getDrawingBufferSize(new Ie);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const t of this.passes)t.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),Jn.fullscreenGeometry.dispose()}},cr={NONE:0,DEPTH:1,CONVOLUTION:2},Je={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},Cw=class{constructor(){this.shaderParts=new Map([[Je.FRAGMENT_HEAD,null],[Je.FRAGMENT_MAIN_UV,null],[Je.FRAGMENT_MAIN_IMAGE,null],[Je.VERTEX_HEAD,null],[Je.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=cr.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=hr}},pc=!1,wm=class{constructor(t=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(t),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let n;if(e.material.flatShading)switch(e.material.side){case yn:n=this.materialsFlatShadedDoubleSide;break;case Ht:n=this.materialsFlatShadedBackSide;break;default:n=this.materialsFlatShaded;break}else switch(e.material.side){case yn:n=this.materialsDoubleSide;break;case Ht:n=this.materialsBackSide;break;default:n=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=n[2]:e.isInstancedMesh?e.material=n[1]:e.material=n[0],++this.meshCount}}}cloneMaterial(t){if(!(t instanceof Gt))return t.clone();const e=t.uniforms,n=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,n.set(r,s))}const i=t.clone();for(const r of n)e[r[0]].value=r[1],i.uniforms[r[0]].value=r[1];return i}setMaterial(t){if(this.disposeMaterials(),this.material=t,t!==null){const e=this.materials=[this.cloneMaterial(t),this.cloneMaterial(t),this.cloneMaterial(t)];for(const n of e)n.uniforms=Object.assign({},t.uniforms),n.side=Ui;e[2].skinning=!0,this.materialsBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=Ht,i}),this.materialsDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.side=yn,i}),this.materialsFlatShaded=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i}),this.materialsFlatShadedBackSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=Ht,i}),this.materialsFlatShadedDoubleSide=e.map(n=>{const i=this.cloneMaterial(n);return i.uniforms=Object.assign({},t.uniforms),i.flatShading=!0,i.side=yn,i})}}render(t,e,n){const i=t.shadowMap.enabled;if(t.shadowMap.enabled=!1,pc){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),t.render(e,n);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,t.render(e,n),e.overrideMaterial=r}t.shadowMap.enabled=i}disposeMaterials(){if(this.material!==null){const t=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of t)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return pc}static set workaroundEnabled(t){pc=t}},Yi=-1,ui=class extends Oi{constructor(t,e=Yi,n=Yi,i=1){super(),this.resizable=t,this.baseSize=new Ie(1,1),this.preferredSize=new Ie(e,n),this.target=this.preferredSize,this.s=i,this.effectiveSize=new Ie,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const t=this.baseSize,e=this.preferredSize,n=this.effectiveSize,i=this.scale;e.width!==Yi?n.width=e.width:e.height!==Yi?n.width=Math.round(e.height*(t.width/Math.max(t.height,1))):n.width=Math.round(t.width*i),e.height!==Yi?n.height=e.height:e.width!==Yi?n.height=Math.round(e.width/Math.max(t.width/Math.max(t.height,1),1)):n.height=Math.round(t.height*i)}get width(){return this.effectiveSize.width}set width(t){this.preferredWidth=t}get height(){return this.effectiveSize.height}set height(t){this.preferredHeight=t}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(t){this.s!==t&&(this.s=t,this.preferredSize.setScalar(Yi),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(t){this.scale=t}get baseWidth(){return this.baseSize.width}set baseWidth(t){this.baseSize.width!==t&&(this.baseSize.width=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(t){this.baseWidth=t}get baseHeight(){return this.baseSize.height}set baseHeight(t){this.baseSize.height!==t&&(this.baseSize.height=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(t){this.baseHeight=t}setBaseSize(t,e){(this.baseSize.width!==t||this.baseSize.height!==e)&&(this.baseSize.set(t,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(t){this.preferredSize.width!==t&&(this.preferredSize.width=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(t){this.preferredWidth=t}get preferredHeight(){return this.preferredSize.height}set preferredHeight(t){this.preferredSize.height!==t&&(this.preferredSize.height=t,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(t){this.preferredHeight=t}setPreferredSize(t,e){(this.preferredSize.width!==t||this.preferredSize.height!==e)&&(this.preferredSize.set(t,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(t){this.s=t.scale,this.baseSize.set(t.baseWidth,t.baseHeight),this.preferredSize.set(t.preferredWidth,t.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Yi}},Ge={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},bw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Pw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",Dw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Uw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Lw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Iw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Nw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Fw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ow="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Bw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Hw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Vw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Gw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Ww="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Xw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Yw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",qw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$w="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Kw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Zw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",Qw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",Jw="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",eA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",tA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",nA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",iA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",rA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",sA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",aA="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",oA=new Map([[Ge.ADD,bw],[Ge.ALPHA,Pw],[Ge.AVERAGE,Dw],[Ge.COLOR,Uw],[Ge.COLOR_BURN,Lw],[Ge.COLOR_DODGE,Iw],[Ge.DARKEN,Nw],[Ge.DIFFERENCE,Fw],[Ge.DIVIDE,Ow],[Ge.DST,null],[Ge.EXCLUSION,Bw],[Ge.HARD_LIGHT,zw],[Ge.HARD_MIX,kw],[Ge.HUE,Hw],[Ge.INVERT,Vw],[Ge.INVERT_RGB,Gw],[Ge.LIGHTEN,Ww],[Ge.LINEAR_BURN,Xw],[Ge.LINEAR_DODGE,jw],[Ge.LINEAR_LIGHT,Yw],[Ge.LUMINOSITY,qw],[Ge.MULTIPLY,$w],[Ge.NEGATION,Kw],[Ge.NORMAL,Zw],[Ge.OVERLAY,Qw],[Ge.PIN_LIGHT,Jw],[Ge.REFLECT,eA],[Ge.SATURATION,tA],[Ge.SCREEN,nA],[Ge.SOFT_LIGHT,iA],[Ge.SRC,rA],[Ge.SUBTRACT,sA],[Ge.VIVID_LIGHT,aA]]),lA=class extends Oi{constructor(t,e=1){super(),this._blendFunction=t,this.opacity=new Ye(e)}getOpacity(){return this.opacity.value}setOpacity(t){this.opacity.value=t}get blendFunction(){return this._blendFunction}set blendFunction(t){this._blendFunction=t,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(t){this.blendFunction=t}getShaderCode(){return oA.get(this.blendFunction)}},w_=class extends Oi{constructor(t,e,{attributes:n=cr.NONE,blendFunction:i=Ge.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=t,this.renderer=null,this.attributes=n,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new lA(i),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=hr,this._outputColorSpace=oi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(t){this._inputColorSpace=t,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t,this.setChanged()}set mainScene(t){}set mainCamera(t){}getName(){return this.name}setRenderer(t){this.renderer=t}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(t){this.attributes=t,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(t){this.fragmentShader=t,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(t){this.vertexShader=t,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(t,e=qa){}update(t,e,n){}setSize(t,e){}initialize(t,e,n){}dispose(){for(const t of Object.keys(this)){const e=this[t];(e instanceof It||e instanceof Wr||e instanceof qt||e instanceof Jn)&&this[t].dispose()}}},oh={MEDIUM:2,LARGE:3},uA=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,cA="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",fA=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],dA=class extends Gt{constructor(t=new _t){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new Ye(null),texelSize:new Ye(new _t),scale:new Ye(1),kernel:new Ye(0)},blending:on,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:uA,vertexShader:cA}),this.setTexelSize(t.x,t.y),this.kernelSize=oh.MEDIUM}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.inputBuffer=t}get kernelSequence(){return fA[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(t){this.uniforms.scale.value=t}getScale(){return this.uniforms.scale.value}setScale(t){this.uniforms.scale.value=t}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(t){this.uniforms.kernel.value=t}setKernel(t){this.kernel=t}setTexelSize(t,e){this.uniforms.texelSize.value.set(t,e,t*.5,e*.5)}setSize(t,e){const n=1/t,i=1/e;this.uniforms.texelSize.value.set(n,i,n*.5,i*.5)}},hA=class extends Jn{constructor({kernelSize:t=oh.MEDIUM,resolutionScale:e=.5,width:n=ui.AUTO_SIZE,height:i=ui.AUTO_SIZE,resolutionX:r=n,resolutionY:s=i}={}){super("KawaseBlurPass"),this.renderTargetA=new It(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new ui(this,r,s,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new dA,this._blurMaterial.kernelSize=t,this.copyMaterial=new E_}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(t){this._blurMaterial=t}get dithering(){return this.copyMaterial.dithering}set dithering(t){this.copyMaterial.dithering=t}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(t){this.blurMaterial.kernelSize=t}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get scale(){return this.blurMaterial.scale}set scale(t){this.blurMaterial.scale=t}getScale(){return this.blurMaterial.scale}setScale(t){this.blurMaterial.scale=t}getKernelSize(){return this.kernelSize}setKernelSize(t){this.kernelSize=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}render(t,e,n,i,r){const s=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,u=this.blurMaterial,d=u.kernelSequence;let h=e;this.fullscreenMaterial=u;for(let f=0,p=d.length;f<p;++f){const v=f&1?l:o;u.kernel=d[f],u.inputBuffer=h.texture,t.setRenderTarget(v),t.render(s,a),h=v}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,t.setRenderTarget(this.renderToScreen?null:n),t.render(s,a)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e);const i=n.width,r=n.height;this.renderTargetA.setSize(i,r),this.renderTargetB.setSize(i,r),this.blurMaterial.setSize(t,e)}initialize(t,e,n){n!==void 0&&(this.renderTargetA.texture.type=n,this.renderTargetB.texture.type=n,n!==Ut?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):t!==null&&t.outputColorSpace===lt&&(this.renderTargetA.texture.colorSpace=lt,this.renderTargetB.texture.colorSpace=lt))}static get AUTO_SIZE(){return ui.AUTO_SIZE}},pA=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,mA=class extends Gt{constructor(t=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:Ya.replace(/\D+/g,"")},uniforms:{inputBuffer:new Ye(null),threshold:new Ye(0),smoothing:new Ye(1),range:new Ye(null)},blending:on,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:pA,vertexShader:y_}),this.colorOutput=t,this.luminanceRange=e}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get threshold(){return this.uniforms.threshold.value}set threshold(t){this.smoothing>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=t}getThreshold(){return this.threshold}setThreshold(t){this.threshold=t}get smoothing(){return this.uniforms.smoothing.value}set smoothing(t){this.threshold>0||t>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=t}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(t){this.smoothing=t}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(t){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(t){t?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(t){return this.colorOutput}setColorOutputEnabled(t){this.colorOutput=t}get useRange(){return this.luminanceRange!==null}set useRange(t){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(t){t!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=t,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(t){this.luminanceRange=t}},gA=class extends Jn{constructor({renderTarget:t,luminanceRange:e,colorOutput:n,resolutionScale:i=1,width:r=ui.AUTO_SIZE,height:s=ui.AUTO_SIZE,resolutionX:a=r,resolutionY:o=s}={}){super("LuminancePass"),this.fullscreenMaterial=new mA(n,e),this.needsSwap=!1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new It(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new ui(this,a,o,i);l.addEventListener("change",u=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(t,e,n,i,r){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,t.setRenderTarget(this.renderToScreen?null:this.renderTarget),t.render(this.scene,this.camera)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height)}initialize(t,e,n){n!==void 0&&n!==Ut&&(this.renderTarget.texture.type=n,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},vA=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.05556
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,_A="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",xA=class extends Gt{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new Ye(null),texelSize:new Ye(new Ie)},blending:on,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:vA,vertexShader:_A})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},SA=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,MA="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",yA=class extends Gt{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new Ye(null),supportBuffer:new Ye(null),texelSize:new Ye(new Ie),radius:new Ye(.85)},blending:on,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:SA,vertexShader:MA})}set inputBuffer(t){this.uniforms.inputBuffer.value=t}set supportBuffer(t){this.uniforms.supportBuffer.value=t}get radius(){return this.uniforms.radius.value}set radius(t){this.uniforms.radius.value=t}setSize(t,e){this.uniforms.texelSize.value.set(1/t,1/e)}},EA=class extends Jn{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new It(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new xA,this.upsamplingMaterial=new yA,this.resolution=new Ie}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(t){if(this.levels!==t){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let n=0;n<t;++n){const i=e.clone();i.texture.name="Downsampling.Mipmap"+n,this.downsamplingMipmaps.push(i)}this.upsamplingMipmaps.push(e);for(let n=1,i=t-1;n<i;++n){const r=e.clone();r.texture.name="Upsampling.Mipmap"+n,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(t){this.upsamplingMaterial.radius=t}render(t,e,n,i,r){const{scene:s,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:u,upsamplingMipmaps:d}=this;let h=e;this.fullscreenMaterial=o;for(let f=0,p=u.length;f<p;++f){const v=u[f];o.setSize(h.width,h.height),o.inputBuffer=h.texture,t.setRenderTarget(v),t.render(s,a),h=v}this.fullscreenMaterial=l;for(let f=d.length-1;f>=0;--f){const p=d[f];l.setSize(h.width,h.height),l.inputBuffer=h.texture,l.supportBuffer=u[f].texture,t.setRenderTarget(p),t.render(s,a),h=p}}setSize(t,e){const n=this.resolution;n.set(t,e);let i=n.width,r=n.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)i=Math.round(i*.5),r=Math.round(r*.5),this.downsamplingMipmaps[s].setSize(i,r),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(i,r)}initialize(t,e,n){if(n!==void 0){const i=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of i)r.texture.type=n;if(n!==Ut)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(t!==null&&t.outputColorSpace===lt)for(const r of i)r.texture.colorSpace=lt}}dispose(){super.dispose();for(const t of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))t.dispose()}},TA=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=texture2D(map,uv)*intensity;}`,wA=class extends w_{constructor({blendFunction:t=Ge.SCREEN,luminanceThreshold:e=1,luminanceSmoothing:n=.03,mipmapBlur:i=!0,intensity:r=1,radius:s=.85,levels:a=8,kernelSize:o=oh.LARGE,resolutionScale:l=.5,width:u=ui.AUTO_SIZE,height:d=ui.AUTO_SIZE,resolutionX:h=u,resolutionY:f=d}={}){super("BloomEffect",TA,{blendFunction:t,uniforms:new Map([["map",new Ye(null)],["intensity",new Ye(r)]])}),this.renderTarget=new It(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new hA({kernelSize:o}),this.luminancePass=new gA({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=n,this.mipmapBlurPass=new EA,this.mipmapBlurPass.enabled=i,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=i?this.mipmapBlurPass.texture:this.renderTarget.texture;const p=this.resolution=new ui(this,h,f,l);p.addEventListener("change",v=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(t){this.resolution.preferredWidth=t}get height(){return this.resolution.height}set height(t){this.resolution.preferredHeight=t}get dithering(){return this.blurPass.dithering}set dithering(t){this.blurPass.dithering=t}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(t){this.blurPass.kernelSize=t}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(t){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(t){this.uniforms.get("intensity").value=t}getIntensity(){return this.intensity}setIntensity(t){this.intensity=t}getResolutionScale(){return this.resolution.scale}setResolutionScale(t){this.resolution.scale=t}update(t,e,n){const i=this.renderTarget,r=this.luminancePass;r.enabled?(r.render(t,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,r.renderTarget):this.blurPass.render(t,r.renderTarget,i)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(t,e):this.blurPass.render(t,e,i)}setSize(t,e){const n=this.resolution;n.setBaseSize(t,e),this.renderTarget.setSize(n.width,n.height),this.blurPass.resolution.copy(n),this.luminancePass.setSize(t,e),this.mipmapBlurPass.setSize(t,e)}initialize(t,e,n){this.blurPass.initialize(t,e,n),this.luminancePass.initialize(t,e,n),this.mipmapBlurPass.initialize(t,e,n),n!==void 0&&(this.renderTarget.texture.type=n,t!==null&&t.outputColorSpace===lt&&(this.renderTarget.texture.colorSpace=lt))}},AA=`#ifdef RADIAL_MODULATION
uniform float modulationOffset;
#endif
varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec2 ra=inputColor.ra;vec2 ba=inputColor.ba;
#ifdef RADIAL_MODULATION
const vec2 center=vec2(0.5);float d=distance(uv,center)*2.0;d=max(d-modulationOffset,0.0);if(vActive>0.0&&d>0.0){ra=texture2D(inputBuffer,mix(uv,vUvR,d)).ra;ba=texture2D(inputBuffer,mix(uv,vUvB,d)).ba;}
#else
if(vActive>0.0){ra=texture2D(inputBuffer,vUvR).ra;ba=texture2D(inputBuffer,vUvB).ba;}
#endif
outputColor=vec4(ra.x,inputColor.g,ba.x,max(max(ra.y,ba.y),inputColor.a));}`,RA="uniform vec2 offset;varying float vActive;varying vec2 vUvR;varying vec2 vUvB;void mainSupport(const in vec2 uv){vec2 shift=offset*vec2(1.0,aspect);vActive=(shift.x!=0.0||shift.y!=0.0)?1.0:0.0;vUvR=uv+shift;vUvB=uv-shift;}",CA=class extends w_{constructor({offset:t=new Ie(.001,5e-4),radialModulation:e=!1,modulationOffset:n=.15}={}){super("ChromaticAberrationEffect",AA,{vertexShader:RA,attributes:cr.CONVOLUTION,uniforms:new Map([["offset",new Ye(t)],["modulationOffset",new Ye(n)]])}),this.radialModulation=e}get offset(){return this.uniforms.get("offset").value}set offset(t){this.uniforms.get("offset").value=t}get radialModulation(){return this.defines.has("RADIAL_MODULATION")}set radialModulation(t){t?this.defines.set("RADIAL_MODULATION","1"):this.defines.delete("RADIAL_MODULATION"),this.setChanged()}get modulationOffset(){return this.uniforms.get("modulationOffset").value}set modulationOffset(t){this.uniforms.get("modulationOffset").value=t}getOffset(){return this.offset}setOffset(t){this.offset=t}},bA=class extends Jn{constructor(t,e,n=null){super("RenderPass",t,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new T_,this.overrideMaterialManager=n===null?null:new wm(n),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(t){this.scene=t}set mainCamera(t){this.camera=t}get renderToScreen(){return super.renderToScreen}set renderToScreen(t){super.renderToScreen=t,this.clearPass.renderToScreen=t}get overrideMaterial(){const t=this.overrideMaterialManager;return t!==null?t.material:null}set overrideMaterial(t){const e=this.overrideMaterialManager;t!==null?e!==null?e.setMaterial(t):this.overrideMaterialManager=new wm(t):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(t){this.overrideMaterial=t}get clear(){return this.clearPass.enabled}set clear(t){this.clearPass.enabled=t}getSelection(){return this.selection}setSelection(t){this.selection=t}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(t){this.ignoreBackground=t}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(t){this.skipShadowMapUpdate=t}getClearPass(){return this.clearPass}render(t,e,n,i,r){const s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,u=s.background,d=t.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(t.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(t,e),t.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(t,s,a):t.render(s,a),a.layers.mask=l,s.background=u,t.shadowMap.autoUpdate=d}},PA=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,DA="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",UA=class extends Gt{constructor(t,e,n,i,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:Ya.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new Ye(null),depthBuffer:new Ye(null),resolution:new Ye(new Ie),texelSize:new Ye(new Ie),cameraNear:new Ye(.3),cameraFar:new Ye(1e3),aspect:new Ye(1),time:new Ye(0)},blending:on,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),t&&this.setShaderParts(t),e&&this.setDefines(e),n&&this.setUniforms(n),this.copyCameraSettings(i)}set inputBuffer(t){this.uniforms.inputBuffer.value=t}setInputBuffer(t){this.uniforms.inputBuffer.value=t}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(t){this.uniforms.depthBuffer.value=t}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(t){this.defines.DEPTH_PACKING=t.toFixed(0),this.needsUpdate=!0}setDepthBuffer(t,e=qa){this.depthBuffer=t,this.depthPacking=e}setShaderData(t){this.setShaderParts(t.shaderParts),this.setDefines(t.defines),this.setUniforms(t.uniforms),this.setExtensions(t.extensions)}setShaderParts(t){return this.fragmentShader=PA.replace(Je.FRAGMENT_HEAD,t.get(Je.FRAGMENT_HEAD)||"").replace(Je.FRAGMENT_MAIN_UV,t.get(Je.FRAGMENT_MAIN_UV)||"").replace(Je.FRAGMENT_MAIN_IMAGE,t.get(Je.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=DA.replace(Je.VERTEX_HEAD,t.get(Je.VERTEX_HEAD)||"").replace(Je.VERTEX_MAIN_SUPPORT,t.get(Je.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(t){for(const e of t.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(t){for(const e of t.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(t){this.extensions={};for(const e of t)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(t){this.encodeOutput!==t&&(t?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(t){return this.encodeOutput}setOutputEncodingEnabled(t){this.encodeOutput=t}get time(){return this.uniforms.time.value}set time(t){this.uniforms.time.value=t}setDeltaTime(t){this.uniforms.time.value+=t}adoptCameraSettings(t){this.copyCameraSettings(t)}copyCameraSettings(t){t&&(this.uniforms.cameraNear.value=t.near,this.uniforms.cameraFar.value=t.far,t instanceof Mn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(t,e){const n=this.uniforms;n.resolution.value.set(t,e),n.texelSize.value.set(1/t,1/e),n.aspect.value=t/e}static get Section(){return Je}};function Am(t,e,n){for(const i of e){const r="$1"+t+i.charAt(0).toUpperCase()+i.slice(1),s=new RegExp("([^\\.])(\\b"+i+"\\b)","g");for(const a of n.entries())a[1]!==null&&n.set(a[0],a[1].replace(s,r))}}function LA(t,e,n){let i=e.getFragmentShader(),r=e.getVertexShader();const s=i!==void 0&&/mainImage/.test(i),a=i!==void 0&&/mainUv/.test(i);if(n.attributes|=e.getAttributes(),i===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&n.attributes&cr.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=n.shaderParts;let u=l.get(Je.FRAGMENT_HEAD)||"",d=l.get(Je.FRAGMENT_MAIN_UV)||"",h=l.get(Je.FRAGMENT_MAIN_IMAGE)||"",f=l.get(Je.VERTEX_HEAD)||"",p=l.get(Je.VERTEX_MAIN_SUPPORT)||"";const v=new Set,M=new Set;if(a&&(d+=`	${t}MainUv(UV);
`,n.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const m=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);p+=`	${t}MainSupport(`,p+=m?`vUv);
`:`);
`;for(const _ of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const y of _[1].split(/\s*,\s*/))n.varyings.add(y),v.add(y),M.add(y);for(const _ of r.matchAll(o))M.add(_[1])}for(const m of i.matchAll(o))M.add(m[1]);for(const m of e.defines.keys())M.add(m.replace(/\([\w\s,]*\)/g,""));for(const m of e.uniforms.keys())M.add(m);M.delete("while"),M.delete("for"),M.delete("if"),e.uniforms.forEach((m,_)=>n.uniforms.set(t+_.charAt(0).toUpperCase()+_.slice(1),m)),e.defines.forEach((m,_)=>n.defines.set(t+_.charAt(0).toUpperCase()+_.slice(1),m));const g=new Map([["fragment",i],["vertex",r]]);Am(t,M,n.defines),Am(t,M,g),i=g.get("fragment"),r=g.get("vertex");const c=e.blendMode;if(n.blendModes.set(c.blendFunction,c),s){e.inputColorSpace!==null&&e.inputColorSpace!==n.colorSpace&&(h+=e.inputColorSpace===lt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==oi?n.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(n.colorSpace=e.inputColorSpace);const m=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${t}MainImage(color0, UV, `,n.attributes&cr.DEPTH&&m.test(i)&&(h+="depth, ",n.readDepth=!0),h+=`color1);
	`;const _=t+"BlendOpacity";n.uniforms.set(_,c.opacity),h+=`color0 = blend${c.blendFunction}(color0, color1, ${_});

	`,u+=`uniform float ${_};

`}if(u+=i+`
`,r!==null&&(f+=r+`
`),l.set(Je.FRAGMENT_HEAD,u),l.set(Je.FRAGMENT_MAIN_UV,d),l.set(Je.FRAGMENT_MAIN_IMAGE,h),l.set(Je.VERTEX_HEAD,f),l.set(Je.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const m of e.extensions)n.extensions.add(m)}}var Rm=class extends Jn{constructor(t,...e){super("EffectPass"),this.fullscreenMaterial=new UA(null,null,null,t),this.listener=n=>this.handleEvent(n),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(t){for(const e of this.effects)e.mainScene=t}set mainCamera(t){this.fullscreenMaterial.copyCameraSettings(t);for(const e of this.effects)e.mainCamera=t}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(t){this.fullscreenMaterial.encodeOutput=t}get dithering(){return this.fullscreenMaterial.dithering}set dithering(t){const e=this.fullscreenMaterial;e.dithering=t,e.needsUpdate=!0}setEffects(t){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=t.sort((e,n)=>n.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const t=new Cw;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===Ge.DST)t.attributes|=a.getAttributes()&cr.DEPTH;else{if(t.attributes&a.getAttributes()&cr.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);LA("e"+e++,a,t)}let n=t.shaderParts.get(Je.FRAGMENT_HEAD),i=t.shaderParts.get(Je.FRAGMENT_MAIN_IMAGE),r=t.shaderParts.get(Je.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of t.blendModes.values())n+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;t.attributes&cr.DEPTH?(t.readDepth&&(i=`float depth = readDepth(UV);

	`+i),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,t.colorSpace===lt&&(i+=`color0 = sRGBToLinear(color0);
	`),t.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,t.defines.set("UV","transformedUv")):t.defines.set("UV","vUv"),t.shaderParts.set(Je.FRAGMENT_HEAD,n),t.shaderParts.set(Je.FRAGMENT_MAIN_IMAGE,i),t.shaderParts.set(Je.FRAGMENT_MAIN_UV,r);for(const[a,o]of t.shaderParts)o!==null&&t.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(t)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(t,e=qa){this.fullscreenMaterial.depthBuffer=t,this.fullscreenMaterial.depthPacking=e;for(const n of this.effects)n.setDepthTexture(t,e)}render(t,e,n,i,r){for(const s of this.effects)s.update(t,e,i);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=i*this.timeScale,t.setRenderTarget(this.renderToScreen?null:n),t.render(this.scene,this.camera)}}setSize(t,e){this.fullscreenMaterial.setSize(t,e);for(const n of this.effects)n.setSize(t,e)}initialize(t,e,n){this.renderer=t;for(const i of this.effects)i.initialize(t,e,n);this.updateMaterial(),n!==void 0&&n!==Ut&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const t of this.effects)t.removeEventListener("change",this.listener),t.dispose()}handleEvent(t){switch(t.type){case"change":this.recompile();break}}};const IA=t=>{const e=Ss.useRef(null),[n,i]=Ss.useState(!1);return Ss.useEffect(()=>{const r=e.current;if(!r)return;const s=new Jf,a=new Mn(75,window.innerWidth/window.innerHeight,.1,1e3),o=new xw({canvas:r,antialias:!0,alpha:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2));const l=new Rw(o),u=new bA(s,a);l.addPass(u);const d=new wA({kernelSize:5,luminanceThreshold:.8,luminanceSmoothing:t.bloomIntensity||.8}),h=new Rm(a,d);l.addPass(h);const f=new CA({offset:new Ie(t.chromaticAberration||.001,0),radialModulation:!1,modulationOffset:0}),p=new Rm(a,f);l.addPass(p);const v=50,M=100,g=new wM(v,M,t.linesColor||"#00d4ff",t.linesColor||"#00d4ff");g.material.opacity=t.scanOpacity||.6,g.material.transparent=!0,g.material.depthWrite=!1,s.add(g);const c=new Qa(100,.2),m=new Gt({uniforms:{color:{value:new qe(t.scanColor||"#ff1493")},time:{value:0},glow:{value:t.scanGlow||1},direction:{value:1}},vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform vec3 color;
        uniform float time;
        uniform float glow;
        uniform float direction;
        varying vec2 vUv;
        void main() {
          float scanPos = fract(time * 0.5 * direction + 0.5);
          float dist = abs(vUv.y - scanPos);
          float alpha = 1.0 - smoothstep(0.0, 0.05, dist);
          gl_FragColor = vec4(color, alpha * glow);
        }
      `,transparent:!0,blending:uf}),_=new Qn(c,m);_.position.y=0,_.rotation.x=-Math.PI/2,s.add(_);let y=0,R=0;t.enableGyro&&"DeviceOrientationEvent"in window&&window.addEventListener("deviceorientation",b=>{y=(b.beta||0)*.01,R=(b.gamma||0)*.01}),a.position.z=10;let A=0,C=1;const S=new TM,T=()=>{requestAnimationFrame(T),A+=S.getDelta(),m.uniforms.time.value=A,A%2>1?C=-1:C=1,m.uniforms.direction.value=C,a.rotation.y=R,a.rotation.x=y,g.material.opacity=t.noiseIntensity?.4+Math.sin(A*5)*t.noiseIntensity:.6,l.render()};T(),i(!0);const F=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),o.setSize(window.innerWidth,window.innerHeight),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",F),t.scanOnClick&&window.addEventListener("click",()=>{A=0}),()=>{window.removeEventListener("resize",F),o.dispose()}},[t]),Z.jsxs("div",{id:"gridscan-root",className:"gridscan-bg",children:[Z.jsx("canvas",{ref:e,className:"gridscan-canvas"}),!n&&Z.jsx("div",{className:"gridscan-placeholder"})]})};function NA(){return Z.jsxs("div",{className:"app",children:[Z.jsx(IA,{enableWebcam:!1,showPreview:!1,lineThickness:1,linesColor:"#00ffff",scanColor:"#ff00ff",gridScale:.15,lineStyle:"solid",scanGlow:1,scanOpacity:.6,scanDirection:"pingpong",enablePost:!0,bloomIntensity:.8,chromaticAberration:.001,noiseIntensity:.02,enableGyro:!0,scanOnClick:!0,className:"gridscan-bg"}),Z.jsx("header",{children:Z.jsx("nav",{children:Z.jsxs("ul",{children:[Z.jsx("li",{children:Z.jsx("a",{href:"#home",children:"Home"})}),Z.jsx("li",{children:Z.jsx("a",{href:"#apps",children:"Apps"})}),Z.jsx("li",{children:Z.jsx("a",{href:"#services",children:"Services"})}),Z.jsx("li",{children:Z.jsx("a",{href:"#contact",children:"Contact"})})]})})}),Z.jsxs("section",{id:"home",className:"hero",children:[Z.jsx("h1",{children:"Cyberzilla"}),Z.jsx("p",{children:"The Future of AI & Automation"}),Z.jsx("a",{href:"#apps",className:"cta-btn",children:"Explore Apps"})]}),Z.jsxs("main",{className:"main-overlay",children:[Z.jsxs("section",{id:"apps",className:"apps-section-layout",children:[Z.jsx("h2",{children:"Cyberzilla Apps"}),Z.jsx("p",{className:"apps-subtitle",children:"Cool Apps created by the company."}),Z.jsxs("div",{className:"apps-grid icon-btns",role:"group","aria-label":"Cyberzilla applications",children:[Z.jsxs("a",{href:"https://chariszelqaw.lastapp.dev",target:"_blank",rel:"noopener noreferrer",className:"icon-btn","data-color":"blue",children:[Z.jsx("span",{className:"back"}),Z.jsxs("span",{className:"front",children:[Z.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:Z.jsx("i",{className:"fas fa-gift"})}),Z.jsx("span",{className:"icon-btn__label",children:"Stream Gifts"})]})]}),Z.jsxs("a",{href:"https://charissibikf.lastapp.dev",target:"_blank",rel:"noopener noreferrer",className:"icon-btn","data-color":"indigo",children:[Z.jsx("span",{className:"back"}),Z.jsxs("span",{className:"front",children:[Z.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:Z.jsx("i",{className:"fas fa-home"})}),Z.jsx("span",{className:"icon-btn__label",children:"Dream House Designer"})]})]}),Z.jsxs("a",{href:"https://charisb7palv.lastapp.dev",target:"_blank",rel:"noopener noreferrer",className:"icon-btn","data-color":"green",children:[Z.jsx("span",{className:"back"}),Z.jsxs("span",{className:"front",children:[Z.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:Z.jsx("i",{className:"fas fa-dollar-sign"})}),Z.jsx("span",{className:"icon-btn__label",children:"Money Mentor"})]})]}),Z.jsxs("a",{href:"https://charisj3149a.lastapp.dev",target:"_blank",rel:"noopener noreferrer",className:"icon-btn","data-color":"orange",children:[Z.jsx("span",{className:"back"}),Z.jsxs("span",{className:"front",children:[Z.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:Z.jsx("i",{className:"fas fa-chart-line"})}),Z.jsx("span",{className:"icon-btn__label",children:"Life Progress Tracker"})]})]}),Z.jsxs("a",{href:"https://charisv9xv63.lastapp.dev",target:"_blank",rel:"noopener noreferrer",className:"icon-btn","data-color":"red",children:[Z.jsx("span",{className:"back"}),Z.jsxs("span",{className:"front",children:[Z.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:Z.jsx("i",{className:"fas fa-file-contract"})}),Z.jsx("span",{className:"icon-btn__label",children:"Agreement Tracker"})]})]}),Z.jsxs("a",{href:"https://charisj3149a.lastapp.dev",target:"_blank",rel:"noopener noreferrer",className:"icon-btn","data-color":"purple",children:[Z.jsx("span",{className:"back"}),Z.jsxs("span",{className:"front",children:[Z.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:Z.jsx("i",{className:"fas fa-tasks"})}),Z.jsx("span",{className:"icon-btn__label",children:"Local AI Task Coordinator"})]})]}),Z.jsxs("a",{href:"https://charis2eu88w.lastapp.dev",target:"_blank",rel:"noopener noreferrer",className:"icon-btn","data-color":"cyan",children:[Z.jsx("span",{className:"back"}),Z.jsxs("span",{className:"front",children:[Z.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:Z.jsx("i",{className:"fas fa-search"})}),Z.jsx("span",{className:"icon-btn__label",children:"TraceZero Forensic Engine"})]})]}),Z.jsxs("a",{href:"https://chariszgm6la.lastapp.dev",target:"_blank",rel:"noopener noreferrer",className:"icon-btn","data-color":"blue",children:[Z.jsx("span",{className:"back"}),Z.jsxs("span",{className:"front",children:[Z.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:Z.jsx("i",{className:"fas fa-lock"})}),Z.jsx("span",{className:"icon-btn__label",children:"Evidence Engine"})]})]}),Z.jsxs("a",{href:"https://charisorboof.lastapp.dev",target:"_blank",rel:"noopener noreferrer",className:"icon-btn","data-color":"teal",children:[Z.jsx("span",{className:"back"}),Z.jsxs("span",{className:"front",children:[Z.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:Z.jsx("i",{className:"fas fa-shield-alt"})}),Z.jsx("span",{className:"icon-btn__label",children:"Scope Guardian"})]})]}),Z.jsxs("a",{href:"https://chariszvccqa.lastapp.dev",target:"_blank",rel:"noopener noreferrer",className:"icon-btn","data-color":"magenta",children:[Z.jsx("span",{className:"back"}),Z.jsxs("span",{className:"front",children:[Z.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:Z.jsx("i",{className:"fas fa-vault"})}),Z.jsx("span",{className:"icon-btn__label",children:"Secure Vault Sentinels"})]})]}),Z.jsxs("a",{href:"https://charis6e5zef.lastapp.dev",target:"_blank",rel:"noopener noreferrer",className:"icon-btn","data-color":"pink",children:[Z.jsx("span",{className:"back"}),Z.jsxs("span",{className:"front",children:[Z.jsx("span",{className:"icon-btn__icon","aria-hidden":"true",children:Z.jsx("i",{className:"fas fa-robot"})}),Z.jsx("span",{className:"icon-btn__label",children:"Small ChatGPT"})]})]})]})]}),Z.jsxs("section",{id:"services",children:[Z.jsx("h2",{children:"Services"}),Z.jsx("p",{children:"AI Development and Automation Solutions"}),Z.jsxs("div",{className:"service-card",children:[Z.jsx("h3",{children:"AI Development"}),Z.jsx("p",{children:"Custom AI models, chatbots, computer vision"}),Z.jsx("a",{href:"mailto:contact@cyberzilla.ai",children:"Get Quote"})]}),Z.jsxs("div",{className:"service-card",children:[Z.jsx("h3",{children:"Automation"}),Z.jsx("p",{children:"Robotic Process Automation, workflow optimization"}),Z.jsx("a",{href:"mailto:contact@cyberzilla.ai",children:"Get Quote"})]})]}),Z.jsxs("section",{id:"contact",children:[Z.jsx("h2",{children:"Contact Us"}),Z.jsxs("form",{className:"contact-form",children:[Z.jsx("input",{type:"text",placeholder:"Name",required:!0}),Z.jsx("input",{type:"email",placeholder:"Email",required:!0}),Z.jsx("textarea",{placeholder:"Message",rows:5,required:!0}),Z.jsx("button",{type:"submit",children:"Send Message"})]})]}),Z.jsx("footer",{children:Z.jsx("p",{children:"© 2024 Cyberzilla. All rights reserved."})})]})]})}mc.createRoot(document.getElementById("root")).render(Z.jsx($_.StrictMode,{children:Z.jsx(NA,{})}));
