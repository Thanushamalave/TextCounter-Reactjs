(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(35)},24:function(e,a,t){},33:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),o=t(13),c=t.n(o),r=(t(24),t(9)),s=t(6),i=t.n(s),m=t(8);function d(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand text-".concat("light"===e.mode?"dark":"light"),href:"/"},"Navbar"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link",to:"/"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(m.b,{className:"nav-link",to:"/about"},"About"))),n.a.createElement("form",{className:"d-flex"},n.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),n.a.createElement("button",{className:"btn btn-outline-success mx-4",type:"submit"},"Search")),n.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",onClick:e.togglemode,id:"flexSwitchCheckDefault"}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Darkmode")))))}function h(e){var a=Object(l.useState)(""),t=Object(r.a)(a,2),o=t[0],c=t[1],s=0;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control bg-".concat(e.mode),style:{backgroundColor:"dark"===e.mode?"dark":"light",color:"dark"===e.mode?"white":"black"},value:o,onChange:function(e){c(e.target.value)},id:"mybox",rows:"8"})),n.a.createElement("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){if(0!==o.length){var a=o.toUpperCase();c(a),e.showAlert("Converted to UpperCase","success")}else e.showAlert("please enter the text","warning")}},"Convert to UpperCase"),n.a.createElement("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){if(0!==o.length){var a=o.toLowerCase();c(a),e.showAlert("Converted to LowerCase","success")}else e.showAlert("please enter the text","warning")}},"Convert to LowerCase"),n.a.createElement("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){0!==o.length?(c(""),e.showAlert("Cleared the text","success")):e.showAlert("please enter the text","warning")}},"Clear Text"),n.a.createElement("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){if(0!==o.length){for(var a=o.split(" "),t=0;t<a.length;t++)a[t]=a[t].charAt(0).toUpperCase()+a[t].slice(1);var l=a.join(" ");c(l),e.showAlert("Text is Capitalized","success")}else e.showAlert("please enter the text","warning")}},"Captalize"),n.a.createElement("button",{className:"btn btn-primary mx-2 my-1",onClick:function(){for(var e=o.split(""),a=0;a<e.length;a++)"a"!==e[a]&&"e"!==e[a]&&"i"!==e[a]&&"o"!==e[a]&&"u"!==e[a]||(s+=1);c("No of vowels : "+s)}},"Vowels")),n.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},n.a.createElement("h3",null,"Your text summary"),n.a.createElement("p",null,o.split(" ").filter(function(e){return 0!==e.length}).length,"  words ",o.length," character and ",o.split("\n").filter(function(e){return 0!==e.length}).length," lines "),n.a.createElement("p",null,.008*o.split(" ").filter(function(e){return 0!==e.length}).length," Minutes read"),n.a.createElement("h3",null,"Preview"),n.a.createElement("p",null,o)))}d.PropTypes={title:i.a.string,about:i.a.string},d.defaultProps={title:"Title",about:"About"};var u=function(e){return n.a.createElement("div",{style:{height:"70px"}},e.alert&&n.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,e.alert.type)," : ",e.alert.msg,n.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"})))};var b=function(e){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"accordion",id:"accordionExample"},n.a.createElement("h2",{className:"text-".concat("light"===e.mode?"dark":"light")},"About Us"),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button bg-".concat(e.mode," text-").concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},"Accordion Item #1")),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body bg-".concat(e.mode," text-").concat("light"===e.mode?"dark":"light")},n.a.createElement("strong",null,"This is the first item's accordion body.")," It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed bg-".concat(e.mode," text-").concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},"Accordion Item #2")),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body bg-".concat(e.mode," text-").concat("light"===e.mode?"dark":"light")},n.a.createElement("strong",null,"This is the second item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow."))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed bg-".concat(e.mode," text-").concat("light"===e.mode?"dark":"light"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},"Accordion Item #3")),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body bg-".concat(e.mode," text-").concat("light"===e.mode?"dark":"light")},n.a.createElement("strong",null,"This is the third item's accordion body.")," It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the ",n.a.createElement("code",null,".accordion-body"),", though the transition does limit overflow.")))))},g=(t(33),t(0));var p=function(){var e=Object(l.useState)("light"),a=Object(r.a)(e,2),t=a[0],o=a[1],c=Object(l.useState)(""),s=Object(r.a)(c,2),i=s[0],p=s[1],E=function(e,a){p({msg:e,type:a}),setTimeout(function(){p(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(d,{mode:t,togglemode:function(){"light"===t?(o("dark"),document.body.style.backgroundColor="#212529",E("Dark mood has been enabled","success")):(o("light"),document.body.style.backgroundColor="#f8f9fa",E("Light mood has been enabled","success"))}}),n.a.createElement(u,{alert:i}),n.a.createElement("div",{className:"container"},n.a.createElement(g.c,null,n.a.createElement(g.a,{path:"/about"},n.a.createElement(b,{mode:t})),n.a.createElement(g.a,{path:"/"},n.a.createElement(h,{mode:t,heading:"Enter here",showAlert:E}))))))};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)))}},[[15,2,1]]]);
//# sourceMappingURL=main.15da1df8.chunk.js.map