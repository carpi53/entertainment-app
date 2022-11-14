<template>
  <div class="trending-media-card">
    <div :style="changeBackground" class="media-image">
      <button class="bookmark" @click="bookmarkToggle(infoMedia)">
        <img
          v-if="infoMedia.isBookmarked"
          src="/assets/icon-bookmark-full.svg"
          class="bookmarked"
          alt="icon bookmark"
        />
        <img
          v-else
          src="/assets/icon-bookmark-empty.svg"
          alt="icon bookmark"
        />
      </button>
      <div class="overlay">
        <img src="/assets/icon-play.svg" alt="icon play" /> Play
      </div>
      <MediaInfo :infoMedia="infoMedia" :trending="true" />
    </div>
  </div>
</template>

<script>
import MediaInfo from "./MediaInfo.vue";
import { computed, ref } from "vue";
import { useMediasStore } from "../store/medias";
import { useScreenStore } from "../store/screen";
export default {
  name: "TrendingMediaCard",
  props: {
    infoMedia: Object,
  },
  components: {
    MediaInfo,
  },
  setup(props) {
    const changeBackground = computed(() => {
      if (screenWidth.value < 500) {
        return {
          backgroundImage: `url('${props.infoMedia.imgTrendingSmall.replace(
            "./",
            ""
          )}')`,
        };
      } else {
        return {
          backgroundImage: `url('${props.infoMedia.imgTrendingLarge.replace(
            "./",
            ""
          )}')`,
        };
      }
    });
    // use of media pinia store, refer to store/media.js
    const mediasStore = useMediasStore();

    // function that toggle the boolean attribute isBookmarked of a media 
    function bookmarkToggle(media) {
      mediasStore.toggleBookmark(media.title);
    }

    // get the pinia store to set the screen size 
    const screenStore = useScreenStore();
    let screenWidth = ref(screenStore.getScreenWidth);

    // set the screen size by listening the resize of the page
    window.addEventListener("resize", handleScreenListener);

    function handleScreenListener() {
      screenStore.setWindowWidth();
      screenWidth.value = screenStore.getScreenWidth;
    }

    return {
      changeBackground,
      bookmarkToggle,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.trending-media-card {
  margin-right: 40px;

  .media-image {
    width: 470px;
    height: 230px;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    position: relative;
    margin-top: 25px;
    cursor: pointer;

    &:hover .overlay {
      opacity: 1;
    }

    .bookmark {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      position: absolute;
      z-index: 3;
      top: 20px;
      right: 20px;
      border: none;
      cursor: pointer;
      background: rgb(16, 20, 30);
      mix-blend-mode: normal;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        background: rgb(16, 20, 30, 0.8);
      }

      img {
        width: 12px;
        height: 14px;
        fill: none;
      }

      .bookmarked {
        filter: brightness(0) invert(1);
      }
    }

    .media-info {
      width: 100%;
      position: absolute;
      bottom: 0;
      padding: 20px;
    }

    .overlay {
      position: absolute;
      width: 117px;
      height: 48px;
      color: white;
      font-size: 20px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 25px;
      background-color: rgb(255, 255, 255, 0.3);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 20px 5px 10px;
      z-index: 3;
      opacity: 0;

      img {
        filter: brightness(0) invert(1);
      }
    }
  }
  .media-image::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
    border-radius: 10px;
    background: rgba(92, 92, 92, 0.4);
    opacity: 0;
  }
  .media-image:hover::after {
    opacity: 1;
  }
}

@media (max-width: 400px) {
  .trending-media-card {
    margin-right: 20px;

    .media-image {
      width: 240px;
      height: 140px;

      .bookmark {
        top: 10px;
        right: 10px;
      }
      .media-info {
        padding: 10px;
      }
      .overlay {
        width: 82px;
        font-size: 16px;
        padding: 3px 6px;
      }
    }
  }
}
</style>
