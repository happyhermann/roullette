<template>
  <v-app>
    <v-main>
      <MyRoulette/>
    </v-main>
  </v-app>
</template>

<script>
import MyRoulette from './components/MyRoulette.vue'

export default {
  name: 'App',

  components: {
    MyRoulette,
  },

  data: () => ({
    //
  }),
}
</script>
