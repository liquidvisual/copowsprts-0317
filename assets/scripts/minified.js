var _$$headroom;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

if (function (t, e) {
  "use strict";
  "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = t.document ? e(t, !0) : function (t) {
    if (!t.document) throw new Error("jQuery requires a window with a document");return e(t);
  } : e(t);
}("undefined" != typeof window ? window : this, function (C, t) {
  "use strict";
  function m(t) {
    return null != t && t === t.window;
  }var e = [],
      E = C.document,
      i = Object.getPrototypeOf,
      a = e.slice,
      g = e.concat,
      l = e.push,
      o = e.indexOf,
      n = {},
      r = n.toString,
      v = n.hasOwnProperty,
      s = v.toString,
      u = s.call(Object),
      y = {},
      b = function b(t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      c = { type: !0, src: !0, noModule: !0 };function _(t, e, n) {
    var i,
        o = (e = e || E).createElement("script");if (o.text = t, n) for (i in c) {
      n[i] && (o[i] = n[i]);
    }e.head.appendChild(o).parentNode.removeChild(o);
  }function w(t) {
    return null == t ? t + "" : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t ? n[r.call(t)] || "object" : typeof t === "undefined" ? "undefined" : _typeof(t);
  }var d = "3.3.1",
      T = function T(t, e) {
    return new T.fn.init(t, e);
  },
      f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function h(t) {
    var e = !!t && "length" in t && t.length,
        n = w(t);return !b(t) && !m(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t);
  }T.fn = T.prototype = { jquery: d, constructor: T, length: 0, toArray: function toArray() {
      return a.call(this);
    }, get: function get(t) {
      return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t];
    }, pushStack: function pushStack(t) {
      var e = T.merge(this.constructor(), t);return e.prevObject = this, e;
    }, each: function each(t) {
      return T.each(this, t);
    }, map: function map(n) {
      return this.pushStack(T.map(this, function (t, e) {
        return n.call(t, e, t);
      }));
    }, slice: function slice() {
      return this.pushStack(a.apply(this, arguments));
    }, first: function first() {
      return this.eq(0);
    }, last: function last() {
      return this.eq(-1);
    }, eq: function eq(t) {
      var e = this.length,
          n = +t + (t < 0 ? e : 0);return this.pushStack(0 <= n && n < e ? [this[n]] : []);
    }, end: function end() {
      return this.prevObject || this.constructor();
    }, push: l, sort: e.sort, splice: e.splice }, T.extend = T.fn.extend = function () {
    var t,
        e,
        n,
        i,
        o,
        r,
        s = arguments[0] || {},
        a = 1,
        l = arguments.length,
        u = !1;for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == (typeof s === "undefined" ? "undefined" : _typeof(s)) || b(s) || (s = {}), a === l && (s = this, a--); a < l; a++) {
      if (null != (t = arguments[a])) for (e in t) {
        n = s[e], s !== (i = t[e]) && (u && i && (T.isPlainObject(i) || (o = Array.isArray(i))) ? (r = o ? (o = !1, n && Array.isArray(n) ? n : []) : n && T.isPlainObject(n) ? n : {}, s[e] = T.extend(u, r, i)) : void 0 !== i && (s[e] = i));
      }
    }return s;
  }, T.extend({ expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(t) {
      throw new Error(t);
    }, noop: function noop() {}, isPlainObject: function isPlainObject(t) {
      var e, n;return !(!t || "[object Object]" !== r.call(t)) && (!(e = i(t)) || "function" == typeof (n = v.call(e, "constructor") && e.constructor) && s.call(n) === u);
    }, isEmptyObject: function isEmptyObject(t) {
      var e;for (e in t) {
        return !1;
      }return !0;
    }, globalEval: function globalEval(t) {
      _(t);
    }, each: function each(t, e) {
      var n,
          i = 0;if (h(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++) {} else for (i in t) {
        if (!1 === e.call(t[i], i, t[i])) break;
      }return t;
    }, trim: function trim(t) {
      return null == t ? "" : (t + "").replace(f, "");
    }, makeArray: function makeArray(t, e) {
      var n = e || [];return null != t && (h(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n;
    }, inArray: function inArray(t, e, n) {
      return null == e ? -1 : o.call(e, t, n);
    }, merge: function merge(t, e) {
      for (var n = +e.length, i = 0, o = t.length; i < n; i++) {
        t[o++] = e[i];
      }return t.length = o, t;
    }, grep: function grep(t, e, n) {
      for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) {
        !e(t[o], o) != s && i.push(t[o]);
      }return i;
    }, map: function map(t, e, n) {
      var i,
          o,
          r = 0,
          s = [];if (h(t)) for (i = t.length; r < i; r++) {
        null != (o = e(t[r], r, n)) && s.push(o);
      } else for (r in t) {
        null != (o = e(t[r], r, n)) && s.push(o);
      }return g.apply([], s);
    }, guid: 1, support: y }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = e[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
    n["[object " + e + "]"] = e.toLowerCase();
  });var p = function (n) {
    function d(t, e, n) {
      var i = "0x" + e - 65536;return i != i || n ? e : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    }function o() {
      x();
    }var t,
        h,
        _,
        r,
        s,
        p,
        f,
        m,
        w,
        l,
        u,
        x,
        C,
        a,
        E,
        g,
        c,
        v,
        y,
        T = "sizzle" + 1 * new Date(),
        b = n.document,
        S = 0,
        i = 0,
        I = st(),
        A = st(),
        k = st(),
        D = function D(t, e) {
      return t === e && (u = !0), 0;
    },
        O = {}.hasOwnProperty,
        e = [],
        N = e.pop,
        L = e.push,
        j = e.push,
        P = e.slice,
        H = function H(t, e) {
      for (var n = 0, i = t.length; n < i; n++) {
        if (t[n] === e) return n;
      }return -1;
    },
        z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        W = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        R = "\\[" + M + "*(" + W + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + W + "))|)" + M + "*\\]",
        q = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
        B = new RegExp(M + "+", "g"),
        F = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        U = new RegExp("^" + M + "*," + M + "*"),
        $ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        Q = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        Y = new RegExp(q),
        K = new RegExp("^" + W + "$"),
        V = { ID: new RegExp("^#(" + W + ")"), CLASS: new RegExp("^\\.(" + W + ")"), TAG: new RegExp("^(" + W + "|[*])"), ATTR: new RegExp("^" + R), PSEUDO: new RegExp("^" + q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + z + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
        X = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        Z = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        tt = /[+~]/,
        et = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        it = function it(t, e) {
      return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    },
        ot = yt(function (t) {
      return !0 === t.disabled && ("form" in t || "label" in t);
    }, { dir: "parentNode", next: "legend" });try {
      j.apply(e = P.call(b.childNodes), b.childNodes), e[b.childNodes.length].nodeType;
    } catch (t) {
      j = { apply: e.length ? function (t, e) {
          L.apply(t, P.call(e));
        } : function (t, e) {
          for (var n = t.length, i = 0; t[n++] = e[i++];) {}t.length = n - 1;
        } };
    }function rt(t, e, n, i) {
      var o,
          r,
          s,
          a,
          l,
          u,
          c,
          d = e && e.ownerDocument,
          f = e ? e.nodeType : 9;if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;if (!i && ((e ? e.ownerDocument || e : b) !== C && x(e), e = e || C, E)) {
        if (11 !== f && (l = J.exec(t))) if (o = l[1]) {
          if (9 === f) {
            if (!(s = e.getElementById(o))) return n;if (s.id === o) return n.push(s), n;
          } else if (d && (s = d.getElementById(o)) && y(e, s) && s.id === o) return n.push(s), n;
        } else {
          if (l[2]) return j.apply(n, e.getElementsByTagName(t)), n;if ((o = l[3]) && h.getElementsByClassName && e.getElementsByClassName) return j.apply(n, e.getElementsByClassName(o)), n;
        }if (h.qsa && !k[t + " "] && (!g || !g.test(t))) {
          if (1 !== f) d = e, c = t;else if ("object" !== e.nodeName.toLowerCase()) {
            for ((a = e.getAttribute("id")) ? a = a.replace(nt, it) : e.setAttribute("id", a = T), r = (u = p(t)).length; r--;) {
              u[r] = "#" + a + " " + vt(u[r]);
            }c = u.join(","), d = tt.test(t) && mt(e.parentNode) || e;
          }if (c) try {
            return j.apply(n, d.querySelectorAll(c)), n;
          } catch (t) {} finally {
            a === T && e.removeAttribute("id");
          }
        }
      }return m(t.replace(F, "$1"), e, n, i);
    }function st() {
      var i = [];return function t(e, n) {
        return i.push(e + " ") > _.cacheLength && delete t[i.shift()], t[e + " "] = n;
      };
    }function at(t) {
      return t[T] = !0, t;
    }function lt(t) {
      var e = C.createElement("fieldset");try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), e = null;
      }
    }function ut(t, e) {
      for (var n = t.split("|"), i = n.length; i--;) {
        _.attrHandle[n[i]] = e;
      }
    }function ct(t, e) {
      var n = e && t,
          i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) {
        if (n === e) return -1;
      }return t ? 1 : -1;
    }function dt(e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }function ft(n) {
      return function (t) {
        var e = t.nodeName.toLowerCase();return ("input" === e || "button" === e) && t.type === n;
      };
    }function ht(e) {
      return function (t) {
        return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ot(t) === e : t.disabled === e : "label" in t && t.disabled === e;
      };
    }function pt(s) {
      return at(function (r) {
        return r = +r, at(function (t, e) {
          for (var n, i = s([], t.length, r), o = i.length; o--;) {
            t[n = i[o]] && (t[n] = !(e[n] = t[n]));
          }
        });
      });
    }function mt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }for (t in h = rt.support = {}, s = rt.isXML = function (t) {
      var e = t && (t.ownerDocument || t).documentElement;return !!e && "HTML" !== e.nodeName;
    }, x = rt.setDocument = function (t) {
      var e,
          n,
          i = t ? t.ownerDocument || t : b;return i !== C && 9 === i.nodeType && i.documentElement && (a = (C = i).documentElement, E = !s(C), b !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", o, !1) : n.attachEvent && n.attachEvent("onunload", o)), h.attributes = lt(function (t) {
        return t.className = "i", !t.getAttribute("className");
      }), h.getElementsByTagName = lt(function (t) {
        return t.appendChild(C.createComment("")), !t.getElementsByTagName("*").length;
      }), h.getElementsByClassName = Z.test(C.getElementsByClassName), h.getById = lt(function (t) {
        return a.appendChild(t).id = T, !C.getElementsByName || !C.getElementsByName(T).length;
      }), h.getById ? (_.filter.ID = function (t) {
        var e = t.replace(et, d);return function (t) {
          return t.getAttribute("id") === e;
        };
      }, _.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && E) {
          var n = e.getElementById(t);return n ? [n] : [];
        }
      }) : (_.filter.ID = function (t) {
        var n = t.replace(et, d);return function (t) {
          var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");return e && e.value === n;
        };
      }, _.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && E) {
          var n,
              i,
              o,
              r = e.getElementById(t);if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === t) return [r];for (o = e.getElementsByName(t), i = 0; r = o[i++];) {
              if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
            }
          }return [];
        }
      }), _.find.TAG = h.getElementsByTagName ? function (t, e) {
        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : h.qsa ? e.querySelectorAll(t) : void 0;
      } : function (t, e) {
        var n,
            i = [],
            o = 0,
            r = e.getElementsByTagName(t);if ("*" !== t) return r;for (; n = r[o++];) {
          1 === n.nodeType && i.push(n);
        }return i;
      }, _.find.CLASS = h.getElementsByClassName && function (t, e) {
        if (void 0 !== e.getElementsByClassName && E) return e.getElementsByClassName(t);
      }, c = [], g = [], (h.qsa = Z.test(C.querySelectorAll)) && (lt(function (t) {
        a.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + M + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + M + "*(?:value|" + z + ")"), t.querySelectorAll("[id~=" + T + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + T + "+*").length || g.push(".#.+[+~]");
      }), lt(function (t) {
        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e = C.createElement("input");e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + M + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), a.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:");
      })), (h.matchesSelector = Z.test(v = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && lt(function (t) {
        h.disconnectedMatch = v.call(t, "*"), v.call(t, "[s!='']:x"), c.push("!=", q);
      }), g = g.length && new RegExp(g.join("|")), c = c.length && new RegExp(c.join("|")), e = Z.test(a.compareDocumentPosition), y = e || Z.test(a.contains) ? function (t, e) {
        var n = 9 === t.nodeType ? t.documentElement : t,
            i = e && e.parentNode;return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
      } : function (t, e) {
        if (e) for (; e = e.parentNode;) {
          if (e === t) return !0;
        }return !1;
      }, D = e ? function (t, e) {
        if (t === e) return u = !0, 0;var n = !t.compareDocumentPosition - !e.compareDocumentPosition;return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !h.sortDetached && e.compareDocumentPosition(t) === n ? t === C || t.ownerDocument === b && y(b, t) ? -1 : e === C || e.ownerDocument === b && y(b, e) ? 1 : l ? H(l, t) - H(l, e) : 0 : 4 & n ? -1 : 1);
      } : function (t, e) {
        if (t === e) return u = !0, 0;var n,
            i = 0,
            o = t.parentNode,
            r = e.parentNode,
            s = [t],
            a = [e];if (!o || !r) return t === C ? -1 : e === C ? 1 : o ? -1 : r ? 1 : l ? H(l, t) - H(l, e) : 0;if (o === r) return ct(t, e);for (n = t; n = n.parentNode;) {
          s.unshift(n);
        }for (n = e; n = n.parentNode;) {
          a.unshift(n);
        }for (; s[i] === a[i];) {
          i++;
        }return i ? ct(s[i], a[i]) : s[i] === b ? -1 : a[i] === b ? 1 : 0;
      }), C;
    }, rt.matches = function (t, e) {
      return rt(t, null, null, e);
    }, rt.matchesSelector = function (t, e) {
      if ((t.ownerDocument || t) !== C && x(t), e = e.replace(Q, "='$1']"), h.matchesSelector && E && !k[e + " "] && (!c || !c.test(e)) && (!g || !g.test(e))) try {
        var n = v.call(t, e);if (n || h.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n;
      } catch (t) {}return 0 < rt(e, C, null, [t]).length;
    }, rt.contains = function (t, e) {
      return (t.ownerDocument || t) !== C && x(t), y(t, e);
    }, rt.attr = function (t, e) {
      (t.ownerDocument || t) !== C && x(t);var n = _.attrHandle[e.toLowerCase()],
          i = n && O.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !E) : void 0;return void 0 !== i ? i : h.attributes || !E ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
    }, rt.escape = function (t) {
      return (t + "").replace(nt, it);
    }, rt.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }, rt.uniqueSort = function (t) {
      var e,
          n = [],
          i = 0,
          o = 0;if (u = !h.detectDuplicates, l = !h.sortStable && t.slice(0), t.sort(D), u) {
        for (; e = t[o++];) {
          e === t[o] && (i = n.push(o));
        }for (; i--;) {
          t.splice(n[i], 1);
        }
      }return l = null, t;
    }, r = rt.getText = function (t) {
      var e,
          n = "",
          i = 0,
          o = t.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof t.textContent) return t.textContent;for (t = t.firstChild; t; t = t.nextSibling) {
            n += r(t);
          }
        } else if (3 === o || 4 === o) return t.nodeValue;
      } else for (; e = t[i++];) {
        n += r(e);
      }return n;
    }, (_ = rt.selectors = { cacheLength: 50, createPseudo: at, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(t) {
          return t[1] = t[1].replace(et, d), t[3] = (t[3] || t[4] || t[5] || "").replace(et, d), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
        }, CHILD: function CHILD(t) {
          return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t;
        }, PSEUDO: function PSEUDO(t) {
          var e,
              n = !t[6] && t[2];return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && Y.test(n) && (e = p(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3));
        } }, filter: { TAG: function TAG(t) {
          var e = t.replace(et, d).toLowerCase();return "*" === t ? function () {
            return !0;
          } : function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          };
        }, CLASS: function CLASS(t) {
          var e = I[t + " "];return e || (e = new RegExp("(^|" + M + ")" + t + "(" + M + "|$)")) && I(t, function (t) {
            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
          });
        }, ATTR: function ATTR(n, i, o) {
          return function (t) {
            var e = rt.attr(t, n);return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === o : "!=" === i ? e !== o : "^=" === i ? o && 0 === e.indexOf(o) : "*=" === i ? o && -1 < e.indexOf(o) : "$=" === i ? o && e.slice(-o.length) === o : "~=" === i ? -1 < (" " + e.replace(B, " ") + " ").indexOf(o) : "|=" === i && (e === o || e.slice(0, o.length + 1) === o + "-"));
          };
        }, CHILD: function CHILD(p, t, e, m, g) {
          var v = "nth" !== p.slice(0, 3),
              y = "last" !== p.slice(-4),
              b = "of-type" === t;return 1 === m && 0 === g ? function (t) {
            return !!t.parentNode;
          } : function (t, e, n) {
            var i,
                o,
                r,
                s,
                a,
                l,
                u = v != y ? "nextSibling" : "previousSibling",
                c = t.parentNode,
                d = b && t.nodeName.toLowerCase(),
                f = !n && !b,
                h = !1;if (c) {
              if (v) {
                for (; u;) {
                  for (s = t; s = s[u];) {
                    if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                  }l = u = "only" === p && !l && "nextSibling";
                }return !0;
              }if (l = [y ? c.firstChild : c.lastChild], y && f) {
                for (h = (a = (i = (o = (r = (s = c)[T] || (s[T] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (h = a = 0) || l.pop();) {
                  if (1 === s.nodeType && ++h && s === t) {
                    o[p] = [S, a, h];break;
                  }
                }
              } else if (f && (h = a = (i = (o = (r = (s = t)[T] || (s[T] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === h) for (; (s = ++a && s && s[u] || (h = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++h || (f && ((o = (r = s[T] || (s[T] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] = [S, h]), s !== t));) {}return (h -= g) === m || h % m == 0 && 0 <= h / m;
            }
          };
        }, PSEUDO: function PSEUDO(t, r) {
          var e,
              s = _.pseudos[t] || _.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);return s[T] ? s(r) : 1 < s.length ? (e = [t, t, "", r], _.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, e) {
            for (var n, i = s(t, r), o = i.length; o--;) {
              t[n = H(t, i[o])] = !(e[n] = i[o]);
            }
          }) : function (t) {
            return s(t, 0, e);
          }) : s;
        } }, pseudos: { not: at(function (t) {
          var i = [],
              o = [],
              a = f(t.replace(F, "$1"));return a[T] ? at(function (t, e, n, i) {
            for (var o, r = a(t, null, i, []), s = t.length; s--;) {
              (o = r[s]) && (t[s] = !(e[s] = o));
            }
          }) : function (t, e, n) {
            return i[0] = t, a(i, null, n, o), i[0] = null, !o.pop();
          };
        }), has: at(function (e) {
          return function (t) {
            return 0 < rt(e, t).length;
          };
        }), contains: at(function (e) {
          return e = e.replace(et, d), function (t) {
            return -1 < (t.textContent || t.innerText || r(t)).indexOf(e);
          };
        }), lang: at(function (n) {
          return K.test(n || "") || rt.error("unsupported lang: " + n), n = n.replace(et, d).toLowerCase(), function (t) {
            var e;do {
              if (e = E ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function target(t) {
          var e = n.location && n.location.hash;return e && e.slice(1) === t.id;
        }, root: function root(t) {
          return t === a;
        }, focus: function focus(t) {
          return t === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
        }, enabled: ht(!1), disabled: ht(!0), checked: function checked(t) {
          var e = t.nodeName.toLowerCase();return "input" === e && !!t.checked || "option" === e && !!t.selected;
        }, selected: function selected(t) {
          return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
        }, empty: function empty(t) {
          for (t = t.firstChild; t; t = t.nextSibling) {
            if (t.nodeType < 6) return !1;
          }return !0;
        }, parent: function parent(t) {
          return !_.pseudos.empty(t);
        }, header: function header(t) {
          return G.test(t.nodeName);
        }, input: function input(t) {
          return X.test(t.nodeName);
        }, button: function button(t) {
          var e = t.nodeName.toLowerCase();return "input" === e && "button" === t.type || "button" === e;
        }, text: function text(t) {
          var e;return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
        }, first: pt(function () {
          return [0];
        }), last: pt(function (t, e) {
          return [e - 1];
        }), eq: pt(function (t, e, n) {
          return [n < 0 ? n + e : n];
        }), even: pt(function (t, e) {
          for (var n = 0; n < e; n += 2) {
            t.push(n);
          }return t;
        }), odd: pt(function (t, e) {
          for (var n = 1; n < e; n += 2) {
            t.push(n);
          }return t;
        }), lt: pt(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; 0 <= --i;) {
            t.push(i);
          }return t;
        }), gt: pt(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; ++i < e;) {
            t.push(i);
          }return t;
        }) } }).pseudos.nth = _.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
      _.pseudos[t] = dt(t);
    }for (t in { submit: !0, reset: !0 }) {
      _.pseudos[t] = ft(t);
    }function gt() {}function vt(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) {
        i += t[e].value;
      }return i;
    }function yt(a, t, e) {
      var l = t.dir,
          u = t.next,
          c = u || l,
          d = e && "parentNode" === c,
          f = i++;return t.first ? function (t, e, n) {
        for (; t = t[l];) {
          if (1 === t.nodeType || d) return a(t, e, n);
        }return !1;
      } : function (t, e, n) {
        var i,
            o,
            r,
            s = [S, f];if (n) {
          for (; t = t[l];) {
            if ((1 === t.nodeType || d) && a(t, e, n)) return !0;
          }
        } else for (; t = t[l];) {
          if (1 === t.nodeType || d) if (o = (r = t[T] || (t[T] = {}))[t.uniqueID] || (r[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[l] || t;else {
            if ((i = o[c]) && i[0] === S && i[1] === f) return s[2] = i[2];if ((o[c] = s)[2] = a(t, e, n)) return !0;
          }
        }return !1;
      };
    }function bt(o) {
      return 1 < o.length ? function (t, e, n) {
        for (var i = o.length; i--;) {
          if (!o[i](t, e, n)) return !1;
        }return !0;
      } : o[0];
    }function _t(t, e, n, i, o) {
      for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++) {
        (r = t[a]) && (n && !n(r, i, o) || (s.push(r), u && e.push(a)));
      }return s;
    }function wt(h, p, m, g, v, t) {
      return g && !g[T] && (g = wt(g)), v && !v[T] && (v = wt(v, t)), at(function (t, e, n, i) {
        var o,
            r,
            s,
            a = [],
            l = [],
            u = e.length,
            c = t || function (t, e, n) {
          for (var i = 0, o = e.length; i < o; i++) {
            rt(t, e[i], n);
          }return n;
        }(p || "*", n.nodeType ? [n] : n, []),
            d = !h || !t && p ? c : _t(c, a, h, n, i),
            f = m ? v || (t ? h : u || g) ? [] : e : d;if (m && m(d, f, n, i), g) for (o = _t(f, l), g(o, [], n, i), r = o.length; r--;) {
          (s = o[r]) && (f[l[r]] = !(d[l[r]] = s));
        }if (t) {
          if (v || h) {
            if (v) {
              for (o = [], r = f.length; r--;) {
                (s = f[r]) && o.push(d[r] = s);
              }v(null, f = [], o, i);
            }for (r = f.length; r--;) {
              (s = f[r]) && -1 < (o = v ? H(t, s) : a[r]) && (t[o] = !(e[o] = s));
            }
          }
        } else f = _t(f === e ? f.splice(u, f.length) : f), v ? v(null, e, f, i) : j.apply(e, f);
      });
    }function xt(t) {
      for (var o, e, n, i = t.length, r = _.relative[t[0].type], s = r || _.relative[" "], a = r ? 1 : 0, l = yt(function (t) {
        return t === o;
      }, s, !0), u = yt(function (t) {
        return -1 < H(o, t);
      }, s, !0), c = [function (t, e, n) {
        var i = !r && (n || e !== w) || ((o = e).nodeType ? l(t, e, n) : u(t, e, n));return o = null, i;
      }]; a < i; a++) {
        if (e = _.relative[t[a].type]) c = [yt(bt(c), e)];else {
          if ((e = _.filter[t[a].type].apply(null, t[a].matches))[T]) {
            for (n = ++a; n < i && !_.relative[t[n].type]; n++) {}return wt(1 < a && bt(c), 1 < a && vt(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(F, "$1"), e, a < n && xt(t.slice(a, n)), n < i && xt(t = t.slice(n)), n < i && vt(t));
          }c.push(e);
        }
      }return bt(c);
    }return gt.prototype = _.filters = _.pseudos, _.setFilters = new gt(), p = rt.tokenize = function (t, e) {
      var n,
          i,
          o,
          r,
          s,
          a,
          l,
          u = A[t + " "];if (u) return e ? 0 : u.slice(0);for (s = t, a = [], l = _.preFilter; s;) {
        for (r in n && !(i = U.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = $.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(F, " ") }), s = s.slice(n.length)), _.filter) {
          !(i = V[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({ value: n, type: r, matches: i }), s = s.slice(n.length));
        }if (!n) break;
      }return e ? s.length : s ? rt.error(t) : A(t, a).slice(0);
    }, f = rt.compile = function (t, e) {
      var n,
          i = [],
          o = [],
          r = k[t + " "];if (!r) {
        for (n = (e = e || p(t)).length; n--;) {
          (r = xt(e[n]))[T] ? i.push(r) : o.push(r);
        }(r = k(t, function (g, v) {
          function t(t, e, n, i, o) {
            var r,
                s,
                a,
                l = 0,
                u = "0",
                c = t && [],
                d = [],
                f = w,
                h = t || b && _.find.TAG("*", o),
                p = S += null == f ? 1 : Math.random() || .1,
                m = h.length;for (o && (w = e === C || e || o); u !== m && null != (r = h[u]); u++) {
              if (b && r) {
                for (s = 0, e || r.ownerDocument === C || (x(r), n = !E); a = g[s++];) {
                  if (a(r, e || C, n)) {
                    i.push(r);break;
                  }
                }o && (S = p);
              }y && ((r = !a && r) && l--, t && c.push(r));
            }if (l += u, y && u !== l) {
              for (s = 0; a = v[s++];) {
                a(c, d, e, n);
              }if (t) {
                if (0 < l) for (; u--;) {
                  c[u] || d[u] || (d[u] = N.call(i));
                }d = _t(d);
              }j.apply(i, d), o && !t && 0 < d.length && 1 < l + v.length && rt.uniqueSort(i);
            }return o && (S = p, w = f), c;
          }var y = 0 < v.length,
              b = 0 < g.length;return y ? at(t) : t;
        }(o, i))).selector = t;
      }return r;
    }, m = rt.select = function (t, e, n, i) {
      var o,
          r,
          s,
          a,
          l,
          u = "function" == typeof t && t,
          c = !i && p(t = u.selector || t);if (n = n || [], 1 === c.length) {
        if (2 < (r = c[0] = c[0].slice(0)).length && "ID" === (s = r[0]).type && 9 === e.nodeType && E && _.relative[r[1].type]) {
          if (!(e = (_.find.ID(s.matches[0].replace(et, d), e) || [])[0])) return n;u && (e = e.parentNode), t = t.slice(r.shift().value.length);
        }for (o = V.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !_.relative[a = s.type]);) {
          if ((l = _.find[a]) && (i = l(s.matches[0].replace(et, d), tt.test(r[0].type) && mt(e.parentNode) || e))) {
            if (r.splice(o, 1), !(t = i.length && vt(r))) return j.apply(n, i), n;break;
          }
        }
      }return (u || f(t, c))(i, e, !E, n, !e || tt.test(t) && mt(e.parentNode) || e), n;
    }, h.sortStable = T.split("").sort(D).join("") === T, h.detectDuplicates = !!u, x(), h.sortDetached = lt(function (t) {
      return 1 & t.compareDocumentPosition(C.createElement("fieldset"));
    }), lt(function (t) {
      return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href");
    }) || ut("type|href|height|width", function (t, e, n) {
      if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
    }), h.attributes && lt(function (t) {
      return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
    }) || ut("value", function (t, e, n) {
      if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
    }), lt(function (t) {
      return null == t.getAttribute("disabled");
    }) || ut(z, function (t, e, n) {
      var i;if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
    }), rt;
  }(C);T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains, T.escapeSelector = p.escape;function x(t, e, n) {
    for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) {
      if (1 === t.nodeType) {
        if (o && T(t).is(n)) break;i.push(t);
      }
    }return i;
  }function S(t, e) {
    for (var n = []; t; t = t.nextSibling) {
      1 === t.nodeType && t !== e && n.push(t);
    }return n;
  }var I = T.expr.match.needsContext;function A(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(t, n, i) {
    return b(n) ? T.grep(t, function (t, e) {
      return !!n.call(t, e, t) !== i;
    }) : n.nodeType ? T.grep(t, function (t) {
      return t === n !== i;
    }) : "string" != typeof n ? T.grep(t, function (t) {
      return -1 < o.call(n, t) !== i;
    }) : T.filter(n, t, i);
  }T.filter = function (t, e, n) {
    var i = e[0];return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? T.find.matchesSelector(i, t) ? [i] : [] : T.find.matches(t, T.grep(e, function (t) {
      return 1 === t.nodeType;
    }));
  }, T.fn.extend({ find: function find(t) {
      var e,
          n,
          i = this.length,
          o = this;if ("string" != typeof t) return this.pushStack(T(t).filter(function () {
        for (e = 0; e < i; e++) {
          if (T.contains(o[e], this)) return !0;
        }
      }));for (n = this.pushStack([]), e = 0; e < i; e++) {
        T.find(t, o[e], n);
      }return 1 < i ? T.uniqueSort(n) : n;
    }, filter: function filter(t) {
      return this.pushStack(D(this, t || [], !1));
    }, not: function not(t) {
      return this.pushStack(D(this, t || [], !0));
    }, is: function is(t) {
      return !!D(this, "string" == typeof t && I.test(t) ? T(t) : t || [], !1).length;
    } });var O,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init = function (t, e, n) {
    var i, o;if (!t) return this;if (n = n || O, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : b(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this);if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : N.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);if (i[1]) {
      if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : E, !0)), k.test(i[1]) && T.isPlainObject(e)) for (i in e) {
        b(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
      }return this;
    }return (o = E.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
  }).prototype = T.fn, O = T(E);var L = /^(?:parents|prev(?:Until|All))/,
      j = { children: !0, contents: !0, next: !0, prev: !0 };function P(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType;) {}return t;
  }T.fn.extend({ has: function has(t) {
      var e = T(t, this),
          n = e.length;return this.filter(function () {
        for (var t = 0; t < n; t++) {
          if (T.contains(this, e[t])) return !0;
        }
      });
    }, closest: function closest(t, e) {
      var n,
          i = 0,
          o = this.length,
          r = [],
          s = "string" != typeof t && T(t);if (!I.test(t)) for (; i < o; i++) {
        for (n = this[i]; n && n !== e; n = n.parentNode) {
          if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
            r.push(n);break;
          }
        }
      }return this.pushStack(1 < r.length ? T.uniqueSort(r) : r);
    }, index: function index(t) {
      return t ? "string" == typeof t ? o.call(T(t), this[0]) : o.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function add(t, e) {
      return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))));
    }, addBack: function addBack(t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    } }), T.each({ parent: function parent(t) {
      var e = t.parentNode;return e && 11 !== e.nodeType ? e : null;
    }, parents: function parents(t) {
      return x(t, "parentNode");
    }, parentsUntil: function parentsUntil(t, e, n) {
      return x(t, "parentNode", n);
    }, next: function next(t) {
      return P(t, "nextSibling");
    }, prev: function prev(t) {
      return P(t, "previousSibling");
    }, nextAll: function nextAll(t) {
      return x(t, "nextSibling");
    }, prevAll: function prevAll(t) {
      return x(t, "previousSibling");
    }, nextUntil: function nextUntil(t, e, n) {
      return x(t, "nextSibling", n);
    }, prevUntil: function prevUntil(t, e, n) {
      return x(t, "previousSibling", n);
    }, siblings: function siblings(t) {
      return S((t.parentNode || {}).firstChild, t);
    }, children: function children(t) {
      return S(t.firstChild);
    }, contents: function contents(t) {
      return A(t, "iframe") ? t.contentDocument : (A(t, "template") && (t = t.content || t), T.merge([], t.childNodes));
    } }, function (i, o) {
    T.fn[i] = function (t, e) {
      var n = T.map(this, o, t);return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = T.filter(e, n)), 1 < this.length && (j[i] || T.uniqueSort(n), L.test(i) && n.reverse()), this.pushStack(n);
    };
  });var H = /[^\x20\t\r\n\f]+/g;function z(t) {
    return t;
  }function M(t) {
    throw t;
  }function W(t, e, n, i) {
    var o;try {
      t && b(o = t.promise) ? o.call(t).done(e).fail(n) : t && b(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i));
    } catch (t) {
      n.apply(void 0, [t]);
    }
  }T.Callbacks = function (i) {
    i = "string" == typeof i ? function (t) {
      var n = {};return T.each(t.match(H) || [], function (t, e) {
        n[e] = !0;
      }), n;
    }(i) : T.extend({}, i);function n() {
      for (r = r || i.once, e = o = !0; a.length; l = -1) {
        for (t = a.shift(); ++l < s.length;) {
          !1 === s[l].apply(t[0], t[1]) && i.stopOnFalse && (l = s.length, t = !1);
        }
      }i.memory || (t = !1), o = !1, r && (s = t ? [] : "");
    }var o,
        t,
        e,
        r,
        s = [],
        a = [],
        l = -1,
        u = { add: function add() {
        return s && (t && !o && (l = s.length - 1, a.push(t)), function n(t) {
          T.each(t, function (t, e) {
            b(e) ? i.unique && u.has(e) || s.push(e) : e && e.length && "string" !== w(e) && n(e);
          });
        }(arguments), t && !o && n()), this;
      }, remove: function remove() {
        return T.each(arguments, function (t, e) {
          for (var n; -1 < (n = T.inArray(e, s, n));) {
            s.splice(n, 1), n <= l && l--;
          }
        }), this;
      }, has: function has(t) {
        return t ? -1 < T.inArray(t, s) : 0 < s.length;
      }, empty: function empty() {
        return s = s && [], this;
      }, disable: function disable() {
        return r = a = [], s = t = "", this;
      }, disabled: function disabled() {
        return !s;
      }, lock: function lock() {
        return r = a = [], t || o || (s = t = ""), this;
      }, locked: function locked() {
        return !!r;
      }, fireWith: function fireWith(t, e) {
        return r || (e = [t, (e = e || []).slice ? e.slice() : e], a.push(e), o || n()), this;
      }, fire: function fire() {
        return u.fireWith(this, arguments), this;
      }, fired: function fired() {
        return !!e;
      } };return u;
  }, T.extend({ Deferred: function Deferred(t) {
      var r = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
          o = "pending",
          s = { state: function state() {
          return o;
        }, always: function always() {
          return a.done(arguments).fail(arguments), this;
        }, catch: function _catch(t) {
          return s.then(null, t);
        }, pipe: function pipe() {
          var o = arguments;return T.Deferred(function (i) {
            T.each(r, function (t, e) {
              var n = b(o[e[4]]) && o[e[4]];a[e[1]](function () {
                var t = n && n.apply(this, arguments);t && b(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments);
              });
            }), o = null;
          }).promise();
        }, then: function then(e, n, i) {
          var l = 0;function u(o, r, s, a) {
            return function () {
              function t() {
                var t, e;if (!(o < l)) {
                  if ((t = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");e = t && ("object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) || "function" == typeof t) && t.then, b(e) ? a ? e.call(t, u(l, r, z, a), u(l, r, M, a)) : (l++, e.call(t, u(l, r, z, a), u(l, r, M, a), u(l, r, z, r.notifyWith))) : (s !== z && (n = void 0, i = [t]), (a || r.resolveWith)(n, i));
                }
              }var n = this,
                  i = arguments,
                  e = a ? t : function () {
                try {
                  t();
                } catch (t) {
                  T.Deferred.exceptionHook && T.Deferred.exceptionHook(t, e.stackTrace), l <= o + 1 && (s !== M && (n = void 0, i = [t]), r.rejectWith(n, i));
                }
              };o ? e() : (T.Deferred.getStackHook && (e.stackTrace = T.Deferred.getStackHook()), C.setTimeout(e));
            };
          }return T.Deferred(function (t) {
            r[0][3].add(u(0, t, b(i) ? i : z, t.notifyWith)), r[1][3].add(u(0, t, b(e) ? e : z)), r[2][3].add(u(0, t, b(n) ? n : M));
          }).promise();
        }, promise: function promise(t) {
          return null != t ? T.extend(t, s) : s;
        } },
          a = {};return T.each(r, function (t, e) {
        var n = e[2],
            i = e[5];s[e[1]] = n.add, i && n.add(function () {
          o = i;
        }, r[3 - t][2].disable, r[3 - t][3].disable, r[0][2].lock, r[0][3].lock), n.add(e[3].fire), a[e[0]] = function () {
          return a[e[0] + "With"](this === a ? void 0 : this, arguments), this;
        }, a[e[0] + "With"] = n.fireWith;
      }), s.promise(a), t && t.call(a, a), a;
    }, when: function when(t) {
      function e(e) {
        return function (t) {
          o[e] = this, r[e] = 1 < arguments.length ? a.call(arguments) : t, --n || s.resolveWith(o, r);
        };
      }var n = arguments.length,
          i = n,
          o = Array(i),
          r = a.call(arguments),
          s = T.Deferred();if (n <= 1 && (W(t, s.done(e(i)).resolve, s.reject, !n), "pending" === s.state() || b(r[i] && r[i].then))) return s.then();for (; i--;) {
        W(r[i], e(i), s.reject);
      }return s.promise();
    } });var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook = function (t, e) {
    C.console && C.console.warn && t && R.test(t.name) && C.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
  }, T.readyException = function (t) {
    C.setTimeout(function () {
      throw t;
    });
  };var q = T.Deferred();function B() {
    E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), T.ready();
  }T.fn.ready = function (t) {
    return q.then(t).catch(function (t) {
      T.readyException(t);
    }), this;
  }, T.extend({ isReady: !1, readyWait: 1, ready: function ready(t) {
      (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0) !== t && 0 < --T.readyWait || q.resolveWith(E, [T]);
    } }), T.ready.then = q.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(T.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));var F = function F(t, e, n, i, o, r, s) {
    var a = 0,
        l = t.length,
        u = null == n;if ("object" === w(n)) for (a in o = !0, n) {
      F(t, e, a, n[a], !0, r, s);
    } else if (void 0 !== i && (o = !0, b(i) || (s = !0), u && (e = s ? (e.call(t, i), null) : (u = e, function (t, e, n) {
      return u.call(T(t), n);
    })), e)) for (; a < l; a++) {
      e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
    }return o ? t : u ? e.call(t) : l ? e(t[0], n) : r;
  },
      U = /^-ms-/,
      $ = /-([a-z])/g;function Q(t, e) {
    return e.toUpperCase();
  }function Y(t) {
    return t.replace(U, "ms-").replace($, Q);
  }function K(t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  }function V() {
    this.expando = T.expando + V.uid++;
  }V.uid = 1, V.prototype = { cache: function cache(t) {
      var e = t[this.expando];return e || (e = {}, K(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
    }, set: function set(t, e, n) {
      var i,
          o = this.cache(t);if ("string" == typeof e) o[Y(e)] = n;else for (i in e) {
        o[Y(i)] = e[i];
      }return o;
    }, get: function get(t, e) {
      return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)];
    }, access: function access(t, e, n) {
      return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
    }, remove: function remove(t, e) {
      var n,
          i = t[this.expando];if (void 0 !== i) {
        if (void 0 !== e) {
          n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(H) || []).length;for (; n--;) {
            delete i[e[n]];
          }
        }void 0 !== e && !T.isEmptyObject(i) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
      }
    }, hasData: function hasData(t) {
      var e = t[this.expando];return void 0 !== e && !T.isEmptyObject(e);
    } };var X = new V(),
      G = new V(),
      Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      J = /[A-Z]/g;function tt(t, e, n) {
    var i;if (void 0 === n && 1 === t.nodeType) if (i = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(i))) {
      try {
        n = function (t) {
          return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Z.test(t) ? JSON.parse(t) : t);
        }(n);
      } catch (t) {}G.set(t, e, n);
    } else n = void 0;return n;
  }T.extend({ hasData: function hasData(t) {
      return G.hasData(t) || X.hasData(t);
    }, data: function data(t, e, n) {
      return G.access(t, e, n);
    }, removeData: function removeData(t, e) {
      G.remove(t, e);
    }, _data: function _data(t, e, n) {
      return X.access(t, e, n);
    }, _removeData: function _removeData(t, e) {
      X.remove(t, e);
    } }), T.fn.extend({ data: function data(n, t) {
      var e,
          i,
          o,
          r = this[0],
          s = r && r.attributes;if (void 0 !== n) return "object" == (typeof n === "undefined" ? "undefined" : _typeof(n)) ? this.each(function () {
        G.set(this, n);
      }) : F(this, function (t) {
        var e;if (r && void 0 === t) return void 0 !== (e = G.get(r, n)) ? e : void 0 !== (e = tt(r, n)) ? e : void 0;this.each(function () {
          G.set(this, n, t);
        });
      }, null, t, 1 < arguments.length, null, !0);if (this.length && (o = G.get(r), 1 === r.nodeType && !X.get(r, "hasDataAttrs"))) {
        for (e = s.length; e--;) {
          s[e] && 0 === (i = s[e].name).indexOf("data-") && (i = Y(i.slice(5)), tt(r, i, o[i]));
        }X.set(r, "hasDataAttrs", !0);
      }return o;
    }, removeData: function removeData(t) {
      return this.each(function () {
        G.remove(this, t);
      });
    } }), T.extend({ queue: function queue(t, e, n) {
      var i;if (t) return e = (e || "fx") + "queue", i = X.get(t, e), n && (!i || Array.isArray(n) ? i = X.access(t, e, T.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function dequeue(t, e) {
      e = e || "fx";var n = T.queue(t, e),
          i = n.length,
          o = n.shift(),
          r = T._queueHooks(t, e);"inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function () {
        T.dequeue(t, e);
      }, r)), !i && r && r.empty.fire();
    }, _queueHooks: function _queueHooks(t, e) {
      var n = e + "queueHooks";return X.get(t, n) || X.access(t, n, { empty: T.Callbacks("once memory").add(function () {
          X.remove(t, [e + "queue", n]);
        }) });
    } }), T.fn.extend({ queue: function queue(e, n) {
      var t = 2;return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? T.queue(this[0], e) : void 0 === n ? this : this.each(function () {
        var t = T.queue(this, e, n);T._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e);
      });
    }, dequeue: function dequeue(t) {
      return this.each(function () {
        T.dequeue(this, t);
      });
    }, clearQueue: function clearQueue(t) {
      return this.queue(t || "fx", []);
    }, promise: function promise(t, e) {
      function n() {
        --o || r.resolveWith(s, [s]);
      }var i,
          o = 1,
          r = T.Deferred(),
          s = this,
          a = this.length;for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) {
        (i = X.get(s[a], t + "queueHooks")) && i.empty && (o++, i.empty.add(n));
      }return n(), r.promise(e);
    } });function et(t, e, n, i) {
    var o,
        r,
        s = {};for (r in e) {
      s[r] = t.style[r], t.style[r] = e[r];
    }for (r in o = n.apply(t, i || []), e) {
      t.style[r] = s[r];
    }return o;
  }var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      it = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
      ot = ["Top", "Right", "Bottom", "Left"],
      rt = function rt(t, e) {
    return "none" === (t = e || t).style.display || "" === t.style.display && T.contains(t.ownerDocument, t) && "none" === T.css(t, "display");
  };function st(t, e, n, i) {
    var o,
        r,
        s = 20,
        a = i ? function () {
      return i.cur();
    } : function () {
      return T.css(t, e, "");
    },
        l = a(),
        u = n && n[3] || (T.cssNumber[e] ? "" : "px"),
        c = (T.cssNumber[e] || "px" !== u && +l) && it.exec(T.css(t, e));if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; s--;) {
        T.style(t, e, c + u), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), c /= r;
      }c *= 2, T.style(t, e, c + u), n = n || [];
    }return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o;
  }var at = {};function lt(t, e) {
    for (var n, i, o, r, s, a, l, u = [], c = 0, d = t.length; c < d; c++) {
      (i = t[c]).style && (n = i.style.display, e ? ("none" === n && (u[c] = X.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && rt(i) && (u[c] = (l = s = r = void 0, s = (o = i).ownerDocument, a = o.nodeName, (l = at[a]) || (r = s.body.appendChild(s.createElement(a)), l = T.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), at[a] = l)))) : "none" !== n && (u[c] = "none", X.set(i, "display", n)));
    }for (c = 0; c < d; c++) {
      null != u[c] && (t[c].style.display = u[c]);
    }return t;
  }T.fn.extend({ show: function show() {
      return lt(this, !0);
    }, hide: function hide() {
      return lt(this);
    }, toggle: function toggle(t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
        rt(this) ? T(this).show() : T(this).hide();
      });
    } });var ut = /^(?:checkbox|radio)$/i,
      ct = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      dt = /^$|^module$|\/(?:java|ecma)script/i,
      ft = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function ht(t, e) {
    var n;return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && A(t, e) ? T.merge([t], n) : n;
  }function pt(t, e) {
    for (var n = 0, i = t.length; n < i; n++) {
      X.set(t[n], "globalEval", !e || X.get(e[n], "globalEval"));
    }
  }ft.optgroup = ft.option, ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead, ft.th = ft.td;var mt,
      gt,
      vt = /<|&#?\w+;/;function yt(t, e, n, i, o) {
    for (var r, s, a, l, u, c, d = e.createDocumentFragment(), f = [], h = 0, p = t.length; h < p; h++) {
      if ((r = t[h]) || 0 === r) if ("object" === w(r)) T.merge(f, r.nodeType ? [r] : r);else if (vt.test(r)) {
        for (s = s || d.appendChild(e.createElement("div")), a = (ct.exec(r) || ["", ""])[1].toLowerCase(), l = ft[a] || ft._default, s.innerHTML = l[1] + T.htmlPrefilter(r) + l[2], c = l[0]; c--;) {
          s = s.lastChild;
        }T.merge(f, s.childNodes), (s = d.firstChild).textContent = "";
      } else f.push(e.createTextNode(r));
    }for (d.textContent = "", h = 0; r = f[h++];) {
      if (i && -1 < T.inArray(r, i)) o && o.push(r);else if (u = T.contains(r.ownerDocument, r), s = ht(d.appendChild(r), "script"), u && pt(s), n) for (c = 0; r = s[c++];) {
        dt.test(r.type || "") && n.push(r);
      }
    }return d;
  }mt = E.createDocumentFragment().appendChild(E.createElement("div")), (gt = E.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), mt.appendChild(gt), y.checkClone = mt.cloneNode(!0).cloneNode(!0).lastChild.checked, mt.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!mt.cloneNode(!0).lastChild.defaultValue;var bt = E.documentElement,
      _t = /^key/,
      wt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      xt = /^([^.]*)(?:\.(.+)|)/;function Ct() {
    return !0;
  }function Et() {
    return !1;
  }function Tt() {
    try {
      return E.activeElement;
    } catch (t) {}
  }function St(t, e, n, i, o, r) {
    var s, a;if ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e))) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), e) {
        St(t, a, n, i, e[a], r);
      }return t;
    }if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Et;else if (!o) return t;return 1 === r && (s = o, (o = function o(t) {
      return T().off(t), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = T.guid++)), t.each(function () {
      T.event.add(this, e, o, i, n);
    });
  }T.event = { global: {}, add: function add(e, t, n, i, o) {
      var r,
          s,
          a,
          l,
          u,
          c,
          d,
          f,
          h,
          p,
          m,
          g = X.get(e);if (g) for (n.handler && (n = (r = n).handler, o = r.selector), o && T.find.matchesSelector(bt, o), n.guid || (n.guid = T.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function (t) {
        return void 0 !== T && T.event.triggered !== t.type ? T.event.dispatch.apply(e, arguments) : void 0;
      }), u = (t = (t || "").match(H) || [""]).length; u--;) {
        h = m = (a = xt.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h && (d = T.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = T.event.special[h] || {}, c = T.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && T.expr.match.needsContext.test(o), namespace: p.join(".") }, r), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), T.event.global[h] = !0);
      }
    }, remove: function remove(t, e, n, i, o) {
      var r,
          s,
          a,
          l,
          u,
          c,
          d,
          f,
          h,
          p,
          m,
          g = X.hasData(t) && X.get(t);if (g && (l = g.events)) {
        for (u = (e = (e || "").match(H) || [""]).length; u--;) {
          if (h = m = (a = xt.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
            for (d = T.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) {
              c = f[r], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(r, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(t, c));
            }s && !f.length && (d.teardown && !1 !== d.teardown.call(t, p, g.handle) || T.removeEvent(t, h, g.handle), delete l[h]);
          } else for (h in l) {
            T.event.remove(t, h + e[u], n, i, !0);
          }
        }T.isEmptyObject(l) && X.remove(t, "handle events");
      }
    }, dispatch: function dispatch(t) {
      var e,
          n,
          i,
          o,
          r,
          s,
          a = T.event.fix(t),
          l = new Array(arguments.length),
          u = (X.get(this, "events") || {})[a.type] || [],
          c = T.event.special[a.type] || {};for (l[0] = a, e = 1; e < arguments.length; e++) {
        l[e] = arguments[e];
      }if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
        for (s = T.event.handlers.call(this, a, u), e = 0; (o = s[e++]) && !a.isPropagationStopped();) {
          for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) {
            a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((T.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));
          }
        }return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    }, handlers: function handlers(t, e) {
      var n,
          i,
          o,
          r,
          s,
          a = [],
          l = e.delegateCount,
          u = t.target;if (l && u.nodeType && !("click" === t.type && 1 <= t.button)) for (; u !== this; u = u.parentNode || this) {
        if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
          for (r = [], s = {}, n = 0; n < l; n++) {
            void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? -1 < T(o, this).index(u) : T.find(o, this, null, [u]).length), s[o] && r.push(i);
          }r.length && a.push({ elem: u, handlers: r });
        }
      }return u = this, l < e.length && a.push({ elem: u, handlers: e.slice(l) }), a;
    }, addProp: function addProp(e, t) {
      Object.defineProperty(T.Event.prototype, e, { enumerable: !0, configurable: !0, get: b(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function set(t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function fix(t) {
      return t[T.expando] ? t : new T.Event(t);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
          if (this !== Tt() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function trigger() {
          if (this === Tt() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function trigger() {
          if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1;
        }, _default: function _default(t) {
          return A(t.target, "a");
        } }, beforeunload: { postDispatch: function postDispatch(t) {
          void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
        } } } }, T.removeEvent = function (t, e, n) {
    t.removeEventListener && t.removeEventListener(e, n);
  }, T.Event = function (t, e) {
    if (!(this instanceof T.Event)) return new T.Event(t, e);t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ct : Et, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0;
  }, T.Event.prototype = { constructor: T.Event, isDefaultPrevented: Et, isPropagationStopped: Et, isImmediatePropagationStopped: Et, isSimulated: !1, preventDefault: function preventDefault() {
      var t = this.originalEvent;this.isDefaultPrevented = Ct, t && !this.isSimulated && t.preventDefault();
    }, stopPropagation: function stopPropagation() {
      var t = this.originalEvent;this.isPropagationStopped = Ct, t && !this.isSimulated && t.stopPropagation();
    }, stopImmediatePropagation: function stopImmediatePropagation() {
      var t = this.originalEvent;this.isImmediatePropagationStopped = Ct, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
    } }, T.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(t) {
      var e = t.button;return null == t.which && _t.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && wt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
    } }, T.event.addProp), T.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, o) {
    T.event.special[t] = { delegateType: o, bindType: o, handle: function handle(t) {
        var e,
            n = t.relatedTarget,
            i = t.handleObj;return n && (n === this || T.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = o), e;
      } };
  }), T.fn.extend({ on: function on(t, e, n, i) {
      return St(this, t, e, n, i);
    }, one: function one(t, e, n, i) {
      return St(this, t, e, n, i, 1);
    }, off: function off(t, e, n) {
      var i, o;if (t && t.preventDefault && t.handleObj) return i = t.handleObj, T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" != (typeof t === "undefined" ? "undefined" : _typeof(t))) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Et), this.each(function () {
        T.event.remove(this, t, n, e);
      });for (o in t) {
        this.off(o, e, t[o]);
      }return this;
    } });var It = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      At = /<script|<style|<link/i,
      kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ot(t, e) {
    return A(t, "table") && A(11 !== e.nodeType ? e : e.firstChild, "tr") && T(t).children("tbody")[0] || t;
  }function Nt(t) {
    return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t;
  }function Lt(t) {
    return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t;
  }function jt(t, e) {
    var n, i, o, r, s, a, l, u;if (1 === e.nodeType) {
      if (X.hasData(t) && (r = X.access(t), s = X.set(e, r), u = r.events)) for (o in delete s.handle, s.events = {}, u) {
        for (n = 0, i = u[o].length; n < i; n++) {
          T.event.add(e, o, u[o][n]);
        }
      }G.hasData(t) && (a = G.access(t), l = T.extend({}, a), G.set(e, l));
    }
  }function Pt(n, i, o, r) {
    i = g.apply([], i);var t,
        e,
        s,
        a,
        l,
        u,
        c = 0,
        d = n.length,
        f = d - 1,
        h = i[0],
        p = b(h);if (p || 1 < d && "string" == typeof h && !y.checkClone && kt.test(h)) return n.each(function (t) {
      var e = n.eq(t);p && (i[0] = h.call(this, t, e.html())), Pt(e, i, o, r);
    });if (d && (e = (t = yt(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === t.childNodes.length && (t = e), e || r)) {
      for (a = (s = T.map(ht(t, "script"), Nt)).length; c < d; c++) {
        l = t, c !== f && (l = T.clone(l, !0, !0), a && T.merge(s, ht(l, "script"))), o.call(n[c], l, c);
      }if (a) for (u = s[s.length - 1].ownerDocument, T.map(s, Lt), c = 0; c < a; c++) {
        l = s[c], dt.test(l.type || "") && !X.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : _(l.textContent.replace(Dt, ""), u, l));
      }
    }return n;
  }function Ht(t, e, n) {
    for (var i, o = e ? T.filter(e, t) : t, r = 0; null != (i = o[r]); r++) {
      n || 1 !== i.nodeType || T.cleanData(ht(i)), i.parentNode && (n && T.contains(i.ownerDocument, i) && pt(ht(i, "script")), i.parentNode.removeChild(i));
    }return t;
  }T.extend({ htmlPrefilter: function htmlPrefilter(t) {
      return t.replace(It, "<$1></$2>");
    }, clone: function clone(t, e, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          u,
          c = t.cloneNode(!0),
          d = T.contains(t.ownerDocument, t);if (!(y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t))) for (s = ht(c), i = 0, o = (r = ht(t)).length; i < o; i++) {
        a = r[i], l = s[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && ut.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);
      }if (e) if (n) for (r = r || ht(t), s = s || ht(c), i = 0, o = r.length; i < o; i++) {
        jt(r[i], s[i]);
      } else jt(t, c);return 0 < (s = ht(c, "script")).length && pt(s, !d && ht(t, "script")), c;
    }, cleanData: function cleanData(t) {
      for (var e, n, i, o = T.event.special, r = 0; void 0 !== (n = t[r]); r++) {
        if (K(n)) {
          if (e = n[X.expando]) {
            if (e.events) for (i in e.events) {
              o[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);
            }n[X.expando] = void 0;
          }n[G.expando] && (n[G.expando] = void 0);
        }
      }
    } }), T.fn.extend({ detach: function detach(t) {
      return Ht(this, t, !0);
    }, remove: function remove(t) {
      return Ht(this, t);
    }, text: function text(t) {
      return F(this, function (t) {
        return void 0 === t ? T.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
        });
      }, null, t, arguments.length);
    }, append: function append() {
      return Pt(this, arguments, function (t) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t);
      });
    }, prepend: function prepend() {
      return Pt(this, arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = Ot(this, t);e.insertBefore(t, e.firstChild);
        }
      });
    }, before: function before() {
      return Pt(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this);
      });
    }, after: function after() {
      return Pt(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
      });
    }, empty: function empty() {
      for (var t, e = 0; null != (t = this[e]); e++) {
        1 === t.nodeType && (T.cleanData(ht(t, !1)), t.textContent = "");
      }return this;
    }, clone: function clone(t, e) {
      return t = null != t && t, e = null == e ? t : e, this.map(function () {
        return T.clone(this, t, e);
      });
    }, html: function html(t) {
      return F(this, function (t) {
        var e = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === t && 1 === e.nodeType) return e.innerHTML;if ("string" == typeof t && !At.test(t) && !ft[(ct.exec(t) || ["", ""])[1].toLowerCase()]) {
          t = T.htmlPrefilter(t);try {
            for (; n < i; n++) {
              1 === (e = this[n] || {}).nodeType && (T.cleanData(ht(e, !1)), e.innerHTML = t);
            }e = 0;
          } catch (t) {}
        }e && this.empty().append(t);
      }, null, t, arguments.length);
    }, replaceWith: function replaceWith() {
      var n = [];return Pt(this, arguments, function (t) {
        var e = this.parentNode;T.inArray(this, n) < 0 && (T.cleanData(ht(this)), e && e.replaceChild(t, this));
      }, n);
    } }), T.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, s) {
    T.fn[t] = function (t) {
      for (var e, n = [], i = T(t), o = i.length - 1, r = 0; r <= o; r++) {
        e = r === o ? this : this.clone(!0), T(i[r])[s](e), l.apply(n, e.get());
      }return this.pushStack(n);
    };
  });var zt,
      Mt,
      Wt,
      Rt,
      qt,
      Bt,
      Ft,
      Ut = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
      $t = function $t(t) {
    var e = t.ownerDocument.defaultView;return e && e.opener || (e = C), e.getComputedStyle(t);
  },
      Qt = new RegExp(ot.join("|"), "i");function Yt() {
    if (Ft) {
      Bt.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", Ft.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", bt.appendChild(Bt).appendChild(Ft);var t = C.getComputedStyle(Ft);zt = "1%" !== t.top, qt = 12 === Kt(t.marginLeft), Ft.style.right = "60%", Rt = 36 === Kt(t.right), Mt = 36 === Kt(t.width), Ft.style.position = "absolute", Wt = 36 === Ft.offsetWidth || "absolute", bt.removeChild(Bt), Ft = null;
    }
  }function Kt(t) {
    return Math.round(parseFloat(t));
  }function Vt(t, e, n) {
    var i,
        o,
        r,
        s,
        a = t.style;return (n = n || $t(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || T.contains(t.ownerDocument, t) || (s = T.style(t, e)), !y.pixelBoxStyles() && Ut.test(s) && Qt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
  }function Xt(t, e) {
    return { get: function get() {
        if (!t()) return (this.get = e).apply(this, arguments);delete this.get;
      } };
  }Bt = E.createElement("div"), (Ft = E.createElement("div")).style && (Ft.style.backgroundClip = "content-box", Ft.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Ft.style.backgroundClip, T.extend(y, { boxSizingReliable: function boxSizingReliable() {
      return Yt(), Mt;
    }, pixelBoxStyles: function pixelBoxStyles() {
      return Yt(), Rt;
    }, pixelPosition: function pixelPosition() {
      return Yt(), zt;
    }, reliableMarginLeft: function reliableMarginLeft() {
      return Yt(), qt;
    }, scrollboxSize: function scrollboxSize() {
      return Yt(), Wt;
    } }));var Gt = /^(none|table(?!-c[ea]).+)/,
      Zt = /^--/,
      Jt = { position: "absolute", visibility: "hidden", display: "block" },
      te = { letterSpacing: "0", fontWeight: "400" },
      ee = ["Webkit", "Moz", "ms"],
      ne = E.createElement("div").style;function ie(t) {
    var e = T.cssProps[t];return e = e || (T.cssProps[t] = function (t) {
      if (t in ne) return t;for (var e = t[0].toUpperCase() + t.slice(1), n = ee.length; n--;) {
        if ((t = ee[n] + e) in ne) return t;
      }
    }(t) || t);
  }function oe(t, e, n) {
    var i = it.exec(e);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
  }function re(t, e, n, i, o, r) {
    var s = "width" === e ? 1 : 0,
        a = 0,
        l = 0;if (n === (i ? "border" : "content")) return 0;for (; s < 4; s += 2) {
      "margin" === n && (l += T.css(t, n + ot[s], !0, o)), i ? ("content" === n && (l -= T.css(t, "padding" + ot[s], !0, o)), "margin" !== n && (l -= T.css(t, "border" + ot[s] + "Width", !0, o))) : (l += T.css(t, "padding" + ot[s], !0, o), "padding" !== n ? l += T.css(t, "border" + ot[s] + "Width", !0, o) : a += T.css(t, "border" + ot[s] + "Width", !0, o));
    }return !i && 0 <= r && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5))), l;
  }function se(t, e, n) {
    var i = $t(t),
        o = Vt(t, e, i),
        r = "border-box" === T.css(t, "boxSizing", !1, i),
        s = r;if (Ut.test(o)) {
      if (!n) return o;o = "auto";
    }return s = s && (y.boxSizingReliable() || o === t.style[e]), "auto" !== o && (parseFloat(o) || "inline" !== T.css(t, "display", !1, i)) || (o = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), (o = parseFloat(o) || 0) + re(t, e, n || (r ? "border" : "content"), s, i, o) + "px";
  }function ae(t, e, n, i, o) {
    return new ae.prototype.init(t, e, n, i, o);
  }T.extend({ cssHooks: { opacity: { get: function get(t, e) {
          if (e) {
            var n = Vt(t, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function style(t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
            r,
            s,
            a = Y(e),
            l = Zt.test(e),
            u = t.style;if (l || (e = ie(a)), s = T.cssHooks[e] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : u[e];"string" === (r = typeof n === "undefined" ? "undefined" : _typeof(n)) && (o = it.exec(n)) && o[1] && (n = st(t, e, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (T.cssNumber[a] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n));
      }
    }, css: function css(t, e, n, i) {
      var o,
          r,
          s,
          a = Y(e);return Zt.test(e) || (e = ie(a)), (s = T.cssHooks[e] || T.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Vt(t, e, i)), "normal" === o && e in te && (o = te[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
    } }), T.each(["height", "width"], function (t, a) {
    T.cssHooks[a] = { get: function get(t, e, n) {
        if (e) return !Gt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? se(t, a, n) : et(t, Jt, function () {
          return se(t, a, n);
        });
      }, set: function set(t, e, n) {
        var i,
            o = $t(t),
            r = "border-box" === T.css(t, "boxSizing", !1, o),
            s = n && re(t, a, n, r, o);return r && y.scrollboxSize() === o.position && (s -= Math.ceil(t["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - re(t, a, "border", !1, o) - .5)), s && (i = it.exec(e)) && "px" !== (i[3] || "px") && (t.style[a] = e, e = T.css(t, a)), oe(0, e, s);
      } };
  }), T.cssHooks.marginLeft = Xt(y.reliableMarginLeft, function (t, e) {
    if (e) return (parseFloat(Vt(t, "marginLeft")) || t.getBoundingClientRect().left - et(t, { marginLeft: 0 }, function () {
      return t.getBoundingClientRect().left;
    })) + "px";
  }), T.each({ margin: "", padding: "", border: "Width" }, function (o, r) {
    T.cssHooks[o + r] = { expand: function expand(t) {
        for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) {
          n[o + ot[e] + r] = i[e] || i[e - 2] || i[0];
        }return n;
      } }, "margin" !== o && (T.cssHooks[o + r].set = oe);
  }), T.fn.extend({ css: function css(t, e) {
      return F(this, function (t, e, n) {
        var i,
            o,
            r = {},
            s = 0;if (Array.isArray(e)) {
          for (i = $t(t), o = e.length; s < o; s++) {
            r[e[s]] = T.css(t, e[s], !1, i);
          }return r;
        }return void 0 !== n ? T.style(t, e, n) : T.css(t, e);
      }, t, e, 1 < arguments.length);
    } }), ((T.Tween = ae).prototype = { constructor: ae, init: function init(t, e, n, i, o, r) {
      this.elem = t, this.prop = n, this.easing = o || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (T.cssNumber[n] ? "" : "px");
    }, cur: function cur() {
      var t = ae.propHooks[this.prop];return t && t.get ? t.get(this) : ae.propHooks._default.get(this);
    }, run: function run(t) {
      var e,
          n = ae.propHooks[this.prop];return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ae.propHooks._default.set(this), this;
    } }).init.prototype = ae.prototype, (ae.propHooks = { _default: { get: function get(t) {
        var e;return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
      }, set: function set(t) {
        T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[T.cssProps[t.prop]] && !T.cssHooks[t.prop] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit);
      } } }).scrollTop = ae.propHooks.scrollLeft = { set: function set(t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
    } }, T.easing = { linear: function linear(t) {
      return t;
    }, swing: function swing(t) {
      return .5 - Math.cos(t * Math.PI) / 2;
    }, _default: "swing" }, T.fx = ae.prototype.init, T.fx.step = {};var le,
      ue,
      ce,
      de,
      fe = /^(?:toggle|show|hide)$/,
      he = /queueHooks$/;function pe() {
    ue && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(pe) : C.setTimeout(pe, T.fx.interval), T.fx.tick());
  }function me() {
    return C.setTimeout(function () {
      le = void 0;
    }), le = Date.now();
  }function ge(t, e) {
    var n,
        i = 0,
        o = { height: t };for (e = e ? 1 : 0; i < 4; i += 2 - e) {
      o["margin" + (n = ot[i])] = o["padding" + n] = t;
    }return e && (o.opacity = o.width = t), o;
  }function ve(t, e, n) {
    for (var i, o = (ye.tweeners[e] || []).concat(ye.tweeners["*"]), r = 0, s = o.length; r < s; r++) {
      if (i = o[r].call(n, e, t)) return i;
    }
  }function ye(r, t, e) {
    var n,
        s,
        i = 0,
        o = ye.prefilters.length,
        a = T.Deferred().always(function () {
      delete l.elem;
    }),
        l = function l() {
      if (s) return !1;for (var t = le || me(), e = Math.max(0, u.startTime + u.duration - t), n = 1 - (e / u.duration || 0), i = 0, o = u.tweens.length; i < o; i++) {
        u.tweens[i].run(n);
      }return a.notifyWith(r, [u, n, e]), n < 1 && o ? e : (o || a.notifyWith(r, [u, 1, 0]), a.resolveWith(r, [u]), !1);
    },
        u = a.promise({ elem: r, props: T.extend({}, t), opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, e), originalProperties: t, originalOptions: e, startTime: le || me(), duration: e.duration, tweens: [], createTween: function createTween(t, e) {
        var n = T.Tween(r, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(n), n;
      }, stop: function stop(t) {
        var e = 0,
            n = t ? u.tweens.length : 0;if (s) return this;for (s = !0; e < n; e++) {
          u.tweens[e].run(1);
        }return t ? (a.notifyWith(r, [u, 1, 0]), a.resolveWith(r, [u, t])) : a.rejectWith(r, [u, t]), this;
      } }),
        c = u.props;for (!function (t, e) {
      var n, i, o, r, s;for (n in t) {
        if (o = e[i = Y(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = T.cssHooks[i]) && ("expand" in s)) for (n in r = s.expand(r), delete t[i], r) {
          (n in t) || (t[n] = r[n], e[n] = o);
        } else e[i] = o;
      }
    }(c, u.opts.specialEasing); i < o; i++) {
      if (n = ye.prefilters[i].call(u, r, c, u.opts)) return b(n.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
    }return T.map(c, ve, u), b(u.opts.start) && u.opts.start.call(r, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, { elem: r, anim: u, queue: u.opts.queue })), u;
  }T.Animation = T.extend(ye, { tweeners: { "*": [function (t, e) {
        var n = this.createTween(t, e);return st(n.elem, t, it.exec(e), n), n;
      }] }, tweener: function tweener(t, e) {
      for (var n, i = 0, o = (t = b(t) ? (e = t, ["*"]) : t.match(H)).length; i < o; i++) {
        n = t[i], ye.tweeners[n] = ye.tweeners[n] || [], ye.tweeners[n].unshift(e);
      }
    }, prefilters: [function (t, e, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          u,
          c,
          d = "width" in e || "height" in e,
          f = this,
          h = {},
          p = t.style,
          m = t.nodeType && rt(t),
          g = X.get(t, "fxshow");for (i in n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, f.always(function () {
        f.always(function () {
          s.unqueued--, T.queue(t, "fx").length || s.empty.fire();
        });
      })), e) {
        if (o = e[i], fe.test(o)) {
          if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
            if ("show" !== o || !g || void 0 === g[i]) continue;m = !0;
          }h[i] = g && g[i] || T.style(t, i);
        }
      }if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(h)) for (i in d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = X.get(t, "display")), "none" === (c = T.css(t, "display")) && (u ? c = u : (lt([t], !0), u = t.style.display || u, c = T.css(t, "display"), lt([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(t, "float") && (l || (f.done(function () {
        p.display = u;
      }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, h) {
        l || (g ? "hidden" in g && (m = g.hidden) : g = X.access(t, "fxshow", { display: u }), r && (g.hidden = !m), m && lt([t], !0), f.done(function () {
          for (i in m || lt([t]), X.remove(t, "fxshow"), h) {
            T.style(t, i, h[i]);
          }
        })), l = ve(m ? g[i] : 0, i, f), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
      }
    }], prefilter: function prefilter(t, e) {
      e ? ye.prefilters.unshift(t) : ye.prefilters.push(t);
    } }), T.speed = function (t, e, n) {
    var i = t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? T.extend({}, t) : { complete: n || !n && e || b(t) && t, duration: t, easing: n && e || e && !b(e) && e };return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      b(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
    }, i;
  }, T.fn.extend({ fadeTo: function fadeTo(t, e, n, i) {
      return this.filter(rt).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
    }, animate: function animate(e, t, n, i) {
      function o() {
        var t = ye(this, T.extend({}, e), s);(r || X.get(this, "finish")) && t.stop(!0);
      }var r = T.isEmptyObject(e),
          s = T.speed(t, n, i);return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o);
    }, stop: function stop(o, t, r) {
      function s(t) {
        var e = t.stop;delete t.stop, e(r);
      }return "string" != typeof o && (r = t, t = o, o = void 0), t && !1 !== o && this.queue(o || "fx", []), this.each(function () {
        var t = !0,
            e = null != o && o + "queueHooks",
            n = T.timers,
            i = X.get(this);if (e) i[e] && i[e].stop && s(i[e]);else for (e in i) {
          i[e] && i[e].stop && he.test(e) && s(i[e]);
        }for (e = n.length; e--;) {
          n[e].elem !== this || null != o && n[e].queue !== o || (n[e].anim.stop(r), t = !1, n.splice(e, 1));
        }!t && r || T.dequeue(this, o);
      });
    }, finish: function finish(s) {
      return !1 !== s && (s = s || "fx"), this.each(function () {
        var t,
            e = X.get(this),
            n = e[s + "queue"],
            i = e[s + "queueHooks"],
            o = T.timers,
            r = n ? n.length : 0;for (e.finish = !0, T.queue(this, s, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
          o[t].elem === this && o[t].queue === s && (o[t].anim.stop(!0), o.splice(t, 1));
        }for (t = 0; t < r; t++) {
          n[t] && n[t].finish && n[t].finish.call(this);
        }delete e.finish;
      });
    } }), T.each(["toggle", "show", "hide"], function (t, i) {
    var o = T.fn[i];T.fn[i] = function (t, e, n) {
      return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(ge(i, !0), t, e, n);
    };
  }), T.each({ slideDown: ge("show"), slideUp: ge("hide"), slideToggle: ge("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, i) {
    T.fn[t] = function (t, e, n) {
      return this.animate(i, t, e, n);
    };
  }), T.timers = [], T.fx.tick = function () {
    var t,
        e = 0,
        n = T.timers;for (le = Date.now(); e < n.length; e++) {
      (t = n[e])() || n[e] !== t || n.splice(e--, 1);
    }n.length || T.fx.stop(), le = void 0;
  }, T.fx.timer = function (t) {
    T.timers.push(t), T.fx.start();
  }, T.fx.interval = 13, T.fx.start = function () {
    ue || (ue = !0, pe());
  }, T.fx.stop = function () {
    ue = null;
  }, T.fx.speeds = { slow: 600, fast: 200, _default: 400 }, T.fn.delay = function (i, t) {
    return i = T.fx && T.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
      var n = C.setTimeout(t, i);e.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, ce = E.createElement("input"), de = E.createElement("select").appendChild(E.createElement("option")), ce.type = "checkbox", y.checkOn = "" !== ce.value, y.optSelected = de.selected, (ce = E.createElement("input")).value = "t", ce.type = "radio", y.radioValue = "t" === ce.value;var be,
      _e = T.expr.attrHandle;T.fn.extend({ attr: function attr(t, e) {
      return F(this, T.attr, t, e, 1 < arguments.length);
    }, removeAttr: function removeAttr(t) {
      return this.each(function () {
        T.removeAttr(this, t);
      });
    } }), T.extend({ attr: function attr(t, e, n) {
      var i,
          o,
          r = t.nodeType;if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === r && T.isXMLDoc(t) || (o = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? be : void 0)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = T.find.attr(t, e)) ? void 0 : i);
    }, attrHooks: { type: { set: function set(t, e) {
          if (!y.radioValue && "radio" === e && A(t, "input")) {
            var n = t.value;return t.setAttribute("type", e), n && (t.value = n), e;
          }
        } } }, removeAttr: function removeAttr(t, e) {
      var n,
          i = 0,
          o = e && e.match(H);if (o && 1 === t.nodeType) for (; n = o[i++];) {
        t.removeAttribute(n);
      }
    } }), be = { set: function set(t, e, n) {
      return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n;
    } }, T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
    var s = _e[e] || T.find.attr;_e[e] = function (t, e, n) {
      var i,
          o,
          r = e.toLowerCase();return n || (o = _e[r], _e[r] = i, i = null != s(t, e, n) ? r : null, _e[r] = o), i;
    };
  });var we = /^(?:input|select|textarea|button)$/i,
      xe = /^(?:a|area)$/i;function Ce(t) {
    return (t.match(H) || []).join(" ");
  }function Ee(t) {
    return t.getAttribute && t.getAttribute("class") || "";
  }function Te(t) {
    return Array.isArray(t) ? t : "string" == typeof t && t.match(H) || [];
  }T.fn.extend({ prop: function prop(t, e) {
      return F(this, T.prop, t, e, 1 < arguments.length);
    }, removeProp: function removeProp(t) {
      return this.each(function () {
        delete this[T.propFix[t] || t];
      });
    } }), T.extend({ prop: function prop(t, e, n) {
      var i,
          o,
          r = t.nodeType;if (3 !== r && 8 !== r && 2 !== r) return 1 === r && T.isXMLDoc(t) || (e = T.propFix[e] || e, o = T.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e];
    }, propHooks: { tabIndex: { get: function get(t) {
          var e = T.find.attr(t, "tabindex");return e ? parseInt(e, 10) : we.test(t.nodeName) || xe.test(t.nodeName) && t.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), y.optSelected || (T.propHooks.selected = { get: function get(t) {
      var e = t.parentNode;return e && e.parentNode && e.parentNode.selectedIndex, null;
    }, set: function set(t) {
      var e = t.parentNode;e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
    } }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    T.propFix[this.toLowerCase()] = this;
  }), T.fn.extend({ addClass: function addClass(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (b(e)) return this.each(function (t) {
        T(this).addClass(e.call(this, t, Ee(this)));
      });if ((t = Te(e)).length) for (; n = this[l++];) {
        if (o = Ee(n), i = 1 === n.nodeType && " " + Ce(o) + " ") {
          for (s = 0; r = t[s++];) {
            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
          }o !== (a = Ce(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, removeClass: function removeClass(e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (b(e)) return this.each(function (t) {
        T(this).removeClass(e.call(this, t, Ee(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = Te(e)).length) for (; n = this[l++];) {
        if (o = Ee(n), i = 1 === n.nodeType && " " + Ce(o) + " ") {
          for (s = 0; r = t[s++];) {
            for (; -1 < i.indexOf(" " + r + " ");) {
              i = i.replace(" " + r + " ", " ");
            }
          }o !== (a = Ce(i)) && n.setAttribute("class", a);
        }
      }return this;
    }, toggleClass: function toggleClass(o, e) {
      var r = typeof o === "undefined" ? "undefined" : _typeof(o),
          s = "string" == r || Array.isArray(o);return "boolean" == typeof e && s ? e ? this.addClass(o) : this.removeClass(o) : b(o) ? this.each(function (t) {
        T(this).toggleClass(o.call(this, t, Ee(this), e), e);
      }) : this.each(function () {
        var t, e, n, i;if (s) for (e = 0, n = T(this), i = Te(o); t = i[e++];) {
          n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
        } else void 0 !== o && "boolean" != r || ((t = Ee(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === o ? "" : X.get(this, "__className__") || ""));
      });
    }, hasClass: function hasClass(t) {
      var e,
          n,
          i = 0;for (e = " " + t + " "; n = this[i++];) {
        if (1 === n.nodeType && -1 < (" " + Ce(Ee(n)) + " ").indexOf(e)) return !0;
      }return !1;
    } });var Se = /\r/g;T.fn.extend({ val: function val(n) {
      var i,
          t,
          o,
          e = this[0];return arguments.length ? (o = b(n), this.each(function (t) {
        var e;1 === this.nodeType && (null == (e = o ? n.call(this, t, T(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = T.map(e, function (t) {
          return null == t ? "" : t + "";
        })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e));
      })) : e ? (i = T.valHooks[e.type] || T.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(Se, "") : null == t ? "" : t : void 0;
    } }), T.extend({ valHooks: { option: { get: function get(t) {
          var e = T.find.attr(t, "value");return null != e ? e : Ce(T.text(t));
        } }, select: { get: function get(t) {
          var e,
              n,
              i,
              o = t.options,
              r = t.selectedIndex,
              s = "select-one" === t.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;for (i = r < 0 ? l : s ? r : 0; i < l; i++) {
            if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
              if (e = T(n).val(), s) return e;a.push(e);
            }
          }return a;
        }, set: function set(t, e) {
          for (var n, i, o = t.options, r = T.makeArray(e), s = o.length; s--;) {
            ((i = o[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), r)) && (n = !0);
          }return n || (t.selectedIndex = -1), r;
        } } } }), T.each(["radio", "checkbox"], function () {
    T.valHooks[this] = { set: function set(t, e) {
        if (Array.isArray(e)) return t.checked = -1 < T.inArray(T(t).val(), e);
      } }, y.checkOn || (T.valHooks[this].get = function (t) {
      return null === t.getAttribute("value") ? "on" : t.value;
    });
  }), y.focusin = "onfocusin" in C;function Ie(t) {
    t.stopPropagation();
  }var Ae = /^(?:focusinfocus|focusoutblur)$/;T.extend(T.event, { trigger: function trigger(t, e, n, i) {
      var o,
          r,
          s,
          a,
          l,
          u,
          c,
          d,
          f = [n || E],
          h = v.call(t, "type") ? t.type : t,
          p = v.call(t, "namespace") ? t.namespace.split(".") : [];if (r = d = s = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !Ae.test(h + T.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (t = t[T.expando] ? t : new T.Event(h, "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t)).isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : T.makeArray(e, [t]), c = T.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
        if (!i && !c.noBubble && !m(n)) {
          for (a = c.delegateType || h, Ae.test(a + h) || (r = r.parentNode); r; r = r.parentNode) {
            f.push(r), s = r;
          }s === (n.ownerDocument || E) && f.push(s.defaultView || s.parentWindow || C);
        }for (o = 0; (r = f[o++]) && !t.isPropagationStopped();) {
          d = r, t.type = 1 < o ? a : c.bindType || h, (u = (X.get(r, "events") || {})[t.type] && X.get(r, "handle")) && u.apply(r, e), (u = l && r[l]) && u.apply && K(r) && (t.result = u.apply(r, e), !1 === t.result && t.preventDefault());
        }return t.type = h, i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), e) || !K(n) || l && b(n[h]) && !m(n) && ((s = n[l]) && (n[l] = null), T.event.triggered = h, t.isPropagationStopped() && d.addEventListener(h, Ie), n[h](), t.isPropagationStopped() && d.removeEventListener(h, Ie), T.event.triggered = void 0, s && (n[l] = s)), t.result;
      }
    }, simulate: function simulate(t, e, n) {
      var i = T.extend(new T.Event(), n, { type: t, isSimulated: !0 });T.event.trigger(i, null, e);
    } }), T.fn.extend({ trigger: function trigger(t, e) {
      return this.each(function () {
        T.event.trigger(t, e, this);
      });
    }, triggerHandler: function triggerHandler(t, e) {
      var n = this[0];if (n) return T.event.trigger(t, e, n, !0);
    } }), y.focusin || T.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
    function o(t) {
      T.event.simulate(i, t.target, T.event.fix(t));
    }T.event.special[i] = { setup: function setup() {
        var t = this.ownerDocument || this,
            e = X.access(t, i);e || t.addEventListener(n, o, !0), X.access(t, i, (e || 0) + 1);
      }, teardown: function teardown() {
        var t = this.ownerDocument || this,
            e = X.access(t, i) - 1;e ? X.access(t, i, e) : (t.removeEventListener(n, o, !0), X.remove(t, i));
      } };
  });var ke = C.location,
      De = Date.now(),
      Oe = /\?/;T.parseXML = function (t) {
    var e;if (!t || "string" != typeof t) return null;try {
      e = new C.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {
      e = void 0;
    }return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e;
  };var Ne = /\[\]$/,
      Le = /\r?\n/g,
      je = /^(?:submit|button|image|reset|file)$/i,
      Pe = /^(?:input|select|textarea|keygen)/i;function He(n, t, i, o) {
    var e;if (Array.isArray(t)) T.each(t, function (t, e) {
      i || Ne.test(n) ? o(n, e) : He(n + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && null != e ? t : "") + "]", e, i, o);
    });else if (i || "object" !== w(t)) o(n, t);else for (e in t) {
      He(n + "[" + e + "]", t[e], i, o);
    }
  }T.param = function (t, e) {
    function n(t, e) {
      var n = b(e) ? e() : e;o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
    }var i,
        o = [];if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function () {
      n(this.name, this.value);
    });else for (i in t) {
      He(i, t[i], e, n);
    }return o.join("&");
  }, T.fn.extend({ serialize: function serialize() {
      return T.param(this.serializeArray());
    }, serializeArray: function serializeArray() {
      return this.map(function () {
        var t = T.prop(this, "elements");return t ? T.makeArray(t) : this;
      }).filter(function () {
        var t = this.type;return this.name && !T(this).is(":disabled") && Pe.test(this.nodeName) && !je.test(t) && (this.checked || !ut.test(t));
      }).map(function (t, e) {
        var n = T(this).val();return null == n ? null : Array.isArray(n) ? T.map(n, function (t) {
          return { name: e.name, value: t.replace(Le, "\r\n") };
        }) : { name: e.name, value: n.replace(Le, "\r\n") };
      }).get();
    } });var ze = /%20/g,
      Me = /#.*$/,
      We = /([?&])_=[^&]*/,
      Re = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      qe = /^(?:GET|HEAD)$/,
      Be = /^\/\//,
      Fe = {},
      Ue = {},
      $e = "*/".concat("*"),
      Qe = E.createElement("a");function Ye(r) {
    return function (t, e) {
      "string" != typeof t && (e = t, t = "*");var n,
          i = 0,
          o = t.toLowerCase().match(H) || [];if (b(e)) for (; n = o[i++];) {
        "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(e)) : (r[n] = r[n] || []).push(e);
      }
    };
  }function Ke(e, o, r, s) {
    var a = {},
        l = e === Ue;function u(t) {
      var i;return a[t] = !0, T.each(e[t] || [], function (t, e) {
        var n = e(o, r, s);return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), u(n), !1);
      }), i;
    }return u(o.dataTypes[0]) || !a["*"] && u("*");
  }function Ve(t, e) {
    var n,
        i,
        o = T.ajaxSettings.flatOptions || {};for (n in e) {
      void 0 !== e[n] && ((o[n] ? t : i = i || {})[n] = e[n]);
    }return i && T.extend(!0, t, i), t;
  }Qe.href = ke.href, T.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ke.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ke.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": $e, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(t, e) {
      return e ? Ve(Ve(t, T.ajaxSettings), e) : Ve(T.ajaxSettings, t);
    }, ajaxPrefilter: Ye(Fe), ajaxTransport: Ye(Ue), ajax: function ajax(t, e) {
      "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && (e = t, t = void 0), e = e || {};var c,
          d,
          f,
          n,
          h,
          i,
          p,
          m,
          o,
          r,
          g = T.ajaxSetup({}, e),
          v = g.context || g,
          y = g.context && (v.nodeType || v.jquery) ? T(v) : T.event,
          b = T.Deferred(),
          _ = T.Callbacks("once memory"),
          w = g.statusCode || {},
          s = {},
          a = {},
          l = "canceled",
          x = { readyState: 0, getResponseHeader: function getResponseHeader(t) {
          var e;if (p) {
            if (!n) for (n = {}; e = Re.exec(f);) {
              n[e[1].toLowerCase()] = e[2];
            }e = n[t.toLowerCase()];
          }return null == e ? null : e;
        }, getAllResponseHeaders: function getAllResponseHeaders() {
          return p ? f : null;
        }, setRequestHeader: function setRequestHeader(t, e) {
          return null == p && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t, s[t] = e), this;
        }, overrideMimeType: function overrideMimeType(t) {
          return null == p && (g.mimeType = t), this;
        }, statusCode: function statusCode(t) {
          var e;if (t) if (p) x.always(t[x.status]);else for (e in t) {
            w[e] = [w[e], t[e]];
          }return this;
        }, abort: function abort(t) {
          var e = t || l;return c && c.abort(e), u(0, e), this;
        } };if (b.promise(x), g.url = ((t || g.url || ke.href) + "").replace(Be, ke.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(H) || [""], null == g.crossDomain) {
        i = E.createElement("a");try {
          i.href = g.url, i.href = i.href, g.crossDomain = Qe.protocol + "//" + Qe.host != i.protocol + "//" + i.host;
        } catch (t) {
          g.crossDomain = !0;
        }
      }if (g.data && g.processData && "string" != typeof g.data && (g.data = T.param(g.data, g.traditional)), Ke(Fe, g, e, x), p) return x;for (o in (m = T.event && g.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !qe.test(g.type), d = g.url.replace(Me, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(ze, "+")) : (r = g.url.slice(d.length), g.data && (g.processData || "string" == typeof g.data) && (d += (Oe.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (d = d.replace(We, "$1"), r = (Oe.test(d) ? "&" : "?") + "_=" + De++ + r), g.url = d + r), g.ifModified && (T.lastModified[d] && x.setRequestHeader("If-Modified-Since", T.lastModified[d]), T.etag[d] && x.setRequestHeader("If-None-Match", T.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && x.setRequestHeader("Content-Type", g.contentType), x.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : g.accepts["*"]), g.headers) {
        x.setRequestHeader(o, g.headers[o]);
      }if (g.beforeSend && (!1 === g.beforeSend.call(v, x, g) || p)) return x.abort();if (l = "abort", _.add(g.complete), x.done(g.success), x.fail(g.error), c = Ke(Ue, g, e, x)) {
        if (x.readyState = 1, m && y.trigger("ajaxSend", [x, g]), p) return x;g.async && 0 < g.timeout && (h = C.setTimeout(function () {
          x.abort("timeout");
        }, g.timeout));try {
          p = !1, c.send(s, u);
        } catch (t) {
          if (p) throw t;u(-1, t);
        }
      } else u(-1, "No Transport");function u(t, e, n, i) {
        var o,
            r,
            s,
            a,
            l,
            u = e;p || (p = !0, h && C.clearTimeout(h), c = void 0, f = i || "", x.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, n && (a = function (t, e, n) {
          for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];) {
            l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
          }if (i) for (o in a) {
            if (a[o] && a[o].test(i)) {
              l.unshift(o);break;
            }
          }if (l[0] in n) r = l[0];else {
            for (o in n) {
              if (!l[0] || t.converters[o + " " + l[0]]) {
                r = o;break;
              }s = s || o;
            }r = r || s;
          }if (r) return r !== l[0] && l.unshift(r), n[r];
        }(g, x, n)), a = function (t, e, n, i) {
          var o,
              r,
              s,
              a,
              l,
              u = {},
              c = t.dataTypes.slice();if (c[1]) for (s in t.converters) {
            u[s.toLowerCase()] = t.converters[s];
          }for (r = c.shift(); r;) {
            if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
              if (!(s = u[l + " " + r] || u["* " + r])) for (o in u) {
                if ((a = o.split(" "))[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                  !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1]));break;
                }
              }if (!0 !== s) if (s && t.throws) e = s(e);else try {
                e = s(e);
              } catch (t) {
                return { state: "parsererror", error: s ? t : "No conversion from " + l + " to " + r };
              }
            }
          }return { state: "success", data: e };
        }(g, a, x, o), o ? (g.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (T.lastModified[d] = l), (l = x.getResponseHeader("etag")) && (T.etag[d] = l)), 204 === t || "HEAD" === g.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = a.state, r = a.data, o = !(s = a.error))) : (s = u, !t && u || (u = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || u) + "", o ? b.resolveWith(v, [r, u, x]) : b.rejectWith(v, [x, u, s]), x.statusCode(w), w = void 0, m && y.trigger(o ? "ajaxSuccess" : "ajaxError", [x, g, o ? r : s]), _.fireWith(v, [x, u]), m && (y.trigger("ajaxComplete", [x, g]), --T.active || T.event.trigger("ajaxStop")));
      }return x;
    }, getJSON: function getJSON(t, e, n) {
      return T.get(t, e, n, "json");
    }, getScript: function getScript(t, e) {
      return T.get(t, void 0, e, "script");
    } }), T.each(["get", "post"], function (t, o) {
    T[o] = function (t, e, n, i) {
      return b(e) && (i = i || n, n = e, e = void 0), T.ajax(T.extend({ url: t, type: o, dataType: i, data: e, success: n }, T.isPlainObject(t) && t));
    };
  }), T._evalUrl = function (t) {
    return T.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, T.fn.extend({ wrapAll: function wrapAll(t) {
      var e;return this[0] && (b(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var t = this; t.firstElementChild;) {
          t = t.firstElementChild;
        }return t;
      }).append(this)), this;
    }, wrapInner: function wrapInner(n) {
      return b(n) ? this.each(function (t) {
        T(this).wrapInner(n.call(this, t));
      }) : this.each(function () {
        var t = T(this),
            e = t.contents();e.length ? e.wrapAll(n) : t.append(n);
      });
    }, wrap: function wrap(e) {
      var n = b(e);return this.each(function (t) {
        T(this).wrapAll(n ? e.call(this, t) : e);
      });
    }, unwrap: function unwrap(t) {
      return this.parent(t).not("body").each(function () {
        T(this).replaceWith(this.childNodes);
      }), this;
    } }), T.expr.pseudos.hidden = function (t) {
    return !T.expr.pseudos.visible(t);
  }, T.expr.pseudos.visible = function (t) {
    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
  }, T.ajaxSettings.xhr = function () {
    try {
      return new C.XMLHttpRequest();
    } catch (t) {}
  };var Xe = { 0: 200, 1223: 204 },
      Ge = T.ajaxSettings.xhr();y.cors = !!Ge && "withCredentials" in Ge, y.ajax = Ge = !!Ge, T.ajaxTransport(function (o) {
    var _r, s;if (y.cors || Ge && !o.crossDomain) return { send: function send(t, e) {
        var n,
            i = o.xhr();if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields) for (n in o.xhrFields) {
          i[n] = o.xhrFields[n];
        }for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) {
          i.setRequestHeader(n, t[n]);
        }_r = function r(t) {
          return function () {
            _r && (_r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(Xe[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? { binary: i.response } : { text: i.responseText }, i.getAllResponseHeaders()));
          };
        }, i.onload = _r(), s = i.onerror = i.ontimeout = _r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
          4 === i.readyState && C.setTimeout(function () {
            _r && s();
          });
        }, _r = _r("abort");try {
          i.send(o.hasContent && o.data || null);
        } catch (t) {
          if (_r) throw t;
        }
      }, abort: function abort() {
        _r && _r();
      } };
  }), T.ajaxPrefilter(function (t) {
    t.crossDomain && (t.contents.script = !1);
  }), T.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(t) {
        return T.globalEval(t), t;
      } } }), T.ajaxPrefilter("script", function (t) {
    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
  }), T.ajaxTransport("script", function (n) {
    var i, _o;if (n.crossDomain) return { send: function send(t, e) {
        i = T("<script>").prop({ charset: n.scriptCharset, src: n.url }).on("load error", _o = function o(t) {
          i.remove(), _o = null, t && e("error" === t.type ? 404 : 200, t.type);
        }), E.head.appendChild(i[0]);
      }, abort: function abort() {
        _o && _o();
      } };
  });var Ze,
      Je = [],
      tn = /(=)\?(?=&|$)|\?\?/;T.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
      var t = Je.pop() || T.expando + "_" + De++;return this[t] = !0, t;
    } }), T.ajaxPrefilter("json jsonp", function (t, e, n) {
    var i,
        o,
        r,
        s = !1 !== t.jsonp && (tn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = b(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(tn, "$1" + i) : !1 !== t.jsonp && (t.url += (Oe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return r || T.error(i + " was not called"), r[0];
    }, t.dataTypes[0] = "json", o = C[i], C[i] = function () {
      r = arguments;
    }, n.always(function () {
      void 0 === o ? T(C).removeProp(i) : C[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, Je.push(i)), r && b(o) && o(r[0]), r = o = void 0;
    }), "script";
  }), y.createHTMLDocument = ((Ze = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ze.childNodes.length), T.parseHTML = function (t, e, n) {
    return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (y.createHTMLDocument ? ((i = (e = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, e.head.appendChild(i)) : e = E), r = !n && [], (o = k.exec(t)) ? [e.createElement(o[1])] : (o = yt([t], e, r), r && r.length && T(r).remove(), T.merge([], o.childNodes)));var i, o, r;
  }, T.fn.load = function (t, e, n) {
    var i,
        o,
        r,
        s = this,
        a = t.indexOf(" ");return -1 < a && (i = Ce(t.slice(a)), t = t.slice(0, a)), b(e) ? (n = e, e = void 0) : e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && (o = "POST"), 0 < s.length && T.ajax({ url: t, type: o || "GET", dataType: "html", data: e }).done(function (t) {
      r = arguments, s.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t);
    }).always(n && function (t, e) {
      s.each(function () {
        n.apply(this, r || [t.responseText, e, t]);
      });
    }), this;
  }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
    T.fn[e] = function (t) {
      return this.on(e, t);
    };
  }), T.expr.pseudos.animated = function (e) {
    return T.grep(T.timers, function (t) {
      return e === t.elem;
    }).length;
  }, T.offset = { setOffset: function setOffset(t, e, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          u = T.css(t, "position"),
          c = T(t),
          d = {};"static" === u && (t.style.position = "relative"), a = c.offset(), r = T.css(t, "top"), l = T.css(t, "left"), o = ("absolute" === u || "fixed" === u) && -1 < (r + l).indexOf("auto") ? (s = (i = c.position()).top, i.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), b(e) && (e = e.call(t, n, T.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : c.css(d);
    } }, T.fn.extend({ offset: function offset(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        T.offset.setOffset(this, e, t);
      });var t,
          n,
          i = this[0];return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function position() {
      if (this[0]) {
        var t,
            e,
            n,
            i = this[0],
            o = { top: 0, left: 0 };if ("fixed" === T.css(i, "position")) e = i.getBoundingClientRect();else {
          for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position");) {
            t = t.parentNode;
          }t && t !== i && 1 === t.nodeType && ((o = T(t).offset()).top += T.css(t, "borderTopWidth", !0), o.left += T.css(t, "borderLeftWidth", !0));
        }return { top: e.top - o.top - T.css(i, "marginTop", !0), left: e.left - o.left - T.css(i, "marginLeft", !0) };
      }
    }, offsetParent: function offsetParent() {
      return this.map(function () {
        for (var t = this.offsetParent; t && "static" === T.css(t, "position");) {
          t = t.offsetParent;
        }return t || bt;
      });
    } }), T.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, o) {
    var r = "pageYOffset" === o;T.fn[e] = function (t) {
      return F(this, function (t, e, n) {
        var i;if (m(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n) return i ? i[o] : t[e];i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : t[e] = n;
      }, e, t, arguments.length);
    };
  }), T.each(["top", "left"], function (t, n) {
    T.cssHooks[n] = Xt(y.pixelPosition, function (t, e) {
      if (e) return e = Vt(t, n), Ut.test(e) ? T(t).position()[n] + "px" : e;
    });
  }), T.each({ Height: "height", Width: "width" }, function (s, a) {
    T.each({ padding: "inner" + s, content: a, "": "outer" + s }, function (i, r) {
      T.fn[r] = function (t, e) {
        var n = arguments.length && (i || "boolean" != typeof t),
            o = i || (!0 === t || !0 === e ? "margin" : "border");return F(this, function (t, e, n) {
          var i;return m(t) ? 0 === r.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + s], i["scroll" + s], t.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? T.css(t, e, o) : T.style(t, e, n, o);
        }, a, n ? t : void 0, n);
      };
    });
  }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
    T.fn[n] = function (t, e) {
      return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n);
    };
  }), T.fn.extend({ hover: function hover(t, e) {
      return this.mouseenter(t).mouseleave(e || t);
    } }), T.fn.extend({ bind: function bind(t, e, n) {
      return this.on(t, null, e, n);
    }, unbind: function unbind(t, e) {
      return this.off(t, null, e);
    }, delegate: function delegate(t, e, n, i) {
      return this.on(e, t, n, i);
    }, undelegate: function undelegate(t, e, n) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
    } }), T.proxy = function (t, e) {
    var n, i, o;if ("string" == typeof e && (n = t[e], e = t, t = n), b(t)) return i = a.call(arguments, 2), (o = function o() {
      return t.apply(e || this, i.concat(a.call(arguments)));
    }).guid = t.guid = t.guid || T.guid++, o;
  }, T.holdReady = function (t) {
    t ? T.readyWait++ : T.ready(!0);
  }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = A, T.isFunction = b, T.isWindow = m, T.camelCase = Y, T.type = w, T.now = Date.now, T.isNumeric = function (t) {
    var e = T.type(t);return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return T;
  });var en = C.jQuery,
      nn = C.$;return T.noConflict = function (t) {
    return C.$ === T && (C.$ = nn), t && C.jQuery === T && (C.jQuery = en), T;
  }, t || (C.jQuery = C.$ = T), T;
}), function (t, e) {
  "function" == typeof define && define.amd ? define([], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e() : t.Tether = e();
}(this, function () {
  "use strict";
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }var x = void 0;void 0 === x && (x = { modules: [] });var o = null;function s(t) {
    var e = t.getBoundingClientRect(),
        n = {};for (var i in e) {
      n[i] = e[i];
    }if (t.ownerDocument !== document) {
      var o = t.ownerDocument.defaultView.frameElement;if (o) {
        var r = s(o);n.top += r.top, n.bottom += r.top, n.left += r.left, n.right += r.left;
      }
    }return n;
  }function l(t) {
    var e = (getComputedStyle(t) || {}).position,
        n = [];if ("fixed" === e) return [t];for (var i = t; (i = i.parentNode) && i && 1 === i.nodeType;) {
      var o = void 0;try {
        o = getComputedStyle(i);
      } catch (t) {}if (null == o) return n.push(i), n;var r = o,
          s = r.overflow,
          a = r.overflowX,
          l = r.overflowY;/(auto|scroll|overlay)/.test(s + l + a) && ("absolute" !== e || 0 <= ["relative", "absolute", "fixed"].indexOf(o.position)) && n.push(i);
    }return n.push(t.ownerDocument.body), t.ownerDocument !== document && n.push(t.ownerDocument.defaultView), n;
  }var t,
      r = (t = 0, function () {
    return ++t;
  }),
      a = {},
      u = function u() {
    var t = o;t && document.body.contains(t) || ((t = document.createElement("div")).setAttribute("data-tether-id", r()), S(t.style, { top: 0, left: 0, position: "absolute" }), document.body.appendChild(t), o = t);var e = t.getAttribute("data-tether-id");return void 0 === a[e] && (a[e] = s(t), A(function () {
      delete a[e];
    })), a[e];
  };function e() {
    o && document.body.removeChild(o), o = null;
  }function E(t) {
    var e = void 0;t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;var n = e.documentElement,
        i = s(t),
        o = u();return i.top -= o.top, i.left -= o.left, void 0 === i.width && (i.width = document.body.scrollWidth - i.left - i.right), void 0 === i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - n.clientTop, i.left = i.left - n.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i;
  }function C(t) {
    return t.offsetParent || document.documentElement;
  }var c = null;function T() {
    if (c) return c;var t = document.createElement("div");t.style.width = "100%", t.style.height = "200px";var e = document.createElement("div");S(e.style, { position: "absolute", top: 0, left: 0, pointerEvents: "none", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), e.appendChild(t), document.body.appendChild(e);var n = t.offsetWidth;e.style.overflow = "scroll";var i = t.offsetWidth;n === i && (i = e.clientWidth), document.body.removeChild(e);var o = n - i;return c = { width: o, height: o };
  }function S() {
    var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        t = [];return Array.prototype.push.apply(t, arguments), t.slice(1).forEach(function (t) {
      if (t) for (var e in t) {
        !{}.hasOwnProperty.call(t, e) || (n[e] = t[e]);
      }
    }), n;
  }function d(e, t) {
    if (void 0 !== e.classList) t.split(" ").forEach(function (t) {
      t.trim() && e.classList.remove(t);
    });else {
      var n = new RegExp("(^| )" + t.split(" ").join("|") + "( |$)", "gi"),
          i = p(e).replace(n, " ");m(e, i);
    }
  }function f(e, t) {
    if (void 0 !== e.classList) t.split(" ").forEach(function (t) {
      t.trim() && e.classList.add(t);
    });else {
      d(e, t);var n = p(e) + " " + t;m(e, n);
    }
  }function h(t, e) {
    if (void 0 !== t.classList) return t.classList.contains(e);var n = p(t);return new RegExp("(^| )" + e + "( |$)", "gi").test(n);
  }function p(t) {
    return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className;
  }function m(t, e) {
    t.setAttribute("class", e);
  }function I(e, n, t) {
    t.forEach(function (t) {
      -1 === n.indexOf(t) && h(e, t) && d(e, t);
    }), n.forEach(function (t) {
      h(e, t) || f(e, t);
    });
  }var g = [],
      A = function A(t) {
    g.push(t);
  },
      k = function k() {
    for (var t = void 0; t = g.pop();) {
      t();
    }
  },
      v = ((b = function b(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  })(y, [{ key: "on", value: function value(t, e, n, i) {
      var o = !(arguments.length <= 3 || void 0 === i) && i;void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({ handler: e, ctx: n, once: o });
    } }, { key: "once", value: function value(t, e, n) {
      this.on(t, e, n, !0);
    } }, { key: "off", value: function value(t, e) {
      if (void 0 !== this.bindings && void 0 !== this.bindings[t]) if (void 0 === e) delete this.bindings[t];else for (var n = 0; n < this.bindings[t].length;) {
        this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : ++n;
      }
    } }, { key: "trigger", value: function value(t) {
      if (void 0 !== this.bindings && this.bindings[t]) {
        for (var e = 0, n = arguments.length, i = Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) {
          i[o - 1] = arguments[o];
        }for (; e < this.bindings[t].length;) {
          var r = this.bindings[t][e],
              s = r.handler,
              a = r.ctx,
              l = r.once,
              u = a;void 0 === u && (u = this), s.apply(u, i), l ? this.bindings[t].splice(e, 1) : ++e;
        }
      }
    } }]), y);function y() {
    n(this, y);
  }x.Utils = { getActualBoundingClientRect: s, getScrollParents: l, getBounds: E, getOffsetParent: C, extend: S, addClass: f, removeClass: d, hasClass: h, updateClasses: I, defer: A, flush: k, uniqueId: r, Evented: v, getScrollBarSize: T, removeUtilElements: e };var D = function D(t, e) {
    if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return function (t, e) {
      var n = [],
          i = !0,
          o = !1,
          r = void 0;try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0) {}
      } catch (t) {
        o = !0, r = t;
      } finally {
        try {
          !i && a.return && a.return();
        } finally {
          if (o) throw r;
        }
      }return n;
    }(t, e);throw new TypeError("Invalid attempt to destructure non-iterable instance");
  },
      b = function b(t, e, n) {
    return e && _(t.prototype, e), n && _(t, n), t;
  };function _(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function n(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }if (void 0 === x) throw new Error("You must include the utils.js file before tether.js");var l = (G = x.Utils).getScrollParents,
      C = (E = G.getBounds, G.getOffsetParent),
      f = (S = G.extend, G.addClass),
      d = G.removeClass,
      T = (I = G.updateClasses, A = G.defer, k = G.flush, G.getScrollBarSize),
      e = G.removeUtilElements;function w(t, e, n) {
    var i = arguments.length <= 2 || void 0 === n ? 1 : n;return e <= t + i && t - i <= e;
  }function O() {
    H.forEach(function (t) {
      t.position(!1);
    }), k();
  }var N,
      L,
      j,
      P = function () {
    if ("undefined" == typeof document) return "";for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0; n < e.length; ++n) {
      var i = e[n];if (void 0 !== t.style[i]) return i;
    }
  }(),
      H = [];function z() {
    return "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && "function" == typeof performance.now ? performance.now() : +new Date();
  }function M() {
    if (void 0 !== L && 16 < L) return L = Math.min(L - 16, 250), void (j = setTimeout(M, 250));void 0 !== N && z() - N < 10 || (null != j && (clearTimeout(j), j = null), N = z(), O(), L = z() - N);
  }j = L = N = null, "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
    window.addEventListener(t, M);
  });function W(t) {
    var e = t.left,
        n = t.top;return void 0 !== B[t.left] && (e = B[t.left]), void 0 !== B[t.top] && (n = B[t.top]), { left: e, top: n };
  }var R = { center: "center", left: "right", right: "left" },
      q = { middle: "middle", top: "bottom", bottom: "top" },
      B = { top: 0, left: 0, middle: "50%", center: "50%", bottom: "100%", right: "100%" };function F() {
    for (var i = { top: 0, left: 0 }, t = arguments.length, e = Array(t), n = 0; n < t; n++) {
      e[n] = arguments[n];
    }return e.forEach(function (t) {
      var e = t.top,
          n = t.left;"string" == typeof e && (e = parseFloat(e, 10)), "string" == typeof n && (n = parseFloat(n, 10)), i.top += e, i.left += n;
    }), i;
  }function U(t, e) {
    return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t;
  }function $(t) {
    var e = t.split(" "),
        n = D(e, 2);return { top: n[0], left: n[1] };
  }var Q = $,
      Y = (function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }(K, v), b(K, [{ key: "getClass", value: function value(t) {
      var e = arguments.length <= 0 || void 0 === t ? "" : t,
          n = this.options.classes;return void 0 !== n && n[e] ? this.options.classes[e] : this.options.classPrefix ? this.options.classPrefix + "-" + e : e;
    } }, { key: "setOptions", value: function value(t, e) {
      var n = this,
          i = arguments.length <= 1 || void 0 === e || e;this.options = S({ offset: "0 0", targetOffset: "0 0", targetAttachment: "auto auto", classPrefix: "tether" }, t);var o = this.options,
          r = o.element,
          s = o.target,
          a = o.targetModifier;if (this.element = r, this.target = s, this.targetModifier = a, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
        if (void 0 === n[t]) throw new Error("Tether Error: Both element and target must be defined");void 0 !== n[t].jquery ? n[t] = n[t][0] : "string" == typeof n[t] && (n[t] = document.querySelector(n[t]));
      }), f(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && f(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");this.targetAttachment = Q(this.options.targetAttachment), this.attachment = Q(this.options.attachment), this.offset = $(this.options.offset), this.targetOffset = $(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = l(this.target), !1 !== this.options.enabled && this.enable(i);
    } }, { key: "getTargetBounds", value: function value() {
      if (void 0 === this.targetModifier) return E(this.target);if ("visible" === this.targetModifier) return this.target === document.body ? { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth } : ((r = { height: (t = E(this.target)).height, width: t.width, top: t.top, left: t.left }).height = Math.min(r.height, t.height - (pageYOffset - t.top)), r.height = Math.min(r.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), r.height = Math.min(innerHeight, r.height), r.height -= 2, r.width = Math.min(r.width, t.width - (pageXOffset - t.left)), r.width = Math.min(r.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), r.width = Math.min(innerWidth, r.width), r.width -= 2, r.top < pageYOffset && (r.top = pageYOffset), r.left < pageXOffset && (r.left = pageXOffset), r);if ("scroll-handle" === this.targetModifier) {
        var t = void 0,
            e = this.target;t = e === document.body ? (e = document.documentElement, { left: pageXOffset, top: pageYOffset, height: innerHeight, width: innerWidth }) : E(e);var n = getComputedStyle(e),
            i = 0;(e.scrollWidth > e.clientWidth || 0 <= [n.overflow, n.overflowX].indexOf("scroll") || this.target !== document.body) && (i = 15);var o = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - i,
            r = { width: 15, height: .975 * o * (o / e.scrollHeight), left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15 },
            s = 0;o < 408 && this.target === document.body && (s = -11e-5 * Math.pow(o, 2) - .00727 * o + 22.58), this.target !== document.body && (r.height = Math.max(r.height, 24));var a = this.target.scrollTop / (e.scrollHeight - o);return r.top = a * (o - r.height - s) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (r.height = Math.max(r.height, 24)), r;
      }
    } }, { key: "clearCache", value: function value() {
      this._cache = {};
    } }, { key: "cache", value: function value(t, e) {
      return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t];
    } }, { key: "enable", value: function value(t) {
      var e = this,
          n = arguments.length <= 0 || void 0 === t || t;!1 !== this.options.addTargetClasses && f(this.target, this.getClass("enabled")), f(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (t) {
        t !== e.target.ownerDocument && t.addEventListener("scroll", e.position);
      }), n && this.position();
    } }, { key: "disable", value: function value() {
      var e = this;d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function (t) {
        t.removeEventListener("scroll", e.position);
      });
    } }, { key: "destroy", value: function value() {
      var n = this;this.disable(), H.forEach(function (t, e) {
        t === n && H.splice(e, 1);
      }), 0 === H.length && e();
    } }, { key: "updateAttachClasses", value: function value(t, e) {
      var n = this;t = t || this.attachment, e = e || this.targetAttachment, void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);var i = this._addAttachClasses;t.top && i.push(this.getClass("element-attached") + "-" + t.top), t.left && i.push(this.getClass("element-attached") + "-" + t.left), e.top && i.push(this.getClass("target-attached") + "-" + e.top), e.left && i.push(this.getClass("target-attached") + "-" + e.left);var o = [];["left", "top", "bottom", "right", "middle", "center"].forEach(function (t) {
        o.push(n.getClass("element-attached") + "-" + t), o.push(n.getClass("target-attached") + "-" + t);
      }), A(function () {
        void 0 !== n._addAttachClasses && (I(n.element, n._addAttachClasses, o), !1 !== n.options.addTargetClasses && I(n.target, n._addAttachClasses, o), delete n._addAttachClasses);
      });
    } }, { key: "position", value: function value(t) {
      var a = this,
          e = arguments.length <= 0 || void 0 === t || t;if (this.enabled) {
        this.clearCache();var n = function (t, e) {
          var n = t.left,
              i = t.top;return "auto" === n && (n = R[e.left]), "auto" === i && (i = q[e.top]), { left: n, top: i };
        }(this.targetAttachment, this.attachment);this.updateAttachClasses(this.attachment, n);var i = this.cache("element-bounds", function () {
          return E(a.element);
        }),
            o = i.width,
            r = i.height;if (0 === o && 0 === r && void 0 !== this.lastSize) {
          var s = this.lastSize;o = s.width, r = s.height;
        } else this.lastSize = { width: o, height: r };var l = this.cache("target-bounds", function () {
          return a.getTargetBounds();
        }),
            u = l,
            c = U(W(this.attachment), { width: o, height: r }),
            d = U(W(n), u),
            f = U(this.offset, { width: o, height: r }),
            h = U(this.targetOffset, u);c = F(c, f), d = F(d, h);for (var p = l.left + d.left - c.left, m = l.top + d.top - c.top, g = 0; g < x.modules.length; ++g) {
          var v = x.modules[g].position.call(this, { left: p, top: m, targetAttachment: n, targetPos: l, elementPos: i, offset: c, targetOffset: d, manualOffset: f, manualTargetOffset: h, scrollbarSize: w, attachment: this.attachment });if (!1 === v) return !1;void 0 !== v && "object" == (typeof v === "undefined" ? "undefined" : _typeof(v)) && (m = v.top, p = v.left);
        }var y = { page: { top: m, left: p }, viewport: { top: m - pageYOffset, bottom: pageYOffset - m - r + innerHeight, left: p - pageXOffset, right: pageXOffset - p - o + innerWidth } },
            b = this.target.ownerDocument,
            _ = b.defaultView,
            w = void 0;return _.innerHeight > b.documentElement.clientHeight && (w = this.cache("scrollbar-size", T), y.viewport.bottom -= w.height), _.innerWidth > b.documentElement.clientWidth && (w = this.cache("scrollbar-size", T), y.viewport.right -= w.width), -1 !== ["", "static"].indexOf(b.body.style.position) && -1 !== ["", "static"].indexOf(b.body.parentElement.style.position) || (y.page.bottom = b.body.scrollHeight - m - r, y.page.right = b.body.scrollWidth - p - o), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function () {
          var t = a.cache("target-offsetparent", function () {
            return C(a.target);
          }),
              e = a.cache("target-offsetparent-bounds", function () {
            return E(t);
          }),
              n = getComputedStyle(t),
              i = e,
              o = {};if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
            o[t.toLowerCase()] = parseFloat(n["border" + t + "Width"]);
          }), e.right = b.body.scrollWidth - e.left - i.width + o.right, e.bottom = b.body.scrollHeight - e.top - i.height + o.bottom, y.page.top >= e.top + o.top && y.page.bottom >= e.bottom && y.page.left >= e.left + o.left && y.page.right >= e.right) {
            var r = t.scrollTop,
                s = t.scrollLeft;y.offset = { top: y.page.top - e.top + r - o.top, left: y.page.left - e.left + s - o.left };
          }
        }(), this.move(y), this.history.unshift(y), 3 < this.history.length && this.history.pop(), e && k(), !0;
      }
    } }, { key: "move", value: function value(e) {
      var o = this;if (void 0 !== this.element.parentNode) {
        var n = {};for (var t in e) {
          for (var i in n[t] = {}, e[t]) {
            for (var r = !1, s = 0; s < this.history.length; ++s) {
              var a = this.history[s];if (void 0 !== a[t] && !w(a[t][i], e[t][i])) {
                r = !0;break;
              }
            }r || (n[t][i] = !0);
          }
        }var l,
            u,
            c = { top: "", left: "", right: "", bottom: "" },
            d = function d(t, e) {
          if (!1 !== (void 0 !== o.options.optimizations ? o.options.optimizations.gpu : null)) {
            var n = void 0,
                i = void 0;n = t.top ? (c.top = 0, e.top) : (c.bottom = 0, -e.bottom), i = t.left ? (c.left = 0, e.left) : (c.right = 0, -e.right), window.matchMedia && (window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches || (i = Math.round(i), n = Math.round(n))), c[P] = "translateX(" + i + "px) translateY(" + n + "px)", "msTransform" !== P && (c[P] += " translateZ(0)");
          } else t.top ? c.top = e.top + "px" : c.bottom = e.bottom + "px", t.left ? c.left = e.left + "px" : c.right = e.right + "px";
        },
            f = !1;if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (c.position = "absolute", d(n.page, e.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (c.position = "fixed", d(n.viewport, e.viewport)) : void 0 !== n.offset && n.offset.top && n.offset.left ? function () {
          c.position = "absolute";var t = o.cache("target-offsetparent", function () {
            return C(o.target);
          });C(o.element) !== t && A(function () {
            o.element.parentNode.removeChild(o.element), t.appendChild(o.element);
          }), d(n.offset, e.offset), f = !0;
        }() : (c.position = "absolute", d({ top: !0, left: !0 }, e.page)), !f) if (this.options.bodyElement) this.element.parentNode !== this.options.bodyElement && this.options.bodyElement.appendChild(this.element);else {
          for (var h = !0, p = this.element.parentNode; p && 1 === p.nodeType && "BODY" !== p.tagName && ((u = (l = p).ownerDocument).fullscreenElement || u.webkitFullscreenElement || u.mozFullScreenElement || u.msFullscreenElement) !== l;) {
            if ("static" !== getComputedStyle(p).position) {
              h = !1;break;
            }p = p.parentNode;
          }h || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element));
        }var m = {},
            g = !1;for (var i in c) {
          var v = c[i];this.element.style[i] !== v && (g = !0, m[i] = v);
        }g && A(function () {
          S(o.element.style, m), o.trigger("repositioned");
        });
      }
    } }]), K);function K(t) {
    var e = this;n(this, K), function (t, e, n) {
      for (var i = !0; i;) {
        var o = t,
            r = e,
            s = n;i = !1, null === o && (o = Function.prototype);var a = Object.getOwnPropertyDescriptor(o, r);if (void 0 !== a) {
          if ("value" in a) return a.value;var l = a.get;if (void 0 === l) return;return l.call(s);
        }var u = Object.getPrototypeOf(o);if (null === u) return;t = u, e = r, n = s, i = !0, a = u = void 0;
      }
    }(Object.getPrototypeOf(K.prototype), "constructor", this).call(this), this.position = this.position.bind(this), H.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function (t) {
      void 0 !== t.initialize && t.initialize.call(e);
    }), this.position();
  }Y.modules = [], x.position = O;var V = S(Y, x),
      S = (D = function D(t, e) {
    if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return function (t, e) {
      var n = [],
          i = !0,
          o = !1,
          r = void 0;try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0) {}
      } catch (t) {
        o = !0, r = t;
      } finally {
        try {
          !i && a.return && a.return();
        } finally {
          if (o) throw r;
        }
      }return n;
    }(t, e);throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }, E = (G = x.Utils).getBounds, G.extend),
      X = (I = G.updateClasses, A = G.defer, ["left", "top", "right", "bottom"]);x.modules.push({ position: function position(t) {
      var h = this,
          p = t.top,
          m = t.left,
          g = t.targetAttachment;if (!this.options.constraints) return !0;var e = this.cache("element-bounds", function () {
        return E(h.element);
      }),
          v = e.height,
          y = e.width;if (0 === y && 0 === v && void 0 !== this.lastSize) {
        var n = this.lastSize;y = n.width, v = n.height;
      }var i = this.cache("target-bounds", function () {
        return h.getTargetBounds();
      }),
          b = i.height,
          _ = i.width,
          o = [this.getClass("pinned"), this.getClass("out-of-bounds")];this.options.constraints.forEach(function (t) {
        var e = t.outOfBoundsClass,
            n = t.pinnedClass;e && o.push(e), n && o.push(n);
      }), o.forEach(function (e) {
        ["left", "top", "right", "bottom"].forEach(function (t) {
          o.push(e + "-" + t);
        });
      });var w = [],
          x = S({}, g),
          C = S({}, this.attachment);return this.options.constraints.forEach(function (t) {
        var e = t.to,
            n = t.attachment,
            i = t.pin;void 0 === n && (n = "");var o = void 0,
            r = void 0;if (0 <= n.indexOf(" ")) {
          var s = n.split(" "),
              a = D(s, 2);r = a[0], o = a[1];
        } else o = r = n;var l = function (t, r) {
          return "scrollParent" === r ? r = t.scrollParents[0] : "window" === r && (r = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), r === document && (r = r.documentElement), void 0 !== r.nodeType && function () {
            var t = r,
                e = E(r),
                n = e,
                i = getComputedStyle(r);if (r = [n.left, n.top, e.width + n.left, e.height + n.top], t.ownerDocument !== document) {
              var o = t.ownerDocument.defaultView;r[0] += o.pageXOffset, r[1] += o.pageYOffset, r[2] += o.pageXOffset, r[3] += o.pageYOffset;
            }X.forEach(function (t, e) {
              "Top" === (t = t[0].toUpperCase() + t.substr(1)) || "Left" === t ? r[e] += parseFloat(i["border" + t + "Width"]) : r[e] -= parseFloat(i["border" + t + "Width"]);
            });
          }(), r;
        }(h, e);"target" !== r && "both" !== r || (p < l[1] && "top" === x.top && (p += b, x.top = "bottom"), p + v > l[3] && "bottom" === x.top && (p -= b, x.top = "top")), "together" === r && ("top" === x.top && ("bottom" === C.top && p < l[1] ? (p += b, x.top = "bottom", p += v, C.top = "top") : "top" === C.top && p + v > l[3] && p - (v - b) >= l[1] && (p -= v - b, x.top = "bottom", C.top = "bottom")), "bottom" === x.top && ("top" === C.top && p + v > l[3] ? (p -= b, x.top = "top", p -= v, C.top = "bottom") : "bottom" === C.top && p < l[1] && p + (2 * v - b) <= l[3] && (p += v - b, x.top = "top", C.top = "top")), "middle" === x.top && (p + v > l[3] && "top" === C.top ? (p -= v, C.top = "bottom") : p < l[1] && "bottom" === C.top && (p += v, C.top = "top"))), "target" !== o && "both" !== o || (m < l[0] && "left" === x.left && (m += _, x.left = "right"), m + y > l[2] && "right" === x.left && (m -= _, x.left = "left")), "together" === o && (m < l[0] && "left" === x.left ? "right" === C.left ? (m += _, x.left = "right", m += y, C.left = "left") : "left" === C.left && (m += _, x.left = "right", m -= y, C.left = "right") : m + y > l[2] && "right" === x.left ? "left" === C.left ? (m -= _, x.left = "left", m -= y, C.left = "right") : "right" === C.left && (m -= _, x.left = "left", m += y, C.left = "left") : "center" === x.left && (m + y > l[2] && "left" === C.left ? (m -= y, C.left = "right") : m < l[0] && "right" === C.left && (m += y, C.left = "left"))), "element" !== r && "both" !== r || (p < l[1] && "bottom" === C.top && (p += v, C.top = "top"), p + v > l[3] && "top" === C.top && (p -= v, C.top = "bottom")), "element" !== o && "both" !== o || (m < l[0] && ("right" === C.left ? (m += y, C.left = "left") : "center" === C.left && (m += y / 2, C.left = "left")), m + y > l[2] && ("left" === C.left ? (m -= y, C.left = "right") : "center" === C.left && (m -= y / 2, C.left = "right"))), "string" == typeof i ? i = i.split(",").map(function (t) {
          return t.trim();
        }) : !0 === i && (i = ["top", "left", "right", "bottom"]), i = i || [];var u,
            c,
            d = [],
            f = [];p < l[1] && (0 <= i.indexOf("top") ? (p = l[1], d.push("top")) : f.push("top")), p + v > l[3] && (0 <= i.indexOf("bottom") ? (p = l[3] - v, d.push("bottom")) : f.push("bottom")), m < l[0] && (0 <= i.indexOf("left") ? (m = l[0], d.push("left")) : f.push("left")), m + y > l[2] && (0 <= i.indexOf("right") ? (m = l[2] - y, d.push("right")) : f.push("right")), d.length && (u = (u = void 0) !== h.options.pinnedClass ? h.options.pinnedClass : h.getClass("pinned"), w.push(u), d.forEach(function (t) {
          w.push(u + "-" + t);
        })), f.length && (c = (c = void 0) !== h.options.outOfBoundsClass ? h.options.outOfBoundsClass : h.getClass("out-of-bounds"), w.push(c), f.forEach(function (t) {
          w.push(c + "-" + t);
        })), (0 <= d.indexOf("left") || 0 <= d.indexOf("right")) && (C.left = x.left = !1), (0 <= d.indexOf("top") || 0 <= d.indexOf("bottom")) && (C.top = x.top = !1), x.top === g.top && x.left === g.left && C.top === h.attachment.top && C.left === h.attachment.left || (h.updateAttachClasses(C, x), h.trigger("update", { attachment: C, targetAttachment: x }));
      }), A(function () {
        !1 !== h.options.addTargetClasses && I(h.target, w, o), I(h.element, w, o);
      }), { top: p, left: m };
    } });var G,
      E = (G = x.Utils).getBounds,
      I = G.updateClasses;A = G.defer;x.modules.push({ position: function position(t) {
      var e = this,
          n = t.top,
          i = t.left,
          o = this.cache("element-bounds", function () {
        return E(e.element);
      }),
          r = o.height,
          s = o.width,
          a = this.getTargetBounds(),
          l = n + r,
          u = i + s,
          c = [];n <= a.bottom && l >= a.top && ["left", "right"].forEach(function (t) {
        var e = a[t];e !== i && e !== u || c.push(t);
      }), i <= a.right && u >= a.left && ["top", "bottom"].forEach(function (t) {
        var e = a[t];e !== n && e !== l || c.push(t);
      });var d = [],
          f = [];return d.push(this.getClass("abutted")), ["left", "top", "right", "bottom"].forEach(function (t) {
        d.push(e.getClass("abutted") + "-" + t);
      }), c.length && f.push(this.getClass("abutted")), c.forEach(function (t) {
        f.push(e.getClass("abutted") + "-" + t);
      }), A(function () {
        !1 !== e.options.addTargetClasses && I(e.target, f, d), I(e.element, f, d);
      }), !0;
    } });D = function D(t, e) {
    if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return function (t, e) {
      var n = [],
          i = !0,
          o = !1,
          r = void 0;try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0) {}
      } catch (t) {
        o = !0, r = t;
      } finally {
        try {
          !i && a.return && a.return();
        } finally {
          if (o) throw r;
        }
      }return n;
    }(t, e);throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };return x.modules.push({ position: function position(t) {
      var e = t.top,
          n = t.left;if (this.options.shift) {
        var i = this.options.shift;"function" == typeof this.options.shift && (i = this.options.shift.call(this, { top: e, left: n }));var o = void 0,
            r = void 0;if ("string" == typeof i) {
          (i = i.split(" "))[1] = i[1] || i[0];var s = D(i, 2);o = s[0], r = s[1], o = parseFloat(o, 10), r = parseFloat(r, 10);
        } else o = i.top, r = i.left;return { top: e += o, left: n += r };
      }
    } }), V;
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");function launchGallery() {
  $("[data-lightbox-group]").each(function () {
    $(this).magnificPopup({ delegate: "a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] }, image: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>', tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function titleSrc(t) {
          var e = '<div class="mb-4">';return t.el.attr("data-link") && (e += '<a class="d-block mb-1" target="_blank" style="font-size: 20px; font-weight: 600; color: #222222" href="' + t.el.attr("data-link") + '">', e += "READ MORE ", e += '<i class="fa fa-angle-right"></i>', e += "</a>"), t.el.attr("title") && (e += '<p class="text-muted">' + t.el.attr("title") + "</p>"), e += "</div>";
        } }, callbacks: { markupParse: function markupParse(t, e, n) {
          var i = n.el.attr("data-link");i && n.img.on("click", function (t) {
            t.stopPropagation(), window.open(i, "_blank");
          });
        } } });
  });
}!function () {
  var t = jQuery.fn.jquery.split(" ")[0].split(".");if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
}(), function () {
  var w = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
    return typeof t === "undefined" ? "undefined" : _typeof(t);
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t === "undefined" ? "undefined" : _typeof(t);
  },
      x = function x(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t;
  };function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
    }
  }function C(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }var o,
      e,
      n,
      r,
      E = (o = jQuery, e = !1, n = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }, r = { TRANSITION_END: "bsTransitionEnd", getUID: function getUID(t) {
      for (; t += ~~(1e6 * Math.random()), document.getElementById(t);) {}return t;
    }, getSelectorFromElement: function getSelectorFromElement(t) {
      var e = t.getAttribute("data-target");return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e;
    }, reflow: function reflow(t) {
      return t.offsetHeight;
    }, triggerTransitionEnd: function triggerTransitionEnd(t) {
      o(t).trigger(e.end);
    }, supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(e);
    }, typeCheckConfig: function typeCheckConfig(t, e, n) {
      for (var i in n) {
        if (n.hasOwnProperty(i)) {
          var o = n[i],
              r = e[i],
              s = r && ((l = r)[0] || l).nodeType ? "element" : (a = r, {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }
      }var a, l;
    } }, e = function () {
    if (window.QUnit) return !1;var t = document.createElement("bootstrap");for (var e in n) {
      if (void 0 !== t.style[e]) return { end: n[e] };
    }return !1;
  }(), o.fn.emulateTransitionEnd = t, r.supportsTransitionEnd() && (o.event.special[r.TRANSITION_END] = { bindType: e.end, delegateType: e.end, handle: function handle(t) {
      if (o(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
    } }), r);function t(t) {
    var e = this,
        n = !1;return o(this).one(r.TRANSITION_END, function () {
      n = !0;
    }), setTimeout(function () {
      n || r.triggerTransitionEnd(e);
    }, t), this;
  }var s, a, l, u, c, d, f, h, p, m;s = jQuery, a = "alert", u = "." + (l = "bs.alert"), c = s.fn[a], d = { CLOSE: "close" + u, CLOSED: "closed" + u, CLICK_DATA_API: "click" + u + ".data-api" }, f = "alert", h = "fade", p = "show", g.prototype.close = function (t) {
    t = t || this._element;var e = this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
  }, g.prototype.dispose = function () {
    s.removeData(this._element, l), this._element = null;
  }, g.prototype._getRootElement = function (t) {
    var e = E.getSelectorFromElement(t),
        n = !1;return e && (n = s(e)[0]), n = n || s(t).closest("." + f)[0];
  }, g.prototype._triggerCloseEvent = function (t) {
    var e = s.Event(d.CLOSE);return s(t).trigger(e), e;
  }, g.prototype._removeElement = function (e) {
    var n = this;s(e).removeClass(p), E.supportsTransitionEnd() && s(e).hasClass(h) ? s(e).one(E.TRANSITION_END, function (t) {
      return n._destroyElement(e, t);
    }).emulateTransitionEnd(150) : this._destroyElement(e);
  }, g.prototype._destroyElement = function (t) {
    s(t).detach().trigger(d.CLOSED).remove();
  }, g._jQueryInterface = function (n) {
    return this.each(function () {
      var t = s(this),
          e = t.data(l);e || (e = new g(this), t.data(l, e)), "close" === n && e[n](this);
    });
  }, g._handleDismiss = function (e) {
    return function (t) {
      t && t.preventDefault(), e.close(this);
    };
  }, x(g, null, [{ key: "VERSION", get: function get() {
      return "4.0.0-alpha.6";
    } }]), m = g, s(document).on(d.CLICK_DATA_API, '[data-dismiss="alert"]', m._handleDismiss(new m())), s.fn[a] = m._jQueryInterface, s.fn[a].Constructor = m, s.fn[a].noConflict = function () {
    return s.fn[a] = c, m._jQueryInterface;
  };function g(t) {
    C(this, g), this._element = t;
  }var v, y, b, _, T, S, I, A, k, D, O, N, L, j, P, H;v = jQuery, y = "button", _ = "." + (b = "bs.button"), T = ".data-api", S = v.fn[y], I = "active", A = "btn", D = '[data-toggle^="button"]', O = '[data-toggle="buttons"]', N = "input", L = ".active", j = ".btn", P = { CLICK_DATA_API: "click" + _ + T, FOCUS_BLUR_DATA_API: (k = "focus") + _ + T + " blur" + _ + T }, z.prototype.toggle = function () {
    var t = !0,
        e = v(this._element).closest(O)[0];if (e) {
      var n = v(this._element).find(N)[0];if (n) {
        if ("radio" === n.type) if (n.checked && v(this._element).hasClass(I)) t = !1;else {
          var i = v(e).find(L)[0];i && v(i).removeClass(I);
        }t && (n.checked = !v(this._element).hasClass(I), v(n).trigger("change")), n.focus();
      }
    }this._element.setAttribute("aria-pressed", !v(this._element).hasClass(I)), t && v(this._element).toggleClass(I);
  }, z.prototype.dispose = function () {
    v.removeData(this._element, b), this._element = null;
  }, z._jQueryInterface = function (e) {
    return this.each(function () {
      var t = v(this).data(b);t || (t = new z(this), v(this).data(b, t)), "toggle" === e && t[e]();
    });
  }, x(z, null, [{ key: "VERSION", get: function get() {
      return "4.0.0-alpha.6";
    } }]), H = z, v(document).on(P.CLICK_DATA_API, D, function (t) {
    t.preventDefault();var e = t.target;v(e).hasClass(A) || (e = v(e).closest(j)), H._jQueryInterface.call(v(e), "toggle");
  }).on(P.FOCUS_BLUR_DATA_API, D, function (t) {
    var e = v(t.target).closest(j)[0];v(e).toggleClass(k, /^focus(in)?$/.test(t.type));
  }), v.fn[y] = H._jQueryInterface, v.fn[y].Constructor = H, v.fn[y].noConflict = function () {
    return v.fn[y] = S, H._jQueryInterface;
  };function z(t) {
    C(this, z), this._element = t;
  }var M, W, R, q, B, F, U, $, Q, Y, K, V, X, G, Z, J, tt, et, nt, it, ot, rt, st, at, lt;M = jQuery, W = "carousel", q = "." + (R = "bs.carousel"), B = ".data-api", F = M.fn[W], U = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, $ = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, Q = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" }, Y = { SLIDE: "slide" + q, SLID: "slid" + q, KEYDOWN: "keydown" + q, MOUSEENTER: "mouseenter" + q, MOUSELEAVE: "mouseleave" + q, LOAD_DATA_API: "load" + q + B, CLICK_DATA_API: "click" + q + B }, K = "carousel", V = "active", X = "slide", G = "carousel-item-right", Z = "carousel-item-left", J = "carousel-item-next", tt = "carousel-item-prev", et = ".active", nt = ".active.carousel-item", it = ".carousel-item", ot = ".carousel-item-next, .carousel-item-prev", rt = ".carousel-indicators", st = "[data-slide], [data-slide-to]", at = '[data-ride="carousel"]', ut.prototype.next = function () {
    if (this._isSliding) throw new Error("Carousel is sliding");this._slide(Q.NEXT);
  }, ut.prototype.nextWhenVisible = function () {
    document.hidden || this.next();
  }, ut.prototype.prev = function () {
    if (this._isSliding) throw new Error("Carousel is sliding");this._slide(Q.PREVIOUS);
  }, ut.prototype.pause = function (t) {
    t || (this._isPaused = !0), M(this._element).find(ot)[0] && E.supportsTransitionEnd() && (E.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
  }, ut.prototype.cycle = function (t) {
    t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
  }, ut.prototype.to = function (t) {
    var e = this;this._activeElement = M(this._element).find(nt)[0];var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) M(this._element).one(Y.SLID, function () {
      return e.to(t);
    });else {
      if (n === t) return this.pause(), void this.cycle();var i = n < t ? Q.NEXT : Q.PREVIOUS;this._slide(i, this._items[t]);
    }
  }, ut.prototype.dispose = function () {
    M(this._element).off(q), M.removeData(this._element, R), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
  }, ut.prototype._getConfig = function (t) {
    return t = M.extend({}, U, t), E.typeCheckConfig(W, t, $), t;
  }, ut.prototype._addEventListeners = function () {
    var e = this;this._config.keyboard && M(this._element).on(Y.KEYDOWN, function (t) {
      return e._keydown(t);
    }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || M(this._element).on(Y.MOUSEENTER, function (t) {
      return e.pause(t);
    }).on(Y.MOUSELEAVE, function (t) {
      return e.cycle(t);
    });
  }, ut.prototype._keydown = function (t) {
    if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
        t.preventDefault(), this.prev();break;case 39:
        t.preventDefault(), this.next();break;default:
        return;}
  }, ut.prototype._getItemIndex = function (t) {
    return this._items = M.makeArray(M(t).parent().find(it)), this._items.indexOf(t);
  }, ut.prototype._getItemByDirection = function (t, e) {
    var n = t === Q.NEXT,
        i = t === Q.PREVIOUS,
        o = this._getItemIndex(e),
        r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;var s = (o + (t === Q.PREVIOUS ? -1 : 1)) % this._items.length;return -1 == s ? this._items[this._items.length - 1] : this._items[s];
  }, ut.prototype._triggerSlideEvent = function (t, e) {
    var n = M.Event(Y.SLIDE, { relatedTarget: t, direction: e });return M(this._element).trigger(n), n;
  }, ut.prototype._setActiveIndicatorElement = function (t) {
    if (this._indicatorsElement) {
      M(this._indicatorsElement).find(et).removeClass(V);var e = this._indicatorsElement.children[this._getItemIndex(t)];e && M(e).addClass(V);
    }
  }, ut.prototype._slide = function (t, e) {
    var n = this,
        i = M(this._element).find(nt)[0],
        o = e || i && this._getItemByDirection(t, i),
        r = Boolean(this._interval),
        s = void 0,
        a = void 0,
        l = void 0;if (l = t === Q.NEXT ? (s = Z, a = J, Q.LEFT) : (s = G, a = tt, Q.RIGHT), o && M(o).hasClass(V)) this._isSliding = !1;else if (!this._triggerSlideEvent(o, l).isDefaultPrevented() && i && o) {
      this._isSliding = !0, r && this.pause(), this._setActiveIndicatorElement(o);var u = M.Event(Y.SLID, { relatedTarget: o, direction: l });E.supportsTransitionEnd() && M(this._element).hasClass(X) ? (M(o).addClass(a), E.reflow(o), M(i).addClass(s), M(o).addClass(s), M(i).one(E.TRANSITION_END, function () {
        M(o).removeClass(s + " " + a).addClass(V), M(i).removeClass(V + " " + a + " " + s), n._isSliding = !1, setTimeout(function () {
          return M(n._element).trigger(u);
        }, 0);
      }).emulateTransitionEnd(600)) : (M(i).removeClass(V), M(o).addClass(V), this._isSliding = !1, M(this._element).trigger(u)), r && this.cycle();
    }
  }, ut._jQueryInterface = function (i) {
    return this.each(function () {
      var t = M(this).data(R),
          e = M.extend({}, U, M(this).data());"object" === (void 0 === i ? "undefined" : w(i)) && M.extend(e, i);var n = "string" == typeof i ? i : e.slide;if (t || (t = new ut(this, e), M(this).data(R, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
        if (void 0 === t[n]) throw new Error('No method named "' + n + '"');t[n]();
      } else e.interval && (t.pause(), t.cycle());
    });
  }, ut._dataApiClickHandler = function (t) {
    var e = E.getSelectorFromElement(this);if (e) {
      var n = M(e)[0];if (n && M(n).hasClass(K)) {
        var i = M.extend({}, M(n).data(), M(this).data()),
            o = this.getAttribute("data-slide-to");o && (i.interval = !1), ut._jQueryInterface.call(M(n), i), o && M(n).data(R).to(o), t.preventDefault();
      }
    }
  }, x(ut, null, [{ key: "VERSION", get: function get() {
      return "4.0.0-alpha.6";
    } }, { key: "Default", get: function get() {
      return U;
    } }]), lt = ut, M(document).on(Y.CLICK_DATA_API, st, lt._dataApiClickHandler), M(window).on(Y.LOAD_DATA_API, function () {
    M(at).each(function () {
      var t = M(this);lt._jQueryInterface.call(t, t.data());
    });
  }), M.fn[W] = lt._jQueryInterface, M.fn[W].Constructor = lt, M.fn[W].noConflict = function () {
    return M.fn[W] = F, lt._jQueryInterface;
  };function ut(t, e) {
    C(this, ut), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(e), this._element = M(t)[0], this._indicatorsElement = M(this._element).find(rt)[0], this._addEventListeners();
  }var ct, dt, ft, ht, pt, mt, gt, vt, yt, bt, _t, wt, xt, Ct, Et, Tt, St;ct = jQuery, dt = "collapse", ht = "." + (ft = "bs.collapse"), pt = ct.fn[dt], mt = { toggle: !0, parent: "" }, gt = { toggle: "boolean", parent: "string" }, vt = { SHOW: "show" + ht, SHOWN: "shown" + ht, HIDE: "hide" + ht, HIDDEN: "hidden" + ht, CLICK_DATA_API: "click" + ht + ".data-api" }, yt = "show", bt = "collapse", _t = "collapsing", wt = "collapsed", xt = "width", Ct = "height", Et = ".card > .show, .card > .collapsing", Tt = '[data-toggle="collapse"]', It.prototype.toggle = function () {
    ct(this._element).hasClass(yt) ? this.hide() : this.show();
  }, It.prototype.show = function () {
    var t = this;if (this._isTransitioning) throw new Error("Collapse is transitioning");if (!ct(this._element).hasClass(yt)) {
      var e = void 0,
          n = void 0;if (this._parent && ((e = ct.makeArray(ct(this._parent).find(Et))).length || (e = null)), !(e && (n = ct(e).data(ft)) && n._isTransitioning)) {
        var i = ct.Event(vt.SHOW);if (ct(this._element).trigger(i), !i.isDefaultPrevented()) {
          var _r2 = function _r2() {
            ct(t._element).removeClass(_t).addClass(bt).addClass(yt), t._element.style[o] = "", t.setTransitioning(!1), ct(t._element).trigger(vt.SHOWN);
          };

          e && (It._jQueryInterface.call(ct(e), "hide"), n || ct(e).data(ft, null));var o = this._getDimension();if (ct(this._element).removeClass(bt).addClass(_t), this._element.style[o] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && ct(this._triggerArray).removeClass(wt).attr("aria-expanded", !0), this.setTransitioning(!0), E.supportsTransitionEnd()) {
            var s = "scroll" + (o[0].toUpperCase() + o.slice(1));ct(this._element).one(E.TRANSITION_END, _r2).emulateTransitionEnd(600), this._element.style[o] = this._element[s] + "px";
          } else _r2();
        }
      }
    }
  }, It.prototype.hide = function () {
    var t = this;if (this._isTransitioning) throw new Error("Collapse is transitioning");if (ct(this._element).hasClass(yt)) {
      var e = ct.Event(vt.HIDE);if (ct(this._element).trigger(e), !e.isDefaultPrevented()) {
        var _o2 = function _o2() {
          t.setTransitioning(!1), ct(t._element).removeClass(_t).addClass(bt).trigger(vt.HIDDEN);
        };

        var n = this._getDimension(),
            i = n === xt ? "offsetWidth" : "offsetHeight";this._element.style[n] = this._element[i] + "px", E.reflow(this._element), ct(this._element).addClass(_t).removeClass(bt).removeClass(yt), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && ct(this._triggerArray).addClass(wt).attr("aria-expanded", !1), this.setTransitioning(!0), this._element.style[n] = "", E.supportsTransitionEnd() ? ct(this._element).one(E.TRANSITION_END, _o2).emulateTransitionEnd(600) : _o2();
      }
    }
  }, It.prototype.setTransitioning = function (t) {
    this._isTransitioning = t;
  }, It.prototype.dispose = function () {
    ct.removeData(this._element, ft), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
  }, It.prototype._getConfig = function (t) {
    return (t = ct.extend({}, mt, t)).toggle = Boolean(t.toggle), E.typeCheckConfig(dt, t, gt), t;
  }, It.prototype._getDimension = function () {
    return ct(this._element).hasClass(xt) ? xt : Ct;
  }, It.prototype._getParent = function () {
    var n = this,
        t = ct(this._config.parent)[0],
        e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return ct(t).find(e).each(function (t, e) {
      n._addAriaAndCollapsedClass(It._getTargetFromElement(e), [e]);
    }), t;
  }, It.prototype._addAriaAndCollapsedClass = function (t, e) {
    if (t) {
      var n = ct(t).hasClass(yt);t.setAttribute("aria-expanded", n), e.length && ct(e).toggleClass(wt, !n).attr("aria-expanded", n);
    }
  }, It._getTargetFromElement = function (t) {
    var e = E.getSelectorFromElement(t);return e ? ct(e)[0] : null;
  }, It._jQueryInterface = function (i) {
    return this.each(function () {
      var t = ct(this),
          e = t.data(ft),
          n = ct.extend({}, mt, t.data(), "object" === (void 0 === i ? "undefined" : w(i)) && i);if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new It(this, n), t.data(ft, e)), "string" == typeof i) {
        if (void 0 === e[i]) throw new Error('No method named "' + i + '"');e[i]();
      }
    });
  }, x(It, null, [{ key: "VERSION", get: function get() {
      return "4.0.0-alpha.6";
    } }, { key: "Default", get: function get() {
      return mt;
    } }]), St = It, ct(document).on(vt.CLICK_DATA_API, Tt, function (t) {
    t.preventDefault();var e = St._getTargetFromElement(this),
        n = ct(e).data(ft) ? "toggle" : ct(this).data();St._jQueryInterface.call(ct(e), n);
  }), ct.fn[dt] = St._jQueryInterface, ct.fn[dt].Constructor = St, ct.fn[dt].noConflict = function () {
    return ct.fn[dt] = pt, St._jQueryInterface;
  };function It(t, e) {
    C(this, It), this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = ct.makeArray(ct('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
  }var At, kt, Dt, Ot, Nt, Lt, jt, Pt, Ht, zt, Mt, Wt, Rt, qt, Bt, Ft, Ut, $t;At = jQuery, kt = "dropdown", Ot = "." + (Dt = "bs.dropdown"), Nt = ".data-api", Lt = At.fn[kt], jt = { HIDE: "hide" + Ot, HIDDEN: "hidden" + Ot, SHOW: "show" + Ot, SHOWN: "shown" + Ot, CLICK: "click" + Ot, CLICK_DATA_API: "click" + Ot + Nt, FOCUSIN_DATA_API: "focusin" + Ot + Nt, KEYDOWN_DATA_API: "keydown" + Ot + Nt }, Pt = "dropdown-backdrop", Ht = "disabled", zt = "show", Mt = ".dropdown-backdrop", Wt = '[data-toggle="dropdown"]', Rt = ".dropdown form", qt = '[role="menu"]', Bt = '[role="listbox"]', Ft = ".navbar-nav", Ut = '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a', Qt.prototype.toggle = function () {
    if (this.disabled || At(this).hasClass(Ht)) return !1;var t = Qt._getParentFromElement(this),
        e = At(t).hasClass(zt);if (Qt._clearMenus(), e) return !1;if ("ontouchstart" in document.documentElement && !At(t).closest(Ft).length) {
      var n = document.createElement("div");n.className = Pt, At(n).insertBefore(this), At(n).on("click", Qt._clearMenus);
    }var i = { relatedTarget: this },
        o = At.Event(jt.SHOW, i);return At(t).trigger(o), o.isDefaultPrevented() || (this.focus(), this.setAttribute("aria-expanded", !0), At(t).toggleClass(zt), At(t).trigger(At.Event(jt.SHOWN, i))), !1;
  }, Qt.prototype.dispose = function () {
    At.removeData(this._element, Dt), At(this._element).off(Ot), this._element = null;
  }, Qt.prototype._addEventListeners = function () {
    At(this._element).on(jt.CLICK, this.toggle);
  }, Qt._jQueryInterface = function (e) {
    return this.each(function () {
      var t = At(this).data(Dt);if (t || (t = new Qt(this), At(this).data(Dt, t)), "string" == typeof e) {
        if (void 0 === t[e]) throw new Error('No method named "' + e + '"');t[e].call(this);
      }
    });
  }, Qt._clearMenus = function (t) {
    if (!t || 3 !== t.which) {
      var e = At(Mt)[0];e && e.parentNode.removeChild(e);for (var n = At.makeArray(At(Wt)), i = 0; i < n.length; i++) {
        var o = Qt._getParentFromElement(n[i]),
            r = { relatedTarget: n[i] };if (At(o).hasClass(zt) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "focusin" === t.type) && At.contains(o, t.target))) {
          var s = At.Event(jt.HIDE, r);At(o).trigger(s), s.isDefaultPrevented() || (n[i].setAttribute("aria-expanded", "false"), At(o).removeClass(zt).trigger(At.Event(jt.HIDDEN, r)));
        }
      }
    }
  }, Qt._getParentFromElement = function (t) {
    var e = void 0,
        n = E.getSelectorFromElement(t);return n && (e = At(n)[0]), e || t.parentNode;
  }, Qt._dataApiKeydownHandler = function (t) {
    if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !At(this).hasClass(Ht))) {
      var e = Qt._getParentFromElement(this),
          n = At(e).hasClass(zt);if (!n && 27 !== t.which || n && 27 === t.which) {
        if (27 === t.which) {
          var i = At(e).find(Wt)[0];At(i).trigger("focus");
        }At(this).trigger("click");
      } else {
        var o = At(e).find(Ut).get();if (o.length) {
          var r = o.indexOf(t.target);38 === t.which && 0 < r && r--, 40 === t.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus();
        }
      }
    }
  }, x(Qt, null, [{ key: "VERSION", get: function get() {
      return "4.0.0-alpha.6";
    } }]), $t = Qt, At(document).on(jt.KEYDOWN_DATA_API, Wt, $t._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API, qt, $t._dataApiKeydownHandler).on(jt.KEYDOWN_DATA_API, Bt, $t._dataApiKeydownHandler).on(jt.CLICK_DATA_API + " " + jt.FOCUSIN_DATA_API, $t._clearMenus).on(jt.CLICK_DATA_API, Wt, $t.prototype.toggle).on(jt.CLICK_DATA_API, Rt, function (t) {
    t.stopPropagation();
  }), At.fn[kt] = $t._jQueryInterface, At.fn[kt].Constructor = $t, At.fn[kt].noConflict = function () {
    return At.fn[kt] = Lt, $t._jQueryInterface;
  };function Qt(t) {
    C(this, Qt), this._element = t, this._addEventListeners();
  }var Yt, Kt, Vt, Xt, Gt, Zt, Jt, te, ee, ne, ie, oe, re, se, ae, le, ue, ce;Yt = jQuery, Kt = "modal", Xt = "." + (Vt = "bs.modal"), Gt = Yt.fn[Kt], Zt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, Jt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, te = { HIDE: "hide" + Xt, HIDDEN: "hidden" + Xt, SHOW: "show" + Xt, SHOWN: "shown" + Xt, FOCUSIN: "focusin" + Xt, RESIZE: "resize" + Xt, CLICK_DISMISS: "click.dismiss" + Xt, KEYDOWN_DISMISS: "keydown.dismiss" + Xt, MOUSEUP_DISMISS: "mouseup.dismiss" + Xt, MOUSEDOWN_DISMISS: "mousedown.dismiss" + Xt, CLICK_DATA_API: "click" + Xt + ".data-api" }, ee = "modal-scrollbar-measure", ne = "modal-backdrop", ie = "modal-open", oe = "fade", re = "show", se = ".modal-dialog", ae = '[data-toggle="modal"]', le = '[data-dismiss="modal"]', ue = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", de.prototype.toggle = function (t) {
    return this._isShown ? this.hide() : this.show(t);
  }, de.prototype.show = function (t) {
    var e = this;if (this._isTransitioning) throw new Error("Modal is transitioning");E.supportsTransitionEnd() && Yt(this._element).hasClass(oe) && (this._isTransitioning = !0);var n = Yt.Event(te.SHOW, { relatedTarget: t });Yt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), Yt(document.body).addClass(ie), this._setEscapeEvent(), this._setResizeEvent(), Yt(this._element).on(te.CLICK_DISMISS, le, function (t) {
      return e.hide(t);
    }), Yt(this._dialog).on(te.MOUSEDOWN_DISMISS, function () {
      Yt(e._element).one(te.MOUSEUP_DISMISS, function (t) {
        Yt(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
      });
    }), this._showBackdrop(function () {
      return e._showElement(t);
    }));
  }, de.prototype.hide = function (t) {
    var e = this;if (t && t.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");var n = E.supportsTransitionEnd() && Yt(this._element).hasClass(oe);n && (this._isTransitioning = !0);var i = Yt.Event(te.HIDE);Yt(this._element).trigger(i), this._isShown && !i.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), Yt(document).off(te.FOCUSIN), Yt(this._element).removeClass(re), Yt(this._element).off(te.CLICK_DISMISS), Yt(this._dialog).off(te.MOUSEDOWN_DISMISS), n ? Yt(this._element).one(E.TRANSITION_END, function (t) {
      return e._hideModal(t);
    }).emulateTransitionEnd(300) : this._hideModal());
  }, de.prototype.dispose = function () {
    Yt.removeData(this._element, Vt), Yt(window, document, this._element, this._backdrop).off(Xt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null;
  }, de.prototype._getConfig = function (t) {
    return t = Yt.extend({}, Zt, t), E.typeCheckConfig(Kt, t, Jt), t;
  }, de.prototype._showElement = function (t) {
    var e = this,
        n = E.supportsTransitionEnd() && Yt(this._element).hasClass(oe);function i() {
      e._config.focus && e._element.focus(), e._isTransitioning = !1, Yt(e._element).trigger(o);
    }this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && E.reflow(this._element), Yt(this._element).addClass(re), this._config.focus && this._enforceFocus();var o = Yt.Event(te.SHOWN, { relatedTarget: t });n ? Yt(this._dialog).one(E.TRANSITION_END, i).emulateTransitionEnd(300) : i();
  }, de.prototype._enforceFocus = function () {
    var e = this;Yt(document).off(te.FOCUSIN).on(te.FOCUSIN, function (t) {
      document === t.target || e._element === t.target || Yt(e._element).has(t.target).length || e._element.focus();
    });
  }, de.prototype._setEscapeEvent = function () {
    var e = this;this._isShown && this._config.keyboard ? Yt(this._element).on(te.KEYDOWN_DISMISS, function (t) {
      27 === t.which && e.hide();
    }) : this._isShown || Yt(this._element).off(te.KEYDOWN_DISMISS);
  }, de.prototype._setResizeEvent = function () {
    var e = this;this._isShown ? Yt(window).on(te.RESIZE, function (t) {
      return e._handleUpdate(t);
    }) : Yt(window).off(te.RESIZE);
  }, de.prototype._hideModal = function () {
    var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function () {
      Yt(document.body).removeClass(ie), t._resetAdjustments(), t._resetScrollbar(), Yt(t._element).trigger(te.HIDDEN);
    });
  }, de.prototype._removeBackdrop = function () {
    this._backdrop && (Yt(this._backdrop).remove(), this._backdrop = null);
  }, de.prototype._showBackdrop = function (t) {
    var e = this,
        n = Yt(this._element).hasClass(oe) ? oe : "";if (this._isShown && this._config.backdrop) {
      var i = E.supportsTransitionEnd() && n;if (this._backdrop = document.createElement("div"), this._backdrop.className = ne, n && Yt(this._backdrop).addClass(n), Yt(this._backdrop).appendTo(document.body), Yt(this._element).on(te.CLICK_DISMISS, function (t) {
        e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
      }), i && E.reflow(this._backdrop), Yt(this._backdrop).addClass(re), !t) return;if (!i) return void t();Yt(this._backdrop).one(E.TRANSITION_END, t).emulateTransitionEnd(150);
    } else if (!this._isShown && this._backdrop) {
      var _o3 = function _o3() {
        e._removeBackdrop(), t && t();
      };

      Yt(this._backdrop).removeClass(re), E.supportsTransitionEnd() && Yt(this._element).hasClass(oe) ? Yt(this._backdrop).one(E.TRANSITION_END, _o3).emulateTransitionEnd(150) : _o3();
    } else t && t();
  }, de.prototype._handleUpdate = function () {
    this._adjustDialog();
  }, de.prototype._adjustDialog = function () {
    var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
  }, de.prototype._resetAdjustments = function () {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }, de.prototype._checkScrollbar = function () {
    this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
  }, de.prototype._setScrollbar = function () {
    var t = parseInt(Yt(ue).css("padding-right") || 0, 10);this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px");
  }, de.prototype._resetScrollbar = function () {
    document.body.style.paddingRight = this._originalBodyPadding;
  }, de.prototype._getScrollbarWidth = function () {
    var t = document.createElement("div");t.className = ee, document.body.appendChild(t);var e = t.offsetWidth - t.clientWidth;return document.body.removeChild(t), e;
  }, de._jQueryInterface = function (n, i) {
    return this.each(function () {
      var t = Yt(this).data(Vt),
          e = Yt.extend({}, de.Default, Yt(this).data(), "object" === (void 0 === n ? "undefined" : w(n)) && n);if (t || (t = new de(this, e), Yt(this).data(Vt, t)), "string" == typeof n) {
        if (void 0 === t[n]) throw new Error('No method named "' + n + '"');t[n](i);
      } else e.show && t.show(i);
    });
  }, x(de, null, [{ key: "VERSION", get: function get() {
      return "4.0.0-alpha.6";
    } }, { key: "Default", get: function get() {
      return Zt;
    } }]), ce = de, Yt(document).on(te.CLICK_DATA_API, ae, function (t) {
    var e = this,
        n = void 0,
        i = E.getSelectorFromElement(this);i && (n = Yt(i)[0]);var o = Yt(n).data(Vt) ? "toggle" : Yt.extend({}, Yt(n).data(), Yt(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var r = Yt(n).one(te.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(te.HIDDEN, function () {
        Yt(e).is(":visible") && e.focus();
      });
    });ce._jQueryInterface.call(Yt(n), o, this);
  }), Yt.fn[Kt] = ce._jQueryInterface, Yt.fn[Kt].Constructor = ce, Yt.fn[Kt].noConflict = function () {
    return Yt.fn[Kt] = Gt, ce._jQueryInterface;
  };function de(t, e) {
    C(this, de), this._config = this._getConfig(e), this._element = t, this._dialog = Yt(t).find(se)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
  }var fe, he, pe, me, ge, ve, ye, be, _e, we, xe, Ce, Ee, Te, Se, Ie, Ae, ke, De, Oe;fe = jQuery, he = "scrollspy", me = "." + (pe = "bs.scrollspy"), ge = fe.fn[he], ve = { offset: 10, method: "auto", target: "" }, ye = { offset: "number", method: "string", target: "(string|element)" }, be = { ACTIVATE: "activate" + me, SCROLL: "scroll" + me, LOAD_DATA_API: "load" + me + ".data-api" }, _e = "dropdown-item", we = "active", xe = '[data-spy="scroll"]', Ce = ".active", Ee = "li", Te = ".nav-link", Se = ".dropdown", Ie = ".dropdown-item", Ae = ".dropdown-toggle", ke = "offset", De = "position", Ne.prototype.refresh = function () {
    var e = this,
        t = this._scrollElement !== this._scrollElement.window ? De : ke,
        i = "auto" === this._config.method ? t : this._config.method,
        o = i === De ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), fe.makeArray(fe(this._selector)).map(function (t) {
      var e = void 0,
          n = E.getSelectorFromElement(t);return n && (e = fe(n)[0]), e && (e.offsetWidth || e.offsetHeight) ? [fe(e)[i]().top + o, n] : null;
    }).filter(function (t) {
      return t;
    }).sort(function (t, e) {
      return t[0] - e[0];
    }).forEach(function (t) {
      e._offsets.push(t[0]), e._targets.push(t[1]);
    });
  }, Ne.prototype.dispose = function () {
    fe.removeData(this._element, pe), fe(this._scrollElement).off(me), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
  }, Ne.prototype._getConfig = function (t) {
    if ("string" != typeof (t = fe.extend({}, ve, t)).target) {
      var e = fe(t.target).attr("id");e || (e = E.getUID(he), fe(t.target).attr("id", e)), t.target = "#" + e;
    }return E.typeCheckConfig(he, t, ye), t;
  }, Ne.prototype._getScrollTop = function () {
    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
  }, Ne.prototype._getScrollHeight = function () {
    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
  }, Ne.prototype._getOffsetHeight = function () {
    return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight;
  }, Ne.prototype._process = function () {
    var t = this._getScrollTop() + this._config.offset,
        e = this._getScrollHeight(),
        n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), n <= t) {
      var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
    } else {
      if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
      }
    }
  }, Ne.prototype._activate = function (e) {
    this._activeTarget = e, this._clear();var t = this._selector.split(",");t = t.map(function (t) {
      return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
    });var n = fe(t.join(","));n.hasClass(_e) ? (n.closest(Se).find(Ae).addClass(we), n.addClass(we)) : n.parents(Ee).find("> " + Te).addClass(we), fe(this._scrollElement).trigger(be.ACTIVATE, { relatedTarget: e });
  }, Ne.prototype._clear = function () {
    fe(this._selector).filter(Ce).removeClass(we);
  }, Ne._jQueryInterface = function (n) {
    return this.each(function () {
      var t = fe(this).data(pe),
          e = "object" === (void 0 === n ? "undefined" : w(n)) && n;if (t || (t = new Ne(this, e), fe(this).data(pe, t)), "string" == typeof n) {
        if (void 0 === t[n]) throw new Error('No method named "' + n + '"');t[n]();
      }
    });
  }, x(Ne, null, [{ key: "VERSION", get: function get() {
      return "4.0.0-alpha.6";
    } }, { key: "Default", get: function get() {
      return ve;
    } }]), Oe = Ne, fe(window).on(be.LOAD_DATA_API, function () {
    for (var t = fe.makeArray(fe(xe)), e = t.length; e--;) {
      var n = fe(t[e]);Oe._jQueryInterface.call(n, n.data());
    }
  }), fe.fn[he] = Oe._jQueryInterface, fe.fn[he].Constructor = Oe, fe.fn[he].noConflict = function () {
    return fe.fn[he] = ge, Oe._jQueryInterface;
  };function Ne(t, e) {
    var n = this;C(this, Ne), this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + Te + "," + this._config.target + " " + Ie, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, fe(this._scrollElement).on(be.SCROLL, function (t) {
      return n._process(t);
    }), this.refresh(), this._process();
  }var Le, je, Pe, He, ze, Me, We, Re, qe, Be, Fe, Ue, $e, Qe, Ye, Ke, Ve, Xe, Ge;Le = jQuery, Pe = "." + (je = "bs.tab"), He = Le.fn.tab, ze = { HIDE: "hide" + Pe, HIDDEN: "hidden" + Pe, SHOW: "show" + Pe, SHOWN: "shown" + Pe, CLICK_DATA_API: "click" + Pe + ".data-api" }, Me = "dropdown-menu", We = "active", Re = "disabled", qe = "fade", Be = "show", Fe = ".dropdown", Ue = "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)", $e = "> .nav-item .fade, > .fade", Qe = ".active", Ye = "> .nav-item > .active, > .active", Ke = '[data-toggle="tab"], [data-toggle="pill"]', Ve = ".dropdown-toggle", Xe = "> .dropdown-menu .active", Ze.prototype.show = function () {
    var n = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && Le(this._element).hasClass(We) || Le(this._element).hasClass(Re))) {
      var t = void 0,
          i = void 0,
          e = Le(this._element).closest(Ue)[0],
          o = E.getSelectorFromElement(this._element);e && (i = (i = Le.makeArray(Le(e).find(Qe)))[i.length - 1]);var r = Le.Event(ze.HIDE, { relatedTarget: this._element }),
          s = Le.Event(ze.SHOW, { relatedTarget: i });if (i && Le(i).trigger(r), Le(this._element).trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
        var _a = function _a() {
          var t = Le.Event(ze.HIDDEN, { relatedTarget: n._element }),
              e = Le.Event(ze.SHOWN, { relatedTarget: i });Le(i).trigger(t), Le(n._element).trigger(e);
        };

        o && (t = Le(o)[0]), this._activate(this._element, e), t ? this._activate(t, t.parentNode, _a) : _a();
      }
    }
  }, Ze.prototype.dispose = function () {
    Le.removeClass(this._element, je), this._element = null;
  }, Ze.prototype._activate = function (t, e, n) {
    function i() {
      return o._transitionComplete(t, r, s, n);
    }var o = this,
        r = Le(e).find(Ye)[0],
        s = n && E.supportsTransitionEnd() && (r && Le(r).hasClass(qe) || Boolean(Le(e).find($e)[0]));r && s ? Le(r).one(E.TRANSITION_END, i).emulateTransitionEnd(150) : i(), r && Le(r).removeClass(Be);
  }, Ze.prototype._transitionComplete = function (t, e, n, i) {
    if (e) {
      Le(e).removeClass(We);var o = Le(e.parentNode).find(Xe)[0];o && Le(o).removeClass(We), e.setAttribute("aria-expanded", !1);
    }if (Le(t).addClass(We), t.setAttribute("aria-expanded", !0), n ? (E.reflow(t), Le(t).addClass(Be)) : Le(t).removeClass(qe), t.parentNode && Le(t.parentNode).hasClass(Me)) {
      var r = Le(t).closest(Fe)[0];r && Le(r).find(Ve).addClass(We), t.setAttribute("aria-expanded", !0);
    }i && i();
  }, Ze._jQueryInterface = function (n) {
    return this.each(function () {
      var t = Le(this),
          e = t.data(je);if (e || (e = new Ze(this), t.data(je, e)), "string" == typeof n) {
        if (void 0 === e[n]) throw new Error('No method named "' + n + '"');e[n]();
      }
    });
  }, x(Ze, null, [{ key: "VERSION", get: function get() {
      return "4.0.0-alpha.6";
    } }]), Ge = Ze, Le(document).on(ze.CLICK_DATA_API, Ke, function (t) {
    t.preventDefault(), Ge._jQueryInterface.call(Le(this), "show");
  }), Le.fn.tab = Ge._jQueryInterface, Le.fn.tab.Constructor = Ge, Le.fn.tab.noConflict = function () {
    return Le.fn.tab = He, Ge._jQueryInterface;
  };function Ze(t) {
    C(this, Ze), this._element = t;
  }var Je,
      tn,
      en,
      nn,
      on,
      rn,
      sn,
      an,
      ln,
      un,
      cn,
      dn,
      fn,
      hn,
      pn = function (u) {
    if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");var e = "tooltip",
        i = "bs.tooltip",
        t = "." + i,
        n = u.fn[e],
        o = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: "0 0", constraints: [], container: !1 },
        r = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "string", constraints: "array", container: "(string|element|boolean)" },
        s = { TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right" },
        a = "show",
        c = "out",
        l = { HIDE: "hide" + t, HIDDEN: "hidden" + t, SHOW: "show" + t, SHOWN: "shown" + t, INSERTED: "inserted" + t, CLICK: "click" + t, FOCUSIN: "focusin" + t, FOCUSOUT: "focusout" + t, MOUSEENTER: "mouseenter" + t, MOUSELEAVE: "mouseleave" + t },
        d = "fade",
        f = "show",
        h = ".tooltip-inner",
        p = { element: !1, enabled: !1 },
        m = "hover",
        g = "focus",
        v = "click",
        y = "manual",
        b = (_.prototype.enable = function () {
      this._isEnabled = !0;
    }, _.prototype.disable = function () {
      this._isEnabled = !1;
    }, _.prototype.toggleEnabled = function () {
      this._isEnabled = !this._isEnabled;
    }, _.prototype.toggle = function (t) {
      if (t) {
        var e = this.constructor.DATA_KEY,
            n = u(t.currentTarget).data(e);n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), u(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
      } else {
        if (u(this.getTipElement()).hasClass(f)) return void this._leave(null, this);this._enter(null, this);
      }
    }, _.prototype.dispose = function () {
      clearTimeout(this._timeout), this.cleanupTether(), u.removeData(this.element, this.constructor.DATA_KEY), u(this.element).off(this.constructor.EVENT_KEY), u(this.element).closest(".modal").off("hide.bs.modal"), this.tip && u(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null;
    }, _.prototype.show = function () {
      var e = this;if ("none" === u(this.element).css("display")) throw new Error("Please use show on visible elements");var t = u.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
        var _l = function _l() {
          var t = e._hoverState;e._hoverState = null, e._isTransitioning = !1, u(e.element).trigger(e.constructor.Event.SHOWN), t === c && e._leave(null, e);
        };

        if (this._isTransitioning) throw new Error("Tooltip is transitioning");u(this.element).trigger(t);var n = u.contains(this.element.ownerDocument.documentElement, this.element);if (t.isDefaultPrevented() || !n) return;var i = this.getTipElement(),
            o = E.getUID(this.constructor.NAME);i.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && u(i).addClass(d);var r = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
            s = this._getAttachment(r),
            a = !1 === this.config.container ? document.body : u(this.config.container);if (u(i).data(this.constructor.DATA_KEY, this).appendTo(a), u(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({ attachment: s, element: i, target: this.element, classes: p, classPrefix: "bs-tether", offset: this.config.offset, constraints: this.config.constraints, addTargetClasses: !1 }), E.reflow(i), this._tether.position(), u(i).addClass(f), E.supportsTransitionEnd() && u(this.tip).hasClass(d)) return this._isTransitioning = !0, void u(this.tip).one(E.TRANSITION_END, _l).emulateTransitionEnd(_._TRANSITION_DURATION);_l();
      }
    }, _.prototype.hide = function (t) {
      var e = this,
          n = this.getTipElement(),
          i = u.Event(this.constructor.Event.HIDE);if (this._isTransitioning) throw new Error("Tooltip is transitioning");function o() {
        e._hoverState !== a && n.parentNode && n.parentNode.removeChild(n), e.element.removeAttribute("aria-describedby"), u(e.element).trigger(e.constructor.Event.HIDDEN), e._isTransitioning = !1, e.cleanupTether(), t && t();
      }u(this.element).trigger(i), i.isDefaultPrevented() || (u(n).removeClass(f), this._activeTrigger[v] = !1, this._activeTrigger[g] = !1, this._activeTrigger[m] = !1, E.supportsTransitionEnd() && u(this.tip).hasClass(d) ? (this._isTransitioning = !0, u(n).one(E.TRANSITION_END, o).emulateTransitionEnd(150)) : o(), this._hoverState = "");
    }, _.prototype.isWithContent = function () {
      return Boolean(this.getTitle());
    }, _.prototype.getTipElement = function () {
      return this.tip = this.tip || u(this.config.template)[0];
    }, _.prototype.setContent = function () {
      var t = u(this.getTipElement());this.setElementContent(t.find(h), this.getTitle()), t.removeClass(d + " " + f), this.cleanupTether();
    }, _.prototype.setElementContent = function (t, e) {
      var n = this.config.html;"object" === (void 0 === e ? "undefined" : w(e)) && (e.nodeType || e.jquery) ? n ? u(e).parent().is(t) || t.empty().append(e) : t.text(u(e).text()) : t[n ? "html" : "text"](e);
    }, _.prototype.getTitle = function () {
      var t = this.element.getAttribute("data-original-title");return t = t || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title);
    }, _.prototype.cleanupTether = function () {
      this._tether && this._tether.destroy();
    }, _.prototype._getAttachment = function (t) {
      return s[t.toUpperCase()];
    }, _.prototype._setListeners = function () {
      var i = this;this.config.trigger.split(" ").forEach(function (t) {
        if ("click" === t) u(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
          return i.toggle(t);
        });else if (t !== y) {
          var e = t === m ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
              n = t === m ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;u(i.element).on(e, i.config.selector, function (t) {
            return i._enter(t);
          }).on(n, i.config.selector, function (t) {
            return i._leave(t);
          });
        }u(i.element).closest(".modal").on("hide.bs.modal", function () {
          return i.hide();
        });
      }), this.config.selector ? this.config = u.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
    }, _.prototype._fixTitle = function () {
      var t = w(this.element.getAttribute("data-original-title"));!this.element.getAttribute("title") && "string" === t || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
    }, _.prototype._enter = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || u(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), u(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? g : m] = !0), u(e.getTipElement()).hasClass(f) || e._hoverState === a ? e._hoverState = a : (clearTimeout(e._timeout), e._hoverState = a, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
        e._hoverState === a && e.show();
      }, e.config.delay.show) : e.show());
    }, _.prototype._leave = function (t, e) {
      var n = this.constructor.DATA_KEY;(e = e || u(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), u(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? g : m] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = c, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
        e._hoverState === c && e.hide();
      }, e.config.delay.hide) : e.hide());
    }, _.prototype._isWithActiveTrigger = function () {
      for (var t in this._activeTrigger) {
        if (this._activeTrigger[t]) return !0;
      }return !1;
    }, _.prototype._getConfig = function (t) {
      return (t = u.extend({}, this.constructor.Default, u(this.element).data(), t)).delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), E.typeCheckConfig(e, t, this.constructor.DefaultType), t;
    }, _.prototype._getDelegateConfig = function () {
      var t = {};if (this.config) for (var e in this.config) {
        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
      }return t;
    }, _._jQueryInterface = function (n) {
      return this.each(function () {
        var t = u(this).data(i),
            e = "object" === (void 0 === n ? "undefined" : w(n)) && n;if ((t || !/dispose|hide/.test(n)) && (t || (t = new _(this, e), u(this).data(i, t)), "string" == typeof n)) {
          if (void 0 === t[n]) throw new Error('No method named "' + n + '"');t[n]();
        }
      });
    }, x(_, null, [{ key: "VERSION", get: function get() {
        return "4.0.0-alpha.6";
      } }, { key: "Default", get: function get() {
        return o;
      } }, { key: "NAME", get: function get() {
        return e;
      } }, { key: "DATA_KEY", get: function get() {
        return i;
      } }, { key: "Event", get: function get() {
        return l;
      } }, { key: "EVENT_KEY", get: function get() {
        return t;
      } }, { key: "DefaultType", get: function get() {
        return r;
      } }]), _);function _(t, e) {
      C(this, _), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
    }return u.fn[e] = b._jQueryInterface, u.fn[e].Constructor = b, u.fn[e].noConflict = function () {
      return u.fn[e] = n, b._jQueryInterface;
    }, b;
  }(jQuery);Je = jQuery, en = "popover", on = "." + (nn = "bs.popover"), rn = Je.fn[en], sn = Je.extend({}, pn.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), an = Je.extend({}, pn.DefaultType, { content: "(string|element|function)" }), ln = "fade", cn = ".popover-title", dn = ".popover-content", fn = { HIDE: "hide" + on, HIDDEN: "hidden" + on, SHOW: (un = "show") + on, SHOWN: "shown" + on, INSERTED: "inserted" + on, CLICK: "click" + on, FOCUSIN: "focusin" + on, FOCUSOUT: "focusout" + on, MOUSEENTER: "mouseenter" + on, MOUSELEAVE: "mouseleave" + on }, function (t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (typeof e === "undefined" ? "undefined" : _typeof(e)));t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
  }(mn, tn = pn), mn.prototype.isWithContent = function () {
    return this.getTitle() || this._getContent();
  }, mn.prototype.getTipElement = function () {
    return this.tip = this.tip || Je(this.config.template)[0];
  }, mn.prototype.setContent = function () {
    var t = Je(this.getTipElement());this.setElementContent(t.find(cn), this.getTitle()), this.setElementContent(t.find(dn), this._getContent()), t.removeClass(ln + " " + un), this.cleanupTether();
  }, mn.prototype._getContent = function () {
    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
  }, mn._jQueryInterface = function (n) {
    return this.each(function () {
      var t = Je(this).data(nn),
          e = "object" === (void 0 === n ? "undefined" : w(n)) ? n : null;if ((t || !/destroy|hide/.test(n)) && (t || (t = new mn(this, e), Je(this).data(nn, t)), "string" == typeof n)) {
        if (void 0 === t[n]) throw new Error('No method named "' + n + '"');t[n]();
      }
    });
  }, x(mn, null, [{ key: "VERSION", get: function get() {
      return "4.0.0-alpha.6";
    } }, { key: "Default", get: function get() {
      return sn;
    } }, { key: "NAME", get: function get() {
      return en;
    } }, { key: "DATA_KEY", get: function get() {
      return nn;
    } }, { key: "Event", get: function get() {
      return fn;
    } }, { key: "EVENT_KEY", get: function get() {
      return on;
    } }, { key: "DefaultType", get: function get() {
      return an;
    } }]), hn = mn, Je.fn[en] = hn._jQueryInterface, Je.fn[en].Constructor = hn, Je.fn[en].noConflict = function () {
    return Je.fn[en] = rn, hn._jQueryInterface;
  };function mn() {
    return C(this, mn), function (t, e) {
      if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != (typeof e === "undefined" ? "undefined" : _typeof(e)) && "function" != typeof e ? t : e;
    }(this, tn.apply(this, arguments));
  }
}(), function (a) {
  "use strict";
  function l(t) {
    return t.is('[type="checkbox"]') ? t.prop("checked") : t.is('[type="radio"]') ? !!a('[name="' + t.attr("name") + '"]:checked').length : a.trim(t.val());
  }var s = function s(t, e) {
    for (var n in this.options = e, this.$element = a(t), this.$inputs = this.$element.find(s.INPUT_SELECTOR), this.$btn = a('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), e.errors = a.extend({}, s.DEFAULTS.errors, e.errors), e.custom) {
      if (!e.errors[n]) throw new Error("Missing default error message for custom validator: " + n);
    }a.extend(s.VALIDATORS, e.custom), this.$element.attr("novalidate", !0), this.toggleSubmit(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", s.INPUT_SELECTOR, a.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", a.proxy(this.onSubmit, this)), this.$element.find("[data-match]").each(function () {
      var e = a(this),
          t = e.data("match");a(t).on("input.bs.validator", function (t) {
        l(e) && e.trigger("input.bs.validator");
      });
    });
  };function e(i) {
    return this.each(function () {
      var t = a(this),
          e = a.extend({}, s.DEFAULTS, t.data(), "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i),
          n = t.data("bs.validator");!n && "destroy" == i || (n || t.data("bs.validator", n = new s(this, e)), "string" == typeof i && n[i]());
    });
  }s.INPUT_SELECTOR = ':input:not([type="submit"], button):enabled:visible', s.FOCUS_OFFSET = 20, s.DEFAULTS = { delay: 500, html: !1, disable: !0, focus: !0, custom: {}, errors: { match: "Does not match", minlength: "Not long enough" }, feedback: { success: "glyphicon-ok", error: "glyphicon-remove" } }, s.VALIDATORS = { native: function native(t) {
      var e = t[0];return !e.checkValidity || e.checkValidity();
    }, match: function match(t) {
      var e = t.data("match");return !t.val() || t.val() === a(e).val();
    }, minlength: function minlength(t) {
      var e = t.data("minlength");return !t.val() || t.val().length >= e;
    } }, s.prototype.onInput = function (t) {
    var e = this,
        n = a(t.target),
        i = "focusout" !== t.type;this.validateInput(n, i).done(function () {
      e.toggleSubmit();
    });
  }, s.prototype.validateInput = function (e, n) {
    var t = l(e),
        i = e.data("bs.validator.previous"),
        o = e.data("bs.validator.errors");if (i === t) return a.Deferred().resolve();e.data("bs.validator.previous", t), e.is('[type="radio"]') && (e = this.$element.find('input[name="' + e.attr("name") + '"]'));var r = a.Event("validate.bs.validator", { relatedTarget: e[0] });if (this.$element.trigger(r), !r.isDefaultPrevented()) {
      var s = this;return this.runValidators(e).done(function (t) {
        e.data("bs.validator.errors", t), t.length ? n ? s.defer(e, s.showErrors) : s.showErrors(e) : s.clearErrors(e), o && t.toString() === o.toString() || (r = t.length ? a.Event("invalid.bs.validator", { relatedTarget: e[0], detail: t }) : a.Event("valid.bs.validator", { relatedTarget: e[0], detail: o }), s.$element.trigger(r)), s.toggleSubmit(), s.$element.trigger(a.Event("validated.bs.validator", { relatedTarget: e[0] }));
      });
    }
  }, s.prototype.runValidators = function (i) {
    var o = [],
        e = a.Deferred(),
        n = this.options;function r(t) {
      return i.data(t + "-error") || i.data("error") || "native" == t && i[0].validationMessage || n.errors[t];
    }return i.data("bs.validator.deferred") && i.data("bs.validator.deferred").reject(), i.data("bs.validator.deferred", e), a.each(s.VALIDATORS, a.proxy(function (t, e) {
      if ((l(i) || i.attr("required")) && (i.data(t) || "native" == t) && !e.call(this, i)) {
        var n = r(t);~o.indexOf(n) || o.push(n);
      }
    }, this)), !o.length && l(i) && i.data("remote") ? this.defer(i, function () {
      var t = {};t[i.attr("name")] = l(i), a.get(i.data("remote"), t).fail(function (t, e, n) {
        o.push(r("remote") || n);
      }).always(function () {
        e.resolve(o);
      });
    }) : e.resolve(o), e.promise();
  }, s.prototype.validate = function () {
    var e = this;return a.when(this.$inputs.map(function (t) {
      return e.validateInput(a(this), !1);
    })).then(function () {
      e.toggleSubmit(), e.focusError();
    }), this;
  }, s.prototype.focusError = function () {
    if (this.options.focus) {
      var t = a(".has-error:first :input");0 !== t.length && (a(document.body).animate({ scrollTop: t.offset().top - s.FOCUS_OFFSET }, 250), t.focus());
    }
  }, s.prototype.showErrors = function (t) {
    var e = this.options.html ? "html" : "text",
        n = t.data("bs.validator.errors"),
        i = t.closest(".form-group"),
        o = i.find(".help-block.with-errors"),
        r = i.find(".form-control-feedback");n.length && (n = a("<ul/>").addClass("list-unstyled").append(a.map(n, function (t) {
      return a("<li/>")[e](t);
    })), void 0 === o.data("bs.validator.originalContent") && o.data("bs.validator.originalContent", o.html()), o.empty().append(n), i.addClass("has-error has-danger"), i.hasClass("has-feedback") && r.removeClass(this.options.feedback.success) && r.addClass(this.options.feedback.error) && i.removeClass("has-success"));
  }, s.prototype.clearErrors = function (t) {
    var e = t.closest(".form-group"),
        n = e.find(".help-block.with-errors"),
        i = e.find(".form-control-feedback");n.html(n.data("bs.validator.originalContent")), e.removeClass("has-error has-danger"), e.hasClass("has-feedback") && i.removeClass(this.options.feedback.error) && l(t) && i.addClass(this.options.feedback.success) && e.addClass("has-success");
  }, s.prototype.hasErrors = function () {
    return !!this.$inputs.filter(function () {
      return !!(a(this).data("bs.validator.errors") || []).length;
    }).length;
  }, s.prototype.isIncomplete = function () {
    return !!this.$inputs.filter("[required]").filter(function () {
      return !l(a(this));
    }).length;
  }, s.prototype.onSubmit = function (t) {
    this.validate(), (this.isIncomplete() || this.hasErrors()) && t.preventDefault();
  }, s.prototype.toggleSubmit = function () {
    this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors());
  }, s.prototype.defer = function (t, e) {
    if (e = a.proxy(e, this, t), !this.options.delay) return e();window.clearTimeout(t.data("bs.validator.timeout")), t.data("bs.validator.timeout", window.setTimeout(e, this.options.delay));
  }, s.prototype.destroy = function () {
    return this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator").find(".form-control-feedback").removeClass([this.options.feedback.error, this.options.feedback.success].join(" ")), this.$inputs.off(".bs.validator").removeData(["bs.validator.errors", "bs.validator.deferred", "bs.validator.previous"]).each(function () {
      var t = a(this),
          e = t.data("bs.validator.timeout");window.clearTimeout(e) && t.removeData("bs.validator.timeout");
    }), this.$element.find(".help-block.with-errors").each(function () {
      var t = a(this),
          e = t.data("bs.validator.originalContent");t.removeData("bs.validator.originalContent").html(e);
    }), this.$element.find('input[type="submit"], button[type="submit"]').removeClass("disabled"), this.$element.find(".has-error, .has-danger").removeClass("has-error has-danger"), this;
  };var t = a.fn.validator;a.fn.validator = e, a.fn.validator.Constructor = s, a.fn.validator.noConflict = function () {
    return a.fn.validator = t, this;
  }, a(window).on("load", function () {
    a('form[data-toggle="validator"]').each(function () {
      var t = a(this);e.call(t, t.data());
    });
  });
}(jQuery), function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? t(require("jquery")) : t(window.jQuery || window.Zepto);
}(function (c) {
  function t() {}function d(t, e) {
    m.ev.on("mfp" + t + _, e);
  }function f(t, e, n, i) {
    var o = document.createElement("div");return o.className = "mfp-" + t, n && (o.innerHTML = n), i ? e && e.appendChild(o) : (o = c(o), e && o.appendTo(e)), o;
  }function h(t, e) {
    m.ev.triggerHandler("mfp" + t, e), m.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), m.st.callbacks[t] && m.st.callbacks[t].apply(m, c.isArray(e) ? e : [e]));
  }function p(t) {
    return t === e && m.currTemplate.closeBtn || (m.currTemplate.closeBtn = c(m.st.closeMarkup.replace("%title%", m.st.tClose)), e = t), m.currTemplate.closeBtn;
  }function r() {
    c.magnificPopup.instance || ((m = new t()).init(), c.magnificPopup.instance = m);
  }var m,
      i,
      g,
      o,
      v,
      e,
      l = "Close",
      u = "BeforeClose",
      y = "MarkupParse",
      b = "Open",
      _ = ".mfp",
      w = "mfp-ready",
      n = "mfp-removing",
      s = "mfp-prevent-close",
      a = !!window.jQuery,
      x = c(window);t.prototype = { constructor: t, init: function init() {
      var t = navigator.appVersion;m.isLowIE = m.isIE8 = document.all && !document.addEventListener, m.isAndroid = /android/gi.test(t), m.isIOS = /iphone|ipad|ipod/gi.test(t), m.supportsTransition = function () {
        var t = document.createElement("p").style,
            e = ["ms", "O", "Moz", "Webkit"];if (void 0 !== t.transition) return !0;for (; e.length;) {
          if (e.pop() + "Transition" in t) return !0;
        }return !1;
      }(), m.probablyMobile = m.isAndroid || m.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), g = c(document), m.popupsCache = {};
    }, open: function open(t) {
      var e;if (!1 === t.isObj) {
        m.items = t.items.toArray(), m.index = 0;var n,
            i = t.items;for (e = 0; e < i.length; e++) {
          if ((n = i[e]).parsed && (n = n.el[0]), n === t.el[0]) {
            m.index = e;break;
          }
        }
      } else m.items = c.isArray(t.items) ? t.items : [t.items], m.index = t.index || 0;if (!m.isOpen) {
        m.types = [], v = "", t.mainEl && t.mainEl.length ? m.ev = t.mainEl.eq(0) : m.ev = g, t.key ? (m.popupsCache[t.key] || (m.popupsCache[t.key] = {}), m.currTemplate = m.popupsCache[t.key]) : m.currTemplate = {}, m.st = c.extend(!0, {}, c.magnificPopup.defaults, t), m.fixedContentPos = "auto" === m.st.fixedContentPos ? !m.probablyMobile : m.st.fixedContentPos, m.st.modal && (m.st.closeOnContentClick = !1, m.st.closeOnBgClick = !1, m.st.showCloseBtn = !1, m.st.enableEscapeKey = !1), m.bgOverlay || (m.bgOverlay = f("bg").on("click" + _, function () {
          m.close();
        }), m.wrap = f("wrap").attr("tabindex", -1).on("click" + _, function (t) {
          m._checkIfClose(t.target) && m.close();
        }), m.container = f("container", m.wrap)), m.contentContainer = f("content"), m.st.preloader && (m.preloader = f("preloader", m.container, m.st.tLoading));var o = c.magnificPopup.modules;for (e = 0; e < o.length; e++) {
          var r = o[e];r = r.charAt(0).toUpperCase() + r.slice(1), m["init" + r].call(m);
        }h("BeforeOpen"), m.st.showCloseBtn && (m.st.closeBtnInside ? (d(y, function (t, e, n, i) {
          n.close_replaceWith = p(i.type);
        }), v += " mfp-close-btn-in") : m.wrap.append(p())), m.st.alignTop && (v += " mfp-align-top"), m.fixedContentPos ? m.wrap.css({ overflow: m.st.overflowY, overflowX: "hidden", overflowY: m.st.overflowY }) : m.wrap.css({ top: x.scrollTop(), position: "absolute" }), !1 !== m.st.fixedBgPos && ("auto" !== m.st.fixedBgPos || m.fixedContentPos) || m.bgOverlay.css({ height: g.height(), position: "absolute" }), m.st.enableEscapeKey && g.on("keyup" + _, function (t) {
          27 === t.keyCode && m.close();
        }), x.on("resize" + _, function () {
          m.updateSize();
        }), m.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && m.wrap.addClass(v);var s = m.wH = x.height(),
            a = {};if (m.fixedContentPos && m._hasScrollBar(s)) {
          var l = m._getScrollbarSize();l && (a.marginRight = l);
        }m.fixedContentPos && (m.isIE7 ? c("body, html").css("overflow", "hidden") : a.overflow = "hidden");var u = m.st.mainClass;return m.isIE7 && (u += " mfp-ie7"), u && m._addClassToMFP(u), m.updateItemHTML(), h("BuildControls"), c("html").css(a), m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo || c(document.body)), m._lastFocusedEl = document.activeElement, setTimeout(function () {
          m.content ? (m._addClassToMFP(w), m._setFocus()) : m.bgOverlay.addClass(w), g.on("focusin" + _, m._onFocusIn);
        }, 16), m.isOpen = !0, m.updateSize(s), h(b), t;
      }m.updateItemHTML();
    }, close: function close() {
      m.isOpen && (h(u), m.isOpen = !1, m.st.removalDelay && !m.isLowIE && m.supportsTransition ? (m._addClassToMFP(n), setTimeout(function () {
        m._close();
      }, m.st.removalDelay)) : m._close());
    }, _close: function _close() {
      h(l);var t = n + " " + w + " ";if (m.bgOverlay.detach(), m.wrap.detach(), m.container.empty(), m.st.mainClass && (t += m.st.mainClass + " "), m._removeClassFromMFP(t), m.fixedContentPos) {
        var e = { marginRight: "" };m.isIE7 ? c("body, html").css("overflow", "") : e.overflow = "", c("html").css(e);
      }g.off("keyup.mfp focusin" + _), m.ev.off(_), m.wrap.attr("class", "mfp-wrap").removeAttr("style"), m.bgOverlay.attr("class", "mfp-bg"), m.container.attr("class", "mfp-container"), !m.st.showCloseBtn || m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type] || m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach(), m.st.autoFocusLast && m._lastFocusedEl && c(m._lastFocusedEl).focus(), m.currItem = null, m.content = null, m.currTemplate = null, m.prevHeight = 0, h("AfterClose");
    }, updateSize: function updateSize(t) {
      if (m.isIOS) {
        var e = document.documentElement.clientWidth / window.innerWidth,
            n = window.innerHeight * e;m.wrap.css("height", n), m.wH = n;
      } else m.wH = t || x.height();m.fixedContentPos || m.wrap.css("height", m.wH), h("Resize");
    }, updateItemHTML: function updateItemHTML() {
      var t = m.items[m.index];m.contentContainer.detach(), m.content && m.content.detach(), t.parsed || (t = m.parseEl(m.index));var e = t.type;if (h("BeforeChange", [m.currItem ? m.currItem.type : "", e]), m.currItem = t, !m.currTemplate[e]) {
        var n = !!m.st[e] && m.st[e].markup;h("FirstMarkupParse", n), m.currTemplate[e] = !n || c(n);
      }o && o !== t.type && m.container.removeClass("mfp-" + o + "-holder");var i = m["get" + e.charAt(0).toUpperCase() + e.slice(1)](t, m.currTemplate[e]);m.appendContent(i, e), t.preloaded = !0, h("Change", t), o = t.type, m.container.prepend(m.contentContainer), h("AfterChange");
    }, appendContent: function appendContent(t, e) {
      (m.content = t) ? m.st.showCloseBtn && m.st.closeBtnInside && !0 === m.currTemplate[e] ? m.content.find(".mfp-close").length || m.content.append(p()) : m.content = t : m.content = "", h("BeforeAppend"), m.container.addClass("mfp-" + e + "-holder"), m.contentContainer.append(m.content);
    }, parseEl: function parseEl(t) {
      var e,
          n = m.items[t];if ((n = n.tagName ? { el: c(n) } : (e = n.type, { data: n, src: n.src })).el) {
        for (var i = m.types, o = 0; o < i.length; o++) {
          if (n.el.hasClass("mfp-" + i[o])) {
            e = i[o];break;
          }
        }n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"));
      }return n.type = e || m.st.type || "inline", n.index = t, n.parsed = !0, m.items[t] = n, h("ElementParse", n), m.items[t];
    }, addGroup: function addGroup(e, n) {
      function t(t) {
        t.mfpEl = this, m._openClick(t, e, n);
      }var i = "click.magnificPopup";(n = n || {}).mainEl = e, n.items ? (n.isObj = !0, e.off(i).on(i, t)) : (n.isObj = !1, n.delegate ? e.off(i).on(i, n.delegate, t) : (n.items = e).off(i).on(i, t));
    }, _openClick: function _openClick(t, e, n) {
      if ((void 0 !== n.midClick ? n.midClick : c.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
        var i = void 0 !== n.disableOn ? n.disableOn : c.magnificPopup.defaults.disableOn;if (i) if (c.isFunction(i)) {
          if (!i.call(m)) return !0;
        } else if (x.width() < i) return !0;t.type && (t.preventDefault(), m.isOpen && t.stopPropagation()), n.el = c(t.mfpEl), n.delegate && (n.items = e.find(n.delegate)), m.open(n);
      }
    }, updateStatus: function updateStatus(t, e) {
      if (m.preloader) {
        i !== t && m.container.removeClass("mfp-s-" + i), e || "loading" !== t || (e = m.st.tLoading);var n = { status: t, text: e };h("UpdateStatus", n), t = n.status, e = n.text, m.preloader.html(e), m.preloader.find("a").on("click", function (t) {
          t.stopImmediatePropagation();
        }), m.container.addClass("mfp-s-" + t), i = t;
      }
    }, _checkIfClose: function _checkIfClose(t) {
      if (!c(t).hasClass(s)) {
        var e = m.st.closeOnContentClick,
            n = m.st.closeOnBgClick;if (e && n) return !0;if (!m.content || c(t).hasClass("mfp-close") || m.preloader && t === m.preloader[0]) return !0;if (t === m.content[0] || c.contains(m.content[0], t)) {
          if (e) return !0;
        } else if (n && c.contains(document, t)) return !0;return !1;
      }
    }, _addClassToMFP: function _addClassToMFP(t) {
      m.bgOverlay.addClass(t), m.wrap.addClass(t);
    }, _removeClassFromMFP: function _removeClassFromMFP(t) {
      this.bgOverlay.removeClass(t), m.wrap.removeClass(t);
    }, _hasScrollBar: function _hasScrollBar(t) {
      return (m.isIE7 ? g.height() : document.body.scrollHeight) > (t || x.height());
    }, _setFocus: function _setFocus() {
      (m.st.focus ? m.content.find(m.st.focus).eq(0) : m.wrap).focus();
    }, _onFocusIn: function _onFocusIn(t) {
      if (t.target !== m.wrap[0] && !c.contains(m.wrap[0], t.target)) return m._setFocus(), !1;
    }, _parseMarkup: function _parseMarkup(o, t, e) {
      var r;e.data && (t = c.extend(e.data, t)), h(y, [o, t, e]), c.each(t, function (t, e) {
        if (void 0 === e || !1 === e) return !0;if (1 < (r = t.split("_")).length) {
          var n = o.find(_ + "-" + r[0]);if (0 < n.length) {
            var i = r[1];"replaceWith" === i ? n[0] !== e[0] && n.replaceWith(e) : "img" === i ? n.is("img") ? n.attr("src", e) : n.replaceWith(c("<img>").attr("src", e).attr("class", n.attr("class"))) : n.attr(r[1], e);
          }
        } else o.find(_ + "-" + t).html(e);
      });
    }, _getScrollbarSize: function _getScrollbarSize() {
      if (void 0 === m.scrollbarSize) {
        var t = document.createElement("div");t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), m.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
      }return m.scrollbarSize;
    } }, c.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function open(t, e) {
      return r(), (t = t ? c.extend(!0, {}, t) : {}).isObj = !0, t.index = e || 0, this.instance.open(t);
    }, close: function close() {
      return c.magnificPopup.instance && c.magnificPopup.instance.close();
    }, registerModule: function registerModule(t, e) {
      e.options && (c.magnificPopup.defaults[t] = e.options), c.extend(this.proto, e.proto), this.modules.push(t);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, c.fn.magnificPopup = function (t) {
    r();var e = c(this);if ("string" == typeof t) {
      if ("open" === t) {
        var n,
            i = a ? e.data("magnificPopup") : e[0].magnificPopup,
            o = parseInt(arguments[1], 10) || 0;n = i.items ? i.items[o] : (n = e, i.delegate && (n = n.find(i.delegate)), n.eq(o)), m._openClick({ mfpEl: n }, e, i);
      } else m.isOpen && m[t].apply(m, Array.prototype.slice.call(arguments, 1));
    } else t = c.extend(!0, {}, t), a ? e.data("magnificPopup", t) : e[0].magnificPopup = t, m.addGroup(e, t);return e;
  };function C() {
    S && (T.after(S.addClass(E)).detach(), S = null);
  }var E,
      T,
      S,
      I = "inline";c.magnificPopup.registerModule(I, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function initInline() {
        m.types.push(I), d(l + "." + I, function () {
          C();
        });
      }, getInline: function getInline(t, e) {
        if (C(), t.src) {
          var n = m.st.inline,
              i = c(t.src);if (i.length) {
            var o = i[0].parentNode;o && o.tagName && (T || (E = n.hiddenClass, T = f(E), E = "mfp-" + E), S = i.after(T).detach().removeClass(E)), m.updateStatus("ready");
          } else m.updateStatus("error", n.tNotFound), i = c("<div>");return t.inlineElement = i;
        }return m.updateStatus("ready"), m._parseMarkup(e, {}, t), e;
      } } });function A() {
    D && c(document.body).removeClass(D);
  }function k() {
    A(), m.req && m.req.abort();
  }var D,
      O = "ajax";c.magnificPopup.registerModule(O, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function initAjax() {
        m.types.push(O), D = m.st.ajax.cursor, d(l + "." + O, k), d("BeforeChange." + O, k);
      }, getAjax: function getAjax(o) {
        D && c(document.body).addClass(D), m.updateStatus("loading");var t = c.extend({ url: o.src, success: function success(t, e, n) {
            var i = { data: t, xhr: n };h("ParseAjax", i), m.appendContent(c(i.data), O), o.finished = !0, A(), m._setFocus(), setTimeout(function () {
              m.wrap.addClass(w);
            }, 16), m.updateStatus("ready"), h("AjaxContentAdded");
          }, error: function error() {
            A(), o.finished = o.loadError = !0, m.updateStatus("error", m.st.ajax.tError.replace("%url%", o.src));
          } }, m.st.ajax.settings);return m.req = c.ajax(t), "";
      } } });var N;c.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function initImage() {
        var t = m.st.image,
            e = ".image";m.types.push("image"), d(b + e, function () {
          "image" === m.currItem.type && t.cursor && c(document.body).addClass(t.cursor);
        }), d(l + e, function () {
          t.cursor && c(document.body).removeClass(t.cursor), x.off("resize" + _);
        }), d("Resize" + e, m.resizeImage), m.isLowIE && d("AfterChange", m.resizeImage);
      }, resizeImage: function resizeImage() {
        var t = m.currItem;if (t && t.img && m.st.image.verticalFit) {
          var e = 0;m.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", m.wH - e);
        }
      }, _onImageHasSize: function _onImageHasSize(t) {
        t.img && (t.hasSize = !0, N && clearInterval(N), t.isCheckingImgSize = !1, h("ImageHasSize", t), t.imgHidden && (m.content && m.content.removeClass("mfp-loading"), t.imgHidden = !1));
      }, findImageSize: function findImageSize(e) {
        var n = 0,
            i = e.img[0],
            o = function o(t) {
          N && clearInterval(N), N = setInterval(function () {
            0 < i.naturalWidth ? m._onImageHasSize(e) : (200 < n && clearInterval(N), 3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500));
          }, t);
        };o(1);
      }, getImage: function getImage(t, e) {
        var n = 0,
            i = function i() {
          t && (t.img[0].complete ? (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, h("ImageLoadComplete")) : ++n < 200 ? setTimeout(i, 100) : o());
        },
            o = function o() {
          t && (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("error", r.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0);
        },
            r = m.st.image,
            s = e.find(".mfp-img");if (s.length) {
          var a = document.createElement("img");a.className = "mfp-img", t.el && t.el.find("img").length && (a.alt = t.el.find("img").attr("alt")), t.img = c(a).on("load.mfploader", i).on("error.mfploader", o), a.src = t.src, s.is("img") && (t.img = t.img.clone()), 0 < (a = t.img[0]).naturalWidth ? t.hasSize = !0 : a.width || (t.hasSize = !1);
        }return m._parseMarkup(e, { title: function (t) {
            if (t.data && void 0 !== t.data.title) return t.data.title;var e = m.st.image.titleSrc;if (e) {
              if (c.isFunction(e)) return e.call(m, t);if (t.el) return t.el.attr(e) || "";
            }return "";
          }(t), img_replaceWith: t.img }, t), m.resizeImage(), t.hasSize ? (N && clearInterval(N), t.loadError ? (e.addClass("mfp-loading"), m.updateStatus("error", r.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), m.updateStatus("ready"))) : (m.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), m.findImageSize(t))), e;
      } } });var L;c.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function opener(t) {
        return t.is("img") ? t : t.find("img");
      } }, proto: { initZoom: function initZoom() {
        var t,
            r = m.st.zoom,
            e = ".zoom";if (r.enabled && m.supportsTransition) {
          var _n = function _n(t) {
            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                n = "all " + r.duration / 1e3 + "s " + r.easing,
                i = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                o = "transition";return i["-webkit-" + o] = i["-moz-" + o] = i["-o-" + o] = i[o] = n, e.css(i), e;
          };

          var _i = function _i() {
            m.content.css("visibility", "visible");
          };

          var o,
              s,
              a = r.duration;d("BuildControls" + e, function () {
            if (m._allowZoom()) {
              if (clearTimeout(o), m.content.css("visibility", "hidden"), !(t = m._getItemToZoom())) return void _i();(s = _n(t)).css(m._getOffset()), m.wrap.append(s), o = setTimeout(function () {
                s.css(m._getOffset(!0)), o = setTimeout(function () {
                  _i(), setTimeout(function () {
                    s.remove(), t = s = null, h("ZoomAnimationEnded");
                  }, 16);
                }, a);
              }, 16);
            }
          }), d(u + e, function () {
            if (m._allowZoom()) {
              if (clearTimeout(o), m.st.removalDelay = a, !t) {
                if (!(t = m._getItemToZoom())) return;s = _n(t);
              }s.css(m._getOffset(!0)), m.wrap.append(s), m.content.css("visibility", "hidden"), setTimeout(function () {
                s.css(m._getOffset());
              }, 16);
            }
          }), d(l + e, function () {
            m._allowZoom() && (_i(), s && s.remove(), t = null);
          });
        }
      }, _allowZoom: function _allowZoom() {
        return "image" === m.currItem.type;
      }, _getItemToZoom: function _getItemToZoom() {
        return !!m.currItem.hasSize && m.currItem.img;
      }, _getOffset: function _getOffset(t) {
        var e,
            n = (e = t ? m.currItem.img : m.st.zoom.opener(m.currItem.el || m.currItem)).offset(),
            i = parseInt(e.css("padding-top"), 10),
            o = parseInt(e.css("padding-bottom"), 10);n.top -= c(window).scrollTop() - i;var r = { width: e.width(), height: (a ? e.innerHeight() : e[0].offsetHeight) - o - i };return void 0 === L && (L = void 0 !== document.createElement("p").style.MozTransform), L ? r["-moz-transform"] = r.transform = "translate(" + n.left + "px," + n.top + "px)" : (r.left = n.left, r.top = n.top), r;
      } } });function j(t) {
    if (m.currTemplate[P]) {
      var e = m.currTemplate[P].find("iframe");e.length && (t || (e[0].src = "//about:blank"), m.isIE8 && e.css("display", t ? "block" : "none"));
    }
  }var P = "iframe";c.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function initIframe() {
        m.types.push(P), d("BeforeChange", function (t, e, n) {
          e !== n && (e === P ? j() : n === P && j(!0));
        }), d(l + "." + P, function () {
          j();
        });
      }, getIframe: function getIframe(t, e) {
        var n = t.src,
            i = m.st.iframe;c.each(i.patterns, function () {
          if (-1 < n.indexOf(this.index)) return this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1;
        });var o = {};return i.srcAction && (o[i.srcAction] = n), m._parseMarkup(e, o, t), m.updateStatus("ready"), e;
      } } });function H(t) {
    var e = m.items.length;return e - 1 < t ? t - e : t < 0 ? e + t : t;
  }function z(t, e, n) {
    return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n);
  }c.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function initGallery() {
        var r = m.st.gallery,
            t = ".mfp-gallery";if (m.direction = !0, !r || !r.enabled) return !1;v += " mfp-gallery", d(b + t, function () {
          r.navigateByImgClick && m.wrap.on("click" + t, ".mfp-img", function () {
            if (1 < m.items.length) return m.next(), !1;
          }), g.on("keydown" + t, function (t) {
            37 === t.keyCode ? m.prev() : 39 === t.keyCode && m.next();
          });
        }), d("UpdateStatus" + t, function (t, e) {
          e.text && (e.text = z(e.text, m.currItem.index, m.items.length));
        }), d(y + t, function (t, e, n, i) {
          var o = m.items.length;n.counter = 1 < o ? z(r.tCounter, i.index, o) : "";
        }), d("BuildControls" + t, function () {
          if (1 < m.items.length && r.arrows && !m.arrowLeft) {
            var t = r.arrowMarkup,
                e = m.arrowLeft = c(t.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                n = m.arrowRight = c(t.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(s);e.click(function () {
              m.prev();
            }), n.click(function () {
              m.next();
            }), m.container.append(e.add(n));
          }
        }), d("Change" + t, function () {
          m._preloadTimeout && clearTimeout(m._preloadTimeout), m._preloadTimeout = setTimeout(function () {
            m.preloadNearbyImages(), m._preloadTimeout = null;
          }, 16);
        }), d(l + t, function () {
          g.off(t), m.wrap.off("click" + t), m.arrowRight = m.arrowLeft = null;
        });
      }, next: function next() {
        m.direction = !0, m.index = H(m.index + 1), m.updateItemHTML();
      }, prev: function prev() {
        m.direction = !1, m.index = H(m.index - 1), m.updateItemHTML();
      }, goTo: function goTo(t) {
        m.direction = t >= m.index, m.index = t, m.updateItemHTML();
      }, preloadNearbyImages: function preloadNearbyImages() {
        var t,
            e = m.st.gallery.preload,
            n = Math.min(e[0], m.items.length),
            i = Math.min(e[1], m.items.length);for (t = 1; t <= (m.direction ? i : n); t++) {
          m._preloadItem(m.index + t);
        }for (t = 1; t <= (m.direction ? n : i); t++) {
          m._preloadItem(m.index - t);
        }
      }, _preloadItem: function _preloadItem(t) {
        if (t = H(t), !m.items[t].preloaded) {
          var e = m.items[t];e.parsed || (e = m.parseEl(t)), h("LazyLoad", e), "image" === e.type && (e.img = c('<img class="mfp-img" />').on("load.mfploader", function () {
            e.hasSize = !0;
          }).on("error.mfploader", function () {
            e.hasSize = !0, e.loadError = !0, h("LazyLoadError", e);
          }).attr("src", e.src)), e.preloaded = !0;
        }
      } } });var M = "retina";c.magnificPopup.registerModule(M, { options: { replaceSrc: function replaceSrc(t) {
        return t.src.replace(/\.\w+$/, function (t) {
          return "@2x" + t;
        });
      }, ratio: 1 }, proto: { initRetina: function initRetina() {
        if (1 < window.devicePixelRatio) {
          var n = m.st.retina,
              i = n.ratio;1 < (i = isNaN(i) ? i() : i) && (d("ImageHasSize." + M, function (t, e) {
            e.img.css({ "max-width": e.img[0].naturalWidth / i, width: "100%" });
          }), d("ElementParse." + M, function (t, e) {
            e.src = n.replaceSrc(e, i);
          }));
        }
      } } }), r();
}), function (e, n) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
    return n(e, t);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = n(e, require("jquery")) : e.jQueryBridget = n(e, e.jQuery);
}(window, function (t, e) {
  "use strict";
  var n = Array.prototype.slice,
      i = t.console,
      d = void 0 === i ? function () {} : function (t) {
    i.error(t);
  };function o(u, o, c) {
    (c = c || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function (t) {
      c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t));
    }), c.fn[u] = function (t) {
      return "string" == typeof t ? function (t, r, s) {
        var a,
            l = "$()." + u + '("' + r + '")';return t.each(function (t, e) {
          var n = c.data(e, u);if (n) {
            var i = n[r];if (i && "_" != r.charAt(0)) {
              var o = i.apply(n, s);a = void 0 === a ? o : a;
            } else d(l + " is not a valid method");
          } else d(u + " not initialized. Cannot call methods, i.e. " + l);
        }), void 0 !== a ? a : t;
      }(this, t, n.call(arguments, 1)) : (function (t, i) {
        t.each(function (t, e) {
          var n = c.data(e, u);n ? (n.option(i), n._init()) : (n = new o(e, i), c.data(e, u, n));
        });
      }(this, t), this);
    }, r(c));
  }function r(t) {
    !t || t && t.bridget || (t.bridget = o);
  }return r(e || t.jQuery), o;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : this, function () {
  function t() {}var e = t.prototype;return e.on = function (t, e) {
    if (t && e) {
      var n = this._events = this._events || {},
          i = n[t] = n[t] || [];return -1 == i.indexOf(e) && i.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);var n = this._onceEvents = this._onceEvents || {};return (n[t] = n[t] || {})[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var n = this._events && this._events[t];if (n && n.length) {
      var i = n.indexOf(e);return -1 != i && n.splice(i, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var n = this._events && this._events[t];if (n && n.length) {
      n = n.slice(0), e = e || [];for (var i = this._onceEvents && this._onceEvents[t], o = 0; o < n.length; o++) {
        var r = n[o];i && i[r] && (this.off(t, r), delete i[r]), r.apply(this, e);
      }return this;
    }
  }, e.allOff = function () {
    delete this._events, delete this._onceEvents;
  }, t;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
  "use strict";
  function v(t) {
    var e = parseFloat(t);return -1 == t.indexOf("%") && !isNaN(e) && e;
  }var n = "undefined" == typeof console ? function () {} : function (t) {
    console.error(t);
  },
      y = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      b = y.length;function _(t) {
    var e = getComputedStyle(t);return e || n("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
  }var w,
      x = !1;function C(t) {
    if (function () {
      if (!x) {
        x = !0;var t = document.createElement("div");t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";var e = document.body || document.documentElement;e.appendChild(t);var n = _(t);w = 200 == Math.round(v(n.width)), C.isBoxSizeOuter = w, e.removeChild(t);
      }
    }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && t.nodeType) {
      var e = _(t);if ("none" == e.display) return function () {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < b; e++) {
          t[y[e]] = 0;
        }return t;
      }();var n = {};n.width = t.offsetWidth, n.height = t.offsetHeight;for (var i = n.isBorderBox = "border-box" == e.boxSizing, o = 0; o < b; o++) {
        var r = y[o],
            s = e[r],
            a = parseFloat(s);n[r] = isNaN(a) ? 0 : a;
      }var l = n.paddingLeft + n.paddingRight,
          u = n.paddingTop + n.paddingBottom,
          c = n.marginLeft + n.marginRight,
          d = n.marginTop + n.marginBottom,
          f = n.borderLeftWidth + n.borderRightWidth,
          h = n.borderTopWidth + n.borderBottomWidth,
          p = i && w,
          m = v(e.width);!1 !== m && (n.width = m + (p ? 0 : l + f));var g = v(e.height);return !1 !== g && (n.height = g + (p ? 0 : u + h)), n.innerWidth = n.width - (l + f), n.innerHeight = n.height - (u + h), n.outerWidth = n.width + c, n.outerHeight = n.height + d, n;
    }
  }return C;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
  "use strict";
  var n = function () {
    var t = window.Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
      var i = e[n] + "MatchesSelector";if (t[i]) return i;
    }
  }();return function (t, e) {
    return t[n](e);
  };
}), function (e, n) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (t) {
    return n(e, t);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = n(e, require("desandro-matches-selector")) : e.fizzyUIUtils = n(e, e.matchesSelector);
}(window, function (u, r) {
  var c = { extend: function extend(t, e) {
      for (var n in e) {
        t[n] = e[n];
      }return t;
    }, modulo: function modulo(t, e) {
      return (t % e + e) % e;
    } },
      e = Array.prototype.slice;c.makeArray = function (t) {
    return Array.isArray(t) ? t : null == t ? [] : "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && "number" == typeof t.length ? e.call(t) : [t];
  }, c.removeFrom = function (t, e) {
    var n = t.indexOf(e);-1 != n && t.splice(n, 1);
  }, c.getParent = function (t, e) {
    for (; t.parentNode && t != document.body;) {
      if (t = t.parentNode, r(t, e)) return t;
    }
  }, c.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, c.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, c.filterFindElements = function (t, i) {
    t = c.makeArray(t);var o = [];return t.forEach(function (t) {
      if (t instanceof HTMLElement) if (i) {
        r(t, i) && o.push(t);for (var e = t.querySelectorAll(i), n = 0; n < e.length; n++) {
          o.push(e[n]);
        }
      } else o.push(t);
    }), o;
  }, c.debounceMethod = function (t, e, i) {
    i = i || 100;var o = t.prototype[e],
        r = e + "Timeout";t.prototype[e] = function () {
      var t = this[r];clearTimeout(t);var e = arguments,
          n = this;this[r] = setTimeout(function () {
        o.apply(n, e), delete n[r];
      }, i);
    };
  }, c.docReady = function (t) {
    var e = document.readyState;"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
  }, c.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, n) {
      return e + "-" + n;
    }).toLowerCase();
  };var d = u.console;return c.htmlInit = function (a, l) {
    c.docReady(function () {
      var t = c.toDashed(l),
          o = "data-" + t,
          e = document.querySelectorAll("[" + o + "]"),
          n = document.querySelectorAll(".js-" + t),
          i = c.makeArray(e).concat(c.makeArray(n)),
          r = o + "-options",
          s = u.jQuery;i.forEach(function (e) {
        var t,
            n = e.getAttribute(o) || e.getAttribute(r);try {
          t = n && JSON.parse(n);
        } catch (t) {
          return void (d && d.error("Error parsing " + o + " on " + e.className + ": " + t));
        }var i = new a(e, t);s && s.data(e, l, i);
      });
    });
  }, c;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function (t, e) {
  "use strict";
  var n = document.documentElement.style,
      i = "string" == typeof n.transition ? "transition" : "WebkitTransition",
      o = "string" == typeof n.transform ? "transform" : "WebkitTransform",
      r = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[i],
      s = { transform: o, transition: i, transitionDuration: i + "Duration", transitionProperty: i + "Property", transitionDelay: i + "Delay" };function a(t, e) {
    t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create());
  }var l = a.prototype = Object.create(t.prototype);l.constructor = a, l._create = function () {
    this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
  }, l.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, l.getSize = function () {
    this.size = e(this.element);
  }, l.css = function (t) {
    var e = this.element.style;for (var n in t) {
      e[s[n] || n] = t[n];
    }
  }, l.getPosition = function () {
    var t = getComputedStyle(this.element),
        e = this.layout._getOption("originLeft"),
        n = this.layout._getOption("originTop"),
        i = t[e ? "left" : "right"],
        o = t[n ? "top" : "bottom"],
        r = parseFloat(i),
        s = parseFloat(o),
        a = this.layout.size;-1 != i.indexOf("%") && (r = r / 100 * a.width), -1 != o.indexOf("%") && (s = s / 100 * a.height), r = isNaN(r) ? 0 : r, s = isNaN(s) ? 0 : s, r -= e ? a.paddingLeft : a.paddingRight, s -= n ? a.paddingTop : a.paddingBottom, this.position.x = r, this.position.y = s;
  }, l.layoutPosition = function () {
    var t = this.layout.size,
        e = {},
        n = this.layout._getOption("originLeft"),
        i = this.layout._getOption("originTop"),
        o = n ? "paddingLeft" : "paddingRight",
        r = n ? "left" : "right",
        s = n ? "right" : "left",
        a = this.position.x + t[o];e[r] = this.getXValue(a), e[s] = "";var l = i ? "paddingTop" : "paddingBottom",
        u = i ? "top" : "bottom",
        c = i ? "bottom" : "top",
        d = this.position.y + t[l];e[u] = this.getYValue(d), e[c] = "", this.css(e), this.emitEvent("layout", [this]);
  }, l.getXValue = function (t) {
    var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
  }, l.getYValue = function (t) {
    var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
  }, l._transitionTo = function (t, e) {
    this.getPosition();var n = this.position.x,
        i = this.position.y,
        o = t == this.position.x && e == this.position.y;if (this.setPosition(t, e), !o || this.isTransitioning) {
      var r = t - n,
          s = e - i,
          a = {};a.transform = this.getTranslate(r, s), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
    } else this.layoutPosition();
  }, l.getTranslate = function (t, e) {
    return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)";
  }, l.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition();
  }, l.moveTo = l._transitionTo, l.setPosition = function (t, e) {
    this.position.x = parseFloat(t), this.position.y = parseFloat(e);
  }, l._nonTransition = function (t) {
    for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) {
      t.onTransitionEnd[e].call(this);
    }
  }, l.transition = function (t) {
    if (parseFloat(this.layout.options.transitionDuration)) {
      var e = this._transn;for (var n in t.onTransitionEnd) {
        e.onEnd[n] = t.onTransitionEnd[n];
      }for (n in t.to) {
        e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
      }if (t.from) {
        this.css(t.from);this.element.offsetHeight;null;
      }this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
    } else this._nonTransition(t);
  };var u = "opacity," + o.replace(/([A-Z])/g, function (t) {
    return "-" + t.toLowerCase();
  });l.enableTransition = function () {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: u, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(r, this, !1);
    }
  }, l.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t);
  }, l.onotransitionend = function (t) {
    this.ontransitionend(t);
  };var c = { "-webkit-transform": "transform" };l.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
          n = c[t.propertyName] || t.propertyName;if (delete e.ingProperties[n], function (t) {
        for (var e in t) {
          return !1;
        }return !null;
      }(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) e.onEnd[n].call(this), delete e.onEnd[n];this.emitEvent("transitionEnd", [this]);
    }
  }, l.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1;
  }, l._removeStyles = function (t) {
    var e = {};for (var n in t) {
      e[n] = "";
    }this.css(e);
  };var d = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };return l.removeTransitionStyles = function () {
    this.css(d);
  }, l.stagger = function (t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
  }, l.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
  }, l.remove = function () {
    i && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem();
    }), this.hide()) : this.removeElem();
  }, l.reveal = function () {
    delete this.isHidden, this.css({ display: "" });var t = this.layout.options,
        e = {};e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
  }, l.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal");
  }, l.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];if (e.opacity) return "opacity";for (var n in e) {
      return n;
    }
  }, l.hide = function () {
    this.isHidden = !0, this.css({ display: "" });var t = this.layout.options,
        e = {};e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
  }, l.onHideTransitionEnd = function () {
    this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
  }, l.destroy = function () {
    this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
  }, a;
}), function (o, r) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (t, e, n, i) {
    return r(o, t, e, n, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = r(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : o.Outlayer = r(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, o.Outlayer.Item);
}(window, function (t, e, o, r, i) {
  "use strict";
  function n() {}var s = t.console,
      a = t.jQuery,
      l = 0,
      u = {};function c(t, e) {
    var n = r.getQueryElement(t);if (n) {
      this.element = n, a && (this.$element = a(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e);var i = ++l;this.element.outlayerGUID = i, (u[i] = this)._create(), this._getOption("initLayout") && this.layout();
    } else s && s.error("Bad element for " + this.constructor.namespace + ": " + (n || t));
  }c.namespace = "outlayer", c.Item = i, c.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };var d = c.prototype;function f(t) {
    function e() {
      t.apply(this, arguments);
    }return (e.prototype = Object.create(t.prototype)).constructor = e;
  }r.extend(d, e.prototype), d.option = function (t) {
    r.extend(this.options, t);
  }, d._getOption = function (t) {
    var e = this.constructor.compatOptions[t];return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
  }, c.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, d._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();
  }, d.reloadItems = function () {
    this.items = this._itemize(this.element.children);
  }, d._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], o = 0; o < e.length; o++) {
      var r = new n(e[o], this);i.push(r);
    }return i;
  }, d._filterFindItemElements = function (t) {
    return r.filterFindElements(t, this.options.itemSelector);
  }, d.getItemElements = function () {
    return this.items.map(function (t) {
      return t.element;
    });
  }, d.layout = function () {
    this._resetLayout(), this._manageStamps();var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;this.layoutItems(this.items, e), this._isLayoutInited = !0;
  }, d._init = d.layout, d._resetLayout = function () {
    this.getSize();
  }, d.getSize = function () {
    this.size = o(this.element);
  }, d._getMeasurement = function (t, e) {
    var n,
        i = this.options[t];i ? ("string" == typeof i ? n = this.element.querySelector(i) : i instanceof HTMLElement && (n = i), this[t] = n ? o(n)[e] : i) : this[t] = 0;
  }, d.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
  }, d._getItemsForLayout = function (t) {
    return t.filter(function (t) {
      return !t.isIgnored;
    });
  }, d._layoutItems = function (t, n) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];t.forEach(function (t) {
        var e = this._getItemLayoutPosition(t);e.item = t, e.isInstant = n || t.isLayoutInstant, i.push(e);
      }, this), this._processLayoutQueue(i);
    }
  }, d._getItemLayoutPosition = function () {
    return { x: 0, y: 0 };
  }, d._processLayoutQueue = function (t) {
    this.updateStagger(), t.forEach(function (t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e);
    }, this);
  }, d.updateStagger = function () {
    var t = this.options.stagger;if (null != t) return this.stagger = function (t) {
      if ("number" == typeof t) return t;var e = t.match(/(^\d*\.?\d*)(\w*)/),
          n = e && e[1],
          i = e && e[2];if (!n.length) return 0;n = parseFloat(n);var o = h[i] || 1;return n * o;
    }(t), this.stagger;this.stagger = 0;
  }, d._positionItem = function (t, e, n, i, o) {
    i ? t.goTo(e, n) : (t.stagger(o * this.stagger), t.moveTo(e, n));
  }, d._postLayout = function () {
    this.resizeContainer();
  }, d.resizeContainer = function () {
    if (this._getOption("resizeContainer")) {
      var t = this._getContainerSize();t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1));
    }
  }, d._getContainerSize = n, d._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var n = this.size;n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
    }
  }, d._emitCompleteOnItems = function (e, t) {
    var n = this;function i() {
      n.dispatchEvent(e + "Complete", null, [t]);
    }var o = t.length;if (t && o) {
      var r = 0;t.forEach(function (t) {
        t.once(e, s);
      });
    } else i();function s() {
      ++r == o && i();
    }
  }, d.dispatchEvent = function (t, e, n) {
    var i = e ? [e].concat(n) : n;if (this.emitEvent(t, i), a) if (this.$element = this.$element || a(this.element), e) {
      var o = a.Event(e);o.type = t, this.$element.trigger(o, n);
    } else this.$element.trigger(t, n);
  }, d.ignore = function (t) {
    var e = this.getItem(t);e && (e.isIgnored = !0);
  }, d.unignore = function (t) {
    var e = this.getItem(t);e && delete e.isIgnored;
  }, d.stamp = function (t) {
    (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
  }, d.unstamp = function (t) {
    (t = this._find(t)) && t.forEach(function (t) {
      r.removeFrom(this.stamps, t), this.unignore(t);
    }, this);
  }, d._find = function (t) {
    if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = r.makeArray(t);
  }, d._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
  }, d._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
        e = this.size;this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) };
  }, d._manageStamp = n, d._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
        n = this._boundingRect,
        i = o(t);return { left: e.left - n.left - i.marginLeft, top: e.top - n.top - i.marginTop, right: n.right - e.right - i.marginRight, bottom: n.bottom - e.bottom - i.marginBottom };
  }, d.handleEvent = r.handleEvent, d.bindResize = function () {
    t.addEventListener("resize", this), this.isResizeBound = !0;
  }, d.unbindResize = function () {
    t.removeEventListener("resize", this), this.isResizeBound = !1;
  }, d.onresize = function () {
    this.resize();
  }, r.debounceMethod(c, "onresize", 100), d.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout();
  }, d.needsResizeLayout = function () {
    var t = o(this.element);return this.size && t && t.innerWidth !== this.size.innerWidth;
  }, d.addItems = function (t) {
    var e = this._itemize(t);return e.length && (this.items = this.items.concat(e)), e;
  }, d.appended = function (t) {
    var e = this.addItems(t);e.length && (this.layoutItems(e, !0), this.reveal(e));
  }, d.prepended = function (t) {
    var e = this._itemize(t);if (e.length) {
      var n = this.items.slice(0);this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n);
    }
  }, d.reveal = function (t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var n = this.updateStagger();t.forEach(function (t, e) {
        t.stagger(e * n), t.reveal();
      });
    }
  }, d.hide = function (t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var n = this.updateStagger();t.forEach(function (t, e) {
        t.stagger(e * n), t.hide();
      });
    }
  }, d.revealItemElements = function (t) {
    var e = this.getItems(t);this.reveal(e);
  }, d.hideItemElements = function (t) {
    var e = this.getItems(t);this.hide(e);
  }, d.getItem = function (t) {
    for (var e = 0; e < this.items.length; e++) {
      var n = this.items[e];if (n.element == t) return n;
    }
  }, d.getItems = function (t) {
    t = r.makeArray(t);var n = [];return t.forEach(function (t) {
      var e = this.getItem(t);e && n.push(e);
    }, this), n;
  }, d.remove = function (t) {
    var e = this.getItems(t);this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
      t.remove(), r.removeFrom(this.items, t);
    }, this);
  }, d.destroy = function () {
    var t = this.element.style;t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
      t.destroy();
    }), this.unbindResize();var e = this.element.outlayerGUID;delete u[e], delete this.element.outlayerGUID, a && a.removeData(this.element, this.constructor.namespace);
  }, c.data = function (t) {
    var e = (t = r.getQueryElement(t)) && t.outlayerGUID;return e && u[e];
  }, c.create = function (t, e) {
    var n = f(c);return n.defaults = r.extend({}, c.defaults), r.extend(n.defaults, e), n.compatOptions = r.extend({}, c.compatOptions), n.namespace = t, n.data = c.data, n.Item = f(i), r.htmlInit(n, t), a && a.bridget && a.bridget(t, n), n;
  };var h = { ms: 1, s: 1e3 };return c.Item = i, c;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
}(window, function (t) {
  "use strict";
  function e() {
    t.Item.apply(this, arguments);
  }var n = e.prototype = Object.create(t.Item.prototype),
      i = n._create;n._create = function () {
    this.id = this.layout.itemGUID++, i.call(this), this.sortData = {};
  }, n.updateSortData = function () {
    if (!this.isIgnored) {
      this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();var t = this.layout.options.getSortData,
          e = this.layout._sorters;for (var n in t) {
        var i = e[n];this.sortData[n] = i(this.element, this);
      }
    }
  };var o = n.destroy;return n.destroy = function () {
    o.apply(this, arguments), this.css({ display: "" });
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
}(window, function (e, n) {
  "use strict";
  function i(t) {
    (this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size);
  }var o = i.prototype;return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
    o[t] = function () {
      return n.prototype[t].apply(this.isotope, arguments);
    };
  }), o.needsVerticalResizeLayout = function () {
    var t = e(this.isotope.element);return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight;
  }, o._getMeasurement = function () {
    this.isotope._getMeasurement.apply(this, arguments);
  }, o.getColumnWidth = function () {
    this.getSegmentSize("column", "Width");
  }, o.getRowHeight = function () {
    this.getSegmentSize("row", "Height");
  }, o.getSegmentSize = function (t, e) {
    var n = t + e,
        i = "outer" + e;if (this._getMeasurement(n, i), !this[n]) {
      var o = this.getFirstItemSize();this[n] = o && o[i] || this.isotope.size["inner" + e];
    }
  }, o.getFirstItemSize = function () {
    var t = this.isotope.filteredItems[0];return t && t.element && e(t.element);
  }, o.layout = function () {
    this.isotope.layout.apply(this.isotope, arguments);
  }, o.getSize = function () {
    this.isotope.getSize(), this.size = this.isotope.size;
  }, i.modes = {}, i.create = function (t, e) {
    function n() {
      i.apply(this, arguments);
    }return (n.prototype = Object.create(o)).constructor = n, e && (n.options = e), i.modes[n.prototype.namespace = t] = n;
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, u) {
  var e = t.create("masonry");e.compatOptions.fitWidth = "isFitWidth";var n = e.prototype;return n._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];for (var t = 0; t < this.cols; t++) {
      this.colYs.push(0);
    }this.maxY = 0, this.horizontalColIndex = 0;
  }, n.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
          e = t && t.element;this.columnWidth = e && u(e).outerWidth || this.containerWidth;
    }var n = this.columnWidth += this.gutter,
        i = this.containerWidth + this.gutter,
        o = i / n,
        r = n - i % n;o = Math[r && r < 1 ? "round" : "floor"](o), this.cols = Math.max(o, 1);
  }, n.getContainerWidth = function () {
    var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
        e = u(t);this.containerWidth = e && e.innerWidth;
  }, n._getItemLayoutPosition = function (t) {
    t.getSize();var e = t.size.outerWidth % this.columnWidth,
        n = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);n = Math.min(n, this.cols);for (var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, t), o = { x: this.columnWidth * i.col, y: i.y }, r = i.y + t.size.outerHeight, s = n + i.col, a = i.col; a < s; a++) {
      this.colYs[a] = r;
    }return o;
  }, n._getTopColPosition = function (t) {
    var e = this._getTopColGroup(t),
        n = Math.min.apply(Math, e);return { col: e.indexOf(n), y: n };
  }, n._getTopColGroup = function (t) {
    if (t < 2) return this.colYs;for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) {
      e[i] = this._getColGroupY(i, t);
    }return e;
  }, n._getColGroupY = function (t, e) {
    if (e < 2) return this.colYs[t];var n = this.colYs.slice(t, t + e);return Math.max.apply(Math, n);
  }, n._getHorizontalColPosition = function (t, e) {
    var n = this.horizontalColIndex % this.cols;n = 1 < t && n + t > this.cols ? 0 : n;var i = e.size.outerWidth && e.size.outerHeight;return this.horizontalColIndex = i ? n + t : this.horizontalColIndex, { col: n, y: this._getColGroupY(n, t) };
  }, n._manageStamp = function (t) {
    var e = u(t),
        n = this._getElementOffset(t),
        i = this._getOption("originLeft") ? n.left : n.right,
        o = i + e.outerWidth,
        r = Math.floor(i / this.columnWidth);r = Math.max(0, r);var s = Math.floor(o / this.columnWidth);s -= o % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);for (var a = (this._getOption("originTop") ? n.top : n.bottom) + e.outerHeight, l = r; l <= s; l++) {
      this.colYs[l] = Math.max(a, this.colYs[l]);
    }
  }, n._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);var t = { height: this.maxY };return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
  }, n._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
      t++;
    }return (this.cols - t) * this.columnWidth - this.gutter;
  }, n.needsResizeLayout = function () {
    var t = this.containerWidth;return this.getContainerWidth(), t != this.containerWidth;
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function (t, e) {
  "use strict";
  var n = t.create("masonry"),
      i = n.prototype,
      o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };for (var r in e.prototype) {
    o[r] || (i[r] = e.prototype[r]);
  }var s = i.measureColumns;i.measureColumns = function () {
    this.items = this.isotope.filteredItems, s.call(this);
  };var a = i._getOption;return i._getOption = function (t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
  }, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
  "use strict";
  var e = t.create("fitRows"),
      n = e.prototype;return n._resetLayout = function () {
    this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth");
  }, n._getItemLayoutPosition = function (t) {
    t.getSize();var e = t.size.outerWidth + this.gutter,
        n = this.isotope.size.innerWidth + this.gutter;0 !== this.x && e + this.x > n && (this.x = 0, this.y = this.maxY);var i = { x: this.x, y: this.y };return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i;
  }, n._getContainerSize = function () {
    return { height: this.maxY };
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
}(window, function (t) {
  "use strict";
  var e = t.create("vertical", { horizontalAlignment: 0 }),
      n = e.prototype;return n._resetLayout = function () {
    this.y = 0;
  }, n._getItemLayoutPosition = function (t) {
    t.getSize();var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
        n = this.y;return this.y += t.size.outerHeight, { x: e, y: n };
  }, n._getContainerSize = function () {
    return { height: this.y };
  }, e;
}), function (s, a) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (t, e, n, i, o, r) {
    return a(s, t, e, n, i, o, r);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = a(s, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : s.Isotope = a(s, s.Outlayer, s.getSize, s.matchesSelector, s.fizzyUIUtils, s.Isotope.Item, s.Isotope.LayoutMode);
}(window, function (t, n, e, i, r, o, s) {
  var a = t.jQuery,
      l = String.prototype.trim ? function (t) {
    return t.trim();
  } : function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
      u = n.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });u.Item = o, u.LayoutMode = s;var c = u.prototype;c._create = function () {
    for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), n.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], s.modes) {
      this._initLayoutMode(t);
    }
  }, c.reloadItems = function () {
    this.itemGUID = 0, n.prototype.reloadItems.call(this);
  }, c._itemize = function () {
    for (var t = n.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) {
      t[e].id = this.itemGUID++;
    }return this._updateItemsSortData(t), t;
  }, c._initLayoutMode = function (t) {
    var e = s.modes[t],
        n = this.options[t] || {};this.options[t] = e.options ? r.extend(e.options, n) : n, this.modes[t] = new e(this);
  }, c.layout = function () {
    this._isLayoutInited || !this._getOption("initLayout") ? this._layout() : this.arrange();
  }, c._layout = function () {
    var t = this._getIsInstant();this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0;
  }, c.arrange = function (t) {
    this.option(t), this._getIsInstant();var e = this._filter(this.items);this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout();
  }, c._init = c.arrange, c._hideReveal = function (t) {
    this.reveal(t.needReveal), this.hide(t.needHide);
  }, c._getIsInstant = function () {
    var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;return this._isInstant = e;
  }, c._bindArrangeComplete = function () {
    var t,
        e,
        n,
        i = this;function o() {
      t && e && n && i.dispatchEvent("arrangeComplete", null, [i.filteredItems]);
    }this.once("layoutComplete", function () {
      t = !0, o();
    }), this.once("hideComplete", function () {
      e = !0, o();
    }), this.once("revealComplete", function () {
      n = !0, o();
    });
  }, c._filter = function (t) {
    var e = this.options.filter;e = e || "*";for (var n = [], i = [], o = [], r = this._getFilterTest(e), s = 0; s < t.length; s++) {
      var a = t[s];if (!a.isIgnored) {
        var l = r(a);l && n.push(a), l && a.isHidden ? i.push(a) : l || a.isHidden || o.push(a);
      }
    }return { matches: n, needReveal: i, needHide: o };
  }, c._getFilterTest = function (e) {
    return a && this.options.isJQueryFiltering ? function (t) {
      return a(t.element).is(e);
    } : "function" == typeof e ? function (t) {
      return e(t.element);
    } : function (t) {
      return i(t.element, e);
    };
  }, c.updateSortData = function (t) {
    var e;e = t ? (t = r.makeArray(t), this.getItems(t)) : this.items, this._getSorters(), this._updateItemsSortData(e);
  }, c._getSorters = function () {
    var t = this.options.getSortData;for (var e in t) {
      var n = t[e];this._sorters[e] = d(n);
    }
  }, c._updateItemsSortData = function (t) {
    for (var e = t && t.length, n = 0; e && n < e; n++) {
      t[n].updateSortData();
    }
  };var d = function d(t) {
    if ("string" != typeof t) return t;var e = l(t).split(" "),
        n = e[0],
        i = n.match(/^\[(.+)\]$/),
        o = function (e, n) {
      return e ? function (t) {
        return t.getAttribute(e);
      } : function (t) {
        var e = t.querySelector(n);return e && e.textContent;
      };
    }(i && i[1], n),
        r = u.sortDataParsers[e[1]];return t = r ? function (t) {
      return t && r(o(t));
    } : function (t) {
      return t && o(t);
    };
  };u.sortDataParsers = { parseInt: function (_parseInt) {
      function parseInt(_x) {
        return _parseInt.apply(this, arguments);
      }

      parseInt.toString = function () {
        return _parseInt.toString();
      };

      return parseInt;
    }(function (t) {
      return parseInt(t, 10);
    }), parseFloat: function (_parseFloat) {
      function parseFloat(_x2) {
        return _parseFloat.apply(this, arguments);
      }

      parseFloat.toString = function () {
        return _parseFloat.toString();
      };

      return parseFloat;
    }(function (t) {
      return parseFloat(t);
    }) }, c._sort = function () {
    if (this.options.sortBy) {
      var t = r.makeArray(this.options.sortBy);this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));var e = function (s, a) {
        return function (t, e) {
          for (var n = 0; n < s.length; n++) {
            var i = s[n],
                o = t.sortData[i],
                r = e.sortData[i];if (r < o || o < r) return (r < o ? 1 : -1) * ((void 0 !== a[i] ? a[i] : a) ? 1 : -1);
          }return 0;
        };
      }(this.sortHistory, this.options.sortAscending);this.filteredItems.sort(e);
    }
  }, c._getIsSameSortBy = function (t) {
    for (var e = 0; e < t.length; e++) {
      if (t[e] != this.sortHistory[e]) return !1;
    }return !0;
  }, c._mode = function () {
    var t = this.options.layoutMode,
        e = this.modes[t];if (!e) throw new Error("No layout mode: " + t);return e.options = this.options[t], e;
  }, c._resetLayout = function () {
    n.prototype._resetLayout.call(this), this._mode()._resetLayout();
  }, c._getItemLayoutPosition = function (t) {
    return this._mode()._getItemLayoutPosition(t);
  }, c._manageStamp = function (t) {
    this._mode()._manageStamp(t);
  }, c._getContainerSize = function () {
    return this._mode()._getContainerSize();
  }, c.needsResizeLayout = function () {
    return this._mode().needsResizeLayout();
  }, c.appended = function (t) {
    var e = this.addItems(t);if (e.length) {
      var n = this._filterRevealAdded(e);this.filteredItems = this.filteredItems.concat(n);
    }
  }, c.prepended = function (t) {
    var e = this._itemize(t);if (e.length) {
      this._resetLayout(), this._manageStamps();var n = this._filterRevealAdded(e);this.layoutItems(this.filteredItems), this.filteredItems = n.concat(this.filteredItems), this.items = e.concat(this.items);
    }
  }, c._filterRevealAdded = function (t) {
    var e = this._filter(t);return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches;
  }, c.insert = function (t) {
    var e = this.addItems(t);if (e.length) {
      var n,
          i,
          o = e.length;for (n = 0; n < o; n++) {
        i = e[n], this.element.appendChild(i.element);
      }var r = this._filter(e).matches;for (n = 0; n < o; n++) {
        e[n].isLayoutInstant = !0;
      }for (this.arrange(), n = 0; n < o; n++) {
        delete e[n].isLayoutInstant;
      }this.reveal(r);
    }
  };var f = c.remove;return c.remove = function (t) {
    t = r.makeArray(t);var e = this.getItems(t);f.call(this, t);for (var n = e && e.length, i = 0; n && i < n; i++) {
      var o = e[i];r.removeFrom(this.filteredItems, o);
    }
  }, c.shuffle = function () {
    for (var t = 0; t < this.items.length; t++) {
      this.items[t].sortData.random = Math.random();
    }this.options.sortBy = "random", this._sort(), this._layout();
  }, c._noTransition = function (t, e) {
    var n = this.options.transitionDuration;this.options.transitionDuration = 0;var i = t.apply(this, e);return this.options.transitionDuration = n, i;
  }, c.getFilteredItemElements = function () {
    return this.filteredItems.map(function (t) {
      return t.element;
    });
  }, u;
}), function (t) {
  "use strict";
  var e = t(".lv-alert-bar");t(document).ready(function () {
    e.find(".lv-alert-bar-close-btn").click(function () {
      e.hide();
    });
  });
}(jQuery), function (t) {
  "use strict";
  t(document).ready(function () {
    1 < t(".lv-hero-item").length && (t(window).width(), t(".lv-hero").bxSlider({ auto: !1, mode: "horizontal", adaptiveHeight: !0, responsive: !0, touchEnabled: !0, speed: 1e3, pause: 4e3, slideMargin: 0, slideSelector: ".lv-hero-item", minSlides: 1, controls: !0, nextSelector: ".lv-hero-carousel-next-btn", prevSelector: ".lv-hero-carousel-prev-btn", nextText: "", prevText: "", infiniteLoop: !0, useCSS: !0, pager: !1, pagerSelector: ".lv-hero-carousel-bullets" }));
  });
}(jQuery), function (e) {
  "use strict";
  e(document).keypress(function (t) {
    return (115 != t.which || !t.ctrlKey && !t.metaKey) && 19 != t.which || (t.preventDefault(), alert("(w) " + e(window).width() + " (h) " + e(window).height()), !1);
  }), e('a[href*="#"]:not([href="#"]):not(.accordion a)').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var t = e(this.hash);if ((t = t.length ? t : e("[name=" + this.hash.slice(1) + "]")).length) return e("html,body").animate({ scrollTop: t.offset().top }, 800), !1;
    }
  });var t = e(".lv-google-map");t.length && (t.click(function () {
    t.find("iframe").css("pointer-events", "auto");
  }), t.mouseleave(function () {
    t.find("iframe").css("pointer-events", "none");
  })), e(window).on("load", function () {
    e("[data-page-loader]").addClass("has-loaded");
  });
}(jQuery), function (o) {
  "use strict";
  var r = {},
      s = ["xs", "sm", "md", "lg", "xl", "xxl"];function t() {
    var t = o("body");1 != o(".lv-screen-data").length && t.append('<div class="lv-screen-data" draggable="true"></div>');var e,
        n = o(window).width(),
        i = o(window).height();n < r.sm && (e = "xs"), n >= r.sm && n < r.md && (e = "sm"), n >= r.md && n < r.lg && (e = "md"), n >= r.lg && n < r.xl && (e = "lg"), n >= r.xl && n < r.xxl && (e = "xl"), n >= r.xxl && (e = "xxl"), o(".lv-screen-data").html(n + " x " + i + "<br>" + e).css({ position: "fixed", top: 0, padding: "10px 20px", background: "rgba(0,0,0,0.5)", "font-family": "Helvetica Neue", "font-size": "14px", color: "white", "z-index": 2147483646 }).click(function () {
      t.toggleClass("developer");
    });
  }!function () {
    for (var t, e = "", n = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("content").replace(/\\a/g, "").replace(/ /g, "").replace(/'/g, "").replace(/"/g, "").split("|"), i = 0; i < n.length; i++) {
      r[s[i]] = Number(n[i].replace("px", "")), e += "<tr><td>" + s[i] + "</td><td>" + n[i] + "</td></tr>";
    }t = '<table class="table breakpoints-table" style="width: 300px;">' + e + "</table>", o('[data-js="lv-responsive-table"]').append(t);
  }(), o("html[data-dev-mode]").length && (t(), o(window).resize(function () {
    t();
  }));
}(jQuery), function (a, n) {
  "use strict";
  var t = { bind: !!function () {}.bind, classList: "classList" in n.documentElement, rAF: !!(a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame) };function i(t) {
    this.callback = t, this.ticking = !1;
  }function o(t, e) {
    e = function t(e) {
      if (arguments.length <= 0) throw new Error("Missing arguments in extend function");var n,
          i,
          o,
          r = e || {};for (i = 1; i < arguments.length; i++) {
        var s = arguments[i] || {};for (n in s) {
          "object" != _typeof(r[n]) || (o = r[n]) && void 0 !== a && (o === a || o.nodeType) ? r[n] = r[n] || s[n] : r[n] = t(r[n], s[n]);
        }
      }return r;
    }(e, o.options), this.lastKnownScrollY = 0, this.elem = t, this.debouncer = new i(this.update.bind(this)), this.tolerance = function (t) {
      return t === Object(t) ? t : { down: t, up: t };
    }(e.tolerance), this.classes = e.classes, this.offset = e.offset, this.scroller = e.scroller, this.initialised = !1, this.onPin = e.onPin, this.onUnpin = e.onUnpin, this.onTop = e.onTop, this.onNotTop = e.onNotTop;
  }a.requestAnimationFrame = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame, i.prototype = { constructor: i, update: function update() {
      this.callback && this.callback(), this.ticking = !1;
    }, requestTick: function requestTick() {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    }, handleEvent: function handleEvent() {
      this.requestTick();
    } }, o.prototype = { constructor: o, init: function init() {
      if (o.cutsTheMustard) return this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
    }, destroy: function destroy() {
      var t = this.classes;this.initialised = !1, this.elem.classList.remove(t.unpinned, t.pinned, t.top, t.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1);
    }, attachEvent: function attachEvent() {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
    }, unpin: function unpin() {
      var t = this.elem.classList,
          e = this.classes;!t.contains(e.pinned) && t.contains(e.unpinned) || (t.add(e.unpinned), t.remove(e.pinned), this.onUnpin && this.onUnpin.call(this));
    }, pin: function pin() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.unpinned) && (t.remove(e.unpinned), t.add(e.pinned), this.onPin && this.onPin.call(this));
    }, top: function top() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.top) || (t.add(e.top), t.remove(e.notTop), this.onTop && this.onTop.call(this));
    }, notTop: function notTop() {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.notTop) || (t.add(e.notTop), t.remove(e.top), this.onNotTop && this.onNotTop.call(this));
    }, getScrollY: function getScrollY() {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (n.documentElement || n.body.parentNode || n.body).scrollTop;
    }, getViewportHeight: function getViewportHeight() {
      return a.innerHeight || n.documentElement.clientHeight || n.body.clientHeight;
    }, getDocumentHeight: function getDocumentHeight() {
      var t = n.body,
          e = n.documentElement;return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight);
    }, getElementHeight: function getElementHeight(t) {
      return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight);
    }, getScrollerHeight: function getScrollerHeight() {
      return this.scroller === a || this.scroller === n.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
    }, isOutOfBounds: function isOutOfBounds(t) {
      var e = t < 0,
          n = t + this.getViewportHeight() > this.getScrollerHeight();return e || n;
    }, toleranceExceeded: function toleranceExceeded(t, e) {
      return Math.abs(t - this.lastKnownScrollY) >= this.tolerance[e];
    }, shouldUnpin: function shouldUnpin(t, e) {
      var n = t > this.lastKnownScrollY,
          i = t >= this.offset;return n && i && e;
    }, shouldPin: function shouldPin(t, e) {
      var n = t < this.lastKnownScrollY,
          i = t <= this.offset;return n && e || i;
    }, update: function update() {
      var t = this.getScrollY(),
          e = t > this.lastKnownScrollY ? "down" : "up",
          n = this.toleranceExceeded(t, e);this.isOutOfBounds(t) || (t <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(t, n) ? this.unpin() : this.shouldPin(t, n) && this.pin(), this.lastKnownScrollY = t);
    } }, o.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: a, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", initial: "headroom" } }, o.cutsTheMustard = void 0 !== t && t.rAF && t.bind && t.classList, a.Headroom = o;
}(window, document), function (o) {
  o && (o.fn.headroom = function (i) {
    return this.each(function () {
      var t = o(this),
          e = t.data("headroom"),
          n = "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && i;n = o.extend(!0, {}, Headroom.options, n), e || ((e = new Headroom(this, n)).init(), t.data("headroom", e)), "string" == typeof i && e[i]();
    });
  }, o("[data-headroom]").each(function () {
    var t = o(this);t.headroom(t.data());
  }));
}(window.Zepto || window.jQuery), function (l) {
  function u(t) {
    return parseFloat(t) || 0;
  }function c(t) {
    var e = { byRow: !0, property: "height", target: null, remove: !1, mq: null };return "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) ? l.extend(e, t) : ("boolean" == typeof t ? e.byRow = t : "remove" === t && (e.remove = !0), e);
  }var i = -1,
      o = -1,
      d = l.fn.matchHeight = function (t) {
    var e = c(t);if (e.remove) {
      var n = this;return this.css(e.property, ""), l.each(d._groups, function (t, e) {
        e.elements = e.elements.not(n);
      }), this;
    }return this.length <= 1 && !e.target ? this : (d._groups.push({ elements: this, options: e }), e.mq && window.matchMedia("only all").matches && !window.matchMedia(e.mq).matches || d._apply(this, e), this);
  };d._groups = [], d._throttle = 80, d._maintainScroll = !1, d._beforeUpdate = null, d._afterUpdate = null, d._apply = function (t, e) {
    var o = c(e),
        n = l(t),
        i = [n],
        r = l(window).scrollTop(),
        s = l("html").outerHeight(!0),
        a = n.parents().filter(":hidden");return a.each(function () {
      var t = l(this);t.data("style-cache", t.attr("style"));
    }), a.css("display", "block"), o.byRow && !o.target && (n.each(function () {
      var t = l(this),
          e = "inline-block" === t.css("display") ? "inline-block" : "block";t.data("style-cache", t.attr("style")), t.css({ display: e, "padding-top": "0", "padding-bottom": "0", "margin-top": "0", "margin-bottom": "0", "border-top-width": "0", "border-bottom-width": "0", height: "100px" });
    }), i = function (t) {
      var e = l(t),
          i = null,
          o = [];return e.each(function () {
        var t = l(this),
            e = t.offset().top - u(t.css("margin-top")),
            n = 0 < o.length ? o[o.length - 1] : null;null === n ? o.push(t) : Math.floor(Math.abs(i - e)) <= 1 ? o[o.length - 1] = n.add(t) : o.push(t), i = e;
      }), o;
    }(n), n.each(function () {
      var t = l(this);t.attr("style", t.data("style-cache") || "");
    })), l.each(i, function (t, e) {
      var n = l(e),
          i = 0;if (o.target) i = o.target.outerHeight(!1);else {
        if (o.byRow && n.length <= 1) return void n.css(o.property, "");n.each(function () {
          var t = l(this),
              e = { display: "inline-block" === t.css("display") ? "inline-block" : "block" };e[o.property] = "", t.css(e), t.outerHeight(!1) > i && (i = t.outerHeight(!1)), t.css("display", "");
        });
      }n.each(function () {
        var t = l(this),
            e = 0;o.target && t.is(o.target) || ("border-box" !== t.css("box-sizing") && (e += u(t.css("border-top-width")) + u(t.css("border-bottom-width")), e += u(t.css("padding-top")) + u(t.css("padding-bottom"))), t.css(o.property, i - e));
      });
    }), a.each(function () {
      var t = l(this);t.attr("style", t.data("style-cache") || null);
    }), d._maintainScroll && l(window).scrollTop(r / s * l("html").outerHeight(!0)), this;
  }, d._applyDataApi = function () {
    var n = {};l("[data-match-height], [data-mh]").each(function () {
      var t = l(this),
          e = t.attr("data-mh") || t.attr("data-match-height");n[e] = e in n ? n[e].add(t) : t;
    }), l.each(n, function () {
      this.matchHeight(!0);
    });
  };function r(t) {
    d._beforeUpdate && d._beforeUpdate(t, d._groups), l.each(d._groups, function () {
      if (this.options.mq && window.matchMedia("only all").matches && !window.matchMedia(this.options.mq).matches) return this.elements.css(this.options.property, ""), !0;d._apply(this.elements, this.options);
    }), d._afterUpdate && d._afterUpdate(t, d._groups);
  }d._update = function (t, e) {
    if (e && "resize" === e.type) {
      var n = l(window).width();if (n === i) return;i = n;
    }t ? -1 === o && (o = setTimeout(function () {
      r(e), o = -1;
    }, d._throttle)) : r(e);
  }, l(d._applyDataApi), l(window).bind("load", function (t) {
    d._update(!1, t);
  }), l(window).bind("resize orientationchange", function (t) {
    d._update(!0, t);
  });
}(jQuery), launchGallery(), function (e) {
  "use strict";
  var n,
      i = e("html"),
      o = e(".global-header"),
      t = e(".lv-off-canvas .dropdown"),
      r = e(".lv-page"),
      s = e(".lv-off-canvas"),
      a = e('a[href*="#"]:not([href="#"])', s),
      l = e('<span class="submenu-trigger"><i class="fa fa-angle-right"></i></span>');e("[data-menu-toggle]").click(function (t) {
    e(".has-open-menu").length || (i.removeClass("has-closed-menu").addClass("has-open-menu"), n = setInterval(function () {
      e(".has-open-menu").length ? e(".global-header").css({ top: e(window).scrollTop() + "px" }) : (e(".global-header").removeAttr("style"), clearInterval(n));
    }, 100), setTimeout(function () {
      r.click(function (t) {
        t.stopPropagation(), e(".has-open-menu").length && (o.removeAttr("style"), clearInterval(n), i.removeClass("has-open-menu").addClass("has-closed-menu"), e(this).unbind("click"));
      });
    }, 10));
  }), a.click(function (t) {
    t.preventDefault(), t.stopPropagation(), o.removeAttr("style"), clearInterval(n), i.removeClass("has-open-menu").addClass("has-closed-menu"), r.unbind("click");
  }), l.click(function (t) {
    t.preventDefault(), t.stopPropagation(), e(this).parent().next(".dropdown").addClass("is-open");
  }), t.click(function (t) {
    e(this).removeClass("is-open"), t.stopPropagation();
  }), e(".lv-off-canvas .has-dropdown > a").append(l);
}(jQuery), $(window).on("load", function () {
  $("[data-masonry]").masonry();
}), $("#modal-enquiry").on("shown.bs.modal", function () {
  $(this).find("form").validator("destroy").validator();
});var enquiry = getParameterByName("enquiry");function getParameterByName(t, e) {
  e = e || window.location.href, t = t.replace(/[\[\]]/g, "\\$&");var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null;
}enquiry && ($("#modal-enquiry").addClass("is-success"), $("#modal-enquiry").modal("show")), $("[data-match-height]").matchHeight({ byRow: !1, property: "height", target: null, remove: !1, mq: "(min-width: 768px)" }), $(".global-header").headroom((_$$headroom = { offset: 52, tolerance: 0 }, _defineProperty(_$$headroom, "tolerance", { up: 5, down: 0 }), _defineProperty(_$$headroom, "classes", { initial: "headroom", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom" }), _defineProperty(_$$headroom, "onPin", function onPin() {}), _defineProperty(_$$headroom, "onUnpin", function onUnpin() {}), _defineProperty(_$$headroom, "onTop", function onTop() {}), _defineProperty(_$$headroom, "onNotTop", function onNotTop() {}), _defineProperty(_$$headroom, "onBottom", function onBottom() {}), _defineProperty(_$$headroom, "onNotBottom", function onNotBottom() {}), _$$headroom));
