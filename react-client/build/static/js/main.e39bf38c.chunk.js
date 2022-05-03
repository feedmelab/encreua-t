(this["webpackJsonpreact-client"]=this["webpackJsonpreact-client"]||[]).push([[0],{97:function(t,n,e){"use strict";e.r(n);var r,a,i,s,c,o,l,d,b,u,m,f,j,p=e(1),x=e.n(p),h=e(51),g=e.n(h),O=(e(61),e(5)),v=e.n(O),y=e(7),w=e(4),k=e(98),S=e(2),N=e(3),E=(N.b.div(r||(r=Object(S.a)(['\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 2rem;\n\twidth: 100%;\n\talign-items: center;\n\tjustify-content: center;\n\tborder-top-left-radius: 2rem;\n\tborder-top-right-radius: 2rem;\n\tfont-family: "Varela Round", sans-serif;\n']))),N.b.div(a||(a=Object(S.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n\twidth: 100%;\n\timg {\n\t\twidth: 15rem;\n\t\tdisplay: block;\n\t}\n"])))),A=N.b.div(i||(i=Object(S.a)(["\n\tdisplay: flex;\n\twidth: 3rem;\n\theight: 3rem;\n\tjustify-content: center;\n\talign-items: center;\n\tborder: none;\n\tborder-radius: 0.6rem;\n\toverflow: hidden;\n\timg {\n\t\twidth: 2.54rem;\n\t\theight: 2.54rem;\n\t}\n"]))),z=N.b.div(s||(s=Object(S.a)(["\n\tdisplay: flex;\n\twidth: 3rem;\n\tjustify-content: center;\n\talign-items: center;\n\tspan {\n\t\tdisplay: flex;\n\t\twidth: 2.54rem;\n\t\theight: 2.54rem;\n\t\tborder: 1px solid var(--border);\n\t\tborder-radius: 0.6rem;\n\t\tcolor: red;\n\t\tbackground: var(--background);\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t}\n"]))),R=e(0),B=function(){return Object(R.jsxs)("div",{className:"container-fluid d-flex flex-row justify-content-around  pt-3 pb-3",children:[Object(R.jsx)(A,{children:Object(R.jsx)("img",{src:"/fblogo.jpg",alt:"feedmelab brand"})}),Object(R.jsx)(E,{children:Object(R.jsx)("img",{src:"/logo_encreuat.svg",alt:"Emblema encreua't"})}),Object(R.jsx)(z,{children:Object(R.jsx)("span",{children:"?"})})]})},P=e(21),F=e(22),G=e(55),_=new(function(){function t(){Object(P.a)(this,t),this.socket=null}return Object(F.a)(t,[{key:"connect",value:function(t){var n=this;return new Promise((function(e,r){if(n.socket=Object(G.io)(t),!n.socket)return r();n.socket.on("connect",(function(){e(n.socket)})),n.socket.on("connect_error",(function(t){console.error("Error de conexi\xf3n:",t),r(t)}))}))}}]),t}()),C={isInRoom:!1,setInRoom:function(){},room:"",setRoom:function(){},playerSymbol:"",setPlayerSymbol:function(){},isPlayerTurn:!1,setPlayerTurn:function(){},isGameStarted:!1,setGameStarted:function(){},isGameEnded:!1,setGameEnded:function(){},fase:0,setFase:function(){},playerRes:"",setPlayerRes:function(){},dades:[{}],setDades:function(){}},I=x.a.createContext(C),T=new(function(){function t(){Object(P.a)(this,t)}return Object(F.a)(t,[{key:"joinGameRoom",value:function(){var t=Object(y.a)(v.a.mark((function t(n,e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){n.emit("join_game",{roomId:e}),n.on("room_joined",(function(){return t(!0)})),n.on("room_join_error",(function(t){var n=t.error;return r(n)}))})));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()},{key:"updateGame",value:function(){var t=Object(y.a)(v.a.mark((function t(n,e,r){var a;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=0|Number(e[5][0]),0===e[a].filter((function(t){return null===t})).length&&(e[5][0]=a+=1),n.emit("update_game",{chances:e,times:r});case 4:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}()},{key:"onGameUpdate",value:function(){var t=Object(y.a)(v.a.mark((function t(n,e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.on("on_game_update",(function(t){var n=t.chances,r=t.times;e(n,r)}));case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()},{key:"onStartGame",value:function(){var t=Object(y.a)(v.a.mark((function t(n,e){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.on("start_game",e);case 1:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}()}]),t}()),D=e(99),L=Object(N.c)(c||(c=Object(S.a)(["\n\t15% {transform: translateX(5px);}\n\t30% {transform: translateX(-5px);}\n\t50% {transform: translateX(3px);}\n\t65% {transform: translateX(-3px);}\n\t80% {transform: translateX(2px);}\n\t100% {transform: translateX(0);}\n"]))),H=Object(N.b)(k.a)(o||(o=Object(S.a)(["\n\tdisplay: grid;\n\tgrid-template-rows: 1fr 1fr;\n\tgrid-gap: 1rem;\n\t@media only screen and (min-width: 768px) {\n\t\tgrid-template-columns: 1fr 1fr;\n\t\tgrid-gap: 1rem;\n\t}\n"]))),U=N.b.div(l||(l=Object(S.a)(["\n\tborder: 1px solid transparent;\n\tcolor: var(--textclar);\n\tborder-radius: 0.5rem;\n\tbackground: var(--bg-container);\n\tbox-shadow: 0.1rem 0.05rem 0.32rem #444;\n\tpadding: 1.5rem;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n"]))),V=N.b.h2(d||(d=Object(S.a)(["\n\twidth: 75%;\n\tflex-wrap: wrap;\n\tline-height: 1.8rem;\n\tfont-size: 1.6rem;\n\tmargin-bottom: var(--mb);\n\ttext-shadow: 0.2rem 0.2rem 0.9rem #000000;\n"]))),X=N.b.h4(b||(b=Object(S.a)(['\n\tfont-size: 1rem;\n\talign-items: flex-end;\n\tcolor: var(--text);\n\ttext-align: left;\n\tfont-family: "Varela Round", sans-serif;\n']))),J=N.b.h4(u||(u=Object(S.a)(['\n\tfont-size: 1rem;\n\talign-items: flex-start;\n\tcolor: var(--text);\n\ttext-align: left;\n\tfont-family: "Varela Round", sans-serif;\n']))),q=N.b.div(m||(m=Object(S.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-gap: 0.4rem;\n\tjustify-items: stretch;\n"]))),K=N.b.input(f||(f=Object(S.a)(['\n\twidth: 100%;\n\tborder-radius: 0.3rem;\n\tborder: 1px solid var(--text);\n\toutline: none;\n\tpadding: 0 0.86rem;\n\tcolor: black;\n\tfont-size: 0.6rem;\n\tbackground: var(--back-white);\n\tfont-family: "Orbitron", sans-serif;\n\n\ttext-transform: uppercase;\n\tletter-spacing: 0.02rem;\n\t&:hover {\n\t\ttransition: 0.6s ease;\n\n\t\tletter-spacing: 0.12rem;\n\t\tbackground: var(--bg-childs);\n\t\tborder: 3px solid var(--text);\n\t}\n\t&:visited {\n\t\tbackground: var(--bg-childs);\n\t}\n']))),M=Object(N.b)(D.a)(j||(j=Object(S.a)(["\n\tborder: 0px solid var(--border);\n\tbackground: var(--bg-childs);\n\n\ttext-shadow: 1px 1px rgb(0, 0, 80);\n\n\t&:hover {\n\t\tanimation: "," 1s ease;\n\t\tanimation-iteration-count: 1;\n\t\tborder: 0px solid var(--border);\n\n\t\tbackground: var(--btn-up);\n\t}\n"])),L);function Z(t){var n=Object(p.useState)(""),e=Object(w.a)(n,2),r=e[0],a=e[1],i=Object(p.useState)(!1),s=Object(w.a)(i,2),c=s[0],o=s[1],l=Object(p.useContext)(I),d=l.setInRoom,b=(l.isInRoom,function(){var t=Object(y.a)(v.a.mark((function t(n){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),e=_.socket,r&&""!==r.trim()&&e){t.next=4;break}return t.abrupt("return");case 4:return o(!0),t.next=7,T.joinGameRoom(e,r).catch((function(t){alert(t)}));case 7:t.sent&&d(!0),o(!1);case 10:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}());return Object(R.jsx)("form",{onSubmit:b,children:Object(R.jsxs)(H,{children:[Object(R.jsxs)(U,{children:[Object(R.jsx)(V,{children:"Benvingut/da a l'Encreua't!"}),Object(R.jsxs)(X,{children:["Un joc on haur\xe0s de trobar les paraules correctes dedu\xefnt-les amb les descripcions que t'anirem donant...",Object(R.jsx)("br",{}),"Per\xf2 aix\xf2 no \xe9s tot, haur\xe0s de descobrir-ne m\xe9s de les que en descobreixi el teu contrincant!!"]})]}),Object(R.jsxs)(U,{children:[Object(R.jsx)(J,{children:"Crea't una sala i comparteix el teu id o introdueix l'id del teu contrincant i comen\xe7a a jugar!"}),Object(R.jsxs)(q,{children:[Object(R.jsx)(K,{placeholder:"Room ID",value:r,onChange:function(t){var n=t.target.value.toUpperCase();a(n)}}),Object(R.jsx)(M,{type:"submit",disabled:c,children:c?"CONECTANT...":"ENCREUA'T"})]})]})]})})}var Q,W,Y,$,tt,nt,et,rt,at,it,st,ct,ot,lt,dt,bt,ut,mt,ft,jt,pt,xt,ht,gt,Ot,vt,yt,wt,kt=e(13),St=(Object(N.c)(Q||(Q=Object(S.a)(["\n\t0%{ transform: scale( 1 ) }\n\t20%{ transform: scale( 1.15 ) }\n\t40%{ transform: scale( 1 ); color: var(--color-secondary); }\n\t60%{ transform: scale( 1.1 ) }\n\t80%{ transform: scale( 1 ) }\n\t100%{ transform: scale( 1 ) }\n"]))),Object(N.c)(W||(W=Object(S.a)(["\n\t0%{ color:  var(--color-primary) }\n\t50%{ color: var(--color-secondary); }\n\t100%{ color: var(--color-secondary); }\n"])))),Nt=N.b.div(Y||(Y=Object(S.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: space-around;\n\tjustify-content: space-between;\n\tletter-spacing: 0.03rem;\n\tspan.number {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\t/*color: white;\n\t\t animation: "," 1s infinite; \n\t\tbackground-color: white;*/\n\t\tborder-radius: 50%;\n\t\twidth: 50%;\n\t\ttext-shadow: none;\n\t\tfont-size: 0.9rem;\n\t}\n\tspan.lastseconds {\n\t\tcolor: red;\n\t\tanimation: "," 1s infinite;\n\t}\n\tspan.lastsecond {\n\t\tcolor: #ff8888;\n\t\tanimation: none !important;\n\t}\n\t.lastsecondfade {\n\t\tvisibility: hidden;\n\t\topacity: 0;\n\t\ttransition: visibility 0s 1s, opacity 1s linear;\n\t}\n\n\tspan.torntrue {\n\t\tfont-size: 0.5rem;\n\t\twidth: 50%;\n\t\tfont-weight: normal;\n\t\tcolor: var(--color-secondary);\n\t}\n"])),St,St),Et=e(96),At=Et.Howl,zt=Et.Howler,Rt=function(t){var n=t.onendtimer,e=t.setRemaining,r=t.initialSeconds,a=void 0===r?25:r,i=t.soundActive,s=Object(p.useState)(a),c=Object(w.a)(s,2),o=c[0],l=c[1],d=new At({src:["/sounds/dong.mp3"],onplayerror:function(){d.once("unlock",(function(){d.play()}))},volume:.5});return Object(p.useEffect)((function(){zt.autoUnlock=!1;var t=setInterval((function(){o>0&&(l((function(t){return t-1})),o>0&&o-1<5&&i&&(d.rate(o-1===0?"1.1":"0.5"),d.play())),0===o&&(l(0),n(),clearInterval(t))}),1e3);return function(){e(o),clearInterval(t)}})),Object(R.jsxs)(Nt,{children:[Object(R.jsx)("span",{className:0===o?"torntrue lastsecondfade":"torntrue",children:"El teu torn"}),-1===o?null:Object(R.jsx)("span",{className:o<5?0===o?"lastsecond lastsecondfade number":"lastseconds number":"number",children:o})]})},Bt=e(32),Pt=e.n(Bt),Ft=Object(N.c)($||($=Object(S.a)(["\n\t0%{ transform: scale( 1 ) }\n\t20%{ transform: scale( 1.15 ) rotate(-360deg); }\n\t40%{ transform: scale( 1 ) rotate(0deg)}\n\t50%{ transform: scale( 1.1 ) }\n\t80%{ transform: scale( 1 ) }\n\t100%{ transform: scale( 1 ) }\n"]))),Gt=N.b.div(tt||(tt=Object(S.a)([""]))),_t=N.b.div(nt||(nt=Object(S.a)(["\n\tborder: none;\n\tmargin-bottom: 1rem;\n\tcolor: var(--textclar);\n\tborder-radius: 0.5rem;\n\tbackground: ",";\n\tpadding: 0.3rem;\n\tdisplay: flex;\n\tflex-direction: row;\n\tbox-shadow: 0.1rem 0.05rem 0.32rem #444;\n\timg {\n\t\tdispay: flex;\n\t\talign-self: center;\n\t\tjustify-self: center;\n\t}\n"])),(function(t){return t.bgEffect?'url("/bg.png")':"var(--bg-container)"})),Ct=N.b.div(et||(et=Object(S.a)(["\n\tborder: 1px solid transparent;\n\tmargin-bottom: 1rem;\n\tcolor: var(--textclar);\n\tborder-radius: 0.5rem;\n\tbackground: var(--bg-container);\n\tbackground: ",";\n\tpadding: 0.6rem;\n\tdisplay: flex;\n\tjustify-content: center;\n\n\timg {\n\t\twidth: auto;\n\t\tdispay: flex;\n\t\talign-self: center;\n\t\tjustify-self: center;\n\t}\n"])),(function(t){return t.bgEffect?'url("/bg.png")':"var(--bg-container)"})),It=N.b.div(rt||(rt=Object(S.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n\ttext-align: center;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tcolor: var(--text);\n\t.effect {\n\t\tcursor: pointer;\n\t\tmargin-right: 0.3rem;\n\n\t\t&:hover {\n\t\t\tanimation: "," 1.5s infinite;\n\t\t}\n\t}\n\t.effecton {\n\t\tfilter: grayscale(100%);\n\t}\n\tspan {\n\t\tfont-size: 0.7rem;\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\ttext-shadow: var(--shadow);\n\t}\n\th3 {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 0.8rem;\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\ttext-shadow: var(--shadow);\n\t}\n\tspan img {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\tspan.torntrue {\n\t\tcolor: var(--color-secondary);\n\t\tanimation: "," 1.5s infinite;\n\t}\n\tspan.tornfalse {\n\t\tcolor: #46dff0;\n\t}\n"])),Ft,Ft),Tt=N.b.div(at||(at=Object(S.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: center;\n\ttext-align: center;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0.5rem;\n\n\tcolor: var(--text);\n\th3 {\n\t\tfont-size: 0.8rem;\n\t\ttext-shadow: var(--shadow);\n\t}\n\n\th4 {\n\t\tfont-size: 1rem;\n\t\tdisplay: flex;\n\t\ttext-shadow: var(--shadow);\n\t}\n\t.l {\n\t\tfont-size: 0.8rem;\n\t\tbox-shadow: 0.1rem 0.05rem 0.32rem #777;\n\t\tpadding-right: 1.2rem;\n\t\ttext-align: right;\n\t\tborder: 1px solid var(--border);\n\t\tbackground: var(--color-clar);\n\t}\n\t.marcador {\n\t\tpadding: 0.5rem;\n\t\tborder-radius: 0.5rem;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\theight: 3.8rem;\n\t\tflex-direction: column;\n\t\tjustify-content: flex-start;\n\t\talign-items: center;\n\t}\n\t.marcadorcentral {\n\t\tpadding: 0.5rem;\n\t\tborder-radius: 0.5rem;\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tflex-direction: column;\n\t\tjustify-content: flex-start;\n\t\talign-items: center;\n\t}\n\tli span,\n\tspan {\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\tjustify-content: center;\n\t\tmargin-bottom: 0.6rem;\n\t\ttext-shadow: var(--shadow);\n\t}\n\n\t.r {\n\t\tfont-size: 0.8rem;\n\t\ttext-align: left;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tborder: 1px solid var(--border);\n\t\tbackground: var(--color-clar);\n\t\tbox-shadow: 0.1rem 0.05rem 0.32rem #777;\n\t}\n\tul,\n\tli {\n\t\tlist-style: none;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t}\n\tli h5 {\n\t\tfont-size: 1rem;\n\t\tfont-weight: bold;\n\t}\n\tli p {\n\t\tfont-size: 0.8rem;\n\t\tfont-weight: normal;\n\t}\n"]))),Dt=N.b.div(it||(it=Object(S.a)(['\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: flex-start;\n\tbackground: var(--color-clar);\n\tborder-radius: 0.3rem;\n\twidth: 100%;\n\n\tdiv.true {\n\t\tbackground: #99999992;\n\t}\n\tdiv.true::after {\n\t\tcontent: "x";\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 0.4rem;\n\t}\n\t.r {\n\t\ttext-align: right;\n\t}\n']))),Lt=N.b.div(st||(st=Object(S.a)(["\n\tdisplay: flex;\n\tmargin: auto;\n\twidth: 0.49rem;\n\theight: 0.49rem;\n\tborder: 2px solid var(--textatt);\n\tdrop-shadow: 1rem 1rem 10px #444444;\n\tbackground-color: red;\n\tborder-radius: 10rem;\n"]))),Ht=N.b.div(ct||(ct=Object(S.a)(["\n\tdisplay: flex;\n\tmargin: auto;\n\twidth: 0.49rem;\n\theight: 0.49rem;\n\tborder: 2px solid var(--textatt);\n\tdrop-shadow: 1rem 1rem 10px #444444;\n\tbackground-color: white;\n\tborder-radius: 10rem;\n\tanimation: "," 2.5s infinite;\n"])),Ft),Ut=N.b.div(ot||(ot=Object(S.a)(["\n\tdisplay: flex;\n\tmargin: auto;\n\twidth: 0.49rem;\n\theight: 0.49rem;\n\tborder: 2px solid var(--textatt);\n\tdrop-shadow: 1rem 1rem 10px #444444;\n\tbackground: #99999992;\n\tborder-radius: 10rem;\n"]))),Vt=(N.b.div(lt||(lt=Object(S.a)(["\n\tdisplay: flex;\n\tmargin: auto;\n\twidth: 0.49rem;\n\theight: 0.49rem;\n\tborder: 1px solid white;\n\tdrop-shadow: 1rem 1rem 5px #444444;\n\tbackground: #99999992;\n\tborder-radius: 10rem;\n\tanimation: "," 2.5s infinite;\n"])),Ft),N.b.div(dt||(dt=Object(S.a)(["\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n\tbackground: transparent;\n\tbottom: 0;\n\tz-index: 98;\n\tcursor: default;\n"]))),N.b.div(bt||(bt=Object(S.a)(['\n\twidth: auto;\n\theight: 100%;\n\tdisplay: flex;\n\tcolor: var(--text);\n\talign-items: center;\n\tjustify-content: center;\n\tfont-size: 0.8rem;\n\ttext-align: center;\n\tfont-weight: bold;\n\tpadding: auto;\n\n\tfont-family: "Varela Round", sans-serif;\n'])))),Xt=N.b.div(ut||(ut=Object(S.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\n\ttext-align: left;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0.5rem;\n\tborder-left: 1px solid var(--border);\n\tborder-right: 1px solid var(--border);\n\tcolor: var(--text);\n\th4 {\n\t\tdisplay: flex;\n\t\tfont-size: 1.2rem;\n\t\tmargin-bottom: 1rem;\n\t\twidth: 100%;\n\t\ttext-shadow: var(--shadow);\n\t}\n\tp {\n\t\tdisplay: flex;\n\t\tpadding: 0 1rem;\n\t\tfont-size: 0.8rem;\n\t\tcolor: black;\n\t\tletter-spacing: 0.043rem;\n\t}\n"]))),Jt=N.b.div(mt||(mt=Object(S.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: stretch;\n\tjustify-content: center;\n\th4 {\n\t\tdisplay: flex;\n\t\tfont-size: 1.2rem;\n\t\tmargin-bottom: 1rem;\n\t\twidth: 100%;\n\t}\n"]))),qt=N.b.div(ft||(ft=Object(S.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\twidth: 100%;\n"]))),Kt=N.b.div(jt||(jt=Object(S.a)(["\n\tmin-width: 0.4rem;\n\twidth: 100%;\n\theight: 2.8rem;\n\tborder-radius: 0.5rem;\n\tborder: 1px solid #dedede;\n\tbackground-color: white;\n\toverflow: hidden;\n\tperspective: 1000px;\n\ttransition: transform 0.8s;\n\ttransform-style: preserve-3d;\n\n\tspan {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tpadding: auto;\n\t\tcolor: black;\n\t\ttext-align: center;\n\t\twidth: 100%;\n\t\theight: 100% !important;\n\t\theight: inherit;\n\t\ttext-transform: uppercase;\n\t}\n"]))),Mt=N.b.form(pt||(pt=Object(S.a)(['\n\tdisplay: flex;\n\tflex-direction: column;\n\n\ttext-align: center;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0.5rem;\n\tborder-left: 1px solid var(--border);\n\tborder-right: 1px solid var(--border);\n\tcolor: var(--text);\n\th4 {\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\tfont-size: 1rem;\n\t\tmargin-bottom: 1rem;\n\t\twidth: 100%;\n\t\ttext-shadow: var(--shadow);\n\t}\n\tinput {\n\t\twidth: 100%;\n\t\theight: 2.6rem;\n\t\tpadding-left: 0.4rem;\n\t\tmargin-bottom: 1rem;\n\t\toutline: none;\n\t\tborder: none;\n\t\tborder-radius: 0.2rem;\n\t\ttext-transform: uppercase;\n\t}\n\tbutton {\n\t\tborder: 0;\n\t\tdisplay: flex;\n\t\tfont-size: 1rem;\n\t\ttext-shadow: 1px 1px rgb(0, 0, 80);\n\t\tjustify-content: center;\n\t\tletter-spacing: 0.03rem;\n\t\tfont-family: "Varela Round", sans-serif;\n\t}\n\tbutton.btn-danger {\n\t\tbackground: var(--bg-childs) !important;\n\t\t&:hover {\n\t\t\tbackground: #333 !important;\n\t\t\ttext-shadow: none;\n\t\t}\n\t}\n']))),Zt=N.b.div(xt||(xt=Object(S.a)(["\n\tdisplay: grid;\n\tmargin-top: 0.8rem;\n\tgrid-template-columns: 1fr 1fr;\n\tgrid-gap: 0.5rem;\n"]))),Qt=N.b.div(ht||(ht=Object(S.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-around;\n\tmargin: 0;\n\tpadding: 0;\n\twidth: 100%;\n\tdiv.or1 {\n\t\torder: 1;\n\t}\n\tdiv.or3 {\n\t\torder: 2;\n\t}\n\tdiv.or2 {\n\t\torder: 3;\n\t}\n"]))),Wt=N.b.div(gt||(gt=Object(S.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\tpadding: 0.5rem;\n\twidth: 100%;\n\tborder-radius: 0.3rem;\n\tjustify-content: space-around;\n\talign-items: flex-start;\n\t.or1 {\n\t\torder: 1;\n\t}\n\n\t.or2 {\n\t\torder: 2;\n\t}\n\t.or3 {\n\t\torder: 3;\n\t}\n\tspan.index {\n\t\tdisplay: flex;\n\t\talign-self: center;\n\t\tpadding: 0 !important;\n\t\tjustify-content: center;\n\t\tcolor: var(--text-par);\n\t\tflex-shrink: 5;\n\t}\n\tspan img {\n\t\tdisplay: flex;\n\t}\n\t.loose {\n\t\twidth: 0.8rem;\n\t\tfilter: grayscale(100%);\n\t}\n\t.win {\n\t\tdisplay: flex;\n\t\twidth: 0.9rem;\n\t\tanimation: "," 2.5s infinite;\n\t\tfilter: drop-shadow(var(--shadow));\n\t}\n\t.pair {\n\t\tdisplay: flex;\n\t\twidth: 0.9rem;\n\t\tfilter: drop-shadow(var(--shadow)) grayscale(75%);\n\t}\n\tspan.paraula {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tcolor: var(--color-fosc);\n\n\t\tflex-wrap: wrap;\n\t\tfont-size: 0.7rem;\n\t}\n\tdiv.block {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tborder-radius: 0.5rem;\n\t\tpadding: 0.8rem;\n\t\twidth: 49%;\n\t\tborder: 1px solid var(--border);\n\t\tbackground: var(--color-clar);\n\t\tbox-shadow: 0.1rem 0.05rem 0.32rem #777;\n\t}\n\tdiv.resultlist {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\n\t\tbackground-color: #ffffff25;\n\t\tborder-radius: 0.17rem;\n\t\tmargin-bottom: 0.3rem;\n\t}\n\tdiv.resultlistright {\n\t\tjustify-content: flex-end;\n\t}\n\t.respostes-header {\n\t\tdisplay: flex;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t\tcolor: var(--text-par);\n\t\tpadding: 0.2rem 0.2rem;\n\t\tjustify-content: space-between;\n\t\tfont-size: 0.5rem;\n\t\tlist-style: none;\n\t}\n\tdiv.resultlist span {\n\t\tdisplay: flex;\n\t\tfont-family: verdana;\n\t\tfont-weight: normal;\n\t\tdisplay: flex;\n\t\twidth: auto;\n\t\tpadding: 0.3rem;\n\t\tflex-basis: 100%;\n\t}\n\tspan.remaining {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tfont-size: 0.5rem;\n\t\tcolor: var(--text);\n\t\tflex-shrink: 3;\n\t}\n\th5 {\n\t\tfont-size: 0.8rem;\n\n\t\ttext-shadow: 0.05rem 0.1rem 3px var(--color-fosc);\n\t\tborder-bottom: 3px solid var(--border);\n\t\tpadding-bottom: 0.3rem;\n\t}\n\t.teu {\n\t\tcolor: var(--color-secondary);\n\t}\n\t.seu {\n\t\tcolor: var(--color-fosc);\n\t}\n"])),Ft),Yt=N.b.div(Ot||(Ot=Object(S.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\ttext-align: center;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0.5rem;\n\th4 {\n\t\tfont-size: 1rem;\n\t\ttext-shadow: 0.05rem 0.1rem 3px var(--color-fosc);\n\t}\n"]))),$t=N.b.div(vt||(vt=Object(S.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\ttext-align: left;\n\twidth: 100%;\n\n\tpadding: 2rem;\n\th5 {\n\t\tfont-size: 1rem;\n\t\tcolor: (--text-par);\n\t\tfont-weight: bold;\n\t\tletter-spacing: 0.1rem;\n\t\ttext-shadow: 0.05rem 0.1rem 3px var(--color-fosc);\n\t}\n\th4 {\n\t\tfont-size: 1.2rem;\n\t\tmargin-bottom: 2.5rem;\n\t\tcolor: var(--textclar);\n\t\tfont-weight: bold;\n\t\tletter-spacing: 0.1rem;\n\t\ttext-shadow: 0.05rem 0.1rem 3px var(--color-fosc);\n\t}\n\tp {\n\t\tfont-size: 0.7rem;\n\t\twidth: 75%;\n\t\tcolor: var(--text-par);\n\t\tcolor: ",";\n\t}\n\tul,\n\tli {\n\t\tlist-style: none;\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n\tdiv.thankyou {\n\t\tdisplay: flex;\n\t\twidth: auto;\n\t\tjustify-content: flex-end;\n\t\theight: 3rem;\n\t\tmargin-top: 1rem;\n\t\tcolor: var(--text-par);\n\t}\n\tdiv.thankyou span {\n\t\tfont-size: 0.6rem;\n\t\tpadding-right: 0.3rem;\n\t}\n\timg {\n\t\tobject-fit: contain;\n\t\theight: 2rem;\n\t}\n\ta {\n\t\tmargin-right: 0.2rem;\n\t}\n"])),(function(t){return t.bgEffect?"var(--text-par)":"var(--color-fosc)"})),tn=N.b.div(yt||(yt=Object(S.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n\tdiv {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t}\n\th4 {\n\t\twidth: 100%;\n\t\ttext-align: center;\n\t}\n"]))),nn=function(){var t=Object(p.useState)([null,null,null,null,null]),n=Object(w.a)(t,2),e=n[0],r=n[1],a=Object(p.useState)([[null,null],[null,null],[null,null],[null,null],[null,null]]),i=Object(w.a)(a,2),s=i[0],c=i[1],o=Object(p.useState)([0,0]),l=Object(w.a)(o,2),d=l[0],b=l[1],u=Object(p.useState)([null,null,null,null,null]),m=Object(w.a)(u,2),f=m[0],j=m[1],x=Object(p.useState)([[null,null],[null,null],[null,null],[null,null],[null,null],[0]]),h=Object(w.a)(x,2),g=h[0],O=h[1],k=Object(p.useState)([[null,null],[null,null],[null,null],[null,null],[null,null]]),S=Object(w.a)(k,2),N=S[0],E=S[1],A=Object(p.useState)(!1),z=Object(w.a)(A,2),B=z[0],P=z[1],F=Object(p.useState)(!0),G=Object(w.a)(F,2),C=G[0],D=G[1],L=Object(p.useContext)(I),H=L.room,U=L.setRoom,V=L.playerSymbol,X=L.setPlayerSymbol,J=L.fase,q=L.setFase,K=L.setPlayerTurn,M=L.isPlayerTurn,Z=L.setGameStarted,Q=L.isGameStarted,W=L.isGameEnded,Y=L.setGameEnded,$=L.playerRes,tt=L.setPlayerRes,nt=L.dades,et=L.setDades,rt=Object(p.useState)(null),at=Object(w.a)(rt,2),it=at[0],st=at[1],ct=function(){var t=Object(y.a)(v.a.mark((function t(n,e,r,a){var i,s;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n&&n.preventDefault(),""===a&&(a="Passo"),e<5&&(i=Object(kt.a)(g),s=Object(kt.a)(N),""!==i[e][r]&&null!==i[e][r]||(i[e][r]=a,s[e][r]=it,O(i),E(s)),_.socket&&(T.updateGame(_.socket,i,s),K(!1),tt(""),4===e&&dt(i)));case 3:case"end":return t.stop()}}),t)})));return function(n,e,r,a){return t.apply(this,arguments)}}(),ot=function t(){_.socket&&T.onGameUpdate(_.socket,(function(n,e){O(n),E(e),t(),K(!0),dt(n)}))},lt=function(t,n){var e=t.replace(/[a-zA-Z\xc0-\xfa]/gi,"*");return n?e:t},dt=function(t){4===J&&(t[4].some((function(t){return null===t}))||(K(!1),Y(!0)))},bt=function(t){return t>10?"Enhorabona!\nHas guanyat la partida amb una puntuaci\xf3 espectacular!":t<5?"Enhorabona! Has guanyat la partida..per\xf2 pel p\xe8ls..;)":"Enhorabona!!\nHas guanyat la partida!"};Object(p.useEffect)((function(){ot()})),Object(p.useEffect)((function(){!function(){if(J<5&&0===N[J].filter((function(t){return null===t})).length){var t=N[J].reduce((function(t,n){return t===n?"AB":t<n?"A":"B"})),n=[],a=(g[J].filter((function(t,e){var r=null===t||void 0===t?void 0:t.toString();return"Passo"!==r&&r===nt[J].d.nom&&n.push(0===e?"A":"B"),1===e?n.join(""):null})),Object(kt.a)(e)),i=Object(kt.a)(s),o=Object(kt.a)(f);a[J]=String(t),i[J]=[].concat(n);var l=Object(kt.a)(d);"A,B"===String(i[J])?(o[J]=a[J],l[0]=l[0]+="A"===o[J]?3:"AB"===o[J]?1:2,l[1]=l[1]+="B"===o[J]?3:"AB"===o[J]?1:2):""!==String(i[J])&&(o[J]=String(i[J]),l["A"===String(i[J])?0:1]=d["A"===String(i[J])?0:1]+=3),b(l),c(i),r(a),j(o),q(g[5][0])}}()})),Object(p.useEffect)((function(){_.socket&&T.onStartGame(_.socket,(function(t){et(t.dades),Z(!0),X(t.symbol),U(t.room),t.start?K(!0):K(!1)}))}));return Object(R.jsxs)(Gt,{children:[Object(R.jsx)(_t,{bgEffect:B,children:Object(R.jsxs)(It,{children:[!Q&&Object(R.jsx)(Vt,{children:"Esperant a un altre contrincant per a comen\xe7ar..."}),Q&&Object(R.jsxs)("div",{className:"d-flex flex-row justify-content-around",children:[Object(R.jsxs)("span",{children:["SALA: ",H]}),Object(R.jsxs)("h3",{children:["Jugador: ",V]}),Object(R.jsxs)("span",{children:["Fase: ",J]}),Object(R.jsxs)("span",{children:["Punts: ",d["A"===V?0:1]]}),Object(R.jsxs)("span",{children:[Object(R.jsx)("div",{className:B?"effect":"effect effecton",onClick:function(){P((function(t){return!t}))},children:"\ud83d\ude00"}),Object(R.jsx)("div",{className:C?"effect":"effect effecton",onClick:function(){D((function(t){return!t}))},children:"\ud83e\udd10"})]})]})]})}),W?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(_t,{bgEffect:B,children:Object(R.jsxs)(Yt,{children:[Object(R.jsx)("h4",{children:"La partida ha finalitzat"}),Object(R.jsxs)(Wt,{children:[Object(R.jsxs)("div",{className:"A"===V?"or1 block l":"or2 block l",children:[Object(R.jsx)("h5",{className:"A"===V?"teu":"seu",children:"A"===V?"Les teves respostes":"Les seves respostes"}),g.map((function(t,n){return n<5?Object(R.jsxs)("div",{children:[0===n?Object(R.jsxs)("ul",{className:"respostes-header",children:[Object(R.jsx)("li",{className:"B"===V?"or1":"or3",children:"temps"}),Object(R.jsx)("li",{className:"or2",children:"paraula"}),Object(R.jsx)("li",{className:"B"===V?"or3":"or1",children:"resultat"})]},n):null,t[0]?Object(R.jsxs)("div",{className:"resultlist",children:[Object(R.jsx)("span",{className:"B"===V?"or1 ":"or2 ",children:"A"===V?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("span",{className:"paraula",children:lt(t[0],!1)}),Object(R.jsxs)("span",{className:"remaining",children:["(",N[n][0]," s.)"]})]}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("span",{className:"remaining",children:["(",N[n][0]," s.)"]}),Object(R.jsx)("span",{className:"paraula",children:lt(t[0],!1)})]})}),Object(R.jsx)("span",{className:"A"===V?"or1 index":"or2 index",children:Object(R.jsx)("img",{className:"AB"===e[n]?"pair":"A"===e[n]?"win":"loose",src:"/asterisc_encreuat.svg",alt:""})})]}):null]}):null}))]}),Object(R.jsxs)("div",{className:"B"===V?"or1 block l":"or2 block l",children:[Object(R.jsx)("h5",{className:"B"===V?"teu":"seu",children:"B"===V?"Les teves respostes":"Les seves respostes"}),g.map((function(t,n){return n<5?Object(R.jsxs)("div",{children:[0===n?Object(R.jsxs)("ul",{className:"respostes-header",children:[Object(R.jsx)("li",{className:"A"===V?"or1":"or3",children:"temps"}),Object(R.jsx)("li",{className:"or2",children:"paraula"}),Object(R.jsx)("li",{className:"A"===V?"or3":"or1",children:"resultat"})]},n):null,t[1]?Object(R.jsxs)("div",{className:"resultlist",children:[Object(R.jsx)("span",{className:"B"===V?"or2":"or1",children:"B"===V?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("span",{className:"paraula",children:lt(t[1],!1)}),Object(R.jsxs)("span",{className:"remaining",children:["(",N[n][1]," s.)"]})]}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("span",{className:"remaining",children:["(",N[n][1]," s.)"]}),Object(R.jsx)("span",{className:"paraula",children:lt(t[1],!1)})]})}),Object(R.jsx)("span",{className:"A"===V?"or2 index":"or1 index",children:Object(R.jsx)("img",{className:"AB"===e[n]?"pair":"B"===e[n]?"win":"loose",src:"/asterisc_encreuat.svg",alt:""})})]}):null]}):null}))]})]})]})}),Object(R.jsx)(_t,{bgEffect:B,children:Object(R.jsx)($t,{children:Object(R.jsx)(tn,{children:d[0]>d[1]?"A"===V?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(Pt.a,{colors:["#E7B141","#569F99"],drawShape:function(t){t.fillRect(2,2,5,8)}}),Object(R.jsx)("h4",{children:bt(d[0])})]}):Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("h4",{children:["Has perdut... :-(",Object(R.jsx)("br",{}),"Torna-hi!"]})}):d[0]===d[1]?d[1]>0?Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("h4",{children:["Taules ;)",Object(R.jsx)("br",{}),"Bona partida!"]})}):Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("h4",{children:["Si tu passes...",Object(R.jsx)("br",{}),"jo tamb\xe9 passo ;)"]})}):"B"===V?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(Pt.a,{colors:["#E7B141","#569F99"],drawShape:function(t){t.fillRect(2,2,3,6)}}),Object(R.jsx)("h4",{children:bt(d[1])})]}):Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)("h4",{children:["Has perdut! :-(",Object(R.jsx)("br",{}),"Torna-hi!"]})})})})}),Object(R.jsx)(_t,{bgEffect:B,children:Object(R.jsxs)($t,{children:[Object(R.jsx)("h4",{children:"Respostes correctes"}),Object(R.jsx)("ul",{children:Object(kt.a)(nt).map((function(t,n){return Object(R.jsxs)("li",{children:[Object(R.jsx)("h5",{children:t.d.nom}),Object(R.jsx)("p",{children:t.d.descripcio})]},n)}))}),Object(R.jsxs)("div",{className:"thankyou",children:[Object(R.jsx)("span",{children:"Agra\xefments a:"}),Object(R.jsx)("a",{href:"https://dlc.iec.cat/",rel:"noreferrer",target:"_blank",children:Object(R.jsx)("img",{src:"/LOGO_IEC2.png",alt:""})}),Object(R.jsx)("a",{href:"https://vilaweb.cat/",rel:"noreferrer",target:"_blank",children:Object(R.jsx)("img",{src:"/vilaweb.png",alt:""})})]})]})})]}):null,Q&&!W?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(_t,{bgEffect:B,children:Object(R.jsx)(Yt,{children:Object(R.jsx)(Tt,{children:Object(R.jsxs)(Qt,{children:[Object(R.jsxs)("div",{className:"A"===V?"or1 l marcador":"or2 r marcador",children:[Object(R.jsx)("span",{children:"Jugador A"}),Object(R.jsx)(Dt,{children:g.map((function(t,n){return n<5?null===t[0]?n!==J?Object(R.jsx)(Ut,{},n):Object(R.jsx)(Ht,{},n):Object(R.jsx)(Lt,{},n):null}))})]}),Object(R.jsxs)("div",{className:"or3 marcadorcentral",children:[Object(R.jsx)("h4",{children:"Respostes"}),M&&J<5?Object(R.jsx)(Rt,{soundActive:C,inititalSeconds:10,onendtimer:function(){J<5&&ct(null,J,"A"===V?0:1,"Passo")},setRemaining:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;t&&st(25-(t-1))}}):null]}),Object(R.jsxs)("div",{className:"B"===V?"or1 r marcador":"or2 r marcador",children:[Object(R.jsx)("span",{children:"Jugador B"}),Object(R.jsx)(Dt,{children:g.map((function(t,n){return n<5?null===t[1]?n!==J?Object(R.jsx)(Ut,{},n):Object(R.jsx)(Ht,{},n):Object(R.jsx)(Lt,{},n):null}))})]})]})})})}),Object(R.jsx)(_t,{bgEffect:B,children:Object(R.jsxs)(Xt,{children:[M&&J<5?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("h4",{children:"Definici\xf3:"}),Object(R.jsx)("p",{children:nt[J].d.descripcio})]}):Object(R.jsx)(R.Fragment,{children:M?null:Object(R.jsxs)("span",{className:"d-flex flex-row justify-content-center align-center",children:[Object(R.jsx)("img",{src:"/loading_balls.svg",alt:""})," Torn del contrincant"]})}),Object(R.jsx)(Jt,{children:Object(R.jsx)(qt,{children:M&&J<5?nt[J].d.nom.split("").map((function(t,n){return Object(R.jsx)(Kt,{children:Object(R.jsx)("span",{children:0===n?t:"*"})},n)})):null})})]})}),M&&J<5?Object(R.jsx)(_t,{bgEffect:B,children:Object(R.jsxs)(Mt,{onKeyDown:function(t){"Enter"===t.key&&t.preventDefault()},children:[Object(R.jsx)("h4",{children:"La teva resposta"}),Object(R.jsx)("input",{type:"text",required:!0,"data-errormessage-value-missing":"Digues quelcom raonable..",onChange:function(t){t.preventDefault();var n=t.target.value.toLowerCase();tt(n)}}),Object(R.jsxs)(Zt,{children:[Object(R.jsx)("button",{className:"btn btn-secondary",type:"button",onClick:function(t){return ct(t,J,"A"===V?0:1,"Passo")},children:"PASSAR"}),Object(R.jsx)("button",{className:"btn btn-danger",type:"button",onKeyPress:function(t){"Enter"===t.key&&t.preventDefault()},onClick:function(t){return ct(t,J,"A"===V?0:1,$)},children:"ENVIAR"})]})]})}):null]}):W?null:Object(R.jsx)(Ct,{bgEffect:B,children:Object(R.jsx)("img",{src:"/loading_balls.svg",alt:""})})]})},en=function(){var t=Object(p.useState)(!1),n=Object(w.a)(t,2),e=n[0],r=n[1],a=Object(p.useState)(""),i=Object(w.a)(a,2),s=i[0],c=i[1],o=Object(p.useState)(!1),l=Object(w.a)(o,2),d=l[0],b=l[1],u=Object(p.useState)(!1),m=Object(w.a)(u,2),f=m[0],j=m[1],x=Object(p.useState)(!1),h=Object(w.a)(x,2),g=h[0],O=h[1],S=Object(p.useState)([]),N=Object(w.a)(S,2),E=N[0],A=N[1],z=Object(p.useState)(""),P=Object(w.a)(z,2),F=P[0],G=P[1],C=Object(p.useState)(0),T=Object(w.a)(C,2),D=T[0],L=T[1],H=Object(p.useState)(""),U=Object(w.a)(H,2),V=U[0],X=U[1],J=function(){var t=Object(y.a)(v.a.mark((function t(){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.connect("https://encreuat.feedmelab.com:9000").catch((function(t){console.log("Error: ",t)}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(p.useEffect)((function(){J()}),[]);var q={isInRoom:e,setInRoom:r,playerSymbol:s,setPlayerSymbol:c,isPlayerTurn:d,setPlayerTurn:b,isGameStarted:f,setGameStarted:j,isGameEnded:g,setGameEnded:O,room:F,setRoom:G,fase:D,setFase:L,playerRes:V,setPlayerRes:X,dades:E,setDades:A};return Object(R.jsx)(I.Provider,{value:q,children:Object(R.jsxs)(k.a,{children:[Object(R.jsx)(B,{}),!e&&Object(R.jsx)(Z,{}),e&&Object(R.jsx)(nn,{})]})})},rn=Object(N.a)(wt||(wt=Object(S.a)(["\n\n    html, * {\n        margin: 0;\n        padding: 0;\n    }\n\tbody {\n        text-rendering: optimizelegibility;\n        ","\n\t\n        background-size: cover;\n        background-color: #f2f2f2;\n        \n        font-family: 'Lexend', sans-serif;\n        display: flex;\n        justify-content: space-between;\n        align-items: space-between;\n        margin: 0;\n        padding: 0;\n        box-sizing: content-box;\n        width: 100%; \n       \n\t}\n    :root {\n        --text: #eaeaea;\n        --color-primary:  #569F99;\n        --color-secondary: #E7B141;\n        --color-secondary-3: white;\n        --color-clar: #44444422;\n        --color-fosc: #363636;\n        --textclar: #efefef;\n        --text-par: #c3c3c3;\n        --textatt: rgba(180, 0, 0, 0.3);\n        --shadow: 0.08rem 0.12rem 0rem #777;\n        --back-red: rgba( 250, 0, 0, 0.8 );\n        \n        --btn-down: #45125893;\n        --btn-up: #451258;\n        --btn-color: white;\n        --border: rgba(150,150,150,0.8);\n        --bg-pieces: #0d075220;\n        --bg-container: var(--color-primary);\n        --bg-childs: var(--color-secondary);\n        --back-white: var(--color-secondary-3);\n        --mb: 1rem;\n    }\n    i{\n        display: inline;\n    }\n    div#root{\n        height: 100vh;\n        width: 100vw;\n        display: flex;\n        justify-content: center;\n        align-items: space-around;\n        background: #ffffff89;\n        padding-top: 0.6rem;\n    }\n"])),"");g.a.render(Object(R.jsxs)(x.a.StrictMode,{children:[Object(R.jsx)(rn,{}),Object(R.jsx)(en,{})]}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.e39bf38c.chunk.js.map