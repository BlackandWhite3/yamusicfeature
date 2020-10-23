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

#home-nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
  a {
    text-transform: uppercase;
    margin: 0 6% 0 0;
  }
}
</style>
