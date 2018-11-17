# Vue Component Generator [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/belsrc/vue-gen/pulls)

Generate new Vue components from the command line.

## Install

```bash
npm i -g @belsrc/vue-gen
```

## Usage

```bash
vuegen [component name] [destination]
```

If destination is omitted, then the current directory is used.
Vue-gen uses [inquirer](https://github.com/SBoudrias/Inquirer.js/) for interactive generation options.

```
Component name? # not shown if name given in command
What type of file?
  * JSX Component
  * Single File Component
What type of component?
  * Standard Component
  * Router Page
Does component have state? (y/N)
```

### Generated Files

File Type: JSX Component

```
<destination>
└── <component name>/
    ├── index.jsx
    ├── styles.scss
    └── <component name>.test.js
```

File Type: Single File Component

```
<destination>
└── <component name>/
    ├── index.vue
    └── <component name>.test.js
```

Component name is kebab cased for folder/file/css class purposes. And Pascal case for the name property in the component.

`Router Page` adds the `beforeRouteUpdate` guard to the file, along with a `loadPageData` method that is called from `created` and the `beforeRouteUpdate`.

`Does component have state?`, if yes, will add `import { mapState, mapGetters, mapActions } from 'vuex';` along with the corresponding `...mapX({})` calls.

## License

```
Vue-gen is licensed under the MIT license.

Copyright © 2018 Bryan Kizer

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
