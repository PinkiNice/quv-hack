// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ljEPI":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "44f5f67b9390f3ca";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"7KjGG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlchemyWebSocketProvider", ()=>AlchemyWebSocketProvider);
var _index231D6B1FJs = require("./index-231d6b1f.js");
var _sturdyWebsocket = require("sturdy-websocket");
var _sturdyWebsocketDefault = parcelHelpers.interopDefault(_sturdyWebsocket);
var _bignumber = require("@ethersproject/bignumber");
var _networks = require("@ethersproject/networks");
var _providers = require("@ethersproject/providers");
var _alchemyProvider5Ed73B95Js = require("./alchemy-provider-5ed73b95.js");
var _utils = require("./api/utils");
var _axios = require("axios");
var _abstractProvider = require("@ethersproject/abstract-provider");
var _wallet = require("@ethersproject/wallet");
var _contracts = require("@ethersproject/contracts");
var _web = require("@ethersproject/web");
var process = require("process");
/**
 * The maximum number of blocks to backfill. If more than this many blocks have
 * been missed, then we'll sadly miss data, but we want to make sure we don't
 * end up requesting thousands of blocks if somebody left their laptop closed for a week.
 */ const MAX_BACKFILL_BLOCKS = 120;
/**
 * The WebsocketBackfiller fetches events that were sent since a provided block
 * number. This is used in the {@link AlchemyWebSocketProvider} to backfill
 * events that were transmitted while the websocket connection was down.
 *
 * The backfiller backfills two main eth_subscribe events: `logs` and `newHeads`.
 *
 * @internal
 */ class WebsocketBackfiller {
    constructor(provider){
        this.provider = provider;
        // TODO: Use HTTP provider to do backfill.
        this.maxBackfillBlocks = MAX_BACKFILL_BLOCKS;
    }
    /**
     * Runs backfill for `newHeads` events.
     *
     * @param isCancelled Whether the backfill request is cancelled.
     * @param previousHeads Previous head requests that were sent.
     * @param fromBlockNumber The block number to start backfilling from.
     * @returns A list of `newHeads` events that were sent since the last backfill.
     */ getNewHeadsBackfill(isCancelled, previousHeads, fromBlockNumber) {
        return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
            throwIfCancelled(isCancelled);
            const toBlockNumber = yield this.getBlockNumber();
            throwIfCancelled(isCancelled);
            // If there are no previous heads to fetch, return new heads since
            // `fromBlockNumber`, or up to maxBackfillBlocks from the current head.
            if (previousHeads.length === 0) return this.getHeadEventsInRange(Math.max(fromBlockNumber, toBlockNumber - this.maxBackfillBlocks) + 1, toBlockNumber + 1);
            // If the last emitted event is too far back in the past, there's no need
            // to backfill for reorgs. Just fetch the last `maxBackfillBlocks` worth of
            // new heads.
            const lastSeenBlockNumber = (0, _index231D6B1FJs.f)(previousHeads[previousHeads.length - 1].number);
            const minBlockNumber = toBlockNumber - this.maxBackfillBlocks + 1;
            if (lastSeenBlockNumber <= minBlockNumber) return this.getHeadEventsInRange(minBlockNumber, toBlockNumber + 1);
            // To capture all `newHeads` events, return all head events from the last
            // seen block number to current + any of the previous heads that were re-orged.
            const reorgHeads = yield this.getReorgHeads(isCancelled, previousHeads);
            throwIfCancelled(isCancelled);
            const intermediateHeads = yield this.getHeadEventsInRange(lastSeenBlockNumber + 1, toBlockNumber + 1);
            throwIfCancelled(isCancelled);
            return [
                ...reorgHeads,
                ...intermediateHeads
            ];
        });
    }
    /**
     * Runs backfill for `logs` events.
     *
     * @param isCancelled Whether the backfill request is cancelled.
     * @param filter The filter object that accompanies a logs subscription.
     * @param previousLogs Previous log requests that were sent.
     * @param fromBlockNumber The block number to start backfilling from.
     */ getLogsBackfill(isCancelled, filter, previousLogs, fromBlockNumber) {
        return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
            throwIfCancelled(isCancelled);
            const toBlockNumber = yield this.getBlockNumber();
            throwIfCancelled(isCancelled);
            // If there are no previous logs to fetch, return new logs since
            // `fromBlockNumber`, or up to `maxBackfillBlocks` from the current head.
            if (previousLogs.length === 0) return this.getLogsInRange(filter, Math.max(fromBlockNumber, toBlockNumber - this.maxBackfillBlocks) + 1, toBlockNumber + 1);
            // If the last emitted log is too far back in the past, there's no need
            // to backfill for removed logs. Just fetch the last `maxBackfillBlocks`
            // worth of logs.
            const lastSeenBlockNumber = (0, _index231D6B1FJs.f)(previousLogs[previousLogs.length - 1].blockNumber);
            const minBlockNumber = toBlockNumber - this.maxBackfillBlocks + 1;
            if (lastSeenBlockNumber < minBlockNumber) return this.getLogsInRange(filter, minBlockNumber, toBlockNumber + 1);
            // Return all log events that have happened along with log events that have
            // been removed due to a chain reorg.
            const commonAncestor = yield this.getCommonAncestor(isCancelled, previousLogs);
            throwIfCancelled(isCancelled);
            // All previous logs with a block number greater than the common ancestor
            // were part of a re-org, so mark them as such.
            const removedLogs = previousLogs.filter((log)=>(0, _index231D6B1FJs.f)(log.blockNumber) > commonAncestor.blockNumber).map((log)=>Object.assign(Object.assign({}, log), {
                    removed: true
                }));
            // If no common ancestor was found, start backfill from the oldest log's
            // block number.
            const fromBlockInclusive = commonAncestor.blockNumber === Number.NEGATIVE_INFINITY ? (0, _index231D6B1FJs.f)(previousLogs[0].blockNumber) : commonAncestor.blockNumber;
            let addedLogs = yield this.getLogsInRange(filter, fromBlockInclusive, toBlockNumber + 1);
            // De-dupe any logs that were already emitted.
            addedLogs = addedLogs.filter((log)=>log && ((0, _index231D6B1FJs.f)(log.blockNumber) > commonAncestor.blockNumber || (0, _index231D6B1FJs.f)(log.logIndex) > commonAncestor.logIndex));
            throwIfCancelled(isCancelled);
            return [
                ...removedLogs,
                ...addedLogs
            ];
        });
    }
    /**
     * Sets a new max backfill blocks. VISIBLE ONLY FOR TESTING.
     *
     * @internal
     */ setMaxBackfillBlock(newMax) {
        this.maxBackfillBlocks = newMax;
    }
    /**
     * Gets the current block number as a number.
     *
     * @private
     */ getBlockNumber() {
        return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
            const blockNumberHex = yield this.provider.send("eth_blockNumber");
            return (0, _index231D6B1FJs.f)(blockNumberHex);
        });
    }
    /**
     * Gets all `newHead` events in the provided range. Note that the returned
     * heads do not include re-orged heads. Use {@link getReorgHeads} to find heads
     * that were part of a re-org.
     *
     * @private
     */ getHeadEventsInRange(fromBlockInclusive, toBlockExclusive) {
        return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
            if (fromBlockInclusive >= toBlockExclusive) return [];
            const batchParts = [];
            for(let i = fromBlockInclusive; i < toBlockExclusive; i++)batchParts.push({
                method: "eth_getBlockByNumber",
                params: [
                    (0, _index231D6B1FJs.t)(i),
                    false
                ]
            });
            // TODO: handle errors
            const blockHeads = yield this.provider.sendBatch(batchParts);
            return blockHeads.map(toNewHeadsEvent);
        });
    }
    /**
     * Returns all heads that were part of a reorg event.
     *
     * @private
     */ getReorgHeads(isCancelled, previousHeads) {
        return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
            const result = [];
            // Iterate from the most recent head backwards in order to find the first
            // block that was part of a re-org.
            for(let i = previousHeads.length - 1; i >= 0; i--){
                const oldEvent = previousHeads[i];
                const blockHead = yield this.getBlockByNumber((0, _index231D6B1FJs.f)(oldEvent.number));
                throwIfCancelled(isCancelled);
                // If the hashes match, then current head in the iteration was not re-orged.
                if (oldEvent.hash === blockHead.hash) break;
                result.push(toNewHeadsEvent(blockHead));
            }
            return result.reverse();
        });
    }
    /**
     * Simple wrapper around `eth_getBlockByNumber` that returns the complete
     * block information for the provided block number.
     *
     * @private
     */ getBlockByNumber(blockNumber) {
        return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
            return this.provider.send("eth_getBlockByNumber", [
                (0, _index231D6B1FJs.t)(blockNumber),
                false
            ]);
        });
    }
    /**
     * Given a list of previous log events, finds the common block number from the
     * logs that matches the block head.
     *
     * This can be used to identify which logs are part of a re-org.
     *
     * Returns 1 less than the oldest log's block number if no common ancestor was found.
     *
     * @private
     */ getCommonAncestor(isCancelled, previousLogs) {
        return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
            // Iterate from the most recent head backwards in order to find the first
            // block that was part of a re-org.
            let blockHead = yield this.getBlockByNumber((0, _index231D6B1FJs.f)(previousLogs[previousLogs.length - 1].blockNumber));
            throwIfCancelled(isCancelled);
            for(let i = previousLogs.length - 1; i >= 0; i--){
                const oldLog = previousLogs[i];
                // Ensure that updated blocks are fetched every time the log's block number
                // changes.
                if (oldLog.blockNumber !== blockHead.number) blockHead = yield this.getBlockByNumber((0, _index231D6B1FJs.f)(oldLog.blockNumber));
                // Since logs are ordered in ascending order, the first log that matches
                // the hash should be the largest logIndex.
                if (oldLog.blockHash === blockHead.hash) return {
                    blockNumber: (0, _index231D6B1FJs.f)(oldLog.blockNumber),
                    logIndex: (0, _index231D6B1FJs.f)(oldLog.logIndex)
                };
            }
            return {
                blockNumber: Number.NEGATIVE_INFINITY,
                logIndex: Number.NEGATIVE_INFINITY
            };
        });
    }
    /**
     * Gets all `logs` events in the provided range. Note that the returned logs
     * do not include removed logs.
     *
     * @private
     */ getLogsInRange(filter, fromBlockInclusive, toBlockExclusive) {
        return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
            if (fromBlockInclusive >= toBlockExclusive) return [];
            const rangeFilter = Object.assign(Object.assign({}, filter), {
                fromBlock: (0, _index231D6B1FJs.t)(fromBlockInclusive),
                toBlock: (0, _index231D6B1FJs.t)(toBlockExclusive - 1)
            });
            return this.provider.send("eth_getLogs", [
                rangeFilter
            ]);
        });
    }
}
function toNewHeadsEvent(head) {
    const result = Object.assign({}, head);
    delete result.totalDifficulty;
    delete result.transactions;
    delete result.uncles;
    return result;
}
function dedupeNewHeads(events) {
    return dedupe(events, (event)=>event.hash);
}
function dedupeLogs(events) {
    return dedupe(events, (event)=>`${event.blockHash}/${event.logIndex}`);
}
function dedupe(items, getKey) {
    const keysSeen = new Set();
    const result = [];
    items.forEach((item)=>{
        const key = getKey(item);
        if (!keysSeen.has(key)) {
            keysSeen.add(key);
            result.push(item);
        }
    });
    return result;
}
const CANCELLED = new Error("Cancelled");
function throwIfCancelled(isCancelled) {
    if (isCancelled()) throw CANCELLED;
}
const HEARTBEAT_INTERVAL = 30000;
const HEARTBEAT_WAIT_TIME = 10000;
const BACKFILL_TIMEOUT = 60000;
const BACKFILL_RETRIES = 5;
/**
 * Subscriptions have a memory of recent events they have sent so that in the
 * event that they disconnect and need to backfill, they can detect re-orgs.
 * Keep a buffer that goes back at least these many blocks, the maximum amount
 * at which we might conceivably see a re-org.
 *
 * Note that while our buffer goes back this many blocks, it may contain more
 * than this many elements, since in the case of logs subscriptions more than
 * one event may be emitted for a block.
 */ const RETAINED_EVENT_BLOCK_COUNT = 10;
/**
 * SDK's custom implementation fo the ethers.js's 'AlchemyWebSocketProvider'.
 *
 * Do not call this constructor directly. Instead, instantiate an instance of
 * {@link Alchemy} and call {@link Alchemy.config.getWebSocketProvider()}.
 *
 * @public
 */ class AlchemyWebSocketProvider extends (0, _providers.WebSocketProvider) {
    /** @internal */ constructor(config, wsConstructor){
        var _a;
        // Normalize the API Key to a string.
        const apiKey = (0, _alchemyProvider5Ed73B95Js.AlchemyProvider).getApiKey(config.apiKey);
        // Generate our own connection info with the correct endpoint URLs.
        const alchemyNetwork = (0, _alchemyProvider5Ed73B95Js.AlchemyProvider).getAlchemyNetwork(config.network);
        const connection = (0, _alchemyProvider5Ed73B95Js.AlchemyProvider).getAlchemyConnectionInfo(alchemyNetwork, apiKey, "wss");
        const protocol = `alchemy-sdk-${(0, _index231D6B1FJs.V)}`;
        // Use the provided config URL override if it exists, otherwise use the created one.
        const ws = new (0, _sturdyWebsocketDefault.default)((_a = config.url) !== null && _a !== void 0 ? _a : connection.url, protocol, {
            wsConstructor: wsConstructor !== null && wsConstructor !== void 0 ? wsConstructor : getWebsocketConstructor()
        });
        // Normalize the Alchemy named network input to the network names used by
        // ethers. This allows the parent super constructor in JsonRpcProvider to
        // correctly set the network.
        const ethersNetwork = (0, _index231D6B1FJs.E)[alchemyNetwork];
        super(ws, ethersNetwork);
        this._events = [];
        // In the case of a WebSocket reconnection, all subscriptions are lost and we
        // create new ones to replace them, but we want to create the illusion that
        // the original subscriptions persist. Thus, maintain a mapping from the
        // "virtual" subscription ids which are visible to the consumer to the
        // "physical" subscription ids of the actual connections. This terminology is
        // borrowed from virtual and physical memory, which has a similar mapping.
        /** @internal */ this.virtualSubscriptionsById = new Map();
        /** @internal */ this.virtualIdsByPhysicalId = new Map();
        /**
         * The underlying ethers {@link WebSocketProvider} already handles and emits
         * messages. To allow backfilling, track all messages that are emitted.
         *
         * This is a field arrow function in order to preserve `this` context when
         * passing the method as an event listener.
         *
         * @internal
         */ this.handleMessage = (event)=>{
            const message = JSON.parse(event.data);
            if (!isSubscriptionEvent(message)) return;
            const physicalId = message.params.subscription;
            const virtualId = this.virtualIdsByPhysicalId.get(physicalId);
            if (!virtualId) return;
            const subscription = this.virtualSubscriptionsById.get(virtualId);
            if (subscription.method !== "eth_subscribe") return;
            switch(subscription.params[0]){
                case "newHeads":
                    {
                        const newHeadsSubscription = subscription;
                        const newHeadsMessage = message;
                        const { isBackfilling , backfillBuffer  } = newHeadsSubscription;
                        const { result  } = newHeadsMessage.params;
                        if (isBackfilling) addToNewHeadsEventsBuffer(backfillBuffer, result);
                        else if (physicalId !== virtualId) // In the case of a re-opened subscription, ethers will not emit the
                        // event, so the SDK has to.
                        this.emitAndRememberEvent(virtualId, result, getNewHeadsBlockNumber);
                        else // Ethers subscription mapping will emit the event, just store it.
                        this.rememberEvent(virtualId, result, getNewHeadsBlockNumber);
                        break;
                    }
                case "logs":
                    {
                        const logsSubscription = subscription;
                        const logsMessage = message;
                        const { isBackfilling: isBackfilling1 , backfillBuffer: backfillBuffer1  } = logsSubscription;
                        const { result: result1  } = logsMessage.params;
                        if (isBackfilling1) addToLogsEventsBuffer(backfillBuffer1, result1);
                        else if (virtualId !== physicalId) this.emitAndRememberEvent(virtualId, result1, getLogsBlockNumber);
                        else this.rememberEvent(virtualId, result1, getLogsBlockNumber);
                        break;
                    }
                default:
                    if (physicalId !== virtualId) {
                        // In the case of a re-opened subscription, ethers will not emit the
                        // event, so the SDK has to.
                        const { result: result2  } = message.params;
                        this.emitEvent(virtualId, result2);
                    }
            }
        };
        /**
         * When the websocket connection reopens:
         *
         * 1. Resubscribe to all existing subscriptions and start backfilling
         * 2. Restart heart beat.
         *
         * This is a field arrow function in order to preserve `this` context when
         * passing the method as an event listener.
         *
         * @internal
         */ this.handleReopen = ()=>{
            this.virtualIdsByPhysicalId.clear();
            const { cancel , isCancelled  } = makeCancelToken();
            this.cancelBackfill = cancel;
            for (const subscription of this.virtualSubscriptionsById.values())(()=>(0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
                    try {
                        yield this.resubscribeAndBackfill(isCancelled, subscription);
                    } catch (error) {
                        if (!isCancelled()) console.error(`Error while backfilling "${subscription.params[0]}" subscription. Some events may be missing.`, error);
                    }
                }))();
            this.startHeartbeat();
        };
        /**
         * Cancels the heartbeat and any pending backfills being performed. This is
         * called when the websocket connection goes down or is disconnected.
         *
         * This is a field arrow function in order to preserve `this` context when
         * passing the method as an event listener.
         *
         * @internal
         */ this.stopHeartbeatAndBackfill = ()=>{
            if (this.heartbeatIntervalId != null) {
                clearInterval(this.heartbeatIntervalId);
                this.heartbeatIntervalId = undefined;
            }
            this.cancelBackfill();
        };
        this.apiKey = apiKey;
        // Start heartbeat and backfiller for the websocket connection.
        this.backfiller = new WebsocketBackfiller(this);
        this.addSocketListeners();
        this.startHeartbeat();
        this.cancelBackfill = (0, _index231D6B1FJs.n);
    }
    /**
     * Overrides the `BaseProvider.getNetwork` method as implemented by ethers.js.
     *
     * This override allows the SDK to set the provider's network to values not
     * yet supported by ethers.js.
     *
     * @internal
     * @override
     */ static getNetwork(network) {
        if (typeof network === "string" && network in (0, _index231D6B1FJs.C)) return (0, _index231D6B1FJs.C)[network];
        // Call the standard ethers.js getNetwork method for other networks.
        return (0, _networks.getNetwork)(network);
    }
    /**
     * Overridden implementation of ethers that includes Alchemy based subscriptions.
     *
     * @param eventName Event to subscribe to
     * @param listener The listener function to call when the event is triggered.
     * @override
     * @public
     */ // TODO: Override `Listener` type to get type autocompletions.
    on(eventName, listener) {
        return this._addEventListener(eventName, listener, false);
    }
    /**
     * Overridden implementation of ethers that includes Alchemy based
     * subscriptions. Adds a listener to the triggered for only the next
     * {@link eventName} event, after which it will be removed.
     *
     * @param eventName Event to subscribe to
     * @param listener The listener function to call when the event is triggered.
     * @override
     * @public
     */ // TODO: Override `Listener` type to get type autocompletions.
    once(eventName, listener) {
        return this._addEventListener(eventName, listener, true);
    }
    /**
     * Removes the provided {@link listener} for the {@link eventName} event. If no
     * listener is provided, all listeners for the event will be removed.
     *
     * @param eventName Event to unlisten to.
     * @param listener The listener function to remove.
     * @override
     * @public
     */ off(eventName, listener) {
        if ((0, _index231D6B1FJs.i)(eventName)) return this._off(eventName, listener);
        else return super.off(eventName, listener);
    }
    /**
     * Remove all listeners for the provided {@link eventName} event. If no event
     * is provided, all events and their listeners are removed.
     *
     * @param eventName The event to remove all listeners for.
     * @override
     * @public
     */ removeAllListeners(eventName) {
        if (eventName !== undefined && (0, _index231D6B1FJs.i)(eventName)) return this._removeAllListeners(eventName);
        else return super.removeAllListeners(eventName);
    }
    /**
     * Returns the number of listeners for the provided {@link eventName} event. If
     * no event is provided, the total number of listeners for all events is returned.
     *
     * @param eventName The event to get the number of listeners for.
     * @public
     * @override
     */ listenerCount(eventName) {
        if (eventName !== undefined && (0, _index231D6B1FJs.i)(eventName)) return this._listenerCount(eventName);
        else return super.listenerCount(eventName);
    }
    /**
     * Returns an array of listeners for the provided {@link eventName} event. If
     * no event is provided, all listeners will be included.
     *
     * @param eventName The event to get the listeners for.
     * @public
     * @override
     */ listeners(eventName) {
        if (eventName !== undefined && (0, _index231D6B1FJs.i)(eventName)) return this._listeners(eventName);
        else return super.listeners(eventName);
    }
    /**
     * Overrides the method in `BaseProvider` in order to properly format the
     * Alchemy subscription events.
     *
     * @internal
     * @override
     */ _addEventListener(eventName, listener, once) {
        if ((0, _index231D6B1FJs.i)(eventName)) {
            (0, _index231D6B1FJs.v)(eventName);
            const event = new (0, _index231D6B1FJs.c)((0, _index231D6B1FJs.e)(eventName), listener, once);
            this._events.push(event);
            this._startEvent(event);
            return this;
        } else return super._addEventListener(eventName, listener, once);
    }
    /**
     * Overrides the `_startEvent()` method in ethers.js's
     * {@link WebSocketProvider} to include additional alchemy methods.
     *
     * @param event
     * @override
     * @internal
     */ _startEvent(event) {
        // Check if the event type is a custom Alchemy subscription.
        const customLogicTypes = [
            ...(0, _index231D6B1FJs.A),
            "block",
            "filter"
        ];
        if (customLogicTypes.includes(event.type)) this.customStartEvent(event);
        else super._startEvent(event);
    }
    /**
     * Overridden from ethers.js's {@link WebSocketProvider}
     *
     * Modified in order to add mappings for backfilling.
     *
     * @internal
     * @override
     */ _subscribe(tag, param, processFunc, event) {
        return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
            let subIdPromise = this._subIds[tag];
            // BEGIN MODIFIED CODE
            const startingBlockNumber = yield this.getBlockNumber();
            // END MODIFIED CODE
            if (subIdPromise == null) {
                subIdPromise = Promise.all(param).then((param)=>{
                    return this.send("eth_subscribe", param);
                });
                this._subIds[tag] = subIdPromise;
            }
            const subId = yield subIdPromise;
            // BEGIN MODIFIED CODE
            const resolvedParams = yield Promise.all(param);
            this.virtualSubscriptionsById.set(subId, {
                event: event,
                method: "eth_subscribe",
                params: resolvedParams,
                startingBlockNumber,
                virtualId: subId,
                physicalId: subId,
                sentEvents: [],
                isBackfilling: false,
                backfillBuffer: []
            });
            this.virtualIdsByPhysicalId.set(subId, subId);
            // END MODIFIED CODE
            this._subs[subId] = {
                tag,
                processFunc
            };
        });
    }
    /**
     * DO NOT MODIFY.
     *
     * Original code copied over from ether.js's `BaseProvider`.
     *
     * This method is copied over directly in order to implement Alchemy's unique
     * subscription types. The only difference is that this method calls
     * {@link getAlchemyEventTag} instead of the original `getEventTag()` method in
     * order to parse the Alchemy subscription event.
     *
     * @internal
     * @override
     */ emit(eventName, ...args) {
        if ((0, _index231D6B1FJs.i)(eventName)) {
            let result = false;
            const stopped = [];
            // This line is the only modified line from the original method.
            const eventTag = (0, _index231D6B1FJs.e)(eventName);
            this._events = this._events.filter((event)=>{
                if (event.tag !== eventTag) return true;
                setTimeout(()=>{
                    event.listener.apply(this, args);
                }, 0);
                result = true;
                if (event.once) {
                    stopped.push(event);
                    return false;
                }
                return true;
            });
            stopped.forEach((event)=>{
                this._stopEvent(event);
            });
            return result;
        } else return super.emit(eventName, ...args);
    }
    /** @internal */ sendBatch(parts) {
        return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
            let nextId = 0;
            const payload = parts.map(({ method , params  })=>{
                return {
                    method,
                    params,
                    jsonrpc: "2.0",
                    id: `alchemy-sdk:${nextId++}`
                };
            });
            return this.sendBatchConcurrently(payload);
        });
    }
    /** @override */ destroy() {
        this.removeSocketListeners();
        this.stopHeartbeatAndBackfill();
        return super.destroy();
    }
    /**
     * Overrides the ether's `isCommunityResource()` method. Returns true if the
     * current api key is the default key.
     *
     * @override
     */ isCommunityResource() {
        return this.apiKey === (0, _index231D6B1FJs.D);
    }
    /**
     * DO NOT MODIFY.
     *
     * Original code copied over from ether.js's `WebSocketProvider._stopEvent()`.
     *
     * This method is copied over directly in order to support Alchemy's
     * subscription type by allowing the provider to properly stop Alchemy's
     * subscription events.
     *
     * @internal
     */ _stopEvent(event) {
        let tag = event.tag;
        // START MODIFIED CODE
        if ((0, _index231D6B1FJs.A).includes(event.type)) {
            // There are remaining pending transaction listeners.
            if (this._events.filter((e)=>(0, _index231D6B1FJs.A).includes(e.type)).length) return;
        // END MODIFIED CODE
        } else if (event.type === "tx") {
            // There are remaining transaction event listeners
            if (this._events.filter((e)=>e.type === "tx").length) return;
            tag = "tx";
        } else if (this.listenerCount(event.event)) // There are remaining event listeners
        return;
        const subId = this._subIds[tag];
        if (!subId) return;
        delete this._subIds[tag];
        subId.then((subId)=>{
            if (!this._subs[subId]) return;
            delete this._subs[subId];
            this.send("eth_unsubscribe", [
                subId
            ]);
        });
    }
    /** @internal */ addSocketListeners() {
        this._websocket.addEventListener("message", this.handleMessage);
        this._websocket.addEventListener("reopen", this.handleReopen);
        this._websocket.addEventListener("down", this.stopHeartbeatAndBackfill);
    }
    /** @internal */ removeSocketListeners() {
        this._websocket.removeEventListener("message", this.handleMessage);
        this._websocket.removeEventListener("reopen", this.handleReopen);
        this._websocket.removeEventListener("down", this.stopHeartbeatAndBackfill);
    }
    /**
     * Reopens the backfill based on
     *
     * @param isCancelled
     * @param subscription
     * @internal
     */ resubscribeAndBackfill(isCancelled, subscription) {
        return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
            const { virtualId , method , params , sentEvents , backfillBuffer , startingBlockNumber  } = subscription;
            subscription.isBackfilling = true;
            backfillBuffer.length = 0;
            try {
                const physicalId = yield this.send(method, params);
                throwIfCancelled(isCancelled);
                subscription.physicalId = physicalId;
                this.virtualIdsByPhysicalId.set(physicalId, virtualId);
                switch(params[0]){
                    case "newHeads":
                        {
                            const backfillEvents = yield withBackoffRetries(()=>withTimeout(this.backfiller.getNewHeadsBackfill(isCancelled, sentEvents, startingBlockNumber), BACKFILL_TIMEOUT), BACKFILL_RETRIES, ()=>!isCancelled());
                            throwIfCancelled(isCancelled);
                            const events = dedupeNewHeads([
                                ...backfillEvents,
                                ...backfillBuffer
                            ]);
                            events.forEach((event)=>this.emitNewHeadsEvent(virtualId, event));
                            break;
                        }
                    case "logs":
                        {
                            const filter = params[1] || {};
                            const backfillEvents1 = yield withBackoffRetries(()=>withTimeout(this.backfiller.getLogsBackfill(isCancelled, filter, sentEvents, startingBlockNumber), BACKFILL_TIMEOUT), BACKFILL_RETRIES, ()=>!isCancelled());
                            throwIfCancelled(isCancelled);
                            const events1 = dedupeLogs([
                                ...backfillEvents1,
                                ...backfillBuffer
                            ]);
                            events1.forEach((event)=>this.emitLogsEvent(virtualId, event));
                            break;
                        }
                    default:
                        break;
                }
            } finally{
                subscription.isBackfilling = false;
                backfillBuffer.length = 0;
            }
        });
    }
    /** @internal */ emitNewHeadsEvent(virtualId, result) {
        this.emitAndRememberEvent(virtualId, result, getNewHeadsBlockNumber);
    }
    /** @internal */ emitLogsEvent(virtualId, result) {
        this.emitAndRememberEvent(virtualId, result, getLogsBlockNumber);
    }
    /**
     * Emits an event to consumers, but also remembers it in its subscriptions's
     * `sentEvents` buffer so that we can detect re-orgs if the connection drops
     * and needs to be reconnected.
     *
     * @internal
     */ emitAndRememberEvent(virtualId, result, getBlockNumber) {
        this.rememberEvent(virtualId, result, getBlockNumber);
        this.emitEvent(virtualId, result);
    }
    emitEvent(virtualId, result) {
        const subscription = this.virtualSubscriptionsById.get(virtualId);
        if (!subscription) return;
        this.emitGenericEvent(subscription, result);
    }
    /** @internal */ rememberEvent(virtualId, result, getBlockNumber) {
        const subscription = this.virtualSubscriptionsById.get(virtualId);
        if (!subscription) return;
        // Web3 modifies these event objects once we pass them on (changing hex
        // numbers to numbers). We want the original event, so make a defensive
        // copy.
        addToPastEventsBuffer(subscription.sentEvents, Object.assign({}, result), getBlockNumber);
    }
    /** @internal */ emitGenericEvent(subscription, result) {
        const emitFunction = this.emitProcessFn(subscription.event);
        emitFunction(result);
    }
    /**
     * Starts a heartbeat that pings the websocket server periodically to ensure
     * that the connection stays open.
     *
     * @internal
     */ startHeartbeat() {
        if (this.heartbeatIntervalId != null) return;
        this.heartbeatIntervalId = setInterval(()=>(0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
                try {
                    yield withTimeout(this.send("net_version"), HEARTBEAT_WAIT_TIME);
                } catch (_a) {
                    this._websocket.reconnect();
                }
            }), HEARTBEAT_INTERVAL);
    }
    /**
     * This method sends the batch concurrently as individual requests rather than
     * as a batch, which was the original implementation. The original batch logic
     * is preserved in this implementation in order for faster porting.
     *
     * @param payload
     * @internal
     */ // TODO(cleanup): Refactor and remove usages of `sendBatch()`.
    // TODO(errors): Use allSettled() once we have more error handling.
    sendBatchConcurrently(payload) {
        return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
            return Promise.all(payload.map((req)=>this.send(req.method, req.params)));
        });
    }
    /** @internal */ customStartEvent(event) {
        if (event.type === (0, _index231D6B1FJs.h)) {
            const { fromAddress , toAddress , hashesOnly  } = event;
            this._subscribe(event.tag, [
                (0, _index231D6B1FJs.j).PENDING_TRANSACTIONS,
                {
                    fromAddress,
                    toAddress,
                    hashesOnly
                }
            ], this.emitProcessFn(event), event);
        } else if (event.type === (0, _index231D6B1FJs.k)) {
            const { addresses , includeRemoved , hashesOnly: hashesOnly1  } = event;
            this._subscribe(event.tag, [
                (0, _index231D6B1FJs.j).MINED_TRANSACTIONS,
                {
                    addresses,
                    includeRemoved,
                    hashesOnly: hashesOnly1
                }
            ], this.emitProcessFn(event), event);
        } else if (event.type === "block") this._subscribe("block", [
            "newHeads"
        ], this.emitProcessFn(event), event);
        else if (event.type === "filter") this._subscribe(event.tag, [
            "logs",
            this._getFilter(event.filter)
        ], this.emitProcessFn(event), event);
    }
    /** @internal */ emitProcessFn(event) {
        switch(event.type){
            case 0, _index231D6B1FJs.h:
                return (result)=>this.emit({
                        method: (0, _index231D6B1FJs.j).PENDING_TRANSACTIONS,
                        fromAddress: event.fromAddress,
                        toAddress: event.toAddress,
                        hashesOnly: event.hashesOnly
                    }, result);
            case 0, _index231D6B1FJs.k:
                return (result)=>this.emit({
                        method: (0, _index231D6B1FJs.j).MINED_TRANSACTIONS,
                        addresses: event.addresses,
                        includeRemoved: event.includeRemoved,
                        hashesOnly: event.hashesOnly
                    }, result);
            case "block":
                return (result)=>{
                    const blockNumber = (0, _bignumber.BigNumber).from(result.number).toNumber();
                    this._emitted.block = blockNumber;
                    this.emit("block", blockNumber);
                };
            case "filter":
                return (result)=>{
                    if (result.removed == null) result.removed = false;
                    this.emit(event.filter, this.formatter.filterLog(result));
                };
            default:
                throw new Error("Invalid event type to `emitProcessFn()`");
        }
    }
    /**
     * DO NOT MODIFY.
     *
     * Original code copied over from ether.js's `BaseProvider.off()`.
     *
     * This method is copied over directly in order to implement Alchemy's unique
     * subscription types. The only difference is that this method calls
     * {@link getAlchemyEventTag} instead of the original `getEventTag()` method in
     * order to parse the Alchemy subscription event.
     *
     * @private
     */ _off(eventName, listener) {
        if (listener == null) return this.removeAllListeners(eventName);
        const stopped = [];
        let found = false;
        const eventTag = (0, _index231D6B1FJs.e)(eventName);
        this._events = this._events.filter((event)=>{
            if (event.tag !== eventTag || event.listener != listener) return true;
            if (found) return true;
            found = true;
            stopped.push(event);
            return false;
        });
        stopped.forEach((event)=>{
            this._stopEvent(event);
        });
        return this;
    }
    /**
     * DO NOT MODIFY.
     *
     * Original code copied over from ether.js's `BaseProvider.removeAllListeners()`.
     *
     * This method is copied over directly in order to implement Alchemy's unique
     * subscription types. The only difference is that this method calls
     * {@link getAlchemyEventTag} instead of the original `getEventTag()` method in
     * order to parse the Alchemy subscription event.
     *
     * @private
     */ _removeAllListeners(eventName) {
        let stopped = [];
        if (eventName == null) {
            stopped = this._events;
            this._events = [];
        } else {
            const eventTag = (0, _index231D6B1FJs.e)(eventName);
            this._events = this._events.filter((event)=>{
                if (event.tag !== eventTag) return true;
                stopped.push(event);
                return false;
            });
        }
        stopped.forEach((event)=>{
            this._stopEvent(event);
        });
        return this;
    }
    /**
     * DO NOT MODIFY.
     *
     * Original code copied over from ether.js's `BaseProvider.listenerCount()`.
     *
     * This method is copied over directly in order to implement Alchemy's unique
     * subscription types. The only difference is that this method calls
     * {@link getAlchemyEventTag} instead of the original `getEventTag()` method in
     * order to parse the Alchemy subscription event.
     *
     * @private
     */ _listenerCount(eventName) {
        if (!eventName) return this._events.length;
        const eventTag = (0, _index231D6B1FJs.e)(eventName);
        return this._events.filter((event)=>{
            return event.tag === eventTag;
        }).length;
    }
    /**
     * DO NOT MODIFY.
     *
     * Original code copied over from ether.js's `BaseProvider.listeners()`.
     *
     * This method is copied over directly in order to implement Alchemy's unique
     * subscription types. The only difference is that this method calls
     * {@link getAlchemyEventTag} instead of the original `getEventTag()` method in
     * order to parse the Alchemy subscription event.
     *
     * @private
     */ _listeners(eventName) {
        if (eventName == null) return this._events.map((event)=>event.listener);
        const eventTag = (0, _index231D6B1FJs.e)(eventName);
        return this._events.filter((event)=>event.tag === eventTag).map((event)=>event.listener);
    }
}
function getWebsocketConstructor() {
    return isNodeEnvironment() ? require("websocket").w3cwebsocket : WebSocket;
}
function isNodeEnvironment() {
    return typeof process !== "undefined" && process != null && process.versions != null && process.versions.node != null;
}
// TODO(cleanup): Use class variable rather than passing `isCancelled` everywhere.
function makeCancelToken() {
    let cancelled = false;
    return {
        cancel: ()=>cancelled = true,
        isCancelled: ()=>cancelled
    };
}
// TODO(cleanup): replace with SDK's backoff implementation
const MIN_RETRY_DELAY = 1000;
const RETRY_BACKOFF_FACTOR = 2;
const MAX_RETRY_DELAY = 30000;
function withBackoffRetries(f, retryCount, shouldRetry = ()=>true) {
    return (0, _index231D6B1FJs._)(this, void 0, void 0, function*() {
        let nextWaitTime = 0;
        let i = 0;
        while(true)try {
            return yield f();
        } catch (error) {
            i++;
            if (i >= retryCount || !shouldRetry(error)) throw error;
            yield delay(nextWaitTime);
            if (!shouldRetry(error)) throw error;
            nextWaitTime = nextWaitTime === 0 ? MIN_RETRY_DELAY : Math.min(MAX_RETRY_DELAY, RETRY_BACKOFF_FACTOR * nextWaitTime);
        }
    });
}
function delay(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
function withTimeout(promise, ms) {
    return Promise.race([
        promise,
        new Promise((_, reject)=>setTimeout(()=>reject(new Error("Timeout")), ms))
    ]);
}
function getNewHeadsBlockNumber(event) {
    return (0, _index231D6B1FJs.f)(event.number);
}
function getLogsBlockNumber(event) {
    return (0, _index231D6B1FJs.f)(event.blockNumber);
}
function isResponse(message) {
    return Array.isArray(message) || message.jsonrpc === "2.0" && message.id !== undefined;
}
function isSubscriptionEvent(message) {
    return !isResponse(message);
}
function addToNewHeadsEventsBuffer(pastEvents, event) {
    addToPastEventsBuffer(pastEvents, event, getNewHeadsBlockNumber);
}
function addToLogsEventsBuffer(pastEvents, event) {
    addToPastEventsBuffer(pastEvents, event, getLogsBlockNumber);
}
/**
 * Adds a new event to an array of events, evicting any events which are so old
 * that they will no longer feasibly be part of a reorg.
 */ function addToPastEventsBuffer(pastEvents, event, getBlockNumber) {
    const currentBlockNumber = getBlockNumber(event);
    // Find first index of an event recent enough to retain, then drop everything
    // at a lower index.
    const firstGoodIndex = pastEvents.findIndex((e)=>getBlockNumber(e) > currentBlockNumber - RETAINED_EVENT_BLOCK_COUNT);
    if (firstGoodIndex === -1) pastEvents.length = 0;
    else pastEvents.splice(0, firstGoodIndex);
    pastEvents.push(event);
}

},{"./index-231d6b1f.js":"6d7kK","sturdy-websocket":"V1Y2z","@ethersproject/bignumber":"ckYYW","@ethersproject/networks":"6JNhW","@ethersproject/providers":"bErvj","./alchemy-provider-5ed73b95.js":"d0gsj","./api/utils":"byXgH","axios":"6SddO","@ethersproject/abstract-provider":"g1jr1","@ethersproject/wallet":"2DfhD","@ethersproject/contracts":"97okZ","@ethersproject/web":"5yjI3","process":"d5jf4","websocket":"aRycB","@parcel/transformer-js/src/esmodule-helpers.js":"iPVnx"}],"V1Y2z":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var SHOULD_RECONNECT_FALSE_MESSAGE = "Provided shouldReconnect() returned false. Closing permanently.";
var SHOULD_RECONNECT_PROMISE_FALSE_MESSAGE = "Provided shouldReconnect() resolved to false. Closing permanently.";
var SturdyWebSocket = /** @class */ function() {
    function SturdyWebSocket(url, protocolsOrOptions, options) {
        if (options === void 0) options = {};
        this.url = url;
        this.onclose = null;
        this.onerror = null;
        this.onmessage = null;
        this.onopen = null;
        this.ondown = null;
        this.onreopen = null;
        this.CONNECTING = SturdyWebSocket.CONNECTING;
        this.OPEN = SturdyWebSocket.OPEN;
        this.CLOSING = SturdyWebSocket.CLOSING;
        this.CLOSED = SturdyWebSocket.CLOSED;
        this.hasBeenOpened = false;
        this.isClosed = false;
        this.messageBuffer = [];
        this.nextRetryTime = 0;
        this.reconnectCount = 0;
        this.lastKnownExtensions = "";
        this.lastKnownProtocol = "";
        this.listeners = {};
        if (protocolsOrOptions == null || typeof protocolsOrOptions === "string" || Array.isArray(protocolsOrOptions)) this.protocols = protocolsOrOptions;
        else options = protocolsOrOptions;
        this.options = applyDefaultOptions(options);
        if (!this.options.wsConstructor) {
            if (typeof WebSocket !== "undefined") this.options.wsConstructor = WebSocket;
            else throw new Error("WebSocket not present in global scope and no wsConstructor option was provided.");
        }
        this.openNewWebSocket();
    }
    Object.defineProperty(SturdyWebSocket.prototype, "binaryType", {
        get: function() {
            return this.binaryTypeInternal || "blob";
        },
        set: function(binaryType) {
            this.binaryTypeInternal = binaryType;
            if (this.ws) this.ws.binaryType = binaryType;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SturdyWebSocket.prototype, "bufferedAmount", {
        get: function() {
            var sum = this.ws ? this.ws.bufferedAmount : 0;
            var hasUnknownAmount = false;
            this.messageBuffer.forEach(function(data) {
                var byteLength = getDataByteLength(data);
                if (byteLength != null) sum += byteLength;
                else hasUnknownAmount = true;
            });
            if (hasUnknownAmount) this.debugLog("Some buffered data had unknown length. bufferedAmount() return value may be below the correct amount.");
            return sum;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SturdyWebSocket.prototype, "extensions", {
        get: function() {
            return this.ws ? this.ws.extensions : this.lastKnownExtensions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SturdyWebSocket.prototype, "protocol", {
        get: function() {
            return this.ws ? this.ws.protocol : this.lastKnownProtocol;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SturdyWebSocket.prototype, "readyState", {
        get: function() {
            return this.isClosed ? SturdyWebSocket.CLOSED : SturdyWebSocket.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    SturdyWebSocket.prototype.close = function(code, reason) {
        this.disposeSocket(code, reason);
        this.shutdown();
        this.debugLog("WebSocket permanently closed by client.");
    };
    SturdyWebSocket.prototype.send = function(data) {
        if (this.isClosed) throw new Error("WebSocket is already in CLOSING or CLOSED state.");
        else if (this.ws && this.ws.readyState === this.OPEN) this.ws.send(data);
        else this.messageBuffer.push(data);
    };
    SturdyWebSocket.prototype.reconnect = function() {
        if (this.isClosed) throw new Error("Cannot call reconnect() on socket which is permanently closed.");
        this.disposeSocket(1000, "Client requested reconnect.");
        this.handleClose(undefined);
    };
    SturdyWebSocket.prototype.addEventListener = function(type, listener) {
        if (!this.listeners[type]) this.listeners[type] = [];
        this.listeners[type].push(listener);
    };
    SturdyWebSocket.prototype.dispatchEvent = function(event) {
        return this.dispatchEventOfType(event.type, event);
    };
    SturdyWebSocket.prototype.removeEventListener = function(type, listener) {
        if (this.listeners[type]) this.listeners[type] = this.listeners[type].filter(function(l) {
            return l !== listener;
        });
    };
    SturdyWebSocket.prototype.openNewWebSocket = function() {
        var _this = this;
        if (this.isClosed) return;
        var _a = this.options, connectTimeout = _a.connectTimeout, wsConstructor = _a.wsConstructor;
        this.debugLog("Opening new WebSocket to " + this.url + ".");
        var ws = new wsConstructor(this.url, this.protocols);
        ws.onclose = function(event) {
            return _this.handleClose(event);
        };
        ws.onerror = function(event) {
            return _this.handleError(event);
        };
        ws.onmessage = function(event) {
            return _this.handleMessage(event);
        };
        ws.onopen = function(event) {
            return _this.handleOpen(event);
        };
        this.connectTimeoutId = setTimeout(function() {
            // If this is running, we still haven't opened the websocket.
            // Kill it so we can try again.
            _this.clearConnectTimeout();
            _this.disposeSocket();
            _this.handleClose(undefined);
        }, connectTimeout);
        this.ws = ws;
    };
    SturdyWebSocket.prototype.handleOpen = function(event) {
        var _this = this;
        if (!this.ws || this.isClosed) return;
        var allClearResetTime = this.options.allClearResetTime;
        this.debugLog("WebSocket opened.");
        if (this.binaryTypeInternal != null) this.ws.binaryType = this.binaryTypeInternal;
        else this.binaryTypeInternal = this.ws.binaryType;
        this.clearConnectTimeout();
        if (this.hasBeenOpened) this.dispatchEventOfType("reopen", event);
        else {
            this.dispatchEventOfType("open", event);
            this.hasBeenOpened = true;
        }
        this.messageBuffer.forEach(function(message) {
            return _this.send(message);
        });
        this.messageBuffer = [];
        this.allClearTimeoutId = setTimeout(function() {
            _this.clearAllClearTimeout();
            _this.nextRetryTime = 0;
            _this.reconnectCount = 0;
            var openTime = allClearResetTime / 1000 | 0;
            _this.debugLog("WebSocket remained open for " + openTime + " seconds. Resetting" + " retry time and count.");
        }, allClearResetTime);
    };
    SturdyWebSocket.prototype.handleMessage = function(event) {
        if (this.isClosed) return;
        this.dispatchEventOfType("message", event);
    };
    SturdyWebSocket.prototype.handleClose = function(event) {
        var _this = this;
        if (this.isClosed) return;
        var _a = this.options, maxReconnectAttempts = _a.maxReconnectAttempts, shouldReconnect = _a.shouldReconnect;
        this.clearConnectTimeout();
        this.clearAllClearTimeout();
        if (this.ws) {
            this.lastKnownExtensions = this.ws.extensions;
            this.lastKnownProtocol = this.ws.protocol;
            this.disposeSocket();
        }
        this.dispatchEventOfType("down", event);
        if (this.reconnectCount >= maxReconnectAttempts) {
            this.stopReconnecting(event, this.getTooManyFailedReconnectsMessage());
            return;
        }
        var willReconnect = !event || shouldReconnect(event);
        if (typeof willReconnect === "boolean") this.handleWillReconnect(willReconnect, event, SHOULD_RECONNECT_FALSE_MESSAGE);
        else willReconnect.then(function(willReconnectResolved) {
            if (_this.isClosed) return;
            _this.handleWillReconnect(willReconnectResolved, event, SHOULD_RECONNECT_PROMISE_FALSE_MESSAGE);
        });
    };
    SturdyWebSocket.prototype.handleError = function(event) {
        this.dispatchEventOfType("error", event);
        this.debugLog("WebSocket encountered an error.");
    };
    SturdyWebSocket.prototype.handleWillReconnect = function(willReconnect, event, denialReason) {
        if (willReconnect) this.reestablishConnection();
        else this.stopReconnecting(event, denialReason);
    };
    SturdyWebSocket.prototype.reestablishConnection = function() {
        var _this = this;
        var _a = this.options, minReconnectDelay = _a.minReconnectDelay, maxReconnectDelay = _a.maxReconnectDelay, reconnectBackoffFactor = _a.reconnectBackoffFactor;
        this.reconnectCount++;
        var retryTime = this.nextRetryTime;
        this.nextRetryTime = Math.max(minReconnectDelay, Math.min(this.nextRetryTime * reconnectBackoffFactor, maxReconnectDelay));
        setTimeout(function() {
            return _this.openNewWebSocket();
        }, retryTime);
        var retryTimeSeconds = retryTime / 1000 | 0;
        this.debugLog("WebSocket was closed. Re-opening in " + retryTimeSeconds + " seconds.");
    };
    SturdyWebSocket.prototype.stopReconnecting = function(event, debugReason) {
        this.debugLog(debugReason);
        this.shutdown();
        if (event) this.dispatchEventOfType("close", event);
    };
    SturdyWebSocket.prototype.shutdown = function() {
        this.isClosed = true;
        this.clearAllTimeouts();
        this.messageBuffer = [];
        this.disposeSocket();
    };
    SturdyWebSocket.prototype.disposeSocket = function(closeCode, reason) {
        if (!this.ws) return;
        // Use noop handlers instead of null because some WebSocket
        // implementations, such as the one from isomorphic-ws, raise a stink on
        // unhandled events.
        this.ws.onerror = noop;
        this.ws.onclose = noop;
        this.ws.onmessage = noop;
        this.ws.onopen = noop;
        this.ws.close(closeCode, reason);
        this.ws = undefined;
    };
    SturdyWebSocket.prototype.clearAllTimeouts = function() {
        this.clearConnectTimeout();
        this.clearAllClearTimeout();
    };
    SturdyWebSocket.prototype.clearConnectTimeout = function() {
        if (this.connectTimeoutId != null) {
            clearTimeout(this.connectTimeoutId);
            this.connectTimeoutId = undefined;
        }
    };
    SturdyWebSocket.prototype.clearAllClearTimeout = function() {
        if (this.allClearTimeoutId != null) {
            clearTimeout(this.allClearTimeoutId);
            this.allClearTimeoutId = undefined;
        }
    };
    SturdyWebSocket.prototype.dispatchEventOfType = function(type, event) {
        var _this = this;
        switch(type){
            case "close":
                if (this.onclose) this.onclose(event);
                break;
            case "error":
                if (this.onerror) this.onerror(event);
                break;
            case "message":
                if (this.onmessage) this.onmessage(event);
                break;
            case "open":
                if (this.onopen) this.onopen(event);
                break;
            case "down":
                if (this.ondown) this.ondown(event);
                break;
            case "reopen":
                if (this.onreopen) this.onreopen(event);
                break;
        }
        if (type in this.listeners) this.listeners[type].slice().forEach(function(listener) {
            return _this.callListener(listener, event);
        });
        return !event || !event.defaultPrevented;
    };
    SturdyWebSocket.prototype.callListener = function(listener, event) {
        if (typeof listener === "function") listener.call(this, event);
        else listener.handleEvent.call(this, event);
    };
    SturdyWebSocket.prototype.debugLog = function(message) {
        if (this.options.debug) // tslint:disable-next-line:no-console
        console.log(message);
    };
    SturdyWebSocket.prototype.getTooManyFailedReconnectsMessage = function() {
        var maxReconnectAttempts = this.options.maxReconnectAttempts;
        return "Failed to reconnect after " + maxReconnectAttempts + " " + pluralize("attempt", maxReconnectAttempts) + ". Closing permanently.";
    };
    SturdyWebSocket.DEFAULT_OPTIONS = {
        allClearResetTime: 5000,
        connectTimeout: 5000,
        debug: false,
        minReconnectDelay: 1000,
        maxReconnectDelay: 30000,
        maxReconnectAttempts: Number.POSITIVE_INFINITY,
        reconnectBackoffFactor: 1.5,
        shouldReconnect: function() {
            return true;
        },
        wsConstructor: undefined
    };
    SturdyWebSocket.CONNECTING = 0;
    SturdyWebSocket.OPEN = 1;
    SturdyWebSocket.CLOSING = 2;
    SturdyWebSocket.CLOSED = 3;
    return SturdyWebSocket;
}();
exports.default = SturdyWebSocket;
function applyDefaultOptions(options) {
    var result = {};
    Object.keys(SturdyWebSocket.DEFAULT_OPTIONS).forEach(function(key) {
        var value = options[key];
        result[key] = value === undefined ? SturdyWebSocket.DEFAULT_OPTIONS[key] : value;
    });
    return result;
}
function getDataByteLength(data) {
    if (typeof data === "string") // UTF-16 strings use two bytes per character.
    return 2 * data.length;
    else if (data instanceof ArrayBuffer) return data.byteLength;
    else if (data instanceof Blob) return data.size;
    else return undefined;
}
function pluralize(s, n) {
    return n === 1 ? s : s + "s";
}
function noop() {
// Nothing.
}

},{}],"aRycB":[function(require,module,exports) {
var _globalThis;
if (typeof globalThis === "object") _globalThis = globalThis;
else try {
    _globalThis = require("es5-ext/global");
} catch (error) {} finally{
    if (!_globalThis && typeof window !== "undefined") _globalThis = window;
    if (!_globalThis) throw new Error("Could not determine global this");
}
var NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket;
var websocket_version = require("./version");
/**
 * Expose a W3C WebSocket class with just one or two arguments.
 */ function W3CWebSocket(uri, protocols) {
    var native_instance;
    if (protocols) native_instance = new NativeWebSocket(uri, protocols);
    else native_instance = new NativeWebSocket(uri);
    /**
	 * 'native_instance' is an instance of nativeWebSocket (the browser's WebSocket
	 * class). Since it is an Object it will be returned as it is when creating an
	 * instance of W3CWebSocket via 'new W3CWebSocket()'.
	 *
	 * ECMAScript 5: http://bclary.com/2004/11/07/#a-13.2.2
	 */ return native_instance;
}
if (NativeWebSocket) [
    "CONNECTING",
    "OPEN",
    "CLOSING",
    "CLOSED"
].forEach(function(prop) {
    Object.defineProperty(W3CWebSocket, prop, {
        get: function() {
            return NativeWebSocket[prop];
        }
    });
});
/**
 * Module exports.
 */ module.exports = {
    "w3cwebsocket": NativeWebSocket ? W3CWebSocket : null,
    "version": websocket_version
};

},{"es5-ext/global":"i0Mdn","./version":"itgdA"}],"i0Mdn":[function(require,module,exports) {
var naiveFallback = function() {
    if (typeof self === "object" && self) return self;
    if (typeof window === "object" && window) return window;
    throw new Error("Unable to resolve global `this`");
};
module.exports = function() {
    if (this) return this;
    // Unexpected strict mode (may happen if e.g. bundled into ESM module)
    // Fallback to standard globalThis if available
    if (typeof globalThis === "object" && globalThis) return globalThis;
    // Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
    // In all ES5+ engines global object inherits from Object.prototype
    // (if you approached one that doesn't please report)
    try {
        Object.defineProperty(Object.prototype, "__global__", {
            get: function() {
                return this;
            },
            configurable: true
        });
    } catch (error) {
        // Unfortunate case of updates to Object.prototype being restricted
        // via preventExtensions, seal or freeze
        return naiveFallback();
    }
    try {
        // Safari case (window.__global__ works, but __global__ does not)
        if (!__global__) return naiveFallback();
        return __global__;
    } finally{
        delete Object.prototype.__global__;
    }
}();

},{}],"itgdA":[function(require,module,exports) {
module.exports = require("../package.json").version;

},{"../package.json":"fCYcm"}],"fCYcm":[function(require,module,exports) {
module.exports = JSON.parse('{"name":"websocket","description":"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.","keywords":["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],"author":"Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)","contributors":["I\xf1aki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],"version":"1.0.34","repository":{"type":"git","url":"https://github.com/theturtle32/WebSocket-Node.git"},"homepage":"https://github.com/theturtle32/WebSocket-Node","engines":{"node":">=4.0.0"},"dependencies":{"bufferutil":"^4.0.1","debug":"^2.2.0","es5-ext":"^0.10.50","typedarray-to-buffer":"^3.1.5","utf-8-validate":"^5.0.2","yaeti":"^0.0.6"},"devDependencies":{"buffer-equal":"^1.0.0","gulp":"^4.0.2","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1","jshint":"^2.0.0","tape":"^4.9.1"},"config":{"verbose":false},"scripts":{"test":"tape test/unit/*.js","gulp":"gulp"},"main":"index","directories":{"lib":"./lib"},"browser":"lib/browser.js","license":"Apache-2.0"}');

},{}]},["ljEPI"], null, "parcelRequire5dc4")

//# sourceMappingURL=alchemy-websocket-provider-3523bd89.9390f3ca.js.map
