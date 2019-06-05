<template>
  <div id="top-menu">
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

<style scoped >
#top-menu {
  background: #000;
  min-height: 100%;
}
</style>
