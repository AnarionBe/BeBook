(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{59:function(e,t,a){"use strict";var r=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}();t.a=function(e){return function(t){function a(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(a.__proto__||Object.getPrototypeOf(a)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,e),r(a,[{key:"componentWillMount",value:function(){this.setStateWithData(this.getDataModel(this.getResolvedState(),!0))}},{key:"componentDidMount",value:function(){this.fireFetchData()}},{key:"componentWillReceiveProps",value:function(e,t){var a=this.getResolvedState(),r=this.getResolvedState(e,t);["sorted","filtered","resized","expanded"].forEach(function(e){var t="default"+(e.charAt(0).toUpperCase()+e.slice(1));JSON.stringify(a[t])!==JSON.stringify(r[t])&&(r[e]=r[t])});["sortable","filterable","resizable"].forEach(function(e){if(a[e]!==r[e]){var t=e.replace("able","")+"ed",o="default"+(t.charAt(0).toUpperCase()+t.slice(1));r[t]=r[o]}}),a.data===r.data&&a.columns===r.columns&&a.pivotBy===r.pivotBy&&a.sorted===r.sorted&&a.filtered===r.filtered||this.setStateWithData(this.getDataModel(r,a.data!==r.data))}},{key:"setStateWithData",value:function(e,t){var a=this,r=this.getResolvedState(),o=this.getResolvedState({},e),n=o.freezeWhenExpanded;if(o.frozen=!1,n)for(var i=Object.keys(o.expanded),s=0;s<i.length;s+=1)if(o.expanded[i[s]]){o.frozen=!0;break}return(r.frozen&&!o.frozen||r.sorted!==o.sorted||r.filtered!==o.filtered||r.showFilters!==o.showFilters||!o.frozen&&r.resolvedData!==o.resolvedData)&&((r.sorted!==o.sorted&&this.props.collapseOnSortingChange||r.filtered!==o.filtered||r.showFilters!==o.showFilters||r.sortedData&&!o.frozen&&r.resolvedData!==o.resolvedData&&this.props.collapseOnDataChange)&&(o.expanded={}),Object.assign(o,this.getSortedData(o))),r.filtered!==o.filtered&&(o.page=0),o.sortedData&&(o.pages=o.manual?o.pages:Math.ceil(o.sortedData.length/o.pageSize),o.page=o.manual?o.page:Math.max(o.page>=o.pages?o.pages-1:o.page,0)),this.setState(o,function(){t&&t(),r.page===o.page&&r.pageSize===o.pageSize&&r.sorted===o.sorted&&r.filtered===o.filtered||a.fireFetchData()})}}]),a}()}}}]);