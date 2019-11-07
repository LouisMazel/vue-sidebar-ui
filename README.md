# VueSidebarUi

> A Sidebar UI component

## Demo

[Enjoy](https://louismazel.github.io/vue-sidebar-ui/)

## Installation

Yarn

```bash
yarn add vue-sidebar-ui
```

NPM

```bash
npm i --save vue-sidebar-ui
```

## Usage

### ES6 Modules / CommonJS

```js
import VueSidebarUi from 'vue-sidebar-ui';
import 'vue-sidebar-ui/dist/vue-sidebar-ui.css';

Vue.component('VueSidebarUi', VueSidebarUi);
```

```html
<VueSidebarUi
  v-model="yourValue"
/>
```

### Basic usage

#### Best way: Use CSS flexbox

##### CSS Sheet example

(*or install my CSS framework [style-helpers](https://github.com/LouisMazel/vue-input-ui)*)

```css
html, body, #app {
    height: 100vh;
}
.flex {
    display: flex;
}
.flex-1 {
    flex: 1;
}
```

##### Template

```html
<div class="app flex">
  <VueSidebarUi
    v-model="hasLeftSidebarOpen"
  >
    Left side bar content
  </VueSidebarUi>
  <div class="flex-1">
    Main content
  </div>
  <VueSidebarUi
      v-model="hasRightSidebarOpen"
      right
    >
      Right side bar content
  </VueSidebarUi>
</div>
```

##### VueJS implementation

```js
import VueSidebarUi from 'vue-sidebar-ui'
import 'vue-sidebar-ui/dist/vue-sidebar-ui.css'

export default {
  name: 'App',
  components: {
    VueSidebarUi
  },
  data () {
    return {
      hasLeftSidebarOpen: true,
      hasRightSidebarOpen: false
    }
  }
}
```

**Check the [demo](https://louismazel.github.io/vue-sidebar-ui/)**

### UMD

```html
<link
  rel="stylesheet"
  type="text/css"
  href="${YOUR_PATH}/vue-sidebar-ui.css"
/>

<div id="app">
  <VueSidebarUi
      v-model="hasLeftSidebarOpen"
    >
      Sidebar content
  </VueSidebarUi>
</div>

<script src="https://unpkg.com/vue" charset="utf-8"></script>
<script
  src="${YOUR_PATH}/vue-sidebar-ui.umd.min.js"
  charset="utf-8"
></script>

<script type="text/javascript">
  Vue.component('vue-sidebar-ui', window['vue-sidebar-ui']);
  new Vue({
    el: '#app',
    data() {
      return {
        hasLeftSidebarOpen: false
      };
    }
  });
</script>
```

## Props API

| Props                       | Type              | Required | Default                     |
| --------------------------- | ----------------- | -------- | --------------------------- |
| v-model                     | Boolean            | yes      | -                           |
| id                     | String            | no      | VueSidebarUi                      |
| width                     | Number            | no      | 350                           |
| loader                      | Boolean            | no       | false        |
| without-close-btn             | Boolean            | no       | false    |
| without-shadow               | Boolean            | no       | false          |
| absolute (1)                | Boolean            | no       | false                    |
| right (2)                | Boolean            | no       | false                    |

(1) absolute : Sidebar is open above the content

(2) right : You should use this props for the right sidebar

## Slots

| Slots           | Return                                            |
| --------------- | ------------------------------------------------- |
| default         | Content of the sidebar (see previous examples)    |
| button-icon (1) | Replace default icon of open/close button         |
| content-loader (2) | Replace default loader in sidebar content      |

(1) Example:

```html
<VueSidebarUi
  v-model="hasLeftSidebarOpen"
>
  <i
    slot="button-icon"
    class="material-icons"
  >
    {{ hasRightSidebarOpen ? 'arrow_forward_ios' : 'arrow_back_ios' }}
  </i>
</VueSidebarUi>
```

*You should switch icon for open/close effect*

(2) Example:

```html
<VueSidebarUi
  v-model="hasLeftSidebarOpen"
>
  <MyOwnLoader
    slot="content-loader"
  />
</VueSidebarUi>
```

## Events API

| Event           | Return                                            |
| --------------- | ------------------------------------------------- |
| input           | Boolean value of sidebar (`true` if open, `false` if closed)      |

## Contribute

### Setting up development server

Ensure you have Node and npm in your machine. Minimal config is:

- node >= 6.0
- npm >= 3.0

> This project is built with `node@10.x`.

Install the development dependencies by running:

```bash
npm install
```

or

```bash
npm ci # Recommanded if you have node > 10.x
```

Once your dependencies are installed, start the development server with:

```bash
npm run serve
```

This will start the development server available at `http://localhost:8080`.

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Linter

```bash
npm run lint
```

## License

This project is licensed under [MIT License](http://en.wikipedia.org/wiki/MIT_License)
