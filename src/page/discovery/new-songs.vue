<template>
  <div class="new-songs" v-if="list.lenth">
    <Title>最新音乐</Title>
    <div class="list-wrap">
      <div
        class="list"
        v-for="(list, listIndex) in thunkedList"
        :key="listIndex"
      >
        <StripedList v-if="list.length" :source="list">
          <NewSongCard
            class="song-card"
            v-for="(item, index) in list"
            :order="getSongOrder(listIndex, index)"
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
import { mapActions, mapMutations } from "vuex";
import { getNewSongs } from "@/api/discovery";
const songsLimit = 10;
export default {
  async create() {
    const { result } = await getNewSongs();
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
      this.startSong(nomalizedSong); // 相当于this.$store.dispatch('startSong',nomalizedSong)
      this.setPlaylist(this.nomalizedSongs);
    },
    ...mapMutations(["setPlaylist"]),
    ...mapActions(["startSong"]), // 帮您commit mutation函数
  },
  computed: {
    thunkedList() {
      return [
        this.list.slice(0, this.chunkLimit),
        this.list.slice(this.chunkLimit, this.list.length),
      ];
    },
    nomalizedSongs() {
      return this.list.map((song) => this.nomalizeSong(song));
    },//返回一个数组
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
