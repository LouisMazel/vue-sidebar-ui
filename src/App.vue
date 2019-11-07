<template>
  <div
    id="app"
    class="sidebar-ui flex"
  >
    <VueSidebarUi
      v-model="hasLeftSidebarOpen"
      :loader="loading"
    >
      <h3>SideBar 1</h3>
    </VueSidebarUi>
    <div class="main flex flex-1 flex-direction-column">
      <header class="text-center">
        <h1 class="mb-2">
          VueSidebarUi
        </h1>
        <h2 class="mb-4">
          A sidebar component for VueJS
        </h2>
      </header>
      <div class="container">
        <div class="flex flex-direction-column align-center">
          <div class="flex mb-2">
            <a
              target="_blank"
              href="https://github.com/LouisMazel/vue-sidebar-ui"
              class="btn btn-dark mr-2"
            >
              Github
            </a>
            <a
              target="_blank"
              href="https://www.npmjs.com/package/vue-sidebar-ui"
              class="btn btn-danger mr-2"
            >
              NPM
            </a>
            <a
              target="_blank"
              href="https://github.com/LouisMazel/vue-sidebar-ui/releases"
              class="btn btn-dark"
            >
              Changelog
            </a>
          </div>
          <div class="flex mb-2">
            <button
              class="btn mr-2"
              @click="hasLeftSidebarOpen = !hasLeftSidebarOpen"
            >
              Toggle Sidebar 1
            </button>
            <button
              class="btn btn-success mr-2"
              @click="hasRightSidebarOpen = !hasRightSidebarOpen"
            >
              Toggle Sidebar 2
            </button>
          </div>
          <div class="flex">
            <button
              class="btn btn-warning"
              @click="loading = !loading"
            >
              Toggle Loader
            </button>
          </div>
        </div>
      </div>
    </div>
    <VueSidebarUi
      v-model="hasRightSidebarOpen"
      right
      absolute
      :loader="!loading"
    >
      <i
        slot="button-icon"
        class="material-icons fs-16"
      >
        {{ hasRightSidebarOpen ? 'arrow_forward_ios' : 'arrow_back_ios' }}
      </i>
      <h3>SideBar 2</h3>
      <p>Absolute (above the main content)</p>
    </VueSidebarUi>
  </div>
</template>

<script>
  import VueSidebarUi from './VueSidebarUi'

  export default {
    name: 'App',
    components: {
      VueSidebarUi
    },
    data () {
      return {
        hasLeftSidebarOpen: true,
        hasRightSidebarOpen: false,
        loading: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'style-helpers';
  @import './assets/scss/main.scss';
  #app {
    .main {
      background-color: #F2F2F2;
    }
  }
</style>
