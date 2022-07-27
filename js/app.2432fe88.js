(function(e){function t(t){for(var o,c,i=t[0],s=t[1],l=t[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},r={app:0},a=[];function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/CSC3007-assignment5/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r=(n("b0c0"),Object(o["f"])("section",{class:"hero"},[Object(o["f"])("div",{class:"hero-body"},[Object(o["f"])("p",{class:"title"},"Peikai Tan"),Object(o["f"])("p",{class:"subtitle"},"Singapore PSI Plot (OneMap)")])],-1)),a={class:"container"},c={class:"columns"},i={class:"column"},s={class:"card-content"},l={class:"card-content"},u=Object(o["f"])("div",{class:"column is-three-fifths"},[Object(o["f"])("div",{id:"mapdiv",style:{height:"550px"}})],-1),d={id:"tooltip",class:"column"},p={key:0,class:"card-content"},b=Object(o["f"])("br",null,null,-1),f=Object(o["f"])("br",null,null,-1),m=Object(o["f"])("br",null,null,-1);function h(e,t,n,h,v,O){return Object(o["g"])(),Object(o["c"])(o["a"],null,[r,Object(o["f"])("div",a,[Object(o["f"])("div",c,[Object(o["f"])("div",i,[Object(o["f"])("div",s,"Updated: "+Object(o["h"])(v.updated),1),Object(o["f"])("div",l,[Object(o["f"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return O.fetchData.apply(O,arguments)})},"Update")])]),u,Object(o["f"])("div",d,[v.hovered?(Object(o["g"])(),Object(o["c"])("div",p,[Object(o["e"])(" Region: "+Object(o["h"])(e.name)+" ",1),b,Object(o["e"])(" PM10 sub index: "+Object(o["h"])(v.pm10)+" ",1),f,Object(o["e"])(" CO sub index: "+Object(o["h"])(e.co)+" ",1),m,Object(o["e"])(" SO2 sub index: "+Object(o["h"])(e.so2),1)])):Object(o["d"])("",!0)])])])],64)}n("99af"),n("d81d");var v=n("ade3"),O=n("2909"),j=n("898b"),y=n("e11e"),g={name:"App",data:function(){return{map:null,markerLayer:null,updated:null,hovered:null,pm10:null}},methods:{buildCircleSVG:function(e){return'<svg height="50" width="50"><circle cx="25" cy="25" r="20" stroke="black" stroke-width="3" fill="white"/><text x="50%" y="50%" text-anchor="middle" dy=".3em">'+e+"</text></svg>"},fetchData:function(){var e=this;this.markerLayer.clearLayers(),j["a"]("https://api.data.gov.sg/v1/environment/psi").then((function(t){e.updated=Date(t.items[0].update_timestamp);var n=Object.assign.apply(Object,[{}].concat(Object(O["a"])(t.region_metadata.map((function(e){return Object(v["a"])({},e.name,[e.label_location.latitude,e.label_location.longitude])}))))),o=t.items[0].readings.psi_twenty_four_hourly;console.log(t);var r=function(r){var a=e.buildCircleSVG(o[r]),c=y["divIcon"]({className:"svgIcon",iconSize:[50,50],html:a}),i=y["marker"](n[r],{icon:c}).addTo(e.markerLayer);i.on("mouseover",(function(){e.hovered=!0,e.name=r,e.pm10=t.items[0].readings.pm10_sub_index[r],e.co=t.items[0].readings.co_sub_index[r],e.so2=t.items[0].readings.so2_sub_index[r]})),i.on("mouseout",(function(){e.hovered=null})),i.bindPopup("omg! this is not a typo.")};for(var a in o)r(a)}))}},components:{},mounted:function(){var e=y["bounds"]([1.56073,104.11475],[1.16,103.602]).getCenter();this.map=y["map"]("mapdiv",{zoomControl:!1}).setView([e.x,e.y],11);var t=y["tileLayer"]("https://maps-c.onemap.sg/v3/Grey/{z}/{x}/{y}.png",{detectRetina:!0,maxZoom:11,minZoom:10});this.map.setMaxBounds([[1.46073,104.1147],[1.16,103.602]]),t.addTo(this.map),this.markerLayer=y["layerGroup"]().addTo(this.map),this.fetchData()}};n("64be");g.render=h;var x=g;Object(o["b"])(x).mount("#app")},"64be":function(e,t,n){"use strict";n("c894")},c894:function(e,t,n){}});
//# sourceMappingURL=app.2432fe88.js.map