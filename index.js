'use strict';
module.exports = typeof navigator !== 'undefined' &&  /^(?!.*Chromium)(?=.*Chrome|.*CriOS).*/.test(navigator.userAgent);
