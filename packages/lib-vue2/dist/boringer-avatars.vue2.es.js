const _ = (r) => {
  for (var t = 0, e = 0; e < r.length; e++) {
    var i = r.charCodeAt(e);
    t = (t << 5) - t + i, t = t & t;
  }
  return Math.abs(t);
}, L = (r, t) => Math.floor(r / Math.pow(10, t) % 10), v = (r, t) => !(L(r, t) % 2), n = (r, t, e) => {
  let i = r % t;
  return e && L(r, e) % 2 === 0 ? -i : i;
}, d = (r, t, e) => t[r % e], N = (r) => {
  r.slice(0, 1) === "#" && (r = r.slice(1));
  var t = parseInt(r.substr(0, 2), 16), e = parseInt(r.substr(2, 2), 16), i = parseInt(r.substr(4, 2), 16), s = (t * 299 + e * 587 + i * 114) / 1e3;
  return s >= 128 ? "#000000" : "#FFFFFF";
}, O = [
  "pixel",
  "bauhaus",
  "ring",
  "beam",
  "sunset",
  "marble",
  "geometric",
  "abstract",
  void 0
], T = {
  geometric: "beam",
  abstract: "bauhaus"
};
function A(r) {
  return r ? Object.keys(T).includes(r || "") ? T[r || ""] || "marble" : r && O.includes(r) ? r : "marble" : "marble";
}
const C = {
  variant: "marble",
  colors: ["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"],
  name: "Clara Barton",
  square: !1,
  title: !1,
  size: 40
}, X = 4, E = 80;
function V(r, t) {
  const e = _(r), i = t && t.length;
  return Array.from({ length: X }, (l, a) => ({
    color: d(e + a, t, i),
    translateX: n(e * (a + 1), E / 2 - (a + 17), 1),
    translateY: n(e * (a + 1), E / 2 - (a + 17), 2),
    rotate: n(e * (a + 1), 360),
    isSquare: v(e, 2)
  }));
}
const Y = {
  name: "avatar-bauhaus",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: E }),
  computed: {
    properties() {
      return V(this.name, this.colors);
    }
  }
};
function f(r, t, e, i, s, l, a, p) {
  var o = typeof r == "function" ? r.options : r;
  t && (o.render = t, o.staticRenderFns = e, o._compiled = !0), i && (o.functional = !0), l && (o._scopeId = "data-v-" + l);
  var c;
  if (a ? (c = function(h) {
    h = h || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !h && typeof __VUE_SSR_CONTEXT__ < "u" && (h = __VUE_SSR_CONTEXT__), s && s.call(this, h), h && h._registeredComponents && h._registeredComponents.add(a);
  }, o._ssrRegister = c) : s && (c = p ? function() {
    s.call(
      this,
      (o.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), c)
    if (o.functional) {
      o._injectStyles = c;
      var x = o.render;
      o.render = function(w, g) {
        return c.call(g), x(w, g);
      };
    } else {
      var m = o.beforeCreate;
      o.beforeCreate = m ? [].concat(m, c) : [c];
    }
  return {
    exports: r,
    options: o
  };
}
var H = function() {
  var i, s, l, a, p, o, c, x, m, h, w, g, I, Z, y, F, k, z, $, b, P, q, M, U, R, B;
  var t = this, e = t._self._c;
  return e("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [e("title", [t._v(t._s(t.name))])] : t._e(), e("mask", { attrs: { id: "mask__bauhaus", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [e("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), e("g", { attrs: { mask: "url(#mask__bauhaus)" } }, [e("rect", { attrs: { width: t.SIZE, height: t.SIZE, fill: (s = (i = t.properties) == null ? void 0 : i[0]) == null ? void 0 : s.color } }), e("rect", { attrs: { x: (t.SIZE - 60) / 2, y: (t.SIZE - 20) / 2, width: t.SIZE, height: (a = (l = t.properties) == null ? void 0 : l[1]) != null && a.isSquare ? t.SIZE : t.SIZE / 8, fill: (o = (p = t.properties) == null ? void 0 : p[1]) == null ? void 0 : o.color, transform: "translate(" + ((x = (c = t.properties) == null ? void 0 : c[1]) == null ? void 0 : x.translateX) + " " + ((h = (m = t.properties) == null ? void 0 : m[1]) == null ? void 0 : h.translateY) + ") rotate(" + ((g = (w = t.properties) == null ? void 0 : w[1]) == null ? void 0 : g.rotate) + " " + t.SIZE / 2 + " " + t.SIZE / 2 + ")" } }), e("circle", { attrs: { cx: t.SIZE / 2, cy: t.SIZE / 2, fill: (Z = (I = t.properties) == null ? void 0 : I[2]) == null ? void 0 : Z.color, r: t.SIZE / 5, transform: "translate(" + ((F = (y = t.properties) == null ? void 0 : y[2]) == null ? void 0 : F.translateX) + " " + ((z = (k = t.properties) == null ? void 0 : k[2]) == null ? void 0 : z.translateY) + ")" } }), e("line", { attrs: { x1: 0, y1: t.SIZE / 2, x2: t.SIZE, y2: t.SIZE / 2, strokeWidth: 2, stroke: (b = ($ = t.properties) == null ? void 0 : $[3]) == null ? void 0 : b.color, transform: "translate(" + ((q = (P = t.properties) == null ? void 0 : P[3]) == null ? void 0 : q.translateX) + " " + ((U = (M = t.properties) == null ? void 0 : M[3]) == null ? void 0 : U.translateY) + ") rotate(" + ((B = (R = t.properties) == null ? void 0 : R[3]) == null ? void 0 : B.rotate) + " " + t.SIZE / 2 + " " + t.SIZE / 2 + ")" } })])], 2);
}, D = [], G = /* @__PURE__ */ f(
  Y,
  H,
  D,
  !1,
  null,
  null,
  null,
  null
);
const W = G.exports, u = 36;
function J(r, t) {
  const e = _(r), i = t && t.length, s = d(e, t, i), l = n(e, 10, 1), a = l < 5 ? l + u / 9 : l, p = n(e, 10, 2), o = p < 5 ? p + u / 9 : p;
  return {
    wrapperColor: s,
    faceColor: N(s),
    backgroundColor: d(e + 13, t, i),
    wrapperTranslateX: a,
    wrapperTranslateY: o,
    wrapperRotate: n(e, 360),
    wrapperScale: 1 + n(e, u / 12) / 10,
    isMouthOpen: v(e, 2),
    isCircle: v(e, 1),
    eyeSpread: n(e, 5),
    mouthSpread: n(e, 3),
    faceRotate: n(e, 10, 3),
    faceTranslateX: a > u / 6 ? a / 2 : n(e, 8, 1),
    faceTranslateY: o > u / 6 ? o / 2 : n(e, 7, 2)
  };
}
const K = {
  name: "avatar-beam",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: u }),
  computed: {
    data() {
      return J(this.name, this.colors);
    }
  }
};
var Q = function() {
  var t = this, e = t._self._c;
  return e("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [e("title", [t._v(t._s(t.name))])] : t._e(), e("mask", { attrs: { id: "mask__beam", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [e("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), e("g", { attrs: { mask: "url(#mask__beam)" } }, [e("rect", { attrs: { width: t.SIZE, height: t.SIZE, fill: t.data.backgroundColor } }), e("rect", { attrs: { x: "0", y: "0", width: t.SIZE, height: t.SIZE, transform: "translate(" + t.data.wrapperTranslateX + " " + t.data.wrapperTranslateY + ") rotate(" + t.data.wrapperRotate + " " + t.SIZE / 2 + " " + t.SIZE / 2 + ") scale(" + t.data.wrapperScale + ")", fill: t.data.wrapperColor, rx: t.data.isCircle ? t.SIZE : t.SIZE / 6 } }), e("g", { attrs: { transform: "translate(" + t.data.faceTranslateX + " " + t.data.faceTranslateY + ") rotate(" + t.data.faceRotate + " " + t.SIZE / 2 + " " + t.SIZE / 2 + ")" } }, [t.data.isMouthOpen ? [e("path", { attrs: { fill: "none", strokeLinecap: "round", d: "M15 " + (19 + t.data.mouthSpread) + "c2 1 4 1 6 0", stroke: t.data.faceColor } })] : [e("path", { attrs: { d: "M13," + (19 + t.data.mouthSpread) + " a1,0.75 0 0,0 10,0", fill: t.data.faceColor } })], e("rect", { attrs: { stroke: "none", x: 14 - t.data.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, fill: t.data.faceColor } }), e("rect", { attrs: { stroke: "none", x: 20 + t.data.eyeSpread, y: 14, width: 1.5, height: 2, rx: 1, fill: t.data.faceColor } })], 2)])], 2);
}, j = [], tt = /* @__PURE__ */ f(
  K,
  Q,
  j,
  !1,
  null,
  null,
  null,
  null
);
const et = tt.exports, rt = 3, S = 80;
function st(r, t) {
  const e = _(r), i = t && t.length;
  return Array.from({ length: rt }, (l, a) => ({
    color: d(e + a, t, i),
    translateX: n(e * (a + 1), S / 10, 1),
    translateY: n(e * (a + 1), S / 10, 2),
    scale: 1.2 + n(e * (a + 1), S / 20) / 10,
    rotate: n(e * (a + 1), 360, 1)
  }));
}
const at = {
  name: "avatar-marble",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: S }),
  computed: {
    properties() {
      return st(this.name, this.colors);
    }
  }
};
var it = function() {
  var t = this, e = t._self._c;
  return e("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [e("title", [t._v(t._s(t.name))])] : t._e(), e("mask", { attrs: { id: "mask__marble", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [e("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), e("g", { attrs: { mask: "url(#mask__marble)" } }, [e("rect", { attrs: { width: t.SIZE, height: t.SIZE, fill: t.properties[0].color } }), e("path", { attrs: { filter: "url(#prefix__filter0_f)", d: "M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z", fill: t.properties[1].color, transform: "translate(" + t.properties[1].translateX + " " + t.properties[1].translateY + ") rotate(" + t.properties[1].rotate + " " + t.SIZE / 2 + " " + t.SIZE / 2 + ") scale(" + t.properties[2].scale + ")" } }), e("path", { style: {
    mixBlendMode: "overlay"
  }, attrs: { filter: "url(#prefix__filter0_f)", d: "M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z", fill: t.properties[2].color, transform: "translate(" + t.properties[2].translateX + " " + t.properties[2].translateY + ") rotate(" + t.properties[2].rotate + " " + t.SIZE / 2 + " " + t.SIZE / 2 + ") scale(" + t.properties[2].scale + ")" } })]), e("defs", [e("filter", { attrs: { id: "prefix__filter0_f", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" } }, [e("feFlood", { attrs: { result: "BackgroundImageFix", floodOpacity: 0 } }), e("feBlend", { attrs: { in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" } }), e("feGaussianBlur", { attrs: { result: "effect1_foregroundBlur", stdDeviation: 7 } })], 1)])], 2);
}, lt = [], ot = /* @__PURE__ */ f(
  at,
  it,
  lt,
  !1,
  null,
  null,
  null,
  null
);
const nt = ot.exports, ct = 64, ht = 80;
function pt(r, t) {
  const e = _(r), i = t && t.length;
  return Array.from(
    { length: ct },
    (l, a) => d(e % a, t, i)
  );
}
const dt = {
  name: "avatar-pixel",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: ht }),
  computed: {
    pixelColors() {
      return pt(this.name, this.colors);
    }
  }
};
var ft = function() {
  var t = this, e = t._self._c;
  return e("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [e("title", [t._v(t._s(t.name))])] : t._e(), e("mask", { attrs: { id: "mask__pixel", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [e("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), e("g", { attrs: { mask: "url(#mask__pixel)" } }, [e("rect", { attrs: { width: 10, height: 10, fill: t.pixelColors[0] } }), e("rect", { attrs: { x: 20, width: 10, height: 10, fill: t.pixelColors[1] } }), e("rect", { attrs: { x: 40, width: 10, height: 10, fill: t.pixelColors[2] } }), e("rect", { attrs: { x: 60, width: 10, height: 10, fill: t.pixelColors[3] } }), e("rect", { attrs: { x: 10, width: 10, height: 10, fill: t.pixelColors[4] } }), e("rect", { attrs: { x: 30, width: 10, height: 10, fill: t.pixelColors[5] } }), e("rect", { attrs: { x: 50, width: 10, height: 10, fill: t.pixelColors[6] } }), e("rect", { attrs: { x: 70, width: 10, height: 10, fill: t.pixelColors[7] } }), e("rect", { attrs: { y: 10, width: 10, height: 10, fill: t.pixelColors[8] } }), e("rect", { attrs: { y: 20, width: 10, height: 10, fill: t.pixelColors[9] } }), e("rect", { attrs: { y: 30, width: 10, height: 10, fill: t.pixelColors[10] } }), e("rect", { attrs: { y: 40, width: 10, height: 10, fill: t.pixelColors[11] } }), e("rect", { attrs: { y: 50, width: 10, height: 10, fill: t.pixelColors[12] } }), e("rect", { attrs: { y: 60, width: 10, height: 10, fill: t.pixelColors[13] } }), e("rect", { attrs: { y: 70, width: 10, height: 10, fill: t.pixelColors[14] } }), e("rect", { attrs: { x: 20, y: 10, width: 10, height: 10, fill: t.pixelColors[15] } }), e("rect", { attrs: { x: 20, y: 20, width: 10, height: 10, fill: t.pixelColors[16] } }), e("rect", { attrs: { x: 20, y: 30, width: 10, height: 10, fill: t.pixelColors[17] } }), e("rect", { attrs: { x: 20, y: 40, width: 10, height: 10, fill: t.pixelColors[18] } }), e("rect", { attrs: { x: 20, y: 50, width: 10, height: 10, fill: t.pixelColors[19] } }), e("rect", { attrs: { x: 20, y: 60, width: 10, height: 10, fill: t.pixelColors[20] } }), e("rect", { attrs: { x: 20, y: 70, width: 10, height: 10, fill: t.pixelColors[21] } }), e("rect", { attrs: { x: 40, y: 10, width: 10, height: 10, fill: t.pixelColors[22] } }), e("rect", { attrs: { x: 40, y: 20, width: 10, height: 10, fill: t.pixelColors[23] } }), e("rect", { attrs: { x: 40, y: 30, width: 10, height: 10, fill: t.pixelColors[24] } }), e("rect", { attrs: { x: 40, y: 40, width: 10, height: 10, fill: t.pixelColors[25] } }), e("rect", { attrs: { x: 40, y: 50, width: 10, height: 10, fill: t.pixelColors[26] } }), e("rect", { attrs: { x: 40, y: 60, width: 10, height: 10, fill: t.pixelColors[27] } }), e("rect", { attrs: { x: 40, y: 70, width: 10, height: 10, fill: t.pixelColors[28] } }), e("rect", { attrs: { x: 60, y: 10, width: 10, height: 10, fill: t.pixelColors[29] } }), e("rect", { attrs: { x: 60, y: 20, width: 10, height: 10, fill: t.pixelColors[30] } }), e("rect", { attrs: { x: 60, y: 30, width: 10, height: 10, fill: t.pixelColors[31] } }), e("rect", { attrs: { x: 60, y: 40, width: 10, height: 10, fill: t.pixelColors[32] } }), e("rect", { attrs: { x: 60, y: 50, width: 10, height: 10, fill: t.pixelColors[33] } }), e("rect", { attrs: { x: 60, y: 60, width: 10, height: 10, fill: t.pixelColors[34] } }), e("rect", { attrs: { x: 60, y: 70, width: 10, height: 10, fill: t.pixelColors[35] } }), e("rect", { attrs: { x: 10, y: 10, width: 10, height: 10, fill: t.pixelColors[36] } }), e("rect", { attrs: { x: 10, y: 20, width: 10, height: 10, fill: t.pixelColors[37] } }), e("rect", { attrs: { x: 10, y: 30, width: 10, height: 10, fill: t.pixelColors[38] } }), e("rect", { attrs: { x: 10, y: 40, width: 10, height: 10, fill: t.pixelColors[39] } }), e("rect", { attrs: { x: 10, y: 50, width: 10, height: 10, fill: t.pixelColors[40] } }), e("rect", { attrs: { x: 10, y: 60, width: 10, height: 10, fill: t.pixelColors[41] } }), e("rect", { attrs: { x: 10, y: 70, width: 10, height: 10, fill: t.pixelColors[42] } }), e("rect", { attrs: { x: 30, y: 10, width: 10, height: 10, fill: t.pixelColors[43] } }), e("rect", { attrs: { x: 30, y: 20, width: 10, height: 10, fill: t.pixelColors[44] } }), e("rect", { attrs: { x: 30, y: 30, width: 10, height: 10, fill: t.pixelColors[45] } }), e("rect", { attrs: { x: 30, y: 40, width: 10, height: 10, fill: t.pixelColors[46] } }), e("rect", { attrs: { x: 30, y: 50, width: 10, height: 10, fill: t.pixelColors[47] } }), e("rect", { attrs: { x: 30, y: 60, width: 10, height: 10, fill: t.pixelColors[48] } }), e("rect", { attrs: { x: 30, y: 70, width: 10, height: 10, fill: t.pixelColors[49] } }), e("rect", { attrs: { x: 50, y: 10, width: 10, height: 10, fill: t.pixelColors[50] } }), e("rect", { attrs: { x: 50, y: 20, width: 10, height: 10, fill: t.pixelColors[51] } }), e("rect", { attrs: { x: 50, y: 30, width: 10, height: 10, fill: t.pixelColors[52] } }), e("rect", { attrs: { x: 50, y: 40, width: 10, height: 10, fill: t.pixelColors[53] } }), e("rect", { attrs: { x: 50, y: 50, width: 10, height: 10, fill: t.pixelColors[54] } }), e("rect", { attrs: { x: 50, y: 60, width: 10, height: 10, fill: t.pixelColors[55] } }), e("rect", { attrs: { x: 50, y: 70, width: 10, height: 10, fill: t.pixelColors[56] } }), e("rect", { attrs: { x: 70, y: 10, width: 10, height: 10, fill: t.pixelColors[57] } }), e("rect", { attrs: { x: 70, y: 20, width: 10, height: 10, fill: t.pixelColors[58] } }), e("rect", { attrs: { x: 70, y: 30, width: 10, height: 10, fill: t.pixelColors[59] } }), e("rect", { attrs: { x: 70, y: 40, width: 10, height: 10, fill: t.pixelColors[60] } }), e("rect", { attrs: { x: 70, y: 50, width: 10, height: 10, fill: t.pixelColors[61] } }), e("rect", { attrs: { x: 70, y: 60, width: 10, height: 10, fill: t.pixelColors[62] } }), e("rect", { attrs: { x: 70, y: 70, width: 10, height: 10, fill: t.pixelColors[63] } })])], 2);
}, ut = [], _t = /* @__PURE__ */ f(
  dt,
  ft,
  ut,
  !1,
  null,
  null,
  null,
  null
);
const mt = _t.exports, gt = 90, xt = 5;
function wt(r, t) {
  const e = _(t), i = r && r.length, s = Array.from(
    { length: xt },
    (a, p) => d(e + p, r, i)
  ), l = [];
  return l[0] = s[0], l[1] = s[1], l[2] = s[1], l[3] = s[2], l[4] = s[2], l[5] = s[3], l[6] = s[3], l[7] = s[0], l[8] = s[4], l;
}
const St = {
  name: "avatar-ring",
  props: ["colors", "name", "size", "title", "square"],
  data: () => ({ SIZE: gt }),
  computed: {
    ringColors() {
      return wt(this.colors, this.name);
    }
  }
};
var Ct = function() {
  var t = this, e = t._self._c;
  return e("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [e("title", [t._v(t._s(t.name))])] : t._e(), e("mask", { attrs: { id: "mask__ring", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [e("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), e("g", { attrs: { mask: "url(#mask__ring)" } }, [e("path", { attrs: { d: "M0 0h90v45H0z", fill: t.ringColors[0] } }), e("path", { attrs: { d: "M0 45h90v45H0z", fill: t.ringColors[1] } }), e("path", { attrs: { d: "M83 45a38 38 0 00-76 0h76z", fill: t.ringColors[2] } }), e("path", { attrs: { d: "M83 45a38 38 0 01-76 0h76z", fill: t.ringColors[3] } }), e("path", { attrs: { d: "M77 45a32 32 0 10-64 0h64z", fill: t.ringColors[4] } }), e("path", { attrs: { d: "M77 45a32 32 0 11-64 0h64z", fill: t.ringColors[5] } }), e("path", { attrs: { d: "M71 45a26 26 0 00-52 0h52z", fill: t.ringColors[6] } }), e("path", { attrs: { d: "M71 45a26 26 0 01-52 0h52z", fill: t.ringColors[7] } }), e("circle", { attrs: { cx: 45, cy: 45, r: 23, fill: t.ringColors[8] } })])], 2);
}, vt = [], Et = /* @__PURE__ */ f(
  St,
  Ct,
  vt,
  !1,
  null,
  null,
  null,
  null
);
const It = Et.exports, Zt = 4, yt = 80;
function Ft(r, t) {
  const e = _(r), i = t && t.length;
  return Array.from(
    { length: Zt },
    (l, a) => d(e + a, t, i)
  );
}
const kt = {
  name: "avatar-sunset",
  props: ["name", "colors", "size", "title", "square"],
  data: () => ({ SIZE: yt }),
  computed: {
    formattedName() {
      return this.name.replace(/\s/g, "");
    },
    sunsetColors() {
      return Ft(this.name, this.colors);
    }
  }
};
var zt = function() {
  var t = this, e = t._self._c;
  return e("svg", { attrs: { fill: "none", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 " + t.SIZE + " " + t.SIZE, width: t.size, height: t.size } }, [t.title ? [e("title", [t._v(t._s(t.name))])] : t._e(), e("mask", { attrs: { id: "mask__sunset", maskUnits: "userSpaceOnUse", x: 0, y: 0, width: t.SIZE, height: t.SIZE } }, [e("rect", { attrs: { fill: "#FFFFFF", width: t.SIZE, height: t.SIZE, rx: t.square ? void 0 : t.SIZE * 2 } })]), e("g", { attrs: { mask: "url(#mask__sunset)" } }, [e("path", { attrs: { d: "M0 0h80v40H0z", fill: "url(#gradient_paint0_linear_" + t.formattedName + ")" } }), e("path", { attrs: { d: "M0 40h80v40H0z", fill: "url(#gradient_paint1_linear_" + t.formattedName + ")" } })]), e("defs", [e("linearGradient", { attrs: { gradientUnits: "userSpaceOnUse", id: "gradient_paint0_linear_" + t.formattedName, x1: t.SIZE / 2, y1: 0, x2: t.SIZE / 2, y2: t.SIZE / 2 } }, [e("stop", { attrs: { "stop-color": t.sunsetColors[0] } }), e("stop", { attrs: { offset: 1, "stop-color": t.sunsetColors[1] } })], 1), e("linearGradient", { attrs: { gradientUnits: "userSpaceOnUse", id: "gradient_paint1_linear_" + t.formattedName, x1: t.SIZE / 2, y1: t.SIZE / 2, x2: t.SIZE / 2, y2: t.SIZE } }, [e("stop", { attrs: { "stop-color": t.sunsetColors[2] } }), e("stop", { attrs: { offset: 1, "stop-color": t.sunsetColors[3] } })], 1)], 1)], 2);
}, $t = [], bt = /* @__PURE__ */ f(
  kt,
  zt,
  $t,
  !1,
  null,
  null,
  null,
  null
);
const Pt = bt.exports, qt = {
  name: "avatar",
  components: {
    AvatarBauhaus: W,
    AvatarBeam: et,
    AvatarMarble: nt,
    AvatarPixel: mt,
    AvatarRing: It,
    AvatarSunset: Pt
  },
  props: ["variant"],
  data: () => ({ checkedVariant: "beam", coercedProps: C }),
  mounted() {
    this.checkedVariant = A(this.variant) || "beam", this.coercedProps = { ...C, ...this.$props };
  },
  watch: {
    onUpdateHook0: {
      handler() {
        this.checkedVariant = A(this.variant) || "beam", this.coercedProps = { ...C, ...this.$props };
      },
      immediate: !0
    }
  },
  computed: {
    onUpdateHook0() {
      return {
        0: this.variant
      };
    }
  }
};
var Mt = function() {
  var t = this, e = t._self._c;
  return e("div", [t.checkedVariant === "bauhaus" ? [e("avatar-bauhaus", { attrs: { colors: t.coercedProps.colors, name: t.coercedProps.name, square: t.coercedProps.square, title: t.coercedProps.title, size: t.coercedProps.size } })] : t._e(), t.checkedVariant === "beam" ? [e("avatar-beam", { attrs: { colors: t.coercedProps.colors, name: t.coercedProps.name, square: t.coercedProps.square, title: t.coercedProps.title, size: t.coercedProps.size } })] : t._e(), t.checkedVariant === "marble" ? [e("avatar-marble", { attrs: { colors: t.coercedProps.colors, name: t.coercedProps.name, square: t.coercedProps.square, title: t.coercedProps.title, size: t.coercedProps.size } })] : t._e(), t.checkedVariant === "pixel" ? [e("avatar-pixel", { attrs: { colors: t.coercedProps.colors, name: t.coercedProps.name, square: t.coercedProps.square, title: t.coercedProps.title, size: t.coercedProps.size } })] : t._e(), t.checkedVariant === "ring" ? [e("avatar-ring", { attrs: { colors: t.coercedProps.colors, name: t.coercedProps.name, square: t.coercedProps.square, title: t.coercedProps.title, size: t.coercedProps.size } })] : t._e(), t.checkedVariant === "sunset" ? [e("avatar-sunset", { attrs: { colors: t.coercedProps.colors, name: t.coercedProps.name, square: t.coercedProps.square, title: t.coercedProps.title, size: t.coercedProps.size } })] : t._e()], 2);
}, Ut = [], Rt = /* @__PURE__ */ f(
  qt,
  Mt,
  Ut,
  !1,
  null,
  null,
  null,
  null
);
const Bt = Rt.exports;
export {
  Bt as Avatar
};
