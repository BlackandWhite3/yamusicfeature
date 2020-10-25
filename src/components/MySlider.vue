<template>
  <div class="sliderWrapper">
    <!--<h1>{{ msg }}</h1>-->
    <h2>Умные плейлисты для вас</h2>
    <div class="slider">
      <div class="contentWrapper" v-for="id in contentId" :key="id">
        <h3>Заголовок</h3>
        <img alt="Some cover" src="assets/images/cover.png" />
        <a>Описание</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    sliderContent: Object
  },
  data() {
    return {
      contentId: [12, 13, 17, 255321523151235]
    };
  }
};
</script>

<style scoped lang="scss">
.sliderWrapper > * {
  display: block;
  text-align: left;
}
.slider {
  display: flex;
  justify-content: space-between;
  div {
    margin: 15px 30px 15px 0;
  }
}
.contentWrapper {
  display: flex;
  flex-direction: column;
  img {
    max-width: 100%;
  }
}
</style>
