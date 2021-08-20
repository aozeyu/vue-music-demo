<template>
  <div id="app">
    <layout />
    <MiniPlayer />
    <Playlist />
  </div>
</template>

<script>
import Layout from "@/layout/index.vue";
import MiniPlayer from '@/components/mini-player'
import Playlist from '@/components/playlist'
export default {
  name: "App",
  components: {
    Layout,
    MiniPlayer,
    Playlist
  },
};
</script>

<style lang="scss">
#app {
  height: 100%;
  background-color: $body-bgcolor;
  color: $font-color;
  font-size: $font-size;
}
</style>
