const _ = (e) => {
  for (var t = 0, r = 0; r < e.length; r++) {
    var a = e.charCodeAt(r);
    t = (t << 5) - t + a, t = t & t;
  }
  return Math.abs(t);
}, S = (e, t) => Math.floor(e / Math.pow(10, t) % 10), w = (e, t) => !(S(e, t) % 2), n = (e, t, r) => {
  let a = e % t;
  return r && S(e, r) % 2 === 0 ? -a : a;
}, u = (e, t, r) => t[e % r], I = (e) => {
  if (!e)
    return "#FFFFFF";
  e.slice(0, 1) === "#" && (e = e.slice(1));
  var t = parseInt(e.substr(0, 2), 16), r = parseInt(e.substr(2, 2), 16), a = parseInt(e.substr(4, 2), 16), s = (t * 299 + r * 587 + a * 114) / 1e3;
  return s >= 128 ? "#000000" : "#FFFFFF";
}, y = {
  variant: "marble",
  colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
  name: "Clara Barton",
  square: !1,
  title: !1,
  size: 40
}, Z = 4, d = 80;
function F(e, t) {
  const r = _(e), a = t && t.length;
  return Array.from({ length: Z }, (o, l) => ({
    color: u(r + l, t, a),
    translateX: n(r * (l + 1), d / 2 - (l + 17), 1),
    translateY: n(r * (l + 1), d / 2 - (l + 17), 2),
    rotate: n(r * (l + 1), 360),
    isSquare: w(r, 2)
  }));
}
const z = {
  name: "avatar-bauhaus",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: d }),
  methods: {
    properties(e, t) {
      return F(e, t);
    },
    getSquareTransform() {
      var e, t, r, a, s, o;
      return "translate(" + ((t = (e = this.properties(this.name, this.colors)) == null ? void 0 : e[1]) == null ? void 0 : t.translateX) + " " + ((a = (r = this.properties(this.name, this.colors)) == null ? void 0 : r[1]) == null ? void 0 : a.translateY) + ") rotate(" + ((o = (s = this.properties(this.name, this.colors)) == null ? void 0 : s[1]) == null ? void 0 : o.rotate) + " " + d / 2 + " " + d / 2 + ")";
    },
    getCircleTransform() {
      var e, t, r, a;
      return "translate(" + ((t = (e = this.properties(this.name, this.colors)) == null ? void 0 : e[2]) == null ? void 0 : t.translateX) + " " + ((a = (r = this.properties(this.name, this.colors)) == null ? void 0 : r[2]) == null ? void 0 : a.translateY) + ")";
    },
    getLineTransform() {
      var e, t, r, a, s, o;
      return "translate(" + ((t = (e = this.properties(this.name, this.colors)) == null ? void 0 : e[3]) == null ? void 0 : t.translateX) + " " + ((a = (r = this.properties(this.name, this.colors)) == null ? void 0 : r[3]) == null ? void 0 : a.translateY) + ") rotate(" + ((o = (s = this.properties(this.name, this.colors)) == null ? void 0 : s[3]) == null ? void 0 : o.rotate) + " " + d / 2 + " " + d / 2 + ")";
    }
  }
};
function g(e, t, r, a, s, o, l, m) {
  var i = typeof e == "function" ? e.options : e;
  t && (i.render = t, i.staticRenderFns = r, i._compiled = !0), a && (i.functional = !0), o && (i._scopeId = "data-v-" + o);
  var h;
  if (l ? (h = function(c) {
    c = c || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !c && typeof __VUE_SSR_CONTEXT__ < "u" && (c = __VUE_SSR_CONTEXT__), s && s.call(this, c), c && c._registeredComponents && c._registeredComponents.add(l);
  }, i._ssrRegister = h) : s && (h = m ? function() {
    s.call(
      this,
      (i.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), h)
    if (i.functional) {
      i._injectStyles = h;
      var v = i.render;
      i.render = function(E, C) {
        return h.call(C), v(E, C);
      };
    } else {
      var x = i.beforeCreate;
      i.beforeCreate = x ? [].concat(x, h) : [h];
    }
  return {
    exports: e,
    options: i
  };
}
var P = function() {
  var a, s, o, l, m, i, h, v, x, c;
  var t = this, r = t._self._c;
  return r("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [r("title", [t._v(t._s(t.name))])] : t._e(), r("mask", { attrs: { id: "mask__bauhaus", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [r("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), r("g", { attrs: { mask: "url(#mask__bauhaus)" } }, [r("rect", { attrs: { width: t.SIZE, height: t.SIZE, fill: (s = (a = t.properties(t.name, t.colors)) == null ? void 0 : a[0]) == null ? void 0 : s.color } }), r("rect", { attrs: { x: (t.SIZE - 60) / 2, y: (t.SIZE - 20) / 2, width: t.SIZE, height: (l = (o = t.properties(t.name, t.colors)) == null ? void 0 : o[1]) != null && l.isSquare ? t.SIZE : t.SIZE / 8, fill: (i = (m = t.properties(t.name, t.colors)) == null ? void 0 : m[1]) == null ? void 0 : i.color, transform: t.getSquareTransform() } }), r("circle", { attrs: { cx: t.SIZE / 2, cy: t.SIZE / 2, fill: (v = (h = t.properties(t.name, t.colors)) == null ? void 0 : h[2]) == null ? void 0 : v.color, r: t.SIZE / 5, transform: t.getCircleTransform() } }), r("line", { attrs: { x1: 0, y1: t.SIZE / 2, x2: t.SIZE, y2: t.SIZE / 2, strokeWidth: 2, stroke: (c = (x = t.properties(t.name, t.colors)) == null ? void 0 : x[3]) == null ? void 0 : c.color, transform: t.getLineTransform() } })])], 2);
}, A = [], k = /* @__PURE__ */ g(
  z,
  P,
  A,
  !1,
  null,
  null,
  null,
  null
);
const $ = k.exports, p = 36;
function q(e, t) {
  const r = _(e), a = t && t.length, s = u(r, t, a), o = n(r, 10, 1), l = o < 5 ? o + p / 9 : o, m = n(r, 10, 2), i = m < 5 ? m + p / 9 : m;
  return {
    wrapperColor: s,
    faceColor: I(s),
    backgroundColor: u(r + 13, t, a),
    wrapperTranslateX: l,
    wrapperTranslateY: i,
    wrapperRotate: n(r, 360),
    wrapperScale: 1 + n(r, p / 12) / 10,
    isMouthOpen: w(r, 2),
    isCircle: w(r, 1),
    eyeSpread: n(r, 5),
    mouthSpread: n(r, 3),
    faceRotate: n(r, 10, 3),
    faceTranslateX: l > p / 6 ? l / 2 : n(r, 8, 1),
    faceTranslateY: i > p / 6 ? i / 2 : n(r, 7, 2)
  };
}
const T = {
  name: "avatar-beam",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: p }),
  methods: {
    data(e, t) {
      return q(e, t);
    },
    getRectTransform() {
      return "translate(" + this.data(this.name, this.colors).wrapperTranslateX + " " + this.data(this.name, this.colors).wrapperTranslateY + ") rotate(" + this.data(this.name, this.colors).wrapperRotate + " " + p / 2 + " " + p / 2 + ") scale(" + this.data(this.name, this.colors).wrapperScale + ")";
    },
    getGroupTransform() {
      return "translate(" + this.data(this.name, this.colors).faceTranslateX + " " + this.data(this.name, this.colors).faceTranslateY + ") rotate(" + this.data(this.name, this.colors).faceRotate + " " + p / 2 + " " + p / 2 + ")";
    },
    getOpenMouthData() {
      return "M15 " + (19 + this.data(this.name, this.colors).mouthSpread) + "c2 1 4 1 6 0";
    },
    getClosedMouthData() {
      return "M13," + (19 + this.data(this.name, this.colors).mouthSpread) + " a1,0.75 0 0,0 10,0";
    }
  }
};
var M = function() {
  var t = this, r = t._self._c;
  return r("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [r("title", [t._v(t._s(t.name))])] : t._e(), r("mask", { attrs: { id: "mask__beam", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [r("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), r("g", { attrs: { mask: "url(#mask__beam)" } }, [r("rect", { attrs: { width: t.SIZE, height: t.SIZE, fill: t.data(t.name, t.colors).backgroundColor } }), r("rect", { attrs: { x: "0", y: "0", width: t.SIZE, height: t.SIZE, transform: t.getRectTransform(), fill: t.data(t.name, t.colors).wrapperColor, rx: t.data(t.name, t.colors).isCircle ? t.SIZE : t.SIZE / 6 } }), r("g", { attrs: { transform: t.getGroupTransform() } }, [t.data(t.name, t.colors).isMouthOpen ? [r("path", { attrs: { fill: "none", strokeLinecap: "round", d: t.getOpenMouthData(), stroke: t.data(t.name, t.colors).faceColor } })] : [r("path", { attrs: { d: t.getClosedMouthData(), fill: t.data(t.name, t.colors).faceColor } })], r("rect", { attrs: { stroke: "none", x: 14 - t.data(t.name, t.colors).eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, fill: t.data(t.name, t.colors).faceColor } }), r("rect", { attrs: { stroke: "none", x: 20 + t.data(t.name, t.colors).eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, fill: t.data(t.name, t.colors).faceColor } })], 2)])], 2);
}, b = [], R = /* @__PURE__ */ g(
  T,
  M,
  b,
  !1,
  null,
  null,
  null,
  null
);
const U = R.exports, O = 3, f = 80;
function B(e, t) {
  const r = _(e), a = t && t.length;
  return Array.from({ length: O }, (o, l) => ({
    color: u(r + l, t, a),
    translateX: n(r * (l + 1), f / 10, 1),
    translateY: n(r * (l + 1), f / 10, 2),
    scale: 1.2 + n(r * (l + 1), f / 20) / 10,
    rotate: n(r * (l + 1), 360, 1)
  }));
}
const L = {
  name: "avatar-marble",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: f }),
  methods: {
    properties(e, t) {
      return B(e, t);
    },
    getPathOneTransform() {
      return "translate(" + this.properties(this.name, this.colors)[1].translateX + " " + this.properties(this.name, this.colors)[1].translateY + ") rotate(" + this.properties(this.name, this.colors)[1].rotate + " " + f / 2 + " " + f / 2 + ") scale(" + this.properties(this.name, this.colors)[2].scale + ")";
    },
    getPathTwoTransform() {
      return "translate(" + this.properties(this.name, this.colors)[2].translateX + " " + this.properties(this.name, this.colors)[2].translateY + ") rotate(" + this.properties(this.name, this.colors)[2].rotate + " " + f / 2 + " " + f / 2 + ") scale(" + this.properties(this.name, this.colors)[2].scale + ")";
    }
  }
};
var N = function() {
  var t = this, r = t._self._c;
  return r("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [r("title", [t._v(t._s(t.name))])] : t._e(), r("mask", { attrs: { id: "mask__marble", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [r("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), r("g", { attrs: { mask: "url(#mask__marble)" } }, [r("rect", { attrs: { width: t.SIZE, height: t.SIZE, fill: t.properties(t.name, t.colors)[0].color } }), r("path", { attrs: { filter: "url(#prefix__filter0_f)", d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z", fill: t.properties(t.name, t.colors)[1].color, transform: t.getPathOneTransform() } }), r("path", { style: {
    mixBlendMode: "overlay"
  }, attrs: { filter: "url(#prefix__filter0_f)", d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z", fill: t.properties(t.name, t.colors)[2].color, transform: t.getPathTwoTransform() } })]), r("defs", [r("filter", { attrs: { id: "prefix__filter0_f", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" } }, [r("feFlood", { attrs: { result: "BackgroundImageFix", floodOpacity: 0 } }), r("feBlend", { attrs: { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" } }), r("feGaussianBlur", { attrs: { result: "effect1_foregroundBlur", stdDeviation: 7 } })], 1)])], 2);
}, X = [], Y = /* @__PURE__ */ g(
  L,
  N,
  X,
  !1,
  null,
  null,
  null,
  null
);
const D = Y.exports, G = 64, H = 80;
function V(e, t) {
  const r = _(e), a = t && t.length;
  return Array.from(
    { length: G },
    (o, l) => u(r % l, t, a)
  );
}
const W = {
  name: "avatar-pixel",
  props: ["size", "title", "name", "square", "colors"],
  data: () => ({ SIZE: H }),
  methods: {
    pixelColors(e, t) {
      return V(e, t);
    }
  }
};
var J = function() {
  var t = this, r = t._self._c;
  return r("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [r("title", [t._v(t._s(t.name))])] : t._e(), r("mask", { attrs: { id: "mask__pixel", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [r("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), r("g", { attrs: { mask: "url(#mask__pixel)" } }, [r("rect", { attrs: { width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[0] } }), r("rect", { attrs: { x: 20, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[1] } }), r("rect", { attrs: { x: 40, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[2] } }), r("rect", { attrs: { x: 60, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[3] } }), r("rect", { attrs: { x: 10, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[4] } }), r("rect", { attrs: { x: 30, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[5] } }), r("rect", { attrs: { x: 50, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[6] } }), r("rect", { attrs: { x: 70, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[7] } }), r("rect", { attrs: { y: 10, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[8] } }), r("rect", { attrs: { y: 20, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[9] } }), r("rect", { attrs: { y: 30, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[10] } }), r("rect", { attrs: { y: 40, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[11] } }), r("rect", { attrs: { y: 50, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[12] } }), r("rect", { attrs: { y: 60, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[13] } }), r("rect", { attrs: { y: 70, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[14] } }), r("rect", { attrs: { x: 20, y: 10, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[15] } }), r("rect", { attrs: { x: 20, y: 20, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[16] } }), r("rect", { attrs: { x: 20, y: 30, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[17] } }), r("rect", { attrs: { x: 20, y: 40, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[18] } }), r("rect", { attrs: { x: 20, y: 50, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[19] } }), r("rect", { attrs: { x: 20, y: 60, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[20] } }), r("rect", { attrs: { x: 20, y: 70, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[21] } }), r("rect", { attrs: { x: 40, y: 10, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[22] } }), r("rect", { attrs: { x: 40, y: 20, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[23] } }), r("rect", { attrs: { x: 40, y: 30, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[24] } }), r("rect", { attrs: { x: 40, y: 40, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[25] } }), r("rect", { attrs: { x: 40, y: 50, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[26] } }), r("rect", { attrs: { x: 40, y: 60, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[27] } }), r("rect", { attrs: { x: 40, y: 70, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[28] } }), r("rect", { attrs: { x: 60, y: 10, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[29] } }), r("rect", { attrs: { x: 60, y: 20, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[30] } }), r("rect", { attrs: { x: 60, y: 30, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[31] } }), r("rect", { attrs: { x: 60, y: 40, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[32] } }), r("rect", { attrs: { x: 60, y: 50, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[33] } }), r("rect", { attrs: { x: 60, y: 60, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[34] } }), r("rect", { attrs: { x: 60, y: 70, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[35] } }), r("rect", { attrs: { x: 10, y: 10, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[36] } }), r("rect", { attrs: { x: 10, y: 20, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[37] } }), r("rect", { attrs: { x: 10, y: 30, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[38] } }), r("rect", { attrs: { x: 10, y: 40, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[39] } }), r("rect", { attrs: { x: 10, y: 50, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[40] } }), r("rect", { attrs: { x: 10, y: 60, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[41] } }), r("rect", { attrs: { x: 10, y: 70, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[42] } }), r("rect", { attrs: { x: 30, y: 10, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[43] } }), r("rect", { attrs: { x: 30, y: 20, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[44] } }), r("rect", { attrs: { x: 30, y: 30, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[45] } }), r("rect", { attrs: { x: 30, y: 40, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[46] } }), r("rect", { attrs: { x: 30, y: 50, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[47] } }), r("rect", { attrs: { x: 30, y: 60, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[48] } }), r("rect", { attrs: { x: 30, y: 70, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[49] } }), r("rect", { attrs: { x: 50, y: 10, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[50] } }), r("rect", { attrs: { x: 50, y: 20, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[51] } }), r("rect", { attrs: { x: 50, y: 30, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[52] } }), r("rect", { attrs: { x: 50, y: 40, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[53] } }), r("rect", { attrs: { x: 50, y: 50, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[54] } }), r("rect", { attrs: { x: 50, y: 60, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[55] } }), r("rect", { attrs: { x: 50, y: 70, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[56] } }), r("rect", { attrs: { x: 70, y: 10, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[57] } }), r("rect", { attrs: { x: 70, y: 20, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[58] } }), r("rect", { attrs: { x: 70, y: 30, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[59] } }), r("rect", { attrs: { x: 70, y: 40, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[60] } }), r("rect", { attrs: { x: 70, y: 50, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[61] } }), r("rect", { attrs: { x: 70, y: 60, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[62] } }), r("rect", { attrs: { x: 70, y: 70, width: 10, height: 10, fill: t.pixelColors(t.name, t.colors)[63] } })])], 2);
}, K = [], Q = /* @__PURE__ */ g(
  W,
  J,
  K,
  !1,
  null,
  null,
  null,
  null
);
const j = Q.exports, tt = 90, rt = 5;
function et(e, t) {
  const r = _(t), a = e && e.length, s = Array.from(
    { length: rt },
    (l, m) => u(r + m, e, a)
  ), o = [];
  return o[0] = s[0], o[1] = s[1], o[2] = s[1], o[3] = s[2], o[4] = s[2], o[5] = s[3], o[6] = s[3], o[7] = s[0], o[8] = s[4], o;
}
const at = {
  name: "avatar-ring",
  props: ["size", "title", "name", "square", "colors"],
  data: () => ({ SIZE: tt }),
  methods: {
    ringColors(e, t) {
      return et(t, e);
    }
  }
};
var st = function() {
  var t = this, r = t._self._c;
  return r("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [r("title", [t._v(t._s(t.name))])] : t._e(), r("mask", { attrs: { id: "mask__ring", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [r("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), r("g", { attrs: { mask: "url(#mask__ring)" } }, [r("path", { attrs: { d: "M0 0h90v45H0z", fill: t.ringColors(t.name, t.colors)[0] } }), r("path", { attrs: { d: "M0 45h90v45H0z", fill: t.ringColors(t.name, t.colors)[1] } }), r("path", { attrs: { d: "M83 45a38 38 0 00-76 0h76z", fill: t.ringColors(t.name, t.colors)[2] } }), r("path", { attrs: { d: "M83 45a38 38 0 01-76 0h76z", fill: t.ringColors(t.name, t.colors)[3] } }), r("path", { attrs: { d: "M77 45a32 32 0 10-64 0h64z", fill: t.ringColors(t.name, t.colors)[4] } }), r("path", { attrs: { d: "M77 45a32 32 0 11-64 0h64z", fill: t.ringColors(t.name, t.colors)[5] } }), r("path", { attrs: { d: "M71 45a26 26 0 00-52 0h52z", fill: t.ringColors(t.name, t.colors)[6] } }), r("path", { attrs: { d: "M71 45a26 26 0 01-52 0h52z", fill: t.ringColors(t.name, t.colors)[7] } }), r("circle", { attrs: { cx: 45, cy: 45, r: 23, fill: t.ringColors(t.name, t.colors)[8] } })])], 2);
}, ot = [], lt = /* @__PURE__ */ g(
  at,
  st,
  ot,
  !1,
  null,
  null,
  null,
  null
);
const it = lt.exports, nt = 4, ht = 80;
function ct(e, t) {
  const r = _(e), a = t && t.length;
  return Array.from(
    { length: nt },
    (o, l) => u(r + l, t, a)
  );
}
const mt = {
  name: "avatar-sunset",
  props: ["name", "size", "title", "square", "colors"],
  data: () => ({ SIZE: ht }),
  computed: {
    formattedName() {
      return this.name.replace(/\s/g, "");
    }
  },
  methods: {
    sunsetColors(e, t) {
      return ct(e, t);
    },
    getPaintFill0() {
      return "url(#gradient_paint0_linear_" + this.formattedName + ")";
    },
    getPaintFill1() {
      return "url(#gradient_paint1_linear_" + this.formattedName + ")";
    },
    getPaintId0() {
      return "gradient_paint0_linear_" + this.formattedName;
    },
    getPaintId1() {
      return "gradient_paint1_linear_" + this.formattedName;
    }
  }
};
var pt = function() {
  var t = this, r = t._self._c;
  return r("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [r("title", [t._v(t._s(t.name))])] : t._e(), r("mask", { attrs: { id: "mask__sunset", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [r("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), r("g", { attrs: { mask: "url(#mask__sunset)" } }, [r("path", { attrs: { d: "M0 0h80v40H0z", fill: t.getPaintFill0() } }), r("path", { attrs: { d: "M0 40h80v40H0z", fill: t.getPaintFill1() } })]), r("defs", [r("linearGradient", { attrs: { gradientUnits: "userSpaceOnUse", id: t.getPaintId0(), x1: t.SIZE / 2, y1: 0, x2: t.SIZE / 2, y2: t.SIZE / 2 } }, [r("stop", { attrs: { "stop-color": t.sunsetColors(t.name, t.colors)[0] } }), r("stop", { attrs: { offset: 1, "stop-color": t.sunsetColors(t.name, t.colors)[1] } })], 1), r("linearGradient", { attrs: { gradientUnits: "userSpaceOnUse", id: t.getPaintId1(), x1: t.SIZE / 2, y1: t.SIZE / 2, x2: t.SIZE / 2, y2: t.SIZE } }, [r("stop", { attrs: { "stop-color": t.sunsetColors(t.name, t.colors)[2] } }), r("stop", { attrs: { offset: 1, "stop-color": t.sunsetColors(t.name, t.colors)[3] } })], 1)], 1)], 2);
}, ft = [], dt = /* @__PURE__ */ g(
  mt,
  pt,
  ft,
  !1,
  null,
  null,
  null,
  null
);
const ut = dt.exports, gt = {
  name: "avatar",
  components: {
    AvatarBauhaus: $,
    AvatarBeam: U,
    AvatarMarble: D,
    AvatarPixel: j,
    AvatarRing: it,
    AvatarSunset: ut
  },
  props: ["variant", "colors", "name", "square", "title", "size"],
  data: () => ({ defaultAvatarProps: y })
};
var _t = function() {
  var t = this, r = t._self._c;
  return r("div", [t.variant === "bauhaus" ? [r("avatar-bauhaus", { attrs: { colors: t.colors || t.defaultAvatarProps.colors, name: t.name || t.defaultAvatarProps.name, square: t.square || t.defaultAvatarProps.square, title: t.title || t.defaultAvatarProps.title, size: t.size || t.defaultAvatarProps.size } })] : t._e(), t.variant === "beam" ? [r("avatar-beam", { attrs: { colors: t.colors || t.defaultAvatarProps.colors, name: t.name || t.defaultAvatarProps.name, square: t.square || t.defaultAvatarProps.square, title: t.title || t.defaultAvatarProps.title, size: t.size || t.defaultAvatarProps.size } })] : t._e(), t.variant === "marble" ? [r("avatar-marble", { attrs: { colors: t.colors || t.defaultAvatarProps.colors, name: t.name || t.defaultAvatarProps.name, square: t.square || t.defaultAvatarProps.square, title: t.title || t.defaultAvatarProps.title, size: t.size || t.defaultAvatarProps.size } })] : t._e(), t.variant === "pixel" ? [r("avatar-pixel", { attrs: { colors: t.colors || t.defaultAvatarProps.colors, name: t.name || t.defaultAvatarProps.name, square: t.square || t.defaultAvatarProps.square, title: t.title || t.defaultAvatarProps.title, size: t.size || t.defaultAvatarProps.size } })] : t._e(), t.variant === "ring" ? [r("avatar-ring", { attrs: { colors: t.colors || t.defaultAvatarProps.colors, name: t.name || t.defaultAvatarProps.name, square: t.square || t.defaultAvatarProps.square, title: t.title || t.defaultAvatarProps.title, size: t.size || t.defaultAvatarProps.size } })] : t._e(), t.variant === "sunset" ? [r("avatar-sunset", { attrs: { colors: t.colors || t.defaultAvatarProps.colors, name: t.name || t.defaultAvatarProps.name, square: t.square || t.defaultAvatarProps.square, title: t.title || t.defaultAvatarProps.title, size: t.size || t.defaultAvatarProps.size } })] : t._e()], 2);
}, xt = [], vt = /* @__PURE__ */ g(
  gt,
  _t,
  xt,
  !1,
  null,
  null,
  null,
  null
);
const wt = vt.exports;
export {
  wt as Avatar
};
