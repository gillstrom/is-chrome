'use strict';
module.exports = typeof navigator !== 'undefined' && /^(?!.*Chromium|.*OPR|.*Opera)(?=.*Chrome|.*CriOS).*/.test(navigator.userAgent);
