<template>
  <div class="media-info">
    <ul>
      <li>{{ infoMedia.year }}</li>
      <li>
        <div class="category-media">
          <img
            src="/assets/icon-nav-movies.svg"
            alt="icon medias"
            v-if="infoMedia.category === 'Media'"
          />
          <img
            src="/assets/icon-nav-tv-series.svg"
            alt="icon tv series"
            v-else
          />
          <span>{{ infoMedia.category }}</span>
        </div>
      </li>
      <li>{{ infoMedia.rating }}</li>
    </ul>
    <h2 v-if="trending" class="title-trending">
      {{ infoMedia.title }}
    </h2>
    <h2 v-else class="title-media-card">
      {{ infoMedia.title }}
    </h2>
  </div>
</template>

<script setup>
defineProps({
  infoMedia: Object,
  trending: Boolean,
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  display: flex;

  li {
    font-weight: 300;
    font-size: clamp(8px, 1.5vw, 15px);
    line-height: 19px;
    mix-blend-mode: normal;
    opacity: 0.75;
    margin-right: 20px;
  }
  li:nth-child(1) {
    list-style-type: none;
  }
  li img {
    width: 12px;
    height: 12px;
    margin-right: 5px;
    filter: brightness(0) invert(1);
  }
  .category-media {
    display: flex;
    align-items: center;
  }
}
.title-trending {
  font-style: normal;
  font-weight: 500;
  font-size: clamp(16px, 3vw, 24px);
  line-height: 30px;
}
.title-media-card {
  font-style: normal;
  font-weight: 300;
  font-size: clamp(14px, 1.8vw, 18px);
  line-height: 30px;
}
</style>
