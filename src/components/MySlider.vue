<template>
  <div class="sliderWrapper">
    <!--<h1>{{ msg }}</h1>-->
    <div class="slider"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    sliderContent: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.sliderWrapper > * {
  display: block;
}
/*ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}*/
</style>
