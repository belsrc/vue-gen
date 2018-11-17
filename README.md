# Vue Component Generator [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/belsrc/vue-gen/pulls)

Generate new Vue components from the command line.

## Install

```bash
npm i -g @belsrc/vue-gen
```

## Usage

```bash
vue-gen [component name] [destination]
```

If destination is omitted, then the current directory is used.
Vue-gen uses [inquirer](https://github.com/SBoudrias/Inquirer.js/) for generation options.

```
Component name? # not shown if name given in command
What type of file?
  * JSX Component
  * Single File Component
What type of component?
  * Standard Component
  * Router Page # Entry component for vue-router, includes beforeRouteUpdate guard
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
