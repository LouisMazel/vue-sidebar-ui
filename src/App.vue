<template>
  <div
    id="app"
    class="sidebar-ui flex"
  >
    <VueSidebarUi
      v-model="sideBarOpen"
      :width="350"
    >
      <h3>SideBar 1</h3>
      <p>width 350</p>
    </VueSidebarUi>
    <div class="main flex flex-1 flex-direction-column">
      <header class="text-center">
        <h1>VueSidebarUi</h1>
        <h2>A sidebar component for VueJS</h2>
      </header>
      <div class="container">
        <button
          class="btn"
          style="margin-right: 10px;"
          @click="sideBarOpen = !sideBarOpen"
        >
          Toggle Sidebar 1
        </button>
        <button
          class="btn btn-danger"
          @click="sideBarOpen2 = !sideBarOpen2"
        >
          Toggle Sidebar 2
        </button>
      </div>
    </div>
    <VueSidebarUi
      v-model="sideBarOpen2"
      :width="350"
      right
      absolute
    >
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
        sideBarOpen: true,
        sideBarOpen2: false
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
  @import 'style-helpers';
  #app {
    .main {
      background-color: #F2F2F2;
    }
  }
</style>
