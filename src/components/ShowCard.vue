<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="450">
      <template v-slot:activator="{ on, attrs }">
        <v-btn @click="showUp()" color="primary" dark v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="item-text">
          ""님 ""당첨 축하드립니다!
        </v-card-title>
        <v-img src="@/assets/000.jpg" class="item-img"></v-img>
        <!-- 룰렛 결과 데이터에 따라 
        여기 v-img src에 바인딩되는 assets (이미지)만 바뀔 것
        -->

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
export default {
  data() {
    return {
      dialog: false,
    };
  },
  methods: {
    showUp: function (which) {
      console.log(`모달창 열리는 함수`);
      console.log(`showup으로 넘어오는 결과 값 : ${which}`);
      this.dialog = true;
    },
  },
};
</script>

<style>
.v-card {
  text-align: center;
}

.item-text {
  font-size: 18px;
}
</style>
