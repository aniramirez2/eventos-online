(this["webpackJsonpomnistack-app"]=this["webpackJsonpomnistack-app"]||[]).push([[0],{120:function(e,a,t){},123:function(e,a,t){},124:function(e,a,t){},125:function(e,a,t){},126:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),o=t(16),i=t(30),s=t(20),m=t.n(s),u=t(26),p=t(13),d=(t(96),t(68)),E=t.n(d),f=t(69),b=t.n(f).a.create({baseURL:"https://ongs-api.herokuapp.com/"}),g=t(161),v=t(171),h=t(42),y=(t(114),t(174)),j=t(169),x=t(166);function O(){var e=Object(n.useState)(""),a=Object(p.a)(e,2),t=a[0],c=(a[1],Object(n.useState)("")),l=Object(p.a)(c,2),o=l[0],s=(l[1],Object(n.useState)("")),d=Object(p.a)(s,2),f=d[0],O=(d[1],Object(n.useState)("")),N=Object(p.a)(O,2),S=N[0],k=(N[1],Object(n.useState)("")),w=Object(p.a)(k,2),C=w[0],I=(w[1],Object(i.f)()),A=Object(n.useRef)(null),D=[{name:"Qual \xe9 seu nome?",type:"input"},{name:"Qual \xe9 o seu e-mail?",type:"input"},{name:"Qual \xe9 a sua \xe1rea de atua\xe7\xe3o?",type:"select",options:["Agroneg\xf3cios","Com\xe9rcio e Servi\xe7os","Artesanato","Educa\xe7\xe3o - Cursos e Palestras","Economia Criativa","Inova\xe7\xe3o e Tecnologia","Acesso a Mercados","Ind\xfastria","Turismo"]},{name:"Como voc\xea quer participar dos eventos?",type:"select",options:["Participante","Pessoa organizadora","Jornalista"]},{name:"Defina uma nova senha",type:"input"},{name:"Confirme sua nova senha?",type:"input",end:"yes"}];function z(){return(z=Object(u.a)(m.a.mark((function e(a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n={name:t,email:o,whatsapp:f,city:S,uf:C},e.prev=2,e.next=5,b.post("ongs",n);case 5:r=e.sent,I.push("/"),alert("Seu ID de acesso ".concat(r.data.id)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),alert("Erro no cadastro, tente novamente");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}return r.a.createElement(g.a,{container:!0,component:"main"},r.a.createElement(g.a,{item:!0,xs:8},r.a.createElement(g.a,{direction:"row",justify:"center",alignItems:"center"},r.a.createElement("form",{onSubmit:function(e){return z.apply(this,arguments)},className:"form-left"},r.a.createElement(h.c,{className:"center",naturalSlideWidth:90,naturalSlideHeight:10,totalSlides:D.length,dragEnabled:!1},r.a.createElement("div",{className:"title"}," Ol\xe1"),r.a.createElement(h.e,null,D.map((function(e,a){return r.a.createElement(h.d,{style:{border:"none"},ref:A,index:a},"input"===(t=e).type?r.a.createElement(v.a,{className:"input-width",id:"outlined-basic",label:t.name,variant:"outlined"}):r.a.createElement("div",null,r.a.createElement(j.a,{variant:"outlined",className:"input-width"},r.a.createElement(y.a,{htmlFor:"outlined-age-native-simple"},t.name),r.a.createElement(x.a,{native:!0,value:""},r.a.createElement("option",{"aria-label":"None",value:""}),t.options.map((function(e){return r.a.createElement("option",{value:e},e)}))))));var t}))),r.a.createElement("div",{className:"actions"},r.a.createElement(h.a,{className:"button-prev"},"Anterior"),r.a.createElement(h.b,{className:"button-next",onClick:function(e){e.preventDefault(),A.current.state.currentSlide===D.length-2&&I.push("/incidents/new")}},"P\u0155oximo")))))),r.a.createElement(g.a,{item:!0,xs:4},r.a.createElement("img",{src:E.a,alt:"eventos online",className:"image-right"})))}var N=t(34),S=(t(120),t(38)),k=t.n(S),w=(t(71),t(162));var C=t(170),I=t(164),A=t(165),D=t(168),z=t(160),R=t(167),B=t(73),P=t.n(B),q=t(128),F=t(163),T=t(72),V=t.n(T);function W(){return r.a.createElement(q.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",r.a.createElement(o.b,{color:"inherit",href:"https://material-ui.com/"},"Eventos Online")," ",(new Date).getFullYear(),".")}var H=Object(F.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(".concat(V.a,")"),backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"inherit"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));function J(){var e=H();return r.a.createElement(g.a,{container:!0,component:"main",className:e.root},r.a.createElement(I.a,null),r.a.createElement(g.a,{item:!0,xs:!1,sm:4,md:7,className:e.image}),r.a.createElement(g.a,{item:!0,xs:12,sm:8,md:5,component:z.a,elevation:6,square:!0},r.a.createElement("div",{className:e.paper},r.a.createElement(C.a,{className:e.avatar},r.a.createElement(P.a,null)),r.a.createElement(q.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,noValidate:!0},r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(v.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(A.a,{control:r.a.createElement(D.a,{value:"remember",color:"primary"}),label:"Remember me"}),r.a.createElement(w.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Entrar"),r.a.createElement(g.a,{container:!0},r.a.createElement(g.a,{item:!0,xs:!0},r.a.createElement(o.b,{href:"#",variant:"body2"})),r.a.createElement(g.a,{item:!0},r.a.createElement(o.b,{to:"/register",variant:"body2"},"Ainda n\xe3o \xe9 cadastrado? Cadastre-se aqu\xed"))),r.a.createElement(R.a,{mt:5},r.a.createElement(W,null))))))}t(123);function Q(){var e=Object(i.f)(),a=Object(n.useState)([]),t=Object(p.a)(a,2),c=t[0],l=t[1],s=localStorage.getItem("ongName"),d=localStorage.getItem("ongId");function E(){return(E=Object(u.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.delete("incidents/".concat(a),{headers:{Authorization:d}});case 3:l(c.filter((function(e){return e.id!==a}))),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("Errro");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){b.get("profile",{headers:{Authorization:d}}).then((function(e){l(e.data)}))}),[d]),r.a.createElement("div",{className:"profile-container"},r.a.createElement("header",null,r.a.createElement("img",{src:k.a,alt:"Be the Hero"}),r.a.createElement("span",null,"Bem vinda, ",s),r.a.createElement(o.b,{className:"button",to:"/incidents/new"},"Cadastrar Novo Caso"),r.a.createElement("button",{type:"button",onClick:function(){localStorage.clear(),e.push("/")}},r.a.createElement(N.c,{size:18,color:"red"}))),r.a.createElement("h1",null,"Casos cadastrados"),r.a.createElement("ul",null,c.map((function(e,a){return r.a.createElement("li",{key:a},r.a.createElement("strong",null,"Caso:"),r.a.createElement("p",null,e.title),r.a.createElement("strong",null,"Descri\xe7\xe3o:"),r.a.createElement("p",null,e.description),r.a.createElement("strong",null,"Valor:"),r.a.createElement("p",null,Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"}).format(e.value)),r.a.createElement("button",{type:"button",onClick:function(){return function(e){return E.apply(this,arguments)}(e.id)}},r.a.createElement(N.d,{size:20,color:"#a8a8a3"})))}))))}t(124);function L(){var e=Object(i.f)(),a=Object(n.useState)(""),t=Object(p.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(""),d=Object(p.a)(s,2),E=d[0],f=d[1],g=Object(n.useState)(""),v=Object(p.a)(g,2),h=v[0],y=v[1];function j(){return(j=Object(u.a)(m.a.mark((function a(t){var n;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),n={title:c,description:E,value:h},a.prev=2,a.next=5,b.post("incidents",n,{headers:{Authorization:localStorage.getItem("ongId")}});case 5:e.push("/profile"),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(2),alert("Error");case 11:case"end":return a.stop()}}),a,null,[[2,8]])})))).apply(this,arguments)}return r.a.createElement("div",{className:"new-incident-container"},r.a.createElement("div",{className:"content"},r.a.createElement("section",null,r.a.createElement("img",{src:k.a,alt:"Be the Hero"}),r.a.createElement("h1",null,"Cadastrar novo caso"),r.a.createElement("p",null,"Fa\xe7a seu cadastro, enete na plataforma e ajude a pessoas a encontrarem casos da sua ONG."),r.a.createElement(o.b,{className:"back-link",to:"/profile"},r.a.createElement(N.a,{size:16,color:"#E02041"}),"Voltar para a home")),r.a.createElement("form",{action:"",onSubmit:function(e){return j.apply(this,arguments)}},r.a.createElement("input",{type:"text",placeholder:"Titutlo do caso",value:c,onChange:function(e){return l(e.target.value)}}),r.a.createElement("textarea",{type:"text",placeholder:"Descri\xe7\xe3o",value:E,onChange:function(e){return f(e.target.value)}}),r.a.createElement("input",{type:"text",placeholder:"Valor em Reais",value:h,onChange:function(e){return y(e.target.value)}}),r.a.createElement("button",{className:"button",type:"submit"},"Cadastrar"))))}function M(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:J}),r.a.createElement(i.a,{path:"/register",component:O}),r.a.createElement(i.a,{path:"/profile",component:Q}),r.a.createElement(i.a,{path:"/incidents/new",component:L})))}t(125);var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(M,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root"))},38:function(e,a,t){e.exports=t.p+"static/media/logo.7eea718b.svg"},68:function(e,a,t){e.exports=t.p+"static/media/register.d877c380.jpeg"},71:function(e,a,t){e.exports=t.p+"static/media/heroes.1f4b5508.png"},72:function(e,a,t){e.exports=t.p+"static/media/background.2a61733c.jpeg"},90:function(e,a,t){e.exports=t(126)},96:function(e,a,t){}},[[90,1,2]]]);
//# sourceMappingURL=main.afbd9c00.chunk.js.map