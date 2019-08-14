/*
 * details/summary HTML elements state change announcement polyfill - https://github.com/mfranzke/details-summary-state-change-announcement-polyfill
 * @license Copyright(c) 2019 by Maximilian Franzke
 */
/*
 * A minimal and dependency-free vanilla JavaScript polyfill for the (currently)
 * missing state change announcement for details/summary HTML tags in NVDA.
 */

(function() {
	'use strict';

	document.addEventListener(
		'click',
		function detailsSummaryStateChangeAnnouncementPolyfill(event) {
			if (
				!event.target ||
				!event.target.tagName ||
				event.target.tagName.toLowerCase() !== 'summary'
			) {
				return;
			}

			const summary = event.target;

			summary.setAttribute('aria-expanded', !Boolean(summary.parentNode.open));
		}
	);
})();
