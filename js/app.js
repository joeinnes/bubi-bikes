!function(){"use strict";var r="undefined"==typeof window?global:window;if("function"!=typeof r.require){var e={},t={},n={},a={}.hasOwnProperty,i=/^\.\.?(\/|$)/,o=function(r,e){for(var t,n=[],a=(i.test(e)?r+"/"+e:e).split("/"),o=0,c=a.length;o<c;o++)t=a[o],".."===t?n.pop():"."!==t&&""!==t&&n.push(t);return n.join("/")},c=function(r){return r.split("/").slice(0,-1).join("/")},s=function(e){return function(t){var n=o(c(e),t);return r.require(n,e)}},l=function(r,e){var n=null;n=v&&v.createHot(r);var a={id:r,exports:{},hot:n};return t[r]=a,e(a.exports,s(r),a),a.exports},u=function(r){return n[r]?u(n[r]):r},f=function(r,e){return u(o(c(r),e))},p=function(r,n){null==n&&(n="/");var i=u(r);if(a.call(t,i))return t[i].exports;if(a.call(e,i))return l(i,e[i]);throw new Error("Cannot find module '"+r+"' from '"+n+"'")};p.alias=function(r,e){n[e]=r};var d=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,m=function(r){if(d.test(r)){var e=r.replace(d,"");a.call(n,e)&&n[e].replace(d,"")!==e+"/index"||(n[e]=r)}if(h.test(r)){var t=r.replace(h,"");a.call(n,t)||(n[t]=r)}};p.register=p.define=function(r,n){if("object"==typeof r)for(var i in r)a.call(r,i)&&p.register(i,r[i]);else e[r]=n,delete t[r],m(r)},p.list=function(){var r=[];for(var t in e)a.call(e,t)&&r.push(t);return r};var v=r._hmr&&new r._hmr(f,p,e,t);p._cache=t,p.hmr=v&&v.wrap,p.brunch=!0,r.require=p}}(),function(){window;require.register("initialize.js",function(r,e,t){"use strict";document.addEventListener("DOMContentLoaded",function(){e("./main")})}),require.register("main.js",function(r,e,t){"use strict";var n=e("leaflet");e("whatwg-fetch"),e("drmonty-leaflet-awesome-markers");var a=47.4979,i=19.0402,o=n.map("mapcanvas").setView([a,i],15);n.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',subdomains:"abcd",maxZoom:19}).addTo(o);var c="http://futar.bkk.hu/bkk-utvonaltervezo-api/ws/otp/api/where/bicycle-rental.json",s="https://crossorigin.me/";window.fetch(s+c).then(function(r){return r.json()}).then(function(r){var e=r.data.list;e.forEach(function(r){var e="red";r.bikes>3?e="green":r.bikes>1&&(e="yellow");var t=n.AwesomeMarkers.icon({icon:"bicycle",prefix:"fa",markerColor:e}),a=n.marker([r.lat,r.lon],{icon:t}).addTo(o);a.bindPopup("<h1>"+r.name+'</h1><div style="float: right" id="directions"><a href="https://maps.google.com/maps?saddr=here&daddr='+r.lat+","+r.lon+'&dirflg=w" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i></a></div><strong>Available:</strong> '+r.bikes+"<br /><strong>Capacity:</strong> "+r.spaces)})})["catch"](function(r){console.error(r)})}),require.register("___globals___",function(r,e,t){})}(),require("___globals___");