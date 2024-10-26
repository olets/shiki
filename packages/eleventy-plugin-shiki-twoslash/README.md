# @olets/eleventy-plugin-shiki-twoslash ![@olets/eleventy-plugin-shiki-twoslash NPM Version](https://img.shields.io/npm/v/@olets/eleventy-plugin-shiki-twoslash)

This is a fork of [shikijs/twoslash's eleventy-plugin-shiki-twoslash package](https://github.com/shikijs/twoslash/tree/main/packages/eleventy-plugin-shiki-twoslash) at 1.x made available as a standalone repo.

Syntax highlight Eleventy Markdown code blocks with [@olets/shiki](https://github.com/olets/shiki/tree/main/packages/shiki), a fork of [Shiki](https://shiki.style/) v0.x.

Compared to shikijs/twoslash's eleventy-plugin-shiki-twoslash package at 1.x, @olets/eleventy-plugin-shiki-twoslash switches to ESM, adds Eleventy 3 support, drops Eleventy < 3 support, and adds (via [@olets/shiki](https://github.com/olets/shiki/tree/main/packages/shiki)) additional themes and languages.

This is an alternative to [@shikijs/markdown-it](https://shiki.style/packages/markdown-it). It behaves like shikijs/twoslash's eleventy-plugin-shiki-twoslash package, providing an straightforward migration pathway for Eleventy users who used that in Eleventy < 3.

Learn more in this repo's [CONTRIBUTING.md](CONTRIBUTING.md), and in [shikijs/twoslash's eleventy-plugin-shiki-twoslash package's README.md](https://github.com/shikijs/twoslash/blob/5ad23a59c9ead4a3df4d11293948b10bdef373f9/packages/eleventy-plugin-shiki-twoslash/README.md).

## Installation

Replace `<package manager>` with your package manager. Works with at least `bun`, `npm`, `pnpm`, and `yarn`.

```shell
<package manager> add @olets/eleventy-plugin-shiki-twoslash
```

## Usage

### Minimal

```ts
// eleventy.config.js

import shikiTwoslash from "@olets/eleventy-plugin-shiki-twoslash";

export default function (eleventyConfig) {
  // …
  eleventyConfig.addPlugin(shikiTwoslash)
  // …
}
```

### With options

```ts
// eleventy.config.js

import shikiTwoslash from "@olets/eleventy-plugin-shiki-twoslash";

export default function (eleventyConfig) {
  // …
  eleventyConfig.addPlugin(shikiTwoslash, options)
  // …
}
```

### Options

The basic options are `theme: <theme name>`:

```js
{
  theme: "github-light-high-contrast",
}
```

and `themes: [<light theme name>, <dark theme name>]`:

```js
{
  themes: ["github-light-high-contrast", "github-dark-high-contrast"],
}
```

See [@olets/shiki-twoslash's UserConfigSettings type](https://github.com/olets/shiki/blob/main/packages/shiki/src/index.ts) for all options.

## Contributing

> Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check the [Issues](https://github.com/olets/shiki/issues) to see if your topic has been discussed before or if it is being worked on. You may also want to check the roadmap (see above).

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

<a href="https://github.com/olets/shiki/tree/main/packages/eleventy-plugin-shiki-twoslash">@olets/eleventy-plugin-shiki-twoslash</a> by <a href="https://olets.dev">Henry Bley-Vroman</a> is released under the [MIT license](LICENSE).

## Acknowledgments

Forked from <https://github.com/shikijs/twoslash/tree/main/packages/eleventy-plugin-shiki-twoslash>.
