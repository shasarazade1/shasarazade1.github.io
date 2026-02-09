import { c as C, u as oe, h as de, r as l, a as h, S as g, j as e, d as ce } from "./index-CkEP5Tm3.js";
import { M as X } from "./MathRenderer-XySJAvdR.js";
import { L as ue } from "./lock-_5NyXZcH.js";
import { W as me } from "./wifi-off-CUYrWRG-.js";
import { A as xe } from "./alert-triangle-CP6CtVKR.js";
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fe = C("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const he = C("ChevronLeft", [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const be = C("ChevronRight", [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ge = C("Flag", [
  ["path", { d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z", key: "i9b6wo" }],
  ["line", { x1: "4", x2: "4", y1: "22", y2: "15", key: "1cm3nv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pe = C("Maximize", [
    ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3", key: "1dcmit" }],
    ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3", key: "1e4gt3" }],
    ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3", key: "wsl5sc" }],
    ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3", key: "18trek" }],
  ]),
  I = "LMS_EXAM_STATE",
  ye = () => {
    const L = oe(),
      F = de(),
      [a, G] = l.useState(null),
      [r, P] = l.useState(null),
      [c, $] = l.useState([]),
      [m, A] = l.useState(0),
      [p, K] = l.useState({}),
      [N, Q] = l.useState(new Set()),
      [M, T] = l.useState(0),
      [y, V] = l.useState(0),
      [x, _] = l.useState(0),
      [j, E] = l.useState(!0),
      [w, D] = l.useState(!1),
      [H, J] = l.useState(!1),
      [Z, R] = l.useState("online"),
      [u, W] = l.useState(!1),
      Y = l.useRef(p),
      ee = l.useRef(x),
      z = l.useRef(w),
      q = l.useRef(null);
    l.useEffect(() => {
      Y.current = p;
    }, [p]),
      l.useEffect(() => {
        ee.current = x;
      }, [x]),
      l.useEffect(() => {
        z.current = w;
      }, [w]),
      l.useEffect(
        () => (
          (async () => {
            var f, d;
            const s = localStorage.getItem(I);
            if (s)
              try {
                const i = JSON.parse(s),
                  v = Date.now(),
                  S = Math.floor((i.endTime - v) / 1e3);
                if (S <= 0) {
                  localStorage.removeItem(I),
                    g
                      .fire("Waktu Habis", "Waktu ujian telah habis saat Anda tidak aktif.", "error")
                      .then(() => L("/student/home"));
                  return;
                }
                G(i.session),
                  P(i.student),
                  $(i.questions),
                  K(i.answers),
                  Q(new Set(i.flags)),
                  V(i.endTime),
                  T(S),
                  _(i.violationCount),
                  A(i.currentIdx),
                  W(i.hasStarted),
                  E(!1);
                return;
              } catch (i) {
                console.error("Gagal restore exam:", i), localStorage.removeItem(I);
              }
            const n = (f = F.state) == null ? void 0 : f.session,
              o = (d = F.state) == null ? void 0 : d.student;
            n && o
              ? (G(n), P(o), await ae(n, o))
              : g
                  .fire("Error", "Sesi tidak valid. Silakan login ulang via Portal Token.", "error")
                  .then(() => L("/student/exams"));
          })(),
          window.addEventListener("online", () => R("online")),
          window.addEventListener("offline", () => R("offline")),
          () => {
            window.removeEventListener("online", () => R("online")),
              window.removeEventListener("offline", () => R("offline"));
          }
        ),
        []
      ),
      l.useEffect(() => {
        const t = (n) => {
            if (u && !j && M > 0) return n.preventDefault(), (n.returnValue = ""), "";
          },
          s = (n) => {
            n.preventDefault();
          };
        return (
          u && (window.addEventListener("beforeunload", t), document.addEventListener("contextmenu", s)),
          () => {
            window.removeEventListener("beforeunload", t), document.removeEventListener("contextmenu", s);
          }
        );
      }, [u, j, M]);
    const te = () => {
        const t = document.documentElement;
        t.requestFullscreen && t.requestFullscreen().catch((s) => console.log(s));
      },
      se = async () => {
        if (!(!a || !r)) {
          J(!0);
          try {
            await h.initLiveSession({
              token: a.token,
              studentId: r.id,
              studentName: r.nama,
              studentClass: r.kelas || "-",
              startTime: Date.now(),
              endTime: y,
              totalQuestions: c.length,
            }),
              te(),
              W(!0);
          } catch (t) {
            console.error("Gagal init live session:", t),
              g.fire({
                icon: "error",
                title: "Koneksi Gagal",
                text: "Gagal terhubung ke server pengawas. Periksa internet Anda dan coba lagi.",
                confirmButtonText: "Coba Lagi",
              });
          } finally {
            J(!1);
          }
        }
      },
      ae = async (t, s) => {
        E(!0);
        try {
          let n = [];
          if (t.mode === "PACKET") {
            let f = t.packetId;
            if (t.packetStrategy === "ODD_EVEN")
              try {
                f =
                  ((await h.getUsers({ kelas: s.kelas }))
                    .filter((k) => (k.role || "").toLowerCase().includes("siswa"))
                    .sort((k, U) => k.nama.localeCompare(U.nama))
                    .findIndex((k) => k.id === s.id) +
                    1) %
                    2 ===
                  0
                    ? t.packetIdEven
                    : t.packetIdOdd;
              } catch {
                f = Math.random() < 0.5 ? t.packetIdEven : t.packetIdOdd;
              }
            if (f) {
              const d = await h.getPacketById(f);
              if (d && d.questionIds.length > 0) {
                const i = await h.getQuestions({ mapel: t.mapel });
                n = d.questionIds.map((v) => i.find((S) => S.id === v)).filter((v) => v !== void 0);
              }
            }
          } else
            n = (await h.getQuestions({ mapel: t.mapel, materi: t.materi ? t.materi : void 0 }))
              .sort(() => 0.5 - Math.random())
              .slice(0, t.jumlah_soal || 20);
          if (n.length === 0) throw new Error("Soal tidak ditemukan atau paket soal kosong.");
          $(n);
          const o = Date.now() + t.durasi * 60 * 1e3;
          V(o), T(t.durasi * 60);
        } catch (n) {
          console.error(n),
            g.fire("Gagal Memuat Soal", "Terjadi kesalahan saat memuat soal.", "error").then(() => L("/student/exams"));
        } finally {
          E(!1);
        }
      };
    l.useEffect(() => {
      if (!j && a && r && c.length > 0) {
        const t = {
          session: a,
          student: r,
          questions: c,
          answers: p,
          flags: Array.from(N),
          endTime: y,
          violationCount: x,
          currentIdx: m,
          hasStarted: u,
        };
        localStorage.setItem(I, JSON.stringify(t));
      }
    }, [p, N, x, m, a, r, c, j, y, u]),
      l.useEffect(() => {
        if (j || !y || !u || w) return;
        const t = setInterval(() => {
          const s = Date.now(),
            n = Math.floor((y - s) / 1e3);
          n <= 0 ? (clearInterval(t), T(0), B(!0)) : T(n);
        }, 1e3);
        return () => clearInterval(t);
      }, [j, y, u, w]),
      l.useEffect(() => {
        if (!(!u || !a || !r))
          return (
            (q.current = setInterval(() => {
              const t = z.current,
                s = Y.current;
              !t &&
                navigator.onLine &&
                h
                  .updateLiveSession(a.token, r.id, { answeredCount: Object.keys(s).length })
                  .catch((n) => console.warn("Heartbeat failed", n));
            }, 45e3)),
            () => {
              clearInterval(q.current);
            }
          );
      }, [u, a, r]),
      l.useEffect(() => {
        if (!u || !a || !r) return;
        const t = h.listenToMyLiveStatus(a.token, r.id, (s) => {
          s &&
            (s.status === "ongoing" && z.current
              ? (D(!1), _(0), g.fire("Blokir Dibuka", "Pengawas telah membuka blokir Anda.", "success"))
              : s.status === "blocked" && !z.current
                ? D(!0)
                : s.status === "submitted" && B(!0));
        });
        return () => t();
      }, [u, a, r]),
      l.useEffect(() => {
        if (!u || w) return;
        const t = () => {
          if (document.hidden) {
            const s = x + 1;
            _(s),
              a && r && h.updateLiveSession(a.token, r.id, { violations: s }),
              a != null && a.max_curang && s > a.max_curang
                ? (D(!0), a && r && h.updateLiveSession(a.token, r.id, { status: "blocked" }))
                : g
                    .mixin({
                      toast: !0,
                      position: "center",
                      showConfirmButton: !1,
                      timer: 3e3,
                      background: "#fee2e2",
                      color: "#991b1b",
                    })
                    .fire({
                      icon: "warning",
                      title: `Dilarang keluar aplikasi! (${s}/${(a == null ? void 0 : a.max_curang) || 3})`,
                    });
          }
        };
        return (
        );
      }, [x, a, u, w, r]);
    const ne = (t) => {
        K((s) => ({ ...s, [c[m].id]: t }));
      },
      le = () => {
        const t = c[m].id,
          s = new Set(N);
        s.has(t) ? s.delete(t) : s.add(t), Q(s);
      },
      re = () => {
        let t = 0;
        const s = {};
        return (
          c.forEach((o, f) => {
            const d = p[o.id];
            let i = !1;
            if (o.jenis_soal === "PG" || o.jenis_soal === "PG_KOMPLEKS") i = d === String(o.kunci);
            else if (o.jenis_soal === "BENAR_SALAH") {
              const v = d || {};
              i = o.pilihanJawaban.every((O) => {
                const k = v[O.opsiId],
                  U = O.kunci ? "BENAR" : "SALAH";
                return k === U;
              });
            } else i = (d || "").toLowerCase() === String(o.kunci).toLowerCase();
            i && t++, (s[o.id] = d);
          }),
          { score: Math.round((t / c.length) * 100), detailedAns: s }
        );
      },
      B = async (t = !1) => {
        if (
          !(!a || !r) &&
          !(
            !t &&
            !(
              await g.fire({
                title: "Kumpulkan Jawaban?",
                text: "Pastikan semua soal telah terjawab.",
                icon: "question",
                showCancelButton: !0,
                confirmButtonText: "Ya, Kumpulkan",
                confirmButtonColor: "#10b981",
              })
            ).isConfirmed
          )
        ) {
          E(!0);
          try {
            const { score: s, detailedAns: n } = re(),
              o = {
                token: a.token,
                userId: r.id,
                nama: r.nama,
                kelas: r.kelas,
                mapel: a.mapel,
                jenis_ujian: a.jenis_ujian || "UH",
                materi: a.materi || "Umum",
                semester: "Genap",
                tahun_ajaran: "2025/2026",
                nilai: s,
                violations: x,
                ans: n,
                correct: s >= 75,
                timestamp: new Date(),
              };
            await h.saveExamResult(o),
              await h.updateLiveSession(a.token, r.id, { status: "submitted", answeredCount: c.length }),
              localStorage.removeItem(I),
              g
                .fire({
                  icon: "success",
                  title: "Ujian Selesai!",
                  text: `Nilai Anda: ${s}`,
                  confirmButtonText: "Kembali ke Dashboard",
                  allowOutsideClick: !1,
                })
                .then(() => {
                  document.fullscreenElement && document.exitFullscreen().catch(() => {}), L("/student/home");
                });
          } catch (s) {
            console.error(s), g.fire("Error", "Gagal menyimpan jawaban.", "error"), E(!1);
          }
        }
      },
      ie = (t) => {
        if (t < 0) return "00:00";
        const s = Math.floor(t / 60),
          n = t % 60;
        return `${s.toString().padStart(2, "0")}:${n.toString().padStart(2, "0")}`;
      };
    if (j || !a)
      return e.jsxs("div", {
        className: "h-screen flex items-center justify-center text-slate-500 gap-3 flex-col bg-slate-50",
        children: [
          e.jsx("i", { className: "fa-solid fa-circle-notch fa-spin text-3xl text-blue-500" }),
          e.jsx("p", { className: "font-medium animate-pulse", children: "Memulihkan Sesi Ujian..." }),
        ],
      });
    if (!u)
      return e.jsx("div", {
        className: "h-screen flex items-center justify-center bg-slate-800 p-6",
        children: e.jsxs("div", {
          className: "bg-white max-w-md w-full rounded-2xl p-8 text-center shadow-2xl animate-in zoom-in-95",
          children: [
            e.jsx("div", {
              className:
                "w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600",
              children: e.jsx(pe, { size: 40 }),
            }),
            e.jsx("h2", { className: "text-2xl font-bold text-slate-800 mb-2", children: a.mapel }),
            e.jsxs("p", {
              className: "text-slate-500 mb-8",
              children: [
                "Ujian akan berlangsung selama ",
                e.jsxs("b", { children: [a.durasi, " menit"] }),
                ". Aplikasi akan masuk ke mode layar penuh. Dilarang keluar dari aplikasi.",
              ],
            }),
            e.jsx("button", {
              onClick: se,
              disabled: H,
              className:
                "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed",
              children: H
                ? e.jsxs(e.Fragment, {
                    children: [
                      e.jsx("i", { className: "fa-solid fa-circle-notch fa-spin" }),
                      " Menghubungkan ke Server...",
                    ],
                  })
                : "MULAI UJIAN SEKARANG",
            }),
          ],
        }),
      });
    if (w)
      return e.jsx("div", {
        className: "h-screen flex items-center justify-center bg-red-900 p-6 z-50 fixed inset-0",
        children: e.jsxs("div", {
          className: "bg-white max-w-md w-full rounded-2xl p-8 text-center shadow-2xl animate-in zoom-in-95",
          children: [
            e.jsx("div", {
              className:
                "w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600 animate-pulse",
              children: e.jsx(ue, { size: 40 }),
            }),
            e.jsx("h2", { className: "text-2xl font-bold text-red-700 mb-2", children: "UJIAN DIBLOKIR" }),
            e.jsxs("p", {
              className: "text-slate-600 mb-4",
              children: [
                "Anda terdeteksi melakukan pelanggaran (keluar aplikasi) sebanyak ",
                e.jsxs("b", { children: [x, " kali"] }),
                ".",
              ],
            }),
            e.jsx("p", {
              className: "text-sm bg-red-50 p-3 rounded text-red-800 border border-red-100 mb-6",
              children: "Silakan hubungi pengawas ujian untuk membuka blokir agar Anda dapat melanjutkan.",
            }),
            e.jsx("div", {
              className: "flex justify-center",
              children: e.jsx("span", {
                className: "text-xs text-slate-400 animate-pulse",
                children: "Menunggu persetujuan pengawas...",
              }),
            }),
          ],
        }),
      });
    const b = c[m];
    return e.jsxs("div", {
      className: "h-screen flex flex-col bg-slate-50 font-sans select-none overflow-hidden",
      children: [
        e.jsxs("header", {
          className:
            "bg-white h-14 md:h-16 shadow-sm border-b border-slate-200 flex items-center justify-between px-3 md:px-6 shrink-0 z-20",
          children: [
            e.jsxs("div", {
              className: "flex items-center gap-2 md:gap-4 overflow-hidden",
              children: [
                e.jsx("div", {
                  className: "font-bold text-sm md:text-xl text-slate-800 truncate max-w-[120px] md:max-w-xs",
                  children: a.mapel,
                }),
                e.jsx("div", {
                  className: "flex items-center text-[10px] md:text-xs text-slate-500 gap-1 md:gap-2 shrink-0",
                  children: e.jsxs("span", {
                    className: "bg-slate-100 px-2 py-1 rounded whitespace-nowrap",
                    children: ["No. ", m + 1, "/", c.length],
                  }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex items-center gap-2 md:gap-4",
              children: [
                Z === "offline" &&
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-1 text-white bg-red-500 px-2 py-1 rounded text-[10px] font-bold animate-pulse",
                    children: [e.jsx(me, { size: 12 }), " Offline"],
                  }),
                x > 0 &&
                  e.jsxs("div", {
                    className:
                      "flex items-center gap-1 text-red-600 bg-red-50 px-2 py-1 rounded-full text-[10px] font-bold animate-pulse",
                    children: [e.jsx(xe, { size: 12 }), " ", x],
                  }),
                e.jsxs("div", {
                  className: `flex items-center gap-1 md:gap-2 font-mono text-sm md:text-lg font-bold px-2 md:px-4 py-1 md:py-2 rounded-lg transition-colors ${M < 300 ? "bg-red-100 text-red-600 animate-pulse" : "bg-slate-100 text-slate-700"}`,
                  children: [e.jsx(ce, { size: 14, className: "md:w-5 md:h-5" }), ie(M)],
                }),
                e.jsxs("button", {
                  onClick: () => B(!1),
                  className:
                    "bg-slate-800 text-white p-2 md:px-4 md:py-2 rounded-lg text-sm font-bold hover:bg-slate-900 transition-colors shadow-lg",
                  title: "Selesai Ujian",
                  children: [
                    e.jsx("span", { className: "hidden md:inline", children: "SELESAI" }),
                    e.jsx("span", { className: "md:hidden", children: e.jsx(fe, { size: 18 }) }),
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs("main", {
          className: "flex-1 flex overflow-hidden",
          children: [
            e.jsxs("section", {
              className: "flex-1 flex flex-col h-full overflow-hidden relative",
              children: [
                e.jsx("div", {
                  className: "flex-1 overflow-y-auto p-4 md:p-6 pb-20",
                  children: e.jsxs("div", {
                    className: "bg-white rounded-xl shadow-sm border border-slate-200 p-4 md:p-6 mb-4",
                    children: [
                      e.jsxs("div", {
                        className: "flex justify-between items-start mb-4",
                        children: [
                          e.jsx("div", {
                            className: "flex gap-2",
                            children: e.jsx("span", {
                              className:
                                "bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded border border-blue-200 uppercase",
                              children: b.jenis_soal.replace("_", " "),
                            }),
                          }),
                          e.jsx("button", {
                            onClick: le,
                            className: `p-2 rounded-lg transition-all border ${N.has(b.id) ? "bg-yellow-50 border-yellow-200 text-yellow-600" : "bg-white border-slate-200 text-slate-300 hover:border-blue-300 hover:text-blue-400"}`,
                            children: e.jsx(ge, { size: 20, className: N.has(b.id) ? "fill-yellow-600" : "" }),
                          }),
                        ],
                      }),
                      b.gambar &&
                        e.jsx("div", {
                          className: "mb-4 flex justify-center",
                          children: e.jsx("img", {
                            src: b.gambar,
                            alt: "Ilustrasi",
                            className: "max-h-60 w-auto rounded-lg border border-slate-100 shadow-sm object-contain",
                          }),
                        }),
                      e.jsx("div", {
                        className: "text-base md:text-lg text-slate-800 leading-relaxed font-medium mb-6",
                        children: e.jsx(X, { text: b.pertanyaan }),
                      }),
                      e.jsx("div", {
                        className: "space-y-3",
                        children: b.pilihanJawaban.map((t) => {
                          const s = p[b.id] === t.opsiId;
                          return e.jsxs(
                            "label",
                            {
                              className: `flex items-start md:items-center gap-3 p-3 md:p-4 rounded-xl border-2 cursor-pointer transition-all group select-none
                            ${s ? "border-blue-500 bg-blue-50/30 shadow-sm" : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"}`,
                              children: [
                                e.jsx("input", {
                                  type: "radio",
                                  name: `q-${b.id}`,
                                  className: "hidden",
                                  onChange: () => ne(t.opsiId),
                                  checked: s,
                                }),
                                e.jsx("div", {
                                  className: `w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border shrink-0 transition-colors
                            ${s ? "bg-blue-600 text-white border-blue-600" : "bg-white text-slate-500 border-slate-300 group-hover:border-blue-400"}`,
                                  children: t.opsiId.toUpperCase(),
                                }),
                                e.jsx("div", {
                                  className: "text-slate-700 font-medium text-sm md:text-base pt-1 md:pt-0",
                                  children: e.jsx(X, { text: t.teksOpsi }),
                                }),
                              ],
                            },
                            t.opsiId
                          );
                        }),
                      }),
                    ],
                  }),
                }),
                e.jsxs("div", {
                  className:
                    "h-16 border-t border-slate-200 bg-white flex items-center justify-between px-4 absolute bottom-0 w-full z-10",
                  children: [
                    e.jsxs("button", {
                      onClick: () => A(Math.max(0, m - 1)),
                      disabled: m === 0,
                      className:
                        "px-4 py-2 rounded-lg text-slate-600 font-bold hover:bg-slate-100 disabled:opacity-30 flex items-center gap-1 text-sm border border-slate-200",
                      children: [e.jsx(he, { size: 18 }), " Prev"],
                    }),
                    e.jsxs("div", {
                      className: "text-xs font-bold text-slate-400 md:hidden",
                      children: [m + 1, " / ", c.length],
                    }),
                    e.jsxs("button", {
                      onClick: () => A(Math.min(c.length - 1, m + 1)),
                      disabled: m === c.length - 1,
                      className:
                        "px-4 py-2 rounded-lg bg-blue-600 text-white font-bold hover:bg-blue-700 disabled:opacity-30 flex items-center gap-1 text-sm shadow-sm",
                      children: ["Next ", e.jsx(be, { size: 18 })],
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("aside", {
              className: "hidden md:flex w-72 flex-col border-l border-slate-200 bg-slate-50/50",
              children: [
                e.jsx("div", {
                  className: "p-4 border-b border-slate-200 bg-white",
                  children: e.jsx("h3", {
                    className: "font-bold text-slate-700 text-sm uppercase",
                    children: "Navigasi Soal",
                  }),
                }),
                e.jsx("div", {
                  className: "flex-1 overflow-y-auto p-4",
                  children: e.jsx("div", {
                    className: "grid grid-cols-4 gap-2",
                    children: c.map((t, s) => {
                      const n = p[t.id],
                        o = N.has(t.id),
                        f = s === m;
                      let d = "bg-white text-slate-600 border-slate-200 hover:border-blue-300";
                      return (
                        f
                          ? (d = "bg-blue-600 text-white border-blue-600 shadow-md")
                          : o
                            ? (d = "bg-yellow-100 text-yellow-700 border-yellow-300")
                            : n && (d = "bg-green-100 text-green-700 border-green-300"),
                        e.jsxs(
                          "button",
                          {
                            onClick: () => A(s),
                            className: `h-10 rounded-lg border flex items-center justify-center font-bold text-sm transition-all relative ${d}`,
                            children: [
                              s + 1,
                              o &&
                                e.jsx("div", {
                                  className:
                                    "absolute -top-1 -right-1 w-2.5 h-2.5 bg-yellow-400 rounded-full border border-white",
                                }),
                            ],
                          },
                          t.id
                        )
                      );
                    }),
                  }),
                }),
                e.jsxs("div", {
                  className: "p-4 border-t border-slate-200 bg-white text-[10px] text-slate-500 space-y-2",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [e.jsx("div", { className: "w-3 h-3 bg-blue-600 rounded-full" }), " Sedang Dikerjakan"],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx("div", { className: "w-3 h-3 bg-green-100 border border-green-300 rounded-full" }),
                        " Sudah Dijawab",
                      ],
                    }),
                    e.jsxs("div", {
                      className: "flex items-center gap-2",
                      children: [
                        e.jsx("div", { className: "w-3 h-3 bg-yellow-100 border border-yellow-300 rounded-full" }),
                        " Ragu-ragu",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  };
export { ye as default };
