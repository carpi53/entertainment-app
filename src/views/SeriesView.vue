<template>
  <section class="series">
    <Search @response="(search) => (searchQuery = search)" :placeholder="placeholder" :searchType="searchType" :bookmark="bookmark"/>
    <div v-if="!searchQuery.length" class="serie-container">
      <GridMedia :medias="mediasStore.getSeries" :titleSection="titleSection" />
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
const placeholder = ref("Search for tv series");
const searchType = ref(["TV Series"]);
const bookmark = ref(false);

const mediasStore = useMediasStore();
const titleSection = ref("TV Series");

// scroll to the start of the page when first loaded
onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
