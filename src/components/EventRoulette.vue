/* eslint-disable */

<template class="template">
  <v-container justify-center fluid class="event-main">
    <!-- 헤더 -->
    <MyHeader />
    <!-- 텍스트 -->
    <EventText />

    <!-- 룰렛 -->
    <section class="roul-section">
      <div v-bind:style="computedStyledObject" class="roulette-box">
        <!-- computed로 만든 이 메서드는 재사용성이 좋음
        message가 변하지 않는 한 reversedMessage가 몇번이고 불려저도 함수는 다시 실행되는 것이 아닌 이전에 계산되어진 결과를 즉시 돌려준다
        리액트에서 useMemo와 같은 역할 
        methods가 렌더링을 할때마다 항상 함수를 실행한다면..
      -->
        <v-img
          contain
          min-width="320"
          max-width="550"
          width="450"
          max-height="auto"
          class="bottom"
          src="@/assets/1.png"
        />
        <!-- 룰렛 돌림판 이미지 -->
        <v-img
          min-width="320"
          max-width="550"
          width="450"
          max-height="auto"
          class="items"
          src="@/assets/3.png"
        />
        <v-img class="pin" src="@/assets/6.png" />
        <!-- 룰렛 핀 -->
        <button id="btn1" @click="[onStart($event), update2()]">
          <v-img
            v-bind:class="{ onClicked: isClicked }"
            min-width="60"
            max-width="150"
            width="80"
            max-height="auto"
            class="start-button"
            src="@/assets/4.png"
          />
        </button>
      </div>
      <div class="token-box">
        <div class="bonus-token">
          <span>{{ bonusToken }}</span>
          <span>보너스 토큰</span>
        </div>
        <div class="left-token">
          <span>잔여 토큰</span>
          <span>{{ leftToken }}</span>
        </div>
      </div>
    </section>
    <MainBanner />

    <ShowCard class="showCard" ref="showCard" />
  </v-container>
  <EventAward />
</template>

<script>
import ShowCard from "./ShowCard.vue";
import MyHeader from "./EventHeader.vue";
import EventText from "./EventText.vue";
import EventAward from "./EventAward.vue";
import MainBanner from "../common/MainBanner.vue";

export default {
  name: "MyRoulette",

  components: {
    MyHeader,
    EventText,
    ShowCard,
    EventAward,
    MainBanner,
  },

  data: () => ({
    random: 0,
    // global 랜덤 변수
    overallRol: 8,
    // 사은품 개수
    result: 0,
    // 멈춘 각도 결과
    widthRatio: 0,
    // 부모요소 width 비율
    bonusToken: 3,
    leftToken: 13,
    // 보너스 & 잔여 토큰

    initWidth: 0,
    // v-img 값

    // 부모 object css 값
    classObject: {
      width: 0,
      imgWidth: 0,
    },
    // 버튼 object css 값
    classObject2: {
      isClicked: false,
    },
  }),
  methods: {
    update: function () {
      this.classObject.width = `${300 * this.widthRatio}px`;
    },
    update2: function () {
      this.classObject2.isClicked = !this.isClicked;
      console.log(`업데이트2 함수 작동 ${this.classObject2.isClicked}`);
      // 클릭 확인 state (default : false)
      // 시작 버튼 클릭 toggle function for <버튼 애니메이션 추후 바인딩>
    },
    imgWidthUpdate: function () {
      this.classObject.imgWidth = this.initWidth;
      console.log(
        `===classObject===imgWidthUpdate 함수 작동 : ${this.classObject.imgWidth}`
      );
    },

    randomNum: function () {
      let min = Math.ceil(0);
      let max = Math.floor(this.overallRol - 1);
      return Math.floor(Math.random() * (max - min) + min);
    },
    //

    onStart: function () {
      console.log(`---룰렛 버튼 눌러졌음 onStart 함수---`);
      // var target = event.target;

      // onStart 누르면 isClicked

      if (!this.bonusToken == 0) {
        this.bonusToken = this.bonusToken - 1;
      } else if (!this.leftToken == 0) {
        this.leftToken = this.leftToken - 1;
      }

      (this.leftToken == 0 && alert("토큰이 없습니다")) || this.onRotate();

      // 보너스 토큰부터 소진, 없을시 leftToken 소진
    },
    matchItems: function (result) {
      // 추후 당첨 팝업 띄우기
      // 재활용 가능하게 고려해야함
      let whichItem = [
        "10만원",
        "꽝",
        "박카스",
        "5천원",
        "5만원",
        "꽝",
        "3만원",
        "1만원",
      ];

      switch (result) {
        case 0:
          console.log("10만원");
          this.$refs.showCard.showUp(whichItem[0]);

          break;
        case 45:
          console.log("꽝");
          this.$refs.showCard.showUp(whichItem[1]);

          break;
        case 90:
          console.log("박카스");
          this.$refs.showCard.showUp(whichItem[2]);

          break;
        case 135:
          console.log("5천원");
          this.$refs.showCard.showUp(whichItem[3]);

          break;
        case 180:
          console.log("5만원");
          this.$refs.showCard.showUp(whichItem[4]);

          break;
        case 225:
          console.log("꽝입니다");
          this.$refs.showCard.showUp(whichItem[5]);

          break;
        case 270:
          console.log("3만원");
          this.$refs.showCard.showUp(whichItem[6]);

          break;
        case 315:
          console.log("1만원!");
          this.$refs.showCard.showUp(whichItem[7]);

        // switch도 재활용 가능하게 리팩토링 하기

        // 이벤트 모달 띄우는 ref 자식 method 호출 문법
      }

      // matchItem이후 룰렛 0으로 초기화
      // const items = document.querySelector(".items"); // eslint-disable-line no-unused-vars
      // items.style.transform = "rotate(" + 0 + "deg)";
    },
    onRotate: function () {
      const btn = document.querySelector(".start-button"); // eslint-disable-line no-unused-vars
      const pin = document.querySelector(".pin"); // eslint-disable-line no-unused-vars

      const items = document.querySelector(".items"); // eslint-disable-line no-unused-vars

      let deg = [];
      for (let i = 1, len = this.overallRol; i <= len; i++) {
        deg.push((360 / len) * i);
      }

      let degResult = 0;
      // 재사용 가능하게 len으로 전체 상품 개수가 들어오면
      // 자동으로 배열에 최소값부터 최대값까지 넣어줌

      console.log(deg);

      let num = 0;
      // 회전 회수 초기 state

      const anim = setInterval(() => {
        num++;
        // 반복될 때 마다 회전 회수 더해줌

        items.style.transform = "rotate(" + 360 * num + "deg)";
        // anim대신 직접 rotate css로 작동
        pin.classList.add("shake");
        // 핀 흔들리는 애니메이션도 함께
        btn.disabled = true;
        btn.style.pointerEvents = "none";

        if (num == 50) {
          console.log("50회 끝");
          clearInterval(anim);
          // 회전 삭제
          pin.classList.remove("shake");

          degResult = deg[this.randomNum()];
          items.style.transform = "rotate(" + (degResult + 30) + "deg)";
          // degResult 뒤에 임의 30deg 추가해서 경품 중앙 애매하게 위치하게 세팅

          console.log(`deg 결과 : ${degResult}`);

          // this.result = deg[this.randomNum()];

          // 룰렛 matchItems로 결과 값 얻으면 각도 초기화하는 함수 구현
        }
      }, 50);

      const timer = setTimeout(() => {
        this.matchItems(degResult);

        btn.disabled = false;
        btn.style.pointerEvents = "auto";
        // 버튼 누를 수 있게 복구
      }, 5500);

      console.log(timer);
    },

    // 시작 이벤트
  },
  computed: {
    computedStyledObject() {
      return {
        width: this.classObject.width,
      };
    },
    computedStyledObject2() {
      return {
        width: this.classObject.imgWidth,
      };
    },
  },
  created() {
    console.log(`-----크리에이티드-----`);

    this.widthRatio = document.documentElement.clientWidth / 320;
    this.initWidth = document.documentElement.clientWidth;

    console.log(`당신의 뷰포트 사이즈 ${document.documentElement.clientWidth}`);
    console.log(`아이폰4 뷰포트 기준 비율 계산 ${this.widthRatio}`);
    console.log(`initWidth 값 ${this.initWidth}`);

    // data에 마운트 전에 (dom 생성 이전에) 사용자의 Width 넓이 할당
  },
  beforeMount() {
    console.log(`------비포 마운트-------`);
    this.update();
    this.imgWidthUpdate();
  },
};
</script>

<style lang="scss">
.template {
  width: 100%;
  height: 100vw;
}

// 이벤트 헤더

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
.event-main {
  width: 100%;
  height: 100vh;
  background-color: $background;
}

.event-header {
  margin-bottom: 30px;
  h3 {
    font-size: 13px;
  }
}

// 이벤트 문구 3개
.event-slogan {
  text-align: center;

  .slogan-top {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 11px;

    span:first-child {
      font-size: 14px;
      background-color: $button-color1;
      color: white;
      border-radius: 15px;
      padding: 4px 6px;
      margin-right: 7px;
    }
    span:last-child {
      font-size: 17px;
      font-weight: 800;
    }
  }
}
.slogan-day {
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
}
.slogan-token {
  font-size: 15px;
  margin-bottom: 7px;
}

/* 토큰 UI CSS */

.token-box {
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-30px);
}

.bonus-token,
.left-token {
  width: 100px;
  border: 1px solid hsl(0, 0%, 85%);
  border-radius: 21px;
  background-color: white;
  padding: 5px 10px;

  span:first-child {
    font-size: 35px;
    font-weight: 800;
    color: $button-color1;
    margin-right: 13px;
  }
  span:last-child {
    font-size: 13px;
    font-weight: 400;
  }
}
.bonus-token {
  width: 130px;
  margin-right: 5px;
}

.left-token {
  width: 130px;

  border: 1px solid hsl(0deg, 0%, 85%);
  border-radius: 21px;
  background-color: white;

  span:first-child {
    font-size: 13px;
    font-weight: 400;
    margin-right: 10px;
  }

  span:last-child {
    font-size: 35px;
    font-weight: 800;
    color: $button-color2;
  }
}

/* 메인 룰렛 CSS */

.event-main {
  height: 100vh;
  flex-basis: auto;
}

.slogan-col {
  display: flex;
  flex-direction: column;
  align-items: center;
}

// 슬로건 Col

.roulette-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

// 룰렛 박스 : 룰렛 이미지 하위 요소들의 부모
// 이 부분을 바꿔주어야 함

.bottom {
  z-index: 1;
}

.items {
  z-index: 10;
  width: 100%;
  position: absolute;
  top: 0;
  transform-origin: 50% 51%;
  /* transform: rotate(-23deg); */
  transition-timing-function: cubic-bezier(0.8, 0.09, 0.42, 0.76);
  transition: 3s;
}

.pin {
  z-index: 12;
  position: absolute;
  top: 6%;
  width: 20px;
  transform-origin: 50% 50%;
  transition-timing-function: cubic-bezier(0.8, 0.09, 0.42, 0.76);
  transition: 0.2s;
}

.start-button {
  width: 66px;
  position: absolute;
  top: 35.7%;
  z-index: 2000;
}

#btn1 {
  width: 79px;
}

// 클릭시 start-button css
.onClicked {
  transform: translateY(-30px);
  background-color: red;
  padding: 300px;
}

/* 핀 애니메이션 */

.shake {
  animation-name: ani3;
  animation-duration: 0.1s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
}
@keyframes ani3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(10deg);
  }
}

/* showCard */

// degResult

.bottom,
.items {
  width: 30px;
}
</style>
