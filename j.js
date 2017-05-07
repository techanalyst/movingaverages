(function (e, a) {
    var t = {
        "cdn_url": "https://f.vimeocdn.com",
        "view": 1,
        "request": {
            "files": {
                "dash": {
                    "separate_av": true,
                    "streams": [{"profile": 164, "quality": "360p", "id": 717245661, "fps": 26}, {
                        "profile": 119,
                        "quality": "1080p",
                        "id": 717245664,
                        "fps": 26
                    }, {"profile": 174, "quality": "720p", "id": 717245662, "fps": 26}, {
                        "profile": 165,
                        "quality": "540p",
                        "id": 717245651,
                        "fps": 26
                    }],
                    "cdns": {
                        "akfire_interconnect": {
                            "url": "https://126skyfiregce-a.akamaihd.net/exp=1490829441~acl=%2F209558125%2F%2A~hmac=7f4755b3e9552f5fda883aadf866d06208672b0f695758f32e69b09903a8d721/209558125/sep/video/717245661,717245664,717245662,717245651/master.json?base64_init=1",
                            "origin": "gcs"
                        },
                        "fastly_skyfire": {
                            "url": "https://skyfire.vimeocdn.com/1490829441-0x53108f48c63c1bebf86fe1ed4ddfca5e7738f6e1/209558125/sep/video/717245661,717245664,717245662,717245651/master.json?base64_init=1",
                            "origin": "gcs"
                        }
                    },
                    "default_cdn": "akfire_interconnect"
                },
                "hls": {
                    "separate_av": false,
                    "default_cdn": "akfire_interconnect",
                    "cdns": {
                        "akfire_interconnect": {
                            "url": "https://126skyfiregce-a.akamaihd.net/exp=1490829441~acl=%2F209558125%2F%2A~hmac=7f4755b3e9552f5fda883aadf866d06208672b0f695758f32e69b09903a8d721/209558125/video/717245661,717245664,717245662,717245651/master.m3u8",
                            "origin": "gcs"
                        },
                        "fastly_skyfire": {
                            "url": "https://skyfire.vimeocdn.com/1490829441-0x53108f48c63c1bebf86fe1ed4ddfca5e7738f6e1/209558125/video/717245661,717245664,717245662,717245651/master.m3u8",
                            "origin": "gcs"
                        }
                    }
                },
                "progressive": [{
                    "profile": 119,
                    "width": 1920,
                    "mime": "video/mp4",
                    "fps": 26,
                    "url": "https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/1911/8/209558125/717245664.mp4?token=58dc4081_0xd2968f09d70261f2bf6f937e2ca8097cf80930d6",
                    "cdn": "fastly",
                    "quality": "1080p",
                    "id": 717245664,
                    "origin": "gcs",
                    "height": 1080
                }, {
                    "profile": 174,
                    "width": 1280,
                    "mime": "video/mp4",
                    "fps": 26,
                    "url": "https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/1911/8/209558125/717245662.mp4?token=58dc4081_0xda9ba65bbef88aa48595c96b836860b26561527f",
                    "cdn": "fastly",
                    "quality": "720p",
                    "id": 717245662,
                    "origin": "gcs",
                    "height": 720
                }, {
                    "profile": 164,
                    "width": 640,
                    "mime": "video/mp4",
                    "fps": 26,
                    "url": "https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/1911/8/209558125/717245661.mp4?token=58dc4081_0xfdb74abe208b4908f1e8664f7f120be40e88a61c",
                    "cdn": "fastly",
                    "quality": "360p",
                    "id": 717245661,
                    "origin": "gcs",
                    "height": 360
                }, {
                    "profile": 165,
                    "width": 960,
                    "mime": "video/mp4",
                    "fps": 26,
                    "url": "https://fpdl.vimeocdn.com/vimeo-prod-skyfire-std-us/01/1911/8/209558125/717245651.mp4?token=58dc4081_0x5ab65b3e7ab01b31e2f7ebc86c157404af44039f",
                    "cdn": "fastly",
                    "quality": "540p",
                    "id": 717245651,
                    "origin": "gcs",
                    "height": 540
                }]
            },
            "lang": "en",
            "ga_account": "UA-76641-35",
            "sentry": {
                "url": "https://9e9ab33f1870463393a4a1e85a1280c2@sentry.cloud.vimeo.com/2",
                "enabled": false,
                "debug_enabled": true,
                "debug_intent": 0
            },
            "referrer": "http://members.tradesmartu.com/product/video/2692",
            "cookie_domain": ".vimeo.com",
            "timestamp": 1490804929,
            "expires": 24212,
            "currency": "USD",
            "comscore_id": "14640914",
            "session": "86990da4d5e2b7af2bbcc8218ce6b93e9e7049af1490804929",
            "cookie": {"scaling": 1, "volume": 1.0, "quality": null, "hd": 0, "captions": null},
            "build": {"player": "914da00d", "js": "2.53.14"},
            "urls": {
                "zeroclip_swf": "https://f.vimeocdn.com/p/external/zeroclipboard/ZeroClipboard.swf",
                "js": "https://f.vimeocdn.com/p/2.53.14/js/player.js",
                "proxy": "https://player.vimeo.com/static/proxy.html",
                "flideo": "https://f.vimeocdn.com/p/flash/flideo/1.0.6/flideo.swf",
                "three_js": "https://f.vimeocdn.com/p/external/three.rvimeo.min.js",
                "moog": "https://f.vimeocdn.com/p/flash/moogaloop/6.4.5/moogaloop.swf?clip_id=209558125",
                "comscore_js": "https://f.vimeocdn.com/p/external/streamsense.4.1408.29.min.js",
                "blurr": "https://fresnel.vimeocdn.com/add/player-stats",
                "chromeless_css": "https://f.vimeocdn.com/p/2.53.14/css/chromeless.css",
                "vuid_js": "https://f.vimeocdn.com/js_opt/modules/utils/vuid.min.js",
                "chromeless_js": "https://f.vimeocdn.com/p/2.53.14/js/chromeless.js",
                "moog_js": "https://f.vimeocdn.com/p/2.53.14/js/moogaloop.js",
                "zeroclip_js": "https://f.vimeocdn.com/p/external/zeroclipboard/ZeroClipboard-patch.js",
                "css": "https://f.vimeocdn.com/p/2.53.14/css/player.css"
            },
            "signature": "873dc25c54ee5552f24869469aa22aff",
            "flags": {
                "dnt": 1,
                "preload_video": "metadata_on_hover",
                "plays": 1,
                "webp": 1,
                "flash_hls": 1,
                "android_inline": 0,
                "partials": 1,
                "blurr": 1,
                "autohide_controls": 0
            },
            "country": "US"
        },
        "player_url": "player.vimeo.com",
        "video": {
            "lang": null,
            "allow_hd": 1,
            "embed_code": "<iframe src=\"https://player.vimeo.com/video/209558125\" width=\"640\" height=\"360\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",
            "default_to_hd": 0,
            "title": "2017-03-21 20.00 Trading Labs - March 2017",
            "url": null,
            "privacy": "disable",
            "owner": {
                "account_type": "pro",
                "name": "TradeSmart University",
                "img": "https://i.vimeocdn.com/portrait/2612678_60x60.jpg",
                "url": "https://vimeo.com/tradesmartu",
                "img_2x": "https://i.vimeocdn.com/portrait/2612678_120x120.jpg",
                "id": 7724773
            },
            "share_url": "https://vimeo.com/209558125",
            "height": 1080,
            "width": 1920,
            "embed_permission": "whitelist",
            "thumbs": {
                "1280": "https://i.vimeocdn.com/video/625129557_1280.jpg",
                "960": "https://i.vimeocdn.com/video/625129557_960.jpg",
                "640": "https://i.vimeocdn.com/video/625129557_640.jpg",
                "base": "https://i.vimeocdn.com/video/625129557"
            },
            "fps": 26.04,
            "spatial": 0,
            "duration": 6053,
            "id": 209558125,
            "hd": 1
        },
        "build": {"player": "914da00d", "rpc": "dev"},
        "embed": {
            "autopause": 1,
            "color": "91ac6d",
            "on_site": 0,
            "outro": "nothing",
            "api": 3,
            "player_id": "",
            "quality": null,
            "settings": {
                "fullscreen": 1,
                "byline": 0,
                "like": 0,
                "playbar": 1,
                "title": 0,
                "color": 1,
                "branding": 0,
                "share": 0,
                "scaling": 0,
                "logo": 0,
                "spatial_compass": 1,
                "collections": 0,
                "info_on_pause": 0,
                "watch_later": 0,
                "portrait": 0,
                "embed": 0,
                "badge": 0,
                "spatial_label": 1,
                "volume": 1
            },
            "dnt": 0,
            "context": "embed.main",
            "time": 0,
            "log_plays": 1,
            "email": {
                "text": "Like what you see? Let\u2019s stay in touch.",
                "confirmation": "Thanks! We\u2019ll be in touch.",
                "time": -1
            },
            "loop": 0,
            "autoplay": 1
        },
        "vimeo_url": "vimeo.com",
        "user": {
            "liked": 0,
            "account_type": "none",
            "progress": 0,
            "owner": 0,
            "watch_later": 0,
            "logged_in": 0,
            "id": 0,
            "mod": 0
        }
    };
    if (!t.request) {
        return
    }
    if (typeof t.request === "object" && "error" in t.request) {
        if ("html" in t.request) {
            e.documentElement.innerHTML = t.request.html.replace(/&lt;/g, "<").replace(/&gt;/g, ">")
        }
        return
    }
    var r = function () {
        try {
            return window.self !== window.top
        } catch (e) {
            return true
        }
    }();
    if (!r && /twitter/i.test(navigator.userAgent) && t.video.url) {
        window.location = t.video.url
    }
    if (t.request.lang) {
        e.documentElement.setAttribute("lang", t.request.lang)
    }
    var n = "exitFullscreen" in e || "webkitExitFullscreen" in e || "webkitCancelFullScreen" in e || "mozCancelFullScreen" in e || "msExitFullscreen" in e || "webkitEnterFullScreen" in e.createElement("video");
    var i = function () {
        var e = navigator;
        var a = "Shockwave Flash";
        var t = "application/x-shockwave-flash";
        var r = "ShockwaveFlash.ShockwaveFlash";
        if (typeof e.plugins !== "undefined" && typeof e.plugins[a] === "object") {
            if (e.plugins[a].description && !(typeof e.mimeTypes !== "undefined" && e.mimeTypes[t] && !e.mimeTypes[t].enabledPlugin)) {
                return true
            }
        }
        try {
            if (window.ActiveXObject && new ActiveXObject(r)) {
                return true
            }
        } catch (e) {
        }
        return false
    }();
    var o = function () {
        var a = e.createElement("video");
        return {
            h264: "canPlayType" in a && a.canPlayType("video/mp4") !== "",
            textTracks: typeof TextTrackList !== "undefined" && typeof a.textTracks !== "undefined" && a.textTracks instanceof TextTrackList
        }
    }();
    var s = function () {
        var a = e.createElement("div");
        a.innerHTML = "<svg/>";
        return (a.firstChild && a.firstChild.namespaceURI) === "http://www.w3.org/2000/svg"
    }();
    var l = /MSIE 9/.test(navigator.userAgent) && /Windows Phone/.test(navigator.userAgent);
    var c = /IE 10/.test(navigator.userAgent);
    window._gaq = [["player._setAccount", 'UA-76641-35'], ["player._setDomainName", "player.vimeo.com"], ["player._set", "_anonymizeIp", true], ["player._trackPageview"]];
    var u = n || c || l;
    var d = e.getElementsByTagName("script")[0];
    var m = e.createElement("script");
    var f = false;
    var p = false;
    if ("text_tracks" in t.request && (!o.textTracks || o.textTracks && !o.h264) && i) {
        u = false
    }
    if (!s) {
        u = false
    }
    var v = "vod" in t.video && t.video.vod.is_feature;
    if (v && i && ("files" in t.request && !t.request.files.dash)) {
        u = false
    }
    if (u) {
        a.className = "player loading";
        var g = (new Date).getTime();
        m.src = t.request.urls.js;
        d.parentNode.insertBefore(m, d);
        m["onreadystatechange" in m ? "onreadystatechange" : "onload"] = function () {
            if (!f && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                f = true;
                var e = (new Date).getTime() - g;
                window._gaq.push(["player._trackTiming", "Player", "JavaScript Load", e]);
                p = new VimeoPlayer(a, t, y || {link: w, startTime: g})
            }
        };
        var y = false;
        var w = e.createElement("link");
        w.rel = "stylesheet";
        w.href = t.request.urls.css + (typeof cacheBuster === "undefined" ? "" : cacheBuster);
        e.getElementsByTagName("head")[0].appendChild(w);
        w.onload = function () {
            y = true;
            var e = (new Date).getTime() - g;
            window._gaq.push(["player._trackTiming", "Player", "CSS Load", e])
        }
    } else if (i) {
        a.innerHTML = '<object id="flash-object" name="flash-object" type="application/x-shockwave-flash" width="100%" height="100%" data="' + t.request.urls.moog + "&z=" + (new Date).getTime() + '"><param name="flashvars" value="clip_id=' + t.video.id + "&amp;embed_location=" + encodeURIComponent(t.request.referrer) + '&amp;js_getConfig=getConfig&amp;js_setConfig=setConfig&amp;js_onLoad=onMoogaloopLoaded&amp;api=1&amp;moogaloop_type=moogaloop"><param name="movie" value="' + t.request.urls.moog + "&z=" + (new Date).getTime() + '"><param name="allowfullscreen" value="true"><param name="allowscriptaccess" value="always"><param name="bgcolor" value="#000000"><param name="wmode" value="opaque"><param name="quality" value="high"><param name="scalemode" value="noscale"></object>';
        var h = false;
        var T = e.getElementById("flash-object");
        window.onMoogaloopLoaded = function () {
            h = true;
            if (!p && f) {
                a.className = "player";
                p = new VimeoPlayer(T, t)
            }
        };
        window.getConfig = function () {
            return t
        };
        window.setConfig = function (e) {
            t = e
        };
        m.src = t.request.urls.moog_js;
        d.parentNode.insertBefore(m, d);
        m["onreadystatechange" in m ? "onreadystatechange" : "onload"] = function () {
            if (!f && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                f = true;
                if (!p && h) {
                    p = new VimeoPlayer(T, t)
                }
            }
        }
    } else {
        a.innerHTML = '<div class="fallback"><iframe src="/video/209558125/fallback?js&amp;referrer=' + encodeURIComponent(t.request.referrer) + '" frameborder="0"></iframe></div>'
    }
    if (!t.request.flags.dnt && !t.embed.dnt) {
        var _ = e.createElement("script");
        _.async = true;
        _.src = 'https://ssl.google-analytics.com/ga.js';
        d.parentNode.insertBefore(_, d);
        window._vuid = [["pid", t.request.session]];
        var q = e.createElement("script");
        q.async = true;
        q.src = t.request.urls.vuid_js;
        d.parentNode.insertBefore(q, d)
    }
})(document, document.getElementById("player"));