(this.webpackJsonpmaterial_ui_sample=this.webpackJsonpmaterial_ui_sample||[]).push([[0],{43:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_REACTJS_material_ui_sample_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(35),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_material_ui_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(46),_material_ui_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(18),_material_ui_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(22),_material_ui_core__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(26),_material_ui_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(70),_material_ui_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(71),_material_ui_core__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(72),_material_ui_core__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(73),_material_ui_core__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(36),_material_ui_core__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__(69),_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__(33),_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default=__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12__),_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__(45),_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_13___default=__webpack_require__.n(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_13__),useStyles=Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a)((function(_){return{gridContainer:{width:"100%",margin:"auto"},display:{backgroundColor:"black",border:"2px solid grey",height:"50px",textAlign:"right",display:"flex",flexDirection:"row-reverse",alignItems:"center",color:"white",padding:"12px 15px 3px 0px",fontSize:"20px",fontFamily:"verdana",fontWeight:"300",boxShadow:"1px 3px 4px black",marginBottom:"40px"},paper:{position:"relative",backgroundColor:_.palette.primary.dark,margin:"50px auto",width:"85%",maxWidth:"329px","@media(min-width: 600px)":{minWidth:"330px",maxWidth:"450px",width:"50%"},padding:"20px 10px 30px ",boxShadow:"2px 5px 15px 3px rgb(120,120,120,1)",borderRadius:"10px 10px 50% 50% / 2%"},gridItem:{textAlign:"center","@media(max-width: 349px)":{width:"50%"}},button:{padding:"5px",fontWeight:"bolder",fontFamily:"balsamiq sans",width:"70%",textAlign:"center",background:_.palette.warning.light,borderRadius:"10px",boxShadow:"0px 5px 2px rgb(60,60,60)",border:"2px solid white","&:hover":{background:_.palette.warning.main,boxShadow:"0px 0px 18px 6px ".concat(_.palette.warning.dark)},"&:active":{background:_.palette.warning.dark,transform:"translate(0px, 2px)",boxShadow:"0px 1px 2px 1px rgb(40,40,40)"}},functionButtons:{padding:"5px",fontWeight:"bold",fontFamily:"roboto",width:"70%",textAlign:"center",background:_.palette.secondary.light,borderRadius:"10px",boxShadow:"0px 5px 2px rgb(60,60,60)",border:"2px solid white","&:hover":{background:_.palette.secondary.main,boxShadow:"0px 0px 20px 5px red"},"&:active":{background:_.palette.secondary.dark,transform:"translate(0px, 2px)",boxShadow:"0px 1px 2px 1px rgb(40,40,40)"}},spanButtons:{padding:"0px","@media(min-width: 550px)":{padding:"8px"}},menuButton:{marginRight:_.spacing(2)},appBar:{borderRadius:"5px"},githubSvg:{height:"32px",width:"32px","&:hover":{fill:"red"}}}})),useToolTipStyles=Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.a)((function(_){return{arrow:{color:_.palette.common.black},tooltip:{backgroundColor:_.palette.common.black}}})),Calculator=function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)("0"),_useState2=Object(D_REACTJS_material_ui_sample_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),result=_useState2[0],setResult=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState4=Object(D_REACTJS_material_ui_sample_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),disabled=_useState4[0],setDisabled=_useState4[1],operators={"+":"","-":"","*":"","/":""},valueChangedHandler=function(_,e){var a=_,t=_.charAt(_.length-1),r=_.charAt(_.length-2);"Infinity"===a||"NaN"===a?(a=e,setDisabled(!1)):"0"===e&&"0"===_?a="0":"0"===_?a=e:"0"===t&&r in operators?a=a.slice(0,-1)+e:a+=e,setResult(a)},operationsHandler=function(_,e){var a=_,t=_.charAt(_.length-1);t===e||(t!==e&&t in operators?a=_.slice(0,-1)+e:a+=e),setResult(a)},evaluate=function evaluate(result){var lastInput=result.length>1?result.charAt(result.length-1):null;lastInput in operators&&(result=result.slice(0,-1));var output=eval(result).toString();"Infinity"!==output&&"NaN"!==output||(console.log("setting disabled to true"),setDisabled(!0)),setResult(output)},classes=useStyles(),tooltipClasses=useToolTipStyles(),buttons="789456123".split("").map((function(_){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{key:_,className:classes.gridItem,item:!0,xs:4},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{className:classes.button,onClick:function(){return valueChangedHandler(result.toString(),_.toString())}},_))})),operatorsAndFunctions="+-*/=".split("").map((function(_){return"="===_?react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{key:_,className:classes.gridItem,item:!0,xs:4},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{title:disabled?"Press AC or a number":"Evaluate",classes:tooltipClasses,arrow:!0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:classes.spanButtons},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:disabled,className:classes.functionButtons,onClick:function(){return evaluate(result)}},_)))):react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{key:_,className:classes.gridItem,item:!0,xs:4},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{title:disabled?"Press AC or a number":"".concat("+"===_?"Add":"-"===_?"Subtract":"*"===_?"Multiply":"Divide"),arrow:!0,placement:"right-start",classes:tooltipClasses},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{className:classes.functionButtons,disabled:disabled,onClick:function(){return operationsHandler(result.toString(),_.toString())}},_))))}));return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__.a,{className:classes.appBar,position:"static"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.a,null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.a,{edge:"start",className:classes.menuButton,color:"inherit","aria-label":"menu",onClick:function(){return alert("Nothing")}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_12___default.a,{titleAccess:"Menu"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.a,{variant:"h6"},"Calculator"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.a,{className:classes.paper},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{className:classes.gridContainer,container:!0,spacing:2},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{className:classes.gridItem,item:!0,xs:12},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_11__.a,{className:classes.display},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,result))),buttons,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{className:classes.gridItem,item:!0,xs:4},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{className:classes.button,onClick:function(){return valueChangedHandler(result.toString(),"0")}},0)),operatorsAndFunctions,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{className:classes.gridItem,item:!0,xs:4},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{classes:tooltipClasses,title:"Clear All",arrow:!0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:classes.spanButtons},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{className:classes.functionButtons,onClick:function(){setResult("0"),setDisabled(!1)}},"AC")))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__.a,{className:classes.gridItem,item:!0,xs:4},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{classes:tooltipClasses,title:disabled?"Press AC or a number":"Clear last entry",arrow:!0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span",{className:classes.spanButtons},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.a,{disabled:disabled,className:classes.functionButtons,onClick:function(){setResult(1===result.length?"0":result.slice(0,-1))}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_icons_ArrowBack__WEBPACK_IMPORTED_MODULE_13___default.a,null))))))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("footer",{style:{textAlign:"center",margin:"60px 0px 60px 0px"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return window.open("https://github.com/recklessly-lazy/dummy-calculator/tree/master")}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__.a,{title:"github code",placement:"bottom"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg",{className:classes.githubSvg,version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"438.549px",height:"438.549px",viewBox:"0 0 438.549 438.549",style:{enableBackground:"new 0 0 438.549 438.549"}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null,react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path",{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365\r c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63\r c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996\r c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136\r c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559\r c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559\r c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997\r c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851\r c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136\r c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41\r c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126\r c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817\r c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994\r c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849\r c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24\r c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979\r c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146\r c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995\r c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906\r C438.536,184.851,428.728,148.168,409.132,114.573z"})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g",null))))))};__webpack_exports__.a=Calculator},55:function(_,e,a){_.exports=a(66)},66:function(_,e,a){"use strict";a.r(e);var t=a(0),r=a.n(t),l=a(9),c=a.n(l),E=a(46);a(92),a(69),a(93),a(94),a(95),a(96),a(97),Object(E.a)((function(_){return{table:{minWidth:"600px"}}})),a(18),a(36),a(98),Object(E.a)((function(_){return{grid:{width:"100%",margin:"0px"},paper:{padding:"10px",textAlign:"center",color:"#000",background:_.palette.secondary.light},table:{minWidth:"600px"}}}));a(70),a(71),a(73),a(22),a(72),a(33),Object(E.a)((function(_){return{root:{flexGrow:1},menuButton:{marginRight:_.spacing(2)},title:{flexGrow:1}}}));var i=a(43);c.a.render(r.a.createElement(i.a,null),document.querySelector("#root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.837115c4.chunk.js.map