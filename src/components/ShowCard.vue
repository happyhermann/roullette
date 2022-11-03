<template>
  <v-row class="modalClass" justify="center">
    <v-dialog v-model="dialog" persistent max-width="300">
      <template v-if="false" v-slot:activator="{ on, attrs }">
        <v-btn @click="showUp()" color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="item-text">
          <strong v-if="isBlank === true"> ""님 </strong>
          <strong>{{ filteredItem.title }} </strong>
          <span v-if="isBlank === true"> 당첨 축하드립니다! </span>
          <span v-else>다음 기회에 ㅠ</span>
          <!-- 꽝일 경우에만 조건부 렌더링 하기  -->
          <!-- v-if else로 -->
        </v-card-title>
        <img :src="filteredItem.image" alt="당첨 상품 이미지" />

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

      // 조건부 렌더링
      isBlank: true,
    };
  },
  methods: {
    showUp: function (argItem) {
      console.log(`----모달창 열리는 함수 showUp 실행----`);
      console.log(`showup으로 넘어오는 argument 결과 값 : ${argItem}`);

      if (argItem === "꽝") {
        this.isBlank = false;
      }
      // 꽝 or 당첨 문구 조건부 렌더링

      this.dialog = true;

      // argItem에서 넘어온 값에 따라
      // data 몇 번을 뿌려줄 지 조건을 여기서 결정하는 것??

      const filteredResult = data.filter((item) => item.title === argItem);
      // v-bind로 data에 동적으로 바인딩 될 한 가지가 들어가야할 곳

      console.log(filteredResult[0]);
      this.filteredItem = filteredResult[0];
      console.log(this.filteredItem);
    },
  },
};
</script>

<style>
.v-overlay {
  widows: 60%;
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
