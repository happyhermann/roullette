<template>
  <div class="container">
    <!-- <a @click="openModal()" class="btn js-click-modal">Open Modal</a> -->
    <div class="modal">
      <article class="ad-img-box">
        <img
          class="ad-img"
          src="https://storage.cobak.co/uploads/1635821281397702_2600bbdbd5.png"
          alt="배너 이미지"
        />
        <!-- 홍보할 컨텐츠 이미지 -->
      </article>
      <div class="footer">
        <span @click="todayClose()" class="btn js-temp-close-modal"
          >3일간 보지 않기</span
        >
        <!-- 다시보지 않기 버튼  -->

        <span @click="closeModal()" class="btn js-close-modal">닫기</span>
        <!-- 단순 닫기 버튼 -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",

  data: () => ({
    heightValue: "",

    isOpend: false,
    //
  }),
  methods: {
    // 설정 기간 동안 팝업 안보이기

    // setCookie로 쿠키이름, 유효시간을 쿠키에 저장
    // 해당 일자가 도달하면 쿠키를 자동으로 삭제
    setCookie: function (name, value, expiredays) {
      var today = new Date(); // date 객체 생성 후 변수에 저장
      console.log(today.getDate());
      today.setDate(today.getDate() + expiredays);
      // set time (현재시간 + 지정시간)

      document.cookie =
        name + "=" + escape(value) + "; expires=" + today.toGMTString();

      // 위 정보를 cookie에 burning
    },
    // 쿠키 가져오는 함수
    getCookie: function (name) {
      console.log(name);
      var cookie = document.cookie;
      if (document.cookie != "") {
        var cookie_array = cookie.split(";");
        console.log(cookie_array);
        for (var index in cookie_array) {
          var cookie_name = cookie_array[index].split("=");
          if (cookie_name[0] == "mycookie") {
            return cookie_name[1];
          }
        }
      }
      return;
    },

    // getCookie를 통해 저장된 쿠키 값을 가져옴

    openModal: function () {
      console.log(`오픈 모달`);
      const container = document.querySelector(".container");
      //   this.isOpend = true;
      setTimeout(() => {
        container.classList.add("modal-open");
      }, 1000);
    },
    closeModal: function () {
      const container = document.querySelector(".container");
      //   this.isOpend = !this.isOpend;
      container.classList.remove("modal-open");

      console.log(`모달 닫기 `);
    },
    todayClose: function () {
      this.closeModal();
      this.setCookie("mycookie", "popupEnd", 3);
      // 저장될 쿠키명, 쿠키 value값, 기간 (ex 1은 하루, 7은 일주일)
    },
    updateHeight() {
      console.log(`height값 조건으로 거르는 함수`);

      let Modal = document.querySelector(".modal");
      let ModalOpen = document.querySelector(".modal-open");

      if (this.heightValue === "small") {
        Modal.style.top = "30%";
        ModalOpen.style.top = "30%";
      }
      if (this.heightValue === "medium") {
        Modal.style.top = "30%";
        ModalOpen.style.top = "30%";
      }
      if (this.heightValue === "large") {
        Modal.style.top = "40%";
        ModalOpen.style.top = "40%";
      }
    },
  },

  created() {
    console.log(`====created====`);

    console.log(`클라이언트 height 값 ${this.heightValue}`);

    if (document.documentElement.clientHeight < 482) {
      console.log(`Height값 480미만 ex: iphone4 `);
      this.heightValue = "small";
    }
    if (490 < document.documentElement.clientHeight < 700) {
      console.log(`Height값 480이상 700미만 ex: iphone se`);
      this.heightValue = "medium";

      // Modal.style.top = "50%";
    }
    if (705 < document.documentElement.clientHeight < 1000) {
      console.log(`Height값 700이상 1000미만 Ex: 갤럭시 s8, 노트`);
      this.heightValue = "large";

      // Modal.style.top = "45%";
    }

    // this.setCookie("mycookie", "popupEnd", 1);
    // 쿠키 세팅 함수 호출
  },

  mounted() {
    console.log(`====beforeMount====`);

    var checkCookie = this.getCookie("mycookie");

    if (checkCookie == "popupEnd") {
      console.log(`쿠키 유효기간 O : 배너 안보임`);
      this.closeModal();
      // 쿠키가 있으면 숨김
    } else {
      console.log(`쿠키가 없음 : 배너 보임`);
      this.openModal();
      // 쿠키가 없으면 오픈
    }
    // 마운트 이전에 쿠키 값 있는지 확인
  },
  beforeUpdated() {
    this.updateHeight();
  },
};
</script>

<style lang="scss">
/* 최상위 부모 container 스타일 */
.container {
  width: 100%;
  color: #333;
  font-family: Lato;
  font-weight: 300;
  text-align: center;
  background: #333;
  z-index: 10999;
}
.container > btn {
  margin: 60px;
  padding: 20px 40px;
  font-size: 30px;
  border-radius: 40px;
}

/* 모달창 메인 (보이고 안보이게 하는 부분) */
.modal {
  background-color: #fff;
  border-radius: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  /* height: 100%; */
  margin: 0;
  padding: 0;
  transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
  top: 100%;
  position: fixed;
  left: 0;
  text-align: left;
  z-index: 100000;

  /* body / article 메인 컨텐츠 스타일  */
}

article {
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
}

// 이것도 반응형으로 줘야할 듯

.container.modal-open .modal {
  top: 55%;
}

// 닫기 버튼 CSS

.footer {
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding: 10px 10px 35px 10px;

  span {
    padding: 5px 25px;
  }
  span:first-child {
    font-weight: 400;
  }
}

.btn {
  font-size: 13px;
  font-weight: 700;
  display: inline-block;
  color: #000;
  &:hover {
    cursor: pointer;
  }
}

/* 미디어 쿼리  */

@media (min-height: 460px) and (max-height: 490px) {
  /* 아이폰4 사이즈 노란 배경 자연스레 */
  .container.modal-open .modal {
    top: 55%;
  }
}
@media (min-height: 500px) and (max-height: 700px) {
  /* 아이폰4 사이즈 노란 배경 자연스레 */
  .container.modal-open .modal {
    top: 63%;
  }
}
@media (min-height: 730px) and (max-height: 850px) {
  .container.modal-open .modal {
    top: 68%;
  }
}
@media (min-height: 850px) and (max-height: 900px) {
  .container.modal-open .modal {
    top: 70%;
  }
}
@media (min-height: 902px) and (max-height: 1000px) {
  .container.modal-open .modal {
    top: 71%;
  }
}
@media (min-height: 1050px) {
  .container.modal-open .modal {
    top: 58%;
  }
}
</style>
