(function(e){function t(t){for(var r,o,i=t[0],a=t[1],u=t[2],p=0,b=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&b.push(s[o][0]),s[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);d&&d(t);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==s[a]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},s={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/libp2p-second-language-playground/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=a;c.push([3,"chunk-vendors"]),n()})({0:function(e,t){},"05d6":function(e,t,n){"use strict";n("2735")},1:function(e,t){},10:function(e,t){},"1cf1":function(e,t,n){},2:function(e,t){},2735:function(e,t,n){},3:function(e,t,n){e.exports=n("56d7")},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("f2bf"),s={key:0,id:"app"};function c(e,t,n,c,o,i){var a=Object(r["z"])("peer-header"),u=Object(r["z"])("router-view");return o.connected?(Object(r["s"])(),Object(r["f"])("div",s,[Object(r["i"])(a),Object(r["i"])(u)])):Object(r["e"])("",!0)}var o=n("1da1"),i=(n("96cf"),{class:"peer-header"}),a=Object(r["g"])("div",{class:"peer-nick"},null,-1);function u(e,t,n,s,c,o){return Object(r["s"])(),Object(r["f"])("div",i,[Object(r["g"])("div",null,"Your ID: "+Object(r["C"])(e.peerId),1),a])}var d={name:"peer-name",data:function(){return{nickname:""}},methods:{setNickname:function(){console.log(this.nickname)}}};n("c984");d.render=u;var p=d,b={name:"app",components:{"peer-header":p},data:function(){return{connected:!1}},mounted:function(){this.startPubsub()},methods:{startPubsub:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$startLibp2p();case 2:e.connected=!0;case 3:case"end":return t.stop()}}),t)})))()}}};n("6fcc");b.render=c;var l=b,f=n("3591"),h=n("6101"),O=n("b04a"),j=n("d6e3"),m=n("2b27"),y=n("2f0b"),v={install:function(e){e.config.globalProperties.$startLibp2p=Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,f.create({addresses:{listen:["/dns4/wrtc-star1.par.dwebops.pub/tcp/443/wss/p2p-webrtc-star","/dns4/wrtc-star2.sjc.dwebops.pub/tcp/443/wss/p2p-webrtc-star"]},modules:{transport:[h,O],streamMuxer:[j],connEncryption:[m],pubsub:y},config:{pubsub:{enabled:!0,emitSelf:!0}}});case 2:return n=t.sent,n.connectionManager.on("peer:connect",(function(e){console.log("Connected to ".concat(e.remotePeer.toB58String()))})),n.connectionManager.on("peer:disconnect",(function(e){console.log("Disconnected from ".concat(e.remotePeer.toB58String()))})),t.next=7,n.start();case 7:return e.mixin({data:function(){return{libp2p:n,peerId:n.peerId.toB58String()}}}),t.abrupt("return",n);case 9:case"end":return t.stop()}}),t)})))}},g=v,w=n("6c02");function k(e,t){return Object(r["s"])(),Object(r["f"])("div",null,[Object(r["g"])("button",{onClick:t[0]||(t[0]=function(t){return e.$router.push(e.peerId)})},"Create New Room")])}const I={};I.render=k;var L=I,S={style:{width:"100%",height:"100%"}};function C(e,t,n,s,c,o){return Object(r["s"])(),Object(r["f"])("div",S,[(Object(r["s"])(),Object(r["d"])(Object(r["A"])(c.station)))])}n("caad"),n("2532");Object(r["v"])("data-v-7738bd48");var x={key:0,class:"view-board"},P={class:"view-words"},N={class:"view-guest"},W={style:{width:"100%"}},M=["onClick"],J=["onUpdate:modelValue"],_={key:1};function E(e,t,n,s,c,o){return c.connected?(Object(r["s"])(),Object(r["f"])("div",x,[Object(r["g"])("div",P,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(c.wordsHost,(function(e,t){return Object(r["s"])(),Object(r["f"])("p",{key:t+e,class:"available-words"},Object(r["C"])(e),1)})),128))]),Object(r["g"])("div",N,[Object(r["g"])("div",W,[Object(r["G"])(Object(r["g"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.nickname=e}),placeholder:"Choose your name"},null,512),[[r["E"],c.nickname]]),Object(r["g"])("button",{onClick:t[1]||(t[1]=function(){return o.selectName&&o.selectName.apply(o,arguments)})},"Select Name")]),(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(c.wordsList,(function(e,n){return Object(r["s"])(),Object(r["f"])("button",{key:n,class:Object(r["o"])({"chosen-word":!0,red:c.scored.includes(n)}),tabindex:"-1",onClick:function(e){return o.scoreWord(n)}},[c.step<2?Object(r["G"])((Object(r["s"])(),Object(r["f"])("input",{key:0,"onUpdate:modelValue":function(e){return c.wordsList[n]=e},placeholder:"Type a word",class:"word-input",onBlur:t[2]||(t[2]=function(e){return o.chosenWords()})},null,40,J)),[[r["E"],c.wordsList[n]]]):(Object(r["s"])(),Object(r["f"])("span",_,Object(r["C"])(c.wordsList[n]),1))],10,M)})),128))])])):Object(r["e"])("",!0)}Object(r["t"])();n("c740"),n("a434"),n("b0c0");var G={data:function(){return{connected:!1,step:0,host:"",isLocked:!1,nickname:"",wordsHost:[],wordsList:[],chosen:[],scored:[]}},mounted:function(){var e=this;if(this.host=this.$route.params.room,this.host!==this.peerId){var t=new TextDecoder;this.libp2p.pubsub.subscribe(this.host,(function(n){n.from!=e.peerId&&(console.log("RECEIVED",n.data),e.receivedMessage(n.from,t.decode(n.data)))}))}},methods:{selectName:function(){var e={type:"join",message:this.nickname};this.libp2p.pubsub.publish(this.host,JSON.stringify(e))},addWord:function(){this.wordsList.push("")},chosenWords:function(){var e={type:"chosen",message:this.wordsList};this.libp2p.pubsub.publish(this.host,JSON.stringify(e))},scoreWord:function(e){if(!(this.step<2)){var t=this.scored.findIndex((function(t){return t===e}));t>=0?this.scored.splice(t,1):this.scored.push(e),this.scoredWord()}},scoredWord:function(){var e={type:"scored",message:this.scored};this.libp2p.pubsub.publish(this.host,JSON.stringify(e))},receivedMessage:function(e,t){try{console.log(e,t);var n=JSON.parse(t),r=n.type,s=n.message;switch(r){case"ping":this.connected=!0,this.step=s;break;case"words":this.wordsHost=s;break;case"quantity":this.wordsList.length!==s&&(this.wordsList=new Array(s));break;case"player":this.peerId!==s.peer&&this.nickname!==s.name||(this.nickname=s.name,this.wordsList=s.words,this.scored=s.scored);break}}catch(c){console.log(c)}}}};n("a479");G.render=E,G.__scopeId="data-v-7738bd48";var R=G;Object(r["v"])("data-v-6bdf8a2a");var T={key:0},q=Object(r["h"])("Quantity: "),D={key:1,class:"view-board"},V={class:"view-words"},$={class:"view-players"},U={class:"player-name"};function B(e,t,n,s,c,o){return Object(r["s"])(),Object(r["f"])("div",null,[0===c.step?(Object(r["s"])(),Object(r["f"])("div",T,[Object(r["G"])(Object(r["g"])("textarea",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.words=e}),rows:"6",cols:"40",placeholder:"Type words separated by space"},null,512),[[r["E"],c.words]]),Object(r["g"])("p",null,"Total Words: "+Object(r["C"])(c.wordsList.length),1),Object(r["g"])("p",null,[q,Object(r["G"])(Object(r["g"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.quantity=e}),type:"number"},null,512),[[r["E"],c.quantity]])]),Object(r["g"])("button",{onClick:t[2]||(t[2]=function(){return o.startGame&&o.startGame.apply(o,arguments)})},"Start Game")])):(Object(r["s"])(),Object(r["f"])("div",D,[Object(r["g"])("div",V,[Object(r["g"])("button",{onClick:t[3]||(t[3]=function(){return o.draftWord&&o.draftWord.apply(o,arguments)})},"Draft Word"),(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(c.drafted,(function(e,t){return Object(r["s"])(),Object(r["f"])("p",{key:t,class:"drafted-words"},Object(r["C"])(t+1)+" - "+Object(r["C"])(e),1)})),128)),(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(c.wordsList,(function(e,t){return Object(r["s"])(),Object(r["f"])("p",{key:t+e,class:"available-words"},Object(r["C"])(e),1)})),128))]),Object(r["g"])("div",$,[(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(c.players,(function(e,t){return Object(r["s"])(),Object(r["f"])("div",{key:t,class:"player-holder"},[Object(r["g"])("span",U,Object(r["C"])(e.name),1),(Object(r["s"])(!0),Object(r["f"])(r["a"],null,Object(r["y"])(e.words,(function(t,n){return Object(r["s"])(),Object(r["f"])("span",{key:n,class:Object(r["o"])({"available-words":e.scored.includes(n),"player-word":!0})},Object(r["C"])(t),3)})),128))])})),128))])]))])}Object(r["t"])();n("ac1f"),n("1276"),n("498a"),n("99af"),n("7db0");var H={data:function(){return{step:0,words:"",quantity:9,wordsList:[],drafted:[],players:[]}},mounted:function(){var e=this;if(this.host=this.$route.params.room,this.host===this.peerId){var t=new TextDecoder;this.libp2p.pubsub.subscribe(this.peerId,(function(n){n.from!=e.peerId&&e.receivedMessage(n.from,t.decode(n.data))})),setInterval((function(){e.sendPing()}),2e3)}},watch:{words:function(){this.wordsList=this.words.trim().split(" ")}},methods:{startGame:function(){this.step=1},sendPing:function(){var e={type:"ping",message:this.step};this.libp2p.pubsub.publish(this.peerId,JSON.stringify(e))},sendWords:function(){var e={type:"words",message:this.wordsList};this.libp2p.pubsub.publish(this.peerId,JSON.stringify(e)),e={type:"quantity",message:this.quantity},this.libp2p.pubsub.publish(this.peerId,JSON.stringify(e))},sendPlayer:function(e){var t={type:"player",message:e};this.libp2p.pubsub.publish(this.peerId,JSON.stringify(t))},draftWord:function(){this.step=2;var e=Math.random()*this.wordsList.length;this.drafted=this.drafted.concat(this.wordsList.splice(e,1))},receivedMessage:function(e,t){try{var n=JSON.parse(t),r=n.type,s=n.message;switch(r){case"join":var c=this.players.find((function(t){return t.peer===e||t.name==s}));c?(c.peer=e,this.sendPlayer(c)):this.players.push({peer:e,name:s,words:[],scored:[]}),this.sendWords();break;case"chosen":this.players.find((function(t){return t.peer===e})).words=s;break;case"scored":this.players.find((function(t){return t.peer===e})).scored=s;break}}catch(o){console.log(o)}}}};n("05d6");H.render=B,H.__scopeId="data-v-6bdf8a2a";var z=H,A={components:{guest:R,host:z},data:function(){return{station:!1}},mounted:function(){this.station=this.$route.params.room===this.peerId?"host":"guest"}};A.render=C;var Q=A,Y=[{path:"/",name:"Home",component:L},{path:"/:room",name:"Room",component:Q}],F=Object(w["a"])({history:Object(w["b"])("/libp2p-second-language-playground/"),routes:Y}),K=F,X=Object(r["c"])(l);X.use(K),X.use(g),X.mount("#app")},6:function(e,t){},"6fcc":function(e,t,n){"use strict";n("9a47")},7:function(e,t){},8:function(e,t){},8775:function(e,t,n){},9:function(e,t){},"9a47":function(e,t,n){},a479:function(e,t,n){"use strict";n("8775")},c984:function(e,t,n){"use strict";n("1cf1")}});
//# sourceMappingURL=app.32543e3b.js.map