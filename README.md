# eleventy-plugin-shiki-twoslash

This is a fork of [shikijs/twoslash's eleventy-plugin-shiki-twoslash package](https://github.com/shikijs/twoslash/tree/main/packages/eleventy-plugin-shiki-twoslash) made available as a standalone repo.

Learn more in this repo's [CONTRIBUTING.md](CONTRIBUTING.md), and in [shikijs/twoslash's eleventy-plugin-shiki-twoslash package's README.md](https://github.com/shikijs/twoslash/blob/5ad23a59c9ead4a3df4d11293948b10bdef373f9/packages/eleventy-plugin-shiki-twoslash/README.md).

Syntax highlight Eleventy Markdown code blocks with [@olets/shiki](https://github.com/olets/shiki), a fork of [Shiki](https://shiki.style/) v0.x.

This is an alternative to [@shikijs/markdown-it](https://shiki.style/packages/markdown-it). It behaves like shikijs/twoslash's eleventy-plugin-shiki-twoslash package, providing an easier migration pathway for Eleventy users who used that in Eleventy < 3.

> [!IMPORTANT]
> These are the significant differences between `@olets/eleventy-plugin-shiki-twoslash` and ShikiJS's `eleventy-plugin-shiki-twoslash` and `remark-shiki-twoslash`. As of this writing:
> 1. `@olets/eleventy-plugin-shiki-twoslash` supports Eleventy v3.x, and does not support Eleventy < 3. (ShikiJS's `eleventy-plugin-shiki-twoslash` only supports Eleventy < 3.)
> 1. `@olets/eleventy-plugin-shiki-twoslash` endeavors to support all the themes and languages supported by [Shiki](https://shiki.style/) 1.x. (ShikiJS's `eleventy-plugin-shiki-twoslash` and `remark-shiki-twoslash` do not receive regular theme and language updates.)

## Installation

### Bun

```shell
bun add github:olets/eleventy-plugin-shiki-twoslash
```

### NPM

```shell
npm add olets/eleventy-plugin-shiki-twoslash
```

### pnpm

```shell
pnpm add https://github.com/olets/eleventy-plugin-shiki-twoslash.git
```

### Yarn

#### v2+

```shell
yarn add @olets/eleventy-plugin-shiki-twoslash@olets/eleventy-plugin-shiki-twoslash
```

#### v1

```shell
yarn add https://github.com/olets/eleventy-plugin-shiki-twoslash.git
```

## Usage

```ts
// eleventy.config.js

import shikiTwoslash from "@olets/eleventy-plugin-shiki-twoslash";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(shikiTwoslash, options)
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

See [@olets/shiki-twoslash's UseConfigSettings type](https://github.com/olets/shiki-twoslash/blob/main/src/index.ts) for all options.

## Contributing

> Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check the [Issues](ttps://github.com/olets/eleventy-plugin-shiki-twoslash/issues) to see if your topic has been discussed before or if it is being worked on. You may also want to check the roadmap (see above).

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## License

<a href="https://github.com/olets/eleventy-plugin-shiki-twoslash">@olets/eleventy-plugin-shiki-twoslash</a> by <a href="https://github.com/olets">Henry Bley-Vroman</a> is released under the [MIT license](LICENSE).

## Acknowledgments

Forked from <https://github.com/shikijs/twoslash/tree/main/packages/eleventy-plugin-shiki-twoslash>.
