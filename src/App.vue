<template>
  <div id="root" :style="{ 'min-height': rootHeight + 'px' }">
    <header :style="{ 'max-height': headerHeight + 'px' }">
      <div id="logo">
        <img alt="Yamusic logo" src="assets/logo.png" />
      </div>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </nav>
      <div id="profile"></div>
    </header>
    <main>
      <div class="centerblock-wrapper">
        <router-view />
      </div>
      <div class="sidebar" :style="{ height: sidebarHeight + 'px' }"></div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rootHeight: 966,
      headerHeight: 70,
      sidebarHeight: 831
    };
  },
  methods: {
    updateRootHeight() {
      this.rootHeight = window.innerHeight;
      //this.headerHeight = this.rootHeight * 0.072463768115942;
      this.sidebarHeight = this.rootHeight - 113;
    }
  },
  created() {
    window.addEventListener("resize", this.updateRootHeight);
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
  max-width: 76%;
  margin: 0 auto;
  background-color: white;
}

#root {
  min-width: 840px;
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  flex-direction: row;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
#logo,
nav {
  max-height: inherit;
  flex-grow: 2;
  flex-basis: 40%;
}
img {
  max-height: inherit;
}
#profile {
  max-height: inherit;
  flex-grow: 1;
  flex-basis: 20%;
}
main {
  display: flex;
  flex-direction: row;
}
.centerblock-wrapper {
  background-color: #42b983;
  display: flex;
  flex-direction: column;
  width: 66%;
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
}
* {
  margin: 0;
  padding: 0;
}
</style>
