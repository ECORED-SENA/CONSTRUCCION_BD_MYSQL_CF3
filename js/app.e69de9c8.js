(function(e){function n(n){for(var o,r,c=n[0],s=n[1],d=n[2],u=0,l=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(t,r)&&t[r]&&l.push(t[r][0]),t[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(n);while(l.length)l.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,n=0;n<i.length;n++){for(var a=i[n],o=!0,r=1;r<a.length;r++){var c=a[r];0!==t[c]&&(o=!1)}o&&(i.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},r={app:0},t={app:0},i=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"af5ea64a","chunk-0206bfa0":"6cf2414f","chunk-0cfca828":"7c5e1b9d","chunk-13303073":"497a6dde","chunk-13a6037e":"63a82a0b","chunk-1479a341":"8341b0fb","chunk-1fb07a61":"201d6f65","chunk-2c06842c":"09cf6cf5","chunk-2d0dad62":"ac319220","chunk-2d208d90":"59f0a89d","chunk-2d21d0e2":"bcc91df5","chunk-2d22c123":"eda37dd7","chunk-2e80bb9a":"0ec4d550","chunk-4cdd78c0":"aa4dc7ae","chunk-515a8379":"192280ad","chunk-522cec8c":"248d99ec","chunk-59974754":"3cef79f0","chunk-5a6377df":"52d825ae","chunk-7432e4d4":"2d2ce70b","chunk-766a929b":"3613a2e4","chunk-c796899c":"0a3500ee",comple:"0e4cab4d",creditos:"24ce713e",glosario:"07f5355b",intro:"0ed1236d",referencias:"22ddeac3",tema1:"39ae1a55",tema2:"969457a6",tema3:"a27c09ad"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-0cfca828":1,"chunk-13303073":1,"chunk-1479a341":1,"chunk-1fb07a61":1,"chunk-515a8379":1,"chunk-522cec8c":1,"chunk-59974754":1,"chunk-5a6377df":1,"chunk-7432e4d4":1,"chunk-766a929b":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};r[e]?n.push(r[e]):0!==r[e]&&a[e]&&n.push(r[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0cfca828":"99a35118","chunk-13303073":"99a35118","chunk-13a6037e":"31d6cfe0","chunk-1479a341":"99a35118","chunk-1fb07a61":"99a35118","chunk-2c06842c":"31d6cfe0","chunk-2d0dad62":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"6cb84c5a","chunk-522cec8c":"99a35118","chunk-59974754":"9d07bc62","chunk-5a6377df":"eecfadba","chunk-7432e4d4":"99a35118","chunk-766a929b":"92cde18b","chunk-c796899c":"31d6cfe0",comple:"59a4b5fe",creditos:"6cb84c5a",glosario:"c9addb89",intro:"0e433876",referencias:"9664865c",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+o,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var d=i[c],u=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(u===o||u===t))return n()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){d=l[c],u=d.getAttribute("data-href");if(u===o||u===t)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=o,delete r[e],f.parentNode.removeChild(f),a(i)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){r[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=i);var d,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var l=new Error;d=function(n){u.onerror=u.onload=null,clearTimeout(f);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,a[1](l)}t[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:u})}),12e4);u.onerror=u.onload=d,document.head.appendChild(u)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],u=d.push.bind(d);d.push=n,d=d.slice();for(var l=0;l<d.length;l++)n(d[l]);var f=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"212f":function(e,n,a){e.exports=a.p+"img/banner_principal.edcd4625.svg"},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view"),a("footer")],1)],1),a("BarraAvance")],1)},t=[],i={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}}},c=i,s=(a("cf25"),a("2877")),d=Object(s["a"])(c,r,t,!1,null,null,null),u=d.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("8c4f")),f=a("ae58"),m=a("7e58");o["a"].use(l["a"]);var p=new l["a"]({routes:[{path:"/",name:"inicio",component:f["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:m["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=p,b=a("1c2c"),g=(a("becf"),a("7b17"),a("ab8b"),a("a3a0"),a("4bc7"),a("78df"),{global:{componenteFormativo:"Estudio de caso Import Tech S.A.S.",descripcionCurso:"Para el desarrollo práctico de trabajo con bases de datos relacionales MySQL nos apalancaremos en la utilización de un caso de estudio el cual se desarrollará y permitirá ir avanzando en la apropiación y uso del SGBB de MySQL.",imagenBannerPrincipal:a("a950"),fondoBannerPrincipal:a("212f")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Caso de estudio",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Diseño modelo entidad relación",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Modelo físico",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Creando el modelo entidad relación",hash:"t_1_3"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},creditos:{liderEquipo:{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo"},contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"Henry Eduardo Bastidas Paruma",cargo:"Experto temático - Instructor",centro:"Centro de Teleinformática y Producción Industrial",regional:"Regional Cauca"},{nombre:"Gloria Esperanza Ortiz Russi",cargo:"Diseñadora y evaluadora instruccional",centro:"Centro de Diseño y Metrología",regional:"Regional Distrito Capital"},{nombre:"Martha Isabel Martínez Vargas",cargo:"Productora audiovisual",centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrección de estilo",centro:"Centro para la Industria de la Comunicación Gráfica",regional:"Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional"},{nombre:["Carlos Julián Ramírez Benítez","Daniel Ricardo Mutis Gómez"],cargo:"Diseño web"},{nombre:["Daniela Muñoz Bedoya","Gilberto Junior Rodríguez Rodríguez","Oleg Litvin","Wilson Andrés Arenales Cáceres","Zuleidy Maria Ruiz Torres"],cargo:"Producción audiovisual"},{nombre:"Walter Roa Serrano",cargo:"Desarrollo front-end"},{nombre:"Jenny Paola Montillo Gélvez",cargo:"Validación de diseño y contenido"},{centro:"Centro Industrial del Diseño y la Manufactura",regional:"Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios",regional:"Regional Tolima"}]},referencias:[{referencia:"Carrión, J. (2017). Diferencia entre datos, información y conocimiento.",link:"http://iibi.unam.mx/voutssasmt/documentos/dato%20informacion%20conocimiento.pdf"},{referencia:"Cobo, Á. (2007). Diseño y programación de bases de datos. Visión Libros."},{referencia:"Piñeiro, G., J. (2013). Bases de datos relacionales y modelado de datos. Ediciones Paraninfo, S.A."},{referencia:"MySQL AB. (2001). MySQL. Sun Microsystems Oracle Corporation."}],glosario:[{termino:"Atributo",significado:"son las características, rasgos y propiedades de una entidad que toman como valor una instancia particular."},{termino:"Datos",significado:"los datos son la mínima unidad semántica, y se corresponden con elementos primarios de información que por sí solos son irrelevantes como apoyo a la toma de decisiones."},{termino:"Información",significado:"conjunto de datos procesados y que tienen un significado (relevancia, propósito y contexto) y que, por lo tanto, son de utilidad para quien debe tomar decisiones."},{termino:"MySQL",significado:'<span style="display:none">_</span>My Structured Query Language o Lenguaje de consulta estructurado.'},{termino:"Registro",significado:"guardan una serie de características similares o que pueden ser agrupados o clasificados dadas sus características comunes en grupos bien delimitados."},{termino:"Relación",significado:"Vínculo que permite definir una dependencia entre los conjuntos de dos o más entidades."},{termino:"SGDB",significado:"sistema de gestión de base de datos."},{termino:"Tabla - entidad",significado:"la entidad es cualquier clase de objeto o conjunto de elementos presentes o no, en un contexto determinado dado por el sistema de información."}],complementario:[]});o["a"].prototype.$config=g;var v=a("9224");o["a"].prototype.$package=v,o["a"].config.productionTip=!1,new o["a"]({router:h,store:b["a"],render:function(e){return e(u)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"3.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","bootstrap":"^5.0.0-beta3","core-js":"^3.6.5","ecored-base-pkg":"2.1.0","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.12","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},a3a0:function(e,n,a){},a950:function(e,n,a){e.exports=a.p+"img/img_banner.f543243b.svg"},cf25:function(e,n,a){"use strict";a("fea6")},fea6:function(e,n,a){}});
//# sourceMappingURL=app.e69de9c8.js.map