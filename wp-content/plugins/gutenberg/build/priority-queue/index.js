window.wp=window.wp||{},window.wp.priorityQueue=function(e){var n={};function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var u in e)t.d(r,u,function(n){return e[n]}.bind(null,u));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=536)}({536:function(e,n,t){"use strict";t.r(n),t.d(n,"createQueue",(function(){return u}));var r="undefined"==typeof window?function(e){setTimeout((function(){return e(Date.now())}),0)}:window.requestIdleCallback||window.requestAnimationFrame,u=function(){var e=[],n=new WeakMap,t=!1,u=function u(o){var i="number"==typeof o?function(){return!1}:function(){return o.timeRemaining()>0};do{if(0===e.length)return void(t=!1);var f=e.shift();n.get(f)(),n.delete(f)}while(i());r(u)};return{add:function(o,i){n.has(o)||e.push(o),n.set(o,i),t||(t=!0,r(u))},flush:function(t){if(!n.has(t))return!1;var r=e.indexOf(t);e.splice(r,1);var u=n.get(t);return n.delete(t),u(),!0},reset:function(){e=[],n=new WeakMap,t=!1}}}}});