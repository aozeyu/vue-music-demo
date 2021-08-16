<template>
  <i class="iconfont" :class="`icon-${type}`" :style="{fontSize: `${size}px`}" />
</template>

<script>
export default {
  props:['type','size']
}
</script>

<style lang="scss" scoped>
.iconfont {
  color: #fff;
}
</style>