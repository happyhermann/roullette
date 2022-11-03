<template class="template">
  <v-row class="header" justify-space-between align-center fluid>
    <v-col>
      <div class="arrow-box">
        <i class="mdi mdi-chevron-left"></i>
      </div>
    </v-col>
    <v-col style="text-align: center">
      <div>
        <h3 class="event-title">이벤트</h3>
      </div>
    </v-col>
    <v-col></v-col>
  </v-row>
</template>

<script>
export default {
  name: "EventHeader",

  data: () => ({}),
};
</script>

<style lang="scss">
.header {
  /* display: flex;
  align-items: center;
  justify-content: space-between; */
  margin-bottom: 22px;
  padding: 10px 10px;

  i {
    width: 30px;
  }

  h3 {
    font-size: 13px;
    font-weight: 700;
  }
}

.event-header {
  margin-bottom: 30px;
  h3 {
    font-size: 13px;
  }
}
</style>
