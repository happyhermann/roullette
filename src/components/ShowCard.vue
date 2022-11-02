<template>
  <v-row class="modalClass" justify="center">
    <v-dialog v-model="dialog" persistent max-width="250">
      <template v-if="false" v-slot:activator="{ on, attrs }">
        <v-btn @click="showUp()" color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="item-text">
          <strong> ""님 </strong>
          <strong>{{ filteredItem.title }} </strong>
          <span> 당첨 축하드립니다! </span>
          <!-- 당첨된 것 data[i].title -->
        </v-card-title>
        <v-img src="{{filtered.image}}" class="item-img"></v-img>
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
      //   필터된 아이템 객체
      filteredItem: [],
    };
  },
  methods: {
    showUp: function (argItem) {
      console.log(`----모달창 열리는 함수 showUp 실행----`);
      console.log(`showup으로 넘어오는 argument 결과 값 : ${argItem}`);
      this.dialog = true;

      // argItem에서 넘어온 값에 따라
      // data 몇 번을 뿌려줄 지 조건을 여기서 결정하는 것??

      console.log(
        `data.js에서 가져온 것 띄우기 ${data} ${data[0].title} ${data[0].image}`
      );

      const filteredResult = data.filter((item) => item.title === argItem);
      // v-bind로 data에 동적으로 바인딩 될 한 가지가 들어가야할 곳

      console.log(filteredResult[0]);
      this.filteredItem = filteredResult[0];
      console.log(this.filteredItem);
      // which render중에 접근되었으나, 인스턴트에 define 되지 않았음 life-cycle issue
    },
  },
};
</script>

<style>
.v-overlay {
  z-index: 4000;
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
