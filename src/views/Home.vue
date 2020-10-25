<template>
  <div class="home">
    <h1>Главное</h1>
    <div id="home-nav">
      <a>Всё</a>
      <a>Новые релизы</a>
      <a>Чарт</a>
      <a>Настроения и Жанры</a>
      <a>Для детей</a>
    </div>
    <MySlider />
    <!--<MySlider msg="Welcome to Your Vue.js App" />-->
  </div>
</template>

<script>
// @ is an alias to /src
import MySlider from "@/components/MySlider.vue";

export default {
  name: "Home",
  components: {
    MySlider
  }
};
</script>
<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  h1 {
    margin: 35px auto 25px 0;
  }
}
h1 {
  font-size: 45px;
  line-height: 45px;
  font-weight: bold;
}
#home-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 1px solid #e5e5e5;
  a {
    text-transform: uppercase;
    margin: 0 6% 0 0;
    color: #777;
    font-size: 13px;
    font-weight: bold;
    letter-spacing: 1px;
    line-height: 29px;
  }
}
</style>
