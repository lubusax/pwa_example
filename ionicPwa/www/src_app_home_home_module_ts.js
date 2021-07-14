(self["webpackChunkionicPwa"] = self["webpackChunkionicPwa"] || []).push([["src_app_home_home_module_ts"],{

/***/ 4021:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraSource": () => (/* binding */ CameraSource),
/* harmony export */   "CameraDirection": () => (/* binding */ CameraDirection),
/* harmony export */   "CameraResultType": () => (/* binding */ CameraResultType)
/* harmony export */ });
var CameraSource;
(function (CameraSource) {
    CameraSource["Prompt"] = "PROMPT";
    CameraSource["Camera"] = "CAMERA";
    CameraSource["Photos"] = "PHOTOS";
})(CameraSource || (CameraSource = {}));
var CameraDirection;
(function (CameraDirection) {
    CameraDirection["Rear"] = "REAR";
    CameraDirection["Front"] = "FRONT";
})(CameraDirection || (CameraDirection = {}));
var CameraResultType;
(function (CameraResultType) {
    CameraResultType["Uri"] = "uri";
    CameraResultType["Base64"] = "base64";
    CameraResultType["DataUrl"] = "dataUrl";
})(CameraResultType || (CameraResultType = {}));
//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 7673:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDirection": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraDirection),
/* harmony export */   "CameraResultType": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraResultType),
/* harmony export */   "CameraSource": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.CameraSource),
/* harmony export */   "Camera": () => (/* binding */ Camera)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4021);

const Camera = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Camera', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_camera_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4028)).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8384:
/*!****************************************************!*\
  !*** ./node_modules/@capacitor/core/dist/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Capacitor": () => (/* binding */ Capacitor),
/* harmony export */   "CapacitorException": () => (/* binding */ CapacitorException),
/* harmony export */   "CapacitorPlatforms": () => (/* binding */ CapacitorPlatforms),
/* harmony export */   "ExceptionCode": () => (/* binding */ ExceptionCode),
/* harmony export */   "Plugins": () => (/* binding */ Plugins),
/* harmony export */   "WebPlugin": () => (/* binding */ WebPlugin),
/* harmony export */   "WebView": () => (/* binding */ WebView),
/* harmony export */   "addPlatform": () => (/* binding */ addPlatform),
/* harmony export */   "registerPlugin": () => (/* binding */ registerPlugin),
/* harmony export */   "registerWebPlugin": () => (/* binding */ registerWebPlugin),
/* harmony export */   "setPlatform": () => (/* binding */ setPlatform)
/* harmony export */ });
/*! Capacitor: https://capacitorjs.com/ - MIT License */
const createCapacitorPlatforms = (win) => {
    const defaultPlatformMap = new Map();
    defaultPlatformMap.set('web', { name: 'web' });
    const capPlatforms = win.CapacitorPlatforms || {
        currentPlatform: { name: 'web' },
        platforms: defaultPlatformMap,
    };
    const addPlatform = (name, platform) => {
        capPlatforms.platforms.set(name, platform);
    };
    const setPlatform = (name) => {
        if (capPlatforms.platforms.has(name)) {
            capPlatforms.currentPlatform = capPlatforms.platforms.get(name);
        }
    };
    capPlatforms.addPlatform = addPlatform;
    capPlatforms.setPlatform = setPlatform;
    return capPlatforms;
};
const initPlatforms = (win) => (win.CapacitorPlatforms = createCapacitorPlatforms(win));
const CapacitorPlatforms = /*#__PURE__*/ initPlatforms((typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {}));
const addPlatform = CapacitorPlatforms.addPlatform;
const setPlatform = CapacitorPlatforms.setPlatform;

const legacyRegisterWebPlugin = (cap, webPlugin) => {
    var _a;
    const config = webPlugin.config;
    const Plugins = cap.Plugins;
    if (!config || !config.name) {
        // TODO: add link to upgrade guide
        throw new Error(`Capacitor WebPlugin is using the deprecated "registerWebPlugin()" function, but without the config. Please use "registerPlugin()" instead to register this web plugin."`);
    }
    // TODO: add link to upgrade guide
    console.warn(`Capacitor plugin "${config.name}" is using the deprecated "registerWebPlugin()" function`);
    if (!Plugins[config.name] || ((_a = config === null || config === void 0 ? void 0 : config.platforms) === null || _a === void 0 ? void 0 : _a.includes(cap.getPlatform()))) {
        // Add the web plugin into the plugins registry if there already isn't
        // an existing one. If it doesn't already exist, that means
        // there's no existing native implementation for it.
        // - OR -
        // If we already have a plugin registered (meaning it was defined in the native layer),
        // then we should only overwrite it if the corresponding web plugin activates on
        // a certain platform. For example: Geolocation uses the WebPlugin on Android but not iOS
        Plugins[config.name] = webPlugin;
    }
};

var ExceptionCode;
(function (ExceptionCode) {
    /**
     * API is not implemented.
     *
     * This usually means the API can't be used because it is not implemented for
     * the current platform.
     */
    ExceptionCode["Unimplemented"] = "UNIMPLEMENTED";
    /**
     * API is not available.
     *
     * This means the API can't be used right now because:
     *   - it is currently missing a prerequisite, such as network connectivity
     *   - it requires a particular platform or browser version
     */
    ExceptionCode["Unavailable"] = "UNAVAILABLE";
})(ExceptionCode || (ExceptionCode = {}));
class CapacitorException extends Error {
    constructor(message, code) {
        super(message);
        this.message = message;
        this.code = code;
    }
}
const getPlatformId = (win) => {
    var _a, _b;
    if (win === null || win === void 0 ? void 0 : win.androidBridge) {
        return 'android';
    }
    else if ((_b = (_a = win === null || win === void 0 ? void 0 : win.webkit) === null || _a === void 0 ? void 0 : _a.messageHandlers) === null || _b === void 0 ? void 0 : _b.bridge) {
        return 'ios';
    }
    else {
        return 'web';
    }
};

const createCapacitor = (win) => {
    var _a, _b, _c, _d, _e;
    const cap = win.Capacitor || {};
    const Plugins = (cap.Plugins = cap.Plugins || {});
    const capPlatforms = win.CapacitorPlatforms;
    const defaultGetPlatform = () => getPlatformId(win);
    const getPlatform = ((_a = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _a === void 0 ? void 0 : _a.getPlatform) || defaultGetPlatform;
    const defaultIsNativePlatform = () => getPlatformId(win) !== 'web';
    const isNativePlatform = ((_b = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _b === void 0 ? void 0 : _b.isNativePlatform) || defaultIsNativePlatform;
    const defaultIsPluginAvailable = (pluginName) => {
        const plugin = registeredPlugins.get(pluginName);
        if (plugin === null || plugin === void 0 ? void 0 : plugin.platforms.has(getPlatform())) {
            // JS implementation available for the current platform.
            return true;
        }
        if (getPluginHeader(pluginName)) {
            // Native implementation available.
            return true;
        }
        return false;
    };
    const isPluginAvailable = ((_c = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _c === void 0 ? void 0 : _c.isPluginAvailable) ||
        defaultIsPluginAvailable;
    const defaultGetPluginHeader = (pluginName) => { var _a; return (_a = cap.PluginHeaders) === null || _a === void 0 ? void 0 : _a.find(h => h.name === pluginName); };
    const getPluginHeader = ((_d = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _d === void 0 ? void 0 : _d.getPluginHeader) || defaultGetPluginHeader;
    const handleError = (err) => win.console.error(err);
    const pluginMethodNoop = (_target, prop, pluginName) => {
        return Promise.reject(`${pluginName} does not have an implementation of "${prop}".`);
    };
    const registeredPlugins = new Map();
    const defaultRegisterPlugin = (pluginName, jsImplementations = {}) => {
        const registeredPlugin = registeredPlugins.get(pluginName);
        if (registeredPlugin) {
            console.warn(`Capacitor plugin "${pluginName}" already registered. Cannot register plugins twice.`);
            return registeredPlugin.proxy;
        }
        const platform = getPlatform();
        const pluginHeader = getPluginHeader(pluginName);
        let jsImplementation;
        const loadPluginImplementation = async () => {
            if (!jsImplementation && platform in jsImplementations) {
                jsImplementation =
                    typeof jsImplementations[platform] === 'function'
                        ? (jsImplementation = await jsImplementations[platform]())
                        : (jsImplementation = jsImplementations[platform]);
            }
            return jsImplementation;
        };
        const createPluginMethod = (impl, prop) => {
            var _a, _b;
            if (pluginHeader) {
                const methodHeader = pluginHeader === null || pluginHeader === void 0 ? void 0 : pluginHeader.methods.find(m => prop === m.name);
                if (methodHeader) {
                    if (methodHeader.rtype === 'promise') {
                        return (options) => cap.nativePromise(pluginName, prop.toString(), options);
                    }
                    else {
                        return (options, callback) => cap.nativeCallback(pluginName, prop.toString(), options, callback);
                    }
                }
                else if (impl) {
                    return (_a = impl[prop]) === null || _a === void 0 ? void 0 : _a.bind(impl);
                }
            }
            else if (impl) {
                return (_b = impl[prop]) === null || _b === void 0 ? void 0 : _b.bind(impl);
            }
            else {
                throw new CapacitorException(`"${pluginName}" plugin is not implemented on ${platform}`, ExceptionCode.Unimplemented);
            }
        };
        const createPluginMethodWrapper = (prop) => {
            let remove;
            const wrapper = (...args) => {
                const p = loadPluginImplementation().then(impl => {
                    const fn = createPluginMethod(impl, prop);
                    if (fn) {
                        const p = fn(...args);
                        remove = p === null || p === void 0 ? void 0 : p.remove;
                        return p;
                    }
                    else {
                        throw new CapacitorException(`"${pluginName}.${prop}()" is not implemented on ${platform}`, ExceptionCode.Unimplemented);
                    }
                });
                if (prop === 'addListener') {
                    p.remove = async () => remove();
                }
                return p;
            };
            // Some flair ✨
            wrapper.toString = () => `${prop.toString()}() { [capacitor code] }`;
            Object.defineProperty(wrapper, 'name', {
                value: prop,
                writable: false,
                configurable: false,
            });
            return wrapper;
        };
        const addListener = createPluginMethodWrapper('addListener');
        const removeListener = createPluginMethodWrapper('removeListener');
        const addListenerNative = (eventName, callback) => {
            const call = addListener({ eventName }, callback);
            const remove = async () => {
                const callbackId = await call;
                removeListener({
                    eventName,
                    callbackId,
                }, callback);
            };
            const p = new Promise(resolve => call.then(() => resolve({ remove })));
            p.remove = async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            };
            return p;
        };
        const proxy = new Proxy({}, {
            get(_, prop) {
                switch (prop) {
                    // https://github.com/facebook/react/issues/20030
                    case '$$typeof':
                        return undefined;
                    case 'addListener':
                        return pluginHeader ? addListenerNative : addListener;
                    case 'removeListener':
                        return removeListener;
                    default:
                        return createPluginMethodWrapper(prop);
                }
            },
        });
        Plugins[pluginName] = proxy;
        registeredPlugins.set(pluginName, {
            name: pluginName,
            proxy,
            platforms: new Set([
                ...Object.keys(jsImplementations),
                ...(pluginHeader ? [platform] : []),
            ]),
        });
        return proxy;
    };
    const registerPlugin = ((_e = capPlatforms === null || capPlatforms === void 0 ? void 0 : capPlatforms.currentPlatform) === null || _e === void 0 ? void 0 : _e.registerPlugin) || defaultRegisterPlugin;
    // Add in convertFileSrc for web, it will already be available in native context
    if (!cap.convertFileSrc) {
        cap.convertFileSrc = filePath => filePath;
    }
    cap.getPlatform = getPlatform;
    cap.handleError = handleError;
    cap.isNativePlatform = isNativePlatform;
    cap.isPluginAvailable = isPluginAvailable;
    cap.pluginMethodNoop = pluginMethodNoop;
    cap.registerPlugin = registerPlugin;
    cap.Exception = CapacitorException;
    cap.DEBUG = !!cap.DEBUG;
    cap.isLoggingEnabled = !!cap.isLoggingEnabled;
    // Deprecated props
    cap.platform = cap.getPlatform();
    cap.isNative = cap.isNativePlatform();
    return cap;
};
const initCapacitorGlobal = (win) => (win.Capacitor = createCapacitor(win));

const Capacitor = /*#__PURE__*/ initCapacitorGlobal(typeof globalThis !== 'undefined'
    ? globalThis
    : typeof self !== 'undefined'
        ? self
        : typeof window !== 'undefined'
            ? window
            : typeof global !== 'undefined'
                ? global
                : {});
const registerPlugin = Capacitor.registerPlugin;
/**
 * @deprecated Provided for backwards compatibility for Capacitor v2 plugins.
 * Capacitor v3 plugins should import the plugin directly. This "Plugins"
 * export is deprecated in v3, and will be removed in v4.
 */
const Plugins = Capacitor.Plugins;
/**
 * Provided for backwards compatibility. Use the registerPlugin() API
 * instead, and provide the web plugin as the "web" implmenetation.
 * For example
 *
 * export const Example = registerPlugin('Example', {
 *   web: () => import('./web').then(m => new m.Example())
 * })
 *
 * @deprecated Deprecated in v3, will be removed from v4.
 */
const registerWebPlugin = (plugin) => legacyRegisterWebPlugin(Capacitor, plugin);

/**
 * Base class web plugins should extend.
 */
class WebPlugin {
    constructor(config) {
        this.listeners = {};
        this.windowListeners = {};
        if (config) {
            // TODO: add link to upgrade guide
            console.warn(`Capacitor WebPlugin "${config.name}" config object was deprecated in v3 and will be removed in v4.`);
            this.config = config;
        }
    }
    addListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(listenerFunc);
        // If we haven't added a window listener for this event and it requires one,
        // go ahead and add it
        const windowListener = this.windowListeners[eventName];
        if (windowListener && !windowListener.registered) {
            this.addWindowListener(windowListener);
        }
        const remove = async () => this.removeListener(eventName, listenerFunc);
        const p = Promise.resolve({ remove });
        Object.defineProperty(p, 'remove', {
            value: async () => {
                console.warn(`Using addListener() without 'await' is deprecated.`);
                await remove();
            },
        });
        return p;
    }
    async removeAllListeners() {
        this.listeners = {};
        for (const listener in this.windowListeners) {
            this.removeWindowListener(this.windowListeners[listener]);
        }
        this.windowListeners = {};
    }
    notifyListeners(eventName, data) {
        const listeners = this.listeners[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(data));
        }
    }
    hasListeners(eventName) {
        return !!this.listeners[eventName].length;
    }
    registerWindowListener(windowEventName, pluginEventName) {
        this.windowListeners[pluginEventName] = {
            registered: false,
            windowEventName,
            pluginEventName,
            handler: event => {
                this.notifyListeners(pluginEventName, event);
            },
        };
    }
    unimplemented(msg = 'not implemented') {
        return new Capacitor.Exception(msg, ExceptionCode.Unimplemented);
    }
    unavailable(msg = 'not available') {
        return new Capacitor.Exception(msg, ExceptionCode.Unavailable);
    }
    async removeListener(eventName, listenerFunc) {
        const listeners = this.listeners[eventName];
        if (!listeners) {
            return;
        }
        const index = listeners.indexOf(listenerFunc);
        this.listeners[eventName].splice(index, 1);
        // If there are no more listeners for this type of event,
        // remove the window listener
        if (!this.listeners[eventName].length) {
            this.removeWindowListener(this.windowListeners[eventName]);
        }
    }
    addWindowListener(handle) {
        window.addEventListener(handle.windowEventName, handle.handler);
        handle.registered = true;
    }
    removeWindowListener(handle) {
        if (!handle) {
            return;
        }
        window.removeEventListener(handle.windowEventName, handle.handler);
        handle.registered = false;
    }
}

const WebView = /*#__PURE__*/ registerPlugin('WebView');


//# sourceMappingURL=index.js.map


/***/ }),

/***/ 4068:
/*!****************************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/definitions.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 2810:
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/device/dist/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Device": () => (/* binding */ Device)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 4068);

const Device = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Device', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_device_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 7811)).then(m => new m.DeviceWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 1114:
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 1091:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Geolocation": () => (/* binding */ Geolocation)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 1114);

const Geolocation = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Geolocation', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_geolocation_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 3384)).then(m => new m.GeolocationWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 3509:
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/definitions.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ 6380:
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Share": () => (/* binding */ Share)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 8384);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 3509);

const Share = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Share', {
    web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor_share_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 4648)).then(m => new m.ShareWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 6977:
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/bootstrap.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkReady": () => (/* binding */ checkReady)
/* harmony export */ });
function checkReady() {
    if (typeof process === 'undefined') {
        var win_1 = typeof window !== 'undefined' ? window : {};
        var DEVICE_READY_TIMEOUT_1 = 5000;
        // To help developers using cordova, we listen for the device ready event and
        // log an error if it didn't fire in a reasonable amount of time. Generally,
        // when this happens, developers should remove and reinstall plugins, since
        // an inconsistent plugin is often the culprit.
        var before_1 = Date.now();
        var didFireReady_1 = false;
        win_1.document.addEventListener('deviceready', function () {
            console.log("Ionic Native: deviceready event fired after " + (Date.now() - before_1) + " ms");
            didFireReady_1 = true;
        });
        setTimeout(function () {
            if (!didFireReady_1 && win_1.cordova) {
                console.warn("Ionic Native: deviceready did not fire within " + DEVICE_READY_TIMEOUT_1 + "ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.");
            }
        }, DEVICE_READY_TIMEOUT_1);
    }
}
//# sourceMappingURL=bootstrap.js.map

/***/ }),

/***/ 9870:
/*!***************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/common.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ERR_CORDOVA_NOT_AVAILABLE": () => (/* binding */ ERR_CORDOVA_NOT_AVAILABLE),
/* harmony export */   "ERR_PLUGIN_NOT_INSTALLED": () => (/* binding */ ERR_PLUGIN_NOT_INSTALLED),
/* harmony export */   "getPromise": () => (/* binding */ getPromise),
/* harmony export */   "wrapPromise": () => (/* binding */ wrapPromise),
/* harmony export */   "checkAvailability": () => (/* binding */ checkAvailability),
/* harmony export */   "instanceAvailability": () => (/* binding */ instanceAvailability),
/* harmony export */   "setIndex": () => (/* binding */ setIndex),
/* harmony export */   "callCordovaPlugin": () => (/* binding */ callCordovaPlugin),
/* harmony export */   "callInstance": () => (/* binding */ callInstance),
/* harmony export */   "getPlugin": () => (/* binding */ getPlugin),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "pluginWarn": () => (/* binding */ pluginWarn),
/* harmony export */   "cordovaWarn": () => (/* binding */ cordovaWarn),
/* harmony export */   "wrap": () => (/* binding */ wrap),
/* harmony export */   "wrapInstance": () => (/* binding */ wrapInstance)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2759);

var ERR_CORDOVA_NOT_AVAILABLE = { error: 'cordova_not_available' };
var ERR_PLUGIN_NOT_INSTALLED = { error: 'plugin_not_installed' };
function getPromise(callback) {
    var tryNativePromise = function () {
        if (Promise) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    if (typeof window !== 'undefined' && window.angular) {
        var doc = window.document;
        var injector = window.angular.element(doc.querySelector('[ng-app]') || doc.body).injector();
        if (injector) {
            var $q = injector.get('$q');
            return $q(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.");
    }
    return tryNativePromise();
}
function wrapPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    var pluginResult, rej;
    var p = getPromise(function (resolve, reject) {
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return resolve(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return reject(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject);
        }
        rej = reject;
    });
    // Angular throws an error on unhandled rejection, but in this case we have already printed
    // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
    // to error
    if (pluginResult && pluginResult.error) {
        p.catch(function () { });
        typeof rej === 'function' && rej(pluginResult.error);
    }
    return p;
}
function wrapOtherPromise(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return getPromise(function (resolve, reject) {
        var pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts);
        if (pluginResult) {
            if (pluginResult.error) {
                reject(pluginResult.error);
            }
            else if (pluginResult.then) {
                pluginResult.then(resolve).catch(reject);
            }
        }
        else {
            reject({ error: 'unexpected_error' });
        }
    });
}
function wrapObservable(pluginObj, methodName, args, opts) {
    if (opts === void 0) { opts = {}; }
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
        var pluginResult;
        if (opts.destruct) {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.next(args);
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return observer.error(args);
            });
        }
        else {
            pluginResult = callCordovaPlugin(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
        }
        if (pluginResult && pluginResult.error) {
            observer.error(pluginResult.error);
            observer.complete();
        }
        return function () {
            try {
                if (opts.clearFunction) {
                    if (opts.clearWithArgs) {
                        return callCordovaPlugin(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                    }
                    return callCordovaPlugin(pluginObj, opts.clearFunction, []);
                }
            }
            catch (e) {
                console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                console.warn(e);
            }
        };
    });
}
/**
 * Wrap the event with an observable
 * @private
 * @param event event name
 * @param element The element to attach the event listener to
 * @returns {Observable}
 */
function wrapEventObservable(event, element) {
    element =
        typeof window !== 'undefined' && element
            ? get(window, element)
            : element || (typeof window !== 'undefined' ? window : {});
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.fromEvent)(element, event);
}
function checkAvailability(plugin, methodName, pluginName) {
    var pluginRef, pluginInstance, pluginPackage;
    if (typeof plugin === 'string') {
        pluginRef = plugin;
    }
    else {
        pluginRef = plugin.constructor.getPluginRef();
        pluginName = plugin.constructor.getPluginName();
        pluginPackage = plugin.constructor.getPluginInstallName();
    }
    pluginInstance = getPlugin(pluginRef);
    if (!pluginInstance || (!!methodName && typeof pluginInstance[methodName] === 'undefined')) {
        if (typeof window === 'undefined' || !window.cordova) {
            cordovaWarn(pluginName, methodName);
            return ERR_CORDOVA_NOT_AVAILABLE;
        }
        pluginWarn(pluginName, pluginPackage, methodName);
        return ERR_PLUGIN_NOT_INSTALLED;
    }
    return true;
}
/**
 * Checks if _objectInstance exists and has the method/property
 * @private
 */
function instanceAvailability(pluginObj, methodName) {
    return pluginObj._objectInstance && (!methodName || typeof pluginObj._objectInstance[methodName] !== 'undefined');
}
function setIndex(args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // ignore resolve and reject in case sync
    if (opts.sync) {
        return args;
    }
    // If the plugin method expects myMethod(success, err, options)
    if (opts.callbackOrder === 'reverse') {
        // Get those arguments in the order [resolve, reject, ...restOfArgs]
        args.unshift(reject);
        args.unshift(resolve);
    }
    else if (opts.callbackStyle === 'node') {
        args.push(function (err, result) {
            if (err) {
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    }
    else if (opts.callbackStyle === 'object' && opts.successName && opts.errorName) {
        var obj = {};
        obj[opts.successName] = resolve;
        obj[opts.errorName] = reject;
        args.push(obj);
    }
    else if (typeof opts.successIndex !== 'undefined' || typeof opts.errorIndex !== 'undefined') {
        var setSuccessIndex = function () {
            // If we've specified a success/error index
            if (opts.successIndex > args.length) {
                args[opts.successIndex] = resolve;
            }
            else {
                args.splice(opts.successIndex, 0, resolve);
            }
        };
        var setErrorIndex = function () {
            // We don't want that the reject cb gets spliced into the position of an optional argument that has not been
            // defined and thus causing non expected behavior.
            if (opts.errorIndex > args.length) {
                args[opts.errorIndex] = reject; // insert the reject fn at the correct specific index
            }
            else {
                args.splice(opts.errorIndex, 0, reject); // otherwise just splice it into the array
            }
        };
        if (opts.successIndex > opts.errorIndex) {
            setErrorIndex();
            setSuccessIndex();
        }
        else {
            setSuccessIndex();
            setErrorIndex();
        }
    }
    else {
        // Otherwise, let's tack them on to the end of the argument list
        // which is 90% of cases
        args.push(resolve);
        args.push(reject);
    }
    return args;
}
function callCordovaPlugin(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    // Try to figure out where the success/error callbacks need to be bound
    // to our promise resolve/reject handlers.
    args = setIndex(args, opts, resolve, reject);
    var availabilityCheck = checkAvailability(pluginObj, methodName);
    if (availabilityCheck === true) {
        var pluginInstance = getPlugin(pluginObj.constructor.getPluginRef());
        return pluginInstance[methodName].apply(pluginInstance, args);
    }
    else {
        return availabilityCheck;
    }
}
function callInstance(pluginObj, methodName, args, opts, resolve, reject) {
    if (opts === void 0) { opts = {}; }
    args = setIndex(args, opts, resolve, reject);
    if (instanceAvailability(pluginObj, methodName)) {
        return pluginObj._objectInstance[methodName].apply(pluginObj._objectInstance, args);
    }
}
function getPlugin(pluginRef) {
    if (typeof window !== 'undefined') {
        return get(window, pluginRef);
    }
    return null;
}
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
function pluginWarn(pluginName, plugin, method) {
    if (method) {
        console.warn('Native: tried calling ' + pluginName + '.' + method + ', but the ' + pluginName + ' plugin is not installed.');
    }
    else {
        console.warn("Native: tried accessing the " + pluginName + " plugin but it's not installed.");
    }
    if (plugin) {
        console.warn("Install the " + pluginName + " plugin: 'ionic cordova plugin add " + plugin + "'");
    }
}
/**
 * @private
 * @param pluginName
 * @param method
 */
function cordovaWarn(pluginName, method) {
    if (typeof process === 'undefined') {
        if (method) {
            console.warn('Native: tried calling ' +
                pluginName +
                '.' +
                method +
                ', but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
        else {
            console.warn('Native: tried accessing the ' +
                pluginName +
                ' plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator');
        }
    }
}
/**
 * @private
 */
var wrap = function (pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            // Sync doesn't wrap the plugin with a promise or observable, it returns the result as-is
            return callCordovaPlugin(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return wrapObservable(pluginObj, methodName, args, opts);
        }
        else if (opts.eventObservable && opts.event) {
            return wrapEventObservable(opts.event, opts.element);
        }
        else if (opts.otherPromise) {
            return wrapOtherPromise(pluginObj, methodName, args, opts);
        }
        else {
            return wrapPromise(pluginObj, methodName, args, opts);
        }
    };
};
/**
 * @private
 */
function wrapInstance(pluginObj, methodName, opts) {
    if (opts === void 0) { opts = {}; }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (opts.sync) {
            return callInstance(pluginObj, methodName, args, opts);
        }
        else if (opts.observable) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
                var pluginResult;
                if (opts.destruct) {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.next(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return observer.error(args);
                    });
                }
                else {
                    pluginResult = callInstance(pluginObj, methodName, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                }
                if (pluginResult && pluginResult.error) {
                    observer.error(pluginResult.error);
                }
                return function () {
                    try {
                        if (opts.clearWithArgs) {
                            return callInstance(pluginObj, opts.clearFunction, args, opts, observer.next.bind(observer), observer.error.bind(observer));
                        }
                        return callInstance(pluginObj, opts.clearFunction, []);
                    }
                    catch (e) {
                        console.warn('Unable to clear the previous observable watch for', pluginObj.constructor.getPluginName(), methodName);
                        console.warn(e);
                    }
                };
            });
        }
        else if (opts.otherPromise) {
            return getPromise(function (resolve, reject) {
                var result;
                if (opts.destruct) {
                    result = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    result = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                if (result && result.then) {
                    result.then(resolve, reject);
                }
                else {
                    reject();
                }
            });
        }
        else {
            var pluginResult_1, rej_1;
            var p = getPromise(function (resolve, reject) {
                if (opts.destruct) {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return resolve(args);
                    }, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return reject(args);
                    });
                }
                else {
                    pluginResult_1 = callInstance(pluginObj, methodName, args, opts, resolve, reject);
                }
                rej_1 = reject;
            });
            // Angular throws an error on unhandled rejection, but in this case we have already printed
            // a warning that Cordova is undefined or the plugin is uninstalled, so there is no reason
            // to error
            if (pluginResult_1 && pluginResult_1.error) {
                p.catch(function () { });
                typeof rej_1 === 'function' && rej_1(pluginResult_1.error);
            }
            return p;
        }
    };
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ 9849:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-function-override.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaFunctionOverride": () => (/* binding */ cordovaFunctionOverride)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9165);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9870);


function overrideFunction(pluginObj, methodName) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (observer) {
        var availabilityCheck = (0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, methodName);
        if (availabilityCheck === true) {
            var pluginInstance_1 = (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef());
            pluginInstance_1[methodName] = observer.next.bind(observer);
            return function () { return (pluginInstance_1[methodName] = function () { }); };
        }
        else {
            observer.error(availabilityCheck);
            observer.complete();
        }
    });
}
function cordovaFunctionOverride(pluginObj, methodName, args) {
    if (args === void 0) { args = []; }
    return overrideFunction(pluginObj, methodName);
}
//# sourceMappingURL=cordova-function-override.js.map

/***/ }),

/***/ 1784:
/*!*************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-instance.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaInstance": () => (/* binding */ cordovaInstance)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9870);

function cordovaInstance(pluginObj, methodName, config, args) {
    args = Array.from(args);
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrapInstance)(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova-instance.js.map

/***/ }),

/***/ 9418:
/*!*************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova-property.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordovaPropertyGet": () => (/* binding */ cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* binding */ cordovaPropertySet)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9870);

function cordovaPropertyGet(pluginObj, key) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        return (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key];
    }
    return null;
}
function cordovaPropertySet(pluginObj, key, value) {
    if ((0,_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(pluginObj, key) === true) {
        (0,_common__WEBPACK_IMPORTED_MODULE_0__.getPlugin)(pluginObj.constructor.getPluginRef())[key] = value;
    }
}
//# sourceMappingURL=cordova-property.js.map

/***/ }),

/***/ 4234:
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/cordova.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cordova": () => (/* binding */ cordova)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ 9870);

function cordova(pluginObj, methodName, config, args) {
    return (0,_common__WEBPACK_IMPORTED_MODULE_0__.wrap)(pluginObj, methodName, config).apply(this, args);
}
//# sourceMappingURL=cordova.js.map

/***/ }),

/***/ 5938:
/*!**************************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/instance-property.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "instancePropertyGet": () => (/* binding */ instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* binding */ instancePropertySet)
/* harmony export */ });
function instancePropertyGet(pluginObj, key) {
    if (pluginObj._objectInstance && pluginObj._objectInstance[key]) {
        return pluginObj._objectInstance[key];
    }
    return null;
}
function instancePropertySet(pluginObj, key, value) {
    if (pluginObj._objectInstance) {
        pluginObj._objectInstance[key] = value;
    }
}
//# sourceMappingURL=instance-property.js.map

/***/ }),

/***/ 6264:
/*!*******************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/decorators/interfaces.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 399:
/*!***************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicNativePlugin": () => (/* reexport safe */ _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__.IonicNativePlugin),
/* harmony export */   "checkAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.checkAvailability),
/* harmony export */   "instanceAvailability": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.instanceAvailability),
/* harmony export */   "wrap": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.wrap),
/* harmony export */   "getPromise": () => (/* reexport safe */ _decorators_common__WEBPACK_IMPORTED_MODULE_2__.getPromise),
/* harmony export */   "cordova": () => (/* reexport safe */ _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__.cordova),
/* harmony export */   "cordovaFunctionOverride": () => (/* reexport safe */ _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__.cordovaFunctionOverride),
/* harmony export */   "cordovaInstance": () => (/* reexport safe */ _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__.cordovaInstance),
/* harmony export */   "cordovaPropertyGet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertyGet),
/* harmony export */   "cordovaPropertySet": () => (/* reexport safe */ _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__.cordovaPropertySet),
/* harmony export */   "instancePropertyGet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertyGet),
/* harmony export */   "instancePropertySet": () => (/* reexport safe */ _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__.instancePropertySet)
/* harmony export */ });
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ 6977);
/* harmony import */ var _ionic_native_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-native-plugin */ 2948);
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/common */ 9870);
/* harmony import */ var _decorators_cordova__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/cordova */ 4234);
/* harmony import */ var _decorators_cordova_function_override__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./decorators/cordova-function-override */ 9849);
/* harmony import */ var _decorators_cordova_instance__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./decorators/cordova-instance */ 1784);
/* harmony import */ var _decorators_cordova_property__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./decorators/cordova-property */ 9418);
/* harmony import */ var _decorators_instance_property__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorators/instance-property */ 5938);
/* harmony import */ var _decorators_interfaces__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./decorators/interfaces */ 6264);


// Decorators







(0,_bootstrap__WEBPACK_IMPORTED_MODULE_0__.checkReady)();

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2948:
/*!*****************************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/ionic-native-plugin.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IonicNativePlugin": () => (/* binding */ IonicNativePlugin)
/* harmony export */ });
/* harmony import */ var _decorators_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/common */ 9870);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ 9746);


var IonicNativePlugin = /** @class */ (function () {
    function IonicNativePlugin() {
    }
    /**
     * Returns a boolean that indicates whether the plugin is installed
     * @return {boolean}
     */
    IonicNativePlugin.installed = function () {
        var isAvailable = (0,_decorators_common__WEBPACK_IMPORTED_MODULE_0__.checkAvailability)(this.pluginRef) === true;
        return isAvailable;
    };
    /**
     * Returns the original plugin object
     */
    IonicNativePlugin.getPlugin = function () {
        if (typeof window !== 'undefined') {
            return (0,_util__WEBPACK_IMPORTED_MODULE_1__.get)(window, this.pluginRef);
        }
        return null;
    };
    /**
     * Returns the plugin's name
     */
    IonicNativePlugin.getPluginName = function () {
        var pluginName = this.pluginName;
        return pluginName;
    };
    /**
     * Returns the plugin's reference
     */
    IonicNativePlugin.getPluginRef = function () {
        var pluginRef = this.pluginRef;
        return pluginRef;
    };
    /**
     * Returns the plugin's install name
     */
    IonicNativePlugin.getPluginInstallName = function () {
        var plugin = this.plugin;
        return plugin;
    };
    /**
     * Returns the plugin's supported platforms
     */
    IonicNativePlugin.getSupportedPlatforms = function () {
        var platform = this.platforms;
        return platform;
    };
    IonicNativePlugin.pluginName = '';
    IonicNativePlugin.pluginRef = '';
    IonicNativePlugin.plugin = '';
    IonicNativePlugin.repo = '';
    IonicNativePlugin.platforms = [];
    IonicNativePlugin.install = '';
    return IonicNativePlugin;
}());

//# sourceMappingURL=ionic-native-plugin.js.map

/***/ }),

/***/ 9746:
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/core/__ivy_ngcc__/util.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getPromise": () => (/* binding */ getPromise)
/* harmony export */ });
/**
 * @private
 */
function get(element, path) {
    var paths = path.split('.');
    var obj = element;
    for (var i = 0; i < paths.length; i++) {
        if (!obj) {
            return null;
        }
        obj = obj[paths[i]];
    }
    return obj;
}
/**
 * @private
 */
function getPromise(callback) {
    if (callback === void 0) { callback = function () { }; }
    var tryNativePromise = function () {
        if (typeof Promise === 'function' || (typeof window !== 'undefined' && window.Promise)) {
            return new Promise(function (resolve, reject) {
                callback(resolve, reject);
            });
        }
        else {
            console.error('No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.');
        }
    };
    return tryNativePromise();
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 3157:
/*!******************************************************************!*\
  !*** ./node_modules/@ionic-native/nfc/__ivy_ngcc__/ngx/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NFC": () => (/* binding */ NFC),
/* harmony export */   "Ndef": () => (/* binding */ Ndef),
/* harmony export */   "NfcUtil": () => (/* binding */ NfcUtil),
/* harmony export */   "TextHelper": () => (/* binding */ TextHelper),
/* harmony export */   "UriHelper": () => (/* binding */ UriHelper)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 399);





var NFC = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(NFC, _super);
    function NFC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NFC.prototype.readerMode = function (flags) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "readerMode", { "observable": true, "clearFunction": "disableReaderMode", "clearWithArgs": false }, arguments); };
    NFC.prototype.scanNdef = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "scanNdef", { "sync": true }, arguments); };
    NFC.prototype.scanTag = function (options) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "scanTag", { "sync": true }, arguments); };
    NFC.prototype.cancelScan = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "cancelScan", { "sync": true }, arguments); };
    NFC.prototype.connect = function (tech, timeout) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "connect", { "sync": true }, arguments); };
    NFC.prototype.close = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "close", { "sync": true }, arguments); };
    NFC.prototype.transceive = function (data) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "transceive", { "sync": true }, arguments); };
    NFC.prototype.beginSession = function (onSuccess, onFailure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "beginSession", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "invalidateSession", "clearWithArgs": true }, arguments); };
    NFC.prototype.addNdefListener = function (onSuccess, onFailure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "addNdefListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeNdefListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "addTagDiscoveredListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeTagDiscoveredListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "addMimeTypeListener", { "observable": true, "successIndex": 1, "errorIndex": 4, "clearFunction": "removeMimeTypeListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addNdefFormatableListener = function (onSuccess, onFailure) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "addNdefFormatableListener", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    NFC.prototype.write = function (message) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "write", {}, arguments); };
    NFC.prototype.makeReadOnly = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "makeReadOnly", {}, arguments); };
    NFC.prototype.share = function (message) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "share", {}, arguments); };
    NFC.prototype.unshare = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "unshare", {}, arguments); };
    NFC.prototype.erase = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "erase", {}, arguments); };
    NFC.prototype.handover = function (uris) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "handover", {}, arguments); };
    NFC.prototype.stopHandover = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stopHandover", {}, arguments); };
    NFC.prototype.showSettings = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "showSettings", {}, arguments); };
    NFC.prototype.enabled = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "enabled", {}, arguments); };
    NFC.prototype.bytesToString = function (bytes) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "bytesToString", { "sync": true }, arguments); };
    NFC.prototype.stringToBytes = function (str) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stringToBytes", { "sync": true }, arguments); };
    NFC.prototype.bytesToHexString = function (bytes) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "bytesToHexString", { "sync": true }, arguments); };
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_A", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_NFC_A"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_NFC_A", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_B", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_NFC_B"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_NFC_B", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_F", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_NFC_F"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_NFC_F", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_V", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_NFC_V"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_NFC_V", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_BARCODE", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_NFC_BARCODE"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_NFC_BARCODE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_SKIP_NDEF_CHECK", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_SKIP_NDEF_CHECK"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_SKIP_NDEF_CHECK", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NO_PLATFORM_SOUNDS", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "FLAG_READER_NO_PLATFORM_SOUNDS"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "FLAG_READER_NO_PLATFORM_SOUNDS", value); },
        enumerable: false,
        configurable: true
    });
    NFC.pluginName = "NFC";
    NFC.plugin = "phonegap-nfc";
    NFC.pluginRef = "nfc";
    NFC.repo = "https://github.com/chariotsolutions/phonegap-nfc";
    NFC.platforms = ["Android", "iOS", "Windows"];
NFC.ɵfac = /*@__PURE__*/ function () { var ɵNFC_BaseFactory; return function NFC_Factory(t) { return (ɵNFC_BaseFactory || (ɵNFC_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NFC)))(t || NFC); }; }();
NFC.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NFC, factory: function (t) { return NFC.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NFC, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return NFC;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));

var Ndef = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(Ndef, _super);
    function Ndef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ndef.prototype.record = function (tnf, type, id, payload) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "record", { "sync": true }, arguments); };
    Ndef.prototype.textRecord = function (text, languageCode, id) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "textRecord", { "sync": true }, arguments); };
    Ndef.prototype.uriRecord = function (uri, id) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "uriRecord", { "sync": true }, arguments); };
    Ndef.prototype.absoluteUriRecord = function (uri, payload, id) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "absoluteUriRecord", { "sync": true }, arguments); };
    Ndef.prototype.mimeMediaRecord = function (mimeType, payload) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "mimeMediaRecord", { "sync": true }, arguments); };
    Ndef.prototype.smartPoster = function (ndefRecords, id) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "smartPoster", { "sync": true }, arguments); };
    Ndef.prototype.emptyRecord = function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "emptyRecord", { "sync": true }, arguments); };
    Ndef.prototype.androidApplicationRecord = function (packageName) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "androidApplicationRecord", { "sync": true }, arguments); };
    Ndef.prototype.encodeMessage = function (ndefRecords) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "encodeMessage", { "sync": true }, arguments); };
    Ndef.prototype.decodeMessage = function (bytes) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "decodeMessage", { "sync": true }, arguments); };
    Ndef.prototype.decodeTnf = function (tnf_byte) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "decodeTnf", { "sync": true }, arguments); };
    Ndef.prototype.encodeTnf = function (mb, me, cf, sr, il, tnf) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "encodeTnf", { "sync": true }, arguments); };
    Ndef.prototype.tnfToString = function (tnf) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "tnfToString", { "sync": true }, arguments); };
    Object.defineProperty(Ndef.prototype, "TNF_EMPTY", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_EMPTY"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_EMPTY", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_WELL_KNOWN", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_WELL_KNOWN"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_WELL_KNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_MIME_MEDIA", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_MIME_MEDIA"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_MIME_MEDIA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_ABSOLUTE_URI", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_ABSOLUTE_URI"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_ABSOLUTE_URI", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_EXTERNAL_TYPE", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_EXTERNAL_TYPE"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_EXTERNAL_TYPE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_UNKNOWN", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_UNKNOWN"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_UNCHANGED", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_UNCHANGED"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_UNCHANGED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_RESERVED", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "TNF_RESERVED"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "TNF_RESERVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "textHelper", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "textHelper"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "textHelper", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "uriHelper", {
        get: function () { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertyGet)(this, "uriHelper"); },
        set: function (value) { (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordovaPropertySet)(this, "uriHelper", value); },
        enumerable: false,
        configurable: true
    });
    Ndef.pluginName = "NFC";
    Ndef.plugin = "phonegap-nfc";
    Ndef.pluginRef = "ndef";
Ndef.ɵfac = /*@__PURE__*/ function () { var ɵNdef_BaseFactory; return function Ndef_Factory(t) { return (ɵNdef_BaseFactory || (ɵNdef_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](Ndef)))(t || Ndef); }; }();
Ndef.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: Ndef, factory: function (t) { return Ndef.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](Ndef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return Ndef;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));

var NfcUtil = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(NfcUtil, _super);
    function NfcUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NfcUtil.prototype.toHex = function (i) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "toHex", { "sync": true }, arguments); };
    NfcUtil.prototype.toPrintable = function (i) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "toPrintable", { "sync": true }, arguments); };
    NfcUtil.prototype.bytesToString = function (i) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "bytesToString", { "sync": true }, arguments); };
    NfcUtil.prototype.stringToBytes = function (s) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "stringToBytes", { "sync": true }, arguments); };
    NfcUtil.prototype.bytesToHexString = function (bytes) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "bytesToHexString", { "sync": true }, arguments); };
    NfcUtil.prototype.isType = function (record, tnf, type) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "isType", { "sync": true }, arguments); };
    NfcUtil.prototype.arrayBufferToHexString = function (buffer) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "arrayBufferToHexString", { "sync": true }, arguments); };
    NfcUtil.prototype.hexStringToArrayBuffer = function (hexString) { return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "hexStringToArrayBuffer", { "sync": true }, arguments); };
    NfcUtil.pluginName = "NFC";
    NfcUtil.plugin = "phonegap-nfc";
    NfcUtil.pluginRef = "util";
NfcUtil.ɵfac = /*@__PURE__*/ function () { var ɵNfcUtil_BaseFactory; return function NfcUtil_Factory(t) { return (ɵNfcUtil_BaseFactory || (ɵNfcUtil_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](NfcUtil)))(t || NfcUtil); }; }();
NfcUtil.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: NfcUtil, factory: function (t) { return NfcUtil.ɵfac(t); } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](NfcUtil, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null); })();
    return NfcUtil;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));

var TextHelper = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(TextHelper, _super);
    function TextHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextHelper.prototype.decodePayload = function (data) {
        return;
    };
    TextHelper.prototype.encodePayload = function (text, lang) {
        return;
    };
    return TextHelper;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));

var UriHelper = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(UriHelper, _super);
    function UriHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UriHelper.prototype.decodePayload = function (data) {
        return;
    };
    UriHelper.prototype.encodePayload = function (uri) {
        return;
    };
    return UriHelper;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvbmZjL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUF1RCxNQUFNLG9CQUFvQixDQUFDO0FBQ3pGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBQ2xDO0FBRW1CLElBZ0dNLHVCQUFpQjtBQUFDO0FBQ3hCO0FBQytDO0FBQU0sSUE0QnRFLHdCQUFVLGFBQUMsS0FBYTtBQU1uQixJQUdMLHNCQUFRLGFBQUMsT0FBcUI7QUFLTixJQU14QixxQkFBTyxhQUFDLE9BQXFCO0FBS04sSUFJdkIsd0JBQVU7QUFLK0IsSUFPekMscUJBQU8sYUFBQyxJQUFZLEVBQUUsT0FBZ0I7QUFLWixJQUkxQixtQkFBSztBQUsrQixJQVFwQyx3QkFBVSxhQUFDLElBQTBCO0FBS2hCLElBY3JCLDBCQUFZLGFBQUMsU0FBb0IsRUFBRSxTQUFvQjtBQVV6RCxJQU9FLDZCQUFlLGFBQUMsU0FBb0IsRUFBRSxTQUFvQjtBQVF0QyxJQVNwQixzQ0FBd0IsYUFBQyxTQUFvQixFQUFFLFNBQW9CO0FBUzFELElBU1QsaUNBQW1CLGFBQUMsUUFBZ0IsRUFBRSxTQUFvQixFQUFFLFNBQW9CO0FBVTlFLElBS0YsdUNBQXlCLGFBQUMsU0FBb0IsRUFBRSxTQUFvQjtBQU1qRCxJQUluQixtQkFBSyxhQUFDLE9BQWM7QUFJVCxJQUlYLDBCQUFZO0FBS2lCLElBSzdCLG1CQUFLLGFBQUMsT0FBYztBQUtWLElBSVYscUJBQU87QUFNTCxJQUVGLG1CQUFLO0FBS2lCLElBS3RCLHNCQUFRLGFBQUMsSUFBYztBQUtWLElBSWIsMEJBQVk7QUFLaUIsSUFJN0IsMEJBQVk7QUFLaUIsSUFJN0IscUJBQU87QUFJa0IsSUFTekIsMkJBQWEsYUFBQyxLQUFlO0FBS3pCLElBSUosMkJBQWEsYUFBQyxHQUFXO0FBSzFCLElBS0MsOEJBQWdCLGFBQUMsS0FBZTtBQVFmLDBCQXpTakIsa0NBQWlCO0FBQUk7QUFJaEI7QUFHVTtBQUNNO0FBQ1I7QUFDYiwwQkFSQSxrQ0FBaUI7QUFBSTtBQUloQjtBQUdJO0FBQ007QUFDWjtBQUFRLDBCQVBYLGtDQUFpQjtBQUFJO0FBSWhCO0FBR047QUFDTTtBQUEyQjtBQUNsQywwQkFQRSxrQ0FBaUI7QUFBSTtBQUl0QjtBQUU2QjtBQUd0QjtBQUEyQjtBQUFRLDBCQVB6Qyx3Q0FBdUI7QUFBSTtBQUkxQjtBQUc4QztBQUN0QztBQUEyQjtBQUFRLDBCQU41Qyw0Q0FBMkI7QUFBSTtBQUtmO0FBQ2tDO0FBRWxEO0FBQ1M7QUFBUSwwQkFQakIsK0NBQThCO0FBQUk7QUFJakI7QUFHTztBQUd4QjtBQUNLO0FBQVE7QUFDWjtBQUVFO0FBQTJCO0FBS047dUNBcEN6QixVQUFVOzs7OzBCQUNMO0FBQUMsY0FyR1A7QUFBRSxFQXFHdUIsaUJBQWlCO0FBQ3pDLFNBRFksR0FBRztBQUFJO0FBQ0MsSUF3VEssd0JBQWlCO0FBQUM7QUFDeEI7QUFJaEI7QUFBTSxJQWNSLHFCQUFNLGFBQUMsR0FBVyxFQUFFLElBQXVCLEVBQUUsRUFBcUIsRUFBRSxPQUEwQjtBQUt4RixJQUFOLHlCQUFVLGFBQUMsSUFBWSxFQUFFLFlBQXFCLEVBQUUsRUFBc0I7QUFLNUQsSUFBVix3QkFBUyxhQUFDLEdBQVcsRUFBRSxFQUFzQjtBQUtwQyxJQUFULGdDQUFpQixhQUFDLEdBQVcsRUFBRSxPQUEwQixFQUFFLEVBQXNCO0FBS2hFLElBQWpCLDhCQUFlLGFBQUMsUUFBZ0IsRUFBRSxPQUFlO0FBS2xDLElBQWYsMEJBQVcsYUFBQyxXQUFrQixFQUFFLEVBQXNCO0FBSzNDLElBQVgsMEJBQVc7QUFLWSxJQUF2Qix1Q0FBd0IsYUFBQyxXQUFtQjtBQUtwQixJQUF4Qiw0QkFBYSxhQUFDLFdBQWdCO0FBS1YsSUFBcEIsNEJBQWEsYUFBQyxLQUFVO0FBS0osSUFBcEIsd0JBQVMsYUFBQyxRQUFhO0FBS1AsSUFBaEIsd0JBQVMsYUFBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEdBQVE7QUFLL0MsSUFBaEIsMEJBQVcsYUFBQyxHQUFRO0FBS0MsMEJBbEZyQiwyQkFBUztBQUFJO0FBSWI7QUFHTTtBQUNNO0FBQ0Y7QUFBUSwwQkFQbEIsZ0NBQWM7QUFBSTtBQUliO0FBR1E7QUFDTTtBQUVqQjtBQUFRLDBCQVJWLGdDQUFjO0FBQUk7QUFJZjtBQUdhO0FBQ007QUFFbkI7QUFBUSwwQkFSWCxrQ0FBZ0I7QUFBSTtBQUloQjtBQUlGO0FBRUU7QUFDQTtBQUFRLDBCQVRaLG1DQUFpQjtBQUFJO0FBSVY7QUFLVDtBQUEyQjtBQUEyQjtBQUFRLDBCQVBoRSw2QkFBVztBQUFJO0FBSVo7QUFHK0I7QUFBMkI7QUFBMkI7QUFBUSwwQkFMaEcsK0JBQWE7QUFBSTtBQUtsQjtBQUFxRjtBQUNyRjtBQUdVO0FBQVEsMEJBUGpCLDhCQUFZO0FBQUk7QUFHMkI7QUFJN0M7QUFDQTtBQUEyQjtBQUFRLDBCQTREakMsNEJBQVU7QUFBSTtBQVFiO0FBTUg7QUFDYTtBQUEyQjtBQUFRLDBCQVo5QywyQkFBUztBQUFJO0FBUUQ7QUFJaUI7QUFDdEI7QUFDQTtBQUFRO0FBSWpCO0FBQ087d0NBM0dOLFVBQVU7Ozs7MEJBQ0w7QUFBQyxlQTlaUDtBQUFFLEVBOFp3QixpQkFBaUI7QUFDMUMsU0FEWSxJQUFJO0FBQUk7QUFFbEIsSUFpRzBCLDJCQUFpQjtBQUFDO0FBQ3hCO0FBS0E7QUFDckIsSUFMQSx1QkFBSyxhQUFDLENBQVM7QUFLTixJQUFULDZCQUFXLGFBQUMsQ0FBUztBQUtOLElBQWYsK0JBQWEsYUFBQyxDQUFXO0FBS1IsSUFBakIsK0JBQWEsYUFBQyxDQUFTO0FBS1IsSUFBZixrQ0FBZ0IsYUFBQyxLQUFlO0FBS1osSUFBcEIsd0JBQU0sYUFBQyxNQUFrQixFQUFFLEdBQVcsRUFBRSxJQUF1QjtBQUt0RCxJQUFULHdDQUFzQixhQUFDLE1BQW1CO0FBS2hCLElBQTFCLHdDQUFzQixhQUFDLFNBQWlCO0FBS007QUFDcEI7QUFHckI7MkNBL0NOLFVBQVU7Ozs7MEJBQ0w7QUFBQyxrQkFqZ0JQO0FBQUUsRUFpZ0IyQixpQkFBaUI7QUFDN0MsU0FEWSxPQUFPO0FBQUk7QUFFeEIsSUF3Q2dDLDhCQUFpQjtBQUFDO0FBQ3hCO0FBR2U7QUFBTSxJQUg3QyxrQ0FBYSxHQUFiLFVBQWMsSUFBYztBQUFJLFFBQzlCLE9BQU87QUFDWCxJQUFFLENBQUM7QUFDRixJQUFDLGtDQUFhLEdBQWIsVUFBYyxJQUFZLEVBQUUsSUFBWTtBQUFJLFFBQzFDLE9BQU87QUFDWCxJQUFFLENBQUM7QUFDRixxQkFsakJEO0FBQUUsRUEyaUI4QixpQkFBaUI7QUFDaEQ7QUFBdUI7QUFHUCxJQUtjLDZCQUFpQjtBQUFDO0FBQ3hCO0FBR2U7QUFDbkMsSUFKSCxpQ0FBYSxHQUFiLFVBQWMsSUFBYztBQUFJLFFBQzlCLE9BQU87QUFDWCxJQUFFLENBQUM7QUFDRixJQUFDLGlDQUFhLEdBQWIsVUFBYyxHQUFXO0FBQUksUUFDM0IsT0FBTztBQUNYLElBQUUsQ0FBQztBQUNGLG9CQTNqQkQ7QUFBRSxFQW9qQjZCLGlCQUFpQjtBQUMvQztBQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5kZWNsYXJlIGxldCB3aW5kb3c6IGFueTtcblxuLy8gdGFnIHNob3VsZCBiZSBOZmNUYWcsIGJ1dCBrZWVwaW5nIGFzIE5kZWZUYWcgdG8gYXZvaWQgYnJlYWtpbmcgZXhpc3RpbmcgY29kZVxuZXhwb3J0IGludGVyZmFjZSBOZGVmRXZlbnQge1xuICB0YWc6IE5kZWZUYWc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmRlZlJlY29yZCB7XG4gIGlkOiBhbnlbXTtcbiAgcGF5bG9hZDogbnVtYmVyW107XG4gIHRuZjogbnVtYmVyO1xuICB0eXBlOiBudW1iZXJbXTtcbn1cblxuLyoqXG4gKiBAZGVwcmVjYXRlZCB1c2UgTmZjVGFnXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmRlZlRhZyB7XG4gIGNhbk1ha2VSZWFkT25seTogYm9vbGVhbjtcbiAgaWQ6IG51bWJlcltdO1xuICBpc1dyaXRhYmxlOiBib29sZWFuO1xuICBtYXhTaXplOiBudW1iZXI7XG4gIG5kZWZNZXNzYWdlOiBOZGVmUmVjb3JkW107XG4gIHRlY2hUeXBlczogc3RyaW5nW107XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOZmNUYWcge1xuICBpZD86IG51bWJlcltdO1xuICBjYW5NYWtlUmVhZE9ubHk/OiBib29sZWFuO1xuICBpc1dyaXRhYmxlPzogYm9vbGVhbjtcbiAgbWF4U2l6ZT86IG51bWJlcjtcbiAgbmRlZk1lc3NhZ2U/OiBOZGVmUmVjb3JkW107XG4gIHRlY2hUeXBlcz86IHN0cmluZ1tdO1xuICB0eXBlPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjYW5PcHRpb25zIHtcbiAgLyoqXG4gICAqIElmIHRydWUsIGtlZXAgdGhlIHNjYW4gc2Vzc2lvbiBvcGVuIHNvIHdyaXRlIGNhbiBiZSBjYWxsZWRcbiAgICogYWZ0ZXIgcmVhZGluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXG4gICAqL1xuICBrZWVwU2Vzc2lvbk9wZW4/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBuYW1lIE5GQ1xuICogQGRlc2NyaXB0aW9uXG4gKiBUaGUgTkZDIHBsdWdpbiBhbGxvd3MgeW91IHRvIHJlYWQgYW5kIHdyaXRlIE5GQyB0YWdzLiBZb3UgY2FuIGFsc28gYmVhbSB0bywgYW5kIHJlY2VpdmUgZnJvbSwgb3RoZXIgTkZDIGVuYWJsZWQgZGV2aWNlcy5cbiAqXG4gKiBVc2UgdG9cbiAqIC0gcmVhZCBkYXRhIGZyb20gTkZDIHRhZ3NcbiAqIC0gd3JpdGUgZGF0YSB0byBORkMgdGFnc1xuICogLSBzZW5kIGRhdGEgdG8gb3RoZXIgTkZDIGVuYWJsZWQgZGV2aWNlc1xuICogLSByZWNlaXZlIGRhdGEgZnJvbSBORkMgZGV2aWNlc1xuICpcbiAqIFRoaXMgcGx1Z2luIHVzZXMgTkRFRiAoTkZDIERhdGEgRXhjaGFuZ2UgRm9ybWF0KSBmb3IgbWF4aW11bSBjb21wYXRpYmlsdHkgYmV0d2VlbiBORkMgZGV2aWNlcywgdGFnIHR5cGVzLCBhbmQgb3BlcmF0aW5nIHN5c3RlbXMuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBORkMsIE5kZWYgfSBmcm9tICdAaW9uaWMtbmF0aXZlL25mYy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmZjOiBORkMsIHByaXZhdGUgbmRlZjogTmRlZikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gUmVhZCBORkMgVGFnIC0gQW5kcm9pZFxuICogLy8gT25jZSB0aGUgcmVhZGVyIG1vZGUgaXMgZW5hYmxlZCwgYW55IHRhZ3MgdGhhdCBhcmUgc2Nhbm5lZCBhcmUgc2VudCB0byB0aGUgc3Vic2NyaWJlclxuICogIGxldCBmbGFncyA9IHRoaXMubmZjLkZMQUdfUkVBREVSX05GQ19BIHwgdGhpcy5uZmMuRkxBR19SRUFERVJfTkZDX1Y7XG4gKiAgdGhpcy5yZWFkZXJNb2RlJCA9IHRoaXMubmZjLnJlYWRlck1vZGUoZmxhZ3MpLnN1YnNjcmliZShcbiAqICAgICAgdGFnID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRhZykpLFxuICogICAgICBlcnIgPT4gY29uc29sZS5sb2coJ0Vycm9yIHJlYWRpbmcgdGFnJywgZXJyKVxuICogICk7XG4gKlxuICogLy8gUmVhZCBORkMgVGFnIC0gaU9TXG4gKiAvLyBPbiBpT1MsIGEgTkZDIHJlYWRlciBzZXNzaW9uIHRha2VzIGNvbnRyb2wgZnJvbSB5b3VyIGFwcCB3aGlsZSBzY2FubmluZyB0YWdzIHRoZW4gcmV0dXJucyBhIHRhZ1xuICogdHJ5IHtcbiAqICAgICBsZXQgdGFnID0gYXdhaXQgdGhpcy5uZmMuc2Nhbk5kZWYoKTtcbiAqICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0YWcpKTtcbiAqICB9IGNhdGNoIChlcnIpIHtcbiAqICAgICAgY29uc29sZS5sb2coJ0Vycm9yIHJlYWRpbmcgdGFnJywgZXJyKTtcbiAqICB9XG4gKlxuICogYGBgXG4gKlxuICogRm9yIG1vcmUgZGV0YWlscyBvbiBORkMgdGFnIG9wZXJhdGlvbnMgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mY1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05GQycsXG4gIHBsdWdpbjogJ3Bob25lZ2FwLW5mYycsXG4gIHBsdWdpblJlZjogJ25mYycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMnLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxufSlcbi8qKlxuICogQHsgTkZDIH0gY2xhc3MgbWV0aG9kc1xuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTkZDIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvLyBGbGFncyBmb3IgcmVhZGVyTW9kZVxuICAvLyBodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9yZWZlcmVuY2UvYW5kcm9pZC9uZmMvTmZjQWRhcHRlciNGTEFHX1JFQURFUl9ORkNfQVxuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRkxBR19SRUFERVJfTkZDX0E6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEZMQUdfUkVBREVSX05GQ19COiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBGTEFHX1JFQURFUl9ORkNfRjogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgRkxBR19SRUFERVJfTkZDX1Y6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEZMQUdfUkVBREVSX05GQ19CQVJDT0RFOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBGTEFHX1JFQURFUl9TS0lQX05ERUZfQ0hFQ0s6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIEZMQUdfUkVBREVSX05PX1BMQVRGT1JNX1NPVU5EUzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZWFkIE5GQyB0YWdzIHNlbmRpbmcgdGhlIHRhZyBkYXRhIHRvIHRoZSBzdWNjZXNzIGNhbGxiYWNrLlxuICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI25mY3JlYWRlcm1vZGVcbiAgICpcbiAgICogQHBhcmFtIGZsYWdzXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBjbGVhckZ1bmN0aW9uOiAnZGlzYWJsZVJlYWRlck1vZGUnLFxuICAgIGNsZWFyV2l0aEFyZ3M6IGZhbHNlLFxuICB9KVxuICByZWFkZXJNb2RlKGZsYWdzOiBudW1iZXIpOiBPYnNlcnZhYmxlPE5mY1RhZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBzY2FuTmRlZiBzdGFydHMgdGhlIE5GQ05ERUZSZWFkZXJTZXNzaW9uIGFsbG93aW5nIGlPUyB0byBzY2FuIE5GQyB0YWdzLlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjc2Nhbm5kZWZcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzY2FuTmRlZihvcHRpb25zPzogU2Nhbk9wdGlvbnMpOiBQcm9taXNlPE5mY1RhZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBzY2FuVGFnIHN0YXJ0cyB0aGUgTkZDVGFnUmVhZGVyU2Vzc2lvbiBhbGxvd2luZyBpT1MgdG8gc2NhbiBORkMgdGFncy5cbiAgICpcbiAgICogWW91IHByb2JhYmx5IHdhbnQgKnNjYW5OZGVmKiBmb3IgcmVhZGluZyBORkMgdGFncyBvbiBpT1MuIE9ubHkgdXNlIHNjYW5UYWcgaWYgeW91IG5lZWQgdGhlIHRhZyBVSUQuXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNzY2FudGFnXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc2NhblRhZyhvcHRpb25zPzogU2Nhbk9wdGlvbnMpOiBQcm9taXNlPE5mY1RhZz4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBjYW5jZWxTY2FuIHN0b3BzIHRoZSBORkNSZWFkZXJTZXNzaW9uIHJldHVybmluZyBjb250cm9sIHRvIHlvdXIgYXBwLlxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjY2FuY2Vsc2NhblxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNhbmNlbFNjYW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogQ29ubmVjdCB0byB0aGUgdGFnIGFuZCBlbmFibGUgSS9PIG9wZXJhdGlvbnMgdG8gdGhlIHRhZyBmcm9tIHRoaXMgVGFnVGVjaG5vbG9neSBvYmplY3QuXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNjb25uZWN0XG4gICAqXG4gICAqIEBwYXJhbSB0ZWNoIFRoZSB0YWcgdGVjaG5vbG9neSBjbGFzcyBuYW1lIGUuZy4gYW5kcm9pZC5uZmMudGVjaC5Jc29EZXBcbiAgICogQHBhcmFtIHRpbWVvdXQgVGhlIHRyYW5zY2VpdmUoYnl0ZVtdKSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyBbb3B0aW9uYWxdXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgY29ubmVjdCh0ZWNoOiBzdHJpbmcsIHRpbWVvdXQ/OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZSBUYWdUZWNobm9sb2d5IGNvbm5lY3Rpb24uXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNjbG9zZVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGNsb3NlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgcmF3IGNvbW1hbmQgdG8gdGhlIHRhZyBhbmQgcmVjZWl2ZSB0aGUgcmVzcG9uc2UuXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmN0cmFuc2NlaXZlXG4gICAqXG4gICAqIEV4YW1wbGUgY29kZSBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjdGFnLXRlY2hub2xvZ3ktZnVuY3Rpb25zLTFcbiAgICpcbiAgICogQHBhcmFtIGRhdGEgYW4gQXJyYXlCdWZmZXIgb3Igc3RyaW5nIG9mIGhleCBkYXRhIGUuZy4gJzAwIEE0IDA0IDAwIDA3IEQyIDc2IDAwIDAwIDg1IDAxIDAwJ1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHRyYW5zY2VpdmUoZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0YXJ0cyB0aGUgTkZDTkRFRlJlYWRlclNlc3Npb24gYWxsb3dpbmcgaU9TIHRvIHNjYW4gTkZDIHRhZ3MuXG4gICAqIEBkZXByZWNhdGVkIHVzZSBzY2FuTmRlZiBvciBzY2FuVGFnXG4gICAqXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gICAgY2xlYXJGdW5jdGlvbjogJ2ludmFsaWRhdGVTZXNzaW9uJyxcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxuICB9KVxuICBiZWdpblNlc3Npb24ob25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBhbnkgTkRFRiB0YWcuXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZU5kZWZMaXN0ZW5lcicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcbiAgfSlcbiAgYWRkTmRlZkxpc3RlbmVyKG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8TmRlZkV2ZW50PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGFncyBtYXRjaGluZyBhbnkgdGFnIHR5cGUuXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxuICAgIGVycm9ySW5kZXg6IDMsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZVRhZ0Rpc2NvdmVyZWRMaXN0ZW5lcicsXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcbiAgfSlcbiAgYWRkVGFnRGlzY292ZXJlZExpc3RlbmVyKG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgTkRFRiB0YWdzIG1hdGNoaW5nIGEgc3BlY2lmaWVkIE1JTUUgdHlwZS5cbiAgICogQHBhcmFtIG1pbWVUeXBlXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIG9ic2VydmFibGU6IHRydWUsXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZU1pbWVUeXBlTGlzdGVuZXInLFxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXG4gIH0pXG4gIGFkZE1pbWVUeXBlTGlzdGVuZXIobWltZVR5cGU6IHN0cmluZywgb25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBmb3JtYXRhYmxlIE5ERUYgdGFncy5cbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xuICAgKiBAcGFyYW0gb25GYWlsdXJlXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcbiAgICBzdWNjZXNzSW5kZXg6IDAsXG4gICAgZXJyb3JJbmRleDogMyxcbiAgfSlcbiAgYWRkTmRlZkZvcm1hdGFibGVMaXN0ZW5lcihvblN1Y2Nlc3M/OiBGdW5jdGlvbiwgb25GYWlsdXJlPzogRnVuY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXcml0ZXMgYW4gTmRlZk1lc3NhZ2UoYXJyYXkgb2YgbmRlZiByZWNvcmRzKSB0byBhIE5GQyB0YWcuXG4gICAqIEBwYXJhbSBtZXNzYWdlIHthbnlbXX1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgd3JpdGUobWVzc2FnZTogYW55W10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuICAvKipcbiAgICogTWFrZXMgYSBORkMgdGFnIHJlYWQgb25seS4gKipXYXJuaW5nKiogdGhpcyBpcyBwZXJtYW5lbnQuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIG1ha2VSZWFkT25seSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaGFyZXMgYW4gTkRFRiBNZXNzYWdlKGFycmF5IG9mIG5kZWYgcmVjb3JkcykgdmlhIHBlZXItdG8tcGVlci5cbiAgICogQHBhcmFtIG1lc3NhZ2UgQW4gYXJyYXkgb2YgTkRFRiBSZWNvcmRzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBzaGFyZShtZXNzYWdlOiBhbnlbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agc2hhcmluZyBOREVGIGRhdGEgdmlhIHBlZXItdG8tcGVlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5zaGFyZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFcmFzZSBhIE5ERUYgdGFnXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGVyYXNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbmQgYSBmaWxlIHRvIGFub3RoZXIgZGV2aWNlIHZpYSBORkMgaGFuZG92ZXIuXG4gICAqIEBwYXJhbSB1cmlzIEEgVVJJIGFzIGEgU3RyaW5nLCBvciBhbiBhcnJheSBvZiBVUklzLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBoYW5kb3Zlcih1cmlzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFN0b3Agc2hhcmluZyBOREVGIGRhdGEgdmlhIE5GQyBoYW5kb3Zlci5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc3RvcEhhbmRvdmVyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBkZXZpY2UncyBORkMgc2V0dGluZ3MuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3dTZXR0aW5ncygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBORkMgaXMgYXZhaWxhYmxlIGFuZCBlbmFibGVkIG9uIHRoaXMgZGV2aWNlLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBlbmFibGVkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBAeyBORkMgfSBjbGFzcyB1dGlsaXR5IG1ldGhvZHNcbiAgICogZm9yIHVzZSB3aXRoXG4gICAqL1xuICAvKipcbiAgICogQ29udmVydCBieXRlIGFycmF5IHRvIHN0cmluZ1xuICAgKiBAcGFyYW0gYnl0ZXMge251bWJlcltdfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGJ5dGVzVG9TdHJpbmcoYnl0ZXM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnQgc3RyaW5nIHRvIGJ5dGUgYXJyYXkuXG4gICAqIEBwYXJhbSBzdHIge3N0cmluZ31cbiAgICogQHJldHVybnMge251bWJlcltdfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHN0cmluZ1RvQnl0ZXMoc3RyOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0IGJ5dGUgYXJyYXkgdG8gaGV4IHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gYnl0ZXMge251bWJlcltdfVxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGJ5dGVzVG9IZXhTdHJpbmcoYnl0ZXM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cbn1cbi8qKlxuICogQGhpZGRlblxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ05GQycsXG4gIHBsdWdpbjogJ3Bob25lZ2FwLW5mYycsXG4gIHBsdWdpblJlZjogJ25kZWYnLFxufSlcbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBVdGlsaXR5IG1ldGhvZHMgZm9yIGNyZWF0aW5nIG5kZWYgcmVjb3JkcyBmb3IgdGhlIG5kZWYgdGFnIGZvcm1hdC5cbiAqIE1vdmUgcmVjb3JkcyBpbnRvIGFycmF5IGJlZm9yZSB1c2FnZS4gVGhlbiBwYXNzIGFuIGFycmF5IHRvIG1ldGhvZHMgYXMgcGFyYW1ldGVycy5cbiAqIERvIG5vdCBwYXNzIGJ5dGVzIGFzIHBhcmFtZXRlcnMgZm9yIHRoZXNlIG1ldGhvZHMsIGNvbnZlcnNpb24gaXMgYnVpbHQgaW4uXG4gKiBGb3IgdXNhZ2Ugd2l0aCBuZmMud3JpdGUoKSBhbmQgbmZjLnNoYXJlKClcbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5kZWYgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfRU1QVFk6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFRORl9XRUxMX0tOT1dOOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfTUlNRV9NRURJQTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX0FCU09MVVRFX1VSSTogbnVtYmVyO1xuICBAQ29yZG92YVByb3BlcnR5KClcbiAgVE5GX0VYVEVSTkFMX1RZUEU6IG51bWJlcjtcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIFRORl9VTktOT1dOOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfVU5DSEFOR0VEOiBudW1iZXI7XG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICBUTkZfUkVTRVJWRUQ6IG51bWJlcjtcblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgcmVjb3JkKHRuZjogbnVtYmVyLCB0eXBlOiBudW1iZXJbXSB8IHN0cmluZywgaWQ6IG51bWJlcltdIHwgc3RyaW5nLCBwYXlsb2FkOiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0ZXh0UmVjb3JkKHRleHQ6IHN0cmluZywgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nLCBpZD86IG51bWJlcltdIHwgc3RyaW5nKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIHVyaVJlY29yZCh1cmk6IHN0cmluZywgaWQ/OiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBhYnNvbHV0ZVVyaVJlY29yZCh1cmk6IHN0cmluZywgcGF5bG9hZDogbnVtYmVyW10gfCBzdHJpbmcsIGlkPzogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgbWltZU1lZGlhUmVjb3JkKG1pbWVUeXBlOiBzdHJpbmcsIHBheWxvYWQ6IHN0cmluZyk6IE5kZWZSZWNvcmQge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBzbWFydFBvc3RlcihuZGVmUmVjb3JkczogYW55W10sIGlkPzogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW1wdHlSZWNvcmQoKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFuZHJvaWRBcHBsaWNhdGlvblJlY29yZChwYWNrYWdlTmFtZTogc3RyaW5nKTogTmRlZlJlY29yZCB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGVuY29kZU1lc3NhZ2UobmRlZlJlY29yZHM6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRlY29kZU1lc3NhZ2UoYnl0ZXM6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGRlY29kZVRuZih0bmZfYnl0ZTogYW55KTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgZW5jb2RlVG5mKG1iOiBhbnksIG1lOiBhbnksIGNmOiBhbnksIHNyOiBhbnksIGlsOiBhbnksIHRuZjogYW55KTogYW55IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgdG5mVG9TdHJpbmcodG5mOiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB0ZXh0SGVscGVyOiBUZXh0SGVscGVyO1xuXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxuICB1cmlIZWxwZXI6IFVyaUhlbHBlcjtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnTkZDJyxcbiAgcGx1Z2luOiAncGhvbmVnYXAtbmZjJyxcbiAgcGx1Z2luUmVmOiAndXRpbCcsXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5mY1V0aWwgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0b0hleChpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICB0b1ByaW50YWJsZShpOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBieXRlc1RvU3RyaW5nKGk6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RyaW5nVG9CeXRlcyhzOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGJ5dGVzVG9IZXhTdHJpbmcoYnl0ZXM6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgaXNUeXBlKHJlY29yZDogTmRlZlJlY29yZCwgdG5mOiBudW1iZXIsIHR5cGU6IG51bWJlcltdIHwgc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGFycmF5QnVmZmVyVG9IZXhTdHJpbmcoYnVmZmVyOiBBcnJheUJ1ZmZlcik6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXG4gIGhleFN0cmluZ1RvQXJyYXlCdWZmZXIoaGV4U3RyaW5nOiBzdHJpbmcpOiBBcnJheUJ1ZmZlciB7XG4gICAgcmV0dXJuO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUZXh0SGVscGVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBkZWNvZGVQYXlsb2FkKGRhdGE6IG51bWJlcltdKTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cbiAgZW5jb2RlUGF5bG9hZCh0ZXh0OiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IG51bWJlcltdIHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVyaUhlbHBlciBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgZGVjb2RlUGF5bG9hZChkYXRhOiBudW1iZXJbXSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGVuY29kZVBheWxvYWQodXJpOiBzdHJpbmcpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ 7673);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/geolocation */ 1091);
/* harmony import */ var _capacitor_share__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/share */ 6380);
/* harmony import */ var _capacitor_device__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/device */ 2810);
/* harmony import */ var _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/nfc/ngx */ 3157);









let HomePage = class HomePage {
    constructor(nfc, ndef) {
        this.nfc = nfc;
        this.ndef = ndef;
        this.myImage = null;
        this.position = null;
        this.deviceID = null;
    }
    takePicture() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.Camera.getPhoto({
                quality: 90,
                allowEditing: true,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraResultType.Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__.CameraSource.Camera
            });
            this.myImage = image.webPath;
        });
    }
    getCurrentPosition() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_3__.Geolocation.getCurrentPosition();
            this.position = coordinates;
        });
    }
    getDeviceID() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const devID = yield _capacitor_device__WEBPACK_IMPORTED_MODULE_5__.Device.getId();
            this.deviceID = devID;
        });
    }
    share() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            yield _capacitor_share__WEBPACK_IMPORTED_MODULE_4__.Share.share({
                title: 'Come and find me',
                text: `Here's my device ID:
        ${this.deviceID.uuid}`,
                url: 'http://thingsintouch.com/'
            });
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_6__.NFC },
    { type: _ionic_native_nfc_ngx__WEBPACK_IMPORTED_MODULE_6__.Ndef }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Capacitor PWA\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button (click)=\"takePicture()\" expand=\"block\">\n    <ion-icon name=\"camera\" slot=\"start\"></ion-icon>\n    Capture image\n  </ion-button>\n\n  <ion-img *ngIf=\"myImage\" [src]=\"myImage\"></ion-img>\n\n  <!-- <ion-button (click)=\"getCurrentPosition()\" expand=\"block\">\n    <ion-icon name=\"locate\" slot=\"start\"></ion-icon>\n    Get position\n  </ion-button>\n\n\n  <ion-card *ngIf=\"position\">\n    <ion-card-content>\n      <ion-item>\n        <ion-icon name=\"location\" slot=\"start\"></ion-icon>\n        Lat: {{ position.coords.latitude }}\n      </ion-item>\n      <ion-item>\n        <ion-icon name=\"location\" slot=\"start\"></ion-icon>\n        Lng: {{ position.coords.longitude }}\n      </ion-item>\n\n      <ion-button (click)=\"share()\" expand=\"block\" color=\"secondary\">\n        <ion-icon name=\"share\" slot=\"start\"></ion-icon>\n        Share!\n      </ion-button>\n    </ion-card-content>\n  </ion-card> -->\n\n  <ion-button (click)=\"getDeviceID()\" expand=\"block\">\n    <ion-icon name=\"id-card-outline\" slot=\"start\"></ion-icon>\n    Get device ID\n  </ion-button>\n\n  <!-- present the device ID information -->\n  <ion-card *ngIf=\"deviceID\">\n    <ion-card-content>\n      <ion-item>\n        <ion-icon name=\"id-card-outline\" slot=\"start\"></ion-icon>\n        uuid: {{ deviceID.uuid }}\n      </ion-item>\n\n      <ion-button (click)=\"share()\" expand=\"block\" color=\"secondary\">\n        <ion-icon name=\"share\" slot=\"start\"></ion-icon>\n        Share!\n      </ion-button>\n    </ion-card-content>\n  </ion-card>\n\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map