(() => {
  "use strict";
  var n = {
      365: (n, e, t) => {
        t.d(e, { A: () => s });
        var o = t(354),
          r = t.n(o),
          a = t(314),
          i = t.n(a)()(r());
        i.push([
          n.id,
          'body {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #d2e3c8;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\nheader {\n  background: linear-gradient(135deg, #86a789 0%, #739072 100%);\n  color: #fff;\n  padding: 20px 0;\n  text-align: center;\n  border-bottom: 4px solid #5e9f80;\n}\n\nheader h1 {\n  margin: 0;\n  font-size: 3rem;\n}\n\n.notes-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n\n.buttons {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.buttons button {\n  padding: 10px 20px;\n  margin: 0 10px;\n  font-size: 1.6rem;\n  color: #fff;\n  background-color: #739072;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.buttons button:hover {\n  background-color: #2e4a32;\n}\n\n.note-card {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease;\n  position: relative;\n}\n\n.note-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);\n}\n\n.note-title {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #4f6f52;\n  overflow: auto;\n}\n\n.note-body {\n  font-size: 1.6rem;\n  color: #4f6f52;\n  word-wrap: break-word;\n  max-height: 150px;\n  overflow: auto;\n}\n\n.note-actions {\n  display: flex;\n  align-items: center;\n}\n\n.note-actions button {\n  padding: 10px;\n  margin-top: 5px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1.4rem;\n}\n\n.archive-btn,\n.unarchive-btn {\n  background-color: #4f6f52;\n  color: #fff;\n}\n\n.archive-btn:hover,\n.unarchive-btn:hover {\n  background-color: #2e4a32;\n}\n\n.delete-btn {\n  background-color: #ff6347;\n  color: #fff;\n  margin-right: 1rem;\n}\n\n.delete-btn:hover {\n  background-color: #d6341f;\n}\n\n.note-card.archived {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.created-at {\n  margin-top: 10px;\n  font-size: 1.2rem;\n  color: #888;\n}\n\n.note-form {\n  background-color: #86a789;\n  border-radius: 10px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin-bottom: 40px;\n  color: #fff;\n}\n\n.note-form h2 {\n  margin-top: 0;\n  margin-bottom: 20px;\n  font-size: 2.4rem;\n}\n\n.note-form #noteTitle {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  width: calc(100% - 30px);\n  padding: 15px;\n  margin-bottom: 20px;\n  border: none;\n  border-radius: 8px;\n  background-color: #fff;\n  font-size: 1.6rem;\n  resize: none;\n  transition: border-color 0.3s ease;\n  color: #4f6f52;\n}\n\n.note-form #noteTitle::placeholder {\n  color: #86a789;\n}\n\n.note-form #noteTitle:focus {\n  outline: none;\n  border-color: #4f6f52;\n}\n\n.note-form #noteBody {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  width: calc(100% - 30px);\n  padding: 15px;\n  margin-bottom: 20px;\n  border: none;\n  border-radius: 8px;\n  background-color: #fff;\n  font-size: 1.6rem;\n  height: 300px;\n  resize: none;\n  transition: border-color 0.3s ease;\n  color: #4f6f52;\n}\n\n.note-form #noteBody::placeholder {\n  color: #86a789;\n}\n\n.note-form #noteBody:focus {\n  outline: none;\n  border-color: #4f6f52;\n}\n\n.note-form button[type="submit"] {\n  background-color: #4f6f52;\n  color: #fff;\n  padding: 15px 30px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1.8rem;\n  transition: background-color 0.3s ease;\n}\n\n.note-form button[type="submit"]:hover {\n  background-color: #2e4a32;\n}\n\n.note-form button[type="submit"]:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n\n.loading-indicator {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.spinner {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #4f6f52;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  header h1 {\n    font-size: 2.5rem;\n  }\n\n  .note-title {\n    font-size: 1.8rem;\n  }\n\n  .note-body {\n    font-size: 1.4rem;\n  }\n\n  .note-form h2 {\n    font-size: 2rem;\n  }\n\n  .note-form input[type="text"],\n  .note-form textarea {\n    font-size: 1.4rem;\n  }\n\n  .note-form button[type="submit"] {\n    font-size: 1.6rem;\n  }\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles.css"],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              'body {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: #d2e3c8;\n}\n\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\nheader {\n  background: linear-gradient(135deg, #86a789 0%, #739072 100%);\n  color: #fff;\n  padding: 20px 0;\n  text-align: center;\n  border-bottom: 4px solid #5e9f80;\n}\n\nheader h1 {\n  margin: 0;\n  font-size: 3rem;\n}\n\n.notes-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 20px;\n  padding: 20px;\n}\n\n.buttons {\n  text-align: center;\n  margin-top: 2rem;\n}\n\n.buttons button {\n  padding: 10px 20px;\n  margin: 0 10px;\n  font-size: 1.6rem;\n  color: #fff;\n  background-color: #739072;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.buttons button:hover {\n  background-color: #2e4a32;\n}\n\n.note-card {\n  background-color: #fff;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);\n  transition:\n    transform 0.3s ease,\n    box-shadow 0.3s ease;\n  position: relative;\n}\n\n.note-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);\n}\n\n.note-title {\n  font-size: 2rem;\n  font-weight: bold;\n  margin-bottom: 10px;\n  color: #4f6f52;\n  overflow: auto;\n}\n\n.note-body {\n  font-size: 1.6rem;\n  color: #4f6f52;\n  word-wrap: break-word;\n  max-height: 150px;\n  overflow: auto;\n}\n\n.note-actions {\n  display: flex;\n  align-items: center;\n}\n\n.note-actions button {\n  padding: 10px;\n  margin-top: 5px;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 1.4rem;\n}\n\n.archive-btn,\n.unarchive-btn {\n  background-color: #4f6f52;\n  color: #fff;\n}\n\n.archive-btn:hover,\n.unarchive-btn:hover {\n  background-color: #2e4a32;\n}\n\n.delete-btn {\n  background-color: #ff6347;\n  color: #fff;\n  margin-right: 1rem;\n}\n\n.delete-btn:hover {\n  background-color: #d6341f;\n}\n\n.note-card.archived {\n  opacity: 0.5;\n  pointer-events: none;\n}\n\n.created-at {\n  margin-top: 10px;\n  font-size: 1.2rem;\n  color: #888;\n}\n\n.note-form {\n  background-color: #86a789;\n  border-radius: 10px;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);\n  padding: 30px;\n  margin-bottom: 40px;\n  color: #fff;\n}\n\n.note-form h2 {\n  margin-top: 0;\n  margin-bottom: 20px;\n  font-size: 2.4rem;\n}\n\n.note-form #noteTitle {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  width: calc(100% - 30px);\n  padding: 15px;\n  margin-bottom: 20px;\n  border: none;\n  border-radius: 8px;\n  background-color: #fff;\n  font-size: 1.6rem;\n  resize: none;\n  transition: border-color 0.3s ease;\n  color: #4f6f52;\n}\n\n.note-form #noteTitle::placeholder {\n  color: #86a789;\n}\n\n.note-form #noteTitle:focus {\n  outline: none;\n  border-color: #4f6f52;\n}\n\n.note-form #noteBody {\n  font-family: "Plus Jakarta Sans", sans-serif;\n  width: calc(100% - 30px);\n  padding: 15px;\n  margin-bottom: 20px;\n  border: none;\n  border-radius: 8px;\n  background-color: #fff;\n  font-size: 1.6rem;\n  height: 300px;\n  resize: none;\n  transition: border-color 0.3s ease;\n  color: #4f6f52;\n}\n\n.note-form #noteBody::placeholder {\n  color: #86a789;\n}\n\n.note-form #noteBody:focus {\n  outline: none;\n  border-color: #4f6f52;\n}\n\n.note-form button[type="submit"] {\n  background-color: #4f6f52;\n  color: #fff;\n  padding: 15px 30px;\n  border: none;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 1.8rem;\n  transition: background-color 0.3s ease;\n}\n\n.note-form button[type="submit"]:hover {\n  background-color: #2e4a32;\n}\n\n.note-form button[type="submit"]:disabled {\n  background-color: #ccc;\n  cursor: not-allowed;\n}\n\n.loading-indicator {\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.spinner {\n  width: 50px;\n  height: 50px;\n  border: 5px solid rgba(255, 255, 255, 0.3);\n  border-top-color: #4f6f52;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  header h1 {\n    font-size: 2.5rem;\n  }\n\n  .note-title {\n    font-size: 1.8rem;\n  }\n\n  .note-body {\n    font-size: 1.4rem;\n  }\n\n  .note-form h2 {\n    font-size: 2rem;\n  }\n\n  .note-form input[type="text"],\n  .note-form textarea {\n    font-size: 1.4rem;\n  }\n\n  .note-form button[type="submit"] {\n    font-size: 1.6rem;\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const s = i;
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  o = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  o &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  o && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, o, r, a) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var i = {};
              if (o)
                for (var s = 0; s < this.length; s++) {
                  var A = this[s][0];
                  null != A && (i[A] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var d = [].concat(n[c]);
                (o && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  r &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = r))
                      : (d[4] = "".concat(r))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      354: (n) => {
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ("function" == typeof btoa) {
            var o = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              r =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  o,
                ),
              a = "/*# ".concat(r, " */");
            return [e].concat([a]).join("\n");
          }
          return [e].join("\n");
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, o = 0; o < e.length; o++)
            if (e[o].identifier === n) {
              t = o;
              break;
            }
          return t;
        }
        function o(n, o) {
          for (var a = {}, i = [], s = 0; s < n.length; s++) {
            var A = n[s],
              c = o.base ? A[0] + o.base : A[0],
              d = a[c] || 0,
              l = "".concat(c, " ").concat(d);
            a[c] = d + 1;
            var u = t(l),
              f = {
                css: A[1],
                media: A[2],
                sourceMap: A[3],
                supports: A[4],
                layer: A[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(f);
            else {
              var m = r(f, o);
              (o.byIndex = s),
                e.splice(s, 0, { identifier: l, updater: m, references: 1 });
            }
            i.push(l);
          }
          return i;
        }
        function r(n, e) {
          var t = e.domAPI(e);
          t.update(n);
          return function (e) {
            if (e) {
              if (
                e.css === n.css &&
                e.media === n.media &&
                e.sourceMap === n.sourceMap &&
                e.supports === n.supports &&
                e.layer === n.layer
              )
                return;
              t.update((n = e));
            } else t.remove();
          };
        }
        n.exports = function (n, r) {
          var a = o((n = n || []), (r = r || {}));
          return function (n) {
            n = n || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              e[s].references--;
            }
            for (var A = o(n, r), c = 0; c < a.length; c++) {
              var d = t(a[c]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            a = A;
          };
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var o = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!o)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          o.appendChild(t);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var o = "";
                t.supports && (o += "@supports (".concat(t.supports, ") {")),
                  t.media && (o += "@media ".concat(t.media, " {"));
                var r = void 0 !== t.layer;
                r &&
                  (o += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (o += t.css),
                  r && (o += "}"),
                  t.media && (o += "}"),
                  t.supports && (o += "}");
                var a = t.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (o +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  e.styleTagTransform(o, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    e = {};
  function t(o) {
    var r = e[o];
    if (void 0 !== r) return r.exports;
    var a = (e[o] = { id: o, exports: {} });
    return n[o](a, a.exports, t), a.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var o in e)
        t.o(e, o) &&
          !t.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: e[o] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0),
    (() => {
      var n = t(72),
        e = t.n(n),
        o = t(825),
        r = t.n(o),
        a = t(659),
        i = t.n(a),
        s = t(56),
        A = t.n(s),
        c = t(540),
        d = t.n(c),
        l = t(113),
        u = t.n(l),
        f = t(365),
        m = {};
      (m.styleTagTransform = u()),
        (m.setAttributes = A()),
        (m.insert = i().bind(null, "head")),
        (m.domAPI = r()),
        (m.insertStyleElement = d());
      e()(f.A, m);
      f.A && f.A.locals && f.A.locals;
      const p = "https://notes-api.dicoding.dev/v2";
      async function E() {
        try {
          const n = await fetch(`${p}/notes`),
            e = await n.json();
          if (n.ok) return e.data;
          throw new Error(e.message);
        } catch (n) {
          return console.error("Error fetching non-archived notes:", n), [];
        }
      }
      async function h() {
        const n = this.closest(".note-card").dataset.id;
        await (async function (n) {
          try {
            const e = await fetch(`${p}/notes/${n}/archive`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
              }),
              t = await e.json();
            if (!e.ok) throw new Error(t.message);
            alert("Note has been successfully archived.");
          } catch (n) {
            alert("Error archiving note. Please try again later.");
          }
        })(n);
        this.closest(".note-card").remove(), await y();
      }
      async function b() {
        const n = this.closest(".note-card").dataset.id;
        await (async function (n) {
          try {
            const e = await fetch(`${p}/notes/${n}/unarchive`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
              }),
              t = await e.json();
            if (!e.ok) throw new Error(t.message);
            alert("Note has been successfully unarchived.");
          } catch (n) {
            alert("Error unarchiving note. Please try again later.");
          }
        })(n);
        this.closest(".note-card").remove(), await v();
      }
      async function C() {
        const n = this.closest(".note-card"),
          e = n.dataset.id,
          t = await (async function (n) {
            try {
              if (!window.confirm("Are you sure you want to delete this note?"))
                return !1;
              const e = await fetch(`${p}/notes/${n}`, { method: "DELETE" }),
                t = await e.json();
              if (e.ok) return alert("Note has been successfully deleted."), !0;
              throw new Error(t.message);
            } catch (n) {
              return alert("Error deleting note. Please try again later."), !1;
            }
          })(e);
        t &&
          (!(function (n) {
            anime({
              targets: n,
              opacity: [1, 0],
              translateY: [0, 20],
              easing: "easeOutQuad",
              duration: 500,
              complete: () => n.remove(),
            });
          })(n),
          y());
      }
      function B(n) {
        anime({
          targets: n,
          scale: 1.1,
          duration: 300,
          easing: "easeInOutSine",
        });
      }
      function g(n) {
        anime({ targets: n, scale: 1, duration: 300, easing: "easeInOutSine" });
      }
      async function y() {
        const n = document.querySelector(".loading-indicator");
        (n.style.display = "block"),
          anime({
            targets: ".notes-container .note-card",
            opacity: [1, 0],
            translateY: [0, -20],
            duration: 500,
            easing: "easeOutQuad",
            complete: () => {
              (w.innerHTML = ""),
                E()
                  .then((n) => {
                    n.forEach((n) => {
                      S(n);
                    });
                  })
                  .catch((n) =>
                    console.error("Error fetching non-archived notes:", n),
                  )
                  .finally(() => {
                    (n.style.display = "none"),
                      (document.getElementById(
                        "showNonArchived",
                      ).style.backgroundColor = "#2e4a32"),
                      (document.getElementById(
                        "showArchived",
                      ).style.backgroundColor = "#739072"),
                      document
                        .getElementById("showNonArchived")
                        .addEventListener("mouseenter", () => {
                          B("#showNonArchived");
                        }),
                      document
                        .getElementById("showNonArchived")
                        .addEventListener("mouseleave", () => {
                          g("#showNonArchived");
                        });
                  });
            },
          });
      }
      async function v() {
        const n = document.querySelector(".loading-indicator");
        (n.style.display = "block"),
          anime({
            targets: ".notes-container .note-card",
            opacity: [1, 0],
            translateY: [0, -20],
            duration: 500,
            easing: "easeOutQuad",
            complete: () => {
              (w.innerHTML = ""),
                (async function () {
                  try {
                    const n = await fetch(`${p}/notes/archived`),
                      e = await n.json();
                    if (n.ok) return e.data;
                    throw new Error(e.message);
                  } catch (n) {
                    return (
                      console.error("Error fetching archived notes:", n), []
                    );
                  }
                })()
                  .then((n) => {
                    n.forEach((n) => {
                      !(function (n) {
                        const e = document.createElement("note-card");
                        if (
                          ((e.dataset.id = n.id),
                          (e.dataset.title = n.title),
                          (e.dataset.body = n.body),
                          (e.dataset.createdAt = n.createdAt),
                          w.appendChild(e),
                          "true" !== n.archived)
                        ) {
                          const n = document.createElement("button");
                          n.classList.add("unarchive-btn"),
                            (n.innerHTML =
                              '<i class="ri-inbox-unarchive-line"></i></i>Unarchive'),
                            n.addEventListener("click", b),
                            e.querySelector(".note-actions").appendChild(n);
                        }
                      })(n);
                    });
                  })
                  .catch((n) =>
                    console.error("Error fetching archived notes:", n),
                  )
                  .finally(() => {
                    (n.style.display = "none"),
                      (document.getElementById(
                        "showNonArchived",
                      ).style.backgroundColor = "#739072"),
                      (document.getElementById(
                        "showArchived",
                      ).style.backgroundColor = "#2e4a32"),
                      document
                        .getElementById("showArchived")
                        .addEventListener("mouseenter", () => {
                          B("#showArchived");
                        }),
                      document
                        .getElementById("showArchived")
                        .addEventListener("mouseleave", () => {
                          g("#showArchived");
                        });
                  });
            },
          });
      }
      document
        .getElementById("showNonArchived")
        .addEventListener("mouseenter", () => {
          B("#showNonArchived"), y();
        }),
        document
          .getElementById("showArchived")
          .addEventListener("mouseenter", () => {
            B("#showArchived"), v();
          });
      class x extends HTMLElement {
        connectedCallback() {
          this.innerHTML =
            "\n      <header>\n        <h1>Notes App</h1>\n      </header>\n    ";
        }
      }
      customElements.get("app-bar") || customElements.define("app-bar", x);
      class k extends HTMLElement {
        static get observedAttributes() {
          return ["archived"];
        }
        connectedCallback() {
          this.render();
        }
        attributeChangedCallback(n, e, t) {
          "archived" === n && this.render();
        }
        render() {
          const {
              id: n,
              title: e,
              body: t,
              createdAt: o,
              archived: r,
            } = this.dataset,
            a = new Date(o),
            i = new Intl.DateTimeFormat("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(a);
          this.innerHTML = `\n      <div class="note-card" data-id="${n}">\n        <div class="note-title">${e}</div>\n        <div class="note-body">${t}</div>\n        <div class="created-at">${i}</div>\n        <div class="note-actions">\n          <button class="delete-btn"><i class="ri-delete-bin-line"></i>Delete</button>\n        </div>\n      </div>\n    `;
          const s = this.querySelector(".archive-btn");
          s && s.addEventListener("click", h);
          const A = this.querySelector(".unarchive-btn");
          A && A.addEventListener("click", b);
          const c = this.querySelector(".delete-btn");
          c && c.addEventListener("click", C);
        }
      }
      let w;
      function S(n) {
        const e = document.createElement("note-card");
        (e.dataset.id = n.id),
          (e.dataset.title = n.title),
          (e.dataset.body = n.body),
          (e.dataset.createdAt = n.createdAt),
          w.appendChild(e),
          n.archived
            ? e.setAttribute("archived", "true")
            : e.removeAttribute("archived");
        const t = n.archived ? "unarchive-btn" : "archive-btn",
          o = n.archived
            ? '<i class="ri-inbox-unarchive-line"></i></i>Unarchive'
            : '<i class="ri-inbox-archive-line"></i></i>Archive',
          r = document.createElement("button");
        r.classList.add(t),
          (r.innerHTML = o),
          r.addEventListener("click", n.archived ? b : h),
          e.querySelector(".note-actions").appendChild(r);
      }
      customElements.get("note-card") || customElements.define("note-card", k),
        (async function () {
          const n = document.querySelector(".loading-indicator");
          (n.style.display = "block"),
            (await E()).forEach((n) => S(n)),
            (n.style.display = "none");
        })();
      class z extends HTMLElement {
        connectedCallback() {
          (this.innerHTML =
            '\n      <div class="note-form">\n        <h2>Add Note</h2>\n        <form id="addNoteForm">\n          <input type="text" id="noteTitle" placeholder="Enter title" required><br>\n          <textarea id="noteBody" placeholder="Write your notes..." required></textarea><br>\n          <button type="submit" disabled><i class="ri-add-line"></i>Add Note</button>\n        </form>\n      </div>\n    '),
            this.querySelector("#addNoteForm").addEventListener(
              "submit",
              this.handleFormSubmit.bind(this),
            );
        }
        async handleFormSubmit(n) {
          n.preventDefault();
          const e = document.querySelector(".loading-indicator");
          e.style.display = "block";
          const t = this.querySelector("#noteTitle").value,
            o = this.querySelector("#noteBody").value,
            r = await (async function (n, e) {
              try {
                const t = await fetch(`${p}/notes`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ title: n, body: e }),
                  }),
                  o = await t.json();
                if (t.ok)
                  return alert("Note has been successfully added."), o.data;
                throw new Error(o.message);
              } catch (n) {
                return (
                  console.error("Error adding note:", n),
                  alert("Error adding note. Please try again later."),
                  null
                );
              }
            })(t, o);
          r && (S(r), n.target.reset(), y()), (e.style.display = "none");
        }
      }
      customElements.get("note-form") || customElements.define("note-form", z),
        document.addEventListener("DOMContentLoaded", function () {
          w = document.querySelector(".notes-container");
          const n = document.getElementById("noteTitle"),
            e = document.getElementById("noteBody"),
            t = document.querySelector('button[type="submit"]');
          function o() {
            "" !== n.value.trim() && "" !== e.value.trim()
              ? (t.disabled = !1)
              : (t.disabled = !0);
          }
          n.addEventListener("input", o), e.addEventListener("input", o);
        });
      class T extends HTMLElement {
        connectedCallback() {
          this.innerHTML =
            '\n      <div class="loading-indicator">\n        <div class="spinner"></div>\n      </div>\n    ';
        }
      }
      customElements.get("loading-indicator") ||
        customElements.define("loading-indicator", T);
    })();
})();
//# sourceMappingURL=bundle.js.map
