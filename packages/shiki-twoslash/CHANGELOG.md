# @olets/shiki-twoslash

## 3.3.3

### Patch Changes

- Updated dependencies [17c6363]
  - @olets/shiki@0.16.3

## 3.3.2

### Patch Changes

- Updated dependencies [98d7409]
  - @olets/shiki@0.16.2

## 3.3.1

### Patch Changes

- fa1bf37: Update dependencies
- Updated dependencies [18cf0c5]
  - @olets/shiki@0.16.1

## 3.3.0

### Minor Changes

- b04160b: ESM-ify

### Patch Changes

- Updated dependencies [b04160b]
  - @olets/shiki@0.16.0

## 3.2.6

### Patch Changes

- 000845f: Use 'exports' not 'module', 'types' not 'typings'
- Updated dependencies [000845f]
  - @olets/shiki@0.15.6

## 3.2.5

### Patch Changes

- 53f8e57: Do not use monorepo workspace cross-references
- Updated dependencies [53f8e57]
  - @olets/shiki@0.15.5

## 3.2.4

### Patch Changes

- 4ce5b0b: Use monorepo workspace cross-references
- Build from TS.

  Use monorepo workspace cross-references

- Updated dependencies [4ce5b0b]
- Updated dependencies
  - @olets/shiki@0.15.4

## 3.2.3

### Patch Changes

- 2f231f0: Do not use monorepo workspace cross-references
- Updated dependencies [2f231f0]
  - @olets/shiki@0.15.3

## 3.2.2

### Patch Changes

- e96e4d0: Update urls in docs and package.json, update installation docs
- Updated dependencies [e96e4d0]
  - @olets/shiki@0.15.2

## 3.2.1

### Patch Changes

- 4a27a5c: Previous release went out without its version bump.
- Updated dependencies [4a27a5c]
  - @olets/shiki@0.15.1

## 3.2.0

### Minor Changes

- 0c07c27: Update dependencies to support more themes and languages, switch from pnpm to Bun, move from Node 22, track dist dir

### Patch Changes

- Updated dependencies [0c07c27]
  - @olets/shiki@0.15.0

## 3.1.2

### Patch Changes

- 7777f35: Fixed renderer completion result closing tag.

## 3.1.1

### Patch Changes

- bfca2ac: Moves typescript to peer dependencies

## 3.1.0

### Minor Changes

- 53d3730: Bump version of "shiki" to 0.10.1

## 3.0.2

### Patch Changes

- 4b83df9: Updates the twoslash dependency

## 3.0.1

### Patch Changes

- bc5330b: shiki-twoslash: fix HTML comment syntax when we can't find a language for the code sample.
  Use correct cache path after splitting based on `node_modules`

## 3.0.0

### Major Changes

- 8fffcd9: Three main things:

  - Playground: entirely new set of user-centered docs for understanding how to make a Shiki Twoslash code sample
  - Annotations: A way to provide meta-commentary on code in a code sample
  - Logging: Abuse the trust your users have in your code samples by using first-class primitives for showing logs

  The major bump is because I changed the codefence highlighting syntax to be similar to the IDE's line numbers, they start at 1, not 0.

  See the docs: in https://shikijs.github.io/twoslash/playground

## 2.1.3

### Patch Changes

- bbba24f: Adds inline errors for fenceparser errors - fixes #101

## 2.1.2

### Patch Changes

- 71b0697: Checks for existing `React` import before adding it automatically in TSX code blocks.

## 2.1.1

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

  Would create a codeblock with:

  ```js
  function compact(arr) {
    if (orr.length > 10) return arr;
    return arr;
  }
  ```

  And a little SVG arrow and the text "No editor warnings in JavaScript files<br/><br/>This crashes at runtime." next to it.
  I'll be tweaking the syntax over time, but for now the syntax is `// @annotate: [left/right] [arrow degree rotatation] [text degree rotatation] - Text to show`

## 2.0.3

### Patch Changes

- 8a82e13: Remove `dom.ts` which is no longer in use.

## 2.0.2

### Patch Changes

- 8a0fcc0: Switch to use a new package which we've extracted out from Shiki Twoslash for handling parsing the different potential formats for codefence attributes: [fenceparser](https://www.npmjs.com/package/fenceparser) which means a breaking change in the remark plugin API. The semver major shouldn't affect anyone using the library via another tool (e.g. via the docusaurus plugins etc).

## 2.0.1

### Patch Changes

- f92d030: Instead of throwing the process when Shiki Twoslash gets a failing test, it will replace the code sample with information on the issue and recommendations on how to fix it. This also comes with an overhaul of the error messaging in @typescript/twoslash.

## 2.0.0

### Major Changes

- e0574f2: In the process of adding the option to have JSDoc comments included in the hovers, I changed the exposed types for `renderCodeToHTML` in `shiki-twoslash` this major sermver bump only really affects users who are using the `shiki-twoslash` API directly which I've not heard of any yet.
