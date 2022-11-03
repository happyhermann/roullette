<template class="appVue">
  <MyRoulette />
</template>

<script>
import MyRoulette from "./components/EventRoulette.vue";

export default {
  name: "App",

  components: {
    MyRoulette,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss"></style>
