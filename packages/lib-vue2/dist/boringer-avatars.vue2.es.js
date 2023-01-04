const x = (r) => {
  for (var t = 0, e = 0; e < r.length; e++) {
    var s = r.charCodeAt(e);
    t = (t << 5) - t + s, t = t & t;
  }
  return Math.abs(t);
}, y = (r, t) => Math.floor(r / Math.pow(10, t) % 10), v = (r, t) => !(y(r, t) % 2), n = (r, t, e) => {
  let s = r % t;
  return e && y(r, e) % 2 === 0 ? -s : s;
}, m = (r, t, e) => t[r % e], F = (r) => {
  if (!r)
    return "#FFFFFF";
  r.slice(0, 1) === "#" && (r = r.slice(1));
  var t = parseInt(r.substr(0, 2), 16), e = parseInt(r.substr(2, 2), 16), s = parseInt(r.substr(4, 2), 16), a = (t * 299 + e * 587 + s * 114) / 1e3;
  return a >= 128 ? "#000000" : "#FFFFFF";
}, k = [
  "pixel",
  "bauhaus",
  "ring",
  "beam",
  "sunset",
  "marble",
  "geometric",
  "abstract",
  void 0
], E = {
  geometric: "beam",
  abstract: "bauhaus"
};
function I(r) {
  return r ? Object.keys(E).includes(r || "") ? E[r || ""] || "marble" : r && k.includes(r) ? r : "marble" : "marble";
}
const h = {
  variant: "marble",
  colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
  name: "Clara Barton",
  square: !1,
  title: !1,
  size: 40
}, z = 4, u = 80;
function $(r, t) {
  const e = x(r), s = t && t.length;
  return Array.from({ length: z }, (i, l) => ({
    color: m(e + l, t, s),
    translateX: n(e * (l + 1), u / 2 - (l + 17), 1),
    translateY: n(e * (l + 1), u / 2 - (l + 17), 2),
    rotate: n(e * (l + 1), 360),
    isSquare: v(e, 2)
  }));
}
const q = {
  name: "avatar-bauhaus",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: u }),
  computed: {
    properties() {
      return $(this.name, this.colors);
    }
  },
  methods: {
    getSquareTransform() {
      var r, t, e, s, a, i;
      return "translate(" + ((t = (r = this.properties) == null ? void 0 : r[1]) == null ? void 0 : t.translateX) + " " + ((s = (e = this.properties) == null ? void 0 : e[1]) == null ? void 0 : s.translateY) + ") rotate(" + ((i = (a = this.properties) == null ? void 0 : a[1]) == null ? void 0 : i.rotate) + " " + u / 2 + " " + u / 2 + ")";
    },
    getCircleTransform() {
      var r, t, e, s;
      return "translate(" + ((t = (r = this.properties) == null ? void 0 : r[2]) == null ? void 0 : t.translateX) + " " + ((s = (e = this.properties) == null ? void 0 : e[2]) == null ? void 0 : s.translateY) + ")";
    },
    getLineTransform() {
      var r, t, e, s, a, i;
      return "translate(" + ((t = (r = this.properties) == null ? void 0 : r[3]) == null ? void 0 : t.translateX) + " " + ((s = (e = this.properties) == null ? void 0 : e[3]) == null ? void 0 : s.translateY) + ") rotate(" + ((i = (a = this.properties) == null ? void 0 : a[3]) == null ? void 0 : i.rotate) + " " + u / 2 + " " + u / 2 + ")";
    }
  }
};
function g(r, t, e, s, a, i, l, d) {
  var o = typeof r == "function" ? r.options : r;
  t && (o.render = t, o.staticRenderFns = e, o._compiled = !0), s && (o.functional = !0), i && (o._scopeId = "data-v-" + i);
  var c;
  if (l ? (c = function(p) {
    p = p || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !p && typeof __VUE_SSR_CONTEXT__ < "u" && (p = __VUE_SSR_CONTEXT__), a && a.call(this, p), p && p._registeredComponents && p._registeredComponents.add(l);
  }, o._ssrRegister = c) : a && (c = d ? function() {
    a.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : a), c)
    if (o.functional) {
      o._injectStyles = c;
      var C = o.render;
      o.render = function(Z, S) {
        return c.call(S), C(Z, S);
      };
    } else {
      var w = o.beforeCreate;
      o.beforeCreate = w ? [].concat(w, c) : [c];
    }
  return {
    exports: r,
    options: o
  };
}
var b = function() {
  var s, a, i, l, d, o, c, C, w, p;
  var t = this, e = t._self._c;
  return e("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [e("title", [t._v(t._s(t.name))])] : t._e(), e("mask", { attrs: { id: "mask__bauhaus", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [e("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), e("g", { attrs: { mask: "url(#mask__bauhaus)" } }, [e("rect", { attrs: { width: t.SIZE, height: t.SIZE, fill: (a = (s = t.properties) == null ? void 0 : s[0]) == null ? void 0 : a.color } }), e("rect", { attrs: { x: (t.SIZE - 60) / 2, y: (t.SIZE - 20) / 2, width: t.SIZE, height: (l = (i = t.properties) == null ? void 0 : i[1]) != null && l.isSquare ? t.SIZE : t.SIZE / 8, fill: (o = (d = t.properties) == null ? void 0 : d[1]) == null ? void 0 : o.color, transform: t.getSquareTransform() } }), e("circle", { attrs: { cx: t.SIZE / 2, cy: t.SIZE / 2, fill: (C = (c = t.properties) == null ? void 0 : c[2]) == null ? void 0 : C.color, r: t.SIZE / 5, transform: t.getCircleTransform() } }), e("line", { attrs: { x1: 0, y1: t.SIZE / 2, x2: t.SIZE, y2: t.SIZE / 2, strokeWidth: 2, stroke: (p = (w = t.properties) == null ? void 0 : w[3]) == null ? void 0 : p.color, transform: t.getLineTransform() } })])], 2);
}, T = [], M = /* @__PURE__ */ g(
  q,
  b,
  T,
  !1,
  null,
  null,
  null,
  null
);
const U = M.exports, f = 36;
function R(r, t) {
  const e = x(r), s = t && t.length, a = m(e, t, s), i = n(e, 10, 1), l = i < 5 ? i + f / 9 : i, d = n(e, 10, 2), o = d < 5 ? d + f / 9 : d;
  return {
    wrapperColor: a,
    faceColor: F(a),
    backgroundColor: m(e + 13, t, s),
    wrapperTranslateX: l,
    wrapperTranslateY: o,
    wrapperRotate: n(e, 360),
    wrapperScale: 1 + n(e, f / 12) / 10,
    isMouthOpen: v(e, 2),
    isCircle: v(e, 1),
    eyeSpread: n(e, 5),
    mouthSpread: n(e, 3),
    faceRotate: n(e, 10, 3),
    faceTranslateX: l > f / 6 ? l / 2 : n(e, 8, 1),
    faceTranslateY: o > f / 6 ? o / 2 : n(e, 7, 2)
  };
}
const O = {
  name: "avatar-beam",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: f }),
  computed: {
    data() {
      return R(this.name, this.colors);
    }
  },
  methods: {
    getRectTransform() {
      return "translate(" + this.data.wrapperTranslateX + " " + this.data.wrapperTranslateY + ") rotate(" + this.data.wrapperRotate + " " + f / 2 + " " + f / 2 + ") scale(" + this.data.wrapperScale + ")";
    },
    getGroupTransform() {
      return "translate(" + this.data.faceTranslateX + " " + this.data.faceTranslateY + ") rotate(" + this.data.faceRotate + " " + f / 2 + " " + f / 2 + ")";
    },
    getOpenMouthData() {
      return "M15 " + (19 + this.data.mouthSpread) + "c2 1 4 1 6 0";
    },
    getClosedMouthData() {
      return "M13," + (19 + this.data.mouthSpread) + " a1,0.75 0 0,0 10,0";
    }
  }
};
var B = function() {
  var t = this, e = t._self._c;
  return e("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [e("title", [t._v(t._s(t.name))])] : t._e(), e("mask", { attrs: { id: "mask__beam", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [e("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), e("g", { attrs: { mask: "url(#mask__beam)" } }, [e("rect", { attrs: { width: t.SIZE, height: t.SIZE, fill: t.data.backgroundColor } }), e("rect", { attrs: { x: "0", y: "0", width: t.SIZE, height: t.SIZE, transform: t.getRectTransform(), fill: t.data.wrapperColor, rx: t.data.isCircle ? t.SIZE : t.SIZE / 6 } }), e("g", { attrs: { transform: t.getGroupTransform() } }, [t.data.isMouthOpen ? [e("path", { attrs: { fill: "none", strokeLinecap: "round", d: t.getOpenMouthData(), stroke: t.data.faceColor } })] : [e("path", { attrs: { d: t.getClosedMouthData(), fill: t.data.faceColor } })], e("rect", { attrs: { stroke: "none", x: 14 - t.data.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, fill: t.data.faceColor } }), e("rect", { attrs: { stroke: "none", x: 20 + t.data.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, fill: t.data.faceColor } })], 2)])], 2);
}, L = [], P = /* @__PURE__ */ g(
  O,
  B,
  L,
  !1,
  null,
  null,
  null,
  null
);
const A = P.exports, N = 3, _ = 80;
function X(r, t) {
  const e = x(r), s = t && t.length;
  return Array.from({ length: N }, (i, l) => ({
    color: m(e + l, t, s),
    translateX: n(e * (l + 1), _ / 10, 1),
    translateY: n(e * (l + 1), _ / 10, 2),
    scale: 1.2 + n(e * (l + 1), _ / 20) / 10,
    rotate: n(e * (l + 1), 360, 1)
  }));
}
const V = {
  name: "avatar-marble",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: _ }),
  computed: {
    properties() {
      return X(this.name, this.colors);
    }
  },
  methods: {
    getPathOneTransform() {
      return "translate(" + this.properties[1].translateX + " " + this.properties[1].translateY + ") rotate(" + this.properties[1].rotate + " " + _ / 2 + " " + _ / 2 + ") scale(" + this.properties[2].scale + ")";
    },
    getPathTwoTransform() {
      return "translate(" + this.properties[2].translateX + " " + this.properties[2].translateY + ") rotate(" + this.properties[2].rotate + " " + _ / 2 + " " + _ / 2 + ") scale(" + this.properties[2].scale + ")";
    }
  }
};
var Y = function() {
  var t = this, e = t._self._c;
  return e("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [e("title", [t._v(t._s(t.name))])] : t._e(), e("mask", { attrs: { id: "mask__marble", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [e("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), e("g", { attrs: { mask: "url(#mask__marble)" } }, [e("rect", { attrs: { width: t.SIZE, height: t.SIZE, fill: t.properties[0].color } }), e("path", { attrs: { filter: "url(#prefix__filter0_f)", d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z", fill: t.properties[1].color, transform: t.getPathOneTransform() } }), e("path", { style: {
    mixBlendMode: "overlay"
  }, attrs: { filter: "url(#prefix__filter0_f)", d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z", fill: t.properties[2].color, transform: t.getPathTwoTransform() } })]), e("defs", [e("filter", { attrs: { id: "prefix__filter0_f", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" } }, [e("feFlood", { attrs: { result: "BackgroundImageFix", floodOpacity: 0 } }), e("feBlend", { attrs: { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" } }), e("feGaussianBlur", { attrs: { result: "effect1_foregroundBlur", stdDeviation: 7 } })], 1)])], 2);
}, D = [], H = /* @__PURE__ */ g(
  V,
  Y,
  D,
  !1,
  null,
  null,
  null,
  null
);
const G = H.exports, W = 64, J = 80;
function K(r, t) {
  const e = x(r), s = t && t.length;
  return Array.from(
    { length: W },
    (i, l) => m(e % l, t, s)
  );
}
const Q = {
  name: "avatar-pixel",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: J }),
  computed: {
    pixelColors() {
      return K(this.name, this.colors);
    }
  }
};
var j = function() {
  var t = this, e = t._self._c;
  return e("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [e("title", [t._v(t._s(t.name))])] : t._e(), e("mask", { attrs: { id: "mask__pixel", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [e("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), e("g", { attrs: { mask: "url(#mask__pixel)" } }, [e("rect", { attrs: { width: 10, height: 10, fill: t.pixelColors[0] } }), e("rect", { attrs: { x: 20, width: 10, height: 10, fill: t.pixelColors[1] } }), e("rect", { attrs: { x: 40, width: 10, height: 10, fill: t.pixelColors[2] } }), e("rect", { attrs: { x: 60, width: 10, height: 10, fill: t.pixelColors[3] } }), e("rect", { attrs: { x: 10, width: 10, height: 10, fill: t.pixelColors[4] } }), e("rect", { attrs: { x: 30, width: 10, height: 10, fill: t.pixelColors[5] } }), e("rect", { attrs: { x: 50, width: 10, height: 10, fill: t.pixelColors[6] } }), e("rect", { attrs: { x: 70, width: 10, height: 10, fill: t.pixelColors[7] } }), e("rect", { attrs: { y: 10, width: 10, height: 10, fill: t.pixelColors[8] } }), e("rect", { attrs: { y: 20, width: 10, height: 10, fill: t.pixelColors[9] } }), e("rect", { attrs: { y: 30, width: 10, height: 10, fill: t.pixelColors[10] } }), e("rect", { attrs: { y: 40, width: 10, height: 10, fill: t.pixelColors[11] } }), e("rect", { attrs: { y: 50, width: 10, height: 10, fill: t.pixelColors[12] } }), e("rect", { attrs: { y: 60, width: 10, height: 10, fill: t.pixelColors[13] } }), e("rect", { attrs: { y: 70, width: 10, height: 10, fill: t.pixelColors[14] } }), e("rect", { attrs: { x: 20, y: 10, width: 10, height: 10, fill: t.pixelColors[15] } }), e("rect", { attrs: { x: 20, y: 20, width: 10, height: 10, fill: t.pixelColors[16] } }), e("rect", { attrs: { x: 20, y: 30, width: 10, height: 10, fill: t.pixelColors[17] } }), e("rect", { attrs: { x: 20, y: 40, width: 10, height: 10, fill: t.pixelColors[18] } }), e("rect", { attrs: { x: 20, y: 50, width: 10, height: 10, fill: t.pixelColors[19] } }), e("rect", { attrs: { x: 20, y: 60, width: 10, height: 10, fill: t.pixelColors[20] } }), e("rect", { attrs: { x: 20, y: 70, width: 10, height: 10, fill: t.pixelColors[21] } }), e("rect", { attrs: { x: 40, y: 10, width: 10, height: 10, fill: t.pixelColors[22] } }), e("rect", { attrs: { x: 40, y: 20, width: 10, height: 10, fill: t.pixelColors[23] } }), e("rect", { attrs: { x: 40, y: 30, width: 10, height: 10, fill: t.pixelColors[24] } }), e("rect", { attrs: { x: 40, y: 40, width: 10, height: 10, fill: t.pixelColors[25] } }), e("rect", { attrs: { x: 40, y: 50, width: 10, height: 10, fill: t.pixelColors[26] } }), e("rect", { attrs: { x: 40, y: 60, width: 10, height: 10, fill: t.pixelColors[27] } }), e("rect", { attrs: { x: 40, y: 70, width: 10, height: 10, fill: t.pixelColors[28] } }), e("rect", { attrs: { x: 60, y: 10, width: 10, height: 10, fill: t.pixelColors[29] } }), e("rect", { attrs: { x: 60, y: 20, width: 10, height: 10, fill: t.pixelColors[30] } }), e("rect", { attrs: { x: 60, y: 30, width: 10, height: 10, fill: t.pixelColors[31] } }), e("rect", { attrs: { x: 60, y: 40, width: 10, height: 10, fill: t.pixelColors[32] } }), e("rect", { attrs: { x: 60, y: 50, width: 10, height: 10, fill: t.pixelColors[33] } }), e("rect", { attrs: { x: 60, y: 60, width: 10, height: 10, fill: t.pixelColors[34] } }), e("rect", { attrs: { x: 60, y: 70, width: 10, height: 10, fill: t.pixelColors[35] } }), e("rect", { attrs: { x: 10, y: 10, width: 10, height: 10, fill: t.pixelColors[36] } }), e("rect", { attrs: { x: 10, y: 20, width: 10, height: 10, fill: t.pixelColors[37] } }), e("rect", { attrs: { x: 10, y: 30, width: 10, height: 10, fill: t.pixelColors[38] } }), e("rect", { attrs: { x: 10, y: 40, width: 10, height: 10, fill: t.pixelColors[39] } }), e("rect", { attrs: { x: 10, y: 50, width: 10, height: 10, fill: t.pixelColors[40] } }), e("rect", { attrs: { x: 10, y: 60, width: 10, height: 10, fill: t.pixelColors[41] } }), e("rect", { attrs: { x: 10, y: 70, width: 10, height: 10, fill: t.pixelColors[42] } }), e("rect", { attrs: { x: 30, y: 10, width: 10, height: 10, fill: t.pixelColors[43] } }), e("rect", { attrs: { x: 30, y: 20, width: 10, height: 10, fill: t.pixelColors[44] } }), e("rect", { attrs: { x: 30, y: 30, width: 10, height: 10, fill: t.pixelColors[45] } }), e("rect", { attrs: { x: 30, y: 40, width: 10, height: 10, fill: t.pixelColors[46] } }), e("rect", { attrs: { x: 30, y: 50, width: 10, height: 10, fill: t.pixelColors[47] } }), e("rect", { attrs: { x: 30, y: 60, width: 10, height: 10, fill: t.pixelColors[48] } }), e("rect", { attrs: { x: 30, y: 70, width: 10, height: 10, fill: t.pixelColors[49] } }), e("rect", { attrs: { x: 50, y: 10, width: 10, height: 10, fill: t.pixelColors[50] } }), e("rect", { attrs: { x: 50, y: 20, width: 10, height: 10, fill: t.pixelColors[51] } }), e("rect", { attrs: { x: 50, y: 30, width: 10, height: 10, fill: t.pixelColors[52] } }), e("rect", { attrs: { x: 50, y: 40, width: 10, height: 10, fill: t.pixelColors[53] } }), e("rect", { attrs: { x: 50, y: 50, width: 10, height: 10, fill: t.pixelColors[54] } }), e("rect", { attrs: { x: 50, y: 60, width: 10, height: 10, fill: t.pixelColors[55] } }), e("rect", { attrs: { x: 50, y: 70, width: 10, height: 10, fill: t.pixelColors[56] } }), e("rect", { attrs: { x: 70, y: 10, width: 10, height: 10, fill: t.pixelColors[57] } }), e("rect", { attrs: { x: 70, y: 20, width: 10, height: 10, fill: t.pixelColors[58] } }), e("rect", { attrs: { x: 70, y: 30, width: 10, height: 10, fill: t.pixelColors[59] } }), e("rect", { attrs: { x: 70, y: 40, width: 10, height: 10, fill: t.pixelColors[60] } }), e("rect", { attrs: { x: 70, y: 50, width: 10, height: 10, fill: t.pixelColors[61] } }), e("rect", { attrs: { x: 70, y: 60, width: 10, height: 10, fill: t.pixelColors[62] } }), e("rect", { attrs: { x: 70, y: 70, width: 10, height: 10, fill: t.pixelColors[63] } })])], 2);
}, tt = [], et = /* @__PURE__ */ g(
  Q,
  j,
  tt,
  !1,
  null,
  null,
  null,
  null
);
const rt = et.exports, st = 90, at = 5;
function it(r, t) {
  const e = x(t), s = r && r.length, a = Array.from(
    { length: at },
    (l, d) => m(e + d, r, s)
  ), i = [];
  return i[0] = a[0], i[1] = a[1], i[2] = a[1], i[3] = a[2], i[4] = a[2], i[5] = a[3], i[6] = a[3], i[7] = a[0], i[8] = a[4], i;
}
const lt = {
  name: "avatar-ring",
  props: ["colors", "name", "size", "title", "square"],
  data: () => ({ SIZE: st }),
  computed: {
    ringColors() {
      return it(this.colors, this.name);
    }
  }
};
var ot = function() {
  var t = this, e = t._self._c;
  return e("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [e("title", [t._v(t._s(t.name))])] : t._e(), e("mask", { attrs: { id: "mask__ring", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [e("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), e("g", { attrs: { mask: "url(#mask__ring)" } }, [e("path", { attrs: { d: "M0 0h90v45H0z", fill: t.ringColors[0] } }), e("path", { attrs: { d: "M0 45h90v45H0z", fill: t.ringColors[1] } }), e("path", { attrs: { d: "M83 45a38 38 0 00-76 0h76z", fill: t.ringColors[2] } }), e("path", { attrs: { d: "M83 45a38 38 0 01-76 0h76z", fill: t.ringColors[3] } }), e("path", { attrs: { d: "M77 45a32 32 0 10-64 0h64z", fill: t.ringColors[4] } }), e("path", { attrs: { d: "M77 45a32 32 0 11-64 0h64z", fill: t.ringColors[5] } }), e("path", { attrs: { d: "M71 45a26 26 0 00-52 0h52z", fill: t.ringColors[6] } }), e("path", { attrs: { d: "M71 45a26 26 0 01-52 0h52z", fill: t.ringColors[7] } }), e("circle", { attrs: { cx: 45, cy: 45, r: 23, fill: t.ringColors[8] } })])], 2);
}, nt = [], ht = /* @__PURE__ */ g(
  lt,
  ot,
  nt,
  !1,
  null,
  null,
  null,
  null
);
const ct = ht.exports, pt = 4, dt = 80;
function ft(r, t) {
  const e = x(r), s = t && t.length;
  return Array.from(
    { length: pt },
    (i, l) => m(e + l, t, s)
  );
}
const _t = {
  name: "avatar-sunset",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: dt }),
  computed: {
    formattedName() {
      return this.name.replace(/\s/g, "");
    },
    sunsetColors() {
      return ft(this.name, this.colors);
    }
  },
  methods: {
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
var ut = function() {
  var t = this, e = t._self._c;
  return e("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [e("title", [t._v(t._s(t.name))])] : t._e(), e("mask", { attrs: { id: "mask__sunset", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [e("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), e("g", { attrs: { mask: "url(#mask__sunset)" } }, [e("path", { attrs: { d: "M0 0h80v40H0z", fill: t.getPaintFill0() } }), e("path", { attrs: { d: "M0 40h80v40H0z", fill: t.getPaintFill1() } })]), e("defs", [e("linearGradient", { attrs: { gradientUnits: "userSpaceOnUse", id: t.getPaintId0(), x1: t.SIZE / 2, y1: 0, x2: t.SIZE / 2, y2: t.SIZE / 2 } }, [e("stop", { attrs: { "stop-color": t.sunsetColors[0] } }), e("stop", { attrs: { offset: 1, "stop-color": t.sunsetColors[1] } })], 1), e("linearGradient", { attrs: { gradientUnits: "userSpaceOnUse", id: t.getPaintId1(), x1: t.SIZE / 2, y1: t.SIZE / 2, x2: t.SIZE / 2, y2: t.SIZE } }, [e("stop", { attrs: { "stop-color": t.sunsetColors[2] } }), e("stop", { attrs: { offset: 1, "stop-color": t.sunsetColors[3] } })], 1)], 1)], 2);
}, mt = [], gt = /* @__PURE__ */ g(
  _t,
  ut,
  mt,
  !1,
  null,
  null,
  null,
  null
);
const xt = gt.exports, wt = {
  name: "avatar",
  components: {
    AvatarBauhaus: U,
    AvatarBeam: A,
    AvatarMarble: G,
    AvatarPixel: rt,
    AvatarRing: ct,
    AvatarSunset: xt
  },
  props: ["variant", "size", "colors", "square", "name", "title"],
  data: () => ({
    checkedVariant: h.variant,
    size_: h.size,
    colors_: h.colors || [],
    square_: !1,
    name_: h.name,
    title_: !1
  }),
  mounted() {
    this.checkedVariant = I(this.variant) || "beam", this.size_ = this.size || h.size || 40, this.colors_ = this.colors || h.colors || [], this.square_ = this.square || h.square || !1, this.name_ = this.name || h.name || "", this.title_ = this.title || h.title || !1;
  },
  watch: {
    onUpdateHook0: {
      handler() {
        this.checkedVariant = I(this.variant) || "beam", this.size_ = this.size || h.size || 40, this.colors_ = this.colors || h.colors || [], this.square_ = this.square || h.square || !1, this.name_ = this.name || h.name || "", this.title_ = this.title || h.title || !1;
      },
      immediate: !0
    }
  },
  computed: {
    onUpdateHook0() {
      return {
        0: this.variant,
        1: this.size,
        2: this.colors,
        3: this.square,
        4: this.name,
        5: this.title
      };
    }
  }
};
var Ct = function() {
  var t = this, e = t._self._c;
  return e("div", [t.checkedVariant === "bauhaus" ? [e("avatar-bauhaus", { attrs: { colors: t.colors_, name: t.name_, square: t.square_, title: t.title_, size: t.size_ } })] : t._e(), t.checkedVariant === "beam" ? [e("avatar-beam", { attrs: { colors: t.colors_, name: t.name_, square: t.square_, title: t.title_, size: t.size_ } })] : t._e(), t.checkedVariant === "marble" ? [e("avatar-marble", { attrs: { colors: t.colors_, name: t.name_, square: t.square_, title: t.title_, size: t.size_ } })] : t._e(), t.checkedVariant === "pixel" ? [e("avatar-pixel", { attrs: { colors: t.colors_, name: t.name_, square: t.square_, title: t.title_, size: t.size_ } })] : t._e(), t.checkedVariant === "ring" ? [e("avatar-ring", { attrs: { colors: t.colors_, name: t.name_, square: t.square_, title: t.title_, size: t.size_ } })] : t._e(), t.checkedVariant === "sunset" ? [e("avatar-sunset", { attrs: { colors: t.colors_, name: t.name_, square: t.square_, title: t.title_, size: t.size_ } })] : t._e()], 2);
}, vt = [], St = /* @__PURE__ */ g(
  wt,
  Ct,
  vt,
  !1,
  null,
  null,
  null,
  null
);
const Et = St.exports;
export {
  Et as Avatar
};
