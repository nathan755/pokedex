(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{14:function(e,t,a){e.exports=a.p+"static/media/pokeball.d682db92.png"},15:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(13),o=a.n(c),r=a(2),i=a(3),m=a.n(i);var s=function(e){return l.a.createElement("div",null,l.a.createElement("label",null,e.label),l.a.createElement("select",{onChange:e.handleChange},e.children))},u=a(14),p=a.n(u);var E=function(e){var t=Object(n.useState)(),a=Object(r.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)({}),s=Object(r.a)(i,2),u=s[0],E=s[1],v=Object(n.useState)(!0),d=Object(r.a)(v,2),g=d[0],h=d[1],f=Object(n.useState)(!1),b=Object(r.a)(f,2),k=b[0],y=b[1],N={bug:"A8B820",dark:"705848",dragon:"7038F8",electric:"F8D030",fairy:"EE99AC",fighting:"C03028",fire:"F08030",flying:"A890F0",ghost:"705898",grass:"78C850",ground:"E0C068",ice:"98D8D8",normal:"A8A878",poison:"A040A0",psychic:"F85888",rock:"B8A038",steel:"B8B8D0",water:"6890F0"};Object(n.useEffect)((function(){m.a.get(e.url).then((function(e){o("https://pokeapi.co/api/v2/pokemon/"+e.data.id)}))}),[e.url]);var j=function(){m.a.get(c).then((function(e){E(e.data),h(!1)})),y(!k)};if(!g)var F=Object(r.a)(u.stats,6),O=F[0],I=F[1],w=F[2],x=F[3],C=F[4],G=F[5];return l.a.createElement("div",{className:"col-xs-12 col-md-6 col-lg-4 col-xl-3"},l.a.createElement("div",{className:"card p-3 m-3"},!k&&l.a.createElement("div",{className:"card-body"},l.a.createElement("img",{onClick:j,className:"card-img-top text-center",src:p.a}),l.a.createElement("h3",{className:"card-text text-center"},e.name)),k&&l.a.createElement("div",{className:""},l.a.createElement("h2",{className:"card-text"},e.name),l.a.createElement("h3",null,"HP: ",!g&&G.base_stat),l.a.createElement("hr",null),l.a.createElement("button",{onClick:j},"hide stats"),g?l.a.createElement("i",{className:"fas fa-spinner fa-spin"}):l.a.createElement("div",{className:"text-center"},l.a.createElement("img",{className:"w-100",src:u.sprites.front_default}),u.types.map((function(e){return l.a.createElement("span",{className:"badge m-1",style:{backgroundColor:"#"+N[e.type.name]}},e.type.name)})),l.a.createElement("hr",null),l.a.createElement("ul",{style:{listStyle:"none"}},l.a.createElement("li",null,"Height: ",u.height),l.a.createElement("li",null,"Weight: ",u.weight),l.a.createElement("li",null,"Attack: ",C.base_stat),l.a.createElement("li",null,"Defense: ",x.base_stat),l.a.createElement("li",null,"Special attack: ",w.base_stat),l.a.createElement("li",null,"Special Defense: ",I.base_stat),l.a.createElement("li",null,"Speed: ",O.base_stat))))))};var v=function(e){return l.a.createElement(l.a.Fragment,null,e.pokemonData.map((function(e,t){return l.a.createElement(E,{name:e.name,url:e.url,key:t})})))};var d=function(){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){m.a.get("https://pokeapi.co/api/v2/pokemon").then((function(e){c(e.data.results)}))}),[]),l.a.createElement("div",null,l.a.createElement(s,{label:"Filter Pokemon by Generation",handleChange:function(e){m.a.get("https://pokeapi.co/api/v2/generation/"+e.target.value).then((function(e){c(e.data.pokemon_species)}))}},l.a.createElement("option",{value:"1"},"Generation I "),l.a.createElement("option",{value:"2"},"Generation II "),l.a.createElement("option",{value:"3"},"Generation III "),l.a.createElement("option",{value:"4"},"Generation IV "),l.a.createElement("option",{value:"5"},"Generation V"),l.a.createElement("option",{value:"6"},"Generation VI"),l.a.createElement("option",{value:"7"}," Generation VII")),l.a.createElement(s,{label:"Filter Pokemon by Type",handleChange:function(e){m.a.get("https://pokeapi.co/api/v2/type/"+e.target.value).then((function(e){var t=e.data.pokemon.map((function(e){return e.pokemon}));c(t)}))}},l.a.createElement("option",{value:"normal"},"Normal"),l.a.createElement("option",{value:"fighting"},"Fighting "),l.a.createElement("option",{value:"flying"},"Flying "),l.a.createElement("option",{value:"poison"},"poison "),l.a.createElement("option",{value:"ground"},"Ground"),l.a.createElement("option",{value:"rock"},"Rock"),l.a.createElement("option",{value:"bug"},"Bug"),l.a.createElement("option",{value:"ghost"},"Ghost"),l.a.createElement("option",{value:"steel"},"Steel "),l.a.createElement("option",{value:"fire"},"Fire "),l.a.createElement("option",{value:"water"},"Water "),l.a.createElement("option",{value:"grass"},"Grass"),l.a.createElement("option",{value:"electric"},"Electric"),l.a.createElement("option",{value:"psychic"}," Psychic"),l.a.createElement("option",{value:"ice"},"Ice "),l.a.createElement("option",{value:"dragon"},"Dragon "),l.a.createElement("option",{value:"dark"},"Dark "),l.a.createElement("option",{value:"fairy"},"Fairy"),l.a.createElement("option",{value:"shadow"},"Shadow"),l.a.createElement("option",{value:"unknown"}," Unknown")),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(v,{pokemonData:a}))))};o.a.render(l.a.createElement(d,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.1f05c4aa.chunk.js.map