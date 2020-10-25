<template>
  <div id="root" :style="{ 'min-height': rootHeight + 'px' }">
    <header>
      <!--:style="{ 'max-height': headerHeight + 'px' }"-->
      <div id="logo">
        <img alt="Yamusic logo" src="assets/images/logo.png" />
      </div>
      <nav>
        <router-link to="/">Главное</router-link>
        <a href="#">Подкасты</a>
        <a href="#">Жанры</a>
        <a>Радио</a>
        <router-link to="/about">Жми сюда</router-link>
      </nav>
      <div id="profile">
        <a>Моя коллекция</a>
        <img alt="Profile logo" src="assets/profile.png" />
      </div>
    </header>
    <main>
      <div class="centerblock-wrapper">
        <router-view />
      </div>
      <div class="sidebar" :style="{ height: rootHeight - 135 + 'px' }"></div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rootHeight: 966,
      headerHeight: 70
    };
  },
  methods: {
    updateRootHeight() {
      this.rootHeight = window.innerHeight;
      //this.headerHeight = this.rootHeight * 0.072463768115942;
    }
  },
  created() {
    window.addEventListener("resize", this.updateRootHeight);
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1440px;
  margin: 0 auto;
  background-color: white;
  z-index: 0;
}

#root {
  min-width: 840px;
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  flex-direction: row;
  max-height: 70px;
  flex-wrap: nowrap;
  padding: 0 30px;
  line-height: 70px;
  border-bottom: 1px solid #e5e5e5;
  font-weight: normal;

  a {
    //font-weight: bold;
    display: inline-block;
    color: #222;
    margin: 0 2%;
    font-size: 15px;
    &.router-link-exact-active {
      color: #42b983;
      border-bottom: 3px solid #f33;
      max-height: 96%;
    }
  }
}
#logo {
  max-height: inherit;
  flex-grow: 2;
  flex-basis: 40%;
  text-align: left;
}
nav {
  //display: flex;
  //flex-direction: row;
  max-height: inherit;
  flex-grow: 2;
  flex-basis: 40%;
  //align-items: center;
  text-align: center;
}
img {
  max-height: inherit;
}
#profile {
  max-height: inherit;
  flex-grow: 1;
  flex-basis: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
main {
  display: flex;
  flex-direction: row;
  z-index: 1;
}
.centerblock-wrapper {
  width: 66%;
  padding: 30px 30px 60px 30px;
  border-right: 1px solid #e5e5e5;
}
.sidebar {
  width: 33%;
}
html {
  background-color: #f6f5f3;
  overflow-x: hidden;
}
body {
  height: 100%;
  overflow: visible !important;
  font-family: Yandex Sans, Arial, Helvetica, sans-serif;
  font-size: 13px;
  letter-spacing: normal;
  font-style: normal;
  font-stretch: normal;
  text-transform: none;
}
* {
  margin: 0;
  padding: 0;
}
</style>
