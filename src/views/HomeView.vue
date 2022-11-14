<template>
  <div class="home">
    <Search @response="(search) => searchQuery = search" :placeholder="placeholder" :searchType="searchType" :bookmark="bookmark"/>
    <div v-if="!searchQuery.length" class="home-container">
      <TrendingRow :trendingMedias="mediasStore.getTrendingMedias" />
      <GridMedia :medias="mediasStore.getMedias" :titleSection="titleSection" />
    </div>
  </div>
</template>

<script setup>
import Search from "../components/Search.vue";
import TrendingRow from "../components/TrendingRow.vue";
import GridMedia from "../components/GridMedia.vue";
import { useMediasStore } from "../store/medias";
import { ref, onMounted } from "vue";

const searchQuery = ref("");
const placeholder = ref("Search for movies or TV series");
const searchType = ref(["Movie", "TV Series"]);
const bookmark = ref(false);

const mediasStore = useMediasStore();
const titleSection = ref("Recommended for you");

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
