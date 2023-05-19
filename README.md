# Spreadsheets Vue Template

This template is made for the _Translating Spreadsheets into Maintainable Software_ thesis and is meant to be used as a starting point and example for using the process from the thesis in your own projects. The template is based on the [Vue 3](https://v3.vuejs.org/) framework and uses [TypeScript](https://www.typescriptlang.org/) for type safety.

## Features

- ⚡️ Build with [Vue 3](https://github.com/vuejs/vue-next),
  [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/) and
  [ESBuild](https://github.com/evanw/esbuild)
- ⚙️ Type safety with [TypeScript](https://www.typescriptlang.org/)
- 📄 File based routing with [Vue Router 4](https://router.vuejs.org/) and [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)
- 🍍 State Management with [Pinia](https://pinia.vuejs.org/)
- 🎨 Linting with [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/) 
- 🎨 Formatting with [Prettier](https://prettier.io/)
- 📦 Auto importing with [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) and [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)
- 🧪 Testing with [Vitest](https://vitest.dev/) and [Cypress](https://www.cypress.io/)
- 📮 Easier CSS with [postcss-nesting](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting), [autoprefixer](https://github.com/postcss/autoprefixer) and [normalize.css](https://github.com/csstools/normalize.css/)
- 🟰 Easy spreadsheet translation with [spreadsheets-vue](https://github.com/BLumbye/spreadsheets-vue)
- 📊 Charts and plots with [D3](https://d3js.org/) and [Observable Plot](https://observablehq.com/plot/)

## Requirements

You need to have [Node.js](https://nodejs.org/en/) and prefferably [pnpm](https://pnpm.js.org/) installed to use this template.

## Usage

The following commands are available:
- To run the dev server, use `pnpm dev`.
- To build, use `pnpm build`.
- To lint, use `pnpm lint`.
- To test, use `pnpm test`.

## Folder Structure

There are three main folders to be aware of:
- `src`: Contains the source code of the project.
- `public`: Contains static files that are copied to the root of the build.
- `dist`: Contains the build output.

Inside of the source folder, there are a few more folders:
- `assets`: Contains static assets that are processed by Vite.
- `components`: Contains Vue components.
- `composables`: Contains Vue composables.
- `pages`: Contains Vue pages. These are essentially just components that are automatically routed by Vite.
- `stores`: Contains Pinia stores.
- `styles`: Contains global styles.
- `types`: Contains TypeScript type definitions.
- `utils`: Contains utility functions.

Inside of the `src` folder, there are also a few files:
- `App.vue`: The root Vue component.
- `main.ts`: The entry point of the application.

Some projects might require more folders, such as `plugins` for Vue plugins or `directives` for Vue directives. These can be added as needed.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) + ESLint + Prettier + Stylelint.

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
