<template>
  <div class="discovery">
    <div class="discovery-content">
      <Banner />
      <Recommend />
      <NewSongs />
    </div>
  </div>
</template>

<script>
import Banner from './banner.vue'
import Recommend from "./recommend";
import NewSongs from "./new-songs";
export default {
  data() {
    return {};
  },
  components: {
    Recommend,
    NewSongs,
    Banner
  },
};
</script>

<style scoped lang="scss">
.discovery {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 36px;
  .discovery-content {
    max-width: 1000px;
  }
}
</style>