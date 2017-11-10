'use strict';
const arrayContains = require('array-contains');

module.exports = opts => {
	opts = opts || {};

	if ((!opts.userAgent && typeof navigator === 'undefined') || /(Chromium|OPR|Opera)/.test(opts.userAgent || navigator.userAgent)) {
		return false;
	}

	const reg = new RegExp(/(Chrome)\/((\d+)?[\w\.]+)/);
	const arr = reg.exec(opts.userAgent || navigator.userAgent);

	if (!arr || (opts.version && !arrayContains(arr, opts.version))) {
		return false;
	}

	return true;
};
