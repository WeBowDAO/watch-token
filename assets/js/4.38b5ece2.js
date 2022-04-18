(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{349:function(e,t,n){"use strict";n(10),n(188),n(40),n(112);t.a={data:function(){return{embedded:!1}},mounted:function(){this.embedded=this.getParam("embedded")||!1},methods:{makeToast:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvToast.toast(t,{title:e,variant:n,solid:!0})},promisify:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return new Promise((function(t,a){e.apply(void 0,n.concat([function(e,n){e?a(e):t(n)}]))}))},getParam:function(e){var t={};return window.location.href.replace(location.hash,"").replace(/[?&]+([^=&]+)=?([^&]*)?/gi,(function(e,n,a){t[n]=void 0!==a?a:""})),e?t[e]?t[e]:null:t}}}},352:function(e,t,n){var a=n(366);e.exports={description:"Agrega WBW a tu billetera",base:"/watch-token/",plugins:[],head:[["link",{rel:"shortcut icon",href:"/favicon.ico"}],["meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}],["meta",{property:"og:type",content:"website"}],["meta",{property:"og:url",content:"https://webowdao.github.io/watch-token"}],["meta",{property:"og:image",content:"https://webowdao.github.io/watch-token/assets/images/watch-token.png"}],["meta",{property:"twitter:card",content:"summary_large_image"}],["meta",{property:"twitter:image",content:"https://webowdao.github.io/watch-token/assets/images/watch-token.png"}],["meta",{property:"twitter:title",content:"WeBow Token"}],["script",{src:"/assets/js/web3.min.js"}],["script",{src:"https://cdn.jsdelivr.net/npm/cookie-bar/cookiebar-latest.min.js?forceLang=en&theme=momh&thirdparty=1&always=1&noGeoIp=1&scrolling=1&hideDetailsBtn=1",defer:!0}]],defaultNetwork:a.defaultNetwork,infuraProjectId:a.infuraProjectId,bitlyAccessToken:a.bitlyAccessToken}},366:function(e){e.exports=JSON.parse('{"defaultNetwork":"mainnet","infuraProjectId":"b83adc9aed4346bcb537b0f5f29282fa"}')},367:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')},399:function(e,t,n){"use strict";n.r(t);var a=n(57),r=(n(111),n(188),n(365),n(189),n(110),n(349)),o=(n(28),n(29),n(114),n(82),n(352)),s=n.n(o),i=n(367),c={data:function(){return{web3:null,web3Provider:null,metamask:{installed:!1,netId:null},network:{default:s.a.defaultNetwork,current:null,map:{1:"mainnet"},list:{mainnet:{blockchain:"Ethereum",tokenType:"ERC20",web3Provider:"https://mainnet.infura.io/v3/".concat(s.a.infuraProjectId),explorerLink:"https://etherscan.io",explorerName:"Etherscan",id:1,name:"Main Ethereum Network"}},blockchains:["Ethereum"]},contracts:{token:null},instances:{token:null}}},methods:{initWeb3:function(e,t){var n=this;return Object(a.a)(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(Object.prototype.hasOwnProperty.call(n.network.list,e)){a.next=2;break}throw new Error("Failed initializing network ".concat(e,". Allowed values are ").concat(Object.keys(n.network.list),"."));case 2:if(!t||void 0===window.ethereum){a.next=17;break}return console.log("injected ethereum"),n.web3Provider=window.ethereum,n.web3=new Web3(n.web3Provider),n.metamask.installed=n.web3Provider.isMetaMask,a.next=9,n.promisify(n.web3.eth.getChainId);case 9:if(r=a.sent,n.metamask.netId=r,r===n.network.list[e].id){a.next=15;break}return n.network.current=n.network.list[n.network.map[r]],a.next=15,n.initWeb3(e,!1);case 15:a.next=21;break;case 17:console.log("provided ethereum"),n.network.current=n.network.list[e],n.web3Provider=new Web3.providers.HttpProvider(n.network.list[e].web3Provider),n.web3=new Web3(n.web3Provider);case 21:case"end":return a.stop()}}),a)})))()},initContract:function(e){console.log("init ".concat(e," on ").concat(this.network.current.name)),this.instances.token=new this.web3.eth.Contract(i,e)}}},l=(n(368),new(n(371).BitlyClient)(s.a.bitlyAccessToken,{})),u={methods:{shorten:function(e){return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.shorten(e);case 3:return n=t.sent,t.abrupt("return",n.link);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",e);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()}}},d={name:"Page",mixins:[r.a,c,u],data:function(){return{loaded:!1,loading:!0,share:{},currentNetwork:null,token:{}}},mounted:function(){this.currentNetwork=this.getParam("network")||this.network.default,this.initDapp()},methods:{initDapp:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.network.current=e.network.list[e.currentNetwork],t.prev=1,t.next=4,e.initWeb3(e.currentNetwork,!0);case 4:return t.next=6,e.getToken();case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})))()},getToken:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={address:"0xdbc6b1cf3042d19c300a0b618b3d59d256d7a448",logo:"https://webowdao.github.io/watch-token/assets/images/logo.png"},e.token.address=n.address,e.initContract(e.token.address),t.next=5,e.promisify(e.instances.token.methods.name().call);case 5:return e.token.name=t.sent,t.next=8,e.promisify(e.instances.token.methods.symbol().call);case 8:return e.token.symbol=t.sent,t.next=11,e.promisify(e.instances.token.methods.decimals().call);case 11:e.token.decimals=t.sent.valueOf(),e.token.logo=n.logo?n.logo:"",e.token.name&&e.token.symbol&&e.token.decimals?(e.token.explorerLink="".concat(e.network.current.explorerLink,"/token/").concat(e.token.address),e.loaded=!0,document.title="".concat(e.token.name," (").concat(e.token.symbol,") | ").concat(e.$page.frontmatter.title)):(alert("Token inválido o red incorrecta"),e.loaded=!1),e.loading=!1;case 15:case"end":return t.stop()}}),t)})))()},addToMetaMask:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.metamask.installed){t.next=5;break}return alert("Por favor instala metamask e intenta de nuevo"),t.abrupt("return");case 5:if(e.metamask.netId===e.network.current.id){t.next=8;break}return alert("MetaMask se encuentra en la red incorrecta. Cambia de red a ".concat(e.network.current.name," e intenta de nuevo!")),t.abrupt("return");case 8:return t.prev=8,t.next=11,e.web3Provider.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e.token.address,symbol:e.token.symbol.substr(0,11),decimals:e.token.decimals,image:e.token.logo}}});case 11:t.next=16;break;case 13:t.prev=13,t.t0=t.catch(8),console.log(t.t0);case 16:case"end":return t.stop()}}),t,null,[[8,13]])})))()},shareToken:function(){var e=this;return Object(a.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.web3.utils.toHex(JSON.stringify({address:e.token.address,logo:e.token.logo})),e.share.tokenLink=window.location.origin+e.$withBase("/page/?hash=".concat(n,"&network=").concat(e.currentNetwork)),e.share.shortLink="https://webowdao.github.io/watch-token",e.share.facebook="https://www.facebook.com/sharer.php?u=".concat(e.share.shortLink,"&quote=Descubre mas sobre ").concat(e.token.name," (").concat(e.token.symbol,")."),e.share.twitter="https://twitter.com/intent/tweet?url=".concat(e.share.shortLink,"&text=Descubre mas sobre ").concat(e.token.name," (").concat(e.token.symbol,")."),e.share.telegram="https://t.me/share/url?url=".concat(e.share.shortLink,"&text=Descubre mas sobre ").concat(e.token.name," (").concat(e.token.symbol,")."),e.share.whatsapp="https://wa.me/?text=Descubre mas sobre ".concat(e.token.name," (").concat(e.token.symbol,"). ").concat(e.share.shortLink),e.$forceUpdate(),e.$refs.shareModal.show();case 9:case"end":return t.stop()}}),t)})))()}}},p=n(55),m=Object(p.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-row",{staticClass:"p-0 pt-4"},[e.loading?n("b-col",{attrs:{lg:"8","offset-lg":"2"}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("ui--loader",{attrs:{loading:e.loading}})],1)],1):e._e(),e._v(" "),e.loading||e.loaded?e._e():n("b-col",{attrs:{lg:"8","offset-lg":"2"}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("blockquote",[e._v("Some error occurred")]),e._v(" "),n("router-link",{attrs:{to:"/create/"}},[e._v("Try adding your token")])],1)],1),e._v(" "),e.loaded?n("b-col",{staticClass:"mt-2 p-0",attrs:{lg:"8","offset-lg":"2"}},[n("b-jumbotron",{staticClass:"px-3 py-4",attrs:{"bg-variant":"light","header-level":"4"},scopedSlots:e._u([{key:"header",fn:function(){return[n("b-media",{staticClass:"mb-3"},[e.token.logo?n("b-img",{attrs:{slot:"aside",src:e.token.logo,rounded:"circle",width:"64",height:"64",alt:e.token.name},slot:"aside"}):e._e(),e._v("\n          "+e._s(e.token.name)+"\n        ")],1)]},proxy:!0},{key:"lead",fn:function(){},proxy:!0}],null,!1,1803796552)},[e._v(" "),e._v(" "),n("hr",{staticClass:"my-4"}),e._v(" "),n("h6",[e._v("\n        Nombre: "),n("span",{staticClass:"text-muted"},[e._v(e._s(e.token.name))])]),e._v(" "),n("h6",[e._v("\n        Símbolo: "),n("span",{staticClass:"text-muted"},[e._v(e._s(e.token.symbol))])]),e._v(" "),n("h6",[e._v("\n        Decimales: "),n("span",{staticClass:"text-muted"},[e._v(e._s(e.token.decimals))])]),e._v(" "),n("h6",[e._v("\n        Dirección:\n        "),n("span",{staticClass:"text-muted token-address"},[e._v(e._s(e.token.address))])]),e._v(" "),n("hr",{staticClass:"my-4"}),e._v(" "),n("b-link",{staticClass:"btn btn-success my-2 btn-custom",on:{click:e.addToMetaMask}},[n("b-icon-plus-circle-fill"),e._v("\n        Agregar a MetaMask\n      ")],1),e._v(" "),n("b-link",{staticClass:"btn btn-primary my-2",attrs:{href:e.token.explorerLink,target:"_blank"}},[n("b-icon-arrow-up-right-circle-fill"),e._v("\n        Ver en "+e._s(e.network.current.explorerName)+"\n      ")],1),e._v(" "),n("b-link",{staticClass:"btn btn-info my-2 float-right",on:{click:e.shareToken}},[n("b-icon-share")],1)],1),e._v(" "),n("b-modal",{ref:"shareModal",attrs:{"hide-footer":"",title:"Compartir "+e.token.name}},[n("b-row",[n("b-col",{attrs:{lg:"12"}},[n("b-form-group",{attrs:{label:"Compartir link","label-for":"tokenLink"}},[n("b-form-input",{attrs:{id:"tokenLink",name:"tokenLink",placeholder:"Your token link",size:"lg",readonly:""},model:{value:e.share.shortLink,callback:function(t){e.$set(e.share,"shortLink","string"==typeof t?t.trim():t)},expression:"share.shortLink"}})],1)],1),e._v(" "),n("b-col",{attrs:{lg:"12"}},[n("p",{staticClass:"share-link"},[n("b-btn",{staticClass:"twitter",attrs:{href:e.share.twitter,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","twitter"]}})],1),e._v(" "),n("b-btn",{staticClass:"facebook",attrs:{href:e.share.facebook,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","facebook-f"]}})],1),e._v(" "),n("b-btn",{staticClass:"telegram",attrs:{href:e.share.telegram,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","telegram-plane"]}})],1),e._v(" "),n("b-btn",{staticClass:"whatsapp",attrs:{href:e.share.whatsapp,target:"_blank"}},[n("font-awesome-icon",{attrs:{icon:["fab","whatsapp"]}})],1)],1)])],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=m.exports}}]);