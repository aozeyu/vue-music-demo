<template>
  <div class="header">
    <div class="logo-wrap" @click="onClickLogo">
      <img :src="logo" alt="" class="logo" />
      <span>云音乐</span>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/logo.png";
export default {
  data() {
    return {};
  },
  created() {
    this.logo = logo;
  },
  components: {},
  methods: {
    onClickLogo() {
      this.$router.push("/discovery");
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  height: $header-height;
  background-color: $body-bgcolor;
  padding: 16px;
  .logo-wrap {
    display: flex;
    align-items: center;
    font-size: $font-size-title;
    color: $white;
    cursor: pointer;
    .logo {
      width: 30px;
      height: 30px;
      margin-right: 8px;
    }
  }
}
</style>