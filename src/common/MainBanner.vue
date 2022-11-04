<template>
  <div class="container">
    <a @click="openModal()" class="btn js-click-modal">Open Modal</a>
    <div class="modal">
      <div class="header">This is a full-width modal with a title</div>
      <div class="body">
        <p>And here is all its contents.</p>
        <a @click="closeModal()" class="btn js-close-modal">Close</a>
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
  },
};
</script>

<style lang="scss">
.container {
  color: #333;
  font-family: Lato;
  font-weight: 300;
  text-align: center;
  background: #333;
}
.container > btn {
  margin: 60px;
  padding: 20px 40px;
  font-size: 30px;
  border-radius: 40px;
}
.modal {
  background-color: #fff;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
  top: 100%;
  position: fixed;
  left: 0;
  text-align: left;
  .header {
    padding: 20px;
    border-bottom: 1px solid #ddd;
    font: 300 24px Lato;
    position: relative;
  }
  .body {
    padding: 20px;
    font: 300 16px Lato;
  }
}

.btn {
  background: linear-gradient(to right, rgb(220, 227, 91), rgb(69, 182, 73));
  padding: 10px 25px;
  display: inline-block;
  border-radius: 25px;
  margin: 20px 0;
  color: #fff;
  position: relative;
  transition: all 0.4s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.2);
  }
}

.container.modal-open .modal {
  top: 0;
}
</style>
