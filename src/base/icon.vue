<template>
  <i
    class="iconfont icon-component"
    :class="getIconCls()"
    :style="{ fontSize: `${size}px` }"
  />
</template>

<script>
export default {
  props: ["type", "size","color"],
  methods:{
    getIconCls(){
      let cls = `icon-${this.type}`
      if (this.color) {
        cls += `icon-color-${this.color}`
      }
      return cls
    }
  }
};
</script>

<style lang="scss">
.icon-component {
  color: #fff;
}
.icon-color-theme{
  color: $theme-color;
}
</style>