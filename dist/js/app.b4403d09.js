(function (e) {
  function n(n) {
    for (
      var o, c, u = n[0], l = n[1], s = n[2], f = 0, p = [];
      f < u.length;
      f++
    )
      (c = u[f]),
        Object.prototype.hasOwnProperty.call(t, c) && t[c] && p.push(t[c][0]),
        (t[c] = 0);
    for (o in l) Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
    a && a(n);
    while (p.length) p.shift()();
    return i.push.apply(i, s || []), r();
  }
  function r() {
    for (var e, n = 0; n < i.length; n++) {
      for (var r = i[n], o = !0, u = 1; u < r.length; u++) {
        var l = r[u];
        0 !== t[l] && (o = !1);
      }
      o && (i.splice(n--, 1), (e = c((c.s = r[0]))));
    }
    return e;
  }
  var o = {},
    t = { app: 0 },
    i = [];
  function c(n) {
    if (o[n]) return o[n].exports;
    var r = (o[n] = { i: n, l: !1, exports: {} });
    return e[n].call(r.exports, r, r.exports, c), (r.l = !0), r.exports;
  }
  (c.m = e),
    (c.c = o),
    (c.d = function (e, n, r) {
      c.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: r });
    }),
    (c.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (c.t = function (e, n) {
      if ((1 & n && (e = c(e)), 8 & n)) return e;
      if (4 & n && "object" === typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (c.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & n && "string" != typeof e)
      )
        for (var o in e)
          c.d(
            r,
            o,
            function (n) {
              return e[n];
            }.bind(null, o)
          );
      return r;
    }),
    (c.n = function (e) {
      var n =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return c.d(n, "a", n), n;
    }),
    (c.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n);
    }),
    (c.p = "/");
  var u = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = u.push.bind(u);
  (u.push = n), (u = u.slice());
  for (var s = 0; s < u.length; s++) n(u[s]);
  var a = l;
  i.push([0, "chunk-vendors"]), r();
})({
  0: function (e, n, r) {
    e.exports = r("56d7");
  },
  "56d7": function (e, n, r) {
    "use strict";
    r.r(n);
    r("e260"), r("e6cf"), r("cca6"), r("a79d");
    var o = r("7a23");
    function t(e, n, r, t, i, c) {
      return (
        Object(o["d"])(),
        Object(o["b"])("section", null, [
          Object(o["c"])(
            "p",
            null,
            "This button has " + Object(o["e"])(i.likes) + " likes!",
            1
          ),
          Object(o["c"])(
            "button",
            {
              onClick:
                n[0] ||
                (n[0] = function (e) {
                  return c.likeAndSubscribe();
                }),
            },
            "Like & Subscribe"
          ),
        ])
      );
    }
    var i = {
      data: function () {
        return { likes: 0 };
      },
      methods: {
        likeAndSubscribe: function () {
          this.likes++, alert("Thanks! Have some cake");
        },
      },
    };
    i.render = t;
    var c = i,
      u = r("9483");
    Object(u["a"])("".concat("/", "service-worker.js"), {
      ready: function () {
        console.log(
          "App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"
        );
      },
      registered: function () {
        console.log("Service worker has been registered.");
      },
      cached: function () {
        console.log("Content has been cached for offline use.");
      },
      updatefound: function () {
        console.log("New content is downloading.");
      },
      updated: function () {
        console.log("New content is available; please refresh.");
      },
      offline: function () {
        console.log(
          "No internet connection found. App is running in offline mode."
        );
      },
      error: function (e) {
        console.error("Error during service worker registration:", e);
      },
    }),
      Object(o["a"])(c).mount("#app");
  },
});
//# sourceMappingURL=app.b4403d09.js.map
