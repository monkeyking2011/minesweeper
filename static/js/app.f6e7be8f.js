(function(t){function e(e){for(var n,o,r=e[0],l=e[1],u=e[2],h=0,d=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,r=1;r<i.length;r++){var l=i[r];0!==s[l]&&(n=!1)}n&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},s={app:0},a=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var c=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var n=i("85ec"),s=i.n(n);s.a},"557f":function(t,e,i){"use strict";var n=i("e2f9"),s=i.n(n);s.a},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},a=[],o=(i("034f"),i("2877")),r={},l=Object(o["a"])(r,s,a,!1,null,null,null),u=l.exports,c=i("8c4f"),h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home",on:{contextmenu:t.handleContextmenu,mousedown:t.handleMousedowm}},[i("Minesweeper")],1)},d=[],m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[i("div",{staticStyle:{width:"25rem",display:"flex"}},t._l(t.levelData,(function(e,n){return i("el-button",{key:n,attrs:{type:e.type},on:{click:function(i){return t.changeLevel(e)}}},[t._v(t._s(e.name))])})),1),i("div",{staticStyle:{width:"25rem","text-align":"center"}},[t._v(" 最佳:"+t._s(t.record[t.nowLevel])+" ")]),i("div",{staticStyle:{width:"25rem",display:"flex"}},[i("div",{staticStyle:{width:"10rem"}},[t._v("时间:"+t._s(t.nowTime))]),i("div",{staticStyle:{width:"15rem"}},[t._v("未标记的地雷:"+t._s(t.leftMine))])])]),i("div",{staticClass:"minesweeper"},t._l(t.mineDate,(function(e,n){return i("div",{key:n,staticClass:"mines-row"},t._l(e,(function(e,s){return i("div",{key:s},[i("Mine",{attrs:{state:e.state,number:e.number,isMine:e.isMine},on:{"update:state":function(i){return t.$set(e,"state",i)},open:function(e){return t.handleOpen(s,n)},openRoundByFlag:function(i){return t.openRoundByFlag(s,n,e)},changeFlag:t.hanldeChangeFlag}})],1)})),0)})),0),i("el-dialog",{attrs:{visible:t.loseDialogVisible,width:"30%","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.loseDialogVisible=e}}},[i("div",{staticClass:"center-box"},[i("Boom")],1),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"warning"},on:{click:function(e){t.restart(),t.loseDialogVisible=!1}}},[t._v("重新开始当前游戏")]),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.setMineDate(),t.loseDialogVisible=!1}}},[t._v("开始新游戏")])],1)]),i("el-dialog",{attrs:{visible:t.winDialogVisible,width:"50%","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.winDialogVisible=e}}},[i("div",{staticClass:"center-box"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.newRecord,expression:"newRecord"}],staticStyle:{"font-size":"2rem"}},[t._v("新纪录")]),i("div",{staticStyle:{"font-size":"2rem"}},[t._v("时间:"+t._s(t.nowTime)+"秒")]),i("div",{directives:[{name:"show",rawName:"v-show",value:3===t.nowLevel,expression:"nowLevel===3"}],staticClass:"good-box"},[i("Good",{staticStyle:{width:"8rem"}}),i("span",{staticStyle:{"font-size":"5rem"}},[t._v("猴哥的认可")])],1)]),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.setMineDate(),t.winDialogVisible=!1}}},[t._v("开始新游戏")])],1)])],1)},f=[],p=(i("4de4"),i("7db0"),i("4160"),i("13d5"),i("a9e3"),i("159b"),i("2909")),v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mine-box",on:{mouseup:t.handleMouseup}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.state,expression:"state"}],staticClass:"mine-shade"},[i("Flag",{directives:[{name:"show",rawName:"v-show",value:2===t.state,expression:"state===2"}],staticClass:"icon"})],1),i("div",{staticClass:"mine"},[i("span",{directives:[{name:"show",rawName:"v-show",value:0===t.state&&!t.isMine,expression:"state === 0 && !isMine"}]},[t._v(t._s(t.number||" "))]),i("Mine",{directives:[{name:"show",rawName:"v-show",value:0===t.state&&t.isMine,expression:"state === 0 && isMine"}],staticClass:"icon"})],1)])},w=[],g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticClass:"icon",attrs:{t:"1606311770497",viewBox:"0 0 1096 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2173",width:"200",height:"200"}},[i("path",{attrs:{d:"M471.889401 0h78.648233v943.778802H471.889401z",fill:"#d81e06","p-id":"2174"}}),i("path",{attrs:{d:"M1088.491551 438.857143a15.729647 15.729647 0 0 1-19.662058 20.448541 385.376344 385.376344 0 0 0-249.3149 12.583717A339.760369 339.760369 0 0 1 471.889401 393.241167V0a343.69278 343.69278 0 0 0 350.771121 78.648233 386.949309 386.949309 0 0 1 264.258065-6.291858 14.943164 14.943164 0 0 1 7.864823 20.448541l-34.605223 82.580645a243.809524 243.809524 0 0 0 0 180.890937zM629.185868 707.834101v55.053764c169.880184 15.729647 235.9447 65.278034 235.9447 99.883256s-93.591398 106.961598-353.91705 106.961598S157.296467 906.814132 157.296467 865.130568s66.064516-84.15361 235.9447-99.883256V707.834101c-225.72043 16.516129-393.241167 78.648233-393.241167 157.296467 0 88.086022 228.866359 157.296467 511.213518 157.296467s511.213518-71.569892 511.213517-157.296467c0-78.648233-167.520737-139.207373-393.241167-157.296467z",fill:"#d81e06","p-id":"2175"}})])},b=[],y={},M=Object(o["a"])(y,g,b,!1,null,null,null),_=M.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticClass:"icon",attrs:{t:"1606313341247",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6444",width:"200",height:"200"}},[i("path",{attrs:{d:"M982.016 554.016v-84h-132q-12-94.016-68-168l92-92-60-60-92 92q-74.016-56-168-68V42.016h-84v132q-94.016 12-168 68L210.016 150.016 150.016 210.016l92 92q-56 74.016-68 168H42.016v84h132q12 94.016 68 168l-92 92 60 60 92-92q74.016 56 168 68v132h84v-132q94.016-12 168-68l92 92 60-60-92-92q56-74.016 68-168h132zM512 342.016q-70.016 0-120 50.016t-50.016 120H255.968q0-70.016 34.016-128.992t92.992-92.992 128.992-34.016v86.016z","p-id":"6445"}})])},D=[],O={},S=Object(o["a"])(O,x,D,!1,null,null,null),N=S.exports,C={components:{Flag:_,Mine:N},props:{state:{type:Number,default:function(){return 1}},number:{type:Number,default:function(){return 0}},isMine:{type:Boolean,default:function(){return!1}}},watch:{state:function(t,e){0===t&&1===e&&this.$emit("open")}},data:function(){return{timeStamp:0,lastButton:null}},methods:{handleMouseup:function(t){if(0===this.state)return null===this.lastButton?(this.timeStamp=t.timeStamp,void(this.lastButton=t.button)):0===this.lastButton&&2===t.button||2===this.lastButton&&0===t.button?(t.timeStamp-this.timeStamp<100&&this.$emit("openRoundByFlag"),this.timeStamp=t.timeStamp,void(this.lastButton=t.button)):(this.timeStamp=t.timeStamp,void(this.lastButton=t.button));if(1===this.state){if(0===t.button)return void this.$emit("update:state",0);if(2===t.button)return this.$emit("update:state",2),void this.$emit("changeFlag",1)}if(2===this.state){if(0===t.button)return;2===t.button&&(this.$emit("update:state",1),this.$emit("changeFlag",-1))}}}},B=C,j=(i("557f"),Object(o["a"])(B,v,w,!1,null,"a91be0ee",null)),R=j.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticClass:"icon",attrs:{t:"1606484295740",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"5743",width:"200",height:"200"}},[i("path",{attrs:{fill:"#d05151",d:"M248.85 953.172L28.593 610.748l185.21 126.55-137.65-359.79 190.218 196.02-30.033-416.854 222.757 334.973 12.512-196.024 65.08 173.692L644.303 59.9v461.524l100.12-133.994-15.017 171.215 252.045-260.121-181.964 498.327 160.191-66.997-117.64 133.994 82.594 14.882-207.738 74.442 75.084-104.218-92.605 29.776 62.572-218.35-147.674 124.066-17.514-198.508-30.943 136.471-51.663-84.362-15.013 124.06-112.626-188.58 7.504 243.173-112.632-94.29 50.06 230.76H248.85z","p-id":"5744"}})])},F=[],V={},L=Object(o["a"])(V,$,F,!1,null,null,null),z=L.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("svg",{staticClass:"icon",attrs:{t:"1606485179605",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4987",width:"200",height:"200"}},[i("path",{attrs:{d:"M781.54253 1024H126.542231C66.676612 1024 17.375514 974.698902 17.375514 911.311776V492.252445c0-59.865619 49.301098-112.688224 109.166717-112.688223h91.559182c84.516168 0 116.209731-35.21507 133.817265-63.387126 14.086028-24.650549 24.650549-56.344112 31.693563-105.64521 3.521507-14.086028 3.521507-24.650549 7.043014-45.77959v-7.043014c10.564521-77.473154 21.129042-116.209731 52.822605-140.86028 17.607535-14.086028 42.258084-21.129042 66.908632-14.086028 59.865619 10.564521 102.123703 38.736577 130.295759 88.037675 21.129042 38.736577 31.693563 91.559182 24.650549 151.4248-7.043014 42.258084-14.086028 80.994661-28.172056 116.209731h232.419461c42.258084 0 77.473154 17.607535 105.645209 52.822605 24.650549 31.693563 35.21507 73.951647 24.650549 116.20973L908.316782 918.35479c-7.043014 28.172056-24.650549 56.344112-45.779591 73.951647-21.129042 21.129042-52.822605 31.693563-80.994661 31.693563zM126.542231 453.515868c-21.129042 0-38.736577 17.607535-38.736577 42.258084v419.059331c0 21.129042 17.607535 38.736577 38.736577 38.736577h655.000299c14.086028 0 28.172056-3.521507 38.736577-14.086028 10.564521-10.564521 17.607535-21.129042 21.129042-35.215069L932.967331 509.85998c3.521507-21.129042 0-38.736577-10.564521-56.344112-10.564521-14.086028-28.172056-24.650549-49.301098-24.650548h-331.021657l31.693563-95.080689c10.564521-31.693563 17.607535-63.387126 21.129042-95.080689 3.521507-45.779591-3.521507-84.516168-17.607535-112.688223-17.607535-28.172056-42.258084-45.779591-77.473154-52.822605h-14.086028c-10.564521 7.043014-17.607535 35.21507-24.650548 95.080689v7.043014c-3.521507 24.650549-3.521507 35.21507-7.043014 49.301097-14.086028 56.344112-24.650549 95.080689-42.258084 130.295759-38.736577 66.908633-102.123703 98.602196-193.682884 98.602195H126.542231z",fill:"#3364E4","p-id":"4988"}}),i("path",{attrs:{d:"M218.101413 425.343813h70.430139v559.91961h-70.430139z",fill:"#3364E4","p-id":"4989"}})])},k=[],T={},q=Object(o["a"])(T,E,k,!1,null,null,null),P=q.exports,I={components:{Mine:R,Boom:z,Good:P},data:function(){return{newRecord:!1,record:{0:9999,1:9999,2:9999,3:9999},allFlagNumber:0,nowTime:0,timer:null,nowLevel:0,loseDialogVisible:!1,winDialogVisible:!1,state:1,width:9,height:9,mineNumber:10,mineDate:[],start:!1,leftOpen:71,levelData:[{name:"初级",type:"success",width:9,height:9,mineNumber:10,level:0},{name:"中级",type:"primary",width:16,height:16,mineNumber:50,level:1},{name:"高级",type:"warning",width:30,height:16,mineNumber:99,level:2},{name:"宝叔级",type:"danger",width:45,height:20,mineNumber:199,level:3}]}},created:function(){this.setMineDate(),localStorage.record&&(this.record=JSON.parse(localStorage.record))},computed:{leftMine:function(){return this.mineNumber-this.allFlagNumber}},methods:{changeLevel:function(t){this.nowLevel=t.level,this.width=t.width,this.height=t.height,this.mineNumber=t.mineNumber,this.setMineDate()},setMineDate:function(){this.newRecord=!1,this.nowTime=0,this.allFlagNumber=0,this.mineDate=[],this.start=!1,this.leftOpen=this.width*this.height-this.mineNumber;for(var t=0;t<this.height;t++){for(var e=[],i=0;i<this.width;i++)e.push({isMine:!1,state:1,number:0});this.mineDate.push(e)}},setMine:function(t,e){var i=this,n=this.getRoundPosition(t,e).filter((function(t){return i.getItem.apply(i,Object(p["a"])(t))})),s=this.mineNumber,a=function(){var a=Math.floor(Math.random()*i.width),o=Math.floor(Math.random()*i.height);i.mineDate[o][a].isMine||n.find((function(t){return t[0]===a&&t[1]===o}))||a===t&&o===e||(i.mineDate[o][a].isMine=!0,s--)};while(s)a()},setNumber:function(){for(var t=0;t<this.height;t++)for(var e=0;e<this.width;e++){var i=this.getRoundItems(e,t).reduce((function(t,e){return t+Number(e.isMine)}),0);this.mineDate[t][e].number=i}},getRoundPosition:function(t,e){return[[t-1,e-1],[t,e-1],[t+1,e-1],[t-1,e],[t+1,e],[t-1,e+1],[t,e+1],[t+1,e+1]]},getItem:function(t,e){if(this.mineDate[e]&&this.mineDate[e][t])return this.mineDate[e][t]},getRoundItems:function(t,e){for(var i=this.getRoundPosition(t,e),n=[],s=0;s<i.length;s++){var a=this.getItem.apply(this,Object(p["a"])(i[s]));a&&n.push(a)}return n},handleOpen:function(t,e){var i=this;if(this.timer||(this.timer=setInterval((function(){i.nowTime++}),1e3)),this.start||(this.start=!0,this.firstOpen(t,e)),this.mineDate[e][t].isMine)return this.end(),void(this.loseDialogVisible=!0);0===this.mineDate[e][t].number&&this.getRoundItems(t,e).forEach((function(t){t.state=0})),this.leftOpen--,this.leftOpen||(this.end(),this.nowTime<this.record[this.nowLevel]&&(this.record[this.nowLevel]=this.nowTime,localStorage.record=JSON.stringify(this.record),this.newRecord=!0),this.winDialogVisible=!0)},firstOpen:function(t,e){this.setMine(t,e),this.setNumber()},openRoundByFlag:function(t,e,i){var n=this.getRoundItems(t,e),s=n.reduce((function(t,e){return t+Number(2===e.state)}),0);s===i.number&&n.forEach((function(t){1===t.state&&(t.state=0)}))},restart:function(){this.newRecord=!1,this.nowTime=0,this.allFlagNumber=0,this.leftOpen=this.width*this.height-this.mineNumber;for(var t=0;t<this.height;t++)for(var e=0;e<this.width;e++)this.mineDate[t][e].state=1},end:function(){clearInterval(this.timer),this.timer=null},hanldeChangeFlag:function(t){this.allFlagNumber+=t}}},H=I,J=(i("9de3"),Object(o["a"])(H,m,f,!1,null,"57dcee54",null)),G=J.exports,A={components:{Minesweeper:G},name:"Home",methods:{handleContextmenu:function(t){t.preventDefault()},handleMousedowm:function(t){t.preventDefault()}}},K=A,Q=Object(o["a"])(K,h,d,!1,null,null,null),U=Q.exports;n["default"].use(c["a"]);var W=[{path:"/",name:"Home",component:U}],X=new c["a"]({mode:"hash",base:"",routes:W}),Y=X,Z=i("2f62");n["default"].use(Z["a"]);var tt=new Z["a"].Store({state:{},mutations:{},actions:{},modules:{}}),et=i("5c96");i("0fae");n["default"].use(et["Button"]),n["default"].use(et["Select"]),n["default"].use(et["Dialog"]),n["default"].config.productionTip=!1,document.getElementsByTagName("html")[0].style.fontSize="1vw",new n["default"]({router:Y,store:tt,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,i){},"9de3":function(t,e,i){"use strict";var n=i("9e12"),s=i.n(n);s.a},"9e12":function(t,e,i){},e2f9:function(t,e,i){}});
//# sourceMappingURL=app.f6e7be8f.js.map