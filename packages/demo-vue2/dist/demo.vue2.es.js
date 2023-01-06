var c;
(function(t) {
  t.Beam = "beam", t.Marble = "marble", t.Pixels = "pixel", t.Sunset = "sunset", t.Bauhaus = "bauhaus", t.Ring = "ring";
})(c || (c = {}));
const v = Object.values(c), _ = {
  geometric: c.Beam,
  abstract: c.Bauhaus
};
function f(t) {
  return t ? Object.keys(_).includes(t || "") ? _[t || ""] || c.Marble : t && v.includes(t) ? t : c.Marble : c.Marble;
}
var u;
(function(t) {
  t.Small = "40px", t.Medium = "80px", t.Large = "128px";
})(u || (u = {}));
const k = Object.entries(u);
var i;
(function(t) {
  t.Square = "square", t.Circle = "circle";
})(i || (i = {}));
const G = Object.values(i);
var o;
(function(t) {
  t.Light = "light", t.Dark = "dark";
})(o || (o = {}));
const Z = Object.values(o), K = [
  "Mary Baker",
  "Amelia Earhart",
  "Mary Roebling",
  "Sarah Winnemucca",
  "Margaret Brent",
  "Lucy Stone",
  "Mary Edwards",
  "Margaret Chase",
  "Mahalia Jackson",
  "Maya Angelou",
  "Margaret Bourke",
  "Eunice Kennedy",
  "Carrie Chapman",
  "Elizabeth Peratrovich",
  "Alicia Dickerson",
  "Daisy Gatson",
  "Emma Willard",
  "Amelia Boynton",
  "Maria Mitchell",
  "Sojourner Truth",
  "Willa Cather",
  "Coretta Scott",
  "Harriet Tubman",
  "Fabiola Cabeza",
  "Sacagawea",
  "Esther Martinez",
  "Elizabeth Cady",
  "Bessie Coleman",
  "Ma Rainey",
  "Julia Ward",
  "Irene Morgan",
  "Babe Didrikson",
  "Lyda Conley",
  "Annie Dodge",
  "Maud Nathan",
  "Betty Ford",
  "Rosa Parks",
  "Susan La",
  "Gertrude Stein",
  "Wilma Mankiller",
  "Grace Hopper",
  "Jane Addams",
  "Katharine Graham",
  "Florence Chadwick",
  "Zora Neale",
  "Wilma Rudolph",
  "Annie Jump",
  "Mother Frances",
  "Jovita Id\xE1r",
  "Maggie L",
  "Henrietta Swan",
  "Jane Cunningham",
  "Victoria Woodhull",
  "Helen Keller",
  "Patsy Takemoto",
  "Chien-Shiung",
  "Dorothea Dix",
  "Margaret Sanger",
  "Alice Paul",
  "Frances Willard",
  "Sally Ride",
  "Juliette Gordon",
  "Queen Lili",
  "Katharine Lee",
  "Harriet Beecher",
  "Felisa Rincon",
  "Hetty Green",
  "Belva Lockwood",
  "Biddy Mason",
  "Ida B",
  "Eleanor Roosevelt",
  "Maria Goeppert",
  "Phillis Wheatley",
  "Mary Harris",
  "Fannie Lou",
  "Rosalyn Yalow",
  "Susan B",
  "Clara Barton",
  "Lady Deborah",
  "Jane Johnston",
  "Alice Childress",
  "Georgia O",
  "Rebecca Crumpler",
  "Anne Bradstreet",
  "Elizabeth Blackwell",
  "Christa McAuliffe",
  "Edmonia Lewis",
  "Nellie Bly",
  "Mary Cassatt",
  "Pauli Murray",
  "Ellen Swallow",
  "Hedy Lamarr",
  "Pearl Kendrick",
  "Abigail Adams",
  "Margaret Fuller",
  "Emma Lazarus",
  "Marian Anderson",
  "Virginia Apgar",
  "Mary Walton"
];
function p(t, e, a, r, s, d, C, b) {
  var n = typeof t == "function" ? t.options : t;
  e && (n.render = e, n.staticRenderFns = a, n._compiled = !0), r && (n.functional = !0), d && (n._scopeId = "data-v-" + d);
  var h;
  if (C ? (h = function(l) {
    l = l || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !l && typeof __VUE_SSR_CONTEXT__ < "u" && (l = __VUE_SSR_CONTEXT__), s && s.call(this, l), l && l._registeredComponents && l._registeredComponents.add(C);
  }, n._ssrRegister = h) : s && (h = b ? function() {
    s.call(
      this,
      (n.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : s), h)
    if (n.functional) {
      n._injectStyles = h;
      var w = n.render;
      n.render = function(S, g) {
        return h.call(g), w(S, g);
      };
    } else {
      var m = n.beforeCreate;
      n.beforeCreate = m ? [].concat(m, h) : [h];
    }
  return {
    exports: t,
    options: n
  };
}
const M = {
  name: "variant-selector",
  props: ["onChange", "variant"],
  data: () => ({ selectedVariant: "beam", variants: v }),
  mounted() {
    this.selectedVariant = f(this.variant) || "beam";
  },
  watch: {
    onUpdateHook0: {
      handler() {
        this.selectedVariant = f(this.variant) || "beam";
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
  },
  methods: {
    handleChange(t) {
      var a;
      const e = ((a = t == null ? void 0 : t.target) == null ? void 0 : a.value) || c.Marble;
      this.selectedVariant = e, this.onChange(e);
    },
    getLabelClass(t) {
      return `radio-label ${t === this.selectedVariant ? "selected" : ""}`;
    },
    getInputId(t) {
      return `radio-${t}`;
    },
    _classStringToObject(t) {
      const e = {};
      if (typeof t != "string")
        return e;
      const a = t.trim().split(/\s+/);
      for (const r of a)
        e[r] = !0;
      return e;
    }
  }
};
var y = function() {
  var e = this, a = e._self._c;
  return a("div", { staticClass: "variant-selector widget-wrapper" }, e._l(e.variants, function(r, s) {
    return a("label", { key: s, class: e._classStringToObject(e.getLabelClass(r)), attrs: { for: e.getInputId(r) } }, [a("input", { staticClass: "radio-item sr-only", attrs: { type: "radio", name: "variant-option", id: e.getInputId(r) }, domProps: { value: r }, on: { input: function(d) {
      return e.handleChange(d);
    } } }), e._v(" " + e._s(r) + " ")]);
  }), 0);
}, $ = [], L = /* @__PURE__ */ p(
  M,
  y,
  $,
  !1,
  null,
  null,
  null,
  null
);
const X = L.exports, z = {
  name: "size-selector",
  props: ["onChange", "size"],
  data: () => ({ selectedSize: u.Medium, sizes: k }),
  mounted() {
    this.selectedSize = this.size || u.Medium;
  },
  watch: {
    onUpdateHook0: {
      handler() {
        this.selectedSize = this.size || u.Medium;
      },
      immediate: !0
    }
  },
  computed: {
    onUpdateHook0() {
      return {
        0: this.size
      };
    }
  },
  methods: {
    handleChange(t) {
      var a;
      const e = ((a = t == null ? void 0 : t.target) == null ? void 0 : a.value) || u.Medium;
      this.selectedSize = e, this.onChange(e);
    },
    getLabelClass(t) {
      return `radio-label ${t[1] === this.selectedSize ? "selected" : ""}`;
    },
    getInputId(t) {
      return `radio-${t[0].toLowerCase()}`;
    },
    getSizeDotClass(t) {
      return `size-dot ${t[0].toLowerCase()}`;
    },
    _classStringToObject(t) {
      const e = {};
      if (typeof t != "string")
        return e;
      const a = t.trim().split(/\s+/);
      for (const r of a)
        e[r] = !0;
      return e;
    }
  }
};
var H = function() {
  var e = this, a = e._self._c;
  return a("div", { staticClass: "size-selector widget-wrapper" }, e._l(e.sizes, function(r, s) {
    return a("label", { key: s, class: e._classStringToObject(e.getLabelClass(r)), attrs: { for: e.getInputId(r) } }, [a("input", { staticClass: "radio-item sr-only", attrs: { type: "radio", name: "size-option", id: e.getInputId(r) }, domProps: { value: r[1] }, on: { input: function(d) {
      return e.handleChange(d);
    } } }), a("div", { class: e._classStringToObject(e.getSizeDotClass(r)) })]);
  }), 0);
}, B = [], P = /* @__PURE__ */ p(
  z,
  H,
  B,
  !1,
  null,
  null,
  null,
  null
);
const Q = P.exports, T = {
  name: "palette-selector",
  props: ["onChange", "colors"],
  data: () => ({
    selectedPalette: ["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]
  }),
  mounted() {
    this.selectedPalette = this.colors;
  },
  watch: {
    onUpdateHook0: {
      handler() {
        this.selectedPalette = this.colors;
      },
      immediate: !0
    }
  },
  computed: {
    onUpdateHook0() {
      return {
        0: this.colors
      };
    }
  },
  methods: {
    handleChange(t, e) {
      const a = [...this.selectedPalette];
      a[t] = e.target.value, this.selectedPalette = a, this.onChange(a);
    },
    randomizePalette() {
      const t = this.selectedPalette.map(() => `#${Math.floor(Math.random() * 16777215).toString(16)}`);
      this.selectedPalette = t, this.onChange(t);
    },
    getInputId(t) {
      return `color-input-${t}`;
    }
  }
};
var I = function() {
  var e = this, a = e._self._c;
  return a("div", { staticClass: "row" }, [a("div", { staticClass: "color-inputs" }, e._l(e.selectedPalette, function(r, s) {
    return a("div", { key: s }, [a("label", { staticClass: "sr-only", attrs: { for: e.getInputId(s) } }, [e._v(" Color Input " + e._s(s) + " ")]), a("input", { staticClass: "color-input", attrs: { type: "color", id: e.getInputId(s) }, domProps: { value: r }, on: { input: function(d) {
      return e.handleChange(s, d);
    } } })]);
  }), 0), a("div", { staticClass: "spacer" }), a("button", { staticClass: "random-palette widget-wrapper radio-label", on: { click: function(r) {
    return e.randomizePalette();
  } } }, [e._v(" Random Palette ")])]);
}, R = [], F = /* @__PURE__ */ p(
  T,
  I,
  R,
  !1,
  null,
  null,
  null,
  null
);
const Y = F.exports, V = {
  name: "shape-selector",
  props: ["onChange", "shape"],
  data: () => ({ selectedShape: i.Circle }),
  mounted() {
    this.selectedShape = this.shape || i.Circle;
  },
  watch: {
    onUpdateHook0: {
      handler() {
        this.selectedShape = this.shape || i.Circle;
      },
      immediate: !0
    }
  },
  computed: {
    onUpdateHook0() {
      return {
        0: this.shape
      };
    }
  },
  methods: {
    handleChange(t) {
      var e;
      this.onChange(((e = t == null ? void 0 : t.target) == null ? void 0 : e.value) || i.Circle);
    },
    getCircleLabelClass() {
      return `radio-label ${i.Circle === this.selectedShape ? "selected" : ""}`;
    },
    getSquareLabelClass() {
      return `radio-label ${i.Square === this.selectedShape ? "selected" : ""}`;
    },
    _classStringToObject(t) {
      const e = {};
      if (typeof t != "string")
        return e;
      const a = t.trim().split(/\s+/);
      for (const r of a)
        e[r] = !0;
      return e;
    }
  }
};
var D = function() {
  var e = this, a = e._self._c;
  return a("div", { staticClass: "shape-selector widget-wrapper" }, [a("label", { class: e._classStringToObject(e.getCircleLabelClass()), attrs: { for: "radio-circle" } }, [a("input", { staticClass: "sr-only radio-item", attrs: { id: "radio-circle", type: "radio", value: "circle", name: "shape-option" }, on: { input: function(r) {
    return e.handleChange(r);
  } } }), a("svg", { attrs: { width: "13", height: "13", fill: "none" } }, [a("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M7.07 6.837C6.242 7.603 5.5 9.187 5.5 13h-5c0-4.187.759-7.603 3.18-9.837C6.05.973 9.415.5 13 .5v5c-3.416 0-5.051.527-5.93 1.337z", fill: "currentColor" } })])]), a("label", { class: e._classStringToObject(e.getSquareLabelClass()), attrs: { for: "radio-square" } }, [a("input", { staticClass: "sr-only radio-item", attrs: { id: "radio-square", type: "radio", value: "square", name: "shape-option" }, on: { input: function(r) {
    return e.handleChange(r);
  } } }), a("svg", { attrs: { width: "13", height: "13", viewBox: "0 0 13 13", fill: "none" } }, [a("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.5 0.5H13V5.5H5.5V13H0.5V0.5Z", fill: "currentColor" } })])])]);
}, j = [], E = /* @__PURE__ */ p(
  V,
  D,
  j,
  !1,
  null,
  null,
  null,
  null
);
const ee = E.exports, U = {
  name: "light-dark-toggle",
  props: ["onChange", "theme"],
  data: () => ({ selectedTheme: o.Light }),
  mounted() {
    this.selectedTheme = this.theme || o.Light;
  },
  watch: {
    onUpdateHook0: {
      handler() {
        this.selectedTheme = this.theme || o.Light;
      },
      immediate: !0
    }
  },
  computed: {
    onUpdateHook0() {
      return {
        0: this.theme
      };
    }
  },
  methods: {
    handleChange(t) {
      const e = this.selectedTheme === o.Dark ? o.Light : o.Dark;
      this.selectedTheme = e, this.onChange(e);
    }
  }
};
var x = function() {
  var e = this, a = e._self._c;
  return a("div", { staticClass: "light-dark-toggle widget-wrapper" }, [a("label", { staticClass: "checkbox-label", attrs: { for: "theme-checkbox" } }, [a("input", { staticClass: "sr-only radio-item", attrs: { id: "theme-checkbox", type: "checkbox", name: "theme-checkbox" }, on: { input: function(r) {
    return e.handleChange(r);
  } } }), a("svg", { attrs: { width: "20", height: "20", fill: "none" } }, [a("circle", { attrs: { cx: "10", cy: "10", r: "9", stroke: "currentColor", "stroke-width": "2" } }), a("path", { attrs: { d: "M10 0a10 10 0 000 20V0z", fill: "currentColor" } })])])]);
}, A = [], O = /* @__PURE__ */ p(
  U,
  x,
  A,
  !1,
  null,
  null,
  null,
  null
);
const te = O.exports, W = {
  name: "library-links",
  props: ["githubUrl"]
};
var J = function() {
  var e = this, a = e._self._c;
  return a("div", { staticClass: "inner-row" }, [a("div", { staticClass: "widget-wrapper" }, [a("a", { staticClass: "radio-label selected", attrs: { target: "_blank", rel: "noreferrer noopener", href: e.githubUrl } }, [a("svg", { attrs: { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5808 20.2773 21.0498 21.7438 19.0074C23.2103 16.9651 23.9994 14.5143 24 12C24 5.37 18.63 0 12 0Z", fill: "currentColor" } })])])]), a("div", { staticClass: "widget-wrapper" }, [a("a", { staticClass: "radio-label selected", attrs: { href: "../", target: "_blank", rel: "noreferrer noopener" } }, [a("svg", { attrs: { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" } }, [a("path", { attrs: { d: "M12.001 -0.00185812C8.81828 -0.00185812 5.76618 1.26248 3.5157 3.51287C1.26531 5.76344 0.000976562 8.81574 0.000976562 11.9981C0.000976562 15.1805 1.26531 18.2329 3.5157 20.4834C5.76609 22.7338 8.81857 23.9981 12.001 23.9981C15.1834 23.9981 18.2357 22.7338 20.4862 20.4834C22.7367 18.2331 24.001 15.1805 24.001 11.9981C23.9974 8.8166 22.732 5.76668 20.4823 3.51667C18.2325 1.26705 15.1823 0.00160987 12.0009 -0.00195312L12.001 -0.00185812ZM12.001 4.39806C12.2999 4.39806 12.5866 4.51692 12.7978 4.72823C13.0093 4.93954 13.128 5.22637 13.128 5.52528C13.128 5.82402 13.0093 6.11086 12.7978 6.32214C12.5865 6.53345 12.2999 6.65213 12.001 6.65213C11.7021 6.65213 11.4154 6.53345 11.2041 6.32214C10.9926 6.11064 10.8739 5.824 10.8739 5.52509C10.8739 5.22618 10.9926 4.93951 11.2041 4.72823C11.4154 4.51692 11.7021 4.39806 12.001 4.39806ZM14.5368 19.05C14.5368 19.2055 14.4107 19.3314 14.2554 19.3314H9.74647C9.59115 19.3314 9.46503 19.2055 9.46503 19.05V17.3587C9.46503 17.2032 9.59114 17.0773 9.74647 17.0773H10.8739V10.8787H9.74647C9.59115 10.8787 9.46503 10.7526 9.46503 10.5973V8.90586C9.46503 8.75054 9.59114 8.62461 9.74647 8.62461H12.8466C13.002 8.62461 13.128 8.75054 13.128 8.90586V17.0773H14.2554C14.4107 17.0773 14.5368 17.2032 14.5368 17.3587V19.05Z", fill: "currentColor" } })])])])]);
}, N = [], q = /* @__PURE__ */ p(
  W,
  J,
  N,
  !1,
  null,
  null,
  null,
  null
);
const ae = q.exports;
export {
  i as AvatarShape,
  u as AvatarSize,
  c as AvatarVariant,
  ae as LibraryLinks,
  te as LightDarkToggle,
  Y as PaletteSelector,
  ee as ShapeSelector,
  Q as SizeSelector,
  o as Theme,
  X as VariantSelector,
  f as coerceVariant,
  K as exampleNames,
  G as shapes,
  k as sizes,
  Z as themes,
  v as variants
};
