import { TwoslashError } from '@typescript/twoslash';
import visit from 'unist-util-visit';
import { lex, parse } from 'fenceparser';
import { getHighlighter } from '@olets/shiki';
import { runTwoSlash, renderCodeToHTML } from '@olets/shiki-twoslash';

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}

/**
 * Keeps a cache of the JSON responses to a twoslash call in node_modules/.cache/twoslash
 * which should keep CI times down (e.g. the epub vs the handbook etc) - but also during
 * dev time, where it can be super useful.
 */
function cachedTwoslashCall(_x, _x2, _x3) {
  return _cachedTwoslashCall.apply(this, arguments);
}
function _cachedTwoslashCall() {
  _cachedTwoslashCall = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(code, lang, settings) {
    var isWebWorker, isBrowser, _yield$import, createHash, _yield$import2, readFileSync, existsSync, mkdirSync, writeFileSync, _yield$import3, join, shikiVersion, tsVersion, shasum, codeSha, getNmCache, getPnpCache, _getPnpCache, cacheRoot, cachePath, results;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _getPnpCache = function _getPnpCache3() {
            _getPnpCache = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var pnp;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return import('pnpapi');
                  case 3:
                    pnp = _context.sent;
                    return _context.abrupt("return", join(pnp.getPackageInformation(pnp.topLevel).packageLocation, "node_modules", ".cache", "twoslash"));
                  case 7:
                    _context.prev = 7;
                    _context.t0 = _context["catch"](0);
                    return _context.abrupt("return", getNmCache());
                  case 10:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 7]]);
            }));
            return _getPnpCache.apply(this, arguments);
          };
          getPnpCache = function _getPnpCache2() {
            return _getPnpCache.apply(this, arguments);
          };
          isWebWorker = typeof self !== "undefined" &&
          // @ts-expect-error
          typeof self.WorkerGlobalScope !== "undefined";
          isBrowser = isWebWorker || typeof window !== "undefined" && typeof window.document !== "undefined" && typeof fetch !== "undefined";
          if (!isBrowser) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", runTwoSlash(code, lang, settings));
        case 6:
          _context2.next = 8;
          return import('crypto');
        case 8:
          _yield$import = _context2.sent;
          createHash = _yield$import.createHash;
          _context2.next = 12;
          return import('fs');
        case 12:
          _yield$import2 = _context2.sent;
          readFileSync = _yield$import2.readFileSync;
          existsSync = _yield$import2.existsSync;
          mkdirSync = _yield$import2.mkdirSync;
          writeFileSync = _yield$import2.writeFileSync;
          _context2.next = 19;
          return import('path');
        case 19:
          _yield$import3 = _context2.sent;
          join = _yield$import3.join;
          _context2.next = 23;
          return import('@typescript/twoslash/package.json').then(function (m) {
            return m.version;
          });
        case 23:
          shikiVersion = _context2.sent;
          _context2.next = 26;
          return import('typescript/package.json').then(function (m) {
            return m.version;
          });
        case 26:
          tsVersion = _context2.sent;
          shasum = createHash("sha1");
          codeSha = shasum.update(code + "-" + shikiVersion + "-" + tsVersion).digest("hex");
          getNmCache = function getNmCache() {
            if (__dirname.includes("node_modules")) {
              return join(__dirname.split("node_modules")[0], "node_modules", ".cache", "twoslash");
            } else {
              return join(__dirname, "..", "..", ".cache", "twoslash");
            }
          };
          cacheRoot = process.versions.pnp ? getPnpCache() : getNmCache();
          _context2.t0 = join;
          _context2.next = 34;
          return cacheRoot;
        case 34:
          _context2.t1 = _context2.sent;
          _context2.t2 = codeSha + ".json";
          cachePath = (0, _context2.t0)(_context2.t1, _context2.t2);
          if (!existsSync(cachePath)) {
            _context2.next = 42;
            break;
          }
          if (process.env.debug) console.log("Using cached twoslash results from " + cachePath);
          return _context2.abrupt("return", JSON.parse(readFileSync(cachePath, "utf8")));
        case 42:
          results = runTwoSlash(code, lang, settings);
          _context2.t3 = existsSync;
          _context2.next = 46;
          return cacheRoot;
        case 46:
          _context2.t4 = _context2.sent;
          if ((0, _context2.t3)(_context2.t4)) {
            _context2.next = 54;
            break;
          }
          _context2.t5 = mkdirSync;
          _context2.next = 51;
          return cacheRoot;
        case 51:
          _context2.t6 = _context2.sent;
          _context2.t7 = {
            recursive: true
          };
          (0, _context2.t5)(_context2.t6, _context2.t7);
        case 54:
          writeFileSync(cachePath, JSON.stringify(results), "utf8");
          return _context2.abrupt("return", results);
        case 56:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _cachedTwoslashCall.apply(this, arguments);
}

var addIncludes = function addIncludes(map, name, code) {
  var lines = [];
  code.split("\n").forEach(function (l, _i) {
    var trimmed = l.trim();
    if (trimmed.startsWith("// - ")) {
      var key = trimmed.split("// - ")[1].split(" ")[0];
      map.set(name + "-" + key, lines.join("\n"));
    } else {
      lines.push(l);
    }
  });
  map.set(name, lines.join("\n"));
};
var replaceIncludesInCode = function replaceIncludesInCode(_map, code) {
  var includes = /\/\/ @include: (.*)$/gm;
  // Basically run a regex over the code replacing any // @include: thing with
  // 'thing' from the map
  // const toReplace: [index:number, length: number, str: string][] = []
  var toReplace = [];
  var match;
  while ((match = includes.exec(code)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (match.index === includes.lastIndex) {
      includes.lastIndex++;
    }
    var key = match[1];
    var replaceWith = _map.get(key);
    if (!replaceWith) {
      var msg = "Could not find an include with the key: '" + key + "'.\nThere is: " + Array.from(_map.keys()) + ".";
      throw new Error(msg);
    }
    toReplace.push([match.index, match[0].length, replaceWith]);
  }
  var newCode = code.toString();
  // Go backwards through the found changes so that we can retain index position
  toReplace.reverse().forEach(function (r) {
    newCode = newCode.substring(0, r[0]) + r[2] + newCode.substring(r[0] + r[1]);
  });
  return newCode;
};

function escapeHtml(html) {
  return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var setupNodeForTwoslashException = function setupNodeForTwoslashException(code, node, error) {
  var css = "<style>\n@import url('http://fonts.cdnfonts.com/css/caslon-os'); \n\n.twoslash-fixed-error-note { \n    position: fixed;\n    top: 20px;\n    right: 20px;\n    display: flex;\n    align-items: center;\n    padding: .25rem .75rem;\n    color: black;\n    background-color: #FCF3D9;\n    background-clip: padding-box;\n    border-bottom: 1px solid rgba(0,0,0,.05);\n    border-radius: .25rem;\n    font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,\"Helvetica Neue\",Arial,\"Noto Sans\",sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";\n } \n\n #__docusaurus .twoslash-fixed-error-note {\n    top: 80px;\n }\n\n .twoslash-fixed-error-note:hover {\n    border-bottom: 1px solid rgba(226, 61, 30, 0.8);\n }\n\n .twoslash-error-color {\n    background-color: #E23D1E;\n    width: 18px;\n    height: 18px;\n    border-radius: 9px;\n    margin-right:  10px;\n    color: black;\n }\n\n.twoslash-exception-message { \n    font-family: 'Caslon OS', sans-serif; \n    background-color: #FCF3D9;\n    font-size: 1.1rem;\n    padding: 2rem;\n    border-left: 2px solid #E23D1E;\n}\n\n.twoslash-exception-message p {\n    margin-top: 1rem;\n    margin-bottom: 0.6rem;\n}\n\n.twoslash-exception-message h3 { \n    margin-top: 0.6rem;\n    margin-bottom: 0.3rem;\n    font-size: 1.8rem;\n}\n\n.twoslash-exception-message code {\n     white-space: pre-wrap;\n     font-family: \"JetBrains Mono\", Menlo, Monaco, Consolas, Courier New, monospace;\n     margin-bottom: 20px;\n     background-color: #FCF3D9;\n     color: black;\n     border: none;\n     padding-left: 0;\n }\n\n .twoslash-exception-message > code {\n     display: block;\n     margin-bottom: 1.5rem;\n     margin-top: 3rem;\n }\n\n.twoslash-exception-code {\n    border-left: 2px solid #E5A604;\n    padding-left: 20px;\n    background-color: #FCF3D9;\n    color: black;\n}\n</style>";
  var bodyFromTwoslashError = function bodyFromTwoslashError(error) {
    return "\n<h3>" + escapeHtml(error.title) + "</h3>\n<p>" + escapeHtml(error.description).replace(/(?:\r\n|\r|\n)/g, "<br>") + "</p>\n<code>" + escapeHtml(error.recommendation).replace(/(?:\r\n|\r|\n)/g, "<br>") + "</code>\n";
  };
  var bodyFromError = function bodyFromError(error) {
    return "<pre><code>" + error.message.split("## Code")[0] + "</code></pre>";
  };
  // @ts-ignore
  var isWebWorker = typeof self !== "undefined" && typeof self.WorkerGlobalScope !== "undefined";
  var isBrowser = isWebWorker || typeof window !== "undefined" && typeof window.document !== "undefined" && typeof fetch !== "undefined";
  var isJest = typeof jest !== "undefined";
  var eLog = !isBrowser && !isJest ? console.error : function (_str) {};
  var body = "<pre><code>" + error + "</code></pre>";
  if (typeof error !== "object") {
    body = String(error);
    eLog("### Unexpected error:");
    eLog(error);
  } else if (error instanceof TwoslashError) {
    body = bodyFromTwoslashError(error);
    eLog("### Twoslash error: " + error.title);
    eLog(error.description);
    eLog(error.recommendation);
    eLog("\n### Code Sample");
    eLog(code);
  } else if (error instanceof Error) {
    body = bodyFromError(error);
    eLog("### Unexpected error:");
    eLog(error);
  }
  var codeSample = "<p>Raising Code:</p><pre class='twoslash-exception-code'><code>" + escapeHtml(code) + "</code></pre>";
  var html = "\n    <a href='#twoslash-error'><div class='twoslash-fixed-error-note'><span class='twoslash-error-color'></span>Twoslash failure</div></a>\n    <div class='twoslash-exception-message'>" + body + codeSample + "</div>";
  node.type = "html";
  node.value = "<div id='twoslash-error'>" + css + html + "</div>";
  node.children = [];
};

// A set of includes which can be pulled via a set ID
var includes = /*#__PURE__*/new Map();
function getHTML(code, fence, highlighters, twoslash, twoslashSettings) {
  // Shiki doesn't respect json5 as an input, so switch it
  // to json, which can handle comments in the syntax highlight
  var replacer = {
    json5: "json"
  };
  if (replacer[fence.lang]) fence.lang = replacer[fence.lang];
  var results;
  // Support 'twoslash' includes
  if (fence.lang === "twoslash") {
    if (!fence.meta.include || typeof fence.meta.include !== "string") {
      throw new Error("A twoslash code block needs a pragma like 'twoslash include [name]'");
    }
    addIncludes(includes, fence.meta.include, code);
    results = twoslashSettings.wrapFragments ? "<div class=\"shiki-twoslash-fragment\"></div>" : "";
  } else {
    // All good, get each highlighter and render the shiki output for it
    var output = highlighters.map(function (highlighter) {
      // @ts-ignore
      var themeName = highlighter.customName.split("/").pop().replace(".json", "");
      return renderCodeToHTML(code, fence.lang, fence.meta, _extends({
        themeName: themeName
      }, twoslashSettings), highlighter, twoslash);
    });
    results = output.join("\n");
    if (highlighters.length > 1 && twoslashSettings.wrapFragments) {
      results = "<div class=\"shiki-twoslash-fragment\">" + results + "</div>";
    }
  }
  return results;
}
/**
 * Runs twoslash across an AST node, switching out the text content, and lang
 * and adding a `twoslash` property to the node.
 */
var runTwoSlashOnNode = function runTwoSlashOnNode(code, _ref, settings) {
  var lang = _ref.lang,
    meta = _ref.meta;
  if (settings === void 0) {
    settings = {};
  }
  // Offer a way to do high-perf iterations, this is less useful
  // given that we cache the results of twoslash in the file-system
  var shouldDisableTwoslash = typeof process !== "undefined" && process.env && !!process.env.TWOSLASH_DISABLE;
  if (shouldDisableTwoslash) return undefined;
  // Only run twoslash when the meta has the attribute twoslash
  if (meta.twoslash) {
    var importedCode = replaceIncludesInCode(includes, code);
    return cachedTwoslashCall(importedCode, lang, settings);
  }
  return undefined;
};
// To make sure we only have one highlighter per theme in a process
var highlighterCache = /*#__PURE__*/new Map();
/** Sets up the highlighters, and cache's for recalls */
var highlightersFromSettings = function highlightersFromSettings(settings) {
  // console.log("i should only log once per theme")
  // ^ uncomment this to debug if required
  var themes = settings.themes || (settings.theme ? [settings.theme] : ["light-plus"]);
  return Promise.all(themes.map(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(theme) {
      var themeName, highlighter;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            // You can put a string, a path, or the JSON theme obj
            themeName = theme.name || theme;
            _context.next = 3;
            return getHighlighter(_extends({}, settings, {
              theme: theme,
              themes: undefined
            }));
          case 3:
            highlighter = _context.sent;
            // @ts-ignore - https://github.com/shikijs/shiki/pull/162 will fix this
            highlighter.customName = themeName;
            return _context.abrupt("return", highlighter);
          case 6:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }()));
};
var parsingNewFile = function parsingNewFile() {
  return includes.clear();
};
var parseFence = function parseFence(fence) {
  var _parse;
  var _lex = lex(fence),
    lang = _lex[0],
    tokens = _lex.slice(1);
  // if the language is twoslash and include key is found
  // insert an `=` after include to make it `include=[name]`
  // which yields better meta
  if (lang === "twoslash") {
    // Search for `include` in tokens
    var index = tokens.indexOf("include");
    if (index !== -1) {
      tokens.splice(index + 1, 0, "=");
    }
  }
  var meta = (_parse = parse(tokens)) != null ? _parse : {};
  return {
    lang: (lang || "").toString(),
    meta: meta
  };
};
/**
 * Synchronous outer function, async inner function, which is how the remark
 * async API works.
 */
function remarkTwoslash(settings) {
  if (settings === void 0) {
    settings = {};
  }
  if (!highlighterCache.has(settings)) {
    highlighterCache.set(settings, highlightersFromSettings(settings));
  }
  var transform = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(markdownAST) {
      var highlighters;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return highlighterCache.get(settings);
          case 2:
            highlighters = _context2.sent;
            parsingNewFile();
            visit(markdownAST, "code", remarkVisitor(highlighters, settings));
          case 5:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function transform(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  return transform;
}
/**
 * The function doing the work of transforming any codeblock samples in a remark AST.
 */
function remarkVisitor(highlighters, twoslashSettings) {
  if (twoslashSettings === void 0) {
    twoslashSettings = {};
  }
  return /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(node) {
      var code, fence, twoslashError, twoslash, shouldAlwaysRaise, yeahButNotInTests, shikiHTML;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            code = node.value;
            fence = undefined;
            _context3.prev = 2;
            fence = parseFence([node.lang, node.meta].filter(Boolean).join(" "));
            _context3.next = 10;
            break;
          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](2);
            twoslashError = new TwoslashError("Codefence error", "Could not parse the codefence for this code sample", "It's usually an unclosed string", code);
            return _context3.abrupt("return", setupNodeForTwoslashException(code, node, twoslashError));
          case 10:
            if (!(Object.keys(fence.meta).filter(function (key) {
              return (twoslashSettings.ignoreCodeblocksWithCodefenceMeta || []).includes(key);
            }).length > 0)) {
              _context3.next = 12;
              break;
            }
            return _context3.abrupt("return");
          case 12:
            _context3.prev = 12;
            _context3.t1 = node.twoslash;
            if (_context3.t1) {
              _context3.next = 18;
              break;
            }
            _context3.next = 17;
            return runTwoSlashOnNode(code, fence, twoslashSettings);
          case 17:
            _context3.t1 = _context3.sent;
          case 18:
            twoslash = _context3.t1;
            _context3.next = 30;
            break;
          case 21:
            _context3.prev = 21;
            _context3.t2 = _context3["catch"](12);
            shouldAlwaysRaise = process && process.env && !!process.env.CI;
            yeahButNotInTests = typeof jest === "undefined";
            if (!(shouldAlwaysRaise && yeahButNotInTests || twoslashSettings.alwayRaiseForTwoslashExceptions)) {
              _context3.next = 29;
              break;
            }
            throw _context3.t2;
          case 29:
            return _context3.abrupt("return", setupNodeForTwoslashException(code, node, _context3.t2));
          case 30:
            if (twoslash) {
              node.value = twoslash.code;
              node.lang = twoslash.extension;
              node.twoslash = twoslash;
            }
            shikiHTML = getHTML(node.value, fence, highlighters, twoslash, twoslashSettings);
            node.type = "html";
            node.value = shikiHTML;
            node.children = [];
          case 35:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[2, 6], [12, 21]]);
    }));
    return function (_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
}
// --- The Markdown-it API ---
/** Only the inner function exposed as a synchronous API for markdown-it */
var setupForFile = /*#__PURE__*/function () {
  var _ref5 = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(settings) {
    var highlighters;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (settings === void 0) {
            settings = {};
          }
          parsingNewFile();
          if (!highlighterCache.has(settings)) {
            highlighterCache.set(settings, highlightersFromSettings(settings));
          }
          _context4.next = 5;
          return highlighterCache.get(settings);
        case 5:
          highlighters = _context4.sent;
          return _context4.abrupt("return", {
            settings: settings,
            highlighters: highlighters
          });
        case 7:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function setupForFile(_x4) {
    return _ref5.apply(this, arguments);
  };
}();
function transformAttributesToHTML(_x5, _x6, _x7, _x8) {
  return _transformAttributesToHTML.apply(this, arguments);
}
function _transformAttributesToHTML() {
  _transformAttributesToHTML = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(code, fenceString, highlighters, settings) {
    var fence, twoslash, newCode;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          fence = parseFence(fenceString);
          _context5.next = 3;
          return runTwoSlashOnNode(code, fence, settings);
        case 3:
          twoslash = _context5.sent;
          newCode = twoslash && twoslash.code || code;
          return _context5.abrupt("return", getHTML(newCode, fence, highlighters, twoslash, settings));
        case 6:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _transformAttributesToHTML.apply(this, arguments);
}

export default remarkTwoslash;
export { highlightersFromSettings, remarkVisitor, runTwoSlashOnNode, setupForFile, transformAttributesToHTML };
//# sourceMappingURL=remark-shiki-twoslash.esm.js.map
