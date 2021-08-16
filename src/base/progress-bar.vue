<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div
        class="progress-btn-wrapper"
        ref="progressBtn"
        @touchstart.prevent="progressTouchStart"
        @touchmove.prevent="progressTouchMove"
        @touchend="progressTouchEnd"
      >
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { prefixStyle } from "@/utils/dom";
const progressBtnWidth = 16;
const transform = prefixStyle("transform");
export default {
  props: {
    precent: {
      type: Number,
      default: 0,
    },
  },
  created() {
    this.touch = {};
  },
  methods: {
    progressTouchStart(e) {
      this.touch.initiated = true;
      this.touch.startX = e.touches[0].pageX;
      this.touch.left = this.$refs.progress.clientWidth;
    },
    progressTouchMove(e) {
      if (!this.touch.initiated) {
        return;
      }
      //误差
      const deltaX = e.touches[0].pageX - this.touch.startX;
      const offsetWidth = Math.min(
        this.$refs.progressBar.clientWidth - progressBtnWidth,
        Math.max(0, this.touch.left + deltaX)
      );
      this._offset(offsetWidth);
      this.$emit("percentChanging", this._getPercent());
    },
    progressTouchEnd() {
      this.touch.initiated = true;
      this._triggerPercent();
    },
    progressClick(e) {
      const rect = this.$refs.progressBar.getBoundingClientRect();
      const offsetWidth = e.pageX - rect.left;
      this._offset(offsetWidth);
      this._triggerPercent();
    },
    setProgressOffest(precent) {
      if (precent >= 0 && !this.touch.initiated) {
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth;
        const offsetWidth = precent * barWidth;
        this._offset(offsetWidth);
      }
    },
    _triggerPercent() {
      this.$emit("precentChange", this._getPercent());
    },
    //设置宽度
    _offset(offsetWidth) {
      this.$refs.progress.style.width = `${offsetWidth}px`;
      this.$refs.progressBtn.style[
        transform
      ] = `translate3d(${offsetWidth}px,0,0)`;
    },
    _getPercent() {
      const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth;
      return this.$refs.progress.clientWidth / barWidth;
    },
  },
  watch: {
    precent(newPercent) {
      this.setProgressOffest(newPercent);
    },
  },
};
</script>

<style scoped lang="scss">
.progress-bar {
  height: 30px;
  cursor: pointer;
  .bar-inner {
    position: relative;
    top: 13px;
    height: 2px;
    background: rgba(0, 0, 0, 0.3);
    .progress {
      position: absolute;
      height: 100%;
      background: $theme-color;
    }
    .progress-btn-wrapper {
      position: absolute;
      left: -8px;
      top: -13px;
      width: 30px;
      height: 30px;
      .progress-btn {
        display: none;
        position: relative;
        top: 8px;
        left: 7px;
        box-sizing: border-box;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: $theme-color;
      }
    }
    &:hover {
      .progress-btn {
        display: block !important;
      }
    }
  }
}
</style>