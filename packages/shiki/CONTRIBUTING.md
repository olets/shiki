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

## Setup

Using a triangular workflow is recommended. `main` will pull from and push to `origin/main`. `upstream-main` will pull from `upstream/main` and push to `origin/upstream-main`.

```shell
git remote add upstream https://github.com/shikijs/shiki
git config remote.pushdefault origin
git config push.default current
git checkout upstream-main
git fetch upstream
git branch --set-upstream-to=upstream/main
git checkout main
```

## Getting the latest changes from upstream

```
git fetch
git fetch upstream
git diff upstream/main..upstream-main -- ./packages/shiki ./
```

and port any diff over to `main`.

## Background

This repo was created by

1. Create this repo via the GitHub web UI
1. Cloning the fork
1. In the clone, running

    ```shell
    git clone https://github.com/shikijs/shiki shiki
    cd shiki
    git config remote.pushdefault origin
    git config push.default current
    git remote set-url origin https://github.com/olets/shiki
    git remote add upstream https://github.com/shikijs/shiki shiki
    git fetch upstream
    git switch main
    git subtree split -P packages/shiki -b next
    git reset --hard next
    git reset --hard $(git log --grep="^v0." -1 --format=%H)
    git push
    git switch next
    git push
    git switch upstream-main
    git push
    git branch --set-upstream-to=upstream/main
    ```
