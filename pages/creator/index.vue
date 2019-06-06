<template>
  <div>
    <div>
      creators lists {{creators}}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'topMenu',
  computed: {
    ...mapGetters({
      creators:'creator/creators'
    })
  }
}
</script>

<style>

</style>
