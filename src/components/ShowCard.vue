<template>
  <v-row class="modalClass" justify="center">
    <v-dialog v-model="dialog" persistent max-width="450">
      <template v-if="false" v-slot:activator="{ on, attrs }">
        <v-btn @click="showUp()" color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="item-text">
          ""님 {{ which }}당첨 축하드립니다!
          <!-- 당첨된 것 data[i].title -->
        </v-card-title>
        <v-img src="@/assets/000.jpg" class="item-img"></v-img>
        <!-- 당첨된 것 data[i].image -->

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            style="font-size: 20px"
            color="green darken-1"
            text
            @click="dialog = false"
          >
            확인
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import data from "../data.js";

export default {
  data() {
    return {
      dialog: false,
      item: data,
    };
  },
  methods: {
    showUp: function (which) {
      console.log(`모달창 열리는 함수`);
      console.log(`showup으로 넘어오는 결과 값 : ${which}`);
      this.dialog = true;

      console.log(
        `data.js에서 가져온 것 띄우기 ${data} ${data[0].title} ${data[0].image}`
      );

      // which render중에 접근되었으나, 인스턴트에 define 되지 않았음 life-cycle issue
    },
  },
};
</script>

<style>
.v-overlay {
  z-index: 9999;
}

.v-card {
  text-align: center;
}

.item-text {
  font-size: 18px;
}

.modalClass {
  z-index: 9999;
}
</style>
