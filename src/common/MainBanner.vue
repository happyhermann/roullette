<template>
  <div class="container">
    <a @click="openModal()" class="btn js-click-modal">Open Modal</a>
    <div class="modal">
      <div class="body">
        <article class="ad-img-box">
          <img
            class="ad-img"
            src="https://storage.cobak.co/uploads/1635821281397702_2600bbdbd5.png"
            alt="배너 이미지"
          />
          <!-- 홍보할 컨텐츠 이미지 -->
        </article>
      </div>
      <div class="footer">
        <span @click="todayClose()" class="btn js-temp-close-modal"
          >다시보지 않기</span
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
      container.classList.add("modal-open");
    },
    closeModal: function () {
      const container = document.querySelector(".container");
      //   this.isOpend = !this.isOpend;
      container.classList.remove("modal-open");

      console.log(`모달 닫기 `);
    },
    todayClose: function () {
      this.closeModal();
      this.setCookie("mycookie", "popupEnd", 1);
    },
  },

  created() {
    console.log(`====created====`);

    // this.setCookie("mycookie", "popupEnd", 1);
    // 쿠키 세팅 함수 호출
  },
  mounted() {
    console.log(`====beforeMount====`);
    var checkCookie = this.getCookie("mycookie");

    if (checkCookie == "popupEnd") {
      console.log(`쿠키가 있네`);
      this.closeModal();
      // 쿠키가 있으면 숨김
    } else {
      console.log(`쿠키가 없네`);
      this.openModal();
      // 쿠키가 없으면 오픈
    }
    // 마운트 이전에 쿠키 값 있는지 확인
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
  .body {
    width: 100%;
    font: 300 16px Lato;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
}

article {
  img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
  }
}

.container.modal-open .modal {
  top: 65%;
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
  font-size: 15px;
  font-weight: 700;
  display: inline-block;
  color: #000;
  &:hover {
    cursor: pointer;
  }
}
</style>
