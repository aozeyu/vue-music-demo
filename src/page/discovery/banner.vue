<template>
  <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="banner in banners" :key="banner.scm">
      <img :src="banner.imageUrl" class="banner-img" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getBanner } from "@/api/discovery";
export default {
  name:'banner',
  async create() {
    const {banners} = await getBanner()
    this.banners = banners
  },
  data() {
    return {
      banners:[]
    }
  },
};
</script>

<style lang="scss" scoped>
.banner-img {
  width: 100%;
  height: 100%;
}
</style>
