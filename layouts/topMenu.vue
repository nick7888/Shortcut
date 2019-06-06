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

<style lang="scss">
$primary :#000;
#top-menu {
  background: $primary;
  position: absolute;
  width: 100%;
}
</style>
