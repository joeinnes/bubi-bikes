!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var r={},t={},n={},a={}.hasOwnProperty,i=/^\.\.?(\/|$)/,o=function(e,r){for(var t,n=[],a=(i.test(r)?e+"/"+r:r).split("/"),o=0,c=a.length;o<c;o++)t=a[o],".."===t?n.pop():"."!==t&&""!==t&&n.push(t);return n.join("/")},c=function(e){return e.split("/").slice(0,-1).join("/")},s=function(r){return function(t){var n=o(c(r),t);return e.require(n,r)}},l=function(e,r){var n=v&&v.createHot(e),a={id:e,exports:{},hot:n};return t[e]=a,r(a.exports,s(e),a),a.exports},u=function(e){var r=n[e];return r&&e!==r?u(r):e},f=function(e,r){return u(o(c(e),r))},p=function(e,n){null==n&&(n="/");var i=u(e);if(a.call(t,i))return t[i].exports;if(a.call(r,i))return l(i,r[i]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};p.alias=function(e,r){n[r]=e};var d=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,m=function(e){if(d.test(e)){var r=e.replace(d,"");a.call(n,r)&&n[r].replace(d,"")!==r+"/index"||(n[r]=e)}if(h.test(e)){var t=e.replace(h,"");a.call(n,t)||(n[t]=e)}};p.register=p.define=function(e,n){if(e&&"object"==typeof e)for(var i in e)a.call(e,i)&&p.register(i,e[i]);else r[e]=n,delete t[e],m(e)},p.list=function(){var e=[];for(var t in r)a.call(r,t)&&e.push(t);return e};var v=e._hmr&&new e._hmr(f,p,r,t);p._cache=t,p.hmr=v&&v.wrap,p.brunch=!0,e.require=p}}(),function(){"undefined"==typeof window?this:window;require.register("initialize.js",function(e,r,t){"use strict";document.addEventListener("DOMContentLoaded",function(){r("./main")})}),require.register("main.js",function(e,r,t){"use strict";var n=r("leaflet");r("whatwg-fetch"),r("drmonty-leaflet-awesome-markers");var a=47.4979,i=19.0402,o=n.map("mapcanvas").setView([a,i],15);n.tileLayer("http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',subdomains:"abcd",maxZoom:19}).addTo(o);var c="https://futar.bkk.hu/api/query/v1/ws/otp/api/where/bicycle-rental.json",s="https://cors-anywhere.herokuapp.com/";window.fetch(s+c).then(function(e){return e.json()}).then(function(e){var r=e.data.list;r.forEach(function(e){var r="red";e.bikes>3?r="green":e.bikes>1&&(r="yellow");var t=n.AwesomeMarkers.icon({icon:"bicycle",prefix:"fa",markerColor:r}),a=n.marker([e.lat,e.lon],{icon:t}).addTo(o);a.bindPopup("<h1>"+e.name+'</h1><div style="float: right" id="directions"><a href="https://maps.google.com/maps?saddr=here&daddr='+e.lat+","+e.lon+'&dirflg=w" target="_blank"><i class="fa fa-location-arrow" aria-hidden="true"></i></a></div><strong>Available:</strong> '+e.bikes+"<br /><strong>Capacity:</strong> "+e.spaces)})})["catch"](function(e){console.error(e)})}),require.register("___globals___",function(e,r,t){})}(),require("___globals___");