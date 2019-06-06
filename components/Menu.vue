<template lang="pug">
#menu
  ul.menu-list
    li(v-for="link in links" :key="link.name") {{link.name}}
</template>


<script>
export default {
  data() {
    return {
      links: [
        { name: "home" },
        { name: "book" },
        { name: "exhibition" },
        { name: "book" },
        { name: "thankyou" },
        { name: "contact" }
      ]
    };
  }
};
</script>
