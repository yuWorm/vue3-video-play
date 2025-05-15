import { computed as pt, openBlock as te, createElementBlock as se, normalizeClass as ft, normalizeStyle as gt, ref as rt, onUnmounted as An, createElementVNode as U, toDisplayString as fe, unref as dt, defineComponent as zt, withDirectives as Re, createVNode as ce, createTextVNode as Ge, vShow as be, useCssVars as Ci, nextTick as Ln, getCurrentInstance as Qa, createCommentVNode as pe, reactive as Ts, withModifiers as Za, watch as In, onMounted as Rn, Transition as ci, withCtx as ui, Fragment as vs, renderList as Ss, useAttrs as Ja, mergeProps as eo, createBlock as to, withKeys as wt, renderSlot as Qt } from "vue";
function so(a, e, t) {
  var s = t || {}, i = s.noTrailing, r = i === void 0 ? !1 : i, n = s.noLeading, o = n === void 0 ? !1 : n, c = s.debounceMode, l = c === void 0 ? void 0 : c, u, d = !1, h = 0;
  function f() {
    u && clearTimeout(u);
  }
  function g(p) {
    var E = p || {}, v = E.upcomingOnly, T = v === void 0 ? !1 : v;
    f(), d = !T;
  }
  function y() {
    for (var p = arguments.length, E = new Array(p), v = 0; v < p; v++)
      E[v] = arguments[v];
    var T = this, S = Date.now() - h;
    if (d)
      return;
    function x() {
      h = Date.now(), e.apply(T, E);
    }
    function _() {
      u = void 0;
    }
    !o && l && !u && x(), f(), l === void 0 && S > a ? o ? (h = Date.now(), r || (u = setTimeout(l ? _ : x, a))) : x() : r !== !0 && (u = setTimeout(l ? _ : x, l === void 0 ? a - S : a));
  }
  return y.cancel = g, y;
}
function nr(a, e, t) {
  var s = t || {}, i = s.atBegin, r = i === void 0 ? !1 : i;
  return so(a, e, {
    debounceMode: r !== !1
  });
}
const N = Number.isFinite || function(a) {
  return typeof a == "number" && isFinite(a);
}, io = Number.isSafeInteger || function(a) {
  return typeof a == "number" && Math.abs(a) <= ro;
}, ro = Number.MAX_SAFE_INTEGER || 9007199254740991;
let H = /* @__PURE__ */ function(a) {
  return a.NETWORK_ERROR = "networkError", a.MEDIA_ERROR = "mediaError", a.KEY_SYSTEM_ERROR = "keySystemError", a.MUX_ERROR = "muxError", a.OTHER_ERROR = "otherError", a;
}({}), R = /* @__PURE__ */ function(a) {
  return a.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", a.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", a.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", a.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", a.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", a.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", a.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", a.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", a.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", a.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", a.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR = "keySystemDestroyMediaKeysError", a.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR = "keySystemDestroyCloseSessionError", a.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR = "keySystemDestroyRemoveSessionError", a.MANIFEST_LOAD_ERROR = "manifestLoadError", a.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", a.MANIFEST_PARSING_ERROR = "manifestParsingError", a.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", a.LEVEL_EMPTY_ERROR = "levelEmptyError", a.LEVEL_LOAD_ERROR = "levelLoadError", a.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", a.LEVEL_PARSING_ERROR = "levelParsingError", a.LEVEL_SWITCH_ERROR = "levelSwitchError", a.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", a.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", a.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", a.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", a.FRAG_LOAD_ERROR = "fragLoadError", a.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", a.FRAG_DECRYPT_ERROR = "fragDecryptError", a.FRAG_PARSING_ERROR = "fragParsingError", a.FRAG_GAP = "fragGap", a.REMUX_ALLOC_ERROR = "remuxAllocError", a.KEY_LOAD_ERROR = "keyLoadError", a.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", a.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", a.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", a.BUFFER_APPEND_ERROR = "bufferAppendError", a.BUFFER_APPENDING_ERROR = "bufferAppendingError", a.BUFFER_STALLED_ERROR = "bufferStalledError", a.BUFFER_FULL_ERROR = "bufferFullError", a.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", a.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", a.ASSET_LIST_LOAD_ERROR = "assetListLoadError", a.ASSET_LIST_LOAD_TIMEOUT = "assetListLoadTimeout", a.ASSET_LIST_PARSING_ERROR = "assetListParsingError", a.INTERSTITIAL_ASSET_ITEM_ERROR = "interstitialAssetItemError", a.INTERNAL_EXCEPTION = "internalException", a.INTERNAL_ABORTED = "aborted", a.ATTACH_MEDIA_ERROR = "attachMediaError", a.UNKNOWN = "unknown", a;
}({}), m = /* @__PURE__ */ function(a) {
  return a.MEDIA_ATTACHING = "hlsMediaAttaching", a.MEDIA_ATTACHED = "hlsMediaAttached", a.MEDIA_DETACHING = "hlsMediaDetaching", a.MEDIA_DETACHED = "hlsMediaDetached", a.MEDIA_ENDED = "hlsMediaEnded", a.STALL_RESOLVED = "hlsStallResolved", a.BUFFER_RESET = "hlsBufferReset", a.BUFFER_CODECS = "hlsBufferCodecs", a.BUFFER_CREATED = "hlsBufferCreated", a.BUFFER_APPENDING = "hlsBufferAppending", a.BUFFER_APPENDED = "hlsBufferAppended", a.BUFFER_EOS = "hlsBufferEos", a.BUFFERED_TO_END = "hlsBufferedToEnd", a.BUFFER_FLUSHING = "hlsBufferFlushing", a.BUFFER_FLUSHED = "hlsBufferFlushed", a.MANIFEST_LOADING = "hlsManifestLoading", a.MANIFEST_LOADED = "hlsManifestLoaded", a.MANIFEST_PARSED = "hlsManifestParsed", a.LEVEL_SWITCHING = "hlsLevelSwitching", a.LEVEL_SWITCHED = "hlsLevelSwitched", a.LEVEL_LOADING = "hlsLevelLoading", a.LEVEL_LOADED = "hlsLevelLoaded", a.LEVEL_UPDATED = "hlsLevelUpdated", a.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", a.LEVELS_UPDATED = "hlsLevelsUpdated", a.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", a.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", a.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", a.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", a.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", a.AUDIO_TRACK_UPDATED = "hlsAudioTrackUpdated", a.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", a.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", a.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", a.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", a.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", a.SUBTITLE_TRACK_UPDATED = "hlsSubtitleTrackUpdated", a.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", a.CUES_PARSED = "hlsCuesParsed", a.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", a.INIT_PTS_FOUND = "hlsInitPtsFound", a.FRAG_LOADING = "hlsFragLoading", a.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", a.FRAG_LOADED = "hlsFragLoaded", a.FRAG_DECRYPTED = "hlsFragDecrypted", a.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", a.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", a.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", a.FRAG_PARSED = "hlsFragParsed", a.FRAG_BUFFERED = "hlsFragBuffered", a.FRAG_CHANGED = "hlsFragChanged", a.FPS_DROP = "hlsFpsDrop", a.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", a.MAX_AUTO_LEVEL_UPDATED = "hlsMaxAutoLevelUpdated", a.ERROR = "hlsError", a.DESTROYING = "hlsDestroying", a.KEY_LOADING = "hlsKeyLoading", a.KEY_LOADED = "hlsKeyLoaded", a.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", a.BACK_BUFFER_REACHED = "hlsBackBufferReached", a.STEERING_MANIFEST_LOADED = "hlsSteeringManifestLoaded", a.ASSET_LIST_LOADING = "hlsAssetListLoading", a.ASSET_LIST_LOADED = "hlsAssetListLoaded", a.INTERSTITIALS_UPDATED = "hlsInterstitialsUpdated", a.INTERSTITIALS_BUFFERED_TO_BOUNDARY = "hlsInterstitialsBufferedToBoundary", a.INTERSTITIAL_ASSET_PLAYER_CREATED = "hlsInterstitialAssetPlayerCreated", a.INTERSTITIAL_STARTED = "hlsInterstitialStarted", a.INTERSTITIAL_ASSET_STARTED = "hlsInterstitialAssetStarted", a.INTERSTITIAL_ASSET_ENDED = "hlsInterstitialAssetEnded", a.INTERSTITIAL_ASSET_ERROR = "hlsInterstitialAssetError", a.INTERSTITIAL_ENDED = "hlsInterstitialEnded", a.INTERSTITIALS_PRIMARY_RESUMED = "hlsInterstitialsPrimaryResumed", a.PLAYOUT_LIMIT_REACHED = "hlsPlayoutLimitReached", a.EVENT_CUE_ENTER = "hlsEventCueEnter", a;
}({});
var Q = {
  MANIFEST: "manifest",
  LEVEL: "level",
  AUDIO_TRACK: "audioTrack",
  SUBTITLE_TRACK: "subtitleTrack"
}, G = {
  MAIN: "main",
  AUDIO: "audio",
  SUBTITLE: "subtitle"
};
class vt {
  //  About half of the estimated value will be from the last |halfLife| samples by weight.
  constructor(e, t = 0, s = 0) {
    this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(0.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = s;
  }
  sample(e, t) {
    const s = Math.pow(this.alpha_, e);
    this.estimate_ = t * (1 - s) + s * this.estimate_, this.totalWeight_ += e;
  }
  getTotalWeight() {
    return this.totalWeight_;
  }
  getEstimate() {
    if (this.alpha_) {
      const e = 1 - Math.pow(this.alpha_, this.totalWeight_);
      if (e)
        return this.estimate_ / e;
    }
    return this.estimate_;
  }
}
class no {
  constructor(e, t, s, i = 100) {
    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = s, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new vt(e), this.fast_ = new vt(t), this.defaultTTFB_ = i, this.ttfb_ = new vt(e);
  }
  update(e, t) {
    const {
      slow_: s,
      fast_: i,
      ttfb_: r
    } = this;
    s.halfLife !== e && (this.slow_ = new vt(e, s.getEstimate(), s.getTotalWeight())), i.halfLife !== t && (this.fast_ = new vt(t, i.getEstimate(), i.getTotalWeight())), r.halfLife !== e && (this.ttfb_ = new vt(e, r.getEstimate(), r.getTotalWeight()));
  }
  sample(e, t) {
    e = Math.max(e, this.minDelayMs_);
    const s = 8 * t, i = e / 1e3, r = s / i;
    this.fast_.sample(i, r), this.slow_.sample(i, r);
  }
  sampleTTFB(e) {
    const t = e / 1e3, s = Math.sqrt(2) * Math.exp(-Math.pow(t, 2) / 2);
    this.ttfb_.sample(s, Math.max(e, 5));
  }
  canEstimate() {
    return this.fast_.getTotalWeight() >= this.minWeight_;
  }
  getEstimate() {
    return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_;
  }
  getEstimateTTFB() {
    return this.ttfb_.getTotalWeight() >= this.minWeight_ ? this.ttfb_.getEstimate() : this.defaultTTFB_;
  }
  get defaultEstimate() {
    return this.defaultEstimate_;
  }
  destroy() {
  }
}
function ao(a, e, t) {
  return (e = lo(e)) in a ? Object.defineProperty(a, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = t, a;
}
function oe() {
  return oe = Object.assign ? Object.assign.bind() : function(a) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var s in t)
        ({}).hasOwnProperty.call(t, s) && (a[s] = t[s]);
    }
    return a;
  }, oe.apply(null, arguments);
}
function ar(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(a);
    e && (s = s.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a, i).enumerable;
    })), t.push.apply(t, s);
  }
  return t;
}
function re(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ar(Object(t), !0).forEach(function(s) {
      ao(a, s, t[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : ar(Object(t)).forEach(function(s) {
      Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(t, s));
    });
  }
  return a;
}
function oo(a, e) {
  if (typeof a != "object" || !a)
    return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(a, e);
    if (typeof s != "object")
      return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
function lo(a) {
  var e = oo(a, "string");
  return typeof e == "symbol" ? e : e + "";
}
class Ze {
  constructor(e, t) {
    this.trace = void 0, this.debug = void 0, this.log = void 0, this.warn = void 0, this.info = void 0, this.error = void 0;
    const s = `[${e}]:`;
    this.trace = st, this.debug = t.debug.bind(null, s), this.log = t.log.bind(null, s), this.warn = t.warn.bind(null, s), this.info = t.info.bind(null, s), this.error = t.error.bind(null, s);
  }
}
const st = function() {
}, co = {
  trace: st,
  debug: st,
  log: st,
  warn: st,
  info: st,
  error: st
};
function di() {
  return oe({}, co);
}
function uo(a, e) {
  const t = self.console[a];
  return t ? t.bind(self.console, `${e ? "[" + e + "] " : ""}[${a}] >`) : st;
}
function or(a, e, t) {
  return e[a] ? e[a].bind(e) : uo(a, t);
}
const hi = di();
function ho(a, e, t) {
  const s = di();
  if (typeof console == "object" && a === !0 || typeof a == "object") {
    const i = [
      // Remove out from list here to hard-disable a log-level
      // 'trace',
      "debug",
      "log",
      "info",
      "warn",
      "error"
    ];
    i.forEach((r) => {
      s[r] = or(r, a, t);
    });
    try {
      s.log(`Debug logs enabled for "${e}" in hls.js version 1.6.2`);
    } catch {
      return di();
    }
    i.forEach((r) => {
      hi[r] = or(r, a);
    });
  } else
    oe(hi, s);
  return s;
}
const Z = hi;
function nt(a = !0) {
  return typeof self > "u" ? void 0 : (a || !self.MediaSource) && self.ManagedMediaSource || self.MediaSource || self.WebKitMediaSource;
}
function fo(a) {
  return typeof self < "u" && a === self.ManagedMediaSource;
}
function bn(a, e) {
  const t = Object.keys(a), s = Object.keys(e), i = t.length, r = s.length;
  return !i || !r || i === r && !t.some((n) => s.indexOf(n) === -1);
}
function _e(a, e = !1) {
  if (typeof TextDecoder < "u") {
    const l = new TextDecoder("utf-8").decode(a);
    if (e) {
      const u = l.indexOf("\0");
      return u !== -1 ? l.substring(0, u) : l;
    }
    return l.replace(/\0/g, "");
  }
  const t = a.length;
  let s, i, r, n = "", o = 0;
  for (; o < t; ) {
    if (s = a[o++], s === 0 && e)
      return n;
    if (s === 0 || s === 3)
      continue;
    switch (s >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        n += String.fromCharCode(s);
        break;
      case 12:
      case 13:
        i = a[o++], n += String.fromCharCode((s & 31) << 6 | i & 63);
        break;
      case 14:
        i = a[o++], r = a[o++], n += String.fromCharCode((s & 15) << 12 | (i & 63) << 6 | (r & 63) << 0);
        break;
    }
  }
  return n;
}
const Be = {
  hexDump: function(a) {
    let e = "";
    for (let t = 0; t < a.length; t++) {
      let s = a[t].toString(16);
      s.length < 2 && (s = "0" + s), e += s;
    }
    return e;
  }
};
function go(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Ns = { exports: {} }, lr;
function mo() {
  return lr || (lr = 1, function(a, e) {
    (function(t) {
      var s = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, i = /^(?=([^\/?#]*))\1([^]*)$/, r = /(?:\/|^)\.(?=\/)/g, n = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
        // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
        // E.g
        // With opts.alwaysNormalize = false (default, spec compliant)
        // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
        // With opts.alwaysNormalize = true (not spec compliant)
        // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
        buildAbsoluteURL: function(c, l, u) {
          if (u = u || {}, c = c.trim(), l = l.trim(), !l) {
            if (!u.alwaysNormalize)
              return c;
            var d = o.parseURL(c);
            if (!d)
              throw new Error("Error trying to parse base URL.");
            return d.path = o.normalizePath(
              d.path
            ), o.buildURLFromParts(d);
          }
          var h = o.parseURL(l);
          if (!h)
            throw new Error("Error trying to parse relative URL.");
          if (h.scheme)
            return u.alwaysNormalize ? (h.path = o.normalizePath(h.path), o.buildURLFromParts(h)) : l;
          var f = o.parseURL(c);
          if (!f)
            throw new Error("Error trying to parse base URL.");
          if (!f.netLoc && f.path && f.path[0] !== "/") {
            var g = i.exec(f.path);
            f.netLoc = g[1], f.path = g[2];
          }
          f.netLoc && !f.path && (f.path = "/");
          var y = {
            // 2c) Otherwise, the embedded URL inherits the scheme of
            // the base URL.
            scheme: f.scheme,
            netLoc: h.netLoc,
            path: null,
            params: h.params,
            query: h.query,
            fragment: h.fragment
          };
          if (!h.netLoc && (y.netLoc = f.netLoc, h.path[0] !== "/"))
            if (!h.path)
              y.path = f.path, h.params || (y.params = f.params, h.query || (y.query = f.query));
            else {
              var p = f.path, E = p.substring(0, p.lastIndexOf("/") + 1) + h.path;
              y.path = o.normalizePath(E);
            }
          return y.path === null && (y.path = u.alwaysNormalize ? o.normalizePath(h.path) : h.path), o.buildURLFromParts(y);
        },
        parseURL: function(c) {
          var l = s.exec(c);
          return l ? {
            scheme: l[1] || "",
            netLoc: l[2] || "",
            path: l[3] || "",
            params: l[4] || "",
            query: l[5] || "",
            fragment: l[6] || ""
          } : null;
        },
        normalizePath: function(c) {
          for (c = c.split("").reverse().join("").replace(r, ""); c.length !== (c = c.replace(n, "")).length; )
            ;
          return c.split("").reverse().join("");
        },
        buildURLFromParts: function(c) {
          return c.scheme + c.netLoc + c.path + c.params + c.query + c.fragment;
        }
      };
      a.exports = o;
    })();
  }(Ns)), Ns.exports;
}
var Pi = mo();
class ki {
  constructor() {
    this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
      start: 0,
      first: 0,
      end: 0
    }, this.parsing = {
      start: 0,
      end: 0
    }, this.buffering = {
      start: 0,
      first: 0,
      end: 0
    };
  }
}
var ae = {
  AUDIO: "audio",
  VIDEO: "video",
  AUDIOVIDEO: "audiovideo"
};
class _n {
  constructor(e) {
    this._byteRange = null, this._url = null, this._stats = null, this._streams = null, this.base = void 0, this.relurl = void 0, typeof e == "string" && (e = {
      url: e
    }), this.base = e, yo(this, "stats");
  }
  // setByteRange converts a EXT-X-BYTERANGE attribute into a two element array
  setByteRange(e, t) {
    const s = e.split("@", 2);
    let i;
    s.length === 1 ? i = (t == null ? void 0 : t.byteRangeEndOffset) || 0 : i = parseInt(s[1]), this._byteRange = [i, parseInt(s[0]) + i];
  }
  get baseurl() {
    return this.base.url;
  }
  get byteRange() {
    return this._byteRange === null ? [] : this._byteRange;
  }
  get byteRangeStartOffset() {
    return this.byteRange[0];
  }
  get byteRangeEndOffset() {
    return this.byteRange[1];
  }
  get elementaryStreams() {
    return this._streams === null && (this._streams = {
      [ae.AUDIO]: null,
      [ae.VIDEO]: null,
      [ae.AUDIOVIDEO]: null
    }), this._streams;
  }
  set elementaryStreams(e) {
    this._streams = e;
  }
  get hasStats() {
    return this._stats !== null;
  }
  get hasStreams() {
    return this._streams !== null;
  }
  get stats() {
    return this._stats === null && (this._stats = new ki()), this._stats;
  }
  set stats(e) {
    this._stats = e;
  }
  get url() {
    return !this._url && this.baseurl && this.relurl && (this._url = Pi.buildAbsoluteURL(this.baseurl, this.relurl, {
      alwaysNormalize: !0
    })), this._url || "";
  }
  set url(e) {
    this._url = e;
  }
  clearElementaryStreamInfo() {
    const {
      elementaryStreams: e
    } = this;
    e[ae.AUDIO] = null, e[ae.VIDEO] = null, e[ae.AUDIOVIDEO] = null;
  }
}
function ye(a) {
  return a.sn !== "initSegment";
}
class Bs extends _n {
  constructor(e, t) {
    super(t), this._decryptdata = null, this._programDateTime = null, this._ref = null, this._bitrate = void 0, this.rawProgramDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.playlistOffset = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.urlId = 0, this.type = e;
  }
  get byteLength() {
    if (this.hasStats) {
      const e = this.stats.total;
      if (e)
        return e;
    }
    if (this.byteRange) {
      const e = this.byteRange[0], t = this.byteRange[1];
      if (N(e) && N(t))
        return t - e;
    }
    return null;
  }
  get bitrate() {
    return this.byteLength ? this.byteLength * 8 / this.duration : this._bitrate ? this._bitrate : null;
  }
  set bitrate(e) {
    this._bitrate = e;
  }
  get decryptdata() {
    const {
      levelkeys: e
    } = this;
    if (!e && !this._decryptdata)
      return null;
    if (!this._decryptdata && this.levelkeys && !this.levelkeys.NONE) {
      const t = this.levelkeys.identity;
      if (t)
        this._decryptdata = t.getDecryptData(this.sn);
      else {
        const s = Object.keys(this.levelkeys);
        if (s.length === 1)
          return this._decryptdata = this.levelkeys[s[0]].getDecryptData(this.sn);
      }
    }
    return this._decryptdata;
  }
  get end() {
    return this.start + this.duration;
  }
  get endProgramDateTime() {
    if (this.programDateTime === null)
      return null;
    const e = N(this.duration) ? this.duration : 0;
    return this.programDateTime + e * 1e3;
  }
  get encrypted() {
    var e;
    if ((e = this._decryptdata) != null && e.encrypted)
      return !0;
    if (this.levelkeys) {
      const t = Object.keys(this.levelkeys), s = t.length;
      if (s > 1 || s === 1 && this.levelkeys[t[0]].encrypted)
        return !0;
    }
    return !1;
  }
  get programDateTime() {
    return this._programDateTime === null && this.rawProgramDateTime && (this.programDateTime = Date.parse(this.rawProgramDateTime)), this._programDateTime;
  }
  set programDateTime(e) {
    if (!N(e)) {
      this._programDateTime = this.rawProgramDateTime = null;
      return;
    }
    this._programDateTime = e;
  }
  get ref() {
    return ye(this) ? (this._ref || (this._ref = {
      base: this.base,
      start: this.start,
      duration: this.duration,
      sn: this.sn,
      programDateTime: this.programDateTime
    }), this._ref) : null;
  }
  addStart(e) {
    this.setStart(this.start + e);
  }
  setStart(e) {
    this.start = e, this._ref && (this._ref.start = e);
  }
  setDuration(e) {
    this.duration = e, this._ref && (this._ref.duration = e);
  }
  setKeyFormat(e) {
    if (this.levelkeys) {
      const t = this.levelkeys[e];
      t && !this._decryptdata && (this._decryptdata = t.getDecryptData(this.sn));
    }
  }
  abortRequests() {
    var e, t;
    (e = this.loader) == null || e.abort(), (t = this.keyLoader) == null || t.abort();
  }
  setElementaryStreamInfo(e, t, s, i, r, n = !1) {
    const {
      elementaryStreams: o
    } = this, c = o[e];
    if (!c) {
      o[e] = {
        startPTS: t,
        endPTS: s,
        startDTS: i,
        endDTS: r,
        partial: n
      };
      return;
    }
    c.startPTS = Math.min(c.startPTS, t), c.endPTS = Math.max(c.endPTS, s), c.startDTS = Math.min(c.startDTS, i), c.endDTS = Math.max(c.endDTS, r);
  }
}
class po extends _n {
  constructor(e, t, s, i, r) {
    super(s), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = i;
    const n = e.enumeratedString("BYTERANGE");
    n && this.setByteRange(n, r), r && (this.fragOffset = r.fragOffset + r.duration);
  }
  get start() {
    return this.fragment.start + this.fragOffset;
  }
  get end() {
    return this.start + this.duration;
  }
  get loaded() {
    const {
      elementaryStreams: e
    } = this;
    return !!(e.audio || e.video || e.audiovideo);
  }
}
function Dn(a, e) {
  const t = Object.getPrototypeOf(a);
  if (t) {
    const s = Object.getOwnPropertyDescriptor(t, e);
    return s || Dn(t, e);
  }
}
function yo(a, e) {
  const t = Dn(a, e);
  t && (t.enumerable = !0, Object.defineProperty(a, e, t));
}
const xs = Math.pow(2, 32) - 1, Eo = [].push, Cn = {
  video: 1,
  audio: 2,
  id3: 3,
  text: 4
};
function he(a) {
  return String.fromCharCode.apply(null, a);
}
function Pn(a, e) {
  const t = a[e] << 8 | a[e + 1];
  return t < 0 ? 65536 + t : t;
}
function Y(a, e) {
  const t = kn(a, e);
  return t < 0 ? 4294967296 + t : t;
}
function cr(a, e) {
  let t = Y(a, e);
  return t *= Math.pow(2, 32), t += Y(a, e + 4), t;
}
function kn(a, e) {
  return a[e] << 24 | a[e + 1] << 16 | a[e + 2] << 8 | a[e + 3];
}
function Us(a, e, t) {
  a[e] = t >> 24, a[e + 1] = t >> 16 & 255, a[e + 2] = t >> 8 & 255, a[e + 3] = t & 255;
}
function To(a) {
  const e = a.byteLength;
  for (let t = 0; t < e; ) {
    const s = Y(a, t);
    if (s > 8 && a[t + 4] === 109 && a[t + 5] === 111 && a[t + 6] === 111 && a[t + 7] === 102)
      return !0;
    t = s > 1 ? t + s : e;
  }
  return !1;
}
function j(a, e) {
  const t = [];
  if (!e.length)
    return t;
  const s = a.byteLength;
  for (let i = 0; i < s; ) {
    const r = Y(a, i), n = he(a.subarray(i + 4, i + 8)), o = r > 1 ? i + r : s;
    if (n === e[0])
      if (e.length === 1)
        t.push(a.subarray(i + 8, o));
      else {
        const c = j(a.subarray(i + 8, o), e.slice(1));
        c.length && Eo.apply(t, c);
      }
    i = o;
  }
  return t;
}
function vo(a) {
  const e = [], t = a[0];
  let s = 8;
  const i = Y(a, s);
  s += 4;
  let r = 0, n = 0;
  t === 0 ? (r = Y(a, s), n = Y(a, s + 4), s += 8) : (r = cr(a, s), n = cr(a, s + 8), s += 16), s += 2;
  let o = a.length + n;
  const c = Pn(a, s);
  s += 2;
  for (let l = 0; l < c; l++) {
    let u = s;
    const d = Y(a, u);
    u += 4;
    const h = d & 2147483647;
    if ((d & 2147483648) >>> 31 === 1)
      return Z.warn("SIDX has hierarchical references (not supported)"), null;
    const g = Y(a, u);
    u += 4, e.push({
      referenceSize: h,
      subsegmentDuration: g,
      // unscaled
      info: {
        duration: g / i,
        start: o,
        end: o + h - 1
      }
    }), o += h, u += 4, s = u;
  }
  return {
    earliestPresentationTime: r,
    timescale: i,
    version: t,
    referencesCount: c,
    references: e
  };
}
function wn(a) {
  const e = [], t = j(a, ["moov", "trak"]);
  for (let i = 0; i < t.length; i++) {
    const r = t[i], n = j(r, ["tkhd"])[0];
    if (n) {
      let o = n[0];
      const c = Y(n, o === 0 ? 12 : 20), l = j(r, ["mdia", "mdhd"])[0];
      if (l) {
        o = l[0];
        const u = Y(l, o === 0 ? 12 : 20), d = j(r, ["mdia", "hdlr"])[0];
        if (d) {
          const h = he(d.subarray(8, 12)), f = {
            soun: ae.AUDIO,
            vide: ae.VIDEO
          }[h], g = j(r, ["mdia", "minf", "stbl", "stsd"])[0], y = So(g);
          f ? (e[c] = {
            timescale: u,
            type: f,
            stsd: y
          }, e[f] = re({
            timescale: u,
            id: c
          }, y)) : e[c] = {
            timescale: u,
            type: h,
            stsd: y
          };
        }
      }
    }
  }
  return j(a, ["moov", "mvex", "trex"]).forEach((i) => {
    const r = Y(i, 4), n = e[r];
    n && (n.default = {
      duration: Y(i, 12),
      flags: Y(i, 20)
    });
  }), e;
}
function So(a) {
  const e = a.subarray(8), t = e.subarray(8 + 78), s = he(e.subarray(4, 8));
  let i = s, r;
  const n = s === "enca" || s === "encv";
  if (n) {
    const l = j(e, [s])[0].subarray(s === "enca" ? 28 : 78);
    j(l, ["sinf"]).forEach((d) => {
      const h = j(d, ["schm"])[0];
      if (h) {
        const f = he(h.subarray(4, 8));
        if (f === "cbcs" || f === "cenc") {
          const g = j(d, ["frma"])[0];
          g && (i = he(g));
        }
      }
    });
  }
  const o = i;
  switch (i) {
    case "avc1":
    case "avc2":
    case "avc3":
    case "avc4": {
      const c = j(t, ["avcC"])[0];
      c && c.length > 3 && (i += "." + Jt(c[1]) + Jt(c[2]) + Jt(c[3]), r = Zt(o === "avc1" ? "dva1" : "dvav", t));
      break;
    }
    case "mp4a": {
      const c = j(e, [s])[0], l = j(c.subarray(28), ["esds"])[0];
      if (l && l.length > 7) {
        let u = 4;
        if (l[u++] !== 3)
          break;
        u = $s(l, u), u += 2;
        const d = l[u++];
        if (d & 128 && (u += 2), d & 64 && (u += l[u++]), l[u++] !== 4)
          break;
        u = $s(l, u);
        const h = l[u++];
        if (h === 64)
          i += "." + Jt(h);
        else
          break;
        if (u += 12, l[u++] !== 5)
          break;
        u = $s(l, u);
        const f = l[u++];
        let g = (f & 248) >> 3;
        g === 31 && (g += 1 + ((f & 7) << 3) + ((l[u] & 224) >> 5)), i += "." + g;
      }
      break;
    }
    case "hvc1":
    case "hev1": {
      const c = j(t, ["hvcC"])[0];
      if (c && c.length > 12) {
        const l = c[1], u = ["", "A", "B", "C"][l >> 6], d = l & 31, h = Y(c, 2), f = (l & 32) >> 5 ? "H" : "L", g = c[12], y = c.subarray(6, 12);
        i += "." + u + d, i += "." + h.toString(16).toUpperCase(), i += "." + f + g;
        let p = "";
        for (let E = y.length; E--; ) {
          const v = y[E];
          (v || p) && (p = "." + v.toString(16).toUpperCase() + p);
        }
        i += p;
      }
      r = Zt(o == "hev1" ? "dvhe" : "dvh1", t);
      break;
    }
    case "dvh1":
    case "dvhe":
    case "dvav":
    case "dva1":
    case "dav1": {
      i = Zt(i, t) || i;
      break;
    }
    case "vp09": {
      const c = j(t, ["vpcC"])[0];
      if (c && c.length > 6) {
        const l = c[4], u = c[5], d = c[6] >> 4 & 15;
        i += "." + Ne(l) + "." + Ne(u) + "." + Ne(d);
      }
      break;
    }
    case "av01": {
      const c = j(t, ["av1C"])[0];
      if (c && c.length > 2) {
        const l = c[1] >>> 5, u = c[1] & 31, d = c[2] >>> 7 ? "H" : "M", h = (c[2] & 64) >> 6, f = (c[2] & 32) >> 5, g = l === 2 && h ? f ? 12 : 10 : h ? 10 : 8, y = (c[2] & 16) >> 4, p = (c[2] & 8) >> 3, E = (c[2] & 4) >> 2, v = c[2] & 3, T = 1, S = 1, x = 1, _ = 0;
        i += "." + l + "." + Ne(u) + d + "." + Ne(g) + "." + y + "." + p + E + v + "." + Ne(T) + "." + Ne(S) + "." + Ne(x) + "." + _, r = Zt("dav1", t);
      }
      break;
    }
  }
  return {
    codec: i,
    encrypted: n,
    supplemental: r
  };
}
function Zt(a, e) {
  const t = j(e, ["dvvC"]), s = t.length ? t[0] : j(e, ["dvcC"])[0];
  if (s) {
    const i = s[2] >> 1 & 127, r = s[2] << 5 & 32 | s[3] >> 3 & 31;
    return a + "." + Ne(i) + "." + Ne(r);
  }
}
function $s(a, e) {
  const t = e + 5;
  for (; a[e++] & 128 && e < t; )
    ;
  return e;
}
function Jt(a) {
  return ("0" + a.toString(16).toUpperCase()).slice(-2);
}
function Ne(a) {
  return (a < 10 ? "0" : "") + a;
}
function xo(a, e) {
  if (!a || !e)
    return a;
  const t = e.keyId;
  return t && e.isCommonEncryption && j(a, ["moov", "trak"]).forEach((i) => {
    const n = j(i, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8);
    let o = j(n, ["enca"]);
    const c = o.length > 0;
    c || (o = j(n, ["encv"])), o.forEach((l) => {
      const u = c ? l.subarray(28) : l.subarray(78);
      j(u, ["sinf"]).forEach((h) => {
        const f = On(h);
        if (f) {
          const g = f.subarray(8, 24);
          g.some((y) => y !== 0) || (Z.log(`[eme] Patching keyId in 'enc${c ? "a" : "v"}>sinf>>tenc' box: ${Be.hexDump(g)} -> ${Be.hexDump(t)}`), f.set(t, 8));
        }
      });
    });
  }), a;
}
function On(a) {
  const e = j(a, ["schm"])[0];
  if (e) {
    const t = he(e.subarray(4, 8));
    if (t === "cbcs" || t === "cenc")
      return j(a, ["schi", "tenc"])[0];
  }
  return null;
}
function Ao(a, e) {
  return j(e, ["moof", "traf"]).reduce((t, s) => {
    const i = j(s, ["tfdt"])[0], r = i[0], n = j(s, ["tfhd"]).reduce((o, c) => {
      const l = Y(c, 4), u = a[l];
      if (u) {
        let d = Y(i, 4);
        if (r === 1) {
          if (d === xs)
            return Z.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), o;
          d *= xs + 1, d += Y(i, 8);
        }
        const h = u.timescale || 9e4, f = d / h;
        if (N(f) && (o === null || f < o))
          return f;
      }
      return o;
    }, null);
    return n !== null && N(n) && (t === null || n < t) ? n : t;
  }, null);
}
function Lo(a, e) {
  let t = 0, s = 0, i = 0;
  const r = j(a, ["moof", "traf"]);
  for (let n = 0; n < r.length; n++) {
    const o = r[n], c = j(o, ["tfhd"])[0], l = Y(c, 4), u = e[l];
    if (!u)
      continue;
    const d = u.default, h = Y(c, 0) | (d == null ? void 0 : d.flags);
    let f = d == null ? void 0 : d.duration;
    h & 8 && (h & 2 ? f = Y(c, 12) : f = Y(c, 8));
    const g = u.timescale || 9e4, y = j(o, ["trun"]);
    for (let p = 0; p < y.length; p++) {
      if (t = Io(y[p]), !t && f) {
        const E = Y(y[p], 4);
        t = f * E;
      }
      u.type === ae.VIDEO ? s += t / g : u.type === ae.AUDIO && (i += t / g);
    }
  }
  if (s === 0 && i === 0) {
    let n = 1 / 0, o = 0, c = 0;
    const l = j(a, ["sidx"]);
    for (let u = 0; u < l.length; u++) {
      const d = vo(l[u]);
      if (d != null && d.references) {
        n = Math.min(n, d.earliestPresentationTime / d.timescale);
        const h = d.references.reduce((f, g) => f + g.info.duration || 0, 0);
        o = Math.max(o, h + d.earliestPresentationTime / d.timescale), c = o - n;
      }
    }
    if (c && N(c))
      return c;
  }
  return s || i;
}
function Io(a) {
  const e = Y(a, 0);
  let t = 8;
  e & 1 && (t += 4), e & 4 && (t += 4);
  let s = 0;
  const i = Y(a, 4);
  for (let r = 0; r < i; r++) {
    if (e & 256) {
      const n = Y(a, t);
      s += n, t += 4;
    }
    e & 512 && (t += 4), e & 1024 && (t += 4), e & 2048 && (t += 4);
  }
  return s;
}
function Ro(a, e, t) {
  j(e, ["moof", "traf"]).forEach((s) => {
    j(s, ["tfhd"]).forEach((i) => {
      const r = Y(i, 4), n = a[r];
      if (!n)
        return;
      const o = n.timescale || 9e4;
      j(s, ["tfdt"]).forEach((c) => {
        const l = c[0], u = t * o;
        if (u) {
          let d = Y(c, 4);
          if (l === 0)
            d -= u, d = Math.max(d, 0), Us(c, 4, d);
          else {
            d *= Math.pow(2, 32), d += Y(c, 8), d -= u, d = Math.max(d, 0);
            const h = Math.floor(d / (xs + 1)), f = Math.floor(d % (xs + 1));
            Us(c, 4, h), Us(c, 8, f);
          }
        }
      });
    });
  });
}
function bo(a) {
  const e = {
    valid: null,
    remainder: null
  }, t = j(a, ["moof"]);
  if (t.length < 2)
    return e.remainder = a, e;
  const s = t[t.length - 1];
  return e.valid = a.slice(0, s.byteOffset - 8), e.remainder = a.slice(s.byteOffset - 8), e;
}
function ke(a, e) {
  const t = new Uint8Array(a.length + e.length);
  return t.set(a), t.set(e, a.length), t;
}
function ur(a, e) {
  const t = [], s = e.samples, i = e.timescale, r = e.id;
  let n = !1;
  return j(s, ["moof"]).map((c) => {
    const l = c.byteOffset - 8;
    j(c, ["traf"]).map((d) => {
      const h = j(d, ["tfdt"]).map((f) => {
        const g = f[0];
        let y = Y(f, 4);
        return g === 1 && (y *= Math.pow(2, 32), y += Y(f, 8)), y / i;
      })[0];
      return h !== void 0 && (a = h), j(d, ["tfhd"]).map((f) => {
        const g = Y(f, 4), y = Y(f, 0) & 16777215, p = (y & 1) !== 0, E = (y & 2) !== 0, v = (y & 8) !== 0;
        let T = 0;
        const S = (y & 16) !== 0;
        let x = 0;
        const _ = (y & 32) !== 0;
        let A = 8;
        g === r && (p && (A += 8), E && (A += 4), v && (T = Y(f, A), A += 4), S && (x = Y(f, A), A += 4), _ && (A += 4), e.type === "video" && (n = ws(e.codec)), j(d, ["trun"]).map((b) => {
          const C = b[0], L = Y(b, 0) & 16777215, w = (L & 1) !== 0;
          let F = 0;
          const X = (L & 4) !== 0, W = (L & 256) !== 0;
          let K = 0;
          const B = (L & 512) !== 0;
          let V = 0;
          const $ = (L & 1024) !== 0, O = (L & 2048) !== 0;
          let D = 0;
          const k = Y(b, 4);
          let M = 8;
          w && (F = Y(b, M), M += 4), X && (M += 4);
          let q = F + l;
          for (let J = 0; J < k; J++) {
            if (W ? (K = Y(b, M), M += 4) : K = T, B ? (V = Y(b, M), M += 4) : V = x, $ && (M += 4), O && (C === 0 ? D = Y(b, M) : D = kn(b, M), M += 4), e.type === ae.VIDEO) {
              let ie = 0;
              for (; ie < V; ) {
                const le = Y(s, q);
                if (q += 4, _o(n, s[q])) {
                  const ve = s.subarray(q, q + le);
                  wi(ve, n ? 2 : 1, a + D / i, t);
                }
                q += le, ie += le + 4;
              }
            }
            a += K / i;
          }
        }));
      });
    });
  }), t;
}
function ws(a) {
  if (!a)
    return !1;
  const e = a.substring(0, 4);
  return e === "hvc1" || e === "hev1" || // Dolby Vision
  e === "dvh1" || e === "dvhe";
}
function _o(a, e) {
  if (a) {
    const t = e >> 1 & 63;
    return t === 39 || t === 40;
  } else
    return (e & 31) === 6;
}
function wi(a, e, t, s) {
  const i = Fn(a);
  let r = 0;
  r += e;
  let n = 0, o = 0, c = 0;
  for (; r < i.length; ) {
    n = 0;
    do {
      if (r >= i.length)
        break;
      c = i[r++], n += c;
    } while (c === 255);
    o = 0;
    do {
      if (r >= i.length)
        break;
      c = i[r++], o += c;
    } while (c === 255);
    const l = i.length - r;
    let u = r;
    if (o < l)
      r += o;
    else if (o > l) {
      Z.error(`Malformed SEI payload. ${o} is too small, only ${l} bytes left to parse.`);
      break;
    }
    if (n === 4) {
      if (i[u++] === 181) {
        const h = Pn(i, u);
        if (u += 2, h === 49) {
          const f = Y(i, u);
          if (u += 4, f === 1195456820) {
            const g = i[u++];
            if (g === 3) {
              const y = i[u++], p = 31 & y, E = 64 & y, v = E ? 2 + p * 3 : 0, T = new Uint8Array(v);
              if (E) {
                T[0] = y;
                for (let S = 1; S < v; S++)
                  T[S] = i[u++];
              }
              s.push({
                type: g,
                payloadType: n,
                pts: t,
                bytes: T
              });
            }
          }
        }
      }
    } else if (n === 5 && o > 16) {
      const d = [];
      for (let g = 0; g < 16; g++) {
        const y = i[u++].toString(16);
        d.push(y.length == 1 ? "0" + y : y), (g === 3 || g === 5 || g === 7 || g === 9) && d.push("-");
      }
      const h = o - 16, f = new Uint8Array(h);
      for (let g = 0; g < h; g++)
        f[g] = i[u++];
      s.push({
        payloadType: n,
        pts: t,
        uuid: d.join(""),
        userData: _e(f),
        userDataBytes: f
      });
    }
  }
}
function Fn(a) {
  const e = a.byteLength, t = [];
  let s = 1;
  for (; s < e - 2; )
    a[s] === 0 && a[s + 1] === 0 && a[s + 2] === 3 ? (t.push(s + 2), s += 2) : s++;
  if (t.length === 0)
    return a;
  const i = e - t.length, r = new Uint8Array(i);
  let n = 0;
  for (s = 0; s < i; n++, s++)
    n === t[0] && (n++, t.shift()), r[s] = a[n];
  return r;
}
function Do(a) {
  const e = a[0];
  let t = "", s = "", i = 0, r = 0, n = 0, o = 0, c = 0, l = 0;
  if (e === 0) {
    for (; he(a.subarray(l, l + 1)) !== "\0"; )
      t += he(a.subarray(l, l + 1)), l += 1;
    for (t += he(a.subarray(l, l + 1)), l += 1; he(a.subarray(l, l + 1)) !== "\0"; )
      s += he(a.subarray(l, l + 1)), l += 1;
    s += he(a.subarray(l, l + 1)), l += 1, i = Y(a, 12), r = Y(a, 16), o = Y(a, 20), c = Y(a, 24), l = 28;
  } else if (e === 1) {
    l += 4, i = Y(a, l), l += 4;
    const d = Y(a, l);
    l += 4;
    const h = Y(a, l);
    for (l += 4, n = 2 ** 32 * d + h, io(n) || (n = Number.MAX_SAFE_INTEGER, Z.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = Y(a, l), l += 4, c = Y(a, l), l += 4; he(a.subarray(l, l + 1)) !== "\0"; )
      t += he(a.subarray(l, l + 1)), l += 1;
    for (t += he(a.subarray(l, l + 1)), l += 1; he(a.subarray(l, l + 1)) !== "\0"; )
      s += he(a.subarray(l, l + 1)), l += 1;
    s += he(a.subarray(l, l + 1)), l += 1;
  }
  const u = a.subarray(l, a.byteLength);
  return {
    schemeIdUri: t,
    value: s,
    timeScale: i,
    presentationTime: n,
    presentationTimeDelta: r,
    eventDuration: o,
    id: c,
    payload: u
  };
}
function Co(a, ...e) {
  const t = e.length;
  let s = 8, i = t;
  for (; i--; )
    s += e[i].byteLength;
  const r = new Uint8Array(s);
  for (r[0] = s >> 24 & 255, r[1] = s >> 16 & 255, r[2] = s >> 8 & 255, r[3] = s & 255, r.set(a, 4), i = 0, s = 8; i < t; i++)
    r.set(e[i], s), s += e[i].byteLength;
  return r;
}
function Po(a, e, t) {
  if (a.byteLength !== 16)
    throw new RangeError("Invalid system id");
  let s, i;
  s = 0, i = new Uint8Array();
  let r;
  s > 0 ? (r = new Uint8Array(4), e.length > 0 && new DataView(r.buffer).setUint32(0, e.length, !1)) : r = new Uint8Array();
  const n = new Uint8Array(4);
  return t && t.byteLength > 0 && new DataView(n.buffer).setUint32(0, t.byteLength, !1), Co(
    [112, 115, 115, 104],
    new Uint8Array([
      s,
      0,
      0,
      0
      // Flags
    ]),
    a,
    // 16 bytes
    r,
    i,
    n,
    t || new Uint8Array()
  );
}
function ko(a) {
  const e = [];
  if (a instanceof ArrayBuffer) {
    const t = a.byteLength;
    let s = 0;
    for (; s + 32 < t; ) {
      const i = new DataView(a, s), r = wo(i);
      e.push(r), s += r.size;
    }
  }
  return e;
}
function wo(a) {
  const e = a.getUint32(0), t = a.byteOffset, s = a.byteLength;
  if (s < e)
    return {
      offset: t,
      size: s
    };
  if (a.getUint32(4) !== 1886614376)
    return {
      offset: t,
      size: e
    };
  const r = a.getUint32(8) >>> 24;
  if (r !== 0 && r !== 1)
    return {
      offset: t,
      size: e
    };
  const n = a.buffer, o = Be.hexDump(new Uint8Array(n, t + 12, 16)), c = a.getUint32(28);
  let l = null, u = null;
  if (r === 0) {
    if (e - 32 < c || c < 22)
      return {
        offset: t,
        size: e
      };
    u = new Uint8Array(n, t + 32, c);
  } else if (r === 1) {
    if (!c || s < t + 32 + c * 16 + 16)
      return {
        offset: t,
        size: e
      };
    l = [];
    for (let d = 0; d < c; d++)
      l.push(new Uint8Array(n, t + 32 + d * 16, 16));
  }
  return {
    version: r,
    systemId: o,
    kids: l,
    data: u,
    offset: t,
    size: e
  };
}
const Mn = () => /\(Windows.+Firefox\//i.test(navigator.userAgent), _t = {
  audio: {
    a3ds: 1,
    "ac-3": 0.95,
    "ac-4": 1,
    alac: 0.9,
    alaw: 1,
    dra1: 1,
    "dts+": 1,
    "dts-": 1,
    dtsc: 1,
    dtse: 1,
    dtsh: 1,
    "ec-3": 0.9,
    enca: 1,
    fLaC: 0.9,
    // MP4-RA listed codec entry for FLAC
    flac: 0.9,
    // legacy browser codec name for FLAC
    FLAC: 0.9,
    // some manifests may list "FLAC" with Apple's tools
    g719: 1,
    g726: 1,
    m4ae: 1,
    mha1: 1,
    mha2: 1,
    mhm1: 1,
    mhm2: 1,
    mlpa: 1,
    mp4a: 1,
    "raw ": 1,
    Opus: 1,
    opus: 1,
    // browsers expect this to be lowercase despite MP4RA says 'Opus'
    samr: 1,
    sawb: 1,
    sawp: 1,
    sevc: 1,
    sqcp: 1,
    ssmv: 1,
    twos: 1,
    ulaw: 1
  },
  video: {
    avc1: 1,
    avc2: 1,
    avc3: 1,
    avc4: 1,
    avcp: 1,
    av01: 0.8,
    dav1: 0.8,
    drac: 1,
    dva1: 1,
    dvav: 1,
    dvh1: 0.7,
    dvhe: 0.7,
    encv: 1,
    hev1: 0.75,
    hvc1: 0.75,
    mjp2: 1,
    mp4v: 1,
    mvc1: 1,
    mvc2: 1,
    mvc3: 1,
    mvc4: 1,
    resv: 1,
    rv60: 1,
    s263: 1,
    svc1: 1,
    svc2: 1,
    "vc-1": 1,
    vp08: 1,
    vp09: 0.9
  },
  text: {
    stpp: 1,
    wvtt: 1
  }
};
function Nn(a, e) {
  const t = _t[e];
  return !!t && !!t[a.slice(0, 4)];
}
function fi(a, e, t = !0) {
  return !a.split(",").some((s) => !Bn(s, e, t));
}
function Bn(a, e, t = !0) {
  var s;
  const i = nt(t);
  return (s = i == null ? void 0 : i.isTypeSupported(Gt(a, e))) != null ? s : !1;
}
function Gt(a, e) {
  return `${e}/mp4;codecs=${a}`;
}
function dr(a) {
  if (a) {
    const e = a.substring(0, 4);
    return _t.video[e];
  }
  return 2;
}
function As(a) {
  const e = Mn();
  return a.split(",").reduce((t, s) => {
    const r = e && ws(s) ? 9 : _t.video[s];
    return r ? (r * 2 + t) / (t ? 3 : 2) : (_t.audio[s] + t) / (t ? 2 : 1);
  }, 0);
}
const Gs = {};
function Oo(a, e = !0) {
  if (Gs[a])
    return Gs[a];
  const t = {
    // Idealy fLaC and Opus would be first (spec-compliant) but
    // some browsers will report that fLaC is supported then fail.
    // see: https://bugs.chromium.org/p/chromium/issues/detail?id=1422728
    flac: ["flac", "fLaC", "FLAC"],
    opus: ["opus", "Opus"],
    // Replace audio codec info if browser does not support mp4a.40.34,
    // and demuxer can fallback to 'audio/mpeg' or 'audio/mp4;codecs="mp3"'
    "mp4a.40.34": ["mp3"]
  }[a];
  for (let i = 0; i < t.length; i++) {
    var s;
    if (Bn(t[i], "audio", e))
      return Gs[a] = t[i], t[i];
    if (t[i] === "mp3" && (s = nt(e)) != null && s.isTypeSupported("audio/mpeg"))
      return "";
  }
  return a;
}
const Fo = /flac|opus|mp4a\.40\.34/i;
function Ls(a, e = !0) {
  return a.replace(Fo, (t) => Oo(t.toLowerCase(), e));
}
function Mo(a, e) {
  const t = [];
  if (a) {
    const s = a.split(",");
    for (let i = 0; i < s.length; i++)
      Nn(s[i], "video") || t.push(s[i]);
  }
  return e && t.push(e), t.join(",");
}
function hs(a, e) {
  if (a && (a.length > 4 || ["ac-3", "ec-3", "alac", "fLaC", "Opus"].indexOf(a) !== -1))
    return a;
  if (e) {
    const t = e.split(",");
    if (t.length > 1) {
      if (a) {
        for (let s = t.length; s--; )
          if (t[s].substring(0, 4) === a.substring(0, 4))
            return t[s];
      }
      return t[0];
    }
  }
  return e || a;
}
function No(a) {
  const e = a.split(",");
  for (let t = 0; t < e.length; t++) {
    const s = e[t].split(".");
    if (s.length > 2) {
      let i = s.shift() + ".";
      i += parseInt(s.shift()).toString(16), i += ("000" + parseInt(s.shift()).toString(16)).slice(-4), e[t] = i;
    }
  }
  return e.join(",");
}
function Bo(a) {
  if (a.startsWith("av01.")) {
    const e = a.split("."), t = ["0", "111", "01", "01", "01", "0"];
    for (let s = e.length; s > 4 && s < 10; s++)
      e[s] = t[s - 4];
    return e.join(".");
  }
  return a;
}
function hr(a) {
  const e = nt(a) || {
    isTypeSupported: () => !1
  };
  return {
    mpeg: e.isTypeSupported("audio/mpeg"),
    mp3: e.isTypeSupported('audio/mp4; codecs="mp3"'),
    ac3: e.isTypeSupported('audio/mp4; codecs="ac-3"')
  };
}
function Un(a) {
  return a.replace(/^.+codecs=["']?([^"']+).*$/, "$1");
}
const $n = {
  supported: !0,
  configurations: [],
  decodingInfoResults: [{
    supported: !0,
    powerEfficient: !0,
    smooth: !0
  }]
};
function Gn(a, e) {
  return {
    supported: !1,
    configurations: e,
    decodingInfoResults: [{
      supported: !1,
      smooth: !1,
      powerEfficient: !1
    }],
    error: a
  };
}
const fr = {};
function Uo(a, e, t, s, i, r) {
  const n = a.audioCodec ? a.audioGroups : null, o = r == null ? void 0 : r.audioCodec, c = r == null ? void 0 : r.channels, l = c ? parseInt(c) : o ? 1 / 0 : 2;
  let u = null;
  if (n != null && n.length)
    try {
      n.length === 1 && n[0] ? u = e.groups[n[0]].channels : u = n.reduce((d, h) => {
        if (h) {
          const f = e.groups[h];
          if (!f)
            throw new Error(`Audio track group ${h} not found`);
          Object.keys(f.channels).forEach((g) => {
            d[g] = (d[g] || 0) + f.channels[g];
          });
        }
        return d;
      }, {
        2: 0
      });
    } catch {
      return !0;
    }
  return a.videoCodec !== void 0 && (a.width > 1920 && a.height > 1088 || a.height > 1920 && a.width > 1088 || a.frameRate > Math.max(s, 30) || a.videoRange !== "SDR" && a.videoRange !== t || a.bitrate > Math.max(i, 8e6)) || !!u && N(l) && Object.keys(u).some((d) => parseInt(d) > l);
}
function Vn(a, e, t) {
  const s = a.videoCodec, i = a.audioCodec;
  if (!s && !i || !t)
    return Promise.resolve($n);
  const r = [];
  if (s) {
    const n = {
      width: a.width,
      height: a.height,
      bitrate: Math.ceil(Math.max(a.bitrate * 0.9, a.averageBitrate)),
      // Assume a framerate of 30fps since MediaCapabilities will not accept Level default of 0.
      framerate: a.frameRate || 30
    }, o = a.videoRange;
    o !== "SDR" && (n.transferFunction = o.toLowerCase());
    const c = s.split(","), l = navigator.userAgent;
    if (c.some((u) => ws(u)) && Mn())
      return Promise.resolve(Gn(new Error(`Overriding Windows Firefox HEVC MediaCapabilities result based on user-agent sting: (${l})`), r));
    r.push.apply(r, c.map((u) => ({
      type: "media-source",
      video: re(re({}, n), {}, {
        contentType: Gt(Bo(u), "video")
      })
    })));
  }
  return i && a.audioGroups && a.audioGroups.forEach((n) => {
    var o;
    n && ((o = e.groups[n]) == null || o.tracks.forEach((c) => {
      if (c.groupId === n) {
        const l = c.channels || "", u = parseFloat(l);
        N(u) && u > 2 && r.push.apply(r, i.split(",").map((d) => ({
          type: "media-source",
          audio: {
            contentType: Gt(d, "audio"),
            channels: "" + u
            // spatialRendering:
            //   audioCodec === 'ec-3' && channels.indexOf('JOC'),
          }
        })));
      }
    }));
  }), Promise.all(r.map((n) => {
    const o = $o(n);
    return fr[o] || (fr[o] = t.decodingInfo(n));
  })).then((n) => ({
    supported: !n.some((o) => !o.supported),
    configurations: r,
    decodingInfoResults: n
  })).catch((n) => ({
    supported: !1,
    configurations: r,
    decodingInfoResults: [],
    error: n
  }));
}
function $o(a) {
  const {
    audio: e,
    video: t
  } = a, s = t || e;
  if (s) {
    const i = Un(s.contentType);
    if (t)
      return `r${t.height}x${t.width}f${Math.ceil(t.framerate)}${t.transferFunction || "sd"}_${i}_${Math.ceil(t.bitrate / 1e5)}`;
    if (e)
      return `c${e.channels}${e.spatialRendering ? "s" : "n"}_${i}`;
  }
  return "";
}
const gi = ["NONE", "TYPE-0", "TYPE-1", null];
function Go(a) {
  return gi.indexOf(a) > -1;
}
const Is = ["SDR", "PQ", "HLG"];
function Vo(a) {
  return !!a && Is.indexOf(a) > -1;
}
var fs = {
  No: "",
  Yes: "YES",
  v2: "v2"
};
function gr(a) {
  const {
    canSkipUntil: e,
    canSkipDateRanges: t,
    age: s
  } = a, i = s < e / 2;
  return e && i ? t ? fs.v2 : fs.Yes : fs.No;
}
class mr {
  constructor(e, t, s) {
    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = s;
  }
  addDirectives(e) {
    const t = new self.URL(e);
    return this.msn !== void 0 && t.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href;
  }
}
class Vt {
  constructor(e) {
    if (this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.url = void 0, this.frameRate = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.supplemental = void 0, this.videoCodec = void 0, this.width = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.supportedPromise = void 0, this.supportedResult = void 0, this._avgBitrate = 0, this._audioGroups = void 0, this._subtitleGroups = void 0, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.frameRate = e.attrs.optionalFloat("FRAME-RATE", 0), this._avgBitrate = e.attrs.decimalInteger("AVERAGE-BANDWIDTH"), this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.codecSet = [e.videoCodec, e.audioCodec].filter((s) => !!s).map((s) => s.substring(0, 4)).join(","), "supplemental" in e) {
      var t;
      this.supplemental = e.supplemental;
      const s = (t = e.supplemental) == null ? void 0 : t.videoCodec;
      s && s !== e.videoCodec && (this.codecSet += `,${s.substring(0, 4)}`);
    }
    this.addGroupId("audio", e.attrs.AUDIO), this.addGroupId("text", e.attrs.SUBTITLES);
  }
  get maxBitrate() {
    return Math.max(this.realBitrate, this.bitrate);
  }
  get averageBitrate() {
    return this._avgBitrate || this.realBitrate || this.bitrate;
  }
  get attrs() {
    return this._attrs[0];
  }
  get codecs() {
    return this.attrs.CODECS || "";
  }
  get pathwayId() {
    return this.attrs["PATHWAY-ID"] || ".";
  }
  get videoRange() {
    return this.attrs["VIDEO-RANGE"] || "SDR";
  }
  get score() {
    return this.attrs.optionalFloat("SCORE", 0);
  }
  get uri() {
    return this.url[0] || "";
  }
  hasAudioGroup(e) {
    return pr(this._audioGroups, e);
  }
  hasSubtitleGroup(e) {
    return pr(this._subtitleGroups, e);
  }
  get audioGroups() {
    return this._audioGroups;
  }
  get subtitleGroups() {
    return this._subtitleGroups;
  }
  addGroupId(e, t) {
    if (t) {
      if (e === "audio") {
        let s = this._audioGroups;
        s || (s = this._audioGroups = []), s.indexOf(t) === -1 && s.push(t);
      } else if (e === "text") {
        let s = this._subtitleGroups;
        s || (s = this._subtitleGroups = []), s.indexOf(t) === -1 && s.push(t);
      }
    }
  }
  // Deprecated methods (retained for backwards compatibility)
  get urlId() {
    return 0;
  }
  set urlId(e) {
  }
  get audioGroupIds() {
    return this.audioGroups ? [this.audioGroupId] : void 0;
  }
  get textGroupIds() {
    return this.subtitleGroups ? [this.textGroupId] : void 0;
  }
  get audioGroupId() {
    var e;
    return (e = this.audioGroups) == null ? void 0 : e[0];
  }
  get textGroupId() {
    var e;
    return (e = this.subtitleGroups) == null ? void 0 : e[0];
  }
  addFallback() {
  }
}
function pr(a, e) {
  return !e || !a ? !1 : a.indexOf(e) !== -1;
}
function Ko() {
  if (typeof matchMedia == "function") {
    const a = matchMedia("(dynamic-range: high)"), e = matchMedia("bad query");
    if (a.media !== e.media)
      return a.matches === !0;
  }
  return !1;
}
function Ho(a, e) {
  let t = !1, s = [];
  if (a && (t = a !== "SDR", s = [a]), e) {
    s = e.allowedVideoRanges || Is.slice(0);
    const i = s.join("") !== "SDR" && !e.videoCodec;
    t = e.preferHDR !== void 0 ? e.preferHDR : i && Ko(), t || (s = ["SDR"]);
  }
  return {
    preferHDR: t,
    allowedVideoRanges: s
  };
}
const Wo = (a) => {
  const e = /* @__PURE__ */ new WeakSet();
  return (t, s) => {
    if (a && (s = a(t, s)), typeof s == "object" && s !== null) {
      if (e.has(s))
        return;
      e.add(s);
    }
    return s;
  };
}, ue = (a, e) => JSON.stringify(a, Wo(e));
function Yo(a, e, t, s, i) {
  const r = Object.keys(a), n = s == null ? void 0 : s.channels, o = s == null ? void 0 : s.audioCodec, c = i == null ? void 0 : i.videoCodec, l = n && parseInt(n) === 2;
  let u = !1, d = !1, h = 1 / 0, f = 1 / 0, g = 1 / 0, y = 1 / 0, p = 0, E = [];
  const {
    preferHDR: v,
    allowedVideoRanges: T
  } = Ho(e, i);
  for (let b = r.length; b--; ) {
    const C = a[r[b]];
    u || (u = C.channels[2] > 0), h = Math.min(h, C.minHeight), f = Math.min(f, C.minFramerate), g = Math.min(g, C.minBitrate), T.filter((w) => C.videoRanges[w] > 0).length > 0 && (d = !0);
  }
  h = N(h) ? h : 0, f = N(f) ? f : 0;
  const S = Math.max(1080, h), x = Math.max(30, f);
  g = N(g) ? g : t, t = Math.max(g, t), d || (e = void 0);
  const _ = r.length > 1;
  return {
    codecSet: r.reduce((b, C) => {
      const L = a[C];
      if (C === b)
        return b;
      if (E = d ? T.filter((w) => L.videoRanges[w] > 0) : [], _) {
        if (L.minBitrate > t)
          return Me(C, `min bitrate of ${L.minBitrate} > current estimate of ${t}`), b;
        if (!L.hasDefaultAudio)
          return Me(C, "no renditions with default or auto-select sound found"), b;
        if (o && C.indexOf(o.substring(0, 4)) % 5 !== 0)
          return Me(C, `audio codec preference "${o}" not found`), b;
        if (n && !l) {
          if (!L.channels[n])
            return Me(C, `no renditions with ${n} channel sound found (channels options: ${Object.keys(L.channels)})`), b;
        } else if ((!o || l) && u && L.channels[2] === 0)
          return Me(C, "no renditions with stereo sound found"), b;
        if (L.minHeight > S)
          return Me(C, `min resolution of ${L.minHeight} > maximum of ${S}`), b;
        if (L.minFramerate > x)
          return Me(C, `min framerate of ${L.minFramerate} > maximum of ${x}`), b;
        if (!E.some((w) => L.videoRanges[w] > 0))
          return Me(C, `no variants with VIDEO-RANGE of ${ue(E)} found`), b;
        if (c && C.indexOf(c.substring(0, 4)) % 5 !== 0)
          return Me(C, `video codec preference "${c}" not found`), b;
        if (L.maxScore < p)
          return Me(C, `max score of ${L.maxScore} < selected max of ${p}`), b;
      }
      return b && (As(C) >= As(b) || L.fragmentError > a[b].fragmentError) ? b : (y = L.minIndex, p = L.maxScore, C);
    }, void 0),
    videoRanges: E,
    preferHDR: v,
    minFramerate: f,
    minBitrate: g,
    minIndex: y
  };
}
function Me(a, e) {
  Z.log(`[abr] start candidates with "${a}" ignored because ${e}`);
}
function Kn(a) {
  return a.reduce((e, t) => {
    let s = e.groups[t.groupId];
    s || (s = e.groups[t.groupId] = {
      tracks: [],
      channels: {
        2: 0
      },
      hasDefault: !1,
      hasAutoSelect: !1
    }), s.tracks.push(t);
    const i = t.channels || "2";
    return s.channels[i] = (s.channels[i] || 0) + 1, s.hasDefault = s.hasDefault || t.default, s.hasAutoSelect = s.hasAutoSelect || t.autoselect, s.hasDefault && (e.hasDefaultAudio = !0), s.hasAutoSelect && (e.hasAutoSelectAudio = !0), e;
  }, {
    hasDefaultAudio: !1,
    hasAutoSelectAudio: !1,
    groups: {}
  });
}
function qo(a, e, t, s) {
  return a.slice(t, s + 1).reduce((i, r, n) => {
    if (!r.codecSet)
      return i;
    const o = r.audioGroups;
    let c = i[r.codecSet];
    c || (i[r.codecSet] = c = {
      minBitrate: 1 / 0,
      minHeight: 1 / 0,
      minFramerate: 1 / 0,
      minIndex: n,
      maxScore: 0,
      videoRanges: {
        SDR: 0
      },
      channels: {
        2: 0
      },
      hasDefaultAudio: !o,
      fragmentError: 0
    }), c.minBitrate = Math.min(c.minBitrate, r.bitrate);
    const l = Math.min(r.height, r.width);
    return c.minHeight = Math.min(c.minHeight, l), c.minFramerate = Math.min(c.minFramerate, r.frameRate), c.minIndex = Math.min(c.minIndex, n), c.maxScore = Math.max(c.maxScore, r.score), c.fragmentError += r.fragmentError, c.videoRanges[r.videoRange] = (c.videoRanges[r.videoRange] || 0) + 1, o && o.forEach((u) => {
      if (!u)
        return;
      const d = e.groups[u];
      d && (c.hasDefaultAudio = c.hasDefaultAudio || e.hasDefaultAudio ? d.hasDefault : d.hasAutoSelect || !e.hasDefaultAudio && !e.hasAutoSelectAudio, Object.keys(d.channels).forEach((h) => {
        c.channels[h] = (c.channels[h] || 0) + d.channels[h];
      }));
    }), i;
  }, {});
}
function yr(a) {
  if (!a)
    return a;
  const {
    lang: e,
    assocLang: t,
    characteristics: s,
    channels: i,
    audioCodec: r
  } = a;
  return {
    lang: e,
    assocLang: t,
    characteristics: s,
    channels: i,
    audioCodec: r
  };
}
function Ke(a, e, t) {
  if ("attrs" in a) {
    const s = e.indexOf(a);
    if (s !== -1)
      return s;
  }
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (yt(a, i, t))
      return s;
  }
  return -1;
}
function yt(a, e, t) {
  const {
    groupId: s,
    name: i,
    lang: r,
    assocLang: n,
    default: o
  } = a, c = a.forced;
  return (s === void 0 || e.groupId === s) && (i === void 0 || e.name === i) && (r === void 0 || jo(r, e.lang)) && (r === void 0 || e.assocLang === n) && (o === void 0 || e.default === o) && (c === void 0 || e.forced === c) && (!("characteristics" in a) || zo(a.characteristics || "", e.characteristics)) && (t === void 0 || t(a, e));
}
function jo(a, e = "--") {
  return a.length === e.length ? a === e : a.startsWith(e) || e.startsWith(a);
}
function zo(a, e = "") {
  const t = a.split(","), s = e.split(",");
  return t.length === s.length && !t.some((i) => s.indexOf(i) === -1);
}
function ht(a, e) {
  const {
    audioCodec: t,
    channels: s
  } = a;
  return (t === void 0 || (e.audioCodec || "").substring(0, 4) === t.substring(0, 4)) && (s === void 0 || s === (e.channels || "2"));
}
function Xo(a, e, t, s, i) {
  const r = e[s], o = e.reduce((h, f, g) => {
    const y = f.uri;
    return (h[y] || (h[y] = [])).push(g), h;
  }, {})[r.uri];
  o.length > 1 && (s = Math.max.apply(Math, o));
  const c = r.videoRange, l = r.frameRate, u = r.codecSet.substring(0, 4), d = Er(e, s, (h) => {
    if (h.videoRange !== c || h.frameRate !== l || h.codecSet.substring(0, 4) !== u)
      return !1;
    const f = h.audioGroups, g = t.filter((y) => !f || f.indexOf(y.groupId) !== -1);
    return Ke(a, g, i) > -1;
  });
  return d > -1 ? d : Er(e, s, (h) => {
    const f = h.audioGroups, g = t.filter((y) => !f || f.indexOf(y.groupId) !== -1);
    return Ke(a, g, i) > -1;
  });
}
function Er(a, e, t) {
  for (let s = e; s > -1; s--)
    if (t(a[s]))
      return s;
  for (let s = e + 1; s < a.length; s++)
    if (t(a[s]))
      return s;
  return -1;
}
function Rs(a, e) {
  var t;
  return !!a && a !== ((t = e.loadLevelObj) == null ? void 0 : t.uri);
}
class Qo extends Ze {
  constructor(e) {
    super("abr", e.logger), this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = -1, this.firstSelection = -1, this._nextAutoLevel = -1, this.nextAutoLevelKey = "", this.audioTracksByGroup = null, this.codecTiers = null, this.timer = -1, this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.rebufferNotice = -1, this.bwEstimator = void 0, this._abandonRulesCheck = (t) => {
      var s;
      const {
        fragCurrent: i,
        partCurrent: r,
        hls: n
      } = this, {
        autoLevelEnabled: o,
        media: c
      } = n;
      if (!i || !c)
        return;
      const l = performance.now(), u = r ? r.stats : i.stats, d = r ? r.duration : i.duration, h = l - u.loading.start, f = n.minAutoLevel, g = i.level, y = this._nextAutoLevel;
      if (u.aborted || u.loaded && u.loaded === u.total || g <= f) {
        this.clearTimer(), this._nextAutoLevel = -1;
        return;
      }
      if (!o)
        return;
      const p = y > -1 && y !== g, E = !!t || p;
      if (!E && (c.paused || !c.playbackRate || !c.readyState))
        return;
      const v = n.mainForwardBufferInfo;
      if (!E && v === null)
        return;
      const T = this.bwEstimator.getEstimateTTFB(), S = Math.abs(c.playbackRate);
      if (h <= Math.max(T, 1e3 * (d / (S * 2))))
        return;
      const x = v ? v.len / S : 0, _ = u.loading.first ? u.loading.first - u.loading.start : -1, A = u.loaded && _ > -1, b = this.getBwEstimate(), C = n.levels, L = C[g], w = Math.max(u.loaded, Math.round(d * (i.bitrate || L.averageBitrate) / 8));
      let F = A ? h - _ : h;
      F < 1 && A && (F = Math.min(h, u.loaded * 8 / b));
      const X = A ? u.loaded * 1e3 / F : 0, W = T / 1e3, K = X ? (w - u.loaded) / X : w * 8 / b + W;
      if (K <= x)
        return;
      const B = X ? X * 8 : b, V = ((s = (t == null ? void 0 : t.details) || this.hls.latestLevelDetails) == null ? void 0 : s.live) === !0, $ = this.hls.config.abrBandWidthUpFactor;
      let O = Number.POSITIVE_INFINITY, D;
      for (D = g - 1; D > f; D--) {
        const J = C[D].maxBitrate, ie = !C[D].details || V;
        if (O = this.getTimeToLoadFrag(W, B, d * J, ie), O < Math.min(x, d + W))
          break;
      }
      if (O >= K || O > d * 10)
        return;
      A ? this.bwEstimator.sample(h - Math.min(T, _), u.loaded) : this.bwEstimator.sampleTTFB(h);
      const k = C[D].maxBitrate;
      this.getBwEstimate() * $ > k && this.resetEstimator(k);
      const M = this.findBestLevel(k, f, D, 0, x, 1, 1);
      M > -1 && (D = M), this.warn(`Fragment ${i.sn}${r ? " part " + r.index : ""} of level ${g} is loading too slowly;
      Fragment duration: ${i.duration.toFixed(3)}
      Time to underbuffer: ${x.toFixed(3)} s
      Estimated load time for current fragment: ${K.toFixed(3)} s
      Estimated load time for down switch fragment: ${O.toFixed(3)} s
      TTFB estimate: ${_ | 0} ms
      Current BW estimate: ${N(b) ? b | 0 : "Unknown"} bps
      New BW estimate: ${this.getBwEstimate() | 0} bps
      Switching to level ${D} @ ${k | 0} bps`), n.nextLoadLevel = n.nextAutoLevel = D, this.clearTimer();
      const q = () => {
        if (this.clearTimer(), this.fragCurrent === i && this.hls.loadLevel === D && D > 0) {
          const J = this.getStarvationDelay();
          if (this.warn(`Aborting inflight request ${D > 0 ? "and switching down" : ""}
      Fragment duration: ${i.duration.toFixed(3)} s
      Time to underbuffer: ${J.toFixed(3)} s`), i.abortRequests(), this.fragCurrent = this.partCurrent = null, D > f) {
            let ie = this.findBestLevel(this.hls.levels[f].bitrate, f, D, 0, J, 1, 1);
            ie === -1 && (ie = f), this.hls.nextLoadLevel = this.hls.nextAutoLevel = ie, this.resetEstimator(this.hls.levels[ie].bitrate);
          }
        }
      };
      p || K > O * 2 ? q() : this.timer = self.setInterval(q, O * 1e3), n.trigger(m.FRAG_LOAD_EMERGENCY_ABORTED, {
        frag: i,
        part: r,
        stats: u
      });
    }, this.hls = e, this.bwEstimator = this.initEstimator(), this.registerListeners();
  }
  resetEstimator(e) {
    e && (this.log(`setting initial bwe to ${e}`), this.hls.config.abrEwmaDefaultEstimate = e), this.firstSelection = -1, this.bwEstimator = this.initEstimator();
  }
  initEstimator() {
    const e = this.hls.config;
    return new no(e.abrEwmaSlowVoD, e.abrEwmaFastVoD, e.abrEwmaDefaultEstimate);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.FRAG_LOADING, this.onFragLoading, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this), e.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.FRAG_LOADING, this.onFragLoading, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this), e.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.MAX_AUTO_LEVEL_UPDATED, this.onMaxAutoLevelUpdated, this), e.off(m.ERROR, this.onError, this));
  }
  destroy() {
    this.unregisterListeners(), this.clearTimer(), this.hls = this._abandonRulesCheck = null, this.fragCurrent = this.partCurrent = null;
  }
  onManifestLoading(e, t) {
    this.lastLoadedFragLevel = -1, this.firstSelection = -1, this.lastLevelLoadSec = 0, this.fragCurrent = this.partCurrent = null, this.onLevelsUpdated(), this.clearTimer();
  }
  onLevelsUpdated() {
    this.lastLoadedFragLevel > -1 && this.fragCurrent && (this.lastLoadedFragLevel = this.fragCurrent.level), this._nextAutoLevel = -1, this.onMaxAutoLevelUpdated(), this.codecTiers = null, this.audioTracksByGroup = null;
  }
  onMaxAutoLevelUpdated() {
    this.firstSelection = -1, this.nextAutoLevelKey = "";
  }
  onFragLoading(e, t) {
    const s = t.frag;
    if (!this.ignoreFragment(s)) {
      if (!s.bitrateTest) {
        var i;
        this.fragCurrent = s, this.partCurrent = (i = t.part) != null ? i : null;
      }
      this.clearTimer(), this.timer = self.setInterval(this._abandonRulesCheck, 100);
    }
  }
  onLevelSwitching(e, t) {
    this.clearTimer();
  }
  onError(e, t) {
    if (!t.fatal)
      switch (t.details) {
        case R.BUFFER_ADD_CODEC_ERROR:
        case R.BUFFER_APPEND_ERROR:
          this.lastLoadedFragLevel = -1, this.firstSelection = -1;
          break;
        case R.FRAG_LOAD_TIMEOUT: {
          const s = t.frag, {
            fragCurrent: i,
            partCurrent: r
          } = this;
          if (s && i && s.sn === i.sn && s.level === i.level) {
            const n = performance.now(), o = r ? r.stats : s.stats, c = n - o.loading.start, l = o.loading.first ? o.loading.first - o.loading.start : -1;
            if (o.loaded && l > -1) {
              const d = this.bwEstimator.getEstimateTTFB();
              this.bwEstimator.sample(c - Math.min(d, l), o.loaded);
            } else
              this.bwEstimator.sampleTTFB(c);
          }
          break;
        }
      }
  }
  getTimeToLoadFrag(e, t, s, i) {
    const r = e + s / t, n = i ? e + this.lastLevelLoadSec : 0;
    return r + n;
  }
  onLevelLoaded(e, t) {
    const s = this.hls.config, {
      loading: i
    } = t.stats, r = i.end - i.first;
    N(r) && (this.lastLevelLoadSec = r / 1e3), t.details.live ? this.bwEstimator.update(s.abrEwmaSlowLive, s.abrEwmaFastLive) : this.bwEstimator.update(s.abrEwmaSlowVoD, s.abrEwmaFastVoD), this.timer > -1 && this._abandonRulesCheck(t.levelInfo);
  }
  onFragLoaded(e, {
    frag: t,
    part: s
  }) {
    const i = s ? s.stats : t.stats;
    if (t.type === G.MAIN && this.bwEstimator.sampleTTFB(i.loading.first - i.loading.start), !this.ignoreFragment(t)) {
      if (this.clearTimer(), t.level === this._nextAutoLevel && (this._nextAutoLevel = -1), this.firstSelection = -1, this.hls.config.abrMaxWithRealBitrate) {
        const r = s ? s.duration : t.duration, n = this.hls.levels[t.level], o = (n.loaded ? n.loaded.bytes : 0) + i.loaded, c = (n.loaded ? n.loaded.duration : 0) + r;
        n.loaded = {
          bytes: o,
          duration: c
        }, n.realBitrate = Math.round(8 * o / c);
      }
      if (t.bitrateTest) {
        const r = {
          stats: i,
          frag: t,
          part: s,
          id: t.type
        };
        this.onFragBuffered(m.FRAG_BUFFERED, r), t.bitrateTest = !1;
      } else
        this.lastLoadedFragLevel = t.level;
    }
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t, r = i != null && i.stats.loaded ? i.stats : s.stats;
    if (r.aborted || this.ignoreFragment(s))
      return;
    const n = r.parsing.end - r.loading.start - Math.min(r.loading.first - r.loading.start, this.bwEstimator.getEstimateTTFB());
    this.bwEstimator.sample(n, r.loaded), r.bwEstimate = this.getBwEstimate(), s.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0;
  }
  ignoreFragment(e) {
    return e.type !== G.MAIN || e.sn === "initSegment";
  }
  clearTimer() {
    this.timer > -1 && (self.clearInterval(this.timer), this.timer = -1);
  }
  get firstAutoLevel() {
    const {
      maxAutoLevel: e,
      minAutoLevel: t
    } = this.hls, s = this.getBwEstimate(), i = this.hls.config.maxStarvationDelay, r = this.findBestLevel(s, t, e, 0, i, 1, 1);
    if (r > -1)
      return r;
    const n = this.hls.firstLevel, o = Math.min(Math.max(n, t), e);
    return this.warn(`Could not find best starting auto level. Defaulting to first in playlist ${n} clamped to ${o}`), o;
  }
  get forcedAutoLevel() {
    return this.nextAutoLevelKey ? -1 : this._nextAutoLevel;
  }
  // return next auto level
  get nextAutoLevel() {
    const e = this.forcedAutoLevel, s = this.bwEstimator.canEstimate(), i = this.lastLoadedFragLevel > -1;
    if (e !== -1 && (!s || !i || this.nextAutoLevelKey === this.getAutoLevelKey()))
      return e;
    const r = s && i ? this.getNextABRAutoLevel() : this.firstAutoLevel;
    if (e !== -1) {
      const n = this.hls.levels;
      if (n.length > Math.max(e, r) && n[e].loadError <= n[r].loadError)
        return e;
    }
    return this._nextAutoLevel = r, this.nextAutoLevelKey = this.getAutoLevelKey(), r;
  }
  getAutoLevelKey() {
    return `${this.getBwEstimate()}_${this.getStarvationDelay().toFixed(2)}`;
  }
  getNextABRAutoLevel() {
    const {
      fragCurrent: e,
      partCurrent: t,
      hls: s
    } = this;
    if (s.levels.length <= 1)
      return s.loadLevel;
    const {
      maxAutoLevel: i,
      config: r,
      minAutoLevel: n
    } = s, o = t ? t.duration : e ? e.duration : 0, c = this.getBwEstimate(), l = this.getStarvationDelay();
    let u = r.abrBandWidthFactor, d = r.abrBandWidthUpFactor;
    if (l) {
      const p = this.findBestLevel(c, n, i, l, 0, u, d);
      if (p >= 0)
        return this.rebufferNotice = -1, p;
    }
    let h = o ? Math.min(o, r.maxStarvationDelay) : r.maxStarvationDelay;
    if (!l) {
      const p = this.bitrateTestDelay;
      p && (h = (o ? Math.min(o, r.maxLoadingDelay) : r.maxLoadingDelay) - p, this.info(`bitrate test took ${Math.round(1e3 * p)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * h)} ms`), u = d = 1);
    }
    const f = this.findBestLevel(c, n, i, l, h, u, d);
    if (this.rebufferNotice !== f && (this.rebufferNotice = f, this.info(`${l ? "rebuffering expected" : "buffer is empty"}, optimal quality level ${f}`)), f > -1)
      return f;
    const g = s.levels[n], y = s.loadLevelObj;
    return y && (g == null ? void 0 : g.bitrate) < y.bitrate ? n : s.loadLevel;
  }
  getStarvationDelay() {
    const e = this.hls, t = e.media;
    if (!t)
      return 1 / 0;
    const s = t && t.playbackRate !== 0 ? Math.abs(t.playbackRate) : 1, i = e.mainForwardBufferInfo;
    return (i ? i.len : 0) / s;
  }
  getBwEstimate() {
    return this.bwEstimator.canEstimate() ? this.bwEstimator.getEstimate() : this.hls.config.abrEwmaDefaultEstimate;
  }
  findBestLevel(e, t, s, i, r, n, o) {
    var c;
    const l = i + r, u = this.lastLoadedFragLevel, d = u === -1 ? this.hls.firstLevel : u, {
      fragCurrent: h,
      partCurrent: f
    } = this, {
      levels: g,
      allAudioTracks: y,
      loadLevel: p,
      config: E
    } = this.hls;
    if (g.length === 1)
      return 0;
    const v = g[d], T = !!((c = this.hls.latestLevelDetails) != null && c.live), S = p === -1 || u === -1;
    let x, _ = "SDR", A = (v == null ? void 0 : v.frameRate) || 0;
    const {
      audioPreference: b,
      videoPreference: C
    } = E, L = this.audioTracksByGroup || (this.audioTracksByGroup = Kn(y));
    let w = -1;
    if (S) {
      if (this.firstSelection !== -1)
        return this.firstSelection;
      const B = this.codecTiers || (this.codecTiers = qo(g, L, t, s)), V = Yo(B, _, e, b, C), {
        codecSet: $,
        videoRanges: O,
        minFramerate: D,
        minBitrate: k,
        minIndex: M,
        preferHDR: q
      } = V;
      w = M, x = $, _ = q ? O[O.length - 1] : O[0], A = D, e = Math.max(e, k), this.log(`picked start tier ${ue(V)}`);
    } else
      x = v == null ? void 0 : v.codecSet, _ = v == null ? void 0 : v.videoRange;
    const F = f ? f.duration : h ? h.duration : 0, X = this.bwEstimator.getEstimateTTFB() / 1e3, W = [];
    for (let B = s; B >= t; B--) {
      var K;
      const V = g[B], $ = B > d;
      if (!V)
        continue;
      if (E.useMediaCapabilities && !V.supportedResult && !V.supportedPromise) {
        const ie = navigator.mediaCapabilities;
        typeof (ie == null ? void 0 : ie.decodingInfo) == "function" && (Uo(V, L, _, A, e, b) || ws(V.videoCodec)) ? (V.supportedPromise = Vn(V, L, ie), V.supportedPromise.then((le) => {
          if (!this.hls)
            return;
          V.supportedResult = le;
          const ve = this.hls.levels, Se = ve.indexOf(V);
          le.error ? this.warn(`MediaCapabilities decodingInfo error: "${le.error}" for level ${Se} ${ue(le)}`) : le.supported || (this.warn(`Unsupported MediaCapabilities decodingInfo result for level ${Se} ${ue(le)}`), Se > -1 && ve.length > 1 && (this.log(`Removing unsupported level ${Se}`), this.hls.removeLevel(Se), this.hls.loadLevel === -1 && (this.hls.nextLoadLevel = 0)));
        })) : V.supportedResult = $n;
      }
      if ((x && V.codecSet !== x || _ && V.videoRange !== _ || $ && A > V.frameRate || !$ && A > 0 && A < V.frameRate || V.supportedResult && !((K = V.supportedResult.decodingInfoResults) != null && K[0].smooth)) && (!S || B !== w)) {
        W.push(B);
        continue;
      }
      const O = V.details, D = (f ? O == null ? void 0 : O.partTarget : O == null ? void 0 : O.averagetargetduration) || F;
      let k;
      $ ? k = o * e : k = n * e;
      const M = F && i >= F * 2 && r === 0 ? V.averageBitrate : V.maxBitrate, q = this.getTimeToLoadFrag(X, k, M * D, O === void 0);
      if (
        // if adjusted bw is greater than level bitrate AND
        k >= M && // no level change, or new level has no error history
        (B === u || V.loadError === 0 && V.fragmentError === 0) && // fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
        // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
        // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that findBestLevel will return -1
        (q <= X || !N(q) || T && !this.bitrateTestDelay || q < l)
      ) {
        const ie = this.forcedAutoLevel;
        return B !== p && (ie === -1 || ie !== p) && (W.length && this.trace(`Skipped level(s) ${W.join(",")} of ${s} max with CODECS and VIDEO-RANGE:"${g[W[0]].codecs}" ${g[W[0]].videoRange}; not compatible with "${x}" ${_}`), this.info(`switch candidate:${d}->${B} adjustedbw(${Math.round(k)})-bitrate=${Math.round(k - M)} ttfb:${X.toFixed(1)} avgDuration:${D.toFixed(1)} maxFetchDuration:${l.toFixed(1)} fetchDuration:${q.toFixed(1)} firstSelection:${S} codecSet:${V.codecSet} videoRange:${V.videoRange} hls.loadLevel:${p}`)), S && (this.firstSelection = B), B;
      }
    }
    return -1;
  }
  set nextAutoLevel(e) {
    const t = this.deriveNextAutoLevel(e);
    this._nextAutoLevel !== t && (this.nextAutoLevelKey = "", this._nextAutoLevel = t);
  }
  deriveNextAutoLevel(e) {
    const {
      maxAutoLevel: t,
      minAutoLevel: s
    } = this.hls;
    return Math.min(Math.max(e, s), t);
  }
}
const Oi = {
  /**
   * Searches for an item in an array which matches a certain condition.
   * This requires the condition to only match one item in the array,
   * and for the array to be ordered.
   *
   * @param list The array to search.
   * @param comparisonFn
   *      Called and provided a candidate item as the first argument.
   *      Should return:
   *          > -1 if the item should be located at a lower index than the provided item.
   *          > 1 if the item should be located at a higher index than the provided item.
   *          > 0 if the item is the item you're looking for.
   *
   * @returns the object if found, otherwise returns null
   */
  search: function(a, e) {
    let t = 0, s = a.length - 1, i = null, r = null;
    for (; t <= s; ) {
      i = (t + s) / 2 | 0, r = a[i];
      const n = e(r);
      if (n > 0)
        t = i + 1;
      else if (n < 0)
        s = i - 1;
      else
        return r;
    }
    return null;
  }
};
function Zo(a, e, t) {
  if (e === null || !Array.isArray(a) || !a.length || !N(e))
    return null;
  const s = a[0].programDateTime;
  if (e < (s || 0))
    return null;
  const i = a[a.length - 1].endProgramDateTime;
  if (e >= (i || 0))
    return null;
  t = t || 0;
  for (let r = 0; r < a.length; ++r) {
    const n = a[r];
    if (el(e, t, n))
      return n;
  }
  return null;
}
function Et(a, e, t = 0, s = 0, i = 5e-3) {
  let r = null;
  if (a) {
    r = e[1 + a.sn - e[0].sn] || null;
    const o = a.endDTS - t;
    o > 0 && o < 15e-7 && (t += 15e-7), r && a.level !== r.level && r.end <= a.end && (r = e[2 + a.sn - e[0].sn] || null);
  } else
    t === 0 && e[0].start === 0 && (r = e[0]);
  if (r && ((!a || a.level === r.level) && Tr(t, s, r) === 0 || Jo(r, a, Math.min(i, s))))
    return r;
  const n = Oi.search(e, Tr.bind(null, t, s));
  return n && (n !== a || !r) ? n : r;
}
function Jo(a, e, t) {
  if (e && e.start === 0 && e.level < a.level && (e.endPTS || 0) > 0) {
    const s = e.tagList.reduce((i, r) => (r[0] === "INF" && (i += parseFloat(r[1])), i), t);
    return a.start <= s;
  }
  return !1;
}
function Tr(a = 0, e = 0, t) {
  if (t.start <= a && t.start + t.duration > a)
    return 0;
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
  return t.start + t.duration - s <= a ? 1 : t.start - s > a && t.start ? -1 : 0;
}
function el(a, e, t) {
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0)) * 1e3;
  return (t.endProgramDateTime || 0) - s > a;
}
function Hn(a, e) {
  return Oi.search(a, (t) => t.cc < e ? 1 : t.cc > e ? -1 : 0);
}
function tl(a, e, t) {
  if (a && a.startCC <= e && a.endCC >= e) {
    const s = t.start, i = t.end;
    let r = a.fragments;
    if (!t.relurl) {
      const {
        fragmentHint: n
      } = a;
      n && (r = r.concat(n));
    }
    return Oi.search(r, (n) => n.cc < e || n.end <= s ? 1 : n.cc > e || n.start >= i ? -1 : 0);
  }
  return null;
}
function bs(a) {
  switch (a.details) {
    case R.FRAG_LOAD_TIMEOUT:
    case R.KEY_LOAD_TIMEOUT:
    case R.LEVEL_LOAD_TIMEOUT:
    case R.MANIFEST_LOAD_TIMEOUT:
      return !0;
  }
  return !1;
}
function vr(a, e) {
  const t = bs(e);
  return a.default[`${t ? "timeout" : "error"}Retry`];
}
function Fi(a, e) {
  const t = a.backoff === "linear" ? 1 : Math.pow(2, e);
  return Math.min(t * a.retryDelayMs, a.maxRetryDelayMs);
}
function Sr(a) {
  return re(re({}, a), {
    errorRetry: null,
    timeoutRetry: null
  });
}
function _s(a, e, t, s) {
  if (!a)
    return !1;
  const i = s == null ? void 0 : s.code, r = e < a.maxNumRetry && (sl(i) || !!t);
  return a.shouldRetry ? a.shouldRetry(a, e, t, s, r) : r;
}
function sl(a) {
  return a === 0 && navigator.onLine === !1 || !!a && (a < 400 || a > 499);
}
var Te = {
  DoNothing: 0,
  SendEndCallback: 1,
  SendAlternateToPenaltyBox: 2,
  RemoveAlternatePermanently: 3,
  InsertDiscontinuity: 4,
  RetryRequest: 5
}, Fe = {
  None: 0,
  MoveAllAlternatesMatchingHost: 1,
  MoveAllAlternatesMatchingHDCP: 2,
  SwitchToSDR: 4
};
class il extends Ze {
  constructor(e) {
    super("error-controller", e.logger), this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.hls = e, this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(m.ERROR, this.onError, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(m.ERROR, this.onError, this), e.off(m.ERROR, this.onErrorOut, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this));
  }
  destroy() {
    this.unregisterListeners(), this.hls = null, this.penalizedRenditions = {};
  }
  startLoad(e) {
  }
  stopLoad() {
    this.playlistError = 0;
  }
  getVariantLevelIndex(e) {
    return (e == null ? void 0 : e.type) === G.MAIN ? e.level : this.hls.loadLevel;
  }
  onManifestLoading() {
    this.playlistError = 0, this.penalizedRenditions = {};
  }
  onLevelUpdated() {
    this.playlistError = 0;
  }
  onError(e, t) {
    var s;
    if (t.fatal)
      return;
    const i = this.hls, r = t.context;
    switch (t.details) {
      case R.FRAG_LOAD_ERROR:
      case R.FRAG_LOAD_TIMEOUT:
      case R.KEY_LOAD_ERROR:
      case R.KEY_LOAD_TIMEOUT:
        t.errorAction = this.getFragRetryOrSwitchAction(t);
        return;
      case R.FRAG_PARSING_ERROR:
        if ((s = t.frag) != null && s.gap) {
          t.errorAction = Kt();
          return;
        }
      case R.FRAG_GAP:
      case R.FRAG_DECRYPT_ERROR: {
        t.errorAction = this.getFragRetryOrSwitchAction(t), t.errorAction.action = Te.SendAlternateToPenaltyBox;
        return;
      }
      case R.LEVEL_EMPTY_ERROR:
      case R.LEVEL_PARSING_ERROR:
        {
          var n, o;
          const l = t.parent === G.MAIN ? t.level : i.loadLevel;
          t.details === R.LEVEL_EMPTY_ERROR && ((n = t.context) != null && (o = n.levelDetails) != null && o.live) ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, l) : (t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, l));
        }
        return;
      case R.LEVEL_LOAD_ERROR:
      case R.LEVEL_LOAD_TIMEOUT:
        typeof (r == null ? void 0 : r.level) == "number" && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, r.level));
        return;
      case R.AUDIO_TRACK_LOAD_ERROR:
      case R.AUDIO_TRACK_LOAD_TIMEOUT:
      case R.SUBTITLE_LOAD_ERROR:
      case R.SUBTITLE_TRACK_LOAD_TIMEOUT:
        if (r) {
          const l = i.loadLevelObj;
          if (l && (r.type === Q.AUDIO_TRACK && l.hasAudioGroup(r.groupId) || r.type === Q.SUBTITLE_TRACK && l.hasSubtitleGroup(r.groupId))) {
            t.errorAction = this.getPlaylistRetryOrSwitchAction(t, i.loadLevel), t.errorAction.action = Te.SendAlternateToPenaltyBox, t.errorAction.flags = Fe.MoveAllAlternatesMatchingHost;
            return;
          }
        }
        return;
      case R.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
        {
          const l = i.loadLevelObj, u = l == null ? void 0 : l.attrs["HDCP-LEVEL"];
          u ? t.errorAction = {
            action: Te.SendAlternateToPenaltyBox,
            flags: Fe.MoveAllAlternatesMatchingHDCP,
            hdcpLevel: u
          } : this.keySystemError(t);
        }
        return;
      case R.BUFFER_ADD_CODEC_ERROR:
      case R.REMUX_ALLOC_ERROR:
      case R.BUFFER_APPEND_ERROR:
        if (!t.errorAction) {
          var c;
          t.errorAction = this.getLevelSwitchAction(t, (c = t.level) != null ? c : i.loadLevel);
        }
        return;
      case R.INTERNAL_EXCEPTION:
      case R.BUFFER_APPENDING_ERROR:
      case R.BUFFER_FULL_ERROR:
      case R.LEVEL_SWITCH_ERROR:
      case R.BUFFER_STALLED_ERROR:
      case R.BUFFER_SEEK_OVER_HOLE:
      case R.BUFFER_NUDGE_ON_STALL:
        t.errorAction = Kt();
        return;
    }
    t.type === H.KEY_SYSTEM_ERROR && this.keySystemError(t);
  }
  keySystemError(e) {
    const t = this.getVariantLevelIndex(e.frag);
    e.levelRetry = !1, e.errorAction = this.getLevelSwitchAction(e, t);
  }
  getPlaylistRetryOrSwitchAction(e, t) {
    const s = this.hls, i = vr(s.config.playlistLoadPolicy, e), r = this.playlistError++;
    if (_s(i, r, bs(e), e.response))
      return {
        action: Te.RetryRequest,
        flags: Fe.None,
        retryConfig: i,
        retryCount: r
      };
    const o = this.getLevelSwitchAction(e, t);
    return i && (o.retryConfig = i, o.retryCount = r), o;
  }
  getFragRetryOrSwitchAction(e) {
    const t = this.hls, s = this.getVariantLevelIndex(e.frag), i = t.levels[s], {
      fragLoadPolicy: r,
      keyLoadPolicy: n
    } = t.config, o = vr(e.details.startsWith("key") ? n : r, e), c = t.levels.reduce((u, d) => u + d.fragmentError, 0);
    if (i && (e.details !== R.FRAG_GAP && i.fragmentError++, _s(o, c, bs(e), e.response)))
      return {
        action: Te.RetryRequest,
        flags: Fe.None,
        retryConfig: o,
        retryCount: c
      };
    const l = this.getLevelSwitchAction(e, s);
    return o && (l.retryConfig = o, l.retryCount = c), l;
  }
  getLevelSwitchAction(e, t) {
    const s = this.hls;
    t == null && (t = s.loadLevel);
    const i = this.hls.levels[t];
    if (i) {
      var r, n;
      const l = e.details;
      i.loadError++, l === R.BUFFER_APPEND_ERROR && i.fragmentError++;
      let u = -1;
      const {
        levels: d,
        loadLevel: h,
        minAutoLevel: f,
        maxAutoLevel: g
      } = s;
      s.autoLevelEnabled || (s.loadLevel = -1);
      const y = (r = e.frag) == null ? void 0 : r.type, E = (y === G.AUDIO && l === R.FRAG_PARSING_ERROR || e.sourceBufferName === "audio" && (l === R.BUFFER_ADD_CODEC_ERROR || l === R.BUFFER_APPEND_ERROR)) && d.some(({
        audioCodec: _
      }) => i.audioCodec !== _), T = e.sourceBufferName === "video" && (l === R.BUFFER_ADD_CODEC_ERROR || l === R.BUFFER_APPEND_ERROR) && d.some(({
        codecSet: _,
        audioCodec: A
      }) => i.codecSet !== _ && i.audioCodec === A), {
        type: S,
        groupId: x
      } = (n = e.context) != null ? n : {};
      for (let _ = d.length; _--; ) {
        const A = (_ + h) % d.length;
        if (A !== h && A >= f && A <= g && d[A].loadError === 0) {
          var o, c;
          const b = d[A];
          if (l === R.FRAG_GAP && y === G.MAIN && e.frag) {
            const C = d[A].details;
            if (C) {
              const L = Et(e.frag, C.fragments, e.frag.start);
              if (L != null && L.gap)
                continue;
            }
          } else {
            if (S === Q.AUDIO_TRACK && b.hasAudioGroup(x) || S === Q.SUBTITLE_TRACK && b.hasSubtitleGroup(x))
              continue;
            if (y === G.AUDIO && (o = i.audioGroups) != null && o.some((C) => b.hasAudioGroup(C)) || y === G.SUBTITLE && (c = i.subtitleGroups) != null && c.some((C) => b.hasSubtitleGroup(C)) || E && i.audioCodec === b.audioCodec || !E && i.audioCodec !== b.audioCodec || T && i.codecSet === b.codecSet)
              continue;
          }
          u = A;
          break;
        }
      }
      if (u > -1 && s.loadLevel !== u)
        return e.levelRetry = !0, this.playlistError = 0, {
          action: Te.SendAlternateToPenaltyBox,
          flags: Fe.None,
          nextAutoLevel: u
        };
    }
    return {
      action: Te.SendAlternateToPenaltyBox,
      flags: Fe.MoveAllAlternatesMatchingHost
    };
  }
  onErrorOut(e, t) {
    var s;
    switch ((s = t.errorAction) == null ? void 0 : s.action) {
      case Te.DoNothing:
        break;
      case Te.SendAlternateToPenaltyBox:
        this.sendAlternateToPenaltyBox(t), !t.errorAction.resolved && t.details !== R.FRAG_GAP ? t.fatal = !0 : /MediaSource readyState: ended/.test(t.error.message) && (this.warn(`MediaSource ended after "${t.sourceBufferName}" sourceBuffer append error. Attempting to recover from media error.`), this.hls.recoverMediaError());
        break;
    }
    if (t.fatal) {
      this.hls.stopLoad();
      return;
    }
  }
  sendAlternateToPenaltyBox(e) {
    const t = this.hls, s = e.errorAction;
    if (!s)
      return;
    const {
      flags: i,
      hdcpLevel: r,
      nextAutoLevel: n
    } = s;
    switch (i) {
      case Fe.None:
        this.switchLevel(e, n);
        break;
      case Fe.MoveAllAlternatesMatchingHDCP:
        r && (t.maxHdcpLevel = gi[gi.indexOf(r) - 1], s.resolved = !0), this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
        break;
    }
    s.resolved || this.switchLevel(e, n);
  }
  switchLevel(e, t) {
    if (t !== void 0 && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel, e.details === R.BUFFER_ADD_CODEC_ERROR && e.mimeType && e.sourceBufferName !== "audiovideo")) {
      const s = Un(e.mimeType), i = this.hls.levels;
      for (let r = i.length; r--; )
        i[r][`${e.sourceBufferName}Codec`] === s && this.hls.removeLevel(r);
    }
  }
}
function Kt(a) {
  const e = {
    action: Te.DoNothing,
    flags: Fe.None
  };
  return a && (e.resolved = !0), e;
}
var ge = {
  NOT_LOADED: "NOT_LOADED",
  APPENDING: "APPENDING",
  PARTIAL: "PARTIAL",
  OK: "OK"
};
class rl {
  constructor(e) {
    this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = !1, this.hls = e, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.BUFFER_APPENDED, this.onBufferAppended, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.BUFFER_APPENDED, this.onBufferAppended, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this);
  }
  destroy() {
    this._unregisterListeners(), this.fragments = // @ts-ignore
    this.activePartLists = // @ts-ignore
    this.endListFragments = this.timeRanges = null;
  }
  /**
   * Return a Fragment or Part with an appended range that matches the position and levelType
   * Otherwise, return null
   */
  getAppendedFrag(e, t) {
    const s = this.activePartLists[t];
    if (s)
      for (let i = s.length; i--; ) {
        const r = s[i];
        if (!r)
          break;
        const n = r.end;
        if (r.start <= e && n !== null && e <= n)
          return r;
      }
    return this.getBufferedFrag(e, t);
  }
  /**
   * Return a buffered Fragment that matches the position and levelType.
   * A buffered Fragment is one whose loading, parsing and appending is done (completed or "partial" meaning aborted).
   * If not found any Fragment, return null
   */
  getBufferedFrag(e, t) {
    return this.getFragAtPos(e, t, !0);
  }
  getFragAtPos(e, t, s) {
    const {
      fragments: i
    } = this, r = Object.keys(i);
    for (let n = r.length; n--; ) {
      const o = i[r[n]];
      if ((o == null ? void 0 : o.body.type) === t && (!s || o.buffered)) {
        const c = o.body;
        if (c.start <= e && e <= c.end)
          return c;
      }
    }
    return null;
  }
  /**
   * Partial fragments effected by coded frame eviction will be removed
   * The browser will unload parts of the buffer to free up memory for new buffer data
   * Fragments will need to be reloaded when the buffer is freed up, removing partial fragments will allow them to reload(since there might be parts that are still playable)
   */
  detectEvictedFragments(e, t, s, i, r) {
    this.timeRanges && (this.timeRanges[e] = t);
    const n = (i == null ? void 0 : i.fragment.sn) || -1;
    Object.keys(this.fragments).forEach((o) => {
      const c = this.fragments[o];
      if (!c || n >= c.body.sn)
        return;
      if (!c.buffered && (!c.loaded || r)) {
        c.body.type === s && this.removeFragment(c.body);
        return;
      }
      const l = c.range[e];
      if (l) {
        if (l.time.length === 0) {
          this.removeFragment(c.body);
          return;
        }
        l.time.some((u) => {
          const d = !this.isTimeBuffered(u.startPTS, u.endPTS, t);
          return d && this.removeFragment(c.body), d;
        });
      }
    });
  }
  /**
   * Checks if the fragment passed in is loaded in the buffer properly
   * Partially loaded fragments will be registered as a partial fragment
   */
  detectPartialFragments(e) {
    const t = this.timeRanges;
    if (!t || e.frag.sn === "initSegment")
      return;
    const s = e.frag, i = St(s), r = this.fragments[i];
    if (!r || r.buffered && s.gap)
      return;
    const n = !s.relurl;
    Object.keys(t).forEach((o) => {
      const c = s.elementaryStreams[o];
      if (!c)
        return;
      const l = t[o], u = n || c.partial === !0;
      r.range[o] = this.getBufferedTimes(s, e.part, u, l);
    }), r.loaded = null, Object.keys(r.range).length ? (r.buffered = !0, (r.body.endList = s.endList || r.body.endList) && (this.endListFragments[r.body.type] = r), es(r) || this.removeParts(s.sn - 1, s.type)) : this.removeFragment(r.body);
  }
  removeParts(e, t) {
    const s = this.activePartLists[t];
    s && (this.activePartLists[t] = xr(s, (i) => i.fragment.sn >= e));
  }
  fragBuffered(e, t) {
    const s = St(e);
    let i = this.fragments[s];
    !i && t && (i = this.fragments[s] = {
      body: e,
      appendedPTS: null,
      loaded: null,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    }, e.gap && (this.hasGaps = !0)), i && (i.loaded = null, i.buffered = !0);
  }
  getBufferedTimes(e, t, s, i) {
    const r = {
      time: [],
      partial: s
    }, n = e.start, o = e.end, c = e.minEndPTS || o, l = e.maxStartPTS || n;
    for (let u = 0; u < i.length; u++) {
      const d = i.start(u) - this.bufferPadding, h = i.end(u) + this.bufferPadding;
      if (l >= d && c <= h) {
        r.time.push({
          startPTS: Math.max(n, i.start(u)),
          endPTS: Math.min(o, i.end(u))
        });
        break;
      } else if (n < h && o > d) {
        const f = Math.max(n, i.start(u)), g = Math.min(o, i.end(u));
        g > f && (r.partial = !0, r.time.push({
          startPTS: f,
          endPTS: g
        }));
      } else if (o <= d)
        break;
    }
    return r;
  }
  /**
   * Gets the partial fragment for a certain time
   */
  getPartialFragment(e) {
    let t = null, s, i, r, n = 0;
    const {
      bufferPadding: o,
      fragments: c
    } = this;
    return Object.keys(c).forEach((l) => {
      const u = c[l];
      u && es(u) && (i = u.body.start - o, r = u.body.end + o, e >= i && e <= r && (s = Math.min(e - i, r - e), n <= s && (t = u.body, n = s)));
    }), t;
  }
  isEndListAppended(e) {
    const t = this.endListFragments[e];
    return t !== void 0 && (t.buffered || es(t));
  }
  getState(e) {
    const t = St(e), s = this.fragments[t];
    return s ? s.buffered ? es(s) ? ge.PARTIAL : ge.OK : ge.APPENDING : ge.NOT_LOADED;
  }
  isTimeBuffered(e, t, s) {
    let i, r;
    for (let n = 0; n < s.length; n++) {
      if (i = s.start(n) - this.bufferPadding, r = s.end(n) + this.bufferPadding, e >= i && t <= r)
        return !0;
      if (t <= i)
        return !1;
    }
    return !1;
  }
  onManifestLoading() {
    this.removeAllFragments();
  }
  onFragLoaded(e, t) {
    if (t.frag.sn === "initSegment" || t.frag.bitrateTest)
      return;
    const s = t.frag, i = t.part ? null : t, r = St(s);
    this.fragments[r] = {
      body: s,
      appendedPTS: null,
      loaded: i,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    };
  }
  onBufferAppended(e, t) {
    const {
      frag: s,
      part: i,
      timeRanges: r,
      type: n
    } = t;
    if (s.sn === "initSegment")
      return;
    const o = s.type;
    if (i) {
      let l = this.activePartLists[o];
      l || (this.activePartLists[o] = l = []), l.push(i);
    }
    this.timeRanges = r;
    const c = r[n];
    this.detectEvictedFragments(n, c, o, i);
  }
  onFragBuffered(e, t) {
    this.detectPartialFragments(t);
  }
  hasFragment(e) {
    const t = St(e);
    return !!this.fragments[t];
  }
  hasFragments(e) {
    const {
      fragments: t
    } = this, s = Object.keys(t);
    if (!e)
      return s.length > 0;
    for (let i = s.length; i--; ) {
      const r = t[s[i]];
      if ((r == null ? void 0 : r.body.type) === e)
        return !0;
    }
    return !1;
  }
  hasParts(e) {
    var t;
    return !!((t = this.activePartLists[e]) != null && t.length);
  }
  removeFragmentsInRange(e, t, s, i, r) {
    i && !this.hasGaps || Object.keys(this.fragments).forEach((n) => {
      const o = this.fragments[n];
      if (!o)
        return;
      const c = o.body;
      c.type !== s || i && !c.gap || c.start < t && c.end > e && (o.buffered || r) && this.removeFragment(c);
    });
  }
  removeFragment(e) {
    const t = St(e);
    e.clearElementaryStreamInfo();
    const s = this.activePartLists[e.type];
    if (s) {
      const i = e.sn;
      this.activePartLists[e.type] = xr(s, (r) => r.fragment.sn !== i);
    }
    delete this.fragments[t], e.endList && delete this.endListFragments[e.type];
  }
  removeAllFragments() {
    var e, t;
    this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = !1;
    const s = (e = this.hls) == null || (t = e.latestLevelDetails) == null ? void 0 : t.partList;
    s && s.forEach((i) => i.clearElementaryStreamInfo());
  }
}
function es(a) {
  var e, t, s;
  return a.buffered && (a.body.gap || ((e = a.range.video) == null ? void 0 : e.partial) || ((t = a.range.audio) == null ? void 0 : t.partial) || ((s = a.range.audiovideo) == null ? void 0 : s.partial));
}
function St(a) {
  return `${a.type}_${a.level}_${a.sn}`;
}
function xr(a, e) {
  return a.filter((t) => {
    const s = e(t);
    return s || t.clearElementaryStreamInfo(), s;
  });
}
var at = {
  cbc: 0,
  ctr: 1
};
class nl {
  constructor(e, t, s) {
    this.subtle = void 0, this.aesIV = void 0, this.aesMode = void 0, this.subtle = e, this.aesIV = t, this.aesMode = s;
  }
  decrypt(e, t) {
    switch (this.aesMode) {
      case at.cbc:
        return this.subtle.decrypt({
          name: "AES-CBC",
          iv: this.aesIV
        }, t, e);
      case at.ctr:
        return this.subtle.decrypt(
          {
            name: "AES-CTR",
            counter: this.aesIV,
            length: 64
          },
          //64 : NIST SP800-38A standard suggests that the counter should occupy half of the counter block
          t,
          e
        );
      default:
        throw new Error(`[AESCrypto] invalid aes mode ${this.aesMode}`);
    }
  }
}
function al(a) {
  const e = a.byteLength, t = e && new DataView(a.buffer).getUint8(e - 1);
  return t ? a.slice(0, e - t) : a;
}
class ol {
  constructor() {
    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable();
  }
  // Using view.getUint32() also swaps the byte order.
  uint8ArrayToUint32Array_(e) {
    const t = new DataView(e), s = new Uint32Array(4);
    for (let i = 0; i < 4; i++)
      s[i] = t.getUint32(i * 4);
    return s;
  }
  initTable() {
    const e = this.sBox, t = this.invSBox, s = this.subMix, i = s[0], r = s[1], n = s[2], o = s[3], c = this.invSubMix, l = c[0], u = c[1], d = c[2], h = c[3], f = new Uint32Array(256);
    let g = 0, y = 0, p = 0;
    for (p = 0; p < 256; p++)
      p < 128 ? f[p] = p << 1 : f[p] = p << 1 ^ 283;
    for (p = 0; p < 256; p++) {
      let E = y ^ y << 1 ^ y << 2 ^ y << 3 ^ y << 4;
      E = E >>> 8 ^ E & 255 ^ 99, e[g] = E, t[E] = g;
      const v = f[g], T = f[v], S = f[T];
      let x = f[E] * 257 ^ E * 16843008;
      i[g] = x << 24 | x >>> 8, r[g] = x << 16 | x >>> 16, n[g] = x << 8 | x >>> 24, o[g] = x, x = S * 16843009 ^ T * 65537 ^ v * 257 ^ g * 16843008, l[E] = x << 24 | x >>> 8, u[E] = x << 16 | x >>> 16, d[E] = x << 8 | x >>> 24, h[E] = x, g ? (g = v ^ f[f[f[S ^ v]]], y ^= f[f[y]]) : g = y = 1;
    }
  }
  expandKey(e) {
    const t = this.uint8ArrayToUint32Array_(e);
    let s = !0, i = 0;
    for (; i < t.length && s; )
      s = t[i] === this.key[i], i++;
    if (s)
      return;
    this.key = t;
    const r = this.keySize = t.length;
    if (r !== 4 && r !== 6 && r !== 8)
      throw new Error("Invalid aes key size=" + r);
    const n = this.ksRows = (r + 6 + 1) * 4;
    let o, c;
    const l = this.keySchedule = new Uint32Array(n), u = this.invKeySchedule = new Uint32Array(n), d = this.sBox, h = this.rcon, f = this.invSubMix, g = f[0], y = f[1], p = f[2], E = f[3];
    let v, T;
    for (o = 0; o < n; o++) {
      if (o < r) {
        v = l[o] = t[o];
        continue;
      }
      T = v, o % r === 0 ? (T = T << 8 | T >>> 24, T = d[T >>> 24] << 24 | d[T >>> 16 & 255] << 16 | d[T >>> 8 & 255] << 8 | d[T & 255], T ^= h[o / r | 0] << 24) : r > 6 && o % r === 4 && (T = d[T >>> 24] << 24 | d[T >>> 16 & 255] << 16 | d[T >>> 8 & 255] << 8 | d[T & 255]), l[o] = v = (l[o - r] ^ T) >>> 0;
    }
    for (c = 0; c < n; c++)
      o = n - c, c & 3 ? T = l[o] : T = l[o - 4], c < 4 || o <= 4 ? u[c] = T : u[c] = g[d[T >>> 24]] ^ y[d[T >>> 16 & 255]] ^ p[d[T >>> 8 & 255]] ^ E[d[T & 255]], u[c] = u[c] >>> 0;
  }
  // Adding this as a method greatly improves performance.
  networkToHostOrderSwap(e) {
    return e << 24 | (e & 65280) << 8 | (e & 16711680) >> 8 | e >>> 24;
  }
  decrypt(e, t, s) {
    const i = this.keySize + 6, r = this.invKeySchedule, n = this.invSBox, o = this.invSubMix, c = o[0], l = o[1], u = o[2], d = o[3], h = this.uint8ArrayToUint32Array_(s);
    let f = h[0], g = h[1], y = h[2], p = h[3];
    const E = new Int32Array(e), v = new Int32Array(E.length);
    let T, S, x, _, A, b, C, L, w, F, X, W, K, B;
    const V = this.networkToHostOrderSwap;
    for (; t < E.length; ) {
      for (w = V(E[t]), F = V(E[t + 1]), X = V(E[t + 2]), W = V(E[t + 3]), A = w ^ r[0], b = W ^ r[1], C = X ^ r[2], L = F ^ r[3], K = 4, B = 1; B < i; B++)
        T = c[A >>> 24] ^ l[b >> 16 & 255] ^ u[C >> 8 & 255] ^ d[L & 255] ^ r[K], S = c[b >>> 24] ^ l[C >> 16 & 255] ^ u[L >> 8 & 255] ^ d[A & 255] ^ r[K + 1], x = c[C >>> 24] ^ l[L >> 16 & 255] ^ u[A >> 8 & 255] ^ d[b & 255] ^ r[K + 2], _ = c[L >>> 24] ^ l[A >> 16 & 255] ^ u[b >> 8 & 255] ^ d[C & 255] ^ r[K + 3], A = T, b = S, C = x, L = _, K = K + 4;
      T = n[A >>> 24] << 24 ^ n[b >> 16 & 255] << 16 ^ n[C >> 8 & 255] << 8 ^ n[L & 255] ^ r[K], S = n[b >>> 24] << 24 ^ n[C >> 16 & 255] << 16 ^ n[L >> 8 & 255] << 8 ^ n[A & 255] ^ r[K + 1], x = n[C >>> 24] << 24 ^ n[L >> 16 & 255] << 16 ^ n[A >> 8 & 255] << 8 ^ n[b & 255] ^ r[K + 2], _ = n[L >>> 24] << 24 ^ n[A >> 16 & 255] << 16 ^ n[b >> 8 & 255] << 8 ^ n[C & 255] ^ r[K + 3], v[t] = V(T ^ f), v[t + 1] = V(_ ^ g), v[t + 2] = V(x ^ y), v[t + 3] = V(S ^ p), f = w, g = F, y = X, p = W, t = t + 4;
    }
    return v.buffer;
  }
}
class ll {
  constructor(e, t, s) {
    this.subtle = void 0, this.key = void 0, this.aesMode = void 0, this.subtle = e, this.key = t, this.aesMode = s;
  }
  expandKey() {
    const e = cl(this.aesMode);
    return this.subtle.importKey("raw", this.key, {
      name: e
    }, !1, ["encrypt", "decrypt"]);
  }
}
function cl(a) {
  switch (a) {
    case at.cbc:
      return "AES-CBC";
    case at.ctr:
      return "AES-CTR";
    default:
      throw new Error(`[FastAESKey] invalid aes mode ${a}`);
  }
}
const ul = 16;
class Mi {
  constructor(e, {
    removePKCS7Padding: t = !0
  } = {}) {
    if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.enableSoftwareAES = void 0, this.enableSoftwareAES = e.enableSoftwareAES, this.removePKCS7Padding = t, t)
      try {
        const s = self.crypto;
        s && (this.subtle = s.subtle || s.webkitSubtle);
      } catch {
      }
    this.useSoftware = !this.subtle;
  }
  destroy() {
    this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null;
  }
  isSync() {
    return this.useSoftware;
  }
  flush() {
    const {
      currentResult: e,
      remainderData: t
    } = this;
    if (!e || t)
      return this.reset(), null;
    const s = new Uint8Array(e);
    return this.reset(), this.removePKCS7Padding ? al(s) : s;
  }
  reset() {
    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
  }
  decrypt(e, t, s, i) {
    return this.useSoftware ? new Promise((r, n) => {
      const o = ArrayBuffer.isView(e) ? e : new Uint8Array(e);
      this.softwareDecrypt(o, t, s, i);
      const c = this.flush();
      c ? r(c.buffer) : n(new Error("[softwareDecrypt] Failed to decrypt data"));
    }) : this.webCryptoDecrypt(new Uint8Array(e), t, s, i);
  }
  // Software decryption is progressive. Progressive decryption may not return a result on each call. Any cached
  // data is handled in the flush() call
  softwareDecrypt(e, t, s, i) {
    const {
      currentIV: r,
      currentResult: n,
      remainderData: o
    } = this;
    if (i !== at.cbc || t.byteLength !== 16)
      return Z.warn("SoftwareDecrypt: can only handle AES-128-CBC"), null;
    this.logOnce("JS AES decrypt"), o && (e = ke(o, e), this.remainderData = null);
    const c = this.getValidChunk(e);
    if (!c.length)
      return null;
    r && (s = r);
    let l = this.softwareDecrypter;
    l || (l = this.softwareDecrypter = new ol()), l.expandKey(t);
    const u = n;
    return this.currentResult = l.decrypt(c.buffer, 0, s), this.currentIV = c.slice(-16).buffer, u || null;
  }
  webCryptoDecrypt(e, t, s, i) {
    if (this.key !== t || !this.fastAesKey) {
      if (!this.subtle)
        return Promise.resolve(this.onWebCryptoError(e, t, s, i));
      this.key = t, this.fastAesKey = new ll(this.subtle, t, i);
    }
    return this.fastAesKey.expandKey().then((r) => this.subtle ? (this.logOnce("WebCrypto AES decrypt"), new nl(this.subtle, new Uint8Array(s), i).decrypt(e.buffer, r)) : Promise.reject(new Error("web crypto not initialized"))).catch((r) => (Z.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`), this.onWebCryptoError(e, t, s, i)));
  }
  onWebCryptoError(e, t, s, i) {
    const r = this.enableSoftwareAES;
    if (r) {
      this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(e, t, s, i);
      const n = this.flush();
      if (n)
        return n.buffer;
    }
    throw new Error("WebCrypto" + (r ? " and softwareDecrypt" : "") + ": failed to decrypt data");
  }
  getValidChunk(e) {
    let t = e;
    const s = e.length - e.length % ul;
    return s !== e.length && (t = e.slice(0, s), this.remainderData = e.slice(s)), t;
  }
  logOnce(e) {
    this.logEnabled && (Z.log(`[decrypter]: ${e}`), this.logEnabled = !1);
  }
}
const Ar = Math.pow(2, 17);
class dl {
  constructor(e) {
    this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e;
  }
  destroy() {
    this.loader && (this.loader.destroy(), this.loader = null);
  }
  abort() {
    this.loader && this.loader.abort();
  }
  load(e, t) {
    const s = e.url;
    if (!s)
      return Promise.reject(new ze({
        type: H.NETWORK_ERROR,
        details: R.FRAG_LOAD_ERROR,
        fatal: !1,
        frag: e,
        error: new Error(`Fragment does not have a ${s ? "part list" : "url"}`),
        networkDetails: null
      }));
    this.abort();
    const i = this.config, r = i.fLoader, n = i.loader;
    return new Promise((o, c) => {
      if (this.loader && this.loader.destroy(), e.gap)
        if (e.tagList.some((g) => g[0] === "GAP")) {
          c(Ir(e));
          return;
        } else
          e.gap = !1;
      const l = this.loader = r ? new r(i) : new n(i), u = Lr(e);
      e.loader = l;
      const d = Sr(i.fragLoadPolicy.default), h = {
        loadPolicy: d,
        timeout: d.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: e.sn === "initSegment" ? 1 / 0 : Ar
      };
      e.stats = l.stats;
      const f = {
        onSuccess: (g, y, p, E) => {
          this.resetLoader(e, l);
          let v = g.data;
          p.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(v.slice(0, 16)), v = v.slice(16)), o({
            frag: e,
            part: null,
            payload: v,
            networkDetails: E
          });
        },
        onError: (g, y, p, E) => {
          this.resetLoader(e, l), c(new ze({
            type: H.NETWORK_ERROR,
            details: R.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            response: re({
              url: s,
              data: void 0
            }, g),
            error: new Error(`HTTP Error ${g.code} ${g.text}`),
            networkDetails: p,
            stats: E
          }));
        },
        onAbort: (g, y, p) => {
          this.resetLoader(e, l), c(new ze({
            type: H.NETWORK_ERROR,
            details: R.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            error: new Error("Aborted"),
            networkDetails: p,
            stats: g
          }));
        },
        onTimeout: (g, y, p) => {
          this.resetLoader(e, l), c(new ze({
            type: H.NETWORK_ERROR,
            details: R.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            error: new Error(`Timeout after ${h.timeout}ms`),
            networkDetails: p,
            stats: g
          }));
        }
      };
      t && (f.onProgress = (g, y, p, E) => t({
        frag: e,
        part: null,
        payload: p,
        networkDetails: E
      })), l.load(u, h, f);
    });
  }
  loadPart(e, t, s) {
    this.abort();
    const i = this.config, r = i.fLoader, n = i.loader;
    return new Promise((o, c) => {
      if (this.loader && this.loader.destroy(), e.gap || t.gap) {
        c(Ir(e, t));
        return;
      }
      const l = this.loader = r ? new r(i) : new n(i), u = Lr(e, t);
      e.loader = l;
      const d = Sr(i.fragLoadPolicy.default), h = {
        loadPolicy: d,
        timeout: d.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: Ar
      };
      t.stats = l.stats, l.load(u, h, {
        onSuccess: (f, g, y, p) => {
          this.resetLoader(e, l), this.updateStatsFromPart(e, t);
          const E = {
            frag: e,
            part: t,
            payload: f.data,
            networkDetails: p
          };
          s(E), o(E);
        },
        onError: (f, g, y, p) => {
          this.resetLoader(e, l), c(new ze({
            type: H.NETWORK_ERROR,
            details: R.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            part: t,
            response: re({
              url: u.url,
              data: void 0
            }, f),
            error: new Error(`HTTP Error ${f.code} ${f.text}`),
            networkDetails: y,
            stats: p
          }));
        },
        onAbort: (f, g, y) => {
          e.stats.aborted = t.stats.aborted, this.resetLoader(e, l), c(new ze({
            type: H.NETWORK_ERROR,
            details: R.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error("Aborted"),
            networkDetails: y,
            stats: f
          }));
        },
        onTimeout: (f, g, y) => {
          this.resetLoader(e, l), c(new ze({
            type: H.NETWORK_ERROR,
            details: R.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error(`Timeout after ${h.timeout}ms`),
            networkDetails: y,
            stats: f
          }));
        }
      });
    });
  }
  updateStatsFromPart(e, t) {
    const s = e.stats, i = t.stats, r = i.total;
    if (s.loaded += i.loaded, r) {
      const c = Math.round(e.duration / t.duration), l = Math.min(Math.round(s.loaded / r), c), d = (c - l) * Math.round(s.loaded / l);
      s.total = s.loaded + d;
    } else
      s.total = Math.max(s.loaded, s.total);
    const n = s.loading, o = i.loading;
    n.start ? n.first += o.first - o.start : (n.start = o.start, n.first = o.first), n.end = o.end;
  }
  resetLoader(e, t) {
    e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy();
  }
}
function Lr(a, e = null) {
  const t = e || a, s = {
    frag: a,
    part: e,
    responseType: "arraybuffer",
    url: t.url,
    headers: {},
    rangeStart: 0,
    rangeEnd: 0
  }, i = t.byteRangeStartOffset, r = t.byteRangeEndOffset;
  if (N(i) && N(r)) {
    var n;
    let o = i, c = r;
    if (a.sn === "initSegment" && hl((n = a.decryptdata) == null ? void 0 : n.method)) {
      const l = r - i;
      l % 16 && (c = r + (16 - l % 16)), i !== 0 && (s.resetIV = !0, o = i - 16);
    }
    s.rangeStart = o, s.rangeEnd = c;
  }
  return s;
}
function Ir(a, e) {
  const t = new Error(`GAP ${a.gap ? "tag" : "attribute"} found`), s = {
    type: H.MEDIA_ERROR,
    details: R.FRAG_GAP,
    fatal: !1,
    frag: a,
    error: t,
    networkDetails: null
  };
  return e && (s.part = e), (e || a).stats.aborted = !0, new ze(s);
}
function hl(a) {
  return a === "AES-128" || a === "AES-256";
}
class ze extends Error {
  constructor(e) {
    super(e.error.message), this.data = void 0, this.data = e;
  }
}
class Wn extends Ze {
  constructor(e, t) {
    super(e, t), this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
  }
  destroy() {
    this.onHandlerDestroying(), this.onHandlerDestroyed();
  }
  onHandlerDestroying() {
    this.clearNextTick(), this.clearInterval();
  }
  onHandlerDestroyed() {
  }
  hasInterval() {
    return !!this._tickInterval;
  }
  hasNextTick() {
    return !!this._tickTimer;
  }
  /**
   * @param millis - Interval time (ms)
   * @eturns True when interval has been scheduled, false when already scheduled (no effect)
   */
  setInterval(e) {
    return this._tickInterval ? !1 : (this._tickCallCount = 0, this._tickInterval = self.setInterval(this._boundTick, e), !0);
  }
  /**
   * @returns True when interval was cleared, false when none was set (no effect)
   */
  clearInterval() {
    return this._tickInterval ? (self.clearInterval(this._tickInterval), this._tickInterval = null, !0) : !1;
  }
  /**
   * @returns True when timeout was cleared, false when none was set (no effect)
   */
  clearNextTick() {
    return this._tickTimer ? (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0) : !1;
  }
  /**
   * Will call the subclass doTick implementation in this main loop tick
   * or in the next one (via setTimeout(,0)) in case it has already been called
   * in this tick (in case this is a re-entrant call).
   */
  tick() {
    this._tickCallCount++, this._tickCallCount === 1 && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0);
  }
  tickImmediate() {
    this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0);
  }
  /**
   * For subclass to implement task logic
   * @abstract
   */
  doTick() {
  }
}
class Ni {
  constructor(e, t, s, i = 0, r = -1, n = !1) {
    this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = ts(), this.buffering = {
      audio: ts(),
      video: ts(),
      audiovideo: ts()
    }, this.level = e, this.sn = t, this.id = s, this.size = i, this.part = r, this.partial = n;
  }
}
function ts() {
  return {
    start: 0,
    executeStart: 0,
    executeEnd: 0,
    end: 0
  };
}
const Rr = {
  length: 0,
  start: () => 0,
  end: () => 0
};
class z {
  /**
   * Return true if `media`'s buffered include `position`
   */
  static isBuffered(e, t) {
    if (e) {
      const s = z.getBuffered(e);
      for (let i = s.length; i--; )
        if (t >= s.start(i) && t <= s.end(i))
          return !0;
    }
    return !1;
  }
  static bufferedRanges(e) {
    if (e) {
      const t = z.getBuffered(e);
      return z.timeRangesToArray(t);
    }
    return [];
  }
  static timeRangesToArray(e) {
    const t = [];
    for (let s = 0; s < e.length; s++)
      t.push({
        start: e.start(s),
        end: e.end(s)
      });
    return t;
  }
  static bufferInfo(e, t, s) {
    if (e) {
      const i = z.bufferedRanges(e);
      if (i.length)
        return z.bufferedInfo(i, t, s);
    }
    return {
      len: 0,
      start: t,
      end: t,
      bufferedIndex: -1
    };
  }
  static bufferedInfo(e, t, s) {
    t = Math.max(0, t), e.length > 1 && e.sort((u, d) => u.start - d.start || d.end - u.end);
    let i = -1, r = [];
    if (s)
      for (let u = 0; u < e.length; u++) {
        t >= e[u].start && t <= e[u].end && (i = u);
        const d = r.length;
        if (d) {
          const h = r[d - 1].end;
          e[u].start - h < s ? e[u].end > h && (r[d - 1].end = e[u].end) : r.push(e[u]);
        } else
          r.push(e[u]);
      }
    else
      r = e;
    let n = 0, o, c = t, l = t;
    for (let u = 0; u < r.length; u++) {
      const d = r[u].start, h = r[u].end;
      if (i === -1 && t >= d && t <= h && (i = u), t + s >= d && t < h)
        c = d, l = h, n = l - t;
      else if (t + s < d) {
        o = d;
        break;
      }
    }
    return {
      len: n,
      start: c || 0,
      end: l || 0,
      nextStart: o,
      buffered: e,
      bufferedIndex: i
    };
  }
  /**
   * Safe method to get buffered property.
   * SourceBuffer.buffered may throw if SourceBuffer is removed from it's MediaSource
   */
  static getBuffered(e) {
    try {
      return e.buffered || Rr;
    } catch (t) {
      return Z.log("failed to get media.buffered", t), Rr;
    }
  }
}
const Yn = /\{\$([a-zA-Z0-9-_]+)\}/g;
function br(a) {
  return Yn.test(a);
}
function mi(a, e) {
  if (a.variableList !== null || a.hasVariableRefs) {
    const t = a.variableList;
    return e.replace(Yn, (s) => {
      const i = s.substring(2, s.length - 1), r = t == null ? void 0 : t[i];
      return r === void 0 ? (a.playlistParsingError || (a.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)), s) : r;
    });
  }
  return e;
}
function _r(a, e, t) {
  let s = a.variableList;
  s || (a.variableList = s = {});
  let i, r;
  if ("QUERYPARAM" in e) {
    i = e.QUERYPARAM;
    try {
      const n = new self.URL(t).searchParams;
      if (n.has(i))
        r = n.get(i);
      else
        throw new Error(`"${i}" does not match any query parameter in URI: "${t}"`);
    } catch (n) {
      a.playlistParsingError || (a.playlistParsingError = new Error(`EXT-X-DEFINE QUERYPARAM: ${n.message}`));
    }
  } else
    i = e.NAME, r = e.VALUE;
  i in s ? a.playlistParsingError || (a.playlistParsingError = new Error(`EXT-X-DEFINE duplicate Variable Name declarations: "${i}"`)) : s[i] = r || "";
}
function fl(a, e, t) {
  const s = e.IMPORT;
  if (t && s in t) {
    let i = a.variableList;
    i || (a.variableList = i = {}), i[s] = t[s];
  } else
    a.playlistParsingError || (a.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${s}"`));
}
const gl = /^(\d+)x(\d+)$/, Dr = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class de {
  constructor(e, t) {
    typeof e == "string" && (e = de.parseAttrList(e, t)), oe(this, e);
  }
  get clientAttrs() {
    return Object.keys(this).filter((e) => e.substring(0, 2) === "X-");
  }
  decimalInteger(e) {
    const t = parseInt(this[e], 10);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  hexadecimalInteger(e) {
    if (this[e]) {
      let t = (this[e] || "0x").slice(2);
      t = (t.length & 1 ? "0" : "") + t;
      const s = new Uint8Array(t.length / 2);
      for (let i = 0; i < t.length / 2; i++)
        s[i] = parseInt(t.slice(i * 2, i * 2 + 2), 16);
      return s;
    }
    return null;
  }
  hexadecimalIntegerAsNumber(e) {
    const t = parseInt(this[e], 16);
    return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t;
  }
  decimalFloatingPoint(e) {
    return parseFloat(this[e]);
  }
  optionalFloat(e, t) {
    const s = this[e];
    return s ? parseFloat(s) : t;
  }
  enumeratedString(e) {
    return this[e];
  }
  enumeratedStringList(e, t) {
    const s = this[e];
    return (s ? s.split(/[ ,]+/) : []).reduce((i, r) => (i[r.toLowerCase()] = !0, i), t);
  }
  bool(e) {
    return this[e] === "YES";
  }
  decimalResolution(e) {
    const t = gl.exec(this[e]);
    if (t !== null)
      return {
        width: parseInt(t[1], 10),
        height: parseInt(t[2], 10)
      };
  }
  static parseAttrList(e, t) {
    let s;
    const i = {}, r = '"';
    for (Dr.lastIndex = 0; (s = Dr.exec(e)) !== null; ) {
      const n = s[1].trim();
      let o = s[2];
      const c = o.indexOf(r) === 0 && o.lastIndexOf(r) === o.length - 1;
      let l = !1;
      if (c)
        o = o.slice(1, -1);
      else
        switch (n) {
          case "IV":
          case "SCTE35-CMD":
          case "SCTE35-IN":
          case "SCTE35-OUT":
            l = !0;
        }
      if (t && (c || l))
        o = mi(t, o);
      else if (!l && !c)
        switch (n) {
          case "CLOSED-CAPTIONS":
            if (o === "NONE")
              break;
          case "ALLOWED-CPC":
          case "CLASS":
          case "ASSOC-LANGUAGE":
          case "AUDIO":
          case "BYTERANGE":
          case "CHANNELS":
          case "CHARACTERISTICS":
          case "CODECS":
          case "DATA-ID":
          case "END-DATE":
          case "GROUP-ID":
          case "ID":
          case "IMPORT":
          case "INSTREAM-ID":
          case "KEYFORMAT":
          case "KEYFORMATVERSIONS":
          case "LANGUAGE":
          case "NAME":
          case "PATHWAY-ID":
          case "QUERYPARAM":
          case "RECENTLY-REMOVED-DATERANGES":
          case "SERVER-URI":
          case "STABLE-RENDITION-ID":
          case "STABLE-VARIANT-ID":
          case "START-DATE":
          case "SUBTITLES":
          case "SUPPLEMENTAL-CODECS":
          case "URI":
          case "VALUE":
          case "VIDEO":
          case "X-ASSET-LIST":
          case "X-ASSET-URI":
            Z.warn(`${e}: attribute ${n} is missing quotes`);
        }
      i[n] = o;
    }
    return i;
  }
}
const ml = "com.apple.hls.interstitial";
function pl(a) {
  return a !== "ID" && a !== "CLASS" && a !== "CUE" && a !== "START-DATE" && a !== "DURATION" && a !== "END-DATE" && a !== "END-ON-NEXT";
}
function yl(a) {
  return a === "SCTE35-OUT" || a === "SCTE35-IN" || a === "SCTE35-CMD";
}
class qn {
  constructor(e, t, s = 0) {
    var i;
    if (this.attr = void 0, this.tagAnchor = void 0, this.tagOrder = void 0, this._startDate = void 0, this._endDate = void 0, this._dateAtEnd = void 0, this._cue = void 0, this._badValueForSameId = void 0, this.tagAnchor = (t == null ? void 0 : t.tagAnchor) || null, this.tagOrder = (i = t == null ? void 0 : t.tagOrder) != null ? i : s, t) {
      const r = t.attr;
      for (const n in r)
        if (Object.prototype.hasOwnProperty.call(e, n) && e[n] !== r[n]) {
          Z.warn(`DATERANGE tag attribute: "${n}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = n;
          break;
        }
      e = oe(new de({}), r, e);
    }
    if (this.attr = e, t ? (this._startDate = t._startDate, this._cue = t._cue, this._endDate = t._endDate, this._dateAtEnd = t._dateAtEnd) : this._startDate = new Date(e["START-DATE"]), "END-DATE" in this.attr) {
      const r = (t == null ? void 0 : t.endDate) || new Date(this.attr["END-DATE"]);
      N(r.getTime()) && (this._endDate = r);
    }
  }
  get id() {
    return this.attr.ID;
  }
  get class() {
    return this.attr.CLASS;
  }
  get cue() {
    const e = this._cue;
    return e === void 0 ? this._cue = this.attr.enumeratedStringList(this.attr.CUE ? "CUE" : "X-CUE", {
      pre: !1,
      post: !1,
      once: !1
    }) : e;
  }
  get startTime() {
    const {
      tagAnchor: e
    } = this;
    return e === null || e.programDateTime === null ? (Z.warn(`Expected tagAnchor Fragment with PDT set for DateRange "${this.id}": ${e}`), NaN) : e.start + (this.startDate.getTime() - e.programDateTime) / 1e3;
  }
  get startDate() {
    return this._startDate;
  }
  get endDate() {
    const e = this._endDate || this._dateAtEnd;
    if (e)
      return e;
    const t = this.duration;
    return t !== null ? this._dateAtEnd = new Date(this._startDate.getTime() + t * 1e3) : null;
  }
  get duration() {
    if ("DURATION" in this.attr) {
      const e = this.attr.decimalFloatingPoint("DURATION");
      if (N(e))
        return e;
    } else if (this._endDate)
      return (this._endDate.getTime() - this._startDate.getTime()) / 1e3;
    return null;
  }
  get plannedDuration() {
    return "PLANNED-DURATION" in this.attr ? this.attr.decimalFloatingPoint("PLANNED-DURATION") : null;
  }
  get endOnNext() {
    return this.attr.bool("END-ON-NEXT");
  }
  get isInterstitial() {
    return this.class === ml;
  }
  get isValid() {
    return !!this.id && !this._badValueForSameId && N(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class) && (!this.attr.CUE || !this.cue.pre && !this.cue.post || this.cue.pre !== this.cue.post) && (!this.isInterstitial || "X-ASSET-URI" in this.attr || "X-ASSET-LIST" in this.attr);
  }
}
const El = 10;
class Tl {
  constructor(e) {
    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.dateRangeTagCount = 0, this.live = !0, this.requestScheduled = -1, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.appliedTimelineOffset = void 0, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e;
  }
  reloaded(e) {
    if (!e) {
      this.advanced = !0, this.updated = !0;
      return;
    }
    const t = this.lastPartSn - e.lastPartSn, s = this.lastPartIndex - e.lastPartIndex;
    this.updated = this.endSN !== e.endSN || !!s || !!t || !this.live, this.advanced = this.endSN > e.endSN || t > 0 || t === 0 && s > 0, this.updated || this.advanced ? this.misses = Math.floor(e.misses * 0.6) : this.misses = e.misses + 1;
  }
  get hasProgramDateTime() {
    return this.fragments.length ? N(this.fragments[this.fragments.length - 1].programDateTime) : !1;
  }
  get levelTargetDuration() {
    return this.averagetargetduration || this.targetduration || El;
  }
  get drift() {
    const e = this.driftEndTime - this.driftStartTime;
    return e > 0 ? (this.driftEnd - this.driftStart) * 1e3 / e : 1;
  }
  get edge() {
    return this.partEnd || this.fragmentEnd;
  }
  get partEnd() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd;
  }
  get fragmentEnd() {
    var e;
    return (e = this.fragments) != null && e.length ? this.fragments[this.fragments.length - 1].end : 0;
  }
  get fragmentStart() {
    var e;
    return (e = this.fragments) != null && e.length ? this.fragments[0].start : 0;
  }
  get age() {
    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
  }
  get lastPartIndex() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].index : -1;
  }
  get maxPartIndex() {
    const e = this.partList;
    if (e) {
      const t = this.lastPartIndex;
      if (t !== -1) {
        for (let s = e.length; s--; )
          if (e[s].index > t)
            return e[s].index;
        return t;
      }
    }
    return 0;
  }
  get lastPartSn() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
  }
  get expired() {
    if (this.live && this.age && this.misses < 3) {
      const e = this.partEnd - this.fragmentStart;
      return this.age > Math.max(e, this.totalduration) + this.levelTargetDuration;
    }
    return !1;
  }
}
function It(a) {
  return a === "AES-128" || a === "AES-256" || a === "AES-256-CTR";
}
function Bi(a) {
  switch (a) {
    case "AES-128":
    case "AES-256":
      return at.cbc;
    case "AES-256-CTR":
      return at.ctr;
    default:
      throw new Error(`invalid full segment method ${a}`);
  }
}
function Ui(a) {
  return Uint8Array.from(atob(a), (e) => e.charCodeAt(0));
}
function pi(a) {
  return Uint8Array.from(unescape(encodeURIComponent(a)), (e) => e.charCodeAt(0));
}
function vl(a) {
  const e = pi(a).subarray(0, 16), t = new Uint8Array(16);
  return t.set(e, 16 - e.length), t;
}
function Sl(a) {
  const e = function(s, i, r) {
    const n = s[i];
    s[i] = s[r], s[r] = n;
  };
  e(a, 0, 3), e(a, 1, 2), e(a, 4, 5), e(a, 6, 7);
}
function xl(a) {
  const e = a.split(":");
  let t = null;
  if (e[0] === "data" && e.length === 2) {
    const s = e[1].split(";"), i = s[s.length - 1].split(",");
    if (i.length === 2) {
      const r = i[0] === "base64", n = i[1];
      r ? (s.splice(-1, 1), t = Ui(n)) : t = vl(n);
    }
  }
  return t;
}
const Ds = typeof self < "u" ? self : void 0;
var ne = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.fps",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "com.widevine.alpha"
}, Ae = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.streamingkeydelivery",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
};
function Vs(a) {
  switch (a) {
    case Ae.FAIRPLAY:
      return ne.FAIRPLAY;
    case Ae.PLAYREADY:
      return ne.PLAYREADY;
    case Ae.WIDEVINE:
      return ne.WIDEVINE;
    case Ae.CLEARKEY:
      return ne.CLEARKEY;
  }
}
var ss = {
  CENC: "1077efecc0b24d02ace33c1e52e2fb4b",
  CLEARKEY: "e2719d58a985b3c9781ab030af78d30e",
  PLAYREADY: "9a04f07998404286ab92e65be0885f95",
  WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed"
};
function Ks(a) {
  if (a === ss.WIDEVINE)
    return ne.WIDEVINE;
  if (a === ss.PLAYREADY)
    return ne.PLAYREADY;
  if (a === ss.CENC || a === ss.CLEARKEY)
    return ne.CLEARKEY;
}
function Hs(a) {
  switch (a) {
    case ne.FAIRPLAY:
      return Ae.FAIRPLAY;
    case ne.PLAYREADY:
      return Ae.PLAYREADY;
    case ne.WIDEVINE:
      return Ae.WIDEVINE;
    case ne.CLEARKEY:
      return Ae.CLEARKEY;
  }
}
function is(a) {
  const {
    drmSystems: e,
    widevineLicenseUrl: t
  } = a, s = e ? [ne.FAIRPLAY, ne.WIDEVINE, ne.PLAYREADY, ne.CLEARKEY].filter((i) => !!e[i]) : [];
  return !s[ne.WIDEVINE] && t && s.push(ne.WIDEVINE), s;
}
const jn = function(a) {
  return Ds != null && (a = Ds.navigator) != null && a.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
}();
function Al(a, e, t, s) {
  let i;
  switch (a) {
    case ne.FAIRPLAY:
      i = ["cenc", "sinf"];
      break;
    case ne.WIDEVINE:
    case ne.PLAYREADY:
      i = ["cenc"];
      break;
    case ne.CLEARKEY:
      i = ["cenc", "keyids"];
      break;
    default:
      throw new Error(`Unknown key-system: ${a}`);
  }
  return Ll(i, e, t, s);
}
function Ll(a, e, t, s) {
  return [{
    initDataTypes: a,
    persistentState: s.persistentState || "optional",
    distinctiveIdentifier: s.distinctiveIdentifier || "optional",
    sessionTypes: s.sessionTypes || [s.sessionType || "temporary"],
    audioCapabilities: e.map((r) => ({
      contentType: `audio/mp4; codecs=${r}`,
      robustness: s.audioRobustness || "",
      encryptionScheme: s.audioEncryptionScheme || null
    })),
    videoCapabilities: t.map((r) => ({
      contentType: `video/mp4; codecs=${r}`,
      robustness: s.videoRobustness || "",
      encryptionScheme: s.videoEncryptionScheme || null
    }))
  }];
}
function Il(a) {
  var e;
  return a.sessionType === "persistent-license" || !!((e = a.sessionTypes) != null && e.some((t) => t === "persistent-license"));
}
function zn(a) {
  const e = new Uint16Array(a.buffer, a.byteOffset, a.byteLength / 2), t = String.fromCharCode.apply(null, Array.from(e)), s = t.substring(t.indexOf("<"), t.length), n = new DOMParser().parseFromString(s, "text/xml").getElementsByTagName("KID")[0];
  if (n) {
    const o = n.childNodes[0] ? n.childNodes[0].nodeValue : n.getAttribute("VALUE");
    if (o) {
      const c = Ui(o).subarray(0, 16);
      return Sl(c), c;
    }
  }
  return null;
}
let rs = {};
class Ht {
  static clearKeyUriToKeyIdMap() {
    rs = {};
  }
  constructor(e, t, s, i = [1], r = null) {
    this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = s, this.keyFormatVersions = i, this.iv = r, this.encrypted = e ? e !== "NONE" : !1, this.isCommonEncryption = this.encrypted && !It(e);
  }
  isSupported() {
    if (this.method) {
      if (It(this.method) || this.method === "NONE")
        return !0;
      if (this.keyFormat === "identity")
        return this.method === "SAMPLE-AES";
      switch (this.keyFormat) {
        case Ae.FAIRPLAY:
        case Ae.WIDEVINE:
        case Ae.PLAYREADY:
        case Ae.CLEARKEY:
          return ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method) !== -1;
      }
    }
    return !1;
  }
  getDecryptData(e) {
    if (!this.encrypted || !this.uri)
      return null;
    if (It(this.method) && this.uri && !this.iv) {
      typeof e != "number" && (Z.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0);
      const s = Rl(e);
      return new Ht(this.method, this.uri, "identity", this.keyFormatVersions, s);
    }
    const t = xl(this.uri);
    if (t)
      switch (this.keyFormat) {
        case Ae.WIDEVINE:
          this.pssh = t, t.length >= 22 && (this.keyId = t.subarray(t.length - 22, t.length - 6));
          break;
        case Ae.PLAYREADY: {
          const s = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
          this.pssh = Po(s, null, t), this.keyId = zn(t);
          break;
        }
        default: {
          let s = t.subarray(0, 16);
          if (s.length !== 16) {
            const i = new Uint8Array(16);
            i.set(s, 16 - s.length), s = i;
          }
          this.keyId = s;
          break;
        }
      }
    if (!this.keyId || this.keyId.byteLength !== 16) {
      let s = rs[this.uri];
      if (!s) {
        const i = Object.keys(rs).length % Number.MAX_SAFE_INTEGER;
        s = new Uint8Array(16), new DataView(s.buffer, 12, 4).setUint32(0, i), rs[this.uri] = s;
      }
      this.keyId = s;
    }
    return this;
  }
}
function Rl(a) {
  const e = new Uint8Array(16);
  for (let t = 12; t < 16; t++)
    e[t] = a >> 8 * (15 - t) & 255;
  return e;
}
const Cr = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, Pr = /#EXT-X-MEDIA:(.*)/g, bl = /^#EXT(?:INF|-X-TARGETDURATION):/m, Ws = new RegExp([
  /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
  // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
  /(?!#) *(\S[^\r\n]*)/.source,
  // segment URI, group 3 => the URI (note newline is not eaten)
  /#.*/.source
  // All other non-segment oriented tags will match with all groups empty
].join("|"), "g"), _l = new RegExp([/#EXT-X-(PROGRAM-DATE-TIME|BYTERANGE|DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP|INDEPENDENT-SEGMENTS)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class He {
  static findGroup(e, t) {
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      if (i.id === t)
        return i;
    }
  }
  static resolve(e, t) {
    return Pi.buildAbsoluteURL(t, e, {
      alwaysNormalize: !0
    });
  }
  static isMediaPlaylist(e) {
    return bl.test(e);
  }
  static parseMasterPlaylist(e, t) {
    const s = br(e), i = {
      contentSteering: null,
      levels: [],
      playlistParsingError: null,
      sessionData: null,
      sessionKeys: null,
      startTimeOffset: null,
      variableList: null,
      hasVariableRefs: s
    }, r = [];
    Cr.lastIndex = 0;
    let n;
    for (; (n = Cr.exec(e)) != null; )
      if (n[1]) {
        var o;
        const l = new de(n[1], i), u = mi(i, n[2]), d = {
          attrs: l,
          bitrate: l.decimalInteger("BANDWIDTH") || l.decimalInteger("AVERAGE-BANDWIDTH"),
          name: l.NAME,
          url: He.resolve(u, t)
        }, h = l.decimalResolution("RESOLUTION");
        h && (d.width = h.width, d.height = h.height), Or(l.CODECS, d);
        const f = l["SUPPLEMENTAL-CODECS"];
        f && (d.supplemental = {}, Or(f, d.supplemental)), (o = d.unknownCodecs) != null && o.length || r.push(d), i.levels.push(d);
      } else if (n[3]) {
        const l = n[3], u = n[4];
        switch (l) {
          case "SESSION-DATA": {
            const d = new de(u, i), h = d["DATA-ID"];
            h && (i.sessionData === null && (i.sessionData = {}), i.sessionData[h] = d);
            break;
          }
          case "SESSION-KEY": {
            const d = kr(u, t, i);
            d.encrypted && d.isSupported() ? (i.sessionKeys === null && (i.sessionKeys = []), i.sessionKeys.push(d)) : Z.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${u}"`);
            break;
          }
          case "DEFINE": {
            {
              const d = new de(u, i);
              _r(i, d, t);
            }
            break;
          }
          case "CONTENT-STEERING": {
            const d = new de(u, i);
            i.contentSteering = {
              uri: He.resolve(d["SERVER-URI"], t),
              pathwayId: d["PATHWAY-ID"] || "."
            };
            break;
          }
          case "START": {
            i.startTimeOffset = wr(u);
            break;
          }
        }
      }
    const c = r.length > 0 && r.length < i.levels.length;
    return i.levels = c ? r : i.levels, i.levels.length === 0 && (i.playlistParsingError = new Error("no levels found in manifest")), i;
  }
  static parseMasterPlaylistMedia(e, t, s) {
    let i;
    const r = {}, n = s.levels, o = {
      AUDIO: n.map((l) => ({
        id: l.attrs.AUDIO,
        audioCodec: l.audioCodec
      })),
      SUBTITLES: n.map((l) => ({
        id: l.attrs.SUBTITLES,
        textCodec: l.textCodec
      })),
      "CLOSED-CAPTIONS": []
    };
    let c = 0;
    for (Pr.lastIndex = 0; (i = Pr.exec(e)) !== null; ) {
      const l = new de(i[1], s), u = l.TYPE;
      if (u) {
        const d = o[u], h = r[u] || [];
        r[u] = h;
        const f = l.LANGUAGE, g = l["ASSOC-LANGUAGE"], y = l.CHANNELS, p = l.CHARACTERISTICS, E = l["INSTREAM-ID"], v = {
          attrs: l,
          bitrate: 0,
          id: c++,
          groupId: l["GROUP-ID"] || "",
          name: l.NAME || f || "",
          type: u,
          default: l.bool("DEFAULT"),
          autoselect: l.bool("AUTOSELECT"),
          forced: l.bool("FORCED"),
          lang: f,
          url: l.URI ? He.resolve(l.URI, t) : ""
        };
        if (g && (v.assocLang = g), y && (v.channels = y), p && (v.characteristics = p), E && (v.instreamId = E), d != null && d.length) {
          const T = He.findGroup(d, v.groupId) || d[0];
          Fr(v, T, "audioCodec"), Fr(v, T, "textCodec");
        }
        h.push(v);
      }
    }
    return r;
  }
  static parseLevelPlaylist(e, t, s, i, r, n) {
    var o;
    const c = {
      url: t
    }, l = new Tl(t), u = l.fragments, d = [];
    let h = null, f = 0, g = 0, y = 0, p = 0, E = 0, v = null, T = new Bs(i, c), S, x, _, A = -1, b = !1, C = null, L;
    if (Ws.lastIndex = 0, l.m3u8 = e, l.hasVariableRefs = br(e), ((o = Ws.exec(e)) == null ? void 0 : o[0]) !== "#EXTM3U")
      return l.playlistParsingError = new Error("Missing format identifier #EXTM3U"), l;
    for (; (S = Ws.exec(e)) !== null; ) {
      b && (b = !1, T = new Bs(i, c), T.playlistOffset = y, T.start = y, T.sn = f, T.cc = p, E && (T.bitrate = E), T.level = s, h && (T.initSegment = h, h.rawProgramDateTime && (T.rawProgramDateTime = h.rawProgramDateTime, h.rawProgramDateTime = null), C && (T.setByteRange(C), C = null)));
      const W = S[1];
      if (W) {
        T.duration = parseFloat(W);
        const K = (" " + S[2]).slice(1);
        T.title = K || null, T.tagList.push(K ? ["INF", W, K] : ["INF", W]);
      } else if (S[3]) {
        if (N(T.duration)) {
          T.playlistOffset = y, T.start = y, _ && Nr(T, _, l), T.sn = f, T.level = s, T.cc = p, u.push(T);
          const K = (" " + S[3]).slice(1);
          T.relurl = mi(l, K), yi(T, v, d), v = T, y += T.duration, f++, g = 0, b = !0;
        }
      } else {
        if (S = S[0].match(_l), !S) {
          Z.warn("No matches on slow regex match for level playlist!");
          continue;
        }
        for (x = 1; x < S.length && S[x] === void 0; x++)
          ;
        const K = (" " + S[x]).slice(1), B = (" " + S[x + 1]).slice(1), V = S[x + 2] ? (" " + S[x + 2]).slice(1) : null;
        switch (K) {
          case "BYTERANGE":
            v ? T.setByteRange(B, v) : T.setByteRange(B);
            break;
          case "PROGRAM-DATE-TIME":
            T.rawProgramDateTime = B, T.tagList.push(["PROGRAM-DATE-TIME", B]), A === -1 && (A = u.length);
            break;
          case "PLAYLIST-TYPE":
            l.type && qe(l, K, S), l.type = B.toUpperCase();
            break;
          case "MEDIA-SEQUENCE":
            l.startSN !== 0 ? qe(l, K, S) : u.length > 0 && Br(l, K, S), f = l.startSN = parseInt(B);
            break;
          case "SKIP": {
            l.skippedSegments && qe(l, K, S);
            const $ = new de(B, l), O = $.decimalInteger("SKIPPED-SEGMENTS");
            if (N(O)) {
              l.skippedSegments += O;
              for (let k = O; k--; )
                u.push(null);
              f += O;
            }
            const D = $.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            D && (l.recentlyRemovedDateranges = (l.recentlyRemovedDateranges || []).concat(D.split("	")));
            break;
          }
          case "TARGETDURATION":
            l.targetduration !== 0 && qe(l, K, S), l.targetduration = Math.max(parseInt(B), 1);
            break;
          case "VERSION":
            l.version !== null && qe(l, K, S), l.version = parseInt(B);
            break;
          case "INDEPENDENT-SEGMENTS":
            break;
          case "ENDLIST":
            l.live || qe(l, K, S), l.live = !1;
            break;
          case "#":
            (B || V) && T.tagList.push(V ? [B, V] : [B]);
            break;
          case "DISCONTINUITY":
            p++, T.tagList.push(["DIS"]);
            break;
          case "GAP":
            T.gap = !0, T.tagList.push([K]);
            break;
          case "BITRATE":
            T.tagList.push([K, B]), E = parseInt(B) * 1e3, N(E) ? T.bitrate = E : E = 0;
            break;
          case "DATERANGE": {
            const $ = new de(B, l), O = new qn($, l.dateRanges[$.ID], l.dateRangeTagCount);
            l.dateRangeTagCount++, O.isValid || l.skippedSegments ? l.dateRanges[O.id] = O : Z.warn(`Ignoring invalid DATERANGE tag: "${B}"`), T.tagList.push(["EXT-X-DATERANGE", B]);
            break;
          }
          case "DEFINE": {
            {
              const $ = new de(B, l);
              "IMPORT" in $ ? fl(l, $, n) : _r(l, $, t);
            }
            break;
          }
          case "DISCONTINUITY-SEQUENCE":
            l.startCC !== 0 ? qe(l, K, S) : u.length > 0 && Br(l, K, S), l.startCC = p = parseInt(B);
            break;
          case "KEY": {
            const $ = kr(B, t, l);
            if ($.isSupported()) {
              if ($.method === "NONE") {
                _ = void 0;
                break;
              }
              _ || (_ = {}), _[$.keyFormat] && (_ = oe({}, _)), _[$.keyFormat] = $;
            } else
              Z.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${B}"`);
            break;
          }
          case "START":
            l.startTimeOffset = wr(B);
            break;
          case "MAP": {
            const $ = new de(B, l);
            if (T.duration) {
              const O = new Bs(i, c);
              Mr(O, $, s, _), h = O, T.initSegment = h, h.rawProgramDateTime && !T.rawProgramDateTime && (T.rawProgramDateTime = h.rawProgramDateTime);
            } else {
              const O = T.byteRangeEndOffset;
              if (O) {
                const D = T.byteRangeStartOffset;
                C = `${O - D}@${D}`;
              } else
                C = null;
              Mr(T, $, s, _), h = T, b = !0;
            }
            h.cc = p;
            break;
          }
          case "SERVER-CONTROL": {
            L && qe(l, K, S), L = new de(B), l.canBlockReload = L.bool("CAN-BLOCK-RELOAD"), l.canSkipUntil = L.optionalFloat("CAN-SKIP-UNTIL", 0), l.canSkipDateRanges = l.canSkipUntil > 0 && L.bool("CAN-SKIP-DATERANGES"), l.partHoldBack = L.optionalFloat("PART-HOLD-BACK", 0), l.holdBack = L.optionalFloat("HOLD-BACK", 0);
            break;
          }
          case "PART-INF": {
            l.partTarget && qe(l, K, S);
            const $ = new de(B);
            l.partTarget = $.decimalFloatingPoint("PART-TARGET");
            break;
          }
          case "PART": {
            let $ = l.partList;
            $ || ($ = l.partList = []);
            const O = g > 0 ? $[$.length - 1] : void 0, D = g++, k = new de(B, l), M = new po(k, T, c, D, O);
            $.push(M), T.duration += M.duration;
            break;
          }
          case "PRELOAD-HINT": {
            const $ = new de(B, l);
            l.preloadHint = $;
            break;
          }
          case "RENDITION-REPORT": {
            const $ = new de(B, l);
            l.renditionReports = l.renditionReports || [], l.renditionReports.push($);
            break;
          }
          default:
            Z.warn(`line parsed but not handled: ${S}`);
            break;
        }
      }
    }
    v && !v.relurl ? (u.pop(), y -= v.duration, l.partList && (l.fragmentHint = v)) : l.partList && (yi(T, v, d), T.cc = p, l.fragmentHint = T, _ && Nr(T, _, l)), l.targetduration || (l.playlistParsingError = new Error("#EXT-X-TARGETDURATION is required"));
    const w = u.length, F = u[0], X = u[w - 1];
    if (y += l.skippedSegments * l.targetduration, y > 0 && w && X) {
      l.averagetargetduration = y / w;
      const W = X.sn;
      l.endSN = W !== "initSegment" ? W : 0, l.live || (X.endList = !0), F && l.startCC === void 0 && (l.startCC = F.cc), A > 0 && (Cl(u, A), F && d.unshift(F));
    } else
      l.endSN = 0, l.startCC = 0;
    return l.fragmentHint && (y += l.fragmentHint.duration), l.totalduration = y, d.length && l.dateRangeTagCount && F && Xn(d, l), l.endCC = p, l;
  }
}
function Xn(a, e) {
  const t = a.length, s = a[t - 1], i = e.live ? 1 / 0 : e.totalduration, r = Object.keys(e.dateRanges);
  for (let n = r.length; n--; ) {
    const o = e.dateRanges[r[n]], c = o.startDate.getTime();
    o.tagAnchor = s.ref;
    for (let l = t; l--; ) {
      const u = Dl(e, c, a, l, i);
      if (u !== -1) {
        o.tagAnchor = e.fragments[u].ref;
        break;
      }
    }
  }
}
function Dl(a, e, t, s, i) {
  const r = t[s];
  if (r) {
    const o = r.programDateTime;
    if (e >= o || s === 0) {
      var n;
      const c = (((n = t[s + 1]) == null ? void 0 : n.start) || i) - r.start;
      if (e <= o + c * 1e3) {
        const l = t[s].sn - a.startSN, u = a.fragments;
        if (u.length > t.length) {
          const h = (t[s + 1] || u[u.length - 1]).sn - a.startSN;
          for (let f = h; f > l; f--) {
            const g = u[f].programDateTime;
            if (e >= g && e < g + u[f].duration * 1e3)
              return f;
          }
        }
        return l;
      }
    }
  }
  return -1;
}
function kr(a, e, t) {
  var s, i;
  const r = new de(a, t), n = (s = r.METHOD) != null ? s : "", o = r.URI, c = r.hexadecimalInteger("IV"), l = r.KEYFORMATVERSIONS, u = (i = r.KEYFORMAT) != null ? i : "identity";
  o && r.IV && !c && Z.error(`Invalid IV: ${r.IV}`);
  const d = o ? He.resolve(o, e) : "", h = (l || "1").split("/").map(Number).filter(Number.isFinite);
  return new Ht(n, d, u, h, c);
}
function wr(a) {
  const t = new de(a).decimalFloatingPoint("TIME-OFFSET");
  return N(t) ? t : null;
}
function Or(a, e) {
  let t = (a || "").split(/[ ,]+/).filter((s) => s);
  ["video", "audio", "text"].forEach((s) => {
    const i = t.filter((r) => Nn(r, s));
    i.length && (e[`${s}Codec`] = i.map((r) => r.split("/")[0]).join(","), t = t.filter((r) => i.indexOf(r) === -1));
  }), e.unknownCodecs = t;
}
function Fr(a, e, t) {
  const s = e[t];
  s && (a[t] = s);
}
function Cl(a, e) {
  let t = a[e];
  for (let s = e; s--; ) {
    const i = a[s];
    if (!i)
      return;
    i.programDateTime = t.programDateTime - i.duration * 1e3, t = i;
  }
}
function yi(a, e, t) {
  a.rawProgramDateTime ? t.push(a) : e != null && e.programDateTime && (a.programDateTime = e.endProgramDateTime);
}
function Mr(a, e, t, s) {
  a.relurl = e.URI, e.BYTERANGE && a.setByteRange(e.BYTERANGE), a.level = t, a.sn = "initSegment", s && (a.levelkeys = s), a.initSegment = null;
}
function Nr(a, e, t) {
  a.levelkeys = e;
  const {
    encryptedFragments: s
  } = t;
  (!s.length || s[s.length - 1].levelkeys !== e) && Object.keys(e).some((i) => e[i].isCommonEncryption) && s.push(a);
}
function qe(a, e, t) {
  a.playlistParsingError = new Error(`#EXT-X-${e} must not appear more than once (${t[0]})`);
}
function Br(a, e, t) {
  a.playlistParsingError = new Error(`#EXT-X-${e} must appear before the first Media Segment (${t[0]})`);
}
function Ys(a, e) {
  const t = e.startPTS;
  if (N(t)) {
    let s = 0, i;
    e.sn > a.sn ? (s = t - a.start, i = a) : (s = a.start - t, i = e), i.duration !== s && i.setDuration(s);
  } else
    e.sn > a.sn ? a.cc === e.cc && a.minEndPTS ? e.setStart(a.start + (a.minEndPTS - a.start)) : e.setStart(a.start + a.duration) : e.setStart(Math.max(a.start - e.duration, 0));
}
function Qn(a, e, t, s, i, r) {
  s - t <= 0 && (Z.warn("Fragment should have a positive duration", e), s = t + e.duration, r = i + e.duration);
  let o = t, c = s;
  const l = e.startPTS, u = e.endPTS;
  if (N(l)) {
    const p = Math.abs(l - t);
    N(e.deltaPTS) ? e.deltaPTS = Math.max(p, e.deltaPTS) : e.deltaPTS = p, o = Math.max(t, l), t = Math.min(t, l), i = Math.min(i, e.startDTS), c = Math.min(s, u), s = Math.max(s, u), r = Math.max(r, e.endDTS);
  }
  const d = t - e.start;
  e.start !== 0 && e.setStart(t), e.setDuration(s - e.start), e.startPTS = t, e.maxStartPTS = o, e.startDTS = i, e.endPTS = s, e.minEndPTS = c, e.endDTS = r;
  const h = e.sn;
  if (!a || h < a.startSN || h > a.endSN)
    return 0;
  let f;
  const g = h - a.startSN, y = a.fragments;
  for (y[g] = e, f = g; f > 0; f--)
    Ys(y[f], y[f - 1]);
  for (f = g; f < y.length - 1; f++)
    Ys(y[f], y[f + 1]);
  return a.fragmentHint && Ys(y[y.length - 1], a.fragmentHint), a.PTSKnown = a.alignedSliding = !0, d;
}
function Pl(a, e) {
  if (a === e)
    return;
  let t = null;
  const s = a.fragments;
  for (let c = s.length - 1; c >= 0; c--) {
    const l = s[c].initSegment;
    if (l) {
      t = l;
      break;
    }
  }
  a.fragmentHint && delete a.fragmentHint.endPTS;
  let i;
  Ol(a, e, (c, l, u, d) => {
    if (!e.startCC && l.cc !== c.cc) {
      var h, f;
      const g = c.cc - l.cc;
      for (let y = u; y < d.length; y++)
        d[y].cc += g;
      e.startCC = (h = (f = ea(a, e.startSN - 1)) == null ? void 0 : f.cc) != null ? h : d[0].cc, e.endCC = d[d.length - 1].cc;
    }
    N(c.startPTS) && N(c.endPTS) && (l.setStart(l.startPTS = c.startPTS), l.startDTS = c.startDTS, l.maxStartPTS = c.maxStartPTS, l.endPTS = c.endPTS, l.endDTS = c.endDTS, l.minEndPTS = c.minEndPTS, l.setDuration(c.endPTS - c.startPTS), l.duration && (i = l), e.PTSKnown = e.alignedSliding = !0), c.hasStreams && (l.elementaryStreams = c.elementaryStreams), l.loader = c.loader, c.hasStats && (l.stats = c.stats), c.initSegment && (l.initSegment = c.initSegment, t = c.initSegment);
  });
  const r = e.fragments, n = e.fragmentHint ? r.concat(e.fragmentHint) : r;
  if (t && n.forEach((c) => {
    var l;
    c && (!c.initSegment || c.initSegment.relurl === ((l = t) == null ? void 0 : l.relurl)) && (c.initSegment = t);
  }), e.skippedSegments)
    if (e.deltaUpdateFailed = r.some((c) => !c), e.deltaUpdateFailed) {
      Z.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for (let c = e.skippedSegments; c--; )
        r.shift();
      e.startSN = r[0].sn;
    } else {
      e.endCC = r[r.length - 1].cc, e.canSkipDateRanges && (e.dateRanges = kl(a.dateRanges, e));
      const c = a.fragments.filter((l) => l.rawProgramDateTime);
      if (a.hasProgramDateTime && !e.hasProgramDateTime)
        for (let l = 1; l < n.length; l++)
          n[l].programDateTime === null && yi(n[l], n[l - 1], c);
      Xn(c, e);
    }
  wl(a.partList, e.partList, (c, l) => {
    l.elementaryStreams = c.elementaryStreams, l.stats = c.stats;
  }), i ? Qn(e, i, i.startPTS, i.endPTS, i.startDTS, i.endDTS) : Zn(a, e), r.length && (e.totalduration = e.edge - r[0].start), e.driftStartTime = a.driftStartTime, e.driftStart = a.driftStart;
  const o = e.advancedDateTime;
  if (e.advanced && o) {
    const c = e.edge;
    e.driftStart || (e.driftStartTime = o, e.driftStart = c), e.driftEndTime = o, e.driftEnd = c;
  } else
    e.driftEndTime = a.driftEndTime, e.driftEnd = a.driftEnd, e.advancedDateTime = a.advancedDateTime;
  e.requestScheduled === -1 && (e.requestScheduled = a.requestScheduled);
}
function kl(a, e) {
  const {
    dateRanges: t,
    recentlyRemovedDateranges: s
  } = e, i = oe({}, a);
  s && s.forEach((o) => {
    delete i[o];
  });
  const n = Object.keys(i).length;
  return n && Object.keys(t).forEach((o) => {
    const c = i[o], l = new qn(t[o].attr, c);
    l.isValid ? (i[o] = l, c || (l.tagOrder += n)) : Z.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${ue(t[o].attr)}"`);
  }), i;
}
function wl(a, e, t) {
  if (a && e) {
    let s = 0;
    for (let i = 0, r = a.length; i <= r; i++) {
      const n = a[i], o = e[i + s];
      n && o && n.index === o.index && n.fragment.sn === o.fragment.sn ? t(n, o) : s--;
    }
  }
}
function Ol(a, e, t) {
  const s = e.skippedSegments, i = Math.max(a.startSN, e.startSN) - e.startSN, r = (a.fragmentHint ? 1 : 0) + (s ? e.endSN : Math.min(a.endSN, e.endSN)) - e.startSN, n = e.startSN - a.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, c = a.fragmentHint ? a.fragments.concat(a.fragmentHint) : a.fragments;
  for (let l = i; l <= r; l++) {
    const u = c[n + l];
    let d = o[l];
    if (s && !d && u && (d = e.fragments[l] = u), u && d) {
      if (t(u, d, l, o), u.url && u.url !== d.url) {
        e.playlistParsingError = Ur(`media sequence mismatch ${d.sn}:`, a, e, u, d);
        return;
      } else if (u.cc !== d.cc) {
        e.playlistParsingError = Ur(`discontinuity sequence mismatch (${u.cc}!=${d.cc})`, a, e, u, d);
        return;
      }
    }
  }
}
function Ur(a, e, t, s, i) {
  return new Error(`${a} ${i.url}
Playlist starting @${e.startSN}
${e.m3u8}

Playlist starting @${t.startSN}
${t.m3u8}`);
}
function Zn(a, e, t = !0) {
  const s = e.startSN + e.skippedSegments - a.startSN, i = a.fragments, r = s >= 0;
  let n = 0;
  if (r && s < i.length)
    n = i[s].start;
  else if (r && e.startSN === a.endSN + 1)
    n = a.fragmentEnd;
  else if (r && t)
    n = a.fragmentStart + s * e.levelTargetDuration;
  else if (!e.skippedSegments && e.fragmentStart === 0)
    n = a.fragmentStart;
  else
    return;
  Ei(e, n);
}
function Ei(a, e) {
  if (e) {
    const t = a.fragments;
    for (let s = a.skippedSegments; s < t.length; s++)
      t[s].addStart(e);
    a.fragmentHint && a.fragmentHint.addStart(e);
  }
}
function Jn(a, e = 1 / 0) {
  let t = 1e3 * a.targetduration;
  if (a.updated) {
    const s = a.fragments, i = 4;
    if (s.length && t * i > e) {
      const r = s[s.length - 1].duration * 1e3;
      r < t && (t = r);
    }
  } else
    t /= 2;
  return Math.round(t);
}
function ea(a, e, t) {
  if (!a)
    return null;
  let s = a.fragments[e - a.startSN];
  return s || (s = a.fragmentHint, s && s.sn === e) ? s : e < a.startSN && t && t.sn === e ? t : null;
}
function $r(a, e, t) {
  return a ? ta(a.partList, e, t) : null;
}
function ta(a, e, t) {
  if (a)
    for (let s = a.length; s--; ) {
      const i = a[s];
      if (i.index === t && i.fragment.sn === e)
        return i;
    }
  return null;
}
function sa(a) {
  a.forEach((e, t) => {
    var s;
    (s = e.details) == null || s.fragments.forEach((i) => {
      i.level = t, i.initSegment && (i.initSegment.level = t);
    });
  });
}
function Nt(a, e) {
  for (let s = 0, i = a.length; s < i; s++) {
    var t;
    if (((t = a[s]) == null ? void 0 : t.cc) === e)
      return a[s];
  }
  return null;
}
function Fl(a, e) {
  return !!(a && e.startCC < a.endCC && e.endCC > a.startCC);
}
function Gr(a, e) {
  if (a) {
    const t = a.start + e;
    a.start = a.startPTS = t, a.endPTS = t + a.duration;
  }
}
function ia(a, e) {
  const t = e.fragments;
  for (let s = 0, i = t.length; s < i; s++)
    Gr(t[s], a);
  e.fragmentHint && Gr(e.fragmentHint, a), e.alignedSliding = !0;
}
function Ml(a, e) {
  a && (ra(e, a), !e.alignedSliding && a && Cs(e, a), !e.alignedSliding && a && !e.skippedSegments && Zn(a, e, !1));
}
function ra(a, e) {
  if (!Fl(e, a))
    return;
  const t = Math.min(e.endCC, a.endCC), s = Nt(e.fragments, t), i = Nt(a.fragments, t);
  if (!s || !i)
    return;
  Z.log(`Aligning playlist at start of dicontinuity sequence ${t}`);
  const r = s.start - i.start;
  ia(r, a);
}
function Cs(a, e) {
  if (!a.hasProgramDateTime || !e.hasProgramDateTime)
    return;
  const t = a.fragments, s = e.fragments;
  if (!t.length || !s.length)
    return;
  let i, r;
  const n = Math.min(e.endCC, a.endCC);
  e.startCC < n && a.startCC < n && (i = Nt(s, n), r = Nt(t, n)), (!i || !r) && (i = s[Math.floor(s.length / 2)], r = Nt(t, i.cc) || t[Math.floor(t.length / 2)]);
  const o = i.programDateTime, c = r.programDateTime;
  if (!o || !c)
    return;
  const l = (c - o) / 1e3 - (r.start - i.start);
  ia(l, a);
}
const Nl = {
  toString: function(a) {
    let e = "";
    const t = a.length;
    for (let s = 0; s < t; s++)
      e += `[${a.start(s).toFixed(3)}-${a.end(s).toFixed(3)}]`;
    return e;
  }
}, P = {
  STOPPED: "STOPPED",
  IDLE: "IDLE",
  KEY_LOADING: "KEY_LOADING",
  FRAG_LOADING: "FRAG_LOADING",
  FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
  WAITING_TRACK: "WAITING_TRACK",
  PARSING: "PARSING",
  PARSED: "PARSED",
  ENDED: "ENDED",
  ERROR: "ERROR",
  WAITING_INIT_PTS: "WAITING_INIT_PTS",
  WAITING_LEVEL: "WAITING_LEVEL"
};
class $i extends Wn {
  constructor(e, t, s, i, r) {
    super(i, e.logger), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = P.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.buffering = !0, this.loadingParts = !1, this.loopSn = void 0, this.onMediaSeeking = () => {
      const {
        config: n,
        fragCurrent: o,
        media: c,
        mediaBuffer: l,
        state: u
      } = this, d = c ? c.currentTime : 0, h = z.bufferInfo(l || c, d, n.maxBufferHole);
      if (this.log(`media seeking to ${N(d) ? d.toFixed(3) : d}, state: ${u}`), this.state === P.ENDED)
        this.resetLoadingState();
      else if (o) {
        const f = n.maxFragLookUpTolerance, g = o.start - f, y = o.start + o.duration + f;
        if (!h.len || y < h.start || g > h.end) {
          const p = d > y;
          (d < g || p) && (p && o.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), o.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
        }
      }
      if (c) {
        this.fragmentTracker.removeFragmentsInRange(d, 1 / 0, this.playlistType, !0);
        const f = this.lastCurrentTime;
        if (d > f && (this.lastCurrentTime = d), !this.loadingParts) {
          const g = Math.max(h.end, d), y = this.shouldLoadParts(this.getLevelDetails(), g);
          y && (this.log(`LL-Part loading ON after seeking to ${d.toFixed(2)} with buffer @${g.toFixed(2)}`), this.loadingParts = y);
        }
      }
      !this.hls.hasEnoughToStart && !h.len && (this.log(`setting startPosition to ${d} because of seek before start`), this.nextLoadPosition = this.startPosition = d), this.tickImmediate();
    }, this.onMediaEnded = () => {
      this.log("setting startPosition to 0 because media ended"), this.startPosition = this.lastCurrentTime = 0;
    }, this.playlistType = r, this.hls = e, this.fragmentLoader = new dl(e.config), this.keyLoader = s, this.fragmentTracker = t, this.config = e.config, this.decrypter = new Mi(e.config);
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.ERROR, this.onError, this);
  }
  doTick() {
    this.onTickEnd();
  }
  onTickEnd() {
  }
  startLoad(e) {
  }
  stopLoad() {
    if (this.state === P.STOPPED)
      return;
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    const e = this.fragCurrent;
    e != null && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = P.STOPPED;
  }
  get startPositionValue() {
    const {
      nextLoadPosition: e,
      startPosition: t
    } = this;
    return t === -1 && e ? e : t;
  }
  get bufferingEnabled() {
    return this.buffering;
  }
  pauseBuffering() {
    this.buffering = !1;
  }
  resumeBuffering() {
    this.buffering = !0;
  }
  get inFlightFrag() {
    return {
      frag: this.fragCurrent,
      state: this.state
    };
  }
  _streamEnded(e, t) {
    if (t.live || !this.media)
      return !1;
    const s = e.end || 0, i = this.config.timelineOffset || 0;
    if (s <= i)
      return !1;
    const r = e.nextStart;
    if (r && r > i && r < t.edge || this.media.currentTime < e.start)
      return !1;
    const o = t.partList;
    if (o != null && o.length) {
      const l = o[o.length - 1];
      return z.isBuffered(this.media, l.start + l.duration / 2);
    }
    const c = t.fragments[t.fragments.length - 1].type;
    return this.fragmentTracker.isEndListAppended(c);
  }
  getLevelDetails() {
    if (this.levels && this.levelLastLoaded !== null) {
      var e;
      return (e = this.levelLastLoaded) == null ? void 0 : e.details;
    }
  }
  get timelineOffset() {
    const e = this.config.timelineOffset;
    if (e) {
      var t;
      return ((t = this.getLevelDetails()) == null ? void 0 : t.appliedTimelineOffset) || e;
    }
    return 0;
  }
  onMediaAttached(e, t) {
    const s = this.media = this.mediaBuffer = t.media;
    s.removeEventListener("seeking", this.onMediaSeeking), s.removeEventListener("ended", this.onMediaEnded), s.addEventListener("seeking", this.onMediaSeeking), s.addEventListener("ended", this.onMediaEnded);
    const i = this.config;
    this.levels && i.autoStartLoad && this.state === P.STOPPED && this.startLoad(i.startPosition);
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia, i = this.media;
    if (i !== null) {
      if (i.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), i.removeEventListener("seeking", this.onMediaSeeking), i.removeEventListener("ended", this.onMediaEnded), this.keyLoader && !s && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loopSn = void 0, s) {
        this.resetLoadingState(), this.resetTransmuxer();
        return;
      }
      this.loadingParts = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
    }
  }
  onManifestLoading() {
    this.initPTS = [], this.levels = this.levelLastLoaded = this.fragCurrent = null, this.lastCurrentTime = this.startPosition = 0, this.startFragRequested = !1;
  }
  onError(e, t) {
  }
  onManifestLoaded(e, t) {
    this.startTimeOffset = t.startTimeOffset;
  }
  onHandlerDestroying() {
    this.stopLoad(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), super.onHandlerDestroying(), this.hls = this.onMediaSeeking = this.onMediaEnded = null;
  }
  onHandlerDestroyed() {
    this.state = P.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed();
  }
  loadFragment(e, t, s) {
    this.startFragRequested = !0, this._loadFragForPlayback(e, t, s);
  }
  _loadFragForPlayback(e, t, s) {
    const i = (r) => {
      const n = r.frag;
      if (this.fragContextChanged(n)) {
        this.warn(`${n.type} sn: ${n.sn}${r.part ? " part: " + r.part.index : ""} of ${this.fragInfo(n, !1, r.part)}) was dropped during download.`), this.fragmentTracker.removeFragment(n);
        return;
      }
      n.stats.chunkCount++, this._handleFragmentLoadProgress(r);
    };
    this._doFragLoad(e, t, s, i).then((r) => {
      if (!r)
        return;
      const n = this.state, o = r.frag;
      if (this.fragContextChanged(o)) {
        (n === P.FRAG_LOADING || !this.fragCurrent && n === P.PARSING) && (this.fragmentTracker.removeFragment(o), this.state = P.IDLE);
        return;
      }
      "payload" in r && (this.log(`Loaded ${o.type} sn: ${o.sn} of ${this.playlistLabel()} ${o.level}`), this.hls.trigger(m.FRAG_LOADED, r)), this._handleFragmentLoadComplete(r);
    }).catch((r) => {
      this.state === P.STOPPED || this.state === P.ERROR || (this.warn(`Frag error: ${(r == null ? void 0 : r.message) || r}`), this.resetFragmentLoading(e));
    });
  }
  clearTrackerIfNeeded(e) {
    var t;
    const {
      fragmentTracker: s
    } = this;
    if (s.getState(e) === ge.APPENDING) {
      const r = e.type, n = this.getFwdBufferInfo(this.mediaBuffer, r), o = Math.max(e.duration, n ? n.len : this.config.maxBufferLength), c = this.backtrackFragment;
      ((c ? e.sn - c.sn : 0) === 1 || this.reduceMaxBufferLength(o, e.duration)) && s.removeFragment(e);
    } else
      ((t = this.mediaBuffer) == null ? void 0 : t.buffered.length) === 0 ? s.removeAllFragments() : s.hasParts(e.type) && (s.detectPartialFragments({
        frag: e,
        part: null,
        stats: e.stats,
        id: e.type
      }), s.getState(e) === ge.PARTIAL && s.removeFragment(e));
  }
  checkLiveUpdate(e) {
    if (e.updated && !e.live) {
      const t = e.fragments[e.fragments.length - 1];
      this.fragmentTracker.detectPartialFragments({
        frag: t,
        part: null,
        stats: t.stats,
        id: t.type
      });
    }
    e.fragments[0] || (e.deltaUpdateFailed = !0);
  }
  waitForLive(e) {
    const t = e.details;
    return (t == null ? void 0 : t.live) && t.type !== "EVENT" && (this.levelLastLoaded !== e || t.expired);
  }
  flushMainBuffer(e, t, s = null) {
    if (!(e - t))
      return;
    const i = {
      startOffset: e,
      endOffset: t,
      type: s
    };
    this.hls.trigger(m.BUFFER_FLUSHING, i);
  }
  _loadInitSegment(e, t) {
    this._doFragLoad(e, t).then((s) => {
      const i = s == null ? void 0 : s.frag;
      if (!i || this.fragContextChanged(i) || !this.levels)
        throw new Error("init load aborted");
      return s;
    }).then((s) => {
      const {
        hls: i
      } = this, {
        frag: r,
        payload: n
      } = s, o = r.decryptdata;
      if (n && n.byteLength > 0 && o != null && o.key && o.iv && It(o.method)) {
        const c = self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(n), o.key.buffer, o.iv.buffer, Bi(o.method)).catch((l) => {
          throw i.trigger(m.ERROR, {
            type: H.MEDIA_ERROR,
            details: R.FRAG_DECRYPT_ERROR,
            fatal: !1,
            error: l,
            reason: l.message,
            frag: r
          }), l;
        }).then((l) => {
          const u = self.performance.now();
          return i.trigger(m.FRAG_DECRYPTED, {
            frag: r,
            payload: l,
            stats: {
              tstart: c,
              tdecrypt: u
            }
          }), s.payload = l, this.completeInitSegmentLoad(s);
        });
      }
      return this.completeInitSegmentLoad(s);
    }).catch((s) => {
      this.state === P.STOPPED || this.state === P.ERROR || (this.warn(s), this.resetFragmentLoading(e));
    });
  }
  completeInitSegmentLoad(e) {
    const {
      levels: t
    } = this;
    if (!t)
      throw new Error("init load aborted, missing levels");
    const s = e.frag.stats;
    this.state !== P.STOPPED && (this.state = P.IDLE), e.frag.data = new Uint8Array(e.payload), s.parsing.start = s.buffering.start = self.performance.now(), s.parsing.end = s.buffering.end = self.performance.now(), this.tick();
  }
  fragContextChanged(e) {
    const {
      fragCurrent: t
    } = this;
    return !e || !t || e.sn !== t.sn || e.level !== t.level;
  }
  fragBufferedComplete(e, t) {
    const s = this.mediaBuffer ? this.mediaBuffer : this.media;
    if (this.log(`Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)} > buffer:${s ? Nl.toString(z.getBuffered(s)) : "(detached)"})`), ye(e)) {
      var i;
      if (e.type !== G.SUBTITLE) {
        const n = e.elementaryStreams;
        if (!Object.keys(n).some((o) => !!n[o])) {
          this.state = P.IDLE;
          return;
        }
      }
      const r = (i = this.levels) == null ? void 0 : i[e.level];
      r != null && r.fragmentError && (this.log(`Resetting level fragment error count of ${r.fragmentError} on frag buffered`), r.fragmentError = 0);
    }
    this.state = P.IDLE;
  }
  _handleFragmentLoadComplete(e) {
    const {
      transmuxer: t
    } = this;
    if (!t)
      return;
    const {
      frag: s,
      part: i,
      partsLoaded: r
    } = e, n = !r || r.length === 0 || r.some((c) => !c), o = new Ni(s.level, s.sn, s.stats.chunkCount + 1, 0, i ? i.index : -1, !n);
    t.flush(o);
  }
  _handleFragmentLoadProgress(e) {
  }
  _doFragLoad(e, t, s = null, i) {
    var r;
    this.fragCurrent = e;
    const n = t == null ? void 0 : t.details;
    if (!this.levels || !n)
      throw new Error(`frag load aborted, missing level${n ? "" : " detail"}s`);
    let o = null;
    e.encrypted && !((r = e.decryptdata) != null && r.key) ? (this.log(`Loading key for ${e.sn} of [${n.startSN}-${n.endSN}], ${this.playlistLabel()} ${e.level}`), this.state = P.KEY_LOADING, this.fragCurrent = e, o = this.keyLoader.load(e).then((d) => {
      if (!this.fragContextChanged(d.frag))
        return this.hls.trigger(m.KEY_LOADED, d), this.state === P.KEY_LOADING && (this.state = P.IDLE), d;
    }), this.hls.trigger(m.KEY_LOADING, {
      frag: e
    }), this.fragCurrent === null && (o = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))) : !e.encrypted && n.encryptedFragments.length && this.keyLoader.loadClear(e, n.encryptedFragments);
    const c = this.fragPrevious;
    if (ye(e) && (!c || e.sn !== c.sn)) {
      const d = this.shouldLoadParts(t.details, e.end);
      d !== this.loadingParts && (this.log(`LL-Part loading ${d ? "ON" : "OFF"} loading sn ${c == null ? void 0 : c.sn}->${e.sn}`), this.loadingParts = d);
    }
    if (s = Math.max(e.start, s || 0), this.loadingParts && ye(e)) {
      const d = n.partList;
      if (d && i) {
        s > e.end && n.fragmentHint && (e = n.fragmentHint);
        const h = this.getNextPart(d, e, s);
        if (h > -1) {
          const f = d[h];
          e = this.fragCurrent = f.fragment, this.log(`Loading ${e.type} sn: ${e.sn} part: ${f.index} (${h}/${d.length - 1}) of ${this.fragInfo(e, !1, f)}) cc: ${e.cc} [${n.startSN}-${n.endSN}], target: ${parseFloat(s.toFixed(3))}`), this.nextLoadPosition = f.start + f.duration, this.state = P.FRAG_LOADING;
          let g;
          return o ? g = o.then((y) => !y || this.fragContextChanged(y.frag) ? null : this.doFragPartsLoad(e, f, t, i)).catch((y) => this.handleFragLoadError(y)) : g = this.doFragPartsLoad(e, f, t, i).catch((y) => this.handleFragLoadError(y)), this.hls.trigger(m.FRAG_LOADING, {
            frag: e,
            part: f,
            targetBufferTime: s
          }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : g;
        } else if (!e.url || this.loadedEndOfParts(d, s))
          return Promise.resolve(null);
      }
    }
    if (ye(e) && this.loadingParts)
      this.log(`LL-Part loading OFF after next part miss @${s.toFixed(2)}`), this.loadingParts = !1;
    else if (!e.url)
      return Promise.resolve(null);
    this.log(`Loading ${e.type} sn: ${e.sn} of ${this.fragInfo(e, !1)}) cc: ${e.cc} ${n ? "[" + n.startSN + "-" + n.endSN + "]" : ""}, target: ${parseFloat(s.toFixed(3))}`), N(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = P.FRAG_LOADING;
    const l = this.config.progressive;
    let u;
    return l && o ? u = o.then((d) => !d || this.fragContextChanged(d == null ? void 0 : d.frag) ? null : this.fragmentLoader.load(e, i)).catch((d) => this.handleFragLoadError(d)) : u = Promise.all([this.fragmentLoader.load(e, l ? i : void 0), o]).then(([d]) => (!l && d && i && i(d), d)).catch((d) => this.handleFragLoadError(d)), this.hls.trigger(m.FRAG_LOADING, {
      frag: e,
      targetBufferTime: s
    }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : u;
  }
  doFragPartsLoad(e, t, s, i) {
    return new Promise((r, n) => {
      var o;
      const c = [], l = (o = s.details) == null ? void 0 : o.partList, u = (d) => {
        this.fragmentLoader.loadPart(e, d, i).then((h) => {
          c[d.index] = h;
          const f = h.part;
          this.hls.trigger(m.FRAG_LOADED, h);
          const g = $r(s.details, e.sn, d.index + 1) || ta(l, e.sn, d.index + 1);
          if (g)
            u(g);
          else
            return r({
              frag: e,
              part: f,
              partsLoaded: c
            });
        }).catch(n);
      };
      u(t);
    });
  }
  handleFragLoadError(e) {
    if ("data" in e) {
      const t = e.data;
      e.data && t.details === R.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : this.hls.trigger(m.ERROR, t);
    } else
      this.hls.trigger(m.ERROR, {
        type: H.OTHER_ERROR,
        details: R.INTERNAL_EXCEPTION,
        err: e,
        error: e,
        fatal: !0
      });
    return null;
  }
  _handleTransmuxerFlush(e) {
    const t = this.getCurrentContext(e);
    if (!t || this.state !== P.PARSING) {
      !this.fragCurrent && this.state !== P.STOPPED && this.state !== P.ERROR && (this.state = P.IDLE);
      return;
    }
    const {
      frag: s,
      part: i,
      level: r
    } = t, n = self.performance.now();
    s.stats.parsing.end = n, i && (i.stats.parsing.end = n);
    const o = this.getLevelDetails(), l = o && s.sn > o.endSN || this.shouldLoadParts(o, s.end);
    l !== this.loadingParts && (this.log(`LL-Part loading ${l ? "ON" : "OFF"} after parsing segment ending @${s.end.toFixed(2)}`), this.loadingParts = l), this.updateLevelTiming(s, i, r, e.partial);
  }
  shouldLoadParts(e, t) {
    if (this.config.lowLatencyMode) {
      if (!e)
        return this.loadingParts;
      if (e != null && e.partList) {
        var s;
        const r = e.partList[0], n = r.end + (((s = e.fragmentHint) == null ? void 0 : s.duration) || 0);
        if (t >= n) {
          var i;
          if ((this.hls.hasEnoughToStart ? ((i = this.media) == null ? void 0 : i.currentTime) || this.lastCurrentTime : this.getLoadPosition()) > r.start - r.fragment.duration)
            return !0;
        }
      }
    }
    return !1;
  }
  getCurrentContext(e) {
    const {
      levels: t,
      fragCurrent: s
    } = this, {
      level: i,
      sn: r,
      part: n
    } = e;
    if (!(t != null && t[i]))
      return this.warn(`Levels object was unset while buffering fragment ${r} of ${this.playlistLabel()} ${i}. The current chunk will not be buffered.`), null;
    const o = t[i], c = o.details, l = n > -1 ? $r(c, r, n) : null, u = l ? l.fragment : ea(c, r, s);
    return u ? (s && s !== u && (u.stats = s.stats), {
      frag: u,
      part: l,
      level: o
    }) : null;
  }
  bufferFragmentData(e, t, s, i, r) {
    var n;
    if (!e || this.state !== P.PARSING)
      return;
    const {
      data1: o,
      data2: c
    } = e;
    let l = o;
    if (o && c && (l = ke(o, c)), !((n = l) != null && n.length))
      return;
    const u = {
      type: e.type,
      frag: t,
      part: s,
      chunkMeta: i,
      parent: t.type,
      data: l
    };
    if (this.hls.trigger(m.BUFFER_APPENDING, u), e.dropped && e.independent && !s) {
      if (r)
        return;
      this.flushBufferGap(t);
    }
  }
  flushBufferGap(e) {
    const t = this.media;
    if (!t)
      return;
    if (!z.isBuffered(t, t.currentTime)) {
      this.flushMainBuffer(0, e.start);
      return;
    }
    const s = t.currentTime, i = z.bufferInfo(t, s, 0), r = e.duration, n = Math.min(this.config.maxFragLookUpTolerance * 2, r * 0.25), o = Math.max(Math.min(e.start - n, i.end - n), s + n);
    e.start - o > n && this.flushMainBuffer(o, e.start);
  }
  getFwdBufferInfo(e, t) {
    var s;
    const i = this.getLoadPosition();
    if (!N(i))
      return null;
    const n = this.lastCurrentTime > i || (s = this.media) != null && s.paused ? 0 : this.config.maxBufferHole;
    return this.getFwdBufferInfoAtPos(e, i, t, n);
  }
  getFwdBufferInfoAtPos(e, t, s, i) {
    const r = z.bufferInfo(e, t, i);
    if (r.len === 0 && r.nextStart !== void 0) {
      const n = this.fragmentTracker.getBufferedFrag(t, s);
      if (n && (r.nextStart <= n.end || n.gap)) {
        const o = Math.max(Math.min(r.nextStart, n.end) - t, i);
        return z.bufferInfo(e, t, o);
      }
    }
    return r;
  }
  getMaxBufferLength(e) {
    const {
      config: t
    } = this;
    let s;
    return e ? s = Math.max(8 * t.maxBufferSize / e, t.maxBufferLength) : s = t.maxBufferLength, Math.min(s, t.maxMaxBufferLength);
  }
  reduceMaxBufferLength(e, t) {
    const s = this.config, i = Math.max(Math.min(e - t, s.maxBufferLength), t), r = Math.max(e - t * 3, s.maxMaxBufferLength / 2, i);
    return r >= i ? (s.maxMaxBufferLength = r, this.warn(`Reduce max buffer length to ${r}s`), !0) : !1;
  }
  getAppendedFrag(e, t = G.MAIN) {
    var s;
    const i = (s = this.fragmentTracker) == null ? void 0 : s.getAppendedFrag(e, t);
    return i && "fragment" in i ? i.fragment : i;
  }
  getNextFragment(e, t) {
    const s = t.fragments, i = s.length;
    if (!i)
      return null;
    const {
      config: r
    } = this, n = s[0].start, o = r.lowLatencyMode && !!t.partList;
    let c = null;
    if (t.live) {
      const d = r.initialLiveManifestSize;
      if (i < d)
        return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${d})`), null;
      if (!t.PTSKnown && !this.startFragRequested && this.startPosition === -1 || e < n) {
        var l;
        o && !this.loadingParts && (this.log("LL-Part loading ON for initial live fragment"), this.loadingParts = !0), c = this.getInitialLiveFragment(t, s);
        const h = this.hls.startPosition, f = this.hls.liveSyncPosition, g = c ? (h !== -1 && h >= n ? h : f) || c.start : e;
        this.log(`Setting startPosition to ${g} to match start frag at live edge. mainStart: ${h} liveSyncPosition: ${f} frag.start: ${(l = c) == null ? void 0 : l.start}`), this.startPosition = this.nextLoadPosition = g;
      }
    } else
      e <= n && (c = s[0]);
    if (!c) {
      const d = this.loadingParts ? t.partEnd : t.fragmentEnd;
      c = this.getFragmentAtPosition(e, d, t);
    }
    let u = this.filterReplacedPrimary(c, t);
    if (!u && c) {
      const d = c.sn - t.startSN;
      u = this.filterReplacedPrimary(s[d + 1] || null, t);
    }
    return this.mapToInitFragWhenRequired(u);
  }
  isLoopLoading(e, t) {
    const s = this.fragmentTracker.getState(e);
    return (s === ge.OK || s === ge.PARTIAL && !!e.gap) && this.nextLoadPosition > t;
  }
  getNextFragmentLoopLoading(e, t, s, i, r) {
    let n = null;
    if (e.gap && (n = this.getNextFragment(this.nextLoadPosition, t), n && !n.gap && s.nextStart)) {
      const o = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, s.nextStart, i, 0);
      if (o !== null && s.len + o.len >= r) {
        const c = n.sn;
        return this.loopSn !== c && (this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${c}`), this.loopSn = c), null;
      }
    }
    return this.loopSn = void 0, n;
  }
  get primaryPrefetch() {
    if (Vr(this.hls.config)) {
      var e, t;
      if ((e = this.hls.interstitialsManager) == null || (t = e.playingItem) == null ? void 0 : t.event)
        return !0;
    }
    return !1;
  }
  filterReplacedPrimary(e, t) {
    if (!e)
      return e;
    if (Vr(this.hls.config) && e.type !== G.SUBTITLE) {
      const s = this.hls.interstitialsManager, i = s == null ? void 0 : s.bufferingItem;
      if (i) {
        const n = i.event;
        if (n) {
          if (n.appendInPlace || Math.abs(e.start - i.start) > 1 || i.start === 0)
            return null;
        } else if (e.end <= i.start && (t == null ? void 0 : t.live) === !1 || e.start > i.end && i.nextEvent && (i.nextEvent.appendInPlace || e.start - i.end > 1))
          return null;
      }
      const r = s == null ? void 0 : s.playerQueue;
      if (r)
        for (let n = r.length; n--; ) {
          const o = r[n].interstitial;
          if (o.appendInPlace && e.start >= o.startTime && e.end <= o.resumeTime)
            return null;
        }
    }
    return e;
  }
  mapToInitFragWhenRequired(e) {
    return e != null && e.initSegment && !(e != null && e.initSegment.data) && !this.bitrateTest ? e.initSegment : e;
  }
  getNextPart(e, t, s) {
    let i = -1, r = !1, n = !0;
    for (let o = 0, c = e.length; o < c; o++) {
      const l = e[o];
      if (n = n && !l.independent, i > -1 && s < l.start)
        break;
      const u = l.loaded;
      u ? i = -1 : (r || l.independent || n) && l.fragment === t && (i = o), r = u;
    }
    return i;
  }
  loadedEndOfParts(e, t) {
    const s = e[e.length - 1];
    return s && t > s.start && s.loaded;
  }
  /*
   This method is used find the best matching first fragment for a live playlist. This fragment is used to calculate the
   "sliding" of the playlist, which is its offset from the start of playback. After sliding we can compute the real
   start and end times for each fragment in the playlist (after which this method will not need to be called).
  */
  getInitialLiveFragment(e, t) {
    const s = this.fragPrevious;
    let i = null;
    if (s) {
      if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${s.programDateTime}`), i = Zo(t, s.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
        const r = s.sn + 1;
        if (r >= e.startSN && r <= e.endSN) {
          const n = t[r - e.startSN];
          s.cc === n.cc && (i = n, this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`));
        }
        i || (i = Hn(t, s.cc), i && this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`));
      }
    } else {
      const r = this.hls.liveSyncPosition;
      r !== null && (i = this.getFragmentAtPosition(r, this.bitrateTest ? e.fragmentEnd : e.edge, e));
    }
    return i;
  }
  /*
  This method finds the best matching fragment given the provided position.
   */
  getFragmentAtPosition(e, t, s) {
    const {
      config: i
    } = this;
    let {
      fragPrevious: r
    } = this, {
      fragments: n,
      endSN: o
    } = s;
    const {
      fragmentHint: c
    } = s, {
      maxFragLookUpTolerance: l
    } = i, u = s.partList, d = !!(this.loadingParts && u != null && u.length && c);
    d && c && !this.bitrateTest && u[u.length - 1].fragment.sn === c.sn && (n = n.concat(c), o = c.sn);
    let h;
    if (e < t) {
      var f;
      const y = e < this.lastCurrentTime || e > t - l || (f = this.media) != null && f.paused || !this.startFragRequested ? 0 : l;
      h = Et(r, n, e, y);
    } else
      h = n[n.length - 1];
    if (h) {
      const g = h.sn - s.startSN, y = this.fragmentTracker.getState(h);
      if ((y === ge.OK || y === ge.PARTIAL && h.gap) && (r = h), r && h.sn === r.sn && (!d || u[0].fragment.sn > h.sn || !s.live && !d) && r && h.level === r.level) {
        const E = n[g + 1];
        h.sn < o && this.fragmentTracker.getState(E) !== ge.OK ? h = E : h = null;
      }
    }
    return h;
  }
  alignPlaylists(e, t, s) {
    const i = e.fragments.length;
    if (!i)
      return this.warn("No fragments in live playlist"), 0;
    const r = e.fragmentStart, n = !t, o = e.alignedSliding && N(r);
    if (n || !o && !r) {
      Ml(s, e);
      const c = e.fragmentStart;
      return this.log(`Live playlist sliding: ${c.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} fragments: ${i}`), c;
    }
    return r;
  }
  waitForCdnTuneIn(e) {
    return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, e.partTarget * 3);
  }
  setStartPosition(e, t) {
    let s = this.startPosition;
    s < t && (s = -1);
    const i = this.timelineOffset;
    if (s === -1) {
      const r = this.startTimeOffset !== null, n = r ? this.startTimeOffset : e.startTimeOffset;
      n !== null && N(n) ? (s = t + n, n < 0 && (s += e.edge), s = Math.min(Math.max(t, s), t + e.totalduration), this.log(`Setting startPosition to ${s} for start time offset ${n} found in ${r ? "multivariant" : "media"} playlist`), this.startPosition = s) : e.live ? (s = this.hls.liveSyncPosition || t, this.log(`Setting startPosition to -1 to start at live edge ${s}`), this.startPosition = -1) : (this.log("setting startPosition to 0 by default"), this.startPosition = s = 0), this.lastCurrentTime = s + i;
    }
    this.nextLoadPosition = s + i;
  }
  getLoadPosition() {
    var e;
    const {
      media: t
    } = this;
    let s = 0;
    return (e = this.hls) != null && e.hasEnoughToStart && t ? s = t.currentTime : this.nextLoadPosition >= 0 && (s = this.nextLoadPosition), s;
  }
  handleFragLoadAborted(e, t) {
    this.transmuxer && e.type === this.playlistType && ye(e) && e.stats.aborted && (this.warn(`Fragment ${e.sn}${t ? " part " + t.index : ""} of ${this.playlistLabel()} ${e.level} was aborted`), this.resetFragmentLoading(e));
  }
  resetFragmentLoading(e) {
    (!this.fragCurrent || !this.fragContextChanged(e) && this.state !== P.FRAG_LOADING_WAITING_RETRY) && (this.state = P.IDLE);
  }
  onFragmentOrKeyLoadError(e, t) {
    if (t.chunkMeta && !t.frag) {
      const g = this.getCurrentContext(t.chunkMeta);
      g && (t.frag = g.frag);
    }
    const s = t.frag;
    if (!s || s.type !== e || !this.levels)
      return;
    if (this.fragContextChanged(s)) {
      var i;
      this.warn(`Frag load error must match current frag to retry ${s.url} > ${(i = this.fragCurrent) == null ? void 0 : i.url}`);
      return;
    }
    const r = t.details === R.FRAG_GAP;
    r && this.fragmentTracker.fragBuffered(s, !0);
    const n = t.errorAction, {
      action: o,
      flags: c,
      retryCount: l = 0,
      retryConfig: u
    } = n || {}, d = !!n && !!u, h = d && o === Te.RetryRequest, f = d && !n.resolved && c === Fe.MoveAllAlternatesMatchingHost;
    if (!h && f && ye(s) && !s.endList)
      this.resetFragmentErrors(e), this.treatAsGap(s), n.resolved = !0;
    else if ((h || f) && l < u.maxNumRetry) {
      this.resetStartWhenNotLoaded(this.levelLastLoaded);
      const g = Fi(u, l);
      this.warn(`Fragment ${s.sn} of ${e} ${s.level} errored with ${t.details}, retrying loading ${l + 1}/${u.maxNumRetry} in ${g}ms`), n.resolved = !0, this.retryDate = self.performance.now() + g, this.state = P.FRAG_LOADING_WAITING_RETRY;
    } else if (u && n)
      if (this.resetFragmentErrors(e), l < u.maxNumRetry)
        !r && o !== Te.RemoveAlternatePermanently && (n.resolved = !0);
      else {
        this.warn(`${t.details} reached or exceeded max retry (${l})`);
        return;
      }
    else
      o === Te.SendAlternateToPenaltyBox ? this.state = P.WAITING_LEVEL : this.state = P.ERROR;
    this.tickImmediate();
  }
  reduceLengthAndFlushBuffer(e) {
    if (this.state === P.PARSING || this.state === P.PARSED) {
      const t = e.frag, s = e.parent, i = this.getFwdBufferInfo(this.mediaBuffer, s), r = i && i.len > 0.5;
      r && this.reduceMaxBufferLength(i.len, (t == null ? void 0 : t.duration) || 10);
      const n = !r;
      return n && this.warn(`Buffer full error while media.currentTime is not buffered, flush ${s} buffer`), t && (this.fragmentTracker.removeFragment(t), this.nextLoadPosition = t.start), this.resetLoadingState(), n;
    }
    return !1;
  }
  resetFragmentErrors(e) {
    e === G.AUDIO && (this.fragCurrent = null), this.hls.hasEnoughToStart || (this.startFragRequested = !1), this.state !== P.STOPPED && (this.state = P.IDLE);
  }
  afterBufferFlushed(e, t, s) {
    if (!e)
      return;
    const i = z.getBuffered(e);
    this.fragmentTracker.detectEvictedFragments(t, i, s), this.state === P.ENDED && this.resetLoadingState();
  }
  resetLoadingState() {
    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state !== P.STOPPED && (this.state = P.IDLE);
  }
  resetStartWhenNotLoaded(e) {
    if (!this.hls.hasEnoughToStart) {
      this.startFragRequested = !1;
      const t = e ? e.details : null;
      t != null && t.live ? (this.log("resetting startPosition for live start"), this.startPosition = -1, this.setStartPosition(t, t.fragmentStart), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
    }
  }
  resetWhenMissingContext(e) {
    this.warn(`The loading context changed while buffering fragment ${e.sn} of ${this.playlistLabel()} ${e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState();
  }
  removeUnbufferedFrags(e = 0) {
    this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0);
  }
  updateLevelTiming(e, t, s, i) {
    const r = s.details;
    if (!r) {
      this.warn("level.details undefined");
      return;
    }
    if (!Object.keys(e.elementaryStreams).reduce((c, l) => {
      const u = e.elementaryStreams[l];
      if (u) {
        const d = u.endPTS - u.startPTS;
        if (d <= 0)
          return this.warn(`Could not parse fragment ${e.sn} ${l} duration reliably (${d})`), c || !1;
        const h = i ? 0 : Qn(r, e, u.startPTS, u.endPTS, u.startDTS, u.endDTS);
        return this.hls.trigger(m.LEVEL_PTS_UPDATED, {
          details: r,
          level: s,
          drift: h,
          type: l,
          frag: e,
          start: u.startPTS,
          end: u.endPTS
        }), !0;
      }
      return c;
    }, !1)) {
      var o;
      if (s.fragmentError === 0 && this.treatAsGap(e, s), ((o = this.transmuxer) == null ? void 0 : o.error) === null) {
        const c = new Error(`Found no media in fragment ${e.sn} of ${this.playlistLabel()} ${e.level} resetting transmuxer to fallback to playlist timing`);
        if (this.warn(c.message), this.hls.trigger(m.ERROR, {
          type: H.MEDIA_ERROR,
          details: R.FRAG_PARSING_ERROR,
          fatal: !1,
          error: c,
          frag: e,
          reason: `Found no media in msn ${e.sn} of ${this.playlistLabel()} "${s.url}"`
        }), !this.hls)
          return;
        this.resetTransmuxer();
      }
    }
    this.state = P.PARSED, this.log(`Parsed ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.fragInfo(e, !1, t)})`), this.hls.trigger(m.FRAG_PARSED, {
      frag: e,
      part: t
    });
  }
  playlistLabel() {
    return this.playlistType === G.MAIN ? "level" : "track";
  }
  fragInfo(e, t = !0, s) {
    var i, r;
    return `${this.playlistLabel()} ${e.level} (${s ? "part" : "frag"}:[${((i = t && !s ? e.startPTS : (s || e).start) != null ? i : NaN).toFixed(3)}-${((r = t && !s ? e.endPTS : (s || e).end) != null ? r : NaN).toFixed(3)}]${s && e.type === "main" ? "INDEPENDENT=" + (s.independent ? "YES" : "NO") : ""}`;
  }
  treatAsGap(e, t) {
    t && t.fragmentError++, e.gap = !0, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, !0);
  }
  resetTransmuxer() {
    var e;
    (e = this.transmuxer) == null || e.reset();
  }
  recoverWorkerError(e) {
    e.event === "demuxerWorker" && (this.fragmentTracker.removeAllFragments(), this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null), this.resetStartWhenNotLoaded(this.levelLastLoaded), this.resetLoadingState());
  }
  set state(e) {
    const t = this._state;
    t !== e && (this._state = e, this.log(`${t}->${e}`));
  }
  get state() {
    return this._state;
  }
}
function Vr(a) {
  return !!a.interstitialsController && a.enableInterstitialPlayback !== !1;
}
class na {
  constructor() {
    this.chunks = [], this.dataLength = 0;
  }
  push(e) {
    this.chunks.push(e), this.dataLength += e.length;
  }
  flush() {
    const {
      chunks: e,
      dataLength: t
    } = this;
    let s;
    if (e.length)
      e.length === 1 ? s = e[0] : s = Bl(e, t);
    else
      return new Uint8Array(0);
    return this.reset(), s;
  }
  reset() {
    this.chunks.length = 0, this.dataLength = 0;
  }
}
function Bl(a, e) {
  const t = new Uint8Array(e);
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    const r = a[i];
    t.set(r, s), s += r.length;
  }
  return t;
}
var qs = { exports: {} }, Kr;
function Ul() {
  return Kr || (Kr = 1, function(a) {
    var e = Object.prototype.hasOwnProperty, t = "~";
    function s() {
    }
    Object.create && (s.prototype = /* @__PURE__ */ Object.create(null), new s().__proto__ || (t = !1));
    function i(c, l, u) {
      this.fn = c, this.context = l, this.once = u || !1;
    }
    function r(c, l, u, d, h) {
      if (typeof u != "function")
        throw new TypeError("The listener must be a function");
      var f = new i(u, d || c, h), g = t ? t + l : l;
      return c._events[g] ? c._events[g].fn ? c._events[g] = [c._events[g], f] : c._events[g].push(f) : (c._events[g] = f, c._eventsCount++), c;
    }
    function n(c, l) {
      --c._eventsCount === 0 ? c._events = new s() : delete c._events[l];
    }
    function o() {
      this._events = new s(), this._eventsCount = 0;
    }
    o.prototype.eventNames = function() {
      var l = [], u, d;
      if (this._eventsCount === 0)
        return l;
      for (d in u = this._events)
        e.call(u, d) && l.push(t ? d.slice(1) : d);
      return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l;
    }, o.prototype.listeners = function(l) {
      var u = t ? t + l : l, d = this._events[u];
      if (!d)
        return [];
      if (d.fn)
        return [d.fn];
      for (var h = 0, f = d.length, g = new Array(f); h < f; h++)
        g[h] = d[h].fn;
      return g;
    }, o.prototype.listenerCount = function(l) {
      var u = t ? t + l : l, d = this._events[u];
      return d ? d.fn ? 1 : d.length : 0;
    }, o.prototype.emit = function(l, u, d, h, f, g) {
      var y = t ? t + l : l;
      if (!this._events[y])
        return !1;
      var p = this._events[y], E = arguments.length, v, T;
      if (p.fn) {
        switch (p.once && this.removeListener(l, p.fn, void 0, !0), E) {
          case 1:
            return p.fn.call(p.context), !0;
          case 2:
            return p.fn.call(p.context, u), !0;
          case 3:
            return p.fn.call(p.context, u, d), !0;
          case 4:
            return p.fn.call(p.context, u, d, h), !0;
          case 5:
            return p.fn.call(p.context, u, d, h, f), !0;
          case 6:
            return p.fn.call(p.context, u, d, h, f, g), !0;
        }
        for (T = 1, v = new Array(E - 1); T < E; T++)
          v[T - 1] = arguments[T];
        p.fn.apply(p.context, v);
      } else {
        var S = p.length, x;
        for (T = 0; T < S; T++)
          switch (p[T].once && this.removeListener(l, p[T].fn, void 0, !0), E) {
            case 1:
              p[T].fn.call(p[T].context);
              break;
            case 2:
              p[T].fn.call(p[T].context, u);
              break;
            case 3:
              p[T].fn.call(p[T].context, u, d);
              break;
            case 4:
              p[T].fn.call(p[T].context, u, d, h);
              break;
            default:
              if (!v)
                for (x = 1, v = new Array(E - 1); x < E; x++)
                  v[x - 1] = arguments[x];
              p[T].fn.apply(p[T].context, v);
          }
      }
      return !0;
    }, o.prototype.on = function(l, u, d) {
      return r(this, l, u, d, !1);
    }, o.prototype.once = function(l, u, d) {
      return r(this, l, u, d, !0);
    }, o.prototype.removeListener = function(l, u, d, h) {
      var f = t ? t + l : l;
      if (!this._events[f])
        return this;
      if (!u)
        return n(this, f), this;
      var g = this._events[f];
      if (g.fn)
        g.fn === u && (!h || g.once) && (!d || g.context === d) && n(this, f);
      else {
        for (var y = 0, p = [], E = g.length; y < E; y++)
          (g[y].fn !== u || h && !g[y].once || d && g[y].context !== d) && p.push(g[y]);
        p.length ? this._events[f] = p.length === 1 ? p[0] : p : n(this, f);
      }
      return this;
    }, o.prototype.removeAllListeners = function(l) {
      var u;
      return l ? (u = t ? t + l : l, this._events[u] && n(this, u)) : (this._events = new s(), this._eventsCount = 0), this;
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = t, o.EventEmitter = o, a.exports = o;
  }(qs)), qs.exports;
}
var $l = Ul(), Gi = /* @__PURE__ */ go($l);
const Wt = "1.6.2", Dt = {};
function Gl() {
  return typeof __HLS_WORKER_BUNDLE__ == "function";
}
function Vl() {
  const a = Dt[Wt];
  if (a)
    return a.clientCount++, a;
  const e = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
    type: "text/javascript"
  }), t = self.URL.createObjectURL(e), i = {
    worker: new self.Worker(t),
    objectURL: t,
    clientCount: 1
  };
  return Dt[Wt] = i, i;
}
function Kl(a) {
  const e = Dt[a];
  if (e)
    return e.clientCount++, e;
  const t = new self.URL(a, self.location.href).href, i = {
    worker: new self.Worker(t),
    scriptURL: t,
    clientCount: 1
  };
  return Dt[a] = i, i;
}
function Hl(a) {
  const e = Dt[a || Wt];
  if (e && e.clientCount-- === 1) {
    const {
      worker: s,
      objectURL: i
    } = e;
    delete Dt[a || Wt], i && self.URL.revokeObjectURL(i), s.terminate();
  }
}
function aa(a, e) {
  return e + 10 <= a.length && a[e] === 51 && a[e + 1] === 68 && a[e + 2] === 73 && a[e + 3] < 255 && a[e + 4] < 255 && a[e + 6] < 128 && a[e + 7] < 128 && a[e + 8] < 128 && a[e + 9] < 128;
}
function Vi(a, e) {
  return e + 10 <= a.length && a[e] === 73 && a[e + 1] === 68 && a[e + 2] === 51 && a[e + 3] < 255 && a[e + 4] < 255 && a[e + 6] < 128 && a[e + 7] < 128 && a[e + 8] < 128 && a[e + 9] < 128;
}
function Os(a, e) {
  let t = 0;
  return t = (a[e] & 127) << 21, t |= (a[e + 1] & 127) << 14, t |= (a[e + 2] & 127) << 7, t |= a[e + 3] & 127, t;
}
function Yt(a, e) {
  const t = e;
  let s = 0;
  for (; Vi(a, e); ) {
    s += 10;
    const i = Os(a, e + 6);
    s += i, aa(a, e + 10) && (s += 10), e += s;
  }
  if (s > 0)
    return a.subarray(t, t + s);
}
function Wl(a, e, t, s) {
  const i = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], r = e[t + 2], n = r >> 2 & 15;
  if (n > 12) {
    const f = new Error(`invalid ADTS sampling index:${n}`);
    a.emit(m.ERROR, m.ERROR, {
      type: H.MEDIA_ERROR,
      details: R.FRAG_PARSING_ERROR,
      fatal: !0,
      error: f,
      reason: f.message
    });
    return;
  }
  const o = (r >> 6 & 3) + 1, c = e[t + 3] >> 6 & 3 | (r & 1) << 2, l = "mp4a.40." + o, u = i[n];
  let d = n;
  (o === 5 || o === 29) && (d -= 3);
  const h = [o << 3 | (d & 14) >> 1, (d & 1) << 7 | c << 3];
  return Z.log(`manifest codec:${s}, parsed codec:${l}, channels:${c}, rate:${u} (ADTS object type:${o} sampling index:${n})`), {
    config: h,
    samplerate: u,
    channelCount: c,
    codec: l,
    parsedCodec: l,
    manifestCodec: s
  };
}
function oa(a, e) {
  return a[e] === 255 && (a[e + 1] & 246) === 240;
}
function la(a, e) {
  return a[e + 1] & 1 ? 7 : 9;
}
function Ki(a, e) {
  return (a[e + 3] & 3) << 11 | a[e + 4] << 3 | (a[e + 5] & 224) >>> 5;
}
function Yl(a, e) {
  return e + 5 < a.length;
}
function Ps(a, e) {
  return e + 1 < a.length && oa(a, e);
}
function ql(a, e) {
  return Yl(a, e) && oa(a, e) && Ki(a, e) <= a.length - e;
}
function jl(a, e) {
  if (Ps(a, e)) {
    const t = la(a, e);
    if (e + t >= a.length)
      return !1;
    const s = Ki(a, e);
    if (s <= t)
      return !1;
    const i = e + s;
    return i === a.length || Ps(a, i);
  }
  return !1;
}
function ca(a, e, t, s, i) {
  if (!a.samplerate) {
    const r = Wl(e, t, s, i);
    if (!r)
      return;
    oe(a, r);
  }
}
function ua(a) {
  return 1024 * 9e4 / a;
}
function zl(a, e) {
  const t = la(a, e);
  if (e + t <= a.length) {
    const s = Ki(a, e) - t;
    if (s > 0)
      return {
        headerLength: t,
        frameLength: s
      };
  }
}
function da(a, e, t, s, i) {
  const r = ua(a.samplerate), n = s + i * r, o = zl(e, t);
  let c;
  if (o) {
    const {
      frameLength: d,
      headerLength: h
    } = o, f = h + d, g = Math.max(0, t + f - e.length);
    g ? (c = new Uint8Array(f - h), c.set(e.subarray(t + h, e.length), 0)) : c = e.subarray(t + h, t + f);
    const y = {
      unit: c,
      pts: n
    };
    return g || a.samples.push(y), {
      sample: y,
      length: f,
      missing: g
    };
  }
  const l = e.length - t;
  return c = new Uint8Array(l), c.set(e.subarray(t, e.length), 0), {
    sample: {
      unit: c,
      pts: n
    },
    length: l,
    missing: -1
  };
}
function Xl(a, e) {
  return Vi(a, e) && Os(a, e + 6) + 10 <= a.length - e;
}
function Ql(a) {
  if (a.size < 2)
    return;
  const e = _e(a.data, !0), t = new Uint8Array(a.data.subarray(e.length + 1));
  return {
    key: a.type,
    info: e,
    data: t.buffer
  };
}
function Zl(a) {
  if (a.size < 2)
    return;
  if (a.type === "TXXX") {
    let t = 1;
    const s = _e(a.data.subarray(t), !0);
    t += s.length + 1;
    const i = _e(a.data.subarray(t));
    return {
      key: a.type,
      info: s,
      data: i
    };
  }
  const e = _e(a.data.subarray(1));
  return {
    key: a.type,
    info: "",
    data: e
  };
}
function Jl(a) {
  if (a.type === "WXXX") {
    if (a.size < 2)
      return;
    let t = 1;
    const s = _e(a.data.subarray(t), !0);
    t += s.length + 1;
    const i = _e(a.data.subarray(t));
    return {
      key: a.type,
      info: s,
      data: i
    };
  }
  const e = _e(a.data);
  return {
    key: a.type,
    info: "",
    data: e
  };
}
function ec(a) {
  return btoa(String.fromCharCode(...a));
}
function ha(a, e) {
  if (a < 0)
    return -ha(-a, e);
  const t = Math.pow(10, e);
  if (Math.abs(a * t % 1 - 0.5) < Number.EPSILON) {
    const i = Math.floor(a * t);
    return (i % 2 === 0 ? i : i + 1) / t;
  } else
    return Math.round(a * t) / t;
}
function tc(a, e) {
  const t = new URL(a), s = new URL(e);
  if (t.origin !== s.origin)
    return a;
  const i = t.pathname.split("/").slice(1), r = s.pathname.split("/").slice(1, -1);
  for (; i[0] === r[0]; )
    i.shift(), r.shift();
  for (; r.length; )
    r.shift(), i.unshift("..");
  return i.join("/");
}
function sc() {
  try {
    return crypto.randomUUID();
  } catch {
    try {
      const e = URL.createObjectURL(new Blob()), t = e.toString();
      return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1);
    } catch {
      let t = (/* @__PURE__ */ new Date()).getTime();
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (i) => {
        const r = (t + Math.random() * 16) % 16 | 0;
        return t = Math.floor(t / 16), (i == "x" ? r : r & 3 | 8).toString(16);
      });
    }
  }
}
function ic(a) {
  return a instanceof ArrayBuffer ? a : a.byteOffset == 0 && a.byteLength == a.buffer.byteLength ? a.buffer : new Uint8Array(a).buffer;
}
function js(a, e = 0, t = 1 / 0) {
  return rc(a, e, t, Uint8Array);
}
function rc(a, e, t, s) {
  const i = nc(a);
  let r = 1;
  "BYTES_PER_ELEMENT" in s && (r = s.BYTES_PER_ELEMENT);
  const n = ac(a) ? a.byteOffset : 0, o = (n + a.byteLength) / r, c = (n + e) / r, l = Math.floor(Math.max(0, Math.min(c, o))), u = Math.floor(Math.min(l + Math.max(t, 0), o));
  return new s(i, l, u - l);
}
function nc(a) {
  return a instanceof ArrayBuffer ? a : a.buffer;
}
function ac(a) {
  return a && a.buffer instanceof ArrayBuffer && a.byteLength !== void 0 && a.byteOffset !== void 0;
}
function oc(a) {
  const e = {
    key: a.type,
    description: "",
    data: "",
    mimeType: null,
    pictureType: null
  }, t = 3;
  if (a.size < 2)
    return;
  if (a.data[0] !== t) {
    console.log("Ignore frame with unrecognized character encoding");
    return;
  }
  const s = a.data.subarray(1).indexOf(0);
  if (s === -1)
    return;
  const i = _e(js(a.data, 1, s)), r = a.data[2 + s], n = a.data.subarray(3 + s).indexOf(0);
  if (n === -1)
    return;
  const o = _e(js(a.data, 3 + s, n));
  let c;
  return i === "-->" ? c = _e(js(a.data, 4 + s + n)) : c = ic(a.data.subarray(4 + s + n)), e.mimeType = i, e.pictureType = r, e.description = o, e.data = c, e;
}
function lc(a) {
  return a.type === "PRIV" ? Ql(a) : a.type[0] === "W" ? Jl(a) : a.type === "APIC" ? oc(a) : Zl(a);
}
function cc(a) {
  const e = String.fromCharCode(a[0], a[1], a[2], a[3]), t = Os(a, 4), s = 10;
  return {
    type: e,
    size: t,
    data: a.subarray(s, s + t)
  };
}
const ns = 10, uc = 10;
function fa(a) {
  let e = 0;
  const t = [];
  for (; Vi(a, e); ) {
    const s = Os(a, e + 6);
    a[e + 5] >> 6 & 1 && (e += ns), e += ns;
    const i = e + s;
    for (; e + uc < i; ) {
      const r = cc(a.subarray(e)), n = lc(r);
      n && t.push(n), e += r.size + ns;
    }
    aa(a, e) && (e += ns);
  }
  return t;
}
function ga(a) {
  return a && a.key === "PRIV" && a.info === "com.apple.streaming.transportStreamTimestamp";
}
function dc(a) {
  if (a.data.byteLength === 8) {
    const e = new Uint8Array(a.data), t = e[3] & 1;
    let s = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
    return s /= 45, t && (s += 4772185884e-2), Math.round(s);
  }
}
function Hi(a) {
  const e = fa(a);
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    if (ga(s))
      return dc(s);
  }
}
let Ie = /* @__PURE__ */ function(a) {
  return a.audioId3 = "org.id3", a.dateRange = "com.apple.quicktime.HLS", a.emsg = "https://aomedia.org/emsg/ID3", a.misbklv = "urn:misb:KLV:bin:1910.1", a;
}({});
function $e(a = "", e = 9e4) {
  return {
    type: a,
    id: -1,
    pid: -1,
    inputTimeScale: e,
    sequenceNumber: -1,
    samples: [],
    dropped: 0
  };
}
class Wi {
  constructor() {
    this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.basePTS = null, this.initPTS = null, this.lastPTS = null;
  }
  resetInitSegment(e, t, s, i) {
    this._id3Track = {
      type: "id3",
      id: 3,
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0
    };
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.resetContiguity();
  }
  resetContiguity() {
    this.basePTS = null, this.lastPTS = null, this.frameIndex = 0;
  }
  canParse(e, t) {
    return !1;
  }
  appendFrame(e, t, s) {
  }
  // feed incoming data to the front of the parsing pipeline
  demux(e, t) {
    this.cachedData && (e = ke(this.cachedData, e), this.cachedData = null);
    let s = Yt(e, 0), i = s ? s.length : 0, r;
    const n = this._audioTrack, o = this._id3Track, c = s ? Hi(s) : void 0, l = e.length;
    for ((this.basePTS === null || this.frameIndex === 0 && N(c)) && (this.basePTS = hc(c, t, this.initPTS), this.lastPTS = this.basePTS), this.lastPTS === null && (this.lastPTS = this.basePTS), s && s.length > 0 && o.samples.push({
      pts: this.lastPTS,
      dts: this.lastPTS,
      data: s,
      type: Ie.audioId3,
      duration: Number.POSITIVE_INFINITY
    }); i < l; ) {
      if (this.canParse(e, i)) {
        const u = this.appendFrame(n, e, i);
        u ? (this.frameIndex++, this.lastPTS = u.sample.pts, i += u.length, r = i) : i = l;
      } else
        Xl(e, i) ? (s = Yt(e, i), o.samples.push({
          pts: this.lastPTS,
          dts: this.lastPTS,
          data: s,
          type: Ie.audioId3,
          duration: Number.POSITIVE_INFINITY
        }), i += s.length, r = i) : i++;
      if (i === l && r !== l) {
        const u = e.slice(r);
        this.cachedData ? this.cachedData = ke(this.cachedData, u) : this.cachedData = u;
      }
    }
    return {
      audioTrack: n,
      videoTrack: $e(),
      id3Track: o,
      textTrack: $e()
    };
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`));
  }
  flush(e) {
    const t = this.cachedData;
    return t && (this.cachedData = null, this.demux(t, 0)), {
      audioTrack: this._audioTrack,
      videoTrack: $e(),
      id3Track: this._id3Track,
      textTrack: $e()
    };
  }
  destroy() {
    this.cachedData = null, this._audioTrack = this._id3Track = void 0;
  }
}
const hc = (a, e, t) => {
  if (N(a))
    return a * 90;
  const s = t ? t.baseTime * 9e4 / t.timescale : 0;
  return e * 9e4 + s;
};
let as = null;
const fc = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], gc = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], mc = [
  // MPEG 2.5
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // Reserved
  [
    0,
    // Reserved
    0,
    // Layer3
    0,
    // Layer2
    0
    // Layer1
  ],
  // MPEG 2
  [
    0,
    // Reserved
    72,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ],
  // MPEG 1
  [
    0,
    // Reserved
    144,
    // Layer3
    144,
    // Layer2
    12
    // Layer1
  ]
], pc = [
  0,
  // Reserved
  1,
  // Layer3
  1,
  // Layer2
  4
  // Layer1
];
function ma(a, e, t, s, i) {
  if (t + 24 > e.length)
    return;
  const r = pa(e, t);
  if (r && t + r.frameLength <= e.length) {
    const n = r.samplesPerFrame * 9e4 / r.sampleRate, o = s + i * n, c = {
      unit: e.subarray(t, t + r.frameLength),
      pts: o,
      dts: o
    };
    return a.config = [], a.channelCount = r.channelCount, a.samplerate = r.sampleRate, a.samples.push(c), {
      sample: c,
      length: r.frameLength,
      missing: 0
    };
  }
}
function pa(a, e) {
  const t = a[e + 1] >> 3 & 3, s = a[e + 1] >> 1 & 3, i = a[e + 2] >> 4 & 15, r = a[e + 2] >> 2 & 3;
  if (t !== 1 && i !== 0 && i !== 15 && r !== 3) {
    const n = a[e + 2] >> 1 & 1, o = a[e + 3] >> 6, c = t === 3 ? 3 - s : s === 3 ? 3 : 4, l = fc[c * 14 + i - 1] * 1e3, d = gc[(t === 3 ? 0 : t === 2 ? 1 : 2) * 3 + r], h = o === 3 ? 1 : 2, f = mc[t][s], g = pc[s], y = f * 8 * g, p = Math.floor(f * l / d + n) * g;
    if (as === null) {
      const T = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      as = T ? parseInt(T[1]) : 0;
    }
    return !!as && as <= 87 && s === 2 && l >= 224e3 && o === 0 && (a[e + 3] = a[e + 3] | 128), {
      sampleRate: d,
      channelCount: h,
      frameLength: p,
      samplesPerFrame: y
    };
  }
}
function Yi(a, e) {
  return a[e] === 255 && (a[e + 1] & 224) === 224 && (a[e + 1] & 6) !== 0;
}
function ya(a, e) {
  return e + 1 < a.length && Yi(a, e);
}
function yc(a, e) {
  return Yi(a, e) && 4 <= a.length - e;
}
function Ea(a, e) {
  if (e + 1 < a.length && Yi(a, e)) {
    const s = pa(a, e);
    let i = 4;
    s != null && s.frameLength && (i = s.frameLength);
    const r = e + i;
    return r === a.length || ya(a, r);
  }
  return !1;
}
class Ec extends Wi {
  constructor(e, t) {
    super(), this.observer = void 0, this.config = void 0, this.observer = e, this.config = t;
  }
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/adts",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "aac",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  // Source for probe info - https://wiki.multimedia.cx/index.php?title=ADTS
  static probe(e, t) {
    if (!e)
      return !1;
    const s = Yt(e, 0);
    let i = (s == null ? void 0 : s.length) || 0;
    if (Ea(e, i))
      return !1;
    for (let r = e.length; i < r; i++)
      if (jl(e, i))
        return t.log("ADTS sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return ql(e, t);
  }
  appendFrame(e, t, s) {
    ca(e, this.observer, t, s, e.manifestCodec);
    const i = da(e, t, s, this.basePTS, this.frameIndex);
    if (i && i.missing === 0)
      return i;
  }
}
const Ta = (a, e) => {
  let t = 0, s = 5;
  e += s;
  const i = new Uint32Array(1), r = new Uint32Array(1), n = new Uint8Array(1);
  for (; s > 0; ) {
    n[0] = a[e];
    const o = Math.min(s, 8), c = 8 - o;
    r[0] = 4278190080 >>> 24 + c << c, i[0] = (n[0] & r[0]) >> c, t = t ? t << o | i[0] : i[0], e += 1, s -= o;
  }
  return t;
};
class Tc extends Wi {
  constructor(e) {
    super(), this.observer = void 0, this.observer = e;
  }
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/ac-3",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "ac3",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  canParse(e, t) {
    return t + 64 < e.length;
  }
  appendFrame(e, t, s) {
    const i = va(e, t, s, this.basePTS, this.frameIndex);
    if (i !== -1)
      return {
        sample: e.samples[e.samples.length - 1],
        length: i,
        missing: 0
      };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = Yt(e, 0);
    if (!t)
      return !1;
    const s = t.length;
    return e[s] === 11 && e[s + 1] === 119 && Hi(t) !== void 0 && // check the bsid to confirm ac-3
    Ta(e, s) < 16;
  }
}
function va(a, e, t, s, i) {
  if (t + 8 > e.length || e[t] !== 11 || e[t + 1] !== 119)
    return -1;
  const r = e[t + 4] >> 6;
  if (r >= 3)
    return -1;
  const o = [48e3, 44100, 32e3][r], c = e[t + 4] & 63, u = [64, 69, 96, 64, 70, 96, 80, 87, 120, 80, 88, 120, 96, 104, 144, 96, 105, 144, 112, 121, 168, 112, 122, 168, 128, 139, 192, 128, 140, 192, 160, 174, 240, 160, 175, 240, 192, 208, 288, 192, 209, 288, 224, 243, 336, 224, 244, 336, 256, 278, 384, 256, 279, 384, 320, 348, 480, 320, 349, 480, 384, 417, 576, 384, 418, 576, 448, 487, 672, 448, 488, 672, 512, 557, 768, 512, 558, 768, 640, 696, 960, 640, 697, 960, 768, 835, 1152, 768, 836, 1152, 896, 975, 1344, 896, 976, 1344, 1024, 1114, 1536, 1024, 1115, 1536, 1152, 1253, 1728, 1152, 1254, 1728, 1280, 1393, 1920, 1280, 1394, 1920][c * 3 + r] * 2;
  if (t + u > e.length)
    return -1;
  const d = e[t + 6] >> 5;
  let h = 0;
  d === 2 ? h += 2 : (d & 1 && d !== 1 && (h += 2), d & 4 && (h += 2));
  const f = (e[t + 6] << 8 | e[t + 7]) >> 12 - h & 1, y = [2, 1, 2, 3, 3, 4, 4, 5][d] + f, p = e[t + 5] >> 3, E = e[t + 5] & 7, v = new Uint8Array([r << 6 | p << 1 | E >> 2, (E & 3) << 6 | d << 3 | f << 2 | c >> 4, c << 4 & 224]), T = 1536 / o * 9e4, S = s + i * T, x = e.subarray(t, t + u);
  return a.config = v, a.channelCount = y, a.samplerate = o, a.samples.push({
    unit: x,
    pts: S
  }), u;
}
class vc extends Wi {
  resetInitSegment(e, t, s, i) {
    super.resetInitSegment(e, t, s, i), this._audioTrack = {
      container: "audio/mpeg",
      type: "audio",
      id: 2,
      pid: -1,
      sequenceNumber: 0,
      segmentCodec: "mp3",
      samples: [],
      manifestCodec: t,
      duration: i,
      inputTimeScale: 9e4,
      dropped: 0
    };
  }
  static probe(e) {
    if (!e)
      return !1;
    const t = Yt(e, 0);
    let s = (t == null ? void 0 : t.length) || 0;
    if (t && e[s] === 11 && e[s + 1] === 119 && Hi(t) !== void 0 && // check the bsid to confirm ac-3 or ec-3 (not mp3)
    Ta(e, s) <= 16)
      return !1;
    for (let i = e.length; s < i; s++)
      if (Ea(e, s))
        return Z.log("MPEG Audio sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return yc(e, t);
  }
  appendFrame(e, t, s) {
    if (this.basePTS !== null)
      return ma(e, t, s, this.basePTS, this.frameIndex);
  }
}
const Sc = /\/emsg[-/]ID3/i;
class xc {
  constructor(e, t) {
    this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t;
  }
  resetTimeStamp() {
  }
  resetInitSegment(e, t, s, i) {
    const r = this.videoTrack = $e("video", 1), n = this.audioTrack = $e("audio", 1), o = this.txtTrack = $e("text", 1);
    if (this.id3Track = $e("id3", 1), this.timeOffset = 0, !(e != null && e.byteLength))
      return;
    const c = wn(e);
    if (c.video) {
      const {
        id: l,
        timescale: u,
        codec: d,
        supplemental: h
      } = c.video;
      r.id = l, r.timescale = o.timescale = u, r.codec = d, r.supplemental = h;
    }
    if (c.audio) {
      const {
        id: l,
        timescale: u,
        codec: d
      } = c.audio;
      n.id = l, n.timescale = u, n.codec = d;
    }
    o.id = Cn.text, r.sampleDuration = 0, r.duration = n.duration = i;
  }
  resetContiguity() {
    this.remainderData = null;
  }
  static probe(e) {
    return To(e);
  }
  demux(e, t) {
    this.timeOffset = t;
    let s = e;
    const i = this.videoTrack, r = this.txtTrack;
    if (this.config.progressive) {
      this.remainderData && (s = ke(this.remainderData, e));
      const o = bo(s);
      this.remainderData = o.remainder, i.samples = o.valid || new Uint8Array();
    } else
      i.samples = s;
    const n = this.extractID3Track(i, t);
    return r.samples = ur(t, i), {
      videoTrack: i,
      audioTrack: this.audioTrack,
      id3Track: n,
      textTrack: this.txtTrack
    };
  }
  flush() {
    const e = this.timeOffset, t = this.videoTrack, s = this.txtTrack;
    t.samples = this.remainderData || new Uint8Array(), this.remainderData = null;
    const i = this.extractID3Track(t, this.timeOffset);
    return s.samples = ur(e, t), {
      videoTrack: t,
      audioTrack: $e(),
      id3Track: i,
      textTrack: $e()
    };
  }
  extractID3Track(e, t) {
    const s = this.id3Track;
    if (e.samples.length) {
      const i = j(e.samples, ["emsg"]);
      i && i.forEach((r) => {
        const n = Do(r);
        if (Sc.test(n.schemeIdUri)) {
          const o = Hr(n, t);
          let c = n.eventDuration === 4294967295 ? Number.POSITIVE_INFINITY : n.eventDuration / n.timeScale;
          c <= 1e-3 && (c = Number.POSITIVE_INFINITY);
          const l = n.payload;
          s.samples.push({
            data: l,
            len: l.byteLength,
            dts: o,
            pts: o,
            type: Ie.emsg,
            duration: c
          });
        } else if (this.config.enableEmsgKLVMetadata && n.schemeIdUri.startsWith("urn:misb:KLV:bin:1910.1")) {
          const o = Hr(n, t);
          s.samples.push({
            data: n.payload,
            len: n.payload.byteLength,
            dts: o,
            pts: o,
            type: Ie.misbklv,
            duration: Number.POSITIVE_INFINITY
          });
        }
      });
    }
    return s;
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
  }
  destroy() {
    this.config = null, this.remainderData = null, this.videoTrack = this.audioTrack = this.id3Track = this.txtTrack = void 0;
  }
}
function Hr(a, e) {
  return N(a.presentationTime) ? a.presentationTime / a.timeScale : e + a.presentationTimeDelta / a.timeScale;
}
class Ac {
  constructor(e, t, s) {
    this.keyData = void 0, this.decrypter = void 0, this.keyData = s, this.decrypter = new Mi(t, {
      removePKCS7Padding: !1
    });
  }
  decryptBuffer(e) {
    return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, at.cbc);
  }
  // AAC - encrypt all full 16 bytes blocks starting from offset 16
  decryptAacSample(e, t, s) {
    const i = e[t].unit;
    if (i.length <= 16)
      return;
    const r = i.subarray(16, i.length - i.length % 16), n = r.buffer.slice(r.byteOffset, r.byteOffset + r.length);
    this.decryptBuffer(n).then((o) => {
      const c = new Uint8Array(o);
      i.set(c, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, s);
    });
  }
  decryptAacSamples(e, t, s) {
    for (; ; t++) {
      if (t >= e.length) {
        s();
        return;
      }
      if (!(e[t].unit.length < 32) && (this.decryptAacSample(e, t, s), !this.decrypter.isSync()))
        return;
    }
  }
  // AVC - encrypt one 16 bytes block out of ten, starting from offset 32
  getAvcEncryptedData(e) {
    const t = Math.floor((e.length - 48) / 160) * 16 + 16, s = new Int8Array(t);
    let i = 0;
    for (let r = 32; r < e.length - 16; r += 160, i += 16)
      s.set(e.subarray(r, r + 16), i);
    return s;
  }
  getAvcDecryptedUnit(e, t) {
    const s = new Uint8Array(t);
    let i = 0;
    for (let r = 32; r < e.length - 16; r += 160, i += 16)
      e.set(s.subarray(i, i + 16), r);
    return e;
  }
  decryptAvcSample(e, t, s, i, r) {
    const n = Fn(r.data), o = this.getAvcEncryptedData(n);
    this.decryptBuffer(o.buffer).then((c) => {
      r.data = this.getAvcDecryptedUnit(n, c), this.decrypter.isSync() || this.decryptAvcSamples(e, t, s + 1, i);
    });
  }
  decryptAvcSamples(e, t, s, i) {
    if (e instanceof Uint8Array)
      throw new Error("Cannot decrypt samples of type Uint8Array");
    for (; ; t++, s = 0) {
      if (t >= e.length) {
        i();
        return;
      }
      const r = e[t].units;
      for (; !(s >= r.length); s++) {
        const n = r[s];
        if (!(n.data.length <= 48 || n.type !== 1 && n.type !== 5) && (this.decryptAvcSample(e, t, s, i, n), !this.decrypter.isSync()))
          return;
      }
    }
  }
}
class Sa {
  constructor() {
    this.VideoSample = null;
  }
  createVideoSample(e, t, s) {
    return {
      key: e,
      frame: !1,
      pts: t,
      dts: s,
      units: [],
      length: 0
    };
  }
  getLastNalUnit(e) {
    var t;
    let s = this.VideoSample, i;
    if ((!s || s.units.length === 0) && (s = e[e.length - 1]), (t = s) != null && t.units) {
      const r = s.units;
      i = r[r.length - 1];
    }
    return i;
  }
  pushAccessUnit(e, t) {
    if (e.units.length && e.frame) {
      if (e.pts === void 0) {
        const s = t.samples, i = s.length;
        if (i) {
          const r = s[i - 1];
          e.pts = r.pts, e.dts = r.dts;
        } else {
          t.dropped++;
          return;
        }
      }
      t.samples.push(e);
    }
  }
  parseNALu(e, t, s) {
    const i = t.byteLength;
    let r = e.naluState || 0;
    const n = r, o = [];
    let c = 0, l, u, d, h = -1, f = 0;
    for (r === -1 && (h = 0, f = this.getNALuType(t, 0), r = 0, c = 1); c < i; ) {
      if (l = t[c++], !r) {
        r = l ? 0 : 1;
        continue;
      }
      if (r === 1) {
        r = l ? 0 : 2;
        continue;
      }
      if (!l)
        r = 3;
      else if (l === 1) {
        if (u = c - r - 1, h >= 0) {
          const g = {
            data: t.subarray(h, u),
            type: f
          };
          o.push(g);
        } else {
          const g = this.getLastNalUnit(e.samples);
          g && (n && c <= 4 - n && g.state && (g.data = g.data.subarray(0, g.data.byteLength - n)), u > 0 && (g.data = ke(g.data, t.subarray(0, u)), g.state = 0));
        }
        c < i ? (d = this.getNALuType(t, c), h = c, f = d, r = 0) : r = -1;
      } else
        r = 0;
    }
    if (h >= 0 && r >= 0) {
      const g = {
        data: t.subarray(h, i),
        type: f,
        state: r
      };
      o.push(g);
    }
    if (o.length === 0) {
      const g = this.getLastNalUnit(e.samples);
      g && (g.data = ke(g.data, t));
    }
    return e.naluState = r, o;
  }
}
class Bt {
  constructor(e) {
    this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0;
  }
  // ():void
  loadWord() {
    const e = this.data, t = this.bytesAvailable, s = e.byteLength - t, i = new Uint8Array(4), r = Math.min(4, t);
    if (r === 0)
      throw new Error("no bytes available");
    i.set(e.subarray(s, s + r)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = r * 8, this.bytesAvailable -= r;
  }
  // (count:int):void
  skipBits(e) {
    let t;
    e = Math.min(e, this.bytesAvailable * 8 + this.bitsAvailable), this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, t = e >> 3, e -= t << 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e);
  }
  // (size:int):uint
  readBits(e) {
    let t = Math.min(this.bitsAvailable, e);
    const s = this.word >>> 32 - t;
    if (e > 32 && Z.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0)
      this.word <<= t;
    else if (this.bytesAvailable > 0)
      this.loadWord();
    else
      throw new Error("no bits available");
    return t = e - t, t > 0 && this.bitsAvailable ? s << t | this.readBits(t) : s;
  }
  // ():uint
  skipLZ() {
    let e;
    for (e = 0; e < this.bitsAvailable; ++e)
      if (this.word & 2147483648 >>> e)
        return this.word <<= e, this.bitsAvailable -= e, e;
    return this.loadWord(), e + this.skipLZ();
  }
  // ():void
  skipUEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():void
  skipEG() {
    this.skipBits(1 + this.skipLZ());
  }
  // ():uint
  readUEG() {
    const e = this.skipLZ();
    return this.readBits(e + 1) - 1;
  }
  // ():int
  readEG() {
    const e = this.readUEG();
    return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1);
  }
  // Some convenience functions
  // :Boolean
  readBoolean() {
    return this.readBits(1) === 1;
  }
  // ():int
  readUByte() {
    return this.readBits(8);
  }
  // ():int
  readUShort() {
    return this.readBits(16);
  }
  // ():int
  readUInt() {
    return this.readBits(32);
  }
}
class Wr extends Sa {
  parsePES(e, t, s, i) {
    const r = this.parseNALu(e, s.data, i);
    let n = this.VideoSample, o, c = !1;
    s.data = null, n && r.length && !e.audFound && (this.pushAccessUnit(n, e), n = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), r.forEach((l) => {
      var u, d;
      switch (l.type) {
        case 1: {
          let y = !1;
          o = !0;
          const p = l.data;
          if (c && p.length > 4) {
            const E = this.readSliceType(p);
            (E === 2 || E === 4 || E === 7 || E === 9) && (y = !0);
          }
          if (y) {
            var h;
            (h = n) != null && h.frame && !n.key && (this.pushAccessUnit(n, e), n = this.VideoSample = null);
          }
          n || (n = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), n.frame = !0, n.key = y;
          break;
        }
        case 5:
          o = !0, (u = n) != null && u.frame && !n.key && (this.pushAccessUnit(n, e), n = this.VideoSample = null), n || (n = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), n.key = !0, n.frame = !0;
          break;
        case 6: {
          o = !0, wi(l.data, 1, s.pts, t.samples);
          break;
        }
        case 7: {
          var f, g;
          o = !0, c = !0;
          const y = l.data, p = this.readSPS(y);
          if (!e.sps || e.width !== p.width || e.height !== p.height || ((f = e.pixelRatio) == null ? void 0 : f[0]) !== p.pixelRatio[0] || ((g = e.pixelRatio) == null ? void 0 : g[1]) !== p.pixelRatio[1]) {
            e.width = p.width, e.height = p.height, e.pixelRatio = p.pixelRatio, e.sps = [y];
            const E = y.subarray(1, 4);
            let v = "avc1.";
            for (let T = 0; T < 3; T++) {
              let S = E[T].toString(16);
              S.length < 2 && (S = "0" + S), v += S;
            }
            e.codec = v;
          }
          break;
        }
        case 8:
          o = !0, e.pps = [l.data];
          break;
        case 9:
          o = !0, e.audFound = !0, (d = n) != null && d.frame && (this.pushAccessUnit(n, e), n = null), n || (n = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts));
          break;
        case 12:
          o = !0;
          break;
        default:
          o = !1;
          break;
      }
      n && o && n.units.push(l);
    }), i && n && (this.pushAccessUnit(n, e), this.VideoSample = null);
  }
  getNALuType(e, t) {
    return e[t] & 31;
  }
  readSliceType(e) {
    const t = new Bt(e);
    return t.readUByte(), t.readUEG(), t.readUEG();
  }
  /**
   * The scaling list is optionally transmitted as part of a sequence parameter
   * set and is not relevant to transmuxing.
   * @param count the number of entries in this scaling list
   * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
   */
  skipScalingList(e, t) {
    let s = 8, i = 8, r;
    for (let n = 0; n < e; n++)
      i !== 0 && (r = t.readEG(), i = (s + r + 256) % 256), s = i === 0 ? s : i;
  }
  /**
   * Read a sequence parameter set and return some interesting video
   * properties. A sequence parameter set is the H264 metadata that
   * describes the properties of upcoming video frames.
   * @returns an object with configuration parsed from the
   * sequence parameter set, including the dimensions of the
   * associated video frames.
   */
  readSPS(e) {
    const t = new Bt(e);
    let s = 0, i = 0, r = 0, n = 0, o, c, l;
    const u = t.readUByte.bind(t), d = t.readBits.bind(t), h = t.readUEG.bind(t), f = t.readBoolean.bind(t), g = t.skipBits.bind(t), y = t.skipEG.bind(t), p = t.skipUEG.bind(t), E = this.skipScalingList.bind(this);
    u();
    const v = u();
    if (d(5), g(3), u(), p(), v === 100 || v === 110 || v === 122 || v === 244 || v === 44 || v === 83 || v === 86 || v === 118 || v === 128) {
      const b = h();
      if (b === 3 && g(1), p(), p(), g(1), f())
        for (c = b !== 3 ? 8 : 12, l = 0; l < c; l++)
          f() && (l < 6 ? E(16, t) : E(64, t));
    }
    p();
    const T = h();
    if (T === 0)
      h();
    else if (T === 1)
      for (g(1), y(), y(), o = h(), l = 0; l < o; l++)
        y();
    p(), g(1);
    const S = h(), x = h(), _ = d(1);
    _ === 0 && g(1), g(1), f() && (s = h(), i = h(), r = h(), n = h());
    let A = [1, 1];
    if (f() && f())
      switch (u()) {
        case 1:
          A = [1, 1];
          break;
        case 2:
          A = [12, 11];
          break;
        case 3:
          A = [10, 11];
          break;
        case 4:
          A = [16, 11];
          break;
        case 5:
          A = [40, 33];
          break;
        case 6:
          A = [24, 11];
          break;
        case 7:
          A = [20, 11];
          break;
        case 8:
          A = [32, 11];
          break;
        case 9:
          A = [80, 33];
          break;
        case 10:
          A = [18, 11];
          break;
        case 11:
          A = [15, 11];
          break;
        case 12:
          A = [64, 33];
          break;
        case 13:
          A = [160, 99];
          break;
        case 14:
          A = [4, 3];
          break;
        case 15:
          A = [3, 2];
          break;
        case 16:
          A = [2, 1];
          break;
        case 255: {
          A = [u() << 8 | u(), u() << 8 | u()];
          break;
        }
      }
    return {
      width: Math.ceil((S + 1) * 16 - s * 2 - i * 2),
      height: (2 - _) * (x + 1) * 16 - (_ ? 2 : 4) * (r + n),
      pixelRatio: A
    };
  }
}
class Yr extends Sa {
  constructor(...e) {
    super(...e), this.initVPS = null;
  }
  parsePES(e, t, s, i) {
    const r = this.parseNALu(e, s.data, i);
    let n = this.VideoSample, o, c = !1;
    s.data = null, n && r.length && !e.audFound && (this.pushAccessUnit(n, e), n = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), r.forEach((l) => {
      var u, d;
      switch (l.type) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
          n || (n = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts)), n.frame = !0, o = !0;
          break;
        case 16:
        case 17:
        case 18:
        case 21:
          if (o = !0, c) {
            var h;
            (h = n) != null && h.frame && !n.key && (this.pushAccessUnit(n, e), n = this.VideoSample = null);
          }
          n || (n = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), n.key = !0, n.frame = !0;
          break;
        case 19:
        case 20:
          o = !0, (u = n) != null && u.frame && !n.key && (this.pushAccessUnit(n, e), n = this.VideoSample = null), n || (n = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), n.key = !0, n.frame = !0;
          break;
        case 39:
          o = !0, wi(
            l.data,
            2,
            // NALu header size
            s.pts,
            t.samples
          );
          break;
        case 32:
          o = !0, e.vps || (typeof e.params != "object" && (e.params = {}), e.params = oe(e.params, this.readVPS(l.data)), this.initVPS = l.data), e.vps = [l.data];
          break;
        case 33:
          if (o = !0, c = !0, e.vps !== void 0 && e.vps[0] !== this.initVPS && e.sps !== void 0 && !this.matchSPS(e.sps[0], l.data) && (this.initVPS = e.vps[0], e.sps = e.pps = void 0), !e.sps) {
            const f = this.readSPS(l.data);
            e.width = f.width, e.height = f.height, e.pixelRatio = f.pixelRatio, e.codec = f.codecString, e.sps = [], typeof e.params != "object" && (e.params = {});
            for (const g in f.params)
              e.params[g] = f.params[g];
          }
          this.pushParameterSet(e.sps, l.data, e.vps), n || (n = this.VideoSample = this.createVideoSample(!0, s.pts, s.dts)), n.key = !0;
          break;
        case 34:
          if (o = !0, typeof e.params == "object") {
            if (!e.pps) {
              e.pps = [];
              const f = this.readPPS(l.data);
              for (const g in f)
                e.params[g] = f[g];
            }
            this.pushParameterSet(e.pps, l.data, e.vps);
          }
          break;
        case 35:
          o = !0, e.audFound = !0, (d = n) != null && d.frame && (this.pushAccessUnit(n, e), n = null), n || (n = this.VideoSample = this.createVideoSample(!1, s.pts, s.dts));
          break;
        default:
          o = !1;
          break;
      }
      n && o && n.units.push(l);
    }), i && n && (this.pushAccessUnit(n, e), this.VideoSample = null);
  }
  pushParameterSet(e, t, s) {
    (s && s[0] === this.initVPS || !s && !e.length) && e.push(t);
  }
  getNALuType(e, t) {
    return (e[t] & 126) >>> 1;
  }
  ebsp2rbsp(e) {
    const t = new Uint8Array(e.byteLength);
    let s = 0;
    for (let i = 0; i < e.byteLength; i++)
      i >= 2 && e[i] === 3 && e[i - 1] === 0 && e[i - 2] === 0 || (t[s] = e[i], s++);
    return new Uint8Array(t.buffer, 0, s);
  }
  pushAccessUnit(e, t) {
    super.pushAccessUnit(e, t), this.initVPS && (this.initVPS = null);
  }
  readVPS(e) {
    const t = new Bt(e);
    t.readUByte(), t.readUByte(), t.readBits(4), t.skipBits(2), t.readBits(6);
    const s = t.readBits(3), i = t.readBoolean();
    return {
      numTemporalLayers: s + 1,
      temporalIdNested: i
    };
  }
  readSPS(e) {
    const t = new Bt(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.readBits(4);
    const s = t.readBits(3);
    t.readBoolean();
    const i = t.readBits(2), r = t.readBoolean(), n = t.readBits(5), o = t.readUByte(), c = t.readUByte(), l = t.readUByte(), u = t.readUByte(), d = t.readUByte(), h = t.readUByte(), f = t.readUByte(), g = t.readUByte(), y = t.readUByte(), p = t.readUByte(), E = t.readUByte(), v = [], T = [];
    for (let ee = 0; ee < s; ee++)
      v.push(t.readBoolean()), T.push(t.readBoolean());
    if (s > 0)
      for (let ee = s; ee < 8; ee++)
        t.readBits(2);
    for (let ee = 0; ee < s; ee++)
      v[ee] && (t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte(), t.readUByte()), T[ee] && t.readUByte();
    t.readUEG();
    const S = t.readUEG();
    S == 3 && t.skipBits(1);
    const x = t.readUEG(), _ = t.readUEG(), A = t.readBoolean();
    let b = 0, C = 0, L = 0, w = 0;
    A && (b += t.readUEG(), C += t.readUEG(), L += t.readUEG(), w += t.readUEG());
    const F = t.readUEG(), X = t.readUEG(), W = t.readUEG(), K = t.readBoolean();
    for (let ee = K ? 0 : s; ee <= s; ee++)
      t.skipUEG(), t.skipUEG(), t.skipUEG();
    if (t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.skipUEG(), t.readBoolean() && t.readBoolean())
      for (let Ee = 0; Ee < 4; Ee++)
        for (let De = 0; De < (Ee === 3 ? 2 : 6); De++)
          if (!t.readBoolean())
            t.readUEG();
          else {
            const we = Math.min(64, 1 << 4 + (Ee << 1));
            Ee > 1 && t.readEG();
            for (let Tt = 0; Tt < we; Tt++)
              t.readEG();
          }
    t.readBoolean(), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.skipUEG(), t.skipUEG(), t.readBoolean());
    const $ = t.readUEG();
    let O = 0;
    for (let ee = 0; ee < $; ee++) {
      let Ee = !1;
      if (ee !== 0 && (Ee = t.readBoolean()), Ee) {
        ee === $ && t.readUEG(), t.readBoolean(), t.readUEG();
        let De = 0;
        for (let lt = 0; lt <= O; lt++) {
          const we = t.readBoolean();
          let Tt = !1;
          we || (Tt = t.readBoolean()), (we || Tt) && De++;
        }
        O = De;
      } else {
        const De = t.readUEG(), lt = t.readUEG();
        O = De + lt;
        for (let we = 0; we < De; we++)
          t.readUEG(), t.readBoolean();
        for (let we = 0; we < lt; we++)
          t.readUEG(), t.readBoolean();
      }
    }
    if (t.readBoolean()) {
      const ee = t.readUEG();
      for (let Ee = 0; Ee < ee; Ee++) {
        for (let De = 0; De < W + 4; De++)
          t.readBits(1);
        t.readBits(1);
      }
    }
    let k = 0, M = 1, q = 1, J = !0, ie = 1, le = 0;
    t.readBoolean(), t.readBoolean();
    let ve = !1;
    if (t.readBoolean()) {
      if (t.readBoolean()) {
        const ct = t.readUByte(), er = [1, 12, 10, 16, 40, 24, 20, 32, 80, 18, 15, 64, 160, 4, 3, 2], Xt = [1, 11, 11, 11, 33, 11, 11, 11, 33, 11, 11, 33, 99, 3, 2, 1];
        ct > 0 && ct < 16 ? (M = er[ct - 1], q = Xt[ct - 1]) : ct === 255 && (M = t.readBits(16), q = t.readBits(16));
      }
      if (t.readBoolean() && t.readBoolean(), t.readBoolean() && (t.readBits(3), t.readBoolean(), t.readBoolean() && (t.readUByte(), t.readUByte(), t.readUByte())), t.readBoolean() && (t.readUEG(), t.readUEG()), t.readBoolean(), t.readBoolean(), t.readBoolean(), ve = t.readBoolean(), ve && (b += t.readUEG(), C += t.readUEG(), L += t.readUEG(), w += t.readUEG()), t.readBoolean() && (ie = t.readBits(32), le = t.readBits(32), t.readBoolean() && t.readUEG(), t.readBoolean())) {
        const Xt = t.readBoolean(), tr = t.readBoolean();
        let Pt = !1;
        (Xt || tr) && (Pt = t.readBoolean(), Pt && (t.readUByte(), t.readBits(5), t.readBoolean(), t.readBits(5)), t.readBits(4), t.readBits(4), Pt && t.readBits(4), t.readBits(5), t.readBits(5), t.readBits(5));
        for (let sr = 0; sr <= s; sr++) {
          J = t.readBoolean();
          const Xa = J || t.readBoolean();
          let ir = !1;
          Xa ? t.readEG() : ir = t.readBoolean();
          const rr = ir ? 1 : t.readUEG() + 1;
          if (Xt)
            for (let kt = 0; kt < rr; kt++)
              t.readUEG(), t.readUEG(), Pt && (t.readUEG(), t.readUEG()), t.skipBits(1);
          if (tr)
            for (let kt = 0; kt < rr; kt++)
              t.readUEG(), t.readUEG(), Pt && (t.readUEG(), t.readUEG()), t.skipBits(1);
        }
      }
      t.readBoolean() && (t.readBoolean(), t.readBoolean(), t.readBoolean(), k = t.readUEG());
    }
    let Je = x, Ji = _;
    if (A || ve) {
      let ee = 1, Ee = 1;
      S === 1 ? ee = Ee = 2 : S == 2 && (ee = 2), Je = x - ee * C - ee * b, Ji = _ - Ee * w - Ee * L;
    }
    const ja = i ? ["A", "B", "C"][i] : "", za = o << 24 | c << 16 | l << 8 | u;
    let Fs = 0;
    for (let ee = 0; ee < 32; ee++)
      Fs = (Fs | (za >> ee & 1) << 31 - ee) >>> 0;
    let Ms = Fs.toString(16);
    return n === 1 && Ms === "2" && (Ms = "6"), {
      codecString: `hvc1.${ja}${n}.${Ms}.${r ? "H" : "L"}${E}.B0`,
      params: {
        general_tier_flag: r,
        general_profile_idc: n,
        general_profile_space: i,
        general_profile_compatibility_flags: [o, c, l, u],
        general_constraint_indicator_flags: [d, h, f, g, y, p],
        general_level_idc: E,
        bit_depth: F + 8,
        bit_depth_luma_minus8: F,
        bit_depth_chroma_minus8: X,
        min_spatial_segmentation_idc: k,
        chroma_format_idc: S,
        frame_rate: {
          fixed: J,
          fps: le / ie
        }
      },
      width: Je,
      height: Ji,
      pixelRatio: [M, q]
    };
  }
  readPPS(e) {
    const t = new Bt(this.ebsp2rbsp(e));
    t.readUByte(), t.readUByte(), t.skipUEG(), t.skipUEG(), t.skipBits(2), t.skipBits(3), t.skipBits(2), t.skipUEG(), t.skipUEG(), t.skipEG(), t.skipBits(2), t.readBoolean() && t.skipUEG(), t.skipEG(), t.skipEG(), t.skipBits(4);
    const i = t.readBoolean(), r = t.readBoolean();
    let n = 1;
    return r && i ? n = 0 : r ? n = 3 : i && (n = 2), {
      parallelismType: n
    };
  }
  matchSPS(e, t) {
    return String.fromCharCode.apply(null, e).substr(3) === String.fromCharCode.apply(null, t).substr(3);
  }
}
const me = 188;
class it {
  constructor(e, t, s, i) {
    this.logger = void 0, this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._pmtId = -1, this._videoTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.remainderData = null, this.videoParser = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.logger = i, this.videoParser = null;
  }
  static probe(e, t) {
    const s = it.syncOffset(e);
    return s > 0 && t.warn(`MPEG2-TS detected but first sync word found @ offset ${s}`), s !== -1;
  }
  static syncOffset(e) {
    const t = e.length;
    let s = Math.min(me * 5, t - me) + 1, i = 0;
    for (; i < s; ) {
      let r = !1, n = -1, o = 0;
      for (let c = i; c < t; c += me)
        if (e[c] === 71 && (t - c === me || e[c + me] === 71)) {
          if (o++, n === -1 && (n = c, n !== 0 && (s = Math.min(n + me * 99, e.length - me) + 1)), r || (r = Ti(e, c) === 0), r && o > 1 && (n === 0 && o > 2 || c + me > s))
            return n;
        } else {
          if (o)
            return -1;
          break;
        }
      i++;
    }
    return -1;
  }
  /**
   * Creates a track model internal to demuxer used to drive remuxing input
   */
  static createTrack(e, t) {
    return {
      container: e === "video" || e === "audio" ? "video/mp2t" : void 0,
      type: e,
      id: Cn[e],
      pid: -1,
      inputTimeScale: 9e4,
      sequenceNumber: 0,
      samples: [],
      dropped: 0,
      duration: e === "audio" ? t : void 0
    };
  }
  /**
   * Initializes a new init segment on the demuxer/remuxer interface. Needed for discontinuities/track-switches (or at stream start)
   * Resets all internal track instances of the demuxer.
   */
  resetInitSegment(e, t, s, i) {
    this.pmtParsed = !1, this._pmtId = -1, this._videoTrack = it.createTrack("video"), this._videoTrack.duration = i, this._audioTrack = it.createTrack("audio", i), this._id3Track = it.createTrack("id3"), this._txtTrack = it.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = s;
  }
  resetTimeStamp() {
  }
  resetContiguity() {
    const {
      _audioTrack: e,
      _videoTrack: t,
      _id3Track: s
    } = this;
    e && (e.pesData = null), t && (t.pesData = null), s && (s.pesData = null), this.aacOverFlow = null, this.remainderData = null;
  }
  demux(e, t, s = !1, i = !1) {
    s || (this.sampleAes = null);
    let r;
    const n = this._videoTrack, o = this._audioTrack, c = this._id3Track, l = this._txtTrack;
    let u = n.pid, d = n.pesData, h = o.pid, f = c.pid, g = o.pesData, y = c.pesData, p = null, E = this.pmtParsed, v = this._pmtId, T = e.length;
    if (this.remainderData && (e = ke(this.remainderData, e), T = e.length, this.remainderData = null), T < me && !i)
      return this.remainderData = e, {
        audioTrack: o,
        videoTrack: n,
        id3Track: c,
        textTrack: l
      };
    const S = Math.max(0, it.syncOffset(e));
    T -= (T - S) % me, T < e.byteLength && !i && (this.remainderData = new Uint8Array(e.buffer, T, e.buffer.byteLength - T));
    let x = 0;
    for (let A = S; A < T; A += me)
      if (e[A] === 71) {
        const b = !!(e[A + 1] & 64), C = Ti(e, A), L = (e[A + 3] & 48) >> 4;
        let w;
        if (L > 1) {
          if (w = A + 5 + e[A + 4], w === A + me)
            continue;
        } else
          w = A + 4;
        switch (C) {
          case u:
            if (b) {
              if (d && (r = xt(d, this.logger))) {
                if (this.videoParser === null)
                  switch (n.segmentCodec) {
                    case "avc":
                      this.videoParser = new Wr();
                      break;
                    case "hevc":
                      this.videoParser = new Yr();
                      break;
                  }
                this.videoParser !== null && this.videoParser.parsePES(n, l, r, !1);
              }
              d = {
                data: [],
                size: 0
              };
            }
            d && (d.data.push(e.subarray(w, A + me)), d.size += A + me - w);
            break;
          case h:
            if (b) {
              if (g && (r = xt(g, this.logger)))
                switch (o.segmentCodec) {
                  case "aac":
                    this.parseAACPES(o, r);
                    break;
                  case "mp3":
                    this.parseMPEGPES(o, r);
                    break;
                  case "ac3":
                    this.parseAC3PES(o, r);
                    break;
                }
              g = {
                data: [],
                size: 0
              };
            }
            g && (g.data.push(e.subarray(w, A + me)), g.size += A + me - w);
            break;
          case f:
            b && (y && (r = xt(y, this.logger)) && this.parseID3PES(c, r), y = {
              data: [],
              size: 0
            }), y && (y.data.push(e.subarray(w, A + me)), y.size += A + me - w);
            break;
          case 0:
            b && (w += e[w] + 1), v = this._pmtId = Lc(e, w);
            break;
          case v: {
            b && (w += e[w] + 1);
            const F = Ic(e, w, this.typeSupported, s, this.observer, this.logger);
            u = F.videoPid, u > 0 && (n.pid = u, n.segmentCodec = F.segmentVideoCodec), h = F.audioPid, h > 0 && (o.pid = h, o.segmentCodec = F.segmentAudioCodec), f = F.id3Pid, f > 0 && (c.pid = f), p !== null && !E && (this.logger.warn(`MPEG-TS PMT found at ${A} after unknown PID '${p}'. Backtracking to sync byte @${S} to parse all TS packets.`), p = null, A = S - 188), E = this.pmtParsed = !0;
            break;
          }
          case 17:
          case 8191:
            break;
          default:
            p = C;
            break;
        }
      } else
        x++;
    x > 0 && vi(this.observer, new Error(`Found ${x} TS packet/s that do not start with 0x47`), void 0, this.logger), n.pesData = d, o.pesData = g, c.pesData = y;
    const _ = {
      audioTrack: o,
      videoTrack: n,
      id3Track: c,
      textTrack: l
    };
    return i && this.extractRemainingSamples(_), _;
  }
  flush() {
    const {
      remainderData: e
    } = this;
    this.remainderData = null;
    let t;
    return e ? t = this.demux(e, -1, !1, !0) : t = {
      videoTrack: this._videoTrack,
      audioTrack: this._audioTrack,
      id3Track: this._id3Track,
      textTrack: this._txtTrack
    }, this.extractRemainingSamples(t), this.sampleAes ? this.decrypt(t, this.sampleAes) : t;
  }
  extractRemainingSamples(e) {
    const {
      audioTrack: t,
      videoTrack: s,
      id3Track: i,
      textTrack: r
    } = e, n = s.pesData, o = t.pesData, c = i.pesData;
    let l;
    if (n && (l = xt(n, this.logger))) {
      if (this.videoParser === null)
        switch (s.segmentCodec) {
          case "avc":
            this.videoParser = new Wr();
            break;
          case "hevc":
            this.videoParser = new Yr();
            break;
        }
      this.videoParser !== null && (this.videoParser.parsePES(s, r, l, !0), s.pesData = null);
    } else
      s.pesData = n;
    if (o && (l = xt(o, this.logger))) {
      switch (t.segmentCodec) {
        case "aac":
          this.parseAACPES(t, l);
          break;
        case "mp3":
          this.parseMPEGPES(t, l);
          break;
        case "ac3":
          this.parseAC3PES(t, l);
          break;
      }
      t.pesData = null;
    } else
      o != null && o.size && this.logger.log("last AAC PES packet truncated,might overlap between fragments"), t.pesData = o;
    c && (l = xt(c, this.logger)) ? (this.parseID3PES(i, l), i.pesData = null) : i.pesData = c;
  }
  demuxSampleAes(e, t, s) {
    const i = this.demux(e, s, !0, !this.config.progressive), r = this.sampleAes = new Ac(this.observer, this.config, t);
    return this.decrypt(i, r);
  }
  decrypt(e, t) {
    return new Promise((s) => {
      const {
        audioTrack: i,
        videoTrack: r
      } = e;
      i.samples && i.segmentCodec === "aac" ? t.decryptAacSamples(i.samples, 0, () => {
        r.samples ? t.decryptAvcSamples(r.samples, 0, 0, () => {
          s(e);
        }) : s(e);
      }) : r.samples && t.decryptAvcSamples(r.samples, 0, 0, () => {
        s(e);
      });
    });
  }
  destroy() {
    this.observer && this.observer.removeAllListeners(), this.config = this.logger = this.observer = null, this.aacOverFlow = this.videoParser = this.remainderData = this.sampleAes = null, this._videoTrack = this._audioTrack = this._id3Track = this._txtTrack = void 0;
  }
  parseAACPES(e, t) {
    let s = 0;
    const i = this.aacOverFlow;
    let r = t.data;
    if (i) {
      this.aacOverFlow = null;
      const d = i.missing, h = i.sample.unit.byteLength;
      if (d === -1)
        r = ke(i.sample.unit, r);
      else {
        const f = h - d;
        i.sample.unit.set(r.subarray(0, d), f), e.samples.push(i.sample), s = i.missing;
      }
    }
    let n, o;
    for (n = s, o = r.length; n < o - 1 && !Ps(r, n); n++)
      ;
    if (n !== s) {
      let d;
      const h = n < o - 1;
      if (h ? d = `AAC PES did not start with ADTS header,offset:${n}` : d = "No ADTS header found in AAC PES", vi(this.observer, new Error(d), h, this.logger), !h)
        return;
    }
    ca(e, this.observer, r, n, this.audioCodec);
    let c;
    if (t.pts !== void 0)
      c = t.pts;
    else if (i) {
      const d = ua(e.samplerate);
      c = i.sample.pts + d;
    } else {
      this.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
      return;
    }
    let l = 0, u;
    for (; n < o; )
      if (u = da(e, r, n, c, l), n += u.length, u.missing) {
        this.aacOverFlow = u;
        break;
      } else
        for (l++; n < o - 1 && !Ps(r, n); n++)
          ;
  }
  parseMPEGPES(e, t) {
    const s = t.data, i = s.length;
    let r = 0, n = 0;
    const o = t.pts;
    if (o === void 0) {
      this.logger.warn("[tsdemuxer]: MPEG PES unknown PTS");
      return;
    }
    for (; n < i; )
      if (ya(s, n)) {
        const c = ma(e, s, n, o, r);
        if (c)
          n += c.length, r++;
        else
          break;
      } else
        n++;
  }
  parseAC3PES(e, t) {
    {
      const s = t.data, i = t.pts;
      if (i === void 0) {
        this.logger.warn("[tsdemuxer]: AC3 PES unknown PTS");
        return;
      }
      const r = s.length;
      let n = 0, o = 0, c;
      for (; o < r && (c = va(e, s, o, i, n++)) > 0; )
        o += c;
    }
  }
  parseID3PES(e, t) {
    if (t.pts === void 0) {
      this.logger.warn("[tsdemuxer]: ID3 PES unknown PTS");
      return;
    }
    const s = oe({}, t, {
      type: this._videoTrack ? Ie.emsg : Ie.audioId3,
      duration: Number.POSITIVE_INFINITY
    });
    e.samples.push(s);
  }
}
function Ti(a, e) {
  return ((a[e + 1] & 31) << 8) + a[e + 2];
}
function Lc(a, e) {
  return (a[e + 10] & 31) << 8 | a[e + 11];
}
function Ic(a, e, t, s, i, r) {
  const n = {
    audioPid: -1,
    videoPid: -1,
    id3Pid: -1,
    segmentVideoCodec: "avc",
    segmentAudioCodec: "aac"
  }, o = (a[e + 1] & 15) << 8 | a[e + 2], c = e + 3 + o - 4, l = (a[e + 10] & 15) << 8 | a[e + 11];
  for (e += 12 + l; e < c; ) {
    const u = Ti(a, e), d = (a[e + 3] & 15) << 8 | a[e + 4];
    switch (a[e]) {
      case 207:
        if (!s) {
          zs("ADTS AAC", r);
          break;
        }
      case 15:
        n.audioPid === -1 && (n.audioPid = u);
        break;
      case 21:
        n.id3Pid === -1 && (n.id3Pid = u);
        break;
      case 219:
        if (!s) {
          zs("H.264", r);
          break;
        }
      case 27:
        n.videoPid === -1 && (n.videoPid = u);
        break;
      case 3:
      case 4:
        !t.mpeg && !t.mp3 ? r.log("MPEG audio found, not supported in this browser") : n.audioPid === -1 && (n.audioPid = u, n.segmentAudioCodec = "mp3");
        break;
      case 193:
        if (!s) {
          zs("AC-3", r);
          break;
        }
      case 129:
        t.ac3 ? n.audioPid === -1 && (n.audioPid = u, n.segmentAudioCodec = "ac3") : r.log("AC-3 audio found, not supported in this browser");
        break;
      case 6:
        if (n.audioPid === -1 && d > 0) {
          let h = e + 5, f = d;
          for (; f > 2; ) {
            switch (a[h]) {
              case 106:
                t.ac3 !== !0 ? r.log("AC-3 audio found, not supported in this browser for now") : (n.audioPid = u, n.segmentAudioCodec = "ac3");
                break;
            }
            const y = a[h + 1] + 2;
            h += y, f -= y;
          }
        }
        break;
      case 194:
      case 135:
        return vi(i, new Error("Unsupported EC-3 in M2TS found"), void 0, r), n;
      case 36:
        n.videoPid === -1 && (n.videoPid = u, n.segmentVideoCodec = "hevc", r.log("HEVC in M2TS found"));
        break;
    }
    e += d + 5;
  }
  return n;
}
function vi(a, e, t, s) {
  s.warn(`parsing error: ${e.message}`), a.emit(m.ERROR, m.ERROR, {
    type: H.MEDIA_ERROR,
    details: R.FRAG_PARSING_ERROR,
    fatal: !1,
    levelRetry: t,
    error: e,
    reason: e.message
  });
}
function zs(a, e) {
  e.log(`${a} with AES-128-CBC encryption found in unencrypted stream`);
}
function xt(a, e) {
  let t = 0, s, i, r, n, o;
  const c = a.data;
  if (!a || a.size === 0)
    return null;
  for (; c[0].length < 19 && c.length > 1; )
    c[0] = ke(c[0], c[1]), c.splice(1, 1);
  if (s = c[0], (s[0] << 16) + (s[1] << 8) + s[2] === 1) {
    if (i = (s[4] << 8) + s[5], i && i > a.size - 6)
      return null;
    const u = s[7];
    u & 192 && (n = (s[9] & 14) * 536870912 + // 1 << 29
    (s[10] & 255) * 4194304 + // 1 << 22
    (s[11] & 254) * 16384 + // 1 << 14
    (s[12] & 255) * 128 + // 1 << 7
    (s[13] & 254) / 2, u & 64 ? (o = (s[14] & 14) * 536870912 + // 1 << 29
    (s[15] & 255) * 4194304 + // 1 << 22
    (s[16] & 254) * 16384 + // 1 << 14
    (s[17] & 255) * 128 + // 1 << 7
    (s[18] & 254) / 2, n - o > 60 * 9e4 && (e.warn(`${Math.round((n - o) / 9e4)}s delta between PTS and DTS, align them`), n = o)) : o = n), r = s[8];
    let d = r + 9;
    if (a.size <= d)
      return null;
    a.size -= d;
    const h = new Uint8Array(a.size);
    for (let f = 0, g = c.length; f < g; f++) {
      s = c[f];
      let y = s.byteLength;
      if (d)
        if (d > y) {
          d -= y;
          continue;
        } else
          s = s.subarray(d), y -= d, d = 0;
      h.set(s, t), t += y;
    }
    return i && (i -= r + 3), {
      data: h,
      pts: n,
      dts: o,
      len: i
    };
  }
  return null;
}
class Rc {
  static getSilentFrame(e, t) {
    switch (e) {
      case "mp4a.40.2":
        if (t === 1)
          return new Uint8Array([0, 200, 0, 128, 35, 128]);
        if (t === 2)
          return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
        if (t === 3)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
        if (t === 4)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
        if (t === 5)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
        if (t === 6)
          return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
        break;
      default:
        if (t === 1)
          return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 2)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        if (t === 3)
          return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
        break;
    }
  }
}
const et = Math.pow(2, 32) - 1;
class I {
  static init() {
    I.types = {
      avc1: [],
      // codingname
      avcC: [],
      hvc1: [],
      hvcC: [],
      btrt: [],
      dinf: [],
      dref: [],
      esds: [],
      ftyp: [],
      hdlr: [],
      mdat: [],
      mdhd: [],
      mdia: [],
      mfhd: [],
      minf: [],
      moof: [],
      moov: [],
      mp4a: [],
      ".mp3": [],
      dac3: [],
      "ac-3": [],
      mvex: [],
      mvhd: [],
      pasp: [],
      sdtp: [],
      stbl: [],
      stco: [],
      stsc: [],
      stsd: [],
      stsz: [],
      stts: [],
      tfdt: [],
      tfhd: [],
      traf: [],
      trak: [],
      trun: [],
      trex: [],
      tkhd: [],
      vmhd: [],
      smhd: []
    };
    let e;
    for (e in I.types)
      I.types.hasOwnProperty(e) && (I.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
    const t = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      118,
      105,
      100,
      101,
      // handler_type: 'vide'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      86,
      105,
      100,
      101,
      111,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'VideoHandler'
    ]), s = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // pre_defined
      115,
      111,
      117,
      110,
      // handler_type: 'soun'
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      83,
      111,
      117,
      110,
      100,
      72,
      97,
      110,
      100,
      108,
      101,
      114,
      0
      // name: 'SoundHandler'
    ]);
    I.HDLR_TYPES = {
      video: t,
      audio: s
    };
    const i = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1,
      // entry_count
      0,
      0,
      0,
      12,
      // entry_size
      117,
      114,
      108,
      32,
      // 'url' type
      0,
      // version 0
      0,
      0,
      1
      // entry_flags
    ]), r = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0
      // entry_count
    ]);
    I.STTS = I.STSC = I.STCO = r, I.STSZ = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      // sample_size
      0,
      0,
      0,
      0
      // sample_count
    ]), I.VMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      1,
      // flags
      0,
      0,
      // graphicsmode
      0,
      0,
      0,
      0,
      0,
      0
      // opcolor
    ]), I.SMHD = new Uint8Array([
      0,
      // version
      0,
      0,
      0,
      // flags
      0,
      0,
      // balance
      0,
      0
      // reserved
    ]), I.STSD = new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      1
    ]);
    const n = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]), c = new Uint8Array([0, 0, 0, 1]);
    I.FTYP = I.box(I.types.ftyp, n, c, n, o), I.DINF = I.box(I.types.dinf, I.box(I.types.dref, i));
  }
  static box(e, ...t) {
    let s = 8, i = t.length;
    const r = i;
    for (; i--; )
      s += t[i].byteLength;
    const n = new Uint8Array(s);
    for (n[0] = s >> 24 & 255, n[1] = s >> 16 & 255, n[2] = s >> 8 & 255, n[3] = s & 255, n.set(e, 4), i = 0, s = 8; i < r; i++)
      n.set(t[i], s), s += t[i].byteLength;
    return n;
  }
  static hdlr(e) {
    return I.box(I.types.hdlr, I.HDLR_TYPES[e]);
  }
  static mdat(e) {
    return I.box(I.types.mdat, e);
  }
  static mdhd(e, t) {
    t *= e;
    const s = Math.floor(t / (et + 1)), i = Math.floor(t % (et + 1));
    return I.box(I.types.mdhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      85,
      196,
      // 'und' language (undetermined)
      0,
      0
    ]));
  }
  static mdia(e) {
    return I.box(I.types.mdia, I.mdhd(e.timescale || 0, e.duration || 0), I.hdlr(e.type), I.minf(e));
  }
  static mfhd(e) {
    return I.box(I.types.mfhd, new Uint8Array([
      0,
      0,
      0,
      0,
      // flags
      e >> 24,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255
      // sequence_number
    ]));
  }
  static minf(e) {
    return e.type === "audio" ? I.box(I.types.minf, I.box(I.types.smhd, I.SMHD), I.DINF, I.stbl(e)) : I.box(I.types.minf, I.box(I.types.vmhd, I.VMHD), I.DINF, I.stbl(e));
  }
  static moof(e, t, s) {
    return I.box(I.types.moof, I.mfhd(e), I.traf(s, t));
  }
  static moov(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = I.trak(e[t]);
    return I.box.apply(null, [I.types.moov, I.mvhd(e[0].timescale || 0, e[0].duration || 0)].concat(s).concat(I.mvex(e)));
  }
  static mvex(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = I.trex(e[t]);
    return I.box.apply(null, [I.types.mvex, ...s]);
  }
  static mvhd(e, t) {
    t *= e;
    const s = Math.floor(t / (et + 1)), i = Math.floor(t % (et + 1)), r = new Uint8Array([
      1,
      // version 1
      0,
      0,
      0,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      e >> 24 & 255,
      e >> 16 & 255,
      e >> 8 & 255,
      e & 255,
      // timescale
      s >> 24,
      s >> 16 & 255,
      s >> 8 & 255,
      s & 255,
      i >> 24,
      i >> 16 & 255,
      i >> 8 & 255,
      i & 255,
      0,
      1,
      0,
      0,
      // 1.0 rate
      1,
      0,
      // 1.0 volume
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // pre_defined
      255,
      255,
      255,
      255
      // next_track_ID
    ]);
    return I.box(I.types.mvhd, r);
  }
  static sdtp(e) {
    const t = e.samples || [], s = new Uint8Array(4 + t.length);
    let i, r;
    for (i = 0; i < t.length; i++)
      r = t[i].flags, s[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
    return I.box(I.types.sdtp, s);
  }
  static stbl(e) {
    return I.box(I.types.stbl, I.stsd(e), I.box(I.types.stts, I.STTS), I.box(I.types.stsc, I.STSC), I.box(I.types.stsz, I.STSZ), I.box(I.types.stco, I.STCO));
  }
  static avc1(e) {
    let t = [], s = [], i, r, n;
    for (i = 0; i < e.sps.length; i++)
      r = e.sps[i], n = r.byteLength, t.push(n >>> 8 & 255), t.push(n & 255), t = t.concat(Array.prototype.slice.call(r));
    for (i = 0; i < e.pps.length; i++)
      r = e.pps[i], n = r.byteLength, s.push(n >>> 8 & 255), s.push(n & 255), s = s.concat(Array.prototype.slice.call(r));
    const o = I.box(I.types.avcC, new Uint8Array([
      1,
      // version
      t[3],
      // profile
      t[4],
      // profile compat
      t[5],
      // level
      255,
      // lengthSizeMinusOne, hard-coded to 4 bytes
      224 | e.sps.length
      // 3bit reserved (111) + numOfSequenceParameterSets
    ].concat(t).concat([
      e.pps.length
      // numOfPictureParameterSets
    ]).concat(s))), c = e.width, l = e.height, u = e.pixelRatio[0], d = e.pixelRatio[1];
    return I.box(
      I.types.avc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        c >> 8 & 255,
        c & 255,
        // width
        l >> 8 & 255,
        l & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      o,
      I.box(I.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      I.box(I.types.pasp, new Uint8Array([
        u >> 24,
        // hSpacing
        u >> 16 & 255,
        u >> 8 & 255,
        u & 255,
        d >> 24,
        // vSpacing
        d >> 16 & 255,
        d >> 8 & 255,
        d & 255
      ]))
    );
  }
  static esds(e) {
    const t = e.config;
    return new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      3,
      // descriptor_type
      25,
      // length
      0,
      1,
      // es_id
      0,
      // stream_priority
      4,
      // descriptor_type
      17,
      // length
      64,
      // codec : mpeg4_audio
      21,
      // stream_type
      0,
      0,
      0,
      // buffer_size
      0,
      0,
      0,
      0,
      // maxBitrate
      0,
      0,
      0,
      0,
      // avgBitrate
      5,
      // descriptor_type
      2,
      // length
      ...t,
      6,
      1,
      2
      // GASpecificConfig)); // length + audio config descriptor
    ]);
  }
  static audioStsd(e) {
    const t = e.samplerate || 0;
    return new Uint8Array([
      0,
      0,
      0,
      // reserved
      0,
      0,
      0,
      // reserved
      0,
      1,
      // data_reference_index
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      e.channelCount || 0,
      // channelcount
      0,
      16,
      // sampleSize:16bits
      0,
      0,
      0,
      0,
      // reserved2
      t >> 8 & 255,
      t & 255,
      //
      0,
      0
    ]);
  }
  static mp4a(e) {
    return I.box(I.types.mp4a, I.audioStsd(e), I.box(I.types.esds, I.esds(e)));
  }
  static mp3(e) {
    return I.box(I.types[".mp3"], I.audioStsd(e));
  }
  static ac3(e) {
    return I.box(I.types["ac-3"], I.audioStsd(e), I.box(I.types.dac3, e.config));
  }
  static stsd(e) {
    const {
      segmentCodec: t
    } = e;
    if (e.type === "audio") {
      if (t === "aac")
        return I.box(I.types.stsd, I.STSD, I.mp4a(e));
      if (t === "ac3" && e.config)
        return I.box(I.types.stsd, I.STSD, I.ac3(e));
      if (t === "mp3" && e.codec === "mp3")
        return I.box(I.types.stsd, I.STSD, I.mp3(e));
    } else if (e.pps && e.sps) {
      if (t === "avc")
        return I.box(I.types.stsd, I.STSD, I.avc1(e));
      if (t === "hevc" && e.vps)
        return I.box(I.types.stsd, I.STSD, I.hvc1(e));
    } else
      throw new Error("video track missing pps or sps");
    throw new Error(`unsupported ${e.type} segment codec (${t}/${e.codec})`);
  }
  static tkhd(e) {
    const t = e.id, s = (e.duration || 0) * (e.timescale || 0), i = e.width || 0, r = e.height || 0, n = Math.floor(s / (et + 1)), o = Math.floor(s % (et + 1));
    return I.box(I.types.tkhd, new Uint8Array([
      1,
      // version 1
      0,
      0,
      7,
      // flags
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      2,
      // creation_time
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      3,
      // modification_time
      t >> 24 & 255,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      0,
      // reserved
      n >> 24,
      n >> 16 & 255,
      n >> 8 & 255,
      n & 255,
      o >> 24,
      o >> 16 & 255,
      o >> 8 & 255,
      o & 255,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      // reserved
      0,
      0,
      // layer
      0,
      0,
      // alternate_group
      0,
      0,
      // non-audio track volume
      0,
      0,
      // reserved
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      64,
      0,
      0,
      0,
      // transformation: unity matrix
      i >> 8 & 255,
      i & 255,
      0,
      0,
      // width
      r >> 8 & 255,
      r & 255,
      0,
      0
      // height
    ]));
  }
  static traf(e, t) {
    const s = I.sdtp(e), i = e.id, r = Math.floor(t / (et + 1)), n = Math.floor(t % (et + 1));
    return I.box(
      I.types.traf,
      I.box(I.types.tfhd, new Uint8Array([
        0,
        // version 0
        0,
        0,
        0,
        // flags
        i >> 24,
        i >> 16 & 255,
        i >> 8 & 255,
        i & 255
        // track_ID
      ])),
      I.box(I.types.tfdt, new Uint8Array([
        1,
        // version 1
        0,
        0,
        0,
        // flags
        r >> 24,
        r >> 16 & 255,
        r >> 8 & 255,
        r & 255,
        n >> 24,
        n >> 16 & 255,
        n >> 8 & 255,
        n & 255
      ])),
      I.trun(e, s.length + 16 + // tfhd
      20 + // tfdt
      8 + // traf header
      16 + // mfhd
      8 + // moof header
      8),
      // mdat header
      s
    );
  }
  /**
   * Generate a track box.
   * @param track a track definition
   */
  static trak(e) {
    return e.duration = e.duration || 4294967295, I.box(I.types.trak, I.tkhd(e), I.mdia(e));
  }
  static trex(e) {
    const t = e.id;
    return I.box(I.types.trex, new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      t >> 24,
      t >> 16 & 255,
      t >> 8 & 255,
      t & 255,
      // track_ID
      0,
      0,
      0,
      1,
      // default_sample_description_index
      0,
      0,
      0,
      0,
      // default_sample_duration
      0,
      0,
      0,
      0,
      // default_sample_size
      0,
      1,
      0,
      1
      // default_sample_flags
    ]));
  }
  static trun(e, t) {
    const s = e.samples || [], i = s.length, r = 12 + 16 * i, n = new Uint8Array(r);
    let o, c, l, u, d, h;
    for (t += 8 + r, n.set([
      e.type === "video" ? 1 : 0,
      // version 1 for video with signed-int sample_composition_time_offset
      0,
      15,
      1,
      // flags
      i >>> 24 & 255,
      i >>> 16 & 255,
      i >>> 8 & 255,
      i & 255,
      // sample_count
      t >>> 24 & 255,
      t >>> 16 & 255,
      t >>> 8 & 255,
      t & 255
      // data_offset
    ], 0), o = 0; o < i; o++)
      c = s[o], l = c.duration, u = c.size, d = c.flags, h = c.cts, n.set([
        l >>> 24 & 255,
        l >>> 16 & 255,
        l >>> 8 & 255,
        l & 255,
        // sample_duration
        u >>> 24 & 255,
        u >>> 16 & 255,
        u >>> 8 & 255,
        u & 255,
        // sample_size
        d.isLeading << 2 | d.dependsOn,
        d.isDependedOn << 6 | d.hasRedundancy << 4 | d.paddingValue << 1 | d.isNonSync,
        d.degradPrio & 61440,
        d.degradPrio & 15,
        // sample_flags
        h >>> 24 & 255,
        h >>> 16 & 255,
        h >>> 8 & 255,
        h & 255
        // sample_composition_time_offset
      ], 12 + 16 * o);
    return I.box(I.types.trun, n);
  }
  static initSegment(e) {
    I.types || I.init();
    const t = I.moov(e);
    return ke(I.FTYP, t);
  }
  static hvc1(e) {
    const t = e.params, s = [e.vps, e.sps, e.pps], i = 4, r = new Uint8Array([1, t.general_profile_space << 6 | (t.general_tier_flag ? 32 : 0) | t.general_profile_idc, t.general_profile_compatibility_flags[0], t.general_profile_compatibility_flags[1], t.general_profile_compatibility_flags[2], t.general_profile_compatibility_flags[3], t.general_constraint_indicator_flags[0], t.general_constraint_indicator_flags[1], t.general_constraint_indicator_flags[2], t.general_constraint_indicator_flags[3], t.general_constraint_indicator_flags[4], t.general_constraint_indicator_flags[5], t.general_level_idc, 240 | t.min_spatial_segmentation_idc >> 8, 255 & t.min_spatial_segmentation_idc, 252 | t.parallelismType, 252 | t.chroma_format_idc, 248 | t.bit_depth_luma_minus8, 248 | t.bit_depth_chroma_minus8, 0, parseInt(t.frame_rate.fps), i - 1 | t.temporal_id_nested << 2 | t.num_temporal_layers << 3 | (t.frame_rate.fixed ? 64 : 0), s.length]);
    let n = r.length;
    for (let g = 0; g < s.length; g += 1) {
      n += 3;
      for (let y = 0; y < s[g].length; y += 1)
        n += 2 + s[g][y].length;
    }
    const o = new Uint8Array(n);
    o.set(r, 0), n = r.length;
    const c = s.length - 1;
    for (let g = 0; g < s.length; g += 1) {
      o.set(new Uint8Array([32 + g | (g === c ? 128 : 0), 0, s[g].length]), n), n += 3;
      for (let y = 0; y < s[g].length; y += 1)
        o.set(new Uint8Array([s[g][y].length >> 8, s[g][y].length & 255]), n), n += 2, o.set(s[g][y], n), n += s[g][y].length;
    }
    const l = I.box(I.types.hvcC, o), u = e.width, d = e.height, h = e.pixelRatio[0], f = e.pixelRatio[1];
    return I.box(
      I.types.hvc1,
      new Uint8Array([
        0,
        0,
        0,
        // reserved
        0,
        0,
        0,
        // reserved
        0,
        1,
        // data_reference_index
        0,
        0,
        // pre_defined
        0,
        0,
        // reserved
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // pre_defined
        u >> 8 & 255,
        u & 255,
        // width
        d >> 8 & 255,
        d & 255,
        // height
        0,
        72,
        0,
        0,
        // horizresolution
        0,
        72,
        0,
        0,
        // vertresolution
        0,
        0,
        0,
        0,
        // reserved
        0,
        1,
        // frame_count
        18,
        100,
        97,
        105,
        108,
        // dailymotion/hls.js
        121,
        109,
        111,
        116,
        105,
        111,
        110,
        47,
        104,
        108,
        115,
        46,
        106,
        115,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        // compressorname
        0,
        24,
        // depth = 24
        17,
        17
      ]),
      // pre_defined = -1
      l,
      I.box(I.types.btrt, new Uint8Array([
        0,
        28,
        156,
        128,
        // bufferSizeDB
        0,
        45,
        198,
        192,
        // maxBitrate
        0,
        45,
        198,
        192
      ])),
      // avgBitrate
      I.box(I.types.pasp, new Uint8Array([
        h >> 24,
        // hSpacing
        h >> 16 & 255,
        h >> 8 & 255,
        h & 255,
        f >> 24,
        // vSpacing
        f >> 16 & 255,
        f >> 8 & 255,
        f & 255
      ]))
    );
  }
}
I.types = void 0;
I.HDLR_TYPES = void 0;
I.STTS = void 0;
I.STSC = void 0;
I.STCO = void 0;
I.STSZ = void 0;
I.VMHD = void 0;
I.SMHD = void 0;
I.STSD = void 0;
I.FTYP = void 0;
I.DINF = void 0;
const xa = 9e4;
function qi(a, e, t = 1, s = !1) {
  const i = a * e * t;
  return s ? Math.round(i) : i;
}
function bc(a, e, t = 1, s = !1) {
  return qi(a, e, 1 / t, s);
}
function Ot(a, e = !1) {
  return qi(a, 1e3, 1 / xa, e);
}
function _c(a, e = 1) {
  return qi(a, xa, 1 / e);
}
const Dc = 10 * 1e3, Cc = 1024, Pc = 1152, kc = 1536;
let At = null, Xs = null;
function qr(a, e, t, s) {
  return {
    duration: e,
    size: t,
    cts: s,
    flags: {
      isLeading: 0,
      isDependedOn: 0,
      hasRedundancy: 0,
      degradPrio: 0,
      dependsOn: a ? 2 : 1,
      isNonSync: a ? 0 : 1
    }
  };
}
class gs {
  constructor(e, t, s, i) {
    if (this.logger = void 0, this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.videoTrackConfig = void 0, this.observer = e, this.config = t, this.typeSupported = s, this.logger = i, this.ISGenerated = !1, At === null) {
      const n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      At = n ? parseInt(n[1]) : 0;
    }
    if (Xs === null) {
      const r = navigator.userAgent.match(/Safari\/(\d+)/i);
      Xs = r ? parseInt(r[1]) : 0;
    }
  }
  destroy() {
    this.config = this.videoTrackConfig = this._initPTS = this._initDTS = null;
  }
  resetTimeStamp(e) {
    this.logger.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = e;
  }
  resetNextTimestamp() {
    this.logger.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1;
  }
  resetInitSegment() {
    this.logger.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1, this.videoTrackConfig = void 0;
  }
  getVideoStartPts(e) {
    let t = !1;
    const s = e[0].pts, i = e.reduce((r, n) => {
      let o = n.pts, c = o - r;
      return c < -4294967296 && (t = !0, o = Pe(o, s), c = o - r), c > 0 ? r : o;
    }, s);
    return t && this.logger.debug("PTS rollover detected"), i;
  }
  remux(e, t, s, i, r, n, o, c) {
    let l, u, d, h, f, g, y = r, p = r;
    const E = e.pid > -1, v = t.pid > -1, T = t.samples.length, S = e.samples.length > 0, x = o && T > 0 || T > 1;
    if ((!E || S) && (!v || x) || this.ISGenerated || o) {
      if (this.ISGenerated) {
        var A, b, C, L;
        const W = this.videoTrackConfig;
        (W && (t.width !== W.width || t.height !== W.height || ((A = t.pixelRatio) == null ? void 0 : A[0]) !== ((b = W.pixelRatio) == null ? void 0 : b[0]) || ((C = t.pixelRatio) == null ? void 0 : C[1]) !== ((L = W.pixelRatio) == null ? void 0 : L[1])) || !W && x || this.nextAudioPts === null && S) && this.resetInitSegment();
      }
      this.ISGenerated || (d = this.generateIS(e, t, r, n));
      const w = this.isVideoContiguous;
      let F = -1, X;
      if (x && (F = wc(t.samples), !w && this.config.forceKeyFrameOnDiscontinuity))
        if (g = !0, F > 0) {
          this.logger.warn(`[mp4-remuxer]: Dropped ${F} out of ${T} video samples due to a missing keyframe`);
          const W = this.getVideoStartPts(t.samples);
          t.samples = t.samples.slice(F), t.dropped += F, p += (t.samples[0].pts - W) / t.inputTimeScale, X = p;
        } else
          F === -1 && (this.logger.warn(`[mp4-remuxer]: No keyframe found out of ${T} video samples`), g = !1);
      if (this.ISGenerated) {
        if (S && x) {
          const W = this.getVideoStartPts(t.samples), B = (Pe(e.samples[0].pts, W) - W) / t.inputTimeScale;
          y += Math.max(0, B), p += Math.max(0, -B);
        }
        if (S) {
          if (e.samplerate || (this.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), d = this.generateIS(e, t, r, n)), u = this.remuxAudio(e, y, this.isAudioContiguous, n, v || x || c === G.AUDIO ? p : void 0), x) {
            const W = u ? u.endPTS - u.startPTS : 0;
            t.inputTimeScale || (this.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), d = this.generateIS(e, t, r, n)), l = this.remuxVideo(t, p, w, W);
          }
        } else
          x && (l = this.remuxVideo(t, p, w, 0));
        l && (l.firstKeyFrame = F, l.independent = F !== -1, l.firstKeyFramePTS = X);
      }
    }
    return this.ISGenerated && this._initPTS && this._initDTS && (s.samples.length && (f = Aa(s, r, this._initPTS, this._initDTS)), i.samples.length && (h = La(i, r, this._initPTS))), {
      audio: u,
      video: l,
      initSegment: d,
      independent: g,
      text: h,
      id3: f
    };
  }
  generateIS(e, t, s, i) {
    const r = e.samples, n = t.samples, o = this.typeSupported, c = {}, l = this._initPTS;
    let u = !l || i, d = "audio/mp4", h, f, g;
    if (u && (h = f = 1 / 0), e.config && r.length) {
      switch (e.timescale = e.samplerate, e.segmentCodec) {
        case "mp3":
          o.mpeg ? (d = "audio/mpeg", e.codec = "") : o.mp3 && (e.codec = "mp3");
          break;
        case "ac3":
          e.codec = "ac-3";
          break;
      }
      c.audio = {
        id: "audio",
        container: d,
        codec: e.codec,
        initSegment: e.segmentCodec === "mp3" && o.mpeg ? new Uint8Array(0) : I.initSegment([e]),
        metadata: {
          channelCount: e.channelCount
        }
      }, u && (g = e.inputTimeScale, !l || g !== l.timescale ? h = f = r[0].pts - Math.round(g * s) : u = !1);
    }
    if (t.sps && t.pps && n.length) {
      if (t.timescale = t.inputTimeScale, c.video = {
        id: "main",
        container: "video/mp4",
        codec: t.codec,
        initSegment: I.initSegment([t]),
        metadata: {
          width: t.width,
          height: t.height
        }
      }, u)
        if (g = t.inputTimeScale, !l || g !== l.timescale) {
          const y = this.getVideoStartPts(n), p = Math.round(g * s);
          f = Math.min(f, Pe(n[0].dts, y) - p), h = Math.min(h, y - p);
        } else
          u = !1;
      this.videoTrackConfig = {
        width: t.width,
        height: t.height,
        pixelRatio: t.pixelRatio
      };
    }
    if (Object.keys(c).length)
      return this.ISGenerated = !0, u ? (this._initPTS = {
        baseTime: h,
        timescale: g
      }, this._initDTS = {
        baseTime: f,
        timescale: g
      }) : h = g = void 0, {
        tracks: c,
        initPTS: h,
        timescale: g
      };
  }
  remuxVideo(e, t, s, i) {
    const r = e.inputTimeScale, n = e.samples, o = [], c = n.length, l = this._initPTS;
    let u = this.nextAvcDts, d = 8, h = this.videoSampleDuration, f, g, y = Number.POSITIVE_INFINITY, p = Number.NEGATIVE_INFINITY, E = !1;
    if (!s || u === null) {
      const O = t * r, D = n[0].pts - Pe(n[0].dts, n[0].pts);
      At && u !== null && Math.abs(O - D - u) < 15e3 ? s = !0 : u = O - D;
    }
    const v = l.baseTime * r / l.timescale;
    for (let O = 0; O < c; O++) {
      const D = n[O];
      D.pts = Pe(D.pts - v, u), D.dts = Pe(D.dts - v, u), D.dts < n[O > 0 ? O - 1 : O].dts && (E = !0);
    }
    E && n.sort(function(O, D) {
      const k = O.dts - D.dts, M = O.pts - D.pts;
      return k || M;
    }), f = n[0].dts, g = n[n.length - 1].dts;
    const T = g - f, S = T ? Math.round(T / (c - 1)) : h || e.inputTimeScale / 30;
    if (s) {
      const O = f - u, D = O > S, k = O < -1;
      if ((D || k) && (D ? this.logger.warn(`${(e.segmentCodec || "").toUpperCase()}: ${Ot(O, !0)} ms (${O}dts) hole between fragments detected at ${t.toFixed(3)}`) : this.logger.warn(`${(e.segmentCodec || "").toUpperCase()}: ${Ot(-O, !0)} ms (${O}dts) overlapping between fragments detected at ${t.toFixed(3)}`), !k || u >= n[0].pts || At)) {
        f = u;
        const M = n[0].pts - O;
        if (D)
          n[0].dts = f, n[0].pts = M;
        else {
          let q = !0;
          for (let J = 0; J < n.length && !(n[J].dts > M && q); J++) {
            const ie = n[J].pts;
            if (n[J].dts -= O, n[J].pts -= O, J < n.length - 1) {
              const le = n[J + 1].pts, ve = n[J].pts, Se = le <= ve, Je = le <= ie;
              q = Se == Je;
            }
          }
        }
        this.logger.log(`Video: Initial PTS/DTS adjusted: ${Ot(M, !0)}/${Ot(f, !0)}, delta: ${Ot(O, !0)} ms`);
      }
    }
    f = Math.max(0, f);
    let x = 0, _ = 0, A = f;
    for (let O = 0; O < c; O++) {
      const D = n[O], k = D.units, M = k.length;
      let q = 0;
      for (let J = 0; J < M; J++)
        q += k[J].data.length;
      _ += q, x += M, D.length = q, D.dts < A ? (D.dts = A, A += S / 4 | 0 || 1) : A = D.dts, y = Math.min(D.pts, y), p = Math.max(D.pts, p);
    }
    g = n[c - 1].dts;
    const b = _ + 4 * x + 8;
    let C;
    try {
      C = new Uint8Array(b);
    } catch (O) {
      this.observer.emit(m.ERROR, m.ERROR, {
        type: H.MUX_ERROR,
        details: R.REMUX_ALLOC_ERROR,
        fatal: !1,
        error: O,
        bytes: b,
        reason: `fail allocating video mdat ${b}`
      });
      return;
    }
    const L = new DataView(C.buffer);
    L.setUint32(0, b), C.set(I.types.mdat, 4);
    let w = !1, F = Number.POSITIVE_INFINITY, X = Number.POSITIVE_INFINITY, W = Number.NEGATIVE_INFINITY, K = Number.NEGATIVE_INFINITY;
    for (let O = 0; O < c; O++) {
      const D = n[O], k = D.units;
      let M = 0;
      for (let ie = 0, le = k.length; ie < le; ie++) {
        const ve = k[ie], Se = ve.data, Je = ve.data.byteLength;
        L.setUint32(d, Je), d += 4, C.set(Se, d), d += Je, M += 4 + Je;
      }
      let q;
      if (O < c - 1)
        h = n[O + 1].dts - D.dts, q = n[O + 1].pts - D.pts;
      else {
        const ie = this.config, le = O > 0 ? D.dts - n[O - 1].dts : S;
        if (q = O > 0 ? D.pts - n[O - 1].pts : S, ie.stretchShortVideoTrack && this.nextAudioPts !== null) {
          const ve = Math.floor(ie.maxBufferHole * r), Se = (i ? y + i * r : this.nextAudioPts) - D.pts;
          Se > ve ? (h = Se - le, h < 0 ? h = le : w = !0, this.logger.log(`[mp4-remuxer]: It is approximately ${Se / 90} ms to the next segment; using duration ${h / 90} ms for the last video frame.`)) : h = le;
        } else
          h = le;
      }
      const J = Math.round(D.pts - D.dts);
      F = Math.min(F, h), W = Math.max(W, h), X = Math.min(X, q), K = Math.max(K, q), o.push(qr(D.key, h, M, J));
    }
    if (o.length) {
      if (At) {
        if (At < 70) {
          const O = o[0].flags;
          O.dependsOn = 2, O.isNonSync = 0;
        }
      } else if (Xs && K - X < W - F && S / W < 0.025 && o[0].cts === 0) {
        this.logger.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
        let O = f;
        for (let D = 0, k = o.length; D < k; D++) {
          const M = O + o[D].duration, q = O + o[D].cts;
          if (D < k - 1) {
            const J = M + o[D + 1].cts;
            o[D].duration = J - q;
          } else
            o[D].duration = D ? o[D - 1].duration : S;
          o[D].cts = 0, O = M;
        }
      }
    }
    h = w || !h ? S : h, this.nextAvcDts = u = g + h, this.videoSampleDuration = h, this.isVideoContiguous = !0;
    const B = I.moof(e.sequenceNumber++, f, oe(e, {
      samples: o
    })), V = "video", $ = {
      data1: B,
      data2: C,
      startPTS: y / r,
      endPTS: (p + h) / r,
      startDTS: f / r,
      endDTS: u / r,
      type: V,
      hasAudio: !1,
      hasVideo: !0,
      nb: o.length,
      dropped: e.dropped
    };
    return e.samples = [], e.dropped = 0, $;
  }
  getSamplesPerFrame(e) {
    switch (e.segmentCodec) {
      case "mp3":
        return Pc;
      case "ac3":
        return kc;
      default:
        return Cc;
    }
  }
  remuxAudio(e, t, s, i, r) {
    const n = e.inputTimeScale, o = e.samplerate ? e.samplerate : n, c = n / o, l = this.getSamplesPerFrame(e), u = l * c, d = this._initPTS, h = e.segmentCodec === "mp3" && this.typeSupported.mpeg, f = [], g = r !== void 0;
    let y = e.samples, p = h ? 0 : 8, E = this.nextAudioPts || -1;
    const v = t * n, T = d.baseTime * n / d.timescale;
    if (this.isAudioContiguous = s = s || y.length && E > 0 && (i && Math.abs(v - E) < 9e3 || Math.abs(Pe(y[0].pts - T, v) - E) < 20 * u), y.forEach(function(B) {
      B.pts = Pe(B.pts - T, v);
    }), !s || E < 0) {
      if (y = y.filter((B) => B.pts >= 0), !y.length)
        return;
      r === 0 ? E = 0 : i && !g ? E = Math.max(0, v) : E = y[0].pts;
    }
    if (e.segmentCodec === "aac") {
      const B = this.config.maxAudioFramesDrift;
      for (let V = 0, $ = E; V < y.length; V++) {
        const O = y[V], D = O.pts, k = D - $, M = Math.abs(1e3 * k / n);
        if (k <= -B * u && g)
          V === 0 && (this.logger.warn(`Audio frame @ ${(D / n).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3 * k / n)} ms.`), this.nextAudioPts = E = $ = D);
        else if (k >= B * u && M < Dc && g) {
          let q = Math.round(k / u);
          $ = D - q * u, $ < 0 && (q--, $ += u), V === 0 && (this.nextAudioPts = E = $), this.logger.warn(`[mp4-remuxer]: Injecting ${q} audio frame @ ${($ / n).toFixed(3)}s due to ${Math.round(1e3 * k / n)} ms gap.`);
          for (let J = 0; J < q; J++) {
            const ie = Math.max($, 0);
            let le = Rc.getSilentFrame(e.parsedCodec || e.manifestCodec || e.codec, e.channelCount);
            le || (this.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), le = O.unit.subarray()), y.splice(V, 0, {
              unit: le,
              pts: ie
            }), $ += u, V++;
          }
        }
        O.pts = $, $ += u;
      }
    }
    let S = null, x = null, _, A = 0, b = y.length;
    for (; b--; )
      A += y[b].unit.byteLength;
    for (let B = 0, V = y.length; B < V; B++) {
      const $ = y[B], O = $.unit;
      let D = $.pts;
      if (x !== null) {
        const M = f[B - 1];
        M.duration = Math.round((D - x) / c);
      } else if (s && e.segmentCodec === "aac" && (D = E), S = D, A > 0) {
        A += p;
        try {
          _ = new Uint8Array(A);
        } catch (M) {
          this.observer.emit(m.ERROR, m.ERROR, {
            type: H.MUX_ERROR,
            details: R.REMUX_ALLOC_ERROR,
            fatal: !1,
            error: M,
            bytes: A,
            reason: `fail allocating audio mdat ${A}`
          });
          return;
        }
        h || (new DataView(_.buffer).setUint32(0, A), _.set(I.types.mdat, 4));
      } else
        return;
      _.set(O, p);
      const k = O.byteLength;
      p += k, f.push(qr(!0, l, k, 0)), x = D;
    }
    const C = f.length;
    if (!C)
      return;
    const L = f[f.length - 1];
    this.nextAudioPts = E = x + c * L.duration;
    const w = h ? new Uint8Array(0) : I.moof(e.sequenceNumber++, S / c, oe({}, e, {
      samples: f
    }));
    e.samples = [];
    const F = S / n, X = E / n, K = {
      data1: w,
      data2: _,
      startPTS: F,
      endPTS: X,
      startDTS: F,
      endDTS: X,
      type: "audio",
      hasAudio: !0,
      hasVideo: !1,
      nb: C
    };
    return this.isAudioContiguous = !0, K;
  }
}
function Pe(a, e) {
  let t;
  if (e === null)
    return a;
  for (e < a ? t = -8589934592 : t = 8589934592; Math.abs(a - e) > 4294967296; )
    a += t;
  return a;
}
function wc(a) {
  for (let e = 0; e < a.length; e++)
    if (a[e].key)
      return e;
  return -1;
}
function Aa(a, e, t, s) {
  const i = a.samples.length;
  if (!i)
    return;
  const r = a.inputTimeScale;
  for (let o = 0; o < i; o++) {
    const c = a.samples[o];
    c.pts = Pe(c.pts - t.baseTime * r / t.timescale, e * r) / r, c.dts = Pe(c.dts - s.baseTime * r / s.timescale, e * r) / r;
  }
  const n = a.samples;
  return a.samples = [], {
    samples: n
  };
}
function La(a, e, t) {
  const s = a.samples.length;
  if (!s)
    return;
  const i = a.inputTimeScale;
  for (let n = 0; n < s; n++) {
    const o = a.samples[n];
    o.pts = Pe(o.pts - t.baseTime * i / t.timescale, e * i) / i;
  }
  a.samples.sort((n, o) => n.pts - o.pts);
  const r = a.samples;
  return a.samples = [], {
    samples: r
  };
}
class Oc {
  constructor(e, t, s, i) {
    this.logger = void 0, this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null, this.logger = i;
  }
  destroy() {
  }
  resetTimeStamp(e) {
    this.initPTS = e, this.lastEndTime = null;
  }
  resetNextTimestamp() {
    this.lastEndTime = null;
  }
  resetInitSegment(e, t, s, i) {
    this.audioCodec = t, this.videoCodec = s, this.generateInitSegment(xo(e, i)), this.emitInitSegment = !0;
  }
  generateInitSegment(e) {
    let {
      audioCodec: t,
      videoCodec: s
    } = this;
    if (!(e != null && e.byteLength)) {
      this.initTracks = void 0, this.initData = void 0;
      return;
    }
    const i = this.initData = wn(e);
    i.audio && (t = jr(i.audio, ae.AUDIO)), i.video && (s = jr(i.video, ae.VIDEO));
    const r = {};
    i.audio && i.video ? r.audiovideo = {
      container: "video/mp4",
      codec: t + "," + s,
      supplemental: i.video.supplemental,
      initSegment: e,
      id: "main"
    } : i.audio ? r.audio = {
      container: "audio/mp4",
      codec: t,
      initSegment: e,
      id: "audio"
    } : i.video ? r.video = {
      container: "video/mp4",
      codec: s,
      supplemental: i.video.supplemental,
      initSegment: e,
      id: "main"
    } : this.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = r;
  }
  remux(e, t, s, i, r, n) {
    var o, c;
    let {
      initPTS: l,
      lastEndTime: u
    } = this;
    const d = {
      audio: void 0,
      video: void 0,
      text: i,
      id3: s,
      initSegment: void 0
    };
    N(u) || (u = this.lastEndTime = r || 0);
    const h = t.samples;
    if (!(h != null && h.length))
      return d;
    const f = {
      initPTS: void 0,
      timescale: 1
    };
    let g = this.initData;
    if ((o = g) != null && o.length || (this.generateInitSegment(h), g = this.initData), !((c = g) != null && c.length))
      return this.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), d;
    this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = !1);
    const y = Lo(h, g), p = Ao(g, h), E = p === null ? r : p;
    (n || !l) && (Fc(l, E, r, y) || f.timescale !== l.timescale) && (f.initPTS = E - r, l && l.timescale === 1 && this.logger.warn(`Adjusting initPTS @${r} from ${l.baseTime / l.timescale} to ${f.initPTS}`), this.initPTS = l = {
      baseTime: f.initPTS,
      timescale: 1
    });
    const v = e ? E - l.baseTime / l.timescale : u, T = v + y;
    Ro(g, h, l.baseTime / l.timescale), y > 0 ? this.lastEndTime = T : (this.logger.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
    const S = !!g.audio, x = !!g.video;
    let _ = "";
    S && (_ += "audio"), x && (_ += "video");
    const A = {
      data1: h,
      startPTS: v,
      startDTS: v,
      endPTS: T,
      endDTS: T,
      type: _,
      hasAudio: S,
      hasVideo: x,
      nb: 1,
      dropped: 0
    };
    return d.audio = A.type === "audio" ? A : void 0, d.video = A.type !== "audio" ? A : void 0, d.initSegment = f, d.id3 = Aa(s, r, l, l), i.samples.length && (d.text = La(i, r, l)), d;
  }
}
function Fc(a, e, t, s) {
  if (a === null)
    return !0;
  const i = Math.max(s, 1), r = e - a.baseTime / a.timescale;
  return Math.abs(r - t) > i;
}
function jr(a, e) {
  const t = a == null ? void 0 : a.codec;
  return t && t.length > 4 ? t : e === ae.AUDIO ? t === "ec-3" || t === "ac-3" || t === "alac" ? t : t === "fLaC" || t === "Opus" ? Ls(t, !1) : (Z.warn(`Unhandled audio codec "${t}" in mp4 MAP`), t || "mp4a") : (Z.warn(`Unhandled video codec "${t}" in mp4 MAP`), t || "avc1");
}
let Xe;
try {
  Xe = self.performance.now.bind(self.performance);
} catch {
  Xe = Date.now;
}
const ms = [{
  demux: xc,
  remux: Oc
}, {
  demux: it,
  remux: gs
}, {
  demux: Ec,
  remux: gs
}, {
  demux: vc,
  remux: gs
}];
ms.splice(2, 0, {
  demux: Tc,
  remux: gs
});
class zr {
  constructor(e, t, s, i, r, n) {
    this.asyncResult = !1, this.logger = void 0, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e, this.typeSupported = t, this.config = s, this.id = r, this.logger = n;
  }
  configure(e) {
    this.transmuxConfig = e, this.decrypter && this.decrypter.reset();
  }
  push(e, t, s, i) {
    const r = s.transmuxing;
    r.executeStart = Xe();
    let n = new Uint8Array(e);
    const {
      currentTransmuxState: o,
      transmuxConfig: c
    } = this;
    i && (this.currentTransmuxState = i);
    const {
      contiguous: l,
      discontinuity: u,
      trackSwitch: d,
      accurateTimeOffset: h,
      timeOffset: f,
      initSegmentChange: g
    } = i || o, {
      audioCodec: y,
      videoCodec: p,
      defaultInitPts: E,
      duration: v,
      initSegmentData: T
    } = c, S = Mc(n, t);
    if (S && It(S.method)) {
      const b = this.getDecrypter(), C = Bi(S.method);
      if (b.isSync()) {
        let L = b.softwareDecrypt(n, S.key.buffer, S.iv.buffer, C);
        if (s.part > -1) {
          const F = b.flush();
          L = F && F.buffer;
        }
        if (!L)
          return r.executeEnd = Xe(), Qs(s);
        n = new Uint8Array(L);
      } else
        return this.asyncResult = !0, this.decryptionPromise = b.webCryptoDecrypt(n, S.key.buffer, S.iv.buffer, C).then((L) => {
          const w = this.push(L, null, s);
          return this.decryptionPromise = null, w;
        }), this.decryptionPromise;
    }
    const x = this.needsProbing(u, d);
    if (x) {
      const b = this.configureTransmuxer(n);
      if (b)
        return this.logger.warn(`[transmuxer] ${b.message}`), this.observer.emit(m.ERROR, m.ERROR, {
          type: H.MEDIA_ERROR,
          details: R.FRAG_PARSING_ERROR,
          fatal: !1,
          error: b,
          reason: b.message
        }), r.executeEnd = Xe(), Qs(s);
    }
    (u || d || g || x) && this.resetInitSegment(T, y, p, v, t), (u || g || x) && this.resetInitialTimestamp(E), l || this.resetContiguity();
    const _ = this.transmux(n, S, f, h, s);
    this.asyncResult = qt(_);
    const A = this.currentTransmuxState;
    return A.contiguous = !0, A.discontinuity = !1, A.trackSwitch = !1, r.executeEnd = Xe(), _;
  }
  // Due to data caching, flush calls can produce more than one TransmuxerResult (hence the Array type)
  flush(e) {
    const t = e.transmuxing;
    t.executeStart = Xe();
    const {
      decrypter: s,
      currentTransmuxState: i,
      decryptionPromise: r
    } = this;
    if (r)
      return this.asyncResult = !0, r.then(() => this.flush(e));
    const n = [], {
      timeOffset: o
    } = i;
    if (s) {
      const d = s.flush();
      d && n.push(this.push(d.buffer, null, e));
    }
    const {
      demuxer: c,
      remuxer: l
    } = this;
    if (!c || !l) {
      t.executeEnd = Xe();
      const d = [Qs(e)];
      return this.asyncResult ? Promise.resolve(d) : d;
    }
    const u = c.flush(o);
    return qt(u) ? (this.asyncResult = !0, u.then((d) => (this.flushRemux(n, d, e), n))) : (this.flushRemux(n, u, e), this.asyncResult ? Promise.resolve(n) : n);
  }
  flushRemux(e, t, s) {
    const {
      audioTrack: i,
      videoTrack: r,
      id3Track: n,
      textTrack: o
    } = t, {
      accurateTimeOffset: c,
      timeOffset: l
    } = this.currentTransmuxState;
    this.logger.log(`[transmuxer.ts]: Flushed ${this.id} sn: ${s.sn}${s.part > -1 ? " part: " + s.part : ""} of ${this.id === G.MAIN ? "level" : "track"} ${s.level}`);
    const u = this.remuxer.remux(i, r, n, o, l, c, !0, this.id);
    e.push({
      remuxResult: u,
      chunkMeta: s
    }), s.transmuxing.executeEnd = Xe();
  }
  resetInitialTimestamp(e) {
    const {
      demuxer: t,
      remuxer: s
    } = this;
    !t || !s || (t.resetTimeStamp(e), s.resetTimeStamp(e));
  }
  resetContiguity() {
    const {
      demuxer: e,
      remuxer: t
    } = this;
    !e || !t || (e.resetContiguity(), t.resetNextTimestamp());
  }
  resetInitSegment(e, t, s, i, r) {
    const {
      demuxer: n,
      remuxer: o
    } = this;
    !n || !o || (n.resetInitSegment(e, t, s, i), o.resetInitSegment(e, t, s, r));
  }
  destroy() {
    this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0);
  }
  transmux(e, t, s, i, r) {
    let n;
    return t && t.method === "SAMPLE-AES" ? n = this.transmuxSampleAes(e, t, s, i, r) : n = this.transmuxUnencrypted(e, s, i, r), n;
  }
  transmuxUnencrypted(e, t, s, i) {
    const {
      audioTrack: r,
      videoTrack: n,
      id3Track: o,
      textTrack: c
    } = this.demuxer.demux(e, t, !1, !this.config.progressive);
    return {
      remuxResult: this.remuxer.remux(r, n, o, c, t, s, !1, this.id),
      chunkMeta: i
    };
  }
  transmuxSampleAes(e, t, s, i, r) {
    return this.demuxer.demuxSampleAes(e, t, s).then((n) => ({
      remuxResult: this.remuxer.remux(n.audioTrack, n.videoTrack, n.id3Track, n.textTrack, s, i, !1, this.id),
      chunkMeta: r
    }));
  }
  configureTransmuxer(e) {
    const {
      config: t,
      observer: s,
      typeSupported: i
    } = this;
    let r;
    for (let d = 0, h = ms.length; d < h; d++) {
      var n;
      if ((n = ms[d].demux) != null && n.probe(e, this.logger)) {
        r = ms[d];
        break;
      }
    }
    if (!r)
      return new Error("Failed to find demuxer by probing fragment data");
    const o = this.demuxer, c = this.remuxer, l = r.remux, u = r.demux;
    (!c || !(c instanceof l)) && (this.remuxer = new l(s, t, i, this.logger)), (!o || !(o instanceof u)) && (this.demuxer = new u(s, t, i, this.logger), this.probe = u.probe);
  }
  needsProbing(e, t) {
    return !this.demuxer || !this.remuxer || e || t;
  }
  getDecrypter() {
    let e = this.decrypter;
    return e || (e = this.decrypter = new Mi(this.config)), e;
  }
}
function Mc(a, e) {
  let t = null;
  return a.byteLength > 0 && (e == null ? void 0 : e.key) != null && e.iv !== null && e.method != null && (t = e), t;
}
const Qs = (a) => ({
  remuxResult: {},
  chunkMeta: a
});
function qt(a) {
  return "then" in a && a.then instanceof Function;
}
class Nc {
  constructor(e, t, s, i, r) {
    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = s, this.duration = i, this.defaultInitPts = r || null;
  }
}
class Bc {
  constructor(e, t, s, i, r, n) {
    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = s, this.trackSwitch = i, this.timeOffset = r, this.initSegmentChange = n;
  }
}
let Xr = 0;
class Ia {
  constructor(e, t, s, i) {
    this.error = null, this.hls = void 0, this.id = void 0, this.instanceNo = Xr++, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.onWorkerMessage = (c) => {
      const l = c.data, u = this.hls;
      if (!(!u || !(l != null && l.event) || l.instanceNo !== this.instanceNo))
        switch (l.event) {
          case "init": {
            var d;
            const h = (d = this.workerContext) == null ? void 0 : d.objectURL;
            h && self.URL.revokeObjectURL(h);
            break;
          }
          case "transmuxComplete": {
            this.handleTransmuxComplete(l.data);
            break;
          }
          case "flush": {
            this.onFlush(l.data);
            break;
          }
          case "workerLog": {
            u.logger[l.data.logType] && u.logger[l.data.logType](l.data.message);
            break;
          }
          default: {
            l.data = l.data || {}, l.data.frag = this.frag, l.data.part = this.part, l.data.id = this.id, u.trigger(l.event, l.data);
            break;
          }
        }
    }, this.onWorkerError = (c) => {
      if (!this.hls)
        return;
      const l = new Error(`${c.message}  (${c.filename}:${c.lineno})`);
      this.hls.config.enableWorker = !1, this.hls.logger.warn(`Error in "${this.id}" Web Worker, fallback to inline`), this.hls.trigger(m.ERROR, {
        type: H.OTHER_ERROR,
        details: R.INTERNAL_EXCEPTION,
        fatal: !1,
        event: "demuxerWorker",
        error: l
      });
    };
    const r = e.config;
    this.hls = e, this.id = t, this.useWorker = !!r.enableWorker, this.onTransmuxComplete = s, this.onFlush = i;
    const n = (c, l) => {
      l = l || {}, l.frag = this.frag || void 0, c === m.ERROR && (l = l, l.parent = this.id, l.part = this.part, this.error = l.error), this.hls.trigger(c, l);
    };
    this.observer = new Gi(), this.observer.on(m.FRAG_DECRYPTED, n), this.observer.on(m.ERROR, n);
    const o = hr(r.preferManagedMediaSource);
    if (this.useWorker && typeof Worker < "u") {
      const c = this.hls.logger;
      if (r.workerPath || Gl()) {
        try {
          r.workerPath ? (c.log(`loading Web Worker ${r.workerPath} for "${t}"`), this.workerContext = Kl(r.workerPath)) : (c.log(`injecting Web Worker for "${t}"`), this.workerContext = Vl());
          const {
            worker: u
          } = this.workerContext;
          u.addEventListener("message", this.onWorkerMessage), u.addEventListener("error", this.onWorkerError), u.postMessage({
            instanceNo: this.instanceNo,
            cmd: "init",
            typeSupported: o,
            id: t,
            config: ue(r)
          });
        } catch (u) {
          c.warn(`Error setting up "${t}" Web Worker, fallback to inline`, u), this.terminateWorker(), this.error = null, this.transmuxer = new zr(this.observer, o, r, "", t, e.logger);
        }
        return;
      }
    }
    this.transmuxer = new zr(this.observer, o, r, "", t, e.logger);
  }
  reset() {
    if (this.frag = null, this.part = null, this.workerContext) {
      const e = this.instanceNo;
      this.instanceNo = Xr++;
      const t = this.hls.config, s = hr(t.preferManagedMediaSource);
      this.workerContext.worker.postMessage({
        instanceNo: this.instanceNo,
        cmd: "reset",
        resetNo: e,
        typeSupported: s,
        id: this.id,
        config: ue(t)
      });
    }
  }
  terminateWorker() {
    if (this.workerContext) {
      const {
        worker: e
      } = this.workerContext;
      this.workerContext = null, e.removeEventListener("message", this.onWorkerMessage), e.removeEventListener("error", this.onWorkerError), Hl(this.hls.config.workerPath);
    }
  }
  destroy() {
    if (this.workerContext)
      this.terminateWorker(), this.onWorkerMessage = this.onWorkerError = null;
    else {
      const t = this.transmuxer;
      t && (t.destroy(), this.transmuxer = null);
    }
    const e = this.observer;
    e && e.removeAllListeners(), this.frag = null, this.part = null, this.observer = null, this.hls = null;
  }
  push(e, t, s, i, r, n, o, c, l, u) {
    var d, h;
    l.transmuxing.start = self.performance.now();
    const {
      instanceNo: f,
      transmuxer: g
    } = this, y = n ? n.start : r.start, p = r.decryptdata, E = this.frag, v = !(E && r.cc === E.cc), T = !(E && l.level === E.level), S = E ? l.sn - E.sn : -1, x = this.part ? l.part - this.part.index : -1, _ = S === 0 && l.id > 1 && l.id === (E == null ? void 0 : E.stats.chunkCount), A = !T && (S === 1 || S === 0 && (x === 1 || _ && x <= 0)), b = self.performance.now();
    (T || S || r.stats.parsing.start === 0) && (r.stats.parsing.start = b), n && (x || !A) && (n.stats.parsing.start = b);
    const C = !(E && ((d = r.initSegment) == null ? void 0 : d.url) === ((h = E.initSegment) == null ? void 0 : h.url)), L = new Bc(v, A, c, T, y, C);
    if (!A || v || C) {
      this.hls.logger.log(`[transmuxer-interface]: Starting new transmux session for ${r.type} sn: ${l.sn}${l.part > -1 ? " part: " + l.part : ""} ${this.id === G.MAIN ? "level" : "track"}: ${l.level} id: ${l.id}
        discontinuity: ${v}
        trackSwitch: ${T}
        contiguous: ${A}
        accurateTimeOffset: ${c}
        timeOffset: ${y}
        initSegmentChange: ${C}`);
      const w = new Nc(s, i, t, o, u);
      this.configureTransmuxer(w);
    }
    if (this.frag = r, this.part = n, this.workerContext)
      this.workerContext.worker.postMessage({
        instanceNo: f,
        cmd: "demux",
        data: e,
        decryptdata: p,
        chunkMeta: l,
        state: L
      }, e instanceof ArrayBuffer ? [e] : []);
    else if (g) {
      const w = g.push(e, p, l, L);
      qt(w) ? w.then((F) => {
        this.handleTransmuxComplete(F);
      }).catch((F) => {
        this.transmuxerError(F, l, "transmuxer-interface push error");
      }) : this.handleTransmuxComplete(w);
    }
  }
  flush(e) {
    e.transmuxing.start = self.performance.now();
    const {
      instanceNo: t,
      transmuxer: s
    } = this;
    if (this.workerContext)
      this.workerContext.worker.postMessage({
        instanceNo: t,
        cmd: "flush",
        chunkMeta: e
      });
    else if (s) {
      const i = s.flush(e);
      qt(i) ? i.then((r) => {
        this.handleFlushResult(r, e);
      }).catch((r) => {
        this.transmuxerError(r, e, "transmuxer-interface flush error");
      }) : this.handleFlushResult(i, e);
    }
  }
  transmuxerError(e, t, s) {
    this.hls && (this.error = e, this.hls.trigger(m.ERROR, {
      type: H.MEDIA_ERROR,
      details: R.FRAG_PARSING_ERROR,
      chunkMeta: t,
      frag: this.frag || void 0,
      part: this.part || void 0,
      fatal: !1,
      error: e,
      err: e,
      reason: s
    }));
  }
  handleFlushResult(e, t) {
    e.forEach((s) => {
      this.handleTransmuxComplete(s);
    }), this.onFlush(t);
  }
  configureTransmuxer(e) {
    const {
      instanceNo: t,
      transmuxer: s
    } = this;
    this.workerContext ? this.workerContext.worker.postMessage({
      instanceNo: t,
      cmd: "configure",
      config: e
    }) : s && s.configure(e);
  }
  handleTransmuxComplete(e) {
    e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e);
  }
}
const Qr = 100;
class Uc extends $i {
  constructor(e, t, s) {
    super(e, t, s, "audio-stream-controller", G.AUDIO), this.mainAnchor = null, this.mainFragLoading = null, this.audioOnly = !1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.flushing = !1, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this.registerListeners();
  }
  onHandlerDestroying() {
    this.unregisterListeners(), super.onHandlerDestroying(), this.resetItem();
  }
  resetItem() {
    this.mainDetails = this.mainAnchor = this.mainFragLoading = this.bufferedTrack = this.switchingTrack = this.waitingData = this.cachedTrackLoadedData = null;
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(m.BUFFER_RESET, this.onBufferReset, this), e.on(m.BUFFER_CREATED, this.onBufferCreated, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(m.FRAG_LOADING, this.onFragLoading, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (super.unregisterListeners(), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(m.BUFFER_RESET, this.onBufferReset, this), e.off(m.BUFFER_CREATED, this.onBufferCreated, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(m.FRAG_LOADING, this.onFragLoading, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this));
  }
  // INIT_PTS_FOUND is triggered when the video track parsed in the stream-controller has a new PTS value
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: i,
    timescale: r
  }) {
    if (s === G.MAIN) {
      const n = t.cc, o = this.fragCurrent;
      if (this.initPTS[n] = {
        baseTime: i,
        timescale: r
      }, this.log(`InitPTS for cc: ${n} found from main: ${i}/${r}`), this.mainAnchor = t, this.state === P.WAITING_INIT_PTS) {
        const c = this.waitingData;
        (!c && !this.loadingParts || c && c.frag.cc !== n) && (this.nextLoadPosition = this.findSyncFrag(t).start), this.tick();
      } else
        !this.hls.hasEnoughToStart && o && o.cc !== n ? (this.startFragRequested = !1, this.nextLoadPosition = this.findSyncFrag(t).start, o.abortRequests(), this.resetLoadingState()) : this.state === P.IDLE && this.tick();
    }
  }
  findSyncFrag(e) {
    const t = this.getLevelDetails(), s = e.cc;
    return tl(t, s, e) || t && Hn(t.fragments, s) || e;
  }
  startLoad(e, t) {
    if (!this.levels) {
      this.startPosition = e, this.state = P.STOPPED;
      return;
    }
    const s = this.lastCurrentTime;
    this.stopLoad(), this.setInterval(Qr), s > 0 && e === -1 ? (this.log(`Override startPosition with lastCurrentTime @${s.toFixed(3)}`), e = s, this.state = P.IDLE) : this.state = P.WAITING_TRACK, this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
  }
  doTick() {
    switch (this.state) {
      case P.IDLE:
        this.doTickIdle();
        break;
      case P.WAITING_TRACK: {
        const {
          levels: t,
          trackId: s
        } = this, i = t == null ? void 0 : t[s], r = i == null ? void 0 : i.details;
        if (r && !this.waitForLive(i)) {
          if (this.waitForCdnTuneIn(r))
            break;
          this.state = P.WAITING_INIT_PTS;
        }
        break;
      }
      case P.FRAG_LOADING_WAITING_RETRY: {
        var e;
        const t = performance.now(), s = this.retryDate;
        if (!s || t >= s || (e = this.media) != null && e.seeking) {
          const {
            levels: i,
            trackId: r
          } = this;
          this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded((i == null ? void 0 : i[r]) || null), this.state = P.IDLE;
        }
        break;
      }
      case P.WAITING_INIT_PTS: {
        const t = this.waitingData;
        if (t) {
          const {
            frag: s,
            part: i,
            cache: r,
            complete: n
          } = t, o = this.mainAnchor;
          if (this.initPTS[s.cc] !== void 0) {
            this.waitingData = null, this.state = P.FRAG_LOADING;
            const c = r.flush().buffer, l = {
              frag: s,
              part: i,
              payload: c,
              networkDetails: null
            };
            this._handleFragmentLoadProgress(l), n && super._handleFragmentLoadComplete(l);
          } else
            o && o.cc !== t.frag.cc && (this.log(`Waiting fragment cc (${s.cc}) cancelled because video is at cc ${o.cc}`), this.nextLoadPosition = this.findSyncFrag(o).start, this.clearWaitingFragment());
        } else
          this.state = P.IDLE;
      }
    }
    this.onTickEnd();
  }
  clearWaitingFragment() {
    const e = this.waitingData;
    e && (this.hls.hasEnoughToStart || (this.startFragRequested = !1), this.fragmentTracker.removeFragment(e.frag), this.waitingData = null, this.state !== P.STOPPED && (this.state = P.IDLE));
  }
  resetLoadingState() {
    this.clearWaitingFragment(), super.resetLoadingState();
  }
  onTickEnd() {
    const {
      media: e
    } = this;
    e != null && e.readyState && (this.lastCurrentTime = e.currentTime);
  }
  doTickIdle() {
    var e;
    const {
      hls: t,
      levels: s,
      media: i,
      trackId: r
    } = this, n = t.config;
    if (!this.buffering || !i && !this.primaryPrefetch && (this.startFragRequested || !n.startFragPrefetch) || !(s != null && s[r]))
      return;
    const o = s[r], c = o.details;
    if (!c || this.waitForLive(o) || this.waitForCdnTuneIn(c)) {
      this.state = P.WAITING_TRACK, this.startFragRequested = !1;
      return;
    }
    const l = this.mediaBuffer ? this.mediaBuffer : this.media;
    this.bufferFlushed && l && (this.bufferFlushed = !1, this.afterBufferFlushed(l, ae.AUDIO, G.AUDIO));
    const u = this.getFwdBufferInfo(l, G.AUDIO);
    if (u === null)
      return;
    if (!this.switchingTrack && this._streamEnded(u, c)) {
      t.trigger(m.BUFFER_EOS, {
        type: "audio"
      }), this.state = P.ENDED;
      return;
    }
    const d = u.len, h = t.maxBufferLength, f = c.fragments, g = f[0].start, y = this.getLoadPosition(), p = this.flushing ? y : u.end;
    if (this.switchingTrack && i) {
      const T = y;
      c.PTSKnown && T < g && (u.end > g || u.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), i.currentTime = g + 0.05);
    }
    if (d >= h && !this.switchingTrack && p < f[f.length - 1].start)
      return;
    let E = this.getNextFragment(p, c);
    if (E && this.isLoopLoading(E, p) && (E = this.getNextFragmentLoopLoading(E, c, u, G.MAIN, h)), !E) {
      this.bufferFlushed = !0;
      return;
    }
    let v = ((e = this.mainFragLoading) == null ? void 0 : e.frag) || null;
    if (!this.audioOnly && this.startFragRequested && v && ye(E) && !E.endList && (!c.live || !this.loadingParts && p < this.hls.liveSyncPosition) && (this.fragmentTracker.getState(v) === ge.OK && (this.mainFragLoading = v = null), v && ye(v))) {
      if (E.start > v.end) {
        const S = this.fragmentTracker.getFragAtPos(p, G.MAIN);
        S && S.end > v.end && (v = S, this.mainFragLoading = {
          frag: S,
          targetBufferTime: null
        });
      }
      if (E.start > v.end)
        return;
    }
    this.loadFragment(E, o, p);
  }
  onMediaDetaching(e, t) {
    this.bufferFlushed = this.flushing = !1, super.onMediaDetaching(e, t);
  }
  onAudioTracksUpdated(e, {
    audioTracks: t
  }) {
    this.resetTransmuxer(), this.levels = t.map((s) => new Vt(s));
  }
  onAudioTrackSwitching(e, t) {
    const s = !!t.url;
    this.trackId = t.id;
    const {
      fragCurrent: i
    } = this;
    i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)), this.resetLoadingState(), s ? (this.switchingTrack = t, this.flushAudioIfNeeded(t), this.state !== P.STOPPED && (this.setInterval(Qr), this.state = P.IDLE, this.tick())) : (this.resetTransmuxer(), this.switchingTrack = null, this.bufferedTrack = t, this.clearInterval());
  }
  onManifestLoading() {
    super.onManifestLoading(), this.bufferFlushed = this.flushing = this.audioOnly = !1, this.resetItem(), this.trackId = -1;
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
    const s = this.cachedTrackLoadedData;
    s && (this.cachedTrackLoadedData = null, this.onAudioTrackLoaded(m.AUDIO_TRACK_LOADED, s));
  }
  onAudioTrackLoaded(e, t) {
    var s;
    const {
      levels: i
    } = this, {
      details: r,
      id: n,
      groupId: o,
      track: c
    } = t;
    if (!i) {
      this.warn(`Audio tracks reset while loading track ${n} "${c.name}" of "${o}"`);
      return;
    }
    const l = this.mainDetails;
    if (!l || r.endCC > l.endCC || l.expired) {
      this.cachedTrackLoadedData = t, this.state !== P.STOPPED && (this.state = P.WAITING_TRACK);
      return;
    }
    this.cachedTrackLoadedData = null, this.log(`Audio track ${n} "${c.name}" of "${o}" loaded [${r.startSN},${r.endSN}]${r.lastPartSn ? `[part-${r.lastPartSn}-${r.lastPartIndex}]` : ""},duration:${r.totalduration}`);
    const u = i[n];
    let d = 0;
    if (r.live || (s = u.details) != null && s.live) {
      if (this.checkLiveUpdate(r), r.deltaUpdateFailed)
        return;
      if (u.details) {
        var h;
        d = this.alignPlaylists(r, u.details, (h = this.levelLastLoaded) == null ? void 0 : h.details);
      }
      r.alignedSliding || (ra(r, l), r.alignedSliding || Cs(r, l), d = r.fragmentStart);
    }
    u.details = r, this.levelLastLoaded = u, this.startFragRequested || this.setStartPosition(l, d), this.hls.trigger(m.AUDIO_TRACK_UPDATED, {
      details: r,
      id: n,
      groupId: t.groupId
    }), this.state === P.WAITING_TRACK && !this.waitForCdnTuneIn(r) && (this.state = P.IDLE), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const s = e.frag, {
      part: i,
      payload: r
    } = e, {
      config: n,
      trackId: o,
      levels: c
    } = this;
    if (!c) {
      this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const l = c[o];
    if (!l) {
      this.warn("Audio track is undefined on fragment load progress");
      return;
    }
    const u = l.details;
    if (!u) {
      this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(s.start);
      return;
    }
    const d = n.defaultAudioCodec || l.audioCodec || "mp4a.40.2";
    let h = this.transmuxer;
    h || (h = this.transmuxer = new Ia(this.hls, G.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
    const f = this.initPTS[s.cc], g = (t = s.initSegment) == null ? void 0 : t.data;
    if (f !== void 0) {
      const p = i ? i.index : -1, E = p !== -1, v = new Ni(s.level, s.sn, s.stats.chunkCount, r.byteLength, p, E);
      h.push(r, g, d, "", s, i, u.totalduration, !1, v, f);
    } else {
      this.log(`Unknown video PTS for cc ${s.cc}, waiting for video PTS before demuxing audio frag ${s.sn} of [${u.startSN} ,${u.endSN}],track ${o}`);
      const {
        cache: y
      } = this.waitingData = this.waitingData || {
        frag: s,
        part: i,
        cache: new na(),
        complete: !1
      };
      y.push(new Uint8Array(r)), this.state !== P.STOPPED && (this.state = P.WAITING_INIT_PTS);
    }
  }
  _handleFragmentLoadComplete(e) {
    if (this.waitingData) {
      this.waitingData.complete = !0;
      return;
    }
    super._handleFragmentLoadComplete(e);
  }
  onBufferReset() {
    this.mediaBuffer = null;
  }
  onBufferCreated(e, t) {
    this.bufferFlushed = this.flushing = !1;
    const s = t.tracks.audio;
    s && (this.mediaBuffer = s.buffer || null);
  }
  onFragLoading(e, t) {
    !this.audioOnly && t.frag.type === G.MAIN && ye(t.frag) && (this.mainFragLoading = t, this.state === P.IDLE && this.tick());
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t;
    if (s.type !== G.AUDIO) {
      !this.audioOnly && s.type === G.MAIN && !s.elementaryStreams.video && !s.elementaryStreams.audiovideo && (this.audioOnly = !0, this.mainFragLoading = null);
      return;
    }
    if (this.fragContextChanged(s)) {
      this.warn(`Fragment ${s.sn}${i ? " p: " + i.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`);
      return;
    }
    if (ye(s)) {
      this.fragPrevious = s;
      const r = this.switchingTrack;
      r && (this.bufferedTrack = r, this.switchingTrack = null, this.hls.trigger(m.AUDIO_TRACK_SWITCHED, re({}, r)));
    }
    this.fragBufferedComplete(s, i), this.media && this.tick();
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = P.ERROR;
      return;
    }
    switch (t.details) {
      case R.FRAG_GAP:
      case R.FRAG_PARSING_ERROR:
      case R.FRAG_DECRYPT_ERROR:
      case R.FRAG_LOAD_ERROR:
      case R.FRAG_LOAD_TIMEOUT:
      case R.KEY_LOAD_ERROR:
      case R.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(G.AUDIO, t);
        break;
      case R.AUDIO_TRACK_LOAD_ERROR:
      case R.AUDIO_TRACK_LOAD_TIMEOUT:
      case R.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === P.WAITING_TRACK && ((s = t.context) == null ? void 0 : s.type) === Q.AUDIO_TRACK && (this.state = P.IDLE);
        break;
      case R.BUFFER_ADD_CODEC_ERROR:
      case R.BUFFER_APPEND_ERROR:
        if (t.parent !== "audio")
          return;
        this.resetLoadingState();
        break;
      case R.BUFFER_FULL_ERROR:
        if (t.parent !== "audio")
          return;
        this.reduceLengthAndFlushBuffer(t) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
        break;
      case R.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onBufferFlushing(e, {
    type: t
  }) {
    t !== ae.VIDEO && (this.flushing = !0);
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== ae.VIDEO) {
      this.flushing = !1, this.bufferFlushed = !0, this.state === P.ENDED && (this.state = P.IDLE);
      const s = this.mediaBuffer || this.media;
      s && (this.afterBufferFlushed(s, t, G.AUDIO), this.tick());
    }
  }
  _handleTransmuxComplete(e) {
    var t;
    const s = "audio", {
      hls: i
    } = this, {
      remuxResult: r,
      chunkMeta: n
    } = e, o = this.getCurrentContext(n);
    if (!o) {
      this.resetWhenMissingContext(n);
      return;
    }
    const {
      frag: c,
      part: l,
      level: u
    } = o, {
      details: d
    } = u, {
      audio: h,
      text: f,
      id3: g,
      initSegment: y
    } = r;
    if (this.fragContextChanged(c) || !d) {
      this.fragmentTracker.removeFragment(c);
      return;
    }
    if (this.state = P.PARSING, this.switchingTrack && h && this.completeAudioSwitch(this.switchingTrack), y != null && y.tracks) {
      const p = c.initSegment || c;
      this._bufferInitSegment(u, y.tracks, p, n), i.trigger(m.FRAG_PARSING_INIT_SEGMENT, {
        frag: p,
        id: s,
        tracks: y.tracks
      });
    }
    if (h) {
      const {
        startPTS: p,
        endPTS: E,
        startDTS: v,
        endDTS: T
      } = h;
      l && (l.elementaryStreams[ae.AUDIO] = {
        startPTS: p,
        endPTS: E,
        startDTS: v,
        endDTS: T
      }), c.setElementaryStreamInfo(ae.AUDIO, p, E, v, T), this.bufferFragmentData(h, c, l, n);
    }
    if (g != null && (t = g.samples) != null && t.length) {
      const p = oe({
        id: s,
        frag: c,
        details: d
      }, g);
      i.trigger(m.FRAG_PARSING_METADATA, p);
    }
    if (f) {
      const p = oe({
        id: s,
        frag: c,
        details: d
      }, f);
      i.trigger(m.FRAG_PARSING_USERDATA, p);
    }
  }
  _bufferInitSegment(e, t, s, i) {
    if (this.state !== P.PARSING || (t.video && delete t.video, t.audiovideo && delete t.audiovideo, !t.audio))
      return;
    const r = t.audio;
    r.id = G.AUDIO;
    const n = e.audioCodec;
    this.log(`Init audio buffer, container:${r.container}, codecs[level/parsed]=[${n}/${r.codec}]`), n && n.split(",").length === 1 && (r.levelCodec = n), this.hls.trigger(m.BUFFER_CODECS, t);
    const o = r.initSegment;
    if (o != null && o.byteLength) {
      const c = {
        type: "audio",
        frag: s,
        part: null,
        chunkMeta: i,
        parent: s.type,
        data: o
      };
      this.hls.trigger(m.BUFFER_APPENDING, c);
    }
    this.tickImmediate();
  }
  loadFragment(e, t, s) {
    const i = this.fragmentTracker.getState(e);
    if (this.switchingTrack || i === ge.NOT_LOADED || i === ge.PARTIAL) {
      var r;
      if (!ye(e))
        this._loadInitSegment(e, t);
      else if ((r = t.details) != null && r.live && !this.initPTS[e.cc]) {
        this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`), this.state = P.WAITING_INIT_PTS;
        const n = this.mainDetails;
        n && n.fragmentStart !== t.details.fragmentStart && Cs(t.details, n);
      } else
        super.loadFragment(e, t, s);
    } else
      this.clearTrackerIfNeeded(e);
  }
  flushAudioIfNeeded(e) {
    if (this.media && this.bufferedTrack) {
      const {
        name: t,
        lang: s,
        assocLang: i,
        characteristics: r,
        audioCodec: n,
        channels: o
      } = this.bufferedTrack;
      yt({
        name: t,
        lang: s,
        assocLang: i,
        characteristics: r,
        audioCodec: n,
        channels: o
      }, e, ht) || (Rs(e.url, this.hls) ? (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"), this.bufferedTrack = null) : this.bufferedTrack = e);
    }
  }
  completeAudioSwitch(e) {
    const {
      hls: t
    } = this;
    this.flushAudioIfNeeded(e), this.bufferedTrack = e, this.switchingTrack = null, t.trigger(m.AUDIO_TRACK_SWITCHED, re({}, e));
  }
}
class ji extends Ze {
  constructor(e, t) {
    super(t, e.logger), this.hls = void 0, this.canLoad = !1, this.timer = -1, this.hls = e;
  }
  destroy() {
    this.clearTimer(), this.hls = this.log = this.warn = null;
  }
  clearTimer() {
    this.timer !== -1 && (self.clearTimeout(this.timer), this.timer = -1);
  }
  startLoad() {
    this.canLoad = !0, this.loadPlaylist();
  }
  stopLoad() {
    this.canLoad = !1, this.clearTimer();
  }
  switchParams(e, t, s) {
    const i = t == null ? void 0 : t.renditionReports;
    if (i) {
      let r = -1;
      for (let n = 0; n < i.length; n++) {
        const o = i[n];
        let c;
        try {
          c = new self.URL(o.URI, t.url).href;
        } catch (l) {
          this.warn(`Could not construct new URL for Rendition Report: ${l}`), c = o.URI || "";
        }
        if (c === e) {
          r = n;
          break;
        } else
          c === e.substring(0, c.length) && (r = n);
      }
      if (r !== -1) {
        const n = i[r], o = parseInt(n["LAST-MSN"]) || (t == null ? void 0 : t.lastPartSn);
        let c = parseInt(n["LAST-PART"]) || (t == null ? void 0 : t.lastPartIndex);
        if (this.hls.config.lowLatencyMode) {
          const u = Math.min(t.age - t.partTarget, t.targetduration);
          c >= 0 && u > t.partTarget && (c += 1);
        }
        const l = s && gr(s);
        return new mr(o, c >= 0 ? c : void 0, l);
      }
    }
  }
  loadPlaylist(e) {
    this.clearTimer();
  }
  loadingPlaylist(e, t) {
    this.clearTimer();
  }
  shouldLoadPlaylist(e) {
    return this.canLoad && !!e && !!e.url && (!e.details || e.details.live);
  }
  getUrlWithDirectives(e, t) {
    if (t)
      try {
        return t.addDirectives(e);
      } catch (s) {
        this.warn(`Could not construct new URL with HLS Delivery Directives: ${s}`);
      }
    return e;
  }
  playlistLoaded(e, t, s) {
    const {
      details: i,
      stats: r
    } = t, n = self.performance.now(), o = r.loading.first ? Math.max(0, n - r.loading.first) : 0;
    i.advancedDateTime = Date.now() - o;
    const c = this.hls.config.timelineOffset;
    if (c !== i.appliedTimelineOffset) {
      const u = Math.max(c || 0, 0);
      i.appliedTimelineOffset = u, i.fragments.forEach((d) => {
        d.start = d.playlistOffset + u;
      });
    }
    if (i.live || s != null && s.live) {
      const u = "levelInfo" in t ? t.levelInfo : t.track;
      if (i.reloaded(s), s && i.fragments.length > 0) {
        Pl(s, i);
        const v = i.playlistParsingError;
        if (v) {
          this.warn(v);
          const T = this.hls;
          if (!T.config.ignorePlaylistParsingErrors) {
            var l;
            const {
              networkDetails: S
            } = t;
            T.trigger(m.ERROR, {
              type: H.NETWORK_ERROR,
              details: R.LEVEL_PARSING_ERROR,
              fatal: !1,
              url: i.url,
              error: v,
              reason: v.message,
              level: t.level || void 0,
              parent: (l = i.fragments[0]) == null ? void 0 : l.type,
              networkDetails: S,
              stats: r
            });
            return;
          }
          i.playlistParsingError = null;
        }
      }
      i.requestScheduled === -1 && (i.requestScheduled = r.loading.start);
      const d = this.hls.mainForwardBufferInfo, h = d ? d.end - d.len : 0, f = (i.edge - h) * 1e3, g = Jn(i, f);
      if (i.requestScheduled + g < n ? i.requestScheduled = n : i.requestScheduled += g, this.log(`live playlist ${e} ${i.advanced ? "REFRESHED " + i.lastPartSn + "-" + i.lastPartIndex : i.updated ? "UPDATED" : "MISSED"}`), !this.canLoad || !i.live)
        return;
      let y, p, E;
      if (i.canBlockReload && i.endSN && i.advanced) {
        const v = this.hls.config.lowLatencyMode, T = i.lastPartSn, S = i.endSN, x = i.lastPartIndex, _ = x !== -1, A = T === S;
        _ ? A ? (p = S + 1, E = v ? 0 : x) : (p = T, E = v ? x + 1 : i.maxPartIndex) : p = S + 1;
        const b = i.age, C = b + i.ageHeader;
        let L = Math.min(C - i.partTarget, i.targetduration * 1.5);
        if (L > 0) {
          if (C > i.targetduration * 3)
            this.log(`Playlist last advanced ${b.toFixed(2)}s ago. Omitting segment and part directives.`), p = void 0, E = void 0;
          else if (s != null && s.tuneInGoal && C - i.partTarget > s.tuneInGoal)
            this.warn(`CDN Tune-in goal increased from: ${s.tuneInGoal} to: ${L} with playlist age: ${i.age}`), L = 0;
          else {
            const w = Math.floor(L / i.targetduration);
            if (p += w, E !== void 0) {
              const F = Math.round(L % i.targetduration / i.partTarget);
              E += F;
            }
            this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${b.toFixed(2)}s goal: ${L} skip sn ${w} to part ${E}`);
          }
          i.tuneInGoal = L;
        }
        if (y = this.getDeliveryDirectives(i, t.deliveryDirectives, p, E), v || !A) {
          i.requestScheduled = n, this.loadingPlaylist(u, y);
          return;
        }
      } else
        (i.canBlockReload || i.canSkipUntil) && (y = this.getDeliveryDirectives(i, t.deliveryDirectives, p, E));
      y && p !== void 0 && i.canBlockReload && (i.requestScheduled = r.loading.first + Math.max(g - o * 2, g / 2)), this.scheduleLoading(u, y, i);
    } else
      this.clearTimer();
  }
  scheduleLoading(e, t, s) {
    const i = s || e.details;
    if (!i) {
      this.loadingPlaylist(e, t);
      return;
    }
    const r = self.performance.now(), n = i.requestScheduled;
    if (r >= n) {
      this.loadingPlaylist(e, t);
      return;
    }
    const o = n - r;
    this.log(`reload live playlist ${e.name || e.bitrate + "bps"} in ${Math.round(o)} ms`), this.clearTimer(), this.timer = self.setTimeout(() => this.loadingPlaylist(e, t), o);
  }
  getDeliveryDirectives(e, t, s, i) {
    let r = gr(e);
    return t != null && t.skip && e.deltaUpdateFailed && (s = t.msn, i = t.part, r = fs.No), new mr(s, i, r);
  }
  checkRetry(e) {
    const t = e.details, s = bs(e), i = e.errorAction, {
      action: r,
      retryCount: n = 0,
      retryConfig: o
    } = i || {}, c = !!i && !!o && (r === Te.RetryRequest || !i.resolved && r === Te.SendAlternateToPenaltyBox);
    if (c) {
      var l;
      if (n >= o.maxNumRetry)
        return !1;
      if (s && (l = e.context) != null && l.deliveryDirectives)
        this.warn(`Retrying playlist loading ${n + 1}/${o.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
      else {
        const u = Fi(o, n);
        this.clearTimer(), this.timer = self.setTimeout(() => this.loadPlaylist(), u), this.warn(`Retrying playlist loading ${n + 1}/${o.maxNumRetry} after "${t}" in ${u}ms`);
      }
      e.levelRetry = !0, i.resolved = !0;
    }
    return c;
  }
}
function Ra(a, e) {
  if (a.length !== e.length)
    return !1;
  for (let t = 0; t < a.length; t++)
    if (!jt(a[t].attrs, e[t].attrs))
      return !1;
  return !0;
}
function jt(a, e, t) {
  const s = a["STABLE-RENDITION-ID"];
  return s && !t ? s === e["STABLE-RENDITION-ID"] : !(t || ["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED", "ASSOC-LANGUAGE"]).some((i) => a[i] !== e[i]);
}
function Si(a, e) {
  return e.label.toLowerCase() === a.name.toLowerCase() && (!e.language || e.language.toLowerCase() === (a.lang || "").toLowerCase());
}
class $c extends ji {
  constructor(e) {
    super(e, "audio-track-controller"), this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVEL_LOADING, this.onLevelLoading, this), e.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(m.ERROR, this.onError, this);
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, super.destroy();
  }
  onManifestLoading() {
    this.tracks = [], this.tracksInGroup = [], this.groupIds = null, this.currentTrack = null, this.trackId = -1, this.selectDefaultTrack = !0;
  }
  onManifestParsed(e, t) {
    this.tracks = t.audioTracks || [];
  }
  onAudioTrackLoaded(e, t) {
    const {
      id: s,
      groupId: i,
      details: r
    } = t, n = this.tracksInGroup[s];
    if (!n || n.groupId !== i) {
      this.warn(`Audio track with id:${s} and group:${i} not found in active group ${n == null ? void 0 : n.groupId}`);
      return;
    }
    const o = n.details;
    n.details = t.details, this.log(`Audio track ${s} "${n.name}" lang:${n.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const s = t.audioGroups || null, i = this.groupIds;
    let r = this.currentTrack;
    if (!s || (i == null ? void 0 : i.length) !== (s == null ? void 0 : s.length) || s != null && s.some((o) => (i == null ? void 0 : i.indexOf(o)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const o = this.tracks.filter((h) => !s || s.indexOf(h.groupId) !== -1);
      if (o.length)
        this.selectDefaultTrack && !o.some((h) => h.default) && (this.selectDefaultTrack = !1), o.forEach((h, f) => {
          h.id = f;
        });
      else if (!r && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = o;
      const c = this.hls.config.audioPreference;
      if (!r && c) {
        const h = Ke(c, o, ht);
        if (h > -1)
          r = o[h];
        else {
          const f = Ke(c, this.tracks);
          r = this.tracks[f];
        }
      }
      let l = this.findTrackId(r);
      l === -1 && r && (l = this.findTrackId(null));
      const u = {
        audioTracks: o
      };
      this.log(`Updating audio tracks, ${o.length} track(s) found in group(s): ${s == null ? void 0 : s.join(",")}`), this.hls.trigger(m.AUDIO_TRACKS_UPDATED, u);
      const d = this.trackId;
      if (l !== -1 && d === -1)
        this.setAudioTrack(l);
      else if (o.length && d === -1) {
        var n;
        const h = new Error(`No audio track selected for current audio group-ID(s): ${(n = this.groupIds) == null ? void 0 : n.join(",")} track count: ${o.length}`);
        this.warn(h.message), this.hls.trigger(m.ERROR, {
          type: H.MEDIA_ERROR,
          details: R.AUDIO_TRACK_LOAD_ERROR,
          fatal: !0,
          error: h
        });
      }
    }
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === Q.AUDIO_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t);
  }
  get allAudioTracks() {
    return this.tracks;
  }
  get audioTracks() {
    return this.tracksInGroup;
  }
  get audioTrack() {
    return this.trackId;
  }
  set audioTrack(e) {
    this.selectDefaultTrack = !1, this.setAudioTrack(e);
  }
  setAudioOption(e) {
    const t = this.hls;
    if (t.config.audioPreference = e, e) {
      const s = this.allAudioTracks;
      if (this.selectDefaultTrack = !1, s.length) {
        const i = this.currentTrack;
        if (i && yt(e, i, ht))
          return i;
        const r = Ke(e, this.tracksInGroup, ht);
        if (r > -1) {
          const n = this.tracksInGroup[r];
          return this.setAudioTrack(r), n;
        } else if (i) {
          let n = t.loadLevel;
          n === -1 && (n = t.firstAutoLevel);
          const o = Xo(e, t.levels, s, n, ht);
          if (o === -1)
            return null;
          t.nextLoadLevel = o;
        }
        if (e.channels || e.audioCodec) {
          const n = Ke(e, s);
          if (n > -1)
            return s[n];
        }
      }
    }
    return null;
  }
  setAudioTrack(e) {
    const t = this.tracksInGroup;
    if (e < 0 || e >= t.length) {
      this.warn(`Invalid audio track id: ${e}`);
      return;
    }
    this.selectDefaultTrack = !1;
    const s = this.currentTrack, i = t[e], r = i.details && !i.details.live;
    if (e === this.trackId && i === s && r || (this.log(`Switching to audio-track ${e} "${i.name}" lang:${i.lang} group:${i.groupId} channels:${i.channels}`), this.trackId = e, this.currentTrack = i, this.hls.trigger(m.AUDIO_TRACK_SWITCHING, re({}, i)), r))
      return;
    const n = this.switchParams(i.url, s == null ? void 0 : s.details, i.details);
    this.loadPlaylist(n);
  }
  findTrackId(e) {
    const t = this.tracksInGroup;
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      if (!(this.selectDefaultTrack && !i.default) && (!e || yt(e, i, ht)))
        return s;
    }
    if (e) {
      const {
        name: s,
        lang: i,
        assocLang: r,
        characteristics: n,
        audioCodec: o,
        channels: c
      } = e;
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (yt({
          name: s,
          lang: i,
          assocLang: r,
          characteristics: n,
          audioCodec: o,
          channels: c
        }, u, ht))
          return l;
      }
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (jt(e.attrs, u.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return l;
      }
      for (let l = 0; l < t.length; l++) {
        const u = t[l];
        if (jt(e.attrs, u.attrs, ["LANGUAGE"]))
          return l;
      }
    }
    return -1;
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentTrack;
    this.shouldLoadPlaylist(t) && Rs(t.url, this.hls) && this.scheduleLoading(t, e);
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    const s = e.id, i = e.groupId, r = this.getUrlWithDirectives(e.url, t), n = e.details, o = n == null ? void 0 : n.age;
    this.log(`Loading audio-track ${s} "${e.name}" lang:${e.lang} group:${i}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${o && n.live ? " age " + o.toFixed(1) + (n.type && " " + n.type || "") : ""} ${r}`), this.hls.trigger(m.AUDIO_TRACK_LOADING, {
      url: r,
      id: s,
      groupId: i,
      deliveryDirectives: t || null,
      track: e
    });
  }
}
class Gc {
  constructor(e) {
    this.tracks = void 0, this.queues = {
      video: [],
      audio: [],
      audiovideo: []
    }, this.tracks = e;
  }
  destroy() {
    this.tracks = this.queues = null;
  }
  append(e, t, s) {
    if (this.queues === null || this.tracks === null)
      return;
    const i = this.queues[t];
    i.push(e), i.length === 1 && !s && this.executeNext(t);
  }
  appendBlocker(e) {
    return new Promise((t) => {
      const s = {
        label: "async-blocker",
        execute: t,
        onStart: () => {
        },
        onComplete: () => {
        },
        onError: () => {
        }
      };
      this.append(s, e);
    });
  }
  prependBlocker(e) {
    return new Promise((t) => {
      if (this.queues) {
        const s = {
          label: "async-blocker-prepend",
          execute: t,
          onStart: () => {
          },
          onComplete: () => {
          },
          onError: () => {
          }
        };
        this.queues[e].unshift(s);
      }
    });
  }
  removeBlockers() {
    this.queues !== null && [this.queues.video, this.queues.audio, this.queues.audiovideo].forEach((e) => {
      var t;
      const s = (t = e[0]) == null ? void 0 : t.label;
      (s === "async-blocker" || s === "async-blocker-prepend") && (e[0].execute(), e.splice(0, 1));
    });
  }
  unblockAudio(e) {
    if (this.queues === null)
      return;
    this.queues.audio[0] === e && this.shiftAndExecuteNext("audio");
  }
  executeNext(e) {
    if (this.queues === null || this.tracks === null)
      return;
    const t = this.queues[e];
    if (t.length) {
      const i = t[0];
      try {
        i.execute();
      } catch (r) {
        var s;
        if (i.onError(r), this.queues === null || this.tracks === null)
          return;
        const n = (s = this.tracks[e]) == null ? void 0 : s.buffer;
        n != null && n.updating || this.shiftAndExecuteNext(e);
      }
    }
  }
  shiftAndExecuteNext(e) {
    this.queues !== null && (this.queues[e].shift(), this.executeNext(e));
  }
  current(e) {
    var t;
    return ((t = this.queues) == null ? void 0 : t[e][0]) || null;
  }
  toString() {
    const {
      queues: e,
      tracks: t
    } = this;
    return e === null || t === null ? "<destroyed>" : `
${this.list("video")}
${this.list("audio")}
${this.list("audiovideo")}}`;
  }
  list(e) {
    var t, s;
    return (t = this.queues) != null && t[e] || (s = this.tracks) != null && s[e] ? `${e}: (${this.listSbInfo(e)}) ${this.listOps(e)}` : "";
  }
  listSbInfo(e) {
    var t;
    const s = (t = this.tracks) == null ? void 0 : t[e], i = s == null ? void 0 : s.buffer;
    return i ? `SourceBuffer${i.updating ? " updating" : ""}${s.ended ? " ended" : ""}${s.ending ? " ending" : ""}` : "none";
  }
  listOps(e) {
    var t;
    return ((t = this.queues) == null ? void 0 : t[e].map((s) => s.label).join(", ")) || "";
  }
}
const Zr = /(avc[1234]|hvc1|hev1|dvh[1e]|vp09|av01)(?:\.[^.,]+)+/, ba = "HlsJsTrackRemovedError";
class Vc extends Error {
  constructor(e) {
    super(e), this.name = ba;
  }
}
class Kc extends Ze {
  constructor(e, t) {
    super("buffer-controller", e.logger), this.hls = void 0, this.fragmentTracker = void 0, this.details = null, this._objectUrl = null, this.operationQueue = null, this.bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0, this.appendSource = void 0, this.transferData = void 0, this.overrides = void 0, this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    }, this.tracks = {}, this.sourceBuffers = [[null, null], [null, null]], this._onEndStreaming = (s) => {
      var i;
      this.hls && ((i = this.mediaSource) == null ? void 0 : i.readyState) === "open" && this.hls.pauseBuffering();
    }, this._onStartStreaming = (s) => {
      this.hls && this.hls.resumeBuffering();
    }, this._onMediaSourceOpen = (s) => {
      const {
        media: i,
        mediaSource: r
      } = this;
      s && this.log("Media source opened"), !(!i || !r) && (r.removeEventListener("sourceopen", this._onMediaSourceOpen), i.removeEventListener("emptied", this._onMediaEmptied), this.updateDuration(), this.hls.trigger(m.MEDIA_ATTACHED, {
        media: i,
        mediaSource: r
      }), this.mediaSource !== null && this.checkPendingTracks());
    }, this._onMediaSourceClose = () => {
      this.log("Media source closed");
    }, this._onMediaSourceEnded = () => {
      this.log("Media source ended");
    }, this._onMediaEmptied = () => {
      const {
        mediaSrc: s,
        _objectUrl: i
      } = this;
      s !== i && this.error(`Media element src was set while attaching MediaSource (${i} > ${s})`);
    }, this.hls = e, this.fragmentTracker = t, this.appendSource = fo(nt(e.config.preferManagedMediaSource)), this.initTracks(), this.registerListeners();
  }
  hasSourceTypes() {
    return Object.keys(this.tracks).length > 0;
  }
  destroy() {
    this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.transferData = this.overrides = void 0, this.operationQueue && (this.operationQueue.destroy(), this.operationQueue = null), this.hls = this.fragmentTracker = null, this._onMediaSourceOpen = this._onMediaSourceClose = null, this._onMediaSourceEnded = null, this._onStartStreaming = this._onEndStreaming = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.BUFFER_RESET, this.onBufferReset, this), e.on(m.BUFFER_APPENDING, this.onBufferAppending, this), e.on(m.BUFFER_CODECS, this.onBufferCodecs, this), e.on(m.BUFFER_EOS, this.onBufferEos, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.FRAG_PARSED, this.onFragParsed, this), e.on(m.FRAG_CHANGED, this.onFragChanged, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.BUFFER_RESET, this.onBufferReset, this), e.off(m.BUFFER_APPENDING, this.onBufferAppending, this), e.off(m.BUFFER_CODECS, this.onBufferCodecs, this), e.off(m.BUFFER_EOS, this.onBufferEos, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.FRAG_PARSED, this.onFragParsed, this), e.off(m.FRAG_CHANGED, this.onFragChanged, this), e.off(m.ERROR, this.onError, this);
  }
  transferMedia() {
    const {
      media: e,
      mediaSource: t
    } = this;
    if (!e)
      return null;
    const s = {};
    if (this.operationQueue) {
      const r = this.isUpdating();
      r || this.operationQueue.removeBlockers();
      const n = this.isQueued();
      (r || n) && this.warn(`Transfering MediaSource with${n ? " operations in queue" : ""}${r ? " updating SourceBuffer(s)" : ""} ${this.operationQueue}`), this.operationQueue.destroy();
    }
    const i = this.transferData;
    return !this.sourceBufferCount && i && i.mediaSource === t ? oe(s, i.tracks) : this.sourceBuffers.forEach((r) => {
      const [n] = r;
      n && (s[n] = oe({}, this.tracks[n]), this.removeBuffer(n)), r[0] = r[1] = null;
    }), {
      media: e,
      mediaSource: t,
      tracks: s
    };
  }
  initTracks() {
    const e = {};
    this.sourceBuffers = [[null, null], [null, null]], this.tracks = e, this.resetQueue(), this.resetAppendErrors(), this.lastMpegAudioChunk = this.blockedAudioAppend = null, this.lastVideoAppendEnd = 0;
  }
  onManifestLoading() {
    this.bufferCodecEventsTotal = 0, this.details = null;
  }
  onManifestParsed(e, t) {
    var s;
    let i = 2;
    (t.audio && !t.video || !t.altAudio) && (i = 1), this.bufferCodecEventsTotal = i, this.log(`${i} bufferCodec event(s) expected.`), (s = this.transferData) != null && s.mediaSource && this.sourceBufferCount && i && this.bufferCreated();
  }
  onMediaAttaching(e, t) {
    const s = this.media = t.media, i = nt(this.appendSource);
    if (this.transferData = this.overrides = void 0, s && i) {
      const r = !!t.mediaSource;
      (r || t.overrides) && (this.transferData = t, this.overrides = t.overrides);
      const n = this.mediaSource = t.mediaSource || new i();
      if (this.assignMediaSource(n), r)
        this._objectUrl = s.src, this.attachTransferred();
      else {
        const o = this._objectUrl = self.URL.createObjectURL(n);
        if (this.appendSource)
          try {
            s.removeAttribute("src");
            const c = self.ManagedMediaSource;
            s.disableRemotePlayback = s.disableRemotePlayback || c && n instanceof c, Jr(s), Hc(s, o), s.load();
          } catch {
            s.src = o;
          }
        else
          s.src = o;
      }
      s.addEventListener("emptied", this._onMediaEmptied);
    }
  }
  assignMediaSource(e) {
    var t, s;
    this.log(`${((t = this.transferData) == null ? void 0 : t.mediaSource) === e ? "transferred" : "created"} media source: ${(s = e.constructor) == null ? void 0 : s.name}`), e.addEventListener("sourceopen", this._onMediaSourceOpen), e.addEventListener("sourceended", this._onMediaSourceEnded), e.addEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (e.addEventListener("startstreaming", this._onStartStreaming), e.addEventListener("endstreaming", this._onEndStreaming));
  }
  attachTransferred() {
    const e = this.media, t = this.transferData;
    if (!t || !e)
      return;
    const s = this.tracks, i = t.tracks, r = i ? Object.keys(i) : null, n = r ? r.length : 0, o = () => {
      this.media && this.mediaSourceOpenOrEnded && this._onMediaSourceOpen();
    };
    if (i && r && n) {
      if (!this.tracksReady) {
        this.hls.config.startFragPrefetch = !0, this.log("attachTransferred: waiting for SourceBuffer track info");
        return;
      }
      if (this.log(`attachTransferred: (bufferCodecEventsTotal ${this.bufferCodecEventsTotal})
required tracks: ${ue(s, (c, l) => c === "initSegment" ? void 0 : l)};
transfer tracks: ${ue(i, (c, l) => c === "initSegment" ? void 0 : l)}}`), !bn(i, s)) {
        t.mediaSource = null, t.tracks = void 0;
        const c = e.currentTime, l = this.details, u = Math.max(c, (l == null ? void 0 : l.fragments[0].start) || 0);
        if (u - c > 1) {
          this.log(`attachTransferred: waiting for playback to reach new tracks start time ${c} -> ${u}`);
          return;
        }
        this.warn(`attachTransferred: resetting MediaSource for incompatible tracks ("${Object.keys(i)}"->"${Object.keys(s)}") start time: ${u} currentTime: ${c}`), this.onMediaDetaching(m.MEDIA_DETACHING, {}), this.onMediaAttaching(m.MEDIA_ATTACHING, t), e.currentTime = u;
        return;
      }
      this.transferData = void 0, r.forEach((c) => {
        const l = c, u = i[l];
        if (u) {
          const d = u.buffer;
          if (d) {
            const h = this.fragmentTracker, f = u.id;
            if (h.hasFragments(f) || h.hasParts(f)) {
              const p = z.getBuffered(d);
              h.detectEvictedFragments(l, p, f, null, !0);
            }
            const g = Zs(l), y = [l, d];
            this.sourceBuffers[g] = y, d.updating && this.operationQueue && this.operationQueue.prependBlocker(l), this.trackSourceBuffer(l, u);
          }
        }
      }), o(), this.bufferCreated();
    } else
      this.log("attachTransferred: MediaSource w/o SourceBuffers"), o();
  }
  get mediaSourceOpenOrEnded() {
    var e;
    const t = (e = this.mediaSource) == null ? void 0 : e.readyState;
    return t === "open" || t === "ended";
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia;
    this.transferData = this.overrides = void 0;
    const {
      media: i,
      mediaSource: r,
      _objectUrl: n
    } = this;
    if (r) {
      if (this.log(`media source ${s ? "transferring" : "detaching"}`), s)
        this.sourceBuffers.forEach(([o]) => {
          o && this.removeBuffer(o);
        }), this.resetQueue();
      else {
        if (this.mediaSourceOpenOrEnded) {
          const o = r.readyState === "open";
          try {
            const c = r.sourceBuffers;
            for (let l = c.length; l--; )
              o && c[l].abort(), r.removeSourceBuffer(c[l]);
            o && r.endOfStream();
          } catch (c) {
            this.warn(`onMediaDetaching: ${c.message} while calling endOfStream`);
          }
        }
        this.sourceBufferCount && this.onBufferReset();
      }
      r.removeEventListener("sourceopen", this._onMediaSourceOpen), r.removeEventListener("sourceended", this._onMediaSourceEnded), r.removeEventListener("sourceclose", this._onMediaSourceClose), this.appendSource && (r.removeEventListener("startstreaming", this._onStartStreaming), r.removeEventListener("endstreaming", this._onEndStreaming)), this.mediaSource = null, this._objectUrl = null;
    }
    i && (i.removeEventListener("emptied", this._onMediaEmptied), s || (n && self.URL.revokeObjectURL(n), this.mediaSrc === n ? (i.removeAttribute("src"), this.appendSource && Jr(i), i.load()) : this.warn("media|source.src was changed by a third party - skip cleanup")), this.media = null), this.hls.trigger(m.MEDIA_DETACHED, t);
  }
  onBufferReset() {
    this.sourceBuffers.forEach(([e]) => {
      e && this.resetBuffer(e);
    }), this.initTracks();
  }
  resetBuffer(e) {
    var t;
    const s = (t = this.tracks[e]) == null ? void 0 : t.buffer;
    if (this.removeBuffer(e), s)
      try {
        var i;
        (i = this.mediaSource) != null && i.sourceBuffers.length && this.mediaSource.removeSourceBuffer(s);
      } catch (r) {
        this.warn(`onBufferReset ${e}`, r);
      }
    delete this.tracks[e];
  }
  removeBuffer(e) {
    this.removeBufferListeners(e), this.sourceBuffers[Zs(e)] = [null, null];
    const t = this.tracks[e];
    t && (t.buffer = void 0);
  }
  resetQueue() {
    this.operationQueue && this.operationQueue.destroy(), this.operationQueue = new Gc(this.tracks);
  }
  onBufferCodecs(e, t) {
    const s = this.tracks, i = Object.keys(t);
    this.log(`BUFFER_CODECS: "${i}" (current SB count ${this.sourceBufferCount})`);
    const r = "audiovideo" in t && (s.audio || s.video) || s.audiovideo && ("audio" in t || "video" in t), n = !r && this.sourceBufferCount && this.media && i.some((o) => !s[o]);
    if (r || n) {
      this.warn(`Unsupported transition between "${Object.keys(s)}" and "${i}" SourceBuffers`);
      return;
    }
    i.forEach((o) => {
      var c, l, u;
      const d = t[o], {
        id: h,
        codec: f,
        levelCodec: g,
        container: y,
        metadata: p,
        supplemental: E
      } = d;
      let v = s[o];
      const T = (c = this.transferData) == null || (l = c.tracks) == null ? void 0 : l[o], S = T != null && T.buffer ? T : v, x = (S == null ? void 0 : S.pendingCodec) || (S == null ? void 0 : S.codec), _ = S == null ? void 0 : S.levelCodec;
      v || (v = s[o] = {
        buffer: void 0,
        listeners: [],
        codec: f,
        supplemental: E,
        container: y,
        levelCodec: g,
        metadata: p,
        id: h
      });
      const A = hs(x, _), b = A == null ? void 0 : A.replace(Zr, "$1");
      let C = hs(f, g);
      const L = (u = C) == null ? void 0 : u.replace(Zr, "$1");
      C && A && b !== L && (o.slice(0, 5) === "audio" && (C = Ls(C, this.appendSource)), this.log(`switching codec ${x} to ${C}`), C !== (v.pendingCodec || v.codec) && (v.pendingCodec = C), v.container = y, this.appendChangeType(o, y, C));
    }), (this.tracksReady || this.sourceBufferCount) && (t.tracks = this.sourceBufferTracks), !this.sourceBufferCount && this.mediaSourceOpenOrEnded && this.checkPendingTracks();
  }
  get sourceBufferTracks() {
    return Object.keys(this.tracks).reduce((e, t) => {
      const s = this.tracks[t];
      return e[t] = {
        id: s.id,
        container: s.container,
        codec: s.codec,
        levelCodec: s.levelCodec
      }, e;
    }, {});
  }
  appendChangeType(e, t, s) {
    const i = `${t};codecs=${s}`, r = {
      label: `change-type=${i}`,
      execute: () => {
        const n = this.tracks[e];
        if (n) {
          const o = n.buffer;
          o != null && o.changeType && (this.log(`changing ${e} sourceBuffer type to ${i}`), o.changeType(i), n.codec = s, n.container = t);
        }
        this.shiftAndExecuteNext(e);
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (n) => {
        this.warn(`Failed to change ${e} SourceBuffer type`, n);
      }
    };
    this.append(r, e, this.isPending(this.tracks[e]));
  }
  blockAudio(e) {
    var t;
    const s = e.start, i = s + e.duration * 0.05;
    if (((t = this.fragmentTracker.getAppendedFrag(s, G.MAIN)) == null ? void 0 : t.gap) === !0)
      return;
    const n = {
      label: "block-audio",
      execute: () => {
        var o;
        const c = this.tracks.video;
        (this.lastVideoAppendEnd > i || c != null && c.buffer && z.isBuffered(c.buffer, i) || ((o = this.fragmentTracker.getAppendedFrag(i, G.MAIN)) == null ? void 0 : o.gap) === !0) && (this.blockedAudioAppend = null, this.shiftAndExecuteNext("audio"));
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (o) => {
        this.warn("Error executing block-audio operation", o);
      }
    };
    this.blockedAudioAppend = {
      op: n,
      frag: e
    }, this.append(n, "audio", !0);
  }
  unblockAudio() {
    const {
      blockedAudioAppend: e,
      operationQueue: t
    } = this;
    e && t && (this.blockedAudioAppend = null, t.unblockAudio(e.op));
  }
  onBufferAppending(e, t) {
    const {
      tracks: s
    } = this, {
      data: i,
      type: r,
      parent: n,
      frag: o,
      part: c,
      chunkMeta: l
    } = t, u = l.buffering[r], d = o.sn, h = self.performance.now();
    u.start = h;
    const f = o.stats.buffering, g = c ? c.stats.buffering : null;
    f.start === 0 && (f.start = h), g && g.start === 0 && (g.start = h);
    const y = s.audio;
    let p = !1;
    r === "audio" && (y == null ? void 0 : y.container) === "audio/mpeg" && (p = !this.lastMpegAudioChunk || l.id === 1 || this.lastMpegAudioChunk.sn !== l.sn, this.lastMpegAudioChunk = l);
    const E = this.tracks.video, v = E == null ? void 0 : E.buffer;
    if (v && d !== "initSegment") {
      const x = c || o, _ = this.blockedAudioAppend;
      if (r === "audio" && n !== "main" && !this.blockedAudioAppend) {
        const b = x.start + x.duration * 0.05, C = v.buffered, L = this.currentOp("video");
        !C.length && !L ? this.blockAudio(x) : !L && !z.isBuffered(v, b) && this.lastVideoAppendEnd < b && this.blockAudio(x);
      } else if (r === "video") {
        const A = x.end;
        if (_) {
          const b = _.frag.start;
          (A > b || A < this.lastVideoAppendEnd || z.isBuffered(v, b)) && this.unblockAudio();
        }
        this.lastVideoAppendEnd = A;
      }
    }
    const T = (c || o).start, S = {
      label: `append-${r}`,
      execute: () => {
        if (u.executeStart = self.performance.now(), p) {
          const x = this.tracks[r];
          if (x) {
            const _ = x.buffer;
            if (_) {
              const A = T - _.timestampOffset;
              Math.abs(A) >= 0.1 && (this.log(`Updating audio SourceBuffer timestampOffset to ${T} (delta: ${A}) sn: ${d})`), _.timestampOffset = T);
            }
          }
        }
        this.appendExecutor(i, r);
      },
      onStart: () => {
      },
      onComplete: () => {
        const x = self.performance.now();
        u.executeEnd = u.end = x, f.first === 0 && (f.first = x), g && g.first === 0 && (g.first = x);
        const _ = {};
        this.sourceBuffers.forEach(([A, b]) => {
          A && (_[A] = z.getBuffered(b));
        }), this.appendErrors[r] = 0, r === "audio" || r === "video" ? this.appendErrors.audiovideo = 0 : (this.appendErrors.audio = 0, this.appendErrors.video = 0), this.hls.trigger(m.BUFFER_APPENDED, {
          type: r,
          frag: o,
          part: c,
          chunkMeta: l,
          parent: o.type,
          timeRanges: _
        });
      },
      onError: (x) => {
        var _;
        const A = {
          type: H.MEDIA_ERROR,
          parent: o.type,
          details: R.BUFFER_APPEND_ERROR,
          sourceBufferName: r,
          frag: o,
          part: c,
          chunkMeta: l,
          error: x,
          err: x,
          fatal: !1
        }, b = (_ = this.media) == null ? void 0 : _.error;
        if (x.code === DOMException.QUOTA_EXCEEDED_ERR)
          A.details = R.BUFFER_FULL_ERROR;
        else if (x.code === DOMException.INVALID_STATE_ERR && this.mediaSourceOpenOrEnded && !b)
          A.errorAction = Kt(!0);
        else if (x.name === ba && this.sourceBufferCount === 0)
          A.errorAction = Kt(!0);
        else {
          const C = ++this.appendErrors[r];
          this.warn(`Failed ${C}/${this.hls.config.appendErrorMaxRetry} times to append segment in "${r}" sourceBuffer (${b || "no media error"})`), (C >= this.hls.config.appendErrorMaxRetry || b) && (A.fatal = !0);
        }
        this.hls.trigger(m.ERROR, A);
      }
    };
    this.append(S, r, this.isPending(this.tracks[r]));
  }
  getFlushOp(e, t, s) {
    return this.log(`queuing "${e}" remove ${t}-${s}`), {
      label: "remove",
      execute: () => {
        this.removeExecutor(e, t, s);
      },
      onStart: () => {
      },
      onComplete: () => {
        this.hls.trigger(m.BUFFER_FLUSHED, {
          type: e
        });
      },
      onError: (i) => {
        this.warn(`Failed to remove ${t}-${s} from "${e}" SourceBuffer`, i);
      }
    };
  }
  onBufferFlushing(e, t) {
    const {
      type: s,
      startOffset: i,
      endOffset: r
    } = t;
    s ? this.append(this.getFlushOp(s, i, r), s) : this.sourceBuffers.forEach(([n]) => {
      n && this.append(this.getFlushOp(n, i, r), n);
    });
  }
  onFragParsed(e, t) {
    const {
      frag: s,
      part: i
    } = t, r = [], n = i ? i.elementaryStreams : s.elementaryStreams;
    n[ae.AUDIOVIDEO] ? r.push("audiovideo") : (n[ae.AUDIO] && r.push("audio"), n[ae.VIDEO] && r.push("video"));
    const o = () => {
      const c = self.performance.now();
      s.stats.buffering.end = c, i && (i.stats.buffering.end = c);
      const l = i ? i.stats : s.stats;
      this.hls.trigger(m.FRAG_BUFFERED, {
        frag: s,
        part: i,
        stats: l,
        id: s.type
      });
    };
    r.length === 0 && this.warn(`Fragments must have at least one ElementaryStreamType set. type: ${s.type} level: ${s.level} sn: ${s.sn}`), this.blockBuffers(o, r).catch((c) => {
      this.warn(`Fragment buffered callback ${c}`), this.stepOperationQueue(this.sourceBufferTypes);
    });
  }
  onFragChanged(e, t) {
    this.trimBuffers();
  }
  get bufferedToEnd() {
    return this.sourceBufferCount > 0 && !this.sourceBuffers.some(([e]) => {
      var t, s;
      return e && (!((t = this.tracks[e]) != null && t.ended) || ((s = this.tracks[e]) == null ? void 0 : s.ending));
    });
  }
  // on BUFFER_EOS mark matching sourcebuffer(s) as "ending" and "ended" and queue endOfStream after remaining operations(s)
  // an undefined data.type will mark all buffers as EOS.
  onBufferEos(e, t) {
    var s;
    this.sourceBuffers.forEach(([n]) => {
      if (n) {
        const o = this.tracks[n];
        (!t.type || t.type === n) && (o.ending = !0, o.ended || (o.ended = !0, this.log(`${n} buffer reached EOS`)));
      }
    });
    const i = ((s = this.overrides) == null ? void 0 : s.endOfStream) !== !1;
    this.sourceBufferCount > 0 && !this.sourceBuffers.some(([n]) => {
      var o;
      return n && !((o = this.tracks[n]) != null && o.ended);
    }) && (i ? (this.log("Queueing EOS"), this.blockUntilOpen(() => {
      this.tracksEnded();
      const {
        mediaSource: n
      } = this;
      if (!n || n.readyState !== "open") {
        n && this.log(`Could not call mediaSource.endOfStream(). mediaSource.readyState: ${n.readyState}`);
        return;
      }
      this.log("Calling mediaSource.endOfStream()"), n.endOfStream(), this.hls.trigger(m.BUFFERED_TO_END, void 0);
    })) : (this.tracksEnded(), this.hls.trigger(m.BUFFERED_TO_END, void 0)));
  }
  tracksEnded() {
    this.sourceBuffers.forEach(([e]) => {
      if (e !== null) {
        const t = this.tracks[e];
        t && (t.ending = !1);
      }
    });
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.fragments.length && (this.details = t, this.updateDuration());
  }
  updateDuration() {
    const e = this.getDurationAndRange();
    e && this.blockUntilOpen(() => this.updateMediaSource(e));
  }
  onError(e, t) {
    if (t.details === R.BUFFER_APPEND_ERROR && t.frag) {
      var s;
      const i = (s = t.errorAction) == null ? void 0 : s.nextAutoLevel;
      N(i) && i !== t.frag.level && this.resetAppendErrors();
    }
  }
  resetAppendErrors() {
    this.appendErrors = {
      audio: 0,
      video: 0,
      audiovideo: 0
    };
  }
  trimBuffers() {
    const {
      hls: e,
      details: t,
      media: s
    } = this;
    if (!s || t === null || !this.sourceBufferCount)
      return;
    const i = e.config, r = s.currentTime, n = t.levelTargetDuration, o = t.live && i.liveBackBufferLength !== null ? i.liveBackBufferLength : i.backBufferLength;
    if (N(o) && o >= 0) {
      const c = Math.max(o, n), l = Math.floor(r / n) * n - c;
      this.flushBackBuffer(r, n, l);
    }
    if (N(i.frontBufferFlushThreshold) && i.frontBufferFlushThreshold > 0) {
      const c = Math.max(i.maxBufferLength, i.frontBufferFlushThreshold), l = Math.max(c, n), u = Math.floor(r / n) * n + l;
      this.flushFrontBuffer(r, n, u);
    }
  }
  flushBackBuffer(e, t, s) {
    this.sourceBuffers.forEach(([i, r]) => {
      if (r) {
        const o = z.getBuffered(r);
        if (o.length > 0 && s > o.start(0)) {
          var n;
          this.hls.trigger(m.BACK_BUFFER_REACHED, {
            bufferEnd: s
          });
          const c = this.tracks[i];
          if ((n = this.details) != null && n.live)
            this.hls.trigger(m.LIVE_BACK_BUFFER_REACHED, {
              bufferEnd: s
            });
          else if (c != null && c.ended) {
            this.log(`Cannot flush ${i} back buffer while SourceBuffer is in ended state`);
            return;
          }
          this.hls.trigger(m.BUFFER_FLUSHING, {
            startOffset: 0,
            endOffset: s,
            type: i
          });
        }
      }
    });
  }
  flushFrontBuffer(e, t, s) {
    this.sourceBuffers.forEach(([i, r]) => {
      if (r) {
        const n = z.getBuffered(r), o = n.length;
        if (o < 2)
          return;
        const c = n.start(o - 1), l = n.end(o - 1);
        if (s > c || e >= c && e <= l)
          return;
        this.hls.trigger(m.BUFFER_FLUSHING, {
          startOffset: c,
          endOffset: 1 / 0,
          type: i
        });
      }
    });
  }
  /**
   * Update Media Source duration to current level duration or override to Infinity if configuration parameter
   * 'liveDurationInfinity` is set to `true`
   * More details: https://github.com/video-dev/hls.js/issues/355
   */
  getDurationAndRange() {
    var e;
    const {
      details: t,
      mediaSource: s
    } = this;
    if (!t || !this.media || (s == null ? void 0 : s.readyState) !== "open")
      return null;
    const i = t.edge;
    if (t.live && this.hls.config.liveDurationInfinity) {
      if (t.fragments.length && t.live && s.setLiveSeekableRange) {
        const l = Math.max(0, t.fragmentStart), u = Math.max(l, i);
        return {
          duration: 1 / 0,
          start: l,
          end: u
        };
      }
      return {
        duration: 1 / 0
      };
    }
    const r = (e = this.overrides) == null ? void 0 : e.duration;
    if (r)
      return N(r) ? {
        duration: r
      } : null;
    const n = this.media.duration, o = N(s.duration) ? s.duration : 0;
    return i > o && i > n || !N(n) ? {
      duration: i
    } : null;
  }
  updateMediaSource({
    duration: e,
    start: t,
    end: s
  }) {
    const i = this.mediaSource;
    !this.media || !i || i.readyState !== "open" || (i.duration !== e && (N(e) && this.log(`Updating MediaSource duration to ${e.toFixed(3)}`), i.duration = e), t !== void 0 && s !== void 0 && (this.log(`MediaSource duration is set to ${i.duration}. Setting seekable range to ${t}-${s}.`), i.setLiveSeekableRange(t, s)));
  }
  get tracksReady() {
    const e = this.pendingTrackCount;
    return e > 0 && (e >= this.bufferCodecEventsTotal || this.isPending(this.tracks.audiovideo));
  }
  checkPendingTracks() {
    const {
      bufferCodecEventsTotal: e,
      pendingTrackCount: t,
      tracks: s
    } = this;
    if (this.log(`checkPendingTracks (pending: ${t} codec events expected: ${e}) ${ue(s)}`), this.tracksReady) {
      var i;
      const r = (i = this.transferData) == null ? void 0 : i.tracks;
      r && Object.keys(r).length ? this.attachTransferred() : this.createSourceBuffers();
    }
  }
  bufferCreated() {
    if (this.sourceBufferCount) {
      const e = {};
      this.sourceBuffers.forEach(([t, s]) => {
        if (t) {
          const i = this.tracks[t];
          e[t] = {
            buffer: s,
            container: i.container,
            codec: i.codec,
            supplemental: i.supplemental,
            levelCodec: i.levelCodec,
            id: i.id,
            metadata: i.metadata
          };
        }
      }), this.hls.trigger(m.BUFFER_CREATED, {
        tracks: e
      }), this.log(`SourceBuffers created. Running queue: ${this.operationQueue}`), this.sourceBuffers.forEach(([t]) => {
        this.executeNext(t);
      });
    } else {
      const e = new Error("could not create source buffer for media codec(s)");
      this.hls.trigger(m.ERROR, {
        type: H.MEDIA_ERROR,
        details: R.BUFFER_INCOMPATIBLE_CODECS_ERROR,
        fatal: !0,
        error: e,
        reason: e.message
      });
    }
  }
  createSourceBuffers() {
    const {
      tracks: e,
      sourceBuffers: t,
      mediaSource: s
    } = this;
    if (!s)
      throw new Error("createSourceBuffers called when mediaSource was null");
    for (const r in e) {
      const n = r, o = e[n];
      if (this.isPending(o)) {
        const c = this.getTrackCodec(o, n), l = `${o.container};codecs=${c}`;
        o.codec = c, this.log(`creating sourceBuffer(${l})${this.currentOp(n) ? " Queued" : ""} ${ue(o)}`);
        try {
          const u = s.addSourceBuffer(l), d = Zs(n), h = [n, u];
          t[d] = h, o.buffer = u;
        } catch (u) {
          var i;
          this.error(`error while trying to add sourceBuffer: ${u.message}`), this.shiftAndExecuteNext(n), (i = this.operationQueue) == null || i.removeBlockers(), delete this.tracks[n], this.hls.trigger(m.ERROR, {
            type: H.MEDIA_ERROR,
            details: R.BUFFER_ADD_CODEC_ERROR,
            fatal: !1,
            error: u,
            sourceBufferName: n,
            mimeType: l,
            parent: o.id
          });
          return;
        }
        this.trackSourceBuffer(n, o);
      }
    }
    this.bufferCreated();
  }
  getTrackCodec(e, t) {
    const s = e.supplemental;
    let i = e.codec;
    s && (t === "video" || t === "audiovideo") && fi(s, "video") && (i = Mo(i, s));
    const r = hs(i, e.levelCodec);
    return r ? t.slice(0, 5) === "audio" ? Ls(r, this.appendSource) : r : "";
  }
  trackSourceBuffer(e, t) {
    const s = t.buffer;
    if (!s)
      return;
    const i = this.getTrackCodec(t, e);
    this.tracks[e] = {
      buffer: s,
      codec: i,
      container: t.container,
      levelCodec: t.levelCodec,
      supplemental: t.supplemental,
      metadata: t.metadata,
      id: t.id,
      listeners: []
    }, this.removeBufferListeners(e), this.addBufferListener(e, "updatestart", this.onSBUpdateStart), this.addBufferListener(e, "updateend", this.onSBUpdateEnd), this.addBufferListener(e, "error", this.onSBUpdateError), this.appendSource && this.addBufferListener(e, "bufferedchange", (r, n) => {
      const o = n.removedRanges;
      o != null && o.length && this.hls.trigger(m.BUFFER_FLUSHED, {
        type: r
      });
    });
  }
  get mediaSrc() {
    var e, t;
    const s = ((e = this.media) == null || (t = e.querySelector) == null ? void 0 : t.call(e, "source")) || this.media;
    return s == null ? void 0 : s.src;
  }
  onSBUpdateStart(e) {
    const t = this.currentOp(e);
    t && t.onStart();
  }
  onSBUpdateEnd(e) {
    var t;
    if (((t = this.mediaSource) == null ? void 0 : t.readyState) === "closed") {
      this.resetBuffer(e);
      return;
    }
    const s = this.currentOp(e);
    s && (s.onComplete(), this.shiftAndExecuteNext(e));
  }
  onSBUpdateError(e, t) {
    var s;
    const i = new Error(`${e} SourceBuffer error. MediaSource readyState: ${(s = this.mediaSource) == null ? void 0 : s.readyState}`);
    this.error(`${i}`, t), this.hls.trigger(m.ERROR, {
      type: H.MEDIA_ERROR,
      details: R.BUFFER_APPENDING_ERROR,
      sourceBufferName: e,
      error: i,
      fatal: !1
    });
    const r = this.currentOp(e);
    r && r.onError(i);
  }
  // This method must result in an updateend event; if remove is not called, onSBUpdateEnd must be called manually
  removeExecutor(e, t, s) {
    const {
      media: i,
      mediaSource: r
    } = this, n = this.tracks[e], o = n == null ? void 0 : n.buffer;
    if (!i || !r || !o) {
      this.warn(`Attempting to remove from the ${e} SourceBuffer, but it does not exist`), this.shiftAndExecuteNext(e);
      return;
    }
    const c = N(i.duration) ? i.duration : 1 / 0, l = N(r.duration) ? r.duration : 1 / 0, u = Math.max(0, t), d = Math.min(s, c, l);
    d > u && (!n.ending || n.ended) ? (n.ended = !1, this.log(`Removing [${u},${d}] from the ${e} SourceBuffer`), o.remove(u, d)) : this.shiftAndExecuteNext(e);
  }
  // This method must result in an updateend event; if append is not called, onSBUpdateEnd must be called manually
  appendExecutor(e, t) {
    const s = this.tracks[t], i = s == null ? void 0 : s.buffer;
    if (!i)
      throw new Vc(`Attempting to append to the ${t} SourceBuffer, but it does not exist`);
    s.ending = !1, s.ended = !1, i.appendBuffer(e);
  }
  blockUntilOpen(e) {
    if (this.isUpdating() || this.isQueued())
      this.blockBuffers(e).catch((t) => {
        this.warn(`SourceBuffer blocked callback ${t}`), this.stepOperationQueue(this.sourceBufferTypes);
      });
    else
      try {
        e();
      } catch (t) {
        this.warn(`Callback run without blocking ${this.operationQueue} ${t}`);
      }
  }
  isUpdating() {
    return this.sourceBuffers.some(([e, t]) => e && t.updating);
  }
  isQueued() {
    return this.sourceBuffers.some(([e]) => e && !!this.currentOp(e));
  }
  isPending(e) {
    return !!e && !e.buffer;
  }
  // Enqueues an operation to each SourceBuffer queue which, upon execution, resolves a promise. When all promises
  // resolve, the onUnblocked function is executed. Functions calling this method do not need to unblock the queue
  // upon completion, since we already do it here
  blockBuffers(e, t = this.sourceBufferTypes) {
    if (!t.length)
      return this.log("Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
    const {
      operationQueue: s
    } = this, i = t.map((n) => this.appendBlocker(n));
    return t.length > 1 && !!this.blockedAudioAppend && this.unblockAudio(), Promise.all(i).then((n) => {
      s === this.operationQueue && (e(), this.stepOperationQueue(this.sourceBufferTypes));
    });
  }
  stepOperationQueue(e) {
    e.forEach((t) => {
      var s;
      const i = (s = this.tracks[t]) == null ? void 0 : s.buffer;
      !i || i.updating || this.shiftAndExecuteNext(t);
    });
  }
  append(e, t, s) {
    this.operationQueue && this.operationQueue.append(e, t, s);
  }
  appendBlocker(e) {
    if (this.operationQueue)
      return this.operationQueue.appendBlocker(e);
  }
  currentOp(e) {
    return this.operationQueue ? this.operationQueue.current(e) : null;
  }
  executeNext(e) {
    e && this.operationQueue && this.operationQueue.executeNext(e);
  }
  shiftAndExecuteNext(e) {
    this.operationQueue && this.operationQueue.shiftAndExecuteNext(e);
  }
  get pendingTrackCount() {
    return Object.keys(this.tracks).reduce((e, t) => e + (this.isPending(this.tracks[t]) ? 1 : 0), 0);
  }
  get sourceBufferCount() {
    return this.sourceBuffers.reduce((e, [t]) => e + (t ? 1 : 0), 0);
  }
  get sourceBufferTypes() {
    return this.sourceBuffers.map(([e]) => e).filter((e) => !!e);
  }
  addBufferListener(e, t, s) {
    const i = this.tracks[e];
    if (!i)
      return;
    const r = i.buffer;
    if (!r)
      return;
    const n = s.bind(this, e);
    i.listeners.push({
      event: t,
      listener: n
    }), r.addEventListener(t, n);
  }
  removeBufferListeners(e) {
    const t = this.tracks[e];
    if (!t)
      return;
    const s = t.buffer;
    s && (t.listeners.forEach((i) => {
      s.removeEventListener(i.event, i.listener);
    }), t.listeners.length = 0);
  }
}
function Jr(a) {
  const e = a.querySelectorAll("source");
  [].slice.call(e).forEach((t) => {
    a.removeChild(t);
  });
}
function Hc(a, e) {
  const t = self.document.createElement("source");
  t.type = "video/mp4", t.src = e, a.appendChild(t);
}
function Zs(a) {
  return a === "audio" ? 1 : 0;
}
class zi {
  constructor(e) {
    this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  destroy() {
    this.hls && this.unregisterListener(), this.timer && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.BUFFER_CODECS, this.onBufferCodecs, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListener() {
    const {
      hls: e
    } = this;
    e.off(m.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.BUFFER_CODECS, this.onBufferCodecs, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  onFpsDropLevelCapping(e, t) {
    const s = this.hls.levels[t.droppedLevel];
    this.isLevelAllowed(s) && this.restrictedLevels.push({
      bitrate: s.bitrate,
      height: s.height,
      width: s.width
    });
  }
  onMediaAttaching(e, t) {
    this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null, this.timer && this.hls.levels.length && this.detectPlayerSize();
  }
  onManifestParsed(e, t) {
    const s = this.hls;
    this.restrictedLevels = [], this.firstLevel = t.firstLevel, s.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onLevelsUpdated(e, t) {
    this.timer && N(this.autoLevelCapping) && this.detectPlayerSize();
  }
  // Only activate capping when playing a video stream; otherwise, multi-bitrate audio-only streams will be restricted
  // to the first level
  onBufferCodecs(e, t) {
    this.hls.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onMediaDetaching() {
    this.stopCapping(), this.media = null;
  }
  detectPlayerSize() {
    if (this.media) {
      if (this.mediaHeight <= 0 || this.mediaWidth <= 0) {
        this.clientRect = null;
        return;
      }
      const e = this.hls.levels;
      if (e.length) {
        const t = this.hls, s = this.getMaxLevel(e.length - 1);
        s !== this.autoLevelCapping && t.logger.log(`Setting autoLevelCapping to ${s}: ${e[s].height}p@${e[s].bitrate} for media ${this.mediaWidth}x${this.mediaHeight}`), t.autoLevelCapping = s, t.autoLevelEnabled && t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping;
      }
    }
  }
  /*
   * returns level should be the one with the dimensions equal or greater than the media (player) dimensions (so the video will be downscaled)
   */
  getMaxLevel(e) {
    const t = this.hls.levels;
    if (!t.length)
      return -1;
    const s = t.filter((i, r) => this.isLevelAllowed(i) && r <= e);
    return this.clientRect = null, zi.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight);
  }
  startCapping() {
    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
  }
  stopCapping() {
    this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0);
  }
  getDimensions() {
    if (this.clientRect)
      return this.clientRect;
    const e = this.media, t = {
      width: 0,
      height: 0
    };
    if (e) {
      const s = e.getBoundingClientRect();
      t.width = s.width, t.height = s.height, !t.width && !t.height && (t.width = s.right - s.left || e.width || 0, t.height = s.bottom - s.top || e.height || 0);
    }
    return this.clientRect = t, t;
  }
  get mediaWidth() {
    return this.getDimensions().width * this.contentScaleFactor;
  }
  get mediaHeight() {
    return this.getDimensions().height * this.contentScaleFactor;
  }
  get contentScaleFactor() {
    let e = 1;
    if (!this.hls.config.ignoreDevicePixelRatio)
      try {
        e = self.devicePixelRatio;
      } catch {
      }
    return Math.min(e, this.hls.config.maxDevicePixelRatio);
  }
  isLevelAllowed(e) {
    return !this.restrictedLevels.some((s) => e.bitrate === s.bitrate && e.width === s.width && e.height === s.height);
  }
  static getMaxLevelByMediaSize(e, t, s) {
    if (!(e != null && e.length))
      return -1;
    const i = (o, c) => c ? o.width !== c.width || o.height !== c.height : !0;
    let r = e.length - 1;
    const n = Math.max(t, s);
    for (let o = 0; o < e.length; o += 1) {
      const c = e[o];
      if ((c.width >= n || c.height >= n) && i(c, e[o + 1])) {
        r = o;
        break;
      }
    }
    return r;
  }
}
const Wc = {
  /**
   * text file, such as a manifest or playlist
   */
  MANIFEST: "m",
  /**
   * audio only
   */
  AUDIO: "a",
  /**
   * video only
   */
  VIDEO: "v",
  /**
   * muxed audio and video
   */
  MUXED: "av",
  /**
   * init segment
   */
  INIT: "i",
  /**
   * caption or subtitle
   */
  CAPTION: "c",
  /**
   * ISOBMFF timed text track
   */
  TIMED_TEXT: "tt",
  /**
   * cryptographic key, license or certificate.
   */
  KEY: "k",
  /**
   * other
   */
  OTHER: "o"
}, xe = Wc, Yc = {
  /**
   * HTTP Live Streaming (HLS)
   */
  HLS: "h"
}, qc = Yc, jc = "CMCD-Object", zc = "CMCD-Request", Xc = "CMCD-Session", Qc = "CMCD-Status", Mt = {
  /**
   * keys whose values vary with the object being requested.
   */
  OBJECT: jc,
  /**
   * keys whose values vary with each request.
   */
  REQUEST: zc,
  /**
   * keys whose values are expected to be invariant over the life of the session.
   */
  SESSION: Xc,
  /**
   * keys whose values do not vary with every request or object.
   */
  STATUS: Qc
}, Zc = {
  [Mt.OBJECT]: ["br", "d", "ot", "tb"],
  [Mt.REQUEST]: ["bl", "dl", "mtp", "nor", "nrr", "su"],
  [Mt.SESSION]: ["cid", "pr", "sf", "sid", "st", "v"],
  [Mt.STATUS]: ["bs", "rtp"]
};
class Ct {
  constructor(e, t) {
    Array.isArray(e) && (e = e.map((s) => s instanceof Ct ? s : new Ct(s))), this.value = e, this.params = t;
  }
}
const Jc = "Dict";
function eu(a) {
  return Array.isArray(a) ? JSON.stringify(a) : a instanceof Map ? "Map{}" : a instanceof Set ? "Set{}" : typeof a == "object" ? JSON.stringify(a) : String(a);
}
function tu(a, e, t, s) {
  return new Error(`failed to ${a} "${eu(e)}" as ${t}`, {
    cause: s
  });
}
function Ye(a, e, t) {
  return tu("serialize", a, e, t);
}
class _a {
  constructor(e) {
    this.description = e;
  }
}
const en = "Bare Item", su = "Boolean";
function iu(a) {
  if (typeof a != "boolean")
    throw Ye(a, su);
  return a ? "?1" : "?0";
}
const ru = "Byte Sequence";
function nu(a) {
  if (ArrayBuffer.isView(a) === !1)
    throw Ye(a, ru);
  return `:${ec(a)}:`;
}
const au = "Integer";
function ou(a) {
  return a < -999999999999999 || 999999999999999 < a;
}
function Da(a) {
  if (ou(a))
    throw Ye(a, au);
  return a.toString();
}
function lu(a) {
  return `@${Da(a.getTime() / 1e3)}`;
}
const cu = "Decimal";
function uu(a) {
  const e = ha(a, 3);
  if (Math.floor(Math.abs(e)).toString().length > 12)
    throw Ye(a, cu);
  const t = e.toString();
  return t.includes(".") ? t : `${t}.0`;
}
const du = "String", hu = /[\x00-\x1f\x7f]+/;
function fu(a) {
  if (hu.test(a))
    throw Ye(a, du);
  return `"${a.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}
function gu(a) {
  return a.description || a.toString().slice(7, -1);
}
const mu = "Token";
function tn(a) {
  const e = gu(a);
  if (/^([a-zA-Z*])([!#$%&'*+\-.^_`|~\w:/]*)$/.test(e) === !1)
    throw Ye(e, mu);
  return e;
}
function xi(a) {
  switch (typeof a) {
    case "number":
      if (!N(a))
        throw Ye(a, en);
      return Number.isInteger(a) ? Da(a) : uu(a);
    case "string":
      return fu(a);
    case "symbol":
      return tn(a);
    case "boolean":
      return iu(a);
    case "object":
      if (a instanceof Date)
        return lu(a);
      if (a instanceof Uint8Array)
        return nu(a);
      if (a instanceof _a)
        return tn(a);
    default:
      throw Ye(a, en);
  }
}
const pu = "Key";
function Ai(a) {
  if (/^[a-z*][a-z0-9\-_.*]*$/.test(a) === !1)
    throw Ye(a, pu);
  return a;
}
function Xi(a) {
  return a == null ? "" : Object.entries(a).map(([e, t]) => t === !0 ? `;${Ai(e)}` : `;${Ai(e)}=${xi(t)}`).join("");
}
function Ca(a) {
  return a instanceof Ct ? `${xi(a.value)}${Xi(a.params)}` : xi(a);
}
function yu(a) {
  return `(${a.value.map(Ca).join(" ")})${Xi(a.params)}`;
}
function Eu(a, e = {
  whitespace: !0
}) {
  if (typeof a != "object")
    throw Ye(a, Jc);
  const t = a instanceof Map ? a.entries() : Object.entries(a), s = e != null && e.whitespace ? " " : "";
  return Array.from(t).map(([i, r]) => {
    r instanceof Ct || (r = new Ct(r));
    let n = Ai(i);
    return r.value === !0 ? n += Xi(r.params) : (n += "=", Array.isArray(r.value) ? n += yu(r) : n += Ca(r)), n;
  }).join(`,${s}`);
}
function Tu(a, e) {
  return Eu(a, e);
}
function vu(a) {
  return a === "ot" || a === "sf" || a === "st";
}
function Su(a) {
  return typeof a == "number" ? N(a) : a != null && a !== "" && a !== !1;
}
const ps = (a) => Math.round(a), xu = (a, e) => (e != null && e.baseUrl && (a = tc(a, e.baseUrl)), encodeURIComponent(a)), os = (a) => ps(a / 100) * 100, Au = {
  /**
   * Bitrate (kbps) rounded integer
   */
  br: ps,
  /**
   * Duration (milliseconds) rounded integer
   */
  d: ps,
  /**
   * Buffer Length (milliseconds) rounded nearest 100ms
   */
  bl: os,
  /**
   * Deadline (milliseconds) rounded nearest 100ms
   */
  dl: os,
  /**
   * Measured Throughput (kbps) rounded nearest 100kbps
   */
  mtp: os,
  /**
   * Next Object Request URL encoded
   */
  nor: xu,
  /**
   * Requested maximum throughput (kbps) rounded nearest 100kbps
   */
  rtp: os,
  /**
   * Top Bitrate (kbps) rounded integer
   */
  tb: ps
};
function Lu(a, e) {
  const t = {};
  if (a == null || typeof a != "object")
    return t;
  const s = Object.keys(a).sort(), i = oe({}, Au, e == null ? void 0 : e.formatters), r = e == null ? void 0 : e.filter;
  return s.forEach((n) => {
    if (r != null && r(n))
      return;
    let o = a[n];
    const c = i[n];
    c && (o = c(o, e)), !(n === "v" && o === 1) && (n == "pr" && o === 1 || Su(o) && (vu(n) && typeof o == "string" && (o = new _a(o)), t[n] = o));
  }), t;
}
function Pa(a, e = {}) {
  return a ? Tu(Lu(a, e), oe({
    whitespace: !1
  }, e)) : "";
}
function Iu(a, e = {}) {
  const t = {};
  if (!a)
    return t;
  const s = Object.entries(a), i = Object.entries(Zc).concat(Object.entries((e == null ? void 0 : e.customHeaderMap) || {})), r = s.reduce((n, o) => {
    var c, l;
    const [u, d] = o, h = ((c = i.find((f) => f[1].includes(u))) === null || c === void 0 ? void 0 : c[0]) || Mt.REQUEST;
    return (l = n[h]) !== null && l !== void 0 || (n[h] = {}), n[h][u] = d, n;
  }, {});
  return Object.entries(r).reduce((n, [o, c]) => (n[o] = Pa(c, e), n), t);
}
function Ru(a, e, t) {
  return oe(a, Iu(e, t));
}
const bu = "CMCD";
function _u(a, e = {}) {
  if (!a)
    return "";
  const t = Pa(a, e);
  return `${bu}=${encodeURIComponent(t)}`;
}
const sn = /CMCD=[^&#]+/;
function Du(a, e, t) {
  const s = _u(e, t);
  if (!s)
    return a;
  if (sn.test(a))
    return a.replace(sn, s);
  const i = a.includes("?") ? "&" : "?";
  return `${a}${i}${s}`;
}
class Cu {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.includeKeys = void 0, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
      this.initialized && (this.starved = !0), this.buffering = !0;
    }, this.onPlaying = () => {
      this.initialized || (this.initialized = !0), this.buffering = !1;
    }, this.applyPlaylistData = (i) => {
      try {
        this.apply(i, {
          ot: xe.MANIFEST,
          su: !this.initialized
        });
      } catch (r) {
        this.hls.logger.warn("Could not generate manifest CMCD data.", r);
      }
    }, this.applyFragmentData = (i) => {
      try {
        const {
          frag: r,
          part: n
        } = i, o = this.hls.levels[r.level], c = this.getObjectType(r), l = {
          d: (n || r).duration * 1e3,
          ot: c
        };
        (c === xe.VIDEO || c === xe.AUDIO || c == xe.MUXED) && (l.br = o.bitrate / 1e3, l.tb = this.getTopBandwidth(c) / 1e3, l.bl = this.getBufferLength(c));
        const u = n ? this.getNextPart(n) : this.getNextFrag(r);
        u != null && u.url && u.url !== r.url && (l.nor = u.url), this.apply(i, l);
      } catch (r) {
        this.hls.logger.warn("Could not generate segment CMCD data.", r);
      }
    }, this.hls = e;
    const t = this.config = e.config, {
      cmcd: s
    } = t;
    s != null && (t.pLoader = this.createPlaylistLoader(), t.fLoader = this.createFragmentLoader(), this.sid = s.sessionId || e.sessionId, this.cid = s.contentId, this.useHeaders = s.useHeaders === !0, this.includeKeys = s.includeKeys, this.registerListeners());
  }
  registerListeners() {
    const e = this.hls;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHED, this.onMediaDetached, this), e.on(m.BUFFER_CREATED, this.onBufferCreated, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHED, this.onMediaDetached, this), e.off(m.BUFFER_CREATED, this.onBufferCreated, this);
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null, this.onWaiting = this.onPlaying = this.media = null;
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying);
  }
  onMediaDetached() {
    this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null);
  }
  onBufferCreated(e, t) {
    var s, i;
    this.audioBuffer = (s = t.tracks.audio) == null ? void 0 : s.buffer, this.videoBuffer = (i = t.tracks.video) == null ? void 0 : i.buffer;
  }
  /**
   * Create baseline CMCD data
   */
  createData() {
    var e;
    return {
      v: 1,
      sf: qc.HLS,
      sid: this.sid,
      cid: this.cid,
      pr: (e = this.media) == null ? void 0 : e.playbackRate,
      mtp: this.hls.bandwidthEstimate / 1e3
    };
  }
  /**
   * Apply CMCD data to a request.
   */
  apply(e, t = {}) {
    oe(t, this.createData());
    const s = t.ot === xe.INIT || t.ot === xe.VIDEO || t.ot === xe.MUXED;
    this.starved && s && (t.bs = !0, t.su = !0, this.starved = !1), t.su == null && (t.su = this.buffering);
    const {
      includeKeys: i
    } = this;
    i && (t = Object.keys(t).reduce((n, o) => (i.includes(o) && (n[o] = t[o]), n), {}));
    const r = {
      baseUrl: e.url
    };
    this.useHeaders ? (e.headers || (e.headers = {}), Ru(e.headers, t, r)) : e.url = Du(e.url, t, r);
  }
  getNextFrag(e) {
    var t;
    const s = (t = this.hls.levels[e.level]) == null ? void 0 : t.details;
    if (s) {
      const i = e.sn - s.startSN;
      return s.fragments[i + 1];
    }
  }
  getNextPart(e) {
    var t, s;
    const {
      index: i,
      fragment: r
    } = e, n = (t = this.hls.levels[r.level]) == null || (s = t.details) == null ? void 0 : s.partList;
    if (n) {
      const {
        sn: o
      } = r;
      for (let c = n.length - 1; c >= 0; c--) {
        const l = n[c];
        if (l.index === i && l.fragment.sn === o)
          return n[c + 1];
      }
    }
  }
  /**
   * The CMCD object type.
   */
  getObjectType(e) {
    const {
      type: t
    } = e;
    if (t === "subtitle")
      return xe.TIMED_TEXT;
    if (e.sn === "initSegment")
      return xe.INIT;
    if (t === "audio")
      return xe.AUDIO;
    if (t === "main")
      return this.hls.audioTracks.length ? xe.VIDEO : xe.MUXED;
  }
  /**
   * Get the highest bitrate.
   */
  getTopBandwidth(e) {
    let t = 0, s;
    const i = this.hls;
    if (e === xe.AUDIO)
      s = i.audioTracks;
    else {
      const r = i.maxAutoLevel, n = r > -1 ? r + 1 : i.levels.length;
      s = i.levels.slice(0, n);
    }
    for (const r of s)
      r.bitrate > t && (t = r.bitrate);
    return t > 0 ? t : NaN;
  }
  /**
   * Get the buffer length for a media type in milliseconds
   */
  getBufferLength(e) {
    const t = this.media, s = e === xe.AUDIO ? this.audioBuffer : this.videoBuffer;
    return !s || !t ? NaN : z.bufferInfo(s, t.currentTime, this.config.maxBufferHole).len * 1e3;
  }
  /**
   * Create a playlist loader
   */
  createPlaylistLoader() {
    const {
      pLoader: e
    } = this.config, t = this.applyPlaylistData, s = e || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new s(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, n, o) {
        t(r), this.loader.load(r, n, o);
      }
    };
  }
  /**
   * Create a playlist loader
   */
  createFragmentLoader() {
    const {
      fLoader: e
    } = this.config, t = this.applyFragmentData, s = e || this.config.loader;
    return class {
      constructor(r) {
        this.loader = void 0, this.loader = new s(r);
      }
      get stats() {
        return this.loader.stats;
      }
      get context() {
        return this.loader.context;
      }
      destroy() {
        this.loader.destroy();
      }
      abort() {
        this.loader.abort();
      }
      load(r, n, o) {
        t(r), this.loader.load(r, n, o);
      }
    };
  }
}
const Pu = 3e5;
class ku extends Ze {
  constructor(e) {
    super("content-steering", e.logger), this.hls = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this._pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.ERROR, this.onError, this));
  }
  pathways() {
    return (this.levels || []).reduce((e, t) => (e.indexOf(t.pathwayId) === -1 && e.push(t.pathwayId), e), []);
  }
  get pathwayPriority() {
    return this._pathwayPriority;
  }
  set pathwayPriority(e) {
    this.updatePathwayPriority(e);
  }
  startLoad() {
    if (this.started = !0, this.clearTimeout(), this.enabled && this.uri) {
      if (this.updated) {
        const e = this.timeToLoad * 1e3 - (performance.now() - this.updated);
        if (e > 0) {
          this.scheduleRefresh(this.uri, e);
          return;
        }
      }
      this.loadSteeringManifest(this.uri);
    }
  }
  stopLoad() {
    this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), this.clearTimeout();
  }
  clearTimeout() {
    this.reloadTimer !== -1 && (self.clearTimeout(this.reloadTimer), this.reloadTimer = -1);
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.hls = null, this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  removeLevel(e) {
    const t = this.levels;
    t && (this.levels = t.filter((s) => s !== e));
  }
  onManifestLoading() {
    this.stopLoad(), this.enabled = !0, this.timeToLoad = 300, this.updated = 0, this.uri = null, this.pathwayId = ".", this.levels = this.audioTracks = this.subtitleTracks = null;
  }
  onManifestLoaded(e, t) {
    const {
      contentSteering: s
    } = t;
    s !== null && (this.pathwayId = s.pathwayId, this.uri = s.uri, this.started && this.startLoad());
  }
  onManifestParsed(e, t) {
    this.audioTracks = t.audioTracks, this.subtitleTracks = t.subtitleTracks;
  }
  onError(e, t) {
    const {
      errorAction: s
    } = t;
    if ((s == null ? void 0 : s.action) === Te.SendAlternateToPenaltyBox && s.flags === Fe.MoveAllAlternatesMatchingHost) {
      const i = this.levels;
      let r = this._pathwayPriority, n = this.pathwayId;
      if (t.context) {
        const {
          groupId: o,
          pathwayId: c,
          type: l
        } = t.context;
        o && i ? n = this.getPathwayForGroupId(o, l, n) : c && (n = c);
      }
      n in this.penalizedPathways || (this.penalizedPathways[n] = performance.now()), !r && i && (r = this.pathways()), r && r.length > 1 && (this.updatePathwayPriority(r), s.resolved = this.pathwayId !== n), s.resolved || this.warn(`Could not resolve ${t.details} ("${t.error.message}") with content-steering for Pathway: ${n} levels: ${i && i.length} priorities: ${ue(r)} penalized: ${ue(this.penalizedPathways)}`);
    }
  }
  filterParsedLevels(e) {
    this.levels = e;
    let t = this.getLevelsForPathway(this.pathwayId);
    if (t.length === 0) {
      const s = e[0].pathwayId;
      this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${s}"`), t = this.getLevelsForPathway(s), this.pathwayId = s;
    }
    return t.length !== e.length && this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t;
  }
  getLevelsForPathway(e) {
    return this.levels === null ? [] : this.levels.filter((t) => e === t.pathwayId);
  }
  updatePathwayPriority(e) {
    this._pathwayPriority = e;
    let t;
    const s = this.penalizedPathways, i = performance.now();
    Object.keys(s).forEach((r) => {
      i - s[r] > Pu && delete s[r];
    });
    for (let r = 0; r < e.length; r++) {
      const n = e[r];
      if (n in s)
        continue;
      if (n === this.pathwayId)
        return;
      const o = this.hls.nextLoadLevel, c = this.hls.levels[o];
      if (t = this.getLevelsForPathway(n), t.length > 0) {
        this.log(`Setting Pathway to "${n}"`), this.pathwayId = n, sa(t), this.hls.trigger(m.LEVELS_UPDATED, {
          levels: t
        });
        const l = this.hls.levels[o];
        c && l && this.levels && (l.attrs["STABLE-VARIANT-ID"] !== c.attrs["STABLE-VARIANT-ID"] && l.bitrate !== c.bitrate && this.log(`Unstable Pathways change from bitrate ${c.bitrate} to ${l.bitrate}`), this.hls.nextLoadLevel = o);
        break;
      }
    }
  }
  getPathwayForGroupId(e, t, s) {
    const i = this.getLevelsForPathway(s).concat(this.levels || []);
    for (let r = 0; r < i.length; r++)
      if (t === Q.AUDIO_TRACK && i[r].hasAudioGroup(e) || t === Q.SUBTITLE_TRACK && i[r].hasSubtitleGroup(e))
        return i[r].pathwayId;
    return s;
  }
  clonePathways(e) {
    const t = this.levels;
    if (!t)
      return;
    const s = {}, i = {};
    e.forEach((r) => {
      const {
        ID: n,
        "BASE-ID": o,
        "URI-REPLACEMENT": c
      } = r;
      if (t.some((u) => u.pathwayId === n))
        return;
      const l = this.getLevelsForPathway(o).map((u) => {
        const d = new de(u.attrs);
        d["PATHWAY-ID"] = n;
        const h = d.AUDIO && `${d.AUDIO}_clone_${n}`, f = d.SUBTITLES && `${d.SUBTITLES}_clone_${n}`;
        h && (s[d.AUDIO] = h, d.AUDIO = h), f && (i[d.SUBTITLES] = f, d.SUBTITLES = f);
        const g = ka(u.uri, d["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", c), y = new Vt({
          attrs: d,
          audioCodec: u.audioCodec,
          bitrate: u.bitrate,
          height: u.height,
          name: u.name,
          url: g,
          videoCodec: u.videoCodec,
          width: u.width
        });
        if (u.audioGroups)
          for (let p = 1; p < u.audioGroups.length; p++)
            y.addGroupId("audio", `${u.audioGroups[p]}_clone_${n}`);
        if (u.subtitleGroups)
          for (let p = 1; p < u.subtitleGroups.length; p++)
            y.addGroupId("text", `${u.subtitleGroups[p]}_clone_${n}`);
        return y;
      });
      t.push(...l), rn(this.audioTracks, s, c, n), rn(this.subtitleTracks, i, c, n);
    });
  }
  loadSteeringManifest(e) {
    const t = this.hls.config, s = t.loader;
    this.loader && this.loader.destroy(), this.loader = new s(t);
    let i;
    try {
      i = new self.URL(e);
    } catch {
      this.enabled = !1, this.log(`Failed to parse Steering Manifest URI: ${e}`);
      return;
    }
    if (i.protocol !== "data:") {
      const u = (this.hls.bandwidthEstimate || t.abrEwmaDefaultEstimate) | 0;
      i.searchParams.set("_HLS_pathway", this.pathwayId), i.searchParams.set("_HLS_throughput", "" + u);
    }
    const r = {
      responseType: "json",
      url: i.href
    }, n = t.steeringManifestLoadPolicy.default, o = n.errorRetry || n.timeoutRetry || {}, c = {
      loadPolicy: n,
      timeout: n.maxLoadTimeMs,
      maxRetry: o.maxNumRetry || 0,
      retryDelay: o.retryDelayMs || 0,
      maxRetryDelay: o.maxRetryDelayMs || 0
    }, l = {
      onSuccess: (u, d, h, f) => {
        this.log(`Loaded steering manifest: "${i}"`);
        const g = u.data;
        if ((g == null ? void 0 : g.VERSION) !== 1) {
          this.log(`Steering VERSION ${g.VERSION} not supported!`);
          return;
        }
        this.updated = performance.now(), this.timeToLoad = g.TTL;
        const {
          "RELOAD-URI": y,
          "PATHWAY-CLONES": p,
          "PATHWAY-PRIORITY": E
        } = g;
        if (y)
          try {
            this.uri = new self.URL(y, i).href;
          } catch {
            this.enabled = !1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${y}`);
            return;
          }
        this.scheduleRefresh(this.uri || h.url), p && this.clonePathways(p);
        const v = {
          steeringManifest: g,
          url: i.toString()
        };
        this.hls.trigger(m.STEERING_MANIFEST_LOADED, v), E && this.updatePathwayPriority(E);
      },
      onError: (u, d, h, f) => {
        if (this.log(`Error loading steering manifest: ${u.code} ${u.text} (${d.url})`), this.stopLoad(), u.code === 410) {
          this.enabled = !1, this.log(`Steering manifest ${d.url} no longer available`);
          return;
        }
        let g = this.timeToLoad * 1e3;
        if (u.code === 429) {
          const y = this.loader;
          if (typeof (y == null ? void 0 : y.getResponseHeader) == "function") {
            const p = y.getResponseHeader("Retry-After");
            p && (g = parseFloat(p) * 1e3);
          }
          this.log(`Steering manifest ${d.url} rate limited`);
          return;
        }
        this.scheduleRefresh(this.uri || d.url, g);
      },
      onTimeout: (u, d, h) => {
        this.log(`Timeout loading steering manifest (${d.url})`), this.scheduleRefresh(this.uri || d.url);
      }
    };
    this.log(`Requesting steering manifest: ${i}`), this.loader.load(r, c, l);
  }
  scheduleRefresh(e, t = this.timeToLoad * 1e3) {
    this.clearTimeout(), this.reloadTimer = self.setTimeout(() => {
      var s;
      const i = (s = this.hls) == null ? void 0 : s.media;
      if (i && !i.ended) {
        this.loadSteeringManifest(e);
        return;
      }
      this.scheduleRefresh(e, this.timeToLoad * 1e3);
    }, t);
  }
}
function rn(a, e, t, s) {
  a && Object.keys(e).forEach((i) => {
    const r = a.filter((n) => n.groupId === i).map((n) => {
      const o = oe({}, n);
      return o.details = void 0, o.attrs = new de(o.attrs), o.url = o.attrs.URI = ka(n.url, n.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", t), o.groupId = o.attrs["GROUP-ID"] = e[i], o.attrs["PATHWAY-ID"] = s, o;
    });
    a.push(...r);
  });
}
function ka(a, e, t, s) {
  const {
    HOST: i,
    PARAMS: r,
    [t]: n
  } = s;
  let o;
  e && (o = n == null ? void 0 : n[e], o && (a = o));
  const c = new self.URL(a);
  return i && !o && (c.host = i), r && Object.keys(r).sort().forEach((l) => {
    l && c.searchParams.set(l, r[l]);
  }), c.href;
}
class Rt extends Ze {
  constructor(e) {
    super("eme", e.logger), this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = Rt.CDMCleanupPromise ? [Rt.CDMCleanupPromise] : [], this.onMediaEncrypted = (t) => {
      const {
        initDataType: s,
        initData: i
      } = t, r = `"${t.type}" event: init data type: "${s}"`;
      if (this.debug(r), i !== null) {
        if (!this.keyFormatPromise) {
          let n = Object.keys(this.keySystemAccessPromises);
          n.length || (n = is(this.config));
          const o = n.map(Hs).filter((c) => !!c);
          this.keyFormatPromise = this.getKeyFormatPromise(o);
        }
        this.keyFormatPromise.then((n) => {
          const o = Vs(n);
          let c, l;
          if (s === "sinf") {
            if (o !== ne.FAIRPLAY) {
              this.warn(`Ignoring unexpected "${t.type}" event with init data type: "${s}" for selected key-system ${o}`);
              return;
            }
            const g = he(new Uint8Array(i));
            try {
              const y = Ui(JSON.parse(g).sinf), p = On(y);
              if (!p)
                throw new Error("'schm' box missing or not cbcs/cenc with schi > tenc");
              c = new Uint8Array(p.subarray(8, 24)), l = ne.FAIRPLAY;
            } catch (y) {
              this.warn(`${r} Failed to parse sinf: ${y}`);
              return;
            }
          } else {
            if (o !== ne.WIDEVINE && o !== ne.PLAYREADY) {
              this.warn(`Ignoring unexpected "${t.type}" event with init data type: "${s}" for selected key-system ${o}`);
              return;
            }
            const g = ko(i), y = g.filter((E) => !!E.systemId && Ks(E.systemId) === o);
            y.length > 1 && this.warn(`${r} Using first of ${y.length} pssh found for selected key-system ${o}`);
            const p = y[0];
            if (!p) {
              g.length === 0 || g.some((E) => !E.systemId) ? this.warn(`${r} contains incomplete or invalid pssh data`) : this.log(`ignoring ${r} for ${g.map((E) => Ks(E.systemId)).join(",")} pssh data in favor of playlist keys`);
              return;
            }
            if (l = Ks(p.systemId), p.version === 0 && p.data)
              if (l === ne.WIDEVINE) {
                const E = p.data.length - 22;
                c = new Uint8Array(p.data.subarray(E, E + 16));
              } else
                l === ne.PLAYREADY && (c = zn(p.data));
          }
          if (!l || !c)
            return;
          const u = Be.hexDump(c), {
            keyIdToKeySessionPromise: d,
            mediaKeySessions: h
          } = this;
          let f = d[u];
          for (let g = 0; g < h.length; g++) {
            const y = h[g], p = y.decryptdata;
            if (!p.keyId)
              continue;
            const E = Be.hexDump(p.keyId);
            if (u === E || p.uri.replace(/-/g, "").indexOf(u) !== -1) {
              if (f = d[E], p.pssh)
                break;
              delete d[E], p.pssh = new Uint8Array(i), p.keyId = c, f = d[u] = f.then(() => this.generateRequestWithPreferredKeySession(y, s, i, "encrypted-event-key-match")), f.catch((v) => this.handleError(v));
              break;
            }
          }
          if (!f) {
            if (l !== o) {
              this.log(`Ignoring "${t.type}" event with ${l} init data for selected key-system ${o}`);
              return;
            }
            f = d[u] = this.getKeySystemSelectionPromise([l]).then(({
              keySystem: g,
              mediaKeys: y
            }) => {
              var p;
              this.throwIfDestroyed();
              const E = new Ht("ISO-23001-7", u, (p = Hs(g)) != null ? p : "");
              return E.pssh = new Uint8Array(i), E.keyId = c, this.attemptSetMediaKeys(g, y).then(() => {
                this.throwIfDestroyed();
                const v = this.createMediaKeySessionContext({
                  decryptdata: E,
                  keySystem: g,
                  mediaKeys: y
                });
                return this.generateRequestWithPreferredKeySession(v, s, i, "encrypted-event-no-match");
              });
            }), f.catch((g) => this.handleError(g));
          }
        });
      }
    }, this.onWaitingForKey = (t) => {
      this.log(`"${t.type}" event`);
    }, this.hls = e, this.config = e.config, this.registerListeners();
  }
  destroy() {
    const e = this.media;
    this.unregisterListeners(), this.onMediaDetached(), this._clear(e);
    const t = this.config;
    t.requestMediaKeySystemAccessFunc = null, t.licenseXhrSetup = t.licenseResponseCallback = void 0, t.drmSystems = t.drmSystemOptions = {}, this.hls = this.config = this.keyIdToKeySessionPromise = null, this.onMediaEncrypted = this.onWaitingForKey = null;
  }
  registerListeners() {
    this.hls.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(m.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(m.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(m.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  unregisterListeners() {
    this.hls.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(m.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(m.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(m.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  getLicenseServerUrl(e) {
    const {
      drmSystems: t,
      widevineLicenseUrl: s
    } = this.config, i = t[e];
    if (i)
      return i.licenseUrl;
    if (e === ne.WIDEVINE && s)
      return s;
  }
  getLicenseServerUrlOrThrow(e) {
    const t = this.getLicenseServerUrl(e);
    if (t === void 0)
      throw new Error(`no license server URL configured for key-system "${e}"`);
    return t;
  }
  getServerCertificateUrl(e) {
    const {
      drmSystems: t
    } = this.config, s = t[e];
    if (s)
      return s.serverCertificateUrl;
    this.log(`No Server Certificate in config.drmSystems["${e}"]`);
  }
  attemptKeySystemAccess(e) {
    const t = this.hls.levels, s = (n, o, c) => !!n && c.indexOf(n) === o, i = t.map((n) => n.audioCodec).filter(s), r = t.map((n) => n.videoCodec).filter(s);
    return i.length + r.length === 0 && r.push("avc1.42e01e"), new Promise((n, o) => {
      const c = (l) => {
        const u = l.shift();
        this.getMediaKeysPromise(u, i, r).then((d) => n({
          keySystem: u,
          mediaKeys: d
        })).catch((d) => {
          l.length ? c(l) : d instanceof Ce ? o(d) : o(new Ce({
            type: H.KEY_SYSTEM_ERROR,
            details: R.KEY_SYSTEM_NO_ACCESS,
            error: d,
            fatal: !0
          }, d.message));
        });
      };
      c(e);
    });
  }
  requestMediaKeySystemAccess(e, t) {
    const {
      requestMediaKeySystemAccessFunc: s
    } = this.config;
    if (typeof s != "function") {
      let i = `Configured requestMediaKeySystemAccess is not a function ${s}`;
      return jn === null && self.location.protocol === "http:" && (i = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(i));
    }
    return s(e, t);
  }
  getMediaKeysPromise(e, t, s) {
    const i = Al(e, t, s, this.config.drmSystemOptions), r = this.keySystemAccessPromises[e];
    let n = r == null ? void 0 : r.keySystemAccess;
    if (!n) {
      this.log(`Requesting encrypted media "${e}" key-system access with config: ${ue(i)}`), n = this.requestMediaKeySystemAccess(e, i);
      const o = this.keySystemAccessPromises[e] = {
        keySystemAccess: n
      };
      return n.catch((c) => {
        this.log(`Failed to obtain access to key-system "${e}": ${c}`);
      }), n.then((c) => {
        this.log(`Access for key-system "${c.keySystem}" obtained`);
        const l = this.fetchServerCertificate(e);
        return this.log(`Create media-keys for "${e}"`), o.mediaKeys = c.createMediaKeys().then((u) => (this.log(`Media-keys created for "${e}"`), l.then((d) => d ? this.setMediaKeysServerCertificate(u, e, d) : u))), o.mediaKeys.catch((u) => {
          this.error(`Failed to create media-keys for "${e}"}: ${u}`);
        }), o.mediaKeys;
      });
    }
    return n.then(() => r.mediaKeys);
  }
  createMediaKeySessionContext({
    decryptdata: e,
    keySystem: t,
    mediaKeys: s
  }) {
    this.log(`Creating key-system session "${t}" keyId: ${Be.hexDump(e.keyId || [])}`);
    const i = s.createSession(), r = {
      decryptdata: e,
      keySystem: t,
      mediaKeys: s,
      mediaKeysSession: i,
      keyStatus: "status-pending"
    };
    return this.mediaKeySessions.push(r), r;
  }
  renewKeySession(e) {
    const t = e.decryptdata;
    if (t.pssh) {
      const s = this.createMediaKeySessionContext(e), i = this.getKeyIdString(t), r = "cenc";
      this.keyIdToKeySessionPromise[i] = this.generateRequestWithPreferredKeySession(s, r, t.pssh.buffer, "expired");
    } else
      this.warn("Could not renew expired session. Missing pssh initData.");
    this.removeSession(e);
  }
  getKeyIdString(e) {
    if (!e)
      throw new Error("Could not read keyId of undefined decryptdata");
    if (e.keyId === null)
      throw new Error("keyId is null");
    return Be.hexDump(e.keyId);
  }
  updateKeySession(e, t) {
    var s;
    const i = e.mediaKeysSession;
    return this.log(`Updating key-session "${i.sessionId}" for keyID ${Be.hexDump(((s = e.decryptdata) == null ? void 0 : s.keyId) || [])}
      } (data length: ${t && t.byteLength})`), i.update(t);
  }
  selectKeySystemFormat(e) {
    const t = Object.keys(e.levelkeys || {});
    return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t)), this.keyFormatPromise;
  }
  getKeyFormatPromise(e) {
    return new Promise((t, s) => {
      const i = is(this.config), r = e.map(Vs).filter((n) => !!n && i.indexOf(n) !== -1);
      return this.getKeySystemSelectionPromise(r).then(({
        keySystem: n
      }) => {
        const o = Hs(n);
        o ? t(o) : s(new Error(`Unable to find format for key-system "${n}"`));
      }).catch(s);
    });
  }
  loadKey(e) {
    const t = e.keyInfo.decryptdata, s = this.getKeyIdString(t), i = `(keyId: ${s} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
    this.log(`Starting session for key ${i}`);
    let r = this.keyIdToKeySessionPromise[s];
    return r || (r = this.getKeySystemForKeyPromise(t).then(({
      keySystem: o,
      mediaKeys: c
    }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`), this.attemptSetMediaKeys(o, c).then(() => (this.throwIfDestroyed(), this.createMediaKeySessionContext({
      keySystem: o,
      mediaKeys: c,
      decryptdata: t
    }))))), (this.keyIdToKeySessionPromise[s] = r.then((o) => {
      const c = "cenc", l = t.pssh ? t.pssh.buffer : null;
      return this.generateRequestWithPreferredKeySession(o, c, l, "playlist-key");
    })).catch((o) => this.handleError(o))), r;
  }
  throwIfDestroyed(e = "Invalid state") {
    if (!this.hls)
      throw new Error("invalid state");
  }
  handleError(e) {
    this.hls && (this.error(e.message), e instanceof Ce ? this.hls.trigger(m.ERROR, e.data) : this.hls.trigger(m.ERROR, {
      type: H.KEY_SYSTEM_ERROR,
      details: R.KEY_SYSTEM_NO_KEYS,
      error: e,
      fatal: !0
    }));
  }
  getKeySystemForKeyPromise(e) {
    const t = this.getKeyIdString(e), s = this.keyIdToKeySessionPromise[t];
    if (!s) {
      const i = Vs(e.keyFormat), r = i ? [i] : is(this.config);
      return this.attemptKeySystemAccess(r);
    }
    return s;
  }
  getKeySystemSelectionPromise(e) {
    if (e.length || (e = is(this.config)), e.length === 0)
      throw new Ce({
        type: H.KEY_SYSTEM_ERROR,
        details: R.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
        fatal: !0
      }, `Missing key-system license configuration options ${ue({
        drmSystems: this.config.drmSystems
      })}`);
    return this.attemptKeySystemAccess(e);
  }
  attemptSetMediaKeys(e, t) {
    const s = this.setMediaKeysQueue.slice();
    this.log(`Setting media-keys for "${e}"`);
    const i = Promise.all(s).then(() => {
      if (!this.media)
        throw new Error("Attempted to set mediaKeys without media element attached");
      return this.media.setMediaKeys(t);
    });
    return this.setMediaKeysQueue.push(i), i.then(() => {
      this.log(`Media-keys set for "${e}"`), s.push(i), this.setMediaKeysQueue = this.setMediaKeysQueue.filter((r) => s.indexOf(r) === -1);
    });
  }
  generateRequestWithPreferredKeySession(e, t, s, i) {
    var r, n;
    const o = (r = this.config.drmSystems) == null || (n = r[e.keySystem]) == null ? void 0 : n.generateRequest;
    if (o)
      try {
        const g = o.call(this.hls, t, s, e);
        if (!g)
          throw new Error("Invalid response from configured generateRequest filter");
        t = g.initDataType, s = g.initData ? g.initData : null, e.decryptdata.pssh = s ? new Uint8Array(s) : null;
      } catch (g) {
        var c;
        if (this.warn(g.message), (c = this.hls) != null && c.config.debug)
          throw g;
      }
    if (s === null)
      return this.log(`Skipping key-session request for "${i}" (no initData)`), Promise.resolve(e);
    const l = this.getKeyIdString(e.decryptdata);
    this.log(`Generating key-session request for "${i}": ${l} (init data type: ${t} length: ${s ? s.byteLength : null})`);
    const u = new Gi(), d = e._onmessage = (g) => {
      const y = e.mediaKeysSession;
      if (!y) {
        u.emit("error", new Error("invalid state"));
        return;
      }
      const {
        messageType: p,
        message: E
      } = g;
      this.log(`"${p}" message event for session "${y.sessionId}" message size: ${E.byteLength}`), p === "license-request" || p === "license-renewal" ? this.renewLicense(e, E).catch((v) => {
        u.eventNames().length ? u.emit("error", v) : this.handleError(v);
      }) : p === "license-release" ? e.keySystem === ne.FAIRPLAY && (this.updateKeySession(e, pi("acknowledged")), this.removeSession(e)) : this.warn(`unhandled media key message type "${p}"`);
    }, h = e._onkeystatuseschange = (g) => {
      if (!e.mediaKeysSession) {
        u.emit("error", new Error("invalid state"));
        return;
      }
      this.onKeyStatusChange(e);
      const p = e.keyStatus;
      u.emit("keyStatus", p), p === "expired" && (this.warn(`${e.keySystem} expired for key ${l}`), this.renewKeySession(e));
    };
    e.mediaKeysSession.addEventListener("message", d), e.mediaKeysSession.addEventListener("keystatuseschange", h);
    const f = new Promise((g, y) => {
      u.on("error", y), u.on("keyStatus", (p) => {
        p.startsWith("usable") ? g() : p === "output-restricted" ? y(new Ce({
          type: H.KEY_SYSTEM_ERROR,
          details: R.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
          fatal: !1
        }, "HDCP level output restricted")) : p === "internal-error" ? y(new Ce({
          type: H.KEY_SYSTEM_ERROR,
          details: R.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
          fatal: !0
        }, `key status changed to "${p}"`)) : p === "expired" ? y(new Error("key expired while generating request")) : this.warn(`unhandled key status change "${p}"`);
      });
    });
    return e.mediaKeysSession.generateRequest(t, s).then(() => {
      var g;
      this.log(`Request generated for key-session "${(g = e.mediaKeysSession) == null ? void 0 : g.sessionId}" keyId: ${l}`);
    }).catch((g) => {
      throw new Ce({
        type: H.KEY_SYSTEM_ERROR,
        details: R.KEY_SYSTEM_NO_SESSION,
        error: g,
        fatal: !1
      }, `Error generating key-session request: ${g}`);
    }).then(() => f).catch((g) => {
      throw u.removeAllListeners(), this.removeSession(e), g;
    }).then(() => (u.removeAllListeners(), e));
  }
  onKeyStatusChange(e) {
    e.mediaKeysSession.keyStatuses.forEach((t, s) => {
      if (typeof s == "string" && typeof t == "object") {
        const i = s;
        s = t, t = i;
      }
      this.log(`key status change "${t}" for keyStatuses keyId: ${Be.hexDump("buffer" in s ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength) : new Uint8Array(s))} session keyId: ${Be.hexDump(new Uint8Array(e.decryptdata.keyId || []))} uri: ${e.decryptdata.uri}`), e.keyStatus = t;
    });
  }
  fetchServerCertificate(e) {
    const t = this.config, s = t.loader, i = new s(t), r = this.getServerCertificateUrl(e);
    return r ? (this.log(`Fetching server certificate for "${e}"`), new Promise((n, o) => {
      const c = {
        responseType: "arraybuffer",
        url: r
      }, l = t.certLoadPolicy.default, u = {
        loadPolicy: l,
        timeout: l.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, d = {
        onSuccess: (h, f, g, y) => {
          n(h.data);
        },
        onError: (h, f, g, y) => {
          o(new Ce({
            type: H.KEY_SYSTEM_ERROR,
            details: R.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: g,
            response: re({
              url: c.url,
              data: void 0
            }, h)
          }, `"${e}" certificate request failed (${r}). Status: ${h.code} (${h.text})`));
        },
        onTimeout: (h, f, g) => {
          o(new Ce({
            type: H.KEY_SYSTEM_ERROR,
            details: R.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: g,
            response: {
              url: c.url,
              data: void 0
            }
          }, `"${e}" certificate request timed out (${r})`));
        },
        onAbort: (h, f, g) => {
          o(new Error("aborted"));
        }
      };
      i.load(c, u, d);
    })) : Promise.resolve();
  }
  setMediaKeysServerCertificate(e, t, s) {
    return new Promise((i, r) => {
      e.setServerCertificate(s).then((n) => {
        this.log(`setServerCertificate ${n ? "success" : "not supported by CDM"} (${s == null ? void 0 : s.byteLength}) on "${t}"`), i(e);
      }).catch((n) => {
        r(new Ce({
          type: H.KEY_SYSTEM_ERROR,
          details: R.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
          error: n,
          fatal: !0
        }, n.message));
      });
    });
  }
  renewLicense(e, t) {
    return this.requestLicense(e, new Uint8Array(t)).then((s) => this.updateKeySession(e, new Uint8Array(s)).catch((i) => {
      throw new Ce({
        type: H.KEY_SYSTEM_ERROR,
        details: R.KEY_SYSTEM_SESSION_UPDATE_FAILED,
        error: i,
        fatal: !0
      }, i.message);
    }));
  }
  unpackPlayReadyKeyMessage(e, t) {
    const s = String.fromCharCode.apply(null, new Uint16Array(t.buffer));
    if (!s.includes("PlayReadyKeyMessage"))
      return e.setRequestHeader("Content-Type", "text/xml; charset=utf-8"), t;
    const i = new DOMParser().parseFromString(s, "application/xml"), r = i.querySelectorAll("HttpHeader");
    if (r.length > 0) {
      let u;
      for (let d = 0, h = r.length; d < h; d++) {
        var n, o;
        u = r[d];
        const f = (n = u.querySelector("name")) == null ? void 0 : n.textContent, g = (o = u.querySelector("value")) == null ? void 0 : o.textContent;
        f && g && e.setRequestHeader(f, g);
      }
    }
    const c = i.querySelector("Challenge"), l = c == null ? void 0 : c.textContent;
    if (!l)
      throw new Error("Cannot find <Challenge> in key message");
    return pi(atob(l));
  }
  setupLicenseXHR(e, t, s, i) {
    const r = this.config.licenseXhrSetup;
    return r ? Promise.resolve().then(() => {
      if (!s.decryptdata)
        throw new Error("Key removed");
      return r.call(this.hls, e, t, s, i);
    }).catch((n) => {
      if (!s.decryptdata)
        throw n;
      return e.open("POST", t, !0), r.call(this.hls, e, t, s, i);
    }).then((n) => (e.readyState || e.open("POST", t, !0), {
      xhr: e,
      licenseChallenge: n || i
    })) : (e.open("POST", t, !0), Promise.resolve({
      xhr: e,
      licenseChallenge: i
    }));
  }
  requestLicense(e, t) {
    const s = this.config.keyLoadPolicy.default;
    return new Promise((i, r) => {
      const n = this.getLicenseServerUrlOrThrow(e.keySystem);
      this.log(`Sending license request to URL: ${n}`);
      const o = new XMLHttpRequest();
      o.responseType = "arraybuffer", o.onreadystatechange = () => {
        if (!this.hls || !e.mediaKeysSession)
          return r(new Error("invalid state"));
        if (o.readyState === 4)
          if (o.status === 200) {
            this._requestLicenseFailureCount = 0;
            let c = o.response;
            this.log(`License received ${c instanceof ArrayBuffer ? c.byteLength : c}`);
            const l = this.config.licenseResponseCallback;
            if (l)
              try {
                c = l.call(this.hls, o, n, e);
              } catch (u) {
                this.error(u);
              }
            i(c);
          } else {
            const c = s.errorRetry, l = c ? c.maxNumRetry : 0;
            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > l || o.status >= 400 && o.status < 500)
              r(new Ce({
                type: H.KEY_SYSTEM_ERROR,
                details: R.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                fatal: !0,
                networkDetails: o,
                response: {
                  url: n,
                  data: void 0,
                  code: o.status,
                  text: o.statusText
                }
              }, `License Request XHR failed (${n}). Status: ${o.status} (${o.statusText})`));
            else {
              const u = l - this._requestLicenseFailureCount + 1;
              this.warn(`Retrying license request, ${u} attempts left`), this.requestLicense(e, t).then(i, r);
            }
          }
      }, e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(), e.licenseXhr = o, this.setupLicenseXHR(o, n, e, t).then(({
        xhr: c,
        licenseChallenge: l
      }) => {
        e.keySystem == ne.PLAYREADY && (l = this.unpackPlayReadyKeyMessage(c, l)), c.send(l);
      });
    });
  }
  onMediaAttached(e, t) {
    if (!this.config.emeEnabled)
      return;
    const s = t.media;
    this.media = s, s.removeEventListener("encrypted", this.onMediaEncrypted), s.removeEventListener("waitingforkey", this.onWaitingForKey), s.addEventListener("encrypted", this.onMediaEncrypted), s.addEventListener("waitingforkey", this.onWaitingForKey);
  }
  onMediaDetached() {
    const e = this.media;
    e && (e.removeEventListener("encrypted", this.onMediaEncrypted), e.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null);
  }
  _clear(e) {
    var t;
    const s = this.mediaKeySessions;
    this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, Ht.clearKeyUriToKeyIdMap();
    const i = s.length;
    Rt.CDMCleanupPromise = Promise.all(s.map((r) => this.removeSession(r)).concat(e == null || (t = e.setMediaKeys(null)) == null ? void 0 : t.catch((r) => {
      var n;
      this.log(`Could not clear media keys: ${r}`), (n = this.hls) == null || n.trigger(m.ERROR, {
        type: H.OTHER_ERROR,
        details: R.KEY_SYSTEM_DESTROY_MEDIA_KEYS_ERROR,
        fatal: !1,
        error: new Error(`Could not clear media keys: ${r}`)
      });
    }))).then(() => {
      i && (this.log("finished closing key sessions and clearing media keys"), s.length = 0);
    }).catch((r) => {
      var n;
      this.log(`Could not close sessions and clear media keys: ${r}`), (n = this.hls) == null || n.trigger(m.ERROR, {
        type: H.OTHER_ERROR,
        details: R.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
        fatal: !1,
        error: new Error(`Could not close sessions and clear media keys: ${r}`)
      });
    });
  }
  onManifestLoading() {
    this.keyFormatPromise = null;
  }
  onManifestLoaded(e, {
    sessionKeys: t
  }) {
    if (!(!t || !this.config.emeEnabled) && !this.keyFormatPromise) {
      const s = t.reduce((i, r) => (i.indexOf(r.keyFormat) === -1 && i.push(r.keyFormat), i), []);
      this.log(`Selecting key-system from session-keys ${s.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(s);
    }
  }
  removeSession(e) {
    const {
      mediaKeysSession: t,
      licenseXhr: s
    } = e;
    if (t) {
      this.log(`Remove licenses and keys and close session ${t.sessionId}`), e._onmessage && (t.removeEventListener("message", e._onmessage), e._onmessage = void 0), e._onkeystatuseschange && (t.removeEventListener("keystatuseschange", e._onkeystatuseschange), e._onkeystatuseschange = void 0), s && s.readyState !== XMLHttpRequest.DONE && s.abort(), e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0;
      const i = this.mediaKeySessions.indexOf(e);
      i > -1 && this.mediaKeySessions.splice(i, 1);
      const {
        drmSystemOptions: r
      } = this.config;
      return (Il(r) ? new Promise((o, c) => {
        self.setTimeout(() => c(new Error("MediaKeySession.remove() timeout")), 8e3), t.remove().then(o);
      }) : Promise.resolve()).catch((o) => {
        var c;
        this.log(`Could not remove session: ${o}`), (c = this.hls) == null || c.trigger(m.ERROR, {
          type: H.OTHER_ERROR,
          details: R.KEY_SYSTEM_DESTROY_REMOVE_SESSION_ERROR,
          fatal: !1,
          error: new Error(`Could not remove session: ${o}`)
        });
      }).then(() => t.close()).catch((o) => {
        var c;
        this.log(`Could not close session: ${o}`), (c = this.hls) == null || c.trigger(m.ERROR, {
          type: H.OTHER_ERROR,
          details: R.KEY_SYSTEM_DESTROY_CLOSE_SESSION_ERROR,
          fatal: !1,
          error: new Error(`Could not close session: ${o}`)
        });
      });
    }
  }
}
Rt.CDMCleanupPromise = void 0;
class Ce extends Error {
  constructor(e, t) {
    super(t), this.data = void 0, e.error || (e.error = new Error(t)), this.data = e, e.err = e.error;
  }
}
class wu {
  constructor(e) {
    this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  registerListeners() {
    this.hls.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.on(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListeners() {
    this.hls.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), this.hls.off(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  destroy() {
    this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null;
  }
  onMediaAttaching(e, t) {
    const s = this.hls.config;
    if (s.capLevelOnFPSDrop) {
      const i = t.media instanceof self.HTMLVideoElement ? t.media : null;
      this.media = i, i && typeof i.getVideoPlaybackQuality == "function" && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), s.fpsDroppedMonitoringPeriod);
    }
  }
  onMediaDetaching() {
    this.media = null;
  }
  checkFPS(e, t, s) {
    const i = performance.now();
    if (t) {
      if (this.lastTime) {
        const r = i - this.lastTime, n = s - this.lastDroppedFrames, o = t - this.lastDecodedFrames, c = 1e3 * n / r, l = this.hls;
        if (l.trigger(m.FPS_DROP, {
          currentDropped: n,
          currentDecoded: o,
          totalDroppedFrames: s
        }), c > 0 && n > l.config.fpsDroppedMonitoringThreshold * o) {
          let u = l.currentLevel;
          l.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u), u > 0 && (l.autoLevelCapping === -1 || l.autoLevelCapping >= u) && (u = u - 1, l.trigger(m.FPS_DROP_LEVEL_CAPPING, {
            level: u,
            droppedLevel: l.currentLevel
          }), l.autoLevelCapping = u, this.streamController.nextLevelSwitch());
        }
      }
      this.lastTime = i, this.lastDroppedFrames = s, this.lastDecodedFrames = t;
    }
  }
  checkFPSInterval() {
    const e = this.media;
    if (e)
      if (this.isVideoPlaybackQualityAvailable) {
        const t = e.getVideoPlaybackQuality();
        this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames);
      } else
        this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount);
  }
}
function wa(a, e) {
  let t;
  try {
    t = new Event("addtrack");
  } catch {
    t = document.createEvent("Event"), t.initEvent("addtrack", !1, !1);
  }
  t.track = a, e.dispatchEvent(t);
}
function Oa(a, e) {
  const t = a.mode;
  if (t === "disabled" && (a.mode = "hidden"), a.cues && !a.cues.getCueById(e.id))
    try {
      if (a.addCue(e), !a.cues.getCueById(e.id))
        throw new Error(`addCue is failed for: ${e}`);
    } catch (s) {
      Z.debug(`[texttrack-utils]: ${s}`);
      try {
        const i = new self.TextTrackCue(e.startTime, e.endTime, e.text);
        i.id = e.id, a.addCue(i);
      } catch (i) {
        Z.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`);
      }
    }
  t === "disabled" && (a.mode = t);
}
function Lt(a, e) {
  const t = a.mode;
  if (t === "disabled" && (a.mode = "hidden"), a.cues)
    for (let s = a.cues.length; s--; )
      e && a.cues[s].removeEventListener("enter", e), a.removeCue(a.cues[s]);
  t === "disabled" && (a.mode = t);
}
function Li(a, e, t, s) {
  const i = a.mode;
  if (i === "disabled" && (a.mode = "hidden"), a.cues && a.cues.length > 0) {
    const r = Fu(a.cues, e, t);
    for (let n = 0; n < r.length; n++)
      (!s || s(r[n])) && a.removeCue(r[n]);
  }
  i === "disabled" && (a.mode = i);
}
function Ou(a, e) {
  if (e <= a[0].startTime)
    return 0;
  const t = a.length - 1;
  if (e > a[t].endTime)
    return -1;
  let s = 0, i = t, r;
  for (; s <= i; )
    if (r = Math.floor((i + s) / 2), e < a[r].startTime)
      i = r - 1;
    else if (e > a[r].startTime && s < t)
      s = r + 1;
    else
      return r;
  return a[s].startTime - e < e - a[i].startTime ? s : i;
}
function Fu(a, e, t) {
  const s = [], i = Ou(a, e);
  if (i > -1)
    for (let r = i, n = a.length; r < n; r++) {
      const o = a[r];
      if (o.startTime >= e && o.endTime <= t)
        s.push(o);
      else if (o.startTime > t)
        return s;
    }
  return s;
}
function ys(a) {
  const e = [];
  for (let t = 0; t < a.length; t++) {
    const s = a[t];
    (s.kind === "subtitles" || s.kind === "captions") && s.label && e.push(a[t]);
  }
  return e;
}
class Mu extends ji {
  constructor(e) {
    super(e, "subtitle-track-controller"), this.media = null, this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.asyncPollTrackChange = () => this.pollTrackChange(0), this.onTextTracksChanged = () => {
      if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively)
        return;
      let t = null;
      const s = ys(this.media.textTracks);
      for (let r = 0; r < s.length; r++)
        if (s[r].mode === "hidden")
          t = s[r];
        else if (s[r].mode === "showing") {
          t = s[r];
          break;
        }
      const i = this.findTrackForTextTrack(t);
      this.subtitleTrack !== i && this.setSubtitleTrack(i);
    }, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.currentTrack = null, this.onTextTracksChanged = this.asyncPollTrackChange = null, super.destroy();
  }
  get subtitleDisplay() {
    return this._subtitleDisplay;
  }
  set subtitleDisplay(e) {
    this._subtitleDisplay = e, this.trackId > -1 && this.toggleTrackModes();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVEL_LOADING, this.onLevelLoading, this), e.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(m.ERROR, this.onError, this);
  }
  // Listen for subtitle track change, then extract the current track ID.
  onMediaAttached(e, t) {
    this.media = t.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange));
  }
  pollTrackChange(e) {
    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.onTextTracksChanged, e);
  }
  onMediaDetaching(e, t) {
    const s = this.media;
    if (!s)
      return;
    const i = !!t.transferMedia;
    if (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || s.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), this.subtitleTrack = -1, this.media = null, i)
      return;
    ys(s.textTracks).forEach((n) => {
      Lt(n);
    });
  }
  onManifestLoading() {
    this.tracks = [], this.groupIds = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0;
  }
  // Fired whenever a new manifest is loaded.
  onManifestParsed(e, t) {
    this.tracks = t.subtitleTracks;
  }
  onSubtitleTrackLoaded(e, t) {
    const {
      id: s,
      groupId: i,
      details: r
    } = t, n = this.tracksInGroup[s];
    if (!n || n.groupId !== i) {
      this.warn(`Subtitle track with id:${s} and group:${i} not found in active group ${n == null ? void 0 : n.groupId}`);
      return;
    }
    const o = n.details;
    n.details = t.details, this.log(`Subtitle track ${s} "${n.name}" lang:${n.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!t)
      return;
    const s = t.subtitleGroups || null, i = this.groupIds;
    let r = this.currentTrack;
    if (!s || (i == null ? void 0 : i.length) !== (s == null ? void 0 : s.length) || s != null && s.some((n) => (i == null ? void 0 : i.indexOf(n)) === -1)) {
      this.groupIds = s, this.trackId = -1, this.currentTrack = null;
      const n = this.tracks.filter((u) => !s || s.indexOf(u.groupId) !== -1);
      if (n.length)
        this.selectDefaultTrack && !n.some((u) => u.default) && (this.selectDefaultTrack = !1), n.forEach((u, d) => {
          u.id = d;
        });
      else if (!r && !this.tracksInGroup.length)
        return;
      this.tracksInGroup = n;
      const o = this.hls.config.subtitlePreference;
      if (!r && o) {
        this.selectDefaultTrack = !1;
        const u = Ke(o, n);
        if (u > -1)
          r = n[u];
        else {
          const d = Ke(o, this.tracks);
          r = this.tracks[d];
        }
      }
      let c = this.findTrackId(r);
      c === -1 && r && (c = this.findTrackId(null));
      const l = {
        subtitleTracks: n
      };
      this.log(`Updating subtitle tracks, ${n.length} track(s) found in "${s == null ? void 0 : s.join(",")}" group-id`), this.hls.trigger(m.SUBTITLE_TRACKS_UPDATED, l), c !== -1 && this.trackId === -1 && this.setSubtitleTrack(c);
    }
  }
  findTrackId(e) {
    const t = this.tracksInGroup, s = this.selectDefaultTrack;
    for (let i = 0; i < t.length; i++) {
      const r = t[i];
      if (!(s && !r.default || !s && !e) && (!e || yt(r, e)))
        return i;
    }
    if (e) {
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        if (jt(e.attrs, r.attrs, ["LANGUAGE", "ASSOC-LANGUAGE", "CHARACTERISTICS"]))
          return i;
      }
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        if (jt(e.attrs, r.attrs, ["LANGUAGE"]))
          return i;
      }
    }
    return -1;
  }
  findTrackForTextTrack(e) {
    if (e) {
      const t = this.tracksInGroup;
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        if (Si(i, e))
          return s;
      }
    }
    return -1;
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === Q.SUBTITLE_TRACK && t.context.id === this.trackId && (!this.groupIds || this.groupIds.indexOf(t.context.groupId) !== -1) && this.checkRetry(t);
  }
  get allSubtitleTracks() {
    return this.tracks;
  }
  /** get alternate subtitle tracks list from playlist **/
  get subtitleTracks() {
    return this.tracksInGroup;
  }
  /** get/set index of the selected subtitle track (based on index in subtitle track lists) **/
  get subtitleTrack() {
    return this.trackId;
  }
  set subtitleTrack(e) {
    this.selectDefaultTrack = !1, this.setSubtitleTrack(e);
  }
  setSubtitleOption(e) {
    if (this.hls.config.subtitlePreference = e, e) {
      if (e.id === -1)
        return this.setSubtitleTrack(-1), null;
      const t = this.allSubtitleTracks;
      if (this.selectDefaultTrack = !1, t.length) {
        const s = this.currentTrack;
        if (s && yt(e, s))
          return s;
        const i = Ke(e, this.tracksInGroup);
        if (i > -1) {
          const r = this.tracksInGroup[i];
          return this.setSubtitleTrack(i), r;
        } else {
          if (s)
            return null;
          {
            const r = Ke(e, t);
            if (r > -1)
              return t[r];
          }
        }
      }
    }
    return null;
  }
  loadPlaylist(e) {
    super.loadPlaylist(), this.shouldLoadPlaylist(this.currentTrack) && this.scheduleLoading(this.currentTrack, e);
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    const s = e.id, i = e.groupId, r = this.getUrlWithDirectives(e.url, t), n = e.details, o = n == null ? void 0 : n.age;
    this.log(`Loading subtitle ${s} "${e.name}" lang:${e.lang} group:${i}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${o && n.live ? " age " + o.toFixed(1) + (n.type && " " + n.type || "") : ""} ${r}`), this.hls.trigger(m.SUBTITLE_TRACK_LOADING, {
      url: r,
      id: s,
      groupId: i,
      deliveryDirectives: t || null,
      track: e
    });
  }
  /**
   * Disables the old subtitleTrack and sets current mode on the next subtitleTrack.
   * This operates on the DOM textTracks.
   * A value of -1 will disable all subtitle tracks.
   */
  toggleTrackModes() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = ys(e.textTracks), s = this.currentTrack;
    let i;
    if (s && (i = t.filter((r) => Si(s, r))[0], i || this.warn(`Unable to find subtitle TextTrack with name "${s.name}" and language "${s.lang}"`)), [].slice.call(t).forEach((r) => {
      r.mode !== "disabled" && r !== i && (r.mode = "disabled");
    }), i) {
      const r = this.subtitleDisplay ? "showing" : "hidden";
      i.mode !== r && (i.mode = r);
    }
  }
  /**
   * This method is responsible for validating the subtitle index and periodically reloading if live.
   * Dispatches the SUBTITLE_TRACK_SWITCH event, which instructs the subtitle-stream-controller to load the selected track.
   */
  setSubtitleTrack(e) {
    const t = this.tracksInGroup;
    if (!this.media) {
      this.queuedDefaultTrack = e;
      return;
    }
    if (e < -1 || e >= t.length || !N(e)) {
      this.warn(`Invalid subtitle track id: ${e}`);
      return;
    }
    this.selectDefaultTrack = !1;
    const s = this.currentTrack, i = t[e] || null;
    if (this.trackId = e, this.currentTrack = i, this.toggleTrackModes(), !i) {
      this.hls.trigger(m.SUBTITLE_TRACK_SWITCH, {
        id: e
      });
      return;
    }
    const r = !!i.details && !i.details.live;
    if (e === this.trackId && i === s && r)
      return;
    this.log(`Switching to subtitle-track ${e}` + (i ? ` "${i.name}" lang:${i.lang} group:${i.groupId}` : ""));
    const {
      id: n,
      groupId: o = "",
      name: c,
      type: l,
      url: u
    } = i;
    this.hls.trigger(m.SUBTITLE_TRACK_SWITCH, {
      id: n,
      groupId: o,
      name: c,
      type: l,
      url: u
    });
    const d = this.switchParams(i.url, s == null ? void 0 : s.details, i.details);
    this.loadPlaylist(d);
  }
}
function Ut(a) {
  let e = 5381, t = a.length;
  for (; t; )
    e = e * 33 ^ a.charCodeAt(--t);
  return (e >>> 0).toString();
}
const bt = 0.025;
let ks = /* @__PURE__ */ function(a) {
  return a[a.Point = 0] = "Point", a[a.Range = 1] = "Range", a;
}({});
function Nu(a, e, t) {
  return `${a.identifier}-${t + 1}-${Ut(e)}`;
}
class Bu {
  constructor(e, t) {
    this.base = void 0, this._duration = null, this._timelineStart = null, this.appendInPlaceDisabled = void 0, this.appendInPlaceStarted = void 0, this.dateRange = void 0, this.hasPlayed = !1, this.cumulativeDuration = 0, this.resumeOffset = NaN, this.playoutLimit = NaN, this.restrictions = {
      skip: !1,
      jump: !1
    }, this.snapOptions = {
      out: !1,
      in: !1
    }, this.assetList = [], this.assetListLoader = void 0, this.assetListResponse = null, this.resumeAnchor = void 0, this.error = void 0, this.resetOnResume = void 0, this.base = t, this.dateRange = e, this.setDateRange(e);
  }
  setDateRange(e) {
    this.dateRange = e, this.resumeOffset = e.attr.optionalFloat("X-RESUME-OFFSET", this.resumeOffset), this.playoutLimit = e.attr.optionalFloat("X-PLAYOUT-LIMIT", this.playoutLimit), this.restrictions = e.attr.enumeratedStringList("X-RESTRICT", this.restrictions), this.snapOptions = e.attr.enumeratedStringList("X-SNAP", this.snapOptions);
  }
  reset() {
    var e;
    this.appendInPlaceStarted = !1, (e = this.assetListLoader) == null || e.destroy(), this.assetListLoader = void 0, this.supplementsPrimary || (this.assetListResponse = null, this.assetList = [], this._duration = null);
  }
  isAssetPastPlayoutLimit(e) {
    if (e >= this.assetList.length)
      return !0;
    const t = this.playoutLimit;
    return e <= 0 || isNaN(t) ? !1 : this.assetList[e].startOffset > t;
  }
  findAssetIndex(e) {
    return this.assetList.indexOf(e);
  }
  get identifier() {
    return this.dateRange.id;
  }
  get startDate() {
    return this.dateRange.startDate;
  }
  get startTime() {
    const e = this.dateRange.startTime;
    if (this.snapOptions.out) {
      const t = this.dateRange.tagAnchor;
      if (t)
        return Js(e, t);
    }
    return e;
  }
  get startOffset() {
    return this.cue.pre ? 0 : this.startTime;
  }
  get startIsAligned() {
    if (this.startTime === 0 || this.snapOptions.out)
      return !0;
    const e = this.dateRange.tagAnchor;
    if (e) {
      const t = this.dateRange.startTime, s = Js(t, e);
      return t - s < 0.1;
    }
    return !1;
  }
  get resumptionOffset() {
    const e = this.resumeOffset, t = N(e) ? e : this.duration;
    return this.cumulativeDuration + t;
  }
  get resumeTime() {
    const e = this.startOffset + this.resumptionOffset;
    if (this.snapOptions.in) {
      const t = this.resumeAnchor;
      if (t)
        return Js(e, t);
    }
    return e;
  }
  get appendInPlace() {
    return this.appendInPlaceStarted ? !0 : this.appendInPlaceDisabled ? !1 : !!(!this.cue.once && !this.cue.pre && // preroll starts at startPosition before startPosition is known (live)
    this.startIsAligned && (isNaN(this.playoutLimit) && isNaN(this.resumeOffset) || this.resumeOffset && this.duration && Math.abs(this.resumeOffset - this.duration) < bt));
  }
  set appendInPlace(e) {
    if (this.appendInPlaceStarted) {
      this.resetOnResume = !e;
      return;
    }
    this.appendInPlaceDisabled = !e;
  }
  // Extended timeline start time
  get timelineStart() {
    return this._timelineStart !== null ? this._timelineStart : this.startTime;
  }
  set timelineStart(e) {
    this._timelineStart = e;
  }
  get duration() {
    const e = this.playoutLimit;
    let t;
    return this._duration !== null ? t = this._duration : this.dateRange.duration ? t = this.dateRange.duration : t = this.dateRange.plannedDuration || 0, !isNaN(e) && e < t && (t = e), t;
  }
  set duration(e) {
    this._duration = e;
  }
  get cue() {
    return this.dateRange.cue;
  }
  get timelineOccupancy() {
    return this.dateRange.attr["X-TIMELINE-OCCUPIES"] === "RANGE" ? ks.Range : ks.Point;
  }
  get supplementsPrimary() {
    return this.dateRange.attr["X-TIMELINE-STYLE"] === "PRIMARY";
  }
  get contentMayVary() {
    return this.dateRange.attr["X-CONTENT-MAY-VARY"] !== "NO";
  }
  get assetUrl() {
    return this.dateRange.attr["X-ASSET-URI"];
  }
  get assetListUrl() {
    return this.dateRange.attr["X-ASSET-LIST"];
  }
  get baseUrl() {
    return this.base.url;
  }
  get assetListLoaded() {
    return this.assetList.length > 0 || this.assetListResponse !== null;
  }
  toString() {
    return Uu(this);
  }
}
function Js(a, e) {
  return a - e.start < e.duration / 2 && !(Math.abs(a - (e.start + e.duration)) < bt) ? e.start : e.start + e.duration;
}
function Fa(a, e, t) {
  const s = new self.URL(a, t);
  return s.protocol !== "data:" && s.searchParams.set("_HLS_primary_id", e), s;
}
function Uu(a) {
  return `["${a.identifier}" ${a.cue.pre ? "<pre>" : a.cue.post ? "<post>" : ""}${a.timelineStart.toFixed(2)}-${a.resumeTime.toFixed(2)}]`;
}
function Ii(a) {
  const e = a.timelineStart, t = a.duration || 0;
  return `["${a.identifier}" ${e.toFixed(2)}-${(e + t).toFixed(2)}]`;
}
class $u {
  constructor(e, t, s, i) {
    this.hls = void 0, this.interstitial = void 0, this.assetItem = void 0, this.tracks = null, this.hasDetails = !1, this.mediaAttached = null, this._currentTime = void 0, this._bufferedEosTime = void 0, this.checkPlayout = () => {
      const l = this.interstitial.playoutLimit, u = this.currentTime;
      this.startOffset + u >= l && this.hls.trigger(m.PLAYOUT_LIMIT_REACHED, {});
    };
    const r = this.hls = new e(t);
    this.interstitial = s, this.assetItem = i;
    let n = i.uri;
    try {
      n = Fa(n, r.sessionId).href;
    } catch {
    }
    r.loadSource(n);
    const o = () => {
      this.hasDetails = !0;
    };
    r.once(m.LEVEL_LOADED, o), r.once(m.AUDIO_TRACK_LOADED, o), r.once(m.SUBTITLE_TRACK_LOADED, o), r.on(m.MEDIA_ATTACHING, (c, {
      media: l
    }) => {
      this.removeMediaListeners(), this.mediaAttached = l, this.interstitial.playoutLimit && l.addEventListener("timeupdate", this.checkPlayout);
    });
  }
  bufferedInPlaceToEnd(e) {
    var t;
    if (!this.interstitial.appendInPlace)
      return !1;
    if ((t = this.hls) != null && t.bufferedToEnd)
      return !0;
    if (!e || !this._bufferedEosTime)
      return !1;
    const s = this.timelineOffset, i = z.bufferInfo(e, s, 0);
    return this.getAssetTime(i.end) >= this._bufferedEosTime - 0.02;
  }
  get destroyed() {
    var e;
    return !((e = this.hls) != null && e.userConfig);
  }
  get assetId() {
    return this.assetItem.identifier;
  }
  get interstitialId() {
    return this.assetItem.parentIdentifier;
  }
  get media() {
    var e;
    return ((e = this.hls) == null ? void 0 : e.media) || null;
  }
  get bufferedEnd() {
    const e = this.media || this.mediaAttached;
    if (!e)
      return this._bufferedEosTime ? this._bufferedEosTime : this.currentTime;
    const t = z.bufferInfo(e, e.currentTime, 1e-3);
    return this.getAssetTime(t.end);
  }
  get currentTime() {
    const e = this.media || this.mediaAttached;
    return e ? this.getAssetTime(e.currentTime) : this._currentTime || 0;
  }
  get duration() {
    const e = this.assetItem.duration;
    return e || 0;
  }
  get remaining() {
    const e = this.duration;
    return e ? Math.max(0, e - this.currentTime) : 0;
  }
  get startOffset() {
    return this.assetItem.startOffset;
  }
  get timelineOffset() {
    var e;
    return ((e = this.hls) == null ? void 0 : e.config.timelineOffset) || 0;
  }
  set timelineOffset(e) {
    const t = this.timelineOffset;
    if (e !== t) {
      const s = e - t;
      if (Math.abs(s) > 1 / 9e4) {
        if (this.hasDetails)
          throw new Error("Cannot set timelineOffset after playlists are loaded");
        this.hls.config.timelineOffset = e;
      }
    }
  }
  getAssetTime(e) {
    const t = this.timelineOffset, s = this.duration;
    return Math.min(Math.max(0, e - t), s);
  }
  removeMediaListeners() {
    const e = this.mediaAttached;
    e && (this._currentTime = e.currentTime, this.bufferSnapShot(), e.removeEventListener("timeupdate", this.checkPlayout));
  }
  bufferSnapShot() {
    if (this.mediaAttached) {
      var e;
      (e = this.hls) != null && e.bufferedToEnd && (this._bufferedEosTime = this.bufferedEnd);
    }
  }
  destroy() {
    this.removeMediaListeners(), this.hls.destroy(), this.hls = this.interstitial = null, this.tracks = this.mediaAttached = this.checkPlayout = null;
  }
  attachMedia(e) {
    this.hls.attachMedia(e);
  }
  detachMedia() {
    this.removeMediaListeners(), this.mediaAttached = null, this.hls.detachMedia();
  }
  resumeBuffering() {
    this.hls.resumeBuffering();
  }
  pauseBuffering() {
    this.hls.pauseBuffering();
  }
  transferMedia() {
    return this.bufferSnapShot(), this.hls.transferMedia();
  }
  on(e, t, s) {
    this.hls.on(e, t);
  }
  once(e, t, s) {
    this.hls.once(e, t);
  }
  off(e, t, s) {
    this.hls.off(e, t);
  }
  toString() {
    var e, t;
    return `HlsAssetPlayer: ${Ii(this.assetItem)} ${(e = this.hls) == null ? void 0 : e.sessionId} ${(t = this.interstitial) != null && t.appendInPlace ? "append-in-place" : ""}`;
  }
}
const nn = 0.033;
class Gu extends Ze {
  constructor(e, t) {
    super("interstitials-sched", t), this.onScheduleUpdate = void 0, this.eventMap = {}, this.events = null, this.items = null, this.durations = {
      primary: 0,
      playout: 0,
      integrated: 0
    }, this.onScheduleUpdate = e;
  }
  destroy() {
    this.reset(), this.onScheduleUpdate = null;
  }
  reset() {
    this.eventMap = {}, this.setDurations(0, 0, 0), this.events && this.events.forEach((e) => e.reset()), this.events = this.items = null;
  }
  resetErrorsInRange(e, t) {
    return this.events ? this.events.reduce((s, i) => e <= i.startOffset && t > i.startOffset ? (delete i.error, s + 1) : s, 0) : 0;
  }
  get duration() {
    const e = this.items;
    return e ? e[e.length - 1].end : 0;
  }
  get length() {
    return this.items ? this.items.length : 0;
  }
  getEvent(e) {
    return e && this.eventMap[e] || null;
  }
  hasEvent(e) {
    return e in this.eventMap;
  }
  findItemIndex(e, t) {
    if (e.event)
      return this.findEventIndex(e.event.identifier);
    let s = -1;
    e.nextEvent ? s = this.findEventIndex(e.nextEvent.identifier) - 1 : e.previousEvent && (s = this.findEventIndex(e.previousEvent.identifier) + 1);
    const i = this.items;
    if (i)
      for (i[s] || (t === void 0 && (t = e.start), s = this.findItemIndexAtTime(t)); s >= 0 && (r = i[s]) != null && r.event; ) {
        var r;
        s--;
      }
    return s;
  }
  findItemIndexAtTime(e, t) {
    const s = this.items;
    if (s)
      for (let i = 0; i < s.length; i++) {
        let r = s[i];
        if (t && t !== "primary" && (r = r[t]), e === r.start || e > r.start && e < r.end)
          return i;
      }
    return -1;
  }
  findJumpRestrictedIndex(e, t) {
    const s = this.items;
    if (s)
      for (let i = e; i <= t && s[i]; i++) {
        const r = s[i].event;
        if (r != null && r.restrictions.jump && !r.appendInPlace)
          return i;
      }
    return -1;
  }
  findEventIndex(e) {
    const t = this.items;
    if (t)
      for (let i = t.length; i--; ) {
        var s;
        if (((s = t[i].event) == null ? void 0 : s.identifier) === e)
          return i;
      }
    return -1;
  }
  findAssetIndex(e, t) {
    const s = e.assetList, i = s.length;
    if (i > 1)
      for (let r = 0; r < i; r++) {
        const n = s[r];
        if (!n.error) {
          const o = n.timelineStart;
          if (t === o || t > o && t < o + (n.duration || 0))
            return r;
        }
      }
    return 0;
  }
  get assetIdAtEnd() {
    var e, t;
    const s = (e = this.items) == null || (t = e[this.length - 1]) == null ? void 0 : t.event;
    if (s) {
      const i = s.assetList, r = i[i.length - 1];
      if (r)
        return r.identifier;
    }
    return null;
  }
  parseInterstitialDateRanges(e, t) {
    const s = e.main.details, {
      dateRanges: i
    } = s, r = this.events, n = this.parseDateRanges(i, {
      url: s.url
    }, t), o = Object.keys(i), c = r ? r.filter((l) => !o.includes(l.identifier)) : [];
    n.length && n.sort((l, u) => {
      const d = l.cue.pre, h = l.cue.post, f = u.cue.pre, g = u.cue.post;
      if (d && !f)
        return -1;
      if (f && !d || h && !g)
        return 1;
      if (g && !h)
        return -1;
      if (!d && !f && !h && !g) {
        const y = l.startTime, p = u.startTime;
        if (y !== p)
          return y - p;
      }
      return l.dateRange.tagOrder - u.dateRange.tagOrder;
    }), this.events = n, c.forEach((l) => {
      this.removeEvent(l);
    }), this.updateSchedule(e, c);
  }
  updateSchedule(e, t = []) {
    const s = this.events || [];
    if (s.length || t.length || this.length < 2) {
      const i = this.items, r = this.parseSchedule(s, e);
      (t.length || (i == null ? void 0 : i.length) !== r.length || r.some((o, c) => Math.abs(o.playout.start - i[c].playout.start) > 5e-3 || Math.abs(o.playout.end - i[c].playout.end) > 5e-3)) && (this.items = r, this.onScheduleUpdate(t, i));
    }
  }
  parseDateRanges(e, t, s) {
    const i = [], r = Object.keys(e);
    for (let n = 0; n < r.length; n++) {
      const o = r[n], c = e[o];
      if (c.isInterstitial) {
        let l = this.eventMap[o];
        l ? l.setDateRange(c) : (l = new Bu(c, t), this.eventMap[o] = l, s === !1 && (l.appendInPlace = s)), i.push(l);
      }
    }
    return i;
  }
  parseSchedule(e, t) {
    const s = [], i = t.main.details, r = i.live ? 1 / 0 : i.edge;
    let n = 0;
    if (e = e.filter((c) => !c.error && !(c.cue.once && c.hasPlayed)), e.length) {
      this.resolveOffsets(e, t);
      let c = 0, l = 0;
      if (e.forEach((u, d) => {
        const h = u.cue.pre, f = u.cue.post, g = e[d - 1] || null, y = u.appendInPlace, p = f ? r : u.startOffset, E = u.duration, v = u.timelineOccupancy === ks.Range ? E : 0, T = u.resumptionOffset, S = (g == null ? void 0 : g.startTime) === p, x = p + u.cumulativeDuration;
        let _ = y ? x + E : p + T;
        if (h || !f && p <= 0) {
          const b = l;
          l += v, u.timelineStart = x;
          const C = n;
          n += E, s.push({
            event: u,
            start: x,
            end: _,
            playout: {
              start: C,
              end: n
            },
            integrated: {
              start: b,
              end: l
            }
          });
        } else if (p <= r) {
          if (!S) {
            const L = p - c;
            if (L > nn) {
              const w = c, F = l;
              l += L;
              const X = n;
              n += L;
              const W = {
                previousEvent: e[d - 1] || null,
                nextEvent: u,
                start: w,
                end: w + L,
                playout: {
                  start: X,
                  end: n
                },
                integrated: {
                  start: F,
                  end: l
                }
              };
              s.push(W);
            } else
              L > 0 && g && (g.cumulativeDuration += L, s[s.length - 1].end = p);
          }
          f && (_ = x), u.timelineStart = x;
          const b = l;
          l += v;
          const C = n;
          n += E, s.push({
            event: u,
            start: x,
            end: _,
            playout: {
              start: C,
              end: n
            },
            integrated: {
              start: b,
              end: l
            }
          });
        } else
          return;
        const A = u.resumeTime;
        f || A > r ? c = r : c = A;
      }), c < r) {
        var o;
        const u = c, d = l, h = r - c;
        l += h;
        const f = n;
        n += h, s.push({
          previousEvent: ((o = s[s.length - 1]) == null ? void 0 : o.event) || null,
          nextEvent: null,
          start: c,
          end: u + h,
          playout: {
            start: f,
            end: n
          },
          integrated: {
            start: d,
            end: l
          }
        });
      }
      this.setDurations(r, n, l);
    } else
      s.push({
        previousEvent: null,
        nextEvent: null,
        start: 0,
        end: r,
        playout: {
          start: 0,
          end: r
        },
        integrated: {
          start: 0,
          end: r
        }
      }), this.setDurations(r, r, r);
    return s;
  }
  setDurations(e, t, s) {
    this.durations = {
      primary: e,
      playout: t,
      integrated: s
    };
  }
  resolveOffsets(e, t) {
    const s = t.main.details, i = s.live ? 1 / 0 : s.edge;
    let r = 0, n = -1;
    e.forEach((o, c) => {
      const l = o.cue.pre, u = o.cue.post, d = l ? 0 : u ? i : o.startTime;
      this.updateAssetDurations(o), n === d ? o.cumulativeDuration = r : (r = 0, n = d), !u && o.snapOptions.in && (o.resumeAnchor = Et(null, s.fragments, o.startOffset + o.resumptionOffset, 0, 0) || void 0), o.appendInPlace && !o.appendInPlaceStarted && (this.primaryCanResumeInPlaceAt(o, t) || (o.appendInPlace = !1)), !o.appendInPlace && c + 1 < e.length && e[c + 1].startTime - e[c].resumeTime < nn && (e[c + 1].appendInPlace = !1, e[c + 1].appendInPlace && this.warn(`Could not change append strategy for abutting event ${o}`));
      const f = N(o.resumeOffset) ? o.resumeOffset : o.duration;
      r += f;
    });
  }
  primaryCanResumeInPlaceAt(e, t) {
    const s = e.resumeTime, i = e.startTime + e.resumptionOffset;
    return Math.abs(s - i) > bt ? (this.log(`"${e.identifier}" resumption ${s} not aligned with estimated timeline end ${i}`), !1) : t ? !Object.keys(t).some((n) => {
      const o = t[n].details, c = o.edge;
      if (s >= c)
        return this.log(`"${e.identifier}" resumption ${s} past ${n} playlist end ${c}`), !1;
      const l = Et(null, o.fragments, s);
      if (!l)
        return this.log(`"${e.identifier}" resumption ${s} does not align with any fragments in ${n} playlist (${o.fragStart}-${o.fragmentEnd})`), !0;
      const u = n === "audio" ? 0.175 : 0;
      return Math.abs(l.start - s) < bt + u || Math.abs(l.end - s) < bt + u ? !1 : (this.log(`"${e.identifier}" resumption ${s} not aligned with ${n} fragment bounds (${l.start}-${l.end} sn: ${l.sn} cc: ${l.cc})`), !0);
    }) : (this.log(`"${e.identifier}" resumption ${s} can not be aligned with media (none selected)`), !1);
  }
  updateAssetDurations(e) {
    if (!e.assetListLoaded)
      return;
    const t = e.timelineStart;
    let s = 0, i = !1, r = !1;
    e.assetList.forEach((n, o) => {
      const c = t + s;
      n.startOffset = s, n.timelineStart = c, i || (i = n.duration === null), r || (r = !!n.error);
      const l = n.error ? 0 : n.duration || 0;
      s += l;
    }), i && !r ? e.duration = Math.max(s, e.duration) : e.duration = s;
  }
  removeEvent(e) {
    e.reset(), delete this.eventMap[e.identifier];
  }
}
function tt(a) {
  return `[${a.event ? '"' + a.event.identifier + '"' : "primary"}: ${a.start.toFixed(2)}-${a.end.toFixed(2)}]`;
}
class Vu {
  constructor(e) {
    this.hls = void 0, this.hls = e;
  }
  destroy() {
    this.hls = null;
  }
  loadAssetList(e, t) {
    const s = e.assetListUrl;
    let i;
    try {
      i = Fa(s, this.hls.sessionId, e.baseUrl);
    } catch (h) {
      const f = this.assignAssetListError(e, R.ASSET_LIST_LOAD_ERROR, h, s);
      this.hls.trigger(m.ERROR, f);
      return;
    }
    t && i.protocol !== "data:" && i.searchParams.set("_HLS_start_offset", "" + t);
    const r = this.hls.config, n = r.loader, o = new n(r), c = {
      responseType: "json",
      url: i.href
    }, l = r.interstitialAssetListLoadPolicy.default, u = {
      loadPolicy: l,
      timeout: l.maxLoadTimeMs,
      maxRetry: 0,
      retryDelay: 0,
      maxRetryDelay: 0
    }, d = {
      onSuccess: (h, f, g, y) => {
        const p = h.data, E = p == null ? void 0 : p.ASSETS;
        if (!Array.isArray(E)) {
          const v = this.assignAssetListError(e, R.ASSET_LIST_PARSING_ERROR, new Error("Invalid interstitial asset list"), g.url, f, y);
          this.hls.trigger(m.ERROR, v);
          return;
        }
        e.assetListResponse = p, this.hls.trigger(m.ASSET_LIST_LOADED, {
          event: e,
          assetListResponse: p,
          networkDetails: y
        });
      },
      onError: (h, f, g, y) => {
        const p = this.assignAssetListError(e, R.ASSET_LIST_LOAD_ERROR, new Error(`Error loading X-ASSET-LIST: HTTP status ${h.code} ${h.text} (${f.url})`), f.url, y, g);
        this.hls.trigger(m.ERROR, p);
      },
      onTimeout: (h, f, g) => {
        const y = this.assignAssetListError(e, R.ASSET_LIST_LOAD_TIMEOUT, new Error(`Timeout loading X-ASSET-LIST (${f.url})`), f.url, h, g);
        this.hls.trigger(m.ERROR, y);
      }
    };
    return o.load(c, u, d), this.hls.trigger(m.ASSET_LIST_LOADING, {
      event: e
    }), o;
  }
  assignAssetListError(e, t, s, i, r, n) {
    return e.error = s, {
      type: H.NETWORK_ERROR,
      details: t,
      fatal: !1,
      interstitial: e,
      url: i,
      error: s,
      networkDetails: n,
      stats: r
    };
  }
}
function Qe(a, e, t) {
  We(a, e, t), a.addEventListener(e, t);
}
function We(a, e, t) {
  a.removeEventListener(e, t);
}
function an(a) {
  a == null || a.play().catch(() => {
  });
}
class Ku extends Ze {
  constructor(e, t) {
    super("interstitials", e.logger), this.HlsPlayerClass = void 0, this.hls = void 0, this.assetListLoader = void 0, this.mediaSelection = null, this.altSelection = null, this.media = null, this.detachedData = null, this.requiredTracks = null, this.manager = null, this.playerQueue = [], this.bufferedPos = -1, this.timelinePos = -1, this.schedule = void 0, this.playingItem = null, this.bufferingItem = null, this.waitingItem = null, this.endedItem = null, this.playingAsset = null, this.endedAsset = null, this.bufferingAsset = null, this.shouldPlay = !1, this.onPlay = () => {
      this.shouldPlay = !0;
    }, this.onPause = () => {
      this.shouldPlay = !1;
    }, this.onSeeking = () => {
      const s = this.currentTime;
      if (s === void 0 || this.playbackDisabled)
        return;
      const i = s - this.timelinePos;
      if (Math.abs(i) < 1 / 7056e5)
        return;
      const n = i <= -0.01;
      this.timelinePos = s, this.bufferedPos = s;
      const o = this.playingItem;
      if (!o) {
        this.checkBuffer();
        return;
      }
      if (n && this.schedule.resetErrorsInRange(s, s - i) && this.updateSchedule(), this.checkBuffer(), n && s < o.start || s >= o.end) {
        var c;
        const h = this.schedule.findItemIndexAtTime(this.timelinePos);
        if (!this.isInterstitial(o) && (c = this.media) != null && c.paused && (this.shouldPlay = !1), !n) {
          const f = this.findItemIndex(o);
          if (h > f) {
            const g = this.schedule.findJumpRestrictedIndex(f + 1, h);
            if (g > f) {
              this.setSchedulePosition(g);
              return;
            }
          }
        }
        this.setSchedulePosition(h);
        return;
      }
      const l = this.playingAsset;
      if (!l) {
        if (this.playingLastItem && this.isInterstitial(o)) {
          const h = o.event.assetList[0];
          h && (this.endedItem = this.playingItem, this.playingItem = null, this.setScheduleToAssetAtTime(s, h));
        }
        return;
      }
      const u = l.timelineStart, d = l.duration || 0;
      (n && s < u || s >= u + d) && this.setScheduleToAssetAtTime(s, l);
    }, this.onTimeupdate = () => {
      const s = this.currentTime;
      if (s === void 0 || this.playbackDisabled)
        return;
      if (s > this.timelinePos)
        this.timelinePos = s, s > this.bufferedPos && this.checkBuffer();
      else
        return;
      const i = this.playingItem;
      if (!i || this.playingLastItem)
        return;
      if (s >= i.end) {
        this.timelinePos = i.end;
        const o = this.findItemIndex(i);
        this.setSchedulePosition(o + 1);
      }
      const r = this.playingAsset;
      if (!r)
        return;
      const n = r.timelineStart + (r.duration || 0);
      s >= n && this.setScheduleToAssetAtTime(s, r);
    }, this.onScheduleUpdate = (s, i) => {
      const r = this.schedule, n = this.playingItem, o = r.events || [], c = r.items || [], l = r.durations, u = s.map((f) => f.identifier), d = !!(o.length || u.length);
      if (d && this.log(`INTERSTITIALS_UPDATED (${o.length}): ${o}
Schedule: ${c.map((f) => tt(f))}`), u.length && this.log(`Removed events ${u}`), this.playerQueue.forEach((f) => {
        if (f.interstitial.appendInPlace) {
          const g = f.assetItem.timelineStart, y = f.timelineOffset - g;
          if (y)
            try {
              f.timelineOffset = g;
            } catch (p) {
              Math.abs(y) > bt && this.warn(`${p} ("${f.assetId}" ${f.timelineOffset}->${g})`);
            }
        }
      }), n) {
        const f = this.updateItem(n, this.timelinePos);
        this.itemsMatch(n, f) && (this.playingItem = f, this.waitingItem = this.endedItem = null);
      } else
        this.waitingItem = this.updateItem(this.waitingItem), this.endedItem = this.updateItem(this.endedItem);
      const h = this.bufferingItem;
      if (h) {
        const f = this.updateItem(h, this.bufferedPos);
        this.itemsMatch(h, f) ? this.bufferingItem = f : h.event && (this.bufferingItem = this.playingItem, this.clearInterstitial(h.event, null));
      }
      if (s.forEach((f) => {
        f.assetList.forEach((g) => {
          this.clearAssetPlayer(g.identifier, null);
        });
      }), d || i) {
        if (this.hls.trigger(m.INTERSTITIALS_UPDATED, {
          events: o.slice(0),
          schedule: c.slice(0),
          durations: l,
          removedIds: u
        }), this.isInterstitial(n) && u.includes(n.event.identifier)) {
          this.warn(`Interstitial "${n.event.identifier}" removed while playing`), this.primaryFallback(n.event);
          return;
        }
        this.checkBuffer();
      }
    }, this.hls = e, this.HlsPlayerClass = t, this.assetListLoader = new Vu(e), this.schedule = new Gu(this.onScheduleUpdate, e.logger), this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(m.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), e.on(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(m.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), e.on(m.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e.on(m.ASSET_LIST_LOADED, this.onAssetListLoaded, this), e.on(m.BUFFER_APPENDED, this.onBufferAppended, this), e.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(m.BUFFERED_TO_END, this.onBufferedToEnd, this), e.on(m.MEDIA_ENDED, this.onMediaEnded, this), e.on(m.ERROR, this.onError, this), e.on(m.DESTROYING, this.onDestroying, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(m.AUDIO_TRACK_UPDATED, this.onAudioTrackUpdated, this), e.off(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(m.SUBTITLE_TRACK_UPDATED, this.onSubtitleTrackUpdated, this), e.off(m.EVENT_CUE_ENTER, this.onInterstitialCueEnter, this), e.off(m.ASSET_LIST_LOADED, this.onAssetListLoaded, this), e.off(m.BUFFER_CODECS, this.onBufferCodecs, this), e.off(m.BUFFER_APPENDED, this.onBufferAppended, this), e.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(m.BUFFERED_TO_END, this.onBufferedToEnd, this), e.off(m.MEDIA_ENDED, this.onMediaEnded, this), e.off(m.ERROR, this.onError, this), e.off(m.DESTROYING, this.onDestroying, this));
  }
  startLoad() {
    this.resumeBuffering();
  }
  stopLoad() {
    this.pauseBuffering();
  }
  resumeBuffering() {
    var e;
    (e = this.getBufferingPlayer()) == null || e.resumeBuffering();
  }
  pauseBuffering() {
    var e;
    (e = this.getBufferingPlayer()) == null || e.pauseBuffering();
  }
  destroy() {
    this.unregisterListeners(), this.stopLoad(), this.assetListLoader && this.assetListLoader.destroy(), this.emptyPlayerQueue(), this.clearScheduleState(), this.schedule && this.schedule.destroy(), this.media = this.detachedData = this.mediaSelection = this.requiredTracks = this.altSelection = this.manager = null, this.hls = this.HlsPlayerClass = this.schedule = this.log = null, this.assetListLoader = null, this.onPlay = this.onPause = this.onSeeking = this.onTimeupdate = null, this.onScheduleUpdate = null;
  }
  onDestroying() {
    const e = this.primaryMedia || this.media;
    e && this.removeMediaListeners(e);
  }
  removeMediaListeners(e) {
    We(e, "play", this.onPlay), We(e, "pause", this.onPause), We(e, "seeking", this.onSeeking), We(e, "timeupdate", this.onTimeupdate);
  }
  onMediaAttaching(e, t) {
    const s = this.media = t.media;
    Qe(s, "seeking", this.onSeeking), Qe(s, "timeupdate", this.onTimeupdate), Qe(s, "play", this.onPlay), Qe(s, "pause", this.onPause);
  }
  onMediaAttached(e, t) {
    const s = this.effectivePlayingItem, i = this.detachedData;
    if (this.detachedData = null, s === null)
      this.checkStart();
    else if (!i) {
      this.clearScheduleState();
      const r = this.findItemIndex(s);
      this.setSchedulePosition(r);
    }
  }
  clearScheduleState() {
    this.playingItem = this.bufferingItem = this.waitingItem = this.endedItem = this.playingAsset = this.endedAsset = this.bufferingAsset = null;
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia, i = this.media;
    if (this.media = null, !s && (i && this.removeMediaListeners(i), this.detachedData)) {
      const r = this.getBufferingPlayer();
      r && (this.playingAsset = this.endedAsset = this.bufferingAsset = this.bufferingItem = this.waitingItem = this.detachedData = null, r.detachMedia()), this.shouldPlay = !1;
    }
  }
  get interstitialsManager() {
    if (!this.manager) {
      if (!this.hls)
        return null;
      const e = this, t = () => e.bufferingItem || e.waitingItem, s = (d) => d && e.getAssetPlayer(d.identifier), i = (d, h, f, g, y) => {
        if (d) {
          let p = d[h].start;
          const E = d.event;
          if (E) {
            if (h === "playout" || E.timelineOccupancy !== ks.Point) {
              const v = s(f);
              (v == null ? void 0 : v.interstitial) === E && (p += v.assetItem.startOffset + v[y]);
            }
          } else {
            const v = g === "bufferedPos" ? n() : e[g];
            p += v - d.start;
          }
          return p;
        }
        return 0;
      }, r = (d, h) => {
        if (d !== 0 && h !== "primary" && e.schedule.length) {
          var f;
          const g = e.schedule.findItemIndexAtTime(d), y = (f = e.schedule.items) == null ? void 0 : f[g];
          if (y) {
            const p = y[h].start - y.start;
            return d + p;
          }
        }
        return d;
      }, n = () => {
        const d = e.bufferedPos;
        return d === Number.MAX_VALUE ? o("primary") : Math.max(d, 0);
      }, o = (d) => {
        var h;
        return (h = e.primaryDetails) != null && h.live ? e.primaryDetails.edge : e.schedule.durations[d];
      }, c = (d, h) => {
        var f, g;
        const y = e.effectivePlayingItem;
        if (y != null && (f = y.event) != null && f.restrictions.skip)
          return;
        e.log(`seek to ${d} "${h}"`);
        const p = e.effectivePlayingItem, E = e.schedule.findItemIndexAtTime(d, h), v = (g = e.schedule.items) == null ? void 0 : g[E], T = e.getBufferingPlayer(), S = T == null ? void 0 : T.interstitial, x = S == null ? void 0 : S.appendInPlace, _ = p && e.itemsMatch(p, v);
        if (p && (x || _)) {
          const b = s(e.playingAsset), C = (b == null ? void 0 : b.media) || e.primaryMedia;
          if (C) {
            const L = h === "primary" ? C.currentTime : i(p, h, e.playingAsset, "timelinePos", "currentTime"), w = d - L, F = (x ? L : C.currentTime) + w;
            if (F >= 0 && (!b || x || F <= b.duration)) {
              C.currentTime = F;
              return;
            }
          }
        }
        if (v) {
          let b = d;
          if (h !== "primary") {
            const L = v[h].start, w = d - L;
            b = v.start + w;
          }
          const C = !e.isInterstitial(v);
          if ((!e.isInterstitial(p) || p.event.appendInPlace) && (C || v.event.appendInPlace)) {
            const L = e.media || (x ? T == null ? void 0 : T.media : null);
            L && (L.currentTime = b);
          } else if (p) {
            const L = e.findItemIndex(p);
            if (E > L) {
              const F = e.schedule.findJumpRestrictedIndex(L + 1, E);
              if (F > L) {
                e.setSchedulePosition(F);
                return;
              }
            }
            let w = 0;
            if (C)
              e.timelinePos = b, e.checkBuffer();
            else {
              var A;
              const F = v == null || (A = v.event) == null ? void 0 : A.assetList;
              if (F) {
                const X = d - (v[h] || v).start;
                for (let W = F.length; W--; ) {
                  const K = F[W];
                  if (K.duration && X >= K.startOffset && X < K.startOffset + K.duration) {
                    w = W;
                    break;
                  }
                }
              }
            }
            e.setSchedulePosition(E, w);
          }
        }
      }, l = () => {
        const d = e.effectivePlayingItem;
        if (e.isInterstitial(d))
          return d;
        const h = t();
        return e.isInterstitial(h) ? h : null;
      }, u = {
        get currentTime() {
          const d = l(), h = e.effectivePlayingItem;
          return h && h === d ? i(h, "playout", e.effectivePlayingAsset, "timelinePos", "currentTime") - h.playout.start : 0;
        },
        set currentTime(d) {
          const h = l(), f = e.effectivePlayingItem;
          f && f === h && c(d + f.playout.start, "playout");
        },
        get duration() {
          const d = l();
          return d ? d.playout.end - d.playout.start : 0;
        },
        get assetPlayers() {
          var d;
          const h = (d = l()) == null ? void 0 : d.event.assetList;
          return h ? h.map((f) => e.getAssetPlayer(f.identifier)) : [];
        },
        get playingIndex() {
          var d;
          const h = (d = l()) == null ? void 0 : d.event;
          return h && e.effectivePlayingAsset ? h.findAssetIndex(e.effectivePlayingAsset) : -1;
        },
        get scheduleItem() {
          return l();
        }
      };
      this.manager = {
        get events() {
          var d, h;
          return ((d = e.schedule) == null || (h = d.events) == null ? void 0 : h.slice(0)) || [];
        },
        get schedule() {
          var d, h;
          return ((d = e.schedule) == null || (h = d.items) == null ? void 0 : h.slice(0)) || [];
        },
        get interstitialPlayer() {
          return l() ? u : null;
        },
        get playerQueue() {
          return e.playerQueue.slice(0);
        },
        get bufferingAsset() {
          return e.bufferingAsset;
        },
        get bufferingItem() {
          return t();
        },
        get bufferingIndex() {
          const d = t();
          return e.findItemIndex(d);
        },
        get playingAsset() {
          return e.effectivePlayingAsset;
        },
        get playingItem() {
          return e.effectivePlayingItem;
        },
        get playingIndex() {
          const d = e.effectivePlayingItem;
          return e.findItemIndex(d);
        },
        primary: {
          get bufferedEnd() {
            return n();
          },
          get currentTime() {
            const d = e.timelinePos;
            return d > 0 ? d : 0;
          },
          set currentTime(d) {
            c(d, "primary");
          },
          get duration() {
            return o("primary");
          },
          get seekableStart() {
            var d;
            return ((d = e.primaryDetails) == null ? void 0 : d.fragmentStart) || 0;
          }
        },
        integrated: {
          get bufferedEnd() {
            return i(t(), "integrated", e.bufferingAsset, "bufferedPos", "bufferedEnd");
          },
          get currentTime() {
            return i(e.effectivePlayingItem, "integrated", e.effectivePlayingAsset, "timelinePos", "currentTime");
          },
          set currentTime(d) {
            c(d, "integrated");
          },
          get duration() {
            return o("integrated");
          },
          get seekableStart() {
            var d;
            return r(((d = e.primaryDetails) == null ? void 0 : d.fragmentStart) || 0, "integrated");
          }
        },
        skip: () => {
          const d = e.effectivePlayingItem, h = d == null ? void 0 : d.event;
          if (h && !h.restrictions.skip) {
            const f = e.findItemIndex(d);
            if (h.appendInPlace) {
              const g = d.playout.start + d.event.duration;
              c(g + 1e-3, "playout");
            } else
              e.advanceAfterAssetEnded(h, f, 1 / 0);
          }
        }
      };
    }
    return this.manager;
  }
  // Schedule getters
  get effectivePlayingItem() {
    return this.waitingItem || this.playingItem || this.endedItem;
  }
  get effectivePlayingAsset() {
    return this.playingAsset || this.endedAsset;
  }
  get playingLastItem() {
    var e;
    const t = this.playingItem, s = (e = this.schedule) == null ? void 0 : e.items;
    return !this.playbackStarted || !t || !s ? !1 : this.findItemIndex(t) === s.length - 1;
  }
  get playbackStarted() {
    return this.effectivePlayingItem !== null;
  }
  // Media getters and event callbacks
  get currentTime() {
    var e, t, s;
    if (this.mediaSelection === null)
      return;
    const i = this.waitingItem || this.playingItem;
    if (this.isInterstitial(i) && !i.event.appendInPlace)
      return;
    let r = this.media;
    !r && (e = this.bufferingItem) != null && (t = e.event) != null && t.appendInPlace && (r = this.primaryMedia);
    const n = (s = r) == null ? void 0 : s.currentTime;
    if (!(n === void 0 || !N(n)))
      return n;
  }
  get primaryMedia() {
    var e;
    return this.media || ((e = this.detachedData) == null ? void 0 : e.media) || null;
  }
  isInterstitial(e) {
    return !!(e != null && e.event);
  }
  retreiveMediaSource(e, t) {
    const s = this.getAssetPlayer(e);
    s && this.transferMediaFromPlayer(s, t);
  }
  transferMediaFromPlayer(e, t) {
    const s = e.interstitial.appendInPlace, i = e.media;
    if (s && i === this.primaryMedia) {
      if (this.bufferingAsset = null, (!t || this.isInterstitial(t) && !t.event.appendInPlace) && t && i) {
        this.detachedData = {
          media: i
        };
        return;
      }
      const r = e.transferMedia();
      this.log(`transfer MediaSource from ${e} ${ue(r)}`), this.detachedData = r;
    } else
      t && i && (this.shouldPlay || (this.shouldPlay = !i.paused));
  }
  transferMediaTo(e, t) {
    var s, i;
    if (e.media === t)
      return;
    let r = null;
    const n = this.hls, o = e !== n, c = o && e.interstitial.appendInPlace, l = (s = this.detachedData) == null ? void 0 : s.mediaSource;
    let u;
    if (n.media)
      c && (r = n.transferMedia(), this.detachedData = r), u = "Primary";
    else if (l) {
      const f = this.getBufferingPlayer();
      f ? (r = f.transferMedia(), u = `${f}`) : u = "detached MediaSource";
    } else
      u = "detached media";
    if (!r) {
      if (l)
        r = this.detachedData, this.log(`using detachedData: MediaSource ${ue(r)}`);
      else if (!this.detachedData || n.media === t) {
        const f = this.playerQueue;
        f.length > 1 && f.forEach((g) => {
          if (o && g.interstitial.appendInPlace !== c) {
            const y = g.interstitial;
            this.clearInterstitial(g.interstitial, null), y.appendInPlace = !1, y.appendInPlace && this.warn(`Could not change append strategy for queued assets ${y}`);
          }
        }), this.hls.detachMedia(), this.detachedData = {
          media: t
        };
      }
    }
    const d = r && "mediaSource" in r && ((i = r.mediaSource) == null ? void 0 : i.readyState) !== "closed", h = d && r ? r : t;
    if (this.log(`${d ? "transfering MediaSource" : "attaching media"} to ${o ? e : "Primary"} from ${u}`), h === r) {
      const f = o && e.assetId === this.schedule.assetIdAtEnd;
      h.overrides = {
        duration: this.schedule.duration,
        endOfStream: !o || f,
        cueRemoval: !o
      };
    }
    e.attachMedia(h);
  }
  onInterstitialCueEnter() {
    this.onTimeupdate();
  }
  // Scheduling methods
  checkStart() {
    const e = this.schedule, t = e.events;
    if (!t || this.playbackDisabled || !this.media)
      return;
    this.bufferedPos === -1 && (this.bufferedPos = 0);
    const s = this.timelinePos, i = this.effectivePlayingItem;
    if (s === -1) {
      const r = this.hls.startPosition;
      if (this.timelinePos = r, t.length && t[0].cue.pre) {
        const n = e.findEventIndex(t[0].identifier);
        this.setSchedulePosition(n);
      } else if (r >= 0 || !this.primaryLive) {
        const n = this.timelinePos = r > 0 ? r : 0, o = e.findItemIndexAtTime(n);
        this.setSchedulePosition(o);
      }
    } else if (i && !this.playingItem) {
      const r = e.findItemIndex(i);
      this.setSchedulePosition(r);
    }
  }
  advanceAfterAssetEnded(e, t, s) {
    const i = s + 1;
    if (!e.isAssetPastPlayoutLimit(i) && !e.assetList[i].error)
      this.setSchedulePosition(t, i);
    else {
      const r = this.schedule.items;
      if (r) {
        const n = t + 1, o = r.length;
        if (n >= o) {
          this.setSchedulePosition(-1);
          return;
        }
        const c = e.resumeTime;
        this.timelinePos < c && (this.timelinePos = c, this.checkBuffer()), this.setSchedulePosition(n);
      }
    }
  }
  setScheduleToAssetAtTime(e, t) {
    const s = this.schedule, i = t.parentIdentifier, r = s.getEvent(i);
    if (r) {
      const n = s.findEventIndex(i), o = s.findAssetIndex(r, e);
      this.setSchedulePosition(n, o);
    }
  }
  setSchedulePosition(e, t) {
    const s = this.schedule.items;
    if (!s || this.playbackDisabled)
      return;
    this.log(`setSchedulePosition ${e}, ${t}`);
    const i = e >= 0 ? s[e] : null, r = this.playingItem, n = this.playingLastItem;
    if (this.isInterstitial(r)) {
      var o;
      const l = r.event, u = this.playingAsset, d = u == null ? void 0 : u.identifier, h = d ? this.getAssetPlayer(d) : null;
      if (h && d && (!this.eventItemsMatch(r, i) || t !== void 0 && d !== ((o = l.assetList) == null ? void 0 : o[t].identifier))) {
        var c;
        const f = l.findAssetIndex(u);
        this.log(`INTERSTITIAL_ASSET_ENDED ${f + 1}/${l.assetList.length} ${Ii(u)}`), this.endedAsset = u, this.playingAsset = null, this.hls.trigger(m.INTERSTITIAL_ASSET_ENDED, {
          asset: u,
          assetListIndex: f,
          event: l,
          schedule: s.slice(0),
          scheduleIndex: e,
          player: h
        }), this.retreiveMediaSource(d, i), h.media && !((c = this.detachedData) != null && c.mediaSource) && h.detachMedia();
      }
      if (!this.eventItemsMatch(r, i) && (this.endedItem = r, this.playingItem = null, this.log(`INTERSTITIAL_ENDED ${l} ${tt(r)}`), l.hasPlayed = !0, this.hls.trigger(m.INTERSTITIAL_ENDED, {
        event: l,
        schedule: s.slice(0),
        scheduleIndex: e
      }), l.cue.once)) {
        this.updateSchedule();
        const f = this.schedule.items;
        if (i && f) {
          const g = this.schedule.findItemIndex(i);
          this.advanceSchedule(g, f, t, r, n);
        }
        return;
      }
    }
    this.advanceSchedule(e, s, t, r, n);
  }
  advanceSchedule(e, t, s, i, r) {
    const n = e >= 0 ? t[e] : null, o = this.primaryMedia, c = this.playerQueue;
    if (c.length && c.forEach((l) => {
      const u = l.interstitial, d = this.schedule.findEventIndex(u.identifier);
      (d < e || d > e + 1) && this.clearInterstitial(u, n);
    }), this.isInterstitial(n)) {
      this.timelinePos = Math.min(Math.max(this.timelinePos, n.start), n.end);
      const l = n.event;
      s === void 0 && (s = this.schedule.findAssetIndex(l, this.timelinePos));
      const u = this.waitingItem;
      this.assetsBuffered(n, o) || this.setBufferingItem(n);
      let d = this.preloadAssets(l, s);
      if (this.eventItemsMatch(n, u || i) || (this.waitingItem = n, this.log(`INTERSTITIAL_STARTED ${tt(n)} ${l.appendInPlace ? "append in place" : ""}`), this.hls.trigger(m.INTERSTITIAL_STARTED, {
        event: l,
        schedule: t.slice(0),
        scheduleIndex: e
      })), !l.assetListLoaded) {
        this.log(`Waiting for ASSET-LIST to complete loading ${l}`);
        return;
      }
      if (l.assetListLoader && (l.assetListLoader.destroy(), l.assetListLoader = void 0), !o) {
        this.log(`Waiting for attachMedia to start Interstitial ${l}`);
        return;
      }
      this.waitingItem = this.endedItem = null, this.playingItem = n;
      const h = l.assetList[s];
      if (!h) {
        const f = t[e + 1], g = this.media;
        f && g && !this.isInterstitial(f) && g.currentTime < f.start && (g.currentTime = this.timelinePos = f.start), this.advanceAfterAssetEnded(l, e, s || 0);
        return;
      }
      if (d || (d = this.getAssetPlayer(h.identifier)), d === null || d.destroyed) {
        const f = l.assetList.length;
        this.warn(`asset ${s + 1}/${f} player destroyed ${l}`), d = this.createAssetPlayer(l, h, s);
      }
      if (!this.eventItemsMatch(n, this.bufferingItem) && l.appendInPlace && this.isAssetBuffered(h))
        return;
      this.startAssetPlayer(d, s, t, e, o), this.shouldPlay && an(d.media);
    } else
      n !== null ? (this.resumePrimary(n, e, i), this.shouldPlay && an(this.hls.media)) : r && this.isInterstitial(i) && (this.endedItem = null, this.playingItem = i, i.event.appendInPlace || this.attachPrimary(this.schedule.durations.primary, null));
  }
  get playbackDisabled() {
    return this.hls.config.enableInterstitialPlayback === !1;
  }
  get primaryDetails() {
    var e, t;
    return (e = this.mediaSelection) == null || (t = e.main) == null ? void 0 : t.details;
  }
  get primaryLive() {
    var e;
    return !!((e = this.primaryDetails) != null && e.live);
  }
  resumePrimary(e, t, s) {
    var i;
    if (this.playingItem = e, this.playingAsset = this.endedAsset = null, this.waitingItem = this.endedItem = null, this.bufferedToItem(e), this.log(`resuming ${tt(e)}`), !((i = this.detachedData) != null && i.mediaSource)) {
      let n = this.timelinePos;
      (n < e.start || n >= e.end) && (n = this.getPrimaryResumption(e, t), this.timelinePos = n), this.attachPrimary(n, e);
    }
    if (!s)
      return;
    const r = this.schedule.items;
    r && (this.log(`resumed ${tt(e)}`), this.hls.trigger(m.INTERSTITIALS_PRIMARY_RESUMED, {
      schedule: r.slice(0),
      scheduleIndex: t
    }), this.checkBuffer());
  }
  getPrimaryResumption(e, t) {
    const s = e.start;
    if (this.primaryLive) {
      const i = this.primaryDetails;
      if (t === 0)
        return this.hls.startPosition;
      if (i && (s < i.fragmentStart || s > i.edge))
        return this.hls.liveSyncPosition || -1;
    }
    return s;
  }
  isAssetBuffered(e) {
    const t = this.getAssetPlayer(e.identifier);
    return t != null && t.hls ? t.hls.bufferedToEnd : z.bufferInfo(this.primaryMedia, this.timelinePos, 0).end + 1 >= e.timelineStart + (e.duration || 0);
  }
  attachPrimary(e, t, s) {
    t ? this.setBufferingItem(t) : this.bufferingItem = this.playingItem, this.bufferingAsset = null;
    const i = this.primaryMedia;
    if (!i)
      return;
    const r = this.hls;
    r.media ? this.checkBuffer() : (this.transferMediaTo(r, i), s && this.startLoadingPrimaryAt(e, s)), s || (this.timelinePos = e, this.startLoadingPrimaryAt(e, s));
  }
  startLoadingPrimaryAt(e, t) {
    var s;
    const i = this.hls;
    !i.loadingEnabled || !i.media || Math.abs((((s = i.mainForwardBufferInfo) == null ? void 0 : s.start) || i.media.currentTime) - e) > 0.5 ? i.startLoad(e, t) : i.bufferingEnabled || i.resumeBuffering();
  }
  // HLS.js event callbacks
  onManifestLoading() {
    this.stopLoad(), this.schedule.reset(), this.emptyPlayerQueue(), this.clearScheduleState(), this.shouldPlay = !1, this.bufferedPos = this.timelinePos = -1, this.mediaSelection = this.altSelection = this.manager = this.requiredTracks = null, this.hls.off(m.BUFFER_CODECS, this.onBufferCodecs, this), this.hls.on(m.BUFFER_CODECS, this.onBufferCodecs, this);
  }
  onLevelUpdated(e, t) {
    if (t.level === -1)
      return;
    const s = this.hls.levels[t.level], i = re(re({}, this.mediaSelection || this.altSelection), {}, {
      main: s
    });
    this.mediaSelection = i, this.schedule.parseInterstitialDateRanges(i, this.hls.config.interstitialAppendInPlace), !this.effectivePlayingItem && this.schedule.items && this.checkStart();
  }
  onAudioTrackUpdated(e, t) {
    const s = this.hls.audioTracks[t.id], i = this.mediaSelection;
    if (!i) {
      this.altSelection = re(re({}, this.altSelection), {}, {
        audio: s
      });
      return;
    }
    const r = re(re({}, i), {}, {
      audio: s
    });
    this.mediaSelection = r;
  }
  onSubtitleTrackUpdated(e, t) {
    const s = this.hls.subtitleTracks[t.id], i = this.mediaSelection;
    if (!i) {
      this.altSelection = re(re({}, this.altSelection), {}, {
        subtitles: s
      });
      return;
    }
    const r = re(re({}, i), {}, {
      subtitles: s
    });
    this.mediaSelection = r;
  }
  onAudioTrackSwitching(e, t) {
    const s = yr(t);
    this.playerQueue.forEach((i) => i.hls.setAudioOption(t) || i.hls.setAudioOption(s));
  }
  onSubtitleTrackSwitch(e, t) {
    const s = yr(t);
    this.playerQueue.forEach((i) => i.hls.setSubtitleOption(t) || t.id !== -1 && i.hls.setSubtitleOption(s));
  }
  onBufferCodecs(e, t) {
    const s = t.tracks;
    s && (this.requiredTracks = s);
  }
  onBufferAppended(e, t) {
    this.checkBuffer();
  }
  onBufferFlushed(e, t) {
    const s = this.playingItem;
    if (s && !this.itemsMatch(s, this.bufferingItem) && !this.isInterstitial(s)) {
      const i = this.timelinePos;
      this.bufferedPos = i, this.checkBuffer();
    }
  }
  onBufferedToEnd(e) {
    const t = this.schedule.events;
    if (this.bufferedPos < Number.MAX_VALUE && t) {
      for (let i = 0; i < t.length; i++) {
        const r = t[i];
        if (r.cue.post) {
          var s;
          const n = this.schedule.findEventIndex(r.identifier), o = (s = this.schedule.items) == null ? void 0 : s[n];
          this.isInterstitial(o) && this.eventItemsMatch(o, this.bufferingItem) && this.bufferedToItem(o, 0);
          break;
        }
      }
      this.bufferedPos = Number.MAX_VALUE;
    }
  }
  onMediaEnded(e) {
    const t = this.playingItem;
    if (!this.playingLastItem && t) {
      const s = this.findItemIndex(t);
      this.setSchedulePosition(s + 1);
    } else
      this.shouldPlay = !1;
  }
  updateItem(e, t) {
    const s = this.schedule.items;
    if (e && s) {
      const i = this.findItemIndex(e, t);
      return s[i] || null;
    }
    return null;
  }
  itemsMatch(e, t) {
    return !!t && (e === t || e.event && t.event && this.eventItemsMatch(e, t) || !e.event && !t.event && this.findItemIndex(e) === this.findItemIndex(t));
  }
  eventItemsMatch(e, t) {
    var s;
    return !!t && (e === t || e.event.identifier === ((s = t.event) == null ? void 0 : s.identifier));
  }
  findItemIndex(e, t) {
    return e ? this.schedule.findItemIndex(e, t) : -1;
  }
  updateSchedule() {
    const e = this.mediaSelection;
    e && this.schedule.updateSchedule(e, []);
  }
  // Schedule buffer control
  checkBuffer(e) {
    const t = this.schedule.items;
    if (!t)
      return;
    const s = z.bufferInfo(this.primaryMedia, this.timelinePos, 0);
    e && (this.bufferedPos = this.timelinePos), e || (e = s.len < 1), this.updateBufferedPos(s.end, t, e);
  }
  updateBufferedPos(e, t, s) {
    const i = this.schedule, r = this.bufferingItem;
    if (this.bufferedPos > e)
      return;
    if (t.length === 1 && this.itemsMatch(t[0], r)) {
      this.bufferedPos = e;
      return;
    }
    const n = this.playingItem, o = this.findItemIndex(n);
    let c = i.findItemIndexAtTime(e);
    if (this.bufferedPos < e) {
      var l, u;
      const d = this.findItemIndex(r), h = Math.min(d + 1, t.length - 1), f = t[h];
      if ((c === -1 && r && e >= r.end || (l = f.event) != null && l.appendInPlace && e + 0.01 >= f.start) && (c = h), h - o > 1 && (r == null || (u = r.event) == null ? void 0 : u.appendInPlace) === !1)
        return;
      if (this.bufferedPos = e, c > d && c > o)
        this.bufferedToItem(f);
      else {
        const g = this.primaryDetails;
        this.primaryLive && g && e > g.edge - g.targetduration && f.start < g.edge + this.hls.config.interstitialLiveLookAhead && this.isInterstitial(f) && this.preloadAssets(f.event, 0);
      }
    } else
      s && n && !this.itemsMatch(n, r) && (c === o ? this.bufferedToItem(n) : c === o + 1 && this.bufferedToItem(t[c]));
  }
  assetsBuffered(e, t) {
    return e.event.assetList.length === 0 ? !1 : !e.event.assetList.some((i) => {
      const r = this.getAssetPlayer(i.identifier);
      return !(r != null && r.bufferedInPlaceToEnd(t));
    });
  }
  setBufferingItem(e) {
    const t = this.bufferingItem, s = this.schedule;
    if (this.itemsMatch(e, t))
      this.bufferingItem !== e && (this.bufferingItem = e);
    else {
      const {
        items: i,
        events: r
      } = s;
      if (!i || !r)
        return t;
      const n = this.isInterstitial(e), o = this.getBufferingPlayer();
      if (this.bufferingItem = e, this.bufferedPos = Math.max(e.start, Math.min(e.end, this.timelinePos)), !this.playbackDisabled) {
        const c = o ? o.remaining : t ? t.end - this.timelinePos : 0;
        this.log(`buffered to boundary ${tt(e)}` + (t ? ` (${c.toFixed(2)} remaining)` : "")), n ? e.event.assetList.forEach((l) => {
          const u = this.getAssetPlayer(l.identifier);
          u && u.resumeBuffering();
        }) : (this.hls.resumeBuffering(), this.playerQueue.forEach((l) => l.pauseBuffering()));
      }
      this.hls.trigger(m.INTERSTITIALS_BUFFERED_TO_BOUNDARY, {
        events: r.slice(0),
        schedule: i.slice(0),
        bufferingIndex: this.findItemIndex(e),
        playingIndex: this.findItemIndex(this.playingItem)
      });
    }
    return t;
  }
  bufferedToItem(e, t = 0) {
    const s = this.setBufferingItem(e);
    if (!this.playbackDisabled) {
      if (this.isInterstitial(e))
        this.bufferedToEvent(e, t);
      else if (s !== null) {
        this.bufferingAsset = null;
        const i = this.detachedData;
        i ? i.mediaSource ? this.attachPrimary(e.start, e, !0) : this.preloadPrimary(e) : this.preloadPrimary(e);
      }
    }
  }
  preloadPrimary(e) {
    const t = this.findItemIndex(e), s = this.getPrimaryResumption(e, t);
    this.startLoadingPrimaryAt(s);
  }
  bufferedToEvent(e, t) {
    const s = e.event, i = s.assetList.length === 0 && !s.assetListLoader, r = s.cue.once;
    if (i || !r) {
      const n = this.preloadAssets(s, t);
      if (n != null && n.interstitial.appendInPlace) {
        const o = s.assetList[t], c = this.primaryMedia;
        o && c && this.bufferAssetPlayer(n, c);
      }
    }
  }
  preloadAssets(e, t) {
    const s = e.assetUrl, i = e.assetList.length, r = i === 0 && !e.assetListLoader, n = e.cue.once;
    if (r) {
      const c = e.timelineStart;
      if (e.appendInPlace) {
        var o;
        const h = this.playingItem;
        !this.isInterstitial(h) && (h == null || (o = h.nextEvent) == null ? void 0 : o.identifier) === e.identifier && this.flushFrontBuffer(c + 0.25);
      }
      let l, u = 0;
      if (!this.playingItem && this.primaryLive && (u = this.hls.startPosition, u === -1 && (u = this.hls.liveSyncPosition || 0)), u && !(e.cue.pre || e.cue.post)) {
        const h = u - c;
        h > 0 && (l = Math.round(h * 1e3) / 1e3);
      }
      if (this.log(`Load interstitial asset ${t + 1}/${s ? 1 : i} ${e}${l ? ` live-start: ${u} start-offset: ${l}` : ""}`), s)
        return this.createAsset(e, 0, 0, c, e.duration, s);
      const d = this.assetListLoader.loadAssetList(e, l);
      d && (e.assetListLoader = d);
    } else if (!n && i) {
      for (let c = t; c < i; c++) {
        const l = e.assetList[c], u = this.getAssetPlayerQueueIndex(l.identifier);
        (u === -1 || this.playerQueue[u].destroyed) && !l.error && this.createAssetPlayer(e, l, c);
      }
      return this.getAssetPlayer(e.assetList[t].identifier);
    }
    return null;
  }
  flushFrontBuffer(e) {
    const t = this.requiredTracks;
    if (!t)
      return;
    this.log(`Removing front buffer starting at ${e}`), Object.keys(t).forEach((i) => {
      this.hls.trigger(m.BUFFER_FLUSHING, {
        startOffset: e,
        endOffset: 1 / 0,
        type: i
      });
    });
  }
  // Interstitial Asset Player control
  getAssetPlayerQueueIndex(e) {
    const t = this.playerQueue;
    for (let s = 0; s < t.length; s++)
      if (e === t[s].assetId)
        return s;
    return -1;
  }
  getAssetPlayer(e) {
    const t = this.getAssetPlayerQueueIndex(e);
    return this.playerQueue[t] || null;
  }
  getBufferingPlayer() {
    const {
      playerQueue: e,
      primaryMedia: t
    } = this;
    if (t) {
      for (let s = 0; s < e.length; s++)
        if (e[s].media === t)
          return e[s];
    }
    return null;
  }
  createAsset(e, t, s, i, r, n) {
    const o = {
      parentIdentifier: e.identifier,
      identifier: Nu(e, n, t),
      duration: r,
      startOffset: s,
      timelineStart: i,
      uri: n
    };
    return this.createAssetPlayer(e, o, t);
  }
  createAssetPlayer(e, t, s) {
    this.log(`create HLSAssetPlayer for ${Ii(t)}`);
    const i = this.hls, r = i.userConfig;
    let n = r.videoPreference;
    const o = i.loadLevelObj || i.levels[i.currentLevel];
    (n || o) && (n = oe({}, n), o.videoCodec && (n.videoCodec = o.videoCodec), o.videoRange && (n.allowedVideoRanges = [o.videoRange]));
    const c = i.audioTracks[i.audioTrack], l = i.subtitleTracks[i.subtitleTrack];
    let u = 0;
    if (this.primaryLive || e.appendInPlace) {
      const T = this.timelinePos - t.timelineStart;
      if (T > 1) {
        const S = t.duration;
        S && T < S && (u = T);
      }
    }
    const d = t.identifier, h = re(re({}, r), {}, {
      autoStartLoad: !0,
      startFragPrefetch: !0,
      primarySessionId: i.sessionId,
      assetPlayerId: d,
      abrEwmaDefaultEstimate: i.bandwidthEstimate,
      interstitialsController: void 0,
      startPosition: u,
      liveDurationInfinity: !1,
      testBandwidth: !1,
      videoPreference: n,
      audioPreference: c || r.audioPreference,
      subtitlePreference: l || r.subtitlePreference
    });
    e.appendInPlace && (e.appendInPlaceStarted = !0, t.timelineStart && (h.timelineOffset = t.timelineStart));
    const f = h.cmcd;
    f != null && f.sessionId && f.contentId && (h.cmcd = oe({}, f, {
      contentId: Ut(t.uri)
    })), this.getAssetPlayer(d) && this.warn(`Duplicate date range identifier ${e} and asset ${d}`);
    const g = new $u(this.HlsPlayerClass, h, e, t);
    this.playerQueue.push(g), e.assetList[s] = t;
    const y = (T) => {
      if (T.live) {
        const _ = new Error(`Interstitials MUST be VOD assets ${e}`), A = {
          fatal: !0,
          type: H.OTHER_ERROR,
          details: R.INTERSTITIAL_ASSET_ITEM_ERROR,
          error: _
        };
        this.handleAssetItemError(A, e, this.schedule.findEventIndex(e.identifier), s, _.message);
        return;
      }
      const S = T.edge - T.fragmentStart, x = t.duration;
      (x === null || S > x) && (this.log(`Interstitial asset "${d}" duration change ${x} > ${S}`), t.duration = S, this.updateSchedule());
    };
    g.on(m.LEVEL_UPDATED, (T, {
      details: S
    }) => y(S)), g.on(m.LEVEL_PTS_UPDATED, (T, {
      details: S
    }) => y(S));
    const p = (T, S) => {
      const x = this.getAssetPlayer(d);
      if (x && S.tracks) {
        x.off(m.BUFFER_CODECS, p), x.tracks = S.tracks;
        const _ = this.primaryMedia;
        this.bufferingAsset === x.assetItem && _ && !x.media && this.bufferAssetPlayer(x, _);
      }
    };
    g.on(m.BUFFER_CODECS, p);
    const E = () => {
      var T;
      const S = this.getAssetPlayer(d);
      if (this.log(`buffered to end of asset ${S}`), !S)
        return;
      const x = this.schedule.findEventIndex(e.identifier), _ = e.findAssetIndex(t), A = _ + 1, b = (T = this.schedule.items) == null ? void 0 : T[x];
      if (this.isInterstitial(b))
        if (_ !== -1 && !e.isAssetPastPlayoutLimit(A) && !e.assetList[A].error)
          this.bufferedToItem(b, A);
        else {
          var C;
          const L = (C = this.schedule.items) == null ? void 0 : C[x + 1];
          L && this.bufferedToItem(L);
        }
    };
    g.on(m.BUFFERED_TO_END, E);
    const v = (T) => () => {
      if (!this.getAssetPlayer(d))
        return;
      this.shouldPlay = !0;
      const x = this.schedule.findEventIndex(e.identifier);
      this.advanceAfterAssetEnded(e, x, T);
    };
    return g.once(m.MEDIA_ENDED, v(s)), g.once(m.PLAYOUT_LIMIT_REACHED, v(1 / 0)), g.on(m.ERROR, (T, S) => {
      const x = this.getAssetPlayer(d);
      if (S.details === R.BUFFER_STALLED_ERROR) {
        if (x != null && x.media) {
          const _ = x.currentTime, A = x.duration - _;
          _ && e.appendInPlace && A / x.media.playbackRate < 0.5 ? (this.log(`Advancing buffer past end of asset ${d} ${e} at ${x.media.currentTime}`), E()) : (this.warn(`Stalled at ${_} of ${_ + A} in asset ${d} ${e}`), this.onTimeupdate(), this.checkBuffer(!0));
        }
        return;
      }
      this.handleAssetItemError(S, e, this.schedule.findEventIndex(e.identifier), s, `Asset player error ${S.error} ${e}`);
    }), g.on(m.DESTROYING, () => {
      if (!this.getAssetPlayer(d))
        return;
      const S = new Error(`Asset player destroyed unexpectedly ${d}`), x = {
        fatal: !0,
        type: H.OTHER_ERROR,
        details: R.INTERSTITIAL_ASSET_ITEM_ERROR,
        error: S
      };
      this.handleAssetItemError(x, e, this.schedule.findEventIndex(e.identifier), s, S.message);
    }), this.hls.trigger(m.INTERSTITIAL_ASSET_PLAYER_CREATED, {
      asset: t,
      assetListIndex: s,
      event: e,
      player: g
    }), g;
  }
  clearInterstitial(e, t) {
    e.assetList.forEach((s) => {
      this.clearAssetPlayer(s.identifier, t);
    }), e.reset();
  }
  clearAssetPlayer(e, t) {
    const s = this.getAssetPlayerQueueIndex(e);
    if (s !== -1) {
      this.log(`clearAssetPlayer "${e}" toSegment: ${t && tt(t)}`);
      const i = this.playerQueue[s];
      this.transferMediaFromPlayer(i, t), this.playerQueue.splice(s, 1), i.destroy();
    }
  }
  emptyPlayerQueue() {
    let e;
    for (; e = this.playerQueue.pop(); )
      e.destroy();
    this.playerQueue = [];
  }
  startAssetPlayer(e, t, s, i, r) {
    const {
      interstitial: n,
      assetItem: o,
      assetId: c
    } = e, l = n.assetList.length, u = this.playingAsset;
    this.endedAsset = null, this.playingAsset = o, (!u || u.identifier !== c) && (u && (this.clearAssetPlayer(u.identifier, s[i]), delete u.error), this.log(`INTERSTITIAL_ASSET_STARTED ${t + 1}/${l} ${e}`), this.hls.trigger(m.INTERSTITIAL_ASSET_STARTED, {
      asset: o,
      assetListIndex: t,
      event: n,
      schedule: s.slice(0),
      scheduleIndex: i,
      player: e
    })), this.bufferAssetPlayer(e, r);
  }
  bufferAssetPlayer(e, t) {
    var s, i;
    const {
      interstitial: r,
      assetItem: n,
      assetId: o
    } = e, c = this.schedule.findEventIndex(r.identifier), l = (s = this.schedule.items) == null ? void 0 : s[c];
    if (!l)
      return;
    this.setBufferingItem(l), this.bufferingAsset = n;
    const u = this.getBufferingPlayer();
    if (u === e)
      return;
    const d = r.appendInPlace;
    if (d && (u == null ? void 0 : u.interstitial.appendInPlace) === !1)
      return;
    const h = (u == null ? void 0 : u.tracks) || ((i = this.detachedData) == null ? void 0 : i.tracks) || this.requiredTracks;
    if (d && n !== this.playingAsset) {
      if (!e.tracks)
        return;
      if (h && !bn(h, e.tracks)) {
        const f = new Error(`Asset "${o}" SourceBuffer tracks ('${Object.keys(e.tracks)}') are not compatible with primary content tracks ('${Object.keys(h)}')`), g = {
          fatal: !0,
          type: H.OTHER_ERROR,
          details: R.INTERSTITIAL_ASSET_ITEM_ERROR,
          error: f
        }, y = r.findAssetIndex(n);
        this.handleAssetItemError(g, r, c, y, f.message);
        return;
      }
    }
    this.transferMediaTo(e, t);
  }
  handleAssetItemError(e, t, s, i, r) {
    if (e.details === R.BUFFER_STALLED_ERROR)
      return;
    const n = t.assetList[i] || null;
    let o = null;
    if (n) {
      const d = this.getAssetPlayerQueueIndex(n.identifier);
      o = this.playerQueue[d] || null;
    }
    const c = this.schedule.items, l = oe({}, e, {
      fatal: !1,
      errorAction: Kt(!0),
      asset: n,
      assetListIndex: i,
      event: t,
      schedule: c,
      scheduleIndex: s,
      player: o
    });
    if (this.warn(`Asset item error: ${e.error}`), this.hls.trigger(m.INTERSTITIAL_ASSET_ERROR, l), !e.fatal)
      return;
    const u = new Error(r);
    n && (this.playingAsset !== n && this.clearAssetPlayer(n.identifier, null), n.error = u), t.assetList.some((d) => !d.error) ? t.appendInPlace && (t.error = u) : t.error = u, this.primaryFallback(t);
  }
  primaryFallback(e) {
    const t = e.timelineStart, s = this.effectivePlayingItem;
    if (this.updateSchedule(), s) {
      this.log(`Fallback to primary from event "${e.identifier}" start: ${t} pos: ${this.timelinePos} playing: ${s ? tt(s) : "<none>"} error: ${e.error}`), e.appendInPlace && (this.attachPrimary(t, null), this.flushFrontBuffer(t));
      let i = this.timelinePos;
      i === -1 && (i = this.hls.startPosition);
      const r = this.updateItem(s, i);
      if (this.itemsMatch(s, r))
        this.clearInterstitial(e, null);
      else {
        const n = this.schedule.findItemIndexAtTime(i);
        this.setSchedulePosition(n);
      }
    } else
      this.checkStart();
  }
  // Asset List loading
  onAssetListLoaded(e, t) {
    var s;
    const i = t.event, r = i.identifier, n = t.assetListResponse.ASSETS;
    if (!this.schedule.hasEvent(r))
      return;
    const o = i.timelineStart, c = i.duration;
    let l = 0;
    n.forEach((g, y) => {
      const p = parseFloat(g.DURATION);
      this.createAsset(i, y, l, o + l, p, g.URI), l += p;
    }), i.duration = l, this.log(`Loaded asset-list with duration: ${l} (was: ${c}) ${i}`);
    const u = this.waitingItem, d = (u == null ? void 0 : u.event.identifier) === r;
    this.updateSchedule();
    const h = (s = this.bufferingItem) == null ? void 0 : s.event;
    if (d) {
      var f;
      const g = this.schedule.findEventIndex(r), y = (f = this.schedule.items) == null ? void 0 : f[g];
      if (y) {
        if (!this.playingItem && this.timelinePos > y.end && this.schedule.findItemIndexAtTime(this.timelinePos) !== g) {
          i.error = new Error(`Interstitial no longer within playback range ${this.timelinePos} ${i}`), this.primaryFallback(i);
          return;
        }
        this.setBufferingItem(y);
      }
      this.setSchedulePosition(g);
    } else if ((h == null ? void 0 : h.identifier) === r && h.appendInPlace) {
      const g = i.assetList[0], y = this.getAssetPlayer(g.identifier), p = this.primaryMedia;
      g && y && p && this.bufferAssetPlayer(y, p);
    }
  }
  onError(e, t) {
    switch (t.details) {
      case R.ASSET_LIST_PARSING_ERROR:
      case R.ASSET_LIST_LOAD_ERROR:
      case R.ASSET_LIST_LOAD_TIMEOUT: {
        const s = t.interstitial;
        s && this.primaryFallback(s);
        break;
      }
      case R.BUFFER_STALLED_ERROR: {
        this.onTimeupdate(), this.checkBuffer(!0);
        break;
      }
    }
  }
}
const on = 500;
class Hu extends $i {
  constructor(e, t, s) {
    super(e, t, s, "subtitle-stream-controller", G.SUBTITLE), this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this.registerListeners();
  }
  onHandlerDestroying() {
    this.unregisterListeners(), super.onHandlerDestroying(), this.mainDetails = null;
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(m.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  unregisterListeners() {
    super.unregisterListeners();
    const {
      hls: e
    } = this;
    e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(m.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  startLoad(e, t) {
    this.stopLoad(), this.state = P.IDLE, this.setInterval(on), this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
  }
  onManifestLoading() {
    super.onManifestLoading(), this.mainDetails = null;
  }
  onMediaDetaching(e, t) {
    this.tracksBuffered = [], super.onMediaDetaching(e, t);
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
  }
  onSubtitleFragProcessed(e, t) {
    const {
      frag: s,
      success: i
    } = t;
    if (ye(s) && (this.fragPrevious = s), this.state = P.IDLE, !i)
      return;
    const r = this.tracksBuffered[this.currentTrackId];
    if (!r)
      return;
    let n;
    const o = s.start;
    for (let l = 0; l < r.length; l++)
      if (o >= r[l].start && o <= r[l].end) {
        n = r[l];
        break;
      }
    const c = s.start + s.duration;
    n ? n.end = c : (n = {
      start: o,
      end: c
    }, r.push(n)), this.fragmentTracker.fragBuffered(s), this.fragBufferedComplete(s, null), this.media && this.tick();
  }
  onBufferFlushing(e, t) {
    const {
      startOffset: s,
      endOffset: i
    } = t;
    if (s === 0 && i !== Number.POSITIVE_INFINITY) {
      const r = i - 1;
      if (r <= 0)
        return;
      t.endOffsetSubtitles = Math.max(0, r), this.tracksBuffered.forEach((n) => {
        for (let o = 0; o < n.length; ) {
          if (n[o].end <= r) {
            n.shift();
            continue;
          } else if (n[o].start < r)
            n[o].start = r;
          else
            break;
          o++;
        }
      }), this.fragmentTracker.removeFragmentsInRange(s, r, G.SUBTITLE);
    }
  }
  // If something goes wrong, proceed to next frag, if we were processing one.
  onError(e, t) {
    const s = t.frag;
    (s == null ? void 0 : s.type) === G.SUBTITLE && (t.details === R.FRAG_GAP && this.fragmentTracker.fragBuffered(s, !0), this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== P.STOPPED && (this.state = P.IDLE));
  }
  // Got all new subtitle levels.
  onSubtitleTracksUpdated(e, {
    subtitleTracks: t
  }) {
    if (this.levels && Ra(this.levels, t)) {
      this.levels = t.map((s) => new Vt(s));
      return;
    }
    this.tracksBuffered = [], this.levels = t.map((s) => {
      const i = new Vt(s);
      return this.tracksBuffered[i.id] = [], i;
    }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, G.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null;
  }
  onSubtitleTrackSwitch(e, t) {
    var s;
    if (this.currentTrackId = t.id, !((s = this.levels) != null && s.length) || this.currentTrackId === -1) {
      this.clearInterval();
      return;
    }
    const i = this.levels[this.currentTrackId];
    i != null && i.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, i && this.state !== P.STOPPED && this.setInterval(on);
  }
  // Got a new set of subtitle fragments.
  onSubtitleTrackLoaded(e, t) {
    var s;
    const {
      currentTrackId: i,
      levels: r
    } = this, {
      details: n,
      id: o
    } = t;
    if (!r) {
      this.warn(`Subtitle tracks were reset while loading level ${o}`);
      return;
    }
    const c = r[o];
    if (o >= r.length || !c)
      return;
    this.log(`Subtitle track ${o} loaded [${n.startSN},${n.endSN}]${n.lastPartSn ? `[part-${n.lastPartSn}-${n.lastPartIndex}]` : ""},duration:${n.totalduration}`), this.mediaBuffer = this.mediaBufferTimeRanges;
    let l = 0;
    if (n.live || (s = c.details) != null && s.live) {
      const d = this.mainDetails;
      if (n.deltaUpdateFailed || !d)
        return;
      const h = d.fragments[0];
      if (!c.details)
        n.hasProgramDateTime && d.hasProgramDateTime ? (Cs(n, d), l = n.fragmentStart) : h && (l = h.start, Ei(n, l));
      else {
        var u;
        l = this.alignPlaylists(n, c.details, (u = this.levelLastLoaded) == null ? void 0 : u.details), l === 0 && h && (l = h.start, Ei(n, l));
      }
    }
    c.details = n, this.levelLastLoaded = c, o === i && (this.hls.trigger(m.SUBTITLE_TRACK_UPDATED, {
      details: n,
      id: o,
      groupId: t.groupId
    }), this.tick(), n.live && !this.fragCurrent && this.media && this.state === P.IDLE && (Et(null, n.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), c.details = void 0)));
  }
  _handleFragmentLoadComplete(e) {
    const {
      frag: t,
      payload: s
    } = e, i = t.decryptdata, r = this.hls;
    if (!this.fragContextChanged(t) && s && s.byteLength > 0 && i != null && i.key && i.iv && It(i.method)) {
      const n = performance.now();
      this.decrypter.decrypt(new Uint8Array(s), i.key.buffer, i.iv.buffer, Bi(i.method)).catch((o) => {
        throw r.trigger(m.ERROR, {
          type: H.MEDIA_ERROR,
          details: R.FRAG_DECRYPT_ERROR,
          fatal: !1,
          error: o,
          reason: o.message,
          frag: t
        }), o;
      }).then((o) => {
        const c = performance.now();
        r.trigger(m.FRAG_DECRYPTED, {
          frag: t,
          payload: o,
          stats: {
            tstart: n,
            tdecrypt: c
          }
        });
      }).catch((o) => {
        this.warn(`${o.name}: ${o.message}`), this.state = P.IDLE;
      });
    }
  }
  doTick() {
    if (!this.media) {
      this.state = P.IDLE;
      return;
    }
    if (this.state === P.IDLE) {
      const {
        currentTrackId: e,
        levels: t
      } = this, s = t == null ? void 0 : t[e];
      if (!s || !t.length || !s.details || this.waitForLive(s))
        return;
      const {
        config: i
      } = this, r = this.getLoadPosition(), n = z.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], r, i.maxBufferHole), {
        end: o,
        len: c
      } = n, l = s.details, u = this.hls.maxBufferLength + l.levelTargetDuration;
      if (c > u)
        return;
      const d = l.fragments, h = d.length, f = l.edge;
      let g = null;
      const y = this.fragPrevious;
      if (o < f) {
        const v = i.maxFragLookUpTolerance, T = o > f - v ? 0 : v;
        g = Et(y, d, Math.max(d[0].start, o), T), !g && y && y.start < d[0].start && (g = d[0]);
      } else
        g = d[h - 1];
      if (g = this.filterReplacedPrimary(g, s.details), !g)
        return;
      const p = g.sn - l.startSN, E = d[p - 1];
      if (E && E.cc === g.cc && this.fragmentTracker.getState(E) === ge.NOT_LOADED && (g = E), this.fragmentTracker.getState(g) === ge.NOT_LOADED) {
        const v = this.mapToInitFragWhenRequired(g);
        v && this.loadFragment(v, s, o);
      }
    }
  }
  loadFragment(e, t, s) {
    ye(e) ? super.loadFragment(e, t, s) : this._loadInitSegment(e, t);
  }
  get mediaBufferTimeRanges() {
    return new Wu(this.tracksBuffered[this.currentTrackId] || []);
  }
}
class Wu {
  constructor(e) {
    this.buffered = void 0;
    const t = (s, i, r) => {
      if (i = i >>> 0, i > r - 1)
        throw new DOMException(`Failed to execute '${s}' on 'TimeRanges': The index provided (${i}) is greater than the maximum bound (${r})`);
      return e[i][s];
    };
    this.buffered = {
      get length() {
        return e.length;
      },
      end(s) {
        return t("end", s, e.length);
      },
      start(s) {
        return t("start", s, e.length);
      }
    };
  }
}
const Yu = {
  42: 225,
  // lowercase a, acute accent
  92: 233,
  // lowercase e, acute accent
  94: 237,
  // lowercase i, acute accent
  95: 243,
  // lowercase o, acute accent
  96: 250,
  // lowercase u, acute accent
  123: 231,
  // lowercase c with cedilla
  124: 247,
  // division symbol
  125: 209,
  // uppercase N tilde
  126: 241,
  // lowercase n tilde
  127: 9608,
  // Full block
  // THIS BLOCK INCLUDES THE 16 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x11 AND LOW BETWEEN 0x30 AND 0x3F
  // THIS MEANS THAT \x50 MUST BE ADDED TO THE VALUES
  128: 174,
  // Registered symbol (R)
  129: 176,
  // degree sign
  130: 189,
  // 1/2 symbol
  131: 191,
  // Inverted (open) question mark
  132: 8482,
  // Trademark symbol (TM)
  133: 162,
  // Cents symbol
  134: 163,
  // Pounds sterling
  135: 9834,
  // Music 8'th note
  136: 224,
  // lowercase a, grave accent
  137: 32,
  // transparent space (regular)
  138: 232,
  // lowercase e, grave accent
  139: 226,
  // lowercase a, circumflex accent
  140: 234,
  // lowercase e, circumflex accent
  141: 238,
  // lowercase i, circumflex accent
  142: 244,
  // lowercase o, circumflex accent
  143: 251,
  // lowercase u, circumflex accent
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x12 AND LOW BETWEEN 0x20 AND 0x3F
  144: 193,
  // capital letter A with acute
  145: 201,
  // capital letter E with acute
  146: 211,
  // capital letter O with acute
  147: 218,
  // capital letter U with acute
  148: 220,
  // capital letter U with diaresis
  149: 252,
  // lowercase letter U with diaeresis
  150: 8216,
  // opening single quote
  151: 161,
  // inverted exclamation mark
  152: 42,
  // asterisk
  153: 8217,
  // closing single quote
  154: 9473,
  // box drawings heavy horizontal
  155: 169,
  // copyright sign
  156: 8480,
  // Service mark
  157: 8226,
  // (round) bullet
  158: 8220,
  // Left double quotation mark
  159: 8221,
  // Right double quotation mark
  160: 192,
  // uppercase A, grave accent
  161: 194,
  // uppercase A, circumflex
  162: 199,
  // uppercase C with cedilla
  163: 200,
  // uppercase E, grave accent
  164: 202,
  // uppercase E, circumflex
  165: 203,
  // capital letter E with diaresis
  166: 235,
  // lowercase letter e with diaresis
  167: 206,
  // uppercase I, circumflex
  168: 207,
  // uppercase I, with diaresis
  169: 239,
  // lowercase i, with diaresis
  170: 212,
  // uppercase O, circumflex
  171: 217,
  // uppercase U, grave accent
  172: 249,
  // lowercase u, grave accent
  173: 219,
  // uppercase U, circumflex
  174: 171,
  // left-pointing double angle quotation mark
  175: 187,
  // right-pointing double angle quotation mark
  // THIS BLOCK INCLUDES THE 32 EXTENDED (TWO-BYTE) LINE 21 CHARACTERS
  // THAT COME FROM HI BYTE=0x13 AND LOW BETWEEN 0x20 AND 0x3F
  176: 195,
  // Uppercase A, tilde
  177: 227,
  // Lowercase a, tilde
  178: 205,
  // Uppercase I, acute accent
  179: 204,
  // Uppercase I, grave accent
  180: 236,
  // Lowercase i, grave accent
  181: 210,
  // Uppercase O, grave accent
  182: 242,
  // Lowercase o, grave accent
  183: 213,
  // Uppercase O, tilde
  184: 245,
  // Lowercase o, tilde
  185: 123,
  // Open curly brace
  186: 125,
  // Closing curly brace
  187: 92,
  // Backslash
  188: 94,
  // Caret
  189: 95,
  // Underscore
  190: 124,
  // Pipe (vertical line)
  191: 8764,
  // Tilde operator
  192: 196,
  // Uppercase A, umlaut
  193: 228,
  // Lowercase A, umlaut
  194: 214,
  // Uppercase O, umlaut
  195: 246,
  // Lowercase o, umlaut
  196: 223,
  // Esszett (sharp S)
  197: 165,
  // Yen symbol
  198: 164,
  // Generic currency sign
  199: 9475,
  // Box drawings heavy vertical
  200: 197,
  // Uppercase A, ring
  201: 229,
  // Lowercase A, ring
  202: 216,
  // Uppercase O, stroke
  203: 248,
  // Lowercase o, strok
  204: 9487,
  // Box drawings heavy down and right
  205: 9491,
  // Box drawings heavy down and left
  206: 9495,
  // Box drawings heavy up and right
  207: 9499
  // Box drawings heavy up and left
}, Ma = (a) => String.fromCharCode(Yu[a] || a), Oe = 15, je = 100, qu = {
  17: 1,
  18: 3,
  21: 5,
  22: 7,
  23: 9,
  16: 11,
  19: 12,
  20: 14
}, ju = {
  17: 2,
  18: 4,
  21: 6,
  22: 8,
  23: 10,
  19: 13,
  20: 15
}, zu = {
  25: 1,
  26: 3,
  29: 5,
  30: 7,
  31: 9,
  24: 11,
  27: 12,
  28: 14
}, Xu = {
  25: 2,
  26: 4,
  29: 6,
  30: 8,
  31: 10,
  27: 13,
  28: 15
}, Qu = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class Zu {
  constructor() {
    this.time = null, this.verboseLevel = 0;
  }
  log(e, t) {
    if (this.verboseLevel >= e) {
      const s = typeof t == "function" ? t() : t;
      Z.log(`${this.time} [${e}] ${s}`);
    }
  }
}
const ut = function(e) {
  const t = [];
  for (let s = 0; s < e.length; s++)
    t.push(e[s].toString(16));
  return t;
};
class Na {
  constructor() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  reset() {
    this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1;
  }
  setStyles(e) {
    const t = ["foreground", "underline", "italics", "background", "flash"];
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      e.hasOwnProperty(i) && (this[i] = e[i]);
    }
  }
  isDefault() {
    return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
  }
  equals(e) {
    return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash;
  }
  copy(e) {
    this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash;
  }
  toString() {
    return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
  }
}
class Ju {
  constructor() {
    this.uchar = " ", this.penState = new Na();
  }
  reset() {
    this.uchar = " ", this.penState.reset();
  }
  setChar(e, t) {
    this.uchar = e, this.penState.copy(t);
  }
  setPenState(e) {
    this.penState.copy(e);
  }
  equals(e) {
    return this.uchar === e.uchar && this.penState.equals(e.penState);
  }
  copy(e) {
    this.uchar = e.uchar, this.penState.copy(e.penState);
  }
  isEmpty() {
    return this.uchar === " " && this.penState.isDefault();
  }
}
class ed {
  constructor(e) {
    this.chars = [], this.pos = 0, this.currPenState = new Na(), this.cueStartTime = null, this.logger = void 0;
    for (let t = 0; t < je; t++)
      this.chars.push(new Ju());
    this.logger = e;
  }
  equals(e) {
    for (let t = 0; t < je; t++)
      if (!this.chars[t].equals(e.chars[t]))
        return !1;
    return !0;
  }
  copy(e) {
    for (let t = 0; t < je; t++)
      this.chars[t].copy(e.chars[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < je; t++)
      if (!this.chars[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  /**
   *  Set the cursor to a valid column.
   */
  setCursor(e) {
    this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > je && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = je);
  }
  /**
   * Move the cursor relative to current position.
   */
  moveCursor(e) {
    const t = this.pos + e;
    if (e > 1)
      for (let s = this.pos + 1; s < t + 1; s++)
        this.chars[s].setPenState(this.currPenState);
    this.setCursor(t);
  }
  /**
   * Backspace, move one step back and clear character.
   */
  backSpace() {
    this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState);
  }
  insertChar(e) {
    e >= 144 && this.backSpace();
    const t = Ma(e);
    if (this.pos >= je) {
      this.logger.log(0, () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
      return;
    }
    this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1);
  }
  clearFromPos(e) {
    let t;
    for (t = e; t < je; t++)
      this.chars[t].reset();
  }
  clear() {
    this.clearFromPos(0), this.pos = 0, this.currPenState.reset();
  }
  clearToEndOfRow() {
    this.clearFromPos(this.pos);
  }
  getTextString() {
    const e = [];
    let t = !0;
    for (let s = 0; s < je; s++) {
      const i = this.chars[s].uchar;
      i !== " " && (t = !1), e.push(i);
    }
    return t ? "" : e.join("");
  }
  setPenStyles(e) {
    this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState);
  }
}
class ei {
  constructor(e) {
    this.rows = [], this.currRow = Oe - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.logger = void 0;
    for (let t = 0; t < Oe; t++)
      this.rows.push(new ed(e));
    this.logger = e;
  }
  reset() {
    for (let e = 0; e < Oe; e++)
      this.rows[e].clear();
    this.currRow = Oe - 1;
  }
  equals(e) {
    let t = !0;
    for (let s = 0; s < Oe; s++)
      if (!this.rows[s].equals(e.rows[s])) {
        t = !1;
        break;
      }
    return t;
  }
  copy(e) {
    for (let t = 0; t < Oe; t++)
      this.rows[t].copy(e.rows[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < Oe; t++)
      if (!this.rows[t].isEmpty()) {
        e = !1;
        break;
      }
    return e;
  }
  backSpace() {
    this.rows[this.currRow].backSpace();
  }
  clearToEndOfRow() {
    this.rows[this.currRow].clearToEndOfRow();
  }
  /**
   * Insert a character (without styling) in the current row.
   */
  insertChar(e) {
    this.rows[this.currRow].insertChar(e);
  }
  setPen(e) {
    this.rows[this.currRow].setPenStyles(e);
  }
  moveCursor(e) {
    this.rows[this.currRow].moveCursor(e);
  }
  setCursor(e) {
    this.logger.log(2, "setCursor: " + e), this.rows[this.currRow].setCursor(e);
  }
  setPAC(e) {
    this.logger.log(2, () => "pacData = " + ue(e));
    let t = e.row - 1;
    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
      for (let o = 0; o < Oe; o++)
        this.rows[o].clear();
      const r = this.currRow + 1 - this.nrRollUpRows, n = this.lastOutputScreen;
      if (n) {
        const o = n.rows[r].cueStartTime, c = this.logger.time;
        if (o !== null && c !== null && o < c)
          for (let l = 0; l < this.nrRollUpRows; l++)
            this.rows[t - this.nrRollUpRows + l + 1].copy(n.rows[r + l]);
      }
    }
    this.currRow = t;
    const s = this.rows[this.currRow];
    if (e.indent !== null) {
      const r = e.indent, n = Math.max(r - 1, 0);
      s.setCursor(e.indent), e.color = s.chars[n].penState.foreground;
    }
    const i = {
      foreground: e.color,
      underline: e.underline,
      italics: e.italics,
      background: "black",
      flash: !1
    };
    this.setPen(i);
  }
  /**
   * Set background/extra foreground, but first do back_space, and then insert space (backwards compatibility).
   */
  setBkgData(e) {
    this.logger.log(2, () => "bkgData = " + ue(e)), this.backSpace(), this.setPen(e), this.insertChar(32);
  }
  setRollUpRows(e) {
    this.nrRollUpRows = e;
  }
  rollUp() {
    if (this.nrRollUpRows === null) {
      this.logger.log(3, "roll_up but nrRollUpRows not set yet");
      return;
    }
    this.logger.log(1, () => this.getDisplayText());
    const e = this.currRow + 1 - this.nrRollUpRows, t = this.rows.splice(e, 1)[0];
    t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(2, "Rolling up");
  }
  /**
   * Get all non-empty rows with as unicode text.
   */
  getDisplayText(e) {
    e = e || !1;
    const t = [];
    let s = "", i = -1;
    for (let r = 0; r < Oe; r++) {
      const n = this.rows[r].getTextString();
      n && (i = r + 1, e ? t.push("Row " + i + ": '" + n + "'") : t.push(n.trim()));
    }
    return t.length > 0 && (e ? s = "[" + t.join(" | ") + "]" : s = t.join(`
`)), s;
  }
  getTextAndFormat() {
    return this.rows;
  }
}
class ln {
  constructor(e, t, s) {
    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new ei(s), this.nonDisplayedMemory = new ei(s), this.lastOutputScreen = new ei(s), this.currRollUpRow = this.displayedMemory.rows[Oe - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = s;
  }
  reset() {
    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[Oe - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
  }
  getHandler() {
    return this.outputFilter;
  }
  setHandler(e) {
    this.outputFilter = e;
  }
  setPAC(e) {
    this.writeScreen.setPAC(e);
  }
  setBkgData(e) {
    this.writeScreen.setBkgData(e);
  }
  setMode(e) {
    e !== this.mode && (this.mode = e, this.logger.log(2, () => "MODE=" + e), this.mode === "MODE_POP-ON" ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), this.mode !== "MODE_ROLL-UP" && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e);
  }
  insertChars(e) {
    for (let s = 0; s < e.length; s++)
      this.writeScreen.insertChar(e[s]);
    const t = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
    this.logger.log(2, () => t + ": " + this.writeScreen.getDisplayText(!0)), (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") && (this.logger.log(1, () => "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate());
  }
  ccRCL() {
    this.logger.log(2, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON");
  }
  ccBS() {
    this.logger.log(2, "BS - BackSpace"), this.mode !== "MODE_TEXT" && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate());
  }
  ccAOF() {
  }
  ccAON() {
  }
  ccDER() {
    this.logger.log(2, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate();
  }
  ccRU(e) {
    this.logger.log(2, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e);
  }
  ccFON() {
    this.logger.log(2, "FON - Flash On"), this.writeScreen.setPen({
      flash: !0
    });
  }
  ccRDC() {
    this.logger.log(2, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON");
  }
  ccTR() {
    this.logger.log(2, "TR"), this.setMode("MODE_TEXT");
  }
  ccRTD() {
    this.logger.log(2, "RTD"), this.setMode("MODE_TEXT");
  }
  ccEDM() {
    this.logger.log(2, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0);
  }
  ccCR() {
    this.logger.log(2, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0);
  }
  ccENM() {
    this.logger.log(2, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset();
  }
  ccEOC() {
    if (this.logger.log(2, "EOC - End Of Caption"), this.mode === "MODE_POP-ON") {
      const e = this.displayedMemory;
      this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(1, () => "DISP: " + this.displayedMemory.getDisplayText());
    }
    this.outputDataUpdate(!0);
  }
  ccTO(e) {
    this.logger.log(2, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e);
  }
  ccMIDROW(e) {
    const t = {
      flash: !1
    };
    if (t.underline = e % 2 === 1, t.italics = e >= 46, t.italics)
      t.foreground = "white";
    else {
      const s = Math.floor(e / 2) - 16, i = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
      t.foreground = i[s];
    }
    this.logger.log(2, "MIDROW: " + ue(t)), this.writeScreen.setPen(t);
  }
  outputDataUpdate(e = !1) {
    const t = this.logger.time;
    t !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = t : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t), this.lastOutputScreen.copy(this.displayedMemory));
  }
  cueSplitAtTime(e) {
    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e));
  }
}
class cn {
  constructor(e, t, s) {
    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = sd(), this.logger = void 0;
    const i = this.logger = new Zu();
    this.channels = [null, new ln(e, t, i), new ln(e + 1, s, i)];
  }
  getHandler(e) {
    return this.channels[e].getHandler();
  }
  setHandler(e, t) {
    this.channels[e].setHandler(t);
  }
  /**
   * Add data for time t in forms of list of bytes (unsigned ints). The bytes are treated as pairs.
   */
  addData(e, t) {
    this.logger.time = e;
    for (let s = 0; s < t.length; s += 2) {
      const i = t[s] & 127, r = t[s + 1] & 127;
      let n = !1, o = null;
      if (i === 0 && r === 0)
        continue;
      this.logger.log(3, () => "[" + ut([t[s], t[s + 1]]) + "] -> (" + ut([i, r]) + ")");
      const c = this.cmdHistory;
      if (i >= 16 && i <= 31) {
        if (td(i, r, c)) {
          ls(null, null, c), this.logger.log(3, () => "Repeated command (" + ut([i, r]) + ") is dropped");
          continue;
        }
        ls(i, r, this.cmdHistory), n = this.parseCmd(i, r), n || (n = this.parseMidrow(i, r)), n || (n = this.parsePAC(i, r)), n || (n = this.parseBackgroundAttributes(i, r));
      } else
        ls(null, null, c);
      if (!n && (o = this.parseChars(i, r), o)) {
        const u = this.currentChannel;
        u && u > 0 ? this.channels[u].insertChars(o) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
      }
      !n && !o && this.logger.log(2, () => "Couldn't parse cleaned data " + ut([i, r]) + " orig: " + ut([t[s], t[s + 1]]));
    }
  }
  /**
   * Parse Command.
   * @returns True if a command was found
   */
  parseCmd(e, t) {
    const s = (e === 20 || e === 28 || e === 21 || e === 29) && t >= 32 && t <= 47, i = (e === 23 || e === 31) && t >= 33 && t <= 35;
    if (!(s || i))
      return !1;
    const r = e === 20 || e === 21 || e === 23 ? 1 : 2, n = this.channels[r];
    return e === 20 || e === 21 || e === 28 || e === 29 ? t === 32 ? n.ccRCL() : t === 33 ? n.ccBS() : t === 34 ? n.ccAOF() : t === 35 ? n.ccAON() : t === 36 ? n.ccDER() : t === 37 ? n.ccRU(2) : t === 38 ? n.ccRU(3) : t === 39 ? n.ccRU(4) : t === 40 ? n.ccFON() : t === 41 ? n.ccRDC() : t === 42 ? n.ccTR() : t === 43 ? n.ccRTD() : t === 44 ? n.ccEDM() : t === 45 ? n.ccCR() : t === 46 ? n.ccENM() : t === 47 && n.ccEOC() : n.ccTO(t - 32), this.currentChannel = r, !0;
  }
  /**
   * Parse midrow styling command
   */
  parseMidrow(e, t) {
    let s = 0;
    if ((e === 17 || e === 25) && t >= 32 && t <= 47) {
      if (e === 17 ? s = 1 : s = 2, s !== this.currentChannel)
        return this.logger.log(0, "Mismatch channel in midrow parsing"), !1;
      const i = this.channels[s];
      return i ? (i.ccMIDROW(t), this.logger.log(3, () => "MIDROW (" + ut([e, t]) + ")"), !0) : !1;
    }
    return !1;
  }
  /**
   * Parse Preable Access Codes (Table 53).
   * @returns {Boolean} Tells if PAC found
   */
  parsePAC(e, t) {
    let s;
    const i = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127, r = (e === 16 || e === 24) && t >= 64 && t <= 95;
    if (!(i || r))
      return !1;
    const n = e <= 23 ? 1 : 2;
    t >= 64 && t <= 95 ? s = n === 1 ? qu[e] : zu[e] : s = n === 1 ? ju[e] : Xu[e];
    const o = this.channels[n];
    return o ? (o.setPAC(this.interpretPAC(s, t)), this.currentChannel = n, !0) : !1;
  }
  /**
   * Interpret the second byte of the pac, and return the information.
   * @returns pacData with style parameters
   */
  interpretPAC(e, t) {
    let s;
    const i = {
      color: null,
      italics: !1,
      indent: null,
      underline: !1,
      row: e
    };
    return t > 95 ? s = t - 96 : s = t - 64, i.underline = (s & 1) === 1, s <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(s / 2)] : s <= 15 ? (i.italics = !0, i.color = "white") : i.indent = Math.floor((s - 16) / 2) * 4, i;
  }
  /**
   * Parse characters.
   * @returns An array with 1 to 2 codes corresponding to chars, if found. null otherwise.
   */
  parseChars(e, t) {
    let s, i = null, r = null;
    if (e >= 25 ? (s = 2, r = e - 8) : (s = 1, r = e), r >= 17 && r <= 19) {
      let n;
      r === 17 ? n = t + 80 : r === 18 ? n = t + 112 : n = t + 144, this.logger.log(2, () => "Special char '" + Ma(n) + "' in channel " + s), i = [n];
    } else
      e >= 32 && e <= 127 && (i = t === 0 ? [e] : [e, t]);
    return i && this.logger.log(3, () => "Char codes =  " + ut(i).join(",")), i;
  }
  /**
   * Parse extended background attributes as well as new foreground color black.
   * @returns True if background attributes are found
   */
  parseBackgroundAttributes(e, t) {
    const s = (e === 16 || e === 24) && t >= 32 && t <= 47, i = (e === 23 || e === 31) && t >= 45 && t <= 47;
    if (!(s || i))
      return !1;
    let r;
    const n = {};
    e === 16 || e === 24 ? (r = Math.floor((t - 32) / 2), n.background = Qu[r], t % 2 === 1 && (n.background = n.background + "_semi")) : t === 45 ? n.background = "transparent" : (n.foreground = "black", t === 47 && (n.underline = !0));
    const o = e <= 23 ? 1 : 2;
    return this.channels[o].setBkgData(n), !0;
  }
  /**
   * Reset state of parser and its channels.
   */
  reset() {
    for (let e = 0; e < Object.keys(this.channels).length; e++) {
      const t = this.channels[e];
      t && t.reset();
    }
    ls(null, null, this.cmdHistory);
  }
  /**
   * Trigger the generation of a cue, and the start of a new one if displayScreens are not empty.
   */
  cueSplitAtTime(e) {
    for (let t = 0; t < this.channels.length; t++) {
      const s = this.channels[t];
      s && s.cueSplitAtTime(e);
    }
  }
}
function ls(a, e, t) {
  t.a = a, t.b = e;
}
function td(a, e, t) {
  return t.a === a && t.b === e;
}
function sd() {
  return {
    a: null,
    b: null
  };
}
var Qi = function() {
  if (Ds != null && Ds.VTTCue)
    return self.VTTCue;
  const a = ["", "lr", "rl"], e = ["start", "middle", "end", "left", "right"];
  function t(o, c) {
    if (typeof c != "string" || !Array.isArray(o))
      return !1;
    const l = c.toLowerCase();
    return ~o.indexOf(l) ? l : !1;
  }
  function s(o) {
    return t(a, o);
  }
  function i(o) {
    return t(e, o);
  }
  function r(o, ...c) {
    let l = 1;
    for (; l < arguments.length; l++) {
      const u = arguments[l];
      for (const d in u)
        o[d] = u[d];
    }
    return o;
  }
  function n(o, c, l) {
    const u = this, d = {
      enumerable: !0
    };
    u.hasBeenReset = !1;
    let h = "", f = !1, g = o, y = c, p = l, E = null, v = "", T = !0, S = "auto", x = "start", _ = 50, A = "middle", b = 50, C = "middle";
    Object.defineProperty(u, "id", r({}, d, {
      get: function() {
        return h;
      },
      set: function(L) {
        h = "" + L;
      }
    })), Object.defineProperty(u, "pauseOnExit", r({}, d, {
      get: function() {
        return f;
      },
      set: function(L) {
        f = !!L;
      }
    })), Object.defineProperty(u, "startTime", r({}, d, {
      get: function() {
        return g;
      },
      set: function(L) {
        if (typeof L != "number")
          throw new TypeError("Start time must be set to a number.");
        g = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "endTime", r({}, d, {
      get: function() {
        return y;
      },
      set: function(L) {
        if (typeof L != "number")
          throw new TypeError("End time must be set to a number.");
        y = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "text", r({}, d, {
      get: function() {
        return p;
      },
      set: function(L) {
        p = "" + L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "region", r({}, d, {
      get: function() {
        return E;
      },
      set: function(L) {
        E = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "vertical", r({}, d, {
      get: function() {
        return v;
      },
      set: function(L) {
        const w = s(L);
        if (w === !1)
          throw new SyntaxError("An invalid or illegal string was specified.");
        v = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "snapToLines", r({}, d, {
      get: function() {
        return T;
      },
      set: function(L) {
        T = !!L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "line", r({}, d, {
      get: function() {
        return S;
      },
      set: function(L) {
        if (typeof L != "number" && L !== "auto")
          throw new SyntaxError("An invalid number or illegal string was specified.");
        S = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "lineAlign", r({}, d, {
      get: function() {
        return x;
      },
      set: function(L) {
        const w = i(L);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        x = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "position", r({}, d, {
      get: function() {
        return _;
      },
      set: function(L) {
        if (L < 0 || L > 100)
          throw new Error("Position must be between 0 and 100.");
        _ = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "positionAlign", r({}, d, {
      get: function() {
        return A;
      },
      set: function(L) {
        const w = i(L);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        A = w, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "size", r({}, d, {
      get: function() {
        return b;
      },
      set: function(L) {
        if (L < 0 || L > 100)
          throw new Error("Size must be between 0 and 100.");
        b = L, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(u, "align", r({}, d, {
      get: function() {
        return C;
      },
      set: function(L) {
        const w = i(L);
        if (!w)
          throw new SyntaxError("An invalid or illegal string was specified.");
        C = w, this.hasBeenReset = !0;
      }
    })), u.displayState = void 0;
  }
  return n.prototype.getCueAsHTML = function() {
    return self.WebVTT.convertCueToDOMTree(self, this.text);
  }, n;
}();
class id {
  decode(e, t) {
    if (!e)
      return "";
    if (typeof e != "string")
      throw new Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(e));
  }
}
function Ba(a) {
  function e(s, i, r, n) {
    return (s | 0) * 3600 + (i | 0) * 60 + (r | 0) + parseFloat(n || 0);
  }
  const t = a.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
  return t ? parseFloat(t[2]) > 59 ? e(t[2], t[3], 0, t[4]) : e(t[1], t[2], t[3], t[4]) : null;
}
class rd {
  constructor() {
    this.values = /* @__PURE__ */ Object.create(null);
  }
  // Only accept the first assignment to any key.
  set(e, t) {
    !this.get(e) && t !== "" && (this.values[e] = t);
  }
  // Return the value for a key, or a default value.
  // If 'defaultKey' is passed then 'dflt' is assumed to be an object with
  // a number of possible default values as properties where 'defaultKey' is
  // the key of the property that will be chosen; otherwise it's assumed to be
  // a single value.
  get(e, t, s) {
    return s ? this.has(e) ? this.values[e] : t[s] : this.has(e) ? this.values[e] : t;
  }
  // Check whether we have a value for a key.
  has(e) {
    return e in this.values;
  }
  // Accept a setting if its one of the given alternatives.
  alt(e, t, s) {
    for (let i = 0; i < s.length; ++i)
      if (t === s[i]) {
        this.set(e, t);
        break;
      }
  }
  // Accept a setting if its a valid (signed) integer.
  integer(e, t) {
    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10));
  }
  // Accept a setting if its a valid percentage.
  percent(e, t) {
    if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
      const s = parseFloat(t);
      if (s >= 0 && s <= 100)
        return this.set(e, s), !0;
    }
    return !1;
  }
}
function Ua(a, e, t, s) {
  const i = s ? a.split(s) : [a];
  for (const r in i) {
    if (typeof i[r] != "string")
      continue;
    const n = i[r].split(t);
    if (n.length !== 2)
      continue;
    const o = n[0], c = n[1];
    e(o, c);
  }
}
const Ri = new Qi(0, 0, ""), cs = Ri.align === "middle" ? "middle" : "center";
function nd(a, e, t) {
  const s = a;
  function i() {
    const o = Ba(a);
    if (o === null)
      throw new Error("Malformed timestamp: " + s);
    return a = a.replace(/^[^\sa-zA-Z-]+/, ""), o;
  }
  function r(o, c) {
    const l = new rd();
    Ua(o, function(h, f) {
      let g;
      switch (h) {
        case "region":
          for (let y = t.length - 1; y >= 0; y--)
            if (t[y].id === f) {
              l.set(h, t[y].region);
              break;
            }
          break;
        case "vertical":
          l.alt(h, f, ["rl", "lr"]);
          break;
        case "line":
          g = f.split(","), l.integer(h, g[0]), l.percent(h, g[0]) && l.set("snapToLines", !1), l.alt(h, g[0], ["auto"]), g.length === 2 && l.alt("lineAlign", g[1], ["start", cs, "end"]);
          break;
        case "position":
          g = f.split(","), l.percent(h, g[0]), g.length === 2 && l.alt("positionAlign", g[1], ["start", cs, "end", "line-left", "line-right", "auto"]);
          break;
        case "size":
          l.percent(h, f);
          break;
        case "align":
          l.alt(h, f, ["start", cs, "end", "left", "right"]);
          break;
      }
    }, /:/, /\s/), c.region = l.get("region", null), c.vertical = l.get("vertical", "");
    let u = l.get("line", "auto");
    u === "auto" && Ri.line === -1 && (u = -1), c.line = u, c.lineAlign = l.get("lineAlign", "start"), c.snapToLines = l.get("snapToLines", !0), c.size = l.get("size", 100), c.align = l.get("align", cs);
    let d = l.get("position", "auto");
    d === "auto" && Ri.position === 50 && (d = c.align === "start" || c.align === "left" ? 0 : c.align === "end" || c.align === "right" ? 100 : 50), c.position = d;
  }
  function n() {
    a = a.replace(/^\s+/, "");
  }
  if (n(), e.startTime = i(), n(), a.slice(0, 3) !== "-->")
    throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + s);
  a = a.slice(3), n(), e.endTime = i(), n(), r(a, e);
}
function $a(a) {
  return a.replace(/<br(?: \/)?>/gi, `
`);
}
class ad {
  constructor() {
    this.state = "INITIAL", this.buffer = "", this.decoder = new id(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
  }
  parse(e) {
    const t = this;
    e && (t.buffer += t.decoder.decode(e, {
      stream: !0
    }));
    function s() {
      let r = t.buffer, n = 0;
      for (r = $a(r); n < r.length && r[n] !== "\r" && r[n] !== `
`; )
        ++n;
      const o = r.slice(0, n);
      return r[n] === "\r" && ++n, r[n] === `
` && ++n, t.buffer = r.slice(n), o;
    }
    function i(r) {
      Ua(r, function(n, o) {
      }, /:/);
    }
    try {
      let r = "";
      if (t.state === "INITIAL") {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        r = s();
        const o = r.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
        if (!(o != null && o[0]))
          throw new Error("Malformed WebVTT signature.");
        t.state = "HEADER";
      }
      let n = !1;
      for (; t.buffer; ) {
        if (!/\r\n|\n/.test(t.buffer))
          return this;
        switch (n ? n = !1 : r = s(), t.state) {
          case "HEADER":
            /:/.test(r) ? i(r) : r || (t.state = "ID");
            continue;
          case "NOTE":
            r || (t.state = "ID");
            continue;
          case "ID":
            if (/^NOTE($|[ \t])/.test(r)) {
              t.state = "NOTE";
              break;
            }
            if (!r)
              continue;
            if (t.cue = new Qi(0, 0, ""), t.state = "CUE", r.indexOf("-->") === -1) {
              t.cue.id = r;
              continue;
            }
          case "CUE":
            if (!t.cue) {
              t.state = "BADCUE";
              continue;
            }
            try {
              nd(r, t.cue, t.regionList);
            } catch {
              t.cue = null, t.state = "BADCUE";
              continue;
            }
            t.state = "CUETEXT";
            continue;
          case "CUETEXT":
            {
              const o = r.indexOf("-->") !== -1;
              if (!r || o && (n = !0)) {
                t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
                continue;
              }
              if (t.cue === null)
                continue;
              t.cue.text && (t.cue.text += `
`), t.cue.text += r;
            }
            continue;
          case "BADCUE":
            r || (t.state = "ID");
        }
      }
    } catch {
      t.state === "CUETEXT" && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = t.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
    }
    return this;
  }
  flush() {
    const e = this;
    try {
      if ((e.cue || e.state === "HEADER") && (e.buffer += `

`, e.parse()), e.state === "INITIAL" || e.state === "BADWEBVTT")
        throw new Error("Malformed WebVTT signature.");
    } catch (t) {
      e.onparsingerror && e.onparsingerror(t);
    }
    return e.onflush && e.onflush(), this;
  }
}
const od = /\r\n|\n\r|\n|\r/g, ti = function(e, t, s = 0) {
  return e.slice(s, s + t.length) === t;
}, ld = function(e) {
  let t = parseInt(e.slice(-3));
  const s = parseInt(e.slice(-6, -4)), i = parseInt(e.slice(-9, -7)), r = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
  if (!N(t) || !N(s) || !N(i) || !N(r))
    throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
  return t += 1e3 * s, t += 60 * 1e3 * i, t += 60 * 60 * 1e3 * r, t;
};
function Zi(a, e, t) {
  return Ut(a.toString()) + Ut(e.toString()) + Ut(t);
}
const cd = function(e, t, s) {
  let i = e[t], r = e[i.prevCC];
  if (!r || !r.new && i.new) {
    e.ccOffset = e.presentationOffset = i.start, i.new = !1;
    return;
  }
  for (; (n = r) != null && n.new; ) {
    var n;
    e.ccOffset += i.start - r.start, i.new = !1, i = r, r = e[i.prevCC];
  }
  e.presentationOffset = s;
};
function ud(a, e, t, s, i, r, n) {
  const o = new ad(), c = _e(new Uint8Array(a)).trim().replace(od, `
`).split(`
`), l = [], u = e ? _c(e.baseTime, e.timescale) : 0;
  let d = "00:00.000", h = 0, f = 0, g, y = !0;
  o.oncue = function(p) {
    const E = t[s];
    let v = t.ccOffset;
    const T = (h - u) / 9e4;
    if (E != null && E.new && (f !== void 0 ? v = t.ccOffset = E.start : cd(t, s, T)), T) {
      if (!e) {
        g = new Error("Missing initPTS for VTT MPEGTS");
        return;
      }
      v = T - t.presentationOffset;
    }
    const S = p.endTime - p.startTime, x = Pe((p.startTime + v - f) * 9e4, i * 9e4) / 9e4;
    p.startTime = Math.max(x, 0), p.endTime = Math.max(x + S, 0);
    const _ = p.text.trim();
    p.text = decodeURIComponent(encodeURIComponent(_)), p.id || (p.id = Zi(p.startTime, p.endTime, _)), p.endTime > 0 && l.push(p);
  }, o.onparsingerror = function(p) {
    g = p;
  }, o.onflush = function() {
    if (g) {
      n(g);
      return;
    }
    r(l);
  }, c.forEach((p) => {
    if (y)
      if (ti(p, "X-TIMESTAMP-MAP=")) {
        y = !1, p.slice(16).split(",").forEach((E) => {
          ti(E, "LOCAL:") ? d = E.slice(6) : ti(E, "MPEGTS:") && (h = parseInt(E.slice(7)));
        });
        try {
          f = ld(d) / 1e3;
        } catch (E) {
          g = E;
        }
        return;
      } else
        p === "" && (y = !1);
    o.parse(p + `
`);
  }), o.flush();
}
const si = "stpp.ttml.im1t", Ga = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, Va = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, dd = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
};
function un(a, e, t, s) {
  const i = j(new Uint8Array(a), ["mdat"]);
  if (i.length === 0) {
    s(new Error("Could not parse IMSC1 mdat"));
    return;
  }
  const r = i.map((o) => _e(o)), n = bc(e.baseTime, 1, e.timescale);
  try {
    r.forEach((o) => t(hd(o, n)));
  } catch (o) {
    s(o);
  }
}
function hd(a, e) {
  const i = new DOMParser().parseFromString(a, "text/xml").getElementsByTagName("tt")[0];
  if (!i)
    throw new Error("Invalid ttml");
  const r = {
    frameRate: 30,
    subFrameRate: 1,
    frameRateMultiplier: 0,
    tickRate: 0
  }, n = Object.keys(r).reduce((d, h) => (d[h] = i.getAttribute(`ttp:${h}`) || r[h], d), {}), o = i.getAttribute("xml:space") !== "preserve", c = dn(ii(i, "styling", "style")), l = dn(ii(i, "layout", "region")), u = ii(i, "body", "[begin]");
  return [].map.call(u, (d) => {
    const h = Ka(d, o);
    if (!h || !d.hasAttribute("begin"))
      return null;
    const f = ni(d.getAttribute("begin"), n), g = ni(d.getAttribute("dur"), n);
    let y = ni(d.getAttribute("end"), n);
    if (f === null)
      throw hn(d);
    if (y === null) {
      if (g === null)
        throw hn(d);
      y = f + g;
    }
    const p = new Qi(f - e, y - e, h);
    p.id = Zi(p.startTime, p.endTime, p.text);
    const E = l[d.getAttribute("region")], v = c[d.getAttribute("style")], T = fd(E, v, c), {
      textAlign: S
    } = T;
    if (S) {
      const x = dd[S];
      x && (p.lineAlign = x), p.align = S;
    }
    return oe(p, T), p;
  }).filter((d) => d !== null);
}
function ii(a, e, t) {
  const s = a.getElementsByTagName(e)[0];
  return s ? [].slice.call(s.querySelectorAll(t)) : [];
}
function dn(a) {
  return a.reduce((e, t) => {
    const s = t.getAttribute("xml:id");
    return s && (e[s] = t), e;
  }, {});
}
function Ka(a, e) {
  return [].slice.call(a.childNodes).reduce((t, s, i) => {
    var r;
    return s.nodeName === "br" && i ? t + `
` : (r = s.childNodes) != null && r.length ? Ka(s, e) : e ? t + s.textContent.trim().replace(/\s+/g, " ") : t + s.textContent;
  }, "");
}
function fd(a, e, t) {
  const s = "http://www.w3.org/ns/ttml#styling";
  let i = null;
  const r = [
    "displayAlign",
    "textAlign",
    "color",
    "backgroundColor",
    "fontSize",
    "fontFamily"
    // 'fontWeight',
    // 'lineHeight',
    // 'wrapOption',
    // 'fontStyle',
    // 'direction',
    // 'writingMode'
  ], n = a != null && a.hasAttribute("style") ? a.getAttribute("style") : null;
  return n && t.hasOwnProperty(n) && (i = t[n]), r.reduce((o, c) => {
    const l = ri(e, s, c) || ri(a, s, c) || ri(i, s, c);
    return l && (o[c] = l), o;
  }, {});
}
function ri(a, e, t) {
  return a && a.hasAttributeNS(e, t) ? a.getAttributeNS(e, t) : null;
}
function hn(a) {
  return new Error(`Could not parse ttml timestamp ${a}`);
}
function ni(a, e) {
  if (!a)
    return null;
  let t = Ba(a);
  return t === null && (Ga.test(a) ? t = gd(a, e) : Va.test(a) && (t = md(a, e))), t;
}
function gd(a, e) {
  const t = Ga.exec(a), s = (t[4] | 0) + (t[5] | 0) / e.subFrameRate;
  return (t[1] | 0) * 3600 + (t[2] | 0) * 60 + (t[3] | 0) + s / e.frameRate;
}
function md(a, e) {
  const t = Va.exec(a), s = Number(t[1]);
  switch (t[2]) {
    case "h":
      return s * 3600;
    case "m":
      return s * 60;
    case "ms":
      return s * 1e3;
    case "f":
      return s / e.frameRate;
    case "t":
      return s / e.tickRate;
  }
  return s;
}
class us {
  constructor(e, t) {
    this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t;
  }
  dispatchCue() {
    this.startTime !== null && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null);
  }
  newCue(e, t, s) {
    (this.startTime === null || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = s, this.timelineController.createCaptionsTrack(this.trackName);
  }
  reset() {
    this.cueRanges = [], this.startTime = null;
  }
}
class pd {
  constructor(e) {
    this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = gn(), this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = {
      textTrack1: {
        label: this.config.captionsTextTrack1Label,
        languageCode: this.config.captionsTextTrack1LanguageCode
      },
      textTrack2: {
        label: this.config.captionsTextTrack2Label,
        languageCode: this.config.captionsTextTrack2LanguageCode
      },
      textTrack3: {
        label: this.config.captionsTextTrack3Label,
        languageCode: this.config.captionsTextTrack3LanguageCode
      },
      textTrack4: {
        label: this.config.captionsTextTrack4Label,
        languageCode: this.config.captionsTextTrack4LanguageCode
      }
    }, e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(m.FRAG_LOADING, this.onFragLoading, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this), e.on(m.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(m.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(m.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  destroy() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(m.FRAG_LOADING, this.onFragLoading, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this), e.off(m.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(m.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(m.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.media = null, this.cea608Parser1 = this.cea608Parser2 = void 0;
  }
  initCea608Parsers() {
    const e = new us(this, "textTrack1"), t = new us(this, "textTrack2"), s = new us(this, "textTrack3"), i = new us(this, "textTrack4");
    this.cea608Parser1 = new cn(1, e, t), this.cea608Parser2 = new cn(3, s, i);
  }
  addCues(e, t, s, i, r) {
    let n = !1;
    for (let o = r.length; o--; ) {
      const c = r[o], l = yd(c[0], c[1], t, s);
      if (l >= 0 && (c[0] = Math.min(c[0], t), c[1] = Math.max(c[1], s), n = !0, l / (s - t) > 0.5))
        return;
    }
    if (n || r.push([t, s]), this.config.renderTextTracksNatively) {
      const o = this.captionsTracks[e];
      this.Cues.newCue(o, t, s, i);
    } else {
      const o = this.Cues.newCue(null, t, s, i);
      this.hls.trigger(m.CUES_PARSED, {
        type: "captions",
        cues: o,
        track: e
      });
    }
  }
  // Triggered when an initial PTS is found; used for synchronisation of WebVTT.
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: i,
    timescale: r
  }) {
    const {
      unparsedVttFrags: n
    } = this;
    s === G.MAIN && (this.initPTS[t.cc] = {
      baseTime: i,
      timescale: r
    }), n.length && (this.unparsedVttFrags = [], n.forEach((o) => {
      this.onFragLoaded(m.FRAG_LOADED, o);
    }));
  }
  getExistingTrack(e, t) {
    const {
      media: s
    } = this;
    if (s)
      for (let i = 0; i < s.textTracks.length; i++) {
        const r = s.textTracks[i];
        if (fn(r, {
          name: e,
          lang: t,
          characteristics: "transcribes-spoken-dialog,describes-music-and-sound"
        }))
          return r;
      }
    return null;
  }
  createCaptionsTrack(e) {
    this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e);
  }
  createNativeTrack(e) {
    if (this.captionsTracks[e])
      return;
    const {
      captionsProperties: t,
      captionsTracks: s,
      media: i
    } = this, {
      label: r,
      languageCode: n
    } = t[e], o = this.getExistingTrack(r, n);
    if (o)
      s[e] = o, Lt(s[e]), wa(s[e], i);
    else {
      const c = this.createTextTrack("captions", r, n);
      c && (c[e] = !0, s[e] = c);
    }
  }
  createNonNativeTrack(e) {
    if (this.nonNativeCaptionsTracks[e])
      return;
    const t = this.captionsProperties[e];
    if (!t)
      return;
    const s = t.label, i = {
      _id: e,
      label: s,
      kind: "captions",
      default: t.media ? !!t.media.default : !1,
      closedCaptions: t.media
    };
    this.nonNativeCaptionsTracks[e] = i, this.hls.trigger(m.NON_NATIVE_TEXT_TRACKS_FOUND, {
      tracks: [i]
    });
  }
  createTextTrack(e, t, s) {
    const i = this.media;
    if (i)
      return i.addTextTrack(e, t, s);
  }
  onMediaAttaching(e, t) {
    this.media = t.media, t.mediaSource || this._cleanTracks();
  }
  onMediaDetaching(e, t) {
    const s = !!t.transferMedia;
    if (this.media = null, s)
      return;
    const {
      captionsTracks: i
    } = this;
    Object.keys(i).forEach((r) => {
      Lt(i[r]), delete i[r];
    }), this.nonNativeCaptionsTracks = {};
  }
  onManifestLoading() {
    this.lastCc = -1, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = gn(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
  }
  _cleanTracks() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.textTracks;
    if (t)
      for (let s = 0; s < t.length; s++)
        Lt(t[s]);
  }
  onSubtitleTracksUpdated(e, t) {
    const s = t.subtitleTracks || [], i = s.some((r) => r.textCodec === si);
    if (this.config.enableWebVTT || i && this.config.enableIMSC1) {
      if (Ra(this.tracks, s)) {
        this.tracks = s;
        return;
      }
      if (this.textTracks = [], this.tracks = s, this.config.renderTextTracksNatively) {
        const n = this.media, o = n ? ys(n.textTracks) : null;
        if (this.tracks.forEach((c, l) => {
          let u;
          if (o) {
            let d = null;
            for (let h = 0; h < o.length; h++)
              if (o[h] && fn(o[h], c)) {
                d = o[h], o[h] = null;
                break;
              }
            d && (u = d);
          }
          if (u)
            Lt(u);
          else {
            const d = Ha(c);
            u = this.createTextTrack(d, c.name, c.lang), u && (u.mode = "disabled");
          }
          u && this.textTracks.push(u);
        }), o != null && o.length) {
          const c = o.filter((l) => l !== null).map((l) => l.label);
          c.length && this.hls.logger.warn(`Media element contains unused subtitle tracks: ${c.join(", ")}. Replace media element for each source to clear TextTracks and captions menu.`);
        }
      } else if (this.tracks.length) {
        const n = this.tracks.map((o) => ({
          label: o.name,
          kind: o.type.toLowerCase(),
          default: o.default,
          subtitleTrack: o
        }));
        this.hls.trigger(m.NON_NATIVE_TEXT_TRACKS_FOUND, {
          tracks: n
        });
      }
    }
  }
  onManifestLoaded(e, t) {
    this.config.enableCEA708Captions && t.captions && t.captions.forEach((s) => {
      const i = /(?:CC|SERVICE)([1-4])/.exec(s.instreamId);
      if (!i)
        return;
      const r = `textTrack${i[1]}`, n = this.captionsProperties[r];
      n && (n.label = s.name, s.lang && (n.languageCode = s.lang), n.media = s);
    });
  }
  closedCaptionsForLevel(e) {
    const t = this.hls.levels[e.level];
    return t == null ? void 0 : t.attrs["CLOSED-CAPTIONS"];
  }
  onFragLoading(e, t) {
    if (this.enabled && t.frag.type === G.MAIN) {
      var s, i;
      const {
        cea608Parser1: r,
        cea608Parser2: n,
        lastSn: o
      } = this, {
        cc: c,
        sn: l
      } = t.frag, u = (s = (i = t.part) == null ? void 0 : i.index) != null ? s : -1;
      r && n && (l !== o + 1 || l === o && u !== this.lastPartIndex + 1 || c !== this.lastCc) && (r.reset(), n.reset()), this.lastCc = c, this.lastSn = l, this.lastPartIndex = u;
    }
  }
  onFragLoaded(e, t) {
    const {
      frag: s,
      payload: i
    } = t;
    if (s.type === G.SUBTITLE)
      if (i.byteLength) {
        const r = s.decryptdata, n = "stats" in t;
        if (r == null || !r.encrypted || n) {
          const o = this.tracks[s.level], c = this.vttCCs;
          c[s.cc] || (c[s.cc] = {
            start: s.start,
            prevCC: this.prevCC,
            new: !0
          }, this.prevCC = s.cc), o && o.textCodec === si ? this._parseIMSC1(s, i) : this._parseVTTs(t);
        }
      } else
        this.hls.trigger(m.SUBTITLE_FRAG_PROCESSED, {
          success: !1,
          frag: s,
          error: new Error("Empty subtitle payload")
        });
  }
  _parseIMSC1(e, t) {
    const s = this.hls;
    un(t, this.initPTS[e.cc], (i) => {
      this._appendCues(i, e.level), s.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: e
      });
    }, (i) => {
      s.logger.log(`Failed to parse IMSC1: ${i}`), s.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: e,
        error: i
      });
    });
  }
  _parseVTTs(e) {
    var t;
    const {
      frag: s,
      payload: i
    } = e, {
      initPTS: r,
      unparsedVttFrags: n
    } = this, o = r.length - 1;
    if (!r[s.cc] && o === -1) {
      n.push(e);
      return;
    }
    const c = this.hls, l = (t = s.initSegment) != null && t.data ? ke(s.initSegment.data, new Uint8Array(i)).buffer : i;
    ud(l, this.initPTS[s.cc], this.vttCCs, s.cc, s.start, (u) => {
      this._appendCues(u, s.level), c.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: s
      });
    }, (u) => {
      const d = u.message === "Missing initPTS for VTT MPEGTS";
      d ? n.push(e) : this._fallbackToIMSC1(s, i), c.logger.log(`Failed to parse VTT cue: ${u}`), !(d && o > s.cc) && c.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: s,
        error: u
      });
    });
  }
  _fallbackToIMSC1(e, t) {
    const s = this.tracks[e.level];
    s.textCodec || un(t, this.initPTS[e.cc], () => {
      s.textCodec = si, this._parseIMSC1(e, t);
    }, () => {
      s.textCodec = "wvtt";
    });
  }
  _appendCues(e, t) {
    const s = this.hls;
    if (this.config.renderTextTracksNatively) {
      const i = this.textTracks[t];
      if (!i || i.mode === "disabled")
        return;
      e.forEach((r) => Oa(i, r));
    } else {
      const i = this.tracks[t];
      if (!i)
        return;
      const r = i.default ? "default" : "subtitles" + t;
      s.trigger(m.CUES_PARSED, {
        type: "subtitles",
        cues: e,
        track: r
      });
    }
  }
  onFragDecrypted(e, t) {
    const {
      frag: s
    } = t;
    s.type === G.SUBTITLE && this.onFragLoaded(m.FRAG_LOADED, t);
  }
  onSubtitleTracksCleared() {
    this.tracks = [], this.captionsTracks = {};
  }
  onFragParsingUserdata(e, t) {
    if (!this.enabled || !this.config.enableCEA708Captions)
      return;
    const {
      frag: s,
      samples: i
    } = t;
    if (!(s.type === G.MAIN && this.closedCaptionsForLevel(s) === "NONE"))
      for (let r = 0; r < i.length; r++) {
        const n = i[r].bytes;
        if (n) {
          this.cea608Parser1 || this.initCea608Parsers();
          const o = this.extractCea608Data(n);
          this.cea608Parser1.addData(i[r].pts, o[0]), this.cea608Parser2.addData(i[r].pts, o[1]);
        }
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: s,
    endOffsetSubtitles: i,
    type: r
  }) {
    const {
      media: n
    } = this;
    if (!(!n || n.currentTime < s)) {
      if (!r || r === "video") {
        const {
          captionsTracks: o
        } = this;
        Object.keys(o).forEach((c) => Li(o[c], t, s));
      }
      if (this.config.renderTextTracksNatively && t === 0 && i !== void 0) {
        const {
          textTracks: o
        } = this;
        Object.keys(o).forEach((c) => Li(o[c], t, i));
      }
    }
  }
  extractCea608Data(e) {
    const t = [[], []], s = e[0] & 31;
    let i = 2;
    for (let r = 0; r < s; r++) {
      const n = e[i++], o = 127 & e[i++], c = 127 & e[i++];
      if (o === 0 && c === 0)
        continue;
      if ((4 & n) !== 0) {
        const u = 3 & n;
        (u === 0 || u === 1) && (t[u].push(o), t[u].push(c));
      }
    }
    return t;
  }
}
function Ha(a) {
  return a.characteristics && /transcribes-spoken-dialog/gi.test(a.characteristics) && /describes-music-and-sound/gi.test(a.characteristics) ? "captions" : "subtitles";
}
function fn(a, e) {
  return !!a && a.kind === Ha(e) && Si(e, a);
}
function yd(a, e, t, s) {
  return Math.min(e, s) - Math.max(a, t);
}
function gn() {
  return {
    ccOffset: 0,
    presentationOffset: 0,
    0: {
      start: 0,
      prevCC: -1,
      new: !0
    }
  };
}
const Ed = /\s/, Td = {
  newCue(a, e, t, s) {
    const i = [];
    let r, n, o, c, l;
    const u = self.VTTCue || self.TextTrackCue;
    for (let h = 0; h < s.rows.length; h++)
      if (r = s.rows[h], o = !0, c = 0, l = "", !r.isEmpty()) {
        var d;
        for (let y = 0; y < r.chars.length; y++)
          Ed.test(r.chars[y].uchar) && o ? c++ : (l += r.chars[y].uchar, o = !1);
        r.cueStartTime = e, e === t && (t += 1e-4), c >= 16 ? c-- : c++;
        const f = $a(l.trim()), g = Zi(e, t, f);
        a != null && (d = a.cues) != null && d.getCueById(g) || (n = new u(e, t, f), n.id = g, n.line = h + 1, n.align = "left", n.position = 10 + Math.min(80, Math.floor(c * 8 / 32) * 10), i.push(n));
      }
    return a && i.length && (i.sort((h, f) => h.line === "auto" || f.line === "auto" ? 0 : h.line > 8 && f.line > 8 ? f.line - h.line : h.line - f.line), i.forEach((h) => Oa(a, h))), i;
  }
};
function vd() {
  if (
    // @ts-ignore
    self.fetch && self.AbortController && self.ReadableStream && self.Request
  )
    try {
      return new self.ReadableStream({}), !0;
    } catch {
    }
  return !1;
}
const Sd = /(\d+)-(\d+)\/(\d+)/;
class mn {
  constructor(e) {
    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = null, this.response = null, this.controller = void 0, this.context = null, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || Id, this.controller = new self.AbortController(), this.stats = new ki();
  }
  destroy() {
    this.loader = this.callbacks = this.context = this.config = this.request = null, this.abortInternal(), this.response = null, this.fetchSetup = this.controller = this.stats = null;
  }
  abortInternal() {
    this.controller && !this.stats.loading.end && (this.stats.aborted = !0, this.controller.abort());
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response);
  }
  load(e, t, s) {
    const i = this.stats;
    if (i.loading.start)
      throw new Error("Loader can only be used once.");
    i.loading.start = self.performance.now();
    const r = xd(e, this.controller.signal), n = e.responseType === "arraybuffer", o = n ? "byteLength" : "length", {
      maxTimeToFirstByteMs: c,
      maxLoadTimeMs: l
    } = t.loadPolicy;
    this.context = e, this.config = t, this.callbacks = s, this.request = this.fetchSetup(e, r), self.clearTimeout(this.requestTimeout), t.timeout = c && N(c) ? c : l, this.requestTimeout = self.setTimeout(() => {
      this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(i, e, this.response));
    }, t.timeout), (qt(this.request) ? this.request.then(self.fetch) : self.fetch(this.request)).then((d) => {
      var h;
      this.response = this.loader = d;
      const f = Math.max(self.performance.now(), i.loading.start);
      if (self.clearTimeout(this.requestTimeout), t.timeout = l, this.requestTimeout = self.setTimeout(() => {
        this.callbacks && (this.abortInternal(), this.callbacks.onTimeout(i, e, this.response));
      }, l - (f - i.loading.start)), !d.ok) {
        const {
          status: y,
          statusText: p
        } = d;
        throw new Rd(p || "fetch, bad network response", y, d);
      }
      i.loading.first = f, i.total = Ld(d.headers) || i.total;
      const g = (h = this.callbacks) == null ? void 0 : h.onProgress;
      return g && N(t.highWaterMark) ? this.loadProgressively(d, i, e, t.highWaterMark, g) : n ? d.arrayBuffer() : e.responseType === "json" ? d.json() : d.text();
    }).then((d) => {
      var h, f;
      const g = this.response;
      if (!g)
        throw new Error("loader destroyed");
      self.clearTimeout(this.requestTimeout), i.loading.end = Math.max(self.performance.now(), i.loading.first);
      const y = d[o];
      y && (i.loaded = i.total = y);
      const p = {
        url: g.url,
        data: d,
        code: g.status
      }, E = (h = this.callbacks) == null ? void 0 : h.onProgress;
      E && !N(t.highWaterMark) && E(i, e, d, g), (f = this.callbacks) == null || f.onSuccess(p, i, e, g);
    }).catch((d) => {
      var h;
      if (self.clearTimeout(this.requestTimeout), i.aborted)
        return;
      const f = d && d.code || 0, g = d ? d.message : null;
      (h = this.callbacks) == null || h.onError({
        code: f,
        text: g
      }, e, d ? d.details : null, i);
    });
  }
  getCacheAge() {
    let e = null;
    if (this.response) {
      const t = this.response.headers.get("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.response ? this.response.headers.get(e) : null;
  }
  loadProgressively(e, t, s, i = 0, r) {
    const n = new na(), o = e.body.getReader(), c = () => o.read().then((l) => {
      if (l.done)
        return n.dataLength && r(t, s, n.flush().buffer, e), Promise.resolve(new ArrayBuffer(0));
      const u = l.value, d = u.length;
      return t.loaded += d, d < i || n.dataLength ? (n.push(u), n.dataLength >= i && r(t, s, n.flush().buffer, e)) : r(t, s, u.buffer, e), c();
    }).catch(() => Promise.reject());
    return c();
  }
}
function xd(a, e) {
  const t = {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    signal: e,
    headers: new self.Headers(oe({}, a.headers))
  };
  return a.rangeEnd && t.headers.set("Range", "bytes=" + a.rangeStart + "-" + String(a.rangeEnd - 1)), t;
}
function Ad(a) {
  const e = Sd.exec(a);
  if (e)
    return parseInt(e[2]) - parseInt(e[1]) + 1;
}
function Ld(a) {
  const e = a.get("Content-Range");
  if (e) {
    const s = Ad(e);
    if (N(s))
      return s;
  }
  const t = a.get("Content-Length");
  if (t)
    return parseInt(t);
}
function Id(a, e) {
  return new self.Request(a.url, e);
}
class Rd extends Error {
  constructor(e, t, s) {
    super(e), this.code = void 0, this.details = void 0, this.code = t, this.details = s;
  }
}
const bd = /^age:\s*[\d.]+\s*$/im;
class Wa {
  constructor(e) {
    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = null, this.loader = null, this.stats = void 0, this.xhrSetup = e && e.xhrSetup || null, this.stats = new ki(), this.retryDelay = 0;
  }
  destroy() {
    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null, this.context = null, this.xhrSetup = null;
  }
  abortInternal() {
    const e = this.loader;
    self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e && (e.onreadystatechange = null, e.onprogress = null, e.readyState !== 4 && (this.stats.aborted = !0, e.abort()));
  }
  abort() {
    var e;
    this.abortInternal(), (e = this.callbacks) != null && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader);
  }
  load(e, t, s) {
    if (this.stats.loading.start)
      throw new Error("Loader can only be used once.");
    this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = s, this.loadInternal();
  }
  loadInternal() {
    const {
      config: e,
      context: t
    } = this;
    if (!e || !t)
      return;
    const s = this.loader = new self.XMLHttpRequest(), i = this.stats;
    i.loading.first = 0, i.loaded = 0, i.aborted = !1;
    const r = this.xhrSetup;
    r ? Promise.resolve().then(() => {
      if (!(this.loader !== s || this.stats.aborted))
        return r(s, t.url);
    }).catch((n) => {
      if (!(this.loader !== s || this.stats.aborted))
        return s.open("GET", t.url, !0), r(s, t.url);
    }).then(() => {
      this.loader !== s || this.stats.aborted || this.openAndSendXhr(s, t, e);
    }).catch((n) => {
      var o;
      (o = this.callbacks) == null || o.onError({
        code: s.status,
        text: n.message
      }, t, s, i);
    }) : this.openAndSendXhr(s, t, e);
  }
  openAndSendXhr(e, t, s) {
    e.readyState || e.open("GET", t.url, !0);
    const i = t.headers, {
      maxTimeToFirstByteMs: r,
      maxLoadTimeMs: n
    } = s.loadPolicy;
    if (i)
      for (const o in i)
        e.setRequestHeader(o, i[o]);
    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), s.timeout = r && N(r) ? r : n, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout), e.send();
  }
  readystatechange() {
    const {
      context: e,
      loader: t,
      stats: s
    } = this;
    if (!e || !t)
      return;
    const i = t.readyState, r = this.config;
    if (!s.aborted && i >= 2 && (s.loading.first === 0 && (s.loading.first = Math.max(self.performance.now(), s.loading.start), r.timeout !== r.loadPolicy.maxLoadTimeMs && (self.clearTimeout(this.requestTimeout), r.timeout = r.loadPolicy.maxLoadTimeMs, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), r.loadPolicy.maxLoadTimeMs - (s.loading.first - s.loading.start)))), i === 4)) {
      self.clearTimeout(this.requestTimeout), t.onreadystatechange = null, t.onprogress = null;
      const l = t.status, u = t.responseType === "text" ? t.responseText : null;
      if (l >= 200 && l < 300) {
        const g = u ?? t.response;
        if (g != null) {
          var n, o;
          s.loading.end = Math.max(self.performance.now(), s.loading.first);
          const y = t.responseType === "arraybuffer" ? g.byteLength : g.length;
          s.loaded = s.total = y, s.bwEstimate = s.total * 8e3 / (s.loading.end - s.loading.first);
          const p = (n = this.callbacks) == null ? void 0 : n.onProgress;
          p && p(s, e, g, t);
          const E = {
            url: t.responseURL,
            data: g,
            code: l
          };
          (o = this.callbacks) == null || o.onSuccess(E, s, e, t);
          return;
        }
      }
      const d = r.loadPolicy.errorRetry, h = s.retry, f = {
        url: e.url,
        data: void 0,
        code: l
      };
      if (_s(d, h, !1, f))
        this.retry(d);
      else {
        var c;
        Z.error(`${l} while loading ${e.url}`), (c = this.callbacks) == null || c.onError({
          code: l,
          text: t.statusText
        }, e, t, s);
      }
    }
  }
  loadtimeout() {
    if (!this.config)
      return;
    const e = this.config.loadPolicy.timeoutRetry, t = this.stats.retry;
    if (_s(e, t, !0))
      this.retry(e);
    else {
      var s;
      Z.warn(`timeout while loading ${(s = this.context) == null ? void 0 : s.url}`);
      const i = this.callbacks;
      i && (this.abortInternal(), i.onTimeout(this.stats, this.context, this.loader));
    }
  }
  retry(e) {
    const {
      context: t,
      stats: s
    } = this;
    this.retryDelay = Fi(e, s.retry), s.retry++, Z.warn(`${status ? "HTTP Status " + status : "Timeout"} while loading ${t == null ? void 0 : t.url}, retrying ${s.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
  }
  loadprogress(e) {
    const t = this.stats;
    t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);
  }
  getCacheAge() {
    let e = null;
    if (this.loader && bd.test(this.loader.getAllResponseHeaders())) {
      const t = this.loader.getResponseHeader("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.loader && new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null;
  }
}
const _d = {
  maxTimeToFirstByteMs: 8e3,
  maxLoadTimeMs: 2e4,
  timeoutRetry: null,
  errorRetry: null
}, Dd = re(re({
  autoStartLoad: !0,
  // used by stream-controller
  startPosition: -1,
  // used by stream-controller
  defaultAudioCodec: void 0,
  // used by stream-controller
  debug: !1,
  // used by logger
  capLevelOnFPSDrop: !1,
  // used by fps-controller
  capLevelToPlayerSize: !1,
  // used by cap-level-controller
  ignoreDevicePixelRatio: !1,
  // used by cap-level-controller
  maxDevicePixelRatio: Number.POSITIVE_INFINITY,
  // used by cap-level-controller
  preferManagedMediaSource: !0,
  initialLiveManifestSize: 1,
  // used by stream-controller
  maxBufferLength: 30,
  // used by stream-controller
  backBufferLength: 1 / 0,
  // used by buffer-controller
  frontBufferFlushThreshold: 1 / 0,
  maxBufferSize: 60 * 1e3 * 1e3,
  // used by stream-controller
  maxFragLookUpTolerance: 0.25,
  // used by stream-controller
  maxBufferHole: 0.1,
  // used by stream-controller and gap-controller
  detectStallWithCurrentTimeMs: 1250,
  // used by gap-controller
  highBufferWatchdogPeriod: 2,
  // used by gap-controller
  nudgeOffset: 0.1,
  // used by gap-controller
  nudgeMaxRetry: 3,
  // used by gap-controller
  nudgeOnVideoHole: !0,
  // used by gap-controller
  liveSyncDurationCount: 3,
  // used by latency-controller
  liveSyncOnStallIncrease: 1,
  // used by latency-controller
  liveMaxLatencyDurationCount: 1 / 0,
  // used by latency-controller
  liveSyncDuration: void 0,
  // used by latency-controller
  liveMaxLatencyDuration: void 0,
  // used by latency-controller
  maxLiveSyncPlaybackRate: 1,
  // used by latency-controller
  liveDurationInfinity: !1,
  // used by buffer-controller
  /**
   * @deprecated use backBufferLength
   */
  liveBackBufferLength: null,
  // used by buffer-controller
  maxMaxBufferLength: 600,
  // used by stream-controller
  enableWorker: !0,
  // used by transmuxer
  workerPath: null,
  // used by transmuxer
  enableSoftwareAES: !0,
  // used by decrypter
  startLevel: void 0,
  // used by level-controller
  startFragPrefetch: !1,
  // used by stream-controller
  fpsDroppedMonitoringPeriod: 5e3,
  // used by fps-controller
  fpsDroppedMonitoringThreshold: 0.2,
  // used by fps-controller
  appendErrorMaxRetry: 3,
  // used by buffer-controller
  ignorePlaylistParsingErrors: !1,
  loader: Wa,
  // loader: FetchLoader,
  fLoader: void 0,
  // used by fragment-loader
  pLoader: void 0,
  // used by playlist-loader
  xhrSetup: void 0,
  // used by xhr-loader
  licenseXhrSetup: void 0,
  // used by eme-controller
  licenseResponseCallback: void 0,
  // used by eme-controller
  abrController: Qo,
  bufferController: Kc,
  capLevelController: zi,
  errorController: il,
  fpsController: wu,
  stretchShortVideoTrack: !1,
  // used by mp4-remuxer
  maxAudioFramesDrift: 1,
  // used by mp4-remuxer
  forceKeyFrameOnDiscontinuity: !0,
  // used by ts-demuxer
  abrEwmaFastLive: 3,
  // used by abr-controller
  abrEwmaSlowLive: 9,
  // used by abr-controller
  abrEwmaFastVoD: 3,
  // used by abr-controller
  abrEwmaSlowVoD: 9,
  // used by abr-controller
  abrEwmaDefaultEstimate: 5e5,
  // 500 kbps  // used by abr-controller
  abrEwmaDefaultEstimateMax: 5e6,
  // 5 mbps
  abrBandWidthFactor: 0.95,
  // used by abr-controller
  abrBandWidthUpFactor: 0.7,
  // used by abr-controller
  abrMaxWithRealBitrate: !1,
  // used by abr-controller
  maxStarvationDelay: 4,
  // used by abr-controller
  maxLoadingDelay: 4,
  // used by abr-controller
  minAutoBitrate: 0,
  // used by hls
  emeEnabled: !1,
  // used by eme-controller
  widevineLicenseUrl: void 0,
  // used by eme-controller
  drmSystems: {},
  // used by eme-controller
  drmSystemOptions: {},
  // used by eme-controller
  requestMediaKeySystemAccessFunc: jn,
  // used by eme-controller
  testBandwidth: !0,
  progressive: !1,
  lowLatencyMode: !0,
  cmcd: void 0,
  enableDateRangeMetadataCues: !0,
  enableEmsgMetadataCues: !0,
  enableEmsgKLVMetadata: !1,
  enableID3MetadataCues: !0,
  enableInterstitialPlayback: !0,
  interstitialAppendInPlace: !0,
  interstitialLiveLookAhead: 10,
  useMediaCapabilities: !0,
  certLoadPolicy: {
    default: _d
  },
  keyLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 8e3,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      },
      errorRetry: {
        maxNumRetry: 8,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 2e4,
        backoff: "linear"
      }
    }
  },
  manifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1 / 0,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  playlistLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 2,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  fragLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 12e4,
      timeoutRetry: {
        maxNumRetry: 4,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 6,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  steeringManifestLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 2e4,
      timeoutRetry: {
        maxNumRetry: 2,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 1,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  interstitialAssetListLoadPolicy: {
    default: {
      maxTimeToFirstByteMs: 1e4,
      maxLoadTimeMs: 3e4,
      timeoutRetry: {
        maxNumRetry: 0,
        retryDelayMs: 0,
        maxRetryDelayMs: 0
      },
      errorRetry: {
        maxNumRetry: 0,
        retryDelayMs: 1e3,
        maxRetryDelayMs: 8e3
      }
    }
  },
  // These default settings are deprecated in favor of the above policies
  // and are maintained for backwards compatibility
  manifestLoadingTimeOut: 1e4,
  manifestLoadingMaxRetry: 1,
  manifestLoadingRetryDelay: 1e3,
  manifestLoadingMaxRetryTimeout: 64e3,
  levelLoadingTimeOut: 1e4,
  levelLoadingMaxRetry: 4,
  levelLoadingRetryDelay: 1e3,
  levelLoadingMaxRetryTimeout: 64e3,
  fragLoadingTimeOut: 2e4,
  fragLoadingMaxRetry: 6,
  fragLoadingRetryDelay: 1e3,
  fragLoadingMaxRetryTimeout: 64e3
}, Cd()), {}, {
  subtitleStreamController: Hu,
  subtitleTrackController: Mu,
  timelineController: pd,
  audioStreamController: Uc,
  audioTrackController: $c,
  emeController: Rt,
  cmcdController: Cu,
  contentSteeringController: ku,
  interstitialsController: Ku
});
function Cd() {
  return {
    cueHandler: Td,
    // used by timeline-controller
    enableWebVTT: !0,
    // used by timeline-controller
    enableIMSC1: !0,
    // used by timeline-controller
    enableCEA708Captions: !0,
    // used by timeline-controller
    captionsTextTrack1Label: "English",
    // used by timeline-controller
    captionsTextTrack1LanguageCode: "en",
    // used by timeline-controller
    captionsTextTrack2Label: "Spanish",
    // used by timeline-controller
    captionsTextTrack2LanguageCode: "es",
    // used by timeline-controller
    captionsTextTrack3Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack3LanguageCode: "",
    // used by timeline-controller
    captionsTextTrack4Label: "Unknown CC",
    // used by timeline-controller
    captionsTextTrack4LanguageCode: "",
    // used by timeline-controller
    renderTextTracksNatively: !0
  };
}
function Pd(a, e, t) {
  if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration))
    throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
  if (e.liveMaxLatencyDurationCount !== void 0 && (e.liveSyncDurationCount === void 0 || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
  if (e.liveMaxLatencyDuration !== void 0 && (e.liveSyncDuration === void 0 || e.liveMaxLatencyDuration <= e.liveSyncDuration))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
  const s = bi(a), i = ["manifest", "level", "frag"], r = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
  return i.forEach((n) => {
    const o = `${n === "level" ? "playlist" : n}LoadPolicy`, c = e[o] === void 0, l = [];
    r.forEach((u) => {
      const d = `${n}Loading${u}`, h = e[d];
      if (h !== void 0 && c) {
        l.push(d);
        const f = s[o].default;
        switch (e[o] = {
          default: f
        }, u) {
          case "TimeOut":
            f.maxLoadTimeMs = h, f.maxTimeToFirstByteMs = h;
            break;
          case "MaxRetry":
            f.errorRetry.maxNumRetry = h, f.timeoutRetry.maxNumRetry = h;
            break;
          case "RetryDelay":
            f.errorRetry.retryDelayMs = h, f.timeoutRetry.retryDelayMs = h;
            break;
          case "MaxRetryTimeout":
            f.errorRetry.maxRetryDelayMs = h, f.timeoutRetry.maxRetryDelayMs = h;
            break;
        }
      }
    }), l.length && t.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${o}": ${ue(e[o])}`);
  }), re(re({}, s), e);
}
function bi(a) {
  return a && typeof a == "object" ? Array.isArray(a) ? a.map(bi) : Object.keys(a).reduce((e, t) => (e[t] = bi(a[t]), e), {}) : a;
}
function kd(a, e) {
  const t = a.loader;
  t !== mn && t !== Wa ? (e.log("[config]: Custom loader detected, cannot enable progressive streaming"), a.progressive = !1) : vd() && (a.loader = mn, a.progressive = !0, a.enableSoftwareAES = !0, e.log("[config]: Progressive streaming enabled, using FetchLoader"));
}
const Es = 2, wd = 0.1, Od = 0.05, Fd = 100;
class Md extends Wn {
  constructor(e, t) {
    super("gap-controller", e.logger), this.hls = null, this.fragmentTracker = null, this.media = null, this.mediaSource = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.buffered = {}, this.lastCurrentTime = 0, this.ended = 0, this.waiting = 0, this.onMediaPlaying = () => {
      this.ended = 0, this.waiting = 0;
    }, this.onMediaWaiting = () => {
      var s;
      (s = this.media) != null && s.seeking || (this.waiting = self.performance.now(), this.tick());
    }, this.onMediaEnded = () => {
      if (this.hls) {
        var s;
        this.ended = ((s = this.media) == null ? void 0 : s.currentTime) || 1, this.hls.trigger(m.MEDIA_ENDED, {
          stalled: !1
        });
      }
    }, this.hls = e, this.fragmentTracker = t, this.registerListeners();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.BUFFER_APPENDED, this.onBufferAppended, this));
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.BUFFER_APPENDED, this.onBufferAppended, this));
  }
  destroy() {
    super.destroy(), this.unregisterListeners(), this.media = this.hls = this.fragmentTracker = null, this.mediaSource = void 0;
  }
  onMediaAttached(e, t) {
    this.setInterval(Fd), this.mediaSource = t.mediaSource;
    const s = this.media = t.media;
    Qe(s, "playing", this.onMediaPlaying), Qe(s, "waiting", this.onMediaWaiting), Qe(s, "ended", this.onMediaEnded);
  }
  onMediaDetaching(e, t) {
    this.clearInterval();
    const {
      media: s
    } = this;
    s && (We(s, "playing", this.onMediaPlaying), We(s, "waiting", this.onMediaWaiting), We(s, "ended", this.onMediaEnded), this.media = null), this.mediaSource = void 0;
  }
  onBufferAppended(e, t) {
    this.buffered = t.timeRanges;
  }
  get hasBuffered() {
    return Object.keys(this.buffered).length > 0;
  }
  tick() {
    var e;
    if (!((e = this.media) != null && e.readyState) || !this.hasBuffered)
      return;
    const t = this.media.currentTime;
    this.poll(t, this.lastCurrentTime), this.lastCurrentTime = t;
  }
  /**
   * Checks if the playhead is stuck within a gap, and if so, attempts to free it.
   * A gap is an unbuffered range between two buffered ranges (or the start and the first buffered range).
   *
   * @param lastCurrentTime - Previously read playhead position
   */
  poll(e, t) {
    var s, i;
    const r = (s = this.hls) == null ? void 0 : s.config;
    if (!r)
      return;
    const {
      media: n,
      stalled: o
    } = this;
    if (!n)
      return;
    const {
      seeking: c
    } = n, l = this.seeking && !c, u = !this.seeking && c, d = n.paused && !c || n.ended || n.playbackRate === 0;
    if (this.seeking = c, e !== t) {
      t && (this.ended = 0), this.moved = !0, c || (this.nudgeRetry = 0, r.nudgeOnVideoHole && !d && e > t && this.nudgeOnVideoHole(e, t)), this.waiting === 0 && this.stallResolved(e);
      return;
    }
    if (u || l) {
      l && this.stallResolved(e);
      return;
    }
    if (d) {
      this.nudgeRetry = 0, this.stallResolved(e), !this.ended && n.ended && this.hls && (this.ended = e || 1, this.hls.trigger(m.MEDIA_ENDED, {
        stalled: !1
      }));
      return;
    }
    if (!z.getBuffered(n).length) {
      this.nudgeRetry = 0;
      return;
    }
    const h = z.bufferInfo(n, e, 0), f = h.nextStart || 0, g = this.fragmentTracker;
    if (c && g && this.hls) {
      const _ = pn(this.hls.inFlightFragments, e), A = h.len > Es, b = !f || _ || f - e > Es && !g.getPartialFragment(e);
      if (A || b)
        return;
      this.moved = !1;
    }
    const y = (i = this.hls) == null ? void 0 : i.latestLevelDetails;
    if (!this.moved && this.stalled !== null && g) {
      if (!(h.len > 0) && !f)
        return;
      const A = Math.max(f, h.start || 0) - e, C = !!(y != null && y.live) ? y.targetduration * 2 : Es, L = g.getPartialFragment(e);
      if (A > 0 && (A <= C || L)) {
        n.paused || this._trySkipBufferHole(L);
        return;
      }
    }
    const p = r.detectStallWithCurrentTimeMs, E = self.performance.now(), v = this.waiting;
    if (o === null) {
      v > 0 && E - v < p ? this.stalled = v : this.stalled = E;
      return;
    }
    const T = E - o;
    if (!c && (T >= p || v) && this.hls) {
      var S;
      if (((S = this.mediaSource) == null ? void 0 : S.readyState) === "ended" && !(y != null && y.live) && Math.abs(e - ((y == null ? void 0 : y.edge) || 0)) < 1) {
        if (this.ended)
          return;
        this.ended = e || 1, this.hls.trigger(m.MEDIA_ENDED, {
          stalled: !0
        });
        return;
      }
      if (this._reportStall(h), !this.media || !this.hls)
        return;
    }
    const x = z.bufferInfo(n, e, r.maxBufferHole);
    this._tryFixBufferStall(x, T);
  }
  stallResolved(e) {
    const t = this.stalled;
    if (t && this.hls && (this.stalled = null, this.stallReported)) {
      const s = self.performance.now() - t;
      this.log(`playback not stuck anymore @${e}, after ${Math.round(s)}ms`), this.stallReported = !1, this.waiting = 0, this.hls.trigger(m.STALL_RESOLVED, {});
    }
  }
  nudgeOnVideoHole(e, t) {
    var s;
    const i = this.buffered.video;
    if (this.hls && this.media && this.fragmentTracker && (s = this.buffered.audio) != null && s.length && i && i.length > 1 && e > i.end(0)) {
      const r = z.bufferedInfo(z.timeRangesToArray(this.buffered.audio), e, 0);
      if (r.len > 1 && t >= r.start) {
        const n = z.timeRangesToArray(i), o = z.bufferedInfo(n, t, 0).bufferedIndex;
        if (o > -1 && o < n.length - 1) {
          const c = z.bufferedInfo(n, e, 0).bufferedIndex, l = n[o].end, u = n[o + 1].start;
          if ((c === -1 || c > o) && u - l < 1 && // `maxBufferHole` may be too small and setting it to 0 should not disable this feature
          e - l < 2) {
            const d = new Error(`nudging playhead to flush pipeline after video hole. currentTime: ${e} hole: ${l} -> ${u} buffered index: ${c}`);
            this.warn(d.message), this.media.currentTime += 1e-6;
            const h = this.fragmentTracker.getPartialFragment(e) || void 0, f = z.bufferInfo(this.media, e, 0);
            this.hls.trigger(m.ERROR, {
              type: H.MEDIA_ERROR,
              details: R.BUFFER_SEEK_OVER_HOLE,
              fatal: !1,
              error: d,
              reason: d.message,
              frag: h,
              buffer: f.len,
              bufferInfo: f
            });
          }
        }
      }
    }
  }
  /**
   * Detects and attempts to fix known buffer stalling issues.
   * @param bufferInfo - The properties of the current buffer.
   * @param stalledDurationMs - The amount of time Hls.js has been stalling for.
   * @private
   */
  _tryFixBufferStall(e, t) {
    var s, i;
    const {
      fragmentTracker: r,
      media: n
    } = this, o = (s = this.hls) == null ? void 0 : s.config;
    if (!n || !r || !o)
      return;
    const c = n.currentTime, l = (i = this.hls) == null ? void 0 : i.latestLevelDetails, u = r.getPartialFragment(c);
    if ((u || l != null && l.live && c < l.fragmentStart) && (this._trySkipBufferHole(u) || !this.media))
      return;
    const d = e.buffered;
    (d && d.length > 1 && e.len > o.maxBufferHole || e.nextStart && e.nextStart - c < o.maxBufferHole) && (t > o.highBufferWatchdogPeriod * 1e3 || this.waiting) && (this.warn("Trying to nudge playhead over buffer-hole"), this._tryNudgeBuffer(e));
  }
  /**
   * Triggers a BUFFER_STALLED_ERROR event, but only once per stall period.
   * @param bufferLen - The playhead distance from the end of the current buffer segment.
   * @private
   */
  _reportStall(e) {
    const {
      hls: t,
      media: s,
      stallReported: i,
      stalled: r
    } = this;
    if (!i && r !== null && s && t) {
      this.stallReported = !0;
      const n = new Error(`Playback stalling at @${s.currentTime} due to low buffer (${ue(e)})`);
      this.warn(n.message), t.trigger(m.ERROR, {
        type: H.MEDIA_ERROR,
        details: R.BUFFER_STALLED_ERROR,
        fatal: !1,
        error: n,
        buffer: e.len,
        bufferInfo: e,
        stalled: {
          start: r
        }
      });
    }
  }
  /**
   * Attempts to fix buffer stalls by jumping over known gaps caused by partial fragments
   * @param partial - The partial fragment found at the current time (where playback is stalling).
   * @private
   */
  _trySkipBufferHole(e) {
    var t;
    const {
      fragmentTracker: s,
      media: i
    } = this, r = (t = this.hls) == null ? void 0 : t.config;
    if (!i || !s || !r)
      return 0;
    const n = i.currentTime, o = z.bufferInfo(i, n, 0), c = n < o.start ? o.start : o.nextStart;
    if (c && this.hls) {
      const u = o.len <= r.maxBufferHole, d = o.len > 0 && o.len < 1 && i.readyState < 3, h = c - n;
      if (h > 0 && (u || d)) {
        if (h > r.maxBufferHole) {
          let g = !1;
          if (n === 0) {
            const y = s.getAppendedFrag(0, G.MAIN);
            y && c < y.end && (g = !0);
          }
          if (!g) {
            const y = e || s.getAppendedFrag(n, G.MAIN);
            if (y) {
              var l;
              if (!((l = this.hls.loadLevelObj) != null && l.details) || pn(this.hls.inFlightFragments, c))
                return 0;
              let E = !1, v = y.end;
              for (; v < c; ) {
                const T = s.getPartialFragment(v);
                if (T)
                  v += T.duration;
                else {
                  E = !0;
                  break;
                }
              }
              if (E)
                return 0;
            }
          }
        }
        const f = Math.max(c + Od, n + wd);
        if (this.warn(`skipping hole, adjusting currentTime from ${n} to ${f}`), this.moved = !0, i.currentTime = f, !(e != null && e.gap)) {
          const g = new Error(`fragment loaded with buffer holes, seeking from ${n} to ${f}`);
          this.hls.trigger(m.ERROR, {
            type: H.MEDIA_ERROR,
            details: R.BUFFER_SEEK_OVER_HOLE,
            fatal: !1,
            error: g,
            reason: g.message,
            frag: e || void 0,
            buffer: o.len,
            bufferInfo: o
          });
        }
        return f;
      }
    }
    return 0;
  }
  /**
   * Attempts to fix buffer stalls by advancing the mediaElement's current time by a small amount.
   * @private
   */
  _tryNudgeBuffer(e) {
    const {
      hls: t,
      media: s,
      nudgeRetry: i
    } = this, r = t == null ? void 0 : t.config;
    if (!s || !r)
      return 0;
    const n = s.currentTime;
    if (this.nudgeRetry++, i < r.nudgeMaxRetry) {
      const o = n + (i + 1) * r.nudgeOffset, c = new Error(`Nudging 'currentTime' from ${n} to ${o}`);
      this.warn(c.message), s.currentTime = o, t.trigger(m.ERROR, {
        type: H.MEDIA_ERROR,
        details: R.BUFFER_NUDGE_ON_STALL,
        error: c,
        fatal: !1,
        buffer: e.len,
        bufferInfo: e
      });
    } else {
      const o = new Error(`Playhead still not moving while enough data buffered @${n} after ${r.nudgeMaxRetry} nudges`);
      this.error(o.message), t.trigger(m.ERROR, {
        type: H.MEDIA_ERROR,
        details: R.BUFFER_STALLED_ERROR,
        error: o,
        fatal: !0,
        buffer: e.len,
        bufferInfo: e
      });
    }
  }
}
function pn(a, e) {
  const t = yn(a.main);
  if (t && t.start <= e)
    return t;
  const s = yn(a.audio);
  return s && s.start <= e ? s : null;
}
function yn(a) {
  if (!a)
    return null;
  switch (a.state) {
    case P.IDLE:
    case P.STOPPED:
    case P.ENDED:
    case P.ERROR:
      return null;
  }
  return a.frag;
}
const Nd = 0.25;
function _i() {
  if (!(typeof self > "u"))
    return self.VTTCue || self.TextTrackCue;
}
function En(a, e, t, s, i) {
  let r = new a(e, t, "");
  try {
    r.value = s, i && (r.type = i);
  } catch {
    r = new a(e, t, ue(i ? re({
      type: i
    }, s) : s));
  }
  return r;
}
const ds = (() => {
  const a = _i();
  try {
    a && new a(0, Number.POSITIVE_INFINITY, "");
  } catch {
    return Number.MAX_VALUE;
  }
  return Number.POSITIVE_INFINITY;
})();
function Bd(a) {
  return Uint8Array.from(a.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer;
}
class Ud {
  constructor(e) {
    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.removeCues = !0, this.onEventCueEnter = () => {
      this.hls && this.hls.trigger(m.EVENT_CUE_ENTER, {});
    }, this.hls = e, this._registerListeners();
  }
  destroy() {
    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = this.onEventCueEnter = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.LEVEL_PTS_UPDATED, this.onLevelPtsUpdated, this);
  }
  // Add ID3 metatadata text track.
  onMediaAttaching(e, t) {
    var s;
    this.media = t.media, ((s = t.overrides) == null ? void 0 : s.cueRemoval) === !1 && (this.removeCues = !1);
  }
  onMediaAttached() {
    const e = this.hls.latestLevelDetails;
    e && this.updateDateRangeCues(e);
  }
  onMediaDetaching(e, t) {
    this.media = null, !t.transferMedia && (this.id3Track && (this.removeCues && Lt(this.id3Track, this.onEventCueEnter), this.id3Track = null), this.dateRangeCuesAppended = {});
  }
  onManifestLoading() {
    this.dateRangeCuesAppended = {};
  }
  createTrack(e) {
    const t = this.getID3Track(e.textTracks);
    return t.mode = "hidden", t;
  }
  getID3Track(e) {
    if (this.media) {
      for (let t = 0; t < e.length; t++) {
        const s = e[t];
        if (s.kind === "metadata" && s.label === "id3")
          return wa(s, this.media), s;
      }
      return this.media.addTextTrack("metadata", "id3");
    }
  }
  onFragParsingMetadata(e, t) {
    if (!this.media)
      return;
    const {
      hls: {
        config: {
          enableEmsgMetadataCues: s,
          enableID3MetadataCues: i
        }
      }
    } = this;
    if (!s && !i)
      return;
    const {
      samples: r
    } = t;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const n = _i();
    if (n)
      for (let o = 0; o < r.length; o++) {
        const c = r[o].type;
        if (c === Ie.emsg && !s || !i)
          continue;
        const l = fa(r[o].data);
        if (l) {
          const u = r[o].pts;
          let d = u + r[o].duration;
          d > ds && (d = ds), d - u <= 0 && (d = u + Nd);
          for (let f = 0; f < l.length; f++) {
            const g = l[f];
            if (!ga(g)) {
              this.updateId3CueEnds(u, c);
              const y = En(n, u, d, g, c);
              y && this.id3Track.addCue(y);
            }
          }
        }
      }
  }
  updateId3CueEnds(e, t) {
    var s;
    const i = (s = this.id3Track) == null ? void 0 : s.cues;
    if (i)
      for (let r = i.length; r--; ) {
        const n = i[r];
        n.type === t && n.startTime < e && n.endTime === ds && (n.endTime = e);
      }
  }
  onBufferFlushing(e, {
    startOffset: t,
    endOffset: s,
    type: i
  }) {
    const {
      id3Track: r,
      hls: n
    } = this;
    if (!n)
      return;
    const {
      config: {
        enableEmsgMetadataCues: o,
        enableID3MetadataCues: c
      }
    } = n;
    if (r && (o || c)) {
      let l;
      i === "audio" ? l = (u) => u.type === Ie.audioId3 && c : i === "video" ? l = (u) => u.type === Ie.emsg && o : l = (u) => u.type === Ie.audioId3 && c || u.type === Ie.emsg && o, Li(r, t, s, l);
    }
  }
  onLevelUpdated(e, {
    details: t
  }) {
    this.updateDateRangeCues(t, !0);
  }
  onLevelPtsUpdated(e, t) {
    Math.abs(t.drift) > 0.01 && this.updateDateRangeCues(t.details);
  }
  updateDateRangeCues(e, t) {
    if (!this.media || !e.hasProgramDateTime || !this.hls.config.enableDateRangeMetadataCues)
      return;
    const {
      id3Track: s
    } = this, {
      dateRanges: i
    } = e, r = Object.keys(i);
    let n = this.dateRangeCuesAppended;
    if (s && t) {
      var o;
      if ((o = s.cues) != null && o.length) {
        const u = Object.keys(n).filter((d) => !r.includes(d));
        for (let d = u.length; d--; ) {
          const h = u[d], f = n[h].cues;
          delete n[h], Object.keys(f).forEach((g) => {
            try {
              const y = f[g];
              y.removeEventListener("enter", this.onEventCueEnter), s.removeCue(y);
            } catch {
            }
          });
        }
      } else
        n = this.dateRangeCuesAppended = {};
    }
    const c = e.fragments[e.fragments.length - 1];
    if (r.length === 0 || !N(c == null ? void 0 : c.programDateTime))
      return;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const l = _i();
    for (let u = 0; u < r.length; u++) {
      const d = r[u], h = i[d], f = h.startTime, g = n[d], y = (g == null ? void 0 : g.cues) || {};
      let p = (g == null ? void 0 : g.durationKnown) || !1, E = ds;
      const {
        duration: v,
        endDate: T
      } = h;
      if (T && v !== null)
        E = f + v, p = !0;
      else if (h.endOnNext && !p) {
        const x = r.reduce((_, A) => {
          if (A !== h.id) {
            const b = i[A];
            if (b.class === h.class && b.startDate > h.startDate && (!_ || h.startDate < _.startDate))
              return b;
          }
          return _;
        }, null);
        x && (E = x.startTime, p = !0);
      }
      const S = Object.keys(h.attr);
      for (let x = 0; x < S.length; x++) {
        const _ = S[x];
        if (!pl(_))
          continue;
        const A = y[_];
        if (A)
          p && !g.durationKnown ? A.endTime = E : Math.abs(A.startTime - f) > 0.01 && (A.startTime = f, A.endTime = E);
        else if (l) {
          let b = h.attr[_];
          yl(_) && (b = Bd(b));
          const L = En(l, f, E, {
            key: _,
            data: b
          }, Ie.dateRange);
          L && (L.id = d, this.id3Track.addCue(L), y[_] = L, this.hls.config.interstitialsController && (_ === "X-ASSET-LIST" || _ === "X-ASSET-URL") && L.addEventListener("enter", this.onEventCueEnter));
        }
      }
      n[d] = {
        cues: y,
        dateRange: h,
        durationKnown: p
      };
    }
  }
}
class $d {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this._targetLatencyUpdated = !1, this.onTimeupdate = () => {
      const {
        media: t
      } = this, s = this.levelDetails;
      if (!t || !s)
        return;
      this.currentTime = t.currentTime;
      const i = this.computeLatency();
      if (i === null)
        return;
      this._latency = i;
      const {
        lowLatencyMode: r,
        maxLiveSyncPlaybackRate: n
      } = this.config;
      if (!r || n === 1 || !s.live)
        return;
      const o = this.targetLatency;
      if (o === null)
        return;
      const c = i - o, l = Math.min(this.maxLatency, o + s.targetduration);
      if (c < l && c > 0.05 && this.forwardBufferLength > 1) {
        const d = Math.min(2, Math.max(1, n)), h = Math.round(2 / (1 + Math.exp(-0.75 * c - this.edgeStalled)) * 20) / 20, f = Math.min(d, Math.max(1, h));
        this.changeMediaPlaybackRate(t, f);
      } else
        t.playbackRate !== 1 && t.playbackRate !== 0 && this.changeMediaPlaybackRate(t, 1);
    }, this.hls = e, this.config = e.config, this.registerListeners();
  }
  get levelDetails() {
    var e;
    return ((e = this.hls) == null ? void 0 : e.latestLevelDetails) || null;
  }
  get latency() {
    return this._latency || 0;
  }
  get maxLatency() {
    const {
      config: e
    } = this;
    if (e.liveMaxLatencyDuration !== void 0)
      return e.liveMaxLatencyDuration;
    const t = this.levelDetails;
    return t ? e.liveMaxLatencyDurationCount * t.targetduration : 0;
  }
  get targetLatency() {
    const e = this.levelDetails;
    if (e === null || this.hls === null)
      return null;
    const {
      holdBack: t,
      partHoldBack: s,
      targetduration: i
    } = e, {
      liveSyncDuration: r,
      liveSyncDurationCount: n,
      lowLatencyMode: o
    } = this.config, c = this.hls.userConfig;
    let l = o && s || t;
    (this._targetLatencyUpdated || c.liveSyncDuration || c.liveSyncDurationCount || l === 0) && (l = r !== void 0 ? r : n * i);
    const u = i;
    return l + Math.min(this.stallCount * this.config.liveSyncOnStallIncrease, u);
  }
  set targetLatency(e) {
    this.stallCount = 0, this.config.liveSyncDuration = e, this._targetLatencyUpdated = !0;
  }
  get liveSyncPosition() {
    const e = this.estimateLiveEdge(), t = this.targetLatency;
    if (e === null || t === null)
      return null;
    const s = this.levelDetails;
    if (s === null)
      return null;
    const i = s.edge, r = e - t - this.edgeStalled, n = i - s.totalduration, o = i - (this.config.lowLatencyMode && s.partTarget || s.targetduration);
    return Math.min(Math.max(n, r), o);
  }
  get drift() {
    const e = this.levelDetails;
    return e === null ? 1 : e.drift;
  }
  get edgeStalled() {
    const e = this.levelDetails;
    if (e === null)
      return 0;
    const t = (this.config.lowLatencyMode && e.partTarget || e.targetduration) * 3;
    return Math.max(e.age - t, 0);
  }
  get forwardBufferLength() {
    const {
      media: e
    } = this, t = this.levelDetails;
    if (!e || !t)
      return 0;
    const s = e.buffered.length;
    return (s ? e.buffered.end(s - 1) : t.edge) - this.currentTime;
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetaching(), this.hls = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e && (e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.ERROR, this.onError, this));
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e && (e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.ERROR, this.onError, this));
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("timeupdate", this.onTimeupdate);
  }
  onMediaDetaching() {
    this.media && (this.media.removeEventListener("timeupdate", this.onTimeupdate), this.media = null);
  }
  onManifestLoading() {
    this._latency = null, this.stallCount = 0;
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.advanced && this.onTimeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.onTimeupdate);
  }
  onError(e, t) {
    var s;
    t.details === R.BUFFER_STALLED_ERROR && (this.stallCount++, this.hls && (s = this.levelDetails) != null && s.live && this.hls.logger.warn("[latency-controller]: Stall detected, adjusting target latency"));
  }
  changeMediaPlaybackRate(e, t) {
    var s, i;
    e.playbackRate !== t && ((s = this.hls) == null || s.logger.debug(`[latency-controller]: latency=${this.latency.toFixed(3)}, targetLatency=${(i = this.targetLatency) == null ? void 0 : i.toFixed(3)}, forwardBufferLength=${this.forwardBufferLength.toFixed(3)}: adjusting playback rate from ${e.playbackRate} to ${t}`), e.playbackRate = t);
  }
  estimateLiveEdge() {
    const e = this.levelDetails;
    return e === null ? null : e.edge + e.age;
  }
  computeLatency() {
    const e = this.estimateLiveEdge();
    return e === null ? null : e - this.currentTime;
  }
}
class Gd extends ji {
  constructor(e, t) {
    super(e, "level-controller"), this._levels = [], this._firstLevel = -1, this._maxAutoLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this), e.on(m.ERROR, this.onError, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this), e.off(m.ERROR, this.onError, this);
  }
  destroy() {
    this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy();
  }
  stopLoad() {
    this._levels.forEach((t) => {
      t.loadError = 0, t.fragmentError = 0;
    }), super.stopLoad();
  }
  resetLevels() {
    this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [], this._maxAutoLevel = -1;
  }
  onManifestLoading(e, t) {
    this.resetLevels();
  }
  onManifestLoaded(e, t) {
    const s = this.hls.config.preferManagedMediaSource, i = [], r = {}, n = {};
    let o = !1, c = !1, l = !1;
    t.levels.forEach((u) => {
      var d;
      const h = u.attrs;
      let {
        audioCodec: f,
        videoCodec: g
      } = u;
      f && (u.audioCodec = f = Ls(f, s) || void 0), ((d = g) == null ? void 0 : d.indexOf("avc1")) === 0 && (g = u.videoCodec = No(g));
      const {
        width: y,
        height: p,
        unknownCodecs: E
      } = u;
      let v = E ? E.length : 0;
      if (E)
        for (let w = v; w--; ) {
          const F = E[w];
          this.isAudioSupported(F) ? (u.audioCodec = f = f ? `${f},${F}` : F, v--, _t.audio[f.substring(0, 4)] = 2) : this.isVideoSupported(F) && (u.videoCodec = g = g ? `${g},${F}` : F, v--, _t.video[g.substring(0, 4)] = 2);
        }
      if (o || (o = !!(y && p)), c || (c = !!g), l || (l = !!f), v || f && !this.isAudioSupported(f) || g && !this.isVideoSupported(g)) {
        this.log(`Some or all CODECS not supported "${h.CODECS}"`);
        return;
      }
      const {
        CODECS: T,
        "FRAME-RATE": S,
        "HDCP-LEVEL": x,
        "PATHWAY-ID": _,
        RESOLUTION: A,
        "VIDEO-RANGE": b
      } = h, L = `${`${_ || "."}-`}${u.bitrate}-${A}-${S}-${T}-${b}-${x}`;
      if (r[L])
        if (r[L].uri !== u.url && !u.attrs["PATHWAY-ID"]) {
          const w = n[L] += 1;
          u.attrs["PATHWAY-ID"] = new Array(w + 1).join(".");
          const F = this.createLevel(u);
          r[L] = F, i.push(F);
        } else
          r[L].addGroupId("audio", h.AUDIO), r[L].addGroupId("text", h.SUBTITLES);
      else {
        const w = this.createLevel(u);
        r[L] = w, n[L] = 1, i.push(w);
      }
    }), this.filterAndSortMediaOptions(i, t, o, c, l);
  }
  createLevel(e) {
    const t = new Vt(e), s = e.supplemental;
    if (s != null && s.videoCodec && !this.isVideoSupported(s.videoCodec)) {
      const i = new Error(`SUPPLEMENTAL-CODECS not supported "${s.videoCodec}"`);
      this.log(i.message), t.supportedResult = Gn(i, []);
    }
    return t;
  }
  isAudioSupported(e) {
    return fi(e, "audio", this.hls.config.preferManagedMediaSource);
  }
  isVideoSupported(e) {
    return fi(e, "video", this.hls.config.preferManagedMediaSource);
  }
  filterAndSortMediaOptions(e, t, s, i, r) {
    let n = [], o = [], c = e;
    if ((s || i) && r && (c = c.filter(({
      videoCodec: p,
      videoRange: E,
      width: v,
      height: T
    }) => (!!p || !!(v && T)) && Vo(E))), c.length === 0) {
      Promise.resolve().then(() => {
        if (this.hls) {
          let p = "no level with compatible codecs found in manifest", E = p;
          t.levels.length && (E = `one or more CODECS in variant not supported: ${ue(t.levels.map((T) => T.attrs.CODECS).filter((T, S, x) => x.indexOf(T) === S))}`, this.warn(E), p += ` (${E})`);
          const v = new Error(p);
          this.hls.trigger(m.ERROR, {
            type: H.MEDIA_ERROR,
            details: R.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
            fatal: !0,
            url: t.url,
            error: v,
            reason: E
          });
        }
      });
      return;
    }
    t.audioTracks && (n = t.audioTracks.filter((p) => !p.audioCodec || this.isAudioSupported(p.audioCodec)), Tn(n)), t.subtitles && (o = t.subtitles, Tn(o));
    const l = c.slice(0);
    c.sort((p, E) => {
      if (p.attrs["HDCP-LEVEL"] !== E.attrs["HDCP-LEVEL"])
        return (p.attrs["HDCP-LEVEL"] || "") > (E.attrs["HDCP-LEVEL"] || "") ? 1 : -1;
      if (s && p.height !== E.height)
        return p.height - E.height;
      if (p.frameRate !== E.frameRate)
        return p.frameRate - E.frameRate;
      if (p.videoRange !== E.videoRange)
        return Is.indexOf(p.videoRange) - Is.indexOf(E.videoRange);
      if (p.videoCodec !== E.videoCodec) {
        const v = dr(p.videoCodec), T = dr(E.videoCodec);
        if (v !== T)
          return T - v;
      }
      if (p.uri === E.uri && p.codecSet !== E.codecSet) {
        const v = As(p.codecSet), T = As(E.codecSet);
        if (v !== T)
          return T - v;
      }
      return p.averageBitrate !== E.averageBitrate ? p.averageBitrate - E.averageBitrate : 0;
    });
    let u = l[0];
    if (this.steering && (c = this.steering.filterParsedLevels(c), c.length !== l.length)) {
      for (let p = 0; p < l.length; p++)
        if (l[p].pathwayId === c[0].pathwayId) {
          u = l[p];
          break;
        }
    }
    this._levels = c;
    for (let p = 0; p < c.length; p++)
      if (c[p] === u) {
        var d;
        this._firstLevel = p;
        const E = u.bitrate, v = this.hls.bandwidthEstimate;
        if (this.log(`manifest loaded, ${c.length} level(s) found, first bitrate: ${E}`), ((d = this.hls.userConfig) == null ? void 0 : d.abrEwmaDefaultEstimate) === void 0) {
          const T = Math.min(E, this.hls.config.abrEwmaDefaultEstimateMax);
          T > v && v === this.hls.abrEwmaDefaultEstimate && (this.hls.bandwidthEstimate = T);
        }
        break;
      }
    const h = r && !i, f = this.hls.config, g = !!(f.audioStreamController && f.audioTrackController), y = {
      levels: c,
      audioTracks: n,
      subtitleTracks: o,
      sessionData: t.sessionData,
      sessionKeys: t.sessionKeys,
      firstLevel: this._firstLevel,
      stats: t.stats,
      audio: r,
      video: i,
      altAudio: g && !h && n.some((p) => !!p.url)
    };
    this.hls.trigger(m.MANIFEST_PARSED, y);
  }
  get levels() {
    return this._levels.length === 0 ? null : this._levels;
  }
  get loadLevelObj() {
    return this.currentLevel;
  }
  get level() {
    return this.currentLevelIndex;
  }
  set level(e) {
    const t = this._levels;
    if (t.length === 0)
      return;
    if (e < 0 || e >= t.length) {
      const u = new Error("invalid level idx"), d = e < 0;
      if (this.hls.trigger(m.ERROR, {
        type: H.OTHER_ERROR,
        details: R.LEVEL_SWITCH_ERROR,
        level: e,
        fatal: d,
        error: u,
        reason: u.message
      }), d)
        return;
      e = Math.min(e, t.length - 1);
    }
    const s = this.currentLevelIndex, i = this.currentLevel, r = i ? i.attrs["PATHWAY-ID"] : void 0, n = t[e], o = n.attrs["PATHWAY-ID"];
    if (this.currentLevelIndex = e, this.currentLevel = n, s === e && i && r === o)
      return;
    this.log(`Switching to level ${e} (${n.height ? n.height + "p " : ""}${n.videoRange ? n.videoRange + " " : ""}${n.codecSet ? n.codecSet + " " : ""}@${n.bitrate})${o ? " with Pathway " + o : ""} from level ${s}${r ? " with Pathway " + r : ""}`);
    const c = {
      level: e,
      attrs: n.attrs,
      details: n.details,
      bitrate: n.bitrate,
      averageBitrate: n.averageBitrate,
      maxBitrate: n.maxBitrate,
      realBitrate: n.realBitrate,
      width: n.width,
      height: n.height,
      codecSet: n.codecSet,
      audioCodec: n.audioCodec,
      videoCodec: n.videoCodec,
      audioGroups: n.audioGroups,
      subtitleGroups: n.subtitleGroups,
      loaded: n.loaded,
      loadError: n.loadError,
      fragmentError: n.fragmentError,
      name: n.name,
      id: n.id,
      uri: n.uri,
      url: n.url,
      urlId: 0,
      audioGroupIds: n.audioGroupIds,
      textGroupIds: n.textGroupIds
    };
    this.hls.trigger(m.LEVEL_SWITCHING, c);
    const l = n.details;
    if (!l || l.live) {
      const u = this.switchParams(n.uri, i == null ? void 0 : i.details, l);
      this.loadPlaylist(u);
    }
  }
  get manualLevel() {
    return this.manualLevelIndex;
  }
  set manualLevel(e) {
    this.manualLevelIndex = e, this._startLevel === void 0 && (this._startLevel = e), e !== -1 && (this.level = e);
  }
  get firstLevel() {
    return this._firstLevel;
  }
  set firstLevel(e) {
    this._firstLevel = e;
  }
  get startLevel() {
    if (this._startLevel === void 0) {
      const e = this.hls.config.startLevel;
      return e !== void 0 ? e : this.hls.firstAutoLevel;
    }
    return this._startLevel;
  }
  set startLevel(e) {
    this._startLevel = e;
  }
  get pathways() {
    return this.steering ? this.steering.pathways() : [];
  }
  get pathwayPriority() {
    return this.steering ? this.steering.pathwayPriority : null;
  }
  set pathwayPriority(e) {
    if (this.steering) {
      const t = this.steering.pathways(), s = e.filter((i) => t.indexOf(i) !== -1);
      if (e.length < 1) {
        this.warn(`pathwayPriority ${e} should contain at least one pathway from list: ${t}`);
        return;
      }
      this.steering.pathwayPriority = s;
    }
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === Q.LEVEL && t.context.level === this.level && this.checkRetry(t);
  }
  // reset errors on the successful load of a fragment
  onFragBuffered(e, {
    frag: t
  }) {
    if (t !== void 0 && t.type === G.MAIN) {
      const s = t.elementaryStreams;
      if (!Object.keys(s).some((r) => !!s[r]))
        return;
      const i = this._levels[t.level];
      i != null && i.loadError && (this.log(`Resetting level error count of ${i.loadError} on frag buffered`), i.loadError = 0);
    }
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      level: i,
      details: r
    } = t, n = t.levelInfo;
    if (!n) {
      var o;
      this.warn(`Invalid level index ${i}`), (o = t.deliveryDirectives) != null && o.skip && (r.deltaUpdateFailed = !0);
      return;
    }
    if (n === this.currentLevel || t.withoutMultiVariant) {
      n.fragmentError === 0 && (n.loadError = 0);
      let c = n.details;
      c === t.details && c.advanced && (c = void 0), this.playlistLoaded(i, t, c);
    } else
      (s = t.deliveryDirectives) != null && s.skip && (r.deltaUpdateFailed = !0);
  }
  loadPlaylist(e) {
    super.loadPlaylist(), this.shouldLoadPlaylist(this.currentLevel) && this.scheduleLoading(this.currentLevel, e);
  }
  loadingPlaylist(e, t) {
    super.loadingPlaylist(e, t);
    const s = this.getUrlWithDirectives(e.uri, t), i = this.currentLevelIndex, r = e.attrs["PATHWAY-ID"], n = e.details, o = n == null ? void 0 : n.age;
    this.log(`Loading level index ${i}${(t == null ? void 0 : t.msn) !== void 0 ? " at sn " + t.msn + " part " + t.part : ""}${r ? " Pathway " + r : ""}${o && n.live ? " age " + o.toFixed(1) + (n.type && " " + n.type || "") : ""} ${s}`), this.hls.trigger(m.LEVEL_LOADING, {
      url: s,
      level: i,
      levelInfo: e,
      pathwayId: e.attrs["PATHWAY-ID"],
      id: 0,
      // Deprecated Level urlId
      deliveryDirectives: t || null
    });
  }
  get nextLoadLevel() {
    return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
  }
  set nextLoadLevel(e) {
    this.level = e, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = e);
  }
  removeLevel(e) {
    var t;
    if (this._levels.length === 1)
      return;
    const s = this._levels.filter((r, n) => n !== e ? !0 : (this.steering && this.steering.removeLevel(r), r === this.currentLevel && (this.currentLevel = null, this.currentLevelIndex = -1, r.details && r.details.fragments.forEach((o) => o.level = -1)), !1));
    sa(s), this._levels = s, this.currentLevelIndex > -1 && (t = this.currentLevel) != null && t.details && (this.currentLevelIndex = this.currentLevel.details.fragments[0].level), this.manualLevelIndex > -1 && (this.manualLevelIndex = this.currentLevelIndex);
    const i = s.length - 1;
    this._firstLevel = Math.min(this._firstLevel, i), this._startLevel && (this._startLevel = Math.min(this._startLevel, i)), this.hls.trigger(m.LEVELS_UPDATED, {
      levels: s
    });
  }
  onLevelsUpdated(e, {
    levels: t
  }) {
    this._levels = t;
  }
  checkMaxAutoUpdated() {
    const {
      autoLevelCapping: e,
      maxAutoLevel: t,
      maxHdcpLevel: s
    } = this.hls;
    this._maxAutoLevel !== t && (this._maxAutoLevel = t, this.hls.trigger(m.MAX_AUTO_LEVEL_UPDATED, {
      autoLevelCapping: e,
      levels: this.levels,
      maxAutoLevel: t,
      minAutoLevel: this.hls.minAutoLevel,
      maxHdcpLevel: s
    }));
  }
}
function Tn(a) {
  const e = {};
  a.forEach((t) => {
    const s = t.groupId || "";
    t.id = e[s] = e[s] || 0, e[s]++;
  });
}
function Ya() {
  return self.SourceBuffer || self.WebKitSourceBuffer;
}
function qa() {
  if (!nt())
    return !1;
  const e = Ya();
  return !e || e.prototype && typeof e.prototype.appendBuffer == "function" && typeof e.prototype.remove == "function";
}
function Vd() {
  if (!qa())
    return !1;
  const a = nt();
  return typeof (a == null ? void 0 : a.isTypeSupported) == "function" && (["avc1.42E01E,mp4a.40.2", "av01.0.01M.08", "vp09.00.50.08"].some((e) => a.isTypeSupported(Gt(e, "video"))) || ["mp4a.40.2", "fLaC"].some((e) => a.isTypeSupported(Gt(e, "audio"))));
}
function Kd() {
  var a;
  const e = Ya();
  return typeof (e == null || (a = e.prototype) == null ? void 0 : a.changeType) == "function";
}
const Hd = 100;
class Wd extends $i {
  constructor(e, t, s) {
    super(e, t, s, "stream-controller", G.MAIN), this.audioCodecSwap = !1, this.level = -1, this._forceStartLoad = !1, this._hasEnoughToStart = !1, this.altAudio = 0, this.audioOnly = !1, this.fragPlaying = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this.onMediaPlaying = () => {
      this.tick();
    }, this.onMediaSeeked = () => {
      const i = this.media, r = i ? i.currentTime : null;
      if (r === null || !N(r) || (this.log(`Media seeked to ${r.toFixed(3)}`), !this.getBufferedFrag(r)))
        return;
      const n = this.getFwdBufferInfoAtPos(i, r, G.MAIN, 0);
      if (n === null || n.len === 0) {
        this.warn(`Main forward buffer length at ${r} on "seeked" event ${n ? n.len : "empty"})`);
        return;
      }
      this.tick();
    }, this.registerListeners();
  }
  registerListeners() {
    super.registerListeners();
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(m.BUFFER_CREATED, this.onBufferCreated, this), e.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  unregisterListeners() {
    super.unregisterListeners();
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(m.BUFFER_CREATED, this.onBufferCreated, this), e.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  onHandlerDestroying() {
    this.onMediaPlaying = this.onMediaSeeked = null, this.unregisterListeners(), super.onHandlerDestroying();
  }
  startLoad(e, t) {
    if (this.levels) {
      const {
        lastCurrentTime: s,
        hls: i
      } = this;
      if (this.stopLoad(), this.setInterval(Hd), this.level = -1, !this.startFragRequested) {
        let r = i.startLevel;
        r === -1 && (i.config.testBandwidth && this.levels.length > 1 ? (r = 0, this.bitrateTest = !0) : r = i.firstAutoLevel), i.nextLoadLevel = r, this.level = i.loadLevel, this._hasEnoughToStart = !!t;
      }
      s > 0 && e === -1 && !t && (this.log(`Override startPosition with lastCurrentTime @${s.toFixed(3)}`), e = s), this.state = P.IDLE, this.nextLoadPosition = this.lastCurrentTime = e + this.timelineOffset, this.startPosition = t ? -1 : e, this.tick();
    } else
      this._forceStartLoad = !0, this.state = P.STOPPED;
  }
  stopLoad() {
    this._forceStartLoad = !1, super.stopLoad();
  }
  doTick() {
    switch (this.state) {
      case P.WAITING_LEVEL: {
        const {
          levels: t,
          level: s
        } = this, i = t == null ? void 0 : t[s], r = i == null ? void 0 : i.details;
        if (r && (!r.live || this.levelLastLoaded === i && !this.waitForLive(i))) {
          if (this.waitForCdnTuneIn(r))
            break;
          this.state = P.IDLE;
          break;
        } else if (this.hls.nextLoadLevel !== this.level) {
          this.state = P.IDLE;
          break;
        }
        break;
      }
      case P.FRAG_LOADING_WAITING_RETRY:
        {
          var e;
          const t = self.performance.now(), s = this.retryDate;
          if (!s || t >= s || (e = this.media) != null && e.seeking) {
            const {
              levels: i,
              level: r
            } = this, n = i == null ? void 0 : i[r];
            this.resetStartWhenNotLoaded(n || null), this.state = P.IDLE;
          }
        }
        break;
    }
    this.state === P.IDLE && this.doTickIdle(), this.onTickEnd();
  }
  onTickEnd() {
    var e;
    super.onTickEnd(), (e = this.media) != null && e.readyState && this.media.seeking === !1 && (this.lastCurrentTime = this.media.currentTime), this.checkFragmentChanged();
  }
  doTickIdle() {
    const {
      hls: e,
      levelLastLoaded: t,
      levels: s,
      media: i
    } = this;
    if (t === null || !i && !this.primaryPrefetch && (this.startFragRequested || !e.config.startFragPrefetch) || this.altAudio && this.audioOnly)
      return;
    const r = this.buffering ? e.nextLoadLevel : e.loadLevel;
    if (!(s != null && s[r]))
      return;
    const n = s[r], o = this.getMainFwdBufferInfo();
    if (o === null)
      return;
    const c = this.getLevelDetails();
    if (c && this._streamEnded(o, c)) {
      const y = {};
      this.altAudio === 2 && (y.type = "video"), this.hls.trigger(m.BUFFER_EOS, y), this.state = P.ENDED;
      return;
    }
    if (!this.buffering)
      return;
    e.loadLevel !== r && e.manualLevel === -1 && this.log(`Adapting to level ${r} from level ${this.level}`), this.level = e.nextLoadLevel = r;
    const l = n.details;
    if (!l || this.state === P.WAITING_LEVEL || this.waitForLive(n)) {
      this.level = r, this.state = P.WAITING_LEVEL, this.startFragRequested = !1;
      return;
    }
    const u = o.len, d = this.getMaxBufferLength(n.maxBitrate);
    if (u >= d)
      return;
    this.backtrackFragment && this.backtrackFragment.start > o.end && (this.backtrackFragment = null);
    const h = this.backtrackFragment ? this.backtrackFragment.start : o.end;
    let f = this.getNextFragment(h, l);
    if (this.couldBacktrack && !this.fragPrevious && f && ye(f) && this.fragmentTracker.getState(f) !== ge.OK) {
      var g;
      const p = ((g = this.backtrackFragment) != null ? g : f).sn - l.startSN, E = l.fragments[p - 1];
      E && f.cc === E.cc && (f = E, this.fragmentTracker.removeFragment(E));
    } else
      this.backtrackFragment && o.len && (this.backtrackFragment = null);
    if (f && this.isLoopLoading(f, h)) {
      if (!f.gap) {
        const p = this.audioOnly && !this.altAudio ? ae.AUDIO : ae.VIDEO, E = (p === ae.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        E && this.afterBufferFlushed(E, p, G.MAIN);
      }
      f = this.getNextFragmentLoopLoading(f, l, o, G.MAIN, d);
    }
    f && (f.initSegment && !f.initSegment.data && !this.bitrateTest && (f = f.initSegment), this.loadFragment(f, n, h));
  }
  loadFragment(e, t, s) {
    const i = this.fragmentTracker.getState(e);
    i === ge.NOT_LOADED || i === ge.PARTIAL ? ye(e) ? this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : super.loadFragment(e, t, s) : this._loadInitSegment(e, t) : this.clearTrackerIfNeeded(e);
  }
  getBufferedFrag(e) {
    return this.fragmentTracker.getBufferedFrag(e, G.MAIN);
  }
  followingBufferedFrag(e) {
    return e ? this.getBufferedFrag(e.end + 0.5) : null;
  }
  /*
    on immediate level switch :
     - pause playback if playing
     - cancel any pending load request
     - and trigger a buffer flush
  */
  immediateLevelSwitch() {
    this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
  }
  /**
   * try to switch ASAP without breaking video playback:
   * in order to ensure smooth but quick level switching,
   * we need to find the next flushable buffer range
   * we should take into account new segment fetch time
   */
  nextLevelSwitch() {
    const {
      levels: e,
      media: t
    } = this;
    if (t != null && t.readyState) {
      let s;
      const i = this.getAppendedFrag(t.currentTime);
      i && i.start > 1 && this.flushMainBuffer(0, i.start - 1);
      const r = this.getLevelDetails();
      if (r != null && r.live) {
        const o = this.getMainFwdBufferInfo();
        if (!o || o.len < r.targetduration * 2)
          return;
      }
      if (!t.paused && e) {
        const o = this.hls.nextLoadLevel, c = e[o], l = this.fragLastKbps;
        l && this.fragCurrent ? s = this.fragCurrent.duration * c.maxBitrate / (1e3 * l) + 1 : s = 0;
      } else
        s = 0;
      const n = this.getBufferedFrag(t.currentTime + s);
      if (n) {
        const o = this.followingBufferedFrag(n);
        if (o) {
          this.abortCurrentFrag();
          const c = o.maxStartPTS ? o.maxStartPTS : o.start, l = o.duration, u = Math.max(n.end, c + Math.min(Math.max(l - this.config.maxFragLookUpTolerance, l * (this.couldBacktrack ? 0.5 : 0.125)), l * (this.couldBacktrack ? 0.75 : 0.25)));
          this.flushMainBuffer(u, Number.POSITIVE_INFINITY);
        }
      }
    }
  }
  abortCurrentFrag() {
    const e = this.fragCurrent;
    switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
      case P.KEY_LOADING:
      case P.FRAG_LOADING:
      case P.FRAG_LOADING_WAITING_RETRY:
      case P.PARSING:
      case P.PARSED:
        this.state = P.IDLE;
        break;
    }
    this.nextLoadPosition = this.getLoadPosition();
  }
  flushMainBuffer(e, t) {
    super.flushMainBuffer(e, t, this.altAudio === 2 ? "video" : null);
  }
  onMediaAttached(e, t) {
    super.onMediaAttached(e, t);
    const s = t.media;
    Qe(s, "playing", this.onMediaPlaying), Qe(s, "seeked", this.onMediaSeeked);
  }
  onMediaDetaching(e, t) {
    const {
      media: s
    } = this;
    s && (We(s, "playing", this.onMediaPlaying), We(s, "seeked", this.onMediaSeeked)), this.videoBuffer = null, this.fragPlaying = null, super.onMediaDetaching(e, t), !t.transferMedia && (this._hasEnoughToStart = !1);
  }
  onManifestLoading() {
    super.onManifestLoading(), this.log("Trigger BUFFER_RESET"), this.hls.trigger(m.BUFFER_RESET, void 0), this.couldBacktrack = !1, this.fragLastKbps = 0, this.fragPlaying = this.backtrackFragment = null, this.altAudio = 0, this.audioOnly = !1;
  }
  onManifestParsed(e, t) {
    let s = !1, i = !1;
    t.levels.forEach((r) => {
      const n = r.audioCodec;
      n && (s = s || n.indexOf("mp4a.40.2") !== -1, i = i || n.indexOf("mp4a.40.5") !== -1);
    }), this.audioCodecSwitch = s && i && !Kd(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
  }
  onLevelLoading(e, t) {
    const {
      levels: s
    } = this;
    if (!s || this.state !== P.IDLE)
      return;
    const i = t.levelInfo;
    (!i.details || i.details.live && (this.levelLastLoaded !== i || i.details.expired) || this.waitForCdnTuneIn(i.details)) && (this.state = P.WAITING_LEVEL);
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      levels: i,
      startFragRequested: r
    } = this, n = t.level, o = t.details, c = o.totalduration;
    if (!i) {
      this.warn(`Levels were reset while loading level ${n}`);
      return;
    }
    this.log(`Level ${n} loaded [${o.startSN},${o.endSN}]${o.lastPartSn ? `[part-${o.lastPartSn}-${o.lastPartIndex}]` : ""}, cc [${o.startCC}, ${o.endCC}] duration:${c}`);
    const l = t.levelInfo, u = this.fragCurrent;
    u && (this.state === P.FRAG_LOADING || this.state === P.FRAG_LOADING_WAITING_RETRY) && u.level !== t.level && u.loader && this.abortCurrentFrag();
    let d = 0;
    if (o.live || (s = l.details) != null && s.live) {
      var h;
      if (this.checkLiveUpdate(o), o.deltaUpdateFailed)
        return;
      d = this.alignPlaylists(o, l.details, (h = this.levelLastLoaded) == null ? void 0 : h.details);
    }
    if (l.details = o, this.levelLastLoaded = l, r || this.setStartPosition(o, d), this.hls.trigger(m.LEVEL_UPDATED, {
      details: o,
      level: n
    }), this.state === P.WAITING_LEVEL) {
      if (this.waitForCdnTuneIn(o))
        return;
      this.state = P.IDLE;
    }
    r && o.live && this.synchronizeToLiveEdge(o), this.tick();
  }
  synchronizeToLiveEdge(e) {
    const {
      config: t,
      media: s
    } = this;
    if (!s)
      return;
    const i = this.hls.liveSyncPosition, r = this.getLoadPosition(), n = e.fragmentStart, o = e.edge, c = r >= n - t.maxFragLookUpTolerance && r <= o;
    if (i !== null && s.duration > i && (r < i || !c)) {
      const l = t.liveMaxLatencyDuration !== void 0 ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
      (!c && s.readyState < 4 || r < o - l) && (this._hasEnoughToStart || (this.nextLoadPosition = i), s.readyState && (this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${i.toFixed(3)}`), s.currentTime = i));
    }
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const s = e.frag, {
      part: i,
      payload: r
    } = e, {
      levels: n
    } = this;
    if (!n) {
      this.warn(`Levels were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const o = n[s.level];
    if (!o) {
      this.warn(`Level ${s.level} not found on progress`);
      return;
    }
    const c = o.details;
    if (!c) {
      this.warn(`Dropping fragment ${s.sn} of level ${s.level} after level details were reset`), this.fragmentTracker.removeFragment(s);
      return;
    }
    const l = o.videoCodec, u = c.PTSKnown || !c.live, d = (t = s.initSegment) == null ? void 0 : t.data, h = this._getAudioCodec(o), f = this.transmuxer = this.transmuxer || new Ia(this.hls, G.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), g = i ? i.index : -1, y = g !== -1, p = new Ni(s.level, s.sn, s.stats.chunkCount, r.byteLength, g, y), E = this.initPTS[s.cc];
    f.push(r, d, h, l, s, i, c.totalduration, u, p, E);
  }
  onAudioTrackSwitching(e, t) {
    const s = this.hls, i = this.altAudio === 2;
    if (Rs(t.url, s))
      this.altAudio = 1;
    else {
      if (this.mediaBuffer !== this.media) {
        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
        const n = this.fragCurrent;
        n && (this.log("Switching to main audio track, cancel main fragment load"), n.abortRequests(), this.fragmentTracker.removeFragment(n)), this.resetTransmuxer(), this.resetLoadingState();
      } else
        this.audioOnly && this.resetTransmuxer();
      if (i) {
        this.fragmentTracker.removeAllFragments(), s.once(m.BUFFER_FLUSHED, () => {
          var n;
          (n = this.hls) == null || n.trigger(m.AUDIO_TRACK_SWITCHED, t);
        }), s.trigger(m.BUFFER_FLUSHING, {
          startOffset: 0,
          endOffset: Number.POSITIVE_INFINITY,
          type: null
        });
        return;
      }
      s.trigger(m.AUDIO_TRACK_SWITCHED, t);
    }
  }
  onAudioTrackSwitched(e, t) {
    const s = Rs(t.url, this.hls);
    if (s) {
      const i = this.videoBuffer;
      i && this.mediaBuffer !== i && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i);
    }
    this.altAudio = s ? 2 : 0, this.tick();
  }
  onBufferCreated(e, t) {
    const s = t.tracks;
    let i, r, n = !1;
    for (const o in s) {
      const c = s[o];
      if (c.id === "main") {
        if (r = o, i = c, o === "video") {
          const l = s[o];
          l && (this.videoBuffer = l.buffer);
        }
      } else
        n = !0;
    }
    n && i ? (this.log(`Alternate track found, use ${r}.buffered to schedule main fragment loading`), this.mediaBuffer = i.buffer) : this.mediaBuffer = this.media;
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t, r = s.type === G.MAIN;
    if (r) {
      if (this.fragContextChanged(s)) {
        this.warn(`Fragment ${s.sn}${i ? " p: " + i.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}`), this.state === P.PARSED && (this.state = P.IDLE);
        return;
      }
      const o = i ? i.stats : s.stats;
      this.fragLastKbps = Math.round(8 * o.total / (o.buffering.end - o.loading.first)), ye(s) && (this.fragPrevious = s), this.fragBufferedComplete(s, i);
    }
    const n = this.media;
    n && (!this._hasEnoughToStart && z.getBuffered(n).length && (this._hasEnoughToStart = !0, this.seekToStartPos()), r && this.tick());
  }
  get hasEnoughToStart() {
    return this._hasEnoughToStart;
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = P.ERROR;
      return;
    }
    switch (t.details) {
      case R.FRAG_GAP:
      case R.FRAG_PARSING_ERROR:
      case R.FRAG_DECRYPT_ERROR:
      case R.FRAG_LOAD_ERROR:
      case R.FRAG_LOAD_TIMEOUT:
      case R.KEY_LOAD_ERROR:
      case R.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(G.MAIN, t);
        break;
      case R.LEVEL_LOAD_ERROR:
      case R.LEVEL_LOAD_TIMEOUT:
      case R.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === P.WAITING_LEVEL && ((s = t.context) == null ? void 0 : s.type) === Q.LEVEL && (this.state = P.IDLE);
        break;
      case R.BUFFER_ADD_CODEC_ERROR:
      case R.BUFFER_APPEND_ERROR:
        if (t.parent !== "main")
          return;
        this.resetLoadingState();
        break;
      case R.BUFFER_FULL_ERROR:
        if (t.parent !== "main")
          return;
        this.reduceLengthAndFlushBuffer(t) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
        break;
      case R.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onFragLoadEmergencyAborted() {
    this.state = P.IDLE, this._hasEnoughToStart || (this.startFragRequested = !1, this.nextLoadPosition = this.lastCurrentTime), this.tickImmediate();
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== ae.AUDIO || !this.altAudio) {
      const s = (t === ae.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
      s && (this.afterBufferFlushed(s, t, G.MAIN), this.tick());
    }
  }
  onLevelsUpdated(e, t) {
    this.level > -1 && this.fragCurrent && (this.level = this.fragCurrent.level, this.level === -1 && this.resetWhenMissingContext(this.fragCurrent)), this.levels = t.levels;
  }
  swapAudioCodec() {
    this.audioCodecSwap = !this.audioCodecSwap;
  }
  /**
   * Seeks to the set startPosition if not equal to the mediaElement's current time.
   */
  seekToStartPos() {
    const {
      media: e
    } = this;
    if (!e)
      return;
    const t = e.currentTime;
    let s = this.startPosition;
    if (s >= 0 && t < s) {
      if (e.seeking) {
        this.log(`could not seek to ${s}, already seeking at ${t}`);
        return;
      }
      const i = this.timelineOffset;
      i && s && (s += i);
      const r = this.getLevelDetails(), n = z.getBuffered(e), o = n.length ? n.start(0) : 0, c = o - s, l = Math.max(this.config.maxBufferHole, this.config.maxFragLookUpTolerance);
      c > 0 && (c < l || this.loadingParts && c < 2 * ((r == null ? void 0 : r.partTarget) || 0)) && (this.log(`adjusting start position by ${c} to match buffer start`), s += c, this.startPosition = s), t < s && (this.log(`seek to target start position ${s} from current time ${t} buffer start ${o}`), e.currentTime = s);
    }
  }
  _getAudioCodec(e) {
    let t = this.config.defaultAudioCodec || e.audioCodec;
    return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t.indexOf("mp4a.40.5") !== -1 ? t = "mp4a.40.2" : t = "mp4a.40.5"), t;
  }
  _loadBitrateTestFrag(e, t) {
    e.bitrateTest = !0, this._doFragLoad(e, t).then((s) => {
      const {
        hls: i
      } = this, r = s == null ? void 0 : s.frag;
      if (!r || this.fragContextChanged(r))
        return;
      t.fragmentError = 0, this.state = P.IDLE, this.startFragRequested = !1, this.bitrateTest = !1;
      const n = r.stats;
      n.parsing.start = n.parsing.end = n.buffering.start = n.buffering.end = self.performance.now(), i.trigger(m.FRAG_LOADED, s), r.bitrateTest = !1;
    });
  }
  _handleTransmuxComplete(e) {
    var t;
    const s = this.playlistType, {
      hls: i
    } = this, {
      remuxResult: r,
      chunkMeta: n
    } = e, o = this.getCurrentContext(n);
    if (!o) {
      this.resetWhenMissingContext(n);
      return;
    }
    const {
      frag: c,
      part: l,
      level: u
    } = o, {
      video: d,
      text: h,
      id3: f,
      initSegment: g
    } = r, {
      details: y
    } = u, p = this.altAudio ? void 0 : r.audio;
    if (this.fragContextChanged(c)) {
      this.fragmentTracker.removeFragment(c);
      return;
    }
    if (this.state = P.PARSING, g) {
      if (g != null && g.tracks) {
        const T = c.initSegment || c;
        this._bufferInitSegment(u, g.tracks, T, n), i.trigger(m.FRAG_PARSING_INIT_SEGMENT, {
          frag: T,
          id: s,
          tracks: g.tracks
        });
      }
      const E = g.initPTS, v = g.timescale;
      N(E) && (this.initPTS[c.cc] = {
        baseTime: E,
        timescale: v
      }, i.trigger(m.INIT_PTS_FOUND, {
        frag: c,
        id: s,
        initPTS: E,
        timescale: v
      }));
    }
    if (d && y) {
      p && d.type === "audiovideo" && this.logMuxedErr(c);
      const E = y.fragments[c.sn - 1 - y.startSN], v = c.sn === y.startSN, T = !E || c.cc > E.cc;
      if (r.independent !== !1) {
        const {
          startPTS: S,
          endPTS: x,
          startDTS: _,
          endDTS: A
        } = d;
        if (l)
          l.elementaryStreams[d.type] = {
            startPTS: S,
            endPTS: x,
            startDTS: _,
            endDTS: A
          };
        else if (d.firstKeyFrame && d.independent && n.id === 1 && !T && (this.couldBacktrack = !0), d.dropped && d.independent) {
          const b = this.getMainFwdBufferInfo(), C = (b ? b.end : this.getLoadPosition()) + this.config.maxBufferHole, L = d.firstKeyFramePTS ? d.firstKeyFramePTS : S;
          if (!v && C < L - this.config.maxBufferHole && !T) {
            this.backtrack(c);
            return;
          } else
            T && (c.gap = !0);
          c.setElementaryStreamInfo(d.type, c.start, x, c.start, A, !0);
        } else
          v && S - (y.appliedTimelineOffset || 0) > Es && (c.gap = !0);
        c.setElementaryStreamInfo(d.type, S, x, _, A), this.backtrackFragment && (this.backtrackFragment = c), this.bufferFragmentData(d, c, l, n, v || T);
      } else if (v || T)
        c.gap = !0;
      else {
        this.backtrack(c);
        return;
      }
    }
    if (p) {
      const {
        startPTS: E,
        endPTS: v,
        startDTS: T,
        endDTS: S
      } = p;
      l && (l.elementaryStreams[ae.AUDIO] = {
        startPTS: E,
        endPTS: v,
        startDTS: T,
        endDTS: S
      }), c.setElementaryStreamInfo(ae.AUDIO, E, v, T, S), this.bufferFragmentData(p, c, l, n);
    }
    if (y && f != null && (t = f.samples) != null && t.length) {
      const E = {
        id: s,
        frag: c,
        details: y,
        samples: f.samples
      };
      i.trigger(m.FRAG_PARSING_METADATA, E);
    }
    if (y && h) {
      const E = {
        id: s,
        frag: c,
        details: y,
        samples: h.samples
      };
      i.trigger(m.FRAG_PARSING_USERDATA, E);
    }
  }
  logMuxedErr(e) {
    this.warn(`${ye(e) ? "Media" : "Init"} segment with muxed audiovideo where only video expected: ${e.url}`);
  }
  _bufferInitSegment(e, t, s, i) {
    if (this.state !== P.PARSING)
      return;
    this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && (delete t.audio, t.audiovideo && this.logMuxedErr(s));
    const {
      audio: r,
      video: n,
      audiovideo: o
    } = t;
    if (r) {
      let l = hs(r.codec, e.audioCodec);
      l === "mp4a" && (l = "mp4a.40.5");
      const u = navigator.userAgent.toLowerCase();
      if (this.audioCodecSwitch) {
        l && (l.indexOf("mp4a.40.5") !== -1 ? l = "mp4a.40.2" : l = "mp4a.40.5");
        const d = r.metadata;
        d && "channelCount" in d && (d.channelCount || 1) !== 1 && u.indexOf("firefox") === -1 && (l = "mp4a.40.5");
      }
      l && l.indexOf("mp4a.40.5") !== -1 && u.indexOf("android") !== -1 && r.container !== "audio/mpeg" && (l = "mp4a.40.2", this.log(`Android: force audio codec to ${l}`)), e.audioCodec && e.audioCodec !== l && this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${l}"`), r.levelCodec = l, r.id = G.MAIN, this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${l || ""}/${e.audioCodec || ""}/${r.codec}]`), delete t.audiovideo;
    }
    if (n) {
      n.levelCodec = e.videoCodec, n.id = G.MAIN;
      const l = n.codec;
      if ((l == null ? void 0 : l.length) === 4)
        switch (l) {
          case "hvc1":
          case "hev1":
            n.codec = "hvc1.1.6.L120.90";
            break;
          case "av01":
            n.codec = "av01.0.04M.08";
            break;
          case "avc1":
            n.codec = "avc1.42e01e";
            break;
        }
      this.log(`Init video buffer, container:${n.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${l}]${n.codec !== l ? " parsed-corrected=" + n.codec : ""}${n.supplemental ? " supplemental=" + n.supplemental : ""}`), delete t.audiovideo;
    }
    o && (this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.codecs}/${o.codec}]`), delete t.video, delete t.audio);
    const c = Object.keys(t);
    if (c.length) {
      if (this.hls.trigger(m.BUFFER_CODECS, t), !this.hls)
        return;
      c.forEach((l) => {
        const d = t[l].initSegment;
        d != null && d.byteLength && this.hls.trigger(m.BUFFER_APPENDING, {
          type: l,
          data: d,
          frag: s,
          part: null,
          chunkMeta: i,
          parent: s.type
        });
      });
    }
    this.tickImmediate();
  }
  getMainFwdBufferInfo() {
    const e = this.mediaBuffer && this.altAudio === 2 ? this.mediaBuffer : this.media;
    return this.getFwdBufferInfo(e, G.MAIN);
  }
  get maxBufferLength() {
    const {
      levels: e,
      level: t
    } = this, s = e == null ? void 0 : e[t];
    return s ? this.getMaxBufferLength(s.maxBitrate) : this.config.maxBufferLength;
  }
  backtrack(e) {
    this.couldBacktrack = !0, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = P.IDLE;
  }
  checkFragmentChanged() {
    const e = this.media;
    let t = null;
    if (e && e.readyState > 1 && e.seeking === !1) {
      const s = e.currentTime;
      if (z.isBuffered(e, s) ? t = this.getAppendedFrag(s) : z.isBuffered(e, s + 0.1) && (t = this.getAppendedFrag(s + 0.1)), t) {
        this.backtrackFragment = null;
        const i = this.fragPlaying, r = t.level;
        (!i || t.sn !== i.sn || i.level !== r) && (this.fragPlaying = t, this.hls.trigger(m.FRAG_CHANGED, {
          frag: t
        }), (!i || i.level !== r) && this.hls.trigger(m.LEVEL_SWITCHED, {
          level: r
        }));
      }
    }
  }
  get nextLevel() {
    const e = this.nextBufferedFrag;
    return e ? e.level : -1;
  }
  get currentFrag() {
    var e;
    if (this.fragPlaying)
      return this.fragPlaying;
    const t = ((e = this.media) == null ? void 0 : e.currentTime) || this.lastCurrentTime;
    return N(t) ? this.getAppendedFrag(t) : null;
  }
  get currentProgramDateTime() {
    var e;
    const t = ((e = this.media) == null ? void 0 : e.currentTime) || this.lastCurrentTime;
    if (N(t)) {
      const s = this.getLevelDetails(), i = this.currentFrag || (s ? Et(null, s.fragments, t) : null);
      if (i) {
        const r = i.programDateTime;
        if (r !== null) {
          const n = r + (t - i.start) * 1e3;
          return new Date(n);
        }
      }
    }
    return null;
  }
  get currentLevel() {
    const e = this.currentFrag;
    return e ? e.level : -1;
  }
  get nextBufferedFrag() {
    const e = this.currentFrag;
    return e ? this.followingBufferedFrag(e) : null;
  }
  get forceStartLoad() {
    return this._forceStartLoad;
  }
}
class Yd {
  constructor(e) {
    this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = e;
  }
  abort(e) {
    for (const s in this.keyUriToKeyInfo) {
      const i = this.keyUriToKeyInfo[s].loader;
      if (i) {
        var t;
        if (e && e !== ((t = i.context) == null ? void 0 : t.frag.type))
          return;
        i.abort();
      }
    }
  }
  detach() {
    for (const e in this.keyUriToKeyInfo) {
      const t = this.keyUriToKeyInfo[e];
      (t.mediaKeySessionContext || t.decryptdata.isCommonEncryption) && delete this.keyUriToKeyInfo[e];
    }
  }
  destroy() {
    this.detach();
    for (const e in this.keyUriToKeyInfo) {
      const t = this.keyUriToKeyInfo[e].loader;
      t && t.destroy();
    }
    this.keyUriToKeyInfo = {};
  }
  createKeyLoadError(e, t = R.KEY_LOAD_ERROR, s, i, r) {
    return new ze({
      type: H.NETWORK_ERROR,
      details: t,
      fatal: !1,
      frag: e,
      response: r,
      error: s,
      networkDetails: i
    });
  }
  loadClear(e, t) {
    if (this.emeController && this.config.emeEnabled) {
      const {
        sn: s,
        cc: i
      } = e;
      for (let r = 0; r < t.length; r++) {
        const n = t[r];
        if (i <= n.cc && (s === "initSegment" || n.sn === "initSegment" || s < n.sn)) {
          this.emeController.selectKeySystemFormat(n).then((o) => {
            n.setKeyFormat(o);
          });
          break;
        }
      }
    }
  }
  load(e) {
    return !e.decryptdata && e.encrypted && this.emeController && this.config.emeEnabled ? this.emeController.selectKeySystemFormat(e).then((t) => this.loadInternal(e, t)) : this.loadInternal(e);
  }
  loadInternal(e, t) {
    var s, i;
    t && e.setKeyFormat(t);
    const r = e.decryptdata;
    if (!r) {
      const l = new Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : "Missing decryption data on fragment in onKeyLoading");
      return Promise.reject(this.createKeyLoadError(e, R.KEY_LOAD_ERROR, l));
    }
    const n = r.uri;
    if (!n)
      return Promise.reject(this.createKeyLoadError(e, R.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${n}"`)));
    let o = this.keyUriToKeyInfo[n];
    if ((s = o) != null && s.decryptdata.key)
      return r.key = o.decryptdata.key, Promise.resolve({
        frag: e,
        keyInfo: o
      });
    if ((i = o) != null && i.keyLoadPromise) {
      var c;
      switch ((c = o.mediaKeySessionContext) == null ? void 0 : c.keyStatus) {
        case void 0:
        case "status-pending":
        case "usable":
        case "usable-in-future":
          return o.keyLoadPromise.then((l) => (r.key = l.keyInfo.decryptdata.key, {
            frag: e,
            keyInfo: o
          }));
      }
    }
    switch (o = this.keyUriToKeyInfo[n] = {
      decryptdata: r,
      keyLoadPromise: null,
      loader: null,
      mediaKeySessionContext: null
    }, r.method) {
      case "ISO-23001-7":
      case "SAMPLE-AES":
      case "SAMPLE-AES-CENC":
      case "SAMPLE-AES-CTR":
        return r.keyFormat === "identity" ? this.loadKeyHTTP(o, e) : this.loadKeyEME(o, e);
      case "AES-128":
      case "AES-256":
      case "AES-256-CTR":
        return this.loadKeyHTTP(o, e);
      default:
        return Promise.reject(this.createKeyLoadError(e, R.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${r.method}"`)));
    }
  }
  loadKeyEME(e, t) {
    const s = {
      frag: t,
      keyInfo: e
    };
    if (this.emeController && this.config.emeEnabled) {
      const i = this.emeController.loadKey(s);
      if (i)
        return (e.keyLoadPromise = i.then((r) => (e.mediaKeySessionContext = r, s))).catch((r) => {
          throw e.keyLoadPromise = null, r;
        });
    }
    return Promise.resolve(s);
  }
  loadKeyHTTP(e, t) {
    const s = this.config, i = s.loader, r = new i(s);
    return t.keyLoader = e.loader = r, e.keyLoadPromise = new Promise((n, o) => {
      const c = {
        keyInfo: e,
        frag: t,
        responseType: "arraybuffer",
        url: e.decryptdata.uri
      }, l = s.keyLoadPolicy.default, u = {
        loadPolicy: l,
        timeout: l.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, d = {
        onSuccess: (h, f, g, y) => {
          const {
            frag: p,
            keyInfo: E,
            url: v
          } = g;
          if (!p.decryptdata || E !== this.keyUriToKeyInfo[v])
            return o(this.createKeyLoadError(p, R.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), y));
          E.decryptdata.key = p.decryptdata.key = new Uint8Array(h.data), p.keyLoader = null, E.loader = null, n({
            frag: p,
            keyInfo: E
          });
        },
        onError: (h, f, g, y) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, R.KEY_LOAD_ERROR, new Error(`HTTP Error ${h.code} loading key ${h.text}`), g, re({
            url: c.url,
            data: void 0
          }, h)));
        },
        onTimeout: (h, f, g) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, R.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), g));
        },
        onAbort: (h, f, g) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, R.INTERNAL_ABORTED, new Error("key loading aborted"), g));
        }
      };
      r.load(c, u, d);
    });
  }
  resetLoader(e) {
    const {
      frag: t,
      keyInfo: s,
      url: i
    } = e, r = s.loader;
    t.keyLoader === r && (t.keyLoader = null, s.loader = null), delete this.keyUriToKeyInfo[i], r && r.destroy();
  }
}
function vn(a) {
  const {
    type: e
  } = a;
  switch (e) {
    case Q.AUDIO_TRACK:
      return G.AUDIO;
    case Q.SUBTITLE_TRACK:
      return G.SUBTITLE;
    default:
      return G.MAIN;
  }
}
function ai(a, e) {
  let t = a.url;
  return (t === void 0 || t.indexOf("data:") === 0) && (t = e.url), t;
}
class qd {
  constructor(e) {
    this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.onManifestLoaded = this.checkAutostartLoad, this.hls = e, this.registerListeners();
  }
  startLoad(e) {
  }
  stopLoad() {
    this.destroyInternalLoaders();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(m.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_LOADING, this.onLevelLoading, this), e.off(m.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(m.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this);
  }
  /**
   * Returns defaults or configured loader-type overloads (pLoader and loader config params)
   */
  createInternalLoader(e) {
    const t = this.hls.config, s = t.pLoader, i = t.loader, r = s || i, n = new r(t);
    return this.loaders[e.type] = n, n;
  }
  getInternalLoader(e) {
    return this.loaders[e.type];
  }
  resetInternalLoader(e) {
    this.loaders[e] && delete this.loaders[e];
  }
  /**
   * Call `destroy` on all internal loader instances mapped (one per context type)
   */
  destroyInternalLoaders() {
    for (const e in this.loaders) {
      const t = this.loaders[e];
      t && t.destroy(), this.resetInternalLoader(e);
    }
  }
  destroy() {
    this.variableList = null, this.unregisterListeners(), this.destroyInternalLoaders();
  }
  onManifestLoading(e, t) {
    const {
      url: s
    } = t;
    this.variableList = null, this.load({
      id: null,
      level: 0,
      responseType: "text",
      type: Q.MANIFEST,
      url: s,
      deliveryDirectives: null,
      levelOrTrack: null
    });
  }
  onLevelLoading(e, t) {
    const {
      id: s,
      level: i,
      pathwayId: r,
      url: n,
      deliveryDirectives: o,
      levelInfo: c
    } = t;
    this.load({
      id: s,
      level: i,
      pathwayId: r,
      responseType: "text",
      type: Q.LEVEL,
      url: n,
      deliveryDirectives: o,
      levelOrTrack: c
    });
  }
  onAudioTrackLoading(e, t) {
    const {
      id: s,
      groupId: i,
      url: r,
      deliveryDirectives: n,
      track: o
    } = t;
    this.load({
      id: s,
      groupId: i,
      level: null,
      responseType: "text",
      type: Q.AUDIO_TRACK,
      url: r,
      deliveryDirectives: n,
      levelOrTrack: o
    });
  }
  onSubtitleTrackLoading(e, t) {
    const {
      id: s,
      groupId: i,
      url: r,
      deliveryDirectives: n,
      track: o
    } = t;
    this.load({
      id: s,
      groupId: i,
      level: null,
      responseType: "text",
      type: Q.SUBTITLE_TRACK,
      url: r,
      deliveryDirectives: n,
      levelOrTrack: o
    });
  }
  onLevelsUpdated(e, t) {
    const s = this.loaders[Q.LEVEL];
    if (s) {
      const i = s.context;
      i && !t.levels.some((r) => r === i.levelOrTrack) && (s.abort(), delete this.loaders[Q.LEVEL]);
    }
  }
  load(e) {
    var t;
    const s = this.hls.config;
    let i = this.getInternalLoader(e);
    if (i) {
      const l = this.hls.logger, u = i.context;
      if (u && u.levelOrTrack === e.levelOrTrack && (u.url === e.url || u.deliveryDirectives && !e.deliveryDirectives)) {
        u.url === e.url ? l.log(`[playlist-loader]: ignore ${e.url} ongoing request`) : l.log(`[playlist-loader]: ignore ${e.url} in favor of ${u.url}`);
        return;
      }
      l.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), i.abort();
    }
    let r;
    if (e.type === Q.MANIFEST ? r = s.manifestLoadPolicy.default : r = oe({}, s.playlistLoadPolicy.default, {
      timeoutRetry: null,
      errorRetry: null
    }), i = this.createInternalLoader(e), N((t = e.deliveryDirectives) == null ? void 0 : t.part)) {
      let l;
      if (e.type === Q.LEVEL && e.level !== null ? l = this.hls.levels[e.level].details : e.type === Q.AUDIO_TRACK && e.id !== null ? l = this.hls.audioTracks[e.id].details : e.type === Q.SUBTITLE_TRACK && e.id !== null && (l = this.hls.subtitleTracks[e.id].details), l) {
        const u = l.partTarget, d = l.targetduration;
        if (u && d) {
          const h = Math.max(u * 3, d * 0.8) * 1e3;
          r = oe({}, r, {
            maxTimeToFirstByteMs: Math.min(h, r.maxTimeToFirstByteMs),
            maxLoadTimeMs: Math.min(h, r.maxTimeToFirstByteMs)
          });
        }
      }
    }
    const n = r.errorRetry || r.timeoutRetry || {}, o = {
      loadPolicy: r,
      timeout: r.maxLoadTimeMs,
      maxRetry: n.maxNumRetry || 0,
      retryDelay: n.retryDelayMs || 0,
      maxRetryDelay: n.maxRetryDelayMs || 0
    }, c = {
      onSuccess: (l, u, d, h) => {
        const f = this.getInternalLoader(d);
        this.resetInternalLoader(d.type);
        const g = l.data;
        if (g.indexOf("#EXTM3U") !== 0) {
          this.handleManifestParsingError(l, d, new Error("no EXTM3U delimiter"), h || null, u);
          return;
        }
        u.parsing.start = performance.now(), He.isMediaPlaylist(g) || d.type !== Q.MANIFEST ? this.handleTrackOrLevelPlaylist(l, u, d, h || null, f) : this.handleMasterPlaylist(l, u, d, h);
      },
      onError: (l, u, d, h) => {
        this.handleNetworkError(u, d, !1, l, h);
      },
      onTimeout: (l, u, d) => {
        this.handleNetworkError(u, d, !0, void 0, l);
      }
    };
    i.load(e, o, c);
  }
  checkAutostartLoad() {
    if (!this.hls)
      return;
    const {
      config: {
        autoStartLoad: e,
        startPosition: t
      },
      forceStartLoad: s
    } = this.hls;
    (e || s) && (this.hls.logger.log(`${e ? "auto" : "force"} startLoad with configured startPosition ${t}`), this.hls.startLoad(t));
  }
  handleMasterPlaylist(e, t, s, i) {
    const r = this.hls, n = e.data, o = ai(e, s), c = He.parseMasterPlaylist(n, o);
    if (c.playlistParsingError) {
      this.handleManifestParsingError(e, s, c.playlistParsingError, i, t);
      return;
    }
    const {
      contentSteering: l,
      levels: u,
      sessionData: d,
      sessionKeys: h,
      startTimeOffset: f,
      variableList: g
    } = c;
    this.variableList = g;
    const {
      AUDIO: y = [],
      SUBTITLES: p,
      "CLOSED-CAPTIONS": E
    } = He.parseMasterPlaylistMedia(n, o, c);
    y.length && !y.some((T) => !T.url) && u[0].audioCodec && !u[0].attrs.AUDIO && (this.hls.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), y.unshift({
      type: "main",
      name: "main",
      groupId: "main",
      default: !1,
      autoselect: !1,
      forced: !1,
      id: -1,
      attrs: new de({}),
      bitrate: 0,
      url: ""
    })), r.trigger(m.MANIFEST_LOADED, {
      levels: u,
      audioTracks: y,
      subtitles: p,
      captions: E,
      contentSteering: l,
      url: o,
      stats: t,
      networkDetails: i,
      sessionData: d,
      sessionKeys: h,
      startTimeOffset: f,
      variableList: g
    });
  }
  handleTrackOrLevelPlaylist(e, t, s, i, r) {
    const n = this.hls, {
      id: o,
      level: c,
      type: l
    } = s, u = ai(e, s), d = N(c) ? c : N(o) ? o : 0, h = vn(s), f = He.parseLevelPlaylist(e.data, u, d, h, 0, this.variableList);
    if (l === Q.MANIFEST) {
      const g = {
        attrs: new de({}),
        bitrate: 0,
        details: f,
        name: "",
        url: u
      };
      f.requestScheduled = t.loading.start + Jn(f, 0), n.trigger(m.MANIFEST_LOADED, {
        levels: [g],
        audioTracks: [],
        url: u,
        stats: t,
        networkDetails: i,
        sessionData: null,
        sessionKeys: null,
        contentSteering: null,
        startTimeOffset: null,
        variableList: null
      });
    }
    t.parsing.end = performance.now(), s.levelDetails = f, this.handlePlaylistLoaded(f, e, t, s, i, r);
  }
  handleManifestParsingError(e, t, s, i, r) {
    this.hls.trigger(m.ERROR, {
      type: H.NETWORK_ERROR,
      details: R.MANIFEST_PARSING_ERROR,
      fatal: t.type === Q.MANIFEST,
      url: e.url,
      err: s,
      error: s,
      reason: s.message,
      response: e,
      context: t,
      networkDetails: i,
      stats: r
    });
  }
  handleNetworkError(e, t, s = !1, i, r) {
    let n = `A network ${s ? "timeout" : "error" + (i ? " (status " + i.code + ")" : "")} occurred while loading ${e.type}`;
    e.type === Q.LEVEL ? n += `: ${e.level} id: ${e.id}` : (e.type === Q.AUDIO_TRACK || e.type === Q.SUBTITLE_TRACK) && (n += ` id: ${e.id} group-id: "${e.groupId}"`);
    const o = new Error(n);
    this.hls.logger.warn(`[playlist-loader]: ${n}`);
    let c = R.UNKNOWN, l = !1;
    const u = this.getInternalLoader(e);
    switch (e.type) {
      case Q.MANIFEST:
        c = s ? R.MANIFEST_LOAD_TIMEOUT : R.MANIFEST_LOAD_ERROR, l = !0;
        break;
      case Q.LEVEL:
        c = s ? R.LEVEL_LOAD_TIMEOUT : R.LEVEL_LOAD_ERROR, l = !1;
        break;
      case Q.AUDIO_TRACK:
        c = s ? R.AUDIO_TRACK_LOAD_TIMEOUT : R.AUDIO_TRACK_LOAD_ERROR, l = !1;
        break;
      case Q.SUBTITLE_TRACK:
        c = s ? R.SUBTITLE_TRACK_LOAD_TIMEOUT : R.SUBTITLE_LOAD_ERROR, l = !1;
        break;
    }
    u && this.resetInternalLoader(e.type);
    const d = {
      type: H.NETWORK_ERROR,
      details: c,
      fatal: l,
      url: e.url,
      loader: u,
      context: e,
      error: o,
      networkDetails: t,
      stats: r
    };
    if (i) {
      const h = (t == null ? void 0 : t.url) || e.url;
      d.response = re({
        url: h,
        data: void 0
      }, i);
    }
    this.hls.trigger(m.ERROR, d);
  }
  handlePlaylistLoaded(e, t, s, i, r, n) {
    const o = this.hls, {
      type: c,
      level: l,
      id: u,
      groupId: d,
      deliveryDirectives: h
    } = i, f = ai(t, i), g = vn(i), y = typeof i.level == "number" && g === G.MAIN ? l : void 0;
    if (!e.fragments.length) {
      const E = e.playlistParsingError = new Error("No Segments found in Playlist");
      o.trigger(m.ERROR, {
        type: H.NETWORK_ERROR,
        details: R.LEVEL_EMPTY_ERROR,
        fatal: !1,
        url: f,
        error: E,
        reason: E.message,
        response: t,
        context: i,
        level: y,
        parent: g,
        networkDetails: r,
        stats: s
      });
      return;
    }
    e.targetduration || (e.playlistParsingError = new Error("Missing Target Duration"));
    const p = e.playlistParsingError;
    if (p) {
      if (this.hls.logger.warn(p), !o.config.ignorePlaylistParsingErrors) {
        o.trigger(m.ERROR, {
          type: H.NETWORK_ERROR,
          details: R.LEVEL_PARSING_ERROR,
          fatal: !1,
          url: f,
          error: p,
          reason: p.message,
          response: t,
          context: i,
          level: y,
          parent: g,
          networkDetails: r,
          stats: s
        });
        return;
      }
      e.playlistParsingError = null;
    }
    switch (e.live && n && (n.getCacheAge && (e.ageHeader = n.getCacheAge() || 0), (!n.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)), c) {
      case Q.MANIFEST:
      case Q.LEVEL:
        o.trigger(m.LEVEL_LOADED, {
          details: e,
          levelInfo: i.levelOrTrack || o.levels[0],
          level: y || 0,
          id: u || 0,
          stats: s,
          networkDetails: r,
          deliveryDirectives: h,
          withoutMultiVariant: c === Q.MANIFEST
        });
        break;
      case Q.AUDIO_TRACK:
        o.trigger(m.AUDIO_TRACK_LOADED, {
          details: e,
          track: i.levelOrTrack,
          id: u || 0,
          groupId: d || "",
          stats: s,
          networkDetails: r,
          deliveryDirectives: h
        });
        break;
      case Q.SUBTITLE_TRACK:
        o.trigger(m.SUBTITLE_TRACK_LOADED, {
          details: e,
          track: i.levelOrTrack,
          id: u || 0,
          groupId: d || "",
          stats: s,
          networkDetails: r,
          deliveryDirectives: h
        });
        break;
    }
  }
}
class Ve {
  /**
   * Get the video-dev/hls.js package version.
   */
  static get version() {
    return Wt;
  }
  /**
   * Check if the required MediaSource Extensions are available.
   */
  static isMSESupported() {
    return qa();
  }
  /**
   * Check if MediaSource Extensions are available and isTypeSupported checks pass for any baseline codecs.
   */
  static isSupported() {
    return Vd();
  }
  /**
   * Get the MediaSource global used for MSE playback (ManagedMediaSource, MediaSource, or WebKitMediaSource).
   */
  static getMediaSource() {
    return nt();
  }
  static get Events() {
    return m;
  }
  static get MetadataSchema() {
    return Ie;
  }
  static get ErrorTypes() {
    return H;
  }
  static get ErrorDetails() {
    return R;
  }
  /**
   * Get the default configuration applied to new instances.
   */
  static get DefaultConfig() {
    return Ve.defaultConfig ? Ve.defaultConfig : Dd;
  }
  /**
   * Replace the default configuration applied to new instances.
   */
  static set DefaultConfig(e) {
    Ve.defaultConfig = e;
  }
  /**
   * Creates an instance of an HLS client that can attach to exactly one `HTMLMediaElement`.
   * @param userConfig - Configuration options applied over `Hls.DefaultConfig`
   */
  constructor(e = {}) {
    this.config = void 0, this.userConfig = void 0, this.logger = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new Gi(), this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioStreamController = void 0, this.subtititleStreamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.interstitialsController = void 0, this.gapController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this._url = null, this._sessionId = void 0, this.triggeringException = void 0, this.started = !1;
    const t = this.logger = ho(e.debug || !1, "Hls instance", e.assetPlayerId), s = this.config = Pd(Ve.DefaultConfig, e, t);
    this.userConfig = e, s.progressive && kd(s, t);
    const {
      abrController: i,
      bufferController: r,
      capLevelController: n,
      errorController: o,
      fpsController: c
    } = s, l = new o(this), u = this.abrController = new i(this), d = new rl(this), h = s.interstitialsController, f = h ? this.interstitialsController = new h(this, Ve) : null, g = this.bufferController = new r(this, d), y = this.capLevelController = new n(this), p = new c(this), E = new qd(this), v = s.contentSteeringController, T = v ? new v(this) : null, S = this.levelController = new Gd(this, T), x = new Ud(this), _ = new Yd(this.config), A = this.streamController = new Wd(this, d, _), b = this.gapController = new Md(this, d);
    y.setStreamController(A), p.setStreamController(A);
    const C = [E, S, A];
    f && C.splice(1, 0, f), T && C.splice(1, 0, T), this.networkControllers = C;
    const L = [u, g, b, y, p, x, d];
    this.audioTrackController = this.createController(s.audioTrackController, C);
    const w = s.audioStreamController;
    w && C.push(this.audioStreamController = new w(this, d, _)), this.subtitleTrackController = this.createController(s.subtitleTrackController, C);
    const F = s.subtitleStreamController;
    F && C.push(this.subtititleStreamController = new F(this, d, _)), this.createController(s.timelineController, L), _.emeController = this.emeController = this.createController(s.emeController, L), this.cmcdController = this.createController(s.cmcdController, L), this.latencyController = this.createController($d, L), this.coreComponents = L, C.push(l);
    const X = l.onErrorOut;
    typeof X == "function" && this.on(m.ERROR, X, l), this.on(m.MANIFEST_LOADED, E.onManifestLoaded, E);
  }
  createController(e, t) {
    if (e) {
      const s = new e(this);
      return t && t.push(s), s;
    }
    return null;
  }
  // Delegate the EventEmitter through the public API of Hls.js
  on(e, t, s = this) {
    this._emitter.on(e, t, s);
  }
  once(e, t, s = this) {
    this._emitter.once(e, t, s);
  }
  removeAllListeners(e) {
    this._emitter.removeAllListeners(e);
  }
  off(e, t, s = this, i) {
    this._emitter.off(e, t, s, i);
  }
  listeners(e) {
    return this._emitter.listeners(e);
  }
  emit(e, t, s) {
    return this._emitter.emit(e, t, s);
  }
  trigger(e, t) {
    if (this.config.debug)
      return this.emit(e, e, t);
    try {
      return this.emit(e, e, t);
    } catch (s) {
      if (this.logger.error("An internal error happened while handling event " + e + '. Error message: "' + s.message + '". Here is a stacktrace:', s), !this.triggeringException) {
        this.triggeringException = !0;
        const i = e === m.ERROR;
        this.trigger(m.ERROR, {
          type: H.OTHER_ERROR,
          details: R.INTERNAL_EXCEPTION,
          fatal: i,
          event: e,
          error: s
        }), this.triggeringException = !1;
      }
    }
    return !1;
  }
  listenerCount(e) {
    return this._emitter.listenerCount(e);
  }
  /**
   * Dispose of the instance
   */
  destroy() {
    this.logger.log("destroy"), this.trigger(m.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this._url = null, this.networkControllers.forEach((t) => t.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach((t) => t.destroy()), this.coreComponents.length = 0;
    const e = this.config;
    e.xhrSetup = e.fetchSetup = void 0, this.userConfig = null;
  }
  /**
   * Attaches Hls.js to a media element
   */
  attachMedia(e) {
    if (!e || "media" in e && !e.media) {
      const r = new Error(`attachMedia failed: invalid argument (${e})`);
      this.trigger(m.ERROR, {
        type: H.OTHER_ERROR,
        details: R.ATTACH_MEDIA_ERROR,
        fatal: !0,
        error: r
      });
      return;
    }
    this.logger.log("attachMedia"), this._media && (this.logger.warn("media must be detached before attaching"), this.detachMedia());
    const t = "media" in e, s = t ? e.media : e, i = t ? e : {
      media: s
    };
    this._media = s, this.trigger(m.MEDIA_ATTACHING, i);
  }
  /**
   * Detach Hls.js from the media
   */
  detachMedia() {
    this.logger.log("detachMedia"), this.trigger(m.MEDIA_DETACHING, {}), this._media = null;
  }
  /**
   * Detach HTMLMediaElement, MediaSource, and SourceBuffers without reset, for attaching to another instance
   */
  transferMedia() {
    this._media = null;
    const e = this.bufferController.transferMedia();
    return this.trigger(m.MEDIA_DETACHING, {
      transferMedia: e
    }), e;
  }
  /**
   * Set the source URL. Can be relative or absolute.
   */
  loadSource(e) {
    this.stopLoad();
    const t = this.media, s = this._url, i = this._url = Pi.buildAbsoluteURL(self.location.href, e, {
      alwaysNormalize: !0
    });
    this._autoLevelCapping = -1, this._maxHdcpLevel = null, this.logger.log(`loadSource:${i}`), t && s && (s !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(m.MANIFEST_LOADING, {
      url: e
    });
  }
  /**
   * Gets the currently loaded URL
   */
  get url() {
    return this._url;
  }
  /**
   * Whether or not enough has been buffered to seek to start position or use `media.currentTime` to determine next load position
   */
  get hasEnoughToStart() {
    return this.streamController.hasEnoughToStart;
  }
  /**
   * Get the startPosition set on startLoad(position) or on autostart with config.startPosition
   */
  get startPosition() {
    return this.streamController.startPositionValue;
  }
  /**
   * Start loading data from the stream source.
   * Depending on default config, client starts loading automatically when a source is set.
   *
   * @param startPosition - Set the start position to stream from.
   * Defaults to -1 (None: starts from earliest point)
   */
  startLoad(e = -1, t) {
    this.logger.log(`startLoad(${e + (t ? ", <skip seek to start>" : "")})`), this.started = !0, this.resumeBuffering();
    for (let s = 0; s < this.networkControllers.length && (this.networkControllers[s].startLoad(e, t), !(!this.started || !this.networkControllers)); s++)
      ;
  }
  /**
   * Stop loading of any stream data.
   */
  stopLoad() {
    this.logger.log("stopLoad"), this.started = !1;
    for (let e = 0; e < this.networkControllers.length && (this.networkControllers[e].stopLoad(), !(this.started || !this.networkControllers)); e++)
      ;
  }
  /**
   * Returns whether loading, toggled with `startLoad()` and `stopLoad()`, is active or not`.
   */
  get loadingEnabled() {
    return this.started;
  }
  /**
   * Returns state of fragment loading toggled by calling `pauseBuffering()` and `resumeBuffering()`.
   */
  get bufferingEnabled() {
    return this.streamController.bufferingEnabled;
  }
  /**
   * Resumes stream controller segment loading after `pauseBuffering` has been called.
   */
  resumeBuffering() {
    this.bufferingEnabled || (this.logger.log("resume buffering"), this.networkControllers.forEach((e) => {
      e.resumeBuffering && e.resumeBuffering();
    }));
  }
  /**
   * Prevents stream controller from loading new segments until `resumeBuffering` is called.
   * This allows for media buffering to be paused without interupting playlist loading.
   */
  pauseBuffering() {
    this.bufferingEnabled && (this.logger.log("pause buffering"), this.networkControllers.forEach((e) => {
      e.pauseBuffering && e.pauseBuffering();
    }));
  }
  get inFlightFragments() {
    const e = {
      [G.MAIN]: this.streamController.inFlightFrag
    };
    return this.audioStreamController && (e[G.AUDIO] = this.audioStreamController.inFlightFrag), this.subtititleStreamController && (e[G.SUBTITLE] = this.subtititleStreamController.inFlightFrag), e;
  }
  /**
   * Swap through possible audio codecs in the stream (for example to switch from stereo to 5.1)
   */
  swapAudioCodec() {
    this.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec();
  }
  /**
   * When the media-element fails, this allows to detach and then re-attach it
   * as one call (convenience method).
   *
   * Automatic recovery of media-errors by this process is configurable.
   */
  recoverMediaError() {
    this.logger.log("recoverMediaError");
    const e = this._media, t = e == null ? void 0 : e.currentTime;
    this.detachMedia(), e && (this.attachMedia(e), t && this.startLoad(t));
  }
  removeLevel(e) {
    this.levelController.removeLevel(e);
  }
  /**
   * @returns a UUID for this player instance
   */
  get sessionId() {
    let e = this._sessionId;
    return e || (e = this._sessionId = sc()), e;
  }
  /**
   * @returns an array of levels (variants) sorted by HDCP-LEVEL, RESOLUTION (height), FRAME-RATE, CODECS, VIDEO-RANGE, and BANDWIDTH
   */
  get levels() {
    const e = this.levelController.levels;
    return e || [];
  }
  /**
   * @returns LevelDetails of last loaded level (variant) or `null` prior to loading a media playlist.
   */
  get latestLevelDetails() {
    return this.streamController.getLevelDetails() || null;
  }
  /**
   * @returns Level object of selected level (variant) or `null` prior to selecting a level or once the level is removed.
   */
  get loadLevelObj() {
    return this.levelController.loadLevelObj;
  }
  /**
   * Index of quality level (variant) currently played
   */
  get currentLevel() {
    return this.streamController.currentLevel;
  }
  /**
   * Set quality level index immediately. This will flush the current buffer to replace the quality asap. That means playback will interrupt at least shortly to re-buffer and re-sync eventually. Set to -1 for automatic level selection.
   */
  set currentLevel(e) {
    this.logger.log(`set currentLevel:${e}`), this.levelController.manualLevel = e, this.streamController.immediateLevelSwitch();
  }
  /**
   * Index of next quality level loaded as scheduled by stream controller.
   */
  get nextLevel() {
    return this.streamController.nextLevel;
  }
  /**
   * Set quality level index for next loaded data.
   * This will switch the video quality asap, without interrupting playback.
   * May abort current loading of data, and flush parts of buffer (outside currently played fragment region).
   * @param newLevel - Pass -1 for automatic level selection
   */
  set nextLevel(e) {
    this.logger.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch();
  }
  /**
   * Return the quality level of the currently or last (of none is loaded currently) segment
   */
  get loadLevel() {
    return this.levelController.level;
  }
  /**
   * Set quality level index for next loaded data in a conservative way.
   * This will switch the quality without flushing, but interrupt current loading.
   * Thus the moment when the quality switch will appear in effect will only be after the already existing buffer.
   * @param newLevel - Pass -1 for automatic level selection
   */
  set loadLevel(e) {
    this.logger.log(`set loadLevel:${e}`), this.levelController.manualLevel = e;
  }
  /**
   * get next quality level loaded
   */
  get nextLoadLevel() {
    return this.levelController.nextLoadLevel;
  }
  /**
   * Set quality level of next loaded segment in a fully "non-destructive" way.
   * Same as `loadLevel` but will wait for next switch (until current loading is done).
   */
  set nextLoadLevel(e) {
    this.levelController.nextLoadLevel = e;
  }
  /**
   * Return "first level": like a default level, if not set,
   * falls back to index of first level referenced in manifest
   */
  get firstLevel() {
    return Math.max(this.levelController.firstLevel, this.minAutoLevel);
  }
  /**
   * Sets "first-level", see getter.
   */
  set firstLevel(e) {
    this.logger.log(`set firstLevel:${e}`), this.levelController.firstLevel = e;
  }
  /**
   * Return the desired start level for the first fragment that will be loaded.
   * The default value of -1 indicates automatic start level selection.
   * Setting hls.nextAutoLevel without setting a startLevel will result in
   * the nextAutoLevel value being used for one fragment load.
   */
  get startLevel() {
    const e = this.levelController.startLevel;
    return e === -1 && this.abrController.forcedAutoLevel > -1 ? this.abrController.forcedAutoLevel : e;
  }
  /**
   * set  start level (level of first fragment that will be played back)
   * if not overrided by user, first level appearing in manifest will be used as start level
   * if -1 : automatic start level selection, playback will start from level matching download bandwidth
   * (determined from download of first segment)
   */
  set startLevel(e) {
    this.logger.log(`set startLevel:${e}`), e !== -1 && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e;
  }
  /**
   * Whether level capping is enabled.
   * Default value is set via `config.capLevelToPlayerSize`.
   */
  get capLevelToPlayerSize() {
    return this.config.capLevelToPlayerSize;
  }
  /**
   * Enables or disables level capping. If disabled after previously enabled, `nextLevelSwitch` will be immediately called.
   */
  set capLevelToPlayerSize(e) {
    const t = !!e;
    t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t);
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  get autoLevelCapping() {
    return this._autoLevelCapping;
  }
  /**
   * Returns the current bandwidth estimate in bits per second, when available. Otherwise, `NaN` is returned.
   */
  get bandwidthEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimate() : NaN;
  }
  set bandwidthEstimate(e) {
    this.abrController.resetEstimator(e);
  }
  get abrEwmaDefaultEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.defaultEstimate : NaN;
  }
  /**
   * get time to first byte estimate
   * @type {number}
   */
  get ttfbEstimate() {
    const {
      bwEstimator: e
    } = this.abrController;
    return e ? e.getEstimateTTFB() : NaN;
  }
  /**
   * Capping/max level value that should be used by automatic level selection algorithm (`ABRController`)
   */
  set autoLevelCapping(e) {
    this._autoLevelCapping !== e && (this.logger.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e, this.levelController.checkMaxAutoUpdated());
  }
  get maxHdcpLevel() {
    return this._maxHdcpLevel;
  }
  set maxHdcpLevel(e) {
    Go(e) && this._maxHdcpLevel !== e && (this._maxHdcpLevel = e, this.levelController.checkMaxAutoUpdated());
  }
  /**
   * True when automatic level selection enabled
   */
  get autoLevelEnabled() {
    return this.levelController.manualLevel === -1;
  }
  /**
   * Level set manually (if any)
   */
  get manualLevel() {
    return this.levelController.manualLevel;
  }
  /**
   * min level selectable in auto mode according to config.minAutoBitrate
   */
  get minAutoLevel() {
    const {
      levels: e,
      config: {
        minAutoBitrate: t
      }
    } = this;
    if (!e)
      return 0;
    const s = e.length;
    for (let i = 0; i < s; i++)
      if (e[i].maxBitrate >= t)
        return i;
    return 0;
  }
  /**
   * max level selectable in auto mode according to autoLevelCapping
   */
  get maxAutoLevel() {
    const {
      levels: e,
      autoLevelCapping: t,
      maxHdcpLevel: s
    } = this;
    let i;
    if (t === -1 && e != null && e.length ? i = e.length - 1 : i = t, s)
      for (let r = i; r--; ) {
        const n = e[r].attrs["HDCP-LEVEL"];
        if (n && n <= s)
          return r;
      }
    return i;
  }
  get firstAutoLevel() {
    return this.abrController.firstAutoLevel;
  }
  /**
   * next automatically selected quality level
   */
  get nextAutoLevel() {
    return this.abrController.nextAutoLevel;
  }
  /**
   * this setter is used to force next auto level.
   * this is useful to force a switch down in auto mode:
   * in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
   * forced value is valid for one fragment. upon successful frag loading at forced level,
   * this value will be resetted to -1 by ABR controller.
   */
  set nextAutoLevel(e) {
    this.abrController.nextAutoLevel = e;
  }
  /**
   * get the datetime value relative to media.currentTime for the active level Program Date Time if present
   */
  get playingDate() {
    return this.streamController.currentProgramDateTime;
  }
  get mainForwardBufferInfo() {
    return this.streamController.getMainFwdBufferInfo();
  }
  get maxBufferLength() {
    return this.streamController.maxBufferLength;
  }
  /**
   * Find and select the best matching audio track, making a level switch when a Group change is necessary.
   * Updates `hls.config.audioPreference`. Returns the selected track, or null when no matching track is found.
   */
  setAudioOption(e) {
    var t;
    return ((t = this.audioTrackController) == null ? void 0 : t.setAudioOption(e)) || null;
  }
  /**
   * Find and select the best matching subtitle track, making a level switch when a Group change is necessary.
   * Updates `hls.config.subtitlePreference`. Returns the selected track, or null when no matching track is found.
   */
  setSubtitleOption(e) {
    var t;
    return ((t = this.subtitleTrackController) == null ? void 0 : t.setSubtitleOption(e)) || null;
  }
  /**
   * Get the complete list of audio tracks across all media groups
   */
  get allAudioTracks() {
    const e = this.audioTrackController;
    return e ? e.allAudioTracks : [];
  }
  /**
   * Get the list of selectable audio tracks
   */
  get audioTracks() {
    const e = this.audioTrackController;
    return e ? e.audioTracks : [];
  }
  /**
   * index of the selected audio track (index in audio track lists)
   */
  get audioTrack() {
    const e = this.audioTrackController;
    return e ? e.audioTrack : -1;
  }
  /**
   * selects an audio track, based on its index in audio track lists
   */
  set audioTrack(e) {
    const t = this.audioTrackController;
    t && (t.audioTrack = e);
  }
  /**
   * get the complete list of subtitle tracks across all media groups
   */
  get allSubtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.allSubtitleTracks : [];
  }
  /**
   * get alternate subtitle tracks list from playlist
   */
  get subtitleTracks() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTracks : [];
  }
  /**
   * index of the selected subtitle track (index in subtitle track lists)
   */
  get subtitleTrack() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleTrack : -1;
  }
  get media() {
    return this._media;
  }
  /**
   * select an subtitle track, based on its index in subtitle track lists
   */
  set subtitleTrack(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleTrack = e);
  }
  /**
   * Whether subtitle display is enabled or not
   */
  get subtitleDisplay() {
    const e = this.subtitleTrackController;
    return e ? e.subtitleDisplay : !1;
  }
  /**
   * Enable/disable subtitle display rendering
   */
  set subtitleDisplay(e) {
    const t = this.subtitleTrackController;
    t && (t.subtitleDisplay = e);
  }
  /**
   * get mode for Low-Latency HLS loading
   */
  get lowLatencyMode() {
    return this.config.lowLatencyMode;
  }
  /**
   * Enable/disable Low-Latency HLS part playlist and segment loading, and start live streams at playlist PART-HOLD-BACK rather than HOLD-BACK.
   */
  set lowLatencyMode(e) {
    this.config.lowLatencyMode = e;
  }
  /**
   * Position (in seconds) of live sync point (ie edge of live position minus safety delay defined by ```hls.config.liveSyncDuration```)
   * @returns null prior to loading live Playlist
   */
  get liveSyncPosition() {
    return this.latencyController.liveSyncPosition;
  }
  /**
   * Estimated position (in seconds) of live edge (ie edge of live playlist plus time sync playlist advanced)
   * @returns 0 before first playlist is loaded
   */
  get latency() {
    return this.latencyController.latency;
  }
  /**
   * maximum distance from the edge before the player seeks forward to ```hls.liveSyncPosition```
   * configured using ```liveMaxLatencyDurationCount``` (multiple of target duration) or ```liveMaxLatencyDuration```
   * @returns 0 before first playlist is loaded
   */
  get maxLatency() {
    return this.latencyController.maxLatency;
  }
  /**
   * target distance from the edge as calculated by the latency controller
   */
  get targetLatency() {
    return this.latencyController.targetLatency;
  }
  set targetLatency(e) {
    this.latencyController.targetLatency = e;
  }
  /**
   * the rate at which the edge of the current live playlist is advancing or 1 if there is none
   */
  get drift() {
    return this.latencyController.drift;
  }
  /**
   * set to true when startLoad is called before MANIFEST_PARSED event
   */
  get forceStartLoad() {
    return this.streamController.forceStartLoad;
  }
  /**
   * ContentSteering pathways getter
   */
  get pathways() {
    return this.levelController.pathways;
  }
  /**
   * ContentSteering pathwayPriority getter/setter
   */
  get pathwayPriority() {
    return this.levelController.pathwayPriority;
  }
  set pathwayPriority(e) {
    this.levelController.pathwayPriority = e;
  }
  /**
   * returns true when all SourceBuffers are buffered to the end
   */
  get bufferedToEnd() {
    var e;
    return !!((e = this.bufferController) != null && e.bufferedToEnd);
  }
  /**
   * returns Interstitials Program Manager
   */
  get interstitialsManager() {
    var e;
    return ((e = this.interstitialsController) == null ? void 0 : e.interstitialsManager) || null;
  }
  /**
   * returns mediaCapabilities.decodingInfo for a variant/rendition
   */
  getMediaDecodingInfo(e, t = this.allAudioTracks) {
    const s = Kn(t);
    return Vn(e, s, navigator.mediaCapabilities);
  }
}
Ve.defaultConfig = void 0;
const ot = (a, e) => {
  const t = a.__vccOpts || a;
  for (const [s, i] of e)
    t[s] = i;
  return t;
}, jd = {
  name: "d-icon"
}, zd = /* @__PURE__ */ Object.assign(jd, {
  props: {
    icon: String,
    size: [Number, String]
  },
  setup(a) {
    const e = a, t = pt(() => ({ fontSize: /^\d+$/.test(e.size) ? e.size + "px" : e.size }));
    return (s, i) => (te(), se("i", {
      class: ft(["d-icon iconfont", a.icon]),
      style: gt(t.value)
    }, null, 6));
  }
}), Ue = /* @__PURE__ */ ot(zd, [["__scopeId", "data-v-bf21758a"]]);
const Xd = { class: "d-player-top" }, Qd = { class: "top-title" }, Zd = { class: "top-title" }, Jd = {
  __name: "d-player-top",
  props: {
    title: {
      default: ""
    }
  },
  setup(a) {
    Date.prototype.format = function(s) {
      let i = {
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds()
      };
      for (var r in i)
        new RegExp("(" + r + ")").test(s) && (s = s.replace(RegExp.$1, RegExp.$1.length == 1 ? i[r] : ("00" + i[r]).substr(("" + i[r]).length)));
      return s;
    };
    let e = rt("00:00:00");
    e.value = (/* @__PURE__ */ new Date()).format("hh:mm:ss");
    let t = null;
    return t = setInterval(() => {
      e.value = (/* @__PURE__ */ new Date()).format("hh:mm:ss");
    }, 1e3), An(() => {
      clearInterval(t);
    }), (s, i) => (te(), se("div", Xd, [
      U("p", Qd, fe(a.title || ""), 1),
      U("p", Zd, fe(dt(e)), 1)
    ]));
  }
}, eh = /* @__PURE__ */ ot(Jd, [["__scopeId", "data-v-8a83c3bf"]]), th = { class: "d-status" }, sh = { class: "d-flex-center" }, ih = { class: "d-flex-center" }, rh = /* @__PURE__ */ zt({
  __name: "d-status",
  props: ["state"],
  setup(a) {
    return (e, t) => Re((te(), se("div", th, [
      Re(U("li", sh, [
        ce(Ue, {
          size: "18",
          class: "d-status-icon",
          icon: `icon-volume-${a.state.volume == 0 ? "mute" : a.state.volume > 0.5 ? "up" : "down"}`
        }, null, 8, ["icon"]),
        Ge(" " + fe(~~(a.state.volume * 100)) + "% ", 1)
      ], 512), [
        [be, a.state.handleType == "volume"]
      ]),
      Re(U("li", ih, [
        ce(Ue, {
          size: "12",
          icon: "icon-play"
        }),
        ce(Ue, {
          size: "12",
          icon: "icon-play",
          style: { "margin-right": "5px" }
        }),
        t[0] || (t[0] = Ge("5倍速播放中 "))
      ], 512), [
        [be, a.state.handleType == "playbackRate" || a.state.isMultiplesPlay]
      ])
    ], 512)), [
      [be, a.state.handleType || a.state.isMultiplesPlay]
    ]);
  }
});
const nh = /* @__PURE__ */ ot(rh, [["__scopeId", "data-v-b4f9cb00"]]), ah = ["checked", "true-value", "false-value"], oh = /* @__PURE__ */ zt({
  __name: "d-switch",
  props: {
    modelValue: {
      //绑定值，必须等于active-value或inactive-value，默认为Boolean类型
      type: [Number, String, Boolean]
    },
    width: {
      //switch 的宽度（像素）
      type: String,
      default: "40px"
    },
    trueValue: {
      //switch 打开时的值
      type: [Number, String, Boolean],
      default: !0
    },
    falseValue: {
      //	switch 关闭时的值
      type: [Number, String, Boolean],
      default: !0
    },
    activeColor: {
      //switch 打开时的背景色
      type: [String],
      default: "#409EFF"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: e }) {
    Ci((o) => ({
      "3c9c80d0": a.width,
      "4d5b9787": a.activeColor
    }));
    const t = a, s = e, i = rt(null), r = pt(() => t.modelValue === t.trueValue), n = () => {
      Ln(() => {
        const o = i.value.checked;
        s("update:modelValue", o), s("change", o);
      });
    };
    return (o, c) => (te(), se("div", {
      class: ft(["d-switch", { "is-checked": r.value }])
    }, [
      U("input", {
        class: "d-switch__input",
        ref_key: "input",
        ref: i,
        type: "checkbox",
        checked: r.value,
        onChange: n,
        "true-value": a.trueValue,
        "false-value": a.falseValue
      }, null, 40, ah),
      c[0] || (c[0] = U("span", { class: "d-switch_action" }, null, -1))
    ], 2));
  }
});
const oi = /* @__PURE__ */ ot(oh, [["__scopeId", "data-v-928a6686"]]), lh = { key: 0 }, ch = /* @__PURE__ */ zt({
  __name: "d-loading",
  props: {
    loadType: String,
    text: {
      type: String,
      default: ""
    }
  },
  setup(a) {
    const { proxy: e } = Qa(), t = ["loadstart", "waiting", "ended", "error", "stalled"], s = a, i = () => {
      e.$parent.play();
    }, r = pt(() => {
      let n = "background: rgba(0, 0, 0, .1);z-index:1";
      return s.loadType == "loadstart" && (n = "background: rgba(0, 0, 0, 1);;z-index:3"), n;
    });
    return (n, o) => Re((te(), se("div", {
      class: "d-loading",
      style: gt(r.value)
    }, [
      U("div", null, [
        a.loadType == "loadstart" ? (te(), se("span", lh, [
          o[0] || (o[0] = U("i", { class: "rotating iconfont icon-loading f50" }, null, -1)),
          U("p", null, fe(a.text), 1)
        ])) : pe("", !0),
        Re(U("span", null, o[1] || (o[1] = [
          U("i", { class: "rotating iconfont icon-loading f50" }, null, -1),
          U("p", null, "正在缓冲...", -1)
        ]), 512), [
          [be, a.loadType == "waiting"]
        ]),
        Re(U("span", null, [
          U("p", {
            onClick: i,
            class: "d-flex-x d-pointer"
          }, o[2] || (o[2] = [
            U("i", { class: "iconfont icon-replay f24 mr5" }, null, -1),
            Ge("重新播放 ")
          ]))
        ], 512), [
          [be, a.loadType == "ended"]
        ]),
        Re(U("span", null, [
          U("p", {
            onClick: i,
            class: "d-flex-x d-pointer"
          }, o[3] || (o[3] = [
            U("i", { class: "iconfont icon-replay f24 mr5" }, null, -1),
            Ge("请求错误 ")
          ]))
        ], 512), [
          [be, a.loadType == "error" || a.loadType == "stalled"]
        ])
      ])
    ], 4)), [
      [be, t.includes(a.loadType)]
    ]);
  }
});
const uh = /* @__PURE__ */ ot(ch, [["__scopeId", "data-v-462eb232"]]), mt = function(a, e, t, s = !1) {
  a && e && t && a.addEventListener(e, t, s);
}, Le = function(a, e, t, s = !1) {
  a && e && t && a.removeEventListener(e, t, s);
}, dh = {
  name: "DSlider"
}, hh = /* @__PURE__ */ zt({
  ...dh,
  props: {
    modelValue: {
      required: !0,
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    vertical: {
      type: Boolean,
      default: !1
    },
    hover: { type: Boolean, default: !0 },
    // 鼠标hover位置
    hoverText: { type: String, default: "" },
    // 鼠标hover位置
    preload: { type: Number, default: 0 },
    // 预加载load
    size: {
      type: String,
      default: "10px"
    }
  },
  emits: ["update:modelValue", "change", "onMousemove"],
  setup(a, { emit: e }) {
    Ci((E) => ({
      "08657e23": a.size
    }));
    const t = rt(null), s = rt(null), i = a, r = e, n = Ts({
      dragging: !1,
      //拖拽状态
      hoverPosition: 0,
      //鼠标位置
      hoverTipsLeft: "50%"
      //提示偏移位置
    }), o = pt(() => {
      let E = i.modelValue < 0 ? 0 : i.modelValue > 1 ? 1 : i.modelValue;
      return i.vertical ? `height:${E * 100}%` : `width:${E * 100}%`;
    }), c = pt(() => {
      let E = i.preload < 0 ? 0 : i.preload > 1 ? 1 : i.preload;
      return i.vertical ? `height:${E * 100}%` : `width:${E * 100}%`;
    }), l = pt(() => {
      let E = n.hoverPosition < 0 ? 0 : n.hoverPosition > 1 ? 1 : n.hoverPosition;
      return i.vertical ? `bottom:${E * 100}%` : `left:${E * 100}%`;
    }), u = (E) => {
      E.preventDefault();
    }, d = (E) => {
      i.disabled || (E.preventDefault(), n.dragging = !0, f(E), mt(window, "mousemove", y), mt(window, "touchmove", y), mt(window, "mouseup", p), mt(window, "touchend", p));
    }, h = (E) => {
      if (!i.hover)
        return;
      let v = g(E);
      if (r("onMousemove", E, v), n.hoverPosition = v, i.vertical)
        return;
      let T = t.value, S = s.value.clientWidth / 2, x = E.clientX - T.getBoundingClientRect().left;
      x < S ? n.hoverTipsLeft = S - x + "px" : T.clientWidth - x < S ? n.hoverTipsLeft = T.clientWidth - x - S + "px" : n.hoverTipsLeft = "50%";
    }, f = (E) => {
      let v = g(E);
      r("update:modelValue", v), r("change", E, v);
    }, g = (E) => {
      let v = t.value, T = 0;
      if (i.vertical) {
        let S = v.clientHeight;
        T = (v.getBoundingClientRect().bottom - E.clientY) / S;
      } else
        T = (E.clientX - v.getBoundingClientRect().left) / v.clientWidth;
      return T < 0 ? 0 : T > 1 ? 1 : T;
    }, y = (E) => {
      f(E);
    }, p = (E) => {
      n.dragging && (Le(window, "mousemove", y), Le(window, "touchmove", y), Le(window, "mouseup", p), Le(window, "touchend", p), Le(window, "contextmenu", p), setTimeout(() => {
        n.dragging = !1;
      }, 0));
    };
    return (E, v) => (te(), se("div", {
      ref_key: "refSlider",
      ref: t,
      class: ft(["d-slider", { "is-vertical": i.vertical }]),
      onMousedown: Za(d, ["stop"]),
      onContextmenu: u
    }, [
      U("div", {
        class: "d-slider__runway",
        onMousemove: h
      }, [
        Re(U("div", {
          class: "d-slider__cursor",
          style: gt(l.value)
        }, [
          Re(U("div", {
            class: "d-slider__tips",
            ref_key: "refTips",
            ref: s,
            style: gt({ left: n.hoverTipsLeft })
          }, fe(i.hoverText), 5), [
            [be, i.hoverText]
          ])
        ], 4), [
          [be, i.hover]
        ]),
        U("div", {
          class: "d-slider__preload",
          style: gt(c.value)
        }, null, 4),
        U("div", {
          class: "d-slider__bar",
          style: gt(o.value)
        }, null, 4)
      ], 32)
    ], 34));
  }
});
const $t = /* @__PURE__ */ ot(hh, [["__scopeId", "data-v-107d6688"]]), Sn = "1.3.2.1";
const fh = {
  key: 0,
  class: "d-player-dialog"
}, gh = { class: "d-player-dialog-body" }, mh = { class: "d-player-dialog-title" }, ph = { class: "d-player-hotkey-panel" }, yh = { class: "d-player-filter-panel" }, Eh = { class: "d-player-filter-panel-item" }, Th = { class: "d-player-filter-panel-item" }, vh = { class: "d-player-filter-panel-item" }, Sh = {
  key: 0,
  class: "d-player-contextmenu"
}, xh = ["dplayerKeyCode"], Ah = {
  __name: "d-contextmenu",
  setup(a) {
    const e = Ts({
      show: !1,
      dialogType: "",
      dialogTitle: "",
      version: Sn,
      mouseX: 0,
      mouseY: 0
    }), t = [
      { label: "视频色彩调整", key: "filter" },
      { label: "快捷键说明", key: "hotkey" },
      { label: "复制视频网址", key: "copy" },
      { label: "版本：" + Sn, key: "version" }
    ], s = [
      { key: "Space", label: "播放/暂停" },
      { key: "→", label: "单次快进10s，长按5倍速播放" },
      { key: "←", label: "快退5s" },
      { key: "↑", label: "音量增加10%" },
      { key: "↓", label: "音量增加降低10%" },
      { key: "Esc", label: "退出全屏/退出网页全屏" },
      { key: "F", label: "全屏/退出全屏" }
    ], i = Ts({
      saturate: 0.392,
      brightness: 0.392,
      contrast: 0.392
    }), r = pt(() => ({
      left: e.mouseX + "px",
      top: e.mouseY + "px"
    }));
    In(i, (u) => {
      let d = document.querySelector("#dPlayerVideo"), h = (u.saturate * 2.55).toFixed(2), f = (u.brightness * 2.55).toFixed(2), g = (u.contrast * 2.55).toFixed(2);
      d.style.filter = `saturate(${h}) brightness(${f}) contrast(${g})`;
    });
    const n = () => {
      i.saturate = 0.392, i.brightness = 0.392, i.contrast = 0.392;
    }, o = (u) => {
      u.key == "Escape" && l(0);
    }, c = (u) => {
      u.preventDefault(), mt(window, "keydown", o), mt(window, "click", l);
      let d = document.querySelector("#refPlayerWrap"), h = d.clientWidth;
      d.clientHeight, e.mouseX = u.clientX - d.getBoundingClientRect().left, h - e.mouseX < 130 && (e.mouseX = e.mouseX + (h - e.mouseX - 130)), e.mouseY = u.clientY - d.getBoundingClientRect().top, e.show = !0;
    }, l = (u) => {
      let d = u.target.nodeName == "LI", h = u.target.attributes.dplayerKeyCode && u.target.attributes.dplayerKeyCode.value, f = t.map((g) => g.key);
      if (d && f.includes(h))
        if (e.dialogTitle = u.target.innerText, e.dialogType = h, h == "copy") {
          let g = document.querySelector(".d-player-copyText");
          g.value = window.location.href, g.select(), document.execCommand("copy"), e.dialogType = "";
        } else
          h == "version" && (e.dialogType = "");
      e.show = !1, Le(window, "keydown", o), Le(window, "click", l);
    };
    return Rn(() => {
      let u = document.querySelector("#refPlayerWrap");
      Le(window, "keydown", o), Le(window, "click", l), Le(u, "contextmenu", c), mt(u, "contextmenu", c);
    }), An(() => {
      let u = document.querySelector("#refPlayerWrap");
      Le(window, "keydown", o), Le(window, "click", l), Le(u, "contextmenu", c);
    }), (u, d) => (te(), se("div", null, [
      ce(ci, { name: "d-fade-in" }, {
        default: ui(() => [
          e.dialogType ? (te(), se("div", fh, [
            U("div", gh, [
              U("h5", mh, [
                Ge(fe(e.dialogTitle) + " ", 1),
                U("i", {
                  onClick: d[0] || (d[0] = (h) => e.dialogType = !1),
                  class: "icon icon-close"
                }, "X")
              ]),
              Re(U("ul", ph, [
                (te(), se(vs, null, Ss(s, (h) => U("li", {
                  class: "d-player-hotkey-panel-item",
                  key: h.key
                }, [
                  U("span", null, fe(h.key), 1),
                  U("span", null, fe(h.label), 1)
                ])), 64))
              ], 512), [
                [be, e.dialogType == "hotkey"]
              ]),
              Re(U("ul", yh, [
                U("li", Eh, [
                  d[4] || (d[4] = U("span", null, "饱和度", -1)),
                  ce($t, {
                    class: "filter-panel-slider",
                    size: "5px",
                    modelValue: i.saturate,
                    "onUpdate:modelValue": d[1] || (d[1] = (h) => i.saturate = h)
                  }, null, 8, ["modelValue"]),
                  U("span", null, fe(Math.round(i.saturate * 255)), 1)
                ]),
                U("li", Th, [
                  d[5] || (d[5] = U("span", null, "亮度", -1)),
                  ce($t, {
                    class: "filter-panel-slider",
                    size: "5px",
                    modelValue: i.brightness,
                    "onUpdate:modelValue": d[2] || (d[2] = (h) => i.brightness = h)
                  }, null, 8, ["modelValue"]),
                  U("span", null, fe(Math.round(i.brightness * 255)), 1)
                ]),
                U("li", vh, [
                  d[6] || (d[6] = U("span", null, "对比度", -1)),
                  ce($t, {
                    class: "filter-panel-slider",
                    size: "5px",
                    modelValue: i.contrast,
                    "onUpdate:modelValue": d[3] || (d[3] = (h) => i.contrast = h)
                  }, null, 8, ["modelValue"]),
                  U("span", null, fe(Math.round(i.contrast * 255)), 1)
                ]),
                U("span", {
                  onClick: n,
                  title: "重置",
                  "aria-label": "重置",
                  class: "d-player-filter-reset"
                }, "重置")
              ], 512), [
                [be, e.dialogType == "filter"]
              ])
            ])
          ])) : pe("", !0)
        ]),
        _: 1
      }),
      e.show ? (te(), se("div", Sh, [
        U("ul", {
          class: "d-player-contextmenu-body",
          style: gt(r.value)
        }, [
          (te(), se(vs, null, Ss(t, (h) => U("li", {
            dplayerKeyCode: h.key,
            key: h.key
          }, fe(h.label), 9, xh)), 64))
        ], 4),
        d[7] || (d[7] = U("input", { class: "d-player-copyText" }, null, -1))
      ])) : pe("", !0)
    ]));
  }
}, Lh = /* @__PURE__ */ ot(Ah, [["__scopeId", "data-v-9b1f1320"]]), Ih = (a) => `${parseInt("0x" + a.slice(1, 3))},${parseInt(
  "0x" + a.slice(3, 5)
)},${parseInt("0x" + a.slice(5, 7))}`, Rh = (a) => a.charAt(0).toUpperCase() + a.slice(1), li = (a) => {
  let e = ~~(a / 3600), t = ~~(a % 3600 / 60), s = ~~(a % 60);
  return e = e < 10 ? "0" + e : e, t = t < 10 ? "0" + t : t, s = s < 10 ? "0" + s : s, `${e}:${t}:${s}`;
}, Ft = "ontouchstart" in window, bh = (a) => {
  let e = document, t = e.webkitIsFullScreen || e.fullscreen;
  return t ? (document.exitFullscreen || e.webkitExitFullScreen).call(e) : (a.requestFullscreen || a.webkitRequestFullScreen).call(a), !t;
}, _h = (a) => {
  document.pictureInPictureElement ? document.exitPictureInPicture().catch((e) => {
    console.log(e, "Video failed to leave Picture-in-Picture mode.");
  }) : a.requestPictureInPicture().catch((e) => {
    console.log(e, "Video failed to enter Picture-in-Picture mode.");
  });
}, xn = [
  "loadstart",
  "play",
  "pause",
  "playing",
  "seeking",
  "seeked",
  "waiting",
  "durationchange",
  "progress",
  "canplay",
  "timeupdate",
  "ended",
  "error",
  "stalled"
], Dh = {
  width: { type: String, default: "800px" },
  height: { type: String, default: "450px" },
  color: { type: String, default: "#409eff" },
  src: { required: !0, type: String, default: "" },
  //视频源
  title: { type: String, default: "" },
  //视频名称
  type: { type: String, default: "video/mp4" },
  //视频类型
  poster: { type: String, default: "" },
  //封面
  webFullScreen: { type: Boolean, default: !1 },
  //网页全屏
  speed: { type: Boolean, default: !0 },
  //是否支持快进快退 //移动端不支持
  currentTime: { type: Number, default: 0 },
  //当前播放时间
  playsinline: { type: Boolean, default: !1 },
  //ios端 点击播放是否全屏
  muted: { type: Boolean, default: !1 },
  //静音
  speedRate: {
    type: Array,
    default: () => ["2.0", "1.5", "1.25", "1.0", "0.75", "0.5"]
  },
  //播放倍速
  autoPlay: { type: Boolean, default: !1 },
  //自动播放
  loop: { type: Boolean, default: !1 },
  //循环播放
  mirror: { type: Boolean, default: !1 },
  //镜像画面
  ligthOff: { type: Boolean, default: !1 },
  //关灯模式
  volume: { type: [String, Number], default: 0.3 },
  //默认音量大小
  control: { type: Boolean, default: !0 },
  //是否显示控制器
  controlBtns: {
    type: Array,
    default: [
      "audioTrack",
      "quality",
      "speedRate",
      "volume",
      "setting",
      "pip",
      "pageFullScreen",
      "fullScreen"
    ]
  },
  //是否显示控制器
  preload: { type: String, default: "auto" },
  //预加载
  settingItems: {
    type: Array,
    default: ["loop", "mirror", "ligthOff"]
  }
}, Ch = {
  class: "d-player-video",
  id: "dPlayerVideo"
}, Ph = ["controls", "webkit-playsinline", "playsinline", "volume", "muted", "loop", "preload", "src", "poster"], kh = { class: "d-player-lightoff" }, wh = {
  key: 1,
  class: "d-player-state"
}, Oh = { class: "d-play-btn" }, Fh = { class: "d-control-progress" }, Mh = { class: "d-tool-bar" }, Nh = {
  key: 0,
  class: "d-tool-item d-tool-time audioTrack-btn"
}, Bh = { class: "total-time" }, Uh = { class: "d-tool-bar" }, $h = {
  key: 0,
  class: "d-tool-item quality-btn"
}, Gh = { class: "d-tool-item-main" }, Vh = {
  class: "speed-main",
  style: { "text-align": "center" }
}, Kh = ["onClick"], Hh = {
  key: 1,
  class: "d-tool-item speedRate-btn"
}, Wh = { class: "d-tool-item-main" }, Yh = { class: "speed-main" }, qh = ["onClick"], jh = {
  key: 2,
  class: "d-tool-item volume-btn"
}, zh = {
  class: "d-tool-item-main volume-box",
  style: { width: "52px" }
}, Xh = { class: "volume-text-size" }, Qh = {
  key: 3,
  class: "d-tool-item setting-btn"
}, Zh = { class: "d-tool-item-main" }, Jh = { class: "speed-main" }, ef = { key: 0 }, tf = { key: 1 }, sf = { key: 2 }, rf = {
  name: "Vue3VideoPlay",
  inheritAttrs: !1
}, nf = /* @__PURE__ */ zt({
  ...rf,
  props: Dh,
  emits: [
    ...xn,
    "mirrorChange",
    "loopChange",
    "lightOffChange",
    "mounted"
  ],
  setup(a, { expose: e, emit: t }) {
    Ci((D) => ({
      "8741cf44": dt(g),
      "170cb801": D.width,
      "9e896368": D.height
    }));
    const s = new Ve({ fragLoadingTimeOut: 2e3 }), i = a, r = t, n = rt(null), o = rt(null), c = rt(null), l = rt(null), u = Ts({
      dVideo: null,
      ...i,
      //如果有自定义配置就会替换默认配置
      muted: i.muted,
      playBtnState: i.autoPlay ? "pause" : "play",
      // 播放按钮状态
      loadStateType: "loadstart",
      // 加载状态类型 //loadstart初始化  waiting缓冲 ended播放结束
      fullScreen: !1,
      handleType: "",
      //当前操作类型
      //当前播放时间
      currentTime: "00:00:00",
      // 当前缓冲进度
      preloadBar: 0,
      //总时长
      totalTime: "00:00:00",
      isVideoHovering: !0,
      speedActive: "1.0",
      //倍速
      playProgress: 0,
      //播放进度
      isMultiplesPlay: !1,
      //是否倍速播放
      longPressTimeout: null,
      progressCursorTime: "00:00:00",
      //进度条光标时间
      qualityLevels: [],
      //分辨率数组
      currentLevel: 0
      //首选分辨率
    }), d = (...D) => (k) => D.reverse().reduce((M, q) => q(M), k), h = xn.reduce((D, k) => {
      let M = `on${Rh(k)}`;
      return D[M] = (q) => {
        u.loadStateType = k, r(k, q);
      }, D;
    }, {});
    h.onCanplay = d(h.onCanplay, () => {
      u.playBtnState != "play" && u.dVideo.play(), u.autoPlay && (u.dVideo.play(), u.playBtnState = "pause");
    }), h.onEnded = d(h.onEnded, () => {
      u.playBtnState = "replay";
    }), h.onDurationchange = (D) => {
      r("durationchange", D), i.currentTime != 0 && (u.dVideo.currentTime = i.currentTime), h.onTimeupdate(D);
    }, h.onProgress = (D) => {
      console.log("缓冲中..."), r("progress", D);
      let k = D.target.duration, M = D.target.buffered, q = D.target.buffered.length && D.target.buffered.end(M - 1);
      u.preloadBar = q / k;
    }, h.onTimeupdate = (D) => {
      r("timeupdate", D);
      let k = D.duration || D.target.duration || 0, M = D.currentTime || D.target.currentTime;
      u.playProgress = M / k, u.currentTime = li(M), u.totalTime = li(k);
    }, h.onError = d(h.onError, () => {
      u.playBtnState = "replay";
    });
    let f = Ja();
    for (let D in f)
      h[D] = f[D];
    const g = Ih(u.color), y = nr(500, () => {
      u.handleType = "";
    }), p = (D) => {
      D.preventDefault(), D.code == "ArrowUp" ? u.volume = u.volume + 0.1 > 1 ? 1 : u.volume + 0.1 : u.volume = u.volume - 0.1 < 0 ? 0 : u.volume - 0.1, u.muted = !1, u.handleType = "volume", y();
    }, E = (D) => {
      i.speed && (u.dVideo.currentTime = u.dVideo.currentTime < 10 ? 0.1 : u.dVideo.currentTime - 10, h.onTimeupdate(u.dVideo), S());
    }, v = (D) => {
      D.preventDefault();
      let k = D.type;
      if (D.key == "ArrowRight") {
        if (S(), k == "keyup") {
          if (clearTimeout(u.longPressTimeout), !i.speed && !u.longPressTimeout)
            return;
          u.isMultiplesPlay ? (u.dVideo.playbackRate = u.speedActive, u.isMultiplesPlay = !1) : (u.dVideo.currentTime = u.dVideo.currentTime + 10, h.onTimeupdate(u.dVideo));
        } else if (k == "keydown") {
          if (!i.speed)
            return;
          u.isMultiplesPlay && clearTimeout(u.longPressTimeout), u.longPressTimeout = setTimeout(() => {
            u.isMultiplesPlay = !0, u.dVideo.playbackRate = 5, u.handleType = "playbackRate", y();
          }, 500);
        }
      }
    }, T = () => {
      Ft || l.value.focus();
    }, S = () => {
      u.loadStateType = "play", u.dVideo.play().catch(() => {
        u.dVideo.load(), setTimeout(() => {
          u.dVideo.play().catch(() => {
            u.playBtnState = "replay", u.loadStateType = "error";
          });
        }, 200);
      }), u.playBtnState = "pause";
    }, x = () => {
      u.dVideo.pause(), u.playBtnState = "play";
    }, _ = (D) => {
      D && D.preventDefault(), u.playBtnState == "play" || u.playBtnState == "replay" ? S() : u.playBtnState == "pause" && x();
    }, A = () => {
      u.muted = !u.muted, u.volume == 0 && (u.volume = 0.05);
    }, b = (D, k) => {
      let M = u.dVideo.duration || u.dVideo.target.duration;
      u.dVideo.currentTime = M * k, u.playBtnState == "play" && (u.dVideo.play(), u.playBtnState = "pause");
    }, C = (D, k) => {
      u.progressCursorTime = li(u.dVideo.duration * k);
    }, L = nr(2500, () => {
      u.isVideoHovering = !1;
    }), w = (D) => {
      u.isVideoHovering = !0, L();
    }, F = (D, k) => {
      s.currentLevel = k, u.currentLevel = k;
    }, X = (D) => {
      u.speedActive = D, u.dVideo.playbackRate = D;
    }, W = (D) => {
      r("mirrorChange", D, u.dVideo);
    }, K = (D) => {
      r("loopChange", D, u.dVideo);
    }, B = (D) => {
      r("lightOffChange", D, u.dVideo);
    }, V = () => {
      _h(u.dVideo);
    }, $ = () => {
      u.fullScreen = bh(n.value);
    }, O = () => {
      u.dVideo.canPlayType(i.type) || console.error(
        "vue3-video-play: Format not supported,Check the [type] parameter"
      ), u.dVideo.canPlayType(i.type) || u.dVideo.canPlayType("application/vnd.apple.mpegurl") ? u.muted = i.autoPlay : Ve.isSupported() && (s.detachMedia(), s.attachMedia(u.dVideo), s.on(Ve.Events.MEDIA_ATTACHED, () => {
        s.loadSource(i.src), s.on("hlsManifestParsed", (D, k) => {
          console.log(k), u.currentLevel = k.level, u.qualityLevels = k.levels || [];
        });
      }), s.on("hlsLevelSwitching", (D, k) => {
        console.log(k), console.log("LEVEL_SWITCHING");
      }), s.on("hlsLevelSwitched", (D, k) => {
        u.currentLevel = k.level, console.log("LEVEL_SWITCHED");
      }));
    };
    return In(
      () => i.src,
      () => {
        Ln(() => {
          O();
        });
      },
      { immediate: !0 }
    ), Rn(() => {
      u.dVideo = o, T(), r("mounted", u.dVideo);
    }), e({
      video: u.dVideo,
      play: S,
      //播放
      pause: x,
      //暂停
      togglePlay: _
      //暂停或播放
    }), (D, k) => (te(), se("div", {
      ref_key: "refPlayerWrap",
      ref: n,
      id: "refPlayerWrap",
      class: ft(["d-player-wrap", {
        "web-full-screen": u.webFullScreen,
        "is-lightoff": u.lightOff,
        "d-player-wrap-hover": u.playBtnState == "play" || u.isVideoHovering
      }]),
      onMousemove: w
    }, [
      U("div", Ch, [
        U("video", eo({
          ref_key: "refdVideo",
          ref: o,
          class: ["d-player-video-main", { "video-mirror": u.mirror }],
          id: "dPlayerVideoMain",
          controls: !!(dt(Ft) && u.speed),
          "webkit-playsinline": i.playsinline,
          playsinline: i.playsinline
        }, dt(h), {
          volume: u.volume,
          muted: u.muted,
          loop: u.loop,
          preload: D.preload,
          width: "100%",
          height: "100%",
          src: i.src,
          poster: i.poster
        }), " 您的浏览器不支持Video标签。 ", 16, Ph)
      ]),
      ce(ci, { name: "d-fade-in" }, {
        default: ui(() => [
          Re(U("div", kh, null, 512), [
            [be, u.lightOff]
          ])
        ]),
        _: 1
      }),
      u.fullScreen ? (te(), to(eh, {
        key: 0,
        title: i.title
      }, null, 8, ["title"])) : pe("", !0),
      dt(Ft) ? pe("", !0) : (te(), se("div", wh, [
        ce(ci, { name: "d-scale-out" }, {
          default: ui(() => [
            Re(U("div", Oh, [
              ce(Ue, {
                icon: "icon-play",
                size: 40
              })
            ], 512), [
              [be, u.playBtnState == "play"]
            ])
          ]),
          _: 1
        }),
        ce(nh, { state: u }, null, 8, ["state"])
      ])),
      dt(Ft) ? pe("", !0) : (te(), se("input", {
        key: 2,
        type: "input",
        readonly: "readonly",
        ref_key: "refInput",
        ref: l,
        onDblclick: $,
        onKeyup: [
          wt($, ["f"]),
          k[0] || (k[0] = wt((M) => u.webFullScreen = !1, ["esc"])),
          v
        ],
        onClick: _,
        onKeydown: [
          wt(_, ["space"]),
          wt(E, ["arrow-left"]),
          wt(p, ["arrow-up", "arrow-down"]),
          v
        ],
        class: "d-player-input",
        maxlength: "0"
      }, null, 544)),
      ce(uh, {
        loadType: u.loadStateType
      }, null, 8, ["loadType"]),
      ce(Lh),
      Qt(D.$slots, "default", {}, void 0, !0),
      !dt(Ft) && u.control ? (te(), se("div", {
        key: 3,
        class: "d-player-control",
        ref_key: "refPlayerControl",
        ref: c
      }, [
        U("div", Fh, [
          ce($t, {
            class: "d-progress-bar",
            onOnMousemove: C,
            onChange: b,
            disabled: !u.speed,
            hoverText: u.progressCursorTime,
            modelValue: u.playProgress,
            "onUpdate:modelValue": k[1] || (k[1] = (M) => u.playProgress = M),
            preload: u.preloadBar
          }, null, 8, ["disabled", "hoverText", "modelValue", "preload"])
        ]),
        U("div", {
          class: "d-control-tool",
          onClick: T
        }, [
          U("div", Mh, [
            U("div", {
              class: "d-tool-item",
              onClick: _
            }, [
              ce(Ue, {
                size: "24",
                icon: `icon-${u.playBtnState}`
              }, null, 8, ["icon"])
            ]),
            i.controlBtns.includes("audioTrack") ? (te(), se("div", Nh, [
              U("span", null, fe(u.currentTime), 1),
              k[8] || (k[8] = U("span", { style: { margin: "0 3px" } }, "/", -1)),
              U("span", Bh, fe(u.totalTime), 1)
            ])) : pe("", !0)
          ]),
          U("div", Uh, [
            Qt(D.$slots, "tool-bar-start", {}, void 0, !0),
            u.qualityLevels.length && i.controlBtns.includes("quality") ? (te(), se("div", $h, [
              Ge(fe(u.qualityLevels.length && (u.qualityLevels[u.currentLevel] || {}).height) + "P ", 1),
              U("div", Gh, [
                U("ul", Vh, [
                  (te(!0), se(vs, null, Ss(u.qualityLevels, (M, q) => (te(), se("li", {
                    class: ft({ "speed-active": u.currentLevel == q }),
                    onClick: (J) => F(M, q),
                    key: M
                  }, fe(M.height) + "P ", 11, Kh))), 128))
                ])
              ])
            ])) : pe("", !0),
            i.controlBtns.includes("speedRate") ? (te(), se("div", Hh, [
              Ge(fe(u.speedActive == "1.0" ? "倍速" : u.speedActive + "x") + " ", 1),
              U("div", Wh, [
                U("ul", Yh, [
                  (te(!0), se(vs, null, Ss(u.speedRate, (M) => (te(), se("li", {
                    class: ft({ "speed-active": u.speedActive == M }),
                    onClick: (q) => X(M),
                    key: M
                  }, fe(M) + "x ", 11, qh))), 128))
                ])
              ])
            ])) : pe("", !0),
            i.controlBtns.includes("volume") ? (te(), se("div", jh, [
              U("div", zh, [
                U("div", {
                  class: ft(["volume-main", { "is-muted": u.muted }])
                }, [
                  U("span", Xh, fe(u.muted ? 0 : ~~(u.volume * 100)) + "%", 1),
                  ce($t, {
                    onChange: k[2] || (k[2] = (M) => u.muted = !1),
                    hover: !1,
                    size: "5px",
                    vertical: !0,
                    modelValue: u.volume,
                    "onUpdate:modelValue": k[3] || (k[3] = (M) => u.volume = M)
                  }, null, 8, ["modelValue"])
                ], 2)
              ]),
              U("span", {
                onClick: A,
                style: { display: "flex" }
              }, [
                ce(Ue, {
                  size: "20",
                  icon: `icon-volume-${u.volume == 0 || u.muted ? "mute" : u.volume > 0.5 ? "up" : "down"}`
                }, null, 8, ["icon"])
              ])
            ])) : pe("", !0),
            i.controlBtns.includes("setting") ? (te(), se("div", Qh, [
              ce(Ue, {
                size: "20",
                class: "rotateHover",
                icon: "icon-settings"
              }),
              U("div", Zh, [
                U("ul", Jh, [
                  i.settingItems.includes("mirror") ? (te(), se("li", ef, [
                    k[9] || (k[9] = Ge(" 镜像画面 ")),
                    ce(oi, {
                      onChange: W,
                      modelValue: u.mirror,
                      "onUpdate:modelValue": k[4] || (k[4] = (M) => u.mirror = M)
                    }, null, 8, ["modelValue"])
                  ])) : pe("", !0),
                  i.settingItems.includes("loop") ? (te(), se("li", tf, [
                    k[10] || (k[10] = Ge(" 循环播放 ")),
                    ce(oi, {
                      onChange: K,
                      modelValue: u.loop,
                      "onUpdate:modelValue": k[5] || (k[5] = (M) => u.loop = M)
                    }, null, 8, ["modelValue"])
                  ])) : pe("", !0),
                  i.settingItems.includes("ligthOff") ? (te(), se("li", sf, [
                    k[11] || (k[11] = Ge(" 关灯模式 ")),
                    ce(oi, {
                      onChange: B,
                      modelValue: u.lightOff,
                      "onUpdate:modelValue": k[6] || (k[6] = (M) => u.lightOff = M)
                    }, null, 8, ["modelValue"])
                  ])) : pe("", !0),
                  Qt(D.$slots, "setting-items", {}, void 0, !0)
                ])
              ])
            ])) : pe("", !0),
            i.controlBtns.includes("pip") ? (te(), se("div", {
              key: 4,
              class: "d-tool-item pip-btn",
              onClick: V
            }, [
              ce(Ue, {
                size: "20",
                icon: "icon-pip"
              }),
              k[12] || (k[12] = U("div", { class: "d-tool-item-main" }, "画中画", -1))
            ])) : pe("", !0),
            i.controlBtns.includes("pageFullScreen") ? (te(), se("div", {
              key: 5,
              class: "d-tool-item pip-btn",
              onClick: k[7] || (k[7] = (M) => u.webFullScreen = !u.webFullScreen)
            }, [
              ce(Ue, {
                size: "20",
                icon: "icon-web-screen"
              }),
              k[13] || (k[13] = U("div", { class: "d-tool-item-main" }, "网页全屏", -1))
            ])) : pe("", !0),
            i.controlBtns.includes("fullScreen") ? (te(), se("div", {
              key: 6,
              class: "d-tool-item fullScreen-btn",
              onClick: $
            }, [
              k[14] || (k[14] = U("div", { class: "d-tool-item-main" }, "全屏", -1)),
              ce(Ue, {
                size: "20",
                icon: "icon-screen"
              })
            ])) : pe("", !0),
            Qt(D.$slots, "tool-bar-end", {}, void 0, !0)
          ])
        ])
      ], 512)) : pe("", !0)
    ], 34));
  }
});
const Di = /* @__PURE__ */ ot(nf, [["__scopeId", "data-v-e3e9b362"]]);
function af(a) {
  a.component(Di.name, Di);
}
Di.install = af;
export {
  Lh as DContextMenu,
  Ue as DICon,
  uh as DLoading,
  eh as DPlayerTop,
  $t as DSlider,
  nh as DStatus,
  oi as DSwitch,
  Di as VideoPlay,
  Di as default,
  af as install
};
