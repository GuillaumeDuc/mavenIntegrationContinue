webpackJsonp([9],{0:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=s(395),l=n(i),o=s(966),a=n(o),r=s(968),c=n(r),u=s(970),d=n(u),h=s(975),f=n(h),p=s(977),m=n(p),v=s(986),g=n(v),y=new l["default"].Application,b=function(){var e=window.sonarqube;this.layout=new a["default"]({el:e.el}),this.layout.render(),this.groups=new c["default"],this.headerView=new d["default"]({collection:this.groups}),this.layout.headerRegion.show(this.headerView),this.searchView=new f["default"]({collection:this.groups}),this.layout.searchRegion.show(this.searchView),this.listView=new m["default"]({collection:this.groups}),this.layout.listRegion.show(this.listView),this.listFooterView=new g["default"]({collection:this.groups}),this.layout.listFooterRegion.show(this.listFooterView),this.groups.fetch()};y.on("start",function(){b.call(y)}),window.sonarqube.appStarted.then(function(e){return y.start(e)})},257:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function i(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];var n=t.join(".");return g[n]||n}function l(e){for(var t=g[e],s=arguments.length,n=Array(s>1?s-1:0),i=1;i<s;i++)n[i-1]=arguments[i];return t?n.reduce(function(e,t,s){return e.replace("{"+s+"}",t)},t):e+"."+n.join(".")}function o(){return window.navigator.languages?window.navigator.languages[0]:window.navigator.language}function a(e){var t=window.baseUrl+"/api/l10n/index?"+(0,p.stringify)(e);return fetch(t,{credentials:"same-origin"}).then(function(e){if(304===e.status)return JSON.parse(localStorage.getItem("l10n.bundle"));if(200===e.status)return e.json();throw new Error(e.status)})}function r(){var e=o(),t=localStorage.getItem("l10n.locale");t!==e&&localStorage.removeItem("l10n.timestamp");var s=localStorage.getItem("l10n.timestamp"),n={locale:e};return null!==s&&(n.ts=s),a(n).then(function(t){var s=(0,v["default"])().format("YYYY-MM-DDTHH:mm:ssZZ");localStorage.setItem("l10n.timestamp",s),localStorage.setItem("l10n.locale",e),localStorage.setItem("l10n.bundle",JSON.stringify(t)),g=t})}function c(e){g=e}function u(){window.t=i,window.tp=l,window.requestMessages=r}function d(e){var t="dashboard."+e+".name",s=i(t);return s!==t?s:e}function h(e){var t="metric."+e.key+".name",s=i(t);return s!==t?s:e.name}function f(e){var t="metric_domain."+e,s=i(t);return s!==t?s:e}Object.defineProperty(t,"__esModule",{value:!0}),t.translate=i,t.translateWithParameters=l,t.requestMessages=r,t.resetBundle=c,t.installGlobal=u,t.getLocalizedDashboardName=d,t.getLocalizedMetricName=h,t.getLocalizedMetricDomain=f;var p=s(258),m=s(261),v=n(m),g={}},258:function(e,t,s){"use strict";t.decode=t.parse=s(259),t.encode=t.stringify=s(260)},259:function(e,t){"use strict";function s(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,i){t=t||"&",n=n||"=";var l={};if("string"!=typeof e||0===e.length)return l;var o=/\+/g;e=e.split(t);var a=1e3;i&&"number"==typeof i.maxKeys&&(a=i.maxKeys);var r=e.length;a>0&&r>a&&(r=a);for(var c=0;c<r;++c){var u,d,h,f,p=e[c].replace(o,"%20"),m=p.indexOf(n);m>=0?(u=p.substr(0,m),d=p.substr(m+1)):(u=p,d=""),h=decodeURIComponent(u),f=decodeURIComponent(d),s(l,h)?Array.isArray(l[h])?l[h].push(f):l[h]=[l[h],f]:l[h]=f}return l}},260:function(e,t){"use strict";var s=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,i){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?Object.keys(e).map(function(i){var l=encodeURIComponent(s(i))+n;return Array.isArray(e[i])?e[i].map(function(e){return l+encodeURIComponent(s(e))}).join(t):l+encodeURIComponent(s(e[i]))}).join(t):i?encodeURIComponent(s(i))+n+encodeURIComponent(s(e)):""}},418:function(e,t){"use strict";e.exports=function(){var e=Array.prototype.slice.call(arguments,0,-1);return window.t.apply(this,e)}},498:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(353),l=n(i),o=s(395),a=n(o),r="modal";t["default"]=a["default"].ItemView.extend({className:"modal",overlayClassName:"modal-overlay",htmlClassName:"modal-open",events:function(){return{"click .js-modal-close":"onCloseClick"}},onRender:function(){var e=this;this.$el.detach().appendTo((0,l["default"])("body")),(0,l["default"])("html").addClass(this.htmlClassName),this.renderOverlay(),this.keyScope=key.getScope(),key.setScope("modal"),key("escape","modal",function(){return e.destroy(),!1}),this.show(),this.options.large&&this.$el.addClass("modal-large")},show:function(){var e=this;setTimeout(function(){e.$el.addClass("in"),(0,l["default"])("."+e.overlayClassName).addClass("in")},0)},onDestroy:function(){(0,l["default"])("html").removeClass(this.htmlClassName),this.removeOverlay(),key.deleteScope("modal"),key.setScope(this.keyScope)},onCloseClick:function(e){e.preventDefault(),this.destroy()},renderOverlay:function(){var e=(0,l["default"])("."+this.overlayClassName);0===e.length&&(0,l["default"])('<div class="'+this.overlayClassName+'"></div>').appendTo((0,l["default"])("body"))},removeOverlay:function(){(0,l["default"])("."+this.overlayClassName).remove()},attachCloseEvents:function(){var e=this;(0,l["default"])("body").on("click."+r,function(){(0,l["default"])("body").off("click."+r),e.destroy()})}})},685:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(249),l=n(i),o=s(498),a=n(o);t["default"]=a["default"].extend({ui:function(){return{messagesContainer:".js-modal-messages"}},events:function(){return l["default"].extend(a["default"].prototype.events.apply(this,arguments),{"keydown input,textarea,select":"onInputKeydown","submit form":"onFormSubmit"})},onRender:function(){a["default"].prototype.onRender.apply(this,arguments);var e=this;setTimeout(function(){e.$(":tabbable").first().focus()},0)},onInputKeydown:function(e){27===e.keyCode&&this.destroy()},onFormSubmit:function(e){e.preventDefault()},showErrors:function(e,t){var s=this.ui.messagesContainer.empty();l["default"].isArray(e)&&e.forEach(function(e){var t='<div class="alert alert-danger">'+e.msg+"</div>";s.append(t)}),l["default"].isArray(t)&&t.forEach(function(e){var t='<div class="alert alert-warning">'+e.msg+"</div>";s.append(t)}),this.ui.messagesContainer.scrollParent().scrollTop(0)},disableForm:function(){var e=this.$("form");this.disabledFields=e.find(":input:not(:disabled)"),this.disabledFields.prop("disabled",!0)},enableForm:function(){null!=this.disabledFields&&this.disabledFields.prop("disabled",!1)}})},960:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var i=s(353),l=n(i),o=s(249),a=n(o),r=s(392),c=n(r),u=s(257),d=s(961),h=n(d),f=s(962),p=n(f),m=null,v=c["default"].Collection.extend({initialize:function(e){this.options=e},parse:function(e){return this.options.parse.call(this,e)},fetch:function(e){var t=l["default"].extend({page:1,pageSize:100},e.data||{}),s=l["default"].extend({},e,{data:t});this.settings={url:s.url,data:t},c["default"].Collection.prototype.fetch.call(this,s)},fetchNextPage:function(e){if(this.more){var t=this.settings.data.page+1,s=l["default"].extend(this.settings,e);s.data.page=t,s.remove=!1,this.fetch(s)}else e.error()}}),g=c["default"].View.extend({tagName:"li",template:h["default"],events:{"change .select-list-list-checkbox":"toggle"},initialize:function(e){this.listenTo(this.model,"change",this.render),this.settings=e.settings},render:function(){this.$el.html(this.template(this.settings.format(this.model.toJSON()))),this.$("input").prop("name",this.model.get("name")),this.$el.toggleClass("selected",this.model.get("selected")),this.$(".select-list-list-checkbox").prop("title",this.model.get("selected")?this.settings.tooltips.deselect:this.settings.tooltips.select).prop("checked",this.model.get("selected")),this.settings.readOnly&&this.$(".select-list-list-checkbox").prop("disabled",!0)},remove:function(e){var t=this;e?!function(){var e=t;e.$el.addClass(t.model.get("selected")?"added":"removed"),setTimeout(function(){c["default"].View.prototype.remove.call(e,arguments)},500)}():c["default"].View.prototype.remove.call(this,arguments)},toggle:function(){var e=this.model.get("selected"),t=this,s=e?this.settings.deselectUrl:this.settings.selectUrl,n=l["default"].extend({},this.settings.extra||{});n[this.settings.selectParameter]=this.model.get(this.settings.selectParameterValue),t.$el.addClass("progress"),l["default"].ajax({url:s,data:n,type:"POST",statusCode:{400:null,401:null,403:null,500:null}}).done(function(){t.model.set("selected",!e)}).fail(function(e){t.render(),m(e)}).always(function(){t.$el.removeClass("progress")})}}),y=c["default"].View.extend({template:p["default"],events:{"click .select-list-control-button[name=selected]":"showSelected","click .select-list-control-button[name=deselected]":"showDeselected","click .select-list-control-button[name=all]":"showAll"},initialize:function(e){this.listenTo(this.collection,"add",this.renderListItem),this.listenTo(this.collection,"reset",this.renderList),this.listenTo(this.collection,"remove",this.removeModel),this.listenTo(this.collection,"change:selected",this.confirmFilter),this.settings=e.settings;var t=this;this.showFetchSpinner=function(){t.$listContainer.addClass("loading")},this.hideFetchSpinner=function(){t.$listContainer.removeClass("loading")};var s=function(){t.showFetchSpinner(),t.collection.fetchNextPage({success:function(){t.hideFetchSpinner()},error:function(){t.hideFetchSpinner()}})};this.onScroll=a["default"].throttle(s,1e3)},render:function(){var e=this,t=function(){e.search()};this.$el.html(this.template(this.settings.labels)).width(this.settings.width),this.$listContainer=this.$(".select-list-list-container"),this.settings.readOnly?this.$listContainer.addClass("select-list-list-container-readonly"):this.$listContainer.height(this.settings.height).css("overflow","auto").on("scroll",function(){e.scroll()}),this.$list=this.$(".select-list-list");var s=this.$(".select-list-search-control input").on("keyup",a["default"].debounce(t,250)).on("search",a["default"].debounce(t,250));this.settings.focusSearch&&setTimeout(function(){s.focus()},250),this.listItemViews=[],m=function(t){var s=(0,u.translate)("default_error_message");null!=t&&null!=t.responseJSON&&null!=t.responseJSON.errors&&(s=a["default"].pluck(t.responseJSON.errors,"msg").join(". ")),e.$el.prevAll(".alert").remove(),(0,l["default"])("<div>").addClass("alert alert-danger").text(s).insertBefore(e.$el)},this.settings.readOnly&&this.$(".select-list-control").remove()},renderList:function(){this.listItemViews.forEach(function(e){e.remove()}),this.listItemViews=[],this.collection.length>0?this.collection.each(this.renderListItem,this):this.settings.readOnly&&this.renderEmpty(),this.$listContainer.scrollTop(0)},renderListItem:function(e){var t=new g({model:e,settings:this.settings});this.listItemViews.push(t),this.$list.append(t.el),t.render()},renderEmpty:function(){this.$list.append('<li class="empty-message">'+this.settings.labels.noResults+"</li>")},confirmFilter:function(e){"all"!==this.currentFilter&&this.collection.remove(e)},removeModel:function(e,t,s){this.listItemViews[s.index].remove(!0),this.listItemViews.splice(s.index,1)},filterBySelection:function(e){var t=this;e=this.currentFilter=e||this.currentFilter,null!=e&&(this.$(".select-list-check-control").toggleClass("disabled",!1),this.$(".select-list-search-control").toggleClass("disabled",!0),this.$(".select-list-search-control input").val(""),this.$(".select-list-control-button").removeClass("active").filter("[name="+e+"]").addClass("active"),this.showFetchSpinner(),this.collection.fetch({url:this.settings.searchUrl,reset:!0,data:{selected:e},success:function(){t.hideFetchSpinner()},error:m}))},showSelected:function(){this.filterBySelection("selected")},showDeselected:function(){this.filterBySelection("deselected")},showAll:function(){this.filterBySelection("all")},search:function(){var e=this.$(".select-list-search-control input").val(),t=e.length>0,s=this,n={};this.$(".select-list-check-control").toggleClass("disabled",t),this.$(".select-list-search-control").toggleClass("disabled",!t),t?(this.showFetchSpinner(),this.currentFilter="all",n[this.settings.queryParam]=e,n.selected="all",this.collection.fetch({data:n,url:this.settings.searchUrl,reset:!0,success:function(){s.hideFetchSpinner()},error:m})):this.filterBySelection()},searchByQuery:function(e){this.$(".select-list-search-control input").val(e),this.search()},clearSearch:function(){this.filterBySelection()},scroll:function(){var e=this.$listContainer.scrollTop()>=this.$list[0].scrollHeight-this.$listContainer.outerHeight();e&&this.collection.more&&this.onScroll()}});window.SelectList=function(e){return this.settings=l["default"].extend(window.SelectList.defaults,e),this.collection=new v({parse:this.settings.parse}),this.view=new y({el:this.settings.el,collection:this.collection,settings:this.settings}),this.view.render(),this.filter("selected"),this},window.SelectList.prototype.filter=function(e){return this.view.filterBySelection(e),this},window.SelectList.prototype.search=function(e){return this.view.searchByQuery(e),this},window.SelectList.defaults={width:"50%",height:400,readOnly:!1,focusSearch:!0,format:function(e){return e.value},parse:function(e){return this.more=e.more,e.results},queryParam:"query",labels:{selected:"Selected",deselected:"Deselected",all:"All",noResults:""},tooltips:{select:"Click this to select item",deselect:"Click this to deselect item"},errorMessage:"Something gone wrong, try to reload the page and try again."}},961:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){var i,l=this.lambda,o='<input class="select-list-list-checkbox" type="checkbox">\n<div class="select-list-list-item">';return i=l(e,e),null!=i&&(o+=i),o+"</div>\n"},useData:!0})},962:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var l=this.lambda,o=this.escapeExpression;return'<div class="select-list-container">\n  <div class="select-list-control">\n    <div class="select-list-check-control">\n      <a class="select-list-control-button" name="selected">'+o(l(null!=e?e.selected:e,e))+'</a><a class="select-list-control-button" name="deselected">'+o(l(null!=e?e.deselected:e,e))+'</a><a class="select-list-control-button" name="all">'+o(l(null!=e?e.all:e,e))+'</a>\n    </div>\n    <div class="select-list-search-control">\n      <form class="search-box">\n        <span class="search-box-submit button-clean"><i class="icon-search"></i></span>\n        <input class="search-box-input" type="search" name="q" placeholder="'+o(s(418).call(e,"search_verb",{name:"t",hash:{},data:i}))+'" maxlength="100" autocomplete="off">\n      </form>\n    </div>\n  </div>\n  <div class="select-list-list-container">\n    <ul class="select-list-list"></ul>\n  </div>\n</div>\n'},useData:!0})},966:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(395),l=n(i),o=s(967),a=n(o);t["default"]=l["default"].LayoutView.extend({template:a["default"],regions:{headerRegion:"#groups-header",searchRegion:"#groups-search",listRegion:"#groups-list",listFooterRegion:"#groups-list-footer"}})},967:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){return'<div class="page">\n  <div id="groups-header"></div>\n  <div id="groups-search"></div>\n  <div id="groups-list"></div>\n  <div id="groups-list-footer"></div>\n</div>\n'},useData:!0})},968:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(392),l=n(i),o=s(969),a=n(o);t["default"]=l["default"].Collection.extend({model:a["default"],url:function(){return window.baseUrl+"/api/user_groups/search"},parse:function(e){return this.total=+e.total,this.p=+e.p,this.ps=+e.ps,e.groups},fetch:function(e){var t=e&&e.data||{};return this.q=t.q,l["default"].Collection.prototype.fetch.call(this,e)},fetchMore:function(){var e=this.p+1;return this.fetch({add:!0,remove:!1,data:{p:e,ps:this.ps,q:this.q}})},refresh:function(){return this.fetch({reset:!0,data:{q:this.q}})},hasMore:function(){return this.total>this.p*this.ps}})},969:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(249),l=n(i),o=s(392),a=n(o);t["default"]=a["default"].Model.extend({urlRoot:function(){return window.baseUrl+"/api/user_groups"},sync:function(e,t,s){var n=s||{};if("create"===e&&l["default"].defaults(n,{url:this.urlRoot()+"/create",type:"POST",data:l["default"].pick(t.toJSON(),"name","description")}),"update"===e){var i=l["default"].extend(l["default"].pick(t.changed,"name","description"),{id:t.id});l["default"].defaults(n,{url:this.urlRoot()+"/update",type:"POST",data:i})}return"delete"===e&&l["default"].defaults(n,{url:this.urlRoot()+"/delete",type:"POST",data:{id:this.id}}),a["default"].ajax(n)}})},970:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(395),l=n(i),o=s(971),a=n(o),r=s(974),c=n(r);t["default"]=l["default"].ItemView.extend({template:c["default"],collectionEvents:{request:"showSpinner",sync:"hideSpinner"},events:{"click #groups-create":"onCreateClick"},showSpinner:function(){this.$(".spinner").removeClass("hidden")},hideSpinner:function(){this.$(".spinner").addClass("hidden")},onCreateClick:function(e){e.preventDefault(),this.createGroup()},createGroup:function(){new a["default"]({collection:this.collection}).render()}})},971:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(969),l=n(i),o=s(972),a=n(o);t["default"]=a["default"].extend({sendRequest:function(){var e=this,t=new l["default"]({name:this.$("#create-group-name").val(),description:this.$("#create-group-description").val()});return this.disableForm(),t.save(null,{statusCode:{400:null}}).done(function(){e.collection.refresh(),e.destroy()}).fail(function(t){e.enableForm(),e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},972:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(685),l=n(i),o=s(973),a=n(o);t["default"]=l["default"].extend({template:a["default"],onRender:function(){l["default"].prototype.onRender.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"})},onDestroy:function(){l["default"].prototype.onDestroy.apply(this,arguments),this.$('[data-toggle="tooltip"]').tooltip("destroy")},onFormSubmit:function(){l["default"].prototype.onFormSubmit.apply(this,arguments),this.sendRequest()}})},973:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({1:function(e,t,s,n){return"Update"},3:function(e,t,s,n){return"Create"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){var i,l,o="function",a=t.helperMissing,r=this.escapeExpression,c='<form id="create-group-form" autocomplete="off">\n  <div class="modal-head">\n    <h2>';return i=t["if"].call(e,null!=e?e.id:e,{name:"if",hash:{},fn:this.program(1,n),inverse:this.program(3,n),data:n}),null!=i&&(c+=i),c+=' Group</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    <div class="modal-field">\n      <label for="create-group-name">Name<em class="mandatory">*</em></label>\n      <input id="create-group-name-fake" name="name-fake" type="text" class="hidden">\n      <input id="create-group-name" name="name" type="text" size="50" maxlength="255" required value="'+r((l=null!=(l=t.name||(null!=e?e.name:e))?l:a,typeof l===o?l.call(e,{name:"name",hash:{},data:n}):l))+'">\n    </div>\n    <div class="modal-field">\n      <label for="create-group-description">Description</label>\n      <textarea id="create-group-description-fake" name="description-fake" class="hidden"></textarea>\n      <textarea id="create-group-description" name="description">'+r((l=null!=(l=t.description||(null!=e?e.description:e))?l:a,typeof l===o?l.call(e,{name:"description",hash:{},data:n}):l))+'</textarea>\n    </div>\n  </div>\n  <div class="modal-foot">\n    <button id="create-group-submit">',i=t["if"].call(e,null!=e?e.id:e,{name:"if",hash:{},fn:this.program(1,n),inverse:this.program(3,n),data:n}),null!=i&&(c+=i),c+'</button>\n    <a href="#" class="js-modal-close" id="create-group-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0})},974:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var l=this.escapeExpression;return'<header class="page-header">\n  <h1 class="page-title">'+l(s(418).call(e,"user_groups.page",{name:"t",hash:{},data:i}))+'</h1>\n  <i class="spinner hidden"></i>\n  <div class="page-actions">\n    <div class="button-group">\n      <button id="groups-create">Create Group</button>\n    </div>\n  </div>\n  <p class="page-description">'+l(s(418).call(e,"user_groups.page.description",{name:"t",hash:{},data:i}))+"</p>\n</header>\n"},useData:!0})},975:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(249),l=n(i),o=s(395),a=n(o),r=s(976),c=n(r);t["default"]=a["default"].ItemView.extend({template:c["default"],events:{"submit #groups-search-form":"onFormSubmit","search #groups-search-query":"debouncedOnKeyUp","keyup #groups-search-query":"debouncedOnKeyUp"},initialize:function(){this._bufferedValue=null,this.debouncedOnKeyUp=l["default"].debounce(this.onKeyUp,400)},onRender:function(){this.delegateEvents()},onFormSubmit:function(e){e.preventDefault(),this.debouncedOnKeyUp()},onKeyUp:function(){var e=this.getQuery();e!==this._bufferedValue&&(this._bufferedValue=this.getQuery(),null!=this.searchRequest&&this.searchRequest.abort(),this.searchRequest=this.search(e))},getQuery:function(){return this.$("#groups-search-query").val()},search:function(e){return this.collection.fetch({reset:!0,data:{q:e}})}})},976:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){return'<div class="panel panel-vertical bordered-bottom spacer-bottom">\n  <form id="groups-search-form" class="search-box">\n    <button id="groups-search-submit" class="search-box-submit button-clean"><i class="icon-search"></i></button>\n    <input id="groups-search-query" class="search-box-input" type="search" name="q" placeholder="Search" maxlength="100">\n  </form>\n</div>\n'},useData:!0})},977:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(395),l=n(i),o=s(978),a=n(o),r=s(985),c=n(r);t["default"]=l["default"].CompositeView.extend({childView:a["default"],childViewContainer:".js-list",template:c["default"],collectionEvents:{request:"showLoading",sync:"hideLoading"},showLoading:function(){this.$el.addClass("new-loading")},hideLoading:function(){this.$el.removeClass("new-loading");var e=this.collection.q||"",t=!"anyone".includes(e.toLowerCase());this.$(".js-anyone").toggleClass("hidden",t)}})},978:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(353),l=n(i),o=s(395),a=n(o),r=s(979),c=n(r),u=s(980),d=n(u),h=s(982),f=n(h),p=s(984),m=n(p);t["default"]=a["default"].ItemView.extend({tagName:"li",className:"panel panel-vertical",template:m["default"],events:{"click .js-group-update":"onUpdateClick","click .js-group-delete":"onDeleteClick","click .js-group-users":"onUsersClick"},onRender:function(){this.$el.attr("data-id",this.model.id),this.$('[data-toggle="tooltip"]').tooltip({container:"body",placement:"bottom"})},onDestroy:function(){this.$('[data-toggle="tooltip"]').tooltip("destroy")},onUpdateClick:function(e){e.preventDefault(),this.updateGroup()},onDeleteClick:function(e){e.preventDefault(),this.deleteGroup()},onUsersClick:function(e){e.preventDefault(),(0,l["default"])(".tooltip").remove(),this.showUsers()},updateGroup:function(){new c["default"]({model:this.model,collection:this.model.collection}).render()},deleteGroup:function(){new d["default"]({model:this.model}).render()},showUsers:function(){new f["default"]({model:this.model}).render()}})},979:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(972),l=n(i);t["default"]=l["default"].extend({sendRequest:function(){var e=this;return this.model.set({name:this.$("#create-group-name").val(),description:this.$("#create-group-description").val()}),this.disableForm(),this.model.save(null,{statusCode:{400:null}}).done(function(){e.collection.refresh(),e.destroy()}).fail(function(t){e.enableForm(),e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})}})},980:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(685),l=n(i),o=s(981),a=n(o);t["default"]=l["default"].extend({template:a["default"],onFormSubmit:function(){l["default"].prototype.onFormSubmit.apply(this,arguments),this.sendRequest()},sendRequest:function(){var e=this,t=this.model.collection;return this.model.destroy({wait:!0,statusCode:{400:null}}).done(function(){t.total--,e.destroy()}).fail(function(t){e.showErrors(t.responseJSON.errors,t.responseJSON.warnings)})},showErrors:function(e,t){this.$(".js-modal-text").addClass("hidden"),this.disableForm(),l["default"].prototype.showErrors.call(this,e,t)}})},981:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){var i,l="function",o=t.helperMissing,a=this.escapeExpression;return'<form id="delete-group-form" autocomplete="off">\n  <div class="modal-head">\n    <h2>Delete Group</h2>\n  </div>\n  <div class="modal-body">\n    <div class="js-modal-messages"></div>\n    <div class="js-modal-text">Are you sure you want to delete "'+a((i=null!=(i=t.name||(null!=e?e.name:e))?i:o,typeof i===l?i.call(e,{name:"name",hash:{},data:n}):i))+'"?</div>\n  </div>\n  <div class="modal-foot">\n    <button id="delete-group-submit">Delete</button>\n    <a href="#" class="js-modal-close" id="delete-group-cancel">Cancel</a>\n  </div>\n</form>\n'},useData:!0})},982:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(498),l=n(i);s(960);var o=s(983),a=n(o);t["default"]=l["default"].extend({template:a["default"],onRender:function(){l["default"].prototype.onRender.apply(this,arguments),new window.SelectList({el:this.$("#groups-users"),width:"100%",readOnly:!1,focusSearch:!1,format:function(e){return e.name+'<br><span class="note">'+e.login+"</span>"},queryParam:"q",searchUrl:window.baseUrl+"/api/user_groups/users?ps=100&id="+this.model.id,selectUrl:window.baseUrl+"/api/user_groups/add_user",deselectUrl:window.baseUrl+"/api/user_groups/remove_user",extra:{id:this.model.id},selectParameter:"login",selectParameterValue:"login",parse:function(e){return this.more=!1,e.users}})},onDestroy:function(){this.model.collection.refresh(),l["default"].prototype.onDestroy.apply(this,arguments)}})},983:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){return'<div class="modal-head">\n  <h2>Update users</h2>\n</div>\n<div class="modal-body">\n  <div class="js-modal-messages"></div>\n  <div id="groups-users"></div>\n</div>\n<div class="modal-foot">\n  <a href="#" class="js-modal-close" id="groups-users-done">Done</a>\n</div>\n'},useData:!0})},984:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){var i,l="function",o=t.helperMissing,a=this.escapeExpression;return'<div class="pull-right big-spacer-left nowrap">\n  <a class="js-group-update icon-edit little-spacer-right" title="Update Details" data-toggle="tooltip" href="#"></a>\n  <a class="js-group-delete icon-delete" title="Delete" data-toggle="tooltip" href="#"></a>\n</div>\n\n<div class="display-inline-block text-top width-20">\n  <strong class="js-group-name">'+a((i=null!=(i=t.name||(null!=e?e.name:e))?i:o,typeof i===l?i.call(e,{name:"name",hash:{},data:n}):i))+'</strong>\n</div>\n\n<div class="display-inline-block text-top big-spacer-left width-25">\n  <div class="pull-left spacer-right">\n    <strong>Members</strong>\n  </div>\n  <div class="overflow-hidden bordered-left">\n    <span class="spacer-left spacer-right">'+a((i=null!=(i=t.membersCount||(null!=e?e.membersCount:e))?i:o,typeof i===l?i.call(e,{name:"membersCount",hash:{},data:n}):i))+'</span>\n    <a class="js-group-users icon-bullet-list" title="Update Users" data-toggle="tooltip" href="#"></a>\n  </div>\n</div>\n\n<div class="display-inline-block text-top big-spacer-left width-40">\n  <span class="js-group-description">'+a((i=null!=(i=t.description||(null!=e?e.description:e))?i:o,typeof i===l?i.call(e,{name:"description",hash:{},data:n}):i))+"</span>\n</div>\n"},useData:!0})},985:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,i){var l=this.escapeExpression;return'<div>\n  <div class="panel panel-vertical js-anyone">\n    <div class="display-inline-block text-top width-20">\n      <strong class="js-group-name">Anyone</strong>\n    </div>\n\n    <div class="display-inline-block text-top big-spacer-left width-25">\n\n    </div>\n\n    <div class="display-inline-block text-top big-spacer-left width-40">\n      <span class="js-group-description">'+l(s(418).call(e,"user_groups.anyone.description",{name:"t",hash:{},data:i}))+'</span>\n    </div>\n\n  </div>\n\n  <ul class="js-list"></ul>\n</div>\n'},useData:!0})},986:function(e,t,s){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(249),l=n(i),o=s(395),a=n(o),r=s(987),c=n(r);t["default"]=a["default"].ItemView.extend({template:c["default"],collectionEvents:{all:"render"},events:{"click #groups-fetch-more":"onMoreClick"},onMoreClick:function(e){e.preventDefault(),this.fetchMore()},fetchMore:function(){this.collection.fetchMore()},serializeData:function(){return l["default"].extend(a["default"].ItemView.prototype.serializeData.apply(this,arguments),{total:this.collection.total,count:this.collection.length,more:this.collection.hasMore()})}})},987:function(e,t,s){var n=s(409);e.exports=(n["default"]||n).template({1:function(e,t,s,n){return'    <a id="groups-fetch-more" class="spacer-left" href="#">show more</a>\n'},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,s,n){var i,l,o="function",a=t.helperMissing,r=this.escapeExpression,c='<footer class="spacer-top note text-center">\n  '+r((l=null!=(l=t.count||(null!=e?e.count:e))?l:a,typeof l===o?l.call(e,{name:"count",hash:{},data:n}):l))+"/"+r((l=null!=(l=t.total||(null!=e?e.total:e))?l:a,typeof l===o?l.call(e,{name:"total",hash:{},data:n}):l))+" shown\n";return i=t["if"].call(e,null!=e?e.more:e,{name:"if",hash:{},fn:this.program(1,n),inverse:this.noop,data:n}),null!=i&&(c+=i),c+"</footer>\n"},useData:!0})}});