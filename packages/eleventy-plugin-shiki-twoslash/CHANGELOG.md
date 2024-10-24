# eleventy-plugin-shiki-twoslash

## 2.0.7

### Patch Changes

- 000845f: Use 'exports' not 'module', 'types' not 'typings'
- Updated dependencies [000845f]
  - @olets/remark-shiki-twoslash@3.2.6
  - @olets/shiki@0.15.6
  - @olets/shiki-twoslash@3.2.6

## 2.0.6

### Patch Changes

- 4364822: Correct module path

## 2.0.5

### Patch Changes

- dfb9140: Build from TS. Do not use monorepo workspace cross-references
- Updated dependencies [53f8e57]
  - @olets/remark-shiki-twoslash@3.2.5
  - @olets/shiki@0.15.5
  - @olets/shiki-twoslash@3.2.5

## 2.0.4

### Patch Changes

- Build from TS.

  Use monorepo workspace cross-references

- Updated dependencies [4ce5b0b]
- Updated dependencies
  - @olets/remark-shiki-twoslash@3.2.4
  - @olets/shiki@0.15.4
  - @olets/shiki-twoslash@3.2.4

## 2.0.3

### Patch Changes

- 2f231f0: Do not use monorepo workspace cross-references
- Updated dependencies [2f231f0]
  - @olets/remark-shiki-twoslash@3.2.3
  - @olets/shiki@0.15.3
  - @olets/shiki-twoslash@3.2.3

## 2.0.2

### Patch Changes

- e96e4d0: Update urls in docs and package.json, update installation docs
- Updated dependencies [e96e4d0]
  - @olets/remark-shiki-twoslash@3.2.2
  - @olets/shiki@0.15.2
  - @olets/shiki-twoslash@3.2.2

## 2.0.1

### Patch Changes

- 4a27a5c: Previous release went out without its version bump.
- Updated dependencies [4a27a5c]
  - @olets/remark-shiki-twoslash@3.2.1
  - @olets/shiki-twoslash@3.2.1
  - @olets/shiki@0.15.1

## 2.0.0

### Major Changes

- 0c07c27: Support Eleventy 3, drop support for Eleventy < 3, update dependencies to support more themes and languages, switch from pnpm to Bun, move from Node 22, track dist dir

### Patch Changes

- Updated dependencies [0c07c27]
- Updated dependencies [0c07c27]
- Updated dependencies [0c07c27]
  - @olets/remark-shiki-twoslash@3.2.0
  - @olets/shiki@0.15.0
  - @olets/shiki-twoslash@3.2.0

## 1.1.3

### Patch Changes

- remark-shiki-twoslash@3.1.3

## 1.1.2

### Patch Changes

- Updated dependencies [e133a03]
  - remark-shiki-twoslash@3.1.2

## 1.1.1

### Patch Changes

- Updated dependencies [e6b739c]
- Updated dependencies [bfca2ac]
  - remark-shiki-twoslash@3.1.1

## 1.1.0

### Minor Changes

- 53d3730: Bump version of "shiki" to 0.10.1

### Patch Changes

- Updated dependencies [aa047ea]
- Updated dependencies [53d3730]
  - remark-shiki-twoslash@3.1.0

## 1.0.46

### Patch Changes

- Updated dependencies [a77a7c6]
  - remark-shiki-twoslash@3.0.9

## 1.0.45

### Patch Changes

- Updated dependencies [b041c61]
  - remark-shiki-twoslash@3.0.8

## 1.0.44

### Patch Changes

- Updated dependencies [f4d749f]
- Updated dependencies [b4570bb]
- Updated dependencies [2bc773e]
  - remark-shiki-twoslash@3.0.7

## 1.0.43

### Patch Changes

- remark-shiki-twoslash@3.0.6

## 1.0.42

### Patch Changes

- Updated dependencies [86d6214]
  - remark-shiki-twoslash@3.0.5

## 1.0.41

### Patch Changes

- Updated dependencies [e5ecfea]
  - remark-shiki-twoslash@3.0.4

## 1.0.40

### Patch Changes

- Updated dependencies [bc5330b]
  - remark-shiki-twoslash@3.0.3

## 1.0.39

### Patch Changes

- Updated dependencies [56b4e11]
  - remark-shiki-twoslash@3.0.2

## 1.0.37

### Patch Changes

- Updated dependencies [8fffcd9]
  - remark-shiki-twoslash@3.0.0

## 1.0.25

### Patch Changes

- ed7ff80: Automatically remove trailing newlines
- Updated dependencies [bbba24f]
  - remark-shiki-twoslash@2.0.5

## 1.0.24

### Patch Changes

- remark-shiki-twoslash@2.0.4

## 1.0.23

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

- 277374b: Eleventy: mainly just docs updates
  CLI: Adds a flag to output TSX components from a JS/Markdown file
- Updated dependencies [61a6af5]
  - remark-shiki-twoslash@2.0.3

## 1.0.20

### Patch Changes

- remark-shiki-twoslash@2.0.1

## 1.0.19

### Patch Changes

- 8a0fcc0: Switch to use a new package which we've extracted out from Shiki Twoslash for handling parsing the different potential formats for codefence attributes: [fenceparser](https://www.npmjs.com/package/fenceparser) which means a breaking change in the remark plugin API. The semver major shouldn't affect anyone using the library via another tool (e.g. via the docusaurus plugins etc).
- Updated dependencies [8a0fcc0]
  - remark-shiki-twoslash@2.0.0

## 1.0.17

### Patch Changes

- Updated dependencies [f92d030]
  - remark-shiki-twoslash@1.5.6

## 1.0.16

### Patch Changes

- remark-shiki-twoslash@1.5.5
