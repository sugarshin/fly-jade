<div align="center">
  <a href="http://github.com/flyjs/fly">
    <img width=200px  src="https://cloud.githubusercontent.com/assets/8317250/8733685/0be81080-2c40-11e5-98d2-c634f076ccd7.png">
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
    .jade({base: 'src'})
    .target('dist');
};
```

#### Options

- passing the base directory as `base` is necessary for jade to resolve relative includes/excludes
- e.g. if we have a file `src/index.jade` which refers to a layout file `src/layouts/default.jade`:

```jade
extends layouts/default

block content
  .row
    .col-sm-12
      h1 Welcome
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
