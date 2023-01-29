# @boringer-avatars/solid

Procedurally generate Avatars for your applications. Use these avatars as placeholders until your users upload their own images.

<div style="background: rgba(255, 0, 0, 0.2); padding:1rem;">
  <h2>Warning: Generated Code</h2>

  <p>This library is generated using [Mitosis](https://github.com/BuilderIO/mitosis).</p>
</div>

This repo is forked from [boring-avatars](https://boringavatars.com). It aims to create cross-framework implementations for as many frameworks as possible. (Angular, React, Vue, Solid, Svelte, Qwik, etc).

## Installation

```bash
npm install @boringer-avatars/solid
# or
yarn add @boringer-avatars/solid
# or
pnpm add @boringer-avatars/solid
```

## Usage


```
import { Avatar } from "@boringer-avatars/solid";

    ...

    <Avatar
      title={false}
      size={400}
      variant="beam"
      name="testing"
      square={false}
      colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
    />
```

## Props

The options you can pass into the component are listed below.

### Required

- **name**: string. `name` is used to determine the exact drawing of each avatar. This is what makes it different for each user. You can also use ID values rather than names. This is the only required value.

### Optional

- **variant**: `Variant`. Determines the style of avatar. Valid values include: "pixel", "bauhaus", "ring", "beam", "sunset", "marble". Defaults to `"beam"`.

- **colors**: `string[]`. An array of valid Hex colors. 5 different colors is the optimal amount. More or less will still work. Defaults to: `["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]`.

- **square**: `boolean`. Decides whether Avatar is a Circle or Square. Defaults to: `false`

- **title**: `boolean`. Decides whether Avatar displays a title value. Defaults to: `false`

- **size**: `string`. Determines the width and height of the image. You can use any valid css value. eg: "42px", "42%", "42vw", etc. Defaults to: `42px`

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