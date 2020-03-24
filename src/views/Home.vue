<template>
  <div class="home">
    <!-- <HelloWorld msg="Let's find Developer jobs!" /> -->
    <Main />
    <Jobs />
  </div>
</template>

<script>
// import HelloWorld from "@/components/HelloWorld.vue";
import Main from "@/components/Main.vue";
import Jobs from "@/components/Jobs.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    Main,
    Jobs,
  },
};
</script>
<style lang="scss">
.home {
  margin-top: 5rem;
}
</style>