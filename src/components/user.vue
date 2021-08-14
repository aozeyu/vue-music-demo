<template>
  <div class="user">
    <i class="user-icon iconfont icon-yonghu"></i>
    <p class="user-name">未登陆</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  components:{

  }
}
</script>

<style lang="scss" scoped>
.user{
  display: flex;
  align-items: center;
  padding: 16px;
  padding-bottom: 0;
  margin-bottom: 12px;
  .user-icon{
    font-size: 24px;
  }
  .user-name{
    margin-left: 8px;
    font-size: $font-size-lg;
  }
}
</style>