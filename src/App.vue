<template>
  <div :style="{ 'min-height': currentMinHeight + 'px' }">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMinHeight: 966
    };
  },
  methods: {
    updateMinHeight() {
      this.currentMinHeight = window.innerHeight;
    }
  },
  created() {
    window.addEventListener("resize", this.updateMinHeight);
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  //min-height: 966px;
  min-width: 840px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
html {
  background-color: #f6f5f3;
}
</style>
