(this["webpackJsonpreact-game"]=this["webpackJsonpreact-game"]||[]).push([[0],{67:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var s=c(0),a=c.n(s),n=c(28),r=c.n(n),o=(c(67),c(5)),i=c(44),l=c(7),u=c(8),j=c(31),m=c.p+"static/media/click.b94c632a.mp3",d=c(14),b=c(1);var O=function(e){var t=e.history,c=Object(j.a)(m),n=Object(o.a)(c,1)[0],r=a.a.useState(!1),i=Object(o.a)(r,2),l=i[0],O=i[1],h=0;Object(d.a)("ArrowDown",(function(e){h>=5&&(document.querySelector(".menu__".concat(h-1)).classList.remove("selected"),h=0),document.querySelector(".menu__".concat(h)).classList.add("selected"),h>0&&document.querySelector(".menu__".concat(h-1)).classList.remove("selected"),h+=1})),Object(d.a)("ArrowUp",(function(e){(h-=1)<0&&(document.querySelector(".menu__".concat(h+1)).classList.remove("selected"),h=p.length-1),document.querySelector(".menu__".concat(h)).classList.add("selected"),p.length-1>h>0&&document.querySelector(".menu__".concat(h+1)).classList.remove("selected")})),Object(d.a)("Enter",(function(){document.querySelector(".selected")&&(n(),p.some((function(e,c){if(e.name===document.querySelector(".selected").innerHTML)return O(!0),setTimeout((function(){return t.push("".concat(e.url))}),1e3)})))}));var p=[{name:"Continue",url:"/Game",componentName:"Game"},{name:"New game",url:"/Game",componentName:"Game"},{name:"Settings",url:"/Settings",componentName:"Settings"},{name:"Tutorial",url:"/Tutorial",componentName:"Tutorial"},{name:"Records",url:"/Records",componentName:"Records"}],f=Object(s.useRef)();Object(s.useEffect)((function(){l||u.a.from([f.current],{y:"800px",duration:1}),l&&u.a.to([f.current],{y:"800px",duration:1})}),[l]);var v=function(e){"New game"===e.name?(n(),localStorage.removeItem("savedGame"),localStorage.removeItem("gameStatAllSteps"),localStorage.removeItem("gameStatCurrStep"),O(!0),setTimeout((function(){t.push("".concat(e.url))}),1e3)):(O(!0),n(),setTimeout((function(){t.push("".concat(e.url))}),1e3))};return Object(b.jsx)("div",{className:"menu",ref:f,children:p.map((function(e,t){return Object(b.jsx)("div",{className:"menu__item menu__".concat(t," menu__").concat(e.name),onClick:function(){return v(e)},children:e.name},"".concat(e.name,"_").concat(t))}))})},h=c(43),p=c(46),f=c(89),v=new p,x=new f.a({board:v.board()});var g=[""],_=JSON.parse(localStorage.getItem("gameStatCurrStep"))||[],S=JSON.parse(localStorage.getItem("gameStatAllSteps"))||0;function N(e,t,c){g={from:e,to:t},c&&(g.promotion=c),v.move(g)&&(k(),_.push({from:e,to:t}),S+=1,localStorage.setItem("gameStatAllSteps",JSON.stringify(S)),localStorage.setItem("gameStatCurrStep",JSON.stringify(_)))}function k(e){var t=v.game_over(),c={board:v.board(),pendingPromotion:e,isGameOver:t,turn:v.turn(),result:t?y():null};localStorage.setItem("savedGame",v.fen()),x.next(c)}function y(){if(v.in_checkmate()){var e="w"===v.turn()?"BLACK":"WHITE";return"WINNER - ".concat(e)}if(v.in_draw()){var t="50 - MOVES - RULE";return v.in_stalemate()?t="STALEMATE":v.in_threefold_repetition()?t="REPETITION":v.insufficient_material()&&(t="INSUFFICIENT MATERIAL"),"DRAW - ".concat(t)}return"UNKNOWN REASON"}var E=x;var R=function(e){var t=e.children,c=e.black?"square-black":"square-white";return Object(b.jsx)("div",{className:"".concat(c," board-square"),children:t})},T=c(91),I=c(87);var C=function(e){var t=e.piece,c=t.type,s=t.color,a=e.position,n=Object(T.a)({item:{type:"piece",id:"".concat(a,"_").concat(c,"_").concat(s)},collect:function(e){return{isDragging:!!e.isDragging()}}}),r=Object(o.a)(n,3),i=r[0].isDragging,l=r[1],u=r[2],j="./assets/".concat(c,"_").concat(s,".png");return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(I.a,{connect:u,src:j}),Object(b.jsx)("div",{className:"piece-container",ref:l,style:{opacity:i?0:1},children:Object(b.jsx)("img",{src:j,alt:"".concat(c,"_").concat(s),className:"piece"})})]})},A=c(90),w=["r","n","b","q"];var G=function(e){var t=e.promotion,c=t.from,s=t.to,a=t.color;return Object(b.jsx)("div",{className:"board",children:w.map((function(e,t){return Object(b.jsx)("div",{className:"promote-square",children:Object(b.jsx)(R,{black:t%3===0,children:Object(b.jsx)("div",{className:"piece-container",onClick:function(){return N(c,s,e)},children:Object(b.jsx)("img",{src:"./assets/".concat(e,"_").concat(a,".png"),alt:"",className:"piece cursor-pointer"})})})},t)}))})};var M=function(e){var t=e.piece,c=e.black,s=e.position,n=a.a.useState(null),r=Object(o.a)(n,2),i=r[0],l=r[1],u=Object(A.a)({accept:"piece",drop:function(e){var t=e.id.split("_");!function(e,t){var c=v.moves({verbose:!0}).filter((function(e){return e.promotion}));c.some((function(c){return"".concat(c.from,":").concat(c.to)==="".concat(e,":").concat(t)}))&&k({from:e,to:t,color:c[0].color}),x.getValue().pendingPromotion||N(e,t)}(Object(o.a)(t,1)[0],s)}}),j=Object(o.a)(u,2)[1];return a.a.useEffect((function(){var e=E.subscribe((function(e){var t=e.pendingPromotion;return t&&t.to===s?l(t):l(null)}));return function(){return e.unsubscribe()}}),[s]),Object(b.jsx)("div",{className:"board-square",ref:j,children:Object(b.jsx)(R,{black:c,children:i?Object(b.jsx)(G,{promotion:i}):t?Object(b.jsx)(C,{piece:t,position:s}):null})})},D=c.p+"static/media/chess.db2f5ba9.mp3";var q=function(e){var t=e.board,c=e.turn,s=e.soundsVolume,n=a.a.useState([]),r=Object(o.a)(n,2),i=r[0],l=r[1],u=Object(j.a)(D,{volume:s/100}),m=Object(o.a)(u,1)[0];function d(e){return{x:"w"===c?e%8:Math.abs(e%8-7),y:"w"===c?Math.abs(Math.floor(e/8)-7):Math.floor(e/8)}}function O(e){var t=d(e);return(t.x+t.y)%2===1}function h(e){var t=d(e),c=t.x,s=t.y;return"".concat(["a","b","c","d","e","f","g","h"][c]).concat(s+1)}return a.a.useEffect((function(){l("w"===c?t.flat():t.flat().reverse()),m()}),[c]),Object(b.jsx)("div",{className:"board",children:i.map((function(e,t){return Object(b.jsx)("div",{className:"square",children:Object(b.jsx)(M,{piece:e,black:O(t),position:h(t)})},t)}))})};var J=function(e){var t=e.turn,c=a.a.useState(0),n=Object(o.a)(c,2),r=n[0],i=n[1],l=a.a.useState([]),j=Object(o.a)(l,2),m=j[0],d=j[1],O=Object(s.useRef)();return Object(s.useEffect)((function(){u.a.from([O.current],{x:"-800px",duration:1})}),[]),Object(s.useEffect)((function(){t&&setTimeout((function(){i(JSON.parse(localStorage.getItem("gameStatAllSteps"))),d(JSON.parse(localStorage.getItem("gameStatCurrStep")))}),0)}),[t]),Object(b.jsxs)("div",{className:"game-statistics",ref:O,children:[Object(b.jsxs)("div",{className:"game-statistics__steps",children:[Object(b.jsx)("h4",{className:"game-statistics__title",children:"MOVES:"}),r]}),Object(b.jsxs)("div",{className:"game-statistics__game-status",children:[Object(b.jsx)("h4",{children:"GAME STATUS:"}),m&&"".concat(m.map((function(e){return"".concat(e.from,"-").concat(e.to)})))]})]})};var L=Object(l.e)((function(e){var t=e.history,c=Object(s.useRef)();return Object(b.jsx)("h3",{onClick:function(){u.a.to([c.current],{scale:.5,duration:1}),setTimeout((function(){t.push("/")}),1e3)},className:"button__get-back",ref:c,children:"Get back"})}));var W=function(e){var t=e.handle;return Object(b.jsx)("h3",{onClick:t.enter,className:"button__get-back",children:"Full Screen"})};var B=function(){return Object(b.jsxs)("div",{class:"footer__developers",children:[Object(b.jsxs)("div",{class:"developer developer__1st",children:["Andrew Murashko",Object(b.jsxs)("div",{class:"developer__links",children:[Object(b.jsx)("a",{class:"ico GitHub-ico developer__1st_GitHub",href:"https://github.com/Andrewmurashko",children:Object(b.jsx)("img",{src:"./assets/Github.svg",alt:"G",className:"piece"})}),Object(b.jsx)("a",{class:"ico telegram-ico developer__1st_telegram",href:"https://t.me/AndrewMurashko",children:Object(b.jsx)("img",{src:"./assets/Telegram.svg",alt:"T",className:"piece"})}),Object(b.jsx)("a",{class:"ico email-ico developer__1st_email",href:"mailto: murashko.kbtem@gmail.com",children:Object(b.jsx)("img",{src:"./assets/email.svg",alt:"E",className:"piece"})})]})]}),Object(b.jsxs)("div",{class:"footer__school-logo-container",children:[Object(b.jsx)("a",{class:"footer__school-logo",href:"https://rs.school/js/",children:Object(b.jsx)("img",{src:"./assets/logo-rsschool.svg",alt:"E",className:"piece"})}),"React 2021-Q1"]})]})},U=c(61),V=(c(78),c.p+"static/media/Vechnye_Hity-Louis_Armstrong_-_Wonderful_World_(MUSIC-LORD.COM).ab412a65.mp3");var P=function(e){var t=e.history,c=e.handle,n=a.a.useState([]),r=Object(o.a)(n,2),i=r[0],l=r[1],j=a.a.useState(),m=Object(o.a)(j,2),O=m[0],p=m[1],f=a.a.useState(),x=Object(o.a)(f,2),g=x[0],N=x[1],y=a.a.useState(),R=Object(o.a)(y,2),T=R[0],I=R[1],C=a.a.useState([]),A=Object(o.a)(C,2),w=A[0],G=A[1],M=a.a.useState(1),D=Object(o.a)(M,2),B=D[0],P=D[1],H=Object(s.useRef)(),F=Object(s.useRef)(),K=Object(s.useRef)(),X=Object(s.useRef)();return Object(s.useEffect)((function(){O&&(u.a.from([K.current],{x:"-800px",duration:1}),u.a.from([X.current],{x:"800px",duration:1}))}),[g]),Object(s.useEffect)((function(){u.a.from([H.current],{y:"-800px",duration:1}),u.a.from([F.current],{y:"800px",duration:1})}),[]),Object(d.a)(["Escape","Backspace"],(function(){t.push("/")})),a.a.useEffect((function(){localStorage.getItem("savedGame")?(v.load(localStorage.getItem("savedGame")),k()):(v.reset(),k(),S=0,_.splice(0,_.length));var e=E.subscribe((function(e){l(e.board),p(e.isGameOver),N(e.result),I(e.turn),localStorage.getItem("Records")&&G(JSON.parse(localStorage.getItem("Records")))}));return function(){return e.unsubscribe()}}),[g,O]),a.a.useEffect((function(){g&&(G([].concat(Object(h.a)(w),[{steps:S,stepsArr:_,result:g}])),localStorage.setItem("Records",JSON.stringify([].concat(Object(h.a)(w),[{steps:S,stepsArr:_,result:g}]))))}),[g]),Object(b.jsx)("div",{className:"Game",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"settings",ref:H,children:[Object(b.jsx)(L,{history:t}),Object(b.jsx)(W,{handle:c}),Object(b.jsxs)("div",{className:"settings__chess-sound",children:[Object(b.jsx)("h3",{className:"settings__chess-sound_title",children:"Sounds"}),Object(b.jsx)("input",{onChange:function(e){P(e.target.value)},id:"soundsRange",type:"range",min:"0",max:"100"})]}),Object(b.jsx)("div",{className:"player",children:Object(b.jsx)(U.a,{autoPlay:!0,src:V})})]}),Object(b.jsx)(J,{steps:S,stepsArr:_,turn:T}),Object(b.jsxs)("div",{className:"game-container",ref:F,children:[O&&Object(b.jsxs)("h2",{className:"vertical-text",ref:K,children:[Object(b.jsx)("button",{onClick:function(){u.a.to([K.current],{x:"-800px",duration:1}),u.a.to([X.current],{x:"800px",duration:1}),setTimeout((function(){return v.reset(),k(),S=0,void _.splice(0,_.length)}),1e3)},children:Object(b.jsx)("span",{className:"vertical-text",children:"NEW GAME"})}),"GAME OVER"]}),Object(b.jsx)("div",{className:"board-container",children:Object(b.jsx)(q,{board:i,turn:T,soundsVolume:B})}),g&&Object(b.jsx)("p",{className:"vertical-text",ref:X,children:g})]})]})})};var H=Object(l.e)((function(e){var t=e.history,c=e.setIsDarkTheme,s=e.isDarkTheme,a=e.movesRule,n=e.setMovesRule,r=e.repititionRule,o=e.setRepititionRule;Object(d.a)(["Escape","Backspace"],(function(){t.push("/")}));var i=function(e){localStorage.setItem("Settings",JSON.stringify({isDarkTheme:e,movesRule:a,repititionRule:r}))},l=function(){c(!s),i(!s)},u=function(){n(!a),i(s)},j=function(){o(!r),i(s)};return Object(b.jsxs)("div",{className:"settings-menu",children:[Object(b.jsx)("h2",{className:"title settings-menu-title",children:"Settings"}),Object(b.jsxs)("div",{className:"settings-menu__items",children:[Object(b.jsxs)("div",{className:"settings-menu__item",children:["Theme: ",Object(b.jsx)("input",{className:"settings-menu__input",type:"radio",checked:s?"checked":"",onClick:l,volue:"on"}),"Dark ",Object(b.jsx)("input",{className:"settings-menu__input",type:"radio",checked:s?"":"checked",onClick:l,volue:"off"}),"Blue "]}),Object(b.jsxs)("div",{className:"settings-menu__item",children:["50 moves rule: ",Object(b.jsx)("input",{className:"settings-menu__input",type:"radio",onChange:u,checked:a?"checked":"",onClick:u,volue:"on"}),"on ",Object(b.jsx)("input",{className:"settings-menu__input",type:"radio",onChange:u,checked:a?"":"checked",onClick:u,volue:"off"}),"off "]}),Object(b.jsxs)("div",{className:"settings-menu__item",children:["Repetition rule: ",Object(b.jsx)("input",{className:"settings-menu__input",type:"radio",onChange:j,checked:r?"checked":"",onClick:j,volue:"on"}),"on ",Object(b.jsx)("input",{className:"settings-menu__input",type:"radio",onChange:j,checked:r?"":"checked",onClick:j,volue:"off"}),"off "]})]}),Object(b.jsx)(L,{history:t})]})}));var F=function(e){var t=e.history;Object(d.a)(["Escape","Backspace"],(function(){t.push("/")}));var c=Object(s.useRef)();return Object(s.useEffect)((function(){u.a.from([c.current],{y:"-800px",duration:1})}),[]),Object(b.jsxs)("div",{className:"tutorial",ref:c,children:[Object(b.jsx)("h2",{className:"tutorial__title",children:"Tutorial"}),Object(b.jsxs)("div",{className:"tutorial__subtiitle_hotkeys",children:[Object(b.jsxs)("div",{className:"menu-hotkeys",children:[Object(b.jsx)("h3",{className:"title-hotkeys",children:"\u0425\u043e\u0442\u043a\u0435\u0438 \u043c\u0435\u043d\u044e:"}),Object(b.jsx)("div",{children:'\u0441\u0442\u0440\u0435\u043b\u043a\u0438 "\u0432\u0432\u0435\u0440\u0445", "\u0432\u043d\u0438\u0437" - \u0432\u044b\u0431\u043e\u0440 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0435\u043d\u044e;'}),Object(b.jsx)("div",{children:'"Enter" - \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0443;'}),Object(b.jsx)("div",{children:'"Esc", "BackSpace" - \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0432 \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e '})]}),Object(b.jsxs)("div",{className:"game-hotkeys",children:[Object(b.jsx)("h3",{className:"title-hotkeys",children:"\u0425\u043e\u0442\u043a\u0435\u0438 \u0432 \u0438\u0433\u0440\u0435:"}),Object(b.jsx)("div",{children:'"Esc", "BackSpace" - \u0432\u043e\u0437\u0432\u0440\u0430\u0442 \u0432 \u0433\u043b\u0430\u0432\u043d\u043e\u0435 \u043c\u0435\u043d\u044e '})]}),Object(b.jsxs)("div",{className:"player-hotkeys",children:[Object(b.jsx)("h3",{className:"title-hotkeys",children:"\u0425\u043e\u0442\u043a\u0435\u0438 \u043f\u043b\u0435\u0435\u0440\u0430:"}),Object(b.jsx)("div",{children:"\u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u043f\u043e \u043f\u043b\u0435\u0435\u0440\u0443, \u0447\u0442\u043e\u0431\u044b \u0430\u043a\u0442\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0445\u043e\u0442\u043a\u0435\u0438"}),Object(b.jsx)("div",{children:'\u0441\u0442\u0440\u0435\u043b\u043a\u0438 "\u0432\u0432\u0435\u0440\u0445", "\u0432\u043d\u0438\u0437" - \u0440\u0435\u0433\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0430 \u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u0438;'}),Object(b.jsx)("div",{children:'\u0441\u0442\u0440\u0435\u043b\u043a\u0438 "\u0432\u043b\u0435\u0432\u043e", "\u0432\u043f\u0440\u0430\u0432\u043e" - \u043f\u0440\u043e\u043a\u0440\u0443\u0442\u043a\u0430 \u0442\u0440\u0435\u043a\u0430;'}),Object(b.jsx)("div",{children:'"Space" - \u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u043f\u0430\u0443\u0437\u0443/\u0437\u0430\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043f\u043b\u0435\u0435\u0440'})]})]}),Object(b.jsx)(L,{history:t})]})},K=c(37);var X=function(e){var t=e.history,c=a.a.useState(JSON.parse(localStorage.getItem("Records"))||[]),n=Object(o.a)(c,2),r=n[0],i=(n[1],Object(s.useRef)());return Object(s.useEffect)((function(){u.a.from([i.current],{y:"-800px",duration:1})}),[]),Object(d.a)(["Escape","Backspace"],(function(){t.push("/")})),Object(b.jsxs)("div",{className:"records",ref:i,children:[Object(b.jsx)("h2",{className:" title records__title",children:"Records"}),Object(b.jsx)("div",{className:"records__items",children:r.length&&r.sort((function(e,t){return e.steps-t.steps})).map((function(e,t){return Object(b.jsxs)("div",{className:"records__item",children:[Object(b.jsx)("h4",{children:"Moves: ".concat(e.steps)}),Object(b.jsx)("h4",{children:"Transcript: ".concat(e.stepsArr.map((function(e){return"".concat(e.from,"-").concat(e.to)})))}),Object(b.jsx)("h4",{children:"".concat(e.result)})]},t)}))}),Object(b.jsx)(L,{history:t})]})};var Q=function(){var e=Object(i.b)(),t=a.a.useState(!0),c=Object(o.a)(t,2),s=c[0],n=c[1],r=a.a.useState(!0),u=Object(o.a)(r,2),j=u[0],m=u[1],d=a.a.useState(!0),h=Object(o.a)(d,2),p=h[0],f=h[1];return a.a.useEffect((function(){localStorage.getItem("Settings")&&(n(JSON.parse(localStorage.getItem("Settings")).isDarkTheme),m(JSON.parse(localStorage.getItem("Settings")).movesRule),f(JSON.parse(localStorage.getItem("Settings")).repititionRule))}),[]),Object(b.jsx)(i.a,{handle:e,children:Object(b.jsxs)("div",{className:s?"theme_dark wrapper":"theme_colored wrapper",children:[Object(b.jsx)(l.a,{exact:!0,path:"/",component:O}),Object(b.jsx)(l.a,{exact:!0,path:"/Game",component:function(){return Object(b.jsx)(P,{handle:e})}}),Object(b.jsx)(l.a,{exact:!0,path:"/Settings",component:function(){return Object(b.jsx)(H,{setIsDarkTheme:n,isDarkTheme:s,movesRule:j,setMovesRule:m,repititionRule:p,setRepititionRule:f})}}),Object(b.jsx)(l.a,{exact:!0,path:"/Tutorial",component:F}),Object(b.jsx)(l.a,{exact:!0,path:"/Records",component:X}),Object(b.jsx)("div",{className:"footer__wrapper",children:Object(b.jsx)(B,{})})]})})},Y=c(18),z=c(26),Z={isGame:!1,currentWord:{},wrongWords:[],lives:5},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return"SET_CURRENT_WORD"===t.type?Object(z.a)(Object(z.a)({},e),{},{currentWord:t.payload}):"SET_CATEGORY"===t.type?Object(z.a)(Object(z.a)({},e),{},{category:t.payload}):e},ee=Object(Y.c)({stateGame:$}),te=c(59),ce=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.d,se=Object(Y.e)(ee,ce(Object(Y.a)(te.a))),ae=c(22),ne=c(88),re=c(60);r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(ae.a,{children:Object(b.jsx)(K.a,{store:se,children:Object(b.jsx)(ne.a,{backend:re.a,children:Object(b.jsx)(Q,{})})})})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.28d9fd88.chunk.js.map