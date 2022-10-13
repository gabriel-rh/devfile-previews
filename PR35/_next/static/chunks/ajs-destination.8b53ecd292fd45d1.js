(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9464,5826],{41323:function(t,n,e){"use strict";function r(t,n){var e,r;return"boolean"==typeof(null==n?void 0:n.enabled)?n.enabled:null===(r=null===(e=null==t?void 0:t.__default)||void 0===e?void 0:e.enabled)||void 0===r||r}e.d(n,{n:function(){return r}})},62795:function(t,n,e){"use strict";e.r(n),e.d(n,{LegacyDestination:function(){return m},ajsDestinations:function(){return x}});var r=e(5163),i=e(64122),o=e(91946),s=e(61668),u=e(79677),a=e(37759),c=e(37624),f=e(41323),$=e(53826),l=e(42578),p=e(98552),v=e(46804),d=e(18767),_=e(22870),h=e(91329),g=e(63822);function y(t){return t.toLowerCase().replace(".","").replace(/\s+/g,"-")}function w(t,n){return void 0===n&&(n=!1),n?btoa(t).replace(/=/g,""):void 0}var m=function(){function t(t,n,e,i){void 0===e&&(e={}),this.options={},this.type="destination",this.middleware=[],this._ready=!1,this._initialized=!1,this.flushing=!1,this.name=t,this.version=n,this.settings=(0,r.__assign)({},e),this.settings.type&&"browser"===this.settings.type&&delete this.settings.type,this.options=i,this.buffer=i.disableClientPersistence?new p.Z(4,[]):new v.$(4,"dest-".concat(t)),this.scheduleFlush()}return t.prototype.isLoaded=function(){return this._ready},t.prototype.ready=function(){var t;return null!==(t=this.onReady)&&void 0!==t?t:Promise.resolve()},t.prototype.load=function(t,n){return(0,r.__awaiter)(this,void 0,void 0,function(){var i,o=this;return(0,r.__generator)(this,function(s){switch(s.label){case 0:if(this._ready||void 0!==this.onReady)return[2];return i=this,[4,function(t,n,i,o,s,u){return(0,r.__awaiter)(this,void 0,void 0,function(){var a,c,f,$,l,p,v,d;return(0,r.__generator)(this,function(_){switch(_.label){case 0:c=w(a=y(i),u),f=(0,h.Kg)(),$="".concat(f,"/integrations/").concat(null!=c?c:a,"/").concat(o,"/").concat(null!=c?c:a,".dynamic.js.gz"),_.label=1;case 1:return _.trys.push([1,3,,4]),[4,(0,g.v)($)];case 2:return _.sent(),function(t,n,i){var o,s,u;try{var a=(null!==(u=null===(s=null===(o=e.g.window)||void 0===o?void 0:o.performance)||void 0===s?void 0:s.getEntriesByName(t,"resource"))&&void 0!==u?u:[])[0];a&&n.stats.gauge("legacy_destination_time",Math.round(a.duration),(0,r.__spreadArray)([i],a.duration<100?["cached"]:[],!0))}catch(c){}}($,t,i),[3,4];case 3:throw l=_.sent(),t.stats.gauge("legacy_destination_time",-1,["plugin:".concat(i),"failed"]),l;case 4:return[4,Promise.all((p=window["".concat(a,"Deps")]).map(function(t){return(0,g.v)(f+t+".gz")}))];case 5:return _.sent(),window["".concat(a,"Loader")](),(v=window["".concat(a,"Integration")]).Integration&&(v({user:function(){return n.user()},addIntegration:function(){}}),v=v.Integration),(d=new v(s)).analytics=n,[2,d]}})})}(t,n,this.name,this.version,this.settings,this.options.obfuscate)];case 1:i.integration=s.sent(),this.onReady=new Promise(function(t){var n=function(){o._ready=!0,t(!0)};o.integration.once("ready",n)}),this.onInitialize=new Promise(function(t){var n=function(){o._initialized=!0,t(!0)};o.integration.on("initialize",n)});try{t.stats.increment("analytics_js.integration.invoke",1,["method:initialize","integration_name:".concat(this.name),]),this.integration.initialize()}catch(u){throw t.stats.increment("analytics_js.integration.invoke.error",1,["method:initialize","integration_name:".concat(this.name),]),u}return[2]}})})},t.prototype.unload=function(t,n){return function(t,n,e){return(0,r.__awaiter)(this,void 0,void 0,function(){var i,o,s,u;return(0,r.__generator)(this,function(r){return i=(0,h.Kg)(),o=y(t),s=w(t,e),u="".concat(i,"/integrations/").concat(null!=s?s:o,"/").concat(n,"/").concat(null!=s?s:o,".dynamic.js.gz"),[2,(0,g.t)(u)]})})}(this.name,this.version,this.options.obfuscate)},t.prototype.addMiddleware=function(){for(var t,n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];this.middleware=(t=this.middleware).concat.apply(t,n)},t.prototype.shouldBuffer=function(t){return"page"!==t.event.type&&((0,o.s)()||!1===this._ready||!1===this._initialized)},t.prototype.send=function(t,n,e){var i,o;return(0,r.__awaiter)(this,void 0,void 0,function(){var u,a,$,l,p,v;return(0,r.__generator)(this,function(_){switch(_.label){case 0:var h;if(this.shouldBuffer(t))return this.buffer.push(t),this.scheduleFlush(),[2,t];if(u=null===(o=null===(i=this.options)||void 0===i?void 0:i.plan)||void 0===o?void 0:o.track,a=t.event.event,u&&a&&"Segment.io"!==this.name){if($=u[a],!(0,f.n)(u,$))return t.updateEvent("integrations",(0,r.__assign)((0,r.__assign)({},t.event.integrations),{All:!1,"Segment.io":!0})),t.cancel(new s.Y({retry:!1,reason:"Event ".concat(a," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t];if(t.updateEvent("integrations",(0,r.__assign)((0,r.__assign)({},t.event.integrations),null==$?void 0:$.integrations)),(null==$?void 0:$.enabled)&&(null==$?void 0:$.integrations[this.name])===!1)return t.cancel(new s.Y({retry:!1,reason:"Event ".concat(a," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,t]}return[4,(0,d.applyDestinationMiddleware)(this.name,JSON.parse(JSON.stringify(h=t.event)),this.middleware)];case 1:if(null===(l=_.sent()))return[2,t];p=new n(l,{}),t.stats.increment("analytics_js.integration.invoke",1,["method:".concat(e),"integration_name:".concat(this.name),]),_.label=2;case 2:if(_.trys.push([2,5,,6]),!this.integration)return[3,4];return[4,(0,c.O)(this.integration.invoke.call(this.integration,e,p))];case 3:_.sent(),_.label=4;case 4:return[3,6];case 5:throw v=_.sent(),t.stats.increment("analytics_js.integration.invoke.error",1,["method:".concat(e),"integration_name:".concat(this.name),]),v;case 6:return[2,t]}})})},t.prototype.track=function(t){return(0,r.__awaiter)(this,void 0,void 0,function(){return(0,r.__generator)(this,function(n){return[2,this.send(t,i.Track,"track")]})})},t.prototype.page=function(t){var n;return(0,r.__awaiter)(this,void 0,void 0,function(){var e=this;return(0,r.__generator)(this,function(r){return(null===(n=this.integration)||void 0===n?void 0:n._assumesPageview)&&!this._initialized&&this.integration.initialize(),[2,this.onInitialize.then(function(){return e.send(t,i.Page,"page")})]})})},t.prototype.identify=function(t){return(0,r.__awaiter)(this,void 0,void 0,function(){return(0,r.__generator)(this,function(n){return[2,this.send(t,i.Identify,"identify")]})})},t.prototype.alias=function(t){return(0,r.__awaiter)(this,void 0,void 0,function(){return(0,r.__generator)(this,function(n){return[2,this.send(t,i.Alias,"alias")]})})},t.prototype.group=function(t){return(0,r.__awaiter)(this,void 0,void 0,function(){return(0,r.__generator)(this,function(n){return[2,this.send(t,i.Group,"group")]})})},t.prototype.scheduleFlush=function(){var t=this;!this.flushing&&setTimeout(function(){return(0,r.__awaiter)(t,void 0,void 0,function(){var t;return(0,r.__generator)(this,function(n){switch(n.label){case 0:return this.flushing=!0,t=this,[4,function(t,n){return(0,r.__awaiter)(this,void 0,void 0,function(){var e,i=this;return(0,r.__generator)(this,function(u){switch(u.label){case 0:if(e=[],(0,o.s)())return[2,n];return[4,(0,l.x)(function(){return n.length>0&&(0,o.G)()},function(){return(0,r.__awaiter)(i,void 0,void 0,function(){var i,o,u;return(0,r.__generator)(this,function(r){switch(r.label){case 0:if(!(i=n.pop()))return[2];return[4,(0,a.a)(i,t)];case 1:return(u=(o=r.sent())instanceof s._)||e.push(i),[2]}})})})];case 1:return u.sent(),e.map(function(t){return n.pushWithBackoff(t)}),[2,n]}})})}(this,this.buffer)];case 1:return t.buffer=n.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}})})},5e3*Math.random())},t}();function x(t,n,e){if(void 0===n&&(n={}),void 0===e&&(e={}),(0,u.s)())return[];t.plan&&((e=null!=e?e:{}).plan=t.plan);var r,i,o,s=null!==(i=null===(r=t.middlewareSettings)||void 0===r?void 0:r.routingRules)&&void 0!==i?i:[],a=(o=s,function(t){var n=t.payload,e=t.integration,r=t.next;new _.Store(o).getRulesByDestinationName(e).forEach(function(t){for(var e=t.matchers,i=t.transformers,o=0;o<e.length;o++)if(_.matches(n.obj,e[o])&&(n.obj=_.transform(n.obj,i[o]),null===n.obj))return r(null)}),r(n)}),c=(0,$.o)(t,null!=e?e:{});return Object.entries(t.integrations).map(function(t){var r,i=t[0],o=t[1];if(!i.startsWith("Segment")){var u=!1===n.All&&void 0===n[i];if(!1!==n[i]&&!u){var f=o.type,$=o.bundlingStatus,l=o.versionSettings;if(("unbundled"!==$&&("browser"===f||(null===(r=null==l?void 0:l.componentTypes)||void 0===r?void 0:r.includes("browser")))||"Segment.io"===i)&&"Iterable"!==i){var p,v,d,_,h,g=null!==(h=null!==(d=null===(v=(p=o).versionSettings)||void 0===v?void 0:v.override)&&void 0!==d?d:null===(_=p.versionSettings)||void 0===_?void 0:_.version)&&void 0!==h?h:"latest",y=new m(i,g,c[i],e);return s.filter(function(t){return t.destinationName===i}).length>0&&y.addMiddleware(a),y}}}}).filter(function(t){return void 0!==t})}},18767:function(t,n,e){"use strict";e.r(n),e.d(n,{applyDestinationMiddleware:function(){return u},sourceMiddlewarePlugin:function(){return a}});var r=e(5163),i=e(61668),o=e(37624),s=e(25030);function u(t,n,e){return(0,r.__awaiter)(this,void 0,void 0,function(){var i,u,a,c;return(0,r.__generator)(this,function(f){switch(f.label){case 0:i=0,u=e,f.label=1;case 1:if(!(i<u.length))return[3,4];return[4,function(n,e){return(0,r.__awaiter)(this,void 0,void 0,function(){var i,u,a;return(0,r.__generator)(this,function(c){switch(c.label){case 0:return i=!1,u=null,[4,(0,o.O)(e({payload:(0,s.D)(n,{clone:!0,traverse:!1}),integration:t,next:function(t){i=!0,null===t&&(u=null),t&&(u=t.obj)}}))];case 1:return c.sent(),i||null===u||(u.integrations=(0,r.__assign)((0,r.__assign)({},n.integrations),((a={})[t]=!1,a))),[2,u]}})})}(n,a=u[i])];case 2:if(null===(c=f.sent()))return[2,null];n=c,f.label=3;case 3:return i++,[3,1];case 4:return[2,n]}})})}function a(t,n){function e(e){return(0,r.__awaiter)(this,void 0,void 0,function(){var u;return(0,r.__generator)(this,function(r){switch(r.label){case 0:return u=!1,[4,(0,o.O)(t({payload:(0,s.D)(e.event,{clone:!0,traverse:!1}),integrations:null!=n?n:{},next:function(t){u=!0,t&&(e.event=t.obj)}}))];case 1:if(r.sent(),!u)throw new i.Y({retry:!1,type:"middleware_cancellation",reason:"Middleware `next` function skipped"});return[2,e]}})})}return{name:"Source Middleware ".concat(t.name),type:"before",version:"0.1.0",isLoaded:function(){return!0},load:function(t){return Promise.resolve(t)},track:e,page:e,identify:e,alias:e,group:e}}},22870:function(t,n,e){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.Store=n.matches=n.transform=void 0;var i=e(64303);Object.defineProperty(n,"transform",{enumerable:!0,get:function(){return r(i).default}});var o=e(2370);Object.defineProperty(n,"matches",{enumerable:!0,get:function(){return r(o).default}});var s=e(41444);Object.defineProperty(n,"Store",{enumerable:!0,get:function(){return r(s).default}})},2370:function(t,n,e){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var i=r(e(27843));n.default=function(t,n){if(!n)throw Error("No matcher supplied!");switch(n.type){case"all":return!0;case"fql":return function(t,n){if(!t)return!1;try{t=JSON.parse(t)}catch(e){throw Error('Failed to JSON.parse FQL intermediate representation "'.concat(t,'": ').concat(e))}var r=function t(n,e){if(!Array.isArray(n))return!0===o(n,e);var r,i,c,f,$,l=n[0];switch(l){case"!":return!t(n[1],e);case"or":for(var p=1;p<n.length;p++)if(t(n[p],e))return!0;return!1;case"and":for(var p=1;p<n.length;p++)if(!t(n[p],e))return!1;return!0;case"=":case"!=":return function(n,e,r,i){switch(s(n)&&(n=t(n,i)),s(e)&&(e=t(e,i)),"object"==typeof n&&"object"==typeof e&&(n=JSON.stringify(n),e=JSON.stringify(e)),r){case"=":return n===e;case"!=":return n!==e;default:throw Error("Invalid operator in compareItems: ".concat(r))}}(o(n[1],e),o(n[2],e),l,e);case"<=":case"<":case">":case">=":return function(n,e,r,i){if(s(n)&&(n=t(n,i)),s(e)&&(e=t(e,i)),"number"!=typeof n||"number"!=typeof e)return!1;switch(r){case"<=":return n<=e;case">=":return n>=e;case"<":return n<e;case">":return n>e;default:throw Error("Invalid operator in compareNumbers: ".concat(r))}}(o(n[1],e),o(n[2],e),l,e);case"contains":return r=o(n[1],e),i=o(n[2],e),"string"==typeof r&&"string"==typeof i&&-1!==r.indexOf(i);case"match":return c=o(n[1],e),f=o(n[2],e),"string"==typeof c&&"string"==typeof f&&function(t,n){var e,r;Pattern:for(;t.length>0;){var i=void 0,o=void 0;if(i=(e=u(t)).star,o=e.chunk,t=e.pattern,i&&""===o)return!0;var s=a(o,n),c=s.t,f=s.ok,$=s.err;if($)return!1;if(f&&(0===c.length||t.length>0)){n=c;continue}if(i)for(var l=0;l<n.length;l++){if(c=(r=a(o,n.slice(l+1))).t,f=r.ok,$=r.err,f){if(0===t.length&&c.length>0)continue;n=c;continue Pattern}if($)break}return!1}return 0===n.length}(f,c);case"lowercase":var v=o(n[1],e);if("string"!=typeof v)return null;return v.toLowerCase();case"typeof":return typeof o(n[1],e);case"length":return $=o(n[1],e),null===$?0:Array.isArray($)||"string"==typeof $?$.length:NaN;default:throw Error("FQL IR could not evaluate for token: ".concat(l))}}(t,n);return"boolean"==typeof r&&r}(n.ir,t);default:throw Error("Matcher of type ".concat(n.type," unsupported."))}};function o(t,n){return Array.isArray(t)?t:"object"==typeof t?t.value:(0,i.default)(n,t)}function s(t){return!!Array.isArray(t)&&(("lowercase"===t[0]||"length"===t[0]||"typeof"===t[0])&&2===t.length||("contains"===t[0]||"match"===t[0])&&3===t.length)}function u(t){for(var n,e={star:!1,chunk:"",pattern:""};t.length>0&&"*"===t[0];)t=t.slice(1),e.star=!0;var r=!1;Scan:for(n=0;n<t.length;n++)switch(t[n]){case"\\":n+1<t.length&&n++;break;case"[":r=!0;break;case"]":r=!1;break;case"*":if(!r)break Scan}return e.chunk=t.slice(0,n),e.pattern=t.slice(n),e}function a(t,n){for(var e,r,i={t:"",ok:!1,err:!1};t.length>0;){if(0===n.length)return i;switch(t[0]){case"[":var o=n[0];n=n.slice(1);var s=!0;(t=t.slice(1)).length>0&&"^"===t[0]&&(s=!1,t=t.slice(1));for(var u=!1,a=0;;){if(t.length>0&&"]"===t[0]&&a>0){t=t.slice(1);break}var f="",$="",l=void 0;if(f=(e=c(t)).char,t=e.newChunk,e.err||($=f,"-"===t[0]&&($=(r=c(t.slice(1))).char,t=r.newChunk,r.err)))return i;f<=o&&o<=$&&(u=!0),a++}if(u!==s)return i;break;case"?":n=n.slice(1),t=t.slice(1);break;case"\\":if(0===(t=t.slice(1)).length)return i.err=!0,i;default:if(t[0]!==n[0])return i;n=n.slice(1),t=t.slice(1)}}return i.t=n,i.ok=!0,i.err=!1,i}function c(t){var n={char:"",newChunk:"",err:!1};return 0===t.length||"-"===t[0]||"]"===t[0]||"\\"===t[0]&&0===(t=t.slice(1)).length?(n.err=!0,n):(n.char=t[0],n.newChunk=t.slice(1),0===n.newChunk.length&&(n.err=!0),n)}},41444:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=function(){function t(t){this.rules=[],this.rules=t||[]}return t.prototype.getRulesByDestinationName=function(t){for(var n=[],e=0,r=this.rules;e<r.length;e++){var i=r[e];(i.destinationName===t||void 0===i.destinationName)&&n.push(i)}return n},t}();n.default=e},64303:function(t,n,e){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0});var i=r(e(80374)),o=r(e(27843)),s=r(e(75500)),u=e(22341),a=e(94966);function c(t,n){for(var e in n.drop){if(n.drop.hasOwnProperty(e)){var r=""===e?t:(0,o.default)(t,e);if("object"==typeof r&&null!==r)for(var i=0,s=n.drop[e];i<s.length;i++)delete r[s[i]]}}}function f(t,n){for(var e in n.allow){if(n.allow.hasOwnProperty(e)){var r=""===e?t:(0,o.default)(t,e);if("object"==typeof r&&null!==r)for(var i in r)r.hasOwnProperty(i)&&-1===n.allow[e].indexOf(i)&&delete r[i]}}}function $(t,n){var e=JSON.parse(JSON.stringify(t));for(var r in n.map){if(n.map.hasOwnProperty(r)){var i=n.map[r],s=r.split("."),c=void 0;if(s.length>1?(s.pop(),c=(0,o.default)(e,s.join("."))):c=t,"object"==typeof c){if(i.copy){var f=(0,o.default)(e,i.copy);void 0!==f&&(0,u.dset)(t,r,f)}else if(i.move){var $=(0,o.default)(e,i.move);void 0!==$&&(0,u.dset)(t,r,$),(0,a.unset)(t,i.move)}else i.hasOwnProperty("set")&&(0,u.dset)(t,r,i.set);if(i.to_string){var l=(0,o.default)(t,r);if("string"==typeof l||"object"==typeof l&&null!==l)continue;void 0!==l?(0,u.dset)(t,r,JSON.stringify(l)):(0,u.dset)(t,r,"undefined")}}}}}function l(t,n){var e;return!(n.sample.percent<=0)&&(n.sample.percent>=1||(n.sample.path?function(t,n){var e=(0,o.default)(t,n.sample.path),r=(0,i.default)(JSON.stringify(e)),u=-64,a=[];p(r.slice(0,8),a);for(var c=0,f=0;f<64&&1!==a[f];f++)c++;if(0!==c){var $=[];p(r.slice(9,16),$),u-=c,a.splice(0,c),$.splice(64-c),a=a.concat($)}return a[63]=0===a[63]?1:0,(0,s.default)(parseInt(a.join(""),2),u)<n.sample.percent}(t,n):(e=n.sample.percent,Math.random()<=e)))}function p(t,n){for(var e=0;e<8;e++)for(var r=t[e],i=128;i>=1;i/=2)r-i>=0?(r-=i,n.push(1)):n.push(0)}n.default=function(t,n){for(var e=t,r=0,i=n;r<i.length;r++){var o=i[r];switch(o.type){case"drop":return null;case"drop_properties":c(e,o.config);break;case"allow_properties":f(e,o.config);break;case"sample_event":if(l(e,o.config))break;return null;case"map_properties":$(e,o.config);break;case"hash_properties":break;default:throw Error('Transformer of type "'.concat(o.type,'" is unsupported.'))}}return e}},94966:function(t,n,e){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(n,"__esModule",{value:!0}),n.unset=void 0;var i=r(e(27843));n.unset=function(t,n){if((0,i.default)(t,n)){for(var e=n.split("."),r=e.pop();e.length&&"\\"===e[e.length-1].slice(-1);)r=e.pop().slice(0,-1)+"."+r;for(;e.length;)t=t[n=e.shift()];return delete t[r]}return!0}},3304:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var n="function"==typeof Float64Array?Float64Array:void 0;t.exports=n},57382:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r,i=e(35569),o=e(3304),s=e(28482);r=i()?o:s,t.exports=r},28482:function(t){"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function(){throw Error("not implemented")}},26322:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r,i=e(72508),o=e(85679),s=e(882);r=i()?o:s,t.exports=r},882:function(t){"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function(){throw Error("not implemented")}},85679:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var n="function"==typeof Uint16Array?Uint16Array:void 0;t.exports=n},4773:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r,i=e(99773),o=e(33004),s=e(23078);r=i()?o:s,t.exports=r},23078:function(t){"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function(){throw Error("not implemented")}},33004:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var n="function"==typeof Uint32Array?Uint32Array:void 0;t.exports=n},47980:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r,i=e(58114),o=e(56737),s=e(33357);r=i()?o:s,t.exports=r},33357:function(t){"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function(){throw Error("not implemented")}},56737:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var n="function"==typeof Uint8Array?Uint8Array:void 0;t.exports=n},12684:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var n="function"==typeof Float64Array?Float64Array:null;t.exports=n},35569:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(13876);t.exports=r},13876:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(21448),i=e(12684);t.exports=function(){var t,n;if("function"!=typeof i)return!1;try{n=new i([1,3.14,-3.14,NaN]),t=r(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(e){t=!1}return t}},9048:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(13763);t.exports=r},13763:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var n=Object.prototype.hasOwnProperty;t.exports=function(t,e){return null!=t&&n.call(t,e)}},57009:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(46784);t.exports=r},46784:function(t){"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}},53123:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(98481);t.exports=r},98481:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(57009)();t.exports=function(){return r&&"symbol"==typeof Symbol.toStringTag}},72508:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(43403);t.exports=r},43403:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(40768),i=e(49668),o=e(10187);t.exports=function(){var t,n;if("function"!=typeof o)return!1;try{n=[1,3.14,-3.14,i+1,i+2],n=new o(n),t=r(n)&&1===n[0]&&3===n[1]&&n[2]===i-2&&0===n[3]&&1===n[4]}catch(e){t=!1}return t}},10187:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var n="function"==typeof Uint16Array?Uint16Array:null;t.exports=n},99773:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(32822);t.exports=r},32822:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(72744),i=e(63899),o=e(40746);t.exports=function(){var t,n;if("function"!=typeof o)return!1;try{n=[1,3.14,-3.14,i+1,i+2],n=new o(n),t=r(n)&&1===n[0]&&3===n[1]&&n[2]===i-2&&0===n[3]&&1===n[4]}catch(e){t=!1}return t}},40746:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var n="function"==typeof Uint32Array?Uint32Array:null;t.exports=n},58114:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(58066);t.exports=r},58066:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(48279),i=e(63443),o=e(72731);t.exports=function(){var t,n;if("function"!=typeof o)return!1;try{n=[1,3.14,-3.14,i+1,i+2],n=new o(n),t=r(n)&&1===n[0]&&3===n[1]&&n[2]===i-2&&0===n[3]&&1===n[4]}catch(e){t=!1}return t}},72731:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var n="function"==typeof Uint8Array?Uint8Array:null;t.exports=n},21448:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(21453);t.exports=r},21453:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(36208),i="function"==typeof Float64Array;t.exports=function(t){return i&&t instanceof Float64Array||"[object Float64Array]"===r(t)}},69331:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(47980),i=e(26322);t.exports={uint16:i,uint8:r}},65902:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(24106);t.exports=r},24106:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r,i,o,s=e(69331);r=((i=new s.uint16(1))[0]=4660,52===new s.uint8(i.buffer)[0]),t.exports=r},40768:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(3823);t.exports=r},3823:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(36208),i="function"==typeof Uint16Array;t.exports=function(t){return i&&t instanceof Uint16Array||"[object Uint16Array]"===r(t)}},72744:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(72326);t.exports=r},72326:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(36208),i="function"==typeof Uint32Array;t.exports=function(t){return i&&t instanceof Uint32Array||"[object Uint32Array]"===r(t)}},48279:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(20208);t.exports=r},20208:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(36208),i="function"==typeof Uint8Array;t.exports=function(t){return i&&t instanceof Uint8Array||"[object Uint8Array]"===r(t)}},66315:function(t){"use strict";t.exports=1023},93105:function(t){"use strict";t.exports=2146435072},66988:function(t){"use strict";t.exports=-1023},89777:function(t){"use strict";t.exports=1023},53690:function(t){"use strict";t.exports=-1074},42918:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(44772).NEGATIVE_INFINITY;t.exports=r},24165:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var n=Number.POSITIVE_INFINITY;t.exports=n},96488:function(t){"use strict";t.exports=22250738585072014e-324},49668:function(t){"use strict";t.exports=65535},63899:function(t){"use strict";t.exports=4294967295},63443:function(t){"use strict";t.exports=255},57011:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(812);t.exports=r},812:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(24165),i=e(42918);t.exports=function(t){return t===r||t===i}},21883:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(61797);t.exports=r},61797:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function n(t){return t!=t}t.exports=n},513:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(35760);t.exports=r},35760:function(t){"use strict";t.exports=/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ function(t){return Math.abs(t)}},55848:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(10677);t.exports=r},10677:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(77838),i=e(41921),o=e(72490),s=[0,0];t.exports=function(t,n){var e,u;return r(s,t),e=s[0],e&=2147483647,u=i(n),u&=2147483648,o(e|=u,s[1])}},75500:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(8397);t.exports=r},8397:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(24165),i=e(42918),o=e(66315),s=e(89777),u=e(66988),a=e(53690),c=e(21883),f=e(57011),$=e(55848),l=e(4948),p=e(18478),v=e(77838),d=e(72490),_=[0,0],h=[0,0];t.exports=function(t,n){var e,g;return 0===t||c(t)||f(t)?t:(l(_,t),t=_[0],n+=_[1],(n+=p(t))<a)?$(0,t):n>s?t<0?i:r:(n<=u?(n+=52,g=2220446049250313e-31):g=1,v(h,t),e=h[0],e&=2148532223,g*d(e|=n+o<<20,h[1]))}},44772:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(7548);t.exports=r},7548:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ t.exports=Number},18478:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(44500);t.exports=r},44500:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(41921),i=e(93105),o=e(66315);t.exports=function(t){var n=r(t);return(n=(n&i)>>>20)-o|0}},72490:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(79639);t.exports=r},64445:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r,i,o;!0===e(65902)?(i=1,o=0):(i=0,o=1),r={HIGH:i,LOW:o},t.exports=r},79639:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(4773),i=e(57382),o=e(64445),s=new i(1),u=new r(s.buffer),a=o.HIGH,c=o.LOW;t.exports=function(t,n){return u[a]=t,u[c]=n,s[0]}},83348:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r;r=!0===e(65902)?1:0,t.exports=r},41921:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(96285);t.exports=r},96285:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(4773),i=e(57382),o=e(83348),s=new i(1),u=new r(s.buffer);t.exports=function(t){return s[0]=t,u[o]}},4948:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(59422);t.exports=r},59422:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(78857);t.exports=function(t,n){return 1===arguments.length?r([0,0],t):r(t,n)}},78857:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(96488),i=e(57011),o=e(21883),s=e(513);t.exports=function(t,n){return o(n)||i(n)?(t[0]=n,t[1]=0,t):0!==n&&s(n)<r?(t[0]=4503599627370496*n,t[1]=-52,t):(t[0]=n,t[1]=0,t)}},77838:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(74010);t.exports=r},5782:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r,i,o;!0===e(65902)?(i=1,o=0):(i=0,o=1),r={HIGH:i,LOW:o},t.exports=r},74010:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(54903);t.exports=function(t,n){return 1===arguments.length?r([0,0],t):r(t,n)}},54903:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(4773),i=e(57382),o=e(5782),s=new i(1),u=new r(s.buffer),a=o.HIGH,c=o.LOW;t.exports=function(t,n){return s[0]=n,t[0]=u[a],t[1]=u[c],t}},36208:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r,i=e(53123),o=e(7407),s=e(74210);r=i()?s:o,t.exports=r},7407:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(70173);t.exports=function(t){return r.call(t)}},74210:function(t,n,e){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var r=e(9048),i=e(1403),o=e(70173);t.exports=function(t){var n,e,s;if(null==t)return o.call(t);e=t[i],n=r(t,i);try{t[i]=void 0}catch(u){return o.call(t)}return s=o.call(t),n?t[i]=e:delete t[i],s}},70173:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var n=Object.prototype.toString;t.exports=n},1403:function(t){"use strict";/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/ var n="function"==typeof Symbol?Symbol.toStringTag:"";t.exports=n},27843:function(t){t.exports=function(t,n,e,r,i){for(n=n.split?n.split("."):n,r=0;r<n.length;r++)t=t?t[n[r]]:i;return t===i?e:t}},22341:function(t,n){n.dset=function(t,n,e){n.split&&(n=n.split("."));for(var r,i,o=0,s=n.length,u=t;o<s&&"__proto__"!==(i=n[o++])&&"constructor"!==i&&"prototype"!==i;)u=u[i]=o===s?e:typeof(r=u[i])==typeof n?r:0*n[o]!=0||~(""+n[o]).indexOf(".")?{}:[]}},80374:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return o}});for(var r=[],i=0;i<64;)r[i]=0|4294967296*Math.sin(++i%Math.PI);function o(t){var n,e,o,s=[n=1732584193,e=4023233417,~n,~e],u=[],a=unescape(encodeURI(t))+"\x80",c=a.length;for(t=--c/4+2|15,u[--t]=8*c;~c;)u[c>>2]|=a.charCodeAt(c)<<8*c--;for(i=a=0;i<t;i+=16){for(c=s;a<64;c=[o=c[3],n+((o=c[0]+[n&e|~n&o,o&n|~o&e,n^e^o,e^(n|~o)][c=a>>4]+r[a]+~~u[i|15&[a,5*a+1,3*a+5,7*a][c]])<<(c=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*c+a++%4])|o>>>-c),n,e])n=0|c[1],e=c[2];for(a=4;a;)s[--a]+=c[a]}for(t="";a<32;)t+=(s[a>>3]>>4*(1^a++)&15).toString(16);return t}}}]);