<template>
  <div class="media-card">
    <div :style="changeBackground" class="media-image">
      <button class="bookmark" @click="bookmarkToggle(mediaCard)">
        <img
          v-if="mediaCard.isBookmarked"
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
    </div>
    <MediaInfo :infoMedia="mediaCard" :trending="false" />
  </div>
</template>

<script>
import MediaInfo from "./MediaInfo.vue";
import { computed, ref } from "vue";
import { useMediasStore } from "../store/medias";
import { useScreenStore } from "../store/screen";
export default {
  name: "MediaCard",
  props: {
    mediaCard: Object,
  },
  components: {
    MediaInfo,
  },
  setup(props) {
    // function that change the image according to the screen size
    const changeBackground = computed(() => {
      if (screenWidth.value < 500) {
        return {
          backgroundImage: `url('${props.mediaCard.imgSmall.replace(
            "./",
            ""
          )}')`,
        };
      } else if (screenWidth.value < 950) {
        return {
          backgroundImage: `url('${props.mediaCard.imgMedium.replace(
            "./",
            ""
          )}')`,
        };
      } else {
        return {
          backgroundImage: `url('${props.mediaCard.imgLarge.replace(
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
.media-card {
  display: flex;
  flex-direction: column;

  .media-image {
    width: 250px;
    height: 150px;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
    position: relative;
    margin-bottom: 8px;
    cursor: pointer;

    &:hover .overlay {
      opacity: 1;
    }

    .bookmark {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      position: absolute;
      z-index: 4;
      top: 10px;
      right: 10px;
      border: none;
      cursor: pointer;
      background: #10141e;
      mix-blend-mode: normal;
      opacity: 0.9;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        opacity: 0.5;
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
    .overlay {
      position: absolute;
      width: 90px;
      height: 45px;
      color: white;
      font-size: 18px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 20px;
      background-color: rgb(160, 160, 160, 0.5);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 5px 8px;
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
  .media-info h2 {
    font-size: 18px;
  }
}

@media (max-width: 950px) {
  .media-card {
    .media-image {
      width: 220px;
      height: 140px;
    }
  }
}

@media (max-width: 500px) {
  .media-card {
    .media-image {
      width: 160px;
      height: 110px;
      .overlay {
        width: 70px;
        height: 35px;
        font-size: 14px;
        padding: 3px 4px;

        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }
}

@media (max-width: 345px) {
  .media-card {
    .media-image {
      width: 145px;
      height: 105px;
    }
  }
}
</style>
