(this.webpackJsonpmaterial_ui_sample=this.webpackJsonpmaterial_ui_sample||[]).push([[0],{53:function(module,__webpack_exports__,__webpack_require__){"use strict";var operators={"+":"","-":"","*":"","/":""},evaluate=function evaluate(result){var disabled,lastInput=result.length>1?result.charAt(result.length-1):null;lastInput in operators&&(result=result.slice(0,-1));var output=eval(result).toString();"Infinity"!==output&&"NaN"!==output||(disabled=!0,output="NaN"===output?"Indeterminate":output);var values=[output,disabled];return values};__webpack_exports__.a=evaluate},68:function(e,t,a){e.exports=a(78)},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),c=a.n(l),i=a(106),o=(a(107),a(109)),s=(a(110),a(111),a(112),a(113),a(114),Object(i.a)((function(e){return{table:{minWidth:"600px"}}})),a(115)),u=a(56);a(123),Object(i.a)((function(e){return{grid:{width:"100%",margin:"0px"},paper:{padding:"10px",textAlign:"center",color:"#000",background:e.palette.secondary.light},table:{minWidth:"600px"}}}));var p=a(116),m=a(117),d=a(81),x=a(119),g=a(118),b=a(24),h=a.n(b);Object(i.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));var E=a(22),f=a(127),w=a(54),v=a.n(w),k=Object(i.a)((function(e){return{gridContainer:{width:"100%",margin:"auto"},display:{backgroundColor:"black",border:"2px solid grey",height:"50px",textAlign:"right",display:"flex",flexDirection:"row-reverse",alignItems:"center",color:"white",padding:"12px 15px 3px 0px",fontSize:"20px",fontFamily:"verdana",fontWeight:"300",boxShadow:"1px 3px 4px black",marginBottom:"40px"},paper:{position:"relative",backgroundColor:e.palette.primary.dark,margin:"50px auto",width:"85%",maxWidth:"329px","@media(min-width: 600px)":{minWidth:"330px",maxWidth:"450px",width:"50%"},padding:"20px 10px 30px ",boxShadow:"2px 5px 15px 3px rgb(120,120,120,1)",borderRadius:"10px 10px 50% 50% / 2%"},gridItem:{textAlign:"center","@media(max-width: 349px)":{width:"50%"}},button:{padding:"5px",fontWeight:"bolder",fontFamily:"balsamiq sans",width:"70%",textAlign:"center",background:e.palette.warning.light,borderRadius:"10px",boxShadow:"0px 5px 2px rgb(60,60,60)",border:"2px solid white","&:hover":{background:e.palette.warning.main,boxShadow:"0px 0px 18px 6px ".concat(e.palette.warning.dark)},"&:active":{background:e.palette.warning.dark,transform:"translate(0px, 2px)",boxShadow:"0px 1px 2px 1px rgb(40,40,40)"}},functionButtons:{padding:"5px",fontWeight:"bold",fontFamily:"roboto",width:"70%",textAlign:"center",background:e.palette.secondary.light,borderRadius:"10px",boxShadow:"0px 5px 2px rgb(60,60,60)",border:"2px solid white","&:hover":{background:e.palette.secondary.main,boxShadow:"0px 0px 20px 5px red"},"&:active":{background:e.palette.secondary.dark,transform:"translate(0px, 2px)",boxShadow:"0px 1px 2px 1px rgb(40,40,40)"}},spanButtons:{padding:"0px","@media(min-width: 550px)":{padding:"8px"}},menuButton:{marginRight:e.spacing(2)},appBar:{borderRadius:"5px"},githubSvg:{height:"32px",width:"32px","&:hover":{fill:"red",filter:"drop-shadow(0px 0px 4px red)"}}}})),y=Object(i.a)((function(e){return{arrow:{color:e.palette.common.black},tooltip:{backgroundColor:e.palette.common.black}}})),C=function(){var e=k();return r.a.createElement("span",{style:{cursor:"pointer"},onClick:function(){return window.open("https://github.com/recklessly-lazy/dummy-calculator/tree/master")}},r.a.createElement(f.a,{title:"github code",placement:"bottom"},r.a.createElement("svg",{className:e.githubSvg,version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"438.549px",height:"438.549px",viewBox:"0 0 438.549 438.549",style:{enableBackground:"new 0 0 438.549 438.549"}},r.a.createElement("g",null,r.a.createElement("path",{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365\r c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63\r c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\r c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136\r c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559\r c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559\r c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997\r c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851\r c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136\r c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41\r c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126\r c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817\r c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994\r c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849\r c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24\r c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979\r c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146\r c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995\r c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906\r C438.536,184.851,428.728,148.168,409.132,114.573z"})),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null))))},N={"+":"","-":"","*":"","/":""},S=function(e,t){var a=e,n=!1,r=e.charAt(e.length-1),l=e.charAt(e.length-2);return"Infinity"===a||"Indeterminate"===a?(a=t,n=!1):"0"===t&&"0"===e?a="0":"0"===e?a=t:"0"===r&&l in N?a=a.slice(0,-1)+t:a+=t,[a,n]},_={"+":"","-":"","*":"","/":""},B=function(e,t){var a=e,n=e.charAt(e.length-1);return n===t||(n!==t&&n in _?a=e.slice(0,-1)+t:a+=t),a},A=a(53),I=function(e){var t=k();return console.log(e),"7894561230".split("").map((function(a){return"0"===a?r.a.createElement(s.a,{key:a,className:t.gridItem,item:!0,xs:4},r.a.createElement(x.a,{className:t.button,onClick:function(){return e.valueChangedHandler(e.result.toString(),"0")}},0)):r.a.createElement(s.a,{key:a,className:t.gridItem,item:!0,xs:4},r.a.createElement(x.a,{className:t.button,onClick:function(){return e.valueChangedHandler(e.result.toString(),a.toString())}},a))}))},j=function(e){var t=k(),a=y();return"+-*/=".split("").map((function(n){return"="===n?r.a.createElement(s.a,{key:n,className:t.gridItem,item:!0,xs:4},r.a.createElement(f.a,{title:e.disabled?"Press AC or a number":"Evaluate",classes:a,arrow:!0},r.a.createElement("span",{className:t.spanButtons},r.a.createElement(x.a,{disabled:e.disabled,className:t.functionButtons,onClick:function(){return e.evaluate(e.result)}},n)))):r.a.createElement(s.a,{key:n,className:t.gridItem,item:!0,xs:4},r.a.createElement(f.a,{title:e.disabled?"Press AC or a number":"".concat("+"===n?"Add":"-"===n?"Subtract":"*"===n?"Multiply":"Divide"),arrow:!0,placement:"right-start",classes:a},r.a.createElement("span",null,r.a.createElement(x.a,{className:t.functionButtons,disabled:e.disabled,onClick:function(){return e.operationsHandler(e.result.toString(),n.toString())}},n))))}))},O=function(e){var t=k();return r.a.createElement(s.a,{className:t.gridItem,item:!0,xs:12},r.a.createElement(o.a,{className:t.display},r.a.createElement("p",null,e.result)))},W=a(121),R=a(128),G=function(){var e=k();return r.a.createElement("div",{style:{flexGrow:"1"}},r.a.createElement(p.a,{className:e.appBar,position:"static"},r.a.createElement(m.a,null,r.a.createElement(g.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return alert("Nothing")}},r.a.createElement(h.a,{titleAccess:"Menu"})),r.a.createElement(d.a,{style:{flexGrow:"1"},variant:"h6"},"Calculator"),r.a.createElement(W.a,{control:r.a.createElement(R.a,{name:"checkedB"}),label:"Dark"}))))},H=function(){var e=Object(n.useState)("0"),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),i=Object(E.a)(c,2),o=i[0],p=i[1],m=k(),d=y(),g=r.a.createElement(s.a,{className:m.gridItem,item:!0,xs:4},r.a.createElement(f.a,{classes:d,title:"Clear All",arrow:!0},r.a.createElement("span",{className:m.spanButtons},r.a.createElement(x.a,{className:m.functionButtons,onClick:function(){l("0"),p(!1)}},"AC")))),b=r.a.createElement(s.a,{className:m.gridItem,item:!0,xs:4},r.a.createElement(f.a,{classes:d,title:o?"Press AC or a number":"Clear last entry",arrow:!0},r.a.createElement("span",{className:m.spanButtons},r.a.createElement(x.a,{disabled:o,className:m.functionButtons,onClick:function(){l(1===a.length?"0":a.slice(0,-1))}},r.a.createElement(v.a,null)))));return r.a.createElement(n.Fragment,null,r.a.createElement(G,null),r.a.createElement(u.a,{className:m.paper},r.a.createElement(s.a,{className:m.gridContainer,container:!0,spacing:2},r.a.createElement(O,{result:a}),r.a.createElement(I,{valueChangedHandler:function(e,t){var a=S(e,t),n=Object(E.a)(a,2),r=n[0],c=n[1];p(c),l(r)},result:a}),r.a.createElement(j,{operationsHandler:function(e,t){var a=B(e,t);l(a)},disabled:o,result:a,evaluate:function(e){var t=Object(A.a)(e),a=Object(E.a)(t,2),n=a[0],r=a[1];p(r),l(n)}}),g,b)),r.a.createElement("footer",{style:{textAlign:"center",margin:"60px 0px 60px 0px"}},r.a.createElement(C,null)))};a(55),a(122),a(126),a(124),Object(i.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));c.a.render(r.a.createElement(H,null),document.querySelector("#root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.91479593.chunk.js.map