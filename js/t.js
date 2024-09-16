
let v = "1.0";
(function () { const e = document.createElement("link").relList; if (e && e.supports && e.supports(
      "modulepreload")) return; for (const r of document.querySelectorAll(
      'link[rel="modulepreload"]')) n(r);
  new MutationObserver(r => { for (const s of r)
      if (s.type === "childList")
        for (const o of s.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && n(
          o) }).observe(document, { childList: !0, subtree: !0 });

  function t(r) { const s = {}; return r.integrity && (s.integrity = r.integrity), r
      .referrerPolicy && (s.referrerPolicy = r.referrerPolicy), r.crossOrigin ===
      "use-credentials" ? s.credentials = "include" : r.crossOrigin === "anonymous" ? s
      .credentials = "omit" : s.credentials = "same-origin", s }

  function n(r) { if (r.ep) return;
    r.ep = !0; const s = t(r);
    fetch(r.href, s) } })();
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ts = "160",
  No = 0,
  ps = 1,
  Fo = 2,
  Oa = 1,
  Oo = 2,
  $t = 3,
  gn = 0,
  St = 1,
  Jt = 2,
  en = 0,
  Kn = 1,
  kr = 2,
  ms = 3,
  gs = 4,
  Bo = 5,
  An = 100,
  zo = 101,
  Go = 102,
  _s = 103,
  vs = 104,
  Ho = 200,
  Vo = 201,
  ko = 202,
  Wo = 203,
  Wr = 204,
  Xr = 205,
  Xo = 206,
  qo = 207,
  Yo = 208,
  Ko = 209,
  jo = 210,
  Zo = 211,
  $o = 212,
  Jo = 213,
  Qo = 214,
  el = 0,
  tl = 1,
  nl = 2,
  Ki = 3,
  il = 4,
  rl = 5,
  sl = 6,
  al = 7,
  Ba = 0,
  ol = 1,
  ll = 2,
  pn = 0,
  za = 1,
  Ga = 2,
  Ha = 3,
  Va = 4,
  cl = 5,
  ka = 6,
  Wa = 300,
  Zn = 301,
  $n = 302,
  qr = 303,
  Yr = 304,
  er = 306,
  Kr = 1e3,
  Ft = 1001,
  jr = 1002,
  _t = 1003,
  xs = 1004,
  fr = 1005,
  Ct = 1006,
  ul = 1007,
  fi = 1008,
  mn = 1009,
  hl = 1010,
  fl = 1011,
  ns = 1012,
  Xa = 1013,
  fn = 1014,
  dn = 1015,
  tn = 1016,
  qa = 1017,
  Ya = 1018,
  wn = 1020,
  dl = 1021,
  Ot = 1023,
  pl = 1024,
  ml = 1025,
  Rn = 1026,
  Jn = 1027,
  gl = 1028,
  Ka = 1029,
  _l = 1030,
  ja = 1031,
  Za = 1033,
  dr = 33776,
  pr = 33777,
  mr = 33778,
  gr = 33779,
  Ms = 35840,
  Ss = 35841,
  Es = 35842,
  Ts = 35843,
  $a = 36196,
  ys = 37492,
  As = 37496,
  bs = 37808,
  ws = 37809,
  Rs = 37810,
  Cs = 37811,
  Ps = 37812,
  Ls = 37813,
  Ds = 37814,
  Us = 37815,
  Is = 37816,
  Ns = 37817,
  Fs = 37818,
  Os = 37819,
  Bs = 37820,
  zs = 37821,
  _r = 36492,
  Gs = 36494,
  Hs = 36495,
  vl = 36283,
  Vs = 36284,
  ks = 36285,
  Ws = 36286,
  Ja = 3e3,
  Cn = 3001,
  xl = 3200,
  Ml = 3201,
  Sl = 0,
  El = 1,
  Lt = "",
  lt = "srgb",
  rn = "srgb-linear",
  is = "display-p3",
  tr = "display-p3-linear",
  ji = "linear",
  je = "srgb",
  Zi = "rec709",
  $i = "p3",
  Pn = 7680,
  Xs = 519,
  Tl = 512,
  yl = 513,
  Al = 514,
  Qa = 515,
  bl = 516,
  wl = 517,
  Rl = 518,
  Cl = 519,
  qs = 35044,
  Ys = "300 es",
  Zr = 1035,
  Qt = 2e3,
  Ji = 2001;
class ti { addEventListener(e, t) { this._listeners === void 0 && (this._listeners = {}); const n =
      this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t) } hasEventListener(e,
    t) { if (this._listeners === void 0) return !1; const n = this._listeners; return n[e] !==
      void 0 && n[e].indexOf(t) !== -1 } removeEventListener(e, t) { if (this._listeners ===
      void 0) return; const r = this._listeners[e]; if (r !== void 0) { const s = r.indexOf(t);
      s !== -1 && r.splice(s, 1) } } dispatchEvent(e) { if (this._listeners === void 0)
  return; const n = this._listeners[e.type]; if (n !== void 0) { e.target = this; const r = n
        .slice(0); for (let s = 0, o = r.length; s < o; s++) r[s].call(this, e);
      e.target = null } } }
const ht = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d",
    "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d",
    "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d",
    "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d",
    "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d",
    "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d",
    "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d",
    "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d",
    "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d",
    "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d",
    "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad",
    "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd",
    "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd",
    "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd",
    "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed",
    "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd",
    "fe", "ff"
  ],
  vr = Math.PI / 180,
  $r = 180 / Math.PI;

function mi() { const i = Math.random() * 4294967295 | 0,
    e = Math.random() * 4294967295 | 0,
    t = Math.random() * 4294967295 | 0,
    n = Math.random() * 4294967295 | 0; return (ht[i & 255] + ht[i >> 8 & 255] + ht[i >> 16 & 255] +
      ht[i >> 24 & 255] + "-" + ht[e & 255] + ht[e >> 8 & 255] + "-" + ht[e >> 16 & 15 | 64] + ht[
        e >> 24 & 255] + "-" + ht[t & 63 | 128] + ht[t >> 8 & 255] + "-" + ht[t >> 16 & 255] + ht[
        t >> 24 & 255] + ht[n & 255] + ht[n >> 8 & 255] + ht[n >> 16 & 255] + ht[n >> 24 & 255])
    .toLowerCase() }

function Mt(i, e, t) { return Math.max(e, Math.min(t, i)) }

function Pl(i, e) { return (i % e + e) % e }

function xr(i, e, t) { return (1 - t) * i + t * e }

function Ks(i) { return (i & i - 1) === 0 && i !== 0 }

function Jr(i) { return Math.pow(2, Math.floor(Math.log(i) / Math.LN2)) }

function si(i, e) { switch (e.constructor) {
  case Float32Array:
    return i;
  case Uint32Array:
    return i / 4294967295;
  case Uint16Array:
    return i / 65535;
  case Uint8Array:
    return i / 255;
  case Int32Array:
    return Math.max(i / 2147483647, -1);
  case Int16Array:
    return Math.max(i / 32767, -1);
  case Int8Array:
    return Math.max(i / 127, -1);
  default:
    throw new Error("Invalid component type.") } }

function xt(i, e) { switch (e.constructor) {
  case Float32Array:
    return i;
  case Uint32Array:
    return Math.round(i * 4294967295);
  case Uint16Array:
    return Math.round(i * 65535);
  case Uint8Array:
    return Math.round(i * 255);
  case Int32Array:
    return Math.round(i * 2147483647);
  case Int16Array:
    return Math.round(i * 32767);
  case Int8Array:
    return Math.round(i * 127);
  default:
    throw new Error("Invalid component type.") } } class Pe { constructor(e = 0, t = 0) { Pe
        .prototype.isVector2 = !0, this.x = e, this.y = t } get width() { return this.x } set width(
      e) { this.x = e } get height() { return this.y } set height(e) { this.y = e } set(e,
    t) { return this.x = e, this.y = t, this } setScalar(e) { return this.x = e, this.y = e,
      this } setX(e) { return this.x = e, this } setY(e) { return this.y = e, this } setComponent(e,
      t) { switch (e) {
      case 0:
        this.x = t; break;
      case 1:
        this.y = t; break;
      default:
        throw new Error("index is out of range: " + e) } return this } getComponent(e) { switch (
        e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(
        this.x, this.y) } copy(e) { return this.x = e.x, this.y = e.y, this } add(e) { return this
        .x += e.x, this.y += e.y, this } addScalar(e) { return this.x += e, this.y += e,
      this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y,
      this } addScaledVector(e, t) { return this.x += e.x * t, this.y += e.y * t, this } sub(
    e) { return this.x -= e.x, this.y -= e.y, this } subScalar(e) { return this.x -= e, this.y -= e,
        this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this } multiply(
    e) { return this.x *= e.x, this.y *= e.y, this } multiplyScalar(e) { return this.x *= e, this
        .y *= e, this } divide(e) { return this.x /= e.x, this.y /= e.y, this } divideScalar(
    e) { return this.multiplyScalar(1 / e) } applyMatrix3(e) { const t = this.x,
        n = this.y,
        r = e.elements; return this.x = r[0] * t + r[3] * n + r[6], this.y = r[1] * t + r[4] * n +
        r[7], this } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y),
        this } max(e) { return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y),
      this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e
        .y, Math.min(t.y, this.y)), this } clampScalar(e, t) { return this.x = Math.max(e, Math.min(
        t, this.x)), this.y = Math.max(e, Math.min(t, this.y)), this } clampLength(e, t) { const n =
        this.length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t,
      n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y),
      this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y),
    this } round() { return this.x = Math.round(this.x), this.y = Math.round(this.y),
      this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y),
      this } negate() { return this.x = -this.x, this.y = -this.y, this } dot(e) { return this.x * e
        .x + this.y * e.y } cross(e) { return this.x * e.y - this.y * e.x } lengthSq() { return this
        .x * this.x + this.y * this.y } length() { return Math.sqrt(this.x * this.x + this.y * this
        .y) } manhattanLength() { return Math.abs(this.x) + Math.abs(this
    .y) } normalize() { return this.divideScalar(this.length() || 1) } angle() { return Math.atan2(-
        this.y, -this.x) + Math.PI } angleTo(e) { const t = Math.sqrt(this.lengthSq() * e
      .lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) / t; return Math.acos(Mt(
        n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(
      e)) } distanceToSquared(e) { const t = this.x - e.x,
        n = this.y - e.y; return t * t + n * n } manhattanDistanceTo(e) { return Math.abs(this.x - e
        .x) + Math.abs(this.y - e.y) } setLength(e) { return this.normalize().multiplyScalar(
      e) } lerp(e, t) { return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t,
      this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e
        .y) * n, this } equals(e) { return e.x === this.x && e.y === this.y } fromArray(e, t =
    0) { return this.x = e[t], this.y = e[t + 1], this } toArray(e = [], t = 0) { return e[t] = this
        .x, e[t + 1] = this.y, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e
        .getY(t), this } rotateAround(e, t) { const n = Math.cos(t),
        r = Math.sin(t),
        s = this.x - e.x,
        o = this.y - e.y; return this.x = s * n - o * r + e.x, this.y = s * r + o * n + e.y,
      this } random() { return this.x = Math.random(), this.y = Math.random(), this }*[Symbol
      .iterator
    ]() { yield this.x, yield this.y } } class ze { constructor(e, t, n, r, s, o, a, l, c) { ze
        .prototype.isMatrix3 = !0, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this
        .set(e, t, n, r, s, o, a, l, c) } set(e, t, n, r, s, o, a, l, c) { const h = this
      .elements; return h[0] = e, h[1] = r, h[2] = a, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] =
        o, h[8] = c, this } identity() { return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this } copy(
    e) { const t = this.elements,
        n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[
        5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this } extractBasis(e, t, n) { return e
        .setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(
          this, 2), this } setFromMatrix4(e) { const t = e.elements; return this.set(t[0], t[4], t[
        8], t[1], t[5], t[9], t[2], t[6], t[10]), this } multiply(e) { return this.multiplyMatrices(
        this, e) } premultiply(e) { return this.multiplyMatrices(e, this) } multiplyMatrices(e,
    t) { const n = e.elements,
        r = t.elements,
        s = this.elements,
        o = n[0],
        a = n[3],
        l = n[6],
        c = n[1],
        h = n[4],
        f = n[7],
        p = n[2],
        m = n[5],
        v = n[8],
        _ = r[0],
        d = r[3],
        u = r[6],
        y = r[1],
        E = r[4],
        A = r[7],
        L = r[2],
        R = r[5],
        w = r[8]; return s[0] = o * _ + a * y + l * L, s[3] = o * d + a * E + l * R, s[6] = o * u +
        a * A + l * w, s[1] = c * _ + h * y + f * L, s[4] = c * d + h * E + f * R, s[7] = c * u +
        h * A + f * w, s[2] = p * _ + m * y + v * L, s[5] = p * d + m * E + v * R, s[8] = p * u +
        m * A + v * w, this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[3] *=
        e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e,
        this } determinant() { const e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        o = e[4],
        a = e[5],
        l = e[6],
        c = e[7],
        h = e[8]; return t * o * h - t * a * c - n * s * h + n * a * l + r * s * c - r * o *
      l } invert() { const e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        o = e[4],
        a = e[5],
        l = e[6],
        c = e[7],
        h = e[8],
        f = h * o - a * c,
        p = a * l - h * s,
        m = c * s - o * l,
        v = t * f + n * p + r * m; if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0); const
        _ = 1 / v; return e[0] = f * _, e[1] = (r * c - h * n) * _, e[2] = (a * n - r * o) * _, e[
        3] = p * _, e[4] = (h * t - r * l) * _, e[5] = (r * s - a * t) * _, e[6] = m * _, e[7] = (
          n * l - c * t) * _, e[8] = (o * t - n * s) * _, this } transpose() { let e; const t = this
        .elements; return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[
        5], t[5] = t[7], t[7] = e, this } getNormalMatrix(e) { return this.setFromMatrix4(e)
      .invert().transpose() } transposeIntoArray(e) { const t = this.elements; return e[0] = t[0],
        e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5],
        e[8] = t[8], this } setUvTransform(e, t, n, r, s, o, a) { const l = Math.cos(s),
        c = Math.sin(s); return this.set(n * l, n * c, -n * (l * o + c * a) + o + e, -r * c, r * l,
        -r * (-c * o + l * a) + a + t, 0, 0, 1), this } scale(e, t) { return this.premultiply(Mr
        .makeScale(e, t)), this } rotate(e) { return this.premultiply(Mr.makeRotation(-e)),
      this } translate(e, t) { return this.premultiply(Mr.makeTranslation(e, t)),
      this } makeTranslation(e, t) { return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) :
        this.set(1, 0, e, 0, 1, t, 0, 0, 1), this } makeRotation(e) { const t = Math.cos(e),
        n = Math.sin(e); return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this } makeScale(e,
    t) { return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this } equals(e) { const t = this.elements,
        n = e.elements; for (let r = 0; r < 9; r++)
        if (t[r] !== n[r]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 9; n++)
        this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this
      .elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] =
        n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8],
      e } clone() { return new this.constructor().fromArray(this.elements) } }
const Mr = new ze;

function eo(i) { for (let e = i.length - 1; e >= 0; --e)
    if (i[e] >= 65535) return !0; return !1 }

function Qi(i) { return document.createElementNS("http://www.w3.org/1999/xhtml", i) }

function Ll() { const i = Qi("canvas"); return i.style.display = "block", i }
const js = {};

function ui(i) { i in js || (js[i] = !0, console.warn(i)) }
const Zs = new ze().set(.8224621, .177538, 0, .0331941, .9668058, 0, .0170827, .0723974, .9105199),
  $s = new ze().set(1.2249401, -.2249404, 0, -.0420569, 1.0420571, 0, -.0196376, -.0786361,
    1.0982735),
  Ei = {
    [rn]: { transfer: ji, primaries: Zi, toReference: i => i, fromReference: i => i }, [
    lt]: { transfer: je, primaries: Zi, toReference: i => i.convertSRGBToLinear(),
      fromReference: i => i.convertLinearToSRGB() }, [tr]: { transfer: ji, primaries: $i,
      toReference: i => i.applyMatrix3($s), fromReference: i => i.applyMatrix3(Zs) }, [
    is]: { transfer: je, primaries: $i, toReference: i => i.convertSRGBToLinear().applyMatrix3($s),
      fromReference: i => i.applyMatrix3(Zs).convertLinearToSRGB() } },
  Dl = new Set([rn, tr]),
  We = { enabled: !0, _workingColorSpace: rn, get workingColorSpace() { return this
        ._workingColorSpace }, set workingColorSpace(i) { if (!Dl.has(i)) throw new Error(
        `Unsupported working color space, "${i}".`);
      this._workingColorSpace = i }, convert: function (i, e, t) { if (this.enabled === !1 || e ===
        t || !e || !t) return i; const n = Ei[e].toReference,
        r = Ei[t].fromReference; return r(n(i)) }, fromWorkingColorSpace: function (i,
    e) { return this.convert(i, this._workingColorSpace, e) }, toWorkingColorSpace: function (i,
    e) { return this.convert(i, e, this._workingColorSpace) }, getPrimaries: function (
    i) { return Ei[i].primaries }, getTransfer: function (i) { return i === Lt ? ji : Ei[i]
        .transfer } };

function jn(i) { return i < .04045 ? i * .0773993808 : Math.pow(i * .9478672986 + .0521327014,
  2.4) }

function Sr(i) { return i < .0031308 ? i * 12.92 : 1.055 * Math.pow(i, .41666) - .055 }
let Ln;
class to { static getDataURL(e) { if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
      return e.src; let t; if (e instanceof HTMLCanvasElement) t = e;
    else { Ln === void 0 && (Ln = Qi("canvas")), Ln.width = e.width, Ln.height = e.height; const
        n = Ln.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height),
        t = Ln } return t.width > 2048 || t.height > 2048 ? (console.warn(
        "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t
      .toDataURL("image/jpeg", .6)) : t.toDataURL("image/png") } static sRGBToLinear(e) { if (
      typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement <
      "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" &&
      e instanceof ImageBitmap) { const t = Qi("canvas");
      t.width = e.width, t.height = e.height; const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height); const r = n.getImageData(0, 0, e.width, e.height),
        s = r.data; for (let o = 0; o < s.length; o++) s[o] = jn(s[o] / 255) * 255; return n
        .putImageData(r, 0, 0), t } else if (e.data) { const t = e.data.slice(0); for (let n =
        0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] =
        Math.floor(jn(t[n] / 255) * 255) : t[n] = jn(t[n]); return { data: t, width: e.width,
        height: e.height } } else return console.warn(
      "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
      ), e } }
let Ul = 0;
class no { constructor(e = null) { this.isSource = !0, Object.defineProperty(this,
    "id", { value: Ul++ }), this.uuid = mi(), this.data = e, this.version = 0 } set needsUpdate(
  e) { e === !0 && this.version++ } toJSON(e) { const t = e === void 0 || typeof e ==
    "string"; if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid]; const
      n = { uuid: this.uuid, url: "" },
      r = this.data; if (r !== null) { let s; if (Array.isArray(r)) { s = []; for (let o = 0, a =
            r.length; o < a; o++) r[o].isDataTexture ? s.push(Er(r[o].image)) : s.push(Er(r[
        o])) } else s = Er(r);
      n.url = s } return t || (e.images[this.uuid] = n), n } }

function Er(i) { return typeof HTMLImageElement < "u" && i instanceof HTMLImageElement ||
    typeof HTMLCanvasElement < "u" && i instanceof HTMLCanvasElement || typeof ImageBitmap < "u" &&
    i instanceof ImageBitmap ? to.getDataURL(i) : i.data ? { data: Array.from(i.data), width: i
        .width, height: i.height, type: i.data.constructor.name } : (console.warn(
      "THREE.Texture: Unable to serialize Texture."), {}) }
let Il = 0;
class Et extends ti { constructor(e = Et.DEFAULT_IMAGE, t = Et.DEFAULT_MAPPING, n = Ft, r = Ft, s =
      Ct, o = fi, a = Ot, l = mn, c = Et.DEFAULT_ANISOTROPY, h = Lt) { super(), this.isTexture = !0,
        Object.defineProperty(this, "id", { value: Il++ }), this.uuid = mi(), this.name = "", this
        .source = new no(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n,
        this.wrapT = r, this.magFilter = s, this.minFilter = o, this.anisotropy = c, this.format =
        a, this.internalFormat = null, this.type = l, this.offset = new Pe(0, 0), this.repeat =
        new Pe(1, 1), this.center = new Pe(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0,
        this.matrix = new ze, this.generateMipmaps = !0, this.premultiplyAlpha = !1, this.flipY = !
        0, this.unpackAlignment = 4, typeof h == "string" ? this.colorSpace = h : (ui(
            "THREE.Texture: Property .encoding has been replaced by .colorSpace."), this
          .colorSpace = h === Cn ? lt : Lt), this.userData = {}, this.version = 0, this.onUpdate =
        null, this.isRenderTargetTexture = !1, this.needsPMREMUpdate = !
      1 } get image() { return this.source.data } set image(e = null) { this.source.data =
      e } updateMatrix() { this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x,
        this.repeat.y, this.rotation, this.center.x, this.center.y) } clone() { return new this
        .constructor().copy(this) } copy(e) { return this.name = e.name, this.source = e.source,
        this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this
        .wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e
        .minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e
        .internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat),
        this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e
        .matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e
        .unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(
          e.userData)), this.needsUpdate = !0, this } toJSON(e) { const t = e === void 0 ||
        typeof e == "string"; if (!t && e.textures[this.uuid] !== void 0) return e.textures[this
        .uuid]; const n = { metadata: { version: 4.6, type: "Texture",
        generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source
          .toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x,
          this.repeat.y
        ], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y],
        rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format,
        internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace,
        minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy,
        flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this
          .premultiplyAlpha, unpackAlignment: this.unpackAlignment }; return Object.keys(this
        .userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n),
      n } dispose() { this.dispatchEvent({ type: "dispose" }) } transformUv(e) { if (this.mapping !==
        Wa) return e; if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case Kr:
        e.x = e.x - Math.floor(e.x); break;
      case Ft:
        e.x = e.x < 0 ? 0 : 1; break;
      case jr:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(
          e.x); break }
      if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case Kr:
        e.y = e.y - Math.floor(e.y); break;
      case Ft:
        e.y = e.y < 0 ? 0 : 1; break;
      case jr:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(
          e.y); break }
      return this.flipY && (e.y = 1 - e.y), e } set needsUpdate(e) { e === !0 && (this.version++,
        this.source.needsUpdate = !0) } get encoding() { return ui(
          "THREE.Texture: Property .encoding has been replaced by .colorSpace."), this
        .colorSpace === lt ? Cn : Ja } set encoding(e) { ui(
          "THREE.Texture: Property .encoding has been replaced by .colorSpace."), this.colorSpace =
        e === Cn ? lt : Lt } } Et.DEFAULT_IMAGE = null;
Et.DEFAULT_MAPPING = Wa;
Et.DEFAULT_ANISOTROPY = 1;
class ct { constructor(e = 0, t = 0, n = 0, r = 1) { ct.prototype.isVector4 = !0, this.x = e, this
        .y = t, this.z = n, this.w = r } get width() { return this.z } set width(e) { this.z =
      e } get height() { return this.w } set height(e) { this.w = e } set(e, t, n, r) { return this
        .x = e, this.y = t, this.z = n, this.w = r, this } setScalar(e) { return this.x = e, this
        .y = e, this.z = e, this.w = e, this } setX(e) { return this.x = e, this } setY(
    e) { return this.y = e, this } setZ(e) { return this.z = e, this } setW(e) { return this.w = e,
        this } setComponent(e, t) { switch (e) {
      case 0:
        this.x = t; break;
      case 1:
        this.y = t; break;
      case 2:
        this.z = t; break;
      case 3:
        this.w = t; break;
      default:
        throw new Error("index is out of range: " + e) } return this } getComponent(e) { switch (
        e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(
        this.x, this.y, this.z, this.w) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z,
        this.w = e.w !== void 0 ? e.w : 1, this } add(e) { return this.x += e.x, this.y += e.y, this
        .z += e.z, this.w += e.w, this } addScalar(e) { return this.x += e, this.y += e, this.z +=
        e, this.w += e, this } addVectors(e, t) { return this.x = e.x + t.x, this.y = e.y + t.y,
        this.z = e.z + t.z, this.w = e.w + t.w, this } addScaledVector(e, t) { return this.x += e
        .x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this } sub(e) { return this
        .x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this } subScalar(e) { return this
        .x -= e, this.y -= e, this.z -= e, this.w -= e, this } subVectors(e, t) { return this.x = e
        .x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this } multiply(
    e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this } multiplyScalar(
    e) { return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this } applyMatrix4(e) { const
        t = this.x,
        n = this.y,
        r = this.z,
        s = this.w,
        o = e.elements; return this.x = o[0] * t + o[4] * n + o[8] * r + o[12] * s, this.y = o[1] *
        t + o[5] * n + o[9] * r + o[13] * s, this.z = o[2] * t + o[6] * n + o[10] * r + o[14] * s,
        this.w = o[3] * t + o[7] * n + o[11] * r + o[15] * s, this } divideScalar(e) { return this
        .multiplyScalar(1 / e) } setAxisAngleFromQuaternion(e) { this.w = 2 * Math.acos(e.w); const
        t = Math.sqrt(1 - e.w * e.w); return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this
        .x = e.x / t, this.y = e.y / t, this.z = e.z / t), this } setAxisAngleFromRotationMatrix(
    e) { let t, n, r, s; const l = e.elements,
        c = l[0],
        h = l[4],
        f = l[8],
        p = l[1],
        m = l[5],
        v = l[9],
        _ = l[2],
        d = l[6],
        u = l[10]; if (Math.abs(h - p) < .01 && Math.abs(f - _) < .01 && Math.abs(v - d) <
        .01) { if (Math.abs(h + p) < .1 && Math.abs(f + _) < .1 && Math.abs(v + d) < .1 && Math.abs(
            c + m + u - 3) < .1) return this.set(1, 0, 0, 0), this;
        t = Math.PI; const E = (c + 1) / 2,
          A = (m + 1) / 2,
          L = (u + 1) / 2,
          R = (h + p) / 4,
          w = (f + _) / 4,
          Z = (v + d) / 4; return E > A && E > L ? E < .01 ? (n = 0, r = .707106781, s =
          .707106781) : (n = Math.sqrt(E), r = R / n, s = w / n) : A > L ? A < .01 ? (n =
            .707106781, r = 0, s = .707106781) : (r = Math.sqrt(A), n = R / r, s = Z / r) : L <
          .01 ? (n = .707106781, r = .707106781, s = 0) : (s = Math.sqrt(L), n = w / s, r = Z / s),
          this.set(n, r, s, t), this } let y = Math.sqrt((d - v) * (d - v) + (f - _) * (f - _) + (
        p - h) * (p - h)); return Math.abs(y) < .001 && (y = 1), this.x = (d - v) / y, this.y = (f -
        _) / y, this.z = (p - h) / y, this.w = Math.acos((c + m + u - 1) / 2), this } min(
    e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(
        this.z, e.z), this.w = Math.min(this.w, e.w), this } max(e) { return this.x = Math.max(this
          .x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math
        .max(this.w, e.w), this } clamp(e, t) { return this.x = Math.max(e.x, Math.min(t.x, this
        .x)), this.y = Math.max(e.y, Math.min(t.y, this.y)), this.z = Math.max(e.z, Math.min(t.z,
          this.z)), this.w = Math.max(e.w, Math.min(t.w, this.w)), this } clampScalar(e,
    t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this
        .y)), this.z = Math.max(e, Math.min(t, this.z)), this.w = Math.max(e, Math.min(t, this.w)),
        this } clampLength(e, t) { const n = this.length(); return this.divideScalar(n || 1)
        .multiplyScalar(Math.max(e, Math.min(t, n))) } floor() { return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w),
        this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math
        .ceil(this.z), this.w = Math.ceil(this.w), this } round() { return this.x = Math.round(this
          .x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this
        .w), this } roundToZero() { return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this } negate() { return this
        .x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this } dot(
    e) { return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w } lengthSq() { return this
        .x * this.x + this.y * this.y + this.z * this.z + this.w * this.w } length() { return Math
        .sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this
        .w) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) +
        Math.abs(this.w) } normalize() { return this.divideScalar(this.length() || 1) } setLength(
    e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) *
        t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t,
        this } lerpVectors(e, t, n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e
        .y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this } equals(
    e) { return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w } fromArray(e,
      t = 0) { return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3],
      this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[
        t + 3] = this.w, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e.getY(
        t), this.z = e.getZ(t), this.w = e.getW(t), this } random() { return this.x = Math.random(),
        this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this }*[Symbol
      .iterator
    ]() { yield this.x, yield this.y, yield this.z, yield this
      .w } } class Nl extends ti { constructor(e = 1, t = 1, n = {}) { super(), this
      .isRenderTarget = !0, this.width = e, this.height = t, this.depth = 1, this.scissor =
      new ct(0, 0, e, t), this.scissorTest = !1, this.viewport = new ct(0, 0, e, t); const
    r = { width: e, height: t, depth: 1 };
    n.encoding !== void 0 && (ui(
          "THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."), n
        .colorSpace = n.encoding === Cn ? lt : Lt), n = Object.assign({ generateMipmaps: !1,
        internalFormat: null, minFilter: Ct, depthBuffer: !0, stencilBuffer: !1,
        depthTexture: null, samples: 0 }, n), this.texture = new Et(r, n.mapping, n.wrapS, n
        .wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace), this
      .texture.isRenderTargetTexture = !0, this.texture.flipY = !1, this.texture.generateMipmaps =
      n.generateMipmaps, this.texture.internalFormat = n.internalFormat, this.depthBuffer = n
      .depthBuffer, this.stencilBuffer = n.stencilBuffer, this.depthTexture = n.depthTexture, this
      .samples = n.samples } setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) && (this.width = e, this.height =
      t, this.depth = n, this.texture.image.width = e, this.texture.image.height = t, this.texture
      .image.depth = n, this.dispose()), this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e,
      t) } clone() { return new this.constructor().copy(this) } copy(e) { this.width = e.width,
      this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this
      .scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.texture = e.texture
      .clone(), this.texture.isRenderTargetTexture = !0; const t = Object.assign({}, e.texture
      .image); return this.texture.source = new no(t), this.depthBuffer = e.depthBuffer, this
      .stencilBuffer = e.stencilBuffer, e.depthTexture !== null && (this.depthTexture = e
        .depthTexture.clone()), this.samples = e.samples, this } dispose() { this
  .dispatchEvent({ type: "dispose" }) } } class Bt extends Nl { constructor(e = 1, t = 1,
  n = {}) { super(e, t, n), this.isWebGLRenderTarget = !0 } } class io extends Et { constructor(e =
    null, t = 1, n = 1, r = 1) { super(null), this.isDataArrayTexture = !0, this
      .image = { data: e, width: t, height: n, depth: r }, this.magFilter = _t, this.minFilter =
      _t, this.wrapR = Ft, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment =
      1 } } class Fl extends Et { constructor(e = null, t = 1, n = 1, r = 1) { super(null), this
      .isData3DTexture = !0, this.image = { data: e, width: t, height: n, depth: r }, this
      .magFilter = _t, this.minFilter = _t, this.wrapR = Ft, this.generateMipmaps = !1, this
      .flipY = !1, this.unpackAlignment = 1 } } class gi { constructor(e = 0, t = 0, n = 0, r =
    1) { this.isQuaternion = !0, this._x = e, this._y = t, this._z = n, this._w =
      r } static slerpFlat(e, t, n, r, s, o, a) { let l = n[r + 0],
        c = n[r + 1],
        h = n[r + 2],
        f = n[r + 3]; const p = s[o + 0],
        m = s[o + 1],
        v = s[o + 2],
        _ = s[o + 3]; if (a === 0) { e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] =
        f; return } if (a === 1) { e[t + 0] = p, e[t + 1] = m, e[t + 2] = v, e[t + 3] =
        _; return } if (f !== _ || l !== p || c !== m || h !== v) { let d = 1 - a; const u = l * p +
          c * m + h * v + f * _,
          y = u >= 0 ? 1 : -1,
          E = 1 - u * u; if (E > Number.EPSILON) { const L = Math.sqrt(E),
            R = Math.atan2(L, u * y);
          d = Math.sin(d * R) / L, a = Math.sin(a * R) / L } const A = a * y; if (l = l * d + p * A,
          c = c * d + m * A, h = h * d + v * A, f = f * d + _ * A, d === 1 - a) { const L = 1 / Math
            .sqrt(l * l + c * c + h * h + f * f);
          l *= L, c *= L, h *= L, f *= L } } e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] =
      f } static multiplyQuaternionsFlat(e, t, n, r, s, o) { const a = n[r],
        l = n[r + 1],
        c = n[r + 2],
        h = n[r + 3],
        f = s[o],
        p = s[o + 1],
        m = s[o + 2],
        v = s[o + 3]; return e[t] = a * v + h * f + l * m - c * p, e[t + 1] = l * v + h * p + c *
        f - a * m, e[t + 2] = c * v + h * m + a * p - l * f, e[t + 3] = h * v - a * f - l * p - c *
        m, e } get x() { return this._x } set x(e) { this._x = e, this
  ._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this
    ._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this
        ._onChangeCallback() } get w() { return this._w } set w(e) { this._w = e, this
        ._onChangeCallback() } set(e, t, n, r) { return this._x = e, this._y = t, this._z = n, this
        ._w = r, this._onChangeCallback(), this } clone() { return new this.constructor(this._x,
        this._y, this._z, this._w) } copy(e) { return this._x = e.x, this._y = e.y, this._z = e.z,
        this._w = e.w, this._onChangeCallback(), this } setFromEuler(e, t = !0) { const n = e._x,
        r = e._y,
        s = e._z,
        o = e._order,
        a = Math.cos,
        l = Math.sin,
        c = a(n / 2),
        h = a(r / 2),
        f = a(s / 2),
        p = l(n / 2),
        m = l(r / 2),
        v = l(s / 2); switch (o) {
      case "XYZ":
        this._x = p * h * f + c * m * v, this._y = c * m * f - p * h * v, this._z = c * h * v + p *
          m * f, this._w = c * h * f - p * m * v; break;
      case "YXZ":
        this._x = p * h * f + c * m * v, this._y = c * m * f - p * h * v, this._z = c * h * v - p *
          m * f, this._w = c * h * f + p * m * v; break;
      case "ZXY":
        this._x = p * h * f - c * m * v, this._y = c * m * f + p * h * v, this._z = c * h * v + p *
          m * f, this._w = c * h * f - p * m * v; break;
      case "ZYX":
        this._x = p * h * f - c * m * v, this._y = c * m * f + p * h * v, this._z = c * h * v - p *
          m * f, this._w = c * h * f + p * m * v; break;
      case "YZX":
        this._x = p * h * f + c * m * v, this._y = c * m * f + p * h * v, this._z = c * h * v - p *
          m * f, this._w = c * h * f - p * m * v; break;
      case "XZY":
        this._x = p * h * f - c * m * v, this._y = c * m * f - p * h * v, this._z = c * h * v + p *
          m * f, this._w = c * h * f + p * m * v; break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
        o) } return t === !0 && this._onChangeCallback(), this } setFromAxisAngle(e, t) { const n =
        t / 2,
        r = Math.sin(n); return this._x = e.x * r, this._y = e.y * r, this._z = e.z * r, this._w =
        Math.cos(n), this._onChangeCallback(), this } setFromRotationMatrix(e) { const t = e
        .elements,
        n = t[0],
        r = t[4],
        s = t[8],
        o = t[1],
        a = t[5],
        l = t[9],
        c = t[2],
        h = t[6],
        f = t[10],
        p = n + a + f; if (p > 0) { const m = .5 / Math.sqrt(p + 1);
        this._w = .25 / m, this._x = (h - l) * m, this._y = (s - c) * m, this._z = (o - r) *
        m } else if (n > a && n > f) { const m = 2 * Math.sqrt(1 + n - a - f);
        this._w = (h - l) / m, this._x = .25 * m, this._y = (r + o) / m, this._z = (s + c) /
        m } else if (a > f) { const m = 2 * Math.sqrt(1 + a - n - f);
        this._w = (s - c) / m, this._x = (r + o) / m, this._y = .25 * m, this._z = (l + h) /
        m } else { const m = 2 * Math.sqrt(1 + f - n - a);
        this._w = (o - r) / m, this._x = (s + c) / m, this._y = (l + h) / m, this._z = .25 *
        m } return this._onChangeCallback(), this } setFromUnitVectors(e, t) { let n = e.dot(t) +
      1; return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this
        ._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this
        ._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e
        .x * t.y - e.y * t.x, this._w = n), this.normalize() } angleTo(e) { return 2 * Math.acos(
        Math.abs(Mt(this.dot(e), -1, 1))) } rotateTowards(e, t) { const n = this.angleTo(e); if (
        n === 0) return this; const r = Math.min(1, t / n); return this.slerp(e, r),
      this } identity() { return this.set(0, 0, 0, 1) } invert() { return this
    .conjugate() } conjugate() { return this._x *= -1, this._y *= -1, this._z *= -1, this
        ._onChangeCallback(), this } dot(e) { return this._x * e._x + this._y * e._y + this._z * e
        ._z + this._w * e._w } lengthSq() { return this._x * this._x + this._y * this._y + this._z *
        this._z + this._w * this._w } length() { return Math.sqrt(this._x * this._x + this._y * this
        ._y + this._z * this._z + this._w * this._w) } normalize() { let e = this
    .length(); return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e,
          this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e
          ), this._onChangeCallback(), this } multiply(e) { return this.multiplyQuaternions(this,
      e) } premultiply(e) { return this.multiplyQuaternions(e, this) } multiplyQuaternions(e,
    t) { const n = e._x,
        r = e._y,
        s = e._z,
        o = e._w,
        a = t._x,
        l = t._y,
        c = t._z,
        h = t._w; return this._x = n * h + o * a + r * c - s * l, this._y = r * h + o * l + s * a -
        n * c, this._z = s * h + o * c + n * l - r * a, this._w = o * h - n * a - r * l - s * c,
        this._onChangeCallback(), this } slerp(e, t) { if (t === 0) return this; if (t === 1)
      return this.copy(e); const n = this._x,
        r = this._y,
        s = this._z,
        o = this._w; let a = o * e._w + n * e._x + r * e._y + s * e._z; if (a < 0 ? (this._w = -e
          ._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, a = -a) : this.copy(e), a >= 1)
        return this._w = o, this._x = n, this._y = r, this._z = s, this; const l = 1 - a * a; if (
        l <= Number.EPSILON) { const m = 1 - t; return this._w = m * o + t * this._w, this._x = m *
          n + t * this._x, this._y = m * r + t * this._y, this._z = m * s + t * this._z, this
          .normalize(), this } const c = Math.sqrt(l),
        h = Math.atan2(c, a),
        f = Math.sin((1 - t) * h) / c,
        p = Math.sin(t * h) / c; return this._w = o * f + this._w * p, this._x = n * f + this._x *
        p, this._y = r * f + this._y * p, this._z = s * f + this._z * p, this._onChangeCallback(),
        this } slerpQuaternions(e, t, n) { return this.copy(e).slerp(t, n) } random() { const e =
        Math.random(),
        t = Math.sqrt(1 - e),
        n = Math.sqrt(e),
        r = 2 * Math.PI * Math.random(),
        s = 2 * Math.PI * Math.random(); return this.set(t * Math.cos(r), n * Math.sin(s), n * Math
        .cos(s), t * Math.sin(r)) } equals(e) { return e._x === this._x && e._y === this._y && e
        ._z === this._z && e._w === this._w } fromArray(e, t = 0) { return this._x = e[t], this._y =
        e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this } toArray(
      e = [], t = 0) { return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] =
        this._w, e } fromBufferAttribute(e, t) { return this._x = e.getX(t), this._y = e.getY(t),
        this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(),
      this } toJSON() { return this.toArray() } _onChange(e) { return this._onChangeCallback = e,
        this } _onChangeCallback() {}*[Symbol.iterator]() { yield this._x, yield this._y, yield this
        ._z, yield this._w } } class D { constructor(e = 0, t = 0, n = 0) { D.prototype
        .isVector3 = !0, this.x = e, this.y = t, this.z = n } set(e, t, n) { return n === void 0 &&
        (n = this.z), this.x = e, this.y = t, this.z = n, this } setScalar(e) { return this.x = e,
        this.y = e, this.z = e, this } setX(e) { return this.x = e, this } setY(e) { return this.y =
        e, this } setZ(e) { return this.z = e, this } setComponent(e, t) { switch (e) {
      case 0:
        this.x = t; break;
      case 1:
        this.y = t; break;
      case 2:
        this.z = t; break;
      default:
        throw new Error("index is out of range: " + e) } return this } getComponent(e) { switch (
        e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e) } } clone() { return new this.constructor(
        this.x, this.y, this.z) } copy(e) { return this.x = e.x, this.y = e.y, this.z = e.z,
      this } add(e) { return this.x += e.x, this.y += e.y, this.z += e.z, this } addScalar(
    e) { return this.x += e, this.y += e, this.z += e, this } addVectors(e, t) { return this.x = e
        .x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this } addScaledVector(e, t) { return this
        .x += e.x * t, this.y += e.y * t, this.z += e.z * t, this } sub(e) { return this.x -= e.x,
        this.y -= e.y, this.z -= e.z, this } subScalar(e) { return this.x -= e, this.y -= e, this
        .z -= e, this } subVectors(e, t) { return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e
        .z - t.z, this } multiply(e) { return this.x *= e.x, this.y *= e.y, this.z *= e.z,
      this } multiplyScalar(e) { return this.x *= e, this.y *= e, this.z *= e,
      this } multiplyVectors(e, t) { return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t
        .z, this } applyEuler(e) { return this.applyQuaternion(Js.setFromEuler(e)) } applyAxisAngle(
      e, t) { return this.applyQuaternion(Js.setFromAxisAngle(e, t)) } applyMatrix3(e) { const t =
        this.x,
        n = this.y,
        r = this.z,
        s = e.elements; return this.x = s[0] * t + s[3] * n + s[6] * r, this.y = s[1] * t + s[4] *
        n + s[7] * r, this.z = s[2] * t + s[5] * n + s[8] * r, this } applyNormalMatrix(
    e) { return this.applyMatrix3(e).normalize() } applyMatrix4(e) { const t = this.x,
        n = this.y,
        r = this.z,
        s = e.elements,
        o = 1 / (s[3] * t + s[7] * n + s[11] * r + s[15]); return this.x = (s[0] * t + s[4] * n + s[
        8] * r + s[12]) * o, this.y = (s[1] * t + s[5] * n + s[9] * r + s[13]) * o, this.z = (s[
        2] * t + s[6] * n + s[10] * r + s[14]) * o, this } applyQuaternion(e) { const t = this.x,
        n = this.y,
        r = this.z,
        s = e.x,
        o = e.y,
        a = e.z,
        l = e.w,
        c = 2 * (o * r - a * n),
        h = 2 * (a * t - s * r),
        f = 2 * (s * n - o * t); return this.x = t + l * c + o * f - a * h, this.y = n + l * h + a *
        c - s * f, this.z = r + l * f + s * h - o * c, this } project(e) { return this.applyMatrix4(
        e.matrixWorldInverse).applyMatrix4(e.projectionMatrix) } unproject(e) { return this
        .applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld) } transformDirection(
    e) { const t = this.x,
        n = this.y,
        r = this.z,
        s = e.elements; return this.x = s[0] * t + s[4] * n + s[8] * r, this.y = s[1] * t + s[5] *
        n + s[9] * r, this.z = s[2] * t + s[6] * n + s[10] * r, this.normalize() } divide(
    e) { return this.x /= e.x, this.y /= e.y, this.z /= e.z, this } divideScalar(e) { return this
        .multiplyScalar(1 / e) } min(e) { return this.x = Math.min(this.x, e.x), this.y = Math.min(
        this.y, e.y), this.z = Math.min(this.z, e.z), this } max(e) { return this.x = Math.max(this
        .x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this } clamp(e,
    t) { return this.x = Math.max(e.x, Math.min(t.x, this.x)), this.y = Math.max(e.y, Math.min(t.y,
        this.y)), this.z = Math.max(e.z, Math.min(t.z, this.z)), this } clampScalar(e,
    t) { return this.x = Math.max(e, Math.min(t, this.x)), this.y = Math.max(e, Math.min(t, this
        .y)), this.z = Math.max(e, Math.min(t, this.z)), this } clampLength(e, t) { const n = this
        .length(); return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t,
      n))) } floor() { return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z =
        Math.floor(this.z), this } ceil() { return this.x = Math.ceil(this.x), this.y = Math.ceil(
        this.y), this.z = Math.ceil(this.z), this } round() { return this.x = Math.round(this.x),
        this.y = Math.round(this.y), this.z = Math.round(this.z), this } roundToZero() { return this
        .x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z),
        this } negate() { return this.x = -this.x, this.y = -this.y, this.z = -this.z, this } dot(
    e) { return this.x * e.x + this.y * e.y + this.z * e.z } lengthSq() { return this.x * this.x +
        this.y * this.y + this.z * this.z } length() { return Math.sqrt(this.x * this.x + this.y *
        this.y + this.z * this.z) } manhattanLength() { return Math.abs(this.x) + Math.abs(this.y) +
        Math.abs(this.z) } normalize() { return this.divideScalar(this.length() || 1) } setLength(
    e) { return this.normalize().multiplyScalar(e) } lerp(e, t) { return this.x += (e.x - this.x) *
        t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this } lerpVectors(e, t,
    n) { return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t
        .z - e.z) * n, this } cross(e) { return this.crossVectors(this, e) } crossVectors(e,
    t) { const n = e.x,
        r = e.y,
        s = e.z,
        o = t.x,
        a = t.y,
        l = t.z; return this.x = r * l - s * a, this.y = s * o - n * l, this.z = n * a - r * o,
      this } projectOnVector(e) { const t = e.lengthSq(); if (t === 0) return this.set(0, 0,
      0); const n = e.dot(this) / t; return this.copy(e).multiplyScalar(n) } projectOnPlane(
    e) { return Tr.copy(this).projectOnVector(e), this.sub(Tr) } reflect(e) { return this.sub(Tr
        .copy(e).multiplyScalar(2 * this.dot(e))) } angleTo(e) { const t = Math.sqrt(this
      .lengthSq() * e.lengthSq()); if (t === 0) return Math.PI / 2; const n = this.dot(e) /
      t; return Math.acos(Mt(n, -1, 1)) } distanceTo(e) { return Math.sqrt(this.distanceToSquared(
        e)) } distanceToSquared(e) { const t = this.x - e.x,
        n = this.y - e.y,
        r = this.z - e.z; return t * t + n * n + r * r } manhattanDistanceTo(e) { return Math.abs(
        this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z) } setFromSpherical(
    e) { return this.setFromSphericalCoords(e.radius, e.phi, e.theta) } setFromSphericalCoords(e, t,
      n) { const r = Math.sin(t) * e; return this.x = r * Math.sin(n), this.y = Math.cos(t) * e,
        this.z = r * Math.cos(n), this } setFromCylindrical(e) { return this
        .setFromCylindricalCoords(e.radius, e.theta, e.y) } setFromCylindricalCoords(e, t,
    n) { return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t),
      this } setFromMatrixPosition(e) { const t = e.elements; return this.x = t[12], this.y = t[13],
        this.z = t[14], this } setFromMatrixScale(e) { const t = this.setFromMatrixColumn(e, 0)
        .length(),
        n = this.setFromMatrixColumn(e, 1).length(),
        r = this.setFromMatrixColumn(e, 2).length(); return this.x = t, this.y = n, this.z = r,
      this } setFromMatrixColumn(e, t) { return this.fromArray(e.elements, t *
      4) } setFromMatrix3Column(e, t) { return this.fromArray(e.elements, t * 3) } setFromEuler(
    e) { return this.x = e._x, this.y = e._y, this.z = e._z, this } setFromColor(e) { return this
        .x = e.r, this.y = e.g, this.z = e.b, this } equals(e) { return e.x === this.x && e.y ===
        this.y && e.z === this.z } fromArray(e, t = 0) { return this.x = e[t], this.y = e[t + 1],
        this.z = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.x, e[t + 1] = this.y,
        e[t + 2] = this.z, e } fromBufferAttribute(e, t) { return this.x = e.getX(t), this.y = e
        .getY(t), this.z = e.getZ(t), this } random() { return this.x = Math.random(), this.y = Math
        .random(), this.z = Math.random(), this } randomDirection() { const e = (Math.random() -
        .5) * 2,
        t = Math.random() * Math.PI * 2,
        n = Math.sqrt(1 - e ** 2); return this.x = n * Math.cos(t), this.y = n * Math.sin(t), this
        .z = e, this }*[Symbol.iterator]() { yield this.x, yield this.y, yield this.z } }
const Tr = new D,
  Js = new gi;
class _i { constructor(e = new D(1 / 0, 1 / 0, 1 / 0), t = new D(-1 / 0, -1 / 0, -1 / 0)) { this
        .isBox3 = !0, this.min = e, this.max = t } set(e, t) { return this.min.copy(e), this.max
        .copy(t), this } setFromArray(e) { this.makeEmpty(); for (let t = 0, n = e.length; t <
        n; t += 3) this.expandByPoint(Dt.fromArray(e, t)); return this } setFromBufferAttribute(
    e) { this.makeEmpty(); for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Dt
        .fromBufferAttribute(e, t)); return this } setFromPoints(e) { this.makeEmpty(); for (let t =
          0, n = e.length; t < n; t++) this.expandByPoint(e[t]); return this } setFromCenterAndSize(
      e, t) { const n = Dt.copy(t).multiplyScalar(.5); return this.min.copy(e).sub(n), this.max
        .copy(e).add(n), this } setFromObject(e, t = !1) { return this.makeEmpty(), this
        .expandByObject(e, t) } clone() { return new this.constructor().copy(this) } copy(
    e) { return this.min.copy(e.min), this.max.copy(e.max), this } makeEmpty() { return this.min.x =
        this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0,
        this } isEmpty() { return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z <
        this.min.z } getCenter(e) { return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min,
        this.max).multiplyScalar(.5) } getSize(e) { return this.isEmpty() ? e.set(0, 0, 0) : e
        .subVectors(this.max, this.min) } expandByPoint(e) { return this.min.min(e), this.max.max(
        e), this } expandByVector(e) { return this.min.sub(e), this.max.add(e),
      this } expandByScalar(e) { return this.min.addScalar(-e), this.max.addScalar(e),
      this } expandByObject(e, t = !1) { e.updateWorldMatrix(!1, !1); const n = e.geometry; if (
        n !== void 0) { const s = n.getAttribute("position"); if (t === !0 && s !== void 0 && e
          .isInstancedMesh !== !0)
          for (let o = 0, a = s.count; o < a; o++) e.isMesh === !0 ? e.getVertexPosition(o, Dt) : Dt
            .fromBufferAttribute(s, o), Dt.applyMatrix4(e.matrixWorld), this.expandByPoint(Dt);
        else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ti.copy(e
          .boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ti.copy(n
          .boundingBox)), Ti.applyMatrix4(e.matrixWorld), this.union(Ti) } const r = e
      .children; for (let s = 0, o = r.length; s < o; s++) this.expandByObject(r[s],
    t); return this } containsPoint(e) { return !(e.x < this.min.x || e.x > this.max.x || e.y < this
        .min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z) } containsBox(
    e) { return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max
        .y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z } getParameter(e,
    t) { return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max
        .y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z)) } intersectsBox(
    e) { return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y >
        this.max.y || e.max.z < this.min.z || e.min.z > this.max.z) } intersectsSphere(
    e) { return this.clampPoint(e.center, Dt), Dt.distanceToSquared(e.center) <= e.radius * e
        .radius } intersectsPlane(e) { let t, n; return e.normal.x > 0 ? (t = e.normal.x * this.min
        .x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min
        .x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t +=
        e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal
        .z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e
        .normal.z * this.min.z), t <= -e.constant && n >= -e.constant } intersectsTriangle(e) { if (
        this.isEmpty()) return !1;
      this.getCenter(ai), yi.subVectors(this.max, ai), Dn.subVectors(e.a, ai), Un.subVectors(e.b,
        ai), In.subVectors(e.c, ai), an.subVectors(Un, Dn), on.subVectors(In, Un), xn.subVectors(
        Dn, In); let t = [0, -an.z, an.y, 0, -on.z, on.y, 0, -xn.z, xn.y, an.z, 0, -an.x, on.z, 0, -
        on.x, xn.z, 0, -xn.x, -an.y, an.x, 0, -on.y, on.x, 0, -xn.y, xn.x, 0
      ]; return !yr(t, Dn, Un, In, yi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !yr(t, Dn, Un, In,
        yi)) ? !1 : (Ai.crossVectors(an, on), t = [Ai.x, Ai.y, Ai.z], yr(t, Dn, Un, In,
        yi)) } clampPoint(e, t) { return t.copy(e).clamp(this.min, this.max) } distanceToPoint(
    e) { return this.clampPoint(e, Dt).distanceTo(e) } getBoundingSphere(e) { return this
      .isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Dt).length() *
          .5), e } intersect(e) { return this.min.max(e.min), this.max.min(e.max), this.isEmpty() &&
        this.makeEmpty(), this } union(e) { return this.min.min(e.min), this.max.max(e.max),
      this } applyMatrix4(e) { return this.isEmpty() ? this : (qt[0].set(this.min.x, this.min.y,
          this.min.z).applyMatrix4(e), qt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(
          e), qt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), qt[3].set(this.min.x,
          this.max.y, this.max.z).applyMatrix4(e), qt[4].set(this.max.x, this.min.y, this.min.z)
        .applyMatrix4(e), qt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), qt[6]
        .set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), qt[7].set(this.max.x, this.max
          .y, this.max.z).applyMatrix4(e), this.setFromPoints(qt), this) } translate(
    e) { return this.min.add(e), this.max.add(e), this } equals(e) { return e.min.equals(this
        .min) && e.max.equals(this.max) } }
const qt = [new D, new D, new D, new D, new D, new D, new D, new D],
  Dt = new D,
  Ti = new _i,
  Dn = new D,
  Un = new D,
  In = new D,
  an = new D,
  on = new D,
  xn = new D,
  ai = new D,
  yi = new D,
  Ai = new D,
  Mn = new D;

function yr(i, e, t, n, r) { for (let s = 0, o = i.length - 3; s <= o; s += 3) { Mn.fromArray(i,
    s); const a = r.x * Math.abs(Mn.x) + r.y * Math.abs(Mn.y) + r.z * Math.abs(Mn.z),
      l = e.dot(Mn),
      c = t.dot(Mn),
      h = n.dot(Mn); if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > a) return !1 } return !
  0 }
const Ol = new _i,
  oi = new D,
  Ar = new D;
class nr { constructor(e = new D, t = -1) { this.isSphere = !0, this.center = e, this.radius =
      t } set(e, t) { return this.center.copy(e), this.radius = t, this } setFromPoints(e,
    t) { const n = this.center;
      t !== void 0 ? n.copy(t) : Ol.setFromPoints(e).getCenter(n); let r = 0; for (let s = 0, o = e
          .length; s < o; s++) r = Math.max(r, n.distanceToSquared(e[s])); return this.radius = Math
        .sqrt(r), this } copy(e) { return this.center.copy(e.center), this.radius = e.radius,
      this } isEmpty() { return this.radius < 0 } makeEmpty() { return this.center.set(0, 0, 0),
        this.radius = -1, this } containsPoint(e) { return e.distanceToSquared(this.center) <= this
        .radius * this.radius } distanceToPoint(e) { return e.distanceTo(this.center) - this
      .radius } intersectsSphere(e) { const t = this.radius + e.radius; return e.center
        .distanceToSquared(this.center) <= t * t } intersectsBox(e) { return e.intersectsSphere(
        this) } intersectsPlane(e) { return Math.abs(e.distanceToPoint(this.center)) <= this
      .radius } clampPoint(e, t) { const n = this.center.distanceToSquared(e); return t.copy(e), n >
        this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius)
          .add(this.center)), t } getBoundingBox(e) { return this.isEmpty() ? (e.makeEmpty(), e) : (
        e.set(this.center, this.center), e.expandByScalar(this.radius), e) } applyMatrix4(
    e) { return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(),
      this } translate(e) { return this.center.add(e), this } expandByPoint(e) { if (this.isEmpty())
        return this.center.copy(e), this.radius = 0, this;
      oi.subVectors(e, this.center); const t = oi.lengthSq(); if (t > this.radius * this
        .radius) { const n = Math.sqrt(t),
          r = (n - this.radius) * .5;
        this.center.addScaledVector(oi, r / n), this.radius += r } return this } union(e) { return e
        .isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e
          .center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (Ar.subVectors(e.center,
              this.center).setLength(e.radius), this.expandByPoint(oi.copy(e.center).add(Ar)), this
            .expandByPoint(oi.copy(e.center).sub(Ar))), this) } equals(e) { return e.center.equals(
        this.center) && e.radius === this.radius } clone() { return new this.constructor().copy(
        this) } }
const Yt = new D,
  br = new D,
  bi = new D,
  ln = new D,
  wr = new D,
  wi = new D,
  Rr = new D;
class ro { constructor(e = new D, t = new D(0, 0, -1)) { this.origin = e, this.direction = t } set(
      e, t) { return this.origin.copy(e), this.direction.copy(t), this } copy(e) { return this
        .origin.copy(e.origin), this.direction.copy(e.direction), this } at(e, t) { return t.copy(
        this.origin).addScaledVector(this.direction, e) } lookAt(e) { return this.direction.copy(e)
        .sub(this.origin).normalize(), this } recast(e) { return this.origin.copy(this.at(e, Yt)),
        this } closestPointToPoint(e, t) { t.subVectors(e, this.origin); const n = t.dot(this
        .direction); return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this
        .direction, n) } distanceToPoint(e) { return Math.sqrt(this.distanceSqToPoint(
      e)) } distanceSqToPoint(e) { const t = Yt.subVectors(e, this.origin).dot(this
      .direction); return t < 0 ? this.origin.distanceToSquared(e) : (Yt.copy(this.origin)
        .addScaledVector(this.direction, t), Yt.distanceToSquared(e)) } distanceSqToSegment(e, t, n,
      r) { br.copy(e).add(t).multiplyScalar(.5), bi.copy(t).sub(e).normalize(), ln.copy(this.origin)
        .sub(br); const s = e.distanceTo(t) * .5,
        o = -this.direction.dot(bi),
        a = ln.dot(this.direction),
        l = -ln.dot(bi),
        c = ln.lengthSq(),
        h = Math.abs(1 - o * o); let f, p, m, v; if (h > 0)
        if (f = o * l - a, p = o * a - l, v = s * h, f >= 0)
          if (p >= -v)
            if (p <= v) { const _ = 1 / h;
              f *= _, p *= _, m = f * (f + o * p + 2 * a) + p * (o * f + p + 2 * l) + c } else p =
              s, f = Math.max(0, -(o * p + a)), m = -f * f + p * (p + 2 * l) + c;
      else p = -s, f = Math.max(0, -(o * p + a)), m = -f * f + p * (p + 2 * l) + c;
      else p <= -v ? (f = Math.max(0, -(-o * s + a)), p = f > 0 ? -s : Math.min(Math.max(-s, -l),
        s), m = -f * f + p * (p + 2 * l) + c) : p <= v ? (f = 0, p = Math.min(Math.max(-s, -l),
        s), m = p * (p + 2 * l) + c) : (f = Math.max(0, -(o * s + a)), p = f > 0 ? s : Math.min(
        Math.max(-s, -l), s), m = -f * f + p * (p + 2 * l) + c);
      else p = o > 0 ? -s : s, f = Math.max(0, -(o * p + a)), m = -f * f + p * (p + 2 * l) +
      c; return n && n.copy(this.origin).addScaledVector(this.direction, f), r && r.copy(br)
        .addScaledVector(bi, p), m } intersectSphere(e, t) { Yt.subVectors(e.center, this
      .origin); const n = Yt.dot(this.direction),
        r = Yt.dot(Yt) - n * n,
        s = e.radius * e.radius; if (r > s) return null; const o = Math.sqrt(s - r),
        a = n - o,
        l = n + o; return l < 0 ? null : a < 0 ? this.at(l, t) : this.at(a, t) } intersectsSphere(
    e) { return this.distanceSqToPoint(e.center) <= e.radius * e.radius } distanceToPlane(e) { const
        t = e.normal.dot(this.direction); if (t === 0) return e.distanceToPoint(this.origin) === 0 ?
        0 : null; const n = -(this.origin.dot(e.normal) + e.constant) / t; return n >= 0 ? n :
      null } intersectPlane(e, t) { const n = this.distanceToPlane(e); return n === null ? null :
        this.at(n, t) } intersectsPlane(e) { const t = e.distanceToPoint(this.origin); return t ===
        0 || e.normal.dot(this.direction) * t < 0 } intersectBox(e, t) { let n, r, s, o, a, l; const
        c = 1 / this.direction.x,
        h = 1 / this.direction.y,
        f = 1 / this.direction.z,
        p = this.origin; return c >= 0 ? (n = (e.min.x - p.x) * c, r = (e.max.x - p.x) * c) : (n = (
          e.max.x - p.x) * c, r = (e.min.x - p.x) * c), h >= 0 ? (s = (e.min.y - p.y) * h, o = (e
          .max.y - p.y) * h) : (s = (e.max.y - p.y) * h, o = (e.min.y - p.y) * h), n > o || s > r ||
        ((s > n || isNaN(n)) && (n = s), (o < r || isNaN(r)) && (r = o), f >= 0 ? (a = (e.min.z - p
            .z) * f, l = (e.max.z - p.z) * f) : (a = (e.max.z - p.z) * f, l = (e.min.z - p.z) * f),
          n > l || a > r) || ((a > n || n !== n) && (n = a), (l < r || r !== r) && (r = l), r < 0) ?
        null : this.at(n >= 0 ? n : r, t) } intersectsBox(e) { return this.intersectBox(e, Yt) !==
        null } intersectTriangle(e, t, n, r, s) { wr.subVectors(t, e), wi.subVectors(n, e), Rr
        .crossVectors(wr, wi); let o = this.direction.dot(Rr),
        a; if (o > 0) { if (r) return null;
        a = 1 } else if (o < 0) a = -1, o = -o;
      else return null;
      ln.subVectors(this.origin, e); const l = a * this.direction.dot(wi.crossVectors(ln, wi)); if (
        l < 0) return null; const c = a * this.direction.dot(wr.cross(ln)); if (c < 0 || l + c > o)
        return null; const h = -a * ln.dot(Rr); return h < 0 ? null : this.at(h / o,
      s) } applyMatrix4(e) { return this.origin.applyMatrix4(e), this.direction.transformDirection(
        e), this } equals(e) { return e.origin.equals(this.origin) && e.direction.equals(this
        .direction) } clone() { return new this.constructor().copy(this) } } class ot { constructor(
      e, t, n, r, s, o, a, l, c, h, f, p, m, v, _, d) { ot.prototype.isMatrix4 = !0, this
        .elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t,
          n, r, s, o, a, l, c, h, f, p, m, v, _, d) } set(e, t, n, r, s, o, a, l, c, h, f, p, m, v,
      _, d) { const u = this.elements; return u[0] = e, u[4] = t, u[8] = n, u[12] = r, u[1] = s, u[
          5] = o, u[9] = a, u[13] = l, u[2] = c, u[6] = h, u[10] = f, u[14] = p, u[3] = m, u[7] = v,
        u[11] = _, u[15] = d, this } identity() { return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
        0, 0, 0, 0, 1), this } clone() { return new ot().fromArray(this.elements) } copy(e) { const
        t = this.elements,
        n = e.elements; return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[
        5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11],
        t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this } copyPosition(e) { const
        t = this.elements,
        n = e.elements; return t[12] = n[12], t[13] = n[13], t[14] = n[14], this } setFromMatrix3(
    e) { const t = e.elements; return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5],
        t[8], 0, 0, 0, 0, 1), this } extractBasis(e, t, n) { return e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this } makeBasis(e, t,
    n) { return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
      this } extractRotation(e) { const t = this.elements,
        n = e.elements,
        r = 1 / Nn.setFromMatrixColumn(e, 0).length(),
        s = 1 / Nn.setFromMatrixColumn(e, 1).length(),
        o = 1 / Nn.setFromMatrixColumn(e, 2).length(); return t[0] = n[0] * r, t[1] = n[1] * r, t[
        2] = n[2] * r, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] =
        n[8] * o, t[9] = n[9] * o, t[10] = n[10] * o, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[
          15] = 1, this } makeRotationFromEuler(e) { const t = this.elements,
        n = e.x,
        r = e.y,
        s = e.z,
        o = Math.cos(n),
        a = Math.sin(n),
        l = Math.cos(r),
        c = Math.sin(r),
        h = Math.cos(s),
        f = Math.sin(s); if (e.order === "XYZ") { const p = o * h,
          m = o * f,
          v = a * h,
          _ = a * f;
        t[0] = l * h, t[4] = -l * f, t[8] = c, t[1] = m + v * c, t[5] = p - _ * c, t[9] = -a * l, t[
          2] = _ - p * c, t[6] = v + m * c, t[10] = o * l } else if (e.order === "YXZ") { const p =
          l * h,
          m = l * f,
          v = c * h,
          _ = c * f;
        t[0] = p + _ * a, t[4] = v * a - m, t[8] = o * c, t[1] = o * f, t[5] = o * h, t[9] = -a, t[
          2] = m * a - v, t[6] = _ + p * a, t[10] = o * l } else if (e.order === "ZXY") { const p =
          l * h,
          m = l * f,
          v = c * h,
          _ = c * f;
        t[0] = p - _ * a, t[4] = -o * f, t[8] = v + m * a, t[1] = m + v * a, t[5] = o * h, t[9] =
          _ - p * a, t[2] = -o * c, t[6] = a, t[10] = o * l } else if (e.order === "ZYX") { const
          p = o * h,
          m = o * f,
          v = a * h,
          _ = a * f;
        t[0] = l * h, t[4] = v * c - m, t[8] = p * c + _, t[1] = l * f, t[5] = _ * c + p, t[9] = m *
          c - v, t[2] = -c, t[6] = a * l, t[10] = o * l } else if (e.order === "YZX") { const p =
          o * l,
          m = o * c,
          v = a * l,
          _ = a * c;
        t[0] = l * h, t[4] = _ - p * f, t[8] = v * f + m, t[1] = f, t[5] = o * h, t[9] = -a * h, t[
          2] = -c * h, t[6] = m * f + v, t[10] = p - _ * f } else if (e.order === "XZY") { const p =
          o * l,
          m = o * c,
          v = a * l,
          _ = a * c;
        t[0] = l * h, t[4] = -f, t[8] = c * h, t[1] = p * f + _, t[5] = o * h, t[9] = m * f - v, t[
          2] = v * f - m, t[6] = a * h, t[10] = _ * f + p } return t[3] = 0, t[7] = 0, t[11] = 0, t[
        12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this } makeRotationFromQuaternion(e) { return this
        .compose(Bl, e, zl) } lookAt(e, t, n) { const r = this.elements; return At.subVectors(e, t),
        At.lengthSq() === 0 && (At.z = 1), At.normalize(), cn.crossVectors(n, At), cn.lengthSq() ===
        0 && (Math.abs(n.z) === 1 ? At.x += 1e-4 : At.z += 1e-4, At.normalize(), cn.crossVectors(n,
          At)), cn.normalize(), Ri.crossVectors(At, cn), r[0] = cn.x, r[4] = Ri.x, r[8] = At.x, r[
        1] = cn.y, r[5] = Ri.y, r[9] = At.y, r[2] = cn.z, r[6] = Ri.z, r[10] = At.z,
        this } multiply(e) { return this.multiplyMatrices(this, e) } premultiply(e) { return this
        .multiplyMatrices(e, this) } multiplyMatrices(e, t) { const n = e.elements,
        r = t.elements,
        s = this.elements,
        o = n[0],
        a = n[4],
        l = n[8],
        c = n[12],
        h = n[1],
        f = n[5],
        p = n[9],
        m = n[13],
        v = n[2],
        _ = n[6],
        d = n[10],
        u = n[14],
        y = n[3],
        E = n[7],
        A = n[11],
        L = n[15],
        R = r[0],
        w = r[4],
        Z = r[8],
        S = r[12],
        T = r[1],
        H = r[5],
        k = r[9],
        ie = r[13],
        C = r[2],
        B = r[6],
        G = r[10],
        X = r[14],
        V = r[3],
        W = r[7],
        q = r[11],
        Q = r[15]; return s[0] = o * R + a * T + l * C + c * V, s[4] = o * w + a * H + l * B + c *
        W, s[8] = o * Z + a * k + l * G + c * q, s[12] = o * S + a * ie + l * X + c * Q, s[1] = h *
        R + f * T + p * C + m * V, s[5] = h * w + f * H + p * B + m * W, s[9] = h * Z + f * k + p *
        G + m * q, s[13] = h * S + f * ie + p * X + m * Q, s[2] = v * R + _ * T + d * C + u * V, s[
          6] = v * w + _ * H + d * B + u * W, s[10] = v * Z + _ * k + d * G + u * q, s[14] = v * S +
        _ * ie + d * X + u * Q, s[3] = y * R + E * T + A * C + L * V, s[7] = y * w + E * H + A * B +
        L * W, s[11] = y * Z + E * k + A * G + L * q, s[15] = y * S + E * ie + A * X + L * Q,
        this } multiplyScalar(e) { const t = this.elements; return t[0] *= e, t[4] *= e, t[8] *= e,
        t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e,
        t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this } determinant() { const e =
        this.elements,
        t = e[0],
        n = e[4],
        r = e[8],
        s = e[12],
        o = e[1],
        a = e[5],
        l = e[9],
        c = e[13],
        h = e[2],
        f = e[6],
        p = e[10],
        m = e[14],
        v = e[3],
        _ = e[7],
        d = e[11],
        u = e[15]; return v * (+s * l * f - r * c * f - s * a * p + n * c * p + r * a * m - n * l *
        m) + _ * (+t * l * m - t * c * p + s * o * p - r * o * m + r * c * h - s * l * h) + d * (+
        t * c * f - t * a * m - s * o * f + n * o * m + s * a * h - n * c * h) + u * (-r * a * h -
        t * l * f + t * a * p + r * o * f - n * o * p + n * l * h) } transpose() { const e = this
        .elements; let t; return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t,
        t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13],
        e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this } setPosition(e, t, n) { const r = this
        .elements; return e.isVector3 ? (r[12] = e.x, r[13] = e.y, r[14] = e.z) : (r[12] = e, r[
        13] = t, r[14] = n), this } invert() { const e = this.elements,
        t = e[0],
        n = e[1],
        r = e[2],
        s = e[3],
        o = e[4],
        a = e[5],
        l = e[6],
        c = e[7],
        h = e[8],
        f = e[9],
        p = e[10],
        m = e[11],
        v = e[12],
        _ = e[13],
        d = e[14],
        u = e[15],
        y = f * d * c - _ * p * c + _ * l * m - a * d * m - f * l * u + a * p * u,
        E = v * p * c - h * d * c - v * l * m + o * d * m + h * l * u - o * p * u,
        A = h * _ * c - v * f * c + v * a * m - o * _ * m - h * a * u + o * f * u,
        L = v * f * l - h * _ * l - v * a * p + o * _ * p + h * a * d - o * f * d,
        R = t * y + n * E + r * A + s * L; if (R === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0); const w = 1 / R; return e[0] = y * w, e[1] = (_ * p * s - f * d * s -
        _ * r * m + n * d * m + f * r * u - n * p * u) * w, e[2] = (a * d * s - _ * l * s + _ *
        r * c - n * d * c - a * r * u + n * l * u) * w, e[3] = (f * l * s - a * p * s - f * r *
        c + n * p * c + a * r * m - n * l * m) * w, e[4] = E * w, e[5] = (h * d * s - v * p * s +
        v * r * m - t * d * m - h * r * u + t * p * u) * w, e[6] = (v * l * s - o * d * s - v *
        r * c + t * d * c + o * r * u - t * l * u) * w, e[7] = (o * p * s - h * l * s + h * r *
        c - t * p * c - o * r * m + t * l * m) * w, e[8] = A * w, e[9] = (v * f * s - h * _ * s -
        v * n * m + t * _ * m + h * n * u - t * f * u) * w, e[10] = (o * _ * s - v * a * s + v *
        n * c - t * _ * c - o * n * u + t * a * u) * w, e[11] = (h * a * s - o * f * s - h * n *
        c + t * f * c + o * n * m - t * a * m) * w, e[12] = L * w, e[13] = (h * _ * r - v * f *
        r + v * n * p - t * _ * p - h * n * d + t * f * d) * w, e[14] = (v * a * r - o * _ * r -
        v * n * l + t * _ * l + o * n * d - t * a * d) * w, e[15] = (o * f * r - h * a * r + h *
        n * l - t * f * l - o * n * p + t * a * p) * w, this } scale(e) { const t = this.elements,
        n = e.x,
        r = e.y,
        s = e.z; return t[0] *= n, t[4] *= r, t[8] *= s, t[1] *= n, t[5] *= r, t[9] *= s, t[2] *= n,
        t[6] *= r, t[10] *= s, t[3] *= n, t[7] *= r, t[11] *= s, this } getMaxScaleOnAxis() { const
        e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10]; return Math.sqrt(Math.max(t, n,
      r)) } makeTranslation(e, t, n) { return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0,
        0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this } makeRotationX(e) { const t = Math.cos(e),
        n = Math.sin(e); return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
      this } makeRotationY(e) { const t = Math.cos(e),
        n = Math.sin(e); return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
      this } makeRotationZ(e) { const t = Math.cos(e),
        n = Math.sin(e); return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
      this } makeRotationAxis(e, t) { const n = Math.cos(t),
        r = Math.sin(t),
        s = 1 - n,
        o = e.x,
        a = e.y,
        l = e.z,
        c = s * o,
        h = s * a; return this.set(c * o + n, c * a - r * l, c * l + r * a, 0, c * a + r * l, h *
        a + n, h * l - r * o, 0, c * l - r * a, h * l + r * o, s * l * l + n, 0, 0, 0, 0, 1),
      this } makeScale(e, t, n) { return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
        this } makeShear(e, t, n, r, s, o) { return this.set(1, n, s, 0, e, 1, o, 0, t, r, 1, 0, 0,
        0, 0, 1), this } compose(e, t, n) { const r = this.elements,
        s = t._x,
        o = t._y,
        a = t._z,
        l = t._w,
        c = s + s,
        h = o + o,
        f = a + a,
        p = s * c,
        m = s * h,
        v = s * f,
        _ = o * h,
        d = o * f,
        u = a * f,
        y = l * c,
        E = l * h,
        A = l * f,
        L = n.x,
        R = n.y,
        w = n.z; return r[0] = (1 - (_ + u)) * L, r[1] = (m + A) * L, r[2] = (v - E) * L, r[3] = 0,
        r[4] = (m - A) * R, r[5] = (1 - (p + u)) * R, r[6] = (d + y) * R, r[7] = 0, r[8] = (v + E) *
        w, r[9] = (d - y) * w, r[10] = (1 - (p + _)) * w, r[11] = 0, r[12] = e.x, r[13] = e.y, r[
        14] = e.z, r[15] = 1, this } decompose(e, t, n) { const r = this.elements; let s = Nn.set(r[
        0], r[1], r[2]).length(); const o = Nn.set(r[4], r[5], r[6]).length(),
        a = Nn.set(r[8], r[9], r[10]).length();
      this.determinant() < 0 && (s = -s), e.x = r[12], e.y = r[13], e.z = r[14], Ut.copy(
      this); const c = 1 / s,
        h = 1 / o,
        f = 1 / a; return Ut.elements[0] *= c, Ut.elements[1] *= c, Ut.elements[2] *= c, Ut
        .elements[4] *= h, Ut.elements[5] *= h, Ut.elements[6] *= h, Ut.elements[8] *= f, Ut
        .elements[9] *= f, Ut.elements[10] *= f, t.setFromRotationMatrix(Ut), n.x = s, n.y = o, n
        .z = a, this } makePerspective(e, t, n, r, s, o, a = Qt) { const l = this.elements,
        c = 2 * s / (t - e),
        h = 2 * s / (n - r),
        f = (t + e) / (t - e),
        p = (n + r) / (n - r); let m, v; if (a === Qt) m = -(o + s) / (o - s), v = -2 * o * s / (o -
        s);
      else if (a === Ji) m = -o / (o - s), v = -o * s / (o - s);
      else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " +
      a); return l[0] = c, l[4] = 0, l[8] = f, l[12] = 0, l[1] = 0, l[5] = h, l[9] = p, l[13] = 0,
        l[2] = 0, l[6] = 0, l[10] = m, l[14] = v, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0,
        this } makeOrthographic(e, t, n, r, s, o, a = Qt) { const l = this.elements,
        c = 1 / (t - e),
        h = 1 / (n - r),
        f = 1 / (o - s),
        p = (t + e) * c,
        m = (n + r) * h; let v, _; if (a === Qt) v = (o + s) * f, _ = -2 * f;
      else if (a === Ji) v = s * f, _ = -1 * f;
      else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " +
      a); return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -p, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[
          13] = -m, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -v, l[3] = 0, l[7] = 0, l[11] = 0, l[
        15] = 1, this } equals(e) { const t = this.elements,
        n = e.elements; for (let r = 0; r < 16; r++)
        if (t[r] !== n[r]) return !1; return !0 } fromArray(e, t = 0) { for (let n = 0; n < 16; n++)
        this.elements[n] = e[n + t]; return this } toArray(e = [], t = 0) { const n = this
      .elements; return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] =
        n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9],
        e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[
          14], e[t + 15] = n[15], e } }
const Nn = new D,
  Ut = new ot,
  Bl = new D(0, 0, 0),
  zl = new D(1, 1, 1),
  cn = new D,
  Ri = new D,
  At = new D,
  Qs = new ot,
  ea = new gi;
class ir { constructor(e = 0, t = 0, n = 0, r = ir.DEFAULT_ORDER) { this.isEuler = !0, this._x = e,
        this._y = t, this._z = n, this._order = r } get x() { return this._x } set x(e) { this._x =
        e, this._onChangeCallback() } get y() { return this._y } set y(e) { this._y = e, this
        ._onChangeCallback() } get z() { return this._z } set z(e) { this._z = e, this
        ._onChangeCallback() } get order() { return this._order } set order(e) { this._order = e,
        this._onChangeCallback() } set(e, t, n, r = this._order) { return this._x = e, this._y = t,
        this._z = n, this._order = r, this._onChangeCallback(), this } clone() { return new this
        .constructor(this._x, this._y, this._z, this._order) } copy(e) { return this._x = e._x, this
        ._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(),
        this } setFromRotationMatrix(e, t = this._order, n = !0) { const r = e.elements,
        s = r[0],
        o = r[4],
        a = r[8],
        l = r[1],
        c = r[5],
        h = r[9],
        f = r[2],
        p = r[6],
        m = r[10]; switch (t) {
      case "XYZ":
        this._y = Math.asin(Mt(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-h, m),
          this._z = Math.atan2(-o, s)) : (this._x = Math.atan2(p, c), this._z = 0); break;
      case "YXZ":
        this._x = Math.asin(-Mt(h, -1, 1)), Math.abs(h) < .9999999 ? (this._y = Math.atan2(a, m),
          this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-f, s), this._z = 0); break;
      case "ZXY":
        this._x = Math.asin(Mt(p, -1, 1)), Math.abs(p) < .9999999 ? (this._y = Math.atan2(-f, m),
          this._z = Math.atan2(-o, c)) : (this._y = 0, this._z = Math.atan2(l, s)); break;
      case "ZYX":
        this._y = Math.asin(-Mt(f, -1, 1)), Math.abs(f) < .9999999 ? (this._x = Math.atan2(p, m),
          this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-o, c)); break;
      case "YZX":
        this._z = Math.asin(Mt(l, -1, 1)), Math.abs(l) < .9999999 ? (this._x = Math.atan2(-h, c),
          this._y = Math.atan2(-f, s)) : (this._x = 0, this._y = Math.atan2(a, m)); break;
      case "XZY":
        this._z = Math.asin(-Mt(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(p, c),
          this._y = Math.atan2(a, s)) : (this._x = Math.atan2(-h, m), this._y = 0); break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
        t) } return this._order = t, n === !0 && this._onChangeCallback(), this } setFromQuaternion(
      e, t, n) { return Qs.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Qs, t,
      n) } setFromVector3(e, t = this._order) { return this.set(e.x, e.y, e.z, t) } reorder(
    e) { return ea.setFromEuler(this), this.setFromQuaternion(ea, e) } equals(e) { return e._x ===
        this._x && e._y === this._y && e._z === this._z && e._order === this._order } fromArray(
    e) { return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[
        3]), this._onChangeCallback(), this } toArray(e = [], t = 0) { return e[t] = this._x, e[t +
        1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e } _onChange(e) { return this
        ._onChangeCallback = e, this } _onChangeCallback() {}*[Symbol.iterator]() { yield this._x,
        yield this._y, yield this._z, yield this._order } } ir.DEFAULT_ORDER = "XYZ";
class so { constructor() { this.mask = 1 } set(e) { this.mask = (1 << e | 0) >>> 0 } enable(
    e) { this.mask |= 1 << e | 0 } enableAll() { this.mask = -1 } toggle(e) { this.mask ^= 1 << e |
        0 } disable(e) { this.mask &= ~(1 << e | 0) } disableAll() { this.mask = 0 } test(
    e) { return (this.mask & e.mask) !== 0 } isEnabled(e) { return (this.mask & (1 << e | 0)) !==
      0 } }
let Gl = 0;
const ta = new D,
  Fn = new gi,
  Kt = new ot,
  Ci = new D,
  li = new D,
  Hl = new D,
  Vl = new gi,
  na = new D(1, 0, 0),
  ia = new D(0, 1, 0),
  ra = new D(0, 0, 1),
  kl = { type: "added" },
  Wl = { type: "removed" };
class Tt extends ti { constructor() { super(), this.isObject3D = !0, Object.defineProperty(this,
          "id", { value: Gl++ }), this.uuid = mi(), this.name = "", this.type = "Object3D", this
        .parent = null, this.children = [], this.up = Tt.DEFAULT_UP.clone(); const e = new D,
        t = new ir,
        n = new gi,
        r = new D(1, 1, 1);

      function s() { n.setFromEuler(t, !1) }

      function o() { t.setFromQuaternion(n, void 0, !1) } t._onChange(s), n._onChange(o), Object
        .defineProperties(this, { position: { configurable: !0, enumerable: !0, value: e },
          rotation: { configurable: !0, enumerable: !0, value: t }, quaternion: { configurable: !
              0, enumerable: !0, value: n }, scale: { configurable: !0, enumerable: !0,
          value: r }, modelViewMatrix: { value: new ot }, normalMatrix: { value: new ze } }), this
        .matrix = new ot, this.matrixWorld = new ot, this.matrixAutoUpdate = Tt
        .DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Tt
        .DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new so,
        this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0,
        this.renderOrder = 0, this.animations = [], this
      .userData = {} } onBeforeShadow() {} onAfterShadow() {} onBeforeRender() {} onAfterRender() {} applyMatrix4(
      e) { this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix
        .decompose(this.position, this.quaternion, this.scale) } applyQuaternion(e) { return this
        .quaternion.premultiply(e), this } setRotationFromAxisAngle(e, t) { this.quaternion
        .setFromAxisAngle(e, t) } setRotationFromEuler(e) { this.quaternion.setFromEuler(e, !
      0) } setRotationFromMatrix(e) { this.quaternion.setFromRotationMatrix(
      e) } setRotationFromQuaternion(e) { this.quaternion.copy(e) } rotateOnAxis(e, t) { return Fn
        .setFromAxisAngle(e, t), this.quaternion.multiply(Fn), this } rotateOnWorldAxis(e,
    t) { return Fn.setFromAxisAngle(e, t), this.quaternion.premultiply(Fn), this } rotateX(
    e) { return this.rotateOnAxis(na, e) } rotateY(e) { return this.rotateOnAxis(ia, e) } rotateZ(
    e) { return this.rotateOnAxis(ra, e) } translateOnAxis(e, t) { return ta.copy(e)
        .applyQuaternion(this.quaternion), this.position.add(ta.multiplyScalar(t)),
        this } translateX(e) { return this.translateOnAxis(na, e) } translateY(e) { return this
        .translateOnAxis(ia, e) } translateZ(e) { return this.translateOnAxis(ra, e) } localToWorld(
      e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld) } worldToLocal(
    e) { return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Kt.copy(this.matrixWorld)
    .invert()) } lookAt(e, t, n) { e.isVector3 ? Ci.copy(e) : Ci.set(e, t, n); const r = this
      .parent;
      this.updateWorldMatrix(!0, !1), li.setFromMatrixPosition(this.matrixWorld), this.isCamera ||
        this.isLight ? Kt.lookAt(li, Ci, this.up) : Kt.lookAt(Ci, li, this.up), this.quaternion
        .setFromRotationMatrix(Kt), r && (Kt.extractRotation(r.matrixWorld), Fn
          .setFromRotationMatrix(Kt), this.quaternion.premultiply(Fn.invert())) } add(e) { if (
        arguments.length > 1) { for (let t = 0; t < arguments.length; t++) this.add(arguments[
        t]); return this } return e === this ? (console.error(
        "THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e
        .isObject3D ? (e.parent !== null && e.parent.remove(e), e.parent = this, this.children
          .push(e), e.dispatchEvent(kl)) : console.error(
          "THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this) } remove(
    e) { if (arguments.length > 1) { for (let n = 0; n < arguments.length; n++) this.remove(
          arguments[n]); return this } const t = this.children.indexOf(e); return t !== -1 && (e
        .parent = null, this.children.splice(t, 1), e.dispatchEvent(Wl)),
    this } removeFromParent() { const e = this.parent; return e !== null && e.remove(this),
      this } clear() { return this.remove(...this.children) } attach(e) { return this
        .updateWorldMatrix(!0, !1), Kt.copy(this.matrixWorld).invert(), e.parent !== null && (e
          .parent.updateWorldMatrix(!0, !1), Kt.multiply(e.parent.matrixWorld)), e.applyMatrix4(Kt),
        this.add(e), e.updateWorldMatrix(!1, !0), this } getObjectById(e) { return this
        .getObjectByProperty("id", e) } getObjectByName(e) { return this.getObjectByProperty("name",
        e) } getObjectByProperty(e, t) { if (this[e] === t) return this; for (let n = 0, r = this
          .children.length; n < r; n++) { const o = this.children[n].getObjectByProperty(e, t); if (
          o !== void 0) return o } } getObjectsByProperty(e, t, n = []) { this[e] === t && n.push(
        this); const r = this.children; for (let s = 0, o = r.length; s < o; s++) r[s]
        .getObjectsByProperty(e, t, n); return n } getWorldPosition(e) { return this
        .updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld) } getWorldQuaternion(
      e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(li, e, Hl),
      e } getWorldScale(e) { return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(li,
        Vl, e), e } getWorldDirection(e) { this.updateWorldMatrix(!0, !1); const t = this
        .matrixWorld.elements; return e.set(t[8], t[9], t[10]).normalize() } raycast() {} traverse(
      e) { e(this); const t = this.children; for (let n = 0, r = t.length; n < r; n++) t[n]
        .traverse(e) } traverseVisible(e) { if (this.visible === !1) return;
      e(this); const t = this.children; for (let n = 0, r = t.length; n < r; n++) t[n]
        .traverseVisible(e) } traverseAncestors(e) { const t = this.parent;
      t !== null && (e(t), t.traverseAncestors(e)) } updateMatrix() { this.matrix.compose(this
        .position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = !
      0 } updateMatrixWorld(e) { this.matrixAutoUpdate && this.updateMatrix(), (this
        .matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this
          .matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), this
        .matrixWorldNeedsUpdate = !1, e = !0); const t = this.children; for (let n = 0, r = t
        .length; n < r; n++) { const s = t[n];
        (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(
        e) } } updateWorldMatrix(e, t) { const n = this.parent; if (e === !0 && n !== null && n
        .matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this
        .updateMatrix(), this.parent === null ? this.matrixWorld.copy(this.matrix) : this
        .matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix), t === !0) { const r =
          this.children; for (let s = 0, o = r.length; s < o; s++) { const a = r[s];
          a.matrixWorldAutoUpdate === !0 && a.updateWorldMatrix(!1, !0) } } } toJSON(e) { const t =
        e === void 0 || typeof e == "string",
        n = {};
      t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {},
        skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object",
        generator: "Object3D.toJSON" }); const r = {};
      r.uuid = this.uuid, r.type = this.type, this.name !== "" && (r.name = this.name), this
        .castShadow === !0 && (r.castShadow = !0), this.receiveShadow === !0 && (r.receiveShadow = !
          0), this.visible === !1 && (r.visible = !1), this.frustumCulled === !1 && (r
          .frustumCulled = !1), this.renderOrder !== 0 && (r.renderOrder = this.renderOrder), Object
        .keys(this.userData).length > 0 && (r.userData = this.userData), r.layers = this.layers
        .mask, r.matrix = this.matrix.toArray(), r.up = this.up.toArray(), this.matrixAutoUpdate ===
        !1 && (r.matrixAutoUpdate = !1), this.isInstancedMesh && (r.type = "InstancedMesh", r
          .count = this.count, r.instanceMatrix = this.instanceMatrix.toJSON(), this
          .instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())), this
        .isBatchedMesh && (r.type = "BatchedMesh", r.perObjectFrustumCulled = this
          .perObjectFrustumCulled, r.sortObjects = this.sortObjects, r.drawRanges = this
          ._drawRanges, r.reservedRanges = this._reservedRanges, r.visibility = this._visibility, r
          .active = this._active, r.bounds = this._bounds.map(a => ({ boxInitialized: a
              .boxInitialized, boxMin: a.box.min.toArray(), boxMax: a.box.max.toArray(),
            sphereInitialized: a.sphereInitialized, sphereRadius: a.sphere.radius,
            sphereCenter: a.sphere.center.toArray() })), r.maxGeometryCount = this
          ._maxGeometryCount, r.maxVertexCount = this._maxVertexCount, r.maxIndexCount = this
          ._maxIndexCount, r.geometryInitialized = this._geometryInitialized, r.geometryCount = this
          ._geometryCount, r.matricesTexture = this._matricesTexture.toJSON(e), this
          .boundingSphere !== null && (r.boundingSphere = { center: r.boundingSphere.center
            .toArray(), radius: r.boundingSphere.radius }), this.boundingBox !== null && (r
            .boundingBox = { min: r.boundingBox.min.toArray(), max: r.boundingBox.max.toArray() }));

      function s(a, l) { return a[l.uuid] === void 0 && (a[l.uuid] = l.toJSON(e)), l.uuid } if (this
        .isScene) this.background && (this.background.isColor ? r.background = this.background
          .toJSON() : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)),
        this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !==
        !0 && (r.environment = this.environment.toJSON(e).uuid);
      else if (this.isMesh || this.isLine || this.isPoints) { r.geometry = s(e.geometries, this
          .geometry); const a = this.geometry.parameters; if (a !== void 0 && a.shapes !==
          void 0) { const l = a.shapes; if (Array.isArray(l))
            for (let c = 0, h = l.length; c < h; c++) { const f = l[c];
              s(e.shapes, f) } else s(e.shapes, l) } } if (this.isSkinnedMesh && (r.bindMode = this
          .bindMode, r.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e
            .skeletons, this.skeleton), r.skeleton = this.skeleton.uuid)), this.material !== void 0)
        if (Array.isArray(this.material)) { const a = []; for (let l = 0, c = this.material
            .length; l < c; l++) a.push(s(e.materials, this.material[l]));
          r.material = a } else r.material = s(e.materials, this.material); if (this.children
        .length > 0) { r.children = []; for (let a = 0; a < this.children.length; a++) r.children
          .push(this.children[a].toJSON(e).object) } if (this.animations.length > 0) { r
          .animations = []; for (let a = 0; a < this.animations.length; a++) { const l = this
            .animations[a];
          r.animations.push(s(e.animations, l)) } } if (t) { const a = o(e.geometries),
          l = o(e.materials),
          c = o(e.textures),
          h = o(e.images),
          f = o(e.shapes),
          p = o(e.skeletons),
          m = o(e.animations),
          v = o(e.nodes);
        a.length > 0 && (n.geometries = a), l.length > 0 && (n.materials = l), c.length > 0 && (n
            .textures = c), h.length > 0 && (n.images = h), f.length > 0 && (n.shapes = f), p
          .length > 0 && (n.skeletons = p), m.length > 0 && (n.animations = m), v.length > 0 && (n
            .nodes = v) } return n.object = r, n;

      function o(a) { const l = []; for (const c in a) { const h = a[c];
          delete h.metadata, l.push(h) } return l } } clone(e) { return new this.constructor().copy(
        this, e) } copy(e, t = !0) { if (this.name = e.name, this.up.copy(e.up), this.position.copy(
          e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld),
        this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e
        .matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers
        .mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this
        .receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e
        .renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON
          .stringify(e.userData)), t === !0)
        for (let n = 0; n < e.children.length; n++) { const r = e.children[n];
          this.add(r.clone()) }
      return this } } Tt.DEFAULT_UP = new D(0, 1, 0);
Tt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
Tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const It = new D,
  jt = new D,
  Cr = new D,
  Zt = new D,
  On = new D,
  Bn = new D,
  sa = new D,
  Pr = new D,
  Lr = new D,
  Dr = new D;
let Pi = !1;
class Nt { constructor(e = new D, t = new D, n = new D) { this.a = e, this.b = t, this.c =
      n } static getNormal(e, t, n, r) { r.subVectors(n, t), It.subVectors(e, t), r.cross(It); const
        s = r.lengthSq(); return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0,
      0) } static getBarycoord(e, t, n, r, s) { It.subVectors(r, t), jt.subVectors(n, t), Cr
        .subVectors(e, t); const o = It.dot(It),
        a = It.dot(jt),
        l = It.dot(Cr),
        c = jt.dot(jt),
        h = jt.dot(Cr),
        f = o * c - a * a; if (f === 0) return s.set(0, 0, 0), null; const p = 1 / f,
        m = (c * l - a * h) * p,
        v = (o * h - a * l) * p; return s.set(1 - m - v, v, m) } static containsPoint(e, t, n,
    r) { return this.getBarycoord(e, t, n, r, Zt) === null ? !1 : Zt.x >= 0 && Zt.y >= 0 && Zt.x +
        Zt.y <= 1 } static getUV(e, t, n, r, s, o, a, l) { return Pi === !1 && (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Pi = !
        0), this.getInterpolation(e, t, n, r, s, o, a, l) } static getInterpolation(e, t, n, r, s,
      o, a, l) { return this.getBarycoord(e, t, n, r, Zt) === null ? (l.x = 0, l.y = 0, "z" in l &&
        (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, Zt.x), l
        .addScaledVector(o, Zt.y), l.addScaledVector(a, Zt.z), l) } static isFrontFacing(e, t, n,
    r) { return It.subVectors(n, t), jt.subVectors(e, t), It.cross(jt).dot(r) < 0 } set(e, t,
    n) { return this.a.copy(e), this.b.copy(t), this.c.copy(n), this } setFromPointsAndIndices(e, t,
      n, r) { return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[r]),
      this } setFromAttributeAndIndices(e, t, n, r) { return this.a.fromBufferAttribute(e, t), this
        .b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, r),
      this } clone() { return new this.constructor().copy(this) } copy(e) { return this.a.copy(e.a),
        this.b.copy(e.b), this.c.copy(e.c), this } getArea() { return It.subVectors(this.c, this.b),
        jt.subVectors(this.a, this.b), It.cross(jt).length() * .5 } getMidpoint(e) { return e
        .addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3) } getNormal(e) { return Nt
        .getNormal(this.a, this.b, this.c, e) } getPlane(e) { return e.setFromCoplanarPoints(this.a,
        this.b, this.c) } getBarycoord(e, t) { return Nt.getBarycoord(e, this.a, this.b, this.c,
      t) } getUV(e, t, n, r, s) { return Pi === !1 && (console.warn(
          "THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."), Pi = !
        0), Nt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s) } getInterpolation(e, t, n,
      r, s) { return Nt.getInterpolation(e, this.a, this.b, this.c, t, n, r, s) } containsPoint(
    e) { return Nt.containsPoint(e, this.a, this.b, this.c) } isFrontFacing(e) { return Nt
        .isFrontFacing(this.a, this.b, this.c, e) } intersectsBox(e) { return e.intersectsTriangle(
        this) } closestPointToPoint(e, t) { const n = this.a,
        r = this.b,
        s = this.c; let o, a;
      On.subVectors(r, n), Bn.subVectors(s, n), Pr.subVectors(e, n); const l = On.dot(Pr),
        c = Bn.dot(Pr); if (l <= 0 && c <= 0) return t.copy(n);
      Lr.subVectors(e, r); const h = On.dot(Lr),
        f = Bn.dot(Lr); if (h >= 0 && f <= h) return t.copy(r); const p = l * f - h * c; if (p <=
        0 && l >= 0 && h <= 0) return o = l / (l - h), t.copy(n).addScaledVector(On, o);
      Dr.subVectors(e, s); const m = On.dot(Dr),
        v = Bn.dot(Dr); if (v >= 0 && m <= v) return t.copy(s); const _ = m * c - l * v; if (_ <=
        0 && c >= 0 && v <= 0) return a = c / (c - v), t.copy(n).addScaledVector(Bn, a); const d =
        h * v - m * f; if (d <= 0 && f - h >= 0 && m - v >= 0) return sa.subVectors(s, r), a = (f -
        h) / (f - h + (m - v)), t.copy(r).addScaledVector(sa, a); const u = 1 / (d + _ +
      p); return o = _ * u, a = p * u, t.copy(n).addScaledVector(On, o).addScaledVector(Bn,
        a) } equals(e) { return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c) } }
const ao = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564,
    azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045,
    blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528,
    chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981,
    cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723,
    darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017,
    darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520,
    darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919,
    darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945,
    darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265,
    dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842,
    fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720,
    goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504,
    honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200,
    khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976,
    lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599,
    lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323,
    lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346,
    lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734,
    lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935,
    maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667,
    mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790,
    mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173,
    midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229,
    navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739,
    orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130,
    palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077,
    peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910,
    purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945,
    saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327,
    seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061,
    slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980,
    tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856,
    violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960,
    yellowgreen: 10145074 },
  un = { h: 0, s: 0, l: 0 },
  Li = { h: 0, s: 0, l: 0 };

function Ur(i, e, t) { return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? i + (e - i) * 6 *
    t : t < 1 / 2 ? e : t < 2 / 3 ? i + (e - i) * 6 * (2 / 3 - t) : i } class He { constructor(e, t,
      n) { return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n) } set(e,
      t, n) { if (t === void 0 && n === void 0) { const r = e;
        r && r.isColor ? this.copy(r) : typeof r == "number" ? this.setHex(r) : typeof r ==
          "string" && this.setStyle(r) } else this.setRGB(e, t, n); return this } setScalar(
    e) { return this.r = e, this.g = e, this.b = e, this } setHex(e, t = lt) { return e = Math
        .floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e &
        255) / 255, We.toWorkingColorSpace(this, t), this } setRGB(e, t, n, r = We
      .workingColorSpace) { return this.r = e, this.g = t, this.b = n, We.toWorkingColorSpace(this,
        r), this } setHSL(e, t, n, r = We.workingColorSpace) { if (e = Pl(e, 1), t = Mt(t, 0, 1),
        n = Mt(n, 0, 1), t === 0) this.r = this.g = this.b = n;
      else { const s = n <= .5 ? n * (1 + t) : n + t - n * t,
          o = 2 * n - s;
        this.r = Ur(o, s, e + 1 / 3), this.g = Ur(o, s, e), this.b = Ur(o, s, e - 1 / 3) } return We
        .toWorkingColorSpace(this, r), this } setStyle(e, t = lt) {
      function n(s) { s !== void 0 && parseFloat(s) < 1 && console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored.") } let r; if (r =
        /^(\w+)\(([^\)]*)\)/.exec(e)) { let s; const o = r[1],
          a = r[2]; switch (o) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(
            s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(
            s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t); if (s =
            /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)) return n(
            s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(
            s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t); break;
        case "hsl":
        case "hsla":
          if (s =
            /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/
            .exec(a)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100,
            parseFloat(s[3]) / 100, t); break;
        default:
          console.warn("THREE.Color: Unknown color model " + e) } } else if (r = /^\#([A-Fa-f\d]+)$/
        .exec(e)) { const s = r[1],
          o = s.length; if (o === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s
          .charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t); if (o === 6) return this.setHex(
          parseInt(s, 16), t);
        console.warn("THREE.Color: Invalid hex color " + e) } else if (e && e.length > 0)
      return this.setColorName(e, t); return this } setColorName(e, t = lt) { const n = ao[e
        .toLowerCase()]; return n !== void 0 ? this.setHex(n, t) : console.warn(
        "THREE.Color: Unknown color " + e), this } clone() { return new this.constructor(this.r,
        this.g, this.b) } copy(e) { return this.r = e.r, this.g = e.g, this.b = e.b,
      this } copySRGBToLinear(e) { return this.r = jn(e.r), this.g = jn(e.g), this.b = jn(e.b),
      this } copyLinearToSRGB(e) { return this.r = Sr(e.r), this.g = Sr(e.g), this.b = Sr(e.b),
      this } convertSRGBToLinear() { return this.copySRGBToLinear(this),
      this } convertLinearToSRGB() { return this.copyLinearToSRGB(this), this } getHex(e =
    lt) { return We.fromWorkingColorSpace(ft.copy(this), e), Math.round(Mt(ft.r * 255, 0, 255)) *
        65536 + Math.round(Mt(ft.g * 255, 0, 255)) * 256 + Math.round(Mt(ft.b * 255, 0,
        255)) } getHexString(e = lt) { return ("000000" + this.getHex(e).toString(16)).slice(-
      6) } getHSL(e, t = We.workingColorSpace) { We.fromWorkingColorSpace(ft.copy(this), t); const
        n = ft.r,
        r = ft.g,
        s = ft.b,
        o = Math.max(n, r, s),
        a = Math.min(n, r, s); let l, c; const h = (a + o) / 2; if (a === o) l = 0, c = 0;
      else { const f = o - a; switch (c = h <= .5 ? f / (o + a) : f / (2 - o - a), o) {
        case n:
          l = (r - s) / f + (r < s ? 6 : 0); break;
        case r:
          l = (s - n) / f + 2; break;
        case s:
          l = (n - r) / f + 4; break } l /= 6 } return e.h = l, e.s = c, e.l = h, e } getRGB(e, t =
      We.workingColorSpace) { return We.fromWorkingColorSpace(ft.copy(this), t), e.r = ft.r, e.g =
        ft.g, e.b = ft.b, e } getStyle(e = lt) { We.fromWorkingColorSpace(ft.copy(this), e); const
        t = ft.r,
        n = ft.g,
        r = ft.b; return e !== lt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})` :
        `rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})` } offsetHSL(e, t,
    n) { return this.getHSL(un), this.setHSL(un.h + e, un.s + t, un.l + n) } add(e) { return this
        .r += e.r, this.g += e.g, this.b += e.b, this } addColors(e, t) { return this.r = e.r + t.r,
        this.g = e.g + t.g, this.b = e.b + t.b, this } addScalar(e) { return this.r += e, this.g +=
        e, this.b += e, this } sub(e) { return this.r = Math.max(0, this.r - e.r), this.g = Math
        .max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this } multiply(e) { return this
        .r *= e.r, this.g *= e.g, this.b *= e.b, this } multiplyScalar(e) { return this.r *= e, this
        .g *= e, this.b *= e, this } lerp(e, t) { return this.r += (e.r - this.r) * t, this.g += (e
        .g - this.g) * t, this.b += (e.b - this.b) * t, this } lerpColors(e, t, n) { return this.r =
        e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n,
        this } lerpHSL(e, t) { this.getHSL(un), e.getHSL(Li); const n = xr(un.h, Li.h, t),
        r = xr(un.s, Li.s, t),
        s = xr(un.l, Li.l, t); return this.setHSL(n, r, s), this } setFromVector3(e) { return this
        .r = e.x, this.g = e.y, this.b = e.z, this } applyMatrix3(e) { const t = this.r,
        n = this.g,
        r = this.b,
        s = e.elements; return this.r = s[0] * t + s[3] * n + s[6] * r, this.g = s[1] * t + s[4] *
        n + s[7] * r, this.b = s[2] * t + s[5] * n + s[8] * r, this } equals(e) { return e.r ===
        this.r && e.g === this.g && e.b === this.b } fromArray(e, t = 0) { return this.r = e[t],
        this.g = e[t + 1], this.b = e[t + 2], this } toArray(e = [], t = 0) { return e[t] = this.r,
        e[t + 1] = this.g, e[t + 2] = this.b, e } fromBufferAttribute(e, t) { return this.r = e
        .getX(t), this.g = e.getY(t), this.b = e.getZ(t), this } toJSON() { return this.getHex() }*[
      Symbol.iterator
    ]() { yield this.r, yield this.g, yield this.b } }
const ft = new He;
He.NAMES = ao;
let Xl = 0;
class vi extends ti { constructor() { super(), this.isMaterial = !0, Object.defineProperty(this,
          "id", { value: Xl++ }), this.uuid = mi(), this.name = "", this.type = "Material", this
        .blending = Kn, this.side = gn, this.vertexColors = !1, this.opacity = 1, this
        .transparent = !1, this.alphaHash = !1, this.blendSrc = Wr, this.blendDst = Xr, this
        .blendEquation = An, this.blendSrcAlpha = null, this.blendDstAlpha = null, this
        .blendEquationAlpha = null, this.blendColor = new He(0, 0, 0), this.blendAlpha = 0, this
        .depthFunc = Ki, this.depthTest = !0, this.depthWrite = !0, this.stencilWriteMask = 255,
        this.stencilFunc = Xs, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail =
        Pn, this.stencilZFail = Pn, this.stencilZPass = Pn, this.stencilWrite = !1, this
        .clippingPlanes = null, this.clipIntersection = !1, this.clipShadows = !1, this.shadowSide =
        null, this.colorWrite = !0, this.precision = null, this.polygonOffset = !1, this
        .polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = !1, this
        .alphaToCoverage = !1, this.premultipliedAlpha = !1, this.forceSinglePass = !1, this
        .visible = !0, this.toneMapped = !0, this.userData = {}, this.version = 0, this._alphaTest =
        0 } get alphaTest() { return this._alphaTest } set alphaTest(e) { this._alphaTest > 0 != e >
        0 && this.version++, this._alphaTest =
    e } onBuild() {} onBeforeRender() {} onBeforeCompile() {} customProgramCacheKey() { return this
        .onBeforeCompile.toString() } setValues(e) { if (e !== void 0)
        for (const t in e) { const n = e[t]; if (n === void 0) { console.warn(
              `THREE.Material: parameter '${t}' has value of undefined.`); continue } const r =
            this[t]; if (r === void 0) { console.warn(
              `THREE.Material: '${t}' is not a property of THREE.${this.type}.`); continue } r && r
            .isColor ? r.set(n) : r && r.isVector3 && n && n.isVector3 ? r.copy(n) : this[t] =
            n } } toJSON(e) { const t = e === void 0 || typeof e == "string";
      t && (e = { textures: {}, images: {} }); const n = { metadata: { version: 4.6,
          type: "Material", generator: "Material.toJSON" } };
      n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this
        .color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !==
        void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this
          .metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this
        .sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !==
        void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive
        .isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity && this
        .emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular &&
        this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !==
        void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this
        .specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this
        .shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n
          .clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n
          .clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap
        .isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this
        .clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap =
          this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this
        .clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e)
          .uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.iridescence !==
        void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n
          .iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n
          .iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this
        .iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this
        .iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n
          .iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this
        .anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !==
        void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this
        .anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this
        .map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap
        .isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap
        .isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap
        .isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this
          .lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e)
          .uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture &&
        (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap &&
        this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType =
          this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap &&
        this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
          n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap
          .toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap =
          this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n
          .emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap
        .isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this
        .specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap =
          this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap
        .isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap &&
        this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 &&
          (n.combine = this.combine)), this.envMapIntensity !== void 0 && (n.envMapIntensity = this
          .envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this
        .gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e)
          .uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this
        .transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this
          .transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this
          .thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this
          .thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this
        .attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this
        .attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this
        .size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this
          .shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this
          .sizeAttenuation), this.blending !== Kn && (n.blending = this.blending), this.side !==
        gn && (n.side = this.side), this.vertexColors === !0 && (n.vertexColors = !0), this
        .opacity < 1 && (n.opacity = this.opacity), this.transparent === !0 && (n.transparent = !0),
        this.blendSrc !== Wr && (n.blendSrc = this.blendSrc), this.blendDst !== Xr && (n.blendDst =
          this.blendDst), this.blendEquation !== An && (n.blendEquation = this.blendEquation), this
        .blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !==
        null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n
          .blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor
        .isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n
          .blendAlpha = this.blendAlpha), this.depthFunc !== Ki && (n.depthFunc = this.depthFunc),
        this.depthTest === !1 && (n.depthTest = this.depthTest), this.depthWrite === !1 && (n
          .depthWrite = this.depthWrite), this.colorWrite === !1 && (n.colorWrite = this
        .colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask),
        this.stencilFunc !== Xs && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n
          .stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this
          .stencilFuncMask), this.stencilFail !== Pn && (n.stencilFail = this.stencilFail), this
        .stencilZFail !== Pn && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== Pn && (n
          .stencilZPass = this.stencilZPass), this.stencilWrite === !0 && (n.stencilWrite = this
          .stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this
          .rotation), this.polygonOffset === !0 && (n.polygonOffset = !0), this
        .polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this
        .polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this
        .linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this
        .dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n
          .gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this
        .dithering === !0 && (n.dithering = !0), this.alphaTest > 0 && (n.alphaTest = this
          .alphaTest), this.alphaHash === !0 && (n.alphaHash = !0), this.alphaToCoverage === !0 && (
          n.alphaToCoverage = !0), this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
        this.forceSinglePass === !0 && (n.forceSinglePass = !0), this.wireframe === !0 && (n
          .wireframe = !0), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this
          .wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this
          .wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this
          .wireframeLinejoin), this.flatShading === !0 && (n.flatShading = !0), this.visible === !
        1 && (n.visible = !1), this.toneMapped === !1 && (n.toneMapped = !1), this.fog === !1 && (n
          .fog = !1), Object.keys(this.userData).length > 0 && (n.userData = this.userData);

      function r(s) { const o = []; for (const a in s) { const l = s[a];
          delete l.metadata, o.push(l) } return o } if (t) { const s = r(e.textures),
          o = r(e.images);
        s.length > 0 && (n.textures = s), o.length > 0 && (n.images =
    o) } return n } clone() { return new this.constructor().copy(this) } copy(e) { this.name = e
        .name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors,
        this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this
        .blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e
        .blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e
        .blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha,
        this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite,
        this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this
        .stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e
        .stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this
        .stencilWrite = e.stencilWrite; const t = e.clippingPlanes; let n = null; if (t !==
        null) { const r = t.length;
        n = new Array(r); for (let s = 0; s !== r; ++s) n[s] = t[s].clone() } return this
        .clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e
        .clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this
        .precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e
        .polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e
        .dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this
        .alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this
        .forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e
        .toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this } dispose() { this
        .dispatchEvent({ type: "dispose" }) } set needsUpdate(e) { e === !0 && this
      .version++ } } class rs extends vi { constructor(e) { super(), this.isMeshBasicMaterial = !0,
      this.type = "MeshBasicMaterial", this.color = new He(16777215), this.map = null, this
      .lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1,
      this.specularMap = null, this.alphaMap = null, this.envMap = null, this.combine = Ba, this
      .reflectivity = 1, this.refractionRatio = .98, this.wireframe = !1, this
      .wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round",
      this.fog = !0, this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color),
      this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity,
      this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e
      .specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.combine = e.combine,
      this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this
      .wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this
      .wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this
      .fog = e.fog, this } }
const tt = new D,
  Di = new Pe;
class Wt { constructor(e, t, n = !1) { if (Array.isArray(e)) throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.");
      this.isBufferAttribute = !0, this.name = "", this.array = e, this.itemSize = t, this.count =
        e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = qs, this
        ._updateRange = { offset: 0, count: -1 }, this.updateRanges = [], this.gpuType = dn, this
        .version = 0 } onUploadCallback() {} set needsUpdate(e) { e === !0 && this
      .version++ } get updateRange() { return console.warn(
        "THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."
        ), this._updateRange } setUsage(e) { return this.usage = e, this } addUpdateRange(e,
    t) { this.updateRanges.push({ start: e, count: t }) } clearUpdateRanges() { this.updateRanges
        .length = 0 } copy(e) { return this.name = e.name, this.array = new e.array.constructor(e
          .array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized,
        this.usage = e.usage, this.gpuType = e.gpuType, this } copyAt(e, t, n) { e *= this.itemSize,
        n *= t.itemSize; for (let r = 0, s = this.itemSize; r < s; r++) this.array[e + r] = t.array[
        n + r]; return this } copyArray(e) { return this.array.set(e), this } applyMatrix3(e) { if (
        this.itemSize === 2)
        for (let t = 0, n = this.count; t < n; t++) Di.fromBufferAttribute(this, t), Di
          .applyMatrix3(e), this.setXY(t, Di.x, Di.y);
      else if (this.itemSize === 3)
        for (let t = 0, n = this.count; t < n; t++) tt.fromBufferAttribute(this, t), tt
          .applyMatrix3(e), this.setXYZ(t, tt.x, tt.y, tt.z); return this } applyMatrix4(e) { for (
        let t = 0, n = this.count; t < n; t++) tt.fromBufferAttribute(this, t), tt.applyMatrix4(e),
        this.setXYZ(t, tt.x, tt.y, tt.z); return this } applyNormalMatrix(e) { for (let t = 0, n =
          this.count; t < n; t++) tt.fromBufferAttribute(this, t), tt.applyNormalMatrix(e), this
        .setXYZ(t, tt.x, tt.y, tt.z); return this } transformDirection(e) { for (let t = 0, n = this
          .count; t < n; t++) tt.fromBufferAttribute(this, t), tt.transformDirection(e), this
        .setXYZ(t, tt.x, tt.y, tt.z); return this } set(e, t = 0) { return this.array.set(e, t),
        this } getComponent(e, t) { let n = this.array[e * this.itemSize + t]; return this
        .normalized && (n = si(n, this.array)), n } setComponent(e, t, n) { return this
        .normalized && (n = xt(n, this.array)), this.array[e * this.itemSize + t] = n, this } getX(
      e) { let t = this.array[e * this.itemSize]; return this.normalized && (t = si(t, this.array)),
        t } setX(e, t) { return this.normalized && (t = xt(t, this.array)), this.array[e * this
        .itemSize] = t, this } getY(e) { let t = this.array[e * this.itemSize + 1]; return this
        .normalized && (t = si(t, this.array)), t } setY(e, t) { return this.normalized && (t = xt(
        t, this.array)), this.array[e * this.itemSize + 1] = t, this } getZ(e) { let t = this.array[
        e * this.itemSize + 2]; return this.normalized && (t = si(t, this.array)), t } setZ(e,
    t) { return this.normalized && (t = xt(t, this.array)), this.array[e * this.itemSize + 2] = t,
        this } getW(e) { let t = this.array[e * this.itemSize + 3]; return this.normalized && (t =
        si(t, this.array)), t } setW(e, t) { return this.normalized && (t = xt(t, this.array)), this
        .array[e * this.itemSize + 3] = t, this } setXY(e, t, n) { return e *= this.itemSize, this
        .normalized && (t = xt(t, this.array), n = xt(n, this.array)), this.array[e + 0] = t, this
        .array[e + 1] = n, this } setXYZ(e, t, n, r) { return e *= this.itemSize, this.normalized &&
        (t = xt(t, this.array), n = xt(n, this.array), r = xt(r, this.array)), this.array[e + 0] =
        t, this.array[e + 1] = n, this.array[e + 2] = r, this } setXYZW(e, t, n, r, s) { return e *=
        this.itemSize, this.normalized && (t = xt(t, this.array), n = xt(n, this.array), r = xt(r,
          this.array), s = xt(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this
        .array[e + 2] = r, this.array[e + 3] = s, this } onUpload(e) { return this
        .onUploadCallback = e, this } clone() { return new this.constructor(this.array, this
        .itemSize).copy(this) } toJSON() { const e = { itemSize: this.itemSize, type: this.array
          .constructor.name, array: Array.from(this.array), normalized: this
        .normalized }; return this.name !== "" && (e.name = this.name), this.usage !== qs && (e
          .usage = this.usage), e } } class oo extends Wt { constructor(e, t, n) { super(
      new Uint16Array(e), t, n) } } class lo extends Wt { constructor(e, t, n) { super(
      new Uint32Array(e), t, n) } } class nn extends Wt { constructor(e, t, n) { super(
      new Float32Array(e), t, n) } }
let ql = 0;
const Rt = new ot,
  Ir = new Tt,
  zn = new D,
  bt = new _i,
  ci = new _i,
  at = new D;
class sn extends ti { constructor() { super(), this.isBufferGeometry = !0, Object.defineProperty(
          this, "id", { value: ql++ }), this.uuid = mi(), this.name = "", this.type =
        "BufferGeometry", this.index = null, this.attributes = {}, this.morphAttributes = {}, this
        .morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere =
        null, this.drawRange = { start: 0, count: 1 / 0 }, this
      .userData = {} } getIndex() { return this.index } setIndex(e) { return Array.isArray(e) ? this
        .index = new(eo(e) ? lo : oo)(e, 1) : this.index = e, this } getAttribute(e) { return this
        .attributes[e] } setAttribute(e, t) { return this.attributes[e] = t, this } deleteAttribute(
      e) { return delete this.attributes[e], this } hasAttribute(e) { return this.attributes[e] !==
        void 0 } addGroup(e, t, n = 0) { this.groups.push({ start: e, count: t,
      materialIndex: n }) } clearGroups() { this.groups = [] } setDrawRange(e, t) { this.drawRange
        .start = e, this.drawRange.count = t } applyMatrix4(e) { const t = this.attributes.position;
      t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = !0); const n = this.attributes
      .normal; if (n !== void 0) { const s = new ze().getNormalMatrix(e);
        n.applyNormalMatrix(s), n.needsUpdate = !0 } const r = this.attributes.tangent; return r !==
        void 0 && (r.transformDirection(e), r.needsUpdate = !0), this.boundingBox !== null && this
        .computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(),
        this } applyQuaternion(e) { return Rt.makeRotationFromQuaternion(e), this.applyMatrix4(Rt),
        this } rotateX(e) { return Rt.makeRotationX(e), this.applyMatrix4(Rt), this } rotateY(
    e) { return Rt.makeRotationY(e), this.applyMatrix4(Rt), this } rotateZ(e) { return Rt
        .makeRotationZ(e), this.applyMatrix4(Rt), this } translate(e, t, n) { return Rt
        .makeTranslation(e, t, n), this.applyMatrix4(Rt), this } scale(e, t, n) { return Rt
        .makeScale(e, t, n), this.applyMatrix4(Rt), this } lookAt(e) { return Ir.lookAt(e), Ir
        .updateMatrix(), this.applyMatrix4(Ir.matrix), this } center() { return this
        .computeBoundingBox(), this.boundingBox.getCenter(zn).negate(), this.translate(zn.x, zn.y,
          zn.z), this } setFromPoints(e) { const t = []; for (let n = 0, r = e.length; n <
        r; n++) { const s = e[n];
        t.push(s.x, s.y, s.z || 0) } return this.setAttribute("position", new nn(t, 3)),
      this } computeBoundingBox() { this.boundingBox === null && (this.boundingBox = new _i); const
        e = this.attributes.position,
        t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error(
          'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
          this), this.boundingBox.set(new D(-1 / 0, -1 / 0, -1 / 0), new D(1 / 0, 1 / 0, 1 /
        0)); return } if (e !== void 0) { if (this.boundingBox.setFromBufferAttribute(e), t)
          for (let n = 0, r = t.length; n < r; n++) { const s = t[n];
            bt.setFromBufferAttribute(s), this.morphTargetsRelative ? (at.addVectors(this
              .boundingBox.min, bt.min), this.boundingBox.expandByPoint(at), at.addVectors(this
              .boundingBox.max, bt.max), this.boundingBox.expandByPoint(at)) : (this.boundingBox
              .expandByPoint(bt.min), this.boundingBox.expandByPoint(bt.max)) } } else this
        .boundingBox.makeEmpty();
      (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min
        .z)) && console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this) } computeBoundingSphere() { this.boundingSphere === null && (this.boundingSphere =
        new nr); const e = this.attributes.position,
        t = this.morphAttributes.position; if (e && e.isGLBufferAttribute) { console.error(
          'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
          this), this.boundingSphere.set(new D, 1 / 0); return } if (e) { const n = this
          .boundingSphere.center; if (bt.setFromBufferAttribute(e), t)
          for (let s = 0, o = t.length; s < o; s++) { const a = t[s];
            ci.setFromBufferAttribute(a), this.morphTargetsRelative ? (at.addVectors(bt.min, ci
                .min), bt.expandByPoint(at), at.addVectors(bt.max, ci.max), bt.expandByPoint(at)) :
              (bt.expandByPoint(ci.min), bt.expandByPoint(ci.max)) } bt.getCenter(n); let r =
        0; for (let s = 0, o = e.count; s < o; s++) at.fromBufferAttribute(e, s), r = Math.max(r, n
          .distanceToSquared(at)); if (t)
          for (let s = 0, o = t.length; s < o; s++) { const a = t[s],
              l = this.morphTargetsRelative; for (let c = 0, h = a.count; c < h; c++) at
              .fromBufferAttribute(a, c), l && (zn.fromBufferAttribute(e, c), at.add(zn)), r = Math
              .max(r, n.distanceToSquared(at)) } this.boundingSphere.radius = Math.sqrt(r), isNaN(
            this.boundingSphere.radius) && console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this) } } computeTangents() { const e = this.index,
        t = this.attributes; if (e === null || t.position === void 0 || t.normal === void 0 || t
        .uv === void 0) { console.error(
          "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
          ); return } const n = e.array,
        r = t.position.array,
        s = t.normal.array,
        o = t.uv.array,
        a = r.length / 3;
      this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Wt(new Float32Array(
        4 * a), 4)); const l = this.getAttribute("tangent").array,
        c = [],
        h = []; for (let T = 0; T < a; T++) c[T] = new D, h[T] = new D; const f = new D,
        p = new D,
        m = new D,
        v = new Pe,
        _ = new Pe,
        d = new Pe,
        u = new D,
        y = new D;

      function E(T, H, k) { f.fromArray(r, T * 3), p.fromArray(r, H * 3), m.fromArray(r, k * 3), v
          .fromArray(o, T * 2), _.fromArray(o, H * 2), d.fromArray(o, k * 2), p.sub(f), m.sub(f), _
          .sub(v), d.sub(v); const ie = 1 / (_.x * d.y - d.x * _.y);
        isFinite(ie) && (u.copy(p).multiplyScalar(d.y).addScaledVector(m, -_.y).multiplyScalar(ie),
          y.copy(m).multiplyScalar(_.x).addScaledVector(p, -d.x).multiplyScalar(ie), c[T].add(u),
          c[H].add(u), c[k].add(u), h[T].add(y), h[H].add(y), h[k].add(y)) } let A = this.groups;
      A.length === 0 && (A = [{ start: 0, count: n.length }]); for (let T = 0, H = A.length; T <
        H; ++T) { const k = A[T],
          ie = k.start,
          C = k.count; for (let B = ie, G = ie + C; B < G; B += 3) E(n[B + 0], n[B + 1], n[B +
        2]) } const L = new D,
        R = new D,
        w = new D,
        Z = new D;

      function S(T) { w.fromArray(s, T * 3), Z.copy(w); const H = c[T];
        L.copy(H), L.sub(w.multiplyScalar(w.dot(H))).normalize(), R.crossVectors(Z, H); const ie = R
          .dot(h[T]) < 0 ? -1 : 1;
        l[T * 4] = L.x, l[T * 4 + 1] = L.y, l[T * 4 + 2] = L.z, l[T * 4 + 3] = ie } for (let T = 0,
          H = A.length; T < H; ++T) { const k = A[T],
          ie = k.start,
          C = k.count; for (let B = ie, G = ie + C; B < G; B += 3) S(n[B + 0]), S(n[B + 1]), S(n[B +
          2]) } } computeVertexNormals() { const e = this.index,
        t = this.getAttribute("position"); if (t !== void 0) { let n = this.getAttribute(
        "normal"); if (n === void 0) n = new Wt(new Float32Array(t.count * 3), 3), this
          .setAttribute("normal", n);
        else
          for (let p = 0, m = n.count; p < m; p++) n.setXYZ(p, 0, 0, 0); const r = new D,
          s = new D,
          o = new D,
          a = new D,
          l = new D,
          c = new D,
          h = new D,
          f = new D; if (e)
          for (let p = 0, m = e.count; p < m; p += 3) { const v = e.getX(p + 0),
              _ = e.getX(p + 1),
              d = e.getX(p + 2);
            r.fromBufferAttribute(t, v), s.fromBufferAttribute(t, _), o.fromBufferAttribute(t, d), h
              .subVectors(o, s), f.subVectors(r, s), h.cross(f), a.fromBufferAttribute(n, v), l
              .fromBufferAttribute(n, _), c.fromBufferAttribute(n, d), a.add(h), l.add(h), c.add(h),
              n.setXYZ(v, a.x, a.y, a.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(d, c.x, c.y, c
              .z) } else
            for (let p = 0, m = t.count; p < m; p += 3) r.fromBufferAttribute(t, p + 0), s
              .fromBufferAttribute(t, p + 1), o.fromBufferAttribute(t, p + 2), h.subVectors(o, s), f
              .subVectors(r, s), h.cross(f), n.setXYZ(p + 0, h.x, h.y, h.z), n.setXYZ(p + 1, h.x, h
                .y, h.z), n.setXYZ(p + 2, h.x, h.y, h.z);
        this.normalizeNormals(), n.needsUpdate = !0 } } normalizeNormals() { const e = this
        .attributes.normal; for (let t = 0, n = e.count; t < n; t++) at.fromBufferAttribute(e, t),
        at.normalize(), e.setXYZ(t, at.x, at.y, at.z) } toNonIndexed() {
      function e(a, l) { const c = a.array,
          h = a.itemSize,
          f = a.normalized,
          p = new c.constructor(l.length * h); let m = 0,
          v = 0; for (let _ = 0, d = l.length; _ < d; _++) { a.isInterleavedBufferAttribute ? m = l[
            _] * a.data.stride + a.offset : m = l[_] * h; for (let u = 0; u < h; u++) p[v++] = c[
            m++] } return new Wt(p, h, f) } if (this.index === null) return console.warn(
        "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this; const
        t = new sn,
        n = this.index.array,
        r = this.attributes; for (const a in r) { const l = r[a],
          c = e(l, n);
        t.setAttribute(a, c) } const s = this.morphAttributes; for (const a in s) { const l = [],
          c = s[a]; for (let h = 0, f = c.length; h < f; h++) { const p = c[h],
            m = e(p, n);
          l.push(m) } t.morphAttributes[a] = l } t.morphTargetsRelative = this
      .morphTargetsRelative; const o = this.groups; for (let a = 0, l = o.length; a <
        l; a++) { const c = o[a];
        t.addGroup(c.start, c.count, c.materialIndex) } return t } toJSON() { const
        e = { metadata: { version: 4.6, type: "BufferGeometry",
          generator: "BufferGeometry.toJSON" } }; if (e.uuid = this.uuid, e.type = this.type, this
        .name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData =
          this.userData), this.parameters !== void 0) { const l = this.parameters; for (const c in
          l) l[c] !== void 0 && (e[c] = l[c]); return e } e.data = { attributes: {} }; const t =
        this.index;
      t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice
          .call(t.array) }); const n = this.attributes; for (const l in n) { const c = n[l];
        e.data.attributes[l] = c.toJSON(e.data) } const r = {}; let s = !1; for (const l in this
          .morphAttributes) { const c = this.morphAttributes[l],
          h = []; for (let f = 0, p = c.length; f < p; f++) { const m = c[f];
          h.push(m.toJSON(e.data)) } h.length > 0 && (r[l] = h, s = !0) } s && (e.data
        .morphAttributes = r, e.data.morphTargetsRelative = this.morphTargetsRelative); const o =
        this.groups;
      o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o))); const a = this
      .boundingSphere; return a !== null && (e.data.boundingSphere = { center: a.center.toArray(),
        radius: a.radius }), e } clone() { return new this.constructor().copy(this) } copy(e) { this
        .index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this
        .boundingBox = null, this.boundingSphere = null; const t = {};
      this.name = e.name; const n = e.index;
      n !== null && this.setIndex(n.clone(t)); const r = e.attributes; for (const c in r) { const
          h = r[c];
        this.setAttribute(c, h.clone(t)) } const s = e.morphAttributes; for (const c in s) { const
          h = [],
          f = s[c]; for (let p = 0, m = f.length; p < m; p++) h.push(f[p].clone(t));
        this.morphAttributes[c] = h } this.morphTargetsRelative = e.morphTargetsRelative; const o =
        e.groups; for (let c = 0, h = o.length; c < h; c++) { const f = o[c];
        this.addGroup(f.start, f.count, f.materialIndex) } const a = e.boundingBox;
      a !== null && (this.boundingBox = a.clone()); const l = e.boundingSphere; return l !== null &&
        (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange
        .count = e.drawRange.count, this.userData = e.userData, this } dispose() { this
        .dispatchEvent({ type: "dispose" }) } }
const aa = new ot,
  Sn = new ro,
  Ui = new nr,
  oa = new D,
  Gn = new D,
  Hn = new D,
  Vn = new D,
  Nr = new D,
  Ii = new D,
  Ni = new Pe,
  Fi = new Pe,
  Oi = new Pe,
  la = new D,
  ca = new D,
  ua = new D,
  Bi = new D,
  zi = new D;
class kt extends Tt { constructor(e = new sn, t = new rs) { super(), this.isMesh = !0, this.type =
        "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e,
    t) { return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this
          .morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !==
        void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this
        .material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e
        .geometry, this } updateMorphTargets() { const t = this.geometry.morphAttributes,
        n = Object.keys(t); if (n.length > 0) { const r = t[n[0]]; if (r !== void 0) { this
            .morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, o = r
              .length; s < o; s++) { const a = r[s].name || String(s);
            this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] =
            s } } } } getVertexPosition(e, t) { const n = this.geometry,
        r = n.attributes.position,
        s = n.morphAttributes.position,
        o = n.morphTargetsRelative;
      t.fromBufferAttribute(r, e); const a = this.morphTargetInfluences; if (s && a) { Ii.set(0, 0,
          0); for (let l = 0, c = s.length; l < c; l++) { const h = a[l],
            f = s[l];
          h !== 0 && (Nr.fromBufferAttribute(f, e), o ? Ii.addScaledVector(Nr, h) : Ii
            .addScaledVector(Nr.sub(t), h)) } t.add(Ii) } return t } raycast(e, t) { const n = this
        .geometry,
        r = this.material,
        s = this.matrixWorld;
      r !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Ui.copy(n
        .boundingSphere), Ui.applyMatrix4(s), Sn.copy(e.ray).recast(e.near), !(Ui.containsPoint(
        Sn.origin) === !1 && (Sn.intersectSphere(Ui, oa) === null || Sn.origin
        .distanceToSquared(oa) > (e.far - e.near) ** 2)) && (aa.copy(s).invert(), Sn.copy(e.ray)
        .applyMatrix4(aa), !(n.boundingBox !== null && Sn.intersectsBox(n.boundingBox) === !
        1) && this._computeIntersections(e, t, Sn))) } _computeIntersections(e, t, n) { let r; const
        s = this.geometry,
        o = this.material,
        a = s.index,
        l = s.attributes.position,
        c = s.attributes.uv,
        h = s.attributes.uv1,
        f = s.attributes.normal,
        p = s.groups,
        m = s.drawRange; if (a !== null)
        if (Array.isArray(o))
          for (let v = 0, _ = p.length; v < _; v++) { const d = p[v],
              u = o[d.materialIndex],
              y = Math.max(d.start, m.start),
              E = Math.min(a.count, Math.min(d.start + d.count, m.start + m.count)); for (let A = y,
                L = E; A < L; A += 3) { const R = a.getX(A),
                w = a.getX(A + 1),
                Z = a.getX(A + 2);
              r = Gi(this, u, e, n, c, h, f, R, w, Z), r && (r.faceIndex = Math.floor(A / 3), r.face
                .materialIndex = d.materialIndex, t.push(r)) } } else { const v = Math.max(0, m
                .start),
              _ = Math.min(a.count, m.start + m.count); for (let d = v, u = _; d < u; d +=
              3) { const y = a.getX(d),
                E = a.getX(d + 1),
                A = a.getX(d + 2);
              r = Gi(this, o, e, n, c, h, f, y, E, A), r && (r.faceIndex = Math.floor(d / 3), t
                .push(r)) } } else if (l !== void 0)
            if (Array.isArray(o))
              for (let v = 0, _ = p.length; v < _; v++) { const d = p[v],
                  u = o[d.materialIndex],
                  y = Math.max(d.start, m.start),
                  E = Math.min(l.count, Math.min(d.start + d.count, m.start + m.count)); for (let
                    A = y, L = E; A < L; A += 3) { const R = A,
                    w = A + 1,
                    Z = A + 2;
                  r = Gi(this, u, e, n, c, h, f, R, w, Z), r && (r.faceIndex = Math.floor(A / 3), r
                    .face.materialIndex = d.materialIndex, t.push(r)) } } else { const v = Math.max(
                    0, m.start),
                  _ = Math.min(l.count, m.start + m.count); for (let d = v, u = _; d < u; d +=
                  3) { const y = d,
                    E = d + 1,
                    A = d + 2;
                  r = Gi(this, o, e, n, c, h, f, y, E, A), r && (r.faceIndex = Math.floor(d / 3), t
                    .push(r)) } } } }

function Yl(i, e, t, n, r, s, o, a) { let l; if (e.side === St ? l = n.intersectTriangle(o, s, r, !
      0, a) : l = n.intersectTriangle(r, s, o, e.side === gn, a), l === null) return null;
  zi.copy(a), zi.applyMatrix4(i.matrixWorld); const c = t.ray.origin.distanceTo(zi); return c < t
    .near || c > t.far ? null : { distance: c, point: zi.clone(), object: i } }

function Gi(i, e, t, n, r, s, o, a, l, c) { i.getVertexPosition(a, Gn), i.getVertexPosition(l, Hn),
    i.getVertexPosition(c, Vn); const h = Yl(i, e, t, n, Gn, Hn, Vn, Bi); if (h) { r && (Ni
      .fromBufferAttribute(r, a), Fi.fromBufferAttribute(r, l), Oi.fromBufferAttribute(r, c), h
      .uv = Nt.getInterpolation(Bi, Gn, Hn, Vn, Ni, Fi, Oi, new Pe)), s && (Ni
      .fromBufferAttribute(s, a), Fi.fromBufferAttribute(s, l), Oi.fromBufferAttribute(s, c), h
      .uv1 = Nt.getInterpolation(Bi, Gn, Hn, Vn, Ni, Fi, Oi, new Pe), h.uv2 = h.uv1), o && (la
      .fromBufferAttribute(o, a), ca.fromBufferAttribute(o, l), ua.fromBufferAttribute(o, c), h
      .normal = Nt.getInterpolation(Bi, Gn, Hn, Vn, la, ca, ua, new D), h.normal.dot(n
      .direction) > 0 && h.normal.multiplyScalar(-1)); const f = { a, b: l, c, normal: new D,
      materialIndex: 0 };
    Nt.getNormal(Gn, Hn, Vn, f.normal), h.face = f } return h } class xi extends sn { constructor(
      e = 1, t = 1, n = 1, r = 1, s = 1, o = 1) { super(), this.type = "BoxGeometry", this
        .parameters = { width: e, height: t, depth: n, widthSegments: r, heightSegments: s,
          depthSegments: o }; const a = this;
      r = Math.floor(r), s = Math.floor(s), o = Math.floor(o); const l = [],
        c = [],
        h = [],
        f = []; let p = 0,
        m = 0;
      v("z", "y", "x", -1, -1, n, t, e, o, s, 0), v("z", "y", "x", 1, -1, n, t, -e, o, s, 1), v("x",
          "z", "y", 1, 1, e, n, t, r, o, 2), v("x", "z", "y", 1, -1, e, n, -t, r, o, 3), v("x", "y",
          "z", 1, -1, e, t, n, r, s, 4), v("x", "y", "z", -1, -1, e, t, -n, r, s, 5), this.setIndex(
          l), this.setAttribute("position", new nn(c, 3)), this.setAttribute("normal", new nn(h,
        3)), this.setAttribute("uv", new nn(f, 2));

      function v(_, d, u, y, E, A, L, R, w, Z, S) { const T = A / w,
          H = L / Z,
          k = A / 2,
          ie = L / 2,
          C = R / 2,
          B = w + 1,
          G = Z + 1; let X = 0,
          V = 0; const W = new D; for (let q = 0; q < G; q++) { const Q = q * H - ie; for (let ee =
              0; ee < B; ee++) { const z = ee * T - k;
            W[_] = z * y, W[d] = Q * E, W[u] = C, c.push(W.x, W.y, W.z), W[_] = 0, W[d] = 0, W[u] =
              R > 0 ? 1 : -1, h.push(W.x, W.y, W.z), f.push(ee / w), f.push(1 - q / Z), X +=
              1 } } for (let q = 0; q < Z; q++)
          for (let Q = 0; Q < w; Q++) { const ee = p + Q + B * q,
              z = p + Q + B * (q + 1),
              Y = p + (Q + 1) + B * (q + 1),
              oe = p + (Q + 1) + B * q;
            l.push(ee, z, oe), l.push(z, Y, oe), V += 6 } a.addGroup(m, V, S), m += V, p +=
          X } } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters),
        this } static fromJSON(e) { return new xi(e.width, e.height, e.depth, e.widthSegments, e
        .heightSegments, e.depthSegments) } }

function Qn(i) { const e = {}; for (const t in i) { e[t] = {}; for (const n in i[t]) { const r = i[
        t][n];
      r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 ||
        r.isTexture || r.isQuaternion) ? r.isRenderTargetTexture ? (console.warn(
        "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."
        ), e[t][n] = null) : e[t][n] = r.clone() : Array.isArray(r) ? e[t][n] = r.slice() : e[t][
        n] = r } } return e }

function gt(i) { const e = {}; for (let t = 0; t < i.length; t++) { const n = Qn(i[t]); for (const
        r in n) e[r] = n[r] } return e }

function Kl(i) { const e = []; for (let t = 0; t < i.length; t++) e.push(i[t].clone()); return e }

function co(i) { return i.getRenderTarget() === null ? i.outputColorSpace : We.workingColorSpace }
const di = { clone: Qn, merge: gt };
var jl = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  Zl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class vt extends vi { constructor(e) { super(), this.isShaderMaterial = !0, this.type =
      "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this
      .vertexShader = jl, this.fragmentShader = Zl, this.linewidth = 1, this.wireframe = !1, this
      .wireframeLinewidth = 1, this.fog = !1, this.lights = !1, this.clipping = !1, this
      .forceSinglePass = !0, this.extensions = { derivatives: !1, fragDepth: !1, drawBuffers: !1,
        shaderTextureLOD: !1, clipCullDistance: !1 }, this.defaultAttributeValues = { color: [1,
          1, 1
        ], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this
      .uniformsNeedUpdate = !1, this.glslVersion = null, e !== void 0 && this.setValues(e) } copy(
    e) { return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e
      .vertexShader, this.uniforms = Qn(e.uniforms), this.uniformsGroups = Kl(e.uniformsGroups),
      this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this
      .wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this
      .clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this
      .glslVersion = e.glslVersion, this } toJSON(e) { const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {}; for (const r in this.uniforms) { const o =
        this.uniforms[r].value;
      o && o.isTexture ? t.uniforms[r] = { type: "t", value: o.toJSON(e).uuid } : o && o.isColor ?
        t.uniforms[r] = { type: "c", value: o.getHex() } : o && o.isVector2 ? t.uniforms[
        r] = { type: "v2", value: o.toArray() } : o && o.isVector3 ? t.uniforms[r] = { type: "v3",
          value: o.toArray() } : o && o.isVector4 ? t.uniforms[r] = { type: "v4", value: o
            .toArray() } : o && o.isMatrix3 ? t.uniforms[r] = { type: "m3", value: o.toArray() } :
        o && o.isMatrix4 ? t.uniforms[r] = { type: "m4", value: o.toArray() } : t.uniforms[
        r] = { value: o } } Object.keys(this.defines).length > 0 && (t.defines = this.defines), t
      .vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this
      .lights, t.clipping = this.clipping; const n = {}; for (const r in this.extensions) this
      .extensions[r] === !0 && (n[r] = !0); return Object.keys(n).length > 0 && (t.extensions =
      n), t } } class uo extends Tt { constructor() { super(), this.isCamera = !0, this.type =
      "Camera", this.matrixWorldInverse = new ot, this.projectionMatrix = new ot, this
      .projectionMatrixInverse = new ot, this.coordinateSystem = Qt } copy(e, t) { return super
      .copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(
        e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this
      .coordinateSystem = e.coordinateSystem, this } getWorldDirection(e) { return super
      .getWorldDirection(e).negate() } updateMatrixWorld(e) { super.updateMatrixWorld(e), this
      .matrixWorldInverse.copy(this.matrixWorld).invert() } updateWorldMatrix(e, t) { super
      .updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld)
  .invert() } clone() { return new this.constructor().copy(
    this) } } class Pt extends uo { constructor(e = 50, t = 1, n = .1, r = 2e3) { super(), this
        .isPerspectiveCamera = !0, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1,
        this.near = n, this.far = r, this.focus = 10, this.aspect = t, this.view = null, this
        .filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix() } copy(e,
    t) { return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this
        .far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ?
        null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e
        .filmOffset, this } setFocalLength(e) { const t = .5 * this.getFilmHeight() / e;
      this.fov = $r * 2 * Math.atan(t), this.updateProjectionMatrix() } getFocalLength() { const e =
        Math.tan(vr * .5 * this.fov); return .5 * this.getFilmHeight() /
    e } getEffectiveFOV() { return $r * 2 * Math.atan(Math.tan(vr * .5 * this.fov) / this
      .zoom) } getFilmWidth() { return this.filmGauge * Math.min(this.aspect,
    1) } getFilmHeight() { return this.filmGauge / Math.max(this.aspect, 1) } setViewOffset(e, t, n,
      r, s, o) { this.aspect = e / t, this.view === null && (this.view = { enabled: !0,
          fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view
        .enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n,
        this.view.offsetY = r, this.view.width = s, this.view.height = o, this
        .updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !
        1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = this.near; let t =
        e * Math.tan(vr * .5 * this.fov) / this.zoom,
        n = 2 * t,
        r = this.aspect * n,
        s = -.5 * r; const o = this.view; if (this.view !== null && this.view.enabled) { const l = o
          .fullWidth,
          c = o.fullHeight;
        s += o.offsetX * r / l, t -= o.offsetY * n / c, r *= o.width / l, n *= o.height / c } const
        a = this.filmOffset;
      a !== 0 && (s += e * a / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + r,
        t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this
        .projectionMatrix).invert() } toJSON(e) { const t = super.toJSON(e); return t.object.fov =
        this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t
        .object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object
          .view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object
        .filmOffset = this.filmOffset, t } }
const kn = -90,
  Wn = 1;
class $l extends Tt { constructor(e, t, n) { super(), this.type = "CubeCamera", this.renderTarget =
      n, this.coordinateSystem = null, this.activeMipmapLevel = 0; const r = new Pt(kn, Wn, e, t);
    r.layers = this.layers, this.add(r); const s = new Pt(kn, Wn, e, t);
    s.layers = this.layers, this.add(s); const o = new Pt(kn, Wn, e, t);
    o.layers = this.layers, this.add(o); const a = new Pt(kn, Wn, e, t);
    a.layers = this.layers, this.add(a); const l = new Pt(kn, Wn, e, t);
    l.layers = this.layers, this.add(l); const c = new Pt(kn, Wn, e, t);
    c.layers = this.layers, this.add(c) } updateCoordinateSystem() { const e = this
      .coordinateSystem,
      t = this.children.concat(),
      [n, r, s, o, a, l] = t; for (const c of t) this.remove(c); if (e === Qt) n.up.set(0, 1, 0),
      n.lookAt(1, 0, 0), r.up.set(0, 1, 0), r.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1,
        0), o.up.set(0, 0, 1), o.lookAt(0, -1, 0), a.up.set(0, 1, 0), a.lookAt(0, 0, 1), l.up.set(
        0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === Ji) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), r.up.set(0, -1, 0), r.lookAt(1, 0,
        0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), o.up.set(0, 0, -1), o.lookAt(0, -1, 0), a.up
      .set(0, -1, 0), a.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error(
      "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e); for (const
        c of t) this.add(c), c.updateMatrixWorld() } update(e, t) { this.parent === null && this
      .updateMatrixWorld(); const { renderTarget: n, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem,
      this.updateCoordinateSystem()); const [s, o, a, l, c, h] = this.children, f = e
      .getRenderTarget(), p = e.getActiveCubeFace(), m = e.getActiveMipmapLevel(), v = e.xr
      .enabled;
    e.xr.enabled = !1; const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = !1, e.setRenderTarget(n, 0, r), e.render(t, s), e.setRenderTarget(
        n, 1, r), e.render(t, o), e.setRenderTarget(n, 2, r), e.render(t, a), e.setRenderTarget(n,
        3, r), e.render(t, l), e.setRenderTarget(n, 4, r), e.render(t, c), n.texture
      .generateMipmaps = _, e.setRenderTarget(n, 5, r), e.render(t, h), e.setRenderTarget(f, p,
      m), e.xr.enabled = v, n.texture.needsPMREMUpdate = !0 } } class ho extends Et { constructor(e,
    t, n, r, s, o, a, l, c, h) { e = e !== void 0 ? e : [], t = t !== void 0 ? t : Zn, super(e, t,
      n, r, s, o, a, l, c, h), this.isCubeTexture = !0, this.flipY = !
  1 } get images() { return this.image } set images(e) { this.image =
    e } } class Jl extends Bt { constructor(e = 1, t = {}) { super(e, e, t), this
      .isWebGLCubeRenderTarget = !0; const n = { width: e, height: e, depth: 1 },
      r = [n, n, n, n, n, n];
    t.encoding !== void 0 && (ui(
          "THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),
        t.colorSpace = t.encoding === Cn ? lt : Lt), this.texture = new ho(r, t.mapping, t.wrapS,
        t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this
      .texture.isRenderTargetTexture = !0, this.texture.generateMipmaps = t.generateMipmaps !==
      void 0 ? t.generateMipmaps : !1, this.texture.minFilter = t.minFilter !== void 0 ? t
      .minFilter : Ct } fromEquirectangularTexture(e, t) { this.texture.type = t.type, this
      .texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this
      .texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter; const
      n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` },
      r = new xi(5, 5, 5),
      s = new vt({ name: "CubemapFromEquirect", uniforms: Qn(n.uniforms), vertexShader: n
          .vertexShader, fragmentShader: n.fragmentShader, side: St, blending: en });
    s.uniforms.tEquirect.value = t; const o = new kt(r, s),
      a = t.minFilter; return t.minFilter === fi && (t.minFilter = Ct), new $l(1, 10, this)
      .update(e, o), t.minFilter = a, o.geometry.dispose(), o.material.dispose(), this } clear(e,
    t, n, r) { const s = e.getRenderTarget(); for (let o = 0; o < 6; o++) e.setRenderTarget(this,
      o), e.clear(t, n, r);
    e.setRenderTarget(s) } }
const Fr = new D,
  Ql = new D,
  ec = new ze;
class Tn { constructor(e = new D(1, 0, 0), t = 0) { this.isPlane = !0, this.normal = e, this
        .constant = t } set(e, t) { return this.normal.copy(e), this.constant = t,
      this } setComponents(e, t, n, r) { return this.normal.set(e, t, n), this.constant = r,
      this } setFromNormalAndCoplanarPoint(e, t) { return this.normal.copy(e), this.constant = -t
        .dot(this.normal), this } setFromCoplanarPoints(e, t, n) { const r = Fr.subVectors(n, t)
        .cross(Ql.subVectors(e, t)).normalize(); return this.setFromNormalAndCoplanarPoint(r, e),
        this } copy(e) { return this.normal.copy(e.normal), this.constant = e.constant,
      this } normalize() { const e = 1 / this.normal.length(); return this.normal.multiplyScalar(e),
        this.constant *= e, this } negate() { return this.constant *= -1, this.normal.negate(),
      this } distanceToPoint(e) { return this.normal.dot(e) + this.constant } distanceToSphere(
    e) { return this.distanceToPoint(e.center) - e.radius } projectPoint(e, t) { return t.copy(e)
        .addScaledVector(this.normal, -this.distanceToPoint(e)) } intersectLine(e, t) { const n = e
        .delta(Fr),
        r = this.normal.dot(n); if (r === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e
        .start) : null; const s = -(e.start.dot(this.normal) + this.constant) / r; return s < 0 ||
        s > 1 ? null : t.copy(e.start).addScaledVector(n, s) } intersectsLine(e) { const t = this
        .distanceToPoint(e.start),
        n = this.distanceToPoint(e.end); return t < 0 && n > 0 || n < 0 && t > 0 } intersectsBox(
    e) { return e.intersectsPlane(this) } intersectsSphere(e) { return e.intersectsPlane(
      this) } coplanarPoint(e) { return e.copy(this.normal).multiplyScalar(-this
      .constant) } applyMatrix4(e, t) { const n = t || ec.getNormalMatrix(e),
        r = this.coplanarPoint(Fr).applyMatrix4(e),
        s = this.normal.applyMatrix3(n).normalize(); return this.constant = -r.dot(s),
      this } translate(e) { return this.constant -= e.dot(this.normal), this } equals(e) { return e
        .normal.equals(this.normal) && e.constant === this.constant } clone() { return new this
        .constructor().copy(this) } }
const En = new nr,
  Hi = new D;
class fo { constructor(e = new Tn, t = new Tn, n = new Tn, r = new Tn, s = new Tn, o =
  new Tn) { this.planes = [e, t, n, r, s, o] } set(e, t, n, r, s, o) { const a = this
    .planes; return a[0].copy(e), a[1].copy(t), a[2].copy(n), a[3].copy(r), a[4].copy(s), a[5]
      .copy(o), this } copy(e) { const t = this.planes; for (let n = 0; n < 6; n++) t[n].copy(e
      .planes[n]); return this } setFromProjectionMatrix(e, t = Qt) { const n = this.planes,
      r = e.elements,
      s = r[0],
      o = r[1],
      a = r[2],
      l = r[3],
      c = r[4],
      h = r[5],
      f = r[6],
      p = r[7],
      m = r[8],
      v = r[9],
      _ = r[10],
      d = r[11],
      u = r[12],
      y = r[13],
      E = r[14],
      A = r[15]; if (n[0].setComponents(l - s, p - c, d - m, A - u).normalize(), n[1]
      .setComponents(l + s, p + c, d + m, A + u).normalize(), n[2].setComponents(l + o, p + h, d +
        v, A + y).normalize(), n[3].setComponents(l - o, p - h, d - v, A - y).normalize(), n[4]
      .setComponents(l - a, p - f, d - _, A - E).normalize(), t === Qt) n[5].setComponents(l + a,
      p + f, d + _, A + E).normalize();
    else if (t === Ji) n[5].setComponents(a, f, _, E).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
      t); return this } intersectsObject(e) { if (e.boundingSphere !== void 0) e
      .boundingSphere === null && e.computeBoundingSphere(), En.copy(e.boundingSphere)
      .applyMatrix4(e.matrixWorld);
    else { const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), En.copy(t.boundingSphere)
        .applyMatrix4(e.matrixWorld) } return this.intersectsSphere(En) } intersectsSprite(
  e) { return En.center.set(0, 0, 0), En.radius = .7071067811865476, En.applyMatrix4(e
      .matrixWorld), this.intersectsSphere(En) } intersectsSphere(e) { const t = this.planes,
      n = e.center,
      r = -e.radius; for (let s = 0; s < 6; s++)
      if (t[s].distanceToPoint(n) < r) return !1; return !0 } intersectsBox(e) { const t = this
      .planes; for (let n = 0; n < 6; n++) { const r = t[n]; if (Hi.x = r.normal.x > 0 ? e.max.x :
        e.min.x, Hi.y = r.normal.y > 0 ? e.max.y : e.min.y, Hi.z = r.normal.z > 0 ? e.max.z : e
        .min.z, r.distanceToPoint(Hi) < 0) return !1 } return !0 } containsPoint(e) { const t =
      this.planes; for (let n = 0; n < 6; n++)
      if (t[n].distanceToPoint(e) < 0) return !1; return !0 } clone() { return new this
      .constructor().copy(this) } }

function po() { let i = null,
    e = !1,
    t = null,
    n = null;

  function r(s, o) { t(s, o), n = i.requestAnimationFrame(r) } return { start: function () { e !== !
        0 && t !== null && (n = i.requestAnimationFrame(r), e = !0) }, stop: function () { i
        .cancelAnimationFrame(n), e = !1 }, setAnimationLoop: function (s) { t = s },
    setContext: function (s) { i = s } } }

function tc(i, e) { const t = e.isWebGL2,
    n = new WeakMap;

  function r(c, h) { const f = c.array,
      p = c.usage,
      m = f.byteLength,
      v = i.createBuffer();
    i.bindBuffer(h, v), i.bufferData(h, f, p), c.onUploadCallback(); let _; if (
      f instanceof Float32Array) _ = i.FLOAT;
    else if (f instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) _ = i.HALF_FLOAT;
        else throw new Error(
          "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");
    else _ = i.UNSIGNED_SHORT;
    else if (f instanceof Int16Array) _ = i.SHORT;
    else if (f instanceof Uint32Array) _ = i.UNSIGNED_INT;
    else if (f instanceof Int32Array) _ = i.INT;
    else if (f instanceof Int8Array) _ = i.BYTE;
    else if (f instanceof Uint8Array) _ = i.UNSIGNED_BYTE;
    else if (f instanceof Uint8ClampedArray) _ = i.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " +
    f); return { buffer: v, type: _, bytesPerElement: f.BYTES_PER_ELEMENT, version: c.version,
      size: m } }

  function s(c, h, f) { const p = h.array,
      m = h._updateRange,
      v = h.updateRanges; if (i.bindBuffer(f, c), m.count === -1 && v.length === 0 && i
      .bufferSubData(f, 0, p), v.length !== 0) { for (let _ = 0, d = v.length; _ < d; _++) { const
          u = v[_];
        t ? i.bufferSubData(f, u.start * p.BYTES_PER_ELEMENT, p, u.start, u.count) : i
          .bufferSubData(f, u.start * p.BYTES_PER_ELEMENT, p.subarray(u.start, u.start + u
          .count)) } h.clearUpdateRanges() } m.count !== -1 && (t ? i.bufferSubData(f, m.offset * p
        .BYTES_PER_ELEMENT, p, m.offset, m.count) : i.bufferSubData(f, m.offset * p
        .BYTES_PER_ELEMENT, p.subarray(m.offset, m.offset + m.count)), m.count = -1), h
      .onUploadCallback() }

  function o(c) { return c.isInterleavedBufferAttribute && (c = c.data), n.get(c) }

  function a(c) { c.isInterleavedBufferAttribute && (c = c.data); const h = n.get(c);
    h && (i.deleteBuffer(h.buffer), n.delete(c)) }

  function l(c, h) { if (c.isGLBufferAttribute) { const p = n.get(c);
      (!p || p.version < c.version) && n.set(c, { buffer: c.buffer, type: c.type, bytesPerElement: c
          .elementSize, version: c.version }); return } c.isInterleavedBufferAttribute && (c = c
      .data); const f = n.get(c); if (f === void 0) n.set(c, r(c, h));
    else if (f.version < c.version) { if (f.size !== c.array.byteLength) throw new Error(
        "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported."
        );
      s(f.buffer, c, h), f.version = c.version } } return { get: o, remove: a,
  update: l } } class rr extends sn { constructor(e = 1, t = 1, n = 1, r = 1) { super(), this.type =
        "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n,
          heightSegments: r }; const s = e / 2,
        o = t / 2,
        a = Math.floor(n),
        l = Math.floor(r),
        c = a + 1,
        h = l + 1,
        f = e / a,
        p = t / l,
        m = [],
        v = [],
        _ = [],
        d = []; for (let u = 0; u < h; u++) { const y = u * p - o; for (let E = 0; E <
          c; E++) { const A = E * f - s;
          v.push(A, -y, 0), _.push(0, 0, 1), d.push(E / a), d.push(1 - u / l) } } for (let u =
        0; u < l; u++)
        for (let y = 0; y < a; y++) { const E = y + c * u,
            A = y + c * (u + 1),
            L = y + 1 + c * (u + 1),
            R = y + 1 + c * u;
          m.push(E, A, R), m.push(A, L, R) } this.setIndex(m), this.setAttribute("position", new nn(
          v, 3)), this.setAttribute("normal", new nn(_, 3)), this.setAttribute("uv", new nn(d,
        2)) } copy(e) { return super.copy(e), this.parameters = Object.assign({}, e.parameters),
        this } static fromJSON(e) { return new rr(e.width, e.height, e.widthSegments, e
        .heightSegments) } }
var nc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  ic = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  rc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  sc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  ac = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  oc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  lc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT )
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN )
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  cc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  uc = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  hc = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,
  fc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  dc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  pc = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  mc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  gc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  _c = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  vc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  xc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  Mc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  Sc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  Ec = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  Tc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  yc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  Ac = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  bc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  wc = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  Rc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  Cc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Pc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  Lc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  Dc = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  Uc = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,
  Ic = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Nc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif

#endif`,
  Fc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Oc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS

		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Bc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  zc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Gc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Hc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Vc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  kc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  Wc = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Xc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  qc = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  Yc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  Kc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  jc = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  Zc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  $c = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  Jc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Qc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  eu = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  tu = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  nu = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  iu = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  ru = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  su = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  au = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  ou = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  lu = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  cu = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );

	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  uu = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  hu = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  fu = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  du = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  pu = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  mu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  gu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  _u = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  vu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  xu = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Mu = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Su = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Eu = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Tu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  yu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Au = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  bu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  wu = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Ru = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Cu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Pu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  Lu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  Du = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Uu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Iu = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  Nu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Fu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Ou = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  Bu = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  zu = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  Gu = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Hu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Vu = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  ku = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Wu = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Xu = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  qu = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Yu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Ku = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  ju = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  Zu = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  $u = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Ju = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  Qu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  eh = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const th = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  nh = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  ih = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  rh = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  sh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  ah = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  oh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  lh = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  ch = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  uh = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  hh = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  fh = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  dh = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  ph = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  mh = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  gh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  _h = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  vh = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  xh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  Mh = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Sh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  Eh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  Th = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  yh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ah = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  bh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  wh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Rh = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  Ch = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Ph = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  Lh = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  Dh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Uh = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Ih = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Ue = { alphahash_fragment: nc, alphahash_pars_fragment: ic, alphamap_fragment: rc,
    alphamap_pars_fragment: sc, alphatest_fragment: ac, alphatest_pars_fragment: oc,
    aomap_fragment: lc, aomap_pars_fragment: cc, batching_pars_vertex: uc, batching_vertex: hc,
    begin_vertex: fc, beginnormal_vertex: dc, bsdfs: pc, iridescence_fragment: mc,
    bumpmap_pars_fragment: gc, clipping_planes_fragment: _c, clipping_planes_pars_fragment: vc,
    clipping_planes_pars_vertex: xc, clipping_planes_vertex: Mc, color_fragment: Sc,
    color_pars_fragment: Ec, color_pars_vertex: Tc, color_vertex: yc, common: Ac,
    cube_uv_reflection_fragment: bc, defaultnormal_vertex: wc, displacementmap_pars_vertex: Rc,
    displacementmap_vertex: Cc, emissivemap_fragment: Pc, emissivemap_pars_fragment: Lc,
    colorspace_fragment: Dc, colorspace_pars_fragment: Uc, envmap_fragment: Ic,
    envmap_common_pars_fragment: Nc, envmap_pars_fragment: Fc, envmap_pars_vertex: Oc,
    envmap_physical_pars_fragment: jc, envmap_vertex: Bc, fog_vertex: zc, fog_pars_vertex: Gc,
    fog_fragment: Hc, fog_pars_fragment: Vc, gradientmap_pars_fragment: kc, lightmap_fragment: Wc,
    lightmap_pars_fragment: Xc, lights_lambert_fragment: qc, lights_lambert_pars_fragment: Yc,
    lights_pars_begin: Kc, lights_toon_fragment: Zc, lights_toon_pars_fragment: $c,
    lights_phong_fragment: Jc, lights_phong_pars_fragment: Qc, lights_physical_fragment: eu,
    lights_physical_pars_fragment: tu, lights_fragment_begin: nu, lights_fragment_maps: iu,
    lights_fragment_end: ru, logdepthbuf_fragment: su, logdepthbuf_pars_fragment: au,
    logdepthbuf_pars_vertex: ou, logdepthbuf_vertex: lu, map_fragment: cu, map_pars_fragment: uu,
    map_particle_fragment: hu, map_particle_pars_fragment: fu, metalnessmap_fragment: du,
    metalnessmap_pars_fragment: pu, morphcolor_vertex: mu, morphnormal_vertex: gu,
    morphtarget_pars_vertex: _u, morphtarget_vertex: vu, normal_fragment_begin: xu,
    normal_fragment_maps: Mu, normal_pars_fragment: Su, normal_pars_vertex: Eu, normal_vertex: Tu,
    normalmap_pars_fragment: yu, clearcoat_normal_fragment_begin: Au,
    clearcoat_normal_fragment_maps: bu, clearcoat_pars_fragment: wu, iridescence_pars_fragment: Ru,
    opaque_fragment: Cu, packing: Pu, premultiplied_alpha_fragment: Lu, project_vertex: Du,
    dithering_fragment: Uu, dithering_pars_fragment: Iu, roughnessmap_fragment: Nu,
    roughnessmap_pars_fragment: Fu, shadowmap_pars_fragment: Ou, shadowmap_pars_vertex: Bu,
    shadowmap_vertex: zu, shadowmask_pars_fragment: Gu, skinbase_vertex: Hu,
    skinning_pars_vertex: Vu, skinning_vertex: ku, skinnormal_vertex: Wu, specularmap_fragment: Xu,
    specularmap_pars_fragment: qu, tonemapping_fragment: Yu, tonemapping_pars_fragment: Ku,
    transmission_fragment: ju, transmission_pars_fragment: Zu, uv_pars_fragment: $u,
    uv_pars_vertex: Ju, uv_vertex: Qu, worldpos_vertex: eh, background_vert: th,
    background_frag: nh, backgroundCube_vert: ih, backgroundCube_frag: rh, cube_vert: sh,
    cube_frag: ah, depth_vert: oh, depth_frag: lh, distanceRGBA_vert: ch, distanceRGBA_frag: uh,
    equirect_vert: hh, equirect_frag: fh, linedashed_vert: dh, linedashed_frag: ph,
    meshbasic_vert: mh, meshbasic_frag: gh, meshlambert_vert: _h, meshlambert_frag: vh,
    meshmatcap_vert: xh, meshmatcap_frag: Mh, meshnormal_vert: Sh, meshnormal_frag: Eh,
    meshphong_vert: Th, meshphong_frag: yh, meshphysical_vert: Ah, meshphysical_frag: bh,
    meshtoon_vert: wh, meshtoon_frag: Rh, points_vert: Ch, points_frag: Ph, shadow_vert: Lh,
    shadow_frag: Dh, sprite_vert: Uh, sprite_frag: Ih },
  ne = { common: { diffuse: { value: new He(16777215) }, opacity: { value: 1 },
    map: { value: null }, mapTransform: { value: new ze }, alphaMap: { value: null },
      alphaMapTransform: { value: new ze }, alphaTest: { value: 0 } },
    specularmap: { specularMap: { value: null }, specularMapTransform: { value: new ze } },
    envmap: { envMap: { value: null }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 },
      ior: { value: 1.5 }, refractionRatio: { value: .98 } }, aomap: { aoMap: { value: null },
      aoMapIntensity: { value: 1 }, aoMapTransform: { value: new ze } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new ze } }, bumpmap: { bumpMap: { value: null },
      bumpMapTransform: { value: new ze }, bumpScale: { value: 1 } },
    normalmap: { normalMap: { value: null }, normalMapTransform: { value: new ze },
      normalScale: { value: new Pe(1, 1) } }, displacementmap: { displacementMap: { value: null },
      displacementMapTransform: { value: new ze }, displacementScale: { value: 1 },
      displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null },
      emissiveMapTransform: { value: new ze } }, metalnessmap: { metalnessMap: { value: null },
      metalnessMapTransform: { value: new ze } }, roughnessmap: { roughnessMap: { value: null },
      roughnessMapTransform: { value: new ze } }, gradientmap: { gradientMap: { value: null } },
    fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 },
      fogColor: { value: new He(16777215) } }, lights: { ambientLightColor: { value: [] },
      lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {},
          color: {} } }, directionalLightShadows: { value: [], properties: { shadowBias: {},
          shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } },
      directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] },
      spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {},
          coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [],
        properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } },
      spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] },
      pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } },
      pointLightShadows: { value: [], properties: { shadowBias: {}, shadowNormalBias: {},
          shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } },
      pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] },
    hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
      rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } },
      ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new He(
        16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 },
      map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new ze },
      alphaTest: { value: 0 }, uvTransform: { value: new ze } }, sprite: { diffuse: { value: new He(
          16777215) }, opacity: { value: 1 }, center: { value: new Pe(.5, .5) },
      rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new ze },
      alphaMap: { value: null }, alphaMapTransform: { value: new ze }, alphaTest: { value: 0 } } },
  Ht = { basic: { uniforms: gt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne
        .fog]), vertexShader: Ue.meshbasic_vert, fragmentShader: Ue.meshbasic_frag },
    lambert: { uniforms: gt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne
        .emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, ne.lights,
        { emissive: { value: new He(0) } }
      ]), vertexShader: Ue.meshlambert_vert, fragmentShader: Ue.meshlambert_frag },
    phong: { uniforms: gt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne
        .emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, ne.lights,
        { emissive: { value: new He(0) }, specular: { value: new He(1118481) },
          shininess: { value: 30 } }
      ]), vertexShader: Ue.meshphong_vert, fragmentShader: Ue.meshphong_frag },
    standard: { uniforms: gt([ne.common, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne
        .bumpmap, ne.normalmap, ne.displacementmap, ne.roughnessmap, ne.metalnessmap, ne.fog, ne
        .lights, { emissive: { value: new He(0) }, roughness: { value: 1 },
          metalness: { value: 0 }, envMapIntensity: { value: 1 } }
      ]), vertexShader: Ue.meshphysical_vert, fragmentShader: Ue.meshphysical_frag },
    toon: { uniforms: gt([ne.common, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne
        .normalmap, ne.displacementmap, ne.gradientmap, ne.fog, ne.lights,
        { emissive: { value: new He(0) } }
      ]), vertexShader: Ue.meshtoon_vert, fragmentShader: Ue.meshtoon_frag },
    matcap: { uniforms: gt([ne.common, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog,
        { matcap: { value: null } }]), vertexShader: Ue.meshmatcap_vert, fragmentShader: Ue
        .meshmatcap_frag }, points: { uniforms: gt([ne.points, ne.fog]), vertexShader: Ue
        .points_vert, fragmentShader: Ue.points_frag }, dashed: { uniforms: gt([ne.common, ne.fog,
      { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ue
        .linedashed_vert, fragmentShader: Ue.linedashed_frag }, depth: { uniforms: gt([ne.common, ne
        .displacementmap
      ]), vertexShader: Ue.depth_vert, fragmentShader: Ue.depth_frag }, normal: { uniforms: gt([ne
        .common, ne.bumpmap, ne.normalmap, ne.displacementmap, { opacity: { value: 1 } }
      ]), vertexShader: Ue.meshnormal_vert, fragmentShader: Ue.meshnormal_frag },
    sprite: { uniforms: gt([ne.sprite, ne.fog]), vertexShader: Ue.sprite_vert, fragmentShader: Ue
        .sprite_frag }, background: { uniforms: { uvTransform: { value: new ze },
      t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ue.background_vert,
      fragmentShader: Ue.background_frag }, backgroundCube: { uniforms: { envMap: { value: null },
        flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 } }, vertexShader: Ue.backgroundCube_vert,
      fragmentShader: Ue.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null },
        tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ue.cube_vert,
      fragmentShader: Ue.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } },
      vertexShader: Ue.equirect_vert, fragmentShader: Ue.equirect_frag },
    distanceRGBA: { uniforms: gt([ne.common, ne.displacementmap,
      { referencePosition: { value: new D }, nearDistance: { value: 1 },
          farDistance: { value: 1e3 } }]), vertexShader: Ue.distanceRGBA_vert, fragmentShader: Ue
        .distanceRGBA_frag }, shadow: { uniforms: gt([ne.lights, ne.fog, { color: { value: new He(
          0) }, opacity: { value: 1 } }]), vertexShader: Ue.shadow_vert, fragmentShader: Ue
        .shadow_frag } };
Ht.physical = { uniforms: gt([Ht.standard.uniforms, { clearcoat: { value: 0 },
    clearcoatMap: { value: null }, clearcoatMapTransform: { value: new ze },
    clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new ze },
    clearcoatNormalScale: { value: new Pe(1, 1) }, clearcoatRoughness: { value: 0 },
    clearcoatRoughnessMap: { value: null },
  clearcoatRoughnessMapTransform: { value: new ze }, iridescence: { value: 0 },
    iridescenceMap: { value: null }, iridescenceMapTransform: { value: new ze },
    iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 },
    iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null },
    iridescenceThicknessMapTransform: { value: new ze }, sheen: { value: 0 },
    sheenColor: { value: new He(0) }, sheenColorMap: { value: null },
    sheenColorMapTransform: { value: new ze }, sheenRoughness: { value: 1 },
    sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new ze },
    transmission: { value: 0 }, transmissionMap: { value: null },
    transmissionMapTransform: { value: new ze }, transmissionSamplerSize: { value: new Pe },
    transmissionSamplerMap: { value: null }, thickness: { value: 0 },
    thicknessMap: { value: null }, thicknessMapTransform: { value: new ze },
    attenuationDistance: { value: 0 }, attenuationColor: { value: new He(0) },
    specularColor: { value: new He(1, 1, 1) }, specularColorMap: { value: null },
    specularColorMapTransform: { value: new ze }, specularIntensity: { value: 1 },
    specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new ze },
    anisotropyVector: { value: new Pe }, anisotropyMap: { value: null },
    anisotropyMapTransform: { value: new ze } }]), vertexShader: Ue.meshphysical_vert,
  fragmentShader: Ue.meshphysical_frag };
const Vi = { r: 0, b: 0, g: 0 };

function Nh(i, e, t, n, r, s, o) { const a = new He(0); let l = s === !0 ? 0 : 1,
    c, h, f = null,
    p = 0,
    m = null;

  function v(d, u) { let y = !1,
      E = u.isScene === !0 ? u.background : null;
    E && E.isTexture && (E = (u.backgroundBlurriness > 0 ? t : e).get(E)), E === null ? _(a, l) :
      E && E.isColor && (_(E, 1), y = !0); const A = i.xr.getEnvironmentBlendMode();
    A === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, o) : A === "alpha-blend" && n.buffers
      .color.setClear(0, 0, 0, 0, o), (i.autoClear || y) && i.clear(i.autoClearColor, i
        .autoClearDepth, i.autoClearStencil), E && (E.isCubeTexture || E.mapping === er) ? (h ===
        void 0 && (h = new kt(new xi(1, 1, 1), new vt({ name: "BackgroundCubeMaterial",
            uniforms: Qn(Ht.backgroundCube.uniforms), vertexShader: Ht.backgroundCube
              .vertexShader, fragmentShader: Ht.backgroundCube.fragmentShader, side: St,
            depthTest: !1, depthWrite: !1, fog: !1 })), h.geometry.deleteAttribute("normal"), h
          .geometry.deleteAttribute("uv"), h.onBeforeRender = function (L, R, w) { this.matrixWorld
              .copyPosition(w.matrixWorld) }, Object.defineProperty(h.material,
          "envMap", { get: function () { return this.uniforms.envMap.value } }), r.update(h)), h
        .material.uniforms.envMap.value = E, h.material.uniforms.flipEnvMap.value = E
        .isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1, h.material.uniforms
        .backgroundBlurriness.value = u.backgroundBlurriness, h.material.uniforms
        .backgroundIntensity.value = u.backgroundIntensity, h.material.toneMapped = We.getTransfer(E
          .colorSpace) !== je, (f !== E || p !== E.version || m !== i.toneMapping) && (h.material
          .needsUpdate = !0, f = E, p = E.version, m = i.toneMapping), h.layers.enableAll(), d
        .unshift(h, h.geometry, h.material, 0, 0, null)) : E && E.isTexture && (c === void 0 && (c =
          new kt(new rr(2, 2), new vt({ name: "BackgroundMaterial", uniforms: Qn(Ht.background
              .uniforms), vertexShader: Ht.background.vertexShader, fragmentShader: Ht
              .background.fragmentShader, side: gn, depthTest: !1, depthWrite: !1, fog: !1 })), c
          .geometry.deleteAttribute("normal"), Object.defineProperty(c.material,
          "map", { get: function () { return this.uniforms.t2D.value } }), r.update(c)), c.material
        .uniforms.t2D.value = E, c.material.uniforms.backgroundIntensity.value = u
        .backgroundIntensity, c.material.toneMapped = We.getTransfer(E.colorSpace) !== je, E
        .matrixAutoUpdate === !0 && E.updateMatrix(), c.material.uniforms.uvTransform.value.copy(E
          .matrix), (f !== E || p !== E.version || m !== i.toneMapping) && (c.material
          .needsUpdate = !0, f = E, p = E.version, m = i.toneMapping), c.layers.enableAll(), d
        .unshift(c, c.geometry, c.material, 0, 0, null)) }

  function _(d, u) { d.getRGB(Vi, co(i)), n.buffers.color.setClear(Vi.r, Vi.g, Vi.b, u,
    o) } return { getClearColor: function () { return a }, setClearColor: function (d, u = 1) { a
        .set(d), l = u, _(a, l) }, getClearAlpha: function () { return l },
    setClearAlpha: function (d) { l = d, _(a, l) }, render: v } }

function Fh(i, e, t, n) { const r = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    s = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = n.isWebGL2 || s !== null,
    a = {},
    l = d(null); let c = l,
    h = !1;

  function f(C, B, G, X, V) { let W = !1; if (o) { const q = _(X, G, B);
      c !== q && (c = q, m(c.object)), W = u(C, X, G, V), W && y(C, X, G, V) } else { const q = B
        .wireframe === !0;
      (c.geometry !== X.id || c.program !== G.id || c.wireframe !== q) && (c.geometry = X.id, c
        .program = G.id, c.wireframe = q, W = !0) } V !== null && t.update(V, i
      .ELEMENT_ARRAY_BUFFER), (W || h) && (h = !1, Z(C, B, G, X), V !== null && i.bindBuffer(i
      .ELEMENT_ARRAY_BUFFER, t.get(V).buffer)) }

  function p() { return n.isWebGL2 ? i.createVertexArray() : s.createVertexArrayOES() }

  function m(C) { return n.isWebGL2 ? i.bindVertexArray(C) : s.bindVertexArrayOES(C) }

  function v(C) { return n.isWebGL2 ? i.deleteVertexArray(C) : s.deleteVertexArrayOES(C) }

  function _(C, B, G) { const X = G.wireframe === !0; let V = a[C.id];
    V === void 0 && (V = {}, a[C.id] = V); let W = V[B.id];
    W === void 0 && (W = {}, V[B.id] = W); let q = W[X]; return q === void 0 && (q = d(p()), W[X] =
      q), q }

  function d(C) { const B = [],
      G = [],
      X = []; for (let V = 0; V < r; V++) B[V] = 0, G[V] = 0, X[V] = 0; return { geometry: null,
      program: null, wireframe: !1, newAttributes: B, enabledAttributes: G, attributeDivisors: X,
      object: C, attributes: {}, index: null } }

  function u(C, B, G, X) { const V = c.attributes,
      W = B.attributes; let q = 0; const Q = G.getAttributes(); for (const ee in Q)
      if (Q[ee].location >= 0) { const Y = V[ee]; let oe = W[ee]; if (oe === void 0 && (ee ===
            "instanceMatrix" && C.instanceMatrix && (oe = C.instanceMatrix), ee ===
            "instanceColor" && C.instanceColor && (oe = C.instanceColor)), Y === void 0 || Y
          .attribute !== oe || oe && Y.data !== oe.data) return !0;
        q++ } return c.attributesNum !== q || c.index !== X }

  function y(C, B, G, X) { const V = {},
      W = B.attributes; let q = 0; const Q = G.getAttributes(); for (const ee in Q)
      if (Q[ee].location >= 0) { let Y = W[ee];
        Y === void 0 && (ee === "instanceMatrix" && C.instanceMatrix && (Y = C.instanceMatrix),
          ee === "instanceColor" && C.instanceColor && (Y = C.instanceColor)); const oe = {};
        oe.attribute = Y, Y && Y.data && (oe.data = Y.data), V[ee] = oe, q++ } c.attributes = V, c
      .attributesNum = q, c.index = X }

  function E() { const C = c.newAttributes; for (let B = 0, G = C.length; B < G; B++) C[B] = 0 }

  function A(C) { L(C, 0) }

  function L(C, B) { const G = c.newAttributes,
      X = c.enabledAttributes,
      V = c.attributeDivisors;
    G[C] = 1, X[C] === 0 && (i.enableVertexAttribArray(C), X[C] = 1), V[C] !== B && ((n.isWebGL2 ?
      i : e.get("ANGLE_instanced_arrays"))[n.isWebGL2 ? "vertexAttribDivisor" :
      "vertexAttribDivisorANGLE"](C, B), V[C] = B) }

  function R() { const C = c.newAttributes,
      B = c.enabledAttributes; for (let G = 0, X = B.length; G < X; G++) B[G] !== C[G] && (i
      .disableVertexAttribArray(G), B[G] = 0) }

  function w(C, B, G, X, V, W, q) { q === !0 ? i.vertexAttribIPointer(C, B, G, V, W) : i
      .vertexAttribPointer(C, B, G, X, V, W) }

  function Z(C, B, G, X) { if (n.isWebGL2 === !1 && (C.isInstancedMesh || X
        .isInstancedBufferGeometry) && e.get("ANGLE_instanced_arrays") === null) return;
    E(); const V = X.attributes,
      W = G.getAttributes(),
      q = B.defaultAttributeValues; for (const Q in W) { const ee = W[Q]; if (ee.location >=
        0) { let z = V[Q]; if (z === void 0 && (Q === "instanceMatrix" && C.instanceMatrix && (z = C
            .instanceMatrix), Q === "instanceColor" && C.instanceColor && (z = C.instanceColor)),
          z !== void 0) { const Y = z.normalized,
            oe = z.itemSize,
            me = t.get(z); if (me === void 0) continue; const pe = me.buffer,
            Re = me.type,
            Le = me.bytesPerElement,
            Ee = n.isWebGL2 === !0 && (Re === i.INT || Re === i.UNSIGNED_INT || z.gpuType ===
            Xa); if (z.isInterleavedBufferAttribute) { const Ve = z.data,
              U = Ve.stride,
              dt = z.offset; if (Ve.isInstancedInterleavedBuffer) { for (let ve = 0; ve < ee
                .locationSize; ve++) L(ee.location + ve, Ve.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount =
                Ve.meshPerAttribute * Ve.count) } else
              for (let ve = 0; ve < ee.locationSize; ve++) A(ee.location + ve);
            i.bindBuffer(i.ARRAY_BUFFER, pe); for (let ve = 0; ve < ee.locationSize; ve++) w(ee
              .location + ve, oe / ee.locationSize, Re, Y, U * Le, (dt + oe / ee.locationSize *
                ve) * Le, Ee) } else { if (z.isInstancedBufferAttribute) { for (let Ve = 0; Ve < ee
                .locationSize; Ve++) L(ee.location + Ve, z.meshPerAttribute);
              C.isInstancedMesh !== !0 && X._maxInstanceCount === void 0 && (X._maxInstanceCount = z
                .meshPerAttribute * z.count) } else
              for (let Ve = 0; Ve < ee.locationSize; Ve++) A(ee.location + Ve);
            i.bindBuffer(i.ARRAY_BUFFER, pe); for (let Ve = 0; Ve < ee.locationSize; Ve++) w(ee
              .location + Ve, oe / ee.locationSize, Re, Y, oe * Le, oe / ee.locationSize * Ve *
              Le, Ee) } } else if (q !== void 0) { const Y = q[Q]; if (Y !== void 0) switch (Y
            .length) {
          case 2:
            i.vertexAttrib2fv(ee.location, Y); break;
          case 3:
            i.vertexAttrib3fv(ee.location, Y); break;
          case 4:
            i.vertexAttrib4fv(ee.location, Y); break;
          default:
            i.vertexAttrib1fv(ee.location, Y) } } } } R() }

  function S() { k(); for (const C in a) { const B = a[C]; for (const G in B) { const X = B[
        G]; for (const V in X) v(X[V].object), delete X[V];
        delete B[G] } delete a[C] } }

  function T(C) { if (a[C.id] === void 0) return; const B = a[C.id]; for (const G in B) { const X =
        B[G]; for (const V in X) v(X[V].object), delete X[V];
      delete B[G] } delete a[C.id] }

  function H(C) { for (const B in a) { const G = a[B]; if (G[C.id] === void 0) continue; const X =
        G[C.id]; for (const V in X) v(X[V].object), delete X[V];
      delete G[C.id] } }

  function k() { ie(), h = !0, c !== l && (c = l, m(c.object)) }

  function ie() { l.geometry = null, l.program = null, l.wireframe = !1 } return { setup: f,
    reset: k, resetDefaultState: ie, dispose: S, releaseStatesOfGeometry: T,
    releaseStatesOfProgram: H, initAttributes: E, enableAttribute: A, disableUnusedAttributes: R } }

function Oh(i, e, t, n) { const r = n.isWebGL2; let s;

  function o(h) { s = h }

  function a(h, f) { i.drawArrays(s, h, f), t.update(f, s, 1) }

  function l(h, f, p) { if (p === 0) return; let m, v; if (r) m = i, v = "drawArraysInstanced";
    else if (m = e.get("ANGLE_instanced_arrays"), v = "drawArraysInstancedANGLE", m ===
      null) { console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        ); return } m[v](s, h, f, p), t.update(f, s, p) }

  function c(h, f, p) { if (p === 0) return; const m = e.get("WEBGL_multi_draw"); if (m === null)
      for (let v = 0; v < p; v++) this.render(h[v], f[v]);
    else { m.multiDrawArraysWEBGL(s, h, 0, f, 0, p); let v = 0; for (let _ = 0; _ < p; _++) v += f[
        _];
      t.update(v, s, 1) } } this.setMode = o, this.render = a, this.renderInstances = l, this
    .renderMultiDraw = c }

function Bh(i, e, t) { let n;

  function r() { if (n !== void 0) return n; if (e.has("EXT_texture_filter_anisotropic") === !
      0) { const w = e.get("EXT_texture_filter_anisotropic");
      n = i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT) } else n = 0; return n }

  function s(w) { if (w === "highp") { if (i.getShaderPrecisionFormat(i.VERTEX_SHADER, i.HIGH_FLOAT)
        .precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision > 0)
        return "highp";
      w = "mediump" } return w === "mediump" && i.getShaderPrecisionFormat(i.VERTEX_SHADER, i
      .MEDIUM_FLOAT).precision > 0 && i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i
      .MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp" } const o = typeof WebGL2RenderingContext <
    "u" && i.constructor.name === "WebGL2RenderingContext"; let a = t.precision !== void 0 ? t
    .precision : "highp"; const l = s(a);
  l !== a && (console.warn("THREE.WebGLRenderer:", a, "not supported, using", l, "instead."), a =
  l); const c = o || e.has("WEBGL_draw_buffers"),
    h = t.logarithmicDepthBuffer === !0,
    f = i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),
    p = i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    m = i.getParameter(i.MAX_TEXTURE_SIZE),
    v = i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),
    _ = i.getParameter(i.MAX_VERTEX_ATTRIBS),
    d = i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),
    u = i.getParameter(i.MAX_VARYING_VECTORS),
    y = i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),
    E = p > 0,
    A = o || e.has("OES_texture_float"),
    L = E && A,
    R = o ? i.getParameter(i.MAX_SAMPLES) : 0; return { isWebGL2: o, drawBuffers: c,
    getMaxAnisotropy: r, getMaxPrecision: s, precision: a, logarithmicDepthBuffer: h,
    maxTextures: f, maxVertexTextures: p, maxTextureSize: m, maxCubemapSize: v, maxAttributes: _,
    maxVertexUniforms: d, maxVaryings: u, maxFragmentUniforms: y, vertexTextures: E,
    floatFragmentTextures: A, floatVertexTextures: L, maxSamples: R } }

function zh(i) { const e = this; let t = null,
    n = 0,
    r = !1,
    s = !1; const o = new Tn,
    a = new ze,
    l = { value: null, needsUpdate: !1 };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function (f,
    p) { const m = f.length !== 0 || p || n !== 0 || r; return r = p, n = f.length, m }, this
    .beginShadows = function () { s = !0, h(null) }, this.endShadows = function () { s = !1 }, this
    .setGlobalState = function (f, p) { t = h(f, p, 0) }, this.setState = function (f, p, m) { const
        v = f.clippingPlanes,
        _ = f.clipIntersection,
        d = f.clipShadows,
        u = i.get(f); if (!r || v === null || v.length === 0 || s && !d) s ? h(null) : c();
      else { const y = s ? 0 : n,
          E = y * 4; let A = u.clippingState || null;
        l.value = A, A = h(v, p, E, m); for (let L = 0; L !== E; ++L) A[L] = t[L];
        u.clippingState = A, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += y } };

  function c() { l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e
      .numIntersection = 0 }

  function h(f, p, m, v) { const _ = f !== null ? f.length : 0; let d = null; if (_ !== 0) { if (d =
        l.value, v !== !0 || d === null) { const u = m + _ * 4,
          y = p.matrixWorldInverse;
        a.getNormalMatrix(y), (d === null || d.length < u) && (d = new Float32Array(u)); for (let
            E = 0, A = m; E !== _; ++E, A += 4) o.copy(f[E]).applyMatrix4(y, a), o.normal.toArray(d,
          A), d[A + 3] = o.constant } l.value = d, l.needsUpdate = !0 } return e.numPlanes = _, e
      .numIntersection = 0, d } }

function Gh(i) { let e = new WeakMap;

  function t(o, a) { return a === qr ? o.mapping = Zn : a === Yr && (o.mapping = $n), o }

  function n(o) { if (o && o.isTexture) { const a = o.mapping; if (a === qr || a === Yr)
        if (e.has(o)) { const l = e.get(o).texture; return t(l, o.mapping) } else { const l = o
            .image; if (l && l.height > 0) { const c = new Jl(l.height / 2); return c
              .fromEquirectangularTexture(i, o), e.set(o, c), o.addEventListener("dispose", r), t(c
                .texture, o.mapping) } else return null } } return o }

  function r(o) { const a = o.target;
    a.removeEventListener("dispose", r); const l = e.get(a);
    l !== void 0 && (e.delete(a), l.dispose()) }

  function s() { e = new WeakMap } return { get: n, dispose: s } } class mo extends uo { constructor
    (e = -1, t = 1, n = 1, r = -1, s = .1, o = 2e3) { super(), this.isOrthographicCamera = !0, this
        .type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right =
        t, this.top = n, this.bottom = r, this.near = s, this.far = o, this
      .updateProjectionMatrix() } copy(e, t) { return super.copy(e, t), this.left = e.left, this
        .right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e
        .far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view),
        this } setViewOffset(e, t, n, r, s, o) { this.view === null && (this.view = { enabled: !0,
          fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view
        .enabled = !0, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n,
        this.view.offsetY = r, this.view.width = s, this.view.height = o, this
        .updateProjectionMatrix() } clearViewOffset() { this.view !== null && (this.view.enabled = !
        1), this.updateProjectionMatrix() } updateProjectionMatrix() { const e = (this.right - this
          .left) / (2 * this.zoom),
        t = (this.top - this.bottom) / (2 * this.zoom),
        n = (this.right + this.left) / 2,
        r = (this.top + this.bottom) / 2; let s = n - e,
        o = n + e,
        a = r + t,
        l = r - t; if (this.view !== null && this.view.enabled) { const c = (this.right - this
          .left) / this.view.fullWidth / this.zoom,
          h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
        s += c * this.view.offsetX, o = s + c * this.view.width, a -= h * this.view.offsetY, l = a -
          h * this.view.height } this.projectionMatrix.makeOrthographic(s, o, a, l, this.near, this
          .far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix)
        .invert() } toJSON(e) { const t = super.toJSON(e); return t.object.zoom = this.zoom, t
        .object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object
        .bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !==
        null && (t.object.view = Object.assign({}, this.view)), t } }
const qn = 4,
  ha = [.125, .215, .35, .446, .526, .582],
  bn = 20,
  Or = new mo,
  fa = new He;
let Br = null,
  zr = 0,
  Gr = 0;
const yn = (1 + Math.sqrt(5)) / 2,
  Xn = 1 / yn,
  da = [new D(1, 1, 1), new D(-1, 1, 1), new D(1, 1, -1), new D(-1, 1, -1), new D(0, yn, Xn), new D(
    0, yn, -Xn), new D(Xn, 0, yn), new D(-Xn, 0, yn), new D(yn, Xn, 0), new D(-yn, Xn, 0)];
class pa { constructor(e) { this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0,
        this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this
        ._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this
        ._compileMaterial(this._blurMaterial) } fromScene(e, t = 0, n = .1, r = 100) { Br = this
        ._renderer.getRenderTarget(), zr = this._renderer.getActiveCubeFace(), Gr = this._renderer
        .getActiveMipmapLevel(), this._setSize(256); const s = this._allocateTargets(); return s
        .depthBuffer = !0, this._sceneToCubeUV(e, n, r, s), t > 0 && this._blur(s, 0, 0, t), this
        ._applyPMREM(s), this._cleanup(s), s } fromEquirectangular(e, t = null) { return this
        ._fromTexture(e, t) } fromCubemap(e, t = null) { return this._fromTexture(e,
      t) } compileCubemapShader() { this._cubemapMaterial === null && (this._cubemapMaterial = _a(),
        this._compileMaterial(this._cubemapMaterial)) } compileEquirectangularShader() { this
        ._equirectMaterial === null && (this._equirectMaterial = ga(), this._compileMaterial(this
          ._equirectMaterial)) } dispose() { this._dispose(), this._cubemapMaterial !== null && this
        ._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial
        .dispose() } _setSize(e) { this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math
        .pow(2, this._lodMax) } _dispose() { this._blurMaterial !== null && this._blurMaterial
        .dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget
      .dispose(); for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e]
    .dispose() } _cleanup(e) { this._renderer.setRenderTarget(Br, zr, Gr), e.scissorTest = !1, ki(e,
        0, 0, e.width, e.height) } _fromTexture(e, t) { e.mapping === Zn || e.mapping === $n ? this
        ._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this
        ._setSize(e.image.width / 4), Br = this._renderer.getRenderTarget(), zr = this._renderer
        .getActiveCubeFace(), Gr = this._renderer.getActiveMipmapLevel(); const n = t || this
        ._allocateTargets(); return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(
        n), n } _allocateTargets() { const e = 3 * Math.max(this._cubeSize, 112),
        t = 4 * this._cubeSize,
        n = { magFilter: Ct, minFilter: Ct, generateMipmaps: !1, type: tn, format: Ot,
          colorSpace: rn, depthBuffer: !1 },
        r = ma(e, t, n); if (this._pingPongRenderTarget === null || this._pingPongRenderTarget
        .width !== e || this._pingPongRenderTarget.height !== t) { this._pingPongRenderTarget !==
          null && this._dispose(), this._pingPongRenderTarget = ma(e, t, n); const { _lodMax: s } =
        this;
        ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Hh(s)),
        this._blurMaterial = Vh(s, e, t) } return r } _compileMaterial(e) { const t = new kt(this
        ._lodPlanes[0], e);
      this._renderer.compile(t, Or) } _sceneToCubeUV(e, t, n, r) { const a = new Pt(90, 1, t, n),
        l = [1, -1, 1, 1, 1, 1],
        c = [1, 1, 1, -1, -1, -1],
        h = this._renderer,
        f = h.autoClear,
        p = h.toneMapping;
      h.getClearColor(fa), h.toneMapping = pn, h.autoClear = !1; const m =
      new rs({ name: "PMREM.Background", side: St, depthWrite: !1, depthTest: !1 }),
        v = new kt(new xi, m); let _ = !1; const d = e.background;
      d ? d.isColor && (m.color.copy(d), e.background = null, _ = !0) : (m.color.copy(fa), _ = !
      0); for (let u = 0; u < 6; u++) { const y = u % 3;
        y === 0 ? (a.up.set(0, l[u], 0), a.lookAt(c[u], 0, 0)) : y === 1 ? (a.up.set(0, 0, l[u]), a
          .lookAt(0, c[u], 0)) : (a.up.set(0, l[u], 0), a.lookAt(0, 0, c[u])); const E = this
          ._cubeSize;
        ki(r, y * E, u > 2 ? E : 0, E, E), h.setRenderTarget(r), _ && h.render(v, a), h.render(e,
        a) } v.geometry.dispose(), v.material.dispose(), h.toneMapping = p, h.autoClear = f, e
        .background = d } _textureToCubeUV(e, t) { const n = this._renderer,
        r = e.mapping === Zn || e.mapping === $n;
      r ? (this._cubemapMaterial === null && (this._cubemapMaterial = _a()), this._cubemapMaterial
          .uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this
        ._equirectMaterial === null && (this._equirectMaterial = ga()); const s = r ? this
        ._cubemapMaterial : this._equirectMaterial,
        o = new kt(this._lodPlanes[0], s),
        a = s.uniforms;
      a.envMap.value = e; const l = this._cubeSize;
      ki(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(o, Or) } _applyPMREM(e) { const t =
        this._renderer,
        n = t.autoClear;
      t.autoClear = !1; for (let r = 1; r < this._lodPlanes.length; r++) { const s = Math.sqrt(this
            ._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]),
          o = da[(r - 1) % da.length];
        this._blur(e, r - 1, r, s, o) } t.autoClear = n } _blur(e, t, n, r, s) { const o = this
        ._pingPongRenderTarget;
      this._halfBlur(e, o, t, n, r, "latitudinal", s), this._halfBlur(o, e, n, n, r, "longitudinal",
        s) } _halfBlur(e, t, n, r, s, o, a) { const l = this._renderer,
        c = this._blurMaterial;
      o !== "latitudinal" && o !== "longitudinal" && console.error(
        "blur direction must be either latitudinal or longitudinal!"); const h = 3,
        f = new kt(this._lodPlanes[r], c),
        p = c.uniforms,
        m = this._sizeLods[n] - 1,
        v = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * bn - 1),
        _ = s / v,
        d = isFinite(s) ? 1 + Math.floor(h * _) : bn;
      d > bn && console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${bn}`
        ); const u = []; let y = 0; for (let w = 0; w < bn; ++w) { const Z = w / _,
          S = Math.exp(-Z * Z / 2);
        u.push(S), w === 0 ? y += S : w < d && (y += 2 * S) } for (let w = 0; w < u.length; w++) u[
        w] = u[w] / y;
      p.envMap.value = e.texture, p.samples.value = d, p.weights.value = u, p.latitudinal.value =
        o === "latitudinal", a && (p.poleAxis.value = a); const { _lodMax: E } = this;
      p.dTheta.value = v, p.mipInt.value = E - n; const A = this._sizeLods[r],
        L = 3 * A * (r > E - qn ? r - E + qn : 0),
        R = 4 * (this._cubeSize - A);
      ki(t, L, R, 3 * A, 2 * A), l.setRenderTarget(t), l.render(f, Or) } }

function Hh(i) { const e = [],
    t = [],
    n = []; let r = i; const s = i - qn + 1 + ha.length; for (let o = 0; o < s; o++) { const a =
      Math.pow(2, r);
    t.push(a); let l = 1 / a;
    o > i - qn ? l = ha[o - i + qn - 1] : o === 0 && (l = 0), n.push(l); const c = 1 / (a - 2),
      h = -c,
      f = 1 + c,
      p = [h, h, f, h, f, f, h, h, f, f, h, f],
      m = 6,
      v = 6,
      _ = 3,
      d = 2,
      u = 1,
      y = new Float32Array(_ * v * m),
      E = new Float32Array(d * v * m),
      A = new Float32Array(u * v * m); for (let R = 0; R < m; R++) { const w = R % 3 * 2 / 3 - 1,
        Z = R > 2 ? 0 : -1,
        S = [w, Z, 0, w + 2 / 3, Z, 0, w + 2 / 3, Z + 1, 0, w, Z, 0, w + 2 / 3, Z + 1, 0, w, Z + 1,
          0
        ];
      y.set(S, _ * v * R), E.set(p, d * v * R); const T = [R, R, R, R, R, R];
      A.set(T, u * v * R) } const L = new sn;
    L.setAttribute("position", new Wt(y, _)), L.setAttribute("uv", new Wt(E, d)), L.setAttribute(
      "faceIndex", new Wt(A, u)), e.push(L), r > qn && r-- } return { lodPlanes: e, sizeLods: t,
    sigmas: n } }

function ma(i, e, t) { const n = new Bt(i, e, t); return n.texture.mapping = er, n.texture.name =
    "PMREM.cubeUv", n.scissorTest = !0, n }

function ki(i, e, t, n, r) { i.viewport.set(e, t, n, r), i.scissor.set(e, t, n, r) }

function Vh(i, e, t) { const n = new Float32Array(bn),
    r = new D(0, 1, 0); return new vt({ name: "SphericalGaussianBlur", defines: { n: bn,
      CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${i}.0` },
    uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n },
      latitudinal: { value: !1 }, dTheta: { value: 0 }, mipInt: { value: 0 },
      poleAxis: { value: r } }, vertexShader: ss(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: en, depthTest: !1, depthWrite: !1 }) }

function ga() { return new vt({ name: "EquirectangularToCubeUV",
  uniforms: { envMap: { value: null } }, vertexShader: ss(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: en, depthTest: !1, depthWrite: !1 }) }

function _a() { return new vt({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null },
      flipEnvMap: { value: -1 } }, vertexShader: ss(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: en, depthTest: !1, depthWrite: !1 }) }

function ss() { return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	` }

function kh(i) { let e = new WeakMap,
    t = null;

  function n(a) { if (a && a.isTexture) { const l = a.mapping,
        c = l === qr || l === Yr,
        h = l === Zn || l === $n; if (c || h)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) { a.needsPMREMUpdate = !1; let f =
            e.get(a); return t === null && (t = new pa(i)), f = c ? t.fromEquirectangular(a, f) : t
            .fromCubemap(a, f), e.set(a, f), f.texture } else { if (e.has(a)) return e.get(a)
            .texture; { const f = a.image; if (c && f && f.height > 0 || h && f && r(f)) { t ===
                null && (t = new pa(i)); const p = c ? t.fromEquirectangular(a) : t.fromCubemap(
              a); return e.set(a, p), a.addEventListener("dispose", s), p.texture } else
          return null } } } return a }

  function r(a) { let l = 0; const c = 6; for (let h = 0; h < c; h++) a[h] !== void 0 &&
    l++; return l === c }

  function s(a) { const l = a.target;
    l.removeEventListener("dispose", s); const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose()) }

  function o() { e = new WeakMap, t !== null && (t.dispose(), t = null) } return { get: n,
    dispose: o } }

function Wh(i) { const e = {};

  function t(n) { if (e[n] !== void 0) return e[n]; let r; switch (n) {
    case "WEBGL_depth_texture":
      r = i.getExtension("WEBGL_depth_texture") || i.getExtension("MOZ_WEBGL_depth_texture") || i
        .getExtension("WEBKIT_WEBGL_depth_texture"); break;
    case "EXT_texture_filter_anisotropic":
      r = i.getExtension("EXT_texture_filter_anisotropic") || i.getExtension(
        "MOZ_EXT_texture_filter_anisotropic") || i.getExtension(
        "WEBKIT_EXT_texture_filter_anisotropic"); break;
    case "WEBGL_compressed_texture_s3tc":
      r = i.getExtension("WEBGL_compressed_texture_s3tc") || i.getExtension(
        "MOZ_WEBGL_compressed_texture_s3tc") || i.getExtension(
        "WEBKIT_WEBGL_compressed_texture_s3tc"); break;
    case "WEBGL_compressed_texture_pvrtc":
      r = i.getExtension("WEBGL_compressed_texture_pvrtc") || i.getExtension(
        "WEBKIT_WEBGL_compressed_texture_pvrtc"); break;
    default:
      r = i.getExtension(n) } return e[n] = r, r } return { has: function (n) { return t(n) !==
        null }, init: function (n) { n.isWebGL2 ? (t("EXT_color_buffer_float"), t(
          "WEBGL_clip_cull_distance")) : (t("WEBGL_depth_texture"), t("OES_texture_float"), t(
            "OES_texture_half_float"), t("OES_texture_half_float_linear"), t(
            "OES_standard_derivatives"), t("OES_element_index_uint"), t(
          "OES_vertex_array_object"), t("ANGLE_instanced_arrays")), t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture") },
    get: function (n) { const r = t(n); return r === null && console.warn("THREE.WebGLRenderer: " +
          n + " extension not supported."), r } } }

function Xh(i, e, t, n) { const r = {},
    s = new WeakMap;

  function o(f) { const p = f.target;
    p.index !== null && e.remove(p.index); for (const v in p.attributes) e.remove(p.attributes[
    v]); for (const v in p.morphAttributes) { const _ = p.morphAttributes[v]; for (let d = 0, u = _
          .length; d < u; d++) e.remove(_[d]) } p.removeEventListener("dispose", o), delete r[p
    .id]; const m = s.get(p);
    m && (e.remove(m), s.delete(p)), n.releaseStatesOfGeometry(p), p.isInstancedBufferGeometry === !
      0 && delete p._maxInstanceCount, t.memory.geometries-- }

  function a(f, p) { return r[p.id] === !0 || (p.addEventListener("dispose", o), r[p.id] = !0, t
      .memory.geometries++), p }

  function l(f) { const p = f.attributes; for (const v in p) e.update(p[v], i.ARRAY_BUFFER); const
      m = f.morphAttributes; for (const v in m) { const _ = m[v]; for (let d = 0, u = _.length; d <
        u; d++) e.update(_[d], i.ARRAY_BUFFER) } }

  function c(f) { const p = [],
      m = f.index,
      v = f.attributes.position; let _ = 0; if (m !== null) { const y = m.array;
      _ = m.version; for (let E = 0, A = y.length; E < A; E += 3) { const L = y[E + 0],
          R = y[E + 1],
          w = y[E + 2];
        p.push(L, R, R, w, w, L) } } else if (v !== void 0) { const y = v.array;
      _ = v.version; for (let E = 0, A = y.length / 3 - 1; E < A; E += 3) { const L = E + 0,
          R = E + 1,
          w = E + 2;
        p.push(L, R, R, w, w, L) } } else return; const d = new(eo(p) ? lo : oo)(p, 1);
    d.version = _; const u = s.get(f);
    u && e.remove(u), s.set(f, d) }

  function h(f) { const p = s.get(f); if (p) { const m = f.index;
      m !== null && p.version < m.version && c(f) } else c(f); return s.get(f) } return { get: a,
    update: l, getWireframeAttribute: h } }

function qh(i, e, t, n) { const r = n.isWebGL2; let s;

  function o(m) { s = m } let a, l;

  function c(m) { a = m.type, l = m.bytesPerElement }

  function h(m, v) { i.drawElements(s, v, a, m * l), t.update(v, s, 1) }

  function f(m, v, _) { if (_ === 0) return; let d, u; if (r) d = i, u = "drawElementsInstanced";
    else if (d = e.get("ANGLE_instanced_arrays"), u = "drawElementsInstancedANGLE", d ===
      null) { console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
        ); return } d[u](s, v, a, m * l, _), t.update(v, s, _) }

  function p(m, v, _) { if (_ === 0) return; const d = e.get("WEBGL_multi_draw"); if (d === null)
      for (let u = 0; u < _; u++) this.render(m[u] / l, v[u]);
    else { d.multiDrawElementsWEBGL(s, v, 0, a, m, 0, _); let u = 0; for (let y = 0; y < _; y++)
        u += v[y];
      t.update(u, s, 1) } } this.setMode = o, this.setIndex = c, this.render = h, this
    .renderInstances = f, this.renderMultiDraw = p }

function Yh(i) { const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };

  function n(s, o, a) { switch (t.calls++, o) {
    case i.TRIANGLES:
      t.triangles += a * (s / 3); break;
    case i.LINES:
      t.lines += a * (s / 2); break;
    case i.LINE_STRIP:
      t.lines += a * (s - 1); break;
    case i.LINE_LOOP:
      t.lines += a * s; break;
    case i.POINTS:
      t.points += a * s; break;
    default:
      console.error("THREE.WebGLInfo: Unknown draw mode:", o); break } }

  function r() { t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0 } return { memory: e,
    render: t, programs: null, autoReset: !0, reset: r, update: n } }

function Kh(i, e) { return i[0] - e[0] }

function jh(i, e) { return Math.abs(e[1]) - Math.abs(i[1]) }

function Zh(i, e, t) { const n = {},
    r = new Float32Array(8),
    s = new WeakMap,
    o = new ct,
    a = []; for (let c = 0; c < 8; c++) a[c] = [c, 0];

  function l(c, h, f) { const p = c.morphTargetInfluences; if (e.isWebGL2 === !0) { const v = h
        .morphAttributes.position || h.morphAttributes.normal || h.morphAttributes.color,
        _ = v !== void 0 ? v.length : 0; let d = s.get(h); if (d === void 0 || d.count !== _) { let
          B = function () { ie.dispose(), s.delete(h), h.removeEventListener("dispose", B) }; var
          m = B;
        d !== void 0 && d.texture.dispose(); const E = h.morphAttributes.position !== void 0,
          A = h.morphAttributes.normal !== void 0,
          L = h.morphAttributes.color !== void 0,
          R = h.morphAttributes.position || [],
          w = h.morphAttributes.normal || [],
          Z = h.morphAttributes.color || []; let S = 0;
        E === !0 && (S = 1), A === !0 && (S = 2), L === !0 && (S = 3); let T = h.attributes.position
          .count * S,
          H = 1;
        T > e.maxTextureSize && (H = Math.ceil(T / e.maxTextureSize), T = e.maxTextureSize); const
          k = new Float32Array(T * H * 4 * _),
          ie = new io(k, T, H, _);
        ie.type = dn, ie.needsUpdate = !0; const C = S * 4; for (let G = 0; G < _; G++) { const X =
            R[G],
            V = w[G],
            W = Z[G],
            q = T * H * 4 * G; for (let Q = 0; Q < X.count; Q++) { const ee = Q * C;
            E === !0 && (o.fromBufferAttribute(X, Q), k[q + ee + 0] = o.x, k[q + ee + 1] = o.y, k[
                q + ee + 2] = o.z, k[q + ee + 3] = 0), A === !0 && (o.fromBufferAttribute(V, Q), k[
                q + ee + 4] = o.x, k[q + ee + 5] = o.y, k[q + ee + 6] = o.z, k[q + ee + 7] = 0),
              L === !0 && (o.fromBufferAttribute(W, Q), k[q + ee + 8] = o.x, k[q + ee + 9] = o.y, k[
                q + ee + 10] = o.z, k[q + ee + 11] = W.itemSize === 4 ? o.w : 1) } } d = { count: _,
          texture: ie, size: new Pe(T, H) }, s.set(h, d), h.addEventListener("dispose", B) } let u =
        0; for (let E = 0; E < p.length; E++) u += p[E]; const y = h.morphTargetsRelative ? 1 : 1 -
        u;
      f.getUniforms().setValue(i, "morphTargetBaseInfluence", y), f.getUniforms().setValue(i,
        "morphTargetInfluences", p), f.getUniforms().setValue(i, "morphTargetsTexture", d.texture,
        t), f.getUniforms().setValue(i, "morphTargetsTextureSize", d.size) } else { const v = p ===
        void 0 ? 0 : p.length; let _ = n[h.id]; if (_ === void 0 || _.length !== v) { _ = []; for (
          let A = 0; A < v; A++) _[A] = [A, 0];
        n[h.id] = _ } for (let A = 0; A < v; A++) { const L = _[A];
        L[0] = A, L[1] = p[A] } _.sort(jh); for (let A = 0; A < 8; A++) A < v && _[A][1] ? (a[A][
        0] = _[A][0], a[A][1] = _[A][1]) : (a[A][0] = Number.MAX_SAFE_INTEGER, a[A][1] = 0);
      a.sort(Kh); const d = h.morphAttributes.position,
        u = h.morphAttributes.normal; let y = 0; for (let A = 0; A < 8; A++) { const L = a[A],
          R = L[0],
          w = L[1];
        R !== Number.MAX_SAFE_INTEGER && w ? (d && h.getAttribute("morphTarget" + A) !== d[R] && h
          .setAttribute("morphTarget" + A, d[R]), u && h.getAttribute("morphNormal" + A) !== u[
          R] && h.setAttribute("morphNormal" + A, u[R]), r[A] = w, y += w) : (d && h.hasAttribute(
            "morphTarget" + A) === !0 && h.deleteAttribute("morphTarget" + A), u && h
          .hasAttribute("morphNormal" + A) === !0 && h.deleteAttribute("morphNormal" + A), r[A] =
          0) } const E = h.morphTargetsRelative ? 1 : 1 - y;
      f.getUniforms().setValue(i, "morphTargetBaseInfluence", E), f.getUniforms().setValue(i,
        "morphTargetInfluences", r) } } return { update: l } }

function $h(i, e, t, n) { let r = new WeakMap;

  function s(l) { const c = n.render.frame,
      h = l.geometry,
      f = e.get(l, h); if (r.get(f) !== c && (e.update(f), r.set(f, c)), l.isInstancedMesh && (l
        .hasEventListener("dispose", a) === !1 && l.addEventListener("dispose", a), r.get(l) !==
        c && (t.update(l.instanceMatrix, i.ARRAY_BUFFER), l.instanceColor !== null && t.update(l
          .instanceColor, i.ARRAY_BUFFER), r.set(l, c))), l.isSkinnedMesh) { const p = l.skeleton;
      r.get(p) !== c && (p.update(), r.set(p, c)) } return f }

  function o() { r = new WeakMap }

  function a(l) { const c = l.target;
    c.removeEventListener("dispose", a), t.remove(c.instanceMatrix), c.instanceColor !== null && t
      .remove(c.instanceColor) } return { update: s,
  dispose: o } } class go extends Et { constructor(e, t, n, r, s, o, a, l, c, h) { if (h = h !==
      void 0 ? h : Rn, h !== Rn && h !== Jn) throw new Error(
      "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === Rn && (n = fn), n === void 0 && h === Jn && (n = wn), super(null, r, s,
        o, a, l, h, n, c), this.isDepthTexture = !0, this.image = { width: e, height: t }, this
      .magFilter = a !== void 0 ? a : _t, this.minFilter = l !== void 0 ? l : _t, this.flipY = !1,
      this.generateMipmaps = !1, this.compareFunction = null } copy(e) { return super.copy(e),
      this.compareFunction = e.compareFunction, this } toJSON(e) { const t = super.toJSON(
    e); return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t } }
const _o = new Et,
  vo = new go(1, 1);
vo.compareFunction = Qa;
const xo = new io,
  Mo = new Fl,
  So = new ho,
  va = [],
  xa = [],
  Ma = new Float32Array(16),
  Sa = new Float32Array(9),
  Ea = new Float32Array(4);

function ni(i, e, t) { const n = i[0]; if (n <= 0 || n > 0) return i; const r = e * t; let s = va[
  r]; if (s === void 0 && (s = new Float32Array(r), va[r] = s), e !== 0) { n.toArray(s, 0); for (let
        o = 1, a = 0; o !== e; ++o) a += t, i[o].toArray(s, a) } return s }

function nt(i, e) { if (i.length !== e.length) return !1; for (let t = 0, n = i.length; t < n; t++)
    if (i[t] !== e[t]) return !1; return !0 }

function it(i, e) { for (let t = 0, n = e.length; t < n; t++) i[t] = e[t] }

function sr(i, e) { let t = xa[e];
  t === void 0 && (t = new Int32Array(e), xa[e] = t); for (let n = 0; n !== e; ++n) t[n] = i
    .allocateTextureUnit(); return t }

function Jh(i, e) { const t = this.cache;
  t[0] !== e && (i.uniform1f(this.addr, e), t[0] = e) }

function Qh(i, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (i
    .uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else { if (nt(t, e)) return;
    i.uniform2fv(this.addr, e), it(t, e) } }

function ef(i, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[
    2] !== e.z) && (i.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0)(t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (i.uniform3f(this.addr,
    e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else { if (nt(t, e)) return;
    i.uniform3fv(this.addr, e), it(t, e) } }

function tf(i, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[
    2] !== e.z || t[3] !== e.w) && (i.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] =
    e.y, t[2] = e.z, t[3] = e.w);
  else { if (nt(t, e)) return;
    i.uniform4fv(this.addr, e), it(t, e) } }

function nf(i, e) { const t = this.cache,
    n = e.elements; if (n === void 0) { if (nt(t, e)) return;
    i.uniformMatrix2fv(this.addr, !1, e), it(t, e) } else { if (nt(t, n)) return;
    Ea.set(n), i.uniformMatrix2fv(this.addr, !1, Ea), it(t, n) } }

function rf(i, e) { const t = this.cache,
    n = e.elements; if (n === void 0) { if (nt(t, e)) return;
    i.uniformMatrix3fv(this.addr, !1, e), it(t, e) } else { if (nt(t, n)) return;
    Sa.set(n), i.uniformMatrix3fv(this.addr, !1, Sa), it(t, n) } }

function sf(i, e) { const t = this.cache,
    n = e.elements; if (n === void 0) { if (nt(t, e)) return;
    i.uniformMatrix4fv(this.addr, !1, e), it(t, e) } else { if (nt(t, n)) return;
    Ma.set(n), i.uniformMatrix4fv(this.addr, !1, Ma), it(t, n) } }

function af(i, e) { const t = this.cache;
  t[0] !== e && (i.uniform1i(this.addr, e), t[0] = e) }

function of(i, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (i
    .uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else { if (nt(t, e)) return;
    i.uniform2iv(this.addr, e), it(t, e) } }

function lf(i, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[
    2] !== e.z) && (i.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else { if (nt(t, e)) return;
    i.uniform3iv(this.addr, e), it(t, e) } }

function cf(i, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[
    2] !== e.z || t[3] !== e.w) && (i.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] =
    e.y, t[2] = e.z, t[3] = e.w);
  else { if (nt(t, e)) return;
    i.uniform4iv(this.addr, e), it(t, e) } }

function uf(i, e) { const t = this.cache;
  t[0] !== e && (i.uniform1ui(this.addr, e), t[0] = e) }

function hf(i, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y) && (i
    .uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else { if (nt(t, e)) return;
    i.uniform2uiv(this.addr, e), it(t, e) } }

function ff(i, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[
    2] !== e.z) && (i.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else { if (nt(t, e)) return;
    i.uniform3uiv(this.addr, e), it(t, e) } }

function df(i, e) { const t = this.cache; if (e.x !== void 0)(t[0] !== e.x || t[1] !== e.y || t[
    2] !== e.z || t[3] !== e.w) && (i.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[
    1] = e.y, t[2] = e.z, t[3] = e.w);
  else { if (nt(t, e)) return;
    i.uniform4uiv(this.addr, e), it(t, e) } }

function pf(i, e, t) { const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r); const s = this.type === i.SAMPLER_2D_SHADOW ?
    vo : _o;
  t.setTexture2D(e || s, r) }

function mf(i, e, t) { const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture3D(e || Mo, r) }

function gf(i, e, t) { const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTextureCube(e || So, r) }

function _f(i, e, t) { const n = this.cache,
    r = t.allocateTextureUnit();
  n[0] !== r && (i.uniform1i(this.addr, r), n[0] = r), t.setTexture2DArray(e || xo, r) }

function vf(i) { switch (i) {
  case 5126:
    return Jh;
  case 35664:
    return Qh;
  case 35665:
    return ef;
  case 35666:
    return tf;
  case 35674:
    return nf;
  case 35675:
    return rf;
  case 35676:
    return sf;
  case 5124:
  case 35670:
    return af;
  case 35667:
  case 35671:
    return of;
  case 35668:
  case 35672:
    return lf;
  case 35669:
  case 35673:
    return cf;
  case 5125:
    return uf;
  case 36294:
    return hf;
  case 36295:
    return ff;
  case 36296:
    return df;
  case 35678:
  case 36198:
  case 36298:
  case 36306:
  case 35682:
    return pf;
  case 35679:
  case 36299:
  case 36307:
    return mf;
  case 35680:
  case 36300:
  case 36308:
  case 36293:
    return gf;
  case 36289:
  case 36303:
  case 36311:
  case 36292:
    return _f } }

function xf(i, e) { i.uniform1fv(this.addr, e) }

function Mf(i, e) { const t = ni(e, this.size, 2);
  i.uniform2fv(this.addr, t) }

function Sf(i, e) { const t = ni(e, this.size, 3);
  i.uniform3fv(this.addr, t) }

function Ef(i, e) { const t = ni(e, this.size, 4);
  i.uniform4fv(this.addr, t) }

function Tf(i, e) { const t = ni(e, this.size, 4);
  i.uniformMatrix2fv(this.addr, !1, t) }

function yf(i, e) { const t = ni(e, this.size, 9);
  i.uniformMatrix3fv(this.addr, !1, t) }

function Af(i, e) { const t = ni(e, this.size, 16);
  i.uniformMatrix4fv(this.addr, !1, t) }

function bf(i, e) { i.uniform1iv(this.addr, e) }

function wf(i, e) { i.uniform2iv(this.addr, e) }

function Rf(i, e) { i.uniform3iv(this.addr, e) }

function Cf(i, e) { i.uniform4iv(this.addr, e) }

function Pf(i, e) { i.uniform1uiv(this.addr, e) }

function Lf(i, e) { i.uniform2uiv(this.addr, e) }

function Df(i, e) { i.uniform3uiv(this.addr, e) }

function Uf(i, e) { i.uniform4uiv(this.addr, e) }

function If(i, e, t) { const n = this.cache,
    r = e.length,
    s = sr(t, r);
  nt(n, s) || (i.uniform1iv(this.addr, s), it(n, s)); for (let o = 0; o !== r; ++o) t.setTexture2D(
    e[o] || _o, s[o]) }

function Nf(i, e, t) { const n = this.cache,
    r = e.length,
    s = sr(t, r);
  nt(n, s) || (i.uniform1iv(this.addr, s), it(n, s)); for (let o = 0; o !== r; ++o) t.setTexture3D(
    e[o] || Mo, s[o]) }

function Ff(i, e, t) { const n = this.cache,
    r = e.length,
    s = sr(t, r);
  nt(n, s) || (i.uniform1iv(this.addr, s), it(n, s)); for (let o = 0; o !== r; ++o) t
    .setTextureCube(e[o] || So, s[o]) }

function Of(i, e, t) { const n = this.cache,
    r = e.length,
    s = sr(t, r);
  nt(n, s) || (i.uniform1iv(this.addr, s), it(n, s)); for (let o = 0; o !== r; ++o) t
    .setTexture2DArray(e[o] || xo, s[o]) }

function Bf(i) { switch (i) {
  case 5126:
    return xf;
  case 35664:
    return Mf;
  case 35665:
    return Sf;
  case 35666:
    return Ef;
  case 35674:
    return Tf;
  case 35675:
    return yf;
  case 35676:
    return Af;
  case 5124:
  case 35670:
    return bf;
  case 35667:
  case 35671:
    return wf;
  case 35668:
  case 35672:
    return Rf;
  case 35669:
  case 35673:
    return Cf;
  case 5125:
    return Pf;
  case 36294:
    return Lf;
  case 36295:
    return Df;
  case 36296:
    return Uf;
  case 35678:
  case 36198:
  case 36298:
  case 36306:
  case 35682:
    return If;
  case 35679:
  case 36299:
  case 36307:
    return Nf;
  case 35680:
  case 36300:
  case 36308:
  case 36293:
    return Ff;
  case 36289:
  case 36303:
  case 36311:
  case 36292:
    return Of } } class zf { constructor(e, t, n) { this.id = e, this.addr = n, this.cache = [],
      this.type = t.type, this.setValue = vf(t.type) } } class Gf { constructor(e, t, n) { this.id =
      e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue =
      Bf(t.type) } } class Hf { constructor(e) { this.id = e, this.seq = [], this
      .map = {} } setValue(e, t, n) { const r = this.seq; for (let s = 0, o = r.length; s !== o; ++
        s) { const a = r[s];
        a.setValue(e, t[a.id], n) } } }
const Hr = /(\w+)(\])?(\[|\.)?/g;

function Ta(i, e) { i.seq.push(e), i.map[e.id] = e }

function Vf(i, e, t) { const n = i.name,
    r = n.length; for (Hr.lastIndex = 0;;) { const s = Hr.exec(n),
      o = Hr.lastIndex; let a = s[1]; const l = s[2] === "]",
      c = s[3]; if (l && (a = a | 0), c === void 0 || c === "[" && o + 2 === r) { Ta(t, c ===
        void 0 ? new zf(a, i, e) : new Gf(a, i, e)); break } else { let f = t.map[a];
      f === void 0 && (f = new Hf(a), Ta(t, f)), t = f } } } class Yi { constructor(e, t) { this
      .seq = [], this.map = {}; const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS); for (let
        r = 0; r < n; ++r) { const s = e.getActiveUniform(t, r),
        o = e.getUniformLocation(t, s.name);
      Vf(s, o, this) } } setValue(e, t, n, r) { const s = this.map[t];
    s !== void 0 && s.setValue(e, n, r) } setOptional(e, t, n) { const r = t[n];
    r !== void 0 && this.setValue(e, n, r) } static upload(e, t, n, r) { for (let s = 0, o = t
        .length; s !== o; ++s) { const a = t[s],
        l = n[a.id];
      l.needsUpdate !== !1 && a.setValue(e, l.value, r) } } static seqWithValue(e, t) { const
      n = []; for (let r = 0, s = e.length; r !== s; ++r) { const o = e[r];
      o.id in t && n.push(o) } return n } }

function ya(i, e, t) { const n = i.createShader(e); return i.shaderSource(n, t), i.compileShader(n),
    n }
const kf = 37297;
let Wf = 0;

function Xf(i, e) { const t = i.split(`
`),
    n = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, t.length); for (let o = r; o < s; o++) { const a = o + 1;
    n.push(`${a===e?">":" "} ${a}: ${t[o]}`) } return n.join(`
`) }

function qf(i) { const e = We.getPrimaries(We.workingColorSpace),
    t = We.getPrimaries(i); let n; switch (e === t ? n = "" : e === $i && t === Zi ? n =
    "LinearDisplayP3ToLinearSRGB" : e === Zi && t === $i && (n = "LinearSRGBToLinearDisplayP3"), i
    ) {
  case rn:
  case tr:
    return [n, "LinearTransferOETF"];
  case lt:
  case is:
    return [n, "sRGBTransferOETF"];
  default:
    return console.warn("THREE.WebGLProgram: Unsupported color space:", i), [n,
      "LinearTransferOETF"] } }

function Aa(i, e, t) { const n = i.getShaderParameter(e, i.COMPILE_STATUS),
    r = i.getShaderInfoLog(e).trim(); if (n && r === "") return ""; const s = /ERROR: 0:(\d+)/.exec(
    r); if (s) { const o = parseInt(s[1]); return t.toUpperCase() + `

` + r + `

` + Xf(i.getShaderSource(e), o) } else return r }

function Yf(i, e) { const t = qf(
  e); return `vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }` }

function Kf(i, e) { let t; switch (e) {
  case za:
    t = "Linear"; break;
  case Ga:
    t = "Reinhard"; break;
  case Ha:
    t = "OptimizedCineon"; break;
  case Va:
    t = "ACESFilmic"; break;
  case ka:
    t = "AgX"; break;
  case cl:
    t = "Custom"; break;
  default:
    console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear" } return "vec3 " +
    i + "( vec3 color ) { return " + t + "ToneMapping( color ); }" }

function jf(i) { return [i.extensionDerivatives || i.envMapCubeUVHeight || i.bumpMap || i
    .normalMapTangentSpace || i.clearcoatNormalMap || i.flatShading || i.shaderID === "physical" ?
    "#extension GL_OES_standard_derivatives : enable" : "", (i.extensionFragDepth || i
      .logarithmicDepthBuffer) && i.rendererExtensionFragDepth ?
    "#extension GL_EXT_frag_depth : enable" : "", i.extensionDrawBuffers && i
    .rendererExtensionDrawBuffers ? "#extension GL_EXT_draw_buffers : require" : "", (i
      .extensionShaderTextureLOD || i.envMap || i.transmission) && i
    .rendererExtensionShaderTextureLod ? "#extension GL_EXT_shader_texture_lod : enable" : ""
  ].filter(Yn).join(`
`) }

function Zf(i) { return [i.extensionClipCullDistance ?
    "#extension GL_ANGLE_clip_cull_distance : require" : ""
  ].filter(Yn).join(`
`) }

function $f(i) { const e = []; for (const t in i) { const n = i[t];
    n !== !1 && e.push("#define " + t + " " + n) } return e.join(`
`) }

function Jf(i, e) { const t = {},
    n = i.getProgramParameter(e, i.ACTIVE_ATTRIBUTES); for (let r = 0; r < n; r++) { const s = i
      .getActiveAttrib(e, r),
      o = s.name; let a = 1;
    s.type === i.FLOAT_MAT2 && (a = 2), s.type === i.FLOAT_MAT3 && (a = 3), s.type === i
      .FLOAT_MAT4 && (a = 4), t[o] = { type: s.type, location: i.getAttribLocation(e, o),
        locationSize: a } } return t }

function Yn(i) { return i !== "" }

function ba(i, e) { const t = e.numSpotLightShadows + e.numSpotLightMaps - e
    .numSpotLightShadowsWithMaps; return i.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(
      /NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(
      /NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(
      /NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e
      .numPointLightShadows) }

function wa(i, e) { return i.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(
    /UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection) }
const Qf = /^[ \t]*#include +<([\w\d./]+)>/gm;

function Qr(i) { return i.replace(Qf, td) }
const ed = new Map([
  ["encodings_fragment", "colorspace_fragment"],
  ["encodings_pars_fragment", "colorspace_pars_fragment"],
  ["output_fragment", "opaque_fragment"]
]);

function td(i, e) { let t = Ue[e]; if (t === void 0) { const n = ed.get(e); if (n !== void 0) t =
      Ue[n], console.warn(
        'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">") } return Qr(t) }
const nd =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;

function Ra(i) { return i.replace(nd, id) }

function id(i, e, t, n) { let r = ""; for (let s = parseInt(e); s < parseInt(t); s++) r += n
    .replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s); return r }

function Ca(i) { let e = "precision " + i.precision + ` float;
precision ` + i.precision + " int;"; return i.precision === "highp" ? e += `
#define HIGH_PRECISION` : i.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : i.precision === "lowp" && (e += `
#define LOW_PRECISION`), e }

function rd(i) { let e = "SHADOWMAP_TYPE_BASIC"; return i.shadowMapType === Oa ? e =
    "SHADOWMAP_TYPE_PCF" : i.shadowMapType === Oo ? e = "SHADOWMAP_TYPE_PCF_SOFT" : i
    .shadowMapType === $t && (e = "SHADOWMAP_TYPE_VSM"), e }

function sd(i) { let e = "ENVMAP_TYPE_CUBE"; if (i.envMap) switch (i.envMapMode) {
  case Zn:
  case $n:
    e = "ENVMAP_TYPE_CUBE"; break;
  case er:
    e = "ENVMAP_TYPE_CUBE_UV"; break }
  return e }

function ad(i) { let e = "ENVMAP_MODE_REFLECTION"; if (i.envMap) switch (i.envMapMode) {
  case $n:
    e = "ENVMAP_MODE_REFRACTION"; break }
  return e }

function od(i) { let e = "ENVMAP_BLENDING_NONE"; if (i.envMap) switch (i.combine) {
  case Ba:
    e = "ENVMAP_BLENDING_MULTIPLY"; break;
  case ol:
    e = "ENVMAP_BLENDING_MIX"; break;
  case ll:
    e = "ENVMAP_BLENDING_ADD"; break }
  return e }

function ld(i) { const e = i.envMapCubeUVHeight; if (e === null) return null; const t = Math.log2(
    e) - 2,
    n = 1 / e; return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)), texelHeight: n,
    maxMip: t } }

function cd(i, e, t, n) { const r = i.getContext(),
    s = t.defines; let o = t.vertexShader,
    a = t.fragmentShader; const l = rd(t),
    c = sd(t),
    h = ad(t),
    f = od(t),
    p = ld(t),
    m = t.isWebGL2 ? "" : jf(t),
    v = Zf(t),
    _ = $f(s),
    d = r.createProgram(); let u, y, E = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (u = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t
      .shaderName, _
    ].filter(Yn).join(`
`), u.length > 0 && (u += `
`), y = [m, "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _]
    .filter(Yn).join(`
`), y.length > 0 && (y += `
`)) : (u = [Ca(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _,
    t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ?
    "#define USE_BATCHING" : "", t.instancing ? "#define USE_INSTANCING" : "", t
    .instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.useFog && t.fog ?
    "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ?
    "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h :
    "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t
    .bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t
    .normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ?
    "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ?
    "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t
    .anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" :
    "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ?
    "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ?
    "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" :
    "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ?
    "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t
    .specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ?
    "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t
    .alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t
    .transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ?
    "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t
    .sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ?
    "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t
    .alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ?
    "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv :
    "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ?
    "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t
    .normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t
    .displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv :
    "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t
    .anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ?
    "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ?
    "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ?
    "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ?
    "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ?
    "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t
    .sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t
    .sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t
    .specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ?
    "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ?
    "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ?
    "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ?
    "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !
    1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ?
    "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ?
    "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ?
    "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ?
    "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t
    .morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors && t
    .isWebGL2 ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 && t.isWebGL2 ?
    "#define MORPHTARGETS_TEXTURE" : "", t.morphTargetsCount > 0 && t.isWebGL2 ?
    "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount >
    0 && t.isWebGL2 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ?
    "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ?
    "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ?
    "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.logarithmicDepthBuffer ?
    "#define USE_LOGDEPTHBUF" : "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ?
    "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;",
    "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;",
    "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;",
    "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;",
    "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif",
    "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;",
    "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2",
    "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif",
    "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif",
    "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )",
    "	attribute vec3 color;", "#endif",
    "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
    "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;",
    "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;",
    "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;",
    "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;",
    "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;",
    "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;",
    "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING",
    "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`
  ].filter(Yn).join(`
`), y = [m, Ca(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, _,
    t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
    t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ?
    "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t
    .envMap ? "#define " + f : "", p ? "#define CUBEUV_TEXEL_WIDTH " + p.texelWidth : "", p ?
    "#define CUBEUV_TEXEL_HEIGHT " + p.texelHeight : "", p ? "#define CUBEUV_MAX_MIP " + p
    .maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ?
    "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ?
    "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" :
    "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ?
    "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t
    .anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" :
    "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ?
    "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ?
    "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t
    .iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ?
    "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "",
    t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ?
    "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
    t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "",
    t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t
    .sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t
    .sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ?
    "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t
    .thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ?
    "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
    t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t
    .vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ?
    "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t
    .flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t
    .flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t
    .shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ?
    "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
    t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.decodeVideoTexture ?
    "#define DECODE_VIDEO_TEXTURE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" :
    "", t.logarithmicDepthBuffer && t.rendererExtensionFragDepth ?
    "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 viewMatrix;",
    "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== pn ?
    "#define TONE_MAPPING" : "", t.toneMapping !== pn ? Ue.tonemapping_pars_fragment : "", t
    .toneMapping !== pn ? Kf("toneMapping", t.toneMapping) : "", t.dithering ?
    "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ue.colorspace_pars_fragment, Yf(
      "linearToOutputTexel", t.outputColorSpace), t.useDepthPacking ? "#define DEPTH_PACKING " +
    t.depthPacking : "", `
`
  ].filter(Yn).join(`
`)), o = Qr(o), o = ba(o, t), o = wa(o, t), a = Qr(a), a = ba(a, t), a = wa(a, t), o = Ra(o), a = Ra(
    a), t.isWebGL2 && t.isRawShaderMaterial !== !0 && (E = `#version 300 es
`, u = [v, "precision mediump sampler2DArray;", "#define attribute in", "#define varying out",
    "#define texture2D texture"
  ].join(`
`) + `
` + u, y = ["precision mediump sampler2DArray;", "#define varying in", t.glslVersion === Ys ? "" :
    "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Ys ? "" :
    "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth",
    "#define texture2D texture", "#define textureCube texture",
    "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod",
    "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod",
    "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad",
    "#define textureCubeGradEXT textureGrad"
  ].join(`
`) + `
` + y); const A = E + u + o,
    L = E + y + a,
    R = ya(r, r.VERTEX_SHADER, A),
    w = ya(r, r.FRAGMENT_SHADER, L);
  r.attachShader(d, R), r.attachShader(d, w), t.index0AttributeName !== void 0 ? r
    .bindAttribLocation(d, 0, t.index0AttributeName) : t.morphTargets === !0 && r
    .bindAttribLocation(d, 0, "position"), r.linkProgram(d);

  function Z(k) { if (i.debug.checkShaderErrors) { const ie = r.getProgramInfoLog(d).trim(),
        C = r.getShaderInfoLog(R).trim(),
        B = r.getShaderInfoLog(w).trim(); let G = !0,
        X = !0; if (r.getProgramParameter(d, r.LINK_STATUS) === !1)
        if (G = !1, typeof i.debug.onShaderError == "function") i.debug.onShaderError(r, d, R, w);
        else { const V = Aa(r, R, "vertex"),
            W = Aa(r, w, "fragment");
          console.error("THREE.WebGLProgram: Shader Error " + r.getError() + " - VALIDATE_STATUS " +
            r.getProgramParameter(d, r.VALIDATE_STATUS) + `

Program Info Log: ` + ie + `
` + V + `
` + W) } else ie !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", ie) : (C === "" ||
        B === "") && (X = !1);
      X && (k.diagnostics = { runnable: G, programLog: ie, vertexShader: { log: C, prefix: u },
        fragmentShader: { log: B, prefix: y } }) } r.deleteShader(R), r.deleteShader(w), S = new Yi(
      r, d), T = Jf(r, d) } let S;
  this.getUniforms = function () { return S === void 0 && Z(this), S }; let T;
  this.getAttributes = function () { return T === void 0 && Z(this), T }; let H = t
    .rendererExtensionParallelShaderCompile === !1; return this.isReady = function () { return H ===
        !1 && (H = r.getProgramParameter(d, kf)), H }, this.destroy = function () { n
        .releaseStatesOfProgram(this), r.deleteProgram(d), this.program = void 0 }, this.type = t
    .shaderType, this.name = t.shaderName, this.id = Wf++, this.cacheKey = e, this.usedTimes = 1,
    this.program = d, this.vertexShader = R, this.fragmentShader = w, this }
let ud = 0;
class hd { constructor() { this.shaderCache = new Map, this.materialCache = new Map } update(
  e) { const t = e.vertexShader,
      n = e.fragmentShader,
      r = this._getShaderStage(t),
      s = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e); return o.has(r) === !1 && (o.add(r), r.usedTimes++),
      o.has(s) === !1 && (o.add(s), s.usedTimes++), this } remove(e) { const t = this
      .materialCache.get(e); for (const n of t) n.usedTimes--, n.usedTimes === 0 && this
      .shaderCache.delete(n.code); return this.materialCache.delete(e), this } getVertexShaderID(
    e) { return this._getShaderStage(e.vertexShader).id } getFragmentShaderID(e) { return this
      ._getShaderStage(e.fragmentShader).id } dispose() { this.shaderCache.clear(), this
      .materialCache.clear() } _getShaderCacheForMaterial(e) { const t = this.materialCache; let
      n = t.get(e); return n === void 0 && (n = new Set, t.set(e, n)), n } _getShaderStage(
  e) { const t = this.shaderCache; let n = t.get(e); return n === void 0 && (n = new fd(e), t.set(
      e, n)), n } } class fd { constructor(e) { this.id = ud++, this.code = e, this.usedTimes =
    0 } }

function dd(i, e, t, n, r, s, o) { const a = new so,
    l = new hd,
    c = [],
    h = r.isWebGL2,
    f = r.logarithmicDepthBuffer,
    p = r.vertexTextures; let m = r.precision; const v = { MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed",
    PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };

  function _(S) { return S === 0 ? "uv" : `uv${S}` }

  function d(S, T, H, k, ie) { const C = k.fog,
      B = ie.geometry,
      G = S.isMeshStandardMaterial ? k.environment : null,
      X = (S.isMeshStandardMaterial ? t : e).get(S.envMap || G),
      V = X && X.mapping === er ? X.image.height : null,
      W = v[S.type];
    S.precision !== null && (m = r.getMaxPrecision(S.precision), m !== S.precision && console.warn(
      "THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", m, "instead."
      )); const q = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color,
      Q = q !== void 0 ? q.length : 0; let ee = 0;
    B.morphAttributes.position !== void 0 && (ee = 1), B.morphAttributes.normal !== void 0 && (ee =
      2), B.morphAttributes.color !== void 0 && (ee = 3); let z, Y, oe, me; if (W) { const pt = Ht[
        W];
      z = pt.vertexShader, Y = pt.fragmentShader } else z = S.vertexShader, Y = S.fragmentShader, l
      .update(S), oe = l.getVertexShaderID(S), me = l.getFragmentShaderID(S); const pe = i
      .getRenderTarget(),
      Re = ie.isInstancedMesh === !0,
      Le = ie.isBatchedMesh === !0,
      Ee = !!S.map,
      Ve = !!S.matcap,
      U = !!X,
      dt = !!S.aoMap,
      ve = !!S.lightMap,
      be = !!S.bumpMap,
      he = !!S.normalMap,
      Ze = !!S.displacementMap,
      Ie = !!S.emissiveMap,
      M = !!S.metalnessMap,
      g = !!S.roughnessMap,
      N = S.anisotropy > 0,
      $ = S.clearcoat > 0,
      j = S.iridescence > 0,
      J = S.sheen > 0,
      fe = S.transmission > 0,
      ae = N && !!S.anisotropyMap,
      ce = $ && !!S.clearcoatMap,
      Se = $ && !!S.clearcoatNormalMap,
      Ne = $ && !!S.clearcoatRoughnessMap,
      K = j && !!S.iridescenceMap,
      Xe = j && !!S.iridescenceThicknessMap,
      Ge = J && !!S.sheenColorMap,
      Ae = J && !!S.sheenRoughnessMap,
      ge = !!S.specularMap,
      ue = !!S.specularColorMap,
      De = !!S.specularIntensityMap,
      ke = fe && !!S.transmissionMap,
      Je = fe && !!S.thicknessMap,
      Oe = !!S.gradientMap,
      te = !!S.alphaMap,
      b = S.alphaTest > 0,
      re = !!S.alphaHash,
      se = !!S.extensions,
      Te = !!B.attributes.uv1,
      xe = !!B.attributes.uv2,
      qe = !!B.attributes.uv3; let Ye = pn; return S.toneMapped && (pe === null || pe
      .isXRRenderTarget === !0) && (Ye = i.toneMapping), { isWebGL2: h, shaderID: W, shaderType: S
        .type, shaderName: S.name, vertexShader: z, fragmentShader: Y, defines: S.defines,
      customVertexShaderID: oe, customFragmentShaderID: me, isRawShaderMaterial: S
        .isRawShaderMaterial === !0, glslVersion: S.glslVersion, precision: m, batching: Le,
      instancing: Re, instancingColor: Re && ie.instanceColor !== null, supportsVertexTextures: p,
      outputColorSpace: pe === null ? i.outputColorSpace : pe.isXRRenderTarget === !0 ? pe.texture
        .colorSpace : rn, map: Ee, matcap: Ve, envMap: U, envMapMode: U && X.mapping,
      envMapCubeUVHeight: V, aoMap: dt, lightMap: ve, bumpMap: be, normalMap: he,
      displacementMap: p && Ze, emissiveMap: Ie, normalMapObjectSpace: he && S.normalMapType ===
        El, normalMapTangentSpace: he && S.normalMapType === Sl, metalnessMap: M, roughnessMap: g,
      anisotropy: N, anisotropyMap: ae, clearcoat: $, clearcoatMap: ce, clearcoatNormalMap: Se,
      clearcoatRoughnessMap: Ne, iridescence: j, iridescenceMap: K, iridescenceThicknessMap: Xe,
      sheen: J, sheenColorMap: Ge, sheenRoughnessMap: Ae, specularMap: ge, specularColorMap: ue,
      specularIntensityMap: De, transmission: fe, transmissionMap: ke, thicknessMap: Je,
      gradientMap: Oe, opaque: S.transparent === !1 && S.blending === Kn, alphaMap: te,
      alphaTest: b, alphaHash: re, combine: S.combine, mapUv: Ee && _(S.map.channel),
      aoMapUv: dt && _(S.aoMap.channel), lightMapUv: ve && _(S.lightMap.channel), bumpMapUv: be &&
        _(S.bumpMap.channel), normalMapUv: he && _(S.normalMap.channel), displacementMapUv: Ze &&
        _(S.displacementMap.channel), emissiveMapUv: Ie && _(S.emissiveMap.channel),
      metalnessMapUv: M && _(S.metalnessMap.channel), roughnessMapUv: g && _(S.roughnessMap
        .channel), anisotropyMapUv: ae && _(S.anisotropyMap.channel), clearcoatMapUv: ce && _(S
        .clearcoatMap.channel), clearcoatNormalMapUv: Se && _(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: Ne && _(S.clearcoatRoughnessMap.channel), iridescenceMapUv: K && _(
        S.iridescenceMap.channel), iridescenceThicknessMapUv: Xe && _(S.iridescenceThicknessMap
        .channel), sheenColorMapUv: Ge && _(S.sheenColorMap.channel), sheenRoughnessMapUv: Ae &&
        _(S.sheenRoughnessMap.channel), specularMapUv: ge && _(S.specularMap.channel),
      specularColorMapUv: ue && _(S.specularColorMap.channel), specularIntensityMapUv: De && _(S
        .specularIntensityMap.channel), transmissionMapUv: ke && _(S.transmissionMap.channel),
      thicknessMapUv: Je && _(S.thicknessMap.channel), alphaMapUv: te && _(S.alphaMap.channel),
      vertexTangents: !!B.attributes.tangent && (he || N), vertexColors: S.vertexColors,
      vertexAlphas: S.vertexColors === !0 && !!B.attributes.color && B.attributes.color
        .itemSize === 4, vertexUv1s: Te, vertexUv2s: xe, vertexUv3s: qe, pointsUvs: ie
        .isPoints === !0 && !!B.attributes.uv && (Ee || te), fog: !!C, useFog: S.fog === !0,
      fogExp2: C && C.isFogExp2, flatShading: S.flatShading === !0, sizeAttenuation: S
        .sizeAttenuation === !0, logarithmicDepthBuffer: f, skinning: ie.isSkinnedMesh === !0,
      morphTargets: B.morphAttributes.position !== void 0, morphNormals: B.morphAttributes
        .normal !== void 0, morphColors: B.morphAttributes.color !== void 0, morphTargetsCount: Q,
      morphTextureStride: ee, numDirLights: T.directional.length, numPointLights: T.point.length,
      numSpotLights: T.spot.length, numSpotLightMaps: T.spotLightMap.length, numRectAreaLights: T
        .rectArea.length, numHemiLights: T.hemi.length, numDirLightShadows: T.directionalShadowMap
        .length, numPointLightShadows: T.pointShadowMap.length, numSpotLightShadows: T
        .spotShadowMap.length, numSpotLightShadowsWithMaps: T.numSpotLightShadowsWithMaps,
      numLightProbes: T.numLightProbes, numClippingPlanes: o.numPlanes, numClipIntersection: o
        .numIntersection, dithering: S.dithering, shadowMapEnabled: i.shadowMap.enabled && H
        .length > 0, shadowMapType: i.shadowMap.type, toneMapping: Ye, useLegacyLights: i
        ._useLegacyLights, decodeVideoTexture: Ee && S.map.isVideoTexture === !0 && We
        .getTransfer(S.map.colorSpace) === je, premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === Jt, flipSided: S.side === St, useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName,
      extensionDerivatives: se && S.extensions.derivatives === !0, extensionFragDepth: se && S
        .extensions.fragDepth === !0, extensionDrawBuffers: se && S.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: se && S.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance: se && S.extensions.clipCullDistance && n.has(
        "WEBGL_clip_cull_distance"), rendererExtensionFragDepth: h || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: h || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: h || n.has("EXT_shader_texture_lod"),
      rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
      customProgramCacheKey: S.customProgramCacheKey() } }

  function u(S) { const T = []; if (S.shaderID ? T.push(S.shaderID) : (T.push(S
        .customVertexShaderID), T.push(S.customFragmentShaderID)), S.defines !== void 0)
      for (const H in S.defines) T.push(H), T.push(S.defines[H]); return S.isRawShaderMaterial === !
      1 && (y(T, S), E(T, S), T.push(i.outputColorSpace)), T.push(S.customProgramCacheKey), T
    .join() }

  function y(S, T) { S.push(T.precision), S.push(T.outputColorSpace), S.push(T.envMapMode), S.push(T
        .envMapCubeUVHeight), S.push(T.mapUv), S.push(T.alphaMapUv), S.push(T.lightMapUv), S.push(T
        .aoMapUv), S.push(T.bumpMapUv), S.push(T.normalMapUv), S.push(T.displacementMapUv), S.push(T
        .emissiveMapUv), S.push(T.metalnessMapUv), S.push(T.roughnessMapUv), S.push(T
        .anisotropyMapUv), S.push(T.clearcoatMapUv), S.push(T.clearcoatNormalMapUv), S.push(T
        .clearcoatRoughnessMapUv), S.push(T.iridescenceMapUv), S.push(T.iridescenceThicknessMapUv),
      S.push(T.sheenColorMapUv), S.push(T.sheenRoughnessMapUv), S.push(T.specularMapUv), S.push(T
        .specularColorMapUv), S.push(T.specularIntensityMapUv), S.push(T.transmissionMapUv), S.push(
        T.thicknessMapUv), S.push(T.combine), S.push(T.fogExp2), S.push(T.sizeAttenuation), S.push(T
        .morphTargetsCount), S.push(T.morphAttributeCount), S.push(T.numDirLights), S.push(T
        .numPointLights), S.push(T.numSpotLights), S.push(T.numSpotLightMaps), S.push(T
        .numHemiLights), S.push(T.numRectAreaLights), S.push(T.numDirLightShadows), S.push(T
        .numPointLightShadows), S.push(T.numSpotLightShadows), S.push(T
      .numSpotLightShadowsWithMaps), S.push(T.numLightProbes), S.push(T.shadowMapType), S.push(T
        .toneMapping), S.push(T.numClippingPlanes), S.push(T.numClipIntersection), S.push(T
        .depthPacking) }

  function E(S, T) { a.disableAll(), T.isWebGL2 && a.enable(0), T.supportsVertexTextures && a
      .enable(1), T.instancing && a.enable(2), T.instancingColor && a.enable(3), T.matcap && a
      .enable(4), T.envMap && a.enable(5), T.normalMapObjectSpace && a.enable(6), T
      .normalMapTangentSpace && a.enable(7), T.clearcoat && a.enable(8), T.iridescence && a.enable(
        9), T.alphaTest && a.enable(10), T.vertexColors && a.enable(11), T.vertexAlphas && a.enable(
        12), T.vertexUv1s && a.enable(13), T.vertexUv2s && a.enable(14), T.vertexUv3s && a.enable(
        15), T.vertexTangents && a.enable(16), T.anisotropy && a.enable(17), T.alphaHash && a
      .enable(18), T.batching && a.enable(19), S.push(a.mask), a.disableAll(), T.fog && a.enable(0),
      T.useFog && a.enable(1), T.flatShading && a.enable(2), T.logarithmicDepthBuffer && a.enable(
      3), T.skinning && a.enable(4), T.morphTargets && a.enable(5), T.morphNormals && a.enable(6), T
      .morphColors && a.enable(7), T.premultipliedAlpha && a.enable(8), T.shadowMapEnabled && a
      .enable(9), T.useLegacyLights && a.enable(10), T.doubleSided && a.enable(11), T.flipSided && a
      .enable(12), T.useDepthPacking && a.enable(13), T.dithering && a.enable(14), T.transmission &&
      a.enable(15), T.sheen && a.enable(16), T.opaque && a.enable(17), T.pointsUvs && a.enable(18),
      T.decodeVideoTexture && a.enable(19), S.push(a.mask) }

  function A(S) { const T = v[S.type]; let H; if (T) { const k = Ht[T];
      H = di.clone(k.uniforms) } else H = S.uniforms; return H }

  function L(S, T) { let H; for (let k = 0, ie = c.length; k < ie; k++) { const C = c[k]; if (C
        .cacheKey === T) { H = C, ++H.usedTimes; break } } return H === void 0 && (H = new cd(i, T,
      S, s), c.push(H)), H }

  function R(S) { if (--S.usedTimes === 0) { const T = c.indexOf(S);
      c[T] = c[c.length - 1], c.pop(), S.destroy() } }

  function w(S) { l.remove(S) }

  function Z() { l.dispose() } return { getParameters: d, getProgramCacheKey: u, getUniforms: A,
    acquireProgram: L, releaseProgram: R, releaseShaderCache: w, programs: c, dispose: Z } }

function pd() { let i = new WeakMap;

  function e(s) { let o = i.get(s); return o === void 0 && (o = {}, i.set(s, o)), o }

  function t(s) { i.delete(s) }

  function n(s, o, a) { i.get(s)[o] = a }

  function r() { i = new WeakMap } return { get: e, remove: t, update: n, dispose: r } }

function md(i, e) { return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i
    .renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.material.id !== e.material
    .id ? i.material.id - e.material.id : i.z !== e.z ? i.z - e.z : i.id - e.id }

function Pa(i, e) { return i.groupOrder !== e.groupOrder ? i.groupOrder - e.groupOrder : i
    .renderOrder !== e.renderOrder ? i.renderOrder - e.renderOrder : i.z !== e.z ? e.z - i.z : i
    .id - e.id }

function La() { const i = []; let e = 0; const t = [],
    n = [],
    r = [];

  function s() { e = 0, t.length = 0, n.length = 0, r.length = 0 }

  function o(f, p, m, v, _, d) { let u = i[e]; return u === void 0 ? (u = { id: f.id, object: f,
      geometry: p, material: m, groupOrder: v, renderOrder: f.renderOrder, z: _, group: d }, i[
      e] = u) : (u.id = f.id, u.object = f, u.geometry = p, u.material = m, u.groupOrder = v, u
      .renderOrder = f.renderOrder, u.z = _, u.group = d), e++, u }

  function a(f, p, m, v, _, d) { const u = o(f, p, m, v, _, d);
    m.transmission > 0 ? n.push(u) : m.transparent === !0 ? r.push(u) : t.push(u) }

  function l(f, p, m, v, _, d) { const u = o(f, p, m, v, _, d);
    m.transmission > 0 ? n.unshift(u) : m.transparent === !0 ? r.unshift(u) : t.unshift(u) }

  function c(f, p) { t.length > 1 && t.sort(f || md), n.length > 1 && n.sort(p || Pa), r.length >
      1 && r.sort(p || Pa) }

  function h() { for (let f = e, p = i.length; f < p; f++) { const m = i[f]; if (m.id === null)
        break;
      m.id = null, m.object = null, m.geometry = null, m.material = null, m.group =
      null } } return { opaque: t, transmissive: n, transparent: r, init: s, push: a, unshift: l,
    finish: h, sort: c } }

function gd() { let i = new WeakMap;

  function e(n, r) { const s = i.get(n); let o; return s === void 0 ? (o = new La, i.set(n, [o])) :
      r >= s.length ? (o = new La, s.push(o)) : o = s[r], o }

  function t() { i = new WeakMap } return { get: e, dispose: t } }

function _d() { const i = {}; return { get: function (e) { if (i[e.id] !== void 0) return i[e
      .id]; let t; switch (e.type) {
      case "DirectionalLight":
        t = { direction: new D, color: new He }; break;
      case "SpotLight":
        t = { position: new D, direction: new D, color: new He, distance: 0, coneCos: 0,
          penumbraCos: 0, decay: 0 }; break;
      case "PointLight":
        t = { position: new D, color: new He, distance: 0, decay: 0 }; break;
      case "HemisphereLight":
        t = { direction: new D, skyColor: new He, groundColor: new He }; break;
      case "RectAreaLight":
        t = { color: new He, position: new D, halfWidth: new D,
        halfHeight: new D }; break } return i[e.id] = t, t } } }

function vd() { const i = {}; return { get: function (e) { if (i[e.id] !== void 0) return i[e
      .id]; let t; switch (e.type) {
      case "DirectionalLight":
        t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Pe }; break;
      case "SpotLight":
        t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Pe }; break;
      case "PointLight":
        t = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Pe,
          shadowCameraNear: 1, shadowCameraFar: 1e3 }; break } return i[e.id] = t, t } } }
let xd = 0;

function Md(i, e) { return (e.castShadow ? 2 : 0) - (i.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (i
    .map ? 1 : 0) }

function Sd(i, e) { const t = new _d,
    n = vd(),
    r = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1,
        rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1,
        numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [],
      directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [],
      spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [],
      rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [],
      pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0 }; for (let h = 0; h < 9; h++) r.probe.push(new D); const s = new D,
    o = new ot,
    a = new ot;

  function l(h, f) { let p = 0,
      m = 0,
      v = 0; for (let k = 0; k < 9; k++) r.probe[k].set(0, 0, 0); let _ = 0,
      d = 0,
      u = 0,
      y = 0,
      E = 0,
      A = 0,
      L = 0,
      R = 0,
      w = 0,
      Z = 0,
      S = 0;
    h.sort(Md); const T = f === !0 ? Math.PI : 1; for (let k = 0, ie = h.length; k <
      ie; k++) { const C = h[k],
        B = C.color,
        G = C.intensity,
        X = C.distance,
        V = C.shadow && C.shadow.map ? C.shadow.map.texture : null; if (C.isAmbientLight) p += B.r *
        G * T, m += B.g * G * T, v += B.b * G * T;
      else if (C.isLightProbe) { for (let W = 0; W < 9; W++) r.probe[W].addScaledVector(C.sh
          .coefficients[W], G);
        S++ } else if (C.isDirectionalLight) { const W = t.get(C); if (W.color.copy(C.color)
          .multiplyScalar(C.intensity * T), C.castShadow) { const q = C.shadow,
            Q = n.get(C);
          Q.shadowBias = q.bias, Q.shadowNormalBias = q.normalBias, Q.shadowRadius = q.radius, Q
            .shadowMapSize = q.mapSize, r.directionalShadow[_] = Q, r.directionalShadowMap[_] = V, r
            .directionalShadowMatrix[_] = C.shadow.matrix, A++ } r.directional[_] = W,
        _++ } else if (C.isSpotLight) { const W = t.get(C);
        W.position.setFromMatrixPosition(C.matrixWorld), W.color.copy(B).multiplyScalar(G * T), W
          .distance = X, W.coneCos = Math.cos(C.angle), W.penumbraCos = Math.cos(C.angle * (1 - C
            .penumbra)), W.decay = C.decay, r.spot[u] = W; const q = C.shadow; if (C.map && (r
            .spotLightMap[w] = C.map, w++, q.updateMatrices(C), C.castShadow && Z++), r
          .spotLightMatrix[u] = q.matrix, C.castShadow) { const Q = n.get(C);
          Q.shadowBias = q.bias, Q.shadowNormalBias = q.normalBias, Q.shadowRadius = q.radius, Q
            .shadowMapSize = q.mapSize, r.spotShadow[u] = Q, r.spotShadowMap[u] = V,
            R++ } u++ } else if (C.isRectAreaLight) { const W = t.get(C);
        W.color.copy(B).multiplyScalar(G), W.halfWidth.set(C.width * .5, 0, 0), W.halfHeight.set(0,
          C.height * .5, 0), r.rectArea[y] = W, y++ } else if (C.isPointLight) { const W = t.get(
        C); if (W.color.copy(C.color).multiplyScalar(C.intensity * T), W.distance = C.distance, W
          .decay = C.decay, C.castShadow) { const q = C.shadow,
            Q = n.get(C);
          Q.shadowBias = q.bias, Q.shadowNormalBias = q.normalBias, Q.shadowRadius = q.radius, Q
            .shadowMapSize = q.mapSize, Q.shadowCameraNear = q.camera.near, Q.shadowCameraFar = q
            .camera.far, r.pointShadow[d] = Q, r.pointShadowMap[d] = V, r.pointShadowMatrix[d] = C
            .shadow.matrix, L++ } r.point[d] = W, d++ } else if (C.isHemisphereLight) { const W = t
          .get(C);
        W.skyColor.copy(C.color).multiplyScalar(G * T), W.groundColor.copy(C.groundColor)
          .multiplyScalar(G * T), r.hemi[E] = W, E++ } } y > 0 && (e.isWebGL2 ? i.has(
      "OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = ne.LTC_FLOAT_1, r.rectAreaLTC2 = ne
      .LTC_FLOAT_2) : (r.rectAreaLTC1 = ne.LTC_HALF_1, r.rectAreaLTC2 = ne.LTC_HALF_2) : i.has(
      "OES_texture_float_linear") === !0 ? (r.rectAreaLTC1 = ne.LTC_FLOAT_1, r.rectAreaLTC2 = ne
      .LTC_FLOAT_2) : i.has("OES_texture_half_float_linear") === !0 ? (r.rectAreaLTC1 = ne
      .LTC_HALF_1, r.rectAreaLTC2 = ne.LTC_HALF_2) : console.error(
      "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")), r.ambient[
      0] = p, r.ambient[1] = m, r.ambient[2] = v; const H = r.hash;
    (H.directionalLength !== _ || H.pointLength !== d || H.spotLength !== u || H.rectAreaLength !==
      y || H.hemiLength !== E || H.numDirectionalShadows !== A || H.numPointShadows !== L || H
      .numSpotShadows !== R || H.numSpotMaps !== w || H.numLightProbes !== S) && (r.directional
      .length = _, r.spot.length = u, r.rectArea.length = y, r.point.length = d, r.hemi.length = E,
      r.directionalShadow.length = A, r.directionalShadowMap.length = A, r.pointShadow.length = L, r
      .pointShadowMap.length = L, r.spotShadow.length = R, r.spotShadowMap.length = R, r
      .directionalShadowMatrix.length = A, r.pointShadowMatrix.length = L, r.spotLightMatrix
      .length = R + w - Z, r.spotLightMap.length = w, r.numSpotLightShadowsWithMaps = Z, r
      .numLightProbes = S, H.directionalLength = _, H.pointLength = d, H.spotLength = u, H
      .rectAreaLength = y, H.hemiLength = E, H.numDirectionalShadows = A, H.numPointShadows = L, H
      .numSpotShadows = R, H.numSpotMaps = w, H.numLightProbes = S, r.version = xd++) }

  function c(h, f) { let p = 0,
      m = 0,
      v = 0,
      _ = 0,
      d = 0; const u = f.matrixWorldInverse; for (let y = 0, E = h.length; y < E; y++) { const A =
        h[y]; if (A.isDirectionalLight) { const L = r.directional[p];
        L.direction.setFromMatrixPosition(A.matrixWorld), s.setFromMatrixPosition(A.target
          .matrixWorld), L.direction.sub(s), L.direction.transformDirection(u), p++ } else if (A
        .isSpotLight) { const L = r.spot[v];
        L.position.setFromMatrixPosition(A.matrixWorld), L.position.applyMatrix4(u), L.direction
          .setFromMatrixPosition(A.matrixWorld), s.setFromMatrixPosition(A.target.matrixWorld), L
          .direction.sub(s), L.direction.transformDirection(u), v++ } else if (A
        .isRectAreaLight) { const L = r.rectArea[_];
        L.position.setFromMatrixPosition(A.matrixWorld), L.position.applyMatrix4(u), a.identity(), o
          .copy(A.matrixWorld), o.premultiply(u), a.extractRotation(o), L.halfWidth.set(A.width *
            .5, 0, 0), L.halfHeight.set(0, A.height * .5, 0), L.halfWidth.applyMatrix4(a), L
          .halfHeight.applyMatrix4(a), _++ } else if (A.isPointLight) { const L = r.point[m];
        L.position.setFromMatrixPosition(A.matrixWorld), L.position.applyMatrix4(u), m++ } else if (
        A.isHemisphereLight) { const L = r.hemi[d];
        L.direction.setFromMatrixPosition(A.matrixWorld), L.direction.transformDirection(u),
        d++ } } } return { setup: l, setupView: c, state: r } }

function Da(i, e) { const t = new Sd(i, e),
    n = [],
    r = [];

  function s() { n.length = 0, r.length = 0 }

  function o(f) { n.push(f) }

  function a(f) { r.push(f) }

  function l(f) { t.setup(n, f) }

  function c(f) { t.setupView(n, f) } return { init: s, state: { lightsArray: n, shadowsArray: r,
      lights: t }, setupLights: l, setupLightsView: c, pushLight: o, pushShadow: a } }

function Ed(i, e) { let t = new WeakMap;

  function n(s, o = 0) { const a = t.get(s); let l; return a === void 0 ? (l = new Da(i, e), t.set(
      s, [l])) : o >= a.length ? (l = new Da(i, e), a.push(l)) : l = a[o], l }

  function r() { t = new WeakMap } return { get: n, dispose: r } } class Td extends vi { constructor
    (e) { super(), this.isMeshDepthMaterial = !0, this.type = "MeshDepthMaterial", this
        .depthPacking = xl, this.map = null, this.alphaMap = null, this.displacementMap = null, this
        .displacementScale = 1, this.displacementBias = 0, this.wireframe = !1, this
        .wireframeLinewidth = 1, this.setValues(e) } copy(e) { return super.copy(e), this
        .depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this
        .displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this
        .displacementBias = e.displacementBias, this.wireframe = e.wireframe, this
        .wireframeLinewidth = e.wireframeLinewidth, this } } class yd extends vi { constructor(
  e) { super(), this.isMeshDistanceMaterial = !0, this.type = "MeshDistanceMaterial", this.map =
      null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this
      .displacementBias = 0, this.setValues(e) } copy(e) { return super.copy(e), this.map = e.map,
      this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this
      .displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this } }
const Ad = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  bd = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;

function wd(i, e, t) { let n = new fo; const r = new Pe,
    s = new Pe,
    o = new ct,
    a = new Td({ depthPacking: Ml }),
    l = new yd,
    c = {},
    h = t.maxTextureSize,
    f = {
      [gn]: St, [St]: gn, [Jt]: Jt },
    p = new vt({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null },
        resolution: { value: new Pe }, radius: { value: 4 } }, vertexShader: Ad,
      fragmentShader: bd }),
    m = p.clone();
  m.defines.HORIZONTAL_PASS = 1; const v = new sn;
  v.setAttribute("position", new Wt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]), 3)); const
    _ = new kt(v, p),
    d = this;
  this.enabled = !1, this.autoUpdate = !0, this.needsUpdate = !1, this.type = Oa; let u = this.type;
  this.render = function (R, w, Z) { if (d.enabled === !1 || d.autoUpdate === !1 && d
      .needsUpdate === !1 || R.length === 0) return; const S = i.getRenderTarget(),
      T = i.getActiveCubeFace(),
      H = i.getActiveMipmapLevel(),
      k = i.state;
    k.setBlending(en), k.buffers.color.setClear(1, 1, 1, 1), k.buffers.depth.setTest(!0), k
      .setScissorTest(!1); const ie = u !== $t && this.type === $t,
      C = u === $t && this.type !== $t; for (let B = 0, G = R.length; B < G; B++) { const X = R[
        B],
        V = X.shadow; if (V === void 0) { console.warn("THREE.WebGLShadowMap:", X,
          "has no shadow."); continue } if (V.autoUpdate === !1 && V.needsUpdate === !1) continue;
      r.copy(V.mapSize); const W = V.getFrameExtents(); if (r.multiply(W), s.copy(V.mapSize), (r
          .x > h || r.y > h) && (r.x > h && (s.x = Math.floor(h / W.x), r.x = s.x * W.x, V.mapSize
          .x = s.x), r.y > h && (s.y = Math.floor(h / W.y), r.y = s.y * W.y, V.mapSize.y = s.y)),
        V.map === null || ie === !0 || C === !0) { const Q = this.type !== $t ? { minFilter: _t,
          magFilter: _t } : {};
        V.map !== null && V.map.dispose(), V.map = new Bt(r.x, r.y, Q), V.map.texture.name = X
          .name + ".shadowMap", V.camera.updateProjectionMatrix() } i.setRenderTarget(V.map), i
        .clear(); const q = V.getViewportCount(); for (let Q = 0; Q < q; Q++) { const ee = V
          .getViewport(Q);
        o.set(s.x * ee.x, s.y * ee.y, s.x * ee.z, s.y * ee.w), k.viewport(o), V.updateMatrices(X,
          Q), n = V.getFrustum(), A(w, Z, V.camera, X, this.type) } V.isPointLightShadow !== !0 &&
        this.type === $t && y(V, Z), V.needsUpdate = !1 } u = this.type, d.needsUpdate = !1, i
      .setRenderTarget(S, T, H) };

  function y(R, w) { const Z = e.update(_);
    p.defines.VSM_SAMPLES !== R.blurSamples && (p.defines.VSM_SAMPLES = R.blurSamples, m.defines
        .VSM_SAMPLES = R.blurSamples, p.needsUpdate = !0, m.needsUpdate = !0), R.mapPass === null &&
      (R.mapPass = new Bt(r.x, r.y)), p.uniforms.shadow_pass.value = R.map.texture, p.uniforms
      .resolution.value = R.mapSize, p.uniforms.radius.value = R.radius, i.setRenderTarget(R
        .mapPass), i.clear(), i.renderBufferDirect(w, null, Z, p, _, null), m.uniforms.shadow_pass
      .value = R.mapPass.texture, m.uniforms.resolution.value = R.mapSize, m.uniforms.radius.value =
      R.radius, i.setRenderTarget(R.map), i.clear(), i.renderBufferDirect(w, null, Z, m, _, null) }

  function E(R, w, Z, S) { let T = null; const H = Z.isPointLight === !0 ? R
      .customDistanceMaterial : R.customDepthMaterial; if (H !== void 0) T = H;
    else if (T = Z.isPointLight === !0 ? l : a, i.localClippingEnabled && w.clipShadows === !0 &&
      Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w
      .displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) { const
        k = T.uuid,
        ie = w.uuid; let C = c[k];
      C === void 0 && (C = {}, c[k] = C); let B = C[ie];
      B === void 0 && (B = T.clone(), C[ie] = B, w.addEventListener("dispose", L)), T = B } if (T
      .visible = w.visible, T.wireframe = w.wireframe, S === $t ? T.side = w.shadowSide !== null ? w
      .shadowSide : w.side : T.side = w.shadowSide !== null ? w.shadowSide : f[w.side], T.alphaMap =
      w.alphaMap, T.alphaTest = w.alphaTest, T.map = w.map, T.clipShadows = w.clipShadows, T
      .clippingPlanes = w.clippingPlanes, T.clipIntersection = w.clipIntersection, T
      .displacementMap = w.displacementMap, T.displacementScale = w.displacementScale, T
      .displacementBias = w.displacementBias, T.wireframeLinewidth = w.wireframeLinewidth, T
      .linewidth = w.linewidth, Z.isPointLight === !0 && T.isMeshDistanceMaterial === !0) { const
        k = i.properties.get(T);
      k.light = Z } return T }

  function A(R, w, Z, S, T) { if (R.visible === !1) return; if (R.layers.test(w.layers) && (R
        .isMesh || R.isLine || R.isPoints) && (R.castShadow || R.receiveShadow && T === $t) && (!R
        .frustumCulled || n.intersectsObject(R))) { R.modelViewMatrix.multiplyMatrices(Z
        .matrixWorldInverse, R.matrixWorld); const ie = e.update(R),
        C = R.material; if (Array.isArray(C)) { const B = ie.groups; for (let G = 0, X = B
          .length; G < X; G++) { const V = B[G],
            W = C[V.materialIndex]; if (W && W.visible) { const q = E(R, W, S, T);
            R.onBeforeShadow(i, R, w, Z, ie, q, V), i.renderBufferDirect(Z, null, ie, q, R, V), R
              .onAfterShadow(i, R, w, Z, ie, q, V) } } } else if (C.visible) { const B = E(R, C, S,
          T);
        R.onBeforeShadow(i, R, w, Z, ie, B, null), i.renderBufferDirect(Z, null, ie, B, R, null), R
          .onAfterShadow(i, R, w, Z, ie, B, null) } } const k = R.children; for (let ie = 0, C = k
        .length; ie < C; ie++) A(k[ie], w, Z, S, T) }

  function L(R) { R.target.removeEventListener("dispose", L); for (const Z in c) { const S = c[Z],
        T = R.target.uuid;
      T in S && (S[T].dispose(), delete S[T]) } } }

function Rd(i, e, t) { const n = t.isWebGL2;

  function r() { let b = !1; const re = new ct; let se = null; const Te = new ct(0, 0, 0,
    0); return { setMask: function (xe) { se !== xe && !b && (i.colorMask(xe, xe, xe, xe), se =
          xe) }, setLocked: function (xe) { b = xe }, setClear: function (xe, qe, Ye, rt, pt) { pt
          === !0 && (xe *= rt, qe *= rt, Ye *= rt), re.set(xe, qe, Ye, rt), Te.equals(re) === !
          1 && (i.clearColor(xe, qe, Ye, rt), Te.copy(re)) }, reset: function () { b = !1, se =
          null, Te.set(-1, 0, 0, 0) } } }

  function s() { let b = !1,
      re = null,
      se = null,
      Te = null; return { setTest: function (xe) { xe ? Le(i.DEPTH_TEST) : Ee(i.DEPTH_TEST) },
      setMask: function (xe) { re !== xe && !b && (i.depthMask(xe), re = xe) }, setFunc: function (
        xe) { if (se !== xe) { switch (xe) {
          case el:
            i.depthFunc(i.NEVER); break;
          case tl:
            i.depthFunc(i.ALWAYS); break;
          case nl:
            i.depthFunc(i.LESS); break;
          case Ki:
            i.depthFunc(i.LEQUAL); break;
          case il:
            i.depthFunc(i.EQUAL); break;
          case rl:
            i.depthFunc(i.GEQUAL); break;
          case sl:
            i.depthFunc(i.GREATER); break;
          case al:
            i.depthFunc(i.NOTEQUAL); break;
          default:
            i.depthFunc(i.LEQUAL) } se = xe } }, setLocked: function (xe) { b = xe },
      setClear: function (xe) { Te !== xe && (i.clearDepth(xe), Te = xe) }, reset: function () { b
          = !1, re = null, se = null, Te = null } } }

  function o() { let b = !1,
      re = null,
      se = null,
      Te = null,
      xe = null,
      qe = null,
      Ye = null,
      rt = null,
      pt = null; return { setTest: function (Ke) { b || (Ke ? Le(i.STENCIL_TEST) : Ee(i
          .STENCIL_TEST)) }, setMask: function (Ke) { re !== Ke && !b && (i.stencilMask(Ke), re =
          Ke) }, setFunc: function (Ke, mt, zt) {
        (se !== Ke || Te !== mt || xe !== zt) && (i.stencilFunc(Ke, mt, zt), se = Ke, Te = mt,
          xe = zt) }, setOp: function (Ke, mt, zt) {
        (qe !== Ke || Ye !== mt || rt !== zt) && (i.stencilOp(Ke, mt, zt), qe = Ke, Ye = mt, rt =
          zt) }, setLocked: function (Ke) { b = Ke }, setClear: function (Ke) { pt !== Ke && (i
          .clearStencil(Ke), pt = Ke) }, reset: function () { b = !1, re = null, se = null, Te =
          null, xe = null, qe = null, Ye = null, rt = null, pt = null } } } const a = new r,
    l = new s,
    c = new o,
    h = new WeakMap,
    f = new WeakMap; let p = {},
    m = {},
    v = new WeakMap,
    _ = [],
    d = null,
    u = !1,
    y = null,
    E = null,
    A = null,
    L = null,
    R = null,
    w = null,
    Z = null,
    S = new He(0, 0, 0),
    T = 0,
    H = !1,
    k = null,
    ie = null,
    C = null,
    B = null,
    G = null; const X = i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS); let V = !1,
    W = 0; const q = i.getParameter(i.VERSION);
  q.indexOf("WebGL") !== -1 ? (W = parseFloat(/^WebGL (\d)/.exec(q)[1]), V = W >= 1) : q.indexOf(
    "OpenGL ES") !== -1 && (W = parseFloat(/^OpenGL ES (\d)/.exec(q)[1]), V = W >= 2); let Q = null,
    ee = {}; const z = i.getParameter(i.SCISSOR_BOX),
    Y = i.getParameter(i.VIEWPORT),
    oe = new ct().fromArray(z),
    me = new ct().fromArray(Y);

  function pe(b, re, se, Te) { const xe = new Uint8Array(4),
      qe = i.createTexture();
    i.bindTexture(b, qe), i.texParameteri(b, i.TEXTURE_MIN_FILTER, i.NEAREST), i.texParameteri(b, i
      .TEXTURE_MAG_FILTER, i.NEAREST); for (let Ye = 0; Ye < se; Ye++) n && (b === i.TEXTURE_3D ||
      b === i.TEXTURE_2D_ARRAY) ? i.texImage3D(re, 0, i.RGBA, 1, 1, Te, 0, i.RGBA, i
      .UNSIGNED_BYTE, xe) : i.texImage2D(re + Ye, 0, i.RGBA, 1, 1, 0, i.RGBA, i.UNSIGNED_BYTE,
    xe); return qe } const Re = {};
  Re[i.TEXTURE_2D] = pe(i.TEXTURE_2D, i.TEXTURE_2D, 1), Re[i.TEXTURE_CUBE_MAP] = pe(i
      .TEXTURE_CUBE_MAP, i.TEXTURE_CUBE_MAP_POSITIVE_X, 6), n && (Re[i.TEXTURE_2D_ARRAY] = pe(i
      .TEXTURE_2D_ARRAY, i.TEXTURE_2D_ARRAY, 1, 1), Re[i.TEXTURE_3D] = pe(i.TEXTURE_3D, i
      .TEXTURE_3D, 1, 1)), a.setClear(0, 0, 0, 1), l.setClear(1), c.setClear(0), Le(i.DEPTH_TEST), l
    .setFunc(Ki), Ie(!1), M(ps), Le(i.CULL_FACE), he(en);

  function Le(b) { p[b] !== !0 && (i.enable(b), p[b] = !0) }

  function Ee(b) { p[b] !== !1 && (i.disable(b), p[b] = !1) }

  function Ve(b, re) { return m[b] !== re ? (i.bindFramebuffer(b, re), m[b] = re, n && (b === i
      .DRAW_FRAMEBUFFER && (m[i.FRAMEBUFFER] = re), b === i.FRAMEBUFFER && (m[i
        .DRAW_FRAMEBUFFER] = re)), !0) : !1 }

  function U(b, re) { let se = _,
      Te = !1; if (b)
      if (se = v.get(re), se === void 0 && (se = [], v.set(re, se)), b
        .isWebGLMultipleRenderTargets) { const xe = b.texture; if (se.length !== xe.length || se[
          0] !== i.COLOR_ATTACHMENT0) { for (let qe = 0, Ye = xe.length; qe < Ye; qe++) se[qe] = i
            .COLOR_ATTACHMENT0 + qe;
          se.length = xe.length, Te = !0 } } else se[0] !== i.COLOR_ATTACHMENT0 && (se[0] = i
        .COLOR_ATTACHMENT0, Te = !0);
    else se[0] !== i.BACK && (se[0] = i.BACK, Te = !0);
    Te && (t.isWebGL2 ? i.drawBuffers(se) : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se)) }

  function dt(b) { return d !== b ? (i.useProgram(b), d = b, !0) : !1 } const ve = {
    [An]: i.FUNC_ADD, [zo]: i.FUNC_SUBTRACT, [Go]: i.FUNC_REVERSE_SUBTRACT }; if (n) ve[_s] = i.MIN,
    ve[vs] = i.MAX;
  else { const b = e.get("EXT_blend_minmax");
    b !== null && (ve[_s] = b.MIN_EXT, ve[vs] = b.MAX_EXT) } const be = {
    [Ho]: i.ZERO, [Vo]: i.ONE, [ko]: i.SRC_COLOR, [Wr]: i.SRC_ALPHA, [jo]: i.SRC_ALPHA_SATURATE, [
      Yo
    ]: i.DST_COLOR, [Xo]: i.DST_ALPHA, [Wo]: i.ONE_MINUS_SRC_COLOR, [Xr]: i.ONE_MINUS_SRC_ALPHA, [
      Ko
    ]: i.ONE_MINUS_DST_COLOR, [qo]: i.ONE_MINUS_DST_ALPHA, [Zo]: i.CONSTANT_COLOR, [$o]: i
      .ONE_MINUS_CONSTANT_COLOR, [Jo]: i.CONSTANT_ALPHA, [Qo]: i.ONE_MINUS_CONSTANT_ALPHA };

  function he(b, re, se, Te, xe, qe, Ye, rt, pt, Ke) { if (b === en) { u === !0 && (Ee(i.BLEND),
        u = !1); return } if (u === !1 && (Le(i.BLEND), u = !0), b !== Bo) { if (b !== y || Ke !==
        H) { if ((E !== An || R !== An) && (i.blendEquation(i.FUNC_ADD), E = An, R = An), Ke)
          switch (b) {
          case Kn:
            i.blendFuncSeparate(i.ONE, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA); break;
          case kr:
            i.blendFunc(i.ONE, i.ONE); break;
          case ms:
            i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE); break;
          case gs:
            i.blendFuncSeparate(i.ZERO, i.SRC_COLOR, i.ZERO, i.SRC_ALPHA); break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", b); break } else switch (b) {
            case Kn:
              i.blendFuncSeparate(i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i
              .ONE_MINUS_SRC_ALPHA); break;
            case kr:
              i.blendFunc(i.SRC_ALPHA, i.ONE); break;
            case ms:
              i.blendFuncSeparate(i.ZERO, i.ONE_MINUS_SRC_COLOR, i.ZERO, i.ONE); break;
            case gs:
              i.blendFunc(i.ZERO, i.SRC_COLOR); break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", b); break } A = null, L = null,
            w = null, Z = null, S.set(0, 0, 0), T = 0, y = b, H = Ke } return } xe = xe || re, qe =
      qe || se, Ye = Ye || Te, (re !== E || xe !== R) && (i.blendEquationSeparate(ve[re], ve[xe]),
        E = re, R = xe), (se !== A || Te !== L || qe !== w || Ye !== Z) && (i.blendFuncSeparate(be[
        se], be[Te], be[qe], be[Ye]), A = se, L = Te, w = qe, Z = Ye), (rt.equals(S) === !1 ||
        pt !== T) && (i.blendColor(rt.r, rt.g, rt.b, pt), S.copy(rt), T = pt), y = b, H = !1 }

  function Ze(b, re) { b.side === Jt ? Ee(i.CULL_FACE) : Le(i.CULL_FACE); let se = b.side === St;
    re && (se = !se), Ie(se), b.blending === Kn && b.transparent === !1 ? he(en) : he(b.blending, b
        .blendEquation, b.blendSrc, b.blendDst, b.blendEquationAlpha, b.blendSrcAlpha, b
        .blendDstAlpha, b.blendColor, b.blendAlpha, b.premultipliedAlpha), l.setFunc(b.depthFunc), l
      .setTest(b.depthTest), l.setMask(b.depthWrite), a.setMask(b.colorWrite); const Te = b
      .stencilWrite;
    c.setTest(Te), Te && (c.setMask(b.stencilWriteMask), c.setFunc(b.stencilFunc, b.stencilRef, b
      .stencilFuncMask), c.setOp(b.stencilFail, b.stencilZFail, b.stencilZPass)), N(b
      .polygonOffset, b.polygonOffsetFactor, b.polygonOffsetUnits), b.alphaToCoverage === !0 ? Le(
      i.SAMPLE_ALPHA_TO_COVERAGE) : Ee(i.SAMPLE_ALPHA_TO_COVERAGE) }

  function Ie(b) { k !== b && (b ? i.frontFace(i.CW) : i.frontFace(i.CCW), k = b) }

  function M(b) { b !== No ? (Le(i.CULL_FACE), b !== ie && (b === ps ? i.cullFace(i.BACK) : b ===
      Fo ? i.cullFace(i.FRONT) : i.cullFace(i.FRONT_AND_BACK))) : Ee(i.CULL_FACE), ie = b }

  function g(b) { b !== C && (V && i.lineWidth(b), C = b) }

  function N(b, re, se) { b ? (Le(i.POLYGON_OFFSET_FILL), (B !== re || G !== se) && (i
      .polygonOffset(re, se), B = re, G = se)) : Ee(i.POLYGON_OFFSET_FILL) }

  function $(b) { b ? Le(i.SCISSOR_TEST) : Ee(i.SCISSOR_TEST) }

  function j(b) { b === void 0 && (b = i.TEXTURE0 + X - 1), Q !== b && (i.activeTexture(b), Q = b) }

  function J(b, re, se) { se === void 0 && (Q === null ? se = i.TEXTURE0 + X - 1 : se = Q); let Te =
      ee[se];
    Te === void 0 && (Te = { type: void 0, texture: void 0 }, ee[se] = Te), (Te.type !== b || Te
      .texture !== re) && (Q !== se && (i.activeTexture(se), Q = se), i.bindTexture(b, re || Re[
      b]), Te.type = b, Te.texture = re) }

  function fe() { const b = ee[Q];
    b !== void 0 && b.type !== void 0 && (i.bindTexture(b.type, null), b.type = void 0, b.texture =
      void 0) }

  function ae() { try { i.compressedTexImage2D.apply(i, arguments) } catch (b) { console.error(
        "THREE.WebGLState:", b) } }

  function ce() { try { i.compressedTexImage3D.apply(i, arguments) } catch (b) { console.error(
        "THREE.WebGLState:", b) } }

  function Se() { try { i.texSubImage2D.apply(i, arguments) } catch (b) { console.error(
        "THREE.WebGLState:", b) } }

  function Ne() { try { i.texSubImage3D.apply(i, arguments) } catch (b) { console.error(
        "THREE.WebGLState:", b) } }

  function K() { try { i.compressedTexSubImage2D.apply(i, arguments) } catch (b) { console.error(
        "THREE.WebGLState:", b) } }

  function Xe() { try { i.compressedTexSubImage3D.apply(i, arguments) } catch (b) { console.error(
        "THREE.WebGLState:", b) } }

  function Ge() { try { i.texStorage2D.apply(i, arguments) } catch (b) { console.error(
        "THREE.WebGLState:", b) } }

  function Ae() { try { i.texStorage3D.apply(i, arguments) } catch (b) { console.error(
        "THREE.WebGLState:", b) } }

  function ge() { try { i.texImage2D.apply(i, arguments) } catch (b) { console.error(
        "THREE.WebGLState:", b) } }

  function ue() { try { i.texImage3D.apply(i, arguments) } catch (b) { console.error(
        "THREE.WebGLState:", b) } }

  function De(b) { oe.equals(b) === !1 && (i.scissor(b.x, b.y, b.z, b.w), oe.copy(b)) }

  function ke(b) { me.equals(b) === !1 && (i.viewport(b.x, b.y, b.z, b.w), me.copy(b)) }

  function Je(b, re) { let se = f.get(re);
    se === void 0 && (se = new WeakMap, f.set(re, se)); let Te = se.get(b);
    Te === void 0 && (Te = i.getUniformBlockIndex(re, b.name), se.set(b, Te)) }

  function Oe(b, re) { const Te = f.get(re).get(b);
    h.get(re) !== Te && (i.uniformBlockBinding(re, Te, b.__bindingPointIndex), h.set(re, Te)) }

  function te() { i.disable(i.BLEND), i.disable(i.CULL_FACE), i.disable(i.DEPTH_TEST), i.disable(i
        .POLYGON_OFFSET_FILL), i.disable(i.SCISSOR_TEST), i.disable(i.STENCIL_TEST), i.disable(i
        .SAMPLE_ALPHA_TO_COVERAGE), i.blendEquation(i.FUNC_ADD), i.blendFunc(i.ONE, i.ZERO), i
      .blendFuncSeparate(i.ONE, i.ZERO, i.ONE, i.ZERO), i.blendColor(0, 0, 0, 0), i.colorMask(!0, !
        0, !0, !0), i.clearColor(0, 0, 0, 0), i.depthMask(!0), i.depthFunc(i.LESS), i.clearDepth(1),
      i.stencilMask(4294967295), i.stencilFunc(i.ALWAYS, 0, 4294967295), i.stencilOp(i.KEEP, i.KEEP,
        i.KEEP), i.clearStencil(0), i.cullFace(i.BACK), i.frontFace(i.CCW), i.polygonOffset(0, 0), i
      .activeTexture(i.TEXTURE0), i.bindFramebuffer(i.FRAMEBUFFER, null), n === !0 && (i
        .bindFramebuffer(i.DRAW_FRAMEBUFFER, null), i.bindFramebuffer(i.READ_FRAMEBUFFER, null)), i
      .useProgram(null), i.lineWidth(1), i.scissor(0, 0, i.canvas.width, i.canvas.height), i
      .viewport(0, 0, i.canvas.width, i.canvas.height), p = {}, Q = null, ee = {}, m = {}, v =
      new WeakMap, _ = [], d = null, u = !1, y = null, E = null, A = null, L = null, R = null, w =
      null, Z = null, S = new He(0, 0, 0), T = 0, H = !1, k = null, ie = null, C = null, B = null,
      G = null, oe.set(0, 0, i.canvas.width, i.canvas.height), me.set(0, 0, i.canvas.width, i.canvas
        .height), a.reset(), l.reset(), c.reset() } return { buffers: { color: a, depth: l,
      stencil: c }, enable: Le, disable: Ee, bindFramebuffer: Ve, drawBuffers: U, useProgram: dt,
    setBlending: he, setMaterial: Ze, setFlipSided: Ie, setCullFace: M, setLineWidth: g,
    setPolygonOffset: N, setScissorTest: $, activeTexture: j, bindTexture: J, unbindTexture: fe,
    compressedTexImage2D: ae, compressedTexImage3D: ce, texImage2D: ge, texImage3D: ue,
    updateUBOMapping: Je, uniformBlockBinding: Oe, texStorage2D: Ge, texStorage3D: Ae,
    texSubImage2D: Se, texSubImage3D: Ne, compressedTexSubImage2D: K, compressedTexSubImage3D: Xe,
    scissor: De, viewport: ke, reset: te } }

function Cd(i, e, t, n, r, s, o) { const a = r.isWebGL2,
    l = e.has("WEBGL_multisampled_render_to_texture") ? e.get(
      "WEBGL_multisampled_render_to_texture") : null,
    c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    h = new WeakMap; let f; const p = new WeakMap; let m = !1; try { m = typeof OffscreenCanvas <
      "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null } catch {}

  function v(M, g) { return m ? new OffscreenCanvas(M, g) : Qi("canvas") }

  function _(M, g, N, $) { let j = 1; if ((M.width > $ || M.height > $) && (j = $ / Math.max(M
        .width, M.height)), j < 1 || g === !0)
      if (typeof HTMLImageElement < "u" && M instanceof HTMLImageElement ||
        typeof HTMLCanvasElement < "u" && M instanceof HTMLCanvasElement || typeof ImageBitmap <
        "u" && M instanceof ImageBitmap) { const J = g ? Jr : Math.floor,
          fe = J(j * M.width),
          ae = J(j * M.height);
        f === void 0 && (f = v(fe, ae)); const ce = N ? v(fe, ae) : f; return ce.width = fe, ce
          .height = ae, ce.getContext("2d").drawImage(M, 0, 0, fe, ae), console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" + M.width + "x" + M.height +
            ") to (" + fe + "x" + ae + ")."), ce } else return "data" in M && console.warn(
        "THREE.WebGLRenderer: Image in DataTexture is too big (" + M.width + "x" + M.height +
        ")."), M; return M }

  function d(M) { return Ks(M.width) && Ks(M.height) }

  function u(M) { return a ? !1 : M.wrapS !== Ft || M.wrapT !== Ft || M.minFilter !== _t && M
      .minFilter !== Ct }

  function y(M, g) { return M.generateMipmaps && g && M.minFilter !== _t && M.minFilter !== Ct }

  function E(M) { i.generateMipmap(M) }

  function A(M, g, N, $, j = !1) { if (a === !1) return g; if (M !== null) { if (i[M] !== void 0)
        return i[M];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + M +
        "'") } let J = g; if (g === i.RED && (N === i.FLOAT && (J = i.R32F), N === i.HALF_FLOAT && (
        J = i.R16F), N === i.UNSIGNED_BYTE && (J = i.R8)), g === i.RED_INTEGER && (N === i
        .UNSIGNED_BYTE && (J = i.R8UI), N === i.UNSIGNED_SHORT && (J = i.R16UI), N === i
        .UNSIGNED_INT && (J = i.R32UI), N === i.BYTE && (J = i.R8I), N === i.SHORT && (J = i.R16I),
        N === i.INT && (J = i.R32I)), g === i.RG && (N === i.FLOAT && (J = i.RG32F), N === i
        .HALF_FLOAT && (J = i.RG16F), N === i.UNSIGNED_BYTE && (J = i.RG8)), g === i.RGBA) { const
        fe = j ? ji : We.getTransfer($);
      N === i.FLOAT && (J = i.RGBA32F), N === i.HALF_FLOAT && (J = i.RGBA16F), N === i
        .UNSIGNED_BYTE && (J = fe === je ? i.SRGB8_ALPHA8 : i.RGBA8), N === i
        .UNSIGNED_SHORT_4_4_4_4 && (J = i.RGBA4), N === i.UNSIGNED_SHORT_5_5_5_1 && (J = i
        .RGB5_A1) } return (J === i.R16F || J === i.R32F || J === i.RG16F || J === i.RG32F || J ===
      i.RGBA16F || J === i.RGBA32F) && e.get("EXT_color_buffer_float"), J }

  function L(M, g, N) { return y(M, N) === !0 || M.isFramebufferTexture && M.minFilter !== _t && M
      .minFilter !== Ct ? Math.log2(Math.max(g.width, g.height)) + 1 : M.mipmaps !== void 0 && M
      .mipmaps.length > 0 ? M.mipmaps.length : M.isCompressedTexture && Array.isArray(M.image) ? g
      .mipmaps.length : 1 }

  function R(M) { return M === _t || M === xs || M === fr ? i.NEAREST : i.LINEAR }

  function w(M) { const g = M.target;
    g.removeEventListener("dispose", w), S(g), g.isVideoTexture && h.delete(g) }

  function Z(M) { const g = M.target;
    g.removeEventListener("dispose", Z), H(g) }

  function S(M) { const g = n.get(M); if (g.__webglInit === void 0) return; const N = M.source,
      $ = p.get(N); if ($) { const j = $[g.__cacheKey];
      j.usedTimes--, j.usedTimes === 0 && T(M), Object.keys($).length === 0 && p.delete(N) } n
      .remove(M) }

  function T(M) { const g = n.get(M);
    i.deleteTexture(g.__webglTexture); const N = M.source,
      $ = p.get(N);
    delete $[g.__cacheKey], o.memory.textures-- }

  function H(M) { const g = M.texture,
      N = n.get(M),
      $ = n.get(g); if ($.__webglTexture !== void 0 && (i.deleteTexture($.__webglTexture), o.memory
        .textures--), M.depthTexture && M.depthTexture.dispose(), M.isWebGLCubeRenderTarget)
      for (let j = 0; j < 6; j++) { if (Array.isArray(N.__webglFramebuffer[j]))
          for (let J = 0; J < N.__webglFramebuffer[j].length; J++) i.deleteFramebuffer(N
            .__webglFramebuffer[j][J]);
        else i.deleteFramebuffer(N.__webglFramebuffer[j]);
        N.__webglDepthbuffer && i.deleteRenderbuffer(N.__webglDepthbuffer[j]) } else { if (Array
          .isArray(N.__webglFramebuffer))
          for (let j = 0; j < N.__webglFramebuffer.length; j++) i.deleteFramebuffer(N
            .__webglFramebuffer[j]);
        else i.deleteFramebuffer(N.__webglFramebuffer); if (N.__webglDepthbuffer && i
          .deleteRenderbuffer(N.__webglDepthbuffer), N.__webglMultisampledFramebuffer && i
          .deleteFramebuffer(N.__webglMultisampledFramebuffer), N.__webglColorRenderbuffer)
          for (let j = 0; j < N.__webglColorRenderbuffer.length; j++) N.__webglColorRenderbuffer[
            j] && i.deleteRenderbuffer(N.__webglColorRenderbuffer[j]);
        N.__webglDepthRenderbuffer && i.deleteRenderbuffer(N.__webglDepthRenderbuffer) }
    if (M.isWebGLMultipleRenderTargets)
      for (let j = 0, J = g.length; j < J; j++) { const fe = n.get(g[j]);
        fe.__webglTexture && (i.deleteTexture(fe.__webglTexture), o.memory.textures--), n.remove(g[
          j]) } n.remove(g), n.remove(M) } let k = 0;

  function ie() { k = 0 }

  function C() { const M = k; return M >= r.maxTextures && console.warn(
      "THREE.WebGLTextures: Trying to use " + M + " texture units while this GPU supports only " +
      r.maxTextures), k += 1, M }

  function B(M) { const g = []; return g.push(M.wrapS), g.push(M.wrapT), g.push(M.wrapR || 0), g
      .push(M.magFilter), g.push(M.minFilter), g.push(M.anisotropy), g.push(M.internalFormat), g
      .push(M.format), g.push(M.type), g.push(M.generateMipmaps), g.push(M.premultiplyAlpha), g
      .push(M.flipY), g.push(M.unpackAlignment), g.push(M.colorSpace), g.join() }

  function G(M, g) { const N = n.get(M); if (M.isVideoTexture && Ze(M), M.isRenderTargetTexture ===
      !1 && M.version > 0 && N.__version !== M.version) { const $ = M.image; if ($ === null) console
        .warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if ($.complete === !1) console.warn(
        "THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else { oe(N, M, g); return } } t.bindTexture(i.TEXTURE_2D, N.__webglTexture, i.TEXTURE0 + g) }

  function X(M, g) { const N = n.get(M); if (M.version > 0 && N.__version !== M.version) { oe(N, M,
        g); return } t.bindTexture(i.TEXTURE_2D_ARRAY, N.__webglTexture, i.TEXTURE0 + g) }

  function V(M, g) { const N = n.get(M); if (M.version > 0 && N.__version !== M.version) { oe(N, M,
        g); return } t.bindTexture(i.TEXTURE_3D, N.__webglTexture, i.TEXTURE0 + g) }

  function W(M, g) { const N = n.get(M); if (M.version > 0 && N.__version !== M.version) { me(N, M,
        g); return } t.bindTexture(i.TEXTURE_CUBE_MAP, N.__webglTexture, i.TEXTURE0 + g) } const
    q = {
      [Kr]: i.REPEAT, [Ft]: i.CLAMP_TO_EDGE, [jr]: i.MIRRORED_REPEAT },
    Q = {
      [_t]: i.NEAREST, [xs]: i.NEAREST_MIPMAP_NEAREST, [fr]: i.NEAREST_MIPMAP_LINEAR, [Ct]: i
        .LINEAR, [ul]: i.LINEAR_MIPMAP_NEAREST, [fi]: i.LINEAR_MIPMAP_LINEAR },
    ee = {
      [Tl]: i.NEVER, [Cl]: i.ALWAYS, [yl]: i.LESS, [Qa]: i.LEQUAL, [Al]: i.EQUAL, [Rl]: i.GEQUAL, [
        bl
      ]: i.GREATER, [wl]: i.NOTEQUAL };

  function z(M, g, N) { if (N ? (i.texParameteri(M, i.TEXTURE_WRAP_S, q[g.wrapS]), i.texParameteri(
          M, i.TEXTURE_WRAP_T, q[g.wrapT]), (M === i.TEXTURE_3D || M === i.TEXTURE_2D_ARRAY) && i
        .texParameteri(M, i.TEXTURE_WRAP_R, q[g.wrapR]), i.texParameteri(M, i.TEXTURE_MAG_FILTER, Q[
          g.magFilter]), i.texParameteri(M, i.TEXTURE_MIN_FILTER, Q[g.minFilter])) : (i
        .texParameteri(M, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(M, i.TEXTURE_WRAP_T, i
          .CLAMP_TO_EDGE), (M === i.TEXTURE_3D || M === i.TEXTURE_2D_ARRAY) && i.texParameteri(M, i
          .TEXTURE_WRAP_R, i.CLAMP_TO_EDGE), (g.wrapS !== Ft || g.wrapT !== Ft) && console.warn(
          "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
          ), i.texParameteri(M, i.TEXTURE_MAG_FILTER, R(g.magFilter)), i.texParameteri(M, i
          .TEXTURE_MIN_FILTER, R(g.minFilter)), g.minFilter !== _t && g.minFilter !== Ct && console
        .warn(
          "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
          )), g.compareFunction && (i.texParameteri(M, i.TEXTURE_COMPARE_MODE, i
        .COMPARE_REF_TO_TEXTURE), i.texParameteri(M, i.TEXTURE_COMPARE_FUNC, ee[g
        .compareFunction])), e.has("EXT_texture_filter_anisotropic") === !0) { const $ = e.get(
        "EXT_texture_filter_anisotropic"); if (g.magFilter === _t || g.minFilter !== fr && g
        .minFilter !== fi || g.type === dn && e.has("OES_texture_float_linear") === !1 || a === !
        1 && g.type === tn && e.has("OES_texture_half_float_linear") === !1) return;
      (g.anisotropy > 1 || n.get(g).__currentAnisotropy) && (i.texParameterf(M, $
          .TEXTURE_MAX_ANISOTROPY_EXT, Math.min(g.anisotropy, r.getMaxAnisotropy())), n.get(g)
        .__currentAnisotropy = g.anisotropy) } }

  function Y(M, g) { let N = !1;
    M.__webglInit === void 0 && (M.__webglInit = !0, g.addEventListener("dispose", w)); const $ = g
      .source; let j = p.get($);
    j === void 0 && (j = {}, p.set($, j)); const J = B(g); if (J !== M.__cacheKey) { j[J] ===
        void 0 && (j[J] = { texture: i.createTexture(), usedTimes: 0 }, o.memory.textures++, N = !
        0), j[J].usedTimes++; const fe = j[M.__cacheKey];
      fe !== void 0 && (j[M.__cacheKey].usedTimes--, fe.usedTimes === 0 && T(g)), M.__cacheKey = J,
        M.__webglTexture = j[J].texture } return N }

  function oe(M, g, N) { let $ = i.TEXTURE_2D;
    (g.isDataArrayTexture || g.isCompressedArrayTexture) && ($ = i.TEXTURE_2D_ARRAY), g
      .isData3DTexture && ($ = i.TEXTURE_3D); const j = Y(M, g),
      J = g.source;
    t.bindTexture($, M.__webglTexture, i.TEXTURE0 + N); const fe = n.get(J); if (J.version !== fe
      .__version || j === !0) { t.activeTexture(i.TEXTURE0 + N); const ae = We.getPrimaries(We
          .workingColorSpace),
        ce = g.colorSpace === Lt ? null : We.getPrimaries(g.colorSpace),
        Se = g.colorSpace === Lt || ae === ce ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        g.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment), i.pixelStorei(i
        .UNPACK_COLORSPACE_CONVERSION_WEBGL, Se); const Ne = u(g) && d(g.image) === !1; let K = _(g
        .image, Ne, !1, r.maxTextureSize);
      K = Ie(g, K); const Xe = d(K) || a,
        Ge = s.convert(g.format, g.colorSpace); let Ae = s.convert(g.type),
        ge = A(g.internalFormat, Ge, Ae, g.colorSpace, g.isVideoTexture);
      z($, g, Xe); let ue; const De = g.mipmaps,
        ke = a && g.isVideoTexture !== !0 && ge !== $a,
        Je = fe.__version === void 0 || j === !0,
        Oe = L(g, K, Xe); if (g.isDepthTexture) ge = i.DEPTH_COMPONENT, a ? g.type === dn ? ge = i
        .DEPTH_COMPONENT32F : g.type === fn ? ge = i.DEPTH_COMPONENT24 : g.type === wn ? ge = i
        .DEPTH24_STENCIL8 : ge = i.DEPTH_COMPONENT16 : g.type === dn && console.error(
          "WebGLRenderer: Floating point depth texture requires WebGL2."), g.format === Rn && ge ===
        i.DEPTH_COMPONENT && g.type !== ns && g.type !== fn && (console.warn(
          "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
          ), g.type = fn, Ae = s.convert(g.type)), g.format === Jn && ge === i.DEPTH_COMPONENT && (
          ge = i.DEPTH_STENCIL, g.type !== wn && (console.warn(
              "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."), g
            .type = wn, Ae = s.convert(g.type))), Je && (ke ? t.texStorage2D(i.TEXTURE_2D, 1, ge, K
          .width, K.height) : t.texImage2D(i.TEXTURE_2D, 0, ge, K.width, K.height, 0, Ge, Ae,
          null));
      else if (g.isDataTexture)
        if (De.length > 0 && Xe) { ke && Je && t.texStorage2D(i.TEXTURE_2D, Oe, ge, De[0].width, De[
            0].height); for (let te = 0, b = De.length; te < b; te++) ue = De[te], ke ? t
            .texSubImage2D(i.TEXTURE_2D, te, 0, 0, ue.width, ue.height, Ge, Ae, ue.data) : t
            .texImage2D(i.TEXTURE_2D, te, ge, ue.width, ue.height, 0, Ge, Ae, ue.data);
          g.generateMipmaps = !1 } else ke ? (Je && t.texStorage2D(i.TEXTURE_2D, Oe, ge, K.width, K
            .height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, K.width, K.height, Ge, Ae, K.data)) : t
          .texImage2D(i.TEXTURE_2D, 0, ge, K.width, K.height, 0, Ge, Ae, K.data);
      else if (g.isCompressedTexture)
        if (g.isCompressedArrayTexture) { ke && Je && t.texStorage3D(i.TEXTURE_2D_ARRAY, Oe, ge, De[
            0].width, De[0].height, K.depth); for (let te = 0, b = De.length; te < b; te++) ue = De[
              te], g.format !== Ot ? Ge !== null ? ke ? t.compressedTexSubImage3D(i
              .TEXTURE_2D_ARRAY, te, 0, 0, 0, ue.width, ue.height, K.depth, Ge, ue.data, 0, 0) : t
            .compressedTexImage3D(i.TEXTURE_2D_ARRAY, te, ge, ue.width, ue.height, K.depth, 0, ue
              .data, 0, 0) : console.warn(
              "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
              ) : ke ? t.texSubImage3D(i.TEXTURE_2D_ARRAY, te, 0, 0, 0, ue.width, ue.height, K
              .depth, Ge, Ae, ue.data) : t.texImage3D(i.TEXTURE_2D_ARRAY, te, ge, ue.width, ue
              .height, K.depth, 0, Ge, Ae, ue.data) } else { ke && Je && t.texStorage2D(i
            .TEXTURE_2D, Oe, ge, De[0].width, De[0].height); for (let te = 0, b = De.length; te <
            b; te++) ue = De[te], g.format !== Ot ? Ge !== null ? ke ? t.compressedTexSubImage2D(i
              .TEXTURE_2D, te, 0, 0, ue.width, ue.height, Ge, ue.data) : t.compressedTexImage2D(i
              .TEXTURE_2D, te, ge, ue.width, ue.height, 0, ue.data) : console.warn(
              "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
              ) : ke ? t.texSubImage2D(i.TEXTURE_2D, te, 0, 0, ue.width, ue.height, Ge, Ae, ue
            .data) : t.texImage2D(i.TEXTURE_2D, te, ge, ue.width, ue.height, 0, Ge, Ae, ue
            .data) } else if (g.isDataArrayTexture) ke ? (Je && t.texStorage3D(i.TEXTURE_2D_ARRAY,
        Oe, ge, K.width, K.height, K.depth), t.texSubImage3D(i.TEXTURE_2D_ARRAY, 0, 0, 0, 0, K
        .width, K.height, K.depth, Ge, Ae, K.data)) : t.texImage3D(i.TEXTURE_2D_ARRAY, 0, ge, K
        .width, K.height, K.depth, 0, Ge, Ae, K.data);
      else if (g.isData3DTexture) ke ? (Je && t.texStorage3D(i.TEXTURE_3D, Oe, ge, K.width, K
        .height, K.depth), t.texSubImage3D(i.TEXTURE_3D, 0, 0, 0, 0, K.width, K.height, K.depth,
        Ge, Ae, K.data)) : t.texImage3D(i.TEXTURE_3D, 0, ge, K.width, K.height, K.depth, 0, Ge,
        Ae, K.data);
      else if (g.isFramebufferTexture) { if (Je)
          if (ke) t.texStorage2D(i.TEXTURE_2D, Oe, ge, K.width, K.height);
          else { let te = K.width,
              b = K.height; for (let re = 0; re < Oe; re++) t.texImage2D(i.TEXTURE_2D, re, ge, te,
              b, 0, Ge, Ae, null), te >>= 1, b >>= 1 } } else if (De.length > 0 && Xe) { ke && Je &&
          t.texStorage2D(i.TEXTURE_2D, Oe, ge, De[0].width, De[0].height); for (let te = 0, b = De
            .length; te < b; te++) ue = De[te], ke ? t.texSubImage2D(i.TEXTURE_2D, te, 0, 0, Ge, Ae,
          ue) : t.texImage2D(i.TEXTURE_2D, te, ge, Ge, Ae, ue);
        g.generateMipmaps = !1 } else ke ? (Je && t.texStorage2D(i.TEXTURE_2D, Oe, ge, K.width, K
        .height), t.texSubImage2D(i.TEXTURE_2D, 0, 0, 0, Ge, Ae, K)) : t.texImage2D(i.TEXTURE_2D,
        0, ge, Ge, Ae, K);
      y(g, Xe) && E($), fe.__version = J.version, g.onUpdate && g.onUpdate(g) } M.__version = g
      .version }

  function me(M, g, N) { if (g.image.length !== 6) return; const $ = Y(M, g),
      j = g.source;
    t.bindTexture(i.TEXTURE_CUBE_MAP, M.__webglTexture, i.TEXTURE0 + N); const J = n.get(j); if (j
      .version !== J.__version || $ === !0) { t.activeTexture(i.TEXTURE0 + N); const fe = We
        .getPrimaries(We.workingColorSpace),
        ae = g.colorSpace === Lt ? null : We.getPrimaries(g.colorSpace),
        ce = g.colorSpace === Lt || fe === ae ? i.NONE : i.BROWSER_DEFAULT_WEBGL;
      i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL, g.flipY), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
        g.premultiplyAlpha), i.pixelStorei(i.UNPACK_ALIGNMENT, g.unpackAlignment), i.pixelStorei(i
        .UNPACK_COLORSPACE_CONVERSION_WEBGL, ce); const Se = g.isCompressedTexture || g.image[0]
        .isCompressedTexture,
        Ne = g.image[0] && g.image[0].isDataTexture,
        K = []; for (let te = 0; te < 6; te++) !Se && !Ne ? K[te] = _(g.image[te], !1, !0, r
        .maxCubemapSize) : K[te] = Ne ? g.image[te].image : g.image[te], K[te] = Ie(g, K[te]); const
        Xe = K[0],
        Ge = d(Xe) || a,
        Ae = s.convert(g.format, g.colorSpace),
        ge = s.convert(g.type),
        ue = A(g.internalFormat, Ae, ge, g.colorSpace),
        De = a && g.isVideoTexture !== !0,
        ke = J.__version === void 0 || $ === !0; let Je = L(g, Xe, Ge);
      z(i.TEXTURE_CUBE_MAP, g, Ge); let Oe; if (Se) { De && ke && t.texStorage2D(i.TEXTURE_CUBE_MAP,
          Je, ue, Xe.width, Xe.height); for (let te = 0; te < 6; te++) { Oe = K[te].mipmaps; for (
            let b = 0; b < Oe.length; b++) { const re = Oe[b];
            g.format !== Ot ? Ae !== null ? De ? t.compressedTexSubImage2D(i
                .TEXTURE_CUBE_MAP_POSITIVE_X + te, b, 0, 0, re.width, re.height, Ae, re.data) : t
              .compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, b, ue, re.width, re.height,
                0, re.data) : console.warn(
                "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                ) : De ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, b, 0, 0, re.width, re
                .height, Ae, ge, re.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, b, ue,
                re.width, re.height, 0, Ae, ge, re.data) } } } else { Oe = g.mipmaps, De && ke && (
          Oe.length > 0 && Je++, t.texStorage2D(i.TEXTURE_CUBE_MAP, Je, ue, K[0].width, K[0]
            .height)); for (let te = 0; te < 6; te++)
          if (Ne) { De ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, 0, 0, K[te].width,
              K[te].height, Ae, ge, K[te].data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te,
              0, ue, K[te].width, K[te].height, 0, Ae, ge, K[te].data); for (let b = 0; b < Oe
              .length; b++) { const se = Oe[b].image[te].image;
              De ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, b + 1, 0, 0, se.width, se
                .height, Ae, ge, se.data) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, b +
                1, ue, se.width, se.height, 0, Ae, ge, se.data) } } else { De ? t.texSubImage2D(i
              .TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, 0, 0, Ae, ge, K[te]) : t.texImage2D(i
              .TEXTURE_CUBE_MAP_POSITIVE_X + te, 0, ue, Ae, ge, K[te]); for (let b = 0; b < Oe
              .length; b++) { const re = Oe[b];
              De ? t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, b + 1, 0, 0, Ae, ge, re
                .image[te]) : t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X + te, b + 1, ue, Ae, ge,
                re.image[te]) } } } y(g, Ge) && E(i.TEXTURE_CUBE_MAP), J.__version = j.version, g
        .onUpdate && g.onUpdate(g) } M.__version = g.version }

  function pe(M, g, N, $, j, J) { const fe = s.convert(N.format, N.colorSpace),
      ae = s.convert(N.type),
      ce = A(N.internalFormat, fe, ae, N.colorSpace); if (!n.get(g).__hasExternalTextures) { const
        Ne = Math.max(1, g.width >> J),
        K = Math.max(1, g.height >> J);
      j === i.TEXTURE_3D || j === i.TEXTURE_2D_ARRAY ? t.texImage3D(j, J, ce, Ne, K, g.depth, 0, fe,
        ae, null) : t.texImage2D(j, J, ce, Ne, K, 0, fe, ae, null) } t.bindFramebuffer(i
      .FRAMEBUFFER, M), he(g) ? l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER, $, j, n.get(N)
      .__webglTexture, 0, be(g)) : (j === i.TEXTURE_2D || j >= i.TEXTURE_CUBE_MAP_POSITIVE_X &&
      j <= i.TEXTURE_CUBE_MAP_NEGATIVE_Z) && i.framebufferTexture2D(i.FRAMEBUFFER, $, j, n.get(N)
      .__webglTexture, J), t.bindFramebuffer(i.FRAMEBUFFER, null) }

  function Re(M, g, N) { if (i.bindRenderbuffer(i.RENDERBUFFER, M), g.depthBuffer && !g
      .stencilBuffer) { let $ = a === !0 ? i.DEPTH_COMPONENT24 : i.DEPTH_COMPONENT16; if (N || he(
        g)) { const j = g.depthTexture;
        j && j.isDepthTexture && (j.type === dn ? $ = i.DEPTH_COMPONENT32F : j.type === fn && ($ = i
          .DEPTH_COMPONENT24)); const J = be(g);
        he(g) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, J, $, g.width, g.height) : i
          .renderbufferStorageMultisample(i.RENDERBUFFER, J, $, g.width, g.height) } else i
        .renderbufferStorage(i.RENDERBUFFER, $, g.width, g.height);
      i.framebufferRenderbuffer(i.FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.RENDERBUFFER, M) } else if (g
      .depthBuffer && g.stencilBuffer) { const $ = be(g);
      N && he(g) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, $, i.DEPTH24_STENCIL8, g
        .width, g.height) : he(g) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, $, i
        .DEPTH24_STENCIL8, g.width, g.height) : i.renderbufferStorage(i.RENDERBUFFER, i
        .DEPTH_STENCIL, g.width, g.height), i.framebufferRenderbuffer(i.FRAMEBUFFER, i
        .DEPTH_STENCIL_ATTACHMENT, i.RENDERBUFFER, M) } else { const $ = g
        .isWebGLMultipleRenderTargets === !0 ? g.texture : [g.texture]; for (let j = 0; j < $
        .length; j++) { const J = $[j],
          fe = s.convert(J.format, J.colorSpace),
          ae = s.convert(J.type),
          ce = A(J.internalFormat, fe, ae, J.colorSpace),
          Se = be(g);
        N && he(g) === !1 ? i.renderbufferStorageMultisample(i.RENDERBUFFER, Se, ce, g.width, g
          .height) : he(g) ? l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER, Se, ce, g.width,
          g.height) : i.renderbufferStorage(i.RENDERBUFFER, ce, g.width, g.height) } } i
      .bindRenderbuffer(i.RENDERBUFFER, null) }

  function Le(M, g) { if (g && g.isWebGLCubeRenderTarget) throw new Error(
      "Depth Texture with cube render targets is not supported"); if (t.bindFramebuffer(i
        .FRAMEBUFFER, M), !(g.depthTexture && g.depthTexture.isDepthTexture)) throw new Error(
      "renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    (!n.get(g.depthTexture).__webglTexture || g.depthTexture.image.width !== g.width || g
      .depthTexture.image.height !== g.height) && (g.depthTexture.image.width = g.width, g
      .depthTexture.image.height = g.height, g.depthTexture.needsUpdate = !0), G(g.depthTexture,
    0); const $ = n.get(g.depthTexture).__webglTexture,
      j = be(g); if (g.depthTexture.format === Rn) he(g) ? l.framebufferTexture2DMultisampleEXT(i
      .FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0, j) : i.framebufferTexture2D(i
      .FRAMEBUFFER, i.DEPTH_ATTACHMENT, i.TEXTURE_2D, $, 0);
    else if (g.depthTexture.format === Jn) he(g) ? l.framebufferTexture2DMultisampleEXT(i
      .FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0, j) : i.framebufferTexture2D(i
      .FRAMEBUFFER, i.DEPTH_STENCIL_ATTACHMENT, i.TEXTURE_2D, $, 0);
    else throw new Error("Unknown depthTexture format") }

  function Ee(M) { const g = n.get(M),
      N = M.isWebGLCubeRenderTarget === !0; if (M.depthTexture && !g
      .__autoAllocateDepthBuffer) { if (N) throw new Error(
        "target.depthTexture not supported in Cube render targets");
      Le(g.__webglFramebuffer, M) } else if (N) { g.__webglDepthbuffer = []; for (let $ = 0; $ <
        6; $++) t.bindFramebuffer(i.FRAMEBUFFER, g.__webglFramebuffer[$]), g.__webglDepthbuffer[$] =
        i.createRenderbuffer(), Re(g.__webglDepthbuffer[$], M, !1) } else t.bindFramebuffer(i
      .FRAMEBUFFER, g.__webglFramebuffer), g.__webglDepthbuffer = i.createRenderbuffer(), Re(g
      .__webglDepthbuffer, M, !1);
    t.bindFramebuffer(i.FRAMEBUFFER, null) }

  function Ve(M, g, N) { const $ = n.get(M);
    g !== void 0 && pe($.__webglFramebuffer, M, M.texture, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, 0),
      N !== void 0 && Ee(M) }

  function U(M) { const g = M.texture,
      N = n.get(M),
      $ = n.get(g);
    M.addEventListener("dispose", Z), M.isWebGLMultipleRenderTargets !== !0 && ($.__webglTexture ===
      void 0 && ($.__webglTexture = i.createTexture()), $.__version = g.version, o.memory
      .textures++); const j = M.isWebGLCubeRenderTarget === !0,
      J = M.isWebGLMultipleRenderTargets === !0,
      fe = d(M) || a; if (j) { N.__webglFramebuffer = []; for (let ae = 0; ae < 6; ae++)
        if (a && g.mipmaps && g.mipmaps.length > 0) { N.__webglFramebuffer[ae] = []; for (let ce =
            0; ce < g.mipmaps.length; ce++) N.__webglFramebuffer[ae][ce] = i
        .createFramebuffer() } else N.__webglFramebuffer[ae] = i.createFramebuffer() } else { if (
        a && g.mipmaps && g.mipmaps.length > 0) { N.__webglFramebuffer = []; for (let ae = 0; ae < g
          .mipmaps.length; ae++) N.__webglFramebuffer[ae] = i.createFramebuffer() } else N
        .__webglFramebuffer = i.createFramebuffer(); if (J)
        if (r.drawBuffers) { const ae = M.texture; for (let ce = 0, Se = ae.length; ce <
            Se; ce++) { const Ne = n.get(ae[ce]);
            Ne.__webglTexture === void 0 && (Ne.__webglTexture = i.createTexture(), o.memory
              .textures++) } } else console.warn(
          "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          ); if (a && M.samples > 0 && he(M) === !1) { const ae = J ? g : [g];
        N.__webglMultisampledFramebuffer = i.createFramebuffer(), N.__webglColorRenderbuffer = [], t
          .bindFramebuffer(i.FRAMEBUFFER, N.__webglMultisampledFramebuffer); for (let ce = 0; ce <
          ae.length; ce++) { const Se = ae[ce];
          N.__webglColorRenderbuffer[ce] = i.createRenderbuffer(), i.bindRenderbuffer(i
            .RENDERBUFFER, N.__webglColorRenderbuffer[ce]); const Ne = s.convert(Se.format, Se
              .colorSpace),
            K = s.convert(Se.type),
            Xe = A(Se.internalFormat, Ne, K, Se.colorSpace, M.isXRRenderTarget === !0),
            Ge = be(M);
          i.renderbufferStorageMultisample(i.RENDERBUFFER, Ge, Xe, M.width, M.height), i
            .framebufferRenderbuffer(i.FRAMEBUFFER, i.COLOR_ATTACHMENT0 + ce, i.RENDERBUFFER, N
              .__webglColorRenderbuffer[ce]) } i.bindRenderbuffer(i.RENDERBUFFER, null), M
          .depthBuffer && (N.__webglDepthRenderbuffer = i.createRenderbuffer(), Re(N
            .__webglDepthRenderbuffer, M, !0)), t.bindFramebuffer(i.FRAMEBUFFER, null) } } if (
      j) { t.bindTexture(i.TEXTURE_CUBE_MAP, $.__webglTexture), z(i.TEXTURE_CUBE_MAP, g, fe); for (
        let ae = 0; ae < 6; ae++)
        if (a && g.mipmaps && g.mipmaps.length > 0)
          for (let ce = 0; ce < g.mipmaps.length; ce++) pe(N.__webglFramebuffer[ae][ce], M, g, i
            .COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X + ae, ce);
        else pe(N.__webglFramebuffer[ae], M, g, i.COLOR_ATTACHMENT0, i.TEXTURE_CUBE_MAP_POSITIVE_X +
          ae, 0);
      y(g, fe) && E(i.TEXTURE_CUBE_MAP), t.unbindTexture() } else if (J) { const ae = M
      .texture; for (let ce = 0, Se = ae.length; ce < Se; ce++) { const Ne = ae[ce],
          K = n.get(Ne);
        t.bindTexture(i.TEXTURE_2D, K.__webglTexture), z(i.TEXTURE_2D, Ne, fe), pe(N
          .__webglFramebuffer, M, Ne, i.COLOR_ATTACHMENT0 + ce, i.TEXTURE_2D, 0), y(Ne, fe) && E(i
          .TEXTURE_2D) } t.unbindTexture() } else { let ae = i.TEXTURE_2D; if ((M
          .isWebGL3DRenderTarget || M.isWebGLArrayRenderTarget) && (a ? ae = M
          .isWebGL3DRenderTarget ? i.TEXTURE_3D : i.TEXTURE_2D_ARRAY : console.error(
            "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )), t.bindTexture(ae, $.__webglTexture), z(ae, g, fe), a && g.mipmaps && g.mipmaps
        .length > 0)
        for (let ce = 0; ce < g.mipmaps.length; ce++) pe(N.__webglFramebuffer[ce], M, g, i
          .COLOR_ATTACHMENT0, ae, ce);
      else pe(N.__webglFramebuffer, M, g, i.COLOR_ATTACHMENT0, ae, 0);
      y(g, fe) && E(ae), t.unbindTexture() } M.depthBuffer && Ee(M) }

  function dt(M) { const g = d(M) || a,
      N = M.isWebGLMultipleRenderTargets === !0 ? M.texture : [M.texture]; for (let $ = 0, j = N
        .length; $ < j; $++) { const J = N[$]; if (y(J, g)) { const fe = M.isWebGLCubeRenderTarget ?
          i.TEXTURE_CUBE_MAP : i.TEXTURE_2D,
          ae = n.get(J).__webglTexture;
        t.bindTexture(fe, ae), E(fe), t.unbindTexture() } } }

  function ve(M) { if (a && M.samples > 0 && he(M) === !1) { const g = M
        .isWebGLMultipleRenderTargets ? M.texture : [M.texture],
        N = M.width,
        $ = M.height; let j = i.COLOR_BUFFER_BIT; const J = [],
        fe = M.stencilBuffer ? i.DEPTH_STENCIL_ATTACHMENT : i.DEPTH_ATTACHMENT,
        ae = n.get(M),
        ce = M.isWebGLMultipleRenderTargets === !0; if (ce)
        for (let Se = 0; Se < g.length; Se++) t.bindFramebuffer(i.FRAMEBUFFER, ae
          .__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i
          .COLOR_ATTACHMENT0 + Se, i.RENDERBUFFER, null), t.bindFramebuffer(i.FRAMEBUFFER, ae
          .__webglFramebuffer), i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 +
          Se, i.TEXTURE_2D, null, 0);
      t.bindFramebuffer(i.READ_FRAMEBUFFER, ae.__webglMultisampledFramebuffer), t.bindFramebuffer(i
        .DRAW_FRAMEBUFFER, ae.__webglFramebuffer); for (let Se = 0; Se < g.length; Se++) { J.push(i
          .COLOR_ATTACHMENT0 + Se), M.depthBuffer && J.push(fe); const Ne = ae
          .__ignoreDepthValues !== void 0 ? ae.__ignoreDepthValues : !1; if (Ne === !1 && (M
            .depthBuffer && (j |= i.DEPTH_BUFFER_BIT), M.stencilBuffer && (j |= i
              .STENCIL_BUFFER_BIT)), ce && i.framebufferRenderbuffer(i.READ_FRAMEBUFFER, i
            .COLOR_ATTACHMENT0, i.RENDERBUFFER, ae.__webglColorRenderbuffer[Se]), Ne === !0 && (i
            .invalidateFramebuffer(i.READ_FRAMEBUFFER, [fe]), i.invalidateFramebuffer(i
              .DRAW_FRAMEBUFFER, [fe])), ce) { const K = n.get(g[Se]).__webglTexture;
          i.framebufferTexture2D(i.DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0, i.TEXTURE_2D, K, 0) } i
          .blitFramebuffer(0, 0, N, $, 0, 0, N, $, j, i.NEAREST), c && i.invalidateFramebuffer(i
            .READ_FRAMEBUFFER, J) } if (t.bindFramebuffer(i.READ_FRAMEBUFFER, null), t
        .bindFramebuffer(i.DRAW_FRAMEBUFFER, null), ce)
        for (let Se = 0; Se < g.length; Se++) { t.bindFramebuffer(i.FRAMEBUFFER, ae
            .__webglMultisampledFramebuffer), i.framebufferRenderbuffer(i.FRAMEBUFFER, i
            .COLOR_ATTACHMENT0 + Se, i.RENDERBUFFER, ae.__webglColorRenderbuffer[Se]); const Ne = n
            .get(g[Se]).__webglTexture;
          t.bindFramebuffer(i.FRAMEBUFFER, ae.__webglFramebuffer), i.framebufferTexture2D(i
            .DRAW_FRAMEBUFFER, i.COLOR_ATTACHMENT0 + Se, i.TEXTURE_2D, Ne, 0) } t.bindFramebuffer(i
          .DRAW_FRAMEBUFFER, ae.__webglMultisampledFramebuffer) } }

  function be(M) { return Math.min(r.maxSamples, M.samples) }

  function he(M) { const g = n.get(M); return a && M.samples > 0 && e.has(
      "WEBGL_multisampled_render_to_texture") === !0 && g.__useRenderToTexture !== !1 }

  function Ze(M) { const g = o.render.frame;
    h.get(M) !== g && (h.set(M, g), M.update()) }

  function Ie(M, g) { const N = M.colorSpace,
      $ = M.format,
      j = M.type; return M.isCompressedTexture === !0 || M.isVideoTexture === !0 || M.format ===
      Zr || N !== rn && N !== Lt && (We.getTransfer(N) === je ? a === !1 ? e.has("EXT_sRGB") === !
        0 && $ === Ot ? (M.format = Zr, M.minFilter = Ct, M.generateMipmaps = !1) : g = to
        .sRGBToLinear(g) : ($ !== Ot || j !== mn) && console.warn(
          "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
          ) : console.error("THREE.WebGLTextures: Unsupported texture color space:", N)), g } this
    .allocateTextureUnit = C, this.resetTextureUnits = ie, this.setTexture2D = G, this
    .setTexture2DArray = X, this.setTexture3D = V, this.setTextureCube = W, this.rebindTextures =
    Ve, this.setupRenderTarget = U, this.updateRenderTargetMipmap = dt, this
    .updateMultisampleRenderTarget = ve, this.setupDepthRenderbuffer = Ee, this
    .setupFrameBufferTexture = pe, this.useMultisampledRTT = he }

function Pd(i, e, t) { const n = t.isWebGL2;

  function r(s, o = Lt) { let a; const l = We.getTransfer(o); if (s === mn) return i
    .UNSIGNED_BYTE; if (s === qa) return i.UNSIGNED_SHORT_4_4_4_4; if (s === Ya) return i
      .UNSIGNED_SHORT_5_5_5_1; if (s === hl) return i.BYTE; if (s === fl) return i.SHORT; if (s ===
      ns) return i.UNSIGNED_SHORT; if (s === Xa) return i.INT; if (s === fn) return i
    .UNSIGNED_INT; if (s === dn) return i.FLOAT; if (s === tn) return n ? i.HALF_FLOAT : (a = e.get(
      "OES_texture_half_float"), a !== null ? a.HALF_FLOAT_OES : null); if (s === dl) return i
    .ALPHA; if (s === Ot) return i.RGBA; if (s === pl) return i.LUMINANCE; if (s === ml) return i
      .LUMINANCE_ALPHA; if (s === Rn) return i.DEPTH_COMPONENT; if (s === Jn) return i
    .DEPTH_STENCIL; if (s === Zr) return a = e.get("EXT_sRGB"), a !== null ? a.SRGB_ALPHA_EXT :
    null; if (s === gl) return i.RED; if (s === Ka) return i.RED_INTEGER; if (s === _l) return i
    .RG; if (s === ja) return i.RG_INTEGER; if (s === Za) return i.RGBA_INTEGER; if (s === dr ||
      s === pr || s === mr || s === gr)
      if (l === je)
        if (a = e.get("WEBGL_compressed_texture_s3tc_srgb"), a !== null) { if (s === dr) return a
            .COMPRESSED_SRGB_S3TC_DXT1_EXT; if (s === pr) return a
            .COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT; if (s === mr) return a
            .COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT; if (s === gr) return a
            .COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT } else return null;
    else if (a = e.get("WEBGL_compressed_texture_s3tc"), a !== null) { if (s === dr) return a
        .COMPRESSED_RGB_S3TC_DXT1_EXT; if (s === pr) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT; if (
        s === mr) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT; if (s === gr) return a
        .COMPRESSED_RGBA_S3TC_DXT5_EXT } else return null; if (s === Ms || s === Ss || s === Es ||
      s === Ts)
      if (a = e.get("WEBGL_compressed_texture_pvrtc"), a !== null) { if (s === Ms) return a
          .COMPRESSED_RGB_PVRTC_4BPPV1_IMG; if (s === Ss) return a
        .COMPRESSED_RGB_PVRTC_2BPPV1_IMG; if (s === Es) return a
        .COMPRESSED_RGBA_PVRTC_4BPPV1_IMG; if (s === Ts) return a
        .COMPRESSED_RGBA_PVRTC_2BPPV1_IMG } else return null; if (s === $a) return a = e.get(
      "WEBGL_compressed_texture_etc1"), a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null; if (s ===
      ys || s === As)
      if (a = e.get("WEBGL_compressed_texture_etc"), a !== null) { if (s === ys) return l === je ? a
          .COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2; if (s === As) return l === je ? a
          .COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : a.COMPRESSED_RGBA8_ETC2_EAC } else return null; if (
      s === bs || s === ws || s === Rs || s === Cs || s === Ps || s === Ls || s === Ds || s ===
      Us || s === Is || s === Ns || s === Fs || s === Os || s === Bs || s === zs)
      if (a = e.get("WEBGL_compressed_texture_astc"), a !== null) { if (s === bs) return l === je ?
          a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : a.COMPRESSED_RGBA_ASTC_4x4_KHR; if (s === ws)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : a
          .COMPRESSED_RGBA_ASTC_5x4_KHR; if (s === Rs) return l === je ? a
          .COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : a.COMPRESSED_RGBA_ASTC_5x5_KHR; if (s === Cs)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : a
          .COMPRESSED_RGBA_ASTC_6x5_KHR; if (s === Ps) return l === je ? a
          .COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : a.COMPRESSED_RGBA_ASTC_6x6_KHR; if (s === Ls)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : a
          .COMPRESSED_RGBA_ASTC_8x5_KHR; if (s === Ds) return l === je ? a
          .COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : a.COMPRESSED_RGBA_ASTC_8x6_KHR; if (s === Us)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : a
          .COMPRESSED_RGBA_ASTC_8x8_KHR; if (s === Is) return l === je ? a
          .COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : a.COMPRESSED_RGBA_ASTC_10x5_KHR; if (s === Ns)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : a
            .COMPRESSED_RGBA_ASTC_10x6_KHR; if (s === Fs) return l === je ? a
          .COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : a.COMPRESSED_RGBA_ASTC_10x8_KHR; if (s === Os)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : a
            .COMPRESSED_RGBA_ASTC_10x10_KHR; if (s === Bs) return l === je ? a
          .COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : a.COMPRESSED_RGBA_ASTC_12x10_KHR; if (s === zs)
          return l === je ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : a
            .COMPRESSED_RGBA_ASTC_12x12_KHR } else return null; if (s === _r || s === Gs || s ===
      Hs)
      if (a = e.get("EXT_texture_compression_bptc"), a !== null) { if (s === _r) return l === je ? a
          .COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : a.COMPRESSED_RGBA_BPTC_UNORM_EXT; if (s === Gs)
          return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT; if (s === Hs) return a
          .COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT } else return null; if (s === vl || s === Vs ||
      s === ks || s === Ws)
      if (a = e.get("EXT_texture_compression_rgtc"), a !== null) { if (s === _r) return a
          .COMPRESSED_RED_RGTC1_EXT; if (s === Vs) return a.COMPRESSED_SIGNED_RED_RGTC1_EXT; if (
          s === ks) return a.COMPRESSED_RED_GREEN_RGTC2_EXT; if (s === Ws) return a
          .COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT } else return null; return s === wn ? n ? i
      .UNSIGNED_INT_24_8 : (a = e.get("WEBGL_depth_texture"), a !== null ? a
        .UNSIGNED_INT_24_8_WEBGL : null) : i[s] !== void 0 ? i[s] :
    null } return { convert: r } } class Ld extends Pt { constructor(e = []) { super(), this
      .isArrayCamera = !0, this.cameras = e } } class Wi extends Tt { constructor() { super(), this
      .isGroup = !0, this.type = "Group" } }
const Dd = { type: "move" };
class Vr { constructor() { this._targetRay = null, this._grip = null, this._hand =
      null } getHandSpace() { return this._hand === null && (this._hand = new Wi, this._hand
        .matrixAutoUpdate = !1, this._hand.visible = !1, this._hand.joints = {}, this._hand
        .inputState = { pinching: !1 }), this._hand } getTargetRaySpace() { return this
        ._targetRay === null && (this._targetRay = new Wi, this._targetRay.matrixAutoUpdate = !1,
          this._targetRay.visible = !1, this._targetRay.hasLinearVelocity = !1, this._targetRay
          .linearVelocity = new D, this._targetRay.hasAngularVelocity = !1, this._targetRay
          .angularVelocity = new D), this._targetRay } getGripSpace() { return this._grip ===
        null && (this._grip = new Wi, this._grip.matrixAutoUpdate = !1, this._grip.visible = !1,
          this._grip.hasLinearVelocity = !1, this._grip.linearVelocity = new D, this._grip
          .hasAngularVelocity = !1, this._grip.angularVelocity = new D), this._grip } dispatchEvent(
      e) { return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !==
        null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e),
        this } connect(e) { if (e && e.hand) { const t = this._hand; if (t)
          for (const n of e.hand.values()) this._getHandJoint(t, n) } return this
    .dispatchEvent({ type: "connected", data: e }), this } disconnect(e) { return this
        .dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this
          ._targetRay.visible = !1), this._grip !== null && (this._grip.visible = !1), this
        ._hand !== null && (this._hand.visible = !1), this } update(e, t, n) { let r = null,
        s = null,
        o = null; const a = this._targetRay,
        l = this._grip,
        c = this._hand; if (e && t.session.visibilityState !== "visible-blurred") { if (c && e
          .hand) { o = !0; for (const _ of e.hand.values()) { const d = t.getJointPose(_, n),
              u = this._getHandJoint(c, _);
            d !== null && (u.matrix.fromArray(d.transform.matrix), u.matrix.decompose(u.position, u
                .rotation, u.scale), u.matrixWorldNeedsUpdate = !0, u.jointRadius = d.radius), u
              .visible = d !== null } const h = c.joints["index-finger-tip"],
            f = c.joints["thumb-tip"],
            p = h.position.distanceTo(f.position),
            m = .02,
            v = .005;
          c.inputState.pinching && p > m + v ? (c.inputState.pinching = !1, this
          .dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c
            .inputState.pinching && p <= m - v && (c.inputState.pinching = !0, this
          .dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this })) } else
          l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix
            .fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l
            .matrixWorldNeedsUpdate = !0, s.linearVelocity ? (l.hasLinearVelocity = !0, l
              .linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = !1, s
            .angularVelocity ? (l.hasAngularVelocity = !0, l.angularVelocity.copy(s
              .angularVelocity)) : l.hasAngularVelocity = !1));
        a !== null && (r = t.getPose(e.targetRaySpace, n), r === null && s !== null && (r = s),
          r !== null && (a.matrix.fromArray(r.transform.matrix), a.matrix.decompose(a.position, a
              .rotation, a.scale), a.matrixWorldNeedsUpdate = !0, r.linearVelocity ? (a
              .hasLinearVelocity = !0, a.linearVelocity.copy(r.linearVelocity)) : a
            .hasLinearVelocity = !1, r.angularVelocity ? (a.hasAngularVelocity = !0, a
              .angularVelocity.copy(r.angularVelocity)) : a.hasAngularVelocity = !1, this
            .dispatchEvent(Dd))) } return a !== null && (a.visible = r !== null), l !== null && (l
        .visible = s !== null), c !== null && (c.visible = o !== null), this } _getHandJoint(e,
    t) { if (e.joints[t.jointName] === void 0) { const n = new Wi;
        n.matrixAutoUpdate = !1, n.visible = !1, e.joints[t.jointName] = n, e.add(n) } return e
        .joints[t.jointName] } } class Ud extends ti { constructor(e, t) { super(); const n =
    this; let r = null,
      s = 1,
      o = null,
      a = "local-floor",
      l = 1,
      c = null,
      h = null,
      f = null,
      p = null,
      m = null,
      v = null; const _ = t.getContextAttributes(); let d = null,
      u = null; const y = [],
      E = [],
      A = new Pe; let L = null; const R = new Pt;
    R.layers.enable(1), R.viewport = new ct; const w = new Pt;
    w.layers.enable(2), w.viewport = new ct; const Z = [R, w],
      S = new Ld;
    S.layers.enable(1), S.layers.enable(2); let T = null,
      H = null;
    this.cameraAutoUpdate = !0, this.enabled = !1, this.isPresenting = !1, this.getController =
      function (z) { let Y = y[z]; return Y === void 0 && (Y = new Vr, y[z] = Y), Y
          .getTargetRaySpace() }, this.getControllerGrip = function (z) { let Y = y[
        z]; return Y === void 0 && (Y = new Vr, y[z] = Y), Y.getGripSpace() }, this.getHand =
      function (z) { let Y = y[z]; return Y === void 0 && (Y = new Vr, y[z] = Y), Y
      .getHandSpace() };

    function k(z) { const Y = E.indexOf(z.inputSource); if (Y === -1) return; const oe = y[Y];
      oe !== void 0 && (oe.update(z.inputSource, z.frame, c || o), oe.dispatchEvent({ type: z
          .type, data: z.inputSource })) }

    function ie() { r.removeEventListener("select", k), r.removeEventListener("selectstart", k), r
        .removeEventListener("selectend", k), r.removeEventListener("squeeze", k), r
        .removeEventListener("squeezestart", k), r.removeEventListener("squeezeend", k), r
        .removeEventListener("end", ie), r.removeEventListener("inputsourceschange", C); for (let
          z = 0; z < y.length; z++) { const Y = E[z];
        Y !== null && (E[z] = null, y[z].disconnect(Y)) } T = null, H = null, e.setRenderTarget(
        d), m = null, p = null, f = null, r = null, u = null, ee.stop(), n.isPresenting = !1, e
        .setPixelRatio(L), e.setSize(A.width, A.height, !1), n
      .dispatchEvent({ type: "sessionend" }) } this.setFramebufferScaleFactor = function (z) { s =
          z, n.isPresenting === !0 && console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.") }, this
      .setReferenceSpaceType = function (z) { a = z, n.isPresenting === !0 && console.warn(
          "THREE.WebXRManager: Cannot change reference space type while presenting.") }, this
      .getReferenceSpace = function () { return c || o }, this.setReferenceSpace = function (
      z) { c = z }, this.getBaseLayer = function () { return p !== null ? p : m }, this
      .getBinding = function () { return f }, this.getFrame = function () { return v }, this
      .getSession = function () { return r }, this.setSession = async function (z) { if (r = z,
            r !== null) { if (d = e.getRenderTarget(), r.addEventListener("select", k), r
              .addEventListener("selectstart", k), r.addEventListener("selectend", k), r
              .addEventListener("squeeze", k), r.addEventListener("squeezestart", k), r
              .addEventListener("squeezeend", k), r.addEventListener("end", ie), r
              .addEventListener("inputsourceschange", C), _.xrCompatible !== !0 && await t
              .makeXRCompatible(), L = e.getPixelRatio(), e.getSize(A), r.renderState.layers ===
              void 0 || e.capabilities.isWebGL2 === !1) { const Y = { antialias: r.renderState
                  .layers === void 0 ? _.antialias : !0, alpha: !0, depth: _.depth, stencil: _
                  .stencil, framebufferScaleFactor: s };
              m = new XRWebGLLayer(r, t, Y), r.updateRenderState({ baseLayer: m }), e
                .setPixelRatio(1), e.setSize(m.framebufferWidth, m.framebufferHeight, !1), u =
                new Bt(m.framebufferWidth, m.framebufferHeight, { format: Ot, type: mn,
                  colorSpace: e.outputColorSpace, stencilBuffer: _.stencil }) } else { let Y =
                null,
                oe = null,
                me = null;
              _.depth && (me = _.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, Y = _
                .stencil ? Jn : Rn, oe = _.stencil ? wn : fn); const pe = { colorFormat: t.RGBA8,
                depthFormat: me, scaleFactor: s };
              f = new XRWebGLBinding(r, t), p = f.createProjectionLayer(pe), r
            .updateRenderState({ layers: [p] }), e.setPixelRatio(1), e.setSize(p.textureWidth, p
                .textureHeight, !1), u = new Bt(p.textureWidth, p.textureHeight, { format: Ot,
                type: mn, depthTexture: new go(p.textureWidth, p.textureHeight, oe, void 0,
                  void 0, void 0, void 0, void 0, void 0, Y), stencilBuffer: _.stencil,
                colorSpace: e.outputColorSpace, samples: _.antialias ? 4 : 0 }); const Re = e
                .properties.get(u);
              Re.__ignoreDepthValues = p.ignoreDepthValues } u.isXRRenderTarget = !0, this
              .setFoveation(l), c = null, o = await r.requestReferenceSpace(a), ee.setContext(r),
              ee.start(), n.isPresenting = !0, n.dispatchEvent({ type: "sessionstart" }) } }, this
        .getEnvironmentBlendMode = function () { if (r !== null) return r.environmentBlendMode };

    function C(z) { for (let Y = 0; Y < z.removed.length; Y++) { const oe = z.removed[Y],
          me = E.indexOf(oe);
        me >= 0 && (E[me] = null, y[me].disconnect(oe)) } for (let Y = 0; Y < z.added
        .length; Y++) { const oe = z.added[Y]; let me = E.indexOf(oe); if (me === -1) { for (let
              Re = 0; Re < y.length; Re++)
            if (Re >= E.length) { E.push(oe), me = Re; break } else if (E[Re] === null) { E[Re] =
              oe, me = Re; break } if (me === -1) break } const pe = y[me];
        pe && pe.connect(oe) } } const B = new D,
      G = new D;

    function X(z, Y, oe) { B.setFromMatrixPosition(Y.matrixWorld), G.setFromMatrixPosition(oe
        .matrixWorld); const me = B.distanceTo(G),
        pe = Y.projectionMatrix.elements,
        Re = oe.projectionMatrix.elements,
        Le = pe[14] / (pe[10] - 1),
        Ee = pe[14] / (pe[10] + 1),
        Ve = (pe[9] + 1) / pe[5],
        U = (pe[9] - 1) / pe[5],
        dt = (pe[8] - 1) / pe[0],
        ve = (Re[8] + 1) / Re[0],
        be = Le * dt,
        he = Le * ve,
        Ze = me / (-dt + ve),
        Ie = Ze * -dt;
      Y.matrixWorld.decompose(z.position, z.quaternion, z.scale), z.translateX(Ie), z.translateZ(
          Ze), z.matrixWorld.compose(z.position, z.quaternion, z.scale), z.matrixWorldInverse
        .copy(z.matrixWorld).invert(); const M = Le + Ze,
        g = Ee + Ze,
        N = be - Ie,
        $ = he + (me - Ie),
        j = Ve * Ee / g * M,
        J = U * Ee / g * M;
      z.projectionMatrix.makePerspective(N, $, j, J, M, g), z.projectionMatrixInverse.copy(z
        .projectionMatrix).invert() }

    function V(z, Y) { Y === null ? z.matrixWorld.copy(z.matrix) : z.matrixWorld.multiplyMatrices(
        Y.matrixWorld, z.matrix), z.matrixWorldInverse.copy(z.matrixWorld).invert() } this
      .updateCamera = function (z) { if (r === null) return;
        S.near = w.near = R.near = z.near, S.far = w.far = R.far = z.far, (T !== S.near || H !== S
          .far) && (r.updateRenderState({ depthNear: S.near, depthFar: S.far }), T = S.near, H =
          S.far); const Y = z.parent,
          oe = S.cameras;
        V(S, Y); for (let me = 0; me < oe.length; me++) V(oe[me], Y);
        oe.length === 2 ? X(S, R, w) : S.projectionMatrix.copy(R.projectionMatrix), W(z, S, Y) };

    function W(z, Y, oe) { oe === null ? z.matrix.copy(Y.matrixWorld) : (z.matrix.copy(oe
          .matrixWorld), z.matrix.invert(), z.matrix.multiply(Y.matrixWorld)), z.matrix.decompose(
          z.position, z.quaternion, z.scale), z.updateMatrixWorld(!0), z.projectionMatrix.copy(Y
          .projectionMatrix), z.projectionMatrixInverse.copy(Y.projectionMatrixInverse), z
        .isPerspectiveCamera && (z.fov = $r * 2 * Math.atan(1 / z.projectionMatrix.elements[5]), z
          .zoom = 1) } this.getCamera = function () { return S }, this.getFoveation =
  function () { if (!(p === null && m === null)) return l }, this.setFoveation = function (
    z) { l = z, p !== null && (p.fixedFoveation = z), m !== null && m.fixedFoveation !==
        void 0 && (m.fixedFoveation = z) }; let q = null;

    function Q(z, Y) { if (h = Y.getViewerPose(c || o), v = Y, h !== null) { const oe = h.views;
        m !== null && (e.setRenderTargetFramebuffer(u, m.framebuffer), e.setRenderTarget(u)); let
          me = !1;
        oe.length !== S.cameras.length && (S.cameras.length = 0, me = !0); for (let pe = 0; pe <
          oe.length; pe++) { const Re = oe[pe]; let Le = null; if (m !== null) Le = m.getViewport(
            Re);
          else { const Ve = f.getViewSubImage(p, Re);
            Le = Ve.viewport, pe === 0 && (e.setRenderTargetTextures(u, Ve.colorTexture, p
              .ignoreDepthValues ? void 0 : Ve.depthStencilTexture), e.setRenderTarget(u)) } let
            Ee = Z[pe];
          Ee === void 0 && (Ee = new Pt, Ee.layers.enable(pe), Ee.viewport = new ct, Z[pe] = Ee),
            Ee.matrix.fromArray(Re.transform.matrix), Ee.matrix.decompose(Ee.position, Ee
              .quaternion, Ee.scale), Ee.projectionMatrix.fromArray(Re.projectionMatrix), Ee
            .projectionMatrixInverse.copy(Ee.projectionMatrix).invert(), Ee.viewport.set(Le.x, Le
              .y, Le.width, Le.height), pe === 0 && (S.matrix.copy(Ee.matrix), S.matrix.decompose(
              S.position, S.quaternion, S.scale)), me === !0 && S.cameras.push(Ee) } } for (let
          oe = 0; oe < y.length; oe++) { const me = E[oe],
          pe = y[oe];
        me !== null && pe !== void 0 && pe.update(me, Y, c || o) } q && q(z, Y), Y
        .detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: Y }), v = null } const
      ee = new po;
    ee.setAnimationLoop(Q), this.setAnimationLoop = function (z) { q = z }, this.dispose =
      function () {} } }

function Id(i, e) {
  function t(d, u) { d.matrixAutoUpdate === !0 && d.updateMatrix(), u.value.copy(d.matrix) }

  function n(d, u) { u.color.getRGB(d.fogColor.value, co(i)), u.isFog ? (d.fogNear.value = u.near, d
      .fogFar.value = u.far) : u.isFogExp2 && (d.fogDensity.value = u.density) }

  function r(d, u, y, E, A) { u.isMeshBasicMaterial || u.isMeshLambertMaterial ? s(d, u) : u
      .isMeshToonMaterial ? (s(d, u), f(d, u)) : u.isMeshPhongMaterial ? (s(d, u), h(d, u)) : u
      .isMeshStandardMaterial ? (s(d, u), p(d, u), u.isMeshPhysicalMaterial && m(d, u, A)) : u
      .isMeshMatcapMaterial ? (s(d, u), v(d, u)) : u.isMeshDepthMaterial ? s(d, u) : u
      .isMeshDistanceMaterial ? (s(d, u), _(d, u)) : u.isMeshNormalMaterial ? s(d, u) : u
      .isLineBasicMaterial ? (o(d, u), u.isLineDashedMaterial && a(d, u)) : u.isPointsMaterial ? l(
        d, u, y, E) : u.isSpriteMaterial ? c(d, u) : u.isShadowMaterial ? (d.color.value.copy(u
        .color), d.opacity.value = u.opacity) : u.isShaderMaterial && (u.uniformsNeedUpdate = !1) }

  function s(d, u) { d.opacity.value = u.opacity, u.color && d.diffuse.value.copy(u.color), u
      .emissive && d.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity), u.map && (
        d.map.value = u.map, t(u.map, d.mapTransform)), u.alphaMap && (d.alphaMap.value = u
        .alphaMap, t(u.alphaMap, d.alphaMapTransform)), u.bumpMap && (d.bumpMap.value = u.bumpMap,
        t(u.bumpMap, d.bumpMapTransform), d.bumpScale.value = u.bumpScale, u.side === St && (d
          .bumpScale.value *= -1)), u.normalMap && (d.normalMap.value = u.normalMap, t(u.normalMap,
          d.normalMapTransform), d.normalScale.value.copy(u.normalScale), u.side === St && d
        .normalScale.value.negate()), u.displacementMap && (d.displacementMap.value = u
        .displacementMap, t(u.displacementMap, d.displacementMapTransform), d.displacementScale
        .value = u.displacementScale, d.displacementBias.value = u.displacementBias), u
      .emissiveMap && (d.emissiveMap.value = u.emissiveMap, t(u.emissiveMap, d
        .emissiveMapTransform)), u.specularMap && (d.specularMap.value = u.specularMap, t(u
        .specularMap, d.specularMapTransform)), u.alphaTest > 0 && (d.alphaTest.value = u
      .alphaTest); const y = e.get(u).envMap; if (y && (d.envMap.value = y, d.flipEnvMap.value = y
        .isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1, d.reflectivity.value = u
        .reflectivity, d.ior.value = u.ior, d.refractionRatio.value = u.refractionRatio), u
      .lightMap) { d.lightMap.value = u.lightMap; const E = i._useLegacyLights === !0 ? Math.PI : 1;
      d.lightMapIntensity.value = u.lightMapIntensity * E, t(u.lightMap, d.lightMapTransform) } u
      .aoMap && (d.aoMap.value = u.aoMap, d.aoMapIntensity.value = u.aoMapIntensity, t(u.aoMap, d
        .aoMapTransform)) }

  function o(d, u) { d.diffuse.value.copy(u.color), d.opacity.value = u.opacity, u.map && (d.map
      .value = u.map, t(u.map, d.mapTransform)) }

  function a(d, u) { d.dashSize.value = u.dashSize, d.totalSize.value = u.dashSize + u.gapSize, d
      .scale.value = u.scale }

  function l(d, u, y, E) { d.diffuse.value.copy(u.color), d.opacity.value = u.opacity, d.size
      .value = u.size * y, d.scale.value = E * .5, u.map && (d.map.value = u.map, t(u.map, d
        .uvTransform)), u.alphaMap && (d.alphaMap.value = u.alphaMap, t(u.alphaMap, d
        .alphaMapTransform)), u.alphaTest > 0 && (d.alphaTest.value = u.alphaTest) }

  function c(d, u) { d.diffuse.value.copy(u.color), d.opacity.value = u.opacity, d.rotation.value =
      u.rotation, u.map && (d.map.value = u.map, t(u.map, d.mapTransform)), u.alphaMap && (d
        .alphaMap.value = u.alphaMap, t(u.alphaMap, d.alphaMapTransform)), u.alphaTest > 0 && (d
        .alphaTest.value = u.alphaTest) }

  function h(d, u) { d.specular.value.copy(u.specular), d.shininess.value = Math.max(u.shininess,
      1e-4) }

  function f(d, u) { u.gradientMap && (d.gradientMap.value = u.gradientMap) }

  function p(d, u) { d.metalness.value = u.metalness, u.metalnessMap && (d.metalnessMap.value = u
        .metalnessMap, t(u.metalnessMap, d.metalnessMapTransform)), d.roughness.value = u.roughness,
      u.roughnessMap && (d.roughnessMap.value = u.roughnessMap, t(u.roughnessMap, d
        .roughnessMapTransform)), e.get(u).envMap && (d.envMapIntensity.value = u.envMapIntensity) }

  function m(d, u, y) { d.ior.value = u.ior, u.sheen > 0 && (d.sheenColor.value.copy(u.sheenColor)
        .multiplyScalar(u.sheen), d.sheenRoughness.value = u.sheenRoughness, u.sheenColorMap && (d
          .sheenColorMap.value = u.sheenColorMap, t(u.sheenColorMap, d.sheenColorMapTransform)), u
        .sheenRoughnessMap && (d.sheenRoughnessMap.value = u.sheenRoughnessMap, t(u
          .sheenRoughnessMap, d.sheenRoughnessMapTransform))), u.clearcoat > 0 && (d.clearcoat
        .value = u.clearcoat, d.clearcoatRoughness.value = u.clearcoatRoughness, u.clearcoatMap && (
          d.clearcoatMap.value = u.clearcoatMap, t(u.clearcoatMap, d.clearcoatMapTransform)), u
        .clearcoatRoughnessMap && (d.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap, t(u
          .clearcoatRoughnessMap, d.clearcoatRoughnessMapTransform)), u.clearcoatNormalMap && (d
          .clearcoatNormalMap.value = u.clearcoatNormalMap, t(u.clearcoatNormalMap, d
            .clearcoatNormalMapTransform), d.clearcoatNormalScale.value.copy(u
          .clearcoatNormalScale), u.side === St && d.clearcoatNormalScale.value.negate())), u
      .iridescence > 0 && (d.iridescence.value = u.iridescence, d.iridescenceIOR.value = u
        .iridescenceIOR, d.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0], d
        .iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1], u.iridescenceMap && (d
          .iridescenceMap.value = u.iridescenceMap, t(u.iridescenceMap, d.iridescenceMapTransform)),
        u.iridescenceThicknessMap && (d.iridescenceThicknessMap.value = u.iridescenceThicknessMap,
          t(u.iridescenceThicknessMap, d.iridescenceThicknessMapTransform))), u.transmission > 0 &&
      (d.transmission.value = u.transmission, d.transmissionSamplerMap.value = y.texture, d
        .transmissionSamplerSize.value.set(y.width, y.height), u.transmissionMap && (d
          .transmissionMap.value = u.transmissionMap, t(u.transmissionMap, d
            .transmissionMapTransform)), d.thickness.value = u.thickness, u.thicknessMap && (d
          .thicknessMap.value = u.thicknessMap, t(u.thicknessMap, d.thicknessMapTransform)), d
        .attenuationDistance.value = u.attenuationDistance, d.attenuationColor.value.copy(u
          .attenuationColor)), u.anisotropy > 0 && (d.anisotropyVector.value.set(u.anisotropy * Math
          .cos(u.anisotropyRotation), u.anisotropy * Math.sin(u.anisotropyRotation)), u
        .anisotropyMap && (d.anisotropyMap.value = u.anisotropyMap, t(u.anisotropyMap, d
          .anisotropyMapTransform))), d.specularIntensity.value = u.specularIntensity, d
      .specularColor.value.copy(u.specularColor), u.specularColorMap && (d.specularColorMap.value =
        u.specularColorMap, t(u.specularColorMap, d.specularColorMapTransform)), u
      .specularIntensityMap && (d.specularIntensityMap.value = u.specularIntensityMap, t(u
        .specularIntensityMap, d.specularIntensityMapTransform)) }

  function v(d, u) { u.matcap && (d.matcap.value = u.matcap) }

  function _(d, u) { const y = e.get(u).light;
    d.referencePosition.value.setFromMatrixPosition(y.matrixWorld), d.nearDistance.value = y.shadow
      .camera.near, d.farDistance.value = y.shadow.camera.far } return { refreshFogUniforms: n,
    refreshMaterialUniforms: r } }

function Nd(i, e, t, n) { let r = {},
    s = {},
    o = []; const a = t.isWebGL2 ? i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS) : 0;

  function l(y, E) { const A = E.program;
    n.uniformBlockBinding(y, A) }

  function c(y, E) { let A = r[y.id];
    A === void 0 && (v(y), A = h(y), r[y.id] = A, y.addEventListener("dispose", d)); const L = E
      .program;
    n.updateUBOMapping(y, L); const R = e.render.frame;
    s[y.id] !== R && (p(y), s[y.id] = R) }

  function h(y) { const E = f();
    y.__bindingPointIndex = E; const A = i.createBuffer(),
      L = y.__size,
      R = y.usage; return i.bindBuffer(i.UNIFORM_BUFFER, A), i.bufferData(i.UNIFORM_BUFFER, L, R), i
      .bindBuffer(i.UNIFORM_BUFFER, null), i.bindBufferBase(i.UNIFORM_BUFFER, E, A), A }

  function f() { for (let y = 0; y < a; y++)
      if (o.indexOf(y) === -1) return o.push(y), y; return console.error(
      "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0 }

  function p(y) { const E = r[y.id],
      A = y.uniforms,
      L = y.__cache;
    i.bindBuffer(i.UNIFORM_BUFFER, E); for (let R = 0, w = A.length; R < w; R++) { const Z = Array
        .isArray(A[R]) ? A[R] : [A[R]]; for (let S = 0, T = Z.length; S < T; S++) { const H = Z[
        S]; if (m(H, R, S, L) === !0) { const k = H.__offset,
            ie = Array.isArray(H.value) ? H.value : [H.value]; let C = 0; for (let B = 0; B < ie
            .length; B++) { const G = ie[B],
              X = _(G);
            typeof G == "number" || typeof G == "boolean" ? (H.__data[0] = G, i.bufferSubData(i
              .UNIFORM_BUFFER, k + C, H.__data)) : G.isMatrix3 ? (H.__data[0] = G.elements[0], H
              .__data[1] = G.elements[1], H.__data[2] = G.elements[2], H.__data[3] = 0, H.__data[
                4] = G.elements[3], H.__data[5] = G.elements[4], H.__data[6] = G.elements[5], H
              .__data[7] = 0, H.__data[8] = G.elements[6], H.__data[9] = G.elements[7], H.__data[
                10] = G.elements[8], H.__data[11] = 0) : (G.toArray(H.__data, C), C += X.storage /
              Float32Array.BYTES_PER_ELEMENT) } i.bufferSubData(i.UNIFORM_BUFFER, k, H
          .__data) } } } i.bindBuffer(i.UNIFORM_BUFFER, null) }

  function m(y, E, A, L) { const R = y.value,
      w = E + "_" + A; if (L[w] === void 0) return typeof R == "number" || typeof R == "boolean" ?
      L[w] = R : L[w] = R.clone(), !0; { const Z = L[w]; if (typeof R == "number" || typeof R ==
        "boolean") { if (Z !== R) return L[w] = R, !0 } else if (Z.equals(R) === !1) return Z.copy(
        R), !0 } return !1 }

  function v(y) { const E = y.uniforms; let A = 0; const L = 16; for (let w = 0, Z = E.length; w <
      Z; w++) { const S = Array.isArray(E[w]) ? E[w] : [E[w]]; for (let T = 0, H = S.length; T <
        H; T++) { const k = S[T],
          ie = Array.isArray(k.value) ? k.value : [k.value]; for (let C = 0, B = ie.length; C <
          B; C++) { const G = ie[C],
            X = _(G),
            V = A % L;
          V !== 0 && L - V < X.boundary && (A += L - V), k.__data = new Float32Array(X.storage /
            Float32Array.BYTES_PER_ELEMENT), k.__offset = A, A += X.storage } } } const R = A %
    L; return R > 0 && (A += L - R), y.__size = A, y.__cache = {}, this }

  function _(y) { const E = { boundary: 0, storage: 0 }; return typeof y == "number" || typeof y ==
      "boolean" ? (E.boundary = 4, E.storage = 4) : y.isVector2 ? (E.boundary = 8, E.storage = 8) :
      y.isVector3 || y.isColor ? (E.boundary = 16, E.storage = 12) : y.isVector4 ? (E.boundary = 16,
        E.storage = 16) : y.isMatrix3 ? (E.boundary = 48, E.storage = 48) : y.isMatrix4 ? (E
        .boundary = 64, E.storage = 64) : y.isTexture ? console.warn(
        "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console
      .warn("THREE.WebGLRenderer: Unsupported uniform value type.", y), E }

  function d(y) { const E = y.target;
    E.removeEventListener("dispose", d); const A = o.indexOf(E.__bindingPointIndex);
    o.splice(A, 1), i.deleteBuffer(r[E.id]), delete r[E.id], delete s[E.id] }

  function u() { for (const y in r) i.deleteBuffer(r[y]);
    o = [], r = {}, s = {} } return { bind: l, update: c, dispose: u } } class Eo { constructor(
    e = {}) { const { canvas: t = Ll(), context: n = null, depth: r = !0, stencil: s = !0,
        alpha: o = !1, antialias: a = !1, premultipliedAlpha: l = !0, preserveDrawingBuffer: c = !1,
        powerPreference: h = "default", failIfMajorPerformanceCaveat: f = !1 } = e;
      this.isWebGLRenderer = !0; let p;
      n !== null ? p = n.getContextAttributes().alpha : p = o; const m = new Uint32Array(4),
        v = new Int32Array(4); let _ = null,
        d = null; const u = [],
        y = [];
      this.domElement = t, this.debug = { checkShaderErrors: !0, onShaderError: null }, this
        .autoClear = !0, this.autoClearColor = !0, this.autoClearDepth = !0, this
        .autoClearStencil = !0, this.sortObjects = !0, this.clippingPlanes = [], this
        .localClippingEnabled = !1, this._outputColorSpace = lt, this._useLegacyLights = !1, this
        .toneMapping = pn, this.toneMappingExposure = 1; const E = this; let A = !1,
        L = 0,
        R = 0,
        w = null,
        Z = -1,
        S = null; const T = new ct,
        H = new ct; let k = null; const ie = new He(0); let C = 0,
        B = t.width,
        G = t.height,
        X = 1,
        V = null,
        W = null; const q = new ct(0, 0, B, G),
        Q = new ct(0, 0, B, G); let ee = !1; const z = new fo; let Y = !1,
        oe = !1,
        me = null; const pe = new ot,
        Re = new Pe,
        Le = new D,
        Ee = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !
          0 };

      function Ve() { return w === null ? X : 1 } let U = n;

      function dt(x, P) { for (let F = 0; F < x.length; F++) { const O = x[F],
            I = t.getContext(O, P); if (I !== null) return I } return null } try { const
        x = { alpha: !0, depth: r, stencil: s, antialias: a, premultipliedAlpha: l,
          preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: f }; if (
          "setAttribute" in t && t.setAttribute("data-engine", `three.js r${ts}`), t
          .addEventListener("webglcontextlost", te, !1), t.addEventListener("webglcontextrestored",
            b, !1), t.addEventListener("webglcontextcreationerror", re, !1), U === null) { const
            P = ["webgl2", "webgl", "experimental-webgl"]; if (E.isWebGL1Renderer === !0 && P
            .shift(), U = dt(P, x), U === null) throw dt(P) ? new Error(
            "Error creating WebGL context with your selected attributes.") : new Error(
            "Error creating WebGL context.") } typeof WebGLRenderingContext < "u" &&
          U instanceof WebGLRenderingContext && console.warn(
            "THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."
            ), U.getShaderPrecisionFormat === void 0 && (U.getShaderPrecisionFormat =
        function () { return { rangeMin: 1, rangeMax: 1, precision: 1 } }) } catch (
      x) { throw console.error("THREE.WebGLRenderer: " + x.message), x } let ve, be, he, Ze, Ie, M,
        g, N, $, j, J, fe, ae, ce, Se, Ne, K, Xe, Ge, Ae, ge, ue, De, ke;

      function Je() { ve = new Wh(U), be = new Bh(U, ve, e), ve.init(be), ue = new Pd(U, ve, be),
          he = new Rd(U, ve, be), Ze = new Yh(U), Ie = new pd, M = new Cd(U, ve, he, Ie, be, ue,
          Ze), g = new Gh(E), N = new kh(E), $ = new tc(U, be), De = new Fh(U, ve, $, be), j =
          new Xh(U, $, Ze, De), J = new $h(U, j, $, Ze), Ge = new Zh(U, be, M), Ne = new zh(Ie),
          fe = new dd(E, g, N, ve, be, De, Ne), ae = new Id(E, Ie), ce = new gd, Se = new Ed(ve,
          be), Xe = new Nh(E, g, N, he, J, p, l), K = new wd(E, J, be), ke = new Nd(U, Ze, be, he),
          Ae = new Oh(U, ve, Ze, be), ge = new qh(U, ve, Ze, be), Ze.programs = fe.programs, E
          .capabilities = be, E.extensions = ve, E.properties = Ie, E.renderLists = ce, E
          .shadowMap = K, E.state = he, E.info = Ze } Je(); const Oe = new Ud(E, U);
      this.xr = Oe, this.getContext = function () { return U }, this.getContextAttributes =
        function () { return U.getContextAttributes() }, this.forceContextLoss = function () { const
            x = ve.get("WEBGL_lose_context");
          x && x.loseContext() }, this.forceContextRestore = function () { const x = ve.get(
            "WEBGL_lose_context");
          x && x.restoreContext() }, this.getPixelRatio = function () { return X }, this
        .setPixelRatio = function (x) { x !== void 0 && (X = x, this.setSize(B, G, !1)) }, this
        .getSize = function (x) { return x.set(B, G) }, this.setSize = function (x, P, F = !
        0) { if (Oe.isPresenting) { console.warn(
              "THREE.WebGLRenderer: Can't change size while VR device is presenting."); return } B =
            x, G = P, t.width = Math.floor(x * X), t.height = Math.floor(P * X), F === !0 && (t
              .style.width = x + "px", t.style.height = P + "px"), this.setViewport(0, 0, x, P) },
        this.getDrawingBufferSize = function (x) { return x.set(B * X, G * X).floor() }, this
        .setDrawingBufferSize = function (x, P, F) { B = x, G = P, X = F, t.width = Math.floor(x *
            F), t.height = Math.floor(P * F), this.setViewport(0, 0, x, P) }, this
        .getCurrentViewport = function (x) { return x.copy(T) }, this.getViewport = function (
        x) { return x.copy(q) }, this.setViewport = function (x, P, F, O) { x.isVector4 ? q.set(x.x,
            x.y, x.z, x.w) : q.set(x, P, F, O), he.viewport(T.copy(q).multiplyScalar(X).floor()) },
        this.getScissor = function (x) { return x.copy(Q) }, this.setScissor = function (x, P, F,
        O) { x.isVector4 ? Q.set(x.x, x.y, x.z, x.w) : Q.set(x, P, F, O), he.scissor(H.copy(Q)
            .multiplyScalar(X).floor()) }, this.getScissorTest = function () { return ee }, this
        .setScissorTest = function (x) { he.setScissorTest(ee = x) }, this.setOpaqueSort =
        function (x) { V = x }, this.setTransparentSort = function (x) { W = x }, this
        .getClearColor = function (x) { return x.copy(Xe.getClearColor()) }, this.setClearColor =
        function () { Xe.setClearColor.apply(Xe, arguments) }, this.getClearAlpha =
      function () { return Xe.getClearAlpha() }, this.setClearAlpha = function () { Xe.setClearAlpha
            .apply(Xe, arguments) }, this.clear = function (x = !0, P = !0, F = !0) { let O =
          0; if (x) { let I = !1; if (w !== null) { const le = w.texture.format;
              I = le === Za || le === ja || le === Ka } if (I) { const le = w.texture.type,
                de = le === mn || le === fn || le === ns || le === wn || le === qa || le === Ya,
                Me = Xe.getClearColor(),
                ye = Xe.getClearAlpha(),
                Fe = Me.r,
                we = Me.g,
                Ce = Me.b;
              de ? (m[0] = Fe, m[1] = we, m[2] = Ce, m[3] = ye, U.clearBufferuiv(U.COLOR, 0, m)) : (
                v[0] = Fe, v[1] = we, v[2] = Ce, v[3] = ye, U.clearBufferiv(U.COLOR, 0, v)) } else
              O |= U.COLOR_BUFFER_BIT } P && (O |= U.DEPTH_BUFFER_BIT), F && (O |= U
            .STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), U.clear(O) }, this
        .clearColor = function () { this.clear(!0, !1, !1) }, this.clearDepth = function () { this
            .clear(!1, !0, !1) }, this.clearStencil = function () { this.clear(!1, !1, !0) }, this
        .dispose = function () { t.removeEventListener("webglcontextlost", te, !1), t
            .removeEventListener("webglcontextrestored", b, !1), t.removeEventListener(
              "webglcontextcreationerror", re, !1), ce.dispose(), Se.dispose(), Ie.dispose(), g
            .dispose(), N.dispose(), J.dispose(), De.dispose(), ke.dispose(), fe.dispose(), Oe
            .dispose(), Oe.removeEventListener("sessionstart", pt), Oe.removeEventListener(
              "sessionend", Ke), me && (me.dispose(), me = null), mt.stop() };

      function te(x) { x.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), A = !
        0 }

      function b() { console.log("THREE.WebGLRenderer: Context Restored."), A = !1; const x = Ze
          .autoReset,
          P = K.enabled,
          F = K.autoUpdate,
          O = K.needsUpdate,
          I = K.type;
        Je(), Ze.autoReset = x, K.enabled = P, K.autoUpdate = F, K.needsUpdate = O, K.type = I }

      function re(x) { console.error(
          "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", x.statusMessage) }

      function se(x) { const P = x.target;
        P.removeEventListener("dispose", se), Te(P) }

      function Te(x) { xe(x), Ie.remove(x) }

      function xe(x) { const P = Ie.get(x).programs;
        P !== void 0 && (P.forEach(function (F) { fe.releaseProgram(F) }), x.isShaderMaterial && fe
          .releaseShaderCache(x)) } this.renderBufferDirect = function (x, P, F, O, I, le) { P ===
          null && (P = Ee); const de = I.isMesh && I.matrixWorld.determinant() < 0,
          Me = Lo(x, P, F, O, I);
        he.setMaterial(O, de); let ye = F.index,
          Fe = 1; if (O.wireframe === !0) { if (ye = j.getWireframeAttribute(F), ye === void 0)
            return;
          Fe = 2 } const we = F.drawRange,
          Ce = F.attributes.position; let et = we.start * Fe,
          yt = (we.start + we.count) * Fe;
        le !== null && (et = Math.max(et, le.start * Fe), yt = Math.min(yt, (le.start + le
            .count) * Fe)), ye !== null ? (et = Math.max(et, 0), yt = Math.min(yt, ye.count)) :
          Ce != null && (et = Math.max(et, 0), yt = Math.min(yt, Ce.count)); const st = yt -
        et; if (st < 0 || st === 1 / 0) return;
        De.setup(I, O, Me, F, ye); let Xt, $e = Ae; if (ye !== null && (Xt = $.get(ye), $e = ge,
            $e.setIndex(Xt)), I.isMesh) O.wireframe === !0 ? (he.setLineWidth(O
          .wireframeLinewidth * Ve()), $e.setMode(U.LINES)) : $e.setMode(U.TRIANGLES);
        else if (I.isLine) { let Be = O.linewidth;
          Be === void 0 && (Be = 1), he.setLineWidth(Be * Ve()), I.isLineSegments ? $e.setMode(U
            .LINES) : I.isLineLoop ? $e.setMode(U.LINE_LOOP) : $e.setMode(U.LINE_STRIP) } else I
          .isPoints ? $e.setMode(U.POINTS) : I.isSprite && $e.setMode(U.TRIANGLES); if (I
          .isBatchedMesh) $e.renderMultiDraw(I._multiDrawStarts, I._multiDrawCounts, I
          ._multiDrawCount);
        else if (I.isInstancedMesh) $e.renderInstances(et, st, I.count);
        else if (F.isInstancedBufferGeometry) { const Be = F._maxInstanceCount !== void 0 ? F
            ._maxInstanceCount : 1 / 0,
            lr = Math.min(F.instanceCount, Be);
          $e.renderInstances(et, st, lr) } else $e.render(et, st) };

      function qe(x, P, F) { x.transparent === !0 && x.side === Jt && x.forceSinglePass === !1 ? (x
          .side = St, x.needsUpdate = !0, Si(x, P, F), x.side = gn, x.needsUpdate = !0, Si(x, P,
            F), x.side = Jt) : Si(x, P, F) } this.compile = function (x, P, F = null) { F ===
            null && (F = x), d = Se.get(F), d.init(), y.push(d), F.traverseVisible(function (I) { I
                .isLight && I.layers.test(P.layers) && (d.pushLight(I), I.castShadow && d
                  .pushShadow(I)) }), x !== F && x.traverseVisible(function (I) { I.isLight && I
                .layers.test(P.layers) && (d.pushLight(I), I.castShadow && d.pushShadow(I)) }), d
            .setupLights(E._useLegacyLights); const O = new Set; return x.traverse(function (
          I) { const le = I.material; if (le)
              if (Array.isArray(le))
                for (let de = 0; de < le.length; de++) { const Me = le[de];
                  qe(Me, F, I), O.add(Me) } else qe(le, F, I), O.add(le) }), y.pop(), d = null, O },
        this.compileAsync = function (x, P, F = null) { const O = this.compile(x, P,
          F); return new Promise(I => {
              function le() { if (O.forEach(function (de) { Ie.get(de).currentProgram.isReady() &&
                      O.delete(de) }), O.size === 0) { I(x); return } setTimeout(le, 10) } ve.get(
                "KHR_parallel_shader_compile") !== null ? le() : setTimeout(le, 10) }) }; let Ye =
        null;

      function rt(x) { Ye && Ye(x) }

      function pt() { mt.stop() }

      function Ke() { mt.start() } const mt = new po;
      mt.setAnimationLoop(rt), typeof self < "u" && mt.setContext(self), this.setAnimationLoop =
        function (x) { Ye = x, Oe.setAnimationLoop(x), x === null ? mt.stop() : mt.start() }, Oe
        .addEventListener("sessionstart", pt), Oe.addEventListener("sessionend", Ke), this.render =
        function (x, P) { if (P !== void 0 && P.isCamera !== !0) { console.error(
              "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
              ); return } if (A === !0) return;
          x.matrixWorldAutoUpdate === !0 && x.updateMatrixWorld(), P.parent === null && P
            .matrixWorldAutoUpdate === !0 && P.updateMatrixWorld(), Oe.enabled === !0 && Oe
            .isPresenting === !0 && (Oe.cameraAutoUpdate === !0 && Oe.updateCamera(P), P = Oe
              .getCamera()), x.isScene === !0 && x.onBeforeRender(E, x, P, w), d = Se.get(x, y
              .length), d.init(), y.push(d), pe.multiplyMatrices(P.projectionMatrix, P
              .matrixWorldInverse), z.setFromProjectionMatrix(pe), oe = this.localClippingEnabled,
            Y = Ne.init(this.clippingPlanes, oe), _ = ce.get(x, u.length), _.init(), u.push(_), zt(
              x, P, 0, E.sortObjects), _.finish(), E.sortObjects === !0 && _.sort(V, W), this.info
            .render.frame++, Y === !0 && Ne.beginShadows(); const F = d.state.shadowsArray; if (K
            .render(F, x, P), Y === !0 && Ne.endShadows(), this.info.autoReset === !0 && this.info
            .reset(), Xe.render(_, x), d.setupLights(E._useLegacyLights), P.isArrayCamera) { const
              O = P.cameras; for (let I = 0, le = O.length; I < le; I++) { const de = O[I];
              ls(_, x, de, de.viewport) } } else ls(_, x, P);
          w !== null && (M.updateMultisampleRenderTarget(w), M.updateRenderTargetMipmap(w)), x
            .isScene === !0 && x.onAfterRender(E, x, P), De.resetDefaultState(), Z = -1, S = null, y
            .pop(), y.length > 0 ? d = y[y.length - 1] : d = null, u.pop(), u.length > 0 ? _ = u[u
              .length - 1] : _ = null };

      function zt(x, P, F, O) { if (x.visible === !1) return; if (x.layers.test(P.layers)) { if (x
            .isGroup) F = x.renderOrder;
          else if (x.isLOD) x.autoUpdate === !0 && x.update(P);
          else if (x.isLight) d.pushLight(x), x.castShadow && d.pushShadow(x);
          else if (x.isSprite) { if (!x.frustumCulled || z.intersectsSprite(x)) { O && Le
                .setFromMatrixPosition(x.matrixWorld).applyMatrix4(pe); const de = J.update(x),
                Me = x.material;
              Me.visible && _.push(x, de, Me, F, Le.z, null) } } else if ((x.isMesh || x.isLine || x
              .isPoints) && (!x.frustumCulled || z.intersectsObject(x))) { const de = J.update(x),
              Me = x.material; if (O && (x.boundingSphere !== void 0 ? (x.boundingSphere === null &&
                x.computeBoundingSphere(), Le.copy(x.boundingSphere.center)) : (de
                .boundingSphere === null && de.computeBoundingSphere(), Le.copy(de.boundingSphere
                  .center)), Le.applyMatrix4(x.matrixWorld).applyMatrix4(pe)), Array.isArray(
              Me)) { const ye = de.groups; for (let Fe = 0, we = ye.length; Fe < we; Fe++) { const
                  Ce = ye[Fe],
                  et = Me[Ce.materialIndex];
                et && et.visible && _.push(x, de, et, F, Le.z, Ce) } } else Me.visible && _.push(x,
              de, Me, F, Le.z, null) } } const le = x.children; for (let de = 0, Me = le
          .length; de < Me; de++) zt(le[de], P, F, O) }

      function ls(x, P, F, O) { const I = x.opaque,
          le = x.transmissive,
          de = x.transparent;
        d.setupLightsView(F), Y === !0 && Ne.setGlobalState(E.clippingPlanes, F), le.length > 0 &&
          Po(I, le, P, F), O && he.viewport(T.copy(O)), I.length > 0 && Mi(I, P, F), le.length >
          0 && Mi(le, P, F), de.length > 0 && Mi(de, P, F), he.buffers.depth.setTest(!0), he.buffers
          .depth.setMask(!0), he.buffers.color.setMask(!0), he.setPolygonOffset(!1) }

      function Po(x, P, F, O) { if ((F.isScene === !0 ? F.overrideMaterial : null) !== null)
      return; const le = be.isWebGL2;
        me === null && (me = new Bt(1, 1, { generateMipmaps: !0, type: ve.has(
              "EXT_color_buffer_half_float") ? tn : mn, minFilter: fi, samples: le ? 4 : 0 })), E
          .getDrawingBufferSize(Re), le ? me.setSize(Re.x, Re.y) : me.setSize(Jr(Re.x), Jr(Re
          .y)); const de = E.getRenderTarget();
        E.setRenderTarget(me), E.getClearColor(ie), C = E.getClearAlpha(), C < 1 && E.setClearColor(
          16777215, .5), E.clear(); const Me = E.toneMapping;
        E.toneMapping = pn, Mi(x, F, O), M.updateMultisampleRenderTarget(me), M
          .updateRenderTargetMipmap(me); let ye = !1; for (let Fe = 0, we = P.length; Fe <
          we; Fe++) { const Ce = P[Fe],
            et = Ce.object,
            yt = Ce.geometry,
            st = Ce.material,
            Xt = Ce.group; if (st.side === Jt && et.layers.test(O.layers)) { const $e = st.side;
            st.side = St, st.needsUpdate = !0, cs(et, F, O, yt, st, Xt), st.side = $e, st
              .needsUpdate = !0, ye = !0 } } ye === !0 && (M.updateMultisampleRenderTarget(me), M
            .updateRenderTargetMipmap(me)), E.setRenderTarget(de), E.setClearColor(ie, C), E
          .toneMapping = Me }

      function Mi(x, P, F) { const O = P.isScene === !0 ? P.overrideMaterial : null; for (let I = 0,
            le = x.length; I < le; I++) { const de = x[I],
            Me = de.object,
            ye = de.geometry,
            Fe = O === null ? de.material : O,
            we = de.group;
          Me.layers.test(F.layers) && cs(Me, P, F, ye, Fe, we) } }

      function cs(x, P, F, O, I, le) { x.onBeforeRender(E, P, F, O, I, le), x.modelViewMatrix
          .multiplyMatrices(F.matrixWorldInverse, x.matrixWorld), x.normalMatrix.getNormalMatrix(x
            .modelViewMatrix), I.onBeforeRender(E, P, F, O, x, le), I.transparent === !0 && I
          .side === Jt && I.forceSinglePass === !1 ? (I.side = St, I.needsUpdate = !0, E
            .renderBufferDirect(F, P, O, I, x, le), I.side = gn, I.needsUpdate = !0, E
            .renderBufferDirect(F, P, O, I, x, le), I.side = Jt) : E.renderBufferDirect(F, P, O, I,
            x, le), x.onAfterRender(E, P, F, O, I, le) }

      function Si(x, P, F) { P.isScene !== !0 && (P = Ee); const O = Ie.get(x),
          I = d.state.lights,
          le = d.state.shadowsArray,
          de = I.state.version,
          Me = fe.getParameters(x, I.state, le, P, F),
          ye = fe.getProgramCacheKey(Me); let Fe = O.programs;
        O.environment = x.isMeshStandardMaterial ? P.environment : null, O.fog = P.fog, O.envMap = (
          x.isMeshStandardMaterial ? N : g).get(x.envMap || O.environment), Fe === void 0 && (x
          .addEventListener("dispose", se), Fe = new Map, O.programs = Fe); let we = Fe.get(
        ye); if (we !== void 0) { if (O.currentProgram === we && O.lightsStateVersion === de)
          return hs(x, Me), we } else Me.uniforms = fe.getUniforms(x), x.onBuild(F, Me, E), x
          .onBeforeCompile(Me, E), we = fe.acquireProgram(Me, ye), Fe.set(ye, we), O.uniforms = Me
          .uniforms; const Ce = O.uniforms; return (!x.isShaderMaterial && !x.isRawShaderMaterial ||
            x.clipping === !0) && (Ce.clippingPlanes = Ne.uniform), hs(x, Me), O.needsLights = Uo(
          x), O.lightsStateVersion = de, O.needsLights && (Ce.ambientLightColor.value = I.state
            .ambient, Ce.lightProbe.value = I.state.probe, Ce.directionalLights.value = I.state
            .directional, Ce.directionalLightShadows.value = I.state.directionalShadow, Ce
            .spotLights.value = I.state.spot, Ce.spotLightShadows.value = I.state.spotShadow, Ce
            .rectAreaLights.value = I.state.rectArea, Ce.ltc_1.value = I.state.rectAreaLTC1, Ce
            .ltc_2.value = I.state.rectAreaLTC2, Ce.pointLights.value = I.state.point, Ce
            .pointLightShadows.value = I.state.pointShadow, Ce.hemisphereLights.value = I.state
            .hemi, Ce.directionalShadowMap.value = I.state.directionalShadowMap, Ce
            .directionalShadowMatrix.value = I.state.directionalShadowMatrix, Ce.spotShadowMap
            .value = I.state.spotShadowMap, Ce.spotLightMatrix.value = I.state.spotLightMatrix, Ce
            .spotLightMap.value = I.state.spotLightMap, Ce.pointShadowMap.value = I.state
            .pointShadowMap, Ce.pointShadowMatrix.value = I.state.pointShadowMatrix), O
          .currentProgram = we, O.uniformsList = null, we }

      function us(x) { if (x.uniformsList === null) { const P = x.currentProgram.getUniforms();
          x.uniformsList = Yi.seqWithValue(P.seq, x.uniforms) } return x.uniformsList }

      function hs(x, P) { const F = Ie.get(x);
        F.outputColorSpace = P.outputColorSpace, F.batching = P.batching, F.instancing = P
          .instancing, F.instancingColor = P.instancingColor, F.skinning = P.skinning, F
          .morphTargets = P.morphTargets, F.morphNormals = P.morphNormals, F.morphColors = P
          .morphColors, F.morphTargetsCount = P.morphTargetsCount, F.numClippingPlanes = P
          .numClippingPlanes, F.numIntersection = P.numClipIntersection, F.vertexAlphas = P
          .vertexAlphas, F.vertexTangents = P.vertexTangents, F.toneMapping = P.toneMapping }

      function Lo(x, P, F, O, I) { P.isScene !== !0 && (P = Ee), M.resetTextureUnits(); const le = P
          .fog,
          de = O.isMeshStandardMaterial ? P.environment : null,
          Me = w === null ? E.outputColorSpace : w.isXRRenderTarget === !0 ? w.texture.colorSpace :
          rn,
          ye = (O.isMeshStandardMaterial ? N : g).get(O.envMap || de),
          Fe = O.vertexColors === !0 && !!F.attributes.color && F.attributes.color.itemSize === 4,
          we = !!F.attributes.tangent && (!!O.normalMap || O.anisotropy > 0),
          Ce = !!F.morphAttributes.position,
          et = !!F.morphAttributes.normal,
          yt = !!F.morphAttributes.color; let st = pn;
        O.toneMapped && (w === null || w.isXRRenderTarget === !0) && (st = E.toneMapping); const
          Xt = F.morphAttributes.position || F.morphAttributes.normal || F.morphAttributes.color,
          $e = Xt !== void 0 ? Xt.length : 0,
          Be = Ie.get(O),
          lr = d.state.lights; if (Y === !0 && (oe === !0 || x !== S)) { const wt = x === S && O
            .id === Z;
          Ne.setState(O, x, wt) } let Qe = !1;
        O.version === Be.__version ? (Be.needsLights && Be.lightsStateVersion !== lr.state
          .version || Be.outputColorSpace !== Me || I.isBatchedMesh && Be.batching === !1 || !I
          .isBatchedMesh && Be.batching === !0 || I.isInstancedMesh && Be.instancing === !1 || !I
          .isInstancedMesh && Be.instancing === !0 || I.isSkinnedMesh && Be.skinning === !1 || !I
          .isSkinnedMesh && Be.skinning === !0 || I.isInstancedMesh && Be.instancingColor === !
          0 && I.instanceColor === null || I.isInstancedMesh && Be.instancingColor === !1 && I
          .instanceColor !== null || Be.envMap !== ye || O.fog === !0 && Be.fog !== le || Be
          .numClippingPlanes !== void 0 && (Be.numClippingPlanes !== Ne.numPlanes || Be
            .numIntersection !== Ne.numIntersection) || Be.vertexAlphas !== Fe || Be
          .vertexTangents !== we || Be.morphTargets !== Ce || Be.morphNormals !== et || Be
          .morphColors !== yt || Be.toneMapping !== st || be.isWebGL2 === !0 && Be
          .morphTargetsCount !== $e) && (Qe = !0) : (Qe = !0, Be.__version = O.version); let _n = Be
          .currentProgram;
        Qe === !0 && (_n = Si(O, P, I)); let fs = !1,
          ri = !1,
          cr = !1; const ut = _n.getUniforms(),
          vn = Be.uniforms; if (he.useProgram(_n.program) && (fs = !0, ri = !0, cr = !0), O.id !==
          Z && (Z = O.id, ri = !0), fs || S !== x) { ut.setValue(U, "projectionMatrix", x
            .projectionMatrix), ut.setValue(U, "viewMatrix", x.matrixWorldInverse); const wt = ut
            .map.cameraPosition;
          wt !== void 0 && wt.setValue(U, Le.setFromMatrixPosition(x.matrixWorld)), be
            .logarithmicDepthBuffer && ut.setValue(U, "logDepthBufFC", 2 / (Math.log(x.far + 1) /
              Math.LN2)), (O.isMeshPhongMaterial || O.isMeshToonMaterial || O
              .isMeshLambertMaterial || O.isMeshBasicMaterial || O.isMeshStandardMaterial || O
              .isShaderMaterial) && ut.setValue(U, "isOrthographic", x.isOrthographicCamera === !0),
            S !== x && (S = x, ri = !0, cr = !0) } if (I.isSkinnedMesh) { ut.setOptional(U, I,
            "bindMatrix"), ut.setOptional(U, I, "bindMatrixInverse"); const wt = I.skeleton;
          wt && (be.floatVertexTextures ? (wt.boneTexture === null && wt.computeBoneTexture(), ut
            .setValue(U, "boneTexture", wt.boneTexture, M)) : console.warn(
            "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
            )) } I.isBatchedMesh && (ut.setOptional(U, I, "batchingTexture"), ut.setValue(U,
          "batchingTexture", I._matricesTexture, M)); const ur = F.morphAttributes; if ((ur
            .position !== void 0 || ur.normal !== void 0 || ur.color !== void 0 && be.isWebGL2 === !
            0) && Ge.update(I, F, _n), (ri || Be.receiveShadow !== I.receiveShadow) && (Be
            .receiveShadow = I.receiveShadow, ut.setValue(U, "receiveShadow", I.receiveShadow)), O
          .isMeshGouraudMaterial && O.envMap !== null && (vn.envMap.value = ye, vn.flipEnvMap
            .value = ye.isCubeTexture && ye.isRenderTargetTexture === !1 ? -1 : 1), ri && (ut
            .setValue(U, "toneMappingExposure", E.toneMappingExposure), Be.needsLights && Do(vn,
            cr), le && O.fog === !0 && ae.refreshFogUniforms(vn, le), ae.refreshMaterialUniforms(vn,
              O, X, G, me), Yi.upload(U, us(Be), vn, M)), O.isShaderMaterial && O
          .uniformsNeedUpdate === !0 && (Yi.upload(U, us(Be), vn, M), O.uniformsNeedUpdate = !1), O
          .isSpriteMaterial && ut.setValue(U, "center", I.center), ut.setValue(U, "modelViewMatrix",
            I.modelViewMatrix), ut.setValue(U, "normalMatrix", I.normalMatrix), ut.setValue(U,
            "modelMatrix", I.matrixWorld), O.isShaderMaterial || O.isRawShaderMaterial) { const wt =
            O.uniformsGroups; for (let hr = 0, Io = wt.length; hr < Io; hr++)
            if (be.isWebGL2) { const ds = wt[hr];
              ke.update(ds, _n), ke.bind(ds, _n) } else console.warn(
              "THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2."
              ) } return _n }

      function Do(x, P) { x.ambientLightColor.needsUpdate = P, x.lightProbe.needsUpdate = P, x
          .directionalLights.needsUpdate = P, x.directionalLightShadows.needsUpdate = P, x
          .pointLights.needsUpdate = P, x.pointLightShadows.needsUpdate = P, x.spotLights
          .needsUpdate = P, x.spotLightShadows.needsUpdate = P, x.rectAreaLights.needsUpdate = P, x
          .hemisphereLights.needsUpdate = P }

      function Uo(x) { return x.isMeshLambertMaterial || x.isMeshToonMaterial || x
          .isMeshPhongMaterial || x.isMeshStandardMaterial || x.isShadowMaterial || x
          .isShaderMaterial && x.lights === !0 } this.getActiveCubeFace = function () { return L },
        this.getActiveMipmapLevel = function () { return R }, this.getRenderTarget =
      function () { return w }, this.setRenderTargetTextures = function (x, P, F) { Ie.get(x
            .texture).__webglTexture = P, Ie.get(x.depthTexture).__webglTexture = F; const O = Ie
            .get(x);
          O.__hasExternalTextures = !0, O.__hasExternalTextures && (O.__autoAllocateDepthBuffer =
            F === void 0, O.__autoAllocateDepthBuffer || ve.has(
              "WEBGL_multisampled_render_to_texture") === !0 && (console.warn(
              "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ), O.__useRenderToTexture = !1)) }, this.setRenderTargetFramebuffer = function (x,
        P) { const F = Ie.get(x);
          F.__webglFramebuffer = P, F.__useDefaultFramebuffer = P === void 0 }, this
        .setRenderTarget = function (x, P = 0, F = 0) { w = x, L = P, R = F; let O = !0,
            I = null,
            le = !1,
            de = !1; if (x) { const ye = Ie.get(x);
            ye.__useDefaultFramebuffer !== void 0 ? (he.bindFramebuffer(U.FRAMEBUFFER, null), O = !
                1) : ye.__webglFramebuffer === void 0 ? M.setupRenderTarget(x) : ye
              .__hasExternalTextures && M.rebindTextures(x, Ie.get(x.texture).__webglTexture, Ie
                .get(x.depthTexture).__webglTexture); const Fe = x.texture;
            (Fe.isData3DTexture || Fe.isDataArrayTexture || Fe.isCompressedArrayTexture) && (de = !
              0); const we = Ie.get(x).__webglFramebuffer;
            x.isWebGLCubeRenderTarget ? (Array.isArray(we[P]) ? I = we[P][F] : I = we[P], le = !0) :
              be.isWebGL2 && x.samples > 0 && M.useMultisampledRTT(x) === !1 ? I = Ie.get(x)
              .__webglMultisampledFramebuffer : Array.isArray(we) ? I = we[F] : I = we, T.copy(x
                .viewport), H.copy(x.scissor), k = x.scissorTest } else T.copy(q).multiplyScalar(X)
            .floor(), H.copy(Q).multiplyScalar(X).floor(), k = ee; if (he.bindFramebuffer(U
              .FRAMEBUFFER, I) && be.drawBuffers && O && he.drawBuffers(x, I), he.viewport(T), he
            .scissor(H), he.setScissorTest(k), le) { const ye = Ie.get(x.texture);
            U.framebufferTexture2D(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0, U
              .TEXTURE_CUBE_MAP_POSITIVE_X + P, ye.__webglTexture, F) } else if (de) { const ye = Ie
              .get(x.texture),
              Fe = P || 0;
            U.framebufferTextureLayer(U.FRAMEBUFFER, U.COLOR_ATTACHMENT0, ye.__webglTexture, F || 0,
              Fe) } Z = -1 }, this.readRenderTargetPixels = function (x, P, F, O, I, le, de) { if (!
            (x && x.isWebGLRenderTarget)) { console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
              ); return } let Me = Ie.get(x).__webglFramebuffer; if (x.isWebGLCubeRenderTarget &&
            de !== void 0 && (Me = Me[de]), Me) { he.bindFramebuffer(U.FRAMEBUFFER, Me); try { const
                ye = x.texture,
                Fe = ye.format,
                we = ye.type; if (Fe !== Ot && ue.convert(Fe) !== U.getParameter(U
                  .IMPLEMENTATION_COLOR_READ_FORMAT)) { console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
                  ); return } const Ce = we === tn && (ve.has("EXT_color_buffer_half_float") || be
                .isWebGL2 && ve.has("EXT_color_buffer_float")); if (we !== mn && ue.convert(we) !==
                U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE) && !(we === dn && (be.isWebGL2 ||
                  ve.has("OES_texture_float") || ve.has("WEBGL_color_buffer_float"))) && !Ce
                ) { console.error(
                  "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
                  ); return } P >= 0 && P <= x.width - O && F >= 0 && F <= x.height - I && U
                .readPixels(P, F, O, I, ue.convert(Fe), ue.convert(we), le) } finally { const ye =
                w !== null ? Ie.get(w).__webglFramebuffer : null;
              he.bindFramebuffer(U.FRAMEBUFFER, ye) } } }, this.copyFramebufferToTexture =
        function (x, P, F = 0) { const O = Math.pow(2, -F),
            I = Math.floor(P.image.width * O),
            le = Math.floor(P.image.height * O);
          M.setTexture2D(P, 0), U.copyTexSubImage2D(U.TEXTURE_2D, F, 0, 0, x.x, x.y, I, le), he
            .unbindTexture() }, this.copyTextureToTexture = function (x, P, F, O = 0) { const I = P
            .image.width,
            le = P.image.height,
            de = ue.convert(F.format),
            Me = ue.convert(F.type);
          M.setTexture2D(F, 0), U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, F.flipY), U.pixelStorei(U
              .UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha), U.pixelStorei(U
              .UNPACK_ALIGNMENT, F.unpackAlignment), P.isDataTexture ? U.texSubImage2D(U.TEXTURE_2D,
              O, x.x, x.y, I, le, de, Me, P.image.data) : P.isCompressedTexture ? U
            .compressedTexSubImage2D(U.TEXTURE_2D, O, x.x, x.y, P.mipmaps[0].width, P.mipmaps[0]
              .height, de, P.mipmaps[0].data) : U.texSubImage2D(U.TEXTURE_2D, O, x.x, x.y, de, Me, P
              .image), O === 0 && F.generateMipmaps && U.generateMipmap(U.TEXTURE_2D), he
            .unbindTexture() }, this.copyTextureToTexture3D = function (x, P, F, O, I = 0) { if (E
            .isWebGL1Renderer) { console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
              ); return } const le = x.max.x - x.min.x + 1,
            de = x.max.y - x.min.y + 1,
            Me = x.max.z - x.min.z + 1,
            ye = ue.convert(O.format),
            Fe = ue.convert(O.type); let we; if (O.isData3DTexture) M.setTexture3D(O, 0), we = U
            .TEXTURE_3D;
          else if (O.isDataArrayTexture || O.isCompressedArrayTexture) M.setTexture2DArray(O, 0),
            we = U.TEXTURE_2D_ARRAY;
          else { console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
              ); return } U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL, O.flipY), U.pixelStorei(U
            .UNPACK_PREMULTIPLY_ALPHA_WEBGL, O.premultiplyAlpha), U.pixelStorei(U
            .UNPACK_ALIGNMENT, O.unpackAlignment); const Ce = U.getParameter(U.UNPACK_ROW_LENGTH),
            et = U.getParameter(U.UNPACK_IMAGE_HEIGHT),
            yt = U.getParameter(U.UNPACK_SKIP_PIXELS),
            st = U.getParameter(U.UNPACK_SKIP_ROWS),
            Xt = U.getParameter(U.UNPACK_SKIP_IMAGES),
            $e = F.isCompressedTexture ? F.mipmaps[I] : F.image;
          U.pixelStorei(U.UNPACK_ROW_LENGTH, $e.width), U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, $e
              .height), U.pixelStorei(U.UNPACK_SKIP_PIXELS, x.min.x), U.pixelStorei(U
              .UNPACK_SKIP_ROWS, x.min.y), U.pixelStorei(U.UNPACK_SKIP_IMAGES, x.min.z), F
            .isDataTexture || F.isData3DTexture ? U.texSubImage3D(we, I, P.x, P.y, P.z, le, de, Me,
              ye, Fe, $e.data) : F.isCompressedArrayTexture ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
              ), U.compressedTexSubImage3D(we, I, P.x, P.y, P.z, le, de, Me, ye, $e.data)) : U
            .texSubImage3D(we, I, P.x, P.y, P.z, le, de, Me, ye, Fe, $e), U.pixelStorei(U
              .UNPACK_ROW_LENGTH, Ce), U.pixelStorei(U.UNPACK_IMAGE_HEIGHT, et), U.pixelStorei(U
              .UNPACK_SKIP_PIXELS, yt), U.pixelStorei(U.UNPACK_SKIP_ROWS, st), U.pixelStorei(U
              .UNPACK_SKIP_IMAGES, Xt), I === 0 && O.generateMipmaps && U.generateMipmap(we), he
            .unbindTexture() }, this.initTexture = function (x) { x.isCubeTexture ? M
            .setTextureCube(x, 0) : x.isData3DTexture ? M.setTexture3D(x, 0) : x
            .isDataArrayTexture || x.isCompressedArrayTexture ? M.setTexture2DArray(x, 0) : M
            .setTexture2D(x, 0), he.unbindTexture() }, this.resetState = function () { L = 0, R = 0,
            w = null, he.reset(), De.reset() }, typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(
      "observe", { detail: this })) } get coordinateSystem() { return Qt } get outputColorSpace() { return this
        ._outputColorSpace } set outputColorSpace(e) { this._outputColorSpace = e; const t = this
        .getContext();
      t.drawingBufferColorSpace = e === is ? "display-p3" : "srgb", t.unpackColorSpace = We
        .workingColorSpace === tr ? "display-p3" : "srgb" } get outputEncoding() { return console
        .warn(
          "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
          ), this.outputColorSpace === lt ? Cn : Ja } set outputEncoding(e) { console.warn(
        "THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."
        ), this.outputColorSpace = e === Cn ? lt : rn } get useLegacyLights() { return console.warn(
        "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
        ), this._useLegacyLights } set useLegacyLights(e) { console.warn(
        "THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."
        ), this._useLegacyLights = e } } class Fd extends Eo {} Fd.prototype.isWebGL1Renderer = !0;
class Od extends Tt { constructor() { super(), this.isScene = !0, this.type = "Scene", this
        .background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0,
        this.backgroundIntensity = 1, this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ <
        "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(
      "observe", { detail: this })) } copy(e, t) { return super.copy(e, t), e.background !== null &&
        (this.background = e.background.clone()), e.environment !== null && (this.environment = e
          .environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this
        .backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e
        .backgroundIntensity, e.overrideMaterial !== null && (this.overrideMaterial = e
          .overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this } toJSON(
    e) { const t = super.toJSON(e); return this.fog !== null && (t.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this
        .backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity =
          this.backgroundIntensity), t } } class Bd extends vi { constructor(e) { super(), this
      .isPointsMaterial = !0, this.type = "PointsMaterial", this.color = new He(16777215), this
      .map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = !0, this.fog = !0,
      this.setValues(e) } copy(e) { return super.copy(e), this.color.copy(e.color), this.map = e
      .map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e
      .sizeAttenuation, this.fog = e.fog, this } }
const Ua = new ot,
  es = new ro,
  Xi = new nr,
  qi = new D;
class zd extends Tt { constructor(e = new sn, t = new Bd) { super(), this.isPoints = !0, this.type =
      "Points", this.geometry = e, this.material = t, this.updateMorphTargets() } copy(e,
  t) { return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e
      .material, this.geometry = e.geometry, this } raycast(e, t) { const n = this.geometry,
      r = this.matrixWorld,
      s = e.params.Points.threshold,
      o = n.drawRange; if (n.boundingSphere === null && n.computeBoundingSphere(), Xi.copy(n
        .boundingSphere), Xi.applyMatrix4(r), Xi.radius += s, e.ray.intersectsSphere(Xi) === !1)
      return;
    Ua.copy(r).invert(), es.copy(e.ray).applyMatrix4(Ua); const a = s / ((this.scale.x + this
        .scale.y + this.scale.z) / 3),
      l = a * a,
      c = n.index,
      f = n.attributes.position; if (c !== null) { const p = Math.max(0, o.start),
        m = Math.min(c.count, o.start + o.count); for (let v = p, _ = m; v < _; v++) { const d = c
          .getX(v);
        qi.fromBufferAttribute(f, d), Ia(qi, d, l, r, e, t, this) } } else { const p = Math.max(0,
          o.start),
        m = Math.min(f.count, o.start + o.count); for (let v = p, _ = m; v < _; v++) qi
        .fromBufferAttribute(f, v), Ia(qi, v, l, r, e, t, this) } } updateMorphTargets() { const
      t = this.geometry.morphAttributes,
      n = Object.keys(t); if (n.length > 0) { const r = t[n[0]]; if (r !== void 0) { this
          .morphTargetInfluences = [], this.morphTargetDictionary = {}; for (let s = 0, o = r
            .length; s < o; s++) { const a = r[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[a] = s } } } } }

function Ia(i, e, t, n, r, s, o) { const a = es.distanceSqToPoint(i); if (a < t) { const l = new D;
    es.closestPointToPoint(i, l), l.applyMatrix4(n); const c = r.ray.origin.distanceTo(l); if (c < r
      .near || c > r.far) return;
    s.push({ distance: c, distanceToRay: Math.sqrt(a), point: l, index: e, face: null,
    object: o }) } } class Gd extends Et { constructor(e, t, n, r, s, o, a, l, c) { super(e, t, n,
      r, s, o, a, l, c), this.isCanvasTexture = !0, this.needsUpdate = !
    0 } } class To extends vt { constructor(e) { super(e), this.isRawShaderMaterial = !0, this.type =
      "RawShaderMaterial" } } class yo { constructor(e = !0) { this.autoStart = e, this.startTime =
      0, this.oldTime = 0, this.elapsedTime = 0, this.running = !1 } start() { this.startTime =
      Na(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = !0 } stop() { this
      .getElapsedTime(), this.running = !1, this.autoStart = !1 } getElapsedTime() { return this
      .getDelta(), this.elapsedTime } getDelta() { let e = 0; if (this.autoStart && !this.running)
      return this.start(), 0; if (this.running) { const t = Na();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e } return e } }

function Na() { return (typeof performance > "u" ? Date : performance)
.now() } typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(
  "register", { detail: { revision: ts } }));
typeof window < "u" && (window.__THREE__ ? console.warn(
  "WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ts);
const Ao = { name: "CopyShader", uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}` };
class ii { constructor() { this.isPass = !0, this.enabled = !0, this.needsSwap = !0, this.clear = !
      1, this.renderToScreen = !1 } setSize() {} render() { console.error(
      "THREE.Pass: .render() must be implemented in derived pass.") } dispose() {} }
const Hd = new mo(-1, 1, 1, -1, 0, 1);
class Vd extends sn { constructor() { super(), this.setAttribute("position", new nn([-1, 3, 0, -1, -
      1, 0, 3, -1, 0
    ], 3)), this.setAttribute("uv", new nn([0, 2, 0, 0, 2, 0], 2)) } }
const kd = new Vd;
class as { constructor(e) { this._mesh = new kt(kd, e) } dispose() { this._mesh.geometry
    .dispose() } render(e) { e.render(this._mesh, Hd) } get material() { return this._mesh
      .material } set material(e) { this._mesh.material = e } } class Wd extends ii { constructor(e,
    t) { super(), this.textureID = t !== void 0 ? t : "tDiffuse", e instanceof vt ? (this
      .uniforms = e.uniforms, this.material = e) : e && (this.uniforms = di.clone(e.uniforms),
      this.material = new vt({ name: e.name !== void 0 ? e.name : "unspecified", defines: Object
          .assign({}, e.defines), uniforms: this.uniforms, vertexShader: e.vertexShader,
        fragmentShader: e.fragmentShader })), this.fsQuad = new as(this.material) } render(e, t,
    n) { this.uniforms[this.textureID] && (this.uniforms[this.textureID].value = n.texture), this
      .fsQuad.material = this.material, this.renderToScreen ? (e.setRenderTarget(null), this
        .fsQuad.render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e
        .autoClearDepth, e.autoClearStencil), this.fsQuad.render(e)) } dispose() { this.material
      .dispose(), this.fsQuad.dispose() } } class Fa extends ii { constructor(e, t) { super(), this
        .scene = e, this.camera = t, this.clear = !0, this.needsSwap = !1, this.inverse = !
        1 } render(e, t, n) { const r = e.getContext(),
        s = e.state;
      s.buffers.color.setMask(!1), s.buffers.depth.setMask(!1), s.buffers.color.setLocked(!0), s
        .buffers.depth.setLocked(!0); let o, a;
      this.inverse ? (o = 0, a = 1) : (o = 1, a = 0), s.buffers.stencil.setTest(!0), s.buffers
        .stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE), s.buffers.stencil.setFunc(r.ALWAYS, o,
          4294967295), s.buffers.stencil.setClear(a), s.buffers.stencil.setLocked(!0), e
        .setRenderTarget(n), this.clear && e.clear(), e.render(this.scene, this.camera), e
        .setRenderTarget(t), this.clear && e.clear(), e.render(this.scene, this.camera), s.buffers
        .color.setLocked(!1), s.buffers.depth.setLocked(!1), s.buffers.color.setMask(!0), s.buffers
        .depth.setMask(!0), s.buffers.stencil.setLocked(!1), s.buffers.stencil.setFunc(r.EQUAL, 1,
          4294967295), s.buffers.stencil.setOp(r.KEEP, r.KEEP, r.KEEP), s.buffers.stencil.setLocked(
          !0) } } class Xd extends ii { constructor() { super(), this.needsSwap = !1 } render(e) { e
      .state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!
      1) } } class qd { constructor(e, t) { if (this.renderer = e, this._pixelRatio = e
      .getPixelRatio(), t === void 0) { const n = e.getSize(new Pe);
      this._width = n.width, this._height = n.height, t = new Bt(this._width * this._pixelRatio,
        this._height * this._pixelRatio, { type: tn }), t.texture.name =
      "EffectComposer.rt1" } else this._width = t.width, this._height = t.height;
    this.renderTarget1 = t, this.renderTarget2 = t.clone(), this.renderTarget2.texture.name =
      "EffectComposer.rt2", this.writeBuffer = this.renderTarget1, this.readBuffer = this
      .renderTarget2, this.renderToScreen = !0, this.passes = [], this.copyPass = new Wd(Ao), this
      .copyPass.material.blending = en, this.clock = new yo } swapBuffers() { const e = this
      .readBuffer;
    this.readBuffer = this.writeBuffer, this.writeBuffer = e } addPass(e) { this.passes.push(e), e
      .setSize(this._width * this._pixelRatio, this._height * this._pixelRatio) } insertPass(e,
  t) { this.passes.splice(t, 0, e), e.setSize(this._width * this._pixelRatio, this._height * this
      ._pixelRatio) } removePass(e) { const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1) } isLastEnabledPass(e) { for (let t = e + 1; t < this
      .passes.length; t++)
      if (this.passes[t].enabled) return !1; return !0 } render(e) { e === void 0 && (e = this
      .clock.getDelta()); const t = this.renderer.getRenderTarget(); let n = !1; for (let r = 0,
        s = this.passes.length; r < s; r++) { const o = this.passes[r]; if (o.enabled !== !
        1) { if (o.renderToScreen = this.renderToScreen && this.isLastEnabledPass(r), o.render(
            this.renderer, this.writeBuffer, this.readBuffer, e, n), o.needsSwap) { if (n) { const
              a = this.renderer.getContext(),
              l = this.renderer.state.buffers.stencil;
            l.setFunc(a.NOTEQUAL, 1, 4294967295), this.copyPass.render(this.renderer, this
              .writeBuffer, this.readBuffer, e), l.setFunc(a.EQUAL, 1, 4294967295) } this
            .swapBuffers() } Fa !== void 0 && (o instanceof Fa ? n = !0 : o instanceof Xd && (
          n = !1)) } } this.renderer.setRenderTarget(t) } reset(e) { if (e === void 0) { const t =
        this.renderer.getSize(new Pe);
      this._pixelRatio = this.renderer.getPixelRatio(), this._width = t.width, this._height = t
        .height, e = this.renderTarget1.clone(), e.setSize(this._width * this._pixelRatio, this
          ._height * this._pixelRatio) } this.renderTarget1.dispose(), this.renderTarget2
      .dispose(), this.renderTarget1 = e, this.renderTarget2 = e.clone(), this.writeBuffer = this
      .renderTarget1, this.readBuffer = this.renderTarget2 } setSize(e, t) { this._width = e, this
      ._height = t; const n = this._width * this._pixelRatio,
      r = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, r), this.renderTarget2.setSize(n, r); for (let s = 0; s < this
      .passes.length; s++) this.passes[s].setSize(n, r) } setPixelRatio(e) { this._pixelRatio = e,
      this.setSize(this._width, this._height) } dispose() { this.renderTarget1.dispose(), this
      .renderTarget2.dispose(), this.copyPass.dispose() } } class Yd extends ii { constructor(e, t,
    n = null, r = null, s = null) { super(), this.scene = e, this.camera = t, this
      .overrideMaterial = n, this.clearColor = r, this.clearAlpha = s, this.clear = !0, this
      .clearDepth = !1, this.needsSwap = !1, this._oldClearColor = new He } render(e, t,
  n) { const r = e.autoClear;
    e.autoClear = !1; let s, o;
    this.overrideMaterial !== null && (o = this.scene.overrideMaterial, this.scene
        .overrideMaterial = this.overrideMaterial), this.clearColor !== null && (e.getClearColor(
        this._oldClearColor), e.setClearColor(this.clearColor)), this.clearAlpha !== null && (s =
        e.getClearAlpha(), e.setClearAlpha(this.clearAlpha)), this.clearDepth == !0 && e
      .clearDepth(), e.setRenderTarget(this.renderToScreen ? null : n), this.clear === !0 && e
      .clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil), e.render(this.scene, this
        .camera), this.clearColor !== null && e.setClearColor(this._oldClearColor), this
      .clearAlpha !== null && e.setClearAlpha(s), this.overrideMaterial !== null && (this.scene
        .overrideMaterial = o), e.autoClear = r } }
const Kd = { name: "LuminosityHighPassShader", shaderID: "luminosityHighPass",
  uniforms: { tDiffuse: { value: null }, luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 }, defaultColor: { value: new He(0) }, defaultOpacity: { value: 0 } },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}` };
class ei extends ii { constructor(e, t, n, r) { super(), this.strength = t !== void 0 ? t : 1, this
      .radius = n, this.threshold = r, this.resolution = e !== void 0 ? new Pe(e.x, e.y) : new Pe(
        256, 256), this.clearColor = new He(0, 0, 0), this.renderTargetsHorizontal = [], this
      .renderTargetsVertical = [], this.nMips = 5; let s = Math.round(this.resolution.x / 2),
      o = Math.round(this.resolution.y / 2);
    this.renderTargetBright = new Bt(s, o, { type: tn }), this.renderTargetBright.texture.name =
      "UnrealBloomPass.bright", this.renderTargetBright.texture.generateMipmaps = !1; for (let f =
        0; f < this.nMips; f++) { const p = new Bt(s, o, { type: tn });
      p.texture.name = "UnrealBloomPass.h" + f, p.texture.generateMipmaps = !1, this
        .renderTargetsHorizontal.push(p); const m = new Bt(s, o, { type: tn });
      m.texture.name = "UnrealBloomPass.v" + f, m.texture.generateMipmaps = !1, this
        .renderTargetsVertical.push(m), s = Math.round(s / 2), o = Math.round(o / 2) } const a =
      Kd;
    this.highPassUniforms = di.clone(a.uniforms), this.highPassUniforms.luminosityThreshold
      .value = r, this.highPassUniforms.smoothWidth.value = .01, this.materialHighPassFilter =
      new vt({ uniforms: this.highPassUniforms, vertexShader: a.vertexShader, fragmentShader: a
          .fragmentShader }), this.separableBlurMaterials = []; const l = [3, 5, 7, 9, 11];
    s = Math.round(this.resolution.x / 2), o = Math.round(this.resolution.y / 2); for (let f =
      0; f < this.nMips; f++) this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[
        f])), this.separableBlurMaterials[f].uniforms.invSize.value = new Pe(1 / s, 1 / o), s =
      Math.round(s / 2), o = Math.round(o / 2);
    this.compositeMaterial = this.getCompositeMaterial(this.nMips), this.compositeMaterial
      .uniforms.blurTexture1.value = this.renderTargetsVertical[0].texture, this.compositeMaterial
      .uniforms.blurTexture2.value = this.renderTargetsVertical[1].texture, this.compositeMaterial
      .uniforms.blurTexture3.value = this.renderTargetsVertical[2].texture, this.compositeMaterial
      .uniforms.blurTexture4.value = this.renderTargetsVertical[3].texture, this.compositeMaterial
      .uniforms.blurTexture5.value = this.renderTargetsVertical[4].texture, this.compositeMaterial
      .uniforms.bloomStrength.value = t, this.compositeMaterial.uniforms.bloomRadius.value =
      .1; const c = [1, .8, .6, .4, .2];
    this.compositeMaterial.uniforms.bloomFactors.value = c, this.bloomTintColors = [new D(1, 1,
      1), new D(1, 1, 1), new D(1, 1, 1), new D(1, 1, 1), new D(1, 1, 1)
    ], this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors; const h = Ao;
    this.copyUniforms = di.clone(h.uniforms), this.blendMaterial = new vt({ uniforms: this
          .copyUniforms, vertexShader: h.vertexShader, fragmentShader: h.fragmentShader,
        blending: kr, depthTest: !1, depthWrite: !1, transparent: !0 }), this.enabled = !0, this
      .needsSwap = !1, this._oldClearColor = new He, this.oldClearAlpha = 1, this.basic = new rs,
      this.fsQuad = new as(null) } dispose() { for (let e = 0; e < this.renderTargetsHorizontal
      .length; e++) this.renderTargetsHorizontal[e].dispose(); for (let e = 0; e < this
      .renderTargetsVertical.length; e++) this.renderTargetsVertical[e].dispose();
    this.renderTargetBright.dispose(); for (let e = 0; e < this.separableBlurMaterials
      .length; e++) this.separableBlurMaterials[e].dispose();
    this.compositeMaterial.dispose(), this.blendMaterial.dispose(), this.basic.dispose(), this
      .fsQuad.dispose() } setSize(e, t) { let n = Math.round(e / 2),
      r = Math.round(t / 2);
    this.renderTargetBright.setSize(n, r); for (let s = 0; s < this.nMips; s++) this
      .renderTargetsHorizontal[s].setSize(n, r), this.renderTargetsVertical[s].setSize(n, r), this
      .separableBlurMaterials[s].uniforms.invSize.value = new Pe(1 / n, 1 / r), n = Math.round(n /
        2), r = Math.round(r / 2) } render(e, t, n, r, s) { e.getClearColor(this._oldClearColor),
      this.oldClearAlpha = e.getClearAlpha(); const o = e.autoClear;
    e.autoClear = !1, e.setClearColor(this.clearColor, 0), s && e.state.buffers.stencil.setTest(!
        1), this.renderToScreen && (this.fsQuad.material = this.basic, this.basic.map = n.texture,
        e.setRenderTarget(null), e.clear(), this.fsQuad.render(e)), this.highPassUniforms.tDiffuse
      .value = n.texture, this.highPassUniforms.luminosityThreshold.value = this.threshold, this
      .fsQuad.material = this.materialHighPassFilter, e.setRenderTarget(this.renderTargetBright),
      e.clear(), this.fsQuad.render(e); let a = this.renderTargetBright; for (let l = 0; l < this
      .nMips; l++) this.fsQuad.material = this.separableBlurMaterials[l], this
      .separableBlurMaterials[l].uniforms.colorTexture.value = a.texture, this
      .separableBlurMaterials[l].uniforms.direction.value = ei.BlurDirectionX, e.setRenderTarget(
        this.renderTargetsHorizontal[l]), e.clear(), this.fsQuad.render(e), this
      .separableBlurMaterials[l].uniforms.colorTexture.value = this.renderTargetsHorizontal[l]
      .texture, this.separableBlurMaterials[l].uniforms.direction.value = ei.BlurDirectionY, e
      .setRenderTarget(this.renderTargetsVertical[l]), e.clear(), this.fsQuad.render(e), a = this
      .renderTargetsVertical[l];
    this.fsQuad.material = this.compositeMaterial, this.compositeMaterial.uniforms.bloomStrength
      .value = this.strength, this.compositeMaterial.uniforms.bloomRadius.value = this.radius,
      this.compositeMaterial.uniforms.bloomTintColors.value = this.bloomTintColors, e
      .setRenderTarget(this.renderTargetsHorizontal[0]), e.clear(), this.fsQuad.render(e), this
      .fsQuad.material = this.blendMaterial, this.copyUniforms.tDiffuse.value = this
      .renderTargetsHorizontal[0].texture, s && e.state.buffers.stencil.setTest(!0), this
      .renderToScreen ? (e.setRenderTarget(null), this.fsQuad.render(e)) : (e.setRenderTarget(n),
        this.fsQuad.render(e)), e.setClearColor(this._oldClearColor, this.oldClearAlpha), e
      .autoClear = o } getSeperableBlurMaterial(e) { const t = []; for (let n = 0; n < e; n++) t
      .push(.39894 * Math.exp(-.5 * n * n / (e * e)) /
  e); return new vt({ defines: { KERNEL_RADIUS: e },
    uniforms: { colorTexture: { value: null }, invSize: { value: new Pe(.5, .5) },
        direction: { value: new Pe(.5, .5) }, gaussianCoefficients: { value: t } },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`, fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}` }) } getCompositeMaterial(e) { return new vt({ defines: { NUM_MIPS: e },
      uniforms: { blurTexture1: { value: null }, blurTexture2: { value: null },
        blurTexture3: { value: null }, blurTexture4: { value: null },
        blurTexture5: { value: null }, bloomStrength: { value: 1 },
        bloomFactors: { value: null }, bloomTintColors: { value: null },
        bloomRadius: { value: 0 } }, vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`, fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}` }) } } ei.BlurDirectionX = new Pe(1, 0);
ei.BlurDirectionY = new Pe(0, 1);
const jd = { name: "OutputShader", uniforms: { tDiffuse: { value: null },
    toneMappingExposure: { value: 1 } }, vertexShader: `
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`, fragmentShader: `

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}` };
class Zd extends ii { constructor() { super(); const e = jd;
      this.uniforms = di.clone(e.uniforms), this.material = new To({ name: e.name, uniforms: this
            .uniforms, vertexShader: e.vertexShader, fragmentShader: e.fragmentShader }), this
        .fsQuad = new as(this.material), this._outputColorSpace = null, this._toneMapping =
        null } render(e, t, n) { this.uniforms.tDiffuse.value = n.texture, this.uniforms
        .toneMappingExposure.value = e.toneMappingExposure, (this._outputColorSpace !== e
          .outputColorSpace || this._toneMapping !== e.toneMapping) && (this._outputColorSpace = e
          .outputColorSpace, this._toneMapping = e.toneMapping, this.material.defines = {}, We
          .getTransfer(this._outputColorSpace) === je && (this.material.defines.SRGB_TRANSFER = ""),
          this._toneMapping === za ? this.material.defines.LINEAR_TONE_MAPPING = "" : this
          ._toneMapping === Ga ? this.material.defines.REINHARD_TONE_MAPPING = "" : this
          ._toneMapping === Ha ? this.material.defines.CINEON_TONE_MAPPING = "" : this
          ._toneMapping === Va ? this.material.defines.ACES_FILMIC_TONE_MAPPING = "" : this
          ._toneMapping === ka && (this.material.defines.AGX_TONE_MAPPING = ""), this.material
          .needsUpdate = !0), this.renderToScreen === !0 ? (e.setRenderTarget(null), this.fsQuad
          .render(e)) : (e.setRenderTarget(t), this.clear && e.clear(e.autoClearColor, e
          .autoClearDepth, e.autoClearStencil), this.fsQuad.render(e)) } dispose() { this.material
        .dispose(), this.fsQuad.dispose() } }
var $d = `precision highp float;

uniform vec3 uColor;
uniform vec3 uColor2;

varying vec2 vUv;
varying vec3 vColor;
varying float vNoise;

void main() {
  vec2 uv = vUv;

  vec3 cursor = mix(uColor2, uColor * 0.4, vColor);


  gl_FragColor = vec4(cursor, 0.4);

  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,
  Jd = `uniform sampler2D uDisp;

uniform float uTime;

uniform vec2 uResolution;

varying vec3 vColor;
varying float vNoise;
varying vec2 vUv;

void main() {
  float tIntensity = texture2D(uDisp, uv).r;
  tIntensity = smoothstep(0.0, 0.9, tIntensity);
  tIntensity = clamp(0.0, 0.8, tIntensity);

  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;

  vUv = uv;
  vColor = vec3(pow(tIntensity, 2.0));
}`,
  Qd = `precision highp float;

uniform vec3 uColor;

varying vec2 vUv;
varying vec3 vColor;
varying float vNoise;

void main() {
    vec2 uv = gl_PointCoord;
    float distCenter = length(uv - vec2(0.5));

    if(distCenter > 0.5) discard;


    gl_FragColor = vec4(vec3(uColor * 0.9), vColor.y * ((vNoise) + 0.15));

}`,
  ep = `attribute vec3 normal;
attribute vec3 position;
attribute vec2 uv;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;

uniform sampler2D uDisp;

uniform float uTime;

uniform vec2 uResolution;

varying vec3 vColor;
varying float vNoise;

vec4 permute(vec4 x) {
  return mod(((x*34.0)+1.0)*x, 289.0);
}
vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

float perlinClassic3D(vec3 P) {
  vec3 Pi0 = floor(P);
  vec3 Pi1 = Pi0 + vec3(1.0);
  Pi0 = mod(Pi0, 289.0);
  Pi1 = mod(Pi1, 289.0);
  vec3 Pf0 = fract(P);
  vec3 Pf1 = Pf0 - vec3(1.0);
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 / 7.0;
  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 / 7.0;
  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

float noise(vec3 position) {
  return perlinClassic3D(vec3(position.xy * 10.0, uTime * 0.2)) * 0.15;
}

void main() {
  float tIntensity = texture2D(uDisp, uv).r;
  tIntensity = smoothstep(0.4, 0.9, tIntensity);


  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;
  gl_Position = projectedPosition;

  float elevation = noise(modelPosition.xyz);


  gl_PointSize = 46.0 * uResolution.y;
  gl_PointSize *= (1.0 / - viewPosition.z);

  vColor = vec3(pow(tIntensity, 3.0));
  vNoise = elevation;
}`;
window.addEventListener("resize", () => Co());
window.addEventListener("mousemove", i => lp(i));
const tp = document.querySelector("canvas.webgl"),
  ar = new Od,
  Vt = { width: window.innerWidth, height: window.innerHeight },
  Gt = {},
  hn = new Pt(35, Vt.width / Vt.height, .1, 100);
hn.position.set(0, 0, 10);
ar.add(hn);
const pi = new Eo({ canvas: tp, antialias: !0, alpha: !0 }),
  np = Math.min(devicePixelRatio, 2);
pi.setSize(Vt.width, Vt.height);
pi.setPixelRatio(np);
const _e = {};
_e.canvas = document.createElement("canvas");
_e.canvas.height = innerHeight * .5;
_e.canvas.width = innerWidth * .5;
_e.canvas.style.position = "fixed";
_e.canvas.style.height = `${innerHeight*.2}px`;
_e.canvas.style.width = `${innerWidth*.2}px`;
_e.canvas.style.top = 0;
_e.canvas.style.left = 0;
_e.canvas.style.zIndex = 10;
document.body.append(_e.canvas);
_e.context = _e.canvas.getContext("2d");
_e.context.fillRect(0, 0, _e.canvas.width, _e.canvas.height);
_e.glowImage = new Image;
_e.glowImage.crossOrigin = "anonymous";
_e.glowImage.src =
  "https://cdn.prod.website-files.com/66e2ac6ca9a970ee54d49cee/66e4e66b5c522b55b3ebd4bc_glow.png";
_e.mouse = new Pe(9999, 9999);
_e.mousePrev = new Pe(9999, 9999);
_e.dispTexture = new Gd(_e.canvas);
const ip = new Zd,
  rp = new Yd(ar, hn),
  sp = new ei(new Pe(innerWidth, innerHeight), .4, .1, .4),
  or = new qd(pi);
or.addPass(rp);
or.addPass(sp);
or.addPass(ip);
const os = new To({ vertexShader: ep, fragmentShader: Qd, uniforms: { uResolution: { value: [0,
        0] }, uColor: { value: new He("#FFD601") }, uDisp: { value: _e.dispTexture },
      uTime: { value: 0 } }, transparent: !0 }),
  ap = new vt({ vertexShader: Jd, fragmentShader: $d, uniforms: { uResolution: { value: [0, 0] },
      uColor: { value: new He("#FFE85C") }, uColor2: { value: new He("#EC6A09") },
      uDisp: { value: _e.dispTexture }, uTime: { value: 0 } }, transparent: !0 }),
  bo = new rr(1, 1, 60, 40),
  wo = new zd(bo, os),
  hi = new kt(bo, ap);
ar.add(wo);
ar.add(hi);
hi.position.z = -.01;
const op = new yo,
  Ro = () => { const i = op.getElapsedTime();
    _e.context.globalCompositeOperation = "source-over", _e.context.globalAlpha = .008, _e.context
      .fillRect(0, 0, _e.canvas.width, _e.canvas.height); const e = _e.mousePrev.distanceTo(_e
      .mouse);
    _e.mousePrev.copy(_e.mouse); const t = Math.min(e * .1, 1),
      n = _e.canvas.width * .6;
    _e.context.globalCompositeOperation = "lighten", _e.context.globalAlpha = t, _e.context
      .drawImage(_e.glowImage, _e.mouse.x - n * .5, _e.mouse.y - n * .5, n, n), _e.dispTexture
      .needsUpdate = !0, os.uniforms.uTime.value = i, or.render(), requestAnimationFrame(Ro) };
Ro();
Co();

function Co() { Vt.width = window.innerWidth, Vt.height = window.innerHeight, hn.aspect = Vt.width /
    Vt.height, hn.updateProjectionMatrix(); const i = hn.fov * (Math.PI / 180),
    e = 2 * Math.tan(i / 2) * hn.position.z,
    t = e * hn.aspect;
  Gt.width = t, Gt.height = e, hi.scale.x = Gt.width + 1.5, hi.scale.y = Gt.height + 1; const n = _e
    .canvas.width / _e.canvas.height;
  innerWidth / innerHeight > n ? (_e.canvas.style.width = `${innerHeight*n*.2}px`, _e.canvas.style
      .height = `${innerHeight*.2}px`) : (_e.canvas.style.width = `${innerWidth*.2}px`, _e.canvas
      .style.height = `${innerWidth/n*.2}px`), wo.scale.set(Gt.width, Gt.height), hi.scale.set(Gt
      .width + .1, Gt.height + .1), os.uniforms.uResolution.value = [Gt.width, Gt.height], pi
    .setSize(Vt.width, Vt.height), pi.setPixelRatio(Math.min(window.devicePixelRatio, 2)) }

function lp(i) { const e = i.clientX / innerWidth * 2 - 1,
    t = -(i.clientY / innerHeight) * 2 + 1,
    n = (e + 1) / 2 * _e.canvas.width,
    r = (1 - t) / 2 * _e.canvas.height;
  _e.mouse.set(n, r) }
