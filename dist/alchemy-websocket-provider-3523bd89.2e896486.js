function e(e){return e&&e.__esModule?e.default:e}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire5dc4;t.register("5UKI5",(function(s,n){var i,o,r,l;i=s.exports,o="AlchemyWebSocketProvider",r=()=>w,Object.defineProperty(i,o,{get:r,set:l,enumerable:!0,configurable:!0});var c=t("irJEB"),a=t("cF2OZ"),h=t("1chjt"),u=t("22AMH"),d=t("bsYBY"),f=t("233cQ");t("i5hFG");var p=t("kjyEk");class b{constructor(e){this.provider=e,this.maxBackfillBlocks=120}getNewHeadsBackfill(e,t,s){return(0,c._)(this,void 0,void 0,(function*(){y(e);const n=yield this.getBlockNumber();if(y(e),0===t.length)return this.getHeadEventsInRange(Math.max(s,n-this.maxBackfillBlocks)+1,n+1);const i=(0,c.f)(t[t.length-1].number),o=n-this.maxBackfillBlocks+1;if(i<=o)return this.getHeadEventsInRange(o,n+1);const r=yield this.getReorgHeads(e,t);y(e);const l=yield this.getHeadEventsInRange(i+1,n+1);return y(e),[...r,...l]}))}getLogsBackfill(e,t,s,n){return(0,c._)(this,void 0,void 0,(function*(){y(e);const i=yield this.getBlockNumber();if(y(e),0===s.length)return this.getLogsInRange(t,Math.max(n,i-this.maxBackfillBlocks)+1,i+1);const o=(0,c.f)(s[s.length-1].blockNumber),r=i-this.maxBackfillBlocks+1;if(o<r)return this.getLogsInRange(t,r,i+1);const l=yield this.getCommonAncestor(e,s);y(e);const a=s.filter((e=>(0,c.f)(e.blockNumber)>l.blockNumber)).map((e=>Object.assign(Object.assign({},e),{removed:!0}))),h=l.blockNumber===Number.NEGATIVE_INFINITY?(0,c.f)(s[0].blockNumber):l.blockNumber;let u=yield this.getLogsInRange(t,h,i+1);return u=u.filter((e=>e&&((0,c.f)(e.blockNumber)>l.blockNumber||(0,c.f)(e.logIndex)>l.logIndex))),y(e),[...a,...u]}))}setMaxBackfillBlock(e){this.maxBackfillBlocks=e}getBlockNumber(){return(0,c._)(this,void 0,void 0,(function*(){const e=yield this.provider.send("eth_blockNumber");return(0,c.f)(e)}))}getHeadEventsInRange(e,t){return(0,c._)(this,void 0,void 0,(function*(){if(e>=t)return[];const s=[];for(let n=e;n<t;n++)s.push({method:"eth_getBlockByNumber",params:[(0,c.t)(n),!1]});return(yield this.provider.sendBatch(s)).map(m)}))}getReorgHeads(e,t){return(0,c._)(this,void 0,void 0,(function*(){const s=[];for(let n=t.length-1;n>=0;n--){const i=t[n],o=yield this.getBlockByNumber((0,c.f)(i.number));if(y(e),i.hash===o.hash)break;s.push(m(o))}return s.reverse()}))}getBlockByNumber(e){return(0,c._)(this,void 0,void 0,(function*(){return this.provider.send("eth_getBlockByNumber",[(0,c.t)(e),!1])}))}getCommonAncestor(e,t){return(0,c._)(this,void 0,void 0,(function*(){let s=yield this.getBlockByNumber((0,c.f)(t[t.length-1].blockNumber));y(e);for(let e=t.length-1;e>=0;e--){const n=t[e];if(n.blockNumber!==s.number&&(s=yield this.getBlockByNumber((0,c.f)(n.blockNumber))),n.blockHash===s.hash)return{blockNumber:(0,c.f)(n.blockNumber),logIndex:(0,c.f)(n.logIndex)}}return{blockNumber:Number.NEGATIVE_INFINITY,logIndex:Number.NEGATIVE_INFINITY}}))}getLogsInRange(e,t,s){return(0,c._)(this,void 0,void 0,(function*(){if(t>=s)return[];const n=Object.assign(Object.assign({},e),{fromBlock:(0,c.t)(t),toBlock:(0,c.t)(s-1)});return this.provider.send("eth_getLogs",[n])}))}}function m(e){const t=Object.assign({},e);return delete t.totalDifficulty,delete t.transactions,delete t.uncles,t}function v(e,t){const s=new Set,n=[];return e.forEach((e=>{const i=t(e);s.has(i)||(s.add(i),n.push(e))})),n}const g=new Error("Cancelled");function y(e){if(e())throw g}const k=10;class w extends d.WebSocketProvider{constructor(s,n){var i;const o=f.AlchemyProvider.getApiKey(s.apiKey),r=f.AlchemyProvider.getAlchemyNetwork(s.network),l=f.AlchemyProvider.getAlchemyConnectionInfo(r,o,"wss"),h=`alchemy-sdk-${c.V}`;super(new(e(a))(null!==(i=s.url)&&void 0!==i?i:l.url,h,{wsConstructor:null!=n?n:void 0!==p&&null!=p&&null!=p.versions&&null!=p.versions.node?t("fC2qj").w3cwebsocket:WebSocket}),c.E[r]),this._events=[],this.virtualSubscriptionsById=new Map,this.virtualIdsByPhysicalId=new Map,this.handleMessage=e=>{const t=JSON.parse(e.data);if(!function(e){return!function(e){return Array.isArray(e)||"2.0"===e.jsonrpc&&void 0!==e.id}(e)}(t))return;const s=t.params.subscription,n=this.virtualIdsByPhysicalId.get(s);if(!n)return;const i=this.virtualSubscriptionsById.get(n);if("eth_subscribe"===i.method)switch(i.params[0]){case"newHeads":{const e=i,o=t,{isBackfilling:r,backfillBuffer:l}=e,{result:c}=o.params;r?function(e,t){A(e,t,T)}(l,c):s!==n?this.emitAndRememberEvent(n,c,T):this.rememberEvent(n,c,T);break}case"logs":{const e=i,o=t,{isBackfilling:r,backfillBuffer:l}=e,{result:c}=o.params;r?function(e,t){A(e,t,O)}(l,c):n!==s?this.emitAndRememberEvent(n,c,O):this.rememberEvent(n,c,O);break}default:if(s!==n){const{result:e}=t.params;this.emitEvent(n,e)}}},this.handleReopen=()=>{this.virtualIdsByPhysicalId.clear();const{cancel:e,isCancelled:t}=function(){let e=!1;return{cancel:()=>e=!0,isCancelled:()=>e}}();this.cancelBackfill=e;for(const e of this.virtualSubscriptionsById.values())(()=>{(0,c._)(this,void 0,void 0,(function*(){try{yield this.resubscribeAndBackfill(t,e)}catch(s){t()||console.error(`Error while backfilling "${e.params[0]}" subscription. Some events may be missing.`,s)}}))})();this.startHeartbeat()},this.stopHeartbeatAndBackfill=()=>{null!=this.heartbeatIntervalId&&(clearInterval(this.heartbeatIntervalId),this.heartbeatIntervalId=void 0),this.cancelBackfill()},this.apiKey=o,this.backfiller=new b(this),this.addSocketListeners(),this.startHeartbeat(),this.cancelBackfill=c.n}static getNetwork(e){return"string"==typeof e&&e in c.C?c.C[e]:(0,u.getNetwork)(e)}on(e,t){return this._addEventListener(e,t,!1)}once(e,t){return this._addEventListener(e,t,!0)}off(e,t){return(0,c.i)(e)?this._off(e,t):super.off(e,t)}removeAllListeners(e){return void 0!==e&&(0,c.i)(e)?this._removeAllListeners(e):super.removeAllListeners(e)}listenerCount(e){return void 0!==e&&(0,c.i)(e)?this._listenerCount(e):super.listenerCount(e)}listeners(e){return void 0!==e&&(0,c.i)(e)?this._listeners(e):super.listeners(e)}_addEventListener(e,t,s){if((0,c.i)(e)){(0,c.v)(e);const n=new(0,c.c)((0,c.e)(e),t,s);return this._events.push(n),this._startEvent(n),this}return super._addEventListener(e,t,s)}_startEvent(e){[...c.A,"block","filter"].includes(e.type)?this.customStartEvent(e):super._startEvent(e)}_subscribe(e,t,s,n){return(0,c._)(this,void 0,void 0,(function*(){let i=this._subIds[e];const o=yield this.getBlockNumber();null==i&&(i=Promise.all(t).then((e=>this.send("eth_subscribe",e))),this._subIds[e]=i);const r=yield i,l=yield Promise.all(t);this.virtualSubscriptionsById.set(r,{event:n,method:"eth_subscribe",params:l,startingBlockNumber:o,virtualId:r,physicalId:r,sentEvents:[],isBackfilling:!1,backfillBuffer:[]}),this.virtualIdsByPhysicalId.set(r,r),this._subs[r]={tag:e,processFunc:s}}))}emit(e,...t){if((0,c.i)(e)){let s=!1;const n=[],i=(0,c.e)(e);return this._events=this._events.filter((e=>e.tag!==i||(setTimeout((()=>{e.listener.apply(this,t)}),0),s=!0,!e.once||(n.push(e),!1)))),n.forEach((e=>{this._stopEvent(e)})),s}return super.emit(e,...t)}sendBatch(e){return(0,c._)(this,void 0,void 0,(function*(){let t=0;const s=e.map((({method:e,params:s})=>({method:e,params:s,jsonrpc:"2.0",id:"alchemy-sdk:"+t++})));return this.sendBatchConcurrently(s)}))}destroy(){return this.removeSocketListeners(),this.stopHeartbeatAndBackfill(),super.destroy()}isCommunityResource(){return this.apiKey===c.D}_stopEvent(e){let t=e.tag;if(c.A.includes(e.type)){if(this._events.filter((e=>c.A.includes(e.type))).length)return}else if("tx"===e.type){if(this._events.filter((e=>"tx"===e.type)).length)return;t="tx"}else if(this.listenerCount(e.event))return;const s=this._subIds[t];s&&(delete this._subIds[t],s.then((e=>{this._subs[e]&&(delete this._subs[e],this.send("eth_unsubscribe",[e]))})))}addSocketListeners(){this._websocket.addEventListener("message",this.handleMessage),this._websocket.addEventListener("reopen",this.handleReopen),this._websocket.addEventListener("down",this.stopHeartbeatAndBackfill)}removeSocketListeners(){this._websocket.removeEventListener("message",this.handleMessage),this._websocket.removeEventListener("reopen",this.handleReopen),this._websocket.removeEventListener("down",this.stopHeartbeatAndBackfill)}resubscribeAndBackfill(e,t){return(0,c._)(this,void 0,void 0,(function*(){const{virtualId:s,method:n,params:i,sentEvents:o,backfillBuffer:r,startingBlockNumber:l}=t;t.isBackfilling=!0,r.length=0;try{const c=yield this.send(n,i);switch(y(e),t.physicalId=c,this.virtualIdsByPhysicalId.set(c,s),i[0]){case"newHeads":{const t=yield N((()=>B(this.backfiller.getNewHeadsBackfill(e,o,l),6e4)),5,(()=>!e()));y(e);(function(e){return v(e,(e=>e.hash))})([...t,...r]).forEach((e=>this.emitNewHeadsEvent(s,e)));break}case"logs":{const t=i[1]||{},n=yield N((()=>B(this.backfiller.getLogsBackfill(e,t,o,l),6e4)),5,(()=>!e()));y(e);(function(e){return v(e,(e=>`${e.blockHash}/${e.logIndex}`))})([...n,...r]).forEach((e=>this.emitLogsEvent(s,e)));break}}}finally{t.isBackfilling=!1,r.length=0}}))}emitNewHeadsEvent(e,t){this.emitAndRememberEvent(e,t,T)}emitLogsEvent(e,t){this.emitAndRememberEvent(e,t,O)}emitAndRememberEvent(e,t,s){this.rememberEvent(e,t,s),this.emitEvent(e,t)}emitEvent(e,t){const s=this.virtualSubscriptionsById.get(e);s&&this.emitGenericEvent(s,t)}rememberEvent(e,t,s){const n=this.virtualSubscriptionsById.get(e);n&&A(n.sentEvents,Object.assign({},t),s)}emitGenericEvent(e,t){this.emitProcessFn(e.event)(t)}startHeartbeat(){null==this.heartbeatIntervalId&&(this.heartbeatIntervalId=setInterval((()=>(0,c._)(this,void 0,void 0,(function*(){try{yield B(this.send("net_version"),1e4)}catch(e){this._websocket.reconnect()}}))),3e4))}sendBatchConcurrently(e){return(0,c._)(this,void 0,void 0,(function*(){return Promise.all(e.map((e=>this.send(e.method,e.params))))}))}customStartEvent(e){if(e.type===c.h){const{fromAddress:t,toAddress:s,hashesOnly:n}=e;this._subscribe(e.tag,[c.j.PENDING_TRANSACTIONS,{fromAddress:t,toAddress:s,hashesOnly:n}],this.emitProcessFn(e),e)}else if(e.type===c.k){const{addresses:t,includeRemoved:s,hashesOnly:n}=e;this._subscribe(e.tag,[c.j.MINED_TRANSACTIONS,{addresses:t,includeRemoved:s,hashesOnly:n}],this.emitProcessFn(e),e)}else"block"===e.type?this._subscribe("block",["newHeads"],this.emitProcessFn(e),e):"filter"===e.type&&this._subscribe(e.tag,["logs",this._getFilter(e.filter)],this.emitProcessFn(e),e)}emitProcessFn(e){switch(e.type){case c.h:return t=>this.emit({method:c.j.PENDING_TRANSACTIONS,fromAddress:e.fromAddress,toAddress:e.toAddress,hashesOnly:e.hashesOnly},t);case c.k:return t=>this.emit({method:c.j.MINED_TRANSACTIONS,addresses:e.addresses,includeRemoved:e.includeRemoved,hashesOnly:e.hashesOnly},t);case"block":return e=>{const t=h.BigNumber.from(e.number).toNumber();this._emitted.block=t,this.emit("block",t)};case"filter":return t=>{null==t.removed&&(t.removed=!1),this.emit(e.filter,this.formatter.filterLog(t))};default:throw new Error("Invalid event type to `emitProcessFn()`")}}_off(e,t){if(null==t)return this.removeAllListeners(e);const s=[];let n=!1;const i=(0,c.e)(e);return this._events=this._events.filter((e=>e.tag!==i||e.listener!=t||(!!n||(n=!0,s.push(e),!1)))),s.forEach((e=>{this._stopEvent(e)})),this}_removeAllListeners(e){let t=[];if(null==e)t=this._events,this._events=[];else{const s=(0,c.e)(e);this._events=this._events.filter((e=>e.tag!==s||(t.push(e),!1)))}return t.forEach((e=>{this._stopEvent(e)})),this}_listenerCount(e){if(!e)return this._events.length;const t=(0,c.e)(e);return this._events.filter((e=>e.tag===t)).length}_listeners(e){if(null==e)return this._events.map((e=>e.listener));const t=(0,c.e)(e);return this._events.filter((e=>e.tag===t)).map((e=>e.listener))}}const E=1e3,_=2,I=3e4;function N(e,t,s=(()=>!0)){return(0,c._)(this,void 0,void 0,(function*(){let n=0,i=0;for(;;)try{return yield e()}catch(e){if(i++,i>=t||!s(e))throw e;if(yield C(n),!s(e))throw e;n=0===n?E:Math.min(I,_*n)}}))}function C(e){return new Promise((t=>setTimeout(t,e)))}function B(e,t){return Promise.race([e,new Promise(((e,s)=>setTimeout((()=>s(new Error("Timeout"))),t)))])}function T(e){return(0,c.f)(e.number)}function O(e){return(0,c.f)(e.blockNumber)}function A(e,t,s){const n=s(t),i=e.findIndex((e=>s(e)>n-k));-1===i?e.length=0:e.splice(0,i),e.push(t)}})),t.register("cF2OZ",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0});var s=function(){function e(t,n,i){if(void 0===i&&(i={}),this.url=t,this.onclose=null,this.onerror=null,this.onmessage=null,this.onopen=null,this.ondown=null,this.onreopen=null,this.CONNECTING=e.CONNECTING,this.OPEN=e.OPEN,this.CLOSING=e.CLOSING,this.CLOSED=e.CLOSED,this.hasBeenOpened=!1,this.isClosed=!1,this.messageBuffer=[],this.nextRetryTime=0,this.reconnectCount=0,this.lastKnownExtensions="",this.lastKnownProtocol="",this.listeners={},null==n||"string"==typeof n||Array.isArray(n)?this.protocols=n:i=n,this.options=function(e){var t={};return Object.keys(s.DEFAULT_OPTIONS).forEach((function(n){var i=e[n];t[n]=void 0===i?s.DEFAULT_OPTIONS[n]:i})),t}(i),!this.options.wsConstructor){if("undefined"==typeof WebSocket)throw new Error("WebSocket not present in global scope and no wsConstructor option was provided.");this.options.wsConstructor=WebSocket}this.openNewWebSocket()}return Object.defineProperty(e.prototype,"binaryType",{get:function(){return this.binaryTypeInternal||"blob"},set:function(e){this.binaryTypeInternal=e,this.ws&&(this.ws.binaryType=e)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferedAmount",{get:function(){var e=this.ws?this.ws.bufferedAmount:0,t=!1;return this.messageBuffer.forEach((function(s){var n=function(e){return"string"==typeof e?2*e.length:e instanceof ArrayBuffer?e.byteLength:e instanceof Blob?e.size:void 0}(s);null!=n?e+=n:t=!0})),t&&this.debugLog("Some buffered data had unknown length. bufferedAmount() return value may be below the correct amount."),e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"extensions",{get:function(){return this.ws?this.ws.extensions:this.lastKnownExtensions},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"protocol",{get:function(){return this.ws?this.ws.protocol:this.lastKnownProtocol},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"readyState",{get:function(){return this.isClosed?e.CLOSED:e.OPEN},enumerable:!0,configurable:!0}),e.prototype.close=function(e,t){this.disposeSocket(e,t),this.shutdown(),this.debugLog("WebSocket permanently closed by client.")},e.prototype.send=function(e){if(this.isClosed)throw new Error("WebSocket is already in CLOSING or CLOSED state.");this.ws&&this.ws.readyState===this.OPEN?this.ws.send(e):this.messageBuffer.push(e)},e.prototype.reconnect=function(){if(this.isClosed)throw new Error("Cannot call reconnect() on socket which is permanently closed.");this.disposeSocket(1e3,"Client requested reconnect."),this.handleClose(void 0)},e.prototype.addEventListener=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.prototype.dispatchEvent=function(e){return this.dispatchEventOfType(e.type,e)},e.prototype.removeEventListener=function(e,t){this.listeners[e]&&(this.listeners[e]=this.listeners[e].filter((function(e){return e!==t})))},e.prototype.openNewWebSocket=function(){var e=this;if(!this.isClosed){var t=this.options,s=t.connectTimeout,n=t.wsConstructor;this.debugLog("Opening new WebSocket to "+this.url+".");var i=new n(this.url,this.protocols);i.onclose=function(t){return e.handleClose(t)},i.onerror=function(t){return e.handleError(t)},i.onmessage=function(t){return e.handleMessage(t)},i.onopen=function(t){return e.handleOpen(t)},this.connectTimeoutId=setTimeout((function(){e.clearConnectTimeout(),e.disposeSocket(),e.handleClose(void 0)}),s),this.ws=i}},e.prototype.handleOpen=function(e){var t=this;if(this.ws&&!this.isClosed){var s=this.options.allClearResetTime;this.debugLog("WebSocket opened."),null!=this.binaryTypeInternal?this.ws.binaryType=this.binaryTypeInternal:this.binaryTypeInternal=this.ws.binaryType,this.clearConnectTimeout(),this.hasBeenOpened?this.dispatchEventOfType("reopen",e):(this.dispatchEventOfType("open",e),this.hasBeenOpened=!0),this.messageBuffer.forEach((function(e){return t.send(e)})),this.messageBuffer=[],this.allClearTimeoutId=setTimeout((function(){t.clearAllClearTimeout(),t.nextRetryTime=0,t.reconnectCount=0;var e=s/1e3|0;t.debugLog("WebSocket remained open for "+e+" seconds. Resetting retry time and count.")}),s)}},e.prototype.handleMessage=function(e){this.isClosed||this.dispatchEventOfType("message",e)},e.prototype.handleClose=function(e){var t=this;if(!this.isClosed){var s=this.options,n=s.maxReconnectAttempts,i=s.shouldReconnect;if(this.clearConnectTimeout(),this.clearAllClearTimeout(),this.ws&&(this.lastKnownExtensions=this.ws.extensions,this.lastKnownProtocol=this.ws.protocol,this.disposeSocket()),this.dispatchEventOfType("down",e),this.reconnectCount>=n)this.stopReconnecting(e,this.getTooManyFailedReconnectsMessage());else{var o=!e||i(e);"boolean"==typeof o?this.handleWillReconnect(o,e,"Provided shouldReconnect() returned false. Closing permanently."):o.then((function(s){t.isClosed||t.handleWillReconnect(s,e,"Provided shouldReconnect() resolved to false. Closing permanently.")}))}}},e.prototype.handleError=function(e){this.dispatchEventOfType("error",e),this.debugLog("WebSocket encountered an error.")},e.prototype.handleWillReconnect=function(e,t,s){e?this.reestablishConnection():this.stopReconnecting(t,s)},e.prototype.reestablishConnection=function(){var e=this,t=this.options,s=t.minReconnectDelay,n=t.maxReconnectDelay,i=t.reconnectBackoffFactor;this.reconnectCount++;var o=this.nextRetryTime;this.nextRetryTime=Math.max(s,Math.min(this.nextRetryTime*i,n)),setTimeout((function(){return e.openNewWebSocket()}),o);var r=o/1e3|0;this.debugLog("WebSocket was closed. Re-opening in "+r+" seconds.")},e.prototype.stopReconnecting=function(e,t){this.debugLog(t),this.shutdown(),e&&this.dispatchEventOfType("close",e)},e.prototype.shutdown=function(){this.isClosed=!0,this.clearAllTimeouts(),this.messageBuffer=[],this.disposeSocket()},e.prototype.disposeSocket=function(e,t){this.ws&&(this.ws.onerror=n,this.ws.onclose=n,this.ws.onmessage=n,this.ws.onopen=n,this.ws.close(e,t),this.ws=void 0)},e.prototype.clearAllTimeouts=function(){this.clearConnectTimeout(),this.clearAllClearTimeout()},e.prototype.clearConnectTimeout=function(){null!=this.connectTimeoutId&&(clearTimeout(this.connectTimeoutId),this.connectTimeoutId=void 0)},e.prototype.clearAllClearTimeout=function(){null!=this.allClearTimeoutId&&(clearTimeout(this.allClearTimeoutId),this.allClearTimeoutId=void 0)},e.prototype.dispatchEventOfType=function(e,t){var s=this;switch(e){case"close":this.onclose&&this.onclose(t);break;case"error":this.onerror&&this.onerror(t);break;case"message":this.onmessage&&this.onmessage(t);break;case"open":this.onopen&&this.onopen(t);break;case"down":this.ondown&&this.ondown(t);break;case"reopen":this.onreopen&&this.onreopen(t)}return e in this.listeners&&this.listeners[e].slice().forEach((function(e){return s.callListener(e,t)})),!t||!t.defaultPrevented},e.prototype.callListener=function(e,t){"function"==typeof e?e.call(this,t):e.handleEvent.call(this,t)},e.prototype.debugLog=function(e){this.options.debug&&console.log(e)},e.prototype.getTooManyFailedReconnectsMessage=function(){var e,t=this.options.maxReconnectAttempts;return"Failed to reconnect after "+t+" "+(e="attempt",(1===t?e:e+"s")+". Closing permanently.")},e.DEFAULT_OPTIONS={allClearResetTime:5e3,connectTimeout:5e3,debug:!1,minReconnectDelay:1e3,maxReconnectDelay:3e4,maxReconnectAttempts:Number.POSITIVE_INFINITY,reconnectBackoffFactor:1.5,shouldReconnect:function(){return!0},wsConstructor:void 0},e.CONNECTING=0,e.OPEN=1,e.CLOSING=2,e.CLOSED=3,e}();function n(){}e.exports.default=s})),t.register("fC2qj",(function(e,s){var n;if("object"==typeof globalThis)n=globalThis;else try{n=t("1EZeK")}catch(e){}finally{if(n||"undefined"==typeof window||(n=window),!n)throw new Error("Could not determine global this")}var i=n.WebSocket||n.MozWebSocket,o=t("7N9e6");function r(e,t){return t?new i(e,t):new i(e)}i&&["CONNECTING","OPEN","CLOSING","CLOSED"].forEach((function(e){Object.defineProperty(r,e,{get:function(){return i[e]}})})),e.exports={w3cwebsocket:i?r:null,version:o}})),t.register("1EZeK",(function(e,t){var s=function(){if("object"==typeof self&&self)return self;if("object"==typeof window&&window)return window;throw new Error("Unable to resolve global `this`")};e.exports=function(){if(this)return this;if("object"==typeof globalThis&&globalThis)return globalThis;try{Object.defineProperty(Object.prototype,"__global__",{get:function(){return this},configurable:!0})}catch(e){return s()}try{return __global__||s()}finally{delete Object.prototype.__global__}}()})),t.register("7N9e6",(function(e,s){e.exports=t("ln8A6").version})),t.register("ln8A6",(function(e,t){e.exports=JSON.parse('{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.34","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=4.0.0"},"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"test":"tape test/unit/*.js","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}')}));
//# sourceMappingURL=alchemy-websocket-provider-3523bd89.2e896486.js.map
