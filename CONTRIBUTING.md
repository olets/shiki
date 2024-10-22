# Contributing

> Please note that this project is released with a [Contributor Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.

Check the [Issues](ttps://github.com/olets/shiki-twoslash/issues) to see if your topic has been discussed before or if it is being worked on. You may also want to check the roadmap (see above).

Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.

## Setup

Using a triangular workflow is recommended. `main` will pull from and push to `origin/main`. `upstream-main` will pull from `upstream/main` and push to `origin/upstream-main`.

```shell
git remote add upstream https://github.com/shikijs/twoslash
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
git diff upstream/main..upstream-main -- ./packages/shiki-twoslash ./
```

and port any diff over to `main`.

## Background

This repo was created by

1. Creating this repo via the GitHub web UI
1. Cloning the fork
1. In the clone, running
    ```shell
    git clone https://github.com/shikijs/twoslash shiki-twoslash
    cd shiki-twoslash
    git remote set-url origin https://github.com/olets/shiki-twoslash
    git switch -c upstream-main
    git push
    git config remote.pushdefault origin
    git config push.default current
    git branch --setup-upstream-to=upstream/main
    git switch main
    git reset --hard $(git subtree split -P packages/shiki-twoslash)
    git push --force-with-lease
    ```