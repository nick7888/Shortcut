<template>
  <div id="top-menu">
    top menu
    <menu-app/>
    <nuxt />
  </div>
</template>

<script>
import MenuApp from '~/components/Menu'

export default {
  components: {
    MenuApp
  }
}
</script>

<style scoped lang="scss">
#top-menu {
  
}
</style>
