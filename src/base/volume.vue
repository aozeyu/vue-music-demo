<template>
  <div class="volume">
    <Icon
      :size="20"
      class="icon"
      :type="getIconType()"
      @click.native="toggleSilence"
    />
    <div class="progress-wrap">
      <ProgressBar
        alwaysShowBtn
        :precent="volumePercent"
        @percentChange="onProgressChange"
      />
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/base/progress-bar";
export default {
  data() {
    return {
      volumePercent: 1,
    };
  },
  methods: {
    onProgressChange(precent) {
      if (precent < 0.05) {
        precent = 0;
      }
      this.volumePercent = precent;
      //触发父组件的自定义事件
      this.$emit("volumePercent", precent);
    },
    getIconType(){
      return this.isSilence ? 'silence' : 'horn'
    },
    toggleSilence() {
      this.isSilence = !this.isSilence
    }
  },
  computed:{
    isSilence:{
      get(){
        return this.volumePercent === 0 // 默认值是false
      },
      // 当isSilence重新赋值时set被调用
      set(newSilence){
        const target = newSilence ? 0 : this.lastVolume
        if (newSilence) {
          this.lastVolume = this.volumePercent
        }
        this.volumePercent = target
        this.onProgressChange(target)
      }
    }
  },
  components:{
    ProgressBar
  }
};
</script>

<style lang="scss" scoped>
.volume {
  display: flex;
  align-items: center;
  width: 150px;
  padding: 0 16px;
  .icon {
    color: $font-color;
    cursor: pointer;
    margin-right: 8px;
  }
  .progress-wrap{
    flex: 1;
  }
}
</style>