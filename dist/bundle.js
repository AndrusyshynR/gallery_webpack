!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var i="https://api.unsplash.com/photos/",r="ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c";function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var o=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,o;return e=t,(n=[{key:"listPhotos",value:function(t,e){var n="".concat(i,"?client_id=").concat(r,"&per_page=").concat(t,"&page=").concat(e);return fetch(n).then(function(t){return t.json()})}},{key:"likePhoto",value:function(t,e){var n="".concat(i).concat(t.id,"/like/?client_id=").concat(r);return fetch(n,{method:"POST"}).then(function(t){return t.json()})}}])&&a(e.prototype,n),o&&a(e,o),t}());function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=function(){function t(e){var n=e.photo,i=e.onLikeHandler;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.photo=n,this.onLikeHandler=i,this.wrap=document.createElement("div"),this.img=document.createElement("img"),this.like=document.createElement("span"),this.date_at=document.createElement("i")}var e,n,i;return e=t,(n=[{key:"getFormatDate",value:function(){var t=this.photo.updated_at;return new Date(t).toLocaleDateString()}},{key:"build",value:function(){var t=this,e=this.photo,n=e.likes,i=e.urls.thumb;return this.wrap.className="photo",this.img.src=i,this.like.innerHTML=n,this.like.onclick=function(){t.onLikeHandler(t.photo,t.like)},this.date_at.innerHTML=this.getFormatDate(),this.wrap.append(this.like),this.wrap.append(this.date_at),this.wrap.append(this.img),this.wrap}}])&&c(e.prototype,n),i&&c(e,i),t}();function l(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}new(function(){function t(e){var n=e.limit,i=e.page,r=e.gallery_id,a=e.nav_id;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.limit=n,this.page=i,this.photos=[],this.container=document.querySelector(r),this.btnLeft=document.querySelector("".concat(a," #back")),this.btnRight=document.querySelector("".concat(a," #next")),this.input=document.querySelector("".concat(a," input")),this.select=document.querySelector("".concat(a," select")),this.renderList=this.renderList.bind(this),this.onLikeHandler=this.onLikeHandler.bind(this),this.changePage=this.changePage.bind(this)}var e,n,i;return e=t,(n=[{key:"init",value:function(){this.input.value=this.page,this.select.value=this.limit,this.btnLeft.onclick=this.changePage,this.btnRight.onclick=this.changePage,this.input.oninput=this.changePage,this.select.onchange=this.changePage}},{key:"onLikeHandler",value:function(t,e){o.likePhoto(t.id)}},{key:"changePage",value:function(t){var e=t.target===this.btnLeft,n=t.target===this.btnRight,i=t.target===this.input,r=t.target===this.select;e&&this.page>1&&this.page--,n&&this.page++,i&&(this.page=this.input.value),r&&(this.limit=this.select.value),!i&&(this.input.value=this.page),this.renderList()}},{key:"renderList",value:function(){var t=this;o.listPhotos(this.limit,this.page).then(function(e){var n;t.photos=e.map(function(e){return new u({photo:e,onLikeHandler:t.onLikeHandler}).build()}),(n=t.container).append.apply(n,l(t.photos))})}}])&&s(e.prototype,n),i&&s(e,i),t}())({limit:30,page:1,gallery_id:"#gallery",nav_id:"#navigation"}).renderList(),alert("hi")}]);