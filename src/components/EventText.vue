<template class="EventText">
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
</template>

<script>
export default {
  name: "EventText",

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
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
</style>
