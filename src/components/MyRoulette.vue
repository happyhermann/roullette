/* eslint-disable */ 

<template>
  <v-container class="event-container">
    <header class="event-header">
      <div class="arrow-box">
        <i class="mdi mdi-chevron-left"></i>
      </div>

      <div>
        <h3 class="event-title">이벤트</h3>
      </div>
      <div></div>
    </header>
    <!-- 룰렛 이미지 영역 -->
    <div class="event-slogan">
      <div class="slogan-top">
        <span>12/1 ~ 12/31</span>
        <span>수거하는 날?</span>
      </div>
      <p class="slogan-day">룰렛 돌리는 날!</p>
      <p class="slogan-token">수거 완료하고 받은 토큰으로 경품 받자~</p>
    </div>
    <main class="roulette-box">
      <v-img class="bottom " src="@/assets/1.png">
        <!-- 룰렛 bg -->
      <!-- <div class="items "></div> -->

        <!-- 룰렛 돌림판 이미지 -->
        <v-img class="items " src="@/assets/3.png"/>

       
      </v-img>

         <v-img class="pin " src="@/assets/6.png" />

         <!-- 룰렛 핀 -->
      <v-img
          class="start-button"
          src="@/assets/4.png"
          @click="onStart"
        />
  

      <!-- 룰렛 이미지 영역 -->
    </main>
    <!-- 토큰 UI -->

    <div class="token-box">
      <div class="bonus-token">
        <span>2</span>
        <span>보너스 토큰</span>
      </div>
      <div class="left-token">
        <span>잔여 토큰</span>
        <span>13</span>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "MyRoulette",

  data: () => ({
    random: 0,
        // initial random value = 0

    overallRol : 8,
    // 아이탬 개수
 
    result : 0,
    // 걸린 각도
  }),
  methods: {
    randomNum: function () {
      let min = Math.ceil(0);
      let max = Math.floor(this.overallRol - 1);
       return Math.floor(Math.random() * (max - min) + min);
    },

 
    onStart: function () {
      alert("룰렛 시작?")
      this.onRotate();

    

    },
    matchItems: function (result) {
 
      switch (result) {
        case 45 : alert("10만원 당첨되셨습니다!");
        break;
        case 90 : alert("꽝입니다! 축하드립니다 ㅋㅋ");
        break;
        case 135 : alert("박카스 한 병 시원하게");
        break;
        case 180 : alert("5천원 당첨!");
        break;
        case 225 : alert("5만원 당첨!");
        break;
        case 270 : alert("꽝입니다! ㅊㅋ");
        break;
        case 315 : alert("3만원 당첨!");
        break;
        case 360 : alert("1만원 당첨!");

        // switch도 재활용 가능하게 리팩토링 하기


      }

    },
    onRotate: function () {
      const btn = document.querySelector('.start-button') // eslint-disable-line no-unused-vars
      const pin = document.querySelector('.pin')  // eslint-disable-line no-unused-vars
 
      const items = document.querySelector('.items') // eslint-disable-line no-unused-vars

      let deg = [];
      for(let i = 1, len = this.overallRol; i <= len; i++ ) {
         deg.push((360/len) * i)
      }
      // 재사용 가능하게 len으로 전체 상품 개수가 들어오면 
      // 자동으로 배열에 최소값부터 최대값까지 넣어줌

      let num = 0;
      // 회전 회수 초기 state

      const anim = setInterval (() => {
      console.log("셋 인터벌 작동")
      num++;

      items.style.transform = "rotate("+ 360 * num +"deg)";
      // for 대신 setInterval로 unmounted될 때까지 깔끔하게 
      pin.classList.add("shake")
      // 핀 애니메이션 
      btn.disabled = true;

   
 
      // pin.classList.add('shake')

  
      if (num == 40) {
        console.log("40회 끝")
        clearInterval(anim);
        pin.classList.remove("shake")
        // 핀 애니메이션 remove

        items.style.transform = "rotate(" + deg[this.randomNum()  ] + "deg)";

        this.result =  deg[this.randomNum()];
        // 룰렛 결과 data state 변경
        // 리액트랑 다르게 setState로 변경할 필요 없이 바로 할당하면 값 변경

        console.log(`걸린 것 ${this.result}`)

        this.matchItems(this.result);


        // const setTimeout () => { 

        // // 룰렛 멈추고 함수 실행하게 하기
        // // 룰렛 멈추는 시간 setTimeOut으로 맞춰놓기 


        // } 


        
        
  
      }

      }, 50); 

    }
  
    // 시작 이벤트

   },
};



</script>

<!-- 설계 시작전 세팅 
  

-->

<style lang="scss">
.event-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  i {
    width: 30px;
  }

  h3 {
    font-size: 13px;
    font-weight: 700;
  }
}
.event-container {
  height: 100vw;
  background-color: $background;
}

.event-header {
  margin-bottom: 30px;
  h3 {
    font-size: 13px;
  }
}

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
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 4px;
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

/* 룰렛 CSS */

.roulette-box {
  widows: 100%;
  height: 70vw;
  position: relative;
}
.bottom {
  position: relative;
}

.items {
  z-index: -55;
  width: 100%;
  height: 100%;
  /* background: transparent
    url("@/assets/3.png")
    no-repeat; */
  background-size: 100%;
  transform-origin: 50% 51%;
  transform: rotate(-23deg);
  transition-timing-function: cubic-bezier(.8,.09,.42,.76);
  transition: 2s;
  z-index: 9999;
  
  }

.pin {
  width: 20px;
  position: fixed;
  top: 18%;
  left: 48%;
   transform-origin: 50% 50%;
  transition-timing-function: cubic-bezier(.8,.09,.42,.76);
  transition: 0.2s;
  z-index: 9999;
}

.button {
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
 
}

.start-button {
    width: 61px;
     position: absolute;
    left: 50%;
    top: 37.5%;
    transform: translate(-50%, -50%);

}


/* rotating anim */

 
 
 

  .shake {
    animation-name: ani3;
    animation-duration: 0.1s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;  
    animation-iteration-count: infinite;

  }
  @keyframes ani3{
      0%{

           transform: rotate(0deg);
         }
        100%{
          transform: rotate(-8deg);
        }
    }

</style>
