<template>
  <div
    id="app"
    class="sidebar-ui flex"
  >
    <VueSidebarUi
      v-model="sideBarOpen"
      :width="350"
    />
    <header class="text-center flex-1">
      <h1>VueSidebarUi</h1>
      <h3>A sidebar component for VueJS</h3>
    </header>
    <VueSidebarUi
      v-model="sideBarOpen"
      :width="350"
      right
    />
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
        sideBarOpen: false
      }
    }
  }
</script>

<style lang="scss">
  @import './assets/scss/main.scss';
  @import 'style-helpers';
</style>
