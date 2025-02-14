import { computed as je, openBlock as z, createElementBlock as j, normalizeClass as Ye, normalizeStyle as qe, ref as $e, onUnmounted as Hi, createElementVNode as P, toDisplayString as re, unref as He, defineComponent as gt, withDirectives as Te, createVNode as te, createTextVNode as ke, vShow as xe, useCssVars as Cs, nextTick as Wi, pushScopeId as Nt, popScopeId as Ut, getCurrentInstance as Yr, createCommentVNode as ue, reactive as Dt, withModifiers as qr, watch as Yi, onMounted as qi, Transition as ps, withCtx as ys, Fragment as Ct, renderList as _t, useAttrs as zr, mergeProps as jr, createBlock as Xr, withKeys as rt, renderSlot as pt } from "vue";
function Qr(a, e, t) {
  var s = t || {}, i = s.noTrailing, r = i === void 0 ? !1 : i, n = s.noLeading, o = n === void 0 ? !1 : n, l = s.debounceMode, c = l === void 0 ? void 0 : l, d, u = !1, h = 0;
  function f() {
    d && clearTimeout(d);
  }
  function g(y) {
    var T = y || {}, E = T.upcomingOnly, x = E === void 0 ? !1 : E;
    f(), u = !x;
  }
  function p() {
    for (var y = arguments.length, T = new Array(y), E = 0; E < y; E++)
      T[E] = arguments[E];
    var x = this, A = Date.now() - h;
    if (u)
      return;
    function S() {
      h = Date.now(), e.apply(x, T);
    }
    function k() {
      d = void 0;
    }
    !o && c && !d && S(), f(), c === void 0 && A > a ? o ? (h = Date.now(), r || (d = setTimeout(c ? k : S, a))) : S() : r !== !0 && (d = setTimeout(c ? k : S, c === void 0 ? a - A : a));
  }
  return p.cancel = g, p;
}
function Ys(a, e, t) {
  var s = t || {}, i = s.atBegin, r = i === void 0 ? !1 : i;
  return Qr(a, e, {
    debounceMode: r !== !1
  });
}
function Jr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var zi = { exports: {} };
(function(a, e) {
  (function(t) {
    var s = /^(?=((?:[a-zA-Z0-9+\-.]+:)?))\1(?=((?:\/\/[^\/?#]*)?))\2(?=((?:(?:[^?#\/]*\/)*[^;?#\/]*)?))\3((?:;[^?#]*)?)(\?[^#]*)?(#[^]*)?$/, i = /^(?=([^\/?#]*))\1([^]*)$/, r = /(?:\/|^)\.(?=\/)/g, n = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
      // If opts.alwaysNormalize is true then the path will always be normalized even when it starts with / or //
      // E.g
      // With opts.alwaysNormalize = false (default, spec compliant)
      // http://a.com/b/cd + /e/f/../g => http://a.com/e/f/../g
      // With opts.alwaysNormalize = true (not spec compliant)
      // http://a.com/b/cd + /e/f/../g => http://a.com/e/g
      buildAbsoluteURL: function(l, c, d) {
        if (d = d || {}, l = l.trim(), c = c.trim(), !c) {
          if (!d.alwaysNormalize)
            return l;
          var u = o.parseURL(l);
          if (!u)
            throw new Error("Error trying to parse base URL.");
          return u.path = o.normalizePath(
            u.path
          ), o.buildURLFromParts(u);
        }
        var h = o.parseURL(c);
        if (!h)
          throw new Error("Error trying to parse relative URL.");
        if (h.scheme)
          return d.alwaysNormalize ? (h.path = o.normalizePath(h.path), o.buildURLFromParts(h)) : c;
        var f = o.parseURL(l);
        if (!f)
          throw new Error("Error trying to parse base URL.");
        if (!f.netLoc && f.path && f.path[0] !== "/") {
          var g = i.exec(f.path);
          f.netLoc = g[1], f.path = g[2];
        }
        f.netLoc && !f.path && (f.path = "/");
        var p = {
          // 2c) Otherwise, the embedded URL inherits the scheme of
          // the base URL.
          scheme: f.scheme,
          netLoc: h.netLoc,
          path: null,
          params: h.params,
          query: h.query,
          fragment: h.fragment
        };
        if (!h.netLoc && (p.netLoc = f.netLoc, h.path[0] !== "/"))
          if (!h.path)
            p.path = f.path, h.params || (p.params = f.params, h.query || (p.query = f.query));
          else {
            var y = f.path, T = y.substring(0, y.lastIndexOf("/") + 1) + h.path;
            p.path = o.normalizePath(T);
          }
        return p.path === null && (p.path = d.alwaysNormalize ? o.normalizePath(h.path) : h.path), o.buildURLFromParts(p);
      },
      parseURL: function(l) {
        var c = s.exec(l);
        return c ? {
          scheme: c[1] || "",
          netLoc: c[2] || "",
          path: c[3] || "",
          params: c[4] || "",
          query: c[5] || "",
          fragment: c[6] || ""
        } : null;
      },
      normalizePath: function(l) {
        for (l = l.split("").reverse().join("").replace(r, ""); l.length !== (l = l.replace(n, "")).length; )
          ;
        return l.split("").reverse().join("");
      },
      buildURLFromParts: function(l) {
        return l.scheme + l.netLoc + l.path + l.params + l.query + l.fragment;
      }
    };
    a.exports = o;
  })();
})(zi);
var _s = zi.exports;
function qs(a, e) {
  var t = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(a);
    e && (s = s.filter(function(i) {
      return Object.getOwnPropertyDescriptor(a, i).enumerable;
    })), t.push.apply(t, s);
  }
  return t;
}
function he(a) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qs(Object(t), !0).forEach(function(s) {
      Zr(a, s, t[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(t)) : qs(Object(t)).forEach(function(s) {
      Object.defineProperty(a, s, Object.getOwnPropertyDescriptor(t, s));
    });
  }
  return a;
}
function Zr(a, e, t) {
  return e = tn(e), e in a ? Object.defineProperty(a, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[e] = t, a;
}
function ne() {
  return ne = Object.assign ? Object.assign.bind() : function(a) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (a[s] = t[s]);
    }
    return a;
  }, ne.apply(this, arguments);
}
function en(a, e) {
  if (typeof a != "object" || a === null)
    return a;
  var t = a[Symbol.toPrimitive];
  if (t !== void 0) {
    var s = t.call(a, e || "default");
    if (typeof s != "object")
      return s;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(a);
}
function tn(a) {
  var e = en(a, "string");
  return typeof e == "symbol" ? e : String(e);
}
const U = Number.isFinite || function(a) {
  return typeof a == "number" && isFinite(a);
}, sn = Number.isSafeInteger || function(a) {
  return typeof a == "number" && Math.abs(a) <= rn;
}, rn = Number.MAX_SAFE_INTEGER || 9007199254740991;
let m = /* @__PURE__ */ function(a) {
  return a.MEDIA_ATTACHING = "hlsMediaAttaching", a.MEDIA_ATTACHED = "hlsMediaAttached", a.MEDIA_DETACHING = "hlsMediaDetaching", a.MEDIA_DETACHED = "hlsMediaDetached", a.BUFFER_RESET = "hlsBufferReset", a.BUFFER_CODECS = "hlsBufferCodecs", a.BUFFER_CREATED = "hlsBufferCreated", a.BUFFER_APPENDING = "hlsBufferAppending", a.BUFFER_APPENDED = "hlsBufferAppended", a.BUFFER_EOS = "hlsBufferEos", a.BUFFER_FLUSHING = "hlsBufferFlushing", a.BUFFER_FLUSHED = "hlsBufferFlushed", a.MANIFEST_LOADING = "hlsManifestLoading", a.MANIFEST_LOADED = "hlsManifestLoaded", a.MANIFEST_PARSED = "hlsManifestParsed", a.LEVEL_SWITCHING = "hlsLevelSwitching", a.LEVEL_SWITCHED = "hlsLevelSwitched", a.LEVEL_LOADING = "hlsLevelLoading", a.LEVEL_LOADED = "hlsLevelLoaded", a.LEVEL_UPDATED = "hlsLevelUpdated", a.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", a.LEVELS_UPDATED = "hlsLevelsUpdated", a.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", a.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", a.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", a.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", a.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", a.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", a.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", a.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", a.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", a.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", a.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", a.CUES_PARSED = "hlsCuesParsed", a.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", a.INIT_PTS_FOUND = "hlsInitPtsFound", a.FRAG_LOADING = "hlsFragLoading", a.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", a.FRAG_LOADED = "hlsFragLoaded", a.FRAG_DECRYPTED = "hlsFragDecrypted", a.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", a.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", a.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", a.FRAG_PARSED = "hlsFragParsed", a.FRAG_BUFFERED = "hlsFragBuffered", a.FRAG_CHANGED = "hlsFragChanged", a.FPS_DROP = "hlsFpsDrop", a.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", a.ERROR = "hlsError", a.DESTROYING = "hlsDestroying", a.KEY_LOADING = "hlsKeyLoading", a.KEY_LOADED = "hlsKeyLoaded", a.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", a.BACK_BUFFER_REACHED = "hlsBackBufferReached", a;
}({}), G = /* @__PURE__ */ function(a) {
  return a.NETWORK_ERROR = "networkError", a.MEDIA_ERROR = "mediaError", a.KEY_SYSTEM_ERROR = "keySystemError", a.MUX_ERROR = "muxError", a.OTHER_ERROR = "otherError", a;
}({}), I = /* @__PURE__ */ function(a) {
  return a.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", a.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", a.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", a.KEY_SYSTEM_NO_CONFIGURED_LICENSE = "keySystemNoConfiguredLicense", a.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", a.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED = "keySystemServerCertificateRequestFailed", a.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED = "keySystemServerCertificateUpdateFailed", a.KEY_SYSTEM_SESSION_UPDATE_FAILED = "keySystemSessionUpdateFailed", a.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED = "keySystemStatusOutputRestricted", a.KEY_SYSTEM_STATUS_INTERNAL_ERROR = "keySystemStatusInternalError", a.MANIFEST_LOAD_ERROR = "manifestLoadError", a.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", a.MANIFEST_PARSING_ERROR = "manifestParsingError", a.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", a.LEVEL_EMPTY_ERROR = "levelEmptyError", a.LEVEL_LOAD_ERROR = "levelLoadError", a.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", a.LEVEL_PARSING_ERROR = "levelParsingError", a.LEVEL_SWITCH_ERROR = "levelSwitchError", a.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", a.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", a.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", a.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", a.FRAG_LOAD_ERROR = "fragLoadError", a.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", a.FRAG_DECRYPT_ERROR = "fragDecryptError", a.FRAG_PARSING_ERROR = "fragParsingError", a.FRAG_GAP = "fragGap", a.REMUX_ALLOC_ERROR = "remuxAllocError", a.KEY_LOAD_ERROR = "keyLoadError", a.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", a.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", a.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", a.BUFFER_APPEND_ERROR = "bufferAppendError", a.BUFFER_APPENDING_ERROR = "bufferAppendingError", a.BUFFER_STALLED_ERROR = "bufferStalledError", a.BUFFER_FULL_ERROR = "bufferFullError", a.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", a.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", a.INTERNAL_EXCEPTION = "internalException", a.INTERNAL_ABORTED = "aborted", a.UNKNOWN = "unknown", a;
}({});
const We = function() {
}, Ts = {
  trace: We,
  debug: We,
  log: We,
  warn: We,
  info: We,
  error: We
};
let lt = Ts;
function nn(a) {
  const e = self.console[a];
  return e ? e.bind(self.console, `[${a}] >`) : We;
}
function an(a, ...e) {
  e.forEach(function(t) {
    lt[t] = a[t] ? a[t].bind(a) : nn(t);
  });
}
function on(a, e) {
  if (self.console && a === !0 || typeof a == "object") {
    an(
      a,
      // Remove out from list here to hard-disable a log-level
      // 'trace',
      "debug",
      "log",
      "info",
      "warn",
      "error"
    );
    try {
      lt.log(`Debug logs enabled for "${e}" in hls.js version 1.4.13`);
    } catch {
      lt = Ts;
    }
  } else
    lt = Ts;
}
const v = lt, ln = /^(\d+)x(\d+)$/, zs = /(.+?)=(".*?"|.*?)(?:,|$)/g;
class se {
  constructor(e) {
    typeof e == "string" && (e = se.parseAttrList(e));
    for (const t in e)
      e.hasOwnProperty(t) && (t.substring(0, 2) === "X-" && (this.clientAttrs = this.clientAttrs || [], this.clientAttrs.push(t)), this[t] = e[t]);
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
    } else
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
  bool(e) {
    return this[e] === "YES";
  }
  decimalResolution(e) {
    const t = ln.exec(this[e]);
    if (t !== null)
      return {
        width: parseInt(t[1], 10),
        height: parseInt(t[2], 10)
      };
  }
  static parseAttrList(e) {
    let t;
    const s = {}, i = '"';
    for (zs.lastIndex = 0; (t = zs.exec(e)) !== null; ) {
      let r = t[2];
      r.indexOf(i) === 0 && r.lastIndexOf(i) === r.length - 1 && (r = r.slice(1, -1));
      const n = t[1].trim();
      s[n] = r;
    }
    return s;
  }
}
function cn(a) {
  return a !== "ID" && a !== "CLASS" && a !== "START-DATE" && a !== "DURATION" && a !== "END-DATE" && a !== "END-ON-NEXT";
}
function dn(a) {
  return a === "SCTE35-OUT" || a === "SCTE35-IN";
}
class ji {
  constructor(e, t) {
    if (this.attr = void 0, this._startDate = void 0, this._endDate = void 0, this._badValueForSameId = void 0, t) {
      const s = t.attr;
      for (const i in s)
        if (Object.prototype.hasOwnProperty.call(e, i) && e[i] !== s[i]) {
          v.warn(`DATERANGE tag attribute: "${i}" does not match for tags with ID: "${e.ID}"`), this._badValueForSameId = i;
          break;
        }
      e = ne(new se({}), s, e);
    }
    if (this.attr = e, this._startDate = new Date(e["START-DATE"]), "END-DATE" in this.attr) {
      const s = new Date(this.attr["END-DATE"]);
      U(s.getTime()) && (this._endDate = s);
    }
  }
  get id() {
    return this.attr.ID;
  }
  get class() {
    return this.attr.CLASS;
  }
  get startDate() {
    return this._startDate;
  }
  get endDate() {
    if (this._endDate)
      return this._endDate;
    const e = this.duration;
    return e !== null ? new Date(this._startDate.getTime() + e * 1e3) : null;
  }
  get duration() {
    if ("DURATION" in this.attr) {
      const e = this.attr.decimalFloatingPoint("DURATION");
      if (U(e))
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
  get isValid() {
    return !!this.id && !this._badValueForSameId && U(this.startDate.getTime()) && (this.duration === null || this.duration >= 0) && (!this.endOnNext || !!this.class);
  }
}
class Bt {
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
var X = {
  AUDIO: "audio",
  VIDEO: "video",
  AUDIOVIDEO: "audiovideo"
};
class Xi {
  // baseurl is the URL to the playlist
  // relurl is the portion of the URL that comes from inside the playlist.
  // Holds the types of data this fragment supports
  constructor(e) {
    this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = {
      [X.AUDIO]: null,
      [X.VIDEO]: null,
      [X.AUDIOVIDEO]: null
    }, this.baseurl = e;
  }
  // setByteRange converts a EXT-X-BYTERANGE attribute into a two element array
  setByteRange(e, t) {
    const s = e.split("@", 2), i = [];
    s.length === 1 ? i[0] = t ? t.byteRangeEndOffset : 0 : i[0] = parseInt(s[1]), i[1] = parseInt(s[0]) + i[0], this._byteRange = i;
  }
  get byteRange() {
    return this._byteRange ? this._byteRange : [];
  }
  get byteRangeStartOffset() {
    return this.byteRange[0];
  }
  get byteRangeEndOffset() {
    return this.byteRange[1];
  }
  get url() {
    return !this._url && this.baseurl && this.relurl && (this._url = _s.buildAbsoluteURL(this.baseurl, this.relurl, {
      alwaysNormalize: !0
    })), this._url || "";
  }
  set url(e) {
    this._url = e;
  }
}
class Wt extends Xi {
  // EXTINF has to be present for a m3u8 to be considered valid
  // sn notates the sequence number for a segment, and if set to a string can be 'initSegment'
  // levelkeys are the EXT-X-KEY tags that apply to this segment for decryption
  // core difference from the private field _decryptdata is the lack of the initialized IV
  // _decryptdata will set the IV for this segment based on the segment number in the fragment
  // A string representing the fragment type
  // A reference to the loader. Set while the fragment is loading, and removed afterwards. Used to abort fragment loading
  // A reference to the key loader. Set while the key is loading, and removed afterwards. Used to abort key loading
  // The level/track index to which the fragment belongs
  // The continuity counter of the fragment
  // The starting Presentation Time Stamp (PTS) of the fragment. Set after transmux complete.
  // The ending Presentation Time Stamp (PTS) of the fragment. Set after transmux complete.
  // The starting Decode Time Stamp (DTS) of the fragment. Set after transmux complete.
  // The ending Decode Time Stamp (DTS) of the fragment. Set after transmux complete.
  // The start time of the fragment, as listed in the manifest. Updated after transmux complete.
  // Set by `updateFragPTSDTS` in level-helper
  // The maximum starting Presentation Time Stamp (audio/video PTS) of the fragment. Set after transmux complete.
  // The minimum ending Presentation Time Stamp (audio/video PTS) of the fragment. Set after transmux complete.
  // Load/parse timing information
  // A flag indicating whether the segment was downloaded in order to test bitrate, and was not buffered
  // #EXTINF  segment title
  // The Media Initialization Section for this segment
  // Fragment is the last fragment in the media playlist
  // Fragment is marked by an EXT-X-GAP tag indicating that it does not contain media data and should not be loaded
  constructor(e, t) {
    super(t), this._decryptdata = null, this.rawProgramDateTime = null, this.programDateTime = null, this.tagList = [], this.duration = 0, this.sn = 0, this.levelkeys = void 0, this.type = void 0, this.loader = null, this.keyLoader = null, this.level = -1, this.cc = 0, this.startPTS = void 0, this.endPTS = void 0, this.startDTS = void 0, this.endDTS = void 0, this.start = 0, this.deltaPTS = void 0, this.maxStartPTS = void 0, this.minEndPTS = void 0, this.stats = new Bt(), this.urlId = 0, this.data = void 0, this.bitrateTest = !1, this.title = null, this.initSegment = null, this.endList = void 0, this.gap = void 0, this.type = e;
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
    if (this.programDateTime === null || !U(this.programDateTime))
      return null;
    const e = U(this.duration) ? this.duration : 0;
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
    } = this, l = o[e];
    if (!l) {
      o[e] = {
        startPTS: t,
        endPTS: s,
        startDTS: i,
        endDTS: r,
        partial: n
      };
      return;
    }
    l.startPTS = Math.min(l.startPTS, t), l.endPTS = Math.max(l.endPTS, s), l.startDTS = Math.min(l.startDTS, i), l.endDTS = Math.max(l.endDTS, r);
  }
  clearElementaryStreamInfo() {
    const {
      elementaryStreams: e
    } = this;
    e[X.AUDIO] = null, e[X.VIDEO] = null, e[X.AUDIOVIDEO] = null;
  }
}
class un extends Xi {
  constructor(e, t, s, i, r) {
    super(s), this.fragOffset = 0, this.duration = 0, this.gap = !1, this.independent = !1, this.relurl = void 0, this.fragment = void 0, this.index = void 0, this.stats = new Bt(), this.duration = e.decimalFloatingPoint("DURATION"), this.gap = e.bool("GAP"), this.independent = e.bool("INDEPENDENT"), this.relurl = e.enumeratedString("URI"), this.fragment = t, this.index = i;
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
const hn = 10;
class fn {
  // Manifest reload synchronization
  constructor(e) {
    this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.dateRanges = void 0, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.encryptedFragments = void 0, this.playlistParsingError = null, this.variableList = null, this.hasVariableRefs = !1, this.fragments = [], this.encryptedFragments = [], this.dateRanges = {}, this.url = e;
  }
  reloaded(e) {
    if (!e) {
      this.advanced = !0, this.updated = !0;
      return;
    }
    const t = this.lastPartSn - e.lastPartSn, s = this.lastPartIndex - e.lastPartIndex;
    this.updated = this.endSN !== e.endSN || !!s || !!t || !this.live, this.advanced = this.endSN > e.endSN || t > 0 || t === 0 && s > 0, this.updated || this.advanced ? this.misses = Math.floor(e.misses * 0.6) : this.misses = e.misses + 1, this.availabilityDelay = e.availabilityDelay;
  }
  get hasProgramDateTime() {
    return this.fragments.length ? U(this.fragments[this.fragments.length - 1].programDateTime) : !1;
  }
  get levelTargetDuration() {
    return this.averagetargetduration || this.targetduration || hn;
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
  get age() {
    return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0;
  }
  get lastPartIndex() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].index : -1;
  }
  get lastPartSn() {
    var e;
    return (e = this.partList) != null && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN;
  }
}
function ks(a) {
  return Uint8Array.from(atob(a), (e) => e.charCodeAt(0));
}
function gn(a) {
  const e = Qi(a).subarray(0, 16), t = new Uint8Array(16);
  return t.set(e, 16 - e.length), t;
}
function mn(a) {
  const e = function(s, i, r) {
    const n = s[i];
    s[i] = s[r], s[r] = n;
  };
  e(a, 0, 3), e(a, 1, 2), e(a, 4, 5), e(a, 6, 7);
}
function pn(a) {
  const e = a.split(":");
  let t = null;
  if (e[0] === "data" && e.length === 2) {
    const s = e[1].split(";"), i = s[s.length - 1].split(",");
    if (i.length === 2) {
      const r = i[0] === "base64", n = i[1];
      r ? (s.splice(-1, 1), t = ks(n)) : t = gn(n);
    }
  }
  return t;
}
function Qi(a) {
  return Uint8Array.from(unescape(encodeURIComponent(a)), (e) => e.charCodeAt(0));
}
var ie = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.fps",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "com.widevine.alpha"
}, me = {
  CLEARKEY: "org.w3.clearkey",
  FAIRPLAY: "com.apple.streamingkeydelivery",
  PLAYREADY: "com.microsoft.playready",
  WIDEVINE: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed"
};
function js(a) {
  switch (a) {
    case me.FAIRPLAY:
      return ie.FAIRPLAY;
    case me.PLAYREADY:
      return ie.PLAYREADY;
    case me.WIDEVINE:
      return ie.WIDEVINE;
    case me.CLEARKEY:
      return ie.CLEARKEY;
  }
}
var Ji = {
  WIDEVINE: "edef8ba979d64acea3c827dcd51d21ed"
};
function yn(a) {
  if (a === Ji.WIDEVINE)
    return ie.WIDEVINE;
}
function Xs(a) {
  switch (a) {
    case ie.FAIRPLAY:
      return me.FAIRPLAY;
    case ie.PLAYREADY:
      return me.PLAYREADY;
    case ie.WIDEVINE:
      return me.WIDEVINE;
    case ie.CLEARKEY:
      return me.CLEARKEY;
  }
}
function Yt(a) {
  const {
    drmSystems: e,
    widevineLicenseUrl: t
  } = a, s = e ? [ie.FAIRPLAY, ie.WIDEVINE, ie.PLAYREADY, ie.CLEARKEY].filter((i) => !!e[i]) : [];
  return !s[ie.WIDEVINE] && t && s.push(ie.WIDEVINE), s;
}
const Zi = function() {
  return typeof self < "u" && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null;
}();
function Tn(a, e, t, s) {
  let i;
  switch (a) {
    case ie.FAIRPLAY:
      i = ["cenc", "sinf"];
      break;
    case ie.WIDEVINE:
    case ie.PLAYREADY:
      i = ["cenc"];
      break;
    case ie.CLEARKEY:
      i = ["cenc", "keyids"];
      break;
    default:
      throw new Error(`Unknown key-system: ${a}`);
  }
  return xn(i, e, t, s);
}
function xn(a, e, t, s) {
  return [{
    initDataTypes: a,
    persistentState: s.persistentState || "not-allowed",
    distinctiveIdentifier: s.distinctiveIdentifier || "not-allowed",
    sessionTypes: s.sessionTypes || [s.sessionType || "temporary"],
    audioCapabilities: e.map((r) => ({
      contentType: `audio/mp4; codecs="${r}"`,
      robustness: s.audioRobustness || "",
      encryptionScheme: s.audioEncryptionScheme || null
    })),
    videoCapabilities: t.map((r) => ({
      contentType: `video/mp4; codecs="${r}"`,
      robustness: s.videoRobustness || "",
      encryptionScheme: s.videoEncryptionScheme || null
    }))
  }];
}
function Xe(a, e, t) {
  return Uint8Array.prototype.slice ? a.slice(e, t) : new Uint8Array(Array.prototype.slice.call(a, e, t));
}
const ws = (a, e) => e + 10 <= a.length && a[e] === 73 && a[e + 1] === 68 && a[e + 2] === 51 && a[e + 3] < 255 && a[e + 4] < 255 && a[e + 6] < 128 && a[e + 7] < 128 && a[e + 8] < 128 && a[e + 9] < 128, er = (a, e) => e + 10 <= a.length && a[e] === 51 && a[e + 1] === 68 && a[e + 2] === 73 && a[e + 3] < 255 && a[e + 4] < 255 && a[e + 6] < 128 && a[e + 7] < 128 && a[e + 8] < 128 && a[e + 9] < 128, kt = (a, e) => {
  const t = e;
  let s = 0;
  for (; ws(a, e); ) {
    s += 10;
    const i = $t(a, e + 6);
    s += i, er(a, e + 10) && (s += 10), e += s;
  }
  if (s > 0)
    return a.subarray(t, t + s);
}, $t = (a, e) => {
  let t = 0;
  return t = (a[e] & 127) << 21, t |= (a[e + 1] & 127) << 14, t |= (a[e + 2] & 127) << 7, t |= a[e + 3] & 127, t;
}, En = (a, e) => ws(a, e) && $t(a, e + 6) + 10 <= a.length - e, vn = (a) => {
  const e = sr(a);
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    if (tr(s))
      return bn(s);
  }
}, tr = (a) => a && a.key === "PRIV" && a.info === "com.apple.streaming.transportStreamTimestamp", Sn = (a) => {
  const e = String.fromCharCode(a[0], a[1], a[2], a[3]), t = $t(a, 4), s = 10;
  return {
    type: e,
    size: t,
    data: a.subarray(s, s + t)
  };
}, sr = (a) => {
  let e = 0;
  const t = [];
  for (; ws(a, e); ) {
    const s = $t(a, e + 6);
    e += 10;
    const i = e + s;
    for (; e + 8 < i; ) {
      const r = Sn(a.subarray(e)), n = Ln(r);
      n && t.push(n), e += r.size + 10;
    }
    er(a, e) && (e += 10);
  }
  return t;
}, Ln = (a) => a.type === "PRIV" ? An(a) : a.type[0] === "W" ? Rn(a) : In(a), An = (a) => {
  if (a.size < 2)
    return;
  const e = we(a.data, !0), t = new Uint8Array(a.data.subarray(e.length + 1));
  return {
    key: a.type,
    info: e,
    data: t.buffer
  };
}, In = (a) => {
  if (a.size < 2)
    return;
  if (a.type === "TXXX") {
    let t = 1;
    const s = we(a.data.subarray(t), !0);
    t += s.length + 1;
    const i = we(a.data.subarray(t));
    return {
      key: a.type,
      info: s,
      data: i
    };
  }
  const e = we(a.data.subarray(1));
  return {
    key: a.type,
    data: e
  };
}, Rn = (a) => {
  if (a.type === "WXXX") {
    if (a.size < 2)
      return;
    let t = 1;
    const s = we(a.data.subarray(t), !0);
    t += s.length + 1;
    const i = we(a.data.subarray(t));
    return {
      key: a.type,
      info: s,
      data: i
    };
  }
  const e = we(a.data);
  return {
    key: a.type,
    data: e
  };
}, bn = (a) => {
  if (a.data.byteLength === 8) {
    const e = new Uint8Array(a.data), t = e[3] & 1;
    let s = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
    return s /= 45, t && (s += 4772185884e-2), Math.round(s);
  }
}, we = (a, e = !1) => {
  const t = Dn();
  if (t) {
    const c = t.decode(a);
    if (e) {
      const d = c.indexOf("\0");
      return d !== -1 ? c.substring(0, d) : c;
    }
    return c.replace(/\0/g, "");
  }
  const s = a.length;
  let i, r, n, o = "", l = 0;
  for (; l < s; ) {
    if (i = a[l++], i === 0 && e)
      return o;
    if (i === 0 || i === 3)
      continue;
    switch (i >> 4) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
        o += String.fromCharCode(i);
        break;
      case 12:
      case 13:
        r = a[l++], o += String.fromCharCode((i & 31) << 6 | r & 63);
        break;
      case 14:
        r = a[l++], n = a[l++], o += String.fromCharCode((i & 15) << 12 | (r & 63) << 6 | (n & 63) << 0);
        break;
    }
  }
  return o;
};
let qt;
function Dn() {
  return !qt && typeof self.TextDecoder < "u" && (qt = new self.TextDecoder("utf-8")), qt;
}
const De = {
  hexDump: function(a) {
    let e = "";
    for (let t = 0; t < a.length; t++) {
      let s = a[t].toString(16);
      s.length < 2 && (s = "0" + s), e += s;
    }
    return e;
  }
}, wt = Math.pow(2, 32) - 1, Cn = [].push, ir = {
  video: 1,
  audio: 2,
  id3: 3,
  text: 4
};
function le(a) {
  return String.fromCharCode.apply(null, a);
}
function rr(a, e) {
  const t = a[e] << 8 | a[e + 1];
  return t < 0 ? 65536 + t : t;
}
function K(a, e) {
  const t = nr(a, e);
  return t < 0 ? 4294967296 + t : t;
}
function nr(a, e) {
  return a[e] << 24 | a[e + 1] << 16 | a[e + 2] << 8 | a[e + 3];
}
function zt(a, e, t) {
  a[e] = t >> 24, a[e + 1] = t >> 16 & 255, a[e + 2] = t >> 8 & 255, a[e + 3] = t & 255;
}
function H(a, e) {
  const t = [];
  if (!e.length)
    return t;
  const s = a.byteLength;
  for (let i = 0; i < s; ) {
    const r = K(a, i), n = le(a.subarray(i + 4, i + 8)), o = r > 1 ? i + r : s;
    if (n === e[0])
      if (e.length === 1)
        t.push(a.subarray(i + 8, o));
      else {
        const l = H(a.subarray(i + 8, o), e.slice(1));
        l.length && Cn.apply(t, l);
      }
    i = o;
  }
  return t;
}
function _n(a) {
  const e = [], t = a[0];
  let s = 8;
  const i = K(a, s);
  s += 4;
  const r = 0, n = 0;
  t === 0 ? s += 8 : s += 16, s += 2;
  let o = a.length + n;
  const l = rr(a, s);
  s += 2;
  for (let c = 0; c < l; c++) {
    let d = s;
    const u = K(a, d);
    d += 4;
    const h = u & 2147483647;
    if ((u & 2147483648) >>> 31 === 1)
      return v.warn("SIDX has hierarchical references (not supported)"), null;
    const g = K(a, d);
    d += 4, e.push({
      referenceSize: h,
      subsegmentDuration: g,
      // unscaled
      info: {
        duration: g / i,
        start: o,
        end: o + h - 1
      }
    }), o += h, d += 4, s = d;
  }
  return {
    earliestPresentationTime: r,
    timescale: i,
    version: t,
    referencesCount: l,
    references: e
  };
}
function ar(a) {
  const e = [], t = H(a, ["moov", "trak"]);
  for (let i = 0; i < t.length; i++) {
    const r = t[i], n = H(r, ["tkhd"])[0];
    if (n) {
      let o = n[0], l = o === 0 ? 12 : 20;
      const c = K(n, l), d = H(r, ["mdia", "mdhd"])[0];
      if (d) {
        o = d[0], l = o === 0 ? 12 : 20;
        const u = K(d, l), h = H(r, ["mdia", "hdlr"])[0];
        if (h) {
          const f = le(h.subarray(8, 12)), g = {
            soun: X.AUDIO,
            vide: X.VIDEO
          }[f];
          if (g) {
            const p = H(r, ["mdia", "minf", "stbl", "stsd"])[0];
            let y;
            p && (y = le(p.subarray(12, 16))), e[c] = {
              timescale: u,
              type: g
            }, e[g] = {
              timescale: u,
              id: c,
              codec: y
            };
          }
        }
      }
    }
  }
  return H(a, ["moov", "mvex", "trex"]).forEach((i) => {
    const r = K(i, 4), n = e[r];
    n && (n.default = {
      duration: K(i, 12),
      flags: K(i, 20)
    });
  }), e;
}
function kn(a, e) {
  if (!a || !e)
    return a;
  const t = e.keyId;
  return t && e.isCommonEncryption && H(a, ["moov", "trak"]).forEach((i) => {
    const n = H(i, ["mdia", "minf", "stbl", "stsd"])[0].subarray(8);
    let o = H(n, ["enca"]);
    const l = o.length > 0;
    l || (o = H(n, ["encv"])), o.forEach((c) => {
      const d = l ? c.subarray(28) : c.subarray(78);
      H(d, ["sinf"]).forEach((h) => {
        const f = or(h);
        if (f) {
          const g = f.subarray(8, 24);
          g.some((p) => p !== 0) || (v.log(`[eme] Patching keyId in 'enc${l ? "a" : "v"}>sinf>>tenc' box: ${De.hexDump(g)} -> ${De.hexDump(t)}`), f.set(t, 8));
        }
      });
    });
  }), a;
}
function or(a) {
  const e = H(a, ["schm"])[0];
  if (e) {
    const t = le(e.subarray(4, 8));
    if (t === "cbcs" || t === "cenc")
      return H(a, ["schi", "tenc"])[0];
  }
  return v.error("[eme] missing 'schm' box"), null;
}
function wn(a, e) {
  return H(e, ["moof", "traf"]).reduce((t, s) => {
    const i = H(s, ["tfdt"])[0], r = i[0], n = H(s, ["tfhd"]).reduce((o, l) => {
      const c = K(l, 4), d = a[c];
      if (d) {
        let u = K(i, 4);
        if (r === 1) {
          if (u === wt)
            return v.warn("[mp4-demuxer]: Ignoring assumed invalid signed 64-bit track fragment decode time"), o;
          u *= wt + 1, u += K(i, 8);
        }
        const h = d.timescale || 9e4, f = u / h;
        if (U(f) && (o === null || f < o))
          return f;
      }
      return o;
    }, null);
    return n !== null && U(n) && (t === null || n < t) ? n : t;
  }, null);
}
function Pn(a, e) {
  let t = 0, s = 0, i = 0;
  const r = H(a, ["moof", "traf"]);
  for (let n = 0; n < r.length; n++) {
    const o = r[n], l = H(o, ["tfhd"])[0], c = K(l, 4), d = e[c];
    if (!d)
      continue;
    const u = d.default, h = K(l, 0) | (u == null ? void 0 : u.flags);
    let f = u == null ? void 0 : u.duration;
    h & 8 && (h & 2 ? f = K(l, 12) : f = K(l, 8));
    const g = d.timescale || 9e4, p = H(o, ["trun"]);
    for (let y = 0; y < p.length; y++) {
      if (t = Fn(p[y]), !t && f) {
        const T = K(p[y], 4);
        t = f * T;
      }
      d.type === X.VIDEO ? s += t / g : d.type === X.AUDIO && (i += t / g);
    }
  }
  if (s === 0 && i === 0) {
    let n = 0;
    const o = H(a, ["sidx"]);
    for (let l = 0; l < o.length; l++) {
      const c = _n(o[l]);
      c != null && c.references && (n += c.references.reduce((d, u) => d + u.info.duration || 0, 0));
    }
    return n;
  }
  return s || i;
}
function Fn(a) {
  const e = K(a, 0);
  let t = 8;
  e & 1 && (t += 4), e & 4 && (t += 4);
  let s = 0;
  const i = K(a, 4);
  for (let r = 0; r < i; r++) {
    if (e & 256) {
      const n = K(a, t);
      s += n, t += 4;
    }
    e & 512 && (t += 4), e & 1024 && (t += 4), e & 2048 && (t += 4);
  }
  return s;
}
function On(a, e, t) {
  H(e, ["moof", "traf"]).forEach((s) => {
    H(s, ["tfhd"]).forEach((i) => {
      const r = K(i, 4), n = a[r];
      if (!n)
        return;
      const o = n.timescale || 9e4;
      H(s, ["tfdt"]).forEach((l) => {
        const c = l[0];
        let d = K(l, 4);
        if (c === 0)
          d -= t * o, d = Math.max(d, 0), zt(l, 4, d);
        else {
          d *= Math.pow(2, 32), d += K(l, 8), d -= t * o, d = Math.max(d, 0);
          const u = Math.floor(d / (wt + 1)), h = Math.floor(d % (wt + 1));
          zt(l, 4, u), zt(l, 8, h);
        }
      });
    });
  });
}
function Mn(a) {
  const e = {
    valid: null,
    remainder: null
  }, t = H(a, ["moof"]);
  if (t) {
    if (t.length < 2)
      return e.remainder = a, e;
  } else
    return e;
  const s = t[t.length - 1];
  return e.valid = Xe(a, 0, s.byteOffset - 8), e.remainder = Xe(a, s.byteOffset - 8), e;
}
function Qe(a, e) {
  const t = new Uint8Array(a.length + e.length);
  return t.set(a), t.set(e, a.length), t;
}
function Qs(a, e) {
  const t = [], s = e.samples, i = e.timescale, r = e.id;
  let n = !1;
  return H(s, ["moof"]).map((l) => {
    const c = l.byteOffset - 8;
    H(l, ["traf"]).map((u) => {
      const h = H(u, ["tfdt"]).map((f) => {
        const g = f[0];
        let p = K(f, 4);
        return g === 1 && (p *= Math.pow(2, 32), p += K(f, 8)), p / i;
      })[0];
      return h !== void 0 && (a = h), H(u, ["tfhd"]).map((f) => {
        const g = K(f, 4), p = K(f, 0) & 16777215, y = (p & 1) !== 0, T = (p & 2) !== 0, E = (p & 8) !== 0;
        let x = 0;
        const A = (p & 16) !== 0;
        let S = 0;
        const k = (p & 32) !== 0;
        let b = 8;
        g === r && (y && (b += 8), T && (b += 4), E && (x = K(f, b), b += 4), A && (S = K(f, b), b += 4), k && (b += 4), e.type === "video" && (n = Nn(e.codec)), H(u, ["trun"]).map((C) => {
          const w = C[0], R = K(C, 0) & 16777215, B = (R & 1) !== 0;
          let O = 0;
          const Y = (R & 4) !== 0, oe = (R & 256) !== 0;
          let Q = 0;
          const Z = (R & 512) !== 0;
          let J = 0;
          const M = (R & 1024) !== 0, $ = (R & 2048) !== 0;
          let _ = 0;
          const F = K(C, 4);
          let N = 8;
          B && (O = K(C, N), N += 4), Y && (N += 4);
          let q = O + c;
          for (let pe = 0; pe < F; pe++) {
            if (oe ? (Q = K(C, N), N += 4) : Q = x, Z ? (J = K(C, N), N += 4) : J = S, M && (N += 4), $ && (w === 0 ? _ = K(C, N) : _ = nr(C, N), N += 4), e.type === X.VIDEO) {
              let Ae = 0;
              for (; Ae < J; ) {
                const Ee = K(s, q);
                if (q += 4, Un(n, s[q])) {
                  const Ve = s.subarray(q, q + Ee);
                  lr(Ve, n ? 2 : 1, a + _ / i, t);
                }
                q += Ee, Ae += Ee + 4;
              }
            }
            a += Q / i;
          }
        }));
      });
    });
  }), t;
}
function Nn(a) {
  if (!a)
    return !1;
  const e = a.indexOf("."), t = e < 0 ? a : a.substring(0, e);
  return t === "hvc1" || t === "hev1" || // Dolby Vision
  t === "dvh1" || t === "dvhe";
}
function Un(a, e) {
  if (a) {
    const t = e >> 1 & 63;
    return t === 39 || t === 40;
  } else
    return (e & 31) === 6;
}
function lr(a, e, t, s) {
  const i = cr(a);
  let r = 0;
  r += e;
  let n = 0, o = 0, l = !1, c = 0;
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
    const d = i.length - r;
    if (!l && n === 4 && r < i.length) {
      if (l = !0, i[r++] === 181) {
        const h = rr(i, r);
        if (r += 2, h === 49) {
          const f = K(i, r);
          if (r += 4, f === 1195456820) {
            const g = i[r++];
            if (g === 3) {
              const p = i[r++], y = 31 & p, T = 64 & p, E = T ? 2 + y * 3 : 0, x = new Uint8Array(E);
              if (T) {
                x[0] = p;
                for (let A = 1; A < E; A++)
                  x[A] = i[r++];
              }
              s.push({
                type: g,
                payloadType: n,
                pts: t,
                bytes: x
              });
            }
          }
        }
      }
    } else if (n === 5 && o < d) {
      if (l = !0, o > 16) {
        const u = [];
        for (let g = 0; g < 16; g++) {
          const p = i[r++].toString(16);
          u.push(p.length == 1 ? "0" + p : p), (g === 3 || g === 5 || g === 7 || g === 9) && u.push("-");
        }
        const h = o - 16, f = new Uint8Array(h);
        for (let g = 0; g < h; g++)
          f[g] = i[r++];
        s.push({
          payloadType: n,
          pts: t,
          uuid: u.join(""),
          userData: we(f),
          userDataBytes: f
        });
      }
    } else if (o < d)
      r += o;
    else if (o > d)
      break;
  }
}
function cr(a) {
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
function Bn(a) {
  const e = a[0];
  let t = "", s = "", i = 0, r = 0, n = 0, o = 0, l = 0, c = 0;
  if (e === 0) {
    for (; le(a.subarray(c, c + 1)) !== "\0"; )
      t += le(a.subarray(c, c + 1)), c += 1;
    for (t += le(a.subarray(c, c + 1)), c += 1; le(a.subarray(c, c + 1)) !== "\0"; )
      s += le(a.subarray(c, c + 1)), c += 1;
    s += le(a.subarray(c, c + 1)), c += 1, i = K(a, 12), r = K(a, 16), o = K(a, 20), l = K(a, 24), c = 28;
  } else if (e === 1) {
    c += 4, i = K(a, c), c += 4;
    const u = K(a, c);
    c += 4;
    const h = K(a, c);
    for (c += 4, n = 2 ** 32 * u + h, sn(n) || (n = Number.MAX_SAFE_INTEGER, v.warn("Presentation time exceeds safe integer limit and wrapped to max safe integer in parsing emsg box")), o = K(a, c), c += 4, l = K(a, c), c += 4; le(a.subarray(c, c + 1)) !== "\0"; )
      t += le(a.subarray(c, c + 1)), c += 1;
    for (t += le(a.subarray(c, c + 1)), c += 1; le(a.subarray(c, c + 1)) !== "\0"; )
      s += le(a.subarray(c, c + 1)), c += 1;
    s += le(a.subarray(c, c + 1)), c += 1;
  }
  const d = a.subarray(c, a.byteLength);
  return {
    schemeIdUri: t,
    value: s,
    timeScale: i,
    presentationTime: n,
    presentationTimeDelta: r,
    eventDuration: o,
    id: l,
    payload: d
  };
}
function $n(a, ...e) {
  const t = e.length;
  let s = 8, i = t;
  for (; i--; )
    s += e[i].byteLength;
  const r = new Uint8Array(s);
  for (r[0] = s >> 24 & 255, r[1] = s >> 16 & 255, r[2] = s >> 8 & 255, r[3] = s & 255, r.set(a, 4), i = 0, s = 8; i < t; i++)
    r.set(e[i], s), s += e[i].byteLength;
  return r;
}
function Gn(a, e, t) {
  if (a.byteLength !== 16)
    throw new RangeError("Invalid system id");
  let s, i;
  if (e) {
    s = 1, i = new Uint8Array(e.length * 16);
    for (let o = 0; o < e.length; o++) {
      const l = e[o];
      if (l.byteLength !== 16)
        throw new RangeError("Invalid key");
      i.set(l, o * 16);
    }
  } else
    s = 0, i = new Uint8Array();
  let r;
  s > 0 ? (r = new Uint8Array(4), e.length > 0 && new DataView(r.buffer).setUint32(0, e.length, !1)) : r = new Uint8Array();
  const n = new Uint8Array(4);
  return t && t.byteLength > 0 && new DataView(n.buffer).setUint32(0, t.byteLength, !1), $n(
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
function Vn(a) {
  if (!(a instanceof ArrayBuffer) || a.byteLength < 32)
    return null;
  const e = {
    version: 0,
    systemId: "",
    kids: null,
    data: null
  }, t = new DataView(a), s = t.getUint32(0);
  if (a.byteLength !== s && s > 44 || t.getUint32(4) !== 1886614376 || (e.version = t.getUint32(8) >>> 24, e.version > 1))
    return null;
  e.systemId = De.hexDump(new Uint8Array(a, 12, 16));
  const r = t.getUint32(28);
  if (e.version === 0) {
    if (s - 32 < r)
      return null;
    e.data = new Uint8Array(a, 32, r);
  } else if (e.version === 1) {
    e.kids = [];
    for (let n = 0; n < r; n++)
      e.kids.push(new Uint8Array(a, 32 + n * 16, 16));
  }
  return e;
}
let yt = {};
class ut {
  static clearKeyUriToKeyIdMap() {
    yt = {};
  }
  constructor(e, t, s, i = [1], r = null) {
    this.uri = void 0, this.method = void 0, this.keyFormat = void 0, this.keyFormatVersions = void 0, this.encrypted = void 0, this.isCommonEncryption = void 0, this.iv = null, this.key = null, this.keyId = null, this.pssh = null, this.method = e, this.uri = t, this.keyFormat = s, this.keyFormatVersions = i, this.iv = r, this.encrypted = e ? e !== "NONE" : !1, this.isCommonEncryption = this.encrypted && e !== "AES-128";
  }
  isSupported() {
    if (this.method) {
      if (this.method === "AES-128" || this.method === "NONE")
        return !0;
      if (this.keyFormat === "identity")
        return this.method === "SAMPLE-AES";
      switch (this.keyFormat) {
        case me.FAIRPLAY:
        case me.WIDEVINE:
        case me.PLAYREADY:
        case me.CLEARKEY:
          return ["ISO-23001-7", "SAMPLE-AES", "SAMPLE-AES-CENC", "SAMPLE-AES-CTR"].indexOf(this.method) !== -1;
      }
    }
    return !1;
  }
  getDecryptData(e) {
    if (!this.encrypted || !this.uri)
      return null;
    if (this.method === "AES-128" && this.uri && !this.iv) {
      typeof e != "number" && (this.method === "AES-128" && !this.iv && v.warn(`missing IV for initialization segment with method="${this.method}" - compliance issue`), e = 0);
      const s = Kn(e);
      return new ut(this.method, this.uri, "identity", this.keyFormatVersions, s);
    }
    const t = pn(this.uri);
    if (t)
      switch (this.keyFormat) {
        case me.WIDEVINE:
          this.pssh = t, t.length >= 22 && (this.keyId = t.subarray(t.length - 22, t.length - 6));
          break;
        case me.PLAYREADY: {
          const s = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]);
          this.pssh = Gn(s, null, t);
          const i = new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2), r = String.fromCharCode.apply(null, Array.from(i)), n = r.substring(r.indexOf("<"), r.length), c = new DOMParser().parseFromString(n, "text/xml").getElementsByTagName("KID")[0];
          if (c) {
            const d = c.childNodes[0] ? c.childNodes[0].nodeValue : c.getAttribute("VALUE");
            if (d) {
              const u = ks(d).subarray(0, 16);
              mn(u), this.keyId = u;
            }
          }
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
      let s = yt[this.uri];
      if (!s) {
        const i = Object.keys(yt).length % Number.MAX_SAFE_INTEGER;
        s = new Uint8Array(16), new DataView(s.buffer, 12, 4).setUint32(0, i), yt[this.uri] = s;
      }
      this.keyId = s;
    }
    return this;
  }
}
function Kn(a) {
  const e = new Uint8Array(16);
  for (let t = 12; t < 16; t++)
    e[t] = a >> 8 * (15 - t) & 255;
  return e;
}
const dr = /\{\$([a-zA-Z0-9-_]+)\}/g;
function Js(a) {
  return dr.test(a);
}
function ge(a, e, t) {
  if (a.variableList !== null || a.hasVariableRefs)
    for (let s = t.length; s--; ) {
      const i = t[s], r = e[i];
      r && (e[i] = xs(a, r));
    }
}
function xs(a, e) {
  if (a.variableList !== null || a.hasVariableRefs) {
    const t = a.variableList;
    return e.replace(dr, (s) => {
      const i = s.substring(2, s.length - 1), r = t == null ? void 0 : t[i];
      return r === void 0 ? (a.playlistParsingError || (a.playlistParsingError = new Error(`Missing preceding EXT-X-DEFINE tag for Variable Reference: "${i}"`)), s) : r;
    });
  }
  return e;
}
function Zs(a, e, t) {
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
function Hn(a, e, t) {
  const s = e.IMPORT;
  if (t && s in t) {
    let i = a.variableList;
    i || (a.variableList = i = {}), i[s] = t[s];
  } else
    a.playlistParsingError || (a.playlistParsingError = new Error(`EXT-X-DEFINE IMPORT attribute not found in Multivariant Playlist: "${s}"`));
}
function Gt() {
  if (!(typeof self > "u"))
    return self.MediaSource || self.WebKitMediaSource;
}
const Wn = {
  audio: {
    a3ds: !0,
    "ac-3": !0,
    "ac-4": !0,
    alac: !0,
    alaw: !0,
    dra1: !0,
    "dts+": !0,
    "dts-": !0,
    dtsc: !0,
    dtse: !0,
    dtsh: !0,
    "ec-3": !0,
    enca: !0,
    g719: !0,
    g726: !0,
    m4ae: !0,
    mha1: !0,
    mha2: !0,
    mhm1: !0,
    mhm2: !0,
    mlpa: !0,
    mp4a: !0,
    "raw ": !0,
    Opus: !0,
    opus: !0,
    // browsers expect this to be lowercase despite MP4RA says 'Opus'
    samr: !0,
    sawb: !0,
    sawp: !0,
    sevc: !0,
    sqcp: !0,
    ssmv: !0,
    twos: !0,
    ulaw: !0
  },
  video: {
    avc1: !0,
    avc2: !0,
    avc3: !0,
    avc4: !0,
    avcp: !0,
    av01: !0,
    drac: !0,
    dva1: !0,
    dvav: !0,
    dvh1: !0,
    dvhe: !0,
    encv: !0,
    hev1: !0,
    hvc1: !0,
    mjp2: !0,
    mp4v: !0,
    mvc1: !0,
    mvc2: !0,
    mvc3: !0,
    mvc4: !0,
    resv: !0,
    rv60: !0,
    s263: !0,
    svc1: !0,
    svc2: !0,
    "vc-1": !0,
    vp08: !0,
    vp09: !0
  },
  text: {
    stpp: !0,
    wvtt: !0
  }
}, ei = Gt();
function Yn(a, e) {
  const t = Wn[e];
  return !!t && t[a.slice(0, 4)] === !0;
}
function jt(a, e) {
  var t;
  return (t = ei == null ? void 0 : ei.isTypeSupported(`${e || "video"}/mp4;codecs="${a}"`)) != null ? t : !1;
}
const ti = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-(SESSION-DATA|SESSION-KEY|DEFINE|CONTENT-STEERING|START):([^\r\n]*)[\r\n]+/g, si = /#EXT-X-MEDIA:(.*)/g, qn = /^#EXT(?:INF|-X-TARGETDURATION):/m, ii = new RegExp([
  /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
  // duration (#EXTINF:<duration>,<title>), group 1 => duration, group 2 => title
  /(?!#) *(\S[\S ]*)/.source,
  // segment URI, group 3 => the URI (note newline is not eaten)
  /#EXT-X-BYTERANGE:*(.+)/.source,
  // next segment's byterange, group 4 => range spec (x@y)
  /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
  // next segment's program date/time group 5 => the datetime spec
  /#.*/.source
  // All other non-segment oriented tags will match with all groups empty
].join("|"), "g"), zn = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(DATERANGE|DEFINE|KEY|MAP|PART|PART-INF|PLAYLIST-TYPE|PRELOAD-HINT|RENDITION-REPORT|SERVER-CONTROL|SKIP|START):(.+)/.source, /#EXT-X-(BITRATE|DISCONTINUITY-SEQUENCE|MEDIA-SEQUENCE|TARGETDURATION|VERSION): *(\d+)/.source, /#EXT-X-(DISCONTINUITY|ENDLIST|GAP)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
class be {
  static findGroup(e, t) {
    for (let s = 0; s < e.length; s++) {
      const i = e[s];
      if (i.id === t)
        return i;
    }
  }
  static convertAVC1ToAVCOTI(e) {
    const t = e.split(".");
    if (t.length > 2) {
      let s = t.shift() + ".";
      return s += parseInt(t.shift()).toString(16), s += ("000" + parseInt(t.shift()).toString(16)).slice(-4), s;
    }
    return e;
  }
  static resolve(e, t) {
    return _s.buildAbsoluteURL(t, e, {
      alwaysNormalize: !0
    });
  }
  static isMediaPlaylist(e) {
    return qn.test(e);
  }
  static parseMasterPlaylist(e, t) {
    const s = Js(e), i = {
      contentSteering: null,
      levels: [],
      playlistParsingError: null,
      sessionData: null,
      sessionKeys: null,
      startTimeOffset: null,
      variableList: null,
      hasVariableRefs: s
    }, r = [];
    ti.lastIndex = 0;
    let n;
    for (; (n = ti.exec(e)) != null; )
      if (n[1]) {
        var o;
        const c = new se(n[1]);
        ge(i, c, ["CODECS", "SUPPLEMENTAL-CODECS", "ALLOWED-CPC", "PATHWAY-ID", "STABLE-VARIANT-ID", "AUDIO", "VIDEO", "SUBTITLES", "CLOSED-CAPTIONS", "NAME"]);
        const d = xs(i, n[2]), u = {
          attrs: c,
          bitrate: c.decimalInteger("AVERAGE-BANDWIDTH") || c.decimalInteger("BANDWIDTH"),
          name: c.NAME,
          url: be.resolve(d, t)
        }, h = c.decimalResolution("RESOLUTION");
        h && (u.width = h.width, u.height = h.height), jn((c.CODECS || "").split(/[ ,]+/).filter((f) => f), u), u.videoCodec && u.videoCodec.indexOf("avc1") !== -1 && (u.videoCodec = be.convertAVC1ToAVCOTI(u.videoCodec)), (o = u.unknownCodecs) != null && o.length || r.push(u), i.levels.push(u);
      } else if (n[3]) {
        const c = n[3], d = n[4];
        switch (c) {
          case "SESSION-DATA": {
            const u = new se(d);
            ge(i, u, ["DATA-ID", "LANGUAGE", "VALUE", "URI"]);
            const h = u["DATA-ID"];
            h && (i.sessionData === null && (i.sessionData = {}), i.sessionData[h] = u);
            break;
          }
          case "SESSION-KEY": {
            const u = ri(d, t, i);
            u.encrypted && u.isSupported() ? (i.sessionKeys === null && (i.sessionKeys = []), i.sessionKeys.push(u)) : v.warn(`[Keys] Ignoring invalid EXT-X-SESSION-KEY tag: "${d}"`);
            break;
          }
          case "DEFINE": {
            {
              const u = new se(d);
              ge(i, u, ["NAME", "VALUE", "QUERYPARAM"]), Zs(i, u, t);
            }
            break;
          }
          case "CONTENT-STEERING": {
            const u = new se(d);
            ge(i, u, ["SERVER-URI", "PATHWAY-ID"]), i.contentSteering = {
              uri: be.resolve(u["SERVER-URI"], t),
              pathwayId: u["PATHWAY-ID"] || "."
            };
            break;
          }
          case "START": {
            i.startTimeOffset = ni(d);
            break;
          }
        }
      }
    const l = r.length > 0 && r.length < i.levels.length;
    return i.levels = l ? r : i.levels, i.levels.length === 0 && (i.playlistParsingError = new Error("no levels found in manifest")), i;
  }
  static parseMasterPlaylistMedia(e, t, s) {
    let i;
    const r = {}, n = s.levels, o = {
      AUDIO: n.map((c) => ({
        id: c.attrs.AUDIO,
        audioCodec: c.audioCodec
      })),
      SUBTITLES: n.map((c) => ({
        id: c.attrs.SUBTITLES,
        textCodec: c.textCodec
      })),
      "CLOSED-CAPTIONS": []
    };
    let l = 0;
    for (si.lastIndex = 0; (i = si.exec(e)) !== null; ) {
      const c = new se(i[1]), d = c.TYPE;
      if (d) {
        const u = o[d], h = r[d] || [];
        r[d] = h, ge(s, c, ["URI", "GROUP-ID", "LANGUAGE", "ASSOC-LANGUAGE", "STABLE-RENDITION-ID", "NAME", "INSTREAM-ID", "CHARACTERISTICS", "CHANNELS"]);
        const f = {
          attrs: c,
          bitrate: 0,
          id: l++,
          groupId: c["GROUP-ID"] || "",
          instreamId: c["INSTREAM-ID"],
          name: c.NAME || c.LANGUAGE || "",
          type: d,
          default: c.bool("DEFAULT"),
          autoselect: c.bool("AUTOSELECT"),
          forced: c.bool("FORCED"),
          lang: c.LANGUAGE,
          url: c.URI ? be.resolve(c.URI, t) : ""
        };
        if (u != null && u.length) {
          const g = be.findGroup(u, f.groupId) || u[0];
          ai(f, g, "audioCodec"), ai(f, g, "textCodec");
        }
        h.push(f);
      }
    }
    return r;
  }
  static parseLevelPlaylist(e, t, s, i, r, n) {
    const o = new fn(t), l = o.fragments;
    let c = null, d = 0, u = 0, h = 0, f = 0, g = null, p = new Wt(i, t), y, T, E, x = -1, A = !1;
    for (ii.lastIndex = 0, o.m3u8 = e, o.hasVariableRefs = Js(e); (y = ii.exec(e)) !== null; ) {
      A && (A = !1, p = new Wt(i, t), p.start = h, p.sn = d, p.cc = f, p.level = s, c && (p.initSegment = c, p.rawProgramDateTime = c.rawProgramDateTime, c.rawProgramDateTime = null));
      const C = y[1];
      if (C) {
        p.duration = parseFloat(C);
        const w = (" " + y[2]).slice(1);
        p.title = w || null, p.tagList.push(w ? ["INF", C, w] : ["INF", C]);
      } else if (y[3]) {
        if (U(p.duration)) {
          p.start = h, E && ci(p, E, o), p.sn = d, p.level = s, p.cc = f, p.urlId = r, l.push(p);
          const w = (" " + y[3]).slice(1);
          p.relurl = xs(o, w), oi(p, g), g = p, h += p.duration, d++, u = 0, A = !0;
        }
      } else if (y[4]) {
        const w = (" " + y[4]).slice(1);
        g ? p.setByteRange(w, g) : p.setByteRange(w);
      } else if (y[5])
        p.rawProgramDateTime = (" " + y[5]).slice(1), p.tagList.push(["PROGRAM-DATE-TIME", p.rawProgramDateTime]), x === -1 && (x = l.length);
      else {
        if (y = y[0].match(zn), !y) {
          v.warn("No matches on slow regex match for level playlist!");
          continue;
        }
        for (T = 1; T < y.length && !(typeof y[T] < "u"); T++)
          ;
        const w = (" " + y[T]).slice(1), R = (" " + y[T + 1]).slice(1), B = y[T + 2] ? (" " + y[T + 2]).slice(1) : "";
        switch (w) {
          case "PLAYLIST-TYPE":
            o.type = R.toUpperCase();
            break;
          case "MEDIA-SEQUENCE":
            d = o.startSN = parseInt(R);
            break;
          case "SKIP": {
            const O = new se(R);
            ge(o, O, ["RECENTLY-REMOVED-DATERANGES"]);
            const Y = O.decimalInteger("SKIPPED-SEGMENTS");
            if (U(Y)) {
              o.skippedSegments = Y;
              for (let Q = Y; Q--; )
                l.unshift(null);
              d += Y;
            }
            const oe = O.enumeratedString("RECENTLY-REMOVED-DATERANGES");
            oe && (o.recentlyRemovedDateranges = oe.split("	"));
            break;
          }
          case "TARGETDURATION":
            o.targetduration = Math.max(parseInt(R), 1);
            break;
          case "VERSION":
            o.version = parseInt(R);
            break;
          case "EXTM3U":
            break;
          case "ENDLIST":
            o.live = !1;
            break;
          case "#":
            (R || B) && p.tagList.push(B ? [R, B] : [R]);
            break;
          case "DISCONTINUITY":
            f++, p.tagList.push(["DIS"]);
            break;
          case "GAP":
            p.gap = !0, p.tagList.push([w]);
            break;
          case "BITRATE":
            p.tagList.push([w, R]);
            break;
          case "DATERANGE": {
            const O = new se(R);
            ge(o, O, ["ID", "CLASS", "START-DATE", "END-DATE", "SCTE35-CMD", "SCTE35-OUT", "SCTE35-IN"]), ge(o, O, O.clientAttrs);
            const Y = new ji(O, o.dateRanges[O.ID]);
            Y.isValid || o.skippedSegments ? o.dateRanges[Y.id] = Y : v.warn(`Ignoring invalid DATERANGE tag: "${R}"`), p.tagList.push(["EXT-X-DATERANGE", R]);
            break;
          }
          case "DEFINE": {
            {
              const O = new se(R);
              ge(o, O, ["NAME", "VALUE", "IMPORT", "QUERYPARAM"]), "IMPORT" in O ? Hn(o, O, n) : Zs(o, O, t);
            }
            break;
          }
          case "DISCONTINUITY-SEQUENCE":
            f = parseInt(R);
            break;
          case "KEY": {
            const O = ri(R, t, o);
            if (O.isSupported()) {
              if (O.method === "NONE") {
                E = void 0;
                break;
              }
              E || (E = {}), E[O.keyFormat] && (E = ne({}, E)), E[O.keyFormat] = O;
            } else
              v.warn(`[Keys] Ignoring invalid EXT-X-KEY tag: "${R}"`);
            break;
          }
          case "START":
            o.startTimeOffset = ni(R);
            break;
          case "MAP": {
            const O = new se(R);
            if (ge(o, O, ["BYTERANGE", "URI"]), p.duration) {
              const Y = new Wt(i, t);
              li(Y, O, s, E), c = Y, p.initSegment = c, c.rawProgramDateTime && !p.rawProgramDateTime && (p.rawProgramDateTime = c.rawProgramDateTime);
            } else
              li(p, O, s, E), c = p, A = !0;
            break;
          }
          case "SERVER-CONTROL": {
            const O = new se(R);
            o.canBlockReload = O.bool("CAN-BLOCK-RELOAD"), o.canSkipUntil = O.optionalFloat("CAN-SKIP-UNTIL", 0), o.canSkipDateRanges = o.canSkipUntil > 0 && O.bool("CAN-SKIP-DATERANGES"), o.partHoldBack = O.optionalFloat("PART-HOLD-BACK", 0), o.holdBack = O.optionalFloat("HOLD-BACK", 0);
            break;
          }
          case "PART-INF": {
            const O = new se(R);
            o.partTarget = O.decimalFloatingPoint("PART-TARGET");
            break;
          }
          case "PART": {
            let O = o.partList;
            O || (O = o.partList = []);
            const Y = u > 0 ? O[O.length - 1] : void 0, oe = u++, Q = new se(R);
            ge(o, Q, ["BYTERANGE", "URI"]);
            const Z = new un(Q, p, t, oe, Y);
            O.push(Z), p.duration += Z.duration;
            break;
          }
          case "PRELOAD-HINT": {
            const O = new se(R);
            ge(o, O, ["URI"]), o.preloadHint = O;
            break;
          }
          case "RENDITION-REPORT": {
            const O = new se(R);
            ge(o, O, ["URI"]), o.renditionReports = o.renditionReports || [], o.renditionReports.push(O);
            break;
          }
          default:
            v.warn(`line parsed but not handled: ${y}`);
            break;
        }
      }
    }
    g && !g.relurl ? (l.pop(), h -= g.duration, o.partList && (o.fragmentHint = g)) : o.partList && (oi(p, g), p.cc = f, o.fragmentHint = p, E && ci(p, E, o));
    const S = l.length, k = l[0], b = l[S - 1];
    if (h += o.skippedSegments * o.targetduration, h > 0 && S && b) {
      o.averagetargetduration = h / S;
      const C = b.sn;
      o.endSN = C !== "initSegment" ? C : 0, o.live || (b.endList = !0), k && (o.startCC = k.cc);
    } else
      o.endSN = 0, o.startCC = 0;
    return o.fragmentHint && (h += o.fragmentHint.duration), o.totalduration = h, o.endCC = f, x > 0 && Xn(l, x), o;
  }
}
function ri(a, e, t) {
  var s, i;
  const r = new se(a);
  ge(t, r, ["KEYFORMAT", "KEYFORMATVERSIONS", "URI", "IV", "URI"]);
  const n = (s = r.METHOD) != null ? s : "", o = r.URI, l = r.hexadecimalInteger("IV"), c = r.KEYFORMATVERSIONS, d = (i = r.KEYFORMAT) != null ? i : "identity";
  o && r.IV && !l && v.error(`Invalid IV: ${r.IV}`);
  const u = o ? be.resolve(o, e) : "", h = (c || "1").split("/").map(Number).filter(Number.isFinite);
  return new ut(n, u, d, h, l);
}
function ni(a) {
  const t = new se(a).decimalFloatingPoint("TIME-OFFSET");
  return U(t) ? t : null;
}
function jn(a, e) {
  ["video", "audio", "text"].forEach((t) => {
    const s = a.filter((i) => Yn(i, t));
    if (s.length) {
      const i = s.filter((r) => r.lastIndexOf("avc1", 0) === 0 || r.lastIndexOf("mp4a", 0) === 0);
      e[`${t}Codec`] = i.length > 0 ? i[0] : s[0], a = a.filter((r) => s.indexOf(r) === -1);
    }
  }), e.unknownCodecs = a;
}
function ai(a, e, t) {
  const s = e[t];
  s && (a[t] = s);
}
function Xn(a, e) {
  let t = a[e];
  for (let s = e; s--; ) {
    const i = a[s];
    if (!i)
      return;
    i.programDateTime = t.programDateTime - i.duration * 1e3, t = i;
  }
}
function oi(a, e) {
  a.rawProgramDateTime ? a.programDateTime = Date.parse(a.rawProgramDateTime) : e != null && e.programDateTime && (a.programDateTime = e.endProgramDateTime), U(a.programDateTime) || (a.programDateTime = null, a.rawProgramDateTime = null);
}
function li(a, e, t, s) {
  a.relurl = e.URI, e.BYTERANGE && a.setByteRange(e.BYTERANGE), a.level = t, a.sn = "initSegment", s && (a.levelkeys = s), a.initSegment = null;
}
function ci(a, e, t) {
  a.levelkeys = e;
  const {
    encryptedFragments: s
  } = t;
  (!s.length || s[s.length - 1].levelkeys !== e) && Object.keys(e).some((i) => e[i].isCommonEncryption) && s.push(a);
}
var W = {
  MANIFEST: "manifest",
  LEVEL: "level",
  AUDIO_TRACK: "audioTrack",
  SUBTITLE_TRACK: "subtitleTrack"
}, V = {
  MAIN: "main",
  AUDIO: "audio",
  SUBTITLE: "subtitle"
};
function di(a) {
  const {
    type: e
  } = a;
  switch (e) {
    case W.AUDIO_TRACK:
      return V.AUDIO;
    case W.SUBTITLE_TRACK:
      return V.SUBTITLE;
    default:
      return V.MAIN;
  }
}
function Xt(a, e) {
  let t = a.url;
  return (t === void 0 || t.indexOf("data:") === 0) && (t = e.url), t;
}
class Qn {
  constructor(e) {
    this.hls = void 0, this.loaders = /* @__PURE__ */ Object.create(null), this.variableList = null, this.hls = e, this.registerListeners();
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
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(m.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_LOADING, this.onLevelLoading, this), e.off(m.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(m.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
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
      type: W.MANIFEST,
      url: s,
      deliveryDirectives: null
    });
  }
  onLevelLoading(e, t) {
    const {
      id: s,
      level: i,
      url: r,
      deliveryDirectives: n
    } = t;
    this.load({
      id: s,
      level: i,
      responseType: "text",
      type: W.LEVEL,
      url: r,
      deliveryDirectives: n
    });
  }
  onAudioTrackLoading(e, t) {
    const {
      id: s,
      groupId: i,
      url: r,
      deliveryDirectives: n
    } = t;
    this.load({
      id: s,
      groupId: i,
      level: null,
      responseType: "text",
      type: W.AUDIO_TRACK,
      url: r,
      deliveryDirectives: n
    });
  }
  onSubtitleTrackLoading(e, t) {
    const {
      id: s,
      groupId: i,
      url: r,
      deliveryDirectives: n
    } = t;
    this.load({
      id: s,
      groupId: i,
      level: null,
      responseType: "text",
      type: W.SUBTITLE_TRACK,
      url: r,
      deliveryDirectives: n
    });
  }
  load(e) {
    var t;
    const s = this.hls.config;
    let i = this.getInternalLoader(e);
    if (i) {
      const c = i.context;
      if (c && c.url === e.url) {
        v.trace("[playlist-loader]: playlist request ongoing");
        return;
      }
      v.log(`[playlist-loader]: aborting previous loader for type: ${e.type}`), i.abort();
    }
    let r;
    if (e.type === W.MANIFEST ? r = s.manifestLoadPolicy.default : r = ne({}, s.playlistLoadPolicy.default, {
      timeoutRetry: null,
      errorRetry: null
    }), i = this.createInternalLoader(e), (t = e.deliveryDirectives) != null && t.part) {
      let c;
      if (e.type === W.LEVEL && e.level !== null ? c = this.hls.levels[e.level].details : e.type === W.AUDIO_TRACK && e.id !== null ? c = this.hls.audioTracks[e.id].details : e.type === W.SUBTITLE_TRACK && e.id !== null && (c = this.hls.subtitleTracks[e.id].details), c) {
        const d = c.partTarget, u = c.targetduration;
        if (d && u) {
          const h = Math.max(d * 3, u * 0.8) * 1e3;
          r = ne({}, r, {
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
    }, l = {
      onSuccess: (c, d, u, h) => {
        const f = this.getInternalLoader(u);
        this.resetInternalLoader(u.type);
        const g = c.data;
        if (g.indexOf("#EXTM3U") !== 0) {
          this.handleManifestParsingError(c, u, new Error("no EXTM3U delimiter"), h || null, d);
          return;
        }
        d.parsing.start = performance.now(), be.isMediaPlaylist(g) ? this.handleTrackOrLevelPlaylist(c, d, u, h || null, f) : this.handleMasterPlaylist(c, d, u, h);
      },
      onError: (c, d, u, h) => {
        this.handleNetworkError(d, u, !1, c, h);
      },
      onTimeout: (c, d, u) => {
        this.handleNetworkError(d, u, !0, void 0, c);
      }
    };
    i.load(e, o, l);
  }
  handleMasterPlaylist(e, t, s, i) {
    const r = this.hls, n = e.data, o = Xt(e, s), l = be.parseMasterPlaylist(n, o);
    if (l.playlistParsingError) {
      this.handleManifestParsingError(e, s, l.playlistParsingError, i, t);
      return;
    }
    const {
      contentSteering: c,
      levels: d,
      sessionData: u,
      sessionKeys: h,
      startTimeOffset: f,
      variableList: g
    } = l;
    this.variableList = g;
    const {
      AUDIO: p = [],
      SUBTITLES: y,
      "CLOSED-CAPTIONS": T
    } = be.parseMasterPlaylistMedia(n, o, l);
    p.length && !p.some((x) => !x.url) && d[0].audioCodec && !d[0].attrs.AUDIO && (v.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), p.unshift({
      type: "main",
      name: "main",
      groupId: "main",
      default: !1,
      autoselect: !1,
      forced: !1,
      id: -1,
      attrs: new se({}),
      bitrate: 0,
      url: ""
    })), r.trigger(m.MANIFEST_LOADED, {
      levels: d,
      audioTracks: p,
      subtitles: y,
      captions: T,
      contentSteering: c,
      url: o,
      stats: t,
      networkDetails: i,
      sessionData: u,
      sessionKeys: h,
      startTimeOffset: f,
      variableList: g
    });
  }
  handleTrackOrLevelPlaylist(e, t, s, i, r) {
    const n = this.hls, {
      id: o,
      level: l,
      type: c
    } = s, d = Xt(e, s), u = U(o) ? o : 0, h = U(l) ? l : u, f = di(s), g = be.parseLevelPlaylist(e.data, d, h, f, u, this.variableList);
    if (c === W.MANIFEST) {
      const p = {
        attrs: new se({}),
        bitrate: 0,
        details: g,
        name: "",
        url: d
      };
      n.trigger(m.MANIFEST_LOADED, {
        levels: [p],
        audioTracks: [],
        url: d,
        stats: t,
        networkDetails: i,
        sessionData: null,
        sessionKeys: null,
        contentSteering: null,
        startTimeOffset: null,
        variableList: null
      });
    }
    t.parsing.end = performance.now(), s.levelDetails = g, this.handlePlaylistLoaded(g, e, t, s, i, r);
  }
  handleManifestParsingError(e, t, s, i, r) {
    this.hls.trigger(m.ERROR, {
      type: G.NETWORK_ERROR,
      details: I.MANIFEST_PARSING_ERROR,
      fatal: t.type === W.MANIFEST,
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
    e.type === W.LEVEL ? n += `: ${e.level} id: ${e.id}` : (e.type === W.AUDIO_TRACK || e.type === W.SUBTITLE_TRACK) && (n += ` id: ${e.id} group-id: "${e.groupId}"`);
    const o = new Error(n);
    v.warn(`[playlist-loader]: ${n}`);
    let l = I.UNKNOWN, c = !1;
    const d = this.getInternalLoader(e);
    switch (e.type) {
      case W.MANIFEST:
        l = s ? I.MANIFEST_LOAD_TIMEOUT : I.MANIFEST_LOAD_ERROR, c = !0;
        break;
      case W.LEVEL:
        l = s ? I.LEVEL_LOAD_TIMEOUT : I.LEVEL_LOAD_ERROR, c = !1;
        break;
      case W.AUDIO_TRACK:
        l = s ? I.AUDIO_TRACK_LOAD_TIMEOUT : I.AUDIO_TRACK_LOAD_ERROR, c = !1;
        break;
      case W.SUBTITLE_TRACK:
        l = s ? I.SUBTITLE_TRACK_LOAD_TIMEOUT : I.SUBTITLE_LOAD_ERROR, c = !1;
        break;
    }
    d && this.resetInternalLoader(e.type);
    const u = {
      type: G.NETWORK_ERROR,
      details: l,
      fatal: c,
      url: e.url,
      loader: d,
      context: e,
      error: o,
      networkDetails: t,
      stats: r
    };
    if (i) {
      const h = (t == null ? void 0 : t.url) || e.url;
      u.response = he({
        url: h,
        data: void 0
      }, i);
    }
    this.hls.trigger(m.ERROR, u);
  }
  handlePlaylistLoaded(e, t, s, i, r, n) {
    const o = this.hls, {
      type: l,
      level: c,
      id: d,
      groupId: u,
      deliveryDirectives: h
    } = i, f = Xt(t, i), g = di(i), p = typeof i.level == "number" && g === V.MAIN ? c : void 0;
    if (!e.fragments.length) {
      const T = new Error("No Segments found in Playlist");
      o.trigger(m.ERROR, {
        type: G.NETWORK_ERROR,
        details: I.LEVEL_EMPTY_ERROR,
        fatal: !1,
        url: f,
        error: T,
        reason: T.message,
        response: t,
        context: i,
        level: p,
        parent: g,
        networkDetails: r,
        stats: s
      });
      return;
    }
    e.targetduration || (e.playlistParsingError = new Error("Missing Target Duration"));
    const y = e.playlistParsingError;
    if (y) {
      o.trigger(m.ERROR, {
        type: G.NETWORK_ERROR,
        details: I.LEVEL_PARSING_ERROR,
        fatal: !1,
        url: f,
        error: y,
        reason: y.message,
        response: t,
        context: i,
        level: p,
        parent: g,
        networkDetails: r,
        stats: s
      });
      return;
    }
    switch (e.live && n && (n.getCacheAge && (e.ageHeader = n.getCacheAge() || 0), (!n.getCacheAge || isNaN(e.ageHeader)) && (e.ageHeader = 0)), l) {
      case W.MANIFEST:
      case W.LEVEL:
        o.trigger(m.LEVEL_LOADED, {
          details: e,
          level: p || 0,
          id: d || 0,
          stats: s,
          networkDetails: r,
          deliveryDirectives: h
        });
        break;
      case W.AUDIO_TRACK:
        o.trigger(m.AUDIO_TRACK_LOADED, {
          details: e,
          id: d || 0,
          groupId: u || "",
          stats: s,
          networkDetails: r,
          deliveryDirectives: h
        });
        break;
      case W.SUBTITLE_TRACK:
        o.trigger(m.SUBTITLE_TRACK_LOADED, {
          details: e,
          id: d || 0,
          groupId: u || "",
          stats: s,
          networkDetails: r,
          deliveryDirectives: h
        });
        break;
    }
  }
}
function ur(a, e) {
  let t;
  try {
    t = new Event("addtrack");
  } catch {
    t = document.createEvent("Event"), t.initEvent("addtrack", !1, !1);
  }
  t.track = a, e.dispatchEvent(t);
}
function hr(a, e) {
  const t = a.mode;
  if (t === "disabled" && (a.mode = "hidden"), a.cues && !a.cues.getCueById(e.id))
    try {
      if (a.addCue(e), !a.cues.getCueById(e.id))
        throw new Error(`addCue is failed for: ${e}`);
    } catch (s) {
      v.debug(`[texttrack-utils]: ${s}`);
      try {
        const i = new self.TextTrackCue(e.startTime, e.endTime, e.text);
        i.id = e.id, a.addCue(i);
      } catch (i) {
        v.debug(`[texttrack-utils]: Legacy TextTrackCue fallback failed: ${i}`);
      }
    }
  t === "disabled" && (a.mode = t);
}
function st(a) {
  const e = a.mode;
  if (e === "disabled" && (a.mode = "hidden"), a.cues)
    for (let t = a.cues.length; t--; )
      a.removeCue(a.cues[t]);
  e === "disabled" && (a.mode = e);
}
function Es(a, e, t, s) {
  const i = a.mode;
  if (i === "disabled" && (a.mode = "hidden"), a.cues && a.cues.length > 0) {
    const r = Zn(a.cues, e, t);
    for (let n = 0; n < r.length; n++)
      (!s || s(r[n])) && a.removeCue(r[n]);
  }
  i === "disabled" && (a.mode = i);
}
function Jn(a, e) {
  if (e < a[0].startTime)
    return 0;
  const t = a.length - 1;
  if (e > a[t].endTime)
    return -1;
  let s = 0, i = t;
  for (; s <= i; ) {
    const r = Math.floor((i + s) / 2);
    if (e < a[r].startTime)
      i = r - 1;
    else if (e > a[r].startTime && s < t)
      s = r + 1;
    else
      return r;
  }
  return a[s].startTime - e < e - a[i].startTime ? s : i;
}
function Zn(a, e, t) {
  const s = [], i = Jn(a, e);
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
var Re = {
  audioId3: "org.id3",
  dateRange: "com.apple.quicktime.HLS",
  emsg: "https://aomedia.org/emsg/ID3"
};
const ea = 0.25;
function vs() {
  if (!(typeof self > "u"))
    return self.VTTCue || self.TextTrackCue;
}
function ui(a, e, t, s, i) {
  let r = new a(e, t, "");
  try {
    r.value = s, i && (r.type = i);
  } catch {
    r = new a(e, t, JSON.stringify(i ? he({
      type: i
    }, s) : s));
  }
  return r;
}
const Tt = (() => {
  const a = vs();
  try {
    a && new a(0, Number.POSITIVE_INFINITY, "");
  } catch {
    return Number.MAX_VALUE;
  }
  return Number.POSITIVE_INFINITY;
})();
function Qt(a, e) {
  return a.getTime() / 1e3 - e;
}
function ta(a) {
  return Uint8Array.from(a.replace(/^0x/, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")).buffer;
}
class sa {
  constructor(e) {
    this.hls = void 0, this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = e, this._registerListeners();
  }
  destroy() {
    this._unregisterListeners(), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {}, this.hls = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this);
  }
  // Add ID3 metatadata text track.
  onMediaAttached(e, t) {
    this.media = t.media;
  }
  onMediaDetaching() {
    this.id3Track && (st(this.id3Track), this.id3Track = null, this.media = null, this.dateRangeCuesAppended = {});
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
          return ur(s, this.media), s;
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
    const n = vs();
    if (n)
      for (let o = 0; o < r.length; o++) {
        const l = r[o].type;
        if (l === Re.emsg && !s || !i)
          continue;
        const c = sr(r[o].data);
        if (c) {
          const d = r[o].pts;
          let u = d + r[o].duration;
          u > Tt && (u = Tt), u - d <= 0 && (u = d + ea);
          for (let f = 0; f < c.length; f++) {
            const g = c[f];
            if (!tr(g)) {
              this.updateId3CueEnds(d, l);
              const p = ui(n, d, u, g, l);
              p && this.id3Track.addCue(p);
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
        n.type === t && n.startTime < e && n.endTime === Tt && (n.endTime = e);
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
        enableID3MetadataCues: l
      }
    } = n;
    if (r && (o || l)) {
      let c;
      i === "audio" ? c = (d) => d.type === Re.audioId3 && l : i === "video" ? c = (d) => d.type === Re.emsg && o : c = (d) => d.type === Re.audioId3 && l || d.type === Re.emsg && o, Es(r, t, s, c);
    }
  }
  onLevelUpdated(e, {
    details: t
  }) {
    if (!this.media || !t.hasProgramDateTime || !this.hls.config.enableDateRangeMetadataCues)
      return;
    const {
      dateRangeCuesAppended: s,
      id3Track: i
    } = this, {
      dateRanges: r
    } = t, n = Object.keys(r);
    if (i) {
      const d = Object.keys(s).filter((u) => !n.includes(u));
      for (let u = d.length; u--; ) {
        const h = d[u];
        Object.keys(s[h].cues).forEach((f) => {
          i.removeCue(s[h].cues[f]);
        }), delete s[h];
      }
    }
    const o = t.fragments[t.fragments.length - 1];
    if (n.length === 0 || !U(o == null ? void 0 : o.programDateTime))
      return;
    this.id3Track || (this.id3Track = this.createTrack(this.media));
    const l = o.programDateTime / 1e3 - o.start, c = vs();
    for (let d = 0; d < n.length; d++) {
      const u = n[d], h = r[u], f = s[u], g = (f == null ? void 0 : f.cues) || {};
      let p = (f == null ? void 0 : f.durationKnown) || !1;
      const y = Qt(h.startDate, l);
      let T = Tt;
      const E = h.endDate;
      if (E)
        T = Qt(E, l), p = !0;
      else if (h.endOnNext && !p) {
        const A = n.reduce((S, k) => {
          const b = r[k];
          return b.class === h.class && b.id !== k && b.startDate > h.startDate && S.push(b), S;
        }, []).sort((S, k) => S.startDate.getTime() - k.startDate.getTime())[0];
        A && (T = Qt(A.startDate, l), p = !0);
      }
      const x = Object.keys(h.attr);
      for (let A = 0; A < x.length; A++) {
        const S = x[A];
        if (!cn(S))
          continue;
        const k = g[S];
        if (k)
          p && !f.durationKnown && (k.endTime = T);
        else if (c) {
          let b = h.attr[S];
          dn(S) && (b = ta(b));
          const C = ui(c, y, T, {
            key: S,
            data: b
          }, Re.dateRange);
          C && (C.id = u, this.id3Track.addCue(C), g[S] = C);
        }
      }
      s[u] = {
        cues: g,
        dateRange: h,
        durationKnown: p
      };
    }
  }
}
class ia {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = () => this.timeupdate(), this.hls = e, this.config = e.config, this.registerListeners();
  }
  get latency() {
    return this._latency || 0;
  }
  get maxLatency() {
    const {
      config: e,
      levelDetails: t
    } = this;
    return e.liveMaxLatencyDuration !== void 0 ? e.liveMaxLatencyDuration : t ? e.liveMaxLatencyDurationCount * t.targetduration : 0;
  }
  get targetLatency() {
    const {
      levelDetails: e
    } = this;
    if (e === null)
      return null;
    const {
      holdBack: t,
      partHoldBack: s,
      targetduration: i
    } = e, {
      liveSyncDuration: r,
      liveSyncDurationCount: n,
      lowLatencyMode: o
    } = this.config, l = this.hls.userConfig;
    let c = o && s || t;
    (l.liveSyncDuration || l.liveSyncDurationCount || c === 0) && (c = r !== void 0 ? r : n * i);
    const d = i, u = 1;
    return c + Math.min(this.stallCount * u, d);
  }
  get liveSyncPosition() {
    const e = this.estimateLiveEdge(), t = this.targetLatency, s = this.levelDetails;
    if (e === null || t === null || s === null)
      return null;
    const i = s.edge, r = e - t - this.edgeStalled, n = i - s.totalduration, o = i - (this.config.lowLatencyMode && s.partTarget || s.targetduration);
    return Math.min(Math.max(n, r), o);
  }
  get drift() {
    const {
      levelDetails: e
    } = this;
    return e === null ? 1 : e.drift;
  }
  get edgeStalled() {
    const {
      levelDetails: e
    } = this;
    if (e === null)
      return 0;
    const t = (this.config.lowLatencyMode && e.partTarget || e.targetduration) * 3;
    return Math.max(e.age - t, 0);
  }
  get forwardBufferLength() {
    const {
      media: e,
      levelDetails: t
    } = this;
    if (!e || !t)
      return 0;
    const s = e.buffered.length;
    return (s ? e.buffered.end(s - 1) : t.edge) - this.currentTime;
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null;
  }
  registerListeners() {
    this.hls.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(m.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    this.hls.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.off(m.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.off(m.ERROR, this.onError, this);
  }
  onMediaAttached(e, t) {
    this.media = t.media, this.media.addEventListener("timeupdate", this.timeupdateHandler);
  }
  onMediaDetaching() {
    this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null);
  }
  onManifestLoading() {
    this.levelDetails = null, this._latency = null, this.stallCount = 0;
  }
  onLevelUpdated(e, {
    details: t
  }) {
    this.levelDetails = t, t.advanced && this.timeupdate(), !t.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler);
  }
  onError(e, t) {
    var s;
    t.details === I.BUFFER_STALLED_ERROR && (this.stallCount++, (s = this.levelDetails) != null && s.live && v.warn("[playback-rate-controller]: Stall detected, adjusting target latency"));
  }
  timeupdate() {
    const {
      media: e,
      levelDetails: t
    } = this;
    if (!e || !t)
      return;
    this.currentTime = e.currentTime;
    const s = this.computeLatency();
    if (s === null)
      return;
    this._latency = s;
    const {
      lowLatencyMode: i,
      maxLiveSyncPlaybackRate: r
    } = this.config;
    if (!i || r === 1)
      return;
    const n = this.targetLatency;
    if (n === null)
      return;
    const o = s - n, l = Math.min(this.maxLatency, n + t.targetduration), c = o < l;
    if (t.live && c && o > 0.05 && this.forwardBufferLength > 1) {
      const d = Math.min(2, Math.max(1, r)), u = Math.round(2 / (1 + Math.exp(-0.75 * o - this.edgeStalled)) * 20) / 20;
      e.playbackRate = Math.min(d, Math.max(1, u));
    } else
      e.playbackRate !== 1 && e.playbackRate !== 0 && (e.playbackRate = 1);
  }
  estimateLiveEdge() {
    const {
      levelDetails: e
    } = this;
    return e === null ? null : e.edge + e.age;
  }
  computeLatency() {
    const e = this.estimateLiveEdge();
    return e === null ? null : e - this.currentTime;
  }
}
const Ss = ["NONE", "TYPE-0", "TYPE-1", null];
var ct = {
  No: "",
  Yes: "YES",
  v2: "v2"
};
function ra(a, e) {
  const {
    canSkipUntil: t,
    canSkipDateRanges: s,
    endSN: i
  } = a, r = e !== void 0 ? e - i : 0;
  return t && r < t ? s ? ct.v2 : ct.Yes : ct.No;
}
class hi {
  constructor(e, t, s) {
    this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = s;
  }
  addDirectives(e) {
    const t = new self.URL(e);
    return this.msn !== void 0 && t.searchParams.set("_HLS_msn", this.msn.toString()), this.part !== void 0 && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.href;
  }
}
class ht {
  constructor(e) {
    this._attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [e.url], this._attrs = [e.attrs], this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.unknownCodecs = e.unknownCodecs, this.codecSet = [e.videoCodec, e.audioCodec].filter((t) => t).join(",").replace(/\.[^.,]+/g, "");
  }
  get maxBitrate() {
    return Math.max(this.realBitrate, this.bitrate);
  }
  get attrs() {
    return this._attrs[this._urlId];
  }
  get pathwayId() {
    return this.attrs["PATHWAY-ID"] || ".";
  }
  get uri() {
    return this.url[this._urlId] || "";
  }
  get urlId() {
    return this._urlId;
  }
  set urlId(e) {
    const t = e % this.url.length;
    this._urlId !== t && (this.fragmentError = 0, this.loadError = 0, this.details = void 0, this._urlId = t);
  }
  get audioGroupId() {
    var e;
    return (e = this.audioGroupIds) == null ? void 0 : e[this.urlId];
  }
  get textGroupId() {
    var e;
    return (e = this.textGroupIds) == null ? void 0 : e[this.urlId];
  }
  addFallback(e) {
    this.url.push(e.url), this._attrs.push(e.attrs);
  }
}
function Jt(a, e) {
  const t = e.startPTS;
  if (U(t)) {
    let s = 0, i;
    e.sn > a.sn ? (s = t - a.start, i = a) : (s = a.start - t, i = e), i.duration !== s && (i.duration = s);
  } else
    e.sn > a.sn ? a.cc === e.cc && a.minEndPTS ? e.start = a.start + (a.minEndPTS - a.start) : e.start = a.start + a.duration : e.start = Math.max(a.start - e.duration, 0);
}
function fr(a, e, t, s, i, r) {
  s - t <= 0 && (v.warn("Fragment should have a positive duration", e), s = t + e.duration, r = i + e.duration);
  let o = t, l = s;
  const c = e.startPTS, d = e.endPTS;
  if (U(c)) {
    const y = Math.abs(c - t);
    U(e.deltaPTS) ? e.deltaPTS = Math.max(y, e.deltaPTS) : e.deltaPTS = y, o = Math.max(t, c), t = Math.min(t, c), i = Math.min(i, e.startDTS), l = Math.min(s, d), s = Math.max(s, d), r = Math.max(r, e.endDTS);
  }
  const u = t - e.start;
  e.start !== 0 && (e.start = t), e.duration = s - e.start, e.startPTS = t, e.maxStartPTS = o, e.startDTS = i, e.endPTS = s, e.minEndPTS = l, e.endDTS = r;
  const h = e.sn;
  if (!a || h < a.startSN || h > a.endSN)
    return 0;
  let f;
  const g = h - a.startSN, p = a.fragments;
  for (p[g] = e, f = g; f > 0; f--)
    Jt(p[f], p[f - 1]);
  for (f = g; f < p.length - 1; f++)
    Jt(p[f], p[f + 1]);
  return a.fragmentHint && Jt(p[p.length - 1], a.fragmentHint), a.PTSKnown = a.alignedSliding = !0, u;
}
function na(a, e) {
  let t = null;
  const s = a.fragments;
  for (let l = s.length - 1; l >= 0; l--) {
    const c = s[l].initSegment;
    if (c) {
      t = c;
      break;
    }
  }
  a.fragmentHint && delete a.fragmentHint.endPTS;
  let i = 0, r;
  if (la(a, e, (l, c) => {
    l.relurl && (i = l.cc - c.cc), U(l.startPTS) && U(l.endPTS) && (c.start = c.startPTS = l.startPTS, c.startDTS = l.startDTS, c.maxStartPTS = l.maxStartPTS, c.endPTS = l.endPTS, c.endDTS = l.endDTS, c.minEndPTS = l.minEndPTS, c.duration = l.endPTS - l.startPTS, c.duration && (r = c), e.PTSKnown = e.alignedSliding = !0), c.elementaryStreams = l.elementaryStreams, c.loader = l.loader, c.stats = l.stats, c.urlId = l.urlId, l.initSegment && (c.initSegment = l.initSegment, t = l.initSegment);
  }), t && (e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments).forEach((c) => {
    var d;
    (!c.initSegment || c.initSegment.relurl === ((d = t) == null ? void 0 : d.relurl)) && (c.initSegment = t);
  }), e.skippedSegments)
    if (e.deltaUpdateFailed = e.fragments.some((l) => !l), e.deltaUpdateFailed) {
      v.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
      for (let l = e.skippedSegments; l--; )
        e.fragments.shift();
      e.startSN = e.fragments[0].sn, e.startCC = e.fragments[0].cc;
    } else
      e.canSkipDateRanges && (e.dateRanges = aa(a.dateRanges, e.dateRanges, e.recentlyRemovedDateranges));
  const n = e.fragments;
  if (i) {
    v.warn("discontinuity sliding from playlist, take drift into account");
    for (let l = 0; l < n.length; l++)
      n[l].cc += i;
  }
  e.skippedSegments && (e.startCC = e.fragments[0].cc), oa(a.partList, e.partList, (l, c) => {
    c.elementaryStreams = l.elementaryStreams, c.stats = l.stats;
  }), r ? fr(e, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : gr(a, e), n.length && (e.totalduration = e.edge - n[0].start), e.driftStartTime = a.driftStartTime, e.driftStart = a.driftStart;
  const o = e.advancedDateTime;
  if (e.advanced && o) {
    const l = e.edge;
    e.driftStart || (e.driftStartTime = o, e.driftStart = l), e.driftEndTime = o, e.driftEnd = l;
  } else
    e.driftEndTime = a.driftEndTime, e.driftEnd = a.driftEnd, e.advancedDateTime = a.advancedDateTime;
}
function aa(a, e, t) {
  const s = ne({}, a);
  return t && t.forEach((i) => {
    delete s[i];
  }), Object.keys(e).forEach((i) => {
    const r = new ji(e[i].attr, s[i]);
    r.isValid ? s[i] = r : v.warn(`Ignoring invalid Playlist Delta Update DATERANGE tag: "${JSON.stringify(e[i].attr)}"`);
  }), s;
}
function oa(a, e, t) {
  if (a && e) {
    let s = 0;
    for (let i = 0, r = a.length; i <= r; i++) {
      const n = a[i], o = e[i + s];
      n && o && n.index === o.index && n.fragment.sn === o.fragment.sn ? t(n, o) : s--;
    }
  }
}
function la(a, e, t) {
  const s = e.skippedSegments, i = Math.max(a.startSN, e.startSN) - e.startSN, r = (a.fragmentHint ? 1 : 0) + (s ? e.endSN : Math.min(a.endSN, e.endSN)) - e.startSN, n = e.startSN - a.startSN, o = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, l = a.fragmentHint ? a.fragments.concat(a.fragmentHint) : a.fragments;
  for (let c = i; c <= r; c++) {
    const d = l[n + c];
    let u = o[c];
    s && !u && c < s && (u = e.fragments[c] = d), d && u && t(d, u);
  }
}
function gr(a, e) {
  const t = e.startSN + e.skippedSegments - a.startSN, s = a.fragments;
  t < 0 || t >= s.length || Ls(e, s[t].start);
}
function Ls(a, e) {
  if (e) {
    const t = a.fragments;
    for (let s = a.skippedSegments; s < t.length; s++)
      t[s].start += e;
    a.fragmentHint && (a.fragmentHint.start += e);
  }
}
function ca(a, e = 1 / 0) {
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
function da(a, e, t) {
  if (!(a != null && a.details))
    return null;
  const s = a.details;
  let i = s.fragments[e - s.startSN];
  return i || (i = s.fragmentHint, i && i.sn === e) ? i : e < s.startSN && t && t.sn === e ? t : null;
}
function fi(a, e, t) {
  var s;
  return a != null && a.details ? mr((s = a.details) == null ? void 0 : s.partList, e, t) : null;
}
function mr(a, e, t) {
  if (a)
    for (let s = a.length; s--; ) {
      const i = a[s];
      if (i.index === t && i.fragment.sn === e)
        return i;
    }
  return null;
}
function Pt(a) {
  switch (a.details) {
    case I.FRAG_LOAD_TIMEOUT:
    case I.KEY_LOAD_TIMEOUT:
    case I.LEVEL_LOAD_TIMEOUT:
    case I.MANIFEST_LOAD_TIMEOUT:
      return !0;
  }
  return !1;
}
function gi(a, e) {
  const t = Pt(e);
  return a.default[`${t ? "timeout" : "error"}Retry`];
}
function Ps(a, e) {
  const t = a.backoff === "linear" ? 1 : Math.pow(2, e);
  return Math.min(t * a.retryDelayMs, a.maxRetryDelayMs);
}
function mi(a) {
  return he(he({}, a), {
    errorRetry: null,
    timeoutRetry: null
  });
}
function Ft(a, e, t, s) {
  return !!a && e < a.maxNumRetry && (ua(s) || !!t);
}
function ua(a) {
  return a === 0 && navigator.onLine === !1 || !!a && (a < 400 || a > 499);
}
const pr = {
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
function ha(a, e, t) {
  if (e === null || !Array.isArray(a) || !a.length || !U(e))
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
    if (fa(e, t, n))
      return n;
  }
  return null;
}
function ft(a, e, t = 0, s = 0) {
  let i = null;
  if (a ? i = e[a.sn - e[0].sn + 1] || null : t === 0 && e[0].start === 0 && (i = e[0]), i && As(t, s, i) === 0)
    return i;
  const r = pr.search(e, As.bind(null, t, s));
  return r && (r !== a || !i) ? r : i;
}
function As(a = 0, e = 0, t) {
  if (t.start <= a && t.start + t.duration > a)
    return 0;
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
  return t.start + t.duration - s <= a ? 1 : t.start - s > a && t.start ? -1 : 0;
}
function fa(a, e, t) {
  const s = Math.min(e, t.duration + (t.deltaPTS ? t.deltaPTS : 0)) * 1e3;
  return (t.endProgramDateTime || 0) - s > a;
}
function ga(a, e) {
  return pr.search(a, (t) => t.cc < e ? 1 : t.cc > e ? -1 : 0);
}
const ma = 3e5;
var de = {
  DoNothing: 0,
  SendEndCallback: 1,
  SendAlternateToPenaltyBox: 2,
  RemoveAlternatePermanently: 3,
  InsertDiscontinuity: 4,
  RetryRequest: 5
}, Se = {
  None: 0,
  MoveAllAlternatesMatchingHost: 1,
  MoveAllAlternatesMatchingHDCP: 2,
  SwitchToSDR: 4
};
class pa {
  constructor(e) {
    this.hls = void 0, this.playlistError = 0, this.penalizedRenditions = {}, this.log = void 0, this.warn = void 0, this.error = void 0, this.hls = e, this.log = v.log.bind(v, "[info]:"), this.warn = v.warn.bind(v, "[warning]:"), this.error = v.error.bind(v, "[error]:"), this.registerListeners();
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
    this.playlistError = 0;
  }
  stopLoad() {
  }
  getVariantLevelIndex(e) {
    return (e == null ? void 0 : e.type) === V.MAIN ? e.level : this.hls.loadLevel;
  }
  onManifestLoading() {
    this.playlistError = 0, this.penalizedRenditions = {};
  }
  onLevelUpdated() {
    this.playlistError = 0;
  }
  onError(e, t) {
    var s, i;
    if (t.fatal)
      return;
    const r = this.hls, n = t.context;
    switch (t.details) {
      case I.FRAG_LOAD_ERROR:
      case I.FRAG_LOAD_TIMEOUT:
      case I.KEY_LOAD_ERROR:
      case I.KEY_LOAD_TIMEOUT:
        t.errorAction = this.getFragRetryOrSwitchAction(t);
        return;
      case I.FRAG_PARSING_ERROR:
        if ((s = t.frag) != null && s.gap) {
          t.errorAction = {
            action: de.DoNothing,
            flags: Se.None
          };
          return;
        }
      case I.FRAG_GAP:
      case I.FRAG_DECRYPT_ERROR: {
        t.errorAction = this.getFragRetryOrSwitchAction(t), t.errorAction.action = de.SendAlternateToPenaltyBox;
        return;
      }
      case I.LEVEL_EMPTY_ERROR:
      case I.LEVEL_PARSING_ERROR:
        {
          var o, l;
          const c = t.parent === V.MAIN ? t.level : r.loadLevel;
          t.details === I.LEVEL_EMPTY_ERROR && ((o = t.context) != null && (l = o.levelDetails) != null && l.live) ? t.errorAction = this.getPlaylistRetryOrSwitchAction(t, c) : (t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, c));
        }
        return;
      case I.LEVEL_LOAD_ERROR:
      case I.LEVEL_LOAD_TIMEOUT:
        typeof (n == null ? void 0 : n.level) == "number" && (t.errorAction = this.getPlaylistRetryOrSwitchAction(t, n.level));
        return;
      case I.AUDIO_TRACK_LOAD_ERROR:
      case I.AUDIO_TRACK_LOAD_TIMEOUT:
      case I.SUBTITLE_LOAD_ERROR:
      case I.SUBTITLE_TRACK_LOAD_TIMEOUT:
        if (n) {
          const c = r.levels[r.loadLevel];
          if (c && (n.type === W.AUDIO_TRACK && n.groupId === c.audioGroupId || n.type === W.SUBTITLE_TRACK && n.groupId === c.textGroupId)) {
            t.errorAction = this.getPlaylistRetryOrSwitchAction(t, r.loadLevel), t.errorAction.action = de.SendAlternateToPenaltyBox, t.errorAction.flags = Se.MoveAllAlternatesMatchingHost;
            return;
          }
        }
        return;
      case I.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED:
        {
          const c = r.levels[r.loadLevel], d = c == null ? void 0 : c.attrs["HDCP-LEVEL"];
          d && (t.errorAction = {
            action: de.SendAlternateToPenaltyBox,
            flags: Se.MoveAllAlternatesMatchingHDCP,
            hdcpLevel: d
          });
        }
        return;
      case I.BUFFER_ADD_CODEC_ERROR:
      case I.REMUX_ALLOC_ERROR:
        t.errorAction = this.getLevelSwitchAction(t, (i = t.level) != null ? i : r.loadLevel);
        return;
      case I.INTERNAL_EXCEPTION:
      case I.BUFFER_APPENDING_ERROR:
      case I.BUFFER_APPEND_ERROR:
      case I.BUFFER_FULL_ERROR:
      case I.LEVEL_SWITCH_ERROR:
      case I.BUFFER_STALLED_ERROR:
      case I.BUFFER_SEEK_OVER_HOLE:
      case I.BUFFER_NUDGE_ON_STALL:
        t.errorAction = {
          action: de.DoNothing,
          flags: Se.None
        };
        return;
    }
    if (t.type === G.KEY_SYSTEM_ERROR) {
      const c = this.getVariantLevelIndex(t.frag);
      t.levelRetry = !1, t.errorAction = this.getLevelSwitchAction(t, c);
      return;
    }
  }
  getPlaylistRetryOrSwitchAction(e, t) {
    var s;
    const i = this.hls, r = gi(i.config.playlistLoadPolicy, e), n = this.playlistError++, o = (s = e.response) == null ? void 0 : s.code;
    if (Ft(r, n, Pt(e), o))
      return {
        action: de.RetryRequest,
        flags: Se.None,
        retryConfig: r,
        retryCount: n
      };
    const c = this.getLevelSwitchAction(e, t);
    return r && (c.retryConfig = r, c.retryCount = n), c;
  }
  getFragRetryOrSwitchAction(e) {
    const t = this.hls, s = this.getVariantLevelIndex(e.frag), i = t.levels[s], {
      fragLoadPolicy: r,
      keyLoadPolicy: n
    } = t.config, o = gi(e.details.startsWith("key") ? n : r, e), l = t.levels.reduce((u, h) => u + h.fragmentError, 0);
    if (i) {
      var c;
      e.details !== I.FRAG_GAP && i.fragmentError++;
      const u = (c = e.response) == null ? void 0 : c.code;
      if (Ft(o, l, Pt(e), u))
        return {
          action: de.RetryRequest,
          flags: Se.None,
          retryConfig: o,
          retryCount: l
        };
    }
    const d = this.getLevelSwitchAction(e, s);
    return o && (d.retryConfig = o, d.retryCount = l), d;
  }
  getLevelSwitchAction(e, t) {
    const s = this.hls;
    t == null && (t = s.loadLevel);
    const i = this.hls.levels[t];
    if (i && (i.loadError++, s.autoLevelEnabled)) {
      var r, n;
      let o = -1;
      const {
        levels: l,
        loadLevel: c,
        minAutoLevel: d,
        maxAutoLevel: u
      } = s, h = (r = e.frag) == null ? void 0 : r.type, {
        type: f,
        groupId: g
      } = (n = e.context) != null ? n : {};
      for (let p = l.length; p--; ) {
        const y = (p + c) % l.length;
        if (y !== c && y >= d && y <= u && l[y].loadError === 0) {
          const T = l[y];
          if (e.details === I.FRAG_GAP && e.frag) {
            const E = l[y].details;
            if (E) {
              const x = ft(e.frag, E.fragments, e.frag.start);
              if (x != null && x.gap)
                continue;
            }
          } else {
            if (f === W.AUDIO_TRACK && g === T.audioGroupId || f === W.SUBTITLE_TRACK && g === T.textGroupId)
              continue;
            if (h === V.AUDIO && i.audioGroupId === T.audioGroupId || h === V.SUBTITLE && i.textGroupId === T.textGroupId)
              continue;
          }
          o = y;
          break;
        }
      }
      if (o > -1 && s.loadLevel !== o)
        return e.levelRetry = !0, this.playlistError = 0, {
          action: de.SendAlternateToPenaltyBox,
          flags: Se.None,
          nextAutoLevel: o
        };
    }
    return {
      action: de.SendAlternateToPenaltyBox,
      flags: Se.MoveAllAlternatesMatchingHost
    };
  }
  onErrorOut(e, t) {
    var s;
    switch ((s = t.errorAction) == null ? void 0 : s.action) {
      case de.DoNothing:
        break;
      case de.SendAlternateToPenaltyBox:
        this.sendAlternateToPenaltyBox(t), !t.errorAction.resolved && t.details !== I.FRAG_GAP && (t.fatal = !0);
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
      case Se.None:
        this.switchLevel(e, n);
        break;
      case Se.MoveAllAlternatesMatchingHost:
        s.resolved || (s.resolved = this.redundantFailover(e));
        break;
      case Se.MoveAllAlternatesMatchingHDCP:
        r && (t.maxHdcpLevel = Ss[Ss.indexOf(r) - 1], s.resolved = !0), this.warn(`Restricting playback to HDCP-LEVEL of "${t.maxHdcpLevel}" or lower`);
        break;
    }
    s.resolved || this.switchLevel(e, n);
  }
  switchLevel(e, t) {
    t !== void 0 && e.errorAction && (this.warn(`switching to level ${t} after ${e.details}`), this.hls.nextAutoLevel = t, e.errorAction.resolved = !0, this.hls.nextLoadLevel = this.hls.nextAutoLevel);
  }
  redundantFailover(e) {
    const {
      hls: t,
      penalizedRenditions: s
    } = this, i = e.parent === V.MAIN ? e.level : t.loadLevel, r = t.levels[i], n = r.url.length, o = e.frag ? e.frag.urlId : r.urlId;
    r.urlId === o && (!e.frag || r.details) && this.penalizeRendition(r, e);
    for (let l = 1; l < n; l++) {
      const c = (o + l) % n, d = s[c];
      if (!d || ya(d, e, s[o]))
        return this.warn(`Switching to Redundant Stream ${c + 1}/${n}: "${r.url[c]}" after ${e.details}`), this.playlistError = 0, t.levels.forEach((u) => {
          u.urlId = c;
        }), t.nextLoadLevel = i, !0;
    }
    return !1;
  }
  penalizeRendition(e, t) {
    const {
      penalizedRenditions: s
    } = this, i = s[e.urlId] || {
      lastErrorPerfMs: 0,
      errors: [],
      details: void 0
    };
    i.lastErrorPerfMs = performance.now(), i.errors.push(t), i.details = e.details, s[e.urlId] = i;
  }
}
function ya(a, e, t) {
  if (performance.now() - a.lastErrorPerfMs > ma)
    return !0;
  const s = a.details;
  if (e.details === I.FRAG_GAP && s && e.frag) {
    const i = e.frag.start, r = ft(null, s.fragments, i);
    if (r && !r.gap)
      return !0;
  }
  if (t && a.errors.length < t.errors.length) {
    const i = a.errors[a.errors.length - 1];
    if (s && i.frag && e.frag && Math.abs(i.frag.start - e.frag.start) > s.targetduration * 3)
      return !0;
  }
  return !1;
}
class Fs {
  constructor(e, t) {
    this.hls = void 0, this.timer = -1, this.requestScheduled = -1, this.canLoad = !1, this.log = void 0, this.warn = void 0, this.log = v.log.bind(v, `${t}:`), this.warn = v.warn.bind(v, `${t}:`), this.hls = e;
  }
  destroy() {
    this.clearTimer(), this.hls = this.log = this.warn = null;
  }
  clearTimer() {
    clearTimeout(this.timer), this.timer = -1;
  }
  startLoad() {
    this.canLoad = !0, this.requestScheduled = -1, this.loadPlaylist();
  }
  stopLoad() {
    this.canLoad = !1, this.clearTimer();
  }
  switchParams(e, t) {
    const s = t == null ? void 0 : t.renditionReports;
    if (s) {
      let i = -1;
      for (let r = 0; r < s.length; r++) {
        const n = s[r];
        let o;
        try {
          o = new self.URL(n.URI, t.url).href;
        } catch (l) {
          v.warn(`Could not construct new URL for Rendition Report: ${l}`), o = n.URI || "";
        }
        if (o === e) {
          i = r;
          break;
        } else
          o === e.substring(0, o.length) && (i = r);
      }
      if (i !== -1) {
        const r = s[i], n = parseInt(r["LAST-MSN"]) || (t == null ? void 0 : t.lastPartSn);
        let o = parseInt(r["LAST-PART"]) || (t == null ? void 0 : t.lastPartIndex);
        if (this.hls.config.lowLatencyMode) {
          const l = Math.min(t.age - t.partTarget, t.targetduration);
          o >= 0 && l > t.partTarget && (o += 1);
        }
        return new hi(n, o >= 0 ? o : void 0, ct.No);
      }
    }
  }
  loadPlaylist(e) {
    this.requestScheduled === -1 && (this.requestScheduled = self.performance.now());
  }
  shouldLoadPlaylist(e) {
    return this.canLoad && !!e && !!e.url && (!e.details || e.details.live);
  }
  shouldReloadPlaylist(e) {
    return this.timer === -1 && this.requestScheduled === -1 && this.shouldLoadPlaylist(e);
  }
  playlistLoaded(e, t, s) {
    const {
      details: i,
      stats: r
    } = t, n = self.performance.now(), o = r.loading.first ? Math.max(0, n - r.loading.first) : 0;
    if (i.advancedDateTime = Date.now() - o, i.live || s != null && s.live) {
      if (i.reloaded(s), s && this.log(`live playlist ${e} ${i.advanced ? "REFRESHED " + i.lastPartSn + "-" + i.lastPartIndex : i.updated ? "UPDATED" : "MISSED"}`), s && i.fragments.length > 0 && na(s, i), !this.canLoad || !i.live)
        return;
      let l, c, d;
      if (i.canBlockReload && i.endSN && i.advanced) {
        const y = this.hls.config.lowLatencyMode, T = i.lastPartSn, E = i.endSN, x = i.lastPartIndex, A = x !== -1, S = T === E, k = y ? 0 : x;
        A ? (c = S ? E + 1 : T, d = S ? k : x + 1) : c = E + 1;
        const b = i.age, C = b + i.ageHeader;
        let w = Math.min(C - i.partTarget, i.targetduration * 1.5);
        if (w > 0) {
          if (s && w > s.tuneInGoal)
            this.warn(`CDN Tune-in goal increased from: ${s.tuneInGoal} to: ${w} with playlist age: ${i.age}`), w = 0;
          else {
            const R = Math.floor(w / i.targetduration);
            if (c += R, d !== void 0) {
              const B = Math.round(w % i.targetduration / i.partTarget);
              d += B;
            }
            this.log(`CDN Tune-in age: ${i.ageHeader}s last advanced ${b.toFixed(2)}s goal: ${w} skip sn ${R} to part ${d}`);
          }
          i.tuneInGoal = w;
        }
        if (l = this.getDeliveryDirectives(i, t.deliveryDirectives, c, d), y || !S) {
          this.loadPlaylist(l);
          return;
        }
      } else
        (i.canBlockReload || i.canSkipUntil) && (l = this.getDeliveryDirectives(i, t.deliveryDirectives, c, d));
      const u = this.hls.mainForwardBufferInfo, h = u ? u.end - u.len : 0, f = (i.edge - h) * 1e3, g = ca(i, f);
      i.updated && n > this.requestScheduled + g && (this.requestScheduled = r.loading.start), c !== void 0 && i.canBlockReload ? this.requestScheduled = r.loading.first + g - (i.partTarget * 1e3 || 1e3) : this.requestScheduled === -1 || this.requestScheduled + g < n ? this.requestScheduled = n : this.requestScheduled - n <= 0 && (this.requestScheduled += g);
      let p = this.requestScheduled - n;
      p = Math.max(0, p), this.log(`reload live playlist ${e} in ${Math.round(p)} ms`), this.timer = self.setTimeout(() => this.loadPlaylist(l), p);
    } else
      this.clearTimer();
  }
  getDeliveryDirectives(e, t, s, i) {
    let r = ra(e, s);
    return t != null && t.skip && e.deltaUpdateFailed && (s = t.msn, i = t.part, r = ct.No), new hi(s, i, r);
  }
  checkRetry(e) {
    const t = e.details, s = Pt(e), i = e.errorAction, {
      action: r,
      retryCount: n = 0,
      retryConfig: o
    } = i || {}, l = !!i && !!o && (r === de.RetryRequest || !i.resolved && r === de.SendAlternateToPenaltyBox);
    if (l) {
      var c;
      if (this.requestScheduled = -1, n >= o.maxNumRetry)
        return !1;
      if (s && (c = e.context) != null && c.deliveryDirectives)
        this.warn(`Retrying playlist loading ${n + 1}/${o.maxNumRetry} after "${t}" without delivery-directives`), this.loadPlaylist();
      else {
        const d = Ps(o, n);
        this.timer = self.setTimeout(() => this.loadPlaylist(), d), this.warn(`Retrying playlist loading ${n + 1}/${o.maxNumRetry} after "${t}" in ${d}ms`);
      }
      e.levelRetry = !0, i.resolved = !0;
    }
    return l;
  }
}
let Zt;
class Ta extends Fs {
  constructor(e, t) {
    super(e, "[level-controller]"), this._levels = [], this._firstLevel = -1, this._startLevel = void 0, this.currentLevel = null, this.currentLevelIndex = -1, this.manualLevelIndex = -1, this.steering = void 0, this.onParsedComplete = void 0, this.steering = t, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this), e.on(m.ERROR, this.onError, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this), e.off(m.ERROR, this.onError, this);
  }
  destroy() {
    this._unregisterListeners(), this.steering = null, this.resetLevels(), super.destroy();
  }
  startLoad() {
    this._levels.forEach((t) => {
      t.loadError = 0, t.fragmentError = 0;
    }), super.startLoad();
  }
  resetLevels() {
    this._startLevel = void 0, this.manualLevelIndex = -1, this.currentLevelIndex = -1, this.currentLevel = null, this._levels = [];
  }
  onManifestLoading(e, t) {
    this.resetLevels();
  }
  onManifestLoaded(e, t) {
    const s = [], i = {};
    let r;
    t.levels.forEach((n) => {
      var o;
      const l = n.attrs;
      ((o = n.audioCodec) == null ? void 0 : o.indexOf("mp4a.40.34")) !== -1 && (Zt || (Zt = /chrome|firefox/i.test(navigator.userAgent)), Zt && (n.audioCodec = void 0));
      const {
        AUDIO: c,
        CODECS: d,
        "FRAME-RATE": u,
        "PATHWAY-ID": h,
        RESOLUTION: f,
        SUBTITLES: g
      } = l, y = `${`${h || "."}-`}${n.bitrate}-${f}-${u}-${d}`;
      r = i[y], r ? r.addFallback(n) : (r = new ht(n), i[y] = r, s.push(r)), Ot(r, "audio", c), Ot(r, "text", g);
    }), this.filterAndSortMediaOptions(s, t);
  }
  filterAndSortMediaOptions(e, t) {
    let s = [], i = [], r = !1, n = !1, o = !1, l = e.filter(({
      audioCodec: f,
      videoCodec: g,
      width: p,
      height: y,
      unknownCodecs: T
    }) => (r || (r = !!(p && y)), n || (n = !!g), o || (o = !!f), !(T != null && T.length) && (!f || jt(f, "audio")) && (!g || jt(g, "video"))));
    if ((r || n) && o && (l = l.filter(({
      videoCodec: f,
      width: g,
      height: p
    }) => !!f || !!(g && p))), l.length === 0) {
      Promise.resolve().then(() => {
        if (this.hls) {
          const f = new Error("no level with compatible codecs found in manifest");
          this.hls.trigger(m.ERROR, {
            type: G.MEDIA_ERROR,
            details: I.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
            fatal: !0,
            url: t.url,
            error: f,
            reason: f.message
          });
        }
      });
      return;
    }
    t.audioTracks && (s = t.audioTracks.filter((f) => !f.audioCodec || jt(f.audioCodec, "audio")), pi(s)), t.subtitles && (i = t.subtitles, pi(i));
    const c = l.slice(0);
    l.sort((f, g) => f.attrs["HDCP-LEVEL"] !== g.attrs["HDCP-LEVEL"] ? (f.attrs["HDCP-LEVEL"] || "") > (g.attrs["HDCP-LEVEL"] || "") ? 1 : -1 : f.bitrate !== g.bitrate ? f.bitrate - g.bitrate : f.attrs["FRAME-RATE"] !== g.attrs["FRAME-RATE"] ? f.attrs.decimalFloatingPoint("FRAME-RATE") - g.attrs.decimalFloatingPoint("FRAME-RATE") : f.attrs.SCORE !== g.attrs.SCORE ? f.attrs.decimalFloatingPoint("SCORE") - g.attrs.decimalFloatingPoint("SCORE") : r && f.height !== g.height ? f.height - g.height : 0);
    let d = c[0];
    if (this.steering && (l = this.steering.filterParsedLevels(l), l.length !== c.length)) {
      for (let f = 0; f < c.length; f++)
        if (c[f].pathwayId === l[0].pathwayId) {
          d = c[f];
          break;
        }
    }
    this._levels = l;
    for (let f = 0; f < l.length; f++)
      if (l[f] === d) {
        this._firstLevel = f, this.log(`manifest loaded, ${l.length} level(s) found, first bitrate: ${d.bitrate}`);
        break;
      }
    const u = o && !n, h = {
      levels: l,
      audioTracks: s,
      subtitleTracks: i,
      sessionData: t.sessionData,
      sessionKeys: t.sessionKeys,
      firstLevel: this._firstLevel,
      stats: t.stats,
      audio: o,
      video: n,
      altAudio: !u && s.some((f) => !!f.url)
    };
    this.hls.trigger(m.MANIFEST_PARSED, h), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition);
  }
  get levels() {
    return this._levels.length === 0 ? null : this._levels;
  }
  get level() {
    return this.currentLevelIndex;
  }
  set level(e) {
    const t = this._levels;
    if (t.length === 0)
      return;
    if (e < 0 || e >= t.length) {
      const d = new Error("invalid level idx"), u = e < 0;
      if (this.hls.trigger(m.ERROR, {
        type: G.OTHER_ERROR,
        details: I.LEVEL_SWITCH_ERROR,
        level: e,
        fatal: u,
        error: d,
        reason: d.message
      }), u)
        return;
      e = Math.min(e, t.length - 1);
    }
    const s = this.currentLevelIndex, i = this.currentLevel, r = i ? i.attrs["PATHWAY-ID"] : void 0, n = t[e], o = n.attrs["PATHWAY-ID"];
    if (this.currentLevelIndex = e, this.currentLevel = n, s === e && n.details && i && r === o)
      return;
    this.log(`Switching to level ${e}${o ? " with Pathway " + o : ""} from level ${s}${r ? " with Pathway " + r : ""}`);
    const l = ne({}, n, {
      level: e,
      maxBitrate: n.maxBitrate,
      attrs: n.attrs,
      uri: n.uri,
      urlId: n.urlId
    });
    delete l._attrs, delete l._urlId, this.hls.trigger(m.LEVEL_SWITCHING, l);
    const c = n.details;
    if (!c || c.live) {
      const d = this.switchParams(n.uri, i == null ? void 0 : i.details);
      this.loadPlaylist(d);
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
      return e !== void 0 ? e : this._firstLevel;
    } else
      return this._startLevel;
  }
  set startLevel(e) {
    this._startLevel = e;
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === W.LEVEL && t.context.level === this.level && this.checkRetry(t);
  }
  // reset errors on the successful load of a fragment
  onFragLoaded(e, {
    frag: t
  }) {
    if (t !== void 0 && t.type === V.MAIN) {
      const s = this._levels[t.level];
      s !== void 0 && (s.loadError = 0);
    }
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      level: i,
      details: r
    } = t, n = this._levels[i];
    if (!n) {
      var o;
      this.warn(`Invalid level index ${i}`), (o = t.deliveryDirectives) != null && o.skip && (r.deltaUpdateFailed = !0);
      return;
    }
    i === this.currentLevelIndex ? (n.fragmentError === 0 && (n.loadError = 0), this.playlistLoaded(i, t, n.details)) : (s = t.deliveryDirectives) != null && s.skip && (r.deltaUpdateFailed = !0);
  }
  onAudioTrackSwitched(e, t) {
    const s = this.currentLevel;
    if (!s)
      return;
    const i = this.hls.audioTracks[t.id].groupId;
    if (s.audioGroupIds && s.audioGroupId !== i) {
      let r = -1;
      for (let n = 0; n < s.audioGroupIds.length; n++)
        if (s.audioGroupIds[n] === i) {
          r = n;
          break;
        }
      r !== -1 && r !== s.urlId && (s.urlId = r, this.canLoad && this.startLoad());
    }
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.currentLevelIndex, s = this.currentLevel;
    if (s && this.shouldLoadPlaylist(s)) {
      const i = s.urlId;
      let r = s.uri;
      if (e)
        try {
          r = e.addDirectives(r);
        } catch (o) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${o}`);
        }
      const n = s.attrs["PATHWAY-ID"];
      this.log(`Loading level index ${t}${(e == null ? void 0 : e.msn) !== void 0 ? " at sn " + e.msn + " part " + e.part : ""} with${n ? " Pathway " + n : ""} URI ${i + 1}/${s.url.length} ${r}`), this.clearTimer(), this.hls.trigger(m.LEVEL_LOADING, {
        url: r,
        level: t,
        id: i,
        deliveryDirectives: e || null
      });
    }
  }
  get nextLoadLevel() {
    return this.manualLevelIndex !== -1 ? this.manualLevelIndex : this.hls.nextAutoLevel;
  }
  set nextLoadLevel(e) {
    this.level = e, this.manualLevelIndex === -1 && (this.hls.nextAutoLevel = e);
  }
  removeLevel(e, t) {
    const s = (r, n) => n !== t, i = this._levels.filter((r, n) => n !== e ? !0 : r.url.length > 1 && t !== void 0 ? (r.url = r.url.filter(s), r.audioGroupIds && (r.audioGroupIds = r.audioGroupIds.filter(s)), r.textGroupIds && (r.textGroupIds = r.textGroupIds.filter(s)), r.urlId = 0, !0) : (this.steering && this.steering.removeLevel(r), !1));
    this.hls.trigger(m.LEVELS_UPDATED, {
      levels: i
    });
  }
  onLevelsUpdated(e, {
    levels: t
  }) {
    t.forEach((s, i) => {
      const {
        details: r
      } = s;
      r != null && r.fragments && r.fragments.forEach((n) => {
        n.level = i;
      });
    }), this._levels = t;
  }
}
function Ot(a, e, t) {
  t && (e === "audio" ? (a.audioGroupIds || (a.audioGroupIds = []), a.audioGroupIds[a.url.length - 1] = t) : e === "text" && (a.textGroupIds || (a.textGroupIds = []), a.textGroupIds[a.url.length - 1] = t));
}
function pi(a) {
  const e = {};
  a.forEach((t) => {
    const s = t.groupId || "";
    t.id = e[s] = e[s] || 0, e[s]++;
  });
}
var ae = {
  NOT_LOADED: "NOT_LOADED",
  APPENDING: "APPENDING",
  PARTIAL: "PARTIAL",
  OK: "OK"
};
class xa {
  constructor(e) {
    this.activePartLists = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.fragments = /* @__PURE__ */ Object.create(null), this.timeRanges = /* @__PURE__ */ Object.create(null), this.bufferPadding = 0.2, this.hls = void 0, this.hasGaps = !1, this.hls = e, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.BUFFER_APPENDED, this.onBufferAppended, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.BUFFER_APPENDED, this.onBufferAppended, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this);
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
    const {
      fragments: s
    } = this, i = Object.keys(s);
    for (let r = i.length; r--; ) {
      const n = s[i[r]];
      if ((n == null ? void 0 : n.body.type) === t && n.buffered) {
        const o = n.body;
        if (o.start <= e && e <= o.end)
          return o;
      }
    }
    return null;
  }
  /**
   * Partial fragments effected by coded frame eviction will be removed
   * The browser will unload parts of the buffer to free up memory for new buffer data
   * Fragments will need to be reloaded when the buffer is freed up, removing partial fragments will allow them to reload(since there might be parts that are still playable)
   */
  detectEvictedFragments(e, t, s, i) {
    this.timeRanges && (this.timeRanges[e] = t);
    const r = (i == null ? void 0 : i.fragment.sn) || -1;
    Object.keys(this.fragments).forEach((n) => {
      const o = this.fragments[n];
      if (!o || r >= o.body.sn)
        return;
      if (!o.buffered && !o.loaded) {
        o.body.type === s && this.removeFragment(o.body);
        return;
      }
      const l = o.range[e];
      l && l.time.some((c) => {
        const d = !this.isTimeBuffered(c.startPTS, c.endPTS, t);
        return d && this.removeFragment(o.body), d;
      });
    });
  }
  /**
   * Checks if the fragment passed in is loaded in the buffer properly
   * Partially loaded fragments will be registered as a partial fragment
   */
  detectPartialFragments(e) {
    const t = this.timeRanges, {
      frag: s,
      part: i
    } = e;
    if (!t || s.sn === "initSegment")
      return;
    const r = Je(s), n = this.fragments[r];
    if (!n || n.buffered && s.gap)
      return;
    const o = !s.relurl;
    Object.keys(t).forEach((l) => {
      const c = s.elementaryStreams[l];
      if (!c)
        return;
      const d = t[l], u = o || c.partial === !0;
      n.range[l] = this.getBufferedTimes(s, i, u, d);
    }), n.loaded = null, Object.keys(n.range).length ? (n.buffered = !0, (n.body.endList = s.endList || n.body.endList) && (this.endListFragments[n.body.type] = n), xt(n) || this.removeParts(s.sn - 1, s.type)) : this.removeFragment(n.body);
  }
  removeParts(e, t) {
    const s = this.activePartLists[t];
    s && (this.activePartLists[t] = s.filter((i) => i.fragment.sn >= e));
  }
  fragBuffered(e, t) {
    const s = Je(e);
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
    }, n = e.start, o = e.end, l = e.minEndPTS || o, c = e.maxStartPTS || n;
    for (let d = 0; d < i.length; d++) {
      const u = i.start(d) - this.bufferPadding, h = i.end(d) + this.bufferPadding;
      if (c >= u && l <= h) {
        r.time.push({
          startPTS: Math.max(n, i.start(d)),
          endPTS: Math.min(o, i.end(d))
        });
        break;
      } else if (n < h && o > u)
        r.partial = !0, r.time.push({
          startPTS: Math.max(n, i.start(d)),
          endPTS: Math.min(o, i.end(d))
        });
      else if (o <= u)
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
      fragments: l
    } = this;
    return Object.keys(l).forEach((c) => {
      const d = l[c];
      d && xt(d) && (i = d.body.start - o, r = d.body.end + o, e >= i && e <= r && (s = Math.min(e - i, r - e), n <= s && (t = d.body, n = s)));
    }), t;
  }
  isEndListAppended(e) {
    const t = this.endListFragments[e];
    return t !== void 0 && (t.buffered || xt(t));
  }
  getState(e) {
    const t = Je(e), s = this.fragments[t];
    return s ? s.buffered ? xt(s) ? ae.PARTIAL : ae.OK : ae.APPENDING : ae.NOT_LOADED;
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
  onFragLoaded(e, t) {
    const {
      frag: s,
      part: i
    } = t;
    if (s.sn === "initSegment" || s.bitrateTest)
      return;
    const r = i ? null : t, n = Je(s);
    this.fragments[n] = {
      body: s,
      appendedPTS: null,
      loaded: r,
      buffered: !1,
      range: /* @__PURE__ */ Object.create(null)
    };
  }
  onBufferAppended(e, t) {
    const {
      frag: s,
      part: i,
      timeRanges: r
    } = t;
    if (s.sn === "initSegment")
      return;
    const n = s.type;
    if (i) {
      let o = this.activePartLists[n];
      o || (this.activePartLists[n] = o = []), o.push(i);
    }
    this.timeRanges = r, Object.keys(r).forEach((o) => {
      const l = r[o];
      this.detectEvictedFragments(o, l, n, i);
    });
  }
  onFragBuffered(e, t) {
    this.detectPartialFragments(t);
  }
  hasFragment(e) {
    const t = Je(e);
    return !!this.fragments[t];
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
      const l = o.body;
      l.type !== s || i && !l.gap || l.start < t && l.end > e && (o.buffered || r) && this.removeFragment(l);
    });
  }
  removeFragment(e) {
    const t = Je(e);
    e.stats.loaded = 0, e.clearElementaryStreamInfo();
    const s = this.activePartLists[e.type];
    if (s) {
      const i = e.sn;
      this.activePartLists[e.type] = s.filter((r) => r.fragment.sn !== i);
    }
    delete this.fragments[t], e.endList && delete this.endListFragments[e.type];
  }
  removeAllFragments() {
    this.fragments = /* @__PURE__ */ Object.create(null), this.endListFragments = /* @__PURE__ */ Object.create(null), this.activePartLists = /* @__PURE__ */ Object.create(null), this.hasGaps = !1;
  }
}
function xt(a) {
  var e, t, s;
  return a.buffered && (a.body.gap || ((e = a.range.video) == null ? void 0 : e.partial) || ((t = a.range.audio) == null ? void 0 : t.partial) || ((s = a.range.audiovideo) == null ? void 0 : s.partial));
}
function Je(a) {
  return `${a.type}_${a.level}_${a.urlId}_${a.sn}`;
}
const yi = Math.pow(2, 17);
class Ea {
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
      return Promise.reject(new Fe({
        type: G.NETWORK_ERROR,
        details: I.FRAG_LOAD_ERROR,
        fatal: !1,
        frag: e,
        error: new Error(`Fragment does not have a ${s ? "part list" : "url"}`),
        networkDetails: null
      }));
    this.abort();
    const i = this.config, r = i.fLoader, n = i.loader;
    return new Promise((o, l) => {
      if (this.loader && this.loader.destroy(), e.gap)
        if (e.tagList.some((f) => f[0] === "GAP")) {
          l(xi(e));
          return;
        } else
          e.gap = !1;
      const c = this.loader = e.loader = r ? new r(i) : new n(i), d = Ti(e), u = mi(i.fragLoadPolicy.default), h = {
        loadPolicy: u,
        timeout: u.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: e.sn === "initSegment" ? 1 / 0 : yi
      };
      e.stats = c.stats, c.load(d, h, {
        onSuccess: (f, g, p, y) => {
          this.resetLoader(e, c);
          let T = f.data;
          p.resetIV && e.decryptdata && (e.decryptdata.iv = new Uint8Array(T.slice(0, 16)), T = T.slice(16)), o({
            frag: e,
            part: null,
            payload: T,
            networkDetails: y
          });
        },
        onError: (f, g, p, y) => {
          this.resetLoader(e, c), l(new Fe({
            type: G.NETWORK_ERROR,
            details: I.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            response: he({
              url: s,
              data: void 0
            }, f),
            error: new Error(`HTTP Error ${f.code} ${f.text}`),
            networkDetails: p,
            stats: y
          }));
        },
        onAbort: (f, g, p) => {
          this.resetLoader(e, c), l(new Fe({
            type: G.NETWORK_ERROR,
            details: I.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            error: new Error("Aborted"),
            networkDetails: p,
            stats: f
          }));
        },
        onTimeout: (f, g, p) => {
          this.resetLoader(e, c), l(new Fe({
            type: G.NETWORK_ERROR,
            details: I.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            error: new Error(`Timeout after ${h.timeout}ms`),
            networkDetails: p,
            stats: f
          }));
        },
        onProgress: (f, g, p, y) => {
          t && t({
            frag: e,
            part: null,
            payload: p,
            networkDetails: y
          });
        }
      });
    });
  }
  loadPart(e, t, s) {
    this.abort();
    const i = this.config, r = i.fLoader, n = i.loader;
    return new Promise((o, l) => {
      if (this.loader && this.loader.destroy(), e.gap || t.gap) {
        l(xi(e, t));
        return;
      }
      const c = this.loader = e.loader = r ? new r(i) : new n(i), d = Ti(e, t), u = mi(i.fragLoadPolicy.default), h = {
        loadPolicy: u,
        timeout: u.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0,
        highWaterMark: yi
      };
      t.stats = c.stats, c.load(d, h, {
        onSuccess: (f, g, p, y) => {
          this.resetLoader(e, c), this.updateStatsFromPart(e, t);
          const T = {
            frag: e,
            part: t,
            payload: f.data,
            networkDetails: y
          };
          s(T), o(T);
        },
        onError: (f, g, p, y) => {
          this.resetLoader(e, c), l(new Fe({
            type: G.NETWORK_ERROR,
            details: I.FRAG_LOAD_ERROR,
            fatal: !1,
            frag: e,
            part: t,
            response: he({
              url: d.url,
              data: void 0
            }, f),
            error: new Error(`HTTP Error ${f.code} ${f.text}`),
            networkDetails: p,
            stats: y
          }));
        },
        onAbort: (f, g, p) => {
          e.stats.aborted = t.stats.aborted, this.resetLoader(e, c), l(new Fe({
            type: G.NETWORK_ERROR,
            details: I.INTERNAL_ABORTED,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error("Aborted"),
            networkDetails: p,
            stats: f
          }));
        },
        onTimeout: (f, g, p) => {
          this.resetLoader(e, c), l(new Fe({
            type: G.NETWORK_ERROR,
            details: I.FRAG_LOAD_TIMEOUT,
            fatal: !1,
            frag: e,
            part: t,
            error: new Error(`Timeout after ${h.timeout}ms`),
            networkDetails: p,
            stats: f
          }));
        }
      });
    });
  }
  updateStatsFromPart(e, t) {
    const s = e.stats, i = t.stats, r = i.total;
    if (s.loaded += i.loaded, r) {
      const l = Math.round(e.duration / t.duration), c = Math.min(Math.round(s.loaded / r), l), u = (l - c) * Math.round(s.loaded / c);
      s.total = s.loaded + u;
    } else
      s.total = Math.max(s.loaded, s.total);
    const n = s.loading, o = i.loading;
    n.start ? n.first += o.first - o.start : (n.start = o.start, n.first = o.first), n.end = o.end;
  }
  resetLoader(e, t) {
    e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy();
  }
}
function Ti(a, e = null) {
  const t = e || a, s = {
    frag: a,
    part: e,
    responseType: "arraybuffer",
    url: t.url,
    headers: {},
    rangeStart: 0,
    rangeEnd: 0
  }, i = t.byteRangeStartOffset, r = t.byteRangeEndOffset;
  if (U(i) && U(r)) {
    var n;
    let o = i, l = r;
    if (a.sn === "initSegment" && ((n = a.decryptdata) == null ? void 0 : n.method) === "AES-128") {
      const c = r - i;
      c % 16 && (l = r + (16 - c % 16)), i !== 0 && (s.resetIV = !0, o = i - 16);
    }
    s.rangeStart = o, s.rangeEnd = l;
  }
  return s;
}
function xi(a, e) {
  const t = new Error(`GAP ${a.gap ? "tag" : "attribute"} found`), s = {
    type: G.MEDIA_ERROR,
    details: I.FRAG_GAP,
    fatal: !1,
    frag: a,
    error: t,
    networkDetails: null
  };
  return e && (s.part = e), (e || a).stats.aborted = !0, new Fe(s);
}
class Fe extends Error {
  constructor(e) {
    super(e.error.message), this.data = void 0, this.data = e;
  }
}
class va {
  constructor(e) {
    this.config = void 0, this.keyUriToKeyInfo = {}, this.emeController = null, this.config = e;
  }
  abort(e) {
    for (const t in this.keyUriToKeyInfo) {
      const s = this.keyUriToKeyInfo[t].loader;
      if (s) {
        if (e && e !== s.context.frag.type)
          return;
        s.abort();
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
  createKeyLoadError(e, t = I.KEY_LOAD_ERROR, s, i, r) {
    return new Fe({
      type: G.NETWORK_ERROR,
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
    return !e.decryptdata && e.encrypted && this.emeController ? this.emeController.selectKeySystemFormat(e).then((t) => this.loadInternal(e, t)) : this.loadInternal(e);
  }
  loadInternal(e, t) {
    var s, i;
    t && e.setKeyFormat(t);
    const r = e.decryptdata;
    if (!r) {
      const c = new Error(t ? `Expected frag.decryptdata to be defined after setting format ${t}` : "Missing decryption data on fragment in onKeyLoading");
      return Promise.reject(this.createKeyLoadError(e, I.KEY_LOAD_ERROR, c));
    }
    const n = r.uri;
    if (!n)
      return Promise.reject(this.createKeyLoadError(e, I.KEY_LOAD_ERROR, new Error(`Invalid key URI: "${n}"`)));
    let o = this.keyUriToKeyInfo[n];
    if ((s = o) != null && s.decryptdata.key)
      return r.key = o.decryptdata.key, Promise.resolve({
        frag: e,
        keyInfo: o
      });
    if ((i = o) != null && i.keyLoadPromise) {
      var l;
      switch ((l = o.mediaKeySessionContext) == null ? void 0 : l.keyStatus) {
        case void 0:
        case "status-pending":
        case "usable":
        case "usable-in-future":
          return o.keyLoadPromise.then((c) => (r.key = c.keyInfo.decryptdata.key, {
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
        return this.loadKeyHTTP(o, e);
      default:
        return Promise.reject(this.createKeyLoadError(e, I.KEY_LOAD_ERROR, new Error(`Key supplied with unsupported METHOD: "${r.method}"`)));
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
      const l = {
        keyInfo: e,
        frag: t,
        responseType: "arraybuffer",
        url: e.decryptdata.uri
      }, c = s.keyLoadPolicy.default, d = {
        loadPolicy: c,
        timeout: c.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, u = {
        onSuccess: (h, f, g, p) => {
          const {
            frag: y,
            keyInfo: T,
            url: E
          } = g;
          if (!y.decryptdata || T !== this.keyUriToKeyInfo[E])
            return o(this.createKeyLoadError(y, I.KEY_LOAD_ERROR, new Error("after key load, decryptdata unset or changed"), p));
          T.decryptdata.key = y.decryptdata.key = new Uint8Array(h.data), y.keyLoader = null, T.loader = null, n({
            frag: y,
            keyInfo: T
          });
        },
        onError: (h, f, g, p) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, I.KEY_LOAD_ERROR, new Error(`HTTP Error ${h.code} loading key ${h.text}`), g, he({
            url: l.url,
            data: void 0
          }, h)));
        },
        onTimeout: (h, f, g) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, I.KEY_LOAD_TIMEOUT, new Error("key loading timed out"), g));
        },
        onAbort: (h, f, g) => {
          this.resetLoader(f), o(this.createKeyLoadError(t, I.INTERNAL_ABORTED, new Error("key loading aborted"), g));
        }
      };
      r.load(l, d, u);
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
class Sa {
  constructor() {
    this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this);
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
const La = {
  length: 0,
  start: () => 0,
  end: () => 0
};
class ee {
  /**
   * Return true if `media`'s buffered include `position`
   */
  static isBuffered(e, t) {
    try {
      if (e) {
        const s = ee.getBuffered(e);
        for (let i = 0; i < s.length; i++)
          if (t >= s.start(i) && t <= s.end(i))
            return !0;
      }
    } catch {
    }
    return !1;
  }
  static bufferInfo(e, t, s) {
    try {
      if (e) {
        const i = ee.getBuffered(e), r = [];
        let n;
        for (n = 0; n < i.length; n++)
          r.push({
            start: i.start(n),
            end: i.end(n)
          });
        return this.bufferedInfo(r, t, s);
      }
    } catch {
    }
    return {
      len: 0,
      start: t,
      end: t,
      nextStart: void 0
    };
  }
  static bufferedInfo(e, t, s) {
    t = Math.max(0, t), e.sort(function(c, d) {
      const u = c.start - d.start;
      return u || d.end - c.end;
    });
    let i = [];
    if (s)
      for (let c = 0; c < e.length; c++) {
        const d = i.length;
        if (d) {
          const u = i[d - 1].end;
          e[c].start - u < s ? e[c].end > u && (i[d - 1].end = e[c].end) : i.push(e[c]);
        } else
          i.push(e[c]);
      }
    else
      i = e;
    let r = 0, n, o = t, l = t;
    for (let c = 0; c < i.length; c++) {
      const d = i[c].start, u = i[c].end;
      if (t + s >= d && t < u)
        o = d, l = u, r = l - t;
      else if (t + s < d) {
        n = d;
        break;
      }
    }
    return {
      len: r,
      start: o || 0,
      end: l || 0,
      nextStart: n
    };
  }
  /**
   * Safe method to get buffered property.
   * SourceBuffer.buffered may throw if SourceBuffer is removed from it's MediaSource
   */
  static getBuffered(e) {
    try {
      return e.buffered;
    } catch (t) {
      return v.log("failed to get media.buffered", t), La;
    }
  }
}
class Os {
  constructor(e, t, s, i = 0, r = -1, n = !1) {
    this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = Et(), this.buffering = {
      audio: Et(),
      video: Et(),
      audiovideo: Et()
    }, this.level = e, this.sn = t, this.id = s, this.size = i, this.part = r, this.partial = n;
  }
}
function Et() {
  return {
    start: 0,
    executeStart: 0,
    executeEnd: 0,
    end: 0
  };
}
function yr(a, e) {
  let t = null;
  for (let s = 0, i = a.length; s < i; s++) {
    const r = a[s];
    if (r && r.cc === e) {
      t = r;
      break;
    }
  }
  return t;
}
function Aa(a, e, t) {
  return !!(e.details && (t.endCC > t.startCC || a && a.cc < t.startCC));
}
function Ia(a, e, t = 0) {
  const s = a.fragments, i = e.fragments;
  if (!i.length || !s.length) {
    v.log("No fragments to align");
    return;
  }
  const r = yr(s, i[0].cc);
  if (!r || r && !r.startPTS) {
    v.log("No frag in previous level to align on");
    return;
  }
  return r;
}
function Ei(a, e) {
  if (a) {
    const t = a.start + e;
    a.start = a.startPTS = t, a.endPTS = t + a.duration;
  }
}
function Ms(a, e) {
  const t = e.fragments;
  for (let s = 0, i = t.length; s < i; s++)
    Ei(t[s], a);
  e.fragmentHint && Ei(e.fragmentHint, a), e.alignedSliding = !0;
}
function Ra(a, e, t) {
  e && (ba(a, t, e), !t.alignedSliding && e.details && Da(t, e.details), !t.alignedSliding && e.details && !t.skippedSegments && gr(e.details, t));
}
function ba(a, e, t) {
  if (Aa(a, t, e)) {
    const s = Ia(t.details, e);
    s && U(s.start) && (v.log(`Adjusting PTS using last level due to CC increase within current level ${e.url}`), Ms(s.start, e));
  }
}
function Da(a, e) {
  if (!e.fragments.length || !a.hasProgramDateTime || !e.hasProgramDateTime)
    return;
  const t = e.fragments[0].programDateTime, s = a.fragments[0].programDateTime, i = (s - t) / 1e3 + e.fragments[0].start;
  i && U(i) && (v.log(`Adjusting PTS using programDateTime delta ${s - t}ms, sliding:${i.toFixed(3)} ${a.url} `), Ms(i, a));
}
function Tr(a, e) {
  if (!a.hasProgramDateTime || !e.hasProgramDateTime)
    return;
  const t = a.fragments, s = e.fragments;
  if (!t.length || !s.length)
    return;
  const i = Math.round(s.length / 2) - 1, r = s[i], n = yr(t, r.cc) || t[Math.round(t.length / 2) - 1], o = r.programDateTime, l = n.programDateTime;
  if (o === null || l === null)
    return;
  const c = (l - o) / 1e3 - (n.start - r.start);
  Ms(c, a);
}
class Ca {
  constructor(e, t) {
    this.subtle = void 0, this.aesIV = void 0, this.subtle = e, this.aesIV = t;
  }
  decrypt(e, t) {
    return this.subtle.decrypt({
      name: "AES-CBC",
      iv: this.aesIV
    }, t, e);
  }
}
class _a {
  constructor(e, t) {
    this.subtle = void 0, this.key = void 0, this.subtle = e, this.key = t;
  }
  expandKey() {
    return this.subtle.importKey("raw", this.key, {
      name: "AES-CBC"
    }, !1, ["encrypt", "decrypt"]);
  }
}
function ka(a) {
  const e = a.byteLength, t = e && new DataView(a.buffer).getUint8(e - 1);
  return t ? Xe(a, 0, e - t) : a;
}
class wa {
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
    const e = this.sBox, t = this.invSBox, s = this.subMix, i = s[0], r = s[1], n = s[2], o = s[3], l = this.invSubMix, c = l[0], d = l[1], u = l[2], h = l[3], f = new Uint32Array(256);
    let g = 0, p = 0, y = 0;
    for (y = 0; y < 256; y++)
      y < 128 ? f[y] = y << 1 : f[y] = y << 1 ^ 283;
    for (y = 0; y < 256; y++) {
      let T = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
      T = T >>> 8 ^ T & 255 ^ 99, e[g] = T, t[T] = g;
      const E = f[g], x = f[E], A = f[x];
      let S = f[T] * 257 ^ T * 16843008;
      i[g] = S << 24 | S >>> 8, r[g] = S << 16 | S >>> 16, n[g] = S << 8 | S >>> 24, o[g] = S, S = A * 16843009 ^ x * 65537 ^ E * 257 ^ g * 16843008, c[T] = S << 24 | S >>> 8, d[T] = S << 16 | S >>> 16, u[T] = S << 8 | S >>> 24, h[T] = S, g ? (g = E ^ f[f[f[A ^ E]]], p ^= f[f[p]]) : g = p = 1;
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
    let o, l;
    const c = this.keySchedule = new Uint32Array(n), d = this.invKeySchedule = new Uint32Array(n), u = this.sBox, h = this.rcon, f = this.invSubMix, g = f[0], p = f[1], y = f[2], T = f[3];
    let E, x;
    for (o = 0; o < n; o++) {
      if (o < r) {
        E = c[o] = t[o];
        continue;
      }
      x = E, o % r === 0 ? (x = x << 8 | x >>> 24, x = u[x >>> 24] << 24 | u[x >>> 16 & 255] << 16 | u[x >>> 8 & 255] << 8 | u[x & 255], x ^= h[o / r | 0] << 24) : r > 6 && o % r === 4 && (x = u[x >>> 24] << 24 | u[x >>> 16 & 255] << 16 | u[x >>> 8 & 255] << 8 | u[x & 255]), c[o] = E = (c[o - r] ^ x) >>> 0;
    }
    for (l = 0; l < n; l++)
      o = n - l, l & 3 ? x = c[o] : x = c[o - 4], l < 4 || o <= 4 ? d[l] = x : d[l] = g[u[x >>> 24]] ^ p[u[x >>> 16 & 255]] ^ y[u[x >>> 8 & 255]] ^ T[u[x & 255]], d[l] = d[l] >>> 0;
  }
  // Adding this as a method greatly improves performance.
  networkToHostOrderSwap(e) {
    return e << 24 | (e & 65280) << 8 | (e & 16711680) >> 8 | e >>> 24;
  }
  decrypt(e, t, s) {
    const i = this.keySize + 6, r = this.invKeySchedule, n = this.invSBox, o = this.invSubMix, l = o[0], c = o[1], d = o[2], u = o[3], h = this.uint8ArrayToUint32Array_(s);
    let f = h[0], g = h[1], p = h[2], y = h[3];
    const T = new Int32Array(e), E = new Int32Array(T.length);
    let x, A, S, k, b, C, w, R, B, O, Y, oe, Q, Z;
    const J = this.networkToHostOrderSwap;
    for (; t < T.length; ) {
      for (B = J(T[t]), O = J(T[t + 1]), Y = J(T[t + 2]), oe = J(T[t + 3]), b = B ^ r[0], C = oe ^ r[1], w = Y ^ r[2], R = O ^ r[3], Q = 4, Z = 1; Z < i; Z++)
        x = l[b >>> 24] ^ c[C >> 16 & 255] ^ d[w >> 8 & 255] ^ u[R & 255] ^ r[Q], A = l[C >>> 24] ^ c[w >> 16 & 255] ^ d[R >> 8 & 255] ^ u[b & 255] ^ r[Q + 1], S = l[w >>> 24] ^ c[R >> 16 & 255] ^ d[b >> 8 & 255] ^ u[C & 255] ^ r[Q + 2], k = l[R >>> 24] ^ c[b >> 16 & 255] ^ d[C >> 8 & 255] ^ u[w & 255] ^ r[Q + 3], b = x, C = A, w = S, R = k, Q = Q + 4;
      x = n[b >>> 24] << 24 ^ n[C >> 16 & 255] << 16 ^ n[w >> 8 & 255] << 8 ^ n[R & 255] ^ r[Q], A = n[C >>> 24] << 24 ^ n[w >> 16 & 255] << 16 ^ n[R >> 8 & 255] << 8 ^ n[b & 255] ^ r[Q + 1], S = n[w >>> 24] << 24 ^ n[R >> 16 & 255] << 16 ^ n[b >> 8 & 255] << 8 ^ n[C & 255] ^ r[Q + 2], k = n[R >>> 24] << 24 ^ n[b >> 16 & 255] << 16 ^ n[C >> 8 & 255] << 8 ^ n[w & 255] ^ r[Q + 3], E[t] = J(x ^ f), E[t + 1] = J(k ^ g), E[t + 2] = J(S ^ p), E[t + 3] = J(A ^ y), f = B, g = O, p = Y, y = oe, t = t + 4;
    }
    return E.buffer;
  }
}
const Pa = 16;
class Ns {
  constructor(e, {
    removePKCS7Padding: t = !0
  } = {}) {
    if (this.logEnabled = !0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.useSoftware = void 0, this.useSoftware = e.enableSoftwareAES, this.removePKCS7Padding = t, t)
      try {
        const s = self.crypto;
        s && (this.subtle = s.subtle || s.webkitSubtle);
      } catch {
      }
    this.subtle === null && (this.useSoftware = !0);
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
    return this.reset(), this.removePKCS7Padding ? ka(s) : s;
  }
  reset() {
    this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null);
  }
  decrypt(e, t, s) {
    return this.useSoftware ? new Promise((i, r) => {
      this.softwareDecrypt(new Uint8Array(e), t, s);
      const n = this.flush();
      n ? i(n.buffer) : r(new Error("[softwareDecrypt] Failed to decrypt data"));
    }) : this.webCryptoDecrypt(new Uint8Array(e), t, s);
  }
  // Software decryption is progressive. Progressive decryption may not return a result on each call. Any cached
  // data is handled in the flush() call
  softwareDecrypt(e, t, s) {
    const {
      currentIV: i,
      currentResult: r,
      remainderData: n
    } = this;
    this.logOnce("JS AES decrypt"), n && (e = Qe(n, e), this.remainderData = null);
    const o = this.getValidChunk(e);
    if (!o.length)
      return null;
    i && (s = i);
    let l = this.softwareDecrypter;
    l || (l = this.softwareDecrypter = new wa()), l.expandKey(t);
    const c = r;
    return this.currentResult = l.decrypt(o.buffer, 0, s), this.currentIV = Xe(o, -16).buffer, c || null;
  }
  webCryptoDecrypt(e, t, s) {
    const i = this.subtle;
    return (this.key !== t || !this.fastAesKey) && (this.key = t, this.fastAesKey = new _a(i, t)), this.fastAesKey.expandKey().then((r) => i ? (this.logOnce("WebCrypto AES decrypt"), new Ca(i, new Uint8Array(s)).decrypt(e.buffer, r)) : Promise.reject(new Error("web crypto not initialized"))).catch((r) => (v.warn(`[decrypter]: WebCrypto Error, disable WebCrypto API, ${r.name}: ${r.message}`), this.onWebCryptoError(e, t, s)));
  }
  onWebCryptoError(e, t, s) {
    this.useSoftware = !0, this.logEnabled = !0, this.softwareDecrypt(e, t, s);
    const i = this.flush();
    if (i)
      return i.buffer;
    throw new Error("WebCrypto and softwareDecrypt: failed to decrypt data");
  }
  getValidChunk(e) {
    let t = e;
    const s = e.length - e.length % Pa;
    return s !== e.length && (t = Xe(e, 0, s), this.remainderData = Xe(e, s)), t;
  }
  logOnce(e) {
    this.logEnabled && (v.log(`[decrypter]: ${e}`), this.logEnabled = !1);
  }
}
const Fa = {
  toString: function(a) {
    let e = "";
    const t = a.length;
    for (let s = 0; s < t; s++)
      e += `[${a.start(s).toFixed(3)}-${a.end(s).toFixed(3)}]`;
    return e;
  }
}, D = {
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
class Us extends Sa {
  constructor(e, t, s, i, r) {
    super(), this.hls = void 0, this.fragPrevious = null, this.fragCurrent = null, this.fragmentTracker = void 0, this.transmuxer = null, this._state = D.STOPPED, this.playlistType = void 0, this.media = null, this.mediaBuffer = null, this.config = void 0, this.bitrateTest = !1, this.lastCurrentTime = 0, this.nextLoadPosition = 0, this.startPosition = 0, this.startTimeOffset = null, this.loadedmetadata = !1, this.retryDate = 0, this.levels = null, this.fragmentLoader = void 0, this.keyLoader = void 0, this.levelLastLoaded = null, this.startFragRequested = !1, this.decrypter = void 0, this.initPTS = [], this.onvseeking = null, this.onvended = null, this.logPrefix = "", this.log = void 0, this.warn = void 0, this.playlistType = r, this.logPrefix = i, this.log = v.log.bind(v, `${i}:`), this.warn = v.warn.bind(v, `${i}:`), this.hls = e, this.fragmentLoader = new Ea(e.config), this.keyLoader = s, this.fragmentTracker = t, this.config = e.config, this.decrypter = new Ns(e.config), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this);
  }
  doTick() {
    this.onTickEnd();
  }
  onTickEnd() {
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  startLoad(e) {
  }
  stopLoad() {
    this.fragmentLoader.abort(), this.keyLoader.abort(this.playlistType);
    const e = this.fragCurrent;
    e != null && e.loader && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = D.STOPPED;
  }
  _streamEnded(e, t) {
    if (t.live || e.nextStart || !e.end || !this.media)
      return !1;
    const s = t.partList;
    if (s != null && s.length) {
      const r = s[s.length - 1];
      return ee.isBuffered(this.media, r.start + r.duration / 2);
    }
    const i = t.fragments[t.fragments.length - 1].type;
    return this.fragmentTracker.isEndListAppended(i);
  }
  getLevelDetails() {
    if (this.levels && this.levelLastLoaded !== null) {
      var e;
      return (e = this.levels[this.levelLastLoaded]) == null ? void 0 : e.details;
    }
  }
  onMediaAttached(e, t) {
    const s = this.media = this.mediaBuffer = t.media;
    this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), s.addEventListener("seeking", this.onvseeking), s.addEventListener("ended", this.onvended);
    const i = this.config;
    this.levels && i.autoStartLoad && this.state === D.STOPPED && this.startLoad(i.startPosition);
  }
  onMediaDetaching() {
    const e = this.media;
    e != null && e.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && this.onvseeking && this.onvended && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.keyLoader && this.keyLoader.detach(), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad();
  }
  onMediaSeeking() {
    const {
      config: e,
      fragCurrent: t,
      media: s,
      mediaBuffer: i,
      state: r
    } = this, n = s ? s.currentTime : 0, o = ee.bufferInfo(i || s, n, e.maxBufferHole);
    if (this.log(`media seeking to ${U(n) ? n.toFixed(3) : n}, state: ${r}`), this.state === D.ENDED)
      this.resetLoadingState();
    else if (t) {
      const l = e.maxFragLookUpTolerance, c = t.start - l, d = t.start + t.duration + l;
      if (!o.len || d < o.start || c > o.end) {
        const u = n > d;
        (n < c || u) && (u && t.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), t.abortRequests(), this.resetLoadingState()), this.fragPrevious = null);
      }
    }
    s && (this.fragmentTracker.removeFragmentsInRange(n, 1 / 0, this.playlistType, !0), this.lastCurrentTime = n), !this.loadedmetadata && !o.len && (this.nextLoadPosition = this.startPosition = n), this.tickImmediate();
  }
  onMediaEnded() {
    this.startPosition = this.lastCurrentTime = 0;
  }
  onManifestLoaded(e, t) {
    this.startTimeOffset = t.startTimeOffset, this.initPTS = [];
  }
  onHandlerDestroying() {
    this.stopLoad(), super.onHandlerDestroying();
  }
  onHandlerDestroyed() {
    this.state = D.STOPPED, this.fragmentLoader && this.fragmentLoader.destroy(), this.keyLoader && this.keyLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.keyLoader = this.fragmentLoader = this.fragmentTracker = null, super.onHandlerDestroyed();
  }
  loadFragment(e, t, s) {
    this._loadFragForPlayback(e, t, s);
  }
  _loadFragForPlayback(e, t, s) {
    const i = (r) => {
      if (this.fragContextChanged(e)) {
        this.warn(`Fragment ${e.sn}${r.part ? " p: " + r.part.index : ""} of level ${e.level} was dropped during download.`), this.fragmentTracker.removeFragment(e);
        return;
      }
      e.stats.chunkCount++, this._handleFragmentLoadProgress(r);
    };
    this._doFragLoad(e, t, s, i).then((r) => {
      if (!r)
        return;
      const n = this.state;
      if (this.fragContextChanged(e)) {
        (n === D.FRAG_LOADING || !this.fragCurrent && n === D.PARSING) && (this.fragmentTracker.removeFragment(e), this.state = D.IDLE);
        return;
      }
      "payload" in r && (this.log(`Loaded fragment ${e.sn} of level ${e.level}`), this.hls.trigger(m.FRAG_LOADED, r)), this._handleFragmentLoadComplete(r);
    }).catch((r) => {
      this.state === D.STOPPED || this.state === D.ERROR || (this.warn(r), this.resetFragmentLoading(e));
    });
  }
  clearTrackerIfNeeded(e) {
    var t;
    const {
      fragmentTracker: s
    } = this;
    if (s.getState(e) === ae.APPENDING) {
      const r = e.type, n = this.getFwdBufferInfo(this.mediaBuffer, r), o = Math.max(e.duration, n ? n.len : this.config.maxBufferLength);
      this.reduceMaxBufferLength(o) && s.removeFragment(e);
    } else
      ((t = this.mediaBuffer) == null ? void 0 : t.buffered.length) === 0 ? s.removeAllFragments() : s.hasParts(e.type) && (s.detectPartialFragments({
        frag: e,
        part: null,
        stats: e.stats,
        id: e.type
      }), s.getState(e) === ae.PARTIAL && s.removeFragment(e));
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
      if (!s || this.fragContextChanged(e) || !this.levels)
        throw new Error("init load aborted");
      return s;
    }).then((s) => {
      const {
        hls: i
      } = this, {
        payload: r
      } = s, n = e.decryptdata;
      if (r && r.byteLength > 0 && n && n.key && n.iv && n.method === "AES-128") {
        const o = self.performance.now();
        return this.decrypter.decrypt(new Uint8Array(r), n.key.buffer, n.iv.buffer).catch((l) => {
          throw i.trigger(m.ERROR, {
            type: G.MEDIA_ERROR,
            details: I.FRAG_DECRYPT_ERROR,
            fatal: !1,
            error: l,
            reason: l.message,
            frag: e
          }), l;
        }).then((l) => {
          const c = self.performance.now();
          return i.trigger(m.FRAG_DECRYPTED, {
            frag: e,
            payload: l,
            stats: {
              tstart: o,
              tdecrypt: c
            }
          }), s.payload = l, s;
        });
      }
      return s;
    }).then((s) => {
      const {
        fragCurrent: i,
        hls: r,
        levels: n
      } = this;
      if (!n)
        throw new Error("init load aborted, missing levels");
      const o = e.stats;
      this.state = D.IDLE, t.fragmentError = 0, e.data = new Uint8Array(s.payload), o.parsing.start = o.buffering.start = self.performance.now(), o.parsing.end = o.buffering.end = self.performance.now(), s.frag === i && r.trigger(m.FRAG_BUFFERED, {
        stats: o,
        frag: i,
        part: null,
        id: e.type
      }), this.tick();
    }).catch((s) => {
      this.state === D.STOPPED || this.state === D.ERROR || (this.warn(s), this.resetFragmentLoading(e));
    });
  }
  fragContextChanged(e) {
    const {
      fragCurrent: t
    } = this;
    return !e || !t || e.level !== t.level || e.sn !== t.sn || e.urlId !== t.urlId;
  }
  fragBufferedComplete(e, t) {
    var s, i, r, n;
    const o = this.mediaBuffer ? this.mediaBuffer : this.media;
    this.log(`Buffered ${e.type} sn: ${e.sn}${t ? " part: " + t.index : ""} of ${this.playlistType === V.MAIN ? "level" : "track"} ${e.level} (frag:[${((s = e.startPTS) != null ? s : NaN).toFixed(3)}-${((i = e.endPTS) != null ? i : NaN).toFixed(3)}] > buffer:${o ? Fa.toString(ee.getBuffered(o)) : "(detached)"})`), this.state = D.IDLE, o && (!this.loadedmetadata && e.type == V.MAIN && o.buffered.length && ((r = this.fragCurrent) == null ? void 0 : r.sn) === ((n = this.fragPrevious) == null ? void 0 : n.sn) && (this.loadedmetadata = !0, this.seekToStartPos()), this.tick());
  }
  seekToStartPos() {
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
    } = e, n = !r || r.length === 0 || r.some((l) => !l), o = new Os(s.level, s.sn, s.stats.chunkCount + 1, 0, i ? i.index : -1, !n);
    t.flush(o);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _handleFragmentLoadProgress(e) {
  }
  _doFragLoad(e, t, s = null, i) {
    var r;
    const n = t == null ? void 0 : t.details;
    if (!this.levels || !n)
      throw new Error(`frag load aborted, missing level${n ? "" : " detail"}s`);
    let o = null;
    if (e.encrypted && !((r = e.decryptdata) != null && r.key) ? (this.log(`Loading key for ${e.sn} of [${n.startSN}-${n.endSN}], ${this.logPrefix === "[stream-controller]" ? "level" : "track"} ${e.level}`), this.state = D.KEY_LOADING, this.fragCurrent = e, o = this.keyLoader.load(e).then((d) => {
      if (!this.fragContextChanged(d.frag))
        return this.hls.trigger(m.KEY_LOADED, d), this.state === D.KEY_LOADING && (this.state = D.IDLE), d;
    }), this.hls.trigger(m.KEY_LOADING, {
      frag: e
    }), this.fragCurrent === null && (o = Promise.reject(new Error("frag load aborted, context changed in KEY_LOADING")))) : !e.encrypted && n.encryptedFragments.length && this.keyLoader.loadClear(e, n.encryptedFragments), s = Math.max(e.start, s || 0), this.config.lowLatencyMode && e.sn !== "initSegment") {
      const d = n.partList;
      if (d && i) {
        s > e.end && n.fragmentHint && (e = n.fragmentHint);
        const u = this.getNextPart(d, e, s);
        if (u > -1) {
          const h = d[u];
          this.log(`Loading part sn: ${e.sn} p: ${h.index} cc: ${e.cc} of playlist [${n.startSN}-${n.endSN}] parts [0-${u}-${d.length - 1}] ${this.logPrefix === "[stream-controller]" ? "level" : "track"}: ${e.level}, target: ${parseFloat(s.toFixed(3))}`), this.nextLoadPosition = h.start + h.duration, this.state = D.FRAG_LOADING;
          let f;
          return o ? f = o.then((g) => !g || this.fragContextChanged(g.frag) ? null : this.doFragPartsLoad(e, h, t, i)).catch((g) => this.handleFragLoadError(g)) : f = this.doFragPartsLoad(e, h, t, i).catch((g) => this.handleFragLoadError(g)), this.hls.trigger(m.FRAG_LOADING, {
            frag: e,
            part: h,
            targetBufferTime: s
          }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING parts")) : f;
        } else if (!e.url || this.loadedEndOfParts(d, s))
          return Promise.resolve(null);
      }
    }
    this.log(`Loading fragment ${e.sn} cc: ${e.cc} ${n ? "of [" + n.startSN + "-" + n.endSN + "] " : ""}${this.logPrefix === "[stream-controller]" ? "level" : "track"}: ${e.level}, target: ${parseFloat(s.toFixed(3))}`), U(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = D.FRAG_LOADING;
    const l = this.config.progressive;
    let c;
    return l && o ? c = o.then((d) => !d || this.fragContextChanged(d == null ? void 0 : d.frag) ? null : this.fragmentLoader.load(e, i)).catch((d) => this.handleFragLoadError(d)) : c = Promise.all([this.fragmentLoader.load(e, l ? i : void 0), o]).then(([d]) => (!l && d && i && i(d), d)).catch((d) => this.handleFragLoadError(d)), this.hls.trigger(m.FRAG_LOADING, {
      frag: e,
      targetBufferTime: s
    }), this.fragCurrent === null ? Promise.reject(new Error("frag load aborted, context changed in FRAG_LOADING")) : c;
  }
  doFragPartsLoad(e, t, s, i) {
    return new Promise((r, n) => {
      var o;
      const l = [], c = (o = s.details) == null ? void 0 : o.partList, d = (u) => {
        this.fragmentLoader.loadPart(e, u, i).then((h) => {
          l[u.index] = h;
          const f = h.part;
          this.hls.trigger(m.FRAG_LOADED, h);
          const g = fi(s, e.sn, u.index + 1) || mr(c, e.sn, u.index + 1);
          if (g)
            d(g);
          else
            return r({
              frag: e,
              part: f,
              partsLoaded: l
            });
        }).catch(n);
      };
      d(t);
    });
  }
  handleFragLoadError(e) {
    if ("data" in e) {
      const t = e.data;
      e.data && t.details === I.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : this.hls.trigger(m.ERROR, t);
    } else
      this.hls.trigger(m.ERROR, {
        type: G.OTHER_ERROR,
        details: I.INTERNAL_EXCEPTION,
        err: e,
        error: e,
        fatal: !0
      });
    return null;
  }
  _handleTransmuxerFlush(e) {
    const t = this.getCurrentContext(e);
    if (!t || this.state !== D.PARSING) {
      !this.fragCurrent && this.state !== D.STOPPED && this.state !== D.ERROR && (this.state = D.IDLE);
      return;
    }
    const {
      frag: s,
      part: i,
      level: r
    } = t, n = self.performance.now();
    s.stats.parsing.end = n, i && (i.stats.parsing.end = n), this.updateLevelTiming(s, i, r, e.partial);
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
      return this.warn(`Levels object was unset while buffering fragment ${r} of level ${i}. The current chunk will not be buffered.`), null;
    const o = t[i], l = n > -1 ? fi(o, r, n) : null, c = l ? l.fragment : da(o, r, s);
    return c ? (s && s !== c && (c.stats = s.stats), {
      frag: c,
      part: l,
      level: o
    }) : null;
  }
  bufferFragmentData(e, t, s, i, r) {
    var n;
    if (!e || this.state !== D.PARSING)
      return;
    const {
      data1: o,
      data2: l
    } = e;
    let c = o;
    if (o && l && (c = Qe(o, l)), !((n = c) != null && n.length))
      return;
    const d = {
      type: e.type,
      frag: t,
      part: s,
      chunkMeta: i,
      parent: t.type,
      data: c
    };
    if (this.hls.trigger(m.BUFFER_APPENDING, d), e.dropped && e.independent && !s) {
      if (r)
        return;
      this.flushBufferGap(t);
    }
  }
  flushBufferGap(e) {
    const t = this.media;
    if (!t)
      return;
    if (!ee.isBuffered(t, t.currentTime)) {
      this.flushMainBuffer(0, e.start);
      return;
    }
    const s = t.currentTime, i = ee.bufferInfo(t, s, 0), r = e.duration, n = Math.min(this.config.maxFragLookUpTolerance * 2, r * 0.25), o = Math.max(Math.min(e.start - n, i.end - n), s + n);
    e.start - o > n && this.flushMainBuffer(o, e.start);
  }
  getFwdBufferInfo(e, t) {
    const s = this.getLoadPosition();
    return U(s) ? this.getFwdBufferInfoAtPos(e, s, t) : null;
  }
  getFwdBufferInfoAtPos(e, t, s) {
    const {
      config: {
        maxBufferHole: i
      }
    } = this, r = ee.bufferInfo(e, t, i);
    if (r.len === 0 && r.nextStart !== void 0) {
      const n = this.fragmentTracker.getBufferedFrag(t, s);
      if (n && r.nextStart < n.end)
        return ee.bufferInfo(e, t, Math.max(r.nextStart, i));
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
  reduceMaxBufferLength(e) {
    const t = this.config, s = e || t.maxBufferLength;
    return t.maxMaxBufferLength >= s ? (t.maxMaxBufferLength /= 2, this.warn(`Reduce max buffer length to ${t.maxMaxBufferLength}s`), !0) : !1;
  }
  getAppendedFrag(e, t = V.MAIN) {
    const s = this.fragmentTracker.getAppendedFrag(e, V.MAIN);
    return s && "fragment" in s ? s.fragment : s;
  }
  getNextFragment(e, t) {
    const s = t.fragments, i = s.length;
    if (!i)
      return null;
    const {
      config: r
    } = this, n = s[0].start;
    let o;
    if (t.live) {
      const l = r.initialLiveManifestSize;
      if (i < l)
        return this.warn(`Not enough fragments to start playback (have: ${i}, need: ${l})`), null;
      !t.PTSKnown && !this.startFragRequested && this.startPosition === -1 && (o = this.getInitialLiveFragment(t, s), this.startPosition = o ? this.hls.liveSyncPosition || o.start : e);
    } else
      e <= n && (o = s[0]);
    if (!o) {
      const l = r.lowLatencyMode ? t.partEnd : t.fragmentEnd;
      o = this.getFragmentAtPosition(e, l, t);
    }
    return this.mapToInitFragWhenRequired(o);
  }
  isLoopLoading(e, t) {
    const s = this.fragmentTracker.getState(e);
    return (s === ae.OK || s === ae.PARTIAL && !!e.gap) && this.nextLoadPosition > t;
  }
  getNextFragmentLoopLoading(e, t, s, i, r) {
    const n = e.gap, o = this.getNextFragment(this.nextLoadPosition, t);
    if (o === null)
      return o;
    if (e = o, n && e && !e.gap && s.nextStart) {
      const l = this.getFwdBufferInfoAtPos(this.mediaBuffer ? this.mediaBuffer : this.media, s.nextStart, i);
      if (l !== null && s.len + l.len >= r)
        return this.log(`buffer full after gaps in "${i}" playlist starting at sn: ${e.sn}`), null;
    }
    return e;
  }
  mapToInitFragWhenRequired(e) {
    return e != null && e.initSegment && !(e != null && e.initSegment.data) && !this.bitrateTest ? e.initSegment : e;
  }
  getNextPart(e, t, s) {
    let i = -1, r = !1, n = !0;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o];
      if (n = n && !c.independent, i > -1 && s < c.start)
        break;
      const d = c.loaded;
      d ? i = -1 : (r || c.independent || n) && c.fragment === t && (i = o), r = d;
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
      if (e.hasProgramDateTime && (this.log(`Live playlist, switching playlist, load frag with same PDT: ${s.programDateTime}`), i = ha(t, s.endProgramDateTime, this.config.maxFragLookUpTolerance)), !i) {
        const r = s.sn + 1;
        if (r >= e.startSN && r <= e.endSN) {
          const n = t[r - e.startSN];
          s.cc === n.cc && (i = n, this.log(`Live playlist, switching playlist, load frag with next SN: ${i.sn}`));
        }
        i || (i = ga(t, s.cc), i && this.log(`Live playlist, switching playlist, load frag with same CC: ${i.sn}`));
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
      fragmentHint: l
    } = s, c = i.maxFragLookUpTolerance, d = s.partList, u = !!(i.lowLatencyMode && d != null && d.length && l);
    u && l && !this.bitrateTest && (n = n.concat(l), o = l.sn);
    let h;
    if (e < t) {
      const f = e > t - c ? 0 : c;
      h = ft(r, n, e, f);
    } else
      h = n[n.length - 1];
    if (h) {
      const f = h.sn - s.startSN, g = this.fragmentTracker.getState(h);
      if ((g === ae.OK || g === ae.PARTIAL && h.gap) && (r = h), r && h.sn === r.sn && (!u || d[0].fragment.sn > h.sn) && r && h.level === r.level) {
        const y = n[f + 1];
        h.sn < o && this.fragmentTracker.getState(y) !== ae.OK ? h = y : h = null;
      }
    }
    return h;
  }
  synchronizeToLiveEdge(e) {
    const {
      config: t,
      media: s
    } = this;
    if (!s)
      return;
    const i = this.hls.liveSyncPosition, r = s.currentTime, n = e.fragments[0].start, o = e.edge, l = r >= n - t.maxFragLookUpTolerance && r <= o;
    if (i !== null && s.duration > i && (r < i || !l)) {
      const c = t.liveMaxLatencyDuration !== void 0 ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
      (!l && s.readyState < 4 || r < o - c) && (this.loadedmetadata || (this.nextLoadPosition = i), s.readyState && (this.warn(`Playback: ${r.toFixed(3)} is located too far from the end of live sliding playlist: ${o}, reset currentTime to : ${i.toFixed(3)}`), s.currentTime = i));
    }
  }
  alignPlaylists(e, t) {
    const {
      levels: s,
      levelLastLoaded: i,
      fragPrevious: r
    } = this, n = i !== null ? s[i] : null, o = e.fragments.length;
    if (!o)
      return this.warn("No fragments in live playlist"), 0;
    const l = e.fragments[0].start, c = !t, d = e.alignedSliding && U(l);
    if (c || !d && !l) {
      Ra(r, n, e);
      const u = e.fragments[0].start;
      return this.log(`Live playlist sliding: ${u.toFixed(2)} start-sn: ${t ? t.startSN : "na"}->${e.startSN} prev-sn: ${r ? r.sn : "na"} fragments: ${o}`), u;
    }
    return l;
  }
  waitForCdnTuneIn(e) {
    return e.live && e.canBlockReload && e.partTarget && e.tuneInGoal > Math.max(e.partHoldBack, e.partTarget * 3);
  }
  setStartPosition(e, t) {
    let s = this.startPosition;
    if (s < t && (s = -1), s === -1 || this.lastCurrentTime === -1) {
      const i = this.startTimeOffset !== null, r = i ? this.startTimeOffset : e.startTimeOffset;
      r !== null && U(r) ? (s = t + r, r < 0 && (s += e.totalduration), s = Math.min(Math.max(t, s), t + e.totalduration), this.log(`Start time offset ${r} found in ${i ? "multivariant" : "media"} playlist, adjust startPosition to ${s}`), this.startPosition = s) : e.live ? s = this.hls.liveSyncPosition || t : this.startPosition = s = 0, this.lastCurrentTime = s;
    }
    this.nextLoadPosition = s;
  }
  getLoadPosition() {
    const {
      media: e
    } = this;
    let t = 0;
    return this.loadedmetadata && e ? t = e.currentTime : this.nextLoadPosition && (t = this.nextLoadPosition), t;
  }
  handleFragLoadAborted(e, t) {
    this.transmuxer && e.sn !== "initSegment" && e.stats.aborted && (this.warn(`Fragment ${e.sn}${t ? " part " + t.index : ""} of level ${e.level} was aborted`), this.resetFragmentLoading(e));
  }
  resetFragmentLoading(e) {
    (!this.fragCurrent || !this.fragContextChanged(e) && this.state !== D.FRAG_LOADING_WAITING_RETRY) && (this.state = D.IDLE);
  }
  onFragmentOrKeyLoadError(e, t) {
    if (t.chunkMeta && !t.frag) {
      const u = this.getCurrentContext(t.chunkMeta);
      u && (t.frag = u.frag);
    }
    const s = t.frag;
    if (!s || s.type !== e || !this.levels)
      return;
    if (this.fragContextChanged(s)) {
      var i;
      this.warn(`Frag load error must match current frag to retry ${s.url} > ${(i = this.fragCurrent) == null ? void 0 : i.url}`);
      return;
    }
    const r = t.details === I.FRAG_GAP;
    r && this.fragmentTracker.fragBuffered(s, !0);
    const n = t.errorAction, {
      action: o,
      retryCount: l = 0,
      retryConfig: c
    } = n || {};
    if (n && o === de.RetryRequest && c) {
      var d;
      this.resetStartWhenNotLoaded((d = this.levelLastLoaded) != null ? d : s.level);
      const u = Ps(c, l);
      this.warn(`Fragment ${s.sn} of ${e} ${s.level} errored with ${t.details}, retrying loading ${l + 1}/${c.maxNumRetry} in ${u}ms`), n.resolved = !0, this.retryDate = self.performance.now() + u, this.state = D.FRAG_LOADING_WAITING_RETRY;
    } else
      c && n ? (this.resetFragmentErrors(e), l < c.maxNumRetry ? r || (n.resolved = !0) : v.warn(`${t.details} reached or exceeded max retry (${l})`)) : (n == null ? void 0 : n.action) === de.SendAlternateToPenaltyBox ? this.state = D.WAITING_LEVEL : this.state = D.ERROR;
    this.tickImmediate();
  }
  reduceLengthAndFlushBuffer(e) {
    if (this.state === D.PARSING || this.state === D.PARSED) {
      const t = e.parent, s = this.getFwdBufferInfo(this.mediaBuffer, t), i = s && s.len > 0.5;
      i && this.reduceMaxBufferLength(s.len);
      const r = !i;
      return r && this.warn(`Buffer full error while media.currentTime is not buffered, flush ${t} buffer`), e.frag && (this.fragmentTracker.removeFragment(e.frag), this.nextLoadPosition = e.frag.start), this.resetLoadingState(), r;
    }
    return !1;
  }
  resetFragmentErrors(e) {
    e === V.AUDIO && (this.fragCurrent = null), this.loadedmetadata || (this.startFragRequested = !1), this.state !== D.STOPPED && (this.state = D.IDLE);
  }
  afterBufferFlushed(e, t, s) {
    if (!e)
      return;
    const i = ee.getBuffered(e);
    this.fragmentTracker.detectEvictedFragments(t, i, s), this.state === D.ENDED && this.resetLoadingState();
  }
  resetLoadingState() {
    this.log("Reset loading state"), this.fragCurrent = null, this.fragPrevious = null, this.state = D.IDLE;
  }
  resetStartWhenNotLoaded(e) {
    if (!this.loadedmetadata) {
      this.startFragRequested = !1;
      const t = this.levels ? this.levels[e].details : null;
      t != null && t.live ? (this.startPosition = -1, this.setStartPosition(t, 0), this.resetLoadingState()) : this.nextLoadPosition = this.startPosition;
    }
  }
  resetWhenMissingContext(e) {
    var t;
    this.warn(`The loading context changed while buffering fragment ${e.sn} of level ${e.level}. This chunk will not be buffered.`), this.removeUnbufferedFrags(), this.resetStartWhenNotLoaded((t = this.levelLastLoaded) != null ? t : e.level), this.resetLoadingState();
  }
  removeUnbufferedFrags(e = 0) {
    this.fragmentTracker.removeFragmentsInRange(e, 1 / 0, this.playlistType, !1, !0);
  }
  updateLevelTiming(e, t, s, i) {
    var r;
    const n = s.details;
    if (!n) {
      this.warn("level.details undefined");
      return;
    }
    if (Object.keys(e.elementaryStreams).reduce((l, c) => {
      const d = e.elementaryStreams[c];
      if (d) {
        const u = d.endPTS - d.startPTS;
        if (u <= 0)
          return this.warn(`Could not parse fragment ${e.sn} ${c} duration reliably (${u})`), l || !1;
        const h = i ? 0 : fr(n, e, d.startPTS, d.endPTS, d.startDTS, d.endDTS);
        return this.hls.trigger(m.LEVEL_PTS_UPDATED, {
          details: n,
          level: s,
          drift: h,
          type: c,
          frag: e,
          start: d.startPTS,
          end: d.endPTS
        }), !0;
      }
      return l;
    }, !1))
      s.fragmentError = 0;
    else if (((r = this.transmuxer) == null ? void 0 : r.error) === null) {
      const l = new Error(`Found no media in fragment ${e.sn} of level ${e.level} resetting transmuxer to fallback to playlist timing`);
      if (s.fragmentError === 0 && (s.fragmentError++, e.gap = !0, this.fragmentTracker.removeFragment(e), this.fragmentTracker.fragBuffered(e, !0)), this.warn(l.message), this.hls.trigger(m.ERROR, {
        type: G.MEDIA_ERROR,
        details: I.FRAG_PARSING_ERROR,
        fatal: !1,
        error: l,
        frag: e,
        reason: `Found no media in msn ${e.sn} of level "${s.url}"`
      }), !this.hls)
        return;
      this.resetTransmuxer();
    }
    this.state = D.PARSED, this.hls.trigger(m.FRAG_PARSED, {
      frag: e,
      part: t
    });
  }
  resetTransmuxer() {
    this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null);
  }
  recoverWorkerError(e) {
    if (e.event === "demuxerWorker") {
      var t, s, i;
      this.fragmentTracker.removeAllFragments(), this.resetTransmuxer(), this.resetStartWhenNotLoaded((t = (s = this.levelLastLoaded) != null ? s : (i = this.fragCurrent) == null ? void 0 : i.level) != null ? t : 0), this.resetLoadingState();
    }
  }
  set state(e) {
    const t = this._state;
    t !== e && (this._state = e, this.log(`${t}->${e}`));
  }
  get state() {
    return this._state;
  }
}
function xr() {
  return self.SourceBuffer || self.WebKitSourceBuffer;
}
function Oa() {
  const a = Gt();
  if (!a)
    return !1;
  const e = xr(), t = a && typeof a.isTypeSupported == "function" && a.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), s = !e || e.prototype && typeof e.prototype.appendBuffer == "function" && typeof e.prototype.remove == "function";
  return !!t && !!s;
}
function Ma() {
  var a;
  const e = xr();
  return typeof (e == null || (a = e.prototype) == null ? void 0 : a.changeType) == "function";
}
function Na() {
  return typeof __HLS_WORKER_BUNDLE__ == "function";
}
function Ua() {
  const a = new self.Blob([`var exports={};var module={exports:exports};function define(f){f()};define.amd=true;(${__HLS_WORKER_BUNDLE__.toString()})(true);`], {
    type: "text/javascript"
  }), e = self.URL.createObjectURL(a);
  return {
    worker: new self.Worker(e),
    objectURL: e
  };
}
function Ba(a) {
  const e = new self.URL(a, self.location.href).href;
  return {
    worker: new self.Worker(e),
    scriptURL: e
  };
}
function _e(a = "", e = 9e4) {
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
class Er {
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
    this.cachedData && (e = Qe(this.cachedData, e), this.cachedData = null);
    let s = kt(e, 0), i = s ? s.length : 0, r;
    const n = this._audioTrack, o = this._id3Track, l = s ? vn(s) : void 0, c = e.length;
    for ((this.basePTS === null || this.frameIndex === 0 && U(l)) && (this.basePTS = $a(l, t, this.initPTS), this.lastPTS = this.basePTS), this.lastPTS === null && (this.lastPTS = this.basePTS), s && s.length > 0 && o.samples.push({
      pts: this.lastPTS,
      dts: this.lastPTS,
      data: s,
      type: Re.audioId3,
      duration: Number.POSITIVE_INFINITY
    }); i < c; ) {
      if (this.canParse(e, i)) {
        const d = this.appendFrame(n, e, i);
        d ? (this.frameIndex++, this.lastPTS = d.sample.pts, i += d.length, r = i) : i = c;
      } else
        En(e, i) ? (s = kt(e, i), o.samples.push({
          pts: this.lastPTS,
          dts: this.lastPTS,
          data: s,
          type: Re.audioId3,
          duration: Number.POSITIVE_INFINITY
        }), i += s.length, r = i) : i++;
      if (i === c && r !== c) {
        const d = Xe(e, r);
        this.cachedData ? this.cachedData = Qe(this.cachedData, d) : this.cachedData = d;
      }
    }
    return {
      audioTrack: n,
      videoTrack: _e(),
      id3Track: o,
      textTrack: _e()
    };
  }
  demuxSampleAes(e, t, s) {
    return Promise.reject(new Error(`[${this}] This demuxer does not support Sample-AES decryption`));
  }
  flush(e) {
    const t = this.cachedData;
    return t && (this.cachedData = null, this.demux(t, 0)), {
      audioTrack: this._audioTrack,
      videoTrack: _e(),
      id3Track: this._id3Track,
      textTrack: _e()
    };
  }
  destroy() {
  }
}
const $a = (a, e, t) => {
  if (U(a))
    return a * 90;
  const s = t ? t.baseTime * 9e4 / t.timescale : 0;
  return e * 9e4 + s;
};
function Ga(a, e, t, s) {
  let i, r, n, o;
  const l = navigator.userAgent.toLowerCase(), c = s, d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
  i = ((e[t + 2] & 192) >>> 6) + 1;
  const u = (e[t + 2] & 60) >>> 2;
  if (u > d.length - 1) {
    a.trigger(m.ERROR, {
      type: G.MEDIA_ERROR,
      details: I.FRAG_PARSING_ERROR,
      fatal: !0,
      reason: `invalid ADTS sampling index:${u}`
    });
    return;
  }
  return n = (e[t + 2] & 1) << 2, n |= (e[t + 3] & 192) >>> 6, v.log(`manifest codec:${s}, ADTS type:${i}, samplingIndex:${u}`), /firefox/i.test(l) ? u >= 6 ? (i = 5, o = new Array(4), r = u - 3) : (i = 2, o = new Array(2), r = u) : l.indexOf("android") !== -1 ? (i = 2, o = new Array(2), r = u) : (i = 5, o = new Array(4), s && (s.indexOf("mp4a.40.29") !== -1 || s.indexOf("mp4a.40.5") !== -1) || !s && u >= 6 ? r = u - 3 : ((s && s.indexOf("mp4a.40.2") !== -1 && (u >= 6 && n === 1 || /vivaldi/i.test(l)) || !s && n === 1) && (i = 2, o = new Array(2)), r = u)), o[0] = i << 3, o[0] |= (u & 14) >> 1, o[1] |= (u & 1) << 7, o[1] |= n << 3, i === 5 && (o[1] |= (r & 14) >> 1, o[2] = (r & 1) << 7, o[2] |= 8, o[3] = 0), {
    config: o,
    samplerate: d[u],
    channelCount: n,
    codec: "mp4a.40." + i,
    manifestCodec: c
  };
}
function vr(a, e) {
  return a[e] === 255 && (a[e + 1] & 246) === 240;
}
function Sr(a, e) {
  return a[e + 1] & 1 ? 7 : 9;
}
function Bs(a, e) {
  return (a[e + 3] & 3) << 11 | a[e + 4] << 3 | (a[e + 5] & 224) >>> 5;
}
function Va(a, e) {
  return e + 5 < a.length;
}
function Mt(a, e) {
  return e + 1 < a.length && vr(a, e);
}
function Ka(a, e) {
  return Va(a, e) && vr(a, e) && Bs(a, e) <= a.length - e;
}
function Ha(a, e) {
  if (Mt(a, e)) {
    const t = Sr(a, e);
    if (e + t >= a.length)
      return !1;
    const s = Bs(a, e);
    if (s <= t)
      return !1;
    const i = e + s;
    return i === a.length || Mt(a, i);
  }
  return !1;
}
function Lr(a, e, t, s, i) {
  if (!a.samplerate) {
    const r = Ga(e, t, s, i);
    if (!r)
      return;
    a.config = r.config, a.samplerate = r.samplerate, a.channelCount = r.channelCount, a.codec = r.codec, a.manifestCodec = r.manifestCodec, v.log(`parsed codec:${a.codec}, rate:${r.samplerate}, channels:${r.channelCount}`);
  }
}
function Ar(a) {
  return 1024 * 9e4 / a;
}
function Wa(a, e) {
  const t = Sr(a, e);
  if (e + t <= a.length) {
    const s = Bs(a, e) - t;
    if (s > 0)
      return {
        headerLength: t,
        frameLength: s
      };
  }
}
function Ir(a, e, t, s, i) {
  const r = Ar(a.samplerate), n = s + i * r, o = Wa(e, t);
  let l;
  if (o) {
    const {
      frameLength: u,
      headerLength: h
    } = o, f = h + u, g = Math.max(0, t + f - e.length);
    g ? (l = new Uint8Array(f - h), l.set(e.subarray(t + h, e.length), 0)) : l = e.subarray(t + h, t + f);
    const p = {
      unit: l,
      pts: n
    };
    return g || a.samples.push(p), {
      sample: p,
      length: f,
      missing: g
    };
  }
  const c = e.length - t;
  return l = new Uint8Array(c), l.set(e.subarray(t, e.length), 0), {
    sample: {
      unit: l,
      pts: n
    },
    length: c,
    missing: -1
  };
}
class Ya extends Er {
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
  static probe(e) {
    if (!e)
      return !1;
    let s = (kt(e, 0) || []).length;
    for (let i = e.length; s < i; s++)
      if (Ha(e, s))
        return v.log("ADTS sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return Ka(e, t);
  }
  appendFrame(e, t, s) {
    Lr(e, this.observer, t, s, e.manifestCodec);
    const i = Ir(e, t, s, this.basePTS, this.frameIndex);
    if (i && i.missing === 0)
      return i;
  }
}
const qa = /\/emsg[-/]ID3/i;
class za {
  constructor(e, t) {
    this.remainderData = null, this.timeOffset = 0, this.config = void 0, this.videoTrack = void 0, this.audioTrack = void 0, this.id3Track = void 0, this.txtTrack = void 0, this.config = t;
  }
  resetTimeStamp() {
  }
  resetInitSegment(e, t, s, i) {
    const r = this.videoTrack = _e("video", 1), n = this.audioTrack = _e("audio", 1), o = this.txtTrack = _e("text", 1);
    if (this.id3Track = _e("id3", 1), this.timeOffset = 0, !(e != null && e.byteLength))
      return;
    const l = ar(e);
    if (l.video) {
      const {
        id: c,
        timescale: d,
        codec: u
      } = l.video;
      r.id = c, r.timescale = o.timescale = d, r.codec = u;
    }
    if (l.audio) {
      const {
        id: c,
        timescale: d,
        codec: u
      } = l.audio;
      n.id = c, n.timescale = d, n.codec = u;
    }
    o.id = ir.text, r.sampleDuration = 0, r.duration = n.duration = i;
  }
  resetContiguity() {
    this.remainderData = null;
  }
  static probe(e) {
    return e = e.length > 16384 ? e.subarray(0, 16384) : e, H(e, ["moof"]).length > 0;
  }
  demux(e, t) {
    this.timeOffset = t;
    let s = e;
    const i = this.videoTrack, r = this.txtTrack;
    if (this.config.progressive) {
      this.remainderData && (s = Qe(this.remainderData, e));
      const o = Mn(s);
      this.remainderData = o.remainder, i.samples = o.valid || new Uint8Array();
    } else
      i.samples = s;
    const n = this.extractID3Track(i, t);
    return r.samples = Qs(t, i), {
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
    return s.samples = Qs(e, t), {
      videoTrack: t,
      audioTrack: _e(),
      id3Track: i,
      textTrack: _e()
    };
  }
  extractID3Track(e, t) {
    const s = this.id3Track;
    if (e.samples.length) {
      const i = H(e.samples, ["emsg"]);
      i && i.forEach((r) => {
        const n = Bn(r);
        if (qa.test(n.schemeIdUri)) {
          const o = U(n.presentationTime) ? n.presentationTime / n.timeScale : t + n.presentationTimeDelta / n.timeScale;
          let l = n.eventDuration === 4294967295 ? Number.POSITIVE_INFINITY : n.eventDuration / n.timeScale;
          l <= 1e-3 && (l = Number.POSITIVE_INFINITY);
          const c = n.payload;
          s.samples.push({
            data: c,
            len: c.byteLength,
            dts: o,
            pts: o,
            type: Re.emsg,
            duration: l
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
  }
}
let vt = null;
const ja = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160], Xa = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3], Qa = [
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
], Ja = [
  0,
  // Reserved
  1,
  // Layer3
  1,
  // Layer2
  4
  // Layer1
];
function Rr(a, e, t, s, i) {
  if (t + 24 > e.length)
    return;
  const r = br(e, t);
  if (r && t + r.frameLength <= e.length) {
    const n = r.samplesPerFrame * 9e4 / r.sampleRate, o = s + i * n, l = {
      unit: e.subarray(t, t + r.frameLength),
      pts: o,
      dts: o
    };
    return a.config = [], a.channelCount = r.channelCount, a.samplerate = r.sampleRate, a.samples.push(l), {
      sample: l,
      length: r.frameLength,
      missing: 0
    };
  }
}
function br(a, e) {
  const t = a[e + 1] >> 3 & 3, s = a[e + 1] >> 1 & 3, i = a[e + 2] >> 4 & 15, r = a[e + 2] >> 2 & 3;
  if (t !== 1 && i !== 0 && i !== 15 && r !== 3) {
    const n = a[e + 2] >> 1 & 1, o = a[e + 3] >> 6, l = t === 3 ? 3 - s : s === 3 ? 3 : 4, c = ja[l * 14 + i - 1] * 1e3, u = Xa[(t === 3 ? 0 : t === 2 ? 1 : 2) * 3 + r], h = o === 3 ? 1 : 2, f = Qa[t][s], g = Ja[s], p = f * 8 * g, y = Math.floor(f * c / u + n) * g;
    if (vt === null) {
      const x = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      vt = x ? parseInt(x[1]) : 0;
    }
    return !!vt && vt <= 87 && s === 2 && c >= 224e3 && o === 0 && (a[e + 3] = a[e + 3] | 128), {
      sampleRate: u,
      channelCount: h,
      frameLength: y,
      samplesPerFrame: p
    };
  }
}
function $s(a, e) {
  return a[e] === 255 && (a[e + 1] & 224) === 224 && (a[e + 1] & 6) !== 0;
}
function Dr(a, e) {
  return e + 1 < a.length && $s(a, e);
}
function Za(a, e) {
  return $s(a, e) && 4 <= a.length - e;
}
function eo(a, e) {
  if (e + 1 < a.length && $s(a, e)) {
    const s = br(a, e);
    let i = 4;
    s != null && s.frameLength && (i = s.frameLength);
    const r = e + i;
    return r === a.length || Dr(a, r);
  }
  return !1;
}
class vi {
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
    if (e > 32 && v.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0)
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
  /**
   * Advance the ExpGolomb decoder past a scaling list. The scaling
   * list is optionally transmitted as part of a sequence parameter
   * set and is not relevant to transmuxing.
   * @param count the number of entries in this scaling list
   * @see Recommendation ITU-T H.264, Section 7.3.2.1.1.1
   */
  skipScalingList(e) {
    let t = 8, s = 8, i;
    for (let r = 0; r < e; r++)
      s !== 0 && (i = this.readEG(), s = (t + i + 256) % 256), t = s === 0 ? t : s;
  }
  /**
   * Read a sequence parameter set and return some interesting video
   * properties. A sequence parameter set is the H264 metadata that
   * describes the properties of upcoming video frames.
   * @returns an object with configuration parsed from the
   * sequence parameter set, including the dimensions of the
   * associated video frames.
   */
  readSPS() {
    let e = 0, t = 0, s = 0, i = 0, r, n, o;
    const l = this.readUByte.bind(this), c = this.readBits.bind(this), d = this.readUEG.bind(this), u = this.readBoolean.bind(this), h = this.skipBits.bind(this), f = this.skipEG.bind(this), g = this.skipUEG.bind(this), p = this.skipScalingList.bind(this);
    l();
    const y = l();
    if (c(5), h(3), l(), g(), y === 100 || y === 110 || y === 122 || y === 244 || y === 44 || y === 83 || y === 86 || y === 118 || y === 128) {
      const k = d();
      if (k === 3 && h(1), g(), g(), h(1), u())
        for (n = k !== 3 ? 8 : 12, o = 0; o < n; o++)
          u() && (o < 6 ? p(16) : p(64));
    }
    g();
    const T = d();
    if (T === 0)
      d();
    else if (T === 1)
      for (h(1), f(), f(), r = d(), o = 0; o < r; o++)
        f();
    g(), h(1);
    const E = d(), x = d(), A = c(1);
    A === 0 && h(1), h(1), u() && (e = d(), t = d(), s = d(), i = d());
    let S = [1, 1];
    if (u() && u())
      switch (l()) {
        case 1:
          S = [1, 1];
          break;
        case 2:
          S = [12, 11];
          break;
        case 3:
          S = [10, 11];
          break;
        case 4:
          S = [16, 11];
          break;
        case 5:
          S = [40, 33];
          break;
        case 6:
          S = [24, 11];
          break;
        case 7:
          S = [20, 11];
          break;
        case 8:
          S = [32, 11];
          break;
        case 9:
          S = [80, 33];
          break;
        case 10:
          S = [18, 11];
          break;
        case 11:
          S = [15, 11];
          break;
        case 12:
          S = [64, 33];
          break;
        case 13:
          S = [160, 99];
          break;
        case 14:
          S = [4, 3];
          break;
        case 15:
          S = [3, 2];
          break;
        case 16:
          S = [2, 1];
          break;
        case 255: {
          S = [l() << 8 | l(), l() << 8 | l()];
          break;
        }
      }
    return {
      width: Math.ceil((E + 1) * 16 - e * 2 - t * 2),
      height: (2 - A) * (x + 1) * 16 - (A ? 2 : 4) * (s + i),
      pixelRatio: S
    };
  }
  readSliceType() {
    return this.readUByte(), this.readUEG(), this.readUEG();
  }
}
class to {
  constructor(e, t, s) {
    this.keyData = void 0, this.decrypter = void 0, this.keyData = s, this.decrypter = new Ns(t, {
      removePKCS7Padding: !1
    });
  }
  decryptBuffer(e) {
    return this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer);
  }
  // AAC - encrypt all full 16 bytes blocks starting from offset 16
  decryptAacSample(e, t, s) {
    const i = e[t].unit;
    if (i.length <= 16)
      return;
    const r = i.subarray(16, i.length - i.length % 16), n = r.buffer.slice(r.byteOffset, r.byteOffset + r.length);
    this.decryptBuffer(n).then((o) => {
      const l = new Uint8Array(o);
      i.set(l, 16), this.decrypter.isSync() || this.decryptAacSamples(e, t + 1, s);
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
    const n = cr(r.data), o = this.getAvcEncryptedData(n);
    this.decryptBuffer(o.buffer).then((l) => {
      r.data = this.getAvcDecryptedUnit(n, l), this.decrypter.isSync() || this.decryptAvcSamples(e, t, s + 1, i);
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
const ce = 188;
class Ue {
  constructor(e, t, s) {
    this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = e, this.config = t, this.typeSupported = s;
  }
  static probe(e) {
    const t = Ue.syncOffset(e);
    return t > 0 && v.warn(`MPEG2-TS detected but first sync word found @ offset ${t}`), t !== -1;
  }
  static syncOffset(e) {
    const t = e.length;
    let s = Math.min(ce * 5, e.length - ce) + 1, i = 0;
    for (; i < s; ) {
      let r = !1, n = -1, o = 0;
      for (let l = i; l < t; l += ce)
        if (e[l] === 71) {
          if (o++, n === -1 && (n = l, n !== 0 && (s = Math.min(n + ce * 99, e.length - ce) + 1)), r || (r = Is(e, l) === 0), r && o > 1 && (n === 0 && o > 2 || l + ce > s))
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
      id: ir[e],
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
    this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = Ue.createTrack("video"), this._audioTrack = Ue.createTrack("audio", i), this._id3Track = Ue.createTrack("id3"), this._txtTrack = Ue.createTrack("text"), this._audioTrack.segmentCodec = "aac", this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.audioCodec = t, this.videoCodec = s, this._duration = i;
  }
  resetTimeStamp() {
  }
  resetContiguity() {
    const {
      _audioTrack: e,
      _avcTrack: t,
      _id3Track: s
    } = this;
    e && (e.pesData = null), t && (t.pesData = null), s && (s.pesData = null), this.aacOverFlow = null, this.avcSample = null, this.remainderData = null;
  }
  demux(e, t, s = !1, i = !1) {
    s || (this.sampleAes = null);
    let r;
    const n = this._avcTrack, o = this._audioTrack, l = this._id3Track, c = this._txtTrack;
    let d = n.pid, u = n.pesData, h = o.pid, f = l.pid, g = o.pesData, p = l.pesData, y = null, T = this.pmtParsed, E = this._pmtId, x = e.length;
    if (this.remainderData && (e = Qe(this.remainderData, e), x = e.length, this.remainderData = null), x < ce && !i)
      return this.remainderData = e, {
        audioTrack: o,
        videoTrack: n,
        id3Track: l,
        textTrack: c
      };
    const A = Math.max(0, Ue.syncOffset(e));
    x -= (x - A) % ce, x < e.byteLength && !i && (this.remainderData = new Uint8Array(e.buffer, x, e.buffer.byteLength - x));
    let S = 0;
    for (let b = A; b < x; b += ce)
      if (e[b] === 71) {
        const C = !!(e[b + 1] & 64), w = Is(e, b), R = (e[b + 3] & 48) >> 4;
        let B;
        if (R > 1) {
          if (B = b + 5 + e[b + 4], B === b + ce)
            continue;
        } else
          B = b + 4;
        switch (w) {
          case d:
            C && (u && (r = Ze(u)) && this.parseAVCPES(n, c, r, !1), u = {
              data: [],
              size: 0
            }), u && (u.data.push(e.subarray(B, b + ce)), u.size += b + ce - B);
            break;
          case h:
            if (C) {
              if (g && (r = Ze(g)))
                switch (o.segmentCodec) {
                  case "aac":
                    this.parseAACPES(o, r);
                    break;
                  case "mp3":
                    this.parseMPEGPES(o, r);
                    break;
                }
              g = {
                data: [],
                size: 0
              };
            }
            g && (g.data.push(e.subarray(B, b + ce)), g.size += b + ce - B);
            break;
          case f:
            C && (p && (r = Ze(p)) && this.parseID3PES(l, r), p = {
              data: [],
              size: 0
            }), p && (p.data.push(e.subarray(B, b + ce)), p.size += b + ce - B);
            break;
          case 0:
            C && (B += e[B] + 1), E = this._pmtId = so(e, B);
            break;
          case E: {
            C && (B += e[B] + 1);
            const O = io(e, B, this.typeSupported, s);
            d = O.avc, d > 0 && (n.pid = d), h = O.audio, h > 0 && (o.pid = h, o.segmentCodec = O.segmentCodec), f = O.id3, f > 0 && (l.pid = f), y !== null && !T && (v.warn(`MPEG-TS PMT found at ${b} after unknown PID '${y}'. Backtracking to sync byte @${A} to parse all TS packets.`), y = null, b = A - 188), T = this.pmtParsed = !0;
            break;
          }
          case 17:
          case 8191:
            break;
          default:
            y = w;
            break;
        }
      } else
        S++;
    if (S > 0) {
      const b = new Error(`Found ${S} TS packet/s that do not start with 0x47`);
      this.observer.emit(m.ERROR, m.ERROR, {
        type: G.MEDIA_ERROR,
        details: I.FRAG_PARSING_ERROR,
        fatal: !1,
        error: b,
        reason: b.message
      });
    }
    n.pesData = u, o.pesData = g, l.pesData = p;
    const k = {
      audioTrack: o,
      videoTrack: n,
      id3Track: l,
      textTrack: c
    };
    return i && this.extractRemainingSamples(k), k;
  }
  flush() {
    const {
      remainderData: e
    } = this;
    this.remainderData = null;
    let t;
    return e ? t = this.demux(e, -1, !1, !0) : t = {
      videoTrack: this._avcTrack,
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
    } = e, n = s.pesData, o = t.pesData, l = i.pesData;
    let c;
    if (n && (c = Ze(n)) ? (this.parseAVCPES(s, r, c, !0), s.pesData = null) : s.pesData = n, o && (c = Ze(o))) {
      switch (t.segmentCodec) {
        case "aac":
          this.parseAACPES(t, c);
          break;
        case "mp3":
          this.parseMPEGPES(t, c);
          break;
      }
      t.pesData = null;
    } else
      o != null && o.size && v.log("last AAC PES packet truncated,might overlap between fragments"), t.pesData = o;
    l && (c = Ze(l)) ? (this.parseID3PES(i, c), i.pesData = null) : i.pesData = l;
  }
  demuxSampleAes(e, t, s) {
    const i = this.demux(e, s, !0, !this.config.progressive), r = this.sampleAes = new to(this.observer, this.config, t);
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
    this._duration = 0;
  }
  parseAVCPES(e, t, s, i) {
    const r = this.parseAVCNALu(e, s.data);
    let n = this.avcSample, o, l = !1;
    s.data = null, n && r.length && !e.audFound && (nt(n, e), n = this.avcSample = St(!1, s.pts, s.dts, "")), r.forEach((c) => {
      var d;
      switch (c.type) {
        case 1: {
          let h = !1;
          o = !0;
          const f = c.data;
          if (l && f.length > 4) {
            const g = new vi(f).readSliceType();
            (g === 2 || g === 4 || g === 7 || g === 9) && (h = !0);
          }
          if (h) {
            var u;
            (u = n) != null && u.frame && !n.key && (nt(n, e), n = this.avcSample = null);
          }
          n || (n = this.avcSample = St(!0, s.pts, s.dts, "")), n.frame = !0, n.key = h;
          break;
        }
        case 5:
          o = !0, (d = n) != null && d.frame && !n.key && (nt(n, e), n = this.avcSample = null), n || (n = this.avcSample = St(!0, s.pts, s.dts, "")), n.key = !0, n.frame = !0;
          break;
        case 6: {
          o = !0, lr(c.data, 1, s.pts, t.samples);
          break;
        }
        case 7:
          if (o = !0, l = !0, !e.sps) {
            const h = c.data, g = new vi(h).readSPS();
            e.width = g.width, e.height = g.height, e.pixelRatio = g.pixelRatio, e.sps = [h], e.duration = this._duration;
            const p = h.subarray(1, 4);
            let y = "avc1.";
            for (let T = 0; T < 3; T++) {
              let E = p[T].toString(16);
              E.length < 2 && (E = "0" + E), y += E;
            }
            e.codec = y;
          }
          break;
        case 8:
          o = !0, e.pps || (e.pps = [c.data]);
          break;
        case 9:
          o = !1, e.audFound = !0, n && nt(n, e), n = this.avcSample = St(!1, s.pts, s.dts, "");
          break;
        case 12:
          o = !0;
          break;
        default:
          o = !1, n && (n.debug += "unknown NAL " + c.type + " ");
          break;
      }
      n && o && n.units.push(c);
    }), i && n && (nt(n, e), this.avcSample = null);
  }
  getLastNalUnit(e) {
    var t;
    let s = this.avcSample, i;
    if ((!s || s.units.length === 0) && (s = e[e.length - 1]), (t = s) != null && t.units) {
      const r = s.units;
      i = r[r.length - 1];
    }
    return i;
  }
  parseAVCNALu(e, t) {
    const s = t.byteLength;
    let i = e.naluState || 0;
    const r = i, n = [];
    let o = 0, l, c, d, u = -1, h = 0;
    for (i === -1 && (u = 0, h = t[0] & 31, i = 0, o = 1); o < s; ) {
      if (l = t[o++], !i) {
        i = l ? 0 : 1;
        continue;
      }
      if (i === 1) {
        i = l ? 0 : 2;
        continue;
      }
      if (!l)
        i = 3;
      else if (l === 1) {
        if (u >= 0) {
          const f = {
            data: t.subarray(u, o - i - 1),
            type: h
          };
          n.push(f);
        } else {
          const f = this.getLastNalUnit(e.samples);
          if (f && (r && o <= 4 - r && f.state && (f.data = f.data.subarray(0, f.data.byteLength - r)), c = o - i - 1, c > 0)) {
            const g = new Uint8Array(f.data.byteLength + c);
            g.set(f.data, 0), g.set(t.subarray(0, c), f.data.byteLength), f.data = g, f.state = 0;
          }
        }
        o < s ? (d = t[o] & 31, u = o, h = d, i = 0) : i = -1;
      } else
        i = 0;
    }
    if (u >= 0 && i >= 0) {
      const f = {
        data: t.subarray(u, s),
        type: h,
        state: i
      };
      n.push(f);
    }
    if (n.length === 0) {
      const f = this.getLastNalUnit(e.samples);
      if (f) {
        const g = new Uint8Array(f.data.byteLength + t.byteLength);
        g.set(f.data, 0), g.set(t, f.data.byteLength), f.data = g;
      }
    }
    return e.naluState = i, n;
  }
  parseAACPES(e, t) {
    let s = 0;
    const i = this.aacOverFlow;
    let r = t.data;
    if (i) {
      this.aacOverFlow = null;
      const u = i.missing, h = i.sample.unit.byteLength;
      if (u === -1) {
        const f = new Uint8Array(h + r.byteLength);
        f.set(i.sample.unit, 0), f.set(r, h), r = f;
      } else {
        const f = h - u;
        i.sample.unit.set(r.subarray(0, u), f), e.samples.push(i.sample), s = i.missing;
      }
    }
    let n, o;
    for (n = s, o = r.length; n < o - 1 && !Mt(r, n); n++)
      ;
    if (n !== s) {
      let u;
      const h = n < o - 1;
      h ? u = `AAC PES did not start with ADTS header,offset:${n}` : u = "No ADTS header found in AAC PES";
      const f = new Error(u);
      if (v.warn(`parsing error: ${u}`), this.observer.emit(m.ERROR, m.ERROR, {
        type: G.MEDIA_ERROR,
        details: I.FRAG_PARSING_ERROR,
        fatal: !1,
        levelRetry: h,
        error: f,
        reason: u
      }), !h)
        return;
    }
    Lr(e, this.observer, r, n, this.audioCodec);
    let l;
    if (t.pts !== void 0)
      l = t.pts;
    else if (i) {
      const u = Ar(e.samplerate);
      l = i.sample.pts + u;
    } else {
      v.warn("[tsdemuxer]: AAC PES unknown PTS");
      return;
    }
    let c = 0, d;
    for (; n < o; )
      if (d = Ir(e, r, n, l, c), n += d.length, d.missing) {
        this.aacOverFlow = d;
        break;
      } else
        for (c++; n < o - 1 && !Mt(r, n); n++)
          ;
  }
  parseMPEGPES(e, t) {
    const s = t.data, i = s.length;
    let r = 0, n = 0;
    const o = t.pts;
    if (o === void 0) {
      v.warn("[tsdemuxer]: MPEG PES unknown PTS");
      return;
    }
    for (; n < i; )
      if (Dr(s, n)) {
        const l = Rr(e, s, n, o, r);
        if (l)
          n += l.length, r++;
        else
          break;
      } else
        n++;
  }
  parseID3PES(e, t) {
    if (t.pts === void 0) {
      v.warn("[tsdemuxer]: ID3 PES unknown PTS");
      return;
    }
    const s = ne({}, t, {
      type: this._avcTrack ? Re.emsg : Re.audioId3,
      duration: Number.POSITIVE_INFINITY
    });
    e.samples.push(s);
  }
}
function St(a, e, t, s) {
  return {
    key: a,
    frame: !1,
    pts: e,
    dts: t,
    units: [],
    debug: s,
    length: 0
  };
}
function Is(a, e) {
  return ((a[e + 1] & 31) << 8) + a[e + 2];
}
function so(a, e) {
  return (a[e + 10] & 31) << 8 | a[e + 11];
}
function io(a, e, t, s) {
  const i = {
    audio: -1,
    avc: -1,
    id3: -1,
    segmentCodec: "aac"
  }, r = (a[e + 1] & 15) << 8 | a[e + 2], n = e + 3 + r - 4, o = (a[e + 10] & 15) << 8 | a[e + 11];
  for (e += 12 + o; e < n; ) {
    const l = Is(a, e);
    switch (a[e]) {
      case 207:
        if (!s) {
          v.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
          break;
        }
      case 15:
        i.audio === -1 && (i.audio = l);
        break;
      case 21:
        i.id3 === -1 && (i.id3 = l);
        break;
      case 219:
        if (!s) {
          v.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
          break;
        }
      case 27:
        i.avc === -1 && (i.avc = l);
        break;
      case 3:
      case 4:
        t.mpeg !== !0 && t.mp3 !== !0 ? v.log("MPEG audio found, not supported in this browser") : i.audio === -1 && (i.audio = l, i.segmentCodec = "mp3");
        break;
      case 36:
        v.warn("Unsupported HEVC stream type found");
        break;
    }
    e += ((a[e + 3] & 15) << 8 | a[e + 4]) + 5;
  }
  return i;
}
function Ze(a) {
  let e = 0, t, s, i, r, n;
  const o = a.data;
  if (!a || a.size === 0)
    return null;
  for (; o[0].length < 19 && o.length > 1; ) {
    const c = new Uint8Array(o[0].length + o[1].length);
    c.set(o[0]), c.set(o[1], o[0].length), o[0] = c, o.splice(1, 1);
  }
  if (t = o[0], (t[0] << 16) + (t[1] << 8) + t[2] === 1) {
    if (s = (t[4] << 8) + t[5], s && s > a.size - 6)
      return null;
    const c = t[7];
    c & 192 && (r = (t[9] & 14) * 536870912 + // 1 << 29
    (t[10] & 255) * 4194304 + // 1 << 22
    (t[11] & 254) * 16384 + // 1 << 14
    (t[12] & 255) * 128 + // 1 << 7
    (t[13] & 254) / 2, c & 64 ? (n = (t[14] & 14) * 536870912 + // 1 << 29
    (t[15] & 255) * 4194304 + // 1 << 22
    (t[16] & 254) * 16384 + // 1 << 14
    (t[17] & 255) * 128 + // 1 << 7
    (t[18] & 254) / 2, r - n > 60 * 9e4 && (v.warn(`${Math.round((r - n) / 9e4)}s delta between PTS and DTS, align them`), r = n)) : n = r), i = t[8];
    let d = i + 9;
    if (a.size <= d)
      return null;
    a.size -= d;
    const u = new Uint8Array(a.size);
    for (let h = 0, f = o.length; h < f; h++) {
      t = o[h];
      let g = t.byteLength;
      if (d)
        if (d > g) {
          d -= g;
          continue;
        } else
          t = t.subarray(d), g -= d, d = 0;
      u.set(t, e), e += g;
    }
    return s && (s -= i + 3), {
      data: u,
      pts: r,
      dts: n,
      len: s
    };
  }
  return null;
}
function nt(a, e) {
  if (a.units.length && a.frame) {
    if (a.pts === void 0) {
      const t = e.samples, s = t.length;
      if (s) {
        const i = t[s - 1];
        a.pts = i.pts, a.dts = i.dts;
      } else {
        e.dropped++;
        return;
      }
    }
    e.samples.push(a);
  }
  a.debug.length && v.log(a.pts + "/" + a.dts + ":" + a.debug);
}
class ro extends Er {
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
    let s = (kt(e, 0) || []).length;
    for (let i = e.length; s < i; s++)
      if (eo(e, s))
        return v.log("MPEG Audio sync word found !"), !0;
    return !1;
  }
  canParse(e, t) {
    return Za(e, t);
  }
  appendFrame(e, t, s) {
    if (this.basePTS !== null)
      return Rr(e, t, s, this.basePTS, this.frameIndex);
  }
}
class Si {
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
const Ne = Math.pow(2, 32) - 1;
class L {
  static init() {
    L.types = {
      avc1: [],
      // codingname
      avcC: [],
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
    for (e in L.types)
      L.types.hasOwnProperty(e) && (L.types[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
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
    L.HDLR_TYPES = {
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
    L.STTS = L.STSC = L.STCO = r, L.STSZ = new Uint8Array([
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
    ]), L.VMHD = new Uint8Array([
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
    ]), L.SMHD = new Uint8Array([
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
    ]), L.STSD = new Uint8Array([
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
    const n = new Uint8Array([105, 115, 111, 109]), o = new Uint8Array([97, 118, 99, 49]), l = new Uint8Array([0, 0, 0, 1]);
    L.FTYP = L.box(L.types.ftyp, n, l, n, o), L.DINF = L.box(L.types.dinf, L.box(L.types.dref, i));
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
    return L.box(L.types.hdlr, L.HDLR_TYPES[e]);
  }
  static mdat(e) {
    return L.box(L.types.mdat, e);
  }
  static mdhd(e, t) {
    t *= e;
    const s = Math.floor(t / (Ne + 1)), i = Math.floor(t % (Ne + 1));
    return L.box(L.types.mdhd, new Uint8Array([
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
    return L.box(L.types.mdia, L.mdhd(e.timescale, e.duration), L.hdlr(e.type), L.minf(e));
  }
  static mfhd(e) {
    return L.box(L.types.mfhd, new Uint8Array([
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
    return e.type === "audio" ? L.box(L.types.minf, L.box(L.types.smhd, L.SMHD), L.DINF, L.stbl(e)) : L.box(L.types.minf, L.box(L.types.vmhd, L.VMHD), L.DINF, L.stbl(e));
  }
  static moof(e, t, s) {
    return L.box(L.types.moof, L.mfhd(e), L.traf(s, t));
  }
  static moov(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = L.trak(e[t]);
    return L.box.apply(null, [L.types.moov, L.mvhd(e[0].timescale, e[0].duration)].concat(s).concat(L.mvex(e)));
  }
  static mvex(e) {
    let t = e.length;
    const s = [];
    for (; t--; )
      s[t] = L.trex(e[t]);
    return L.box.apply(null, [L.types.mvex, ...s]);
  }
  static mvhd(e, t) {
    t *= e;
    const s = Math.floor(t / (Ne + 1)), i = Math.floor(t % (Ne + 1)), r = new Uint8Array([
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
    return L.box(L.types.mvhd, r);
  }
  static sdtp(e) {
    const t = e.samples || [], s = new Uint8Array(4 + t.length);
    let i, r;
    for (i = 0; i < t.length; i++)
      r = t[i].flags, s[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
    return L.box(L.types.sdtp, s);
  }
  static stbl(e) {
    return L.box(L.types.stbl, L.stsd(e), L.box(L.types.stts, L.STTS), L.box(L.types.stsc, L.STSC), L.box(L.types.stsz, L.STSZ), L.box(L.types.stco, L.STCO));
  }
  static avc1(e) {
    let t = [], s = [], i, r, n;
    for (i = 0; i < e.sps.length; i++)
      r = e.sps[i], n = r.byteLength, t.push(n >>> 8 & 255), t.push(n & 255), t = t.concat(Array.prototype.slice.call(r));
    for (i = 0; i < e.pps.length; i++)
      r = e.pps[i], n = r.byteLength, s.push(n >>> 8 & 255), s.push(n & 255), s = s.concat(Array.prototype.slice.call(r));
    const o = L.box(L.types.avcC, new Uint8Array([
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
    ]).concat(s))), l = e.width, c = e.height, d = e.pixelRatio[0], u = e.pixelRatio[1];
    return L.box(
      L.types.avc1,
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
        l >> 8 & 255,
        l & 255,
        // width
        c >> 8 & 255,
        c & 255,
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
      L.box(L.types.btrt, new Uint8Array([
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
      L.box(L.types.pasp, new Uint8Array([
        d >> 24,
        // hSpacing
        d >> 16 & 255,
        d >> 8 & 255,
        d & 255,
        u >> 24,
        // vSpacing
        u >> 16 & 255,
        u >> 8 & 255,
        u & 255
      ]))
    );
  }
  static esds(e) {
    const t = e.config.length;
    return new Uint8Array([
      0,
      // version 0
      0,
      0,
      0,
      // flags
      3,
      // descriptor_type
      23 + t,
      // length
      0,
      1,
      // es_id
      0,
      // stream_priority
      4,
      // descriptor_type
      15 + t,
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
      5
      // descriptor_type
    ].concat([t]).concat(e.config).concat([6, 1, 2]));
  }
  static mp4a(e) {
    const t = e.samplerate;
    return L.box(L.types.mp4a, new Uint8Array([
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
      e.channelCount,
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
    ]), L.box(L.types.esds, L.esds(e)));
  }
  static mp3(e) {
    const t = e.samplerate;
    return L.box(L.types[".mp3"], new Uint8Array([
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
      e.channelCount,
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
    ]));
  }
  static stsd(e) {
    return e.type === "audio" ? e.segmentCodec === "mp3" && e.codec === "mp3" ? L.box(L.types.stsd, L.STSD, L.mp3(e)) : L.box(L.types.stsd, L.STSD, L.mp4a(e)) : L.box(L.types.stsd, L.STSD, L.avc1(e));
  }
  static tkhd(e) {
    const t = e.id, s = e.duration * e.timescale, i = e.width, r = e.height, n = Math.floor(s / (Ne + 1)), o = Math.floor(s % (Ne + 1));
    return L.box(L.types.tkhd, new Uint8Array([
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
    const s = L.sdtp(e), i = e.id, r = Math.floor(t / (Ne + 1)), n = Math.floor(t % (Ne + 1));
    return L.box(
      L.types.traf,
      L.box(L.types.tfhd, new Uint8Array([
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
      L.box(L.types.tfdt, new Uint8Array([
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
      L.trun(e, s.length + 16 + // tfhd
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
    return e.duration = e.duration || 4294967295, L.box(L.types.trak, L.tkhd(e), L.mdia(e));
  }
  static trex(e) {
    const t = e.id;
    return L.box(L.types.trex, new Uint8Array([
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
    let o, l, c, d, u, h;
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
      l = s[o], c = l.duration, d = l.size, u = l.flags, h = l.cts, n.set([
        c >>> 24 & 255,
        c >>> 16 & 255,
        c >>> 8 & 255,
        c & 255,
        // sample_duration
        d >>> 24 & 255,
        d >>> 16 & 255,
        d >>> 8 & 255,
        d & 255,
        // sample_size
        u.isLeading << 2 | u.dependsOn,
        u.isDependedOn << 6 | u.hasRedundancy << 4 | u.paddingValue << 1 | u.isNonSync,
        u.degradPrio & 61440,
        u.degradPrio & 15,
        // sample_flags
        h >>> 24 & 255,
        h >>> 16 & 255,
        h >>> 8 & 255,
        h & 255
        // sample_composition_time_offset
      ], 12 + 16 * o);
    return L.box(L.types.trun, n);
  }
  static initSegment(e) {
    L.types || L.init();
    const t = L.moov(e), s = new Uint8Array(L.FTYP.byteLength + t.byteLength);
    return s.set(L.FTYP), s.set(t, L.FTYP.byteLength), s;
  }
}
L.types = void 0;
L.HDLR_TYPES = void 0;
L.STTS = void 0;
L.STSC = void 0;
L.STCO = void 0;
L.STSZ = void 0;
L.VMHD = void 0;
L.SMHD = void 0;
L.STSD = void 0;
L.FTYP = void 0;
L.DINF = void 0;
const Cr = 9e4;
function Gs(a, e, t = 1, s = !1) {
  const i = a * e * t;
  return s ? Math.round(i) : i;
}
function no(a, e, t = 1, s = !1) {
  return Gs(a, e, 1 / t, s);
}
function at(a, e = !1) {
  return Gs(a, 1e3, 1 / Cr, e);
}
function ao(a, e = 1) {
  return Gs(a, Cr, 1 / e);
}
const oo = 10 * 1e3, Li = 1024, lo = 1152;
let Lt = null, es = null;
class ts {
  constructor(e, t, s, i = "") {
    if (this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = null, this._initDTS = null, this.nextAvcDts = null, this.nextAudioPts = null, this.videoSampleDuration = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = e, this.config = t, this.typeSupported = s, this.ISGenerated = !1, Lt === null) {
      const n = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
      Lt = n ? parseInt(n[1]) : 0;
    }
    if (es === null) {
      const r = navigator.userAgent.match(/Safari\/(\d+)/i);
      es = r ? parseInt(r[1]) : 0;
    }
  }
  destroy() {
  }
  resetTimeStamp(e) {
    v.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = e;
  }
  resetNextTimestamp() {
    v.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1;
  }
  resetInitSegment() {
    v.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1;
  }
  getVideoStartPts(e) {
    let t = !1;
    const s = e.reduce((i, r) => {
      const n = r.pts - i;
      return n < -4294967296 ? (t = !0, Le(i, r.pts)) : n > 0 ? i : r.pts;
    }, e[0].pts);
    return t && v.debug("PTS rollover detected"), s;
  }
  remux(e, t, s, i, r, n, o, l) {
    let c, d, u, h, f, g, p = r, y = r;
    const T = e.pid > -1, E = t.pid > -1, x = t.samples.length, A = e.samples.length > 0, S = o && x > 0 || x > 1;
    if ((!T || A) && (!E || S) || this.ISGenerated || o) {
      this.ISGenerated || (u = this.generateIS(e, t, r, n));
      const b = this.isVideoContiguous;
      let C = -1, w;
      if (S && (C = co(t.samples), !b && this.config.forceKeyFrameOnDiscontinuity))
        if (g = !0, C > 0) {
          v.warn(`[mp4-remuxer]: Dropped ${C} out of ${x} video samples due to a missing keyframe`);
          const R = this.getVideoStartPts(t.samples);
          t.samples = t.samples.slice(C), t.dropped += C, y += (t.samples[0].pts - R) / t.inputTimeScale, w = y;
        } else
          C === -1 && (v.warn(`[mp4-remuxer]: No keyframe found out of ${x} video samples`), g = !1);
      if (this.ISGenerated) {
        if (A && S) {
          const R = this.getVideoStartPts(t.samples), O = (Le(e.samples[0].pts, R) - R) / t.inputTimeScale;
          p += Math.max(0, O), y += Math.max(0, -O);
        }
        if (A) {
          if (e.samplerate || (v.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), u = this.generateIS(e, t, r, n)), d = this.remuxAudio(e, p, this.isAudioContiguous, n, E || S || l === V.AUDIO ? y : void 0), S) {
            const R = d ? d.endPTS - d.startPTS : 0;
            t.inputTimeScale || (v.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), u = this.generateIS(e, t, r, n)), c = this.remuxVideo(t, y, b, R);
          }
        } else
          S && (c = this.remuxVideo(t, y, b, 0));
        c && (c.firstKeyFrame = C, c.independent = C !== -1, c.firstKeyFramePTS = w);
      }
    }
    return this.ISGenerated && this._initPTS && this._initDTS && (s.samples.length && (f = _r(s, r, this._initPTS, this._initDTS)), i.samples.length && (h = kr(i, r, this._initPTS))), {
      audio: d,
      video: c,
      initSegment: u,
      independent: g,
      text: h,
      id3: f
    };
  }
  generateIS(e, t, s, i) {
    const r = e.samples, n = t.samples, o = this.typeSupported, l = {}, c = this._initPTS;
    let d = !c || i, u = "audio/mp4", h, f, g;
    if (d && (h = f = 1 / 0), e.config && r.length) {
      switch (e.timescale = e.samplerate, e.segmentCodec) {
        case "mp3":
          o.mpeg ? (u = "audio/mpeg", e.codec = "") : o.mp3 && (e.codec = "mp3");
          break;
      }
      l.audio = {
        id: "audio",
        container: u,
        codec: e.codec,
        initSegment: e.segmentCodec === "mp3" && o.mpeg ? new Uint8Array(0) : L.initSegment([e]),
        metadata: {
          channelCount: e.channelCount
        }
      }, d && (g = e.inputTimeScale, !c || g !== c.timescale ? h = f = r[0].pts - Math.round(g * s) : d = !1);
    }
    if (t.sps && t.pps && n.length && (t.timescale = t.inputTimeScale, l.video = {
      id: "main",
      container: "video/mp4",
      codec: t.codec,
      initSegment: L.initSegment([t]),
      metadata: {
        width: t.width,
        height: t.height
      }
    }, d))
      if (g = t.inputTimeScale, !c || g !== c.timescale) {
        const p = this.getVideoStartPts(n), y = Math.round(g * s);
        f = Math.min(f, Le(n[0].dts, p) - y), h = Math.min(h, p - y);
      } else
        d = !1;
    if (Object.keys(l).length)
      return this.ISGenerated = !0, d ? (this._initPTS = {
        baseTime: h,
        timescale: g
      }, this._initDTS = {
        baseTime: f,
        timescale: g
      }) : h = g = void 0, {
        tracks: l,
        initPTS: h,
        timescale: g
      };
  }
  remuxVideo(e, t, s, i) {
    const r = e.inputTimeScale, n = e.samples, o = [], l = n.length, c = this._initPTS;
    let d = this.nextAvcDts, u = 8, h = this.videoSampleDuration, f, g, p = Number.POSITIVE_INFINITY, y = Number.NEGATIVE_INFINITY, T = !1;
    if (!s || d === null) {
      const M = t * r, $ = n[0].pts - Le(n[0].dts, n[0].pts);
      d = M - $;
    }
    const E = c.baseTime * r / c.timescale;
    for (let M = 0; M < l; M++) {
      const $ = n[M];
      $.pts = Le($.pts - E, d), $.dts = Le($.dts - E, d), $.dts < n[M > 0 ? M - 1 : M].dts && (T = !0);
    }
    T && n.sort(function(M, $) {
      const _ = M.dts - $.dts, F = M.pts - $.pts;
      return _ || F;
    }), f = n[0].dts, g = n[n.length - 1].dts;
    const x = g - f, A = x ? Math.round(x / (l - 1)) : h || e.inputTimeScale / 30;
    if (s) {
      const M = f - d, $ = M > A, _ = M < -1;
      if (($ || _) && ($ ? v.warn(`AVC: ${at(M, !0)} ms (${M}dts) hole between fragments detected, filling it`) : v.warn(`AVC: ${at(-M, !0)} ms (${M}dts) overlapping between fragments detected`), !_ || d >= n[0].pts)) {
        f = d;
        const F = n[0].pts - M;
        n[0].dts = f, n[0].pts = F, v.log(`Video: First PTS/DTS adjusted: ${at(F, !0)}/${at(f, !0)}, delta: ${at(M, !0)} ms`);
      }
    }
    f = Math.max(0, f);
    let S = 0, k = 0;
    for (let M = 0; M < l; M++) {
      const $ = n[M], _ = $.units, F = _.length;
      let N = 0;
      for (let q = 0; q < F; q++)
        N += _[q].data.length;
      k += N, S += F, $.length = N, $.dts = Math.max($.dts, f), p = Math.min($.pts, p), y = Math.max($.pts, y);
    }
    g = n[l - 1].dts;
    const b = k + 4 * S + 8;
    let C;
    try {
      C = new Uint8Array(b);
    } catch (M) {
      this.observer.emit(m.ERROR, m.ERROR, {
        type: G.MUX_ERROR,
        details: I.REMUX_ALLOC_ERROR,
        fatal: !1,
        error: M,
        bytes: b,
        reason: `fail allocating video mdat ${b}`
      });
      return;
    }
    const w = new DataView(C.buffer);
    w.setUint32(0, b), C.set(L.types.mdat, 4);
    let R = !1, B = Number.POSITIVE_INFINITY, O = Number.POSITIVE_INFINITY, Y = Number.NEGATIVE_INFINITY, oe = Number.NEGATIVE_INFINITY;
    for (let M = 0; M < l; M++) {
      const $ = n[M], _ = $.units;
      let F = 0;
      for (let pe = 0, Ae = _.length; pe < Ae; pe++) {
        const Ee = _[pe], Ve = Ee.data, Ht = Ee.data.byteLength;
        w.setUint32(u, Ht), u += 4, C.set(Ve, u), u += Ht, F += 4 + Ht;
      }
      let N;
      if (M < l - 1)
        h = n[M + 1].dts - $.dts, N = n[M + 1].pts - $.pts;
      else {
        const pe = this.config, Ae = M > 0 ? $.dts - n[M - 1].dts : A;
        if (N = M > 0 ? $.pts - n[M - 1].pts : A, pe.stretchShortVideoTrack && this.nextAudioPts !== null) {
          const Ee = Math.floor(pe.maxBufferHole * r), Ve = (i ? p + i * r : this.nextAudioPts) - $.pts;
          Ve > Ee ? (h = Ve - Ae, h < 0 ? h = Ae : R = !0, v.log(`[mp4-remuxer]: It is approximately ${Ve / 90} ms to the next segment; using duration ${h / 90} ms for the last video frame.`)) : h = Ae;
        } else
          h = Ae;
      }
      const q = Math.round($.pts - $.dts);
      B = Math.min(B, h), Y = Math.max(Y, h), O = Math.min(O, N), oe = Math.max(oe, N), o.push(new Ai($.key, h, F, q));
    }
    if (o.length) {
      if (Lt) {
        if (Lt < 70) {
          const M = o[0].flags;
          M.dependsOn = 2, M.isNonSync = 0;
        }
      } else if (es && oe - O < Y - B && A / Y < 0.025 && o[0].cts === 0) {
        v.warn("Found irregular gaps in sample duration. Using PTS instead of DTS to determine MP4 sample duration.");
        let M = f;
        for (let $ = 0, _ = o.length; $ < _; $++) {
          const F = M + o[$].duration, N = M + o[$].cts;
          if ($ < _ - 1) {
            const q = F + o[$ + 1].cts;
            o[$].duration = q - N;
          } else
            o[$].duration = $ ? o[$ - 1].duration : A;
          o[$].cts = 0, M = F;
        }
      }
    }
    h = R || !h ? A : h, this.nextAvcDts = d = g + h, this.videoSampleDuration = h, this.isVideoContiguous = !0;
    const Q = L.moof(e.sequenceNumber++, f, ne({}, e, {
      samples: o
    })), Z = "video", J = {
      data1: Q,
      data2: C,
      startPTS: p / r,
      endPTS: (y + h) / r,
      startDTS: f / r,
      endDTS: d / r,
      type: Z,
      hasAudio: !1,
      hasVideo: !0,
      nb: o.length,
      dropped: e.dropped
    };
    return e.samples = [], e.dropped = 0, J;
  }
  remuxAudio(e, t, s, i, r) {
    const n = e.inputTimeScale, o = e.samplerate ? e.samplerate : n, l = n / o, c = e.segmentCodec === "aac" ? Li : lo, d = c * l, u = this._initPTS, h = e.segmentCodec === "mp3" && this.typeSupported.mpeg, f = [], g = r !== void 0;
    let p = e.samples, y = h ? 0 : 8, T = this.nextAudioPts || -1;
    const E = t * n, x = u.baseTime * n / u.timescale;
    if (this.isAudioContiguous = s = s || p.length && T > 0 && (i && Math.abs(E - T) < 9e3 || Math.abs(Le(p[0].pts - x, E) - T) < 20 * d), p.forEach(function(Z) {
      Z.pts = Le(Z.pts - x, E);
    }), !s || T < 0) {
      if (p = p.filter((Z) => Z.pts >= 0), !p.length)
        return;
      r === 0 ? T = 0 : i && !g ? T = Math.max(0, E) : T = p[0].pts;
    }
    if (e.segmentCodec === "aac") {
      const Z = this.config.maxAudioFramesDrift;
      for (let J = 0, M = T; J < p.length; J++) {
        const $ = p[J], _ = $.pts, F = _ - M, N = Math.abs(1e3 * F / n);
        if (F <= -Z * d && g)
          J === 0 && (v.warn(`Audio frame @ ${(_ / n).toFixed(3)}s overlaps nextAudioPts by ${Math.round(1e3 * F / n)} ms.`), this.nextAudioPts = T = M = _);
        else if (F >= Z * d && N < oo && g) {
          let q = Math.round(F / d);
          M = _ - q * d, M < 0 && (q--, M += d), J === 0 && (this.nextAudioPts = T = M), v.warn(`[mp4-remuxer]: Injecting ${q} audio frame @ ${(M / n).toFixed(3)}s due to ${Math.round(1e3 * F / n)} ms gap.`);
          for (let pe = 0; pe < q; pe++) {
            const Ae = Math.max(M, 0);
            let Ee = Si.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
            Ee || (v.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), Ee = $.unit.subarray()), p.splice(J, 0, {
              unit: Ee,
              pts: Ae
            }), M += d, J++;
          }
        }
        $.pts = M, M += d;
      }
    }
    let A = null, S = null, k, b = 0, C = p.length;
    for (; C--; )
      b += p[C].unit.byteLength;
    for (let Z = 0, J = p.length; Z < J; Z++) {
      const M = p[Z], $ = M.unit;
      let _ = M.pts;
      if (S !== null) {
        const N = f[Z - 1];
        N.duration = Math.round((_ - S) / l);
      } else if (s && e.segmentCodec === "aac" && (_ = T), A = _, b > 0) {
        b += y;
        try {
          k = new Uint8Array(b);
        } catch (N) {
          this.observer.emit(m.ERROR, m.ERROR, {
            type: G.MUX_ERROR,
            details: I.REMUX_ALLOC_ERROR,
            fatal: !1,
            error: N,
            bytes: b,
            reason: `fail allocating audio mdat ${b}`
          });
          return;
        }
        h || (new DataView(k.buffer).setUint32(0, b), k.set(L.types.mdat, 4));
      } else
        return;
      k.set($, y);
      const F = $.byteLength;
      y += F, f.push(new Ai(!0, c, F, 0)), S = _;
    }
    const w = f.length;
    if (!w)
      return;
    const R = f[f.length - 1];
    this.nextAudioPts = T = S + l * R.duration;
    const B = h ? new Uint8Array(0) : L.moof(e.sequenceNumber++, A / l, ne({}, e, {
      samples: f
    }));
    e.samples = [];
    const O = A / n, Y = T / n, Q = {
      data1: B,
      data2: k,
      startPTS: O,
      endPTS: Y,
      startDTS: O,
      endDTS: Y,
      type: "audio",
      hasAudio: !0,
      hasVideo: !1,
      nb: w
    };
    return this.isAudioContiguous = !0, Q;
  }
  remuxEmptyAudio(e, t, s, i) {
    const r = e.inputTimeScale, n = e.samplerate ? e.samplerate : r, o = r / n, l = this.nextAudioPts, c = this._initDTS, d = c.baseTime * 9e4 / c.timescale, u = (l !== null ? l : i.startDTS * r) + d, h = i.endDTS * r + d, f = o * Li, g = Math.ceil((h - u) / f), p = Si.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
    if (v.warn("[mp4-remuxer]: remux empty Audio"), !p) {
      v.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
      return;
    }
    const y = [];
    for (let T = 0; T < g; T++) {
      const E = u + T * f;
      y.push({
        unit: p,
        pts: E,
        dts: E
      });
    }
    return e.samples = y, this.remuxAudio(e, t, s, !1);
  }
}
function Le(a, e) {
  let t;
  if (e === null)
    return a;
  for (e < a ? t = -8589934592 : t = 8589934592; Math.abs(a - e) > 4294967296; )
    a += t;
  return a;
}
function co(a) {
  for (let e = 0; e < a.length; e++)
    if (a[e].key)
      return e;
  return -1;
}
function _r(a, e, t, s) {
  const i = a.samples.length;
  if (!i)
    return;
  const r = a.inputTimeScale;
  for (let o = 0; o < i; o++) {
    const l = a.samples[o];
    l.pts = Le(l.pts - t.baseTime * r / t.timescale, e * r) / r, l.dts = Le(l.dts - s.baseTime * r / s.timescale, e * r) / r;
  }
  const n = a.samples;
  return a.samples = [], {
    samples: n
  };
}
function kr(a, e, t) {
  const s = a.samples.length;
  if (!s)
    return;
  const i = a.inputTimeScale;
  for (let n = 0; n < s; n++) {
    const o = a.samples[n];
    o.pts = Le(o.pts - t.baseTime * i / t.timescale, e * i) / i;
  }
  a.samples.sort((n, o) => n.pts - o.pts);
  const r = a.samples;
  return a.samples = [], {
    samples: r
  };
}
class Ai {
  constructor(e, t, s, i) {
    this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = t, this.size = s, this.cts = i, this.flags = new uo(e);
  }
}
class uo {
  constructor(e) {
    this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = e ? 2 : 1, this.isNonSync = e ? 0 : 1;
  }
}
class ho {
  constructor() {
    this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = null, this.initTracks = void 0, this.lastEndTime = null;
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
    this.audioCodec = t, this.videoCodec = s, this.generateInitSegment(kn(e, i)), this.emitInitSegment = !0;
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
    const i = this.initData = ar(e);
    t || (t = Ii(i.audio, X.AUDIO)), s || (s = Ii(i.video, X.VIDEO));
    const r = {};
    i.audio && i.video ? r.audiovideo = {
      container: "video/mp4",
      codec: t + "," + s,
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
      initSegment: e,
      id: "main"
    } : v.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = r;
  }
  remux(e, t, s, i, r, n) {
    var o, l;
    let {
      initPTS: c,
      lastEndTime: d
    } = this;
    const u = {
      audio: void 0,
      video: void 0,
      text: i,
      id3: s,
      initSegment: void 0
    };
    U(d) || (d = this.lastEndTime = r || 0);
    const h = t.samples;
    if (!(h != null && h.length))
      return u;
    const f = {
      initPTS: void 0,
      timescale: 1
    };
    let g = this.initData;
    if ((o = g) != null && o.length || (this.generateInitSegment(h), g = this.initData), !((l = g) != null && l.length))
      return v.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), u;
    this.emitInitSegment && (f.tracks = this.initTracks, this.emitInitSegment = !1);
    const p = Pn(h, g), y = wn(g, h), T = y === null ? r : y;
    (fo(c, T, r, p) || f.timescale !== c.timescale && n) && (f.initPTS = T - r, c && c.timescale === 1 && v.warn(`Adjusting initPTS by ${f.initPTS - c.baseTime}`), this.initPTS = c = {
      baseTime: f.initPTS,
      timescale: 1
    });
    const E = e ? T - c.baseTime / c.timescale : d, x = E + p;
    On(g, h, c.baseTime / c.timescale), p > 0 ? this.lastEndTime = x : (v.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
    const A = !!g.audio, S = !!g.video;
    let k = "";
    A && (k += "audio"), S && (k += "video");
    const b = {
      data1: h,
      startPTS: E,
      startDTS: E,
      endPTS: x,
      endDTS: x,
      type: k,
      hasAudio: A,
      hasVideo: S,
      nb: 1,
      dropped: 0
    };
    return u.audio = b.type === "audio" ? b : void 0, u.video = b.type !== "audio" ? b : void 0, u.initSegment = f, u.id3 = _r(s, r, c, c), i.samples.length && (u.text = kr(i, r, c)), u;
  }
}
function fo(a, e, t, s) {
  if (a === null)
    return !0;
  const i = Math.max(s, 1), r = e - a.baseTime / a.timescale;
  return Math.abs(r - t) > i;
}
function Ii(a, e) {
  const t = a == null ? void 0 : a.codec;
  return t && t.length > 4 ? t : t === "hvc1" || t === "hev1" ? "hvc1.1.6.L120.90" : t === "av01" ? "av01.0.04M.08" : t === "avc1" || e === X.VIDEO ? "avc1.42e01e" : "mp4a.40.5";
}
let Oe;
try {
  Oe = self.performance.now.bind(self.performance);
} catch {
  v.debug("Unable to use Performance API on this environment"), Oe = typeof self < "u" && self.Date.now;
}
const ss = [{
  demux: za,
  remux: ho
}, {
  demux: Ue,
  remux: ts
}, {
  demux: Ya,
  remux: ts
}, {
  demux: ro,
  remux: ts
}];
class Ri {
  constructor(e, t, s, i, r) {
    this.async = !1, this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.observer = e, this.typeSupported = t, this.config = s, this.vendor = i, this.id = r;
  }
  configure(e) {
    this.transmuxConfig = e, this.decrypter && this.decrypter.reset();
  }
  push(e, t, s, i) {
    const r = s.transmuxing;
    r.executeStart = Oe();
    let n = new Uint8Array(e);
    const {
      currentTransmuxState: o,
      transmuxConfig: l
    } = this;
    i && (this.currentTransmuxState = i);
    const {
      contiguous: c,
      discontinuity: d,
      trackSwitch: u,
      accurateTimeOffset: h,
      timeOffset: f,
      initSegmentChange: g
    } = i || o, {
      audioCodec: p,
      videoCodec: y,
      defaultInitPts: T,
      duration: E,
      initSegmentData: x
    } = l, A = go(n, t);
    if (A && A.method === "AES-128") {
      const C = this.getDecrypter();
      if (C.isSync()) {
        let w = C.softwareDecrypt(n, A.key.buffer, A.iv.buffer);
        if (s.part > -1 && (w = C.flush()), !w)
          return r.executeEnd = Oe(), is(s);
        n = new Uint8Array(w);
      } else
        return this.decryptionPromise = C.webCryptoDecrypt(n, A.key.buffer, A.iv.buffer).then((w) => {
          const R = this.push(w, null, s);
          return this.decryptionPromise = null, R;
        }), this.decryptionPromise;
    }
    const S = this.needsProbing(d, u);
    if (S) {
      const C = this.configureTransmuxer(n);
      if (C)
        return v.warn(`[transmuxer] ${C.message}`), this.observer.emit(m.ERROR, m.ERROR, {
          type: G.MEDIA_ERROR,
          details: I.FRAG_PARSING_ERROR,
          fatal: !1,
          error: C,
          reason: C.message
        }), r.executeEnd = Oe(), is(s);
    }
    (d || u || g || S) && this.resetInitSegment(x, p, y, E, t), (d || g || S) && this.resetInitialTimestamp(T), c || this.resetContiguity();
    const k = this.transmux(n, A, f, h, s), b = this.currentTransmuxState;
    return b.contiguous = !0, b.discontinuity = !1, b.trackSwitch = !1, r.executeEnd = Oe(), k;
  }
  // Due to data caching, flush calls can produce more than one TransmuxerResult (hence the Array type)
  flush(e) {
    const t = e.transmuxing;
    t.executeStart = Oe();
    const {
      decrypter: s,
      currentTransmuxState: i,
      decryptionPromise: r
    } = this;
    if (r)
      return r.then(() => this.flush(e));
    const n = [], {
      timeOffset: o
    } = i;
    if (s) {
      const u = s.flush();
      u && n.push(this.push(u, null, e));
    }
    const {
      demuxer: l,
      remuxer: c
    } = this;
    if (!l || !c)
      return t.executeEnd = Oe(), [is(e)];
    const d = l.flush(o);
    return bt(d) ? d.then((u) => (this.flushRemux(n, u, e), n)) : (this.flushRemux(n, d, e), n);
  }
  flushRemux(e, t, s) {
    const {
      audioTrack: i,
      videoTrack: r,
      id3Track: n,
      textTrack: o
    } = t, {
      accurateTimeOffset: l,
      timeOffset: c
    } = this.currentTransmuxState;
    v.log(`[transmuxer.ts]: Flushed fragment ${s.sn}${s.part > -1 ? " p: " + s.part : ""} of level ${s.level}`);
    const d = this.remuxer.remux(i, r, n, o, c, l, !0, this.id);
    e.push({
      remuxResult: d,
      chunkMeta: s
    }), s.transmuxing.executeEnd = Oe();
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
      textTrack: l
    } = this.demuxer.demux(e, t, !1, !this.config.progressive);
    return {
      remuxResult: this.remuxer.remux(r, n, o, l, t, s, !1, this.id),
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
      typeSupported: i,
      vendor: r
    } = this;
    let n;
    for (let u = 0, h = ss.length; u < h; u++)
      if (ss[u].demux.probe(e)) {
        n = ss[u];
        break;
      }
    if (!n)
      return new Error("Failed to find demuxer by probing fragment data");
    const o = this.demuxer, l = this.remuxer, c = n.remux, d = n.demux;
    (!l || !(l instanceof c)) && (this.remuxer = new c(s, t, i, r)), (!o || !(o instanceof d)) && (this.demuxer = new d(s, t, i), this.probe = d.probe);
  }
  needsProbing(e, t) {
    return !this.demuxer || !this.remuxer || e || t;
  }
  getDecrypter() {
    let e = this.decrypter;
    return e || (e = this.decrypter = new Ns(this.config)), e;
  }
}
function go(a, e) {
  let t = null;
  return a.byteLength > 0 && e != null && e.key != null && e.iv !== null && e.method != null && (t = e), t;
}
const is = (a) => ({
  remuxResult: {},
  chunkMeta: a
});
function bt(a) {
  return "then" in a && a.then instanceof Function;
}
class mo {
  constructor(e, t, s, i, r) {
    this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = s, this.duration = i, this.defaultInitPts = r || null;
  }
}
class po {
  constructor(e, t, s, i, r, n) {
    this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = s, this.trackSwitch = i, this.timeOffset = r, this.initSegmentChange = n;
  }
}
var wr = { exports: {} };
(function(a) {
  var e = Object.prototype.hasOwnProperty, t = "~";
  function s() {
  }
  Object.create && (s.prototype = /* @__PURE__ */ Object.create(null), new s().__proto__ || (t = !1));
  function i(l, c, d) {
    this.fn = l, this.context = c, this.once = d || !1;
  }
  function r(l, c, d, u, h) {
    if (typeof d != "function")
      throw new TypeError("The listener must be a function");
    var f = new i(d, u || l, h), g = t ? t + c : c;
    return l._events[g] ? l._events[g].fn ? l._events[g] = [l._events[g], f] : l._events[g].push(f) : (l._events[g] = f, l._eventsCount++), l;
  }
  function n(l, c) {
    --l._eventsCount === 0 ? l._events = new s() : delete l._events[c];
  }
  function o() {
    this._events = new s(), this._eventsCount = 0;
  }
  o.prototype.eventNames = function() {
    var c = [], d, u;
    if (this._eventsCount === 0)
      return c;
    for (u in d = this._events)
      e.call(d, u) && c.push(t ? u.slice(1) : u);
    return Object.getOwnPropertySymbols ? c.concat(Object.getOwnPropertySymbols(d)) : c;
  }, o.prototype.listeners = function(c) {
    var d = t ? t + c : c, u = this._events[d];
    if (!u)
      return [];
    if (u.fn)
      return [u.fn];
    for (var h = 0, f = u.length, g = new Array(f); h < f; h++)
      g[h] = u[h].fn;
    return g;
  }, o.prototype.listenerCount = function(c) {
    var d = t ? t + c : c, u = this._events[d];
    return u ? u.fn ? 1 : u.length : 0;
  }, o.prototype.emit = function(c, d, u, h, f, g) {
    var p = t ? t + c : c;
    if (!this._events[p])
      return !1;
    var y = this._events[p], T = arguments.length, E, x;
    if (y.fn) {
      switch (y.once && this.removeListener(c, y.fn, void 0, !0), T) {
        case 1:
          return y.fn.call(y.context), !0;
        case 2:
          return y.fn.call(y.context, d), !0;
        case 3:
          return y.fn.call(y.context, d, u), !0;
        case 4:
          return y.fn.call(y.context, d, u, h), !0;
        case 5:
          return y.fn.call(y.context, d, u, h, f), !0;
        case 6:
          return y.fn.call(y.context, d, u, h, f, g), !0;
      }
      for (x = 1, E = new Array(T - 1); x < T; x++)
        E[x - 1] = arguments[x];
      y.fn.apply(y.context, E);
    } else {
      var A = y.length, S;
      for (x = 0; x < A; x++)
        switch (y[x].once && this.removeListener(c, y[x].fn, void 0, !0), T) {
          case 1:
            y[x].fn.call(y[x].context);
            break;
          case 2:
            y[x].fn.call(y[x].context, d);
            break;
          case 3:
            y[x].fn.call(y[x].context, d, u);
            break;
          case 4:
            y[x].fn.call(y[x].context, d, u, h);
            break;
          default:
            if (!E)
              for (S = 1, E = new Array(T - 1); S < T; S++)
                E[S - 1] = arguments[S];
            y[x].fn.apply(y[x].context, E);
        }
    }
    return !0;
  }, o.prototype.on = function(c, d, u) {
    return r(this, c, d, u, !1);
  }, o.prototype.once = function(c, d, u) {
    return r(this, c, d, u, !0);
  }, o.prototype.removeListener = function(c, d, u, h) {
    var f = t ? t + c : c;
    if (!this._events[f])
      return this;
    if (!d)
      return n(this, f), this;
    var g = this._events[f];
    if (g.fn)
      g.fn === d && (!h || g.once) && (!u || g.context === u) && n(this, f);
    else {
      for (var p = 0, y = [], T = g.length; p < T; p++)
        (g[p].fn !== d || h && !g[p].once || u && g[p].context !== u) && y.push(g[p]);
      y.length ? this._events[f] = y.length === 1 ? y[0] : y : n(this, f);
    }
    return this;
  }, o.prototype.removeAllListeners = function(c) {
    var d;
    return c ? (d = t ? t + c : c, this._events[d] && n(this, d)) : (this._events = new s(), this._eventsCount = 0), this;
  }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = t, o.EventEmitter = o, a.exports = o;
})(wr);
var yo = wr.exports, Vs = /* @__PURE__ */ Jr(yo);
const rs = Gt() || {
  isTypeSupported: () => !1
};
class Pr {
  constructor(e, t, s, i) {
    this.error = null, this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.useWorker = void 0, this.workerContext = null, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0;
    const r = e.config;
    this.hls = e, this.id = t, this.useWorker = !!r.enableWorker, this.onTransmuxComplete = s, this.onFlush = i;
    const n = (c, d) => {
      d = d || {}, d.frag = this.frag, d.id = this.id, c === m.ERROR && (this.error = d.error), this.hls.trigger(c, d);
    };
    this.observer = new Vs(), this.observer.on(m.FRAG_DECRYPTED, n), this.observer.on(m.ERROR, n);
    const o = {
      mp4: rs.isTypeSupported("video/mp4"),
      mpeg: rs.isTypeSupported("audio/mpeg"),
      mp3: rs.isTypeSupported('audio/mp4; codecs="mp3"')
    }, l = navigator.vendor;
    if (this.useWorker && typeof Worker < "u" && (r.workerPath || Na())) {
      try {
        r.workerPath ? (v.log(`loading Web Worker ${r.workerPath} for "${t}"`), this.workerContext = Ba(r.workerPath)) : (v.log(`injecting Web Worker for "${t}"`), this.workerContext = Ua()), this.onwmsg = (u) => this.onWorkerMessage(u);
        const {
          worker: d
        } = this.workerContext;
        d.addEventListener("message", this.onwmsg), d.onerror = (u) => {
          const h = new Error(`${u.message}  (${u.filename}:${u.lineno})`);
          r.enableWorker = !1, v.warn(`Error in "${t}" Web Worker, fallback to inline`), this.hls.trigger(m.ERROR, {
            type: G.OTHER_ERROR,
            details: I.INTERNAL_EXCEPTION,
            fatal: !1,
            event: "demuxerWorker",
            error: h
          });
        }, d.postMessage({
          cmd: "init",
          typeSupported: o,
          vendor: l,
          id: t,
          config: JSON.stringify(r)
        });
      } catch (d) {
        v.warn(`Error setting up "${t}" Web Worker, fallback to inline`, d), this.resetWorker(), this.error = null, this.transmuxer = new Ri(this.observer, o, r, l, t);
      }
      return;
    }
    this.transmuxer = new Ri(this.observer, o, r, l, t);
  }
  resetWorker() {
    if (this.workerContext) {
      const {
        worker: e,
        objectURL: t
      } = this.workerContext;
      t && self.URL.revokeObjectURL(t), e.removeEventListener("message", this.onwmsg), e.onerror = null, e.terminate(), this.workerContext = null;
    }
  }
  destroy() {
    if (this.workerContext)
      this.resetWorker(), this.onwmsg = void 0;
    else {
      const t = this.transmuxer;
      t && (t.destroy(), this.transmuxer = null);
    }
    const e = this.observer;
    e && e.removeAllListeners(), this.frag = null, this.observer = null, this.hls = null;
  }
  push(e, t, s, i, r, n, o, l, c, d) {
    var u, h;
    c.transmuxing.start = self.performance.now();
    const {
      transmuxer: f
    } = this, g = n ? n.start : r.start, p = r.decryptdata, y = this.frag, T = !(y && r.cc === y.cc), E = !(y && c.level === y.level), x = y ? c.sn - y.sn : -1, A = this.part ? c.part - this.part.index : -1, S = x === 0 && c.id > 1 && c.id === (y == null ? void 0 : y.stats.chunkCount), k = !E && (x === 1 || x === 0 && (A === 1 || S && A <= 0)), b = self.performance.now();
    (E || x || r.stats.parsing.start === 0) && (r.stats.parsing.start = b), n && (A || !k) && (n.stats.parsing.start = b);
    const C = !(y && ((u = r.initSegment) == null ? void 0 : u.url) === ((h = y.initSegment) == null ? void 0 : h.url)), w = new po(T, k, l, E, g, C);
    if (!k || T || C) {
      v.log(`[transmuxer-interface, ${r.type}]: Starting new transmux session for sn: ${c.sn} p: ${c.part} level: ${c.level} id: ${c.id}
        discontinuity: ${T}
        trackSwitch: ${E}
        contiguous: ${k}
        accurateTimeOffset: ${l}
        timeOffset: ${g}
        initSegmentChange: ${C}`);
      const R = new mo(s, i, t, o, d);
      this.configureTransmuxer(R);
    }
    if (this.frag = r, this.part = n, this.workerContext)
      this.workerContext.worker.postMessage({
        cmd: "demux",
        data: e,
        decryptdata: p,
        chunkMeta: c,
        state: w
      }, e instanceof ArrayBuffer ? [e] : []);
    else if (f) {
      const R = f.push(e, p, c, w);
      bt(R) ? (f.async = !0, R.then((B) => {
        this.handleTransmuxComplete(B);
      }).catch((B) => {
        this.transmuxerError(B, c, "transmuxer-interface push error");
      })) : (f.async = !1, this.handleTransmuxComplete(R));
    }
  }
  flush(e) {
    e.transmuxing.start = self.performance.now();
    const {
      transmuxer: t
    } = this;
    if (this.workerContext)
      this.workerContext.worker.postMessage({
        cmd: "flush",
        chunkMeta: e
      });
    else if (t) {
      let s = t.flush(e);
      bt(s) || t.async ? (bt(s) || (s = Promise.resolve(s)), s.then((r) => {
        this.handleFlushResult(r, e);
      }).catch((r) => {
        this.transmuxerError(r, e, "transmuxer-interface flush error");
      })) : this.handleFlushResult(s, e);
    }
  }
  transmuxerError(e, t, s) {
    this.hls && (this.error = e, this.hls.trigger(m.ERROR, {
      type: G.MEDIA_ERROR,
      details: I.FRAG_PARSING_ERROR,
      chunkMeta: t,
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
  onWorkerMessage(e) {
    const t = e.data, s = this.hls;
    switch (t.event) {
      case "init": {
        var i;
        const r = (i = this.workerContext) == null ? void 0 : i.objectURL;
        r && self.URL.revokeObjectURL(r);
        break;
      }
      case "transmuxComplete": {
        this.handleTransmuxComplete(t.data);
        break;
      }
      case "flush": {
        this.onFlush(t.data);
        break;
      }
      case "workerLog":
        v[t.data.logType] && v[t.data.logType](t.data.message);
        break;
      default: {
        t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, s.trigger(t.event, t.data);
        break;
      }
    }
  }
  configureTransmuxer(e) {
    const {
      transmuxer: t
    } = this;
    this.workerContext ? this.workerContext.worker.postMessage({
      cmd: "configure",
      config: e
    }) : t && t.configure(e);
  }
  handleTransmuxComplete(e) {
    e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e);
  }
}
const To = 250, ns = 2, xo = 0.1, Eo = 0.05;
class vo {
  constructor(e, t, s, i) {
    this.config = void 0, this.media = null, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = e, this.media = t, this.fragmentTracker = s, this.hls = i;
  }
  destroy() {
    this.media = null, this.hls = this.fragmentTracker = null;
  }
  /**
   * Checks if the playhead is stuck within a gap, and if so, attempts to free it.
   * A gap is an unbuffered range between two buffered ranges (or the start and the first buffered range).
   *
   * @param lastCurrentTime - Previously read playhead position
   */
  poll(e, t) {
    const {
      config: s,
      media: i,
      stalled: r
    } = this;
    if (i === null)
      return;
    const {
      currentTime: n,
      seeking: o
    } = i, l = this.seeking && !o, c = !this.seeking && o;
    if (this.seeking = o, n !== e) {
      if (this.moved = !0, r !== null) {
        if (this.stallReported) {
          const T = self.performance.now() - r;
          v.warn(`playback not stuck anymore @${n}, after ${Math.round(T)}ms`), this.stallReported = !1;
        }
        this.stalled = null, this.nudgeRetry = 0;
      }
      return;
    }
    if (c || l) {
      this.stalled = null;
      return;
    }
    if (i.paused && !o || i.ended || i.playbackRate === 0 || !ee.getBuffered(i).length)
      return;
    const d = ee.bufferInfo(i, n, 0), u = d.len > 0, h = d.nextStart || 0;
    if (!u && !h)
      return;
    if (o) {
      const T = d.len > ns, E = !h || t && t.start <= n || h - n > ns && !this.fragmentTracker.getPartialFragment(n);
      if (T || E)
        return;
      this.moved = !1;
    }
    if (!this.moved && this.stalled !== null) {
      var f;
      const T = Math.max(h, d.start || 0) - n, E = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null, A = (E == null || (f = E.details) == null ? void 0 : f.live) ? E.details.targetduration * 2 : ns, S = this.fragmentTracker.getPartialFragment(n);
      if (T > 0 && (T <= A || S)) {
        this._trySkipBufferHole(S);
        return;
      }
    }
    const g = self.performance.now();
    if (r === null) {
      this.stalled = g;
      return;
    }
    const p = g - r;
    if (!o && p >= To && (this._reportStall(d), !this.media))
      return;
    const y = ee.bufferInfo(i, n, s.maxBufferHole);
    this._tryFixBufferStall(y, p);
  }
  /**
   * Detects and attempts to fix known buffer stalling issues.
   * @param bufferInfo - The properties of the current buffer.
   * @param stalledDurationMs - The amount of time Hls.js has been stalling for.
   * @private
   */
  _tryFixBufferStall(e, t) {
    const {
      config: s,
      fragmentTracker: i,
      media: r
    } = this;
    if (r === null)
      return;
    const n = r.currentTime, o = i.getPartialFragment(n);
    o && (this._trySkipBufferHole(o) || !this.media) || (e.len > s.maxBufferHole || e.nextStart && e.nextStart - n < s.maxBufferHole) && t > s.highBufferWatchdogPeriod * 1e3 && (v.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer());
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
      stallReported: i
    } = this;
    if (!i && s) {
      this.stallReported = !0;
      const r = new Error(`Playback stalling at @${s.currentTime} due to low buffer (${JSON.stringify(e)})`);
      v.warn(r.message), t.trigger(m.ERROR, {
        type: G.MEDIA_ERROR,
        details: I.BUFFER_STALLED_ERROR,
        fatal: !1,
        error: r,
        buffer: e.len
      });
    }
  }
  /**
   * Attempts to fix buffer stalls by jumping over known gaps caused by partial fragments
   * @param partial - The partial fragment found at the current time (where playback is stalling).
   * @private
   */
  _trySkipBufferHole(e) {
    const {
      config: t,
      hls: s,
      media: i
    } = this;
    if (i === null)
      return 0;
    const r = i.currentTime, n = ee.bufferInfo(i, r, 0), o = r < n.start ? n.start : n.nextStart;
    if (o) {
      const l = n.len <= t.maxBufferHole, c = n.len > 0 && n.len < 1 && i.readyState < 3, d = o - r;
      if (d > 0 && (l || c)) {
        if (d > t.maxBufferHole) {
          const {
            fragmentTracker: h
          } = this;
          let f = !1;
          if (r === 0) {
            const g = h.getAppendedFrag(0, V.MAIN);
            g && o < g.end && (f = !0);
          }
          if (!f) {
            const g = e || h.getAppendedFrag(r, V.MAIN);
            if (g) {
              let p = !1, y = g.end;
              for (; y < o; ) {
                const T = h.getPartialFragment(y);
                if (T)
                  y += T.duration;
                else {
                  p = !0;
                  break;
                }
              }
              if (p)
                return 0;
            }
          }
        }
        const u = Math.max(o + Eo, r + xo);
        if (v.warn(`skipping hole, adjusting currentTime from ${r} to ${u}`), this.moved = !0, this.stalled = null, i.currentTime = u, e && !e.gap) {
          const h = new Error(`fragment loaded with buffer holes, seeking from ${r} to ${u}`);
          s.trigger(m.ERROR, {
            type: G.MEDIA_ERROR,
            details: I.BUFFER_SEEK_OVER_HOLE,
            fatal: !1,
            error: h,
            reason: h.message,
            frag: e
          });
        }
        return u;
      }
    }
    return 0;
  }
  /**
   * Attempts to fix buffer stalls by advancing the mediaElement's current time by a small amount.
   * @private
   */
  _tryNudgeBuffer() {
    const {
      config: e,
      hls: t,
      media: s,
      nudgeRetry: i
    } = this;
    if (s === null)
      return;
    const r = s.currentTime;
    if (this.nudgeRetry++, i < e.nudgeMaxRetry) {
      const n = r + (i + 1) * e.nudgeOffset, o = new Error(`Nudging 'currentTime' from ${r} to ${n}`);
      v.warn(o.message), s.currentTime = n, t.trigger(m.ERROR, {
        type: G.MEDIA_ERROR,
        details: I.BUFFER_NUDGE_ON_STALL,
        error: o,
        fatal: !1
      });
    } else {
      const n = new Error(`Playhead still not moving while enough data buffered @${r} after ${e.nudgeMaxRetry} nudges`);
      v.error(n.message), t.trigger(m.ERROR, {
        type: G.MEDIA_ERROR,
        details: I.BUFFER_STALLED_ERROR,
        error: n,
        fatal: !0
      });
    }
  }
}
const So = 100;
class Lo extends Us {
  constructor(e, t, s) {
    super(e, t, s, "[stream-controller]", V.MAIN), this.audioCodecSwap = !1, this.gapController = null, this.level = -1, this._forceStartLoad = !1, this.altAudio = !1, this.audioOnly = !1, this.fragPlaying = null, this.onvplaying = null, this.onvseeked = null, this.fragLastKbps = 0, this.couldBacktrack = !1, this.backtrackFragment = null, this.audioCodecSwitch = !1, this.videoBuffer = null, this._registerListeners();
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.LEVEL_LOADING, this.onLevelLoading, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(m.ERROR, this.onError, this), e.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(m.BUFFER_CREATED, this.onBufferCreated, this), e.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(m.ERROR, this.onError, this), e.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(m.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(m.BUFFER_CREATED, this.onBufferCreated, this), e.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(m.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  onHandlerDestroying() {
    this._unregisterListeners(), this.onMediaDetaching();
  }
  startLoad(e) {
    if (this.levels) {
      const {
        lastCurrentTime: t,
        hls: s
      } = this;
      if (this.stopLoad(), this.setInterval(So), this.level = -1, !this.startFragRequested) {
        let i = s.startLevel;
        i === -1 && (s.config.testBandwidth && this.levels.length > 1 ? (i = 0, this.bitrateTest = !0) : i = s.nextAutoLevel), this.level = s.nextLoadLevel = i, this.loadedmetadata = !1;
      }
      t > 0 && e === -1 && (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t), this.state = D.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
    } else
      this._forceStartLoad = !0, this.state = D.STOPPED;
  }
  stopLoad() {
    this._forceStartLoad = !1, super.stopLoad();
  }
  doTick() {
    switch (this.state) {
      case D.WAITING_LEVEL: {
        var e;
        const {
          levels: s,
          level: i
        } = this, r = s == null || (e = s[i]) == null ? void 0 : e.details;
        if (r && (!r.live || this.levelLastLoaded === this.level)) {
          if (this.waitForCdnTuneIn(r))
            break;
          this.state = D.IDLE;
          break;
        } else if (this.hls.nextLoadLevel !== this.level) {
          this.state = D.IDLE;
          break;
        }
        break;
      }
      case D.FRAG_LOADING_WAITING_RETRY:
        {
          var t;
          const s = self.performance.now(), i = this.retryDate;
          (!i || s >= i || (t = this.media) != null && t.seeking) && (this.resetStartWhenNotLoaded(this.level), this.state = D.IDLE);
        }
        break;
    }
    this.state === D.IDLE && this.doTickIdle(), this.onTickEnd();
  }
  onTickEnd() {
    super.onTickEnd(), this.checkBuffer(), this.checkFragmentChanged();
  }
  doTickIdle() {
    const {
      hls: e,
      levelLastLoaded: t,
      levels: s,
      media: i
    } = this, {
      config: r,
      nextLoadLevel: n
    } = e;
    if (t === null || !i && (this.startFragRequested || !r.startFragPrefetch) || this.altAudio && this.audioOnly || !(s != null && s[n]))
      return;
    const o = s[n], l = this.getMainFwdBufferInfo();
    if (l === null)
      return;
    const c = this.getLevelDetails();
    if (c && this._streamEnded(l, c)) {
      const y = {};
      this.altAudio && (y.type = "video"), this.hls.trigger(m.BUFFER_EOS, y), this.state = D.ENDED;
      return;
    }
    e.loadLevel !== n && e.manualLevel === -1 && this.log(`Adapting to level ${n} from level ${this.level}`), this.level = e.nextLoadLevel = n;
    const d = o.details;
    if (!d || this.state === D.WAITING_LEVEL || d.live && this.levelLastLoaded !== n) {
      this.level = n, this.state = D.WAITING_LEVEL;
      return;
    }
    const u = l.len, h = this.getMaxBufferLength(o.maxBitrate);
    if (u >= h)
      return;
    this.backtrackFragment && this.backtrackFragment.start > l.end && (this.backtrackFragment = null);
    const f = this.backtrackFragment ? this.backtrackFragment.start : l.end;
    let g = this.getNextFragment(f, d);
    if (this.couldBacktrack && !this.fragPrevious && g && g.sn !== "initSegment" && this.fragmentTracker.getState(g) !== ae.OK) {
      var p;
      const T = ((p = this.backtrackFragment) != null ? p : g).sn - d.startSN, E = d.fragments[T - 1];
      E && g.cc === E.cc && (g = E, this.fragmentTracker.removeFragment(E));
    } else
      this.backtrackFragment && l.len && (this.backtrackFragment = null);
    if (g && this.isLoopLoading(g, f)) {
      if (!g.gap) {
        const T = this.audioOnly && !this.altAudio ? X.AUDIO : X.VIDEO, E = (T === X.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
        E && this.afterBufferFlushed(E, T, V.MAIN);
      }
      g = this.getNextFragmentLoopLoading(g, d, l, V.MAIN, h);
    }
    g && (g.initSegment && !g.initSegment.data && !this.bitrateTest && (g = g.initSegment), this.loadFragment(g, o, f));
  }
  loadFragment(e, t, s) {
    const i = this.fragmentTracker.getState(e);
    this.fragCurrent = e, i === ae.NOT_LOADED || i === ae.PARTIAL ? e.sn === "initSegment" ? this._loadInitSegment(e, t) : this.bitrateTest ? (this.log(`Fragment ${e.sn} of level ${e.level} is being downloaded to test bitrate and will not be buffered`), this._loadBitrateTestFrag(e, t)) : (this.startFragRequested = !0, super.loadFragment(e, t, s)) : this.clearTrackerIfNeeded(e);
  }
  getBufferedFrag(e) {
    return this.fragmentTracker.getBufferedFrag(e, V.MAIN);
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
        const o = this.hls.nextLoadLevel, l = e[o], c = this.fragLastKbps;
        c && this.fragCurrent ? s = this.fragCurrent.duration * l.maxBitrate / (1e3 * c) + 1 : s = 0;
      } else
        s = 0;
      const n = this.getBufferedFrag(t.currentTime + s);
      if (n) {
        const o = this.followingBufferedFrag(n);
        if (o) {
          this.abortCurrentFrag();
          const l = o.maxStartPTS ? o.maxStartPTS : o.start, c = o.duration, d = Math.max(n.end, l + Math.min(Math.max(c - this.config.maxFragLookUpTolerance, c * 0.5), c * 0.75));
          this.flushMainBuffer(d, Number.POSITIVE_INFINITY);
        }
      }
    }
  }
  abortCurrentFrag() {
    const e = this.fragCurrent;
    switch (this.fragCurrent = null, this.backtrackFragment = null, e && (e.abortRequests(), this.fragmentTracker.removeFragment(e)), this.state) {
      case D.KEY_LOADING:
      case D.FRAG_LOADING:
      case D.FRAG_LOADING_WAITING_RETRY:
      case D.PARSING:
      case D.PARSED:
        this.state = D.IDLE;
        break;
    }
    this.nextLoadPosition = this.getLoadPosition();
  }
  flushMainBuffer(e, t) {
    super.flushMainBuffer(e, t, this.altAudio ? "video" : null);
  }
  onMediaAttached(e, t) {
    super.onMediaAttached(e, t);
    const s = t.media;
    this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), s.addEventListener("playing", this.onvplaying), s.addEventListener("seeked", this.onvseeked), this.gapController = new vo(this.config, s, this.fragmentTracker, this.hls);
  }
  onMediaDetaching() {
    const {
      media: e
    } = this;
    e && this.onvplaying && this.onvseeked && (e.removeEventListener("playing", this.onvplaying), e.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), super.onMediaDetaching();
  }
  onMediaPlaying() {
    this.tick();
  }
  onMediaSeeked() {
    const e = this.media, t = e ? e.currentTime : null;
    U(t) && this.log(`Media seeked to ${t.toFixed(3)}`);
    const s = this.getMainFwdBufferInfo();
    if (s === null || s.len === 0) {
      this.warn(`Main forward buffer length on "seeked" event ${s ? s.len : "empty"})`);
      return;
    }
    this.tick();
  }
  onManifestLoading() {
    this.log("Trigger BUFFER_RESET"), this.hls.trigger(m.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = !1, this.startPosition = this.lastCurrentTime = 0, this.levels = this.fragPlaying = this.backtrackFragment = null, this.altAudio = this.audioOnly = !1;
  }
  onManifestParsed(e, t) {
    let s = !1, i = !1, r;
    t.levels.forEach((n) => {
      r = n.audioCodec, r && (r.indexOf("mp4a.40.2") !== -1 && (s = !0), r.indexOf("mp4a.40.5") !== -1 && (i = !0));
    }), this.audioCodecSwitch = s && i && !Ma(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
  }
  onLevelLoading(e, t) {
    const {
      levels: s
    } = this;
    if (!s || this.state !== D.IDLE)
      return;
    const i = s[t.level];
    (!i.details || i.details.live && this.levelLastLoaded !== t.level || this.waitForCdnTuneIn(i.details)) && (this.state = D.WAITING_LEVEL);
  }
  onLevelLoaded(e, t) {
    var s;
    const {
      levels: i
    } = this, r = t.level, n = t.details, o = n.totalduration;
    if (!i) {
      this.warn(`Levels were reset while loading level ${r}`);
      return;
    }
    this.log(`Level ${r} loaded [${n.startSN},${n.endSN}]${n.lastPartSn ? `[part-${n.lastPartSn}-${n.lastPartIndex}]` : ""}, cc [${n.startCC}, ${n.endCC}] duration:${o}`);
    const l = i[r], c = this.fragCurrent;
    c && (this.state === D.FRAG_LOADING || this.state === D.FRAG_LOADING_WAITING_RETRY) && (c.level !== t.level || c.urlId !== l.urlId) && c.loader && this.abortCurrentFrag();
    let d = 0;
    if (n.live || (s = l.details) != null && s.live) {
      if (this.checkLiveUpdate(n), n.deltaUpdateFailed)
        return;
      d = this.alignPlaylists(n, l.details);
    }
    if (l.details = n, this.levelLastLoaded = r, this.hls.trigger(m.LEVEL_UPDATED, {
      details: n,
      level: r
    }), this.state === D.WAITING_LEVEL) {
      if (this.waitForCdnTuneIn(n))
        return;
      this.state = D.IDLE;
    }
    this.startFragRequested ? n.live && this.synchronizeToLiveEdge(n) : this.setStartPosition(n, d), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const {
      frag: s,
      part: i,
      payload: r
    } = e, {
      levels: n
    } = this;
    if (!n) {
      this.warn(`Levels were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const o = n[s.level], l = o.details;
    if (!l) {
      this.warn(`Dropping fragment ${s.sn} of level ${s.level} after level details were reset`), this.fragmentTracker.removeFragment(s);
      return;
    }
    const c = o.videoCodec, d = l.PTSKnown || !l.live, u = (t = s.initSegment) == null ? void 0 : t.data, h = this._getAudioCodec(o), f = this.transmuxer = this.transmuxer || new Pr(this.hls, V.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)), g = i ? i.index : -1, p = g !== -1, y = new Os(s.level, s.sn, s.stats.chunkCount, r.byteLength, g, p), T = this.initPTS[s.cc];
    f.push(r, u, h, c, s, i, l.totalduration, d, y, T);
  }
  onAudioTrackSwitching(e, t) {
    const s = this.altAudio;
    if (!!!t.url) {
      if (this.mediaBuffer !== this.media) {
        this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
        const n = this.fragCurrent;
        n && (this.log("Switching to main audio track, cancel main fragment load"), n.abortRequests(), this.fragmentTracker.removeFragment(n)), this.resetTransmuxer(), this.resetLoadingState();
      } else
        this.audioOnly && this.resetTransmuxer();
      const r = this.hls;
      s && (r.trigger(m.BUFFER_FLUSHING, {
        startOffset: 0,
        endOffset: Number.POSITIVE_INFINITY,
        type: null
      }), this.fragmentTracker.removeAllFragments()), r.trigger(m.AUDIO_TRACK_SWITCHED, t);
    }
  }
  onAudioTrackSwitched(e, t) {
    const s = t.id, i = !!this.hls.audioTracks[s].url;
    if (i) {
      const r = this.videoBuffer;
      r && this.mediaBuffer !== r && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = r);
    }
    this.altAudio = i, this.tick();
  }
  onBufferCreated(e, t) {
    const s = t.tracks;
    let i, r, n = !1;
    for (const o in s) {
      const l = s[o];
      if (l.id === "main") {
        if (r = o, i = l, o === "video") {
          const c = s[o];
          c && (this.videoBuffer = c.buffer);
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
    } = t;
    if (s && s.type !== V.MAIN)
      return;
    if (this.fragContextChanged(s)) {
      this.warn(`Fragment ${s.sn}${i ? " p: " + i.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}`), this.state === D.PARSED && (this.state = D.IDLE);
      return;
    }
    const r = i ? i.stats : s.stats;
    this.fragLastKbps = Math.round(8 * r.total / (r.buffering.end - r.loading.first)), s.sn !== "initSegment" && (this.fragPrevious = s), this.fragBufferedComplete(s, i);
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = D.ERROR;
      return;
    }
    switch (t.details) {
      case I.FRAG_GAP:
      case I.FRAG_PARSING_ERROR:
      case I.FRAG_DECRYPT_ERROR:
      case I.FRAG_LOAD_ERROR:
      case I.FRAG_LOAD_TIMEOUT:
      case I.KEY_LOAD_ERROR:
      case I.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(V.MAIN, t);
        break;
      case I.LEVEL_LOAD_ERROR:
      case I.LEVEL_LOAD_TIMEOUT:
      case I.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === D.WAITING_LEVEL && ((s = t.context) == null ? void 0 : s.type) === W.LEVEL && (this.state = D.IDLE);
        break;
      case I.BUFFER_FULL_ERROR:
        if (!t.parent || t.parent !== "main")
          return;
        this.reduceLengthAndFlushBuffer(t) && this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
        break;
      case I.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  // Checks the health of the buffer and attempts to resolve playback stalls.
  checkBuffer() {
    const {
      media: e,
      gapController: t
    } = this;
    if (!(!e || !t || !e.readyState)) {
      if (this.loadedmetadata || !ee.getBuffered(e).length) {
        const s = this.state !== D.IDLE ? this.fragCurrent : null;
        t.poll(this.lastCurrentTime, s);
      }
      this.lastCurrentTime = e.currentTime;
    }
  }
  onFragLoadEmergencyAborted() {
    this.state = D.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate();
  }
  onBufferFlushed(e, {
    type: t
  }) {
    if (t !== X.AUDIO || this.audioOnly && !this.altAudio) {
      const s = (t === X.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
      this.afterBufferFlushed(s, t, V.MAIN);
    }
  }
  onLevelsUpdated(e, t) {
    this.levels = t.levels;
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
      const i = ee.getBuffered(e), n = (i.length ? i.start(0) : 0) - s;
      n > 0 && (n < this.config.maxBufferHole || n < this.config.maxFragLookUpTolerance) && (this.log(`adjusting start position by ${n} to match buffer start`), s += n, this.startPosition = s), this.log(`seek to target start position ${s} from current time ${t}`), e.currentTime = s;
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
      } = this;
      if (!s || this.fragContextChanged(e))
        return;
      t.fragmentError = 0, this.state = D.IDLE, this.startFragRequested = !1, this.bitrateTest = !1;
      const r = e.stats;
      r.parsing.start = r.parsing.end = r.buffering.start = r.buffering.end = self.performance.now(), i.trigger(m.FRAG_LOADED, s), e.bitrateTest = !1;
    });
  }
  _handleTransmuxComplete(e) {
    var t;
    const s = "main", {
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
      frag: l,
      part: c,
      level: d
    } = o, {
      video: u,
      text: h,
      id3: f,
      initSegment: g
    } = r, {
      details: p
    } = d, y = this.altAudio ? void 0 : r.audio;
    if (this.fragContextChanged(l)) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (this.state = D.PARSING, g) {
      if (g != null && g.tracks) {
        const x = l.initSegment || l;
        this._bufferInitSegment(d, g.tracks, x, n), i.trigger(m.FRAG_PARSING_INIT_SEGMENT, {
          frag: x,
          id: s,
          tracks: g.tracks
        });
      }
      const T = g.initPTS, E = g.timescale;
      U(T) && (this.initPTS[l.cc] = {
        baseTime: T,
        timescale: E
      }, i.trigger(m.INIT_PTS_FOUND, {
        frag: l,
        id: s,
        initPTS: T,
        timescale: E
      }));
    }
    if (u && p && l.sn !== "initSegment") {
      const T = p.fragments[l.sn - 1 - p.startSN], E = l.sn === p.startSN, x = !T || l.cc > T.cc;
      if (r.independent !== !1) {
        const {
          startPTS: A,
          endPTS: S,
          startDTS: k,
          endDTS: b
        } = u;
        if (c)
          c.elementaryStreams[u.type] = {
            startPTS: A,
            endPTS: S,
            startDTS: k,
            endDTS: b
          };
        else if (u.firstKeyFrame && u.independent && n.id === 1 && !x && (this.couldBacktrack = !0), u.dropped && u.independent) {
          const C = this.getMainFwdBufferInfo(), w = (C ? C.end : this.getLoadPosition()) + this.config.maxBufferHole, R = u.firstKeyFramePTS ? u.firstKeyFramePTS : A;
          if (!E && w < R - this.config.maxBufferHole && !x) {
            this.backtrack(l);
            return;
          } else
            x && (l.gap = !0);
          l.setElementaryStreamInfo(u.type, l.start, S, l.start, b, !0);
        }
        l.setElementaryStreamInfo(u.type, A, S, k, b), this.backtrackFragment && (this.backtrackFragment = l), this.bufferFragmentData(u, l, c, n, E || x);
      } else if (E || x)
        l.gap = !0;
      else {
        this.backtrack(l);
        return;
      }
    }
    if (y) {
      const {
        startPTS: T,
        endPTS: E,
        startDTS: x,
        endDTS: A
      } = y;
      c && (c.elementaryStreams[X.AUDIO] = {
        startPTS: T,
        endPTS: E,
        startDTS: x,
        endDTS: A
      }), l.setElementaryStreamInfo(X.AUDIO, T, E, x, A), this.bufferFragmentData(y, l, c, n);
    }
    if (p && f != null && (t = f.samples) != null && t.length) {
      const T = {
        id: s,
        frag: l,
        details: p,
        samples: f.samples
      };
      i.trigger(m.FRAG_PARSING_METADATA, T);
    }
    if (p && h) {
      const T = {
        id: s,
        frag: l,
        details: p,
        samples: h.samples
      };
      i.trigger(m.FRAG_PARSING_USERDATA, T);
    }
  }
  _bufferInitSegment(e, t, s, i) {
    if (this.state !== D.PARSING)
      return;
    this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && delete t.audio;
    const {
      audio: r,
      video: n,
      audiovideo: o
    } = t;
    if (r) {
      let l = e.audioCodec;
      const c = navigator.userAgent.toLowerCase();
      this.audioCodecSwitch && (l && (l.indexOf("mp4a.40.5") !== -1 ? l = "mp4a.40.2" : l = "mp4a.40.5"), r.metadata.channelCount !== 1 && c.indexOf("firefox") === -1 && (l = "mp4a.40.5")), c.indexOf("android") !== -1 && r.container !== "audio/mpeg" && (l = "mp4a.40.2", this.log(`Android: force audio codec to ${l}`)), e.audioCodec && e.audioCodec !== l && this.log(`Swapping manifest audio codec "${e.audioCodec}" for "${l}"`), r.levelCodec = l, r.id = "main", this.log(`Init audio buffer, container:${r.container}, codecs[selected/level/parsed]=[${l || ""}/${e.audioCodec || ""}/${r.codec}]`);
    }
    n && (n.levelCodec = e.videoCodec, n.id = "main", this.log(`Init video buffer, container:${n.container}, codecs[level/parsed]=[${e.videoCodec || ""}/${n.codec}]`)), o && this.log(`Init audiovideo buffer, container:${o.container}, codecs[level/parsed]=[${e.attrs.CODECS || ""}/${o.codec}]`), this.hls.trigger(m.BUFFER_CODECS, t), Object.keys(t).forEach((l) => {
      const d = t[l].initSegment;
      d != null && d.byteLength && this.hls.trigger(m.BUFFER_APPENDING, {
        type: l,
        data: d,
        frag: s,
        part: null,
        chunkMeta: i,
        parent: s.type
      });
    }), this.tick();
  }
  getMainFwdBufferInfo() {
    return this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, V.MAIN);
  }
  backtrack(e) {
    this.couldBacktrack = !0, this.backtrackFragment = e, this.resetTransmuxer(), this.flushBufferGap(e), this.fragmentTracker.removeFragment(e), this.fragPrevious = null, this.nextLoadPosition = e.start, this.state = D.IDLE;
  }
  checkFragmentChanged() {
    const e = this.media;
    let t = null;
    if (e && e.readyState > 1 && e.seeking === !1) {
      const s = e.currentTime;
      if (ee.isBuffered(e, s) ? t = this.getAppendedFrag(s) : ee.isBuffered(e, s + 0.1) && (t = this.getAppendedFrag(s + 0.1)), t) {
        this.backtrackFragment = null;
        const i = this.fragPlaying, r = t.level;
        (!i || t.sn !== i.sn || i.level !== r || t.urlId !== i.urlId) && (this.fragPlaying = t, this.hls.trigger(m.FRAG_CHANGED, {
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
    const e = this.media;
    return e ? this.fragPlaying || this.getAppendedFrag(e.currentTime) : null;
  }
  get currentProgramDateTime() {
    const e = this.media;
    if (e) {
      const t = e.currentTime, s = this.currentFrag;
      if (s && U(t) && U(s.programDateTime)) {
        const i = s.programDateTime + (t - s.start) * 1e3;
        return new Date(i);
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
class et {
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
class Ao {
  constructor(e, t, s, i = 100) {
    this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultTTFB_ = void 0, this.ttfb_ = void 0, this.defaultEstimate_ = s, this.minWeight_ = 1e-3, this.minDelayMs_ = 50, this.slow_ = new et(e), this.fast_ = new et(t), this.defaultTTFB_ = i, this.ttfb_ = new et(e);
  }
  update(e, t) {
    const {
      slow_: s,
      fast_: i,
      ttfb_: r
    } = this;
    s.halfLife !== e && (this.slow_ = new et(e, s.getEstimate(), s.getTotalWeight())), i.halfLife !== t && (this.fast_ = new et(t, i.getEstimate(), i.getTotalWeight())), r.halfLife !== e && (this.ttfb_ = new et(e, r.getEstimate(), r.getTotalWeight()));
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
  destroy() {
  }
}
class Io {
  constructor(e) {
    this.hls = void 0, this.lastLevelLoadSec = 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = -1, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = e;
    const t = e.config;
    this.bwEstimator = new Ao(t.abrEwmaSlowVoD, t.abrEwmaFastVoD, t.abrEwmaDefaultEstimate), this.registerListeners();
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.FRAG_LOADING, this.onFragLoading, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this), e.on(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.FRAG_LOADING, this.onFragLoading, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this), e.off(m.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this);
  }
  destroy() {
    this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null;
  }
  onFragLoading(e, t) {
    var s;
    const i = t.frag;
    this.ignoreFragment(i) || (this.fragCurrent = i, this.partCurrent = (s = t.part) != null ? s : null, this.clearTimer(), this.timer = self.setInterval(this.onCheck, 100));
  }
  onLevelSwitching(e, t) {
    this.clearTimer();
  }
  getTimeToLoadFrag(e, t, s, i) {
    const r = e + s / t, n = i ? this.lastLevelLoadSec : 0;
    return r + n;
  }
  onLevelLoaded(e, t) {
    const s = this.hls.config, {
      total: i,
      bwEstimate: r
    } = t.stats;
    U(i) && U(r) && (this.lastLevelLoadSec = 8 * i / r), t.details.live ? this.bwEstimator.update(s.abrEwmaSlowLive, s.abrEwmaFastLive) : this.bwEstimator.update(s.abrEwmaSlowVoD, s.abrEwmaFastVoD);
  }
  /*
      This method monitors the download rate of the current fragment, and will downswitch if that fragment will not load
      quickly enough to prevent underbuffering
    */
  _abandonRulesCheck() {
    const {
      fragCurrent: e,
      partCurrent: t,
      hls: s
    } = this, {
      autoLevelEnabled: i,
      media: r
    } = s;
    if (!e || !r)
      return;
    const n = performance.now(), o = t ? t.stats : e.stats, l = t ? t.duration : e.duration, c = n - o.loading.start;
    if (o.aborted || o.loaded && o.loaded === o.total || e.level === 0) {
      this.clearTimer(), this._nextAutoLevel = -1;
      return;
    }
    if (!i || r.paused || !r.playbackRate || !r.readyState)
      return;
    const d = s.mainForwardBufferInfo;
    if (d === null)
      return;
    const u = this.bwEstimator.getEstimateTTFB(), h = Math.abs(r.playbackRate);
    if (c <= Math.max(u, 1e3 * (l / (h * 2))))
      return;
    const f = d.len / h;
    if (f >= 2 * l / h)
      return;
    const g = o.loading.first ? o.loading.first - o.loading.start : -1, p = o.loaded && g > -1, y = this.bwEstimator.getEstimate(), {
      levels: T,
      minAutoLevel: E
    } = s, x = T[e.level], A = o.total || Math.max(o.loaded, Math.round(l * x.maxBitrate / 8));
    let S = c - g;
    S < 1 && p && (S = Math.min(c, o.loaded * 8 / y));
    const k = p ? o.loaded * 1e3 / S : 0, b = k ? (A - o.loaded) / k : A * 8 / y + u / 1e3;
    if (b <= f)
      return;
    const C = k ? k * 8 : y;
    let w = Number.POSITIVE_INFINITY, R;
    for (R = e.level - 1; R > E; R--) {
      const B = T[R].maxBitrate;
      if (w = this.getTimeToLoadFrag(u / 1e3, C, l * B, !T[R].details), w < f)
        break;
    }
    w >= b || w > l * 10 || (s.nextLoadLevel = R, p ? this.bwEstimator.sample(c - Math.min(u, g), o.loaded) : this.bwEstimator.sampleTTFB(c), this.clearTimer(), v.warn(`[abr] Fragment ${e.sn}${t ? " part " + t.index : ""} of level ${e.level} is loading too slowly;
      Time to underbuffer: ${f.toFixed(3)} s
      Estimated load time for current fragment: ${b.toFixed(3)} s
      Estimated load time for down switch fragment: ${w.toFixed(3)} s
      TTFB estimate: ${g}
      Current BW estimate: ${U(y) ? (y / 1024).toFixed(3) : "Unknown"} Kb/s
      New BW estimate: ${(this.bwEstimator.getEstimate() / 1024).toFixed(3)} Kb/s
      Aborting and switching to level ${R}`), e.loader && (this.fragCurrent = this.partCurrent = null, e.abortRequests()), s.trigger(m.FRAG_LOAD_EMERGENCY_ABORTED, {
      frag: e,
      part: t,
      stats: o
    }));
  }
  onFragLoaded(e, {
    frag: t,
    part: s
  }) {
    const i = s ? s.stats : t.stats;
    if (t.type === V.MAIN && this.bwEstimator.sampleTTFB(i.loading.first - i.loading.start), !this.ignoreFragment(t)) {
      if (this.clearTimer(), this.lastLoadedFragLevel = t.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
        const r = s ? s.duration : t.duration, n = this.hls.levels[t.level], o = (n.loaded ? n.loaded.bytes : 0) + i.loaded, l = (n.loaded ? n.loaded.duration : 0) + r;
        n.loaded = {
          bytes: o,
          duration: l
        }, n.realBitrate = Math.round(8 * o / l);
      }
      if (t.bitrateTest) {
        const r = {
          stats: i,
          frag: t,
          part: s,
          id: t.type
        };
        this.onFragBuffered(m.FRAG_BUFFERED, r), t.bitrateTest = !1;
      }
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
    this.bwEstimator.sample(n, r.loaded), r.bwEstimate = this.bwEstimator.getEstimate(), s.bitrateTest ? this.bitrateTestDelay = n / 1e3 : this.bitrateTestDelay = 0;
  }
  ignoreFragment(e) {
    return e.type !== V.MAIN || e.sn === "initSegment";
  }
  clearTimer() {
    self.clearInterval(this.timer);
  }
  // return next auto level
  get nextAutoLevel() {
    const e = this._nextAutoLevel, t = this.bwEstimator;
    if (e !== -1 && !t.canEstimate())
      return e;
    let s = this.getNextABRAutoLevel();
    if (e !== -1) {
      const i = this.hls.levels;
      if (i.length > Math.max(e, s) && i[e].loadError <= i[s].loadError)
        return e;
    }
    return e !== -1 && (s = Math.min(e, s)), s;
  }
  getNextABRAutoLevel() {
    const {
      fragCurrent: e,
      partCurrent: t,
      hls: s
    } = this, {
      maxAutoLevel: i,
      config: r,
      minAutoLevel: n,
      media: o
    } = s, l = t ? t.duration : e ? e.duration : 0, c = o && o.playbackRate !== 0 ? Math.abs(o.playbackRate) : 1, d = this.bwEstimator ? this.bwEstimator.getEstimate() : r.abrEwmaDefaultEstimate, u = s.mainForwardBufferInfo, h = (u ? u.len : 0) / c;
    let f = this.findBestLevel(d, n, i, h, r.abrBandWidthFactor, r.abrBandWidthUpFactor);
    if (f >= 0)
      return f;
    v.trace(`[abr] ${h ? "rebuffering expected" : "buffer is empty"}, finding optimal quality level`);
    let g = l ? Math.min(l, r.maxStarvationDelay) : r.maxStarvationDelay, p = r.abrBandWidthFactor, y = r.abrBandWidthUpFactor;
    if (!h) {
      const T = this.bitrateTestDelay;
      T && (g = (l ? Math.min(l, r.maxLoadingDelay) : r.maxLoadingDelay) - T, v.trace(`[abr] bitrate test took ${Math.round(1e3 * T)}ms, set first fragment max fetchDuration to ${Math.round(1e3 * g)} ms`), p = y = 1);
    }
    return f = this.findBestLevel(d, n, i, h + g, p, y), Math.max(f, 0);
  }
  findBestLevel(e, t, s, i, r, n) {
    var o;
    const {
      fragCurrent: l,
      partCurrent: c,
      lastLoadedFragLevel: d
    } = this, {
      levels: u
    } = this.hls, h = u[d], f = !!(h != null && (o = h.details) != null && o.live), g = h == null ? void 0 : h.codecSet, p = c ? c.duration : l ? l.duration : 0, y = this.bwEstimator.getEstimateTTFB() / 1e3;
    let T = t, E = -1;
    for (let x = s; x >= t; x--) {
      const A = u[x];
      if (!A || g && A.codecSet !== g) {
        A && (T = Math.min(x, T), E = Math.max(x, E));
        continue;
      }
      E !== -1 && v.trace(`[abr] Skipped level(s) ${T}-${E} with CODECS:"${u[E].attrs.CODECS}"; not compatible with "${h.attrs.CODECS}"`);
      const S = A.details, k = (c ? S == null ? void 0 : S.partTarget : S == null ? void 0 : S.averagetargetduration) || p;
      let b;
      x <= d ? b = r * e : b = n * e;
      const C = u[x].maxBitrate, w = this.getTimeToLoadFrag(y, b, C * k, S === void 0);
      if (v.trace(`[abr] level:${x} adjustedbw-bitrate:${Math.round(b - C)} avgDuration:${k.toFixed(1)} maxFetchDuration:${i.toFixed(1)} fetchDuration:${w.toFixed(1)}`), b > C && // fragment fetchDuration unknown OR live stream OR fragment fetchDuration less than max allowed fetch duration, then this level matches
      // we don't account for max Fetch Duration for live streams, this is to avoid switching down when near the edge of live sliding window ...
      // special case to support startLevel = -1 (bitrateTest) on live streams : in that case we should not exit loop so that findBestLevel will return -1
      (w === 0 || !U(w) || f && !this.bitrateTestDelay || w < i))
        return x;
    }
    return -1;
  }
  set nextAutoLevel(e) {
    this._nextAutoLevel = e;
  }
}
class Fr {
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
      e.length === 1 ? s = e[0] : s = Ro(e, t);
    else
      return new Uint8Array(0);
    return this.reset(), s;
  }
  reset() {
    this.chunks.length = 0, this.dataLength = 0;
  }
}
function Ro(a, e) {
  const t = new Uint8Array(e);
  let s = 0;
  for (let i = 0; i < a.length; i++) {
    const r = a[i];
    t.set(r, s), s += r.length;
  }
  return t;
}
const bi = 100;
class bo extends Us {
  constructor(e, t, s) {
    super(e, t, s, "[audio-stream-controller]", V.AUDIO), this.videoBuffer = null, this.videoTrackCC = -1, this.waitingVideoCC = -1, this.bufferedTrack = null, this.switchingTrack = null, this.trackId = -1, this.waitingData = null, this.mainDetails = null, this.bufferFlushed = !1, this.cachedTrackLoadedData = null, this._registerListeners();
  }
  onHandlerDestroying() {
    this._unregisterListeners(), this.mainDetails = null, this.bufferedTrack = null, this.switchingTrack = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(m.ERROR, this.onError, this), e.on(m.BUFFER_RESET, this.onBufferReset, this), e.on(m.BUFFER_CREATED, this.onBufferCreated, this), e.on(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.off(m.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(m.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(m.ERROR, this.onError, this), e.off(m.BUFFER_RESET, this.onBufferReset, this), e.off(m.BUFFER_CREATED, this.onBufferCreated, this), e.off(m.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  // INIT_PTS_FOUND is triggered when the video track parsed in the stream-controller has a new PTS value
  onInitPtsFound(e, {
    frag: t,
    id: s,
    initPTS: i,
    timescale: r
  }) {
    if (s === "main") {
      const n = t.cc;
      this.initPTS[t.cc] = {
        baseTime: i,
        timescale: r
      }, this.log(`InitPTS for cc: ${n} found from main: ${i}`), this.videoTrackCC = n, this.state === D.WAITING_INIT_PTS && this.tick();
    }
  }
  startLoad(e) {
    if (!this.levels) {
      this.startPosition = e, this.state = D.STOPPED;
      return;
    }
    const t = this.lastCurrentTime;
    this.stopLoad(), this.setInterval(bi), t > 0 && e === -1 ? (this.log(`Override startPosition with lastCurrentTime @${t.toFixed(3)}`), e = t, this.state = D.IDLE) : (this.loadedmetadata = !1, this.state = D.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
  }
  doTick() {
    switch (this.state) {
      case D.IDLE:
        this.doTickIdle();
        break;
      case D.WAITING_TRACK: {
        var e;
        const {
          levels: s,
          trackId: i
        } = this, r = s == null || (e = s[i]) == null ? void 0 : e.details;
        if (r) {
          if (this.waitForCdnTuneIn(r))
            break;
          this.state = D.WAITING_INIT_PTS;
        }
        break;
      }
      case D.FRAG_LOADING_WAITING_RETRY: {
        var t;
        const s = performance.now(), i = this.retryDate;
        (!i || s >= i || (t = this.media) != null && t.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.resetStartWhenNotLoaded(this.trackId), this.state = D.IDLE);
        break;
      }
      case D.WAITING_INIT_PTS: {
        const s = this.waitingData;
        if (s) {
          const {
            frag: i,
            part: r,
            cache: n,
            complete: o
          } = s;
          if (this.initPTS[i.cc] !== void 0) {
            this.waitingData = null, this.waitingVideoCC = -1, this.state = D.FRAG_LOADING;
            const l = n.flush(), c = {
              frag: i,
              part: r,
              payload: l,
              networkDetails: null
            };
            this._handleFragmentLoadProgress(c), o && super._handleFragmentLoadComplete(c);
          } else if (this.videoTrackCC !== this.waitingVideoCC)
            this.log(`Waiting fragment cc (${i.cc}) cancelled because video is at cc ${this.videoTrackCC}`), this.clearWaitingFragment();
          else {
            const l = this.getLoadPosition(), c = ee.bufferInfo(this.mediaBuffer, l, this.config.maxBufferHole);
            As(c.end, this.config.maxFragLookUpTolerance, i) < 0 && (this.log(`Waiting fragment cc (${i.cc}) @ ${i.start} cancelled because another fragment at ${c.end} is needed`), this.clearWaitingFragment());
          }
        } else
          this.state = D.IDLE;
      }
    }
    this.onTickEnd();
  }
  clearWaitingFragment() {
    const e = this.waitingData;
    e && (this.fragmentTracker.removeFragment(e.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = D.IDLE);
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
    const {
      hls: e,
      levels: t,
      media: s,
      trackId: i
    } = this, r = e.config;
    if (!(t != null && t[i]) || !s && (this.startFragRequested || !r.startFragPrefetch))
      return;
    const n = t[i], o = n.details;
    if (!o || o.live && this.levelLastLoaded !== i || this.waitForCdnTuneIn(o)) {
      this.state = D.WAITING_TRACK;
      return;
    }
    const l = this.mediaBuffer ? this.mediaBuffer : this.media;
    this.bufferFlushed && l && (this.bufferFlushed = !1, this.afterBufferFlushed(l, X.AUDIO, V.AUDIO));
    const c = this.getFwdBufferInfo(l, V.AUDIO);
    if (c === null)
      return;
    const {
      bufferedTrack: d,
      switchingTrack: u
    } = this;
    if (!u && this._streamEnded(c, o)) {
      e.trigger(m.BUFFER_EOS, {
        type: "audio"
      }), this.state = D.ENDED;
      return;
    }
    const h = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, V.MAIN), f = c.len, g = this.getMaxBufferLength(h == null ? void 0 : h.len);
    if (f >= g && !u)
      return;
    const y = o.fragments[0].start;
    let T = c.end;
    if (u && s) {
      const S = this.getLoadPosition();
      d && u.attrs !== d.attrs && (T = S), o.PTSKnown && S < y && (c.end > y || c.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), s.currentTime = y + 0.05);
    }
    let E = this.getNextFragment(T, o), x = !1;
    if (E && this.isLoopLoading(E, T) && (x = !!E.gap, E = this.getNextFragmentLoopLoading(E, o, c, V.MAIN, g)), !E) {
      this.bufferFlushed = !0;
      return;
    }
    const A = h && E.start > h.end + o.targetduration;
    if (A || // Or wait for main buffer after buffing some audio
    !(h != null && h.len) && c.len) {
      const S = this.getAppendedFrag(E.start, V.MAIN);
      if (S === null || (x || (x = !!S.gap || !!A && h.len === 0), A && !x || x && c.nextStart && c.nextStart < S.end))
        return;
    }
    this.loadFragment(E, n, T);
  }
  getMaxBufferLength(e) {
    const t = super.getMaxBufferLength();
    return e ? Math.min(Math.max(t, e), this.config.maxMaxBufferLength) : t;
  }
  onMediaDetaching() {
    this.videoBuffer = null, super.onMediaDetaching();
  }
  onAudioTracksUpdated(e, {
    audioTracks: t
  }) {
    this.resetTransmuxer(), this.levels = t.map((s) => new ht(s));
  }
  onAudioTrackSwitching(e, t) {
    const s = !!t.url;
    this.trackId = t.id;
    const {
      fragCurrent: i
    } = this;
    i && (i.abortRequests(), this.removeUnbufferedFrags(i.start)), this.resetLoadingState(), s ? this.setInterval(bi) : this.resetTransmuxer(), s ? (this.switchingTrack = t, this.state = D.IDLE) : (this.switchingTrack = null, this.bufferedTrack = t, this.state = D.STOPPED), this.tick();
  }
  onManifestLoading() {
    this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1, this.levels = this.mainDetails = this.waitingData = this.bufferedTrack = this.cachedTrackLoadedData = this.switchingTrack = null, this.startFragRequested = !1, this.trackId = this.videoTrackCC = this.waitingVideoCC = -1;
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details, this.cachedTrackLoadedData !== null && (this.hls.trigger(m.AUDIO_TRACK_LOADED, this.cachedTrackLoadedData), this.cachedTrackLoadedData = null);
  }
  onAudioTrackLoaded(e, t) {
    var s;
    if (this.mainDetails == null) {
      this.cachedTrackLoadedData = t;
      return;
    }
    const {
      levels: i
    } = this, {
      details: r,
      id: n
    } = t;
    if (!i) {
      this.warn(`Audio tracks were reset while loading level ${n}`);
      return;
    }
    this.log(`Track ${n} loaded [${r.startSN},${r.endSN}]${r.lastPartSn ? `[part-${r.lastPartSn}-${r.lastPartIndex}]` : ""},duration:${r.totalduration}`);
    const o = i[n];
    let l = 0;
    if (r.live || (s = o.details) != null && s.live) {
      this.checkLiveUpdate(r);
      const c = this.mainDetails;
      if (r.deltaUpdateFailed || !c)
        return;
      !o.details && r.hasProgramDateTime && c.hasProgramDateTime ? (Tr(r, c), l = r.fragments[0].start) : l = this.alignPlaylists(r, o.details);
    }
    o.details = r, this.levelLastLoaded = n, !this.startFragRequested && (this.mainDetails || !r.live) && this.setStartPosition(o.details, l), this.state === D.WAITING_TRACK && !this.waitForCdnTuneIn(r) && (this.state = D.IDLE), this.tick();
  }
  _handleFragmentLoadProgress(e) {
    var t;
    const {
      frag: s,
      part: i,
      payload: r
    } = e, {
      config: n,
      trackId: o,
      levels: l
    } = this;
    if (!l) {
      this.warn(`Audio tracks were reset while fragment load was in progress. Fragment ${s.sn} of level ${s.level} will not be buffered`);
      return;
    }
    const c = l[o];
    if (!c) {
      this.warn("Audio track is undefined on fragment load progress");
      return;
    }
    const d = c.details;
    if (!d) {
      this.warn("Audio track details undefined on fragment load progress"), this.removeUnbufferedFrags(s.start);
      return;
    }
    const u = n.defaultAudioCodec || c.audioCodec || "mp4a.40.2";
    let h = this.transmuxer;
    h || (h = this.transmuxer = new Pr(this.hls, V.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
    const f = this.initPTS[s.cc], g = (t = s.initSegment) == null ? void 0 : t.data;
    if (f !== void 0) {
      const y = i ? i.index : -1, T = y !== -1, E = new Os(s.level, s.sn, s.stats.chunkCount, r.byteLength, y, T);
      h.push(r, g, u, "", s, i, d.totalduration, !1, E, f);
    } else {
      this.log(`Unknown video PTS for cc ${s.cc}, waiting for video PTS before demuxing audio frag ${s.sn} of [${d.startSN} ,${d.endSN}],track ${o}`);
      const {
        cache: p
      } = this.waitingData = this.waitingData || {
        frag: s,
        part: i,
        cache: new Fr(),
        complete: !1
      };
      p.push(new Uint8Array(r)), this.waitingVideoCC = this.videoTrackCC, this.state = D.WAITING_INIT_PTS;
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
    this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1;
  }
  onBufferCreated(e, t) {
    const s = t.tracks.audio;
    s && (this.mediaBuffer = s.buffer || null), t.tracks.video && (this.videoBuffer = t.tracks.video.buffer || null);
  }
  onFragBuffered(e, t) {
    const {
      frag: s,
      part: i
    } = t;
    if (s.type !== V.AUDIO) {
      if (!this.loadedmetadata && s.type === V.MAIN) {
        const r = this.videoBuffer || this.media;
        r && ee.getBuffered(r).length && (this.loadedmetadata = !0);
      }
      return;
    }
    if (this.fragContextChanged(s)) {
      this.warn(`Fragment ${s.sn}${i ? " p: " + i.index : ""} of level ${s.level} finished buffering, but was aborted. state: ${this.state}, audioSwitch: ${this.switchingTrack ? this.switchingTrack.name : "false"}`);
      return;
    }
    if (s.sn !== "initSegment") {
      this.fragPrevious = s;
      const r = this.switchingTrack;
      r && (this.bufferedTrack = r, this.switchingTrack = null, this.hls.trigger(m.AUDIO_TRACK_SWITCHED, he({}, r)));
    }
    this.fragBufferedComplete(s, i);
  }
  onError(e, t) {
    var s;
    if (t.fatal) {
      this.state = D.ERROR;
      return;
    }
    switch (t.details) {
      case I.FRAG_GAP:
      case I.FRAG_PARSING_ERROR:
      case I.FRAG_DECRYPT_ERROR:
      case I.FRAG_LOAD_ERROR:
      case I.FRAG_LOAD_TIMEOUT:
      case I.KEY_LOAD_ERROR:
      case I.KEY_LOAD_TIMEOUT:
        this.onFragmentOrKeyLoadError(V.AUDIO, t);
        break;
      case I.AUDIO_TRACK_LOAD_ERROR:
      case I.AUDIO_TRACK_LOAD_TIMEOUT:
      case I.LEVEL_PARSING_ERROR:
        !t.levelRetry && this.state === D.WAITING_TRACK && ((s = t.context) == null ? void 0 : s.type) === W.AUDIO_TRACK && (this.state = D.IDLE);
        break;
      case I.BUFFER_FULL_ERROR:
        if (!t.parent || t.parent !== "audio")
          return;
        this.reduceLengthAndFlushBuffer(t) && (this.bufferedTrack = null, super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio"));
        break;
      case I.INTERNAL_EXCEPTION:
        this.recoverWorkerError(t);
        break;
    }
  }
  onBufferFlushed(e, {
    type: t
  }) {
    t === X.AUDIO && (this.bufferFlushed = !0, this.state === D.ENDED && (this.state = D.IDLE));
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
      frag: l,
      part: c,
      level: d
    } = o, {
      details: u
    } = d, {
      audio: h,
      text: f,
      id3: g,
      initSegment: p
    } = r;
    if (this.fragContextChanged(l) || !u) {
      this.fragmentTracker.removeFragment(l);
      return;
    }
    if (this.state = D.PARSING, this.switchingTrack && h && this.completeAudioSwitch(this.switchingTrack), p != null && p.tracks) {
      const y = l.initSegment || l;
      this._bufferInitSegment(p.tracks, y, n), i.trigger(m.FRAG_PARSING_INIT_SEGMENT, {
        frag: y,
        id: s,
        tracks: p.tracks
      });
    }
    if (h) {
      const {
        startPTS: y,
        endPTS: T,
        startDTS: E,
        endDTS: x
      } = h;
      c && (c.elementaryStreams[X.AUDIO] = {
        startPTS: y,
        endPTS: T,
        startDTS: E,
        endDTS: x
      }), l.setElementaryStreamInfo(X.AUDIO, y, T, E, x), this.bufferFragmentData(h, l, c, n);
    }
    if (g != null && (t = g.samples) != null && t.length) {
      const y = ne({
        id: s,
        frag: l,
        details: u
      }, g);
      i.trigger(m.FRAG_PARSING_METADATA, y);
    }
    if (f) {
      const y = ne({
        id: s,
        frag: l,
        details: u
      }, f);
      i.trigger(m.FRAG_PARSING_USERDATA, y);
    }
  }
  _bufferInitSegment(e, t, s) {
    if (this.state !== D.PARSING)
      return;
    e.video && delete e.video;
    const i = e.audio;
    if (!i)
      return;
    i.levelCodec = i.codec, i.id = "audio", this.log(`Init audio buffer, container:${i.container}, codecs[parsed]=[${i.codec}]`), this.hls.trigger(m.BUFFER_CODECS, e);
    const r = i.initSegment;
    if (r != null && r.byteLength) {
      const n = {
        type: "audio",
        frag: t,
        part: null,
        chunkMeta: s,
        parent: t.type,
        data: r
      };
      this.hls.trigger(m.BUFFER_APPENDING, n);
    }
    this.tick();
  }
  loadFragment(e, t, s) {
    const i = this.fragmentTracker.getState(e);
    if (this.fragCurrent = e, this.switchingTrack || i === ae.NOT_LOADED || i === ae.PARTIAL) {
      var r;
      e.sn === "initSegment" ? this._loadInitSegment(e, t) : (r = t.details) != null && r.live && !this.initPTS[e.cc] ? (this.log(`Waiting for video PTS in continuity counter ${e.cc} of live stream before loading audio fragment ${e.sn} of level ${this.trackId}`), this.state = D.WAITING_INIT_PTS) : (this.startFragRequested = !0, super.loadFragment(e, t, s));
    } else
      this.clearTrackerIfNeeded(e);
  }
  completeAudioSwitch(e) {
    const {
      hls: t,
      media: s,
      bufferedTrack: i
    } = this, r = i == null ? void 0 : i.attrs, n = e.attrs;
    s && r && (r.CHANNELS !== n.CHANNELS || r.NAME !== n.NAME || r.LANGUAGE !== n.LANGUAGE) && (this.log("Switching audio track : flushing all audio"), super.flushMainBuffer(0, Number.POSITIVE_INFINITY, "audio")), this.bufferedTrack = e, this.switchingTrack = null, t.trigger(m.AUDIO_TRACK_SWITCHED, he({}, e));
  }
}
class Do extends Fs {
  constructor(e) {
    super(e, "[audio-track-controller]"), this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0, this.registerListeners();
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
    this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.currentTrack = null, this.selectDefaultTrack = !0;
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
      this.warn(`Track with id:${s} and group:${i} not found in active group ${n.groupId}`);
      return;
    }
    const o = n.details;
    n.details = t.details, this.log(`audio-track ${s} "${n.name}" lang:${n.lang} group:${i} loaded [${r.startSN}-${r.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!(t != null && t.audioGroupIds))
      return;
    const s = t.audioGroupIds[t.urlId];
    if (this.groupId !== s) {
      this.groupId = s || null;
      const i = this.tracks.filter((n) => !s || n.groupId === s);
      this.selectDefaultTrack && !i.some((n) => n.default) && (this.selectDefaultTrack = !1), this.tracksInGroup = i;
      const r = {
        audioTracks: i
      };
      this.log(`Updating audio tracks, ${i.length} track(s) found in group:${s}`), this.hls.trigger(m.AUDIO_TRACKS_UPDATED, r), this.selectInitialTrack();
    } else
      this.shouldReloadPlaylist(this.currentTrack) && this.setAudioTrack(this.trackId);
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === W.AUDIO_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && (this.requestScheduled = -1, this.checkRetry(t));
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
  setAudioTrack(e) {
    const t = this.tracksInGroup;
    if (e < 0 || e >= t.length) {
      this.warn("Invalid id passed to audio-track controller");
      return;
    }
    this.clearTimer();
    const s = this.currentTrack;
    t[this.trackId];
    const i = t[e], {
      groupId: r,
      name: n
    } = i;
    if (this.log(`Switching to audio-track ${e} "${n}" lang:${i.lang} group:${r}`), this.trackId = e, this.currentTrack = i, this.selectDefaultTrack = !1, this.hls.trigger(m.AUDIO_TRACK_SWITCHING, he({}, i)), i.details && !i.details.live)
      return;
    const o = this.switchParams(i.url, s == null ? void 0 : s.details);
    this.loadPlaylist(o);
  }
  selectInitialTrack() {
    const e = this.tracksInGroup, t = this.findTrackId(this.currentTrack) | this.findTrackId(null);
    if (t !== -1)
      this.setAudioTrack(t);
    else {
      const s = new Error(`No track found for running audio group-ID: ${this.groupId} track count: ${e.length}`);
      this.warn(s.message), this.hls.trigger(m.ERROR, {
        type: G.MEDIA_ERROR,
        details: I.AUDIO_TRACK_LOAD_ERROR,
        fatal: !0,
        error: s
      });
    }
  }
  findTrackId(e) {
    const t = this.tracksInGroup;
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      if ((!this.selectDefaultTrack || i.default) && (!e || e.attrs["STABLE-RENDITION-ID"] !== void 0 && e.attrs["STABLE-RENDITION-ID"] === i.attrs["STABLE-RENDITION-ID"] || e.name === i.name && e.lang === i.lang))
        return i.id;
    }
    return -1;
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.tracksInGroup[this.trackId];
    if (this.shouldLoadPlaylist(t)) {
      const s = t.id, i = t.groupId;
      let r = t.url;
      if (e)
        try {
          r = e.addDirectives(r);
        } catch (n) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${n}`);
        }
      this.log(`loading audio-track playlist ${s} "${t.name}" lang:${t.lang} group:${i}`), this.clearTimer(), this.hls.trigger(m.AUDIO_TRACK_LOADING, {
        url: r,
        id: s,
        groupId: i,
        deliveryDirectives: e || null
      });
    }
  }
}
function Or(a, e) {
  if (a.length !== e.length)
    return !1;
  for (let t = 0; t < a.length; t++)
    if (!Co(a[t].attrs, e[t].attrs))
      return !1;
  return !0;
}
function Co(a, e) {
  const t = a["STABLE-RENDITION-ID"];
  return t ? t === e["STABLE-RENDITION-ID"] : !["LANGUAGE", "NAME", "CHARACTERISTICS", "AUTOSELECT", "DEFAULT", "FORCED"].some((s) => a[s] !== e[s]);
}
const Di = 500;
class _o extends Us {
  constructor(e, t, s) {
    super(e, t, s, "[subtitle-stream-controller]", V.SUBTITLE), this.levels = [], this.currentTrackId = -1, this.tracksBuffered = [], this.mainDetails = null, this._registerListeners();
  }
  onHandlerDestroying() {
    this._unregisterListeners(), this.mainDetails = null;
  }
  _registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.LEVEL_LOADED, this.onLevelLoaded, this), e.on(m.ERROR, this.onError, this), e.on(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(m.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  _unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.LEVEL_LOADED, this.onLevelLoaded, this), e.off(m.ERROR, this.onError, this), e.off(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(m.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(m.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(m.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(m.FRAG_BUFFERED, this.onFragBuffered, this);
  }
  startLoad(e) {
    this.stopLoad(), this.state = D.IDLE, this.setInterval(Di), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick();
  }
  onManifestLoading() {
    this.mainDetails = null, this.fragmentTracker.removeAllFragments();
  }
  onMediaDetaching() {
    this.tracksBuffered = [], super.onMediaDetaching();
  }
  onLevelLoaded(e, t) {
    this.mainDetails = t.details;
  }
  onSubtitleFragProcessed(e, t) {
    const {
      frag: s,
      success: i
    } = t;
    if (this.fragPrevious = s, this.state = D.IDLE, !i)
      return;
    const r = this.tracksBuffered[this.currentTrackId];
    if (!r)
      return;
    let n;
    const o = s.start;
    for (let c = 0; c < r.length; c++)
      if (o >= r[c].start && o <= r[c].end) {
        n = r[c];
        break;
      }
    const l = s.start + s.duration;
    n ? n.end = l : (n = {
      start: o,
      end: l
    }, r.push(n)), this.fragmentTracker.fragBuffered(s);
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
      }), this.fragmentTracker.removeFragmentsInRange(s, r, V.SUBTITLE);
    }
  }
  onFragBuffered(e, t) {
    if (!this.loadedmetadata && t.frag.type === V.MAIN) {
      var s;
      (s = this.media) != null && s.buffered.length && (this.loadedmetadata = !0);
    }
  }
  // If something goes wrong, proceed to next frag, if we were processing one.
  onError(e, t) {
    const s = t.frag;
    (s == null ? void 0 : s.type) === V.SUBTITLE && (this.fragCurrent && this.fragCurrent.abortRequests(), this.state !== D.STOPPED && (this.state = D.IDLE));
  }
  // Got all new subtitle levels.
  onSubtitleTracksUpdated(e, {
    subtitleTracks: t
  }) {
    if (Or(this.levels, t)) {
      this.levels = t.map((s) => new ht(s));
      return;
    }
    this.tracksBuffered = [], this.levels = t.map((s) => {
      const i = new ht(s);
      return this.tracksBuffered[i.id] = [], i;
    }), this.fragmentTracker.removeFragmentsInRange(0, Number.POSITIVE_INFINITY, V.SUBTITLE), this.fragPrevious = null, this.mediaBuffer = null;
  }
  onSubtitleTrackSwitch(e, t) {
    if (this.currentTrackId = t.id, !this.levels.length || this.currentTrackId === -1) {
      this.clearInterval();
      return;
    }
    const s = this.levels[this.currentTrackId];
    s != null && s.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, s && this.setInterval(Di);
  }
  // Got a new set of subtitle fragments.
  onSubtitleTrackLoaded(e, t) {
    var s;
    const {
      details: i,
      id: r
    } = t, {
      currentTrackId: n,
      levels: o
    } = this;
    if (!o.length)
      return;
    const l = o[n];
    if (r >= o.length || r !== n || !l)
      return;
    this.mediaBuffer = this.mediaBufferTimeRanges;
    let c = 0;
    if (i.live || (s = l.details) != null && s.live) {
      const d = this.mainDetails;
      if (i.deltaUpdateFailed || !d)
        return;
      const u = d.fragments[0];
      l.details ? (c = this.alignPlaylists(i, l.details), c === 0 && u && (c = u.start, Ls(i, c))) : i.hasProgramDateTime && d.hasProgramDateTime ? (Tr(i, d), c = i.fragments[0].start) : u && (c = u.start, Ls(i, c));
    }
    l.details = i, this.levelLastLoaded = r, !this.startFragRequested && (this.mainDetails || !i.live) && this.setStartPosition(l.details, c), this.tick(), i.live && !this.fragCurrent && this.media && this.state === D.IDLE && (ft(null, i.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), l.details = void 0));
  }
  _handleFragmentLoadComplete(e) {
    const {
      frag: t,
      payload: s
    } = e, i = t.decryptdata, r = this.hls;
    if (!this.fragContextChanged(t) && s && s.byteLength > 0 && i && i.key && i.iv && i.method === "AES-128") {
      const n = performance.now();
      this.decrypter.decrypt(new Uint8Array(s), i.key.buffer, i.iv.buffer).catch((o) => {
        throw r.trigger(m.ERROR, {
          type: G.MEDIA_ERROR,
          details: I.FRAG_DECRYPT_ERROR,
          fatal: !1,
          error: o,
          reason: o.message,
          frag: t
        }), o;
      }).then((o) => {
        const l = performance.now();
        r.trigger(m.FRAG_DECRYPTED, {
          frag: t,
          payload: o,
          stats: {
            tstart: n,
            tdecrypt: l
          }
        });
      }).catch((o) => {
        this.warn(`${o.name}: ${o.message}`), this.state = D.IDLE;
      });
    }
  }
  doTick() {
    if (!this.media) {
      this.state = D.IDLE;
      return;
    }
    if (this.state === D.IDLE) {
      const {
        currentTrackId: e,
        levels: t
      } = this, s = t[e];
      if (!t.length || !s || !s.details)
        return;
      const {
        config: i
      } = this, r = this.getLoadPosition(), n = ee.bufferedInfo(this.tracksBuffered[this.currentTrackId] || [], r, i.maxBufferHole), {
        end: o,
        len: l
      } = n, c = this.getFwdBufferInfo(this.media, V.MAIN), d = s.details, u = this.getMaxBufferLength(c == null ? void 0 : c.len) + d.levelTargetDuration;
      if (l > u)
        return;
      const h = d.fragments, f = h.length, g = d.edge;
      let p = null;
      const y = this.fragPrevious;
      if (o < g) {
        const T = i.maxFragLookUpTolerance, E = o > g - T ? 0 : T;
        p = ft(y, h, Math.max(h[0].start, o), E), !p && y && y.start < h[0].start && (p = h[0]);
      } else
        p = h[f - 1];
      if (!p)
        return;
      if (p = this.mapToInitFragWhenRequired(p), p.sn !== "initSegment") {
        const T = p.sn - d.startSN, E = h[T - 1];
        E && E.cc === p.cc && this.fragmentTracker.getState(E) === ae.NOT_LOADED && (p = E);
      }
      this.fragmentTracker.getState(p) === ae.NOT_LOADED && this.loadFragment(p, s, o);
    }
  }
  getMaxBufferLength(e) {
    const t = super.getMaxBufferLength();
    return e ? Math.max(t, e) : t;
  }
  loadFragment(e, t, s) {
    this.fragCurrent = e, e.sn === "initSegment" ? this._loadInitSegment(e, t) : (this.startFragRequested = !0, super.loadFragment(e, t, s));
  }
  get mediaBufferTimeRanges() {
    return new ko(this.tracksBuffered[this.currentTrackId] || []);
  }
}
class ko {
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
class wo extends Fs {
  constructor(e) {
    super(e, "[subtitle-track-controller]"), this.media = null, this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0, this.queuedDefaultTrack = -1, this.trackChangeListener = () => this.onTextTracksChanged(), this.asyncPollTrackChange = () => this.pollTrackChange(0), this.useTextTrackPolling = !1, this.subtitlePollingInterval = -1, this._subtitleDisplay = !0, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, super.destroy();
  }
  get subtitleDisplay() {
    return this._subtitleDisplay;
  }
  set subtitleDisplay(e) {
    this._subtitleDisplay = e, this.trackId > -1 && this.toggleTrackModes(this.trackId);
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
    self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, e);
  }
  onMediaDetaching() {
    if (!this.media)
      return;
    self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), as(this.media.textTracks).forEach((t) => {
      st(t);
    }), this.subtitleTrack = -1, this.media = null;
  }
  onManifestLoading() {
    this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0;
  }
  // Fired whenever a new manifest is loaded.
  onManifestParsed(e, t) {
    this.tracks = t.subtitleTracks;
  }
  onSubtitleTrackLoaded(e, t) {
    const {
      id: s,
      details: i
    } = t, {
      trackId: r
    } = this, n = this.tracksInGroup[r];
    if (!n) {
      this.warn(`Invalid subtitle track id ${s}`);
      return;
    }
    const o = n.details;
    n.details = t.details, this.log(`subtitle track ${s} loaded [${i.startSN}-${i.endSN}]`), s === this.trackId && this.playlistLoaded(s, t, o);
  }
  onLevelLoading(e, t) {
    this.switchLevel(t.level);
  }
  onLevelSwitching(e, t) {
    this.switchLevel(t.level);
  }
  switchLevel(e) {
    const t = this.hls.levels[e];
    if (!(t != null && t.textGroupIds))
      return;
    const s = t.textGroupIds[t.urlId], i = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
    if (this.groupId !== s) {
      const r = this.tracks.filter((l) => !s || l.groupId === s);
      this.tracksInGroup = r;
      const n = this.findTrackId(i == null ? void 0 : i.name) || this.findTrackId();
      this.groupId = s || null;
      const o = {
        subtitleTracks: r
      };
      this.log(`Updating subtitle tracks, ${r.length} track(s) found in "${s}" group-id`), this.hls.trigger(m.SUBTITLE_TRACKS_UPDATED, o), n !== -1 && this.setSubtitleTrack(n, i);
    } else
      this.shouldReloadPlaylist(i) && this.setSubtitleTrack(this.trackId, i);
  }
  findTrackId(e) {
    const t = this.tracksInGroup;
    for (let s = 0; s < t.length; s++) {
      const i = t[s];
      if ((!this.selectDefaultTrack || i.default) && (!e || e === i.name))
        return i.id;
    }
    return -1;
  }
  onError(e, t) {
    t.fatal || !t.context || t.context.type === W.SUBTITLE_TRACK && t.context.id === this.trackId && t.context.groupId === this.groupId && this.checkRetry(t);
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
    this.selectDefaultTrack = !1;
    const t = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
    this.setSubtitleTrack(e, t);
  }
  loadPlaylist(e) {
    super.loadPlaylist();
    const t = this.tracksInGroup[this.trackId];
    if (this.shouldLoadPlaylist(t)) {
      const s = t.id, i = t.groupId;
      let r = t.url;
      if (e)
        try {
          r = e.addDirectives(r);
        } catch (n) {
          this.warn(`Could not construct new URL with HLS Delivery Directives: ${n}`);
        }
      this.log(`Loading subtitle playlist for id ${s}`), this.hls.trigger(m.SUBTITLE_TRACK_LOADING, {
        url: r,
        id: s,
        groupId: i,
        deliveryDirectives: e || null
      });
    }
  }
  /**
   * Disables the old subtitleTrack and sets current mode on the next subtitleTrack.
   * This operates on the DOM textTracks.
   * A value of -1 will disable all subtitle tracks.
   */
  toggleTrackModes(e) {
    const {
      media: t,
      trackId: s
    } = this;
    if (!t)
      return;
    const i = as(t.textTracks), r = i.filter((o) => o.groupId === this.groupId);
    if (e === -1)
      [].slice.call(i).forEach((o) => {
        o.mode = "disabled";
      });
    else {
      const o = r[s];
      o && (o.mode = "disabled");
    }
    const n = r[e];
    n && (n.mode = this.subtitleDisplay ? "showing" : "hidden");
  }
  /**
   * This method is responsible for validating the subtitle index and periodically reloading if live.
   * Dispatches the SUBTITLE_TRACK_SWITCH event, which instructs the subtitle-stream-controller to load the selected track.
   */
  setSubtitleTrack(e, t) {
    var s;
    const i = this.tracksInGroup;
    if (!this.media) {
      this.queuedDefaultTrack = e;
      return;
    }
    if (this.trackId !== e && this.toggleTrackModes(e), this.trackId === e && (e === -1 || (s = i[e]) != null && s.details) || e < -1 || e >= i.length)
      return;
    this.clearTimer();
    const r = i[e];
    if (this.log(`Switching to subtitle-track ${e}` + (r ? ` "${r.name}" lang:${r.lang} group:${r.groupId}` : "")), this.trackId = e, r) {
      const {
        id: n,
        groupId: o = "",
        name: l,
        type: c,
        url: d
      } = r;
      this.hls.trigger(m.SUBTITLE_TRACK_SWITCH, {
        id: n,
        groupId: o,
        name: l,
        type: c,
        url: d
      });
      const u = this.switchParams(r.url, t == null ? void 0 : t.details);
      this.loadPlaylist(u);
    } else
      this.hls.trigger(m.SUBTITLE_TRACK_SWITCH, {
        id: e
      });
  }
  onTextTracksChanged() {
    if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), !this.media || !this.hls.config.renderTextTracksNatively)
      return;
    let e = -1;
    const t = as(this.media.textTracks);
    for (let s = 0; s < t.length; s++)
      if (t[s].mode === "hidden")
        e = s;
      else if (t[s].mode === "showing") {
        e = s;
        break;
      }
    this.subtitleTrack !== e && (this.subtitleTrack = e);
  }
}
function as(a) {
  const e = [];
  for (let t = 0; t < a.length; t++) {
    const s = a[t];
    (s.kind === "subtitles" || s.kind === "captions") && s.label && e.push(a[t]);
  }
  return e;
}
class Po {
  constructor(e) {
    this.buffers = void 0, this.queues = {
      video: [],
      audio: [],
      audiovideo: []
    }, this.buffers = e;
  }
  append(e, t) {
    const s = this.queues[t];
    s.push(e), s.length === 1 && this.buffers[t] && this.executeNext(t);
  }
  insertAbort(e, t) {
    this.queues[t].unshift(e), this.executeNext(t);
  }
  appendBlocker(e) {
    let t;
    const s = new Promise((r) => {
      t = r;
    }), i = {
      execute: t,
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: () => {
      }
    };
    return this.append(i, e), s;
  }
  executeNext(e) {
    const {
      buffers: t,
      queues: s
    } = this, i = t[e], r = s[e];
    if (r.length) {
      const n = r[0];
      try {
        n.execute();
      } catch (o) {
        v.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), n.onError(o), i != null && i.updating || (r.shift(), this.executeNext(e));
      }
    }
  }
  shiftAndExecuteNext(e) {
    this.queues[e].shift(), this.executeNext(e);
  }
  current(e) {
    return this.queues[e][0];
  }
}
const Ci = Gt(), _i = /([ha]vc.)(?:\.[^.,]+)+/;
class Fo {
  // The level details used to determine duration, target-duration and live
  // cache the self generated object url to detect hijack of video tag
  // A queue of buffer operations which require the SourceBuffer to not be updating upon execution
  // References to event listeners for each SourceBuffer, so that they can be referenced for event removal
  // The number of BUFFER_CODEC events received before any sourceBuffers are created
  // The total number of BUFFER_CODEC events received
  // A reference to the attached media element
  // A reference to the active media source
  // Last MP3 audio chunk appended
  // counters
  constructor(e) {
    this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.lastMpegAudioChunk = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = () => {
      const {
        media: t,
        mediaSource: s
      } = this;
      v.log("[buffer-controller]: Media source opened"), t && (t.removeEventListener("emptied", this._onMediaEmptied), this.updateMediaElementDuration(), this.hls.trigger(m.MEDIA_ATTACHED, {
        media: t
      })), s && s.removeEventListener("sourceopen", this._onMediaSourceOpen), this.checkPendingTracks();
    }, this._onMediaSourceClose = () => {
      v.log("[buffer-controller]: Media source closed");
    }, this._onMediaSourceEnded = () => {
      v.log("[buffer-controller]: Media source ended");
    }, this._onMediaEmptied = () => {
      const {
        media: t,
        _objectUrl: s
      } = this;
      t && t.src !== s && v.error(`Media element src was set while attaching MediaSource (${s} > ${t.src})`);
    }, this.hls = e, this._initSourceBuffer(), this.registerListeners();
  }
  hasSourceTypes() {
    return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
  }
  destroy() {
    this.unregisterListeners(), this.details = null, this.lastMpegAudioChunk = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.BUFFER_RESET, this.onBufferReset, this), e.on(m.BUFFER_APPENDING, this.onBufferAppending, this), e.on(m.BUFFER_CODECS, this.onBufferCodecs, this), e.on(m.BUFFER_EOS, this.onBufferEos, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(m.FRAG_PARSED, this.onFragParsed, this), e.on(m.FRAG_CHANGED, this.onFragChanged, this);
  }
  unregisterListeners() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.BUFFER_RESET, this.onBufferReset, this), e.off(m.BUFFER_APPENDING, this.onBufferAppending, this), e.off(m.BUFFER_CODECS, this.onBufferCodecs, this), e.off(m.BUFFER_EOS, this.onBufferEos, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(m.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(m.FRAG_PARSED, this.onFragParsed, this), e.off(m.FRAG_CHANGED, this.onFragChanged, this);
  }
  _initSourceBuffer() {
    this.sourceBuffer = {}, this.operationQueue = new Po(this.sourceBuffer), this.listeners = {
      audio: [],
      video: [],
      audiovideo: []
    }, this.lastMpegAudioChunk = null;
  }
  onManifestLoading() {
    this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = 0, this.details = null;
  }
  onManifestParsed(e, t) {
    let s = 2;
    (t.audio && !t.video || !t.altAudio) && (s = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = s, v.log(`${this.bufferCodecEventsExpected} bufferCodec event(s) expected`);
  }
  onMediaAttaching(e, t) {
    const s = this.media = t.media;
    if (s && Ci) {
      const i = this.mediaSource = new Ci();
      i.addEventListener("sourceopen", this._onMediaSourceOpen), i.addEventListener("sourceended", this._onMediaSourceEnded), i.addEventListener("sourceclose", this._onMediaSourceClose), s.src = self.URL.createObjectURL(i), this._objectUrl = s.src, s.addEventListener("emptied", this._onMediaEmptied);
    }
  }
  onMediaDetaching() {
    const {
      media: e,
      mediaSource: t,
      _objectUrl: s
    } = this;
    if (t) {
      if (v.log("[buffer-controller]: media source detaching"), t.readyState === "open")
        try {
          t.endOfStream();
        } catch (i) {
          v.warn(`[buffer-controller]: onMediaDetaching: ${i.message} while calling endOfStream`);
        }
      this.onBufferReset(), t.removeEventListener("sourceopen", this._onMediaSourceOpen), t.removeEventListener("sourceended", this._onMediaSourceEnded), t.removeEventListener("sourceclose", this._onMediaSourceClose), e && (e.removeEventListener("emptied", this._onMediaEmptied), s && self.URL.revokeObjectURL(s), e.src === s ? (e.removeAttribute("src"), e.load()) : v.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {};
    }
    this.hls.trigger(m.MEDIA_DETACHED, void 0);
  }
  onBufferReset() {
    this.getSourceBufferTypes().forEach((e) => {
      const t = this.sourceBuffer[e];
      try {
        t && (this.removeBufferListeners(e), this.mediaSource && this.mediaSource.removeSourceBuffer(t), this.sourceBuffer[e] = void 0);
      } catch (s) {
        v.warn(`[buffer-controller]: Failed to reset the ${e} buffer`, s);
      }
    }), this._initSourceBuffer();
  }
  onBufferCodecs(e, t) {
    const s = this.getSourceBufferTypes().length;
    Object.keys(t).forEach((i) => {
      if (s) {
        const r = this.tracks[i];
        if (r && typeof r.buffer.changeType == "function") {
          const {
            id: n,
            codec: o,
            levelCodec: l,
            container: c,
            metadata: d
          } = t[i], u = (r.levelCodec || r.codec).replace(_i, "$1"), h = (l || o).replace(_i, "$1");
          if (u !== h) {
            const f = `${c};codecs=${l || o}`;
            this.appendChangeType(i, f), v.log(`[buffer-controller]: switching codec ${u} to ${h}`), this.tracks[i] = {
              buffer: r.buffer,
              codec: o,
              container: c,
              levelCodec: l,
              metadata: d,
              id: n
            };
          }
        }
      } else
        this.pendingTracks[i] = t[i];
    }), !s && (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && this.mediaSource.readyState === "open" && this.checkPendingTracks());
  }
  appendChangeType(e, t) {
    const {
      operationQueue: s
    } = this, i = {
      execute: () => {
        const r = this.sourceBuffer[e];
        r && (v.log(`[buffer-controller]: changing ${e} sourceBuffer type to ${t}`), r.changeType(t)), s.shiftAndExecuteNext(e);
      },
      onStart: () => {
      },
      onComplete: () => {
      },
      onError: (r) => {
        v.warn(`[buffer-controller]: Failed to change ${e} SourceBuffer type`, r);
      }
    };
    s.append(i, e);
  }
  onBufferAppending(e, t) {
    const {
      hls: s,
      operationQueue: i,
      tracks: r
    } = this, {
      data: n,
      type: o,
      frag: l,
      part: c,
      chunkMeta: d
    } = t, u = d.buffering[o], h = self.performance.now();
    u.start = h;
    const f = l.stats.buffering, g = c ? c.stats.buffering : null;
    f.start === 0 && (f.start = h), g && g.start === 0 && (g.start = h);
    const p = r.audio;
    let y = !1;
    o === "audio" && (p == null ? void 0 : p.container) === "audio/mpeg" && (y = !this.lastMpegAudioChunk || d.id === 1 || this.lastMpegAudioChunk.sn !== d.sn, this.lastMpegAudioChunk = d);
    const T = l.start, E = {
      execute: () => {
        if (u.executeStart = self.performance.now(), y) {
          const x = this.sourceBuffer[o];
          if (x) {
            const A = T - x.timestampOffset;
            Math.abs(A) >= 0.1 && (v.log(`[buffer-controller]: Updating audio SourceBuffer timestampOffset to ${T} (delta: ${A}) sn: ${l.sn})`), x.timestampOffset = T);
          }
        }
        this.appendExecutor(n, o);
      },
      onStart: () => {
      },
      onComplete: () => {
        const x = self.performance.now();
        u.executeEnd = u.end = x, f.first === 0 && (f.first = x), g && g.first === 0 && (g.first = x);
        const {
          sourceBuffer: A
        } = this, S = {};
        for (const k in A)
          S[k] = ee.getBuffered(A[k]);
        this.appendError = 0, this.hls.trigger(m.BUFFER_APPENDED, {
          type: o,
          frag: l,
          part: c,
          chunkMeta: d,
          parent: l.type,
          timeRanges: S
        });
      },
      onError: (x) => {
        v.error(`[buffer-controller]: Error encountered while trying to append to the ${o} SourceBuffer`, x);
        const A = {
          type: G.MEDIA_ERROR,
          parent: l.type,
          details: I.BUFFER_APPEND_ERROR,
          frag: l,
          part: c,
          chunkMeta: d,
          error: x,
          err: x,
          fatal: !1
        };
        x.code === DOMException.QUOTA_EXCEEDED_ERR ? A.details = I.BUFFER_FULL_ERROR : (this.appendError++, A.details = I.BUFFER_APPEND_ERROR, this.appendError > s.config.appendErrorMaxRetry && (v.error(`[buffer-controller]: Failed ${s.config.appendErrorMaxRetry} times to append segment in sourceBuffer`), A.fatal = !0)), s.trigger(m.ERROR, A);
      }
    };
    i.append(E, o);
  }
  onBufferFlushing(e, t) {
    const {
      operationQueue: s
    } = this, i = (r) => ({
      execute: this.removeExecutor.bind(this, r, t.startOffset, t.endOffset),
      onStart: () => {
      },
      onComplete: () => {
        this.hls.trigger(m.BUFFER_FLUSHED, {
          type: r
        });
      },
      onError: (n) => {
        v.warn(`[buffer-controller]: Failed to remove from ${r} SourceBuffer`, n);
      }
    });
    t.type ? s.append(i(t.type), t.type) : this.getSourceBufferTypes().forEach((r) => {
      s.append(i(r), r);
    });
  }
  onFragParsed(e, t) {
    const {
      frag: s,
      part: i
    } = t, r = [], n = i ? i.elementaryStreams : s.elementaryStreams;
    n[X.AUDIOVIDEO] ? r.push("audiovideo") : (n[X.AUDIO] && r.push("audio"), n[X.VIDEO] && r.push("video"));
    const o = () => {
      const l = self.performance.now();
      s.stats.buffering.end = l, i && (i.stats.buffering.end = l);
      const c = i ? i.stats : s.stats;
      this.hls.trigger(m.FRAG_BUFFERED, {
        frag: s,
        part: i,
        stats: c,
        id: s.type
      });
    };
    r.length === 0 && v.warn(`Fragments must have at least one ElementaryStreamType set. type: ${s.type} level: ${s.level} sn: ${s.sn}`), this.blockBuffers(o, r);
  }
  onFragChanged(e, t) {
    this.flushBackBuffer();
  }
  // on BUFFER_EOS mark matching sourcebuffer(s) as ended and trigger checkEos()
  // an undefined data.type will mark all buffers as EOS.
  onBufferEos(e, t) {
    this.getSourceBufferTypes().reduce((i, r) => {
      const n = this.sourceBuffer[r];
      return n && (!t.type || t.type === r) && (n.ending = !0, n.ended || (n.ended = !0, v.log(`[buffer-controller]: ${r} sourceBuffer now EOS`))), i && !!(!n || n.ended);
    }, !0) && (v.log("[buffer-controller]: Queueing mediaSource.endOfStream()"), this.blockBuffers(() => {
      this.getSourceBufferTypes().forEach((r) => {
        const n = this.sourceBuffer[r];
        n && (n.ending = !1);
      });
      const {
        mediaSource: i
      } = this;
      if (!i || i.readyState !== "open") {
        i && v.info(`[buffer-controller]: Could not call mediaSource.endOfStream(). mediaSource.readyState: ${i.readyState}`);
        return;
      }
      v.log("[buffer-controller]: Calling mediaSource.endOfStream()"), i.endOfStream();
    }));
  }
  onLevelUpdated(e, {
    details: t
  }) {
    t.fragments.length && (this.details = t, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration());
  }
  flushBackBuffer() {
    const {
      hls: e,
      details: t,
      media: s,
      sourceBuffer: i
    } = this;
    if (!s || t === null)
      return;
    const r = this.getSourceBufferTypes();
    if (!r.length)
      return;
    const n = t.live && e.config.liveBackBufferLength !== null ? e.config.liveBackBufferLength : e.config.backBufferLength;
    if (!U(n) || n < 0)
      return;
    const o = s.currentTime, l = t.levelTargetDuration, c = Math.max(n, l), d = Math.floor(o / l) * l - c;
    r.forEach((u) => {
      const h = i[u];
      if (h) {
        const f = ee.getBuffered(h);
        if (f.length > 0 && d > f.start(0)) {
          if (e.trigger(m.BACK_BUFFER_REACHED, {
            bufferEnd: d
          }), t.live)
            e.trigger(m.LIVE_BACK_BUFFER_REACHED, {
              bufferEnd: d
            });
          else if (h.ended && f.end(f.length - 1) - o < l * 2) {
            v.info(`[buffer-controller]: Cannot flush ${u} back buffer while SourceBuffer is in ended state`);
            return;
          }
          e.trigger(m.BUFFER_FLUSHING, {
            startOffset: 0,
            endOffset: d,
            type: u
          });
        }
      }
    });
  }
  /**
   * Update Media Source duration to current level duration or override to Infinity if configuration parameter
   * 'liveDurationInfinity` is set to `true`
   * More details: https://github.com/video-dev/hls.js/issues/355
   */
  updateMediaElementDuration() {
    if (!this.details || !this.media || !this.mediaSource || this.mediaSource.readyState !== "open")
      return;
    const {
      details: e,
      hls: t,
      media: s,
      mediaSource: i
    } = this, r = e.fragments[0].start + e.totalduration, n = s.duration, o = U(i.duration) ? i.duration : 0;
    e.live && t.config.liveDurationInfinity ? (v.log("[buffer-controller]: Media Source duration is set to Infinity"), i.duration = 1 / 0, this.updateSeekableRange(e)) : (r > o && r > n || !U(n)) && (v.log(`[buffer-controller]: Updating Media Source duration to ${r.toFixed(3)}`), i.duration = r);
  }
  updateSeekableRange(e) {
    const t = this.mediaSource, s = e.fragments;
    if (s.length && e.live && t != null && t.setLiveSeekableRange) {
      const r = Math.max(0, s[0].start), n = Math.max(r, r + e.totalduration);
      t.setLiveSeekableRange(r, n);
    }
  }
  checkPendingTracks() {
    const {
      bufferCodecEventsExpected: e,
      operationQueue: t,
      pendingTracks: s
    } = this, i = Object.keys(s).length;
    if (i && !e || i === 2) {
      this.createSourceBuffers(s), this.pendingTracks = {};
      const r = this.getSourceBufferTypes();
      if (r.length)
        this.hls.trigger(m.BUFFER_CREATED, {
          tracks: this.tracks
        }), r.forEach((n) => {
          t.executeNext(n);
        });
      else {
        const n = new Error("could not create source buffer for media codec(s)");
        this.hls.trigger(m.ERROR, {
          type: G.MEDIA_ERROR,
          details: I.BUFFER_INCOMPATIBLE_CODECS_ERROR,
          fatal: !0,
          error: n,
          reason: n.message
        });
      }
    }
  }
  createSourceBuffers(e) {
    const {
      sourceBuffer: t,
      mediaSource: s
    } = this;
    if (!s)
      throw Error("createSourceBuffers called when mediaSource was null");
    for (const i in e)
      if (!t[i]) {
        const r = e[i];
        if (!r)
          throw Error(`source buffer exists for track ${i}, however track does not`);
        const n = r.levelCodec || r.codec, o = `${r.container};codecs=${n}`;
        v.log(`[buffer-controller]: creating sourceBuffer(${o})`);
        try {
          const l = t[i] = s.addSourceBuffer(o), c = i;
          this.addBufferListener(c, "updatestart", this._onSBUpdateStart), this.addBufferListener(c, "updateend", this._onSBUpdateEnd), this.addBufferListener(c, "error", this._onSBUpdateError), this.tracks[i] = {
            buffer: l,
            codec: n,
            container: r.container,
            levelCodec: r.levelCodec,
            metadata: r.metadata,
            id: r.id
          };
        } catch (l) {
          v.error(`[buffer-controller]: error while trying to add sourceBuffer: ${l.message}`), this.hls.trigger(m.ERROR, {
            type: G.MEDIA_ERROR,
            details: I.BUFFER_ADD_CODEC_ERROR,
            fatal: !1,
            error: l,
            mimeType: o
          });
        }
      }
  }
  _onSBUpdateStart(e) {
    const {
      operationQueue: t
    } = this;
    t.current(e).onStart();
  }
  _onSBUpdateEnd(e) {
    const {
      operationQueue: t
    } = this;
    t.current(e).onComplete(), t.shiftAndExecuteNext(e);
  }
  _onSBUpdateError(e, t) {
    const s = new Error(`${e} SourceBuffer error`);
    v.error(`[buffer-controller]: ${s}`, t), this.hls.trigger(m.ERROR, {
      type: G.MEDIA_ERROR,
      details: I.BUFFER_APPENDING_ERROR,
      error: s,
      fatal: !1
    });
    const i = this.operationQueue.current(e);
    i && i.onError(t);
  }
  // This method must result in an updateend event; if remove is not called, _onSBUpdateEnd must be called manually
  removeExecutor(e, t, s) {
    const {
      media: i,
      mediaSource: r,
      operationQueue: n,
      sourceBuffer: o
    } = this, l = o[e];
    if (!i || !r || !l) {
      v.warn(`[buffer-controller]: Attempting to remove from the ${e} SourceBuffer, but it does not exist`), n.shiftAndExecuteNext(e);
      return;
    }
    const c = U(i.duration) ? i.duration : 1 / 0, d = U(r.duration) ? r.duration : 1 / 0, u = Math.max(0, t), h = Math.min(s, c, d);
    h > u && !l.ending ? (l.ended = !1, v.log(`[buffer-controller]: Removing [${u},${h}] from the ${e} SourceBuffer`), l.remove(u, h)) : n.shiftAndExecuteNext(e);
  }
  // This method must result in an updateend event; if append is not called, _onSBUpdateEnd must be called manually
  appendExecutor(e, t) {
    const {
      operationQueue: s,
      sourceBuffer: i
    } = this, r = i[t];
    if (!r) {
      v.warn(`[buffer-controller]: Attempting to append to the ${t} SourceBuffer, but it does not exist`), s.shiftAndExecuteNext(t);
      return;
    }
    r.ended = !1, r.appendBuffer(e);
  }
  // Enqueues an operation to each SourceBuffer queue which, upon execution, resolves a promise. When all promises
  // resolve, the onUnblocked function is executed. Functions calling this method do not need to unblock the queue
  // upon completion, since we already do it here
  blockBuffers(e, t = this.getSourceBufferTypes()) {
    if (!t.length) {
      v.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), Promise.resolve().then(e);
      return;
    }
    const {
      operationQueue: s
    } = this, i = t.map((r) => s.appendBlocker(r));
    Promise.all(i).then(() => {
      e(), t.forEach((r) => {
        const n = this.sourceBuffer[r];
        n != null && n.updating || s.shiftAndExecuteNext(r);
      });
    });
  }
  getSourceBufferTypes() {
    return Object.keys(this.sourceBuffer);
  }
  addBufferListener(e, t, s) {
    const i = this.sourceBuffer[e];
    if (!i)
      return;
    const r = s.bind(this, e);
    this.listeners[e].push({
      event: t,
      listener: r
    }), i.addEventListener(t, r);
  }
  removeBufferListeners(e) {
    const t = this.sourceBuffer[e];
    t && this.listeners[e].forEach((s) => {
      t.removeEventListener(s.event, s.listener);
    });
  }
}
const ki = {
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
}, Mr = function(e) {
  let t = e;
  return ki.hasOwnProperty(e) && (t = ki[e]), String.fromCharCode(t);
}, Ie = 15, Pe = 100, Oo = {
  17: 1,
  18: 3,
  21: 5,
  22: 7,
  23: 9,
  16: 11,
  19: 12,
  20: 14
}, Mo = {
  17: 2,
  18: 4,
  21: 6,
  22: 8,
  23: 10,
  19: 13,
  20: 15
}, No = {
  25: 1,
  26: 3,
  29: 5,
  30: 7,
  31: 9,
  24: 11,
  27: 12,
  28: 14
}, Uo = {
  25: 2,
  26: 4,
  29: 6,
  30: 8,
  31: 10,
  27: 13,
  28: 15
}, Bo = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
class $o {
  constructor() {
    this.time = null, this.verboseLevel = 0;
  }
  log(e, t) {
    if (this.verboseLevel >= e) {
      const s = typeof t == "function" ? t() : t;
      v.log(`${this.time} [${e}] ${s}`);
    }
  }
}
const Ke = function(e) {
  const t = [];
  for (let s = 0; s < e.length; s++)
    t.push(e[s].toString(16));
  return t;
};
class Nr {
  constructor(e, t, s, i, r) {
    this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = e || "white", this.underline = t || !1, this.italics = s || !1, this.background = i || "black", this.flash = r || !1;
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
class Go {
  constructor(e, t, s, i, r, n) {
    this.uchar = void 0, this.penState = void 0, this.uchar = e || " ", this.penState = new Nr(t, s, i, r, n);
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
class Vo {
  constructor(e) {
    this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
    for (let t = 0; t < Pe; t++)
      this.chars.push(new Go());
    this.logger = e, this.pos = 0, this.currPenState = new Nr();
  }
  equals(e) {
    let t = !0;
    for (let s = 0; s < Pe; s++)
      if (!this.chars[s].equals(e.chars[s])) {
        t = !1;
        break;
      }
    return t;
  }
  copy(e) {
    for (let t = 0; t < Pe; t++)
      this.chars[t].copy(e.chars[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < Pe; t++)
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
    this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(3, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > Pe && (this.logger.log(3, "Too large cursor position " + this.pos), this.pos = Pe);
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
    const t = Mr(e);
    if (this.pos >= Pe) {
      this.logger.log(0, () => "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!");
      return;
    }
    this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1);
  }
  clearFromPos(e) {
    let t;
    for (t = e; t < Pe; t++)
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
    for (let s = 0; s < Pe; s++) {
      const i = this.chars[s].uchar;
      i !== " " && (t = !1), e.push(i);
    }
    return t ? "" : e.join("");
  }
  setPenStyles(e) {
    this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState);
  }
}
class os {
  constructor(e) {
    this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
    for (let t = 0; t < Ie; t++)
      this.rows.push(new Vo(e));
    this.logger = e, this.currRow = Ie - 1, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset();
  }
  reset() {
    for (let e = 0; e < Ie; e++)
      this.rows[e].clear();
    this.currRow = Ie - 1;
  }
  equals(e) {
    let t = !0;
    for (let s = 0; s < Ie; s++)
      if (!this.rows[s].equals(e.rows[s])) {
        t = !1;
        break;
      }
    return t;
  }
  copy(e) {
    for (let t = 0; t < Ie; t++)
      this.rows[t].copy(e.rows[t]);
  }
  isEmpty() {
    let e = !0;
    for (let t = 0; t < Ie; t++)
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
    this.logger.log(2, () => "pacData = " + JSON.stringify(e));
    let t = e.row - 1;
    if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
      for (let o = 0; o < Ie; o++)
        this.rows[o].clear();
      const r = this.currRow + 1 - this.nrRollUpRows, n = this.lastOutputScreen;
      if (n) {
        const o = n.rows[r].cueStartTime, l = this.logger.time;
        if (o && l !== null && o < l)
          for (let c = 0; c < this.nrRollUpRows; c++)
            this.rows[t - this.nrRollUpRows + c + 1].copy(n.rows[r + c]);
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
    this.logger.log(2, () => "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32);
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
    for (let r = 0; r < Ie; r++) {
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
class wi {
  constructor(e, t, s) {
    this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new os(s), this.nonDisplayedMemory = new os(s), this.lastOutputScreen = new os(s), this.currRollUpRow = this.displayedMemory.rows[Ie - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = s;
  }
  reset() {
    this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[Ie - 1], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null;
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
    this.logger.log(2, "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t);
  }
  outputDataUpdate(e = !1) {
    const t = this.logger.time;
    t !== null && this.outputFilter && (this.cueStartTime === null && !this.displayedMemory.isEmpty() ? this.cueStartTime = t : this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t), this.lastOutputScreen.copy(this.displayedMemory));
  }
  cueSplitAtTime(e) {
    this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e));
  }
}
class Pi {
  constructor(e, t, s) {
    this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
    const i = new $o();
    this.channels = [null, new wi(e, t, i), new wi(e + 1, s, i)], this.cmdHistory = Oi(), this.logger = i;
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
    let s, i, r, n = !1;
    this.logger.time = e;
    for (let o = 0; o < t.length; o += 2)
      if (i = t[o] & 127, r = t[o + 1] & 127, !(i === 0 && r === 0)) {
        if (this.logger.log(3, "[" + Ke([t[o], t[o + 1]]) + "] -> (" + Ke([i, r]) + ")"), s = this.parseCmd(i, r), s || (s = this.parseMidrow(i, r)), s || (s = this.parsePAC(i, r)), s || (s = this.parseBackgroundAttributes(i, r)), !s && (n = this.parseChars(i, r), n)) {
          const l = this.currentChannel;
          l && l > 0 ? this.channels[l].insertChars(n) : this.logger.log(2, "No channel found yet. TEXT-MODE?");
        }
        !s && !n && this.logger.log(2, "Couldn't parse cleaned data " + Ke([i, r]) + " orig: " + Ke([t[o], t[o + 1]]));
      }
  }
  /**
   * Parse Command.
   * @returns True if a command was found
   */
  parseCmd(e, t) {
    const {
      cmdHistory: s
    } = this, i = (e === 20 || e === 28 || e === 21 || e === 29) && t >= 32 && t <= 47, r = (e === 23 || e === 31) && t >= 33 && t <= 35;
    if (!(i || r))
      return !1;
    if (Fi(e, t, s))
      return tt(null, null, s), this.logger.log(3, "Repeated command (" + Ke([e, t]) + ") is dropped"), !0;
    const n = e === 20 || e === 21 || e === 23 ? 1 : 2, o = this.channels[n];
    return e === 20 || e === 21 || e === 28 || e === 29 ? t === 32 ? o.ccRCL() : t === 33 ? o.ccBS() : t === 34 ? o.ccAOF() : t === 35 ? o.ccAON() : t === 36 ? o.ccDER() : t === 37 ? o.ccRU(2) : t === 38 ? o.ccRU(3) : t === 39 ? o.ccRU(4) : t === 40 ? o.ccFON() : t === 41 ? o.ccRDC() : t === 42 ? o.ccTR() : t === 43 ? o.ccRTD() : t === 44 ? o.ccEDM() : t === 45 ? o.ccCR() : t === 46 ? o.ccENM() : t === 47 && o.ccEOC() : o.ccTO(t - 32), tt(e, t, s), this.currentChannel = n, !0;
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
      return i ? (i.ccMIDROW(t), this.logger.log(3, "MIDROW (" + Ke([e, t]) + ")"), !0) : !1;
    }
    return !1;
  }
  /**
   * Parse Preable Access Codes (Table 53).
   * @returns {Boolean} Tells if PAC found
   */
  parsePAC(e, t) {
    let s;
    const i = this.cmdHistory, r = (e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127, n = (e === 16 || e === 24) && t >= 64 && t <= 95;
    if (!(r || n))
      return !1;
    if (Fi(e, t, i))
      return tt(null, null, i), !0;
    const o = e <= 23 ? 1 : 2;
    t >= 64 && t <= 95 ? s = o === 1 ? Oo[e] : No[e] : s = o === 1 ? Mo[e] : Uo[e];
    const l = this.channels[o];
    return l ? (l.setPAC(this.interpretPAC(s, t)), tt(e, t, i), this.currentChannel = o, !0) : !1;
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
      r === 17 ? n = t + 80 : r === 18 ? n = t + 112 : n = t + 144, this.logger.log(2, "Special char '" + Mr(n) + "' in channel " + s), i = [n];
    } else
      e >= 32 && e <= 127 && (i = t === 0 ? [e] : [e, t]);
    if (i) {
      const n = Ke(i);
      this.logger.log(3, "Char codes =  " + n.join(",")), tt(e, t, this.cmdHistory);
    }
    return i;
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
    e === 16 || e === 24 ? (r = Math.floor((t - 32) / 2), n.background = Bo[r], t % 2 === 1 && (n.background = n.background + "_semi")) : t === 45 ? n.background = "transparent" : (n.foreground = "black", t === 47 && (n.underline = !0));
    const o = e <= 23 ? 1 : 2;
    return this.channels[o].setBkgData(n), tt(e, t, this.cmdHistory), !0;
  }
  /**
   * Reset state of parser and its channels.
   */
  reset() {
    for (let e = 0; e < Object.keys(this.channels).length; e++) {
      const t = this.channels[e];
      t && t.reset();
    }
    this.cmdHistory = Oi();
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
function tt(a, e, t) {
  t.a = a, t.b = e;
}
function Fi(a, e, t) {
  return t.a === a && t.b === e;
}
function Oi() {
  return {
    a: null,
    b: null
  };
}
class At {
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
var Ks = function() {
  if (typeof self < "u" && self.VTTCue)
    return self.VTTCue;
  const a = ["", "lr", "rl"], e = ["start", "middle", "end", "left", "right"];
  function t(o, l) {
    if (typeof l != "string" || !Array.isArray(o))
      return !1;
    const c = l.toLowerCase();
    return ~o.indexOf(c) ? c : !1;
  }
  function s(o) {
    return t(a, o);
  }
  function i(o) {
    return t(e, o);
  }
  function r(o, ...l) {
    let c = 1;
    for (; c < arguments.length; c++) {
      const d = arguments[c];
      for (const u in d)
        o[u] = d[u];
    }
    return o;
  }
  function n(o, l, c) {
    const d = this, u = {
      enumerable: !0
    };
    d.hasBeenReset = !1;
    let h = "", f = !1, g = o, p = l, y = c, T = null, E = "", x = !0, A = "auto", S = "start", k = 50, b = "middle", C = 50, w = "middle";
    Object.defineProperty(d, "id", r({}, u, {
      get: function() {
        return h;
      },
      set: function(R) {
        h = "" + R;
      }
    })), Object.defineProperty(d, "pauseOnExit", r({}, u, {
      get: function() {
        return f;
      },
      set: function(R) {
        f = !!R;
      }
    })), Object.defineProperty(d, "startTime", r({}, u, {
      get: function() {
        return g;
      },
      set: function(R) {
        if (typeof R != "number")
          throw new TypeError("Start time must be set to a number.");
        g = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "endTime", r({}, u, {
      get: function() {
        return p;
      },
      set: function(R) {
        if (typeof R != "number")
          throw new TypeError("End time must be set to a number.");
        p = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "text", r({}, u, {
      get: function() {
        return y;
      },
      set: function(R) {
        y = "" + R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "region", r({}, u, {
      get: function() {
        return T;
      },
      set: function(R) {
        T = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "vertical", r({}, u, {
      get: function() {
        return E;
      },
      set: function(R) {
        const B = s(R);
        if (B === !1)
          throw new SyntaxError("An invalid or illegal string was specified.");
        E = B, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "snapToLines", r({}, u, {
      get: function() {
        return x;
      },
      set: function(R) {
        x = !!R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "line", r({}, u, {
      get: function() {
        return A;
      },
      set: function(R) {
        if (typeof R != "number" && R !== "auto")
          throw new SyntaxError("An invalid number or illegal string was specified.");
        A = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "lineAlign", r({}, u, {
      get: function() {
        return S;
      },
      set: function(R) {
        const B = i(R);
        if (!B)
          throw new SyntaxError("An invalid or illegal string was specified.");
        S = B, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "position", r({}, u, {
      get: function() {
        return k;
      },
      set: function(R) {
        if (R < 0 || R > 100)
          throw new Error("Position must be between 0 and 100.");
        k = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "positionAlign", r({}, u, {
      get: function() {
        return b;
      },
      set: function(R) {
        const B = i(R);
        if (!B)
          throw new SyntaxError("An invalid or illegal string was specified.");
        b = B, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "size", r({}, u, {
      get: function() {
        return C;
      },
      set: function(R) {
        if (R < 0 || R > 100)
          throw new Error("Size must be between 0 and 100.");
        C = R, this.hasBeenReset = !0;
      }
    })), Object.defineProperty(d, "align", r({}, u, {
      get: function() {
        return w;
      },
      set: function(R) {
        const B = i(R);
        if (!B)
          throw new SyntaxError("An invalid or illegal string was specified.");
        w = B, this.hasBeenReset = !0;
      }
    })), d.displayState = void 0;
  }
  return n.prototype.getCueAsHTML = function() {
    return self.WebVTT.convertCueToDOMTree(self, this.text);
  }, n;
}();
class Ko {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  decode(e, t) {
    if (!e)
      return "";
    if (typeof e != "string")
      throw new Error("Error - expected string data.");
    return decodeURIComponent(encodeURIComponent(e));
  }
}
function Ur(a) {
  function e(s, i, r, n) {
    return (s | 0) * 3600 + (i | 0) * 60 + (r | 0) + parseFloat(n || 0);
  }
  const t = a.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
  return t ? parseFloat(t[2]) > 59 ? e(t[2], t[3], 0, t[4]) : e(t[1], t[2], t[3], t[4]) : null;
}
class Ho {
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
function Br(a, e, t, s) {
  const i = s ? a.split(s) : [a];
  for (const r in i) {
    if (typeof i[r] != "string")
      continue;
    const n = i[r].split(t);
    if (n.length !== 2)
      continue;
    const o = n[0], l = n[1];
    e(o, l);
  }
}
const Rs = new Ks(0, 0, ""), It = Rs.align === "middle" ? "middle" : "center";
function Wo(a, e, t) {
  const s = a;
  function i() {
    const o = Ur(a);
    if (o === null)
      throw new Error("Malformed timestamp: " + s);
    return a = a.replace(/^[^\sa-zA-Z-]+/, ""), o;
  }
  function r(o, l) {
    const c = new Ho();
    Br(o, function(h, f) {
      let g;
      switch (h) {
        case "region":
          for (let p = t.length - 1; p >= 0; p--)
            if (t[p].id === f) {
              c.set(h, t[p].region);
              break;
            }
          break;
        case "vertical":
          c.alt(h, f, ["rl", "lr"]);
          break;
        case "line":
          g = f.split(","), c.integer(h, g[0]), c.percent(h, g[0]) && c.set("snapToLines", !1), c.alt(h, g[0], ["auto"]), g.length === 2 && c.alt("lineAlign", g[1], ["start", It, "end"]);
          break;
        case "position":
          g = f.split(","), c.percent(h, g[0]), g.length === 2 && c.alt("positionAlign", g[1], ["start", It, "end", "line-left", "line-right", "auto"]);
          break;
        case "size":
          c.percent(h, f);
          break;
        case "align":
          c.alt(h, f, ["start", It, "end", "left", "right"]);
          break;
      }
    }, /:/, /\s/), l.region = c.get("region", null), l.vertical = c.get("vertical", "");
    let d = c.get("line", "auto");
    d === "auto" && Rs.line === -1 && (d = -1), l.line = d, l.lineAlign = c.get("lineAlign", "start"), l.snapToLines = c.get("snapToLines", !0), l.size = c.get("size", 100), l.align = c.get("align", It);
    let u = c.get("position", "auto");
    u === "auto" && Rs.position === 50 && (u = l.align === "start" || l.align === "left" ? 0 : l.align === "end" || l.align === "right" ? 100 : 50), l.position = u;
  }
  function n() {
    a = a.replace(/^\s+/, "");
  }
  if (n(), e.startTime = i(), n(), a.slice(0, 3) !== "-->")
    throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + s);
  a = a.slice(3), n(), e.endTime = i(), n(), r(a, e);
}
function $r(a) {
  return a.replace(/<br(?: \/)?>/gi, `
`);
}
class Yo {
  constructor() {
    this.state = "INITIAL", this.buffer = "", this.decoder = new Ko(), this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0;
  }
  parse(e) {
    const t = this;
    e && (t.buffer += t.decoder.decode(e, {
      stream: !0
    }));
    function s() {
      let r = t.buffer, n = 0;
      for (r = $r(r); n < r.length && r[n] !== "\r" && r[n] !== `
`; )
        ++n;
      const o = r.slice(0, n);
      return r[n] === "\r" && ++n, r[n] === `
` && ++n, t.buffer = r.slice(n), o;
    }
    function i(r) {
      Br(r, function(n, o) {
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
            if (t.cue = new Ks(0, 0, ""), t.state = "CUE", r.indexOf("-->") === -1) {
              t.cue.id = r;
              continue;
            }
          case "CUE":
            if (!t.cue) {
              t.state = "BADCUE";
              continue;
            }
            try {
              Wo(r, t.cue, t.regionList);
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
const qo = /\r\n|\n\r|\n|\r/g, ls = function(e, t, s = 0) {
  return e.slice(s, s + t.length) === t;
}, zo = function(e) {
  let t = parseInt(e.slice(-3));
  const s = parseInt(e.slice(-6, -4)), i = parseInt(e.slice(-9, -7)), r = e.length > 9 ? parseInt(e.substring(0, e.indexOf(":"))) : 0;
  if (!U(t) || !U(s) || !U(i) || !U(r))
    throw Error(`Malformed X-TIMESTAMP-MAP: Local:${e}`);
  return t += 1e3 * s, t += 60 * 1e3 * i, t += 60 * 60 * 1e3 * r, t;
}, cs = function(e) {
  let t = 5381, s = e.length;
  for (; s; )
    t = t * 33 ^ e.charCodeAt(--s);
  return (t >>> 0).toString();
};
function Hs(a, e, t) {
  return cs(a.toString()) + cs(e.toString()) + cs(t);
}
const jo = function(e, t, s) {
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
function Xo(a, e, t, s, i, r, n) {
  const o = new Yo(), l = we(new Uint8Array(a)).trim().replace(qo, `
`).split(`
`), c = [], d = e ? ao(e.baseTime, e.timescale) : 0;
  let u = "00:00.000", h = 0, f = 0, g, p = !0;
  o.oncue = function(y) {
    const T = t[s];
    let E = t.ccOffset;
    const x = (h - d) / 9e4;
    if (T != null && T.new && (f !== void 0 ? E = t.ccOffset = T.start : jo(t, s, x)), x) {
      if (!e) {
        g = new Error("Missing initPTS for VTT MPEGTS");
        return;
      }
      E = x - t.presentationOffset;
    }
    const A = y.endTime - y.startTime, S = Le((y.startTime + E - f) * 9e4, i * 9e4) / 9e4;
    y.startTime = Math.max(S, 0), y.endTime = Math.max(S + A, 0);
    const k = y.text.trim();
    y.text = decodeURIComponent(encodeURIComponent(k)), y.id || (y.id = Hs(y.startTime, y.endTime, k)), y.endTime > 0 && c.push(y);
  }, o.onparsingerror = function(y) {
    g = y;
  }, o.onflush = function() {
    if (g) {
      n(g);
      return;
    }
    r(c);
  }, l.forEach((y) => {
    if (p)
      if (ls(y, "X-TIMESTAMP-MAP=")) {
        p = !1, y.slice(16).split(",").forEach((T) => {
          ls(T, "LOCAL:") ? u = T.slice(6) : ls(T, "MPEGTS:") && (h = parseInt(T.slice(7)));
        });
        try {
          f = zo(u) / 1e3;
        } catch (T) {
          g = T;
        }
        return;
      } else
        y === "" && (p = !1);
    o.parse(y + `
`);
  }), o.flush();
}
const ds = "stpp.ttml.im1t", Gr = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/, Vr = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/, Qo = {
  left: "start",
  center: "center",
  right: "end",
  start: "start",
  end: "end"
};
function Mi(a, e, t, s) {
  const i = H(new Uint8Array(a), ["mdat"]);
  if (i.length === 0) {
    s(new Error("Could not parse IMSC1 mdat"));
    return;
  }
  const r = i.map((o) => we(o)), n = no(e.baseTime, 1, e.timescale);
  try {
    r.forEach((o) => t(Jo(o, n)));
  } catch (o) {
    s(o);
  }
}
function Jo(a, e) {
  const i = new DOMParser().parseFromString(a, "text/xml").getElementsByTagName("tt")[0];
  if (!i)
    throw new Error("Invalid ttml");
  const r = {
    frameRate: 30,
    subFrameRate: 1,
    frameRateMultiplier: 0,
    tickRate: 0
  }, n = Object.keys(r).reduce((u, h) => (u[h] = i.getAttribute(`ttp:${h}`) || r[h], u), {}), o = i.getAttribute("xml:space") !== "preserve", l = Ni(us(i, "styling", "style")), c = Ni(us(i, "layout", "region")), d = us(i, "body", "[begin]");
  return [].map.call(d, (u) => {
    const h = Kr(u, o);
    if (!h || !u.hasAttribute("begin"))
      return null;
    const f = fs(u.getAttribute("begin"), n), g = fs(u.getAttribute("dur"), n);
    let p = fs(u.getAttribute("end"), n);
    if (f === null)
      throw Ui(u);
    if (p === null) {
      if (g === null)
        throw Ui(u);
      p = f + g;
    }
    const y = new Ks(f - e, p - e, h);
    y.id = Hs(y.startTime, y.endTime, y.text);
    const T = c[u.getAttribute("region")], E = l[u.getAttribute("style")], x = Zo(T, E, l), {
      textAlign: A
    } = x;
    if (A) {
      const S = Qo[A];
      S && (y.lineAlign = S), y.align = A;
    }
    return ne(y, x), y;
  }).filter((u) => u !== null);
}
function us(a, e, t) {
  const s = a.getElementsByTagName(e)[0];
  return s ? [].slice.call(s.querySelectorAll(t)) : [];
}
function Ni(a) {
  return a.reduce((e, t) => {
    const s = t.getAttribute("xml:id");
    return s && (e[s] = t), e;
  }, {});
}
function Kr(a, e) {
  return [].slice.call(a.childNodes).reduce((t, s, i) => {
    var r;
    return s.nodeName === "br" && i ? t + `
` : (r = s.childNodes) != null && r.length ? Kr(s, e) : e ? t + s.textContent.trim().replace(/\s+/g, " ") : t + s.textContent;
  }, "");
}
function Zo(a, e, t) {
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
  return n && t.hasOwnProperty(n) && (i = t[n]), r.reduce((o, l) => {
    const c = hs(e, s, l) || hs(a, s, l) || hs(i, s, l);
    return c && (o[l] = c), o;
  }, {});
}
function hs(a, e, t) {
  return a && a.hasAttributeNS(e, t) ? a.getAttributeNS(e, t) : null;
}
function Ui(a) {
  return new Error(`Could not parse ttml timestamp ${a}`);
}
function fs(a, e) {
  if (!a)
    return null;
  let t = Ur(a);
  return t === null && (Gr.test(a) ? t = el(a, e) : Vr.test(a) && (t = tl(a, e))), t;
}
function el(a, e) {
  const t = Gr.exec(a), s = (t[4] | 0) + (t[5] | 0) / e.subFrameRate;
  return (t[1] | 0) * 3600 + (t[2] | 0) * 60 + (t[3] | 0) + s / e.frameRate;
}
function tl(a, e) {
  const t = Vr.exec(a), s = Number(t[1]);
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
class sl {
  constructor(e) {
    if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = Bi(), this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = {
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
    }, this.config.enableCEA708Captions) {
      const t = new At(this, "textTrack1"), s = new At(this, "textTrack2"), i = new At(this, "textTrack3"), r = new At(this, "textTrack4");
      this.cea608Parser1 = new Pi(1, t, s), this.cea608Parser2 = new Pi(3, i, r);
    }
    e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(m.FRAG_LOADING, this.onFragLoading, this), e.on(m.FRAG_LOADED, this.onFragLoaded, this), e.on(m.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(m.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(m.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(m.BUFFER_FLUSHING, this.onBufferFlushing, this);
  }
  destroy() {
    const {
      hls: e
    } = this;
    e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(m.FRAG_LOADING, this.onFragLoading, this), e.off(m.FRAG_LOADED, this.onFragLoaded, this), e.off(m.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(m.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(m.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(m.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(m.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null;
  }
  addCues(e, t, s, i, r) {
    let n = !1;
    for (let o = r.length; o--; ) {
      const l = r[o], c = rl(l[0], l[1], t, s);
      if (c >= 0 && (l[0] = Math.min(l[0], t), l[1] = Math.max(l[1], s), n = !0, c / (s - t) > 0.5))
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
    s === "main" && (this.initPTS[t.cc] = {
      baseTime: i,
      timescale: r
    }), n.length && (this.unparsedVttFrags = [], n.forEach((o) => {
      this.onFragLoaded(m.FRAG_LOADED, o);
    }));
  }
  getExistingTrack(e) {
    const {
      media: t
    } = this;
    if (t)
      for (let s = 0; s < t.textTracks.length; s++) {
        const i = t.textTracks[s];
        if (i[e])
          return i;
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
    } = t[e], o = this.getExistingTrack(e);
    if (o)
      s[e] = o, st(s[e]), ur(s[e], i);
    else {
      const l = this.createTextTrack("captions", r, n);
      l && (l[e] = !0, s[e] = l);
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
    this.media = t.media, this._cleanTracks();
  }
  onMediaDetaching() {
    const {
      captionsTracks: e
    } = this;
    Object.keys(e).forEach((t) => {
      st(e[t]), delete e[t];
    }), this.nonNativeCaptionsTracks = {};
  }
  onManifestLoading() {
    this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = Bi(), this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = [], this.initPTS = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset());
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
        st(t[s]);
  }
  onSubtitleTracksUpdated(e, t) {
    const s = t.subtitleTracks || [], i = s.some((r) => r.textCodec === ds);
    if (this.config.enableWebVTT || i && this.config.enableIMSC1) {
      if (Or(this.tracks, s)) {
        this.tracks = s;
        return;
      }
      if (this.textTracks = [], this.tracks = s, this.config.renderTextTracksNatively) {
        const n = this.media ? this.media.textTracks : null;
        this.tracks.forEach((o, l) => {
          let c;
          if (n && l < n.length) {
            let d = null;
            for (let u = 0; u < n.length; u++)
              if (il(n[u], o)) {
                d = n[u];
                break;
              }
            d && (c = d);
          }
          if (c)
            st(c);
          else {
            const d = this._captionsOrSubtitlesFromCharacteristics(o);
            c = this.createTextTrack(d, o.name, o.lang), c && (c.mode = "disabled");
          }
          c && (c.groupId = o.groupId, this.textTracks.push(c));
        });
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
  _captionsOrSubtitlesFromCharacteristics(e) {
    if (e.attrs.CHARACTERISTICS) {
      const t = /transcribes-spoken-dialog/gi.test(e.attrs.CHARACTERISTICS), s = /describes-music-and-sound/gi.test(e.attrs.CHARACTERISTICS);
      if (t && s)
        return "captions";
    }
    return "subtitles";
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
    const {
      cea608Parser1: s,
      cea608Parser2: i,
      lastSn: r,
      lastPartIndex: n
    } = this;
    if (!(!this.enabled || !(s && i)) && t.frag.type === V.MAIN) {
      var o, l;
      const c = t.frag.sn, d = (o = t == null || (l = t.part) == null ? void 0 : l.index) != null ? o : -1;
      c === r + 1 || c === r && d === n + 1 || (s.reset(), i.reset()), this.lastSn = c, this.lastPartIndex = d;
    }
  }
  onFragLoaded(e, t) {
    const {
      frag: s,
      payload: i
    } = t;
    if (s.type === V.SUBTITLE)
      if (i.byteLength) {
        const r = s.decryptdata, n = "stats" in t;
        if (r == null || !r.encrypted || n) {
          const o = this.tracks[s.level], l = this.vttCCs;
          l[s.cc] || (l[s.cc] = {
            start: s.start,
            prevCC: this.prevCC,
            new: !0
          }, this.prevCC = s.cc), o && o.textCodec === ds ? this._parseIMSC1(s, i) : this._parseVTTs(t);
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
    Mi(t, this.initPTS[e.cc], (i) => {
      this._appendCues(i, e.level), s.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: e
      });
    }, (i) => {
      v.log(`Failed to parse IMSC1: ${i}`), s.trigger(m.SUBTITLE_FRAG_PROCESSED, {
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
    const l = this.hls, c = (t = s.initSegment) != null && t.data ? Qe(s.initSegment.data, new Uint8Array(i)) : i;
    Xo(c, this.initPTS[s.cc], this.vttCCs, s.cc, s.start, (d) => {
      this._appendCues(d, s.level), l.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !0,
        frag: s
      });
    }, (d) => {
      const u = d.message === "Missing initPTS for VTT MPEGTS";
      u ? n.push(e) : this._fallbackToIMSC1(s, i), v.log(`Failed to parse VTT cue: ${d}`), !(u && o > s.cc) && l.trigger(m.SUBTITLE_FRAG_PROCESSED, {
        success: !1,
        frag: s,
        error: d
      });
    });
  }
  _fallbackToIMSC1(e, t) {
    const s = this.tracks[e.level];
    s.textCodec || Mi(t, this.initPTS[e.cc], () => {
      s.textCodec = ds, this._parseIMSC1(e, t);
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
      e.forEach((r) => hr(i, r));
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
    s.type === V.SUBTITLE && this.onFragLoaded(m.FRAG_LOADED, t);
  }
  onSubtitleTracksCleared() {
    this.tracks = [], this.captionsTracks = {};
  }
  onFragParsingUserdata(e, t) {
    const {
      cea608Parser1: s,
      cea608Parser2: i
    } = this;
    if (!this.enabled || !(s && i))
      return;
    const {
      frag: r,
      samples: n
    } = t;
    if (!(r.type === V.MAIN && this.closedCaptionsForLevel(r) === "NONE"))
      for (let o = 0; o < n.length; o++) {
        const l = n[o].bytes;
        if (l) {
          const c = this.extractCea608Data(l);
          s.addData(n[o].pts, c[0]), i.addData(n[o].pts, c[1]);
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
        Object.keys(o).forEach((l) => Es(o[l], t, s));
      }
      if (this.config.renderTextTracksNatively && t === 0 && i !== void 0) {
        const {
          textTracks: o
        } = this;
        Object.keys(o).forEach((l) => Es(o[l], t, i));
      }
    }
  }
  extractCea608Data(e) {
    const t = [[], []], s = e[0] & 31;
    let i = 2;
    for (let r = 0; r < s; r++) {
      const n = e[i++], o = 127 & e[i++], l = 127 & e[i++];
      if (o === 0 && l === 0)
        continue;
      if ((4 & n) !== 0) {
        const d = 3 & n;
        (d === 0 || d === 1) && (t[d].push(o), t[d].push(l));
      }
    }
    return t;
  }
}
function il(a, e) {
  return !!a && a.label === e.name && !(a.textTrack1 || a.textTrack2);
}
function rl(a, e, t, s) {
  return Math.min(e, s) - Math.max(a, t);
}
function Bi() {
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
class Ws {
  constructor(e) {
    this.hls = void 0, this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.clientRect = void 0, this.streamController = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  destroy() {
    this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null;
  }
  registerListeners() {
    const {
      hls: e
    } = this;
    e.on(m.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.BUFFER_CODECS, this.onBufferCodecs, this), e.on(m.MEDIA_DETACHING, this.onMediaDetaching, this);
  }
  unregisterListener() {
    const {
      hls: e
    } = this;
    e.off(m.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.BUFFER_CODECS, this.onBufferCodecs, this), e.off(m.MEDIA_DETACHING, this.onMediaDetaching, this);
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
    this.media = t.media instanceof HTMLVideoElement ? t.media : null, this.clientRect = null;
  }
  onManifestParsed(e, t) {
    const s = this.hls;
    this.restrictedLevels = [], this.firstLevel = t.firstLevel, s.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  // Only activate capping when playing a video stream; otherwise, multi-bitrate audio-only streams will be restricted
  // to the first level
  onBufferCodecs(e, t) {
    this.hls.config.capLevelToPlayerSize && t.video && this.startCapping();
  }
  onMediaDetaching() {
    this.stopCapping();
  }
  detectPlayerSize() {
    if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
      const e = this.hls.levels;
      if (e.length) {
        const t = this.hls;
        t.autoLevelCapping = this.getMaxLevel(e.length - 1), t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping;
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
    return this.clientRect = null, Ws.getMaxLevelByMediaSize(s, this.mediaWidth, this.mediaHeight);
  }
  startCapping() {
    this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize());
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
    return e;
  }
  isLevelAllowed(e) {
    return !this.restrictedLevels.some((s) => e.bitrate === s.bitrate && e.width === s.width && e.height === s.height);
  }
  static getMaxLevelByMediaSize(e, t, s) {
    if (!(e != null && e.length))
      return -1;
    const i = (n, o) => o ? n.width !== o.width || n.height !== o.height : !0;
    let r = e.length - 1;
    for (let n = 0; n < e.length; n += 1) {
      const o = e[n];
      if ((o.width >= t || o.height >= s) && i(o, e[n + 1])) {
        r = n;
        break;
      }
    }
    return r;
  }
}
class nl {
  // stream controller must be provided as a dependency!
  constructor(e) {
    this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners();
  }
  setStreamController(e) {
    this.streamController = e;
  }
  registerListeners() {
    this.hls.on(m.MEDIA_ATTACHING, this.onMediaAttaching, this);
  }
  unregisterListeners() {
    this.hls.off(m.MEDIA_ATTACHING, this.onMediaAttaching, this);
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
  checkFPS(e, t, s) {
    const i = performance.now();
    if (t) {
      if (this.lastTime) {
        const r = i - this.lastTime, n = s - this.lastDroppedFrames, o = t - this.lastDecodedFrames, l = 1e3 * n / r, c = this.hls;
        if (c.trigger(m.FPS_DROP, {
          currentDropped: n,
          currentDecoded: o,
          totalDroppedFrames: s
        }), l > 0 && n > c.config.fpsDroppedMonitoringThreshold * o) {
          let d = c.currentLevel;
          v.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (c.autoLevelCapping === -1 || c.autoLevelCapping >= d) && (d = d - 1, c.trigger(m.FPS_DROP_LEVEL_CAPPING, {
            level: d,
            droppedLevel: c.currentLevel
          }), c.autoLevelCapping = d, this.streamController.nextLevelSwitch());
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
const Rt = "[eme]";
class it {
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = null, this.keyFormatPromise = null, this.keySystemAccessPromises = {}, this._requestLicenseFailureCount = 0, this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, this.setMediaKeysQueue = it.CDMCleanupPromise ? [it.CDMCleanupPromise] : [], this.onMediaEncrypted = this._onMediaEncrypted.bind(this), this.onWaitingForKey = this._onWaitingForKey.bind(this), this.debug = v.debug.bind(v, Rt), this.log = v.log.bind(v, Rt), this.warn = v.warn.bind(v, Rt), this.error = v.error.bind(v, Rt), this.hls = e, this.config = e.config, this.registerListeners();
  }
  destroy() {
    this.unregisterListeners(), this.onMediaDetached();
    const e = this.config;
    e.requestMediaKeySystemAccessFunc = null, e.licenseXhrSetup = e.licenseResponseCallback = void 0, e.drmSystems = e.drmSystemOptions = {}, this.hls = this.onMediaEncrypted = this.onWaitingForKey = this.keyIdToKeySessionPromise = null, this.config = null;
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
    if (e === ie.WIDEVINE && s)
      return s;
    throw new Error(`no license server URL configured for key-system "${e}"`);
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
    const t = this.hls.levels, s = (n, o, l) => !!n && l.indexOf(n) === o, i = t.map((n) => n.audioCodec).filter(s), r = t.map((n) => n.videoCodec).filter(s);
    return i.length + r.length === 0 && r.push("avc1.42e01e"), new Promise((n, o) => {
      const l = (c) => {
        const d = c.shift();
        this.getMediaKeysPromise(d, i, r).then((u) => n({
          keySystem: d,
          mediaKeys: u
        })).catch((u) => {
          c.length ? l(c) : u instanceof ve ? o(u) : o(new ve({
            type: G.KEY_SYSTEM_ERROR,
            details: I.KEY_SYSTEM_NO_ACCESS,
            error: u,
            fatal: !0
          }, u.message));
        });
      };
      l(e);
    });
  }
  requestMediaKeySystemAccess(e, t) {
    const {
      requestMediaKeySystemAccessFunc: s
    } = this.config;
    if (typeof s != "function") {
      let i = `Configured requestMediaKeySystemAccess is not a function ${s}`;
      return Zi === null && self.location.protocol === "http:" && (i = `navigator.requestMediaKeySystemAccess is not available over insecure protocol ${location.protocol}`), Promise.reject(new Error(i));
    }
    return s(e, t);
  }
  getMediaKeysPromise(e, t, s) {
    const i = Tn(e, t, s, this.config.drmSystemOptions), r = this.keySystemAccessPromises[e];
    let n = r == null ? void 0 : r.keySystemAccess;
    if (!n) {
      this.log(`Requesting encrypted media "${e}" key-system access with config: ${JSON.stringify(i)}`), n = this.requestMediaKeySystemAccess(e, i);
      const o = this.keySystemAccessPromises[e] = {
        keySystemAccess: n
      };
      return n.catch((l) => {
        this.log(`Failed to obtain access to key-system "${e}": ${l}`);
      }), n.then((l) => {
        this.log(`Access for key-system "${l.keySystem}" obtained`);
        const c = this.fetchServerCertificate(e);
        return this.log(`Create media-keys for "${e}"`), o.mediaKeys = l.createMediaKeys().then((d) => (this.log(`Media-keys created for "${e}"`), c.then((u) => u ? this.setMediaKeysServerCertificate(d, e, u) : d))), o.mediaKeys.catch((d) => {
          this.error(`Failed to create media-keys for "${e}"}: ${d}`);
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
    this.log(`Creating key-system session "${t}" keyId: ${De.hexDump(e.keyId || [])}`);
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
      this.keyIdToKeySessionPromise[i] = this.generateRequestWithPreferredKeySession(s, r, t.pssh, "expired");
    } else
      this.warn("Could not renew expired session. Missing pssh initData.");
    this.removeSession(e);
  }
  getKeyIdString(e) {
    if (!e)
      throw new Error("Could not read keyId of undefined decryptdata");
    if (e.keyId === null)
      throw new Error("keyId is null");
    return De.hexDump(e.keyId);
  }
  updateKeySession(e, t) {
    var s;
    const i = e.mediaKeysSession;
    return this.log(`Updating key-session "${i.sessionId}" for keyID ${De.hexDump(((s = e.decryptdata) == null ? void 0 : s.keyId) || [])}
      } (data length: ${t && t.byteLength})`), i.update(t);
  }
  selectKeySystemFormat(e) {
    const t = Object.keys(e.levelkeys || {});
    return this.keyFormatPromise || (this.log(`Selecting key-system from fragment (sn: ${e.sn} ${e.type}: ${e.level}) key formats ${t.join(", ")}`), this.keyFormatPromise = this.getKeyFormatPromise(t)), this.keyFormatPromise;
  }
  getKeyFormatPromise(e) {
    return new Promise((t, s) => {
      const i = Yt(this.config), r = e.map(js).filter((n) => !!n && i.indexOf(n) !== -1);
      return this.getKeySystemSelectionPromise(r).then(({
        keySystem: n
      }) => {
        const o = Xs(n);
        o ? t(o) : s(new Error(`Unable to find format for key-system "${n}"`));
      }).catch(s);
    });
  }
  loadKey(e) {
    const t = e.keyInfo.decryptdata, s = this.getKeyIdString(t), i = `(keyId: ${s} format: "${t.keyFormat}" method: ${t.method} uri: ${t.uri})`;
    this.log(`Starting session for key ${i}`);
    let r = this.keyIdToKeySessionPromise[s];
    return r || (r = this.keyIdToKeySessionPromise[s] = this.getKeySystemForKeyPromise(t).then(({
      keySystem: n,
      mediaKeys: o
    }) => (this.throwIfDestroyed(), this.log(`Handle encrypted media sn: ${e.frag.sn} ${e.frag.type}: ${e.frag.level} using key ${i}`), this.attemptSetMediaKeys(n, o).then(() => {
      this.throwIfDestroyed();
      const l = this.createMediaKeySessionContext({
        keySystem: n,
        mediaKeys: o,
        decryptdata: t
      }), c = "cenc";
      return this.generateRequestWithPreferredKeySession(l, c, t.pssh, "playlist-key");
    }))), r.catch((n) => this.handleError(n))), r;
  }
  throwIfDestroyed(e = "Invalid state") {
    if (!this.hls)
      throw new Error("invalid state");
  }
  handleError(e) {
    this.hls && (this.error(e.message), e instanceof ve ? this.hls.trigger(m.ERROR, e.data) : this.hls.trigger(m.ERROR, {
      type: G.KEY_SYSTEM_ERROR,
      details: I.KEY_SYSTEM_NO_KEYS,
      error: e,
      fatal: !0
    }));
  }
  getKeySystemForKeyPromise(e) {
    const t = this.getKeyIdString(e), s = this.keyIdToKeySessionPromise[t];
    if (!s) {
      const i = js(e.keyFormat), r = i ? [i] : Yt(this.config);
      return this.attemptKeySystemAccess(r);
    }
    return s;
  }
  getKeySystemSelectionPromise(e) {
    if (e.length || (e = Yt(this.config)), e.length === 0)
      throw new ve({
        type: G.KEY_SYSTEM_ERROR,
        details: I.KEY_SYSTEM_NO_CONFIGURED_LICENSE,
        fatal: !0
      }, `Missing key-system license configuration options ${JSON.stringify({
        drmSystems: this.config.drmSystems
      })}`);
    return this.attemptKeySystemAccess(e);
  }
  _onMediaEncrypted(e) {
    const {
      initDataType: t,
      initData: s
    } = e;
    if (this.debug(`"${e.type}" event: init data type: "${t}"`), s === null)
      return;
    let i, r;
    if (t === "sinf" && this.config.drmSystems[ie.FAIRPLAY]) {
      const d = le(new Uint8Array(s));
      try {
        const u = ks(JSON.parse(d).sinf), h = or(new Uint8Array(u));
        if (!h)
          return;
        i = h.subarray(8, 24), r = ie.FAIRPLAY;
      } catch {
        this.warn('Failed to parse sinf "encrypted" event message initData');
        return;
      }
    } else {
      const d = Vn(s);
      if (d === null)
        return;
      d.version === 0 && d.systemId === Ji.WIDEVINE && d.data && (i = d.data.subarray(8, 24)), r = yn(d.systemId);
    }
    if (!r || !i)
      return;
    const n = De.hexDump(i), {
      keyIdToKeySessionPromise: o,
      mediaKeySessions: l
    } = this;
    let c = o[n];
    for (let d = 0; d < l.length; d++) {
      const u = l[d], h = u.decryptdata;
      if (h.pssh || !h.keyId)
        continue;
      const f = De.hexDump(h.keyId);
      if (n === f || h.uri.replace(/-/g, "").indexOf(n) !== -1) {
        c = o[f], delete o[f], h.pssh = new Uint8Array(s), h.keyId = i, c = o[n] = c.then(() => this.generateRequestWithPreferredKeySession(u, t, s, "encrypted-event-key-match"));
        break;
      }
    }
    c || (c = o[n] = this.getKeySystemSelectionPromise([r]).then(({
      keySystem: d,
      mediaKeys: u
    }) => {
      var h;
      this.throwIfDestroyed();
      const f = new ut("ISO-23001-7", n, (h = Xs(d)) != null ? h : "");
      return f.pssh = new Uint8Array(s), f.keyId = i, this.attemptSetMediaKeys(d, u).then(() => {
        this.throwIfDestroyed();
        const g = this.createMediaKeySessionContext({
          decryptdata: f,
          keySystem: d,
          mediaKeys: u
        });
        return this.generateRequestWithPreferredKeySession(g, t, s, "encrypted-event-no-match");
      });
    })), c.catch((d) => this.handleError(d));
  }
  _onWaitingForKey(e) {
    this.log(`"${e.type}" event`);
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
        const h = o.call(this.hls, t, s, e);
        if (!h)
          throw new Error("Invalid response from configured generateRequest filter");
        t = h.initDataType, s = e.decryptdata.pssh = h.initData ? new Uint8Array(h.initData) : null;
      } catch (h) {
        var l;
        if (this.warn(h.message), (l = this.hls) != null && l.config.debug)
          throw h;
      }
    if (s === null)
      return this.log(`Skipping key-session request for "${i}" (no initData)`), Promise.resolve(e);
    const c = this.getKeyIdString(e.decryptdata);
    this.log(`Generating key-session request for "${i}": ${c} (init data type: ${t} length: ${s ? s.byteLength : null})`);
    const d = new Vs();
    e.mediaKeysSession.onmessage = (h) => {
      const f = e.mediaKeysSession;
      if (!f) {
        d.emit("error", new Error("invalid state"));
        return;
      }
      const {
        messageType: g,
        message: p
      } = h;
      this.log(`"${g}" message event for session "${f.sessionId}" message size: ${p.byteLength}`), g === "license-request" || g === "license-renewal" ? this.renewLicense(e, p).catch((y) => {
        this.handleError(y), d.emit("error", y);
      }) : g === "license-release" ? e.keySystem === ie.FAIRPLAY && (this.updateKeySession(e, Qi("acknowledged")), this.removeSession(e)) : this.warn(`unhandled media key message type "${g}"`);
    }, e.mediaKeysSession.onkeystatuseschange = (h) => {
      if (!e.mediaKeysSession) {
        d.emit("error", new Error("invalid state"));
        return;
      }
      this.onKeyStatusChange(e);
      const g = e.keyStatus;
      d.emit("keyStatus", g), g === "expired" && (this.warn(`${e.keySystem} expired for key ${c}`), this.renewKeySession(e));
    };
    const u = new Promise((h, f) => {
      d.on("error", f), d.on("keyStatus", (g) => {
        g.startsWith("usable") ? h() : g === "output-restricted" ? f(new ve({
          type: G.KEY_SYSTEM_ERROR,
          details: I.KEY_SYSTEM_STATUS_OUTPUT_RESTRICTED,
          fatal: !1
        }, "HDCP level output restricted")) : g === "internal-error" ? f(new ve({
          type: G.KEY_SYSTEM_ERROR,
          details: I.KEY_SYSTEM_STATUS_INTERNAL_ERROR,
          fatal: !0
        }, `key status changed to "${g}"`)) : g === "expired" ? f(new Error("key expired while generating request")) : this.warn(`unhandled key status change "${g}"`);
      });
    });
    return e.mediaKeysSession.generateRequest(t, s).then(() => {
      var h;
      this.log(`Request generated for key-session "${(h = e.mediaKeysSession) == null ? void 0 : h.sessionId}" keyId: ${c}`);
    }).catch((h) => {
      throw new ve({
        type: G.KEY_SYSTEM_ERROR,
        details: I.KEY_SYSTEM_NO_SESSION,
        error: h,
        fatal: !1
      }, `Error generating key-session request: ${h}`);
    }).then(() => u).catch((h) => {
      throw d.removeAllListeners(), this.removeSession(e), h;
    }).then(() => (d.removeAllListeners(), e));
  }
  onKeyStatusChange(e) {
    e.mediaKeysSession.keyStatuses.forEach((t, s) => {
      this.log(`key status change "${t}" for keyStatuses keyId: ${De.hexDump("buffer" in s ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength) : new Uint8Array(s))} session keyId: ${De.hexDump(new Uint8Array(e.decryptdata.keyId || []))} uri: ${e.decryptdata.uri}`), e.keyStatus = t;
    });
  }
  fetchServerCertificate(e) {
    const t = this.config, s = t.loader, i = new s(t), r = this.getServerCertificateUrl(e);
    return r ? (this.log(`Fetching serverCertificate for "${e}"`), new Promise((n, o) => {
      const l = {
        responseType: "arraybuffer",
        url: r
      }, c = t.certLoadPolicy.default, d = {
        loadPolicy: c,
        timeout: c.maxLoadTimeMs,
        maxRetry: 0,
        retryDelay: 0,
        maxRetryDelay: 0
      }, u = {
        onSuccess: (h, f, g, p) => {
          n(h.data);
        },
        onError: (h, f, g, p) => {
          o(new ve({
            type: G.KEY_SYSTEM_ERROR,
            details: I.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: g,
            response: he({
              url: l.url,
              data: void 0
            }, h)
          }, `"${e}" certificate request failed (${r}). Status: ${h.code} (${h.text})`));
        },
        onTimeout: (h, f, g) => {
          o(new ve({
            type: G.KEY_SYSTEM_ERROR,
            details: I.KEY_SYSTEM_SERVER_CERTIFICATE_REQUEST_FAILED,
            fatal: !0,
            networkDetails: g,
            response: {
              url: l.url,
              data: void 0
            }
          }, `"${e}" certificate request timed out (${r})`));
        },
        onAbort: (h, f, g) => {
          o(new Error("aborted"));
        }
      };
      i.load(l, d, u);
    })) : Promise.resolve();
  }
  setMediaKeysServerCertificate(e, t, s) {
    return new Promise((i, r) => {
      e.setServerCertificate(s).then((n) => {
        this.log(`setServerCertificate ${n ? "success" : "not supported by CDM"} (${s == null ? void 0 : s.byteLength}) on "${t}"`), i(e);
      }).catch((n) => {
        r(new ve({
          type: G.KEY_SYSTEM_ERROR,
          details: I.KEY_SYSTEM_SERVER_CERTIFICATE_UPDATE_FAILED,
          error: n,
          fatal: !0
        }, n.message));
      });
    });
  }
  renewLicense(e, t) {
    return this.requestLicense(e, new Uint8Array(t)).then((s) => this.updateKeySession(e, new Uint8Array(s)).catch((i) => {
      throw new ve({
        type: G.KEY_SYSTEM_ERROR,
        details: I.KEY_SYSTEM_SESSION_UPDATE_FAILED,
        error: i,
        fatal: !0
      }, i.message);
    }));
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
      const n = this.getLicenseServerUrl(e.keySystem);
      this.log(`Sending license request to URL: ${n}`);
      const o = new XMLHttpRequest();
      o.responseType = "arraybuffer", o.onreadystatechange = () => {
        if (!this.hls || !e.mediaKeysSession)
          return r(new Error("invalid state"));
        if (o.readyState === 4)
          if (o.status === 200) {
            this._requestLicenseFailureCount = 0;
            let l = o.response;
            this.log(`License received ${l instanceof ArrayBuffer ? l.byteLength : l}`);
            const c = this.config.licenseResponseCallback;
            if (c)
              try {
                l = c.call(this.hls, o, n, e);
              } catch (d) {
                this.error(d);
              }
            i(l);
          } else {
            const l = s.errorRetry, c = l ? l.maxNumRetry : 0;
            if (this._requestLicenseFailureCount++, this._requestLicenseFailureCount > c || o.status >= 400 && o.status < 500)
              r(new ve({
                type: G.KEY_SYSTEM_ERROR,
                details: I.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
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
              const d = c - this._requestLicenseFailureCount + 1;
              this.warn(`Retrying license request, ${d} attempts left`), this.requestLicense(e, t).then(i, r);
            }
          }
      }, e.licenseXhr && e.licenseXhr.readyState !== XMLHttpRequest.DONE && e.licenseXhr.abort(), e.licenseXhr = o, this.setupLicenseXHR(o, n, e, t).then(({
        xhr: l,
        licenseChallenge: c
      }) => {
        l.send(c);
      });
    });
  }
  onMediaAttached(e, t) {
    if (!this.config.emeEnabled)
      return;
    const s = t.media;
    this.media = s, s.addEventListener("encrypted", this.onMediaEncrypted), s.addEventListener("waitingforkey", this.onWaitingForKey);
  }
  onMediaDetached() {
    const e = this.media, t = this.mediaKeySessions;
    e && (e.removeEventListener("encrypted", this.onMediaEncrypted), e.removeEventListener("waitingforkey", this.onWaitingForKey), this.media = null), this._requestLicenseFailureCount = 0, this.setMediaKeysQueue = [], this.mediaKeySessions = [], this.keyIdToKeySessionPromise = {}, ut.clearKeyUriToKeyIdMap();
    const s = t.length;
    it.CDMCleanupPromise = Promise.all(t.map((i) => this.removeSession(i)).concat(e == null ? void 0 : e.setMediaKeys(null).catch((i) => {
      this.log(`Could not clear media keys: ${i}. media.src: ${e == null ? void 0 : e.src}`);
    }))).then(() => {
      s && (this.log("finished closing key sessions and clearing media keys"), t.length = 0);
    }).catch((i) => {
      this.log(`Could not close sessions and clear media keys: ${i}. media.src: ${e == null ? void 0 : e.src}`);
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
      this.log(`Remove licenses and keys and close session ${t.sessionId}`), t.onmessage = null, t.onkeystatuseschange = null, s && s.readyState !== XMLHttpRequest.DONE && s.abort(), e.mediaKeysSession = e.decryptdata = e.licenseXhr = void 0;
      const i = this.mediaKeySessions.indexOf(e);
      return i > -1 && this.mediaKeySessions.splice(i, 1), t.remove().catch((r) => {
        this.log(`Could not remove session: ${r}`);
      }).then(() => t.close()).catch((r) => {
        this.log(`Could not close session: ${r}`);
      });
    }
  }
}
it.CDMCleanupPromise = void 0;
class ve extends Error {
  constructor(e, t) {
    super(t), this.data = void 0, e.error || (e.error = new Error(t)), this.data = e, e.err = e.error;
  }
}
const al = 1;
var fe = {
  MANIFEST: "m",
  AUDIO: "a",
  VIDEO: "v",
  MUXED: "av",
  INIT: "i",
  CAPTION: "c",
  TIMED_TEXT: "tt",
  KEY: "k",
  OTHER: "o"
};
const ol = "h";
class Be {
  // eslint-disable-line no-restricted-globals
  // eslint-disable-line no-restricted-globals
  constructor(e) {
    this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = () => {
      this.initialized && (this.starved = !0), this.buffering = !0;
    }, this.onPlaying = () => {
      this.initialized || (this.initialized = !0), this.buffering = !1;
    }, this.applyPlaylistData = (i) => {
      try {
        this.apply(i, {
          ot: fe.MANIFEST,
          su: !this.initialized
        });
      } catch (r) {
        v.warn("Could not generate manifest CMCD data.", r);
      }
    }, this.applyFragmentData = (i) => {
      try {
        const r = i.frag, n = this.hls.levels[r.level], o = this.getObjectType(r), l = {
          d: r.duration * 1e3,
          ot: o
        };
        (o === fe.VIDEO || o === fe.AUDIO || o == fe.MUXED) && (l.br = n.bitrate / 1e3, l.tb = this.getTopBandwidth(o) / 1e3, l.bl = this.getBufferLength(o)), this.apply(i, l);
      } catch (r) {
        v.warn("Could not generate segment CMCD data.", r);
      }
    }, this.hls = e;
    const t = this.config = e.config, {
      cmcd: s
    } = t;
    s != null && (t.pLoader = this.createPlaylistLoader(), t.fLoader = this.createFragmentLoader(), this.sid = s.sessionId || Be.uuid(), this.cid = s.contentId, this.useHeaders = s.useHeaders === !0, this.registerListeners());
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
    this.unregisterListeners(), this.onMediaDetached(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null;
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
      v: al,
      sf: ol,
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
    ne(t, this.createData());
    const s = t.ot === fe.INIT || t.ot === fe.VIDEO || t.ot === fe.MUXED;
    if (this.starved && s && (t.bs = !0, t.su = !0, this.starved = !1), t.su == null && (t.su = this.buffering), this.useHeaders) {
      const i = Be.toHeaders(t);
      if (!Object.keys(i).length)
        return;
      e.headers || (e.headers = {}), ne(e.headers, i);
    } else {
      const i = Be.toQuery(t);
      if (!i)
        return;
      e.url = Be.appendQueryToUri(e.url, i);
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
      return fe.TIMED_TEXT;
    if (e.sn === "initSegment")
      return fe.INIT;
    if (t === "audio")
      return fe.AUDIO;
    if (t === "main")
      return this.hls.audioTracks.length ? fe.VIDEO : fe.MUXED;
  }
  /**
   * Get the highest bitrate.
   */
  getTopBandwidth(e) {
    let t = 0, s;
    const i = this.hls;
    if (e === fe.AUDIO)
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
    const t = this.hls.media, s = e === fe.AUDIO ? this.audioBuffer : this.videoBuffer;
    return !s || !t ? NaN : ee.bufferInfo(s, t.currentTime, this.config.maxBufferHole).len * 1e3;
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
  /**
   * Generate a random v4 UUI
   *
   * @returns {string}
   */
  static uuid() {
    const e = URL.createObjectURL(new Blob()), t = e.toString();
    return URL.revokeObjectURL(e), t.slice(t.lastIndexOf("/") + 1);
  }
  /**
   * Serialize a CMCD data object according to the rules defined in the
   * section 3.2 of
   * [CTA-5004](https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf).
   */
  static serialize(e) {
    const t = [], s = (c) => !Number.isNaN(c) && c != null && c !== "" && c !== !1, i = (c) => Math.round(c), r = (c) => i(c / 100) * 100, o = {
      br: i,
      d: i,
      bl: r,
      dl: r,
      mtp: r,
      nor: (c) => encodeURIComponent(c),
      rtp: r,
      tb: i
    }, l = Object.keys(e || {}).sort();
    for (const c of l) {
      let d = e[c];
      if (!s(d) || c === "v" && d === 1 || c == "pr" && d === 1)
        continue;
      const u = o[c];
      u && (d = u(d));
      const h = typeof d;
      let f;
      c === "ot" || c === "sf" || c === "st" ? f = `${c}=${d}` : h === "boolean" ? f = c : h === "number" ? f = `${c}=${d}` : f = `${c}=${JSON.stringify(d)}`, t.push(f);
    }
    return t.join(",");
  }
  /**
   * Convert a CMCD data object to request headers according to the rules
   * defined in the section 2.1 and 3.2 of
   * [CTA-5004](https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf).
   */
  static toHeaders(e) {
    const t = Object.keys(e), s = {}, i = ["Object", "Request", "Session", "Status"], r = [{}, {}, {}, {}], n = {
      br: 0,
      d: 0,
      ot: 0,
      tb: 0,
      bl: 1,
      dl: 1,
      mtp: 1,
      nor: 1,
      nrr: 1,
      su: 1,
      cid: 2,
      pr: 2,
      sf: 2,
      sid: 2,
      st: 2,
      v: 2,
      bs: 3,
      rtp: 3
    };
    for (const o of t) {
      const l = n[o] != null ? n[o] : 1;
      r[l][o] = e[o];
    }
    for (let o = 0; o < r.length; o++) {
      const l = Be.serialize(r[o]);
      l && (s[`CMCD-${i[o]}`] = l);
    }
    return s;
  }
  /**
   * Convert a CMCD data object to query args according to the rules
   * defined in the section 2.2 and 3.2 of
   * [CTA-5004](https://cdn.cta.tech/cta/media/media/resources/standards/pdfs/cta-5004-final.pdf).
   */
  static toQuery(e) {
    return `CMCD=${encodeURIComponent(Be.serialize(e))}`;
  }
  /**
   * Append query args to a uri.
   */
  static appendQueryToUri(e, t) {
    if (!t)
      return e;
    const s = e.includes("?") ? "&" : "?";
    return `${e}${s}${t}`;
  }
}
const ll = 3e5;
class cl {
  constructor(e) {
    this.hls = void 0, this.log = void 0, this.loader = null, this.uri = null, this.pathwayId = ".", this.pathwayPriority = null, this.timeToLoad = 300, this.reloadTimer = -1, this.updated = 0, this.started = !1, this.enabled = !0, this.levels = null, this.audioTracks = null, this.subtitleTracks = null, this.penalizedPathways = {}, this.hls = e, this.log = v.log.bind(v, "[content-steering]:"), this.registerListeners();
  }
  registerListeners() {
    const e = this.hls;
    e.on(m.MANIFEST_LOADING, this.onManifestLoading, this), e.on(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(m.MANIFEST_PARSED, this.onManifestParsed, this), e.on(m.ERROR, this.onError, this);
  }
  unregisterListeners() {
    const e = this.hls;
    e && (e.off(m.MANIFEST_LOADING, this.onManifestLoading, this), e.off(m.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(m.MANIFEST_PARSED, this.onManifestParsed, this), e.off(m.ERROR, this.onError, this));
  }
  startLoad() {
    if (this.started = !0, self.clearTimeout(this.reloadTimer), this.enabled && this.uri)
      if (this.updated) {
        const e = Math.max(this.timeToLoad * 1e3 - (performance.now() - this.updated), 0);
        this.scheduleRefresh(this.uri, e);
      } else
        this.loadSteeringManifest(this.uri);
  }
  stopLoad() {
    this.started = !1, this.loader && (this.loader.destroy(), this.loader = null), self.clearTimeout(this.reloadTimer);
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
    if ((s == null ? void 0 : s.action) === de.SendAlternateToPenaltyBox && s.flags === Se.MoveAllAlternatesMatchingHost) {
      let i = this.pathwayPriority;
      const r = this.pathwayId;
      this.penalizedPathways[r] || (this.penalizedPathways[r] = performance.now()), !i && this.levels && (i = this.levels.reduce((n, o) => (n.indexOf(o.pathwayId) === -1 && n.push(o.pathwayId), n), [])), i && i.length > 1 && (this.updatePathwayPriority(i), s.resolved = this.pathwayId !== r);
    }
  }
  filterParsedLevels(e) {
    this.levels = e;
    let t = this.getLevelsForPathway(this.pathwayId);
    if (t.length === 0) {
      const s = e[0].pathwayId;
      this.log(`No levels found in Pathway ${this.pathwayId}. Setting initial Pathway to "${s}"`), t = this.getLevelsForPathway(s), this.pathwayId = s;
    }
    return t.length !== e.length ? (this.log(`Found ${t.length}/${e.length} levels in Pathway "${this.pathwayId}"`), t) : e;
  }
  getLevelsForPathway(e) {
    return this.levels === null ? [] : this.levels.filter((t) => e === t.pathwayId);
  }
  updatePathwayPriority(e) {
    this.pathwayPriority = e;
    let t;
    const s = this.penalizedPathways, i = performance.now();
    Object.keys(s).forEach((r) => {
      i - s[r] > ll && delete s[r];
    });
    for (let r = 0; r < e.length; r++) {
      const n = e[r];
      if (s[n])
        continue;
      if (n === this.pathwayId)
        return;
      const o = this.hls.nextLoadLevel, l = this.hls.levels[o];
      if (t = this.getLevelsForPathway(n), t.length > 0) {
        this.log(`Setting Pathway to "${n}"`), this.pathwayId = n, this.hls.trigger(m.LEVELS_UPDATED, {
          levels: t
        });
        const c = this.hls.levels[o];
        l && c && this.levels && (c.attrs["STABLE-VARIANT-ID"] !== l.attrs["STABLE-VARIANT-ID"] && c.bitrate !== l.bitrate && this.log(`Unstable Pathways change from bitrate ${l.bitrate} to ${c.bitrate}`), this.hls.nextLoadLevel = o);
        break;
      }
    }
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
        "URI-REPLACEMENT": l
      } = r;
      if (t.some((d) => d.pathwayId === n))
        return;
      const c = this.getLevelsForPathway(o).map((d) => {
        const u = ne({}, d);
        u.details = void 0, u.url = Hr(d.uri, d.attrs["STABLE-VARIANT-ID"], "PER-VARIANT-URIS", l);
        const h = new se(d.attrs);
        h["PATHWAY-ID"] = n;
        const f = h.AUDIO && `${h.AUDIO}_clone_${n}`, g = h.SUBTITLES && `${h.SUBTITLES}_clone_${n}`;
        f && (s[h.AUDIO] = f, h.AUDIO = f), g && (i[h.SUBTITLES] = g, h.SUBTITLES = g), u.attrs = h;
        const p = new ht(u);
        return Ot(p, "audio", f), Ot(p, "text", g), p;
      });
      t.push(...c), $i(this.audioTracks, s, l, n), $i(this.subtitleTracks, i, l, n);
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
      const d = (this.hls.bandwidthEstimate || t.abrEwmaDefaultEstimate) | 0;
      i.searchParams.set("_HLS_pathway", this.pathwayId), i.searchParams.set("_HLS_throughput", "" + d);
    }
    const r = {
      responseType: "json",
      url: i.href
    }, n = t.steeringManifestLoadPolicy.default, o = n.errorRetry || n.timeoutRetry || {}, l = {
      loadPolicy: n,
      timeout: n.maxLoadTimeMs,
      maxRetry: o.maxNumRetry || 0,
      retryDelay: o.retryDelayMs || 0,
      maxRetryDelay: o.maxRetryDelayMs || 0
    }, c = {
      onSuccess: (d, u, h, f) => {
        this.log(`Loaded steering manifest: "${i}"`);
        const g = d.data;
        if (g.VERSION !== 1) {
          this.log(`Steering VERSION ${g.VERSION} not supported!`);
          return;
        }
        this.updated = performance.now(), this.timeToLoad = g.TTL;
        const {
          "RELOAD-URI": p,
          "PATHWAY-CLONES": y,
          "PATHWAY-PRIORITY": T
        } = g;
        if (p)
          try {
            this.uri = new self.URL(p, i).href;
          } catch {
            this.enabled = !1, this.log(`Failed to parse Steering Manifest RELOAD-URI: ${p}`);
            return;
          }
        this.scheduleRefresh(this.uri || h.url), y && this.clonePathways(y), T && this.updatePathwayPriority(T);
      },
      onError: (d, u, h, f) => {
        if (this.log(`Error loading steering manifest: ${d.code} ${d.text} (${u.url})`), this.stopLoad(), d.code === 410) {
          this.enabled = !1, this.log(`Steering manifest ${u.url} no longer available`);
          return;
        }
        let g = this.timeToLoad * 1e3;
        if (d.code === 429) {
          const p = this.loader;
          if (typeof (p == null ? void 0 : p.getResponseHeader) == "function") {
            const y = p.getResponseHeader("Retry-After");
            y && (g = parseFloat(y) * 1e3);
          }
          this.log(`Steering manifest ${u.url} rate limited`);
          return;
        }
        this.scheduleRefresh(this.uri || u.url, g);
      },
      onTimeout: (d, u, h) => {
        this.log(`Timeout loading steering manifest (${u.url})`), this.scheduleRefresh(this.uri || u.url);
      }
    };
    this.log(`Requesting steering manifest: ${i}`), this.loader.load(r, l, c);
  }
  scheduleRefresh(e, t = this.timeToLoad * 1e3) {
    self.clearTimeout(this.reloadTimer), this.reloadTimer = self.setTimeout(() => {
      this.loadSteeringManifest(e);
    }, t);
  }
}
function $i(a, e, t, s) {
  a && Object.keys(e).forEach((i) => {
    const r = a.filter((n) => n.groupId === i).map((n) => {
      const o = ne({}, n);
      return o.details = void 0, o.attrs = new se(o.attrs), o.url = o.attrs.URI = Hr(n.url, n.attrs["STABLE-RENDITION-ID"], "PER-RENDITION-URIS", t), o.groupId = o.attrs["GROUP-ID"] = e[i], o.attrs["PATHWAY-ID"] = s, o;
    });
    a.push(...r);
  });
}
function Hr(a, e, t, s) {
  const {
    HOST: i,
    PARAMS: r,
    [t]: n
  } = s;
  let o;
  e && (o = n == null ? void 0 : n[e], o && (a = o));
  const l = new self.URL(a);
  return i && !o && (l.host = i), r && Object.keys(r).sort().forEach((c) => {
    c && l.searchParams.set(c, r[c]);
  }), l.href;
}
const dl = /^age:\s*[\d.]+\s*$/im;
class Wr {
  constructor(e) {
    this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = e && e.xhrSetup || null, this.stats = new Bt(), this.retryDelay = 0;
  }
  destroy() {
    this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null;
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
    if (!e)
      return;
    const s = this.loader = new self.XMLHttpRequest(), i = this.stats;
    i.loading.first = 0, i.loaded = 0, i.aborted = !1;
    const r = this.xhrSetup;
    r ? Promise.resolve().then(() => {
      if (!this.stats.aborted)
        return r(s, t.url);
    }).catch((n) => (s.open("GET", t.url, !0), r(s, t.url))).then(() => {
      this.stats.aborted || this.openAndSendXhr(s, t, e);
    }).catch((n) => {
      this.callbacks.onError({
        code: s.status,
        text: n.message
      }, t, s, i);
    }) : this.openAndSendXhr(s, t, e);
  }
  openAndSendXhr(e, t, s) {
    e.readyState || e.open("GET", t.url, !0);
    const i = this.context.headers, {
      maxTimeToFirstByteMs: r,
      maxLoadTimeMs: n
    } = s.loadPolicy;
    if (i)
      for (const o in i)
        e.setRequestHeader(o, i[o]);
    t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = t.responseType, self.clearTimeout(this.requestTimeout), s.timeout = r && U(r) ? r : n, this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), s.timeout), e.send();
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
      const n = t.status, o = t.responseType !== "text";
      if (n >= 200 && n < 300 && (o && t.response || t.responseText !== null)) {
        s.loading.end = Math.max(self.performance.now(), s.loading.first);
        const l = o ? t.response : t.responseText, c = t.responseType === "arraybuffer" ? l.byteLength : l.length;
        if (s.loaded = s.total = c, s.bwEstimate = s.total * 8e3 / (s.loading.end - s.loading.first), !this.callbacks)
          return;
        const d = this.callbacks.onProgress;
        if (d && d(s, e, l, t), !this.callbacks)
          return;
        const u = {
          url: t.responseURL,
          data: l,
          code: n
        };
        this.callbacks.onSuccess(u, s, e, t);
      } else {
        const l = r.loadPolicy.errorRetry, c = s.retry;
        Ft(l, c, !1, n) ? this.retry(l) : (v.error(`${n} while loading ${e.url}`), this.callbacks.onError({
          code: n,
          text: t.statusText
        }, e, t, s));
      }
    }
  }
  loadtimeout() {
    var e;
    const t = (e = this.config) == null ? void 0 : e.loadPolicy.timeoutRetry, s = this.stats.retry;
    if (Ft(t, s, !0))
      this.retry(t);
    else {
      v.warn(`timeout while loading ${this.context.url}`);
      const i = this.callbacks;
      i && (this.abortInternal(), i.onTimeout(this.stats, this.context, this.loader));
    }
  }
  retry(e) {
    const {
      context: t,
      stats: s
    } = this;
    this.retryDelay = Ps(e, s.retry), s.retry++, v.warn(`${status ? "HTTP Status " + status : "Timeout"} while loading ${t.url}, retrying ${s.retry}/${e.maxNumRetry} in ${this.retryDelay}ms`), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
  }
  loadprogress(e) {
    const t = this.stats;
    t.loaded = e.loaded, e.lengthComputable && (t.total = e.total);
  }
  getCacheAge() {
    let e = null;
    if (this.loader && dl.test(this.loader.getAllResponseHeaders())) {
      const t = this.loader.getResponseHeader("age");
      e = t ? parseFloat(t) : null;
    }
    return e;
  }
  getResponseHeader(e) {
    return this.loader && new RegExp(`^${e}:\\s*[\\d.]+\\s*$`, "im").test(this.loader.getAllResponseHeaders()) ? this.loader.getResponseHeader(e) : null;
  }
}
function ul() {
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
const hl = /(\d+)-(\d+)\/(\d+)/;
class Gi {
  constructor(e) {
    this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || pl, this.controller = new self.AbortController(), this.stats = new Bt();
  }
  destroy() {
    this.loader = this.callbacks = null, this.abortInternal();
  }
  abortInternal() {
    const e = this.response;
    e != null && e.ok || (this.stats.aborted = !0, this.controller.abort());
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
    const r = fl(e, this.controller.signal), n = s.onProgress, o = e.responseType === "arraybuffer", l = o ? "byteLength" : "length", {
      maxTimeToFirstByteMs: c,
      maxLoadTimeMs: d
    } = t.loadPolicy;
    this.context = e, this.config = t, this.callbacks = s, this.request = this.fetchSetup(e, r), self.clearTimeout(this.requestTimeout), t.timeout = c && U(c) ? c : d, this.requestTimeout = self.setTimeout(() => {
      this.abortInternal(), s.onTimeout(i, e, this.response);
    }, t.timeout), self.fetch(this.request).then((u) => {
      this.response = this.loader = u;
      const h = Math.max(self.performance.now(), i.loading.start);
      if (self.clearTimeout(this.requestTimeout), t.timeout = d, this.requestTimeout = self.setTimeout(() => {
        this.abortInternal(), s.onTimeout(i, e, this.response);
      }, d - (h - i.loading.start)), !u.ok) {
        const {
          status: f,
          statusText: g
        } = u;
        throw new yl(g || "fetch, bad network response", f, u);
      }
      return i.loading.first = h, i.total = ml(u.headers) || i.total, n && U(t.highWaterMark) ? this.loadProgressively(u, i, e, t.highWaterMark, n) : o ? u.arrayBuffer() : e.responseType === "json" ? u.json() : u.text();
    }).then((u) => {
      const {
        response: h
      } = this;
      self.clearTimeout(this.requestTimeout), i.loading.end = Math.max(self.performance.now(), i.loading.first);
      const f = u[l];
      f && (i.loaded = i.total = f);
      const g = {
        url: h.url,
        data: u,
        code: h.status
      };
      n && !U(t.highWaterMark) && n(i, e, u, h), s.onSuccess(g, i, e, h);
    }).catch((u) => {
      if (self.clearTimeout(this.requestTimeout), i.aborted)
        return;
      const h = u && u.code || 0, f = u ? u.message : null;
      s.onError({
        code: h,
        text: f
      }, e, u ? u.details : null, i);
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
    const n = new Fr(), o = e.body.getReader(), l = () => o.read().then((c) => {
      if (c.done)
        return n.dataLength && r(t, s, n.flush(), e), Promise.resolve(new ArrayBuffer(0));
      const d = c.value, u = d.length;
      return t.loaded += u, u < i || n.dataLength ? (n.push(d), n.dataLength >= i && r(t, s, n.flush(), e)) : r(t, s, d, e), l();
    }).catch(() => Promise.reject());
    return l();
  }
}
function fl(a, e) {
  const t = {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    signal: e,
    headers: new self.Headers(ne({}, a.headers))
  };
  return a.rangeEnd && t.headers.set("Range", "bytes=" + a.rangeStart + "-" + String(a.rangeEnd - 1)), t;
}
function gl(a) {
  const e = hl.exec(a);
  if (e)
    return parseInt(e[2]) - parseInt(e[1]) + 1;
}
function ml(a) {
  const e = a.get("Content-Range");
  if (e) {
    const s = gl(e);
    if (U(s))
      return s;
  }
  const t = a.get("Content-Length");
  if (t)
    return parseInt(t);
}
function pl(a, e) {
  return new self.Request(a.url, e);
}
class yl extends Error {
  constructor(e, t, s) {
    super(e), this.code = void 0, this.details = void 0, this.code = t, this.details = s;
  }
}
const Tl = /\s/, xl = {
  newCue(a, e, t, s) {
    const i = [];
    let r, n, o, l, c;
    const d = self.VTTCue || self.TextTrackCue;
    for (let h = 0; h < s.rows.length; h++)
      if (r = s.rows[h], o = !0, l = 0, c = "", !r.isEmpty()) {
        var u;
        for (let p = 0; p < r.chars.length; p++)
          Tl.test(r.chars[p].uchar) && o ? l++ : (c += r.chars[p].uchar, o = !1);
        r.cueStartTime = e, e === t && (t += 1e-4), l >= 16 ? l-- : l++;
        const f = $r(c.trim()), g = Hs(e, t, f);
        a != null && (u = a.cues) != null && u.getCueById(g) || (n = new d(e, t, f), n.id = g, n.line = h + 1, n.align = "left", n.position = 10 + Math.min(80, Math.floor(l * 8 / 32) * 10), i.push(n));
      }
    return a && i.length && (i.sort((h, f) => h.line === "auto" || f.line === "auto" ? 0 : h.line > 8 && f.line > 8 ? f.line - h.line : h.line - f.line), i.forEach((h) => hr(a, h))), i;
  }
}, El = {
  maxTimeToFirstByteMs: 8e3,
  maxLoadTimeMs: 2e4,
  timeoutRetry: null,
  errorRetry: null
}, vl = he(he({
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
  initialLiveManifestSize: 1,
  // used by stream-controller
  maxBufferLength: 30,
  // used by stream-controller
  backBufferLength: 1 / 0,
  // used by buffer-controller
  maxBufferSize: 60 * 1e3 * 1e3,
  // used by stream-controller
  maxBufferHole: 0.1,
  // used by stream-controller
  highBufferWatchdogPeriod: 2,
  // used by stream-controller
  nudgeOffset: 0.1,
  // used by stream-controller
  nudgeMaxRetry: 3,
  // used by stream-controller
  maxFragLookUpTolerance: 0.25,
  // used by stream-controller
  liveSyncDurationCount: 3,
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
  loader: Wr,
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
  abrController: Io,
  bufferController: Fo,
  capLevelController: Ws,
  errorController: pa,
  fpsController: nl,
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
  requestMediaKeySystemAccessFunc: Zi,
  // used by eme-controller
  testBandwidth: !0,
  progressive: !1,
  lowLatencyMode: !0,
  cmcd: void 0,
  enableDateRangeMetadataCues: !0,
  enableEmsgMetadataCues: !0,
  enableID3MetadataCues: !0,
  certLoadPolicy: {
    default: El
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
}, Sl()), {}, {
  subtitleStreamController: _o,
  subtitleTrackController: wo,
  timelineController: sl,
  audioStreamController: bo,
  audioTrackController: Do,
  emeController: it,
  cmcdController: Be,
  contentSteeringController: cl
});
function Sl() {
  return {
    cueHandler: xl,
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
function Ll(a, e) {
  if ((e.liveSyncDurationCount || e.liveMaxLatencyDurationCount) && (e.liveSyncDuration || e.liveMaxLatencyDuration))
    throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
  if (e.liveMaxLatencyDurationCount !== void 0 && (e.liveSyncDurationCount === void 0 || e.liveMaxLatencyDurationCount <= e.liveSyncDurationCount))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
  if (e.liveMaxLatencyDuration !== void 0 && (e.liveSyncDuration === void 0 || e.liveMaxLatencyDuration <= e.liveSyncDuration))
    throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
  const t = bs(a), s = ["manifest", "level", "frag"], i = ["TimeOut", "MaxRetry", "RetryDelay", "MaxRetryTimeout"];
  return s.forEach((r) => {
    const n = `${r === "level" ? "playlist" : r}LoadPolicy`, o = e[n] === void 0, l = [];
    i.forEach((c) => {
      const d = `${r}Loading${c}`, u = e[d];
      if (u !== void 0 && o) {
        l.push(d);
        const h = t[n].default;
        switch (e[n] = {
          default: h
        }, c) {
          case "TimeOut":
            h.maxLoadTimeMs = u, h.maxTimeToFirstByteMs = u;
            break;
          case "MaxRetry":
            h.errorRetry.maxNumRetry = u, h.timeoutRetry.maxNumRetry = u;
            break;
          case "RetryDelay":
            h.errorRetry.retryDelayMs = u, h.timeoutRetry.retryDelayMs = u;
            break;
          case "MaxRetryTimeout":
            h.errorRetry.maxRetryDelayMs = u, h.timeoutRetry.maxRetryDelayMs = u;
            break;
        }
      }
    }), l.length && v.warn(`hls.js config: "${l.join('", "')}" setting(s) are deprecated, use "${n}": ${JSON.stringify(e[n])}`);
  }), he(he({}, t), e);
}
function bs(a) {
  return a && typeof a == "object" ? Array.isArray(a) ? a.map(bs) : Object.keys(a).reduce((e, t) => (e[t] = bs(a[t]), e), {}) : a;
}
function Al(a) {
  const e = a.loader;
  e !== Gi && e !== Wr ? (v.log("[config]: Custom loader detected, cannot enable progressive streaming"), a.progressive = !1) : ul() && (a.loader = Gi, a.progressive = !0, a.enableSoftwareAES = !0, v.log("[config]: Progressive streaming enabled, using FetchLoader"));
}
class Me {
  /**
   * The runtime configuration used by the player. At instantiation this is combination of `hls.userConfig` merged over `Hls.DefaultConfig`.
   */
  /**
   * The configuration object provided on player instantiation.
   */
  /**
   * Get the video-dev/hls.js package version.
   */
  static get version() {
    return "1.4.13";
  }
  /**
   * Check if the required MediaSource Extensions are available.
   */
  static isSupported() {
    return Oa();
  }
  static get Events() {
    return m;
  }
  static get ErrorTypes() {
    return G;
  }
  static get ErrorDetails() {
    return I;
  }
  /**
   * Get the default configuration applied to new instances.
   */
  static get DefaultConfig() {
    return Me.defaultConfig ? Me.defaultConfig : vl;
  }
  /**
   * Replace the default configuration applied to new instances.
   */
  static set DefaultConfig(e) {
    Me.defaultConfig = e;
  }
  /**
   * Creates an instance of an HLS client that can attach to exactly one `HTMLMediaElement`.
   * @param userConfig - Configuration options applied over `Hls.DefaultConfig`
   */
  constructor(e = {}) {
    this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new Vs(), this._autoLevelCapping = void 0, this._maxHdcpLevel = null, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null, on(e.debug || !1, "Hls instance");
    const t = this.config = Ll(Me.DefaultConfig, e);
    this.userConfig = e, this._autoLevelCapping = -1, t.progressive && Al(t);
    const {
      abrController: s,
      bufferController: i,
      capLevelController: r,
      errorController: n,
      fpsController: o
    } = t, l = new n(this), c = this.abrController = new s(this), d = this.bufferController = new i(this), u = this.capLevelController = new r(this), h = new o(this), f = new Qn(this), g = new sa(this), p = t.contentSteeringController, y = p ? new p(this) : null, T = this.levelController = new Ta(this, y), E = new xa(this), x = new va(this.config), A = this.streamController = new Lo(this, E, x);
    u.setStreamController(A), h.setStreamController(A);
    const S = [f, T, A];
    y && S.splice(1, 0, y), this.networkControllers = S;
    const k = [c, d, u, h, g, E];
    this.audioTrackController = this.createController(t.audioTrackController, S);
    const b = t.audioStreamController;
    b && S.push(new b(this, E, x)), this.subtitleTrackController = this.createController(t.subtitleTrackController, S);
    const C = t.subtitleStreamController;
    C && S.push(new C(this, E, x)), this.createController(t.timelineController, k), x.emeController = this.emeController = this.createController(t.emeController, k), this.cmcdController = this.createController(t.cmcdController, k), this.latencyController = this.createController(ia, k), this.coreComponents = k, S.push(l);
    const w = l.onErrorOut;
    typeof w == "function" && this.on(m.ERROR, w, l);
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
      v.error("An internal error happened while handling event " + e + '. Error message: "' + s.message + '". Here is a stacktrace:', s), this.trigger(m.ERROR, {
        type: G.OTHER_ERROR,
        details: I.INTERNAL_EXCEPTION,
        fatal: !1,
        event: e,
        error: s
      });
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
    v.log("destroy"), this.trigger(m.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach((t) => t.destroy()), this.networkControllers.length = 0, this.coreComponents.forEach((t) => t.destroy()), this.coreComponents.length = 0;
    const e = this.config;
    e.xhrSetup = e.fetchSetup = void 0, this.userConfig = null;
  }
  /**
   * Attaches Hls.js to a media element
   */
  attachMedia(e) {
    v.log("attachMedia"), this._media = e, this.trigger(m.MEDIA_ATTACHING, {
      media: e
    });
  }
  /**
   * Detach Hls.js from the media
   */
  detachMedia() {
    v.log("detachMedia"), this.trigger(m.MEDIA_DETACHING, void 0), this._media = null;
  }
  /**
   * Set the source URL. Can be relative or absolute.
   */
  loadSource(e) {
    this.stopLoad();
    const t = this.media, s = this.url, i = this.url = _s.buildAbsoluteURL(self.location.href, e, {
      alwaysNormalize: !0
    });
    v.log(`loadSource:${i}`), t && s && (s !== i || this.bufferController.hasSourceTypes()) && (this.detachMedia(), this.attachMedia(t)), this.trigger(m.MANIFEST_LOADING, {
      url: e
    });
  }
  /**
   * Start loading data from the stream source.
   * Depending on default config, client starts loading automatically when a source is set.
   *
   * @param startPosition - Set the start position to stream from.
   * Defaults to -1 (None: starts from earliest point)
   */
  startLoad(e = -1) {
    v.log(`startLoad(${e})`), this.networkControllers.forEach((t) => {
      t.startLoad(e);
    });
  }
  /**
   * Stop loading of any stream data.
   */
  stopLoad() {
    v.log("stopLoad"), this.networkControllers.forEach((e) => {
      e.stopLoad();
    });
  }
  /**
   * Swap through possible audio codecs in the stream (for example to switch from stereo to 5.1)
   */
  swapAudioCodec() {
    v.log("swapAudioCodec"), this.streamController.swapAudioCodec();
  }
  /**
   * When the media-element fails, this allows to detach and then re-attach it
   * as one call (convenience method).
   *
   * Automatic recovery of media-errors by this process is configurable.
   */
  recoverMediaError() {
    v.log("recoverMediaError");
    const e = this._media;
    this.detachMedia(), e && this.attachMedia(e);
  }
  removeLevel(e, t = 0) {
    this.levelController.removeLevel(e, t);
  }
  /**
   * @returns an array of levels (variants) sorted by HDCP-LEVEL, BANDWIDTH, SCORE, and RESOLUTION (height)
   */
  get levels() {
    const e = this.levelController.levels;
    return e || [];
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
    v.log(`set currentLevel:${e}`), this.loadLevel = e, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch();
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
    v.log(`set nextLevel:${e}`), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch();
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
    v.log(`set loadLevel:${e}`), this.levelController.manualLevel = e;
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
    v.log(`set firstLevel:${e}`), this.levelController.firstLevel = e;
  }
  /**
   * Return start level (level of first fragment that will be played back)
   * if not overrided by user, first level appearing in manifest will be used as start level
   * if -1 : automatic start level selection, playback will start from level matching download bandwidth
   * (determined from download of first segment)
   */
  get startLevel() {
    return this.levelController.startLevel;
  }
  /**
   * set  start level (level of first fragment that will be played back)
   * if not overrided by user, first level appearing in manifest will be used as start level
   * if -1 : automatic start level selection, playback will start from level matching download bandwidth
   * (determined from download of first segment)
   */
  set startLevel(e) {
    v.log(`set startLevel:${e}`), e !== -1 && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e;
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
    this._autoLevelCapping !== e && (v.log(`set autoLevelCapping:${e}`), this._autoLevelCapping = e);
  }
  get maxHdcpLevel() {
    return this._maxHdcpLevel;
  }
  set maxHdcpLevel(e) {
    Ss.indexOf(e) > -1 && (this._maxHdcpLevel = e);
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
    if (t === -1 && e && e.length ? i = e.length - 1 : i = t, s)
      for (let r = i; r--; ) {
        const n = e[r].attrs["HDCP-LEVEL"];
        if (n && n <= s)
          return r;
      }
    return i;
  }
  /**
   * next automatically selected quality level
   */
  get nextAutoLevel() {
    return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel);
  }
  /**
   * this setter is used to force next auto level.
   * this is useful to force a switch down in auto mode:
   * in case of load error on level N, hls.js can set nextAutoLevel to N-1 for example)
   * forced value is valid for one fragment. upon successful frag loading at forced level,
   * this value will be resetted to -1 by ABR controller.
   */
  set nextAutoLevel(e) {
    this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e);
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
}
Me.defaultConfig = void 0;
const Ge = (a, e) => {
  const t = a.__vccOpts || a;
  for (const [s, i] of e)
    t[s] = i;
  return t;
}, Il = {
  name: "d-icon"
}, Rl = /* @__PURE__ */ Object.assign(Il, {
  props: {
    icon: String,
    size: [Number, String]
  },
  setup(a) {
    const e = a, t = je(() => ({ fontSize: /^\d+$/.test(e.size) ? e.size + "px" : e.size }));
    return (s, i) => (z(), j("i", {
      class: Ye(["d-icon iconfont", a.icon]),
      style: qe(t.value)
    }, null, 6));
  }
}), Ce = /* @__PURE__ */ Ge(Rl, [["__scopeId", "data-v-bf21758a"]]);
const bl = { class: "d-player-top" }, Dl = { class: "top-title" }, Cl = { class: "top-title" }, _l = {
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
    let e = $e("00:00:00");
    e.value = (/* @__PURE__ */ new Date()).format("hh:mm:ss");
    let t = null;
    return t = setInterval(() => {
      e.value = (/* @__PURE__ */ new Date()).format("hh:mm:ss");
    }, 1e3), Hi(() => {
      clearInterval(t);
    }), (s, i) => (z(), j("div", bl, [
      P("p", Dl, re(a.title || ""), 1),
      P("p", Cl, re(He(e)), 1)
    ]));
  }
}, kl = /* @__PURE__ */ Ge(_l, [["__scopeId", "data-v-8a83c3bf"]]), wl = { class: "d-status" }, Pl = { class: "d-flex-center" }, Fl = { class: "d-flex-center" }, Ol = /* @__PURE__ */ gt({
  __name: "d-status",
  props: ["state"],
  setup(a) {
    return (e, t) => Te((z(), j("div", wl, [
      Te(P("li", Pl, [
        te(Ce, {
          size: "18",
          class: "d-status-icon",
          icon: `icon-volume-${a.state.volume == 0 ? "mute" : a.state.volume > 0.5 ? "up" : "down"}`
        }, null, 8, ["icon"]),
        ke(" " + re(~~(a.state.volume * 100)) + "% ", 1)
      ], 512), [
        [xe, a.state.handleType == "volume"]
      ]),
      Te(P("li", Fl, [
        te(Ce, {
          size: "12",
          icon: "icon-play"
        }),
        te(Ce, {
          size: "12",
          icon: "icon-play",
          style: { "margin-right": "5px" }
        }),
        ke("5倍速播放中 ")
      ], 512), [
        [xe, a.state.handleType == "playbackRate" || a.state.isMultiplesPlay]
      ])
    ], 512)), [
      [xe, a.state.handleType || a.state.isMultiplesPlay]
    ]);
  }
});
const Ml = /* @__PURE__ */ Ge(Ol, [["__scopeId", "data-v-b4f9cb00"]]), Nl = (a) => (Nt("data-v-928a6686"), a = a(), Ut(), a), Ul = ["checked", "true-value", "false-value"], Bl = /* @__PURE__ */ Nl(() => /* @__PURE__ */ P("span", { class: "d-switch_action" }, null, -1)), $l = /* @__PURE__ */ gt({
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
    Cs((o) => ({
      "3c9c80d0": a.width,
      "4d5b9787": a.activeColor
    }));
    const t = a, s = e, i = $e(null), r = je(() => t.modelValue === t.trueValue), n = () => {
      Wi(() => {
        const o = i.value.checked;
        s("update:modelValue", o), s("change", o);
      });
    };
    return (o, l) => (z(), j("div", {
      class: Ye(["d-switch", { "is-checked": r.value }])
    }, [
      P("input", {
        class: "d-switch__input",
        ref_key: "input",
        ref: i,
        type: "checkbox",
        checked: r.value,
        onChange: n,
        "true-value": a.trueValue,
        "false-value": a.falseValue
      }, null, 40, Ul),
      Bl
    ], 2));
  }
});
const gs = /* @__PURE__ */ Ge($l, [["__scopeId", "data-v-928a6686"]]), mt = (a) => (Nt("data-v-462eb232"), a = a(), Ut(), a), Gl = { key: 0 }, Vl = /* @__PURE__ */ mt(() => /* @__PURE__ */ P("i", { class: "rotating iconfont icon-loading f50" }, null, -1)), Kl = /* @__PURE__ */ mt(() => /* @__PURE__ */ P("i", { class: "rotating iconfont icon-loading f50" }, null, -1)), Hl = /* @__PURE__ */ mt(() => /* @__PURE__ */ P("p", null, "正在缓冲...", -1)), Wl = [
  Kl,
  Hl
], Yl = /* @__PURE__ */ mt(() => /* @__PURE__ */ P("i", { class: "iconfont icon-replay f24 mr5" }, null, -1)), ql = /* @__PURE__ */ mt(() => /* @__PURE__ */ P("i", { class: "iconfont icon-replay f24 mr5" }, null, -1)), zl = /* @__PURE__ */ gt({
  __name: "d-loading",
  props: {
    loadType: String,
    text: {
      type: String,
      default: ""
    }
  },
  setup(a) {
    const { proxy: e } = Yr(), t = ["loadstart", "waiting", "ended", "error", "stalled"], s = a, i = () => {
      e.$parent.play();
    }, r = je(() => {
      let n = "background: rgba(0, 0, 0, .1);z-index:1";
      return s.loadType == "loadstart" && (n = "background: rgba(0, 0, 0, 1);;z-index:3"), n;
    });
    return (n, o) => Te((z(), j("div", {
      class: "d-loading",
      style: qe(r.value)
    }, [
      P("div", null, [
        a.loadType == "loadstart" ? (z(), j("span", Gl, [
          Vl,
          P("p", null, re(a.text), 1)
        ])) : ue("", !0),
        Te(P("span", null, Wl, 512), [
          [xe, a.loadType == "waiting"]
        ]),
        Te(P("span", null, [
          P("p", {
            onClick: i,
            class: "d-flex-x d-pointer"
          }, [
            Yl,
            ke("重新播放 ")
          ])
        ], 512), [
          [xe, a.loadType == "ended"]
        ]),
        Te(P("span", null, [
          P("p", {
            onClick: i,
            class: "d-flex-x d-pointer"
          }, [
            ql,
            ke("请求错误 ")
          ])
        ], 512), [
          [xe, a.loadType == "error" || a.loadType == "stalled"]
        ])
      ])
    ], 4)), [
      [xe, t.includes(a.loadType)]
    ]);
  }
});
const jl = /* @__PURE__ */ Ge(zl, [["__scopeId", "data-v-462eb232"]]), ze = function(a, e, t, s = !1) {
  a && e && t && a.addEventListener(e, t, s);
}, ye = function(a, e, t, s = !1) {
  a && e && t && a.removeEventListener(e, t, s);
}, Xl = {
  name: "DSlider"
}, Ql = /* @__PURE__ */ gt({
  ...Xl,
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
    Cs((T) => ({
      "08657e23": a.size
    }));
    const t = $e(null), s = $e(null), i = a, r = e, n = Dt({
      dragging: !1,
      //拖拽状态
      hoverPosition: 0,
      //鼠标位置
      hoverTipsLeft: "50%"
      //提示偏移位置
    }), o = je(() => {
      let T = i.modelValue < 0 ? 0 : i.modelValue > 1 ? 1 : i.modelValue;
      return i.vertical ? `height:${T * 100}%` : `width:${T * 100}%`;
    }), l = je(() => {
      let T = i.preload < 0 ? 0 : i.preload > 1 ? 1 : i.preload;
      return i.vertical ? `height:${T * 100}%` : `width:${T * 100}%`;
    }), c = je(() => {
      let T = n.hoverPosition < 0 ? 0 : n.hoverPosition > 1 ? 1 : n.hoverPosition;
      return i.vertical ? `bottom:${T * 100}%` : `left:${T * 100}%`;
    }), d = (T) => {
      T.preventDefault();
    }, u = (T) => {
      i.disabled || (T.preventDefault(), n.dragging = !0, f(T), ze(window, "mousemove", p), ze(window, "touchmove", p), ze(window, "mouseup", y), ze(window, "touchend", y));
    }, h = (T) => {
      if (!i.hover)
        return;
      let E = g(T);
      if (r("onMousemove", T, E), n.hoverPosition = E, i.vertical)
        return;
      let x = t.value, A = s.value.clientWidth / 2, S = T.clientX - x.getBoundingClientRect().left;
      S < A ? n.hoverTipsLeft = A - S + "px" : x.clientWidth - S < A ? n.hoverTipsLeft = x.clientWidth - S - A + "px" : n.hoverTipsLeft = "50%";
    }, f = (T) => {
      let E = g(T);
      r("update:modelValue", E), r("change", T, E);
    }, g = (T) => {
      let E = t.value, x = 0;
      if (i.vertical) {
        let A = E.clientHeight;
        x = (E.getBoundingClientRect().bottom - T.clientY) / A;
      } else
        x = (T.clientX - E.getBoundingClientRect().left) / E.clientWidth;
      return x < 0 ? 0 : x > 1 ? 1 : x;
    }, p = (T) => {
      f(T);
    }, y = (T) => {
      n.dragging && (ye(window, "mousemove", p), ye(window, "touchmove", p), ye(window, "mouseup", y), ye(window, "touchend", y), ye(window, "contextmenu", y), setTimeout(() => {
        n.dragging = !1;
      }, 0));
    };
    return (T, E) => (z(), j("div", {
      ref_key: "refSlider",
      ref: t,
      class: Ye(["d-slider", { "is-vertical": i.vertical }]),
      onMousedown: qr(u, ["stop"]),
      onContextmenu: d
    }, [
      P("div", {
        class: "d-slider__runway",
        onMousemove: h
      }, [
        Te(P("div", {
          class: "d-slider__cursor",
          style: qe(c.value)
        }, [
          Te(P("div", {
            class: "d-slider__tips",
            ref_key: "refTips",
            ref: s,
            style: qe({ left: n.hoverTipsLeft })
          }, re(i.hoverText), 5), [
            [xe, i.hoverText]
          ])
        ], 4), [
          [xe, i.hover]
        ]),
        P("div", {
          class: "d-slider__preload",
          style: qe(l.value)
        }, null, 4),
        P("div", {
          class: "d-slider__bar",
          style: qe(o.value)
        }, null, 4)
      ], 32)
    ], 34));
  }
});
const dt = /* @__PURE__ */ Ge(Ql, [["__scopeId", "data-v-107d6688"]]), Vi = "1.3.2";
const Vt = (a) => (Nt("data-v-9b1f1320"), a = a(), Ut(), a), Jl = {
  key: 0,
  class: "d-player-dialog"
}, Zl = { class: "d-player-dialog-body" }, ec = { class: "d-player-dialog-title" }, tc = { class: "d-player-hotkey-panel" }, sc = { class: "d-player-filter-panel" }, ic = { class: "d-player-filter-panel-item" }, rc = /* @__PURE__ */ Vt(() => /* @__PURE__ */ P("span", null, "饱和度", -1)), nc = { class: "d-player-filter-panel-item" }, ac = /* @__PURE__ */ Vt(() => /* @__PURE__ */ P("span", null, "亮度", -1)), oc = { class: "d-player-filter-panel-item" }, lc = /* @__PURE__ */ Vt(() => /* @__PURE__ */ P("span", null, "对比度", -1)), cc = {
  key: 0,
  class: "d-player-contextmenu"
}, dc = ["dplayerKeyCode"], uc = /* @__PURE__ */ Vt(() => /* @__PURE__ */ P("input", { class: "d-player-copyText" }, null, -1)), hc = {
  __name: "d-contextmenu",
  setup(a) {
    const e = Dt({
      show: !1,
      dialogType: "",
      dialogTitle: "",
      version: Vi,
      mouseX: 0,
      mouseY: 0
    }), t = [
      { label: "视频色彩调整", key: "filter" },
      { label: "快捷键说明", key: "hotkey" },
      { label: "复制视频网址", key: "copy" },
      { label: "版本：" + Vi, key: "version" }
    ], s = [
      { key: "Space", label: "播放/暂停" },
      { key: "→", label: "单次快进10s，长按5倍速播放" },
      { key: "←", label: "快退5s" },
      { key: "↑", label: "音量增加10%" },
      { key: "↓", label: "音量增加降低10%" },
      { key: "Esc", label: "退出全屏/退出网页全屏" },
      { key: "F", label: "全屏/退出全屏" }
    ], i = Dt({
      saturate: 0.392,
      brightness: 0.392,
      contrast: 0.392
    }), r = je(() => ({
      left: e.mouseX + "px",
      top: e.mouseY + "px"
    }));
    Yi(i, (d) => {
      let u = document.querySelector("#dPlayerVideo"), h = (d.saturate * 2.55).toFixed(2), f = (d.brightness * 2.55).toFixed(2), g = (d.contrast * 2.55).toFixed(2);
      u.style.filter = `saturate(${h}) brightness(${f}) contrast(${g})`;
    });
    const n = () => {
      i.saturate = 0.392, i.brightness = 0.392, i.contrast = 0.392;
    }, o = (d) => {
      d.key == "Escape" && c(0);
    }, l = (d) => {
      d.preventDefault(), ze(window, "keydown", o), ze(window, "click", c);
      let u = document.querySelector("#refPlayerWrap"), h = u.clientWidth;
      u.clientHeight, e.mouseX = d.clientX - u.getBoundingClientRect().left, h - e.mouseX < 130 && (e.mouseX = e.mouseX + (h - e.mouseX - 130)), e.mouseY = d.clientY - u.getBoundingClientRect().top, e.show = !0;
    }, c = (d) => {
      let u = d.target.nodeName == "LI", h = d.target.attributes.dplayerKeyCode && d.target.attributes.dplayerKeyCode.value, f = t.map((g) => g.key);
      if (u && f.includes(h))
        if (e.dialogTitle = d.target.innerText, e.dialogType = h, h == "copy") {
          let g = document.querySelector(".d-player-copyText");
          g.value = window.location.href, g.select(), document.execCommand("copy"), e.dialogType = "";
        } else
          h == "version" && (e.dialogType = "");
      e.show = !1, ye(window, "keydown", o), ye(window, "click", c);
    };
    return qi(() => {
      let d = document.querySelector("#refPlayerWrap");
      ye(window, "keydown", o), ye(window, "click", c), ye(d, "contextmenu", l), ze(d, "contextmenu", l);
    }), Hi(() => {
      let d = document.querySelector("#refPlayerWrap");
      ye(window, "keydown", o), ye(window, "click", c), ye(d, "contextmenu", l);
    }), (d, u) => (z(), j("div", null, [
      te(ps, { name: "d-fade-in" }, {
        default: ys(() => [
          e.dialogType ? (z(), j("div", Jl, [
            P("div", Zl, [
              P("h5", ec, [
                ke(re(e.dialogTitle) + " ", 1),
                P("i", {
                  onClick: u[0] || (u[0] = (h) => e.dialogType = !1),
                  class: "icon icon-close"
                }, "X")
              ]),
              Te(P("ul", tc, [
                (z(), j(Ct, null, _t(s, (h) => P("li", {
                  class: "d-player-hotkey-panel-item",
                  key: h.key
                }, [
                  P("span", null, re(h.key), 1),
                  P("span", null, re(h.label), 1)
                ])), 64))
              ], 512), [
                [xe, e.dialogType == "hotkey"]
              ]),
              Te(P("ul", sc, [
                P("li", ic, [
                  rc,
                  te(dt, {
                    class: "filter-panel-slider",
                    size: "5px",
                    modelValue: i.saturate,
                    "onUpdate:modelValue": u[1] || (u[1] = (h) => i.saturate = h)
                  }, null, 8, ["modelValue"]),
                  P("span", null, re(Math.round(i.saturate * 255)), 1)
                ]),
                P("li", nc, [
                  ac,
                  te(dt, {
                    class: "filter-panel-slider",
                    size: "5px",
                    modelValue: i.brightness,
                    "onUpdate:modelValue": u[2] || (u[2] = (h) => i.brightness = h)
                  }, null, 8, ["modelValue"]),
                  P("span", null, re(Math.round(i.brightness * 255)), 1)
                ]),
                P("li", oc, [
                  lc,
                  te(dt, {
                    class: "filter-panel-slider",
                    size: "5px",
                    modelValue: i.contrast,
                    "onUpdate:modelValue": u[3] || (u[3] = (h) => i.contrast = h)
                  }, null, 8, ["modelValue"]),
                  P("span", null, re(Math.round(i.contrast * 255)), 1)
                ]),
                P("span", {
                  onClick: n,
                  title: "重置",
                  "aria-label": "重置",
                  class: "d-player-filter-reset"
                }, "重置")
              ], 512), [
                [xe, e.dialogType == "filter"]
              ])
            ])
          ])) : ue("", !0)
        ]),
        _: 1
      }),
      e.show ? (z(), j("div", cc, [
        P("ul", {
          class: "d-player-contextmenu-body",
          style: qe(r.value)
        }, [
          (z(), j(Ct, null, _t(t, (h) => P("li", {
            dplayerKeyCode: h.key,
            key: h.key
          }, re(h.label), 9, dc)), 64))
        ], 4),
        uc
      ])) : ue("", !0)
    ]));
  }
}, fc = /* @__PURE__ */ Ge(hc, [["__scopeId", "data-v-9b1f1320"]]), gc = (a) => `${parseInt("0x" + a.slice(1, 3))},${parseInt(
  "0x" + a.slice(3, 5)
)},${parseInt("0x" + a.slice(5, 7))}`, mc = (a) => a.charAt(0).toUpperCase() + a.slice(1), ms = (a) => {
  let e = ~~(a / 3600), t = ~~(a % 3600 / 60), s = ~~(a % 60);
  return e = e < 10 ? "0" + e : e, t = t < 10 ? "0" + t : t, s = s < 10 ? "0" + s : s, `${e}:${t}:${s}`;
}, ot = "ontouchstart" in window, pc = (a) => {
  let e = document, t = e.webkitIsFullScreen || e.fullscreen;
  return t ? (document.exitFullscreen || e.webkitExitFullScreen).call(e) : (a.requestFullscreen || a.webkitRequestFullScreen).call(a), !t;
}, yc = (a) => {
  document.pictureInPictureElement ? document.exitPictureInPicture().catch((e) => {
    console.log(e, "Video failed to leave Picture-in-Picture mode.");
  }) : a.requestPictureInPicture().catch((e) => {
    console.log(e, "Video failed to enter Picture-in-Picture mode.");
  });
}, Ki = [
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
], Tc = {
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
  preload: { type: String, default: "auto" }
  //预加载
}, Kt = (a) => (Nt("data-v-6c5f4bcc"), a = a(), Ut(), a), xc = {
  class: "d-player-video",
  id: "dPlayerVideo"
}, Ec = ["controls", "webkit-playsinline", "playsinline", "volume", "muted", "loop", "preload", "src", "poster"], vc = { class: "d-player-lightoff" }, Sc = {
  key: 1,
  class: "d-player-state"
}, Lc = { class: "d-play-btn" }, Ac = { class: "d-control-progress" }, Ic = { class: "d-tool-bar" }, Rc = {
  key: 0,
  class: "d-tool-item d-tool-time audioTrack-btn"
}, bc = /* @__PURE__ */ Kt(() => /* @__PURE__ */ P("span", { style: { margin: "0 3px" } }, "/", -1)), Dc = { class: "total-time" }, Cc = { class: "d-tool-bar" }, _c = {
  key: 0,
  class: "d-tool-item quality-btn"
}, kc = { class: "d-tool-item-main" }, wc = {
  class: "speed-main",
  style: { "text-align": "center" }
}, Pc = ["onClick"], Fc = {
  key: 1,
  class: "d-tool-item speedRate-btn"
}, Oc = { class: "d-tool-item-main" }, Mc = { class: "speed-main" }, Nc = ["onClick"], Uc = {
  key: 2,
  class: "d-tool-item volume-btn"
}, Bc = {
  class: "d-tool-item-main volume-box",
  style: { width: "52px" }
}, $c = { class: "volume-text-size" }, Gc = {
  key: 3,
  class: "d-tool-item setting-btn"
}, Vc = { class: "d-tool-item-main" }, Kc = { class: "speed-main" }, Hc = /* @__PURE__ */ Kt(() => /* @__PURE__ */ P("div", { class: "d-tool-item-main" }, "画中画", -1)), Wc = /* @__PURE__ */ Kt(() => /* @__PURE__ */ P("div", { class: "d-tool-item-main" }, "网页全屏", -1)), Yc = /* @__PURE__ */ Kt(() => /* @__PURE__ */ P("div", { class: "d-tool-item-main" }, "全屏", -1)), qc = {
  name: "Vue3VideoPlay",
  inheritAttrs: !1
}, zc = /* @__PURE__ */ gt({
  ...qc,
  props: Tc,
  emits: [
    ...Ki,
    "mirrorChange",
    "loopChange",
    "lightOffChange",
    "mounted"
  ],
  setup(a, { expose: e, emit: t }) {
    Cs((_) => ({
      "75b751bb": He(g),
      "5b13dbf8": _.width,
      "627d34a9": _.height
    }));
    const s = new Me({ fragLoadingTimeOut: 2e3 }), i = a, r = t, n = $e(null), o = $e(null), l = $e(null), c = $e(null), d = Dt({
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
    }), u = (..._) => (F) => _.reverse().reduce((N, q) => q(N), F), h = Ki.reduce((_, F) => {
      let N = `on${mc(F)}`;
      return _[N] = (q) => {
        d.loadStateType = F, r(F, q);
      }, _;
    }, {});
    h.onCanplay = u(h.onCanplay, () => {
      d.playBtnState != "play" && d.dVideo.play(), d.autoPlay && (d.dVideo.play(), d.playBtnState = "pause");
    }), h.onEnded = u(h.onEnded, () => {
      d.playBtnState = "replay";
    }), h.onDurationchange = (_) => {
      r("durationchange", _), i.currentTime != 0 && (d.dVideo.currentTime = i.currentTime), h.onTimeupdate(_);
    }, h.onProgress = (_) => {
      console.log("缓冲中..."), r("progress", _);
      let F = _.target.duration, N = _.target.buffered, q = _.target.buffered.length && _.target.buffered.end(N - 1);
      d.preloadBar = q / F;
    }, h.onTimeupdate = (_) => {
      r("timeupdate", _);
      let F = _.duration || _.target.duration || 0, N = _.currentTime || _.target.currentTime;
      d.playProgress = N / F, d.currentTime = ms(N), d.totalTime = ms(F);
    }, h.onError = u(h.onError, () => {
      d.playBtnState = "replay";
    });
    let f = zr();
    for (let _ in f)
      h[_] = f[_];
    const g = gc(d.color), p = Ys(500, () => {
      d.handleType = "";
    }), y = (_) => {
      _.preventDefault(), _.code == "ArrowUp" ? d.volume = d.volume + 0.1 > 1 ? 1 : d.volume + 0.1 : d.volume = d.volume - 0.1 < 0 ? 0 : d.volume - 0.1, d.muted = !1, d.handleType = "volume", p();
    }, T = (_) => {
      i.speed && (d.dVideo.currentTime = d.dVideo.currentTime < 10 ? 0.1 : d.dVideo.currentTime - 10, h.onTimeupdate(d.dVideo), A());
    }, E = (_) => {
      _.preventDefault();
      let F = _.type;
      if (_.key == "ArrowRight") {
        if (A(), F == "keyup") {
          if (clearTimeout(d.longPressTimeout), !i.speed && !d.longPressTimeout)
            return;
          d.isMultiplesPlay ? (d.dVideo.playbackRate = d.speedActive, d.isMultiplesPlay = !1) : (d.dVideo.currentTime = d.dVideo.currentTime + 10, h.onTimeupdate(d.dVideo));
        } else if (F == "keydown") {
          if (!i.speed)
            return;
          d.isMultiplesPlay && clearTimeout(d.longPressTimeout), d.longPressTimeout = setTimeout(() => {
            d.isMultiplesPlay = !0, d.dVideo.playbackRate = 5, d.handleType = "playbackRate", p();
          }, 500);
        }
      }
    }, x = () => {
      ot || c.value.focus();
    }, A = () => {
      d.loadStateType = "play", d.dVideo.play().catch(() => {
        d.dVideo.load(), setTimeout(() => {
          d.dVideo.play().catch(() => {
            d.playBtnState = "replay", d.loadStateType = "error";
          });
        }, 200);
      }), d.playBtnState = "pause";
    }, S = () => {
      d.dVideo.pause(), d.playBtnState = "play";
    }, k = (_) => {
      _ && _.preventDefault(), d.playBtnState == "play" || d.playBtnState == "replay" ? A() : d.playBtnState == "pause" && S();
    }, b = () => {
      d.muted = !d.muted, d.volume == 0 && (d.volume = 0.05);
    }, C = (_, F) => {
      let N = d.dVideo.duration || d.dVideo.target.duration;
      d.dVideo.currentTime = N * F, d.playBtnState == "play" && (d.dVideo.play(), d.playBtnState = "pause");
    }, w = (_, F) => {
      d.progressCursorTime = ms(d.dVideo.duration * F);
    }, R = Ys(2500, () => {
      d.isVideoHovering = !1;
    }), B = (_) => {
      d.isVideoHovering = !0, R();
    }, O = (_, F) => {
      s.currentLevel = F, d.currentLevel = F;
    }, Y = (_) => {
      d.speedActive = _, d.dVideo.playbackRate = _;
    }, oe = (_) => {
      r("mirrorChange", _, d.dVideo);
    }, Q = (_) => {
      r("loopChange", _, d.dVideo);
    }, Z = (_) => {
      r("lightOffChange", _, d.dVideo);
    }, J = () => {
      yc(d.dVideo);
    }, M = () => {
      d.fullScreen = pc(n.value);
    }, $ = () => {
      d.dVideo.canPlayType(i.type) || console.error(
        "vue3-video-play: Format not supported,Check the [type] parameter"
      ), d.dVideo.canPlayType(i.type) || d.dVideo.canPlayType("application/vnd.apple.mpegurl") ? d.muted = i.autoPlay : Me.isSupported() && (s.detachMedia(), s.attachMedia(d.dVideo), s.on(Me.Events.MEDIA_ATTACHED, () => {
        s.loadSource(i.src), s.on("hlsManifestParsed", (_, F) => {
          console.log(F), d.currentLevel = F.level, d.qualityLevels = F.levels || [];
        });
      }), s.on("hlsLevelSwitching", (_, F) => {
        console.log(F), console.log("LEVEL_SWITCHING");
      }), s.on("hlsLevelSwitched", (_, F) => {
        d.currentLevel = F.level, console.log("LEVEL_SWITCHED");
      }));
    };
    return Yi(
      () => i.src,
      () => {
        Wi(() => {
          $();
        });
      },
      { immediate: !0 }
    ), qi(() => {
      d.dVideo = o, x(), r("mounted", d.dVideo);
    }), e({
      video: d.dVideo,
      play: A,
      //播放
      pause: S,
      //暂停
      togglePlay: k
      //暂停或播放
    }), (_, F) => (z(), j("div", {
      ref_key: "refPlayerWrap",
      ref: n,
      id: "refPlayerWrap",
      class: Ye(["d-player-wrap", {
        "web-full-screen": d.webFullScreen,
        "is-lightoff": d.lightOff,
        "d-player-wrap-hover": d.playBtnState == "play" || d.isVideoHovering
      }]),
      onMousemove: B
    }, [
      P("div", xc, [
        P("video", jr({
          ref_key: "refdVideo",
          ref: o,
          class: ["d-player-video-main", { "video-mirror": d.mirror }],
          id: "dPlayerVideoMain",
          controls: !!(He(ot) && d.speed),
          "webkit-playsinline": i.playsinline,
          playsinline: i.playsinline
        }, He(h), {
          volume: d.volume,
          muted: d.muted,
          loop: d.loop,
          preload: _.preload,
          width: "100%",
          height: "100%",
          src: i.src,
          poster: i.poster
        }), " 您的浏览器不支持Video标签。 ", 16, Ec)
      ]),
      te(ps, { name: "d-fade-in" }, {
        default: ys(() => [
          Te(P("div", vc, null, 512), [
            [xe, d.lightOff]
          ])
        ]),
        _: 1
      }),
      d.fullScreen ? (z(), Xr(kl, {
        key: 0,
        title: i.title
      }, null, 8, ["title"])) : ue("", !0),
      He(ot) ? ue("", !0) : (z(), j("div", Sc, [
        te(ps, { name: "d-scale-out" }, {
          default: ys(() => [
            Te(P("div", Lc, [
              te(Ce, {
                icon: "icon-play",
                size: 40
              })
            ], 512), [
              [xe, d.playBtnState == "play"]
            ])
          ]),
          _: 1
        }),
        te(Ml, { state: d }, null, 8, ["state"])
      ])),
      He(ot) ? ue("", !0) : (z(), j("input", {
        key: 2,
        type: "input",
        readonly: "readonly",
        ref_key: "refInput",
        ref: c,
        onDblclick: M,
        onKeyup: [
          rt(M, ["f"]),
          F[0] || (F[0] = rt((N) => d.webFullScreen = !1, ["esc"])),
          E
        ],
        onClick: k,
        onKeydown: [
          rt(k, ["space"]),
          rt(T, ["arrow-left"]),
          rt(y, ["arrow-up", "arrow-down"]),
          E
        ],
        class: "d-player-input",
        maxlength: "0"
      }, null, 544)),
      te(jl, {
        loadType: d.loadStateType
      }, null, 8, ["loadType"]),
      te(fc),
      pt(_.$slots, "default", {}, void 0, !0),
      !He(ot) && d.control ? (z(), j("div", {
        key: 3,
        class: "d-player-control",
        ref_key: "refPlayerControl",
        ref: l
      }, [
        P("div", Ac, [
          te(dt, {
            class: "d-progress-bar",
            onOnMousemove: w,
            onChange: C,
            disabled: !d.speed,
            hoverText: d.progressCursorTime,
            modelValue: d.playProgress,
            "onUpdate:modelValue": F[1] || (F[1] = (N) => d.playProgress = N),
            preload: d.preloadBar
          }, null, 8, ["disabled", "hoverText", "modelValue", "preload"])
        ]),
        P("div", {
          class: "d-control-tool",
          onClick: x
        }, [
          P("div", Ic, [
            P("div", {
              class: "d-tool-item",
              onClick: k
            }, [
              te(Ce, {
                size: "24",
                icon: `icon-${d.playBtnState}`
              }, null, 8, ["icon"])
            ]),
            i.controlBtns.includes("audioTrack") ? (z(), j("div", Rc, [
              P("span", null, re(d.currentTime), 1),
              bc,
              P("span", Dc, re(d.totalTime), 1)
            ])) : ue("", !0)
          ]),
          P("div", Cc, [
            pt(_.$slots, "tool-bar-start", {}, void 0, !0),
            d.qualityLevels.length && i.controlBtns.includes("quality") ? (z(), j("div", _c, [
              ke(re(d.qualityLevels.length && (d.qualityLevels[d.currentLevel] || {}).height) + "P ", 1),
              P("div", kc, [
                P("ul", wc, [
                  (z(!0), j(Ct, null, _t(d.qualityLevels, (N, q) => (z(), j("li", {
                    class: Ye({ "speed-active": d.currentLevel == q }),
                    onClick: (pe) => O(N, q),
                    key: N
                  }, re(N.height) + "P ", 11, Pc))), 128))
                ])
              ])
            ])) : ue("", !0),
            i.controlBtns.includes("speedRate") ? (z(), j("div", Fc, [
              ke(re(d.speedActive == "1.0" ? "倍速" : d.speedActive + "x") + " ", 1),
              P("div", Oc, [
                P("ul", Mc, [
                  (z(!0), j(Ct, null, _t(d.speedRate, (N) => (z(), j("li", {
                    class: Ye({ "speed-active": d.speedActive == N }),
                    onClick: (q) => Y(N),
                    key: N
                  }, re(N) + "x ", 11, Nc))), 128))
                ])
              ])
            ])) : ue("", !0),
            i.controlBtns.includes("volume") ? (z(), j("div", Uc, [
              P("div", Bc, [
                P("div", {
                  class: Ye(["volume-main", { "is-muted": d.muted }])
                }, [
                  P("span", $c, re(d.muted ? 0 : ~~(d.volume * 100)) + "%", 1),
                  te(dt, {
                    onChange: F[2] || (F[2] = (N) => d.muted = !1),
                    hover: !1,
                    size: "5px",
                    vertical: !0,
                    modelValue: d.volume,
                    "onUpdate:modelValue": F[3] || (F[3] = (N) => d.volume = N)
                  }, null, 8, ["modelValue"])
                ], 2)
              ]),
              P("span", {
                onClick: b,
                style: { display: "flex" }
              }, [
                te(Ce, {
                  size: "20",
                  icon: `icon-volume-${d.volume == 0 || d.muted ? "mute" : d.volume > 0.5 ? "up" : "down"}`
                }, null, 8, ["icon"])
              ])
            ])) : ue("", !0),
            i.controlBtns.includes("setting") ? (z(), j("div", Gc, [
              te(Ce, {
                size: "20",
                class: "rotateHover",
                icon: "icon-settings"
              }),
              P("div", Vc, [
                P("ul", Kc, [
                  P("li", null, [
                    ke(" 镜像画面 "),
                    te(gs, {
                      onChange: oe,
                      modelValue: d.mirror,
                      "onUpdate:modelValue": F[4] || (F[4] = (N) => d.mirror = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  P("li", null, [
                    ke(" 循环播放 "),
                    te(gs, {
                      onChange: Q,
                      modelValue: d.loop,
                      "onUpdate:modelValue": F[5] || (F[5] = (N) => d.loop = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  P("li", null, [
                    ke(" 关灯模式 "),
                    te(gs, {
                      onChange: Z,
                      modelValue: d.lightOff,
                      "onUpdate:modelValue": F[6] || (F[6] = (N) => d.lightOff = N)
                    }, null, 8, ["modelValue"])
                  ]),
                  pt(_.$slots, "setting-items", {}, void 0, !0)
                ])
              ])
            ])) : ue("", !0),
            i.controlBtns.includes("pip") ? (z(), j("div", {
              key: 4,
              class: "d-tool-item pip-btn",
              onClick: J
            }, [
              te(Ce, {
                size: "20",
                icon: "icon-pip"
              }),
              Hc
            ])) : ue("", !0),
            i.controlBtns.includes("pageFullScreen") ? (z(), j("div", {
              key: 5,
              class: "d-tool-item pip-btn",
              onClick: F[7] || (F[7] = (N) => d.webFullScreen = !d.webFullScreen)
            }, [
              te(Ce, {
                size: "20",
                icon: "icon-web-screen"
              }),
              Wc
            ])) : ue("", !0),
            i.controlBtns.includes("fullScreen") ? (z(), j("div", {
              key: 6,
              class: "d-tool-item fullScreen-btn",
              onClick: M
            }, [
              Yc,
              te(Ce, {
                size: "20",
                icon: "icon-screen"
              })
            ])) : ue("", !0),
            pt(_.$slots, "tool-bar-end", {}, void 0, !0)
          ])
        ])
      ], 512)) : ue("", !0)
    ], 34));
  }
});
const Ds = /* @__PURE__ */ Ge(zc, [["__scopeId", "data-v-6c5f4bcc"]]);
function jc(a) {
  a.component(Ds.name, Ds);
}
Ds.install = jc;
export {
  fc as DContextMenu,
  Ce as DICon,
  jl as DLoading,
  kl as DPlayerTop,
  dt as DSlider,
  Ml as DStatus,
  gs as DSwitch,
  Ds as VideoPlay,
  Ds as default,
  jc as install
};
