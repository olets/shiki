# Contributing

## Contributors

Fork this repo, clone the fork, make your change(s) in the relevant package(s) (in [the ./packages/ director](./packages/)), commit.

Then

1. Run (in the monorepo root)

    ```shell
    bun run changeset
    ```

    and follow the prompts to add a changeset
2. Commit the generated file.

## Maintainers

To cut and publish new releases of changed packages, run

```shell
bun run release
```
