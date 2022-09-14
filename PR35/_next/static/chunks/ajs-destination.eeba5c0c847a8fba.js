(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9464,5826],{41323:function(a,b,c){"use strict";function d(a,b){var c,d;return"boolean"==typeof(null==b?void 0:b.enabled)?b.enabled:null===(d=null===(c=null==a?void 0:a.__default)|| void 0===c?void 0:c.enabled)|| void 0===d||d}c.d(b,{n:function(){return d}})},62795:function(a,b,c){"use strict";c.r(b),c.d(b,{LegacyDestination:function(){return v},ajsDestinations:function(){return w}});var d=c(5163),e=c(64122),f=c(91946),g=c(61668),h=c(79677),i=c(37759),j=c(37624),k=c(41323),l=c(53826),m=c(42578),n=c(98552),o=c(46804),p=c(18767),q=c(22870),r=c(91329),s=c(63822);function t(a){return a.toLowerCase().replace(".","").replace(/\s+/g,"-")}function u(a,b){return void 0===b&&(b=!1),b?btoa(a).replace(/=/g,""):void 0}var v=function(){function a(a,b,c,e){void 0===c&&(c={}),this.options={},this.type="destination",this.middleware=[],this._ready=!1,this._initialized=!1,this.flushing=!1,this.name=a,this.version=b,this.settings=(0,d.pi)({},c),this.settings.type&&"browser"===this.settings.type&&delete this.settings.type,this.options=e,this.buffer=e.disableClientPersistence?new n.Z(4,[]):new o.$(4,"dest-".concat(a)),this.scheduleFlush()}return a.prototype.isLoaded=function(){return this._ready},a.prototype.ready=function(){var a;return null!==(a=this.onReady)&& void 0!==a?a:Promise.resolve()},a.prototype.load=function(a,b){return(0,d.mG)(this,void 0,void 0,function(){var e,f=this;return(0,d.Jh)(this,function(g){switch(g.label){case 0:if(this._ready|| void 0!==this.onReady)return[2];return e=this,[4,function(a,b,e,f,g,h){return(0,d.mG)(this,void 0,void 0,function(){var i,j,k,l,m,n,o,p,q;return(0,d.Jh)(this,function(v){switch(v.label){case 0:j=u(i=t(e),h),k=(0,r.Kg)(),l="".concat(k,"/integrations/").concat(null!=j?j:i,"/").concat(f,"/").concat(null!=j?j:i,".dynamic.js.gz"),v.label=1;case 1:return v.trys.push([1,3,,4]),[4,(0,s.v)(l)];case 2:return v.sent(),function(a,b,e){var f,g,h;try{var i=(null!==(h=null===(g=null===(f=c.g.window)|| void 0===f?void 0:f.performance)|| void 0===g?void 0:g.getEntriesByName(a,"resource"))&& void 0!==h?h:[])[0];i&&b.stats.gauge("legacy_destination_time",Math.round(i.duration),(0,d.ev)([e],i.duration<100?["cached"]:[],!0))}catch(j){}}(l,a,e),[3,4];case 3:throw m=v.sent(),a.stats.gauge("legacy_destination_time",-1,["plugin:".concat(e),"failed"]),m;case 4:return[4,Promise.all((n=window["".concat(i,"Deps")]).map(function(a){return(0,s.v)(k+a+".gz")}))];case 5:return v.sent(),window["".concat(i,"Loader")](),(o=window["".concat(i,"Integration")]).Integration&&(o(p={user:function(){return b.user()},addIntegration:function(){}}),o=o.Integration),(q=new o(g)).analytics=b,[2,q]}})})}(a,b,this.name,this.version,this.settings,this.options.obfuscate)];case 1:e.integration=g.sent(),this.onReady=new Promise(function(a){var b=function(){f._ready=!0,a(!0)};f.integration.once("ready",b)}),this.onInitialize=new Promise(function(a){var b=function(){f._initialized=!0,a(!0)};f.integration.on("initialize",b)});try{a.stats.increment("analytics_js.integration.invoke",1,["method:initialize","integration_name:".concat(this.name),]),this.integration.initialize()}catch(h){throw a.stats.increment("analytics_js.integration.invoke.error",1,["method:initialize","integration_name:".concat(this.name),]),h}return[2]}})})},a.prototype.unload=function(a,b){return function(a,b,c){return(0,d.mG)(this,void 0,void 0,function(){var e,f,g,h;return(0,d.Jh)(this,function(d){return e=(0,r.Kg)(),f=t(a),g=u(a,c),h="".concat(e,"/integrations/").concat(null!=g?g:f,"/").concat(b,"/").concat(null!=g?g:f,".dynamic.js.gz"),[2,(0,s.t)(h)]})})}(this.name,this.version,this.options.obfuscate)},a.prototype.addMiddleware=function(){for(var a,b=[],c=0;c<arguments.length;c++)b[c]=arguments[c];this.middleware=(a=this.middleware).concat.apply(a,b)},a.prototype.shouldBuffer=function(a){return"page"!==a.event.type&&((0,f.s)()|| !1===this._ready|| !1===this._initialized)},a.prototype.send=function(a,b,c){var e,f;return(0,d.mG)(this,void 0,void 0,function(){var h,i,l,m,n,o;return(0,d.Jh)(this,function(q){switch(q.label){case 0:var r;if(this.shouldBuffer(a))return this.buffer.push(a),this.scheduleFlush(),[2,a];if(h=null===(f=null===(e=this.options)|| void 0===e?void 0:e.plan)|| void 0===f?void 0:f.track,i=a.event.event,h&&i&&"Segment.io"!==this.name){if(l=h[i],!(0,k.n)(h,l))return a.updateEvent("integrations",(0,d.pi)((0,d.pi)({},a.event.integrations),{All:!1,"Segment.io":!0})),a.cancel(new g.Y({retry:!1,reason:"Event ".concat(i," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,a];if(a.updateEvent("integrations",(0,d.pi)((0,d.pi)({},a.event.integrations),null==l?void 0:l.integrations)),(null==l?void 0:l.enabled)&&(null==l?void 0:l.integrations[this.name])=== !1)return a.cancel(new g.Y({retry:!1,reason:"Event ".concat(i," disabled for integration ").concat(this.name," in tracking plan"),type:"Dropped by plan"})),[2,a]}return[4,(0,p.applyDestinationMiddleware)(this.name,JSON.parse(JSON.stringify(r=a.event)),this.middleware)];case 1:if(null===(m=q.sent()))return[2,a];n=new b(m,{}),a.stats.increment("analytics_js.integration.invoke",1,["method:".concat(c),"integration_name:".concat(this.name),]),q.label=2;case 2:if(q.trys.push([2,5,,6]),!this.integration)return[3,4];return[4,(0,j.O)(this.integration.invoke.call(this.integration,c,n))];case 3:q.sent(),q.label=4;case 4:return[3,6];case 5:throw o=q.sent(),a.stats.increment("analytics_js.integration.invoke.error",1,["method:".concat(c),"integration_name:".concat(this.name),]),o;case 6:return[2,a]}})})},a.prototype.track=function(a){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(b){return[2,this.send(a,e.Track,"track")]})})},a.prototype.page=function(a){var b;return(0,d.mG)(this,void 0,void 0,function(){var c=this;return(0,d.Jh)(this,function(d){return(null===(b=this.integration)|| void 0===b?void 0:b._assumesPageview)&&!this._initialized&&this.integration.initialize(),[2,this.onInitialize.then(function(){return c.send(a,e.Page,"page")})]})})},a.prototype.identify=function(a){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(b){return[2,this.send(a,e.Identify,"identify")]})})},a.prototype.alias=function(a){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(b){return[2,this.send(a,e.Alias,"alias")]})})},a.prototype.group=function(a){return(0,d.mG)(this,void 0,void 0,function(){return(0,d.Jh)(this,function(b){return[2,this.send(a,e.Group,"group")]})})},a.prototype.scheduleFlush=function(){var a=this;!this.flushing&&setTimeout(function(){return(0,d.mG)(a,void 0,void 0,function(){var a;return(0,d.Jh)(this,function(b){switch(b.label){case 0:return this.flushing=!0,a=this,[4,function(a,b){return(0,d.mG)(this,void 0,void 0,function(){var c,e=this;return(0,d.Jh)(this,function(h){switch(h.label){case 0:if(c=[],(0,f.s)())return[2,b];return[4,(0,m.x)(function(){return b.length>0&&(0,f.G)()},function(){return(0,d.mG)(e,void 0,void 0,function(){var e,f,h;return(0,d.Jh)(this,function(d){switch(d.label){case 0:if(!(e=b.pop()))return[2];return[4,(0,i.a)(e,a)];case 1:return(h=(f=d.sent())instanceof g._)||c.push(e),[2]}})})})];case 1:return h.sent(),c.map(function(a){return b.pushWithBackoff(a)}),[2,b]}})})}(this,this.buffer)];case 1:return a.buffer=b.sent(),this.flushing=!1,this.buffer.todo>0&&this.scheduleFlush(),[2]}})})},5e3*Math.random())},a}();function w(a,b,c){if(void 0===b&&(b={}),void 0===c&&(c={}),(0,h.s)())return[];a.plan&&((c=null!=c?c:{}).plan=a.plan);var d,e,f,g=null!==(e=null===(d=a.middlewareSettings)|| void 0===d?void 0:d.routingRules)&& void 0!==e?e:[],i=(f=g,function(a){var b=a.payload,c=a.integration,d=a.next,e=new q.Store(f),g=e.getRulesByDestinationName(c);g.forEach(function(a){for(var c=a.matchers,e=a.transformers,f=0;f<c.length;f++)if(q.matches(b.obj,c[f])&&(b.obj=q.transform(b.obj,e[f]),null===b.obj))return d(null)}),d(b)}),j=(0,l.o)(a,null!=c?c:{});return Object.entries(a.integrations).map(function(a){var d,e=a[0],f=a[1];if(!e.startsWith("Segment")){var h=!1===b.All&& void 0===b[e];if(!1!==b[e]&&!h){var k=f.type,l=f.bundlingStatus,m=f.versionSettings,n="unbundled"!==l&&("browser"===k||(null===(d=null==m?void 0:m.componentTypes)|| void 0===d?void 0:d.includes("browser")));if((n||"Segment.io"===e)&&"Iterable"!==e){var o,p,q,r,s,t=null!==(s=null!==(q=null===(p=(o=f).versionSettings)|| void 0===p?void 0:p.override)&& void 0!==q?q:null===(r=o.versionSettings)|| void 0===r?void 0:r.version)&& void 0!==s?s:"latest",u=new v(e,t,j[e],c);return g.filter(function(a){return a.destinationName===e}).length>0&&u.addMiddleware(i),u}}}}).filter(function(a){return void 0!==a})}},18767:function(a,b,c){"use strict";c.r(b),c.d(b,{applyDestinationMiddleware:function(){return h},sourceMiddlewarePlugin:function(){return i}});var d=c(5163),e=c(61668),f=c(37624),g=c(25030);function h(a,b,c){return(0,d.mG)(this,void 0,void 0,function(){var e,h,i,j;return(0,d.Jh)(this,function(k){switch(k.label){case 0:e=0,h=c,k.label=1;case 1:if(!(e<h.length))return[3,4];return[4,function(b,c){return(0,d.mG)(this,void 0,void 0,function(){var e,h,i;return(0,d.Jh)(this,function(j){switch(j.label){case 0:return e=!1,h=null,[4,(0,f.O)(c({payload:(0,g.D)(b,{clone:!0,traverse:!1}),integration:a,next:function(a){e=!0,null===a&&(h=null),a&&(h=a.obj)}}))];case 1:return j.sent(),e||null===h||(h.integrations=(0,d.pi)((0,d.pi)({},b.integrations),((i={})[a]=!1,i))),[2,h]}})})}(b,i=h[e])];case 2:if(null===(j=k.sent()))return[2,null];b=j,k.label=3;case 3:return e++,[3,1];case 4:return[2,b]}})})}function i(a,b){function c(c){return(0,d.mG)(this,void 0,void 0,function(){var h;return(0,d.Jh)(this,function(d){switch(d.label){case 0:return h=!1,[4,(0,f.O)(a({payload:(0,g.D)(c.event,{clone:!0,traverse:!1}),integrations:null!=b?b:{},next:function(a){h=!0,a&&(c.event=a.obj)}}))];case 1:if(d.sent(),!h)throw new e.Y({retry:!1,type:"middleware_cancellation",reason:"Middleware `next` function skipped"});return[2,c]}})})}return{name:"Source Middleware ".concat(a.name),type:"before",version:"0.1.0",isLoaded:function(){return!0},load:function(a){return Promise.resolve(a)},track:c,page:c,identify:c,alias:c,group:c}}},22870:function(a,b,c){"use strict";var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0}),b.Store=b.matches=b.transform=void 0;var e=c(64303);Object.defineProperty(b,"transform",{enumerable:!0,get:function(){return d(e).default}});var f=c(2370);Object.defineProperty(b,"matches",{enumerable:!0,get:function(){return d(f).default}});var g=c(41444);Object.defineProperty(b,"Store",{enumerable:!0,get:function(){return d(g).default}})},2370:function(a,b,c){"use strict";var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var e=d(c(27843));function f(a,b){if(!Array.isArray(a))return!0===g(a,b);var c=a[0];switch(c){case"!":return!f(a[1],b);case"or":for(var d=1;d<a.length;d++)if(f(a[d],b))return!0;return!1;case"and":for(var d=1;d<a.length;d++)if(!f(a[d],b))return!1;return!0;case"=":case"!=":return i(g(a[1],b),g(a[2],b),c,b);case"<=":case"<":case">":case">=":return h(g(a[1],b),g(a[2],b),c,b);case"contains":return j(g(a[1],b),g(a[2],b));case"match":return k(g(a[1],b),g(a[2],b));case"lowercase":var e=g(a[1],b);if("string"!=typeof e)return null;return e.toLowerCase();case"typeof":return typeof g(a[1],b);case"length":return l(g(a[1],b));default:throw Error("FQL IR could not evaluate for token: ".concat(c))}}function g(a,b){return Array.isArray(a)?a:"object"==typeof a?a.value:(0,e.default)(b,a)}function h(a,b,c,d){if(m(a)&&(a=f(a,d)),m(b)&&(b=f(b,d)),"number"!=typeof a||"number"!=typeof b)return!1;switch(c){case"<=":return a<=b;case">=":return a>=b;case"<":return a<b;case">":return a>b;default:throw Error("Invalid operator in compareNumbers: ".concat(c))}}function i(a,b,c,d){switch(m(a)&&(a=f(a,d)),m(b)&&(b=f(b,d)),"object"==typeof a&&"object"==typeof b&&(a=JSON.stringify(a),b=JSON.stringify(b)),c){case"=":return a===b;case"!=":return a!==b;default:throw Error("Invalid operator in compareItems: ".concat(c))}}function j(a,b){return"string"==typeof a&&"string"==typeof b&& -1!==a.indexOf(b)}function k(a,b){return"string"==typeof a&&"string"==typeof b&&n(b,a)}function l(a){return null===a?0:Array.isArray(a)||"string"==typeof a?a.length:NaN}function m(a){return!!Array.isArray(a)&&(("lowercase"===a[0]||"length"===a[0]||"typeof"===a[0])&&2===a.length||("contains"===a[0]||"match"===a[0])&&3===a.length)}function n(a,b){var c,d;Pattern:for(;a.length>0;){var e=void 0,f=void 0;if(e=(c=o(a)).star,f=c.chunk,a=c.pattern,e&&""===f)return!0;var g=p(f,b),h=g.t,i=g.ok,j=g.err;if(j)return!1;if(i&&(0===h.length||a.length>0)){b=h;continue}if(e)for(var k=0;k<b.length;k++){if(h=(d=p(f,b.slice(k+1))).t,i=d.ok,j=d.err,i){if(0===a.length&&h.length>0)continue;b=h;continue Pattern}if(j)break}return!1}return 0===b.length}function o(a){for(var b,c={star:!1,chunk:"",pattern:""};a.length>0&&"*"===a[0];)a=a.slice(1),c.star=!0;var d=!1;Scan:for(b=0;b<a.length;b++)switch(a[b]){case"\\":b+1<a.length&&b++;break;case"[":d=!0;break;case"]":d=!1;break;case"*":if(!d)break Scan}return c.chunk=a.slice(0,b),c.pattern=a.slice(b),c}function p(a,b){for(var c,d,e={t:"",ok:!1,err:!1};a.length>0;){if(0===b.length)return e;switch(a[0]){case"[":var f=b[0];b=b.slice(1);var g=!0;(a=a.slice(1)).length>0&&"^"===a[0]&&(g=!1,a=a.slice(1));for(var h=!1,i=0;;){if(a.length>0&&"]"===a[0]&&i>0){a=a.slice(1);break}var j="",k="",l=void 0;if(j=(c=q(a)).char,a=c.newChunk,c.err||(k=j,"-"===a[0]&&(k=(d=q(a.slice(1))).char,a=d.newChunk,d.err)))return e;j<=f&&f<=k&&(h=!0),i++}if(h!==g)return e;break;case"?":b=b.slice(1),a=a.slice(1);break;case"\\":if(0===(a=a.slice(1)).length)return e.err=!0,e;default:if(a[0]!==b[0])return e;b=b.slice(1),a=a.slice(1)}}return e.t=b,e.ok=!0,e.err=!1,e}function q(a){var b={char:"",newChunk:"",err:!1};return 0===a.length||"-"===a[0]||"]"===a[0]||"\\"===a[0]&&0===(a=a.slice(1)).length?(b.err=!0,b):(b.char=a[0],b.newChunk=a.slice(1),0===b.newChunk.length&&(b.err=!0),b)}b.default=function(a,b){if(!b)throw Error("No matcher supplied!");switch(b.type){case"all":return!0;case"fql":return function a(b,c){if(!b)return!1;try{b=JSON.parse(b)}catch(d){throw Error('Failed to JSON.parse FQL intermediate representation "'.concat(b,'": ').concat(d))}var e=f(b,c);return"boolean"==typeof e&&e}(b.ir,a);default:throw Error("Matcher of type ".concat(b.type," unsupported."))}}},41444:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var c=function(){function a(a){this.rules=[],this.rules=a||[]}return a.prototype.getRulesByDestinationName=function(a){for(var b=[],c=0,d=this.rules;c<d.length;c++){var e=d[c];(e.destinationName===a|| void 0===e.destinationName)&&b.push(e)}return b},a}();b.default=c},64303:function(a,b,c){"use strict";var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0});var e=d(c(80374)),f=d(c(27843)),g=d(c(75500)),h=c(22341),i=c(94966);function j(a,b){for(var c in b.drop){if(b.drop.hasOwnProperty(c)){var d=""===c?a:(0,f.default)(a,c);if("object"==typeof d&&null!==d)for(var e=0,g=b.drop[c];e<g.length;e++)delete d[g[e]]}}}function k(a,b){for(var c in b.allow){if(b.allow.hasOwnProperty(c)){var d=""===c?a:(0,f.default)(a,c);if("object"==typeof d&&null!==d)for(var e in d)d.hasOwnProperty(e)&& -1===b.allow[c].indexOf(e)&&delete d[e]}}}function l(a,b){var c=JSON.parse(JSON.stringify(a));for(var d in b.map){if(b.map.hasOwnProperty(d)){var e=b.map[d],g=d.split("."),j=void 0;if(g.length>1?(g.pop(),j=(0,f.default)(c,g.join("."))):j=a,"object"==typeof j){if(e.copy){var k=(0,f.default)(c,e.copy);void 0!==k&&(0,h.dset)(a,d,k)}else if(e.move){var l=(0,f.default)(c,e.move);void 0!==l&&(0,h.dset)(a,d,l),(0,i.unset)(a,e.move)}else e.hasOwnProperty("set")&&(0,h.dset)(a,d,e.set);if(e.to_string){var m=(0,f.default)(a,d);if("string"==typeof m||"object"==typeof m&&null!==m)continue;void 0!==m?(0,h.dset)(a,d,JSON.stringify(m)):(0,h.dset)(a,d,"undefined")}}}}}function m(a,b){return!(b.sample.percent<=0)&&(b.sample.percent>=1||(b.sample.path?o(a,b):n(b.sample.percent)))}function n(a){return Math.random()<=a}function o(a,b){var c=(0,f.default)(a,b.sample.path),d=(0,e.default)(JSON.stringify(c)),h=-64,i=[];p(d.slice(0,8),i);for(var j=0,k=0;k<64&&1!==i[k];k++)j++;if(0!==j){var l=[];p(d.slice(9,16),l),h-=j,i.splice(0,j),l.splice(64-j),i=i.concat(l)}return i[63]=0===i[63]?1:0,(0,g.default)(parseInt(i.join(""),2),h)<b.sample.percent}function p(a,b){for(var c=0;c<8;c++)for(var d=a[c],e=128;e>=1;e/=2)d-e>=0?(d-=e,b.push(1)):b.push(0)}b.default=function(a,b){for(var c=a,d=0,e=b;d<e.length;d++){var f=e[d];switch(f.type){case"drop":return null;case"drop_properties":j(c,f.config);break;case"allow_properties":k(c,f.config);break;case"sample_event":if(m(c,f.config))break;return null;case"map_properties":l(c,f.config);break;case"hash_properties":break;default:throw Error('Transformer of type "'.concat(f.type,'" is unsupported.'))}}return c}},94966:function(a,b,c){"use strict";var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,"__esModule",{value:!0}),b.unset=void 0;var e=d(c(27843));b.unset=function(a,b){if((0,e.default)(a,b)){for(var c=b.split("."),d=c.pop();c.length&&"\\"===c[c.length-1].slice(-1);)d=c.pop().slice(0,-1)+"."+d;for(;c.length;)a=a[b=c.shift()];return delete a[d]}return!0}},3304:function(a){"use strict";/**
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
*/ // MAIN //
var b="function"==typeof Float64Array?Float64Array:void 0;a.exports=b},57382:function(a,b,c){"use strict";/**
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
*/ /**
* Typed array constructor which returns a typed array representing an array of double-precision floating-point numbers in the platform byte order.
*
* @module @stdlib/array-float64
*
* @example
* var ctor = require( '@stdlib/array-float64' );
*
* var arr = new ctor( 10 );
* // returns <Float64Array>
*/ // MODULES //
var d,e=c(35569),f=c(3304),g=c(28482);d=e()?f:g,a.exports=d},28482:function(a){"use strict";a.exports=/**
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
*/ // TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of double-precision floating-point numbers in the platform byte order.
*
* @throws {Error} not implemented
*/ function(){throw Error("not implemented")}},26322:function(a,b,c){"use strict";/**
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
*/ /**
* Typed array constructor which returns a typed array representing an array of 16-bit unsigned integers in the platform byte order.
*
* @module @stdlib/array-uint16
*
* @example
* var ctor = require( '@stdlib/array-uint16' );
*
* var arr = new ctor( 10 );
* // returns <Uint16Array>
*/ // MODULES //
var d,e=c(72508),f=c(85679),g=c(882);d=e()?f:g,a.exports=d},882:function(a){"use strict";a.exports=/**
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
*/ // TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 16-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/ function(){throw Error("not implemented")}},85679:function(a){"use strict";/**
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
*/ // MAIN //
var b="function"==typeof Uint16Array?Uint16Array:void 0;a.exports=b},4773:function(a,b,c){"use strict";/**
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
*/ /**
* Typed array constructor which returns a typed array representing an array of 32-bit unsigned integers in the platform byte order.
*
* @module @stdlib/array-uint32
*
* @example
* var ctor = require( '@stdlib/array-uint32' );
*
* var arr = new ctor( 10 );
* // returns <Uint32Array>
*/ // MODULES //
var d,e=c(99773),f=c(33004),g=c(23078);d=e()?f:g,a.exports=d},23078:function(a){"use strict";a.exports=/**
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
*/ // TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 32-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/ function(){throw Error("not implemented")}},33004:function(a){"use strict";/**
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
*/ // MAIN //
var b="function"==typeof Uint32Array?Uint32Array:void 0;a.exports=b},1705:function(a,b,c){"use strict";/**
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
*/ /**
* Typed array constructor which returns a typed array representing an array of 8-bit unsigned integers in the platform byte order.
*
* @module @stdlib/array-uint8
*
* @example
* var ctor = require( '@stdlib/array-uint8' );
*
* var arr = new ctor( 10 );
* // returns <Uint8Array>
*/ // MODULES //
var d,e=c(58114),f=c(56737),g=c(33357);d=e()?f:g,a.exports=d},33357:function(a){"use strict";a.exports=/**
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
*/ // TODO: write polyfill
// MAIN //
/**
* Typed array which represents an array of 8-bit unsigned integers in the platform byte order.
*
* @throws {Error} not implemented
*/ function(){throw Error("not implemented")}},56737:function(a){"use strict";/**
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
*/ // MAIN //
var b="function"==typeof Uint8Array?Uint8Array:void 0;a.exports=b},12684:function(a){"use strict";/**
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
*/ // MAIN //
var b="function"==typeof Float64Array?Float64Array:null;a.exports=b},35569:function(a,b,c){"use strict";/**
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
*/ /**
* Test for native `Float64Array` support.
*
* @module @stdlib/assert-has-float64array-support
*
* @example
* var hasFloat64ArraySupport = require( '@stdlib/assert-has-float64array-support' );
*
* var bool = hasFloat64ArraySupport();
* // returns <boolean>
*/ // MODULES //
var d=c(13876);a.exports=d},13876:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(21448),e=c(12684);a.exports=function(){var a,b;if("function"!=typeof e)return!1;try{b=new e([1,3.14,-3.14,NaN]),a=d(b)&&1===b[0]&&3.14===b[1]&& -3.14===b[2]&&b[3]!=b[3]}catch(c){a=!1}return a}},9048:function(a,b,c){"use strict";/**
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
*/ /**
* Test whether an object has a specified property.
*
* @module @stdlib/assert-has-own-property
*
* @example
* var hasOwnProp = require( '@stdlib/assert-has-own-property' );
*
* var beep = {
*     'boop': true
* };
*
* var bool = hasOwnProp( beep, 'boop' );
* // returns true
*
* bool = hasOwnProp( beep, 'bop' );
* // returns false
*/ // MODULES //
var d=c(13763);a.exports=d},13763:function(a){"use strict";/**
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
*/ // FUNCTIONS //
var b=Object.prototype.hasOwnProperty;a.exports=function(a,c){return null!=a&&b.call(a,c)}},57009:function(a,b,c){"use strict";/**
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
*/ /**
* Test for native `Symbol` support.
*
* @module @stdlib/assert-has-symbol-support
*
* @example
* var hasSymbolSupport = require( '@stdlib/assert-has-symbol-support' );
*
* var bool = hasSymbolSupport();
* // returns <boolean>
*/ // MODULES //
var d=c(46784);a.exports=d},46784:function(a){"use strict";a.exports=/**
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
*/ // MAIN //
/**
* Tests for native `Symbol` support.
*
* @returns {boolean} boolean indicating if an environment has `Symbol` support
*
* @example
* var bool = hasSymbolSupport();
* // returns <boolean>
*/ function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}},53123:function(a,b,c){"use strict";/**
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
*/ /**
* Test for native `toStringTag` support.
*
* @module @stdlib/assert-has-tostringtag-support
*
* @example
* var hasToStringTagSupport = require( '@stdlib/assert-has-tostringtag-support' );
*
* var bool = hasToStringTagSupport();
* // returns <boolean>
*/ // MODULES //
var d=c(98481);a.exports=d},98481:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(57009)();a.exports=function(){return d&&"symbol"==typeof Symbol.toStringTag}},72508:function(a,b,c){"use strict";/**
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
*/ /**
* Test for native `Uint16Array` support.
*
* @module @stdlib/assert-has-uint16array-support
*
* @example
* var hasUint16ArraySupport = require( '@stdlib/assert-has-uint16array-support' );
*
* var bool = hasUint16ArraySupport();
* // returns <boolean>
*/ // MODULES //
var d=c(43403);a.exports=d},43403:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(40768),e=c(49668),f=c(10187);a.exports=function(){var a,b;if("function"!=typeof f)return!1;try{b=[1,3.14,-3.14,e+1,e+2],b=new f(b),a=d(b)&&1===b[0]&&3===b[1]&&b[2]===e-2&&0===b[3]&&1===b[4]}catch(c){a=!1}return a}},10187:function(a){"use strict";/**
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
*/ // MAIN //
var b="function"==typeof Uint16Array?Uint16Array:null;a.exports=b},99773:function(a,b,c){"use strict";/**
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
*/ /**
* Test for native `Uint32Array` support.
*
* @module @stdlib/assert-has-uint32array-support
*
* @example
* var hasUint32ArraySupport = require( '@stdlib/assert-has-uint32array-support' );
*
* var bool = hasUint32ArraySupport();
* // returns <boolean>
*/ // MODULES //
var d=c(32822);a.exports=d},32822:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(72744),e=c(63899),f=c(40746);a.exports=function(){var a,b;if("function"!=typeof f)return!1;try{b=[1,3.14,-3.14,e+1,e+2],b=new f(b),a=d(b)&&1===b[0]&&3===b[1]&&b[2]===e-2&&0===b[3]&&1===b[4]}catch(c){a=!1}return a}},40746:function(a){"use strict";/**
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
*/ // MAIN //
var b="function"==typeof Uint32Array?Uint32Array:null;a.exports=b},58114:function(a,b,c){"use strict";/**
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
*/ /**
* Test for native `Uint8Array` support.
*
* @module @stdlib/assert-has-uint8array-support
*
* @example
* var hasUint8ArraySupport = require( '@stdlib/assert-has-uint8array-support' );
*
* var bool = hasUint8ArraySupport();
* // returns <boolean>
*/ // MODULES //
var d=c(58066);a.exports=d},58066:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(48279),e=c(63443),f=c(72731);a.exports=function(){var a,b;if("function"!=typeof f)return!1;try{b=[1,3.14,-3.14,e+1,e+2],b=new f(b),a=d(b)&&1===b[0]&&3===b[1]&&b[2]===e-2&&0===b[3]&&1===b[4]}catch(c){a=!1}return a}},72731:function(a){"use strict";/**
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
*/ // MAIN //
var b="function"==typeof Uint8Array?Uint8Array:null;a.exports=b},21448:function(a,b,c){"use strict";/**
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
*/ /**
* Test if a value is a Float64Array.
*
* @module @stdlib/assert-is-float64array
*
* @example
* var isFloat64Array = require( '@stdlib/assert-is-float64array' );
*
* var bool = isFloat64Array( new Float64Array( 10 ) );
* // returns true
*
* bool = isFloat64Array( [] );
* // returns false
*/ // MODULES //
var d=c(21453);a.exports=d},21453:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(36208),e="function"==typeof Float64Array;a.exports=function(a){return e&&a instanceof Float64Array||"[object Float64Array]"===d(a)}},69331:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(1705),e=c(26322);a.exports={uint16:e,uint8:d}},65902:function(a,b,c){"use strict";/**
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
*/ /**
* Return a boolean indicating if an environment is little endian.
*
* @module @stdlib/assert-is-little-endian
*
* @example
* var IS_LITTLE_ENDIAN = require( '@stdlib/assert-is-little-endian' );
*
* var bool = IS_LITTLE_ENDIAN;
* // returns <boolean>
*/ // MODULES //
var d=c(24106);a.exports=d},24106:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d,e,f,g=c(69331);d=((e=new g.uint16(1))[0]=4660,52===new g.uint8(e.buffer)[0]),a.exports=d},40768:function(a,b,c){"use strict";/**
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
*/ /**
* Test if a value is a Uint16Array.
*
* @module @stdlib/assert-is-uint16array
*
* @example
* var isUint16Array = require( '@stdlib/assert-is-uint16array' );
*
* var bool = isUint16Array( new Uint16Array( 10 ) );
* // returns true
*
* bool = isUint16Array( [] );
* // returns false
*/ // MODULES //
var d=c(3823);a.exports=d},3823:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(36208),e="function"==typeof Uint16Array;a.exports=function(a){return e&&a instanceof Uint16Array||"[object Uint16Array]"===d(a)}},72744:function(a,b,c){"use strict";/**
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
*/ /**
* Test if a value is a Uint32Array.
*
* @module @stdlib/assert-is-uint32array
*
* @example
* var isUint32Array = require( '@stdlib/assert-is-uint32array' );
*
* var bool = isUint32Array( new Uint32Array( 10 ) );
* // returns true
*
* bool = isUint32Array( [] );
* // returns false
*/ // MODULES //
var d=c(72326);a.exports=d},72326:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(36208),e="function"==typeof Uint32Array;a.exports=function(a){return e&&a instanceof Uint32Array||"[object Uint32Array]"===d(a)}},48279:function(a,b,c){"use strict";/**
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
*/ /**
* Test if a value is a Uint8Array.
*
* @module @stdlib/assert-is-uint8array
*
* @example
* var isUint8Array = require( '@stdlib/assert-is-uint8array' );
*
* var bool = isUint8Array( new Uint8Array( 10 ) );
* // returns true
*
* bool = isUint8Array( [] );
* // returns false
*/ // MODULES //
var d=c(20208);a.exports=d},20208:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(36208),e="function"==typeof Uint8Array;a.exports=function(a){return e&&a instanceof Uint8Array||"[object Uint8Array]"===d(a)}},66315:function(a){"use strict";a.exports=1023},93105:function(a){"use strict";a.exports=2146435072},66988:function(a){"use strict";a.exports=-1023},89777:function(a){"use strict";a.exports=1023},53690:function(a){"use strict";a.exports=-1074},42918:function(a,b,c){"use strict";/**
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
*/ /**
* Double-precision floating-point negative infinity.
*
* @module @stdlib/constants-float64-ninf
* @type {number}
*
* @example
* var FLOAT64_NINF = require( '@stdlib/constants-float64-ninf' );
* // returns -Infinity
*/ // MODULES //
var d=c(44772).NEGATIVE_INFINITY;a.exports=d},24165:function(a){"use strict";/**
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
*/ /**
* Double-precision floating-point positive infinity.
*
* @module @stdlib/constants-float64-pinf
* @type {number}
*
* @example
* var FLOAT64_PINF = require( '@stdlib/constants-float64-pinf' );
* // returns Infinity
*/ // MAIN //
/**
* Double-precision floating-point positive infinity.
*
* ## Notes
*
* Double-precision floating-point positive infinity has the bit sequence
*
* ```binarystring
* 0 11111111111 00000000000000000000 00000000000000000000000000000000
* ```
*
* @constant
* @type {number}
* @default Number.POSITIVE_INFINITY
* @see [IEEE 754]{@link https://en.wikipedia.org/wiki/IEEE_754-1985}
*/ var b=Number.POSITIVE_INFINITY;a.exports=b},96488:function(a){"use strict";a.exports=22250738585072014e-324},49668:function(a){"use strict";a.exports=65535},63899:function(a){"use strict";a.exports=4294967295},63443:function(a){"use strict";a.exports=255},57011:function(a,b,c){"use strict";/**
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
*/ /**
* Test if a double-precision floating-point numeric value is infinite.
*
* @module @stdlib/math-base-assert-is-infinite
*
* @example
* var isInfinite = require( '@stdlib/math-base-assert-is-infinite' );
*
* var bool = isInfinite( Infinity );
* // returns true
*
* bool = isInfinite( -Infinity );
* // returns true
*
* bool = isInfinite( 5.0 );
* // returns false
*
* bool = isInfinite( NaN );
* // returns false
*/ // MODULES //
var d=c(812);a.exports=d},812:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(24165),e=c(42918);a.exports=function(a){return a===d||a===e}},21883:function(a,b,c){"use strict";/**
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
*/ /**
* Test if a double-precision floating-point numeric value is `NaN`.
*
* @module @stdlib/math-base-assert-is-nan
*
* @example
* var isnan = require( '@stdlib/math-base-assert-is-nan' );
*
* var bool = isnan( NaN );
* // returns true
*
* bool = isnan( 7.0 );
* // returns false
*/ // MODULES //
var d=c(61797);a.exports=d},61797:function(a){"use strict";/**
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
*/ // MAIN //
/**
* Tests if a double-precision floating-point numeric value is `NaN`.
*
* @param {number} x - value to test
* @returns {boolean} boolean indicating whether the value is `NaN`
*
* @example
* var bool = isnan( NaN );
* // returns true
*
* @example
* var bool = isnan( 7.0 );
* // returns false
*/ function b(a){return a!=a}a.exports=b},513:function(a,b,c){"use strict";/**
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
*/ /**
* Compute an absolute value of a double-precision floating-point number.
*
* @module @stdlib/math-base-special-abs
*
* @example
* var abs = require( '@stdlib/math-base-special-abs' );
*
* var v = abs( -1.0 );
* // returns 1.0
*
* v = abs( 2.0 );
* // returns 2.0
*
* v = abs( 0.0 );
* // returns 0.0
*
* v = abs( -0.0 );
* // returns 0.0
*
* v = abs( NaN );
* // returns NaN
*/ // MODULES //
var d=c(35760);a.exports=d},35760:function(a){"use strict";a.exports=/**
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
*/ // MAIN //
/**
* Computes the absolute value of a double-precision floating-point number `x`.
*
* @param {number} x - input value
* @returns {number} absolute value
*
* @example
* var v = abs( -1.0 );
* // returns 1.0
*
* @example
* var v = abs( 2.0 );
* // returns 2.0
*
* @example
* var v = abs( 0.0 );
* // returns 0.0
*
* @example
* var v = abs( -0.0 );
* // returns 0.0
*
* @example
* var v = abs( NaN );
* // returns NaN
*/ function(a){return Math.abs(a)}},55848:function(a,b,c){"use strict";/**
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
*/ /**
* Return a double-precision floating-point number with the magnitude of `x` and the sign of `y`.
*
* @module @stdlib/math-base-special-copysign
*
* @example
* var copysign = require( '@stdlib/math-base-special-copysign' );
*
* var z = copysign( -3.14, 10.0 );
* // returns 3.14
*
* z = copysign( 3.14, -1.0 );
* // returns -3.14
*
* z = copysign( 1.0, -0.0 );
* // returns -1.0
*
* z = copysign( -3.14, -0.0 );
* // returns -3.14
*
* z = copysign( -0.0, 1.0 );
* // returns 0.0
*/ // MODULES //
var d=c(10677);a.exports=d},10677:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(77838),e=c(41921),f=c(72490),g=[0,0];a.exports=function(a,b){var c,h;return d(g,a),c=g[0],c&=2147483647,h=e(b),h&=2147483648,f(c|=h,g[1])}},75500:function(a,b,c){"use strict";/**
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
*/ /**
* Multiply a double-precision floating-point number by an integer power of two.
*
* @module @stdlib/math-base-special-ldexp
*
* @example
* var ldexp = require( '@stdlib/math-base-special-ldexp' );
*
* var x = ldexp( 0.5, 3 ); // => 0.5 * 2^3 = 0.5 * 8
* // returns 4.0
*
* x = ldexp( 4.0, -2 ); // => 4 * 2^(-2) = 4 * (1/4)
* // returns 1.0
*
* x = ldexp( 0.0, 20 );
* // returns 0.0
*
* x = ldexp( -0.0, 39 );
* // returns -0.0
*
* x = ldexp( NaN, -101 );
* // returns NaN
*
* x = ldexp( Infinity, 11 );
* // returns Infinity
*
* x = ldexp( -Infinity, -118 );
* // returns -Infinity
*/ // MODULES //
var d=c(8397);a.exports=d},8397:function(a,b,c){"use strict";/**
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
*/ // NOTES //
/*
* => ldexp: load exponent (see [The Open Group]{@link http://pubs.opengroup.org/onlinepubs/9699919799/functions/ldexp.html} and [cppreference]{@link http://en.cppreference.com/w/c/numeric/math/ldexp}).
*/ // MODULES //
var d=c(24165),e=c(42918),f=c(66315),g=c(89777),h=c(66988),i=c(53690),j=c(21883),k=c(57011),l=c(55848),m=c(4948),n=c(18478),o=c(77838),p=c(72490),q=[0,0],r=[0,0];a.exports=function(a,b){var c,s;return 0===a||j(a)||k(a)?a:(m(q,a),a=q[0],b+=q[1],b+=n(a),b<i)?l(0,a):b>g?a<0?e:d:(b<=h?(b+=52,s=2220446049250313e-31):s=1,o(r,a),c=r[0],c&=2148532223,s*p(c|=b+f<<20,r[1]))}},44772:function(a,b,c){"use strict";/**
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
*/ /**
* Constructor which returns a `Number` object.
*
* @module @stdlib/number-ctor
*
* @example
* var Number = require( '@stdlib/number-ctor' );
*
* var v = new Number( 10.0 );
* // returns <Number>
*/ // MODULES //
var d=c(7548);a.exports=d},7548:function(a){"use strict";/**
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
*/ // EXPORTS //
a.exports=Number},18478:function(a,b,c){"use strict";/**
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
*/ /**
* Return an integer corresponding to the unbiased exponent of a double-precision floating-point number.
*
* @module @stdlib/number-float64-base-exponent
*
* @example
* var exponent = require( '@stdlib/number-float64-base-exponent' );
*
* var exp = exponent( 3.14e-307 ); // => 2**-1019 ~ 1e-307
* // returns -1019
*
* exp = exponent( -3.14 );
* // returns 1
*
* exp = exponent( 0.0 );
* // returns -1023
*
* exp = exponent( NaN );
* // returns 1024
*/ // MODULES //
var d=c(44500);a.exports=d},44500:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(41921),e=c(93105),f=c(66315);a.exports=function(a){var b=d(a);return(b=(b&e)>>>20)-f|0}},72490:function(a,b,c){"use strict";/**
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
*/ /**
* Create a double-precision floating-point number from a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
*
* @module @stdlib/number-float64-base-from-words
*
* @example
* var fromWords = require( '@stdlib/number-float64-base-from-words' );
*
* var v = fromWords( 1774486211, 2479577218 );
* // returns 3.14e201
*
* v = fromWords( 3221823995, 1413754136 );
* // returns -3.141592653589793
*
* v = fromWords( 0, 0 );
* // returns 0.0
*
* v = fromWords( 2147483648, 0 );
* // returns -0.0
*
* v = fromWords( 2146959360, 0 );
* // returns NaN
*
* v = fromWords( 2146435072, 0 );
* // returns Infinity
*
* v = fromWords( 4293918720, 0 );
* // returns -Infinity
*/ // MODULES //
var d=c(79639);a.exports=d},64445:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d,e,f;!0===c(65902)?(e=1,f=0):(e=0,f=1),d={HIGH:e,LOW:f},a.exports=d},79639:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(4773),e=c(57382),f=c(64445),g=new e(1),h=new d(g.buffer),i=f.HIGH,j=f.LOW;a.exports=function(a,b){return h[i]=a,h[j]=b,g[0]}},83348:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d;d=!0===c(65902)?1:0,a.exports=d},41921:function(a,b,c){"use strict";/**
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
*/ /**
* Return an unsigned 32-bit integer corresponding to the more significant 32 bits of a double-precision floating-point number.
*
* @module @stdlib/number-float64-base-get-high-word
*
* @example
* var getHighWord = require( '@stdlib/number-float64-base-get-high-word' );
*
* var w = getHighWord( 3.14e201 ); // => 01101001110001001000001011000011
* // returns 1774486211
*/ // MODULES //
var d=c(96285);a.exports=d},96285:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(4773),e=c(57382),f=c(83348),g=new e(1),h=new d(g.buffer);a.exports=function(a){return g[0]=a,h[f]}},4948:function(a,b,c){"use strict";/**
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
*/ /**
* Return a normal number `y` and exponent `exp` satisfying \\(x = y \cdot 2^\mathrm{exp}\\).
*
* @module @stdlib/number-float64-base-normalize
*
* @example
* var normalize = require( '@stdlib/number-float64-base-normalize' );
* var pow = require( '@stdlib/math-base-special-pow' );
*
* var out = normalize( 3.14e-319 );
* // returns [ 1.4141234400356668e-303, -52 ]
*
* var y = out[ 0 ];
* var exp = out[ 1 ];
*
* var bool = ( y*pow(2.0,exp) === 3.14e-319 );
* // returns true
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var normalize = require( '@stdlib/number-float64-base-normalize' );
*
* var out = new Float64Array( 2 );
*
* var v = normalize( out, 3.14e-319 );
* // returns <Float64Array>[ 1.4141234400356668e-303, -52 ]
*
* var bool = ( v === out );
* // returns true
*/ // MODULES //
var d=c(59422);a.exports=d},59422:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(78857);a.exports=function(a,b){return 1===arguments.length?d([0,0],a):d(a,b)}},78857:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(96488),e=c(57011),f=c(21883),g=c(513);a.exports=function(a,b){return f(b)||e(b)?(a[0]=b,a[1]=0,a):0!==b&&g(b)<d?(a[0]=4503599627370496*b,a[1]=-52,a):(a[0]=b,a[1]=0,a)}},77838:function(a,b,c){"use strict";/**
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
*/ /**
* Split a double-precision floating-point number into a higher order word (unsigned 32-bit integer) and a lower order word (unsigned 32-bit integer).
*
* @module @stdlib/number-float64-base-to-words
*
* @example
* var toWords = require( '@stdlib/number-float64-base-to-words' );
*
* var w = toWords( 3.14e201 );
* // returns [ 1774486211, 2479577218 ]
*
* @example
* var Uint32Array = require( '@stdlib/array-uint32' );
* var toWords = require( '@stdlib/number-float64-base-to-words' );
*
* var out = new Uint32Array( 2 );
*
* var w = toWords( out, 3.14e201 );
* // returns <Uint32Array>[ 1774486211, 2479577218 ]
*
* var bool = ( w === out );
* // returns true
*/ // MODULES //
var d=c(74010);a.exports=d},5782:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d,e,f;!0===c(65902)?(e=1,f=0):(e=0,f=1),d={HIGH:e,LOW:f},a.exports=d},74010:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(54903);a.exports=function(a,b){return 1===arguments.length?d([0,0],a):d(a,b)}},54903:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(4773),e=c(57382),f=c(5782),g=new e(1),h=new d(g.buffer),i=f.HIGH,j=f.LOW;a.exports=function(a,b){return g[0]=b,a[0]=h[i],a[1]=h[j],a}},36208:function(a,b,c){"use strict";/**
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
*/ /**
* Return a string value indicating a specification defined classification of an object.
*
* @module @stdlib/utils-native-class
*
* @example
* var nativeClass = require( '@stdlib/utils-native-class' );
*
* var str = nativeClass( 'a' );
* // returns '[object String]'
*
* str = nativeClass( 5 );
* // returns '[object Number]'
*
* function Beep() {
*     return this;
* }
* str = nativeClass( new Beep() );
* // returns '[object Object]'
*/ // MODULES //
var d,e=c(53123),f=c(7407),g=c(74210);d=e()?g:f,a.exports=d},7407:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(70173);a.exports=function(a){return d.call(a)}},74210:function(a,b,c){"use strict";/**
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
*/ // MODULES //
var d=c(9048),e=c(1403),f=c(70173);a.exports=function(a){var b,c,g;if(null==a)return f.call(a);c=a[e],b=d(a,e);try{a[e]=void 0}catch(h){return f.call(a)}return g=f.call(a),b?a[e]=c:delete a[e],g}},70173:function(a){"use strict";/**
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
*/ // MAIN //
var b=Object.prototype.toString;a.exports=b},1403:function(a){"use strict";/**
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
*/ // MAIN //
var b="function"==typeof Symbol?Symbol.toStringTag:"";a.exports=b},27843:function(a){var b;a.exports=function(a,b,c,d,e){for(b=b.split?b.split("."):b,d=0;d<b.length;d++)a=a?a[b[d]]:e;return a===e?c:a}},22341:function(a,b){b.dset=function(a,b,c){b.split&&(b=b.split("."));for(var d,e,f=0,g=b.length,h=a;f<g&&"__proto__"!==(e=b[f++])&&"constructor"!==e&&"prototype"!==e;)h=h[e]=f===g?c:typeof(d=h[e])==typeof b?d:0*b[f]!=0|| ~(""+b[f]).indexOf(".")?{}:[]}},80374:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return f}});for(var d=[],e=0;e<64;)d[e]=0|4294967296*Math.sin(++e%Math.PI);function f(a){var b,c,f,g=[b=1732584193,c=4023233417,~b,~c],h=[],i=unescape(encodeURI(a))+"\x80",j=i.length;for(a=--j/4+2|15,h[--a]=8*j;~j;)h[j>>2]|=i.charCodeAt(j)<<8*j--;for(e=i=0;e<a;e+=16){for(j=g;i<64;j=[f=j[3],b+((f=j[0]+[b&c| ~b&f,f&b| ~f&c,b^c^f,c^(b| ~f)][j=i>>4]+d[i]+ ~~h[e|15&[i,5*i+1,3*i+5,7*i][j]])<<(j=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*j+(i++)%4])|f>>> -j),b,c])b=0|j[1],c=j[2];for(i=4;i;)g[--i]+=j[i]}for(a="";i<32;)a+=(g[i>>3]>>4*(1^i++)&15).toString(16);return a}}}])