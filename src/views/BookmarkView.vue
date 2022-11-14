<template>
  <section class="bookmark">
    <Search @response="(search) => (searchQuery = search)" :placeholder="placeholder" :searchType="searchType" :bookmark="bookmark" />
    <div v-if="!searchQuery.length" class="bookmark-container">
      <GridMedia :medias="mediasStore.getMoviesBookmarked" :titleSection="titleSectionMovies" />
      <GridMedia :medias="mediasStore.getSeriesBookmarked" :titleSection="titleSectionSeries" />
    </div>
  </section>
</template>

<script setup>
import Search from "../components/Search.vue";
import GridMedia from "../components/GridMedia.vue";
import { useMediasStore } from "../store/medias";
import { ref, onMounted } from "vue";

// define the search parameters
const searchQuery = ref("");
const placeholder = ref("Search for bookmarked shows");
const searchType = ref(["Movie", "TV Series"]);
const bookmark = ref(true);

const mediasStore = useMediasStore();
// define the title of the different sections
const titleSectionMovies = ref("Bookmarked Movies");
const titleSectionSeries = ref("Bookmarked TV Series");

// scroll to the start of the page when first loaded
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
