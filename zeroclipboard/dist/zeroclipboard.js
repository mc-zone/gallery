define("gallery/zeroclipboard/1.1.7/zeroclipboard",[],function(a,b,c){!function(){"use strict";var a,b=function(a,b){var c=a.style[b];if(a.currentStyle?c=a.currentStyle[b]:window.getComputedStyle&&(c=document.defaultView.getComputedStyle(a,null).getPropertyValue(b)),"auto"==c&&"cursor"==b)for(var d=["a"],e=0;e<d.length;e++)if(a.tagName.toLowerCase()==d[e])return"pointer";return c},d=function(a){if(n.prototype._singleton){a||(a=window.event);var b;this!==window?b=this:a.target?b=a.target:a.srcElement&&(b=a.srcElement),n.prototype._singleton.setCurrent(b)}},e=function(a,b,c){a.addEventListener?a.addEventListener(b,c,!1):a.attachEvent&&a.attachEvent("on"+b,c)},f=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},g=function(a,b){if(a.addClass)return a.addClass(b),a;if(b&&"string"==typeof b){var c=(b||"").split(/\s+/);if(1===a.nodeType)if(a.className){for(var d=" "+a.className+" ",e=a.className,f=0,g=c.length;g>f;f++)d.indexOf(" "+c[f]+" ")<0&&(e+=" "+c[f]);a.className=e.replace(/^\s+|\s+$/g,"")}else a.className=b}return a},h=function(a,b){if(a.removeClass)return a.removeClass(b),a;if(b&&"string"==typeof b||void 0===b){var c=(b||"").split(/\s+/);if(1===a.nodeType&&a.className)if(b){for(var d=(" "+a.className+" ").replace(/[\n\t]/g," "),e=0,f=c.length;f>e;e++)d=d.replace(" "+c[e]+" "," ");a.className=d.replace(/^\s+|\s+$/g,"")}else a.className=""}return a},i=function(a){var c={left:0,top:0,width:a.width||a.offsetWidth||0,height:a.height||a.offsetHeight||0,zIndex:9999},d=b(a,"zIndex");for(d&&"auto"!=d&&(c.zIndex=parseInt(d,10));a;){var e=parseInt(b(a,"borderLeftWidth"),10),f=parseInt(b(a,"borderTopWidth"),10);c.left+=isNaN(a.offsetLeft)?0:a.offsetLeft,c.left+=isNaN(e)?0:e,c.top+=isNaN(a.offsetTop)?0:a.offsetTop,c.top+=isNaN(f)?0:f,a=a.offsetParent}return c},j=function(a){return(a.indexOf("?")>=0?"&":"?")+"nocache="+(new Date).getTime()},k=function(a){var b=[];return a.trustedDomains&&("string"==typeof a.trustedDomains?b.push("trustedDomain="+a.trustedDomains):b.push("trustedDomain="+a.trustedDomains.join(","))),b.join("&")},l=function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;d>c;c++)if(b[c]===a)return c;return-1},m=function(a){if("string"==typeof a)throw new TypeError("ZeroClipboard doesn't accept query strings.");return a.length?a:[a]},n=function(a,b){if(a&&(n.prototype._singleton||this).glue(a),n.prototype._singleton)return n.prototype._singleton;n.prototype._singleton=this,this.options={};for(var c in p)this.options[c]=p[c];for(var d in b)this.options[d]=b[d];this.handlers={},n.detectFlashSupport()&&q()},o=[];n.prototype.setCurrent=function(c){a=c,this.reposition(),c.getAttribute("title")&&this.setTitle(c.getAttribute("title")),this.setHandCursor("pointer"==b(c,"cursor"))},n.prototype.setText=function(a){a&&""!==a&&(this.options.text=a,this.ready()&&this.flashBridge.setText(a))},n.prototype.setTitle=function(a){a&&""!==a&&this.htmlBridge.setAttribute("title",a)},n.prototype.setSize=function(a,b){this.ready()&&this.flashBridge.setSize(a,b)},n.prototype.setHandCursor=function(a){this.ready()&&this.flashBridge.setHandCursor(a)},n.version="1.1.7";var p={moviePath:"ZeroClipboard.swf",trustedDomains:null,text:null,hoverClass:"zeroclipboard-is-hover",activeClass:"zeroclipboard-is-active",allowScriptAccess:"sameDomain"};n.setDefaults=function(a){for(var b in a)p[b]=a[b]},n.destroy=function(){n.prototype._singleton.unglue(o);var a=n.prototype._singleton.htmlBridge;a.parentNode.removeChild(a),delete n.prototype._singleton},n.detectFlashSupport=function(){var a=!1;try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash")&&(a=!0)}catch(b){navigator.mimeTypes["application/x-shockwave-flash"]&&(a=!0)}return a};var q=function(){var a=n.prototype._singleton,b=document.getElementById("global-zeroclipboard-html-bridge");if(!b){var c='      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="global-zeroclipboard-flash-bridge" width="100%" height="100%">         <param name="movie" value="'+a.options.moviePath+j(a.options.moviePath)+'"/>         <param name="allowScriptAccess" value="'+a.options.allowScriptAccess+'"/>         <param name="scale" value="exactfit"/>         <param name="loop" value="false"/>         <param name="menu" value="false"/>         <param name="quality" value="best" />         <param name="bgcolor" value="#ffffff"/>         <param name="wmode" value="transparent"/>         <param name="flashvars" value="'+k(a.options)+'"/>         <embed src="'+a.options.moviePath+j(a.options.moviePath)+'"           loop="false" menu="false"           quality="best" bgcolor="#ffffff"           width="100%" height="100%"           name="global-zeroclipboard-flash-bridge"           allowScriptAccess="always"           allowFullScreen="false"           type="application/x-shockwave-flash"           wmode="transparent"           pluginspage="http://www.macromedia.com/go/getflashplayer"           flashvars="'+k(a.options)+'"           scale="exactfit">         </embed>       </object>';b=document.createElement("div"),b.id="global-zeroclipboard-html-bridge",b.setAttribute("class","global-zeroclipboard-container"),b.setAttribute("data-clipboard-ready",!1),b.style.position="absolute",b.style.left="-9999px",b.style.top="-9999px",b.style.width="15px",b.style.height="15px",b.style.zIndex="9999",b.innerHTML=c,document.body.appendChild(b)}a.htmlBridge=b,a.flashBridge=document["global-zeroclipboard-flash-bridge"]||b.children[0].lastElementChild};n.prototype.resetBridge=function(){this.htmlBridge.style.left="-9999px",this.htmlBridge.style.top="-9999px",this.htmlBridge.removeAttribute("title"),this.htmlBridge.removeAttribute("data-clipboard-text"),h(a,this.options.activeClass),a=null,this.options.text=null},n.prototype.ready=function(){var a=this.htmlBridge.getAttribute("data-clipboard-ready");return"true"===a||a===!0},n.prototype.reposition=function(){if(!a)return!1;var b=i(a);this.htmlBridge.style.top=b.top+"px",this.htmlBridge.style.left=b.left+"px",this.htmlBridge.style.width=b.width+"px",this.htmlBridge.style.height=b.height+"px",this.htmlBridge.style.zIndex=b.zIndex+1,this.setSize(b.width,b.height)},n.dispatch=function(a,b){n.prototype._singleton.receiveEvent(a,b)},n.prototype.on=function(a,b){for(var c=a.toString().split(/\s/g),d=0;d<c.length;d++)a=c[d].toLowerCase().replace(/^on/,""),this.handlers[a]||(this.handlers[a]=b);this.handlers.noflash&&!n.detectFlashSupport()&&this.receiveEvent("onNoFlash",null)},n.prototype.addEventListener=n.prototype.on,n.prototype.off=function(a,b){for(var c=a.toString().split(/\s/g),d=0;d<c.length;d++){a=c[d].toLowerCase().replace(/^on/,"");for(var e in this.handlers)e===a&&this.handlers[e]===b&&delete this.handlers[e]}},n.prototype.removeEventListener=n.prototype.off,n.prototype.receiveEvent=function(b,c){b=b.toString().toLowerCase().replace(/^on/,"");var d=a;switch(b){case"load":if(c&&parseFloat(c.flashVersion.replace(",",".").replace(/[^0-9\.]/gi,""))<10)return this.receiveEvent("onWrongFlash",{flashVersion:c.flashVersion}),void 0;this.htmlBridge.setAttribute("data-clipboard-ready",!0);break;case"mouseover":g(d,this.options.hoverClass);break;case"mouseout":h(d,this.options.hoverClass),this.resetBridge();break;case"mousedown":g(d,this.options.activeClass);break;case"mouseup":h(d,this.options.activeClass);break;case"datarequested":var e=d.getAttribute("data-clipboard-target"),f=e?document.getElementById(e):null;if(f){var i=f.value||f.textContent||f.innerText;i&&this.setText(i)}else{var j=d.getAttribute("data-clipboard-text");j&&this.setText(j)}break;case"complete":this.options.text=null}if(this.handlers[b]){var k=this.handlers[b];"function"==typeof k?k.call(d,this,c):"string"==typeof k&&window[k].call(d,this,c)}},n.prototype.glue=function(a){a=m(a);for(var b=0;b<a.length;b++)-1==l(a[b],o)&&(o.push(a[b]),e(a[b],"mouseover",d))},n.prototype.unglue=function(a){a=m(a);for(var b=0;b<a.length;b++){f(a[b],"mouseover",d);var c=l(a[b],o);-1!=c&&o.splice(c,1)}},"undefined"!=typeof c?c.exports=n:"function"==typeof define&&define.amd?define(function(){return n}):window.ZeroClipboard=n}(),window.ZeroClipboard=c.exports});
