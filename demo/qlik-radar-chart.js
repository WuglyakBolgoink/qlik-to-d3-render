define(['jquery'], (function (t) {
    return function (t) {
        var n = {};

        function e(r) {
            if (n[r]) {
                return n[r].exports;
            }
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports;
        }

        return e.m = t, e.c = n, e.d = function (t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: r
            });
        }, e.r = function (t) {
            'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: 'Module'}), Object.defineProperty(t, '__esModule', {value: !0});
        }, e.t = function (t, n) {
            if (1 & n && (t = e(t)), 8 & n) {
                return t;
            }
            if (4 & n && 'object' == typeof t && t && t.__esModule) {
                return t;
            }
            var r = Object.create(null);
            if (e.r(r), Object.defineProperty(r, 'default', {
                enumerable: !0,
                value: t
            }), 2 & n && 'string' != typeof t) {
                for (var i in t) {
                    e.d(r, i, function (n) {
                        return t[n];
                    }.bind(null, i));
                }
            }
            return r;
        }, e.n = function (t) {
            var n = t && t.__esModule
                ? function () {
                    return t.default;
                }
                : function () {
                    return t;
                };
            return e.d(n, 'a', n), n;
        }, e.o = function (t, n) {
            return Object.prototype.hasOwnProperty.call(t, n);
        }, e.p = '', e(e.s = 113);
    }([function (t, n, e) {
        var r = e(2),
            i = e(9),
            o = e(14),
            u = e(11),
            a = e(21),
            c = function (t, n, e) {
                var l,
                    s,
                    f,
                    h,
                    p = t & c.F,
                    v = t & c.G,
                    d = t & c.S,
                    g = t & c.P,
                    y = t & c.B,
                    m = v
                        ? r
                        : d
                            ? r[n] || (r[n] = {})
                            : (r[n] || {}).prototype,
                    x = v
                        ? i
                        : i[n] || (i[n] = {}),
                    b = x.prototype || (x.prototype = {});
                for (l in v && (e = n), e) {
                    f = ((s = !p && m && void 0 !== m[l])
                        ? m
                        : e)[l], h = y && s
                        ? a(f, r)
                        : g && 'function' == typeof f
                            ? a(Function.call, f)
                            : f, m && u(m, l, f, t & c.U), x[l] != f && o(x, l, h), g && b[l] != f && (b[l] = f);
                }
            };
        r.core = i, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c;
    }, function (t, n) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    }, function (t, n) {
        var e = t.exports = 'undefined' != typeof window && window.Math == Math
            ? window
            : 'undefined' != typeof self && self.Math == Math
                ? self
                : Function('return this')();
        'number' == typeof __g && (__g = e);
    }, function (t, n) {
        t.exports = function (t) {
            return 'object' == typeof t
                ? null !== t
                : 'function' == typeof t;
        };
    }, function (t, n, e) {
        var r,
            i;
        !function () {
            var o = {version: '3.5.17'},
                u = [].slice,
                a = function (t) {
                    return u.call(t);
                },
                c = this.document;

            function l(t) {
                return t && (t.ownerDocument || t.document || t).documentElement;
            }

            function s(t) {
                return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView);
            }

            if (c) {
                try {
                    a(c.documentElement.childNodes)[0].nodeType;
                } catch (t) {
                    a = function (t) {
                        for (var n = t.length, e = new Array(n); n--;) {
                            e[n] = t[n];
                        }
                        return e;
                    };
                }
            }
            if (Date.now || (Date.now = function () {
                return +new Date;
            }), c) {
                try {
                    c.createElement('DIV').style.setProperty('opacity', 0, '');
                } catch (t) {
                    var f = this.Element.prototype,
                        h = f.setAttribute,
                        p = f.setAttributeNS,
                        v = this.CSSStyleDeclaration.prototype,
                        d = v.setProperty;
                    f.setAttribute = function (t, n) {
                        h.call(this, t, n + '');
                    }, f.setAttributeNS = function (t, n, e) {
                        p.call(this, t, n, e + '');
                    }, v.setProperty = function (t, n, e) {
                        d.call(this, t, n + '', e);
                    };
                }
            }

            function g(t, n) {
                return t < n
                    ? -1
                    : t > n
                        ? 1
                        : t >= n
                            ? 0
                            : NaN;
            }

            function y(t) {
                return null === t
                    ? NaN
                    : +t;
            }

            function m(t) {
                return !isNaN(t);
            }

            function x(t) {
                return {
                    left: function (n, e, r, i) {
                        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = n.length); r < i;) {
                            var o = r + i >>> 1;
                            t(n[o], e) < 0
                                ? r = o + 1
                                : i = o;
                        }
                        return r;
                    },
                    right: function (n, e, r, i) {
                        for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = n.length); r < i;) {
                            var o = r + i >>> 1;
                            t(n[o], e) > 0
                                ? i = o
                                : r = o + 1;
                        }
                        return r;
                    }
                };
            }

            o.ascending = g, o.descending = function (t, n) {
                return n < t
                    ? -1
                    : n > t
                        ? 1
                        : n >= t
                            ? 0
                            : NaN;
            }, o.min = function (t, n) {
                var e,
                    r,
                    i = -1,
                    o = t.length;
                if (1 === arguments.length) {
                    for (; ++i < o;) {
                        if (null != (r = t[i]) && r >= r) {
                            e = r;
                            break;
                        }
                    }
                    for (; ++i < o;) {
                        null != (r = t[i]) && e > r && (e = r);
                    }
                } else {
                    for (; ++i < o;) {
                        if (null != (r = n.call(t, t[i], i)) && r >= r) {
                            e = r;
                            break;
                        }
                    }
                    for (; ++i < o;) {
                        null != (r = n.call(t, t[i], i)) && e > r && (e = r);
                    }
                }
                return e;
            }, o.max = function (t, n) {
                var e,
                    r,
                    i = -1,
                    o = t.length;
                if (1 === arguments.length) {
                    for (; ++i < o;) {
                        if (null != (r = t[i]) && r >= r) {
                            e = r;
                            break;
                        }
                    }
                    for (; ++i < o;) {
                        null != (r = t[i]) && r > e && (e = r);
                    }
                } else {
                    for (; ++i < o;) {
                        if (null != (r = n.call(t, t[i], i)) && r >= r) {
                            e = r;
                            break;
                        }
                    }
                    for (; ++i < o;) {
                        null != (r = n.call(t, t[i], i)) && r > e && (e = r);
                    }
                }
                return e;
            }, o.extent = function (t, n) {
                var e,
                    r,
                    i,
                    o = -1,
                    u = t.length;
                if (1 === arguments.length) {
                    for (; ++o < u;) {
                        if (null != (r = t[o]) && r >= r) {
                            e = i = r;
                            break;
                        }
                    }
                    for (; ++o < u;) {
                        null != (r = t[o]) && (e > r && (e = r), i < r && (i = r));
                    }
                } else {
                    for (; ++o < u;) {
                        if (null != (r = n.call(t, t[o], o)) && r >= r) {
                            e = i = r;
                            break;
                        }
                    }
                    for (; ++o < u;) {
                        null != (r = n.call(t, t[o], o)) && (e > r && (e = r), i < r && (i = r));
                    }
                }
                return [e, i];
            }, o.sum = function (t, n) {
                var e,
                    r = 0,
                    i = t.length,
                    o = -1;
                if (1 === arguments.length) {
                    for (; ++o < i;) {
                        m(e = +t[o]) && (r += e);
                    }
                } else {
                    for (; ++o < i;) {
                        m(e = +n.call(t, t[o], o)) && (r += e);
                    }
                }
                return r;
            }, o.mean = function (t, n) {
                var e,
                    r = 0,
                    i = t.length,
                    o = -1,
                    u = i;
                if (1 === arguments.length) {
                    for (; ++o < i;) {
                        m(e = y(t[o]))
                            ? r += e
                            : --u;
                    }
                } else {
                    for (; ++o < i;) {
                        m(e = y(n.call(t, t[o], o)))
                            ? r += e
                            : --u;
                    }
                }
                if (u) {
                    return r / u;
                }
            }, o.quantile = function (t, n) {
                var e = (t.length - 1) * n + 1,
                    r = Math.floor(e),
                    i = +t[r - 1],
                    o = e - r;
                return o
                    ? i + o * (t[r] - i)
                    : i;
            }, o.median = function (t, n) {
                var e,
                    r = [],
                    i = t.length,
                    u = -1;
                if (1 === arguments.length) {
                    for (; ++u < i;) {
                        m(e = y(t[u])) && r.push(e);
                    }
                } else {
                    for (; ++u < i;) {
                        m(e = y(n.call(t, t[u], u))) && r.push(e);
                    }
                }
                if (r.length) {
                    return o.quantile(r.sort(g), .5);
                }
            }, o.variance = function (t, n) {
                var e,
                    r,
                    i = t.length,
                    o = 0,
                    u = 0,
                    a = -1,
                    c = 0;
                if (1 === arguments.length) {
                    for (; ++a < i;) {
                        m(e = y(t[a])) && (u += (r = e - o) * (e - (o += r / ++c)));
                    }
                } else {
                    for (; ++a < i;) {
                        m(e = y(n.call(t, t[a], a))) && (u += (r = e - o) * (e - (o += r / ++c)));
                    }
                }
                if (c > 1) {
                    return u / (c - 1);
                }
            }, o.deviation = function () {
                var t = o.variance.apply(this, arguments);
                return t
                    ? Math.sqrt(t)
                    : t;
            };
            var b = x(g);

            function M(t) {
                return t.length;
            }

            o.bisectLeft = b.left, o.bisect = o.bisectRight = b.right, o.bisector = function (t) {
                return x(1 === t.length
                    ? function (n, e) {
                        return g(t(n), e);
                    }
                    : t);
            }, o.shuffle = function (t, n, e) {
                (o = arguments.length) < 3 && (e = t.length, o < 2 && (n = 0));
                for (var r, i, o = e - n; o;) {
                    i = Math.random() * o-- | 0, r = t[o + n], t[o + n] = t[i + n], t[i + n] = r;
                }
                return t;
            }, o.permute = function (t, n) {
                for (var e = n.length, r = new Array(e); e--;) {
                    r[e] = t[n[e]];
                }
                return r;
            }, o.pairs = function (t) {
                for (var n = 0, e = t.length - 1, r = t[0], i = new Array(e < 0
                    ? 0
                    : e); n < e;) {
                    i[n] = [r, r = t[++n]];
                }
                return i;
            }, o.transpose = function (t) {
                if (!(i = t.length)) {
                    return [];
                }
                for (var n = -1, e = o.min(t, M), r = new Array(e); ++n < e;) {
                    for (var i, u = -1, a = r[n] = new Array(i); ++u < i;) {
                        a[u] = t[u][n];
                    }
                }
                return r;
            }, o.zip = function () {
                return o.transpose(arguments);
            }, o.keys = function (t) {
                var n = [];
                for (var e in t) {
                    n.push(e);
                }
                return n;
            }, o.values = function (t) {
                var n = [];
                for (var e in t) {
                    n.push(t[e]);
                }
                return n;
            }, o.entries = function (t) {
                var n = [];
                for (var e in t) {
                    n.push({
                        key: e,
                        value: t[e]
                    });
                }
                return n;
            }, o.merge = function (t) {
                for (var n, e, r, i = t.length, o = -1, u = 0; ++o < i;) {
                    u += t[o].length;
                }
                for (e = new Array(u); --i >= 0;) {
                    for (n = (r = t[i]).length; --n >= 0;) {
                        e[--u] = r[n];
                    }
                }
                return e;
            };
            var w = Math.abs;

            function _(t, n) {
                for (var e in n) {
                    Object.defineProperty(t.prototype, e, {
                        value: n[e],
                        enumerable: !1
                    });
                }
            }

            function S() {
                this._ = Object.create(null);
            }

            o.range = function (t, n, e) {
                if (arguments.length < 3 && (e = 1, arguments.length < 2 && (n = t, t = 0)), (n - t) / e == 1 / 0) {
                    throw new Error('infinite range');
                }
                var r,
                    i = [],
                    o = function (t) {
                        var n = 1;
                        for (; t * n % 1;) {
                            n *= 10;
                        }
                        return n;
                    }(w(e)),
                    u = -1;
                if (t *= o, n *= o, (e *= o) < 0) {
                    for (; (r = t + e * ++u) > n;) {
                        i.push(r / o);
                    }
                } else {
                    for (; (r = t + e * ++u) < n;) {
                        i.push(r / o);
                    }
                }
                return i;
            }, o.map = function (t, n) {
                var e = new S;
                if (t instanceof S) {
                    t.forEach((function (t, n) {
                        e.set(t, n);
                    }));
                } else {
                    if (Array.isArray(t)) {
                        var r,
                            i = -1,
                            o = t.length;
                        if (1 === arguments.length) {
                            for (; ++i < o;) {
                                e.set(i, t[i]);
                            }
                        } else {
                            for (; ++i < o;) {
                                e.set(n.call(t, r = t[i], i), r);
                            }
                        }
                    } else {
                        for (var u in t) {
                            e.set(u, t[u]);
                        }
                    }
                }
                return e;
            };
            var E = '__proto__',
                N = '\0';

            function A(t) {
                return (t += '') === E || t[0] === N
                    ? N + t
                    : t;
            }

            function k(t) {
                return (t += '')[0] === N
                    ? t.slice(1)
                    : t;
            }

            function C(t) {
                return A(t) in this._;
            }

            function O(t) {
                return (t = A(t)) in this._ && delete this._[t];
            }

            function F() {
                var t = [];
                for (var n in this._) {
                    t.push(k(n));
                }
                return t;
            }

            function L() {
                var t = 0;
                for (var n in this._) {
                    ++t;
                }
                return t;
            }

            function T() {
                for (var t in this._) {
                    return !1;
                }
                return !0;
            }

            function P() {
                this._ = Object.create(null);
            }

            function R(t) {
                return t;
            }

            function j(t, n, e) {
                return function () {
                    var r = e.apply(n, arguments);
                    return r === n
                        ? t
                        : r;
                };
            }

            function D(t, n) {
                if (n in t) {
                    return n;
                }
                n = n.charAt(0).toUpperCase() + n.slice(1);
                for (var e = 0, r = q.length; e < r; ++e) {
                    var i = q[e] + n;
                    if (i in t) {
                        return i;
                    }
                }
            }

            _(S, {
                has: C,
                get: function (t) {
                    return this._[A(t)];
                },
                set: function (t, n) {
                    return this._[A(t)] = n;
                },
                remove: O,
                keys: F,
                values: function () {
                    var t = [];
                    for (var n in this._) {
                        t.push(this._[n]);
                    }
                    return t;
                },
                entries: function () {
                    var t = [];
                    for (var n in this._) {
                        t.push({
                            key: k(n),
                            value: this._[n]
                        });
                    }
                    return t;
                },
                size: L,
                empty: T,
                forEach: function (t) {
                    for (var n in this._) {
                        t.call(this, k(n), this._[n]);
                    }
                }
            }), o.nest = function () {
                var t,
                    n,
                    e = {},
                    r = [],
                    i = [];

                function u(i, o, a) {
                    if (a >= r.length) {
                        return n
                            ? n.call(e, o)
                            : t
                                ? o.sort(t)
                                : o;
                    }
                    for (var c, l, s, f, h = -1, p = o.length, v = r[a++], d = new S; ++h < p;) {
                        (f = d.get(c = v(l = o[h])))
                            ? f.push(l)
                            : d.set(c, [l]);
                    }
                    return i
                        ? (l = i(), s = function (t, n) {
                            l.set(t, u(i, n, a));
                        })
                        : (l = {}, s = function (t, n) {
                            l[t] = u(i, n, a);
                        }), d.forEach(s), l;
                }

                return e.map = function (t, n) {
                    return u(n, t, 0);
                }, e.entries = function (t) {
                    return function t(n, e) {
                        if (e >= r.length) {
                            return n;
                        }
                        var o = [],
                            u = i[e++];
                        return n.forEach((function (n, r) {
                            o.push({
                                key: n,
                                values: t(r, e)
                            });
                        })), u
                            ? o.sort((function (t, n) {
                                return u(t.key, n.key);
                            }))
                            : o;
                    }(u(o.map, t, 0), 0);
                }, e.key = function (t) {
                    return r.push(t), e;
                }, e.sortKeys = function (t) {
                    return i[r.length - 1] = t, e;
                }, e.sortValues = function (n) {
                    return t = n, e;
                }, e.rollup = function (t) {
                    return n = t, e;
                }, e;
            }, o.set = function (t) {
                var n = new P;
                if (t) {
                    for (var e = 0, r = t.length; e < r; ++e) {
                        n.add(t[e]);
                    }
                }
                return n;
            }, _(P, {
                has: C,
                add: function (t) {
                    return this._[A(t += '')] = !0, t;
                },
                remove: O,
                values: F,
                size: L,
                empty: T,
                forEach: function (t) {
                    for (var n in this._) {
                        t.call(this, k(n));
                    }
                }
            }), o.behavior = {}, o.rebind = function (t, n) {
                for (var e, r = 1, i = arguments.length; ++r < i;) {
                    t[e = arguments[r]] = j(t, n, n[e]);
                }
                return t;
            };
            var q = ['webkit', 'ms', 'moz', 'Moz', 'o', 'O'];

            function I() {
            }

            function z() {
            }

            function U(t) {
                var n = [],
                    e = new S;

                function r() {
                    for (var e, r = n, i = -1, o = r.length; ++i < o;) {
                        (e = r[i].on) && e.apply(this, arguments);
                    }
                    return t;
                }

                return r.on = function (r, i) {
                    var o,
                        u = e.get(r);
                    return arguments.length < 2
                        ? u && u.on
                        : (u && (u.on = null, n = n.slice(0, o = n.indexOf(u)).concat(n.slice(o + 1)), e.remove(r)), i && n.push(e.set(r, {on: i})), t);
                }, r;
            }

            function B() {
                o.event.preventDefault();
            }

            function V() {
                for (var t, n = o.event; t = n.sourceEvent;) {
                    n = t;
                }
                return n;
            }

            function W(t) {
                for (var n = new z, e = 0, r = arguments.length; ++e < r;) {
                    n[arguments[e]] = U(n);
                }
                return n.of = function (e, r) {
                    return function (i) {
                        try {
                            var u = i.sourceEvent = o.event;
                            i.target = t, o.event = i, n[i.type].apply(e, r);
                        } finally {
                            o.event = u;
                        }
                    };
                }, n;
            }

            o.dispatch = function () {
                for (var t = new z, n = -1, e = arguments.length; ++n < e;) {
                    t[arguments[n]] = U(t);
                }
                return t;
            }, z.prototype.on = function (t, n) {
                var e = t.indexOf('.'),
                    r = '';
                if (e >= 0 && (r = t.slice(e + 1), t = t.slice(0, e)), t) {
                    return arguments.length < 2
                        ? this[t].on(r)
                        : this[t].on(r, n);
                }
                if (2 === arguments.length) {
                    if (null == n) {
                        for (t in this) {
                            this.hasOwnProperty(t) && this[t].on(r, null);
                        }
                    }
                    return this;
                }
            }, o.event = null, o.requote = function (t) {
                return t.replace(H, '\\$&');
            };
            var H = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
                Y = {}.__proto__
                    ? function (t, n) {
                        t.__proto__ = n;
                    }
                    : function (t, n) {
                        for (var e in n) {
                            t[e] = n[e];
                        }
                    };

            function G(t) {
                return Y(t, J), t;
            }

            var Z = function (t, n) {
                    return n.querySelector(t);
                },
                $ = function (t, n) {
                    return n.querySelectorAll(t);
                },
                X = function (t, n) {
                    var e = t.matches || t[D(t, 'matchesSelector')];
                    return (X = function (t, n) {
                        return e.call(t, n);
                    })(t, n);
                };
            'function' == typeof Sizzle && (Z = function (t, n) {
                return Sizzle(t, n)[0] || null;
            }, $ = Sizzle, X = Sizzle.matchesSelector), o.selection = function () {
                return o.select(c.documentElement);
            };
            var J = o.selection.prototype = [];

            function K(t) {
                return 'function' == typeof t
                    ? t
                    : function () {
                        return Z(t, this);
                    };
            }

            function Q(t) {
                return 'function' == typeof t
                    ? t
                    : function () {
                        return $(t, this);
                    };
            }

            J.select = function (t) {
                var n,
                    e,
                    r,
                    i,
                    o = [];
                t = K(t);
                for (var u = -1, a = this.length; ++u < a;) {
                    o.push(n = []), n.parentNode = (r = this[u]).parentNode;
                    for (var c = -1, l = r.length; ++c < l;) {
                        (i = r[c])
                            ? (n.push(e = t.call(i, i.__data__, c, u)), e && '__data__' in i && (e.__data__ = i.__data__))
                            : n.push(null);
                    }
                }
                return G(o);
            }, J.selectAll = function (t) {
                var n,
                    e,
                    r = [];
                t = Q(t);
                for (var i = -1, o = this.length; ++i < o;) {
                    for (var u = this[i], c = -1, l = u.length; ++c < l;) {
                        (e = u[c]) && (r.push(n = a(t.call(e, e.__data__, c, i))), n.parentNode = e);
                    }
                }
                return G(r);
            };
            var tt = 'http://www.w3.org/1999/xhtml',
                nt = {
                    svg: 'http://www.w3.org/2000/svg',
                    xhtml: tt,
                    xlink: 'http://www.w3.org/1999/xlink',
                    xml: 'http://www.w3.org/XML/1998/namespace',
                    xmlns: 'http://www.w3.org/2000/xmlns/'
                };

            function et(t, n) {
                return t = o.ns.qualify(t), null == n
                    ? t.local
                        ? function () {
                            this.removeAttributeNS(t.space, t.local);
                        }
                        : function () {
                            this.removeAttribute(t);
                        }
                    : 'function' == typeof n
                        ? t.local
                            ? function () {
                                var e = n.apply(this, arguments);
                                null == e
                                    ? this.removeAttributeNS(t.space, t.local)
                                    : this.setAttributeNS(t.space, t.local, e);
                            }
                            : function () {
                                var e = n.apply(this, arguments);
                                null == e
                                    ? this.removeAttribute(t)
                                    : this.setAttribute(t, e);
                            }
                        : t.local
                            ? function () {
                                this.setAttributeNS(t.space, t.local, n);
                            }
                            : function () {
                                this.setAttribute(t, n);
                            };
            }

            function rt(t) {
                return t.trim().replace(/\s+/g, ' ');
            }

            function it(t) {
                return new RegExp('(?:^|\\s+)' + o.requote(t) + '(?:\\s+|$)', 'g');
            }

            function ot(t) {
                return (t + '').trim().split(/^|\s+/);
            }

            function ut(t, n) {
                var e = (t = ot(t).map(at)).length;
                return 'function' == typeof n
                    ? function () {
                        for (var r = -1, i = n.apply(this, arguments); ++r < e;) {
                            t[r](this, i);
                        }
                    }
                    : function () {
                        for (var r = -1; ++r < e;) {
                            t[r](this, n);
                        }
                    };
            }

            function at(t) {
                var n = it(t);
                return function (e, r) {
                    if (i = e.classList) {
                        return r
                            ? i.add(t)
                            : i.remove(t);
                    }
                    var i = e.getAttribute('class') || '';
                    r
                        ? (n.lastIndex = 0, n.test(i) || e.setAttribute('class', rt(i + ' ' + t)))
                        : e.setAttribute('class', rt(i.replace(n, ' ')));
                };
            }

            function ct(t, n, e) {
                return null == n
                    ? function () {
                        this.style.removeProperty(t);
                    }
                    : 'function' == typeof n
                        ? function () {
                            var r = n.apply(this, arguments);
                            null == r
                                ? this.style.removeProperty(t)
                                : this.style.setProperty(t, r, e);
                        }
                        : function () {
                            this.style.setProperty(t, n, e);
                        };
            }

            function lt(t, n) {
                return null == n
                    ? function () {
                        delete this[t];
                    }
                    : 'function' == typeof n
                        ? function () {
                            var e = n.apply(this, arguments);
                            null == e
                                ? delete this[t]
                                : this[t] = e;
                        }
                        : function () {
                            this[t] = n;
                        };
            }

            function st(t) {
                return 'function' == typeof t
                    ? t
                    : (t = o.ns.qualify(t)).local
                        ? function () {
                            return this.ownerDocument.createElementNS(t.space, t.local);
                        }
                        : function () {
                            var n = this.ownerDocument,
                                e = this.namespaceURI;
                            return e === tt && n.documentElement.namespaceURI === tt
                                ? n.createElement(t)
                                : n.createElementNS(e, t);
                        };
            }

            function ft() {
                var t = this.parentNode;
                t && t.removeChild(this);
            }

            function ht(t) {
                return {__data__: t};
            }

            function pt(t) {
                return function () {
                    return X(this, t);
                };
            }

            function vt(t, n) {
                for (var e = 0, r = t.length; e < r; e++) {
                    for (var i, o = t[e], u = 0, a = o.length; u < a; u++) {
                        (i = o[u]) && n(i, u, e);
                    }
                }
                return t;
            }

            function dt(t) {
                return Y(t, gt), t;
            }

            o.ns = {
                prefix: nt,
                qualify: function (t) {
                    var n = t.indexOf(':'),
                        e = t;
                    return n >= 0 && 'xmlns' !== (e = t.slice(0, n)) && (t = t.slice(n + 1)), nt.hasOwnProperty(e)
                        ? {
                            space: nt[e],
                            local: t
                        }
                        : t;
                }
            }, J.attr = function (t, n) {
                if (arguments.length < 2) {
                    if ('string' == typeof t) {
                        var e = this.node();
                        return (t = o.ns.qualify(t)).local
                            ? e.getAttributeNS(t.space, t.local)
                            : e.getAttribute(t);
                    }
                    for (n in t) {
                        this.each(et(n, t[n]));
                    }
                    return this;
                }
                return this.each(et(t, n));
            }, J.classed = function (t, n) {
                if (arguments.length < 2) {
                    if ('string' == typeof t) {
                        var e = this.node(),
                            r = (t = ot(t)).length,
                            i = -1;
                        if (n = e.classList) {
                            for (; ++i < r;) {
                                if (!n.contains(t[i])) {
                                    return !1;
                                }
                            }
                        } else {
                            for (n = e.getAttribute('class'); ++i < r;) {
                                if (!it(t[i]).test(n)) {
                                    return !1;
                                }
                            }
                        }
                        return !0;
                    }
                    for (n in t) {
                        this.each(ut(n, t[n]));
                    }
                    return this;
                }
                return this.each(ut(t, n));
            }, J.style = function (t, n, e) {
                var r = arguments.length;
                if (r < 3) {
                    if ('string' != typeof t) {
                        for (e in r < 2 && (n = ''), t) {
                            this.each(ct(e, t[e], n));
                        }
                        return this;
                    }
                    if (r < 2) {
                        var i = this.node();
                        return s(i).getComputedStyle(i, null).getPropertyValue(t);
                    }
                    e = '';
                }
                return this.each(ct(t, n, e));
            }, J.property = function (t, n) {
                if (arguments.length < 2) {
                    if ('string' == typeof t) {
                        return this.node()[t];
                    }
                    for (n in t) {
                        this.each(lt(n, t[n]));
                    }
                    return this;
                }
                return this.each(lt(t, n));
            }, J.text = function (t) {
                return arguments.length
                    ? this.each('function' == typeof t
                        ? function () {
                            var n = t.apply(this, arguments);
                            this.textContent = null == n
                                ? ''
                                : n;
                        }
                        : null == t
                            ? function () {
                                this.textContent = '';
                            }
                            : function () {
                                this.textContent = t;
                            })
                    : this.node().textContent;
            }, J.html = function (t) {
                return arguments.length
                    ? this.each('function' == typeof t
                        ? function () {
                            var n = t.apply(this, arguments);
                            this.innerHTML = null == n
                                ? ''
                                : n;
                        }
                        : null == t
                            ? function () {
                                this.innerHTML = '';
                            }
                            : function () {
                                this.innerHTML = t;
                            })
                    : this.node().innerHTML;
            }, J.append = function (t) {
                return t = st(t), this.select((function () {
                    return this.appendChild(t.apply(this, arguments));
                }));
            }, J.insert = function (t, n) {
                return t = st(t), n = K(n), this.select((function () {
                    return this.insertBefore(t.apply(this, arguments), n.apply(this, arguments) || null);
                }));
            }, J.remove = function () {
                return this.each(ft);
            }, J.data = function (t, n) {
                var e,
                    r,
                    i = -1,
                    o = this.length;
                if (!arguments.length) {
                    for (t = new Array(o = (e = this[0]).length); ++i < o;) {
                        (r = e[i]) && (t[i] = r.__data__);
                    }
                    return t;
                }

                function u(t, e) {
                    var r,
                        i,
                        o,
                        u = t.length,
                        s = e.length,
                        f = Math.min(u, s),
                        h = new Array(s),
                        p = new Array(s),
                        v = new Array(u);
                    if (n) {
                        var d,
                            g = new S,
                            y = new Array(u);
                        for (r = -1; ++r < u;) {
                            (i = t[r]) && (g.has(d = n.call(i, i.__data__, r))
                                ? v[r] = i
                                : g.set(d, i), y[r] = d);
                        }
                        for (r = -1; ++r < s;) {
                            (i = g.get(d = n.call(e, o = e[r], r)))
                                ? !0 !== i && (h[r] = i, i.__data__ = o)
                                : p[r] = ht(o), g.set(d, !0);
                        }
                        for (r = -1; ++r < u;) {
                            r in y && !0 !== g.get(y[r]) && (v[r] = t[r]);
                        }
                    } else {
                        for (r = -1; ++r < f;) {
                            i = t[r], o = e[r], i
                                ? (i.__data__ = o, h[r] = i)
                                : p[r] = ht(o);
                        }
                        for (; r < s; ++r) {
                            p[r] = ht(e[r]);
                        }
                        for (; r < u; ++r) {
                            v[r] = t[r];
                        }
                    }
                    p.update = h, p.parentNode = h.parentNode = v.parentNode = t.parentNode, a.push(p), c.push(h), l.push(v);
                }

                var a = dt([]),
                    c = G([]),
                    l = G([]);
                if ('function' == typeof t) {
                    for (; ++i < o;) {
                        u(e = this[i], t.call(e, e.parentNode.__data__, i));
                    }
                } else {
                    for (; ++i < o;) {
                        u(e = this[i], t);
                    }
                }
                return c.enter = function () {
                    return a;
                }, c.exit = function () {
                    return l;
                }, c;
            }, J.datum = function (t) {
                return arguments.length
                    ? this.property('__data__', t)
                    : this.property('__data__');
            }, J.filter = function (t) {
                var n,
                    e,
                    r,
                    i = [];
                'function' != typeof t && (t = pt(t));
                for (var o = 0, u = this.length; o < u; o++) {
                    i.push(n = []), n.parentNode = (e = this[o]).parentNode;
                    for (var a = 0, c = e.length; a < c; a++) {
                        (r = e[a]) && t.call(r, r.__data__, a, o) && n.push(r);
                    }
                }
                return G(i);
            }, J.order = function () {
                for (var t = -1, n = this.length; ++t < n;) {
                    for (var e, r = this[t], i = r.length - 1, o = r[i]; --i >= 0;) {
                        (e = r[i]) && (o && o !== e.nextSibling && o.parentNode.insertBefore(e, o), o = e);
                    }
                }
                return this;
            }, J.sort = function (t) {
                t = function (t) {
                    arguments.length || (t = g);
                    return function (n, e) {
                        return n && e
                            ? t(n.__data__, e.__data__)
                            : !n - !e;
                    };
                }.apply(this, arguments);
                for (var n = -1, e = this.length; ++n < e;) {
                    this[n].sort(t);
                }
                return this.order();
            }, J.each = function (t) {
                return vt(this, (function (n, e, r) {
                    t.call(n, n.__data__, e, r);
                }));
            }, J.call = function (t) {
                var n = a(arguments);
                return t.apply(n[0] = this, n), this;
            }, J.empty = function () {
                return !this.node();
            }, J.node = function () {
                for (var t = 0, n = this.length; t < n; t++) {
                    for (var e = this[t], r = 0, i = e.length; r < i; r++) {
                        var o = e[r];
                        if (o) {
                            return o;
                        }
                    }
                }
                return null;
            }, J.size = function () {
                var t = 0;
                return vt(this, (function () {
                    ++t;
                })), t;
            };
            var gt = [];

            function yt(t, n, e) {
                var r = '__on' + t,
                    i = t.indexOf('.'),
                    u = xt;
                i > 0 && (t = t.slice(0, i));
                var c = mt.get(t);

                function l() {
                    var n = this[r];
                    n && (this.removeEventListener(t, n, n.$), delete this[r]);
                }

                return c && (t = c, u = bt), i
                    ? n
                        ? function () {
                            var i = u(n, a(arguments));
                            l.call(this), this.addEventListener(t, this[r] = i, i.$ = e), i._ = n;
                        }
                        : l
                    : n
                        ? I
                        : function () {
                            var n,
                                e = new RegExp('^__on([^.]+)' + o.requote(t) + '$');
                            for (var r in this) {
                                if (n = r.match(e)) {
                                    var i = this[r];
                                    this.removeEventListener(n[1], i, i.$), delete this[r];
                                }
                            }
                        };
            }

            o.selection.enter = dt, o.selection.enter.prototype = gt, gt.append = J.append, gt.empty = J.empty, gt.node = J.node, gt.call = J.call, gt.size = J.size, gt.select = function (t) {
                for (var n, e, r, i, o, u = [], a = -1, c = this.length; ++a < c;) {
                    r = (i = this[a]).update, u.push(n = []), n.parentNode = i.parentNode;
                    for (var l = -1, s = i.length; ++l < s;) {
                        (o = i[l])
                            ? (n.push(r[l] = e = t.call(i.parentNode, o.__data__, l, a)), e.__data__ = o.__data__)
                            : n.push(null);
                    }
                }
                return G(u);
            }, gt.insert = function (t, n) {
                return arguments.length < 2 && (n = function (t) {
                    var n,
                        e;
                    return function (r, i, o) {
                        var u,
                            a = t[o].update,
                            c = a.length;
                        for (o != e && (e = o, n = 0), i >= n && (n = i + 1); !(u = a[n]) && ++n < c;) {
                            ;
                        }
                        return u;
                    };
                }(this)), J.insert.call(this, t, n);
            }, o.select = function (t) {
                var n;
                return 'string' == typeof t
                    ? (n = [Z(t, c)]).parentNode = c.documentElement
                    : (n = [t]).parentNode = l(t), G([n]);
            }, o.selectAll = function (t) {
                var n;
                return 'string' == typeof t
                    ? (n = a($(t, c))).parentNode = c.documentElement
                    : (n = a(t)).parentNode = null, G([n]);
            }, J.on = function (t, n, e) {
                var r = arguments.length;
                if (r < 3) {
                    if ('string' != typeof t) {
                        for (e in r < 2 && (n = !1), t) {
                            this.each(yt(e, t[e], n));
                        }
                        return this;
                    }
                    if (r < 2) {
                        return (r = this.node()['__on' + t]) && r._;
                    }
                    e = !1;
                }
                return this.each(yt(t, n, e));
            };
            var mt = o.map({
                mouseenter: 'mouseover',
                mouseleave: 'mouseout'
            });

            function xt(t, n) {
                return function (e) {
                    var r = o.event;
                    o.event = e, n[0] = this.__data__;
                    try {
                        t.apply(this, n);
                    } finally {
                        o.event = r;
                    }
                };
            }

            function bt(t, n) {
                var e = xt(t, n);
                return function (t) {
                    var n = t.relatedTarget;
                    n && (n === this || 8 & n.compareDocumentPosition(this)) || e.call(this, t);
                };
            }

            c && mt.forEach((function (t) {
                'on' + t in c && mt.remove(t);
            }));
            var Mt,
                wt = 0;

            function _t(t) {
                var n = '.dragsuppress-' + ++wt,
                    e = 'click' + n,
                    r = o.select(s(t)).on('touchmove' + n, B).on('dragstart' + n, B).on('selectstart' + n, B);
                if (null == Mt && (Mt = !('onselectstart' in t) && D(t.style, 'userSelect')), Mt) {
                    var i = l(t).style,
                        u = i[Mt];
                    i[Mt] = 'none';
                }
                return function (t) {
                    if (r.on(n, null), Mt && (i[Mt] = u), t) {
                        var o = function () {
                            r.on(e, null);
                        };
                        r.on(e, (function () {
                            B(), o();
                        }), !0), setTimeout(o, 0);
                    }
                };
            }

            o.mouse = function (t) {
                return Et(t, V());
            };
            var St = this.navigator && /WebKit/.test(this.navigator.userAgent)
                ? -1
                : 0;

            function Et(t, n) {
                n.changedTouches && (n = n.changedTouches[0]);
                var e = t.ownerSVGElement || t;
                if (e.createSVGPoint) {
                    var r = e.createSVGPoint();
                    if (St < 0) {
                        var i = s(t);
                        if (i.scrollX || i.scrollY) {
                            var u = (e = o.select('body').append('svg').style({
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                margin: 0,
                                padding: 0,
                                border: 'none'
                            }, 'important'))[0][0].getScreenCTM();
                            St = !(u.f || u.e), e.remove();
                        }
                    }
                    return St
                        ? (r.x = n.pageX, r.y = n.pageY)
                        : (r.x = n.clientX, r.y = n.clientY), [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y];
                }
                var a = t.getBoundingClientRect();
                return [n.clientX - a.left - t.clientLeft, n.clientY - a.top - t.clientTop];
            }

            function Nt() {
                return o.event.changedTouches[0].identifier;
            }

            o.touch = function (t, n, e) {
                if (arguments.length < 3 && (e = n, n = V().changedTouches), n) {
                    for (var r, i = 0, o = n.length; i < o; ++i) {
                        if ((r = n[i]).identifier === e) {
                            return Et(t, r);
                        }
                    }
                }
            }, o.behavior.drag = function () {
                var t = W(i, 'drag', 'dragstart', 'dragend'),
                    n = null,
                    e = u(I, o.mouse, s, 'mousemove', 'mouseup'),
                    r = u(Nt, o.touch, R, 'touchmove', 'touchend');

                function i() {
                    this.on('mousedown.drag', e).on('touchstart.drag', r);
                }

                function u(e, r, i, u, a) {
                    return function () {
                        var c,
                            l = o.event.target.correspondingElement || o.event.target,
                            s = this.parentNode,
                            f = t.of(this, arguments),
                            h = 0,
                            p = e(),
                            v = '.drag' + (null == p
                                ? ''
                                : '-' + p),
                            d = o.select(i(l)).on(u + v, (function () {
                                var t,
                                    n,
                                    e = r(s, p);
                                if (!e) {
                                    return;
                                }
                                t = e[0] - y[0], n = e[1] - y[1], h |= t | n, y = e, f({
                                    type: 'drag',
                                    x: e[0] + c[0],
                                    y: e[1] + c[1],
                                    dx: t,
                                    dy: n
                                });
                            })).on(a + v, (function () {
                                if (!r(s, p)) {
                                    return;
                                }
                                d.on(u + v, null).on(a + v, null), g(h), f({type: 'dragend'});
                            })),
                            g = _t(l),
                            y = r(s, p);
                        c = n
                            ? [(c = n.apply(this, arguments)).x - y[0], c.y - y[1]]
                            : [0, 0], f({type: 'dragstart'});
                    };
                }

                return i.origin = function (t) {
                    return arguments.length
                        ? (n = t, i)
                        : n;
                }, o.rebind(i, t, 'on');
            }, o.touches = function (t, n) {
                return arguments.length < 2 && (n = V().touches), n
                    ? a(n).map((function (n) {
                        var e = Et(t, n);
                        return e.identifier = n.identifier, e;
                    }))
                    : [];
            };
            var At = 1e-6,
                kt = At * At,
                Ct = Math.PI,
                Ot = 2 * Ct,
                Ft = Ot - At,
                Lt = Ct / 2,
                Tt = Ct / 180,
                Pt = 180 / Ct;

            function Rt(t) {
                return t > 0
                    ? 1
                    : t < 0
                        ? -1
                        : 0;
            }

            function jt(t, n, e) {
                return (n[0] - t[0]) * (e[1] - t[1]) - (n[1] - t[1]) * (e[0] - t[0]);
            }

            function Dt(t) {
                return t > 1
                    ? 0
                    : t < -1
                        ? Ct
                        : Math.acos(t);
            }

            function qt(t) {
                return t > 1
                    ? Lt
                    : t < -1
                        ? -Lt
                        : Math.asin(t);
            }

            function It(t) {
                return ((t = Math.exp(t)) + 1 / t) / 2;
            }

            function zt(t) {
                return (t = Math.sin(t / 2)) * t;
            }

            var Ut = Math.SQRT2;
            o.interpolateZoom = function (t, n) {
                var e,
                    r,
                    i = t[0],
                    o = t[1],
                    u = t[2],
                    a = n[0],
                    c = n[1],
                    l = n[2],
                    s = a - i,
                    f = c - o,
                    h = s * s + f * f;
                if (h < kt) {
                    r = Math.log(l / u) / Ut, e = function (t) {
                        return [i + t * s, o + t * f, u * Math.exp(Ut * t * r)];
                    };
                } else {
                    var p = Math.sqrt(h),
                        v = (l * l - u * u + 4 * h) / (2 * u * 2 * p),
                        d = (l * l - u * u - 4 * h) / (2 * l * 2 * p),
                        g = Math.log(Math.sqrt(v * v + 1) - v),
                        y = Math.log(Math.sqrt(d * d + 1) - d);
                    r = (y - g) / Ut, e = function (t) {
                        var n = t * r,
                            e = It(g),
                            a = u / (2 * p) * (e * function (t) {
                                return ((t = Math.exp(2 * t)) - 1) / (t + 1);
                            }(Ut * n + g) - function (t) {
                                return ((t = Math.exp(t)) - 1 / t) / 2;
                            }(g));
                        return [i + a * s, o + a * f, u * e / It(Ut * n + g)];
                    };
                }
                return e.duration = 1e3 * r, e;
            }, o.behavior.zoom = function () {
                var t,
                    n,
                    e,
                    r,
                    i,
                    u,
                    a,
                    l,
                    f,
                    h = {
                        x: 0,
                        y: 0,
                        k: 1
                    },
                    p = [960, 500],
                    v = Wt,
                    d = 250,
                    g = 0,
                    y = 'mousedown.zoom',
                    m = 'mousemove.zoom',
                    x = 'mouseup.zoom',
                    b = 'touchstart.zoom',
                    M = W(w, 'zoomstart', 'zoom', 'zoomend');

                function w(t) {
                    t.on(y, F).on(Vt + '.zoom', T).on('dblclick.zoom', P).on(b, L);
                }

                function _(t) {
                    return [(t[0] - h.x) / h.k, (t[1] - h.y) / h.k];
                }

                function S(t) {
                    h.k = Math.max(v[0], Math.min(v[1], t));
                }

                function E(t, n) {
                    n = function (t) {
                        return [t[0] * h.k + h.x, t[1] * h.k + h.y];
                    }(n), h.x += t[0] - n[0], h.y += t[1] - n[1];
                }

                function N(t, e, r, i) {
                    t.__chart__ = {
                        x: h.x,
                        y: h.y,
                        k: h.k
                    }, S(Math.pow(2, i)), E(n = e, r), t = o.select(t), d > 0 && (t = t.transition().duration(d)), t.call(w.event);
                }

                function A() {
                    a && a.domain(u.range().map((function (t) {
                        return (t - h.x) / h.k;
                    })).map(u.invert)), f && f.domain(l.range().map((function (t) {
                        return (t - h.y) / h.k;
                    })).map(l.invert));
                }

                function k(t) {
                    g++ || t({type: 'zoomstart'});
                }

                function C(t) {
                    A(), t({
                        type: 'zoom',
                        scale: h.k,
                        translate: [h.x, h.y]
                    });
                }

                function O(t) {
                    --g || (t({type: 'zoomend'}), n = null);
                }

                function F() {
                    var t = this,
                        n = M.of(t, arguments),
                        e = 0,
                        r = o.select(s(t)).on(m, (function () {
                            e = 1, E(o.mouse(t), i), C(n);
                        })).on(x, (function () {
                            r.on(m, null).on(x, null), u(e), O(n);
                        })),
                        i = _(o.mouse(t)),
                        u = _t(t);
                    pa.call(t), k(n);
                }

                function L() {
                    var t,
                        n = this,
                        e = M.of(n, arguments),
                        r = {},
                        u = 0,
                        a = '.zoom-' + o.event.changedTouches[0].identifier,
                        c = 'touchmove' + a,
                        l = 'touchend' + a,
                        s = [],
                        f = o.select(n),
                        p = _t(n);

                    function v() {
                        var e = o.touches(n);
                        return t = h.k, e.forEach((function (t) {
                            t.identifier in r && (r[t.identifier] = _(t));
                        })), e;
                    }

                    function d() {
                        var t = o.event.target;
                        o.select(t).on(c, g).on(l, m), s.push(t);
                        for (var e = o.event.changedTouches, a = 0, f = e.length; a < f; ++a) {
                            r[e[a].identifier] = null;
                        }
                        var p = v(),
                            d = Date.now();
                        if (1 === p.length) {
                            if (d - i < 500) {
                                var y = p[0];
                                N(n, y, r[y.identifier], Math.floor(Math.log(h.k) / Math.LN2) + 1), B();
                            }
                            i = d;
                        } else {
                            if (p.length > 1) {
                                y = p[0];
                                var x = p[1],
                                    b = y[0] - x[0],
                                    M = y[1] - x[1];
                                u = b * b + M * M;
                            }
                        }
                    }

                    function g() {
                        var a,
                            c,
                            l,
                            s,
                            f = o.touches(n);
                        pa.call(n);
                        for (var h = 0, p = f.length; h < p; ++h, s = null) {
                            if (l = f[h], s = r[l.identifier]) {
                                if (c) {
                                    break;
                                }
                                a = l, c = s;
                            }
                        }
                        if (s) {
                            var v = (v = l[0] - a[0]) * v + (v = l[1] - a[1]) * v,
                                d = u && Math.sqrt(v / u);
                            a = [(a[0] + l[0]) / 2, (a[1] + l[1]) / 2], c = [(c[0] + s[0]) / 2, (c[1] + s[1]) / 2], S(d * t);
                        }
                        i = null, E(a, c), C(e);
                    }

                    function m() {
                        if (o.event.touches.length) {
                            for (var t = o.event.changedTouches, n = 0, i = t.length; n < i; ++n) {
                                delete r[t[n].identifier];
                            }
                            for (var u in r) {
                                return void v();
                            }
                        }
                        o.selectAll(s).on(a, null), f.on(y, F).on(b, L), p(), O(e);
                    }

                    d(), k(e), f.on(y, null).on(b, d);
                }

                function T() {
                    var i = M.of(this, arguments);
                    r
                        ? clearTimeout(r)
                        : (pa.call(this), t = _(n = e || o.mouse(this)), k(i)), r = setTimeout((function () {
                        r = null, O(i);
                    }), 50), B(), S(Math.pow(2, .002 * Bt()) * h.k), E(n, t), C(i);
                }

                function P() {
                    var t = o.mouse(this),
                        n = Math.log(h.k) / Math.LN2;
                    N(this, t, _(t), o.event.shiftKey
                        ? Math.ceil(n) - 1
                        : Math.floor(n) + 1);
                }

                return Vt || (Vt = 'onwheel' in c
                    ? (Bt = function () {
                        return -o.event.deltaY * (o.event.deltaMode
                            ? 120
                            : 1);
                    }, 'wheel')
                    : 'onmousewheel' in c
                        ? (Bt = function () {
                            return o.event.wheelDelta;
                        }, 'mousewheel')
                        : (Bt = function () {
                            return -o.event.detail;
                        }, 'MozMousePixelScroll')), w.event = function (t) {
                    t.each((function () {
                        var t = M.of(this, arguments),
                            e = h;
                        ga
                            ? o.select(this).transition().each('start.zoom', (function () {
                                h = this.__chart__ || {
                                    x: 0,
                                    y: 0,
                                    k: 1
                                }, k(t);
                            })).tween('zoom:zoom', (function () {
                                var r = p[0],
                                    i = p[1],
                                    u = n
                                        ? n[0]
                                        : r / 2,
                                    a = n
                                        ? n[1]
                                        : i / 2,
                                    c = o.interpolateZoom([(u - h.x) / h.k, (a - h.y) / h.k, r / h.k], [(u - e.x) / e.k, (a - e.y) / e.k, r / e.k]);
                                return function (n) {
                                    var e = c(n),
                                        i = r / e[2];
                                    this.__chart__ = h = {
                                        x: u - e[0] * i,
                                        y: a - e[1] * i,
                                        k: i
                                    }, C(t);
                                };
                            })).each('interrupt.zoom', (function () {
                                O(t);
                            })).each('end.zoom', (function () {
                                O(t);
                            }))
                            : (this.__chart__ = h, k(t), C(t), O(t));
                    }));
                }, w.translate = function (t) {
                    return arguments.length
                        ? (h = {
                            x: +t[0],
                            y: +t[1],
                            k: h.k
                        }, A(), w)
                        : [h.x, h.y];
                }, w.scale = function (t) {
                    return arguments.length
                        ? (h = {
                            x: h.x,
                            y: h.y,
                            k: null
                        }, S(+t), A(), w)
                        : h.k;
                }, w.scaleExtent = function (t) {
                    return arguments.length
                        ? (v = null == t
                            ? Wt
                            : [+t[0], +t[1]], w)
                        : v;
                }, w.center = function (t) {
                    return arguments.length
                        ? (e = t && [+t[0], +t[1]], w)
                        : e;
                }, w.size = function (t) {
                    return arguments.length
                        ? (p = t && [+t[0], +t[1]], w)
                        : p;
                }, w.duration = function (t) {
                    return arguments.length
                        ? (d = +t, w)
                        : d;
                }, w.x = function (t) {
                    return arguments.length
                        ? (a = t, u = t.copy(), h = {
                            x: 0,
                            y: 0,
                            k: 1
                        }, w)
                        : a;
                }, w.y = function (t) {
                    return arguments.length
                        ? (f = t, l = t.copy(), h = {
                            x: 0,
                            y: 0,
                            k: 1
                        }, w)
                        : f;
                }, o.rebind(w, M, 'on');
            };
            var Bt,
                Vt,
                Wt = [0, 1 / 0];

            function Ht() {
            }

            function Yt(t, n, e) {
                return this instanceof Yt
                    ? (this.h = +t, this.s = +n, void (this.l = +e))
                    : arguments.length < 2
                        ? t instanceof Yt
                            ? new Yt(t.h, t.s, t.l)
                            : dn('' + t, gn, Yt)
                        : new Yt(t, n, e);
            }

            o.color = Ht, Ht.prototype.toString = function () {
                return this.rgb() + '';
            }, o.hsl = Yt;
            var Gt = Yt.prototype = new Ht;

            function Zt(t, n, e) {
                var r,
                    i;

                function o(t) {
                    return Math.round(255 * function (t) {
                        return t > 360
                            ? t -= 360
                            : t < 0 && (t += 360), t < 60
                            ? r + (i - r) * t / 60
                            : t < 180
                                ? i
                                : t < 240
                                    ? r + (i - r) * (240 - t) / 60
                                    : r;
                    }(t));
                }

                return t = isNaN(t)
                    ? 0
                    : (t %= 360) < 0
                        ? t + 360
                        : t, n = isNaN(n) || n < 0
                    ? 0
                    : n > 1
                        ? 1
                        : n, r = 2 * (e = e < 0
                    ? 0
                    : e > 1
                        ? 1
                        : e) - (i = e <= .5
                    ? e * (1 + n)
                    : e + n - e * n), new sn(o(t + 120), o(t), o(t - 120));
            }

            function $t(t, n, e) {
                return this instanceof $t
                    ? (this.h = +t, this.c = +n, void (this.l = +e))
                    : arguments.length < 2
                        ? t instanceof $t
                            ? new $t(t.h, t.c, t.l)
                            : un(t instanceof Kt
                                ? t.l
                                : (t = yn((t = o.rgb(t)).r, t.g, t.b)).l, t.a, t.b)
                        : new $t(t, n, e);
            }

            Gt.brighter = function (t) {
                return t = Math.pow(.7, arguments.length
                    ? t
                    : 1), new Yt(this.h, this.s, this.l / t);
            }, Gt.darker = function (t) {
                return t = Math.pow(.7, arguments.length
                    ? t
                    : 1), new Yt(this.h, this.s, t * this.l);
            }, Gt.rgb = function () {
                return Zt(this.h, this.s, this.l);
            }, o.hcl = $t;
            var Xt = $t.prototype = new Ht;

            function Jt(t, n, e) {
                return isNaN(t) && (t = 0), isNaN(n) && (n = 0), new Kt(e, Math.cos(t *= Tt) * n, Math.sin(t) * n);
            }

            function Kt(t, n, e) {
                return this instanceof Kt
                    ? (this.l = +t, this.a = +n, void (this.b = +e))
                    : arguments.length < 2
                        ? t instanceof Kt
                            ? new Kt(t.l, t.a, t.b)
                            : t instanceof $t
                                ? Jt(t.h, t.c, t.l)
                                : yn((t = sn(t)).r, t.g, t.b)
                        : new Kt(t, n, e);
            }

            Xt.brighter = function (t) {
                return new $t(this.h, this.c, Math.min(100, this.l + Qt * (arguments.length
                    ? t
                    : 1)));
            }, Xt.darker = function (t) {
                return new $t(this.h, this.c, Math.max(0, this.l - Qt * (arguments.length
                    ? t
                    : 1)));
            }, Xt.rgb = function () {
                return Jt(this.h, this.c, this.l).rgb();
            }, o.lab = Kt;
            var Qt = 18,
                tn = .95047,
                nn = 1,
                en = 1.08883,
                rn = Kt.prototype = new Ht;

            function on(t, n, e) {
                var r = (t + 16) / 116,
                    i = r + n / 500,
                    o = r - e / 200;
                return new sn(ln(3.2404542 * (i = an(i) * tn) - 1.5371385 * (r = an(r) * nn) - .4985314 * (o = an(o) * en)), ln(-.969266 * i + 1.8760108 * r + .041556 * o), ln(.0556434 * i - .2040259 * r + 1.0572252 * o));
            }

            function un(t, n, e) {
                return t > 0
                    ? new $t(Math.atan2(e, n) * Pt, Math.sqrt(n * n + e * e), t)
                    : new $t(NaN, NaN, t);
            }

            function an(t) {
                return t > .206893034
                    ? t * t * t
                    : (t - 4 / 29) / 7.787037;
            }

            function cn(t) {
                return t > .008856
                    ? Math.pow(t, 1 / 3)
                    : 7.787037 * t + 4 / 29;
            }

            function ln(t) {
                return Math.round(255 * (t <= .00304
                    ? 12.92 * t
                    : 1.055 * Math.pow(t, 1 / 2.4) - .055));
            }

            function sn(t, n, e) {
                return this instanceof sn
                    ? (this.r = ~~t, this.g = ~~n, void (this.b = ~~e))
                    : arguments.length < 2
                        ? t instanceof sn
                            ? new sn(t.r, t.g, t.b)
                            : dn('' + t, sn, Zt)
                        : new sn(t, n, e);
            }

            function fn(t) {
                return new sn(t >> 16, t >> 8 & 255, 255 & t);
            }

            function hn(t) {
                return fn(t) + '';
            }

            rn.brighter = function (t) {
                return new Kt(Math.min(100, this.l + Qt * (arguments.length
                    ? t
                    : 1)), this.a, this.b);
            }, rn.darker = function (t) {
                return new Kt(Math.max(0, this.l - Qt * (arguments.length
                    ? t
                    : 1)), this.a, this.b);
            }, rn.rgb = function () {
                return on(this.l, this.a, this.b);
            }, o.rgb = sn;
            var pn = sn.prototype = new Ht;

            function vn(t) {
                return t < 16
                    ? '0' + Math.max(0, t).toString(16)
                    : Math.min(255, t).toString(16);
            }

            function dn(t, n, e) {
                var r,
                    i,
                    o,
                    u = 0,
                    a = 0,
                    c = 0;
                if (r = /([a-z]+)\((.*)\)/.exec(t = t.toLowerCase())) {
                    switch (i = r[2].split(','), r[1]) {
                        case'hsl':
                            return e(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
                        case'rgb':
                            return n(xn(i[0]), xn(i[1]), xn(i[2]));
                    }
                }
                return (o = bn.get(t))
                    ? n(o.r, o.g, o.b)
                    : (null == t || '#' !== t.charAt(0) || isNaN(o = parseInt(t.slice(1), 16)) || (4 === t.length
                        ? (u = (3840 & o) >> 4, u |= u >> 4, a = 240 & o, a |= a >> 4, c = 15 & o, c |= c << 4)
                        : 7 === t.length && (u = (16711680 & o) >> 16, a = (65280 & o) >> 8, c = 255 & o)), n(u, a, c));
            }

            function gn(t, n, e) {
                var r,
                    i,
                    o = Math.min(t /= 255, n /= 255, e /= 255),
                    u = Math.max(t, n, e),
                    a = u - o,
                    c = (u + o) / 2;
                return a
                    ? (i = c < .5
                        ? a / (u + o)
                        : a / (2 - u - o), r = t == u
                        ? (n - e) / a + (n < e
                        ? 6
                        : 0)
                        : n == u
                            ? (e - t) / a + 2
                            : (t - n) / a + 4, r *= 60)
                    : (r = NaN, i = c > 0 && c < 1
                        ? 0
                        : r), new Yt(r, i, c);
            }

            function yn(t, n, e) {
                var r = cn((.4124564 * (t = mn(t)) + .3575761 * (n = mn(n)) + .1804375 * (e = mn(e))) / tn),
                    i = cn((.2126729 * t + .7151522 * n + .072175 * e) / nn);
                return Kt(116 * i - 16, 500 * (r - i), 200 * (i - cn((.0193339 * t + .119192 * n + .9503041 * e) / en)));
            }

            function mn(t) {
                return (t /= 255) <= .04045
                    ? t / 12.92
                    : Math.pow((t + .055) / 1.055, 2.4);
            }

            function xn(t) {
                var n = parseFloat(t);
                return '%' === t.charAt(t.length - 1)
                    ? Math.round(2.55 * n)
                    : n;
            }

            pn.brighter = function (t) {
                t = Math.pow(.7, arguments.length
                    ? t
                    : 1);
                var n = this.r,
                    e = this.g,
                    r = this.b,
                    i = 30;
                return n || e || r
                    ? (n && n < i && (n = i), e && e < i && (e = i), r && r < i && (r = i), new sn(Math.min(255, n / t), Math.min(255, e / t), Math.min(255, r / t)))
                    : new sn(i, i, i);
            }, pn.darker = function (t) {
                return new sn((t = Math.pow(.7, arguments.length
                    ? t
                    : 1)) * this.r, t * this.g, t * this.b);
            }, pn.hsl = function () {
                return gn(this.r, this.g, this.b);
            }, pn.toString = function () {
                return '#' + vn(this.r) + vn(this.g) + vn(this.b);
            };
            var bn = o.map({
                aliceblue: 15792383,
                antiquewhite: 16444375,
                aqua: 65535,
                aquamarine: 8388564,
                azure: 15794175,
                beige: 16119260,
                bisque: 16770244,
                black: 0,
                blanchedalmond: 16772045,
                blue: 255,
                blueviolet: 9055202,
                brown: 10824234,
                burlywood: 14596231,
                cadetblue: 6266528,
                chartreuse: 8388352,
                chocolate: 13789470,
                coral: 16744272,
                cornflowerblue: 6591981,
                cornsilk: 16775388,
                crimson: 14423100,
                cyan: 65535,
                darkblue: 139,
                darkcyan: 35723,
                darkgoldenrod: 12092939,
                darkgray: 11119017,
                darkgreen: 25600,
                darkgrey: 11119017,
                darkkhaki: 12433259,
                darkmagenta: 9109643,
                darkolivegreen: 5597999,
                darkorange: 16747520,
                darkorchid: 10040012,
                darkred: 9109504,
                darksalmon: 15308410,
                darkseagreen: 9419919,
                darkslateblue: 4734347,
                darkslategray: 3100495,
                darkslategrey: 3100495,
                darkturquoise: 52945,
                darkviolet: 9699539,
                deeppink: 16716947,
                deepskyblue: 49151,
                dimgray: 6908265,
                dimgrey: 6908265,
                dodgerblue: 2003199,
                firebrick: 11674146,
                floralwhite: 16775920,
                forestgreen: 2263842,
                fuchsia: 16711935,
                gainsboro: 14474460,
                ghostwhite: 16316671,
                gold: 16766720,
                goldenrod: 14329120,
                gray: 8421504,
                green: 32768,
                greenyellow: 11403055,
                grey: 8421504,
                honeydew: 15794160,
                hotpink: 16738740,
                indianred: 13458524,
                indigo: 4915330,
                ivory: 16777200,
                khaki: 15787660,
                lavender: 15132410,
                lavenderblush: 16773365,
                lawngreen: 8190976,
                lemonchiffon: 16775885,
                lightblue: 11393254,
                lightcoral: 15761536,
                lightcyan: 14745599,
                lightgoldenrodyellow: 16448210,
                lightgray: 13882323,
                lightgreen: 9498256,
                lightgrey: 13882323,
                lightpink: 16758465,
                lightsalmon: 16752762,
                lightseagreen: 2142890,
                lightskyblue: 8900346,
                lightslategray: 7833753,
                lightslategrey: 7833753,
                lightsteelblue: 11584734,
                lightyellow: 16777184,
                lime: 65280,
                limegreen: 3329330,
                linen: 16445670,
                magenta: 16711935,
                maroon: 8388608,
                mediumaquamarine: 6737322,
                mediumblue: 205,
                mediumorchid: 12211667,
                mediumpurple: 9662683,
                mediumseagreen: 3978097,
                mediumslateblue: 8087790,
                mediumspringgreen: 64154,
                mediumturquoise: 4772300,
                mediumvioletred: 13047173,
                midnightblue: 1644912,
                mintcream: 16121850,
                mistyrose: 16770273,
                moccasin: 16770229,
                navajowhite: 16768685,
                navy: 128,
                oldlace: 16643558,
                olive: 8421376,
                olivedrab: 7048739,
                orange: 16753920,
                orangered: 16729344,
                orchid: 14315734,
                palegoldenrod: 15657130,
                palegreen: 10025880,
                paleturquoise: 11529966,
                palevioletred: 14381203,
                papayawhip: 16773077,
                peachpuff: 16767673,
                peru: 13468991,
                pink: 16761035,
                plum: 14524637,
                powderblue: 11591910,
                purple: 8388736,
                rebeccapurple: 6697881,
                red: 16711680,
                rosybrown: 12357519,
                royalblue: 4286945,
                saddlebrown: 9127187,
                salmon: 16416882,
                sandybrown: 16032864,
                seagreen: 3050327,
                seashell: 16774638,
                sienna: 10506797,
                silver: 12632256,
                skyblue: 8900331,
                slateblue: 6970061,
                slategray: 7372944,
                slategrey: 7372944,
                snow: 16775930,
                springgreen: 65407,
                steelblue: 4620980,
                tan: 13808780,
                teal: 32896,
                thistle: 14204888,
                tomato: 16737095,
                turquoise: 4251856,
                violet: 15631086,
                wheat: 16113331,
                white: 16777215,
                whitesmoke: 16119285,
                yellow: 16776960,
                yellowgreen: 10145074
            });

            function Mn(t) {
                return 'function' == typeof t
                    ? t
                    : function () {
                        return t;
                    };
            }

            function wn(t) {
                return function (n, e, r) {
                    return 2 === arguments.length && 'function' == typeof e && (r = e, e = null), _n(n, e, t, r);
                };
            }

            function _n(t, n, e, r) {
                var i = {},
                    u = o.dispatch('beforesend', 'progress', 'load', 'error'),
                    c = {},
                    l = new XMLHttpRequest,
                    s = null;

                function f() {
                    var t,
                        n = l.status;
                    if (!n && function (t) {
                        var n = t.responseType;
                        return n && 'text' !== n
                            ? t.response
                            : t.responseText;
                    }(l) || n >= 200 && n < 300 || 304 === n) {
                        try {
                            t = e.call(i, l);
                        } catch (t) {
                            return void u.error.call(i, t);
                        }
                        u.load.call(i, t);
                    } else {
                        u.error.call(i, l);
                    }
                }

                return !this.XDomainRequest || 'withCredentials' in l || !/^(http(s)?:)?\/\//.test(t) || (l = new XDomainRequest), 'onload' in l
                    ? l.onload = l.onerror = f
                    : l.onreadystatechange = function () {
                        l.readyState > 3 && f();
                    }, l.onprogress = function (t) {
                    var n = o.event;
                    o.event = t;
                    try {
                        u.progress.call(i, l);
                    } finally {
                        o.event = n;
                    }
                }, i.header = function (t, n) {
                    return t = (t + '').toLowerCase(), arguments.length < 2
                        ? c[t]
                        : (null == n
                            ? delete c[t]
                            : c[t] = n + '', i);
                }, i.mimeType = function (t) {
                    return arguments.length
                        ? (n = null == t
                            ? null
                            : t + '', i)
                        : n;
                }, i.responseType = function (t) {
                    return arguments.length
                        ? (s = t, i)
                        : s;
                }, i.response = function (t) {
                    return e = t, i;
                }, ['get', 'post'].forEach((function (t) {
                    i[t] = function () {
                        return i.send.apply(i, [t].concat(a(arguments)));
                    };
                })), i.send = function (e, r, o) {
                    if (2 === arguments.length && 'function' == typeof r && (o = r, r = null), l.open(e, t, !0), null == n || 'accept' in c || (c.accept = n + ',*/*'), l.setRequestHeader) {
                        for (var a in c) {
                            l.setRequestHeader(a, c[a]);
                        }
                    }
                    return null != n && l.overrideMimeType && l.overrideMimeType(n), null != s && (l.responseType = s), null != o && i.on('error', o).on('load', (function (t) {
                        o(null, t);
                    })), u.beforesend.call(i, l), l.send(null == r
                        ? null
                        : r), i;
                }, i.abort = function () {
                    return l.abort(), i;
                }, o.rebind(i, u, 'on'), null == r
                    ? i
                    : i.get(function (t) {
                        return 1 === t.length
                            ? function (n, e) {
                                t(null == n
                                    ? e
                                    : null);
                            }
                            : t;
                    }(r));
            }

            bn.forEach((function (t, n) {
                bn.set(t, fn(n));
            })), o.functor = Mn, o.xhr = wn(R), o.dsv = function (t, n) {
                var e = new RegExp('["' + t + '\n]'),
                    r = t.charCodeAt(0);

                function i(t, e, r) {
                    arguments.length < 3 && (r = e, e = null);
                    var i = _n(t, n, null == e
                        ? o
                        : u(e), r);
                    return i.row = function (t) {
                        return arguments.length
                            ? i.response(null == (e = t)
                                ? o
                                : u(t))
                            : e;
                    }, i;
                }

                function o(t) {
                    return i.parse(t.responseText);
                }

                function u(t) {
                    return function (n) {
                        return i.parse(n.responseText, t);
                    };
                }

                function a(n) {
                    return n.map(c).join(t);
                }

                function c(t) {
                    return e.test(t)
                        ? '"' + t.replace(/\"/g, '""') + '"'
                        : t;
                }

                return i.parse = function (t, n) {
                    var e;
                    return i.parseRows(t, (function (t, r) {
                        if (e) {
                            return e(t, r - 1);
                        }
                        var i = new Function('d', 'return {' + t.map((function (t, n) {
                            return JSON.stringify(t) + ': d[' + n + ']';
                        })).join(',') + '}');
                        e = n
                            ? function (t, e) {
                                return n(i(t), e);
                            }
                            : i;
                    }));
                }, i.parseRows = function (t, n) {
                    var e,
                        i,
                        o = {},
                        u = {},
                        a = [],
                        c = t.length,
                        l = 0,
                        s = 0;

                    function f() {
                        if (l >= c) {
                            return u;
                        }
                        if (i) {
                            return i = !1, o;
                        }
                        var n = l;
                        if (34 === t.charCodeAt(n)) {
                            for (var e = n; e++ < c;) {
                                if (34 === t.charCodeAt(e)) {
                                    if (34 !== t.charCodeAt(e + 1)) {
                                        break;
                                    }
                                    ++e;
                                }
                            }
                            return l = e + 2, 13 === (a = t.charCodeAt(e + 1))
                                ? (i = !0, 10 === t.charCodeAt(e + 2) && ++l)
                                : 10 === a && (i = !0), t.slice(n + 1, e).replace(/""/g, '"');
                        }
                        for (; l < c;) {
                            var a,
                                s = 1;
                            if (10 === (a = t.charCodeAt(l++))) {
                                i = !0;
                            } else {
                                if (13 === a) {
                                    i = !0, 10 === t.charCodeAt(l) && (++l, ++s);
                                } else {
                                    if (a !== r) {
                                        continue;
                                    }
                                }
                            }
                            return t.slice(n, l - s);
                        }
                        return t.slice(n);
                    }

                    for (; (e = f()) !== u;) {
                        for (var h = []; e !== o && e !== u;) {
                            h.push(e), e = f();
                        }
                        n && null == (h = n(h, s++)) || a.push(h);
                    }
                    return a;
                }, i.format = function (n) {
                    if (Array.isArray(n[0])) {
                        return i.formatRows(n);
                    }
                    var e = new P,
                        r = [];
                    return n.forEach((function (t) {
                        for (var n in t) {
                            e.has(n) || r.push(e.add(n));
                        }
                    })), [r.map(c).join(t)].concat(n.map((function (n) {
                        return r.map((function (t) {
                            return c(n[t]);
                        })).join(t);
                    }))).join('\n');
                }, i.formatRows = function (t) {
                    return t.map(a).join('\n');
                }, i;
            }, o.csv = o.dsv(',', 'text/csv'), o.tsv = o.dsv('\t', 'text/tab-separated-values');
            var Sn,
                En,
                Nn,
                An,
                kn = this[D(this, 'requestAnimationFrame')] || function (t) {
                    setTimeout(t, 17);
                };

            function Cn(t, n, e) {
                var r = arguments.length;
                r < 2 && (n = 0), r < 3 && (e = Date.now());
                var i = {
                    c: t,
                    t: e + n,
                    n: null
                };
                return En
                    ? En.n = i
                    : Sn = i, En = i, Nn || (An = clearTimeout(An), Nn = 1, kn(On)), i;
            }

            function On() {
                var t = Fn(),
                    n = Ln() - t;
                n > 24
                    ? (isFinite(n) && (clearTimeout(An), An = setTimeout(On, n)), Nn = 0)
                    : (Nn = 1, kn(On));
            }

            function Fn() {
                for (var t = Date.now(), n = Sn; n;) {
                    t >= n.t && n.c(t - n.t) && (n.c = null), n = n.n;
                }
                return t;
            }

            function Ln() {
                for (var t, n = Sn, e = 1 / 0; n;) {
                    n.c
                        ? (n.t < e && (e = n.t), n = (t = n).n)
                        : n = t
                            ? t.n = n.n
                            : Sn = n.n;
                }
                return En = t, e;
            }

            function Tn(t, n) {
                return n - (t
                    ? Math.ceil(Math.log(t) / Math.LN10)
                    : 1);
            }

            o.timer = function () {
                Cn.apply(this, arguments);
            }, o.timer.flush = function () {
                Fn(), Ln();
            }, o.round = function (t, n) {
                return n
                    ? Math.round(t * (n = Math.pow(10, n))) / n
                    : Math.round(t);
            };
            var Pn = ['y', 'z', 'a', 'f', 'p', 'n', 'µ', 'm', '', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'].map((function (t, n) {
                var e = Math.pow(10, 3 * w(8 - n));
                return {
                    scale: n > 8
                        ? function (t) {
                            return t / e;
                        }
                        : function (t) {
                            return t * e;
                        },
                    symbol: t
                };
            }));
            o.formatPrefix = function (t, n) {
                var e = 0;
                return (t = +t) && (t < 0 && (t *= -1), n && (t = o.round(t, Tn(t, n))), e = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), Pn[8 + e / 3];
            };
            var Rn = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
                jn = o.map({
                    b: function (t) {
                        return t.toString(2);
                    },
                    c: function (t) {
                        return String.fromCharCode(t);
                    },
                    o: function (t) {
                        return t.toString(8);
                    },
                    x: function (t) {
                        return t.toString(16);
                    },
                    X: function (t) {
                        return t.toString(16).toUpperCase();
                    },
                    g: function (t, n) {
                        return t.toPrecision(n);
                    },
                    e: function (t, n) {
                        return t.toExponential(n);
                    },
                    f: function (t, n) {
                        return t.toFixed(n);
                    },
                    r: function (t, n) {
                        return (t = o.round(t, Tn(t, n))).toFixed(Math.max(0, Math.min(20, Tn(t * (1 + 1e-15), n))));
                    }
                });

            function Dn(t) {
                return t + '';
            }

            var qn = o.time = {},
                In = Date;

            function zn() {
                this._ = new Date(arguments.length > 1
                    ? Date.UTC.apply(this, arguments)
                    : arguments[0]);
            }

            zn.prototype = {
                getDate: function () {
                    return this._.getUTCDate();
                },
                getDay: function () {
                    return this._.getUTCDay();
                },
                getFullYear: function () {
                    return this._.getUTCFullYear();
                },
                getHours: function () {
                    return this._.getUTCHours();
                },
                getMilliseconds: function () {
                    return this._.getUTCMilliseconds();
                },
                getMinutes: function () {
                    return this._.getUTCMinutes();
                },
                getMonth: function () {
                    return this._.getUTCMonth();
                },
                getSeconds: function () {
                    return this._.getUTCSeconds();
                },
                getTime: function () {
                    return this._.getTime();
                },
                getTimezoneOffset: function () {
                    return 0;
                },
                valueOf: function () {
                    return this._.valueOf();
                },
                setDate: function () {
                    Un.setUTCDate.apply(this._, arguments);
                },
                setDay: function () {
                    Un.setUTCDay.apply(this._, arguments);
                },
                setFullYear: function () {
                    Un.setUTCFullYear.apply(this._, arguments);
                },
                setHours: function () {
                    Un.setUTCHours.apply(this._, arguments);
                },
                setMilliseconds: function () {
                    Un.setUTCMilliseconds.apply(this._, arguments);
                },
                setMinutes: function () {
                    Un.setUTCMinutes.apply(this._, arguments);
                },
                setMonth: function () {
                    Un.setUTCMonth.apply(this._, arguments);
                },
                setSeconds: function () {
                    Un.setUTCSeconds.apply(this._, arguments);
                },
                setTime: function () {
                    Un.setTime.apply(this._, arguments);
                }
            };
            var Un = Date.prototype;

            function Bn(t, n, e) {
                function r(n) {
                    var e = t(n),
                        r = o(e, 1);
                    return n - e < r - n
                        ? e
                        : r;
                }

                function i(e) {
                    return n(e = t(new In(e - 1)), 1), e;
                }

                function o(t, e) {
                    return n(t = new In(+t), e), t;
                }

                function u(t, r, o) {
                    var u = i(t),
                        a = [];
                    if (o > 1) {
                        for (; u < r;) {
                            e(u) % o || a.push(new Date(+u)), n(u, 1);
                        }
                    } else {
                        for (; u < r;) {
                            a.push(new Date(+u)), n(u, 1);
                        }
                    }
                    return a;
                }

                t.floor = t, t.round = r, t.ceil = i, t.offset = o, t.range = u;
                var a = t.utc = Vn(t);
                return a.floor = a, a.round = Vn(r), a.ceil = Vn(i), a.offset = Vn(o), a.range = function (t, n, e) {
                    try {
                        In = zn;
                        var r = new zn;
                        return r._ = t, u(r, n, e);
                    } finally {
                        In = Date;
                    }
                }, t;
            }

            function Vn(t) {
                return function (n, e) {
                    try {
                        In = zn;
                        var r = new zn;
                        return r._ = n, t(r, e)._;
                    } finally {
                        In = Date;
                    }
                };
            }

            qn.year = Bn((function (t) {
                return (t = qn.day(t)).setMonth(0, 1), t;
            }), (function (t, n) {
                t.setFullYear(t.getFullYear() + n);
            }), (function (t) {
                return t.getFullYear();
            })), qn.years = qn.year.range, qn.years.utc = qn.year.utc.range, qn.day = Bn((function (t) {
                var n = new In(2e3, 0);
                return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n;
            }), (function (t, n) {
                t.setDate(t.getDate() + n);
            }), (function (t) {
                return t.getDate() - 1;
            })), qn.days = qn.day.range, qn.days.utc = qn.day.utc.range, qn.dayOfYear = function (t) {
                var n = qn.year(t);
                return Math.floor((t - n - 6e4 * (t.getTimezoneOffset() - n.getTimezoneOffset())) / 864e5);
            }, ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].forEach((function (t, n) {
                n = 7 - n;
                var e = qn[t] = Bn((function (t) {
                    return (t = qn.day(t)).setDate(t.getDate() - (t.getDay() + n) % 7), t;
                }), (function (t, n) {
                    t.setDate(t.getDate() + 7 * Math.floor(n));
                }), (function (t) {
                    var e = qn.year(t).getDay();
                    return Math.floor((qn.dayOfYear(t) + (e + n) % 7) / 7) - (e !== n);
                }));
                qn[t + 's'] = e.range, qn[t + 's'].utc = e.utc.range, qn[t + 'OfYear'] = function (t) {
                    var e = qn.year(t).getDay();
                    return Math.floor((qn.dayOfYear(t) + (e + n) % 7) / 7);
                };
            })), qn.week = qn.sunday, qn.weeks = qn.sunday.range, qn.weeks.utc = qn.sunday.utc.range, qn.weekOfYear = qn.sundayOfYear;
            var Wn = {
                    '-': '',
                    _: ' ',
                    0: '0'
                },
                Hn = /^\s*\d+/,
                Yn = /^%/;

            function Gn(t, n, e) {
                var r = t < 0
                        ? '-'
                        : '',
                    i = (r
                        ? -t
                        : t) + '',
                    o = i.length;
                return r + (o < e
                    ? new Array(e - o + 1).join(n) + i
                    : i);
            }

            function Zn(t) {
                return new RegExp('^(?:' + t.map(o.requote).join('|') + ')', 'i');
            }

            function $n(t) {
                for (var n = new S, e = -1, r = t.length; ++e < r;) {
                    n.set(t[e].toLowerCase(), e);
                }
                return n;
            }

            function Xn(t, n, e) {
                Hn.lastIndex = 0;
                var r = Hn.exec(n.slice(e, e + 1));
                return r
                    ? (t.w = +r[0], e + r[0].length)
                    : -1;
            }

            function Jn(t, n, e) {
                Hn.lastIndex = 0;
                var r = Hn.exec(n.slice(e));
                return r
                    ? (t.U = +r[0], e + r[0].length)
                    : -1;
            }

            function Kn(t, n, e) {
                Hn.lastIndex = 0;
                var r = Hn.exec(n.slice(e));
                return r
                    ? (t.W = +r[0], e + r[0].length)
                    : -1;
            }

            function Qn(t, n, e) {
                Hn.lastIndex = 0;
                var r = Hn.exec(n.slice(e, e + 4));
                return r
                    ? (t.y = +r[0], e + r[0].length)
                    : -1;
            }

            function te(t, n, e) {
                Hn.lastIndex = 0;
                var r = Hn.exec(n.slice(e, e + 2));
                return r
                    ? (t.y = function (t) {
                        return t + (t > 68
                            ? 1900
                            : 2e3);
                    }(+r[0]), e + r[0].length)
                    : -1;
            }

            function ne(t, n, e) {
                return /^[+-]\d{4}$/.test(n = n.slice(e, e + 5))
                    ? (t.Z = -n, e + 5)
                    : -1;
            }

            function ee(t, n, e) {
                Hn.lastIndex = 0;
                var r = Hn.exec(n.slice(e, e + 2));
                return r
                    ? (t.m = r[0] - 1, e + r[0].length)
                    : -1;
            }

            function re(t, n, e) {
                Hn.lastIndex = 0;
                var r = Hn.exec(n.slice(e, e + 2));
                return r
                    ? (t.d = +r[0], e + r[0].length)
                    : -1;
            }

            function ie(t, n, e) {
                Hn.lastIndex = 0;
                var r = Hn.exec(n.slice(e, e + 3));
                return r
                    ? (t.j = +r[0], e + r[0].length)
                    : -1;
            }

            function oe(t, n, e) {
                Hn.lastIndex = 0;
                var r = Hn.exec(n.slice(e, e + 2));
                return r
                    ? (t.H = +r[0], e + r[0].length)
                    : -1;
            }

            function ue(t, n, e) {
                Hn.lastIndex = 0;
                var r = Hn.exec(n.slice(e, e + 2));
                return r
                    ? (t.M = +r[0], e + r[0].length)
                    : -1;
            }

            function ae(t, n, e) {
                Hn.lastIndex = 0;
                var r = Hn.exec(n.slice(e, e + 2));
                return r
                    ? (t.S = +r[0], e + r[0].length)
                    : -1;
            }

            function ce(t, n, e) {
                Hn.lastIndex = 0;
                var r = Hn.exec(n.slice(e, e + 3));
                return r
                    ? (t.L = +r[0], e + r[0].length)
                    : -1;
            }

            function le(t) {
                var n = t.getTimezoneOffset(),
                    e = n > 0
                        ? '-'
                        : '+',
                    r = w(n) / 60 | 0,
                    i = w(n) % 60;
                return e + Gn(r, '0', 2) + Gn(i, '0', 2);
            }

            function se(t, n, e) {
                Yn.lastIndex = 0;
                var r = Yn.exec(n.slice(e, e + 1));
                return r
                    ? e + r[0].length
                    : -1;
            }

            function fe(t) {
                for (var n = t.length, e = -1; ++e < n;) {
                    t[e][0] = this(t[e][0]);
                }
                return function (n) {
                    for (var e = 0, r = t[e]; !r[1](n);) {
                        r = t[++e];
                    }
                    return r[0](n);
                };
            }

            o.locale = function (t) {
                return {
                    numberFormat: function (t) {
                        var n = t.decimal,
                            e = t.thousands,
                            r = t.grouping,
                            i = t.currency,
                            u = r && e
                                ? function (t, n) {
                                    for (var i = t.length, o = [], u = 0, a = r[0], c = 0; i > 0 && a > 0 && (c + a + 1 > n && (a = Math.max(1, n - c)), o.push(t.substring(i -= a, i + a)), !((c += a + 1) > n));) {
                                        a = r[u = (u + 1) % r.length];
                                    }
                                    return o.reverse().join(e);
                                }
                                : R;
                        return function (t) {
                            var e = Rn.exec(t),
                                r = e[1] || ' ',
                                a = e[2] || '>',
                                c = e[3] || '-',
                                l = e[4] || '',
                                s = e[5],
                                f = +e[6],
                                h = e[7],
                                p = e[8],
                                v = e[9],
                                d = 1,
                                g = '',
                                y = '',
                                m = !1,
                                x = !0;
                            switch (p && (p = +p.substring(1)), (s || '0' === r && '=' === a) && (s = r = '0', a = '='), v) {
                                case'n':
                                    h = !0, v = 'g';
                                    break;
                                case'%':
                                    d = 100, y = '%', v = 'f';
                                    break;
                                case'p':
                                    d = 100, y = '%', v = 'r';
                                    break;
                                case'b':
                                case'o':
                                case'x':
                                case'X':
                                    '#' === l && (g = '0' + v.toLowerCase());
                                case'c':
                                    x = !1;
                                case'd':
                                    m = !0, p = 0;
                                    break;
                                case's':
                                    d = -1, v = 'r';
                            }
                            '$' === l && (g = i[0], y = i[1]), 'r' != v || p || (v = 'g'), null != p && ('g' == v
                                ? p = Math.max(1, Math.min(21, p))
                                : 'e' != v && 'f' != v || (p = Math.max(0, Math.min(20, p)))), v = jn.get(v) || Dn;
                            var b = s && h;
                            return function (t) {
                                var e = y;
                                if (m && t % 1) {
                                    return '';
                                }
                                var i = t < 0 || 0 === t && 1 / t < 0
                                    ? (t = -t, '-')
                                    : '-' === c
                                        ? ''
                                        : c;
                                if (d < 0) {
                                    var l = o.formatPrefix(t, p);
                                    t = l.scale(t), e = l.symbol + y;
                                } else {
                                    t *= d;
                                }
                                var M,
                                    w,
                                    _ = (t = v(t, p)).lastIndexOf('.');
                                if (_ < 0) {
                                    var S = x
                                        ? t.lastIndexOf('e')
                                        : -1;
                                    S < 0
                                        ? (M = t, w = '')
                                        : (M = t.substring(0, S), w = t.substring(S));
                                } else {
                                    M = t.substring(0, _), w = n + t.substring(_ + 1);
                                }
                                !s && h && (M = u(M, 1 / 0));
                                var E = g.length + M.length + w.length + (b
                                        ? 0
                                        : i.length),
                                    N = E < f
                                        ? new Array(E = f - E + 1).join(r)
                                        : '';
                                return b && (M = u(N + M, N.length
                                    ? f - w.length
                                    : 1 / 0)), i += g, t = M + w, ('<' === a
                                    ? i + t + N
                                    : '>' === a
                                        ? N + i + t
                                        : '^' === a
                                            ? N.substring(0, E >>= 1) + i + t + N.substring(E)
                                            : i + (b
                                            ? t
                                            : N + t)) + e;
                            };
                        };
                    }(t),
                    timeFormat: function (t) {
                        var n = t.dateTime,
                            e = t.date,
                            r = t.time,
                            i = t.periods,
                            u = t.days,
                            a = t.shortDays,
                            c = t.months,
                            l = t.shortMonths;

                        function s(t) {
                            var n = t.length;

                            function e(e) {
                                for (var r, i, o, u = [], a = -1, c = 0; ++a < n;) {
                                    37 === t.charCodeAt(a) && (u.push(t.slice(c, a)), null != (i = Wn[r = t.charAt(++a)]) && (r = t.charAt(++a)), (o = M[r]) && (r = o(e, null == i
                                        ? 'e' === r
                                            ? ' '
                                            : '0'
                                        : i)), u.push(r), c = a + 1);
                                }
                                return u.push(t.slice(c, a)), u.join('');
                            }

                            return e.parse = function (n) {
                                var e = {
                                    y: 1900,
                                    m: 0,
                                    d: 1,
                                    H: 0,
                                    M: 0,
                                    S: 0,
                                    L: 0,
                                    Z: null
                                };
                                if (f(e, t, n, 0) != n.length) {
                                    return null;
                                }
                                'p' in e && (e.H = e.H % 12 + 12 * e.p);
                                var r = null != e.Z && In !== zn,
                                    i = new (r
                                        ? zn
                                        : In);
                                return 'j' in e
                                    ? i.setFullYear(e.y, 0, e.j)
                                    : 'W' in e || 'U' in e
                                        ? ('w' in e || (e.w = 'W' in e
                                            ? 1
                                            : 0), i.setFullYear(e.y, 0, 1), i.setFullYear(e.y, 0, 'W' in e
                                            ? (e.w + 6) % 7 + 7 * e.W - (i.getDay() + 5) % 7
                                            : e.w + 7 * e.U - (i.getDay() + 6) % 7))
                                        : i.setFullYear(e.y, e.m, e.d), i.setHours(e.H + (e.Z / 100 | 0), e.M + e.Z % 100, e.S, e.L), r
                                    ? i._
                                    : i;
                            }, e.toString = function () {
                                return t;
                            }, e;
                        }

                        function f(t, n, e, r) {
                            for (var i, o, u, a = 0, c = n.length, l = e.length; a < c;) {
                                if (r >= l) {
                                    return -1;
                                }
                                if (37 === (i = n.charCodeAt(a++))) {
                                    if (u = n.charAt(a++), !(o = w[u in Wn
                                        ? n.charAt(a++)
                                        : u]) || (r = o(t, e, r)) < 0) {
                                        return -1;
                                    }
                                } else {
                                    if (i != e.charCodeAt(r++)) {
                                        return -1;
                                    }
                                }
                            }
                            return r;
                        }

                        s.utc = function (t) {
                            var n = s(t);

                            function e(t) {
                                try {
                                    var e = new (In = zn);
                                    return e._ = t, n(e);
                                } finally {
                                    In = Date;
                                }
                            }

                            return e.parse = function (t) {
                                try {
                                    In = zn;
                                    var e = n.parse(t);
                                    return e && e._;
                                } finally {
                                    In = Date;
                                }
                            }, e.toString = n.toString, e;
                        }, s.multi = s.utc.multi = fe;
                        var h = o.map(),
                            p = Zn(u),
                            v = $n(u),
                            d = Zn(a),
                            g = $n(a),
                            y = Zn(c),
                            m = $n(c),
                            x = Zn(l),
                            b = $n(l);
                        i.forEach((function (t, n) {
                            h.set(t.toLowerCase(), n);
                        }));
                        var M = {
                                a: function (t) {
                                    return a[t.getDay()];
                                },
                                A: function (t) {
                                    return u[t.getDay()];
                                },
                                b: function (t) {
                                    return l[t.getMonth()];
                                },
                                B: function (t) {
                                    return c[t.getMonth()];
                                },
                                c: s(n),
                                d: function (t, n) {
                                    return Gn(t.getDate(), n, 2);
                                },
                                e: function (t, n) {
                                    return Gn(t.getDate(), n, 2);
                                },
                                H: function (t, n) {
                                    return Gn(t.getHours(), n, 2);
                                },
                                I: function (t, n) {
                                    return Gn(t.getHours() % 12 || 12, n, 2);
                                },
                                j: function (t, n) {
                                    return Gn(1 + qn.dayOfYear(t), n, 3);
                                },
                                L: function (t, n) {
                                    return Gn(t.getMilliseconds(), n, 3);
                                },
                                m: function (t, n) {
                                    return Gn(t.getMonth() + 1, n, 2);
                                },
                                M: function (t, n) {
                                    return Gn(t.getMinutes(), n, 2);
                                },
                                p: function (t) {
                                    return i[+(t.getHours() >= 12)];
                                },
                                S: function (t, n) {
                                    return Gn(t.getSeconds(), n, 2);
                                },
                                U: function (t, n) {
                                    return Gn(qn.sundayOfYear(t), n, 2);
                                },
                                w: function (t) {
                                    return t.getDay();
                                },
                                W: function (t, n) {
                                    return Gn(qn.mondayOfYear(t), n, 2);
                                },
                                x: s(e),
                                X: s(r),
                                y: function (t, n) {
                                    return Gn(t.getFullYear() % 100, n, 2);
                                },
                                Y: function (t, n) {
                                    return Gn(t.getFullYear() % 1e4, n, 4);
                                },
                                Z: le,
                                '%': function () {
                                    return '%';
                                }
                            },
                            w = {
                                a: function (t, n, e) {
                                    d.lastIndex = 0;
                                    var r = d.exec(n.slice(e));
                                    return r
                                        ? (t.w = g.get(r[0].toLowerCase()), e + r[0].length)
                                        : -1;
                                },
                                A: function (t, n, e) {
                                    p.lastIndex = 0;
                                    var r = p.exec(n.slice(e));
                                    return r
                                        ? (t.w = v.get(r[0].toLowerCase()), e + r[0].length)
                                        : -1;
                                },
                                b: function (t, n, e) {
                                    x.lastIndex = 0;
                                    var r = x.exec(n.slice(e));
                                    return r
                                        ? (t.m = b.get(r[0].toLowerCase()), e + r[0].length)
                                        : -1;
                                },
                                B: function (t, n, e) {
                                    y.lastIndex = 0;
                                    var r = y.exec(n.slice(e));
                                    return r
                                        ? (t.m = m.get(r[0].toLowerCase()), e + r[0].length)
                                        : -1;
                                },
                                c: function (t, n, e) {
                                    return f(t, M.c.toString(), n, e);
                                },
                                d: re,
                                e: re,
                                H: oe,
                                I: oe,
                                j: ie,
                                L: ce,
                                m: ee,
                                M: ue,
                                p: function (t, n, e) {
                                    var r = h.get(n.slice(e, e += 2).toLowerCase());
                                    return null == r
                                        ? -1
                                        : (t.p = r, e);
                                },
                                S: ae,
                                U: Jn,
                                w: Xn,
                                W: Kn,
                                x: function (t, n, e) {
                                    return f(t, M.x.toString(), n, e);
                                },
                                X: function (t, n, e) {
                                    return f(t, M.X.toString(), n, e);
                                },
                                y: te,
                                Y: Qn,
                                Z: ne,
                                '%': se
                            };
                        return s;
                    }(t)
                };
            };
            var he = o.locale({
                decimal: '.',
                thousands: ',',
                grouping: [3],
                currency: ['$', ''],
                dateTime: '%a %b %e %X %Y',
                date: '%m/%d/%Y',
                time: '%H:%M:%S',
                periods: ['AM', 'PM'],
                days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            });

            function pe() {
            }

            o.format = he.numberFormat, o.geo = {}, pe.prototype = {
                s: 0,
                t: 0,
                add: function (t) {
                    de(t, this.t, ve), de(ve.s, this.s, this), this.s
                        ? this.t += ve.t
                        : this.s = ve.t;
                },
                reset: function () {
                    this.s = this.t = 0;
                },
                valueOf: function () {
                    return this.s;
                }
            };
            var ve = new pe;

            function de(t, n, e) {
                var r = e.s = t + n,
                    i = r - t,
                    o = r - i;
                e.t = t - o + (n - i);
            }

            function ge(t, n) {
                t && me.hasOwnProperty(t.type) && me[t.type](t, n);
            }

            o.geo.stream = function (t, n) {
                t && ye.hasOwnProperty(t.type)
                    ? ye[t.type](t, n)
                    : ge(t, n);
            };
            var ye = {
                    Feature: function (t, n) {
                        ge(t.geometry, n);
                    },
                    FeatureCollection: function (t, n) {
                        for (var e = t.features, r = -1, i = e.length; ++r < i;) {
                            ge(e[r].geometry, n);
                        }
                    }
                },
                me = {
                    Sphere: function (t, n) {
                        n.sphere();
                    },
                    Point: function (t, n) {
                        t = t.coordinates, n.point(t[0], t[1], t[2]);
                    },
                    MultiPoint: function (t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
                            t = e[r], n.point(t[0], t[1], t[2]);
                        }
                    },
                    LineString: function (t, n) {
                        xe(t.coordinates, n, 0);
                    },
                    MultiLineString: function (t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
                            xe(e[r], n, 0);
                        }
                    },
                    Polygon: function (t, n) {
                        be(t.coordinates, n);
                    },
                    MultiPolygon: function (t, n) {
                        for (var e = t.coordinates, r = -1, i = e.length; ++r < i;) {
                            be(e[r], n);
                        }
                    },
                    GeometryCollection: function (t, n) {
                        for (var e = t.geometries, r = -1, i = e.length; ++r < i;) {
                            ge(e[r], n);
                        }
                    }
                };

            function xe(t, n, e) {
                var r,
                    i = -1,
                    o = t.length - e;
                for (n.lineStart(); ++i < o;) {
                    r = t[i], n.point(r[0], r[1], r[2]);
                }
                n.lineEnd();
            }

            function be(t, n) {
                var e = -1,
                    r = t.length;
                for (n.polygonStart(); ++e < r;) {
                    xe(t[e], n, 1);
                }
                n.polygonEnd();
            }

            o.geo.area = function (t) {
                return Me = 0, o.geo.stream(t, Pe), Me;
            };
            var Me,
                we,
                _e,
                Se,
                Ee,
                Ne,
                Ae,
                ke,
                Ce,
                Oe,
                Fe,
                Le,
                Te = new pe,
                Pe = {
                    sphere: function () {
                        Me += 4 * Ct;
                    },
                    point: I,
                    lineStart: I,
                    lineEnd: I,
                    polygonStart: function () {
                        Te.reset(), Pe.lineStart = Re;
                    },
                    polygonEnd: function () {
                        var t = 2 * Te;
                        Me += t < 0
                            ? 4 * Ct + t
                            : t, Pe.lineStart = Pe.lineEnd = Pe.point = I;
                    }
                };

            function Re() {
                var t,
                    n,
                    e,
                    r,
                    i;

                function o(t, n) {
                    n = n * Tt / 2 + Ct / 4;
                    var o = (t *= Tt) - e,
                        u = o >= 0
                            ? 1
                            : -1,
                        a = u * o,
                        c = Math.cos(n),
                        l = Math.sin(n),
                        s = i * l,
                        f = r * c + s * Math.cos(a),
                        h = s * u * Math.sin(a);
                    Te.add(Math.atan2(h, f)), e = t, r = c, i = l;
                }

                Pe.point = function (u, a) {
                    Pe.point = o, e = (t = u) * Tt, r = Math.cos(a = (n = a) * Tt / 2 + Ct / 4), i = Math.sin(a);
                }, Pe.lineEnd = function () {
                    o(t, n);
                };
            }

            function je(t) {
                var n = t[0],
                    e = t[1],
                    r = Math.cos(e);
                return [r * Math.cos(n), r * Math.sin(n), Math.sin(e)];
            }

            function De(t, n) {
                return t[0] * n[0] + t[1] * n[1] + t[2] * n[2];
            }

            function qe(t, n) {
                return [t[1] * n[2] - t[2] * n[1], t[2] * n[0] - t[0] * n[2], t[0] * n[1] - t[1] * n[0]];
            }

            function Ie(t, n) {
                t[0] += n[0], t[1] += n[1], t[2] += n[2];
            }

            function ze(t, n) {
                return [t[0] * n, t[1] * n, t[2] * n];
            }

            function Ue(t) {
                var n = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                t[0] /= n, t[1] /= n, t[2] /= n;
            }

            function Be(t) {
                return [Math.atan2(t[1], t[0]), qt(t[2])];
            }

            function Ve(t, n) {
                return w(t[0] - n[0]) < At && w(t[1] - n[1]) < At;
            }

            o.geo.bounds = function () {
                var t,
                    n,
                    e,
                    r,
                    i,
                    u,
                    a,
                    c,
                    l,
                    s,
                    f,
                    h = {
                        point: p,
                        lineStart: d,
                        lineEnd: g,
                        polygonStart: function () {
                            h.point = y, h.lineStart = m, h.lineEnd = x, l = 0, Pe.polygonStart();
                        },
                        polygonEnd: function () {
                            Pe.polygonEnd(), h.point = p, h.lineStart = d, h.lineEnd = g, Te < 0
                                ? (t = -(e = 180), n = -(r = 90))
                                : l > At
                                    ? r = 90
                                    : l < -At && (n = -90), f[0] = t, f[1] = e;
                        }
                    };

                function p(i, o) {
                    s.push(f = [t = i, e = i]), o < n && (n = o), o > r && (r = o);
                }

                function v(o, u) {
                    var a = je([o * Tt, u * Tt]);
                    if (c) {
                        var l = qe(c, a),
                            s = qe([l[1], -l[0], 0], l);
                        Ue(s), s = Be(s);
                        var f = o - i,
                            h = f > 0
                                ? 1
                                : -1,
                            v = s[0] * Pt * h,
                            d = w(f) > 180;
                        if (d ^ (h * i < v && v < h * o)) {
                            (g = s[1] * Pt) > r && (r = g);
                        } else {
                            if (d ^ (h * i < (v = (v + 360) % 360 - 180) && v < h * o)) {
                                var g;
                                (g = -s[1] * Pt) < n && (n = g);
                            } else {
                                u < n && (n = u), u > r && (r = u);
                            }
                        }
                        d
                            ? o < i
                                ? b(t, o) > b(t, e) && (e = o)
                                : b(o, e) > b(t, e) && (t = o)
                            : e >= t
                                ? (o < t && (t = o), o > e && (e = o))
                                : o > i
                                    ? b(t, o) > b(t, e) && (e = o)
                                    : b(o, e) > b(t, e) && (t = o);
                    } else {
                        p(o, u);
                    }
                    c = a, i = o;
                }

                function d() {
                    h.point = v;
                }

                function g() {
                    f[0] = t, f[1] = e, h.point = p, c = null;
                }

                function y(t, n) {
                    if (c) {
                        var e = t - i;
                        l += w(e) > 180
                            ? e + (e > 0
                            ? 360
                            : -360)
                            : e;
                    } else {
                        u = t, a = n;
                    }
                    Pe.point(t, n), v(t, n);
                }

                function m() {
                    Pe.lineStart();
                }

                function x() {
                    y(u, a), Pe.lineEnd(), w(l) > At && (t = -(e = 180)), f[0] = t, f[1] = e, c = null;
                }

                function b(t, n) {
                    return (n -= t) < 0
                        ? n + 360
                        : n;
                }

                function M(t, n) {
                    return t[0] - n[0];
                }

                function _(t, n) {
                    return n[0] <= n[1]
                        ? n[0] <= t && t <= n[1]
                        : t < n[0] || n[1] < t;
                }

                return function (i) {
                    if (r = e = -(t = n = 1 / 0), s = [], o.geo.stream(i, h), l = s.length) {
                        s.sort(M);
                        for (var u = 1, a = [d = s[0]]; u < l; ++u) {
                            _((p = s[u])[0], d) || _(p[1], d)
                                ? (b(d[0], p[1]) > b(d[0], d[1]) && (d[1] = p[1]), b(p[0], d[1]) > b(d[0], d[1]) && (d[0] = p[0]))
                                : a.push(d = p);
                        }
                        for (var c, l, p, v = -1 / 0, d = (u = 0, a[l = a.length - 1]); u <= l; d = p, ++u) {
                            p = a[u], (c = b(d[1], p[0])) > v && (v = c, t = p[0], e = d[1]);
                        }
                    }
                    return s = f = null, t === 1 / 0 || n === 1 / 0
                        ? [[NaN, NaN], [NaN, NaN]]
                        : [[t, n], [e, r]];
                };
            }(), o.geo.centroid = function (t) {
                we = _e = Se = Ee = Ne = Ae = ke = Ce = Oe = Fe = Le = 0, o.geo.stream(t, We);
                var n = Oe,
                    e = Fe,
                    r = Le,
                    i = n * n + e * e + r * r;
                return i < kt && (n = Ae, e = ke, r = Ce, _e < At && (n = Se, e = Ee, r = Ne), (i = n * n + e * e + r * r) < kt)
                    ? [NaN, NaN]
                    : [Math.atan2(e, n) * Pt, qt(r / Math.sqrt(i)) * Pt];
            };
            var We = {
                sphere: I,
                point: He,
                lineStart: Ge,
                lineEnd: Ze,
                polygonStart: function () {
                    We.lineStart = $e;
                },
                polygonEnd: function () {
                    We.lineStart = Ge;
                }
            };

            function He(t, n) {
                t *= Tt;
                var e = Math.cos(n *= Tt);
                Ye(e * Math.cos(t), e * Math.sin(t), Math.sin(n));
            }

            function Ye(t, n, e) {
                Se += (t - Se) / ++we, Ee += (n - Ee) / we, Ne += (e - Ne) / we;
            }

            function Ge() {
                var t,
                    n,
                    e;

                function r(r, i) {
                    r *= Tt;
                    var o = Math.cos(i *= Tt),
                        u = o * Math.cos(r),
                        a = o * Math.sin(r),
                        c = Math.sin(i),
                        l = Math.atan2(Math.sqrt((l = n * c - e * a) * l + (l = e * u - t * c) * l + (l = t * a - n * u) * l), t * u + n * a + e * c);
                    _e += l, Ae += l * (t + (t = u)), ke += l * (n + (n = a)), Ce += l * (e + (e = c)), Ye(t, n, e);
                }

                We.point = function (i, o) {
                    i *= Tt;
                    var u = Math.cos(o *= Tt);
                    t = u * Math.cos(i), n = u * Math.sin(i), e = Math.sin(o), We.point = r, Ye(t, n, e);
                };
            }

            function Ze() {
                We.point = He;
            }

            function $e() {
                var t,
                    n,
                    e,
                    r,
                    i;

                function o(t, n) {
                    t *= Tt;
                    var o = Math.cos(n *= Tt),
                        u = o * Math.cos(t),
                        a = o * Math.sin(t),
                        c = Math.sin(n),
                        l = r * c - i * a,
                        s = i * u - e * c,
                        f = e * a - r * u,
                        h = Math.sqrt(l * l + s * s + f * f),
                        p = e * u + r * a + i * c,
                        v = h && -Dt(p) / h,
                        d = Math.atan2(h, p);
                    Oe += v * l, Fe += v * s, Le += v * f, _e += d, Ae += d * (e + (e = u)), ke += d * (r + (r = a)), Ce += d * (i + (i = c)), Ye(e, r, i);
                }

                We.point = function (u, a) {
                    t = u, n = a, We.point = o, u *= Tt;
                    var c = Math.cos(a *= Tt);
                    e = c * Math.cos(u), r = c * Math.sin(u), i = Math.sin(a), Ye(e, r, i);
                }, We.lineEnd = function () {
                    o(t, n), We.lineEnd = Ze, We.point = He;
                };
            }

            function Xe(t, n) {
                function e(e, r) {
                    return e = t(e, r), n(e[0], e[1]);
                }

                return t.invert && n.invert && (e.invert = function (e, r) {
                    return (e = n.invert(e, r)) && t.invert(e[0], e[1]);
                }), e;
            }

            function Je() {
                return !0;
            }

            function Ke(t, n, e, r, i) {
                var o = [],
                    u = [];
                if (t.forEach((function (t) {
                    if (!((n = t.length - 1) <= 0)) {
                        var n,
                            e = t[0],
                            r = t[n];
                        if (Ve(e, r)) {
                            i.lineStart();
                            for (var a = 0; a < n; ++a) {
                                i.point((e = t[a])[0], e[1]);
                            }
                            i.lineEnd();
                        } else {
                            var c = new tr(e, t, null, !0),
                                l = new tr(e, null, c, !1);
                            c.o = l, o.push(c), u.push(l), l = new tr(r, null, c = new tr(r, t, null, !1), !0), c.o = l, o.push(c), u.push(l);
                        }
                    }
                })), u.sort(n), Qe(o), Qe(u), o.length) {
                    for (var a = 0, c = e, l = u.length; a < l; ++a) {
                        u[a].e = c = !c;
                    }
                    for (var s, f, h = o[0]; ;) {
                        for (var p = h, v = !0; p.v;) {
                            if ((p = p.n) === h) {
                                return;
                            }
                        }
                        s = p.z, i.lineStart();
                        do {
                            if (p.v = p.o.v = !0, p.e) {
                                if (v) {
                                    for (a = 0, l = s.length; a < l; ++a) {
                                        i.point((f = s[a])[0], f[1]);
                                    }
                                } else {
                                    r(p.x, p.n.x, 1, i);
                                }
                                p = p.n;
                            } else {
                                if (v) {
                                    for (a = (s = p.p.z).length - 1; a >= 0; --a) {
                                        i.point((f = s[a])[0], f[1]);
                                    }
                                } else {
                                    r(p.x, p.p.x, -1, i);
                                }
                                p = p.p;
                            }
                            s = (p = p.o).z, v = !v;
                        } while (!p.v);
                        i.lineEnd();
                    }
                }
            }

            function Qe(t) {
                if (n = t.length) {
                    for (var n, e, r = 0, i = t[0]; ++r < n;) {
                        i.n = e = t[r], e.p = i, i = e;
                    }
                    i.n = e = t[0], e.p = i;
                }
            }

            function tr(t, n, e, r) {
                this.x = t, this.z = n, this.o = e, this.e = r, this.v = !1, this.n = this.p = null;
            }

            function nr(t, n, e, r) {
                return function (i, u) {
                    var a,
                        c = n(u),
                        l = i.invert(r[0], r[1]),
                        s = {
                            point: f,
                            lineStart: p,
                            lineEnd: v,
                            polygonStart: function () {
                                s.point = b, s.lineStart = M, s.lineEnd = w, a = [], d = [];
                            },
                            polygonEnd: function () {
                                s.point = f, s.lineStart = p, s.lineEnd = v, a = o.merge(a);
                                var t = function (t, n) {
                                    var e = t[0],
                                        r = t[1],
                                        i = [Math.sin(e), -Math.cos(e), 0],
                                        o = 0,
                                        u = 0;
                                    Te.reset();
                                    for (var a = 0, c = n.length; a < c; ++a) {
                                        var l = n[a],
                                            s = l.length;
                                        if (s) {
                                            for (var f = l[0], h = f[0], p = f[1] / 2 + Ct / 4, v = Math.sin(p), d = Math.cos(p), g = 1; ;) {
                                                g === s && (g = 0);
                                                var y = (t = l[g])[0],
                                                    m = t[1] / 2 + Ct / 4,
                                                    x = Math.sin(m),
                                                    b = Math.cos(m),
                                                    M = y - h,
                                                    w = M >= 0
                                                        ? 1
                                                        : -1,
                                                    _ = w * M,
                                                    S = _ > Ct,
                                                    E = v * x;
                                                if (Te.add(Math.atan2(E * w * Math.sin(_), d * b + E * Math.cos(_))), o += S
                                                    ? M + w * Ot
                                                    : M, S ^ h >= e ^ y >= e) {
                                                    var N = qe(je(f), je(t));
                                                    Ue(N);
                                                    var A = qe(i, N);
                                                    Ue(A);
                                                    var k = (S ^ M >= 0
                                                        ? -1
                                                        : 1) * qt(A[2]);
                                                    (r > k || r === k && (N[0] || N[1])) && (u += S ^ M >= 0
                                                        ? 1
                                                        : -1);
                                                }
                                                if (!g++) {
                                                    break;
                                                }
                                                h = y, v = x, d = b, f = t;
                                            }
                                        }
                                    }
                                    return (o < -At || o < At && Te < -At) ^ 1 & u;
                                }(l, d);
                                a.length
                                    ? (x || (u.polygonStart(), x = !0), Ke(a, ir, t, e, u))
                                    : t && (x || (u.polygonStart(), x = !0), u.lineStart(), e(null, null, 1, u), u.lineEnd()), x && (u.polygonEnd(), x = !1), a = d = null;
                            },
                            sphere: function () {
                                u.polygonStart(), u.lineStart(), e(null, null, 1, u), u.lineEnd(), u.polygonEnd();
                            }
                        };

                    function f(n, e) {
                        var r = i(n, e);
                        t(n = r[0], e = r[1]) && u.point(n, e);
                    }

                    function h(t, n) {
                        var e = i(t, n);
                        c.point(e[0], e[1]);
                    }

                    function p() {
                        s.point = h, c.lineStart();
                    }

                    function v() {
                        s.point = f, c.lineEnd();
                    }

                    var d,
                        g,
                        y = rr(),
                        m = n(y),
                        x = !1;

                    function b(t, n) {
                        g.push([t, n]);
                        var e = i(t, n);
                        m.point(e[0], e[1]);
                    }

                    function M() {
                        m.lineStart(), g = [];
                    }

                    function w() {
                        b(g[0][0], g[0][1]), m.lineEnd();
                        var t,
                            n = m.clean(),
                            e = y.buffer(),
                            r = e.length;
                        if (g.pop(), d.push(g), g = null, r) {
                            if (1 & n) {
                                var i,
                                    o = -1;
                                if ((r = (t = e[0]).length - 1) > 0) {
                                    for (x || (u.polygonStart(), x = !0), u.lineStart(); ++o < r;) {
                                        u.point((i = t[o])[0], i[1]);
                                    }
                                    u.lineEnd();
                                }
                            } else {
                                r > 1 && 2 & n && e.push(e.pop().concat(e.shift())), a.push(e.filter(er));
                            }
                        }
                    }

                    return s;
                };
            }

            function er(t) {
                return t.length > 1;
            }

            function rr() {
                var t,
                    n = [];
                return {
                    lineStart: function () {
                        n.push(t = []);
                    },
                    point: function (n, e) {
                        t.push([n, e]);
                    },
                    lineEnd: I,
                    buffer: function () {
                        var e = n;
                        return n = [], t = null, e;
                    },
                    rejoin: function () {
                        n.length > 1 && n.push(n.pop().concat(n.shift()));
                    }
                };
            }

            function ir(t, n) {
                return ((t = t.x)[0] < 0
                    ? t[1] - Lt - At
                    : Lt - t[1]) - ((n = n.x)[0] < 0
                    ? n[1] - Lt - At
                    : Lt - n[1]);
            }

            var or = nr(Je, (function (t) {
                var n,
                    e = NaN,
                    r = NaN,
                    i = NaN;
                return {
                    lineStart: function () {
                        t.lineStart(), n = 1;
                    },
                    point: function (o, u) {
                        var a = o > 0
                                ? Ct
                                : -Ct,
                            c = w(o - e);
                        w(c - Ct) < At
                            ? (t.point(e, r = (r + u) / 2 > 0
                                ? Lt
                                : -Lt), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), t.point(o, r), n = 0)
                            : i !== a && c >= Ct && (w(e - i) < At && (e -= i * At), w(o - a) < At && (o -= a * At), r = function (t, n, e, r) {
                            var i,
                                o,
                                u = Math.sin(t - e);
                            return w(u) > At
                                ? Math.atan((Math.sin(n) * (o = Math.cos(r)) * Math.sin(e) - Math.sin(r) * (i = Math.cos(n)) * Math.sin(t)) / (i * o * u))
                                : (n + r) / 2;
                        }(e, r, o, u), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(a, r), n = 0), t.point(e = o, r = u), i = a;
                    },
                    lineEnd: function () {
                        t.lineEnd(), e = r = NaN;
                    },
                    clean: function () {
                        return 2 - n;
                    }
                };
            }), (function (t, n, e, r) {
                var i;
                if (null == t) {
                    i = e * Lt, r.point(-Ct, i), r.point(0, i), r.point(Ct, i), r.point(Ct, 0), r.point(Ct, -i), r.point(0, -i), r.point(-Ct, -i), r.point(-Ct, 0), r.point(-Ct, i);
                } else {
                    if (w(t[0] - n[0]) > At) {
                        var o = t[0] < n[0]
                            ? Ct
                            : -Ct;
                        i = e * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i);
                    } else {
                        r.point(n[0], n[1]);
                    }
                }
            }), [-Ct, -Ct / 2]);

            function ur(t, n, e, r) {
                return function (i) {
                    var o,
                        u = i.a,
                        a = i.b,
                        c = u.x,
                        l = u.y,
                        s = 0,
                        f = 1,
                        h = a.x - c,
                        p = a.y - l;
                    if (o = t - c, h || !(o > 0)) {
                        if (o /= h, h < 0) {
                            if (o < s) {
                                return;
                            }
                            o < f && (f = o);
                        } else {
                            if (h > 0) {
                                if (o > f) {
                                    return;
                                }
                                o > s && (s = o);
                            }
                        }
                        if (o = e - c, h || !(o < 0)) {
                            if (o /= h, h < 0) {
                                if (o > f) {
                                    return;
                                }
                                o > s && (s = o);
                            } else {
                                if (h > 0) {
                                    if (o < s) {
                                        return;
                                    }
                                    o < f && (f = o);
                                }
                            }
                            if (o = n - l, p || !(o > 0)) {
                                if (o /= p, p < 0) {
                                    if (o < s) {
                                        return;
                                    }
                                    o < f && (f = o);
                                } else {
                                    if (p > 0) {
                                        if (o > f) {
                                            return;
                                        }
                                        o > s && (s = o);
                                    }
                                }
                                if (o = r - l, p || !(o < 0)) {
                                    if (o /= p, p < 0) {
                                        if (o > f) {
                                            return;
                                        }
                                        o > s && (s = o);
                                    } else {
                                        if (p > 0) {
                                            if (o < s) {
                                                return;
                                            }
                                            o < f && (f = o);
                                        }
                                    }
                                    return s > 0 && (i.a = {
                                        x: c + s * h,
                                        y: l + s * p
                                    }), f < 1 && (i.b = {
                                        x: c + f * h,
                                        y: l + f * p
                                    }), i;
                                }
                            }
                        }
                    }
                };
            }

            var ar = 1e9;

            function cr(t, n, e, r) {
                return function (c) {
                    var l,
                        s,
                        f,
                        h,
                        p,
                        v,
                        d,
                        g,
                        y,
                        m,
                        x,
                        b = c,
                        M = rr(),
                        w = ur(t, n, e, r),
                        _ = {
                            point: N,
                            lineStart: function () {
                                _.point = A, s && s.push(f = []);
                                m = !0, y = !1, d = g = NaN;
                            },
                            lineEnd: function () {
                                l && (A(h, p), v && y && M.rejoin(), l.push(M.buffer()));
                                _.point = N, y && c.lineEnd();
                            },
                            polygonStart: function () {
                                c = M, l = [], s = [], x = !0;
                            },
                            polygonEnd: function () {
                                c = b, l = o.merge(l);
                                var n = function (t) {
                                        for (var n = 0, e = s.length, r = t[1], i = 0; i < e; ++i) {
                                            for (var o, u = 1, a = s[i], c = a.length, l = a[0]; u < c; ++u) {
                                                o = a[u], l[1] <= r
                                                    ? o[1] > r && jt(l, o, t) > 0 && ++n
                                                    : o[1] <= r && jt(l, o, t) < 0 && --n, l = o;
                                            }
                                        }
                                        return 0 !== n;
                                    }([t, r]),
                                    e = x && n,
                                    i = l.length;
                                (e || i) && (c.polygonStart(), e && (c.lineStart(), S(null, null, 1, c), c.lineEnd()), i && Ke(l, u, n, S, c), c.polygonEnd()), l = s = f = null;
                            }
                        };

                    function S(o, u, c, l) {
                        var s = 0,
                            f = 0;
                        if (null == o || (s = i(o, c)) !== (f = i(u, c)) || a(o, u) < 0 ^ c > 0) {
                            do {
                                l.point(0 === s || 3 === s
                                    ? t
                                    : e, s > 1
                                    ? r
                                    : n);
                            } while ((s = (s + c + 4) % 4) !== f);
                        } else {
                            l.point(u[0], u[1]);
                        }
                    }

                    function E(i, o) {
                        return t <= i && i <= e && n <= o && o <= r;
                    }

                    function N(t, n) {
                        E(t, n) && c.point(t, n);
                    }

                    function A(t, n) {
                        var e = E(t = Math.max(-ar, Math.min(ar, t)), n = Math.max(-ar, Math.min(ar, n)));
                        if (s && f.push([t, n]), m) {
                            h = t, p = n, v = e, m = !1, e && (c.lineStart(), c.point(t, n));
                        } else {
                            if (e && y) {
                                c.point(t, n);
                            } else {
                                var r = {
                                    a: {
                                        x: d,
                                        y: g
                                    },
                                    b: {
                                        x: t,
                                        y: n
                                    }
                                };
                                w(r)
                                    ? (y || (c.lineStart(), c.point(r.a.x, r.a.y)), c.point(r.b.x, r.b.y), e || c.lineEnd(), x = !1)
                                    : e && (c.lineStart(), c.point(t, n), x = !1);
                            }
                        }
                        d = t, g = n, y = e;
                    }

                    return _;
                };

                function i(r, i) {
                    return w(r[0] - t) < At
                        ? i > 0
                            ? 0
                            : 3
                        : w(r[0] - e) < At
                            ? i > 0
                                ? 2
                                : 1
                            : w(r[1] - n) < At
                                ? i > 0
                                    ? 1
                                    : 0
                                : i > 0
                                    ? 3
                                    : 2;
                }

                function u(t, n) {
                    return a(t.x, n.x);
                }

                function a(t, n) {
                    var e = i(t, 1),
                        r = i(n, 1);
                    return e !== r
                        ? e - r
                        : 0 === e
                            ? n[1] - t[1]
                            : 1 === e
                                ? t[0] - n[0]
                                : 2 === e
                                    ? t[1] - n[1]
                                    : n[0] - t[0];
                }
            }

            function lr(t) {
                var n = 0,
                    e = Ct / 3,
                    r = Fr(t),
                    i = r(n, e);
                return i.parallels = function (t) {
                    return arguments.length
                        ? r(n = t[0] * Ct / 180, e = t[1] * Ct / 180)
                        : [n / Ct * 180, e / Ct * 180];
                }, i;
            }

            function sr(t, n) {
                var e = Math.sin(t),
                    r = (e + Math.sin(n)) / 2,
                    i = 1 + e * (2 * r - e),
                    o = Math.sqrt(i) / r;

                function u(t, n) {
                    var e = Math.sqrt(i - 2 * r * Math.sin(n)) / r;
                    return [e * Math.sin(t *= r), o - e * Math.cos(t)];
                }

                return u.invert = function (t, n) {
                    var e = o - n;
                    return [Math.atan2(t, e) / r, qt((i - (t * t + e * e) * r * r) / (2 * r))];
                }, u;
            }

            o.geo.clipExtent = function () {
                var t,
                    n,
                    e,
                    r,
                    i,
                    o,
                    u = {
                        stream: function (t) {
                            return i && (i.valid = !1), (i = o(t)).valid = !0, i;
                        },
                        extent: function (a) {
                            return arguments.length
                                ? (o = cr(t = +a[0][0], n = +a[0][1], e = +a[1][0], r = +a[1][1]), i && (i.valid = !1, i = null), u)
                                : [[t, n], [e, r]];
                        }
                    };
                return u.extent([[0, 0], [960, 500]]);
            }, (o.geo.conicEqualArea = function () {
                return lr(sr);
            }).raw = sr, o.geo.albers = function () {
                return o.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070);
            }, o.geo.albersUsa = function () {
                var t,
                    n,
                    e,
                    r,
                    i = o.geo.albers(),
                    u = o.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                    a = o.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                    c = {
                        point: function (n, e) {
                            t = [n, e];
                        }
                    };

                function l(i) {
                    var o = i[0],
                        u = i[1];
                    return t = null, n(o, u), t || (e(o, u), t) || r(o, u), t;
                }

                return l.invert = function (t) {
                    var n = i.scale(),
                        e = i.translate(),
                        r = (t[0] - e[0]) / n,
                        o = (t[1] - e[1]) / n;
                    return (o >= .12 && o < .234 && r >= -.425 && r < -.214
                        ? u
                        : o >= .166 && o < .234 && r >= -.214 && r < -.115
                            ? a
                            : i).invert(t);
                }, l.stream = function (t) {
                    var n = i.stream(t),
                        e = u.stream(t),
                        r = a.stream(t);
                    return {
                        point: function (t, i) {
                            n.point(t, i), e.point(t, i), r.point(t, i);
                        },
                        sphere: function () {
                            n.sphere(), e.sphere(), r.sphere();
                        },
                        lineStart: function () {
                            n.lineStart(), e.lineStart(), r.lineStart();
                        },
                        lineEnd: function () {
                            n.lineEnd(), e.lineEnd(), r.lineEnd();
                        },
                        polygonStart: function () {
                            n.polygonStart(), e.polygonStart(), r.polygonStart();
                        },
                        polygonEnd: function () {
                            n.polygonEnd(), e.polygonEnd(), r.polygonEnd();
                        }
                    };
                }, l.precision = function (t) {
                    return arguments.length
                        ? (i.precision(t), u.precision(t), a.precision(t), l)
                        : i.precision();
                }, l.scale = function (t) {
                    return arguments.length
                        ? (i.scale(t), u.scale(.35 * t), a.scale(t), l.translate(i.translate()))
                        : i.scale();
                }, l.translate = function (t) {
                    if (!arguments.length) {
                        return i.translate();
                    }
                    var o = i.scale(),
                        s = +t[0],
                        f = +t[1];
                    return n = i.translate(t).clipExtent([[s - .455 * o, f - .238 * o], [s + .455 * o, f + .238 * o]]).stream(c).point, e = u.translate([s - .307 * o, f + .201 * o]).clipExtent([[s - .425 * o + At, f + .12 * o + At], [s - .214 * o - At, f + .234 * o - At]]).stream(c).point, r = a.translate([s - .205 * o, f + .212 * o]).clipExtent([[s - .214 * o + At, f + .166 * o + At], [s - .115 * o - At, f + .234 * o - At]]).stream(c).point, l;
                }, l.scale(1070);
            };
            var fr,
                hr,
                pr,
                vr,
                dr,
                gr,
                yr = {
                    point: I,
                    lineStart: I,
                    lineEnd: I,
                    polygonStart: function () {
                        hr = 0, yr.lineStart = mr;
                    },
                    polygonEnd: function () {
                        yr.lineStart = yr.lineEnd = yr.point = I, fr += w(hr / 2);
                    }
                };

            function mr() {
                var t,
                    n,
                    e,
                    r;

                function i(t, n) {
                    hr += r * t - e * n, e = t, r = n;
                }

                yr.point = function (o, u) {
                    yr.point = i, t = e = o, n = r = u;
                }, yr.lineEnd = function () {
                    i(t, n);
                };
            }

            var xr = {
                point: function (t, n) {
                    t < pr && (pr = t);
                    t > dr && (dr = t);
                    n < vr && (vr = n);
                    n > gr && (gr = n);
                },
                lineStart: I,
                lineEnd: I,
                polygonStart: I,
                polygonEnd: I
            };

            function br(t) {
                return 'm0,' + t + 'a' + t + ',' + t + ' 0 1,1 0,' + -2 * t + 'a' + t + ',' + t + ' 0 1,1 0,' + 2 * t + 'z';
            }

            var Mr,
                wr = {
                    point: _r,
                    lineStart: Sr,
                    lineEnd: Er,
                    polygonStart: function () {
                        wr.lineStart = Nr;
                    },
                    polygonEnd: function () {
                        wr.point = _r, wr.lineStart = Sr, wr.lineEnd = Er;
                    }
                };

            function _r(t, n) {
                Se += t, Ee += n, ++Ne;
            }

            function Sr() {
                var t,
                    n;

                function e(e, r) {
                    var i = e - t,
                        o = r - n,
                        u = Math.sqrt(i * i + o * o);
                    Ae += u * (t + e) / 2, ke += u * (n + r) / 2, Ce += u, _r(t = e, n = r);
                }

                wr.point = function (r, i) {
                    wr.point = e, _r(t = r, n = i);
                };
            }

            function Er() {
                wr.point = _r;
            }

            function Nr() {
                var t,
                    n,
                    e,
                    r;

                function i(t, n) {
                    var i = t - e,
                        o = n - r,
                        u = Math.sqrt(i * i + o * o);
                    Ae += u * (e + t) / 2, ke += u * (r + n) / 2, Ce += u, Oe += (u = r * t - e * n) * (e + t), Fe += u * (r + n), Le += 3 * u, _r(e = t, r = n);
                }

                wr.point = function (o, u) {
                    wr.point = i, _r(t = e = o, n = r = u);
                }, wr.lineEnd = function () {
                    i(t, n);
                };
            }

            function Ar(t) {
                var n = .5,
                    e = Math.cos(30 * Tt),
                    r = 16;

                function i(n) {
                    return (r
                        ? function (n) {
                            var e,
                                i,
                                u,
                                a,
                                c,
                                l,
                                s,
                                f,
                                h,
                                p,
                                v,
                                d,
                                g = {
                                    point: y,
                                    lineStart: m,
                                    lineEnd: b,
                                    polygonStart: function () {
                                        n.polygonStart(), g.lineStart = M;
                                    },
                                    polygonEnd: function () {
                                        n.polygonEnd(), g.lineStart = m;
                                    }
                                };

                            function y(e, r) {
                                e = t(e, r), n.point(e[0], e[1]);
                            }

                            function m() {
                                f = NaN, g.point = x, n.lineStart();
                            }

                            function x(e, i) {
                                var u = je([e, i]),
                                    a = t(e, i);
                                o(f, h, s, p, v, d, f = a[0], h = a[1], s = e, p = u[0], v = u[1], d = u[2], r, n), n.point(f, h);
                            }

                            function b() {
                                g.point = y, n.lineEnd();
                            }

                            function M() {
                                m(), g.point = w, g.lineEnd = _;
                            }

                            function w(t, n) {
                                x(e = t, n), i = f, u = h, a = p, c = v, l = d, g.point = x;
                            }

                            function _() {
                                o(f, h, s, p, v, d, i, u, e, a, c, l, r, n), g.lineEnd = b, b();
                            }

                            return g;
                        }
                        : function (n) {
                            return Cr(n, (function (e, r) {
                                e = t(e, r), n.point(e[0], e[1]);
                            }));
                        })(n);
                }

                function o(r, i, u, a, c, l, s, f, h, p, v, d, g, y) {
                    var m = s - r,
                        x = f - i,
                        b = m * m + x * x;
                    if (b > 4 * n && g--) {
                        var M = a + p,
                            _ = c + v,
                            S = l + d,
                            E = Math.sqrt(M * M + _ * _ + S * S),
                            N = Math.asin(S /= E),
                            A = w(w(S) - 1) < At || w(u - h) < At
                                ? (u + h) / 2
                                : Math.atan2(_, M),
                            k = t(A, N),
                            C = k[0],
                            O = k[1],
                            F = C - r,
                            L = O - i,
                            T = x * F - m * L;
                        (T * T / b > n || w((m * F + x * L) / b - .5) > .3 || a * p + c * v + l * d < e) && (o(r, i, u, a, c, l, C, O, A, M /= E, _ /= E, S, g, y), y.point(C, O), o(C, O, A, M, _, S, s, f, h, p, v, d, g, y));
                    }
                }

                return i.precision = function (t) {
                    return arguments.length
                        ? (r = (n = t * t) > 0 && 16, i)
                        : Math.sqrt(n);
                }, i;
            }

            function kr(t) {
                this.stream = t;
            }

            function Cr(t, n) {
                return {
                    point: n,
                    sphere: function () {
                        t.sphere();
                    },
                    lineStart: function () {
                        t.lineStart();
                    },
                    lineEnd: function () {
                        t.lineEnd();
                    },
                    polygonStart: function () {
                        t.polygonStart();
                    },
                    polygonEnd: function () {
                        t.polygonEnd();
                    }
                };
            }

            function Or(t) {
                return Fr((function () {
                    return t;
                }))();
            }

            function Fr(t) {
                var n,
                    e,
                    r,
                    i,
                    u,
                    a,
                    c = Ar((function (t, e) {
                        return [(t = n(t, e))[0] * l + i, u - t[1] * l];
                    })),
                    l = 150,
                    s = 480,
                    f = 250,
                    h = 0,
                    p = 0,
                    v = 0,
                    d = 0,
                    g = 0,
                    y = or,
                    m = R,
                    x = null,
                    b = null;

                function M(t) {
                    return [(t = r(t[0] * Tt, t[1] * Tt))[0] * l + i, u - t[1] * l];
                }

                function _(t) {
                    return (t = r.invert((t[0] - i) / l, (u - t[1]) / l)) && [t[0] * Pt, t[1] * Pt];
                }

                function S() {
                    r = Xe(e = Rr(v, d, g), n);
                    var t = n(h, p);
                    return i = s - t[0] * l, u = f + t[1] * l, E();
                }

                function E() {
                    return a && (a.valid = !1, a = null), M;
                }

                return M.stream = function (t) {
                    return a && (a.valid = !1), (a = Lr(y(e, c(m(t))))).valid = !0, a;
                }, M.clipAngle = function (t) {
                    return arguments.length
                        ? (y = null == t
                            ? (x = t, or)
                            : function (t) {
                                var n = Math.cos(t),
                                    e = n > 0,
                                    r = w(n) > At;
                                return nr(i, (function (t) {
                                    var n,
                                        a,
                                        c,
                                        l,
                                        s;
                                    return {
                                        lineStart: function () {
                                            l = c = !1, s = 1;
                                        },
                                        point: function (f, h) {
                                            var p,
                                                v = [f, h],
                                                d = i(f, h),
                                                g = e
                                                    ? d
                                                        ? 0
                                                        : u(f, h)
                                                    : d
                                                        ? u(f + (f < 0
                                                            ? Ct
                                                            : -Ct), h)
                                                        : 0;
                                            if (!n && (l = c = d) && t.lineStart(), d !== c && (p = o(n, v), (Ve(n, p) || Ve(v, p)) && (v[0] += At, v[1] += At, d = i(v[0], v[1]))), d !== c) {
                                                s = 0, d
                                                    ? (t.lineStart(), p = o(v, n), t.point(p[0], p[1]))
                                                    : (p = o(n, v), t.point(p[0], p[1]), t.lineEnd()), n = p;
                                            } else {
                                                if (r && n && e ^ d) {
                                                    var y;
                                                    g & a || !(y = o(v, n, !0)) || (s = 0, e
                                                        ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd())
                                                        : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])));
                                                }
                                            }
                                            !d || n && Ve(n, v) || t.point(v[0], v[1]), n = v, c = d, a = g;
                                        },
                                        lineEnd: function () {
                                            c && t.lineEnd(), n = null;
                                        },
                                        clean: function () {
                                            return s | (l && c) << 1;
                                        }
                                    };
                                }), Ir(t, 6 * Tt), e
                                    ? [0, -t]
                                    : [-Ct, t - Ct]);

                                function i(t, e) {
                                    return Math.cos(t) * Math.cos(e) > n;
                                }

                                function o(t, e, r) {
                                    var i = [1, 0, 0],
                                        o = qe(je(t), je(e)),
                                        u = De(o, o),
                                        a = o[0],
                                        c = u - a * a;
                                    if (!c) {
                                        return !r && t;
                                    }
                                    var l = n * u / c,
                                        s = -n * a / c,
                                        f = qe(i, o),
                                        h = ze(i, l);
                                    Ie(h, ze(o, s));
                                    var p = f,
                                        v = De(h, p),
                                        d = De(p, p),
                                        g = v * v - d * (De(h, h) - 1);
                                    if (!(g < 0)) {
                                        var y = Math.sqrt(g),
                                            m = ze(p, (-v - y) / d);
                                        if (Ie(m, h), m = Be(m), !r) {
                                            return m;
                                        }
                                        var x,
                                            b = t[0],
                                            M = e[0],
                                            _ = t[1],
                                            S = e[1];
                                        M < b && (x = b, b = M, M = x);
                                        var E = M - b,
                                            N = w(E - Ct) < At;
                                        if (!N && S < _ && (x = _, _ = S, S = x), N || E < At
                                            ? N
                                                ? _ + S > 0 ^ m[1] < (w(m[0] - b) < At
                                                ? _
                                                : S)
                                                : _ <= m[1] && m[1] <= S
                                            : E > Ct ^ (b <= m[0] && m[0] <= M)) {
                                            var A = ze(p, (-v + y) / d);
                                            return Ie(A, h), [m, Be(A)];
                                        }
                                    }
                                }

                                function u(n, r) {
                                    var i = e
                                            ? t
                                            : Ct - t,
                                        o = 0;
                                    return n < -i
                                        ? o |= 1
                                        : n > i && (o |= 2), r < -i
                                        ? o |= 4
                                        : r > i && (o |= 8), o;
                                }
                            }((x = +t) * Tt), E())
                        : x;
                }, M.clipExtent = function (t) {
                    return arguments.length
                        ? (b = t, m = t
                            ? cr(t[0][0], t[0][1], t[1][0], t[1][1])
                            : R, E())
                        : b;
                }, M.scale = function (t) {
                    return arguments.length
                        ? (l = +t, S())
                        : l;
                }, M.translate = function (t) {
                    return arguments.length
                        ? (s = +t[0], f = +t[1], S())
                        : [s, f];
                }, M.center = function (t) {
                    return arguments.length
                        ? (h = t[0] % 360 * Tt, p = t[1] % 360 * Tt, S())
                        : [h * Pt, p * Pt];
                }, M.rotate = function (t) {
                    return arguments.length
                        ? (v = t[0] % 360 * Tt, d = t[1] % 360 * Tt, g = t.length > 2
                            ? t[2] % 360 * Tt
                            : 0, S())
                        : [v * Pt, d * Pt, g * Pt];
                }, o.rebind(M, c, 'precision'), function () {
                    return n = t.apply(this, arguments), M.invert = n.invert && _, S();
                };
            }

            function Lr(t) {
                return Cr(t, (function (n, e) {
                    t.point(n * Tt, e * Tt);
                }));
            }

            function Tr(t, n) {
                return [t, n];
            }

            function Pr(t, n) {
                return [t > Ct
                    ? t - Ot
                    : t < -Ct
                        ? t + Ot
                        : t, n];
            }

            function Rr(t, n, e) {
                return t
                    ? n || e
                        ? Xe(Dr(t), qr(n, e))
                        : Dr(t)
                    : n || e
                        ? qr(n, e)
                        : Pr;
            }

            function jr(t) {
                return function (n, e) {
                    return [(n += t) > Ct
                        ? n - Ot
                        : n < -Ct
                            ? n + Ot
                            : n, e];
                };
            }

            function Dr(t) {
                var n = jr(t);
                return n.invert = jr(-t), n;
            }

            function qr(t, n) {
                var e = Math.cos(t),
                    r = Math.sin(t),
                    i = Math.cos(n),
                    o = Math.sin(n);

                function u(t, n) {
                    var u = Math.cos(n),
                        a = Math.cos(t) * u,
                        c = Math.sin(t) * u,
                        l = Math.sin(n),
                        s = l * e + a * r;
                    return [Math.atan2(c * i - s * o, a * e - l * r), qt(s * i + c * o)];
                }

                return u.invert = function (t, n) {
                    var u = Math.cos(n),
                        a = Math.cos(t) * u,
                        c = Math.sin(t) * u,
                        l = Math.sin(n),
                        s = l * i - c * o;
                    return [Math.atan2(c * i + l * o, a * e + s * r), qt(s * e - a * r)];
                }, u;
            }

            function Ir(t, n) {
                var e = Math.cos(t),
                    r = Math.sin(t);
                return function (i, o, u, a) {
                    var c = u * n;
                    null != i
                        ? (i = zr(e, i), o = zr(e, o), (u > 0
                            ? i < o
                            : i > o) && (i += u * Ot))
                        : (i = t + u * Ot, o = t - .5 * c);
                    for (var l, s = i; u > 0
                        ? s > o
                        : s < o; s -= c) {
                        a.point((l = Be([e, -r * Math.cos(s), -r * Math.sin(s)]))[0], l[1]);
                    }
                };
            }

            function zr(t, n) {
                var e = je(n);
                e[0] -= t, Ue(e);
                var r = Dt(-e[1]);
                return ((-e[2] < 0
                    ? -r
                    : r) + 2 * Math.PI - At) % (2 * Math.PI);
            }

            function Ur(t, n, e) {
                var r = o.range(t, n - At, e).concat(n);
                return function (t) {
                    return r.map((function (n) {
                        return [t, n];
                    }));
                };
            }

            function Br(t, n, e) {
                var r = o.range(t, n - At, e).concat(n);
                return function (t) {
                    return r.map((function (n) {
                        return [n, t];
                    }));
                };
            }

            function Vr(t) {
                return t.source;
            }

            function Wr(t) {
                return t.target;
            }

            o.geo.path = function () {
                var t,
                    n,
                    e,
                    r,
                    i,
                    u = 4.5;

                function a(t) {
                    return t && ('function' == typeof u && r.pointRadius(+u.apply(this, arguments)), i && i.valid || (i = e(r)), o.geo.stream(t, i)), r.result();
                }

                function c() {
                    return i = null, a;
                }

                return a.area = function (t) {
                    return fr = 0, o.geo.stream(t, e(yr)), fr;
                }, a.centroid = function (t) {
                    return Se = Ee = Ne = Ae = ke = Ce = Oe = Fe = Le = 0, o.geo.stream(t, e(wr)), Le
                        ? [Oe / Le, Fe / Le]
                        : Ce
                            ? [Ae / Ce, ke / Ce]
                            : Ne
                                ? [Se / Ne, Ee / Ne]
                                : [NaN, NaN];
                }, a.bounds = function (t) {
                    return dr = gr = -(pr = vr = 1 / 0), o.geo.stream(t, e(xr)), [[pr, vr], [dr, gr]];
                }, a.projection = function (n) {
                    return arguments.length
                        ? (e = (t = n)
                            ? n.stream || function (t) {
                            var n = Ar((function (n, e) {
                                return t([n * Pt, e * Pt]);
                            }));
                            return function (t) {
                                return Lr(n(t));
                            };
                        }(n)
                            : R, c())
                        : t;
                }, a.context = function (t) {
                    return arguments.length
                        ? (r = null == (n = t)
                            ? new function () {
                                var t = br(4.5),
                                    n = [],
                                    e = {
                                        point: r,
                                        lineStart: function () {
                                            e.point = i;
                                        },
                                        lineEnd: u,
                                        polygonStart: function () {
                                            e.lineEnd = a;
                                        },
                                        polygonEnd: function () {
                                            e.lineEnd = u, e.point = r;
                                        },
                                        pointRadius: function (n) {
                                            return t = br(n), e;
                                        },
                                        result: function () {
                                            if (n.length) {
                                                var t = n.join('');
                                                return n = [], t;
                                            }
                                        }
                                    };

                                function r(e, r) {
                                    n.push('M', e, ',', r, t);
                                }

                                function i(t, r) {
                                    n.push('M', t, ',', r), e.point = o;
                                }

                                function o(t, e) {
                                    n.push('L', t, ',', e);
                                }

                                function u() {
                                    e.point = r;
                                }

                                function a() {
                                    n.push('Z');
                                }

                                return e;
                            }
                            : new function (t) {
                                var n = 4.5,
                                    e = {
                                        point: r,
                                        lineStart: function () {
                                            e.point = i;
                                        },
                                        lineEnd: u,
                                        polygonStart: function () {
                                            e.lineEnd = a;
                                        },
                                        polygonEnd: function () {
                                            e.lineEnd = u, e.point = r;
                                        },
                                        pointRadius: function (t) {
                                            return n = t, e;
                                        },
                                        result: I
                                    };

                                function r(e, r) {
                                    t.moveTo(e + n, r), t.arc(e, r, n, 0, Ot);
                                }

                                function i(n, r) {
                                    t.moveTo(n, r), e.point = o;
                                }

                                function o(n, e) {
                                    t.lineTo(n, e);
                                }

                                function u() {
                                    e.point = r;
                                }

                                function a() {
                                    t.closePath();
                                }

                                return e;
                            }(t), 'function' != typeof u && r.pointRadius(u), c())
                        : n;
                }, a.pointRadius = function (t) {
                    return arguments.length
                        ? (u = 'function' == typeof t
                            ? t
                            : (r.pointRadius(+t), +t), a)
                        : u;
                }, a.projection(o.geo.albersUsa()).context(null);
            }, o.geo.transform = function (t) {
                return {
                    stream: function (n) {
                        var e = new kr(n);
                        for (var r in t) {
                            e[r] = t[r];
                        }
                        return e;
                    }
                };
            }, kr.prototype = {
                point: function (t, n) {
                    this.stream.point(t, n);
                },
                sphere: function () {
                    this.stream.sphere();
                },
                lineStart: function () {
                    this.stream.lineStart();
                },
                lineEnd: function () {
                    this.stream.lineEnd();
                },
                polygonStart: function () {
                    this.stream.polygonStart();
                },
                polygonEnd: function () {
                    this.stream.polygonEnd();
                }
            }, o.geo.projection = Or, o.geo.projectionMutator = Fr, (o.geo.equirectangular = function () {
                return Or(Tr);
            }).raw = Tr.invert = Tr, o.geo.rotation = function (t) {
                function n(n) {
                    return (n = t(n[0] * Tt, n[1] * Tt))[0] *= Pt, n[1] *= Pt, n;
                }

                return t = Rr(t[0] % 360 * Tt, t[1] * Tt, t.length > 2
                    ? t[2] * Tt
                    : 0), n.invert = function (n) {
                    return (n = t.invert(n[0] * Tt, n[1] * Tt))[0] *= Pt, n[1] *= Pt, n;
                }, n;
            }, Pr.invert = Tr, o.geo.circle = function () {
                var t,
                    n,
                    e = [0, 0],
                    r = 6;

                function i() {
                    var t = 'function' == typeof e
                            ? e.apply(this, arguments)
                            : e,
                        r = Rr(-t[0] * Tt, -t[1] * Tt, 0).invert,
                        i = [];
                    return n(null, null, 1, {
                        point: function (t, n) {
                            i.push(t = r(t, n)), t[0] *= Pt, t[1] *= Pt;
                        }
                    }), {
                        type: 'Polygon',
                        coordinates: [i]
                    };
                }

                return i.origin = function (t) {
                    return arguments.length
                        ? (e = t, i)
                        : e;
                }, i.angle = function (e) {
                    return arguments.length
                        ? (n = Ir((t = +e) * Tt, r * Tt), i)
                        : t;
                }, i.precision = function (e) {
                    return arguments.length
                        ? (n = Ir(t * Tt, (r = +e) * Tt), i)
                        : r;
                }, i.angle(90);
            }, o.geo.distance = function (t, n) {
                var e,
                    r = (n[0] - t[0]) * Tt,
                    i = t[1] * Tt,
                    o = n[1] * Tt,
                    u = Math.sin(r),
                    a = Math.cos(r),
                    c = Math.sin(i),
                    l = Math.cos(i),
                    s = Math.sin(o),
                    f = Math.cos(o);
                return Math.atan2(Math.sqrt((e = f * u) * e + (e = l * s - c * f * a) * e), c * s + l * f * a);
            }, o.geo.graticule = function () {
                var t,
                    n,
                    e,
                    r,
                    i,
                    u,
                    a,
                    c,
                    l,
                    s,
                    f,
                    h,
                    p = 10,
                    v = p,
                    d = 90,
                    g = 360,
                    y = 2.5;

                function m() {
                    return {
                        type: 'MultiLineString',
                        coordinates: x()
                    };
                }

                function x() {
                    return o.range(Math.ceil(r / d) * d, e, d).map(f).concat(o.range(Math.ceil(c / g) * g, a, g).map(h)).concat(o.range(Math.ceil(n / p) * p, t, p).filter((function (t) {
                        return w(t % d) > At;
                    })).map(l)).concat(o.range(Math.ceil(u / v) * v, i, v).filter((function (t) {
                        return w(t % g) > At;
                    })).map(s));
                }

                return m.lines = function () {
                    return x().map((function (t) {
                        return {
                            type: 'LineString',
                            coordinates: t
                        };
                    }));
                }, m.outline = function () {
                    return {
                        type: 'Polygon',
                        coordinates: [f(r).concat(h(a).slice(1), f(e).reverse().slice(1), h(c).reverse().slice(1))]
                    };
                }, m.extent = function (t) {
                    return arguments.length
                        ? m.majorExtent(t).minorExtent(t)
                        : m.minorExtent();
                }, m.majorExtent = function (t) {
                    return arguments.length
                        ? (r = +t[0][0], e = +t[1][0], c = +t[0][1], a = +t[1][1], r > e && (t = r, r = e, e = t), c > a && (t = c, c = a, a = t), m.precision(y))
                        : [[r, c], [e, a]];
                }, m.minorExtent = function (e) {
                    return arguments.length
                        ? (n = +e[0][0], t = +e[1][0], u = +e[0][1], i = +e[1][1], n > t && (e = n, n = t, t = e), u > i && (e = u, u = i, i = e), m.precision(y))
                        : [[n, u], [t, i]];
                }, m.step = function (t) {
                    return arguments.length
                        ? m.majorStep(t).minorStep(t)
                        : m.minorStep();
                }, m.majorStep = function (t) {
                    return arguments.length
                        ? (d = +t[0], g = +t[1], m)
                        : [d, g];
                }, m.minorStep = function (t) {
                    return arguments.length
                        ? (p = +t[0], v = +t[1], m)
                        : [p, v];
                }, m.precision = function (o) {
                    return arguments.length
                        ? (y = +o, l = Ur(u, i, 90), s = Br(n, t, y), f = Ur(c, a, 90), h = Br(r, e, y), m)
                        : y;
                }, m.majorExtent([[-180, -90 + At], [180, 90 - At]]).minorExtent([[-180, -80 - At], [180, 80 + At]]);
            }, o.geo.greatArc = function () {
                var t,
                    n,
                    e = Vr,
                    r = Wr;

                function i() {
                    return {
                        type: 'LineString',
                        coordinates: [t || e.apply(this, arguments), n || r.apply(this, arguments)]
                    };
                }

                return i.distance = function () {
                    return o.geo.distance(t || e.apply(this, arguments), n || r.apply(this, arguments));
                }, i.source = function (n) {
                    return arguments.length
                        ? (e = n, t = 'function' == typeof n
                            ? null
                            : n, i)
                        : e;
                }, i.target = function (t) {
                    return arguments.length
                        ? (r = t, n = 'function' == typeof t
                            ? null
                            : t, i)
                        : r;
                }, i.precision = function () {
                    return arguments.length
                        ? i
                        : 0;
                }, i;
            }, o.geo.interpolate = function (t, n) {
                return function (t, n, e, r) {
                    var i = Math.cos(n),
                        o = Math.sin(n),
                        u = Math.cos(r),
                        a = Math.sin(r),
                        c = i * Math.cos(t),
                        l = i * Math.sin(t),
                        s = u * Math.cos(e),
                        f = u * Math.sin(e),
                        h = 2 * Math.asin(Math.sqrt(zt(r - n) + i * u * zt(e - t))),
                        p = 1 / Math.sin(h),
                        v = h
                            ? function (t) {
                                var n = Math.sin(t *= h) * p,
                                    e = Math.sin(h - t) * p,
                                    r = e * c + n * s,
                                    i = e * l + n * f,
                                    u = e * o + n * a;
                                return [Math.atan2(i, r) * Pt, Math.atan2(u, Math.sqrt(r * r + i * i)) * Pt];
                            }
                            : function () {
                                return [t * Pt, n * Pt];
                            };
                    return v.distance = h, v;
                }(t[0] * Tt, t[1] * Tt, n[0] * Tt, n[1] * Tt);
            }, o.geo.length = function (t) {
                return Mr = 0, o.geo.stream(t, Hr), Mr;
            };
            var Hr = {
                sphere: I,
                point: I,
                lineStart: function () {
                    var t,
                        n,
                        e;

                    function r(r, i) {
                        var o = Math.sin(i *= Tt),
                            u = Math.cos(i),
                            a = w((r *= Tt) - t),
                            c = Math.cos(a);
                        Mr += Math.atan2(Math.sqrt((a = u * Math.sin(a)) * a + (a = e * o - n * u * c) * a), n * o + e * u * c), t = r, n = o, e = u;
                    }

                    Hr.point = function (i, o) {
                        t = i * Tt, n = Math.sin(o *= Tt), e = Math.cos(o), Hr.point = r;
                    }, Hr.lineEnd = function () {
                        Hr.point = Hr.lineEnd = I;
                    };
                },
                lineEnd: I,
                polygonStart: I,
                polygonEnd: I
            };

            function Yr(t, n) {
                function e(n, e) {
                    var r = Math.cos(n),
                        i = Math.cos(e),
                        o = t(r * i);
                    return [o * i * Math.sin(n), o * Math.sin(e)];
                }

                return e.invert = function (t, e) {
                    var r = Math.sqrt(t * t + e * e),
                        i = n(r),
                        o = Math.sin(i),
                        u = Math.cos(i);
                    return [Math.atan2(t * o, r * u), Math.asin(r && e * o / r)];
                }, e;
            }

            var Gr = Yr((function (t) {
                return Math.sqrt(2 / (1 + t));
            }), (function (t) {
                return 2 * Math.asin(t / 2);
            }));
            (o.geo.azimuthalEqualArea = function () {
                return Or(Gr);
            }).raw = Gr;
            var Zr = Yr((function (t) {
                var n = Math.acos(t);
                return n && n / Math.sin(n);
            }), R);

            function $r(t, n) {
                var e = Math.cos(t),
                    r = function (t) {
                        return Math.tan(Ct / 4 + t / 2);
                    },
                    i = t === n
                        ? Math.sin(t)
                        : Math.log(e / Math.cos(n)) / Math.log(r(n) / r(t)),
                    o = e * Math.pow(r(t), i) / i;
                if (!i) {
                    return Kr;
                }

                function u(t, n) {
                    o > 0
                        ? n < -Lt + At && (n = -Lt + At)
                        : n > Lt - At && (n = Lt - At);
                    var e = o / Math.pow(r(n), i);
                    return [e * Math.sin(i * t), o - e * Math.cos(i * t)];
                }

                return u.invert = function (t, n) {
                    var e = o - n,
                        r = Rt(i) * Math.sqrt(t * t + e * e);
                    return [Math.atan2(t, e) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - Lt];
                }, u;
            }

            function Xr(t, n) {
                var e = Math.cos(t),
                    r = t === n
                        ? Math.sin(t)
                        : (e - Math.cos(n)) / (n - t),
                    i = e / r + t;
                if (w(r) < At) {
                    return Tr;
                }

                function o(t, n) {
                    var e = i - n;
                    return [e * Math.sin(r * t), i - e * Math.cos(r * t)];
                }

                return o.invert = function (t, n) {
                    var e = i - n;
                    return [Math.atan2(t, e) / r, i - Rt(r) * Math.sqrt(t * t + e * e)];
                }, o;
            }

            (o.geo.azimuthalEquidistant = function () {
                return Or(Zr);
            }).raw = Zr, (o.geo.conicConformal = function () {
                return lr($r);
            }).raw = $r, (o.geo.conicEquidistant = function () {
                return lr(Xr);
            }).raw = Xr;
            var Jr = Yr((function (t) {
                return 1 / t;
            }), Math.atan);

            function Kr(t, n) {
                return [t, Math.log(Math.tan(Ct / 4 + n / 2))];
            }

            function Qr(t) {
                var n,
                    e = Or(t),
                    r = e.scale,
                    i = e.translate,
                    o = e.clipExtent;
                return e.scale = function () {
                    var t = r.apply(e, arguments);
                    return t === e
                        ? n
                            ? e.clipExtent(null)
                            : e
                        : t;
                }, e.translate = function () {
                    var t = i.apply(e, arguments);
                    return t === e
                        ? n
                            ? e.clipExtent(null)
                            : e
                        : t;
                }, e.clipExtent = function (t) {
                    var u = o.apply(e, arguments);
                    if (u === e) {
                        if (n = null == t) {
                            var a = Ct * r(),
                                c = i();
                            o([[c[0] - a, c[1] - a], [c[0] + a, c[1] + a]]);
                        }
                    } else {
                        n && (u = null);
                    }
                    return u;
                }, e.clipExtent(null);
            }

            (o.geo.gnomonic = function () {
                return Or(Jr);
            }).raw = Jr, Kr.invert = function (t, n) {
                return [t, 2 * Math.atan(Math.exp(n)) - Lt];
            }, (o.geo.mercator = function () {
                return Qr(Kr);
            }).raw = Kr;
            var ti = Yr((function () {
                return 1;
            }), Math.asin);
            (o.geo.orthographic = function () {
                return Or(ti);
            }).raw = ti;
            var ni = Yr((function (t) {
                return 1 / (1 + t);
            }), (function (t) {
                return 2 * Math.atan(t);
            }));

            function ei(t, n) {
                return [Math.log(Math.tan(Ct / 4 + n / 2)), -t];
            }

            function ri(t) {
                return t[0];
            }

            function ii(t) {
                return t[1];
            }

            function oi(t) {
                for (var n = t.length, e = [0, 1], r = 2, i = 2; i < n; i++) {
                    for (; r > 1 && jt(t[e[r - 2]], t[e[r - 1]], t[i]) <= 0;) {
                        --r;
                    }
                    e[r++] = i;
                }
                return e.slice(0, r);
            }

            function ui(t, n) {
                return t[0] - n[0] || t[1] - n[1];
            }

            (o.geo.stereographic = function () {
                return Or(ni);
            }).raw = ni, ei.invert = function (t, n) {
                return [-n, 2 * Math.atan(Math.exp(t)) - Lt];
            }, (o.geo.transverseMercator = function () {
                var t = Qr(ei),
                    n = t.center,
                    e = t.rotate;
                return t.center = function (t) {
                    return t
                        ? n([-t[1], t[0]])
                        : [(t = n())[1], -t[0]];
                }, t.rotate = function (t) {
                    return t
                        ? e([t[0], t[1], t.length > 2
                            ? t[2] + 90
                            : 90])
                        : [(t = e())[0], t[1], t[2] - 90];
                }, e([0, 0, 90]);
            }).raw = ei, o.geom = {}, o.geom.hull = function (t) {
                var n = ri,
                    e = ii;
                if (arguments.length) {
                    return r(t);
                }

                function r(t) {
                    if (t.length < 3) {
                        return [];
                    }
                    var r,
                        i = Mn(n),
                        o = Mn(e),
                        u = t.length,
                        a = [],
                        c = [];
                    for (r = 0; r < u; r++) {
                        a.push([+i.call(this, t[r], r), +o.call(this, t[r], r), r]);
                    }
                    for (a.sort(ui), r = 0; r < u; r++) {
                        c.push([a[r][0], -a[r][1]]);
                    }
                    var l = oi(a),
                        s = oi(c),
                        f = s[0] === l[0],
                        h = s[s.length - 1] === l[l.length - 1],
                        p = [];
                    for (r = l.length - 1; r >= 0; --r) {
                        p.push(t[a[l[r]][2]]);
                    }
                    for (r = +f; r < s.length - h; ++r) {
                        p.push(t[a[s[r]][2]]);
                    }
                    return p;
                }

                return r.x = function (t) {
                    return arguments.length
                        ? (n = t, r)
                        : n;
                }, r.y = function (t) {
                    return arguments.length
                        ? (e = t, r)
                        : e;
                }, r;
            }, o.geom.polygon = function (t) {
                return Y(t, ai), t;
            };
            var ai = o.geom.polygon.prototype = [];

            function ci(t, n, e) {
                return (e[0] - n[0]) * (t[1] - n[1]) < (e[1] - n[1]) * (t[0] - n[0]);
            }

            function li(t, n, e, r) {
                var i = t[0],
                    o = e[0],
                    u = n[0] - i,
                    a = r[0] - o,
                    c = t[1],
                    l = e[1],
                    s = n[1] - c,
                    f = r[1] - l,
                    h = (a * (c - l) - f * (i - o)) / (f * u - a * s);
                return [i + h * u, c + h * s];
            }

            function si(t) {
                var n = t[0],
                    e = t[t.length - 1];
                return !(n[0] - e[0] || n[1] - e[1]);
            }

            ai.area = function () {
                for (var t, n = -1, e = this.length, r = this[e - 1], i = 0; ++n < e;) {
                    t = r, r = this[n], i += t[1] * r[0] - t[0] * r[1];
                }
                return .5 * i;
            }, ai.centroid = function (t) {
                var n,
                    e,
                    r = -1,
                    i = this.length,
                    o = 0,
                    u = 0,
                    a = this[i - 1];
                for (arguments.length || (t = -1 / (6 * this.area())); ++r < i;) {
                    n = a, a = this[r], e = n[0] * a[1] - a[0] * n[1], o += (n[0] + a[0]) * e, u += (n[1] + a[1]) * e;
                }
                return [o * t, u * t];
            }, ai.clip = function (t) {
                for (var n, e, r, i, o, u, a = si(t), c = -1, l = this.length - si(this), s = this[l - 1]; ++c < l;) {
                    for (n = t.slice(), t.length = 0, i = this[c], o = n[(r = n.length - a) - 1], e = -1; ++e < r;) {
                        ci(u = n[e], s, i)
                            ? (ci(o, s, i) || t.push(li(o, u, s, i)), t.push(u))
                            : ci(o, s, i) && t.push(li(o, u, s, i)), o = u;
                    }
                    a && t.push(t[0]), s = i;
                }
                return t;
            };
            var fi,
                hi,
                pi,
                vi,
                di,
                gi = [],
                yi = [];

            function mi(t) {
                var n = gi.pop() || new function () {
                    Ri(this), this.edge = this.site = this.circle = null;
                };
                return n.site = t, n;
            }

            function xi(t) {
                Ai(t), pi.remove(t), gi.push(t), Ri(t);
            }

            function bi(t) {
                var n = t.circle,
                    e = n.x,
                    r = n.cy,
                    i = {
                        x: e,
                        y: r
                    },
                    o = t.P,
                    u = t.N,
                    a = [t];
                xi(t);
                for (var c = o; c.circle && w(e - c.circle.x) < At && w(r - c.circle.cy) < At;) {
                    o = c.P, a.unshift(c), xi(c), c = o;
                }
                a.unshift(c), Ai(c);
                for (var l = u; l.circle && w(e - l.circle.x) < At && w(r - l.circle.cy) < At;) {
                    u = l.N, a.push(l), xi(l), l = u;
                }
                a.push(l), Ai(l);
                var s,
                    f = a.length;
                for (s = 1; s < f; ++s) {
                    l = a[s], c = a[s - 1], Li(l.edge, c.site, l.site, i);
                }
                c = a[0], (l = a[f - 1]).edge = Oi(c.site, l.site, null, i), Ni(c), Ni(l);
            }

            function Mi(t) {
                for (var n, e, r, i, o = t.x, u = t.y, a = pi._; a;) {
                    if ((r = wi(a, u) - o) > At) {
                        a = a.L;
                    } else {
                        if (!((i = o - _i(a, u)) > At)) {
                            r > -At
                                ? (n = a.P, e = a)
                                : i > -At
                                    ? (n = a, e = a.N)
                                    : n = e = a;
                            break;
                        }
                        if (!a.R) {
                            n = a;
                            break;
                        }
                        a = a.R;
                    }
                }
                var c = mi(t);
                if (pi.insert(n, c), n || e) {
                    if (n === e) {
                        return Ai(n), e = mi(n.site), pi.insert(c, e), c.edge = e.edge = Oi(n.site, c.site), Ni(n), void Ni(e);
                    }
                    if (e) {
                        Ai(n), Ai(e);
                        var l = n.site,
                            s = l.x,
                            f = l.y,
                            h = t.x - s,
                            p = t.y - f,
                            v = e.site,
                            d = v.x - s,
                            g = v.y - f,
                            y = 2 * (h * g - p * d),
                            m = h * h + p * p,
                            x = d * d + g * g,
                            b = {
                                x: (g * m - p * x) / y + s,
                                y: (h * x - d * m) / y + f
                            };
                        Li(e.edge, l, v, b), c.edge = Oi(l, t, null, b), e.edge = Oi(t, v, null, b), Ni(n), Ni(e);
                    } else {
                        c.edge = Oi(n.site, c.site);
                    }
                }
            }

            function wi(t, n) {
                var e = t.site,
                    r = e.x,
                    i = e.y,
                    o = i - n;
                if (!o) {
                    return r;
                }
                var u = t.P;
                if (!u) {
                    return -1 / 0;
                }
                var a = (e = u.site).x,
                    c = e.y,
                    l = c - n;
                if (!l) {
                    return a;
                }
                var s = a - r,
                    f = 1 / o - 1 / l,
                    h = s / l;
                return f
                    ? (-h + Math.sqrt(h * h - 2 * f * (s * s / (-2 * l) - c + l / 2 + i - o / 2))) / f + r
                    : (r + a) / 2;
            }

            function _i(t, n) {
                var e = t.N;
                if (e) {
                    return wi(e, n);
                }
                var r = t.site;
                return r.y === n
                    ? r.x
                    : 1 / 0;
            }

            function Si(t) {
                this.site = t, this.edges = [];
            }

            function Ei(t, n) {
                return n.angle - t.angle;
            }

            function Ni(t) {
                var n = t.P,
                    e = t.N;
                if (n && e) {
                    var r = n.site,
                        i = t.site,
                        o = e.site;
                    if (r !== o) {
                        var u = i.x,
                            a = i.y,
                            c = r.x - u,
                            l = r.y - a,
                            s = o.x - u,
                            f = 2 * (c * (g = o.y - a) - l * s);
                        if (!(f >= -kt)) {
                            var h = c * c + l * l,
                                p = s * s + g * g,
                                v = (g * h - l * p) / f,
                                d = (c * p - s * h) / f,
                                g = d + a,
                                y = yi.pop() || new function () {
                                    Ri(this), this.x = this.y = this.arc = this.site = this.cy = null;
                                };
                            y.arc = t, y.site = i, y.x = v + u, y.y = g + Math.sqrt(v * v + d * d), y.cy = g, t.circle = y;
                            for (var m = null, x = di._; x;) {
                                if (y.y < x.y || y.y === x.y && y.x <= x.x) {
                                    if (!x.L) {
                                        m = x.P;
                                        break;
                                    }
                                    x = x.L;
                                } else {
                                    if (!x.R) {
                                        m = x;
                                        break;
                                    }
                                    x = x.R;
                                }
                            }
                            di.insert(m, y), m || (vi = y);
                        }
                    }
                }
            }

            function Ai(t) {
                var n = t.circle;
                n && (n.P || (vi = n.N), di.remove(n), yi.push(n), Ri(n), t.circle = null);
            }

            function ki(t, n) {
                var e = t.b;
                if (e) {
                    return !0;
                }
                var r,
                    i,
                    o = t.a,
                    u = n[0][0],
                    a = n[1][0],
                    c = n[0][1],
                    l = n[1][1],
                    s = t.l,
                    f = t.r,
                    h = s.x,
                    p = s.y,
                    v = f.x,
                    d = f.y,
                    g = (h + v) / 2,
                    y = (p + d) / 2;
                if (d === p) {
                    if (g < u || g >= a) {
                        return;
                    }
                    if (h > v) {
                        if (o) {
                            if (o.y >= l) {
                                return;
                            }
                        } else {
                            o = {
                                x: g,
                                y: c
                            };
                        }
                        e = {
                            x: g,
                            y: l
                        };
                    } else {
                        if (o) {
                            if (o.y < c) {
                                return;
                            }
                        } else {
                            o = {
                                x: g,
                                y: l
                            };
                        }
                        e = {
                            x: g,
                            y: c
                        };
                    }
                } else {
                    if (i = y - (r = (h - v) / (d - p)) * g, r < -1 || r > 1) {
                        if (h > v) {
                            if (o) {
                                if (o.y >= l) {
                                    return;
                                }
                            } else {
                                o = {
                                    x: (c - i) / r,
                                    y: c
                                };
                            }
                            e = {
                                x: (l - i) / r,
                                y: l
                            };
                        } else {
                            if (o) {
                                if (o.y < c) {
                                    return;
                                }
                            } else {
                                o = {
                                    x: (l - i) / r,
                                    y: l
                                };
                            }
                            e = {
                                x: (c - i) / r,
                                y: c
                            };
                        }
                    } else {
                        if (p < d) {
                            if (o) {
                                if (o.x >= a) {
                                    return;
                                }
                            } else {
                                o = {
                                    x: u,
                                    y: r * u + i
                                };
                            }
                            e = {
                                x: a,
                                y: r * a + i
                            };
                        } else {
                            if (o) {
                                if (o.x < u) {
                                    return;
                                }
                            } else {
                                o = {
                                    x: a,
                                    y: r * a + i
                                };
                            }
                            e = {
                                x: u,
                                y: r * u + i
                            };
                        }
                    }
                }
                return t.a = o, t.b = e, !0;
            }

            function Ci(t, n) {
                this.l = t, this.r = n, this.a = this.b = null;
            }

            function Oi(t, n, e, r) {
                var i = new Ci(t, n);
                return fi.push(i), e && Li(i, t, n, e), r && Li(i, n, t, r), hi[t.i].edges.push(new Ti(i, t, n)), hi[n.i].edges.push(new Ti(i, n, t)), i;
            }

            function Fi(t, n, e) {
                var r = new Ci(t, null);
                return r.a = n, r.b = e, fi.push(r), r;
            }

            function Li(t, n, e, r) {
                t.a || t.b
                    ? t.l === e
                        ? t.b = r
                        : t.a = r
                    : (t.a = r, t.l = n, t.r = e);
            }

            function Ti(t, n, e) {
                var r = t.a,
                    i = t.b;
                this.edge = t, this.site = n, this.angle = e
                    ? Math.atan2(e.y - n.y, e.x - n.x)
                    : t.l === n
                        ? Math.atan2(i.x - r.x, r.y - i.y)
                        : Math.atan2(r.x - i.x, i.y - r.y);
            }

            function Pi() {
                this._ = null;
            }

            function Ri(t) {
                t.U = t.C = t.L = t.R = t.P = t.N = null;
            }

            function ji(t, n) {
                var e = n,
                    r = n.R,
                    i = e.U;
                i
                    ? i.L === e
                        ? i.L = r
                        : i.R = r
                    : t._ = r, r.U = i, e.U = r, e.R = r.L, e.R && (e.R.U = e), r.L = e;
            }

            function Di(t, n) {
                var e = n,
                    r = n.L,
                    i = e.U;
                i
                    ? i.L === e
                        ? i.L = r
                        : i.R = r
                    : t._ = r, r.U = i, e.U = r, e.L = r.R, e.L && (e.L.U = e), r.R = e;
            }

            function qi(t) {
                for (; t.L;) {
                    t = t.L;
                }
                return t;
            }

            function Ii(t, n) {
                var e,
                    r,
                    i,
                    o = t.sort(zi).pop();
                for (fi = [], hi = new Array(t.length), pi = new Pi, di = new Pi; ;) {
                    if (i = vi, o && (!i || o.y < i.y || o.y === i.y && o.x < i.x)) {
                        o.x === e && o.y === r || (hi[o.i] = new Si(o), Mi(o), e = o.x, r = o.y), o = t.pop();
                    } else {
                        if (!i) {
                            break;
                        }
                        bi(i.arc);
                    }
                }
                n && (function (t) {
                    for (var n, e = fi, r = ur(t[0][0], t[0][1], t[1][0], t[1][1]), i = e.length; i--;) {
                        (!ki(n = e[i], t) || !r(n) || w(n.a.x - n.b.x) < At && w(n.a.y - n.b.y) < At) && (n.a = n.b = null, e.splice(i, 1));
                    }
                }(n), function (t) {
                    for (var n, e, r, i, o, u, a, c, l, s, f = t[0][0], h = t[1][0], p = t[0][1], v = t[1][1], d = hi, g = d.length; g--;) {
                        if ((o = d[g]) && o.prepare()) {
                            for (c = (a = o.edges).length, u = 0; u < c;) {
                                r = (s = a[u].end()).x, i = s.y, n = (l = a[++u % c].start()).x, e = l.y, (w(r - n) > At || w(i - e) > At) && (a.splice(u, 0, new Ti(Fi(o.site, s, w(r - f) < At && v - i > At
                                    ? {
                                        x: f,
                                        y: w(n - f) < At
                                            ? e
                                            : v
                                    }
                                    : w(i - v) < At && h - r > At
                                        ? {
                                            x: w(e - v) < At
                                                ? n
                                                : h,
                                            y: v
                                        }
                                        : w(r - h) < At && i - p > At
                                            ? {
                                                x: h,
                                                y: w(n - h) < At
                                                    ? e
                                                    : p
                                            }
                                            : w(i - p) < At && r - f > At
                                                ? {
                                                    x: w(e - p) < At
                                                        ? n
                                                        : f,
                                                    y: p
                                                }
                                                : null), o.site, null)), ++c);
                            }
                        }
                    }
                }(n));
                var u = {
                    cells: hi,
                    edges: fi
                };
                return pi = di = fi = hi = null, u;
            }

            function zi(t, n) {
                return n.y - t.y || n.x - t.x;
            }

            Si.prototype.prepare = function () {
                for (var t, n = this.edges, e = n.length; e--;) {
                    (t = n[e].edge).b && t.a || n.splice(e, 1);
                }
                return n.sort(Ei), n.length;
            }, Ti.prototype = {
                start: function () {
                    return this.edge.l === this.site
                        ? this.edge.a
                        : this.edge.b;
                },
                end: function () {
                    return this.edge.l === this.site
                        ? this.edge.b
                        : this.edge.a;
                }
            }, Pi.prototype = {
                insert: function (t, n) {
                    var e,
                        r,
                        i;
                    if (t) {
                        if (n.P = t, n.N = t.N, t.N && (t.N.P = n), t.N = n, t.R) {
                            for (t = t.R; t.L;) {
                                t = t.L;
                            }
                            t.L = n;
                        } else {
                            t.R = n;
                        }
                        e = t;
                    } else {
                        this._
                            ? (t = qi(this._), n.P = null, n.N = t, t.P = t.L = n, e = t)
                            : (n.P = n.N = null, this._ = n, e = null);
                    }
                    for (n.L = n.R = null, n.U = e, n.C = !0, t = n; e && e.C;) {
                        e === (r = e.U).L
                            ? (i = r.R) && i.C
                                ? (e.C = i.C = !1, r.C = !0, t = r)
                                : (t === e.R && (ji(this, e), e = (t = e).U), e.C = !1, r.C = !0, Di(this, r))
                            : (i = r.L) && i.C
                                ? (e.C = i.C = !1, r.C = !0, t = r)
                                : (t === e.L && (Di(this, e), e = (t = e).U), e.C = !1, r.C = !0, ji(this, r)), e = t.U;
                    }
                    this._.C = !1;
                },
                remove: function (t) {
                    t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                    var n,
                        e,
                        r,
                        i = t.U,
                        o = t.L,
                        u = t.R;
                    if (e = o
                        ? u
                            ? qi(u)
                            : o
                        : u, i
                        ? i.L === t
                            ? i.L = e
                            : i.R = e
                        : this._ = e, o && u
                        ? (r = e.C, e.C = t.C, e.L = o, o.U = e, e !== u
                            ? (i = e.U, e.U = t.U, t = e.R, i.L = t, e.R = u, u.U = e)
                            : (e.U = i, i = e, t = e.R))
                        : (r = t.C, t = e), t && (t.U = i), !r) {
                        if (t && t.C) {
                            t.C = !1;
                        } else {
                            do {
                                if (t === this._) {
                                    break;
                                }
                                if (t === i.L) {
                                    if ((n = i.R).C && (n.C = !1, i.C = !0, ji(this, i), n = i.R), n.L && n.L.C || n.R && n.R.C) {
                                        n.R && n.R.C || (n.L.C = !1, n.C = !0, Di(this, n), n = i.R), n.C = i.C, i.C = n.R.C = !1, ji(this, i), t = this._;
                                        break;
                                    }
                                } else {
                                    if ((n = i.L).C && (n.C = !1, i.C = !0, Di(this, i), n = i.L), n.L && n.L.C || n.R && n.R.C) {
                                        n.L && n.L.C || (n.R.C = !1, n.C = !0, ji(this, n), n = i.L), n.C = i.C, i.C = n.L.C = !1, Di(this, i), t = this._;
                                        break;
                                    }
                                }
                                n.C = !0, t = i, i = i.U;
                            } while (!t.C);
                            t && (t.C = !1);
                        }
                    }
                }
            }, o.geom.voronoi = function (t) {
                var n = ri,
                    e = ii,
                    r = n,
                    i = e,
                    o = Ui;
                if (t) {
                    return u(t);
                }

                function u(t) {
                    var n = new Array(t.length),
                        e = o[0][0],
                        r = o[0][1],
                        i = o[1][0],
                        u = o[1][1];
                    return Ii(a(t), o).cells.forEach((function (o, a) {
                        var c = o.edges,
                            l = o.site;
                        (n[a] = c.length
                            ? c.map((function (t) {
                                var n = t.start();
                                return [n.x, n.y];
                            }))
                            : l.x >= e && l.x <= i && l.y >= r && l.y <= u
                                ? [[e, u], [i, u], [i, r], [e, r]]
                                : []).point = t[a];
                    })), n;
                }

                function a(t) {
                    return t.map((function (t, n) {
                        return {
                            x: Math.round(r(t, n) / At) * At,
                            y: Math.round(i(t, n) / At) * At,
                            i: n
                        };
                    }));
                }

                return u.links = function (t) {
                    return Ii(a(t)).edges.filter((function (t) {
                        return t.l && t.r;
                    })).map((function (n) {
                        return {
                            source: t[n.l.i],
                            target: t[n.r.i]
                        };
                    }));
                }, u.triangles = function (t) {
                    var n = [];
                    return Ii(a(t)).cells.forEach((function (e, r) {
                        for (var i, o = e.site, u = e.edges.sort(Ei), a = -1, c = u.length, l = u[c - 1].edge, s = l.l === o
                            ? l.r
                            : l.l; ++a < c;) {
                            l, i = s, s = (l = u[a].edge).l === o
                                ? l.r
                                : l.l, r < i.i && r < s.i && Bi(o, i, s) < 0 && n.push([t[r], t[i.i], t[s.i]]);
                        }
                    })), n;
                }, u.x = function (t) {
                    return arguments.length
                        ? (r = Mn(n = t), u)
                        : n;
                }, u.y = function (t) {
                    return arguments.length
                        ? (i = Mn(e = t), u)
                        : e;
                }, u.clipExtent = function (t) {
                    return arguments.length
                        ? (o = null == t
                            ? Ui
                            : t, u)
                        : o === Ui
                            ? null
                            : o;
                }, u.size = function (t) {
                    return arguments.length
                        ? u.clipExtent(t && [[0, 0], t])
                        : o === Ui
                            ? null
                            : o && o[1];
                }, u;
            };
            var Ui = [[-1e6, -1e6], [1e6, 1e6]];

            function Bi(t, n, e) {
                return (t.x - e.x) * (n.y - t.y) - (t.x - n.x) * (e.y - t.y);
            }

            function Vi(t) {
                return t.x;
            }

            function Wi(t) {
                return t.y;
            }

            function Hi(t, n) {
                t = o.rgb(t), n = o.rgb(n);
                var e = t.r,
                    r = t.g,
                    i = t.b,
                    u = n.r - e,
                    a = n.g - r,
                    c = n.b - i;
                return function (t) {
                    return '#' + vn(Math.round(e + u * t)) + vn(Math.round(r + a * t)) + vn(Math.round(i + c * t));
                };
            }

            function Yi(t, n) {
                var e,
                    r = {},
                    i = {};
                for (e in t) {
                    e in n
                        ? r[e] = Ji(t[e], n[e])
                        : i[e] = t[e];
                }
                for (e in n) {
                    e in t || (i[e] = n[e]);
                }
                return function (t) {
                    for (e in r) {
                        i[e] = r[e](t);
                    }
                    return i;
                };
            }

            function Gi(t, n) {
                return t = +t, n = +n, function (e) {
                    return t * (1 - e) + n * e;
                };
            }

            function Zi(t, n) {
                var e,
                    r,
                    i,
                    o = $i.lastIndex = Xi.lastIndex = 0,
                    u = -1,
                    a = [],
                    c = [];
                for (t += '', n += ''; (e = $i.exec(t)) && (r = Xi.exec(n));) {
                    (i = r.index) > o && (i = n.slice(o, i), a[u]
                        ? a[u] += i
                        : a[++u] = i), (e = e[0]) === (r = r[0])
                        ? a[u]
                            ? a[u] += r
                            : a[++u] = r
                        : (a[++u] = null, c.push({
                            i: u,
                            x: Gi(e, r)
                        })), o = Xi.lastIndex;
                }
                return o < n.length && (i = n.slice(o), a[u]
                    ? a[u] += i
                    : a[++u] = i), a.length < 2
                    ? c[0]
                        ? (n = c[0].x, function (t) {
                            return n(t) + '';
                        })
                        : function () {
                            return n;
                        }
                    : (n = c.length, function (t) {
                        for (var e, r = 0; r < n; ++r) {
                            a[(e = c[r]).i] = e.x(t);
                        }
                        return a.join('');
                    });
            }

            o.geom.delaunay = function (t) {
                return o.geom.voronoi().triangles(t);
            }, o.geom.quadtree = function (t, n, e, r, i) {
                var o,
                    u = ri,
                    a = ii;
                if (o = arguments.length) {
                    return u = Vi, a = Wi, 3 === o && (i = e, r = n, e = n = 0), c(t);
                }

                function c(t) {
                    var c,
                        l,
                        s,
                        f,
                        h,
                        p,
                        v,
                        d,
                        g,
                        y = Mn(u),
                        m = Mn(a);
                    if (null != n) {
                        p = n, v = e, d = r, g = i;
                    } else {
                        if (d = g = -(p = v = 1 / 0), l = [], s = [], h = t.length, o) {
                            for (f = 0; f < h; ++f) {
                                (c = t[f]).x < p && (p = c.x), c.y < v && (v = c.y), c.x > d && (d = c.x), c.y > g && (g = c.y), l.push(c.x), s.push(c.y);
                            }
                        } else {
                            for (f = 0; f < h; ++f) {
                                var x = +y(c = t[f], f),
                                    b = +m(c, f);
                                x < p && (p = x), b < v && (v = b), x > d && (d = x), b > g && (g = b), l.push(x), s.push(b);
                            }
                        }
                    }
                    var M = d - p,
                        _ = g - v;

                    function S(t, n, e, r, i, o, u, a) {
                        if (!isNaN(e) && !isNaN(r)) {
                            if (t.leaf) {
                                var c = t.x,
                                    l = t.y;
                                if (null != c) {
                                    if (w(c - e) + w(l - r) < .01) {
                                        E(t, n, e, r, i, o, u, a);
                                    } else {
                                        var s = t.point;
                                        t.x = t.y = t.point = null, E(t, s, c, l, i, o, u, a), E(t, n, e, r, i, o, u, a);
                                    }
                                } else {
                                    t.x = e, t.y = r, t.point = n;
                                }
                            } else {
                                E(t, n, e, r, i, o, u, a);
                            }
                        }
                    }

                    function E(t, n, e, r, i, o, u, a) {
                        var c = .5 * (i + u),
                            l = .5 * (o + a),
                            s = e >= c,
                            f = r >= l,
                            h = f << 1 | s;
                        t.leaf = !1, t = t.nodes[h] || (t.nodes[h] = {
                            leaf: !0,
                            nodes: [],
                            point: null,
                            x: null,
                            y: null,
                            add: function (t) {
                                S(N, t, +y(t, ++f), +m(t, f), p, v, d, g);
                            }
                        }), s
                            ? i = c
                            : u = c, f
                            ? o = l
                            : a = l, S(t, n, e, r, i, o, u, a);
                    }

                    M > _
                        ? g = v + M
                        : d = p + _;
                    var N = {
                        leaf: !0,
                        nodes: [],
                        point: null,
                        x: null,
                        y: null,
                        add: function (t) {
                            S(N, t, +y(t, ++f), +m(t, f), p, v, d, g);
                        }
                    };
                    if (N.visit = function (t) {
                        !function t(n, e, r, i, o, u) {
                            if (!n(e, r, i, o, u)) {
                                var a = .5 * (r + o),
                                    c = .5 * (i + u),
                                    l = e.nodes;
                                l[0] && t(n, l[0], r, i, a, c), l[1] && t(n, l[1], a, i, o, c), l[2] && t(n, l[2], r, c, a, u), l[3] && t(n, l[3], a, c, o, u);
                            }
                        }(t, N, p, v, d, g);
                    }, N.find = function (t) {
                        return function (t, n, e, r, i, o, u) {
                            var a,
                                c = 1 / 0;
                            return function t(l, s, f, h, p) {
                                if (!(s > o || f > u || h < r || p < i)) {
                                    if (v = l.point) {
                                        var v,
                                            d = n - l.x,
                                            g = e - l.y,
                                            y = d * d + g * g;
                                        if (y < c) {
                                            var m = Math.sqrt(c = y);
                                            r = n - m, i = e - m, o = n + m, u = e + m, a = v;
                                        }
                                    }
                                    for (var x = l.nodes, b = .5 * (s + h), M = .5 * (f + p), w = (e >= M) << 1 | n >= b, _ = w + 4; w < _; ++w) {
                                        if (l = x[3 & w]) {
                                            switch (3 & w) {
                                                case 0:
                                                    t(l, s, f, b, M);
                                                    break;
                                                case 1:
                                                    t(l, b, f, h, M);
                                                    break;
                                                case 2:
                                                    t(l, s, M, b, p);
                                                    break;
                                                case 3:
                                                    t(l, b, M, h, p);
                                            }
                                        }
                                    }
                                }
                            }(t, r, i, o, u), a;
                        }(N, t[0], t[1], p, v, d, g);
                    }, f = -1, null == n) {
                        for (; ++f < h;) {
                            S(N, t[f], l[f], s[f], p, v, d, g);
                        }
                        --f;
                    } else {
                        t.forEach(N.add);
                    }
                    return l = s = t = c = null, N;
                }

                return c.x = function (t) {
                    return arguments.length
                        ? (u = t, c)
                        : u;
                }, c.y = function (t) {
                    return arguments.length
                        ? (a = t, c)
                        : a;
                }, c.extent = function (t) {
                    return arguments.length
                        ? (null == t
                            ? n = e = r = i = null
                            : (n = +t[0][0], e = +t[0][1], r = +t[1][0], i = +t[1][1]), c)
                        : null == n
                            ? null
                            : [[n, e], [r, i]];
                }, c.size = function (t) {
                    return arguments.length
                        ? (null == t
                            ? n = e = r = i = null
                            : (n = e = 0, r = +t[0], i = +t[1]), c)
                        : null == n
                            ? null
                            : [r - n, i - e];
                }, c;
            }, o.interpolateRgb = Hi, o.interpolateObject = Yi, o.interpolateNumber = Gi, o.interpolateString = Zi;
            var $i = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                Xi = new RegExp($i.source, 'g');

            function Ji(t, n) {
                for (var e, r = o.interpolators.length; --r >= 0 && !(e = o.interpolators[r](t, n));) {
                    ;
                }
                return e;
            }

            function Ki(t, n) {
                var e,
                    r = [],
                    i = [],
                    o = t.length,
                    u = n.length,
                    a = Math.min(t.length, n.length);
                for (e = 0; e < a; ++e) {
                    r.push(Ji(t[e], n[e]));
                }
                for (; e < o; ++e) {
                    i[e] = t[e];
                }
                for (; e < u; ++e) {
                    i[e] = n[e];
                }
                return function (t) {
                    for (e = 0; e < a; ++e) {
                        i[e] = r[e](t);
                    }
                    return i;
                };
            }

            o.interpolate = Ji, o.interpolators = [function (t, n) {
                var e = typeof n;
                return ('string' === e
                    ? bn.has(n.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(n)
                        ? Hi
                        : Zi
                    : n instanceof Ht
                        ? Hi
                        : Array.isArray(n)
                            ? Ki
                            : 'object' === e && isNaN(n)
                                ? Yi
                                : Gi)(t, n);
            }], o.interpolateArray = Ki;
            var Qi = function () {
                    return R;
                },
                to = o.map({
                    linear: Qi,
                    poly: function (t) {
                        return function (n) {
                            return Math.pow(n, t);
                        };
                    },
                    quad: function () {
                        return io;
                    },
                    cubic: function () {
                        return oo;
                    },
                    sin: function () {
                        return ao;
                    },
                    exp: function () {
                        return co;
                    },
                    circle: function () {
                        return lo;
                    },
                    elastic: function (t, n) {
                        var e;
                        arguments.length < 2 && (n = .45);
                        arguments.length
                            ? e = n / Ot * Math.asin(1 / t)
                            : (t = 1, e = n / 4);
                        return function (r) {
                            return 1 + t * Math.pow(2, -10 * r) * Math.sin((r - e) * Ot / n);
                        };
                    },
                    back: function (t) {
                        t || (t = 1.70158);
                        return function (n) {
                            return n * n * ((t + 1) * n - t);
                        };
                    },
                    bounce: function () {
                        return so;
                    }
                }),
                no = o.map({
                    in: R,
                    out: eo,
                    'in-out': ro,
                    'out-in': function (t) {
                        return ro(eo(t));
                    }
                });

            function eo(t) {
                return function (n) {
                    return 1 - t(1 - n);
                };
            }

            function ro(t) {
                return function (n) {
                    return .5 * (n < .5
                        ? t(2 * n)
                        : 2 - t(2 - 2 * n));
                };
            }

            function io(t) {
                return t * t;
            }

            function oo(t) {
                return t * t * t;
            }

            function uo(t) {
                if (t <= 0) {
                    return 0;
                }
                if (t >= 1) {
                    return 1;
                }
                var n = t * t,
                    e = n * t;
                return 4 * (t < .5
                    ? e
                    : 3 * (t - n) + e - .75);
            }

            function ao(t) {
                return 1 - Math.cos(t * Lt);
            }

            function co(t) {
                return Math.pow(2, 10 * (t - 1));
            }

            function lo(t) {
                return 1 - Math.sqrt(1 - t * t);
            }

            function so(t) {
                return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                        ? 7.5625 * (t -= 1.5 / 2.75) * t + .75
                        : t < 2.5 / 2.75
                            ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375
                            : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
            }

            function fo(t, n) {
                return n -= t, function (e) {
                    return Math.round(t + n * e);
                };
            }

            function ho(t) {
                var n = [t.a, t.b],
                    e = [t.c, t.d],
                    r = vo(n),
                    i = po(n, e),
                    o = vo(function (t, n, e) {
                        return t[0] += e * n[0], t[1] += e * n[1], t;
                    }(e, n, -i)) || 0;
                n[0] * e[1] < e[0] * n[1] && (n[0] *= -1, n[1] *= -1, r *= -1, i *= -1), this.rotate = (r
                    ? Math.atan2(n[1], n[0])
                    : Math.atan2(-e[0], e[1])) * Pt, this.translate = [t.e, t.f], this.scale = [r, o], this.skew = o
                    ? Math.atan2(i, o) * Pt
                    : 0;
            }

            function po(t, n) {
                return t[0] * n[0] + t[1] * n[1];
            }

            function vo(t) {
                var n = Math.sqrt(po(t, t));
                return n && (t[0] /= n, t[1] /= n), n;
            }

            o.ease = function (t) {
                var n = t.indexOf('-'),
                    e = n >= 0
                        ? t.slice(0, n)
                        : t,
                    r = n >= 0
                        ? t.slice(n + 1)
                        : 'in';
                return e = to.get(e) || Qi, function (t) {
                    return function (n) {
                        return n <= 0
                            ? 0
                            : n >= 1
                                ? 1
                                : t(n);
                    };
                }((r = no.get(r) || R)(e.apply(null, u.call(arguments, 1))));
            }, o.interpolateHcl = function (t, n) {
                t = o.hcl(t), n = o.hcl(n);
                var e = t.h,
                    r = t.c,
                    i = t.l,
                    u = n.h - e,
                    a = n.c - r,
                    c = n.l - i;
                isNaN(a) && (a = 0, r = isNaN(r)
                    ? n.c
                    : r);
                isNaN(u)
                    ? (u = 0, e = isNaN(e)
                        ? n.h
                        : e)
                    : u > 180
                        ? u -= 360
                        : u < -180 && (u += 360);
                return function (t) {
                    return Jt(e + u * t, r + a * t, i + c * t) + '';
                };
            }, o.interpolateHsl = function (t, n) {
                t = o.hsl(t), n = o.hsl(n);
                var e = t.h,
                    r = t.s,
                    i = t.l,
                    u = n.h - e,
                    a = n.s - r,
                    c = n.l - i;
                isNaN(a) && (a = 0, r = isNaN(r)
                    ? n.s
                    : r);
                isNaN(u)
                    ? (u = 0, e = isNaN(e)
                        ? n.h
                        : e)
                    : u > 180
                        ? u -= 360
                        : u < -180 && (u += 360);
                return function (t) {
                    return Zt(e + u * t, r + a * t, i + c * t) + '';
                };
            }, o.interpolateLab = function (t, n) {
                t = o.lab(t), n = o.lab(n);
                var e = t.l,
                    r = t.a,
                    i = t.b,
                    u = n.l - e,
                    a = n.a - r,
                    c = n.b - i;
                return function (t) {
                    return on(e + u * t, r + a * t, i + c * t) + '';
                };
            }, o.interpolateRound = fo, o.transform = function (t) {
                var n = c.createElementNS(o.ns.prefix.svg, 'g');
                return (o.transform = function (t) {
                    if (null != t) {
                        n.setAttribute('transform', t);
                        var e = n.transform.baseVal.consolidate();
                    }
                    return new ho(e
                        ? e.matrix
                        : go);
                })(t);
            }, ho.prototype.toString = function () {
                return 'translate(' + this.translate + ')rotate(' + this.rotate + ')skewX(' + this.skew + ')scale(' + this.scale + ')';
            };
            var go = {
                a: 1,
                b: 0,
                c: 0,
                d: 1,
                e: 0,
                f: 0
            };

            function yo(t) {
                return t.length
                    ? t.pop() + ','
                    : '';
            }

            function mo(t, n) {
                var e = [],
                    r = [];
                return t = o.transform(t), n = o.transform(n), function (t, n, e, r) {
                    if (t[0] !== n[0] || t[1] !== n[1]) {
                        var i = e.push('translate(', null, ',', null, ')');
                        r.push({
                            i: i - 4,
                            x: Gi(t[0], n[0])
                        }, {
                            i: i - 2,
                            x: Gi(t[1], n[1])
                        });
                    } else {
                        (n[0] || n[1]) && e.push('translate(' + n + ')');
                    }
                }(t.translate, n.translate, e, r), function (t, n, e, r) {
                    t !== n
                        ? (t - n > 180
                            ? n += 360
                            : n - t > 180 && (t += 360), r.push({
                            i: e.push(yo(e) + 'rotate(', null, ')') - 2,
                            x: Gi(t, n)
                        }))
                        : n && e.push(yo(e) + 'rotate(' + n + ')');
                }(t.rotate, n.rotate, e, r), function (t, n, e, r) {
                    t !== n
                        ? r.push({
                            i: e.push(yo(e) + 'skewX(', null, ')') - 2,
                            x: Gi(t, n)
                        })
                        : n && e.push(yo(e) + 'skewX(' + n + ')');
                }(t.skew, n.skew, e, r), function (t, n, e, r) {
                    if (t[0] !== n[0] || t[1] !== n[1]) {
                        var i = e.push(yo(e) + 'scale(', null, ',', null, ')');
                        r.push({
                            i: i - 4,
                            x: Gi(t[0], n[0])
                        }, {
                            i: i - 2,
                            x: Gi(t[1], n[1])
                        });
                    } else {
                        1 === n[0] && 1 === n[1] || e.push(yo(e) + 'scale(' + n + ')');
                    }
                }(t.scale, n.scale, e, r), t = n = null, function (t) {
                    for (var n, i = -1, o = r.length; ++i < o;) {
                        e[(n = r[i]).i] = n.x(t);
                    }
                    return e.join('');
                };
            }

            function xo(t, n) {
                return n = (n -= t = +t) || 1 / n, function (e) {
                    return (e - t) / n;
                };
            }

            function bo(t, n) {
                return n = (n -= t = +t) || 1 / n, function (e) {
                    return Math.max(0, Math.min(1, (e - t) / n));
                };
            }

            function Mo(t) {
                for (var n = t.source, e = t.target, r = function (t, n) {
                    if (t === n) {
                        return t;
                    }
                    var e = wo(t),
                        r = wo(n),
                        i = e.pop(),
                        o = r.pop(),
                        u = null;
                    for (; i === o;) {
                        u = i, i = e.pop(), o = r.pop();
                    }
                    return u;
                }(n, e), i = [n]; n !== r;) {
                    n = n.parent, i.push(n);
                }
                for (var o = i.length; e !== r;) {
                    i.splice(o, 0, e), e = e.parent;
                }
                return i;
            }

            function wo(t) {
                for (var n = [], e = t.parent; null != e;) {
                    n.push(t), t = e, e = e.parent;
                }
                return n.push(t), n;
            }

            function _o(t) {
                t.fixed |= 2;
            }

            function So(t) {
                t.fixed &= -7;
            }

            function Eo(t) {
                t.fixed |= 4, t.px = t.x, t.py = t.y;
            }

            function No(t) {
                t.fixed &= -5;
            }

            o.interpolateTransform = mo, o.layout = {}, o.layout.bundle = function () {
                return function (t) {
                    for (var n = [], e = -1, r = t.length; ++e < r;) {
                        n.push(Mo(t[e]));
                    }
                    return n;
                };
            }, o.layout.chord = function () {
                var t,
                    n,
                    e,
                    r,
                    i,
                    u,
                    a,
                    c = {},
                    l = 0;

                function s() {
                    var c,
                        s,
                        h,
                        p,
                        v,
                        d = {},
                        g = [],
                        y = o.range(r),
                        m = [];
                    for (t = [], n = [], c = 0, p = -1; ++p < r;) {
                        for (s = 0, v = -1; ++v < r;) {
                            s += e[p][v];
                        }
                        g.push(s), m.push(o.range(r)), c += s;
                    }
                    for (i && y.sort((function (t, n) {
                        return i(g[t], g[n]);
                    })), u && m.forEach((function (t, n) {
                        t.sort((function (t, r) {
                            return u(e[n][t], e[n][r]);
                        }));
                    })), c = (Ot - l * r) / c, s = 0, p = -1; ++p < r;) {
                        for (h = s, v = -1; ++v < r;) {
                            var x = y[p],
                                b = m[x][v],
                                M = e[x][b],
                                w = s,
                                _ = s += M * c;
                            d[x + '-' + b] = {
                                index: x,
                                subindex: b,
                                startAngle: w,
                                endAngle: _,
                                value: M
                            };
                        }
                        n[x] = {
                            index: x,
                            startAngle: h,
                            endAngle: s,
                            value: g[x]
                        }, s += l;
                    }
                    for (p = -1; ++p < r;) {
                        for (v = p - 1; ++v < r;) {
                            var S = d[p + '-' + v],
                                E = d[v + '-' + p];
                            (S.value || E.value) && t.push(S.value < E.value
                                ? {
                                    source: E,
                                    target: S
                                }
                                : {
                                    source: S,
                                    target: E
                                });
                        }
                    }
                    a && f();
                }

                function f() {
                    t.sort((function (t, n) {
                        return a((t.source.value + t.target.value) / 2, (n.source.value + n.target.value) / 2);
                    }));
                }

                return c.matrix = function (i) {
                    return arguments.length
                        ? (r = (e = i) && e.length, t = n = null, c)
                        : e;
                }, c.padding = function (e) {
                    return arguments.length
                        ? (l = e, t = n = null, c)
                        : l;
                }, c.sortGroups = function (e) {
                    return arguments.length
                        ? (i = e, t = n = null, c)
                        : i;
                }, c.sortSubgroups = function (n) {
                    return arguments.length
                        ? (u = n, t = null, c)
                        : u;
                }, c.sortChords = function (n) {
                    return arguments.length
                        ? (a = n, t && f(), c)
                        : a;
                }, c.chords = function () {
                    return t || s(), t;
                }, c.groups = function () {
                    return n || s(), n;
                }, c;
            }, o.layout.force = function () {
                var t,
                    n,
                    e,
                    r,
                    i,
                    u,
                    a = {},
                    c = o.dispatch('start', 'tick', 'end'),
                    l = [1, 1],
                    s = .9,
                    f = Ao,
                    h = ko,
                    p = -30,
                    v = Co,
                    d = .1,
                    g = .64,
                    y = [],
                    m = [];

                function x(t) {
                    return function (n, e, r, i) {
                        if (n.point !== t) {
                            var o = n.cx - t.x,
                                u = n.cy - t.y,
                                a = i - e,
                                c = o * o + u * u;
                            if (a * a / g < c) {
                                if (c < v) {
                                    var l = n.charge / c;
                                    t.px -= o * l, t.py -= u * l;
                                }
                                return !0;
                            }
                            if (n.point && c && c < v) {
                                l = n.pointCharge / c;
                                t.px -= o * l, t.py -= u * l;
                            }
                        }
                        return !n.charge;
                    };
                }

                function b(t) {
                    t.px = o.event.x, t.py = o.event.y, a.resume();
                }

                return a.tick = function () {
                    if ((e *= .99) < .005) {
                        return t = null, c.end({
                            type: 'end',
                            alpha: e = 0
                        }), !0;
                    }
                    var n,
                        a,
                        f,
                        h,
                        v,
                        g,
                        b,
                        M,
                        w,
                        _ = y.length,
                        S = m.length;
                    for (a = 0; a < S; ++a) {
                        h = (f = m[a]).source, (g = (M = (v = f.target).x - h.x) * M + (w = v.y - h.y) * w) && (M *= g = e * i[a] * ((g = Math.sqrt(g)) - r[a]) / g, w *= g, v.x -= M * (b = h.weight + v.weight
                            ? h.weight / (h.weight + v.weight)
                            : .5), v.y -= w * b, h.x += M * (b = 1 - b), h.y += w * b);
                    }
                    if ((b = e * d) && (M = l[0] / 2, w = l[1] / 2, a = -1, b)) {
                        for (; ++a < _;) {
                            (f = y[a]).x += (M - f.x) * b, f.y += (w - f.y) * b;
                        }
                    }
                    if (p) {
                        for (!function t(n, e, r) {
                            var i = 0,
                                o = 0;
                            n.charge = 0;
                            if (!n.leaf) {
                                for (var u, a = n.nodes, c = a.length, l = -1; ++l < c;) {
                                    null != (u = a[l]) && (t(u, e, r), n.charge += u.charge, i += u.charge * u.cx, o += u.charge * u.cy);
                                }
                            }
                            if (n.point) {
                                n.leaf || (n.point.x += Math.random() - .5, n.point.y += Math.random() - .5);
                                var s = e * r[n.point.index];
                                n.charge += n.pointCharge = s, i += s * n.point.x, o += s * n.point.y;
                            }
                            n.cx = i / n.charge;
                            n.cy = o / n.charge;
                        }(n = o.geom.quadtree(y), e, u), a = -1; ++a < _;) {
                            (f = y[a]).fixed || n.visit(x(f));
                        }
                    }
                    for (a = -1; ++a < _;) {
                        (f = y[a]).fixed
                            ? (f.x = f.px, f.y = f.py)
                            : (f.x -= (f.px - (f.px = f.x)) * s, f.y -= (f.py - (f.py = f.y)) * s);
                    }
                    c.tick({
                        type: 'tick',
                        alpha: e
                    });
                }, a.nodes = function (t) {
                    return arguments.length
                        ? (y = t, a)
                        : y;
                }, a.links = function (t) {
                    return arguments.length
                        ? (m = t, a)
                        : m;
                }, a.size = function (t) {
                    return arguments.length
                        ? (l = t, a)
                        : l;
                }, a.linkDistance = function (t) {
                    return arguments.length
                        ? (f = 'function' == typeof t
                            ? t
                            : +t, a)
                        : f;
                }, a.distance = a.linkDistance, a.linkStrength = function (t) {
                    return arguments.length
                        ? (h = 'function' == typeof t
                            ? t
                            : +t, a)
                        : h;
                }, a.friction = function (t) {
                    return arguments.length
                        ? (s = +t, a)
                        : s;
                }, a.charge = function (t) {
                    return arguments.length
                        ? (p = 'function' == typeof t
                            ? t
                            : +t, a)
                        : p;
                }, a.chargeDistance = function (t) {
                    return arguments.length
                        ? (v = t * t, a)
                        : Math.sqrt(v);
                }, a.gravity = function (t) {
                    return arguments.length
                        ? (d = +t, a)
                        : d;
                }, a.theta = function (t) {
                    return arguments.length
                        ? (g = t * t, a)
                        : Math.sqrt(g);
                }, a.alpha = function (n) {
                    return arguments.length
                        ? (n = +n, e
                            ? n > 0
                                ? e = n
                                : (t.c = null, t.t = NaN, t = null, c.end({
                                    type: 'end',
                                    alpha: e = 0
                                }))
                            : n > 0 && (c.start({
                            type: 'start',
                            alpha: e = n
                        }), t = Cn(a.tick)), a)
                        : e;
                }, a.start = function () {
                    var t,
                        n,
                        e,
                        o = y.length,
                        c = m.length,
                        s = l[0],
                        v = l[1];
                    for (t = 0; t < o; ++t) {
                        (e = y[t]).index = t, e.weight = 0;
                    }
                    for (t = 0; t < c; ++t) {
                        'number' == typeof (e = m[t]).source && (e.source = y[e.source]), 'number' == typeof e.target && (e.target = y[e.target]), ++e.source.weight, ++e.target.weight;
                    }
                    for (t = 0; t < o; ++t) {
                        e = y[t], isNaN(e.x) && (e.x = d('x', s)), isNaN(e.y) && (e.y = d('y', v)), isNaN(e.px) && (e.px = e.x), isNaN(e.py) && (e.py = e.y);
                    }
                    if (r = [], 'function' == typeof f) {
                        for (t = 0; t < c; ++t) {
                            r[t] = +f.call(this, m[t], t);
                        }
                    } else {
                        for (t = 0; t < c; ++t) {
                            r[t] = f;
                        }
                    }
                    if (i = [], 'function' == typeof h) {
                        for (t = 0; t < c; ++t) {
                            i[t] = +h.call(this, m[t], t);
                        }
                    } else {
                        for (t = 0; t < c; ++t) {
                            i[t] = h;
                        }
                    }
                    if (u = [], 'function' == typeof p) {
                        for (t = 0; t < o; ++t) {
                            u[t] = +p.call(this, y[t], t);
                        }
                    } else {
                        for (t = 0; t < o; ++t) {
                            u[t] = p;
                        }
                    }

                    function d(e, r) {
                        if (!n) {
                            for (n = new Array(o), l = 0; l < o; ++l) {
                                n[l] = [];
                            }
                            for (l = 0; l < c; ++l) {
                                var i = m[l];
                                n[i.source.index].push(i.target), n[i.target.index].push(i.source);
                            }
                        }
                        for (var u, a = n[t], l = -1, s = a.length; ++l < s;) {
                            if (!isNaN(u = a[l][e])) {
                                return u;
                            }
                        }
                        return Math.random() * r;
                    }

                    return a.resume();
                }, a.resume = function () {
                    return a.alpha(.1);
                }, a.stop = function () {
                    return a.alpha(0);
                }, a.drag = function () {
                    if (n || (n = o.behavior.drag().origin(R).on('dragstart.force', _o).on('drag.force', b).on('dragend.force', So)), !arguments.length) {
                        return n;
                    }
                    this.on('mouseover.force', Eo).on('mouseout.force', No).call(n);
                }, o.rebind(a, c, 'on');
            };
            var Ao = 20,
                ko = 1,
                Co = 1 / 0;

            function Oo(t, n) {
                return o.rebind(t, n, 'sort', 'children', 'value'), t.nodes = t, t.links = jo, t;
            }

            function Fo(t, n) {
                for (var e = [t]; null != (t = e.pop());) {
                    if (n(t), (i = t.children) && (r = i.length)) {
                        for (var r, i; --r >= 0;) {
                            e.push(i[r]);
                        }
                    }
                }
            }

            function Lo(t, n) {
                for (var e = [t], r = []; null != (t = e.pop());) {
                    if (r.push(t), (o = t.children) && (i = o.length)) {
                        for (var i, o, u = -1; ++u < i;) {
                            e.push(o[u]);
                        }
                    }
                }
                for (; null != (t = r.pop());) {
                    n(t);
                }
            }

            function To(t) {
                return t.children;
            }

            function Po(t) {
                return t.value;
            }

            function Ro(t, n) {
                return n.value - t.value;
            }

            function jo(t) {
                return o.merge(t.map((function (t) {
                    return (t.children || []).map((function (n) {
                        return {
                            source: t,
                            target: n
                        };
                    }));
                })));
            }

            o.layout.hierarchy = function () {
                var t = Ro,
                    n = To,
                    e = Po;

                function r(i) {
                    var o,
                        u = [i],
                        a = [];
                    for (i.depth = 0; null != (o = u.pop());) {
                        if (a.push(o), (l = n.call(r, o, o.depth)) && (c = l.length)) {
                            for (var c, l, s; --c >= 0;) {
                                u.push(s = l[c]), s.parent = o, s.depth = o.depth + 1;
                            }
                            e && (o.value = 0), o.children = l;
                        } else {
                            e && (o.value = +e.call(r, o, o.depth) || 0), delete o.children;
                        }
                    }
                    return Lo(i, (function (n) {
                        var r,
                            i;
                        t && (r = n.children) && r.sort(t), e && (i = n.parent) && (i.value += n.value);
                    })), a;
                }

                return r.sort = function (n) {
                    return arguments.length
                        ? (t = n, r)
                        : t;
                }, r.children = function (t) {
                    return arguments.length
                        ? (n = t, r)
                        : n;
                }, r.value = function (t) {
                    return arguments.length
                        ? (e = t, r)
                        : e;
                }, r.revalue = function (t) {
                    return e && (Fo(t, (function (t) {
                        t.children && (t.value = 0);
                    })), Lo(t, (function (t) {
                        var n;
                        t.children || (t.value = +e.call(r, t, t.depth) || 0), (n = t.parent) && (n.value += t.value);
                    }))), t;
                }, r;
            }, o.layout.partition = function () {
                var t = o.layout.hierarchy(),
                    n = [1, 1];

                function e(e, r) {
                    var i = t.call(this, e, r);
                    return function t(n, e, r, i) {
                        var o = n.children;
                        if (n.x = e, n.y = n.depth * i, n.dx = r, n.dy = i, o && (u = o.length)) {
                            var u,
                                a,
                                c,
                                l = -1;
                            for (r = n.value
                                ? r / n.value
                                : 0; ++l < u;) {
                                t(a = o[l], e, c = a.value * r, i), e += c;
                            }
                        }
                    }(i[0], 0, n[0], n[1] / function t(n) {
                        var e = n.children,
                            r = 0;
                        if (e && (i = e.length)) {
                            for (var i, o = -1; ++o < i;) {
                                r = Math.max(r, t(e[o]));
                            }
                        }
                        return 1 + r;
                    }(i[0])), i;
                }

                return e.size = function (t) {
                    return arguments.length
                        ? (n = t, e)
                        : n;
                }, Oo(e, t);
            }, o.layout.pie = function () {
                var t = Number,
                    n = Do,
                    e = 0,
                    r = Ot,
                    i = 0;

                function u(a) {
                    var c,
                        l = a.length,
                        s = a.map((function (n, e) {
                            return +t.call(u, n, e);
                        })),
                        f = +('function' == typeof e
                            ? e.apply(this, arguments)
                            : e),
                        h = ('function' == typeof r
                            ? r.apply(this, arguments)
                            : r) - f,
                        p = Math.min(Math.abs(h) / l, +('function' == typeof i
                            ? i.apply(this, arguments)
                            : i)),
                        v = p * (h < 0
                            ? -1
                            : 1),
                        d = o.sum(s),
                        g = d
                            ? (h - l * v) / d
                            : 0,
                        y = o.range(l),
                        m = [];
                    return null != n && y.sort(n === Do
                        ? function (t, n) {
                            return s[n] - s[t];
                        }
                        : function (t, e) {
                            return n(a[t], a[e]);
                        }), y.forEach((function (t) {
                        m[t] = {
                            data: a[t],
                            value: c = s[t],
                            startAngle: f,
                            endAngle: f += c * g + v,
                            padAngle: p
                        };
                    })), m;
                }

                return u.value = function (n) {
                    return arguments.length
                        ? (t = n, u)
                        : t;
                }, u.sort = function (t) {
                    return arguments.length
                        ? (n = t, u)
                        : n;
                }, u.startAngle = function (t) {
                    return arguments.length
                        ? (e = t, u)
                        : e;
                }, u.endAngle = function (t) {
                    return arguments.length
                        ? (r = t, u)
                        : r;
                }, u.padAngle = function (t) {
                    return arguments.length
                        ? (i = t, u)
                        : i;
                }, u;
            };
            var Do = {};

            function qo(t) {
                return t.x;
            }

            function Io(t) {
                return t.y;
            }

            function zo(t, n, e) {
                t.y0 = n, t.y = e;
            }

            o.layout.stack = function () {
                var t = R,
                    n = Vo,
                    e = Wo,
                    r = zo,
                    i = qo,
                    u = Io;

                function a(c, l) {
                    if (!(p = c.length)) {
                        return c;
                    }
                    var s = c.map((function (n, e) {
                            return t.call(a, n, e);
                        })),
                        f = s.map((function (t) {
                            return t.map((function (t, n) {
                                return [i.call(a, t, n), u.call(a, t, n)];
                            }));
                        })),
                        h = n.call(a, f, l);
                    s = o.permute(s, h), f = o.permute(f, h);
                    var p,
                        v,
                        d,
                        g,
                        y = e.call(a, f, l),
                        m = s[0].length;
                    for (d = 0; d < m; ++d) {
                        for (r.call(a, s[0][d], g = y[d], f[0][d][1]), v = 1; v < p; ++v) {
                            r.call(a, s[v][d], g += f[v - 1][d][1], f[v][d][1]);
                        }
                    }
                    return c;
                }

                return a.values = function (n) {
                    return arguments.length
                        ? (t = n, a)
                        : t;
                }, a.order = function (t) {
                    return arguments.length
                        ? (n = 'function' == typeof t
                            ? t
                            : Uo.get(t) || Vo, a)
                        : n;
                }, a.offset = function (t) {
                    return arguments.length
                        ? (e = 'function' == typeof t
                            ? t
                            : Bo.get(t) || Wo, a)
                        : e;
                }, a.x = function (t) {
                    return arguments.length
                        ? (i = t, a)
                        : i;
                }, a.y = function (t) {
                    return arguments.length
                        ? (u = t, a)
                        : u;
                }, a.out = function (t) {
                    return arguments.length
                        ? (r = t, a)
                        : r;
                }, a;
            };
            var Uo = o.map({
                    'inside-out': function (t) {
                        var n,
                            e,
                            r = t.length,
                            i = t.map(Ho),
                            u = t.map(Yo),
                            a = o.range(r).sort((function (t, n) {
                                return i[t] - i[n];
                            })),
                            c = 0,
                            l = 0,
                            s = [],
                            f = [];
                        for (n = 0; n < r; ++n) {
                            e = a[n], c < l
                                ? (c += u[e], s.push(e))
                                : (l += u[e], f.push(e));
                        }
                        return f.reverse().concat(s);
                    },
                    reverse: function (t) {
                        return o.range(t.length).reverse();
                    },
                    default: Vo
                }),
                Bo = o.map({
                    silhouette: function (t) {
                        var n,
                            e,
                            r,
                            i = t.length,
                            o = t[0].length,
                            u = [],
                            a = 0,
                            c = [];
                        for (e = 0; e < o; ++e) {
                            for (n = 0, r = 0; n < i; n++) {
                                r += t[n][e][1];
                            }
                            r > a && (a = r), u.push(r);
                        }
                        for (e = 0; e < o; ++e) {
                            c[e] = (a - u[e]) / 2;
                        }
                        return c;
                    },
                    wiggle: function (t) {
                        var n,
                            e,
                            r,
                            i,
                            o,
                            u,
                            a,
                            c,
                            l,
                            s = t.length,
                            f = t[0],
                            h = f.length,
                            p = [];
                        for (p[0] = c = l = 0, e = 1; e < h; ++e) {
                            for (n = 0, i = 0; n < s; ++n) {
                                i += t[n][e][1];
                            }
                            for (n = 0, o = 0, a = f[e][0] - f[e - 1][0]; n < s; ++n) {
                                for (r = 0, u = (t[n][e][1] - t[n][e - 1][1]) / (2 * a); r < n; ++r) {
                                    u += (t[r][e][1] - t[r][e - 1][1]) / a;
                                }
                                o += u * t[n][e][1];
                            }
                            p[e] = c -= i
                                ? o / i * a
                                : 0, c < l && (l = c);
                        }
                        for (e = 0; e < h; ++e) {
                            p[e] -= l;
                        }
                        return p;
                    },
                    expand: function (t) {
                        var n,
                            e,
                            r,
                            i = t.length,
                            o = t[0].length,
                            u = 1 / i,
                            a = [];
                        for (e = 0; e < o; ++e) {
                            for (n = 0, r = 0; n < i; n++) {
                                r += t[n][e][1];
                            }
                            if (r) {
                                for (n = 0; n < i; n++) {
                                    t[n][e][1] /= r;
                                }
                            } else {
                                for (n = 0; n < i; n++) {
                                    t[n][e][1] = u;
                                }
                            }
                        }
                        for (e = 0; e < o; ++e) {
                            a[e] = 0;
                        }
                        return a;
                    },
                    zero: Wo
                });

            function Vo(t) {
                return o.range(t.length);
            }

            function Wo(t) {
                for (var n = -1, e = t[0].length, r = []; ++n < e;) {
                    r[n] = 0;
                }
                return r;
            }

            function Ho(t) {
                for (var n, e = 1, r = 0, i = t[0][1], o = t.length; e < o; ++e) {
                    (n = t[e][1]) > i && (r = e, i = n);
                }
                return r;
            }

            function Yo(t) {
                return t.reduce(Go, 0);
            }

            function Go(t, n) {
                return t + n[1];
            }

            function Zo(t, n) {
                return $o(t, Math.ceil(Math.log(n.length) / Math.LN2 + 1));
            }

            function $o(t, n) {
                for (var e = -1, r = +t[0], i = (t[1] - r) / n, o = []; ++e <= n;) {
                    o[e] = i * e + r;
                }
                return o;
            }

            function Xo(t) {
                return [o.min(t), o.max(t)];
            }

            function Jo(t, n) {
                return t.value - n.value;
            }

            function Ko(t, n) {
                var e = t._pack_next;
                t._pack_next = n, n._pack_prev = t, n._pack_next = e, e._pack_prev = n;
            }

            function Qo(t, n) {
                t._pack_next = n, n._pack_prev = t;
            }

            function tu(t, n) {
                var e = n.x - t.x,
                    r = n.y - t.y,
                    i = t.r + n.r;
                return .999 * i * i > e * e + r * r;
            }

            function nu(t) {
                if ((n = t.children) && (c = n.length)) {
                    var n,
                        e,
                        r,
                        i,
                        o,
                        u,
                        a,
                        c,
                        l = 1 / 0,
                        s = -1 / 0,
                        f = 1 / 0,
                        h = -1 / 0;
                    if (n.forEach(eu), (e = n[0]).x = -e.r, e.y = 0, x(e), c > 1 && ((r = n[1]).x = r.r, r.y = 0, x(r), c > 2)) {
                        for (iu(e, r, i = n[2]), x(i), Ko(e, i), e._pack_prev = i, Ko(i, r), r = e._pack_next, o = 3; o < c; o++) {
                            iu(e, r, i = n[o]);
                            var p = 0,
                                v = 1,
                                d = 1;
                            for (u = r._pack_next; u !== r; u = u._pack_next, v++) {
                                if (tu(u, i)) {
                                    p = 1;
                                    break;
                                }
                            }
                            if (1 == p) {
                                for (a = e._pack_prev; a !== u._pack_prev && !tu(a, i); a = a._pack_prev, d++) {
                                    ;
                                }
                            }
                            p
                                ? (v < d || v == d && r.r < e.r
                                    ? Qo(e, r = u)
                                    : Qo(e = a, r), o--)
                                : (Ko(e, i), r = i, x(i));
                        }
                    }
                    var g = (l + s) / 2,
                        y = (f + h) / 2,
                        m = 0;
                    for (o = 0; o < c; o++) {
                        (i = n[o]).x -= g, i.y -= y, m = Math.max(m, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
                    }
                    t.r = m, n.forEach(ru);
                }

                function x(t) {
                    l = Math.min(t.x - t.r, l), s = Math.max(t.x + t.r, s), f = Math.min(t.y - t.r, f), h = Math.max(t.y + t.r, h);
                }
            }

            function eu(t) {
                t._pack_next = t._pack_prev = t;
            }

            function ru(t) {
                delete t._pack_next, delete t._pack_prev;
            }

            function iu(t, n, e) {
                var r = t.r + e.r,
                    i = n.x - t.x,
                    o = n.y - t.y;
                if (r && (i || o)) {
                    var u = n.r + e.r,
                        a = i * i + o * o,
                        c = .5 + ((r *= r) - (u *= u)) / (2 * a),
                        l = Math.sqrt(Math.max(0, 2 * u * (r + a) - (r -= a) * r - u * u)) / (2 * a);
                    e.x = t.x + c * i + l * o, e.y = t.y + c * o - l * i;
                } else {
                    e.x = t.x + r, e.y = t.y;
                }
            }

            function ou(t, n) {
                return t.parent == n.parent
                    ? 1
                    : 2;
            }

            function uu(t) {
                var n = t.children;
                return n.length
                    ? n[0]
                    : t.t;
            }

            function au(t) {
                var n,
                    e = t.children;
                return (n = e.length)
                    ? e[n - 1]
                    : t.t;
            }

            function cu(t, n, e) {
                var r = e / (n.i - t.i);
                n.c -= r, n.s += e, t.c += r, n.z += e, n.m += e;
            }

            function lu(t, n, e) {
                return t.a.parent === n.parent
                    ? t.a
                    : e;
            }

            function su(t) {
                return {
                    x: t.x,
                    y: t.y,
                    dx: t.dx,
                    dy: t.dy
                };
            }

            function fu(t, n) {
                var e = t.x + n[3],
                    r = t.y + n[0],
                    i = t.dx - n[1] - n[3],
                    o = t.dy - n[0] - n[2];
                return i < 0 && (e += i / 2, i = 0), o < 0 && (r += o / 2, o = 0), {
                    x: e,
                    y: r,
                    dx: i,
                    dy: o
                };
            }

            function hu(t) {
                var n = t[0],
                    e = t[t.length - 1];
                return n < e
                    ? [n, e]
                    : [e, n];
            }

            function pu(t) {
                return t.rangeExtent
                    ? t.rangeExtent()
                    : hu(t.range());
            }

            function vu(t, n, e, r) {
                var i = e(t[0], t[1]),
                    o = r(n[0], n[1]);
                return function (t) {
                    return o(i(t));
                };
            }

            function du(t, n) {
                var e,
                    r = 0,
                    i = t.length - 1,
                    o = t[r],
                    u = t[i];
                return u < o && (e = r, r = i, i = e, e = o, o = u, u = e), t[r] = n.floor(o), t[i] = n.ceil(u), t;
            }

            function gu(t) {
                return t
                    ? {
                        floor: function (n) {
                            return Math.floor(n / t) * t;
                        },
                        ceil: function (n) {
                            return Math.ceil(n / t) * t;
                        }
                    }
                    : yu;
            }

            o.layout.histogram = function () {
                var t = !0,
                    n = Number,
                    e = Xo,
                    r = Zo;

                function i(i, u) {
                    for (var a, c, l = [], s = i.map(n, this), f = e.call(this, s, u), h = r.call(this, f, s, u), p = (u = -1, s.length), v = h.length - 1, d = t
                        ? 1
                        : 1 / p; ++u < v;) {
                        (a = l[u] = []).dx = h[u + 1] - (a.x = h[u]), a.y = 0;
                    }
                    if (v > 0) {
                        for (u = -1; ++u < p;) {
                            (c = s[u]) >= f[0] && c <= f[1] && ((a = l[o.bisect(h, c, 1, v) - 1]).y += d, a.push(i[u]));
                        }
                    }
                    return l;
                }

                return i.value = function (t) {
                    return arguments.length
                        ? (n = t, i)
                        : n;
                }, i.range = function (t) {
                    return arguments.length
                        ? (e = Mn(t), i)
                        : e;
                }, i.bins = function (t) {
                    return arguments.length
                        ? (r = 'number' == typeof t
                            ? function (n) {
                                return $o(n, t);
                            }
                            : Mn(t), i)
                        : r;
                }, i.frequency = function (n) {
                    return arguments.length
                        ? (t = !!n, i)
                        : t;
                }, i;
            }, o.layout.pack = function () {
                var t,
                    n = o.layout.hierarchy().sort(Jo),
                    e = 0,
                    r = [1, 1];

                function i(i, o) {
                    var u = n.call(this, i, o),
                        a = u[0],
                        c = r[0],
                        l = r[1],
                        s = null == t
                            ? Math.sqrt
                            : 'function' == typeof t
                                ? t
                                : function () {
                                    return t;
                                };
                    if (a.x = a.y = 0, Lo(a, (function (t) {
                        t.r = +s(t.value);
                    })), Lo(a, nu), e) {
                        var f = e * (t
                            ? 1
                            : Math.max(2 * a.r / c, 2 * a.r / l)) / 2;
                        Lo(a, (function (t) {
                            t.r += f;
                        })), Lo(a, nu), Lo(a, (function (t) {
                            t.r -= f;
                        }));
                    }
                    return function t(n, e, r, i) {
                        var o = n.children;
                        n.x = e += i * n.x;
                        n.y = r += i * n.y;
                        n.r *= i;
                        if (o) {
                            for (var u = -1, a = o.length; ++u < a;) {
                                t(o[u], e, r, i);
                            }
                        }
                    }(a, c / 2, l / 2, t
                        ? 1
                        : 1 / Math.max(2 * a.r / c, 2 * a.r / l)), u;
                }

                return i.size = function (t) {
                    return arguments.length
                        ? (r = t, i)
                        : r;
                }, i.radius = function (n) {
                    return arguments.length
                        ? (t = null == n || 'function' == typeof n
                            ? n
                            : +n, i)
                        : t;
                }, i.padding = function (t) {
                    return arguments.length
                        ? (e = +t, i)
                        : e;
                }, Oo(i, n);
            }, o.layout.tree = function () {
                var t = o.layout.hierarchy().sort(null).value(null),
                    n = ou,
                    e = [1, 1],
                    r = null;

                function i(i, o) {
                    var l = t.call(this, i, o),
                        s = l[0],
                        f = function (t) {
                            var n,
                                e = {
                                    A: null,
                                    children: [t]
                                },
                                r = [e];
                            for (; null != (n = r.pop());) {
                                for (var i, o = n.children, u = 0, a = o.length; u < a; ++u) {
                                    r.push((o[u] = i = {
                                        _: o[u],
                                        parent: n,
                                        children: (i = o[u].children) && i.slice() || [],
                                        A: null,
                                        a: null,
                                        z: 0,
                                        m: 0,
                                        c: 0,
                                        s: 0,
                                        t: null,
                                        i: u
                                    }).a = i);
                                }
                            }
                            return e.children[0];
                        }(s);
                    if (Lo(f, u), f.parent.m = -f.z, Fo(f, a), r) {
                        Fo(s, c);
                    } else {
                        var h = s,
                            p = s,
                            v = s;
                        Fo(s, (function (t) {
                            t.x < h.x && (h = t), t.x > p.x && (p = t), t.depth > v.depth && (v = t);
                        }));
                        var d = n(h, p) / 2 - h.x,
                            g = e[0] / (p.x + n(p, h) / 2 + d),
                            y = e[1] / (v.depth || 1);
                        Fo(s, (function (t) {
                            t.x = (t.x + d) * g, t.y = t.depth * y;
                        }));
                    }
                    return l;
                }

                function u(t) {
                    var e = t.children,
                        r = t.parent.children,
                        i = t.i
                            ? r[t.i - 1]
                            : null;
                    if (e.length) {
                        !function (t) {
                            var n,
                                e = 0,
                                r = 0,
                                i = t.children,
                                o = i.length;
                            for (; --o >= 0;) {
                                (n = i[o]).z += e, n.m += e, e += n.s + (r += n.c);
                            }
                        }(t);
                        var o = (e[0].z + e[e.length - 1].z) / 2;
                        i
                            ? (t.z = i.z + n(t._, i._), t.m = t.z - o)
                            : t.z = o;
                    } else {
                        i && (t.z = i.z + n(t._, i._));
                    }
                    t.parent.A = function (t, e, r) {
                        if (e) {
                            for (var i, o = t, u = t, a = e, c = o.parent.children[0], l = o.m, s = u.m, f = a.m, h = c.m; a = au(a), o = uu(o), a && o;) {
                                c = uu(c), (u = au(u)).a = t, (i = a.z + f - o.z - l + n(a._, o._)) > 0 && (cu(lu(a, t, r), t, i), l += i, s += i), f += a.m, l += o.m, h += c.m, s += u.m;
                            }
                            a && !au(u) && (u.t = a, u.m += f - s), o && !uu(c) && (c.t = o, c.m += l - h, r = t);
                        }
                        return r;
                    }(t, i, t.parent.A || r[0]);
                }

                function a(t) {
                    t._.x = t.z + t.parent.m, t.m += t.parent.m;
                }

                function c(t) {
                    t.x *= e[0], t.y = t.depth * e[1];
                }

                return i.separation = function (t) {
                    return arguments.length
                        ? (n = t, i)
                        : n;
                }, i.size = function (t) {
                    return arguments.length
                        ? (r = null == (e = t)
                            ? c
                            : null, i)
                        : r
                            ? null
                            : e;
                }, i.nodeSize = function (t) {
                    return arguments.length
                        ? (r = null == (e = t)
                            ? null
                            : c, i)
                        : r
                            ? e
                            : null;
                }, Oo(i, t);
            }, o.layout.cluster = function () {
                var t = o.layout.hierarchy().sort(null).value(null),
                    n = ou,
                    e = [1, 1],
                    r = !1;

                function i(i, u) {
                    var a,
                        c = t.call(this, i, u),
                        l = c[0],
                        s = 0;
                    Lo(l, (function (t) {
                        var e = t.children;
                        e && e.length
                            ? (t.x = function (t) {
                                return t.reduce((function (t, n) {
                                    return t + n.x;
                                }), 0) / t.length;
                            }(e), t.y = function (t) {
                                return 1 + o.max(t, (function (t) {
                                    return t.y;
                                }));
                            }(e))
                            : (t.x = a
                                ? s += n(t, a)
                                : 0, t.y = 0, a = t);
                    }));
                    var f = function t(n) {
                            var e = n.children;
                            return e && e.length
                                ? t(e[0])
                                : n;
                        }(l),
                        h = function t(n) {
                            var e,
                                r = n.children;
                            return r && (e = r.length)
                                ? t(r[e - 1])
                                : n;
                        }(l),
                        p = f.x - n(f, h) / 2,
                        v = h.x + n(h, f) / 2;
                    return Lo(l, r
                        ? function (t) {
                            t.x = (t.x - l.x) * e[0], t.y = (l.y - t.y) * e[1];
                        }
                        : function (t) {
                            t.x = (t.x - p) / (v - p) * e[0], t.y = (1 - (l.y
                                ? t.y / l.y
                                : 1)) * e[1];
                        }), c;
                }

                return i.separation = function (t) {
                    return arguments.length
                        ? (n = t, i)
                        : n;
                }, i.size = function (t) {
                    return arguments.length
                        ? (r = null == (e = t), i)
                        : r
                            ? null
                            : e;
                }, i.nodeSize = function (t) {
                    return arguments.length
                        ? (r = null != (e = t), i)
                        : r
                            ? e
                            : null;
                }, Oo(i, t);
            }, o.layout.treemap = function () {
                var t,
                    n = o.layout.hierarchy(),
                    e = Math.round,
                    r = [1, 1],
                    i = null,
                    u = su,
                    a = !1,
                    c = 'squarify',
                    l = .5 * (1 + Math.sqrt(5));

                function s(t, n) {
                    for (var e, r, i = -1, o = t.length; ++i < o;) {
                        r = (e = t[i]).value * (n < 0
                            ? 0
                            : n), e.area = isNaN(r) || r <= 0
                            ? 0
                            : r;
                    }
                }

                function f(t) {
                    var n = t.children;
                    if (n && n.length) {
                        var e,
                            r,
                            i,
                            o = u(t),
                            a = [],
                            l = n.slice(),
                            h = 1 / 0,
                            d = 'slice' === c
                                ? o.dx
                                : 'dice' === c
                                    ? o.dy
                                    : 'slice-dice' === c
                                        ? 1 & t.depth
                                            ? o.dy
                                            : o.dx
                                        : Math.min(o.dx, o.dy);
                        for (s(l, o.dx * o.dy / t.value), a.area = 0; (i = l.length) > 0;) {
                            a.push(e = l[i - 1]), a.area += e.area, 'squarify' !== c || (r = p(a, d)) <= h
                                ? (l.pop(), h = r)
                                : (a.area -= a.pop().area, v(a, d, o, !1), d = Math.min(o.dx, o.dy), a.length = a.area = 0, h = 1 / 0);
                        }
                        a.length && (v(a, d, o, !0), a.length = a.area = 0), n.forEach(f);
                    }
                }

                function h(t) {
                    var n = t.children;
                    if (n && n.length) {
                        var e,
                            r = u(t),
                            i = n.slice(),
                            o = [];
                        for (s(i, r.dx * r.dy / t.value), o.area = 0; e = i.pop();) {
                            o.push(e), o.area += e.area, null != e.z && (v(o, e.z
                                ? r.dx
                                : r.dy, r, !i.length), o.length = o.area = 0);
                        }
                        n.forEach(h);
                    }
                }

                function p(t, n) {
                    for (var e, r = t.area, i = 0, o = 1 / 0, u = -1, a = t.length; ++u < a;) {
                        (e = t[u].area) && (e < o && (o = e), e > i && (i = e));
                    }
                    return n *= n, (r *= r)
                        ? Math.max(n * i * l / r, r / (n * o * l))
                        : 1 / 0;
                }

                function v(t, n, r, i) {
                    var o,
                        u = -1,
                        a = t.length,
                        c = r.x,
                        l = r.y,
                        s = n
                            ? e(t.area / n)
                            : 0;
                    if (n == r.dx) {
                        for ((i || s > r.dy) && (s = r.dy); ++u < a;) {
                            (o = t[u]).x = c, o.y = l, o.dy = s, c += o.dx = Math.min(r.x + r.dx - c, s
                                ? e(o.area / s)
                                : 0);
                        }
                        o.z = !0, o.dx += r.x + r.dx - c, r.y += s, r.dy -= s;
                    } else {
                        for ((i || s > r.dx) && (s = r.dx); ++u < a;) {
                            (o = t[u]).x = c, o.y = l, o.dx = s, l += o.dy = Math.min(r.y + r.dy - l, s
                                ? e(o.area / s)
                                : 0);
                        }
                        o.z = !1, o.dy += r.y + r.dy - l, r.x += s, r.dx -= s;
                    }
                }

                function d(e) {
                    var i = t || n(e),
                        o = i[0];
                    return o.x = o.y = 0, o.value
                        ? (o.dx = r[0], o.dy = r[1])
                        : o.dx = o.dy = 0, t && n.revalue(o), s([o], o.dx * o.dy / o.value), (t
                        ? h
                        : f)(o), a && (t = i), i;
                }

                return d.size = function (t) {
                    return arguments.length
                        ? (r = t, d)
                        : r;
                }, d.padding = function (t) {
                    if (!arguments.length) {
                        return i;
                    }

                    function n(n) {
                        return fu(n, t);
                    }

                    var e;
                    return u = null == (i = t)
                        ? su
                        : 'function' == (e = typeof t)
                            ? function (n) {
                                var e = t.call(d, n, n.depth);
                                return null == e
                                    ? su(n)
                                    : fu(n, 'number' == typeof e
                                        ? [e, e, e, e]
                                        : e);
                            }
                            : 'number' === e
                                ? (t = [t, t, t, t], n)
                                : n, d;
                }, d.round = function (t) {
                    return arguments.length
                        ? (e = t
                            ? Math.round
                            : Number, d)
                        : e != Number;
                }, d.sticky = function (n) {
                    return arguments.length
                        ? (a = n, t = null, d)
                        : a;
                }, d.ratio = function (t) {
                    return arguments.length
                        ? (l = t, d)
                        : l;
                }, d.mode = function (t) {
                    return arguments.length
                        ? (c = t + '', d)
                        : c;
                }, Oo(d, n);
            }, o.random = {
                normal: function (t, n) {
                    var e = arguments.length;
                    return e < 2 && (n = 1), e < 1 && (t = 0), function () {
                        var e,
                            r,
                            i;
                        do {
                            i = (e = 2 * Math.random() - 1) * e + (r = 2 * Math.random() - 1) * r;
                        } while (!i || i > 1);
                        return t + n * e * Math.sqrt(-2 * Math.log(i) / i);
                    };
                },
                logNormal: function () {
                    var t = o.random.normal.apply(o, arguments);
                    return function () {
                        return Math.exp(t());
                    };
                },
                bates: function (t) {
                    var n = o.random.irwinHall(t);
                    return function () {
                        return n() / t;
                    };
                },
                irwinHall: function (t) {
                    return function () {
                        for (var n = 0, e = 0; e < t; e++) {
                            n += Math.random();
                        }
                        return n;
                    };
                }
            }, o.scale = {};
            var yu = {
                floor: R,
                ceil: R
            };

            function mu(t, n, e, r) {
                var i = [],
                    u = [],
                    a = 0,
                    c = Math.min(t.length, n.length) - 1;
                for (t[c] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a <= c;) {
                    i.push(e(t[a - 1], t[a])), u.push(r(n[a - 1], n[a]));
                }
                return function (n) {
                    var e = o.bisect(t, n, 1, c) - 1;
                    return u[e](i[e](n));
                };
            }

            function xu(t, n) {
                return o.rebind(t, n, 'range', 'rangeRound', 'interpolate', 'clamp');
            }

            function bu(t, n) {
                return du(t, gu(Mu(t, n)[2])), du(t, gu(Mu(t, n)[2])), t;
            }

            function Mu(t, n) {
                null == n && (n = 10);
                var e = hu(t),
                    r = e[1] - e[0],
                    i = Math.pow(10, Math.floor(Math.log(r / n) / Math.LN10)),
                    o = n / r * i;
                return o <= .15
                    ? i *= 10
                    : o <= .35
                        ? i *= 5
                        : o <= .75 && (i *= 2), e[0] = Math.ceil(e[0] / i) * i, e[1] = Math.floor(e[1] / i) * i + .5 * i, e[2] = i, e;
            }

            function wu(t, n) {
                return o.range.apply(o, Mu(t, n));
            }

            function _u(t, n, e) {
                var r = Mu(t, n);
                if (e) {
                    var i = Rn.exec(e);
                    if (i.shift(), 's' === i[8]) {
                        var u = o.formatPrefix(Math.max(w(r[0]), w(r[1])));
                        return i[7] || (i[7] = '.' + Eu(u.scale(r[2]))), i[8] = 'f', e = o.format(i.join('')), function (t) {
                            return e(u.scale(t)) + u.symbol;
                        };
                    }
                    i[7] || (i[7] = '.' + function (t, n) {
                        var e = Eu(n[2]);
                        return t in Su
                            ? Math.abs(e - Eu(Math.max(w(n[0]), w(n[1])))) + +('e' !== t)
                            : e - 2 * ('%' === t);
                    }(i[8], r)), e = i.join('');
                } else {
                    e = ',.' + Eu(r[2]) + 'f';
                }
                return o.format(e);
            }

            o.scale.linear = function () {
                return function t(n, e, r, i) {
                    var o,
                        u;

                    function a() {
                        var t = Math.min(n.length, e.length) > 2
                                ? mu
                                : vu,
                            a = i
                                ? bo
                                : xo;
                        return o = t(n, e, a, r), u = t(e, n, a, Ji), c;
                    }

                    function c(t) {
                        return o(t);
                    }

                    c.invert = function (t) {
                        return u(t);
                    };
                    c.domain = function (t) {
                        return arguments.length
                            ? (n = t.map(Number), a())
                            : n;
                    };
                    c.range = function (t) {
                        return arguments.length
                            ? (e = t, a())
                            : e;
                    };
                    c.rangeRound = function (t) {
                        return c.range(t).interpolate(fo);
                    };
                    c.clamp = function (t) {
                        return arguments.length
                            ? (i = t, a())
                            : i;
                    };
                    c.interpolate = function (t) {
                        return arguments.length
                            ? (r = t, a())
                            : r;
                    };
                    c.ticks = function (t) {
                        return wu(n, t);
                    };
                    c.tickFormat = function (t, e) {
                        return _u(n, t, e);
                    };
                    c.nice = function (t) {
                        return bu(n, t), a();
                    };
                    c.copy = function () {
                        return t(n, e, r, i);
                    };
                    return a();
                }([0, 1], [0, 1], Ji, !1);
            };
            var Su = {
                s: 1,
                g: 1,
                p: 1,
                r: 1,
                e: 1
            };

            function Eu(t) {
                return -Math.floor(Math.log(t) / Math.LN10 + .01);
            }

            o.scale.log = function () {
                return function t(n, e, r, i) {
                    function u(t) {
                        return (r
                            ? Math.log(t < 0
                                ? 0
                                : t)
                            : -Math.log(t > 0
                                ? 0
                                : -t)) / Math.log(e);
                    }

                    function a(t) {
                        return r
                            ? Math.pow(e, t)
                            : -Math.pow(e, -t);
                    }

                    function c(t) {
                        return n(u(t));
                    }

                    c.invert = function (t) {
                        return a(n.invert(t));
                    };
                    c.domain = function (t) {
                        return arguments.length
                            ? (r = t[0] >= 0, n.domain((i = t.map(Number)).map(u)), c)
                            : i;
                    };
                    c.base = function (t) {
                        return arguments.length
                            ? (e = +t, n.domain(i.map(u)), c)
                            : e;
                    };
                    c.nice = function () {
                        var t = du(i.map(u), r
                            ? Math
                            : Au);
                        return n.domain(t), i = t.map(a), c;
                    };
                    c.ticks = function () {
                        var t = hu(i),
                            n = [],
                            o = t[0],
                            c = t[1],
                            l = Math.floor(u(o)),
                            s = Math.ceil(u(c)),
                            f = e % 1
                                ? 2
                                : e;
                        if (isFinite(s - l)) {
                            if (r) {
                                for (; l < s; l++) {
                                    for (var h = 1; h < f; h++) {
                                        n.push(a(l) * h);
                                    }
                                }
                                n.push(a(l));
                            } else {
                                for (n.push(a(l)); l++ < s;) {
                                    for (var h = f - 1; h > 0; h--) {
                                        n.push(a(l) * h);
                                    }
                                }
                            }
                            for (l = 0; n[l] < o; l++) {
                                ;
                            }
                            for (s = n.length; n[s - 1] > c; s--) {
                                ;
                            }
                            n = n.slice(l, s);
                        }
                        return n;
                    };
                    c.tickFormat = function (t, n) {
                        if (!arguments.length) {
                            return Nu;
                        }
                        arguments.length < 2
                            ? n = Nu
                            : 'function' != typeof n && (n = o.format(n));
                        var r = Math.max(1, e * t / c.ticks().length);
                        return function (t) {
                            var i = t / a(Math.round(u(t)));
                            return i * e < e - .5 && (i *= e), i <= r
                                ? n(t)
                                : '';
                        };
                    };
                    c.copy = function () {
                        return t(n.copy(), e, r, i);
                    };
                    return xu(c, n);
                }(o.scale.linear().domain([0, 1]), 10, !0, [1, 10]);
            };
            var Nu = o.format('.0e'),
                Au = {
                    floor: function (t) {
                        return -Math.ceil(-t);
                    },
                    ceil: function (t) {
                        return -Math.floor(-t);
                    }
                };

            function ku(t) {
                return function (n) {
                    return n < 0
                        ? -Math.pow(-n, t)
                        : Math.pow(n, t);
                };
            }

            o.scale.pow = function () {
                return function t(n, e, r) {
                    var i = ku(e),
                        o = ku(1 / e);

                    function u(t) {
                        return n(i(t));
                    }

                    u.invert = function (t) {
                        return o(n.invert(t));
                    };
                    u.domain = function (t) {
                        return arguments.length
                            ? (n.domain((r = t.map(Number)).map(i)), u)
                            : r;
                    };
                    u.ticks = function (t) {
                        return wu(r, t);
                    };
                    u.tickFormat = function (t, n) {
                        return _u(r, t, n);
                    };
                    u.nice = function (t) {
                        return u.domain(bu(r, t));
                    };
                    u.exponent = function (t) {
                        return arguments.length
                            ? (i = ku(e = t), o = ku(1 / e), n.domain(r.map(i)), u)
                            : e;
                    };
                    u.copy = function () {
                        return t(n.copy(), e, r);
                    };
                    return xu(u, n);
                }(o.scale.linear(), 1, [0, 1]);
            }, o.scale.sqrt = function () {
                return o.scale.pow().exponent(.5);
            }, o.scale.ordinal = function () {
                return function t(n, e) {
                    var r,
                        i,
                        u;

                    function a(t) {
                        return i[((r.get(t) || ('range' === e.t
                            ? r.set(t, n.push(t))
                            : NaN)) - 1) % i.length];
                    }

                    function c(t, e) {
                        return o.range(n.length).map((function (n) {
                            return t + e * n;
                        }));
                    }

                    a.domain = function (t) {
                        if (!arguments.length) {
                            return n;
                        }
                        n = [], r = new S;
                        for (var i, o = -1, u = t.length; ++o < u;) {
                            r.has(i = t[o]) || r.set(i, n.push(i));
                        }
                        return a[e.t].apply(a, e.a);
                    };
                    a.range = function (t) {
                        return arguments.length
                            ? (i = t, u = 0, e = {
                                t: 'range',
                                a: arguments
                            }, a)
                            : i;
                    };
                    a.rangePoints = function (t, r) {
                        arguments.length < 2 && (r = 0);
                        var o = t[0],
                            l = t[1],
                            s = n.length < 2
                                ? (o = (o + l) / 2, 0)
                                : (l - o) / (n.length - 1 + r);
                        return i = c(o + s * r / 2, s), u = 0, e = {
                            t: 'rangePoints',
                            a: arguments
                        }, a;
                    };
                    a.rangeRoundPoints = function (t, r) {
                        arguments.length < 2 && (r = 0);
                        var o = t[0],
                            l = t[1],
                            s = n.length < 2
                                ? (o = l = Math.round((o + l) / 2), 0)
                                : (l - o) / (n.length - 1 + r) | 0;
                        return i = c(o + Math.round(s * r / 2 + (l - o - (n.length - 1 + r) * s) / 2), s), u = 0, e = {
                            t: 'rangeRoundPoints',
                            a: arguments
                        }, a;
                    };
                    a.rangeBands = function (t, r, o) {
                        arguments.length < 2 && (r = 0), arguments.length < 3 && (o = r);
                        var l = t[1] < t[0],
                            s = t[l - 0],
                            f = t[1 - l],
                            h = (f - s) / (n.length - r + 2 * o);
                        return i = c(s + h * o, h), l && i.reverse(), u = h * (1 - r), e = {
                            t: 'rangeBands',
                            a: arguments
                        }, a;
                    };
                    a.rangeRoundBands = function (t, r, o) {
                        arguments.length < 2 && (r = 0), arguments.length < 3 && (o = r);
                        var l = t[1] < t[0],
                            s = t[l - 0],
                            f = t[1 - l],
                            h = Math.floor((f - s) / (n.length - r + 2 * o));
                        return i = c(s + Math.round((f - s - (n.length - r) * h) / 2), h), l && i.reverse(), u = Math.round(h * (1 - r)), e = {
                            t: 'rangeRoundBands',
                            a: arguments
                        }, a;
                    };
                    a.rangeBand = function () {
                        return u;
                    };
                    a.rangeExtent = function () {
                        return hu(e.a[0]);
                    };
                    a.copy = function () {
                        return t(n, e);
                    };
                    return a.domain(n);
                }([], {
                    t: 'range',
                    a: [[]]
                });
            }, o.scale.category10 = function () {
                return o.scale.ordinal().range(Cu);
            }, o.scale.category20 = function () {
                return o.scale.ordinal().range(Ou);
            }, o.scale.category20b = function () {
                return o.scale.ordinal().range(Fu);
            }, o.scale.category20c = function () {
                return o.scale.ordinal().range(Lu);
            };
            var Cu = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(hn),
                Ou = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(hn),
                Fu = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(hn),
                Lu = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(hn);

            function Tu() {
                return 0;
            }

            o.scale.quantile = function () {
                return function t(n, e) {
                    var r;

                    function i() {
                        var t = 0,
                            i = e.length;
                        for (r = []; ++t < i;) {
                            r[t - 1] = o.quantile(n, t / i);
                        }
                        return u;
                    }

                    function u(t) {
                        if (!isNaN(t = +t)) {
                            return e[o.bisect(r, t)];
                        }
                    }

                    u.domain = function (t) {
                        return arguments.length
                            ? (n = t.map(y).filter(m).sort(g), i())
                            : n;
                    };
                    u.range = function (t) {
                        return arguments.length
                            ? (e = t, i())
                            : e;
                    };
                    u.quantiles = function () {
                        return r;
                    };
                    u.invertExtent = function (t) {
                        return (t = e.indexOf(t)) < 0
                            ? [NaN, NaN]
                            : [t > 0
                                ? r[t - 1]
                                : n[0], t < r.length
                                ? r[t]
                                : n[n.length - 1]];
                    };
                    u.copy = function () {
                        return t(n, e);
                    };
                    return i();
                }([], []);
            }, o.scale.quantize = function () {
                return function t(n, e, r) {
                    var i,
                        o;

                    function u(t) {
                        return r[Math.max(0, Math.min(o, Math.floor(i * (t - n))))];
                    }

                    function a() {
                        return i = r.length / (e - n), o = r.length - 1, u;
                    }

                    u.domain = function (t) {
                        return arguments.length
                            ? (n = +t[0], e = +t[t.length - 1], a())
                            : [n, e];
                    };
                    u.range = function (t) {
                        return arguments.length
                            ? (r = t, a())
                            : r;
                    };
                    u.invertExtent = function (t) {
                        return [t = (t = r.indexOf(t)) < 0
                            ? NaN
                            : t / i + n, t + 1 / i];
                    };
                    u.copy = function () {
                        return t(n, e, r);
                    };
                    return a();
                }(0, 1, [0, 1]);
            }, o.scale.threshold = function () {
                return function t(n, e) {
                    function r(t) {
                        if (t <= t) {
                            return e[o.bisect(n, t)];
                        }
                    }

                    r.domain = function (t) {
                        return arguments.length
                            ? (n = t, r)
                            : n;
                    };
                    r.range = function (t) {
                        return arguments.length
                            ? (e = t, r)
                            : e;
                    };
                    r.invertExtent = function (t) {
                        return t = e.indexOf(t), [n[t - 1], n[t]];
                    };
                    r.copy = function () {
                        return t(n, e);
                    };
                    return r;
                }([.5], [0, 1]);
            }, o.scale.identity = function () {
                return function t(n) {
                    function e(t) {
                        return +t;
                    }

                    e.invert = e;
                    e.domain = e.range = function (t) {
                        return arguments.length
                            ? (n = t.map(e), e)
                            : n;
                    };
                    e.ticks = function (t) {
                        return wu(n, t);
                    };
                    e.tickFormat = function (t, e) {
                        return _u(n, t, e);
                    };
                    e.copy = function () {
                        return t(n);
                    };
                    return e;
                }([0, 1]);
            }, o.svg = {}, o.svg.arc = function () {
                var t = Ru,
                    n = ju,
                    e = Tu,
                    r = Pu,
                    i = Du,
                    o = qu,
                    u = Iu;

                function a() {
                    var a = Math.max(0, +t.apply(this, arguments)),
                        l = Math.max(0, +n.apply(this, arguments)),
                        s = i.apply(this, arguments) - Lt,
                        f = o.apply(this, arguments) - Lt,
                        h = Math.abs(f - s),
                        p = s > f
                            ? 0
                            : 1;
                    if (l < a && (v = l, l = a, a = v), h >= Ft) {
                        return c(l, p) + (a
                            ? c(a, 1 - p)
                            : '') + 'Z';
                    }
                    var v,
                        d,
                        g,
                        y,
                        m,
                        x,
                        b,
                        M,
                        w,
                        _,
                        S,
                        E,
                        N = 0,
                        A = 0,
                        k = [];
                    if ((y = (+u.apply(this, arguments) || 0) / 2) && (g = r === Pu
                        ? Math.sqrt(a * a + l * l)
                        : +r.apply(this, arguments), p || (A *= -1), l && (A = qt(g / l * Math.sin(y))), a && (N = qt(g / a * Math.sin(y)))), l) {
                        m = l * Math.cos(s + A), x = l * Math.sin(s + A), b = l * Math.cos(f - A), M = l * Math.sin(f - A);
                        var C = Math.abs(f - s - 2 * A) <= Ct
                            ? 0
                            : 1;
                        if (A && zu(m, x, b, M) === p ^ C) {
                            var O = (s + f) / 2;
                            m = l * Math.cos(O), x = l * Math.sin(O), b = M = null;
                        }
                    } else {
                        m = x = 0;
                    }
                    if (a) {
                        w = a * Math.cos(f - N), _ = a * Math.sin(f - N), S = a * Math.cos(s + N), E = a * Math.sin(s + N);
                        var F = Math.abs(s - f + 2 * N) <= Ct
                            ? 0
                            : 1;
                        if (N && zu(w, _, S, E) === 1 - p ^ F) {
                            var L = (s + f) / 2;
                            w = a * Math.cos(L), _ = a * Math.sin(L), S = E = null;
                        }
                    } else {
                        w = _ = 0;
                    }
                    if (h > At && (v = Math.min(Math.abs(l - a) / 2, +e.apply(this, arguments))) > .001) {
                        d = a < l ^ p
                            ? 0
                            : 1;
                        var T = v,
                            P = v;
                        if (h < Ct) {
                            var R = null == S
                                    ? [w, _]
                                    : null == b
                                        ? [m, x]
                                        : li([m, x], [S, E], [b, M], [w, _]),
                                j = m - R[0],
                                D = x - R[1],
                                q = b - R[0],
                                I = M - R[1],
                                z = 1 / Math.sin(Math.acos((j * q + D * I) / (Math.sqrt(j * j + D * D) * Math.sqrt(q * q + I * I))) / 2),
                                U = Math.sqrt(R[0] * R[0] + R[1] * R[1]);
                            P = Math.min(v, (a - U) / (z - 1)), T = Math.min(v, (l - U) / (z + 1));
                        }
                        if (null != b) {
                            var B = Uu(null == S
                                    ? [w, _]
                                    : [S, E], [m, x], l, T, p),
                                V = Uu([b, M], [w, _], l, T, p);
                            v === T
                                ? k.push('M', B[0], 'A', T, ',', T, ' 0 0,', d, ' ', B[1], 'A', l, ',', l, ' 0 ', 1 - p ^ zu(B[1][0], B[1][1], V[1][0], V[1][1]), ',', p, ' ', V[1], 'A', T, ',', T, ' 0 0,', d, ' ', V[0])
                                : k.push('M', B[0], 'A', T, ',', T, ' 0 1,', d, ' ', V[0]);
                        } else {
                            k.push('M', m, ',', x);
                        }
                        if (null != S) {
                            var W = Uu([m, x], [S, E], a, -P, p),
                                H = Uu([w, _], null == b
                                    ? [m, x]
                                    : [b, M], a, -P, p);
                            v === P
                                ? k.push('L', H[0], 'A', P, ',', P, ' 0 0,', d, ' ', H[1], 'A', a, ',', a, ' 0 ', p ^ zu(H[1][0], H[1][1], W[1][0], W[1][1]), ',', 1 - p, ' ', W[1], 'A', P, ',', P, ' 0 0,', d, ' ', W[0])
                                : k.push('L', H[0], 'A', P, ',', P, ' 0 0,', d, ' ', W[0]);
                        } else {
                            k.push('L', w, ',', _);
                        }
                    } else {
                        k.push('M', m, ',', x), null != b && k.push('A', l, ',', l, ' 0 ', C, ',', p, ' ', b, ',', M), k.push('L', w, ',', _), null != S && k.push('A', a, ',', a, ' 0 ', F, ',', 1 - p, ' ', S, ',', E);
                    }
                    return k.push('Z'), k.join('');
                }

                function c(t, n) {
                    return 'M0,' + t + 'A' + t + ',' + t + ' 0 1,' + n + ' 0,' + -t + 'A' + t + ',' + t + ' 0 1,' + n + ' 0,' + t;
                }

                return a.innerRadius = function (n) {
                    return arguments.length
                        ? (t = Mn(n), a)
                        : t;
                }, a.outerRadius = function (t) {
                    return arguments.length
                        ? (n = Mn(t), a)
                        : n;
                }, a.cornerRadius = function (t) {
                    return arguments.length
                        ? (e = Mn(t), a)
                        : e;
                }, a.padRadius = function (t) {
                    return arguments.length
                        ? (r = t == Pu
                            ? Pu
                            : Mn(t), a)
                        : r;
                }, a.startAngle = function (t) {
                    return arguments.length
                        ? (i = Mn(t), a)
                        : i;
                }, a.endAngle = function (t) {
                    return arguments.length
                        ? (o = Mn(t), a)
                        : o;
                }, a.padAngle = function (t) {
                    return arguments.length
                        ? (u = Mn(t), a)
                        : u;
                }, a.centroid = function () {
                    var e = (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                        r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Lt;
                    return [Math.cos(r) * e, Math.sin(r) * e];
                }, a;
            };
            var Pu = 'auto';

            function Ru(t) {
                return t.innerRadius;
            }

            function ju(t) {
                return t.outerRadius;
            }

            function Du(t) {
                return t.startAngle;
            }

            function qu(t) {
                return t.endAngle;
            }

            function Iu(t) {
                return t && t.padAngle;
            }

            function zu(t, n, e, r) {
                return (t - e) * n - (n - r) * t > 0
                    ? 0
                    : 1;
            }

            function Uu(t, n, e, r, i) {
                var o = t[0] - n[0],
                    u = t[1] - n[1],
                    a = (i
                        ? r
                        : -r) / Math.sqrt(o * o + u * u),
                    c = a * u,
                    l = -a * o,
                    s = t[0] + c,
                    f = t[1] + l,
                    h = n[0] + c,
                    p = n[1] + l,
                    v = (s + h) / 2,
                    d = (f + p) / 2,
                    g = h - s,
                    y = p - f,
                    m = g * g + y * y,
                    x = e - r,
                    b = s * p - h * f,
                    M = (y < 0
                        ? -1
                        : 1) * Math.sqrt(Math.max(0, x * x * m - b * b)),
                    w = (b * y - g * M) / m,
                    _ = (-b * g - y * M) / m,
                    S = (b * y + g * M) / m,
                    E = (-b * g + y * M) / m,
                    N = w - v,
                    A = _ - d,
                    k = S - v,
                    C = E - d;
                return N * N + A * A > k * k + C * C && (w = S, _ = E), [[w - c, _ - l], [w * e / x, _ * e / x]];
            }

            function Bu(t) {
                var n = ri,
                    e = ii,
                    r = Je,
                    i = Wu,
                    o = i.key,
                    u = .7;

                function a(o) {
                    var a,
                        c = [],
                        l = [],
                        s = -1,
                        f = o.length,
                        h = Mn(n),
                        p = Mn(e);

                    function v() {
                        c.push('M', i(t(l), u));
                    }

                    for (; ++s < f;) {
                        r.call(this, a = o[s], s)
                            ? l.push([+h.call(this, a, s), +p.call(this, a, s)])
                            : l.length && (v(), l = []);
                    }
                    return l.length && v(), c.length
                        ? c.join('')
                        : null;
                }

                return a.x = function (t) {
                    return arguments.length
                        ? (n = t, a)
                        : n;
                }, a.y = function (t) {
                    return arguments.length
                        ? (e = t, a)
                        : e;
                }, a.defined = function (t) {
                    return arguments.length
                        ? (r = t, a)
                        : r;
                }, a.interpolate = function (t) {
                    return arguments.length
                        ? (o = 'function' == typeof t
                            ? i = t
                            : (i = Vu.get(t) || Wu).key, a)
                        : o;
                }, a.tension = function (t) {
                    return arguments.length
                        ? (u = t, a)
                        : u;
                }, a;
            }

            o.svg.line = function () {
                return Bu(R);
            };
            var Vu = o.map({
                linear: Wu,
                'linear-closed': Hu,
                step: function (t) {
                    var n = 0,
                        e = t.length,
                        r = t[0],
                        i = [r[0], ',', r[1]];
                    for (; ++n < e;) {
                        i.push('H', (r[0] + (r = t[n])[0]) / 2, 'V', r[1]);
                    }
                    e > 1 && i.push('H', r[0]);
                    return i.join('');
                },
                'step-before': Yu,
                'step-after': Gu,
                basis: Xu,
                'basis-open': function (t) {
                    if (t.length < 4) {
                        return Wu(t);
                    }
                    var n,
                        e = [],
                        r = -1,
                        i = t.length,
                        o = [0],
                        u = [0];
                    for (; ++r < 3;) {
                        n = t[r], o.push(n[0]), u.push(n[1]);
                    }
                    e.push(Ju(ta, o) + ',' + Ju(ta, u)), --r;
                    for (; ++r < i;) {
                        n = t[r], o.shift(), o.push(n[0]), u.shift(), u.push(n[1]), na(e, o, u);
                    }
                    return e.join('');
                },
                'basis-closed': function (t) {
                    var n,
                        e,
                        r = -1,
                        i = t.length,
                        o = i + 4,
                        u = [],
                        a = [];
                    for (; ++r < 4;) {
                        e = t[r % i], u.push(e[0]), a.push(e[1]);
                    }
                    n = [Ju(ta, u), ',', Ju(ta, a)], --r;
                    for (; ++r < o;) {
                        e = t[r % i], u.shift(), u.push(e[0]), a.shift(), a.push(e[1]), na(n, u, a);
                    }
                    return n.join('');
                },
                bundle: function (t, n) {
                    var e = t.length - 1;
                    if (e) {
                        for (var r, i, o = t[0][0], u = t[0][1], a = t[e][0] - o, c = t[e][1] - u, l = -1; ++l <= e;) {
                            r = t[l], i = l / e, r[0] = n * r[0] + (1 - n) * (o + i * a), r[1] = n * r[1] + (1 - n) * (u + i * c);
                        }
                    }
                    return Xu(t);
                },
                cardinal: function (t, n) {
                    return t.length < 3
                        ? Wu(t)
                        : t[0] + Zu(t, $u(t, n));
                },
                'cardinal-open': function (t, n) {
                    return t.length < 4
                        ? Wu(t)
                        : t[1] + Zu(t.slice(1, -1), $u(t, n));
                },
                'cardinal-closed': function (t, n) {
                    return t.length < 3
                        ? Hu(t)
                        : t[0] + Zu((t.push(t[0]), t), $u([t[t.length - 2]].concat(t, [t[1]]), n));
                },
                monotone: function (t) {
                    return t.length < 3
                        ? Wu(t)
                        : t[0] + Zu(t, function (t) {
                        var n,
                            e,
                            r,
                            i,
                            o = [],
                            u = function (t) {
                                var n = 0,
                                    e = t.length - 1,
                                    r = [],
                                    i = t[0],
                                    o = t[1],
                                    u = r[0] = ea(i, o);
                                for (; ++n < e;) {
                                    r[n] = (u + (u = ea(i = o, o = t[n + 1]))) / 2;
                                }
                                return r[n] = u, r;
                            }(t),
                            a = -1,
                            c = t.length - 1;
                        for (; ++a < c;) {
                            n = ea(t[a], t[a + 1]), w(n) < At
                                ? u[a] = u[a + 1] = 0
                                : (e = u[a] / n, r = u[a + 1] / n, (i = e * e + r * r) > 9 && (i = 3 * n / Math.sqrt(i), u[a] = i * e, u[a + 1] = i * r));
                        }
                        a = -1;
                        for (; ++a <= c;) {
                            i = (t[Math.min(c, a + 1)][0] - t[Math.max(0, a - 1)][0]) / (6 * (1 + u[a] * u[a])), o.push([i || 0, u[a] * i || 0]);
                        }
                        return o;
                    }(t));
                }
            });

            function Wu(t) {
                return t.length > 1
                    ? t.join('L')
                    : t + 'Z';
            }

            function Hu(t) {
                return t.join('L') + 'Z';
            }

            function Yu(t) {
                for (var n = 0, e = t.length, r = t[0], i = [r[0], ',', r[1]]; ++n < e;) {
                    i.push('V', (r = t[n])[1], 'H', r[0]);
                }
                return i.join('');
            }

            function Gu(t) {
                for (var n = 0, e = t.length, r = t[0], i = [r[0], ',', r[1]]; ++n < e;) {
                    i.push('H', (r = t[n])[0], 'V', r[1]);
                }
                return i.join('');
            }

            function Zu(t, n) {
                if (n.length < 1 || t.length != n.length && t.length != n.length + 2) {
                    return Wu(t);
                }
                var e = t.length != n.length,
                    r = '',
                    i = t[0],
                    o = t[1],
                    u = n[0],
                    a = u,
                    c = 1;
                if (e && (r += 'Q' + (o[0] - 2 * u[0] / 3) + ',' + (o[1] - 2 * u[1] / 3) + ',' + o[0] + ',' + o[1], i = t[1], c = 2), n.length > 1) {
                    a = n[1], o = t[c], c++, r += 'C' + (i[0] + u[0]) + ',' + (i[1] + u[1]) + ',' + (o[0] - a[0]) + ',' + (o[1] - a[1]) + ',' + o[0] + ',' + o[1];
                    for (var l = 2; l < n.length; l++, c++) {
                        o = t[c], a = n[l], r += 'S' + (o[0] - a[0]) + ',' + (o[1] - a[1]) + ',' + o[0] + ',' + o[1];
                    }
                }
                if (e) {
                    var s = t[c];
                    r += 'Q' + (o[0] + 2 * a[0] / 3) + ',' + (o[1] + 2 * a[1] / 3) + ',' + s[0] + ',' + s[1];
                }
                return r;
            }

            function $u(t, n) {
                for (var e, r = [], i = (1 - n) / 2, o = t[0], u = t[1], a = 1, c = t.length; ++a < c;) {
                    e = o, o = u, u = t[a], r.push([i * (u[0] - e[0]), i * (u[1] - e[1])]);
                }
                return r;
            }

            function Xu(t) {
                if (t.length < 3) {
                    return Wu(t);
                }
                var n = 1,
                    e = t.length,
                    r = t[0],
                    i = r[0],
                    o = r[1],
                    u = [i, i, i, (r = t[1])[0]],
                    a = [o, o, o, r[1]],
                    c = [i, ',', o, 'L', Ju(ta, u), ',', Ju(ta, a)];
                for (t.push(t[e - 1]); ++n <= e;) {
                    r = t[n], u.shift(), u.push(r[0]), a.shift(), a.push(r[1]), na(c, u, a);
                }
                return t.pop(), c.push('L', r), c.join('');
            }

            function Ju(t, n) {
                return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3];
            }

            Vu.forEach((function (t, n) {
                n.key = t, n.closed = /-closed$/.test(t);
            }));
            var Ku = [0, 2 / 3, 1 / 3, 0],
                Qu = [0, 1 / 3, 2 / 3, 0],
                ta = [0, 1 / 6, 2 / 3, 1 / 6];

            function na(t, n, e) {
                t.push('C', Ju(Ku, n), ',', Ju(Ku, e), ',', Ju(Qu, n), ',', Ju(Qu, e), ',', Ju(ta, n), ',', Ju(ta, e));
            }

            function ea(t, n) {
                return (n[1] - t[1]) / (n[0] - t[0]);
            }

            function ra(t) {
                for (var n, e, r, i = -1, o = t.length; ++i < o;) {
                    e = (n = t[i])[0], r = n[1] - Lt, n[0] = e * Math.cos(r), n[1] = e * Math.sin(r);
                }
                return t;
            }

            function ia(t) {
                var n = ri,
                    e = ri,
                    r = 0,
                    i = ii,
                    o = Je,
                    u = Wu,
                    a = u.key,
                    c = u,
                    l = 'L',
                    s = .7;

                function f(a) {
                    var f,
                        h,
                        p,
                        v = [],
                        d = [],
                        g = [],
                        y = -1,
                        m = a.length,
                        x = Mn(n),
                        b = Mn(r),
                        M = n === e
                            ? function () {
                                return h;
                            }
                            : Mn(e),
                        w = r === i
                            ? function () {
                                return p;
                            }
                            : Mn(i);

                    function _() {
                        v.push('M', u(t(g), s), l, c(t(d.reverse()), s), 'Z');
                    }

                    for (; ++y < m;) {
                        o.call(this, f = a[y], y)
                            ? (d.push([h = +x.call(this, f, y), p = +b.call(this, f, y)]), g.push([+M.call(this, f, y), +w.call(this, f, y)]))
                            : d.length && (_(), d = [], g = []);
                    }
                    return d.length && _(), v.length
                        ? v.join('')
                        : null;
                }

                return f.x = function (t) {
                    return arguments.length
                        ? (n = e = t, f)
                        : e;
                }, f.x0 = function (t) {
                    return arguments.length
                        ? (n = t, f)
                        : n;
                }, f.x1 = function (t) {
                    return arguments.length
                        ? (e = t, f)
                        : e;
                }, f.y = function (t) {
                    return arguments.length
                        ? (r = i = t, f)
                        : i;
                }, f.y0 = function (t) {
                    return arguments.length
                        ? (r = t, f)
                        : r;
                }, f.y1 = function (t) {
                    return arguments.length
                        ? (i = t, f)
                        : i;
                }, f.defined = function (t) {
                    return arguments.length
                        ? (o = t, f)
                        : o;
                }, f.interpolate = function (t) {
                    return arguments.length
                        ? (a = 'function' == typeof t
                            ? u = t
                            : (u = Vu.get(t) || Wu).key, c = u.reverse || u, l = u.closed
                            ? 'M'
                            : 'L', f)
                        : a;
                }, f.tension = function (t) {
                    return arguments.length
                        ? (s = t, f)
                        : s;
                }, f;
            }

            function oa(t) {
                return t.radius;
            }

            function ua(t) {
                return [t.x, t.y];
            }

            function aa() {
                return 64;
            }

            function ca() {
                return 'circle';
            }

            function la(t) {
                var n = Math.sqrt(t / Ct);
                return 'M0,' + n + 'A' + n + ',' + n + ' 0 1,1 0,' + -n + 'A' + n + ',' + n + ' 0 1,1 0,' + n + 'Z';
            }

            o.svg.line.radial = function () {
                var t = Bu(ra);
                return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t;
            }, Yu.reverse = Gu, Gu.reverse = Yu, o.svg.area = function () {
                return ia(R);
            }, o.svg.area.radial = function () {
                var t = ia(ra);
                return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t;
            }, o.svg.chord = function () {
                var t = Vr,
                    n = Wr,
                    e = oa,
                    r = Du,
                    i = qu;

                function o(e, r) {
                    var i = u(this, t, e, r),
                        o = u(this, n, e, r);
                    return 'M' + i.p0 + a(i.r, i.p1, i.a1 - i.a0) + (function (t, n) {
                        return t.a0 == n.a0 && t.a1 == n.a1;
                    }(i, o)
                        ? c(i.r, i.p1, i.r, i.p0)
                        : c(i.r, i.p1, o.r, o.p0) + a(o.r, o.p1, o.a1 - o.a0) + c(o.r, o.p1, i.r, i.p0)) + 'Z';
                }

                function u(t, n, o, u) {
                    var a = n.call(t, o, u),
                        c = e.call(t, a, u),
                        l = r.call(t, a, u) - Lt,
                        s = i.call(t, a, u) - Lt;
                    return {
                        r: c,
                        a0: l,
                        a1: s,
                        p0: [c * Math.cos(l), c * Math.sin(l)],
                        p1: [c * Math.cos(s), c * Math.sin(s)]
                    };
                }

                function a(t, n, e) {
                    return 'A' + t + ',' + t + ' 0 ' + +(e > Ct) + ',1 ' + n;
                }

                function c(t, n, e, r) {
                    return 'Q 0,0 ' + r;
                }

                return o.radius = function (t) {
                    return arguments.length
                        ? (e = Mn(t), o)
                        : e;
                }, o.source = function (n) {
                    return arguments.length
                        ? (t = Mn(n), o)
                        : t;
                }, o.target = function (t) {
                    return arguments.length
                        ? (n = Mn(t), o)
                        : n;
                }, o.startAngle = function (t) {
                    return arguments.length
                        ? (r = Mn(t), o)
                        : r;
                }, o.endAngle = function (t) {
                    return arguments.length
                        ? (i = Mn(t), o)
                        : i;
                }, o;
            }, o.svg.diagonal = function () {
                var t = Vr,
                    n = Wr,
                    e = ua;

                function r(r, i) {
                    var o = t.call(this, r, i),
                        u = n.call(this, r, i),
                        a = (o.y + u.y) / 2,
                        c = [o, {
                            x: o.x,
                            y: a
                        }, {
                            x: u.x,
                            y: a
                        }, u];
                    return 'M' + (c = c.map(e))[0] + 'C' + c[1] + ' ' + c[2] + ' ' + c[3];
                }

                return r.source = function (n) {
                    return arguments.length
                        ? (t = Mn(n), r)
                        : t;
                }, r.target = function (t) {
                    return arguments.length
                        ? (n = Mn(t), r)
                        : n;
                }, r.projection = function (t) {
                    return arguments.length
                        ? (e = t, r)
                        : e;
                }, r;
            }, o.svg.diagonal.radial = function () {
                var t = o.svg.diagonal(),
                    n = ua,
                    e = t.projection;
                return t.projection = function (t) {
                    return arguments.length
                        ? e(function (t) {
                            return function () {
                                var n = t.apply(this, arguments),
                                    e = n[0],
                                    r = n[1] - Lt;
                                return [e * Math.cos(r), e * Math.sin(r)];
                            };
                        }(n = t))
                        : n;
                }, t;
            }, o.svg.symbol = function () {
                var t = ca,
                    n = aa;

                function e(e, r) {
                    return (sa.get(t.call(this, e, r)) || la)(n.call(this, e, r));
                }

                return e.type = function (n) {
                    return arguments.length
                        ? (t = Mn(n), e)
                        : t;
                }, e.size = function (t) {
                    return arguments.length
                        ? (n = Mn(t), e)
                        : n;
                }, e;
            };
            var sa = o.map({
                circle: la,
                cross: function (t) {
                    var n = Math.sqrt(t / 5) / 2;
                    return 'M' + -3 * n + ',' + -n + 'H' + -n + 'V' + -3 * n + 'H' + n + 'V' + -n + 'H' + 3 * n + 'V' + n + 'H' + n + 'V' + 3 * n + 'H' + -n + 'V' + n + 'H' + -3 * n + 'Z';
                },
                diamond: function (t) {
                    var n = Math.sqrt(t / (2 * ha)),
                        e = n * ha;
                    return 'M0,' + -n + 'L' + e + ',0 0,' + n + ' ' + -e + ',0Z';
                },
                square: function (t) {
                    var n = Math.sqrt(t) / 2;
                    return 'M' + -n + ',' + -n + 'L' + n + ',' + -n + ' ' + n + ',' + n + ' ' + -n + ',' + n + 'Z';
                },
                'triangle-down': function (t) {
                    var n = Math.sqrt(t / fa),
                        e = n * fa / 2;
                    return 'M0,' + e + 'L' + n + ',' + -e + ' ' + -n + ',' + -e + 'Z';
                },
                'triangle-up': function (t) {
                    var n = Math.sqrt(t / fa),
                        e = n * fa / 2;
                    return 'M0,' + -e + 'L' + n + ',' + e + ' ' + -n + ',' + e + 'Z';
                }
            });
            o.svg.symbolTypes = sa.keys();
            var fa = Math.sqrt(3),
                ha = Math.tan(30 * Tt);
            J.transition = function (t) {
                for (var n, e, r = ga || ++xa, i = wa(t), o = [], u = ya || {
                    time: Date.now(),
                    ease: uo,
                    delay: 0,
                    duration: 250
                }, a = -1, c = this.length; ++a < c;) {
                    o.push(n = []);
                    for (var l = this[a], s = -1, f = l.length; ++s < f;) {
                        (e = l[s]) && _a(e, s, i, r, u), n.push(e);
                    }
                }
                return da(o, i, r);
            }, J.interrupt = function (t) {
                return this.each(null == t
                    ? pa
                    : va(wa(t)));
            };
            var pa = va(wa());

            function va(t) {
                return function () {
                    var n,
                        e,
                        r;
                    (n = this[t]) && (r = n[e = n.active]) && (r.timer.c = null, r.timer.t = NaN, --n.count
                        ? delete n[e]
                        : delete this[t], n.active += .5, r.event && r.event.interrupt.call(this, this.__data__, r.index));
                };
            }

            function da(t, n, e) {
                return Y(t, ma), t.namespace = n, t.id = e, t;
            }

            var ga,
                ya,
                ma = [],
                xa = 0;

            function ba(t, n, e, r) {
                var i = t.id,
                    o = t.namespace;
                return vt(t, 'function' == typeof e
                    ? function (t, u, a) {
                        t[o][i].tween.set(n, r(e.call(t, t.__data__, u, a)));
                    }
                    : (e = r(e), function (t) {
                        t[o][i].tween.set(n, e);
                    }));
            }

            function Ma(t) {
                return null == t && (t = ''), function () {
                    this.textContent = t;
                };
            }

            function wa(t) {
                return null == t
                    ? '__transition__'
                    : '__transition_' + t + '__';
            }

            function _a(t, n, e, r, i) {
                var o,
                    u,
                    a,
                    c,
                    l,
                    s = t[e] || (t[e] = {
                        active: 0,
                        count: 0
                    }),
                    f = s[r];

                function h(e) {
                    var i = s.active,
                        h = s[i];
                    for (var v in h && (h.timer.c = null, h.timer.t = NaN, --s.count, delete s[i], h.event && h.event.interrupt.call(t, t.__data__, h.index)), s) {
                        if (+v < r) {
                            var d = s[v];
                            d.timer.c = null, d.timer.t = NaN, --s.count, delete s[v];
                        }
                    }
                    u.c = p, Cn((function () {
                        return u.c && p(e || 1) && (u.c = null, u.t = NaN), 1;
                    }), 0, o), s.active = r, f.event && f.event.start.call(t, t.__data__, n), l = [], f.tween.forEach((function (e, r) {
                        (r = r.call(t, t.__data__, n)) && l.push(r);
                    })), c = f.ease, a = f.duration;
                }

                function p(i) {
                    for (var o = i / a, u = c(o), h = l.length; h > 0;) {
                        l[--h].call(t, u);
                    }
                    if (o >= 1) {
                        return f.event && f.event.end.call(t, t.__data__, n), --s.count
                            ? delete s[r]
                            : delete t[e], 1;
                    }
                }

                f || (o = i.time, u = Cn((function (t) {
                    var n = f.delay;
                    if (u.t = n + o, n <= t) {
                        return h(t - n);
                    }
                    u.c = h;
                }), 0, o), f = s[r] = {
                    tween: new S,
                    time: o,
                    timer: u,
                    delay: i.delay,
                    duration: i.duration,
                    ease: i.ease,
                    index: n
                }, i = null, ++s.count);
            }

            ma.call = J.call, ma.empty = J.empty, ma.node = J.node, ma.size = J.size, o.transition = function (t, n) {
                return t && t.transition
                    ? ga
                        ? t.transition(n)
                        : t
                    : o.selection().transition(t);
            }, o.transition.prototype = ma, ma.select = function (t) {
                var n,
                    e,
                    r,
                    i = this.id,
                    o = this.namespace,
                    u = [];
                t = K(t);
                for (var a = -1, c = this.length; ++a < c;) {
                    u.push(n = []);
                    for (var l = this[a], s = -1, f = l.length; ++s < f;) {
                        (r = l[s]) && (e = t.call(r, r.__data__, s, a))
                            ? ('__data__' in r && (e.__data__ = r.__data__), _a(e, s, o, i, r[o][i]), n.push(e))
                            : n.push(null);
                    }
                }
                return da(u, o, i);
            }, ma.selectAll = function (t) {
                var n,
                    e,
                    r,
                    i,
                    o,
                    u = this.id,
                    a = this.namespace,
                    c = [];
                t = Q(t);
                for (var l = -1, s = this.length; ++l < s;) {
                    for (var f = this[l], h = -1, p = f.length; ++h < p;) {
                        if (r = f[h]) {
                            o = r[a][u], e = t.call(r, r.__data__, h, l), c.push(n = []);
                            for (var v = -1, d = e.length; ++v < d;) {
                                (i = e[v]) && _a(i, v, a, u, o), n.push(i);
                            }
                        }
                    }
                }
                return da(c, a, u);
            }, ma.filter = function (t) {
                var n,
                    e,
                    r = [];
                'function' != typeof t && (t = pt(t));
                for (var i = 0, o = this.length; i < o; i++) {
                    r.push(n = []);
                    for (var u, a = 0, c = (u = this[i]).length; a < c; a++) {
                        (e = u[a]) && t.call(e, e.__data__, a, i) && n.push(e);
                    }
                }
                return da(r, this.namespace, this.id);
            }, ma.tween = function (t, n) {
                var e = this.id,
                    r = this.namespace;
                return arguments.length < 2
                    ? this.node()[r][e].tween.get(t)
                    : vt(this, null == n
                        ? function (n) {
                            n[r][e].tween.remove(t);
                        }
                        : function (i) {
                            i[r][e].tween.set(t, n);
                        });
            }, ma.attr = function (t, n) {
                if (arguments.length < 2) {
                    for (n in t) {
                        this.attr(n, t[n]);
                    }
                    return this;
                }
                var e = 'transform' == t
                        ? mo
                        : Ji,
                    r = o.ns.qualify(t);

                function i() {
                    this.removeAttribute(r);
                }

                function u() {
                    this.removeAttributeNS(r.space, r.local);
                }

                return ba(this, 'attr.' + t, n, r.local
                    ? function (t) {
                        return null == t
                            ? u
                            : (t += '', function () {
                                var n,
                                    i = this.getAttributeNS(r.space, r.local);
                                return i !== t && (n = e(i, t), function (t) {
                                    this.setAttributeNS(r.space, r.local, n(t));
                                });
                            });
                    }
                    : function (t) {
                        return null == t
                            ? i
                            : (t += '', function () {
                                var n,
                                    i = this.getAttribute(r);
                                return i !== t && (n = e(i, t), function (t) {
                                    this.setAttribute(r, n(t));
                                });
                            });
                    });
            }, ma.attrTween = function (t, n) {
                var e = o.ns.qualify(t);
                return this.tween('attr.' + t, e.local
                    ? function (t, r) {
                        var i = n.call(this, t, r, this.getAttributeNS(e.space, e.local));
                        return i && function (t) {
                            this.setAttributeNS(e.space, e.local, i(t));
                        };
                    }
                    : function (t, r) {
                        var i = n.call(this, t, r, this.getAttribute(e));
                        return i && function (t) {
                            this.setAttribute(e, i(t));
                        };
                    });
            }, ma.style = function (t, n, e) {
                var r = arguments.length;
                if (r < 3) {
                    if ('string' != typeof t) {
                        for (e in r < 2 && (n = ''), t) {
                            this.style(e, t[e], n);
                        }
                        return this;
                    }
                    e = '';
                }

                function i() {
                    this.style.removeProperty(t);
                }

                return ba(this, 'style.' + t, n, (function (n) {
                    return null == n
                        ? i
                        : (n += '', function () {
                            var r,
                                i = s(this).getComputedStyle(this, null).getPropertyValue(t);
                            return i !== n && (r = Ji(i, n), function (n) {
                                this.style.setProperty(t, r(n), e);
                            });
                        });
                }));
            }, ma.styleTween = function (t, n, e) {
                return arguments.length < 3 && (e = ''), this.tween('style.' + t, (function (r, i) {
                    var o = n.call(this, r, i, s(this).getComputedStyle(this, null).getPropertyValue(t));
                    return o && function (n) {
                        this.style.setProperty(t, o(n), e);
                    };
                }));
            }, ma.text = function (t) {
                return ba(this, 'text', t, Ma);
            }, ma.remove = function () {
                var t = this.namespace;
                return this.each('end.transition', (function () {
                    var n;
                    this[t].count < 2 && (n = this.parentNode) && n.removeChild(this);
                }));
            }, ma.ease = function (t) {
                var n = this.id,
                    e = this.namespace;
                return arguments.length < 1
                    ? this.node()[e][n].ease
                    : ('function' != typeof t && (t = o.ease.apply(o, arguments)), vt(this, (function (r) {
                        r[e][n].ease = t;
                    })));
            }, ma.delay = function (t) {
                var n = this.id,
                    e = this.namespace;
                return arguments.length < 1
                    ? this.node()[e][n].delay
                    : vt(this, 'function' == typeof t
                        ? function (r, i, o) {
                            r[e][n].delay = +t.call(r, r.__data__, i, o);
                        }
                        : (t = +t, function (r) {
                            r[e][n].delay = t;
                        }));
            }, ma.duration = function (t) {
                var n = this.id,
                    e = this.namespace;
                return arguments.length < 1
                    ? this.node()[e][n].duration
                    : vt(this, 'function' == typeof t
                        ? function (r, i, o) {
                            r[e][n].duration = Math.max(1, t.call(r, r.__data__, i, o));
                        }
                        : (t = Math.max(1, t), function (r) {
                            r[e][n].duration = t;
                        }));
            }, ma.each = function (t, n) {
                var e = this.id,
                    r = this.namespace;
                if (arguments.length < 2) {
                    var i = ya,
                        u = ga;
                    try {
                        ga = e, vt(this, (function (n, i, o) {
                            ya = n[r][e], t.call(n, n.__data__, i, o);
                        }));
                    } finally {
                        ya = i, ga = u;
                    }
                } else {
                    vt(this, (function (i) {
                        var u = i[r][e];
                        (u.event || (u.event = o.dispatch('start', 'end', 'interrupt'))).on(t, n);
                    }));
                }
                return this;
            }, ma.transition = function () {
                for (var t, n, e, r = this.id, i = ++xa, o = this.namespace, u = [], a = 0, c = this.length; a < c; a++) {
                    u.push(t = []);
                    for (var l, s = 0, f = (l = this[a]).length; s < f; s++) {
                        (n = l[s]) && _a(n, s, o, i, {
                            time: (e = n[o][r]).time,
                            ease: e.ease,
                            delay: e.delay + e.duration,
                            duration: e.duration
                        }), t.push(n);
                    }
                }
                return da(u, o, i);
            }, o.svg.axis = function () {
                var t,
                    n = o.scale.linear(),
                    e = Sa,
                    r = 6,
                    i = 6,
                    u = 3,
                    c = [10],
                    l = null;

                function s(a) {
                    a.each((function () {
                        var a,
                            s = o.select(this),
                            f = this.__chart__ || n,
                            h = this.__chart__ = n.copy(),
                            p = null == l
                                ? h.ticks
                                    ? h.ticks.apply(h, c)
                                    : h.domain()
                                : l,
                            v = null == t
                                ? h.tickFormat
                                    ? h.tickFormat.apply(h, c)
                                    : R
                                : t,
                            d = s.selectAll('.tick').data(p, h),
                            g = d.enter().insert('g', '.domain').attr('class', 'tick').style('opacity', At),
                            y = o.transition(d.exit()).style('opacity', At).remove(),
                            m = o.transition(d.order()).style('opacity', 1),
                            x = Math.max(r, 0) + u,
                            b = pu(h),
                            M = s.selectAll('.domain').data([0]),
                            w = (M.enter().append('path').attr('class', 'domain'), o.transition(M));
                        g.append('line'), g.append('text');
                        var _,
                            S,
                            E,
                            N,
                            A = g.select('line'),
                            k = m.select('line'),
                            C = d.select('text').text(v),
                            O = g.select('text'),
                            F = m.select('text'),
                            L = 'top' === e || 'left' === e
                                ? -1
                                : 1;
                        if ('bottom' === e || 'top' === e
                            ? (a = Na, _ = 'x', E = 'y', S = 'x2', N = 'y2', C.attr('dy', L < 0
                                ? '0em'
                                : '.71em').style('text-anchor', 'middle'), w.attr('d', 'M' + b[0] + ',' + L * i + 'V0H' + b[1] + 'V' + L * i))
                            : (a = Aa, _ = 'y', E = 'x', S = 'y2', N = 'x2', C.attr('dy', '.32em').style('text-anchor', L < 0
                                ? 'end'
                                : 'start'), w.attr('d', 'M' + L * i + ',' + b[0] + 'H0V' + b[1] + 'H' + L * i)), A.attr(N, L * r), O.attr(E, L * x), k.attr(S, 0).attr(N, L * r), F.attr(_, 0).attr(E, L * x), h.rangeBand) {
                            var T = h,
                                P = T.rangeBand() / 2;
                            f = h = function (t) {
                                return T(t) + P;
                            };
                        } else {
                            f.rangeBand
                                ? f = h
                                : y.call(a, h, f);
                        }
                        g.call(a, f, h), m.call(a, h, h);
                    }));
                }

                return s.scale = function (t) {
                    return arguments.length
                        ? (n = t, s)
                        : n;
                }, s.orient = function (t) {
                    return arguments.length
                        ? (e = t in Ea
                            ? t + ''
                            : Sa, s)
                        : e;
                }, s.ticks = function () {
                    return arguments.length
                        ? (c = a(arguments), s)
                        : c;
                }, s.tickValues = function (t) {
                    return arguments.length
                        ? (l = t, s)
                        : l;
                }, s.tickFormat = function (n) {
                    return arguments.length
                        ? (t = n, s)
                        : t;
                }, s.tickSize = function (t) {
                    var n = arguments.length;
                    return n
                        ? (r = +t, i = +arguments[n - 1], s)
                        : r;
                }, s.innerTickSize = function (t) {
                    return arguments.length
                        ? (r = +t, s)
                        : r;
                }, s.outerTickSize = function (t) {
                    return arguments.length
                        ? (i = +t, s)
                        : i;
                }, s.tickPadding = function (t) {
                    return arguments.length
                        ? (u = +t, s)
                        : u;
                }, s.tickSubdivide = function () {
                    return arguments.length && s;
                }, s;
            };
            var Sa = 'bottom',
                Ea = {
                    top: 1,
                    right: 1,
                    bottom: 1,
                    left: 1
                };

            function Na(t, n, e) {
                t.attr('transform', (function (t) {
                    var r = n(t);
                    return 'translate(' + (isFinite(r)
                        ? r
                        : e(t)) + ',0)';
                }));
            }

            function Aa(t, n, e) {
                t.attr('transform', (function (t) {
                    var r = n(t);
                    return 'translate(0,' + (isFinite(r)
                        ? r
                        : e(t)) + ')';
                }));
            }

            o.svg.brush = function () {
                var t,
                    n,
                    e = W(h, 'brushstart', 'brush', 'brushend'),
                    r = null,
                    i = null,
                    u = [0, 0],
                    a = [0, 0],
                    c = !0,
                    l = !0,
                    f = Ca[0];

                function h(t) {
                    t.each((function () {
                        var t = o.select(this).style('pointer-events', 'all').style('-webkit-tap-highlight-color', 'rgba(0,0,0,0)').on('mousedown.brush', g).on('touchstart.brush', g),
                            n = t.selectAll('.background').data([0]);
                        n.enter().append('rect').attr('class', 'background').style('visibility', 'hidden').style('cursor', 'crosshair'), t.selectAll('.extent').data([0]).enter().append('rect').attr('class', 'extent').style('cursor', 'move');
                        var e = t.selectAll('.resize').data(f, R);
                        e.exit().remove(), e.enter().append('g').attr('class', (function (t) {
                            return 'resize ' + t;
                        })).style('cursor', (function (t) {
                            return ka[t];
                        })).append('rect').attr('x', (function (t) {
                            return /[ew]$/.test(t)
                                ? -3
                                : null;
                        })).attr('y', (function (t) {
                            return /^[ns]/.test(t)
                                ? -3
                                : null;
                        })).attr('width', 6).attr('height', 6).style('visibility', 'hidden'), e.style('display', h.empty()
                            ? 'none'
                            : null);
                        var u,
                            a = o.transition(t),
                            c = o.transition(n);
                        r && (u = pu(r), c.attr('x', u[0]).attr('width', u[1] - u[0]), v(a)), i && (u = pu(i), c.attr('y', u[0]).attr('height', u[1] - u[0]), d(a)), p(a);
                    }));
                }

                function p(t) {
                    t.selectAll('.resize').attr('transform', (function (t) {
                        return 'translate(' + u[+/e$/.test(t)] + ',' + a[+/^s/.test(t)] + ')';
                    }));
                }

                function v(t) {
                    t.select('.extent').attr('x', u[0]), t.selectAll('.extent,.n>rect,.s>rect').attr('width', u[1] - u[0]);
                }

                function d(t) {
                    t.select('.extent').attr('y', a[0]), t.selectAll('.extent,.e>rect,.w>rect').attr('height', a[1] - a[0]);
                }

                function g() {
                    var f,
                        g,
                        y = this,
                        m = o.select(o.event.target),
                        x = e.of(y, arguments),
                        b = o.select(y),
                        M = m.datum(),
                        w = !/^(n|s)$/.test(M) && r,
                        _ = !/^(e|w)$/.test(M) && i,
                        S = m.classed('extent'),
                        E = _t(y),
                        N = o.mouse(y),
                        A = o.select(s(y)).on('keydown.brush', (function () {
                            32 == o.event.keyCode && (S || (f = null, N[0] -= u[1], N[1] -= a[1], S = 2), B());
                        })).on('keyup.brush', (function () {
                            32 == o.event.keyCode && 2 == S && (N[0] += u[1], N[1] += a[1], S = 0, B());
                        }));
                    if (o.event.changedTouches
                        ? A.on('touchmove.brush', O).on('touchend.brush', L)
                        : A.on('mousemove.brush', O).on('mouseup.brush', L), b.interrupt().selectAll('*').interrupt(), S) {
                        N[0] = u[0] - N[0], N[1] = a[0] - N[1];
                    } else {
                        if (M) {
                            var k = +/w$/.test(M),
                                C = +/^n/.test(M);
                            g = [u[1 - k] - N[0], a[1 - C] - N[1]], N[0] = u[k], N[1] = a[C];
                        } else {
                            o.event.altKey && (f = N.slice());
                        }
                    }

                    function O() {
                        var t = o.mouse(y),
                            n = !1;
                        g && (t[0] += g[0], t[1] += g[1]), S || (o.event.altKey
                            ? (f || (f = [(u[0] + u[1]) / 2, (a[0] + a[1]) / 2]), N[0] = u[+(t[0] < f[0])], N[1] = a[+(t[1] < f[1])])
                            : f = null), w && F(t, r, 0) && (v(b), n = !0), _ && F(t, i, 1) && (d(b), n = !0), n && (p(b), x({
                            type: 'brush',
                            mode: S
                                ? 'move'
                                : 'resize'
                        }));
                    }

                    function F(e, r, i) {
                        var o,
                            s,
                            h = pu(r),
                            p = h[0],
                            v = h[1],
                            d = N[i],
                            g = i
                                ? a
                                : u,
                            y = g[1] - g[0];
                        if (S && (p -= d, v -= y + d), o = (i
                            ? l
                            : c)
                            ? Math.max(p, Math.min(v, e[i]))
                            : e[i], S
                            ? s = (o += d) + y
                            : (f && (d = Math.max(p, Math.min(v, 2 * f[i] - o))), d < o
                                ? (s = o, o = d)
                                : s = d), g[0] != o || g[1] != s) {
                            return i
                                ? n = null
                                : t = null, g[0] = o, g[1] = s, !0;
                        }
                    }

                    function L() {
                        O(), b.style('pointer-events', 'all').selectAll('.resize').style('display', h.empty()
                            ? 'none'
                            : null), o.select('body').style('cursor', null), A.on('mousemove.brush', null).on('mouseup.brush', null).on('touchmove.brush', null).on('touchend.brush', null).on('keydown.brush', null).on('keyup.brush', null), E(), x({type: 'brushend'});
                    }

                    b.style('pointer-events', 'none').selectAll('.resize').style('display', null), o.select('body').style('cursor', m.style('cursor')), x({type: 'brushstart'}), O();
                }

                return h.event = function (r) {
                    r.each((function () {
                        var r = e.of(this, arguments),
                            i = {
                                x: u,
                                y: a,
                                i: t,
                                j: n
                            },
                            c = this.__chart__ || i;
                        this.__chart__ = i, ga
                            ? o.select(this).transition().each('start.brush', (function () {
                                t = c.i, n = c.j, u = c.x, a = c.y, r({type: 'brushstart'});
                            })).tween('brush:brush', (function () {
                                var e = Ki(u, i.x),
                                    o = Ki(a, i.y);
                                return t = n = null, function (t) {
                                    u = i.x = e(t), a = i.y = o(t), r({
                                        type: 'brush',
                                        mode: 'resize'
                                    });
                                };
                            })).each('end.brush', (function () {
                                t = i.i, n = i.j, r({
                                    type: 'brush',
                                    mode: 'resize'
                                }), r({type: 'brushend'});
                            }))
                            : (r({type: 'brushstart'}), r({
                                type: 'brush',
                                mode: 'resize'
                            }), r({type: 'brushend'}));
                    }));
                }, h.x = function (t) {
                    return arguments.length
                        ? (f = Ca[!(r = t) << 1 | !i], h)
                        : r;
                }, h.y = function (t) {
                    return arguments.length
                        ? (f = Ca[!r << 1 | !(i = t)], h)
                        : i;
                }, h.clamp = function (t) {
                    return arguments.length
                        ? (r && i
                            ? (c = !!t[0], l = !!t[1])
                            : r
                                ? c = !!t
                                : i && (l = !!t), h)
                        : r && i
                            ? [c, l]
                            : r
                                ? c
                                : i
                                    ? l
                                    : null;
                }, h.extent = function (e) {
                    var o,
                        c,
                        l,
                        s,
                        f;
                    return arguments.length
                        ? (r && (o = e[0], c = e[1], i && (o = o[0], c = c[0]), t = [o, c], r.invert && (o = r(o), c = r(c)), c < o && (f = o, o = c, c = f), o == u[0] && c == u[1] || (u = [o, c])), i && (l = e[0], s = e[1], r && (l = l[1], s = s[1]), n = [l, s], i.invert && (l = i(l), s = i(s)), s < l && (f = l, l = s, s = f), l == a[0] && s == a[1] || (a = [l, s])), h)
                        : (r && (t
                            ? (o = t[0], c = t[1])
                            : (o = u[0], c = u[1], r.invert && (o = r.invert(o), c = r.invert(c)), c < o && (f = o, o = c, c = f))), i && (n
                            ? (l = n[0], s = n[1])
                            : (l = a[0], s = a[1], i.invert && (l = i.invert(l), s = i.invert(s)), s < l && (f = l, l = s, s = f))), r && i
                            ? [[o, l], [c, s]]
                            : r
                                ? [o, c]
                                : i && [l, s]);
                }, h.clear = function () {
                    return h.empty() || (u = [0, 0], a = [0, 0], t = n = null), h;
                }, h.empty = function () {
                    return !!r && u[0] == u[1] || !!i && a[0] == a[1];
                }, o.rebind(h, e, 'on');
            };
            var ka = {
                    n: 'ns-resize',
                    e: 'ew-resize',
                    s: 'ns-resize',
                    w: 'ew-resize',
                    nw: 'nwse-resize',
                    ne: 'nesw-resize',
                    se: 'nwse-resize',
                    sw: 'nesw-resize'
                },
                Ca = [['n', 'e', 's', 'w', 'nw', 'ne', 'se', 'sw'], ['e', 'w'], ['n', 's'], []],
                Oa = qn.format = he.timeFormat,
                Fa = Oa.utc,
                La = Fa('%Y-%m-%dT%H:%M:%S.%LZ');

            function Ta(t) {
                return t.toISOString();
            }

            function Pa(t, n, e) {
                function r(n) {
                    return t(n);
                }

                function i(t, e) {
                    var r = (t[1] - t[0]) / e,
                        i = o.bisect(ja, r);
                    return i == ja.length
                        ? [n.year, Mu(t.map((function (t) {
                            return t / 31536e6;
                        })), e)[2]]
                        : i
                            ? n[r / ja[i - 1] < ja[i] / r
                                ? i - 1
                                : i]
                            : [Ia, Mu(t, e)[2]];
                }

                return r.invert = function (n) {
                    return Ra(t.invert(n));
                }, r.domain = function (n) {
                    return arguments.length
                        ? (t.domain(n), r)
                        : t.domain().map(Ra);
                }, r.nice = function (t, n) {
                    var e = r.domain(),
                        o = hu(e),
                        u = null == t
                            ? i(o, 10)
                            : 'number' == typeof t && i(o, t);

                    function a(e) {
                        return !isNaN(e) && !t.range(e, Ra(+e + 1), n).length;
                    }

                    return u && (t = u[0], n = u[1]), r.domain(du(e, n > 1
                        ? {
                            floor: function (n) {
                                for (; a(n = t.floor(n));) {
                                    n = Ra(n - 1);
                                }
                                return n;
                            },
                            ceil: function (n) {
                                for (; a(n = t.ceil(n));) {
                                    n = Ra(+n + 1);
                                }
                                return n;
                            }
                        }
                        : t));
                }, r.ticks = function (t, n) {
                    var e = hu(r.domain()),
                        o = null == t
                            ? i(e, 10)
                            : 'number' == typeof t
                                ? i(e, t)
                                : !t.range && [{range: t}, n];
                    return o && (t = o[0], n = o[1]), t.range(e[0], Ra(+e[1] + 1), n < 1
                        ? 1
                        : n);
                }, r.tickFormat = function () {
                    return e;
                }, r.copy = function () {
                    return Pa(t.copy(), n, e);
                }, xu(r, t);
            }

            function Ra(t) {
                return new Date(t);
            }

            Oa.iso = Date.prototype.toISOString && +new Date('2000-01-01T00:00:00.000Z')
                ? Ta
                : La, Ta.parse = function (t) {
                var n = new Date(t);
                return isNaN(n)
                    ? null
                    : n;
            }, Ta.toString = La.toString, qn.second = Bn((function (t) {
                return new In(1e3 * Math.floor(t / 1e3));
            }), (function (t, n) {
                t.setTime(t.getTime() + 1e3 * Math.floor(n));
            }), (function (t) {
                return t.getSeconds();
            })), qn.seconds = qn.second.range, qn.seconds.utc = qn.second.utc.range, qn.minute = Bn((function (t) {
                return new In(6e4 * Math.floor(t / 6e4));
            }), (function (t, n) {
                t.setTime(t.getTime() + 6e4 * Math.floor(n));
            }), (function (t) {
                return t.getMinutes();
            })), qn.minutes = qn.minute.range, qn.minutes.utc = qn.minute.utc.range, qn.hour = Bn((function (t) {
                var n = t.getTimezoneOffset() / 60;
                return new In(36e5 * (Math.floor(t / 36e5 - n) + n));
            }), (function (t, n) {
                t.setTime(t.getTime() + 36e5 * Math.floor(n));
            }), (function (t) {
                return t.getHours();
            })), qn.hours = qn.hour.range, qn.hours.utc = qn.hour.utc.range, qn.month = Bn((function (t) {
                return (t = qn.day(t)).setDate(1), t;
            }), (function (t, n) {
                t.setMonth(t.getMonth() + n);
            }), (function (t) {
                return t.getMonth();
            })), qn.months = qn.month.range, qn.months.utc = qn.month.utc.range;
            var ja = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
                Da = [[qn.second, 1], [qn.second, 5], [qn.second, 15], [qn.second, 30], [qn.minute, 1], [qn.minute, 5], [qn.minute, 15], [qn.minute, 30], [qn.hour, 1], [qn.hour, 3], [qn.hour, 6], [qn.hour, 12], [qn.day, 1], [qn.day, 2], [qn.week, 1], [qn.month, 1], [qn.month, 3], [qn.year, 1]],
                qa = Oa.multi([['.%L', function (t) {
                    return t.getMilliseconds();
                }], [':%S', function (t) {
                    return t.getSeconds();
                }], ['%I:%M', function (t) {
                    return t.getMinutes();
                }], ['%I %p', function (t) {
                    return t.getHours();
                }], ['%a %d', function (t) {
                    return t.getDay() && 1 != t.getDate();
                }], ['%b %d', function (t) {
                    return 1 != t.getDate();
                }], ['%B', function (t) {
                    return t.getMonth();
                }], ['%Y', Je]]),
                Ia = {
                    range: function (t, n, e) {
                        return o.range(Math.ceil(t / e) * e, +n, e).map(Ra);
                    },
                    floor: R,
                    ceil: R
                };
            Da.year = qn.year, qn.scale = function () {
                return Pa(o.scale.linear(), Da, qa);
            };
            var za = Da.map((function (t) {
                    return [t[0].utc, t[1]];
                })),
                Ua = Fa.multi([['.%L', function (t) {
                    return t.getUTCMilliseconds();
                }], [':%S', function (t) {
                    return t.getUTCSeconds();
                }], ['%I:%M', function (t) {
                    return t.getUTCMinutes();
                }], ['%I %p', function (t) {
                    return t.getUTCHours();
                }], ['%a %d', function (t) {
                    return t.getUTCDay() && 1 != t.getUTCDate();
                }], ['%b %d', function (t) {
                    return 1 != t.getUTCDate();
                }], ['%B', function (t) {
                    return t.getUTCMonth();
                }], ['%Y', Je]]);

            function Ba(t) {
                return JSON.parse(t.responseText);
            }

            function Va(t) {
                var n = c.createRange();
                return n.selectNode(c.body), n.createContextualFragment(t.responseText);
            }

            za.year = qn.year.utc, qn.scale.utc = function () {
                return Pa(o.scale.linear(), za, Ua);
            }, o.text = wn((function (t) {
                return t.responseText;
            })), o.json = function (t, n) {
                return _n(t, 'application/json', Ba, n);
            }, o.html = function (t, n) {
                return _n(t, 'text/html', Va, n);
            }, o.xml = wn((function (t) {
                return t.responseXML;
            })), this.d3 = o, void 0 === (i = 'function' == typeof (r = o)
                ? r.call(n, e, n, t)
                : r) || (t.exports = i);
        }();
    }, function (t, n, e) {
        var r = e(3);
        t.exports = function (t) {
            if (!r(t)) {
                throw TypeError(t + ' is not an object!');
            }
            return t;
        };
    }, function (t, n, e) {
        var r = e(60)('wks'),
            i = e(30),
            o = e(2).Symbol,
            u = 'function' == typeof o;
        (t.exports = function (t) {
            return r[t] || (r[t] = u && o[t] || (u
                ? o
                : i)('Symbol.' + t));
        }).store = r;
    }, function (t, n, e) {
        var r = e(5),
            i = e(84),
            o = e(27),
            u = Object.defineProperty;
        n.f = e(8)
            ? Object.defineProperty
            : function (t, n, e) {
                if (r(t), n = o(n, !0), r(e), i) {
                    try {
                        return u(t, n, e);
                    } catch (t) {
                    }
                }
                if ('get' in e || 'set' in e) {
                    throw TypeError('Accessors not supported!');
                }
                return 'value' in e && (t[n] = e.value), t;
            };
    }, function (t, n, e) {
        t.exports = !e(1)((function () {
            return 7 != Object.defineProperty({}, 'a', {
                get: function () {
                    return 7;
                }
            }).a;
        }));
    }, function (t, n) {
        var e = t.exports = {version: '2.5.7'};
        'number' == typeof __e && (__e = e);
    }, function (t, n, e) {
        var r = e(25),
            i = Math.min;
        t.exports = function (t) {
            return t > 0
                ? i(r(t), 9007199254740991)
                : 0;
        };
    }, function (t, n, e) {
        var r = e(2),
            i = e(14),
            o = e(13),
            u = e(30)('src'),
            a = Function.toString,
            c = ('' + a).split('toString');
        e(9).inspectSource = function (t) {
            return a.call(t);
        }, (t.exports = function (t, n, e, a) {
            var l = 'function' == typeof e;
            l && (o(e, 'name') || i(e, 'name', n)), t[n] !== e && (l && (o(e, u) || i(e, u, t[n]
                ? '' + t[n]
                : c.join(String(n)))), t === r
                ? t[n] = e
                : a
                    ? t[n]
                        ? t[n] = e
                        : i(t, n, e)
                    : (delete t[n], i(t, n, e)));
        })(Function.prototype, 'toString', (function () {
            return 'function' == typeof this && this[u] || a.call(this);
        }));
    }, function (t, n, e) {
        var r = e(0),
            i = e(1),
            o = e(24),
            u = /"/g,
            a = function (t, n, e, r) {
                var i = String(o(t)),
                    a = '<' + n;
                return '' !== e && (a += ' ' + e + '="' + String(r).replace(u, '&quot;') + '"'), a + '>' + i + '</' + n + '>';
            };
        t.exports = function (t, n) {
            var e = {};
            e[t] = n(a), r(r.P + r.F * i((function () {
                var n = ''[t]('"');
                return n !== n.toLowerCase() || n.split('"').length > 3;
            })), 'String', e);
        };
    }, function (t, n) {
        var e = {}.hasOwnProperty;
        t.exports = function (t, n) {
            return e.call(t, n);
        };
    }, function (t, n, e) {
        var r = e(7),
            i = e(29);
        t.exports = e(8)
            ? function (t, n, e) {
                return r.f(t, n, i(1, e));
            }
            : function (t, n, e) {
                return t[n] = e, t;
            };
    }, function (t, n, e) {
        var r = e(45),
            i = e(24);
        t.exports = function (t) {
            return r(i(t));
        };
    }, function (t, n, e) {
        var r = e(24);
        t.exports = function (t) {
            return Object(r(t));
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(1);
        t.exports = function (t, n) {
            return !!t && r((function () {
                n
                    ? t.call(null, (function () {
                    }), 1)
                    : t.call(null);
            }));
        };
    }, function (t, n, e) {
        var r = e(46),
            i = e(29),
            o = e(15),
            u = e(27),
            a = e(13),
            c = e(84),
            l = Object.getOwnPropertyDescriptor;
        n.f = e(8)
            ? l
            : function (t, n) {
                if (t = o(t), n = u(n, !0), c) {
                    try {
                        return l(t, n);
                    } catch (t) {
                    }
                }
                if (a(t, n)) {
                    return i(!r.f.call(t, n), t[n]);
                }
            };
    }, function (t, n, e) {
        var r = e(0),
            i = e(9),
            o = e(1);
        t.exports = function (t, n) {
            var e = (i.Object || {})[t] || Object[t],
                u = {};
            u[t] = n(e), r(r.S + r.F * o((function () {
                e(1);
            })), 'Object', u);
        };
    }, function (t, n, e) {
        var r = e(21),
            i = e(45),
            o = e(16),
            u = e(10),
            a = e(218);
        t.exports = function (t, n) {
            var e = 1 == t,
                c = 2 == t,
                l = 3 == t,
                s = 4 == t,
                f = 6 == t,
                h = 5 == t || f,
                p = n || a;
            return function (n, a, v) {
                for (var d, g, y = o(n), m = i(y), x = r(a, v, 3), b = u(m.length), M = 0, w = e
                    ? p(n, b)
                    : c
                        ? p(n, 0)
                        : void 0; b > M; M++) {
                    if ((h || M in m) && (g = x(d = m[M], M, y), t)) {
                        if (e) {
                            w[M] = g;
                        } else {
                            if (g) {
                                switch (t) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return d;
                                    case 6:
                                        return M;
                                    case 2:
                                        w.push(d);
                                }
                            } else {
                                if (s) {
                                    return !1;
                                }
                            }
                        }
                    }
                }
                return f
                    ? -1
                    : l || s
                        ? s
                        : w;
            };
        };
    }, function (t, n, e) {
        var r = e(22);
        t.exports = function (t, n, e) {
            if (r(t), void 0 === n) {
                return t;
            }
            switch (e) {
                case 1:
                    return function (e) {
                        return t.call(n, e);
                    };
                case 2:
                    return function (e, r) {
                        return t.call(n, e, r);
                    };
                case 3:
                    return function (e, r, i) {
                        return t.call(n, e, r, i);
                    };
            }
            return function () {
                return t.apply(n, arguments);
            };
        };
    }, function (t, n) {
        t.exports = function (t) {
            if ('function' != typeof t) {
                throw TypeError(t + ' is not a function!');
            }
            return t;
        };
    }, function (t, n) {
        var e = {}.toString;
        t.exports = function (t) {
            return e.call(t).slice(8, -1);
        };
    }, function (t, n) {
        t.exports = function (t) {
            if (void 0 == t) {
                throw TypeError('Can\'t call method on  ' + t);
            }
            return t;
        };
    }, function (t, n) {
        var e = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN(t = +t)
                ? 0
                : (t > 0
                    ? r
                    : e)(t);
        };
    }, function (t, n, e) {
        'use strict';
        if (e(8)) {
            var r = e(31),
                i = e(2),
                o = e(1),
                u = e(0),
                a = e(57),
                c = e(83),
                l = e(21),
                s = e(42),
                f = e(29),
                h = e(14),
                p = e(43),
                v = e(25),
                d = e(10),
                g = e(109),
                y = e(33),
                m = e(27),
                x = e(13),
                b = e(49),
                M = e(3),
                w = e(16),
                _ = e(76),
                S = e(34),
                E = e(36),
                N = e(35).f,
                A = e(78),
                k = e(30),
                C = e(6),
                O = e(20),
                F = e(47),
                L = e(54),
                T = e(80),
                P = e(39),
                R = e(51),
                j = e(41),
                D = e(79),
                q = e(101),
                I = e(7),
                z = e(18),
                U = I.f,
                B = z.f,
                V = i.RangeError,
                W = i.TypeError,
                H = i.Uint8Array,
                Y = Array.prototype,
                G = c.ArrayBuffer,
                Z = c.DataView,
                $ = O(0),
                X = O(2),
                J = O(3),
                K = O(4),
                Q = O(5),
                tt = O(6),
                nt = F(!0),
                et = F(!1),
                rt = T.values,
                it = T.keys,
                ot = T.entries,
                ut = Y.lastIndexOf,
                at = Y.reduce,
                ct = Y.reduceRight,
                lt = Y.join,
                st = Y.sort,
                ft = Y.slice,
                ht = Y.toString,
                pt = Y.toLocaleString,
                vt = C('iterator'),
                dt = C('toStringTag'),
                gt = k('typed_constructor'),
                yt = k('def_constructor'),
                mt = a.CONSTR,
                xt = a.TYPED,
                bt = a.VIEW,
                Mt = O(1, (function (t, n) {
                    return Nt(L(t, t[yt]), n);
                })),
                wt = o((function () {
                    return 1 === new H(new Uint16Array([1]).buffer)[0];
                })),
                _t = !!H && !!H.prototype.set && o((function () {
                    new H(1).set({});
                })),
                St = function (t, n) {
                    var e = v(t);
                    if (e < 0 || e % n) {
                        throw V('Wrong offset!');
                    }
                    return e;
                },
                Et = function (t) {
                    if (M(t) && xt in t) {
                        return t;
                    }
                    throw W(t + ' is not a typed array!');
                },
                Nt = function (t, n) {
                    if (!(M(t) && gt in t)) {
                        throw W('It is not a typed array constructor!');
                    }
                    return new t(n);
                },
                At = function (t, n) {
                    return kt(L(t, t[yt]), n);
                },
                kt = function (t, n) {
                    for (var e = 0, r = n.length, i = Nt(t, r); r > e;) {
                        i[e] = n[e++];
                    }
                    return i;
                },
                Ct = function (t, n, e) {
                    U(t, n, {
                        get: function () {
                            return this._d[e];
                        }
                    });
                },
                Ot = function (t) {
                    var n,
                        e,
                        r,
                        i,
                        o,
                        u,
                        a = w(t),
                        c = arguments.length,
                        s = c > 1
                            ? arguments[1]
                            : void 0,
                        f = void 0 !== s,
                        h = A(a);
                    if (void 0 != h && !_(h)) {
                        for (u = h.call(a), r = [], n = 0; !(o = u.next()).done; n++) {
                            r.push(o.value);
                        }
                        a = r;
                    }
                    for (f && c > 2 && (s = l(s, arguments[2], 2)), n = 0, e = d(a.length), i = Nt(this, e); e > n; n++) {
                        i[n] = f
                            ? s(a[n], n)
                            : a[n];
                    }
                    return i;
                },
                Ft = function () {
                    for (var t = 0, n = arguments.length, e = Nt(this, n); n > t;) {
                        e[t] = arguments[t++];
                    }
                    return e;
                },
                Lt = !!H && o((function () {
                    pt.call(new H(1));
                })),
                Tt = function () {
                    return pt.apply(Lt
                        ? ft.call(Et(this))
                        : Et(this), arguments);
                },
                Pt = {
                    copyWithin: function (t, n) {
                        return q.call(Et(this), t, n, arguments.length > 2
                            ? arguments[2]
                            : void 0);
                    },
                    every: function (t) {
                        return K(Et(this), t, arguments.length > 1
                            ? arguments[1]
                            : void 0);
                    },
                    fill: function (t) {
                        return D.apply(Et(this), arguments);
                    },
                    filter: function (t) {
                        return At(this, X(Et(this), t, arguments.length > 1
                            ? arguments[1]
                            : void 0));
                    },
                    find: function (t) {
                        return Q(Et(this), t, arguments.length > 1
                            ? arguments[1]
                            : void 0);
                    },
                    findIndex: function (t) {
                        return tt(Et(this), t, arguments.length > 1
                            ? arguments[1]
                            : void 0);
                    },
                    forEach: function (t) {
                        $(Et(this), t, arguments.length > 1
                            ? arguments[1]
                            : void 0);
                    },
                    indexOf: function (t) {
                        return et(Et(this), t, arguments.length > 1
                            ? arguments[1]
                            : void 0);
                    },
                    includes: function (t) {
                        return nt(Et(this), t, arguments.length > 1
                            ? arguments[1]
                            : void 0);
                    },
                    join: function (t) {
                        return lt.apply(Et(this), arguments);
                    },
                    lastIndexOf: function (t) {
                        return ut.apply(Et(this), arguments);
                    },
                    map: function (t) {
                        return Mt(Et(this), t, arguments.length > 1
                            ? arguments[1]
                            : void 0);
                    },
                    reduce: function (t) {
                        return at.apply(Et(this), arguments);
                    },
                    reduceRight: function (t) {
                        return ct.apply(Et(this), arguments);
                    },
                    reverse: function () {
                        for (var t, n = Et(this).length, e = Math.floor(n / 2), r = 0; r < e;) {
                            t = this[r], this[r++] = this[--n], this[n] = t;
                        }
                        return this;
                    },
                    some: function (t) {
                        return J(Et(this), t, arguments.length > 1
                            ? arguments[1]
                            : void 0);
                    },
                    sort: function (t) {
                        return st.call(Et(this), t);
                    },
                    subarray: function (t, n) {
                        var e = Et(this),
                            r = e.length,
                            i = y(t, r);
                        return new (L(e, e[yt]))(e.buffer, e.byteOffset + i * e.BYTES_PER_ELEMENT, d((void 0 === n
                            ? r
                            : y(n, r)) - i));
                    }
                },
                Rt = function (t, n) {
                    return At(this, ft.call(Et(this), t, n));
                },
                jt = function (t) {
                    Et(this);
                    var n = St(arguments[1], 1),
                        e = this.length,
                        r = w(t),
                        i = d(r.length),
                        o = 0;
                    if (i + n > e) {
                        throw V('Wrong length!');
                    }
                    for (; o < i;) {
                        this[n + o] = r[o++];
                    }
                },
                Dt = {
                    entries: function () {
                        return ot.call(Et(this));
                    },
                    keys: function () {
                        return it.call(Et(this));
                    },
                    values: function () {
                        return rt.call(Et(this));
                    }
                },
                qt = function (t, n) {
                    return M(t) && t[xt] && 'symbol' != typeof n && n in t && String(+n) == String(n);
                },
                It = function (t, n) {
                    return qt(t, n = m(n, !0))
                        ? f(2, t[n])
                        : B(t, n);
                },
                zt = function (t, n, e) {
                    return !(qt(t, n = m(n, !0)) && M(e) && x(e, 'value')) || x(e, 'get') || x(e, 'set') || e.configurable || x(e, 'writable') && !e.writable || x(e, 'enumerable') && !e.enumerable
                        ? U(t, n, e)
                        : (t[n] = e.value, t);
                };
            mt || (z.f = It, I.f = zt), u(u.S + u.F * !mt, 'Object', {
                getOwnPropertyDescriptor: It,
                defineProperty: zt
            }), o((function () {
                ht.call({});
            })) && (ht = pt = function () {
                return lt.call(this);
            });
            var Ut = p({}, Pt);
            p(Ut, Dt), h(Ut, vt, Dt.values), p(Ut, {
                slice: Rt,
                set: jt,
                constructor: function () {
                },
                toString: ht,
                toLocaleString: Tt
            }), Ct(Ut, 'buffer', 'b'), Ct(Ut, 'byteOffset', 'o'), Ct(Ut, 'byteLength', 'l'), Ct(Ut, 'length', 'e'), U(Ut, dt, {
                get: function () {
                    return this[xt];
                }
            }), t.exports = function (t, n, e, c) {
                var l = t + ((c = !!c)
                        ? 'Clamped'
                        : '') + 'Array',
                    f = 'get' + t,
                    p = 'set' + t,
                    v = i[l],
                    y = v || {},
                    m = v && E(v),
                    x = !v || !a.ABV,
                    w = {},
                    _ = v && v.prototype,
                    A = function (t, e) {
                        U(t, e, {
                            get: function () {
                                return function (t, e) {
                                    var r = t._d;
                                    return r.v[f](e * n + r.o, wt);
                                }(this, e);
                            },
                            set: function (t) {
                                return function (t, e, r) {
                                    var i = t._d;
                                    c && (r = (r = Math.round(r)) < 0
                                        ? 0
                                        : r > 255
                                            ? 255
                                            : 255 & r), i.v[p](e * n + i.o, r, wt);
                                }(this, e, t);
                            },
                            enumerable: !0
                        });
                    };
                x
                    ? (v = e((function (t, e, r, i) {
                        s(t, v, l, '_d');
                        var o,
                            u,
                            a,
                            c,
                            f = 0,
                            p = 0;
                        if (M(e)) {
                            if (!(e instanceof G || 'ArrayBuffer' == (c = b(e)) || 'SharedArrayBuffer' == c)) {
                                return xt in e
                                    ? kt(v, e)
                                    : Ot.call(v, e);
                            }
                            o = e, p = St(r, n);
                            var y = e.byteLength;
                            if (void 0 === i) {
                                if (y % n) {
                                    throw V('Wrong length!');
                                }
                                if ((u = y - p) < 0) {
                                    throw V('Wrong length!');
                                }
                            } else {
                                if ((u = d(i) * n) + p > y) {
                                    throw V('Wrong length!');
                                }
                            }
                            a = u / n;
                        } else {
                            a = g(e), o = new G(u = a * n);
                        }
                        for (h(t, '_d', {
                            b: o,
                            o: p,
                            l: u,
                            e: a,
                            v: new Z(o)
                        }); f < a;) {
                            A(t, f++);
                        }
                    })), _ = v.prototype = S(Ut), h(_, 'constructor', v))
                    : o((function () {
                    v(1);
                })) && o((function () {
                    new v(-1);
                })) && R((function (t) {
                    new v, new v(null), new v(1.5), new v(t);
                }), !0) || (v = e((function (t, e, r, i) {
                    var o;
                    return s(t, v, l), M(e)
                        ? e instanceof G || 'ArrayBuffer' == (o = b(e)) || 'SharedArrayBuffer' == o
                            ? void 0 !== i
                                ? new y(e, St(r, n), i)
                                : void 0 !== r
                                    ? new y(e, St(r, n))
                                    : new y(e)
                            : xt in e
                                ? kt(v, e)
                                : Ot.call(v, e)
                        : new y(g(e));
                })), $(m !== Function.prototype
                    ? N(y).concat(N(m))
                    : N(y), (function (t) {
                    t in v || h(v, t, y[t]);
                })), v.prototype = _, r || (_.constructor = v));
                var k = _[vt],
                    C = !!k && ('values' == k.name || void 0 == k.name),
                    O = Dt.values;
                h(v, gt, !0), h(_, xt, l), h(_, bt, !0), h(_, yt, v), (c
                    ? new v(1)[dt] == l
                    : dt in _) || U(_, dt, {
                    get: function () {
                        return l;
                    }
                }), w[l] = v, u(u.G + u.W + u.F * (v != y), w), u(u.S, l, {BYTES_PER_ELEMENT: n}), u(u.S + u.F * o((function () {
                    y.of.call(v, 1);
                })), l, {
                    from: Ot,
                    of: Ft
                }), 'BYTES_PER_ELEMENT' in _ || h(_, 'BYTES_PER_ELEMENT', n), u(u.P, l, Pt), j(l), u(u.P + u.F * _t, l, {set: jt}), u(u.P + u.F * !C, l, Dt), r || _.toString == ht || (_.toString = ht), u(u.P + u.F * o((function () {
                    new v(1).slice();
                })), l, {slice: Rt}), u(u.P + u.F * (o((function () {
                    return [1, 2].toLocaleString() != new v([1, 2]).toLocaleString();
                })) || !o((function () {
                    _.toLocaleString.call([1, 2]);
                }))), l, {toLocaleString: Tt}), P[l] = C
                    ? k
                    : O, r || C || h(_, vt, O);
            };
        } else {
            t.exports = function () {
            };
        }
    }, function (t, n, e) {
        var r = e(3);
        t.exports = function (t, n) {
            if (!r(t)) {
                return t;
            }
            var e,
                i;
            if (n && 'function' == typeof (e = t.toString) && !r(i = e.call(t))) {
                return i;
            }
            if ('function' == typeof (e = t.valueOf) && !r(i = e.call(t))) {
                return i;
            }
            if (!n && 'function' == typeof (e = t.toString) && !r(i = e.call(t))) {
                return i;
            }
            throw TypeError('Can\'t convert object to primitive value');
        };
    }, function (t, n, e) {
        var r = e(30)('meta'),
            i = e(3),
            o = e(13),
            u = e(7).f,
            a = 0,
            c = Object.isExtensible || function () {
                return !0;
            },
            l = !e(1)((function () {
                return c(Object.preventExtensions({}));
            })),
            s = function (t) {
                u(t, r, {
                    value: {
                        i: 'O' + ++a,
                        w: {}
                    }
                });
            },
            f = t.exports = {
                KEY: r,
                NEED: !1,
                fastKey: function (t, n) {
                    if (!i(t)) {
                        return 'symbol' == typeof t
                            ? t
                            : ('string' == typeof t
                            ? 'S'
                            : 'P') + t;
                    }
                    if (!o(t, r)) {
                        if (!c(t)) {
                            return 'F';
                        }
                        if (!n) {
                            return 'E';
                        }
                        s(t);
                    }
                    return t[r].i;
                },
                getWeak: function (t, n) {
                    if (!o(t, r)) {
                        if (!c(t)) {
                            return !0;
                        }
                        if (!n) {
                            return !1;
                        }
                        s(t);
                    }
                    return t[r].w;
                },
                onFreeze: function (t) {
                    return l && f.NEED && c(t) && !o(t, r) && s(t), t;
                }
            };
    }, function (t, n) {
        t.exports = function (t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            };
        };
    }, function (t, n) {
        var e = 0,
            r = Math.random();
        t.exports = function (t) {
            return 'Symbol('.concat(void 0 === t
                ? ''
                : t, ')_', (++e + r).toString(36));
        };
    }, function (t, n) {
        t.exports = !1;
    }, function (t, n, e) {
        var r = e(86),
            i = e(63);
        t.exports = Object.keys || function (t) {
            return r(t, i);
        };
    }, function (t, n, e) {
        var r = e(25),
            i = Math.max,
            o = Math.min;
        t.exports = function (t, n) {
            return (t = r(t)) < 0
                ? i(t + n, 0)
                : o(t, n);
        };
    }, function (t, n, e) {
        var r = e(5),
            i = e(87),
            o = e(63),
            u = e(62)('IE_PROTO'),
            a = function () {
            },
            c = function () {
                var t,
                    n = e(59)('iframe'),
                    r = o.length;
                for (n.style.display = 'none', e(65).appendChild(n), n.src = 'javascript:', (t = n.contentWindow.document).open(), t.write('<script>document.F=Object<\/script>'), t.close(), c = t.F; r--;) {
                    delete c.prototype[o[r]];
                }
                return c();
            };
        t.exports = Object.create || function (t, n) {
            var e;
            return null !== t
                ? (a.prototype = r(t), e = new a, a.prototype = null, e[u] = t)
                : e = c(), void 0 === n
                ? e
                : i(e, n);
        };
    }, function (t, n, e) {
        var r = e(86),
            i = e(63).concat('length', 'prototype');
        n.f = Object.getOwnPropertyNames || function (t) {
            return r(t, i);
        };
    }, function (t, n, e) {
        var r = e(13),
            i = e(16),
            o = e(62)('IE_PROTO'),
            u = Object.prototype;
        t.exports = Object.getPrototypeOf || function (t) {
            return t = i(t), r(t, o)
                ? t[o]
                : 'function' == typeof t.constructor && t instanceof t.constructor
                    ? t.constructor.prototype
                    : t instanceof Object
                        ? u
                        : null;
        };
    }, function (n, e) {
        n.exports = t;
    }, function (t, n, e) {
        var r = e(7).f,
            i = e(13),
            o = e(6)('toStringTag');
        t.exports = function (t, n, e) {
            t && !i(t = e
                ? t
                : t.prototype, o) && r(t, o, {
                configurable: !0,
                value: n
            });
        };
    }, function (t, n) {
        t.exports = {};
    }, function (t, n, e) {
        var r = e(6)('unscopables'),
            i = Array.prototype;
        void 0 == i[r] && e(14)(i, r, {}), t.exports = function (t) {
            i[r][t] = !0;
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(2),
            i = e(7),
            o = e(8),
            u = e(6)('species');
        t.exports = function (t) {
            var n = r[t];
            o && n && !n[u] && i.f(n, u, {
                configurable: !0,
                get: function () {
                    return this;
                }
            });
        };
    }, function (t, n) {
        t.exports = function (t, n, e, r) {
            if (!(t instanceof n) || void 0 !== r && r in t) {
                throw TypeError(e + ': incorrect invocation!');
            }
            return t;
        };
    }, function (t, n, e) {
        var r = e(11);
        t.exports = function (t, n, e) {
            for (var i in n) {
                r(t, i, n[i], e);
            }
            return t;
        };
    }, function (t, n, e) {
        var r = e(3);
        t.exports = function (t, n) {
            if (!r(t) || t._t !== n) {
                throw TypeError('Incompatible receiver, ' + n + ' required!');
            }
            return t;
        };
    }, function (t, n, e) {
        var r = e(23);
        t.exports = Object('z').propertyIsEnumerable(0)
            ? Object
            : function (t) {
                return 'String' == r(t)
                    ? t.split('')
                    : Object(t);
            };
    }, function (t, n) {
        n.f = {}.propertyIsEnumerable;
    }, function (t, n, e) {
        var r = e(15),
            i = e(10),
            o = e(33);
        t.exports = function (t) {
            return function (n, e, u) {
                var a,
                    c = r(n),
                    l = i(c.length),
                    s = o(u, l);
                if (t && e != e) {
                    for (; l > s;) {
                        if ((a = c[s++]) != a) {
                            return !0;
                        }
                    }
                } else {
                    for (; l > s; s++) {
                        if ((t || s in c) && c[s] === e) {
                            return t || s || 0;
                        }
                    }
                }
                return !t && -1;
            };
        };
    }, function (t, n) {
        n.f = Object.getOwnPropertySymbols;
    }, function (t, n, e) {
        var r = e(23),
            i = e(6)('toStringTag'),
            o = 'Arguments' == r(function () {
                return arguments;
            }());
        t.exports = function (t) {
            var n,
                e,
                u;
            return void 0 === t
                ? 'Undefined'
                : null === t
                    ? 'Null'
                    : 'string' == typeof (e = function (t, n) {
                        try {
                            return t[n];
                        } catch (t) {
                        }
                    }(n = Object(t), i))
                        ? e
                        : o
                            ? r(n)
                            : 'Object' == (u = r(n)) && 'function' == typeof n.callee
                                ? 'Arguments'
                                : u;
        };
    }, function (t, n, e) {
        var r = e(0),
            i = e(24),
            o = e(1),
            u = e(67),
            a = '[' + u + ']',
            c = RegExp('^' + a + a + '*'),
            l = RegExp(a + a + '*$'),
            s = function (t, n, e) {
                var i = {},
                    a = o((function () {
                        return !!u[t]() || '​' != '​'[t]();
                    })),
                    c = i[t] = a
                        ? n(f)
                        : u[t];
                e && (i[e] = c), r(r.P + r.F * a, 'String', i);
            },
            f = s.trim = function (t, n) {
                return t = String(i(t)), 1 & n && (t = t.replace(c, '')), 2 & n && (t = t.replace(l, '')), t;
            };
        t.exports = s;
    }, function (t, n, e) {
        var r = e(6)('iterator'),
            i = !1;
        try {
            var o = [7][r]();
            o.return = function () {
                i = !0;
            }, Array.from(o, (function () {
                throw 2;
            }));
        } catch (t) {
        }
        t.exports = function (t, n) {
            if (!n && !i) {
                return !1;
            }
            var e = !1;
            try {
                var o = [7],
                    u = o[r]();
                u.next = function () {
                    return {done: e = !0};
                }, o[r] = function () {
                    return u;
                }, t(o);
            } catch (t) {
            }
            return e;
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(14),
            i = e(11),
            o = e(1),
            u = e(24),
            a = e(6);
        t.exports = function (t, n, e) {
            var c = a(t),
                l = e(u, c, ''[t]),
                s = l[0],
                f = l[1];
            o((function () {
                var n = {};
                return n[c] = function () {
                    return 7;
                }, 7 != ''[t](n);
            })) && (i(String.prototype, t, s), r(RegExp.prototype, c, 2 == n
                ? function (t, n) {
                    return f.call(t, this, n);
                }
                : function (t) {
                    return f.call(t, this);
                }));
        };
    }, function (t, n, e) {
        var r = e(21),
            i = e(99),
            o = e(76),
            u = e(5),
            a = e(10),
            c = e(78),
            l = {},
            s = {};
        (n = t.exports = function (t, n, e, f, h) {
            var p,
                v,
                d,
                g,
                y = h
                    ? function () {
                        return t;
                    }
                    : c(t),
                m = r(e, f, n
                    ? 2
                    : 1),
                x = 0;
            if ('function' != typeof y) {
                throw TypeError(t + ' is not iterable!');
            }
            if (o(y)) {
                for (p = a(t.length); p > x; x++) {
                    if ((g = n
                        ? m(u(v = t[x])[0], v[1])
                        : m(t[x])) === l || g === s) {
                        return g;
                    }
                }
            } else {
                for (d = y.call(t); !(v = d.next()).done;) {
                    if ((g = i(d, m, v.value, n)) === l || g === s) {
                        return g;
                    }
                }
            }
        }).BREAK = l, n.RETURN = s;
    }, function (t, n, e) {
        var r = e(5),
            i = e(22),
            o = e(6)('species');
        t.exports = function (t, n) {
            var e,
                u = r(t).constructor;
            return void 0 === u || void 0 == (e = r(u)[o])
                ? n
                : i(e);
        };
    }, function (t, n, e) {
        var r = e(2).navigator;
        t.exports = r && r.userAgent || '';
    }, function (t, n, e) {
        'use strict';
        var r = e(2),
            i = e(0),
            o = e(11),
            u = e(43),
            a = e(28),
            c = e(53),
            l = e(42),
            s = e(3),
            f = e(1),
            h = e(51),
            p = e(38),
            v = e(68);
        t.exports = function (t, n, e, d, g, y) {
            var m = r[t],
                x = m,
                b = g
                    ? 'set'
                    : 'add',
                M = x && x.prototype,
                w = {},
                _ = function (t) {
                    var n = M[t];
                    o(M, t, 'delete' == t || 'has' == t
                        ? function (t) {
                            return !(y && !s(t)) && n.call(this, 0 === t
                                ? 0
                                : t);
                        }
                        : 'get' == t
                            ? function (t) {
                                return y && !s(t)
                                    ? void 0
                                    : n.call(this, 0 === t
                                        ? 0
                                        : t);
                            }
                            : 'add' == t
                                ? function (t) {
                                    return n.call(this, 0 === t
                                        ? 0
                                        : t), this;
                                }
                                : function (t, e) {
                                    return n.call(this, 0 === t
                                        ? 0
                                        : t, e), this;
                                });
                };
            if ('function' == typeof x && (y || M.forEach && !f((function () {
                (new x).entries().next();
            })))) {
                var S = new x,
                    E = S[b](y
                        ? {}
                        : -0, 1) != S,
                    N = f((function () {
                        S.has(1);
                    })),
                    A = h((function (t) {
                        new x(t);
                    })),
                    k = !y && f((function () {
                        for (var t = new x, n = 5; n--;) {
                            t[b](n, n);
                        }
                        return !t.has(-0);
                    }));
                A || ((x = n((function (n, e) {
                    l(n, x, t);
                    var r = v(new m, n, x);
                    return void 0 != e && c(e, g, r[b], r), r;
                }))).prototype = M, M.constructor = x), (N || k) && (_('delete'), _('has'), g && _('get')), (k || E) && _(b), y && M.clear && delete M.clear;
            } else {
                x = d.getConstructor(n, t, g, b), u(x.prototype, e), a.NEED = !0;
            }
            return p(x, t), w[t] = x, i(i.G + i.W + i.F * (x != m), w), y || d.setStrong(x, t, g), x;
        };
    }, function (t, n, e) {
        for (var r, i = e(2), o = e(14), u = e(30), a = u('typed_array'), c = u('view'), l = !(!i.ArrayBuffer || !i.DataView), s = l, f = 0, h = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(','); f < 9;) {
            (r = i[h[f++]])
                ? (o(r.prototype, a, !0), o(r.prototype, c, !0))
                : s = !1;
        }
        t.exports = {
            ABV: l,
            CONSTR: s,
            TYPED: a,
            VIEW: c
        };
    }, function (t, n) {
        t.exports = {
            d3_identity: function (t) {
                return t;
            },
            d3_mergeLabels: function (t, n) {
                if (0 === n.length) {
                    return t;
                }
                t = t || [];
                for (var e = n.length; e < t.length; e++) {
                    n.push(t[e]);
                }
                return n;
            },
            d3_linearLegend: function (t, n, e) {
                var r = [];
                if (n.length > 1) {
                    r = n;
                } else {
                    for (var i = t.domain(), o = (i[i.length - 1] - i[0]) / (n - 1), u = 0; u < n; u++) {
                        r.push(i[0] + u * o);
                    }
                }
                return {
                    data: r,
                    labels: r.map(e),
                    feature: function (n) {
                        return t(n);
                    }
                };
            },
            d3_quantLegend: function (t, n, e) {
                var r = t.range().map((function (r) {
                    var i = t.invertExtent(r);
                    n(i[0]), n(i[1]);
                    return n(i[0]) + ' ' + e + ' ' + n(i[1]);
                }));
                return {
                    data: t.range(),
                    labels: r,
                    feature: this.d3_identity
                };
            },
            d3_ordinalLegend: function (t) {
                return {
                    data: t.domain(),
                    labels: t.domain(),
                    feature: function (n) {
                        return t(n);
                    }
                };
            },
            d3_drawShapes: function (t, n, e, r, i, o) {
                'rect' === t
                    ? n.attr('height', e).attr('width', r)
                    : 'circle' === t
                        ? n.attr('r', i)
                        : 'line' === t
                            ? n.attr('x1', 0).attr('x2', r).attr('y1', 0).attr('y2', 0)
                            : 'path' === t && n.attr('d', o);
            },
            d3_addText: function (t, n, e, r) {
                n.append('text').attr('class', r + 'label'), t.selectAll('g.' + r + 'cell text').data(e).text(this.d3_identity);
            },
            d3_calcType: function (t, n, e, r, i, o) {
                var u = t.ticks
                    ? this.d3_linearLegend(t, e, i)
                    : t.invertExtent
                        ? this.d3_quantLegend(t, i, o)
                        : this.d3_ordinalLegend(t);
                return u.labels = this.d3_mergeLabels(u.labels, r), n && (u.labels = this.d3_reverse(u.labels), u.data = this.d3_reverse(u.data)), u;
            },
            d3_reverse: function (t) {
                for (var n = [], e = 0, r = t.length; e < r; e++) {
                    n[e] = t[r - e - 1];
                }
                return n;
            },
            d3_placement: function (t, n, e, r, i, o) {
                n.attr('transform', e), r.attr('transform', i), 'horizontal' === t && r.style('text-anchor', o);
            },
            d3_addEvents: function (t, n) {
                var e = this;
                t.on('mouseover.legend', (function (t) {
                    e.d3_cellOver(n, t, this);
                })).on('mouseout.legend', (function (t) {
                    e.d3_cellOut(n, t, this);
                })).on('click.legend', (function (t) {
                    e.d3_cellClick(n, t, this);
                }));
            },
            d3_cellOver: function (t, n, e) {
                t.cellover.call(e, n);
            },
            d3_cellOut: function (t, n, e) {
                t.cellout.call(e, n);
            },
            d3_cellClick: function (t, n, e) {
                t.cellclick.call(e, n);
            },
            d3_title: function (t, n, e, r) {
                if ('' !== e) {
                    t.selectAll('text.' + r + 'legendTitle').data([e]).enter().append('text').attr('class', r + 'legendTitle'), t.selectAll('text.' + r + 'legendTitle').text(e);
                    var i = t.select('.' + r + 'legendTitle').map((function (t) {
                            return t[0].getBBox().height;
                        }))[0],
                        o = -n.map((function (t) {
                            return t[0].getBBox().x;
                        }))[0];
                    n.attr('transform', 'translate(' + o + ',' + (i + 10) + ')');
                }
            }
        };
    }, function (t, n, e) {
        var r = e(3),
            i = e(2).document,
            o = r(i) && r(i.createElement);
        t.exports = function (t) {
            return o
                ? i.createElement(t)
                : {};
        };
    }, function (t, n, e) {
        var r = e(9),
            i = e(2),
            o = i['__core-js_shared__'] || (i['__core-js_shared__'] = {});
        (t.exports = function (t, n) {
            return o[t] || (o[t] = void 0 !== n
                ? n
                : {});
        })('versions', []).push({
            version: r.version,
            mode: e(31)
                ? 'pure'
                : 'global',
            copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
        });
    }, function (t, n, e) {
        n.f = e(6);
    }, function (t, n, e) {
        var r = e(60)('keys'),
            i = e(30);
        t.exports = function (t) {
            return r[t] || (r[t] = i(t));
        };
    }, function (t, n) {
        t.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
    }, function (t, n, e) {
        var r = e(23);
        t.exports = Array.isArray || function (t) {
            return 'Array' == r(t);
        };
    }, function (t, n, e) {
        var r = e(2).document;
        t.exports = r && r.documentElement;
    }, function (t, n, e) {
        var r = e(3),
            i = e(5),
            o = function (t, n) {
                if (i(t), !r(n) && null !== n) {
                    throw TypeError(n + ': can\'t set as prototype!');
                }
            };
        t.exports = {
            set: Object.setPrototypeOf || ('__proto__' in {}
                ? function (t, n, r) {
                    try {
                        (r = e(21)(Function.call, e(18).f(Object.prototype, '__proto__').set, 2))(t, []), n = !(t instanceof Array);
                    } catch (t) {
                        n = !0;
                    }
                    return function (t, e) {
                        return o(t, e), n
                            ? t.__proto__ = e
                            : r(t, e), t;
                    };
                }({}, !1)
                : void 0),
            check: o
        };
    }, function (t, n) {
        t.exports = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff';
    }, function (t, n, e) {
        var r = e(3),
            i = e(66).set;
        t.exports = function (t, n, e) {
            var o,
                u = n.constructor;
            return u !== e && 'function' == typeof u && (o = u.prototype) !== e.prototype && r(o) && i && i(t, o), t;
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(25),
            i = e(24);
        t.exports = function (t) {
            var n = String(i(this)),
                e = '',
                o = r(t);
            if (o < 0 || o == 1 / 0) {
                throw RangeError('Count can\'t be negative');
            }
            for (; o > 0; (o >>>= 1) && (n += n)) {
                1 & o && (e += n);
            }
            return e;
        };
    }, function (t, n) {
        t.exports = Math.sign || function (t) {
            return 0 == (t = +t) || t != t
                ? t
                : t < 0
                    ? -1
                    : 1;
        };
    }, function (t, n) {
        var e = Math.expm1;
        t.exports = !e || e(10) > 22025.465794806718 || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17)
            ? function (t) {
                return 0 == (t = +t)
                    ? t
                    : t > -1e-6 && t < 1e-6
                        ? t + t * t / 2
                        : Math.exp(t) - 1;
            }
            : e;
    }, function (t, n, e) {
        'use strict';
        var r = e(31),
            i = e(0),
            o = e(11),
            u = e(14),
            a = e(39),
            c = e(98),
            l = e(38),
            s = e(36),
            f = e(6)('iterator'),
            h = !([].keys && 'next' in [].keys()),
            p = function () {
                return this;
            };
        t.exports = function (t, n, e, v, d, g, y) {
            c(e, n, v);
            var m,
                x,
                b,
                M = function (t) {
                    if (!h && t in E) {
                        return E[t];
                    }
                    switch (t) {
                        case'keys':
                        case'values':
                            return function () {
                                return new e(this, t);
                            };
                    }
                    return function () {
                        return new e(this, t);
                    };
                },
                w = n + ' Iterator',
                _ = 'values' == d,
                S = !1,
                E = t.prototype,
                N = E[f] || E['@@iterator'] || d && E[d],
                A = N || M(d),
                k = d
                    ? _
                        ? M('entries')
                        : A
                    : void 0,
                C = 'Array' == n && E.entries || N;
            if (C && (b = s(C.call(new t))) !== Object.prototype && b.next && (l(b, w, !0), r || 'function' == typeof b[f] || u(b, f, p)), _ && N && 'values' !== N.name && (S = !0, A = function () {
                return N.call(this);
            }), r && !y || !h && !S && E[f] || u(E, f, A), a[n] = A, a[w] = p, d) {
                if (m = {
                    values: _
                        ? A
                        : M('values'),
                    keys: g
                        ? A
                        : M('keys'),
                    entries: k
                }, y) {
                    for (x in m) {
                        x in E || o(E, x, m[x]);
                    }
                } else {
                    i(i.P + i.F * (h || S), n, m);
                }
            }
            return m;
        };
    }, function (t, n, e) {
        var r = e(74),
            i = e(24);
        t.exports = function (t, n, e) {
            if (r(n)) {
                throw TypeError('String#' + e + ' doesn\'t accept regex!');
            }
            return String(i(t));
        };
    }, function (t, n, e) {
        var r = e(3),
            i = e(23),
            o = e(6)('match');
        t.exports = function (t) {
            var n;
            return r(t) && (void 0 !== (n = t[o])
                ? !!n
                : 'RegExp' == i(t));
        };
    }, function (t, n, e) {
        var r = e(6)('match');
        t.exports = function (t) {
            var n = /./;
            try {
                '/./'[t](n);
            } catch (e) {
                try {
                    return n[r] = !1, !'/./'[t](n);
                } catch (t) {
                }
            }
            return !0;
        };
    }, function (t, n, e) {
        var r = e(39),
            i = e(6)('iterator'),
            o = Array.prototype;
        t.exports = function (t) {
            return void 0 !== t && (r.Array === t || o[i] === t);
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(7),
            i = e(29);
        t.exports = function (t, n, e) {
            n in t
                ? r.f(t, n, i(0, e))
                : t[n] = e;
        };
    }, function (t, n, e) {
        var r = e(49),
            i = e(6)('iterator'),
            o = e(39);
        t.exports = e(9).getIteratorMethod = function (t) {
            if (void 0 != t) {
                return t[i] || t['@@iterator'] || o[r(t)];
            }
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(16),
            i = e(33),
            o = e(10);
        t.exports = function (t) {
            for (var n = r(this), e = o(n.length), u = arguments.length, a = i(u > 1
                ? arguments[1]
                : void 0, e), c = u > 2
                ? arguments[2]
                : void 0, l = void 0 === c
                ? e
                : i(c, e); l > a;) {
                n[a++] = t;
            }
            return n;
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(40),
            i = e(102),
            o = e(39),
            u = e(15);
        t.exports = e(72)(Array, 'Array', (function (t, n) {
            this._t = u(t), this._i = 0, this._k = n;
        }), (function () {
            var t = this._t,
                n = this._k,
                e = this._i++;
            return !t || e >= t.length
                ? (this._t = void 0, i(1))
                : i(0, 'keys' == n
                    ? e
                    : 'values' == n
                        ? t[e]
                        : [e, t[e]]);
        }), 'values'), o.Arguments = o.Array, r('keys'), r('values'), r('entries');
    }, function (t, n, e) {
        'use strict';
        var r = e(5);
        t.exports = function () {
            var t = r(this),
                n = '';
            return t.global && (n += 'g'), t.ignoreCase && (n += 'i'), t.multiline && (n += 'm'), t.unicode && (n += 'u'), t.sticky && (n += 'y'), n;
        };
    }, function (t, n, e) {
        var r,
            i,
            o,
            u = e(21),
            a = e(91),
            c = e(65),
            l = e(59),
            s = e(2),
            f = s.process,
            h = s.setImmediate,
            p = s.clearImmediate,
            v = s.MessageChannel,
            d = s.Dispatch,
            g = 0,
            y = {},
            m = function () {
                var t = +this;
                if (y.hasOwnProperty(t)) {
                    var n = y[t];
                    delete y[t], n();
                }
            },
            x = function (t) {
                m.call(t.data);
            };
        h && p || (h = function (t) {
            for (var n = [], e = 1; arguments.length > e;) {
                n.push(arguments[e++]);
            }
            return y[++g] = function () {
                a('function' == typeof t
                    ? t
                    : Function(t), n);
            }, r(g), g;
        }, p = function (t) {
            delete y[t];
        }, 'process' == e(23)(f)
            ? r = function (t) {
                f.nextTick(u(m, t, 1));
            }
            : d && d.now
                ? r = function (t) {
                    d.now(u(m, t, 1));
                }
                : v
                    ? (o = (i = new v).port2, i.port1.onmessage = x, r = u(o.postMessage, o, 1))
                    : s.addEventListener && 'function' == typeof postMessage && !s.importScripts
                        ? (r = function (t) {
                            s.postMessage(t + '', '*');
                        }, s.addEventListener('message', x, !1))
                        : r = 'onreadystatechange' in l('script')
                            ? function (t) {
                                c.appendChild(l('script')).onreadystatechange = function () {
                                    c.removeChild(this), m.call(t);
                                };
                            }
                            : function (t) {
                                setTimeout(u(m, t, 1), 0);
                            }), t.exports = {
            set: h,
            clear: p
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(2),
            i = e(8),
            o = e(31),
            u = e(57),
            a = e(14),
            c = e(43),
            l = e(1),
            s = e(42),
            f = e(25),
            h = e(10),
            p = e(109),
            v = e(35).f,
            d = e(7).f,
            g = e(79),
            y = e(38),
            m = 'prototype',
            x = 'Wrong index!',
            b = r.ArrayBuffer,
            M = r.DataView,
            w = r.Math,
            _ = r.RangeError,
            S = r.Infinity,
            E = b,
            N = w.abs,
            A = w.pow,
            k = w.floor,
            C = w.log,
            O = w.LN2,
            F = i
                ? '_b'
                : 'buffer',
            L = i
                ? '_l'
                : 'byteLength',
            T = i
                ? '_o'
                : 'byteOffset';

        function P(t, n, e) {
            var r,
                i,
                o,
                u = new Array(e),
                a = 8 * e - n - 1,
                c = (1 << a) - 1,
                l = c >> 1,
                s = 23 === n
                    ? A(2, -24) - A(2, -77)
                    : 0,
                f = 0,
                h = t < 0 || 0 === t && 1 / t < 0
                    ? 1
                    : 0;
            for ((t = N(t)) != t || t === S
                     ? (i = t != t
                    ? 1
                    : 0, r = c)
                     : (r = k(C(t) / O), t * (o = A(2, -r)) < 1 && (r--, o *= 2), (t += r + l >= 1
                    ? s / o
                    : s * A(2, 1 - l)) * o >= 2 && (r++, o /= 2), r + l >= c
                    ? (i = 0, r = c)
                    : r + l >= 1
                        ? (i = (t * o - 1) * A(2, n), r += l)
                        : (i = t * A(2, l - 1) * A(2, n), r = 0)); n >= 8; u[f++] = 255 & i, i /= 256, n -= 8) {
                ;
            }
            for (r = r << n | i, a += n; a > 0; u[f++] = 255 & r, r /= 256, a -= 8) {
                ;
            }
            return u[--f] |= 128 * h, u;
        }

        function R(t, n, e) {
            var r,
                i = 8 * e - n - 1,
                o = (1 << i) - 1,
                u = o >> 1,
                a = i - 7,
                c = e - 1,
                l = t[c--],
                s = 127 & l;
            for (l >>= 7; a > 0; s = 256 * s + t[c], c--, a -= 8) {
                ;
            }
            for (r = s & (1 << -a) - 1, s >>= -a, a += n; a > 0; r = 256 * r + t[c], c--, a -= 8) {
                ;
            }
            if (0 === s) {
                s = 1 - u;
            } else {
                if (s === o) {
                    return r
                        ? NaN
                        : l
                            ? -S
                            : S;
                }
                r += A(2, n), s -= u;
            }
            return (l
                ? -1
                : 1) * r * A(2, s - n);
        }

        function j(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
        }

        function D(t) {
            return [255 & t];
        }

        function q(t) {
            return [255 & t, t >> 8 & 255];
        }

        function I(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255];
        }

        function z(t) {
            return P(t, 52, 8);
        }

        function U(t) {
            return P(t, 23, 4);
        }

        function B(t, n, e) {
            d(t[m], n, {
                get: function () {
                    return this[e];
                }
            });
        }

        function V(t, n, e, r) {
            var i = p(+e);
            if (i + n > t[L]) {
                throw _(x);
            }
            var o = t[F]._b,
                u = i + t[T],
                a = o.slice(u, u + n);
            return r
                ? a
                : a.reverse();
        }

        function W(t, n, e, r, i, o) {
            var u = p(+e);
            if (u + n > t[L]) {
                throw _(x);
            }
            for (var a = t[F]._b, c = u + t[T], l = r(+i), s = 0; s < n; s++) {
                a[c + s] = l[o
                    ? s
                    : n - s - 1];
            }
        }

        if (u.ABV) {
            if (!l((function () {
                b(1);
            })) || !l((function () {
                new b(-1);
            })) || l((function () {
                return new b, new b(1.5), new b(NaN), 'ArrayBuffer' != b.name;
            }))) {
                for (var H, Y = (b = function (t) {
                    return s(this, b), new E(p(t));
                })[m] = E[m], G = v(E), Z = 0; G.length > Z;) {
                    (H = G[Z++]) in b || a(b, H, E[H]);
                }
                o || (Y.constructor = b);
            }
            var $ = new M(new b(2)),
                X = M[m].setInt8;
            $.setInt8(0, 2147483648), $.setInt8(1, 2147483649), !$.getInt8(0) && $.getInt8(1) || c(M[m], {
                setInt8: function (t, n) {
                    X.call(this, t, n << 24 >> 24);
                },
                setUint8: function (t, n) {
                    X.call(this, t, n << 24 >> 24);
                }
            }, !0);
        } else {
            b = function (t) {
                s(this, b, 'ArrayBuffer');
                var n = p(t);
                this._b = g.call(new Array(n), 0), this[L] = n;
            }, M = function (t, n, e) {
                s(this, M, 'DataView'), s(t, b, 'DataView');
                var r = t[L],
                    i = f(n);
                if (i < 0 || i > r) {
                    throw _('Wrong offset!');
                }
                if (i + (e = void 0 === e
                    ? r - i
                    : h(e)) > r) {
                    throw _('Wrong length!');
                }
                this[F] = t, this[T] = i, this[L] = e;
            }, i && (B(b, 'byteLength', '_l'), B(M, 'buffer', '_b'), B(M, 'byteLength', '_l'), B(M, 'byteOffset', '_o')), c(M[m], {
                getInt8: function (t) {
                    return V(this, 1, t)[0] << 24 >> 24;
                },
                getUint8: function (t) {
                    return V(this, 1, t)[0];
                },
                getInt16: function (t) {
                    var n = V(this, 2, t, arguments[1]);
                    return (n[1] << 8 | n[0]) << 16 >> 16;
                },
                getUint16: function (t) {
                    var n = V(this, 2, t, arguments[1]);
                    return n[1] << 8 | n[0];
                },
                getInt32: function (t) {
                    return j(V(this, 4, t, arguments[1]));
                },
                getUint32: function (t) {
                    return j(V(this, 4, t, arguments[1])) >>> 0;
                },
                getFloat32: function (t) {
                    return R(V(this, 4, t, arguments[1]), 23, 4);
                },
                getFloat64: function (t) {
                    return R(V(this, 8, t, arguments[1]), 52, 8);
                },
                setInt8: function (t, n) {
                    W(this, 1, t, D, n);
                },
                setUint8: function (t, n) {
                    W(this, 1, t, D, n);
                },
                setInt16: function (t, n) {
                    W(this, 2, t, q, n, arguments[2]);
                },
                setUint16: function (t, n) {
                    W(this, 2, t, q, n, arguments[2]);
                },
                setInt32: function (t, n) {
                    W(this, 4, t, I, n, arguments[2]);
                },
                setUint32: function (t, n) {
                    W(this, 4, t, I, n, arguments[2]);
                },
                setFloat32: function (t, n) {
                    W(this, 4, t, U, n, arguments[2]);
                },
                setFloat64: function (t, n) {
                    W(this, 8, t, z, n, arguments[2]);
                }
            });
        }
        y(b, 'ArrayBuffer'), y(M, 'DataView'), a(M[m], u.VIEW, !0), n.ArrayBuffer = b, n.DataView = M;
    }, function (t, n, e) {
        t.exports = !e(8) && !e(1)((function () {
            return 7 != Object.defineProperty(e(59)('div'), 'a', {
                get: function () {
                    return 7;
                }
            }).a;
        }));
    }, function (t, n, e) {
        var r = e(2),
            i = e(9),
            o = e(31),
            u = e(61),
            a = e(7).f;
        t.exports = function (t) {
            var n = i.Symbol || (i.Symbol = o
                ? {}
                : r.Symbol || {});
            '_' == t.charAt(0) || t in n || a(n, t, {value: u.f(t)});
        };
    }, function (t, n, e) {
        var r = e(13),
            i = e(15),
            o = e(47)(!1),
            u = e(62)('IE_PROTO');
        t.exports = function (t, n) {
            var e,
                a = i(t),
                c = 0,
                l = [];
            for (e in a) {
                e != u && r(a, e) && l.push(e);
            }
            for (; n.length > c;) {
                r(a, e = n[c++]) && (~o(l, e) || l.push(e));
            }
            return l;
        };
    }, function (t, n, e) {
        var r = e(7),
            i = e(5),
            o = e(32);
        t.exports = e(8)
            ? Object.defineProperties
            : function (t, n) {
                i(t);
                for (var e, u = o(n), a = u.length, c = 0; a > c;) {
                    r.f(t, e = u[c++], n[e]);
                }
                return t;
            };
    }, function (t, n, e) {
        var r = e(15),
            i = e(35).f,
            o = {}.toString,
            u = 'object' == typeof window && window && Object.getOwnPropertyNames
                ? Object.getOwnPropertyNames(window)
                : [];
        t.exports.f = function (t) {
            return u && '[object Window]' == o.call(t)
                ? function (t) {
                    try {
                        return i(t);
                    } catch (t) {
                        return u.slice();
                    }
                }(t)
                : i(r(t));
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(32),
            i = e(48),
            o = e(46),
            u = e(16),
            a = e(45),
            c = Object.assign;
        t.exports = !c || e(1)((function () {
            var t = {},
                n = {},
                e = Symbol(),
                r = 'abcdefghijklmnopqrst';
            return t[e] = 7, r.split('').forEach((function (t) {
                n[t] = t;
            })), 7 != c({}, t)[e] || Object.keys(c({}, n)).join('') != r;
        }))
            ? function (t, n) {
                for (var e = u(t), c = arguments.length, l = 1, s = i.f, f = o.f; c > l;) {
                    for (var h, p = a(arguments[l++]), v = s
                        ? r(p).concat(s(p))
                        : r(p), d = v.length, g = 0; d > g;) {
                        f.call(p, h = v[g++]) && (e[h] = p[h]);
                    }
                }
                return e;
            }
            : c;
    }, function (t, n, e) {
        'use strict';
        var r = e(22),
            i = e(3),
            o = e(91),
            u = [].slice,
            a = {};
        t.exports = Function.bind || function (t) {
            var n = r(this),
                e = u.call(arguments, 1),
                c = function () {
                    var r = e.concat(u.call(arguments));
                    return this instanceof c
                        ? function (t, n, e) {
                            if (!(n in a)) {
                                for (var r = [], i = 0; i < n; i++) {
                                    r[i] = 'a[' + i + ']';
                                }
                                a[n] = Function('F,a', 'return new F(' + r.join(',') + ')');
                            }
                            return a[n](t, e);
                        }(n, r.length, r)
                        : o(n, r, t);
                };
            return i(n.prototype) && (c.prototype = n.prototype), c;
        };
    }, function (t, n) {
        t.exports = function (t, n, e) {
            var r = void 0 === e;
            switch (n.length) {
                case 0:
                    return r
                        ? t()
                        : t.call(e);
                case 1:
                    return r
                        ? t(n[0])
                        : t.call(e, n[0]);
                case 2:
                    return r
                        ? t(n[0], n[1])
                        : t.call(e, n[0], n[1]);
                case 3:
                    return r
                        ? t(n[0], n[1], n[2])
                        : t.call(e, n[0], n[1], n[2]);
                case 4:
                    return r
                        ? t(n[0], n[1], n[2], n[3])
                        : t.call(e, n[0], n[1], n[2], n[3]);
            }
            return t.apply(e, n);
        };
    }, function (t, n, e) {
        var r = e(2).parseInt,
            i = e(50).trim,
            o = e(67),
            u = /^[-+]?0[xX]/;
        t.exports = 8 !== r(o + '08') || 22 !== r(o + '0x16')
            ? function (t, n) {
                var e = i(String(t), 3);
                return r(e, n >>> 0 || (u.test(e)
                    ? 16
                    : 10));
            }
            : r;
    }, function (t, n, e) {
        var r = e(2).parseFloat,
            i = e(50).trim;
        t.exports = 1 / r(e(67) + '-0') != -1 / 0
            ? function (t) {
                var n = i(String(t), 3),
                    e = r(n);
                return 0 === e && '-' == n.charAt(0)
                    ? -0
                    : e;
            }
            : r;
    }, function (t, n, e) {
        var r = e(23);
        t.exports = function (t, n) {
            if ('number' != typeof t && 'Number' != r(t)) {
                throw TypeError(n);
            }
            return +t;
        };
    }, function (t, n, e) {
        var r = e(3),
            i = Math.floor;
        t.exports = function (t) {
            return !r(t) && isFinite(t) && i(t) === t;
        };
    }, function (t, n) {
        t.exports = Math.log1p || function (t) {
            return (t = +t) > -1e-8 && t < 1e-8
                ? t - t * t / 2
                : Math.log(1 + t);
        };
    }, function (t, n, e) {
        var r = e(25),
            i = e(24);
        t.exports = function (t) {
            return function (n, e) {
                var o,
                    u,
                    a = String(i(n)),
                    c = r(e),
                    l = a.length;
                return c < 0 || c >= l
                    ? t
                        ? ''
                        : void 0
                    : (o = a.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === l || (u = a.charCodeAt(c + 1)) < 56320 || u > 57343
                        ? t
                            ? a.charAt(c)
                            : o
                        : t
                            ? a.slice(c, c + 2)
                            : u - 56320 + (o - 55296 << 10) + 65536;
            };
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(34),
            i = e(29),
            o = e(38),
            u = {};
        e(14)(u, e(6)('iterator'), (function () {
            return this;
        })), t.exports = function (t, n, e) {
            t.prototype = r(u, {next: i(1, e)}), o(t, n + ' Iterator');
        };
    }, function (t, n, e) {
        var r = e(5);
        t.exports = function (t, n, e, i) {
            try {
                return i
                    ? n(r(e)[0], e[1])
                    : n(e);
            } catch (n) {
                var o = t.return;
                throw void 0 !== o && r(o.call(t)), n;
            }
        };
    }, function (t, n, e) {
        var r = e(22),
            i = e(16),
            o = e(45),
            u = e(10);
        t.exports = function (t, n, e, a, c) {
            r(n);
            var l = i(t),
                s = o(l),
                f = u(l.length),
                h = c
                    ? f - 1
                    : 0,
                p = c
                    ? -1
                    : 1;
            if (e < 2) {
                for (; ;) {
                    if (h in s) {
                        a = s[h], h += p;
                        break;
                    }
                    if (h += p, c
                        ? h < 0
                        : f <= h) {
                        throw TypeError('Reduce of empty array with no initial value');
                    }
                }
            }
            for (; c
                       ? h >= 0
                       : f > h; h += p) {
                h in s && (a = n(a, s[h], h, l));
            }
            return a;
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(16),
            i = e(33),
            o = e(10);
        t.exports = [].copyWithin || function (t, n) {
            var e = r(this),
                u = o(e.length),
                a = i(t, u),
                c = i(n, u),
                l = arguments.length > 2
                    ? arguments[2]
                    : void 0,
                s = Math.min((void 0 === l
                    ? u
                    : i(l, u)) - c, u - a),
                f = 1;
            for (c < a && a < c + s && (f = -1, c += s - 1, a += s - 1); s-- > 0;) {
                c in e
                    ? e[a] = e[c]
                    : delete e[a], a += f, c += f;
            }
            return e;
        };
    }, function (t, n) {
        t.exports = function (t, n) {
            return {
                value: n,
                done: !!t
            };
        };
    }, function (t, n, e) {
        e(8) && 'g' != /./g.flags && e(7).f(RegExp.prototype, 'flags', {
            configurable: !0,
            get: e(81)
        });
    }, function (t, n, e) {
        'use strict';
        var r,
            i,
            o,
            u,
            a = e(31),
            c = e(2),
            l = e(21),
            s = e(49),
            f = e(0),
            h = e(3),
            p = e(22),
            v = e(42),
            d = e(53),
            g = e(54),
            y = e(82).set,
            m = e(239)(),
            x = e(105),
            b = e(240),
            M = e(55),
            w = e(106),
            _ = c.TypeError,
            S = c.process,
            E = S && S.versions,
            N = E && E.v8 || '',
            A = c.Promise,
            k = 'process' == s(S),
            C = function () {
            },
            O = i = x.f,
            F = !!function () {
                try {
                    var t = A.resolve(1),
                        n = (t.constructor = {})[e(6)('species')] = function (t) {
                            t(C, C);
                        };
                    return (k || 'function' == typeof PromiseRejectionEvent) && t.then(C) instanceof n && 0 !== N.indexOf('6.6') && -1 === M.indexOf('Chrome/66');
                } catch (t) {
                }
            }(),
            L = function (t) {
                var n;
                return !(!h(t) || 'function' != typeof (n = t.then)) && n;
            },
            T = function (t, n) {
                if (!t._n) {
                    t._n = !0;
                    var e = t._c;
                    m((function () {
                        for (var r = t._v, i = 1 == t._s, o = 0, u = function (n) {
                            var e,
                                o,
                                u,
                                a = i
                                    ? n.ok
                                    : n.fail,
                                c = n.resolve,
                                l = n.reject,
                                s = n.domain;
                            try {
                                a
                                    ? (i || (2 == t._h && j(t), t._h = 1), !0 === a
                                        ? e = r
                                        : (s && s.enter(), e = a(r), s && (s.exit(), u = !0)), e === n.promise
                                        ? l(_('Promise-chain cycle'))
                                        : (o = L(e))
                                            ? o.call(e, c, l)
                                            : c(e))
                                    : l(r);
                            } catch (t) {
                                s && !u && s.exit(), l(t);
                            }
                        }; e.length > o;) {
                            u(e[o++]);
                        }
                        t._c = [], t._n = !1, n && !t._h && P(t);
                    }));
                }
            },
            P = function (t) {
                y.call(c, (function () {
                    var n,
                        e,
                        r,
                        i = t._v,
                        o = R(t);
                    if (o && (n = b((function () {
                        k
                            ? S.emit('unhandledRejection', i, t)
                            : (e = c.onunhandledrejection)
                                ? e({
                                    promise: t,
                                    reason: i
                                })
                                : (r = c.console) && r.error && r.error('Unhandled promise rejection', i);
                    })), t._h = k || R(t)
                        ? 2
                        : 1), t._a = void 0, o && n.e) {
                        throw n.v;
                    }
                }));
            },
            R = function (t) {
                return 1 !== t._h && 0 === (t._a || t._c).length;
            },
            j = function (t) {
                y.call(c, (function () {
                    var n;
                    k
                        ? S.emit('rejectionHandled', t)
                        : (n = c.onrejectionhandled) && n({
                        promise: t,
                        reason: t._v
                    });
                }));
            },
            D = function (t) {
                var n = this;
                n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), T(n, !0));
            },
            q = function (t) {
                var n,
                    e = this;
                if (!e._d) {
                    e._d = !0, e = e._w || e;
                    try {
                        if (e === t) {
                            throw _('Promise can\'t be resolved itself');
                        }
                        (n = L(t))
                            ? m((function () {
                                var r = {
                                    _w: e,
                                    _d: !1
                                };
                                try {
                                    n.call(t, l(q, r, 1), l(D, r, 1));
                                } catch (t) {
                                    D.call(r, t);
                                }
                            }))
                            : (e._v = t, e._s = 1, T(e, !1));
                    } catch (t) {
                        D.call({
                            _w: e,
                            _d: !1
                        }, t);
                    }
                }
            };
        F || (A = function (t) {
            v(this, A, 'Promise', '_h'), p(t), r.call(this);
            try {
                t(l(q, this, 1), l(D, this, 1));
            } catch (t) {
                D.call(this, t);
            }
        }, (r = function (t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
        }).prototype = e(43)(A.prototype, {
            then: function (t, n) {
                var e = O(g(this, A));
                return e.ok = 'function' != typeof t || t, e.fail = 'function' == typeof n && n, e.domain = k
                    ? S.domain
                    : void 0, this._c.push(e), this._a && this._a.push(e), this._s && T(this, !1), e.promise;
            },
            catch: function (t) {
                return this.then(void 0, t);
            }
        }), o = function () {
            var t = new r;
            this.promise = t, this.resolve = l(q, t, 1), this.reject = l(D, t, 1);
        }, x.f = O = function (t) {
            return t === A || t === u
                ? new o(t)
                : i(t);
        }), f(f.G + f.W + f.F * !F, {Promise: A}), e(38)(A, 'Promise'), e(41)('Promise'), u = e(9).Promise, f(f.S + f.F * !F, 'Promise', {
            reject: function (t) {
                var n = O(this);
                return (0, n.reject)(t), n.promise;
            }
        }), f(f.S + f.F * (a || !F), 'Promise', {
            resolve: function (t) {
                return w(a && this === u
                    ? A
                    : this, t);
            }
        }), f(f.S + f.F * !(F && e(51)((function (t) {
            A.all(t).catch(C);
        }))), 'Promise', {
            all: function (t) {
                var n = this,
                    e = O(n),
                    r = e.resolve,
                    i = e.reject,
                    o = b((function () {
                        var e = [],
                            o = 0,
                            u = 1;
                        d(t, !1, (function (t) {
                            var a = o++,
                                c = !1;
                            e.push(void 0), u++, n.resolve(t).then((function (t) {
                                c || (c = !0, e[a] = t, --u || r(e));
                            }), i);
                        })), --u || r(e);
                    }));
                return o.e && i(o.v), e.promise;
            },
            race: function (t) {
                var n = this,
                    e = O(n),
                    r = e.reject,
                    i = b((function () {
                        d(t, !1, (function (t) {
                            n.resolve(t).then(e.resolve, r);
                        }));
                    }));
                return i.e && r(i.v), e.promise;
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(22);
        t.exports.f = function (t) {
            return new function (t) {
                var n,
                    e;
                this.promise = new t((function (t, r) {
                    if (void 0 !== n || void 0 !== e) {
                        throw TypeError('Bad Promise constructor');
                    }
                    n = t, e = r;
                })), this.resolve = r(n), this.reject = r(e);
            }(t);
        };
    }, function (t, n, e) {
        var r = e(5),
            i = e(3),
            o = e(105);
        t.exports = function (t, n) {
            if (r(t), i(n) && n.constructor === t) {
                return n;
            }
            var e = o.f(t);
            return (0, e.resolve)(n), e.promise;
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(7).f,
            i = e(34),
            o = e(43),
            u = e(21),
            a = e(42),
            c = e(53),
            l = e(72),
            s = e(102),
            f = e(41),
            h = e(8),
            p = e(28).fastKey,
            v = e(44),
            d = h
                ? '_s'
                : 'size',
            g = function (t, n) {
                var e,
                    r = p(n);
                if ('F' !== r) {
                    return t._i[r];
                }
                for (e = t._f; e; e = e.n) {
                    if (e.k == n) {
                        return e;
                    }
                }
            };
        t.exports = {
            getConstructor: function (t, n, e, l) {
                var s = t((function (t, r) {
                    a(t, s, n, '_i'), t._t = n, t._i = i(null), t._f = void 0, t._l = void 0, t[d] = 0, void 0 != r && c(r, e, t[l], t);
                }));
                return o(s.prototype, {
                    clear: function () {
                        for (var t = v(this, n), e = t._i, r = t._f; r; r = r.n) {
                            r.r = !0, r.p && (r.p = r.p.n = void 0), delete e[r.i];
                        }
                        t._f = t._l = void 0, t[d] = 0;
                    },
                    delete: function (t) {
                        var e = v(this, n),
                            r = g(e, t);
                        if (r) {
                            var i = r.n,
                                o = r.p;
                            delete e._i[r.i], r.r = !0, o && (o.n = i), i && (i.p = o), e._f == r && (e._f = i), e._l == r && (e._l = o), e[d]--;
                        }
                        return !!r;
                    },
                    forEach: function (t) {
                        v(this, n);
                        for (var e, r = u(t, arguments.length > 1
                            ? arguments[1]
                            : void 0, 3); e = e
                            ? e.n
                            : this._f;) {
                            for (r(e.v, e.k, this); e && e.r;) {
                                e = e.p;
                            }
                        }
                    },
                    has: function (t) {
                        return !!g(v(this, n), t);
                    }
                }), h && r(s.prototype, 'size', {
                    get: function () {
                        return v(this, n)[d];
                    }
                }), s;
            },
            def: function (t, n, e) {
                var r,
                    i,
                    o = g(t, n);
                return o
                    ? o.v = e
                    : (t._l = o = {
                        i: i = p(n, !0),
                        k: n,
                        v: e,
                        p: r = t._l,
                        n: void 0,
                        r: !1
                    }, t._f || (t._f = o), r && (r.n = o), t[d]++, 'F' !== i && (t._i[i] = o)), t;
            },
            getEntry: g,
            setStrong: function (t, n, e) {
                l(t, n, (function (t, e) {
                    this._t = v(t, n), this._k = e, this._l = void 0;
                }), (function () {
                    for (var t = this._k, n = this._l; n && n.r;) {
                        n = n.p;
                    }
                    return this._t && (this._l = n = n
                        ? n.n
                        : this._t._f)
                        ? s(0, 'keys' == t
                            ? n.k
                            : 'values' == t
                                ? n.v
                                : [n.k, n.v])
                        : (this._t = void 0, s(1));
                }), e
                    ? 'entries'
                    : 'values', !e, !0), f(n);
            }
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(43),
            i = e(28).getWeak,
            o = e(5),
            u = e(3),
            a = e(42),
            c = e(53),
            l = e(20),
            s = e(13),
            f = e(44),
            h = l(5),
            p = l(6),
            v = 0,
            d = function (t) {
                return t._l || (t._l = new g);
            },
            g = function () {
                this.a = [];
            },
            y = function (t, n) {
                return h(t.a, (function (t) {
                    return t[0] === n;
                }));
            };
        g.prototype = {
            get: function (t) {
                var n = y(this, t);
                if (n) {
                    return n[1];
                }
            },
            has: function (t) {
                return !!y(this, t);
            },
            set: function (t, n) {
                var e = y(this, t);
                e
                    ? e[1] = n
                    : this.a.push([t, n]);
            },
            delete: function (t) {
                var n = p(this.a, (function (n) {
                    return n[0] === t;
                }));
                return ~n && this.a.splice(n, 1), !!~n;
            }
        }, t.exports = {
            getConstructor: function (t, n, e, o) {
                var l = t((function (t, r) {
                    a(t, l, n, '_i'), t._t = n, t._i = v++, t._l = void 0, void 0 != r && c(r, e, t[o], t);
                }));
                return r(l.prototype, {
                    delete: function (t) {
                        if (!u(t)) {
                            return !1;
                        }
                        var e = i(t);
                        return !0 === e
                            ? d(f(this, n)).delete(t)
                            : e && s(e, this._i) && delete e[this._i];
                    },
                    has: function (t) {
                        if (!u(t)) {
                            return !1;
                        }
                        var e = i(t);
                        return !0 === e
                            ? d(f(this, n)).has(t)
                            : e && s(e, this._i);
                    }
                }), l;
            },
            def: function (t, n, e) {
                var r = i(o(n), !0);
                return !0 === r
                    ? d(t).set(n, e)
                    : r[t._i] = e, t;
            },
            ufstore: d
        };
    }, function (t, n, e) {
        var r = e(25),
            i = e(10);
        t.exports = function (t) {
            if (void 0 === t) {
                return 0;
            }
            var n = r(t),
                e = i(n);
            if (n !== e) {
                throw RangeError('Wrong length!');
            }
            return e;
        };
    }, function (t, n, e) {
        var r = e(35),
            i = e(48),
            o = e(5),
            u = e(2).Reflect;
        t.exports = u && u.ownKeys || function (t) {
            var n = r.f(o(t)),
                e = i.f;
            return e
                ? n.concat(e(t))
                : n;
        };
    }, function (t, n, e) {
        var r = e(10),
            i = e(69),
            o = e(24);
        t.exports = function (t, n, e, u) {
            var a = String(o(t)),
                c = a.length,
                l = void 0 === e
                    ? ' '
                    : String(e),
                s = r(n);
            if (s <= c || '' == l) {
                return a;
            }
            var f = s - c,
                h = i.call(l, Math.ceil(f / l.length));
            return h.length > f && (h = h.slice(0, f)), u
                ? h + a
                : a + h;
        };
    }, function (t, n, e) {
        var r = e(32),
            i = e(15),
            o = e(46).f;
        t.exports = function (t) {
            return function (n) {
                for (var e, u = i(n), a = r(u), c = a.length, l = 0, s = []; c > l;) {
                    o.call(u, e = a[l++]) && s.push(t
                        ? [e, u[e]]
                        : u[e]);
                }
                return s;
            };
        };
    }, function (t, n, e) {
        t.exports = e(291);
    }, function (t, n, e) {
        var r = e(4);
        r.legend = e(115), t.exports = r;
    }, function (t, n, e) {
        t.exports = {
            color: e(116),
            size: e(117),
            symbol: e(118)
        };
    }, function (t, n, e) {
        var r = e(58);
        t.exports = function () {
            var t,
                n = d3.scale.linear(),
                e = 'rect',
                i = 15,
                o = 15,
                u = 10,
                a = 2,
                c = [5],
                l = [],
                s = '',
                f = !1,
                h = '',
                p = d3.format('.01f'),
                v = 10,
                d = 'middle',
                g = 'to',
                y = 'vertical',
                m = !1,
                x = d3.dispatch('cellover', 'cellout', 'cellclick');

            function b(b) {
                var M = r.d3_calcType(n, m, c, l, p, g),
                    w = b.selectAll('g').data([n]);
                w.enter().append('g').attr('class', s + 'legendCells');
                var _ = w.selectAll('.' + s + 'cell').data(M.data),
                    S = _.enter().append('g', '.cell').attr('class', s + 'cell').style('opacity', 1e-6),
                    E = (S.append(e).attr('class', s + 'swatch'), _.select('g.' + s + 'cell ' + e));
                r.d3_addEvents(S, x), _.exit().transition().style('opacity', 0).remove(), r.d3_drawShapes(e, E, o, i, u, t), r.d3_addText(w, S, M.labels, s);
                var N = _.select('text'),
                    A = E[0].map((function (t) {
                        return t.getBBox();
                    }));
                f
                    ? E.attr('class', (function (t) {
                        return s + 'swatch ' + M.feature(t);
                    }))
                    : 'line' == e
                        ? E.style('stroke', M.feature)
                        : E.style('fill', M.feature);
                var k,
                    C,
                    O = 'start' == d
                        ? 0
                        : 'middle' == d
                            ? .5
                            : 1;
                'vertical' === y
                    ? (k = function (t, n) {
                        return 'translate(0, ' + n * (A[n].height + a) + ')';
                    }, C = function (t, n) {
                        return 'translate(' + (A[n].width + A[n].x + v) + ',' + (A[n].y + A[n].height / 2 + 5) + ')';
                    })
                    : 'horizontal' === y && (k = function (t, n) {
                    return 'translate(' + n * (A[n].width + a) + ',0)';
                }, C = function (t, n) {
                    return 'translate(' + (A[n].width * O + A[n].x) + ',' + (A[n].height + A[n].y + v + 8) + ')';
                }), r.d3_placement(y, _, k, N, C, d), r.d3_title(b, w, h, s), _.transition().style('opacity', 1);
            }

            return b.scale = function (t) {
                return arguments.length
                    ? (n = t, b)
                    : n;
            }, b.cells = function (t) {
                return arguments.length
                    ? ((t.length > 1 || t >= 2) && (c = t), b)
                    : c;
            }, b.shape = function (n, r) {
                return arguments.length
                    ? (('rect' == n || 'circle' == n || 'line' == n || 'path' == n && 'string' == typeof r) && (e = n, t = r), b)
                    : e;
            }, b.shapeWidth = function (t) {
                return arguments.length
                    ? (i = +t, b)
                    : i;
            }, b.shapeHeight = function (t) {
                return arguments.length
                    ? (o = +t, b)
                    : o;
            }, b.shapeRadius = function (t) {
                return arguments.length
                    ? (u = +t, b)
                    : u;
            }, b.shapePadding = function (t) {
                return arguments.length
                    ? (a = +t, b)
                    : a;
            }, b.labels = function (t) {
                return arguments.length
                    ? (l = t, b)
                    : l;
            }, b.labelAlign = function (t) {
                return arguments.length
                    ? ('start' != t && 'end' != t && 'middle' != t || (d = t), b)
                    : d;
            }, b.labelFormat = function (t) {
                return arguments.length
                    ? (p = t, b)
                    : p;
            }, b.labelOffset = function (t) {
                return arguments.length
                    ? (v = +t, b)
                    : v;
            }, b.labelDelimiter = function (t) {
                return arguments.length
                    ? (g = t, b)
                    : g;
            }, b.useClass = function (t) {
                return arguments.length
                    ? (!0 !== t && !1 !== t || (f = t), b)
                    : f;
            }, b.orient = function (t) {
                return arguments.length
                    ? ('horizontal' != (t = t.toLowerCase()) && 'vertical' != t || (y = t), b)
                    : y;
            }, b.ascending = function (t) {
                return arguments.length
                    ? (m = !!t, b)
                    : m;
            }, b.classPrefix = function (t) {
                return arguments.length
                    ? (s = t, b)
                    : s;
            }, b.title = function (t) {
                return arguments.length
                    ? (h = t, b)
                    : h;
            }, d3.rebind(b, x, 'on'), b;
        };
    }, function (t, n, e) {
        var r = e(58);
        t.exports = function () {
            var t,
                n = d3.scale.linear(),
                e = 'rect',
                i = 15,
                o = 2,
                u = [5],
                a = [],
                c = '',
                l = '',
                s = d3.format('.01f'),
                f = 10,
                h = 'middle',
                p = 'to',
                v = 'vertical',
                d = !1,
                g = d3.dispatch('cellover', 'cellout', 'cellclick');

            function y(y) {
                var m = r.d3_calcType(n, d, u, a, s, p),
                    x = y.selectAll('g').data([n]);
                x.enter().append('g').attr('class', c + 'legendCells');
                var b = x.selectAll('.' + c + 'cell').data(m.data),
                    M = b.enter().append('g', '.cell').attr('class', c + 'cell').style('opacity', 1e-6),
                    w = (M.append(e).attr('class', c + 'swatch'), b.select('g.' + c + 'cell ' + e));
                r.d3_addEvents(M, g), b.exit().transition().style('opacity', 0).remove(), 'line' === e
                    ? (r.d3_drawShapes(e, w, 0, i), w.attr('stroke-width', m.feature))
                    : r.d3_drawShapes(e, w, m.feature, m.feature, m.feature, t), r.d3_addText(x, M, m.labels, c);
                var _,
                    S,
                    E = b.select('text'),
                    N = w[0].map((function (t, r) {
                        var i = t.getBBox(),
                            o = n(m.data[r]);
                        return 'line' === e && 'horizontal' === v
                            ? i.height = i.height + o
                            : 'line' === e && 'vertical' === v && (i.width = i.width), i;
                    })),
                    A = d3.max(N, (function (t) {
                        return t.height + t.y;
                    })),
                    k = d3.max(N, (function (t) {
                        return t.width + t.x;
                    })),
                    C = 'start' == h
                        ? 0
                        : 'middle' == h
                            ? .5
                            : 1;
                'vertical' === v
                    ? (_ = function (t, n) {
                        return 'translate(0, ' + (d3.sum(N.slice(0, n + 1), (function (t) {
                            return t.height;
                        })) + n * o) + ')';
                    }, S = function (t, n) {
                        return 'translate(' + (k + f) + ',' + (N[n].y + N[n].height / 2 + 5) + ')';
                    })
                    : 'horizontal' === v && (_ = function (t, n) {
                    return 'translate(' + (d3.sum(N.slice(0, n + 1), (function (t) {
                        return t.width;
                    })) + n * o) + ',0)';
                }, S = function (t, n) {
                    return 'translate(' + (N[n].width * C + N[n].x) + ',' + (A + f) + ')';
                }), r.d3_placement(v, b, _, E, S, h), r.d3_title(y, x, l, c), b.transition().style('opacity', 1);
            }

            return y.scale = function (t) {
                return arguments.length
                    ? (n = t, y)
                    : n;
            }, y.cells = function (t) {
                return arguments.length
                    ? ((t.length > 1 || t >= 2) && (u = t), y)
                    : u;
            }, y.shape = function (n, r) {
                return arguments.length
                    ? ('rect' != n && 'circle' != n && 'line' != n || (e = n, t = r), y)
                    : e;
            }, y.shapeWidth = function (t) {
                return arguments.length
                    ? (i = +t, y)
                    : i;
            }, y.shapePadding = function (t) {
                return arguments.length
                    ? (o = +t, y)
                    : o;
            }, y.labels = function (t) {
                return arguments.length
                    ? (a = t, y)
                    : a;
            }, y.labelAlign = function (t) {
                return arguments.length
                    ? ('start' != t && 'end' != t && 'middle' != t || (h = t), y)
                    : h;
            }, y.labelFormat = function (t) {
                return arguments.length
                    ? (s = t, y)
                    : s;
            }, y.labelOffset = function (t) {
                return arguments.length
                    ? (f = +t, y)
                    : f;
            }, y.labelDelimiter = function (t) {
                return arguments.length
                    ? (p = t, y)
                    : p;
            }, y.orient = function (t) {
                return arguments.length
                    ? ('horizontal' != (t = t.toLowerCase()) && 'vertical' != t || (v = t), y)
                    : v;
            }, y.ascending = function (t) {
                return arguments.length
                    ? (d = !!t, y)
                    : d;
            }, y.classPrefix = function (t) {
                return arguments.length
                    ? (c = t, y)
                    : c;
            }, y.title = function (t) {
                return arguments.length
                    ? (l = t, y)
                    : l;
            }, d3.rebind(y, g, 'on'), y;
        };
    }, function (t, n, e) {
        var r = e(58);
        t.exports = function () {
            var t = d3.scale.linear(),
                n = 'path',
                e = 15,
                i = 15,
                o = 10,
                u = 5,
                a = [5],
                c = [],
                l = '',
                s = '',
                f = d3.format('.01f'),
                h = 'middle',
                p = 10,
                v = 'to',
                d = 'vertical',
                g = !1,
                y = d3.dispatch('cellover', 'cellout', 'cellclick');

            function m(m) {
                var x = r.d3_calcType(t, g, a, c, f, v),
                    b = m.selectAll('g').data([t]);
                b.enter().append('g').attr('class', l + 'legendCells');
                var M = b.selectAll('.' + l + 'cell').data(x.data),
                    w = M.enter().append('g', '.cell').attr('class', l + 'cell').style('opacity', 1e-6),
                    _ = (w.append(n).attr('class', l + 'swatch'), M.select('g.' + l + 'cell ' + n));
                r.d3_addEvents(w, y), M.exit().transition().style('opacity', 0).remove(), r.d3_drawShapes(n, _, i, e, o, x.feature), r.d3_addText(b, w, x.labels, l);
                var S,
                    E,
                    N = M.select('text'),
                    A = _[0].map((function (t) {
                        return t.getBBox();
                    })),
                    k = d3.max(A, (function (t) {
                        return t.height;
                    })),
                    C = d3.max(A, (function (t) {
                        return t.width;
                    })),
                    O = 'start' == h
                        ? 0
                        : 'middle' == h
                            ? .5
                            : 1;
                'vertical' === d
                    ? (S = function (t, n) {
                        return 'translate(0, ' + n * (k + u) + ')';
                    }, E = function (t, n) {
                        return 'translate(' + (C + p) + ',' + (A[n].y + A[n].height / 2 + 5) + ')';
                    })
                    : 'horizontal' === d && (S = function (t, n) {
                    return 'translate(' + n * (C + u) + ',0)';
                }, E = function (t, n) {
                    return 'translate(' + (A[n].width * O + A[n].x) + ',' + (k + p) + ')';
                }), r.d3_placement(d, M, S, N, E, h), r.d3_title(m, b, s, l), M.transition().style('opacity', 1);
            }

            return m.scale = function (n) {
                return arguments.length
                    ? (t = n, m)
                    : t;
            }, m.cells = function (t) {
                return arguments.length
                    ? ((t.length > 1 || t >= 2) && (a = t), m)
                    : a;
            }, m.shapePadding = function (t) {
                return arguments.length
                    ? (u = +t, m)
                    : u;
            }, m.labels = function (t) {
                return arguments.length
                    ? (c = t, m)
                    : c;
            }, m.labelAlign = function (t) {
                return arguments.length
                    ? ('start' != t && 'end' != t && 'middle' != t || (h = t), m)
                    : h;
            }, m.labelFormat = function (t) {
                return arguments.length
                    ? (f = t, m)
                    : f;
            }, m.labelOffset = function (t) {
                return arguments.length
                    ? (p = +t, m)
                    : p;
            }, m.labelDelimiter = function (t) {
                return arguments.length
                    ? (v = t, m)
                    : v;
            }, m.orient = function (t) {
                return arguments.length
                    ? ('horizontal' != (t = t.toLowerCase()) && 'vertical' != t || (d = t), m)
                    : d;
            }, m.ascending = function (t) {
                return arguments.length
                    ? (g = !!t, m)
                    : g;
            }, m.classPrefix = function (t) {
                return arguments.length
                    ? (l = t, m)
                    : l;
            }, m.title = function (t) {
                return arguments.length
                    ? (s = t, m)
                    : s;
            }, d3.rebind(m, y, 'on'), m;
        };
    }, function (t, n, e) {
        var r = e(120);
        'string' == typeof r && (r = [[t.i, r, '']]);
        var i = {
            hmr: !0,
            transform: void 0,
            insertInto: void 0
        };
        e(122)(r, i);
        r.locals && (t.exports = r.locals);
    }, function (t, n, e) {
        (t.exports = e(121)(!1)).push([t.i, '.in-edit-mode {\n  pointer-events: none;\n}\n.invalid-visualisation-message {\n  display: flex;\n  font-size: 1.2em;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n', '']);
    }, function (t, n) {
        t.exports = function (t) {
            var n = [];
            return n.toString = function () {
                return this.map((function (n) {
                    var e = function (t, n) {
                        var e = t[1] || '',
                            r = t[3];
                        if (!r) {
                            return e;
                        }
                        if (n && 'function' == typeof btoa) {
                            var i = function (t) {
                                    return '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + ' */';
                                }(r),
                                o = r.sources.map((function (t) {
                                    return '/*# sourceURL=' + r.sourceRoot + t + ' */';
                                }));
                            return [e].concat(o).concat([i]).join('\n');
                        }
                        return [e].join('\n');
                    }(n, t);
                    return n[2]
                        ? '@media ' + n[2] + '{' + e + '}'
                        : e;
                })).join('');
            }, n.i = function (t, e) {
                'string' == typeof t && (t = [[null, t, '']]);
                for (var r = {}, i = 0; i < this.length; i++) {
                    var o = this[i][0];
                    'number' == typeof o && (r[o] = !0);
                }
                for (i = 0; i < t.length; i++) {
                    var u = t[i];
                    'number' == typeof u[0] && r[u[0]] || (e && !u[2]
                        ? u[2] = e
                        : e && (u[2] = '(' + u[2] + ') and (' + e + ')'), n.push(u));
                }
            }, n;
        };
    }, function (t, n, e) {
        var r = {},
            i = function (t) {
                var n;
                return function () {
                    return void 0 === n && (n = t.apply(this, arguments)), n;
                };
            }((function () {
                return window && document && document.all && !window.atob;
            })),
            o = function (t) {
                var n = {};
                return function (t, e) {
                    if ('function' == typeof t) {
                        return t();
                    }
                    if (void 0 === n[t]) {
                        var r = function (t, n) {
                            return n
                                ? n.querySelector(t)
                                : document.querySelector(t);
                        }.call(this, t, e);
                        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) {
                            try {
                                r = r.contentDocument.head;
                            } catch (t) {
                                r = null;
                            }
                        }
                        n[t] = r;
                    }
                    return n[t];
                };
            }(),
            u = null,
            a = 0,
            c = [],
            l = e(123);

        function s(t, n) {
            for (var e = 0; e < t.length; e++) {
                var i = t[e],
                    o = r[i.id];
                if (o) {
                    o.refs++;
                    for (var u = 0; u < o.parts.length; u++) {
                        o.parts[u](i.parts[u]);
                    }
                    for (; u < i.parts.length; u++) {
                        o.parts.push(g(i.parts[u], n));
                    }
                } else {
                    var a = [];
                    for (u = 0; u < i.parts.length; u++) {
                        a.push(g(i.parts[u], n));
                    }
                    r[i.id] = {
                        id: i.id,
                        refs: 1,
                        parts: a
                    };
                }
            }
        }

        function f(t, n) {
            for (var e = [], r = {}, i = 0; i < t.length; i++) {
                var o = t[i],
                    u = n.base
                        ? o[0] + n.base
                        : o[0],
                    a = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    };
                r[u]
                    ? r[u].parts.push(a)
                    : e.push(r[u] = {
                        id: u,
                        parts: [a]
                    });
            }
            return e;
        }

        function h(t, n) {
            var e = o(t.insertInto);
            if (!e) {
                throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insertInto\' parameter is invalid.');
            }
            var r = c[c.length - 1];
            if ('top' === t.insertAt) {
                r
                    ? r.nextSibling
                        ? e.insertBefore(n, r.nextSibling)
                        : e.appendChild(n)
                    : e.insertBefore(n, e.firstChild), c.push(n);
            } else {
                if ('bottom' === t.insertAt) {
                    e.appendChild(n);
                } else {
                    if ('object' != typeof t.insertAt || !t.insertAt.before) {
                        throw new Error('[Style Loader]\n\n Invalid value for parameter \'insertAt\' (\'options.insertAt\') found.\n Must be \'top\', \'bottom\', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n');
                    }
                    var i = o(t.insertAt.before, e);
                    e.insertBefore(n, i);
                }
            }
        }

        function p(t) {
            if (null === t.parentNode) {
                return !1;
            }
            t.parentNode.removeChild(t);
            var n = c.indexOf(t);
            n >= 0 && c.splice(n, 1);
        }

        function v(t) {
            var n = document.createElement('style');
            if (void 0 === t.attrs.type && (t.attrs.type = 'text/css'), void 0 === t.attrs.nonce) {
                var r = function () {
                    0;
                    return e.nc;
                }();
                r && (t.attrs.nonce = r);
            }
            return d(n, t.attrs), h(t, n), n;
        }

        function d(t, n) {
            Object.keys(n).forEach((function (e) {
                t.setAttribute(e, n[e]);
            }));
        }

        function g(t, n) {
            var e,
                r,
                i,
                o;
            if (n.transform && t.css) {
                if (!(o = 'function' == typeof n.transform
                    ? n.transform(t.css)
                    : n.transform.default(t.css))) {
                    return function () {
                    };
                }
                t.css = o;
            }
            if (n.singleton) {
                var c = a++;
                e = u || (u = v(n)), r = m.bind(null, e, c, !1), i = m.bind(null, e, c, !0);
            } else {
                t.sourceMap && 'function' == typeof URL && 'function' == typeof URL.createObjectURL && 'function' == typeof URL.revokeObjectURL && 'function' == typeof Blob && 'function' == typeof btoa
                    ? (e = function (t) {
                        var n = document.createElement('link');
                        return void 0 === t.attrs.type && (t.attrs.type = 'text/css'), t.attrs.rel = 'stylesheet', d(n, t.attrs), h(t, n), n;
                    }(n), r = function (t, n, e) {
                        var r = e.css,
                            i = e.sourceMap,
                            o = void 0 === n.convertToAbsoluteUrls && i;
                        (n.convertToAbsoluteUrls || o) && (r = l(r));
                        i && (r += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + ' */');
                        var u = new Blob([r], {type: 'text/css'}),
                            a = t.href;
                        t.href = URL.createObjectURL(u), a && URL.revokeObjectURL(a);
                    }.bind(null, e, n), i = function () {
                        p(e), e.href && URL.revokeObjectURL(e.href);
                    })
                    : (e = v(n), r = function (t, n) {
                        var e = n.css,
                            r = n.media;
                        r && t.setAttribute('media', r);
                        if (t.styleSheet) {
                            t.styleSheet.cssText = e;
                        } else {
                            for (; t.firstChild;) {
                                t.removeChild(t.firstChild);
                            }
                            t.appendChild(document.createTextNode(e));
                        }
                    }.bind(null, e), i = function () {
                        p(e);
                    });
            }
            return r(t), function (n) {
                if (n) {
                    if (n.css === t.css && n.media === t.media && n.sourceMap === t.sourceMap) {
                        return;
                    }
                    r(t = n);
                } else {
                    i();
                }
            };
        }

        t.exports = function (t, n) {
            if ('undefined' != typeof DEBUG && DEBUG && 'object' != typeof document) {
                throw new Error('The style-loader cannot be used in a non-browser environment');
            }
            (n = n || {}).attrs = 'object' == typeof n.attrs
                ? n.attrs
                : {}, n.singleton || 'boolean' == typeof n.singleton || (n.singleton = i()), n.insertInto || (n.insertInto = 'head'), n.insertAt || (n.insertAt = 'bottom');
            var e = f(t, n);
            return s(e, n), function (t) {
                for (var i = [], o = 0; o < e.length; o++) {
                    var u = e[o];
                    (a = r[u.id]).refs--, i.push(a);
                }
                t && s(f(t, n), n);
                for (o = 0; o < i.length; o++) {
                    var a;
                    if (0 === (a = i[o]).refs) {
                        for (var c = 0; c < a.parts.length; c++) {
                            a.parts[c]();
                        }
                        delete r[a.id];
                    }
                }
            };
        };
        var y = function () {
            var t = [];
            return function (n, e) {
                return t[n] = e, t.filter(Boolean).join('\n');
            };
        }();

        function m(t, n, e, r) {
            var i = e
                ? ''
                : r.css;
            if (t.styleSheet) {
                t.styleSheet.cssText = y(n, i);
            } else {
                var o = document.createTextNode(i),
                    u = t.childNodes;
                u[n] && t.removeChild(u[n]), u.length
                    ? t.insertBefore(o, u[n])
                    : t.appendChild(o);
            }
        }
    }, function (t, n) {
        t.exports = function (t) {
            var n = 'undefined' != typeof window && window.location;
            if (!n) {
                throw new Error('fixUrls requires window.location');
            }
            if (!t || 'string' != typeof t) {
                return t;
            }
            var e = n.protocol + '//' + n.host,
                r = e + n.pathname.replace(/\/[^\/]*$/, '/');
            return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, (function (t, n) {
                var i,
                    o = n.trim().replace(/^"(.*)"$/, (function (t, n) {
                        return n;
                    })).replace(/^'(.*)'$/, (function (t, n) {
                        return n;
                    }));
                return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)
                    ? t
                    : (i = 0 === o.indexOf('//')
                        ? o
                        : 0 === o.indexOf('/')
                            ? e + o
                            : r + o.replace(/^\.\//, ''), 'url(' + JSON.stringify(i) + ')');
            }));
        };
    }, function (t, n, e) {
        'use strict';
        (function (t) {
            e(126), e(270), e(272), e(274), e(276), e(278), e(280), e(282), e(284), e(286), e(290), t._babelPolyfill && 'undefined' != typeof console && console.warn && console.warn('@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning.'), t._babelPolyfill = !0;
        }).call(this, e(125));
    }, function (t, n) {
        var e;
        e = function () {
            return this;
        }();
        try {
            e = e || Function('return this')() || (0, eval)('this');
        } catch (t) {
            'object' == typeof window && (e = window);
        }
        t.exports = e;
    }, function (t, n, e) {
        e(127), e(129), e(130), e(131), e(132), e(133), e(134), e(135), e(136), e(137), e(138), e(139), e(140), e(141), e(142), e(143), e(145), e(146), e(147), e(148), e(149), e(150), e(151), e(152), e(153), e(154), e(155), e(156), e(157), e(158), e(159), e(160), e(161), e(162), e(163), e(164), e(165), e(166), e(167), e(168), e(169), e(170), e(171), e(173), e(174), e(175), e(176), e(177), e(178), e(179), e(180), e(181), e(182), e(183), e(184), e(185), e(186), e(187), e(188), e(189), e(190), e(191), e(192), e(193), e(194), e(195), e(196), e(197), e(198), e(199), e(200), e(201), e(202), e(203), e(204), e(205), e(206), e(208), e(209), e(211), e(212), e(213), e(214), e(215), e(216), e(217), e(220), e(221), e(222), e(223), e(224), e(225), e(226), e(227), e(228), e(229), e(230), e(231), e(232), e(80), e(233),e(234),e(103),e(235),e(236),e(237),e(238),e(104),e(241),e(242),e(243),e(244),e(245),e(246),e(247),e(248),e(249),e(250),e(251),e(252),e(253),e(254),e(255),e(256),e(257),e(258),e(259),e(260),e(261),e(262),e(263),e(264),e(265),e(266),e(267),e(268),e(269),t.exports = e(9);
    }, function (t, n, e) {
        'use strict';
        var r = e(2),
            i = e(13),
            o = e(8),
            u = e(0),
            a = e(11),
            c = e(28).KEY,
            l = e(1),
            s = e(60),
            f = e(38),
            h = e(30),
            p = e(6),
            v = e(61),
            d = e(85),
            g = e(128),
            y = e(64),
            m = e(5),
            x = e(3),
            b = e(15),
            M = e(27),
            w = e(29),
            _ = e(34),
            S = e(88),
            E = e(18),
            N = e(7),
            A = e(32),
            k = E.f,
            C = N.f,
            O = S.f,
            F = r.Symbol,
            L = r.JSON,
            T = L && L.stringify,
            P = p('_hidden'),
            R = p('toPrimitive'),
            j = {}.propertyIsEnumerable,
            D = s('symbol-registry'),
            q = s('symbols'),
            I = s('op-symbols'),
            z = Object.prototype,
            U = 'function' == typeof F,
            B = r.QObject,
            V = !B || !B.prototype || !B.prototype.findChild,
            W = o && l((function () {
                return 7 != _(C({}, 'a', {
                    get: function () {
                        return C(this, 'a', {value: 7}).a;
                    }
                })).a;
            }))
                ? function (t, n, e) {
                    var r = k(z, n);
                    r && delete z[n], C(t, n, e), r && t !== z && C(z, n, r);
                }
                : C,
            H = function (t) {
                var n = q[t] = _(F.prototype);
                return n._k = t, n;
            },
            Y = U && 'symbol' == typeof F.iterator
                ? function (t) {
                    return 'symbol' == typeof t;
                }
                : function (t) {
                    return t instanceof F;
                },
            G = function (t, n, e) {
                return t === z && G(I, n, e), m(t), n = M(n, !0), m(e), i(q, n)
                    ? (e.enumerable
                        ? (i(t, P) && t[P][n] && (t[P][n] = !1), e = _(e, {enumerable: w(0, !1)}))
                        : (i(t, P) || C(t, P, w(1, {})), t[P][n] = !0), W(t, n, e))
                    : C(t, n, e);
            },
            Z = function (t, n) {
                m(t);
                for (var e, r = g(n = b(n)), i = 0, o = r.length; o > i;) {
                    G(t, e = r[i++], n[e]);
                }
                return t;
            },
            $ = function (t) {
                var n = j.call(this, t = M(t, !0));
                return !(this === z && i(q, t) && !i(I, t)) && (!(n || !i(this, t) || !i(q, t) || i(this, P) && this[P][t]) || n);
            },
            X = function (t, n) {
                if (t = b(t), n = M(n, !0), t !== z || !i(q, n) || i(I, n)) {
                    var e = k(t, n);
                    return !e || !i(q, n) || i(t, P) && t[P][n] || (e.enumerable = !0), e;
                }
            },
            J = function (t) {
                for (var n, e = O(b(t)), r = [], o = 0; e.length > o;) {
                    i(q, n = e[o++]) || n == P || n == c || r.push(n);
                }
                return r;
            },
            K = function (t) {
                for (var n, e = t === z, r = O(e
                    ? I
                    : b(t)), o = [], u = 0; r.length > u;) {
                    !i(q, n = r[u++]) || e && !i(z, n) || o.push(q[n]);
                }
                return o;
            };
        U || (a((F = function () {
            if (this instanceof F) {
                throw TypeError('Symbol is not a constructor!');
            }
            var t = h(arguments.length > 0
                    ? arguments[0]
                    : void 0),
                n = function (e) {
                    this === z && n.call(I, e), i(this, P) && i(this[P], t) && (this[P][t] = !1), W(this, t, w(1, e));
                };
            return o && V && W(z, t, {
                configurable: !0,
                set: n
            }), H(t);
        }).prototype, 'toString', (function () {
            return this._k;
        })), E.f = X, N.f = G, e(35).f = S.f = J, e(46).f = $, e(48).f = K, o && !e(31) && a(z, 'propertyIsEnumerable', $, !0), v.f = function (t) {
            return H(p(t));
        }), u(u.G + u.W + u.F * !U, {Symbol: F});
        for (var Q = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), tt = 0; Q.length > tt;) {
            p(Q[tt++]);
        }
        for (var nt = A(p.store), et = 0; nt.length > et;) {
            d(nt[et++]);
        }
        u(u.S + u.F * !U, 'Symbol', {
            for: function (t) {
                return i(D, t += '')
                    ? D[t]
                    : D[t] = F(t);
            },
            keyFor: function (t) {
                if (!Y(t)) {
                    throw TypeError(t + ' is not a symbol!');
                }
                for (var n in D) {
                    if (D[n] === t) {
                        return n;
                    }
                }
            },
            useSetter: function () {
                V = !0;
            },
            useSimple: function () {
                V = !1;
            }
        }), u(u.S + u.F * !U, 'Object', {
            create: function (t, n) {
                return void 0 === n
                    ? _(t)
                    : Z(_(t), n);
            },
            defineProperty: G,
            defineProperties: Z,
            getOwnPropertyDescriptor: X,
            getOwnPropertyNames: J,
            getOwnPropertySymbols: K
        }), L && u(u.S + u.F * (!U || l((function () {
            var t = F();
            return '[null]' != T([t]) || '{}' != T({a: t}) || '{}' != T(Object(t));
        }))), 'JSON', {
            stringify: function (t) {
                for (var n, e, r = [t], i = 1; arguments.length > i;) {
                    r.push(arguments[i++]);
                }
                if (e = n = r[1], (x(n) || void 0 !== t) && !Y(t)) {
                    return y(n) || (n = function (t, n) {
                        if ('function' == typeof e && (n = e.call(this, t, n)), !Y(n)) {
                            return n;
                        }
                    }), r[1] = n, T.apply(L, r);
                }
            }
        }), F.prototype[R] || e(14)(F.prototype, R, F.prototype.valueOf), f(F, 'Symbol'), f(Math, 'Math', !0), f(r.JSON, 'JSON', !0);
    }, function (t, n, e) {
        var r = e(32),
            i = e(48),
            o = e(46);
        t.exports = function (t) {
            var n = r(t),
                e = i.f;
            if (e) {
                for (var u, a = e(t), c = o.f, l = 0; a.length > l;) {
                    c.call(t, u = a[l++]) && n.push(u);
                }
            }
            return n;
        };
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Object', {create: e(34)});
    }, function (t, n, e) {
        var r = e(0);
        r(r.S + r.F * !e(8), 'Object', {defineProperty: e(7).f});
    }, function (t, n, e) {
        var r = e(0);
        r(r.S + r.F * !e(8), 'Object', {defineProperties: e(87)});
    }, function (t, n, e) {
        var r = e(15),
            i = e(18).f;
        e(19)('getOwnPropertyDescriptor', (function () {
            return function (t, n) {
                return i(r(t), n);
            };
        }));
    }, function (t, n, e) {
        var r = e(16),
            i = e(36);
        e(19)('getPrototypeOf', (function () {
            return function (t) {
                return i(r(t));
            };
        }));
    }, function (t, n, e) {
        var r = e(16),
            i = e(32);
        e(19)('keys', (function () {
            return function (t) {
                return i(r(t));
            };
        }));
    }, function (t, n, e) {
        e(19)('getOwnPropertyNames', (function () {
            return e(88).f;
        }));
    }, function (t, n, e) {
        var r = e(3),
            i = e(28).onFreeze;
        e(19)('freeze', (function (t) {
            return function (n) {
                return t && r(n)
                    ? t(i(n))
                    : n;
            };
        }));
    }, function (t, n, e) {
        var r = e(3),
            i = e(28).onFreeze;
        e(19)('seal', (function (t) {
            return function (n) {
                return t && r(n)
                    ? t(i(n))
                    : n;
            };
        }));
    }, function (t, n, e) {
        var r = e(3),
            i = e(28).onFreeze;
        e(19)('preventExtensions', (function (t) {
            return function (n) {
                return t && r(n)
                    ? t(i(n))
                    : n;
            };
        }));
    }, function (t, n, e) {
        var r = e(3);
        e(19)('isFrozen', (function (t) {
            return function (n) {
                return !r(n) || !!t && t(n);
            };
        }));
    }, function (t, n, e) {
        var r = e(3);
        e(19)('isSealed', (function (t) {
            return function (n) {
                return !r(n) || !!t && t(n);
            };
        }));
    }, function (t, n, e) {
        var r = e(3);
        e(19)('isExtensible', (function (t) {
            return function (n) {
                return !!r(n) && (!t || t(n));
            };
        }));
    }, function (t, n, e) {
        var r = e(0);
        r(r.S + r.F, 'Object', {assign: e(89)});
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Object', {is: e(144)});
    }, function (t, n) {
        t.exports = Object.is || function (t, n) {
            return t === n
                ? 0 !== t || 1 / t == 1 / n
                : t != t && n != n;
        };
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Object', {setPrototypeOf: e(66).set});
    }, function (t, n, e) {
        'use strict';
        var r = e(49),
            i = {};
        i[e(6)('toStringTag')] = 'z', i + '' != '[object z]' && e(11)(Object.prototype, 'toString', (function () {
            return '[object ' + r(this) + ']';
        }), !0);
    }, function (t, n, e) {
        var r = e(0);
        r(r.P, 'Function', {bind: e(90)});
    }, function (t, n, e) {
        var r = e(7).f,
            i = Function.prototype,
            o = /^\s*function ([^ (]*)/;
        'name' in i || e(8) && r(i, 'name', {
            configurable: !0,
            get: function () {
                try {
                    return ('' + this).match(o)[1];
                } catch (t) {
                    return '';
                }
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(3),
            i = e(36),
            o = e(6)('hasInstance'),
            u = Function.prototype;
        o in u || e(7).f(u, o, {
            value: function (t) {
                if ('function' != typeof this || !r(t)) {
                    return !1;
                }
                if (!r(this.prototype)) {
                    return t instanceof this;
                }
                for (; t = i(t);) {
                    if (this.prototype === t) {
                        return !0;
                    }
                }
                return !1;
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(92);
        r(r.G + r.F * (parseInt != i), {parseInt: i});
    }, function (t, n, e) {
        var r = e(0),
            i = e(93);
        r(r.G + r.F * (parseFloat != i), {parseFloat: i});
    }, function (t, n, e) {
        'use strict';
        var r = e(2),
            i = e(13),
            o = e(23),
            u = e(68),
            a = e(27),
            c = e(1),
            l = e(35).f,
            s = e(18).f,
            f = e(7).f,
            h = e(50).trim,
            p = r.Number,
            v = p,
            d = p.prototype,
            g = 'Number' == o(e(34)(d)),
            y = 'trim' in String.prototype,
            m = function (t) {
                var n = a(t, !1);
                if ('string' == typeof n && n.length > 2) {
                    var e,
                        r,
                        i,
                        o = (n = y
                            ? n.trim()
                            : h(n, 3)).charCodeAt(0);
                    if (43 === o || 45 === o) {
                        if (88 === (e = n.charCodeAt(2)) || 120 === e) {
                            return NaN;
                        }
                    } else {
                        if (48 === o) {
                            switch (n.charCodeAt(1)) {
                                case 66:
                                case 98:
                                    r = 2, i = 49;
                                    break;
                                case 79:
                                case 111:
                                    r = 8, i = 55;
                                    break;
                                default:
                                    return +n;
                            }
                            for (var u, c = n.slice(2), l = 0, s = c.length; l < s; l++) {
                                if ((u = c.charCodeAt(l)) < 48 || u > i) {
                                    return NaN;
                                }
                            }
                            return parseInt(c, r);
                        }
                    }
                }
                return +n;
            };
        if (!p(' 0o1') || !p('0b1') || p('+0x1')) {
            p = function (t) {
                var n = arguments.length < 1
                        ? 0
                        : t,
                    e = this;
                return e instanceof p && (g
                    ? c((function () {
                        d.valueOf.call(e);
                    }))
                    : 'Number' != o(e))
                    ? u(new v(m(n)), e, p)
                    : m(n);
            };
            for (var x, b = e(8)
                ? l(v)
                : 'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'.split(','), M = 0; b.length > M; M++) {
                i(v, x = b[M]) && !i(p, x) && f(p, x, s(v, x));
            }
            p.prototype = d, d.constructor = p, e(11)(r, 'Number', p);
        }
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(25),
            o = e(94),
            u = e(69),
            a = 1..toFixed,
            c = Math.floor,
            l = [0, 0, 0, 0, 0, 0],
            s = 'Number.toFixed: incorrect invocation!',
            f = function (t, n) {
                for (var e = -1, r = n; ++e < 6;) {
                    r += t * l[e], l[e] = r % 1e7, r = c(r / 1e7);
                }
            },
            h = function (t) {
                for (var n = 6, e = 0; --n >= 0;) {
                    e += l[n], l[n] = c(e / t), e = e % t * 1e7;
                }
            },
            p = function () {
                for (var t = 6, n = ''; --t >= 0;) {
                    if ('' !== n || 0 === t || 0 !== l[t]) {
                        var e = String(l[t]);
                        n = '' === n
                            ? e
                            : n + u.call('0', 7 - e.length) + e;
                    }
                }
                return n;
            },
            v = function (t, n, e) {
                return 0 === n
                    ? e
                    : n % 2 == 1
                        ? v(t, n - 1, e * t)
                        : v(t * t, n / 2, e);
            };
        r(r.P + r.F * (!!a && ('0.000' !== 8e-5.toFixed(3) || '1' !== .9.toFixed(0) || '1.25' !== 1.255.toFixed(2) || '1000000000000000128' !== (0xde0b6b3a7640080).toFixed(0)) || !e(1)((function () {
            a.call({});
        }))), 'Number', {
            toFixed: function (t) {
                var n,
                    e,
                    r,
                    a,
                    c = o(this, s),
                    l = i(t),
                    d = '',
                    g = '0';
                if (l < 0 || l > 20) {
                    throw RangeError(s);
                }
                if (c != c) {
                    return 'NaN';
                }
                if (c <= -1e21 || c >= 1e21) {
                    return String(c);
                }
                if (c < 0 && (d = '-', c = -c), c > 1e-21) {
                    if (e = (n = function (t) {
                        for (var n = 0, e = t; e >= 4096;) {
                            n += 12, e /= 4096;
                        }
                        for (; e >= 2;) {
                            n += 1, e /= 2;
                        }
                        return n;
                    }(c * v(2, 69, 1)) - 69) < 0
                        ? c * v(2, -n, 1)
                        : c / v(2, n, 1), e *= 4503599627370496, (n = 52 - n) > 0) {
                        for (f(0, e), r = l; r >= 7;) {
                            f(1e7, 0), r -= 7;
                        }
                        for (f(v(10, r, 1), 0), r = n - 1; r >= 23;) {
                            h(1 << 23), r -= 23;
                        }
                        h(1 << r), f(1, 1), h(2), g = p();
                    } else {
                        f(0, e), f(1 << -n, 0), g = p() + u.call('0', l);
                    }
                }
                return l > 0
                    ? d + ((a = g.length) <= l
                    ? '0.' + u.call('0', l - a) + g
                    : g.slice(0, a - l) + '.' + g.slice(a - l))
                    : d + g;
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(1),
            o = e(94),
            u = 1..toPrecision;
        r(r.P + r.F * (i((function () {
            return '1' !== u.call(1, void 0);
        })) || !i((function () {
            u.call({});
        }))), 'Number', {
            toPrecision: function (t) {
                var n = o(this, 'Number#toPrecision: incorrect invocation!');
                return void 0 === t
                    ? u.call(n)
                    : u.call(n, t);
            }
        });
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Number', {EPSILON: Math.pow(2, -52)});
    }, function (t, n, e) {
        var r = e(0),
            i = e(2).isFinite;
        r(r.S, 'Number', {
            isFinite: function (t) {
                return 'number' == typeof t && i(t);
            }
        });
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Number', {isInteger: e(95)});
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Number', {
            isNaN: function (t) {
                return t != t;
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(95),
            o = Math.abs;
        r(r.S, 'Number', {
            isSafeInteger: function (t) {
                return i(t) && o(t) <= 9007199254740991;
            }
        });
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Number', {MAX_SAFE_INTEGER: 9007199254740991});
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Number', {MIN_SAFE_INTEGER: -9007199254740991});
    }, function (t, n, e) {
        var r = e(0),
            i = e(93);
        r(r.S + r.F * (Number.parseFloat != i), 'Number', {parseFloat: i});
    }, function (t, n, e) {
        var r = e(0),
            i = e(92);
        r(r.S + r.F * (Number.parseInt != i), 'Number', {parseInt: i});
    }, function (t, n, e) {
        var r = e(0),
            i = e(96),
            o = Math.sqrt,
            u = Math.acosh;
        r(r.S + r.F * !(u && 710 == Math.floor(u(Number.MAX_VALUE)) && u(1 / 0) == 1 / 0), 'Math', {
            acosh: function (t) {
                return (t = +t) < 1
                    ? NaN
                    : t > 94906265.62425156
                        ? Math.log(t) + Math.LN2
                        : i(t - 1 + o(t - 1) * o(t + 1));
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = Math.asinh;
        r(r.S + r.F * !(i && 1 / i(0) > 0), 'Math', {
            asinh: function t(n) {
                return isFinite(n = +n) && 0 != n
                    ? n < 0
                        ? -t(-n)
                        : Math.log(n + Math.sqrt(n * n + 1))
                    : n;
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = Math.atanh;
        r(r.S + r.F * !(i && 1 / i(-0) < 0), 'Math', {
            atanh: function (t) {
                return 0 == (t = +t)
                    ? t
                    : Math.log((1 + t) / (1 - t)) / 2;
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(70);
        r(r.S, 'Math', {
            cbrt: function (t) {
                return i(t = +t) * Math.pow(Math.abs(t), 1 / 3);
            }
        });
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Math', {
            clz32: function (t) {
                return (t >>>= 0)
                    ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E)
                    : 32;
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = Math.exp;
        r(r.S, 'Math', {
            cosh: function (t) {
                return (i(t = +t) + i(-t)) / 2;
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(71);
        r(r.S + r.F * (i != Math.expm1), 'Math', {expm1: i});
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Math', {fround: e(172)});
    }, function (t, n, e) {
        var r = e(70),
            i = Math.pow,
            o = i(2, -52),
            u = i(2, -23),
            a = i(2, 127) * (2 - u),
            c = i(2, -126);
        t.exports = Math.fround || function (t) {
            var n,
                e,
                i = Math.abs(t),
                l = r(t);
            return i < c
                ? l * function (t) {
                return t + 1 / o - 1 / o;
            }(i / c / u) * c * u
                : (e = (n = (1 + u / o) * i) - (n - i)) > a || e != e
                    ? l * (1 / 0)
                    : l * e;
        };
    }, function (t, n, e) {
        var r = e(0),
            i = Math.abs;
        r(r.S, 'Math', {
            hypot: function (t, n) {
                for (var e, r, o = 0, u = 0, a = arguments.length, c = 0; u < a;) {
                    c < (e = i(arguments[u++]))
                        ? (o = o * (r = c / e) * r + 1, c = e)
                        : o += e > 0
                            ? (r = e / c) * r
                            : e;
                }
                return c === 1 / 0
                    ? 1 / 0
                    : c * Math.sqrt(o);
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = Math.imul;
        r(r.S + r.F * e(1)((function () {
            return -5 != i(4294967295, 5) || 2 != i.length;
        })), 'Math', {
            imul: function (t, n) {
                var e = +t,
                    r = +n,
                    i = 65535 & e,
                    o = 65535 & r;
                return 0 | i * o + ((65535 & e >>> 16) * o + i * (65535 & r >>> 16) << 16 >>> 0);
            }
        });
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Math', {
            log10: function (t) {
                return Math.log(t) * Math.LOG10E;
            }
        });
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Math', {log1p: e(96)});
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Math', {
            log2: function (t) {
                return Math.log(t) / Math.LN2;
            }
        });
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Math', {sign: e(70)});
    }, function (t, n, e) {
        var r = e(0),
            i = e(71),
            o = Math.exp;
        r(r.S + r.F * e(1)((function () {
            return -2e-17 != !Math.sinh(-2e-17);
        })), 'Math', {
            sinh: function (t) {
                return Math.abs(t = +t) < 1
                    ? (i(t) - i(-t)) / 2
                    : (o(t - 1) - o(-t - 1)) * (Math.E / 2);
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(71),
            o = Math.exp;
        r(r.S, 'Math', {
            tanh: function (t) {
                var n = i(t = +t),
                    e = i(-t);
                return n == 1 / 0
                    ? 1
                    : e == 1 / 0
                        ? -1
                        : (n - e) / (o(t) + o(-t));
            }
        });
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Math', {
            trunc: function (t) {
                return (t > 0
                    ? Math.floor
                    : Math.ceil)(t);
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(33),
            o = String.fromCharCode,
            u = String.fromCodePoint;
        r(r.S + r.F * (!!u && 1 != u.length), 'String', {
            fromCodePoint: function (t) {
                for (var n, e = [], r = arguments.length, u = 0; r > u;) {
                    if (n = +arguments[u++], i(n, 1114111) !== n) {
                        throw RangeError(n + ' is not a valid code point');
                    }
                    e.push(n < 65536
                        ? o(n)
                        : o(55296 + ((n -= 65536) >> 10), n % 1024 + 56320));
                }
                return e.join('');
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(15),
            o = e(10);
        r(r.S, 'String', {
            raw: function (t) {
                for (var n = i(t.raw), e = o(n.length), r = arguments.length, u = [], a = 0; e > a;) {
                    u.push(String(n[a++])), a < r && u.push(String(arguments[a]));
                }
                return u.join('');
            }
        });
    }, function (t, n, e) {
        'use strict';
        e(50)('trim', (function (t) {
            return function () {
                return t(this, 3);
            };
        }));
    }, function (t, n, e) {
        'use strict';
        var r = e(97)(!0);
        e(72)(String, 'String', (function (t) {
            this._t = String(t), this._i = 0;
        }), (function () {
            var t,
                n = this._t,
                e = this._i;
            return e >= n.length
                ? {
                    value: void 0,
                    done: !0
                }
                : (t = r(n, e), this._i += t.length, {
                    value: t,
                    done: !1
                });
        }));
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(97)(!1);
        r(r.P, 'String', {
            codePointAt: function (t) {
                return i(this, t);
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(10),
            o = e(73),
            u = ''.endsWith;
        r(r.P + r.F * e(75)('endsWith'), 'String', {
            endsWith: function (t) {
                var n = o(this, t, 'endsWith'),
                    e = arguments.length > 1
                        ? arguments[1]
                        : void 0,
                    r = i(n.length),
                    a = void 0 === e
                        ? r
                        : Math.min(i(e), r),
                    c = String(t);
                return u
                    ? u.call(n, c, a)
                    : n.slice(a - c.length, a) === c;
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(73);
        r(r.P + r.F * e(75)('includes'), 'String', {
            includes: function (t) {
                return !!~i(this, t, 'includes').indexOf(t, arguments.length > 1
                    ? arguments[1]
                    : void 0);
            }
        });
    }, function (t, n, e) {
        var r = e(0);
        r(r.P, 'String', {repeat: e(69)});
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(10),
            o = e(73),
            u = ''.startsWith;
        r(r.P + r.F * e(75)('startsWith'), 'String', {
            startsWith: function (t) {
                var n = o(this, t, 'startsWith'),
                    e = i(Math.min(arguments.length > 1
                        ? arguments[1]
                        : void 0, n.length)),
                    r = String(t);
                return u
                    ? u.call(n, r, e)
                    : n.slice(e, e + r.length) === r;
            }
        });
    }, function (t, n, e) {
        'use strict';
        e(12)('anchor', (function (t) {
            return function (n) {
                return t(this, 'a', 'name', n);
            };
        }));
    }, function (t, n, e) {
        'use strict';
        e(12)('big', (function (t) {
            return function () {
                return t(this, 'big', '', '');
            };
        }));
    }, function (t, n, e) {
        'use strict';
        e(12)('blink', (function (t) {
            return function () {
                return t(this, 'blink', '', '');
            };
        }));
    }, function (t, n, e) {
        'use strict';
        e(12)('bold', (function (t) {
            return function () {
                return t(this, 'b', '', '');
            };
        }));
    }, function (t, n, e) {
        'use strict';
        e(12)('fixed', (function (t) {
            return function () {
                return t(this, 'tt', '', '');
            };
        }));
    }, function (t, n, e) {
        'use strict';
        e(12)('fontcolor', (function (t) {
            return function (n) {
                return t(this, 'font', 'color', n);
            };
        }));
    }, function (t, n, e) {
        'use strict';
        e(12)('fontsize', (function (t) {
            return function (n) {
                return t(this, 'font', 'size', n);
            };
        }));
    }, function (t, n, e) {
        'use strict';
        e(12)('italics', (function (t) {
            return function () {
                return t(this, 'i', '', '');
            };
        }));
    }, function (t, n, e) {
        'use strict';
        e(12)('link', (function (t) {
            return function (n) {
                return t(this, 'a', 'href', n);
            };
        }));
    }, function (t, n, e) {
        'use strict';
        e(12)('small', (function (t) {
            return function () {
                return t(this, 'small', '', '');
            };
        }));
    }, function (t, n, e) {
        'use strict';
        e(12)('strike', (function (t) {
            return function () {
                return t(this, 'strike', '', '');
            };
        }));
    }, function (t, n, e) {
        'use strict';
        e(12)('sub', (function (t) {
            return function () {
                return t(this, 'sub', '', '');
            };
        }));
    }, function (t, n, e) {
        'use strict';
        e(12)('sup', (function (t) {
            return function () {
                return t(this, 'sup', '', '');
            };
        }));
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Date', {
            now: function () {
                return (new Date).getTime();
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(16),
            o = e(27);
        r(r.P + r.F * e(1)((function () {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function () {
                    return 1;
                }
            });
        })), 'Date', {
            toJSON: function (t) {
                var n = i(this),
                    e = o(n);
                return 'number' != typeof e || isFinite(e)
                    ? n.toISOString()
                    : null;
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(207);
        r(r.P + r.F * (Date.prototype.toISOString !== i), 'Date', {toISOString: i});
    }, function (t, n, e) {
        'use strict';
        var r = e(1),
            i = Date.prototype.getTime,
            o = Date.prototype.toISOString,
            u = function (t) {
                return t > 9
                    ? t
                    : '0' + t;
            };
        t.exports = r((function () {
            return '0385-07-25T07:06:39.999Z' != o.call(new Date(-50000000000001));
        })) || !r((function () {
            o.call(new Date(NaN));
        }))
            ? function () {
                if (!isFinite(i.call(this))) {
                    throw RangeError('Invalid time value');
                }
                var t = this,
                    n = t.getUTCFullYear(),
                    e = t.getUTCMilliseconds(),
                    r = n < 0
                        ? '-'
                        : n > 9999
                            ? '+'
                            : '';
                return r + ('00000' + Math.abs(n)).slice(r
                    ? -6
                    : -4) + '-' + u(t.getUTCMonth() + 1) + '-' + u(t.getUTCDate()) + 'T' + u(t.getUTCHours()) + ':' + u(t.getUTCMinutes()) + ':' + u(t.getUTCSeconds()) + '.' + (e > 99
                    ? e
                    : '0' + u(e)) + 'Z';
            }
            : o;
    }, function (t, n, e) {
        var r = Date.prototype,
            i = r.toString,
            o = r.getTime;
        new Date(NaN) + '' != 'Invalid Date' && e(11)(r, 'toString', (function () {
            var t = o.call(this);
            return t == t
                ? i.call(this)
                : 'Invalid Date';
        }));
    }, function (t, n, e) {
        var r = e(6)('toPrimitive'),
            i = Date.prototype;
        r in i || e(14)(i, r, e(210));
    }, function (t, n, e) {
        'use strict';
        var r = e(5),
            i = e(27);
        t.exports = function (t) {
            if ('string' !== t && 'number' !== t && 'default' !== t) {
                throw TypeError('Incorrect hint');
            }
            return i(r(this), 'number' != t);
        };
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Array', {isArray: e(64)});
    }, function (t, n, e) {
        'use strict';
        var r = e(21),
            i = e(0),
            o = e(16),
            u = e(99),
            a = e(76),
            c = e(10),
            l = e(77),
            s = e(78);
        i(i.S + i.F * !e(51)((function (t) {
            Array.from(t);
        })), 'Array', {
            from: function (t) {
                var n,
                    e,
                    i,
                    f,
                    h = o(t),
                    p = 'function' == typeof this
                        ? this
                        : Array,
                    v = arguments.length,
                    d = v > 1
                        ? arguments[1]
                        : void 0,
                    g = void 0 !== d,
                    y = 0,
                    m = s(h);
                if (g && (d = r(d, v > 2
                    ? arguments[2]
                    : void 0, 2)), void 0 == m || p == Array && a(m)) {
                    for (e = new p(n = c(h.length)); n > y; y++) {
                        l(e, y, g
                            ? d(h[y], y)
                            : h[y]);
                    }
                } else {
                    for (f = m.call(h), e = new p; !(i = f.next()).done; y++) {
                        l(e, y, g
                            ? u(f, d, [i.value, y], !0)
                            : i.value);
                    }
                }
                return e.length = y, e;
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(77);
        r(r.S + r.F * e(1)((function () {
            function t() {
            }

            return !(Array.of.call(t) instanceof t);
        })), 'Array', {
            of: function () {
                for (var t = 0, n = arguments.length, e = new ('function' == typeof this
                    ? this
                    : Array)(n); n > t;) {
                    i(e, t, arguments[t++]);
                }
                return e.length = n, e;
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(15),
            o = [].join;
        r(r.P + r.F * (e(45) != Object || !e(17)(o)), 'Array', {
            join: function (t) {
                return o.call(i(this), void 0 === t
                    ? ','
                    : t);
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(65),
            o = e(23),
            u = e(33),
            a = e(10),
            c = [].slice;
        r(r.P + r.F * e(1)((function () {
            i && c.call(i);
        })), 'Array', {
            slice: function (t, n) {
                var e = a(this.length),
                    r = o(this);
                if (n = void 0 === n
                    ? e
                    : n, 'Array' == r) {
                    return c.call(this, t, n);
                }
                for (var i = u(t, e), l = u(n, e), s = a(l - i), f = new Array(s), h = 0; h < s; h++) {
                    f[h] = 'String' == r
                        ? this.charAt(i + h)
                        : this[i + h];
                }
                return f;
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(22),
            o = e(16),
            u = e(1),
            a = [].sort,
            c = [1, 2, 3];
        r(r.P + r.F * (u((function () {
            c.sort(void 0);
        })) || !u((function () {
            c.sort(null);
        })) || !e(17)(a)), 'Array', {
            sort: function (t) {
                return void 0 === t
                    ? a.call(o(this))
                    : a.call(o(this), i(t));
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(20)(0),
            o = e(17)([].forEach, !0);
        r(r.P + r.F * !o, 'Array', {
            forEach: function (t) {
                return i(this, t, arguments[1]);
            }
        });
    }, function (t, n, e) {
        var r = e(219);
        t.exports = function (t, n) {
            return new (r(t))(n);
        };
    }, function (t, n, e) {
        var r = e(3),
            i = e(64),
            o = e(6)('species');
        t.exports = function (t) {
            var n;
            return i(t) && ('function' != typeof (n = t.constructor) || n !== Array && !i(n.prototype) || (n = void 0), r(n) && null === (n = n[o]) && (n = void 0)), void 0 === n
                ? Array
                : n;
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(20)(1);
        r(r.P + r.F * !e(17)([].map, !0), 'Array', {
            map: function (t) {
                return i(this, t, arguments[1]);
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(20)(2);
        r(r.P + r.F * !e(17)([].filter, !0), 'Array', {
            filter: function (t) {
                return i(this, t, arguments[1]);
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(20)(3);
        r(r.P + r.F * !e(17)([].some, !0), 'Array', {
            some: function (t) {
                return i(this, t, arguments[1]);
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(20)(4);
        r(r.P + r.F * !e(17)([].every, !0), 'Array', {
            every: function (t) {
                return i(this, t, arguments[1]);
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(100);
        r(r.P + r.F * !e(17)([].reduce, !0), 'Array', {
            reduce: function (t) {
                return i(this, t, arguments.length, arguments[1], !1);
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(100);
        r(r.P + r.F * !e(17)([].reduceRight, !0), 'Array', {
            reduceRight: function (t) {
                return i(this, t, arguments.length, arguments[1], !0);
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(47)(!1),
            o = [].indexOf,
            u = !!o && 1 / [1].indexOf(1, -0) < 0;
        r(r.P + r.F * (u || !e(17)(o)), 'Array', {
            indexOf: function (t) {
                return u
                    ? o.apply(this, arguments) || 0
                    : i(this, t, arguments[1]);
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(15),
            o = e(25),
            u = e(10),
            a = [].lastIndexOf,
            c = !!a && 1 / [1].lastIndexOf(1, -0) < 0;
        r(r.P + r.F * (c || !e(17)(a)), 'Array', {
            lastIndexOf: function (t) {
                if (c) {
                    return a.apply(this, arguments) || 0;
                }
                var n = i(this),
                    e = u(n.length),
                    r = e - 1;
                for (arguments.length > 1 && (r = Math.min(r, o(arguments[1]))), r < 0 && (r = e + r); r >= 0; r--) {
                    if (r in n && n[r] === t) {
                        return r || 0;
                    }
                }
                return -1;
            }
        });
    }, function (t, n, e) {
        var r = e(0);
        r(r.P, 'Array', {copyWithin: e(101)}), e(40)('copyWithin');
    }, function (t, n, e) {
        var r = e(0);
        r(r.P, 'Array', {fill: e(79)}), e(40)('fill');
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(20)(5),
            o = !0;
        'find' in [] && Array(1).find((function () {
            o = !1;
        })), r(r.P + r.F * o, 'Array', {
            find: function (t) {
                return i(this, t, arguments.length > 1
                    ? arguments[1]
                    : void 0);
            }
        }), e(40)('find');
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(20)(6),
            o = 'findIndex',
            u = !0;
        o in [] && Array(1)[o]((function () {
            u = !1;
        })), r(r.P + r.F * u, 'Array', {
            findIndex: function (t) {
                return i(this, t, arguments.length > 1
                    ? arguments[1]
                    : void 0);
            }
        }), e(40)(o);
    }, function (t, n, e) {
        e(41)('Array');
    }, function (t, n, e) {
        var r = e(2),
            i = e(68),
            o = e(7).f,
            u = e(35).f,
            a = e(74),
            c = e(81),
            l = r.RegExp,
            s = l,
            f = l.prototype,
            h = /a/g,
            p = /a/g,
            v = new l(h) !== h;
        if (e(8) && (!v || e(1)((function () {
            return p[e(6)('match')] = !1, l(h) != h || l(p) == p || '/a/i' != l(h, 'i');
        })))) {
            l = function (t, n) {
                var e = this instanceof l,
                    r = a(t),
                    o = void 0 === n;
                return !e && r && t.constructor === l && o
                    ? t
                    : i(v
                        ? new s(r && !o
                            ? t.source
                            : t, n)
                        : s((r = t instanceof l)
                            ? t.source
                            : t, r && o
                            ? c.call(t)
                            : n), e
                        ? this
                        : f, l);
            };
            for (var d = function (t) {
                t in l || o(l, t, {
                    configurable: !0,
                    get: function () {
                        return s[t];
                    },
                    set: function (n) {
                        s[t] = n;
                    }
                });
            }, g = u(s), y = 0; g.length > y;) {
                d(g[y++]);
            }
            f.constructor = l, l.prototype = f, e(11)(r, 'RegExp', l);
        }
        e(41)('RegExp');
    }, function (t, n, e) {
        'use strict';
        e(103);
        var r = e(5),
            i = e(81),
            o = e(8),
            u = /./.toString,
            a = function (t) {
                e(11)(RegExp.prototype, 'toString', t, !0);
            };
        e(1)((function () {
            return '/a/b' != u.call({
                source: 'a',
                flags: 'b'
            });
        }))
            ? a((function () {
                var t = r(this);
                return '/'.concat(t.source, '/', 'flags' in t
                    ? t.flags
                    : !o && t instanceof RegExp
                        ? i.call(t)
                        : void 0);
            }))
            : 'toString' != u.name && a((function () {
            return u.call(this);
        }));
    }, function (t, n, e) {
        e(52)('match', 1, (function (t, n, e) {
            return [function (e) {
                'use strict';
                var r = t(this),
                    i = void 0 == e
                        ? void 0
                        : e[n];
                return void 0 !== i
                    ? i.call(e, r)
                    : new RegExp(e)[n](String(r));
            }, e];
        }));
    }, function (t, n, e) {
        e(52)('replace', 2, (function (t, n, e) {
            return [function (r, i) {
                'use strict';
                var o = t(this),
                    u = void 0 == r
                        ? void 0
                        : r[n];
                return void 0 !== u
                    ? u.call(r, o, i)
                    : e.call(String(o), r, i);
            }, e];
        }));
    }, function (t, n, e) {
        e(52)('search', 1, (function (t, n, e) {
            return [function (e) {
                'use strict';
                var r = t(this),
                    i = void 0 == e
                        ? void 0
                        : e[n];
                return void 0 !== i
                    ? i.call(e, r)
                    : new RegExp(e)[n](String(r));
            }, e];
        }));
    }, function (t, n, e) {
        e(52)('split', 2, (function (t, n, r) {
            'use strict';
            var i = e(74),
                o = r,
                u = [].push;
            if ('c' == 'abbc'.split(/(b)*/)[1] || 4 != 'test'.split(/(?:)/, -1).length || 2 != 'ab'.split(/(?:ab)*/).length || 4 != '.'.split(/(.?)(.?)/).length || '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
                var a = void 0 === /()??/.exec('')[1];
                r = function (t, n) {
                    var e = String(this);
                    if (void 0 === t && 0 === n) {
                        return [];
                    }
                    if (!i(t)) {
                        return o.call(e, t, n);
                    }
                    var r,
                        c,
                        l,
                        s,
                        f,
                        h = [],
                        p = (t.ignoreCase
                            ? 'i'
                            : '') + (t.multiline
                            ? 'm'
                            : '') + (t.unicode
                            ? 'u'
                            : '') + (t.sticky
                            ? 'y'
                            : ''),
                        v = 0,
                        d = void 0 === n
                            ? 4294967295
                            : n >>> 0,
                        g = new RegExp(t.source, p + 'g');
                    for (a || (r = new RegExp('^' + g.source + '$(?!\\s)', p)); (c = g.exec(e)) && !((l = c.index + c[0].length) > v && (h.push(e.slice(v, c.index)), !a && c.length > 1 && c[0].replace(r, (function () {
                        for (f = 1; f < arguments.length - 2; f++) {
                            void 0 === arguments[f] && (c[f] = void 0)
                        }
                    })), c.length > 1 && c.index < e.length && u.apply(h, c.slice(1)), s = c[0].length, v = l, h.length >= d));) {
                        g.lastIndex === c.index && g.lastIndex++;
                    }
                    return v === e.length
                        ? !s && g.test('') || h.push('')
                        : h.push(e.slice(v)), h.length > d
                        ? h.slice(0, d)
                        : h;
                };
            } else {
                '0'.split(void 0, 0).length && (r = function (t, n) {
                    return void 0 === t && 0 === n
                        ? []
                        : o.call(this, t, n);
                });
            }
            return [function (e, i) {
                var o = t(this),
                    u = void 0 == e
                        ? void 0
                        : e[n];
                return void 0 !== u
                    ? u.call(e, o, i)
                    : r.call(String(o), e, i);
            }, r];
        }));
    }, function (t, n, e) {
        var r = e(2),
            i = e(82).set,
            o = r.MutationObserver || r.WebKitMutationObserver,
            u = r.process,
            a = r.Promise,
            c = 'process' == e(23)(u);
        t.exports = function () {
            var t,
                n,
                e,
                l = function () {
                    var r,
                        i;
                    for (c && (r = u.domain) && r.exit(); t;) {
                        i = t.fn, t = t.next;
                        try {
                            i();
                        } catch (r) {
                            throw t
                                ? e()
                                : n = void 0, r;
                        }
                    }
                    n = void 0, r && r.enter();
                };
            if (c) {
                e = function () {
                    u.nextTick(l);
                };
            } else {
                if (!o || r.navigator && r.navigator.standalone) {
                    if (a && a.resolve) {
                        var s = a.resolve(void 0);
                        e = function () {
                            s.then(l);
                        };
                    } else {
                        e = function () {
                            i.call(r, l);
                        };
                    }
                } else {
                    var f = !0,
                        h = document.createTextNode('');
                    new o(l).observe(h, {characterData: !0}), e = function () {
                        h.data = f = !f;
                    };
                }
            }
            return function (r) {
                var i = {
                    fn: r,
                    next: void 0
                };
                n && (n.next = i), t || (t = i, e()), n = i;
            };
        };
    }, function (t, n) {
        t.exports = function (t) {
            try {
                return {
                    e: !1,
                    v: t()
                };
            } catch (t) {
                return {
                    e: !0,
                    v: t
                };
            }
        };
    }, function (t, n, e) {
        'use strict';
        var r = e(107),
            i = e(44);
        t.exports = e(56)('Map', (function (t) {
            return function () {
                return t(this, arguments.length > 0
                    ? arguments[0]
                    : void 0);
            };
        }), {
            get: function (t) {
                var n = r.getEntry(i(this, 'Map'), t);
                return n && n.v;
            },
            set: function (t, n) {
                return r.def(i(this, 'Map'), 0 === t
                    ? 0
                    : t, n);
            }
        }, r, !0);
    }, function (t, n, e) {
        'use strict';
        var r = e(107),
            i = e(44);
        t.exports = e(56)('Set', (function (t) {
            return function () {
                return t(this, arguments.length > 0
                    ? arguments[0]
                    : void 0);
            };
        }), {
            add: function (t) {
                return r.def(i(this, 'Set'), t = 0 === t
                    ? 0
                    : t, t);
            }
        }, r);
    }, function (t, n, e) {
        'use strict';
        var r,
            i = e(20)(0),
            o = e(11),
            u = e(28),
            a = e(89),
            c = e(108),
            l = e(3),
            s = e(1),
            f = e(44),
            h = u.getWeak,
            p = Object.isExtensible,
            v = c.ufstore,
            d = {},
            g = function (t) {
                return function () {
                    return t(this, arguments.length > 0
                        ? arguments[0]
                        : void 0);
                };
            },
            y = {
                get: function (t) {
                    if (l(t)) {
                        var n = h(t);
                        return !0 === n
                            ? v(f(this, 'WeakMap')).get(t)
                            : n
                                ? n[this._i]
                                : void 0;
                    }
                },
                set: function (t, n) {
                    return c.def(f(this, 'WeakMap'), t, n);
                }
            },
            m = t.exports = e(56)('WeakMap', g, y, c, !0, !0);
        s((function () {
            return 7 != (new m).set((Object.freeze || Object)(d), 7).get(d);
        })) && (a((r = c.getConstructor(g, 'WeakMap')).prototype, y), u.NEED = !0, i(['delete', 'has', 'get', 'set'], (function (t) {
            var n = m.prototype,
                e = n[t];
            o(n, t, (function (n, i) {
                if (l(n) && !p(n)) {
                    this._f || (this._f = new r);
                    var o = this._f[t](n, i);
                    return 'set' == t
                        ? this
                        : o;
                }
                return e.call(this, n, i);
            }));
        })));
    }, function (t, n, e) {
        'use strict';
        var r = e(108),
            i = e(44);
        e(56)('WeakSet', (function (t) {
            return function () {
                return t(this, arguments.length > 0
                    ? arguments[0]
                    : void 0);
            };
        }), {
            add: function (t) {
                return r.def(i(this, 'WeakSet'), t, !0);
            }
        }, r, !1, !0);
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(57),
            o = e(83),
            u = e(5),
            a = e(33),
            c = e(10),
            l = e(3),
            s = e(2).ArrayBuffer,
            f = e(54),
            h = o.ArrayBuffer,
            p = o.DataView,
            v = i.ABV && s.isView,
            d = h.prototype.slice,
            g = i.VIEW;
        r(r.G + r.W + r.F * (s !== h), {ArrayBuffer: h}), r(r.S + r.F * !i.CONSTR, 'ArrayBuffer', {
            isView: function (t) {
                return v && v(t) || l(t) && g in t;
            }
        }), r(r.P + r.U + r.F * e(1)((function () {
            return !new h(2).slice(1, void 0).byteLength;
        })), 'ArrayBuffer', {
            slice: function (t, n) {
                if (void 0 !== d && void 0 === n) {
                    return d.call(u(this), t);
                }
                for (var e = u(this).byteLength, r = a(t, e), i = a(void 0 === n
                    ? e
                    : n, e), o = new (f(this, h))(c(i - r)), l = new p(this), s = new p(o), v = 0; r < i;) {
                    s.setUint8(v++, l.getUint8(r++));
                }
                return o;
            }
        }), e(41)('ArrayBuffer');
    }, function (t, n, e) {
        var r = e(0);
        r(r.G + r.W + r.F * !e(57).ABV, {DataView: e(83).DataView});
    }, function (t, n, e) {
        e(26)('Int8', 1, (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r);
            };
        }));
    }, function (t, n, e) {
        e(26)('Uint8', 1, (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r);
            };
        }));
    }, function (t, n, e) {
        e(26)('Uint8', 1, (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r);
            };
        }), !0);
    }, function (t, n, e) {
        e(26)('Int16', 2, (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r);
            };
        }));
    }, function (t, n, e) {
        e(26)('Uint16', 2, (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r);
            };
        }));
    }, function (t, n, e) {
        e(26)('Int32', 4, (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r);
            };
        }));
    }, function (t, n, e) {
        e(26)('Uint32', 4, (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r);
            };
        }));
    }, function (t, n, e) {
        e(26)('Float32', 4, (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r);
            };
        }));
    }, function (t, n, e) {
        e(26)('Float64', 8, (function (t) {
            return function (n, e, r) {
                return t(this, n, e, r);
            };
        }));
    }, function (t, n, e) {
        var r = e(0),
            i = e(22),
            o = e(5),
            u = (e(2).Reflect || {}).apply,
            a = Function.apply;
        r(r.S + r.F * !e(1)((function () {
            u((function () {
            }));
        })), 'Reflect', {
            apply: function (t, n, e) {
                var r = i(t),
                    c = o(e);
                return u
                    ? u(r, n, c)
                    : a.call(r, n, c);
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(34),
            o = e(22),
            u = e(5),
            a = e(3),
            c = e(1),
            l = e(90),
            s = (e(2).Reflect || {}).construct,
            f = c((function () {
                function t() {
                }

                return !(s((function () {
                }), [], t) instanceof t);
            })),
            h = !c((function () {
                s((function () {
                }));
            }));
        r(r.S + r.F * (f || h), 'Reflect', {
            construct: function (t, n) {
                o(t), u(n);
                var e = arguments.length < 3
                    ? t
                    : o(arguments[2]);
                if (h && !f) {
                    return s(t, n, e);
                }
                if (t == e) {
                    switch (n.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(n[0]);
                        case 2:
                            return new t(n[0], n[1]);
                        case 3:
                            return new t(n[0], n[1], n[2]);
                        case 4:
                            return new t(n[0], n[1], n[2], n[3]);
                    }
                    var r = [null];
                    return r.push.apply(r, n), new (l.apply(t, r));
                }
                var c = e.prototype,
                    p = i(a(c)
                        ? c
                        : Object.prototype),
                    v = Function.apply.call(t, p, n);
                return a(v)
                    ? v
                    : p;
            }
        });
    }, function (t, n, e) {
        var r = e(7),
            i = e(0),
            o = e(5),
            u = e(27);
        i(i.S + i.F * e(1)((function () {
            Reflect.defineProperty(r.f({}, 1, {value: 1}), 1, {value: 2});
        })), 'Reflect', {
            defineProperty: function (t, n, e) {
                o(t), n = u(n, !0), o(e);
                try {
                    return r.f(t, n, e), !0;
                } catch (t) {
                    return !1;
                }
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(18).f,
            o = e(5);
        r(r.S, 'Reflect', {
            deleteProperty: function (t, n) {
                var e = i(o(t), n);
                return !(e && !e.configurable) && delete t[n];
            }
        });
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(5),
            o = function (t) {
                this._t = i(t), this._i = 0;
                var n,
                    e = this._k = [];
                for (n in t) {
                    e.push(n);
                }
            };
        e(98)(o, 'Object', (function () {
            var t,
                n = this._k;
            do {
                if (this._i >= n.length) {
                    return {
                        value: void 0,
                        done: !0
                    };
                }
            } while (!((t = n[this._i++]) in this._t));
            return {
                value: t,
                done: !1
            };
        })), r(r.S, 'Reflect', {
            enumerate: function (t) {
                return new o(t);
            }
        });
    }, function (t, n, e) {
        var r = e(18),
            i = e(36),
            o = e(13),
            u = e(0),
            a = e(3),
            c = e(5);
        u(u.S, 'Reflect', {
            get: function t(n, e) {
                var u,
                    l,
                    s = arguments.length < 3
                        ? n
                        : arguments[2];
                return c(n) === s
                    ? n[e]
                    : (u = r.f(n, e))
                        ? o(u, 'value')
                            ? u.value
                            : void 0 !== u.get
                                ? u.get.call(s)
                                : void 0
                        : a(l = i(n))
                            ? t(l, e, s)
                            : void 0;
            }
        });
    }, function (t, n, e) {
        var r = e(18),
            i = e(0),
            o = e(5);
        i(i.S, 'Reflect', {
            getOwnPropertyDescriptor: function (t, n) {
                return r.f(o(t), n);
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(36),
            o = e(5);
        r(r.S, 'Reflect', {
            getPrototypeOf: function (t) {
                return i(o(t));
            }
        });
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Reflect', {
            has: function (t, n) {
                return n in t;
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(5),
            o = Object.isExtensible;
        r(r.S, 'Reflect', {
            isExtensible: function (t) {
                return i(t), !o || o(t);
            }
        });
    }, function (t, n, e) {
        var r = e(0);
        r(r.S, 'Reflect', {ownKeys: e(110)});
    }, function (t, n, e) {
        var r = e(0),
            i = e(5),
            o = Object.preventExtensions;
        r(r.S, 'Reflect', {
            preventExtensions: function (t) {
                i(t);
                try {
                    return o && o(t), !0;
                } catch (t) {
                    return !1;
                }
            }
        });
    }, function (t, n, e) {
        var r = e(7),
            i = e(18),
            o = e(36),
            u = e(13),
            a = e(0),
            c = e(29),
            l = e(5),
            s = e(3);
        a(a.S, 'Reflect', {
            set: function t(n, e, a) {
                var f,
                    h,
                    p = arguments.length < 4
                        ? n
                        : arguments[3],
                    v = i.f(l(n), e);
                if (!v) {
                    if (s(h = o(n))) {
                        return t(h, e, a, p);
                    }
                    v = c(0);
                }
                if (u(v, 'value')) {
                    if (!1 === v.writable || !s(p)) {
                        return !1;
                    }
                    if (f = i.f(p, e)) {
                        if (f.get || f.set || !1 === f.writable) {
                            return !1;
                        }
                        f.value = a, r.f(p, e, f);
                    } else {
                        r.f(p, e, c(0, a));
                    }
                    return !0;
                }
                return void 0 !== v.set && (v.set.call(p, a), !0);
            }
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(66);
        i && r(r.S, 'Reflect', {
            setPrototypeOf: function (t, n) {
                i.check(t, n);
                try {
                    return i.set(t, n), !0;
                } catch (t) {
                    return !1;
                }
            }
        });
    }, function (t, n, e) {
        e(271), t.exports = e(9).Array.includes;
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(47)(!0);
        r(r.P, 'Array', {
            includes: function (t) {
                return i(this, t, arguments.length > 1
                    ? arguments[1]
                    : void 0);
            }
        }), e(40)('includes');
    }, function (t, n, e) {
        e(273), t.exports = e(9).String.padStart;
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(111),
            o = e(55);
        r(r.P + r.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), 'String', {
            padStart: function (t) {
                return i(this, t, arguments.length > 1
                    ? arguments[1]
                    : void 0, !0);
            }
        });
    }, function (t, n, e) {
        e(275), t.exports = e(9).String.padEnd;
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(111),
            o = e(55);
        r(r.P + r.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), 'String', {
            padEnd: function (t) {
                return i(this, t, arguments.length > 1
                    ? arguments[1]
                    : void 0, !1);
            }
        });
    }, function (t, n, e) {
        e(277), t.exports = e(61).f('asyncIterator');
    }, function (t, n, e) {
        e(85)('asyncIterator');
    }, function (t, n, e) {
        e(279), t.exports = e(9).Object.getOwnPropertyDescriptors;
    }, function (t, n, e) {
        var r = e(0),
            i = e(110),
            o = e(15),
            u = e(18),
            a = e(77);
        r(r.S, 'Object', {
            getOwnPropertyDescriptors: function (t) {
                for (var n, e, r = o(t), c = u.f, l = i(r), s = {}, f = 0; l.length > f;) {
                    void 0 !== (e = c(r, n = l[f++])) && a(s, n, e);
                }
                return s;
            }
        });
    }, function (t, n, e) {
        e(281), t.exports = e(9).Object.values;
    }, function (t, n, e) {
        var r = e(0),
            i = e(112)(!1);
        r(r.S, 'Object', {
            values: function (t) {
                return i(t);
            }
        });
    }, function (t, n, e) {
        e(283), t.exports = e(9).Object.entries;
    }, function (t, n, e) {
        var r = e(0),
            i = e(112)(!0);
        r(r.S, 'Object', {
            entries: function (t) {
                return i(t);
            }
        });
    }, function (t, n, e) {
        'use strict';
        e(104), e(285), t.exports = e(9).Promise.finally;
    }, function (t, n, e) {
        'use strict';
        var r = e(0),
            i = e(9),
            o = e(2),
            u = e(54),
            a = e(106);
        r(r.P + r.R, 'Promise', {
            finally: function (t) {
                var n = u(this, i.Promise || o.Promise),
                    e = 'function' == typeof t;
                return this.then(e
                    ? function (e) {
                        return a(n, t()).then((function () {
                            return e;
                        }));
                    }
                    : t, e
                    ? function (e) {
                        return a(n, t()).then((function () {
                            throw e;
                        }));
                    }
                    : t);
            }
        });
    }, function (t, n, e) {
        e(287), e(288), e(289), t.exports = e(9);
    }, function (t, n, e) {
        var r = e(2),
            i = e(0),
            o = e(55),
            u = [].slice,
            a = /MSIE .\./.test(o),
            c = function (t) {
                return function (n, e) {
                    var r = arguments.length > 2,
                        i = !!r && u.call(arguments, 2);
                    return t(r
                        ? function () {
                            ('function' == typeof n
                                ? n
                                : Function(n)).apply(this, i);
                        }
                        : n, e);
                };
            };
        i(i.G + i.B + i.F * a, {
            setTimeout: c(r.setTimeout),
            setInterval: c(r.setInterval)
        });
    }, function (t, n, e) {
        var r = e(0),
            i = e(82);
        r(r.G + r.B, {
            setImmediate: i.set,
            clearImmediate: i.clear
        });
    }, function (t, n, e) {
        for (var r = e(80), i = e(32), o = e(11), u = e(2), a = e(14), c = e(39), l = e(6), s = l('iterator'), f = l('toStringTag'), h = c.Array, p = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, v = i(p), d = 0; d < v.length; d++) {
            var g,
                y = v[d],
                m = p[y],
                x = u[y],
                b = x && x.prototype;
            if (b && (b[s] || a(b, s, h), b[f] || a(b, f, y), c[y] = h, m)) {
                for (g in r) {
                    b[g] || o(b, g, r[g], !0);
                }
            }
        }
    }, function (t, n) {
        !function (n) {
            'use strict';
            var e,
                r = Object.prototype,
                i = r.hasOwnProperty,
                o = 'function' == typeof Symbol
                    ? Symbol
                    : {},
                u = o.iterator || '@@iterator',
                a = o.asyncIterator || '@@asyncIterator',
                c = o.toStringTag || '@@toStringTag',
                l = 'object' == typeof t,
                s = n.regeneratorRuntime;
            if (s) {
                l && (t.exports = s);
            } else {
                (s = n.regeneratorRuntime = l
                    ? t.exports
                    : {}).wrap = b;
                var f = 'suspendedStart',
                    h = 'suspendedYield',
                    p = 'executing',
                    v = 'completed',
                    d = {},
                    g = {};
                g[u] = function () {
                    return this;
                };
                var y = Object.getPrototypeOf,
                    m = y && y(y(F([])));
                m && m !== r && i.call(m, u) && (g = m);
                var x = S.prototype = w.prototype = Object.create(g);
                _.prototype = x.constructor = S, S.constructor = _, S[c] = _.displayName = 'GeneratorFunction', s.isGeneratorFunction = function (t) {
                    var n = 'function' == typeof t && t.constructor;
                    return !!n && (n === _ || 'GeneratorFunction' === (n.displayName || n.name));
                }, s.mark = function (t) {
                    return Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, S)
                        : (t.__proto__ = S, c in t || (t[c] = 'GeneratorFunction')), t.prototype = Object.create(x), t;
                }, s.awrap = function (t) {
                    return {__await: t};
                }, E(N.prototype), N.prototype[a] = function () {
                    return this;
                }, s.AsyncIterator = N, s.async = function (t, n, e, r) {
                    var i = new N(b(t, n, e, r));
                    return s.isGeneratorFunction(n)
                        ? i
                        : i.next().then((function (t) {
                            return t.done
                                ? t.value
                                : i.next();
                        }));
                }, E(x), x[c] = 'Generator', x[u] = function () {
                    return this;
                }, x.toString = function () {
                    return '[object Generator]';
                }, s.keys = function (t) {
                    var n = [];
                    for (var e in t) {
                        n.push(e);
                    }
                    return n.reverse(), function e() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in t) {
                                return e.value = r, e.done = !1, e;
                            }
                        }
                        return e.done = !0, e;
                    };
                }, s.values = F, O.prototype = {
                    constructor: O,
                    reset: function (t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = 'next', this.arg = e, this.tryEntries.forEach(C), !t) {
                            for (var n in this) {
                                't' === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e);
                            }
                        }
                    },
                    stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ('throw' === t.type) {
                            throw t.arg;
                        }
                        return this.rval;
                    },
                    dispatchException: function (t) {
                        if (this.done) {
                            throw t;
                        }
                        var n = this;

                        function r(r, i) {
                            return a.type = 'throw', a.arg = t, n.next = r, i && (n.method = 'next', n.arg = e), !!i;
                        }

                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var u = this.tryEntries[o],
                                a = u.completion;
                            if ('root' === u.tryLoc) {
                                return r('end');
                            }
                            if (u.tryLoc <= this.prev) {
                                var c = i.call(u, 'catchLoc'),
                                    l = i.call(u, 'finallyLoc');
                                if (c && l) {
                                    if (this.prev < u.catchLoc) {
                                        return r(u.catchLoc, !0);
                                    }
                                    if (this.prev < u.finallyLoc) {
                                        return r(u.finallyLoc);
                                    }
                                } else {
                                    if (c) {
                                        if (this.prev < u.catchLoc) {
                                            return r(u.catchLoc, !0);
                                        }
                                    } else {
                                        if (!l) {
                                            throw new Error('try statement without catch or finally');
                                        }
                                        if (this.prev < u.finallyLoc) {
                                            return r(u.finallyLoc);
                                        }
                                    }
                                }
                            }
                        }
                    },
                    abrupt: function (t, n) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc <= this.prev && i.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                                var o = r;
                                break;
                            }
                        }
                        o && ('break' === t || 'continue' === t) && o.tryLoc <= n && n <= o.finallyLoc && (o = null);
                        var u = o
                            ? o.completion
                            : {};
                        return u.type = t, u.arg = n, o
                            ? (this.method = 'next', this.next = o.finallyLoc, d)
                            : this.complete(u);
                    },
                    complete: function (t, n) {
                        if ('throw' === t.type) {
                            throw t.arg;
                        }
                        return 'break' === t.type || 'continue' === t.type
                            ? this.next = t.arg
                            : "return" === t.type
                                ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end")
                                : "normal" === t.type && n && (this.next = n), d
                    },
                    finish: function (t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var e = this.tryEntries[n];
                            if (e.finallyLoc === t) {
                                return this.complete(e.completion, e.afterLoc), C(e), d
                            }
                        }
                    },
                    catch: function (t) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var e = this.tryEntries[n];
                            if (e.tryLoc === t) {
                                var r = e.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    C(e)
                                }
                                return i
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function (t, n, r) {
                        return this.delegate = {
                            iterator: F(t),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = e), d
                    }
                }
            }

            function b(t, n, e, r) {
                var i = n && n.prototype instanceof w
                        ? n
                        : w,
                    o = Object.create(i.prototype),
                    u = new O(r || []);
                return o._invoke = function (t, n, e) {
                    var r = f;
                    return function (i, o) {
                        if (r === p) {
                            throw new Error("Generator is already running");
                        }
                        if (r === v) {
                            if ("throw" === i) {
                                throw o;
                            }
                            return L()
                        }
                        for (e.method = i, e.arg = o; ;) {
                            var u = e.delegate;
                            if (u) {
                                var a = A(u, e);
                                if (a) {
                                    if (a === d) {
                                        continue;
                                    }
                                    return a
                                }
                            }
                            if ("next" === e.method) {
                                e.sent = e._sent = e.arg;
                            } else {
                                if ("throw" === e.method) {
                                    if (r === f) {
                                        throw r = v, e.arg;
                                    }
                                    e.dispatchException(e.arg)
                                } else {
                                    "return" === e.method && e.abrupt("return", e.arg);
                                }
                            }
                            r = p;
                            var c = M(t, n, e);
                            if ("normal" === c.type) {
                                if (r = e.done
                                    ? v
                                    : h, c.arg === d) {
                                    continue;
                                }
                                return {
                                    value: c.arg,
                                    done: e.done
                                }
                            }
                            "throw" === c.type && (r = v, e.method = "throw", e.arg = c.arg)
                        }
                    }
                }(t, e, u), o
            }

            function M(t, n, e) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(n, e)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }

            function w() {
            }

            function _() {
            }

            function S() {
            }

            function E(t) {
                ["next", "throw", "return"].forEach((function (n) {
                    t[n] = function (t) {
                        return this._invoke(n, t)
                    }
                }))
            }

            function N(t) {
                var n;
                this._invoke = function (e, r) {
                    function o() {
                        return new Promise((function (n, o) {
                            !function n(e, r, o, u) {
                                var a = M(t[e], t, r);
                                if ("throw" !== a.type) {
                                    var c = a.arg,
                                        l = c.value;
                                    return l && "object" == typeof l && i.call(l, "__await")
                                        ? Promise.resolve(l.__await).then((function (t) {
                                            n("next", t, o, u)
                                        }), (function (t) {
                                            n("throw", t, o, u)
                                        }))
                                        : Promise.resolve(l).then((function (t) {
                                            c.value = t, o(c)
                                        }), u)
                                }
                                u(a.arg)
                            }(e, r, n, o)
                        }))
                    }

                    return n = n
                        ? n.then(o, o)
                        : o()
                }
            }

            function A(t, n) {
                var r = t.iterator[n.method];
                if (r === e) {
                    if (n.delegate = null, "throw" === n.method) {
                        if (t.iterator.return && (n.method = "return", n.arg = e, A(t, n), "throw" === n.method)) {
                            return d;
                        }
                        n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return d
                }
                var i = M(r, t.iterator, n.arg);
                if ("throw" === i.type) {
                    return n.method = "throw", n.arg = i.arg, n.delegate = null, d;
                }
                var o = i.arg;
                return o
                    ? o.done
                        ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, d)
                        : o
                    : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, d)
            }

            function k(t) {
                var n = {tryLoc: t[0]};
                1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n)
            }

            function C(t) {
                var n = t.completion || {};
                n.type = "normal", delete n.arg, t.completion = n
            }

            function O(t) {
                this.tryEntries = [{tryLoc: "root"}], t.forEach(k, this), this.reset(!0)
            }

            function F(t) {
                if (t) {
                    var n = t[u];
                    if (n) {
                        return n.call(t);
                    }
                    if ("function" == typeof t.next) {
                        return t;
                    }
                    if (!isNaN(t.length)) {
                        var r = -1,
                            o = function n() {
                                for (; ++r < t.length;) {
                                    if (i.call(t, r)) {
                                        return n.value = t[r], n.done = !1, n;
                                    }
                                }
                                return n.value = e, n.done = !0, n
                            };
                        return o.next = o
                    }
                }
                return {next: L}
            }

            function L() {
                return {
                    value: e,
                    done: !0
                }
            }
        }(function () {
            return this
        }() || Function("return this")())
    }, function (t, n, e) {
        "use strict";
        e.r(n);
        var r = e(4),
            i = e.n(r),
            o = e(37),
            u = e.n(o),
            a = (e(114), "invalid-visualisation-message");
        var c = function (t, n, e, r, o, c) {
            if (o) {
                var s = {
                        size: {
                            width: 450,
                            height: 450
                        },
                        margin: {
                            top: 100,
                            right: 100,
                            bottom: 100,
                            left: 100
                        },
                        legendPosition: {
                            x: 20,
                            y: 20
                        },
                        color: i.a.scale.category10(),
                        colorOpacity: {
                            circle: .1,
                            area_low: .1,
                            area_med: .1,
                            area_high: .6
                        },
                        roundStrokes: !1,
                        maxValue: 1,
                        levels: 5,
                        dotRadius: 4,
                        labelFactor: 1.25,
                        wrapWidth: 100,
                        strokeWidth: 1.5,
                        legendDisplay: !0
                    },
                    f = o.map((function (t) {
                        return t.definition
                    }));
                if (void 0 !== n) {
                    for (var h in n) {
                        void 0 !== n[h] && (s[h] = n[h]);
                    }
                }
                var p,
                    v,
                    d = Math.max(s.maxValue, i.a.max(f, (function (t) {
                        return i.a.max(t.map((function (t) {
                            return t.value
                        })))
                    }))),
                    g = Math.min(0, i.a.min(f, (function (t) {
                        return i.a.min(t.map((function (t) {
                            return t.value
                        })))
                    })));
                !1 === r.range && (d = isNaN(r.maxValue)
                    ? 1
                    : r.maxValue, g = isNaN(r.minValue)
                    ? 0
                    : r.minValue), s.size.width < s.size.height
                    ? (p = s.size.width, v = s.size.width)
                    : (p = s.size.height, v = s.size.height);
                var y = f[0].map((function (t) {
                    return t.axis
                }));
                y.length > 100 && (y = y.slice(0, 100));
                var m = y.length,
                    x = Math.abs(Math.min(v / 2 - s.margin.left - s.margin.right, p / 2 - s.margin.top - s.margin.bottom)),
                    b = 2 * Math.PI / m,
                    M = i.a.scale.linear().range([0, x]).domain([g, d]),
                    w = function (t) {
                        return Number.isFinite(t)
                            ? M(t)
                            : 0
                    };
                i.a.select(t).select("svg").remove();
                var _ = "container_" + r.qInfo.qId;
                e.empty().append(u()("<div />").attr("id", _).width(s.size.width).height(s.size.height));
                var S = i.a.select("#".concat(_)).append("svg").attr("width", s.size.width).attr("height", s.size.height).classed("in-edit-mode", c._inEditState),
                    E = s.legendDisplay
                        ? s.size.width / 1.8
                        : s.size.width / 2,
                    N = S.append("g").attr("transform", "translate(" + E + "," + s.size.height / 2 + ")"),
                    A = N.append("g").attr("class", "axisWrapper"),
                    k = N.append("g").attr("class", "axisContainer"),
                    C = N.selectAll(".radarWrapper").data(f).enter().append("g").attr("class", "radarWrapper");
                A.selectAll(".levels").data(i.a.range(1, s.levels + 1).reverse()).enter().append("circle").attr("class", "gridCircle").attr("r", (function (t) {
                    return x / s.levels * t
                })).style("fill", "#CDCDCD").style("stroke", "#CDCDCD").style("fill-opacity", s.colorOpacity.circle);
                var O = k.selectAll(".axis").data(y).enter().append("g").attr("class", "axis");
                O.append("line").attr("x1", 0).attr("y1", 0).attr("x2", (function (t, n) {
                    return w(1.1 * d) * Math.cos(b * n - Math.PI / 2)
                })).attr("y2", (function (t, n) {
                    return w(1.1 * d) * Math.sin(b * n - Math.PI / 2)
                })).attr("class", "line").style("stroke", "white").style("stroke-width", "2px"), O.append("text").attr("class", "legend").style("font-size", "14px").attr("text-anchor", "middle").attr("dy", "0.35em").attr("x", (function (t, n) {
                    return w(d * s.labelFactor) * Math.cos(b * n - Math.PI / 2)
                })).attr("y", (function (t, n) {
                    return w(d * s.labelFactor) * Math.sin(b * n - Math.PI / 2)
                })).text((function (t) {
                    return t
                })).call((function (t, n) {
                    t.each((function () {
                        for (var t, e = i.a.select(this), r = e.text().split(/\s+/).reverse(), o = [], u = 0, a = e.attr("y"), c = e.attr("x"), l = parseFloat(e.attr("dy")), s = e.text(null).append("tspan").attr("x", c).attr("y", a).attr("dy", l + "em"); t = r.pop();) {
                            o.push(t), s.text(o.join(" ")), s.node().getComputedTextLength() > n && (o.pop(), s.text(o.join(" ")), o = [t], s = e.append("tspan").attr("x", c).attr("y", a).attr("dy", 1.1 * ++u + l + "em").text(t))
                        }
                    }))
                }), s.wrapWidth);
                var F = i.a.svg.line.radial().interpolate("linear-closed").radius((function (t) {
                    return Number.isFinite(t.value)
                        ? w(t.value)
                        : 1
                })).angle((function (t, n) {
                    return n * b
                }));
                s.roundStrokes && F.interpolate("cardinal-closed"), C.append("path").attr("class", (function (t) {
                    return "radarArea c" + l(t[0].radar_area)
                })).attr("d", (function (t) {
                    return F(t)
                })).style("fill", (function (t, n) {
                    return s.color(n)
                })).style("fill-opacity", s.colorOpacity.area).on("mouseover", (function () {
                    u()("#".concat(_)).css("cursor", "pointer"), i.a.selectAll("#".concat(_, " .radarArea")).transition().duration(200).style("fill-opacity", s.colorOpacity.area_out), i.a.select(this).transition().duration(200).style("fill-opacity", s.colorOpacity.area_over)
                })).on("click", (function (t) {
                    var n = !1;
                    t.find((function (t) {
                        !0 === t.dim1IsNull && (n = !0)
                    })), n || !0 === c.options.noInteraction || c.backendApi.selectValues(0, [t[0].radar_area_id], !0)
                })).on("mouseout", (function () {
                    u()("#" + _).css("cursor", "default"), i.a.selectAll("#".concat(_, " .radarArea")).transition().duration(200).style("fill-opacity", s.colorOpacity.area)
                })), C.append("path").attr("class", "radarStroke").attr("d", (function (t) {
                    return F(t)
                })).style("stroke-width", s.strokeWidth + "px").style("stroke", (function (t, n) {
                    return s.color(n)
                })).style("fill", "none"), C.selectAll(".radarCircle").data((function (t) {
                    return t
                })).enter().append("circle").attr("class", "radarCircle").attr("r", s.dotRadius).attr("cx", (function (t, n) {
                    return w(t.value) * Math.cos(b * n - Math.PI / 2)
                })).attr("cy", (function (t, n) {
                    return w(t.value) * Math.sin(b * n - Math.PI / 2)
                })).style("fill", (function (t, n, e) {
                    return s.color(e)
                })).style("fill-opacity", .8), N.selectAll(".radarCircleWrapper").data(f).enter().append("g").attr("class", "radarCircleWrapper").selectAll(".radarInvisibleCircle").data((function (t) {
                    return t
                })).enter().append("circle").attr("class", "radarInvisibleCircle").attr("r", 1.5 * s.dotRadius).attr("cx", (function (t, n) {
                    return w(t.value) * Math.cos(b * n - Math.PI / 2)
                })).attr("cy", (function (t, n) {
                    return w(t.value) * Math.sin(b * n - Math.PI / 2)
                })).style("fill", "none").style("pointer-events", "all").on("mouseover", (function (t) {
                    if (!c._inEditState) {
                        var e = parseFloat(i.a.select(this).attr("cx")) - 10,
                            r = parseFloat(i.a.select(this).attr("cy")) - 10;
                        L.attr("x", e).attr("y", r).text(t.radar_area + " : " + P(n.numberFormat[0], t.value * n.numberFormat[1]) + n.numberFormat[2]).transition().duration(200).style("opacity", 1)
                    }
                })).on("mouseout", (function () {
                    c._inEditState || L.transition().duration(200).style("opacity", 0)
                }));
                var L = N.append("text").attr("class", "tooltip").style("opacity", 0);
                if (N.selectAll(".axisLabel").data(i.a.range(1, s.levels + 1).reverse()).enter().append("text").attr("class", "axisLabel").attr("x", 4).attr("y", (function (t) {
                    return -t * x / s.levels
                })).attr("dy", "0.4em").style("font-size", "12px").attr("fill", "#000000").text((function (t) {
                    return P(n.numberFormat[0], (g + (d - g) * t / s.levels) * n.numberFormat[1]) + n.numberFormat[2]
                })), !(s.size.width / s.size.height < 1.5 && s.size.height < 380)) {
                    S.append("g").attr("class", "legendOrdinal").attr("transform", "translate(" + s.legendPosition.x + "," + s.legendPosition.y + ")");
                    var T = i.a.legend.color().shape("path", i.a.svg.symbol().type("circle").size(40)()).shapePadding(10).scale(s.color).labels(s.color.domain().map((function (t) {
                        return f[t][0].radar_area
                    }))).on("cellover", (function (t) {
                        !function (t) {
                            u()("#".concat(_)).css("cursor", "pointer"), i.a.selectAll("#".concat(_, " .radarArea")).transition().duration(200).style("fill-opacity", s.colorOpacity.area_out), i.a.select("#".concat(_, " .c") + l(f[t][0].radar_area)).transition().duration(200).style("fill-opacity", s.colorOpacity.area_over)
                        }(t)
                    })).on("cellclick", (function (t) {
                        !function (t) {
                            u()("#" + _).css("cursor", "default");
                            var n = !1;
                            f[t].find((function (t) {
                                !0 === t.dim1IsNull && (n = !0)
                            })), n || !0 === c.options.noInteraction || (i.a.selectAll("#".concat(_, " .radarArea")).transition().duration(200).style("fill-opacity", .9), c.backendApi.selectValues(0, [f[t][0].radar_area_id], !0))
                        }(t)
                    })).on("cellout", (function () {
                        u()("#" + _).css("cursor", "default"), i.a.selectAll("#".concat(_, " .radarArea")).transition().duration(200).style("fill-opacity", s.colorOpacity.area)
                    }));
                    1 !== r.qHyperCube.qDimensionInfo.length && 1 == s.legendDisplay && S.select(".legendOrdinal").call(T)
                }
            } else {
                !function (t) {
                    var n = document.createElement("div");
                    n.className = a, n.innerText = "The chart is not displayed because there might be an error with the data or the measure.", t.empty().append(n)
                }(e);
            }

            function P(t, n) {
                if (!t || isNaN(+n)) {
                    return n;
                }
                var e = (n = "-" == t.charAt(0)
                        ? -n
                        : +n) < 0
                        ? n = -n
                        : 0,
                    r = t.match(/[^\d\-\+#]/g),
                    i = r && r[r.length - 1] || ".",
                    o = r && r[1] && r[0] || ",";
                t = t.split(i), n = +(n = n.toFixed(t[1] && t[1].length)) + "";
                var u = t[1] && t[1].lastIndexOf("0"),
                    a = n.split(".");
                (!a[1] || a[1] && a[1].length <= u) && (n = (+n).toFixed(u + 1));
                var c = t[0].split(o);
                t[0] = c.join("");
                var l = t[0] && t[0].indexOf("0");
                if (l > -1) {
                    for (; a[0].length < t[0].length - l;) {
                        a[0] = "0" + a[0];
                    }
                } else {
                    0 == +a[0] && (a[0] = "");
                }
                (n = n.split("."))[0] = a[0];
                var s = c[1] && c[c.length - 1].length;
                if (s) {
                    for (var f = n[0], h = "", p = f.length % s, v = 0, d = f.length; v < d; v++) {
                        h += f.charAt(v), !((v - p + 1) % s) && v < d - s && (h += o);
                    }
                    n[0] = h
                }
                return n[1] = t[1] && n[1]
                    ? i + n[1]
                    : "", (e
                    ? "-"
                    : "") + n[0] + n[1]
            }
        };

        function l(t) {
            return t
                ? t.replace(/\s|\/|:|'|\.|\(|\)|#|@|\*|\[|\]|!|%|&|{|}|,|;|\?|`|\^|\<|\||\=|\$|"|\+|\>|\\|~/g, "")
                : ""
        }

        var s = function (t, n) {
            var e = function (t) {
                    for (var n = t.qHyperCube.qDataPages[0].qMatrix, e = [], r = {}, i = {}, o = [], u = [], a = [], c = [], l = 0; l < n.length; l++) {
                        -1 === a.indexOf(n[l][0].qElemNumber) && a.length < 100 && a.push(n[l][0].qElemNumber), -1 !== a.indexOf(n[l][0].qElemNumber) && c.push(n[l]);
                    }
                    return c.forEach((function (t) {
                        -1 === u.indexOf(t[1].qElemNumber) && u.length < 100 && (i[t[1].qElemNumber] = u.length, u.push(t[1].qElemNumber), o.push(t[1].qText))
                    })), c.forEach((function (t) {
                        void 0 === r[t[0].qElemNumber] && (r[t[0].qElemNumber] = e.length, e.push({
                            dim: t[0].qText,
                            dim_id: t[0].qElemNumber,
                            definition: u.map((function (n, e) {
                                return {
                                    axis_id: n,
                                    axis: o[e],
                                    radar_area_id: t[0].qElemNumber,
                                    radar_area: t[0].qText,
                                    value: NaN
                                }
                            }))
                        })), void 0 !== i[t[1].qElemNumber] && (e[r[t[0].qElemNumber]].definition[i[t[1].qElemNumber]].value = isNaN(t[2].qNum)
                            ? 0
                            : t[2].qNum), t[0].qIsNull && void 0 !== i[t[1].qElemNumber] && (e[r[t[0].qElemNumber]].definition[i[t[1].qElemNumber]].dim1IsNull = !0)
                    })), c.map((function (t) {
                        return t[2].qNum
                    })).every((function (t) {
                        return function (t) {
                            return !!t && (isNaN(t) || "NaN" === t)
                        }(t)
                    }))
                        ? null
                        : e
                }(n),
                r = n.ColorSchema,
                o = {
                    size: {
                        width: t.width(),
                        height: t.height()
                    },
                    margin: {
                        top: 0,
                        right: 10,
                        bottom: 40,
                        left: 10
                    },
                    legendPosition: {
                        x: 10,
                        y: 10
                    },
                    color: i.a.scale.ordinal().range(r),
                    colorOpacity: {
                        circle: .1,
                        area: .2,
                        area_out: .1,
                        area_over: .6,
                        area_click: .8
                    },
                    roundStrokes: n.strokeStyle,
                    maxValue: .6,
                    levels: 6,
                    dotRadius: 4,
                    labelFactor: 1.02,
                    wrapWidth: 50,
                    strokeWidth: 2.8,
                    legendDisplay: n.showLegend,
                    numberFormat: function (t) {
                        var n = [];
                        if (n[0] = "# ##0,00", n[1] = 1, n[2] = "", void 0 !== t.qHyperCube.qMeasureInfo[0].qNumFormat.qFmt) {
                            var e = t.qHyperCube.qMeasureInfo[0].qNumFormat.qType,
                                r = t.qHyperCube.qMeasureInfo[0].qNumFormat.qFmt,
                                i = t.qHyperCube.qMeasureInfo[0].qNumFormat.qDec,
                                o = t.qHyperCube.qMeasureInfo[0].qNumFormat.qFmt.replace(/%/g, "").trim();
                            "F" == e && (-1 === r.indexOf(i)
                                ? n[0] = r + i
                                : n[0] = o);
                            var u = r.replace(o, "").trim();
                            "%" == u && (n[1] = 100, n[2] = "%")
                        }
                        return n
                    }(n)
                };
            c(".radarChart", o, t, n, e, this)
        };
        e(119);
        window._babelPolyfill || e(124);
        var f = Object.freeze({
            SEQUENTIAL: Object.freeze(["#FEE391", "#FEC44F", "#FE9929", "#EC7014", "#CC4C02", "#993404", "#662506"]),
            SEQUENTIAL_REVERSE: Object.freeze(["#662506", "#993404", "#CC4C02", "#EC7014", "#FE9929", "#FEC44F", "#FEE391"]),
            DIVERGING_RDYLBU: Object.freeze(["#D73027", "#F46D43", "#FEE090", "#ABD9E9", "#74ADD1", "#4575B4"]),
            DIVERGING_BUYLRD: Object.freeze(["#D73027", "#FDAE61", "#ABD9E9", "#4575B4"]),
            BLUES: Object.freeze(["#DEEBf7", "#C6DBEF", "#9ECAE1", "#6BAED6", "#4292C6", "#2171B5", "#08519C", "#08306B"]),
            REDS: Object.freeze(["#FEE0D2", "#FCBBa1", "#FC9272", "#FB6A4A", "#EF3B2C", "#CB181D", "#A50F15", "#67000D"]),
            YLGNBU: Object.freeze(["#EDF8B1", "#C7E9B4", "#7FCDBB", "#41B6C4", "#1D91C0", "#225EA8", "#253494", "#081D58"]),
            TWELVE_COLORS: Object.freeze(["#332288", "#6699CC", "#88CCEE", "#44AA99", "#117733", "#999933", "#DDCC77", "#661100", "#CC6677", "#AA4466", "#882255", "#AA4499"]),
            TWELVE_COLORS_REVERSE: Object.freeze(["#332288", "#6699CC", "#88CCEE", "#44AA99", "#117733", "#999933", "#DDCC77", "#661100", "#CC6677", "#AA4466", "#882255", "#AA4499"].reverse()),
            BLUE_PURPLE: Object.freeze(["#1ABC9C", "#7F8C8D", "#2ECC71", "#BDC3C7", "#3498DB", "#C0392B", "#9B59B6", "#D35400", "#34495E", "#F39C12", "#16A085", "#95A5A6"]),
            BREEZE: Object.freeze(["#138185", "#26A0A7", "#65D3DA", "#79D69F", "#70BA6E", "#CBE989", "#EBF898", "#F9EC86", "#FAD144", "#EC983D", "#D76C6C", "#A54343"])
        });

        function h(t) {
            var n = t.getDimensions();
            n && n.length && n.forEach((function (t, n) {
                1 === n
                    ? (t.qOtherTotalSpec.qOtherMode = "OTHER_COUNTED", t.qOtherTotalSpec.qOtherCounted = {qv: "20"})
                    : delete t.qOtherTotalSpec
            }))
        }

        function p(t) {
            if (t.qHyperCubeDef) {
                var n = t.qHyperCubeDef.qDimensions,
                    e = t.qHyperCubeDef.qMeasures;
                2 === n.length && 1 === e.length && (t.qHyperCubeDef.qInterColumnSortOrder = [0, 1, 2])
            }
        }

        var v = {
                numberFormattingMode: {show: !1},
                numberFormattingType: {
                    type: "items",
                    options: function () {
                        return [{
                            value: "U",
                            translation: "Common.Auto"
                        }, {
                            value: "F",
                            translation: "properties.numberFormatting.types.number"
                        }]
                    }
                }
            },
            d = {
                type: "items",
                items: {
                    numberFormat: {
                        type: "items",
                        items: v
                    }
                }
            };
        Object.assign(d.items, Object.assign({}, v));
        n.default = {
            initialProperties: {
                qHyperCubeDef: {
                    qDimensions: [],
                    qMeasures: [],
                    qInitialDataFetch: [{
                        qWidth: 3,
                        qHeight: 3333
                    }]
                }
            },
            data: {
                dimensions: {
                    min: 2,
                    max: 2,
                    add: function (t, n, e) {
                        h(e), p(n)
                    },
                    remove: function (t, n, e) {
                        h(e)
                    },
                    move: function (t, n, e) {
                        h(e), p(n)
                    },
                    replace: function (t, n, e, r, i) {
                        h(i), p(r)
                    }
                },
                measures: {
                    min: 1,
                    max: 1
                }
            },
            support: {
                snapshot: !0,
                export: !0,
                exportData: !0
            },
            definition: {
                type: "items",
                component: "accordion",
                items: {
                    data: {
                        uses: "data",
                        items: {
                            dimensions: {disabledRef: ""},
                            measures: {
                                disabledRef: "",
                                items: {numberFormatting: d}
                            }
                        }
                    },
                    settings: {
                        uses: "settings",
                        items: {
                            design: {
                                label: "Design",
                                type: "items",
                                items: {
                                    Line: {
                                        ref: "strokeStyle",
                                        component: "dropdown",
                                        type: "boolean",
                                        label: "Stroke type",
                                        defaultValue: !0,
                                        options: [{
                                            value: !0,
                                            label: "Smooth"
                                        }, {
                                            value: !1,
                                            label: "Straight"
                                        }],
                                        show: !0
                                    },
                                    Range: {
                                        ref: "range",
                                        component: "switch",
                                        type: "boolean",
                                        translation: "Range",
                                        defaultValue: !0,
                                        trueOption: {
                                            value: !0,
                                            translation: "Auto"
                                        },
                                        falseOption: {
                                            value: !1,
                                            translation: "Custom"
                                        },
                                        show: !0
                                    },
                                    MaxValue: {
                                        ref: "maxValue",
                                        type: "number",
                                        expression: "optional",
                                        defaultValue: 1,
                                        show: function (t) {
                                            return !1 === t.range
                                        }
                                    },
                                    MinValue: {
                                        ref: "minValue",
                                        type: "number",
                                        expression: "optional",
                                        defaultValue: 0,
                                        show: function (t) {
                                            return !1 === t.range
                                        }
                                    },
                                    Legend: {
                                        ref: "showLegend",
                                        component: "switch",
                                        type: "boolean",
                                        translation: "Legend",
                                        defaultValue: !0,
                                        trueOption: {
                                            value: !0,
                                            translation: "properties.on"
                                        },
                                        falseOption: {
                                            value: !1,
                                            translation: "properties.off"
                                        },
                                        show: !0
                                    },
                                    colors: {
                                        ref: "ColorSchema",
                                        type: "string",
                                        component: "item-selection-list",
                                        label: "Color",
                                        show: !0,
                                        defaultValue: f.TWELVE_COLORS,
                                        items: [{
                                            component: "color-scale",
                                            colors: f.TWELVE_COLORS,
                                            value: f.TWELVE_COLORS,
                                            label: "12 colors"
                                        }, {
                                            component: "color-scale",
                                            colors: f.TWELVE_COLORS_REVERSE,
                                            value: f.TWELVE_COLORS_REVERSE,
                                            label: "12 colors (Reverse)"
                                        }, {
                                            component: "color-scale",
                                            colors: f.BLUE_PURPLE,
                                            value: f.BLUE_PURPLE,
                                            label: "Blue purple colors"
                                        }, {
                                            component: "color-scale",
                                            colors: f.BREEZE,
                                            value: f.BREEZE,
                                            label: "Breeze theme colors"
                                        }]
                                    }
                                }
                            }
                        }
                    },
                    about: {
                        component: "items",
                        label: "About",
                        items: {
                            header: {
                                label: "Radar chart",
                                style: "header",
                                component: "text"
                            },
                            paragraph1: {
                                label: "Radar chart is a two-dimensional chart that uses radical axes to show the\n              scoring of a measure in one dimension over another.",
                                component: "text"
                            },
                            paragraph2: {
                                label: "Radar chart is based upon an extension created by Brian Booden and VizMatt.",
                                component: "text"
                            }
                        }
                    }
                }
            },
            snapshot: {canTakeSnapshot: !0},
            paint: s
        }
    }])
}));
