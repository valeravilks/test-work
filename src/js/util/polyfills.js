// Object Fill Polyfill
!(function() {
	'use strict';
	if ('undefined' != typeof window) {
		var e = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
			n = !!e && 16 <= parseInt(e[1], 10);
		if (!('objectFit' in document.documentElement.style != !1) || n) {
			var o = function(e) {
					var t = e.parentNode;
					!(function(e) {
						var t = window.getComputedStyle(e, null),
							i = t.getPropertyValue('position'),
							n = t.getPropertyValue('overflow'),
							o = t.getPropertyValue('display');
						(i && 'static' !== i) ||
							(e.style.position = 'relative'),
							'hidden' !== n && (e.style.overflow = 'hidden'),
							(o && 'inline' !== o) ||
								(e.style.display = 'block'),
							0 === e.clientHeight && (e.style.height = '100%'),
							-1 === e.className.indexOf('object-fit-polyfill') &&
								(e.className =
									e.className + ' object-fit-polyfill');
					})(t),
						(function(e) {
							var t = window.getComputedStyle(e, null),
								i = {
									'max-width': 'none',
									'max-height': 'none',
									'min-width': '0px',
									'min-height': '0px',
									top: 'auto',
									right: 'auto',
									bottom: 'auto',
									left: 'auto',
									'margin-top': '0px',
									'margin-right': '0px',
									'margin-bottom': '0px',
									'margin-left': '0px',
								};
							for (var n in i)
								t.getPropertyValue(n) !== i[n] &&
									(e.style[n] = i[n]);
						})(e),
						(e.style.position = 'absolute'),
						(e.style.height = '100%'),
						(e.style.width = 'auto'),
						e.clientWidth > t.clientWidth
							? ((e.style.top = '0'),
							  (e.style.marginTop = '0'),
							  (e.style.left = '50%'),
							  (e.style.marginLeft = e.clientWidth / -2 + 'px'))
							: ((e.style.width = '100%'),
							  (e.style.height = 'auto'),
							  (e.style.left = '0'),
							  (e.style.marginLeft = '0'),
							  (e.style.top = '50%'),
							  (e.style.marginTop = e.clientHeight / -2 + 'px'));
				},
				t = function(e) {
					if (void 0 === e || e instanceof Event)
						e = document.querySelectorAll('[data-object-fit]');
					else if (e && e.nodeName) e = [e];
					else {
						if ('object' != typeof e || !e.length || !e[0].nodeName)
							return !1;
						e = e;
					}
					for (var t = 0; t < e.length; t++)
						if (e[t].nodeName) {
							var i = e[t].nodeName.toLowerCase();
							if ('img' === i) {
								if (n) continue;
								e[t].complete
									? o(e[t])
									: e[t].addEventListener('load', function() {
											o(this);
									  });
							} else
								'video' === i
									? 0 < e[t].readyState
										? o(e[t])
										: e[t].addEventListener(
												'loadedmetadata',
												function() {
													o(this);
												},
										  )
									: o(e[t]);
						}
					return !0;
				};
			'loading' === document.readyState
				? document.addEventListener('DOMContentLoaded', t)
				: t(),
				window.addEventListener('resize', t),
				(window.objectFitPolyfill = t);
		} else
			window.objectFitPolyfill = function() {
				return !1;
			};
	}
})();

if (typeof Object.assign != 'function') {
	Object.assign = function(target) {
		if (target == null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		target = Object(target);
		for (var index = 1; index < arguments.length; index++) {
			var source = arguments[index];
			if (source != null) {
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
		}
		return target;
	};
}
