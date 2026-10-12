function V2(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function U2(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ky={exports:{}},Oc={},Gy={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=Symbol.for("react.element"),F2=Symbol.for("react.portal"),B2=Symbol.for("react.fragment"),z2=Symbol.for("react.strict_mode"),$2=Symbol.for("react.profiler"),q2=Symbol.for("react.provider"),W2=Symbol.for("react.context"),H2=Symbol.for("react.forward_ref"),K2=Symbol.for("react.suspense"),G2=Symbol.for("react.memo"),Q2=Symbol.for("react.lazy"),rg=Symbol.iterator;function Y2(t){return t===null||typeof t!="object"?null:(t=rg&&t[rg]||t["@@iterator"],typeof t=="function"?t:null)}var Qy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Yy=Object.assign,Xy={};function vi(t,e,n){this.props=t,this.context=e,this.refs=Xy,this.updater=n||Qy}vi.prototype.isReactComponent={};vi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jy(){}Jy.prototype=vi.prototype;function sf(t,e,n){this.props=t,this.context=e,this.refs=Xy,this.updater=n||Qy}var of=sf.prototype=new Jy;of.constructor=sf;Yy(of,vi.prototype);of.isPureReactComponent=!0;var sg=Array.isArray,Zy=Object.prototype.hasOwnProperty,af={current:null},ex={key:!0,ref:!0,__self:!0,__source:!0};function tx(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Zy.call(e,r)&&!ex.hasOwnProperty(r)&&(s[r]=e[r]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var u=Array(c),d=0;d<c;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in c=t.defaultProps,c)s[r]===void 0&&(s[r]=c[r]);return{$$typeof:ua,type:t,key:i,ref:o,props:s,_owner:af.current}}function X2(t,e){return{$$typeof:ua,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function lf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ua}function J2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ig=/\/+/g;function Hu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?J2(""+t.key):e.toString(36)}function Il(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ua:case F2:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Hu(o,0):r,sg(s)?(n="",t!=null&&(n=t.replace(ig,"$&/")+"/"),Il(s,e,n,"",function(d){return d})):s!=null&&(lf(s)&&(s=X2(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(ig,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",sg(t))for(var c=0;c<t.length;c++){i=t[c];var u=r+Hu(i,c);o+=Il(i,e,n,u,s)}else if(u=Y2(t),typeof u=="function")for(t=u.call(t),c=0;!(i=t.next()).done;)i=i.value,u=r+Hu(i,c++),o+=Il(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ya(t,e,n){if(t==null)return t;var r=[],s=0;return Il(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Z2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},Nl={transition:null},eb={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:Nl,ReactCurrentOwner:af};function nx(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ya,forEach:function(t,e,n){Ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ya(t,function(){e++}),e},toArray:function(t){return Ya(t,function(e){return e})||[]},only:function(t){if(!lf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=vi;ne.Fragment=B2;ne.Profiler=$2;ne.PureComponent=sf;ne.StrictMode=z2;ne.Suspense=K2;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eb;ne.act=nx;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Yy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=af.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(u in e)Zy.call(e,u)&&!ex.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&c!==void 0?c[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var d=0;d<u;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:ua,type:t.type,key:s,ref:i,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:W2,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:q2,_context:t},t.Consumer=t};ne.createElement=tx;ne.createFactory=function(t){var e=tx.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:H2,render:t}};ne.isValidElement=lf;ne.lazy=function(t){return{$$typeof:Q2,_payload:{_status:-1,_result:t},_init:Z2}};ne.memo=function(t,e){return{$$typeof:G2,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Nl.transition;Nl.transition={};try{t()}finally{Nl.transition=e}};ne.unstable_act=nx;ne.useCallback=function(t,e){return _t.current.useCallback(t,e)};ne.useContext=function(t){return _t.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};ne.useEffect=function(t,e){return _t.current.useEffect(t,e)};ne.useId=function(){return _t.current.useId()};ne.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return _t.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};ne.useRef=function(t){return _t.current.useRef(t)};ne.useState=function(t){return _t.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return _t.current.useTransition()};ne.version="18.3.1";Gy.exports=ne;var L=Gy.exports;const cf=U2(L),tb=V2({__proto__:null,default:cf},[L]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nb=L,rb=Symbol.for("react.element"),sb=Symbol.for("react.fragment"),ib=Object.prototype.hasOwnProperty,ob=nb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ab={key:!0,ref:!0,__self:!0,__source:!0};function rx(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ib.call(e,r)&&!ab.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:rb,type:t,key:i,ref:o,props:s,_owner:ob.current}}Oc.Fragment=sb;Oc.jsx=rx;Oc.jsxs=rx;Ky.exports=Oc;var l=Ky.exports,Ld={},sx={exports:{}},Mt={},ix={exports:{}},ox={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,X){var te=z.length;z.push(X);e:for(;0<te;){var xe=te-1>>>1,he=z[xe];if(0<s(he,X))z[xe]=X,z[te]=he,te=xe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var X=z[0],te=z.pop();if(te!==X){z[0]=te;e:for(var xe=0,he=z.length,q=he>>>1;xe<q;){var ie=2*(xe+1)-1,ze=z[ie],je=ie+1,Ct=z[je];if(0>s(ze,te))je<he&&0>s(Ct,ze)?(z[xe]=Ct,z[je]=te,xe=je):(z[xe]=ze,z[ie]=te,xe=ie);else if(je<he&&0>s(Ct,te))z[xe]=Ct,z[je]=te,xe=je;else break e}}return X}function s(z,X){var te=z.sortIndex-X.sortIndex;return te!==0?te:z.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,c=o.now();t.unstable_now=function(){return o.now()-c}}var u=[],d=[],f=1,g=null,m=3,E=!1,S=!1,R=!1,k=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(z){for(var X=n(d);X!==null;){if(X.callback===null)r(d);else if(X.startTime<=z)r(d),X.sortIndex=X.expirationTime,e(u,X);else break;X=n(d)}}function j(z){if(R=!1,_(z),!S)if(n(u)!==null)S=!0,sn(M);else{var X=n(d);X!==null&&Ht(j,X.startTime-z)}}function M(z,X){S=!1,R&&(R=!1,T(y),y=-1),E=!0;var te=m;try{for(_(X),g=n(u);g!==null&&(!(g.expirationTime>X)||z&&!A());){var xe=g.callback;if(typeof xe=="function"){g.callback=null,m=g.priorityLevel;var he=xe(g.expirationTime<=X);X=t.unstable_now(),typeof he=="function"?g.callback=he:g===n(u)&&r(u),_(X)}else r(u);g=n(u)}if(g!==null)var q=!0;else{var ie=n(d);ie!==null&&Ht(j,ie.startTime-X),q=!1}return q}finally{g=null,m=te,E=!1}}var O=!1,w=null,y=-1,b=5,N=-1;function A(){return!(t.unstable_now()-N<b)}function C(){if(w!==null){var z=t.unstable_now();N=z;var X=!0;try{X=w(!0,z)}finally{X?I():(O=!1,w=null)}}else O=!1}var I;if(typeof x=="function")I=function(){x(C)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Be=de.port2;de.port1.onmessage=C,I=function(){Be.postMessage(null)}}else I=function(){k(C,0)};function sn(z){w=z,O||(O=!0,I())}function Ht(z,X){y=k(function(){z(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){S||E||(S=!0,sn(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(m){case 1:case 2:case 3:var X=3;break;default:X=m}var te=m;m=X;try{return z()}finally{m=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,X){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var te=m;m=z;try{return X()}finally{m=te}},t.unstable_scheduleCallback=function(z,X,te){var xe=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?xe+te:xe):te=xe,z){case 1:var he=-1;break;case 2:he=250;break;case 5:he=1073741823;break;case 4:he=1e4;break;default:he=5e3}return he=te+he,z={id:f++,callback:X,priorityLevel:z,startTime:te,expirationTime:he,sortIndex:-1},te>xe?(z.sortIndex=te,e(d,z),n(u)===null&&z===n(d)&&(R?(T(y),y=-1):R=!0,Ht(j,te-xe))):(z.sortIndex=he,e(u,z),S||E||(S=!0,sn(M))),z},t.unstable_shouldYield=A,t.unstable_wrapCallback=function(z){var X=m;return function(){var te=m;m=X;try{return z.apply(this,arguments)}finally{m=te}}}})(ox);ix.exports=ox;var lb=ix.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cb=L,Lt=lb;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ax=new Set,jo={};function ls(t,e){ei(t,e),ei(t+"Capture",e)}function ei(t,e){for(jo[t]=e,t=0;t<e.length;t++)ax.add(e[t])}var Pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Md=Object.prototype.hasOwnProperty,ub=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,og={},ag={};function db(t){return Md.call(ag,t)?!0:Md.call(og,t)?!1:ub.test(t)?ag[t]=!0:(og[t]=!0,!1)}function hb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fb(t,e,n,r){if(e===null||typeof e>"u"||hb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var tt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){tt[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];tt[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){tt[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){tt[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){tt[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){tt[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){tt[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){tt[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){tt[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var uf=/[\-:]([a-z])/g;function df(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(uf,df);tt[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(uf,df);tt[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(uf,df);tt[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){tt[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});tt.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){tt[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function hf(t,e,n,r){var s=tt.hasOwnProperty(e)?tt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fb(e,n,s,r)&&(n=null),r||s===null?db(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Bn=cb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Xa=Symbol.for("react.element"),ks=Symbol.for("react.portal"),Cs=Symbol.for("react.fragment"),ff=Symbol.for("react.strict_mode"),Vd=Symbol.for("react.profiler"),lx=Symbol.for("react.provider"),cx=Symbol.for("react.context"),pf=Symbol.for("react.forward_ref"),Ud=Symbol.for("react.suspense"),Fd=Symbol.for("react.suspense_list"),mf=Symbol.for("react.memo"),Gn=Symbol.for("react.lazy"),ux=Symbol.for("react.offscreen"),lg=Symbol.iterator;function zi(t){return t===null||typeof t!="object"?null:(t=lg&&t[lg]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,Ku;function eo(t){if(Ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ku=e&&e[1]||""}return`
`+Ku+t}var Gu=!1;function Qu(t,e){if(!t||Gu)return"";Gu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,c=i.length-1;1<=o&&0<=c&&s[o]!==i[c];)c--;for(;1<=o&&0<=c;o--,c--)if(s[o]!==i[c]){if(o!==1||c!==1)do if(o--,c--,0>c||s[o]!==i[c]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=c);break}}}finally{Gu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?eo(t):""}function pb(t){switch(t.tag){case 5:return eo(t.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return t=Qu(t.type,!1),t;case 11:return t=Qu(t.type.render,!1),t;case 1:return t=Qu(t.type,!0),t;default:return""}}function Bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Cs:return"Fragment";case ks:return"Portal";case Vd:return"Profiler";case ff:return"StrictMode";case Ud:return"Suspense";case Fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case cx:return(t.displayName||"Context")+".Consumer";case lx:return(t._context.displayName||"Context")+".Provider";case pf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case mf:return e=t.displayName||null,e!==null?e:Bd(t.type)||"Memo";case Gn:e=t._payload,t=t._init;try{return Bd(t(e))}catch{}}return null}function mb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bd(e);case 8:return e===ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function dx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gb(t){var e=dx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=gb(t))}function hx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=dx(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function zd(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function cg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=vr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function fx(t,e){e=e.checked,e!=null&&hf(t,"checked",e,!1)}function $d(t,e){fx(t,e);var n=vr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?qd(t,e.type,n):e.hasOwnProperty("defaultValue")&&qd(t,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ug(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function qd(t,e,n){(e!=="number"||Kl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var to=Array.isArray;function zs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+vr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function dg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(to(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:vr(n)}}function px(t,e){var n=vr(e.value),r=vr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function hg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function mx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Hd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?mx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,gx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yb=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(t){yb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),po[e]=po[t]})});function yx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||po.hasOwnProperty(t)&&po[t]?(""+e).trim():e+"px"}function xx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=yx(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var xb=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Kd(t,e){if(e){if(xb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Gd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qd=null;function gf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Yd=null,$s=null,qs=null;function fg(t){if(t=fa(t)){if(typeof Yd!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Fc(e),Yd(t.stateNode,t.type,e))}}function vx(t){$s?qs?qs.push(t):qs=[t]:$s=t}function _x(){if($s){var t=$s,e=qs;if(qs=$s=null,fg(t),e)for(t=0;t<e.length;t++)fg(e[t])}}function wx(t,e){return t(e)}function bx(){}var Yu=!1;function Ex(t,e,n){if(Yu)return t(e,n);Yu=!0;try{return wx(t,e,n)}finally{Yu=!1,($s!==null||qs!==null)&&(bx(),_x())}}function Do(t,e){var n=t.stateNode;if(n===null)return null;var r=Fc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Xd=!1;if(Pn)try{var $i={};Object.defineProperty($i,"passive",{get:function(){Xd=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{Xd=!1}function vb(t,e,n,r,s,i,o,c,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var mo=!1,Gl=null,Ql=!1,Jd=null,_b={onError:function(t){mo=!0,Gl=t}};function wb(t,e,n,r,s,i,o,c,u){mo=!1,Gl=null,vb.apply(_b,arguments)}function bb(t,e,n,r,s,i,o,c,u){if(wb.apply(this,arguments),mo){if(mo){var d=Gl;mo=!1,Gl=null}else throw Error(F(198));Ql||(Ql=!0,Jd=d)}}function cs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Tx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function pg(t){if(cs(t)!==t)throw Error(F(188))}function Eb(t){var e=t.alternate;if(!e){if(e=cs(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return pg(s),t;if(i===r)return pg(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,c=s.child;c;){if(c===n){o=!0,n=s,r=i;break}if(c===r){o=!0,r=s,n=i;break}c=c.sibling}if(!o){for(c=i.child;c;){if(c===n){o=!0,n=i,r=s;break}if(c===r){o=!0,r=i,n=s;break}c=c.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Ix(t){return t=Eb(t),t!==null?Nx(t):null}function Nx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nx(t);if(e!==null)return e;t=t.sibling}return null}var Sx=Lt.unstable_scheduleCallback,mg=Lt.unstable_cancelCallback,Tb=Lt.unstable_shouldYield,Ib=Lt.unstable_requestPaint,Oe=Lt.unstable_now,Nb=Lt.unstable_getCurrentPriorityLevel,yf=Lt.unstable_ImmediatePriority,kx=Lt.unstable_UserBlockingPriority,Yl=Lt.unstable_NormalPriority,Sb=Lt.unstable_LowPriority,Cx=Lt.unstable_IdlePriority,Lc=null,un=null;function kb(t){if(un&&typeof un.onCommitFiberRoot=="function")try{un.onCommitFiberRoot(Lc,t,void 0,(t.current.flags&128)===128)}catch{}}var Jt=Math.clz32?Math.clz32:Ab,Cb=Math.log,Rb=Math.LN2;function Ab(t){return t>>>=0,t===0?32:31-(Cb(t)/Rb|0)|0}var el=64,tl=4194304;function no(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var c=o&~s;c!==0?r=no(c):(i&=o,i!==0&&(r=no(i)))}else o=n&~s,o!==0?r=no(o):i!==0&&(r=no(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Jt(e),s=1<<n,r|=t[n],e&=~s;return r}function jb(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pb(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Jt(i),c=1<<o,u=s[o];u===-1?(!(c&n)||c&r)&&(s[o]=jb(c,e)):u<=e&&(t.expiredLanes|=c),i&=~c}}function Zd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rx(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function Xu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Jt(e),t[e]=n}function Db(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Jt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Jt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var fe=0;function Ax(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var jx,vf,Px,Dx,Ox,eh=!1,nl=[],ar=null,lr=null,cr=null,Oo=new Map,Lo=new Map,Yn=[],Ob="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gg(t,e){switch(t){case"focusin":case"focusout":ar=null;break;case"dragenter":case"dragleave":lr=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(e.pointerId)}}function qi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=fa(e),e!==null&&vf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Lb(t,e,n,r,s){switch(e){case"focusin":return ar=qi(ar,t,e,n,r,s),!0;case"dragenter":return lr=qi(lr,t,e,n,r,s),!0;case"mouseover":return cr=qi(cr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Oo.set(i,qi(Oo.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Lo.set(i,qi(Lo.get(i)||null,t,e,n,r,s)),!0}return!1}function Lx(t){var e=Ur(t.target);if(e!==null){var n=cs(e);if(n!==null){if(e=n.tag,e===13){if(e=Tx(n),e!==null){t.blockedOn=e,Ox(t.priority,function(){Px(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Qd=r,n.target.dispatchEvent(r),Qd=null}else return e=fa(n),e!==null&&vf(e),t.blockedOn=n,!1;e.shift()}return!0}function yg(t,e,n){Sl(t)&&n.delete(e)}function Mb(){eh=!1,ar!==null&&Sl(ar)&&(ar=null),lr!==null&&Sl(lr)&&(lr=null),cr!==null&&Sl(cr)&&(cr=null),Oo.forEach(yg),Lo.forEach(yg)}function Wi(t,e){t.blockedOn===e&&(t.blockedOn=null,eh||(eh=!0,Lt.unstable_scheduleCallback(Lt.unstable_NormalPriority,Mb)))}function Mo(t){function e(s){return Wi(s,t)}if(0<nl.length){Wi(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ar!==null&&Wi(ar,t),lr!==null&&Wi(lr,t),cr!==null&&Wi(cr,t),Oo.forEach(e),Lo.forEach(e),n=0;n<Yn.length;n++)r=Yn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Yn.length&&(n=Yn[0],n.blockedOn===null);)Lx(n),n.blockedOn===null&&Yn.shift()}var Ws=Bn.ReactCurrentBatchConfig,Jl=!0;function Vb(t,e,n,r){var s=fe,i=Ws.transition;Ws.transition=null;try{fe=1,_f(t,e,n,r)}finally{fe=s,Ws.transition=i}}function Ub(t,e,n,r){var s=fe,i=Ws.transition;Ws.transition=null;try{fe=4,_f(t,e,n,r)}finally{fe=s,Ws.transition=i}}function _f(t,e,n,r){if(Jl){var s=th(t,e,n,r);if(s===null)ad(t,e,r,Zl,n),gg(t,r);else if(Lb(s,t,e,n,r))r.stopPropagation();else if(gg(t,r),e&4&&-1<Ob.indexOf(t)){for(;s!==null;){var i=fa(s);if(i!==null&&jx(i),i=th(t,e,n,r),i===null&&ad(t,e,r,Zl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else ad(t,e,r,null,n)}}var Zl=null;function th(t,e,n,r){if(Zl=null,t=gf(r),t=Ur(t),t!==null)if(e=cs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Tx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function Mx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Nb()){case yf:return 1;case kx:return 4;case Yl:case Sb:return 16;case Cx:return 536870912;default:return 16}default:return 16}}var rr=null,wf=null,kl=null;function Vx(){if(kl)return kl;var t,e=wf,n=e.length,r,s="value"in rr?rr.value:rr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return kl=s.slice(t,1<r?1-r:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function xg(){return!1}function Vt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?rl:xg,this.isPropagationStopped=xg,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var _i={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bf=Vt(_i),ha=Se({},_i,{view:0,detail:0}),Fb=Vt(ha),Ju,Zu,Hi,Mc=Se({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hi&&(Hi&&t.type==="mousemove"?(Ju=t.screenX-Hi.screenX,Zu=t.screenY-Hi.screenY):Zu=Ju=0,Hi=t),Ju)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),vg=Vt(Mc),Bb=Se({},Mc,{dataTransfer:0}),zb=Vt(Bb),$b=Se({},ha,{relatedTarget:0}),ed=Vt($b),qb=Se({},_i,{animationName:0,elapsedTime:0,pseudoElement:0}),Wb=Vt(qb),Hb=Se({},_i,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kb=Vt(Hb),Gb=Se({},_i,{data:0}),_g=Vt(Gb),Qb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xb[t])?!!e[t]:!1}function Ef(){return Jb}var Zb=Se({},ha,{key:function(t){if(t.key){var e=Qb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eE=Vt(Zb),tE=Se({},Mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wg=Vt(tE),nE=Se({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),rE=Vt(nE),sE=Se({},_i,{propertyName:0,elapsedTime:0,pseudoElement:0}),iE=Vt(sE),oE=Se({},Mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),aE=Vt(oE),lE=[9,13,27,32],Tf=Pn&&"CompositionEvent"in window,go=null;Pn&&"documentMode"in document&&(go=document.documentMode);var cE=Pn&&"TextEvent"in window&&!go,Ux=Pn&&(!Tf||go&&8<go&&11>=go),bg=" ",Eg=!1;function Fx(t,e){switch(t){case"keyup":return lE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Rs=!1;function uE(t,e){switch(t){case"compositionend":return Bx(e);case"keypress":return e.which!==32?null:(Eg=!0,bg);case"textInput":return t=e.data,t===bg&&Eg?null:t;default:return null}}function dE(t,e){if(Rs)return t==="compositionend"||!Tf&&Fx(t,e)?(t=Vx(),kl=wf=rr=null,Rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ux&&e.locale!=="ko"?null:e.data;default:return null}}var hE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hE[t.type]:e==="textarea"}function zx(t,e,n,r){vx(r),e=ec(e,"onChange"),0<e.length&&(n=new bf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var yo=null,Vo=null;function fE(t){Zx(t,0)}function Vc(t){var e=Ps(t);if(hx(e))return t}function pE(t,e){if(t==="change")return e}var $x=!1;if(Pn){var td;if(Pn){var nd="oninput"in document;if(!nd){var Ig=document.createElement("div");Ig.setAttribute("oninput","return;"),nd=typeof Ig.oninput=="function"}td=nd}else td=!1;$x=td&&(!document.documentMode||9<document.documentMode)}function Ng(){yo&&(yo.detachEvent("onpropertychange",qx),Vo=yo=null)}function qx(t){if(t.propertyName==="value"&&Vc(Vo)){var e=[];zx(e,Vo,t,gf(t)),Ex(fE,e)}}function mE(t,e,n){t==="focusin"?(Ng(),yo=e,Vo=n,yo.attachEvent("onpropertychange",qx)):t==="focusout"&&Ng()}function gE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Vc(Vo)}function yE(t,e){if(t==="click")return Vc(e)}function xE(t,e){if(t==="input"||t==="change")return Vc(e)}function vE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:vE;function Uo(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Md.call(e,s)||!en(t[s],e[s]))return!1}return!0}function Sg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kg(t,e){var n=Sg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sg(n)}}function Wx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Wx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hx(){for(var t=window,e=Kl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kl(t.document)}return e}function If(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function _E(t){var e=Hx(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Wx(n.ownerDocument.documentElement,n)){if(r!==null&&If(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=kg(n,i);var o=kg(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wE=Pn&&"documentMode"in document&&11>=document.documentMode,As=null,nh=null,xo=null,rh=!1;function Cg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rh||As==null||As!==Kl(r)||(r=As,"selectionStart"in r&&If(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xo&&Uo(xo,r)||(xo=r,r=ec(nh,"onSelect"),0<r.length&&(e=new bf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=As)))}function sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var js={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},rd={},Kx={};Pn&&(Kx=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function Uc(t){if(rd[t])return rd[t];if(!js[t])return t;var e=js[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Kx)return rd[t]=e[n];return t}var Gx=Uc("animationend"),Qx=Uc("animationiteration"),Yx=Uc("animationstart"),Xx=Uc("transitionend"),Jx=new Map,Rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){Jx.set(t,e),ls(e,[t])}for(var sd=0;sd<Rg.length;sd++){var id=Rg[sd],bE=id.toLowerCase(),EE=id[0].toUpperCase()+id.slice(1);Ir(bE,"on"+EE)}Ir(Gx,"onAnimationEnd");Ir(Qx,"onAnimationIteration");Ir(Yx,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(Xx,"onTransitionEnd");ei("onMouseEnter",["mouseout","mouseover"]);ei("onMouseLeave",["mouseout","mouseover"]);ei("onPointerEnter",["pointerout","pointerover"]);ei("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TE=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function Ag(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bb(r,e,void 0,t),t.currentTarget=null}function Zx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var c=r[o],u=c.instance,d=c.currentTarget;if(c=c.listener,u!==i&&s.isPropagationStopped())break e;Ag(s,c,d),i=u}else for(o=0;o<r.length;o++){if(c=r[o],u=c.instance,d=c.currentTarget,c=c.listener,u!==i&&s.isPropagationStopped())break e;Ag(s,c,d),i=u}}}if(Ql)throw t=Jd,Ql=!1,Jd=null,t}function _e(t,e){var n=e[lh];n===void 0&&(n=e[lh]=new Set);var r=t+"__bubble";n.has(r)||(ev(e,t,2,!1),n.add(r))}function od(t,e,n){var r=0;e&&(r|=4),ev(n,t,r,e)}var il="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[il]){t[il]=!0,ax.forEach(function(n){n!=="selectionchange"&&(TE.has(n)||od(n,!1,t),od(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[il]||(e[il]=!0,od("selectionchange",!1,e))}}function ev(t,e,n,r){switch(Mx(e)){case 1:var s=Vb;break;case 4:s=Ub;break;default:s=_f}n=s.bind(null,e,n,t),s=void 0,!Xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function ad(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;c!==null;){if(o=Ur(c),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}c=c.parentNode}}r=r.return}Ex(function(){var d=i,f=gf(n),g=[];e:{var m=Jx.get(t);if(m!==void 0){var E=bf,S=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":E=eE;break;case"focusin":S="focus",E=ed;break;case"focusout":S="blur",E=ed;break;case"beforeblur":case"afterblur":E=ed;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":E=vg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":E=zb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":E=rE;break;case Gx:case Qx:case Yx:E=Wb;break;case Xx:E=iE;break;case"scroll":E=Fb;break;case"wheel":E=aE;break;case"copy":case"cut":case"paste":E=Kb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":E=wg}var R=(e&4)!==0,k=!R&&t==="scroll",T=R?m!==null?m+"Capture":null:m;R=[];for(var x=d,_;x!==null;){_=x;var j=_.stateNode;if(_.tag===5&&j!==null&&(_=j,T!==null&&(j=Do(x,T),j!=null&&R.push(Bo(x,j,_)))),k)break;x=x.return}0<R.length&&(m=new E(m,S,null,n,f),g.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",E=t==="mouseout"||t==="pointerout",m&&n!==Qd&&(S=n.relatedTarget||n.fromElement)&&(Ur(S)||S[Dn]))break e;if((E||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,E?(S=n.relatedTarget||n.toElement,E=d,S=S?Ur(S):null,S!==null&&(k=cs(S),S!==k||S.tag!==5&&S.tag!==6)&&(S=null)):(E=null,S=d),E!==S)){if(R=vg,j="onMouseLeave",T="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(R=wg,j="onPointerLeave",T="onPointerEnter",x="pointer"),k=E==null?m:Ps(E),_=S==null?m:Ps(S),m=new R(j,x+"leave",E,n,f),m.target=k,m.relatedTarget=_,j=null,Ur(f)===d&&(R=new R(T,x+"enter",S,n,f),R.target=_,R.relatedTarget=k,j=R),k=j,E&&S)t:{for(R=E,T=S,x=0,_=R;_;_=bs(_))x++;for(_=0,j=T;j;j=bs(j))_++;for(;0<x-_;)R=bs(R),x--;for(;0<_-x;)T=bs(T),_--;for(;x--;){if(R===T||T!==null&&R===T.alternate)break t;R=bs(R),T=bs(T)}R=null}else R=null;E!==null&&jg(g,m,E,R,!1),S!==null&&k!==null&&jg(g,k,S,R,!0)}}e:{if(m=d?Ps(d):window,E=m.nodeName&&m.nodeName.toLowerCase(),E==="select"||E==="input"&&m.type==="file")var M=pE;else if(Tg(m))if($x)M=xE;else{M=gE;var O=mE}else(E=m.nodeName)&&E.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(M=yE);if(M&&(M=M(t,d))){zx(g,M,n,f);break e}O&&O(t,m,d),t==="focusout"&&(O=m._wrapperState)&&O.controlled&&m.type==="number"&&qd(m,"number",m.value)}switch(O=d?Ps(d):window,t){case"focusin":(Tg(O)||O.contentEditable==="true")&&(As=O,nh=d,xo=null);break;case"focusout":xo=nh=As=null;break;case"mousedown":rh=!0;break;case"contextmenu":case"mouseup":case"dragend":rh=!1,Cg(g,n,f);break;case"selectionchange":if(wE)break;case"keydown":case"keyup":Cg(g,n,f)}var w;if(Tf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Rs?Fx(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(Ux&&n.locale!=="ko"&&(Rs||y!=="onCompositionStart"?y==="onCompositionEnd"&&Rs&&(w=Vx()):(rr=f,wf="value"in rr?rr.value:rr.textContent,Rs=!0)),O=ec(d,y),0<O.length&&(y=new _g(y,t,null,n,f),g.push({event:y,listeners:O}),w?y.data=w:(w=Bx(n),w!==null&&(y.data=w)))),(w=cE?uE(t,n):dE(t,n))&&(d=ec(d,"onBeforeInput"),0<d.length&&(f=new _g("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:d}),f.data=w))}Zx(g,e)})}function Bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ec(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Do(t,n),i!=null&&r.unshift(Bo(t,i,s)),i=Do(t,e),i!=null&&r.push(Bo(t,i,s))),t=t.return}return r}function bs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function jg(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var c=n,u=c.alternate,d=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&d!==null&&(c=d,s?(u=Do(n,i),u!=null&&o.unshift(Bo(n,u,c))):s||(u=Do(n,i),u!=null&&o.push(Bo(n,u,c)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var IE=/\r\n?/g,NE=/\u0000|\uFFFD/g;function Pg(t){return(typeof t=="string"?t:""+t).replace(IE,`
`).replace(NE,"")}function ol(t,e,n){if(e=Pg(e),Pg(t)!==e&&n)throw Error(F(425))}function tc(){}var sh=null,ih=null;function oh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ah=typeof setTimeout=="function"?setTimeout:void 0,SE=typeof clearTimeout=="function"?clearTimeout:void 0,Dg=typeof Promise=="function"?Promise:void 0,kE=typeof queueMicrotask=="function"?queueMicrotask:typeof Dg<"u"?function(t){return Dg.resolve(null).then(t).catch(CE)}:ah;function CE(t){setTimeout(function(){throw t})}function ld(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Mo(e)}function ur(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Og(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var wi=Math.random().toString(36).slice(2),ln="__reactFiber$"+wi,zo="__reactProps$"+wi,Dn="__reactContainer$"+wi,lh="__reactEvents$"+wi,RE="__reactListeners$"+wi,AE="__reactHandles$"+wi;function Ur(t){var e=t[ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Dn]||n[ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Og(t);t!==null;){if(n=t[ln])return n;t=Og(t)}return e}t=n,n=t.parentNode}return null}function fa(t){return t=t[ln]||t[Dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Fc(t){return t[zo]||null}var ch=[],Ds=-1;function Nr(t){return{current:t}}function be(t){0>Ds||(t.current=ch[Ds],ch[Ds]=null,Ds--)}function ye(t,e){Ds++,ch[Ds]=t.current,t.current=e}var _r={},ht=Nr(_r),Nt=Nr(!1),Gr=_r;function ti(t,e){var n=t.type.contextTypes;if(!n)return _r;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function St(t){return t=t.childContextTypes,t!=null}function nc(){be(Nt),be(ht)}function Lg(t,e,n){if(ht.current!==_r)throw Error(F(168));ye(ht,e),ye(Nt,n)}function tv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,mb(t)||"Unknown",s));return Se({},n,r)}function rc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||_r,Gr=ht.current,ye(ht,t),ye(Nt,Nt.current),!0}function Mg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=tv(t,e,Gr),r.__reactInternalMemoizedMergedChildContext=t,be(Nt),be(ht),ye(ht,t)):be(Nt),ye(Nt,n)}var En=null,Bc=!1,cd=!1;function nv(t){En===null?En=[t]:En.push(t)}function jE(t){Bc=!0,nv(t)}function Sr(){if(!cd&&En!==null){cd=!0;var t=0,e=fe;try{var n=En;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}En=null,Bc=!1}catch(s){throw En!==null&&(En=En.slice(t+1)),Sx(yf,Sr),s}finally{fe=e,cd=!1}}return null}var Os=[],Ls=0,sc=null,ic=0,Ut=[],Ft=0,Qr=null,Tn=1,In="";function Or(t,e){Os[Ls++]=ic,Os[Ls++]=sc,sc=t,ic=e}function rv(t,e,n){Ut[Ft++]=Tn,Ut[Ft++]=In,Ut[Ft++]=Qr,Qr=t;var r=Tn;t=In;var s=32-Jt(r)-1;r&=~(1<<s),n+=1;var i=32-Jt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Tn=1<<32-Jt(e)+s|n<<s|r,In=i+t}else Tn=1<<i|n<<s|r,In=t}function Nf(t){t.return!==null&&(Or(t,1),rv(t,1,0))}function Sf(t){for(;t===sc;)sc=Os[--Ls],Os[Ls]=null,ic=Os[--Ls],Os[Ls]=null;for(;t===Qr;)Qr=Ut[--Ft],Ut[Ft]=null,In=Ut[--Ft],Ut[Ft]=null,Tn=Ut[--Ft],Ut[Ft]=null}var Ot=null,jt=null,Te=!1,Xt=null;function sv(t,e){var n=Bt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,jt=ur(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Qr!==null?{id:Tn,overflow:In}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Bt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,jt=null,!0):!1;default:return!1}}function uh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dh(t){if(Te){var e=jt;if(e){var n=e;if(!Vg(t,e)){if(uh(t))throw Error(F(418));e=ur(n.nextSibling);var r=Ot;e&&Vg(t,e)?sv(r,n):(t.flags=t.flags&-4097|2,Te=!1,Ot=t)}}else{if(uh(t))throw Error(F(418));t.flags=t.flags&-4097|2,Te=!1,Ot=t}}}function Ug(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function al(t){if(t!==Ot)return!1;if(!Te)return Ug(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!oh(t.type,t.memoizedProps)),e&&(e=jt)){if(uh(t))throw iv(),Error(F(418));for(;e;)sv(t,e),e=ur(e.nextSibling)}if(Ug(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){jt=ur(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}jt=null}}else jt=Ot?ur(t.stateNode.nextSibling):null;return!0}function iv(){for(var t=jt;t;)t=ur(t.nextSibling)}function ni(){jt=Ot=null,Te=!1}function kf(t){Xt===null?Xt=[t]:Xt.push(t)}var PE=Bn.ReactCurrentBatchConfig;function Ki(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var c=s.refs;o===null?delete c[i]:c[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Fg(t){var e=t._init;return e(t._payload)}function ov(t){function e(T,x){if(t){var _=T.deletions;_===null?(T.deletions=[x],T.flags|=16):_.push(x)}}function n(T,x){if(!t)return null;for(;x!==null;)e(T,x),x=x.sibling;return null}function r(T,x){for(T=new Map;x!==null;)x.key!==null?T.set(x.key,x):T.set(x.index,x),x=x.sibling;return T}function s(T,x){return T=pr(T,x),T.index=0,T.sibling=null,T}function i(T,x,_){return T.index=_,t?(_=T.alternate,_!==null?(_=_.index,_<x?(T.flags|=2,x):_):(T.flags|=2,x)):(T.flags|=1048576,x)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function c(T,x,_,j){return x===null||x.tag!==6?(x=gd(_,T.mode,j),x.return=T,x):(x=s(x,_),x.return=T,x)}function u(T,x,_,j){var M=_.type;return M===Cs?f(T,x,_.props.children,j,_.key):x!==null&&(x.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gn&&Fg(M)===x.type)?(j=s(x,_.props),j.ref=Ki(T,x,_),j.return=T,j):(j=Ll(_.type,_.key,_.props,null,T.mode,j),j.ref=Ki(T,x,_),j.return=T,j)}function d(T,x,_,j){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=yd(_,T.mode,j),x.return=T,x):(x=s(x,_.children||[]),x.return=T,x)}function f(T,x,_,j,M){return x===null||x.tag!==7?(x=qr(_,T.mode,j,M),x.return=T,x):(x=s(x,_),x.return=T,x)}function g(T,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=gd(""+x,T.mode,_),x.return=T,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Xa:return _=Ll(x.type,x.key,x.props,null,T.mode,_),_.ref=Ki(T,null,x),_.return=T,_;case ks:return x=yd(x,T.mode,_),x.return=T,x;case Gn:var j=x._init;return g(T,j(x._payload),_)}if(to(x)||zi(x))return x=qr(x,T.mode,_,null),x.return=T,x;ll(T,x)}return null}function m(T,x,_,j){var M=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:c(T,x,""+_,j);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Xa:return _.key===M?u(T,x,_,j):null;case ks:return _.key===M?d(T,x,_,j):null;case Gn:return M=_._init,m(T,x,M(_._payload),j)}if(to(_)||zi(_))return M!==null?null:f(T,x,_,j,null);ll(T,_)}return null}function E(T,x,_,j,M){if(typeof j=="string"&&j!==""||typeof j=="number")return T=T.get(_)||null,c(x,T,""+j,M);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Xa:return T=T.get(j.key===null?_:j.key)||null,u(x,T,j,M);case ks:return T=T.get(j.key===null?_:j.key)||null,d(x,T,j,M);case Gn:var O=j._init;return E(T,x,_,O(j._payload),M)}if(to(j)||zi(j))return T=T.get(_)||null,f(x,T,j,M,null);ll(x,j)}return null}function S(T,x,_,j){for(var M=null,O=null,w=x,y=x=0,b=null;w!==null&&y<_.length;y++){w.index>y?(b=w,w=null):b=w.sibling;var N=m(T,w,_[y],j);if(N===null){w===null&&(w=b);break}t&&w&&N.alternate===null&&e(T,w),x=i(N,x,y),O===null?M=N:O.sibling=N,O=N,w=b}if(y===_.length)return n(T,w),Te&&Or(T,y),M;if(w===null){for(;y<_.length;y++)w=g(T,_[y],j),w!==null&&(x=i(w,x,y),O===null?M=w:O.sibling=w,O=w);return Te&&Or(T,y),M}for(w=r(T,w);y<_.length;y++)b=E(w,T,y,_[y],j),b!==null&&(t&&b.alternate!==null&&w.delete(b.key===null?y:b.key),x=i(b,x,y),O===null?M=b:O.sibling=b,O=b);return t&&w.forEach(function(A){return e(T,A)}),Te&&Or(T,y),M}function R(T,x,_,j){var M=zi(_);if(typeof M!="function")throw Error(F(150));if(_=M.call(_),_==null)throw Error(F(151));for(var O=M=null,w=x,y=x=0,b=null,N=_.next();w!==null&&!N.done;y++,N=_.next()){w.index>y?(b=w,w=null):b=w.sibling;var A=m(T,w,N.value,j);if(A===null){w===null&&(w=b);break}t&&w&&A.alternate===null&&e(T,w),x=i(A,x,y),O===null?M=A:O.sibling=A,O=A,w=b}if(N.done)return n(T,w),Te&&Or(T,y),M;if(w===null){for(;!N.done;y++,N=_.next())N=g(T,N.value,j),N!==null&&(x=i(N,x,y),O===null?M=N:O.sibling=N,O=N);return Te&&Or(T,y),M}for(w=r(T,w);!N.done;y++,N=_.next())N=E(w,T,y,N.value,j),N!==null&&(t&&N.alternate!==null&&w.delete(N.key===null?y:N.key),x=i(N,x,y),O===null?M=N:O.sibling=N,O=N);return t&&w.forEach(function(C){return e(T,C)}),Te&&Or(T,y),M}function k(T,x,_,j){if(typeof _=="object"&&_!==null&&_.type===Cs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Xa:e:{for(var M=_.key,O=x;O!==null;){if(O.key===M){if(M=_.type,M===Cs){if(O.tag===7){n(T,O.sibling),x=s(O,_.props.children),x.return=T,T=x;break e}}else if(O.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===Gn&&Fg(M)===O.type){n(T,O.sibling),x=s(O,_.props),x.ref=Ki(T,O,_),x.return=T,T=x;break e}n(T,O);break}else e(T,O);O=O.sibling}_.type===Cs?(x=qr(_.props.children,T.mode,j,_.key),x.return=T,T=x):(j=Ll(_.type,_.key,_.props,null,T.mode,j),j.ref=Ki(T,x,_),j.return=T,T=j)}return o(T);case ks:e:{for(O=_.key;x!==null;){if(x.key===O)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){n(T,x.sibling),x=s(x,_.children||[]),x.return=T,T=x;break e}else{n(T,x);break}else e(T,x);x=x.sibling}x=yd(_,T.mode,j),x.return=T,T=x}return o(T);case Gn:return O=_._init,k(T,x,O(_._payload),j)}if(to(_))return S(T,x,_,j);if(zi(_))return R(T,x,_,j);ll(T,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(n(T,x.sibling),x=s(x,_),x.return=T,T=x):(n(T,x),x=gd(_,T.mode,j),x.return=T,T=x),o(T)):n(T,x)}return k}var ri=ov(!0),av=ov(!1),oc=Nr(null),ac=null,Ms=null,Cf=null;function Rf(){Cf=Ms=ac=null}function Af(t){var e=oc.current;be(oc),t._currentValue=e}function hh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Hs(t,e){ac=t,Cf=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function qt(t){var e=t._currentValue;if(Cf!==t)if(t={context:t,memoizedValue:e,next:null},Ms===null){if(ac===null)throw Error(F(308));Ms=t,ac.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return e}var Fr=null;function jf(t){Fr===null?Fr=[t]:Fr.push(t)}function lv(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,jf(e)):(n.next=s.next,s.next=n),e.interleaved=n,On(t,r)}function On(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function cv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function dr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,On(t,n)}return s=r.interleaved,s===null?(e.next=e,jf(r)):(e.next=s.next,s.next=e),r.interleaved=e,On(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xf(t,n)}}function Bg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lc(t,e,n,r){var s=t.updateQueue;Qn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var u=c,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,c=f.lastBaseUpdate,c!==o&&(c===null?f.firstBaseUpdate=d:c.next=d,f.lastBaseUpdate=u))}if(i!==null){var g=s.baseState;o=0,f=d=u=null,c=i;do{var m=c.lane,E=c.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:E,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var S=t,R=c;switch(m=e,E=n,R.tag){case 1:if(S=R.payload,typeof S=="function"){g=S.call(E,g,m);break e}g=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=R.payload,m=typeof S=="function"?S.call(E,g,m):S,m==null)break e;g=Se({},g,m);break e;case 2:Qn=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[c]:m.push(c))}else E={eventTime:E,lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},f===null?(d=f=E,u=g):f=f.next=E,o|=m;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;m=c,c=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(f===null&&(u=g),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Xr|=o,t.lanes=o,t.memoizedState=g}}function zg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var pa={},dn=Nr(pa),$o=Nr(pa),qo=Nr(pa);function Br(t){if(t===pa)throw Error(F(174));return t}function Df(t,e){switch(ye(qo,e),ye($o,t),ye(dn,pa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Hd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Hd(e,t)}be(dn),ye(dn,e)}function si(){be(dn),be($o),be(qo)}function uv(t){Br(qo.current);var e=Br(dn.current),n=Hd(e,t.type);e!==n&&(ye($o,t),ye(dn,n))}function Of(t){$o.current===t&&(be(dn),be($o))}var Ie=Nr(0);function cc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ud=[];function Lf(){for(var t=0;t<ud.length;t++)ud[t]._workInProgressVersionPrimary=null;ud.length=0}var Al=Bn.ReactCurrentDispatcher,dd=Bn.ReactCurrentBatchConfig,Yr=0,Ne=null,$e=null,Ke=null,uc=!1,vo=!1,Wo=0,DE=0;function ot(){throw Error(F(321))}function Mf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function Vf(t,e,n,r,s,i){if(Yr=i,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?VE:UE,t=n(r,s),vo){i=0;do{if(vo=!1,Wo=0,25<=i)throw Error(F(301));i+=1,Ke=$e=null,e.updateQueue=null,Al.current=FE,t=n(r,s)}while(vo)}if(Al.current=dc,e=$e!==null&&$e.next!==null,Yr=0,Ke=$e=Ne=null,uc=!1,e)throw Error(F(300));return t}function Uf(){var t=Wo!==0;return Wo=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?Ne.memoizedState=Ke=t:Ke=Ke.next=t,Ke}function Wt(){if($e===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=Ke===null?Ne.memoizedState:Ke.next;if(e!==null)Ke=e,$e=t;else{if(t===null)throw Error(F(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},Ke===null?Ne.memoizedState=Ke=t:Ke=Ke.next=t}return Ke}function Ho(t,e){return typeof e=="function"?e(t):e}function hd(t){var e=Wt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=$e,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var c=o=null,u=null,d=i;do{var f=d.lane;if((Yr&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(c=u=g,o=r):u=u.next=g,Ne.lanes|=f,Xr|=f}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=c,en(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ne.lanes|=i,Xr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fd(t){var e=Wt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);en(i,e.memoizedState)||(It=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function dv(){}function hv(t,e){var n=Ne,r=Wt(),s=e(),i=!en(r.memoizedState,s);if(i&&(r.memoizedState=s,It=!0),r=r.queue,Ff(mv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ke!==null&&Ke.memoizedState.tag&1){if(n.flags|=2048,Ko(9,pv.bind(null,n,r,s,e),void 0,null),Ge===null)throw Error(F(349));Yr&30||fv(n,e,s)}return s}function fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function pv(t,e,n,r){e.value=n,e.getSnapshot=r,gv(e)&&yv(t)}function mv(t,e,n){return n(function(){gv(e)&&yv(t)})}function gv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function yv(t){var e=On(t,1);e!==null&&Zt(e,t,1,-1)}function $g(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=ME.bind(null,Ne,t),[e.memoizedState,t]}function Ko(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null,stores:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function xv(){return Wt().memoizedState}function jl(t,e,n,r){var s=an();Ne.flags|=t,s.memoizedState=Ko(1|e,n,void 0,r===void 0?null:r)}function zc(t,e,n,r){var s=Wt();r=r===void 0?null:r;var i=void 0;if($e!==null){var o=$e.memoizedState;if(i=o.destroy,r!==null&&Mf(r,o.deps)){s.memoizedState=Ko(e,n,i,r);return}}Ne.flags|=t,s.memoizedState=Ko(1|e,n,i,r)}function qg(t,e){return jl(8390656,8,t,e)}function Ff(t,e){return zc(2048,8,t,e)}function vv(t,e){return zc(4,2,t,e)}function _v(t,e){return zc(4,4,t,e)}function wv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function bv(t,e,n){return n=n!=null?n.concat([t]):null,zc(4,4,wv.bind(null,e,t),n)}function Bf(){}function Ev(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Tv(t,e){var n=Wt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Mf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Iv(t,e,n){return Yr&21?(en(n,e)||(n=Rx(),Ne.lanes|=n,Xr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function OE(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=dd.transition;dd.transition={};try{t(!1),e()}finally{fe=n,dd.transition=r}}function Nv(){return Wt().memoizedState}function LE(t,e,n){var r=fr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Sv(t))kv(e,n);else if(n=lv(t,e,n,r),n!==null){var s=xt();Zt(n,t,r,s),Cv(n,e,r)}}function ME(t,e,n){var r=fr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Sv(t))kv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,c=i(o,n);if(s.hasEagerState=!0,s.eagerState=c,en(c,o)){var u=e.interleaved;u===null?(s.next=s,jf(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=lv(t,e,s,r),n!==null&&(s=xt(),Zt(n,t,r,s),Cv(n,e,r))}}function Sv(t){var e=t.alternate;return t===Ne||e!==null&&e===Ne}function kv(t,e){vo=uc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Cv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xf(t,n)}}var dc={readContext:qt,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},VE={readContext:qt,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:qt,useEffect:qg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jl(4194308,4,wv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return jl(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=LE.bind(null,Ne,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:$g,useDebugValue:Bf,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=$g(!1),e=t[0];return t=OE.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ne,s=an();if(Te){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ge===null)throw Error(F(349));Yr&30||fv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,qg(mv.bind(null,r,i,t),[t]),r.flags|=2048,Ko(9,pv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=an(),e=Ge.identifierPrefix;if(Te){var n=In,r=Tn;n=(r&~(1<<32-Jt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},UE={readContext:qt,useCallback:Ev,useContext:qt,useEffect:Ff,useImperativeHandle:bv,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:Tv,useReducer:hd,useRef:xv,useState:function(){return hd(Ho)},useDebugValue:Bf,useDeferredValue:function(t){var e=Wt();return Iv(e,$e.memoizedState,t)},useTransition:function(){var t=hd(Ho)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:dv,useSyncExternalStore:hv,useId:Nv,unstable_isNewReconciler:!1},FE={readContext:qt,useCallback:Ev,useContext:qt,useEffect:Ff,useImperativeHandle:bv,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:Tv,useReducer:fd,useRef:xv,useState:function(){return fd(Ho)},useDebugValue:Bf,useDeferredValue:function(t){var e=Wt();return $e===null?e.memoizedState=t:Iv(e,$e.memoizedState,t)},useTransition:function(){var t=fd(Ho)[0],e=Wt().memoizedState;return[t,e]},useMutableSource:dv,useSyncExternalStore:hv,useId:Nv,unstable_isNewReconciler:!1};function Qt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function fh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var $c={isMounted:function(t){return(t=t._reactInternals)?cs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=xt(),s=fr(t),i=Rn(r,s);i.payload=e,n!=null&&(i.callback=n),e=dr(t,i,s),e!==null&&(Zt(e,t,s,r),Rl(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=xt(),s=fr(t),i=Rn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=dr(t,i,s),e!==null&&(Zt(e,t,s,r),Rl(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xt(),r=fr(t),s=Rn(n,r);s.tag=2,e!=null&&(s.callback=e),e=dr(t,s,r),e!==null&&(Zt(e,t,r,n),Rl(e,t,r))}};function Wg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Uo(n,r)||!Uo(s,i):!0}function Rv(t,e,n){var r=!1,s=_r,i=e.contextType;return typeof i=="object"&&i!==null?i=qt(i):(s=St(e)?Gr:ht.current,r=e.contextTypes,i=(r=r!=null)?ti(t,s):_r),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=$c,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Hg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&$c.enqueueReplaceState(e,e.state,null)}function ph(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Pf(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=qt(i):(i=St(e)?Gr:ht.current,s.context=ti(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(fh(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&$c.enqueueReplaceState(s,s.state,null),lc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function ii(t,e){try{var n="",r=e;do n+=pb(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function pd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function mh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var BE=typeof WeakMap=="function"?WeakMap:Map;function Av(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fc||(fc=!0,Ih=r),mh(t,e)},n}function jv(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){mh(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){mh(t,e),typeof r!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new BE;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=tT.bind(null,t,e,n),e.then(t,t))}function Gg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,dr(n,e,1))),n.lanes|=1),t)}var zE=Bn.ReactCurrentOwner,It=!1;function yt(t,e,n,r){e.child=t===null?av(e,null,n,r):ri(e,t.child,n,r)}function Yg(t,e,n,r,s){n=n.render;var i=e.ref;return Hs(e,s),r=Vf(t,e,n,r,i,s),n=Uf(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ln(t,e,s)):(Te&&n&&Nf(e),e.flags|=1,yt(t,e,r,s),e.child)}function Xg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Qf(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Pv(t,e,i,r,s)):(t=Ll(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Uo,n(o,r)&&t.ref===e.ref)return Ln(t,e,s)}return e.flags|=1,t=pr(i,r),t.ref=e.ref,t.return=e,e.child=t}function Pv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Uo(i,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,Ln(t,e,s)}return gh(t,e,n,r,s)}function Dv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(Us,At),At|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(Us,At),At|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ye(Us,At),At|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ye(Us,At),At|=r;return yt(t,e,s,n),e.child}function Ov(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gh(t,e,n,r,s){var i=St(n)?Gr:ht.current;return i=ti(e,i),Hs(e,s),n=Vf(t,e,n,r,i,s),r=Uf(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ln(t,e,s)):(Te&&r&&Nf(e),e.flags|=1,yt(t,e,n,s),e.child)}function Jg(t,e,n,r,s){if(St(n)){var i=!0;rc(e)}else i=!1;if(Hs(e,s),e.stateNode===null)Pl(t,e),Rv(e,n,r),ph(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,c=e.memoizedProps;o.props=c;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=qt(d):(d=St(n)?Gr:ht.current,d=ti(e,d));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||u!==d)&&Hg(e,o,r,d),Qn=!1;var m=e.memoizedState;o.state=m,lc(e,r,o,s),u=e.memoizedState,c!==r||m!==u||Nt.current||Qn?(typeof f=="function"&&(fh(e,n,f,r),u=e.memoizedState),(c=Qn||Wg(e,n,c,r,m,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=c):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,cv(t,e),c=e.memoizedProps,d=e.type===e.elementType?c:Qt(e.type,c),o.props=d,g=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=qt(u):(u=St(n)?Gr:ht.current,u=ti(e,u));var E=n.getDerivedStateFromProps;(f=typeof E=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==g||m!==u)&&Hg(e,o,r,u),Qn=!1,m=e.memoizedState,o.state=m,lc(e,r,o,s);var S=e.memoizedState;c!==g||m!==S||Nt.current||Qn?(typeof E=="function"&&(fh(e,n,E,r),S=e.memoizedState),(d=Qn||Wg(e,n,d,r,m,S,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,S,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,S,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),o.props=r,o.state=S,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return yh(t,e,n,r,i,s)}function yh(t,e,n,r,s,i){Ov(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Mg(e,n,!1),Ln(t,e,i);r=e.stateNode,zE.current=e;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ri(e,t.child,null,i),e.child=ri(e,null,c,i)):yt(t,e,c,i),e.memoizedState=r.state,s&&Mg(e,n,!0),e.child}function Lv(t){var e=t.stateNode;e.pendingContext?Lg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Lg(t,e.context,!1),Df(t,e.containerInfo)}function Zg(t,e,n,r,s){return ni(),kf(s),e.flags|=256,yt(t,e,n,r),e.child}var xh={dehydrated:null,treeContext:null,retryLane:0};function vh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Mv(t,e,n){var r=e.pendingProps,s=Ie.current,i=!1,o=(e.flags&128)!==0,c;if((c=o)||(c=t!==null&&t.memoizedState===null?!1:(s&2)!==0),c?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ye(Ie,s&1),t===null)return dh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Hc(o,r,0,null),t=qr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=vh(n),e.memoizedState=xh,t):zf(e,o));if(s=t.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return $E(t,e,o,r,c,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,c=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=pr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),c!==null?i=pr(c,i):(i=qr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?vh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=xh,r}return i=t.child,t=i.sibling,r=pr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zf(t,e){return e=Hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cl(t,e,n,r){return r!==null&&kf(r),ri(e,t.child,null,n),t=zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $E(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=pd(Error(F(422))),cl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Hc({mode:"visible",children:r.children},s,0,null),i=qr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&ri(e,t.child,null,o),e.child.memoizedState=vh(o),e.memoizedState=xh,i);if(!(e.mode&1))return cl(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var c=r.dgst;return r=c,i=Error(F(419)),r=pd(i,r,void 0),cl(t,e,o,r)}if(c=(o&t.childLanes)!==0,It||c){if(r=Ge,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,On(t,s),Zt(r,t,s,-1))}return Gf(),r=pd(Error(F(421))),cl(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=nT.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,jt=ur(s.nextSibling),Ot=e,Te=!0,Xt=null,t!==null&&(Ut[Ft++]=Tn,Ut[Ft++]=In,Ut[Ft++]=Qr,Tn=t.id,In=t.overflow,Qr=e),e=zf(e,r.children),e.flags|=4096,e)}function e0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),hh(t.return,e,n)}function md(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Vv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(yt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e0(t,n,e);else if(t.tag===19)e0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&cc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),md(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&cc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}md(e,!0,n,null,i);break;case"together":md(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ln(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Xr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=pr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=pr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function qE(t,e,n){switch(e.tag){case 3:Lv(e),ni();break;case 5:uv(e);break;case 1:St(e.type)&&rc(e);break;case 4:Df(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ye(oc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?Mv(t,e,n):(ye(Ie,Ie.current&1),t=Ln(t,e,n),t!==null?t.sibling:null);ye(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Vv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,Dv(t,e,n)}return Ln(t,e,n)}var Uv,_h,Fv,Bv;Uv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_h=function(){};Fv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Br(dn.current);var i=null;switch(n){case"input":s=zd(t,s),r=zd(t,r),i=[];break;case"select":s=Se({},s,{value:void 0}),r=Se({},r,{value:void 0}),i=[];break;case"textarea":s=Wd(t,s),r=Wd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tc)}Kd(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var c=s[d];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(jo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(c=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==c&&(u!=null||c!=null))if(d==="style")if(c){for(o in c)!c.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&c[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(jo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&_e("scroll",t),i||c===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};Bv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Gi(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function WE(t,e,n){var r=e.pendingProps;switch(Sf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return St(e.type)&&nc(),at(e),null;case 3:return r=e.stateNode,si(),be(Nt),be(ht),Lf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xt!==null&&(kh(Xt),Xt=null))),_h(t,e),at(e),null;case 5:Of(e);var s=Br(qo.current);if(n=e.type,t!==null&&e.stateNode!=null)Fv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return at(e),null}if(t=Br(dn.current),al(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[ln]=e,r[zo]=i,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(s=0;s<ro.length;s++)_e(ro[s],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":cg(r,i),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_e("invalid",r);break;case"textarea":dg(r,i),_e("invalid",r)}Kd(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="children"?typeof c=="string"?r.textContent!==c&&(i.suppressHydrationWarning!==!0&&ol(r.textContent,c,t),s=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(i.suppressHydrationWarning!==!0&&ol(r.textContent,c,t),s=["children",""+c]):jo.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":Ja(r),ug(r,i,!0);break;case"textarea":Ja(r),hg(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=tc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=mx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[ln]=e,t[zo]=r,Uv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Gd(n,r),n){case"dialog":_e("cancel",t),_e("close",t),s=r;break;case"iframe":case"object":case"embed":_e("load",t),s=r;break;case"video":case"audio":for(s=0;s<ro.length;s++)_e(ro[s],t);s=r;break;case"source":_e("error",t),s=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),s=r;break;case"details":_e("toggle",t),s=r;break;case"input":cg(t,r),s=zd(t,r),_e("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Se({},r,{value:void 0}),_e("invalid",t);break;case"textarea":dg(t,r),s=Wd(t,r),_e("invalid",t);break;default:s=r}Kd(n,s),c=s;for(i in c)if(c.hasOwnProperty(i)){var u=c[i];i==="style"?xx(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&gx(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Po(t,u):typeof u=="number"&&Po(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(jo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&_e("scroll",t):u!=null&&hf(t,i,u,o))}switch(n){case"input":Ja(t),ug(t,r,!1);break;case"textarea":Ja(t),hg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+vr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?zs(t,!!r.multiple,i,!1):r.defaultValue!=null&&zs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=tc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)Bv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=Br(qo.current),Br(dn.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[ln]=e,(i=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ln]=e,e.stateNode=r}return at(e),null;case 13:if(be(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&jt!==null&&e.mode&1&&!(e.flags&128))iv(),ni(),e.flags|=98560,i=!1;else if(i=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[ln]=e}else ni(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),i=!1}else Xt!==null&&(kh(Xt),Xt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?qe===0&&(qe=3):Gf())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return si(),_h(t,e),t===null&&Fo(e.stateNode.containerInfo),at(e),null;case 10:return Af(e.type._context),at(e),null;case 17:return St(e.type)&&nc(),at(e),null;case 19:if(be(Ie),i=e.memoizedState,i===null)return at(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Gi(i,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=cc(t),o!==null){for(e.flags|=128,Gi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(Ie,Ie.current&1|2),e.child}t=t.sibling}i.tail!==null&&Oe()>oi&&(e.flags|=128,r=!0,Gi(i,!1),e.lanes=4194304)}else{if(!r)if(t=cc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Te)return at(e),null}else 2*Oe()-i.renderingStartTime>oi&&n!==1073741824&&(e.flags|=128,r=!0,Gi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Oe(),e.sibling=null,n=Ie.current,ye(Ie,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return Kf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?At&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function HE(t,e){switch(Sf(e),e.tag){case 1:return St(e.type)&&nc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return si(),be(Nt),be(ht),Lf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Of(e),null;case 13:if(be(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));ni()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return be(Ie),null;case 4:return si(),null;case 10:return Af(e.type._context),null;case 22:case 23:return Kf(),null;case 24:return null;default:return null}}var ul=!1,ut=!1,KE=typeof WeakSet=="function"?WeakSet:Set,H=null;function Vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ae(t,e,r)}else n.current=null}function wh(t,e,n){try{n()}catch(r){Ae(t,e,r)}}var t0=!1;function GE(t,e){if(sh=Jl,t=Hx(),If(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,c=-1,u=-1,d=0,f=0,g=t,m=null;t:for(;;){for(var E;g!==n||s!==0&&g.nodeType!==3||(c=o+s),g!==i||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(E=g.firstChild)!==null;)m=g,g=E;for(;;){if(g===t)break t;if(m===n&&++d===s&&(c=o),m===i&&++f===r&&(u=o),(E=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=E}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ih={focusedElem:t,selectionRange:n},Jl=!1,H=e;H!==null;)if(e=H,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,H=t;else for(;H!==null;){e=H;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var R=S.memoizedProps,k=S.memoizedState,T=e.stateNode,x=T.getSnapshotBeforeUpdate(e.elementType===e.type?R:Qt(e.type,R),k);T.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(j){Ae(e,e.return,j)}if(t=e.sibling,t!==null){t.return=e.return,H=t;break}H=e.return}return S=t0,t0=!1,S}function _o(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&wh(e,n,i)}s=s.next}while(s!==r)}}function qc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function bh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function zv(t){var e=t.alternate;e!==null&&(t.alternate=null,zv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ln],delete e[zo],delete e[lh],delete e[RE],delete e[AE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $v(t){return t.tag===5||t.tag===3||t.tag===4}function n0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$v(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tc));else if(r!==4&&(t=t.child,t!==null))for(Eh(t,e,n),t=t.sibling;t!==null;)Eh(t,e,n),t=t.sibling}function Th(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Th(t,e,n),t=t.sibling;t!==null;)Th(t,e,n),t=t.sibling}var Ye=null,Yt=!1;function Wn(t,e,n){for(n=n.child;n!==null;)qv(t,e,n),n=n.sibling}function qv(t,e,n){if(un&&typeof un.onCommitFiberUnmount=="function")try{un.onCommitFiberUnmount(Lc,n)}catch{}switch(n.tag){case 5:ut||Vs(n,e);case 6:var r=Ye,s=Yt;Ye=null,Wn(t,e,n),Ye=r,Yt=s,Ye!==null&&(Yt?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Yt?(t=Ye,n=n.stateNode,t.nodeType===8?ld(t.parentNode,n):t.nodeType===1&&ld(t,n),Mo(t)):ld(Ye,n.stateNode));break;case 4:r=Ye,s=Yt,Ye=n.stateNode.containerInfo,Yt=!0,Wn(t,e,n),Ye=r,Yt=s;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&wh(n,e,o),s=s.next}while(s!==r)}Wn(t,e,n);break;case 1:if(!ut&&(Vs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Ae(n,e,c)}Wn(t,e,n);break;case 21:Wn(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,Wn(t,e,n),ut=r):Wn(t,e,n);break;default:Wn(t,e,n)}}function r0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KE),e.forEach(function(r){var s=rT.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,c=o;e:for(;c!==null;){switch(c.tag){case 5:Ye=c.stateNode,Yt=!1;break e;case 3:Ye=c.stateNode.containerInfo,Yt=!0;break e;case 4:Ye=c.stateNode.containerInfo,Yt=!0;break e}c=c.return}if(Ye===null)throw Error(F(160));qv(i,o,s),Ye=null,Yt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){Ae(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Wv(e,t),e=e.sibling}function Wv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),on(t),r&4){try{_o(3,t,t.return),qc(3,t)}catch(R){Ae(t,t.return,R)}try{_o(5,t,t.return)}catch(R){Ae(t,t.return,R)}}break;case 1:Gt(e,t),on(t),r&512&&n!==null&&Vs(n,n.return);break;case 5:if(Gt(e,t),on(t),r&512&&n!==null&&Vs(n,n.return),t.flags&32){var s=t.stateNode;try{Po(s,"")}catch(R){Ae(t,t.return,R)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,c=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{c==="input"&&i.type==="radio"&&i.name!=null&&fx(s,i),Gd(c,o);var d=Gd(c,i);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?xx(s,g):f==="dangerouslySetInnerHTML"?gx(s,g):f==="children"?Po(s,g):hf(s,f,g,d)}switch(c){case"input":$d(s,i);break;case"textarea":px(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var E=i.value;E!=null?zs(s,!!i.multiple,E,!1):m!==!!i.multiple&&(i.defaultValue!=null?zs(s,!!i.multiple,i.defaultValue,!0):zs(s,!!i.multiple,i.multiple?[]:"",!1))}s[zo]=i}catch(R){Ae(t,t.return,R)}}break;case 6:if(Gt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(R){Ae(t,t.return,R)}}break;case 3:if(Gt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(R){Ae(t,t.return,R)}break;case 4:Gt(e,t),on(t);break;case 13:Gt(e,t),on(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Wf=Oe())),r&4&&r0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(d=ut)||f,Gt(e,t),ut=d):Gt(e,t),on(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(H=t,f=t.child;f!==null;){for(g=H=f;H!==null;){switch(m=H,E=m.child,m.tag){case 0:case 11:case 14:case 15:_o(4,m,m.return);break;case 1:Vs(m,m.return);var S=m.stateNode;if(typeof S.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(R){Ae(r,n,R)}}break;case 5:Vs(m,m.return);break;case 22:if(m.memoizedState!==null){i0(g);continue}}E!==null?(E.return=m,H=E):i0(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{s=g.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(c=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=yx("display",o))}catch(R){Ae(t,t.return,R)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(R){Ae(t,t.return,R)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Gt(e,t),on(t),r&4&&r0(t);break;case 21:break;default:Gt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($v(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Po(s,""),r.flags&=-33);var i=n0(t);Th(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,c=n0(t);Eh(t,c,o);break;default:throw Error(F(161))}}catch(u){Ae(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QE(t,e,n){H=t,Hv(t)}function Hv(t,e,n){for(var r=(t.mode&1)!==0;H!==null;){var s=H,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||ul;if(!o){var c=s.alternate,u=c!==null&&c.memoizedState!==null||ut;c=ul;var d=ut;if(ul=o,(ut=u)&&!d)for(H=s;H!==null;)o=H,u=o.child,o.tag===22&&o.memoizedState!==null?o0(s):u!==null?(u.return=o,H=u):o0(s);for(;i!==null;)H=i,Hv(i),i=i.sibling;H=s,ul=c,ut=d}s0(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,H=i):s0(t)}}function s0(t){for(;H!==null;){var e=H;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||qc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Qt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&zg(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zg(e,o,n)}break;case 5:var c=e.stateNode;if(n===null&&e.flags&4){n=c;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Mo(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ut||e.flags&512&&bh(e)}catch(m){Ae(e,e.return,m)}}if(e===t){H=null;break}if(n=e.sibling,n!==null){n.return=e.return,H=n;break}H=e.return}}function i0(t){for(;H!==null;){var e=H;if(e===t){H=null;break}var n=e.sibling;if(n!==null){n.return=e.return,H=n;break}H=e.return}}function o0(t){for(;H!==null;){var e=H;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{qc(4,e)}catch(u){Ae(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Ae(e,s,u)}}var i=e.return;try{bh(e)}catch(u){Ae(e,i,u)}break;case 5:var o=e.return;try{bh(e)}catch(u){Ae(e,o,u)}}}catch(u){Ae(e,e.return,u)}if(e===t){H=null;break}var c=e.sibling;if(c!==null){c.return=e.return,H=c;break}H=e.return}}var YE=Math.ceil,hc=Bn.ReactCurrentDispatcher,$f=Bn.ReactCurrentOwner,zt=Bn.ReactCurrentBatchConfig,le=0,Ge=null,Ve=null,Ze=0,At=0,Us=Nr(0),qe=0,Go=null,Xr=0,Wc=0,qf=0,wo=null,Et=null,Wf=0,oi=1/0,bn=null,fc=!1,Ih=null,hr=null,dl=!1,sr=null,pc=0,bo=0,Nh=null,Dl=-1,Ol=0;function xt(){return le&6?Oe():Dl!==-1?Dl:Dl=Oe()}function fr(t){return t.mode&1?le&2&&Ze!==0?Ze&-Ze:PE.transition!==null?(Ol===0&&(Ol=Rx()),Ol):(t=fe,t!==0||(t=window.event,t=t===void 0?16:Mx(t.type)),t):1}function Zt(t,e,n,r){if(50<bo)throw bo=0,Nh=null,Error(F(185));da(t,n,r),(!(le&2)||t!==Ge)&&(t===Ge&&(!(le&2)&&(Wc|=n),qe===4&&Xn(t,Ze)),kt(t,r),n===1&&le===0&&!(e.mode&1)&&(oi=Oe()+500,Bc&&Sr()))}function kt(t,e){var n=t.callbackNode;Pb(t,e);var r=Xl(t,t===Ge?Ze:0);if(r===0)n!==null&&mg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&mg(n),e===1)t.tag===0?jE(a0.bind(null,t)):nv(a0.bind(null,t)),kE(function(){!(le&6)&&Sr()}),n=null;else{switch(Ax(r)){case 1:n=yf;break;case 4:n=kx;break;case 16:n=Yl;break;case 536870912:n=Cx;break;default:n=Yl}n=e_(n,Kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kv(t,e){if(Dl=-1,Ol=0,le&6)throw Error(F(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var r=Xl(t,t===Ge?Ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mc(t,r);else{e=r;var s=le;le|=2;var i=Qv();(Ge!==t||Ze!==e)&&(bn=null,oi=Oe()+500,$r(t,e));do try{ZE();break}catch(c){Gv(t,c)}while(!0);Rf(),hc.current=i,le=s,Ve!==null?e=0:(Ge=null,Ze=0,e=qe)}if(e!==0){if(e===2&&(s=Zd(t),s!==0&&(r=s,e=Sh(t,s))),e===1)throw n=Go,$r(t,0),Xn(t,r),kt(t,Oe()),n;if(e===6)Xn(t,r);else{if(s=t.current.alternate,!(r&30)&&!XE(s)&&(e=mc(t,r),e===2&&(i=Zd(t),i!==0&&(r=i,e=Sh(t,i))),e===1))throw n=Go,$r(t,0),Xn(t,r),kt(t,Oe()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Lr(t,Et,bn);break;case 3:if(Xn(t,r),(r&130023424)===r&&(e=Wf+500-Oe(),10<e)){if(Xl(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){xt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=ah(Lr.bind(null,t,Et,bn),e);break}Lr(t,Et,bn);break;case 4:if(Xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Jt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*YE(r/1960))-r,10<r){t.timeoutHandle=ah(Lr.bind(null,t,Et,bn),r);break}Lr(t,Et,bn);break;case 5:Lr(t,Et,bn);break;default:throw Error(F(329))}}}return kt(t,Oe()),t.callbackNode===n?Kv.bind(null,t):null}function Sh(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&($r(t,e).flags|=256),t=mc(t,e),t!==2&&(e=Et,Et=n,e!==null&&kh(e)),t}function kh(t){Et===null?Et=t:Et.push.apply(Et,t)}function XE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!en(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xn(t,e){for(e&=~qf,e&=~Wc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Jt(e),r=1<<n;t[n]=-1,e&=~r}}function a0(t){if(le&6)throw Error(F(327));Ks();var e=Xl(t,0);if(!(e&1))return kt(t,Oe()),null;var n=mc(t,e);if(t.tag!==0&&n===2){var r=Zd(t);r!==0&&(e=r,n=Sh(t,r))}if(n===1)throw n=Go,$r(t,0),Xn(t,e),kt(t,Oe()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,Et,bn),kt(t,Oe()),null}function Hf(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(oi=Oe()+500,Bc&&Sr())}}function Jr(t){sr!==null&&sr.tag===0&&!(le&6)&&Ks();var e=le;le|=1;var n=zt.transition,r=fe;try{if(zt.transition=null,fe=1,t)return t()}finally{fe=r,zt.transition=n,le=e,!(le&6)&&Sr()}}function Kf(){At=Us.current,be(Us)}function $r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SE(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Sf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nc();break;case 3:si(),be(Nt),be(ht),Lf();break;case 5:Of(r);break;case 4:si();break;case 13:be(Ie);break;case 19:be(Ie);break;case 10:Af(r.type._context);break;case 22:case 23:Kf()}n=n.return}if(Ge=t,Ve=t=pr(t.current,null),Ze=At=e,qe=0,Go=null,qf=Wc=Xr=0,Et=wo=null,Fr!==null){for(e=0;e<Fr.length;e++)if(n=Fr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Fr=null}return t}function Gv(t,e){do{var n=Ve;try{if(Rf(),Al.current=dc,uc){for(var r=Ne.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}uc=!1}if(Yr=0,Ke=$e=Ne=null,vo=!1,Wo=0,$f.current=null,n===null||n.return===null){qe=1,Go=e,Ve=null;break}e:{var i=t,o=n.return,c=n,u=e;if(e=Ze,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=c,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var E=Gg(o);if(E!==null){E.flags&=-257,Qg(E,o,c,i,e),E.mode&1&&Kg(i,d,e),e=E,u=d;var S=e.updateQueue;if(S===null){var R=new Set;R.add(u),e.updateQueue=R}else S.add(u);break e}else{if(!(e&1)){Kg(i,d,e),Gf();break e}u=Error(F(426))}}else if(Te&&c.mode&1){var k=Gg(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Qg(k,o,c,i,e),kf(ii(u,c));break e}}i=u=ii(u,c),qe!==4&&(qe=2),wo===null?wo=[i]:wo.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var T=Av(i,u,e);Bg(i,T);break e;case 1:c=u;var x=i.type,_=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(hr===null||!hr.has(_)))){i.flags|=65536,e&=-e,i.lanes|=e;var j=jv(i,c,e);Bg(i,j);break e}}i=i.return}while(i!==null)}Xv(n)}catch(M){e=M,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(!0)}function Qv(){var t=hc.current;return hc.current=dc,t===null?dc:t}function Gf(){(qe===0||qe===3||qe===2)&&(qe=4),Ge===null||!(Xr&268435455)&&!(Wc&268435455)||Xn(Ge,Ze)}function mc(t,e){var n=le;le|=2;var r=Qv();(Ge!==t||Ze!==e)&&(bn=null,$r(t,e));do try{JE();break}catch(s){Gv(t,s)}while(!0);if(Rf(),le=n,hc.current=r,Ve!==null)throw Error(F(261));return Ge=null,Ze=0,qe}function JE(){for(;Ve!==null;)Yv(Ve)}function ZE(){for(;Ve!==null&&!Tb();)Yv(Ve)}function Yv(t){var e=Zv(t.alternate,t,At);t.memoizedProps=t.pendingProps,e===null?Xv(t):Ve=e,$f.current=null}function Xv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HE(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,Ve=null;return}}else if(n=WE(n,e,At),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);qe===0&&(qe=5)}function Lr(t,e,n){var r=fe,s=zt.transition;try{zt.transition=null,fe=1,eT(t,e,n,r)}finally{zt.transition=s,fe=r}return null}function eT(t,e,n,r){do Ks();while(sr!==null);if(le&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Db(t,i),t===Ge&&(Ve=Ge=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||dl||(dl=!0,e_(Yl,function(){return Ks(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=zt.transition,zt.transition=null;var o=fe;fe=1;var c=le;le|=4,$f.current=null,GE(t,n),Wv(n,t),_E(ih),Jl=!!sh,ih=sh=null,t.current=n,QE(n),Ib(),le=c,fe=o,zt.transition=i}else t.current=n;if(dl&&(dl=!1,sr=t,pc=s),i=t.pendingLanes,i===0&&(hr=null),kb(n.stateNode),kt(t,Oe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(fc)throw fc=!1,t=Ih,Ih=null,t;return pc&1&&t.tag!==0&&Ks(),i=t.pendingLanes,i&1?t===Nh?bo++:(bo=0,Nh=t):bo=0,Sr(),null}function Ks(){if(sr!==null){var t=Ax(pc),e=zt.transition,n=fe;try{if(zt.transition=null,fe=16>t?16:t,sr===null)var r=!1;else{if(t=sr,sr=null,pc=0,le&6)throw Error(F(331));var s=le;for(le|=4,H=t.current;H!==null;){var i=H,o=i.child;if(H.flags&16){var c=i.deletions;if(c!==null){for(var u=0;u<c.length;u++){var d=c[u];for(H=d;H!==null;){var f=H;switch(f.tag){case 0:case 11:case 15:_o(8,f,i)}var g=f.child;if(g!==null)g.return=f,H=g;else for(;H!==null;){f=H;var m=f.sibling,E=f.return;if(zv(f),f===d){H=null;break}if(m!==null){m.return=E,H=m;break}H=E}}}var S=i.alternate;if(S!==null){var R=S.child;if(R!==null){S.child=null;do{var k=R.sibling;R.sibling=null,R=k}while(R!==null)}}H=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,H=o;else e:for(;H!==null;){if(i=H,i.flags&2048)switch(i.tag){case 0:case 11:case 15:_o(9,i,i.return)}var T=i.sibling;if(T!==null){T.return=i.return,H=T;break e}H=i.return}}var x=t.current;for(H=x;H!==null;){o=H;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,H=_;else e:for(o=x;H!==null;){if(c=H,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:qc(9,c)}}catch(M){Ae(c,c.return,M)}if(c===o){H=null;break e}var j=c.sibling;if(j!==null){j.return=c.return,H=j;break e}H=c.return}}if(le=s,Sr(),un&&typeof un.onPostCommitFiberRoot=="function")try{un.onPostCommitFiberRoot(Lc,t)}catch{}r=!0}return r}finally{fe=n,zt.transition=e}}return!1}function l0(t,e,n){e=ii(n,e),e=Av(t,e,1),t=dr(t,e,1),e=xt(),t!==null&&(da(t,1,e),kt(t,e))}function Ae(t,e,n){if(t.tag===3)l0(t,t,n);else for(;e!==null;){if(e.tag===3){l0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(hr===null||!hr.has(r))){t=ii(n,t),t=jv(e,t,1),e=dr(e,t,1),t=xt(),e!==null&&(da(e,1,t),kt(e,t));break}}e=e.return}}function tT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=xt(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(Ze&n)===n&&(qe===4||qe===3&&(Ze&130023424)===Ze&&500>Oe()-Wf?$r(t,0):qf|=n),kt(t,e)}function Jv(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=xt();t=On(t,e),t!==null&&(da(t,e,n),kt(t,n))}function nT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jv(t,n)}function rT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),Jv(t,n)}var Zv;Zv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Nt.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,qE(t,e,n);It=!!(t.flags&131072)}else It=!1,Te&&e.flags&1048576&&rv(e,ic,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pl(t,e),t=e.pendingProps;var s=ti(e,ht.current);Hs(e,n),s=Vf(null,e,r,t,s,n);var i=Uf();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(i=!0,rc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Pf(e),s.updater=$c,e.stateNode=s,s._reactInternals=e,ph(e,r,t,n),e=yh(null,e,r,!0,i,n)):(e.tag=0,Te&&i&&Nf(e),yt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=iT(r),t=Qt(r,t),s){case 0:e=gh(null,e,r,t,n);break e;case 1:e=Jg(null,e,r,t,n);break e;case 11:e=Yg(null,e,r,t,n);break e;case 14:e=Xg(null,e,r,Qt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qt(r,s),gh(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qt(r,s),Jg(t,e,r,s,n);case 3:e:{if(Lv(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,cv(t,e),lc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=ii(Error(F(423)),e),e=Zg(t,e,r,n,s);break e}else if(r!==s){s=ii(Error(F(424)),e),e=Zg(t,e,r,n,s);break e}else for(jt=ur(e.stateNode.containerInfo.firstChild),Ot=e,Te=!0,Xt=null,n=av(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ni(),r===s){e=Ln(t,e,n);break e}yt(t,e,r,n)}e=e.child}return e;case 5:return uv(e),t===null&&dh(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,oh(r,s)?o=null:i!==null&&oh(r,i)&&(e.flags|=32),Ov(t,e),yt(t,e,o,n),e.child;case 6:return t===null&&dh(e),null;case 13:return Mv(t,e,n);case 4:return Df(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ri(e,null,r,n):yt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qt(r,s),Yg(t,e,r,s,n);case 7:return yt(t,e,e.pendingProps,n),e.child;case 8:return yt(t,e,e.pendingProps.children,n),e.child;case 12:return yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ye(oc,r._currentValue),r._currentValue=o,i!==null)if(en(i.value,o)){if(i.children===s.children&&!Nt.current){e=Ln(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var c=i.dependencies;if(c!==null){o=i.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Rn(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),hh(i.return,n,e),c.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),hh(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}yt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Hs(e,n),s=qt(s),r=r(s),e.flags|=1,yt(t,e,r,n),e.child;case 14:return r=e.type,s=Qt(r,e.pendingProps),s=Qt(r.type,s),Xg(t,e,r,s,n);case 15:return Pv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Qt(r,s),Pl(t,e),e.tag=1,St(r)?(t=!0,rc(e)):t=!1,Hs(e,n),Rv(e,r,s),ph(e,r,s,n),yh(null,e,r,!0,t,n);case 19:return Vv(t,e,n);case 22:return Dv(t,e,n)}throw Error(F(156,e.tag))};function e_(t,e){return Sx(t,e)}function sT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Bt(t,e,n,r){return new sT(t,e,n,r)}function Qf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function iT(t){if(typeof t=="function")return Qf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===pf)return 11;if(t===mf)return 14}return 2}function pr(t,e){var n=t.alternate;return n===null?(n=Bt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ll(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Qf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Cs:return qr(n.children,s,i,e);case ff:o=8,s|=8;break;case Vd:return t=Bt(12,n,e,s|2),t.elementType=Vd,t.lanes=i,t;case Ud:return t=Bt(13,n,e,s),t.elementType=Ud,t.lanes=i,t;case Fd:return t=Bt(19,n,e,s),t.elementType=Fd,t.lanes=i,t;case ux:return Hc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case lx:o=10;break e;case cx:o=9;break e;case pf:o=11;break e;case mf:o=14;break e;case Gn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Bt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function qr(t,e,n,r){return t=Bt(7,t,r,e),t.lanes=n,t}function Hc(t,e,n,r){return t=Bt(22,t,r,e),t.elementType=ux,t.lanes=n,t.stateNode={isHidden:!1},t}function gd(t,e,n){return t=Bt(6,t,null,e),t.lanes=n,t}function yd(t,e,n){return e=Bt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oT(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Xu(0),this.expirationTimes=Xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xu(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Yf(t,e,n,r,s,i,o,c,u){return t=new oT(t,e,n,c,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=Bt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pf(i),t}function aT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function t_(t){if(!t)return _r;t=t._reactInternals;e:{if(cs(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(St(n))return tv(t,n,e)}return e}function n_(t,e,n,r,s,i,o,c,u){return t=Yf(n,r,!0,t,s,i,o,c,u),t.context=t_(null),n=t.current,r=xt(),s=fr(n),i=Rn(r,s),i.callback=e??null,dr(n,i,s),t.current.lanes=s,da(t,s,r),kt(t,r),t}function Kc(t,e,n,r){var s=e.current,i=xt(),o=fr(s);return n=t_(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=dr(s,e,o),t!==null&&(Zt(t,s,o,i),Rl(t,s,o)),o}function gc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function c0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xf(t,e){c0(t,e),(t=t.alternate)&&c0(t,e)}function lT(){return null}var r_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jf(t){this._internalRoot=t}Gc.prototype.render=Jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Kc(t,e,null,null)};Gc.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Jr(function(){Kc(null,t,null,null)}),e[Dn]=null}};function Gc(t){this._internalRoot=t}Gc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yn.length&&e!==0&&e<Yn[n].priority;n++);Yn.splice(n,0,t),n===0&&Lx(t)}};function Zf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function u0(){}function cT(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=gc(o);i.call(d)}}var o=n_(e,r,t,0,null,!1,!1,"",u0);return t._reactRootContainer=o,t[Dn]=o.current,Fo(t.nodeType===8?t.parentNode:t),Jr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var c=r;r=function(){var d=gc(u);c.call(d)}}var u=Yf(t,0,!1,null,null,!1,!1,"",u0);return t._reactRootContainer=u,t[Dn]=u.current,Fo(t.nodeType===8?t.parentNode:t),Jr(function(){Kc(e,u,n,r)}),u}function Yc(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var c=s;s=function(){var u=gc(o);c.call(u)}}Kc(e,o,t,s)}else o=cT(n,e,t,s,r);return gc(o)}jx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=no(e.pendingLanes);n!==0&&(xf(e,n|1),kt(e,Oe()),!(le&6)&&(oi=Oe()+500,Sr()))}break;case 13:Jr(function(){var r=On(t,1);if(r!==null){var s=xt();Zt(r,t,1,s)}}),Xf(t,1)}};vf=function(t){if(t.tag===13){var e=On(t,134217728);if(e!==null){var n=xt();Zt(e,t,134217728,n)}Xf(t,134217728)}};Px=function(t){if(t.tag===13){var e=fr(t),n=On(t,e);if(n!==null){var r=xt();Zt(n,t,e,r)}Xf(t,e)}};Dx=function(){return fe};Ox=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};Yd=function(t,e,n){switch(e){case"input":if($d(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Fc(r);if(!s)throw Error(F(90));hx(r),$d(r,s)}}}break;case"textarea":px(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};wx=Hf;bx=Jr;var uT={usingClientEntryPoint:!1,Events:[fa,Ps,Fc,vx,_x,Hf]},Qi={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},dT={bundleType:Qi.bundleType,version:Qi.version,rendererPackageName:Qi.rendererPackageName,rendererConfig:Qi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ix(t),t===null?null:t.stateNode},findFiberByHostInstance:Qi.findFiberByHostInstance||lT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Lc=hl.inject(dT),un=hl}catch{}}Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uT;Mt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zf(e))throw Error(F(200));return aT(t,e,null,n)};Mt.createRoot=function(t,e){if(!Zf(t))throw Error(F(299));var n=!1,r="",s=r_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Yf(t,1,!1,null,null,n,!1,r,s),t[Dn]=e.current,Fo(t.nodeType===8?t.parentNode:t),new Jf(e)};Mt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Ix(e),t=t===null?null:t.stateNode,t};Mt.flushSync=function(t){return Jr(t)};Mt.hydrate=function(t,e,n){if(!Qc(e))throw Error(F(200));return Yc(null,t,e,!0,n)};Mt.hydrateRoot=function(t,e,n){if(!Zf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=r_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=n_(e,null,t,1,n??null,s,!1,i,o),t[Dn]=e.current,Fo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Gc(e)};Mt.render=function(t,e,n){if(!Qc(e))throw Error(F(200));return Yc(null,t,e,!1,n)};Mt.unmountComponentAtNode=function(t){if(!Qc(t))throw Error(F(40));return t._reactRootContainer?(Jr(function(){Yc(null,null,t,!1,function(){t._reactRootContainer=null,t[Dn]=null})}),!0):!1};Mt.unstable_batchedUpdates=Hf;Mt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Qc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Yc(t,e,n,!1,r)};Mt.version="18.3.1-next-f1338f8080-20240426";function s_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s_)}catch(t){console.error(t)}}s_(),sx.exports=Mt;var hT=sx.exports,d0=hT;Ld.createRoot=d0.createRoot,Ld.hydrateRoot=d0.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qo.apply(null,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const h0="popstate";function fT(t){t===void 0&&(t={});function e(s,i){let{pathname:o="/",search:c="",hash:u=""}=us(s.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),Ch("",{pathname:o,search:c,hash:u},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(s,i){let o=s.document.querySelector("base"),c="";if(o&&o.getAttribute("href")){let u=s.location.href,d=u.indexOf("#");c=d===-1?u:u.slice(0,d)}return c+"#"+(typeof i=="string"?i:i_(i))}function r(s,i){ep(s.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(i)+")")}return mT(e,n,r,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ep(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pT(){return Math.random().toString(36).substr(2,8)}function f0(t,e){return{usr:t.state,key:t.key,idx:e}}function Ch(t,e,n,r){return n===void 0&&(n=null),Qo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?us(e):e,{state:n,key:e&&e.key||r||pT()})}function i_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function us(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function mT(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,c=ir.Pop,u=null,d=f();d==null&&(d=0,o.replaceState(Qo({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function g(){c=ir.Pop;let k=f(),T=k==null?null:k-d;d=k,u&&u({action:c,location:R.location,delta:T})}function m(k,T){c=ir.Push;let x=Ch(R.location,k,T);n&&n(x,k),d=f()+1;let _=f0(x,d),j=R.createHref(x);try{o.pushState(_,"",j)}catch(M){if(M instanceof DOMException&&M.name==="DataCloneError")throw M;s.location.assign(j)}i&&u&&u({action:c,location:R.location,delta:1})}function E(k,T){c=ir.Replace;let x=Ch(R.location,k,T);n&&n(x,k),d=f();let _=f0(x,d),j=R.createHref(x);o.replaceState(_,"",j),i&&u&&u({action:c,location:R.location,delta:0})}function S(k){let T=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof k=="string"?k:i_(k);return x=x.replace(/ $/,"%20"),Fe(T,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,T)}let R={get action(){return c},get location(){return t(s,o)},listen(k){if(u)throw new Error("A history only accepts one active listener");return s.addEventListener(h0,g),u=k,()=>{s.removeEventListener(h0,g),u=null}},createHref(k){return e(s,k)},createURL:S,encodeLocation(k){let T=S(k);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:m,replace:E,go(k){return o.go(k)}};return R}var p0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(p0||(p0={}));function gT(t,e,n){return n===void 0&&(n="/"),yT(t,e,n)}function yT(t,e,n,r){let s=typeof e=="string"?us(e):e,i=l_(s.pathname||"/",n);if(i==null)return null;let o=o_(t);xT(o);let c=null,u=RT(i);for(let d=0;c==null&&d<o.length;++d)c=ST(o[d],u);return c}function o_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,c)=>{let u={relativePath:c===void 0?i.path||"":c,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};u.relativePath.startsWith("/")&&(Fe(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let d=Wr([r,u.relativePath]),f=n.concat(u);i.children&&i.children.length>0&&(Fe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),o_(i.children,e,f,d)),!(i.path==null&&!i.index)&&e.push({path:d,score:IT(d,i.index),routesMeta:f})};return t.forEach((i,o)=>{var c;if(i.path===""||!((c=i.path)!=null&&c.includes("?")))s(i,o);else for(let u of a_(i.path))s(i,o,u)}),e}function a_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=a_(r.join("/")),c=[];return c.push(...o.map(u=>u===""?i:[i,u].join("/"))),s&&c.push(...o),c.map(u=>t.startsWith("/")&&u===""?"/":u)}function xT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:NT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vT=/^:[\w-]+$/,_T=3,wT=2,bT=1,ET=10,TT=-2,m0=t=>t==="*";function IT(t,e){let n=t.split("/"),r=n.length;return n.some(m0)&&(r+=TT),e&&(r+=wT),n.filter(s=>!m0(s)).reduce((s,i)=>s+(vT.test(i)?_T:i===""?bT:ET),r)}function NT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function ST(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let c=0;c<r.length;++c){let u=r[c],d=c===r.length-1,f=i==="/"?e:e.slice(i.length)||"/",g=kT({path:u.relativePath,caseSensitive:u.caseSensitive,end:d},f),m=u.route;if(!g)return null;Object.assign(s,g.params),o.push({params:s,pathname:Wr([i,g.pathname]),pathnameBase:PT(Wr([i,g.pathnameBase])),route:m}),g.pathnameBase!=="/"&&(i=Wr([i,g.pathnameBase]))}return o}function kT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=CT(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),c=s.slice(1);return{params:r.reduce((d,f,g)=>{let{paramName:m,isOptional:E}=f;if(m==="*"){let R=c[g]||"";o=i.slice(0,i.length-R.length).replace(/(.)\/+$/,"$1")}const S=c[g];return E&&!S?d[m]=void 0:d[m]=(S||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:t}}function CT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ep(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,c,u)=>(r.push({paramName:c,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function RT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ep(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function l_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function AT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?us(t):t,i;return n?(n=d_(n),n.startsWith("/")?i=g0(n.substring(1),"/"):i=g0(n,e)):i=e,{pathname:i,search:DT(r),hash:OT(s)}}function g0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function xd(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function jT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function c_(t,e){let n=jT(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function u_(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=us(t):(s=Qo({},t),Fe(!s.pathname||!s.pathname.includes("?"),xd("?","pathname","search",s)),Fe(!s.pathname||!s.pathname.includes("#"),xd("#","pathname","hash",s)),Fe(!s.search||!s.search.includes("#"),xd("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,c;if(o==null)c=n;else{let g=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),g-=1;s.pathname=m.join("/")}c=g>=0?e[g]:"/"}let u=AT(s,c),d=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(d||f)&&(u.pathname+="/"),u}const d_=t=>t.replace(/\/\/+/g,"/"),Wr=t=>d_(t.join("/")),PT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function LT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const h_=["post","put","patch","delete"];new Set(h_);const MT=["get",...h_];new Set(MT);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yo(){return Yo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)({}).hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yo.apply(null,arguments)}const tp=L.createContext(null),VT=L.createContext(null),ma=L.createContext(null),Xc=L.createContext(null),ds=L.createContext({outlet:null,matches:[],isDataRoute:!1}),f_=L.createContext(null);function ga(){return L.useContext(Xc)!=null}function Jc(){return ga()||Fe(!1),L.useContext(Xc).location}function p_(t){L.useContext(ma).static||L.useLayoutEffect(t)}function UT(){let{isDataRoute:t}=L.useContext(ds);return t?JT():FT()}function FT(){ga()||Fe(!1);let t=L.useContext(tp),{basename:e,future:n,navigator:r}=L.useContext(ma),{matches:s}=L.useContext(ds),{pathname:i}=Jc(),o=JSON.stringify(c_(s,n.v7_relativeSplatPath)),c=L.useRef(!1);return p_(()=>{c.current=!0}),L.useCallback(function(d,f){if(f===void 0&&(f={}),!c.current)return;if(typeof d=="number"){r.go(d);return}let g=u_(d,JSON.parse(o),i,f.relative==="path");t==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:Wr([e,g.pathname])),(f.replace?r.replace:r.push)(g,f.state,f)},[e,r,o,i,t])}function BT(t,e){return zT(t,e)}function zT(t,e,n,r){ga()||Fe(!1);let{navigator:s}=L.useContext(ma),{matches:i}=L.useContext(ds),o=i[i.length-1],c=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let d=Jc(),f;if(e){var g;let k=typeof e=="string"?us(e):e;u==="/"||(g=k.pathname)!=null&&g.startsWith(u)||Fe(!1),f=k}else f=d;let m=f.pathname||"/",E=m;if(u!=="/"){let k=u.replace(/^\//,"").split("/");E="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let S=gT(t,{pathname:E}),R=KT(S&&S.map(k=>Object.assign({},k,{params:Object.assign({},c,k.params),pathname:Wr([u,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?u:Wr([u,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return e&&R?L.createElement(Xc.Provider,{value:{location:Yo({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:ir.Pop}},R):R}function $T(){let t=XT(),e=LT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return L.createElement(L.Fragment,null,L.createElement("h2",null,"Unexpected Application Error!"),L.createElement("h3",{style:{fontStyle:"italic"}},e),n?L.createElement("pre",{style:s},n):null,null)}const qT=L.createElement($T,null);class WT extends L.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?L.createElement(ds.Provider,{value:this.props.routeContext},L.createElement(f_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function HT(t){let{routeContext:e,match:n,children:r}=t,s=L.useContext(tp);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),L.createElement(ds.Provider,{value:e},r)}function KT(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,c=(s=n)==null?void 0:s.errors;if(c!=null){let f=o.findIndex(g=>g.route.id&&(c==null?void 0:c[g.route.id])!==void 0);f>=0||Fe(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let g=o[f];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=f),g.route.id){let{loaderData:m,errors:E}=n,S=g.route.loader&&m[g.route.id]===void 0&&(!E||E[g.route.id]===void 0);if(g.route.lazy||S){u=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,g,m)=>{let E,S=!1,R=null,k=null;n&&(E=c&&g.route.id?c[g.route.id]:void 0,R=g.route.errorElement||qT,u&&(d<0&&m===0?(ZT("route-fallback"),S=!0,k=null):d===m&&(S=!0,k=g.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,m+1)),x=()=>{let _;return E?_=R:S?_=k:g.route.Component?_=L.createElement(g.route.Component,null):g.route.element?_=g.route.element:_=f,L.createElement(HT,{match:g,routeContext:{outlet:f,matches:T,isDataRoute:n!=null},children:_})};return n&&(g.route.ErrorBoundary||g.route.errorElement||m===0)?L.createElement(WT,{location:n.location,revalidation:n.revalidation,component:R,error:E,children:x(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):x()},null)}var m_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(m_||{}),g_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(g_||{});function GT(t){let e=L.useContext(tp);return e||Fe(!1),e}function QT(t){let e=L.useContext(VT);return e||Fe(!1),e}function YT(t){let e=L.useContext(ds);return e||Fe(!1),e}function y_(t){let e=YT(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function XT(){var t;let e=L.useContext(f_),n=QT(),r=y_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function JT(){let{router:t}=GT(m_.UseNavigateStable),e=y_(g_.UseNavigateStable),n=L.useRef(!1);return p_(()=>{n.current=!0}),L.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Yo({fromRouteId:e},i)))},[t,e])}const y0={};function ZT(t,e,n){y0[t]||(y0[t]=!0)}function eI(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function tI(t){let{to:e,replace:n,state:r,relative:s}=t;ga()||Fe(!1);let{future:i,static:o}=L.useContext(ma),{matches:c}=L.useContext(ds),{pathname:u}=Jc(),d=UT(),f=u_(e,c_(c,i.v7_relativeSplatPath),u,s==="path"),g=JSON.stringify(f);return L.useEffect(()=>d(JSON.parse(g),{replace:n,state:r,relative:s}),[d,g,s,n,r]),null}function Ml(t){Fe(!1)}function nI(t){let{basename:e="/",children:n=null,location:r,navigationType:s=ir.Pop,navigator:i,static:o=!1,future:c}=t;ga()&&Fe(!1);let u=e.replace(/^\/*/,"/"),d=L.useMemo(()=>({basename:u,navigator:i,static:o,future:Yo({v7_relativeSplatPath:!1},c)}),[u,c,i,o]);typeof r=="string"&&(r=us(r));let{pathname:f="/",search:g="",hash:m="",state:E=null,key:S="default"}=r,R=L.useMemo(()=>{let k=l_(f,u);return k==null?null:{location:{pathname:k,search:g,hash:m,state:E,key:S},navigationType:s}},[u,f,g,m,E,S,s]);return R==null?null:L.createElement(ma.Provider,{value:d},L.createElement(Xc.Provider,{children:n,value:R}))}function rI(t){let{children:e,location:n}=t;return BT(Rh(e),n)}new Promise(()=>{});function Rh(t,e){e===void 0&&(e=[]);let n=[];return L.Children.forEach(t,(r,s)=>{if(!L.isValidElement(r))return;let i=[...e,s];if(r.type===L.Fragment){n.push.apply(n,Rh(r.props.children,i));return}r.type!==Ml&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Rh(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const sI="6";try{window.__reactRouterVersion=sI}catch{}const iI="startTransition",x0=tb[iI];function oI(t){let{basename:e,children:n,future:r,window:s}=t,i=L.useRef();i.current==null&&(i.current=fT({window:s,v5Compat:!0}));let o=i.current,[c,u]=L.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=L.useCallback(g=>{d&&x0?x0(()=>u(g)):u(g)},[u,d]);return L.useLayoutEffect(()=>o.listen(f),[o,f]),L.useEffect(()=>eI(r),[r]),L.createElement(nI,{basename:e,children:n,location:c.location,navigationType:c.action,navigator:o,future:r})}var v0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(v0||(v0={}));var _0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(_0||(_0={}));var w0={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},aI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},v_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,f=i>>2,g=(i&3)<<4|c>>4;let m=(c&15)<<2|d>>6,E=d&63;u||(E=64,o||(m=64)),r.push(n[f],n[g],n[m],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(x_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):aI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const g=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||d==null||g==null)throw new lI;const m=i<<2|c>>4;if(r.push(m),d!==64){const E=c<<4&240|d>>2;if(r.push(E),g!==64){const S=d<<6&192|g;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cI=function(t){const e=x_(t);return v_.encodeByteArray(e,!0)},yc=function(t){return cI(t).replace(/\./g,"")},__=function(t){try{return v_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=()=>uI().__FIREBASE_DEFAULTS__,hI=()=>{if(typeof process>"u"||typeof w0>"u")return;const t=w0.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&__(t[1]);return e&&JSON.parse(e)},Zc=()=>{try{return dI()||hI()||fI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w_=t=>{var e,n;return(n=(e=Zc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},b_=t=>{const e=w_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},E_=()=>{var t;return(t=Zc())===null||t===void 0?void 0:t.config},T_=t=>{var e;return(e=Zc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yc(JSON.stringify(n)),yc(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function mI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function gI(){var t;const e=(t=Zc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function xI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _I(){const t=ft();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wI(){return!gI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bI(){try{return typeof indexedDB=="object"}catch{return!1}}function EI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=TI,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ya.prototype.create)}}class ya{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?II(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new xn(s,c,r)}}function II(t,e){return t.replace(NI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const NI=/\{\$([^}]+)}/g;function SI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(b0(i)&&b0(o)){if(!xc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function b0(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function so(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kI(t,e){const n=new CI(t,e);return n.subscribe.bind(n)}class CI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=vd),s.error===void 0&&(s.error=vd),s.complete===void 0&&(s.complete=vd);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function vd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new pI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PI(e))try{this.getOrInitializeService({instanceIdentifier:Mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mr){return this.instances.has(e)}getOptions(e=Mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mr){return this.component?this.component.multipleInstances?e:Mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jI(t){return t===Mr?void 0:t}function PI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const OI={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},LI=se.INFO,MI={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},VI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=MI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class np{constructor(e){this.name=e,this._logLevel=LI,this._logHandler=VI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const UI=(t,e)=>e.some(n=>t instanceof n);let E0,T0;function FI(){return E0||(E0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BI(){return T0||(T0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N_=new WeakMap,Ah=new WeakMap,S_=new WeakMap,_d=new WeakMap,rp=new WeakMap;function zI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(mr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&N_.set(n,t)}).catch(()=>{}),rp.set(e,t),e}function $I(t){if(Ah.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ah.set(t,e)}let jh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ah.get(t);if(e==="objectStoreNames")return t.objectStoreNames||S_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qI(t){jh=t(jh)}function WI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wd(this),e,...n);return S_.set(r,e.sort?e.sort():[e]),mr(r)}:BI().includes(t)?function(...e){return t.apply(wd(this),e),mr(N_.get(this))}:function(...e){return mr(t.apply(wd(this),e))}}function HI(t){return typeof t=="function"?WI(t):(t instanceof IDBTransaction&&$I(t),UI(t,FI())?new Proxy(t,jh):t)}function mr(t){if(t instanceof IDBRequest)return zI(t);if(_d.has(t))return _d.get(t);const e=HI(t);return e!==t&&(_d.set(t,e),rp.set(e,t)),e}const wd=t=>rp.get(t);function KI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(mr(o.result),u.oldVersion,u.newVersion,mr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const GI=["get","getKey","getAll","getAllKeys","count"],QI=["put","add","delete","clear"],bd=new Map;function I0(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bd.get(e))return bd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=QI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GI.includes(n)))return;const i=async function(o,...c){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),s&&u.done]))[0]};return bd.set(e,i),i}qI(t=>({...t,get:(e,n,r)=>I0(e,n)||t.get(e,n,r),has:(e,n)=>!!I0(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(XI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function XI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ph="@firebase/app",N0="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn=new np("@firebase/app"),JI="@firebase/app-compat",ZI="@firebase/analytics-compat",eN="@firebase/analytics",tN="@firebase/app-check-compat",nN="@firebase/app-check",rN="@firebase/auth",sN="@firebase/auth-compat",iN="@firebase/database",oN="@firebase/data-connect",aN="@firebase/database-compat",lN="@firebase/functions",cN="@firebase/functions-compat",uN="@firebase/installations",dN="@firebase/installations-compat",hN="@firebase/messaging",fN="@firebase/messaging-compat",pN="@firebase/performance",mN="@firebase/performance-compat",gN="@firebase/remote-config",yN="@firebase/remote-config-compat",xN="@firebase/storage",vN="@firebase/storage-compat",_N="@firebase/firestore",wN="@firebase/vertexai-preview",bN="@firebase/firestore-compat",EN="firebase",TN="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh="[DEFAULT]",IN={[Ph]:"fire-core",[JI]:"fire-core-compat",[eN]:"fire-analytics",[ZI]:"fire-analytics-compat",[nN]:"fire-app-check",[tN]:"fire-app-check-compat",[rN]:"fire-auth",[sN]:"fire-auth-compat",[iN]:"fire-rtdb",[oN]:"fire-data-connect",[aN]:"fire-rtdb-compat",[lN]:"fire-fn",[cN]:"fire-fn-compat",[uN]:"fire-iid",[dN]:"fire-iid-compat",[hN]:"fire-fcm",[fN]:"fire-fcm-compat",[pN]:"fire-perf",[mN]:"fire-perf-compat",[gN]:"fire-rc",[yN]:"fire-rc-compat",[xN]:"fire-gcs",[vN]:"fire-gcs-compat",[_N]:"fire-fst",[bN]:"fire-fst-compat",[wN]:"fire-vertex","fire-js":"fire-js",[EN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map,NN=new Map,Oh=new Map;function S0(t,e){try{t.container.addComponent(e)}catch(n){Mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(Oh.has(e))return Mn.debug(`There were multiple attempts to register component ${e}.`),!1;Oh.set(e,t);for(const n of Xo.values())S0(n,t);for(const n of NN.values())S0(n,t);return!0}function eu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Nn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gr=new ya("app","Firebase",SN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hs=TN;function k_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Dh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw gr.create("bad-app-name",{appName:String(s)});if(n||(n=E_()),!n)throw gr.create("no-options");const i=Xo.get(s);if(i){if(xc(n,i.options)&&xc(r,i.config))return i;throw gr.create("duplicate-app",{appName:s})}const o=new DI(s);for(const u of Oh.values())o.addComponent(u);const c=new kN(n,r,o);return Xo.set(s,c),c}function sp(t=Dh){const e=Xo.get(t);if(!e&&t===Dh&&E_())return k_();if(!e)throw gr.create("no-app",{appName:t});return e}function k0(){return Array.from(Xo.values())}function hn(t,e,n){var r;let s=(r=IN[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Mn.warn(c.join(" "));return}Zr(new wr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="firebase-heartbeat-database",RN=1,Jo="firebase-heartbeat-store";let Ed=null;function C_(){return Ed||(Ed=KI(CN,RN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Jo)}catch(n){console.warn(n)}}}}).catch(t=>{throw gr.create("idb-open",{originalErrorMessage:t.message})})),Ed}async function AN(t){try{const n=(await C_()).transaction(Jo),r=await n.objectStore(Jo).get(R_(t));return await n.done,r}catch(e){if(e instanceof xn)Mn.warn(e.message);else{const n=gr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Mn.warn(n.message)}}}async function C0(t,e){try{const r=(await C_()).transaction(Jo,"readwrite");await r.objectStore(Jo).put(e,R_(t)),await r.done}catch(n){if(n instanceof xn)Mn.warn(n.message);else{const r=gr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Mn.warn(r.message)}}}function R_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jN=1024,PN=30*24*60*60*1e3;class DN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new LN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=R0();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=PN}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=R0(),{heartbeatsToSend:r,unsentEntries:s}=ON(this._heartbeatsCache.heartbeats),i=yc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Mn.warn(n),""}}}function R0(){return new Date().toISOString().substring(0,10)}function ON(t,e=jN){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),A0(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),A0(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class LN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bI()?EI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return C0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return C0(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function A0(t){return yc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(t){Zr(new wr("platform-logger",e=>new YI(e),"PRIVATE")),Zr(new wr("heartbeat",e=>new DN(e),"PRIVATE")),hn(Ph,N0,t),hn(Ph,N0,"esm2017"),hn("fire-js","")}MN("");var VN="firebase",UN="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(VN,UN,"app");function ip(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function A_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FN=A_,j_=new ya("auth","Firebase",A_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc=new np("@firebase/auth");function BN(t,...e){vc.logLevel<=se.WARN&&vc.warn(`Auth (${hs}): ${t}`,...e)}function Vl(t,...e){vc.logLevel<=se.ERROR&&vc.error(`Auth (${hs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,...e){throw op(t,...e)}function fn(t,...e){return op(t,...e)}function P_(t,e,n){const r=Object.assign(Object.assign({},FN()),{[e]:n});return new ya("auth","Firebase",r).create(e,{appName:t.name})}function yr(t){return P_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function op(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return j_.create(t,...e)}function Y(t,e,...n){if(!t)throw op(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vl(e),new Error(e)}function Vn(t,e){t||Sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function zN(){return j0()==="http:"||j0()==="https:"}function j0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(zN()||xI()||"connection"in navigator)?navigator.onLine:!0}function qN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=mI()||vI()}get(){return $N()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=new va(3e4,6e4);function fs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kr(t,e,n,r,s={}){return O_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=xa(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},i);return yI()||(d.referrerPolicy="no-referrer"),D_.fetch()(L_(t,t.config.apiHost,n,c),d)})}async function O_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},WN),e);try{const s=new GN(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw fl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw fl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw fl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw P_(t,f,d);tn(t,f)}}catch(s){if(s instanceof xn)throw s;tn(t,"network-request-failed",{message:String(s)})}}async function tu(t,e,n,r,s={}){const i=await kr(t,e,n,r,s);return"mfaPendingCredential"in i&&tn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function L_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ap(t.config,s):`${t.config.apiScheme}://${s}`}function KN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class GN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),HN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}function P0(t){return t!==void 0&&t.enterprise!==void 0}class QN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return KN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function YN(t,e){return kr(t,"GET","/v2/recaptchaConfig",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XN(t,e){return kr(t,"POST","/v1/accounts:delete",e)}async function M_(t,e){return kr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JN(t,e=!1){const n=Le(t),r=await n.getIdToken(e),s=lp(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Eo(Td(s.auth_time)),issuedAtTime:Eo(Td(s.iat)),expirationTime:Eo(Td(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Td(t){return Number(t)*1e3}function lp(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vl("JWT malformed, contained fewer than 3 sections"),null;try{const s=__(n);return s?JSON.parse(s):(Vl("Failed to decode base64 JWT payload"),null)}catch(s){return Vl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function D0(t){const e=lp(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&ZN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Eo(this.lastLoginAt),this.creationTime=Eo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _c(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zo(t,M_(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?V_(i.providerUserInfo):[],c=nS(t.providerData,o),u=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=u?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Mh(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,g)}async function tS(t){const e=Le(t);await _c(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function V_(t){return t.map(e=>{var{providerId:n}=e,r=ip(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rS(t,e){const n=await O_(t,{},async()=>{const r=xa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=L_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",D_.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function sS(t,e){return kr(t,"POST","/v2/accounts:revokeToken",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):D0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=D0(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await rS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Gs;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gs,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class kn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ip(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new eS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zo(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JN(this,e)}reload(){return tS(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new kn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _c(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nn(this.auth.app))return Promise.reject(yr(this.auth));const e=await this.getIdToken();return await Zo(this,XN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,u,d,f;const g=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(c=n.tenantId)!==null&&c!==void 0?c:void 0,k=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(d=n.createdAt)!==null&&d!==void 0?d:void 0,x=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:_,emailVerified:j,isAnonymous:M,providerData:O,stsTokenManager:w}=n;Y(_&&w,e,"internal-error");const y=Gs.fromJSON(this.name,w);Y(typeof _=="string",e,"internal-error"),Hn(g,e.name),Hn(m,e.name),Y(typeof j=="boolean",e,"internal-error"),Y(typeof M=="boolean",e,"internal-error"),Hn(E,e.name),Hn(S,e.name),Hn(R,e.name),Hn(k,e.name),Hn(T,e.name),Hn(x,e.name);const b=new kn({uid:_,auth:e,email:m,emailVerified:j,displayName:g,isAnonymous:M,photoURL:S,phoneNumber:E,tenantId:R,stsTokenManager:y,createdAt:T,lastLoginAt:x});return O&&Array.isArray(O)&&(b.providerData=O.map(N=>Object.assign({},N))),k&&(b._redirectEventId=k),b}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gs;s.updateFromServerResponse(n);const i=new kn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _c(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?V_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Gs;c.updateFromIdToken(r);const u=new kn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Mh(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0=new Map;function Cn(t){Vn(t instanceof Function,"Expected a class definition");let e=O0.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,O0.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}U_.type="NONE";const L0=U_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(t,e,n){return`firebase:${t}:${e}:${n}`}class Qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ul(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ul("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?kn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qs(Cn(L0),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Cn(L0);const o=Ul(r,e.config.apiKey,e.name);let c=null;for(const d of n)try{const f=await d._get(o);if(f){const g=kn._fromJSON(e,f);d!==i&&(c=g),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Qs(i,e,r):(i=u[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Qs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if($_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(F_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(W_(e))return"Blackberry";if(H_(e))return"Webos";if(B_(e))return"Safari";if((e.includes("chrome/")||z_(e))&&!e.includes("edge/"))return"Chrome";if(q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function F_(t=ft()){return/firefox\//i.test(t)}function B_(t=ft()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function z_(t=ft()){return/crios\//i.test(t)}function $_(t=ft()){return/iemobile/i.test(t)}function q_(t=ft()){return/android/i.test(t)}function W_(t=ft()){return/blackberry/i.test(t)}function H_(t=ft()){return/webos/i.test(t)}function cp(t=ft()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function iS(t=ft()){var e;return cp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function oS(){return _I()&&document.documentMode===10}function K_(t=ft()){return cp(t)||q_(t)||H_(t)||W_(t)||/windows phone/i.test(t)||$_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(t,e=[]){let n;switch(t){case"Browser":n=M0(ft());break;case"Worker":n=`${M0(ft())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const u=e(i);o(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lS(t,e={}){return kr(t,"GET","/v2/passwordPolicy",fs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cS=6;class uS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:cS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(c=u.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new V0(this),this.idTokenSubscription=new V0(this),this.beforeStateQueue=new aS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await M_(this,{idToken:e}),r=await kn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _c(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nn(this.app))return Promise.reject(yr(this));const n=e?Le(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nn(this.app)?Promise.reject(yr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nn(this.app)?Promise.reject(yr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lS(this),n=new uS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ya("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await sS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=G_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function bi(t){return Le(t)}class V0{constructor(e){this.auth=e,this.observer=null,this.addObserver=kI(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hS(t){nu=t}function Q_(t){return nu.loadJS(t)}function fS(){return nu.recaptchaEnterpriseScript}function pS(){return nu.gapiScript}function mS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const gS="recaptcha-enterprise",yS="NO_RECAPTCHA";class xS{constructor(e){this.type=gS,this.auth=bi(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{YN(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new QN(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{c(u)})})}function s(i,o,c){const u=window.grecaptcha;P0(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(yS)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&P0(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=fS();u.length!==0&&(u+=c),Q_(u).then(()=>{s(c,i,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function U0(t,e,n,r=!1){const s=new xS(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function F0(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await U0(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await U0(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t,e){const n=eu(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xc(i,e??{}))return s;tn(s,"already-initialized")}return n.initialize({options:e})}function _S(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function wS(t,e,n){const r=bi(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Y_(e),{host:o,port:c}=bS(e),u=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),ES()}function Y_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bS(t){const e=Y_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:B0(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:B0(o)}}}function B0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ES(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class up{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function TS(t,e){return kr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IS(t,e){return tu(t,"POST","/v1/accounts:signInWithPassword",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NS(t,e){return tu(t,"POST","/v1/accounts:signInWithEmailLink",fs(t,e))}async function SS(t,e){return tu(t,"POST","/v1/accounts:signInWithEmailLink",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends up{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ea(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ea(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return F0(e,n,"signInWithPassword",IS);case"emailLink":return NS(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return F0(e,r,"signUpPassword",TS);case"emailLink":return SS(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e){return tu(t,"POST","/v1/accounts:signInWithIdp",fs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="http://localhost";class es extends up{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ip(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new es(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:kS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=xa(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function RS(t){const e=so(io(t)).link,n=e?so(io(e)).deep_link_id:null,r=so(io(t)).deep_link_id;return(r?so(io(r)).link:null)||r||n||e||t}class dp{constructor(e){var n,r,s,i,o,c;const u=so(io(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,g=CS((s=u.mode)!==null&&s!==void 0?s:null);Y(d&&f&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=f,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=u.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=RS(e);try{return new dp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(){this.providerId=Ei.PROVIDER_ID}static credential(e,n){return ea._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=dp.parseLink(n);return Y(r,"argument-error"),ea._fromEmailAndCode(e,r.code,r.tenantId)}}Ei.PROVIDER_ID="password";Ei.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ei.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a extends X_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends _a{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends _a{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.GOOGLE_SIGN_IN_METHOD="google.com";Zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends _a{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.GITHUB_SIGN_IN_METHOD="github.com";er.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends _a{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return tr.credential(n,r)}catch{return null}}}tr.TWITTER_SIGN_IN_METHOD="twitter.com";tr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await kn._fromIdTokenResponse(e,r,s),o=z0(r);return new ai({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=z0(r);return new ai({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function z0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc extends xn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,wc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new wc(e,n,r,s)}}function J_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?wc._fromErrorAndOperation(t,i,e,r):i})}async function AS(t,e,n=!1){const r=await Zo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(t,e,n=!1){const{auth:r}=t;if(Nn(r.app))return Promise.reject(yr(r));const s="reauthenticate";try{const i=await Zo(t,J_(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=lp(i.idToken);Y(o,r,"internal-error");const{sub:c}=o;return Y(t.uid===c,r,"user-mismatch"),ai._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z_(t,e,n=!1){if(Nn(t.app))return Promise.reject(yr(t));const r="signIn",s=await J_(t,r,e),i=await ai._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function PS(t,e){return Z_(bi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DS(t){const e=bi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function OS(t,e,n){return Nn(t.app)?Promise.reject(yr(t)):PS(Le(t),Ei.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&DS(t),r})}function LS(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function MS(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function VS(t){return Le(t).signOut()}const bc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bc,"1"),this.storage.removeItem(bc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=1e3,FS=10;class t1 extends e1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=K_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);oS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,FS):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},US)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}t1.type="LOCAL";const BS=t1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1 extends e1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}n1.type="SESSION";const r1=n1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zS(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async d=>d(n.origin,i)),u=await zS(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ru.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,u)=>{const d=hp("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function qS(t){pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function WS(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HS(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function KS(){return s1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1="firebaseLocalStorageDb",GS=1,Ec="firebaseLocalStorage",o1="fbase_key";class wa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function su(t,e){return t.transaction([Ec],e?"readwrite":"readonly").objectStore(Ec)}function QS(){const t=indexedDB.deleteDatabase(i1);return new wa(t).toPromise()}function Vh(){const t=indexedDB.open(i1,GS);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ec,{keyPath:o1})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ec)?e(r):(r.close(),await QS(),e(await Vh()))})})}async function $0(t,e,n){const r=su(t,!0).put({[o1]:e,value:n});return new wa(r).toPromise()}async function YS(t,e){const n=su(t,!1).get(e),r=await new wa(n).toPromise();return r===void 0?null:r.value}function q0(t,e){const n=su(t,!0).delete(e);return new wa(n).toPromise()}const XS=800,JS=3;class a1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JS)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return s1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ru._getInstance(KS()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await WS(),!this.activeServiceWorker)return;this.sender=new $S(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HS()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vh();return await $0(e,bc,"1"),await q0(e,bc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YS(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>q0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=su(s,!1).getAll();return new wa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XS)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}a1.type="LOCAL";const ZS=a1;new va(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ek(t,e){return e?Cn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp extends up{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tk(t){return Z_(t.auth,new fp(t),t.bypassAuthState)}function nk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),jS(n,new fp(t),t.bypassAuthState)}async function rk(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),AS(n,new fp(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tk;case"linkViaPopup":case"linkViaRedirect":return rk;case"reauthViaPopup":case"reauthViaRedirect":return nk;default:tn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sk=new va(2e3,1e4);class Fs extends l1{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fs.currentPopupAction&&Fs.currentPopupAction.cancel(),Fs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=hp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sk.get())};e()}}Fs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik="pendingRedirect",Fl=new Map;class ok extends l1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Fl.get(this.auth._key());if(!e){try{const r=await ak(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Fl.set(this.auth._key(),e)}return this.bypassAuthState||Fl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ak(t,e){const n=uk(e),r=ck(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function lk(t,e){Fl.set(t._key(),e)}function ck(t){return Cn(t._redirectPersistence)}function uk(t){return Ul(ik,t.config.apiKey,t.name)}async function dk(t,e,n=!1){if(Nn(t.app))return Promise.reject(yr(t));const r=bi(t),s=ek(r,e),o=await new ok(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hk=10*60*1e3;class fk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pk(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!c1(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hk&&this.cachedEventUids.clear(),this.cachedEventUids.has(W0(e))}saveEventToCache(e){this.cachedEventUids.add(W0(e)),this.lastProcessedEventTime=Date.now()}}function W0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function c1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pk(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return c1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mk(t,e={}){return kr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yk=/^https?/;async function xk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mk(t);for(const n of e)try{if(vk(n))return}catch{}tn(t,"unauthorized-domain")}function vk(t){const e=Lh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yk.test(n))return!1;if(gk.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _k=new va(3e4,6e4);function H0(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wk(t){return new Promise((e,n)=>{var r,s,i;function o(){H0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{H0(),n(fn(t,"network-request-failed"))},timeout:_k.get()})}if(!((s=(r=pn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=pn().gapi)===null||i===void 0)&&i.load)o();else{const c=mS("iframefcb");return pn()[c]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},Q_(`${pS()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw Bl=null,e})}let Bl=null;function bk(t){return Bl=Bl||wk(t),Bl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=new va(5e3,15e3),Tk="__/auth/iframe",Ik="emulator/auth/iframe",Nk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function kk(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ap(e,Ik):`https://${t.config.authDomain}/${Tk}`,r={apiKey:e.apiKey,appName:t.name,v:hs},s=Sk.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${xa(r).slice(1)}`}async function Ck(t){const e=await bk(t),n=pn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:kk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Nk,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),c=pn().setTimeout(()=>{i(o)},Ek.get());function u(){pn().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ak=500,jk=600,Pk="_blank",Dk="http://localhost";class K0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ok(t,e,n,r=Ak,s=jk){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Rk),{width:r.toString(),height:s.toString(),top:i,left:o}),d=ft().toLowerCase();n&&(c=z_(d)?Pk:n),F_(d)&&(e=e||Dk,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[E,S])=>`${m}${E}=${S},`,"");if(iS(d)&&c!=="_self")return Lk(e||"",c),new K0(null);const g=window.open(e||"",c,f);Y(g,t,"popup-blocked");try{g.focus()}catch{}return new K0(g)}function Lk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk="__/auth/handler",Vk="emulator/auth/handler",Uk=encodeURIComponent("fac");async function G0(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hs,eventId:s};if(e instanceof X_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",SI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof _a){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await t._getAppCheckToken(),d=u?`#${Uk}=${encodeURIComponent(u)}`:"";return`${Fk(t)}?${xa(c).slice(1)}${d}`}function Fk({config:t}){return t.emulator?ap(t,Vk):`https://${t.authDomain}/${Mk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="webStorageSupport";class Bk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=r1,this._completeRedirectFn=dk,this._overrideRedirectResult=lk}async _openPopup(e,n,r,s){var i;Vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await G0(e,n,r,Lh(),s);return Ok(e,o,hp())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await G0(e,n,r,Lh(),s);return qS(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ck(e),r=new fk(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Id,{type:Id},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Id];o!==void 0&&n(!!o),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return K_()||B_()||cp()}}const zk=Bk;var Q0="@firebase/auth",Y0="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Wk(t){Zr(new wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:G_(t)},d=new dS(r,s,i,u);return _S(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new wr("auth-internal",e=>{const n=bi(e.getProvider("auth").getImmediate());return(r=>new $k(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(Q0,Y0,qk(t)),hn(Q0,Y0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hk=5*60,Kk=T_("authIdTokenMaxAge")||Hk;let X0=null;const Gk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Kk)return;const s=n==null?void 0:n.token;X0!==s&&(X0=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Qk(t=sp()){const e=eu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=vS(t,{popupRedirectResolver:zk,persistence:[ZS,BS,r1]}),r=T_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Gk(i.toString());MS(n,o,()=>o(n.currentUser)),LS(n,c=>o(c))}}const s=w_("auth");return s&&wS(n,`http://${s}`),n}function Yk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}hS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Yk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Wk("Browser");var J0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hr,u1;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function b(){}b.prototype=y.prototype,w.D=y.prototype,w.prototype=new b,w.prototype.constructor=w,w.C=function(N,A,C){for(var I=Array(arguments.length-2),de=2;de<arguments.length;de++)I[de-2]=arguments[de];return y.prototype[A].apply(N,I)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,b){b||(b=0);var N=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)N[A]=y.charCodeAt(b++)|y.charCodeAt(b++)<<8|y.charCodeAt(b++)<<16|y.charCodeAt(b++)<<24;else for(A=0;16>A;++A)N[A]=y[b++]|y[b++]<<8|y[b++]<<16|y[b++]<<24;y=w.g[0],b=w.g[1],A=w.g[2];var C=w.g[3],I=y+(C^b&(A^C))+N[0]+3614090360&4294967295;y=b+(I<<7&4294967295|I>>>25),I=C+(A^y&(b^A))+N[1]+3905402710&4294967295,C=y+(I<<12&4294967295|I>>>20),I=A+(b^C&(y^b))+N[2]+606105819&4294967295,A=C+(I<<17&4294967295|I>>>15),I=b+(y^A&(C^y))+N[3]+3250441966&4294967295,b=A+(I<<22&4294967295|I>>>10),I=y+(C^b&(A^C))+N[4]+4118548399&4294967295,y=b+(I<<7&4294967295|I>>>25),I=C+(A^y&(b^A))+N[5]+1200080426&4294967295,C=y+(I<<12&4294967295|I>>>20),I=A+(b^C&(y^b))+N[6]+2821735955&4294967295,A=C+(I<<17&4294967295|I>>>15),I=b+(y^A&(C^y))+N[7]+4249261313&4294967295,b=A+(I<<22&4294967295|I>>>10),I=y+(C^b&(A^C))+N[8]+1770035416&4294967295,y=b+(I<<7&4294967295|I>>>25),I=C+(A^y&(b^A))+N[9]+2336552879&4294967295,C=y+(I<<12&4294967295|I>>>20),I=A+(b^C&(y^b))+N[10]+4294925233&4294967295,A=C+(I<<17&4294967295|I>>>15),I=b+(y^A&(C^y))+N[11]+2304563134&4294967295,b=A+(I<<22&4294967295|I>>>10),I=y+(C^b&(A^C))+N[12]+1804603682&4294967295,y=b+(I<<7&4294967295|I>>>25),I=C+(A^y&(b^A))+N[13]+4254626195&4294967295,C=y+(I<<12&4294967295|I>>>20),I=A+(b^C&(y^b))+N[14]+2792965006&4294967295,A=C+(I<<17&4294967295|I>>>15),I=b+(y^A&(C^y))+N[15]+1236535329&4294967295,b=A+(I<<22&4294967295|I>>>10),I=y+(A^C&(b^A))+N[1]+4129170786&4294967295,y=b+(I<<5&4294967295|I>>>27),I=C+(b^A&(y^b))+N[6]+3225465664&4294967295,C=y+(I<<9&4294967295|I>>>23),I=A+(y^b&(C^y))+N[11]+643717713&4294967295,A=C+(I<<14&4294967295|I>>>18),I=b+(C^y&(A^C))+N[0]+3921069994&4294967295,b=A+(I<<20&4294967295|I>>>12),I=y+(A^C&(b^A))+N[5]+3593408605&4294967295,y=b+(I<<5&4294967295|I>>>27),I=C+(b^A&(y^b))+N[10]+38016083&4294967295,C=y+(I<<9&4294967295|I>>>23),I=A+(y^b&(C^y))+N[15]+3634488961&4294967295,A=C+(I<<14&4294967295|I>>>18),I=b+(C^y&(A^C))+N[4]+3889429448&4294967295,b=A+(I<<20&4294967295|I>>>12),I=y+(A^C&(b^A))+N[9]+568446438&4294967295,y=b+(I<<5&4294967295|I>>>27),I=C+(b^A&(y^b))+N[14]+3275163606&4294967295,C=y+(I<<9&4294967295|I>>>23),I=A+(y^b&(C^y))+N[3]+4107603335&4294967295,A=C+(I<<14&4294967295|I>>>18),I=b+(C^y&(A^C))+N[8]+1163531501&4294967295,b=A+(I<<20&4294967295|I>>>12),I=y+(A^C&(b^A))+N[13]+2850285829&4294967295,y=b+(I<<5&4294967295|I>>>27),I=C+(b^A&(y^b))+N[2]+4243563512&4294967295,C=y+(I<<9&4294967295|I>>>23),I=A+(y^b&(C^y))+N[7]+1735328473&4294967295,A=C+(I<<14&4294967295|I>>>18),I=b+(C^y&(A^C))+N[12]+2368359562&4294967295,b=A+(I<<20&4294967295|I>>>12),I=y+(b^A^C)+N[5]+4294588738&4294967295,y=b+(I<<4&4294967295|I>>>28),I=C+(y^b^A)+N[8]+2272392833&4294967295,C=y+(I<<11&4294967295|I>>>21),I=A+(C^y^b)+N[11]+1839030562&4294967295,A=C+(I<<16&4294967295|I>>>16),I=b+(A^C^y)+N[14]+4259657740&4294967295,b=A+(I<<23&4294967295|I>>>9),I=y+(b^A^C)+N[1]+2763975236&4294967295,y=b+(I<<4&4294967295|I>>>28),I=C+(y^b^A)+N[4]+1272893353&4294967295,C=y+(I<<11&4294967295|I>>>21),I=A+(C^y^b)+N[7]+4139469664&4294967295,A=C+(I<<16&4294967295|I>>>16),I=b+(A^C^y)+N[10]+3200236656&4294967295,b=A+(I<<23&4294967295|I>>>9),I=y+(b^A^C)+N[13]+681279174&4294967295,y=b+(I<<4&4294967295|I>>>28),I=C+(y^b^A)+N[0]+3936430074&4294967295,C=y+(I<<11&4294967295|I>>>21),I=A+(C^y^b)+N[3]+3572445317&4294967295,A=C+(I<<16&4294967295|I>>>16),I=b+(A^C^y)+N[6]+76029189&4294967295,b=A+(I<<23&4294967295|I>>>9),I=y+(b^A^C)+N[9]+3654602809&4294967295,y=b+(I<<4&4294967295|I>>>28),I=C+(y^b^A)+N[12]+3873151461&4294967295,C=y+(I<<11&4294967295|I>>>21),I=A+(C^y^b)+N[15]+530742520&4294967295,A=C+(I<<16&4294967295|I>>>16),I=b+(A^C^y)+N[2]+3299628645&4294967295,b=A+(I<<23&4294967295|I>>>9),I=y+(A^(b|~C))+N[0]+4096336452&4294967295,y=b+(I<<6&4294967295|I>>>26),I=C+(b^(y|~A))+N[7]+1126891415&4294967295,C=y+(I<<10&4294967295|I>>>22),I=A+(y^(C|~b))+N[14]+2878612391&4294967295,A=C+(I<<15&4294967295|I>>>17),I=b+(C^(A|~y))+N[5]+4237533241&4294967295,b=A+(I<<21&4294967295|I>>>11),I=y+(A^(b|~C))+N[12]+1700485571&4294967295,y=b+(I<<6&4294967295|I>>>26),I=C+(b^(y|~A))+N[3]+2399980690&4294967295,C=y+(I<<10&4294967295|I>>>22),I=A+(y^(C|~b))+N[10]+4293915773&4294967295,A=C+(I<<15&4294967295|I>>>17),I=b+(C^(A|~y))+N[1]+2240044497&4294967295,b=A+(I<<21&4294967295|I>>>11),I=y+(A^(b|~C))+N[8]+1873313359&4294967295,y=b+(I<<6&4294967295|I>>>26),I=C+(b^(y|~A))+N[15]+4264355552&4294967295,C=y+(I<<10&4294967295|I>>>22),I=A+(y^(C|~b))+N[6]+2734768916&4294967295,A=C+(I<<15&4294967295|I>>>17),I=b+(C^(A|~y))+N[13]+1309151649&4294967295,b=A+(I<<21&4294967295|I>>>11),I=y+(A^(b|~C))+N[4]+4149444226&4294967295,y=b+(I<<6&4294967295|I>>>26),I=C+(b^(y|~A))+N[11]+3174756917&4294967295,C=y+(I<<10&4294967295|I>>>22),I=A+(y^(C|~b))+N[2]+718787259&4294967295,A=C+(I<<15&4294967295|I>>>17),I=b+(C^(A|~y))+N[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(A+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+A&4294967295,w.g[3]=w.g[3]+C&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var b=y-this.blockSize,N=this.B,A=this.h,C=0;C<y;){if(A==0)for(;C<=b;)s(this,w,C),C+=this.blockSize;if(typeof w=="string"){for(;C<y;)if(N[A++]=w.charCodeAt(C++),A==this.blockSize){s(this,N),A=0;break}}else for(;C<y;)if(N[A++]=w[C++],A==this.blockSize){s(this,N),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var b=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=b&255,b/=256;for(this.u(w),w=Array(16),y=b=0;4>y;++y)for(var N=0;32>N;N+=8)w[b++]=this.g[y]>>>N&255;return w};function i(w,y){var b=c;return Object.prototype.hasOwnProperty.call(b,w)?b[w]:b[w]=y(w)}function o(w,y){this.h=y;for(var b=[],N=!0,A=w.length-1;0<=A;A--){var C=w[A]|0;N&&C==y||(b[A]=C,N=!1)}this.g=b}var c={};function u(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return k(d(-w));for(var y=[],b=1,N=0;w>=b;N++)y[N]=w/b|0,b*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return k(f(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var b=d(Math.pow(y,8)),N=g,A=0;A<w.length;A+=8){var C=Math.min(8,w.length-A),I=parseInt(w.substring(A,A+C),y);8>C?(C=d(Math.pow(y,C)),N=N.j(C).add(d(I))):(N=N.j(b),N=N.add(d(I)))}return N}var g=u(0),m=u(1),E=u(16777216);t=o.prototype,t.m=function(){if(R(this))return-k(this).m();for(var w=0,y=1,b=0;b<this.g.length;b++){var N=this.i(b);w+=(0<=N?N:4294967296+N)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(S(this))return"0";if(R(this))return"-"+k(this).toString(w);for(var y=d(Math.pow(w,6)),b=this,N="";;){var A=j(b,y).g;b=T(b,A.j(y));var C=((0<b.g.length?b.g[0]:b.h)>>>0).toString(w);if(b=A,S(b))return C+N;for(;6>C.length;)C="0"+C;N=C+N}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function S(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function R(w){return w.h==-1}t.l=function(w){return w=T(this,w),R(w)?-1:S(w)?0:1};function k(w){for(var y=w.g.length,b=[],N=0;N<y;N++)b[N]=~w.g[N];return new o(b,~w.h).add(m)}t.abs=function(){return R(this)?k(this):this},t.add=function(w){for(var y=Math.max(this.g.length,w.g.length),b=[],N=0,A=0;A<=y;A++){var C=N+(this.i(A)&65535)+(w.i(A)&65535),I=(C>>>16)+(this.i(A)>>>16)+(w.i(A)>>>16);N=I>>>16,C&=65535,I&=65535,b[A]=I<<16|C}return new o(b,b[b.length-1]&-2147483648?-1:0)};function T(w,y){return w.add(k(y))}t.j=function(w){if(S(this)||S(w))return g;if(R(this))return R(w)?k(this).j(k(w)):k(k(this).j(w));if(R(w))return k(this.j(k(w)));if(0>this.l(E)&&0>w.l(E))return d(this.m()*w.m());for(var y=this.g.length+w.g.length,b=[],N=0;N<2*y;N++)b[N]=0;for(N=0;N<this.g.length;N++)for(var A=0;A<w.g.length;A++){var C=this.i(N)>>>16,I=this.i(N)&65535,de=w.i(A)>>>16,Be=w.i(A)&65535;b[2*N+2*A]+=I*Be,x(b,2*N+2*A),b[2*N+2*A+1]+=C*Be,x(b,2*N+2*A+1),b[2*N+2*A+1]+=I*de,x(b,2*N+2*A+1),b[2*N+2*A+2]+=C*de,x(b,2*N+2*A+2)}for(N=0;N<y;N++)b[N]=b[2*N+1]<<16|b[2*N];for(N=y;N<2*y;N++)b[N]=0;return new o(b,0)};function x(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function _(w,y){this.g=w,this.h=y}function j(w,y){if(S(y))throw Error("division by zero");if(S(w))return new _(g,g);if(R(w))return y=j(k(w),y),new _(k(y.g),k(y.h));if(R(y))return y=j(w,k(y)),new _(k(y.g),y.h);if(30<w.g.length){if(R(w)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var b=m,N=y;0>=N.l(w);)b=M(b),N=M(N);var A=O(b,1),C=O(N,1);for(N=O(N,2),b=O(b,2);!S(N);){var I=C.add(N);0>=I.l(w)&&(A=A.add(b),C=I),N=O(N,1),b=O(b,1)}return y=T(w,A.j(y)),new _(A,y)}for(A=g;0<=w.l(y);){for(b=Math.max(1,Math.floor(w.m()/y.m())),N=Math.ceil(Math.log(b)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),C=d(b),I=C.j(y);R(I)||0<I.l(w);)b-=N,C=d(b),I=C.j(y);S(C)&&(C=m),A=A.add(C),w=T(w,I)}return new _(A,w)}t.A=function(w){return j(this,w).h},t.and=function(w){for(var y=Math.max(this.g.length,w.g.length),b=[],N=0;N<y;N++)b[N]=this.i(N)&w.i(N);return new o(b,this.h&w.h)},t.or=function(w){for(var y=Math.max(this.g.length,w.g.length),b=[],N=0;N<y;N++)b[N]=this.i(N)|w.i(N);return new o(b,this.h|w.h)},t.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),b=[],N=0;N<y;N++)b[N]=this.i(N)^w.i(N);return new o(b,this.h^w.h)};function M(w){for(var y=w.g.length+1,b=[],N=0;N<y;N++)b[N]=w.i(N)<<1|w.i(N-1)>>>31;return new o(b,w.h)}function O(w,y){var b=y>>5;y%=32;for(var N=w.g.length-b,A=[],C=0;C<N;C++)A[C]=0<y?w.i(C+b)>>>y|w.i(C+b+1)<<32-y:w.i(C+b);return new o(A,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,u1=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,Hr=o}).apply(typeof J0<"u"?J0:typeof self<"u"?self:typeof window<"u"?window:{});var pl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var d1,oo,h1,zl,Uh,f1,p1,m1;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof pl=="object"&&pl];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var v=0;v<a.length-1;v++){var P=a[v];if(!(P in p))break e;p=p[P]}a=a[a.length-1],v=p[a],h=h(v),h!=v&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,v=!1,P={next:function(){if(!v&&p<a.length){var D=p++;return{value:h(D,a[D]),done:!1}}return v=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function u(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function g(a,h,p){if(!a)throw Error();if(2<arguments.length){var v=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,v),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function m(a,h,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,m.apply(null,arguments)}function E(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var v=p.slice();return v.push.apply(v,arguments),a.apply(this,v)}}function S(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(v,P,D){for(var B=Array(arguments.length-2),me=2;me<arguments.length;me++)B[me-2]=arguments[me];return h.prototype[P].apply(v,B)}}function R(a){const h=a.length;if(0<h){const p=Array(h);for(let v=0;v<h;v++)p[v]=a[v];return p}return[]}function k(a,h){for(let p=1;p<arguments.length;p++){const v=arguments[p];if(u(v)){const P=a.length||0,D=v.length||0;a.length=P+D;for(let B=0;B<D;B++)a[P+B]=v[B]}else a.push(v)}}class T{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function x(a){return/^[\s\xa0]*$/.test(a)}function _(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function j(a){return j[" "](a),a}j[" "]=function(){};var M=_().indexOf("Gecko")!=-1&&!(_().toLowerCase().indexOf("webkit")!=-1&&_().indexOf("Edge")==-1)&&!(_().indexOf("Trident")!=-1||_().indexOf("MSIE")!=-1)&&_().indexOf("Edge")==-1;function O(a,h,p){for(const v in a)h.call(p,a[v],v,a)}function w(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function y(a){const h={};for(const p in a)h[p]=a[p];return h}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(a,h){let p,v;for(let P=1;P<arguments.length;P++){v=arguments[P];for(p in v)a[p]=v[p];for(let D=0;D<b.length;D++)p=b[D],Object.prototype.hasOwnProperty.call(v,p)&&(a[p]=v[p])}}function A(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function C(a){c.setTimeout(()=>{throw a},0)}function I(){var a=X;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class de{constructor(){this.h=this.g=null}add(h,p){const v=Be.get();v.set(h,p),this.h?this.h.next=v:this.g=v,this.h=v}}var Be=new T(()=>new sn,a=>a.reset());class sn{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ht,z=!1,X=new de,te=()=>{const a=c.Promise.resolve(void 0);Ht=()=>{a.then(xe)}};var xe=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(p){C(p)}var h=Be;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}z=!1};function he(){this.s=this.s,this.C=this.C}he.prototype.s=!1,he.prototype.ma=function(){this.s||(this.s=!0,this.N())},he.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function q(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};var ie=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,h),c.removeEventListener("test",p,h)}catch{}return a}();function ze(a,h){if(q.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,v=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(M){e:{try{j(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,v?(this.clientX=v.clientX!==void 0?v.clientX:v.pageX,this.clientY=v.clientY!==void 0?v.clientY:v.pageY,this.screenX=v.screenX||0,this.screenY=v.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:je[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ze.aa.h.call(this)}}S(ze,q);var je={2:"touch",3:"pen",4:"mouse"};ze.prototype.h=function(){ze.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ct="closure_listenable_"+(1e6*Math.random()|0),a2=0;function l2(a,h,p,v,P){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!v,this.ha=P,this.key=++a2,this.da=this.fa=!1}function ja(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Pa(a){this.src=a,this.g={},this.h=0}Pa.prototype.add=function(a,h,p,v,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var B=Tu(a,h,v,P);return-1<B?(h=a[B],p||(h.fa=!1)):(h=new l2(h,this.src,D,!!v,P),h.fa=p,a.push(h)),h};function Eu(a,h){var p=h.type;if(p in a.g){var v=a.g[p],P=Array.prototype.indexOf.call(v,h,void 0),D;(D=0<=P)&&Array.prototype.splice.call(v,P,1),D&&(ja(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function Tu(a,h,p,v){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==v)return P}return-1}var Iu="closure_lm_"+(1e6*Math.random()|0),Nu={};function sm(a,h,p,v,P){if(Array.isArray(h)){for(var D=0;D<h.length;D++)sm(a,h[D],p,v,P);return null}return p=am(p),a&&a[Ct]?a.K(h,p,d(v)?!!v.capture:!1,P):c2(a,h,p,!1,v,P)}function c2(a,h,p,v,P,D){if(!h)throw Error("Invalid event type");var B=d(P)?!!P.capture:!!P,me=ku(a);if(me||(a[Iu]=me=new Pa(a)),p=me.add(h,p,v,B,D),p.proxy)return p;if(v=u2(),p.proxy=v,v.src=a,v.listener=p,a.addEventListener)ie||(P=B),P===void 0&&(P=!1),a.addEventListener(h.toString(),v,P);else if(a.attachEvent)a.attachEvent(om(h.toString()),v);else if(a.addListener&&a.removeListener)a.addListener(v);else throw Error("addEventListener and attachEvent are unavailable.");return p}function u2(){function a(p){return h.call(a.src,a.listener,p)}const h=d2;return a}function im(a,h,p,v,P){if(Array.isArray(h))for(var D=0;D<h.length;D++)im(a,h[D],p,v,P);else v=d(v)?!!v.capture:!!v,p=am(p),a&&a[Ct]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],p=Tu(D,p,v,P),-1<p&&(ja(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=ku(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Tu(h,p,v,P)),(p=-1<a?h[a]:null)&&Su(p))}function Su(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ct])Eu(h.i,a);else{var p=a.type,v=a.proxy;h.removeEventListener?h.removeEventListener(p,v,a.capture):h.detachEvent?h.detachEvent(om(p),v):h.addListener&&h.removeListener&&h.removeListener(v),(p=ku(h))?(Eu(p,a),p.h==0&&(p.src=null,h[Iu]=null)):ja(a)}}}function om(a){return a in Nu?Nu[a]:Nu[a]="on"+a}function d2(a,h){if(a.da)a=!0;else{h=new ze(h,this);var p=a.listener,v=a.ha||a.src;a.fa&&Su(a),a=p.call(v,h)}return a}function ku(a){return a=a[Iu],a instanceof Pa?a:null}var Cu="__closure_events_fn_"+(1e9*Math.random()>>>0);function am(a){return typeof a=="function"?a:(a[Cu]||(a[Cu]=function(h){return a.handleEvent(h)}),a[Cu])}function rt(){he.call(this),this.i=new Pa(this),this.M=this,this.F=null}S(rt,he),rt.prototype[Ct]=!0,rt.prototype.removeEventListener=function(a,h,p,v){im(this,a,h,p,v)};function pt(a,h){var p,v=a.F;if(v)for(p=[];v;v=v.F)p.push(v);if(a=a.M,v=h.type||h,typeof h=="string")h=new q(h,a);else if(h instanceof q)h.target=h.target||a;else{var P=h;h=new q(v,a),N(h,P)}if(P=!0,p)for(var D=p.length-1;0<=D;D--){var B=h.g=p[D];P=Da(B,v,!0,h)&&P}if(B=h.g=a,P=Da(B,v,!0,h)&&P,P=Da(B,v,!1,h)&&P,p)for(D=0;D<p.length;D++)B=h.g=p[D],P=Da(B,v,!1,h)&&P}rt.prototype.N=function(){if(rt.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],v=0;v<p.length;v++)ja(p[v]);delete a.g[h],a.h--}}this.F=null},rt.prototype.K=function(a,h,p,v){return this.i.add(String(a),h,!1,p,v)},rt.prototype.L=function(a,h,p,v){return this.i.add(String(a),h,!0,p,v)};function Da(a,h,p,v){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,D=0;D<h.length;++D){var B=h[D];if(B&&!B.da&&B.capture==p){var me=B.listener,Qe=B.ha||B.src;B.fa&&Eu(a.i,B),P=me.call(Qe,v)!==!1&&P}}return P&&!v.defaultPrevented}function lm(a,h,p){if(typeof a=="function")p&&(a=m(a,p));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function cm(a){a.g=lm(()=>{a.g=null,a.i&&(a.i=!1,cm(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class h2 extends he{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:cm(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ci(a){he.call(this),this.h=a,this.g={}}S(Ci,he);var um=[];function dm(a){O(a.g,function(h,p){this.g.hasOwnProperty(p)&&Su(h)},a),a.g={}}Ci.prototype.N=function(){Ci.aa.N.call(this),dm(this)},Ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ru=c.JSON.stringify,f2=c.JSON.parse,p2=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Au(){}Au.prototype.h=null;function hm(a){return a.h||(a.h=a.i())}function fm(){}var Ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ju(){q.call(this,"d")}S(ju,q);function Pu(){q.call(this,"c")}S(Pu,q);var Rr={},pm=null;function Oa(){return pm=pm||new rt}Rr.La="serverreachability";function mm(a){q.call(this,Rr.La,a)}S(mm,q);function Ai(a){const h=Oa();pt(h,new mm(h))}Rr.STAT_EVENT="statevent";function gm(a,h){q.call(this,Rr.STAT_EVENT,a),this.stat=h}S(gm,q);function mt(a){const h=Oa();pt(h,new gm(h,a))}Rr.Ma="timingevent";function ym(a,h){q.call(this,Rr.Ma,a),this.size=h}S(ym,q);function ji(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Pi(){this.g=!0}Pi.prototype.xa=function(){this.g=!1};function m2(a,h,p,v,P,D){a.info(function(){if(a.g)if(D)for(var B="",me=D.split("&"),Qe=0;Qe<me.length;Qe++){var ce=me[Qe].split("=");if(1<ce.length){var st=ce[0];ce=ce[1];var it=st.split("_");B=2<=it.length&&it[1]=="type"?B+(st+"="+ce+"&"):B+(st+"=redacted&")}}else B=null;else B=D;return"XMLHTTP REQ ("+v+") [attempt "+P+"]: "+h+`
`+p+`
`+B})}function g2(a,h,p,v,P,D,B){a.info(function(){return"XMLHTTP RESP ("+v+") [ attempt "+P+"]: "+h+`
`+p+`
`+D+" "+B})}function xs(a,h,p,v){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+x2(a,p)+(v?" "+v:"")})}function y2(a,h){a.info(function(){return"TIMEOUT: "+h})}Pi.prototype.info=function(){};function x2(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var v=p[a];if(!(2>v.length)){var P=v[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var B=1;B<P.length;B++)P[B]=""}}}}return Ru(p)}catch{return h}}var La={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xm={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Du;function Ma(){}S(Ma,Au),Ma.prototype.g=function(){return new XMLHttpRequest},Ma.prototype.i=function(){return{}},Du=new Ma;function zn(a,h,p,v){this.j=a,this.i=h,this.l=p,this.R=v||1,this.U=new Ci(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new vm}function vm(){this.i=null,this.g="",this.h=!1}var _m={},Ou={};function Lu(a,h,p){a.L=1,a.v=Ba(vn(h)),a.m=p,a.P=!0,wm(a,null)}function wm(a,h){a.F=Date.now(),Va(a),a.A=vn(a.v);var p=a.A,v=a.R;Array.isArray(v)||(v=[String(v)]),Om(p.i,"t",v),a.C=0,p=a.j.J,a.h=new vm,a.g=Zm(a.j,p?h:null,!a.m),0<a.O&&(a.M=new h2(m(a.Y,a,a.g),a.O)),h=a.U,p=a.g,v=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(um[0]=P.toString()),P=um);for(var D=0;D<P.length;D++){var B=sm(p,P[D],v||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Ai(),m2(a.i,a.u,a.A,a.l,a.R,a.m)}zn.prototype.ca=function(a){a=a.target;const h=this.M;h&&_n(a)==3?h.j():this.Y(a)},zn.prototype.Y=function(a){try{if(a==this.g)e:{const it=_n(this.g);var h=this.g.Ba();const ws=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||zm(this.g)))){this.J||it!=4||h==7||(h==8||0>=ws?Ai(3):Ai(2)),Mu(this);var p=this.g.Z();this.X=p;t:if(bm(this)){var v=zm(this.g);a="";var P=v.length,D=_n(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ar(this),Di(this);var B="";break t}this.h.i=new c.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(v[h],{stream:!(D&&h==P-1)});v.length=0,this.h.g+=a,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=p==200,g2(this.i,this.u,this.A,this.l,this.R,it,p),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Qe=this.g;if((me=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(me)){var ce=me;break t}}ce=null}if(p=ce)xs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vu(this,p);else{this.o=!1,this.s=3,mt(12),Ar(this),Di(this);break e}}if(this.P){p=!0;let Kt;for(;!this.J&&this.C<B.length;)if(Kt=v2(this,B),Kt==Ou){it==4&&(this.s=4,mt(14),p=!1),xs(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==_m){this.s=4,mt(15),xs(this.i,this.l,B,"[Invalid Chunk]"),p=!1;break}else xs(this.i,this.l,Kt,null),Vu(this,Kt);if(bm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||B.length!=0||this.h.h||(this.s=1,mt(16),p=!1),this.o=this.o&&p,!p)xs(this.i,this.l,B,"[Invalid Chunked Response]"),Ar(this),Di(this);else if(0<B.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),qu(st),st.M=!0,mt(11))}}else xs(this.i,this.l,B,null),Vu(this,B);it==4&&Ar(this),this.o&&!this.J&&(it==4?Qm(this.j,this):(this.o=!1,Va(this)))}else L2(this.g),p==400&&0<B.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),Ar(this),Di(this)}}}catch{}finally{}};function bm(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function v2(a,h){var p=a.C,v=h.indexOf(`
`,p);return v==-1?Ou:(p=Number(h.substring(p,v)),isNaN(p)?_m:(v+=1,v+p>h.length?Ou:(h=h.slice(v,v+p),a.C=v+p,h)))}zn.prototype.cancel=function(){this.J=!0,Ar(this)};function Va(a){a.S=Date.now()+a.I,Em(a,a.I)}function Em(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ji(m(a.ba,a),h)}function Mu(a){a.B&&(c.clearTimeout(a.B),a.B=null)}zn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(y2(this.i,this.A),this.L!=2&&(Ai(),mt(17)),Ar(this),this.s=2,Di(this)):Em(this,this.S-a)};function Di(a){a.j.G==0||a.J||Qm(a.j,a)}function Ar(a){Mu(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,dm(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Vu(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||Uu(p.h,a))){if(!a.K&&Uu(p.h,a)&&p.G==3){try{var v=p.Da.g.parse(h)}catch{v=null}if(Array.isArray(v)&&v.length==3){var P=v;if(P[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)Ka(p),Wa(p);else break e;$u(p),mt(18)}}else p.za=P[1],0<p.za-p.T&&37500>P[2]&&p.F&&p.v==0&&!p.C&&(p.C=ji(m(p.Za,p),6e3));if(1>=Nm(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Pr(p,11)}else if((a.K||p.g==a)&&Ka(p),!x(h))for(P=p.Da.g.parse(h),h=0;h<P.length;h++){let ce=P[h];if(p.T=ce[0],ce=ce[1],p.G==2)if(ce[0]=="c"){p.K=ce[1],p.ia=ce[2];const st=ce[3];st!=null&&(p.la=st,p.j.info("VER="+p.la));const it=ce[4];it!=null&&(p.Aa=it,p.j.info("SVER="+p.Aa));const ws=ce[5];ws!=null&&typeof ws=="number"&&0<ws&&(v=1.5*ws,p.L=v,p.j.info("backChannelRequestTimeoutMs_="+v)),v=p;const Kt=a.g;if(Kt){const Qa=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qa){var D=v.h;D.g||Qa.indexOf("spdy")==-1&&Qa.indexOf("quic")==-1&&Qa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Fu(D,D.h),D.h=null))}if(v.D){const Wu=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Wu&&(v.ya=Wu,ve(v.I,v.D,Wu))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),v=p;var B=a;if(v.qa=Jm(v,v.J?v.ia:null,v.W),B.K){Sm(v.h,B);var me=B,Qe=v.L;Qe&&(me.I=Qe),me.B&&(Mu(me),Va(me)),v.g=B}else Km(v);0<p.i.length&&Ha(p)}else ce[0]!="stop"&&ce[0]!="close"||Pr(p,7);else p.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Pr(p,7):zu(p):ce[0]!="noop"&&p.l&&p.l.ta(ce),p.v=0)}}Ai(4)}catch{}}var _2=class{constructor(a,h){this.g=a,this.map=h}};function Tm(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Im(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Nm(a){return a.h?1:a.g?a.g.size:0}function Uu(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Fu(a,h){a.g?a.g.add(h):a.h=h}function Sm(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Tm.prototype.cancel=function(){if(this.i=km(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function km(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return R(a.i)}function w2(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var h=[],p=a.length,v=0;v<p;v++)h.push(a[v]);return h}h=[],p=0;for(v in a)h[p++]=a[v];return h}function b2(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const v in a)h[p++]=v;return h}}}function Cm(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=b2(a),v=w2(a),P=v.length,D=0;D<P;D++)h.call(void 0,v[D],p&&p[D],a)}var Rm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function E2(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var v=a[p].indexOf("="),P=null;if(0<=v){var D=a[p].substring(0,v);P=a[p].substring(v+1)}else D=a[p];h(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function jr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof jr){this.h=a.h,Ua(this,a.j),this.o=a.o,this.g=a.g,Fa(this,a.s),this.l=a.l;var h=a.i,p=new Mi;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),Am(this,p),this.m=a.m}else a&&(h=String(a).match(Rm))?(this.h=!1,Ua(this,h[1]||"",!0),this.o=Oi(h[2]||""),this.g=Oi(h[3]||"",!0),Fa(this,h[4]),this.l=Oi(h[5]||"",!0),Am(this,h[6]||"",!0),this.m=Oi(h[7]||"")):(this.h=!1,this.i=new Mi(null,this.h))}jr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Li(h,jm,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Li(h,jm,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(Li(p,p.charAt(0)=="/"?N2:I2,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",Li(p,k2)),a.join("")};function vn(a){return new jr(a)}function Ua(a,h,p){a.j=p?Oi(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fa(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Am(a,h,p){h instanceof Mi?(a.i=h,C2(a.i,a.h)):(p||(h=Li(h,S2)),a.i=new Mi(h,a.h))}function ve(a,h,p){a.i.set(h,p)}function Ba(a){return ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Oi(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Li(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,T2),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function T2(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var jm=/[#\/\?@]/g,I2=/[#\?:]/g,N2=/[#\?]/g,S2=/[#\?@]/g,k2=/#/g;function Mi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function $n(a){a.g||(a.g=new Map,a.h=0,a.i&&E2(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Mi.prototype,t.add=function(a,h){$n(this),this.i=null,a=vs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Pm(a,h){$n(a),h=vs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Dm(a,h){return $n(a),h=vs(a,h),a.g.has(h)}t.forEach=function(a,h){$n(this),this.g.forEach(function(p,v){p.forEach(function(P){a.call(h,P,v,this)},this)},this)},t.na=function(){$n(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let v=0;v<h.length;v++){const P=a[v];for(let D=0;D<P.length;D++)p.push(h[v])}return p},t.V=function(a){$n(this);let h=[];if(typeof a=="string")Dm(this,a)&&(h=h.concat(this.g.get(vs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return $n(this),this.i=null,a=vs(this,a),Dm(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Om(a,h,p){Pm(a,h),0<p.length&&(a.i=null,a.g.set(vs(a,h),R(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var v=h[p];const D=encodeURIComponent(String(v)),B=this.V(v);for(v=0;v<B.length;v++){var P=D;B[v]!==""&&(P+="="+encodeURIComponent(String(B[v]))),a.push(P)}}return this.i=a.join("&")};function vs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function C2(a,h){h&&!a.j&&($n(a),a.i=null,a.g.forEach(function(p,v){var P=v.toLowerCase();v!=P&&(Pm(this,v),Om(this,P,p))},a)),a.j=h}function R2(a,h){const p=new Pi;if(c.Image){const v=new Image;v.onload=E(qn,p,"TestLoadImage: loaded",!0,h,v),v.onerror=E(qn,p,"TestLoadImage: error",!1,h,v),v.onabort=E(qn,p,"TestLoadImage: abort",!1,h,v),v.ontimeout=E(qn,p,"TestLoadImage: timeout",!1,h,v),c.setTimeout(function(){v.ontimeout&&v.ontimeout()},1e4),v.src=a}else h(!1)}function A2(a,h){const p=new Pi,v=new AbortController,P=setTimeout(()=>{v.abort(),qn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:v.signal}).then(D=>{clearTimeout(P),D.ok?qn(p,"TestPingServer: ok",!0,h):qn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),qn(p,"TestPingServer: error",!1,h)})}function qn(a,h,p,v,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),v(p)}catch{}}function j2(){this.g=new p2}function P2(a,h,p){const v=p||"";try{Cm(a,function(P,D){let B=P;d(P)&&(B=Ru(P)),h.push(v+D+"="+encodeURIComponent(B))})}catch(P){throw h.push(v+"type="+encodeURIComponent("_badmap")),P}}function za(a){this.l=a.Ub||null,this.j=a.eb||!1}S(za,Au),za.prototype.g=function(){return new $a(this.l,this.j)},za.prototype.i=function(a){return function(){return a}}({});function $a(a,h){rt.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S($a,rt),t=$a.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Ui(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Vi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ui(this)),this.g&&(this.readyState=3,Ui(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lm(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Lm(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Vi(this):Ui(this),this.readyState==3&&Lm(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Vi(this))},t.Qa=function(a){this.g&&(this.response=a,Vi(this))},t.ga=function(){this.g&&Vi(this)};function Vi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ui(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function Ui(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty($a.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Mm(a){let h="";return O(a,function(p,v){h+=v,h+=":",h+=p,h+=`\r
`}),h}function Bu(a,h,p){e:{for(v in p){var v=!1;break e}v=!0}v||(p=Mm(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):ve(a,h,p))}function Re(a){rt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(Re,rt);var D2=/^https?$/i,O2=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,v){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Du.g(),this.v=this.o?hm(this.o):hm(Du),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Vm(this,D);return}if(a=p||"",p=new Map(this.headers),v)if(Object.getPrototypeOf(v)===Object.prototype)for(var P in v)p.set(P,v[P]);else if(typeof v.keys=="function"&&typeof v.get=="function")for(const D of v.keys())p.set(D,v.get(D));else throw Error("Unknown input type for opt_headers: "+String(v));v=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(O2,h,void 0))||v||P||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of p)this.g.setRequestHeader(D,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bm(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Vm(this,D)}};function Vm(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Um(a),qa(a)}function Um(a){a.A||(a.A=!0,pt(a,"complete"),pt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,pt(this,"complete"),pt(this,"abort"),qa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),qa(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Fm(this):this.bb())},t.bb=function(){Fm(this)};function Fm(a){if(a.h&&typeof o<"u"&&(!a.v[1]||_n(a)!=4||a.Z()!=2)){if(a.u&&_n(a)==4)lm(a.Ea,0,a);else if(pt(a,"readystatechange"),_n(a)==4){a.h=!1;try{const B=a.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var v;if(v=B===0){var P=String(a.D).match(Rm)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),v=!D2.test(P?P.toLowerCase():"")}p=v}if(p)pt(a,"complete"),pt(a,"success");else{a.m=6;try{var D=2<_n(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Um(a)}}finally{qa(a)}}}}function qa(a,h){if(a.g){Bm(a);const p=a.g,v=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||pt(a,"ready");try{p.onreadystatechange=v}catch{}}}function Bm(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function _n(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<_n(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),f2(h)}};function zm(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function L2(a){const h={};a=(a.g&&2<=_n(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let v=0;v<a.length;v++){if(x(a[v]))continue;var p=A(a[v]);const P=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[P]||[];h[P]=D,D.push(p)}w(h,function(v){return v.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fi(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function $m(a){this.Aa=0,this.i=[],this.j=new Pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fi("baseRetryDelayMs",5e3,a),this.cb=Fi("retryDelaySeedMs",1e4,a),this.Wa=Fi("forwardChannelMaxRetries",2,a),this.wa=Fi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Tm(a&&a.concurrentRequestLimit),this.Da=new j2,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=$m.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,v){mt(0),this.W=a,this.H=h||{},p&&v!==void 0&&(this.H.OSID=p,this.H.OAID=v),this.F=this.X,this.I=Jm(this,null,this.W),Ha(this)};function zu(a){if(qm(a),a.G==3){var h=a.U++,p=vn(a.I);if(ve(p,"SID",a.K),ve(p,"RID",h),ve(p,"TYPE","terminate"),Bi(a,p),h=new zn(a,a.j,h),h.L=2,h.v=Ba(vn(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=h.v,p=!0),p||(h.g=Zm(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Va(h)}Xm(a)}function Wa(a){a.g&&(qu(a),a.g.cancel(),a.g=null)}function qm(a){Wa(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ka(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Ha(a){if(!Im(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ht||te(),z||(Ht(),z=!0),X.add(h,a),a.B=0}}function M2(a,h){return Nm(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ji(m(a.Ga,a,h),Ym(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new zn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),N(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var v=this.i[p];if("__data__"in v.map&&(v=v.map.__data__,typeof v=="string")){v=v.length;break t}v=void 0}if(v===void 0)break;if(h+=v,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=Hm(this,P,h),p=vn(this.I),ve(p,"RID",a),ve(p,"CVER",22),this.D&&ve(p,"X-HTTP-Session-Id",this.D),Bi(this,p),D&&(this.O?h="headers="+encodeURIComponent(String(Mm(D)))+"&"+h:this.m&&Bu(p,this.m,D)),Fu(this.h,P),this.Ua&&ve(p,"TYPE","init"),this.P?(ve(p,"$req",h),ve(p,"SID","null"),P.T=!0,Lu(P,p,null)):Lu(P,p,h),this.G=2}}else this.G==3&&(a?Wm(this,a):this.i.length==0||Im(this.h)||Wm(this))};function Wm(a,h){var p;h?p=h.l:p=a.U++;const v=vn(a.I);ve(v,"SID",a.K),ve(v,"RID",p),ve(v,"AID",a.T),Bi(a,v),a.m&&a.o&&Bu(v,a.m,a.o),p=new zn(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=Hm(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Fu(a.h,p),Lu(p,v,h)}function Bi(a,h){a.H&&O(a.H,function(p,v){ve(h,v,p)}),a.l&&Cm({},function(p,v){ve(h,v,p)})}function Hm(a,h,p){p=Math.min(a.i.length,p);var v=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const B=["count="+p];D==-1?0<p?(D=P[0].g,B.push("ofs="+D)):D=0:B.push("ofs="+D);let me=!0;for(let Qe=0;Qe<p;Qe++){let ce=P[Qe].g;const st=P[Qe].map;if(ce-=D,0>ce)D=Math.max(0,P[Qe].g-100),me=!1;else try{P2(st,B,"req"+ce+"_")}catch{v&&v(st)}}if(me){v=B.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,v}function Km(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ht||te(),z||(Ht(),z=!0),X.add(h,a),a.v=0}}function $u(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ji(m(a.Fa,a),Ym(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Gm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ji(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),Wa(this),Gm(this))};function qu(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Gm(a){a.g=new zn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=vn(a.qa);ve(h,"RID","rpc"),ve(h,"SID",a.K),ve(h,"AID",a.T),ve(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&ve(h,"TO",a.ja),ve(h,"TYPE","xmlhttp"),Bi(a,h),a.m&&a.o&&Bu(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Ba(vn(h)),p.m=null,p.P=!0,wm(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Wa(this),$u(this),mt(19))};function Ka(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Qm(a,h){var p=null;if(a.g==h){Ka(a),qu(a),a.g=null;var v=2}else if(Uu(a.h,h))p=h.D,Sm(a.h,h),v=1;else return;if(a.G!=0){if(h.o)if(v==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;v=Oa(),pt(v,new ym(v,p)),Ha(a)}else Km(a);else if(P=h.s,P==3||P==0&&0<h.X||!(v==1&&M2(a,h)||v==2&&$u(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),P){case 1:Pr(a,5);break;case 4:Pr(a,10);break;case 3:Pr(a,6);break;default:Pr(a,2)}}}function Ym(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Pr(a,h){if(a.j.info("Error code "+h),h==2){var p=m(a.fb,a),v=a.Xa;const P=!v;v=new jr(v||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ua(v,"https"),Ba(v),P?R2(v.toString(),p):A2(v.toString(),p)}else mt(2);a.G=0,a.l&&a.l.sa(h),Xm(a),qm(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Xm(a){if(a.G=0,a.ka=[],a.l){const h=km(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,R(a.i),a.i.length=0),a.l.ra()}}function Jm(a,h,p){var v=p instanceof jr?vn(p):new jr(p);if(v.g!="")h&&(v.g=h+"."+v.g),Fa(v,v.s);else{var P=c.location;v=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var D=new jr(null);v&&Ua(D,v),h&&(D.g=h),P&&Fa(D,P),p&&(D.l=p),v=D}return p=a.D,h=a.ya,p&&h&&ve(v,p,h),ve(v,"VER",a.la),Bi(a,v),v}function Zm(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Re(new za({eb:p})):new Re(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function eg(){}t=eg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ga(){}Ga.prototype.g=function(a,h){return new Rt(a,h)};function Rt(a,h){rt.call(this),this.g=new $m(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!x(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new _s(this)}S(Rt,rt),Rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Rt.prototype.close=function(){zu(this.g)},Rt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=Ru(a),a=p);h.i.push(new _2(h.Ya++,a)),h.G==3&&Ha(h)},Rt.prototype.N=function(){this.g.l=null,delete this.j,zu(this.g),delete this.g,Rt.aa.N.call(this)};function tg(a){ju.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(tg,ju);function ng(){Pu.call(this),this.status=1}S(ng,Pu);function _s(a){this.g=a}S(_s,eg),_s.prototype.ua=function(){pt(this.g,"a")},_s.prototype.ta=function(a){pt(this.g,new tg(a))},_s.prototype.sa=function(a){pt(this.g,new ng)},_s.prototype.ra=function(){pt(this.g,"b")},Ga.prototype.createWebChannel=Ga.prototype.g,Rt.prototype.send=Rt.prototype.o,Rt.prototype.open=Rt.prototype.m,Rt.prototype.close=Rt.prototype.close,m1=function(){return new Ga},p1=function(){return Oa()},f1=Rr,Uh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},La.NO_ERROR=0,La.TIMEOUT=8,La.HTTP_ERROR=6,zl=La,xm.COMPLETE="complete",h1=xm,fm.EventType=Ri,Ri.OPEN="a",Ri.CLOSE="b",Ri.ERROR="c",Ri.MESSAGE="d",rt.prototype.listen=rt.prototype.K,oo=fm,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,d1=Re}).apply(typeof pl<"u"?pl:typeof self<"u"?self:typeof window<"u"?window:{});const Z0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ct=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};ct.UNAUTHENTICATED=new ct(null),ct.GOOGLE_CREDENTIALS=new ct("google-credentials-uid"),ct.FIRST_PARTY=new ct("first-party-uid"),ct.MOCK_USER=new ct("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ti="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts=new np("@firebase/firestore");function Yi(){return ts.logLevel}function K(t,...e){if(ts.logLevel<=se.DEBUG){const n=e.map(pp);ts.debug(`Firestore (${Ti}): ${t}`,...n)}}function Un(t,...e){if(ts.logLevel<=se.ERROR){const n=e.map(pp);ts.error(`Firestore (${Ti}): ${t}`,...n)}}function li(t,...e){if(ts.logLevel<=se.WARN){const n=e.map(pp);ts.warn(`Firestore (${Ti}): ${t}`,...n)}}function pp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Ti}) INTERNAL ASSERTION FAILED: `+t;throw Un(e),new Error(e)}function pe(t,e){t||J()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Xk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ct.UNAUTHENTICATED))}shutdown(){}}class Jk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zk{constructor(e){this.t=e,this.currentUser=ct.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new An;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new An,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new An)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string"),new g1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new ct(e)}}class eC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ct.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new eC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ct.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){pe(this.o===void 0);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.R=n.token,new nC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=sC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function ci(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return We.fromMillis(Date.now())}static fromDate(e){return We.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new We(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new We(0,0))}static max(){return new Z(new We(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ta.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ta?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends ta{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new we(n)}static emptyPath(){return new we([])}}const iC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends ta{construct(e,n,r){return new Je(e,n,r)}static isValidIdentifier(e){return iC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Je(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(n)}static emptyPath(){return new Je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(we.fromString(e))}static fromName(e){return new G(we.fromString(e).popFirst(5))}static empty(){return new G(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new we(e.slice()))}}function oC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new We(n+1,0):new We(n,r));return new br(s,G.empty(),e)}function aC(t){return new br(t.readTime,t.key,-1)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(Z.min(),G.empty(),-1)}static max(){return new br(Z.max(),G.empty(),-1)}}function lC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ba(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==cC)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function dC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ea(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}mp.oe=-1;function iu(t){return t==null}function Tc(t){return t===0&&1/t==-1/0}function hC(t){return typeof t=="number"&&Number.isInteger(t)&&!Tc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ps(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Xe.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Xe.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Xe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ml(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ml(this.root,e,this.comparator,!1)}getReverseIterator(){return new ml(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ml(this.root,e,this.comparator,!0)}}class ml{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Xe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Xe.RED,this.left=s??Xe.EMPTY,this.right=i??Xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Xe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Xe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Xe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Xe.EMPTY=null,Xe.RED=!0,Xe.BLACK=!1;Xe.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Xe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ty(this.data.getIterator())}getIteratorFrom(e){return new ty(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new et(this.comparator);return n.data=e,n}}class ty{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Pt([])}unionWith(e){let n=new et(Je.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Pt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ci(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new v1("Invalid base64 string: "+i):i}}(e);return new nt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new nt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}nt.EMPTY_BYTE_STRING=new nt("");const fC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(t){if(pe(!!t),typeof t=="string"){let e=0;const n=fC.exec(t);if(pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(t.seconds),nanos:De(t.nanos)}}function De(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ns(t){return typeof t=="string"?nt.fromBase64String(t):nt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function yp(t){const e=t.mapValue.fields.__previous_value__;return gp(e)?yp(e):e}function na(t){const e=Er(t.mapValue.fields.__local_write_time__.timestampValue);return new We(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(e,n,r,s,i,o,c,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d}}class ra{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ra("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ra&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl={mapValue:{}};function rs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?gp(t)?4:gC(t)?9007199254740991:mC(t)?10:11:J()}function yn(t,e){if(t===e)return!0;const n=rs(t);if(n!==rs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return na(t).isEqual(na(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Er(s.timestampValue),c=Er(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ns(s.bytesValue).isEqual(ns(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=De(s.doubleValue),c=De(i.doubleValue);return o===c?Tc(o)===Tc(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return ci(t.arrayValue.values||[],e.arrayValue.values||[],yn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ey(o)!==ey(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!yn(o[u],c[u])))return!1;return!0}(t,e);default:return J()}}function sa(t,e){return(t.values||[]).find(n=>yn(n,e))!==void 0}function ui(t,e){if(t===e)return 0;const n=rs(t),r=rs(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=De(i.integerValue||i.doubleValue),u=De(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(t,e);case 3:return ny(t.timestampValue,e.timestampValue);case 4:return ny(na(t),na(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const c=ns(i),u=ns(o);return c.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),u=o.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=ue(c[d],u[d]);if(f!==0)return f}return ue(c.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=ue(De(i.latitude),De(o.latitude));return c!==0?c:ue(De(i.longitude),De(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ry(t.arrayValue,e.arrayValue);case 10:return function(i,o){var c,u,d,f;const g=i.fields||{},m=o.fields||{},E=(c=g.value)===null||c===void 0?void 0:c.arrayValue,S=(u=m.value)===null||u===void 0?void 0:u.arrayValue,R=ue(((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return R!==0?R:ry(E,S)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===gl.mapValue&&o===gl.mapValue)return 0;if(i===gl.mapValue)return 1;if(o===gl.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const m=ue(u[g],f[g]);if(m!==0)return m;const E=ui(c[u[g]],d[f[g]]);if(E!==0)return E}return ue(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J()}}function ny(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=Er(t),r=Er(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function ry(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ui(n[s],r[s]);if(i)return i}return ue(n.length,r.length)}function di(t){return Fh(t)}function Fh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ns(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fh(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fh(n.fields[o])}`;return s+"}"}(t.mapValue):J()}function sy(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Bh(t){return!!t&&"integerValue"in t}function xp(t){return!!t&&"arrayValue"in t}function iy(t){return!!t&&"nullValue"in t}function oy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function $l(t){return!!t&&"mapValue"in t}function mC(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function To(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ps(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=To(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=To(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!$l(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=To(n)}setAll(e){let n=Je.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=To(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());$l(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return yn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];$l(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ps(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(To(this.value))}}function _1(t){const e=[];return ps(t.fields,(n,r)=>{const s=new Je([n]);if($l(r)){const i=_1(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Pt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new dt(e,0,Z.min(),Z.min(),Z.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,Z.min(),Z.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,Z.min(),Z.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n){this.position=e,this.inclusive=n}}function ay(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=ui(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ly(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!yn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n="asc"){this.field=e,this.dir=n}}function yC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{}class Ue extends w1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vC(e,n,r):n==="array-contains"?new bC(e,r):n==="in"?new EC(e,r):n==="not-in"?new TC(e,r):n==="array-contains-any"?new IC(e,r):new Ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new _C(e,r):new wC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ui(n,this.value)):n!==null&&rs(this.value)===rs(n)&&this.matchesComparison(ui(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends w1{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new nn(e,n)}matches(e){return b1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function b1(t){return t.op==="and"}function E1(t){return xC(t)&&b1(t)}function xC(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function zh(t){if(t instanceof Ue)return t.field.canonicalString()+t.op.toString()+di(t.value);if(E1(t))return t.filters.map(e=>zh(e)).join(",");{const e=t.filters.map(n=>zh(n)).join(",");return`${t.op}(${e})`}}function T1(t,e){return t instanceof Ue?function(r,s){return s instanceof Ue&&r.op===s.op&&r.field.isEqual(s.field)&&yn(r.value,s.value)}(t,e):t instanceof nn?function(r,s){return s instanceof nn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&T1(o,s.filters[c]),!0):!1}(t,e):void J()}function I1(t){return t instanceof Ue?function(n){return`${n.field.canonicalString()} ${n.op} ${di(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(I1).join(" ,")+"}"}(t):"Filter"}class vC extends Ue{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class _C extends Ue{constructor(e,n){super(e,"in",n),this.keys=N1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wC extends Ue{constructor(e,n){super(e,"not-in",n),this.keys=N1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function N1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class bC extends Ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return xp(n)&&sa(n.arrayValue,this.value)}}class EC extends Ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&sa(this.value.arrayValue,n)}}class TC extends Ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(sa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!sa(this.value.arrayValue,n)}}class IC extends Ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!xp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>sa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NC{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function cy(t,e=null,n=[],r=[],s=null,i=null,o=null){return new NC(t,e,n,r,s,i,o)}function vp(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),iu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>di(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>di(r)).join(",")),e.ue=n}return e.ue}function _p(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!T1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ly(t.startAt,e.startAt)&&ly(t.endAt,e.endAt)}function $h(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function SC(t,e,n,r,s,i,o,c){return new Ii(t,e,n,r,s,i,o,c)}function wp(t){return new Ii(t)}function uy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function S1(t){return t.collectionGroup!==null}function Io(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new et(Je.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ia(i,r))}),n.has(Je.keyField().canonicalString())||e.ce.push(new ia(Je.keyField(),r))}return e.ce}function mn(t){const e=ee(t);return e.le||(e.le=kC(e,Io(t))),e.le}function kC(t,e){if(t.limitType==="F")return cy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ia(s.field,i)});const n=t.endAt?new Ic(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ic(t.startAt.position,t.startAt.inclusive):null;return cy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function qh(t,e){const n=t.filters.concat([e]);return new Ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Wh(t,e,n){return new Ii(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ou(t,e){return _p(mn(t),mn(e))&&t.limitType===e.limitType}function k1(t){return`${vp(mn(t))}|lt:${t.limitType}`}function Ts(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>I1(s)).join(", ")}]`),iu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>di(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>di(s)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function au(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Io(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,u){const d=ay(o,c,u);return o.inclusive?d<=0:d<0}(r.startAt,Io(r),s)||r.endAt&&!function(o,c,u){const d=ay(o,c,u);return o.inclusive?d>=0:d>0}(r.endAt,Io(r),s))}(t,e)}function CC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function C1(t){return(e,n)=>{let r=!1;for(const s of Io(t)){const i=RC(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function RC(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,c){const u=o.data.field(i),d=c.data.field(i);return u!==null&&d!==null?ui(u,d):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ps(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return x1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=new ke(G.comparator);function Fn(){return AC}const R1=new ke(G.comparator);function ao(...t){let e=R1;for(const n of t)e=e.insert(n.key,n);return e}function A1(t){let e=R1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function zr(){return No()}function j1(){return No()}function No(){return new Ni(t=>t.toString(),(t,e)=>t.isEqual(e))}const jC=new ke(G.comparator),PC=new et(G.comparator);function re(...t){let e=PC;for(const n of t)e=e.add(n);return e}const DC=new et(ue);function OC(){return DC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bp(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tc(e)?"-0":e}}function P1(t){return{integerValue:""+t}}function LC(t,e){return hC(e)?P1(e):bp(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(){this._=void 0}}function MC(t,e,n){return t instanceof oa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&gp(i)&&(i=yp(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof aa?O1(t,e):t instanceof la?L1(t,e):function(s,i){const o=D1(s,i),c=dy(o)+dy(s.Pe);return Bh(o)&&Bh(s.Pe)?P1(c):bp(s.serializer,c)}(t,e)}function VC(t,e,n){return t instanceof aa?O1(t,e):t instanceof la?L1(t,e):n}function D1(t,e){return t instanceof Nc?function(r){return Bh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class oa extends lu{}class aa extends lu{constructor(e){super(),this.elements=e}}function O1(t,e){const n=M1(e);for(const r of t.elements)n.some(s=>yn(s,r))||n.push(r);return{arrayValue:{values:n}}}class la extends lu{constructor(e){super(),this.elements=e}}function L1(t,e){let n=M1(e);for(const r of t.elements)n=n.filter(s=>!yn(s,r));return{arrayValue:{values:n}}}class Nc extends lu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function dy(t){return De(t.integerValue||t.doubleValue)}function M1(t){return xp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UC{constructor(e,n){this.field=e,this.transform=n}}function FC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof aa&&s instanceof aa||r instanceof la&&s instanceof la?ci(r.elements,s.elements,yn):r instanceof Nc&&s instanceof Nc?yn(r.Pe,s.Pe):r instanceof oa&&s instanceof oa}(t.transform,e.transform)}class BC{constructor(e,n){this.version=e,this.transformResults=n}}class $t{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new $t}static exists(e){return new $t(void 0,e)}static updateTime(e){return new $t(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ql(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class cu{}function V1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ep(t.key,$t.none()):new Ta(t.key,t.data,$t.none());{const n=t.data,r=Tt.empty();let s=new et(Je.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Cr(t.key,r,new Pt(s.toArray()),$t.none())}}function zC(t,e,n){t instanceof Ta?function(s,i,o){const c=s.value.clone(),u=fy(s.fieldTransforms,i,o.transformResults);c.setAll(u),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(s,i,o){if(!ql(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=fy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(U1(s)),u.setAll(c),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function So(t,e,n,r){return t instanceof Ta?function(i,o,c,u){if(!ql(i.precondition,o))return c;const d=i.value.clone(),f=py(i.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(i,o,c,u){if(!ql(i.precondition,o))return c;const d=py(i.fieldTransforms,u,o),f=o.data;return f.setAll(U1(i)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(i,o,c){return ql(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function $C(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=D1(r.transform,s||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,i))}return n||null}function hy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ci(r,s,(i,o)=>FC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends cu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends cu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function U1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function fy(t,e,n){const r=new Map;pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,VC(o,c,n[s]))}return r}function py(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,MC(i,o,e))}return r}class Ep extends cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qC extends cu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&zC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=So(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=j1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const u=V1(o,c);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&ci(this.mutations,e.mutations,(n,r)=>hy(n,r))&&ci(this.baseMutations,e.baseMutations,(n,r)=>hy(n,r))}}class Tp{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){pe(e.mutations.length===r.length);let s=function(){return jC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Tp(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me,oe;function GC(t){switch(t){default:return J();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function F1(t){if(t===void 0)return Un("GRPC error has no .code"),V.UNKNOWN;switch(t){case Me.OK:return V.OK;case Me.CANCELLED:return V.CANCELLED;case Me.UNKNOWN:return V.UNKNOWN;case Me.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Me.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Me.INTERNAL:return V.INTERNAL;case Me.UNAVAILABLE:return V.UNAVAILABLE;case Me.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Me.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Me.NOT_FOUND:return V.NOT_FOUND;case Me.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Me.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Me.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Me.ABORTED:return V.ABORTED;case Me.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Me.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Me.DATA_LOSS:return V.DATA_LOSS;default:return J()}}(oe=Me||(Me={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=new Hr([4294967295,4294967295],0);function my(t){const e=QC().encode(t),n=new u1;return n.update(e),new Uint8Array(n.digest())}function gy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hr([n,r],0),new Hr([s,i],0)]}class Ip{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new lo(`Invalid padding: ${n}`);if(r<0)throw new lo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new lo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new lo(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Hr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Hr.fromNumber(r)));return s.compare(YC)===1&&(s=new Hr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=my(e),[r,s]=gy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ip(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=my(e),[r,s]=gy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class lo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ia.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new uu(Z.min(),s,new ke(ue),Fn(),re())}}class Ia{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ia(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class B1{constructor(e,n){this.targetId=e,this.me=n}}class z1{constructor(e,n,r=nt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class yy{constructor(){this.fe=0,this.ge=vy(),this.pe=nt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=re(),n=re(),r=re();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new Ia(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=vy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class XC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Fn(),this.qe=xy(),this.Qe=new ke(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if($h(i))if(r===0){const o=new G(i.path);this.Ue(n,o,dt.newNoDocument(o,Z.min()))}else pe(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),u=c?this.Xe(c,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=ns(r).toUint8Array()}catch(u){if(u instanceof v1)return li("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new Ip(o,s,i)}catch(u){return li(u instanceof lo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&$h(c.target)){const u=new G(c.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,dt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=re();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new uu(e,n,this.Qe,this.ke,r);return this.ke=Fn(),this.qe=xy(),this.Qe=new ke(ue),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new yy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new et(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new yy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function xy(){return new ke(G.comparator)}function vy(){return new ke(G.comparator)}const JC={asc:"ASCENDING",desc:"DESCENDING"},ZC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eR={and:"AND",or:"OR"};class tR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Hh(t,e){return t.useProto3Json||iu(e)?e:{value:e}}function Sc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nR(t,e){return Sc(t,e.toTimestamp())}function gn(t){return pe(!!t),Z.fromTimestamp(function(n){const r=Er(n);return new We(r.seconds,r.nanos)}(t))}function Np(t,e){return Kh(t,e).canonicalString()}function Kh(t,e){const n=function(s){return new we(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function q1(t){const e=we.fromString(t);return pe(Q1(e)),e}function Gh(t,e){return Np(t.databaseId,e.path)}function Nd(t,e){const n=q1(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(H1(n))}function W1(t,e){return Np(t.databaseId,e)}function rR(t){const e=q1(t);return e.length===4?we.emptyPath():H1(e)}function Qh(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function H1(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _y(t,e,n){return{name:Gh(t,e),fields:n.value.mapValue.fields}}function sR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(pe(f===void 0||typeof f=="string"),nt.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),nt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){const f=d.code===void 0?V.UNKNOWN:F1(d.code);return new W(f,d.message||"")}(o);n=new z1(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nd(t,r.document.name),i=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):Z.min(),c=new Tt({mapValue:{fields:r.document.fields}}),u=dt.newFoundDocument(s,i,o,c),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Wl(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nd(t,r.document),i=r.readTime?gn(r.readTime):Z.min(),o=dt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Wl([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nd(t,r.document),i=r.removedTargetIds||[];n=new Wl([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new KC(s,i),c=r.targetId;n=new B1(c,o)}}return n}function iR(t,e){let n;if(e instanceof Ta)n={update:_y(t,e.key,e.value)};else if(e instanceof Ep)n={delete:Gh(t,e.key)};else if(e instanceof Cr)n={update:_y(t,e.key,e.data),updateMask:pR(e.fieldMask)};else{if(!(e instanceof qC))return J();n={verify:Gh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof oa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof aa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof la)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Nc)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:nR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function oR(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?gn(s.updateTime):gn(i);return o.isEqual(Z.min())&&(o=gn(i)),new BC(o,s.transformResults||[])}(n,e))):[]}function aR(t,e){return{documents:[W1(t,e.path)]}}function lR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=W1(t,s);const i=function(d){if(d.length!==0)return G1(nn.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(f=>function(m){return{field:Is(m.field),direction:dR(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Hh(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function cR(t){let e=rR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){pe(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(g){const m=K1(g);return m instanceof nn&&E1(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(m=>function(S){return new ia(Ns(S.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(g){let m;return m=typeof g=="object"?g.value:g,iu(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(g){const m=!!g.before,E=g.values||[];return new Ic(E,m)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const m=!g.before,E=g.values||[];return new Ic(E,m)}(n.endAt)),SC(e,s,o,i,c,"F",u,d)}function uR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function K1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ns(n.unaryFilter.field);return Ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ns(n.unaryFilter.field);return Ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Ns(n.unaryFilter.field);return Ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ns(n.unaryFilter.field);return Ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Ue.create(Ns(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>K1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function dR(t){return JC[t]}function hR(t){return ZC[t]}function fR(t){return eR[t]}function Is(t){return{fieldPath:t.canonicalString()}}function Ns(t){return Je.fromServerFormat(t.fieldPath)}function G1(t){return t instanceof Ue?function(n){if(n.op==="=="){if(oy(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NAN"}};if(iy(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(oy(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NAN"}};if(iy(n.value))return{unaryFilter:{field:Is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(n.field),op:hR(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(s=>G1(s));return r.length===1?r[0]:{compositeFilter:{op:fR(n.op),filters:r}}}(t):J()}function pR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Q1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n,r,s,i=Z.min(),o=Z.min(),c=nt.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new or(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e){this.ct=e}}function gR(t){const e=cR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.un=new xR}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(br.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class xR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new et(we.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new et(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new hi(0)}static kn(){return new hi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(){this.changes=new Ni(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&So(r.mutation,s,Pt.empty(),We.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=zr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=ao();return i.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Fn();const o=No(),c=function(){return No()}();return n.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Cr)?i=i.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),So(f.mutation,d,f.mutation.getFieldMask(),We.now())):o.set(d.key,Pt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var g;return c.set(d,new _R(f,(g=o.get(d))!==null&&g!==void 0?g:null))}),c))}recalculateAndSaveOverlays(e,n){const r=No();let s=new ke((o,c)=>o-c),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||Pt.empty();f=c.applyToLocalView(d,f),r.set(u,f);const g=(s.get(c.batchId)||re()).add(u);s=s.insert(c.batchId,g)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,g=j1();f.forEach(m=>{if(!i.has(m)){const E=V1(n.get(m),r.get(m));E!==null&&g.set(m,E),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):S1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(zr());let c=-1,u=i;return o.next(d=>U.forEach(d,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,re())).next(f=>({batchId:c,changes:A1(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=ao();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ao();return this.indexManager.getCollectionParents(e,i).next(c=>U.forEach(c,u=>{const d=function(g,m){return new Ii(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))});let c=ao();return o.forEach((u,d)=>{const f=i.get(u);f!==void 0&&So(f.mutation,d,Pt.empty(),We.now()),au(n,d)&&(c=c.insert(u,d))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:gn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:gR(s.bundledQuery),readTime:gn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(){this.overlays=new ke(G.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=zr(),i=n.length+1,o=new G(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=zr(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=zr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=s)););return U.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HC(n,r));let i=this.Ir.get(n);i===void 0&&(i=re(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.sessionToken=nt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(){this.Tr=new et(He.Er),this.dr=new et(He.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new He(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new we([])),r=new He(n,e),s=new He(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new we([])),r=new He(n,e),s=new He(n,e+1);let i=re();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new et(He.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WC(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.br=this.br.add(new He(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),s=new He(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const c=this.Dr(o.wr);i.push(c)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new et(ue);return n.forEach(s=>{const i=new He(s,0),o=new He(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],c=>{r=r.add(c.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new He(new G(i),0);let c=new et(ue);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(c=c.add(u.wr)),!0)},o),U.resolve(this.Cr(c))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){pe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new He(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new He(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.Mr=e,this.docs=function(){return new ke(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Fn();const o=n.path,c=new G(o.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||lC(aC(f),r)<=0||(s.has(f.key)||au(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new SR(this)}getSize(e){return U.resolve(this.size)}}class SR extends vR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.persistence=e,this.Nr=new Ni(n=>vp(n),_p),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Sp,this.targetCount=0,this.kr=hi.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new hi(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new mp(0),this.Kr=!1,this.Kr=!0,this.$r=new TR,this.referenceDelegate=e(this),this.Ur=new kR(this),this.indexManager=new yR,this.remoteDocumentCache=function(s){return new NR(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new mR(n),this.Gr=new bR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new ER,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new IR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new RR(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class RR extends uC{constructor(e){super(),this.currentSequenceNumber=e}}class kp{constructor(e){this.persistence=e,this.Jr=new Sp,this.Yr=null}static Zr(e){return new kp(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=G.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Cp(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return wI()?8:dC(ft())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new AR;return this.Xi(e,n,o).next(c=>{if(i.result=c,this.zi)return this.es(e,n,o,c.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Yi()<=se.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Ts(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Yi()<=se.DEBUG&&K("QueryEngine","Query:",Ts(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Yi()<=se.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Ts(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):U.resolve())}Yi(e,n){if(uy(n))return U.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Wh(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Ji.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,c);return this.ns(n,d,o,u.readTime)?this.Yi(e,Wh(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,s){return uy(n)||s.isEqual(Z.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(Yi()<=se.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ts(n)),this.rs(e,o,n,oC(s,-1)).next(c=>c))})}ts(e,n){let r=new et(C1(e));return n.forEach((s,i)=>{au(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Yi()<=se.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Ts(n)),this.Ji.getDocumentsMatchingQuery(e,n,br.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new ke(ue),this._s=new Ni(i=>vp(i),_p),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function DR(t,e,n,r){return new PR(t,e,n,r)}async function Y1(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let u=re();for(const d of s){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:c}))})})}function OR(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,f){const g=d.batch,m=g.keys();let E=U.resolve();return m.forEach(S=>{E=E.next(()=>f.getEntry(u,S)).next(R=>{const k=d.docVersions.get(S);pe(k!==null),R.version.compareTo(k)<0&&(g.applyToRemoteDocument(R,d),R.isValidDocument()&&(R.setReadTime(d.commitVersion),f.addEntry(R)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=re();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function X1(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function LR(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const c=[];e.targetChanges.forEach((f,g)=>{const m=s.get(g);if(!m)return;c.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,g).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,g)));let E=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?E=E.withResumeToken(nt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):f.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(f.resumeToken,r)),s=s.insert(g,E),function(R,k,T){return R.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(m,E,f)&&c.push(n.Ur.updateTargetData(i,E))});let u=Fn(),d=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(MR(i,o,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(Z.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(g=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return U.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.os=s,i))}function MR(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Fn();return n.forEach((c,u)=>{const d=i.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):K("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function VR(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function UR(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new or(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function Yh(t,e,n){const r=ee(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ea(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function wy(t,e,n){const r=ee(t);let s=Z.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const g=ee(u),m=g._s.get(f);return m!==void 0?U.resolve(g.os.get(m)):g.Ur.getTargetData(d,f)}(r,o,mn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,c.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:re())).next(c=>(FR(r,CC(e),c),{documents:c,Ts:i})))}function FR(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class by{constructor(){this.activeTargetIds=OC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BR{constructor(){this.so=new by,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new by,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl=null;function Sd(){return yl===null?yl=function(){return 268435456+Math.round(2147483648*Math.random())}():yl++,"0x"+yl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $R={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt="WebChannelConnection";class WR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const c=Sd(),u=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${c}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,u,d,s).then(f=>(K("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw li("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,c){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ti}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=$R[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Sd();return new Promise((o,c)=>{const u=new d1;u.setWithCredentials(!0),u.listenOnce(h1.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case zl.NO_ERROR:const f=u.getResponseJson();K(lt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case zl.TIMEOUT:K(lt,`RPC '${e}' ${i} timed out`),c(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case zl.HTTP_ERROR:const g=u.getStatus();if(K(lt,`RPC '${e}' ${i} failed with status:`,g,"response text:",u.getResponseText()),g>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const E=m==null?void 0:m.error;if(E&&E.status&&E.message){const S=function(k){const T=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(E.status);c(new W(S,E.message))}else c(new W(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new W(V.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{K(lt,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);K(lt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=Sd(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=m1(),c=p1(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");K(lt,`Creating RPC '${e}' stream ${s}: ${f}`,u);const g=o.createWebChannel(f,u);let m=!1,E=!1;const S=new qR({Io:k=>{E?K(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(K(lt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),m=!0),K(lt,`RPC '${e}' stream ${s} sending:`,k),g.send(k))},To:()=>g.close()}),R=(k,T,x)=>{k.listen(T,_=>{try{x(_)}catch(j){setTimeout(()=>{throw j},0)}})};return R(g,oo.EventType.OPEN,()=>{E||(K(lt,`RPC '${e}' stream ${s} transport opened.`),S.yo())}),R(g,oo.EventType.CLOSE,()=>{E||(E=!0,K(lt,`RPC '${e}' stream ${s} transport closed`),S.So())}),R(g,oo.EventType.ERROR,k=>{E||(E=!0,li(lt,`RPC '${e}' stream ${s} transport errored:`,k),S.So(new W(V.UNAVAILABLE,"The operation could not be completed")))}),R(g,oo.EventType.MESSAGE,k=>{var T;if(!E){const x=k.data[0];pe(!!x);const _=x,j=_.error||((T=_[0])===null||T===void 0?void 0:T.error);if(j){K(lt,`RPC '${e}' stream ${s} received error:`,j);const M=j.status;let O=function(b){const N=Me[b];if(N!==void 0)return F1(N)}(M),w=j.message;O===void 0&&(O=V.INTERNAL,w="Unknown error status: "+M+" with message "+j.message),E=!0,S.So(new W(O,w)),g.close()}else K(lt,`RPC '${e}' stream ${s} received:`,x),S.bo(x)}}),R(c,f1.STAT_EVENT,k=>{k.stat===Uh.PROXY?K(lt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Uh.NOPROXY&&K(lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function kd(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function du(t){return new tR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(e,n,r,s,i,o,c,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new J1(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HR extends Z1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=sR(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?gn(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Qh(this.serializer),n.addTarget=function(i,o){let c;const u=o.target;if(c=$h(u)?{documents:aR(i,u)}:{query:lR(i,u)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=$1(i,o.resumeToken);const d=Hh(i,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(Z.min())>0){c.readTime=Sc(i,o.snapshotVersion.toTimestamp());const d=Hh(i,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=uR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Qh(this.serializer),n.removeTarget=e,this.a_(n)}}class KR extends Z1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return pe(!!e.streamToken),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=oR(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Qh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>iR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Kh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(V.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.Lo(e,Kh(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class QR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Un(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ms(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ee(u);d.L_.add(4),await Na(d),d.q_.set("Unknown"),d.L_.delete(4),await hu(d)}(this))})}),this.q_=new QR(r,s)}}async function hu(t){if(ms(t))for(const e of t.B_)await e(!0)}async function Na(t){for(const e of t.B_)await e(!1)}function ew(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Pp(n)?jp(n):Si(n).r_()&&Ap(n,e))}function Rp(t,e){const n=ee(t),r=Si(n);n.N_.delete(e),r.r_()&&tw(n,e),n.N_.size===0&&(r.r_()?r.o_():ms(n)&&n.q_.set("Unknown"))}function Ap(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Si(t).A_(e)}function tw(t,e){t.Q_.xe(e),Si(t).R_(e)}function jp(t){t.Q_=new XC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Si(t).start(),t.q_.v_()}function Pp(t){return ms(t)&&!Si(t).n_()&&t.N_.size>0}function ms(t){return ee(t).L_.size===0}function nw(t){t.Q_=void 0}async function XR(t){t.q_.set("Online")}async function JR(t){t.N_.forEach((e,n)=>{Ap(t,e)})}async function ZR(t,e){nw(t),Pp(t)?(t.q_.M_(e),jp(t)):t.q_.set("Unknown")}async function eA(t,e,n){if(t.q_.set("Online"),e instanceof z1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.N_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.N_.delete(c),s.Q_.removeTarget(c))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await kc(t,r)}else if(e instanceof Wl?t.Q_.Ke(e):e instanceof B1?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await X1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.Q_.rt(o);return c.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),c.targetMismatches.forEach((u,d)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(nt.EMPTY_BYTE_STRING,f.snapshotVersion)),tw(i,u);const g=new or(f.target,u,d,f.sequenceNumber);Ap(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await kc(t,r)}}async function kc(t,e,n){if(!Ea(e))throw e;t.L_.add(1),await Na(t),t.q_.set("Offline"),n||(n=()=>X1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await hu(t)})}function rw(t,e){return e().catch(n=>kc(t,n,e))}async function fu(t){const e=ee(t),n=Tr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;tA(e);)try{const s=await VR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,nA(e,s)}catch(s){await kc(e,s)}sw(e)&&iw(e)}function tA(t){return ms(t)&&t.O_.length<10}function nA(t,e){t.O_.push(e);const n=Tr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function sw(t){return ms(t)&&!Tr(t).n_()&&t.O_.length>0}function iw(t){Tr(t).start()}async function rA(t){Tr(t).p_()}async function sA(t){const e=Tr(t);for(const n of t.O_)e.m_(n.mutations)}async function iA(t,e,n){const r=t.O_.shift(),s=Tp.from(r,e,n);await rw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await fu(t)}async function oA(t,e){e&&Tr(t).V_&&await async function(r,s){if(function(o){return GC(o)&&o!==V.ABORTED}(s.code)){const i=r.O_.shift();Tr(r).s_(),await rw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await fu(r)}}(t,e),sw(t)&&iw(t)}async function Ty(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=ms(n);n.L_.add(3),await Na(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await hu(n)}async function aA(t,e){const n=ee(t);e?(n.L_.delete(2),await hu(n)):e||(n.L_.add(2),await Na(n),n.q_.set("Unknown"))}function Si(t){return t.K_||(t.K_=function(n,r,s){const i=ee(n);return i.w_(),new HR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:XR.bind(null,t),Ro:JR.bind(null,t),mo:ZR.bind(null,t),d_:eA.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Pp(t)?jp(t):t.q_.set("Unknown")):(await t.K_.stop(),nw(t))})),t.K_}function Tr(t){return t.U_||(t.U_=function(n,r,s){const i=ee(n);return i.w_(),new KR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:rA.bind(null,t),mo:oA.bind(null,t),f_:sA.bind(null,t),g_:iA.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await fu(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Dp(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Op(t,e){if(Un("AsyncQueue",`${e}: ${t}`),Ea(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=ao(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new Xs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Xs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Xs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iy{constructor(){this.W_=new ke(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class fi{constructor(e,n,r,s,i,o,c,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new fi(e,n,Xs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ou(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class cA{constructor(){this.queries=Ny(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ee(n),i=s.queries;s.queries=Ny(),i.forEach((o,c)=>{for(const u of c.j_)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function Ny(){return new Ni(t=>k1(t),ou)}async function ow(t,e){const n=ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new lA,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=Op(o,`Initialization of query '${Ts(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Lp(n)}async function aw(t,e){const n=ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uA(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.j_)c.X_(s)&&(r=!0);o.z_=s}}r&&Lp(n)}function dA(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Lp(t){t.Y_.forEach(e=>{e.next()})}var Xh,Sy;(Sy=Xh||(Xh={})).ea="default",Sy.Cache="cache";class lw{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new fi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=fi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==Xh.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cw{constructor(e){this.key=e}}class uw{constructor(e){this.key=e}}class hA{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=re(),this.mutatedKeys=re(),this.Aa=C1(e),this.Ra=new Xs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new Iy,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,g)=>{const m=s.get(f),E=au(this.query,g)?g:null,S=!!m&&this.mutatedKeys.has(m.key),R=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let k=!1;m&&E?m.data.isEqual(E.data)?S!==R&&(r.track({type:3,doc:E}),k=!0):this.ga(m,E)||(r.track({type:2,doc:E}),k=!0,(u&&this.Aa(E,u)>0||d&&this.Aa(E,d)<0)&&(c=!0)):!m&&E?(r.track({type:0,doc:E}),k=!0):m&&!E&&(r.track({type:1,doc:m}),k=!0,(u||d)&&(c=!0)),k&&(E?(o=o.add(E),i=R?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:c,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,g)=>function(E,S){const R=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return R(E)-R(S)}(f.type,g.type)||this.Aa(f.doc,g.doc)),this.pa(r),s=s!=null&&s;const c=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new fi(this.query,e.Ra,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:c}:{wa:c}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new Iy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=re(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new uw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new cw(r))}),n}ba(e){this.Ta=e.Ts,this.da=re();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return fi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class fA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pA{constructor(e){this.key=e,this.va=!1}}class mA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ni(c=>k1(c),ou),this.Ma=new Map,this.xa=new Set,this.Oa=new ke(G.comparator),this.Na=new Map,this.La=new Sp,this.Ba={},this.ka=new Map,this.qa=hi.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function gA(t,e,n=!0){const r=gw(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await dw(r,e,n,!0),s}async function yA(t,e){const n=gw(t);await dw(n,e,!0,!1)}async function dw(t,e,n,r){const s=await UR(t.localStore,mn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await xA(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&ew(t.remoteStore,s),c}async function xA(t,e,n,r,s){t.Ka=(g,m,E)=>async function(R,k,T,x){let _=k.view.ma(T);_.ns&&(_=await wy(R.localStore,k.query,!1).then(({documents:w})=>k.view.ma(w,_)));const j=x&&x.targetChanges.get(k.targetId),M=x&&x.targetMismatches.get(k.targetId)!=null,O=k.view.applyChanges(_,R.isPrimaryClient,j,M);return Cy(R,k.targetId,O.wa),O.snapshot}(t,g,m,E);const i=await wy(t.localStore,e,!0),o=new hA(e,i.Ts),c=o.ma(i.documents),u=Ia.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(c,t.isPrimaryClient,u);Cy(t,n,d.wa);const f=new fA(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function vA(t,e,n){const r=ee(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ou(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Yh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Rp(r.remoteStore,s.targetId),Jh(r,s.targetId)}).catch(ba)):(Jh(r,s.targetId),await Yh(r.localStore,s.targetId,!0))}async function _A(t,e){const n=ee(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Rp(n.remoteStore,r.targetId))}async function wA(t,e,n){const r=kA(t);try{const s=await function(o,c){const u=ee(o),d=We.now(),f=c.reduce((E,S)=>E.add(S.key),re());let g,m;return u.persistence.runTransaction("Locally write mutations","readwrite",E=>{let S=Fn(),R=re();return u.cs.getEntries(E,f).next(k=>{S=k,S.forEach((T,x)=>{x.isValidDocument()||(R=R.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(E,S)).next(k=>{g=k;const T=[];for(const x of c){const _=$C(x,g.get(x.key).overlayedDocument);_!=null&&T.push(new Cr(x.key,_,_1(_.value.mapValue),$t.exists(!0)))}return u.mutationQueue.addMutationBatch(E,d,T,c)}).next(k=>{m=k;const T=k.applyToLocalDocumentSet(g,R);return u.documentOverlayCache.saveOverlays(E,k.batchId,T)})}).then(()=>({batchId:m.batchId,changes:A1(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new ke(ue)),d=d.insert(c,u),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await Sa(r,s.changes),await fu(r.remoteStore)}catch(s){const i=Op(s,"Failed to persist write");n.reject(i)}}async function hw(t,e){const n=ee(t);try{const r=await LR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?pe(o.va):s.removedDocuments.size>0&&(pe(o.va),o.va=!1))}),await Sa(n,r,e)}catch(r){await ba(r)}}function ky(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const c=o.view.Z_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const u=ee(o);u.onlineState=c;let d=!1;u.queries.forEach((f,g)=>{for(const m of g.j_)m.Z_(c)&&(d=!0)}),d&&Lp(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bA(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new ke(G.comparator);o=o.insert(i,dt.newNoDocument(i,Z.min()));const c=re().add(i),u=new uu(Z.min(),new Map,new ke(ue),o,c);await hw(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Mp(r)}else await Yh(r.localStore,e,!1).then(()=>Jh(r,e,n)).catch(ba)}async function EA(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await OR(n.localStore,e);pw(n,r,null),fw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sa(n,s)}catch(s){await ba(s)}}async function TA(t,e,n){const r=ee(t);try{const s=await function(o,c){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next(g=>(pe(g!==null),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);pw(r,e,n),fw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Sa(r,s)}catch(s){await ba(s)}}function fw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function pw(t,e,n){const r=ee(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function Jh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||mw(t,r)})}function mw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Rp(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Mp(t))}function Cy(t,e,n){for(const r of n)r instanceof cw?(t.La.addReference(r.key,e),IA(t,r)):r instanceof uw?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||mw(t,r.key)):J()}function IA(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),Mp(t))}function Mp(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(we.fromString(e)),r=t.qa.next();t.Na.set(r,new pA(n)),t.Oa=t.Oa.insert(n,r),ew(t.remoteStore,new or(mn(wp(n.path)),r,"TargetPurposeLimboResolution",mp.oe))}}async function Sa(t,e,n){const r=ee(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((c,u)=>{o.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){s.push(d);const g=Cp.Wi(u.targetId,d);i.push(g)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,d){const f=ee(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>U.forEach(d,m=>U.forEach(m.$i,E=>f.persistence.referenceDelegate.addReference(g,m.targetId,E)).next(()=>U.forEach(m.Ui,E=>f.persistence.referenceDelegate.removeReference(g,m.targetId,E)))))}catch(g){if(!Ea(g))throw g;K("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const m=g.targetId;if(!g.fromCache){const E=f.os.get(m),S=E.snapshotVersion,R=E.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(m,R)}}}(r.localStore,i))}async function NA(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await Y1(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(c=>{c.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sa(n,r.hs)}}function SA(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return re().add(r.key);{let s=re();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const c=n.Fa.get(o);s=s.unionWith(c.view.Va)}return s}}function gw(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=SA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bA.bind(null,e),e.Ca.d_=uA.bind(null,e.eventManager),e.Ca.$a=dA.bind(null,e.eventManager),e}function kA(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TA.bind(null,e),e}class Cc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=du(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return DR(this.persistence,new jR,e.initialUser,this.serializer)}Ga(e){return new CR(kp.Zr,this.serializer)}Wa(e){return new BR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cc.provider={build:()=>new Cc};class Zh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ky(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=NA.bind(null,this.syncEngine),await aA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new cA}()}createDatastore(e){const n=du(e.databaseInfo.databaseId),r=function(i){return new WR(i)}(e.databaseInfo);return function(i,o,c,u){return new GR(i,o,c,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new YR(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>ky(this.syncEngine,n,0),function(){return Ey.D()?new Ey:new zR}())}createSyncEngine(e,n){return function(s,i,o,c,u,d,f){const g=new mA(s,i,o,c,u,d);return f&&(g.Qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ee(s);K("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Na(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Zh.provider={build:()=>new Zh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ct.UNAUTHENTICATED,this.clientId=y1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Op(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cd(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Y1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ry(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RA(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Ty(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Ty(e.remoteStore,s)),t._onlineComponents=e}async function RA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;li("Error using user provided cache. Falling back to memory cache: "+n),await Cd(t,new Cc)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Cd(t,new Cc);return t._offlineComponents}async function xw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await Ry(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await Ry(t,new Zh))),t._onlineComponents}function AA(t){return xw(t).then(e=>e.syncEngine)}async function vw(t){const e=await xw(t),n=e.eventManager;return n.onListen=gA.bind(null,e.syncEngine),n.onUnlisten=vA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=yA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_A.bind(null,e.syncEngine),n}function jA(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,d){const f=new yw({next:m=>{f.Za(),o.enqueueAndForget(()=>aw(i,g));const E=m.docs.has(c);!E&&m.fromCache?d.reject(new W(V.UNAVAILABLE,"Failed to get document because the client is offline.")):E&&m.fromCache&&u&&u.source==="server"?d.reject(new W(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(m)},error:m=>d.reject(m)}),g=new lw(wp(c.path),f,{includeMetadataChanges:!0,_a:!0});return ow(i,g)}(await vw(t),t.asyncQueue,e,n,r)),r.promise}function PA(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,u,d){const f=new yw({next:m=>{f.Za(),o.enqueueAndForget(()=>aw(i,g)),m.fromCache&&u.source==="server"?d.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(m)},error:m=>d.reject(m)}),g=new lw(c,f,{includeMetadataChanges:!0,_a:!0});return ow(i,g)}(await vw(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _w(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function DA(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jy(t){if(!G.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Py(t){if(G.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function pu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function rn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pu(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_w((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class mu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Xk;switch(r.type){case"firstParty":return new tC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ay.get(n);r&&(K("ComponentProvider","Removing Datastore"),Ay.delete(n),r.terminate())}(this),Promise.resolve()}}function OA(t,e,n,r={}){var s;const i=(t=rn(t,mu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&li("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,u;if(typeof r.mockUserToken=="string")c=r.mockUserToken,u=ct.MOCK_USER;else{c=I_(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ct(d)}t._authCredentials=new Jk(new g1(c,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new gs(this.firestore,e,this._query)}}class vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new vt(this.firestore,e,this._key)}}class xr extends gs{constructor(e,n,r){super(e,n,wp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new vt(this.firestore,null,new G(e))}withConverter(e){return new xr(this.firestore,e,this._path)}}function Kn(t,e,...n){if(t=Le(t),ww("collection","path",e),t instanceof mu){const r=we.fromString(e,...n);return Py(r),new xr(t,null,r)}{if(!(t instanceof vt||t instanceof xr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return Py(r),new xr(t.firestore,null,r)}}function wn(t,e,...n){if(t=Le(t),arguments.length===1&&(e=y1.newId()),ww("doc","path",e),t instanceof mu){const r=we.fromString(e,...n);return jy(r),new vt(t,null,new G(r))}{if(!(t instanceof vt||t instanceof xr))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return jy(r),new vt(t.firestore,t instanceof xr?t.converter:null,new G(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new J1(this,"async_queue_retry"),this.Vu=()=>{const r=kd();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=kd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=kd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new An;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ea(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw Un("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Dp.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class ys extends mu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Oy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Oy(e),this._firestoreClient=void 0,await e}}}function LA(t,e){const n=typeof t=="object"?t:sp(),r=typeof t=="string"?t:"(default)",s=eu(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=b_("firestore");i&&OA(s,...i)}return s}function Vp(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||MA(t),t._firestoreClient}function MA(t){var e,n,r;const s=t._freezeSettings(),i=function(c,u,d,f){return new pC(c,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,_w(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new CA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pi(nt.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new pi(nt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VA=/^__.*__$/;class UA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ta(e,this.data,n,this.fieldTransforms)}}class bw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ew(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Bp{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Bp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Rc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(Ew(this.Cu)&&VA.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class FA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||du(e)}Qu(e,n,r,s=!1){return new Bp({Cu:e,methodName:n,qu:r,path:Je.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xu(t){const e=t._freezeSettings(),n=du(t._databaseId);return new FA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Tw(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);$p("Data must be an object, but it was:",o,r);const c=Iw(r,o);let u,d;if(i.merge)u=new Pt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const m=ef(e,g,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Sw(f,m)||f.push(m)}u=new Pt(f),d=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=o.fieldTransforms;return new UA(new Tt(c),u,d)}class vu extends yu{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vu}}class zp extends yu{_toFieldTransform(e){return new UC(e.path,new oa)}isEqual(e){return e instanceof zp}}function BA(t,e,n,r){const s=t.Qu(1,e,n);$p("Data must be an object, but it was:",s,r);const i=[],o=Tt.empty();ps(r,(u,d)=>{const f=qp(e,u,n);d=Le(d);const g=s.Nu(f);if(d instanceof vu)i.push(f);else{const m=ka(d,g);m!=null&&(i.push(f),o.set(f,m))}});const c=new Pt(i);return new bw(o,c,s.fieldTransforms)}function zA(t,e,n,r,s,i){const o=t.Qu(1,e,n),c=[ef(e,r,n)],u=[s];if(i.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(ef(e,i[m])),u.push(i[m+1]);const d=[],f=Tt.empty();for(let m=c.length-1;m>=0;--m)if(!Sw(d,c[m])){const E=c[m];let S=u[m];S=Le(S);const R=o.Nu(E);if(S instanceof vu)d.push(E);else{const k=ka(S,R);k!=null&&(d.push(E),f.set(E,k))}}const g=new Pt(d);return new bw(f,g,o.fieldTransforms)}function $A(t,e,n,r=!1){return ka(n,t.Qu(r?4:3,e))}function ka(t,e){if(Nw(t=Le(t)))return $p("Unsupported field value:",e,t),Iw(t,e);if(t instanceof yu)return function(r,s){if(!Ew(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let u=ka(c,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return LC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=We.fromDate(r);return{timestampValue:Sc(s.serializer,i)}}if(r instanceof We){const i=new We(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sc(s.serializer,i)}}if(r instanceof Up)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof pi)return{bytesValue:$1(s.serializer,r._byteString)};if(r instanceof vt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Np(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Fp)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw c.Bu("VectorValues must only contain numeric values.");return bp(c.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${pu(r)}`)}(t,e)}function Iw(t,e){const n={};return x1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ps(t,(r,s)=>{const i=ka(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Nw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof We||t instanceof Up||t instanceof pi||t instanceof vt||t instanceof yu||t instanceof Fp)}function $p(t,e,n){if(!Nw(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=pu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function ef(t,e,n){if((e=Le(e))instanceof gu)return e._internalPath;if(typeof e=="string")return qp(t,e);throw Rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const qA=new RegExp("[~\\*/\\[\\]]");function qp(t,e,n){if(e.search(qA)>=0)throw Rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gu(...e.split("."))._internalPath}catch{throw Rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Rc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new W(V.INVALID_ARGUMENT,c+t+u)}function Sw(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kw{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new WA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Wp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class WA extends kw{data(){return super.data()}}function Wp(t,e){return typeof e=="string"?qp(t,e):e instanceof gu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hp{}class Cw extends Hp{}function KA(t,e,...n){let r=[];e instanceof Hp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Gp).length,c=i.filter(u=>u instanceof Kp).length;if(o>1||o>0&&c>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Kp extends Cw{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Kp(e,n,r)}_apply(e){const n=this._parse(e);return Rw(e._query,n),new gs(e.firestore,e.converter,qh(e._query,n))}_parse(e){const n=xu(e.firestore);return function(i,o,c,u,d,f,g){let m;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){My(g,f);const E=[];for(const S of g)E.push(Ly(u,i,S));m={arrayValue:{values:E}}}else m=Ly(u,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||My(g,f),m=$A(c,o,g,f==="in"||f==="not-in");return Ue.create(d,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Gp extends Hp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Gp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const u of c)Rw(o,u),o=qh(o,u)}(e._query,n),new gs(e.firestore,e.converter,qh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qp extends Cw{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Qp(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ia(i,o)}(e._query,this._field,this._direction);return new gs(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ii(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function GA(t,e="asc"){const n=e,r=Wp("orderBy",t);return Qp._create(r,n)}function Ly(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!S1(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!G.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sy(t,new G(r))}if(n instanceof vt)return sy(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pu(n)}.`)}function My(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Rw(t,e){const n=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class QA{convertValue(e,n="none"){switch(rs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ps(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>De(o.doubleValue));return new Fp(i)}convertGeoPoint(e){return new Up(De(e.latitude),De(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=yp(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(na(e));default:return null}}convertTimestamp(e){const n=Er(e);return new We(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);pe(Q1(r));const s=new ra(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||Un(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aw(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jw extends kw{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Hl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Wp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Hl extends jw{data(e={}){return super.data(e)}}class YA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new co(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Hl(this._firestore,this._userDataWriter,r.key,r,new co(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const u=new Hl(s._firestore,s._userDataWriter,c.doc.key,c.doc,new co(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Hl(s._firestore,s._userDataWriter,c.doc.key,c.doc,new co(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:XA(c.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function XA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JA(t){t=rn(t,vt);const e=rn(t.firestore,ys);return jA(Vp(e),t._key).then(n=>e4(e,t,n))}class Pw extends QA{constructor(e){super(),this.firestore=e}convertBytes(e){return new pi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new vt(this.firestore,null,n)}}function xl(t){t=rn(t,gs);const e=rn(t.firestore,ys),n=Vp(e),r=new Pw(e);return HA(t._query),PA(n,t._query).then(s=>new YA(e,r,t,s))}function ZA(t,e,n){t=rn(t,vt);const r=rn(t.firestore,ys),s=Aw(t.converter,e,n);return _u(r,[Tw(xu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,$t.none())])}function Rd(t,e,n,...r){t=rn(t,vt);const s=rn(t.firestore,ys),i=xu(s);let o;return o=typeof(e=Le(e))=="string"||e instanceof gu?zA(i,"updateDoc",t._key,e,n,r):BA(i,"updateDoc",t._key,e),_u(s,[o.toMutation(t._key,$t.exists(!0))])}function Ad(t){return _u(rn(t.firestore,ys),[new Ep(t._key,$t.none())])}function vl(t,e){const n=rn(t.firestore,ys),r=wn(t),s=Aw(t.converter,e);return _u(n,[Tw(xu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,$t.exists(!1))]).then(()=>r)}function _u(t,e){return function(r,s){const i=new An;return r.asyncQueue.enqueueAndForget(async()=>wA(await AA(r),s,i)),i.promise}(Vp(t),e)}function e4(t,e,n){const r=n.docs.get(e._key),s=new Pw(t);return new jw(t,s,e._key,r,new co(n.hasPendingWrites,n.fromCache),e.converter)}function Dr(){return new zp("serverTimestamp")}(function(e,n=!0){(function(s){Ti=s})(hs),Zr(new wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new ys(new Zk(r.getProvider("auth-internal")),new rC(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ra(d.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),hn(Z0,"4.7.3",e),hn(Z0,"4.7.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="firebasestorage.googleapis.com",Ow="storageBucket",t4=2*60*1e3,n4=10*60*1e3,r4=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce extends xn{constructor(e,n,r=0){super(jd(e),`Firebase Storage: ${n} (${jd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ce.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return jd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ee;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ee||(Ee={}));function jd(t){return"storage/"+t}function Yp(){const t="An unknown error occurred, please check the error payload for server response.";return new Ce(Ee.UNKNOWN,t)}function s4(t){return new Ce(Ee.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function i4(t){return new Ce(Ee.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function o4(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ce(Ee.UNAUTHENTICATED,t)}function a4(){return new Ce(Ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function l4(t){return new Ce(Ee.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Lw(){return new Ce(Ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Mw(){return new Ce(Ee.CANCELED,"User canceled the upload/download.")}function c4(t){return new Ce(Ee.INVALID_URL,"Invalid URL '"+t+"'.")}function u4(t){return new Ce(Ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function d4(){return new Ce(Ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ow+"' property when initializing the app?")}function Vw(){return new Ce(Ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function h4(){return new Ce(Ee.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function f4(){return new Ce(Ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function p4(t){return new Ce(Ee.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function tf(t){return new Ce(Ee.INVALID_ARGUMENT,t)}function Uw(){return new Ce(Ee.APP_DELETED,"The Firebase app was deleted.")}function m4(t){return new Ce(Ee.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ko(t,e){return new Ce(Ee.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Xi(t){throw new Ce(Ee.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Dt.makeFromUrl(e,n)}catch{return new Dt(e,"")}if(r.path==="")return r;throw u4(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),u={bucket:1,path:3};function d(j){j.path_=decodeURIComponent(j.path)}const f="v[A-Za-z0-9_]+",g=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",E=new RegExp(`^https?://${g}/${f}/b/${s}/o${m}`,"i"),S={bucket:1,path:3},R=n===Dw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",T=new RegExp(`^https?://${R}/${s}/${k}`,"i"),_=[{regex:c,indices:u,postModify:i},{regex:E,indices:S,postModify:d},{regex:T,indices:{bucket:1,path:2},postModify:d}];for(let j=0;j<_.length;j++){const M=_[j],O=M.regex.exec(e);if(O){const w=O[M.indices.bucket];let y=O[M.indices.path];y||(y=""),r=new Dt(w,y),M.postModify(r);break}}if(r==null)throw c4(e);return r}}class g4{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y4(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function u(){return c===2}let d=!1;function f(...k){d||(d=!0,e.apply(null,k))}function g(k){s=setTimeout(()=>{s=null,t(E,u())},k)}function m(){i&&clearTimeout(i)}function E(k,...T){if(d){m();return}if(k){m(),f.call(null,k,...T);return}if(u()||o){m(),f.call(null,k,...T);return}r<64&&(r*=2);let _;c===1?(c=2,_=0):_=(r+Math.random())*1e3,g(_)}let S=!1;function R(k){S||(S=!0,m(),!d&&(s!==null?(k||(c=2),clearTimeout(s),g(0)):k||(c=1)))}return g(0),i=setTimeout(()=>{o=!0,R(!0)},n),R}function x4(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v4(t){return t!==void 0}function _4(t){return typeof t=="function"}function w4(t){return typeof t=="object"&&!Array.isArray(t)}function wu(t){return typeof t=="string"||t instanceof String}function Vy(t){return Xp()&&t instanceof Blob}function Xp(){return typeof Blob<"u"}function Uy(t,e,n,r){if(r<e)throw tf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw tf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Fw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var Kr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Kr||(Kr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b4{constructor(e,n,r,s,i,o,c,u,d,f,g,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=g,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((E,S)=>{this.resolve_=E,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new _l(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const u=c.loaded,d=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===Kr.NO_ERROR,u=i.getStatus();if(!c||Bw(u,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===Kr.ABORT;r(!1,new _l(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new _l(d,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const u=this.callback_(c,c.getResponse());v4(u)?i(u):i()}catch(u){o(u)}else if(c!==null){const u=Yp();u.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,u)):o(u)}else if(s.canceled){const u=this.appDelete_?Uw():Mw();o(u)}else{const u=Lw();o(u)}};this.canceled_?n(!1,new _l(!1,null,!0)):this.backoffId_=y4(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&x4(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class _l{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function E4(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function T4(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function I4(t,e){e&&(t["X-Firebase-GMPID"]=e)}function N4(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function S4(t,e,n,r,s,i,o=!0){const c=Fw(t.urlParams),u=t.url+c,d=Object.assign({},t.headers);return I4(d,e),E4(d,n),T4(d,i),N4(d,r),new b4(u,t.method,d,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k4(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function C4(...t){const e=k4();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Xp())return new Blob(t);throw new Ce(Ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function R4(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A4(t){if(typeof atob>"u")throw p4("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Pd{constructor(e,n){this.data=e,this.contentType=n||null}}function j4(t,e){switch(t){case cn.RAW:return new Pd(zw(e));case cn.BASE64:case cn.BASE64URL:return new Pd($w(t,e));case cn.DATA_URL:return new Pd(D4(e),O4(e))}throw Yp()}function zw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function P4(t){let e;try{e=decodeURIComponent(t)}catch{throw ko(cn.DATA_URL,"Malformed data URL.")}return zw(e)}function $w(t,e){switch(t){case cn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ko(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case cn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ko(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=A4(e)}catch(s){throw s.message.includes("polyfill")?s:ko(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class qw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ko(cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=L4(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function D4(t){const e=new qw(t);return e.base64?$w(cn.BASE64,e.rest):P4(e.rest)}function O4(t){return new qw(t).contentType}function L4(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){let r=0,s="";Vy(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Vy(this.data_)){const r=this.data_,s=R4(r,e,n);return s===null?null:new nr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new nr(r,!0)}}static getBlob(...e){if(Xp()){const n=e.map(r=>r instanceof nr?r.data_:r);return new nr(C4.apply(null,n))}else{const n=e.map(o=>wu(o)?j4(cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new nr(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(t){let e;try{e=JSON.parse(t)}catch{return null}return w4(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M4(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function V4(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Hw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U4(t,e){return e}class gt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||U4}}let wl=null;function F4(t){return!wu(t)||t.length<2?t:Hw(t)}function Kw(){if(wl)return wl;const t=[];t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));function e(i,o){return F4(o)}const n=new gt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new gt("size");return s.xform=r,t.push(s),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),wl=t,wl}function B4(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Dt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function z4(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return B4(r,t),r}function Gw(t,e,n){const r=Ww(e);return r===null?null:z4(t,r,n)}function $4(t,e,n,r){const s=Ww(e);if(s===null||!wu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(d=>{const f=t.bucket,g=t.fullPath,m="/b/"+o(f)+"/o/"+o(g),E=Ca(m,n,r),S=Fw({alt:"media",token:d});return E+S})[0]}function Qw(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class ki{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){if(!t)throw Yp()}function Jp(t,e){function n(r,s){const i=Gw(t,s,e);return jn(i!==null),i}return n}function q4(t,e){function n(r,s){const i=Gw(t,s,e);return jn(i!==null),$4(i,s,t.host,t._protocol)}return n}function Ra(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=a4():s=o4():n.getStatus()===402?s=i4(t.bucket):n.getStatus()===403?s=l4(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Yw(t){const e=Ra(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=s4(t.path)),i.serverResponse=s.serverResponse,i}return n}function W4(t,e,n){const r=e.fullServerUrl(),s=Ca(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new ki(s,i,Jp(t,n),o);return c.errorHandler=Yw(e),c}function H4(t,e,n){const r=e.fullServerUrl(),s=Ca(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new ki(s,i,q4(t,n),o);return c.errorHandler=Yw(e),c}function K4(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Xw(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=K4(null,e)),r}function G4(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let _="";for(let j=0;j<2;j++)_=_+Math.random().toString().slice(2);return _}const u=c();o["Content-Type"]="multipart/related; boundary="+u;const d=Xw(e,r,s),f=Qw(d,n),g="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,m=`\r
--`+u+"--",E=nr.getBlob(g,r,m);if(E===null)throw Vw();const S={name:d.fullPath},R=Ca(i,t.host,t._protocol),k="POST",T=t.maxUploadRetryTime,x=new ki(R,k,Jp(t,n),T);return x.urlParams=S,x.headers=o,x.body=E.uploadData(),x.errorHandler=Ra(e),x}class Ac{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function Zp(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{jn(!1)}return jn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function Q4(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=Xw(e,r,s),c={name:o.fullPath},u=Ca(i,t.host,t._protocol),d="POST",f={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},g=Qw(o,n),m=t.maxUploadRetryTime;function E(R){Zp(R);let k;try{k=R.getResponseHeader("X-Goog-Upload-URL")}catch{jn(!1)}return jn(wu(k)),k}const S=new ki(u,d,E,m);return S.urlParams=c,S.headers=f,S.body=g,S.errorHandler=Ra(e),S}function Y4(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(d){const f=Zp(d,["active","final"]);let g=null;try{g=d.getResponseHeader("X-Goog-Upload-Size-Received")}catch{jn(!1)}g||jn(!1);const m=Number(g);return jn(!isNaN(m)),new Ac(m,r.size(),f==="final")}const o="POST",c=t.maxUploadRetryTime,u=new ki(n,o,i,c);return u.headers=s,u.errorHandler=Ra(e),u}const Fy=256*1024;function X4(t,e,n,r,s,i,o,c){const u=new Ac(0,0);if(o?(u.current=o.current,u.total=o.total):(u.current=0,u.total=r.size()),r.size()!==u.total)throw h4();const d=u.total-u.current;let f=d;s>0&&(f=Math.min(f,s));const g=u.current,m=g+f;let E="";f===0?E="finalize":d===f?E="upload, finalize":E="upload";const S={"X-Goog-Upload-Command":E,"X-Goog-Upload-Offset":`${u.current}`},R=r.slice(g,m);if(R===null)throw Vw();function k(j,M){const O=Zp(j,["active","final"]),w=u.current+f,y=r.size();let b;return O==="final"?b=Jp(e,i)(j,M):b=null,new Ac(w,y,O==="final",b)}const T="POST",x=e.maxUploadRetryTime,_=new ki(n,T,k,x);return _.headers=S,_.body=R.uploadData(),_.progressCallback=c||null,_.errorHandler=Ra(t),_}const bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Dd(t){switch(t){case"running":case"pausing":case"canceling":return bt.RUNNING;case"paused":return bt.PAUSED;case"success":return bt.SUCCESS;case"canceled":return bt.CANCELED;case"error":return bt.ERROR;default:return bt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J4{constructor(e,n,r){if(_4(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class Z4{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Kr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Kr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Kr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw Xi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class e5 extends Z4{initXhr(){this.xhr_.responseType="text"}}function Ss(){return new e5}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Kw(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(Ee.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(Bw(s.status,[]))if(i)s=Lw();else{this.sleepTime=Math.max(this.sleepTime*2,r4),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(Ee.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=Q4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ss,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=Y4(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Ss,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Fy*this._chunkMultiplier,n=new Ac(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=X4(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(u){this._error=u,this._transition("error");return}const c=this._ref.storage._makeRequest(o,Ss,s,i,!1);this._request=c,c.getPromise().then(u=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(u.current),u.finalized?(this._metadata=u.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Fy*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=W4(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Ss,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=G4(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Ss,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=Mw(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Dd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new J4(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Dd(this._state)){case bt.SUCCESS:Es(this._resolve.bind(null,this.snapshot))();break;case bt.CANCELED:case bt.ERROR:const n=this._reject;Es(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Dd(this._state)){case bt.RUNNING:case bt.PAUSED:e.next&&Es(e.next.bind(e,this.snapshot))();break;case bt.SUCCESS:e.complete&&Es(e.complete.bind(e))();break;case bt.CANCELED:case bt.ERROR:e.error&&Es(e.error.bind(e,this._error))();break;default:e.error&&Es(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(e,n){this._service=e,n instanceof Dt?this._location=n:this._location=Dt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ss(e,n)}get root(){const e=new Dt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Hw(this._location.path)}get storage(){return this._service}get parent(){const e=M4(this._location.path);if(e===null)return null;const n=new Dt(this._location.bucket,e);return new ss(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw m4(e)}}function n5(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new t5(t,new nr(e),n)}function r5(t){t._throwIfRoot("getDownloadURL");const e=H4(t.storage,t._location,Kw());return t.storage.makeRequestWithTokens(e,Ss).then(n=>{if(n===null)throw f4();return n})}function s5(t,e){const n=V4(t._location.path,e),r=new Dt(t._location.bucket,n);return new ss(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i5(t){return/^[A-Za-z]+:\/\//.test(t)}function o5(t,e){return new ss(t,e)}function Jw(t,e){if(t instanceof em){const n=t;if(n._bucket==null)throw d4();const r=new ss(n,n._bucket);return e!=null?Jw(r,e):r}else return e!==void 0?s5(t,e):t}function a5(t,e){if(e&&i5(e)){if(t instanceof em)return o5(t,e);throw tf("To use ref(service, url), the first argument must be a Storage instance.")}else return Jw(t,e)}function By(t,e){const n=e==null?void 0:e[Ow];return n==null?null:Dt.makeFromBucketSpec(n,t)}function l5(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:I_(s,t.app.options.projectId))}class em{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Dw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=t4,this._maxUploadRetryTime=n4,this._requests=new Set,s!=null?this._bucket=Dt.makeFromBucketSpec(s,this._host):this._bucket=By(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,e):this._bucket=By(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Uy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Uy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ss(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new g4(Uw());{const o=S4(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const zy="@firebase/storage",$y="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zw="storage";function c5(t,e,n){return t=Le(t),n5(t,e,n)}function u5(t){return t=Le(t),r5(t)}function d5(t,e){return t=Le(t),a5(t,e)}function h5(t=sp(),e){t=Le(t);const r=eu(t,Zw).getImmediate({identifier:e}),s=b_("storage");return s&&f5(r,...s),r}function f5(t,e,n,r={}){l5(t,e,n,r)}function p5(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new em(n,r,s,e,hs)}function m5(){Zr(new wr(Zw,p5,"PUBLIC").setMultipleInstances(!0)),hn(zy,$y,""),hn(zy,$y,"esm2017")}m5();const $={name:"نادي الإبداع والابتكار",englishName:"Creativity & Innovation Club",faculty:"كلية العلوم والتكنولوجيا",university:"جامعة تامنغست",academicYear:"2026 / 2027",email:"creativityinnovationclubtam@gmail.com",address:"كلية العلوم والتكنولوجيا، القطب الجامعي، تامنغست",socialLinks:{facebook:"https://www.facebook.com/share/19guWubGZ1/"},images:{clubLogo:"./images/club_logo.jpg",facultyLogo:"./images/faculty_logo.jpg",universityLogo:"./images/university_logo.jpg",memberPlaceholder:"./images/member_placeholder.jpg"},documents:{fileName:"البطاقة_التقنية_لنادي_الإبداع_والابتكار_CIC.pdf",pdfUrl:"./documents/البطاقة_التقنية_لنادي_الإبداع_والابتكار_CIC.pdf"},features:[{id:"embedded",title:"الإلكترونيات والأنظمة المدمجة",description:"برمجة المتحكمات الدقيقة (Arduino, ESP32, STM32) والتعامل مع الحساسات والدوائر الإلكترونية عملياً.",icon:"Cpu",badge:"عتاد وهندسة"},{id:"robotics",title:"الروبوتات والميكاترونيكس",description:"تصميم وتركيب الروبوتات المتحركة والأذرع الآلية وبرمجة خوارزميات التوجيه وتفادي العقبات.",icon:"Bot",badge:"روبوتيكس"},{id:"programming",title:"البرمجة وتطوير البرمجيات",description:"تطوير المهارات البرمجية بلغات مثل C++ و Python وربط العتاد بواجهات الاستخدام والأنظمة الذكية.",icon:"Code2",badge:"برمجيات"},{id:"pcb",title:"تصميم الدوائر المطبوعة (PCB)",description:"رسم المخططات الإلكترونية وتصميم لوحات PCB وتجهيزها للتنفيذ والاختبار المخبري.",icon:"Layers",badge:"تصميم وتصنيع"}],supervisor:{name:"د. أستاذ جامعي مشرف",role:"الأستاذ المشرف على النادي",department:"كلية العلوم والتكنولوجيا - جامعة تامنغست",description:"مرافقة وتأطير علمي وأكاديمي لنشاطات النادي ومشاريع الطلبة.",image:"./images/member_placeholder.jpg"},executiveBoard:[{id:1,name:"رئيس النادي",role:"رئيس نادي الإبداع والابتكار",specialty:"هندسة كهربائية وإلكترونيات",image:"./images/president.jpg",badge:"الرئاسة"},{id:2,name:"نائب الرئيس",role:"نائب رئيس النادي",specialty:"هندسة إلكتروميكانيكية",image:"./images/vice_president.jpg",badge:"الإدارة"},{id:3,name:"الأمين العام",role:"الأمانة العامة والشؤون الإدارية",specialty:"إعلام آلي وهندسة برمجيات",image:"./images/member_placeholder.jpg",badge:"الأمانة العامة"},{id:4,name:"مسؤول الإعلام والاتصال",role:"خلية الإعلام والتصميم",specialty:"تطوير ويب وإعلام رقمي",image:"./images/media_officer.jpg",badge:"الإعلام"},{id:5,name:"مسؤول الأنشطة والمشاريع",role:"منسق الورشات التقنية",specialty:"أنظمة مدمجة وإلكترونيات",image:"./images/activities_officer.jpg",badge:"الأنشطة"},{id:6,name:"مسؤول المالية والعتاد",role:"إدارة الوسائل واللوجستيك",specialty:"هندسة ميكانيكية وعتاد",image:"./images/finance_officer.jpg",badge:"اللوجستيك"}],initialCourses:[{id:"c1",title:"أساسيات برمجة الأردوينو وبناء الروبوتات",description:"دورة تطبيقية للتعرف على المتحكمات الدقيقة، المستشعرات التناظرية والرقمية، وبرمجة محركات السيرفو والـ DC.",instructor:"مؤطرو خلية الروبوتيكس",duration:"4 أسابيع",date:"يومي السبت والأربعاء",seats:25,category:"روبوتات وإلكترونيات",status:"open",tags:["Arduino","Robotics","C++"]},{id:"c2",title:"إنترنت الأشياء (IoT) والأنظمة المدمجة مع ESP32",description:"ربط العتاد بالشبكة والتحكم بالأجهزة ومراقبة الحساسات عن بعد عبر بروتوكولات الاتصال الحديثة.",instructor:"مؤطرو الأنظمة المدمجة",duration:"3 أسابيع",date:"يومي الأحد والثلاثاء",seats:20,category:"IoT والشبكات",status:"open",tags:["ESP32","IoT","Sensors"]}]},uo={apiKey:"AIzaSyB2htKf-q8DjJWMsttmWtI2LdJ3UYvsxjY",authDomain:"cic-club.firebaseapp.com",projectId:"cic-club",storageBucket:"cic-club.firebasestorage.app",messagingSenderId:"776254095058",appId:"1:776254095058:web:76201e247ae1583f46b70b"},e2=!!(uo.apiKey&&uo.apiKey!=="YOUR_API_KEY"&&uo.projectId&&uo.projectId!=="YOUR_PROJECT_ID");let ho=null,fo=null,ae=null,Bs=null;if(e2)try{ho=k0().length===0?k_(uo):k0()[0],fo=Qk(ho),ae=LA(ho),Bs=h5(ho),Bs&&(Bs.maxUploadRetryTime=8e3,Bs.maxOperationRetryTime=8e3)}catch(t){console.warn("Firebase live init failed, fallback active:",t)}const Pe=!!(e2&&ho),Co="sti_club_members",Ro="sti_club_courses",jc="sti_club_registrations",bl="sti_club_admin_session",Pc="cic_club_supervisor",Vr="cic_club_board_members",g5=()=>{const t=localStorage.getItem(Pc);return t?JSON.parse(t):(localStorage.setItem(Pc,JSON.stringify($.supervisor)),$.supervisor)},Ji=()=>{const t=localStorage.getItem(Vr);return t?JSON.parse(t):(localStorage.setItem(Vr,JSON.stringify($.executiveBoard)),$.executiveBoard)},El=()=>{const t=localStorage.getItem(Ro);return t?JSON.parse(t):(localStorage.setItem(Ro,JSON.stringify($.initialCourses)),$.initialCourses)},Zi=()=>{const t=localStorage.getItem(Co);if(!t){const e=[{id:"demo-1",fullName:"محمد بن علي العربي",email:"mohamed.arabi@univ-tam.dz",whatsapp:"0655123456",major:"هندسة إلكترونية وأنظمة مدمجة",studyYear:"سنة ثانية ماستر (Master 2)",schoolCertUrl:"./images/member_placeholder.jpg",schoolCertName:"شهادة_مدرسية_محمد.pdf",studentCardUrl:"./images/member_placeholder.jpg",studentCardName:"بطاقة_طالب_محمد.jpg",status:"مقبول",createdAt:new Date().toISOString()},{id:"demo-2",fullName:"فاطمة الزهراء قاسمي",email:"fatima.kacemi@gmail.com",whatsapp:"0540987654",major:"إعلام آلي وهندسة البرمجيات",studyYear:"سنة ثالثة ليسانس (L3)",schoolCertUrl:"./images/member_placeholder.jpg",schoolCertName:"شهادة_مدرسية_فاطمة.pdf",studentCardUrl:"./images/member_placeholder.jpg",studentCardName:"بطاقة_طالب_فاطمة.jpg",status:"قيد المراجعة",createdAt:new Date(Date.now()-864e5).toISOString()}];return localStorage.setItem(Co,JSON.stringify(e)),e}return JSON.parse(t)},y5=()=>{const t=localStorage.getItem(jc);if(!t){const e=[{id:"reg-1",courseId:"c1",courseTitle:"أساسيات برمجة الأردوينو وبناء الروبوتات",fullName:"حمزة مسعودي",email:"hamza.m@univ-tam.dz",whatsapp:"0661223344",major:"هندسة إلكترونية وأنظمة مدمجة",studyYear:"سنة ثالثة ليسانس (L3)",createdAt:new Date().toISOString()},{id:"reg-2",courseId:"c1",courseTitle:"أساسيات برمجة الأردوينو وبناء الروبوتات",fullName:"ياسمين بن الشيخ",email:"yasmine.b@univ-tam.dz",whatsapp:"0550112233",major:"إعلام آلي وهندسة البرمجيات",studyYear:"سنة أولى ماستر (M1)",createdAt:new Date(Date.now()-36e5).toISOString()},{id:"reg-3",courseId:"c1",courseTitle:"أساسيات برمجة الأردوينو وبناء الروبوتات",fullName:"عبد القادر تواتي",email:"kader.touati@gmail.com",whatsapp:"0770998877",major:"هندسة كهربائية",studyYear:"سنة ثانية ليسانس (L2)",createdAt:new Date(Date.now()-72e5).toISOString()},{id:"reg-4",courseId:"c2",courseTitle:"إنترنت الأشياء (IoT) والأنظمة المدمجة مع ESP32",fullName:"أمين قدور",email:"amine.kaddour@gmail.com",whatsapp:"0665443322",major:"ميكاترونيكس وروبوتات",studyYear:"سنة ثانية ماستر (M2)",createdAt:new Date(Date.now()-864e5).toISOString()},{id:"reg-5",courseId:"c2",courseTitle:"إنترنت الأشياء (IoT) والأنظمة المدمجة مع ESP32",fullName:"مريم لعريبي",email:"meriem.laaribi@univ-tam.dz",whatsapp:"0541223344",major:"إعلام آلي وهندسة البرمجيات",studyYear:"سنة ثالثة ليسانس (L3)",createdAt:new Date(Date.now()-9e7).toISOString()}];return localStorage.setItem(jc,JSON.stringify(e)),e}return JSON.parse(t)},x5=(t,e=1024,n=.7)=>new Promise(r=>{if(!t){r("");return}if(!t.type||!t.type.startsWith("image/")){const i=new FileReader;i.onload=()=>r(i.result),i.onerror=()=>r(""),i.readAsDataURL(t);return}const s=new FileReader;s.onload=i=>{const o=new Image;o.onload=()=>{let c=o.width,u=o.height;c>e&&(u=Math.round(u*e/c),c=e);const d=document.createElement("canvas");d.width=c,d.height=u,d.getContext("2d").drawImage(o,0,0,c,u);const g=d.toDataURL("image/jpeg",n);r(g)},o.onerror=()=>r(i.target.result),o.src=i.target.result},s.onerror=()=>r(""),s.readAsDataURL(t)}),ge={async uploadFile(t,e="documents",n){if(Pe&&Bs)try{const s=`${Date.now()}_${t.name.replace(/[^a-zA-Z0-9._-]/g,"_")}`,i=d5(Bs,`${e}/${s}`),o=c5(i,t);return await new Promise((u,d)=>{let f=!1;const g=setTimeout(()=>{if(!f){f=!0;try{o.cancel()}catch{}d(new Error("STORAGE_TIMEOUT_OR_BLAZE_REQUIRED"))}},5e3);o.on("state_changed",m=>{const E=m.bytesTransferred/m.totalBytes*100;n&&n(E)},m=>{f||(f=!0,clearTimeout(g),d(m))},async()=>{if(!f){f=!0,clearTimeout(g);try{const m=await u5(o.snapshot.ref);u({url:m,name:t.name,size:t.size})}catch(m){d(m)}}})})}catch(s){console.warn("Storage upload bypassed (Spark Free plan active): saving compressed file directly to Firestore.",s)}n&&n(40);const r=await x5(t);return n&&n(100),{url:r,name:t.name,size:t.size}},async submitMembership(t){if(Pe&&ae)try{return{id:(await vl(Kn(ae,"members"),{...t,status:"قيد المراجعة",createdAt:Dr()})).id,...t}}catch(e){throw console.error("Firestore submitMembership error:",e),e.code==="permission-denied"?new Error("تم رفض إذن حفظ الطلب في Firestore. يرجى مراجعة تبويب Rules في Firestore Database."):new Error("تعذر حفظ الطلب في Firestore. يرجى التأكد من تفعيل Firestore Database في Firebase Console.")}else{const e=Zi(),n={id:"loc_"+Date.now(),...t,status:"قيد المراجعة",createdAt:new Date().toISOString()};return e.unshift(n),localStorage.setItem(Co,JSON.stringify(e)),n}},async getMembers(){if(Pe&&ae)try{const t=KA(Kn(ae,"members"),GA("createdAt","desc"));return(await xl(t)).docs.map(n=>({id:n.id,...n.data()}))}catch(t){return console.warn("Firestore getMembers failed, trying local fallback",t),Zi()}else return Zi()},async deleteMember(t){Pe&&ae&&!t.startsWith("loc_")&&!t.startsWith("demo-")&&await Ad(wn(ae,"members",t));const e=Zi().filter(n=>n.id!==t);return localStorage.setItem(Co,JSON.stringify(e)),!0},async updateMemberStatus(t,e){Pe&&ae&&!t.startsWith("loc_")&&!t.startsWith("demo-")&&await Rd(wn(ae,"members",t),{status:e});const n=Zi().map(r=>r.id===t?{...r,status:e}:r);return localStorage.setItem(Co,JSON.stringify(n)),!0},async getCourses(){if(Pe&&ae)try{const t=await xl(Kn(ae,"courses"));if(!t.empty)return t.docs.map(e=>({id:e.id,...e.data()}))}catch(t){console.warn("Firestore getCourses failed, using local",t)}return El()},async addCourse(t){if(Pe&&ae)return{id:(await vl(Kn(ae,"courses"),{...t,createdAt:Dr()})).id,...t};{const e=El(),n={id:"crs_"+Date.now(),...t,createdAt:new Date().toISOString()};return e.unshift(n),localStorage.setItem(Ro,JSON.stringify(e)),n}},async deleteCourse(t){if(Pe&&ae&&!t.startsWith("crs_")&&!t.startsWith("c"))try{await Ad(wn(ae,"courses",t))}catch(n){console.warn(n)}const e=El().filter(n=>n.id!==t);return localStorage.setItem(Ro,JSON.stringify(e)),!0},async updateCourse(t,e){if(Pe&&ae&&!t.startsWith("crs_")&&!t.startsWith("c"))try{await Rd(wn(ae,"courses",t),{...e,updatedAt:Dr()})}catch(r){console.warn(r)}const n=El().map(r=>r.id===t?{...r,...e}:r);return localStorage.setItem(Ro,JSON.stringify(n)),n.find(r=>r.id===t)},async registerForCourse(t){if(Pe&&ae)return{id:(await vl(Kn(ae,"course_registrations"),{...t,createdAt:Dr()})).id,...t};{const e=JSON.parse(localStorage.getItem(jc)||"[]"),n={id:"reg_"+Date.now(),...t,createdAt:new Date().toISOString()};return e.unshift(n),localStorage.setItem(jc,JSON.stringify(e)),n}},async getCourseRegistrations(t=null){if(Pe&&ae)try{const r=(await xl(Kn(ae,"course_registrations"))).docs.map(s=>({id:s.id,...s.data()}));return t?r.filter(s=>s.courseId===t):r}catch(n){console.warn("Firestore getRegistrations failed",n)}const e=y5();return t?e.filter(n=>n.courseId===t):e},async adminLogin(t,e){const n=(t||"").trim().toLowerCase(),r=(e||"").trim();if(Pe&&fo){const s=n.includes("@")?n:`${n}@sticlub.dz`,i=await OS(fo,s,r);return sessionStorage.setItem(bl,JSON.stringify({email:s,isLive:!0})),i.user}else{const s=["admin","cic","admin@sticlub.dz","admin@admin.com",$.email.toLowerCase()],i=["admin","admin123","admin123456","123456","sti2024"];if((s.includes(n)||n.includes("admin")||n.includes("cic"))&&(i.includes(r)||r==="admin"||r.length>=4)){const c={username:n,email:n.includes("@")?n:"admin@cic.dz",isLive:!1,loggedAt:Date.now()};return sessionStorage.setItem(bl,JSON.stringify(c)),{username:n,uid:"mock-admin-uid"}}else throw new Error("بيانات الدخول غير صحيحة.")}},async adminLogout(){return Pe&&fo&&await VS(fo),sessionStorage.removeItem(bl),!0},getAdminSession(){const t=sessionStorage.getItem(bl);return t?JSON.parse(t):null},async getSupervisor(){if(Pe&&ae)try{const t=await JA(wn(ae,"settings","supervisor"));if(t.exists())return t.data()}catch(t){console.warn("Firestore getSupervisor failed, using local",t)}return g5()},async updateSupervisor(t){if(Pe&&ae)try{await ZA(wn(ae,"settings","supervisor"),{...t,updatedAt:Dr()},{merge:!0})}catch(e){console.warn("Firestore updateSupervisor failed",e)}return localStorage.setItem(Pc,JSON.stringify(t)),t},async getExecutiveBoard(){if(Pe&&ae)try{const t=await xl(Kn(ae,"board_members"));if(!t.empty)return t.docs.map(e=>({id:e.id,...e.data()}))}catch(t){console.warn("Firestore getExecutiveBoard failed, using local",t)}return Ji()},async addExecutiveMember(t){if(Pe&&ae)try{const s={id:(await vl(Kn(ae,"board_members"),{...t,createdAt:Dr()})).id,...t},i=Ji();return i.push(s),localStorage.setItem(Vr,JSON.stringify(i)),s}catch(r){console.warn("Firestore addExecutiveMember failed",r)}const e=Ji(),n={id:"board_"+Date.now(),...t,createdAt:new Date().toISOString()};return e.push(n),localStorage.setItem(Vr,JSON.stringify(e)),n},async updateExecutiveMember(t,e){if(Pe&&ae&&!String(t).startsWith("board_")&&typeof t=="string")try{await Rd(wn(ae,"board_members",t),{...e,updatedAt:Dr()})}catch(r){console.warn("Firestore updateExecutiveMember failed",r)}const n=Ji().map(r=>String(r.id)===String(t)?{...r,...e}:r);return localStorage.setItem(Vr,JSON.stringify(n)),n.find(r=>String(r.id)===String(t))},async deleteExecutiveMember(t){if(Pe&&ae&&!String(t).startsWith("board_")&&typeof t=="string")try{await Ad(wn(ae,"board_members",t))}catch(n){console.warn("Firestore deleteExecutiveMember failed",n)}const e=Ji().filter(n=>String(n.id)!==String(t));return localStorage.setItem(Vr,JSON.stringify(e)),!0},async resetBoardToDefaults(){return localStorage.setItem(Pc,JSON.stringify($.supervisor)),localStorage.setItem(Vr,JSON.stringify($.executiveBoard)),{supervisor:$.supervisor,executiveBoard:$.executiveBoard}}};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),t2=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _5={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=L.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...c},u)=>L.createElement("svg",{ref:u,..._5,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:t2("lucide",s),...c},[...o.map(([d,f])=>L.createElement(d,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=(t,e)=>{const n=L.forwardRef(({className:r,...s},i)=>L.createElement(w5,{ref:i,iconNode:e,className:t2(`lucide-${v5(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=Q("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=Q("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=Q("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=Q("BookPlus",[["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=Q("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=Q("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=Q("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=Q("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=Q("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=Q("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=Q("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=Q("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=Q("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=Q("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=Q("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=Q("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=Q("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nf=Q("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rf=Q("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=Q("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=Q("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=Q("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=Q("FileCheck",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=Q("FileSpreadsheet",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=Q("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=Q("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=Q("ImageOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=Q("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=Q("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=Q("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=Q("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=Q("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=Q("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=Q("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=Q("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=Q("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=Q("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=Q("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=Q("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=Q("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=Q("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=Q("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=Q("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=Q("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=Q("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=Q("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=Q("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=Q("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=Q("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=Q("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=Q("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=Q("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=Q("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function H5(){const[t,e]=L.useState(!1),n=s=>{e(!1);const i=document.getElementById(s);if(i){const u=i.getBoundingClientRect().top+window.pageYOffset-85;window.scrollTo({top:u,behavior:"smooth"})}},r=[{name:"عن النادي",id:"about-club"},{name:"الدورات التدريبية",id:"courses"},{name:"تواصل معنا",id:"contact"}];return l.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5 shadow-xs",children:[l.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-8 lg:px-12",children:l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("button",{onClick:()=>n("hero"),className:"flex items-center gap-3.5 text-right group focus:outline-none",children:[l.jsx("div",{className:"w-11 h-11 rounded-xl overflow-hidden border border-slate-200 bg-white p-0.5 shadow-xs",children:l.jsx("img",{src:$.images.clubLogo,alt:$.name,className:"w-full h-full object-cover rounded-lg"})}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#0072B1] transition-colors",children:$.name}),l.jsx("span",{className:"px-2 py-0.5 text-[10px] font-bold bg-[#0072B1]/10 text-[#0072B1] rounded-md border border-[#0072B1]/20",children:"CIC"})]}),l.jsxs("p",{className:"text-xs text-slate-500 hidden sm:block",children:[$.faculty," - ",$.university]})]})]}),l.jsx("nav",{className:"hidden md:flex items-center gap-3",children:r.map(s=>l.jsx("button",{onClick:()=>n(s.id),className:"px-4 py-2 text-sm font-semibold text-slate-700 hover:text-[#0072B1] hover:bg-slate-50 rounded-xl transition-colors cursor-pointer",children:s.name},s.id))}),l.jsx("div",{className:"hidden sm:flex items-center",children:l.jsxs("button",{onClick:()=>n("membership"),className:"bg-[#0072B1] hover:bg-[#005a8e] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all shadow-xs",children:[l.jsx(xi,{className:"w-4 h-4"}),l.jsx("span",{children:"طلب العضوية"})]})}),l.jsxs("div",{className:"flex md:hidden items-center gap-2",children:[l.jsx("button",{onClick:()=>n("membership"),className:"bg-[#0072B1] text-white px-3.5 py-1.5 rounded-lg text-xs font-bold sm:hidden",children:"انضمام"}),l.jsx("button",{onClick:()=>e(!t),className:"p-2 rounded-xl text-slate-600 hover:text-slate-900 bg-slate-100 border border-slate-200","aria-label":"القائمة",children:t?l.jsx(as,{className:"w-5 h-5"}):l.jsx(V5,{className:"w-5 h-5"})})]})]})}),t&&l.jsx("div",{className:"md:hidden bg-white border-b border-slate-200 px-6 pt-3 pb-6 shadow-lg",children:l.jsxs("div",{className:"flex flex-col space-y-1.5",children:[r.map(s=>l.jsx("button",{onClick:()=>n(s.id),className:"w-full text-right px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-50 hover:text-[#0072B1] transition-colors",children:s.name},s.id)),l.jsx("div",{className:"pt-3 mt-2 border-t border-slate-100",children:l.jsxs("button",{onClick:()=>n("membership"),className:"w-full bg-[#0072B1] hover:bg-[#005a8e] text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2",children:[l.jsx(xi,{className:"w-4 h-4"}),l.jsx("span",{children:"نموذج الانضمام للعضوية"})]})})]})})]})}function K5(){const t=e=>{const n=document.getElementById(e);if(n){const s=n.getBoundingClientRect().top+window.pageYOffset-85;window.scrollTo({top:s,behavior:"smooth"})}};return l.jsx("div",{id:"hero",className:"pt-28 pb-24 lg:pt-40 lg:pb-32 bg-slate-50 border-b border-slate-200",children:l.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-center gap-3 mb-12",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-xs font-bold text-purple-700 shadow-xs hover:bg-purple-100/70 transition-colors",children:[l.jsx(gi,{className:"w-3.5 h-3.5 text-purple-600"}),l.jsx("span",{children:$.university})]}),l.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700 shadow-xs hover:bg-emerald-100/70 transition-colors",children:[l.jsx(nf,{className:"w-3.5 h-3.5 text-emerald-600"}),l.jsx("span",{children:$.faculty})]}),l.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0072B1] shadow-xs hover:bg-blue-100/70 transition-colors",children:[l.jsx($5,{className:"w-3.5 h-3.5 text-[#0072B1]"}),l.jsx("span",{children:$.name})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",children:[l.jsxs("div",{className:"lg:col-span-7 text-center lg:text-right space-y-8",children:[l.jsx("div",{className:"inline-block px-4 py-2 rounded-xl bg-blue-50 border-2 border-blue-200 text-[#0072B1] text-xs font-bold",children:"نادي الإبداع والابتكار • CIC"}),l.jsxs("h1",{className:"text-3xl sm:text-5xl font-black text-slate-900 leading-normal sm:leading-snug",children:["نادي الإبداع والابتكار ",l.jsx("br",{}),l.jsx("span",{className:"text-[#0072B1]",children:$.englishName})]}),l.jsxs("p",{className:"text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal",children:["النادي العلمي والتقني المعتمد بـ ",l.jsx("strong",{className:"text-slate-900 font-bold",children:$.faculty}),". فضاء جامعي تطبيقي لتطوير المهارات الهندسية في الروبوتات، الإلكترونيات، وبرمجة الأنظمة المدمجة الذكية."]}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center lg:justify-start gap-4",children:[l.jsxs("button",{onClick:()=>t("membership"),className:"bg-[#0072B1] hover:bg-[#005a8e] text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-base flex items-center gap-2 transition-all shadow-md",children:[l.jsx("span",{children:"طلب الانضمام للعضوية"}),l.jsx(b5,{className:"w-4 h-4"})]}),l.jsxs("button",{onClick:()=>t("courses"),className:"border-2 border-slate-400 hover:border-[#0072B1] hover:text-[#0072B1] text-slate-800 bg-white px-7 py-4 rounded-xl font-bold text-sm sm:text-base flex items-center gap-2 transition-all shadow-sm",children:[l.jsx(is,{className:"w-4 h-4 text-[#0072B1]"}),l.jsx("span",{children:"استعراض الدورات المتاحة"})]})]}),l.jsxs("div",{className:"pt-6 border-t border-slate-300 flex flex-wrap items-center justify-center lg:justify-start gap-4",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-medium text-slate-600 bg-white px-4 py-2.5 rounded-xl border-2 border-slate-300 shadow-sm",children:[l.jsx("img",{src:$.images.facultyLogo,alt:$.faculty,className:"w-6 h-6 rounded-full object-contain"}),l.jsx("span",{children:"كلية العلوم والتكنولوجيا"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-xs font-medium text-slate-600 bg-white px-4 py-2.5 rounded-xl border-2 border-slate-300 shadow-sm",children:[l.jsx("img",{src:$.images.universityLogo,alt:$.university,className:"w-6 h-6 rounded-full object-contain"}),l.jsx("span",{children:"جامعة تامنغست"})]})]})]}),l.jsx("div",{className:"lg:col-span-5 flex justify-center",children:l.jsxs("div",{className:"w-full max-w-sm bg-white border-2 border-slate-300 rounded-3xl p-8 text-center shadow-lg",children:[l.jsx("div",{className:"w-44 h-44 mx-auto rounded-2xl p-3 bg-slate-50 border-2 border-slate-300 mb-6 flex items-center justify-center shadow-sm",children:l.jsx("img",{src:$.images.clubLogo,alt:$.name,className:"w-full h-full object-contain rounded-xl"})}),l.jsx("h2",{className:"text-xl font-black text-slate-900 mb-1",children:$.name}),l.jsx("p",{className:"text-xs text-[#0072B1] font-bold tracking-wider mb-6",children:"CIC — Creativity & Innovation Club"}),l.jsxs("div",{className:"space-y-3 text-right text-xs pt-4 border-t border-slate-200",children:[l.jsxs("div",{className:"flex items-center justify-between py-3 px-4 rounded-xl bg-slate-50 border-2 border-slate-300",children:[l.jsx("span",{className:"text-slate-500 font-medium",children:"الجهة المشرفة:"}),l.jsx("span",{className:"text-slate-900 font-bold",children:$.faculty})]}),l.jsxs("div",{className:"flex items-center justify-between py-3 px-4 rounded-xl bg-slate-50 border-2 border-slate-300",children:[l.jsx("span",{className:"text-slate-500 font-medium",children:"الموسم الدراسي:"}),l.jsx("span",{className:"text-slate-900 font-bold",children:$.academicYear})]}),l.jsxs("div",{className:"flex items-center justify-between py-3 px-4 rounded-xl bg-emerald-50 border-2 border-emerald-300",children:[l.jsx("span",{className:"text-slate-600 font-medium",children:"حالة التسجيل:"}),l.jsxs("span",{className:"text-emerald-700 font-black flex items-center gap-1.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),"مفتوحة للطلبة"]})]})]})]})})]})]})})}function G5(){const[t,e]=L.useState(!1),[n,r]=L.useState($.supervisor),[s,i]=L.useState($.executiveBoard);L.useEffect(()=>{let u=!0;return(async()=>{try{const[f,g]=await Promise.all([ge.getSupervisor(),ge.getExecutiveBoard()]);u&&(f&&r(f),g&&g.length>0&&i(g))}catch(f){console.warn("Failed to load board in ClubInfo:",f)}})(),()=>{u=!1}},[]);const o={Cpu:nf,Bot:I5,Code2:S5,Layers:O5},c=()=>{const u=document.createElement("a");u.href=$.documents.pdfUrl,u.download=$.documents.fileName,u.target="_blank",document.body.appendChild(u),u.click(),document.body.removeChild(u)};return l.jsxs("section",{id:"about-club",className:"py-24 sm:py-32 bg-slate-100/70 border-b border-slate-200",children:[l.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20",children:[l.jsxs("div",{className:"text-center max-w-xl mx-auto",children:[l.jsx("span",{className:"text-xs font-bold text-[#0072B1] uppercase tracking-wider block mb-3",children:"دليل ومعلومات النادي"}),l.jsx("h2",{className:"text-2xl sm:text-4xl font-black text-slate-900 leading-snug",children:"عن نادي الإبداع والابتكار"}),l.jsx("p",{className:"text-slate-600 text-sm sm:text-base mt-3 leading-relaxed",children:"الرؤية، الرسالة، المحاور التقنية، وفريق التأطير المعتمد بكلية العلوم والتكنولوجيا."})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[l.jsxs("div",{className:"bg-white border-2 border-slate-300 rounded-3xl p-8 sm:p-10 text-right shadow-md hover:border-[#0072B1] transition-all",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-50 text-[#0072B1] flex items-center justify-center mb-6 border-2 border-blue-200",children:l.jsx(k5,{className:"w-8 h-8"})}),l.jsx("h3",{className:"text-xl font-black text-slate-900 mb-4",children:"رؤية النادي"}),l.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:"أن يكون النادي الحاضنة الطلابية النموذجية بكلية العلوم والتكنولوجيا لإعداد مهندسي ومبتكري المستقبل في مجالات الإلكترونيات والتصنيع الذكي وعلوم الروبوتات."})]}),l.jsxs("div",{className:"bg-white border-2 border-slate-300 rounded-3xl p-8 sm:p-10 text-right shadow-md hover:border-[#0072B1] transition-all",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-50 text-[#0072B1] flex items-center justify-center mb-6 border-2 border-blue-200",children:l.jsx(q5,{className:"w-8 h-8"})}),l.jsx("h3",{className:"text-xl font-black text-slate-900 mb-4",children:"رسالة النادي"}),l.jsx("p",{className:"text-slate-600 text-sm leading-relaxed",children:"توفير بيئة تدريبية ومخبرية تطبيقية حقيقية للطلبة، ودعمهم في بناء النماذج الأولية لمشاريعهم الهندسية واختبارها للمشاركة في التظاهرات والمسابقات العلمية."})]})]}),l.jsxs("div",{className:"space-y-8",children:[l.jsxs("div",{className:"text-center",children:[l.jsx("h3",{className:"text-xl sm:text-2xl font-black text-slate-900",children:"المحاور التقنية الأساسية"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-500 mt-2",children:"المجالات الهندسية والتطبيقية التي ينشط فيها النادي"})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:$.features.map((u,d)=>{const f=o[u.icon]||nf;return l.jsx("div",{className:"bg-white border-2 border-slate-300 rounded-2xl p-7 text-right flex flex-col justify-between shadow-md hover:border-[#0072B1] transition-all",children:l.jsxs("div",{children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center mb-5 border-2 border-blue-200",children:l.jsx(f,{className:"w-6 h-6"})}),l.jsx("span",{className:"text-[10px] font-bold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-300 inline-block mb-3",children:u.badge}),l.jsx("h4",{className:"text-base font-bold text-slate-900 mb-2 leading-snug",children:u.title}),l.jsx("p",{className:"text-xs text-slate-600 leading-relaxed",children:u.description})]})},u.id||d)})})]}),l.jsxs("div",{className:"space-y-8",children:[l.jsxs("div",{className:"text-center",children:[l.jsx("h3",{className:"text-xl sm:text-2xl font-black text-slate-900",children:"المكتب التنفيذي والأستاذ المشرف"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-500 mt-2",children:"تأطير أكاديمي وإداري لنشاطات النادي"})]}),l.jsx("div",{className:"bg-white border-2 border-slate-300 rounded-3xl p-8 sm:p-10 shadow-md max-w-2xl mx-auto",children:l.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-8 text-center sm:text-right",children:[l.jsx("div",{className:"w-28 h-28 rounded-full overflow-hidden border-2 border-[#0072B1] p-1 bg-white shrink-0 shadow-sm flex items-center justify-center",children:n!=null&&n.image&&n.image.trim()!==""?l.jsx("img",{src:n.image,alt:n.name,className:"w-full h-full object-cover rounded-full",onError:u=>{u.target.onerror=null,u.target.src=$.images.memberPlaceholder}}):l.jsx("div",{className:"w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center text-[#0072B1]",children:l.jsx(gi,{className:"w-12 h-12"})})}),l.jsxs("div",{className:"space-y-2 flex-1",children:[l.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0072B1] text-xs font-bold border-2 border-blue-200",children:[l.jsx(nm,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:(n==null?void 0:n.role)||"الأستاذ المشرف على النادي"})]}),l.jsx("h4",{className:"text-lg font-black text-slate-900",children:n==null?void 0:n.name}),l.jsx("p",{className:"text-xs text-slate-500 font-medium",children:n==null?void 0:n.department}),(n==null?void 0:n.description)&&l.jsx("p",{className:"text-xs text-slate-600 leading-relaxed pt-1",children:n.description})]})]})}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:s&&s.length>0?s.map(u=>l.jsxs("div",{className:"bg-white border-2 border-slate-300 rounded-2xl p-6 text-right flex items-center gap-5 shadow-md hover:border-[#0072B1] transition-all",children:[l.jsx("div",{className:"w-16 h-16 rounded-full overflow-hidden border-2 border-slate-300 p-0.5 shrink-0 bg-slate-50 flex items-center justify-center",children:u.image&&u.image.trim()!==""?l.jsx("img",{src:u.image,alt:u.name,className:"w-full h-full object-cover rounded-full",onError:d=>{d.target.onerror=null,d.target.src=$.images.memberPlaceholder}}):l.jsx("div",{className:"w-full h-full rounded-full bg-gradient-to-br from-blue-50 to-slate-100 text-[#0072B1] flex items-center justify-center",children:l.jsx(Zs,{className:"w-8 h-8"})})}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0072B1] border border-blue-200 inline-block mb-1",children:u.badge||"المكتب التنفيذي"}),l.jsx("h5",{className:"text-sm font-black text-slate-900 truncate",children:u.name}),l.jsx("p",{className:"text-xs text-[#0072B1] font-bold truncate mt-0.5",children:u.role}),u.specialty&&l.jsx("p",{className:"text-[11px] text-slate-500 truncate mt-0.5",children:u.specialty})]})]},u.id)):l.jsx("div",{className:"col-span-full py-8 text-center text-slate-400",children:l.jsx("p",{className:"text-sm",children:"سيتم الإعلان عن تشكيلة المكتب التنفيذي قريباً"})})})]}),l.jsxs("div",{className:"bg-white border-2 border-slate-300 rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 shadow-md",children:[l.jsxs("div",{className:"text-right space-y-3",children:[l.jsx("span",{className:"text-xs font-bold text-[#0072B1] px-3 py-1.5 rounded-md bg-blue-50 border-2 border-blue-200 inline-block",children:"الوثيقة الرسمية"}),l.jsx("h3",{className:"text-xl font-black text-slate-900",children:"البطاقة التقنية المعتمدة للنادي"}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-600 max-w-lg leading-relaxed",children:"تحتوي على الرزنامة التكوينية، شروط الانخراط، والأهداف السنوية المعتمدة بكلية العلوم والتكنولوجيا."})]}),l.jsxs("div",{className:"flex items-center gap-3 shrink-0 flex-wrap",children:[l.jsxs("button",{onClick:c,className:"bg-[#0072B1] hover:bg-[#005a8e] text-white px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-sm",title:"تحميل البطاقة التقنية الرسمية كملف PDF",children:[l.jsx(rf,{className:"w-4 h-4"}),l.jsx("span",{children:"تحميل البطاقة التقنية (PDF)"})]}),l.jsxs("button",{onClick:()=>e(!0),className:"border-2 border-slate-300 hover:border-slate-400 text-slate-800 bg-white px-5 py-3.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-colors shadow-sm",title:"معاينة محتوى البطاقة التقنية",children:[l.jsx(Dc,{className:"w-4 h-4 text-[#0072B1]"}),l.jsx("span",{children:"معاينة المحتوى"})]})]})]})]}),t&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn",children:l.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full text-right relative shadow-2xl border-2 border-slate-300 max-h-[88vh] flex flex-col",children:[l.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-200",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-bold text-[#0072B1] block",children:"وثيقة رسمية معتمدة (PDF)"}),l.jsx("h3",{className:"text-base sm:text-lg font-black text-slate-900",children:"البطاقة التقنية والتعريفية الشاملة لنادي الإبداع والابتكار (CIC)"})]}),l.jsx("button",{onClick:()=>e(!1),className:"p-1.5 rounded-xl text-slate-400 hover:text-slate-600 bg-slate-100 border border-slate-200",children:l.jsx(as,{className:"w-5 h-5"})})]}),l.jsxs("div",{className:"flex-1 overflow-y-auto py-4 space-y-4 text-xs text-slate-700 leading-relaxed pr-1",children:[l.jsxs("div",{className:"p-3 bg-blue-50/70 border border-blue-200 rounded-xl space-y-1",children:[l.jsx("p",{className:"font-bold text-slate-900",children:"الجمهورية الجزائرية الديمقراطية الشعبية • وزارة التعليم العالي والبحث العلمي"}),l.jsxs("p",{className:"text-[#0072B1] font-bold",children:[$.university," — ",$.faculty]}),l.jsxs("p",{className:"text-[11px] text-slate-500 font-medium",children:["الموسم الجامعي: ",$.academicYear," | كود الوثيقة: CIC-DOC-01"]})]}),l.jsxs("div",{className:"border border-slate-200 rounded-xl p-3.5 space-y-1.5",children:[l.jsx("h4",{className:"font-bold text-slate-900 text-xs text-[#0072B1]",children:"1. التعريف والتبعية الأكاديمية:"}),l.jsx("p",{children:"نادي الإبداع والابتكار (Creativity & Innovation Club - CIC) هو نادٍ علمي تقني طلابي معتمد برحاب كلية العلوم والتكنولوجيا بجامعة تامنغست، ينشط تحت إشراف وتأطير أساتذة الكلية."}),l.jsx("p",{className:"font-semibold text-slate-800",children:"الشعار: « فضاء طلابي لتطوير المهارات الهندسية، الروبوتات والأنظمة الذكية »"})]}),l.jsxs("div",{className:"border border-slate-200 rounded-xl p-3.5 space-y-1.5",children:[l.jsx("h4",{className:"font-bold text-slate-900 text-xs text-[#0072B1]",children:"2. الأهداف الاستراتيجية والتطبيقية:"}),l.jsxs("ul",{className:"list-disc list-inside space-y-1 text-slate-600",children:[l.jsx("li",{children:"تطوير المهارات التطبيقية للطلبة وربط المعارف النظرية بالجانب العملي في ورشات الكلية."}),l.jsx("li",{children:"تشجيع الابتكار وبناء النماذج الهندسية الأولية (Prototypes) القابلة للتطبيق الميداني."}),l.jsx("li",{children:"تمثيل جامعة تامنغست وكلية العلوم والتكنولوجيا في المسابقات والهاكاثونات العلمية."}),l.jsx("li",{children:"تنظيم ورشات دورية ودورات تدريبية مجانية لجميع طلبة الكلية."})]})]}),l.jsxs("div",{className:"border border-slate-200 rounded-xl p-3.5 space-y-1.5",children:[l.jsx("h4",{className:"font-bold text-slate-900 text-xs text-[#0072B1]",children:"3. المحاور التكوينية المعتمدة:"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-[11px]",children:[l.jsxs("div",{className:"bg-slate-50 p-2 rounded-lg border border-slate-200",children:[l.jsx("strong",{className:"text-slate-900 block",children:"• الإلكترونيات والأنظمة المدمجة:"}),l.jsx("span",{children:"برمجة المتحكمات الدقيقة (Arduino, ESP32, STM32) والحساسات."})]}),l.jsxs("div",{className:"bg-slate-50 p-2 rounded-lg border border-slate-200",children:[l.jsx("strong",{className:"text-slate-900 block",children:"• الروبوتات والميكاترونيكس:"}),l.jsx("span",{children:"تصميم الروبوتات والأنظمة المستقلة والأذرع الآلية."})]}),l.jsxs("div",{className:"bg-slate-50 p-2 rounded-lg border border-slate-200",children:[l.jsx("strong",{className:"text-slate-900 block",children:"• البرمجة وتطوير البرمجيات:"}),l.jsx("span",{children:"لغات البرمجة C++ و Python وتطبيقات التحكم."})]}),l.jsxs("div",{className:"bg-slate-50 p-2 rounded-lg border border-slate-200",children:[l.jsx("strong",{className:"text-slate-900 block",children:"• تصميم الدوائر المطبوعة (PCB) و IoT:"}),l.jsx("span",{children:"تصميم اللوحات الإلكترونية وتطبيقات إنترنت الأشياء."})]})]})]}),l.jsxs("div",{className:"border border-slate-200 rounded-xl p-3.5 space-y-1.5",children:[l.jsx("h4",{className:"font-bold text-slate-900 text-xs text-[#0072B1]",children:"4. شروط الانضمام والعضوية:"}),l.jsx("p",{children:"• أن يكون الطالب مسجلاً بصفة نظامية بجامعة تامنغست."}),l.jsx("p",{children:"• إرفاق الشهادة المدرسية الحالية وبطاقة الطالب الجامعية عبر بوابة الموقع."}),l.jsx("p",{children:"• الالتزام بحضور الورشات التدريبية والمشاركة الفعالة في مشاريع النادي."})]}),l.jsxs("div",{className:"border border-slate-200 rounded-xl p-3.5 space-y-1 text-slate-600",children:[l.jsx("h4",{className:"font-bold text-slate-900 text-xs text-[#0072B1]",children:"5. التواصل الرسمي:"}),l.jsxs("p",{children:["• البريد الإلكتروني: ",l.jsx("span",{className:"font-mono font-bold text-slate-800",children:$.email})]}),l.jsxs("p",{children:["• صفحة فيسبوك: ",l.jsx("span",{className:"font-mono text-blue-600",children:"facebook.com/share/19guWubGZ1/"})]}),l.jsxs("p",{children:["• المقر: ",$.address]})]})]}),l.jsxs("div",{className:"pt-4 border-t border-slate-200 flex items-center justify-between gap-3",children:[l.jsx("button",{onClick:()=>e(!1),className:"px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors",children:"إغلاق"}),l.jsxs("button",{onClick:c,className:"bg-[#0072B1] hover:bg-[#005a8e] text-white px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all shadow-sm",children:[l.jsx(rf,{className:"w-4 h-4"}),l.jsx("span",{children:"تحميل كملف PDF رسمي الآن"})]})]})]})})]})}function Q5({course:t,onClose:e,onSuccess:n}){const[r,s]=L.useState({fullName:"",email:"",whatsapp:"",major:"",studyYear:"سنة ثانية ليسانس (L2)"}),[i,o]=L.useState(!1),[c,u]=L.useState(!1),[d,f]=L.useState(""),g=["السنة الأولى ليسانس (L1)","السنة الثانية ليسانس (L2)","السنة الثالثة ليسانس (L3)","السنة الأولى ماستر (M1)","السنة الثانية ماستر (M2)","دكتوراه / باحث"],m=S=>{const{name:R,value:k}=S.target;s(T=>({...T,[R]:k}))},E=async S=>{if(S.preventDefault(),f(""),!r.fullName.trim()||!r.email.trim()||!r.whatsapp.trim()){f("يرجى ملء جميع الحقول الإلزامية.");return}try{o(!0);const R={courseId:t.id,courseTitle:t.title,fullName:r.fullName.trim(),email:r.email.trim().toLowerCase(),whatsapp:r.whatsapp.trim(),major:r.major.trim(),studyYear:r.studyYear,registeredAt:new Date().toISOString(),registrationDateFormatted:new Date().toLocaleDateString("ar-DZ")};await ge.registerForCourse(R),o(!1),u(!0),n&&n()}catch(R){console.error(R),o(!1),f(R.message||"فشل التسجيل. يرجى المحاولة لاحقاً.")}};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fadeIn",children:l.jsxs("div",{className:"bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 max-w-lg w-full text-right relative shadow-2xl max-h-[90vh] overflow-y-auto",children:[l.jsx("button",{onClick:e,className:"absolute top-4 left-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 bg-slate-100 transition-colors",children:l.jsx(as,{className:"w-5 h-5"})}),c?l.jsxs("div",{className:"text-center py-6 space-y-4",children:[l.jsx("div",{className:"w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center",children:l.jsx(Ao,{className:"w-10 h-10"})}),l.jsx("h3",{className:"text-xl font-bold text-slate-900",children:"تم تأكيد تسجيلك في الدورة بنجاح!"}),l.jsxs("p",{className:"text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md mx-auto",children:["أهلاً بك يا ",l.jsx("span",{className:"text-[#0072B1] font-bold",children:r.fullName})," في ورشة:",l.jsx("br",{}),l.jsxs("strong",{className:"text-slate-900",children:['"',t.title,'"']})]}),l.jsxs("div",{className:"bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-xs text-slate-600 space-y-1.5 text-right",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"المؤطر:"}),l.jsx("span",{className:"text-slate-900 font-semibold",children:t.instructor||"مؤطرو النادي"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"الموعد:"}),l.jsx("span",{className:"text-[#0072B1] font-semibold",children:t.date||"سيحدد عبر مجموعة الواتساب"})]})]}),l.jsx("button",{onClick:e,className:"w-full bg-[#0072B1] hover:bg-[#005a8e] text-white py-2.5 rounded-xl font-bold text-xs mt-3 shadow-xs",children:"إغلاق"})]}):l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-3 mb-5",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center shrink-0",children:l.jsx(is,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-bold text-[#0072B1] block",children:"تسجيل طالب في ورشة تدريبية"}),l.jsx("h3",{className:"text-base sm:text-lg font-bold text-slate-900 line-clamp-1",children:t.title})]})]}),d&&l.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2",children:[l.jsx(mi,{className:"w-4 h-4 shrink-0 text-red-500"}),l.jsx("span",{children:d})]}),l.jsxs("form",{onSubmit:E,className:"space-y-3.5",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:["الاسم واللقب الكامل ",l.jsx("span",{className:"text-[#0072B1]",children:"*"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"text",name:"fullName",value:r.fullName,onChange:m,placeholder:"اكتب اسمك الكامل هنا...",required:!0,className:"w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] pr-9"}),l.jsx(Zs,{className:"w-4 h-4 text-slate-400 absolute top-3 right-3 pointer-events-none"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:["البريد الإلكتروني ",l.jsx("span",{className:"text-[#0072B1]",children:"*"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"email",name:"email",value:r.email,onChange:m,placeholder:"student@univ-tam.dz",required:!0,className:"w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] pr-9 text-left dir-ltr"}),l.jsx(yi,{className:"w-4 h-4 text-slate-400 absolute top-3 right-3 pointer-events-none"})]})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:["رقم الهاتف (واتساب) ",l.jsx("span",{className:"text-[#0072B1]",children:"*"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"tel",name:"whatsapp",value:r.whatsapp,onChange:m,placeholder:"06 XX XX XX XX",required:!0,className:"w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] pr-9 text-left dir-ltr"}),l.jsx(bu,{className:"w-4 h-4 text-slate-400 absolute top-3 right-3 pointer-events-none"})]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:"التخصص الجامعي"}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"text",name:"major",value:r.major,onChange:m,placeholder:"إلكترونيات / إعلام آلي",className:"w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] pr-9"}),l.jsx(gi,{className:"w-4 h-4 text-slate-400 absolute top-3 right-3 pointer-events-none"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:"السنة الدراسية"}),l.jsx("select",{name:"studyYear",value:r.studyYear,onChange:m,className:"w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0072B1]",children:g.map(S=>l.jsx("option",{value:S,children:S},S))})]})]}),l.jsx("div",{className:"pt-2",children:l.jsx("button",{type:"submit",disabled:i,className:"w-full bg-[#0072B1] hover:bg-[#005a8e] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-xs",children:i?l.jsxs(l.Fragment,{children:[l.jsx(os,{className:"w-4 h-4 animate-spin"}),l.jsx("span",{children:"جاري تسجيل الحضور..."})]}):l.jsx("span",{children:"تأكيد التسجيل في الدورة"})})})]})]})]})})}function Y5(){const[t,e]=L.useState([]),[n,r]=L.useState(!0),[s,i]=L.useState(null),o=async()=>{try{r(!0);const c=await ge.getCourses();e(c)}catch(c){console.error("Failed to fetch courses:",c)}finally{r(!1)}};return L.useEffect(()=>{o()},[]),l.jsxs("section",{id:"courses",className:"py-24 sm:py-32 bg-white border-b border-slate-200",children:[l.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"text-center max-w-xl mx-auto mb-14",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-50 text-[#0072B1] flex items-center justify-center mx-auto mb-4 border-2 border-blue-200",children:l.jsx(is,{className:"w-8 h-8"})}),l.jsx("span",{className:"text-xs font-bold text-[#0072B1] uppercase tracking-wider block mb-2",children:"التكوين والورشات"}),l.jsx("h2",{className:"text-2xl sm:text-4xl font-black text-slate-900",children:"الدورات التدريبية المتاحة"}),l.jsx("p",{className:"text-slate-600 text-sm mt-3 leading-relaxed",children:"ورشات وتكوينات معتمدة من إدارة النادي. يمكنك التسجيل المباشر لحجز مقعدك."})]}),n?l.jsxs("div",{className:"text-center py-16",children:[l.jsx("div",{className:"w-8 h-8 border-2 border-slate-300 border-t-[#0072B1] rounded-full animate-spin mx-auto mb-3"}),l.jsx("p",{className:"text-slate-500 text-xs",children:"جاري تحميل الدورات..."})]}):t.length===0?l.jsxs("div",{className:"text-center py-16 bg-slate-50 rounded-3xl border-2 border-slate-300 p-10 max-w-md mx-auto shadow-sm",children:[l.jsx(is,{className:"w-12 h-12 text-slate-400 mx-auto mb-4"}),l.jsx("h4",{className:"text-base font-bold text-slate-900 mb-2",children:"لا توجد ورشات معلنة حالياً"}),l.jsx("p",{className:"text-xs text-slate-500 leading-relaxed",children:"يقوم مسؤولو النادي بإعداد ورشات جديدة للموسم، وسيتم نشرها هنا فور اعتمادها."})]}):l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:t.map(c=>l.jsxs("div",{className:"bg-white border-2 border-slate-300 hover:border-[#0072B1] rounded-3xl p-8 flex flex-col justify-between text-right shadow-md hover:shadow-lg transition-all",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("span",{className:"text-xs font-bold px-3 py-1 rounded-full bg-blue-100 border border-blue-200 text-[#0072B1]",children:c.category||"ورشة تطبيقية"}),l.jsxs("span",{className:"text-xs text-emerald-600 font-bold flex items-center gap-1.5",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),"مفتوح للتسجيل"]})]}),l.jsx("h3",{className:"text-lg sm:text-xl font-bold text-slate-900 mb-3",children:c.title}),l.jsx("p",{className:"text-slate-600 text-xs sm:text-sm leading-relaxed mb-5",children:c.description}),l.jsxs("div",{className:"space-y-2 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border-2 border-slate-300 mb-6",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Aa,{className:"w-4 h-4 text-[#0072B1] shrink-0"}),l.jsxs("span",{children:["المؤطر: ",l.jsx("strong",{className:"text-slate-900",children:c.instructor||"مؤطرو النادي"})]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(ca,{className:"w-4 h-4 text-[#0072B1] shrink-0"}),l.jsxs("span",{children:["المدة: ",l.jsx("strong",{className:"text-slate-900",children:c.duration||"محدد في البرنامج"})]})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(tm,{className:"w-4 h-4 text-[#0072B1] shrink-0"}),l.jsxs("span",{children:["التوقيت: ",l.jsx("strong",{className:"text-slate-900",children:c.date||"حسب التنسيق"})]})]})]})]}),l.jsx("div",{className:"pt-3 border-t border-slate-200 flex justify-end",children:l.jsxs("button",{onClick:()=>i(c),className:"bg-[#0072B1] hover:bg-[#005a8e] text-white px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-sm",children:[l.jsx("span",{children:"تسجيل في الدورة"}),l.jsx(N5,{className:"w-4 h-4"})]})})]},c.id))})]}),s&&l.jsx(Q5,{course:s,onClose:()=>i(null),onSuccess:()=>{}})]})}function X5(){const[t,e]=L.useState({fullName:"",email:"",whatsapp:"",major:"",studyYear:"السنة الأولى ليسانس (L1)"}),[n,r]=L.useState(null),[s,i]=L.useState(null),[o,c]=L.useState(0),[u,d]=L.useState(""),[f,g]=L.useState(!1),[m,E]=L.useState(!1),[S,R]=L.useState(null),[k,T]=L.useState(""),x=["السنة الأولى ليسانس (L1)","السنة الثانية ليسانس (L2)","السنة الثالثة ليسانس (L3)","السنة الأولى ماستر (M1)","السنة الثانية ماستر (M2)","دكتوراه / باحث"],_=y=>{const{name:b,value:N}=y.target;e(A=>({...A,[b]:N}))},j=(y,b)=>{const N=y.target.files[0];if(N){if(N.size>10*1024*1024){T("حجم الملف كبير جداً. يرجى اختيار ملف بحجم أقل من 10 ميغابايت.");return}T(""),b==="schoolCert"?r(N):b==="studentCard"&&i(N)}},M=async y=>{if(y.preventDefault(),T(""),!t.fullName.trim()||!t.email.trim()||!t.whatsapp.trim()||!t.major.trim()){T("يرجى ملء كافة الحقول الإلزامية.");return}if(!n){T("يرجى رفع ملف الشهادة المدرسية.");return}if(!s){T("يرجى رفع ملف بطاقة الطالب.");return}try{g(!0),c(15),d("جاري رفع الشهادة المدرسية...");const b=await ge.uploadFile(n,"members/school_certificates",I=>c(Math.round(I*.45)));d("جاري رفع بطاقة الطالب...");const N=await ge.uploadFile(s,"members/student_cards",I=>c(45+Math.round(I*.45)));c(95),d("جاري حفظ البيانات في قاعدة البيانات...");const A={fullName:t.fullName.trim(),email:t.email.trim().toLowerCase(),whatsapp:t.whatsapp.trim(),major:t.major.trim(),studyYear:t.studyYear,schoolCertUrl:b.url,schoolCertName:b.name,studentCardUrl:N.url,studentCardName:N.name,status:"قيد المراجعة",registrationDate:new Date().toLocaleDateString("ar-DZ")},C=await ge.submitMembership(A);c(100),g(!1),E(!0),R(C)}catch(b){console.error(b),g(!1),T(b.message||"حدث خطأ أثناء إرسال البيانات. يرجى إعادة المحاولة.")}},O=()=>{e({fullName:"",email:"",whatsapp:"",major:"",studyYear:"السنة الأولى ليسانس (L1)"}),r(null),i(null),E(!1),R(null),c(0),T("")},w="w-full bg-white border-2 border-slate-300 focus:border-[#0072B1] rounded-xl px-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all";return l.jsx("section",{id:"membership",className:"py-24 sm:py-32 bg-slate-100/70 border-b border-slate-200",children:l.jsxs("div",{className:"max-w-3xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"text-center max-w-xl mx-auto mb-12",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-50 text-[#0072B1] flex items-center justify-center mx-auto mb-4 border-2 border-blue-200",children:l.jsx(xi,{className:"w-8 h-8"})}),l.jsx("span",{className:"text-xs font-bold text-[#0072B1] uppercase tracking-wider block mb-2",children:"الانضمام للنادي"}),l.jsx("h2",{className:"text-2xl sm:text-4xl font-black text-slate-900 leading-snug",children:"استمارة طلب العضوية"}),l.jsx("p",{className:"text-slate-600 text-sm sm:text-base mt-3 leading-relaxed",children:"املأ البيانات وأرفق وثائقك الجامعية لتأكيد عضويتك الرسمية في نادي الإبداع والابتكار."})]}),m?l.jsxs("div",{className:"bg-white border-2 border-emerald-300 rounded-3xl p-10 sm:p-12 text-center shadow-lg animate-fadeIn",children:[l.jsx("div",{className:"w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5 border-2 border-emerald-300",children:l.jsx(Ao,{className:"w-10 h-10"})}),l.jsx("h3",{className:"text-2xl font-black text-slate-900 mb-3",children:"تم استلام طلب عضويتك بنجاح!"}),l.jsxs("p",{className:"text-slate-600 text-sm max-w-md mx-auto mb-8 leading-relaxed",children:["شكراً لك يا ",l.jsx("strong",{className:"text-slate-900",children:S==null?void 0:S.fullName}),". تم تسجيل بياناتك وحفظ وثائقك، وستقوم إدارة النادي بمراجعة طلبك وإشعارك بالقبول عبر الواتساب."]}),l.jsx("button",{onClick:O,className:"bg-[#0072B1] hover:bg-[#005a8e] text-white px-8 py-3.5 rounded-xl text-sm font-bold transition-all shadow-sm",children:"تقديم طلب عضوية جديد"})]}):l.jsx("div",{className:"bg-white border-2 border-slate-300 rounded-3xl p-6 sm:p-10 shadow-lg",children:l.jsxs("form",{onSubmit:M,className:"space-y-6",children:[k&&l.jsxs("div",{className:"p-4 rounded-xl bg-red-50 border-2 border-red-300 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-2",children:[l.jsx(mi,{className:"w-5 h-5 shrink-0 text-red-500"}),l.jsx("span",{children:k})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-xs font-bold text-slate-800 mb-2 text-right",children:["الاسم واللقب الكامل ",l.jsx("span",{className:"text-[#0072B1]",children:"*"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"text",name:"fullName",value:t.fullName,onChange:_,placeholder:"اكتب اسمك الكامل هنا...",required:!0,className:w+" pr-11"}),l.jsx(Zs,{className:"w-4 h-4 text-slate-400 absolute top-4 right-3.5 pointer-events-none"})]})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-xs font-bold text-slate-800 mb-2 text-right",children:["البريد الإلكتروني ",l.jsx("span",{className:"text-[#0072B1]",children:"*"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"email",name:"email",value:t.email,onChange:_,placeholder:"student@univ-tam.dz",required:!0,className:w+" pr-11 text-left dir-ltr"}),l.jsx(yi,{className:"w-4 h-4 text-slate-400 absolute top-4 right-3.5 pointer-events-none"})]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-6",children:[l.jsxs("div",{children:[l.jsxs("label",{className:"block text-xs font-bold text-slate-800 mb-2 text-right",children:["رقم الهاتف (واتساب) ",l.jsx("span",{className:"text-[#0072B1]",children:"*"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"tel",name:"whatsapp",value:t.whatsapp,onChange:_,placeholder:"06 XX XX XX XX",required:!0,className:w+" pr-11 text-left dir-ltr"}),l.jsx(bu,{className:"w-4 h-4 text-slate-400 absolute top-4 right-3.5 pointer-events-none"})]})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-xs font-bold text-slate-800 mb-2 text-right",children:["التخصص الجامعي ",l.jsx("span",{className:"text-[#0072B1]",children:"*"})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"text",name:"major",value:t.major,onChange:_,placeholder:"إلكترونيات، إعلام آلي، هندسة...",required:!0,className:w+" pr-11"}),l.jsx(gi,{className:"w-4 h-4 text-slate-400 absolute top-4 right-3.5 pointer-events-none"})]})]})]}),l.jsxs("div",{children:[l.jsxs("label",{className:"block text-xs font-bold text-slate-800 mb-2 text-right",children:["السنة الدراسية ",l.jsx("span",{className:"text-[#0072B1]",children:"*"})]}),l.jsx("select",{name:"studyYear",value:t.studyYear,onChange:_,className:w,children:x.map(y=>l.jsx("option",{value:y,children:y},y))})]}),l.jsxs("div",{className:"pt-2",children:[l.jsxs("div",{className:"border-t-2 border-slate-300 pt-6 mb-4",children:[l.jsxs("h4",{className:"text-xs font-black text-slate-900 mb-1.5 flex items-center gap-1.5",children:[l.jsx(j5,{className:"w-4 h-4 text-[#0072B1]"}),l.jsx("span",{children:"الوثائق المطلوبة للتأكيد الجامعي"})]}),l.jsx("p",{className:"text-xs text-slate-500",children:"يرجى رفع صور واضحة أو ملفات PDF للشهادة المدرسية وبطاقة الطالب."})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[l.jsxs("div",{className:`bg-slate-50 border-2 border-dashed rounded-2xl p-6 text-center relative transition-colors ${n?"border-[#0072B1] bg-blue-50/30":"border-slate-400 hover:border-[#0072B1]"}`,children:[l.jsx("input",{type:"file",accept:"image/*,application/pdf",onChange:y=>j(y,"schoolCert"),className:"absolute inset-0 opacity-0 cursor-pointer w-full h-full"}),l.jsx("div",{className:"w-11 h-11 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center mx-auto mb-3 border-2 border-blue-200",children:l.jsx(Hy,{className:"w-5 h-5"})}),l.jsxs("p",{className:"text-xs font-bold text-slate-900 mb-1",children:["الشهادة المدرسية ",l.jsx("span",{className:"text-[#0072B1]",children:"*"})]}),l.jsx("p",{className:"text-[11px] text-slate-500 font-medium",children:n?l.jsx("span",{className:"text-[#0072B1] font-bold",children:n.name}):"انقر أو اسحب الملف هنا"})]}),l.jsxs("div",{className:`bg-slate-50 border-2 border-dashed rounded-2xl p-6 text-center relative transition-colors ${s?"border-[#0072B1] bg-blue-50/30":"border-slate-400 hover:border-[#0072B1]"}`,children:[l.jsx("input",{type:"file",accept:"image/*,application/pdf",onChange:y=>j(y,"studentCard"),className:"absolute inset-0 opacity-0 cursor-pointer w-full h-full"}),l.jsx("div",{className:"w-11 h-11 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center mx-auto mb-3 border-2 border-blue-200",children:l.jsx(Hy,{className:"w-5 h-5"})}),l.jsxs("p",{className:"text-xs font-bold text-slate-900 mb-1",children:["بطاقة الطالب ",l.jsx("span",{className:"text-[#0072B1]",children:"*"})]}),l.jsx("p",{className:"text-[11px] text-slate-500 font-medium",children:s?l.jsx("span",{className:"text-[#0072B1] font-bold",children:s.name}):"انقر أو اسحب الملف هنا"})]})]})]}),f&&l.jsxs("div",{className:"bg-slate-50 border-2 border-slate-300 rounded-xl p-4 space-y-2 text-xs",children:[l.jsxs("div",{className:"flex justify-between text-slate-700 font-bold",children:[l.jsx("span",{children:u}),l.jsxs("span",{className:"font-mono text-[#0072B1]",children:[o,"%"]})]}),l.jsx("div",{className:"w-full bg-slate-200 h-2.5 rounded-full overflow-hidden",children:l.jsx("div",{className:"bg-[#0072B1] h-full transition-all duration-300",style:{width:`${o}%`}})})]}),l.jsx("div",{className:"pt-2",children:l.jsx("button",{type:"submit",disabled:f,className:"w-full bg-[#0072B1] hover:bg-[#005a8e] text-white py-4 rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-md",children:f?l.jsxs(l.Fragment,{children:[l.jsx(os,{className:"w-5 h-5 animate-spin"}),l.jsx("span",{children:"جاري إرسال الطلب وحفظ الملفات..."})]}):l.jsxs(l.Fragment,{children:[l.jsx(xi,{className:"w-5 h-5"}),l.jsx("span",{children:"تأكيد وإرسال طلب العضوية"})]})})})]})})]})})}function J5(){const[t,e]=L.useState(!1),[n,r]=L.useState(!1),[s,i]=L.useState({name:"",email:"",message:""}),o=()=>{navigator.clipboard.writeText($.email),e(!0),setTimeout(()=>e(!1),2e3)},c=d=>{if(d.preventDefault(),!s.name||!s.message)return;const f=`mailto:${$.email}?subject=استفسار من: ${encodeURIComponent(s.name)}&body=${encodeURIComponent(s.message+`

البريد: `+s.email)}`;window.open(f,"_blank"),r(!0)},u="w-full bg-white border-2 border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] transition-colors";return l.jsx("section",{id:"contact",className:"py-24 sm:py-32 bg-white border-b border-slate-200",children:l.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"text-center max-w-xl mx-auto mb-14",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl bg-blue-50 text-[#0072B1] flex items-center justify-center mx-auto mb-4 border-2 border-blue-200",children:l.jsx(yi,{className:"w-8 h-8"})}),l.jsx("span",{className:"text-xs font-bold text-[#0072B1] uppercase tracking-wider block mb-2",children:"التواصل الرسمي"}),l.jsx("h2",{className:"text-2xl sm:text-4xl font-black text-slate-900",children:"تواصل مع إدارة النادي"}),l.jsx("p",{className:"text-slate-600 text-sm mt-3 leading-relaxed",children:"نسعد باستقبال كافة الاستفسارات، الأفكار الهندسية، والشراكات الطلابية."})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-5 text-right",children:[l.jsx("div",{className:"bg-white border-2 border-slate-300 rounded-2xl p-6 sm:p-7 shadow-md",children:l.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("div",{className:"w-12 h-12 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center shrink-0 border-2 border-blue-200",children:l.jsx(yi,{className:"w-6 h-6"})}),l.jsxs("div",{children:[l.jsx("span",{className:"text-xs text-slate-500 block mb-0.5",children:"البريد الإلكتروني الرسمي:"}),l.jsx("a",{href:`mailto:${$.email}`,className:"text-base sm:text-lg font-mono font-bold text-slate-900 hover:text-[#0072B1] transition-colors dir-ltr block",children:$.email})]})]}),l.jsx("button",{onClick:o,className:"border-2 border-slate-300 hover:border-slate-400 bg-white text-slate-700 px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-sm",children:t?l.jsxs(l.Fragment,{children:[l.jsx(Js,{className:"w-3.5 h-3.5 text-emerald-600"}),l.jsx("span",{className:"text-emerald-600",children:"تم النسخ"})]}):l.jsxs(l.Fragment,{children:[l.jsx(C5,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"نسخ الإيميل"})]})})]})}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-5",children:[l.jsxs("div",{className:"bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md space-y-2",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-50 text-[#25D366] flex items-center justify-center mb-3 border-2 border-emerald-200",children:l.jsx("svg",{className:"w-5 h-5 text-[#25D366]",fill:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{d:"M12.031 0C5.394 0 0 5.394 0 12.031c0 2.115.552 4.179 1.6 6l-1.7 6.208 6.354-1.667c1.761.96 3.75 1.469 5.777 1.469 6.637 0 12.031-5.394 12.031-12.031S18.668 0 12.031 0zm0 22.016c-1.802 0-3.568-.485-5.115-1.402l-.367-.218-3.797.996 1.014-3.7-.24-.381c-1.01-1.608-1.543-3.479-1.543-5.28 0-5.508 4.482-9.99 9.99-9.99 5.508 0 9.99 4.482 9.99 9.99 0 5.508-4.482 9.985-9.99 9.985zm5.474-7.48c-.3-.15-1.774-.875-2.05-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.131-.611.136-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.583-.492-.504-.675-.513l-.575-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.1.15.2 2.115 3.23 5.125 4.53.716.31 1.275.495 1.71.633.72.228 1.375.196 1.893.119.578-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"})})}),l.jsx("h4",{className:"text-xs font-bold text-slate-900",children:"واتساب النادي الرسمي"}),l.jsxs("div",{children:[l.jsx("span",{className:"inline-block px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold",children:"سيتوفر قريباً"}),l.jsx("p",{className:"text-[11px] text-slate-500 mt-1",children:"سيتم تفعيل خط التواصل المباشر ومجموعات النادي قريباً"})]})]}),l.jsxs("div",{className:"bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md space-y-2",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center mb-3 border-2 border-blue-200",children:l.jsx(r2,{className:"w-5 h-5"})}),l.jsx("h4",{className:"text-xs font-bold text-slate-900",children:"المقر الرسمي"}),l.jsx("p",{className:"text-xs text-slate-600 leading-relaxed",children:$.address})]})]}),l.jsxs("div",{className:"bg-white border-2 border-slate-300 rounded-2xl p-6 shadow-md",children:[l.jsx("h4",{className:"text-xs font-bold text-slate-900 mb-4",children:"صفحات النادي على شبكات التواصل الاجتماعي:"}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[l.jsxs("a",{href:$.socialLinks.facebook,target:"_blank",rel:"noreferrer",className:"p-3.5 rounded-xl bg-blue-50/50 border-2 border-blue-200 hover:border-blue-500 text-slate-800 hover:text-blue-700 flex items-center justify-between gap-3 text-xs font-bold transition-all shadow-xs group",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("svg",{className:"w-5 h-5 text-[#1877F2] shrink-0",fill:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),l.jsx("span",{className:"group-hover:text-blue-700",children:"فيسبوك"})]}),l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-blue-100 text-blue-700 font-bold",children:"متاح الآن"})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-600 flex items-center justify-between gap-3 text-xs font-medium",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("svg",{className:"w-5 h-5 text-[#25D366] opacity-75 shrink-0",fill:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{d:"M12.031 0C5.394 0 0 5.394 0 12.031c0 2.115.552 4.179 1.6 6l-1.7 6.208 6.354-1.667c1.761.96 3.75 1.469 5.777 1.469 6.637 0 12.031-5.394 12.031-12.031S18.668 0 12.031 0zm0 22.016c-1.802 0-3.568-.485-5.115-1.402l-.367-.218-3.797.996 1.014-3.7-.24-.381c-1.01-1.608-1.543-3.479-1.543-5.28 0-5.508 4.482-9.99 9.99-9.99 5.508 0 9.99 4.482 9.99 9.99 0 5.508-4.482 9.985-9.99 9.985zm5.474-7.48c-.3-.15-1.774-.875-2.05-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.131-.611.136-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.583-.492-.504-.675-.513l-.575-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.1.15.2 2.115 3.23 5.125 4.53.716.31 1.275.495 1.71.633.72.228 1.375.196 1.893.119.578-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"})}),l.jsx("span",{className:"font-bold text-slate-700",children:"واتساب"})]}),l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold",children:"قريباً"})]}),l.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-600 flex items-center justify-between gap-3 text-xs font-medium",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("svg",{className:"w-5 h-5 text-[#E4405F] opacity-75 shrink-0",fill:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),l.jsx("span",{className:"font-bold text-slate-700",children:"انستغرام"})]}),l.jsx("span",{className:"text-[10px] px-2 py-0.5 rounded bg-pink-50 text-pink-700 border border-pink-200 font-bold",children:"قريباً"})]})]})]})]}),l.jsx("div",{className:"lg:col-span-5",children:l.jsxs("div",{className:"bg-white border-2 border-slate-300 rounded-2xl p-7 sm:p-8 text-right shadow-md",children:[l.jsx("h3",{className:"text-base font-bold text-slate-900 mb-1",children:"إرسال استفسار مباشر"}),l.jsx("p",{className:"text-xs text-slate-500 mb-6",children:"تفتح رسالتك في تطبيق البريد لإرسالها مباشرة لإدارة النادي"}),n?l.jsxs("div",{className:"bg-emerald-50 border-2 border-emerald-300 rounded-xl p-6 text-center space-y-2",children:[l.jsx("h4",{className:"text-xs font-bold text-emerald-800",children:"تم تجهيز رسالتك للإرسال!"}),l.jsx("p",{className:"text-[11px] text-emerald-700",children:"شكراً لتواصلك مع نادي الإبداع والابتكار CIC."}),l.jsx("button",{onClick:()=>r(!1),className:"text-xs text-[#0072B1] hover:underline pt-1 block mx-auto",children:"إرسال رسالة أخرى"})]}):l.jsxs("form",{onSubmit:c,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:"الاسم الكامل"}),l.jsx("input",{type:"text",value:s.name,onChange:d=>i({...s,name:d.target.value}),placeholder:"اكتب اسمك الكامل هنا...",required:!0,className:u})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:"البريد الإلكتروني"}),l.jsx("input",{type:"email",value:s.email,onChange:d=>i({...s,email:d.target.value}),placeholder:"email@example.com",className:u+" text-left dir-ltr"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1.5",children:"الرسالة أو الاستفسار"}),l.jsx("textarea",{rows:"4",value:s.message,onChange:d=>i({...s,message:d.target.value}),placeholder:"اكتب استفسارك هنا...",required:!0,className:u+" resize-none"})]}),l.jsxs("button",{type:"submit",className:"w-full bg-[#0072B1] hover:bg-[#005a8e] text-white py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm",children:[l.jsx(B5,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"إرسال الاستفسار"})]})]})]})})]})]})})}function Z5(){const t=new Date().getFullYear(),e=n=>{const r=document.getElementById(n);if(r){const i=r.getBoundingClientRect().top+window.pageYOffset-80;window.scrollTo({top:i,behavior:"smooth"})}};return l.jsx("footer",{className:"bg-slate-100 border-t border-slate-200 text-slate-600 text-right",children:l.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8",children:[l.jsxs("div",{className:"space-y-3",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-10 h-10 rounded-lg overflow-hidden border border-slate-200 p-0.5 bg-white",children:l.jsx("img",{src:$.images.clubLogo,alt:$.name,className:"w-full h-full object-cover rounded"})}),l.jsxs("div",{children:[l.jsx("h3",{className:"text-base font-bold text-slate-900",children:$.name}),l.jsx("span",{className:"text-xs text-[#0072B1] font-bold",children:"CIC"})]})]}),l.jsx("p",{className:"text-xs text-slate-500 leading-relaxed",children:"النادي العلمي والتقني المعتمد بكلية العلوم والتكنولوجيا - جامعة تامنغست. يهدف إلى ترقية المعارف الهندسية، الروبوتات، والابتكار التقني."})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-bold text-slate-900 mb-3",children:"أقسام الموقع"}),l.jsxs("ul",{className:"space-y-2 text-xs",children:[l.jsx("li",{children:l.jsxs("button",{onClick:()=>e("hero"),className:"hover:text-[#0072B1] transition-colors flex items-center gap-1",children:[l.jsx(Tl,{className:"w-3 h-3 text-[#0072B1]"}),l.jsx("span",{children:"الرئيسية"})]})}),l.jsx("li",{children:l.jsxs("button",{onClick:()=>e("about-club"),className:"hover:text-[#0072B1] transition-colors flex items-center gap-1",children:[l.jsx(Tl,{className:"w-3 h-3 text-[#0072B1]"}),l.jsx("span",{children:"عن النادي ومعلوماته"})]})}),l.jsx("li",{children:l.jsxs("button",{onClick:()=>e("courses"),className:"hover:text-[#0072B1] transition-colors flex items-center gap-1",children:[l.jsx(Tl,{className:"w-3 h-3 text-[#0072B1]"}),l.jsx("span",{children:"الدورات التدريبية"})]})}),l.jsx("li",{children:l.jsxs("button",{onClick:()=>e("membership"),className:"hover:text-[#0072B1] transition-colors flex items-center gap-1",children:[l.jsx(Tl,{className:"w-3 h-3 text-[#0072B1]"}),l.jsx("span",{children:"طلب العضوية"})]})})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-bold text-slate-900 mb-3",children:"التبعية الأكاديمية"}),l.jsxs("div",{className:"space-y-2 text-xs text-slate-500",children:[l.jsxs("p",{children:["• ",$.faculty]}),l.jsxs("p",{children:["• ",$.university]}),l.jsxs("p",{children:["• الموسم الجامعي: ",$.academicYear]})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-bold text-slate-900 mb-3",children:"التواصل والشبكات"}),l.jsxs("div",{className:"space-y-2.5 text-xs",children:[l.jsxs("div",{className:"flex items-start gap-2",children:[l.jsx(yi,{className:"w-4 h-4 text-[#0072B1] shrink-0 mt-0.5"}),l.jsx("a",{href:`mailto:${$.email}`,className:"font-mono text-slate-700 hover:text-[#0072B1] dir-ltr text-right transition-colors break-all",children:$.email})]}),l.jsxs("div",{className:"flex items-start gap-2",children:[l.jsx(r2,{className:"w-4 h-4 text-[#0072B1] shrink-0 mt-0.5"}),l.jsx("span",{className:"text-slate-500",children:$.address})]}),l.jsxs("div",{className:"pt-2 flex flex-wrap items-center gap-2",children:[l.jsxs("a",{href:$.socialLinks.facebook,target:"_blank",rel:"noreferrer",className:"px-2.5 py-1 rounded-md bg-white border border-slate-300 text-slate-700 hover:text-blue-600 hover:bg-blue-50 text-[11px] font-bold transition-colors shadow-2xs flex items-center gap-1.5",title:"صفحة فيسبوك الرسمية",children:[l.jsx("svg",{className:"w-3.5 h-3.5 text-[#1877F2] shrink-0",fill:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{d:"M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"})}),l.jsx("span",{children:"فيسبوك"})]}),l.jsxs("span",{className:"px-2.5 py-1 rounded-md bg-slate-200/60 text-slate-600 text-[10px] font-medium flex items-center gap-1.5",title:"سيتوفر قريباً",children:[l.jsx("svg",{className:"w-3.5 h-3.5 text-[#25D366] opacity-75 shrink-0",fill:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{d:"M12.031 0C5.394 0 0 5.394 0 12.031c0 2.115.552 4.179 1.6 6l-1.7 6.208 6.354-1.667c1.761.96 3.75 1.469 5.777 1.469 6.637 0 12.031-5.394 12.031-12.031S18.668 0 12.031 0zm0 22.016c-1.802 0-3.568-.485-5.115-1.402l-.367-.218-3.797.996 1.014-3.7-.24-.381c-1.01-1.608-1.543-3.479-1.543-5.28 0-5.508 4.482-9.99 9.99-9.99 5.508 0 9.99 4.482 9.99 9.99 0 5.508-4.482 9.985-9.99 9.985zm5.474-7.48c-.3-.15-1.774-.875-2.05-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.489-.893-.796-1.496-1.78-1.671-2.08-.175-.3-.019-.462.131-.611.136-.134.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.583-.492-.504-.675-.513l-.575-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5 0 1.475 1.075 2.899 1.225 3.1.15.2 2.115 3.23 5.125 4.53.716.31 1.275.495 1.71.633.72.228 1.375.196 1.893.119.578-.086 1.774-.725 2.024-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z"})}),l.jsx("span",{children:"واتساب (قريباً)"})]}),l.jsxs("span",{className:"px-2.5 py-1 rounded-md bg-slate-200/60 text-slate-600 text-[10px] font-medium flex items-center gap-1.5",title:"سيتوفر قريباً",children:[l.jsx("svg",{className:"w-3.5 h-3.5 text-[#E4405F] opacity-75 shrink-0",fill:"currentColor",viewBox:"0 0 24 24",children:l.jsx("path",{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"})}),l.jsx("span",{children:"انستغرام (قريباً)"})]})]})]})]})]}),l.jsxs("div",{className:"pt-6 border-t border-slate-200 text-xs flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500",children:[l.jsxs("p",{children:["© ",t," ",$.name," (CIC). جميع الحقوق محفوظة."]}),l.jsxs("p",{children:[$.faculty," - ",$.university]})]})]})})}function ej({onLoginSuccess:t}){const[e,n]=L.useState(""),[r,s]=L.useState(""),[i,o]=L.useState(!1),[c,u]=L.useState(!1),[d,f]=L.useState(""),g=async m=>{if(m.preventDefault(),f(""),!e.trim()||!r.trim()){f("يرجى إدخال البريد الإلكتروني وكلمة المرور.");return}try{u(!0);const E=await ge.adminLogin(e.trim(),r);u(!1),t(E)}catch(E){u(!1),f(E.message||"فشل تسجيل الدخول. يرجى التحقق من صحة البيانات.")}};return l.jsx("div",{className:"min-h-screen bg-slate-50 flex items-center justify-center p-4",children:l.jsxs("div",{className:"max-w-md w-full",children:[l.jsxs("div",{className:"mb-5 flex justify-between items-center text-xs",children:[l.jsxs("a",{href:"#/",className:"inline-flex items-center gap-1.5 text-slate-500 hover:text-slate-900 transition-colors",children:[l.jsx(E5,{className:"w-4 h-4"}),l.jsx("span",{children:"العودة للموقع العام"})]}),l.jsxs("div",{className:"inline-flex items-center gap-1.5 text-slate-500",children:[l.jsx("span",{className:`w-2 h-2 rounded-full ${Pe?"bg-emerald-500":"bg-[#0072B1]"}`}),l.jsx("span",{children:Pe?"Firebase متصل":"وضع التجربة المحلي"})]})]}),l.jsxs("div",{className:"bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 text-right shadow-sm",children:[l.jsxs("div",{className:"text-center mb-6",children:[l.jsx("div",{className:"w-14 h-14 mx-auto rounded-xl bg-slate-50 border border-slate-200 p-1 mb-3 shadow-xs",children:l.jsx("img",{src:$.images.clubLogo,alt:$.name,className:"w-full h-full object-cover rounded-lg"})}),l.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-50 text-[#0072B1] text-[10px] font-bold mb-2",children:[l.jsx(nm,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"البوابة الإدارية الخاصة"})]}),l.jsx("h1",{className:"text-xl font-bold text-slate-900",children:"تسجيل دخول الأدمن"}),l.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"إدارة أعضاء ودورات نادي الإبداع والابتكار"})]}),d&&l.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs flex items-center gap-2",children:[l.jsx(mi,{className:"w-4 h-4 shrink-0 text-red-500"}),l.jsx("span",{children:d})]}),l.jsxs("form",{onSubmit:g,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:"اسم المستخدم أو البريد الإلكتروني"}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"text",value:e,onChange:m=>n(m.target.value),placeholder:"",required:!0,className:"w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] text-left dir-ltr pl-3 pr-9"}),l.jsx(yi,{className:"w-4 h-4 text-slate-400 absolute top-3 right-3 pointer-events-none"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-700 mb-1",children:"كلمة المرور"}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:i?"text":"password",value:r,onChange:m=>s(m.target.value),placeholder:"",required:!0,className:"w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0072B1] text-left dir-ltr pl-9 pr-9"}),l.jsx(L5,{className:"w-4 h-4 text-slate-400 absolute top-3 right-3 pointer-events-none"}),l.jsx("button",{type:"button",onClick:()=>o(!i),className:"absolute top-3 left-3 text-slate-400 hover:text-slate-700",children:i?l.jsx(A5,{className:"w-4 h-4"}):l.jsx(Dc,{className:"w-4 h-4"})})]})]}),l.jsx("div",{className:"pt-1",children:l.jsx("button",{type:"submit",disabled:c,className:"w-full bg-[#0072B1] hover:bg-[#005a8e] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-xs",children:c?l.jsxs(l.Fragment,{children:[l.jsx(os,{className:"w-4 h-4 animate-spin"}),l.jsx("span",{children:"جاري تسجيل الدخول..."})]}):l.jsxs(l.Fragment,{children:[l.jsx(D5,{className:"w-4 h-4"}),l.jsx("span",{children:"الدخول للوحة التحكم"})]})})})]})]})]})})}function tj({members:t,onDeleteMember:e,onRefresh:n}){const[r,s]=L.useState(""),[i,o]=L.useState("all"),[c,u]=L.useState(null),[d,f]=L.useState(null),[g,m]=L.useState(null),E=async(x,_)=>{try{m(x),await ge.updateMemberStatus(x,_),n&&n()}catch(j){alert("فشل تحديث الحالة: "+j.message)}finally{m(null)}},S=t.filter(x=>{const _=r.toLowerCase(),j=(x.fullName||"").toLowerCase(),M=(x.email||"").toLowerCase(),O=(x.whatsapp||"").toLowerCase(),w=(x.major||"").toLowerCase(),y=j.includes(_)||M.includes(_)||O.includes(_)||w.includes(_),b=x.status||"قيد المراجعة";return y&&(i==="all"||b===i)}),R=()=>{if(S.length===0){alert("لا توجد بيانات لتصديرها في القائمة المحددة حالياً.");return}const x=window.open("","_blank");if(!x){alert("يرجى السماح بالنوافذ المنبثقة (Popups) في المتصفح لمعاينة وطباعة ملف الـ PDF.");return}const _=i==="all"?"جميع الطلبة المسجلين":i==="مقبول"?"الطلبة المقبولين رسمياً":i==="قيد المراجعة"?"الطلبة قيد المراجعة":"الطلبة المرفوضين",j=S.map((O,w)=>`
      <tr>
        <td style="text-align: center; font-weight: bold; width: 35px;">${w+1}</td>
        <td style="font-weight: bold; font-size: 12px;">${O.fullName||"-"}</td>
        <td>${O.major||"-"}</td>
        <td style="text-align: center; width: 110px;">${O.studyYear||"-"}</td>
        <td style="text-align: center; width: 90px; font-weight: bold; color: ${O.status==="مقبول"?"#047857":O.status==="مرفوض"?"#b91c1c":"#b45309"};">${O.status||"قيد المراجعة"}</td>
        <td style="text-align: center; color: #475569; font-size: 10.5px; width: 95px;">${O.registrationDate||(O.createdAt?new Date(O.createdAt).toLocaleDateString("ar-DZ"):"-")}</td>
        <td style="width: 90px;"></td>
      </tr>
    `).join(""),M=`
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <title>قائمة أعضاء نادي الإبداع والابتكار - ${_}</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4 portrait;
            margin: 12mm 15mm;
          }
          * { box-sizing: border-box; }
          body {
            font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
            color: #0f172a;
            margin: 0;
            padding: 20px;
            direction: rtl;
            background: #ffffff;
            font-size: 11.5px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 2px solid #0072B1;
            padding-bottom: 12px;
            margin-bottom: 16px;
          }
          .header-text {
            font-size: 11px;
            line-height: 1.6;
          }
          .header-title {
            font-weight: 800;
            color: #0072B1;
            font-size: 13px;
            margin-top: 2px;
          }
          .doc-badge {
            text-align: left;
            font-size: 10px;
            color: #64748b;
            line-height: 1.5;
          }
          .title-box {
            background-color: #f8fafc;
            border: 1.5px solid #cbd5e1;
            border-radius: 10px;
            padding: 12px 16px;
            margin-bottom: 16px;
            text-align: center;
          }
          .title-box h1 {
            margin: 0 0 4px 0;
            font-size: 16px;
            color: #0f172a;
            font-weight: 900;
          }
          .sub-title {
            font-size: 13px;
            font-weight: 800;
            color: #0072B1;
          }
          .meta-tags {
            display: flex;
            justify-content: center;
            gap: 16px;
            font-size: 11px;
            color: #334155;
            margin-top: 6px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            font-size: 11px;
          }
          th, td {
            border: 1px solid #cbd5e1;
            padding: 7px 8px;
            text-align: right;
          }
          th {
            background-color: #f1f5f9;
            color: #0f172a;
            font-weight: 700;
            font-size: 11px;
          }
          tr:nth-child(even) { background-color: #f8fafc; }
          .footer-note {
            margin-top: 25px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            font-size: 10px;
            color: #475569;
          }
          .stamp-box {
            border: 1.5px dashed #94a3b8;
            border-radius: 8px;
            width: 150px;
            height: 65px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #94a3b8;
            font-weight: bold;
            font-size: 10px;
          }
          @media print { body { padding: 0; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="header-text">
            <div>الجمهورية الجزائرية الديمقراطية الشعبية</div>
            <div>وزارة التعليم العالي والبحث العلمي</div>
            <div><strong>جامعة تامنغست</strong></div>
            <div>كلية العلوم والتكنولوجيا</div>
            <div class="header-title">نادي الإبداع والابتكار (CIC)</div>
          </div>
          <div class="doc-badge">
            <div>الموسم الجامعي: 2026 / 2027</div>
            <div>تاريخ الإصدار: ${new Date().toLocaleDateString("ar-DZ")}</div>
            <div style="margin-top: 4px; color: #0072B1; font-weight: bold;">وثيقة رسمية لإدارة النادي</div>
          </div>
        </div>

        <div class="title-box">
          <h1>قائمة أعضاء وطلبة نادي الإبداع والابتكار</h1>
          <div class="sub-title">${_}</div>
          <div class="meta-tags">
            <span>التصنيف: <strong>${i==="all"?"الكل":i}</strong></span>
            <span>•</span>
            <span>العدد الإجمالي: <strong>${S.length} طالب</strong></span>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 35px; text-align: center;">#</th>
              <th>اسم ولقب الطالب</th>
              <th>التخصص الجامعي</th>
              <th style="width: 110px; text-align: center;">السنة الدراسية</th>
              <th style="width: 90px; text-align: center;">حالة الطلب</th>
              <th style="width: 95px; text-align: center;">تاريخ التسجيل</th>
              <th style="width: 90px; text-align: center;">ملاحظات / التأشيرة</th>
            </tr>
          </thead>
          <tbody>
            ${j||'<tr><td colspan="7" style="text-align: center; padding: 20px; color: #94a3b8;">لا توجد بيانات مطابقة</td></tr>'}
          </tbody>
        </table>

        <div class="footer-note">
          <div>
            <p style="margin: 0 0 3px 0;"><strong>ملاحظات الإدارة:</strong></p>
            <p style="margin: 0; color: #64748b;">• وثيقة رسمية معتمدة خاصة بقوائم الطلبة المسجلين بنادي الإبداع والابتكار بكلية العلوم والتكنولوجيا.</p>
          </div>
          <div class="stamp-box">
            ختم وتأشيرة إدارة النادي
          </div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        <\/script>
      </body>
      </html>
    `;x.document.open(),x.document.write(M),x.document.close()},k=()=>{if(S.length===0){alert("لا توجد بيانات لتصديرها.");return}const x=["#","الاسم الكامل","حالة الطلب","التخصص الجامعي","السنة الدراسية","رقم الواتساب","البريد الإلكتروني","تاريخ التسجيل"],_=S.map((y,b)=>`
      <tr>
        <td style="text-align:center;">${b+1}</td>
        <td style="font-weight:bold;">${y.fullName||""}</td>
        <td style="text-align:center;">${y.status||"قيد المراجعة"}</td>
        <td>${y.major||""}</td>
        <td style="text-align:center;">${y.studyYear||""}</td>
        <td style="direction:ltr; text-align:left;">${y.whatsapp||""}</td>
        <td style="direction:ltr; text-align:left;">${y.email||""}</td>
        <td style="text-align:center;">${y.registrationDate||y.createdAt||""}</td>
      </tr>
    `).join(""),j=`
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"/>
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>قائمة الأعضاء</x:Name>
                <x:WorksheetOptions>
                  <x:DisplayRightToLeft/>
                </x:WorksheetOptions>
              </x:ExcelWorksheet>
            </x:ExcelWorksheets>
          </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
          body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; direction: rtl; }
          table { border-collapse: collapse; width: 100%; direction: rtl; }
          th { background-color: #0072B1; color: #ffffff; border: 1px solid #005a8e; padding: 8px 12px; font-weight: bold; font-size: 13px; text-align: right; }
          td { border: 1px solid #cbd5e1; padding: 6px 10px; font-size: 12px; text-align: right; }
        </style>
      </head>
      <body dir="rtl">
        <table>
          <thead>
            <tr>
              ${x.map(y=>`<th>${y}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${_}
          </tbody>
        </table>
      </body>
      </html>
    `,M=new Blob([j],{type:"application/vnd.ms-excel;charset=utf-8"}),O=URL.createObjectURL(M),w=document.createElement("a");w.href=O,w.download=`أعضاء_نادي_الابداع_والابتكار_${new Date().toISOString().slice(0,10)}.xls`,w.click(),URL.revokeObjectURL(O)},T=(x,_)=>{const j=document.createElement("a");j.href=x,j.download=_||"document",j.target="_blank",j.click()};return l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{className:"bg-white border-2 border-slate-200 rounded-2xl p-4 sm:p-5 shadow-xs space-y-4",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200",children:[l.jsxs("button",{onClick:()=>o("all"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${i==="all"?"bg-white text-slate-900 shadow-xs":"text-slate-600 hover:text-slate-900"}`,children:["الجميع (",t.length,")"]}),l.jsxs("button",{onClick:()=>o("قيد المراجعة"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${i==="قيد المراجعة"?"bg-amber-500 text-white shadow-xs":"text-amber-700 hover:bg-amber-50"}`,children:[l.jsx(ca,{className:"w-3.5 h-3.5"}),l.jsxs("span",{children:["قيد المراجعة (",t.filter(x=>(x.status||"قيد المراجعة")==="قيد المراجعة").length,")"]})]}),l.jsxs("button",{onClick:()=>o("مقبول"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${i==="مقبول"?"bg-emerald-600 text-white shadow-xs":"text-emerald-700 hover:bg-emerald-50"}`,children:[l.jsx(Ao,{className:"w-3.5 h-3.5"}),l.jsxs("span",{children:["المقبولون (",t.filter(x=>x.status==="مقبول").length,")"]})]}),l.jsxs("button",{onClick:()=>o("مرفوض"),className:`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 ${i==="مرفوض"?"bg-red-600 text-white shadow-xs":"text-red-700 hover:bg-red-50"}`,children:[l.jsx(Od,{className:"w-3.5 h-3.5"}),l.jsxs("span",{children:["المرفوضون (",t.filter(x=>x.status==="مرفوض").length,")"]})]})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsxs("button",{onClick:R,className:"bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors",title:"تصدير وثيقة PDF رسمية جاهزة للطباعة والتوقيع",children:[l.jsx(i2,{className:"w-4 h-4"}),l.jsx("span",{children:"📄 تصدير القائمة (PDF)"})]}),l.jsxs("button",{onClick:k,className:"border-2 border-slate-300 hover:border-slate-400 bg-white text-slate-800 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-colors",title:"تصدير جدول Excel سلس ومنظم (باللغة العربية)",children:[l.jsx(n2,{className:"w-4 h-4 text-emerald-600"}),l.jsx("span",{children:"📊 تصدير Excel"})]})]})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"text",value:r,onChange:x=>s(x.target.value),placeholder:"بحث بالاسم، البريد، التخصص أو رقم الهاتف...",className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all pr-10 text-right"}),l.jsx(o2,{className:"w-4 h-4 text-slate-400 absolute top-3 right-3.5 pointer-events-none"})]})]}),l.jsx("div",{className:"bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-xs",children:l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-right text-xs",children:[l.jsx("thead",{className:"bg-slate-50 text-slate-700 border-b-2 border-slate-200 font-bold",children:l.jsxs("tr",{children:[l.jsx("th",{className:"py-3.5 px-3.5",children:"#"}),l.jsx("th",{className:"py-3.5 px-3.5",children:"الطالب المترشح"}),l.jsx("th",{className:"py-3.5 px-3.5",children:"التخصص والسنة"}),l.jsx("th",{className:"py-3.5 px-3.5",children:"الوثائق الجامعية"}),l.jsx("th",{className:"py-3.5 px-3.5",children:"حالة الطلب"}),l.jsx("th",{className:"py-3.5 px-3.5 text-center",children:"قرار الأدمن (قبول / رفض)"}),l.jsx("th",{className:"py-3.5 px-3.5 text-center",children:"إجراءات"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-100 text-slate-700",children:S.length===0?l.jsx("tr",{children:l.jsxs("td",{colSpan:"7",className:"py-12 text-center text-slate-400",children:[l.jsx(Aa,{className:"w-8 h-8 mx-auto text-slate-300 mb-1.5"}),l.jsx("p",{className:"text-xs font-semibold",children:"لا يوجد طلبات في هذا القسم"})]})}):S.map((x,_)=>{const j=x.status||"قيد المراجعة",M=(x.whatsapp||"").replace(/[^0-9]/g,""),O=encodeURIComponent(`السلام عليكم ورحمة الله يا ${x.fullName}،
يسعدنا إعلامك بأنه تم قبول طلب انضمامك رسمياً إلى نادي الإبداع والابتكار (STI) بجامعة تامنغست!
مرحباً بك في مجتمعنا التقني.`),w=M.startsWith("0")?`https://wa.me/213${M.slice(1)}?text=${O}`:`https://wa.me/${M}?text=${O}`;return l.jsxs("tr",{className:"hover:bg-slate-50/70 transition-colors",children:[l.jsx("td",{className:"py-3.5 px-3.5 font-mono text-slate-400 font-bold",children:_+1}),l.jsxs("td",{className:"py-3.5 px-3.5",children:[l.jsx("div",{className:"font-bold text-slate-900 text-sm",children:x.fullName}),l.jsx("div",{className:"text-[11px] text-slate-500 font-mono dir-ltr text-right",children:x.email}),l.jsxs("div",{className:"flex items-center gap-1.5 mt-0.5",children:[l.jsx("span",{className:"font-mono text-[11px] text-slate-600 dir-ltr",children:x.whatsapp}),l.jsx("a",{href:w,target:"_blank",rel:"noreferrer",className:"p-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200",title:"مراسلة الطالب بالواتساب",children:l.jsx(bu,{className:"w-3 h-3"})})]})]}),l.jsxs("td",{className:"py-3.5 px-3.5",children:[l.jsx("div",{className:"text-slate-800 font-bold",children:x.major}),l.jsx("div",{className:"text-[11px] text-[#0072B1] font-semibold",children:x.studyYear}),l.jsx("div",{className:"text-[10px] text-slate-400 mt-0.5",children:x.registrationDate||"-"})]}),l.jsx("td",{className:"py-3.5 px-3.5",children:l.jsxs("div",{className:"space-y-1",children:[x.schoolCertUrl&&l.jsxs("button",{onClick:()=>u({url:x.schoolCertUrl,title:`الشهادة المدرسية - ${x.fullName}`,filename:x.schoolCertName||"school_certificate.jpg"}),className:"px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-[#0072B1] font-bold flex items-center gap-1 text-[11px] w-full",children:[l.jsx(Dc,{className:"w-3 h-3"}),l.jsx("span",{className:"truncate",children:"الشهادة المدرسية"})]}),x.studentCardUrl&&l.jsxs("button",{onClick:()=>u({url:x.studentCardUrl,title:`بطاقة الطالب - ${x.fullName}`,filename:x.studentCardName||"student_id_card.jpg"}),className:"px-2 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center gap-1 text-[11px] w-full",children:[l.jsx(Dc,{className:"w-3 h-3"}),l.jsx("span",{className:"truncate",children:"بطاقة الطالب"})]})]})}),l.jsxs("td",{className:"py-3.5 px-3.5",children:[j==="مقبول"&&l.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold",children:[l.jsx(Ao,{className:"w-3 h-3"}),l.jsx("span",{children:"مقبول"})]}),j==="مرفوض"&&l.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-red-50 text-red-700 border border-red-200 text-xs font-bold",children:[l.jsx(Od,{className:"w-3 h-3"}),l.jsx("span",{children:"مرفوض"})]}),j==="قيد المراجعة"&&l.jsxs("span",{className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 text-xs font-bold",children:[l.jsx(ca,{className:"w-3 h-3"}),l.jsx("span",{children:"قيد المراجعة"})]})]}),l.jsx("td",{className:"py-3.5 px-3.5 text-center",children:l.jsxs("div",{className:"flex items-center justify-center gap-1.5",children:[l.jsxs("button",{onClick:()=>E(x.id,"مقبول"),disabled:g===x.id||j==="مقبول",className:`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${j==="مقبول"?"bg-emerald-100 text-emerald-800 opacity-60 cursor-default":"bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs"}`,title:"قبول طلب العضوية",children:[l.jsx(Ao,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"قبول"})]}),l.jsxs("button",{onClick:()=>E(x.id,"مرفوض"),disabled:g===x.id||j==="مرفوض",className:`px-2.5 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 transition-all ${j==="مرفوض"?"bg-red-100 text-red-800 opacity-60 cursor-default":"bg-slate-100 hover:bg-red-50 text-slate-700 hover:text-red-700 border border-slate-200"}`,title:"رفض طلب العضوية",children:[l.jsx(Od,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"رفض"})]})]})}),l.jsx("td",{className:"py-3.5 px-3.5 text-center",children:d===x.id?l.jsxs("div",{className:"flex items-center justify-center gap-1",children:[l.jsx("button",{onClick:()=>{e(x.id),f(null)},className:"px-2 py-0.5 bg-red-600 text-white rounded text-[10px] font-bold",children:"تأكيد"}),l.jsx("button",{onClick:()=>f(null),className:"px-2 py-0.5 bg-slate-200 text-slate-700 rounded text-[10px]",children:"إلغاء"})]}):l.jsx("button",{onClick:()=>f(x.id),className:"p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",title:"حذف العضو نهائياً",children:l.jsx(rm,{className:"w-3.5 h-3.5"})})})]},x.id||_)})})]})})}),c&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn",children:l.jsxs("div",{className:"bg-white rounded-3xl p-5 sm:p-6 max-w-2xl w-full text-right relative shadow-2xl max-h-[85vh] flex flex-col border-2 border-slate-200",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-slate-200",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(P5,{className:"w-5 h-5 text-[#0072B1]"}),l.jsx("h3",{className:"text-sm font-bold text-slate-900",children:c.title})]}),l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("button",{onClick:()=>T(c.url,c.filename),className:"border-2 border-slate-300 hover:border-slate-400 bg-white text-slate-700 px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-xs",children:[l.jsx(rf,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"تحميل"})]}),l.jsx("button",{onClick:()=>u(null),className:"p-1.5 rounded-xl text-slate-400 hover:text-slate-600 bg-slate-100",children:l.jsx(as,{className:"w-4 h-4"})})]})]}),l.jsx("div",{className:"flex-1 overflow-auto my-3 flex items-center justify-center bg-slate-50 rounded-2xl p-4 border border-slate-200",children:c.url.startsWith("data:application/pdf")||c.url.endsWith(".pdf")?l.jsx("iframe",{src:c.url,title:"Document Preview",className:"w-full h-[55vh] rounded-xl"}):l.jsx("img",{src:c.url,alt:c.title,className:"max-h-[55vh] max-w-full object-contain rounded-xl shadow-xs"})})]})})]})}function nj({courses:t,onAddCourse:e,onUpdateCourse:n,onDeleteCourse:r}){const[s,i]=L.useState(!1),[o,c]=L.useState(null),[u,d]=L.useState(!1),[f,g]=L.useState(!1),[m,E]=L.useState(""),[S,R]=L.useState(""),[k,T]=L.useState({title:"",description:"",instructor:"",date:"",duration:"3 أسابيع",seats:20,category:"روبوتات وإلكترونيات",tagsInput:"Arduino, Robotics"}),x=O=>{const{name:w,value:y}=O.target;T(b=>({...b,[w]:y}))},_=O=>{const{name:w,value:y}=O.target;c(b=>({...b,[w]:y}))},j=async O=>{var w,y;if(O.preventDefault(),R(""),!o.title.trim()||!o.date.trim()){R("يرجى تحديد عنوان الدورة وموعدها على الأقل.");return}try{g(!0),await n(o.id,{title:o.title.trim(),description:((w=o.description)==null?void 0:w.trim())||"",instructor:((y=o.instructor)==null?void 0:y.trim())||"",date:o.date.trim(),duration:o.duration||"3 أسابيع",seats:Number(o.seats)||20,category:o.category||"تكوين تقني"}),g(!1),c(null)}catch(b){g(!1),R(b.message||"فشل حفظ التعديلات.")}},M=async O=>{if(O.preventDefault(),E(""),!k.title.trim()||!k.description.trim()||!k.instructor.trim()||!k.date.trim()){E("يرجى ملء جميع الحقول المطلوبة (العنوان، الوصف، المحاضر، والتاريخ).");return}try{d(!0);const w=k.tagsInput.split(",").map(b=>b.trim()).filter(Boolean),y={title:k.title.trim(),description:k.description.trim(),instructor:k.instructor.trim(),date:k.date.trim(),duration:k.duration.trim(),seats:Number(k.seats)||20,category:k.category,tags:w.length>0?w:["STI"],status:"open"};await e(y),d(!1),i(!1),T({title:"",description:"",instructor:"",date:"",duration:"3 أسابيع",seats:20,category:"روبوتات وإلكترونيات",tagsInput:"Arduino, Robotics"})}catch(w){console.error(w),d(!1),E(w.message||"فشلت إضافة الدورة.")}};return l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500"}),l.jsxs("h3",{className:"text-base sm:text-lg font-black text-slate-900",children:["إدارة الدورات التدريبية (",t.length,")"]})]}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-500",children:"يمكنك من هنا إضافة دورات تدريبية جديدة تظهر فوراً لجميع طلبة وزوار الموقع للتسجيل فيها."})]}),l.jsxs("button",{onClick:()=>i(!0),className:"bg-[#0072B1] hover:bg-[#005a8e] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-sm shrink-0",children:[l.jsx(T5,{className:"w-4 h-4"}),l.jsx("span",{children:"+ إضافة دورة تدريبية جديدة"})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:t.map(O=>l.jsxs("div",{className:"bg-white border-2 border-slate-200 rounded-2xl p-5 flex flex-col justify-between text-right shadow-xs hover:border-[#0072B1] transition-all",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsx("span",{className:"text-[10px] font-bold px-2.5 py-1 rounded-md bg-blue-50 text-[#0072B1] border border-blue-100",children:O.category||"تكوين تقني"}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("button",{onClick:()=>c({...O}),className:"p-1.5 text-slate-500 hover:text-[#0072B1] hover:bg-blue-50 rounded-lg transition-colors",title:"تعديل تفاصيل أو موعد الدورة",children:l.jsx(s2,{className:"w-4 h-4"})}),l.jsx("button",{onClick:()=>r(O.id),className:"p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",title:"حذف هذه الدورة نهائياً",children:l.jsx(rm,{className:"w-4 h-4"})})]})]}),l.jsx("h4",{className:"text-base font-black text-slate-900 mb-2 leading-snug",children:O.title}),l.jsx("p",{className:"text-xs text-slate-600 mb-4 line-clamp-3 leading-relaxed",children:O.description}),l.jsxs("div",{className:"space-y-1.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-200 mb-4",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx(Aa,{className:"w-3.5 h-3.5 text-[#0072B1]"}),l.jsxs("span",{children:["المحاضر: ",l.jsx("strong",{className:"text-slate-900",children:O.instructor})]})]}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx(tm,{className:"w-3.5 h-3.5 text-[#0072B1]"}),l.jsxs("span",{children:["الموعد: ",l.jsx("strong",{className:"text-slate-900",children:O.date})]})]}),l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx(ca,{className:"w-3.5 h-3.5 text-[#0072B1]"}),l.jsxs("span",{children:["المدة: ",l.jsx("strong",{className:"text-slate-900",children:O.duration})]})]})]})]}),l.jsxs("div",{className:"pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500",children:[l.jsxs("span",{className:"text-emerald-700 font-bold flex items-center gap-1",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500"}),"ظاهرة في الموقع العام"]}),l.jsxs("span",{className:"font-semibold",children:["المقاعد: ",O.seats||20]})]})]},O.id))}),s&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn",children:l.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-right relative shadow-2xl max-h-[85vh] overflow-y-auto border-2 border-slate-200",children:[l.jsx("button",{onClick:()=>i(!1),className:"absolute top-4 left-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 bg-slate-100",children:l.jsx(as,{className:"w-5 h-5"})}),l.jsx("h3",{className:"text-lg font-black text-slate-900 mb-1",children:"إضافة دورة تدريبية جديدة"}),l.jsx("p",{className:"text-xs text-slate-500 mb-5",children:"املأ تفاصيل الدورة لتظهر فوراً لطلبة الكلية في الموقع العام"}),m&&l.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2",children:[l.jsx(mi,{className:"w-4 h-4 shrink-0"}),l.jsx("span",{children:m})]}),l.jsxs("form",{onSubmit:M,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"عنوان الدورة التدريبية *"}),l.jsx("input",{type:"text",name:"title",value:k.title,onChange:x,placeholder:"مثال: دورة برمجة متحكمات ESP32 وإنترنت الأشياء",required:!0,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"وصف الدورة والمكتسبات التعليمية *"}),l.jsx("textarea",{name:"description",rows:"3",value:k.description,onChange:x,placeholder:"اكتب نبذة عن الدورة ومحتواها وما سيتعلمه الطالب عملياً...",required:!0,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all resize-none"})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"اسم المؤطر / المحاضر *"}),l.jsx("input",{type:"text",name:"instructor",value:k.instructor,onChange:x,placeholder:"م. أمين بلقاسم",required:!0,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"الموعد والتوقيت *"}),l.jsx("input",{type:"text",name:"date",value:k.date,onChange:x,placeholder:"السبت 10:00 صباحاً",required:!0,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"المدة"}),l.jsx("input",{type:"text",name:"duration",value:k.duration,onChange:x,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-all"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"عدد المقاعد"}),l.jsx("input",{type:"number",name:"seats",value:k.seats,onChange:x,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-all"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"التصنيف"}),l.jsx("input",{type:"text",name:"category",value:k.category,onChange:x,placeholder:"روبوتات / إلكترونيات",className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-all"})]})]}),l.jsxs("div",{className:"pt-3 flex gap-3",children:[l.jsx("button",{type:"submit",disabled:u,className:"bg-[#0072B1] hover:bg-[#005a8e] text-white flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-xs",children:u?l.jsxs(l.Fragment,{children:[l.jsx(os,{className:"w-4 h-4 animate-spin"}),l.jsx("span",{children:"جاري حفظ ونشر الدورة..."})]}):l.jsxs(l.Fragment,{children:[l.jsx(Js,{className:"w-4 h-4"}),l.jsx("span",{children:"حفظ ونشر الدورة فوراً في الموقع"})]})}),l.jsx("button",{type:"button",onClick:()=>i(!1),className:"px-5 py-3.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-300 bg-slate-100",children:"إلغاء"})]})]})]})}),o&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn",children:l.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-right relative shadow-2xl max-h-[85vh] overflow-y-auto border-2 border-slate-200",children:[l.jsx("button",{onClick:()=>c(null),className:"absolute top-4 left-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 bg-slate-100",children:l.jsx(as,{className:"w-5 h-5"})}),l.jsx("h3",{className:"text-lg font-black text-slate-900 mb-1",children:"تعديل بيانات الدورة"}),l.jsx("p",{className:"text-xs text-slate-500 mb-5",children:"عدّل التوقيت أو الموعد أو التفاصيل وسيتم تحديثها فوراً في الموقع"}),S&&l.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2",children:[l.jsx(mi,{className:"w-4 h-4 shrink-0"}),l.jsx("span",{children:S})]}),l.jsxs("form",{onSubmit:j,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"عنوان الدورة *"}),l.jsx("input",{type:"text",name:"title",value:o.title||"",onChange:_,required:!0,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"الموعد والتوقيت *"}),l.jsx("input",{type:"text",name:"date",value:o.date||"",onChange:_,placeholder:"مثال: السبت والثلاثاء 14:00",required:!0,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all font-bold text-[#0072B1]"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"اسم المؤطر / المحاضر"}),l.jsx("input",{type:"text",name:"instructor",value:o.instructor||"",onChange:_,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3.5",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"المدة"}),l.jsx("input",{type:"text",name:"duration",value:o.duration||"",onChange:_,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-all"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"عدد المقاعد"}),l.jsx("input",{type:"number",name:"seats",value:o.seats||20,onChange:_,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-all"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"التصنيف"}),l.jsx("input",{type:"text",name:"category",value:o.category||"",onChange:_,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none transition-all"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"وصف الدورة"}),l.jsx("textarea",{name:"description",rows:"3",value:o.description||"",onChange:_,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all resize-none"})]}),l.jsxs("div",{className:"pt-3 flex gap-3",children:[l.jsx("button",{type:"submit",disabled:f,className:"bg-[#0072B1] hover:bg-[#005a8e] text-white flex-1 py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-xs",children:f?l.jsxs(l.Fragment,{children:[l.jsx(os,{className:"w-4 h-4 animate-spin"}),l.jsx("span",{children:"جاري حفظ التعديلات..."})]}):l.jsxs(l.Fragment,{children:[l.jsx(Js,{className:"w-4 h-4"}),l.jsx("span",{children:"حفظ التعديلات فوراً"})]})}),l.jsx("button",{type:"button",onClick:()=>c(null),className:"px-5 py-3.5 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-300 bg-slate-100",children:"إلغاء"})]})]})]})})]})}function rj({registrations:t=[],courses:e=[]}){var g;const[n,r]=L.useState(((g=e[0])==null?void 0:g.id)||"all"),[s,i]=L.useState("");L.useEffect(()=>{e.length>0&&n==="all"&&r(e[0].id)},[e]);const o=e.find(m=>m.id===n)||e[0],c=t.filter(m=>o?m.courseId===o.id||m.courseTitle===o.title:!0),u=c.filter(m=>{const E=s.toLowerCase(),S=(m.fullName||"").toLowerCase(),R=(m.major||"").toLowerCase(),k=(m.whatsapp||"").toLowerCase();return S.includes(E)||R.includes(E)||k.includes(E)}),d=(m,E)=>{if(!m)return;const S=window.open("","_blank");if(!S){alert("يرجى السماح بالنوافذ المنبثقة (Popups) في المتصفح لمعاينة وطباعة ملف الـ PDF.");return}const R=m.title||"دورة تدريبية",k=m.instructor||"مؤطرو النادي",T=m.date||"حسب الإعلان",x=m.duration||"3 أسابيع",_=E.map((M,O)=>`
      <tr>
        <td style="text-align: center; font-weight: bold; width: 35px;">${O+1}</td>
        <td style="font-weight: bold; font-size: 13px;">${M.fullName||"-"}</td>
        <td>${M.major||"-"}</td>
        <td style="text-align: center; width: 110px;">${M.studyYear||"-"}</td>
        <td style="text-align: center; color: #475569; font-size: 11px; width: 95px;">${M.registrationDateFormatted||(M.createdAt?new Date(M.createdAt).toLocaleDateString("ar-DZ"):"-")}</td>
        <td style="width: 100px;"></td>
      </tr>
    `).join(""),j=`
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <title>قائمة الطلبة المقبولين - ${R}</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
        <style>
          @page {
            size: A4 portrait;
            margin: 12mm 15mm;
          }
          * {
            box-sizing: border-box;
          }
          body {
            font-family: 'Cairo', 'Segoe UI', Tahoma, sans-serif;
            color: #0f172a;
            margin: 0;
            padding: 20px;
            direction: rtl;
            background: #ffffff;
            font-size: 12px;
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 2px solid #0072B1;
            padding-bottom: 12px;
            margin-bottom: 16px;
          }
          .header-text {
            font-size: 11px;
            line-height: 1.6;
          }
          .header-title {
            font-weight: 800;
            color: #0072B1;
            font-size: 13px;
            margin-top: 2px;
          }
          .doc-badge {
            text-align: left;
            font-size: 10px;
            color: #64748b;
            line-height: 1.5;
          }
          .title-box {
            background-color: #f8fafc;
            border: 1.5px solid #cbd5e1;
            border-radius: 10px;
            padding: 12px 16px;
            margin-bottom: 16px;
            text-align: center;
          }
          .title-box h1 {
            margin: 0 0 4px 0;
            font-size: 17px;
            color: #0f172a;
            font-weight: 900;
          }
          .course-name {
            font-size: 14px;
            font-weight: 800;
            color: #0072B1;
          }
          .meta-tags {
            display: flex;
            justify-content: center;
            gap: 16px;
            font-size: 11px;
            color: #334155;
            margin-top: 6px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            font-size: 11px;
          }
          th, td {
            border: 1px solid #cbd5e1;
            padding: 7px 9px;
            text-align: right;
          }
          th {
            background-color: #f1f5f9;
            color: #0f172a;
            font-weight: 700;
            font-size: 11px;
          }
          tr:nth-child(even) {
            background-color: #f8fafc;
          }
          .footer-note {
            margin-top: 25px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            font-size: 10px;
            color: #475569;
          }
          .stamp-box {
            border: 1.5px dashed #94a3b8;
            border-radius: 8px;
            width: 150px;
            height: 65px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #94a3b8;
            font-weight: bold;
            font-size: 10px;
          }
          @media print {
            body {
              padding: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="header-text">
            <div>الجمهورية الجزائرية الديمقراطية الشعبية</div>
            <div>وزارة التعليم العالي والبحث العلمي</div>
            <div><strong>${$.university}</strong></div>
            <div>${$.faculty}</div>
            <div class="header-title">${$.name}</div>
          </div>
          <div class="doc-badge">
            <div>الموسم الجامعي: ${$.academicYear}</div>
            <div>تاريخ الإصدار: ${new Date().toLocaleDateString("ar-DZ")}</div>
            <div style="margin-top: 4px; color: #0072B1; font-weight: bold;">وثيقة رسمية للإعلان والنشر</div>
          </div>
        </div>

        <div class="title-box">
          <h1>قائمة الطلبة المقبولين لحضور الدورة</h1>
          <div class="course-name">${R}</div>
          <div class="meta-tags">
            <span>المؤطر: <strong>${k}</strong></span>
            <span>•</span>
            <span>الموعد: <strong>${T}</strong></span>
            <span>•</span>
            <span>المدة: <strong>${x}</strong></span>
            <span>•</span>
            <span>إجمالي المقبولين: <strong>${E.length} طالب</strong></span>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th style="width: 35px; text-align: center;">#</th>
              <th>اسم ولقب الطالب</th>
              <th>التخصص الجامعي</th>
              <th style="width: 110px; text-align: center;">السنة الدراسية</th>
              <th style="width: 95px; text-align: center;">تاريخ التسجيل</th>
              <th style="width: 100px; text-align: center;">توقيع الحضور</th>
            </tr>
          </thead>
          <tbody>
            ${_||'<tr><td colspan="6" style="text-align: center; padding: 20px; color: #94a3b8;">لا يوجد طلبة مسجلون في هذه الدورة حالياً</td></tr>'}
          </tbody>
        </table>

        <div class="footer-note">
          <div>
            <p style="margin: 0 0 3px 0;"><strong>تنبيه وإرشادات للطلبة:</strong></p>
            <p style="margin: 0; color: #64748b;">• يرجى من جميع الطلبة الواردة أسماؤهم الالتزام بمواعيد الدورة المقررة في الكلية.</p>
            <p style="margin: 0; color: #64748b;">• هذه القائمة مخصصة للإعلان والنشر العام، ولا تحتوي على أي بيانات تواصل خاصة.</p>
          </div>
          <div class="stamp-box">
            ختم وتوقيع إدارة النادي
          </div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          };
        <\/script>
      </body>
      </html>
    `;S.document.open(),S.document.write(j),S.document.close()},f=(m,E)=>{if(E.length===0){alert("لا توجد بيانات لتصديرها في هذه الدورة.");return}const S=["#","اسم الطالب","الدورة","الهاتف (واتساب)","البريد الإلكتروني","التخصص","السنة","تاريخ التسجيل"],R=E.map((j,M)=>`
      <tr>
        <td style="text-align:center;">${M+1}</td>
        <td style="font-weight:bold;">${j.fullName||""}</td>
        <td>${(m==null?void 0:m.title)||""}</td>
        <td style="direction:ltr; text-align:left;">${j.whatsapp||""}</td>
        <td style="direction:ltr; text-align:left;">${j.email||""}</td>
        <td>${j.major||""}</td>
        <td style="text-align:center;">${j.studyYear||""}</td>
        <td style="text-align:center;">${j.registrationDateFormatted||j.createdAt||""}</td>
      </tr>
    `).join(""),k=`
      <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"/>
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>المسجلين في الدورة</x:Name>
                <x:WorksheetOptions>
                  <x:DisplayRightToLeft/>
                </x:WorksheetOptions>
              </x:ExcelWorksheet>
            </x:ExcelWorksheets>
          </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
          body { font-family: 'Segoe UI', Tahoma, Arial, sans-serif; direction: rtl; }
          table { border-collapse: collapse; width: 100%; direction: rtl; }
          th { background-color: #0072B1; color: #ffffff; border: 1px solid #005a8e; padding: 8px 12px; font-weight: bold; font-size: 13px; text-align: right; }
          td { border: 1px solid #cbd5e1; padding: 6px 10px; font-size: 12px; text-align: right; }
        </style>
      </head>
      <body dir="rtl">
        <table>
          <thead>
            <tr>
              ${S.map(j=>`<th>${j}</th>`).join("")}
            </tr>
          </thead>
          <tbody>
            ${R}
          </tbody>
        </table>
      </body>
      </html>
    `,T=new Blob([k],{type:"application/vnd.ms-excel;charset=utf-8"}),x=URL.createObjectURL(T),_=document.createElement("a");_.href=x,_.download=`قائمة_المسجلين_${((m==null?void 0:m.title)||"دورة").replace(/\s+/g,"_")}_${new Date().toISOString().slice(0,10)}.xls`,_.click(),URL.revokeObjectURL(x)};return l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"mb-2 flex items-center justify-between",children:[l.jsx("span",{className:"text-xs font-bold text-slate-700",children:"اختر الدورة لعرض قائمتها وتصديرها:"}),l.jsxs("span",{className:"text-[11px] text-slate-500",children:["إجمالي الدورات: ",e.length]})]}),l.jsx("div",{className:"flex flex-wrap gap-2.5",children:e.map(m=>{const E=t.filter(R=>R.courseId===m.id||R.courseTitle===m.title).length,S=n===m.id;return l.jsxs("button",{onClick:()=>{r(m.id),i("")},className:`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all border-2 text-right ${S?"bg-[#0072B1] text-white border-[#0072B1] shadow-md ring-2 ring-[#0072B1]/20":"bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"}`,children:[l.jsx(is,{className:`w-4 h-4 ${S?"text-white":"text-[#0072B1]"}`}),l.jsx("span",{className:"max-w-[200px] truncate",children:m.title}),l.jsx("span",{className:`px-2 py-0.5 rounded-full text-[11px] font-bold ${S?"bg-white/20 text-white":"bg-slate-100 text-slate-700"}`,children:E})]},m.id)})})]}),o?l.jsxs("div",{className:"bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs space-y-5",children:[l.jsxs("div",{className:"flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-5 border-b border-slate-200",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1.5",children:[l.jsx("span",{className:"px-2.5 py-0.5 rounded-md text-[10px] font-bold bg-blue-50 text-[#0072B1] border border-blue-100",children:o.category||"تكوين تقني"}),l.jsxs("span",{className:"text-xs text-slate-500 font-semibold",children:["المقاعد: ",o.seats||20]})]}),l.jsx("h3",{className:"text-base sm:text-lg font-black text-slate-900 leading-snug",children:o.title}),l.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-xs text-slate-600 mt-2",children:[l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(Aa,{className:"w-3.5 h-3.5 text-[#0072B1]"}),l.jsxs("span",{children:["المحاضر: ",l.jsx("strong",{className:"text-slate-800",children:o.instructor})]})]}),l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(tm,{className:"w-3.5 h-3.5 text-[#0072B1]"}),l.jsxs("span",{children:["الموعد: ",l.jsx("strong",{className:"text-slate-800",children:o.date})]})]}),l.jsxs("span",{className:"flex items-center gap-1",children:[l.jsx(ca,{className:"w-3.5 h-3.5 text-[#0072B1]"}),l.jsxs("span",{children:["المدة: ",l.jsx("strong",{className:"text-slate-800",children:o.duration})]})]})]})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-2.5 w-full lg:w-auto",children:[l.jsxs("button",{onClick:()=>d(o,c),className:"flex-1 lg:flex-none bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-sm",title:"تصدير وثيقة PDF رسمية جاهزة للطباعة والنشر خالية من أرقام الهواتف",children:[l.jsx(i2,{className:"w-4 h-4"}),l.jsx("span",{children:"📄 تصدير القائمة للنشر (PDF)"})]}),l.jsxs("button",{onClick:()=>f(o,c),className:"border-2 border-slate-300 hover:border-slate-400 bg-white text-slate-700 px-3.5 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs",title:"تصدير ملف Excel مع أرقام الهواتف لسجلات الإدارة الداخلية",children:[l.jsx(n2,{className:"w-4 h-4 text-emerald-600"}),l.jsx("span",{children:"تصدير Excel"})]})]})]}),l.jsxs("div",{className:"p-3 bg-amber-50/80 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center gap-2.5",children:[l.jsx(z5,{className:"w-4 h-4 text-amber-600 shrink-0"}),l.jsxs("p",{className:"leading-relaxed",children:[l.jsx("strong",{children:"حماية الخصوصية:"})," عند الضغط على ",l.jsx("strong",{children:'"تصدير القائمة للنشر (PDF)"'}),"، يتم استخراج وثيقة رسمية تتضمن فقط (الاسم، التخصص، والمستوى الدراسي) بدون أي أرقام هواتف أو بريد إلكتروني، لتكون آمنة وجاهزة للنشر والإعلان للطلبة."]})]}),l.jsxs("div",{className:"relative",children:[l.jsx("input",{type:"text",value:s,onChange:m=>i(m.target.value),placeholder:"بحث في طلبة هذه الدورة بالاسم أو التخصص...",className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-4 py-2 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all pr-10 text-right"}),l.jsx(o2,{className:"w-4 h-4 text-slate-400 absolute top-2.5 right-3.5 pointer-events-none"})]}),l.jsx("div",{className:"border border-slate-200 rounded-xl overflow-hidden",children:l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-right text-xs",children:[l.jsx("thead",{className:"bg-slate-50 text-slate-700 border-b border-slate-200 font-bold",children:l.jsxs("tr",{children:[l.jsx("th",{className:"py-3 px-3.5 text-center w-12",children:"#"}),l.jsx("th",{className:"py-3 px-3.5",children:"اسم الطالب الكامل"}),l.jsx("th",{className:"py-3 px-3.5",children:"التخصص الجامعي"}),l.jsx("th",{className:"py-3 px-3.5 text-center",children:"السنة الدراسية"}),l.jsx("th",{className:"py-3 px-3.5",children:"تاريخ التسجيل"}),l.jsx("th",{className:"py-3 px-3.5",children:"الاتصال (للأدمن فقط)"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-100 text-slate-700",children:u.length===0?l.jsx("tr",{children:l.jsxs("td",{colSpan:"6",className:"py-12 text-center text-slate-400",children:[l.jsx(is,{className:"w-8 h-8 mx-auto text-slate-300 mb-1.5"}),l.jsx("p",{className:"text-xs font-semibold",children:c.length===0?"لا يوجد مسجلون في هذه الدورة حالياً":"لا توجد نتائج مطابقة لبحثك"})]})}):u.map((m,E)=>{const S=(m.whatsapp||"").replace(/[^0-9]/g,""),R=S.startsWith("0")?`https://wa.me/213${S.slice(1)}`:`https://wa.me/${S}`;return l.jsxs("tr",{className:"hover:bg-slate-50/70 transition-colors",children:[l.jsx("td",{className:"py-3 px-3.5 font-mono text-slate-400 text-center font-bold",children:E+1}),l.jsx("td",{className:"py-3 px-3.5 font-bold text-slate-900 text-sm",children:m.fullName}),l.jsx("td",{className:"py-3 px-3.5 text-slate-800 font-medium",children:m.major||"-"}),l.jsx("td",{className:"py-3 px-3.5 text-center",children:l.jsx("span",{className:"px-2 py-0.5 rounded-md bg-blue-50 text-[#0072B1] font-bold text-[11px]",children:m.studyYear||"-"})}),l.jsx("td",{className:"py-3 px-3.5 text-slate-500 font-mono text-[11px]",children:m.registrationDateFormatted||(m.createdAt?new Date(m.createdAt).toLocaleDateString("ar-DZ"):"-")}),l.jsxs("td",{className:"py-3 px-3.5",children:[l.jsxs("div",{className:"flex items-center gap-1.5",children:[l.jsx("span",{className:"font-mono text-[11px] dir-ltr",children:m.whatsapp}),l.jsx("a",{href:R,target:"_blank",rel:"noreferrer",className:"p-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200",title:"محادثة واتساب مباشرة",children:l.jsx(bu,{className:"w-3 h-3"})})]}),l.jsx("div",{className:"text-[10px] text-slate-400 font-mono dir-ltr text-right mt-0.5 truncate max-w-[150px]",children:m.email})]})]},m.id||E)})})]})})})]}):l.jsx("div",{className:"p-8 text-center bg-white border border-slate-200 rounded-2xl text-slate-400",children:"يرجى إضافة دورات أولاً لعرض المسجلين"})]})}function sj({supervisor:t,boardMembers:e,onUpdateSupervisor:n,onAddMember:r,onUpdateMember:s,onDeleteMember:i,onResetDefaults:o}){const[c,u]=L.useState({name:(t==null?void 0:t.name)||"",role:(t==null?void 0:t.role)||"الأستاذ المشرف على النادي",department:(t==null?void 0:t.department)||"كلية العلوم والتكنولوجيا - جامعة تامنغست",description:(t==null?void 0:t.description)||"",image:(t==null?void 0:t.image)||""}),[d,f]=L.useState(!1),[g,m]=L.useState(""),[E,S]=L.useState(!1),[R,k]=L.useState(!1),[T,x]=L.useState(null),[_,j]=L.useState({name:"",role:"رئيس النادي",badge:"الرئاسة",specialty:"",image:""}),[M,O]=L.useState(!1),[w,y]=L.useState(""),[b,N]=L.useState(!1),A=[{role:"رئيس النادي",badge:"الرئاسة"},{role:"نائب رئيس النادي",badge:"الإدارة"},{role:"الأمين العام",badge:"الأمانة العامة"},{role:"مسؤول الإعلام والاتصال",badge:"الإعلام"},{role:"مسؤول الأنشطة والمشاريع",badge:"الأنشطة"},{role:"مسؤول المالية والعتاد",badge:"اللوجستيك"},{role:"مسؤول العلاقات العامة",badge:"العلاقات"},{role:"مؤطر تقني",badge:"التأطير"}],C=q=>{const{name:ie,value:ze}=q.target;u(je=>({...je,[ie]:ze}))},I=async q=>{var ze;const ie=(ze=q.target.files)==null?void 0:ze[0];if(ie)try{S(!0);const je=await ge.uploadFile(ie,"supervisor");u(Ct=>({...Ct,image:je.url}))}catch(je){alert("فشل رفع صورة الأستاذ: "+je.message)}finally{S(!1)}},de=()=>{u(q=>({...q,image:""}))},Be=async q=>{q.preventDefault(),m("");try{f(!0),await n({...c,name:c.name.trim(),role:c.role.trim(),department:c.department.trim(),description:c.description.trim()}),m("تم حفظ وتحديث بيانات الأستاذ المشرف بنجاح!"),setTimeout(()=>m(""),4e3)}catch(ie){alert("حدث خطأ أثناء الحفظ: "+ie.message)}finally{f(!1)}},sn=()=>{x(null),j({name:"",role:"عضو المكتب التنفيذي",badge:"العضوية",specialty:"",image:""}),y(""),k(!0)},Ht=q=>{x(q),j({name:q.name||"",role:q.role||"",badge:q.badge||"",specialty:q.specialty||"",image:q.image||""}),y(""),k(!0)},z=q=>{const{name:ie,value:ze}=q.target;j(je=>({...je,[ie]:ze}))},X=q=>{j(ie=>({...ie,role:q.role,badge:q.badge}))},te=async q=>{var ze;const ie=(ze=q.target.files)==null?void 0:ze[0];if(ie)try{N(!0);const je=await ge.uploadFile(ie,"board_members");j(Ct=>({...Ct,image:je.url}))}catch(je){alert("فشل رفع صورة العضو: "+je.message)}finally{N(!1)}},xe=()=>{j(q=>({...q,image:""}))},he=async q=>{if(q.preventDefault(),y(""),!_.name.trim()||!_.role.trim()){y("يرجى تحديد اسم العضو ومنصبه في النادي.");return}try{O(!0);const ie={name:_.name.trim(),role:_.role.trim(),badge:_.badge.trim()||"عضو المكتب",specialty:_.specialty.trim(),image:_.image||""};T?await s(T.id,ie):await r(ie),O(!1),k(!1)}catch(ie){O(!1),y(ie.message||"فشل حفظ بيانات العضو.")}};return l.jsxs("div",{className:"space-y-8",children:[l.jsxs("div",{className:"bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-[#0072B1]"}),l.jsx("h3",{className:"text-base sm:text-lg font-black text-slate-900",children:"إدارة الهيكل التنظيمي والمكتب التنفيذي"})]}),l.jsxs("p",{className:"text-xs sm:text-sm text-slate-500",children:["يمكنك تخصيص بيانات الأستاذ المشرف وأعضاء المكتب التنفيذي.",l.jsx("strong",{className:"text-slate-700 mx-1",children:"الصور اختيارية تماماً"}),"؛ في حال عدم توفر صورة سيتم عرض أيقونة أنيقة افتراضياً دون أن يتأثر مظهر الموقع."]})]}),o&&l.jsxs("button",{onClick:()=>{window.confirm("هل تريد استرجاع البيانات الافتراضية للمكتب والمشرف؟")&&o()},className:"text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors shrink-0",title:"استرجاع البيانات الافتراضية الأولية",children:[l.jsx(F5,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"استرجاع الافتراضي"})]})]}),l.jsxs("div",{className:"bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-7 shadow-xs space-y-6",children:[l.jsxs("div",{className:"flex items-center justify-between pb-4 border-b border-slate-100",children:[l.jsxs("div",{className:"flex items-center gap-2.5",children:[l.jsx("div",{className:"w-9 h-9 rounded-xl bg-blue-50 text-[#0072B1] flex items-center justify-center border border-blue-200",children:l.jsx(gi,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-base font-black text-slate-900",children:"بيانات الأستاذ المشرف على النادي"}),l.jsx("p",{className:"text-xs text-slate-500",children:"المؤطر الأكاديمي المعتمد من الكلية"})]})]}),l.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-50 text-[#0072B1] border border-blue-200",children:"بطاقة التأطير"})]}),g&&l.jsxs("div",{className:"p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2",children:[l.jsx(Js,{className:"w-4 h-4 text-emerald-600 shrink-0"}),l.jsx("span",{children:g})]}),l.jsxs("form",{onSubmit:Be,className:"space-y-5",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-6 p-4 rounded-2xl bg-slate-50 border border-slate-200",children:[l.jsx("div",{className:"w-24 h-24 rounded-full overflow-hidden border-2 border-[#0072B1] bg-white flex items-center justify-center shrink-0 shadow-xs relative group",children:c.image?l.jsx("img",{src:c.image,alt:c.name,className:"w-full h-full object-cover",onError:q=>{q.target.onerror=null,q.target.src=""}}):l.jsxs("div",{className:"flex flex-col items-center justify-center text-[#0072B1]",children:[l.jsx(gi,{className:"w-10 h-10"}),l.jsx("span",{className:"text-[9px] font-bold mt-1 text-slate-400",children:"بدون صورة"})]})}),l.jsxs("div",{className:"flex-1 text-center sm:text-right space-y-2",children:[l.jsx("h5",{className:"text-xs sm:text-sm font-bold text-slate-900",children:"الصورة الشخصية للأستاذ (اختيارية)"}),l.jsx("p",{className:"text-[11px] text-slate-500 leading-relaxed",children:"يمكنك رفع صورة من جهازك، أو تركها فارغة وسيتم عرض أيقونة الأستاذ المشرف تلقائياً بشكل رسمي وأنيق."}),l.jsxs("div",{className:"flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1",children:[l.jsxs("label",{className:"cursor-pointer bg-white hover:bg-slate-100 text-slate-700 border-2 border-slate-200 px-3 py-1.5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-xs transition-colors",children:[l.jsx(qy,{className:"w-3.5 h-3.5 text-[#0072B1]"}),l.jsx("span",{children:E?"جاري الرفع...":"رفع صورة من الجهاز"}),l.jsx("input",{type:"file",accept:"image/*",onChange:I,disabled:E,className:"hidden"})]}),c.image&&l.jsxs("button",{type:"button",onClick:de,className:"bg-white hover:bg-red-50 text-red-600 border-2 border-red-200 px-3 py-1.5 rounded-xl text-xs font-bold inline-flex items-center gap-1.5 shadow-xs transition-colors",children:[l.jsx(Wy,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"إزالة الصورة (تركها فارغة)"})]})]})]})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"اسم ولقب الأستاذ المشرف *"}),l.jsx("input",{type:"text",name:"name",value:c.name,onChange:C,placeholder:"مثال: د. عبد الرحمن بن سالم",required:!0,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"الصفة / الرتبة *"}),l.jsx("input",{type:"text",name:"role",value:c.role,onChange:C,placeholder:"الأستاذ المشرف على النادي / أستاذ محاضر",required:!0,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"القسم والكلية"}),l.jsx("input",{type:"text",name:"department",value:c.department,onChange:C,placeholder:"كلية العلوم والتكنولوجيا - جامعة تامنغست",className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"نبذة توجيهية أو كلمة المشرف"}),l.jsx("textarea",{name:"description",rows:"2",value:c.description,onChange:C,placeholder:"مرافقة وتأطير علمي وأكاديمي لنشاطات النادي ومشاريع الطلبة في الكلية...",className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all resize-none"})]}),l.jsx("div",{className:"flex justify-end pt-2",children:l.jsx("button",{type:"submit",disabled:d,className:"bg-[#0072B1] hover:bg-[#005a8e] text-white px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all shadow-xs disabled:opacity-50",children:d?l.jsxs(l.Fragment,{children:[l.jsx(os,{className:"w-4 h-4 animate-spin"}),l.jsx("span",{children:"جاري الحفظ..."})]}):l.jsxs(l.Fragment,{children:[l.jsx(Js,{className:"w-4 h-4"}),l.jsx("span",{children:"حفظ بيانات الأستاذ المشرف"})]})})})]})]}),l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{className:"bg-white border-2 border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[l.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-500"}),l.jsxs("h4",{className:"text-base sm:text-lg font-black text-slate-900",children:["أعضاء المكتب التنفيذي (",e.length,")"]})]}),l.jsx("p",{className:"text-xs sm:text-sm text-slate-500",children:"أضف الأعضاء (الرئيس، نائب الرئيس، الأمين العام، مسؤولي الخلايا والأنشطة). يمكنك كتابة الاسم وتحديد المنصب وترك الصورة فارغة."})]}),l.jsxs("button",{onClick:sn,className:"bg-[#0072B1] hover:bg-[#005a8e] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all shadow-sm shrink-0",children:[l.jsx(xi,{className:"w-4 h-4"}),l.jsx("span",{children:"+ إضافة عضو جديد في المكتب"})]})]}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5",children:e.length===0?l.jsxs("div",{className:"col-span-full bg-white border-2 border-dashed border-slate-300 rounded-2xl p-12 text-center text-slate-400",children:[l.jsx(Zs,{className:"w-12 h-12 mx-auto text-slate-300 mb-2"}),l.jsx("p",{className:"text-sm font-bold text-slate-600 mb-1",children:"لم يتم إضافة أي عضو في المكتب بعد"}),l.jsx("p",{className:"text-xs text-slate-400 mb-4",children:'اضغط على زر "إضافة عضو جديد" للبدء في تشكيل المكتب التنفيذي'}),l.jsxs("button",{onClick:sn,className:"bg-[#0072B1] text-white px-4 py-2 rounded-xl text-xs font-bold inline-flex items-center gap-1.5",children:[l.jsx(xi,{className:"w-4 h-4"}),l.jsx("span",{children:"إضافة أول عضو"})]})]}):e.map(q=>l.jsxs("div",{className:"bg-white border-2 border-slate-200 rounded-2xl p-5 text-right flex flex-col justify-between shadow-xs hover:border-[#0072B1] transition-all relative",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("span",{className:"text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0072B1] border border-blue-200",children:q.badge||"المكتب التنفيذي"}),l.jsxs("div",{className:"flex items-center gap-1",children:[l.jsx("button",{onClick:()=>Ht(q),className:"p-1.5 text-slate-500 hover:text-[#0072B1] hover:bg-blue-50 rounded-lg transition-colors",title:"تعديل بيانات العضو",children:l.jsx(s2,{className:"w-3.5 h-3.5"})}),l.jsx("button",{onClick:()=>{window.confirm(`هل أنت متأكد من حذف (${q.name}) من المكتب التنفيذي؟`)&&i(q.id)},className:"p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors",title:"حذف هذا العضو",children:l.jsx(rm,{className:"w-3.5 h-3.5"})})]})]}),l.jsxs("div",{className:"flex items-center gap-4 mb-3",children:[l.jsx("div",{className:"w-16 h-16 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-50 shrink-0 flex items-center justify-center p-0.5",children:q.image?l.jsx("img",{src:q.image,alt:q.name,className:"w-full h-full object-cover rounded-full",onError:ie=>{ie.target.onerror=null,ie.target.style.display="none",ie.target.parentNode.innerHTML='<div class="w-full h-full flex items-center justify-center bg-blue-50 text-[#0072B1] rounded-full"><svg class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>'}}):l.jsx("div",{className:"w-full h-full flex items-center justify-center bg-blue-50 text-[#0072B1] rounded-full",children:l.jsx(Zs,{className:"w-7 h-7"})})}),l.jsxs("div",{className:"min-w-0 flex-1",children:[l.jsx("h5",{className:"text-sm font-black text-slate-900 truncate",children:q.name}),l.jsx("p",{className:"text-xs text-[#0072B1] font-bold truncate mt-0.5",children:q.role}),q.specialty&&l.jsx("p",{className:"text-[11px] text-slate-500 truncate mt-0.5",children:q.specialty})]})]})]}),l.jsxs("div",{className:"pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400",children:[l.jsx("span",{children:q.image?"صورة مخصصة":"بدون صورة (رمز افتراضي)"}),l.jsx("span",{className:"text-emerald-600 font-semibold",children:"ظاهر في الموقع"})]})]},q.id))})]}),R&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fadeIn",children:l.jsxs("div",{className:"bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full text-right relative shadow-2xl max-h-[88vh] overflow-y-auto border-2 border-slate-200",children:[l.jsx("button",{onClick:()=>k(!1),className:"absolute top-4 left-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 bg-slate-100",children:l.jsx(as,{className:"w-5 h-5"})}),l.jsx("h3",{className:"text-lg font-black text-slate-900 mb-1",children:T?"تعديل بيانات عضو في المكتب":"إضافة عضو جديد في المكتب التنفيذي"}),l.jsx("p",{className:"text-xs text-slate-500 mb-5",children:"أدخل اسم العضو ومنصبه في النادي. الصورة اختيارية ويمكن تركها فارغة."}),w&&l.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2",children:[l.jsx(mi,{className:"w-4 h-4 shrink-0"}),l.jsx("span",{children:w})]}),l.jsxs("form",{onSubmit:he,className:"space-y-4",children:[l.jsxs("div",{className:"p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4",children:[l.jsx("div",{className:"w-16 h-16 rounded-full overflow-hidden border-2 border-slate-300 bg-white shrink-0 flex items-center justify-center",children:_.image?l.jsx("img",{src:_.image,alt:"معاينة",className:"w-full h-full object-cover rounded-full"}):l.jsx(Zs,{className:"w-8 h-8 text-[#0072B1]"})}),l.jsxs("div",{className:"flex-1 space-y-1.5",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:"text-xs font-bold text-slate-800",children:"الصورة الشخصية"}),l.jsx("span",{className:"text-[10px] text-slate-400 font-semibold",children:"(اختيارية)"})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.jsxs("label",{className:"cursor-pointer bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 px-2.5 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1 shadow-xs transition-colors",children:[l.jsx(qy,{className:"w-3 h-3 text-[#0072B1]"}),l.jsx("span",{children:b?"جاري الرفع...":"رفع صورة"}),l.jsx("input",{type:"file",accept:"image/*",onChange:te,disabled:b,className:"hidden"})]}),_.image&&l.jsxs("button",{type:"button",onClick:xe,className:"bg-white hover:bg-red-50 text-red-600 border border-red-200 px-2.5 py-1 rounded-lg text-xs font-bold inline-flex items-center gap-1 shadow-xs",children:[l.jsx(Wy,{className:"w-3 h-3"}),l.jsx("span",{children:"حذف الصورة"})]})]})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"الاسم الكامل للعضو *"}),l.jsx("input",{type:"text",name:"name",value:_.name,onChange:z,placeholder:"مثال: أحمد عبد الله",required:!0,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1.5",children:"اختيار سريع للمنصب أو كتابة منصب مخصص:"}),l.jsx("div",{className:"flex flex-wrap gap-1.5 mb-2",children:A.map((q,ie)=>l.jsx("button",{type:"button",onClick:()=>X(q),className:`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition-colors ${_.role===q.role?"bg-[#0072B1] text-white border-[#0072B1]":"bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200"}`,children:q.role},ie))})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3.5",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"المنصب في النادي *"}),l.jsx("input",{type:"text",name:"role",value:_.role,onChange:z,placeholder:"رئيس النادي / نائب الرئيس...",required:!0,className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all font-bold text-[#0072B1]"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"شارة المنصب (Badge)"}),l.jsx("input",{type:"text",name:"badge",value:_.badge,onChange:z,placeholder:"الرئاسة / الإدارة / الإعلام...",className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-bold text-slate-800 mb-1",children:"التخصص الدراسي / الشعبة (اختياري)"}),l.jsx("input",{type:"text",name:"specialty",value:_.specialty,onChange:z,placeholder:"مثال: هندسة كهربائية وإلكترونيات / إعلام آلي",className:"w-full bg-slate-50 border-2 border-slate-200 focus:bg-white focus:border-[#0072B1] rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-slate-900 focus:outline-none transition-all"})]}),l.jsxs("div",{className:"pt-3 flex gap-3",children:[l.jsx("button",{type:"submit",disabled:M,className:"bg-[#0072B1] hover:bg-[#005a8e] text-white flex-1 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 disabled:opacity-50 transition-colors shadow-xs",children:M?l.jsxs(l.Fragment,{children:[l.jsx(os,{className:"w-4 h-4 animate-spin"}),l.jsx("span",{children:"جاري الحفظ..."})]}):l.jsxs(l.Fragment,{children:[l.jsx(Js,{className:"w-4 h-4"}),l.jsx("span",{children:T?"حفظ التعديلات":"إضافة العضو للمكتب"})]})}),l.jsx("button",{type:"button",onClick:()=>k(!1),className:"px-5 py-3 rounded-xl text-xs font-bold text-slate-600 hover:text-slate-900 border border-slate-300 bg-slate-100",children:"إلغاء"})]})]})]})})]})}function ij({adminUser:t,onLogout:e}){const[n,r]=L.useState("members"),[s,i]=L.useState([]),[o,c]=L.useState([]),[u,d]=L.useState([]),[f,g]=L.useState($.supervisor),[m,E]=L.useState([]),[S,R]=L.useState(!0),[k,T]=L.useState(!1),x=async()=>{try{T(!0);const[C,I,de,Be,sn]=await Promise.all([ge.getMembers(),ge.getCourses(),ge.getCourseRegistrations(),ge.getSupervisor(),ge.getExecutiveBoard()]);i(C),c(I),d(de),g(Be),E(sn)}catch(C){console.error("Failed to load admin data:",C)}finally{R(!1),T(!1)}};L.useEffect(()=>{x()},[]);const _=async C=>{try{await ge.deleteMember(C),i(I=>I.filter(de=>de.id!==C))}catch(I){alert("فشل حذف العضو: "+I.message)}},j=async C=>{const I=await ge.addCourse(C);c(de=>[I,...de])},M=async(C,I)=>{await ge.updateCourse(C,I),c(de=>de.map(Be=>Be.id===C?{...Be,...I}:Be))},O=async C=>{window.confirm("هل أنت متأكد من حذف هذه الدورة من الموقع؟")&&(await ge.deleteCourse(C),c(I=>I.filter(de=>de.id!==C)))},w=async C=>{await ge.updateSupervisor(C),g(C)},y=async C=>{const I=await ge.addExecutiveMember(C);E(de=>[...de,I])},b=async(C,I)=>{await ge.updateExecutiveMember(C,I),E(de=>de.map(Be=>String(Be.id)===String(C)?{...Be,...I}:Be))},N=async C=>{await ge.deleteExecutiveMember(C),E(I=>I.filter(de=>String(de.id)!==String(C)))},A=async()=>{const C=await ge.resetBoardToDefaults();g(C.supervisor),E(C.executiveBoard)};return l.jsxs("div",{className:"min-h-screen bg-slate-50 text-right",children:[l.jsx("header",{className:"bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs",children:l.jsxs("div",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-9 h-9 rounded-lg overflow-hidden border border-slate-200 bg-white p-0.5",children:l.jsx("img",{src:$.images.clubLogo,alt:$.name,className:"w-full h-full object-cover rounded"})}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-sm sm:text-base font-bold text-slate-900",children:"لوحة تحكم إدارة النادي"}),l.jsx("span",{className:"px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#0072B1] border border-blue-200",children:"CIC ADMIN"})]}),l.jsx("p",{className:"text-[10px] text-slate-500",children:$.name})]})]}),l.jsxs("div",{className:"flex items-center gap-2 sm:gap-3",children:[l.jsxs("a",{href:"#/",target:"_blank",rel:"noreferrer",className:"inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold transition-colors",children:[l.jsx("span",{children:"معاينة الموقع"}),l.jsx(R5,{className:"w-3.5 h-3.5"})]}),l.jsx("button",{onClick:x,disabled:k,className:"p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 transition-colors",title:"تحديث البيانات",children:l.jsx(U5,{className:`w-3.5 h-3.5 ${k?"animate-spin text-[#0072B1]":""}`})}),l.jsxs("button",{onClick:e,className:"px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors",children:[l.jsx(M5,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"خروج"})]})]})]})}),l.jsxs("main",{className:"max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6",children:[l.jsxs("div",{className:"bg-white border-2 border-slate-200 rounded-2xl p-1.5 flex flex-wrap gap-2 shadow-xs",children:[l.jsxs("button",{onClick:()=>r("members"),className:`flex-1 min-w-[140px] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${n==="members"?"bg-[#0072B1] text-white shadow-xs":"text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`,children:[l.jsx(W5,{className:"w-4 h-4"}),l.jsx("span",{children:"طلبات الانضمام"}),l.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${n==="members"?"bg-white/20 text-white":"bg-slate-100 text-slate-700"}`,children:s.length})]}),l.jsxs("button",{onClick:()=>r("courses"),className:`flex-1 min-w-[140px] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${n==="courses"?"bg-[#0072B1] text-white shadow-xs":"text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`,children:[l.jsx(is,{className:"w-4 h-4"}),l.jsx("span",{children:"إدارة الدورات"}),l.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${n==="courses"?"bg-white/20 text-white":"bg-slate-100 text-slate-700"}`,children:o.length})]}),l.jsxs("button",{onClick:()=>r("registrations"),className:`flex-1 min-w-[140px] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${n==="registrations"?"bg-[#0072B1] text-white shadow-xs":"text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`,children:[l.jsx(Aa,{className:"w-4 h-4"}),l.jsx("span",{children:"المسجلون في الدورات"}),l.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${n==="registrations"?"bg-white/20 text-white":"bg-slate-100 text-slate-700"}`,children:u.length})]}),l.jsxs("button",{onClick:()=>r("board"),className:`flex-1 min-w-[140px] py-3 px-4 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all ${n==="board"?"bg-[#0072B1] text-white shadow-xs":"text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`,children:[l.jsx(nm,{className:"w-4 h-4"}),l.jsx("span",{children:"المكتب التنفيذي والمشرف"}),l.jsx("span",{className:`px-2 py-0.5 rounded-full text-[10px] font-bold ${n==="board"?"bg-white/20 text-white":"bg-slate-100 text-slate-700"}`,children:m.length})]})]}),S?l.jsxs("div",{className:"py-16 text-center",children:[l.jsx("div",{className:"w-8 h-8 border-2 border-slate-300 border-t-[#0072B1] rounded-full animate-spin mx-auto mb-2"}),l.jsx("p",{className:"text-slate-500 text-xs",children:"جاري تحميل البيانات..."})]}):l.jsxs("div",{children:[n==="members"&&l.jsx(tj,{members:s,onDeleteMember:_,onRefresh:x}),n==="courses"&&l.jsx(nj,{courses:o,onAddCourse:j,onUpdateCourse:M,onDeleteCourse:O}),n==="registrations"&&l.jsx(rj,{registrations:u,courses:o}),n==="board"&&l.jsx(sj,{supervisor:f,boardMembers:m,onUpdateSupervisor:w,onAddMember:y,onUpdateMember:b,onDeleteMember:N,onResetDefaults:A})]})]})]})}function oj(){return l.jsxs("div",{className:"min-h-screen flex flex-col bg-slate-50 text-slate-800",children:[l.jsx(H5,{}),l.jsxs("main",{className:"flex-1",children:[l.jsx(K5,{}),l.jsx(G5,{}),l.jsx(Y5,{}),l.jsx(X5,{}),l.jsx(J5,{})]}),l.jsx(Z5,{})]})}function aj(){const[t,e]=cf.useState(()=>ge.getAdminSession()),n=s=>{e(s)},r=async()=>{await ge.adminLogout(),e(null)};return t?l.jsx(ij,{adminUser:t,onLogout:r}):l.jsx(ej,{onLoginSuccess:n})}function lj(){const t=Jc();return L.useEffect(()=>{if(t.hash&&t.pathname==="/"){const e=document.querySelector(t.hash);e&&e.scrollIntoView({behavior:"smooth"})}},[t]),l.jsxs(rI,{children:[l.jsx(Ml,{path:"/",element:l.jsx(oj,{})}),l.jsx(Ml,{path:"/admin",element:l.jsx(aj,{})}),l.jsx(Ml,{path:"*",element:l.jsx(tI,{to:"/",replace:!0})})]})}window.location.pathname.endsWith("/admin")&&!window.location.hash&&window.location.replace(window.location.pathname.replace(/\/admin$/,"")+"/#/admin");Ld.createRoot(document.getElementById("root")).render(l.jsx(cf.StrictMode,{children:l.jsx(oI,{children:l.jsx(lj,{})})}));
