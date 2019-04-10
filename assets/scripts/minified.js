if (function (t, e) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
    if (!t.document) throw new Error("jQuery requires a window with a document");return e(t);
  } : e(t);
}("undefined" != typeof window ? window : this, function (C, t) {
  "use strict";
  var e = [],
      E = C.document,
      i = Object.getPrototypeOf,
      a = e.slice,
      m = e.concat,
      l = e.push,
      o = e.indexOf,
      n = {},
      r = n.toString,
      g = n.hasOwnProperty,
      s = g.toString,
      u = s.call(Object),
      v = {},
      y = function (t) {
    return "function" == typeof t && "number" != typeof t.nodeType;
  },
      b = function (t) {
    return null != t && t === t.window;
  },
      c = { type: !0, src: !0, noModule: !0 };function _(t, e, n) {
    var i,
        o = (e = e || E).createElement("script");if (o.text = t, n) for (i in c) n[i] && (o[i] = n[i]);e.head.appendChild(o).parentNode.removeChild(o);
  }function w(t) {
    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[r.call(t)] || "object" : typeof t;
  }var d = "3.3.1",
      T = function (t, e) {
    return new T.fn.init(t, e);
  },
      f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function h(t) {
    var e = !!t && "length" in t && t.length,
        n = w(t);return !y(t) && !b(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t);
  }T.fn = T.prototype = { jquery: d, constructor: T, length: 0, toArray: function () {
      return a.call(this);
    }, get: function (t) {
      return null == t ? a.call(this) : t < 0 ? this[t + this.length] : this[t];
    }, pushStack: function (t) {
      var e = T.merge(this.constructor(), t);return e.prevObject = this, e;
    }, each: function (t) {
      return T.each(this, t);
    }, map: function (n) {
      return this.pushStack(T.map(this, function (t, e) {
        return n.call(t, e, t);
      }));
    }, slice: function () {
      return this.pushStack(a.apply(this, arguments));
    }, first: function () {
      return this.eq(0);
    }, last: function () {
      return this.eq(-1);
    }, eq: function (t) {
      var e = this.length,
          n = +t + (t < 0 ? e : 0);return this.pushStack(0 <= n && n < e ? [this[n]] : []);
    }, end: function () {
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
        u = !1;for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || y(s) || (s = {}), a === l && (s = this, a--); a < l; a++) if (null != (t = arguments[a])) for (e in t) n = s[e], s !== (i = t[e]) && (u && i && (T.isPlainObject(i) || (o = Array.isArray(i))) ? (r = o ? (o = !1, n && Array.isArray(n) ? n : []) : n && T.isPlainObject(n) ? n : {}, s[e] = T.extend(u, r, i)) : void 0 !== i && (s[e] = i));return s;
  }, T.extend({ expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
      throw new Error(t);
    }, noop: function () {}, isPlainObject: function (t) {
      var e, n;return !(!t || "[object Object]" !== r.call(t)) && (!(e = i(t)) || "function" == typeof (n = g.call(e, "constructor") && e.constructor) && s.call(n) === u);
    }, isEmptyObject: function (t) {
      var e;for (e in t) return !1;return !0;
    }, globalEval: function (t) {
      _(t);
    }, each: function (t, e) {
      var n,
          i = 0;if (h(t)) for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);else for (i in t) if (!1 === e.call(t[i], i, t[i])) break;return t;
    }, trim: function (t) {
      return null == t ? "" : (t + "").replace(f, "");
    }, makeArray: function (t, e) {
      var n = e || [];return null != t && (h(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n;
    }, inArray: function (t, e, n) {
      return null == e ? -1 : o.call(e, t, n);
    }, merge: function (t, e) {
      for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];return t.length = o, t;
    }, grep: function (t, e, n) {
      for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) != s && i.push(t[o]);return i;
    }, map: function (t, e, n) {
      var i,
          o,
          r = 0,
          s = [];if (h(t)) for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && s.push(o);else for (r in t) null != (o = e(t[r], r, n)) && s.push(o);return m.apply([], s);
    }, guid: 1, support: v }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = e[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
    n["[object " + e + "]"] = e.toLowerCase();
  });var p = function (n) {
    var t,
        h,
        _,
        r,
        o,
        p,
        d,
        m,
        w,
        l,
        u,
        x,
        C,
        s,
        E,
        g,
        a,
        c,
        v,
        T = "sizzle" + 1 * new Date(),
        y = n.document,
        S = 0,
        i = 0,
        f = st(),
        b = st(),
        I = st(),
        A = function (t, e) {
      return t === e && (u = !0), 0;
    },
        k = {}.hasOwnProperty,
        e = [],
        D = e.pop,
        O = e.push,
        N = e.push,
        L = e.slice,
        j = function (t, e) {
      for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;return -1;
    },
        P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        H = "[\\x20\\t\\r\\n\\f]",
        z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        M = "\\[" + H + "*(" + z + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + H + "*\\]",
        W = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
        R = new RegExp(H + "+", "g"),
        q = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
        B = new RegExp("^" + H + "*," + H + "*"),
        F = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
        U = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
        $ = new RegExp(W),
        Q = new RegExp("^" + z + "$"),
        Y = { ID: new RegExp("^#(" + z + ")"), CLASS: new RegExp("^\\.(" + z + ")"), TAG: new RegExp("^(" + z + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"), bool: new RegExp("^(?:" + P + ")$", "i"), needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i") },
        K = /^(?:input|select|textarea|button)$/i,
        V = /^h\d$/i,
        X = /^[^{]+\{\s*\[native \w/,
        G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Z = /[+~]/,
        J = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
        tt = function (t, e, n) {
      var i = "0x" + e - 65536;return i != i || n ? e : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
    },
        et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        nt = function (t, e) {
      return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t;
    },
        it = function () {
      x();
    },
        ot = yt(function (t) {
      return !0 === t.disabled && ("form" in t || "label" in t);
    }, { dir: "parentNode", next: "legend" });try {
      N.apply(e = L.call(y.childNodes), y.childNodes), e[y.childNodes.length].nodeType;
    } catch (t) {
      N = { apply: e.length ? function (t, e) {
          O.apply(t, L.call(e));
        } : function (t, e) {
          for (var n = t.length, i = 0; t[n++] = e[i++];);t.length = n - 1;
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
          f = e ? e.nodeType : 9;if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;if (!i && ((e ? e.ownerDocument || e : y) !== C && x(e), e = e || C, E)) {
        if (11 !== f && (l = G.exec(t))) if (o = l[1]) {
          if (9 === f) {
            if (!(s = e.getElementById(o))) return n;if (s.id === o) return n.push(s), n;
          } else if (d && (s = d.getElementById(o)) && v(e, s) && s.id === o) return n.push(s), n;
        } else {
          if (l[2]) return N.apply(n, e.getElementsByTagName(t)), n;if ((o = l[3]) && h.getElementsByClassName && e.getElementsByClassName) return N.apply(n, e.getElementsByClassName(o)), n;
        }if (h.qsa && !I[t + " "] && (!g || !g.test(t))) {
          if (1 !== f) d = e, c = t;else if ("object" !== e.nodeName.toLowerCase()) {
            for ((a = e.getAttribute("id")) ? a = a.replace(et, nt) : e.setAttribute("id", a = T), r = (u = p(t)).length; r--;) u[r] = "#" + a + " " + vt(u[r]);c = u.join(","), d = Z.test(t) && mt(e.parentNode) || e;
          }if (c) try {
            return N.apply(n, d.querySelectorAll(c)), n;
          } catch (t) {} finally {
            a === T && e.removeAttribute("id");
          }
        }
      }return m(t.replace(q, "$1"), e, n, i);
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
      for (var n = t.split("|"), i = n.length; i--;) _.attrHandle[n[i]] = e;
    }function ct(t, e) {
      var n = e && t,
          i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;if (i) return i;if (n) for (; n = n.nextSibling;) if (n === e) return -1;return t ? 1 : -1;
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
          for (var n, i = s([], t.length, r), o = i.length; o--;) t[n = i[o]] && (t[n] = !(e[n] = t[n]));
        });
      });
    }function mt(t) {
      return t && void 0 !== t.getElementsByTagName && t;
    }for (t in h = rt.support = {}, o = rt.isXML = function (t) {
      var e = t && (t.ownerDocument || t).documentElement;return !!e && "HTML" !== e.nodeName;
    }, x = rt.setDocument = function (t) {
      var e,
          n,
          i = t ? t.ownerDocument || t : y;return i !== C && 9 === i.nodeType && i.documentElement && (s = (C = i).documentElement, E = !o(C), y !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", it, !1) : n.attachEvent && n.attachEvent("onunload", it)), h.attributes = lt(function (t) {
        return t.className = "i", !t.getAttribute("className");
      }), h.getElementsByTagName = lt(function (t) {
        return t.appendChild(C.createComment("")), !t.getElementsByTagName("*").length;
      }), h.getElementsByClassName = X.test(C.getElementsByClassName), h.getById = lt(function (t) {
        return s.appendChild(t).id = T, !C.getElementsByName || !C.getElementsByName(T).length;
      }), h.getById ? (_.filter.ID = function (t) {
        var e = t.replace(J, tt);return function (t) {
          return t.getAttribute("id") === e;
        };
      }, _.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && E) {
          var n = e.getElementById(t);return n ? [n] : [];
        }
      }) : (_.filter.ID = function (t) {
        var n = t.replace(J, tt);return function (t) {
          var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");return e && e.value === n;
        };
      }, _.find.ID = function (t, e) {
        if (void 0 !== e.getElementById && E) {
          var n,
              i,
              o,
              r = e.getElementById(t);if (r) {
            if ((n = r.getAttributeNode("id")) && n.value === t) return [r];for (o = e.getElementsByName(t), i = 0; r = o[i++];) if ((n = r.getAttributeNode("id")) && n.value === t) return [r];
          }return [];
        }
      }), _.find.TAG = h.getElementsByTagName ? function (t, e) {
        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : h.qsa ? e.querySelectorAll(t) : void 0;
      } : function (t, e) {
        var n,
            i = [],
            o = 0,
            r = e.getElementsByTagName(t);if ("*" !== t) return r;for (; n = r[o++];) 1 === n.nodeType && i.push(n);return i;
      }, _.find.CLASS = h.getElementsByClassName && function (t, e) {
        if (void 0 !== e.getElementsByClassName && E) return e.getElementsByClassName(t);
      }, a = [], g = [], (h.qsa = X.test(C.querySelectorAll)) && (lt(function (t) {
        s.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + P + ")"), t.querySelectorAll("[id~=" + T + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + T + "+*").length || g.push(".#.+[+~]");
      }), lt(function (t) {
        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var e = C.createElement("input");e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), s.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:");
      })), (h.matchesSelector = X.test(c = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && lt(function (t) {
        h.disconnectedMatch = c.call(t, "*"), c.call(t, "[s!='']:x"), a.push("!=", W);
      }), g = g.length && new RegExp(g.join("|")), a = a.length && new RegExp(a.join("|")), e = X.test(s.compareDocumentPosition), v = e || X.test(s.contains) ? function (t, e) {
        var n = 9 === t.nodeType ? t.documentElement : t,
            i = e && e.parentNode;return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)));
      } : function (t, e) {
        if (e) for (; e = e.parentNode;) if (e === t) return !0;return !1;
      }, A = e ? function (t, e) {
        if (t === e) return u = !0, 0;var n = !t.compareDocumentPosition - !e.compareDocumentPosition;return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !h.sortDetached && e.compareDocumentPosition(t) === n ? t === C || t.ownerDocument === y && v(y, t) ? -1 : e === C || e.ownerDocument === y && v(y, e) ? 1 : l ? j(l, t) - j(l, e) : 0 : 4 & n ? -1 : 1);
      } : function (t, e) {
        if (t === e) return u = !0, 0;var n,
            i = 0,
            o = t.parentNode,
            r = e.parentNode,
            s = [t],
            a = [e];if (!o || !r) return t === C ? -1 : e === C ? 1 : o ? -1 : r ? 1 : l ? j(l, t) - j(l, e) : 0;if (o === r) return ct(t, e);for (n = t; n = n.parentNode;) s.unshift(n);for (n = e; n = n.parentNode;) a.unshift(n);for (; s[i] === a[i];) i++;return i ? ct(s[i], a[i]) : s[i] === y ? -1 : a[i] === y ? 1 : 0;
      }), C;
    }, rt.matches = function (t, e) {
      return rt(t, null, null, e);
    }, rt.matchesSelector = function (t, e) {
      if ((t.ownerDocument || t) !== C && x(t), e = e.replace(U, "='$1']"), h.matchesSelector && E && !I[e + " "] && (!a || !a.test(e)) && (!g || !g.test(e))) try {
        var n = c.call(t, e);if (n || h.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n;
      } catch (t) {}return 0 < rt(e, C, null, [t]).length;
    }, rt.contains = function (t, e) {
      return (t.ownerDocument || t) !== C && x(t), v(t, e);
    }, rt.attr = function (t, e) {
      (t.ownerDocument || t) !== C && x(t);var n = _.attrHandle[e.toLowerCase()],
          i = n && k.call(_.attrHandle, e.toLowerCase()) ? n(t, e, !E) : void 0;return void 0 !== i ? i : h.attributes || !E ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
    }, rt.escape = function (t) {
      return (t + "").replace(et, nt);
    }, rt.error = function (t) {
      throw new Error("Syntax error, unrecognized expression: " + t);
    }, rt.uniqueSort = function (t) {
      var e,
          n = [],
          i = 0,
          o = 0;if (u = !h.detectDuplicates, l = !h.sortStable && t.slice(0), t.sort(A), u) {
        for (; e = t[o++];) e === t[o] && (i = n.push(o));for (; i--;) t.splice(n[i], 1);
      }return l = null, t;
    }, r = rt.getText = function (t) {
      var e,
          n = "",
          i = 0,
          o = t.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof t.textContent) return t.textContent;for (t = t.firstChild; t; t = t.nextSibling) n += r(t);
        } else if (3 === o || 4 === o) return t.nodeValue;
      } else for (; e = t[i++];) n += r(e);return n;
    }, (_ = rt.selectors = { cacheLength: 50, createPseudo: at, match: Y, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (t) {
          return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
        }, CHILD: function (t) {
          return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || rt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && rt.error(t[0]), t;
        }, PSEUDO: function (t) {
          var e,
              n = !t[6] && t[2];return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && $.test(n) && (e = p(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3));
        } }, filter: { TAG: function (t) {
          var e = t.replace(J, tt).toLowerCase();return "*" === t ? function () {
            return !0;
          } : function (t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          };
        }, CLASS: function (t) {
          var e = f[t + " "];return e || (e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) && f(t, function (t) {
            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "");
          });
        }, ATTR: function (n, i, o) {
          return function (t) {
            var e = rt.attr(t, n);return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === o : "!=" === i ? e !== o : "^=" === i ? o && 0 === e.indexOf(o) : "*=" === i ? o && -1 < e.indexOf(o) : "$=" === i ? o && e.slice(-o.length) === o : "~=" === i ? -1 < (" " + e.replace(R, " ") + " ").indexOf(o) : "|=" === i && (e === o || e.slice(0, o.length + 1) === o + "-"));
          };
        }, CHILD: function (p, t, e, m, g) {
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
                  for (s = t; s = s[u];) if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;l = u = "only" === p && !l && "nextSibling";
                }return !0;
              }if (l = [y ? c.firstChild : c.lastChild], y && f) {
                for (h = (a = (i = (o = (r = (s = c)[T] || (s[T] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === S && i[1]) && i[2], s = a && c.childNodes[a]; s = ++a && s && s[u] || (h = a = 0) || l.pop();) if (1 === s.nodeType && ++h && s === t) {
                  o[p] = [S, a, h];break;
                }
              } else if (f && (h = a = (i = (o = (r = (s = t)[T] || (s[T] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] || [])[0] === S && i[1]), !1 === h) for (; (s = ++a && s && s[u] || (h = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++h || (f && ((o = (r = s[T] || (s[T] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[p] = [S, h]), s !== t)););return (h -= g) === m || h % m == 0 && 0 <= h / m;
            }
          };
        }, PSEUDO: function (t, r) {
          var e,
              s = _.pseudos[t] || _.setFilters[t.toLowerCase()] || rt.error("unsupported pseudo: " + t);return s[T] ? s(r) : 1 < s.length ? (e = [t, t, "", r], _.setFilters.hasOwnProperty(t.toLowerCase()) ? at(function (t, e) {
            for (var n, i = s(t, r), o = i.length; o--;) t[n = j(t, i[o])] = !(e[n] = i[o]);
          }) : function (t) {
            return s(t, 0, e);
          }) : s;
        } }, pseudos: { not: at(function (t) {
          var i = [],
              o = [],
              a = d(t.replace(q, "$1"));return a[T] ? at(function (t, e, n, i) {
            for (var o, r = a(t, null, i, []), s = t.length; s--;) (o = r[s]) && (t[s] = !(e[s] = o));
          }) : function (t, e, n) {
            return i[0] = t, a(i, null, n, o), i[0] = null, !o.pop();
          };
        }), has: at(function (e) {
          return function (t) {
            return 0 < rt(e, t).length;
          };
        }), contains: at(function (e) {
          return e = e.replace(J, tt), function (t) {
            return -1 < (t.textContent || t.innerText || r(t)).indexOf(e);
          };
        }), lang: at(function (n) {
          return Q.test(n || "") || rt.error("unsupported lang: " + n), n = n.replace(J, tt).toLowerCase(), function (t) {
            var e;do {
              if (e = E ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function (t) {
          var e = n.location && n.location.hash;return e && e.slice(1) === t.id;
        }, root: function (t) {
          return t === s;
        }, focus: function (t) {
          return t === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
        }, enabled: ht(!1), disabled: ht(!0), checked: function (t) {
          var e = t.nodeName.toLowerCase();return "input" === e && !!t.checked || "option" === e && !!t.selected;
        }, selected: function (t) {
          return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
        }, empty: function (t) {
          for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;return !0;
        }, parent: function (t) {
          return !_.pseudos.empty(t);
        }, header: function (t) {
          return V.test(t.nodeName);
        }, input: function (t) {
          return K.test(t.nodeName);
        }, button: function (t) {
          var e = t.nodeName.toLowerCase();return "input" === e && "button" === t.type || "button" === e;
        }, text: function (t) {
          var e;return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
        }, first: pt(function () {
          return [0];
        }), last: pt(function (t, e) {
          return [e - 1];
        }), eq: pt(function (t, e, n) {
          return [n < 0 ? n + e : n];
        }), even: pt(function (t, e) {
          for (var n = 0; n < e; n += 2) t.push(n);return t;
        }), odd: pt(function (t, e) {
          for (var n = 1; n < e; n += 2) t.push(n);return t;
        }), lt: pt(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);return t;
        }), gt: pt(function (t, e, n) {
          for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);return t;
        }) } }).pseudos.nth = _.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) _.pseudos[t] = dt(t);for (t in { submit: !0, reset: !0 }) _.pseudos[t] = ft(t);function gt() {}function vt(t) {
      for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;return i;
    }function yt(a, t, e) {
      var l = t.dir,
          u = t.next,
          c = u || l,
          d = e && "parentNode" === c,
          f = i++;return t.first ? function (t, e, n) {
        for (; t = t[l];) if (1 === t.nodeType || d) return a(t, e, n);return !1;
      } : function (t, e, n) {
        var i,
            o,
            r,
            s = [S, f];if (n) {
          for (; t = t[l];) if ((1 === t.nodeType || d) && a(t, e, n)) return !0;
        } else for (; t = t[l];) if (1 === t.nodeType || d) if (o = (r = t[T] || (t[T] = {}))[t.uniqueID] || (r[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[l] || t;else {
          if ((i = o[c]) && i[0] === S && i[1] === f) return s[2] = i[2];if ((o[c] = s)[2] = a(t, e, n)) return !0;
        }return !1;
      };
    }function bt(o) {
      return 1 < o.length ? function (t, e, n) {
        for (var i = o.length; i--;) if (!o[i](t, e, n)) return !1;return !0;
      } : o[0];
    }function _t(t, e, n, i, o) {
      for (var r, s = [], a = 0, l = t.length, u = null != e; a < l; a++) (r = t[a]) && (n && !n(r, i, o) || (s.push(r), u && e.push(a)));return s;
    }function wt(h, p, m, g, v, t) {
      return g && !g[T] && (g = wt(g)), v && !v[T] && (v = wt(v, t)), at(function (t, e, n, i) {
        var o,
            r,
            s,
            a = [],
            l = [],
            u = e.length,
            c = t || function (t, e, n) {
          for (var i = 0, o = e.length; i < o; i++) rt(t, e[i], n);return n;
        }(p || "*", n.nodeType ? [n] : n, []),
            d = !h || !t && p ? c : _t(c, a, h, n, i),
            f = m ? v || (t ? h : u || g) ? [] : e : d;if (m && m(d, f, n, i), g) for (o = _t(f, l), g(o, [], n, i), r = o.length; r--;) (s = o[r]) && (f[l[r]] = !(d[l[r]] = s));if (t) {
          if (v || h) {
            if (v) {
              for (o = [], r = f.length; r--;) (s = f[r]) && o.push(d[r] = s);v(null, f = [], o, i);
            }for (r = f.length; r--;) (s = f[r]) && -1 < (o = v ? j(t, s) : a[r]) && (t[o] = !(e[o] = s));
          }
        } else f = _t(f === e ? f.splice(u, f.length) : f), v ? v(null, e, f, i) : N.apply(e, f);
      });
    }function xt(t) {
      for (var o, e, n, i = t.length, r = _.relative[t[0].type], s = r || _.relative[" "], a = r ? 1 : 0, l = yt(function (t) {
        return t === o;
      }, s, !0), u = yt(function (t) {
        return -1 < j(o, t);
      }, s, !0), c = [function (t, e, n) {
        var i = !r && (n || e !== w) || ((o = e).nodeType ? l(t, e, n) : u(t, e, n));return o = null, i;
      }]; a < i; a++) if (e = _.relative[t[a].type]) c = [yt(bt(c), e)];else {
        if ((e = _.filter[t[a].type].apply(null, t[a].matches))[T]) {
          for (n = ++a; n < i && !_.relative[t[n].type]; n++);return wt(1 < a && bt(c), 1 < a && vt(t.slice(0, a - 1).concat({ value: " " === t[a - 2].type ? "*" : "" })).replace(q, "$1"), e, a < n && xt(t.slice(a, n)), n < i && xt(t = t.slice(n)), n < i && vt(t));
        }c.push(e);
      }return bt(c);
    }return gt.prototype = _.filters = _.pseudos, _.setFilters = new gt(), p = rt.tokenize = function (t, e) {
      var n,
          i,
          o,
          r,
          s,
          a,
          l,
          u = b[t + " "];if (u) return e ? 0 : u.slice(0);for (s = t, a = [], l = _.preFilter; s;) {
        for (r in n && !(i = B.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = F.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(q, " ") }), s = s.slice(n.length)), _.filter) !(i = Y[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({ value: n, type: r, matches: i }), s = s.slice(n.length));if (!n) break;
      }return e ? s.length : s ? rt.error(t) : b(t, a).slice(0);
    }, d = rt.compile = function (t, e) {
      var n,
          i = [],
          o = [],
          r = I[t + " "];if (!r) {
        for (e || (e = p(t)), n = e.length; n--;) (r = xt(e[n]))[T] ? i.push(r) : o.push(r);(r = I(t, function (g, v) {
          var y = 0 < v.length,
              b = 0 < g.length,
              t = function (t, e, n, i, o) {
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
                for (s = 0, e || r.ownerDocument === C || (x(r), n = !E); a = g[s++];) if (a(r, e || C, n)) {
                  i.push(r);break;
                }o && (S = p);
              }y && ((r = !a && r) && l--, t && c.push(r));
            }if (l += u, y && u !== l) {
              for (s = 0; a = v[s++];) a(c, d, e, n);if (t) {
                if (0 < l) for (; u--;) c[u] || d[u] || (d[u] = D.call(i));d = _t(d);
              }N.apply(i, d), o && !t && 0 < d.length && 1 < l + v.length && rt.uniqueSort(i);
            }return o && (S = p, w = f), c;
          };return y ? at(t) : t;
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
          if (!(e = (_.find.ID(s.matches[0].replace(J, tt), e) || [])[0])) return n;u && (e = e.parentNode), t = t.slice(r.shift().value.length);
        }for (o = Y.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !_.relative[a = s.type]);) if ((l = _.find[a]) && (i = l(s.matches[0].replace(J, tt), Z.test(r[0].type) && mt(e.parentNode) || e))) {
          if (r.splice(o, 1), !(t = i.length && vt(r))) return N.apply(n, i), n;break;
        }
      }return (u || d(t, c))(i, e, !E, n, !e || Z.test(t) && mt(e.parentNode) || e), n;
    }, h.sortStable = T.split("").sort(A).join("") === T, h.detectDuplicates = !!u, x(), h.sortDetached = lt(function (t) {
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
    }) || ut(P, function (t, e, n) {
      var i;if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null;
    }), rt;
  }(C);T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains, T.escapeSelector = p.escape;var x = function (t, e, n) {
    for (var i = [], o = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;) if (1 === t.nodeType) {
      if (o && T(t).is(n)) break;i.push(t);
    }return i;
  },
      S = function (t, e) {
    for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);return n;
  },
      I = T.expr.match.needsContext;function A(t, e) {
    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
  }var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(t, n, i) {
    return y(n) ? T.grep(t, function (t, e) {
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
  }, T.fn.extend({ find: function (t) {
      var e,
          n,
          i = this.length,
          o = this;if ("string" != typeof t) return this.pushStack(T(t).filter(function () {
        for (e = 0; e < i; e++) if (T.contains(o[e], this)) return !0;
      }));for (n = this.pushStack([]), e = 0; e < i; e++) T.find(t, o[e], n);return 1 < i ? T.uniqueSort(n) : n;
    }, filter: function (t) {
      return this.pushStack(D(this, t || [], !1));
    }, not: function (t) {
      return this.pushStack(D(this, t || [], !0));
    }, is: function (t) {
      return !!D(this, "string" == typeof t && I.test(t) ? T(t) : t || [], !1).length;
    } });var O,
      N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init = function (t, e, n) {
    var i, o;if (!t) return this;if (n = n || O, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : T.makeArray(t, this);if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : N.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);if (i[1]) {
      if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : E, !0)), k.test(i[1]) && T.isPlainObject(e)) for (i in e) y(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);return this;
    }return (o = E.getElementById(i[2])) && (this[0] = o, this.length = 1), this;
  }).prototype = T.fn, O = T(E);var L = /^(?:parents|prev(?:Until|All))/,
      j = { children: !0, contents: !0, next: !0, prev: !0 };function P(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType;);return t;
  }T.fn.extend({ has: function (t) {
      var e = T(t, this),
          n = e.length;return this.filter(function () {
        for (var t = 0; t < n; t++) if (T.contains(this, e[t])) return !0;
      });
    }, closest: function (t, e) {
      var n,
          i = 0,
          o = this.length,
          r = [],
          s = "string" != typeof t && T(t);if (!I.test(t)) for (; i < o; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
        r.push(n);break;
      }return this.pushStack(1 < r.length ? T.uniqueSort(r) : r);
    }, index: function (t) {
      return t ? "string" == typeof t ? o.call(T(t), this[0]) : o.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function (t, e) {
      return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))));
    }, addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    } }), T.each({ parent: function (t) {
      var e = t.parentNode;return e && 11 !== e.nodeType ? e : null;
    }, parents: function (t) {
      return x(t, "parentNode");
    }, parentsUntil: function (t, e, n) {
      return x(t, "parentNode", n);
    }, next: function (t) {
      return P(t, "nextSibling");
    }, prev: function (t) {
      return P(t, "previousSibling");
    }, nextAll: function (t) {
      return x(t, "nextSibling");
    }, prevAll: function (t) {
      return x(t, "previousSibling");
    }, nextUntil: function (t, e, n) {
      return x(t, "nextSibling", n);
    }, prevUntil: function (t, e, n) {
      return x(t, "previousSibling", n);
    }, siblings: function (t) {
      return S((t.parentNode || {}).firstChild, t);
    }, children: function (t) {
      return S(t.firstChild);
    }, contents: function (t) {
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
      t && y(o = t.promise) ? o.call(t).done(e).fail(n) : t && y(o = t.then) ? o.call(t, e, n) : e.apply(void 0, [t].slice(i));
    } catch (t) {
      n.apply(void 0, [t]);
    }
  }T.Callbacks = function (i) {
    i = "string" == typeof i ? function (t) {
      var n = {};return T.each(t.match(H) || [], function (t, e) {
        n[e] = !0;
      }), n;
    }(i) : T.extend({}, i);var n,
        t,
        e,
        o,
        r = [],
        s = [],
        a = -1,
        l = function () {
      for (o = o || i.once, e = n = !0; s.length; a = -1) for (t = s.shift(); ++a < r.length;) !1 === r[a].apply(t[0], t[1]) && i.stopOnFalse && (a = r.length, t = !1);i.memory || (t = !1), n = !1, o && (r = t ? [] : "");
    },
        u = { add: function () {
        return r && (t && !n && (a = r.length - 1, s.push(t)), function n(t) {
          T.each(t, function (t, e) {
            y(e) ? i.unique && u.has(e) || r.push(e) : e && e.length && "string" !== w(e) && n(e);
          });
        }(arguments), t && !n && l()), this;
      }, remove: function () {
        return T.each(arguments, function (t, e) {
          for (var n; -1 < (n = T.inArray(e, r, n));) r.splice(n, 1), n <= a && a--;
        }), this;
      }, has: function (t) {
        return t ? -1 < T.inArray(t, r) : 0 < r.length;
      }, empty: function () {
        return r && (r = []), this;
      }, disable: function () {
        return o = s = [], r = t = "", this;
      }, disabled: function () {
        return !r;
      }, lock: function () {
        return o = s = [], t || n || (r = t = ""), this;
      }, locked: function () {
        return !!o;
      }, fireWith: function (t, e) {
        return o || (e = [t, (e = e || []).slice ? e.slice() : e], s.push(e), n || l()), this;
      }, fire: function () {
        return u.fireWith(this, arguments), this;
      }, fired: function () {
        return !!e;
      } };return u;
  }, T.extend({ Deferred: function (t) {
      var r = [["notify", "progress", T.Callbacks("memory"), T.Callbacks("memory"), 2], ["resolve", "done", T.Callbacks("once memory"), T.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", T.Callbacks("once memory"), T.Callbacks("once memory"), 1, "rejected"]],
          o = "pending",
          s = { state: function () {
          return o;
        }, always: function () {
          return a.done(arguments).fail(arguments), this;
        }, catch: function (t) {
          return s.then(null, t);
        }, pipe: function () {
          var o = arguments;return T.Deferred(function (i) {
            T.each(r, function (t, e) {
              var n = y(o[e[4]]) && o[e[4]];a[e[1]](function () {
                var t = n && n.apply(this, arguments);t && y(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments);
              });
            }), o = null;
          }).promise();
        }, then: function (e, n, i) {
          var l = 0;function u(o, r, s, a) {
            return function () {
              var n = this,
                  i = arguments,
                  t = function () {
                var t, e;if (!(o < l)) {
                  if ((t = s.apply(n, i)) === r.promise()) throw new TypeError("Thenable self-resolution");e = t && ("object" == typeof t || "function" == typeof t) && t.then, y(e) ? a ? e.call(t, u(l, r, z, a), u(l, r, M, a)) : (l++, e.call(t, u(l, r, z, a), u(l, r, M, a), u(l, r, z, r.notifyWith))) : (s !== z && (n = void 0, i = [t]), (a || r.resolveWith)(n, i));
                }
              },
                  e = a ? t : function () {
                try {
                  t();
                } catch (t) {
                  T.Deferred.exceptionHook && T.Deferred.exceptionHook(t, e.stackTrace), l <= o + 1 && (s !== M && (n = void 0, i = [t]), r.rejectWith(n, i));
                }
              };o ? e() : (T.Deferred.getStackHook && (e.stackTrace = T.Deferred.getStackHook()), C.setTimeout(e));
            };
          }return T.Deferred(function (t) {
            r[0][3].add(u(0, t, y(i) ? i : z, t.notifyWith)), r[1][3].add(u(0, t, y(e) ? e : z)), r[2][3].add(u(0, t, y(n) ? n : M));
          }).promise();
        }, promise: function (t) {
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
    }, when: function (t) {
      var n = arguments.length,
          e = n,
          i = Array(e),
          o = a.call(arguments),
          r = T.Deferred(),
          s = function (e) {
        return function (t) {
          i[e] = this, o[e] = 1 < arguments.length ? a.call(arguments) : t, --n || r.resolveWith(i, o);
        };
      };if (n <= 1 && (W(t, r.done(s(e)).resolve, r.reject, !n), "pending" === r.state() || y(o[e] && o[e].then))) return r.then();for (; e--;) W(o[e], s(e), r.reject);return r.promise();
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
  }, T.extend({ isReady: !1, readyWait: 1, ready: function (t) {
      (!0 === t ? --T.readyWait : T.isReady) || (T.isReady = !0) !== t && 0 < --T.readyWait || q.resolveWith(E, [T]);
    } }), T.ready.then = q.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(T.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));var F = function (t, e, n, i, o, r, s) {
    var a = 0,
        l = t.length,
        u = null == n;if ("object" === w(n)) for (a in o = !0, n) F(t, e, a, n[a], !0, r, s);else if (void 0 !== i && (o = !0, y(i) || (s = !0), u && (e = s ? (e.call(t, i), null) : (u = e, function (t, e, n) {
      return u.call(T(t), n);
    })), e)) for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));return o ? t : u ? e.call(t) : l ? e(t[0], n) : r;
  },
      U = /^-ms-/,
      $ = /-([a-z])/g;function Q(t, e) {
    return e.toUpperCase();
  }function Y(t) {
    return t.replace(U, "ms-").replace($, Q);
  }var K = function (t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  };function V() {
    this.expando = T.expando + V.uid++;
  }V.uid = 1, V.prototype = { cache: function (t) {
      var e = t[this.expando];return e || (e = {}, K(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
    }, set: function (t, e, n) {
      var i,
          o = this.cache(t);if ("string" == typeof e) o[Y(e)] = n;else for (i in e) o[Y(i)] = e[i];return o;
    }, get: function (t, e) {
      return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)];
    }, access: function (t, e, n) {
      return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e);
    }, remove: function (t, e) {
      var n,
          i = t[this.expando];if (void 0 !== i) {
        if (void 0 !== e) {
          n = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in i ? [e] : e.match(H) || []).length;for (; n--;) delete i[e[n]];
        }(void 0 === e || T.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando]);
      }
    }, hasData: function (t) {
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
  }T.extend({ hasData: function (t) {
      return G.hasData(t) || X.hasData(t);
    }, data: function (t, e, n) {
      return G.access(t, e, n);
    }, removeData: function (t, e) {
      G.remove(t, e);
    }, _data: function (t, e, n) {
      return X.access(t, e, n);
    }, _removeData: function (t, e) {
      X.remove(t, e);
    } }), T.fn.extend({ data: function (n, t) {
      var e,
          i,
          o,
          r = this[0],
          s = r && r.attributes;if (void 0 !== n) return "object" == typeof n ? this.each(function () {
        G.set(this, n);
      }) : F(this, function (t) {
        var e;if (r && void 0 === t) return void 0 !== (e = G.get(r, n)) ? e : void 0 !== (e = tt(r, n)) ? e : void 0;this.each(function () {
          G.set(this, n, t);
        });
      }, null, t, 1 < arguments.length, null, !0);if (this.length && (o = G.get(r), 1 === r.nodeType && !X.get(r, "hasDataAttrs"))) {
        for (e = s.length; e--;) s[e] && 0 === (i = s[e].name).indexOf("data-") && (i = Y(i.slice(5)), tt(r, i, o[i]));X.set(r, "hasDataAttrs", !0);
      }return o;
    }, removeData: function (t) {
      return this.each(function () {
        G.remove(this, t);
      });
    } }), T.extend({ queue: function (t, e, n) {
      var i;if (t) return e = (e || "fx") + "queue", i = X.get(t, e), n && (!i || Array.isArray(n) ? i = X.access(t, e, T.makeArray(n)) : i.push(n)), i || [];
    }, dequeue: function (t, e) {
      e = e || "fx";var n = T.queue(t, e),
          i = n.length,
          o = n.shift(),
          r = T._queueHooks(t, e);"inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function () {
        T.dequeue(t, e);
      }, r)), !i && r && r.empty.fire();
    }, _queueHooks: function (t, e) {
      var n = e + "queueHooks";return X.get(t, n) || X.access(t, n, { empty: T.Callbacks("once memory").add(function () {
          X.remove(t, [e + "queue", n]);
        }) });
    } }), T.fn.extend({ queue: function (e, n) {
      var t = 2;return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? T.queue(this[0], e) : void 0 === n ? this : this.each(function () {
        var t = T.queue(this, e, n);T._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e);
      });
    }, dequeue: function (t) {
      return this.each(function () {
        T.dequeue(this, t);
      });
    }, clearQueue: function (t) {
      return this.queue(t || "fx", []);
    }, promise: function (t, e) {
      var n,
          i = 1,
          o = T.Deferred(),
          r = this,
          s = this.length,
          a = function () {
        --i || o.resolveWith(r, [r]);
      };for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;) (n = X.get(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));return a(), o.promise(e);
    } });var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      nt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
      it = ["Top", "Right", "Bottom", "Left"],
      ot = function (t, e) {
    return "none" === (t = e || t).style.display || "" === t.style.display && T.contains(t.ownerDocument, t) && "none" === T.css(t, "display");
  },
      rt = function (t, e, n, i) {
    var o,
        r,
        s = {};for (r in e) s[r] = t.style[r], t.style[r] = e[r];for (r in o = n.apply(t, i || []), e) t.style[r] = s[r];return o;
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
        c = (T.cssNumber[e] || "px" !== u && +l) && nt.exec(T.css(t, e));if (c && c[3] !== u) {
      for (l /= 2, u = u || c[3], c = +l || 1; s--;) T.style(t, e, c + u), (1 - r) * (1 - (r = a() / l || .5)) <= 0 && (s = 0), c /= r;c *= 2, T.style(t, e, c + u), n = n || [];
    }return n && (c = +c || +l || 0, o = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = o)), o;
  }var at = {};function lt(t, e) {
    for (var n, i, o, r, s, a, l, u = [], c = 0, d = t.length; c < d; c++) (i = t[c]).style && (n = i.style.display, e ? ("none" === n && (u[c] = X.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && ot(i) && (u[c] = (l = s = r = void 0, s = (o = i).ownerDocument, a = o.nodeName, (l = at[a]) || (r = s.body.appendChild(s.createElement(a)), l = T.css(r, "display"), r.parentNode.removeChild(r), "none" === l && (l = "block"), at[a] = l)))) : "none" !== n && (u[c] = "none", X.set(i, "display", n)));for (c = 0; c < d; c++) null != u[c] && (t[c].style.display = u[c]);return t;
  }T.fn.extend({ show: function () {
      return lt(this, !0);
    }, hide: function () {
      return lt(this);
    }, toggle: function (t) {
      return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
        ot(this) ? T(this).show() : T(this).hide();
      });
    } });var ut = /^(?:checkbox|radio)$/i,
      ct = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      dt = /^$|^module$|\/(?:java|ecma)script/i,
      ft = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function ht(t, e) {
    var n;return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && A(t, e) ? T.merge([t], n) : n;
  }function pt(t, e) {
    for (var n = 0, i = t.length; n < i; n++) X.set(t[n], "globalEval", !e || X.get(e[n], "globalEval"));
  }ft.optgroup = ft.option, ft.tbody = ft.tfoot = ft.colgroup = ft.caption = ft.thead, ft.th = ft.td;var mt,
      gt,
      vt = /<|&#?\w+;/;function yt(t, e, n, i, o) {
    for (var r, s, a, l, u, c, d = e.createDocumentFragment(), f = [], h = 0, p = t.length; h < p; h++) if ((r = t[h]) || 0 === r) if ("object" === w(r)) T.merge(f, r.nodeType ? [r] : r);else if (vt.test(r)) {
      for (s = s || d.appendChild(e.createElement("div")), a = (ct.exec(r) || ["", ""])[1].toLowerCase(), l = ft[a] || ft._default, s.innerHTML = l[1] + T.htmlPrefilter(r) + l[2], c = l[0]; c--;) s = s.lastChild;T.merge(f, s.childNodes), (s = d.firstChild).textContent = "";
    } else f.push(e.createTextNode(r));for (d.textContent = "", h = 0; r = f[h++];) if (i && -1 < T.inArray(r, i)) o && o.push(r);else if (u = T.contains(r.ownerDocument, r), s = ht(d.appendChild(r), "script"), u && pt(s), n) for (c = 0; r = s[c++];) dt.test(r.type || "") && n.push(r);return d;
  }mt = E.createDocumentFragment().appendChild(E.createElement("div")), (gt = E.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), mt.appendChild(gt), v.checkClone = mt.cloneNode(!0).cloneNode(!0).lastChild.checked, mt.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!mt.cloneNode(!0).lastChild.defaultValue;var bt = E.documentElement,
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
    var s, a;if ("object" == typeof e) {
      for (a in "string" != typeof n && (i = i || n, n = void 0), e) St(t, a, n, i, e[a], r);return t;
    }if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = Et;else if (!o) return t;return 1 === r && (s = o, (o = function (t) {
      return T().off(t), s.apply(this, arguments);
    }).guid = s.guid || (s.guid = T.guid++)), t.each(function () {
      T.event.add(this, e, o, i, n);
    });
  }T.event = { global: {}, add: function (e, t, n, i, o) {
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
      }), u = (t = (t || "").match(H) || [""]).length; u--;) h = m = (a = xt.exec(t[u]) || [])[1], p = (a[2] || "").split(".").sort(), h && (d = T.event.special[h] || {}, h = (o ? d.delegateType : d.bindType) || h, d = T.event.special[h] || {}, c = T.extend({ type: h, origType: m, data: i, handler: n, guid: n.guid, selector: o, needsContext: o && T.expr.match.needsContext.test(o), namespace: p.join(".") }, r), (f = l[h]) || ((f = l[h] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(h, s)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), T.event.global[h] = !0);
    }, remove: function (t, e, n, i, o) {
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
        for (u = (e = (e || "").match(H) || [""]).length; u--;) if (h = m = (a = xt.exec(e[u]) || [])[1], p = (a[2] || "").split(".").sort(), h) {
          for (d = T.event.special[h] || {}, f = l[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = f.length; r--;) c = f[r], !o && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (f.splice(r, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(t, c));s && !f.length && (d.teardown && !1 !== d.teardown.call(t, p, g.handle) || T.removeEvent(t, h, g.handle), delete l[h]);
        } else for (h in l) T.event.remove(t, h + e[u], n, i, !0);T.isEmptyObject(l) && X.remove(t, "handle events");
      }
    }, dispatch: function (t) {
      var e,
          n,
          i,
          o,
          r,
          s,
          a = T.event.fix(t),
          l = new Array(arguments.length),
          u = (X.get(this, "events") || {})[a.type] || [],
          c = T.event.special[a.type] || {};for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];if (a.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
        for (s = T.event.handlers.call(this, a, u), e = 0; (o = s[e++]) && !a.isPropagationStopped();) for (a.currentTarget = o.elem, n = 0; (r = o.handlers[n++]) && !a.isImmediatePropagationStopped();) a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r, a.data = r.data, void 0 !== (i = ((T.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l)) && !1 === (a.result = i) && (a.preventDefault(), a.stopPropagation()));return c.postDispatch && c.postDispatch.call(this, a), a.result;
      }
    }, handlers: function (t, e) {
      var n,
          i,
          o,
          r,
          s,
          a = [],
          l = e.delegateCount,
          u = t.target;if (l && u.nodeType && !("click" === t.type && 1 <= t.button)) for (; u !== this; u = u.parentNode || this) if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
        for (r = [], s = {}, n = 0; n < l; n++) void 0 === s[o = (i = e[n]).selector + " "] && (s[o] = i.needsContext ? -1 < T(o, this).index(u) : T.find(o, this, null, [u]).length), s[o] && r.push(i);r.length && a.push({ elem: u, handlers: r });
      }return u = this, l < e.length && a.push({ elem: u, handlers: e.slice(l) }), a;
    }, addProp: function (e, t) {
      Object.defineProperty(T.Event.prototype, e, { enumerable: !0, configurable: !0, get: y(t) ? function () {
          if (this.originalEvent) return t(this.originalEvent);
        } : function () {
          if (this.originalEvent) return this.originalEvent[e];
        }, set: function (t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        } });
    }, fix: function (t) {
      return t[T.expando] ? t : new T.Event(t);
    }, special: { load: { noBubble: !0 }, focus: { trigger: function () {
          if (this !== Tt() && this.focus) return this.focus(), !1;
        }, delegateType: "focusin" }, blur: { trigger: function () {
          if (this === Tt() && this.blur) return this.blur(), !1;
        }, delegateType: "focusout" }, click: { trigger: function () {
          if ("checkbox" === this.type && this.click && A(this, "input")) return this.click(), !1;
        }, _default: function (t) {
          return A(t.target, "a");
        } }, beforeunload: { postDispatch: function (t) {
          void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
        } } } }, T.removeEvent = function (t, e, n) {
    t.removeEventListener && t.removeEventListener(e, n);
  }, T.Event = function (t, e) {
    if (!(this instanceof T.Event)) return new T.Event(t, e);t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Ct : Et, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[T.expando] = !0;
  }, T.Event.prototype = { constructor: T.Event, isDefaultPrevented: Et, isPropagationStopped: Et, isImmediatePropagationStopped: Et, isSimulated: !1, preventDefault: function () {
      var t = this.originalEvent;this.isDefaultPrevented = Ct, t && !this.isSimulated && t.preventDefault();
    }, stopPropagation: function () {
      var t = this.originalEvent;this.isPropagationStopped = Ct, t && !this.isSimulated && t.stopPropagation();
    }, stopImmediatePropagation: function () {
      var t = this.originalEvent;this.isImmediatePropagationStopped = Ct, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
    } }, T.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (t) {
      var e = t.button;return null == t.which && _t.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && wt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which;
    } }, T.event.addProp), T.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, o) {
    T.event.special[t] = { delegateType: o, bindType: o, handle: function (t) {
        var e,
            n = t.relatedTarget,
            i = t.handleObj;return n && (n === this || T.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = o), e;
      } };
  }), T.fn.extend({ on: function (t, e, n, i) {
      return St(this, t, e, n, i);
    }, one: function (t, e, n, i) {
      return St(this, t, e, n, i, 1);
    }, off: function (t, e, n) {
      var i, o;if (t && t.preventDefault && t.handleObj) return i = t.handleObj, T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Et), this.each(function () {
        T.event.remove(this, t, n, e);
      });for (o in t) this.off(o, e, t[o]);return this;
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
      if (X.hasData(t) && (r = X.access(t), s = X.set(e, r), u = r.events)) for (o in delete s.handle, s.events = {}, u) for (n = 0, i = u[o].length; n < i; n++) T.event.add(e, o, u[o][n]);G.hasData(t) && (a = G.access(t), l = T.extend({}, a), G.set(e, l));
    }
  }function Pt(n, i, o, r) {
    i = m.apply([], i);var t,
        e,
        s,
        a,
        l,
        u,
        c = 0,
        d = n.length,
        f = d - 1,
        h = i[0],
        p = y(h);if (p || 1 < d && "string" == typeof h && !v.checkClone && kt.test(h)) return n.each(function (t) {
      var e = n.eq(t);p && (i[0] = h.call(this, t, e.html())), Pt(e, i, o, r);
    });if (d && (e = (t = yt(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === t.childNodes.length && (t = e), e || r)) {
      for (a = (s = T.map(ht(t, "script"), Nt)).length; c < d; c++) l = t, c !== f && (l = T.clone(l, !0, !0), a && T.merge(s, ht(l, "script"))), o.call(n[c], l, c);if (a) for (u = s[s.length - 1].ownerDocument, T.map(s, Lt), c = 0; c < a; c++) l = s[c], dt.test(l.type || "") && !X.access(l, "globalEval") && T.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? T._evalUrl && T._evalUrl(l.src) : _(l.textContent.replace(Dt, ""), u, l));
    }return n;
  }function Ht(t, e, n) {
    for (var i, o = e ? T.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || T.cleanData(ht(i)), i.parentNode && (n && T.contains(i.ownerDocument, i) && pt(ht(i, "script")), i.parentNode.removeChild(i));return t;
  }T.extend({ htmlPrefilter: function (t) {
      return t.replace(It, "<$1></$2>");
    }, clone: function (t, e, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          u,
          c = t.cloneNode(!0),
          d = T.contains(t.ownerDocument, t);if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t))) for (s = ht(c), i = 0, o = (r = ht(t)).length; i < o; i++) a = r[i], l = s[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && ut.test(a.type) ? l.checked = a.checked : "input" !== u && "textarea" !== u || (l.defaultValue = a.defaultValue);if (e) if (n) for (r = r || ht(t), s = s || ht(c), i = 0, o = r.length; i < o; i++) jt(r[i], s[i]);else jt(t, c);return 0 < (s = ht(c, "script")).length && pt(s, !d && ht(t, "script")), c;
    }, cleanData: function (t) {
      for (var e, n, i, o = T.event.special, r = 0; void 0 !== (n = t[r]); r++) if (K(n)) {
        if (e = n[X.expando]) {
          if (e.events) for (i in e.events) o[i] ? T.event.remove(n, i) : T.removeEvent(n, i, e.handle);n[X.expando] = void 0;
        }n[G.expando] && (n[G.expando] = void 0);
      }
    } }), T.fn.extend({ detach: function (t) {
      return Ht(this, t, !0);
    }, remove: function (t) {
      return Ht(this, t);
    }, text: function (t) {
      return F(this, function (t) {
        return void 0 === t ? T.text(this) : this.empty().each(function () {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t);
        });
      }, null, t, arguments.length);
    }, append: function () {
      return Pt(this, arguments, function (t) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t);
      });
    }, prepend: function () {
      return Pt(this, arguments, function (t) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var e = Ot(this, t);e.insertBefore(t, e.firstChild);
        }
      });
    }, before: function () {
      return Pt(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this);
      });
    }, after: function () {
      return Pt(this, arguments, function (t) {
        this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
      });
    }, empty: function () {
      for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (T.cleanData(ht(t, !1)), t.textContent = "");return this;
    }, clone: function (t, e) {
      return t = null != t && t, e = null == e ? t : e, this.map(function () {
        return T.clone(this, t, e);
      });
    }, html: function (t) {
      return F(this, function (t) {
        var e = this[0] || {},
            n = 0,
            i = this.length;if (void 0 === t && 1 === e.nodeType) return e.innerHTML;if ("string" == typeof t && !At.test(t) && !ft[(ct.exec(t) || ["", ""])[1].toLowerCase()]) {
          t = T.htmlPrefilter(t);try {
            for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (T.cleanData(ht(e, !1)), e.innerHTML = t);e = 0;
          } catch (t) {}
        }e && this.empty().append(t);
      }, null, t, arguments.length);
    }, replaceWith: function () {
      var n = [];return Pt(this, arguments, function (t) {
        var e = this.parentNode;T.inArray(this, n) < 0 && (T.cleanData(ht(this)), e && e.replaceChild(t, this));
      }, n);
    } }), T.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, s) {
    T.fn[t] = function (t) {
      for (var e, n = [], i = T(t), o = i.length - 1, r = 0; r <= o; r++) e = r === o ? this : this.clone(!0), T(i[r])[s](e), l.apply(n, e.get());return this.pushStack(n);
    };
  });var zt = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
      Mt = function (t) {
    var e = t.ownerDocument.defaultView;return e && e.opener || (e = C), e.getComputedStyle(t);
  },
      Wt = new RegExp(it.join("|"), "i");function Rt(t, e, n) {
    var i,
        o,
        r,
        s,
        a = t.style;return (n = n || Mt(t)) && ("" !== (s = n.getPropertyValue(e) || n[e]) || T.contains(t.ownerDocument, t) || (s = T.style(t, e)), !v.pixelBoxStyles() && zt.test(s) && Wt.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s;
  }function qt(t, e) {
    return { get: function () {
        if (!t()) return (this.get = e).apply(this, arguments);delete this.get;
      } };
  }!function () {
    function t() {
      if (l) {
        a.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", bt.appendChild(a).appendChild(l);var t = C.getComputedStyle(l);n = "1%" !== t.top, s = 12 === e(t.marginLeft), l.style.right = "60%", r = 36 === e(t.right), i = 36 === e(t.width), l.style.position = "absolute", o = 36 === l.offsetWidth || "absolute", bt.removeChild(a), l = null;
      }
    }function e(t) {
      return Math.round(parseFloat(t));
    }var n,
        i,
        o,
        r,
        s,
        a = E.createElement("div"),
        l = E.createElement("div");l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, T.extend(v, { boxSizingReliable: function () {
        return t(), i;
      }, pixelBoxStyles: function () {
        return t(), r;
      }, pixelPosition: function () {
        return t(), n;
      }, reliableMarginLeft: function () {
        return t(), s;
      }, scrollboxSize: function () {
        return t(), o;
      } }));
  }();var Bt = /^(none|table(?!-c[ea]).+)/,
      Ft = /^--/,
      Ut = { position: "absolute", visibility: "hidden", display: "block" },
      $t = { letterSpacing: "0", fontWeight: "400" },
      Qt = ["Webkit", "Moz", "ms"],
      Yt = E.createElement("div").style;function Kt(t) {
    var e = T.cssProps[t];return e || (e = T.cssProps[t] = function (t) {
      if (t in Yt) return t;for (var e = t[0].toUpperCase() + t.slice(1), n = Qt.length; n--;) if ((t = Qt[n] + e) in Yt) return t;
    }(t) || t), e;
  }function Vt(t, e, n) {
    var i = nt.exec(e);return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e;
  }function Xt(t, e, n, i, o, r) {
    var s = "width" === e ? 1 : 0,
        a = 0,
        l = 0;if (n === (i ? "border" : "content")) return 0;for (; s < 4; s += 2) "margin" === n && (l += T.css(t, n + it[s], !0, o)), i ? ("content" === n && (l -= T.css(t, "padding" + it[s], !0, o)), "margin" !== n && (l -= T.css(t, "border" + it[s] + "Width", !0, o))) : (l += T.css(t, "padding" + it[s], !0, o), "padding" !== n ? l += T.css(t, "border" + it[s] + "Width", !0, o) : a += T.css(t, "border" + it[s] + "Width", !0, o));return !i && 0 <= r && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - r - l - a - .5))), l;
  }function Gt(t, e, n) {
    var i = Mt(t),
        o = Rt(t, e, i),
        r = "border-box" === T.css(t, "boxSizing", !1, i),
        s = r;if (zt.test(o)) {
      if (!n) return o;o = "auto";
    }return s = s && (v.boxSizingReliable() || o === t.style[e]), ("auto" === o || !parseFloat(o) && "inline" === T.css(t, "display", !1, i)) && (o = t["offset" + e[0].toUpperCase() + e.slice(1)], s = !0), (o = parseFloat(o) || 0) + Xt(t, e, n || (r ? "border" : "content"), s, i, o) + "px";
  }function Zt(t, e, n, i, o) {
    return new Zt.prototype.init(t, e, n, i, o);
  }T.extend({ cssHooks: { opacity: { get: function (t, e) {
          if (e) {
            var n = Rt(t, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: {}, style: function (t, e, n, i) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var o,
            r,
            s,
            a = Y(e),
            l = Ft.test(e),
            u = t.style;if (l || (e = Kt(a)), s = T.cssHooks[e] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : u[e];"string" === (r = typeof n) && (o = nt.exec(n)) && o[1] && (n = st(t, e, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (T.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n));
      }
    }, css: function (t, e, n, i) {
      var o,
          r,
          s,
          a = Y(e);return Ft.test(e) || (e = Kt(a)), (s = T.cssHooks[e] || T.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Rt(t, e, i)), "normal" === o && e in $t && (o = $t[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o;
    } }), T.each(["height", "width"], function (t, a) {
    T.cssHooks[a] = { get: function (t, e, n) {
        if (e) return !Bt.test(T.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Gt(t, a, n) : rt(t, Ut, function () {
          return Gt(t, a, n);
        });
      }, set: function (t, e, n) {
        var i,
            o = Mt(t),
            r = "border-box" === T.css(t, "boxSizing", !1, o),
            s = n && Xt(t, a, n, r, o);return r && v.scrollboxSize() === o.position && (s -= Math.ceil(t["offset" + a[0].toUpperCase() + a.slice(1)] - parseFloat(o[a]) - Xt(t, a, "border", !1, o) - .5)), s && (i = nt.exec(e)) && "px" !== (i[3] || "px") && (t.style[a] = e, e = T.css(t, a)), Vt(0, e, s);
      } };
  }), T.cssHooks.marginLeft = qt(v.reliableMarginLeft, function (t, e) {
    if (e) return (parseFloat(Rt(t, "marginLeft")) || t.getBoundingClientRect().left - rt(t, { marginLeft: 0 }, function () {
      return t.getBoundingClientRect().left;
    })) + "px";
  }), T.each({ margin: "", padding: "", border: "Width" }, function (o, r) {
    T.cssHooks[o + r] = { expand: function (t) {
        for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[o + it[e] + r] = i[e] || i[e - 2] || i[0];return n;
      } }, "margin" !== o && (T.cssHooks[o + r].set = Vt);
  }), T.fn.extend({ css: function (t, e) {
      return F(this, function (t, e, n) {
        var i,
            o,
            r = {},
            s = 0;if (Array.isArray(e)) {
          for (i = Mt(t), o = e.length; s < o; s++) r[e[s]] = T.css(t, e[s], !1, i);return r;
        }return void 0 !== n ? T.style(t, e, n) : T.css(t, e);
      }, t, e, 1 < arguments.length);
    } }), ((T.Tween = Zt).prototype = { constructor: Zt, init: function (t, e, n, i, o, r) {
      this.elem = t, this.prop = n, this.easing = o || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (T.cssNumber[n] ? "" : "px");
    }, cur: function () {
      var t = Zt.propHooks[this.prop];return t && t.get ? t.get(this) : Zt.propHooks._default.get(this);
    }, run: function (t) {
      var e,
          n = Zt.propHooks[this.prop];return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Zt.propHooks._default.set(this), this;
    } }).init.prototype = Zt.prototype, (Zt.propHooks = { _default: { get: function (t) {
        var e;return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
      }, set: function (t) {
        T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[T.cssProps[t.prop]] && !T.cssHooks[t.prop] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit);
      } } }).scrollTop = Zt.propHooks.scrollLeft = { set: function (t) {
      t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
    } }, T.easing = { linear: function (t) {
      return t;
    }, swing: function (t) {
      return .5 - Math.cos(t * Math.PI) / 2;
    }, _default: "swing" }, T.fx = Zt.prototype.init, T.fx.step = {};var Jt,
      te,
      ee,
      ne,
      ie = /^(?:toggle|show|hide)$/,
      oe = /queueHooks$/;function re() {
    te && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(re) : C.setTimeout(re, T.fx.interval), T.fx.tick());
  }function se() {
    return C.setTimeout(function () {
      Jt = void 0;
    }), Jt = Date.now();
  }function ae(t, e) {
    var n,
        i = 0,
        o = { height: t };for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = it[i])] = o["padding" + n] = t;return e && (o.opacity = o.width = t), o;
  }function le(t, e, n) {
    for (var i, o = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), r = 0, s = o.length; r < s; r++) if (i = o[r].call(n, e, t)) return i;
  }function ue(r, t, e) {
    var n,
        s,
        i = 0,
        o = ue.prefilters.length,
        a = T.Deferred().always(function () {
      delete l.elem;
    }),
        l = function () {
      if (s) return !1;for (var t = Jt || se(), e = Math.max(0, u.startTime + u.duration - t), n = 1 - (e / u.duration || 0), i = 0, o = u.tweens.length; i < o; i++) u.tweens[i].run(n);return a.notifyWith(r, [u, n, e]), n < 1 && o ? e : (o || a.notifyWith(r, [u, 1, 0]), a.resolveWith(r, [u]), !1);
    },
        u = a.promise({ elem: r, props: T.extend({}, t), opts: T.extend(!0, { specialEasing: {}, easing: T.easing._default }, e), originalProperties: t, originalOptions: e, startTime: Jt || se(), duration: e.duration, tweens: [], createTween: function (t, e) {
        var n = T.Tween(r, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(n), n;
      }, stop: function (t) {
        var e = 0,
            n = t ? u.tweens.length : 0;if (s) return this;for (s = !0; e < n; e++) u.tweens[e].run(1);return t ? (a.notifyWith(r, [u, 1, 0]), a.resolveWith(r, [u, t])) : a.rejectWith(r, [u, t]), this;
      } }),
        c = u.props;for (!function (t, e) {
      var n, i, o, r, s;for (n in t) if (o = e[i = Y(n)], r = t[n], Array.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = T.cssHooks[i]) && ("expand" in s)) for (n in r = s.expand(r), delete t[i], r) (n in t) || (t[n] = r[n], e[n] = o);else e[i] = o;
    }(c, u.opts.specialEasing); i < o; i++) if (n = ue.prefilters[i].call(u, r, c, u.opts)) return y(n.stop) && (T._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;return T.map(c, le, u), y(u.opts.start) && u.opts.start.call(r, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), T.fx.timer(T.extend(l, { elem: r, anim: u, queue: u.opts.queue })), u;
  }T.Animation = T.extend(ue, { tweeners: { "*": [function (t, e) {
        var n = this.createTween(t, e);return st(n.elem, t, nt.exec(e), n), n;
      }] }, tweener: function (t, e) {
      for (var n, i = 0, o = (t = y(t) ? (e = t, ["*"]) : t.match(H)).length; i < o; i++) n = t[i], ue.tweeners[n] = ue.tweeners[n] || [], ue.tweeners[n].unshift(e);
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
          m = t.nodeType && ot(t),
          g = X.get(t, "fxshow");for (i in n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, a = s.empty.fire, s.empty.fire = function () {
        s.unqueued || a();
      }), s.unqueued++, f.always(function () {
        f.always(function () {
          s.unqueued--, T.queue(t, "fx").length || s.empty.fire();
        });
      })), e) if (o = e[i], ie.test(o)) {
        if (delete e[i], r = r || "toggle" === o, o === (m ? "hide" : "show")) {
          if ("show" !== o || !g || void 0 === g[i]) continue;m = !0;
        }h[i] = g && g[i] || T.style(t, i);
      }if ((l = !T.isEmptyObject(e)) || !T.isEmptyObject(h)) for (i in d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = g && g.display) && (u = X.get(t, "display")), "none" === (c = T.css(t, "display")) && (u ? c = u : (lt([t], !0), u = t.style.display || u, c = T.css(t, "display"), lt([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === T.css(t, "float") && (l || (f.done(function () {
        p.display = u;
      }), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", f.always(function () {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
      })), l = !1, h) l || (g ? "hidden" in g && (m = g.hidden) : g = X.access(t, "fxshow", { display: u }), r && (g.hidden = !m), m && lt([t], !0), f.done(function () {
        for (i in m || lt([t]), X.remove(t, "fxshow"), h) T.style(t, i, h[i]);
      })), l = le(m ? g[i] : 0, i, f), i in g || (g[i] = l.start, m && (l.end = l.start, l.start = 0));
    }], prefilter: function (t, e) {
      e ? ue.prefilters.unshift(t) : ue.prefilters.push(t);
    } }), T.speed = function (t, e, n) {
    var i = t && "object" == typeof t ? T.extend({}, t) : { complete: n || !n && e || y(t) && t, duration: t, easing: n && e || e && !y(e) && e };return T.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in T.fx.speeds ? i.duration = T.fx.speeds[i.duration] : i.duration = T.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
      y(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue);
    }, i;
  }, T.fn.extend({ fadeTo: function (t, e, n, i) {
      return this.filter(ot).css("opacity", 0).show().end().animate({ opacity: e }, t, n, i);
    }, animate: function (e, t, n, i) {
      var o = T.isEmptyObject(e),
          r = T.speed(t, n, i),
          s = function () {
        var t = ue(this, T.extend({}, e), r);(o || X.get(this, "finish")) && t.stop(!0);
      };return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s);
    }, stop: function (o, t, r) {
      var s = function (t) {
        var e = t.stop;delete t.stop, e(r);
      };return "string" != typeof o && (r = t, t = o, o = void 0), t && !1 !== o && this.queue(o || "fx", []), this.each(function () {
        var t = !0,
            e = null != o && o + "queueHooks",
            n = T.timers,
            i = X.get(this);if (e) i[e] && i[e].stop && s(i[e]);else for (e in i) i[e] && i[e].stop && oe.test(e) && s(i[e]);for (e = n.length; e--;) n[e].elem !== this || null != o && n[e].queue !== o || (n[e].anim.stop(r), t = !1, n.splice(e, 1));!t && r || T.dequeue(this, o);
      });
    }, finish: function (s) {
      return !1 !== s && (s = s || "fx"), this.each(function () {
        var t,
            e = X.get(this),
            n = e[s + "queue"],
            i = e[s + "queueHooks"],
            o = T.timers,
            r = n ? n.length : 0;for (e.finish = !0, T.queue(this, s, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === s && (o[t].anim.stop(!0), o.splice(t, 1));for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);delete e.finish;
      });
    } }), T.each(["toggle", "show", "hide"], function (t, i) {
    var o = T.fn[i];T.fn[i] = function (t, e, n) {
      return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(ae(i, !0), t, e, n);
    };
  }), T.each({ slideDown: ae("show"), slideUp: ae("hide"), slideToggle: ae("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, i) {
    T.fn[t] = function (t, e, n) {
      return this.animate(i, t, e, n);
    };
  }), T.timers = [], T.fx.tick = function () {
    var t,
        e = 0,
        n = T.timers;for (Jt = Date.now(); e < n.length; e++) (t = n[e])() || n[e] !== t || n.splice(e--, 1);n.length || T.fx.stop(), Jt = void 0;
  }, T.fx.timer = function (t) {
    T.timers.push(t), T.fx.start();
  }, T.fx.interval = 13, T.fx.start = function () {
    te || (te = !0, re());
  }, T.fx.stop = function () {
    te = null;
  }, T.fx.speeds = { slow: 600, fast: 200, _default: 400 }, T.fn.delay = function (i, t) {
    return i = T.fx && T.fx.speeds[i] || i, t = t || "fx", this.queue(t, function (t, e) {
      var n = C.setTimeout(t, i);e.stop = function () {
        C.clearTimeout(n);
      };
    });
  }, ee = E.createElement("input"), ne = E.createElement("select").appendChild(E.createElement("option")), ee.type = "checkbox", v.checkOn = "" !== ee.value, v.optSelected = ne.selected, (ee = E.createElement("input")).value = "t", ee.type = "radio", v.radioValue = "t" === ee.value;var ce,
      de = T.expr.attrHandle;T.fn.extend({ attr: function (t, e) {
      return F(this, T.attr, t, e, 1 < arguments.length);
    }, removeAttr: function (t) {
      return this.each(function () {
        T.removeAttr(this, t);
      });
    } }), T.extend({ attr: function (t, e, n) {
      var i,
          o,
          r = t.nodeType;if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === r && T.isXMLDoc(t) || (o = T.attrHooks[e.toLowerCase()] || (T.expr.match.bool.test(e) ? ce : void 0)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = T.find.attr(t, e)) ? void 0 : i);
    }, attrHooks: { type: { set: function (t, e) {
          if (!v.radioValue && "radio" === e && A(t, "input")) {
            var n = t.value;return t.setAttribute("type", e), n && (t.value = n), e;
          }
        } } }, removeAttr: function (t, e) {
      var n,
          i = 0,
          o = e && e.match(H);if (o && 1 === t.nodeType) for (; n = o[i++];) t.removeAttribute(n);
    } }), ce = { set: function (t, e, n) {
      return !1 === e ? T.removeAttr(t, n) : t.setAttribute(n, n), n;
    } }, T.each(T.expr.match.bool.source.match(/\w+/g), function (t, e) {
    var s = de[e] || T.find.attr;de[e] = function (t, e, n) {
      var i,
          o,
          r = e.toLowerCase();return n || (o = de[r], de[r] = i, i = null != s(t, e, n) ? r : null, de[r] = o), i;
    };
  });var fe = /^(?:input|select|textarea|button)$/i,
      he = /^(?:a|area)$/i;function pe(t) {
    return (t.match(H) || []).join(" ");
  }function me(t) {
    return t.getAttribute && t.getAttribute("class") || "";
  }function ge(t) {
    return Array.isArray(t) ? t : "string" == typeof t && t.match(H) || [];
  }T.fn.extend({ prop: function (t, e) {
      return F(this, T.prop, t, e, 1 < arguments.length);
    }, removeProp: function (t) {
      return this.each(function () {
        delete this[T.propFix[t] || t];
      });
    } }), T.extend({ prop: function (t, e, n) {
      var i,
          o,
          r = t.nodeType;if (3 !== r && 8 !== r && 2 !== r) return 1 === r && T.isXMLDoc(t) || (e = T.propFix[e] || e, o = T.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e];
    }, propHooks: { tabIndex: { get: function (t) {
          var e = T.find.attr(t, "tabindex");return e ? parseInt(e, 10) : fe.test(t.nodeName) || he.test(t.nodeName) && t.href ? 0 : -1;
        } } }, propFix: { for: "htmlFor", class: "className" } }), v.optSelected || (T.propHooks.selected = { get: function (t) {
      var e = t.parentNode;return e && e.parentNode && e.parentNode.selectedIndex, null;
    }, set: function (t) {
      var e = t.parentNode;e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
    } }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    T.propFix[this.toLowerCase()] = this;
  }), T.fn.extend({ addClass: function (e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (y(e)) return this.each(function (t) {
        T(this).addClass(e.call(this, t, me(this)));
      });if ((t = ge(e)).length) for (; n = this[l++];) if (o = me(n), i = 1 === n.nodeType && " " + pe(o) + " ") {
        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");o !== (a = pe(i)) && n.setAttribute("class", a);
      }return this;
    }, removeClass: function (e) {
      var t,
          n,
          i,
          o,
          r,
          s,
          a,
          l = 0;if (y(e)) return this.each(function (t) {
        T(this).removeClass(e.call(this, t, me(this)));
      });if (!arguments.length) return this.attr("class", "");if ((t = ge(e)).length) for (; n = this[l++];) if (o = me(n), i = 1 === n.nodeType && " " + pe(o) + " ") {
        for (s = 0; r = t[s++];) for (; -1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");o !== (a = pe(i)) && n.setAttribute("class", a);
      }return this;
    }, toggleClass: function (o, e) {
      var r = typeof o,
          s = "string" == r || Array.isArray(o);return "boolean" == typeof e && s ? e ? this.addClass(o) : this.removeClass(o) : y(o) ? this.each(function (t) {
        T(this).toggleClass(o.call(this, t, me(this), e), e);
      }) : this.each(function () {
        var t, e, n, i;if (s) for (e = 0, n = T(this), i = ge(o); t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);else void 0 !== o && "boolean" != r || ((t = me(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === o ? "" : X.get(this, "__className__") || ""));
      });
    }, hasClass: function (t) {
      var e,
          n,
          i = 0;for (e = " " + t + " "; n = this[i++];) if (1 === n.nodeType && -1 < (" " + pe(me(n)) + " ").indexOf(e)) return !0;return !1;
    } });var ve = /\r/g;T.fn.extend({ val: function (n) {
      var i,
          t,
          o,
          e = this[0];return arguments.length ? (o = y(n), this.each(function (t) {
        var e;1 === this.nodeType && (null == (e = o ? n.call(this, t, T(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = T.map(e, function (t) {
          return null == t ? "" : t + "";
        })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e));
      })) : e ? (i = T.valHooks[e.type] || T.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(ve, "") : null == t ? "" : t : void 0;
    } }), T.extend({ valHooks: { option: { get: function (t) {
          var e = T.find.attr(t, "value");return null != e ? e : pe(T.text(t));
        } }, select: { get: function (t) {
          var e,
              n,
              i,
              o = t.options,
              r = t.selectedIndex,
              s = "select-one" === t.type,
              a = s ? null : [],
              l = s ? r + 1 : o.length;for (i = r < 0 ? l : s ? r : 0; i < l; i++) if (((n = o[i]).selected || i === r) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
            if (e = T(n).val(), s) return e;a.push(e);
          }return a;
        }, set: function (t, e) {
          for (var n, i, o = t.options, r = T.makeArray(e), s = o.length; s--;) ((i = o[s]).selected = -1 < T.inArray(T.valHooks.option.get(i), r)) && (n = !0);return n || (t.selectedIndex = -1), r;
        } } } }), T.each(["radio", "checkbox"], function () {
    T.valHooks[this] = { set: function (t, e) {
        if (Array.isArray(e)) return t.checked = -1 < T.inArray(T(t).val(), e);
      } }, v.checkOn || (T.valHooks[this].get = function (t) {
      return null === t.getAttribute("value") ? "on" : t.value;
    });
  }), v.focusin = "onfocusin" in C;var ye = /^(?:focusinfocus|focusoutblur)$/,
      be = function (t) {
    t.stopPropagation();
  };T.extend(T.event, { trigger: function (t, e, n, i) {
      var o,
          r,
          s,
          a,
          l,
          u,
          c,
          d,
          f = [n || E],
          h = g.call(t, "type") ? t.type : t,
          p = g.call(t, "namespace") ? t.namespace.split(".") : [];if (r = d = s = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !ye.test(h + T.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), l = h.indexOf(":") < 0 && "on" + h, (t = t[T.expando] ? t : new T.Event(h, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : T.makeArray(e, [t]), c = T.event.special[h] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
        if (!i && !c.noBubble && !b(n)) {
          for (a = c.delegateType || h, ye.test(a + h) || (r = r.parentNode); r; r = r.parentNode) f.push(r), s = r;s === (n.ownerDocument || E) && f.push(s.defaultView || s.parentWindow || C);
        }for (o = 0; (r = f[o++]) && !t.isPropagationStopped();) d = r, t.type = 1 < o ? a : c.bindType || h, (u = (X.get(r, "events") || {})[t.type] && X.get(r, "handle")) && u.apply(r, e), (u = l && r[l]) && u.apply && K(r) && (t.result = u.apply(r, e), !1 === t.result && t.preventDefault());return t.type = h, i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(f.pop(), e) || !K(n) || l && y(n[h]) && !b(n) && ((s = n[l]) && (n[l] = null), T.event.triggered = h, t.isPropagationStopped() && d.addEventListener(h, be), n[h](), t.isPropagationStopped() && d.removeEventListener(h, be), T.event.triggered = void 0, s && (n[l] = s)), t.result;
      }
    }, simulate: function (t, e, n) {
      var i = T.extend(new T.Event(), n, { type: t, isSimulated: !0 });T.event.trigger(i, null, e);
    } }), T.fn.extend({ trigger: function (t, e) {
      return this.each(function () {
        T.event.trigger(t, e, this);
      });
    }, triggerHandler: function (t, e) {
      var n = this[0];if (n) return T.event.trigger(t, e, n, !0);
    } }), v.focusin || T.each({ focus: "focusin", blur: "focusout" }, function (n, i) {
    var o = function (t) {
      T.event.simulate(i, t.target, T.event.fix(t));
    };T.event.special[i] = { setup: function () {
        var t = this.ownerDocument || this,
            e = X.access(t, i);e || t.addEventListener(n, o, !0), X.access(t, i, (e || 0) + 1);
      }, teardown: function () {
        var t = this.ownerDocument || this,
            e = X.access(t, i) - 1;e ? X.access(t, i, e) : (t.removeEventListener(n, o, !0), X.remove(t, i));
      } };
  });var _e = C.location,
      we = Date.now(),
      xe = /\?/;T.parseXML = function (t) {
    var e;if (!t || "string" != typeof t) return null;try {
      e = new C.DOMParser().parseFromString(t, "text/xml");
    } catch (t) {
      e = void 0;
    }return e && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e;
  };var Ce = /\[\]$/,
      Ee = /\r?\n/g,
      Te = /^(?:submit|button|image|reset|file)$/i,
      Se = /^(?:input|select|textarea|keygen)/i;function Ie(n, t, i, o) {
    var e;if (Array.isArray(t)) T.each(t, function (t, e) {
      i || Ce.test(n) ? o(n, e) : Ie(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, o);
    });else if (i || "object" !== w(t)) o(n, t);else for (e in t) Ie(n + "[" + e + "]", t[e], i, o);
  }T.param = function (t, e) {
    var n,
        i = [],
        o = function (t, e) {
      var n = y(e) ? e() : e;i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n);
    };if (Array.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function () {
      o(this.name, this.value);
    });else for (n in t) Ie(n, t[n], e, o);return i.join("&");
  }, T.fn.extend({ serialize: function () {
      return T.param(this.serializeArray());
    }, serializeArray: function () {
      return this.map(function () {
        var t = T.prop(this, "elements");return t ? T.makeArray(t) : this;
      }).filter(function () {
        var t = this.type;return this.name && !T(this).is(":disabled") && Se.test(this.nodeName) && !Te.test(t) && (this.checked || !ut.test(t));
      }).map(function (t, e) {
        var n = T(this).val();return null == n ? null : Array.isArray(n) ? T.map(n, function (t) {
          return { name: e.name, value: t.replace(Ee, "\r\n") };
        }) : { name: e.name, value: n.replace(Ee, "\r\n") };
      }).get();
    } });var Ae = /%20/g,
      ke = /#.*$/,
      De = /([?&])_=[^&]*/,
      Oe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ne = /^(?:GET|HEAD)$/,
      Le = /^\/\//,
      je = {},
      Pe = {},
      He = "*/".concat("*"),
      ze = E.createElement("a");function Me(r) {
    return function (t, e) {
      "string" != typeof t && (e = t, t = "*");var n,
          i = 0,
          o = t.toLowerCase().match(H) || [];if (y(e)) for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(e)) : (r[n] = r[n] || []).push(e);
    };
  }function We(e, o, r, s) {
    var a = {},
        l = e === Pe;function u(t) {
      var i;return a[t] = !0, T.each(e[t] || [], function (t, e) {
        var n = e(o, r, s);return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), u(n), !1);
      }), i;
    }return u(o.dataTypes[0]) || !a["*"] && u("*");
  }function Re(t, e) {
    var n,
        i,
        o = T.ajaxSettings.flatOptions || {};for (n in e) void 0 !== e[n] && ((o[n] ? t : i || (i = {}))[n] = e[n]);return i && T.extend(!0, t, i), t;
  }ze.href = _e.href, T.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: _e.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_e.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": He, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": T.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (t, e) {
      return e ? Re(Re(t, T.ajaxSettings), e) : Re(T.ajaxSettings, t);
    }, ajaxPrefilter: Me(je), ajaxTransport: Me(Pe), ajax: function (t, e) {
      "object" == typeof t && (e = t, t = void 0), e = e || {};var c,
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
          x = { readyState: 0, getResponseHeader: function (t) {
          var e;if (p) {
            if (!n) for (n = {}; e = Oe.exec(f);) n[e[1].toLowerCase()] = e[2];e = n[t.toLowerCase()];
          }return null == e ? null : e;
        }, getAllResponseHeaders: function () {
          return p ? f : null;
        }, setRequestHeader: function (t, e) {
          return null == p && (t = a[t.toLowerCase()] = a[t.toLowerCase()] || t, s[t] = e), this;
        }, overrideMimeType: function (t) {
          return null == p && (g.mimeType = t), this;
        }, statusCode: function (t) {
          var e;if (t) if (p) x.always(t[x.status]);else for (e in t) w[e] = [w[e], t[e]];return this;
        }, abort: function (t) {
          var e = t || l;return c && c.abort(e), u(0, e), this;
        } };if (b.promise(x), g.url = ((t || g.url || _e.href) + "").replace(Le, _e.protocol + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = (g.dataType || "*").toLowerCase().match(H) || [""], null == g.crossDomain) {
        i = E.createElement("a");try {
          i.href = g.url, i.href = i.href, g.crossDomain = ze.protocol + "//" + ze.host != i.protocol + "//" + i.host;
        } catch (t) {
          g.crossDomain = !0;
        }
      }if (g.data && g.processData && "string" != typeof g.data && (g.data = T.param(g.data, g.traditional)), We(je, g, e, x), p) return x;for (o in (m = T.event && g.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !Ne.test(g.type), d = g.url.replace(ke, ""), g.hasContent ? g.data && g.processData && 0 === (g.contentType || "").indexOf("application/x-www-form-urlencoded") && (g.data = g.data.replace(Ae, "+")) : (r = g.url.slice(d.length), g.data && (g.processData || "string" == typeof g.data) && (d += (xe.test(d) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (d = d.replace(De, "$1"), r = (xe.test(d) ? "&" : "?") + "_=" + we++ + r), g.url = d + r), g.ifModified && (T.lastModified[d] && x.setRequestHeader("If-Modified-Since", T.lastModified[d]), T.etag[d] && x.setRequestHeader("If-None-Match", T.etag[d])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && x.setRequestHeader("Content-Type", g.contentType), x.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + He + "; q=0.01" : "") : g.accepts["*"]), g.headers) x.setRequestHeader(o, g.headers[o]);if (g.beforeSend && (!1 === g.beforeSend.call(v, x, g) || p)) return x.abort();if (l = "abort", _.add(g.complete), x.done(g.success), x.fail(g.error), c = We(Pe, g, e, x)) {
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
          for (var i, o, r, s, a = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));if (i) for (o in a) if (a[o] && a[o].test(i)) {
            l.unshift(o);break;
          }if (l[0] in n) r = l[0];else {
            for (o in n) {
              if (!l[0] || t.converters[o + " " + l[0]]) {
                r = o;break;
              }s || (s = o);
            }r = r || s;
          }if (r) return r !== l[0] && l.unshift(r), n[r];
        }(g, x, n)), a = function (t, e, n, i) {
          var o,
              r,
              s,
              a,
              l,
              u = {},
              c = t.dataTypes.slice();if (c[1]) for (s in t.converters) u[s.toLowerCase()] = t.converters[s];for (r = c.shift(); r;) if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
            if (!(s = u[l + " " + r] || u["* " + r])) for (o in u) if ((a = o.split(" "))[1] === r && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
              !0 === s ? s = u[o] : !0 !== u[o] && (r = a[0], c.unshift(a[1]));break;
            }if (!0 !== s) if (s && t.throws) e = s(e);else try {
              e = s(e);
            } catch (t) {
              return { state: "parsererror", error: s ? t : "No conversion from " + l + " to " + r };
            }
          }return { state: "success", data: e };
        }(g, a, x, o), o ? (g.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (T.lastModified[d] = l), (l = x.getResponseHeader("etag")) && (T.etag[d] = l)), 204 === t || "HEAD" === g.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = a.state, r = a.data, o = !(s = a.error))) : (s = u, !t && u || (u = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || u) + "", o ? b.resolveWith(v, [r, u, x]) : b.rejectWith(v, [x, u, s]), x.statusCode(w), w = void 0, m && y.trigger(o ? "ajaxSuccess" : "ajaxError", [x, g, o ? r : s]), _.fireWith(v, [x, u]), m && (y.trigger("ajaxComplete", [x, g]), --T.active || T.event.trigger("ajaxStop")));
      }return x;
    }, getJSON: function (t, e, n) {
      return T.get(t, e, n, "json");
    }, getScript: function (t, e) {
      return T.get(t, void 0, e, "script");
    } }), T.each(["get", "post"], function (t, o) {
    T[o] = function (t, e, n, i) {
      return y(e) && (i = i || n, n = e, e = void 0), T.ajax(T.extend({ url: t, type: o, dataType: i, data: e, success: n }, T.isPlainObject(t) && t));
    };
  }), T._evalUrl = function (t) {
    return T.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
  }, T.fn.extend({ wrapAll: function (t) {
      var e;return this[0] && (y(t) && (t = t.call(this[0])), e = T(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
        for (var t = this; t.firstElementChild;) t = t.firstElementChild;return t;
      }).append(this)), this;
    }, wrapInner: function (n) {
      return y(n) ? this.each(function (t) {
        T(this).wrapInner(n.call(this, t));
      }) : this.each(function () {
        var t = T(this),
            e = t.contents();e.length ? e.wrapAll(n) : t.append(n);
      });
    }, wrap: function (e) {
      var n = y(e);return this.each(function (t) {
        T(this).wrapAll(n ? e.call(this, t) : e);
      });
    }, unwrap: function (t) {
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
  };var qe = { 0: 200, 1223: 204 },
      Be = T.ajaxSettings.xhr();v.cors = !!Be && "withCredentials" in Be, v.ajax = Be = !!Be, T.ajaxTransport(function (o) {
    var r, s;if (v.cors || Be && !o.crossDomain) return { send: function (t, e) {
        var n,
            i = o.xhr();if (i.open(o.type, o.url, o.async, o.username, o.password), o.xhrFields) for (n in o.xhrFields) i[n] = o.xhrFields[n];for (n in o.mimeType && i.overrideMimeType && i.overrideMimeType(o.mimeType), o.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);r = function (t) {
          return function () {
            r && (r = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(qe[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? { binary: i.response } : { text: i.responseText }, i.getAllResponseHeaders()));
          };
        }, i.onload = r(), s = i.onerror = i.ontimeout = r("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function () {
          4 === i.readyState && C.setTimeout(function () {
            r && s();
          });
        }, r = r("abort");try {
          i.send(o.hasContent && o.data || null);
        } catch (t) {
          if (r) throw t;
        }
      }, abort: function () {
        r && r();
      } };
  }), T.ajaxPrefilter(function (t) {
    t.crossDomain && (t.contents.script = !1);
  }), T.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function (t) {
        return T.globalEval(t), t;
      } } }), T.ajaxPrefilter("script", function (t) {
    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
  }), T.ajaxTransport("script", function (n) {
    var i, o;if (n.crossDomain) return { send: function (t, e) {
        i = T("<script>").prop({ charset: n.scriptCharset, src: n.url }).on("load error", o = function (t) {
          i.remove(), o = null, t && e("error" === t.type ? 404 : 200, t.type);
        }), E.head.appendChild(i[0]);
      }, abort: function () {
        o && o();
      } };
  });var Fe,
      Ue = [],
      $e = /(=)\?(?=&|$)|\?\?/;T.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
      var t = Ue.pop() || T.expando + "_" + we++;return this[t] = !0, t;
    } }), T.ajaxPrefilter("json jsonp", function (t, e, n) {
    var i,
        o,
        r,
        s = !1 !== t.jsonp && ($e.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(t.data) && "data");if (s || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace($e, "$1" + i) : !1 !== t.jsonp && (t.url += (xe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
      return r || T.error(i + " was not called"), r[0];
    }, t.dataTypes[0] = "json", o = C[i], C[i] = function () {
      r = arguments;
    }, n.always(function () {
      void 0 === o ? T(C).removeProp(i) : C[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, Ue.push(i)), r && y(o) && o(r[0]), r = o = void 0;
    }), "script";
  }), v.createHTMLDocument = ((Fe = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Fe.childNodes.length), T.parseHTML = function (t, e, n) {
    return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (v.createHTMLDocument ? ((i = (e = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, e.head.appendChild(i)) : e = E), r = !n && [], (o = k.exec(t)) ? [e.createElement(o[1])] : (o = yt([t], e, r), r && r.length && T(r).remove(), T.merge([], o.childNodes)));var i, o, r;
  }, T.fn.load = function (t, e, n) {
    var i,
        o,
        r,
        s = this,
        a = t.indexOf(" ");return -1 < a && (i = pe(t.slice(a)), t = t.slice(0, a)), y(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < s.length && T.ajax({ url: t, type: o || "GET", dataType: "html", data: e }).done(function (t) {
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
  }, T.offset = { setOffset: function (t, e, n) {
      var i,
          o,
          r,
          s,
          a,
          l,
          u = T.css(t, "position"),
          c = T(t),
          d = {};"static" === u && (t.style.position = "relative"), a = c.offset(), r = T.css(t, "top"), l = T.css(t, "left"), o = ("absolute" === u || "fixed" === u) && -1 < (r + l).indexOf("auto") ? (s = (i = c.position()).top, i.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), y(e) && (e = e.call(t, n, T.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : c.css(d);
    } }, T.fn.extend({ offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        T.offset.setOffset(this, e, t);
      });var t,
          n,
          i = this[0];return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 } : void 0;
    }, position: function () {
      if (this[0]) {
        var t,
            e,
            n,
            i = this[0],
            o = { top: 0, left: 0 };if ("fixed" === T.css(i, "position")) e = i.getBoundingClientRect();else {
          for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === T.css(t, "position");) t = t.parentNode;t && t !== i && 1 === t.nodeType && ((o = T(t).offset()).top += T.css(t, "borderTopWidth", !0), o.left += T.css(t, "borderLeftWidth", !0));
        }return { top: e.top - o.top - T.css(i, "marginTop", !0), left: e.left - o.left - T.css(i, "marginLeft", !0) };
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var t = this.offsetParent; t && "static" === T.css(t, "position");) t = t.offsetParent;return t || bt;
      });
    } }), T.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, o) {
    var r = "pageYOffset" === o;T.fn[e] = function (t) {
      return F(this, function (t, e, n) {
        var i;if (b(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n) return i ? i[o] : t[e];i ? i.scrollTo(r ? i.pageXOffset : n, r ? n : i.pageYOffset) : t[e] = n;
      }, e, t, arguments.length);
    };
  }), T.each(["top", "left"], function (t, n) {
    T.cssHooks[n] = qt(v.pixelPosition, function (t, e) {
      if (e) return e = Rt(t, n), zt.test(e) ? T(t).position()[n] + "px" : e;
    });
  }), T.each({ Height: "height", Width: "width" }, function (s, a) {
    T.each({ padding: "inner" + s, content: a, "": "outer" + s }, function (i, r) {
      T.fn[r] = function (t, e) {
        var n = arguments.length && (i || "boolean" != typeof t),
            o = i || (!0 === t || !0 === e ? "margin" : "border");return F(this, function (t, e, n) {
          var i;return b(t) ? 0 === r.indexOf("outer") ? t["inner" + s] : t.document.documentElement["client" + s] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + s], i["scroll" + s], t.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? T.css(t, e, o) : T.style(t, e, n, o);
        }, a, n ? t : void 0, n);
      };
    });
  }), T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) {
    T.fn[n] = function (t, e) {
      return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n);
    };
  }), T.fn.extend({ hover: function (t, e) {
      return this.mouseenter(t).mouseleave(e || t);
    } }), T.fn.extend({ bind: function (t, e, n) {
      return this.on(t, null, e, n);
    }, unbind: function (t, e) {
      return this.off(t, null, e);
    }, delegate: function (t, e, n, i) {
      return this.on(e, t, n, i);
    }, undelegate: function (t, e, n) {
      return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n);
    } }), T.proxy = function (t, e) {
    var n, i, o;if ("string" == typeof e && (n = t[e], e = t, t = n), y(t)) return i = a.call(arguments, 2), (o = function () {
      return t.apply(e || this, i.concat(a.call(arguments)));
    }).guid = t.guid = t.guid || T.guid++, o;
  }, T.holdReady = function (t) {
    t ? T.readyWait++ : T.ready(!0);
  }, T.isArray = Array.isArray, T.parseJSON = JSON.parse, T.nodeName = A, T.isFunction = y, T.isWindow = b, T.camelCase = Y, T.type = w, T.now = Date.now, T.isNumeric = function (t) {
    var e = T.type(t);return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
  }, "function" == typeof define && define.amd && define("jquery", [], function () {
    return T;
  });var Qe = C.jQuery,
      Ye = C.$;return T.noConflict = function (t) {
    return C.$ === T && (C.$ = Ye), t && C.jQuery === T && (C.jQuery = Qe), T;
  }, t || (C.jQuery = C.$ = T), T;
}), function (t, e) {
  "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? module.exports = e() : t.Tether = e();
}(this, function () {
  "use strict";
  var e = function () {
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    };
  }();function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }var w = void 0;void 0 === w && (w = { modules: [] });var n = null;function s(t) {
    var e = t.getBoundingClientRect(),
        n = {};for (var i in e) n[i] = e[i];if (t.ownerDocument !== document) {
      var o = t.ownerDocument.defaultView.frameElement;if (o) {
        var r = s(o);n.top += r.top, n.bottom += r.top, n.left += r.left, n.right += r.left;
      }
    }return n;
  }function a(t) {
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
      o = (t = 0, function () {
    return ++t;
  }),
      r = {},
      l = function () {
    var t = n;t && document.body.contains(t) || ((t = document.createElement("div")).setAttribute("data-tether-id", o()), T(t.style, { top: 0, left: 0, position: "absolute" }), document.body.appendChild(t), n = t);var e = t.getAttribute("data-tether-id");return void 0 === r[e] && (r[e] = s(t), I(function () {
      delete r[e];
    })), r[e];
  };function u() {
    n && document.body.removeChild(n), n = null;
  }function E(t) {
    var e = void 0;t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;var n = e.documentElement,
        i = s(t),
        o = l();return i.top -= o.top, i.left -= o.left, void 0 === i.width && (i.width = document.body.scrollWidth - i.left - i.right), void 0 === i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - n.clientTop, i.left = i.left - n.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i;
  }function x(t) {
    return t.offsetParent || document.documentElement;
  }var c = null;function C() {
    if (c) return c;var t = document.createElement("div");t.style.width = "100%", t.style.height = "200px";var e = document.createElement("div");T(e.style, { position: "absolute", top: 0, left: 0, pointerEvents: "none", visibility: "hidden", width: "200px", height: "150px", overflow: "hidden" }), e.appendChild(t), document.body.appendChild(e);var n = t.offsetWidth;e.style.overflow = "scroll";var i = t.offsetWidth;n === i && (i = e.clientWidth), document.body.removeChild(e);var o = n - i;return c = { width: o, height: o };
  }function T() {
    var n = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        t = [];return Array.prototype.push.apply(t, arguments), t.slice(1).forEach(function (t) {
      if (t) for (var e in t) ({}).hasOwnProperty.call(t, e) && (n[e] = t[e]);
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
  }function S(e, n, t) {
    t.forEach(function (t) {
      -1 === n.indexOf(t) && h(e, t) && d(e, t);
    }), n.forEach(function (t) {
      h(e, t) || f(e, t);
    });
  }var g = [],
      I = function (t) {
    g.push(t);
  },
      A = function () {
    for (var t = void 0; t = g.pop();) t();
  },
      v = function () {
    function t() {
      i(this, t);
    }return e(t, [{ key: "on", value: function (t, e, n) {
        var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];void 0 === this.bindings && (this.bindings = {}), void 0 === this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({ handler: e, ctx: n, once: i });
      } }, { key: "once", value: function (t, e, n) {
        this.on(t, e, n, !0);
      } }, { key: "off", value: function (t, e) {
        if (void 0 !== this.bindings && void 0 !== this.bindings[t]) if (void 0 === e) delete this.bindings[t];else for (var n = 0; n < this.bindings[t].length;) this.bindings[t][n].handler === e ? this.bindings[t].splice(n, 1) : ++n;
      } }, { key: "trigger", value: function (t) {
        if (void 0 !== this.bindings && this.bindings[t]) {
          for (var e = 0, n = arguments.length, i = Array(1 < n ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];for (; e < this.bindings[t].length;) {
            var r = this.bindings[t][e],
                s = r.handler,
                a = r.ctx,
                l = r.once,
                u = a;void 0 === u && (u = this), s.apply(u, i), l ? this.bindings[t].splice(e, 1) : ++e;
          }
        }
      } }]), t;
  }();w.Utils = { getActualBoundingClientRect: s, getScrollParents: a, getBounds: E, getOffsetParent: x, extend: T, addClass: f, removeClass: d, hasClass: h, updateClasses: S, defer: I, flush: A, uniqueId: o, Evented: v, getScrollBarSize: C, removeUtilElements: u };var k = function (t, e) {
    if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return function (t, e) {
      var n = [],
          i = !0,
          o = !1,
          r = void 0;try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
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
  };e = function () {
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    };
  }();function i(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }if (void 0 === w) throw new Error("You must include the utils.js file before tether.js");var a = (Y = w.Utils).getScrollParents,
      x = (E = Y.getBounds, Y.getOffsetParent),
      f = (T = Y.extend, Y.addClass),
      d = Y.removeClass,
      C = (S = Y.updateClasses, I = Y.defer, A = Y.flush, Y.getScrollBarSize),
      u = Y.removeUtilElements;function y(t, e) {
    var n = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];return e <= t + n && t - n <= e;
  }var b,
      _,
      D,
      O,
      N = function () {
    if ("undefined" == typeof document) return "";for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], n = 0; n < e.length; ++n) {
      var i = e[n];if (void 0 !== t.style[i]) return i;
    }
  }(),
      L = [],
      j = function () {
    L.forEach(function (t) {
      t.position(!1);
    }), A();
  };function P() {
    return "object" == typeof performance && "function" == typeof performance.now ? performance.now() : +new Date();
  }D = _ = b = null, O = function t() {
    if (void 0 !== _ && 16 < _) return _ = Math.min(_ - 16, 250), void (D = setTimeout(t, 250));void 0 !== b && P() - b < 10 || (null != D && (clearTimeout(D), D = null), b = P(), j(), _ = P() - b);
  }, "undefined" != typeof window && void 0 !== window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function (t) {
    window.addEventListener(t, O);
  });var H = { center: "center", left: "right", right: "left" },
      z = { middle: "middle", top: "bottom", bottom: "top" },
      M = { top: 0, left: 0, middle: "50%", center: "50%", bottom: "100%", right: "100%" },
      W = function (t) {
    var e = t.left,
        n = t.top;return void 0 !== M[t.left] && (e = M[t.left]), void 0 !== M[t.top] && (n = M[t.top]), { left: e, top: n };
  };function R() {
    for (var i = { top: 0, left: 0 }, t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];return e.forEach(function (t) {
      var e = t.top,
          n = t.left;"string" == typeof e && (e = parseFloat(e, 10)), "string" == typeof n && (n = parseFloat(n, 10)), i.top += e, i.left += n;
    }), i;
  }function q(t, e) {
    return "string" == typeof t.left && -1 !== t.left.indexOf("%") && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && -1 !== t.top.indexOf("%") && (t.top = parseFloat(t.top, 10) / 100 * e.height), t;
  }var B = function (t) {
    var e = t.split(" "),
        n = k(e, 2);return { top: n[0], left: n[1] };
  },
      F = B,
      U = function (t) {
    function n(t) {
      var e = this;i(this, n), function (t, e, n) {
        for (var i = !0; i;) {
          var o = t,
              r = e,
              s = n;i = !1, null === o && (o = Function.prototype);var a = Object.getOwnPropertyDescriptor(o, r);if (void 0 !== a) {
            if ("value" in a) return a.value;var l = a.get;if (void 0 === l) return;return l.call(s);
          }var u = Object.getPrototypeOf(o);if (null === u) return;t = u, e = r, n = s, i = !0, a = u = void 0;
        }
      }(Object.getPrototypeOf(n.prototype), "constructor", this).call(this), this.position = this.position.bind(this), L.push(this), this.history = [], this.setOptions(t, !1), w.modules.forEach(function (t) {
        void 0 !== t.initialize && t.initialize.call(e);
      }), this.position();
    }return function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }(n, v), e(n, [{ key: "getClass", value: function () {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
            e = this.options.classes;return void 0 !== e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t;
      } }, { key: "setOptions", value: function (t) {
        var e = this,
            n = arguments.length <= 1 || void 0 === arguments[1] || arguments[1];this.options = T({ offset: "0 0", targetOffset: "0 0", targetAttachment: "auto auto", classPrefix: "tether" }, t);var i = this.options,
            o = i.element,
            r = i.target,
            s = i.targetModifier;if (this.element = o, this.target = r, this.targetModifier = s, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function (t) {
          if (void 0 === e[t]) throw new Error("Tether Error: Both element and target must be defined");void 0 !== e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]));
        }), f(this.element, this.getClass("element")), !1 !== this.options.addTargetClasses && f(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");this.targetAttachment = F(this.options.targetAttachment), this.attachment = F(this.options.attachment), this.offset = B(this.options.offset), this.targetOffset = B(this.options.targetOffset), void 0 !== this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = a(this.target), !1 !== this.options.enabled && this.enable(n);
      } }, { key: "getTargetBounds", value: function () {
        if (void 0 === this.targetModifier) return E(this.target);if ("visible" === this.targetModifier) return this.target === document.body ? { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth } : ((r = { height: (t = E(this.target)).height, width: t.width, top: t.top, left: t.left }).height = Math.min(r.height, t.height - (pageYOffset - t.top)), r.height = Math.min(r.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), r.height = Math.min(innerHeight, r.height), r.height -= 2, r.width = Math.min(r.width, t.width - (pageXOffset - t.left)), r.width = Math.min(r.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), r.width = Math.min(innerWidth, r.width), r.width -= 2, r.top < pageYOffset && (r.top = pageYOffset), r.left < pageXOffset && (r.left = pageXOffset), r);if ("scroll-handle" === this.targetModifier) {
          var t = void 0,
              e = this.target;t = e === document.body ? (e = document.documentElement, { left: pageXOffset, top: pageYOffset, height: innerHeight, width: innerWidth }) : E(e);var n = getComputedStyle(e),
              i = 0;(e.scrollWidth > e.clientWidth || 0 <= [n.overflow, n.overflowX].indexOf("scroll") || this.target !== document.body) && (i = 15);var o = t.height - parseFloat(n.borderTopWidth) - parseFloat(n.borderBottomWidth) - i,
              r = { width: 15, height: .975 * o * (o / e.scrollHeight), left: t.left + t.width - parseFloat(n.borderLeftWidth) - 15 },
              s = 0;o < 408 && this.target === document.body && (s = -11e-5 * Math.pow(o, 2) - .00727 * o + 22.58), this.target !== document.body && (r.height = Math.max(r.height, 24));var a = this.target.scrollTop / (e.scrollHeight - o);return r.top = a * (o - r.height - s) + t.top + parseFloat(n.borderTopWidth), this.target === document.body && (r.height = Math.max(r.height, 24)), r;
        }
      } }, { key: "clearCache", value: function () {
        this._cache = {};
      } }, { key: "cache", value: function (t, e) {
        return void 0 === this._cache && (this._cache = {}), void 0 === this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t];
      } }, { key: "enable", value: function () {
        var e = this,
            t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];!1 !== this.options.addTargetClasses && f(this.target, this.getClass("enabled")), f(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function (t) {
          t !== e.target.ownerDocument && t.addEventListener("scroll", e.position);
        }), t && this.position();
      } }, { key: "disable", value: function () {
        var e = this;d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, void 0 !== this.scrollParents && this.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.position);
        });
      } }, { key: "destroy", value: function () {
        var n = this;this.disable(), L.forEach(function (t, e) {
          t === n && L.splice(e, 1);
        }), 0 === L.length && u();
      } }, { key: "updateAttachClasses", value: function (t, e) {
        var n = this;t = t || this.attachment, e = e || this.targetAttachment;void 0 !== this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), void 0 === this._addAttachClasses && (this._addAttachClasses = []);var i = this._addAttachClasses;t.top && i.push(this.getClass("element-attached") + "-" + t.top), t.left && i.push(this.getClass("element-attached") + "-" + t.left), e.top && i.push(this.getClass("target-attached") + "-" + e.top), e.left && i.push(this.getClass("target-attached") + "-" + e.left);var o = [];["left", "top", "bottom", "right", "middle", "center"].forEach(function (t) {
          o.push(n.getClass("element-attached") + "-" + t), o.push(n.getClass("target-attached") + "-" + t);
        }), I(function () {
          void 0 !== n._addAttachClasses && (S(n.element, n._addAttachClasses, o), !1 !== n.options.addTargetClasses && S(n.target, n._addAttachClasses, o), delete n._addAttachClasses);
        });
      } }, { key: "position", value: function () {
        var a = this,
            t = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];if (this.enabled) {
          this.clearCache();var e = function (t, e) {
            var n = t.left,
                i = t.top;return "auto" === n && (n = H[e.left]), "auto" === i && (i = z[e.top]), { left: n, top: i };
          }(this.targetAttachment, this.attachment);this.updateAttachClasses(this.attachment, e);var n = this.cache("element-bounds", function () {
            return E(a.element);
          }),
              i = n.width,
              o = n.height;if (0 === i && 0 === o && void 0 !== this.lastSize) {
            var r = this.lastSize;i = r.width, o = r.height;
          } else this.lastSize = { width: i, height: o };var s = this.cache("target-bounds", function () {
            return a.getTargetBounds();
          }),
              l = s,
              u = q(W(this.attachment), { width: i, height: o }),
              c = q(W(e), l),
              d = q(this.offset, { width: i, height: o }),
              f = q(this.targetOffset, l);u = R(u, d), c = R(c, f);for (var h = s.left + c.left - u.left, p = s.top + c.top - u.top, m = 0; m < w.modules.length; ++m) {
            var g = w.modules[m].position.call(this, { left: h, top: p, targetAttachment: e, targetPos: s, elementPos: n, offset: u, targetOffset: c, manualOffset: d, manualTargetOffset: f, scrollbarSize: _, attachment: this.attachment });if (!1 === g) return !1;void 0 !== g && "object" == typeof g && (p = g.top, h = g.left);
          }var v = { page: { top: p, left: h }, viewport: { top: p - pageYOffset, bottom: pageYOffset - p - o + innerHeight, left: h - pageXOffset, right: pageXOffset - h - i + innerWidth } },
              y = this.target.ownerDocument,
              b = y.defaultView,
              _ = void 0;return b.innerHeight > y.documentElement.clientHeight && (_ = this.cache("scrollbar-size", C), v.viewport.bottom -= _.height), b.innerWidth > y.documentElement.clientWidth && (_ = this.cache("scrollbar-size", C), v.viewport.right -= _.width), -1 !== ["", "static"].indexOf(y.body.style.position) && -1 !== ["", "static"].indexOf(y.body.parentElement.style.position) || (v.page.bottom = y.body.scrollHeight - p - o, v.page.right = y.body.scrollWidth - h - i), void 0 !== this.options.optimizations && !1 !== this.options.optimizations.moveElement && void 0 === this.targetModifier && function () {
            var t = a.cache("target-offsetparent", function () {
              return x(a.target);
            }),
                e = a.cache("target-offsetparent-bounds", function () {
              return E(t);
            }),
                n = getComputedStyle(t),
                i = e,
                o = {};if (["Top", "Left", "Bottom", "Right"].forEach(function (t) {
              o[t.toLowerCase()] = parseFloat(n["border" + t + "Width"]);
            }), e.right = y.body.scrollWidth - e.left - i.width + o.right, e.bottom = y.body.scrollHeight - e.top - i.height + o.bottom, v.page.top >= e.top + o.top && v.page.bottom >= e.bottom && v.page.left >= e.left + o.left && v.page.right >= e.right) {
              var r = t.scrollTop,
                  s = t.scrollLeft;v.offset = { top: v.page.top - e.top + r - o.top, left: v.page.left - e.left + s - o.left };
            }
          }(), this.move(v), this.history.unshift(v), 3 < this.history.length && this.history.pop(), t && A(), !0;
        }
      } }, { key: "move", value: function (e) {
        var o = this;if (void 0 !== this.element.parentNode) {
          var n = {};for (var t in e) for (var i in n[t] = {}, e[t]) {
            for (var r = !1, s = 0; s < this.history.length; ++s) {
              var a = this.history[s];if (void 0 !== a[t] && !y(a[t][i], e[t][i])) {
                r = !0;break;
              }
            }r || (n[t][i] = !0);
          }var l,
              u,
              c = { top: "", left: "", right: "", bottom: "" },
              d = function (t, e) {
            if (!1 !== (void 0 !== o.options.optimizations ? o.options.optimizations.gpu : null)) {
              var n = void 0,
                  i = void 0;if (n = t.top ? (c.top = 0, e.top) : (c.bottom = 0, -e.bottom), i = t.left ? (c.left = 0, e.left) : (c.right = 0, -e.right), window.matchMedia) window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches || (i = Math.round(i), n = Math.round(n));c[N] = "translateX(" + i + "px) translateY(" + n + "px)", "msTransform" !== N && (c[N] += " translateZ(0)");
            } else t.top ? c.top = e.top + "px" : c.bottom = e.bottom + "px", t.left ? c.left = e.left + "px" : c.right = e.right + "px";
          },
              f = !1;if ((n.page.top || n.page.bottom) && (n.page.left || n.page.right) ? (c.position = "absolute", d(n.page, e.page)) : (n.viewport.top || n.viewport.bottom) && (n.viewport.left || n.viewport.right) ? (c.position = "fixed", d(n.viewport, e.viewport)) : void 0 !== n.offset && n.offset.top && n.offset.left ? function () {
            c.position = "absolute";var t = o.cache("target-offsetparent", function () {
              return x(o.target);
            });x(o.element) !== t && I(function () {
              o.element.parentNode.removeChild(o.element), t.appendChild(o.element);
            }), d(n.offset, e.offset), f = !0;
          }() : (c.position = "absolute", d({ top: !0, left: !0 }, e.page)), !f) if (this.options.bodyElement) this.element.parentNode !== this.options.bodyElement && this.options.bodyElement.appendChild(this.element);else {
            for (var h = !0, p = this.element.parentNode; p && 1 === p.nodeType && "BODY" !== p.tagName && (void 0, ((u = (l = p).ownerDocument).fullscreenElement || u.webkitFullscreenElement || u.mozFullScreenElement || u.msFullscreenElement) !== l);) {
              if ("static" !== getComputedStyle(p).position) {
                h = !1;break;
              }p = p.parentNode;
            }h || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element));
          }var m = {},
              g = !1;for (var i in c) {
            var v = c[i];this.element.style[i] !== v && (g = !0, m[i] = v);
          }g && I(function () {
            T(o.element.style, m), o.trigger("repositioned");
          });
        }
      } }]), n;
  }();U.modules = [], w.position = j;var $ = T(U, w),
      T = (k = function (t, e) {
    if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return function (t, e) {
      var n = [],
          i = !0,
          o = !1,
          r = void 0;try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
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
  }, E = (Y = w.Utils).getBounds, Y.extend),
      Q = (S = Y.updateClasses, I = Y.defer, ["left", "top", "right", "bottom"]);w.modules.push({ position: function (t) {
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
          x = T({}, g),
          C = T({}, this.attachment);return this.options.constraints.forEach(function (t) {
        var e = t.to,
            n = t.attachment,
            i = t.pin;void 0 === n && (n = "");var o = void 0,
            r = void 0;if (0 <= n.indexOf(" ")) {
          var s = n.split(" "),
              a = k(s, 2);r = a[0], o = a[1];
        } else o = r = n;var l = function (t, r) {
          return "scrollParent" === r ? r = t.scrollParents[0] : "window" === r && (r = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), r === document && (r = r.documentElement), void 0 !== r.nodeType && function () {
            var t = r,
                e = E(r),
                n = e,
                i = getComputedStyle(r);if (r = [n.left, n.top, e.width + n.left, e.height + n.top], t.ownerDocument !== document) {
              var o = t.ownerDocument.defaultView;r[0] += o.pageXOffset, r[1] += o.pageYOffset, r[2] += o.pageXOffset, r[3] += o.pageYOffset;
            }Q.forEach(function (t, e) {
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
      }), I(function () {
        !1 !== h.options.addTargetClasses && S(h.target, w, o), S(h.element, w, o);
      }), { top: p, left: m };
    } });var Y,
      E = (Y = w.Utils).getBounds,
      S = Y.updateClasses;I = Y.defer;w.modules.push({ position: function (t) {
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
      }), I(function () {
        !1 !== e.options.addTargetClasses && S(e.target, f, d), S(e.element, f, d);
      }), !0;
    } });k = function (t, e) {
    if (Array.isArray(t)) return t;if (Symbol.iterator in Object(t)) return function (t, e) {
      var n = [],
          i = !0,
          o = !1,
          r = void 0;try {
        for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e); i = !0);
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
  };return w.modules.push({ position: function (t) {
      var e = t.top,
          n = t.left;if (this.options.shift) {
        var i = this.options.shift;"function" == typeof this.options.shift && (i = this.options.shift.call(this, { top: e, left: n }));var o = void 0,
            r = void 0;if ("string" == typeof i) {
          (i = i.split(" "))[1] = i[1] || i[0];var s = k(i, 2);o = s[0], r = s[1], o = parseFloat(o, 10), r = parseFloat(r, 10);
        } else o = i.top, r = i.left;return { top: e += o, left: n += r };
      }
    } }), $;
}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");!function (t) {
  var e = jQuery.fn.jquery.split(" ")[0].split(".");if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
}(), function () {
  var _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
    return typeof t;
  } : function (t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  },
      w = function () {
    function i(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = e[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i);
      }
    }return function (t, e, n) {
      return e && i(t.prototype, e), n && i(t, n), t;
    };
  }();function x(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
  }var o,
      t,
      r,
      e,
      n,
      s,
      a,
      l,
      u,
      i,
      c,
      d,
      f,
      h,
      p,
      m,
      g,
      v,
      y,
      b,
      C,
      E,
      T,
      S,
      I,
      A,
      k,
      D,
      O,
      N,
      L,
      j,
      P,
      H,
      z,
      M,
      W,
      R,
      q,
      B,
      F,
      U,
      $,
      Q,
      Y,
      K,
      V,
      X,
      G,
      Z,
      J,
      tt,
      et,
      nt,
      it,
      ot,
      rt,
      st,
      at,
      lt,
      ut,
      ct,
      dt,
      ft,
      ht,
      pt,
      mt,
      gt,
      vt,
      yt,
      bt,
      _t,
      wt,
      xt,
      Ct,
      Et,
      Tt,
      St,
      It,
      At,
      kt,
      Dt,
      Ot,
      Nt,
      Lt,
      jt,
      Pt,
      Ht,
      zt,
      Mt,
      Wt,
      Rt,
      qt,
      Bt,
      Ft,
      Ut,
      $t,
      Qt,
      Yt,
      Kt,
      Vt,
      Xt,
      Gt,
      Zt,
      Jt,
      te,
      ee,
      ne,
      ie,
      oe,
      re,
      se,
      ae,
      le,
      ue,
      ce,
      de,
      fe,
      he,
      pe,
      me,
      ge,
      ve,
      ye,
      be,
      _e,
      we,
      xe,
      Ce,
      Ee,
      Te,
      Se,
      Ie,
      Ae,
      ke,
      De,
      Oe,
      Ne,
      Le,
      je,
      Pe,
      He,
      ze,
      Me,
      We,
      Re,
      qe,
      Be,
      Fe,
      Ue,
      $e,
      Qe,
      Ye,
      Ke,
      Ve,
      Xe,
      Ge = function (i) {
    var e = !1,
        n = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };function t(t) {
      var e = this,
          n = !1;return i(this).one(o.TRANSITION_END, function () {
        n = !0;
      }), setTimeout(function () {
        n || o.triggerTransitionEnd(e);
      }, t), this;
    }var o = { TRANSITION_END: "bsTransitionEnd", getUID: function (t) {
        for (; t += ~~(1e6 * Math.random()), document.getElementById(t););return t;
      }, getSelectorFromElement: function (t) {
        var e = t.getAttribute("data-target");return e || (e = t.getAttribute("href") || "", e = /^#[a-z]/i.test(e) ? e : null), e;
      }, reflow: function (t) {
        return t.offsetHeight;
      }, triggerTransitionEnd: function (t) {
        i(t).trigger(e.end);
      }, supportsTransitionEnd: function () {
        return Boolean(e);
      }, typeCheckConfig: function (t, e, n) {
        for (var i in n) if (n.hasOwnProperty(i)) {
          var o = n[i],
              r = e[i],
              s = r && ((l = r)[0] || l).nodeType ? "element" : (a = r, {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase());if (!new RegExp(o).test(s)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + s + '" but expected type "' + o + '".');
        }var a, l;
      } };return e = function () {
      if (window.QUnit) return !1;var t = document.createElement("bootstrap");for (var e in n) if (void 0 !== t.style[e]) return { end: n[e] };return !1;
    }(), i.fn.emulateTransitionEnd = t, o.supportsTransitionEnd() && (i.event.special[o.TRANSITION_END] = { bindType: e.end, delegateType: e.end, handle: function (t) {
        if (i(t.target).is(this)) return t.handleObj.handler.apply(this, arguments);
      } }), o;
  }(jQuery),
      Ze = (o = jQuery, t = "alert", e = "." + (r = "bs.alert"), n = o.fn[t], s = { CLOSE: "close" + e, CLOSED: "closed" + e, CLICK_DATA_API: "click" + e + ".data-api" }, a = "alert", l = "fade", u = "show", i = function () {
    function i(t) {
      x(this, i), this._element = t;
    }return i.prototype.close = function (t) {
      t = t || this._element;var e = this._getRootElement(t);this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e);
    }, i.prototype.dispose = function () {
      o.removeData(this._element, r), this._element = null;
    }, i.prototype._getRootElement = function (t) {
      var e = Ge.getSelectorFromElement(t),
          n = !1;return e && (n = o(e)[0]), n || (n = o(t).closest("." + a)[0]), n;
    }, i.prototype._triggerCloseEvent = function (t) {
      var e = o.Event(s.CLOSE);return o(t).trigger(e), e;
    }, i.prototype._removeElement = function (e) {
      var n = this;o(e).removeClass(u), Ge.supportsTransitionEnd() && o(e).hasClass(l) ? o(e).one(Ge.TRANSITION_END, function (t) {
        return n._destroyElement(e, t);
      }).emulateTransitionEnd(150) : this._destroyElement(e);
    }, i.prototype._destroyElement = function (t) {
      o(t).detach().trigger(s.CLOSED).remove();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = o(this),
            e = t.data(r);e || (e = new i(this), t.data(r, e)), "close" === n && e[n](this);
      });
    }, i._handleDismiss = function (e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }, w(i, null, [{ key: "VERSION", get: function () {
        return "4.0.0-alpha.6";
      } }]), i;
  }(), o(document).on(s.CLICK_DATA_API, '[data-dismiss="alert"]', i._handleDismiss(new i())), o.fn[t] = i._jQueryInterface, o.fn[t].Constructor = i, o.fn[t].noConflict = function () {
    return o.fn[t] = n, i._jQueryInterface;
  }, c = jQuery, d = "button", h = "." + (f = "bs.button"), p = ".data-api", m = c.fn[d], g = "active", v = "btn", b = '[data-toggle^="button"]', C = '[data-toggle="buttons"]', E = "input", T = ".active", S = ".btn", I = { CLICK_DATA_API: "click" + h + p, FOCUS_BLUR_DATA_API: (y = "focus") + h + p + " blur" + h + p }, A = function () {
    function n(t) {
      x(this, n), this._element = t;
    }return n.prototype.toggle = function () {
      var t = !0,
          e = c(this._element).closest(C)[0];if (e) {
        var n = c(this._element).find(E)[0];if (n) {
          if ("radio" === n.type) if (n.checked && c(this._element).hasClass(g)) t = !1;else {
            var i = c(e).find(T)[0];i && c(i).removeClass(g);
          }t && (n.checked = !c(this._element).hasClass(g), c(n).trigger("change")), n.focus();
        }
      }this._element.setAttribute("aria-pressed", !c(this._element).hasClass(g)), t && c(this._element).toggleClass(g);
    }, n.prototype.dispose = function () {
      c.removeData(this._element, f), this._element = null;
    }, n._jQueryInterface = function (e) {
      return this.each(function () {
        var t = c(this).data(f);t || (t = new n(this), c(this).data(f, t)), "toggle" === e && t[e]();
      });
    }, w(n, null, [{ key: "VERSION", get: function () {
        return "4.0.0-alpha.6";
      } }]), n;
  }(), c(document).on(I.CLICK_DATA_API, b, function (t) {
    t.preventDefault();var e = t.target;c(e).hasClass(v) || (e = c(e).closest(S)), A._jQueryInterface.call(c(e), "toggle");
  }).on(I.FOCUS_BLUR_DATA_API, b, function (t) {
    var e = c(t.target).closest(S)[0];c(e).toggleClass(y, /^focus(in)?$/.test(t.type));
  }), c.fn[d] = A._jQueryInterface, c.fn[d].Constructor = A, c.fn[d].noConflict = function () {
    return c.fn[d] = m, A._jQueryInterface;
  }, k = jQuery, D = "carousel", N = "." + (O = "bs.carousel"), L = ".data-api", j = k.fn[D], P = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0 }, H = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean" }, z = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" }, M = { SLIDE: "slide" + N, SLID: "slid" + N, KEYDOWN: "keydown" + N, MOUSEENTER: "mouseenter" + N, MOUSELEAVE: "mouseleave" + N, LOAD_DATA_API: "load" + N + L, CLICK_DATA_API: "click" + N + L }, W = "carousel", R = "active", q = "slide", B = "carousel-item-right", F = "carousel-item-left", U = "carousel-item-next", $ = "carousel-item-prev", Q = ".active", Y = ".active.carousel-item", K = ".carousel-item", V = ".carousel-item-next, .carousel-item-prev", X = ".carousel-indicators", G = "[data-slide], [data-slide-to]", Z = '[data-ride="carousel"]', J = function () {
    function r(t, e) {
      x(this, r), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(e), this._element = k(t)[0], this._indicatorsElement = k(this._element).find(X)[0], this._addEventListeners();
    }return r.prototype.next = function () {
      if (this._isSliding) throw new Error("Carousel is sliding");this._slide(z.NEXT);
    }, r.prototype.nextWhenVisible = function () {
      document.hidden || this.next();
    }, r.prototype.prev = function () {
      if (this._isSliding) throw new Error("Carousel is sliding");this._slide(z.PREVIOUS);
    }, r.prototype.pause = function (t) {
      t || (this._isPaused = !0), k(this._element).find(V)[0] && Ge.supportsTransitionEnd() && (Ge.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }, r.prototype.cycle = function (t) {
      t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }, r.prototype.to = function (t) {
      var e = this;this._activeElement = k(this._element).find(Y)[0];var n = this._getItemIndex(this._activeElement);if (!(t > this._items.length - 1 || t < 0)) if (this._isSliding) k(this._element).one(M.SLID, function () {
        return e.to(t);
      });else {
        if (n === t) return this.pause(), void this.cycle();var i = n < t ? z.NEXT : z.PREVIOUS;this._slide(i, this._items[t]);
      }
    }, r.prototype.dispose = function () {
      k(this._element).off(N), k.removeData(this._element, O), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null;
    }, r.prototype._getConfig = function (t) {
      return t = k.extend({}, P, t), Ge.typeCheckConfig(D, t, H), t;
    }, r.prototype._addEventListeners = function () {
      var e = this;this._config.keyboard && k(this._element).on(M.KEYDOWN, function (t) {
        return e._keydown(t);
      }), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || k(this._element).on(M.MOUSEENTER, function (t) {
        return e.pause(t);
      }).on(M.MOUSELEAVE, function (t) {
        return e.cycle(t);
      });
    }, r.prototype._keydown = function (t) {
      if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {case 37:
          t.preventDefault(), this.prev();break;case 39:
          t.preventDefault(), this.next();break;default:
          return;}
    }, r.prototype._getItemIndex = function (t) {
      return this._items = k.makeArray(k(t).parent().find(K)), this._items.indexOf(t);
    }, r.prototype._getItemByDirection = function (t, e) {
      var n = t === z.NEXT,
          i = t === z.PREVIOUS,
          o = this._getItemIndex(e),
          r = this._items.length - 1;if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;var s = (o + (t === z.PREVIOUS ? -1 : 1)) % this._items.length;return -1 == s ? this._items[this._items.length - 1] : this._items[s];
    }, r.prototype._triggerSlideEvent = function (t, e) {
      var n = k.Event(M.SLIDE, { relatedTarget: t, direction: e });return k(this._element).trigger(n), n;
    }, r.prototype._setActiveIndicatorElement = function (t) {
      if (this._indicatorsElement) {
        k(this._indicatorsElement).find(Q).removeClass(R);var e = this._indicatorsElement.children[this._getItemIndex(t)];e && k(e).addClass(R);
      }
    }, r.prototype._slide = function (t, e) {
      var n = this,
          i = k(this._element).find(Y)[0],
          o = e || i && this._getItemByDirection(t, i),
          r = Boolean(this._interval),
          s = void 0,
          a = void 0,
          l = void 0;if (l = t === z.NEXT ? (s = F, a = U, z.LEFT) : (s = B, a = $, z.RIGHT), o && k(o).hasClass(R)) this._isSliding = !1;else if (!this._triggerSlideEvent(o, l).isDefaultPrevented() && i && o) {
        this._isSliding = !0, r && this.pause(), this._setActiveIndicatorElement(o);var u = k.Event(M.SLID, { relatedTarget: o, direction: l });Ge.supportsTransitionEnd() && k(this._element).hasClass(q) ? (k(o).addClass(a), Ge.reflow(o), k(i).addClass(s), k(o).addClass(s), k(i).one(Ge.TRANSITION_END, function () {
          k(o).removeClass(s + " " + a).addClass(R), k(i).removeClass(R + " " + a + " " + s), n._isSliding = !1, setTimeout(function () {
            return k(n._element).trigger(u);
          }, 0);
        }).emulateTransitionEnd(600)) : (k(i).removeClass(R), k(o).addClass(R), this._isSliding = !1, k(this._element).trigger(u)), r && this.cycle();
      }
    }, r._jQueryInterface = function (i) {
      return this.each(function () {
        var t = k(this).data(O),
            e = k.extend({}, P, k(this).data());"object" === (void 0 === i ? "undefined" : _(i)) && k.extend(e, i);var n = "string" == typeof i ? i : e.slide;if (t || (t = new r(this, e), k(this).data(O, t)), "number" == typeof i) t.to(i);else if ("string" == typeof n) {
          if (void 0 === t[n]) throw new Error('No method named "' + n + '"');t[n]();
        } else e.interval && (t.pause(), t.cycle());
      });
    }, r._dataApiClickHandler = function (t) {
      var e = Ge.getSelectorFromElement(this);if (e) {
        var n = k(e)[0];if (n && k(n).hasClass(W)) {
          var i = k.extend({}, k(n).data(), k(this).data()),
              o = this.getAttribute("data-slide-to");o && (i.interval = !1), r._jQueryInterface.call(k(n), i), o && k(n).data(O).to(o), t.preventDefault();
        }
      }
    }, w(r, null, [{ key: "VERSION", get: function () {
        return "4.0.0-alpha.6";
      } }, { key: "Default", get: function () {
        return P;
      } }]), r;
  }(), k(document).on(M.CLICK_DATA_API, G, J._dataApiClickHandler), k(window).on(M.LOAD_DATA_API, function () {
    k(Z).each(function () {
      var t = k(this);J._jQueryInterface.call(t, t.data());
    });
  }), k.fn[D] = J._jQueryInterface, k.fn[D].Constructor = J, k.fn[D].noConflict = function () {
    return k.fn[D] = j, J._jQueryInterface;
  }, tt = jQuery, et = "collapse", it = "." + (nt = "bs.collapse"), ot = tt.fn[et], rt = { toggle: !0, parent: "" }, st = { toggle: "boolean", parent: "string" }, at = { SHOW: "show" + it, SHOWN: "shown" + it, HIDE: "hide" + it, HIDDEN: "hidden" + it, CLICK_DATA_API: "click" + it + ".data-api" }, lt = "show", ut = "collapse", ct = "collapsing", dt = "collapsed", ft = "width", ht = "height", pt = ".card > .show, .card > .collapsing", mt = '[data-toggle="collapse"]', gt = function () {
    function a(t, e) {
      x(this, a), this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.makeArray(tt('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
    }return a.prototype.toggle = function () {
      tt(this._element).hasClass(lt) ? this.hide() : this.show();
    }, a.prototype.show = function () {
      var t = this;if (this._isTransitioning) throw new Error("Collapse is transitioning");if (!tt(this._element).hasClass(lt)) {
        var e = void 0,
            n = void 0;if (this._parent && ((e = tt.makeArray(tt(this._parent).find(pt))).length || (e = null)), !(e && (n = tt(e).data(nt)) && n._isTransitioning)) {
          var i = tt.Event(at.SHOW);if (tt(this._element).trigger(i), !i.isDefaultPrevented()) {
            e && (a._jQueryInterface.call(tt(e), "hide"), n || tt(e).data(nt, null));var o = this._getDimension();tt(this._element).removeClass(ut).addClass(ct), this._element.style[o] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && tt(this._triggerArray).removeClass(dt).attr("aria-expanded", !0), this.setTransitioning(!0);var r = function () {
              tt(t._element).removeClass(ct).addClass(ut).addClass(lt), t._element.style[o] = "", t.setTransitioning(!1), tt(t._element).trigger(at.SHOWN);
            };if (Ge.supportsTransitionEnd()) {
              var s = "scroll" + (o[0].toUpperCase() + o.slice(1));tt(this._element).one(Ge.TRANSITION_END, r).emulateTransitionEnd(600), this._element.style[o] = this._element[s] + "px";
            } else r();
          }
        }
      }
    }, a.prototype.hide = function () {
      var t = this;if (this._isTransitioning) throw new Error("Collapse is transitioning");if (tt(this._element).hasClass(lt)) {
        var e = tt.Event(at.HIDE);if (tt(this._element).trigger(e), !e.isDefaultPrevented()) {
          var n = this._getDimension(),
              i = n === ft ? "offsetWidth" : "offsetHeight";this._element.style[n] = this._element[i] + "px", Ge.reflow(this._element), tt(this._element).addClass(ct).removeClass(ut).removeClass(lt), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && tt(this._triggerArray).addClass(dt).attr("aria-expanded", !1), this.setTransitioning(!0);var o = function () {
            t.setTransitioning(!1), tt(t._element).removeClass(ct).addClass(ut).trigger(at.HIDDEN);
          };this._element.style[n] = "", Ge.supportsTransitionEnd() ? tt(this._element).one(Ge.TRANSITION_END, o).emulateTransitionEnd(600) : o();
        }
      }
    }, a.prototype.setTransitioning = function (t) {
      this._isTransitioning = t;
    }, a.prototype.dispose = function () {
      tt.removeData(this._element, nt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null;
    }, a.prototype._getConfig = function (t) {
      return (t = tt.extend({}, rt, t)).toggle = Boolean(t.toggle), Ge.typeCheckConfig(et, t, st), t;
    }, a.prototype._getDimension = function () {
      return tt(this._element).hasClass(ft) ? ft : ht;
    }, a.prototype._getParent = function () {
      var n = this,
          t = tt(this._config.parent)[0],
          e = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';return tt(t).find(e).each(function (t, e) {
        n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e]);
      }), t;
    }, a.prototype._addAriaAndCollapsedClass = function (t, e) {
      if (t) {
        var n = tt(t).hasClass(lt);t.setAttribute("aria-expanded", n), e.length && tt(e).toggleClass(dt, !n).attr("aria-expanded", n);
      }
    }, a._getTargetFromElement = function (t) {
      var e = Ge.getSelectorFromElement(t);return e ? tt(e)[0] : null;
    }, a._jQueryInterface = function (i) {
      return this.each(function () {
        var t = tt(this),
            e = t.data(nt),
            n = tt.extend({}, rt, t.data(), "object" === (void 0 === i ? "undefined" : _(i)) && i);if (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1), e || (e = new a(this, n), t.data(nt, e)), "string" == typeof i) {
          if (void 0 === e[i]) throw new Error('No method named "' + i + '"');e[i]();
        }
      });
    }, w(a, null, [{ key: "VERSION", get: function () {
        return "4.0.0-alpha.6";
      } }, { key: "Default", get: function () {
        return rt;
      } }]), a;
  }(), tt(document).on(at.CLICK_DATA_API, mt, function (t) {
    t.preventDefault();var e = gt._getTargetFromElement(this),
        n = tt(e).data(nt) ? "toggle" : tt(this).data();gt._jQueryInterface.call(tt(e), n);
  }), tt.fn[et] = gt._jQueryInterface, tt.fn[et].Constructor = gt, tt.fn[et].noConflict = function () {
    return tt.fn[et] = ot, gt._jQueryInterface;
  }, vt = jQuery, yt = "dropdown", _t = "." + (bt = "bs.dropdown"), wt = ".data-api", xt = vt.fn[yt], Ct = { HIDE: "hide" + _t, HIDDEN: "hidden" + _t, SHOW: "show" + _t, SHOWN: "shown" + _t, CLICK: "click" + _t, CLICK_DATA_API: "click" + _t + wt, FOCUSIN_DATA_API: "focusin" + _t + wt, KEYDOWN_DATA_API: "keydown" + _t + wt }, Et = "dropdown-backdrop", Tt = "disabled", St = "show", It = ".dropdown-backdrop", At = '[data-toggle="dropdown"]', kt = ".dropdown form", Dt = '[role="menu"]', Ot = '[role="listbox"]', Nt = ".navbar-nav", Lt = '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a', jt = function () {
    function a(t) {
      x(this, a), this._element = t, this._addEventListeners();
    }return a.prototype.toggle = function () {
      if (this.disabled || vt(this).hasClass(Tt)) return !1;var t = a._getParentFromElement(this),
          e = vt(t).hasClass(St);if (a._clearMenus(), e) return !1;if ("ontouchstart" in document.documentElement && !vt(t).closest(Nt).length) {
        var n = document.createElement("div");n.className = Et, vt(n).insertBefore(this), vt(n).on("click", a._clearMenus);
      }var i = { relatedTarget: this },
          o = vt.Event(Ct.SHOW, i);return vt(t).trigger(o), o.isDefaultPrevented() || (this.focus(), this.setAttribute("aria-expanded", !0), vt(t).toggleClass(St), vt(t).trigger(vt.Event(Ct.SHOWN, i))), !1;
    }, a.prototype.dispose = function () {
      vt.removeData(this._element, bt), vt(this._element).off(_t), this._element = null;
    }, a.prototype._addEventListeners = function () {
      vt(this._element).on(Ct.CLICK, this.toggle);
    }, a._jQueryInterface = function (e) {
      return this.each(function () {
        var t = vt(this).data(bt);if (t || (t = new a(this), vt(this).data(bt, t)), "string" == typeof e) {
          if (void 0 === t[e]) throw new Error('No method named "' + e + '"');t[e].call(this);
        }
      });
    }, a._clearMenus = function (t) {
      if (!t || 3 !== t.which) {
        var e = vt(It)[0];e && e.parentNode.removeChild(e);for (var n = vt.makeArray(vt(At)), i = 0; i < n.length; i++) {
          var o = a._getParentFromElement(n[i]),
              r = { relatedTarget: n[i] };if (vt(o).hasClass(St) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "focusin" === t.type) && vt.contains(o, t.target))) {
            var s = vt.Event(Ct.HIDE, r);vt(o).trigger(s), s.isDefaultPrevented() || (n[i].setAttribute("aria-expanded", "false"), vt(o).removeClass(St).trigger(vt.Event(Ct.HIDDEN, r)));
          }
        }
      }
    }, a._getParentFromElement = function (t) {
      var e = void 0,
          n = Ge.getSelectorFromElement(t);return n && (e = vt(n)[0]), e || t.parentNode;
    }, a._dataApiKeydownHandler = function (t) {
      if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !vt(this).hasClass(Tt))) {
        var e = a._getParentFromElement(this),
            n = vt(e).hasClass(St);if (!n && 27 !== t.which || n && 27 === t.which) {
          if (27 === t.which) {
            var i = vt(e).find(At)[0];vt(i).trigger("focus");
          }vt(this).trigger("click");
        } else {
          var o = vt(e).find(Lt).get();if (o.length) {
            var r = o.indexOf(t.target);38 === t.which && 0 < r && r--, 40 === t.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus();
          }
        }
      }
    }, w(a, null, [{ key: "VERSION", get: function () {
        return "4.0.0-alpha.6";
      } }]), a;
  }(), vt(document).on(Ct.KEYDOWN_DATA_API, At, jt._dataApiKeydownHandler).on(Ct.KEYDOWN_DATA_API, Dt, jt._dataApiKeydownHandler).on(Ct.KEYDOWN_DATA_API, Ot, jt._dataApiKeydownHandler).on(Ct.CLICK_DATA_API + " " + Ct.FOCUSIN_DATA_API, jt._clearMenus).on(Ct.CLICK_DATA_API, At, jt.prototype.toggle).on(Ct.CLICK_DATA_API, kt, function (t) {
    t.stopPropagation();
  }), vt.fn[yt] = jt._jQueryInterface, vt.fn[yt].Constructor = jt, vt.fn[yt].noConflict = function () {
    return vt.fn[yt] = xt, jt._jQueryInterface;
  }, Pt = jQuery, Ht = "modal", Mt = "." + (zt = "bs.modal"), Wt = Pt.fn[Ht], Rt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }, qt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" }, Bt = { HIDE: "hide" + Mt, HIDDEN: "hidden" + Mt, SHOW: "show" + Mt, SHOWN: "shown" + Mt, FOCUSIN: "focusin" + Mt, RESIZE: "resize" + Mt, CLICK_DISMISS: "click.dismiss" + Mt, KEYDOWN_DISMISS: "keydown.dismiss" + Mt, MOUSEUP_DISMISS: "mouseup.dismiss" + Mt, MOUSEDOWN_DISMISS: "mousedown.dismiss" + Mt, CLICK_DATA_API: "click" + Mt + ".data-api" }, Ft = "modal-scrollbar-measure", Ut = "modal-backdrop", $t = "modal-open", Qt = "fade", Yt = "show", Kt = ".modal-dialog", Vt = '[data-toggle="modal"]', Xt = '[data-dismiss="modal"]', Gt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Zt = function () {
    function o(t, e) {
      x(this, o), this._config = this._getConfig(e), this._element = t, this._dialog = Pt(t).find(Kt)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0;
    }return o.prototype.toggle = function (t) {
      return this._isShown ? this.hide() : this.show(t);
    }, o.prototype.show = function (t) {
      var e = this;if (this._isTransitioning) throw new Error("Modal is transitioning");Ge.supportsTransitionEnd() && Pt(this._element).hasClass(Qt) && (this._isTransitioning = !0);var n = Pt.Event(Bt.SHOW, { relatedTarget: t });Pt(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), Pt(document.body).addClass($t), this._setEscapeEvent(), this._setResizeEvent(), Pt(this._element).on(Bt.CLICK_DISMISS, Xt, function (t) {
        return e.hide(t);
      }), Pt(this._dialog).on(Bt.MOUSEDOWN_DISMISS, function () {
        Pt(e._element).one(Bt.MOUSEUP_DISMISS, function (t) {
          Pt(t.target).is(e._element) && (e._ignoreBackdropClick = !0);
        });
      }), this._showBackdrop(function () {
        return e._showElement(t);
      }));
    }, o.prototype.hide = function (t) {
      var e = this;if (t && t.preventDefault(), this._isTransitioning) throw new Error("Modal is transitioning");var n = Ge.supportsTransitionEnd() && Pt(this._element).hasClass(Qt);n && (this._isTransitioning = !0);var i = Pt.Event(Bt.HIDE);Pt(this._element).trigger(i), this._isShown && !i.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), Pt(document).off(Bt.FOCUSIN), Pt(this._element).removeClass(Yt), Pt(this._element).off(Bt.CLICK_DISMISS), Pt(this._dialog).off(Bt.MOUSEDOWN_DISMISS), n ? Pt(this._element).one(Ge.TRANSITION_END, function (t) {
        return e._hideModal(t);
      }).emulateTransitionEnd(300) : this._hideModal());
    }, o.prototype.dispose = function () {
      Pt.removeData(this._element, zt), Pt(window, document, this._element, this._backdrop).off(Mt), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null;
    }, o.prototype._getConfig = function (t) {
      return t = Pt.extend({}, Rt, t), Ge.typeCheckConfig(Ht, t, qt), t;
    }, o.prototype._showElement = function (t) {
      var e = this,
          n = Ge.supportsTransitionEnd() && Pt(this._element).hasClass(Qt);this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && Ge.reflow(this._element), Pt(this._element).addClass(Yt), this._config.focus && this._enforceFocus();var i = Pt.Event(Bt.SHOWN, { relatedTarget: t }),
          o = function () {
        e._config.focus && e._element.focus(), e._isTransitioning = !1, Pt(e._element).trigger(i);
      };n ? Pt(this._dialog).one(Ge.TRANSITION_END, o).emulateTransitionEnd(300) : o();
    }, o.prototype._enforceFocus = function () {
      var e = this;Pt(document).off(Bt.FOCUSIN).on(Bt.FOCUSIN, function (t) {
        document === t.target || e._element === t.target || Pt(e._element).has(t.target).length || e._element.focus();
      });
    }, o.prototype._setEscapeEvent = function () {
      var e = this;this._isShown && this._config.keyboard ? Pt(this._element).on(Bt.KEYDOWN_DISMISS, function (t) {
        27 === t.which && e.hide();
      }) : this._isShown || Pt(this._element).off(Bt.KEYDOWN_DISMISS);
    }, o.prototype._setResizeEvent = function () {
      var e = this;this._isShown ? Pt(window).on(Bt.RESIZE, function (t) {
        return e._handleUpdate(t);
      }) : Pt(window).off(Bt.RESIZE);
    }, o.prototype._hideModal = function () {
      var t = this;this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._isTransitioning = !1, this._showBackdrop(function () {
        Pt(document.body).removeClass($t), t._resetAdjustments(), t._resetScrollbar(), Pt(t._element).trigger(Bt.HIDDEN);
      });
    }, o.prototype._removeBackdrop = function () {
      this._backdrop && (Pt(this._backdrop).remove(), this._backdrop = null);
    }, o.prototype._showBackdrop = function (t) {
      var e = this,
          n = Pt(this._element).hasClass(Qt) ? Qt : "";if (this._isShown && this._config.backdrop) {
        var i = Ge.supportsTransitionEnd() && n;if (this._backdrop = document.createElement("div"), this._backdrop.className = Ut, n && Pt(this._backdrop).addClass(n), Pt(this._backdrop).appendTo(document.body), Pt(this._element).on(Bt.CLICK_DISMISS, function (t) {
          e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide());
        }), i && Ge.reflow(this._backdrop), Pt(this._backdrop).addClass(Yt), !t) return;if (!i) return void t();Pt(this._backdrop).one(Ge.TRANSITION_END, t).emulateTransitionEnd(150);
      } else if (!this._isShown && this._backdrop) {
        Pt(this._backdrop).removeClass(Yt);var o = function () {
          e._removeBackdrop(), t && t();
        };Ge.supportsTransitionEnd() && Pt(this._element).hasClass(Qt) ? Pt(this._backdrop).one(Ge.TRANSITION_END, o).emulateTransitionEnd(150) : o();
      } else t && t();
    }, o.prototype._handleUpdate = function () {
      this._adjustDialog();
    }, o.prototype._adjustDialog = function () {
      var t = this._element.scrollHeight > document.documentElement.clientHeight;!this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px");
    }, o.prototype._resetAdjustments = function () {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }, o.prototype._checkScrollbar = function () {
      this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth();
    }, o.prototype._setScrollbar = function () {
      var t = parseInt(Pt(Gt).css("padding-right") || 0, 10);this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = t + this._scrollbarWidth + "px");
    }, o.prototype._resetScrollbar = function () {
      document.body.style.paddingRight = this._originalBodyPadding;
    }, o.prototype._getScrollbarWidth = function () {
      var t = document.createElement("div");t.className = Ft, document.body.appendChild(t);var e = t.offsetWidth - t.clientWidth;return document.body.removeChild(t), e;
    }, o._jQueryInterface = function (n, i) {
      return this.each(function () {
        var t = Pt(this).data(zt),
            e = Pt.extend({}, o.Default, Pt(this).data(), "object" === (void 0 === n ? "undefined" : _(n)) && n);if (t || (t = new o(this, e), Pt(this).data(zt, t)), "string" == typeof n) {
          if (void 0 === t[n]) throw new Error('No method named "' + n + '"');t[n](i);
        } else e.show && t.show(i);
      });
    }, w(o, null, [{ key: "VERSION", get: function () {
        return "4.0.0-alpha.6";
      } }, { key: "Default", get: function () {
        return Rt;
      } }]), o;
  }(), Pt(document).on(Bt.CLICK_DATA_API, Vt, function (t) {
    var e = this,
        n = void 0,
        i = Ge.getSelectorFromElement(this);i && (n = Pt(i)[0]);var o = Pt(n).data(zt) ? "toggle" : Pt.extend({}, Pt(n).data(), Pt(this).data());"A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();var r = Pt(n).one(Bt.SHOW, function (t) {
      t.isDefaultPrevented() || r.one(Bt.HIDDEN, function () {
        Pt(e).is(":visible") && e.focus();
      });
    });Zt._jQueryInterface.call(Pt(n), o, this);
  }), Pt.fn[Ht] = Zt._jQueryInterface, Pt.fn[Ht].Constructor = Zt, Pt.fn[Ht].noConflict = function () {
    return Pt.fn[Ht] = Wt, Zt._jQueryInterface;
  }, Jt = jQuery, te = "scrollspy", ne = "." + (ee = "bs.scrollspy"), ie = Jt.fn[te], oe = { offset: 10, method: "auto", target: "" }, re = { offset: "number", method: "string", target: "(string|element)" }, se = { ACTIVATE: "activate" + ne, SCROLL: "scroll" + ne, LOAD_DATA_API: "load" + ne + ".data-api" }, ae = "dropdown-item", le = "active", ue = '[data-spy="scroll"]', ce = ".active", de = "li", fe = ".nav-link", he = ".dropdown", pe = ".dropdown-item", me = ".dropdown-toggle", ge = "offset", ve = "position", ye = function () {
    function i(t, e) {
      var n = this;x(this, i), this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + fe + "," + this._config.target + " " + pe, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, Jt(this._scrollElement).on(se.SCROLL, function (t) {
        return n._process(t);
      }), this.refresh(), this._process();
    }return i.prototype.refresh = function () {
      var e = this,
          t = this._scrollElement !== this._scrollElement.window ? ve : ge,
          i = "auto" === this._config.method ? t : this._config.method,
          o = i === ve ? this._getScrollTop() : 0;this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), Jt.makeArray(Jt(this._selector)).map(function (t) {
        var e = void 0,
            n = Ge.getSelectorFromElement(t);return n && (e = Jt(n)[0]), e && (e.offsetWidth || e.offsetHeight) ? [Jt(e)[i]().top + o, n] : null;
      }).filter(function (t) {
        return t;
      }).sort(function (t, e) {
        return t[0] - e[0];
      }).forEach(function (t) {
        e._offsets.push(t[0]), e._targets.push(t[1]);
      });
    }, i.prototype.dispose = function () {
      Jt.removeData(this._element, ee), Jt(this._scrollElement).off(ne), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null;
    }, i.prototype._getConfig = function (t) {
      if ("string" != typeof (t = Jt.extend({}, oe, t)).target) {
        var e = Jt(t.target).attr("id");e || (e = Ge.getUID(te), Jt(t.target).attr("id", e)), t.target = "#" + e;
      }return Ge.typeCheckConfig(te, t, re), t;
    }, i.prototype._getScrollTop = function () {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }, i.prototype._getScrollHeight = function () {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }, i.prototype._getOffsetHeight = function () {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.offsetHeight;
    }, i.prototype._process = function () {
      var t = this._getScrollTop() + this._config.offset,
          e = this._getScrollHeight(),
          n = this._config.offset + e - this._getOffsetHeight();if (this._scrollHeight !== e && this.refresh(), n <= t) {
        var i = this._targets[this._targets.length - 1];this._activeTarget !== i && this._activate(i);
      } else {
        if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();for (var o = this._offsets.length; o--;) {
          this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o]);
        }
      }
    }, i.prototype._activate = function (e) {
      this._activeTarget = e, this._clear();var t = this._selector.split(",");t = t.map(function (t) {
        return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]';
      });var n = Jt(t.join(","));n.hasClass(ae) ? (n.closest(he).find(me).addClass(le), n.addClass(le)) : n.parents(de).find("> " + fe).addClass(le), Jt(this._scrollElement).trigger(se.ACTIVATE, { relatedTarget: e });
    }, i.prototype._clear = function () {
      Jt(this._selector).filter(ce).removeClass(le);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = Jt(this).data(ee),
            e = "object" === (void 0 === n ? "undefined" : _(n)) && n;if (t || (t = new i(this, e), Jt(this).data(ee, t)), "string" == typeof n) {
          if (void 0 === t[n]) throw new Error('No method named "' + n + '"');t[n]();
        }
      });
    }, w(i, null, [{ key: "VERSION", get: function () {
        return "4.0.0-alpha.6";
      } }, { key: "Default", get: function () {
        return oe;
      } }]), i;
  }(), Jt(window).on(se.LOAD_DATA_API, function () {
    for (var t = Jt.makeArray(Jt(ue)), e = t.length; e--;) {
      var n = Jt(t[e]);ye._jQueryInterface.call(n, n.data());
    }
  }), Jt.fn[te] = ye._jQueryInterface, Jt.fn[te].Constructor = ye, Jt.fn[te].noConflict = function () {
    return Jt.fn[te] = ie, ye._jQueryInterface;
  }, be = jQuery, we = "." + (_e = "bs.tab"), xe = be.fn.tab, Ce = { HIDE: "hide" + we, HIDDEN: "hidden" + we, SHOW: "show" + we, SHOWN: "shown" + we, CLICK_DATA_API: "click" + we + ".data-api" }, Ee = "dropdown-menu", Te = "active", Se = "disabled", Ie = "fade", Ae = "show", ke = ".dropdown", De = "ul:not(.dropdown-menu), ol:not(.dropdown-menu), nav:not(.dropdown-menu)", Oe = "> .nav-item .fade, > .fade", Ne = ".active", Le = "> .nav-item > .active, > .active", je = '[data-toggle="tab"], [data-toggle="pill"]', Pe = ".dropdown-toggle", He = "> .dropdown-menu .active", ze = function () {
    function i(t) {
      x(this, i), this._element = t;
    }return i.prototype.show = function () {
      var n = this;if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && be(this._element).hasClass(Te) || be(this._element).hasClass(Se))) {
        var t = void 0,
            i = void 0,
            e = be(this._element).closest(De)[0],
            o = Ge.getSelectorFromElement(this._element);e && (i = (i = be.makeArray(be(e).find(Ne)))[i.length - 1]);var r = be.Event(Ce.HIDE, { relatedTarget: this._element }),
            s = be.Event(Ce.SHOW, { relatedTarget: i });if (i && be(i).trigger(r), be(this._element).trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
          o && (t = be(o)[0]), this._activate(this._element, e);var a = function () {
            var t = be.Event(Ce.HIDDEN, { relatedTarget: n._element }),
                e = be.Event(Ce.SHOWN, { relatedTarget: i });be(i).trigger(t), be(n._element).trigger(e);
          };t ? this._activate(t, t.parentNode, a) : a();
        }
      }
    }, i.prototype.dispose = function () {
      be.removeClass(this._element, _e), this._element = null;
    }, i.prototype._activate = function (t, e, n) {
      var i = this,
          o = be(e).find(Le)[0],
          r = n && Ge.supportsTransitionEnd() && (o && be(o).hasClass(Ie) || Boolean(be(e).find(Oe)[0])),
          s = function () {
        return i._transitionComplete(t, o, r, n);
      };o && r ? be(o).one(Ge.TRANSITION_END, s).emulateTransitionEnd(150) : s(), o && be(o).removeClass(Ae);
    }, i.prototype._transitionComplete = function (t, e, n, i) {
      if (e) {
        be(e).removeClass(Te);var o = be(e.parentNode).find(He)[0];o && be(o).removeClass(Te), e.setAttribute("aria-expanded", !1);
      }if (be(t).addClass(Te), t.setAttribute("aria-expanded", !0), n ? (Ge.reflow(t), be(t).addClass(Ae)) : be(t).removeClass(Ie), t.parentNode && be(t.parentNode).hasClass(Ee)) {
        var r = be(t).closest(ke)[0];r && be(r).find(Pe).addClass(Te), t.setAttribute("aria-expanded", !0);
      }i && i();
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = be(this),
            e = t.data(_e);if (e || (e = new i(this), t.data(_e, e)), "string" == typeof n) {
          if (void 0 === e[n]) throw new Error('No method named "' + n + '"');e[n]();
        }
      });
    }, w(i, null, [{ key: "VERSION", get: function () {
        return "4.0.0-alpha.6";
      } }]), i;
  }(), be(document).on(Ce.CLICK_DATA_API, je, function (t) {
    t.preventDefault(), ze._jQueryInterface.call(be(this), "show");
  }), be.fn.tab = ze._jQueryInterface, be.fn.tab.Constructor = ze, be.fn.tab.noConflict = function () {
    return be.fn.tab = xe, ze._jQueryInterface;
  }, function (c) {
    if ("undefined" == typeof Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");var e = "tooltip",
        i = "bs.tooltip",
        t = "." + i,
        n = c.fn[e],
        o = { animation: !0, template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, selector: !1, placement: "top", offset: "0 0", constraints: [], container: !1 },
        r = { animation: "boolean", template: "string", title: "(string|element|function)", trigger: "string", delay: "(number|object)", html: "boolean", selector: "(string|boolean)", placement: "(string|function)", offset: "string", constraints: "array", container: "(string|element|boolean)" },
        s = { TOP: "bottom center", RIGHT: "middle left", BOTTOM: "top center", LEFT: "middle right" },
        a = "show",
        d = "out",
        l = { HIDE: "hide" + t, HIDDEN: "hidden" + t, SHOW: "show" + t, SHOWN: "shown" + t, INSERTED: "inserted" + t, CLICK: "click" + t, FOCUSIN: "focusin" + t, FOCUSOUT: "focusout" + t, MOUSEENTER: "mouseenter" + t, MOUSELEAVE: "mouseleave" + t },
        f = "fade",
        h = "show",
        p = ".tooltip-inner",
        m = { element: !1, enabled: !1 },
        g = "hover",
        v = "focus",
        y = "click",
        b = "manual",
        u = function () {
      function u(t, e) {
        x(this, u), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._isTransitioning = !1, this._tether = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners();
      }return u.prototype.enable = function () {
        this._isEnabled = !0;
      }, u.prototype.disable = function () {
        this._isEnabled = !1;
      }, u.prototype.toggleEnabled = function () {
        this._isEnabled = !this._isEnabled;
      }, u.prototype.toggle = function (t) {
        if (t) {
          var e = this.constructor.DATA_KEY,
              n = c(t.currentTarget).data(e);n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), c(t.currentTarget).data(e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n);
        } else {
          if (c(this.getTipElement()).hasClass(h)) return void this._leave(null, this);this._enter(null, this);
        }
      }, u.prototype.dispose = function () {
        clearTimeout(this._timeout), this.cleanupTether(), c.removeData(this.element, this.constructor.DATA_KEY), c(this.element).off(this.constructor.EVENT_KEY), c(this.element).closest(".modal").off("hide.bs.modal"), this.tip && c(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null;
      }, u.prototype.show = function () {
        var e = this;if ("none" === c(this.element).css("display")) throw new Error("Please use show on visible elements");var t = c.Event(this.constructor.Event.SHOW);if (this.isWithContent() && this._isEnabled) {
          if (this._isTransitioning) throw new Error("Tooltip is transitioning");c(this.element).trigger(t);var n = c.contains(this.element.ownerDocument.documentElement, this.element);if (t.isDefaultPrevented() || !n) return;var i = this.getTipElement(),
              o = Ge.getUID(this.constructor.NAME);i.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && c(i).addClass(f);var r = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement,
              s = this._getAttachment(r),
              a = !1 === this.config.container ? document.body : c(this.config.container);c(i).data(this.constructor.DATA_KEY, this).appendTo(a), c(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({ attachment: s, element: i, target: this.element, classes: m, classPrefix: "bs-tether", offset: this.config.offset, constraints: this.config.constraints, addTargetClasses: !1 }), Ge.reflow(i), this._tether.position(), c(i).addClass(h);var l = function () {
            var t = e._hoverState;e._hoverState = null, e._isTransitioning = !1, c(e.element).trigger(e.constructor.Event.SHOWN), t === d && e._leave(null, e);
          };if (Ge.supportsTransitionEnd() && c(this.tip).hasClass(f)) return this._isTransitioning = !0, void c(this.tip).one(Ge.TRANSITION_END, l).emulateTransitionEnd(u._TRANSITION_DURATION);l();
        }
      }, u.prototype.hide = function (t) {
        var e = this,
            n = this.getTipElement(),
            i = c.Event(this.constructor.Event.HIDE);if (this._isTransitioning) throw new Error("Tooltip is transitioning");var o = function () {
          e._hoverState !== a && n.parentNode && n.parentNode.removeChild(n), e.element.removeAttribute("aria-describedby"), c(e.element).trigger(e.constructor.Event.HIDDEN), e._isTransitioning = !1, e.cleanupTether(), t && t();
        };c(this.element).trigger(i), i.isDefaultPrevented() || (c(n).removeClass(h), this._activeTrigger[y] = !1, this._activeTrigger[v] = !1, this._activeTrigger[g] = !1, Ge.supportsTransitionEnd() && c(this.tip).hasClass(f) ? (this._isTransitioning = !0, c(n).one(Ge.TRANSITION_END, o).emulateTransitionEnd(150)) : o(), this._hoverState = "");
      }, u.prototype.isWithContent = function () {
        return Boolean(this.getTitle());
      }, u.prototype.getTipElement = function () {
        return this.tip = this.tip || c(this.config.template)[0];
      }, u.prototype.setContent = function () {
        var t = c(this.getTipElement());this.setElementContent(t.find(p), this.getTitle()), t.removeClass(f + " " + h), this.cleanupTether();
      }, u.prototype.setElementContent = function (t, e) {
        var n = this.config.html;"object" === (void 0 === e ? "undefined" : _(e)) && (e.nodeType || e.jquery) ? n ? c(e).parent().is(t) || t.empty().append(e) : t.text(c(e).text()) : t[n ? "html" : "text"](e);
      }, u.prototype.getTitle = function () {
        var t = this.element.getAttribute("data-original-title");return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t;
      }, u.prototype.cleanupTether = function () {
        this._tether && this._tether.destroy();
      }, u.prototype._getAttachment = function (t) {
        return s[t.toUpperCase()];
      }, u.prototype._setListeners = function () {
        var i = this;this.config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) c(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (t) {
            return i.toggle(t);
          });else if (t !== b) {
            var e = t === g ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN,
                n = t === g ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;c(i.element).on(e, i.config.selector, function (t) {
              return i._enter(t);
            }).on(n, i.config.selector, function (t) {
              return i._leave(t);
            });
          }c(i.element).closest(".modal").on("hide.bs.modal", function () {
            return i.hide();
          });
        }), this.config.selector ? this.config = c.extend({}, this.config, { trigger: "manual", selector: "" }) : this._fixTitle();
      }, u.prototype._fixTitle = function () {
        var t = _(this.element.getAttribute("data-original-title"));(this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
      }, u.prototype._enter = function (t, e) {
        var n = this.constructor.DATA_KEY;(e = e || c(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), c(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusin" === t.type ? v : g] = !0), c(e.getTipElement()).hasClass(h) || e._hoverState === a ? e._hoverState = a : (clearTimeout(e._timeout), e._hoverState = a, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function () {
          e._hoverState === a && e.show();
        }, e.config.delay.show) : e.show());
      }, u.prototype._leave = function (t, e) {
        var n = this.constructor.DATA_KEY;(e = e || c(t.currentTarget).data(n)) || (e = new this.constructor(t.currentTarget, this._getDelegateConfig()), c(t.currentTarget).data(n, e)), t && (e._activeTrigger["focusout" === t.type ? v : g] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = d, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function () {
          e._hoverState === d && e.hide();
        }, e.config.delay.hide) : e.hide());
      }, u.prototype._isWithActiveTrigger = function () {
        for (var t in this._activeTrigger) if (this._activeTrigger[t]) return !0;return !1;
      }, u.prototype._getConfig = function (t) {
        return (t = c.extend({}, this.constructor.Default, c(this.element).data(), t)).delay && "number" == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }), Ge.typeCheckConfig(e, t, this.constructor.DefaultType), t;
      }, u.prototype._getDelegateConfig = function () {
        var t = {};if (this.config) for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);return t;
      }, u._jQueryInterface = function (n) {
        return this.each(function () {
          var t = c(this).data(i),
              e = "object" === (void 0 === n ? "undefined" : _(n)) && n;if ((t || !/dispose|hide/.test(n)) && (t || (t = new u(this, e), c(this).data(i, t)), "string" == typeof n)) {
            if (void 0 === t[n]) throw new Error('No method named "' + n + '"');t[n]();
          }
        });
      }, w(u, null, [{ key: "VERSION", get: function () {
          return "4.0.0-alpha.6";
        } }, { key: "Default", get: function () {
          return o;
        } }, { key: "NAME", get: function () {
          return e;
        } }, { key: "DATA_KEY", get: function () {
          return i;
        } }, { key: "Event", get: function () {
          return l;
        } }, { key: "EVENT_KEY", get: function () {
          return t;
        } }, { key: "DefaultType", get: function () {
          return r;
        } }]), u;
    }();return c.fn[e] = u._jQueryInterface, c.fn[e].Constructor = u, c.fn[e].noConflict = function () {
      return c.fn[e] = n, u._jQueryInterface;
    }, u;
  }(jQuery));Me = jQuery, We = "popover", qe = "." + (Re = "bs.popover"), Be = Me.fn[We], Fe = Me.extend({}, Ze.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), Ue = Me.extend({}, Ze.DefaultType, { content: "(string|element|function)" }), $e = "fade", Ye = ".popover-title", Ke = ".popover-content", Ve = { HIDE: "hide" + qe, HIDDEN: "hidden" + qe, SHOW: (Qe = "show") + qe, SHOWN: "shown" + qe, INSERTED: "inserted" + qe, CLICK: "click" + qe, FOCUSIN: "focusin" + qe, FOCUSOUT: "focusout" + qe, MOUSEENTER: "mouseenter" + qe, MOUSELEAVE: "mouseleave" + qe }, Xe = function (t) {
    function i() {
      return x(this, i), function (t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !e || "object" != typeof e && "function" != typeof e ? t : e;
      }(this, t.apply(this, arguments));
    }return function (t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
    }(i, t), i.prototype.isWithContent = function () {
      return this.getTitle() || this._getContent();
    }, i.prototype.getTipElement = function () {
      return this.tip = this.tip || Me(this.config.template)[0];
    }, i.prototype.setContent = function () {
      var t = Me(this.getTipElement());this.setElementContent(t.find(Ye), this.getTitle()), this.setElementContent(t.find(Ke), this._getContent()), t.removeClass($e + " " + Qe), this.cleanupTether();
    }, i.prototype._getContent = function () {
      return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content);
    }, i._jQueryInterface = function (n) {
      return this.each(function () {
        var t = Me(this).data(Re),
            e = "object" === (void 0 === n ? "undefined" : _(n)) ? n : null;if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, e), Me(this).data(Re, t)), "string" == typeof n)) {
          if (void 0 === t[n]) throw new Error('No method named "' + n + '"');t[n]();
        }
      });
    }, w(i, null, [{ key: "VERSION", get: function () {
        return "4.0.0-alpha.6";
      } }, { key: "Default", get: function () {
        return Fe;
      } }, { key: "NAME", get: function () {
        return We;
      } }, { key: "DATA_KEY", get: function () {
        return Re;
      } }, { key: "Event", get: function () {
        return Ve;
      } }, { key: "EVENT_KEY", get: function () {
        return qe;
      } }, { key: "DefaultType", get: function () {
        return Ue;
      } }]), i;
  }(Ze), Me.fn[We] = Xe._jQueryInterface, Me.fn[We].Constructor = Xe, Me.fn[We].noConflict = function () {
    return Me.fn[We] = Be, Xe._jQueryInterface;
  };
}(), function (a) {
  "use strict";
  function l(t) {
    return t.is('[type="checkbox"]') ? t.prop("checked") : t.is('[type="radio"]') ? !!a('[name="' + t.attr("name") + '"]:checked').length : a.trim(t.val());
  }var s = function (t, e) {
    for (var n in this.options = e, this.$element = a(t), this.$inputs = this.$element.find(s.INPUT_SELECTOR), this.$btn = a('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), e.errors = a.extend({}, s.DEFAULTS.errors, e.errors), e.custom) if (!e.errors[n]) throw new Error("Missing default error message for custom validator: " + n);a.extend(s.VALIDATORS, e.custom), this.$element.attr("novalidate", !0), this.toggleSubmit(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", s.INPUT_SELECTOR, a.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", a.proxy(this.onSubmit, this)), this.$element.find("[data-match]").each(function () {
      var e = a(this),
          t = e.data("match");a(t).on("input.bs.validator", function (t) {
        l(e) && e.trigger("input.bs.validator");
      });
    });
  };function e(i) {
    return this.each(function () {
      var t = a(this),
          e = a.extend({}, s.DEFAULTS, t.data(), "object" == typeof i && i),
          n = t.data("bs.validator");(n || "destroy" != i) && (n || t.data("bs.validator", n = new s(this, e)), "string" == typeof i && n[i]());
    });
  }s.INPUT_SELECTOR = ':input:not([type="submit"], button):enabled:visible', s.FOCUS_OFFSET = 20, s.DEFAULTS = { delay: 500, html: !1, disable: !0, focus: !0, custom: {}, errors: { match: "Does not match", minlength: "Not long enough" }, feedback: { success: "glyphicon-ok", error: "glyphicon-remove" } }, s.VALIDATORS = { native: function (t) {
      var e = t[0];return !e.checkValidity || e.checkValidity();
    }, match: function (t) {
      var e = t.data("match");return !t.val() || t.val() === a(e).val();
    }, minlength: function (t) {
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
        var n = r(t);!~o.indexOf(n) && o.push(n);
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
  "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(window.jQuery || window.Zepto);
}(function (c) {
  var d,
      i,
      f,
      o,
      h,
      e,
      l = "Close",
      u = "BeforeClose",
      p = "MarkupParse",
      m = "Open",
      g = ".mfp",
      v = "mfp-ready",
      n = "mfp-removing",
      s = "mfp-prevent-close",
      t = function () {},
      a = !!window.jQuery,
      y = c(window),
      b = function (t, e) {
    d.ev.on("mfp" + t + g, e);
  },
      _ = function (t, e, n, i) {
    var o = document.createElement("div");return o.className = "mfp-" + t, n && (o.innerHTML = n), i ? e && e.appendChild(o) : (o = c(o), e && o.appendTo(e)), o;
  },
      w = function (t, e) {
    d.ev.triggerHandler("mfp" + t, e), d.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), d.st.callbacks[t] && d.st.callbacks[t].apply(d, c.isArray(e) ? e : [e]));
  },
      x = function (t) {
    return t === e && d.currTemplate.closeBtn || (d.currTemplate.closeBtn = c(d.st.closeMarkup.replace("%title%", d.st.tClose)), e = t), d.currTemplate.closeBtn;
  },
      r = function () {
    c.magnificPopup.instance || ((d = new t()).init(), c.magnificPopup.instance = d);
  };t.prototype = { constructor: t, init: function () {
      var t = navigator.appVersion;d.isLowIE = d.isIE8 = document.all && !document.addEventListener, d.isAndroid = /android/gi.test(t), d.isIOS = /iphone|ipad|ipod/gi.test(t), d.supportsTransition = function () {
        var t = document.createElement("p").style,
            e = ["ms", "O", "Moz", "Webkit"];if (void 0 !== t.transition) return !0;for (; e.length;) if (e.pop() + "Transition" in t) return !0;return !1;
      }(), d.probablyMobile = d.isAndroid || d.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), f = c(document), d.popupsCache = {};
    }, open: function (t) {
      var e;if (!1 === t.isObj) {
        d.items = t.items.toArray(), d.index = 0;var n,
            i = t.items;for (e = 0; e < i.length; e++) if ((n = i[e]).parsed && (n = n.el[0]), n === t.el[0]) {
          d.index = e;break;
        }
      } else d.items = c.isArray(t.items) ? t.items : [t.items], d.index = t.index || 0;if (!d.isOpen) {
        d.types = [], h = "", t.mainEl && t.mainEl.length ? d.ev = t.mainEl.eq(0) : d.ev = f, t.key ? (d.popupsCache[t.key] || (d.popupsCache[t.key] = {}), d.currTemplate = d.popupsCache[t.key]) : d.currTemplate = {}, d.st = c.extend(!0, {}, c.magnificPopup.defaults, t), d.fixedContentPos = "auto" === d.st.fixedContentPos ? !d.probablyMobile : d.st.fixedContentPos, d.st.modal && (d.st.closeOnContentClick = !1, d.st.closeOnBgClick = !1, d.st.showCloseBtn = !1, d.st.enableEscapeKey = !1), d.bgOverlay || (d.bgOverlay = _("bg").on("click" + g, function () {
          d.close();
        }), d.wrap = _("wrap").attr("tabindex", -1).on("click" + g, function (t) {
          d._checkIfClose(t.target) && d.close();
        }), d.container = _("container", d.wrap)), d.contentContainer = _("content"), d.st.preloader && (d.preloader = _("preloader", d.container, d.st.tLoading));var o = c.magnificPopup.modules;for (e = 0; e < o.length; e++) {
          var r = o[e];r = r.charAt(0).toUpperCase() + r.slice(1), d["init" + r].call(d);
        }w("BeforeOpen"), d.st.showCloseBtn && (d.st.closeBtnInside ? (b(p, function (t, e, n, i) {
          n.close_replaceWith = x(i.type);
        }), h += " mfp-close-btn-in") : d.wrap.append(x())), d.st.alignTop && (h += " mfp-align-top"), d.fixedContentPos ? d.wrap.css({ overflow: d.st.overflowY, overflowX: "hidden", overflowY: d.st.overflowY }) : d.wrap.css({ top: y.scrollTop(), position: "absolute" }), (!1 === d.st.fixedBgPos || "auto" === d.st.fixedBgPos && !d.fixedContentPos) && d.bgOverlay.css({ height: f.height(), position: "absolute" }), d.st.enableEscapeKey && f.on("keyup" + g, function (t) {
          27 === t.keyCode && d.close();
        }), y.on("resize" + g, function () {
          d.updateSize();
        }), d.st.closeOnContentClick || (h += " mfp-auto-cursor"), h && d.wrap.addClass(h);var s = d.wH = y.height(),
            a = {};if (d.fixedContentPos && d._hasScrollBar(s)) {
          var l = d._getScrollbarSize();l && (a.marginRight = l);
        }d.fixedContentPos && (d.isIE7 ? c("body, html").css("overflow", "hidden") : a.overflow = "hidden");var u = d.st.mainClass;return d.isIE7 && (u += " mfp-ie7"), u && d._addClassToMFP(u), d.updateItemHTML(), w("BuildControls"), c("html").css(a), d.bgOverlay.add(d.wrap).prependTo(d.st.prependTo || c(document.body)), d._lastFocusedEl = document.activeElement, setTimeout(function () {
          d.content ? (d._addClassToMFP(v), d._setFocus()) : d.bgOverlay.addClass(v), f.on("focusin" + g, d._onFocusIn);
        }, 16), d.isOpen = !0, d.updateSize(s), w(m), t;
      }d.updateItemHTML();
    }, close: function () {
      d.isOpen && (w(u), d.isOpen = !1, d.st.removalDelay && !d.isLowIE && d.supportsTransition ? (d._addClassToMFP(n), setTimeout(function () {
        d._close();
      }, d.st.removalDelay)) : d._close());
    }, _close: function () {
      w(l);var t = n + " " + v + " ";if (d.bgOverlay.detach(), d.wrap.detach(), d.container.empty(), d.st.mainClass && (t += d.st.mainClass + " "), d._removeClassFromMFP(t), d.fixedContentPos) {
        var e = { marginRight: "" };d.isIE7 ? c("body, html").css("overflow", "") : e.overflow = "", c("html").css(e);
      }f.off("keyup.mfp focusin" + g), d.ev.off(g), d.wrap.attr("class", "mfp-wrap").removeAttr("style"), d.bgOverlay.attr("class", "mfp-bg"), d.container.attr("class", "mfp-container"), !d.st.showCloseBtn || d.st.closeBtnInside && !0 !== d.currTemplate[d.currItem.type] || d.currTemplate.closeBtn && d.currTemplate.closeBtn.detach(), d.st.autoFocusLast && d._lastFocusedEl && c(d._lastFocusedEl).focus(), d.currItem = null, d.content = null, d.currTemplate = null, d.prevHeight = 0, w("AfterClose");
    }, updateSize: function (t) {
      if (d.isIOS) {
        var e = document.documentElement.clientWidth / window.innerWidth,
            n = window.innerHeight * e;d.wrap.css("height", n), d.wH = n;
      } else d.wH = t || y.height();d.fixedContentPos || d.wrap.css("height", d.wH), w("Resize");
    }, updateItemHTML: function () {
      var t = d.items[d.index];d.contentContainer.detach(), d.content && d.content.detach(), t.parsed || (t = d.parseEl(d.index));var e = t.type;if (w("BeforeChange", [d.currItem ? d.currItem.type : "", e]), d.currItem = t, !d.currTemplate[e]) {
        var n = !!d.st[e] && d.st[e].markup;w("FirstMarkupParse", n), d.currTemplate[e] = !n || c(n);
      }o && o !== t.type && d.container.removeClass("mfp-" + o + "-holder");var i = d["get" + e.charAt(0).toUpperCase() + e.slice(1)](t, d.currTemplate[e]);d.appendContent(i, e), t.preloaded = !0, w("Change", t), o = t.type, d.container.prepend(d.contentContainer), w("AfterChange");
    }, appendContent: function (t, e) {
      (d.content = t) ? d.st.showCloseBtn && d.st.closeBtnInside && !0 === d.currTemplate[e] ? d.content.find(".mfp-close").length || d.content.append(x()) : d.content = t : d.content = "", w("BeforeAppend"), d.container.addClass("mfp-" + e + "-holder"), d.contentContainer.append(d.content);
    }, parseEl: function (t) {
      var e,
          n = d.items[t];if ((n = n.tagName ? { el: c(n) } : (e = n.type, { data: n, src: n.src })).el) {
        for (var i = d.types, o = 0; o < i.length; o++) if (n.el.hasClass("mfp-" + i[o])) {
          e = i[o];break;
        }n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"));
      }return n.type = e || d.st.type || "inline", n.index = t, n.parsed = !0, d.items[t] = n, w("ElementParse", n), d.items[t];
    }, addGroup: function (e, n) {
      var t = function (t) {
        t.mfpEl = this, d._openClick(t, e, n);
      };n || (n = {});var i = "click.magnificPopup";n.mainEl = e, n.items ? (n.isObj = !0, e.off(i).on(i, t)) : (n.isObj = !1, n.delegate ? e.off(i).on(i, n.delegate, t) : (n.items = e).off(i).on(i, t));
    }, _openClick: function (t, e, n) {
      if ((void 0 !== n.midClick ? n.midClick : c.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
        var i = void 0 !== n.disableOn ? n.disableOn : c.magnificPopup.defaults.disableOn;if (i) if (c.isFunction(i)) {
          if (!i.call(d)) return !0;
        } else if (y.width() < i) return !0;t.type && (t.preventDefault(), d.isOpen && t.stopPropagation()), n.el = c(t.mfpEl), n.delegate && (n.items = e.find(n.delegate)), d.open(n);
      }
    }, updateStatus: function (t, e) {
      if (d.preloader) {
        i !== t && d.container.removeClass("mfp-s-" + i), e || "loading" !== t || (e = d.st.tLoading);var n = { status: t, text: e };w("UpdateStatus", n), t = n.status, e = n.text, d.preloader.html(e), d.preloader.find("a").on("click", function (t) {
          t.stopImmediatePropagation();
        }), d.container.addClass("mfp-s-" + t), i = t;
      }
    }, _checkIfClose: function (t) {
      if (!c(t).hasClass(s)) {
        var e = d.st.closeOnContentClick,
            n = d.st.closeOnBgClick;if (e && n) return !0;if (!d.content || c(t).hasClass("mfp-close") || d.preloader && t === d.preloader[0]) return !0;if (t === d.content[0] || c.contains(d.content[0], t)) {
          if (e) return !0;
        } else if (n && c.contains(document, t)) return !0;return !1;
      }
    }, _addClassToMFP: function (t) {
      d.bgOverlay.addClass(t), d.wrap.addClass(t);
    }, _removeClassFromMFP: function (t) {
      this.bgOverlay.removeClass(t), d.wrap.removeClass(t);
    }, _hasScrollBar: function (t) {
      return (d.isIE7 ? f.height() : document.body.scrollHeight) > (t || y.height());
    }, _setFocus: function () {
      (d.st.focus ? d.content.find(d.st.focus).eq(0) : d.wrap).focus();
    }, _onFocusIn: function (t) {
      if (t.target !== d.wrap[0] && !c.contains(d.wrap[0], t.target)) return d._setFocus(), !1;
    }, _parseMarkup: function (o, t, e) {
      var r;e.data && (t = c.extend(e.data, t)), w(p, [o, t, e]), c.each(t, function (t, e) {
        if (void 0 === e || !1 === e) return !0;if (1 < (r = t.split("_")).length) {
          var n = o.find(g + "-" + r[0]);if (0 < n.length) {
            var i = r[1];"replaceWith" === i ? n[0] !== e[0] && n.replaceWith(e) : "img" === i ? n.is("img") ? n.attr("src", e) : n.replaceWith(c("<img>").attr("src", e).attr("class", n.attr("class"))) : n.attr(r[1], e);
          }
        } else o.find(g + "-" + t).html(e);
      });
    }, _getScrollbarSize: function () {
      if (void 0 === d.scrollbarSize) {
        var t = document.createElement("div");t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), d.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t);
      }return d.scrollbarSize;
    } }, c.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function (t, e) {
      return r(), (t = t ? c.extend(!0, {}, t) : {}).isObj = !0, t.index = e || 0, this.instance.open(t);
    }, close: function () {
      return c.magnificPopup.instance && c.magnificPopup.instance.close();
    }, registerModule: function (t, e) {
      e.options && (c.magnificPopup.defaults[t] = e.options), c.extend(this.proto, e.proto), this.modules.push(t);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: !0 } }, c.fn.magnificPopup = function (t) {
    r();var e = c(this);if ("string" == typeof t) {
      if ("open" === t) {
        var n,
            i = a ? e.data("magnificPopup") : e[0].magnificPopup,
            o = parseInt(arguments[1], 10) || 0;n = i.items ? i.items[o] : (n = e, i.delegate && (n = n.find(i.delegate)), n.eq(o)), d._openClick({ mfpEl: n }, e, i);
      } else d.isOpen && d[t].apply(d, Array.prototype.slice.call(arguments, 1));
    } else t = c.extend(!0, {}, t), a ? e.data("magnificPopup", t) : e[0].magnificPopup = t, d.addGroup(e, t);return e;
  };var C,
      E,
      T,
      S = "inline",
      I = function () {
    T && (E.after(T.addClass(C)).detach(), T = null);
  };c.magnificPopup.registerModule(S, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () {
        d.types.push(S), b(l + "." + S, function () {
          I();
        });
      }, getInline: function (t, e) {
        if (I(), t.src) {
          var n = d.st.inline,
              i = c(t.src);if (i.length) {
            var o = i[0].parentNode;o && o.tagName && (E || (C = n.hiddenClass, E = _(C), C = "mfp-" + C), T = i.after(E).detach().removeClass(C)), d.updateStatus("ready");
          } else d.updateStatus("error", n.tNotFound), i = c("<div>");return t.inlineElement = i;
        }return d.updateStatus("ready"), d._parseMarkup(e, {}, t), e;
      } } });var A,
      k = "ajax",
      D = function () {
    A && c(document.body).removeClass(A);
  },
      O = function () {
    D(), d.req && d.req.abort();
  };c.magnificPopup.registerModule(k, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () {
        d.types.push(k), A = d.st.ajax.cursor, b(l + "." + k, O), b("BeforeChange." + k, O);
      }, getAjax: function (o) {
        A && c(document.body).addClass(A), d.updateStatus("loading");var t = c.extend({ url: o.src, success: function (t, e, n) {
            var i = { data: t, xhr: n };w("ParseAjax", i), d.appendContent(c(i.data), k), o.finished = !0, D(), d._setFocus(), setTimeout(function () {
              d.wrap.addClass(v);
            }, 16), d.updateStatus("ready"), w("AjaxContentAdded");
          }, error: function () {
            D(), o.finished = o.loadError = !0, d.updateStatus("error", d.st.ajax.tError.replace("%url%", o.src));
          } }, d.st.ajax.settings);return d.req = c.ajax(t), "";
      } } });var N;c.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () {
        var t = d.st.image,
            e = ".image";d.types.push("image"), b(m + e, function () {
          "image" === d.currItem.type && t.cursor && c(document.body).addClass(t.cursor);
        }), b(l + e, function () {
          t.cursor && c(document.body).removeClass(t.cursor), y.off("resize" + g);
        }), b("Resize" + e, d.resizeImage), d.isLowIE && b("AfterChange", d.resizeImage);
      }, resizeImage: function () {
        var t = d.currItem;if (t && t.img && d.st.image.verticalFit) {
          var e = 0;d.isLowIE && (e = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", d.wH - e);
        }
      }, _onImageHasSize: function (t) {
        t.img && (t.hasSize = !0, N && clearInterval(N), t.isCheckingImgSize = !1, w("ImageHasSize", t), t.imgHidden && (d.content && d.content.removeClass("mfp-loading"), t.imgHidden = !1));
      }, findImageSize: function (e) {
        var n = 0,
            i = e.img[0],
            o = function (t) {
          N && clearInterval(N), N = setInterval(function () {
            0 < i.naturalWidth ? d._onImageHasSize(e) : (200 < n && clearInterval(N), 3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500));
          }, t);
        };o(1);
      }, getImage: function (t, e) {
        var n = 0,
            i = function () {
          t && (t.img[0].complete ? (t.img.off(".mfploader"), t === d.currItem && (d._onImageHasSize(t), d.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, w("ImageLoadComplete")) : ++n < 200 ? setTimeout(i, 100) : o());
        },
            o = function () {
          t && (t.img.off(".mfploader"), t === d.currItem && (d._onImageHasSize(t), d.updateStatus("error", r.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0);
        },
            r = d.st.image,
            s = e.find(".mfp-img");if (s.length) {
          var a = document.createElement("img");a.className = "mfp-img", t.el && t.el.find("img").length && (a.alt = t.el.find("img").attr("alt")), t.img = c(a).on("load.mfploader", i).on("error.mfploader", o), a.src = t.src, s.is("img") && (t.img = t.img.clone()), 0 < (a = t.img[0]).naturalWidth ? t.hasSize = !0 : a.width || (t.hasSize = !1);
        }return d._parseMarkup(e, { title: function (t) {
            if (t.data && void 0 !== t.data.title) return t.data.title;var e = d.st.image.titleSrc;if (e) {
              if (c.isFunction(e)) return e.call(d, t);if (t.el) return t.el.attr(e) || "";
            }return "";
          }(t), img_replaceWith: t.img }, t), d.resizeImage(), t.hasSize ? (N && clearInterval(N), t.loadError ? (e.addClass("mfp-loading"), d.updateStatus("error", r.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), d.updateStatus("ready"))) : (d.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), d.findImageSize(t))), e;
      } } });var L;c.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (t) {
        return t.is("img") ? t : t.find("img");
      } }, proto: { initZoom: function () {
        var t,
            r = d.st.zoom,
            e = ".zoom";if (r.enabled && d.supportsTransition) {
          var n,
              i,
              o = r.duration,
              s = function (t) {
            var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                n = "all " + r.duration / 1e3 + "s " + r.easing,
                i = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                o = "transition";return i["-webkit-" + o] = i["-moz-" + o] = i["-o-" + o] = i[o] = n, e.css(i), e;
          },
              a = function () {
            d.content.css("visibility", "visible");
          };b("BuildControls" + e, function () {
            if (d._allowZoom()) {
              if (clearTimeout(n), d.content.css("visibility", "hidden"), !(t = d._getItemToZoom())) return void a();(i = s(t)).css(d._getOffset()), d.wrap.append(i), n = setTimeout(function () {
                i.css(d._getOffset(!0)), n = setTimeout(function () {
                  a(), setTimeout(function () {
                    i.remove(), t = i = null, w("ZoomAnimationEnded");
                  }, 16);
                }, o);
              }, 16);
            }
          }), b(u + e, function () {
            if (d._allowZoom()) {
              if (clearTimeout(n), d.st.removalDelay = o, !t) {
                if (!(t = d._getItemToZoom())) return;i = s(t);
              }i.css(d._getOffset(!0)), d.wrap.append(i), d.content.css("visibility", "hidden"), setTimeout(function () {
                i.css(d._getOffset());
              }, 16);
            }
          }), b(l + e, function () {
            d._allowZoom() && (a(), i && i.remove(), t = null);
          });
        }
      }, _allowZoom: function () {
        return "image" === d.currItem.type;
      }, _getItemToZoom: function () {
        return !!d.currItem.hasSize && d.currItem.img;
      }, _getOffset: function (t) {
        var e,
            n = (e = t ? d.currItem.img : d.st.zoom.opener(d.currItem.el || d.currItem)).offset(),
            i = parseInt(e.css("padding-top"), 10),
            o = parseInt(e.css("padding-bottom"), 10);n.top -= c(window).scrollTop() - i;var r = { width: e.width(), height: (a ? e.innerHeight() : e[0].offsetHeight) - o - i };return void 0 === L && (L = void 0 !== document.createElement("p").style.MozTransform), L ? r["-moz-transform"] = r.transform = "translate(" + n.left + "px," + n.top + "px)" : (r.left = n.left, r.top = n.top), r;
      } } });var j = "iframe",
      P = function (t) {
    if (d.currTemplate[j]) {
      var e = d.currTemplate[j].find("iframe");e.length && (t || (e[0].src = "//about:blank"), d.isIE8 && e.css("display", t ? "block" : "none"));
    }
  };c.magnificPopup.registerModule(j, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () {
        d.types.push(j), b("BeforeChange", function (t, e, n) {
          e !== n && (e === j ? P() : n === j && P(!0));
        }), b(l + "." + j, function () {
          P();
        });
      }, getIframe: function (t, e) {
        var n = t.src,
            i = d.st.iframe;c.each(i.patterns, function () {
          if (-1 < n.indexOf(this.index)) return this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1;
        });var o = {};return i.srcAction && (o[i.srcAction] = n), d._parseMarkup(e, o, t), d.updateStatus("ready"), e;
      } } });var H = function (t) {
    var e = d.items.length;return e - 1 < t ? t - e : t < 0 ? e + t : t;
  },
      z = function (t, e, n) {
    return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n);
  };c.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () {
        var r = d.st.gallery,
            t = ".mfp-gallery";if (d.direction = !0, !r || !r.enabled) return !1;h += " mfp-gallery", b(m + t, function () {
          r.navigateByImgClick && d.wrap.on("click" + t, ".mfp-img", function () {
            if (1 < d.items.length) return d.next(), !1;
          }), f.on("keydown" + t, function (t) {
            37 === t.keyCode ? d.prev() : 39 === t.keyCode && d.next();
          });
        }), b("UpdateStatus" + t, function (t, e) {
          e.text && (e.text = z(e.text, d.currItem.index, d.items.length));
        }), b(p + t, function (t, e, n, i) {
          var o = d.items.length;n.counter = 1 < o ? z(r.tCounter, i.index, o) : "";
        }), b("BuildControls" + t, function () {
          if (1 < d.items.length && r.arrows && !d.arrowLeft) {
            var t = r.arrowMarkup,
                e = d.arrowLeft = c(t.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                n = d.arrowRight = c(t.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(s);e.click(function () {
              d.prev();
            }), n.click(function () {
              d.next();
            }), d.container.append(e.add(n));
          }
        }), b("Change" + t, function () {
          d._preloadTimeout && clearTimeout(d._preloadTimeout), d._preloadTimeout = setTimeout(function () {
            d.preloadNearbyImages(), d._preloadTimeout = null;
          }, 16);
        }), b(l + t, function () {
          f.off(t), d.wrap.off("click" + t), d.arrowRight = d.arrowLeft = null;
        });
      }, next: function () {
        d.direction = !0, d.index = H(d.index + 1), d.updateItemHTML();
      }, prev: function () {
        d.direction = !1, d.index = H(d.index - 1), d.updateItemHTML();
      }, goTo: function (t) {
        d.direction = t >= d.index, d.index = t, d.updateItemHTML();
      }, preloadNearbyImages: function () {
        var t,
            e = d.st.gallery.preload,
            n = Math.min(e[0], d.items.length),
            i = Math.min(e[1], d.items.length);for (t = 1; t <= (d.direction ? i : n); t++) d._preloadItem(d.index + t);for (t = 1; t <= (d.direction ? n : i); t++) d._preloadItem(d.index - t);
      }, _preloadItem: function (t) {
        if (t = H(t), !d.items[t].preloaded) {
          var e = d.items[t];e.parsed || (e = d.parseEl(t)), w("LazyLoad", e), "image" === e.type && (e.img = c('<img class="mfp-img" />').on("load.mfploader", function () {
            e.hasSize = !0;
          }).on("error.mfploader", function () {
            e.hasSize = !0, e.loadError = !0, w("LazyLoadError", e);
          }).attr("src", e.src)), e.preloaded = !0;
        }
      } } });var M = "retina";c.magnificPopup.registerModule(M, { options: { replaceSrc: function (t) {
        return t.src.replace(/\.\w+$/, function (t) {
          return "@2x" + t;
        });
      }, ratio: 1 }, proto: { initRetina: function () {
        if (1 < window.devicePixelRatio) {
          var n = d.st.retina,
              i = n.ratio;1 < (i = isNaN(i) ? i() : i) && (b("ImageHasSize." + M, function (t, e) {
            e.img.css({ "max-width": e.img[0].naturalWidth / i, width: "100%" });
          }), b("ElementParse." + M, function (t, e) {
            e.src = n.replaceSrc(e, i);
          }));
        }
      } } }), r();
}), function (e, n) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (t) {
    return n(e, t);
  }) : "object" == typeof module && module.exports ? module.exports = n(e, require("jquery")) : e.jQueryBridget = n(e, e.jQuery);
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
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e();
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
  "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e();
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
    }(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
      var e = _(t);if ("none" == e.display) return function () {
        for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < b; e++) t[y[e]] = 0;return t;
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
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e();
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
  }) : "object" == typeof module && module.exports ? module.exports = n(e, require("desandro-matches-selector")) : e.fizzyUIUtils = n(e, e.matchesSelector);
}(window, function (u, r) {
  var c = { extend: function (t, e) {
      for (var n in e) t[n] = e[n];return t;
    }, modulo: function (t, e) {
      return (t % e + e) % e;
    } },
      e = Array.prototype.slice;c.makeArray = function (t) {
    return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t];
  }, c.removeFrom = function (t, e) {
    var n = t.indexOf(e);-1 != n && t.splice(n, 1);
  }, c.getParent = function (t, e) {
    for (; t.parentNode && t != document.body;) if (t = t.parentNode, r(t, e)) return t;
  }, c.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, c.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, c.filterFindElements = function (t, i) {
    t = c.makeArray(t);var o = [];return t.forEach(function (t) {
      if (t instanceof HTMLElement) if (i) {
        r(t, i) && o.push(t);for (var e = t.querySelectorAll(i), n = 0; n < e.length; n++) o.push(e[n]);
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
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
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
    for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this);
  }, l.transition = function (t) {
    if (parseFloat(this.layout.options.transitionDuration)) {
      var e = this._transn;for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);if (t.from) {
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
        for (var e in t) return !1;return !0;
      }(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) e.onEnd[n].call(this), delete e.onEnd[n];this.emitEvent("transitionEnd", [this]);
    }
  }, l.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(r, this, !1), this.isTransitioning = !1;
  }, l._removeStyles = function (t) {
    var e = {};for (var n in t) e[n] = "";this.css(e);
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
    var e = this.layout.options[t];if (e.opacity) return "opacity";for (var n in e) return n;
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
  }) : "object" == typeof module && module.exports ? module.exports = r(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : o.Outlayer = r(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, o.Outlayer.Item);
}(window, function (t, e, o, r, i) {
  "use strict";
  var s = t.console,
      a = t.jQuery,
      n = function () {},
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
  "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer));
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
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer));
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
  "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, u) {
  var e = t.create("masonry");e.compatOptions.fitWidth = "isFitWidth";var n = e.prototype;return n._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];for (var t = 0; t < this.cols; t++) this.colYs.push(0);this.maxY = 0, this.horizontalColIndex = 0;
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
        n = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);n = Math.min(n, this.cols);for (var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, t), o = { x: this.columnWidth * i.col, y: i.y }, r = i.y + t.size.outerHeight, s = n + i.col, a = i.col; a < s; a++) this.colYs[a] = r;return o;
  }, n._getTopColPosition = function (t) {
    var e = this._getTopColGroup(t),
        n = Math.min.apply(Math, e);return { col: e.indexOf(n), y: n };
  }, n._getTopColGroup = function (t) {
    if (t < 2) return this.colYs;for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) e[i] = this._getColGroupY(i, t);return e;
  }, n._getColGroupY = function (t, e) {
    if (e < 2) return this.colYs[t];var n = this.colYs.slice(t, t + e);return Math.max.apply(Math, n);
  }, n._getHorizontalColPosition = function (t, e) {
    var n = this.horizontalColIndex % this.cols;n = 1 < t && n + t > this.cols ? 0 : n;var i = e.size.outerWidth && e.size.outerHeight;return this.horizontalColIndex = i ? n + t : this.horizontalColIndex, { col: n, y: this._getColGroupY(n, t) };
  }, n._manageStamp = function (t) {
    var e = u(t),
        n = this._getElementOffset(t),
        i = this._getOption("originLeft") ? n.left : n.right,
        o = i + e.outerWidth,
        r = Math.floor(i / this.columnWidth);r = Math.max(0, r);var s = Math.floor(o / this.columnWidth);s -= o % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);for (var a = (this._getOption("originTop") ? n.top : n.bottom) + e.outerHeight, l = r; l <= s; l++) this.colYs[l] = Math.max(a, this.colYs[l]);
  }, n._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);var t = { height: this.maxY };return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
  }, n._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;return (this.cols - t) * this.columnWidth - this.gutter;
  }, n.needsResizeLayout = function () {
    var t = this.containerWidth;return this.getContainerWidth(), t != this.containerWidth;
  }, e;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry);
}(window, function (t, e) {
  "use strict";
  var n = t.create("masonry"),
      i = n.prototype,
      o = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };for (var r in e.prototype) o[r] || (i[r] = e.prototype[r]);var s = i.measureColumns;i.measureColumns = function () {
    this.items = this.isotope.filteredItems, s.call(this);
  };var a = i._getOption;return i._getOption = function (t) {
    return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments);
  }, n;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
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
  "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode);
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
  }) : "object" == typeof module && module.exports ? module.exports = a(s, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : s.Isotope = a(s, s.Outlayer, s.getSize, s.matchesSelector, s.fizzyUIUtils, s.Isotope.Item, s.Isotope.LayoutMode);
}(window, function (t, n, e, i, r, o, s) {
  var a = t.jQuery,
      l = String.prototype.trim ? function (t) {
    return t.trim();
  } : function (t) {
    return t.replace(/^\s+|\s+$/g, "");
  },
      u = n.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 });u.Item = o, u.LayoutMode = s;var c = u.prototype;c._create = function () {
    for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), n.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], s.modes) this._initLayoutMode(t);
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
  };var d = function (t) {
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
  };u.sortDataParsers = { parseInt: function (t) {
      return parseInt(t, 10);
    }, parseFloat: function (t) {
      return parseFloat(t);
    } }, c._sort = function () {
    if (this.options.sortBy) {
      var t = r.makeArray(this.options.sortBy);this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));var e = function (l, u) {
        return function (t, e) {
          for (var n = 0; n < l.length; n++) {
            var i = l[n],
                o = t.sortData[i],
                r = e.sortData[i];if (r < o || o < r) {
              var s = void 0 !== u[i] ? u[i] : u,
                  a = s ? 1 : -1;return (r < o ? 1 : -1) * a;
            }
          }return 0;
        };
      }(this.sortHistory, this.options.sortAscending);this.filteredItems.sort(e);
    }
  }, c._getIsSameSortBy = function (t) {
    for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;return !0;
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
          o = e.length;for (n = 0; n < o; n++) i = e[n], this.element.appendChild(i.element);var r = this._filter(e).matches;for (n = 0; n < o; n++) e[n].isLayoutInstant = !0;for (this.arrange(), n = 0; n < o; n++) delete e[n].isLayoutInstant;this.reveal(r);
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
    for (var t, e = "", n = window.getComputedStyle(document.getElementsByTagName("body")[0]).getPropertyValue("content").replace(/\\a/g, "").replace(/ /g, "").replace(/'/g, "").replace(/"/g, "").split("|"), i = 0; i < n.length; i++) r[s[i]] = Number(n[i].replace("px", "")), e += "<tr><td>" + s[i] + "</td><td>" + n[i] + "</td></tr>";t = '<table class="table breakpoints-table" style="width: 300px;">' + e + "</table>", o('[data-js="lv-responsive-table"]').append(t);
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
        var s = arguments[i] || {};for (n in s) "object" != typeof r[n] || (o = r[n]) && void 0 !== a && (o === a || o.nodeType) ? r[n] = r[n] || s[n] : r[n] = t(r[n], s[n]);
      }return r;
    }(e, o.options), this.lastKnownScrollY = 0, this.elem = t, this.debouncer = new i(this.update.bind(this)), this.tolerance = function (t) {
      return t === Object(t) ? t : { down: t, up: t };
    }(e.tolerance), this.classes = e.classes, this.offset = e.offset, this.scroller = e.scroller, this.initialised = !1, this.onPin = e.onPin, this.onUnpin = e.onUnpin, this.onTop = e.onTop, this.onNotTop = e.onNotTop;
  }a.requestAnimationFrame = a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame, i.prototype = { constructor: i, update: function () {
      this.callback && this.callback(), this.ticking = !1;
    }, requestTick: function () {
      this.ticking || (requestAnimationFrame(this.rafCallback || (this.rafCallback = this.update.bind(this))), this.ticking = !0);
    }, handleEvent: function () {
      this.requestTick();
    } }, o.prototype = { constructor: o, init: function () {
      if (o.cutsTheMustard) return this.elem.classList.add(this.classes.initial), setTimeout(this.attachEvent.bind(this), 100), this;
    }, destroy: function () {
      var t = this.classes;this.initialised = !1, this.elem.classList.remove(t.unpinned, t.pinned, t.top, t.initial), this.scroller.removeEventListener("scroll", this.debouncer, !1);
    }, attachEvent: function () {
      this.initialised || (this.lastKnownScrollY = this.getScrollY(), this.initialised = !0, this.scroller.addEventListener("scroll", this.debouncer, !1), this.debouncer.handleEvent());
    }, unpin: function () {
      var t = this.elem.classList,
          e = this.classes;!t.contains(e.pinned) && t.contains(e.unpinned) || (t.add(e.unpinned), t.remove(e.pinned), this.onUnpin && this.onUnpin.call(this));
    }, pin: function () {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.unpinned) && (t.remove(e.unpinned), t.add(e.pinned), this.onPin && this.onPin.call(this));
    }, top: function () {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.top) || (t.add(e.top), t.remove(e.notTop), this.onTop && this.onTop.call(this));
    }, notTop: function () {
      var t = this.elem.classList,
          e = this.classes;t.contains(e.notTop) || (t.add(e.notTop), t.remove(e.top), this.onNotTop && this.onNotTop.call(this));
    }, getScrollY: function () {
      return void 0 !== this.scroller.pageYOffset ? this.scroller.pageYOffset : void 0 !== this.scroller.scrollTop ? this.scroller.scrollTop : (n.documentElement || n.body.parentNode || n.body).scrollTop;
    }, getViewportHeight: function () {
      return a.innerHeight || n.documentElement.clientHeight || n.body.clientHeight;
    }, getDocumentHeight: function () {
      var t = n.body,
          e = n.documentElement;return Math.max(t.scrollHeight, e.scrollHeight, t.offsetHeight, e.offsetHeight, t.clientHeight, e.clientHeight);
    }, getElementHeight: function (t) {
      return Math.max(t.scrollHeight, t.offsetHeight, t.clientHeight);
    }, getScrollerHeight: function () {
      return this.scroller === a || this.scroller === n.body ? this.getDocumentHeight() : this.getElementHeight(this.scroller);
    }, isOutOfBounds: function (t) {
      var e = t < 0,
          n = t + this.getViewportHeight() > this.getScrollerHeight();return e || n;
    }, toleranceExceeded: function (t, e) {
      return Math.abs(t - this.lastKnownScrollY) >= this.tolerance[e];
    }, shouldUnpin: function (t, e) {
      var n = t > this.lastKnownScrollY,
          i = t >= this.offset;return n && i && e;
    }, shouldPin: function (t, e) {
      var n = t < this.lastKnownScrollY,
          i = t <= this.offset;return n && e || i;
    }, update: function () {
      var t = this.getScrollY(),
          e = t > this.lastKnownScrollY ? "down" : "up",
          n = this.toleranceExceeded(t, e);this.isOutOfBounds(t) || (t <= this.offset ? this.top() : this.notTop(), this.shouldUnpin(t, n) ? this.unpin() : this.shouldPin(t, n) && this.pin(), this.lastKnownScrollY = t);
    } }, o.options = { tolerance: { up: 0, down: 0 }, offset: 0, scroller: a, classes: { pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", initial: "headroom" } }, o.cutsTheMustard = void 0 !== t && t.rAF && t.bind && t.classList, a.Headroom = o;
}(window, document), function (o) {
  o && (o.fn.headroom = function (i) {
    return this.each(function () {
      var t = o(this),
          e = t.data("headroom"),
          n = "object" == typeof i && i;n = o.extend(!0, {}, Headroom.options, n), e || ((e = new Headroom(this, n)).init(), t.data("headroom", e)), "string" == typeof i && e[i]();
    });
  }, o("[data-headroom]").each(function () {
    var t = o(this);t.headroom(t.data());
  }));
}(window.Zepto || window.jQuery), function (l) {
  var i = -1,
      o = -1,
      u = function (t) {
    return parseFloat(t) || 0;
  },
      c = function (t) {
    var e = { byRow: !0, property: "height", target: null, remove: !1, mq: null };return "object" == typeof t ? l.extend(e, t) : ("boolean" == typeof t ? e.byRow = t : "remove" === t && (e.remove = !0), e);
  },
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
  };var r = function (t) {
    d._beforeUpdate && d._beforeUpdate(t, d._groups), l.each(d._groups, function () {
      if (this.options.mq && window.matchMedia("only all").matches && !window.matchMedia(this.options.mq).matches) return this.elements.css(this.options.property, ""), !0;d._apply(this.elements, this.options);
    }), d._afterUpdate && d._afterUpdate(t, d._groups);
  };d._update = function (t, e) {
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
}(jQuery), function (e) {
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
  $("[data-masonry]").masonry(), lightbox();
}), $("#modal-enquiry").on("shown.bs.modal", function () {
  $(this).find("form").validator("destroy").validator();
});var enquiry = getParameterByName("enquiry");function getParameterByName(t, e) {
  e || (e = window.location.href), t = t.replace(/[\[\]]/g, "\\$&");var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(e);return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null;
}function lightbox() {
  $(".popup-gallery").magnificPopup({ delegate: "li > a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] }, image: { tError: '<a href="%url%">The image #%curr%</a> could not be loaded.', titleSrc: function (t) {
        return t.el.attr("title") + "<small></small>";
      } } });
}enquiry && ($("#modal-enquiry").addClass("is-success"), $("#modal-enquiry").modal("show")), $("[data-match-height]").matchHeight({ byRow: !1, property: "height", target: null, remove: !1, mq: "(min-width: 768px)" }), $(".global-header").headroom({ offset: 52, tolerance: 0, tolerance: { up: 5, down: 0 }, classes: { initial: "headroom", pinned: "headroom--pinned", unpinned: "headroom--unpinned", top: "headroom--top", notTop: "headroom--not-top", bottom: "headroom--bottom", notBottom: "headroom--not-bottom" }, onPin: function () {}, onUnpin: function () {}, onTop: function () {}, onNotTop: function () {}, onBottom: function () {}, onNotBottom: function () {} });
