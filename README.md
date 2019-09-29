# Vue Component Generator

[![Build Status](https://img.shields.io/travis/com/belsrc/vue-gen.svg?logo=travis&logoWidth=14&style=flat-square)](https://travis-ci.com/belsrc/vue-gen)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/belsrc/vue-gen.svg?logo=code%20climate&logoWidth=14&style=flat-square)](https://codeclimate.com/github/belsrc/vue-gen/maintainability)
[![Code Coverage](https://img.shields.io/codecov/c/github/belsrc/vue-gen/master.svg?logo=codecov&logoWidth=14&style=flat-square)](https://codecov.io/gh/belsrc/vue-gen/branch/master)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/belsrc/vue-gen.svg?logo=lgtm&logoWidth=14&style=flat-square)](https://lgtm.com/projects/g/belsrc/vue-gen/alerts/)
[![Known Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/belsrc/vue-gen.svg?logo=snyk&logoWidth=14&style=flat-square)](https://app.snyk.io/org/belsrc/project/0623bc36-ba88-4751-b85c-6f93c28b5f7c)
[![Last Commit](https://img.shields.io/github/last-commit/belsrc/vue-gen/master.svg?logo=github&logoWidth=14&style=flat-square)](https://github.com/belsrc/vue-gen/commits/master)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/belsrc/vue-gen/pulls)

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
The interactive steps can be skipped if the `-q`/`--quiet` flag is passed. This automatically sets file type `jsx`, stand component, no state.

```
Component name? # not shown if name given in command
What type of file?
  * JSX Component
  * Single File Component
Is this a functional component? (y/N)
What type of component?
  * Standard Component
  * Router Page
Does component have state? (y/N)
```

Selecting `yes` for functional component will cause the last two questions to be skipped, as they no longer apply.

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

"Is this a functional component," if yes, will add the appropriate `functional` tag for the file type and remove the blocks that would be referenced via `this`.

`Router Page` adds the `beforeRouteUpdate` guard to the file, along with a `loadPageData` method that is called from `created` and the `beforeRouteUpdate`.

`Does component have state?`, if yes, will add `import { mapState, mapGetters, mapActions } from 'vuex';` along with the corresponding `...mapX({})` calls.

## Contributing

Contributions encouraged! Please check out the [contributing guide](CONTRIBUTING.md) for guidelines about how to proceed.

Trying to report an issue? Please use the [issue template](ISSUE_TEMPLATE.md).

Everyone interacting in the Vue Component Generator codebase and issue tracking is expected to follow the [code of conduct](CODE_OF_CONDUCT.md).

## License

Vue-gen is licensed under the [MIT license](LICENSE).

Copyright © 2019 Bryan Kizer
