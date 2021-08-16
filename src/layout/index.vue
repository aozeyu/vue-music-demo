<template>
  <div class="layout">
    <layout-header />
    <div class="layout-body">
      <!-- 公共 -->
      <layout-menu />
      <div id="page-content" class="content">
        <!-- 嵌套路由展示的地方 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import LayoutHeader from "./header.vue";
import LayoutMenu from "./menu.vue";
export default {
  data() {
    return {};
  },
  components: {
    LayoutHeader,
    LayoutMenu,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  .layout-body {
    display: flex;
    height: calc(100% - #{$header-height});
    .content {
      flex: 1;
      overflow-y: auto;
      padding-bottom: 32px + $mini-player-height;
    }
  }
}
</style>