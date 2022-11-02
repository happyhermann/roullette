/* eslint-disable */

<template class="template">
  <v-container justify-center fluid class="event-container">
    <!-- 헤더 -->
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

    <!-- 메인 -->

    <section class="text-section">
      <!-- 이벤트 문구 -->
      <div class="event-slogan">
        <div class="slogan-top">
          <span>12/1 ~ 12/31</span>
          <span>수거하는 날?</span>
        </div>
        <p class="slogan-day">룰렛 돌리는 날!</p>
        <p class="slogan-token">수거 완료하고 받은 토큰으로 경품 받자~</p>
        <!-- </div> -->
      </div>
    </section>
    <!-- 룰렛 -->
    <section class="roul-section">
      <div v-bind:style="computedStyledObject" class="roulette-box">
        <!-- computed로 만든 이 메서드는 재사용성이 좋음
        message가 변하지 않는 한 reversedMessage가 몇번이고 불려저도 함수는 다시 실행되는 것이 아닌 이전에 계산되어진 결과를 즉시 돌려준다
        리액트에서 useMemo와 같은 역할 
        methods가 렌더링을 할때마다 항상 함수를 실행한다면..
      -->
        <v-img
          min-width="480"
          max-width="550"
          width="520"
          max-height="auto"
          class="bottom"
          src="@/assets/1.png"
        />
        <!-- 룰렛 돌림판 이미지 -->
        <v-img
          min-width="480"
          max-width="550"
          width="520"
          max-height="auto"
          class="items"
          src="@/assets/3.png"
        />
        <v-img class="pin" src="@/assets/6.png" />
        <!-- 룰렛 핀 -->
        <v-img
          min-width="45"
          max-width="150"
          width="89"
          max-height="auto"
          class="start-button"
          src="@/assets/4.png"
          @click="onStart"
        />
      </div>
    </section>
  </v-container>
</template>

<script>
export default {
  name: "MyRoulette",

  data: () => ({
    random: 0,
    // global 랜덤 변수

    overallRol: 8,
    // 사은품 개수

    result: 0,
    // 멈춘 각도 결과

    widthRatio: 0,

    // object css 값
    classObject: {
      width: 0,
      padding: "30px",
    },
    // 사용자 모바일 뷰포트 값
  }),
  methods: {
    update: function () {
      this.classObject.width = `${300 * this.widthRatio}px`;
    },

    randomNum: function () {
      let min = Math.ceil(0);
      let max = Math.floor(this.overallRol - 1);
      return Math.floor(Math.random() * (max - min) + min);
    },
    //

    onStart: function () {
      alert("룰렛 시작?");
      this.onRotate();
    },
    matchItems: function (result) {
      // 추후 당첨 팝업 띄우기
      // 재활용 가능하게 고려해야함
      switch (result) {
        case 45:
          alert("10만원 당첨되셨습니다!");
          break;
        case 90:
          alert("꽝입니다! 축하드립니다 ㅋㅋ");
          break;
        case 135:
          alert("박카스 한 병 시원하게");
          break;
        case 180:
          alert("5천원 당첨!");
          break;
        case 225:
          alert("5만원 당첨!");
          break;
        case 270:
          alert("꽝입니다! ㅊㅋ");
          break;
        case 315:
          alert("3만원 당첨!");
          break;
        case 360:
          alert("1만원 당첨!");

        // switch도 재활용 가능하게 리팩토링 하기
      }
    },
    onRotate: function () {
      const btn = document.querySelector(".start-button"); // eslint-disable-line no-unused-vars
      const pin = document.querySelector(".pin"); // eslint-disable-line no-unused-vars

      const items = document.querySelector(".items"); // eslint-disable-line no-unused-vars

      let deg = [];
      for (let i = 1, len = this.overallRol; i <= len; i++) {
        deg.push((360 / len) * i);
      }
      // 재사용 가능하게 len으로 전체 상품 개수가 들어오면
      // 자동으로 배열에 최소값부터 최대값까지 넣어줌

      let num = 0;
      // 회전 회수 초기 state

      const anim = setInterval(() => {
        console.log("셋 인터벌 작동");
        num++;
        // 반복될 때 마다 회전 회수 더해줌

        items.style.transform = "rotate(" + 360 * num + "deg)";
        // anim대신 직접 rotate css로 작동
        pin.classList.add("shake");
        // 핀 흔들리는 애니메이션도 함께
        btn.disabled = true;
        // 판 돌아갈 동안 버튼 조작 불가능

        // pin.classList.add('shake')

        if (num == 40) {
          console.log("40회 끝");
          clearInterval(anim);
          pin.classList.remove("shake");
          // 핀 애니메이션 remove

          items.style.transform = "rotate(" + deg[this.randomNum()] + "deg)";

          this.result = deg[this.randomNum()];
          // 룰렛 결과 data state 변경
          // 리액트랑 다르게 setState로 변경할 필요 없이 바로 할당하면 값 변경

          console.log(`걸린 것 ${this.result}`);

          const timer = setTimeout(() => {
            this.matchItems(this.result);
          }, 3400);

          console.log(timer);

          // // 룰렛 멈추고 함수 실행하게 하기
          // // 룰렛 멈추는 시간 setTimeOut으로 맞춰놓기

          // }
        }
      }, 50);
    },

    // 시작 이벤트
  },
  computed: {
    computedStyledObject() {
      return {
        width: this.classObject.width,
      };
    },
  },
  created() {
    console.log(`-----크리에이티드-----`);

    this.widthRatio = document.documentElement.clientWidth / 320;

    console.log(`당신의 뷰포트 사이즈 ${document.documentElement.clientWidth}`);
    console.log(`아이폰4 뷰포트 기준 비율 계산 ${this.widthRatio}`);

    // data에 마운트 전에 (dom 생성 이전에) 사용자의 Width 넓이 할당
  },
  beforeMount() {
    console.log(`------비포 마운트-------`);
    this.update();
    console.log(`뷰포트 받아주는 update 메서드 작동`);
  },
};
</script>

<!-- 설계 시작전 세팅 
  

-->

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
.event-container {
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
}

.bonus-token,
.left-token {
  width: 150px;
  border: 1px solid hsl(0, 0%, 85%);
  border-radius: 21px;
  background-color: white;
  padding: 0 15px;
}

.bonus-token {
  margin-right: 5px;

  span:first-child {
    font-size: 45px;
    font-weight: 800;
    color: $button-color1;
    margin-right: 13px;
  }
  span:last-child {
    font-size: 13px;
    font-weight: 400;
  }
}
.left-token {
  width: 150px;
  span:first-child {
    font-size: 13px;
    font-weight: 400;
    margin-right: 10px;
  }

  span:last-child {
    font-size: 45px;
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
  z-index: 13;
  position: absolute;
  top: 6%;
  width: 20px;
  transform-origin: 50% 50%;
  transition-timing-function: cubic-bezier(0.8, 0.09, 0.42, 0.76);
  transition: 0.2s;
  z-index: 6000;
}

.start-button {
  width: 66px;
  position: absolute;
  top: 35.7%;
  z-index: 2000;
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
    transform: rotate(-8deg);
  }
}

// test
</style>
