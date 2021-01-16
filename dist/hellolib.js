
  /**
   * @license
   * hellolib.js v1.0.0
   * Released under the MIT License.
   */

var hellolib = (function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  /* global Reflect, Promise */
  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  };
  function __rest(s, e) {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  }
  function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  }
  function __metadata(metadataKey, metadataValue) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }
  var __createBinding = Object.create ? function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
      enumerable: true,
      get: function get() {
        return m[k];
      }
    });
  } : function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
  };
  function __exportStar(m, o) {
    for (var p in m) {
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    }
  }
  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function next() {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;

    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    return ar;
  }
  /** @deprecated */

  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) {
      ar = ar.concat(__read(arguments[i]));
    }

    return ar;
  }
  /** @deprecated */

  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }

    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }

    return r;
  }
  function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) {
      to[j] = from[i];
    }

    return to;
  }
  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []),
        i,
        q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i;

    function verb(n) {
      if (g[n]) i[n] = function (v) {
        return new Promise(function (a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
    }

    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle(q[0][3], e);
      }
    }

    function step(r) {
      r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }

    function fulfill(value) {
      resume("next", value);
    }

    function reject(value) {
      resume("throw", value);
    }

    function settle(f, v) {
      if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
  }
  function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) {
      throw e;
    }), verb("return"), i[Symbol.iterator] = function () {
      return this;
    }, i;

    function verb(n, f) {
      i[n] = o[n] ? function (v) {
        return (p = !p) ? {
          value: __await(o[n](v)),
          done: n === "return"
        } : f ? f(v) : v;
      } : f;
    }
  }
  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator],
        i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
      return this;
    }, i);

    function verb(n) {
      i[n] = o[n] && function (v) {
        return new Promise(function (resolve, reject) {
          v = o[n](v), settle(resolve, reject, v.done, v.value);
        });
      };
    }

    function settle(resolve, reject, d, v) {
      Promise.resolve(v).then(function (v) {
        resolve({
          value: v,
          done: d
        });
      }, reject);
    }
  }
  function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", {
        value: raw
      });
    } else {
      cooked.raw = raw;
    }

    return cooked;
  }

  var __setModuleDefault = Object.create ? function (o, v) {
    Object.defineProperty(o, "default", {
      enumerable: true,
      value: v
    });
  } : function (o, v) {
    o["default"] = v;
  };

  function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) {
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    }

    __setModuleDefault(result, mod);

    return result;
  }
  function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
      "default": mod
    };
  }
  function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to get private field on non-instance");
    }

    return privateMap.get(receiver);
  }
  function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to set private field on non-instance");
    }

    privateMap.set(receiver, value);
    return value;
  }

  var tslib_es6 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    __extends: __extends,
    get __assign () { return _assign; },
    __rest: __rest,
    __decorate: __decorate,
    __param: __param,
    __metadata: __metadata,
    __awaiter: __awaiter,
    __generator: __generator,
    __createBinding: __createBinding,
    __exportStar: __exportStar,
    __values: __values,
    __read: __read,
    __spread: __spread,
    __spreadArrays: __spreadArrays,
    __spreadArray: __spreadArray,
    __await: __await,
    __asyncGenerator: __asyncGenerator,
    __asyncDelegator: __asyncDelegator,
    __asyncValues: __asyncValues,
    __makeTemplateObject: __makeTemplateObject,
    __importStar: __importStar,
    __importDefault: __importDefault,
    __classPrivateFieldGet: __classPrivateFieldGet,
    __classPrivateFieldSet: __classPrivateFieldSet
  });

  var _default = (value = '') => {
      return value.trim();
  };


  var trim = /*#__PURE__*/Object.defineProperty({
  	default: _default
  }, '__esModule', {value: true});

  function getAugmentedNamespace(n) {
  	if (n.__esModule) return n;
  	var a = Object.defineProperty({}, '__esModule', {value: true});
  	Object.keys(n).forEach(function (k) {
  		var d = Object.getOwnPropertyDescriptor(n, k);
  		Object.defineProperty(a, k, d.get ? d : {
  			enumerable: true,
  			get: function () {
  				return n[k];
  			}
  		});
  	});
  	return a;
  }

  var tslib_1 = /*@__PURE__*/getAugmentedNamespace(tslib_es6);

  const trim_1 = tslib_1.__importDefault(trim);
  var _default$1 = {
      trim: trim_1.default
  };

  return _default$1;

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVsbG9saWIuanMiLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCIuLi9zcmMvdHJpbS50cyIsIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCAodmFsdWUgPSAnJyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiB2YWx1ZS50cmltKCk7XG59XG4iLCJpbXBvcnQgdHJpbSBmcm9tICcuL3RyaW0nO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHRyaW06IHRyaW1cbn1cbiJdLCJuYW1lcyI6WyJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9fZXh0ZW5kcyIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcHBseSIsIl9fcmVzdCIsImUiLCJpbmRleE9mIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJfX2RlY29yYXRlIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJjIiwiciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIlJlZmxlY3QiLCJkZWNvcmF0ZSIsImRlZmluZVByb3BlcnR5IiwiX19wYXJhbSIsInBhcmFtSW5kZXgiLCJkZWNvcmF0b3IiLCJfX21ldGFkYXRhIiwibWV0YWRhdGFLZXkiLCJtZXRhZGF0YVZhbHVlIiwibWV0YWRhdGEiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJhZG9wdCIsInZhbHVlIiwicmVzb2x2ZSIsIlByb21pc2UiLCJyZWplY3QiLCJmdWxmaWxsZWQiLCJzdGVwIiwibmV4dCIsInJlamVjdGVkIiwicmVzdWx0IiwiZG9uZSIsInRoZW4iLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsImYiLCJ5IiwiZyIsInZlcmIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsInBvcCIsInB1c2giLCJfX2NyZWF0ZUJpbmRpbmciLCJvIiwibSIsImsiLCJrMiIsInVuZGVmaW5lZCIsImVudW1lcmFibGUiLCJnZXQiLCJfX2V4cG9ydFN0YXIiLCJfX3ZhbHVlcyIsIl9fcmVhZCIsImFyIiwiZXJyb3IiLCJfX3NwcmVhZCIsImNvbmNhdCIsIl9fc3ByZWFkQXJyYXlzIiwiaWwiLCJhIiwiaiIsImpsIiwiX19zcHJlYWRBcnJheSIsInRvIiwiZnJvbSIsIl9fYXdhaXQiLCJfX2FzeW5jR2VuZXJhdG9yIiwiYXN5bmNJdGVyYXRvciIsInEiLCJyZXN1bWUiLCJzZXR0bGUiLCJmdWxmaWxsIiwic2hpZnQiLCJfX2FzeW5jRGVsZWdhdG9yIiwiX19hc3luY1ZhbHVlcyIsIl9fbWFrZVRlbXBsYXRlT2JqZWN0IiwiY29va2VkIiwicmF3IiwiX19zZXRNb2R1bGVEZWZhdWx0IiwiX19pbXBvcnRTdGFyIiwibW9kIiwiX19lc01vZHVsZSIsIl9faW1wb3J0RGVmYXVsdCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInByaXZhdGVNYXAiLCJoYXMiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0Iiwic2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBO0VBQ0E7QUFDQTtFQUNBO0VBQ0E7QUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBQ0E7RUFFQSxJQUFJQSxjQUFhLEdBQUcsdUJBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0VBQy9CRixFQUFBQSxjQUFhLEdBQUdHLE1BQU0sQ0FBQ0MsY0FBUCxJQUNYO0VBQUVDLElBQUFBLFNBQVMsRUFBRTtFQUFiLGVBQTZCQyxLQUE3QixJQUFzQyxVQUFVTCxD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
