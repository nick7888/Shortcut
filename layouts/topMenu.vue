<template>
  <div id="top-menu">
    <menu-app class="clearfix"/>
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