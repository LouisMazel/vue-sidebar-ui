<template>
  <div>
    <h1>
      Component:
    </h1>
    <VueSidebarUi
      v-model="open"
    />
  </div>
</template>

<script>
  import VueSidebarUi from './../VueSidebarUi'

  export default {
    components: {
      VueSidebarUi
    },
    data () {
      return {
        open: false
      }
    }
  }
</script>
