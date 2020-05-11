/*jshint esversion: 6 */
if (window.innerWidth > 991) {

  var $jscomp$this=this;!function(t,n){"function"==typeof define&&define.amd?define([],n):"object"==typeof module&&module.exports?module.exports=n():t.anime=n()}(this,function(){function t(t){if(!I.col(t))try{return document.querySelectorAll(t)}catch(t){}}function n(t){return t.reduce(function(t,e){return t.concat(I.arr(e)?n(e):e)},[])}function e(n){return I.arr(n)?n:(I.str(n)&&(n=t(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function r(t,n){return t.some(function(t){return t===n})}function a(t){var n,e={};for(n in t)e[n]=t[n];return e}function i(t,n){var e,r=a(t);for(e in t)r[e]=n.hasOwnProperty(e)?n[e]:t[e];return r}function u(t,n){var e,r=a(t);for(e in n)r[e]=I.und(t[e])?n[e]:t[e];return r}function o(t){if(t=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|pc|vw|vh|deg|rad|turn)?/.exec(t))return t[2]}function s(t,n){return I.fnc(t)?t(n.target,n.id,n.total):t}function c(t,n){if(n in t.style)return getComputedStyle(t).getPropertyValue(n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())||"0"}function f(t,n){return I.dom(t)&&r(j,n)?"transform":I.dom(t)&&(t.getAttribute(n)||I.svg(t)&&t[n])?"attribute":I.dom(t)&&"transform"!==n&&c(t,n)?"css":null!=t[n]?"object":void 0}function l(t,n){switch(f(t,n)){case"transform":return function(t,n){var e=function(t){return-1<t.indexOf("translate")?"px":-1<t.indexOf("rotate")||-1<t.indexOf("skew")?"deg":void 0}(n);if(e=-1<n.indexOf("scale")?1:0+e,!(t=t.style.transform))return e;for(var r=[],a=[],i=[],u=/(\w+)\((.+?)\)/g;r=u.exec(t);)a.push(r[1]),i.push(r[2]);return(t=i.filter(function(t,e){return a[e]===n})).length?t[0]:e}(t,n);case"css":return c(t,n);case"attribute":return t.getAttribute(n)}return t[n]||0}function d(t,n){var e=/^(\*=|\+=|-=)/.exec(t);if(!e)return t;switch(n=parseFloat(n),t=parseFloat(t.replace(e[0],"")),e[0][0]){case"+":return n+t;case"-":return n-t;case"*":return n*t}}function p(t){return I.obj(t)&&t.hasOwnProperty("totalLength")}function m(t,n){function e(e){return e=void 0===e?0:e,t.el.getPointAtLength(1<=n+e?n+e:0)}var r=e(),a=e(-1),i=e(1);switch(t.property){case"x":return r.x;case"y":return r.y;case"angle":return 180*Math.atan2(i.y-a.y,i.x-a.x)/Math.PI}}function h(t,n){var e=/-?\d*\.?\d+/g;if(t=p(t)?t.totalLength:t,I.col(t))n=I.rgb(t)?t:I.hex(t)?function(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,n,e,r){return n+n+e+e+r+r});var n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgb("+(t=parseInt(n[1],16))+","+parseInt(n[2],16)+","+(n=parseInt(n[3],16))+")"}(t):I.hsl(t)?function(t){function n(t,n,e){return 0>e&&(e+=1),1<e&&--e,e<1/6?t+6*(n-t)*e:.5>e?n:e<2/3?t+(n-t)*(2/3-e)*6:t}var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t);t=parseInt(e[1])/360;var r=parseInt(e[2])/100;if(e=parseInt(e[3])/100,0==r)r=e=t=e;else{var a=.5>e?e*(1+r):e+r-e*r,i=2*e-a;r=n(i,a,t+1/3),e=n(i,a,t),t=n(i,a,t-1/3)}return"rgb("+255*r+","+255*e+","+255*t+")"}(t):void 0;else{var r=o(t);t=r?t.substr(0,t.length-r.length):t,n=n?t+n:t}return{original:n+="",numbers:n.match(e)?n.match(e).map(Number):[0],strings:n.split(e)}}function g(t,n){return n.reduce(function(n,e,r){return n+t[r-1]+e})}function v(t){return(t?n(I.arr(t)?t.map(e):e(t)):[]).filter(function(t,n,e){return e.indexOf(t)===n})}function y(t,n){var r=a(n);if(I.arr(t)){var i=t.length;2!==i||I.obj(t[0])?I.fnc(n.duration)||(r.duration=n.duration/i):t={value:t}}return e(t).map(function(t,e){return e=e?0:n.delay,t=I.obj(t)&&!p(t)?t:{value:t},I.und(t.delay)&&(t.delay=e),t}).map(function(t){return u(t,r)})}function b(t,n){var e;return t.tweens.map(function(r){var a=(r=function(t,n){var e,r={};for(e in t){var a=s(t[e],n);I.arr(a)&&1===(a=a.map(function(t){return s(t,n)})).length&&(a=a[0]),r[e]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}(r,n)).value,i=l(n.target,t.name),u=e?e.to.original:i,c=(u=I.arr(a)?a[0]:u,d(I.arr(a)?a[1]:a,u));i=o(c)||o(u)||o(i);return r.isPath=p(a),r.from=h(u,i),r.to=h(c,i),r.start=e?e.end:t.offset,r.end=r.start+r.delay+r.duration,r.easing=function(t){return I.arr(t)?k.apply(this,t):F[t]}(r.easing),r.elasticity=(1e3-Math.min(Math.max(r.elasticity,1),999))/1e3,I.col(r.from.original)&&(r.round=1),e=r})}function w(t,e){return n(t.map(function(t){return e.map(function(n){var e=f(t.target,n.name);if(e){var r=b(n,t);n={type:e,property:n.name,animatable:t,tweens:r,duration:r[r.length-1].end,delay:r[0].delay}}else n=void 0;return n})})).filter(function(t){return!I.und(t)})}function x(t,n,e){var r="delay"===t?Math.min:Math.max;return n.length?r.apply(Math,n.map(function(n){return n[t]})):e[t]}function M(t){var n,e=i($,t),r=i(A,t),a=function(t){var n=v(t);return n.map(function(t,e){return{target:t,id:e,total:n.length}})}(t.targets),o=[],s=u(e,r);for(n in t)s.hasOwnProperty(n)||"targets"===n||o.push({name:n,offset:s.offset,tweens:y(t[n],r)});return u(e,{animatables:a,animations:t=w(a,o),duration:x("duration",t,r),delay:x("delay",t,r)})}function P(t){function n(){return window.Promise&&new Promise(function(t){return l=t})}function e(t){return p.reversed?p.duration-t:t}function r(t){for(var n=0,e={},r=p.animations,a={};n<r.length;){var i=r[n],u=i.animatable,o=i.tweens;a.tween=o.filter(function(n){return t<n.end})[0]||o[o.length-1],a.isPath$0=a.tween.isPath,a.round=a.tween.round,a.eased=a.tween.easing(Math.min(Math.max(t-a.tween.start-a.tween.delay,0),a.tween.duration)/a.tween.duration,a.tween.elasticity),o=g(a.tween.to.numbers.map(function(t){return function(n,e){return n=(e=t.isPath$0?0:t.tween.from.numbers[e])+t.eased*(n-e),t.isPath$0&&(n=m(t.tween.value,n)),t.round&&(n=Math.round(n*t.round)/t.round),n}}(a)),a.tween.to.strings),L[i.type](u.target,i.property,o,e,u.id),i.currentValue=o,n++,a={isPath$0:a.isPath$0,tween:a.tween,eased:a.eased,round:a.round}}if(e)for(var s in e)O||(O=c(document.body,"transform")?"transform":"-webkit-transform"),p.animatables[s].target.style[O]=e[s].join(" ");p.currentTime=t,p.progress=t/p.duration*100}function a(t){p[t]&&p[t](p)}function i(){p.remaining&&!0!==p.remaining&&p.remaining--}function u(t){var u=p.duration,c=p.offset,m=p.delay,h=p.currentTime,g=p.reversed,v=e(t);if((v=Math.min(Math.max(v,0),u))>c&&v<u?(r(v),!p.began&&v>=m&&(p.began=!0,a("begin")),a("run")):(v<=c&&0!==h&&(r(0),g&&i()),v>=u&&h!==u&&(r(u),g||i())),t>=u&&(p.remaining?(s=o,"alternate"===p.direction&&(p.reversed=!p.reversed)):(p.pause(),l(),d=n(),p.completed||(p.completed=!0,a("complete"))),f=0),p.children)for(t=p.children,u=0;u<t.length;u++)t[u].seek(v);a("update")}t=void 0===t?{}:t;var o,s,f=0,l=null,d=n(),p=M(t);return p.reset=function(){var t=p.direction,n=p.loop;p.currentTime=0,p.progress=0,p.paused=!0,p.began=!1,p.completed=!1,p.reversed="reverse"===t,p.remaining="alternate"===t&&1===n?2:n},p.tick=function(t){o=t,s||(s=o),u((f+o-s)*P.speed)},p.seek=function(t){u(e(t))},p.pause=function(){var t=T.indexOf(p);-1<t&&T.splice(t,1),p.paused=!0},p.play=function(){p.paused&&(p.paused=!1,s=0,f=p.completed?0:e(p.currentTime),T.push(p),E||C())},p.reverse=function(){p.reversed=!p.reversed,s=0,f=e(p.currentTime)},p.restart=function(){p.pause(),p.reset(),p.play()},p.finished=d,p.reset(),p.autoplay&&p.play(),p}var O,$={update:void 0,begin:void 0,run:void 0,complete:void 0,loop:1,direction:"normal",autoplay:!0,offset:0},A={duration:1e3,delay:0,easing:"easeOutElastic",elasticity:500,round:0},j="translateX translateY translateZ rotate rotateX rotateY rotateZ scale scaleX scaleY scaleZ skewX skewY".split(" "),I={arr:function(t){return Array.isArray(t)},obj:function(t){return-1<Object.prototype.toString.call(t).indexOf("Object")},svg:function(t){return t instanceof SVGElement},dom:function(t){return t.nodeType||I.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return I.hex(t)||I.rgb(t)||I.hsl(t)}},k=function(){function t(t,n,e){return(((1-3*e+3*n)*t+(3*e-6*n))*t+3*n)*t}return function(n,e,r,a){if(0<=n&&1>=n&&0<=r&&1>=r){var i=new Float32Array(11);if(n!==e||r!==a)for(var u=0;11>u;++u)i[u]=t(.1*u,n,r);return function(u){if(n===e&&r===a)return u;if(0===u)return 0;if(1===u)return 1;for(var o=0,s=1;10!==s&&i[s]<=u;++s)o+=.1;s=o+(u-i[--s])/(i[s+1]-i[s])*.1;var c=3*(1-3*r+3*n)*s*s+2*(3*r-6*n)*s+3*n;if(.001<=c){for(o=0;4>o&&0!==(c=3*(1-3*r+3*n)*s*s+2*(3*r-6*n)*s+3*n);++o){var f=t(s,n,r)-u;s=s-f/c}u=s}else if(0===c)u=s;else{s=o,o=o+.1;var l=0;do{0<(c=t(f=s+(o-s)/2,n,r)-u)?o=f:s=f}while(1e-7<Math.abs(c)&&10>++l);u=f}return t(u,e,a)}}}}(),F=function(){function t(t,n){return 0===t||1===t?t:-Math.pow(2,10*(t-1))*Math.sin(2*(t-1-n/(2*Math.PI)*Math.asin(1))*Math.PI/n)}var n,e="Quad Cubic Quart Quint Sine Expo Circ Back Elastic".split(" "),r={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],t],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(n,e){return 1-t(1-n,e)}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(n,e){return.5>n?t(2*n,e)/2:1-t(-2*n+2,e)/2}]},a={linear:k(.25,.25,.75,.75)},i={};for(n in r)i.type=n,r[i.type].forEach(function(t){return function(n,r){a["ease"+t.type+e[r]]=I.fnc(n)?n:k.apply($jscomp$this,n)}}(i)),i={type:i.type};return a}(),L={css:function(t,n,e){return t.style[n]=e},attribute:function(t,n,e){return t.setAttribute(n,e)},object:function(t,n,e){return t[n]=e},transform:function(t,n,e,r,a){r[a]||(r[a]=[]),r[a].push(n+"("+e+")")}},T=[],E=0,C=function(){function t(){E=requestAnimationFrame(n)}function n(n){var e=T.length;if(e){for(var r=0;r<e;)T[r]&&T[r].tick(n),r++;t()}else cancelAnimationFrame(E),E=0}return t}();return P.version="2.0.1",P.speed=1,P.running=T,P.remove=function(t){t=v(t);for(var n=T.length-1;0<=n;n--)for(var e=T[n],a=e.animations,i=a.length-1;0<=i;i--)r(t,a[i].animatable.target)&&(a.splice(i,1),a.length||e.pause())},P.getValue=l,P.path=function(n,e){var r=I.str(n)?t(n)[0]:n,a=e||100;return function(t){return{el:r,property:t,totalLength:r.getTotalLength()*(a/100)}}},P.setDashoffset=function(t){var n=t.getTotalLength();return t.setAttribute("stroke-dasharray",n),n},P.bezier=k,P.easings=F,P.timeline=function(t){var n=P(t);return n.duration=0,n.children=[],n.add=function(t){return e(t).forEach(function(t){var e=t.offset,r=n.duration;t.autoplay=!1,t.offset=I.und(e)?r:d(e,r),(t=P(t)).duration>r&&(n.duration=t.duration),n.children.push(t)}),n},n},P.random=function(t,n){return Math.floor(Math.random()*(n-t+1))+t},P});
  /*!
   * PACKAGED v4.1.1
   */
  !function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
  

$(document).ready(function () {
    {
      // Helper vars and functions.
      const extend = function(a, b) {
        for( let key in b ) { 
          if( b.hasOwnProperty( key ) ) {
            a[key] = b[key];
          }
        }
        return a;
      };
    
      // from http://www.quirksmode.org/js/events_properties.html#position
      const getMousePos = function(ev) {
        let posx = 0;
        let posy = 0;
        if (!ev) ev = window.event;
        if (ev.pageX || ev.pageY) 	{
          posx = ev.pageX;
          posy = ev.pageY;
        }
        else if (ev.clientX || ev.clientY) 	{
          posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
          posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return { x : posx, y : posy };
      };
    
      const TiltObj = function(el, options) {
        this.el = el;
        this.options = extend({}, this.options);
        extend(this.options, options);
        this.DOM = {};
        this.DOM.img = this.el.querySelector('.letter-fon');
        this.DOM.title = this.el.querySelector('.anim-block');
        this._initEvents();
      }
    
      TiltObj.prototype.options = {
        movement: {
          img : { translation : {x: -40, y: -40} },
          title : { translation : {x: 20, y: 20} },
        }
      };
    
      TiltObj.prototype._initEvents = function() {
        this.mouseenterFn = (ev) => {
          anime.remove(this.DOM.img);
          anime.remove(this.DOM.title);
        };
        
        this.mousemoveFn = (ev) => {
          requestAnimationFrame(() => this._layout(ev));
        };
        
        this.mouseleaveFn = (ev) => {
          requestAnimationFrame(() => {
            anime({
              targets: [this.DOM.img, this.DOM.title],
              duration: 1500,
              easing: 'easeOutElastic',
              elasticity: 400,
              translateX: 0,
              translateY: 0
            });
          });
        };
    
        this.el.addEventListener('mousemove', this.mousemoveFn);
        this.el.addEventListener('mouseleave', this.mouseleaveFn);
        this.el.addEventListener('mouseenter', this.mouseenterFn);
      };
    
      TiltObj.prototype._layout = function(ev) {
        // Mouse position relative to the document.
        const mousepos = getMousePos(ev);
        // Document scrolls.
        const docScrolls = {left : document.body.scrollLeft + document.documentElement.scrollLeft, top : document.body.scrollTop + document.documentElement.scrollTop};
        const bounds = this.el.getBoundingClientRect();
        // Mouse position relative to the main element (this.DOM.el).
        const relmousepos = { x : mousepos.x - bounds.left - docScrolls.left, y : mousepos.y - bounds.top - docScrolls.top };
    
        // Movement settings for the animatable elements.
        const t = {
          img: this.options.movement.img.translation,
          title: this.options.movement.title.translation,
        };
          
        const transforms = {
          img : {
            x: (-1*t.img.x - t.img.x)/bounds.width*relmousepos.x + t.img.x,
            y: (-1*t.img.y - t.img.y)/bounds.height*relmousepos.y + t.img.y
          },
          title : {
            x: (-1*t.title.x - t.title.x)/bounds.width*relmousepos.x + t.title.x,
            y: (-1*t.title.y - t.title.y)/bounds.height*relmousepos.y + t.title.y
          }
        };
        this.DOM.img.style.WebkitTransform = this.DOM.img.style.transform = 'translateX(' + transforms.img.x + 'px) translateY(' + transforms.img.y + 'px)';
        this.DOM.title.style.WebkitTransform = this.DOM.title.style.transform = 'translateX(' + transforms.title.x + 'px) translateY(' + transforms.title.y + 'px)';
      };
    
      const init = function() {
        imagesLoaded(document.body, () => {
          Array.from(document.querySelectorAll('.s-empowering .hover-effect')).forEach(el => new TiltObj(el));
        });
      }
    
      init();
    };

});
}
