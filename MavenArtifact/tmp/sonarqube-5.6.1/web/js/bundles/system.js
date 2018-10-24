webpackJsonp([24],{0:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}var r=n(1),s=a(r),o=n(32),l=a(o),i=n(1444),u=a(i);window.sonarqube.appStarted.then(function(e){var t=document.querySelector(e.el);l["default"].render(s["default"].createElement(u["default"],null),t)})},248:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){return Object.keys(e).map(function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])}).join("&")}function o(e){return new b(e)}function l(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.status);throw t.response=e,t}function i(e){return e.json()}function u(e,t){return o(e).setData(t).submit().then(l).then(i)}function c(e,t){return o(e).setMethod("POST").setData(t).submit().then(l).then(i)}function d(e,t){return o(e).setMethod("POST").setData(t).submit().then(l)}function f(e){return new Promise(function(t){return setTimeout(function(){return t(e)},3e3)})}Object.defineProperty(t,"__esModule",{value:!0});var m=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();t.request=o,t.checkStatus=l,t.parseJSON=i,t.getJSON=u,t.postJSON=c,t.post=d,t.delay=f;var p=n(249),v=a(p),h={method:"GET",credentials:"same-origin"},y={Accept:"application/json"},b=function(){function e(t){r(this,e),this.url=t,this.options={},this.headers={}}return m(e,[{key:"submit",value:function(){var e=this.url,t=v["default"].defaults(this.options,h);return t.headers=v["default"].defaults(this.headers,y),this.data&&("GET"===t.method?e+="?"+s(this.data):(t.headers["Content-Type"]="application/x-www-form-urlencoded",t.body=s(this.data))),window.fetch(e,t)}},{key:"setMethod",value:function(e){return this.options.method=e,this}},{key:"setData",value:function(e){return this.data=e,this}}]),e}()},257:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function r(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var a=t.join(".");return y[a]||a}function s(e){for(var t=y[e],n=arguments.length,a=Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return t?a.reduce(function(e,t,n){return e.replace("{"+n+"}",t)},t):e+"."+a.join(".")}function o(){return window.navigator.languages?window.navigator.languages[0]:window.navigator.language}function l(e){var t=window.baseUrl+"/api/l10n/index?"+(0,p.stringify)(e);return fetch(t,{credentials:"same-origin"}).then(function(e){if(304===e.status)return JSON.parse(localStorage.getItem("l10n.bundle"));if(200===e.status)return e.json();throw new Error(e.status)})}function i(){var e=o(),t=localStorage.getItem("l10n.locale");t!==e&&localStorage.removeItem("l10n.timestamp");var n=localStorage.getItem("l10n.timestamp"),a={locale:e};return null!==n&&(a.ts=n),l(a).then(function(t){var n=(0,h["default"])().format("YYYY-MM-DDTHH:mm:ssZZ");localStorage.setItem("l10n.timestamp",n),localStorage.setItem("l10n.locale",e),localStorage.setItem("l10n.bundle",JSON.stringify(t)),y=t})}function u(e){y=e}function c(){window.t=r,window.tp=s,window.requestMessages=i}function d(e){var t="dashboard."+e+".name",n=r(t);return n!==t?n:e}function f(e){var t="metric."+e.key+".name",n=r(t);return n!==t?n:e.name}function m(e){var t="metric_domain."+e,n=r(t);return n!==t?n:e}Object.defineProperty(t,"__esModule",{value:!0}),t.translate=r,t.translateWithParameters=s,t.requestMessages=i,t.resetBundle=u,t.installGlobal=c,t.getLocalizedDashboardName=d,t.getLocalizedMetricName=f,t.getLocalizedMetricDomain=m;var p=n(258),v=n(261),h=a(v),y={}},258:function(e,t,n){"use strict";t.decode=t.parse=n(259),t.encode=t.stringify=n(260)},259:function(e,t){"use strict";function n(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,a,r){t=t||"&",a=a||"=";var s={};if("string"!=typeof e||0===e.length)return s;var o=/\+/g;e=e.split(t);var l=1e3;r&&"number"==typeof r.maxKeys&&(l=r.maxKeys);var i=e.length;l>0&&i>l&&(i=l);for(var u=0;u<i;++u){var c,d,f,m,p=e[u].replace(o,"%20"),v=p.indexOf(a);v>=0?(c=p.substr(0,v),d=p.substr(v+1)):(c=p,d=""),f=decodeURIComponent(c),m=decodeURIComponent(d),n(s,f)?Array.isArray(s[f])?s[f].push(m):s[f]=[s[f],m]:s[f]=m}return s}},260:function(e,t){"use strict";var n=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,a,r){return t=t||"&",a=a||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(r){var s=encodeURIComponent(n(r))+a;return Array.isArray(e[r])?e[r].map(function(e){return s+encodeURIComponent(n(e))}).join(t):s+encodeURIComponent(n(e[r]))}).join(t):r?encodeURIComponent(n(r))+a+encodeURIComponent(n(e)):""}},498:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(353),s=a(r),o=n(395),l=a(o),i="modal";t["default"]=l["default"].ItemView.extend({className:"modal",overlayClassName:"modal-overlay",htmlClassName:"modal-open",events:function(){return{"click .js-modal-close":"onCloseClick"}},onRender:function(){var e=this;this.$el.detach().appendTo((0,s["default"])("body")),(0,s["default"])("html").addClass(this.htmlClassName),this.renderOverlay(),this.keyScope=key.getScope(),key.setScope("modal"),key("escape","modal",function(){return e.destroy(),!1}),this.show(),this.options.large&&this.$el.addClass("modal-large")},show:function(){var e=this;setTimeout(function(){e.$el.addClass("in"),(0,s["default"])("."+e.overlayClassName).addClass("in")},0)},onDestroy:function(){(0,s["default"])("html").removeClass(this.htmlClassName),this.removeOverlay(),key.deleteScope("modal"),key.setScope(this.keyScope)},onCloseClick:function(e){e.preventDefault(),this.destroy()},renderOverlay:function(){var e=(0,s["default"])("."+this.overlayClassName);0===e.length&&(0,s["default"])('<div class="'+this.overlayClassName+'"></div>').appendTo((0,s["default"])("body"))},removeOverlay:function(){(0,s["default"])("."+this.overlayClassName).remove()},attachCloseEvents:function(){var e=this;(0,s["default"])("body").on("click."+i,function(){(0,s["default"])("body").off("click."+i),e.destroy()})}})},685:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(249),s=a(r),o=n(498),l=a(o);t["default"]=l["default"].extend({ui:function(){return{messagesContainer:".js-modal-messages"}},events:function(){return s["default"].extend(l["default"].prototype.events.apply(this,arguments),{"keydown input,textarea,select":"onInputKeydown","submit form":"onFormSubmit"})},onRender:function(){l["default"].prototype.onRender.apply(this,arguments);var e=this;setTimeout(function(){e.$(":tabbable").first().focus()},0)},onInputKeydown:function(e){27===e.keyCode&&this.destroy()},onFormSubmit:function(e){e.preventDefault()},showErrors:function(e,t){var n=this.ui.messagesContainer.empty();s["default"].isArray(e)&&e.forEach(function(e){var t='<div class="alert alert-danger">'+e.msg+"</div>";n.append(t)}),s["default"].isArray(t)&&t.forEach(function(e){var t='<div class="alert alert-warning">'+e.msg+"</div>";n.append(t)}),this.ui.messagesContainer.scrollParent().scrollTop(0)},disableForm:function(){var e=this.$("form");this.disabledFields=e.find(":input:not(:disabled)"),this.disabledFields.prop("disabled",!0)},enableForm:function(){null!=this.disabledFields&&this.disabledFields.prop("disabled",!1)}})},1444:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(249),s=a(r),o=n(1),l=a(o),i=n(1445),u=n(1446),c=a(u),d=n(257),f=n(1451),m=a(f),p=["SonarQube","Database","System","Elasticsearch State","Elasticsearch","Compute Engine Tasks","Compute Engine State","Compute Engine Database Connection","JvmProperties"];t["default"]=l["default"].createClass({displayName:"main",componentDidMount:function(){var e=this;(0,i.getSystemInfo)().then(function(t){return e.setState({sections:e.parseSections(t)})})},parseSections:function(e){var t=this,n=Object.keys(e).map(function(n){return{name:n,items:t.parseItems(e[n])}});return this.orderSections(n)},orderSections:function(e){return s["default"].sortBy(e,function(e){return p.indexOf(e.name)})},parseItems:function(e){var t=Object.keys(e).map(function(t){return{name:t,value:e[t]}});return this.orderItems(t)},orderItems:function(e){return s["default"].sortBy(e,"name")},handleServerRestart:function(){(new m["default"]).render()},render:function(){var e=null;return this.state&&this.state.sections&&(e=this.state.sections.filter(function(e){return p.indexOf(e.name)>=0}).map(function(e){return l["default"].createElement(c["default"],{key:e.name,section:e.name,items:e.items})})),l["default"].createElement("div",{className:"page"},l["default"].createElement("header",{className:"page-header"},l["default"].createElement("h1",{className:"page-title"},(0,d.translate)("system_info.page")),l["default"].createElement("div",{className:"page-actions"},l["default"].createElement("a",{className:"spacer-right",href:window.baseUrl+"/api/system/logs",id:"logs-link"},"Logs"),l["default"].createElement("a",{href:window.baseUrl+"/api/system/info",id:"download-link"},"Download"),l["default"].createElement("button",{id:"restart-server-button",className:"big-spacer-left",onClick:this.handleServerRestart},"Restart Server"))),e)}})},1445:function(e,t,n){"use strict";function a(e){var t=window.baseUrl+"/api/system/change_log_level",n={level:e};return(0,c.post)(t,n)}function r(){var e=window.baseUrl+"/api/system/info";return(0,c.getJSON)(e)}function s(){var e=window.baseUrl+"/api/system/status";return(0,c.getJSON)(e)}function o(){var e=window.baseUrl+"/api/system/restart";return(0,c.post)(e)}function l(e){setTimeout(function(){s().then(function(t){"UP"===t.status?e():l(e)})["catch"](function(){return l(e)})},d)}function i(){return new Promise(function(e){return l(e)})}function u(){return o().then(i)}Object.defineProperty(t,"__esModule",{value:!0}),t.setLogLevel=a,t.getSystemInfo=r,t.getStatus=s,t.restart=o,t.restartAndWait=u;var c=n(248),d=2e3},1446:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=a(r),o=n(1447),l=a(o);t["default"]=s["default"].createClass({displayName:"section",render:function(){var e=this.props.items.map(function(e){return s["default"].createElement("tr",{key:e.name},s["default"].createElement("td",{className:"thin"},s["default"].createElement("div",{style:{width:"25vw",overflow:"hidden",textOverflow:"ellipsis"}},e.name)),s["default"].createElement("td",{style:{wordBreak:"break-all"}},s["default"].createElement(l["default"],{name:e.name,value:e.value})))});return s["default"].createElement("div",{className:"big-spacer-bottom"},s["default"].createElement("h3",{className:"spacer-bottom"},this.props.section),s["default"].createElement("table",{className:"data zebra",id:this.props.section},s["default"].createElement("tbody",null,e)))}})},1447:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=n(1),o=a(s),l=n(1448),i=a(l),u=n(1449),c=a(u),d=n(1450),f=a(d);t["default"]=o["default"].createClass({displayName:"item-value",render:function(){if("Logs Level"===this.props.name)return o["default"].createElement(f["default"],{value:this.props.value});var e=this.props.value,t=void 0;switch(r(this.props.value)){case"boolean":t=o["default"].createElement(i["default"],{value:e});break;case"object":t=o["default"].createElement(c["default"],{value:e});break;default:t=o["default"].createElement("code",null,e)}return t}})},1448:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=a(r);t["default"]=s["default"].createClass({displayName:"item-boolean",render:function(){return this.props.value?s["default"].createElement("i",{className:"icon-check"}):s["default"].createElement("i",{className:"icon-delete"})}})},1449:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=a(r),o=n(1447),l=a(o);t["default"]=s["default"].createClass({displayName:"item-object",render:function(){var e=this,t=Object.keys(this.props.value).map(function(t){return s["default"].createElement("tr",{key:t},s["default"].createElement("td",{className:"thin nowrap"},t),s["default"].createElement("td",null,s["default"].createElement(l["default"],{value:e.props.value[t]})))});return s["default"].createElement("table",{className:"data"},s["default"].createElement("tbody",null,t))}})},1450:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),s=a(r),o=n(1445),l=n(257),i=["INFO","DEBUG","TRACE"];t["default"]=s["default"].createClass({displayName:"item-log-level",getInitialState:function(){return{level:this.props.value}},onChange:function(){var e=this,t=this.refs.select.value;(0,o.setLogLevel)(t).then(function(){e.setState({level:t})})},render:function(){var e=i.map(function(e){return s["default"].createElement("option",{key:e,value:e},e)}),t="INFO"!==this.state.level?s["default"].createElement("div",{className:"alert alert-danger spacer-top",style:{wordBreak:"normal"}},(0,l.translate)("system.log_level.warning")):null;return s["default"].createElement("div",null,s["default"].createElement("select",{ref:"select",onChange:this.onChange,value:this.state.level},e),t)}})},1451:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(685),s=a(r),o=n(1452),l=a(o),i=n(1453),u=a(i),c=n(1445),d=s["default"].extend({template:l["default"],restartingTemplate:u["default"],initialize:function(){this.restarting=!1},getTemplate:function(){return this.restarting?this.restartingTemplate:this.template},onFormSubmit:function(){s["default"].prototype.onFormSubmit.apply(this,arguments),this.restarting=!0,this.render(),(0,c.restartAndWait)().then(function(){document.location.reload()})}});t["default"]=d},1452:function(e,t,n){var a=n(409);e.exports=(a["default"]||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){return'<form id="restart-server-form">\n  <div class="modal-head">\n    <h2>Restart Server</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    <p class="spacer-top spacer-bottom">\n      Are you sure you want to restart the server?\n    </p>\n  </div>\n  <div class="modal-foot">\n    <button id="restart-server-submit">Restart</button>\n    <a href="#" class="js-modal-close" id="restart-server-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0})},1453:function(e,t,n){var a=n(409);e.exports=(a["default"]||a).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,a){return'<form id="restart-server-form">\n  <div class="modal-head">\n    <h2>Restart Server</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    <p class="spacer-top spacer-bottom text-center">\n      Server is restarting. This page will be automatically refreshed.\n    </p>\n    <p class="big-spacer-top spacer-bottom text-center">\n      <i class="spinner"></i>\n    </p>\n  </div>\n</form>\n'},useData:!0})}});