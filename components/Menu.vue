<template lang="pug">
#menu
  ul.menu-list
    li(v-for="link in links" :key="link.name") 
      router-link(:to="{name:link.name}") {{link.name}}
</template>


<script>
export default {
  data() {
    return {
      links: [
        { name: "home" },
        { name: "creator" },
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
