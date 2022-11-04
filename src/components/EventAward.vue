<template class="template">
  <v-container justify-center fluid class="event-award">
    <div class="event-method box">
      <span class="texts-title texts">참여방법</span>
      <div>
        <p class="texts-title-p"><span>①</span> 수거 완료시 룰렛 토큰 증정!</p>
        <p class="texts-title-p"><span>②</span> 당첨여부 즉시 확인 가능</p>
        <p class="texts-title-p">
          <span>③</span> 당첨 후 차주 월요일 경품 발송
        </p>
      </div>
    </div>
    <div class="event-bonus box">
      <span class="texts-title texts">보너스</span>
      <div>
        <p>수거 완료 5건 당 토큰 1개 추가 증정</p>
      </div>
    </div>
    <div class="event-items box">
      <span class="texts-title texts">이벤트 경품</span>
      <div class="event-items-item">
        <div>
          <v-img
            min-width="30"
            max-width="60"
            width="60"
            max-height="auto"
            src="@/assets/000.jpg"
            alt="주유상품권 10만원"
          /><span>주유상품권 10만원 X 5명</span>
        </div>
        <div>
          <v-img
            min-width="30"
            max-width="60"
            width="60"
            max-height="auto"
            src="@/assets/001.jpg"
            alt="주유상품권 5만원"
          /><span>주유상품권 5만원 X 5명</span>
        </div>
        <div>
          <v-img
            min-width="30"
            max-width="60"
            width="60"
            max-height="auto"
            src="@/assets/002.jpg"
            alt="주유상품권 3만원"
          /><span>주유상품권 3만원 X 5명</span>
        </div>
        <div>
          <v-img
            min-width="30"
            max-width="60"
            width="60"
            max-height="auto"
            src="@/assets/003.jpg"
            alt="편의점상품권 1만원"
          /><span>편의점상품권 1만원 X 5명</span>
        </div>
        <div>
          <v-img
            min-width="30"
            max-width="60"
            width="60"
            max-height="auto"
            src="@/assets/004.jpg"
            alt="편의점상품권 5천원"
          /><span>편의점상품권 5천원 X 5명</span>
        </div>
        <div>
          <v-img
            min-width="30"
            max-width="60"
            width="60"
            max-height="auto"
            src="@/assets/005.jpg"
            alt="박카스 기프티콘"
          /><span>박카스 기프티콘 X 50명</span>
        </div>
      </div>
    </div>
    <aside class="event-winners">
      <span class="texts-title texts">당첨자명단</span>
      <div class="winner-list">
        <div class="winner-list-item">
          <span>12/1 ~ 12/9</span>
          <div class="comming-soon-text"><p>12월 10일 OPEN</p></div>
          <img alt="" />
        </div>
        <div class="winner-list-item">
          <span>12/10 ~ 12/16</span>
          <div class="comming-soon-text"><p>12월 17일 OPEN</p></div>
          <img alt="" />
        </div>
        <div class="winner-list-item">
          <span>12/17 ~ 12/23</span>
          <div class="comming-soon-text"><p>12월 24일 OPEN</p></div>
          <img alt="" />
        </div>
        <div class="winner-list-item">
          <span>12/14 ~ 12/31</span>
          <div class="comming-soon-text"><p>1월 2일 OPEN</p></div>
          <img alt="" />
        </div>
      </div>
    </aside>
    <footer class="event-desc">
      <ul>
        <li>
          <span
            >◌ 지급대상 및 조건은 올수 수거 파트너의 수거 완료한 건에 한함(단,
            행사 기간 이후 완료 건 미인정)</span
          >
        </li>
        <li>
          <span
            >◌ 정상적인 수거 사진 촬영 건에 한하여 1건 당 토큰 1개 지급</span
          >
        </li>
        <li>
          <span>◌ 토큰은 [보너스 토큰] - [일반 토큰] 순서로 소진됩니다.</span>
        </li>
        <li>
          <span
            >◌ 기프티콘 발송은 계정 ID(휴대폰 번호)로 당첨에 해당된 주 당첨자
            오픈일에 일괄 발송됩니다.</span
          >
        </li>
      </ul>
    </footer>
  </v-container>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
.event-award {
  padding: 25px 30px;
}

.box {
  border-bottom: 1px solid rgba(217, 217, 217, 1);
  padding: $mobile-padding-10;
  margin-bottom: 14px;
}

.texts {
  display: inline-block;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 15px;
}

.texts-title-p {
  margin-bottom: 18px;

  span {
    font-size: 14px;
    font-weight: 800;
    color: #ffb901;
    margin-right: 6px;
  }
}

.event-bonus p {
  font-weight: 300;
}
.event-items-item div {
  display: flex;
  align-items: center;

  span {
    margin-left: 15px;
    font-size: 15px;
    font-weight: 300;
  }
}

/* 이벤트 당첨자 이미지 섹션 */
.event-winners {
  padding: $mobile-padding-10;
  border-bottom: 1px solid rgba(217, 217, 217, 1);
}

.winner-list-item {
  span {
    display: inline-block;
    margin-bottom: 7px;
    font-size: 13px;
  }
}

.winner-list-item:last-child {
  margin-bottom: 35px;
}

.comming-soon-text {
  background-color: #fffbed;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 17px;
    font-weight: 800;
  }
}

/* 이벤트 (footer) 주의사항 / 설명 섹션 */

.event-desc {
  padding: $mobile-padding-10;

  span {
    color: rgba(122, 122, 122, 1);
    font-size: 10px;
    font-weight: 100;
    line-height: 16px;
  }
}
</style>
