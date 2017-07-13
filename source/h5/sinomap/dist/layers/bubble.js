var BubbleLayer=function(){"use strict";function t(t){var n=null;return this.conf.data.forEach(function(e){e.id===t&&(n=e)}),n}function n(t,n,e,r){t.beginPath(),t.arc(n,e,r,0,2*Math.PI),t.fill()}function e(t,e){var r=o(e.point,2),i=r[0],a=r[1];t.ctx.fillStyle=this.conf.color,n(t.ctx,i,a,e.size);var u=t.ctx.isPointInPath(t.mouseX,t.mouseY);if(u){t.ctx.fillStyle="rgba(255, 255, 255, 0.4)",n(t.ctx,i,a,e.size);var l=this.findBubble(e.id).id;this.hoverId!==l&&(null!==this.hoverId&&this.onBubbleLeave(this.hoverId),this.onBubbleEnter(l),this.hoverId=l)}return u}var r=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")},i=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}(),o=function(){function t(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(e.push(a.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&u.return&&u.return()}finally{if(i)throw o}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a={color:"lightcoral",data:[],onBubbleEnter:function(){},onBubbleLeave:function(){}};return function(){function n(i){r(this,n),this.drawBubble=e.bind(this),this.findBubble=t.bind(this),this.conf=Object.assign({},a,i),this.conf.data=this.conf.data.map(function(t,n){return Object.assign(t,{id:n})}),this.hoverId=null}return i(n,[{key:"afterMapDraw",value:function(t){var n=this,e=this.conf.data,r=t.utils.convert,i=e.map(function(t){return Object.assign(t,{point:r(t.coordinate)})}),o=!1;i.forEach(function(e){n.drawBubble(t,e)&&(o=!0)}),o||null===this.hoverId||(this.onBubbleLeave(this.hoverId),this.hoverId=null)}},{key:"onBubbleEnter",value:function(t){var n=this.findBubble(t);this.conf.onBubbleEnter(n)}},{key:"onBubbleLeave",value:function(t){var n=this.findBubble(t);this.conf.onBubbleLeave(n)}}]),n}()}();
