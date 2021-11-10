/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-bgsizecover-objectfit-setclasses !*/
!(function(e, n, t) {
	function r(e, n) {
		return typeof e === n;
	}
	function o() {
		var e, n, t, o, i, s, a;
		for (var l in S)
			if (S.hasOwnProperty(l)) {
				if (
					((e = []),
					(n = S[l]),
					n.name &&
						(e.push(n.name.toLowerCase()),
						n.options &&
							n.options.aliases &&
							n.options.aliases.length))
				)
					for (t = 0; t < n.options.aliases.length; t++)
						e.push(n.options.aliases[t].toLowerCase());
				for (
					o = r(n.fn, 'function') ? n.fn() : n.fn, i = 0;
					i < e.length;
					i++
				)
					(s = e[i]),
						(a = s.split('.')),
						1 === a.length
							? (Modernizr[a[0]] = o)
							: (!Modernizr[a[0]] ||
									Modernizr[a[0]] instanceof Boolean ||
									(Modernizr[a[0]] = new Boolean(
										Modernizr[a[0]],
									)),
							  (Modernizr[a[0]][a[1]] = o)),
						C.push((o ? '' : 'no-') + a.join('-'));
			}
	}
	function i(e) {
		var n = w.className,
			t = Modernizr._config.classPrefix || '';
		if ((x && (n = n.baseVal), Modernizr._config.enableJSClass)) {
			var r = new RegExp('(^|\\s)' + t + 'no-js(\\s|$)');
			n = n.replace(r, '$1' + t + 'js$2');
		}
		Modernizr._config.enableClasses &&
			((n += ' ' + t + e.join(' ' + t)),
			x ? (w.className.baseVal = n) : (w.className = n));
	}
	function s(e) {
		return e
			.replace(/([a-z])-([a-z])/g, function(e, n, t) {
				return n + t.toUpperCase();
			})
			.replace(/^-/, '');
	}
	function a() {
		return 'function' != typeof n.createElement
			? n.createElement(arguments[0])
			: x
			? n.createElementNS.call(
					n,
					'http://www.w3.org/2000/svg',
					arguments[0],
			  )
			: n.createElement.apply(n, arguments);
	}
	function l(e, n) {
		return !!~('' + e).indexOf(n);
	}
	function f(e, n) {
		return function() {
			return e.apply(n, arguments);
		};
	}
	function u(e, n, t) {
		var o;
		for (var i in e)
			if (e[i] in n)
				return t === !1
					? e[i]
					: ((o = n[e[i]]), r(o, 'function') ? f(o, t || n) : o);
		return !1;
	}
	function c(e) {
		return e
			.replace(/([A-Z])/g, function(e, n) {
				return '-' + n.toLowerCase();
			})
			.replace(/^ms-/, '-ms-');
	}
	function p(n, t, r) {
		var o;
		if ('getComputedStyle' in e) {
			o = getComputedStyle.call(e, n, t);
			var i = e.console;
			if (null !== o) r && (o = o.getPropertyValue(r));
			else if (i) {
				var s = i.error ? 'error' : 'log';
				i[s].call(
					i,
					'getComputedStyle returning null, its possible modernizr test results are inaccurate',
				);
			}
		} else o = !t && n.currentStyle && n.currentStyle[r];
		return o;
	}
	function d() {
		var e = n.body;
		return e || ((e = a(x ? 'svg' : 'body')), (e.fake = !0)), e;
	}
	function m(e, t, r, o) {
		var i,
			s,
			l,
			f,
			u = 'modernizr',
			c = a('div'),
			p = d();
		if (parseInt(r, 10))
			for (; r--; )
				(l = a('div')),
					(l.id = o ? o[r] : u + (r + 1)),
					c.appendChild(l);
		return (
			(i = a('style')),
			(i.type = 'text/css'),
			(i.id = 's' + u),
			(p.fake ? p : c).appendChild(i),
			p.appendChild(c),
			i.styleSheet
				? (i.styleSheet.cssText = e)
				: i.appendChild(n.createTextNode(e)),
			(c.id = u),
			p.fake &&
				((p.style.background = ''),
				(p.style.overflow = 'hidden'),
				(f = w.style.overflow),
				(w.style.overflow = 'hidden'),
				w.appendChild(p)),
			(s = t(c, e)),
			p.fake
				? (p.parentNode.removeChild(p),
				  (w.style.overflow = f),
				  w.offsetHeight)
				: c.parentNode.removeChild(c),
			!!s
		);
	}
	function v(n, r) {
		var o = n.length;
		if ('CSS' in e && 'supports' in e.CSS) {
			for (; o--; ) if (e.CSS.supports(c(n[o]), r)) return !0;
			return !1;
		}
		if ('CSSSupportsRule' in e) {
			for (var i = []; o--; ) i.push('(' + c(n[o]) + ':' + r + ')');
			return (
				(i = i.join(' or ')),
				m(
					'@supports (' +
						i +
						') { #modernizr { position: absolute; } }',
					function(e) {
						return 'absolute' == p(e, null, 'position');
					},
				)
			);
		}
		return t;
	}
	function g(e, n, o, i) {
		function f() {
			c && (delete N.style, delete N.modElem);
		}
		if (((i = r(i, 'undefined') ? !1 : i), !r(o, 'undefined'))) {
			var u = v(e, o);
			if (!r(u, 'undefined')) return u;
		}
		for (
			var c, p, d, m, g, y = ['modernizr', 'tspan', 'samp'];
			!N.style && y.length;

		)
			(c = !0), (N.modElem = a(y.shift())), (N.style = N.modElem.style);
		for (d = e.length, p = 0; d > p; p++)
			if (
				((m = e[p]),
				(g = N.style[m]),
				l(m, '-') && (m = s(m)),
				N.style[m] !== t)
			) {
				if (i || r(o, 'undefined')) return f(), 'pfx' == n ? m : !0;
				try {
					N.style[m] = o;
				} catch (h) {}
				if (N.style[m] != g) return f(), 'pfx' == n ? m : !0;
			}
		return f(), !1;
	}
	function y(e, n, t, o, i) {
		var s = e.charAt(0).toUpperCase() + e.slice(1),
			a = (e + ' ' + z.join(s + ' ') + s).split(' ');
		return r(n, 'string') || r(n, 'undefined')
			? g(a, n, o, i)
			: ((a = (e + ' ' + P.join(s + ' ') + s).split(' ')), u(a, n, t));
	}
	function h(e, n, r) {
		return y(e, t, t, n, r);
	}
	var C = [],
		S = [],
		_ = {
			_version: '3.6.0',
			_config: {
				classPrefix: '',
				enableClasses: !0,
				enableJSClass: !0,
				usePrefixes: !0,
			},
			_q: [],
			on: function(e, n) {
				var t = this;
				setTimeout(function() {
					n(t[e]);
				}, 0);
			},
			addTest: function(e, n, t) {
				S.push({ name: e, fn: n, options: t });
			},
			addAsyncTest: function(e) {
				S.push({ name: null, fn: e });
			},
		},
		Modernizr = function() {};
	(Modernizr.prototype = _), (Modernizr = new Modernizr());
	var w = n.documentElement,
		x = 'svg' === w.nodeName.toLowerCase(),
		b = 'Moz O ms Webkit',
		z = _._config.usePrefixes ? b.split(' ') : [];
	_._cssomPrefixes = z;
	var E = function(n) {
		var r,
			o = prefixes.length,
			i = e.CSSRule;
		if ('undefined' == typeof i) return t;
		if (!n) return !1;
		if (
			((n = n.replace(/^@/, '')),
			(r = n.replace(/-/g, '_').toUpperCase() + '_RULE'),
			r in i)
		)
			return '@' + n;
		for (var s = 0; o > s; s++) {
			var a = prefixes[s],
				l = a.toUpperCase() + '_' + r;
			if (l in i) return '@-' + a.toLowerCase() + '-' + n;
		}
		return !1;
	};
	_.atRule = E;
	var P = _._config.usePrefixes ? b.toLowerCase().split(' ') : [];
	_._domPrefixes = P;
	var j = { elem: a('modernizr') };
	Modernizr._q.push(function() {
		delete j.elem;
	});
	var N = { style: j.elem.style };
	Modernizr._q.unshift(function() {
		delete N.style;
	}),
		(_.testAllProps = y);
	var T = (_.prefixed = function(e, n, t) {
		return 0 === e.indexOf('@')
			? E(e)
			: (-1 != e.indexOf('-') && (e = s(e)),
			  n ? y(e, n, t) : y(e, 'pfx'));
	});
	Modernizr.addTest('objectfit', !!T('objectFit'), {
		aliases: ['object-fit'],
	}),
		(_.testAllProps = h),
		Modernizr.addTest('bgsizecover', h('backgroundSize', 'cover')),
		o(),
		i(C),
		delete _.addTest,
		delete _.addAsyncTest;
	for (var k = 0; k < Modernizr._q.length; k++) Modernizr._q[k]();
	e.Modernizr = Modernizr;
})(window, document);
