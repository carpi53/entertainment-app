<template>
  <div class="media-grid-container">
    <h1>{{ titleSection }}</h1>
    <div class="media-grid">
      <MediaCard v-for="media in medias" :mediaCard="media" :key="media" />
    </div>
  </div>
</template>

<script scoped setup>
import MediaCard from "./MediaCard.vue";

defineProps({
  medias: Array,
  titleSection: String,
});
</script>

<style scoped lang="scss">
.media-grid-container {
  width: 100%;
  margin: 30px 0;

  .media-grid {
    width: 100%;
    margin-top: 32px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 250px);
    grid-gap: 30px;
  }
}

@media (max-width: 950px) {
  .media-grid-container {
    margin-top: 20px;
    .media-grid {
      margin-top: 25px;
      grid-template-columns: repeat(auto-fill, 220px);
      grid-gap: 25px;
    }
  }
}

@media (max-width: 500px) {
  .media-grid-container {
    margin-top: 10px;
    .media-grid {
      margin-top: 25px;
      grid-template-columns: repeat(auto-fill, 160px);
      grid-gap: 8px;
    }
  }
}

@media (max-width: 345px) {
  .media-grid-container {
    .media-grid {
      grid-template-columns: repeat(auto-fill, 145px);
    }
  }
}
</style>
