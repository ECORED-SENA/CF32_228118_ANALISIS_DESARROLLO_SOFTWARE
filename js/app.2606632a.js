(function(e){function n(n){for(var o,i,r=n[0],s=n[1],u=n[2],d=0,l=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&l.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(n);while(l.length)l.shift()();return c.push.apply(c,u||[]),a()}function a(){for(var e,n=0;n<c.length;n++){for(var a=c[n],o=!0,i=1;i<a.length;i++){var r=a[i];0!==t[r]&&(o=!1)}o&&(c.splice(n--,1),e=s(s.s=a[0]))}return e}var o={},i={app:0},t={app:0},c=[];function r(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"a99eaf75","chunk-0206bfa0":"07f4fcb8","chunk-110f1f0b":"c729ecf3","chunk-13a6037e":"725eca6a","chunk-179248a2":"0882ec97","chunk-18f95272":"bb47be6d","chunk-2a9fce91":"79146cce","chunk-2c06842c":"f5617033","chunk-2d0c5615":"01eba69d","chunk-2d0e96ec":"ec734bee","chunk-2d208d90":"ab67193c","chunk-2d21d0e2":"f77c22e4","chunk-2d22c123":"c9115eca","chunk-2e80bb9a":"b3e4ecbc","chunk-319206de":"06f535cf","chunk-36769079":"0093655a","chunk-4cdd78c0":"b1eae698","chunk-515a8379":"471b9110","chunk-53ccb27e":"03f89fab","chunk-55d286b8":"69a8245e","chunk-59974754":"d7b5c639","chunk-5d1ce150":"33dbeb12","chunk-60cbc06b":"e7f70342","chunk-623f2040":"f9fac6f0","chunk-659152b8":"3f7b8817","chunk-6a43ec24":"3e891bb4","chunk-6e1e538a":"034b6f92","chunk-6e613899":"2a976d39","chunk-766a929b":"1ae4942d","chunk-7794bb60":"f954ae38","chunk-c796899c":"ed37a8e2","chunk-e8a7823a":"c0dd9220","chunk-fde47172":"7ec6a62b",comple:"cb7f21ad",creditos:"a69d078c",glosario:"5880c608",intro:"772bb35d",referencias:"ff7bbab5",sintesis:"4e463d6b",tema1:"a88bf333",tema2:"21d54376",tema3:"6f3e0475",tema4:"4aedd10f"}[e]+".js"}function s(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?n.push(i[e]):0!==i[e]&&a[e]&&n.push(i[e]=new Promise((function(n,a){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"144fe8e0","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"a40274bd","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"3f6e7581","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"cd8c6689",creditos:"bc78b515",glosario:"e41e9b6e",intro:"31d6cfe0",referencias:"dacc3e1a",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",t=s.p+o,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var u=c[r],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===o||d===t))return n()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){u=l[r],d=u.getAttribute("data-href");if(d===o||d===t)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var o=n&&n.target&&n.target.src||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete i[e],f.parentNode.removeChild(f),a(c)},f.href=t;var m=document.getElementsByTagName("head")[0];m.appendChild(f)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)n.push(o[2]);else{var c=new Promise((function(n,a){o=t[e]=[n,a]}));n.push(o[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=r(e);var l=new Error;u=function(n){d.onerror=d.onload=null,clearTimeout(f);var a=t[e];if(0!==a){if(a){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}t[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(n)},s.m=e,s.c=o,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)s.d(a,o,function(n){return e[n]}.bind(null,o));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var f=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"2cad":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.b2a17fee.png"},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("68f3"),i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},t=[],c={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},r=c,s=a("2877"),u=Object(s["a"])(r,i,t,!1,null,null,null),d=u.exports,l=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("2b0e")),f=a("8c4f"),m=a("ae58"),p=a("7e58");l["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:m["a"]},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:p["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return a.e("tema3").then(a.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return a.e("tema4").then(a.bind(null,"3eb5"))}}]},{path:"/actividad",name:"actividad",component:function(){return a.e("actividad").then(a.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return a.e("creditos").then(a.bind(null,"2e81"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=a("1c2c"),v=(a("a3a0"),{global:{componenteFormativo:"Publicación de aplicaciones tradicionales",descripcionCurso:"Este componente se enfoca en aspectos relativos a la publicación de aplicaciones, la vida útil de las mismas, redes locales, pruebas de sitios web y servicios de <em>hosting</em>. Se profundizará en los conceptos más importantes para llevar a cabo el proceso de publicación tradicional de un sitio web.",imagenBannerPrincipal:a("74b5"),fondoBannerPrincipal:a("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("2cad")},{clases:["banner-principal-decorativo-2"],imagen:a("f533")},{clases:["banner-principal-decorativo-3"],imagen:a("5b70")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Servicios de <em>hosting</em>",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"2",titulo:"Servicios de dominio",desarrolloContenidos:!0},{nombreRuta:"tema3",numero:"3",titulo:"FTP",desarrolloContenidos:!0},{nombreRuta:"tema4",numero:"4",titulo:"Publicación y prueba de sitios",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/228118_CF32_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Servicios de dominio",referencia:"Corporación para la Asignación de Nombres y Números en Internet [ICANN]. (2015). Las funciones de la IANA.",tipo:"Reporte",link:"https://www.icann.org/es/system/files/files/iana-functions-18dec15-es.pdf"}],glosario:[{termino:"Ancho de banda",significado:"medida que hace referencia a la cantidad de información que puede ser recibida por segundo."},{termino:"<em>Datacenter</em>",significado:"lugar donde se concentran los recursos necesarios para el procesamiento de información."},{termino:"Internet",significado:"red de equipos de cómputo interconectados por medio de los cuales se ofrece acceso a servicios utilizando un lenguaje común."},{termino:"IP",significado:"una dirección IP hace referencia a una dirección única que identifica a cualquier dispositivo en una red."},{termino:"Servidor",significado:"equipo o conjunto de equipos especiales que puede recibir peticiones por parte de un cliente, procesar la información y devolver respuesta de acuerdo con las características de la solicitud."}],referencias:[{referencia:"De Souza, I. (12 de febrero de 2021). Aprende sobre los tipos de <i>hosting</i> más importantes de la actualidad y sus funciones. <em>Rock Content - ES</em>.",link:"https://rockcontent.com/es/blog/tipos-de-hosting/"},{referencia:"Luisescoffie (3 de agosto de 2017). 4 herramientas gratuitas para conocer el Uptime de tu sitio web. Luisescoffie.",link:"https://luisescoffie.com/4-herramientas-gratuitas-para-conocer-el-uptime-de-tu-sitio-web/"},{referencia:"Kinsta (30 de septiembre de 2019). ¿Qué es un TLD? Los Top-Level Domains Explicados. <em>Kinsta</em>.",link:"https://kinsta.com/es/base-de-conocimiento/que-es-un-tld/"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del Ecosistema",centro:"Dirección General"},{nombre:"Olga Constanza Bermúdez Jaimes",cargo:"Responsable de Línea de Producción",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Jonathan Guerrero Astaiza",cargo:"Experto Temático",centro:"Centro de teleinformática y producción industrial - Regional Cauca"},{nombre:"Paola Alexandra Moya Peralta",cargo:"Evaluadora Instruccional",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Andrés Felipe Herrera Roldán",cargo:"Diseñador de Contenidos Digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Edwin Sneider Velandia Suárez",cargo:"Desarrollador Fullstack",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Edgar Mauricio Cortés García",cargo:"Actividad Didáctica",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Daniela Muñoz Bedoya",cargo:"Animador y Producción Multimedia",centro:"Centro de Servicios de Salud - Regional Antioquia"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Jaime Hernán Tejada Llano",cargo:"Validador de Recursos Educativos Digitales",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Margarita Marcela Medrano Gómez",cargo:"Evaluador para Contenidos Inclusivos y Accesibles",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Evaluador para contenidos inclusivos y accesibles",centro:"Centro de Servicios de Salud - Regional Antioquia"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=a("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"5b70":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-3.94b54ed2.png"},"74b5":function(e,n,a){e.exports=a.p+"img/banner-princiapal.98202b9d.png"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,n,a){e.exports=a.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,n,a){},ce7c:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.ef4a5b8f.png"},f533:function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-2.64f6e71b.png"}});
//# sourceMappingURL=app.2606632a.js.map