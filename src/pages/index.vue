<template>
  <h1 id="spreadsheets-vue-template">Spreadsheets Vue Template</h1>
  <p>This template is made for the <em>Translating Spreadsheets into Maintainable Software</em> thesis and is meant to be
    used as a starting point and example for using the process from the thesis in your own projects. The template is based
    on the <a href="https://v3.vuejs.org/">Vue 3</a> framework and uses <a
       href="https://www.typescriptlang.org/">TypeScript</a> for type safety.</p>
  <h2 id="features">Features</h2>
  <ul>
    <li>⚡️ Build with <a href="https://github.com/vuejs/vue-next">Vue 3</a>,
      <a href="https://github.com/vitejs/vite">Vite 3</a>, <a href="https://pnpm.js.org/">pnpm</a> and
      <a href="https://github.com/evanw/esbuild">ESBuild</a>
    </li>
    <li>⚙️ Type safety with <a href="https://www.typescriptlang.org/">TypeScript</a></li>
    <li>📄 File based routing with <a href="https://router.vuejs.org/">Vue Router 4</a> and <a
         href="https://github.com/hannoeru/vite-plugin-pages">vite-plugin-pages</a></li>
    <li>🍍 State Management with <a href="https://pinia.vuejs.org/">Pinia</a></li>
    <li>🎨 Linting with <a href="https://eslint.org/">ESLint</a> and <a href="https://stylelint.io/">Stylelint</a> </li>
    <li>🎨 Formatting with <a href="https://prettier.io/">Prettier</a></li>
    <li>📦 Auto importing with <a href="https://github.com/antfu/unplugin-auto-import">unplugin-auto-import</a> and <a
         href="https://github.com/antfu/unplugin-vue-components">unplugin-vue-components</a></li>
    <li>🧪 Testing with <a href="https://vitest.dev/">Vitest</a> and <a href="https://www.cypress.io/">Cypress</a></li>
    <li>📮 Easier CSS with <a
         href="https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-nesting">postcss-nesting</a>, <a
         href="https://github.com/postcss/autoprefixer">autoprefixer</a> and <a
         href="https://github.com/csstools/normalize.css/">normalize.css</a></li>
    <li>🟰 Easy spreadsheet translation with <a href="https://github.com/BLumbye/spreadsheets-vue">spreadsheets-vue</a>
    </li>
    <li>📊 Charts and plots with <a href="https://d3js.org/">D3</a> and <a
         href="https://observablehq.com/plot/">Observable Plot</a></li>
  </ul>
  <h2 id="requirements">Requirements</h2>
  <p>You need to have <a href="https://nodejs.org/en/">Node.js</a> and prefferably <a href="https://pnpm.js.org/">pnpm</a>
    installed to use this template.</p>
  <h2 id="usage">Usage</h2>
  <p>The following commands are available:</p>
  <ul>
    <li>To run the dev server, use <code>pnpm dev</code>.</li>
    <li>To build, use <code>pnpm build</code>.</li>
    <li>To lint, use <code>pnpm lint</code>.</li>
    <li>To test, use <code>pnpm test</code>.</li>
  </ul>
  <h2 id="folder-structure">Folder Structure</h2>
  <p>There are three main folders to be aware of:</p>
  <ul>
    <li><code>src</code>: Contains the source code of the project.</li>
    <li><code>public</code>: Contains static files that are copied to the root of the build.</li>
    <li><code>dist</code>: Contains the build output.</li>
  </ul>
  <p>Inside of the source folder, there are a few more folders:</p>
  <ul>
    <li><code>assets</code>: Contains static assets that are processed by Vite.</li>
    <li><code>components</code>: Contains Vue components.</li>
    <li><code>composables</code>: Contains Vue composables.</li>
    <li><code>pages</code>: Contains Vue pages. These are essentially just components that are automatically routed by
      Vite.</li>
    <li><code>stores</code>: Contains Pinia stores.</li>
    <li><code>styles</code>: Contains global styles.</li>
    <li><code>types</code>: Contains TypeScript type definitions.</li>
    <li><code>utils</code>: Contains utility functions.</li>
  </ul>
  <p>Inside of the <code>src</code> folder, there are also a few files:</p>
  <ul>
    <li><code>App.vue</code>: The root Vue component.</li>
    <li><code>main.ts</code>: The entry point of the application.</li>
  </ul>
  <p>Some projects might require more folders, such as <code>plugins</code> for Vue plugins or <code>directives</code> for
    Vue directives. These can be added as needed.</p>
  <h2 id="recommended-ide-setup">Recommended IDE Setup</h2>
  <ul>
    <li><a href="https://code.visualstudio.com/">VS Code</a> + <a
         href="https://marketplace.visualstudio.com/items?itemName=Vue.volar">Volar</a> (and disable Vetur) + <a
         href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin">TypeScript Vue Plugin
        (Volar)</a> + ESLint + Prettier + Stylelint.</li>
  </ul>
  <h2 id="type-support-for-vue-imports-in-ts">Type Support For <code>.vue</code> Imports in TS</h2>
  <p>TypeScript cannot handle type information for <code>.vue</code> imports by default, so we replace the
    <code>tsc</code> CLI with <code>vue-tsc</code> for type checking. In editors, we need <a
       href="https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin">TypeScript Vue Plugin
      (Volar)</a> to make the TypeScript language service aware of <code>.vue</code> types.
  </p>
  <p>If the standalone TypeScript plugin doesn&#39;t feel fast enough to you, Volar has also implemented a <a
       href="https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669">Take Over Mode</a> that is
    more performant. You can enable it by the following steps:</p>
  <ol>
    <li>Disable the built-in TypeScript Extension<ol>
        <li>Run <code>Extensions: Show Built-in Extensions</code> from VSCode&#39;s command palette</li>
        <li>Find <code>TypeScript and JavaScript Language Features</code>, right click and select
          <code>Disable (Workspace)</code>
        </li>
      </ol>
    </li>
    <li>Reload the VSCode window by running <code>Developer: Reload Window</code> from the command palette.</li>
  </ol>
</template>

<style scoped lang="postcss"></style>
