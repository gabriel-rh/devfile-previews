"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3096],{44669:function(a,b,c){function d(a,b){return Object.keys(b).reduce(function(c,d){return d.startsWith(a)&&(c[d.substr(a.length)]=b[d]),c},{})}c.r(b),c.d(b,{queryString:function(){return f}});var e=c(87554);function f(a,b){var c=document.createElement("a");c.href=b;var f=c.search.slice(1).split("&").reduce(function(a,b){var c=b.split("="),d=c[0],f=c[1];return a[d]=(0,e.a)(f),a},{}),g=[],h=f.ajs_uid,i=f.ajs_event,j=f.ajs_aid;if(j){var k=Array.isArray(f.ajs_aid)?f.ajs_aid[0]:f.ajs_aid;a.setAnonymousId(k)}if(h){var l=Array.isArray(f.ajs_uid)?f.ajs_uid[0]:f.ajs_uid,m=d("ajs_trait_",f);g.push(a.identify(l,m))}if(i){var n=Array.isArray(f.ajs_event)?f.ajs_event[0]:f.ajs_event,o=d("ajs_prop_",f);g.push(a.track(n,o))}return Promise.all(g)}}}])