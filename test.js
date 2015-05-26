'use strict';
var test = require('ava');
var isChrome = require('./');

test(function (t) {
	t.plan(5);

	t.assert(isChrome() === false);
	t.assert(isChrome({userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36'}) === true);
	t.assert(isChrome({version: 42, userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36'}) === true);
	t.assert(isChrome({version: '42.0.2311.135', userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36'}) === true);
	t.assert(isChrome({userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36 OPR/29.0.1795.60'}) === false);
});
