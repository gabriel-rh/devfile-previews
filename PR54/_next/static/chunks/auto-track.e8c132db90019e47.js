"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8119],{44192:function(t,e,n){n.r(e),n.d(e,{form:function(){return u},link:function(){return i}});var r=n(33404);function i(t,e,n,i){var u=this,a=[];return t&&(t instanceof Element?[t]:"toArray"in t?t.toArray():t).forEach(function(t){t.addEventListener("click",function(a){var o,c,f,s,l,h,v=e instanceof Function?e(t):e,b=n instanceof Function?n(t):n,k=t.getAttribute("href")||t.getAttributeNS("http://www.w3.org/1999/xlink","href")||t.getAttribute("xlink:href")||(null===(o=t.getElementsByTagName("a")[0])||void 0===o?void 0:o.getAttribute("href")),m=(0,r.F)(u.track(v,b,null!=i?i:{}),null!==(c=u.settings.timeout)&&void 0!==c?c:500);f=t,s=k,("_blank"!==f.target||!s)&&!(h=l=a).ctrlKey&&!h.shiftKey&&!h.metaKey&&(!h.button||1!=h.button)&&k&&(a.preventDefault?a.preventDefault():a.returnValue=!1,m.catch(console.error).then(function(){window.location.href=k}).catch(console.error))},!1)}),this}function u(t,e,n,i){var u=this;return t?(t instanceof HTMLFormElement&&(t=[t]),t.forEach(function(t){if(!(t instanceof Element))throw TypeError("Must pass HTMLElement to trackForm/trackSubmit.");var a=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1;var o,c=e instanceof Function?e(t):e,f=n instanceof Function?n(t):n;(0,r.F)(u.track(c,f,null!=i?i:{}),null!==(o=u.settings.timeout)&&void 0!==o?o:500).catch(console.error).then(function(){t.submit()}).catch(console.error)},o=window.jQuery||window.Zepto;o?o(t).submit(a):t.addEventListener("submit",a,!1)}),this):this}}}]);