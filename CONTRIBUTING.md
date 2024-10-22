# Contributing

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

TBD.

## Background

This repo was created by

1. Create this repo via the GitHub web UI
1. Cloning the fork
1. In the clone, running
    ```shell
    git clone https://github.com/shikijs/twoslash remark-shiki-twoslash
    cd remark-shiki-twoslash
    git remote set-url origin https://github.com/olets/remark-shiki-twoslash
    git switch -c upstream-main
    git push
    git config remote.pushdefault origin
    git config push.default current
    git branch --setup-upstream-to=upstream/main
    git switch main
    git reset --hard $(git subtree split -P packages/remark-shiki-twoslash)
    git push --force-with-lease
    ```