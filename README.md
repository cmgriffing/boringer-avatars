# Boringer Avatars

Boringer Avatars is a tiny JS library that generates custom, SVG-based avatars from any username and color palette.

## Origins

This repo is hard-forked from [https://github.com/boringdesigners/boring-avatars](https://github.com/boringdesigners/boring-avatars).

That repo is React-specific. Other users have forked it into framework specific libraries. But as new frameworks come out, that requires yet another codebase and maintainer.

In this repo, we rewrote the components into Mitosis components. This allows us to export the components into a multitude of other frameworks.

## Frameworks/Packages

For specific usage, please see the README for whichever framework you need.

We currently support:

- Angular: [source](./packages/lib-angular) [npm](https://www.npmjs.com/package/@boringer-avatars/angular)
- Qwik: [source](./packages/lib-qwik) [npm](https://www.npmjs.com/package/@boringer-avatars/qwik)
- React: [source](./packages/lib-react) [npm](https://www.npmjs.com/package/@boringer-avatars/react)
- Solid: [source](./packages/lib-solid) [npm](https://www.npmjs.com/package/@boringer-avatars/solid)
- Svelte: [source](./packages/lib-svelte) [npm](https://www.npmjs.com/package/@boringer-avatars/svelte)
- Vue2: [source](./packages/lib-vue2) [npm](https://www.npmjs.com/package/@boringer-avatars/vue2)
- Vue3: [source](./packages/lib-vue3) [npm](https://www.npmjs.com/package/@boringer-avatars/vue3)

## Contributing

Want to see another framework supported? Have a way of improving Typescript Types output? Feel free to create an Issue or Pull Request.

## Development

To develop and run the project locally, you will need:

- Node: >= 18

- pnpm: >= 7.4.0

### Installation

Installing the dependencies is done via pnpm:

```
yarn install
```

This will install all depencies for the packages and apps within the workspace.

## License

MIT License

Copyright (c) 2021 boringdesigners

Copyright (c) 2022 cmgriffing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
