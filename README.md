# @z1digitalstudio/eslint-config-imports

> A minimal and opinionated eslint config to handle import sorting

This [eslint][eslint] config uses a combination of
[eslint-plugin-import][plugin-import] and the default eslint rule
[sort-imports][sort-imports] to automatically sort CommonJS and ES imports in
what we at [Z1][z1] consider the standard way.

## Getting started

Install the peer dependencies if you don't have them already:

```
yarn add --dev eslint eslint-plugin-import
```

Then, install this config:

```
yarn add --dev @z1digitalstudio/eslint-config-imports
```

And simply extend from it:

```javascript
// .eslintrc.js
module.exports = {
  // ...
  extends: [
    "@z1digitalstudio/eslint-config-imports"
  ],
  // ...
}
```

## Custom resolvers

If you're using [Webpack][webpack], [Babel][babel] or something similar, you
may need to configure custom resolvers.

Refer to the [eslint-plugin-import][plugin-imports-resolver] documentation on
how to do so.

## Extending this config

This config is meant to be zero-config and opinionated. If you wish to extend
it, simply uninstall this package and copy the contents from `index.js` into
your own config.

[eslint]: https://eslint.org/
[plugin-import]: https://github.com/benmosher/eslint-plugin-import
[sort-imports]: https://eslint.org/docs/rules/sort-imports
[z1]: https://z1.digital/
[webpack]: https://webpack.js.org/
[babel]: https://babeljs.io/
[plugin-imports-resolver]: https://github.com/benmosher/eslint-plugin-import#resolvers
