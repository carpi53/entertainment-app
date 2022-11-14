<template>
  <div class="trending-row">
    <h1>Trending</h1>
    <div class="trending-media-row">
      <TrendingMediaCard
        v-for="media in trendingMedias"
        :infoMedia="media"
        :key="media"
      />
    </div>
  </div>
</template>

<script setup>
import TrendingMediaCard from "../components/TrendingMediaCard.vue";

defineProps({
  trendingMedias: Array,
});
</script>

<style scoped lang="scss">
.trending-row {
  width: 100%;
  margin-top: 30px;
  height: 295px;

  .trending-media-row {
    width: 100%;
    display: flex;
    overflow-x: scroll;
  }
}

@media (max-width: 800px) {
  .trending-row {
    margin-top: 20px;
  }
}

@media (max-width: 400px) {
  .trending-row {
    height: 210px;
  }
}
</style>
