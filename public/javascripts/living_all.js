!function e(t, i, n) {
    function o(r, s) {
        if (!i[r]) {
            if (!t[r]) {
                var c = "function" == typeof require && require;
                if (!s && c)
                    return c(r, !0);
                if (a)
                    return a(r, !0);
                var l = new Error("Cannot find module '" + r + "'");
                throw l.code = "MODULE_NOT_FOUND",
                l
            }
            var u = i[r] = {
                exports: {}
            };
            t[r][0].call(u.exports, function(e) {
                var i = t[r][1][e];
                return o(i ? i : e)
            }, u, u.exports, e, t, i, n)
        }
        return i[r].exports
    }
    for (var a = "function" == typeof require && require, r = 0; r < n.length; r++)
        o(n[r]);
    return o
}({
    1: [function(e, t, i) {
        t.exports = function() {
            function e(e) {
                window.console && window.console.log(e)
            }
            function t(e) {
                window.console && window.console.info(e)
            }
            function i(e) {
                window.console && window.console.warn(e)
            }
            function n(e) {
                window.console && window.console.error(e)
            }
            function o(e) {
                window.console && window.console.debug(e)
            }
            return {
                log: e,
                info: t,
                warn: i,
                error: n,
                debug: o
            }
        }()
    }
    , {}],
    2: [function(e, t, i) {
        t.exports = function() {
            var e = {};
            return e.escapeHTML = function() {
                var e = {
                    "<": "&#60;",
                    ">": "&#62;",
                    '"': "&#34;",
                    "'": "&#39;",
                    "&": "&#38;"
                }
                  , t = /&(?![\w#]+;)|[<>"']/g
                  , i = function(t) {
                    return e[t]
                }
                ;
                return function(e) {
                    return String(e || "").replace(t, i)
                }
            }(),
            e.getParamFormUrl = function(e) {
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
                  , i = window.location.search.substr(1).match(t)
                  , n = "";
                return i && (n = i[2]),
                t = null ,
                i = null ,
                n || ""
            }
            ,
            e.formateTime = function(e) {
                var t = "";
                if (e > -1) {
                    var i = Math.floor(e / 3600)
                      , n = Math.floor(e / 60) % 60
                      , o = e % 60
                      , a = parseInt(i / 24);
                    a > 0 && (i -= 24 * a,
                    t = a + "天 "),
                    10 > i && (t += "0"),
                    t += i + ":",
                    10 > n && (t += "0"),
                    t += n + ":",
                    10 > o && (t += "0"),
                    t += o
                }
                return t
            }
            ,
            e.formateDateTime = function(e) {
                var t = new Date;
                isNaN(e) || (t = new Date(1e3 * parseInt(e, 10)));
                var i = t.getFullYear()
                  , n = t.getMonth() + 1
                  , o = t.getDate()
                  , a = t.getHours()
                  , r = t.getMinutes()
                  , s = t.getSeconds();
                return a = 10 > a ? "0" + a : a,
                r = 10 > r ? "0" + r : r,
                s = 10 > s ? "0" + s : s,
                i + "-" + n + "-" + o + " " + a + ":" + r + ":" + s
            }
            ,
            e.formateTimeToSeconds = function(e) {
                var t = new Date
                  , i = e.split(" ")[0].split("-")[0]
                  , n = e.split(" ")[0].split("-")[1]
                  , o = e.split(" ")[0].split("-")[2]
                  , a = e.split(" ")[1].split(":")[0]
                  , r = e.split(" ")[1].split(":")[1]
                  , s = e.split(" ")[1].split(":")[2]
                  , c = parseInt(i, 10)
                  , l = parseInt(n, 10) - 1
                  , u = parseInt(o, 10)
                  , d = parseInt(a, 10)
                  , p = parseInt(r, 10)
                  , f = parseInt(s, 10);
                return t.setFullYear(c, l, u),
                t.setHours(d, p, f),
                Date.parse(t) / 1e3
            }
            ,
            e.browserCheck = function() {
                var t = navigator.userAgent.toLowerCase()
                  , i = t.indexOf("trident") > -1
                  , n = t.indexOf("presto") > -1
                  , o = t.indexOf("applewebkit") > -1
                  , a = t.indexOf("Gecko") > -1 && -1 === t.indexOf("KHTML")
                  , r = t.indexOf("chrome") > -1
                  , s = e.isMobileDevice()
                  , c = !!t.match(/\(i[^;]+;( U;)? cpu.+mac os x/)
                  , l = t.indexOf("android") > -1 || t.indexOf("Linux") > -1
                  , u = t.indexOf("iphone") > -1 || t.indexOf("Mac") > -1
                  , d = t.indexOf("ipad") > -1
                  , p = -1 === t.indexOf("safari")
                  , f = {
                    u: t,
                    ie: i,
                    op: n,
                    wk: o,
                    cr: r,
                    mz: a,
                    mb: s,
                    io: c,
                    an: l,
                    ih: u,
                    id: d,
                    wa: p
                };
                return e.browserTypeInfo = f,
                f
            }
            ,
            e.deviceCheck = function() {}
            ,
            e.getImageUrl = function(e) {
                return -1 == navigator.userAgent.toLowerCase().indexOf("chrome") && (e = e.replace(".webp", ".jpg")),
                e
            }
            ,
            e.isMobileDevice = function() {
                var e = navigator.userAgent.toLowerCase();
                return !!/(iphone|ios|android|mini|mobile|mobi|nokia|symbian|ipod|ipad|ws\s+phone|mqqbrowser|wp7|wp8|ucbrowser7|ucweb|360\s+aphone\s+browser)/i.test(e)
            }
            ,
            e.isWeibo = function() {
                var e = navigator.userAgent.toLowerCase();
                return !!e.match(/weibo/i)
            }
            ,
            e.isIosDevice = function() {
                var e = navigator.userAgent.toLowerCase()
                  , t = !!e.match(/\(i[^;]+;( U;)? cpu.+mac os x/)
                  , i = e.indexOf("iphone") > -1 || e.indexOf("Mac") > -1
                  , n = e.indexOf("ipad") > -1;
                return !!(t || n || i)
            }
            ,
            e.isAndroidDevice = function() {
                var e = navigator.userAgent.toLowerCase()
                  , t = e.indexOf("android") > -1 || e.indexOf("Linux") > -1;
                return t
            }
            ,
            e.getDownloadUrl = function() {
                var t = "";
                return t = e.isIosDevice() ? "http://www.huajiao.com/dl.php?os=ios" : e.isAndroidDevice() ? "http://www.huajiao.com/dl.php?os=android" : "http://www.huajiao.com/dl.php"
            }
            ,
            e.isWeixin = function() {
                var e = navigator.userAgent.toLowerCase();
                return "micromessenger" == e.match(/MicroMessenger/i)
            }
            ,
            e.getImageUrl = function(e) {
                return -1 == navigator.userAgent.toLowerCase().indexOf("chrome") && (e = e.replace(".webp", ".jpg")),
                e
            }
            ,
            e.getSchemaUrl = function() {
                return "huajiao://huajiao.com/goto/index"
            }
            ,
            e.szInit = function() {
                window.__getButtonLabel__ = function(e) {
                    return "download" === e ? "下载花椒" : "downloading" === e ? "下载中" : "pause" === e ? "暂停" : "resume" === e ? "继续" : "waiting" === e ? "请等待" : "install" === e ? "安装" : "open" === e ? "打开花椒" : void 0
                }
                ,
                window.AndroidWebview && window.AppStatusMgr.ready(function() {
                    window.AppStatusMgr.start()
                })
            }
            ,
            e.openOrDownloadApp = function(t) {
                var i = new Date
                  , n = setTimeout(function() {
                    var t = new Date;
                    5e3 > t - i ? window.location.href = e.getDownloadUrl() : window.close()
                }, 500);
                $(window).on("visibilitychange webkitvisibilitychange pagehide", function() {
                    clearTimeout(n)
                }, !1),
                window.location.href = t
            }
            ,
            e.downloadApp = function() {
                window.AndroidWebview || (window.location.href = e.getDownloadUrl())
            }
            ,
            e.openApp = function() {
                if (!window.AndroidWebview) {
                    var t = e.getSchemaUrl()
                      , i = setTimeout(function() {
                        alert("请在浏览器里面打开该页面")
                    }, 600);
                    e.addEventListener("visibilitychange", function() {
                        clearTimeout(i)
                    }, !1),
                    e.addEventListener("webkitvisibilitychange", function() {
                        clearTimeout(i)
                    }, !1),
                    window.location.href = t
                }
            }
            ,
            e.formateTitle = function(e, t, i) {
                var n = t || "花椒播主"
                  , o = i
                  , a = "";
                return e && e.length > 0 ? a = e : (a = parseInt(o.split(" ")[0].split("-")[1] || 1, 10) + "月" + parseInt(o.split(" ")[0].split("-")[2] || 1, 10) + "日",
                a = n + " " + a + "作品"),
                a
            }
            ,
            e.formateNum = function(e) {
                if ("number" == typeof e) {
                    var t = 0
                      , i = 0;
                    return 0 >= e ? t = 0 : e > 0 && 1e4 > e ? t = e : e >= 1e4 && 1e7 > e && e % 1e4 >= 1e3 ? (i = e / 1e3,
                    t = parseInt(i) / 10 + "w") : e >= 1e4 && 1e7 > e && 1e3 > e % 1e4 ? (i = e / 1e4,
                    t = i.toFixed(0) + "w") : e >= 1e7 && 1e8 > e ? (i = e / 1e4,
                    t = i.toFixed(0) + "w") : (i = e / 1e8,
                    t = i.toFixed(1) + "y"),
                    t
                }
                return e
            }
            ,
            e.formateNumtoThousands = function(e) {
                e = (e || 0).toString();
                for (var t = ""; e.length > 3; )
                    t = "," + e.slice(-3) + t,
                    e = e.slice(0, e.length - 3);
                return e && (t = e + t),
                t
            }
            ,
            e.getPageInfo = function() {
                var e = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                  , t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
                return {
                    width: t,
                    height: e
                }
            }
            ,
            e.flashChecker = function() {
                var e, t = 0, i = 0;
                if (document.all) {
                    if (e = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash")) {
                        t = 1;
                        var n = e.GetVariable("$version");
                        i = parseInt(n.split(" ")[1].split(",")[0])
                    }
                } else if (navigator.plugins && navigator.plugins.length > 0 && (e = navigator.plugins["Shockwave Flash"])) {
                    t = 1;
                    for (var o = e.description.split(" "), a = 0; a < o.length; ++a)
                        isNaN(parseInt(o[a])) || (i = parseInt(o[a]))
                }
                return {
                    f: t,
                    v: i
                }
            }
            ,
            e.getTouchDirection = function(t, i, n, o, a) {
                var r = i - o
                  , s = n - t
                  , c = 0
                  , l = 10;
                if (!isNaN(a) && parseInt(a, 10) > 0 && (l = a),
                Math.abs(s) < l && Math.abs(r) < l)
                    return c;
                var u = e.getAngle(s, r);
                return u >= -45 && 45 > u ? c = 4 : u >= 45 && 135 > u ? c = 1 : u >= -135 && -45 > u ? c = 2 : (u >= 135 && 180 >= u || u >= -180 && -135 > u) && (c = 3),
                c
            }
            ,
            e.getAngle = function(e, t) {
                return 180 * Math.atan2(t, e) / Math.PI
            }
            ,
            e.getInnerWidth = function() {
                var e = window.innerWidth;
                return "number" != typeof e && (e = "number" === document.compatMode ? document.documentElement.clientWidth : document.body.clientWidth),
                e
            }
            ,
            e.getInnerHeight = function() {
                var e = window.innerHeight;
                return "number" != typeof e && (e = "number" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight),
                e
            }
            ,
            e.getOrientation = function() {
                var t = "portrait";
                if (window.orientation)
                    (180 === window.orientation || 0 === window.orientation) && (t = "portrait"),
                    (90 === window.orientation || -90 === window.orientation) && (t = "landscape");
                else {
                    var i = e.getInnerWidth()
                      , n = e.getInnerHeight();
                    t = n > i ? "portrait" : i > n ? "landscape" : "portrait"
                }
                return t
            }
            ,
            e.isPortrait = function() {
                return "portrait" === e.getOrientation()
            }
            ,
            e.isLandscape = function() {
                return "landscape" === e.getOrientation()
            }
            ,
            e.getMid = function() {
                var e = (new Date).getTime().toString() + (1e8 * Math.random()).toString();
                e = e.replace(".", "");
                var t = window.localStorage.getItem("deviceid") || e;
                return window.localStorage.setItem("deviceid", t),
                t
            }
            ,
            e.isIosDevice = function() {
                var e = navigator.userAgent.toLowerCase()
                  , t = !!e.match(/\(i[^;]+;( U;)? cpu.+mac os x/)
                  , i = e.indexOf("iphone") > -1 || e.indexOf("Mac") > -1
                  , n = e.indexOf("ipad") > -1;
                return !!(t || n || i)
            }
            ,
            e.isAndroidDevice = function() {
                var e = navigator.userAgent.toLowerCase()
                  , t = e.indexOf("android") > -1 || e.indexOf("Linux") > -1;
                return t
            }
            ,
            window.String.prototype.toCapitalize = function() {
                return this.toLowerCase().replace(/\b(\w)|\s(\w)/g, function(e) {
                    return e.toUpperCase()
                }) || ""
            }
            ,
            e
        }()
    }
    , {}],
    3: [function(e, t, i) {
        t.exports = function() {
            var t = e("../../../common/js/module/huajiaoLog")
              , i = e("./formate")
              , n = window._DATA
              , o = {};
            if (n.feed) {
                var a = parseInt(n.feed.type, 10);
                switch (o.feedid = n.feed.feed.relateid.toString(),
                o.type = a,
                o.publishtime = n.feed.feed.publishtime,
                o.favorited = n.feed.feed.favorited,
                o.reposts = parseInt(n.feed.feed.reposts, 10),
                o.replies = parseInt(n.feed.feed.replies, 10),
                o.width = parseInt(n.feed.feed.width, 10),
                o.height = parseInt(n.feed.feed.height, 10),
                o.praises = parseInt(n.feed.feed.praises, 10),
                o.watches = parseInt(n.feed.feed.watches, 10),
                o.device = n.feed.feed.device,
                o.title = n.feed.feed.title,
                o.image = n.feed.feed.image,
                a) {
                case 1:
                    o.sn = n.feed.feed.sn,
                    o.m3u8 = n.feed.feed.m3u8,
                    o.duration = parseInt(n.feed.feed.duration, 10),
                    o.location = i.formateLocation(n.feed.feed.location),
                    o.network = n.feed.feed.network,
                    o.replays = n.feed.feed.replays,
                    o.subtitle = n.feed.feed.subtitle,
                    o.balance = n.feed.author.balance;
                    break;
                case 2:
                    o.sn = n.feed.feed.sn,
                    o.m3u8 = n.feed.feed.m3u8,
                    o.duration = parseInt(n.feed.feed.duration, 10),
                    o.location = i.formateLocation(n.feed.feed.location),
                    o.network = n.feed.feed.network,
                    o.replays = n.feed.feed.replays,
                    o.subtitle = n.feed.feed.subtitle;
                    break;
                case 3:
                    break;
                case 4:
                    o.duration = parseInt(n.feed.feed.duration, 10),
                    o.mp4 = n.feed.feed.mp4
                }
            } else
                t.log("No feed data");
            return o
        }()
    }
    , {
        "../../../common/js/module/huajiaoLog": 1,
        "./formate": 4
    }],
    4: [function(e, t, i) {
        t.exports = function() {
            var e = function(e) {
                var t = "火星";
                return -1 === e.indexOf(t) ? e : ""
            }
            ;
            return {
                formateLocation: e
            }
        }()
    }
    , {}],
    5: [function(e, t, i) {
        t.exports = function() {
            var e = "http://static.huajiao.com/huajiao/web/static/"
              , t = "http://www.huajiao.com/api/"
              , i = "花椒播主"
              , n = e + "images/default/avatar.png"
              , o = e + "images/default/avatar_31.png"
              , a = e + "images/default/avatar_60.png";
            return {
                urlBase: {
                    "static": e,
                    "interface": t
                },
                defaultConfig: {
                    nickname: i,
                    avatar41: n,
                    avatar31: o,
                    avatar60: a
                }
            }
        }()
    }
    , {}],
    6: [function(e, t, i) {
        t.exports = function() {
            var t = e("../../../common/js/module/huajiaoLog")
              , i = e("./huajiaoConfig")
              , n = e("./formate")
              , o = i.defaultConfig
              , a = window._DATA
              , r = {};
            return a.user ? (r.uid = a.user.uid.toString(),
            r.nickname = a.user.nickname || o.nickname,
            r.avatar = a.user.avatar || o.avatar41,
            r.avatar_l = a.user.avatar_l || o.avatar60,
            r.signature = a.user.signature,
            r.gender = a.user.gender,
            r.astro = a.user.astro,
            r.location = n.formateLocation(a.user.location),
            r.lives = parseInt(a.user.lives, 10),
            r.watches = parseInt(a.user.watches, 10),
            r.praises = parseInt(a.user.praises, 10),
            r.followings = parseInt(a.user.followings, 10),
            r.followers = parseInt(a.user.followers, 10),
            r.source = a.user.source,
            r.followed = a.user.followed,
            r.blocked = a.user.blocked,
            r.verified = a.user.verified,
            r.verifiedinfo = {
                credentials: a.user.verifiedinfo.credentials,
                type: a.user.verifiedinfo.type,
                realname: a.user.verifiedinfo.realname,
                status: a.user.verifiedinfo.status,
                error: a.user.verifiedinfo.error
            }) : t.log("No user data"),
            r
        }()
    }
    , {
        "../../../common/js/module/huajiaoLog": 1,
        "./formate": 4,
        "./huajiaoConfig": 5
    }],
    7: [function(e, t, i) {
        $(function() {
            function t() {
                i(),
                d(l),
                p.init(l)
            }
            function i() {
                var e = document.documentElement.clientHeight || document.body.clientHeight;
                j.css("height", e - 20)
            }
            function n() {
                var e = l.feedid
                  , t = {
                    rid: e,
                    debug: !1,
                    modules: ["chat", "join", "follow", "share", "gift"]
                };
                u && (t.uid = u.uid),
                window.hjPopbox ? g.init(t) : s.error("There is no hjPopbox object!")
            }
            function o() {
                g.on("livepause", function() {
                    w.pause(),
                    $(".js_author_leave").show()
                }),
                g.on("liveresume", function() {
                    w.reconnect(),
                    $(".js_author_leave").hide()
                }),
                g.on("live_finish", function(e) {
                    var t = v("qd")
                      , i = v("reference");
                    i = "" !== i ? "&reference=" + i : "",
                    t = "" !== t ? "&qd=" + t : "",
                    4 != e.type && (window.location.href = "/l/finished?liveid=" + _DATA.feed.feed.relateid + t + i)
                }),
                g.on("updateWatchesNumber", function(e) {
                    y.text(e)
                })
            }
            function a() {
                var e, t = _DATA.isLogin, i = {
                    type: "live"
                };
                return t ? (i.relateid = _DATA.feed.feed.relateid,
                i.share_uid = v("userid"),
                e = l.sn,
                "" != e && (i.sn = e),
                void A.jsonp(_.inform, i, function(e) {
                    e && 0 != e.code && console.log("inform fail!")
                })) : !1
            }
            function r() {
                w = x.init(huajiao_liveplayer),
                t(),
                h.init(),
                n(),
                b.init(w),
                f.init(),
                m.init({
                    type: "live",
                    id: l.feedid
                }),
                a(),
                o()
            }
            var s = e("../../common/js/module/huajiaoLog")
              , c = e("../../common/js/module/huajiaoUtils")
              , l = e("./data/feedData")
              , u = e("./data/userData")
              , d = e("./public/follow")
              , p = e("./public/publicArea")
              , f = (e("./public/resizeLiving"),
            e("./public/huajiaoDownload"))
              , h = e("./public/addParamForUrl")
              , m = e("./public/share")
              , g = e("./longchat/livepop/livepopV2")
              , v = c.getParamFormUrl
              , w = null
              , b = e("./public/downTip")
              , x = e("./public/initPlayer")
              , j = $(".fix-mask")
              , y = $(".js_watches");
            window._DATA;
            window.huajiao = window.huajiao || {};
            var _ = (window.huajiao,
            e("./public/tab"),
            {
                inform: "http://h.huajiao.com/share/notice"
            })
              , A = e("./public/huajiaoAjax");
            r()
        })
    }
    , {
        "../../common/js/module/huajiaoLog": 1,
        "../../common/js/module/huajiaoUtils": 2,
        "./data/feedData": 3,
        "./data/userData": 6,
        "./longchat/livepop/livepopV2": 8,
        "./public/addParamForUrl": 12,
        "./public/downTip": 14,
        "./public/follow": 15,
        "./public/huajiaoAjax": 16,
        "./public/huajiaoDownload": 17,
        "./public/initPlayer": 18,
        "./public/publicArea": 19,
        "./public/resizeLiving": 20,
        "./public/share": 21,
        "./public/tab": 22
    }],
    8: [function(e, t, i) {
        t.exports = function() {
            var t = e("./messageTypeV2")
              , i = e("./popboxV2")
              , n = e("./tools")
              , o = window;
            if (!o.hjPopbox) {
                var a = o.hjPopbox = function() {
                    function e(e, t) {
                        var i = g[e] || (g[e] = []);
                        return i.push(t),
                        a
                    }
                    function r(e, t) {
                        if (!e && !t)
                            return g = m.events = {},
                            a;
                        var i = g[e];
                        if (i)
                            if (t)
                                for (var n = i.length - 1; n >= 0; n--)
                                    i[n] === t && i.splice(n, 1);
                            else
                                delete g[e];
                        return a
                    }
                    function s(e, t) {
                        var i = g[e];
                        if (i) {
                            i = i.slice();
                            for (var n = 0, o = i.length; o > n; n++)
                                i[n](t)
                        }
                        return a
                    }
                    function c(e) {
                        return e.debug && (console.log("所有消息类型如下: "),
                        console.log(t.MESSAGE_TYPE_CN),
                        console.log("可选模块如下: " + Object.keys(v))),
                        "object" != typeof e ? (o.console && console.error("There is no options when hjPopbox initialized"),
                        null ) : !e.rid || e.rid.length < 4 ? (o.console && console.error("There is no param rid in options"),
                        null ) : w.modules && "[object Array]" != Object.prototype.toString.call(keconfig.modules) ? (o.console && console.error('The type of param "modules" must be an Array'),
                        null ) : void l(e)
                    }
                    function l(i) {
                        for (var a in i)
                            w[a] = i[a];
                        w.modules && w.modules.forEach(function(t) {
                            v[t] && e(t, v[t])
                        });
                        var r = {
                            roomId: w.rid,
                            userId: w.uid || n.getUid()
                        };
                        b = new WebSocketIO(r),
                        b.on("joinchatroom", function(e, t, i) {
                            w.audiences = e,
                            w.watches = i,
                            s("joinchatroom", {
                                onlineCount: e,
                                audiences: t,
                                onlineWatches: i
                            }),
                            w.debug && console.log("joinchatroom", e, t, i)
                        }),
                        b.on("quitchatroom", function() {
                            s("quitchatroom"),
                            o.console && console.info("quitchatroom")
                        }),
                        b.on("message", function(e, i) {
                            switch (w.debug && console.log(e),
                            e.type && t.MESSAGE_TYPE_METHOD[e.type] && (s(t.MESSAGE_TYPE_METHOD[e.type], e),
                            e.type == t.MESSAGE_TYPE_CONTS.CHAT && e["extends"] && e["extends"].gift > 0 && s("chat-barrage", e),
                            e.type == t.MESSAGE_TYPE_CONTS.JOIN && e["extends"] && e["extends"].medal.length > 0 && e["extends"].medal[0].medal > 2 && s("join-vip", e)),
                            e["extends"] && e["extends"].watches && w.watches != e["extends"].watches && s("updateWatchesNumber", e["extends"].watches),
                            e.type) {
                            case t.MESSAGE_TYPE_CONTS.JOIN:
                                w.audiences = i,
                                w.watches = e["extends"].watches;
                                break;
                            case t.MESSAGE_TYPE_CONTS.VISITOR_JOIN:
                                w.audiences = i,
                                w.watches = e["extends"].watches;
                                break;
                            case t.MESSAGE_TYPE_CONTS.QUIT:
                                w.audiences--
                            }
                        }),
                        b.on("close", function(e) {
                            w.debug && console.log("connect close", e),
                            s("close", e)
                        })
                    }
                    function u(e) {
                        w.uid = e,
                        b.close(),
                        w.modules && w.modules.forEach(function(e) {
                            v[e] && r(e, v[e])
                        }),
                        l()
                    }
                    function d(e, i) {
                        if ("[object Object]" != Object.prototype.toString.call(e))
                            throw "Param1 must be object";
                        var i = i || !1;
                        for (var n in e)
                            !i && t.MESSAGE_TYPE_METHOD[n] || (t.MESSAGE_TYPE_METHOD[n] = e[n])
                    }
                    function p() {
                        return i.addPraise(),
                        a
                    }
                    function f(e) {
                        return i.showChatPop(e),
                        a
                    }
                    function h(e, t) {
                        var i = e.length;
                        if (0 >= i || i > 140)
                            return void t({
                                errno: -1,
                                errmsg: "没有输入内容/输入内容大于140"
                            });
                        var o = "http://h.huajiao.com/api/chatSend"
                          , r = {
                            liveid: w.rid,
                            content: e
                        };
                        return n.jsonp(o, r, function(e) {
                            t(e)
                        }, function() {
                            t({
                                errno: -2,
                                errmsg: "net error"
                            })
                        }),
                        a
                    }
                    var m = {}
                      , g = m.events = {}
                      , v = {
                        chat: function(e) {
                            i.addMessage(e)
                        },
                        "chat-barrage": function(e) {
                            i.popMessage(e)
                        },
                        join: function(e) {
                            i.memberIn(e)
                        },
                        "join-vip": function(e) {
                            i.vipMemberIn(e)
                        },
                        follow: function(e) {
                            i.follow(e)
                        },
                        gift: function(e) {
                            i.gift(e)
                        },
                        praise: function(e) {
                            i.addPraise(e)
                        },
                        schoolstar: function(e) {
                            e.text = "为主播送了一个校园之星",
                            i.gift(e)
                        },
                        share: function(e) {
                            i.addMessage(e)
                        }
                    }
                      , w = {
                        audiences: 0,
                        watches: 0,
                        modules: null
                    }
                      , b = null ;
                    return {
                        init: c,
                        addPraise: p,
                        showChatPop: f,
                        sendChatMessage: h,
                        setUserId: u,
                        on: e,
                        off: r,
                        emit: s,
                        setMsgRouter: d,
                        version: "1.0"
                    }
                }();
                return a
            }
        }()
    }
    , {
        "./messageTypeV2": 9,
        "./popboxV2": 10,
        "./tools": 11
    }],
    9: [function(e, t, i) {
        t.exports = function() {
            var e = {
                1: "有人关注",
                2: "直播开始",
                3: "直播结束",
                4: "预告发布",
                5: "预告播放",
                6: "直播公告",
                7: "预报公告",
                8: "赞",
                9: "群聊",
                10: "进入群聊",
                11: "观众热度",
                12: "匿名进群",
                13: "反馈飞吻",
                14: "加入返回",
                15: "小喇叭",
                16: "退出群聊",
                17: "关注公告",
                18: "被封禁",
                19: "通知主播聊天室直播开始",
                20: "通知主播聊天室之前的直播结束",
                21: "推送话题",
                22: "用户收藏",
                23: "用户转发",
                24: "用户回复",
                25: "官方加V通过",
                26: "系统公告",
                27: "关注人关注",
                28: "个人收益通知（单人）",
                29: "个人实时收益通知（聊天室内）",
                30: "个人赠送礼物",
                31: "公幕消息",
                32: "私幕消息",
                33: "直播暂停",
                34: "直播恢复",
                35: "收到红包",
                36: "等级更新",
                37: "踢人",
                39: "私信聊天",
                40: "私信召回",
                41: "管理员/反垃圾/反作弊消息",
                42: "用户分享主播直播消息",
                43: "观众被禁言",
                44: "客服聊天信息",
                46: "水滴VR直播设备绑定成功消息",
                48: "校园之星活动信息",
                51: "主播上行质量",
                52: "主播设置场控提醒",
                60: "用户勋章达到2级消息"
            }
              , t = {
                FOLLOW: 1,
                LIVE_START: 2,
                LIVE_STOP: 3,
                FORCAST_PUBLISH: 4,
                FORCAST_PLAY: 5,
                BROADCAST_LIVE: 6,
                BROADCAST_FORECAST: 7,
                PRAISE: 8,
                CHAT: 9,
                JOIN: 10,
                HOT: 11,
                VISITOR_JOIN: 12,
                FEEDBACK: 13,
                JOINBACK: 14,
                BUGLE: 15,
                QUIT: 16,
                BROADCAST_FOLLOW: 17,
                FORBIDEN: 18,
                ANCHORSTART: 19,
                ANCHORSTOP: 20,
                PUSHTOPIC: 21,
                COLLECTION: 22,
                USERREPOST: 23,
                USERREPLY: 24,
                VERIFY: 25,
                SYSTEMNOTICE: 26,
                FOLLOWERFOLLOW: 27,
                BALANCEMESSAGE: 28,
                BALANCEPUSH: 29,
                PERSIONALGIFT: 30,
                PUBLISHMESSAGE: 31,
                PERSIONALMESSAGE: 32,
                LIVEPAUSE: 33,
                LIVERESUME: 34,
                REDBAG: 35,
                LEVELCHANGE: 36,
                KICKOUT: 37,
                PEERCHAT: 39,
                PEERRECALL: 40,
                ADMINMESSAGE: 41,
                SHARE: 42,
                FORBIDDEN: 43,
                CUSTOMERSERVICE: 44,
                BINDVRCAMERA: 46,
                ACTIVITYINFO: 48,
                UPSTREAMQUALITY: 51,
                LIVINGCONTROLMSG: 52,
                MEDAL2LEVEL: 60
            }
              , i = {
                3: "live_finish",
                9: "chat",
                8: "praise",
                10: "join",
                17: "follow",
                30: "gift",
                33: "livepause",
                34: "liveresume",
                42: "share",
                48: "schoolstar"
            };
            return {
                MESSAGE_TYPE_CN: e,
                MESSAGE_TYPE_CONTS: t,
                MESSAGE_TYPE_METHOD: i
            }
        }()
    }
    , {}],
    10: [function(e, t, n) {
        t.exports = function() {
            function e(e) {
                return document.querySelector(e)
            }
            function t(e, t, i) {
                var n = function(e) {
                    return e.replace(/-([a-z])/gi, function(e, t) {
                        return t.toUpperCase()
                    })
                }
                ;
                if (3 === arguments.length) {
                    if (void 0 === i)
                        return e;
                    try {
                        return e.style[n(t)] = i,
                        e
                    } catch (o) {
                        return e
                    }
                } else
                    try {
                        var a = window.getComputedStyle(e, null );
                        return a.getPropertyValue(t)
                    } catch (o) {
                        return null
                    }
            }
            function n(e) {
                var t = this
                  , i = 3e3
                  , n = null ;
                this.repeatNumList = [],
                this.active = !0,
                this.repeatId = null ,
                this.id = null ,
                this.name = null ,
                this.avatar = null ,
                this.giftType = null ,
                this.giftId = null ,
                this.giftName = null ,
                this.img = null ,
                this.level = null ,
                this.stage = null ,
                this.addRepeatNum = function(e) {
                    if (t.active) {
                        var i = t.repeatNumList.length;
                        (0 == i || i > 0 && t.repeatNumList[i - 1] < e) && t.repeatNumList.push(e)
                    }
                }
                ,
                this.isActive = function() {
                    return t.active
                }
                ,
                this.resetCounter = function() {
                    t.active = !0,
                    n && clearTimeout(n),
                    n = setTimeout(function() {
                        t.active = !1,
                        n = null
                    }, i)
                }
                ,
                function() {
                    t.repeatId = e.repeatId,
                    t.id = e.id,
                    t.name = e.name,
                    t.avatar = e.avatar,
                    t.giftType = e.giftType,
                    t.giftId = e.giftId,
                    t.giftName = e.giftName,
                    t.img = e.img,
                    t.addRepeatNum(e.repeatNum),
                    t.level = e.level,
                    t.stage = e.stage
                }(e)
            }
            function o(i) {
                function o() {
                    z || a()
                }
                function a() {
                    s(),
                    z = setTimeout(function() {
                        r() ? (clearTimeout(z),
                        z = null ) : a()
                    }, Y)
                }
                function r() {
                    return 0 == R.length
                }
                function s() {
                    function i(e) {
                        setTimeout(function() {
                            e.classList.remove("active")
                        }, 200)
                    }
                    function n() {
                        return V = e(".hjPopGift.hjPopGift_small.first"),
                        B = e(".hjPopGift.hjPopGift_small.last"),
                        V.classList.contains("active") && B.classList.contains("active") ? [] : B.classList.contains("active") ? V : V.classList.contains("active") ? B : V
                    }
                    var o = R[0]
                      , a = R[1]
                      , r = null ;
                    if (W[o].repeatNumList.length > 0) {
                        if (r = e('.hjPopGift.hjPopGift_small[data-repeatid="' + o + '"]'),
                        r || (r = n()),
                        r) {
                            r.setAttribute("data-repeatid", W[o].repeatId),
                            r.setAttribute("data-repeatnum", 0),
                            t(r.querySelector(".icon-avatar"), "backgroundImage", "url(" + W[o].avatar + ")");
                            var s = r.querySelector(".level_info");
                            s.innerText = W[o].level,
                            s.setAttribute("class", "level_info level_" + W[o].stage),
                            r.querySelector(".nickname").innerText = W[o].name,
                            r.querySelector(".giftname").innerText = W[o].giftName,
                            t(r.querySelector(".icon-gift"), "backgroundImage", "url(" + W[o].img + ")");
                            var l = r.querySelector(".giftNum");
                            l.classList.add("active"),
                            l.innerText = "x" + W[o].repeatNumList.shift(),
                            i(r.querySelector(".giftNum")),
                            r.classList.add("active"),
                            W[o].resetCounter()
                        }
                    } else
                        W[o].isActive() || (r = e('.hjPopGift.hjPopGift_small[data-repeatid="' + o + '"]'),
                        R[0] = 0,
                        W[o] = null ,
                        r.classList.remove("active"),
                        r.removeAttribute("data-repeatid"),
                        r.removeAttribute("data-repeatNum"));
                    if (a && W[a].repeatNumList.length > 0) {
                        if (r = e('.hjPopGift.hjPopGift_small[data-repeatid="' + a + '"]'),
                        r || (r = n()),
                        r) {
                            r.setAttribute("data-repeatid", W[a].repeatId),
                            r.setAttribute("data-repeatnum", 0),
                            t(r.querySelector(".icon-avatar"), "backgroundImage", "url(" + W[a].avatar + ")");
                            var s = r.querySelector(".level_info");
                            s.innerText = W[a].level,
                            s.setAttribute("class", "level_info level_" + W[a].stage),
                            r.querySelector(".nickname").innerText = W[a].name,
                            r.querySelector(".giftname").innerText = W[a].giftName,
                            t(r.querySelector(".icon-gift"), "backgroundImage", "url(" + W[a].img + ")");
                            var l = r.querySelector(".giftNum");
                            l.classList.add("active"),
                            l.innerText = "x" + W[a].repeatNumList.shift(),
                            i(r.querySelector(".giftNum")),
                            r.classList.add("active"),
                            W[a].resetCounter()
                        }
                    } else
                        a && !W[a].isActive() && (r = e('.hjPopGift.hjPopGift_small[data-repeatid="' + a + '"]'),
                        R[1] = 0,
                        W[a] = null ,
                        r.classList.remove("active"),
                        r.removeAttribute("data-repeatid"),
                        r.removeAttribute("data-repeatnum"));
                    c = [];
                    for (var u = 0; u < R.length; u++)
                        0 != R[u] && c.push(R[u]);
                    R = c
                }
                var c = []
                  , l = W[i.repeatId];
                l ? l.addRepeatNum(i.repeatNum) : (W[i.repeatId] = new n(i),
                R.push(i.repeatId)),
                o()
            }
            function a(e) {
                Q.push(e),
                r()
            }
            function r() {
                function t() {
                    var t = Q.shift()
                      , i = e(".hjPopGift.hjPopGift_big");
                    i.querySelector("img").setAttribute("src", t.img),
                    i.querySelector(".giftMsg").innerText = t.name + " 送了一个" + t.giftName,
                    i.classList.add("active"),
                    setTimeout(function() {
                        i.classList.remove("active")
                    }, 3100)
                }
                J || (t(),
                J = setInterval(function() {
                    Q.length > 0 ? t() : (clearInterval(J),
                    J = null )
                }, 5500))
            }
            function s() {
                var e = parseInt(t(T, "bottom").replace("px", "") || 0, 10);
                0 > e && (M++,
                c())
            }
            function c() {
                "none" == t(k, "display") && (k.style.opacity = 0,
                t(k, "display", "block"),
                k.style[j.prefixStyle("transition")] = "opacity .3s",
                setTimeout(function() {
                    k.style.opacity = 100
                }, 0)),
                k.innerText = M + "条新弹幕",
                A.style.bottom = "25px"
            }
            function l() {
                k.style[j.prefixStyle("transition")] = "opacity .3s",
                k.style.opacity = "0",
                setTimeout(function() {
                    t(k, "display", "none")
                }, 300),
                M = 0,
                A.removeAttribute("style")
            }
            function u() {
                var e = '<div class="hj_showArea"><ul></ul></div><div class="hj_tip"></div><div class="hj_inputArea"></div>';
                return e
            }
            function d() {
                var e = '<div class="hjPopGift hjPopGift_small first">';
                return e += '<i class="icon-avatar" ></i>',
                e += '<div><em class="level_info"></em><span class="nickname"></span></div>',
                e += '<div class="giftname"></div>',
                e += '<i class="icon-gift" ></i>',
                e += '<div class="giftNum"></div>',
                e += "</div>",
                e += '<div class="hjPopGift hjPopGift_small last">',
                e += '<i class="icon-avatar"></i>',
                e += '<div><em class="level_info"></em><span class="nickname"></span></div>',
                e += '<div class="giftname"></div>',
                e += '<i class="icon-gift"></i>',
                e += '<div class="giftNum"></div>',
                e += "</div>",
                e += '<div class="hjPopGift hjPopGift_big">',
                e += '<div class="giftMsg"></div>',
                e += "<img/>",
                e += "</div>"
            }
            function p() {
                _.style[j.prefixStyle("transition")] = "opacity .3s",
                k.style.opacity = "0",
                setTimeout(function() {
                    t(mainContainer, "display", "none")
                }, 300)
            }
            function f(e) {
                var t = x[e];
                return t || (t = e % b.length,
                x[name] = t),
                t
            }
            function h() {
                g(),
                k.addEventListener("touchend", function() {
                    l();
                    var e = T;
                    e.style[j.prefixStyle("transition")] = "bottom 300ms",
                    e.style.bottom = "0px",
                    setTimeout(function() {
                        e.style[j.prefixStyle("transition")] = ""
                    }, 300)
                })
            }
            function m() {
                T || (_.insertAdjacentHTML("beforeend", u()),
                A = _.querySelector(".hj_showArea"),
                T = _.querySelector(".hj_showArea ul"),
                k = _.querySelector(".hj_tip"),
                S = _.querySelector(".hj_inputArea"),
                h())
            }
            function g() {
                var e = _
                  , t = T
                  , i = 0
                  , n = 0;
                e.addEventListener("touchstart", function(e) {
                    return T.offsetHeight < _.offsetHeight ? !1 : void (n = i = e.touches[0].pageY)
                }),
                e.addEventListener("touchmove", function(e) {
                    if (T.offsetHeight < _.offsetHeight)
                        return !1;
                    e.preventDefault();
                    var i = e.changedTouches[0].pageY
                      , o = i - n
                      , a = t.style.bottom.replace("px", "");
                    t.style.bottom = parseInt(a || 0, 10) - o + "px",
                    n = i
                }),
                e.addEventListener("touchend", function(e) {
                    if (T.offsetHeight < _.offsetHeight)
                        return !1;
                    var i = _.offsetHeight - T.offsetHeight
                      , o = e.changedTouches[0].pageY
                      , a = o - n
                      , r = t.style.bottom.replace("px", "")
                      , s = parseInt(r, 10) - a;
                    s > 0 ? (s = s > 0 ? 0 : s,
                    t.style[j.prefixStyle("transition")] = "bottom 300ms",
                    t.style.bottom = s + "px",
                    setTimeout(function() {
                        t.style[j.prefixStyle("transition")] = ""
                    }, 300),
                    l()) : i > s ? (s = i,
                    t.style[j.prefixStyle("transition")] = "bottom 300ms",
                    t.style.bottom = s + "px",
                    setTimeout(function() {
                        t.style[j.prefixStyle("transition")] = ""
                    }, 300)) : t.style.bottom = s + "px",
                    n = o
                })
            }
            function v(e) {
                var i = y.querySelector("#chatPop");
                i || (y.insertAdjacentHTML("beforeend", '<div class="chatPop" id="chatPop" style="display: block;"><input type="text" class="msgInput" placeholder="说点什么吧"><div class="btn_send">发送</div></div>'),
                i = y.querySelector("#chatPop"),
                t(i, j.cssPrefix + "transition", "opacity .3s")),
                e ? (t(i, "display", "block"),
                t(i, "opacity", 1)) : (t(i, "opacity", 0),
                i.addEventListener(j.prefixStyle("transitionEnd"), function(e) {
                    t(i, "display", "none")
                }, !1))
            }
            var w = {}
              , b = ["EFBA35"]
              , x = {}
              , j = function() {
                var e = window.document.createElement("div").style
                  , t = function() {
                    var t, n = "webkitT,t,msT,MozT,OT".split(",");
                    for (i = 0,
                    len = n.length; len > i; i++) {
                        var t = n[i] + "ransform";
                        if (t in e)
                            return n[i].substr(0, n[i].length - 1)
                    }
                    return !1
                }()
                  , n = function(e) {
                    return "" === t ? e : (e = e.charAt(0).toUpperCase() + e.substr(1),
                    t + e)
                }
                ;
                return {
                    prefixStyle: n,
                    cssPrefix: t ? "-" + t.toLowerCase() + "-" : "",
                    propPrefix: t
                }
            }()
              , y = null
              , _ = null
              , A = null
              , T = null
              , S = null
              , k = null
              , q = null
              , I = null
              , E = null
              , M = 0
              , L = 0
              , O = function() {
                function e() {
                    if (!(i.querySelectorAll("svg").length > c)) {
                        var e = a[Math.floor(Math.random() * a.length)]
                          , t = l.replace("$fill$", "#" + e);
                        this.startx = n / 2 - 10,
                        this.pos = Math.random() * Math.PI,
                        this.hz = 20 * Math.random() + 10,
                        this.zf = 15 * Math.random() + 10,
                        this.opacityStart = 10 * Math.random() + 10,
                        this.y = 0,
                        i.insertAdjacentHTML("beforeend", t),
                        this.$el = i.lastChild,
                        this.setStyle(),
                        this.run()
                    }
                }
                q || (y.insertAdjacentHTML("beforeend", '<div class="hj_praiseArea"><div class="bubble"></div></div>'),
                q = y.querySelector(".hj_praiseArea"));
                var i = q.querySelector(".bubble")
                  , n = parseInt(t(i, "width").replace("px", ""), 10) || 0
                  , o = parseInt(t(i, "height").replace("px", ""), 10) || 0
                  , a = ["FF5D31", "FF7043", "FF9800", "F9A825", "F57F17", "FFCA28"]
                  , r = 32
                  , s = 26
                  , c = 30
                  , l = '<svg viewBox="-1 -1 27 27"><path class="svgpath" style="fill:$fill$;stroke: #FFF; stroke-width: 1px;" d="M11.29,2C7-2.4,0,1,0,7.09c0,4.4,4.06,7.53,7.1,9.9,2.11,1.63,3.21,2.41,4,3a1.72,1.72,0,0,0,2.12,0c0.79-.64,1.88-1.44,4-3,3.09-2.32,7.1-5.55,7.1-9.94,0-6-7-9.45-11.29-5.07A1.15,1.15,0,0,1,11.29,2Z"/></svg>';
                e.prototype.setStyle = function() {
                    var e = this.startx + Math.sin(this.pos + this.y / this.hz) * this.zf
                      , i = 1 - Math.max((this.y - this.opacityStart) / (o - this.opacityStart), 0)
                      , n = Math.min(2 * this.y / o * (r - s) + s, r);
                    t(this.$el, j.cssPrefix + "transform", "translateX(" + e + "px) translateY(" + -this.y + "px)"),
                    t(this.$el, "opacity", i),
                    t(this.$el, "width", n + "px"),
                    t(this.$el, "height", n + "px")
                }
                ,
                e.prototype.run = function() {
                    var e = this
                      , t = 20 * Math.random() + 10
                      , i = (new Date).getTime()
                      , n = setInterval(function() {
                        var a = (new Date).getTime();
                        e.y += Math.round((a - i) / t),
                        i = a,
                        e.setStyle(),
                        e.y >= o && (e.$el.parentNode.removeChild(e.$el),
                        clearTimeout(n))
                    }, t)
                }
                ,
                new e
            }
              , P = function(e) {
                m(),
                e = K(e),
                T.insertAdjacentHTML("beforeend", '<li class="type_notice"><span>系统通知</span><span>' + e + "</span></li>"),
                s()
            }
              , C = function(e) {
                m();
                console.log(e)
                var t = parseInt(e["extends"].userid, 10)
                  , i = K(e["extends"].nickname)
                  , n = K(e.text)
                  , o = X(e).level
                  , a = X(e).stage;
                T.insertAdjacentHTML("beforeend", '<li class="type_msg"><em class="level_info level_' + a + '">' + o + '</em><span class="color_' + f(t) + '">' + i + "：</span><span>" + n + "</span></li>"),
                s()
            }
              , D = function(e) {
                if (!E) {
                    y.insertAdjacentHTML("beforeend", '<div class="hj_popMsgArea"></div>'),
                    E = y.querySelector(".hj_popMsgArea");
                    var t = new Z({
                        container: E
                    })
                      , i = new Z({
                        container: E,
                        index: 1
                    })
                }
                L++,
                L % 2 == 0 ? i.add(e) : t.add(e)
            }
              , $ = function(e) {
                console.log(e)
                m();
                var t = parseInt(e["extends"].userid, 10)
                  , i = K(e["extends"].nickname)
                  , n = T.querySelector("li:last-child")
                  , o = X(e).level
                  , a = X(e).stage;
                if (n && n.classList.contains("type_in")) {
                    var r = T.querySelector("li:last-child");
                    r.parentNode.removeChild(r)
                }
                var s = f(t);
                T.insertAdjacentHTML("beforeend", '<li class="type_in"><em class="level_info level_' + a + '">' + o + '</em><span class="color_' + s + '">' + i + "</span><span>来了</span></li>")
            }
              , N = function(e) {
                m(),
                ee.add(e)
            }
              , U = function() {
                m(),
                T.insertAdjacentHTML("beforeend", '<li class="type_in"><span>游客</span><span>来了</span></li>'),
                s()
            }
              , H = function(e) {
                m(),
                T.insertAdjacentHTML("beforeend", '<li class="type_out"><span>有人</span><span>出去了</span></li>'),
                s()
            }
              , F = function(e) {
                m();
                var t = (parseInt(e["extends"].userid, 10),
                K(e["extends"].nickname))
                  , i = X(e).level
                  , n = X(e).stage;
                T.insertAdjacentHTML("beforeend", '<li class="type_follow"><em class="level_info level_' + n + '">' + i + "</em><span>" + t + "</span><span>关注了播主</span></li>"),
                s()
            }
              , G = function(e) {
                    console.log(e);
                if (y.querySelector(".hjPopGift") || y.insertAdjacentHTML("beforeend", d()),
                48 == e.type && (e["extends"].giftinfo = {
                    giftid: "1000",
                    giftname: "校园之星",
                    amount: "1",
                    icon: "http://static.huajiao.com/huajiao/gift/activity_gift.png",
                    pic: "http://static.huajiao.com/huajiao/gift/activity_gift.png",
                    content: "",
                    relativeInfo: {
                        repeatId: "@" + +new Date,
                        repeatNum: 1,
                        property: {
                            repeatGift: 1,
                            effectGift: 0
                        }
                    }
                }),
                e["extends"].sender)
                    var t = parseInt(e["extends"].sender.uid, 10)
                      , i = K(e["extends"].sender.nickname)
                      , n = K(e["extends"].sender.avatar);
                else
                    var t = parseInt(e["extends"].userid, 10)
                      , i = K(e["extends"].nickname)
                      , n = K(e["extends"].avatar);
                var r = K(e["extends"].giftinfo.giftid)
                  , c = K(e["extends"].giftinfo.giftname)
                  , l = K(e["extends"].giftinfo.icon)
                  , u = K(e["extends"].giftinfo.pic)
                  , p = X(e).level
                  , f = X(e).stage;
                T.insertAdjacentHTML("beforeend", '<li class="type_gift"><em class="level_info level_' + f + '">' + p + "</em><span>" + i + "</span><span>送了一个" + c + '<i class="icon-gift" style="background-image:url(' + l + ')"></i></span></li>'),
                s();
                var h = e["extends"].giftinfo.relativeInfo.property.repeatGift || 0
                  , m = e["extends"].giftinfo.relativeInfo.property.effectGift || 0
                  , g = e["extends"].giftinfo.relativeInfo.repeatId
                  , v = e["extends"].giftinfo.relativeInfo.repeatNum
                  , w = {};
                m && 1 == m ? (w = {
                    id: t,
                    name: i,
                    avatar: n,
                    giftType: 2,
                    giftId: r,
                    giftName: c,
                    img: u
                },
                a(w)) : h && 1 == h ? (w = {
                    id: t,
                    name: i,
                    avatar: n,
                    giftType: 1,
                    giftId: r,
                    giftName: c,
                    img: l,
                    repeatId: g,
                    repeatNum: v,
                    level: p,
                    stage: f
                },
                o(w)) : w = null
            }
              , z = null
              , R = []
              , W = {}
              , Y = 500
              , V = null
              , B = null
              , Q = []
              , J = null
              , K = function() {
                var e = {
                    "<": "&#60;",
                    ">": "&#62;",
                    '"': "&#34;",
                    "'": "&#39;",
                    "&": "&#38;"
                }
                  , t = /&(?![\w#]+;)|[<>"']/g
                  , i = function(t) {
                    return e[t]
                }
                ;
                return function(e) {
                    return String(e || "").replace(t, i)
                }
            }()
              , X = function(e) {
                var t = 1;
                e && e["extends"] && e["extends"].sender ? t = K(e["extends"].sender.level) : e && e["extends"] && e["extends"].level && (t = K(e["extends"].level));
                var i = t - 1
                  , n = function(e, t) {
                    var t = t || 10;
                    return Math.floor(Number(e) / t) + 1
                }
                  , o = 1;
                return o = 40 >= i ? n(i, 10) : n(i - 40, 5) + 4,
                {
                    level: t,
                    stage: o
                }
            }
            ;
            !function() {
                _ = e(".hjPopbox"),
                y = _.parentNode
            }();
            var Z = function() {
                function e(e) {
                    var e = e || {};
                    this.container = e.container || E,
                    this.duration = e.duration || 5e3,
                    this.index = e.index || 0,
                    this.list = []
                }
                return e.prototype.renderTpl = function(e, t) {
                    var i = X(e).level
                      , n = X(e).stage;
                    return '<div class="hj_popMsg_line hj_popMsg_line' + t + '"><div class="hj_popMsg_avator"><img src="' + K(e["extends"].avatar) + '"></div><div class="hj_popMsg_info"><div class="hj_popMsg_user">' + K(e["extends"].nickname) + '<em class="level_info level_' + n + '">' + i + '</em></div><div class="hj_popMsg_text">' + K(e.text) + "</div></div></div>"
                }
                ,
                e.prototype.add = function(e) {
                    this.list.push(e),
                    this.run()
                }
                ,
                e.prototype.run = function() {
                    var e = this;
                    if (0 != this.list.length && !this.running) {
                        this.running = !0;
                        var i = this.list.pop()
                          , n = this.renderTpl(i, this.index);
                        this.container.insertAdjacentHTML("beforeend", n);
                        var o = this.container.lastChild
                          , a = parseInt(t(o, "width"), 10)
                          , r = document.body.offsetWidth
                          , s = -a
                          , c = r + a
                          , l = c / r * this.duration;
                        t(o, "right", s + "px"),
                        t(o, j.cssPrefix + "transition", j.cssPrefix + "transform " + l + "ms linear"),
                        t(o, j.cssPrefix + "transform", "translateX(" + -c + "px)"),
                        o.addEventListener(j.prefixStyle("transitionEnd"), function() {
                            e.running = !1,
                            o.parentNode.removeChild(o),
                            e.run()
                        }, !1)
                    }
                }
                ,
                e
            }()
              , ee = function() {
                function e() {
                    y.insertAdjacentHTML("beforeend", '<div class="hj_vipMemberArea"></div>'),
                    I = y.querySelector(".hj_vipMemberArea"),
                    I.insertAdjacentHTML("beforeend", '<div class="hj_vip_popin"><em class="hj_vip_level">1级</em><span class="hj_vip_name"></span>进入了房间！</div>'),
                    $vipEl = I.querySelector(".hj_vip_popin"),
                    c = $vipEl.querySelector(".hj_vip_level"),
                    l = $vipEl.querySelector(".hj_vip_name"),
                    s = !0,
                    n()
                }
                function i(t) {
                    s || e(),
                    a.push(t),
                    o()
                }
                function n() {
                    $vipEl.addEventListener(j.prefixStyle("transitionEnd"), function() {
                        $vipEl.classList.contains("anim") && setTimeout(function() {
                            t($vipEl, j.cssPrefix + "transform", "none"),
                            $vipEl.classList.remove("anim")
                        }, d)
                    }, !1)
                }
                function o() {
                    if (0 != a.length && !r) {
                        var e = a.pop();
                        c.innerText = X(e).level + "级",
                        l.innerText = K(e["extends"].nickname);
                        var i = $vipEl.getBoundingClientRect().width + 14
                          , n = -i;
                        $vipEl.classList.add("anim"),
                        t($vipEl, "left", n + "px"),
                        t($vipEl, j.cssPrefix + "transition", j.cssPrefix + "transform " + u + "ms linear"),
                        t($vipEl, j.cssPrefix + "transform", "translateX(" + i + "px)")
                    }
                }
                var a = []
                  , r = !1
                  , s = !1
                  , c = null
                  , l = null
                  , u = 500
                  , d = 2500;
                return {
                    add: i
                }
            }();
            return w.toggleChat = p,
            w.addPraise = O,
            w.addNotice = P,
            w.addMessage = C,//消息
            w.memberIn = $,//进入房间
            w.vipMemberIn = N,//vip进入
            w.visitorIn = U,//游客进入
            w.memberOut = H,//离开
            w.follow = F,
            w.gift = G,//礼物
            w.popMessage = D,
            w.showChatPop = v,
            w
        }()
    }
    , {}],
    11: [function(e, t, i) {
        t.exports = function() {
            function e() {
                var e = (new Date).getTime().toString();
                return e += parseInt(1e6 * Math.random(), 10).toString(),
                "999" + e
            }
            function t(e, t, n, o) {
                n = n || function() {}
                ,
                o = o || function() {}
                ;
                var a = "jsonp" + i.uniqueId();
                window[a] = function(e) {
                    n(e);
                    try {
                        delete window[a]
                    } catch (t) {}
                }
                ,
                t.callback = "window." + a;
                var r = document.createElement("script")
                  , s = document.getElementsByTagName("head")[0];
                r.onreadystatechange = r.onload = function() {
                    (!r.readyState || /loaded|complete/i.test(r.readyState)) && (r.onreadystatechange = r.onload = null ,
                    r.parentNode.removeChild(r))
                }
                ,
                r.onerror = function() {
                    r.onerror = null ,
                    r.parentNode.removeChild(r),
                    o()
                }
                ,
                r.type = "text/javascript",
                s.appendChild(r),
                r.src = e + "?" + i.param(t) + "&_=" + Math.random()
            }
            var i = {
                uniqueId: function() {
                    var e = +new Date + "_"
                      , t = 0;
                    return function() {
                        return e + ++t
                    }
                }(),
                param: function(e) {
                    if (!e)
                        return "";
                    var t = [];
                    for (var i in e)
                        e.hasOwnProperty(i) && t.push(i + "=" + encodeURIComponent(e[i]));
                    return t.join("&")
                }
            };
            return {
                getUid: e,
                jsonp: t
            }
        }()
    }
    , {}],
    12: [function(e, t, i) {
        t.exports = function() {
            function e(e) {
                var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
                  , i = window.location.search.substr(1).match(t);
                return null != i ? decodeURIComponent(i[2]) : ""
            }
            function t(t, i) {
                var n, o, a, r = i.attr("href");
                for (o = 0,
                n = t.length; n > o; o++)
                    a = t[o],
                    "" != e(a) && (r = r.indexOf("?") > -1 ? r + "&" + a + "=" + e(a) : r + "?" + a + "=" + e(a));
                window.location.href = r
            }
            function i() {
                $("body").on("click", "a", function(e) {
                    var i = $(this)
                      , n = i.attr("href")
                      , o = /(http)|(https)|(\/)/g;
                    return n && n.match(o) ? (t(["qd", "reference"], i),
                    !1) : !0
                })
            }
            return {
                init: i
            }
        }()
    }
    , {}],
    13: [function(e, t, i) {
        t.exports = function() {
            var e = null
              , t = null
              , i = {
                tpl: {
                    mark: function() {
                        return '<div id="dialog_mark" class="modal-mark fade"></div>'
                    },
                    bubble: function(e) {
                        var t = '<div class="modal ' + e.theme + '" style="width:' + e.width + 'px"><div class="modal-body">{{#content}}</div></div>';
                        return t
                    }
                },
                bubble: function(i) {
                    i = i || {};
                    var n = {
                        mark: !1,
                        text: i.text || "提示内容",
                        theme: i.theme || "",
                        width: i.width || 150,
                        content: ""
                    }
                      , o = this.tpl.bubble(n)
                      , a = this;
                    a.drawingTpl(o, n),
                    a.modalCenter(),
                    t && clearTimeout(t),
                    t = setTimeout(function() {
                        e = $(".modal"),
                        e.hide()
                    }, 3e3)
                },
                drawingTpl: function(t, i) {
                    i.content = "<p>" + i.text + "</p>",
                    e = $(".modal"),
                    i.html && (i.content = i.html),
                    this.showMark(i.mark),
                    e.length && e.remove(),
                    t = t.replace(/{{#(\w+)}}/g, function(e, t) {
                        return i[t] || ""
                    }),
                    $(t).appendTo(document.body)
                },
                modalCenter: function() {
                    var e = $(".modal")
                      , t = $(window);
                    document.documentElement.scrollTop || document.body.scrollTop;
                    e.show().css({
                        top: (t.height() - e.height()) / 2 + "px",
                        left: (t.width() - e.width()) / 2 + "px"
                    })
                },
                bindEvent: function(t) {
                    e = $(".modal"),
                    $(window).on("resize", function() {
                        setTimeout(function() {
                            i.modalCenter()
                        }, 30)
                    })
                },
                showMark: function(e) {
                    if (e) {
                        var t = $("#dialog_mark");
                        t.length ? t.show().addClass("in") : $(this.tpl.mark()).appendTo(document.body).show().addClass("in")
                    }
                }
            };
            return i
        }()
    }
    , {}],
    14: [function(e, t, i) {
        t.exports = function() {
            function t(e) {
                var t = o("qd")
                  , n = a[t] || 6e4;
                r.init({
                    bindCallback: function() {
                        i = !1,
                        s = !1
                    }
                }),
                e.on("timeupdate", function() {
                    if (!s && -1 !== n) {
                        var e = (new Date).getTime();
                        i ? e - i >= n && (s = !0,
                        r.show()) : i = e
                    }
                })
            }
            var i, n = e("../../../common/js/module/huajiaoUtils"), o = n.getParamFormUrl, a = {
                liulanqi5: 12e4,
                huajiao_wifi: -1
            }, r = function() {
                function e(e) {
                    i(a),
                    t(),
                    n(e.bindCallback)
                }
                function t() {
                    if (r)
                        throw "download_dialog has been init";
                    var e = document.createElement("div");
                    e.className = "popup-dialog",
                    e.id = "downloadPopup",
                    e.innerHTML = o,
                    r = e,
                    document.body.appendChild(e)
                }
                function i(e) {
                    var t = document.getElementsByTagName("head")[0]
                      , i = document.createElement("style");
                    i.type = "text/css",
                    i.styleSheet ? i.styleSheet.cssText = a : i.appendChild(document.createTextNode(a)),
                    t.appendChild(i)
                }
                function n(e) {
                    r && r.addEventListener("click", function(t) {
                        var i = t.target.className;
                        i.indexOf("popup-btn") > -1 || (r.style.display = "none",
                        e && e())
                    }, !1)
                }
                var o = '<div class="popup-wrap"><div class="popup"><a class="popup-btn js_hj_download" data-download-id="h5_live" class="javascript:void(0);">立即打开</a></div></div>'
                  , a = ".popup-dialog{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.6);z-index:1002;display:none;}.popup-wrap{height:100%;display:-webkit-box;-webkit-box-align:center;-webkit-box-pack:center}.popup{width:250px;height:320px;position:relative;background:#ff4487 url(http://p9.qhimg.com/d/inn/2064fff6/share_pop.png) no-repeat;background-size:100% auto;-webkit-background-size:100% auto;border-radius:10px;-webkit-border-radius:10px}.popup-btn{position:absolute;bottom:20px;left:15px;display:block;margin:0 auto;width:220px;height:40px;border-radius:6px;-webkit-border-radius:6px;background:#000;line-height:40px;color:white;text-align:center;font-size:16px;}"
                  , r = null
                  , s = function() {
                    if (!r)
                        throw "use init to initDialog first";
                    r.style.display = "block"
                }
                ;
                return {
                    init: e,
                    show: s
                }
            }(), s = !1;
            return {
                init: t
            }
        }()
    }
    , {
        "../../../common/js/module/huajiaoUtils": 2
    }],
    15: [function(e, t, i) {
        t.exports = function() {
            function t() {
                var e = $(".down_layer")
                  , t = $(".pop_down");
                e.on("click", function() {
                    e.fadeOut(300),
                    t.fadeOut(300)
                })
            }
            function i(e, t, i) {
                i = i || a,
                $.ajax({
                    url: e,
                    data: t,
                    type: "GET",
                    dataType: "jsonp",
                    jsonp: "callback",
                    cache: !1
                }).done(function(e) {
                    n(e, i)
                }).fail(function(e) {
                    o(e, i)
                })
            }
            function n(e, t) {
                t(e ? 0 === e.code ? {
                    code: 0,
                    msg: "success",
                    data: e.data
                } : {
                    code: e.code,
                    msg: e.msg
                } : {
                    code: 90001,
                    msg: "ajax return null"
                })
            }
            function o(e, t) {
                t(e)
            }
            function a(e) {
                0 === e.code ? console.debug(JSON && JSON.stringify(e.data)) : console.warn("code:" + e.code + ",msg" + e.msg)
            }
            function r(e) {
                var t = e.liveid
                  , n = a
                  , o = $(".js_follow_tip");
                e.func && "function" == typeof e.func && (n = e.func);
                var r = function(e) {
                    var t;
                    try {
                        t = JSON.parse(e)
                    } catch (i) {
                        t = e
                    }
                    return "0000" != t.code ? (u.isSuccess = !1,
                    u.errorMessage = {
                        code: e.code,
                        msg: e.msg
                    },
                    10002 == +t.code ? (o.show(),
                    setTimeout(function() {
                        o.hide(400)
                    }, 500),
                    !1) : (l.bubble({
                        text: "请下载花椒app并注册或登录",
                        theme: "theme-bubble",
                        width: 225
                    }),
                    !1)) : (u.isSuccess = !0,
                    void n(u))
                }
                  , s = "http://h.huajiao.com/api/";
                i(s + "addFollow", {
                    liveid: t
                }, r)
            }
            function s() {
                function e(e) {
                    t.show(),
                    setTimeout(function() {
                        t.hide(400)
                    }, 500),
                    d.follow.attr("data-follow", "1"),
                    d.follow.text("已关注")
                }
                var t = $(".js_follow_tip")
                  , i = $(this)
                  , n = i.data("id") || _DATA.feed.feed.relateid;
                return isFollow = i.data("follow"),
                isFollow ? (t.show(),
                setTimeout(function() {
                    t.hide(400)
                }, 500),
                !1) : void (window._DATA.isLogin ? r({
                    liveid: n,
                    func: e
                }) : l.bubble({
                    text: "请下载花椒app并注册或登录",
                    theme: "theme-bubble",
                    width: 225
                }))
            }
            function c() {
                d.follow.on("click", s),
                t()
            }
            var l = (e("../../../common/js/module/huajiaoLog"),
            e("./dialog"))
              , u = {
                isSuccess: !1
            }
              , d = {
                follow: $(".btn_focus")
            };
            return c
        }()
    }
    , {
        "../../../common/js/module/huajiaoLog": 1,
        "./dialog": 13
    }],
    16: [function(e, t, i) {
        t.exports = function() {
            function t(e, t, i) {
                i = i || o,
                $.ajax({
                    url: e,
                    data: t,
                    type: "POST",
                    xhrFields: {
                        withCredentials: !0
                    },
                    cache: !1
                }).done(function(e) {
                    a(e, i)
                }).fail(function(e) {
                    r(e, i)
                })
            }
            function i(e, t, i) {
                i = i || o,
                $.ajax({
                    url: e,
                    data: t,
                    type: "GET",
                    xhrFields: {
                        withCredentials: !0
                    },
                    cache: !1
                }).done(function(e) {
                    a(e, i)
                }).fail(function(e) {
                    r(e, i)
                })
            }
            function n(e, t, i) {
                i = i || o,
                $.ajax({
                    url: e,
                    data: t,
                    type: "GET",
                    dataType: "jsonp",
                    jsonp: "callback",
                    cache: !1
                }).done(function(e) {
                    a(e, i)
                }).fail(function(e) {
                    r(e, i)
                })
            }
            function o(e) {
                0 == e.code ? s.debug(JSON && JSON.stringify(e.data)) : s.warn("code:" + e.code + ",msg" + e.msg)
            }
            function a(e, t) {
                t(e ? 0 == e.errno ? {
                    code: 0,
                    msg: "success",
                    data: e.data
                } : {
                    code: e.errno,
                    msg: e.errmsg
                } : {
                    code: 90001,
                    msg: "ajax return null"
                })
            }
            function r(e, t) {
                t({
                    code: 90002,
                    msg: "ajax fail"
                })
            }
            var s = e("../../../common/js/module/huajiaoLog");
            return {
                post: t,
                get: i,
                jsonp: n
            }
        }()
    }
    , {
        "../../../common/js/module/huajiaoLog": 1
    }],
    17: [function(e, t, i) {
        t.exports = function() {
            function t(e) {
                var t = $(this).attr("data-download-id")
                  , s = $(this).data("open")
                  , c = (i().device,
                i().os)
                  , u = n(t, c, e)
                  , d = u.url
                  , p = u.hjUrl
                  , f = u.dotMark
                  , h = (l.isWeixin(),
                l.isWeibo());
                return h && "ios" === c ? (r(c),
                !1) : !l.isIOS9() || "h5_live_open" !== t && "h5_replay_open" !== t || 1 != s ? (o(f, e),
                void a(d, t, p, s)) : !0
            }
            function i() {
                var e;
                return l.isMobileDevice() ? (e = "mb",
                l.isIosDevice() ? os = "ios" : os = "android") : e = "pc",
                {
                    device: e,
                    os: os
                }
            }
            function n(e, t, i) {
                var n, o, a, r, s = "http://www.huajiao.com/dl.php", c = "http://huajiao.dl.keniub.com/app/android/apk/", u = "_release.apk", d = "http://huajiao.dl.keniub.com/app/android/apk/huajiao_fenxiang_release.apk", p = "http://qd.huajiao.com/index.php?id=Tq25M691", f = "ios" == t ? p : d, h = {
                    wx: "https://lnk0.com/UxhMtg",
                    circle: "https://lnk0.com/dwBtg8",
                    qq: "https://lnk0.com/QdcQx9",
                    qzone: "https://lnk0.com/xt8QFt",
                    weibo: "https://lnk0.com/oc4kEp",
                    minguo: "https://lnk0.com/1okQJt",
                    erweima: "https://lnk0.com/IxZRx1",
                    shichangerweima: "https://lnk0.com/AhkANp"
                }, m = {
                    erweima: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1338997682053",
                    shichangerweima: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1338997886640",
                    circle: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1335381160427",
                    wx: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1335380772497",
                    minguo: "http://a.app.qq.com/o/simple.jsp?pkgname=com.huajiao&ckey=CK1338484786652"
                }, g = l.getParamFormUrl("qd"), v = l.getParamFormUrl("reference");
                switch (g = "" !== l.getParamFormUrl("qd") ? g : v,
                o = "ios" == t ? "huajiao_" + e + "_ios" : "huajiao_" + e + "_android",
                e) {
                case "h5_live_open":
                    n = _DATA.author.uid && _DATA.feed.feed.relateid && "" !== _DATA.feed.feed.relateid && "" !== _DATA.author.uid ? l.isIOS9() ? "http://share.huajiao.com/download/live?liveid=" + _DATA.feed.feed.relateid + "&userid=" + _DATA.author.uid + "&qd=" + g : "huajiao://huajiao.com/goto/live?liveid=" + _DATA.feed.feed.relateid + "&userid=" + _DATA.author.uid : "ios" === t ? "huajiao://huajiao.com/goto/index" : "huajiao://web.huajiao";
                    break;
                case "h5_replay_open":
                    r = "ios" === t ? "huajiao://asdf/newreplay?replayid=" : "huajiao://huajiao.com/goto/replay?replayid=",
                    n = _DATA.author.uid && _DATA.feed.feed.relateid && "" !== _DATA.feed.feed.relateid && "" !== _DATA.author.uid ? l.isIOS9() ? "http://share.huajiao.com/download/replay?replayid=" + _DATA.feed.feed.relateid : r + _DATA.feed.feed.relateid + "&userid=" + _DATA.author.uid : "ios" === _os ? "huajiao://huajiao.com/goto/index" : "huajiao://web.huajiao";
                    break;
                default:
                    f && "" !== f || (f = s)
                }
                return "" !== g && "ios" === t && (f = h[g]),
                l.isWeixin() && "ios" === t && (f = s),
                "" !== g && "android" === t ? l.isWeixin() ? (a = encodeURI(n),
                f = "h5_live_open" === e || "h5_replay_open" === e ? m[g] + "&android_schema=" + a : m[g]) : f = c + g + u : "" == g && "android" === t && (f = s),
                {
                    url: f || s,
                    hjUrl: n || "",
                    dotMark: o
                }
            }
            function o(e, t) {
                if (monitor) {
                    var i = t.target || t
                      , n = {
                        cId: e,
                        c: monitor.util.getText(i)
                    };
                    monitor.log(n, "click")
                } else
                    window.console && console.log("没找到monitor")
            }
            function a(e, t, i) {
                var n, o, a = (l.isIosDevice() ? "ios" : "android",
                l.isIOS9() ? 2e3 : 1e3);
                if (e) {
                    if (l.is360view() && l.isAndroidDevice()) {
                        try {
                            MobileSafeJsInterface.openUrl('{url: "' + e + '", type=2}')
                        } catch (r) {}
                        return !1
                    }
                    if (l.isSafe())
                        return e = "http://msoftdl.360.cn/mobilesafe/shouji360/360safe/neibu/ws_xxl_release.apk",
                        window.location.href = e,
                        !1;
                    if ("h5_live_open" !== t && "h5_replay_open" !== t)
                        return window.location.href = e,
                        !1;
                    if (("h5_live_open" !== t || "h5_replay_open" !== t) && l.isIosDevice() && 1 != open)
                        return window.location.href = e,
                        !1;
                    o = new Date,
                    n = setTimeout(function() {
                        var t = new Date;
                        a + 500 > t - o ? window.location.href = e : window.close()
                    }, a),
                    $(window).on("visibilitychange webkitvisibilitychange pagehide", function() {
                        clearTimeout(n)
                    }, !1),
                    "" !== i && (window.location.href = i)
                }
            }
            function r(e) {
                var t;
                l.isWeixin() ? t = "http://static.huajiao.com/huajiao/web/static/images/popbox-ios.jpg" : l.isWeibo() && (t = "http://static.huajiao.com/huajiao/web/static/images/popbox-wb.png");
                var i = $(".js_openPopbox")
                  , n = '<div class="openPopbox js_openPopbox" style="position: fixed;width: 100%;height: 100%;left: 0;top: 0;background: rgba(0, 0, 0, 0.4) url(' + t + ') no-repeat 0 0;-webkit-background-size: 100% auto;background-size: 100% auto;z-index: 1010;display: none;"></div>';
                0 == i.length && ($("body").append(n),
                i = $(".js_openPopbox")),
                i.unbind().click(function() {
                    i.fadeOut(300)
                }),
                i.fadeIn(300)
            }
            function s() {
                var e = $("<script>");
                e.attr("src", "http://s4.qhimg.com/static/fadd33004f7a80af.js"),
                $("body").append(e)
            }
            function c() {
                var e, o = $(".js_hj_download").attr("data-download-id"), a = l.getParamFormUrl("qd"), r = l.getParamFormUrl("reference"), c = {
                    wf: 1,
                    liulanqi1: 1,
                    liulanqi2: 1,
                    huajiao_llqzbpd: 1,
                    liulanqi5: 1,
                    sjws_qita: 1,
                    ws_gntj: 1,
                    ws_grh5: 1,
                    huajiao_zb: 1,
                    ws_xxl: 1,
                    ws_xxlqz: 1
                };
                return a = "" !== a ? a : r,
                l.isSz() ? (s(),
                !1) : ($("body").on("click", ".js_hj_download", t),
                l.isIOS9() && $(".js_hj_download").each(function() {
                    var e = $(this)
                      , t = e.data("open")
                      , o = e.attr("data-download-id")
                      , a = (i().device,
                    i().os)
                      , r = n(o, a);
                    return 1 != t ? !1 : void e.attr("href", r.hjUrl)
                }),
                void ("h5_live_open" === o && l.isMobileDevice() && !c[a] && (e = "huajiao://huajiao.com/goto/live?liveid=" + _DATA.feed.feed.relateid + "&userid=" + _DATA.author.uid,
                window.location.href = e)))
            }
            var l = e("./utils");
            return {
                init: c
            }
        }()
    }
    , {
        "./utils": 23
    }],
    18: [function(e, t, i) {
        t.exports = function() {
            function t() {
                var e = c.image;
                return e && e.indexOf("-") > 0 && e.indexOf("image.huajiao.com") > 0 ? e = e.split("-")[0] + "-360_640.jpg" : e && e.indexOf("-") < 0 && e.indexOf("image.huajiao.com") > 0 && (e = e.split(".jpg")[0] + "-360_640.jpg"),
                e
            }
            function i() {
                var e = c.width
                  , t = c.height
                  , i = s.getInnerWidth();
                return i * t / e
            }
            function n() {
                u.on("timeupdate", function() {
                    var e = this.get_attributes("current_time")
                      , t = d.is(":hidden");
                    e > 0 && t && "liveplay" === p && d.show()
                })
            }
            function o(e) {
                var n = c.type
                  , o = ""
                  , a = $(".h5_player").get(0)
                  , r = s.isAndroidDevice() ? !1 : !0
                  , d = {
                    autoplay: r,
                    mid: s.getMid(),
                    controls: !1,
                    height: i(),
                    poster: t()
                };
                return l(c),
                2 == n ? (p = "replay",
                o = c.m3u8,
                u = new e(o,a,d)) : 4 == n ? (p = "mp4",
                o = c.mp4,
                u = new e(o,a,d)) : 1 == n && (p = "liveplay",
                o = c.sn,
                s.isAndroidDevice() ? d.autoplay = !1 : d.autoplay = !0,
                u = new e(o,a,d)),
                u
            }
            function a() {
                var e, t = $(".js_poster").find("img"), i = c.image;
                e = i.split(".jpg")[0] + "-360_640.jpg",
                t.attr("src", e)
            }
            function r(e) {
                return a(),
                o(e),
                n(),
                u
            }
            var s = (e("../../../common/js/module/huajiaoLog"),
            e("../../../common/js/module/huajiaoUtils"))
              , c = e("../data/feedData")
              , l = (e("../data/userData"),
            e("./resizeLiving").liveMobile)
              , u = null
              , d = $(".hjPopbox")
              , p = "";
            return {
                init: r
            }
        }()
    }
    , {
        "../../../common/js/module/huajiaoLog": 1,
        "../../../common/js/module/huajiaoUtils": 2,
        "../data/feedData": 3,
        "../data/userData": 6,
        "./resizeLiving": 20
    }],
    19: [function(e, t, i) {
        t.exports = function() {
            function t() {
                c = $(".js_recommendArea"),
                l = $(".js_recommendArea ul"),
                u = $(".js_backtop"),
                d = $(".backtopArea"),
                p = $(".weixinArea")
            }
            function i() {
                r.isWeixin() ? p.show() : p.hide(),
                setTimeout(function() {
                    o(6)
                }, 500),
                r.isAndroidDevice() && r.isWeixin() && s && 1 == s.type && (p.hide(),
                d.hide()),
                r.isAndroidDevice() && r.isWeixin() && s && 2 == s.type && window.location.href.indexOf("replaytype") > 0 && (p.hide(),
                d.hide())
            }
            function n() {
                $(window).on("scroll", function() {
                    o()
                }),
                u.on("click", function(e) {
                    e.preventDefault(),
                    $("body,html").animate({
                        scrollTop: 0
                    }, 300)
                })
            }
            function o(e) {
                var t, i, n = l.find("li img[data-img-src]");
                if (0 === n.length)
                    return !1;
                i = e ? isNaN(e) ? 6 : parseInt(e, 10) : n.length;
                for (var o = 0; i > o; o++)
                    t = n.eq(o),
                    t.attr("src", t.attr("data-img-src")).removeAttr("data-img-src")
            }
            function a(e) {
                s = e,
                t(),
                i(),
                n()
            }
            var r = e("../../../common/js/module/huajiaoUtils")
              , s = null
              , c = null
              , l = null
              , u = null
              , d = null
              , p = null ;
            return {
                init: a
            }
        }()
    }
    , {
        "../../../common/js/module/huajiaoUtils": 2
    }],
    20: [function(e, t, i) {
        t.exports = function() {
            function t(e) {
                function t() {
                    c = a.getInnerWidth(),
                    s = $(window).height();
                    var e = c * d / u;
                    e > s && (e = s),
                    a.isPortrait() ? (r.height(s),
                    l.height(s)) : c >= 480 && (r.height(s),
                    l.height(s)),
                    l.css({
                        background: p
                    }),
                    (180 === window.orientation || 0 === window.orientation) && l.css("background-size", "cover")
                }
                o = e;
                var u = e.width
                  , d = e.height;
                r = $(".js_playerArea");
                var p = "url(" + n() + " ) no-repeat center center";
                window.addEventListener("orientationchange", i(t), !1),
                t()
            }
            function i(e) {
                return function() {
                    setTimeout(function() {
                        e()
                    }, 300)
                }
            }
            function n() {
                var e = o.image;
                return e && e.indexOf("-") > 0 && e.indexOf("image.huajiao.com") > 0 ? e = e.split("-")[0] + "-360_640.jpg" : e && e.indexOf("-") < 0 && e.indexOf("image.huajiao.com") > 0 && (e = e.split(".jpg")[0] + "-360_640.jpg"),
                e
            }
            var o, a = e("../../../common/js/module/huajiaoUtils"), r = null , s = a.getInnerHeight(), c = a.getInnerWidth(), l = ($(".js_top"),
            $(".userinfo"),
            $(".download"),
            $(".mask_floor"));
            return {
                liveMobile: t
            }
        }()
    }
    , {
        "../../../common/js/module/huajiaoUtils": 2
    }],
    21: [function(e, t, i) {
        t.exports = function() {
            function e(e) {
                e && (f.type = e.type || "custom",
                f.id = e.id,
                f.funcs = e.funcs || {},
                "live" === f.type ? t() : "replay" === f.type ? i() : n(e))
            }
            function t() {
                o(f.id, "live")
            }
            function i() {
                o(f.id, "replay")
            }
            function n(e) {
                e.documents && (f.documents.title = e.documents.title,
                f.documents.pic = e.documents.pic,
                f.documents.link = e.documents.link),
                e.weibo ? (f.weibo.title = e.weibo.title,
                f.weibo.site = e.weibo.site,
                f.weibo.pic = e.weibo.pic,
                f.weibo.link = e.weibo.link) : (f.weibo.title = e.documents.title,
                f.weibo.pic = e.documents.pic,
                f.weibo.link = e.documents.link),
                e.weixin ? (f.weixin.title = e.weixin.title,
                f.weixin.desc = e.weixin.desc,
                f.weixin.pic = e.weixin.pic,
                f.weixin.link = e.weixin.link) : (f.weixin.title = e.documents.title,
                f.weixin.desc = e.documents.title,
                f.weixin.pic = e.documents.pic,
                f.weixin.link = e.documents.link),
                e.circle ? (f.circle.title = e.circle.title,
                f.circle.pic = e.circle.pic,
                f.circle.link = e.circle.link) : (f.circle.title = e.documents.title,
                f.circle.pic = e.documents.pic,
                f.circle.link = e.documents.link),
                e.qq ? (f.qq.title = e.qq.title,
                f.qq.desc = e.qq.desc,
                f.qq.pic = e.qq.pic,
                f.qq.link = e.qq.link) : (f.qq.title = e.documents.title,
                f.qq.pic = e.documents.pic,
                f.qq.link = e.documents.link),
                e.qqzone ? (f.qqzone.title = e.qqzone.title,
                f.qqzone.desc = e.qqzone.desc,
                f.qqzone.pic = e.qqzone.pic,
                f.qqzone.link = e.qqzone.link) : (f.qqzone.title = e.documents.title,
                f.qqzone.pic = e.documents.pic,
                f.qqzone.link = e.documents.link)
            }
            function o(e, t) {
                var i = [d, d, d, d, d]
                  , n = [{
                    relateid: e,
                    type: t,
                    kind: "weibo"
                }, {
                    relateid: e,
                    type: t,
                    kind: "wx"
                }, {
                    relateid: e,
                    type: t,
                    kind: "circle"
                }, {
                    relateid: e,
                    type: t,
                    kind: "qq"
                }, {
                    relateid: e,
                    type: t,
                    kind: "qzone"
                }]
                  , o = function(e, t, i, n, o) {
                    var a = e[0].data
                      , r = t[0].data
                      , s = i[0].data
                      , c = n[0].data
                      , u = o[0].data;
                    l("weibo", a),
                    l("weixin", r),
                    l("circle", s),
                    l("qq", c),
                    l("qqzone", u)
                }
                  , a = function(e) {
                    window.console && console.log("获取分享文案失败")
                }
                ;
                c(i, n, o, a)
            }
            function a() {
                var e = "http://system.huajiao.com/wx/getconfig"
                  , t = {}
                  , i = function(e) {
                    var t = e.data.config;
                    p.appId = t.appId,
                    p.timestamp = t.timestamp,
                    p.nonceStr = t.nonceStr,
                    p.signature = t.signature,
                    r(p)
                }
                  , n = function() {
                    window.console && console.log("获取微信分享配置信息失败")
                }
                ;
                window.wx ? s(e, t, i, n) : window.console && console.log("没有检测到微信js-sdk")
            }
            function r(e) {
                window.wx.config(e),
                window.wx.ready(function() {
                    window.wx.checkJsApi({
                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"],
                        success: function(e) {}
                    }),
                    window.wx.onMenuShareTimeline({
                        title: f.circle.title,
                        link: f.circle.link,
                        imgUrl: f.circle.pic
                    }),
                    window.wx.onMenuShareAppMessage({
                        title: f.weixin.title || document.title || "花椒直播",
                        desc: f.weixin.content,
                        link: f.weixin.link,
                        imgUrl: f.weixin.pic
                    }),
                    window.wx.onMenuShareQQ({
                        title: f.qq.title,
                        desc: f.qq.desc,
                        link: f.qq.link,
                        imgUrl: f.qq.pic
                    }),
                    window.wx.onMenuShareWeibo({
                        title: f.weibo.title,
                        desc: f.weibo.title,
                        link: f.weibo.link,
                        imgUrl: f.weibo.pic
                    }),
                    window.wx.onMenuShareQZone({
                        title: f.qqzone.title,
                        desc: f.qqzone.desc,
                        link: f.qqzone.link,
                        imgUrl: f.qqzone.pic
                    })
                })
            }
            function s(e, t, i, n) {
                $.ajax({
                    url: e,
                    data: t,
                    dataType: "jsonp"
                }).done(function(e) {
                    e && "0" == e.errno && i(e)
                }).fail(function(e) {
                    n(e)
                })
            }
            function c(e, t, i, n) {
                var o = {
                    url: e[0],
                    data: t[0],
                    dataType: "jsonp"
                }
                  , a = {
                    url: e[1],
                    data: t[1],
                    dataType: "jsonp"
                }
                  , r = {
                    url: e[2],
                    data: t[2],
                    dataType: "jsonp"
                }
                  , s = {
                    url: e[3],
                    data: t[3],
                    dataType: "jsonp"
                }
                  , c = {
                    url: e[4],
                    data: t[4],
                    dataType: "jsonp"
                };
                $.when($.ajax(o), $.ajax(a), $.ajax(r), $.ajax(s), $.ajax(c)).done(i).fail(n)
            }
            function l(e, t) {
                return t ? (f[e].title = t.title,
                f[e].content = t.content,
                f[e].pic = t.image,
                void (f[e].link = t.url)) : !1
            }
            var u = {}
              , d = "http://h.huajiao.com/share/get"
              , p = {
                debug: !1,
                appId: "",
                timestamp: 0,
                nonceStr: "",
                signature: "",
                jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
            }
              , f = {
                type: "custom",
                id: 0,
                documents: {
                    title: "花椒直播邀您一起看世界！",
                    pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                    link: "http://h.huajiao.com/l/finished"
                },
                weibo: {
                    title: "花椒直播邀您一起看世界！",
                    site: "花椒直播",
                    pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                    link: "http://h.huajiao.com/l/finished"
                },
                weixin: {
                    title: "花椒直播邀您一起看世界！",
                    desc: "",
                    pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                    link: "http://h.huajiao.com/l/finished"
                },
                circle: {
                    title: "花椒直播邀您一起看世界！",
                    pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                    link: "http://h.huajiao.com/l/finished"
                },
                qq: {
                    title: "花椒直播邀您一起看世界！",
                    desc: "",
                    site: "花椒直播",
                    pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                    link: "http://h.huajiao.com/l/finished"
                },
                qqzone: {
                    title: "花椒直播邀您一起看世界！",
                    desc: "",
                    site: "花椒直播",
                    pic: "http://static.huajiao.com/huajiao/web/static/images/default/logo_128_w_rod.png",
                    link: "http://h.huajiao.com/l/finished"
                },
                funcs: {
                    weibo: null ,
                    weixin: null ,
                    circle: null ,
                    qq: null ,
                    qqzone: null
                }
            };
            return u.init = function(t) {
                e(t),
                a()
            }
            ,
            u
        }()
    }
    , {}],
    22: [function(e, t, i) {
        t.exports = function() {
            var e = $(".tab-con span")
              , t = ($(".recom-content"),
            $(".recom-content .recom-con-list"));
            t.eq(0).show(),
            t.eq(1).hide(),
            e.on("touchend", function() {
                var i = $(this).index();
                e.eq(i).addClass("curr").siblings().removeClass("curr"),
                t.eq(i).show().siblings().hide()
            }),
            $(".js_other_hot").on("click", function(t) {
                var i = $(".js_playerArea").outerHeight() + $(".userinfo").outerHeight();
                return $(document).scrollTop(i),
                e.eq(0).trigger("touchend"),
                !1
            })
        }()
    }
    , {}],
    23: [function(e, t, i) {
        t.exports = function() {
            var e = function() {
                var e = {}
                  , t = navigator.userAgent.toLowerCase();
                return e.getParamFormUrl = function(e) {
                    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)","i")
                      , i = window.location.search.substr(1).match(t)
                      , n = "";
                    return i && (n = i[2]),
                    t = null ,
                    i = null ,
                    n || ""
                }
                ,
                e.isMobileDevice = function() {
                    var e = navigator.userAgent.toLowerCase();
                    return !!/(iphone|ios|android|mini|mobile|mobi|nokia|symbian|ipod|ipad|ws\s+phone|mqqbrowser|wp7|wp8|ucbrowser7|ucweb|360\s+aphone\s+browser)/i.test(e)
                }
                ,
                e.isIosDevice = function() {
                    var e = navigator.userAgent.toLowerCase()
                      , t = !!e.match(/\(i[^;]+;( U;)? cpu.+mac os x/)
                      , i = e.indexOf("iphone") > -1 || e.indexOf("Mac") > -1
                      , n = e.indexOf("ipad") > -1;
                    return !!(t || n || i)
                }
                ,
                e.isAndroidDevice = function() {
                    var e = navigator.userAgent.toLowerCase()
                      , t = e.indexOf("android") > -1 || e.indexOf("Linux") > -1;
                    return t
                }
                ,
                e.isWeixin = function() {
                    var e = navigator.userAgent.toLowerCase();
                    return "micromessenger" == e.match(/MicroMessenger/i)
                }
                ,
                e.is360view = function() {
                    var e = navigator.userAgent.toLowerCase();
                    return !!e.match(/360webview/g)
                }
                ,
                e.isSafe = function() {
                    return !!t.match(/mobilesafe\/business/gi)
                }
                ,
                e.isIOS9 = function() {
                    return navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ? Boolean(navigator.userAgent.match(/OS [9]_\d[_\d]* like Mac OS X/i)) : !1
                }
                ,
                e.isWeibo = function() {
                    return !!t.match(/weibo/i)
                }
                ,
                e.isSz = function() {
                    return !!t.match(/360appstore/i)
                }
                ,
                e
            }();
            return e
        }()
    }
    , {}]
}, {}, [7]);
