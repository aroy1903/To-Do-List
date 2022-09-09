(() => {
  'use strict';
  var e = {
      171: (e, t, n) => {
        var r = n(575);
        const a = [],
          o = [],
          i = [],
          u = document.querySelector('#addToDo'),
          d = document.querySelector('#ui'),
          s = document.querySelector('#todoCont'),
          l = document.querySelector('#allToDos'),
          c = document.querySelector('#todaysToDos'),
          m = document.querySelector('#importantToDos'),
          f = document.querySelector('#mainHeady');
        let h = 0;
        u.addEventListener('click', () => {
          if (((h += 1), h > 1)) return void alert('Add a To-Do');
          const e = document.createElement('div');
          e.setAttribute('id', 'addScreen');
          const t = document.createElement('h1');
          t.setAttribute('id', 'popupHeader'), (t.innerText = 'Add a To-Do');
          const n = document.createElement('button');
          n.classList.add('buttons'),
            n.setAttribute('id', 'enterButton'),
            (n.innerText = 'Enter');
          const a = document.createElement('div'),
            o = document.createElement('label'),
            i = document.createElement('input');
          (o.innerText = 'Title:'), a.append(o, i);
          const u = document.createElement('div'),
            s = document.createElement('label'),
            l = document.createElement('input');
          l.setAttribute('id', 'descrip'),
            (s.innerText = 'Description:'),
            u.append(s, l);
          const c = document.createElement('div'),
            m = document.createElement('label');
          m.innerText = 'Date:';
          const g = document.createElement('input');
          g.setAttribute('type', 'date'), c.append(m, g);
          const w = document.createElement('div'),
            p = document.createElement('label');
          p.innerText = 'Due Date:';
          const b = document.createElement('input');
          b.setAttribute('type', 'date'), w.append(p, b);
          const T = document.createElement('div'),
            y = document.createElement('label'),
            D = document.createElement('input');
          D.setAttribute('type', 'checkbox'),
            (y.innerText = 'Important?'),
            T.append(y, D);
          const x = document.createElement('div');
          x.append(a, u, c, w, T), x.setAttribute('id', 'inputContainer');
          const C = [o, s, m, y, p];
          for (let e of C) e.classList.add('labels');
          const M = [i, g, l, b],
            k = [...M, ...C];
          for (let e of k) e.classList.add('iLContainer');
          n.addEventListener('click', () => {
            d.removeChild(e), (h = 0);
            for (let e of M) e.innerText = '';
            const t = new r.cp(i.value, g.value, l.value, b.value, D);
            v(t.title, t.date, t.description, t.dueDate, t.important),
              "No Important To-Do's" == f.innerText &&
                1 == t.important.checked &&
                (f.innerText = "Important To-Do's"),
              "No To-Do's for Today" == f.innerText &&
                !0 === (0, r.DR)(t.dueDate) &&
                (f.innerText = "Today's To-Do's");
          }),
            e.append(t, x, n),
            d.append(e);
        });
        let g = -1;
        const v = (e, t, n, u, d) => {
          g++;
          let l = document.createElement('div');
          l.setAttribute('id', `newTodo${g}`),
            l.classList.add('newTodo'),
            (l.style.display = 'flex');
          let c = document.createElement('h2'),
            m = document.createElement('h2'),
            h = document.createElement('h2'),
            v = document.createElement('h2'),
            T = document.createElement('h2');
          T.setAttribute('id', 'importantButton');
          let y = document.createElement('button');
          y.setAttribute('id', 'deleteButton'),
            y.classList.add('buttons'),
            y.setAttribute('data', `${g}`),
            (y.innerText = 'Done'),
            (c.innerText = e),
            (m.innerText = '' == t ? '' : (0, r.p6)(t)),
            (h.innerText = n),
            (v.innerText = '' == u ? '' : (0, r.p6)(u)),
            (T.innerText = 1 == d.checked ? '⭐' : '✩'),
            '✩' === T.innerText && T.classList.add('notImportant'),
            l.append(c, h, m, v, T, y),
            a.push(l),
            !0 === (1 == d.checked || 'false') && o.push(l),
            !0 === (0, r.DR)(u) && i.push(l),
            p(),
            y.addEventListener('click', () => {
              let e = a.indexOf(l),
                t = o.indexOf(l),
                n = i.indexOf(l);
              s.removeChild(l),
                a.splice(e, 1),
                -1 !== t && o.splice(t, 1),
                -1 !== n && i.splice(n, 1),
                "Important To-Do's" == f.innerText &&
                  o.length < 1 &&
                  (f.innerText = "No Important To-Do's"),
                "Today's To-Do's" == f.innerText &&
                  i.length < 1 &&
                  (f.innerText = "No To-Do's for Today");
            }),
            T.addEventListener('click', () => {
              let e = o.indexOf(l);
              '✩' === T.innerText
                ? (o.push(l),
                  (T.innerText = '⭐'),
                  T.classList.remove('notImportant'),
                  "No Important To-Do's" == f.innerText &&
                    o.length > 0 &&
                    (f.innerText = "Important To-Do's"))
                : (o.splice(e, 1),
                  (T.innerText = '✩'),
                  T.classList.add('notImportant'),
                  w(),
                  b());
            });
        };
        m.addEventListener('click', () => {
          if ((w(), o.length < 1)) f.innerText = "No Important To-Do's";
          else {
            f.innerText = "Important To-Do's";
            for (let e of o) s.append(e);
          }
        }),
          l.addEventListener('click', () => {
            if ((w(), a.length < 1)) f.innerText = "All To-Do's";
            else {
              f.innerText = "All To-Do's";
              for (let e of a) s.append(e);
            }
          }),
          c.addEventListener('click', () => {
            if ((w(), i.length < 1)) f.innerText = "No To-Do's for Today";
            else {
              f.innerText = "Today's To-Do's";
              for (let e of i) s.append(e);
            }
          });
        const w = () => {
            s.innerHTML = '';
          },
          p = () => {
            if ("All To-Do's" == f.innerText) for (let e of a) s.append(e);
            else if (
              "No Important To-Do's" == f.innerText ||
              "Important To-Do's" == f.innerText
            )
              for (let e of o) s.append(e);
            else for (let e of i) s.append(e);
          },
          b = () => {
            if ("Important To-Do's" == f.innerText)
              for (let e of o) s.append(e);
            if ("All To-Do's" == f.innerText) {
              for (let e of a) s.append(e);
              f.innerText = "All To-Do's";
            }
            if ("Today's To-Do's" == f.innerText) {
              for (let e of i) s.append(e);
              f.innerText = "Today's To-Do's";
            }
            "Important To-Do's" == f.innerText &&
              o.length < 1 &&
              (f.innerText = "No Important To-Do's");
          };
      },
      575: (e, t, n) => {
        function r(e, t) {
          if (t.length < e)
            throw new TypeError(
              e +
                ' argument' +
                (e > 1 ? 's' : '') +
                ' required, but only ' +
                t.length +
                ' present'
            );
        }
        function a(e) {
          return (
            r(1, arguments),
            e instanceof Date ||
              ('object' == typeof e &&
                '[object Date]' === Object.prototype.toString.call(e))
          );
        }
        function o(e) {
          r(1, arguments);
          var t = Object.prototype.toString.call(e);
          return e instanceof Date ||
            ('object' == typeof e && '[object Date]' === t)
            ? new Date(e.getTime())
            : 'number' == typeof e || '[object Number]' === t
            ? new Date(e)
            : (('string' != typeof e && '[object String]' !== t) ||
                'undefined' == typeof console ||
                (console.warn(
                  "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
                ),
                console.warn(new Error().stack)),
              new Date(NaN));
        }
        function i(e) {
          if ((r(1, arguments), !a(e) && 'number' != typeof e)) return !1;
          var t = o(e);
          return !isNaN(Number(t));
        }
        function u(e) {
          if (null === e || !0 === e || !1 === e) return NaN;
          var t = Number(e);
          return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
        }
        function d(e, t) {
          r(2, arguments);
          var n = o(e).getTime(),
            a = u(t);
          return new Date(n + a);
        }
        function s(e, t) {
          r(2, arguments);
          var n = u(t);
          return d(e, -n);
        }
        n.d(t, { cp: () => ie, DR: () => ue, p6: () => de });
        var l = 864e5;
        function c(e) {
          r(1, arguments);
          var t = 1,
            n = o(e),
            a = n.getUTCDay(),
            i = (a < t ? 7 : 0) + a - t;
          return n.setUTCDate(n.getUTCDate() - i), n.setUTCHours(0, 0, 0, 0), n;
        }
        function m(e) {
          r(1, arguments);
          var t = o(e),
            n = t.getUTCFullYear(),
            a = new Date(0);
          a.setUTCFullYear(n + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
          var i = c(a),
            u = new Date(0);
          u.setUTCFullYear(n, 0, 4), u.setUTCHours(0, 0, 0, 0);
          var d = c(u);
          return t.getTime() >= i.getTime()
            ? n + 1
            : t.getTime() >= d.getTime()
            ? n
            : n - 1;
        }
        function f(e) {
          r(1, arguments);
          var t = m(e),
            n = new Date(0);
          n.setUTCFullYear(t, 0, 4), n.setUTCHours(0, 0, 0, 0);
          var a = c(n);
          return a;
        }
        var h = 6048e5,
          g = {};
        function v() {
          return g;
        }
        function w(e, t) {
          var n, a, i, d, s, l, c, m;
          r(1, arguments);
          var f = v(),
            h = u(
              null !==
                (n =
                  null !==
                    (a =
                      null !==
                        (i =
                          null !== (d = null == t ? void 0 : t.weekStartsOn) &&
                          void 0 !== d
                            ? d
                            : null == t ||
                              null === (s = t.locale) ||
                              void 0 === s ||
                              null === (l = s.options) ||
                              void 0 === l
                            ? void 0
                            : l.weekStartsOn) && void 0 !== i
                        ? i
                        : f.weekStartsOn) && void 0 !== a
                    ? a
                    : null === (c = f.locale) ||
                      void 0 === c ||
                      null === (m = c.options) ||
                      void 0 === m
                    ? void 0
                    : m.weekStartsOn) && void 0 !== n
                ? n
                : 0
            );
          if (!(h >= 0 && h <= 6))
            throw new RangeError(
              'weekStartsOn must be between 0 and 6 inclusively'
            );
          var g = o(e),
            w = g.getUTCDay(),
            p = (w < h ? 7 : 0) + w - h;
          return g.setUTCDate(g.getUTCDate() - p), g.setUTCHours(0, 0, 0, 0), g;
        }
        function p(e, t) {
          var n, a, i, d, s, l, c, m;
          r(1, arguments);
          var f = o(e),
            h = f.getUTCFullYear(),
            g = v(),
            p = u(
              null !==
                (n =
                  null !==
                    (a =
                      null !==
                        (i =
                          null !==
                            (d =
                              null == t ? void 0 : t.firstWeekContainsDate) &&
                          void 0 !== d
                            ? d
                            : null == t ||
                              null === (s = t.locale) ||
                              void 0 === s ||
                              null === (l = s.options) ||
                              void 0 === l
                            ? void 0
                            : l.firstWeekContainsDate) && void 0 !== i
                        ? i
                        : g.firstWeekContainsDate) && void 0 !== a
                    ? a
                    : null === (c = g.locale) ||
                      void 0 === c ||
                      null === (m = c.options) ||
                      void 0 === m
                    ? void 0
                    : m.firstWeekContainsDate) && void 0 !== n
                ? n
                : 1
            );
          if (!(p >= 1 && p <= 7))
            throw new RangeError(
              'firstWeekContainsDate must be between 1 and 7 inclusively'
            );
          var b = new Date(0);
          b.setUTCFullYear(h + 1, 0, p), b.setUTCHours(0, 0, 0, 0);
          var T = w(b, t),
            y = new Date(0);
          y.setUTCFullYear(h, 0, p), y.setUTCHours(0, 0, 0, 0);
          var D = w(y, t);
          return f.getTime() >= T.getTime()
            ? h + 1
            : f.getTime() >= D.getTime()
            ? h
            : h - 1;
        }
        function b(e, t) {
          var n, a, o, i, d, s, l, c;
          r(1, arguments);
          var m = v(),
            f = u(
              null !==
                (n =
                  null !==
                    (a =
                      null !==
                        (o =
                          null !==
                            (i =
                              null == t ? void 0 : t.firstWeekContainsDate) &&
                          void 0 !== i
                            ? i
                            : null == t ||
                              null === (d = t.locale) ||
                              void 0 === d ||
                              null === (s = d.options) ||
                              void 0 === s
                            ? void 0
                            : s.firstWeekContainsDate) && void 0 !== o
                        ? o
                        : m.firstWeekContainsDate) && void 0 !== a
                    ? a
                    : null === (l = m.locale) ||
                      void 0 === l ||
                      null === (c = l.options) ||
                      void 0 === c
                    ? void 0
                    : c.firstWeekContainsDate) && void 0 !== n
                ? n
                : 1
            ),
            h = p(e, t),
            g = new Date(0);
          g.setUTCFullYear(h, 0, f), g.setUTCHours(0, 0, 0, 0);
          var b = w(g, t);
          return b;
        }
        var T = 6048e5;
        function y(e, t) {
          for (
            var n = e < 0 ? '-' : '', r = Math.abs(e).toString();
            r.length < t;

          )
            r = '0' + r;
          return n + r;
        }
        const D = function (e, t) {
            var n = e.getUTCFullYear(),
              r = n > 0 ? n : 1 - n;
            return y('yy' === t ? r % 100 : r, t.length);
          },
          x = function (e, t) {
            var n = e.getUTCMonth();
            return 'M' === t ? String(n + 1) : y(n + 1, 2);
          },
          C = function (e, t) {
            return y(e.getUTCDate(), t.length);
          },
          M = function (e, t) {
            return y(e.getUTCHours() % 12 || 12, t.length);
          },
          k = function (e, t) {
            return y(e.getUTCHours(), t.length);
          },
          E = function (e, t) {
            return y(e.getUTCMinutes(), t.length);
          },
          S = function (e, t) {
            return y(e.getUTCSeconds(), t.length);
          },
          P = function (e, t) {
            var n = t.length,
              r = e.getUTCMilliseconds();
            return y(Math.floor(r * Math.pow(10, n - 3)), t.length);
          };
        function U(e, t) {
          var n = e > 0 ? '-' : '+',
            r = Math.abs(e),
            a = Math.floor(r / 60),
            o = r % 60;
          if (0 === o) return n + String(a);
          var i = t || '';
          return n + String(a) + i + y(o, 2);
        }
        function W(e, t) {
          return e % 60 == 0
            ? (e > 0 ? '-' : '+') + y(Math.abs(e) / 60, 2)
            : Y(e, t);
        }
        function Y(e, t) {
          var n = t || '',
            r = e > 0 ? '-' : '+',
            a = Math.abs(e);
          return r + y(Math.floor(a / 60), 2) + n + y(a % 60, 2);
        }
        const N = {
          G: function (e, t, n) {
            var r = e.getUTCFullYear() > 0 ? 1 : 0;
            switch (t) {
              case 'G':
              case 'GG':
              case 'GGG':
                return n.era(r, { width: 'abbreviated' });
              case 'GGGGG':
                return n.era(r, { width: 'narrow' });
              default:
                return n.era(r, { width: 'wide' });
            }
          },
          y: function (e, t, n) {
            if ('yo' === t) {
              var r = e.getUTCFullYear(),
                a = r > 0 ? r : 1 - r;
              return n.ordinalNumber(a, { unit: 'year' });
            }
            return D(e, t);
          },
          Y: function (e, t, n, r) {
            var a = p(e, r),
              o = a > 0 ? a : 1 - a;
            return 'YY' === t
              ? y(o % 100, 2)
              : 'Yo' === t
              ? n.ordinalNumber(o, { unit: 'year' })
              : y(o, t.length);
          },
          R: function (e, t) {
            return y(m(e), t.length);
          },
          u: function (e, t) {
            return y(e.getUTCFullYear(), t.length);
          },
          Q: function (e, t, n) {
            var r = Math.ceil((e.getUTCMonth() + 1) / 3);
            switch (t) {
              case 'Q':
                return String(r);
              case 'QQ':
                return y(r, 2);
              case 'Qo':
                return n.ordinalNumber(r, { unit: 'quarter' });
              case 'QQQ':
                return n.quarter(r, {
                  width: 'abbreviated',
                  context: 'formatting',
                });
              case 'QQQQQ':
                return n.quarter(r, { width: 'narrow', context: 'formatting' });
              default:
                return n.quarter(r, { width: 'wide', context: 'formatting' });
            }
          },
          q: function (e, t, n) {
            var r = Math.ceil((e.getUTCMonth() + 1) / 3);
            switch (t) {
              case 'q':
                return String(r);
              case 'qq':
                return y(r, 2);
              case 'qo':
                return n.ordinalNumber(r, { unit: 'quarter' });
              case 'qqq':
                return n.quarter(r, {
                  width: 'abbreviated',
                  context: 'standalone',
                });
              case 'qqqqq':
                return n.quarter(r, { width: 'narrow', context: 'standalone' });
              default:
                return n.quarter(r, { width: 'wide', context: 'standalone' });
            }
          },
          M: function (e, t, n) {
            var r = e.getUTCMonth();
            switch (t) {
              case 'M':
              case 'MM':
                return x(e, t);
              case 'Mo':
                return n.ordinalNumber(r + 1, { unit: 'month' });
              case 'MMM':
                return n.month(r, {
                  width: 'abbreviated',
                  context: 'formatting',
                });
              case 'MMMMM':
                return n.month(r, { width: 'narrow', context: 'formatting' });
              default:
                return n.month(r, { width: 'wide', context: 'formatting' });
            }
          },
          L: function (e, t, n) {
            var r = e.getUTCMonth();
            switch (t) {
              case 'L':
                return String(r + 1);
              case 'LL':
                return y(r + 1, 2);
              case 'Lo':
                return n.ordinalNumber(r + 1, { unit: 'month' });
              case 'LLL':
                return n.month(r, {
                  width: 'abbreviated',
                  context: 'standalone',
                });
              case 'LLLLL':
                return n.month(r, { width: 'narrow', context: 'standalone' });
              default:
                return n.month(r, { width: 'wide', context: 'standalone' });
            }
          },
          w: function (e, t, n, a) {
            var i = (function (e, t) {
              r(1, arguments);
              var n = o(e),
                a = w(n, t).getTime() - b(n, t).getTime();
              return Math.round(a / T) + 1;
            })(e, a);
            return 'wo' === t
              ? n.ordinalNumber(i, { unit: 'week' })
              : y(i, t.length);
          },
          I: function (e, t, n) {
            var a = (function (e) {
              r(1, arguments);
              var t = o(e),
                n = c(t).getTime() - f(t).getTime();
              return Math.round(n / h) + 1;
            })(e);
            return 'Io' === t
              ? n.ordinalNumber(a, { unit: 'week' })
              : y(a, t.length);
          },
          d: function (e, t, n) {
            return 'do' === t
              ? n.ordinalNumber(e.getUTCDate(), { unit: 'date' })
              : C(e, t);
          },
          D: function (e, t, n) {
            var a = (function (e) {
              r(1, arguments);
              var t = o(e),
                n = t.getTime();
              t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
              var a = t.getTime(),
                i = n - a;
              return Math.floor(i / l) + 1;
            })(e);
            return 'Do' === t
              ? n.ordinalNumber(a, { unit: 'dayOfYear' })
              : y(a, t.length);
          },
          E: function (e, t, n) {
            var r = e.getUTCDay();
            switch (t) {
              case 'E':
              case 'EE':
              case 'EEE':
                return n.day(r, {
                  width: 'abbreviated',
                  context: 'formatting',
                });
              case 'EEEEE':
                return n.day(r, { width: 'narrow', context: 'formatting' });
              case 'EEEEEE':
                return n.day(r, { width: 'short', context: 'formatting' });
              default:
                return n.day(r, { width: 'wide', context: 'formatting' });
            }
          },
          e: function (e, t, n, r) {
            var a = e.getUTCDay(),
              o = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case 'e':
                return String(o);
              case 'ee':
                return y(o, 2);
              case 'eo':
                return n.ordinalNumber(o, { unit: 'day' });
              case 'eee':
                return n.day(a, {
                  width: 'abbreviated',
                  context: 'formatting',
                });
              case 'eeeee':
                return n.day(a, { width: 'narrow', context: 'formatting' });
              case 'eeeeee':
                return n.day(a, { width: 'short', context: 'formatting' });
              default:
                return n.day(a, { width: 'wide', context: 'formatting' });
            }
          },
          c: function (e, t, n, r) {
            var a = e.getUTCDay(),
              o = (a - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case 'c':
                return String(o);
              case 'cc':
                return y(o, t.length);
              case 'co':
                return n.ordinalNumber(o, { unit: 'day' });
              case 'ccc':
                return n.day(a, {
                  width: 'abbreviated',
                  context: 'standalone',
                });
              case 'ccccc':
                return n.day(a, { width: 'narrow', context: 'standalone' });
              case 'cccccc':
                return n.day(a, { width: 'short', context: 'standalone' });
              default:
                return n.day(a, { width: 'wide', context: 'standalone' });
            }
          },
          i: function (e, t, n) {
            var r = e.getUTCDay(),
              a = 0 === r ? 7 : r;
            switch (t) {
              case 'i':
                return String(a);
              case 'ii':
                return y(a, t.length);
              case 'io':
                return n.ordinalNumber(a, { unit: 'day' });
              case 'iii':
                return n.day(r, {
                  width: 'abbreviated',
                  context: 'formatting',
                });
              case 'iiiii':
                return n.day(r, { width: 'narrow', context: 'formatting' });
              case 'iiiiii':
                return n.day(r, { width: 'short', context: 'formatting' });
              default:
                return n.day(r, { width: 'wide', context: 'formatting' });
            }
          },
          a: function (e, t, n) {
            var r = e.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
            switch (t) {
              case 'a':
              case 'aa':
                return n.dayPeriod(r, {
                  width: 'abbreviated',
                  context: 'formatting',
                });
              case 'aaa':
                return n
                  .dayPeriod(r, { width: 'abbreviated', context: 'formatting' })
                  .toLowerCase();
              case 'aaaaa':
                return n.dayPeriod(r, {
                  width: 'narrow',
                  context: 'formatting',
                });
              default:
                return n.dayPeriod(r, { width: 'wide', context: 'formatting' });
            }
          },
          b: function (e, t, n) {
            var r,
              a = e.getUTCHours();
            switch (
              ((r =
                12 === a
                  ? 'noon'
                  : 0 === a
                  ? 'midnight'
                  : a / 12 >= 1
                  ? 'pm'
                  : 'am'),
              t)
            ) {
              case 'b':
              case 'bb':
                return n.dayPeriod(r, {
                  width: 'abbreviated',
                  context: 'formatting',
                });
              case 'bbb':
                return n
                  .dayPeriod(r, { width: 'abbreviated', context: 'formatting' })
                  .toLowerCase();
              case 'bbbbb':
                return n.dayPeriod(r, {
                  width: 'narrow',
                  context: 'formatting',
                });
              default:
                return n.dayPeriod(r, { width: 'wide', context: 'formatting' });
            }
          },
          B: function (e, t, n) {
            var r,
              a = e.getUTCHours();
            switch (
              ((r =
                a >= 17
                  ? 'evening'
                  : a >= 12
                  ? 'afternoon'
                  : a >= 4
                  ? 'morning'
                  : 'night'),
              t)
            ) {
              case 'B':
              case 'BB':
              case 'BBB':
                return n.dayPeriod(r, {
                  width: 'abbreviated',
                  context: 'formatting',
                });
              case 'BBBBB':
                return n.dayPeriod(r, {
                  width: 'narrow',
                  context: 'formatting',
                });
              default:
                return n.dayPeriod(r, { width: 'wide', context: 'formatting' });
            }
          },
          h: function (e, t, n) {
            if ('ho' === t) {
              var r = e.getUTCHours() % 12;
              return 0 === r && (r = 12), n.ordinalNumber(r, { unit: 'hour' });
            }
            return M(e, t);
          },
          H: function (e, t, n) {
            return 'Ho' === t
              ? n.ordinalNumber(e.getUTCHours(), { unit: 'hour' })
              : k(e, t);
          },
          K: function (e, t, n) {
            var r = e.getUTCHours() % 12;
            return 'Ko' === t
              ? n.ordinalNumber(r, { unit: 'hour' })
              : y(r, t.length);
          },
          k: function (e, t, n) {
            var r = e.getUTCHours();
            return (
              0 === r && (r = 24),
              'ko' === t ? n.ordinalNumber(r, { unit: 'hour' }) : y(r, t.length)
            );
          },
          m: function (e, t, n) {
            return 'mo' === t
              ? n.ordinalNumber(e.getUTCMinutes(), { unit: 'minute' })
              : E(e, t);
          },
          s: function (e, t, n) {
            return 'so' === t
              ? n.ordinalNumber(e.getUTCSeconds(), { unit: 'second' })
              : S(e, t);
          },
          S: function (e, t) {
            return P(e, t);
          },
          X: function (e, t, n, r) {
            var a = (r._originalDate || e).getTimezoneOffset();
            if (0 === a) return 'Z';
            switch (t) {
              case 'X':
                return W(a);
              case 'XXXX':
              case 'XX':
                return Y(a);
              default:
                return Y(a, ':');
            }
          },
          x: function (e, t, n, r) {
            var a = (r._originalDate || e).getTimezoneOffset();
            switch (t) {
              case 'x':
                return W(a);
              case 'xxxx':
              case 'xx':
                return Y(a);
              default:
                return Y(a, ':');
            }
          },
          O: function (e, t, n, r) {
            var a = (r._originalDate || e).getTimezoneOffset();
            switch (t) {
              case 'O':
              case 'OO':
              case 'OOO':
                return 'GMT' + U(a, ':');
              default:
                return 'GMT' + Y(a, ':');
            }
          },
          z: function (e, t, n, r) {
            var a = (r._originalDate || e).getTimezoneOffset();
            switch (t) {
              case 'z':
              case 'zz':
              case 'zzz':
                return 'GMT' + U(a, ':');
              default:
                return 'GMT' + Y(a, ':');
            }
          },
          t: function (e, t, n, r) {
            var a = r._originalDate || e;
            return y(Math.floor(a.getTime() / 1e3), t.length);
          },
          T: function (e, t, n, r) {
            return y((r._originalDate || e).getTime(), t.length);
          },
        };
        var O = function (e, t) {
            switch (e) {
              case 'P':
                return t.date({ width: 'short' });
              case 'PP':
                return t.date({ width: 'medium' });
              case 'PPP':
                return t.date({ width: 'long' });
              default:
                return t.date({ width: 'full' });
            }
          },
          q = function (e, t) {
            switch (e) {
              case 'p':
                return t.time({ width: 'short' });
              case 'pp':
                return t.time({ width: 'medium' });
              case 'ppp':
                return t.time({ width: 'long' });
              default:
                return t.time({ width: 'full' });
            }
          },
          L = {
            p: q,
            P: function (e, t) {
              var n,
                r = e.match(/(P+)(p+)?/) || [],
                a = r[1],
                o = r[2];
              if (!o) return O(e, t);
              switch (a) {
                case 'P':
                  n = t.dateTime({ width: 'short' });
                  break;
                case 'PP':
                  n = t.dateTime({ width: 'medium' });
                  break;
                case 'PPP':
                  n = t.dateTime({ width: 'long' });
                  break;
                default:
                  n = t.dateTime({ width: 'full' });
              }
              return n
                .replace('{{date}}', O(a, t))
                .replace('{{time}}', q(o, t));
            },
          };
        const A = L;
        function H(e) {
          var t = new Date(
            Date.UTC(
              e.getFullYear(),
              e.getMonth(),
              e.getDate(),
              e.getHours(),
              e.getMinutes(),
              e.getSeconds(),
              e.getMilliseconds()
            )
          );
          return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
        }
        var F = ['D', 'DD'],
          j = ['YY', 'YYYY'];
        function I(e) {
          return -1 !== F.indexOf(e);
        }
        function z(e) {
          return -1 !== j.indexOf(e);
        }
        function B(e, t, n) {
          if ('YYYY' === e)
            throw new RangeError(
              'Use `yyyy` instead of `YYYY` (in `'
                .concat(t, '`) for formatting years to the input `')
                .concat(
                  n,
                  '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
                )
            );
          if ('YY' === e)
            throw new RangeError(
              'Use `yy` instead of `YY` (in `'
                .concat(t, '`) for formatting years to the input `')
                .concat(
                  n,
                  '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
                )
            );
          if ('D' === e)
            throw new RangeError(
              'Use `d` instead of `D` (in `'
                .concat(t, '`) for formatting days of the month to the input `')
                .concat(
                  n,
                  '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
                )
            );
          if ('DD' === e)
            throw new RangeError(
              'Use `dd` instead of `DD` (in `'
                .concat(t, '`) for formatting days of the month to the input `')
                .concat(
                  n,
                  '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md'
                )
            );
        }
        var Q = {
          lessThanXSeconds: {
            one: 'less than a second',
            other: 'less than {{count}} seconds',
          },
          xSeconds: { one: '1 second', other: '{{count}} seconds' },
          halfAMinute: 'half a minute',
          lessThanXMinutes: {
            one: 'less than a minute',
            other: 'less than {{count}} minutes',
          },
          xMinutes: { one: '1 minute', other: '{{count}} minutes' },
          aboutXHours: { one: 'about 1 hour', other: 'about {{count}} hours' },
          xHours: { one: '1 hour', other: '{{count}} hours' },
          xDays: { one: '1 day', other: '{{count}} days' },
          aboutXWeeks: { one: 'about 1 week', other: 'about {{count}} weeks' },
          xWeeks: { one: '1 week', other: '{{count}} weeks' },
          aboutXMonths: {
            one: 'about 1 month',
            other: 'about {{count}} months',
          },
          xMonths: { one: '1 month', other: '{{count}} months' },
          aboutXYears: { one: 'about 1 year', other: 'about {{count}} years' },
          xYears: { one: '1 year', other: '{{count}} years' },
          overXYears: { one: 'over 1 year', other: 'over {{count}} years' },
          almostXYears: {
            one: 'almost 1 year',
            other: 'almost {{count}} years',
          },
        };
        function G(e) {
          return function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = t.width ? String(t.width) : e.defaultWidth,
              r = e.formats[n] || e.formats[e.defaultWidth];
            return r;
          };
        }
        var R,
          X = {
            date: G({
              formats: {
                full: 'EEEE, MMMM do, y',
                long: 'MMMM do, y',
                medium: 'MMM d, y',
                short: 'MM/dd/yyyy',
              },
              defaultWidth: 'full',
            }),
            time: G({
              formats: {
                full: 'h:mm:ss a zzzz',
                long: 'h:mm:ss a z',
                medium: 'h:mm:ss a',
                short: 'h:mm a',
              },
              defaultWidth: 'full',
            }),
            dateTime: G({
              formats: {
                full: "{{date}} 'at' {{time}}",
                long: "{{date}} 'at' {{time}}",
                medium: '{{date}}, {{time}}',
                short: '{{date}}, {{time}}',
              },
              defaultWidth: 'full',
            }),
          },
          J = {
            lastWeek: "'last' eeee 'at' p",
            yesterday: "'yesterday at' p",
            today: "'today at' p",
            tomorrow: "'tomorrow at' p",
            nextWeek: "eeee 'at' p",
            other: 'P',
          };
        function _(e) {
          return function (t, n) {
            var r;
            if (
              'formatting' ===
                (null != n && n.context ? String(n.context) : 'standalone') &&
              e.formattingValues
            ) {
              var a = e.defaultFormattingWidth || e.defaultWidth,
                o = null != n && n.width ? String(n.width) : a;
              r = e.formattingValues[o] || e.formattingValues[a];
            } else {
              var i = e.defaultWidth,
                u = null != n && n.width ? String(n.width) : e.defaultWidth;
              r = e.values[u] || e.values[i];
            }
            return r[e.argumentCallback ? e.argumentCallback(t) : t];
          };
        }
        function $(e) {
          return function (t) {
            var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = n.width,
              a =
                (r && e.matchPatterns[r]) ||
                e.matchPatterns[e.defaultMatchWidth],
              o = t.match(a);
            if (!o) return null;
            var i,
              u = o[0],
              d =
                (r && e.parsePatterns[r]) ||
                e.parsePatterns[e.defaultParseWidth],
              s = Array.isArray(d)
                ? K(d, function (e) {
                    return e.test(u);
                  })
                : V(d, function (e) {
                    return e.test(u);
                  });
            (i = e.valueCallback ? e.valueCallback(s) : s),
              (i = n.valueCallback ? n.valueCallback(i) : i);
            var l = t.slice(u.length);
            return { value: i, rest: l };
          };
        }
        function V(e, t) {
          for (var n in e) if (e.hasOwnProperty(n) && t(e[n])) return n;
        }
        function K(e, t) {
          for (var n = 0; n < e.length; n++) if (t(e[n])) return n;
        }
        const Z = {
          code: 'en-US',
          formatDistance: function (e, t, n) {
            var r,
              a = Q[e];
            return (
              (r =
                'string' == typeof a
                  ? a
                  : 1 === t
                  ? a.one
                  : a.other.replace('{{count}}', t.toString())),
              null != n && n.addSuffix
                ? n.comparison && n.comparison > 0
                  ? 'in ' + r
                  : r + ' ago'
                : r
            );
          },
          formatLong: X,
          formatRelative: function (e, t, n, r) {
            return J[e];
          },
          localize: {
            ordinalNumber: function (e, t) {
              var n = Number(e),
                r = n % 100;
              if (r > 20 || r < 10)
                switch (r % 10) {
                  case 1:
                    return n + 'st';
                  case 2:
                    return n + 'nd';
                  case 3:
                    return n + 'rd';
                }
              return n + 'th';
            },
            era: _({
              values: {
                narrow: ['B', 'A'],
                abbreviated: ['BC', 'AD'],
                wide: ['Before Christ', 'Anno Domini'],
              },
              defaultWidth: 'wide',
            }),
            quarter: _({
              values: {
                narrow: ['1', '2', '3', '4'],
                abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
                wide: [
                  '1st quarter',
                  '2nd quarter',
                  '3rd quarter',
                  '4th quarter',
                ],
              },
              defaultWidth: 'wide',
              argumentCallback: function (e) {
                return e - 1;
              },
            }),
            month: _({
              values: {
                narrow: [
                  'J',
                  'F',
                  'M',
                  'A',
                  'M',
                  'J',
                  'J',
                  'A',
                  'S',
                  'O',
                  'N',
                  'D',
                ],
                abbreviated: [
                  'Jan',
                  'Feb',
                  'Mar',
                  'Apr',
                  'May',
                  'Jun',
                  'Jul',
                  'Aug',
                  'Sep',
                  'Oct',
                  'Nov',
                  'Dec',
                ],
                wide: [
                  'January',
                  'February',
                  'March',
                  'April',
                  'May',
                  'June',
                  'July',
                  'August',
                  'September',
                  'October',
                  'November',
                  'December',
                ],
              },
              defaultWidth: 'wide',
            }),
            day: _({
              values: {
                narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
                short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
                abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                wide: [
                  'Sunday',
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                ],
              },
              defaultWidth: 'wide',
            }),
            dayPeriod: _({
              values: {
                narrow: {
                  am: 'a',
                  pm: 'p',
                  midnight: 'mi',
                  noon: 'n',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
                abbreviated: {
                  am: 'AM',
                  pm: 'PM',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
                wide: {
                  am: 'a.m.',
                  pm: 'p.m.',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'morning',
                  afternoon: 'afternoon',
                  evening: 'evening',
                  night: 'night',
                },
              },
              defaultWidth: 'wide',
              formattingValues: {
                narrow: {
                  am: 'a',
                  pm: 'p',
                  midnight: 'mi',
                  noon: 'n',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
                abbreviated: {
                  am: 'AM',
                  pm: 'PM',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
                wide: {
                  am: 'a.m.',
                  pm: 'p.m.',
                  midnight: 'midnight',
                  noon: 'noon',
                  morning: 'in the morning',
                  afternoon: 'in the afternoon',
                  evening: 'in the evening',
                  night: 'at night',
                },
              },
              defaultFormattingWidth: 'wide',
            }),
          },
          match: {
            ordinalNumber:
              ((R = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function (e) {
                  return parseInt(e, 10);
                },
              }),
              function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = e.match(R.matchPattern);
                if (!n) return null;
                var r = n[0],
                  a = e.match(R.parsePattern);
                if (!a) return null;
                var o = R.valueCallback ? R.valueCallback(a[0]) : a[0];
                o = t.valueCallback ? t.valueCallback(o) : o;
                var i = e.slice(r.length);
                return { value: o, rest: i };
              }),
            era: $({
              matchPatterns: {
                narrow: /^(b|a)/i,
                abbreviated:
                  /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
                wide: /^(before christ|before common era|anno domini|common era)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: { any: [/^b/i, /^(a|c)/i] },
              defaultParseWidth: 'any',
            }),
            quarter: $({
              matchPatterns: {
                narrow: /^[1234]/i,
                abbreviated: /^q[1234]/i,
                wide: /^[1234](th|st|nd|rd)? quarter/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
              defaultParseWidth: 'any',
              valueCallback: function (e) {
                return e + 1;
              },
            }),
            month: $({
              matchPatterns: {
                narrow: /^[jfmasond]/i,
                abbreviated:
                  /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
                wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: {
                narrow: [
                  /^j/i,
                  /^f/i,
                  /^m/i,
                  /^a/i,
                  /^m/i,
                  /^j/i,
                  /^j/i,
                  /^a/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
                any: [
                  /^ja/i,
                  /^f/i,
                  /^mar/i,
                  /^ap/i,
                  /^may/i,
                  /^jun/i,
                  /^jul/i,
                  /^au/i,
                  /^s/i,
                  /^o/i,
                  /^n/i,
                  /^d/i,
                ],
              },
              defaultParseWidth: 'any',
            }),
            day: $({
              matchPatterns: {
                narrow: /^[smtwf]/i,
                short: /^(su|mo|tu|we|th|fr|sa)/i,
                abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
                wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
              },
              defaultMatchWidth: 'wide',
              parsePatterns: {
                narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
                any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
              },
              defaultParseWidth: 'any',
            }),
            dayPeriod: $({
              matchPatterns: {
                narrow:
                  /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
                any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
              },
              defaultMatchWidth: 'any',
              parsePatterns: {
                any: {
                  am: /^a/i,
                  pm: /^p/i,
                  midnight: /^mi/i,
                  noon: /^no/i,
                  morning: /morning/i,
                  afternoon: /afternoon/i,
                  evening: /evening/i,
                  night: /night/i,
                },
              },
              defaultParseWidth: 'any',
            }),
          },
          options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
        };
        var ee = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
          te = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
          ne = /^'([^]*?)'?$/,
          re = /''/g,
          ae = /[a-zA-Z]/;
        function oe(e) {
          var t = e.match(ne);
          return t ? t[1].replace(re, "'") : e;
        }
        class ie {
          constructor(e, t, n, r, a) {
            (this.title = e),
              (this.description = n),
              (this.date = t),
              (this.dueDate = r),
              (this.important = a);
          }
        }
        const ue = (e) => {
            let t = new Date();
            const n = t.getMonth() + 1,
              r = t.getDate(),
              a = t.getFullYear();
            let o = e.split('-');
            if (n == o[1] && r == o[2] && a == o[0]) return !0;
          },
          de = (e) => {
            let t = e.split('-'),
              n = (function (e, t, n) {
                var a, d, l, c, m, f, h, g, w, p, b, T, y, D, x, C, M, k;
                r(2, arguments);
                var E = String(t),
                  S = v(),
                  P =
                    null !==
                      (a =
                        null !== (d = null == n ? void 0 : n.locale) &&
                        void 0 !== d
                          ? d
                          : S.locale) && void 0 !== a
                      ? a
                      : Z,
                  U = u(
                    null !==
                      (l =
                        null !==
                          (c =
                            null !==
                              (m =
                                null !==
                                  (f =
                                    null == n
                                      ? void 0
                                      : n.firstWeekContainsDate) && void 0 !== f
                                  ? f
                                  : null == n ||
                                    null === (h = n.locale) ||
                                    void 0 === h ||
                                    null === (g = h.options) ||
                                    void 0 === g
                                  ? void 0
                                  : g.firstWeekContainsDate) && void 0 !== m
                              ? m
                              : S.firstWeekContainsDate) && void 0 !== c
                          ? c
                          : null === (w = S.locale) ||
                            void 0 === w ||
                            null === (p = w.options) ||
                            void 0 === p
                          ? void 0
                          : p.firstWeekContainsDate) && void 0 !== l
                      ? l
                      : 1
                  );
                if (!(U >= 1 && U <= 7))
                  throw new RangeError(
                    'firstWeekContainsDate must be between 1 and 7 inclusively'
                  );
                var W = u(
                  null !==
                    (b =
                      null !==
                        (T =
                          null !==
                            (y =
                              null !==
                                (D = null == n ? void 0 : n.weekStartsOn) &&
                              void 0 !== D
                                ? D
                                : null == n ||
                                  null === (x = n.locale) ||
                                  void 0 === x ||
                                  null === (C = x.options) ||
                                  void 0 === C
                                ? void 0
                                : C.weekStartsOn) && void 0 !== y
                            ? y
                            : S.weekStartsOn) && void 0 !== T
                        ? T
                        : null === (M = S.locale) ||
                          void 0 === M ||
                          null === (k = M.options) ||
                          void 0 === k
                        ? void 0
                        : k.weekStartsOn) && void 0 !== b
                    ? b
                    : 0
                );
                if (!(W >= 0 && W <= 6))
                  throw new RangeError(
                    'weekStartsOn must be between 0 and 6 inclusively'
                  );
                if (!P.localize)
                  throw new RangeError('locale must contain localize property');
                if (!P.formatLong)
                  throw new RangeError(
                    'locale must contain formatLong property'
                  );
                var Y = o(e);
                if (!i(Y)) throw new RangeError('Invalid time value');
                var O = H(Y),
                  q = s(Y, O),
                  L = {
                    firstWeekContainsDate: U,
                    weekStartsOn: W,
                    locale: P,
                    _originalDate: Y,
                  };
                return E.match(te)
                  .map(function (e) {
                    var t = e[0];
                    return 'p' === t || 'P' === t
                      ? (0, A[t])(e, P.formatLong)
                      : e;
                  })
                  .join('')
                  .match(ee)
                  .map(function (r) {
                    if ("''" === r) return "'";
                    var a = r[0];
                    if ("'" === a) return oe(r);
                    var o = N[a];
                    if (o)
                      return (
                        (null != n && n.useAdditionalWeekYearTokens) ||
                          !z(r) ||
                          B(r, t, String(e)),
                        (null != n && n.useAdditionalDayOfYearTokens) ||
                          !I(r) ||
                          B(r, t, String(e)),
                        o(q, r, P.localize, L)
                      );
                    if (a.match(ae))
                      throw new RangeError(
                        'Format string contains an unescaped latin alphabet character `' +
                          a +
                          '`'
                      );
                    return r;
                  })
                  .join('');
              })(new Date(t[0], t[1] - 1, t[2]), 'MM/dd/yyyy');
            return n;
          };
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.d = (e, t) => {
    for (var r in t)
      n.o(t, r) &&
        !n.o(e, r) &&
        Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    n(575),
    n(171);
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0TG9uZy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdExvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9tYXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGF0ZUNoZWNrZXIsIE5vdGVNYWtlciwgZm9ybWF0RGF0ZSB9IGZyb20gJy4vc2NyaXB0JztcclxuY29uc3QgdG9kb3MgPSBbXTtcclxuY29uc3QgaW1wb3J0YW50VG9Eb3MgPSBbXTtcclxuY29uc3QgdG9kYXlzVG9Eb3MgPSBbXTtcclxuXHJcbmNvbnN0IGFkZFRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkVG9EbycpO1xyXG5jb25zdCB1aSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1aScpO1xyXG5jb25zdCB0b2RvQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b2RvQ29udCcpO1xyXG5jb25zdCBhbGxUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbFRvRG9zJyk7XHJcbmNvbnN0IHRvZGF5c1RvRG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXlzVG9Eb3MnKTtcclxuY29uc3QgaW1wb3J0YW50VG9EbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbXBvcnRhbnRUb0RvcycpO1xyXG5jb25zdCBjb250SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW5IZWFkeScpO1xyXG5sZXQgZXZlbnRDb3VudGVyID0gMDtcclxuXHJcbmFkZFRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgLy9wcmV2ZW50IG11bHRpcGxlIGNsaWNrc1xyXG4gIGV2ZW50Q291bnRlciArPSAxO1xyXG4gIGlmIChldmVudENvdW50ZXIgPiAxKSB7XHJcbiAgICBhbGVydCgnQWRkIGEgVG8tRG8nKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8vcG9wdXAgc2NyZWVuXHJcbiAgY29uc3QgYWRkU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgYWRkU2NyZWVuLnNldEF0dHJpYnV0ZSgnaWQnLCAnYWRkU2NyZWVuJyk7XHJcblxyXG4gIC8vaGVhZGVyXHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gIGgxLnNldEF0dHJpYnV0ZSgnaWQnLCAncG9wdXBIZWFkZXInKTtcclxuICBoMS5pbm5lclRleHQgPSAnQWRkIGEgVG8tRG8nO1xyXG5cclxuICAvL2VudGVyIGEgdG9kb1xyXG4gIGNvbnN0IGVudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgZW50ZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xyXG4gIGVudGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW50ZXJCdXR0b24nKTtcclxuICBlbnRlci5pbm5lclRleHQgPSAnRW50ZXInO1xyXG5cclxuICAvL2lucHV0IGZpZWxkc1xyXG4gIGNvbnN0IHRpdGxlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbGFiZWwxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBsYWJlbDEuaW5uZXJUZXh0ID0gJ1RpdGxlOic7XHJcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kKGxhYmVsMSwgdGl0bGVJbnB1dCk7XHJcblxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbGFiZWwyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzY3JpcCcpO1xyXG4gIGxhYmVsMi5pbm5lclRleHQgPSAnRGVzY3JpcHRpb246JztcclxuICBkZXNjcmlwdGlvbkNvbnRhaW5lci5hcHBlbmQobGFiZWwyLCBkZXNjcmlwdGlvbklucHV0KTtcclxuXHJcbiAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGNvbnN0IGxhYmVsMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgbGFiZWwzLmlubmVyVGV4dCA9ICdEYXRlOic7XHJcbiAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2RhdGUnKTtcclxuICBkYXRlQ29udGFpbmVyLmFwcGVuZChsYWJlbDMsIGRhdGVJbnB1dCk7XHJcblxyXG4gIGNvbnN0IGR1ZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBjb25zdCBsYWJlbDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gIGxhYmVsNS5pbm5lclRleHQgPSAnRHVlIERhdGU6JztcclxuICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpO1xyXG4gIGR1ZURhdGVDb250YWluZXIuYXBwZW5kKGxhYmVsNSwgZHVlRGF0ZUlucHV0KTtcclxuXHJcbiAgY29uc3QgaW1wb3J0YW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgY29uc3QgbGFiZWw0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICBjb25zdCBpbXBvcnRhbnRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgaW1wb3J0YW50SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgbGFiZWw0LmlubmVyVGV4dCA9ICdJbXBvcnRhbnQ/JztcclxuICBpbXBvcnRhbnRDb250YWluZXIuYXBwZW5kKGxhYmVsNCwgaW1wb3J0YW50SW5wdXQpO1xyXG5cclxuICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZChcclxuICAgIHRpdGxlQ29udGFpbmVyLFxyXG4gICAgZGVzY3JpcHRpb25Db250YWluZXIsXHJcbiAgICBkYXRlQ29udGFpbmVyLFxyXG4gICAgZHVlRGF0ZUNvbnRhaW5lcixcclxuICAgIGltcG9ydGFudENvbnRhaW5lclxyXG4gICk7XHJcbiAgaW5wdXRDb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsICdpbnB1dENvbnRhaW5lcicpO1xyXG5cclxuICAvL2xhYmVsIHN0eWxpbmdcclxuICBjb25zdCBsYWJlbEFyciA9IFtsYWJlbDEsIGxhYmVsMiwgbGFiZWwzLCBsYWJlbDQsIGxhYmVsNV07XHJcbiAgZm9yIChsZXQgbGFiZWwgb2YgbGFiZWxBcnIpIHtcclxuICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ2xhYmVscycpO1xyXG4gIH1cclxuXHJcbiAgLy9pbnB1dCBjbGVhclxyXG4gIGNvbnN0IGlucHV0QXJyID0gW3RpdGxlSW5wdXQsIGRhdGVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZHVlRGF0ZUlucHV0XTtcclxuICBjb25zdCBpbnB1dExhYmVsID0gWy4uLmlucHV0QXJyLCAuLi5sYWJlbEFycl07XHJcbiAgZm9yIChsZXQgeCBvZiBpbnB1dExhYmVsKSB7XHJcbiAgICB4LmNsYXNzTGlzdC5hZGQoJ2lMQ29udGFpbmVyJyk7XHJcbiAgfVxyXG5cclxuICAvL2V2ZW50IGxpc3RlbmVyIGZvciBlbnRlciBidXR0b25cclxuICBlbnRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHVpLnJlbW92ZUNoaWxkKGFkZFNjcmVlbik7XHJcbiAgICBldmVudENvdW50ZXIgPSAwO1xyXG4gICAgZm9yIChsZXQgaW5wdXQgb2YgaW5wdXRBcnIpIHtcclxuICAgICAgaW5wdXQuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdPbmUgPSBuZXcgTm90ZU1ha2VyKFxyXG4gICAgICB0aXRsZUlucHV0LnZhbHVlLFxyXG4gICAgICBkYXRlSW5wdXQudmFsdWUsXHJcbiAgICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsXHJcbiAgICAgIGR1ZURhdGVJbnB1dC52YWx1ZSxcclxuICAgICAgaW1wb3J0YW50SW5wdXRcclxuICAgICk7XHJcblxyXG4gICAgY3JlYXRlVG9kbyhcclxuICAgICAgbmV3T25lLnRpdGxlLFxyXG4gICAgICBuZXdPbmUuZGF0ZSxcclxuICAgICAgbmV3T25lLmRlc2NyaXB0aW9uLFxyXG4gICAgICBuZXdPbmUuZHVlRGF0ZSxcclxuICAgICAgbmV3T25lLmltcG9ydGFudFxyXG4gICAgKTtcclxuICAgIGlmIChcclxuICAgICAgY29udEhlYWRlci5pbm5lclRleHQgPT0gXCJObyBJbXBvcnRhbnQgVG8tRG8nc1wiICYmXHJcbiAgICAgIG5ld09uZS5pbXBvcnRhbnQuY2hlY2tlZCA9PSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgY29udEhlYWRlci5pbm5lclRleHQgPSBcIkltcG9ydGFudCBUby1EbydzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICBjb250SGVhZGVyLmlubmVyVGV4dCA9PSBcIk5vIFRvLURvJ3MgZm9yIFRvZGF5XCIgJiZcclxuICAgICAgZGF0ZUNoZWNrZXIobmV3T25lLmR1ZURhdGUpID09PSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgY29udEhlYWRlci5pbm5lclRleHQgPSBcIlRvZGF5J3MgVG8tRG8nc1wiO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvL2FwcGVuZCBlbGVtZW50c1xyXG4gIGFkZFNjcmVlbi5hcHBlbmQoaDEsIGlucHV0Q29udGFpbmVyLCBlbnRlcik7XHJcbiAgdWkuYXBwZW5kKGFkZFNjcmVlbik7XHJcbn0pO1xyXG5cclxuY29uc3QgaW1wb3J0YW5jZSA9ICh4KSA9PiB7XHJcbiAgaWYgKHguY2hlY2tlZCA9PSB0cnVlKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICdmYWxzZSc7XHJcbiAgfVxyXG59O1xyXG5jb25zdCBpbXBvcnRhbmNlRGl2ID0gKHgpID0+IHtcclxuICBpZiAoeC5jaGVja2VkID09IHRydWUpIHtcclxuICAgIHJldHVybiAn4q2QJztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuICfinKknO1xyXG4gIH1cclxufTtcclxubGV0IG51bW15ID0gLTE7XHJcblxyXG5jb25zdCBjcmVhdGVUb2RvID0gKHRpdGxlLCBkYXRlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW1wb3J0YW50KSA9PiB7XHJcbiAgbnVtbXkrKztcclxuXHJcbiAgbGV0IG5ld1RvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICBuZXdUb2RvLnNldEF0dHJpYnV0ZSgnaWQnLCBgbmV3VG9kbyR7bnVtbXl9YCk7XHJcbiAgbmV3VG9kby5jbGFzc0xpc3QuYWRkKCduZXdUb2RvJyk7XHJcbiAgbmV3VG9kby5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gIGxldCB0aXRsZVR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgbGV0IGRhdGVUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGxldCBkZXNjcmlwdGlvblR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgbGV0IGR1ZURhdGVUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGxldCBpbXBvcnRhbnRUeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gIGltcG9ydGFudFR4dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2ltcG9ydGFudEJ1dHRvbicpO1xyXG4gIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICBkZWxldGVCdXR0b24uc2V0QXR0cmlidXRlKCdpZCcsICdkZWxldGVCdXR0b24nKTtcclxuICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEnLCBgJHtudW1teX1gKTtcclxuICBkZWxldGVCdXR0b24uaW5uZXJUZXh0ID0gJ0RvbmUnO1xyXG5cclxuICB0aXRsZVR4dC5pbm5lclRleHQgPSB0aXRsZTtcclxuICBkYXRlID09ICcnXHJcbiAgICA/IChkYXRlVHh0LmlubmVyVGV4dCA9ICcnKVxyXG4gICAgOiAoZGF0ZVR4dC5pbm5lclRleHQgPSBmb3JtYXREYXRlKGRhdGUpKTtcclxuXHJcbiAgZGVzY3JpcHRpb25UeHQuaW5uZXJUZXh0ID0gZGVzY3JpcHRpb247XHJcblxyXG4gIGR1ZURhdGUgPT0gJydcclxuICAgID8gKGR1ZURhdGVUeHQuaW5uZXJUZXh0ID0gJycpXHJcbiAgICA6IChkdWVEYXRlVHh0LmlubmVyVGV4dCA9IGZvcm1hdERhdGUoZHVlRGF0ZSkpO1xyXG5cclxuICBpbXBvcnRhbnRUeHQuaW5uZXJUZXh0ID0gaW1wb3J0YW5jZURpdihpbXBvcnRhbnQpO1xyXG4gIGltcG9ydGFudFR4dC5pbm5lclRleHQgPT09ICfinKknXHJcbiAgICA/IGltcG9ydGFudFR4dC5jbGFzc0xpc3QuYWRkKCdub3RJbXBvcnRhbnQnKVxyXG4gICAgOiAtMTtcclxuXHJcbiAgbmV3VG9kby5hcHBlbmQoXHJcbiAgICB0aXRsZVR4dCxcclxuICAgIGRlc2NyaXB0aW9uVHh0LFxyXG4gICAgZGF0ZVR4dCxcclxuICAgIGR1ZURhdGVUeHQsXHJcbiAgICBpbXBvcnRhbnRUeHQsXHJcbiAgICBkZWxldGVCdXR0b25cclxuICApO1xyXG5cclxuICB0b2Rvcy5wdXNoKG5ld1RvZG8pO1xyXG5cclxuICBpbXBvcnRhbmNlKGltcG9ydGFudCkgPT09IHRydWUgPyBpbXBvcnRhbnRUb0Rvcy5wdXNoKG5ld1RvZG8pIDogLTE7XHJcblxyXG4gIGRhdGVDaGVja2VyKGR1ZURhdGUpID09PSB0cnVlID8gdG9kYXlzVG9Eb3MucHVzaChuZXdUb2RvKSA6IC0xO1xyXG5cclxuICBkaXNwbGF5KCk7XHJcblxyXG4gIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGxldCBhdHRyaWJ1dGVWYWx1ZSA9IHRvZG9zLmluZGV4T2YobmV3VG9kbyk7XHJcbiAgICBsZXQgaW1wb1ZhbCA9IGltcG9ydGFudFRvRG9zLmluZGV4T2YobmV3VG9kbyk7XHJcbiAgICBsZXQgdG9kYXlWYWwgPSB0b2RheXNUb0Rvcy5pbmRleE9mKG5ld1RvZG8pO1xyXG4gICAgdG9kb0NvbnQucmVtb3ZlQ2hpbGQobmV3VG9kbyk7XHJcbiAgICB0b2Rvcy5zcGxpY2UoYXR0cmlidXRlVmFsdWUsIDEpO1xyXG4gICAgaW1wb1ZhbCAhPT0gLTEgPyBpbXBvcnRhbnRUb0Rvcy5zcGxpY2UoaW1wb1ZhbCwgMSkgOiAtMTtcclxuICAgIHRvZGF5VmFsICE9PSAtMSA/IHRvZGF5c1RvRG9zLnNwbGljZSh0b2RheVZhbCwgMSkgOiAtMTtcclxuXHJcbiAgICBpZiAoXHJcbiAgICAgIGNvbnRIZWFkZXIuaW5uZXJUZXh0ID09IFwiSW1wb3J0YW50IFRvLURvJ3NcIiAmJlxyXG4gICAgICBpbXBvcnRhbnRUb0Rvcy5sZW5ndGggPCAxXHJcbiAgICApIHtcclxuICAgICAgY29udEhlYWRlci5pbm5lclRleHQgPSBcIk5vIEltcG9ydGFudCBUby1EbydzXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNvbnRIZWFkZXIuaW5uZXJUZXh0ID09IFwiVG9kYXkncyBUby1EbydzXCIgJiYgdG9kYXlzVG9Eb3MubGVuZ3RoIDwgMSkge1xyXG4gICAgICBjb250SGVhZGVyLmlubmVyVGV4dCA9IFwiTm8gVG8tRG8ncyBmb3IgVG9kYXlcIjtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgaW1wb3J0YW50VHh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbGV0IG5vdEltcG9WYWwgPSBpbXBvcnRhbnRUb0Rvcy5pbmRleE9mKG5ld1RvZG8pO1xyXG4gICAgaWYgKGltcG9ydGFudFR4dC5pbm5lclRleHQgPT09ICfinKknKSB7XHJcbiAgICAgIGltcG9ydGFudFRvRG9zLnB1c2gobmV3VG9kbyk7XHJcbiAgICAgIGltcG9ydGFudFR4dC5pbm5lclRleHQgPSAn4q2QJztcclxuICAgICAgaW1wb3J0YW50VHh0LmNsYXNzTGlzdC5yZW1vdmUoJ25vdEltcG9ydGFudCcpO1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgY29udEhlYWRlci5pbm5lclRleHQgPT0gXCJObyBJbXBvcnRhbnQgVG8tRG8nc1wiICYmXHJcbiAgICAgICAgaW1wb3J0YW50VG9Eb3MubGVuZ3RoID4gMFxyXG4gICAgICApIHtcclxuICAgICAgICBjb250SGVhZGVyLmlubmVyVGV4dCA9IFwiSW1wb3J0YW50IFRvLURvJ3NcIjtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW1wb3J0YW50VG9Eb3Muc3BsaWNlKG5vdEltcG9WYWwsIDEpO1xyXG4gICAgICBpbXBvcnRhbnRUeHQuaW5uZXJUZXh0ID0gJ+KcqSc7XHJcbiAgICAgIGltcG9ydGFudFR4dC5jbGFzc0xpc3QuYWRkKCdub3RJbXBvcnRhbnQnKTtcclxuICAgICAgY2xlYXIoKTtcclxuXHJcbiAgICAgIC8vcmVsb2FkaW5nIHRoZSB0b2Rvc1xyXG4gICAgICBoZWFkZXJDaGVjaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuLy9tZW51IGV2ZW50IGxpc3RlbmVyc1xyXG5cclxuaW1wb3J0YW50VG9Eby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjbGVhcigpO1xyXG4gIGlmIChpbXBvcnRhbnRUb0Rvcy5sZW5ndGggPCAxKSB7XHJcbiAgICBjb250SGVhZGVyLmlubmVyVGV4dCA9IFwiTm8gSW1wb3J0YW50IFRvLURvJ3NcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgY29udEhlYWRlci5pbm5lclRleHQgPSBcIkltcG9ydGFudCBUby1EbydzXCI7XHJcbiAgICBmb3IgKGxldCBpbXBvIG9mIGltcG9ydGFudFRvRG9zKSB7XHJcbiAgICAgIHRvZG9Db250LmFwcGVuZChpbXBvKTtcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuYWxsVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBjbGVhcigpO1xyXG4gIGlmICh0b2Rvcy5sZW5ndGggPCAxKSB7XHJcbiAgICBjb250SGVhZGVyLmlubmVyVGV4dCA9IFwiQWxsIFRvLURvJ3NcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgY29udEhlYWRlci5pbm5lclRleHQgPSBcIkFsbCBUby1EbydzXCI7XHJcbiAgICBmb3IgKGxldCBhbGwgb2YgdG9kb3MpIHtcclxuICAgICAgdG9kb0NvbnQuYXBwZW5kKGFsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbnRvZGF5c1RvRG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgY2xlYXIoKTtcclxuICBpZiAodG9kYXlzVG9Eb3MubGVuZ3RoIDwgMSkge1xyXG4gICAgY29udEhlYWRlci5pbm5lclRleHQgPSBcIk5vIFRvLURvJ3MgZm9yIFRvZGF5XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnRIZWFkZXIuaW5uZXJUZXh0ID0gXCJUb2RheSdzIFRvLURvJ3NcIjtcclxuICAgIGZvciAobGV0IHRvZGF5IG9mIHRvZGF5c1RvRG9zKSB7XHJcbiAgICAgIHRvZG9Db250LmFwcGVuZCh0b2RheSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vY2xlYXIgZnVuY1xyXG5jb25zdCBjbGVhciA9ICgpID0+IHtcclxuICB0b2RvQ29udC5pbm5lckhUTUwgPSAnJztcclxufTtcclxuXHJcbi8vIGRpc3BsYXkgdGhlIHRvZG9zXHJcbmNvbnN0IGRpc3BsYXkgPSAoKSA9PiB7XHJcbiAgaWYgKGNvbnRIZWFkZXIuaW5uZXJUZXh0ID09IFwiQWxsIFRvLURvJ3NcIikge1xyXG4gICAgZm9yIChsZXQgdG9kIG9mIHRvZG9zKSB7XHJcbiAgICAgIHRvZG9Db250LmFwcGVuZCh0b2QpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBjb250SGVhZGVyLmlubmVyVGV4dCA9PSBcIk5vIEltcG9ydGFudCBUby1EbydzXCIgfHxcclxuICAgIGNvbnRIZWFkZXIuaW5uZXJUZXh0ID09IFwiSW1wb3J0YW50IFRvLURvJ3NcIlxyXG4gICkge1xyXG4gICAgZm9yIChsZXQgdG9kIG9mIGltcG9ydGFudFRvRG9zKSB7XHJcbiAgICAgIHRvZG9Db250LmFwcGVuZCh0b2QpO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBmb3IgKGxldCB0b2Qgb2YgdG9kYXlzVG9Eb3MpIHtcclxuICAgICAgdG9kb0NvbnQuYXBwZW5kKHRvZCk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuLy9kaXNwbGF5IHRvZG8gYmFzZWQgb24gY3VycmVudCBoZWFkZXJcclxuY29uc3QgaGVhZGVyQ2hlY2sgPSAoKSA9PiB7XHJcbiAgaWYgKGNvbnRIZWFkZXIuaW5uZXJUZXh0ID09IFwiSW1wb3J0YW50IFRvLURvJ3NcIikge1xyXG4gICAgZm9yIChsZXQgaW1wbyBvZiBpbXBvcnRhbnRUb0Rvcykge1xyXG4gICAgICB0b2RvQ29udC5hcHBlbmQoaW1wbyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChjb250SGVhZGVyLmlubmVyVGV4dCA9PSBcIkFsbCBUby1EbydzXCIpIHtcclxuICAgIGZvciAobGV0IGltcG8gb2YgdG9kb3MpIHtcclxuICAgICAgdG9kb0NvbnQuYXBwZW5kKGltcG8pO1xyXG4gICAgfVxyXG4gICAgY29udEhlYWRlci5pbm5lclRleHQgPSBcIkFsbCBUby1EbydzXCI7XHJcbiAgfVxyXG4gIGlmIChjb250SGVhZGVyLmlubmVyVGV4dCA9PSBcIlRvZGF5J3MgVG8tRG8nc1wiKSB7XHJcbiAgICBmb3IgKGxldCBpbXBvIG9mIHRvZGF5c1RvRG9zKSB7XHJcbiAgICAgIHRvZG9Db250LmFwcGVuZChpbXBvKTtcclxuICAgIH1cclxuICAgIGNvbnRIZWFkZXIuaW5uZXJUZXh0ID0gXCJUb2RheSdzIFRvLURvJ3NcIjtcclxuICB9XHJcbiAgaWYgKFxyXG4gICAgY29udEhlYWRlci5pbm5lclRleHQgPT0gXCJJbXBvcnRhbnQgVG8tRG8nc1wiICYmXHJcbiAgICBpbXBvcnRhbnRUb0Rvcy5sZW5ndGggPCAxXHJcbiAgKSB7XHJcbiAgICBjb250SGVhZGVyLmlubmVyVGV4dCA9IFwiTm8gSW1wb3J0YW50IFRvLURvJ3NcIjtcclxuICB9XHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gdmFsdWUgYSBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLiBUaGUgZnVuY3Rpb24gd29ya3MgZm9yIGRhdGVzIHRyYW5zZmVycmVkIGFjcm9zcyBpZnJhbWVzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgLSB0aGUgdmFsdWUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmIHRoZSBnaXZlbiB2YWx1ZSBpcyBhIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIGEgdmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZShuZXcgRGF0ZSgpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoTmFOKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igc29tZSB2YWx1ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzRGF0ZSgnMjAxNC0wMi0zMScpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhbiBvYmplY3Q6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoe30pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCBpc0RhdGUgZnJvbSBcIi4uL2lzRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuXG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKE51bWJlcihkYXRlKSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcblxuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyR3ZWVrU3RhcnRzT24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gIT09IHZvaWQgMCA/IF9vcHRpb25zJHdlZWtTdGFydHNPbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8ud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi53ZWVrU3RhcnRzT24pICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZGVmYXVsdE9wdGlvbnMgPSBnZXREZWZhdWx0T3B0aW9ucygpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gdG9JbnRlZ2VyKChfcmVmID0gKF9yZWYyID0gKF9yZWYzID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9IF9vcHRpb25zJGxvY2FsZS5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZSRvcHRpby5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYzICE9PSB2b2lkIDAgPyBfcmVmMyA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IDEpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX3JlZjIsIF9yZWYzLCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZSwgX29wdGlvbnMkbG9jYWxlJG9wdGlvLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDI7XG5cbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vlaywgb3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuXG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gKi9cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwidmFyIGRhdGVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIHRpbWVMb25nRm9ybWF0dGVyID0gZnVuY3Rpb24gKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcblxudmFyIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIChwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pIHx8IFtdO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn07XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFwiKSk7XG4gIH1cbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcblxudmFyIGZvcm1hdERpc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0O1xuICB2YXIgdG9rZW5WYWx1ZSA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcblxuICBpZiAodHlwZW9mIHRva2VuVmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IHRva2VuVmFsdWUub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQudG9TdHJpbmcoKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0RGlzdGFuY2U7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgICAvLyBUT0RPOiBSZW1vdmUgU3RyaW5nKClcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuICAgIGlmICghbWF0Y2hSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcbiAgICBpZiAoIXBhcnNlUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFyIHJlc3QgPSBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiByZXN0XG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgb3B0aW9ucykge1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuXG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi8uLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRMb2NhbGU7IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddXG59OyAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbi8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4vLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbnZhciBvcmRpbmFsTnVtYmVyID0gZnVuY3Rpb24gKGRpcnR5TnVtYmVyLCBfb3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgLlxuICAvL1xuICAvLyBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJy5cblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59O1xuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBxdWFydGVyIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgb3B0aW9ucykge1xuICB2YXIgX3JlZiwgX29wdGlvbnMkbG9jYWxlLCBfcmVmMiwgX3JlZjMsIF9yZWY0LCBfb3B0aW9ucyRmaXJzdFdlZWtDb24sIF9vcHRpb25zJGxvY2FsZTIsIF9vcHRpb25zJGxvY2FsZTIkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLCBfcmVmNSwgX3JlZjYsIF9yZWY3LCBfb3B0aW9ucyR3ZWVrU3RhcnRzT24sIF9vcHRpb25zJGxvY2FsZTMsIF9vcHRpb25zJGxvY2FsZTMkb3B0aSwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMywgX2RlZmF1bHRPcHRpb25zJGxvY2FsNDtcblxuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBsb2NhbGUgPSAoX3JlZiA9IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRsb2NhbGUgIT09IHZvaWQgMCA/IF9vcHRpb25zJGxvY2FsZSA6IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgIT09IG51bGwgJiYgX3JlZiAhPT0gdm9pZCAwID8gX3JlZiA6IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYyID0gKF9yZWYzID0gKF9yZWY0ID0gKF9vcHRpb25zJGZpcnN0V2Vla0NvbiA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9vcHRpb25zJGZpcnN0V2Vla0NvbiAhPT0gdm9pZCAwID8gX29wdGlvbnMkZmlyc3RXZWVrQ29uIDogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlMiRvcHRpID0gX29wdGlvbnMkbG9jYWxlMi5vcHRpb25zKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9vcHRpb25zJGxvY2FsZTIkb3B0aS5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWY0ICE9PSB2b2lkIDAgPyBfcmVmNCA6IGRlZmF1bHRPcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9IF9kZWZhdWx0T3B0aW9ucyRsb2NhbC5vcHRpb25zKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjIgIT09IHZvaWQgMCA/IF9yZWYyIDogMSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghKG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIFN0cmluZyhkaXJ0eURhdGUpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICB2YXIgbWF0Y2hlZCA9IGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApO1xuXG4gIGlmICghbWF0Y2hlZCkge1xuICAgIHJldHVybiBpbnB1dDtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5jbGFzcyBOb3RlTWFrZXIge1xyXG4gIGNvbnN0cnVjdG9yKHRvZG8sIGRhdGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBjaGVjaykge1xyXG4gICAgdGhpcy50aXRsZSA9IHRvZG87XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMuaW1wb3J0YW50ID0gY2hlY2s7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkYXRlQ2hlY2tlciA9ICh1c2VyRGF0ZSkgPT4ge1xyXG4gIGxldCB0b2RheXNEYXRlID0gbmV3IERhdGUoKTtcclxuICBjb25zdCBtb250aCA9IHRvZGF5c0RhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgY29uc3QgZGF5ID0gdG9kYXlzRGF0ZS5nZXREYXRlKCk7XHJcbiAgY29uc3QgeWVhciA9IHRvZGF5c0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuICBsZXQgc3BsaXREYXRlID0gdXNlckRhdGUuc3BsaXQoJy0nKTtcclxuXHJcbiAgaWYgKG1vbnRoID09IHNwbGl0RGF0ZVsxXSAmJiBkYXkgPT0gc3BsaXREYXRlWzJdICYmIHllYXIgPT0gc3BsaXREYXRlWzBdKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBmb3JtYXREYXRlID0gKHVzZXJEYXRlKSA9PiB7XHJcbiAgbGV0IHNwbGl0RGF0ZXMgPSB1c2VyRGF0ZS5zcGxpdCgnLScpO1xyXG4gIGxldCBmb3JtYXR0ZWQgPSBmb3JtYXQoXHJcbiAgICBuZXcgRGF0ZShzcGxpdERhdGVzWzBdLCBzcGxpdERhdGVzWzFdIC0gMSwgc3BsaXREYXRlc1syXSksXHJcbiAgICAnTU0vZGQveXl5eSdcclxuICApO1xyXG4gIHJldHVybiBmb3JtYXR0ZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgeyBkYXRlQ2hlY2tlciwgTm90ZU1ha2VyLCBmb3JtYXREYXRlIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyg1NzUpO1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3MSk7XG4iXSwibmFtZXMiOlsidG9kb3MiLCJpbXBvcnRhbnRUb0RvcyIsInRvZGF5c1RvRG9zIiwiYWRkVG9kbyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInVpIiwidG9kb0NvbnQiLCJhbGxUb2RvIiwidG9kYXlzVG9EbyIsImltcG9ydGFudFRvRG8iLCJjb250SGVhZGVyIiwiZXZlbnRDb3VudGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFsZXJ0IiwiYWRkU2NyZWVuIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImgxIiwiaW5uZXJUZXh0IiwiZW50ZXIiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0aXRsZUNvbnRhaW5lciIsImxhYmVsMSIsInRpdGxlSW5wdXQiLCJhcHBlbmQiLCJkZXNjcmlwdGlvbkNvbnRhaW5lciIsImxhYmVsMiIsImRlc2NyaXB0aW9uSW5wdXQiLCJkYXRlQ29udGFpbmVyIiwibGFiZWwzIiwiZGF0ZUlucHV0IiwiZHVlRGF0ZUNvbnRhaW5lciIsImxhYmVsNSIsImR1ZURhdGVJbnB1dCIsImltcG9ydGFudENvbnRhaW5lciIsImxhYmVsNCIsImltcG9ydGFudElucHV0IiwiaW5wdXRDb250YWluZXIiLCJsYWJlbEFyciIsImxhYmVsIiwiaW5wdXRBcnIiLCJpbnB1dExhYmVsIiwieCIsInJlbW92ZUNoaWxkIiwiaW5wdXQiLCJuZXdPbmUiLCJ2YWx1ZSIsImNyZWF0ZVRvZG8iLCJ0aXRsZSIsImRhdGUiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJpbXBvcnRhbnQiLCJjaGVja2VkIiwibnVtbXkiLCJuZXdUb2RvIiwic3R5bGUiLCJkaXNwbGF5IiwidGl0bGVUeHQiLCJkYXRlVHh0IiwiZGVzY3JpcHRpb25UeHQiLCJkdWVEYXRlVHh0IiwiaW1wb3J0YW50VHh0IiwiZGVsZXRlQnV0dG9uIiwicHVzaCIsImF0dHJpYnV0ZVZhbHVlIiwiaW5kZXhPZiIsImltcG9WYWwiLCJ0b2RheVZhbCIsInNwbGljZSIsImxlbmd0aCIsIm5vdEltcG9WYWwiLCJyZW1vdmUiLCJjbGVhciIsImhlYWRlckNoZWNrIiwiaW1wbyIsImFsbCIsInRvZGF5IiwiaW5uZXJIVE1MIiwidG9kIiwicmVxdWlyZWRBcmdzIiwicmVxdWlyZWQiLCJhcmdzIiwiVHlwZUVycm9yIiwiaXNEYXRlIiwiYXJndW1lbnRzIiwiRGF0ZSIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInRvRGF0ZSIsImFyZ3VtZW50IiwiYXJnU3RyIiwiZ2V0VGltZSIsImNvbnNvbGUiLCJ3YXJuIiwiRXJyb3IiLCJzdGFjayIsIk5hTiIsImlzVmFsaWQiLCJkaXJ0eURhdGUiLCJpc05hTiIsIk51bWJlciIsInRvSW50ZWdlciIsImRpcnR5TnVtYmVyIiwibnVtYmVyIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImFkZE1pbGxpc2Vjb25kcyIsImRpcnR5QW1vdW50IiwidGltZXN0YW1wIiwiYW1vdW50Iiwic3ViTWlsbGlzZWNvbmRzIiwiTUlMTElTRUNPTkRTX0lOX0RBWSIsInN0YXJ0T2ZVVENJU09XZWVrIiwid2Vla1N0YXJ0c09uIiwiZGF5IiwiZ2V0VVRDRGF5IiwiZGlmZiIsInNldFVUQ0RhdGUiLCJnZXRVVENEYXRlIiwic2V0VVRDSG91cnMiLCJnZXRVVENJU09XZWVrWWVhciIsInllYXIiLCJnZXRVVENGdWxsWWVhciIsImZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIiLCJzZXRVVENGdWxsWWVhciIsInN0YXJ0T2ZOZXh0WWVhciIsImZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIiLCJzdGFydE9mVGhpc1llYXIiLCJzdGFydE9mVVRDSVNPV2Vla1llYXIiLCJmb3VydGhPZkphbnVhcnkiLCJNSUxMSVNFQ09ORFNfSU5fV0VFSyIsImRlZmF1bHRPcHRpb25zIiwiZ2V0RGVmYXVsdE9wdGlvbnMiLCJzdGFydE9mVVRDV2VlayIsIm9wdGlvbnMiLCJfcmVmIiwiX3JlZjIiLCJfcmVmMyIsIl9vcHRpb25zJHdlZWtTdGFydHNPbiIsIl9vcHRpb25zJGxvY2FsZSIsIl9vcHRpb25zJGxvY2FsZSRvcHRpbyIsIl9kZWZhdWx0T3B0aW9ucyRsb2NhbCIsIl9kZWZhdWx0T3B0aW9ucyRsb2NhbDIiLCJsb2NhbGUiLCJSYW5nZUVycm9yIiwiZ2V0VVRDV2Vla1llYXIiLCJfb3B0aW9ucyRmaXJzdFdlZWtDb24iLCJmaXJzdFdlZWtDb250YWluc0RhdGUiLCJmaXJzdFdlZWtPZk5leHRZZWFyIiwiZmlyc3RXZWVrT2ZUaGlzWWVhciIsInN0YXJ0T2ZVVENXZWVrWWVhciIsImZpcnN0V2VlayIsImFkZExlYWRpbmdaZXJvcyIsInRhcmdldExlbmd0aCIsInNpZ24iLCJvdXRwdXQiLCJhYnMiLCJ0b2tlbiIsInNpZ25lZFllYXIiLCJtb250aCIsImdldFVUQ01vbnRoIiwiU3RyaW5nIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VVRDU2Vjb25kcyIsIm51bWJlck9mRGlnaXRzIiwibWlsbGlzZWNvbmRzIiwiZ2V0VVRDTWlsbGlzZWNvbmRzIiwicG93IiwiZm9ybWF0VGltZXpvbmVTaG9ydCIsIm9mZnNldCIsImRpcnR5RGVsaW1pdGVyIiwiYWJzT2Zmc2V0IiwiaG91cnMiLCJtaW51dGVzIiwiZGVsaW1pdGVyIiwiZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzIiwiZm9ybWF0VGltZXpvbmUiLCJHIiwibG9jYWxpemUiLCJlcmEiLCJ3aWR0aCIsInkiLCJvcmRpbmFsTnVtYmVyIiwidW5pdCIsImxpZ2h0Rm9ybWF0dGVycyIsIlkiLCJzaWduZWRXZWVrWWVhciIsIndlZWtZZWFyIiwiUiIsInUiLCJRIiwicXVhcnRlciIsImNvbnRleHQiLCJxIiwiTSIsIkwiLCJ3Iiwid2VlayIsInJvdW5kIiwiZ2V0VVRDV2VlayIsIkkiLCJpc29XZWVrIiwiZ2V0VVRDSVNPV2VlayIsImQiLCJEIiwiZGF5T2ZZZWFyIiwic2V0VVRDTW9udGgiLCJzdGFydE9mWWVhclRpbWVzdGFtcCIsImRpZmZlcmVuY2UiLCJnZXRVVENEYXlPZlllYXIiLCJFIiwiZGF5T2ZXZWVrIiwiZSIsImxvY2FsRGF5T2ZXZWVrIiwiYyIsImkiLCJpc29EYXlPZldlZWsiLCJhIiwiZGF5UGVyaW9kRW51bVZhbHVlIiwiZGF5UGVyaW9kIiwidG9Mb3dlckNhc2UiLCJiIiwiQiIsImgiLCJIIiwiSyIsImsiLCJtIiwicyIsIlMiLCJYIiwiX2xvY2FsaXplIiwidGltZXpvbmVPZmZzZXQiLCJfb3JpZ2luYWxEYXRlIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJPIiwieiIsInQiLCJvcmlnaW5hbERhdGUiLCJUIiwiZGF0ZUxvbmdGb3JtYXR0ZXIiLCJwYXR0ZXJuIiwiZm9ybWF0TG9uZyIsInRpbWVMb25nRm9ybWF0dGVyIiwidGltZSIsImxvbmdGb3JtYXR0ZXJzIiwicCIsIlAiLCJkYXRlVGltZUZvcm1hdCIsIm1hdGNoUmVzdWx0IiwibWF0Y2giLCJkYXRlUGF0dGVybiIsInRpbWVQYXR0ZXJuIiwiZGF0ZVRpbWUiLCJyZXBsYWNlIiwiZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyIsInV0Y0RhdGUiLCJVVEMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJnZXRNaWxsaXNlY29uZHMiLCJwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMiLCJwcm90ZWN0ZWRXZWVrWWVhclRva2VucyIsImlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4iLCJpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4iLCJ0aHJvd1Byb3RlY3RlZEVycm9yIiwiZm9ybWF0IiwiY29uY2F0IiwiZm9ybWF0RGlzdGFuY2VMb2NhbGUiLCJsZXNzVGhhblhTZWNvbmRzIiwib25lIiwib3RoZXIiLCJ4U2Vjb25kcyIsImhhbGZBTWludXRlIiwibGVzc1RoYW5YTWludXRlcyIsInhNaW51dGVzIiwiYWJvdXRYSG91cnMiLCJ4SG91cnMiLCJ4RGF5cyIsImFib3V0WFdlZWtzIiwieFdlZWtzIiwiYWJvdXRYTW9udGhzIiwieE1vbnRocyIsImFib3V0WFllYXJzIiwieFllYXJzIiwib3ZlclhZZWFycyIsImFsbW9zdFhZZWFycyIsImJ1aWxkRm9ybWF0TG9uZ0ZuIiwidW5kZWZpbmVkIiwiZGVmYXVsdFdpZHRoIiwiZm9ybWF0cyIsImZ1bGwiLCJsb25nIiwibWVkaXVtIiwic2hvcnQiLCJmb3JtYXRSZWxhdGl2ZUxvY2FsZSIsImxhc3RXZWVrIiwieWVzdGVyZGF5IiwidG9tb3Jyb3ciLCJuZXh0V2VlayIsImJ1aWxkTG9jYWxpemVGbiIsImRpcnR5SW5kZXgiLCJ2YWx1ZXNBcnJheSIsImZvcm1hdHRpbmdWYWx1ZXMiLCJkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIiwiX2RlZmF1bHRXaWR0aCIsIl93aWR0aCIsInZhbHVlcyIsImFyZ3VtZW50Q2FsbGJhY2siLCJidWlsZE1hdGNoRm4iLCJzdHJpbmciLCJtYXRjaFBhdHRlcm4iLCJtYXRjaFBhdHRlcm5zIiwiZGVmYXVsdE1hdGNoV2lkdGgiLCJtYXRjaGVkU3RyaW5nIiwicGFyc2VQYXR0ZXJucyIsImRlZmF1bHRQYXJzZVdpZHRoIiwia2V5IiwiQXJyYXkiLCJpc0FycmF5IiwiZmluZEluZGV4IiwidGVzdCIsImZpbmRLZXkiLCJ2YWx1ZUNhbGxiYWNrIiwicmVzdCIsInNsaWNlIiwib2JqZWN0IiwicHJlZGljYXRlIiwiaGFzT3duUHJvcGVydHkiLCJhcnJheSIsImNvZGUiLCJmb3JtYXREaXN0YW5jZSIsImNvdW50IiwicmVzdWx0IiwidG9rZW5WYWx1ZSIsImFkZFN1ZmZpeCIsImNvbXBhcmlzb24iLCJmb3JtYXRSZWxhdGl2ZSIsIl9kYXRlIiwiX2Jhc2VEYXRlIiwiX29wdGlvbnMiLCJyZW0xMDAiLCJuYXJyb3ciLCJhYmJyZXZpYXRlZCIsIndpZGUiLCJhbSIsInBtIiwibWlkbmlnaHQiLCJub29uIiwibW9ybmluZyIsImFmdGVybm9vbiIsImV2ZW5pbmciLCJuaWdodCIsInBhcnNlUGF0dGVybiIsInBhcnNlSW50IiwicGFyc2VSZXN1bHQiLCJhbnkiLCJpbmRleCIsImZvcm1hdHRpbmdUb2tlbnNSZWdFeHAiLCJsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCIsImVzY2FwZWRTdHJpbmdSZWdFeHAiLCJkb3VibGVRdW90ZVJlZ0V4cCIsInVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwIiwiY2xlYW5Fc2NhcGVkU3RyaW5nIiwibWF0Y2hlZCIsIk5vdGVNYWtlciIsImNvbnN0cnVjdG9yIiwidG9kbyIsImNoZWNrIiwidGhpcyIsImRhdGVDaGVja2VyIiwidXNlckRhdGUiLCJ0b2RheXNEYXRlIiwic3BsaXREYXRlIiwic3BsaXQiLCJmb3JtYXREYXRlIiwic3BsaXREYXRlcyIsImZvcm1hdHRlZCIsImRpcnR5Rm9ybWF0U3RyIiwiX3JlZjQiLCJfb3B0aW9ucyRsb2NhbGUyIiwiX29wdGlvbnMkbG9jYWxlMiRvcHRpIiwiX3JlZjUiLCJfcmVmNiIsIl9yZWY3IiwiX29wdGlvbnMkbG9jYWxlMyIsIl9vcHRpb25zJGxvY2FsZTMkb3B0aSIsIl9kZWZhdWx0T3B0aW9ucyRsb2NhbDMiLCJfZGVmYXVsdE9wdGlvbnMkbG9jYWw0IiwiZm9ybWF0U3RyIiwiZGVmYXVsdExvY2FsZSIsImZvcm1hdHRlck9wdGlvbnMiLCJtYXAiLCJzdWJzdHJpbmciLCJmaXJzdENoYXJhY3RlciIsImxvbmdGb3JtYXR0ZXIiLCJqb2luIiwiZm9ybWF0dGVyIiwidXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zIiwidXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyIsIl9fd2VicGFja19tb2R1bGVfY2FjaGVfXyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImNhY2hlZE1vZHVsZSIsImV4cG9ydHMiLCJtb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZGVmaW5pdGlvbiIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIl0sInNvdXJjZVJvb3QiOiIifQ==
