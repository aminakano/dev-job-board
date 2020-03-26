<template>
  <header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="scss">
header {
	background: #f7f7f7;
  position: fixed;
  top: 0;
  width: 100%;
  height: 3rem;

  #nav {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      color: #2c3e50;
      text-decoration: none;
      margin: 0 2rem;

      &.router-link-exact-active {
        color: #6072e1;
        font-weight: bold;
      }
    }
  }
}
</style>