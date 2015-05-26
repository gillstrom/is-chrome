'use strict';
var arrayContains = require('array-contains');

module.exports = function (opts) {
	var opts = opts || {};

	if ((!opts.userAgent && typeof navigator === 'undefined') || /(Chromium|OPR|Opera)/.test(opts.userAgent || navigator.userAgent)) {
		return false;
	}

	var reg = new RegExp(/(Chrome)\/((\d+)?[\w\.]+)/);
	var arr = reg.exec(opts.userAgent || navigator.userAgent);

	if (!arr || (opts.version && !arrayContains(arr, opts.version))) {
		return false;
	}

	return true;
}
