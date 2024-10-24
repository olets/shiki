# Contributing

> Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check the [Issues](ttps://github.com/olets/shiki/issues) to see if your topic has been discussed before or if it is being worked on. You may also want to check the roadmap (see above).

## Add a new theme

Is @olets/shiki missing support for a Shiki theme (https://shiki.style/themes)? You can add it.

1. Copy the theme JSON file from `tm-themes` (https://github.com/shikijs/textmate-grammars-themes/tree/main/packages/tm-themes/themes) to this package's [`themes` directory](./themes/).
1. Update [`src/themes.ts`](./src/themes.ts):
    - Add the JSON's `"name"` value to the `Theme` type. Keep it alphabetical.
    - Add the JSON's `"name"` value to the `themes` array. Keep it alphabetical.
1. Run `bun run build`.

## Add a new language

Is @olets/shiki missing support for a Shiki language (https://shiki.style/languages)? You can add it.

1. Copy the _raw_ grammar JSON file from `tm-grammars` (https://github.com/shikijs/textmate-grammars-themes/tree/main/packages/tm-grammars/raw) to this package's [`languages` directory](./languages/).
    > [!IMPORTANT]
    > Use the "raw" grammar, in `tm-grammars/raw`.
1. Rename the file from `<language>.json` to `<language>.tmLanguage.json`.
1. Update [`src/languages.ts`](./src/languages.ts):
    - Add the JSON's `"name"` value to the `Lang` type. Keep it alphabetical.
    - Add an object to the `languages` array. Keep it alphabetical by `id`:
        ```js
        {
            id: <"name" from the JSON file>,
            scopeName: <"scopeName" from the JSON file>,
            path: <name of the JSON file>,
            displayName: <"displayName" from the JSON file>,
        },
        ```
1. Run `bun run build`.
