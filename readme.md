# is-chrome

> Check if browser is Google Chrome

*User agent sniffing is [considered](https://developer.mozilla.org/en-US/docs/Browser_detection_using_the_user_agent) bad practice and should be avoided if possible.*


## Install

```
$ npm install --save is-chrome
```


## Usage

```js
var isChrome = require('is-chrome');

isChrome();
//=> true

isChrome({version: 42});
//=> true

isChrome({userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.152 Safari/537.36 OPR/29.0.1795.60'});
//=> false (This is from Opera)
```


### isChrome(options)

Returns a `boolean`.

#### options

*Optional*  
Type: `object`

##### options.userAgent

Type: `string`

User agent to test.

##### options.version

Type: `string` or `number`

Check for specific version


## Related

* [brwsr](https://github.com/gillstrom/brwsr) - Get current browser


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
