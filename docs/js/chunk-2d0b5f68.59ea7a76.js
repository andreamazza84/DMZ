(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b5f68"],{"1aac":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-section",{attrs:{id:"gallery-alt",space:"0"}})},n=[],s=(r("7db0"),r("fb6a"),r("b0c0"),r("4e827"),{name:"SectionProjectGalleryAlt",computed:{activeProject:function(){var t=this.$route.params.id,e=this.appData.projects.find((function(e){return+e.id===+t})),r=[];for(var a in e.src)r.push(e.src[a]);r=r.slice();var n=this.$vuetify.breakpoint.name,s={xs:3,sm:2,md:3,lg:4,xl:4};return r.slice(0,s[n])},shuffledProjects:function(){var t=this.appData.projects.slice(),e=this.$vuetify.breakpoint.name;t.sort((function(){return Math.random()-.5}));var r={xs:3,sm:2,md:3,lg:4,xl:4};return t.slice(0,r[e])}}}),c=s,i=r("2877"),o=Object(i["a"])(c,a,n,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=chunk-2d0b5f68.59ea7a76.js.map