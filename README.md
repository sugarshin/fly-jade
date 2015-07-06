<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8430194/35c6043a-1f6a-11e5-8cbd-af6cc86baa84.png">
  </a>
</div>

> [Jade](https://github.com/sugarshin/fly-jade) plugin for _[Fly][fly]_.

[![][fly-badge]][fly]
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][travis-badge]][travis-link]
[![][mit-badge]][mit]

## Usage
> Check out the [documentation](http://jade-lang.com/api/#options) to see the available options.

### Install

```a
npm i -D fly-jade
```

### Example

```js
exports.jade = function* () {
  yield this
    .source('src/*.jade')
    .jade()
    .target('dist');
};
```

# License

[MIT][mit] © [sugarshin][author] et [al][contributors]

[mit]:          http://opensource.org/licenses/MIT
[author]:       http://github.com/sugarshin
[contributors]: https://github.com/sugarshin/fly-jade/graphs/contributors
[releases]:     https://github.com/sugarshin/fly-jade/releases
[fly]:          https://www.github.com/flyjs/fly
[fly-badge]:    https://img.shields.io/badge/fly-JS-05B3E1.svg?style=flat-square
[mit-badge]:    https://img.shields.io/badge/license-MIT-444444.svg?style=flat-square
[npm-pkg-link]: https://www.npmjs.org/package/fly-jade
[npm-ver-link]: https://img.shields.io/npm/v/fly-jade.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/fly-jade.svg?style=flat-square
[travis-link]:  https://travis-ci.org/sugarshin/fly-jade
[travis-badge]: http://img.shields.io/travis/sugarshin/fly-jade.svg?style=flat-square
