__d(function (g, r, i, a, m, e, d) {
    "use strict";
    r(d[0]).entrypointReady().then(() => i(d[1])())
}, 17104896, [15597573, 17104897]);
__d(function (g, r, i, a, m, e, d) {
    "use strict";

    function o() {
        var o, n;
        const t = null === (o = window) || void 0 === o ? void 0 : null === (n = o.performance) || void 0 === n ? void 0 : n.timing;
        return (null === t || void 0 === t ? void 0 : t.domComplete) ? Promise.resolve(t) : new Promise((o, n) => {
            const t = i(d[0]).add(window, 'load', () => {
                var s, l;
                const u = null === (s = window) || void 0 === s ? void 0 : null === (l = s.performance) || void 0 === l ? void 0 : l.timing;
                u ? o(u) : n(), t.remove()
            })
        })
    }

    function n(o, n) {
        i(d[1]).markerPoint(r(d[2]).IgWebQuickLogModule.EMBED_LOAD, o, '', t, n)
    }
    Object.defineProperty(e, '__esModule', {
        value: !0
    });
    const t = 0,
        s = i(d[3])(o => new Promise(n => {
            i(d[4]).getInstance().on(o, o => {
                n(Math.round(o.timestamp))
            })
        }));
    e.default = function () {
        const {
            offset: l
        } = r(d[5]).getHashPayload();
        return null == l ? Promise.reject() : Promise.all([o(), s('loading'), s('mounted')]).then(([o, s, u]) => {
            if (null == s || null == u) return;
            const c = o.navigationStart;
            i(d[1]).markerStart(r(d[2]).IgWebQuickLogModule.EMBED_LOAD, t, c - l), n('frame_navigation_start', c), n('frame_response_end', o.responseEnd), n('frame_dom_complete', o.domComplete), n('embed_loading', s), n('embed_mounted', u);
            const _ = r(d[6]).getResourceTimings({
                includeBuffered: !0,
                type: 'link'
            });
            if (_.length > 0) {
                const o = _[0],
                    t = o.response_start + o.response_time;
                n('css_request', o.request_start + c), n('css_response', t + c)
            }
            i(d[1]).markerEnd(r(d[2]).IgWebQuickLogModule.EMBED_LOAD, i(d[7]).SUCCESS, t, u)
        })
    }
}, 17104897, [9895967, 15859972, 15859973, 9633881, 17104898, 12517547, 12517518, 15859974]);