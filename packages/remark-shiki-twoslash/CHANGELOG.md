# olets/remark-shiki-twoslash

## 3.3.3

### Patch Changes

- 17c6363: Revert introduction of promises
- Updated dependencies [17c6363]
  - @olets/shiki@0.16.3
  - @olets/shiki-twoslash@3.3.3

## 3.3.2

### Patch Changes

- Updated dependencies [98d7409]
  - @olets/shiki@0.16.2
  - @olets/shiki-twoslash@3.3.2

## 3.3.1

### Patch Changes

- cc2afc1: Rebuild
- 2697da6: Rebuild
- Updated dependencies [18cf0c5]
- Updated dependencies [fa1bf37]
  - @olets/shiki@0.16.1
  - @olets/shiki-twoslash@3.3.1

## 3.3.0

### Minor Changes

- b04160b: ESM-ify

### Patch Changes

- Updated dependencies [b04160b]
  - @olets/shiki@0.16.0
  - @olets/shiki-twoslash@3.3.0

## 3.2.6

### Patch Changes

- 000845f: Use 'exports' not 'module', 'types' not 'typings'
- Updated dependencies [000845f]
  - @olets/shiki@0.15.6
  - @olets/shiki-twoslash@3.2.6

## 3.2.5

### Patch Changes

- 53f8e57: Do not use monorepo workspace cross-references
- Updated dependencies [53f8e57]
  - @olets/shiki@0.15.5
  - @olets/shiki-twoslash@3.2.5

## 3.2.4

### Patch Changes

- 4ce5b0b: Use monorepo workspace cross-references
- Build from TS.

  Use monorepo workspace cross-references

- Updated dependencies [4ce5b0b]
- Updated dependencies
  - @olets/shiki@0.15.4
  - @olets/shiki-twoslash@3.2.4

## 3.2.3

### Patch Changes

- 2f231f0: Do not use monorepo workspace cross-references
- Updated dependencies [2f231f0]
  - @olets/shiki@0.15.3
  - @olets/shiki-twoslash@3.2.3

## 3.2.2

### Patch Changes

- e96e4d0: Update urls in docs and package.json, update installation docs
- Updated dependencies [e96e4d0]
  - @olets/shiki@0.15.2
  - @olets/shiki-twoslash@3.2.2

## 3.2.1

### Patch Changes

- 4a27a5c: Previous release went out without its version bump.
- Updated dependencies [4a27a5c]
  - @olets/shiki-twoslash@3.2.1
  - @olets/shiki@0.15.1

## 3.2.0

### Minor Changes

- 0c07c27: Update dependencies to support more themes and languages, switch from pnpm to Bun, move from Node 22, track dist dir, fix a type error

### Patch Changes

- Updated dependencies [0c07c27]
- Updated dependencies [0c07c27]
  - @olets/shiki@0.15.0
  - @olets/shiki-twoslash@3.2.0

## 3.1.3

### Patch Changes

- Updated dependencies [7777f35]
  - shiki-twoslash@3.1.2

## 3.1.2

### Patch Changes

- e133a03: Adds the TypeScript version to the cache key for twoslash

## 3.1.1

### Patch Changes

- e6b739c: fix type error in `remarkTwoslash`
- bfca2ac: Moves typescript to peer dependencies
- Updated dependencies [bfca2ac]
  - shiki-twoslash@3.1.1

## 3.1.0

### Minor Changes

- 53d3730: Bump version of "shiki" to 0.10.1

### Patch Changes

- aa047ea: Escape HTML in error message/recommendation
- Updated dependencies [53d3730]
  - shiki-twoslash@3.1.0

## 3.0.9

### Patch Changes

- a77a7c6: HTML characters in the code block within Twoslash failure messages are now escaped. This resolves an issue where generics that throw TypeScript errors caused a `remark` exception because it interpreted `<` as the beginning of an HTML element.

## 3.0.8

### Patch Changes

- b041c61: Fixes cache path calculation under PnP environments

## 3.0.7

### Patch Changes

- f4d749f: Export `Options` type for remark plugin
- b4570bb: Moves the cache folder to correctly live inside inside node_modules
- 2bc773e: Stop setting `vfsRoot` when it's not present, so that `@typescript/twoslash` can handle it.

## 3.0.6

### Patch Changes

- Updated dependencies [4b83df9]
  - shiki-twoslash@3.0.2

## 3.0.5

### Patch Changes

- 86d6214: Fixes a typo that prevent PnP environments to be properly detected

## 3.0.4

### Patch Changes

- e5ecfea: Fixes remark-shiki-twoslash when used in PnP projects

## 3.0.3

### Patch Changes

- bc5330b: shiki-twoslash: fix HTML comment syntax when we can't find a language for the code sample.
  Use correct cache path after splitting based on `node_modules`
- Updated dependencies [bc5330b]
  - shiki-twoslash@3.0.1

## 3.0.2

### Patch Changes

- 56b4e11: Builds an hexadecimal cache key based code snippet plus `shiki-twoslash` current version.
  This is useful for cache busting when we add a new version of any shiki ecosystem and we have an old cache that should be revalidated.

## 3.0.0

### Major Changes

- 8fffcd9: Three main things:

  - Playground: entirely new set of user-centered docs for understanding how to make a Shiki Twoslash code sample
  - Annotations: A way to provide meta-commentary on code in a code sample
  - Logging: Abuse the trust your users have in your code samples by using first-class primitives for showing logs

  The major bump is because I changed the codefence highlighting syntax to be similar to the IDE's line numbers, they start at 1, not 0.

  See the docs: in https://shikijs.github.io/twoslash/playground

### Patch Changes

- Updated dependencies [8fffcd9]
  - shiki-twoslash@3.0.0

## 2.0.5

### Patch Changes

- bbba24f: Adds inline errors for fenceparser errors - fixes #101
- Updated dependencies [bbba24f]
  - shiki-twoslash@2.1.3

## 2.0.4

### Patch Changes

- Updated dependencies [71b0697]
  - shiki-twoslash@2.1.2

## 2.0.3

### Patch Changes

- 61a6af5: Adds support for an annotation system. This is still work in progress, but the goal is to allow you to provide a way to write meta-commentary on a code-sample from the outside of the code block by having an arrow and some comments.

  For example

  ````
  ```js twoslash
  function compact(arr) {
  // @annotate: left 56 - No editor warnings in JavaScript files<br/><br/>This crashes at runtime.
    if (orr.length > 10) return arr
    return arr
  }
  ```
  ````

  Would create a codeblocck with:

  ```js
  function compact(arr) {
    if (orr.length > 10) return arr;
    return arr;
  }
  ```

  And a little SVG arrow and the text "No editor warnings in JavaScript files<br/><br/>This crashes at runtime." next to it.
  I'll be tweaking the syntax over time, but for now the syntax is `// @annotate: [left/right] [arrow degree rotatation] [text degree rotatation] - Text to show`

- Updated dependencies [61a6af5]
  - shiki-twoslash@2.1.1

## 2.0.1

### Patch Changes

- Updated dependencies [8a82e13]
  - shiki-twoslash@2.0.3

## 2.0.0

### Major Changes

- 8a0fcc0: Switch to use a new package which we've extracted out from Shiki Twoslash for handling parsing the different potential formats for codefence attributes: [fenceparser](https://www.npmjs.com/package/fenceparser) which means a breaking change in the remark plugin API. The semver major shouldn't affect anyone using the library via another tool (e.g. via the docusaurus plugins etc).

### Patch Changes

- Updated dependencies [8a0fcc0]
  - shiki-twoslash@2.0.2

## 1.5.6

### Patch Changes

- f92d030: Instead of throwing the process when Shiki Twoslash gets a failing test, it will replace the code sample with information on the issue and recommendations on how to fix it. This also comes with an overhaul of the error messaging in @typescript/twoslash.
- Updated dependencies [f92d030]
  - shiki-twoslash@2.0.1

## 1.5.5

### Patch Changes

- Updated dependencies [e0574f2]

  - shiki-twoslash@2.0.0

- Removed the need to use JS at all, thanks to T6 - https://github.com/shikijs/twoslash/issues/7
- Turned off the 'try' link by default, it's now an option enable it

### 1.3.0

Ancient history
