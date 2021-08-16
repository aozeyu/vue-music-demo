<template>
  <div class="new-songs">
    <Title>最新音乐</Title>
    <div class="list-wrap">
      <div
        class="list"
        v-for="(list, listIndex) in thunkedList"
        :key="listIndex"
      >
        <StripedList v-if="list.length" :source="list">
          <NewSongCard
            v-for="(item, index) in list"
            :order="getSongOrder(lastIndex, index)"
            :key="item.id"
            v-bind="nomalizeSong(item)"
            :name="item.name"
            :artists="item.song.artists"
            @click.native="onClickSong(item)"
          />
        </StripedList>
      </div>
    </div>
  </div>
</template>

<script>
import Title from "@/base/title";
import NewSongCard from "@/components/new-song-card";
import { createSong } from "@/utils/song";
import { mapActions } from "vuex";
const songsLimit = 10;
export default {
  async create() {
    const { result } = await this.$requset(`/personalized/newsong`);
    this.list = result;
  },
  data() {
    return {
      chunkLimit: Math.ceil(songsLimit / 2),
      list: [],
    };
  },
  methods: {
    getSongOrder(listIndex, index) {
      return listIndex * this.chunkLimit + index + 1;
    },
    nomalizeSong(song) {
      const {
        id,
        name,
        song: {
          artists,
          album: { blurPicUrl },
          duration,
        },
      } = song;
      return createSong({
        id,
        name,
        img: blurPicUrl,
        artists,
        duration,
      });
    },
    onClickSong(song) {
      const nomalizedSong = this.nomalizeSong(song);
      this.getCurrentSong(nomalizedSong);
    },
    ...mapActions(["getCurrentSong"]), // 帮您commit mutation函数
  },
  computed: {
    thunkedList() {
      return [
        this.list.slice(0, this.chunkLimit),
        this.list.slice(this.chunkLimit, this.list.length),
      ];
    },
  },
  components: {
    Title,
    NewSongCard,
  },
};
</script>

<style lang="scss" scoped>
.list-wrap {
  display: flex;
  .list {
    flex: 1;
  }
  .song-card {
    cursor: pointer;
    &:hover {
      background: $light-bgcolor;
    }
  }
}
