webpackJsonp([17],{0:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var r=s(1),i=n(r),a=s(32),l=n(a),o=s(1292),u=n(o);window.sonarqube.appStarted.then(function(e){var t=document.querySelector(e.el);l["default"].render(i["default"].createElement(u["default"],{topQualifiers:e.rootQualifiers}),t)})},257:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];var n=t.join(".");return y[n]||n}function i(e){for(var t=y[e],s=arguments.length,n=Array(s>1?s-1:0),r=1;r<s;r++)n[r-1]=arguments[r];return t?n.reduce(function(e,t,s){return e.replace("{"+s+"}",t)},t):e+"."+n.join(".")}function a(){return window.navigator.languages?window.navigator.languages[0]:window.navigator.language}function l(e){var t=window.baseUrl+"/api/l10n/index?"+(0,f.stringify)(e);return fetch(t,{credentials:"same-origin"}).then(function(e){if(304===e.status)return JSON.parse(localStorage.getItem("l10n.bundle"));if(200===e.status)return e.json();throw new Error(e.status)})}function o(){var e=a(),t=localStorage.getItem("l10n.locale");t!==e&&localStorage.removeItem("l10n.timestamp");var s=localStorage.getItem("l10n.timestamp"),n={locale:e};return null!==s&&(n.ts=s),l(n).then(function(t){var s=(0,v["default"])().format("YYYY-MM-DDTHH:mm:ssZZ");localStorage.setItem("l10n.timestamp",s),localStorage.setItem("l10n.locale",e),localStorage.setItem("l10n.bundle",JSON.stringify(t)),y=t})}function u(e){y=e}function d(){window.t=r,window.tp=i,window.requestMessages=o}function p(e){var t="dashboard."+e+".name",s=r(t);return s!==t?s:e}function c(e){var t="metric."+e.key+".name",s=r(t);return s!==t?s:e.name}function m(e){var t="metric_domain."+e,s=r(t);return s!==t?s:e}Object.defineProperty(t,"__esModule",{value:!0}),t.translate=r,t.translateWithParameters=i,t.requestMessages=o,t.resetBundle=u,t.installGlobal=d,t.getLocalizedDashboardName=p,t.getLocalizedMetricName=c,t.getLocalizedMetricDomain=m;var f=s(258),h=s(261),v=n(h),y={}},258:function(e,t,s){"use strict";t.decode=t.parse=s(259),t.encode=t.stringify=s(260)},259:function(e,t){"use strict";function s(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,r){t=t||"&",n=n||"=";var i={};if("string"!=typeof e||0===e.length)return i;var a=/\+/g;e=e.split(t);var l=1e3;r&&"number"==typeof r.maxKeys&&(l=r.maxKeys);var o=e.length;l>0&&o>l&&(o=l);for(var u=0;u<o;++u){var d,p,c,m,f=e[u].replace(a,"%20"),h=f.indexOf(n);h>=0?(d=f.substr(0,h),p=f.substr(h+1)):(d=f,p=""),c=decodeURIComponent(d),m=decodeURIComponent(p),s(i,c)?Array.isArray(i[c])?i[c].push(m):i[c]=[i[c],m]:i[c]=m}return i}},260:function(e,t){"use strict";var s=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,r){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(r){var i=encodeURIComponent(s(r))+n;return Array.isArray(e[r])?e[r].map(function(e){return i+encodeURIComponent(s(e))}).join(t):i+encodeURIComponent(s(e[r]))}).join(t):r?encodeURIComponent(s(r))+n+encodeURIComponent(s(e)):""}},356:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(1),i=n(r);t["default"]=i["default"].createClass({displayName:"qualifier-icon",render:function(){if(!this.props.qualifier)return null;var e="icon-qualifier-"+this.props.qualifier.toLowerCase();return i["default"].createElement("i",{className:e})}})},386:function(e,t,s){var n;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
!function(){"use strict";function r(){for(var e="",t=0;t<arguments.length;t++){var s=arguments[t];if(s){var n=typeof s;if("string"===n||"number"===n)e+=" "+s;else if(Array.isArray(s))e+=" "+r.apply(null,s);else if("object"===n)for(var a in s)i.call(s,a)&&s[a]&&(e+=" "+a)}}return e.substr(1)}var i={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=r:(n=function(){return r}.call(t,s,t,e),!(void 0!==n&&(e.exports=n)))}()},418:function(e,t){"use strict";e.exports=function(){var e=Array.prototype.slice.call(arguments,0,-1);return window.t.apply(this,e)}},498:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(353),i=n(r),a=s(395),l=n(a),o="modal";t["default"]=l["default"].ItemView.extend({className:"modal",overlayClassName:"modal-overlay",htmlClassName:"modal-open",events:function(){return{"click .js-modal-close":"onCloseClick"}},onRender:function(){var e=this;this.$el.detach().appendTo((0,i["default"])("body")),(0,i["default"])("html").addClass(this.htmlClassName),this.renderOverlay(),this.keyScope=key.getScope(),key.setScope("modal"),key("escape","modal",function(){return e.destroy(),!1}),this.show(),this.options.large&&this.$el.addClass("modal-large")},show:function(){var e=this;setTimeout(function(){e.$el.addClass("in"),(0,i["default"])("."+e.overlayClassName).addClass("in")},0)},onDestroy:function(){(0,i["default"])("html").removeClass(this.htmlClassName),this.removeOverlay(),key.deleteScope("modal"),key.setScope(this.keyScope)},onCloseClick:function(e){e.preventDefault(),this.destroy()},renderOverlay:function(){var e=(0,i["default"])("."+this.overlayClassName);0===e.length&&(0,i["default"])('<div class="'+this.overlayClassName+'"></div>').appendTo((0,i["default"])("body"))},removeOverlay:function(){(0,i["default"])("."+this.overlayClassName).remove()},attachCloseEvents:function(){var e=this;(0,i["default"])("body").on("click."+o,function(){(0,i["default"])("body").off("click."+o),e.destroy()})}})},685:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(249),i=n(r),a=s(498),l=n(a);t["default"]=l["default"].extend({ui:function(){return{messagesContainer:".js-modal-messages"}},events:function(){return i["default"].extend(l["default"].prototype.events.apply(this,arguments),{"keydown input,textarea,select":"onInputKeydown","submit form":"onFormSubmit"})},onRender:function(){l["default"].prototype.onRender.apply(this,arguments);var e=this;setTimeout(function(){e.$(":tabbable").first().focus()},0)},onInputKeydown:function(e){27===e.keyCode&&this.destroy()},onFormSubmit:function(e){e.preventDefault()},showErrors:function(e,t){var s=this.ui.messagesContainer.empty();i["default"].isArray(e)&&e.forEach(function(e){var t='<div class="alert alert-danger">'+e.msg+"</div>";s.append(t)}),i["default"].isArray(t)&&t.forEach(function(e){var t='<div class="alert alert-warning">'+e.msg+"</div>";s.append(t)}),this.ui.messagesContainer.scrollParent().scrollTop(0)},disableForm:function(){var e=this.$("form");this.disabledFields=e.find(":input:not(:disabled)"),this.disabledFields.prop("disabled",!0)},enableForm:function(){null!=this.disabledFields&&this.disabledFields.prop("disabled",!1)}})},960:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var r=s(353),i=n(r),a=s(249),l=n(a),o=s(392),u=n(o),d=s(257),p=s(961),c=n(p),m=s(962),f=n(m),h=null,v=u["default"].Collection.extend({initialize:function(e){this.options=e},parse:function(e){return this.options.parse.call(this,e)},fetch:function(e){var t=i["default"].extend({page:1,pageSize:100},e.data||{}),s=i["default"].extend({},e,{data:t});this.settings={url:s.url,data:t},u["default"].Collection.prototype.fetch.call(this,s)},fetchNextPage:function(e){if(this.more){var t=this.settings.data.page+1,s=i["default"].extend(this.settings,e);s.data.page=t,s.remove=!1,this.fetch(s)}else e.error()}}),y=u["default"].View.extend({tagName:"li",template:c["default"],events:{"change .select-list-list-checkbox":"toggle"},initialize:function(e){this.listenTo(this.model,"change",this.render),this.settings=e.settings},render:function(){this.$el.html(this.template(this.settings.format(this.model.toJSON()))),this.$("input").prop("name",this.model.get("name")),this.$el.toggleClass("selected",this.model.get("selected")),this.$(".select-list-list-checkbox").prop("title",this.model.get("selected")?this.settings.tooltips.deselect:this.settings.tooltips.select).prop("checked",this.model.get("selected")),this.settings.readOnly&&this.$(".select-list-list-checkbox").prop("disabled",!0)},remove:function(e){var t=this;e?!function(){var e=t;e.$el.addClass(t.model.get("selected")?"added":"removed"),setTimeout(function(){u["default"].View.prototype.remove.call(e,arguments)},500)}():u["default"].View.prototype.remove.call(this,arguments)},toggle:function(){var e=this.model.get("selected"),t=this,s=e?this.settings.deselectUrl:this.settings.selectUrl,n=i["default"].extend({},this.settings.extra||{});n[this.settings.selectParameter]=this.model.get(this.settings.selectParameterValue),t.$el.addClass("progress"),i["default"].ajax({url:s,data:n,type:"POST",statusCode:{400:null,401:null,403:null,500:null}}).done(function(){t.model.set("selected",!e)}).fail(function(e){t.render(),h(e)}).always(function(){t.$el.removeClass("progress")})}}),g=u["default"].View.extend({template:f["default"],events:{"click .select-list-control-button[name=selected]":"showSelected","click .select-list-control-button[name=deselected]":"showDeselected","click .select-list-control-button[name=all]":"showAll"},initialize:function(e){this.listenTo(this.collection,"add",this.renderListItem),this.listenTo(this.collection,"reset",this.renderList),this.listenTo(this.collection,"remove",this.removeModel),this.listenTo(this.collection,"change:selected",this.confirmFilter),this.settings=e.settings;var t=this;this.showFetchSpinner=function(){t.$listContainer.addClass("loading")},this.hideFetchSpinner=function(){t.$listContainer.removeClass("loading")};var s=function(){t.showFetchSpinner(),t.collection.fetchNextPage({success:function(){t.hideFetchSpinner()},error:function(){t.hideFetchSpinner()}})};this.onScroll=l["default"].throttle(s,1e3)},render:function(){var e=this,t=function(){e.search()};this.$el.html(this.template(this.settings.labels)).width(this.settings.width),this.$listContainer=this.$(".select-list-list-container"),this.settings.readOnly?this.$listContainer.addClass("select-list-list-container-readonly"):this.$listContainer.height(this.settings.height).css("overflow","auto").on("scroll",function(){e.scroll()}),this.$list=this.$(".select-list-list");var s=this.$(".select-list-search-control input").on("keyup",l["default"].debounce(t,250)).on("search",l["default"].debounce(t,250));this.settings.focusSearch&&setTimeout(function(){s.focus()},250),this.listItemViews=[],h=function(t){var s=(0,d.translate)("default_error_message");null!=t&&null!=t.responseJSON&&null!=t.responseJSON.errors&&(s=l["default"].pluck(t.responseJSON.errors,"msg").join(". ")),e.$el.prevAll(".alert").remove(),(0,i["default"])("<div>").addClass("alert alert-danger").text(s).insertBefore(e.$el)},this.settings.readOnly&&this.$(".select-list-control").remove()},renderList:function(){this.listItemViews.forEach(function(e){e.remove()}),this.listItemViews=[],this.collection.length>0?this.collection.each(this.renderListItem,this):this.settings.readOnly&&this.renderEmpty(),this.$listContainer.scrollTop(0)},renderListItem:function(e){var t=new y({model:e,settings:this.settings});this.listItemViews.push(t),this.$list.append(t.el),t.render()},renderEmpty:function(){this.$list.append('<li class="empty-message">'+this.settings.labels.noResults+"</li>")},confirmFilter:function(e){"all"!==this.currentFilter&&this.collection.remove(e)},removeModel:function(e,t,s){this.listItemViews[s.index].remove(!0),this.listItemViews.splice(s.index,1)},filterBySelection:function(e){var t=this;e=this.currentFilter=e||this.currentFilter,null!=e&&(this.$(".select-list-check-control").toggleClass("disabled",!1),this.$(".select-list-search-control").toggleClass("disabled",!0),this.$(".select-list-search-control input").val(""),this.$(".select-list-control-button").removeClass("active").filter("[name="+e+"]").addClass("active"),this.showFetchSpinner(),this.collection.fetch({url:this.settings.searchUrl,reset:!0,data:{selected:e},success:function(){t.hideFetchSpinner()},error:h}))},showSelected:function(){this.filterBySelection("selected")},showDeselected:function(){this.filterBySelection("deselected")},showAll:function(){this.filterBySelection("all")},search:function(){var e=this.$(".select-list-search-control input").val(),t=e.length>0,s=this,n={};this.$(".select-list-check-control").toggleClass("disabled",t),this.$(".select-list-search-control").toggleClass("disabled",!t),t?(this.showFetchSpinner(),this.currentFilter="all",n[this.settings.queryParam]=e,n.selected="all",this.collection.fetch({data:n,url:this.settings.searchUrl,reset:!0,success:function(){s.hideFetchSpinner()},error:h})):this.filterBySelection()},searchByQuery:function(e){this.$(".select-list-search-control input").val(e),this.search()},clearSearch:function(){this.filterBySelection()},scroll:function(){var e=this.$listContainer.scrollTop()>=this.$list[0].scrollHeight-this.$listContainer.outerHeight();e&&this.collection.more&&this.onScroll()}});window.SelectList=function(e){return this.settings=i["default"].extend(window.SelectList.defaults,e),this.collection=new v({parse:this.settings.parse}),this.view=new g({el:this.settings.el,collection:this.collection,settings:this.settings}),this.view.render(),this.filter("selected"),this},window.SelectList.prototype.filter=function(e){return this.view.filterBySelection(e),this},window.SelectList.prototype.search=function(e){return this.view.searchByQuery(e),this},window.SelectList.defaults={width:"50%",height:400,readOnly:!1,focusSearch:!0,format:function(e){return e.value},parse:function(e){return this.more=e.more,e.results},queryParam:"query",labels:{selected:"Selected",deselected:"Deselected",all:"All",noResults:""},tooltips:{select:"Click this to select item",deselect:"Click this to deselect item"},errorMessage:"Something gone wrong, try to reload the page and try again."}},961:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){var r,i=this.lambda,a='<input class="select-list-list-checkbox" type="checkbox">\n<div class="select-list-list-item">';return r=i(e,e),null!=r&&(a+=r),a+"</div>\n"},useData:!0})},962:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var i=this.lambda,a=this.escapeExpression;return'<div class="select-list-container">\n  <div class="select-list-control">\n    <div class="select-list-check-control">\n      <a class="select-list-control-button" name="selected">'+a(i(null!=e?e.selected:e,e))+'</a><a class="select-list-control-button" name="deselected">'+a(i(null!=e?e.deselected:e,e))+'</a><a class="select-list-control-button" name="all">'+a(i(null!=e?e.all:e,e))+'</a>\n    </div>\n    <div class="select-list-search-control">\n      <form class="search-box">\n        <span class="search-box-submit button-clean"><i class="icon-search"></i></span>\n        <input class="search-box-input" type="search" name="q" placeholder="'+a(s(418).call(e,"search_verb",{name:"t",hash:{},data:r}))+'" maxlength="100" autocomplete="off">\n      </form>\n    </div>\n  </div>\n  <div class="select-list-list-container">\n    <ul class="select-list-list"></ul>\n  </div>\n</div>\n'},useData:!0})},1292:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(249),i=n(r),a=s(1),l=n(a),o=s(1293),u=n(o),d=s(1298),p=n(d),c=s(1297),m=["user","codeviewer","issueadmin","admin","scan"];t["default"]=l["default"].createClass({displayName:"main",propTypes:{topQualifiers:l["default"].PropTypes.array.isRequired},getInitialState:function(){return{ready:!1,permissions:[],permissionTemplates:[]}},componentDidMount:function(){this.requestPermissions()},sortPermissions:function(e){return i["default"].sortBy(e,function(e){return m.indexOf(e.key)})},mergePermissionsToTemplates:function(e,t){return e.map(function(e){var s=t.map(function(t){var s=i["default"].findWhere(e.permissions,{key:t.key});return i["default"].extend({usersCount:0,groupsCount:0},t,s)});return i["default"].extend({},e,{permissions:s})})},mergeDefaultsToTemplates:function(e){var t=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];return e.map(function(e){var s=[];return t.forEach(function(t){t.templateId===e.id&&s.push(t.qualifier)}),i["default"].extend({},e,{defaultFor:s})})},requestPermissions:function(){var e=this;(0,c.getPermissionTemplates)().done(function(t){var s=e.sortPermissions(t.permissions),n=e.mergePermissionsToTemplates(t.permissionTemplates,s),r=e.mergeDefaultsToTemplates(n,t.defaultTemplates);e.setState({ready:!0,permissionTemplates:r,permissions:s})})},render:function(){return l["default"].createElement("div",{className:"page"},l["default"].createElement(u["default"],{ready:this.state.ready,refresh:this.requestPermissions}),l["default"].createElement(p["default"],{ready:this.state.ready,permissionTemplates:this.state.permissionTemplates,permissions:this.state.permissions,topQualifiers:this.props.topQualifiers,refresh:this.requestPermissions}))}})},1293:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(1),i=n(r),a=s(1294),l=n(a),o=s(257);t["default"]=i["default"].createClass({displayName:"header",onCreate:function(e){e.preventDefault(),new l["default"]({refresh:this.props.refresh}).render()},renderSpinner:function(){return this.props.ready?null:i["default"].createElement("i",{className:"spinner"})},render:function(){return i["default"].createElement("header",{id:"project-permissions-header",className:"page-header"},i["default"].createElement("h1",{className:"page-title"},(0,o.translate)("permission_templates.page")),this.renderSpinner(),i["default"].createElement("div",{className:"page-actions"},i["default"].createElement("button",{onClick:this.onCreate},"Create")),i["default"].createElement("p",{className:"page-description"},(0,o.translate)("roles.page.description")))}})},1294:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(1295),i=n(r),a=s(1297);t["default"]=i["default"].extend({sendRequest:function(){var e=this;return this.disableForm(),(0,a.createPermissionTemplate)({data:{name:this.$("#permission-template-name").val(),description:this.$("#permission-template-description").val(),projectKeyPattern:this.$("#permission-template-project-key-pattern").val()},statusCode:{400:null}}).done(function(){e.options.refresh(),e.destroy()}).fail(function(t){e.enableForm(),e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},1295:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(685),i=n(r),a=s(1296),l=n(a);t["default"]=i["default"].extend({template:l["default"],onRender:function(){i["default"].prototype.onRender.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"}),this.$("#create-custom-measure-metric").select2({width:"250px",minimumResultsForSearch:20})},onDestroy:function(){i["default"].prototype.onDestroy.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip("destroy")},onFormSubmit:function(){i["default"].prototype.onFormSubmit.apply(this,arguments),this.sendRequest()}})},1296:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({1:function(e,t,s,n){return"Update"},3:function(e,t,s,n){return"Create"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){var r,i,a="function",l=t.helperMissing,o=this.escapeExpression,u='<form id="permission-template-form" autocomplete="off">\n  <div class="modal-head">\n    <h2>';return r=t["if"].call(e,null!=e?e.id:e,{name:"if",hash:{},fn:this.program(1,n),inverse:this.program(3,n),data:n}),null!=r&&(u+=r),u+=' Permission Template</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n\n    <div class="modal-field">\n      <label for="permission-template-name">Name<em class="mandatory">*</em></label>\n      <input id="permission-template-name" name="name" type="text" maxlength="256" required value="'+o((i=null!=(i=t.name||(null!=e?e.name:e))?i:l,typeof i===a?i.call(e,{name:"name",hash:{},data:n}):i))+'">\n    </div>\n\n    <div class="modal-field">\n      <label for="permission-template-description">Description</label>\n      <textarea id="permission-template-description" name="description" maxlength="4000" rows="5">'+o((i=null!=(i=t.description||(null!=e?e.description:e))?i:l,typeof i===a?i.call(e,{name:"description",hash:{},data:n}):i))+'</textarea>\n    </div>\n\n    <div class="modal-field">\n      <label for="permission-template-project-key-pattern">Project Key Pattern</label>\n      <input id="permission-template-project-key-pattern" name="keyPattern" type="text" maxlength="500"\n             value="'+o((i=null!=(i=t.projectKeyPattern||(null!=e?e.projectKeyPattern:e))?i:l,typeof i===a?i.call(e,{name:"projectKeyPattern",hash:{},data:n}):i))+'">\n    </div>\n  </div>\n  <div class="modal-foot">\n    <button id="permission-template-submit">',r=t["if"].call(e,null!=e?e.id:e,{name:"if",hash:{},fn:this.program(1,n),inverse:this.program(3,n),data:n}),null!=r&&(u+=r),u+'</button>\n    <a href="#" class="js-modal-close" id="permission-template-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0})},1297:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return w["default"].ajax(e)}function i(e,t){throw new TypeError("permissions#"+e+": "+t)}function a(e){var t=window.baseUrl+"/api/permissions/users";return r({type:"GET",url:t,data:e})}function l(e,t,s){if("string"!=typeof e||!e.length)return i("grantToUser","please provide permission");if("string"!=typeof t||!t.length)return i("grantToUser","please provide user login");var n=window.baseUrl+"/api/permissions/add_user",a={permission:e,login:t};return s&&(a.projectId=s),r({type:"POST",url:n,data:a})}function o(e,t,s){if("string"!=typeof e||!e.length)return i("revokeFromUser","please provide permission");if("string"!=typeof t||!t.length)return i("revokeFromUser","please provide user login");var n=window.baseUrl+"/api/permissions/remove_user",a={permission:e,login:t};return s&&(a.projectId=s),r({type:"POST",url:n,data:a})}function u(e){var t=window.baseUrl+"/api/permissions/groups";return r({type:"GET",url:t,data:e})}function d(e,t,s){if("string"!=typeof e||!e.length)return i("grantToGroup","please provide permission");if("string"!=typeof t||!t.length)return i("grantToGroup","please provide group name");var n=window.baseUrl+"/api/permissions/add_group",a={permission:e,groupName:t};return s&&(a.projectId=s),r({type:"POST",url:n,data:a})}function p(e,t,s){if("string"!=typeof e||!e.length)return i("revokeFromGroup","please provide permission");if("string"!=typeof t||!t.length)return i("revokeFromGroup","please provide group name");var n=window.baseUrl+"/api/permissions/remove_group",a={permission:e,groupName:t};return s&&(a.projectId=s),r({type:"POST",url:n,data:a})}function c(e){var t=window.baseUrl+"/api/permissions/search_templates",s={};return e&&(s.q=e),r({type:"GET",url:t,data:s})}function m(e){var t=window.baseUrl+"/api/permissions/create_template";return r(_["default"].extend({type:"POST",url:t},e))}function f(e){var t=window.baseUrl+"/api/permissions/update_template";return r(_["default"].extend({type:"POST",url:t},e))}function h(e){var t=window.baseUrl+"/api/permissions/delete_template";return r(_["default"].extend({type:"POST",url:t},e))}function v(e,t){if("string"!=typeof e||!e.length)return i("setDefaultPermissionTemplate","please provide permission template ID");var s=window.baseUrl+"/api/permissions/set_default_template",n={templateId:e,qualifier:t};return r({type:"POST",url:s,data:n})}function y(e){var t=window.baseUrl+"/api/permissions/apply_template";return r(_["default"].extend({type:"POST",url:t},e))}function g(e){var t=window.baseUrl+"/api/permissions/bulk_apply_template";return r(_["default"].extend({type:"POST",url:t},e))}Object.defineProperty(t,"__esModule",{value:!0}),t.getUsers=a,t.grantToUser=l,t.revokeFromUser=o,t.getGroups=u,t.grantToGroup=d,t.revokeFromGroup=p,t.getPermissionTemplates=c,t.createPermissionTemplate=m,t.updatePermissionTemplate=f,t.deletePermissionTemplate=h,t.setDefaultPermissionTemplate=v,t.applyTemplateToProject=y,t.bulkApplyTemplateToProject=g;var b=s(353),w=n(b),T=s(249),_=n(T)},1298:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(386),i=n(r),a=s(1),l=n(a),o=s(1299),u=n(o),d=s(1300),p=n(d);t["default"]=l["default"].createClass({displayName:"permission-templates",propTypes:{permissionTemplates:l["default"].PropTypes.arrayOf(l["default"].PropTypes.object).isRequired,permissions:l["default"].PropTypes.arrayOf(l["default"].PropTypes.object).isRequired,topQualifiers:l["default"].PropTypes.array.isRequired,refresh:l["default"].PropTypes.func.isRequired},render:function(){var e=this,t=this.props.permissionTemplates.map(function(t){return l["default"].createElement(p["default"],{key:t.id,permissionTemplate:t,topQualifiers:e.props.topQualifiers,refresh:e.props.refresh})}),s=(0,i["default"])("data zebra",{"new-loading":!this.props.ready});return l["default"].createElement("table",{id:"permission-templates",className:s},l["default"].createElement(u["default"],{permissions:this.props.permissions}),l["default"].createElement("tbody",null,t))}})},1299:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(1),i=n(r);t["default"]=i["default"].createClass({displayName:"permissions-header",propTypes:{permissions:i["default"].PropTypes.arrayOf(i["default"].PropTypes.object).isRequired},render:function(){var e=80/this.props.permissions.length+"%",t=this.props.permissions.map(function(t){return i["default"].createElement("th",{key:t.key,style:{width:e}},t.name,i["default"].createElement("br",null),i["default"].createElement("span",{className:"small"},t.description))});return i["default"].createElement("thead",null,i["default"].createElement("tr",null,i["default"].createElement("th",{style:{width:"20%"}}," "),t,i["default"].createElement("th",{className:"thin"}," ")))}})},1300:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(249),i=n(r),a=s(392),l=n(a),o=s(1),u=n(o),d=s(1301),p=n(d),c=s(1302),m=n(c),f=s(1303),h=n(f),v=s(1305),y=n(v),g=s(1307),b=n(g),w=s(1308),T=n(w);t["default"]=u["default"].createClass({displayName:"permission-template",propTypes:{permissionTemplate:u["default"].PropTypes.object.isRequired,topQualifiers:u["default"].PropTypes.array.isRequired,refresh:u["default"].PropTypes.func.isRequired},showGroups:function(e,t){t.preventDefault(),new y["default"]({permission:e,permissionTemplate:this.props.permissionTemplate,refresh:this.props.refresh}).render()},showUsers:function(e,t){t.preventDefault(),new h["default"]({permission:e,permissionTemplate:this.props.permissionTemplate,refresh:this.props.refresh}).render()},onUpdate:function(e){e.preventDefault(),new b["default"]({model:new l["default"].Model(this.props.permissionTemplate),refresh:this.props.refresh}).render()},onDelete:function(e){e.preventDefault(),new T["default"]({model:new l["default"].Model(this.props.permissionTemplate),refresh:this.props.refresh}).render()},renderAssociation:function(){var e=this.props.permissionTemplate.projectKeyPattern;return e?u["default"].createElement("div",{className:"spacer-bottom"},"Project Key Pattern: ",u["default"].createElement("code",null,e)):null},renderDeleteButton:function(){return i["default"].size(this.props.permissionTemplate.defaultFor)>0?null:u["default"].createElement("button",{onClick:this.onDelete,className:"button-red"},"Delete")},render:function(){var e=this,t=this.props.permissionTemplate.permissions.map(function(t){return u["default"].createElement("td",{key:t.key},u["default"].createElement("table",null,u["default"].createElement("tbody",null,u["default"].createElement("tr",null,u["default"].createElement("td",{className:"spacer-right"},"Users"),u["default"].createElement("td",{className:"spacer-left bordered-left"},t.usersCount),u["default"].createElement("td",{className:"spacer-left"},u["default"].createElement("a",{onClick:e.showUsers.bind(e,t),className:"icon-bullet-list",title:"Update Users","data-toggle":"tooltip",href:"#"}))),u["default"].createElement("tr",null,u["default"].createElement("td",{className:"spacer-right"},"Groups"),u["default"].createElement("td",{className:"spacer-left bordered-left"},t.groupsCount),u["default"].createElement("td",{className:"spacer-left"},u["default"].createElement("a",{onClick:e.showGroups.bind(e,t),className:"icon-bullet-list",title:"Update Users","data-toggle":"tooltip",href:"#"}))))))});return u["default"].createElement("tr",null,u["default"].createElement("td",null,u["default"].createElement("strong",null,this.props.permissionTemplate.name),u["default"].createElement("p",{className:"note little-spacer-top"},this.props.permissionTemplate.description)),t,u["default"].createElement("td",{className:"thin text-right"},this.renderAssociation(),u["default"].createElement(p["default"],{permissionTemplate:this.props.permissionTemplate,topQualifiers:this.props.topQualifiers}),u["default"].createElement("div",{className:"nowrap"},u["default"].createElement(m["default"],{permissionTemplate:this.props.permissionTemplate,topQualifiers:this.props.topQualifiers,refresh:this.props.refresh}),u["default"].createElement("div",{className:"button-group"},u["default"].createElement("button",{onClick:this.onUpdate},"Update"),this.renderDeleteButton()))))}})},1301:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(249),i=n(r),a=s(1),l=n(a),o=s(356),u=n(o),d=s(257);t["default"]=l["default"].createClass({displayName:"permission-template-defaults",propTypes:{permissionTemplate:l["default"].PropTypes.object.isRequired,topQualifiers:l["default"].PropTypes.array.isRequired},renderIfSingleTopQualifier:function(){return l["default"].createElement("ul",{className:"list-inline nowrap spacer-bottom"},l["default"].createElement("li",null,"Default"))},renderIfMultipleTopQualifiers:function(){var e=this.props.permissionTemplate.defaultFor.map(function(e){return l["default"].createElement("li",{key:e},l["default"].createElement(u["default"],{qualifier:e})," ",(0,d.translate)("qualifier",e))});return l["default"].createElement("ul",{className:"list-inline nowrap spacer-bottom"},l["default"].createElement("li",null,"Default for"),e)},render:function(){return 0===i["default"].size(this.props.permissionTemplate.defaultFor)?null:1===this.props.topQualifiers.length?this.renderIfSingleTopQualifier():this.renderIfMultipleTopQualifiers()}})},1302:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(249),i=n(r),a=s(1),l=n(a),o=s(1297),u=s(356),d=n(u),p=s(257);t["default"]=l["default"].createClass({displayName:"permission-template-set-defaults",propTypes:{permissionTemplate:l["default"].PropTypes.object.isRequired,topQualifiers:l["default"].PropTypes.array.isRequired,refresh:l["default"].PropTypes.func.isRequired},getAvailableQualifiers:function(){return i["default"].difference(this.props.topQualifiers,this.props.permissionTemplate.defaultFor)},setDefault:function(e,t){var s=this;t.preventDefault(),(0,o.setDefaultPermissionTemplate)(this.props.permissionTemplate.id,e).done(function(){return s.props.refresh()})},renderIfSingleTopQualifier:function(e){var t=this,s=e.map(function(e){return l["default"].createElement("span",{key:e,className:"text-middle"},l["default"].createElement("a",{onClick:t.setDefault.bind(t,e),className:"button",href:"#"},"Set Default"))});return l["default"].createElement("span",{className:"little-spacer-right"},s)},renderIfMultipleTopQualifiers:function(e){var t=this,s=e.map(function(e){return l["default"].createElement("li",{key:e},l["default"].createElement("a",{onClick:t.setDefault.bind(t,e),href:"#"},"Set Default for ",l["default"].createElement(d["default"],{qualifier:e})," ",(0,p.translate)("qualifier",e)))});return l["default"].createElement("span",{className:"dropdown little-spacer-right"},l["default"].createElement("button",{className:"dropdown-toggle","data-toggle":"dropdown"},"Set Default ",l["default"].createElement("i",{className:"icon-dropdown"})),l["default"].createElement("ul",{className:"dropdown-menu"},s))},render:function(){var e=this.getAvailableQualifiers();return 0===e.length?null:1===this.props.topQualifiers.length?this.renderIfSingleTopQualifier(e):this.renderIfMultipleTopQualifiers(e)}})},1303:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(249),i=n(r),a=s(498),l=n(a);s(960);var o=s(1304),u=n(o);t["default"]=l["default"].extend({template:u["default"],onRender:function(){l["default"].prototype.onRender.apply(this,arguments);var e=window.baseUrl+"/api/permissions/template_users?ps=100&permission="+this.options.permission.key+"&templateId="+this.options.permissionTemplate.id;new window.SelectList({searchUrl:e,el:this.$("#permission-templates-users"),width:"100%",readOnly:!1,focusSearch:!1,format:function(e){return e.name+'<br><span class="note">'+e.login+"</span>"},queryParam:"q",selectUrl:window.baseUrl+"/api/permissions/add_user_to_template",deselectUrl:window.baseUrl+"/api/permissions/remove_user_from_template",extra:{permission:this.options.permission.key,templateId:this.options.permissionTemplate.id},selectParameter:"login",selectParameterValue:"login",parse:function(e){return this.more=!1,e.users}})},onDestroy:function(){this.options.refresh&&this.options.refresh(),l["default"].prototype.onDestroy.apply(this,arguments)},serializeData:function(){return i["default"].extend(l["default"].prototype.serializeData.apply(this,arguments),{permissionName:this.options.permission.name,permissionTemplateName:this.options.permissionTemplate.name})}})},1304:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){var r,i="function",a=t.helperMissing,l=this.escapeExpression;return'<div class="modal-head">\n  <h2>Update "'+l((r=null!=(r=t.permissionName||(null!=e?e.permissionName:e))?r:a,typeof r===i?r.call(e,{name:"permissionName",hash:{},data:n}):r))+'" Users for "'+l((r=null!=(r=t.permissionTemplateName||(null!=e?e.permissionTemplateName:e))?r:a,typeof r===i?r.call(e,{name:"permissionTemplateName",hash:{},data:n}):r))+'"</h2>\n</div>\n<div class="modal-body">\n  <div class="js-modal-messages"></div>\n  <div id="permission-templates-users"></div>\n</div>\n<div class="modal-foot">\n  <a href="#" class="js-modal-close">Done</a>\n</div>\n'},useData:!0})},1305:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){return window.baseUrl+("/api/permissions/template_groups?ps=100&permission="+e.key+"&templateId="+t.id)}Object.defineProperty(t,"__esModule",{value:!0});var i=s(249),a=n(i),l=s(498),o=n(l);s(960);var u=s(1306),d=n(u);t["default"]=o["default"].extend({template:d["default"],onRender:function(){
o["default"].prototype.onRender.apply(this,arguments),new window.SelectList({el:this.$("#permission-templates-groups"),width:"100%",readOnly:!1,focusSearch:!1,format:function(e){return e.name},queryParam:"q",searchUrl:r(this.options.permission,this.options.permissionTemplate),selectUrl:window.baseUrl+"/api/permissions/add_group_to_template",deselectUrl:window.baseUrl+"/api/permissions/remove_group_from_template",extra:{permission:this.options.permission.key,templateId:this.options.permissionTemplate.id},selectParameter:"groupName",selectParameterValue:"name",parse:function(e){return this.more=!1,e.groups}})},onDestroy:function(){this.options.refresh&&this.options.refresh(),o["default"].prototype.onDestroy.apply(this,arguments)},serializeData:function(){return a["default"].extend(o["default"].prototype.serializeData.apply(this,arguments),{permissionName:this.options.permission.name,permissionTemplateName:this.options.permissionTemplate.name})}})},1306:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){var r,i="function",a=t.helperMissing,l=this.escapeExpression;return'<div class="modal-head">\n  <h2>Update "'+l((r=null!=(r=t.permissionName||(null!=e?e.permissionName:e))?r:a,typeof r===i?r.call(e,{name:"permissionName",hash:{},data:n}):r))+'" Groups for "'+l((r=null!=(r=t.permissionTemplateName||(null!=e?e.permissionTemplateName:e))?r:a,typeof r===i?r.call(e,{name:"permissionTemplateName",hash:{},data:n}):r))+'"</h2>\n</div>\n<div class="modal-body">\n  <div class="js-modal-messages"></div>\n  <div id="permission-templates-groups"></div>\n</div>\n<div class="modal-foot">\n  <a href="#" class="js-modal-close">Done</a>\n</div>\n'},useData:!0})},1307:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(1295),i=n(r),a=s(1297);t["default"]=i["default"].extend({sendRequest:function(){var e=this;return this.disableForm(),(0,a.updatePermissionTemplate)({data:{id:this.model.id,name:this.$("#permission-template-name").val(),description:this.$("#permission-template-description").val(),projectKeyPattern:this.$("#permission-template-project-key-pattern").val()},statusCode:{400:null}}).done(function(){e.options.refresh(),e.destroy()}).fail(function(t){e.enableForm(),e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},1308:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=s(685),i=n(r),a=s(1297),l=s(1309),o=n(l);t["default"]=i["default"].extend({template:o["default"],onFormSubmit:function(){i["default"].prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},sendRequest:function(){var e=this;return(0,a.deletePermissionTemplate)({data:{templateId:this.model.id},statusCode:{400:null}}).done(function(){e.options.refresh(),e.destroy()}).fail(function(t){e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},1309:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){var r,i="function",a=t.helperMissing,l=this.escapeExpression;return'<form id="delete-permission-template-form">\n  <div class="modal-head">\n    <h2>Delete Permission Template</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    Are you sure you want to delete permission template "'+l((r=null!=(r=t.name||(null!=e?e.name:e))?r:a,typeof r===i?r.call(e,{name:"name",hash:{},data:n}):r))+'"?\n  </div>\n  <div class="modal-foot">\n    <button id="delete-permission-template-submit" class="button-red">Delete</button>\n    <a href="#" class="js-modal-close" id="delete-permission-template-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0})}});