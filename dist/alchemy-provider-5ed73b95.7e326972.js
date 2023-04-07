var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire5dc4;e.register("233cQ",(function(t,r){var i,n,s,o;i=t.exports,n="AlchemyProvider",s=()=>l,Object.defineProperty(i,n,{get:s,set:o,enumerable:!0,configurable:!0});var c=e("irJEB"),h=e("22AMH"),d=e("bsYBY"),a=e("6BV0e");e("i5hFG");class u{constructor(e,t=100){this.sendBatchFn=e,this.maxBatchSize=t,this.pendingBatch=[]}enqueueRequest(e){return(0,c._)(this,void 0,void 0,(function*(){const t={request:e,resolve:void 0,reject:void 0},r=new Promise(((e,r)=>{t.resolve=e,t.reject=r}));return this.pendingBatch.push(t),this.pendingBatch.length===this.maxBatchSize?this.sendBatchRequest():this.pendingBatchTimer||(this.pendingBatchTimer=setTimeout((()=>this.sendBatchRequest()),10)),r}))}sendBatchRequest(){return(0,c._)(this,void 0,void 0,(function*(){const e=this.pendingBatch;this.pendingBatch=[],this.pendingBatchTimer&&(clearTimeout(this.pendingBatchTimer),this.pendingBatchTimer=void 0);const t=e.map((e=>e.request));return this.sendBatchFn(t).then((t=>{e.forEach(((e,r)=>{const i=t[r];if(i.error){const t=new Error(i.error.message);t.code=i.error.code,t.data=i.error.data,e.reject(t)}else e.resolve(i.result)}))}),(t=>{e.forEach((e=>{e.reject(t)}))}))}))}}class l extends d.JsonRpcProvider{constructor(e){const t=l.getApiKey(e.apiKey),r=l.getAlchemyNetwork(e.network),i=l.getAlchemyConnectionInfo(r,t,"http");void 0!==e.url&&(i.url=e.url),i.throttleLimit=e.maxRetries;super(i,c.E[r]),this.apiKey=e.apiKey,this.maxRetries=e.maxRetries,this.batchRequests=e.batchRequests;const n=Object.assign(Object.assign({},this.connection),{headers:Object.assign(Object.assign({},this.connection.headers),{"Alchemy-Ethers-Sdk-Method":"batchSend"})});this.batcher=new u((e=>(0,a.fetchJson)(n,JSON.stringify(e))))}static getApiKey(e){if(null==e)return c.D;if(e&&"string"!=typeof e)throw new Error(`Invalid apiKey '${e}' provided. apiKey must be a string.`);return e}static getNetwork(e){return"string"==typeof e&&e in c.C?c.C[e]:(0,h.getNetwork)(e)}static getAlchemyNetwork(e){if(void 0===e)return c.a;if("number"==typeof e)throw new Error(`Invalid network '${e}' provided. Network must be a string.`);if(!Object.values(c.N).includes(e))throw new Error(`Invalid network '${e}' provided. Network must be one of: ${Object.values(c.N).join(", ")}.`);return e}static getAlchemyConnectionInfo(e,t,r){const i="http"===r?(0,c.g)(e,t):(0,c.b)(e,t);return{headers:c.I?{"Alchemy-Ethers-Sdk-Version":c.V}:{"Alchemy-Ethers-Sdk-Version":c.V,"Accept-Encoding":"gzip"},allowGzip:!0,url:i}}detectNetwork(){const e=Object.create(null,{detectNetwork:{get:()=>super.detectNetwork}});return(0,c._)(this,void 0,void 0,(function*(){let t=this.network;if(null==t&&(t=yield e.detectNetwork.call(this),!t))throw new Error("No network detected");return t}))}_startPending(){(0,c.l)("WARNING: Alchemy Provider does not support pending filters")}isCommunityResource(){return this.apiKey===c.D}send(e,t){return this._send(e,t,"send")}_send(e,t,r,i=!1){const n={method:e,params:t,id:this._nextId++,jsonrpc:"2.0"};if(Object.assign({},this.connection).headers["Alchemy-Ethers-Sdk-Method"]=r,this.batchRequests||i)return this.batcher.enqueueRequest(n);this.emit("debug",{action:"request",request:(0,c.d)(n),provider:this});const s=["eth_chainId","eth_blockNumber"].indexOf(e)>=0;if(s&&this._cache[e])return this._cache[e];const o=(0,a.fetchJson)(this.connection,JSON.stringify(n),p).then((e=>(this.emit("debug",{action:"response",request:n,response:e,provider:this}),e)),(e=>{throw this.emit("debug",{action:"response",error:e,request:n,provider:this}),e}));return s&&(this._cache[e]=o,setTimeout((()=>{this._cache[e]=null}),0)),o}}function p(e){if(e.error){const t=new Error(e.error.message);throw t.code=e.error.code,t.data=e.error.data,t}return e.result}}));
//# sourceMappingURL=alchemy-provider-5ed73b95.7e326972.js.map
