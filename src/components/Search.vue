<template>
  <div class="search-container">
    <div class="search">
      <label for="search">
        <img src="/assets/icon-search.svg" alt="search icon" />
      </label>
      <input
        type="text"
        :placeholder="placeholder"
        autocomplete="off"
        v-model="searchQuery"
        @input="handleSearch"
      />
      <div class="underline-search"></div>
    </div>
    <GridMedia
      v-if="searchQuery.length"
      :medias="searchMedias"
      :titleSection="titleSection"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useMediasStore } from "../store/medias";
import GridMedia from "./GridMedia.vue";
const props = defineProps({
  placeholder: String,
  searchType: Array,
  bookmark: Boolean,
});

const searchQuery = ref("");
let searchMedias = ref("");
const emit = defineEmits(["response"]);
const mediasStore = useMediasStore();
let titleSection = ref("");
let searchMediaTemp = [];

// we handle search every time the user type in the text input
function handleSearch() {
  // sending to the parent the value of the search
  emit("response", searchQuery.value);
  // formating the search query to remove capital letters
  const searchedString = searchQuery.value.toLowerCase();
  // search all medias corresponding to the search
  searchMediaTemp = mediasStore.getAllMedias.filter((media) =>
    searchForMedias(media)
  );

  function searchForMedias(media) {
    if (props.bookmark) {
      if (
        media.title.toLowerCase().includes(searchedString) &&
        props.searchType.includes(media.category) &&
        media.isBookmarked
      ) {
        return true;
      }
    } else {
      if (
        media.title.toLowerCase().includes(searchedString) &&
        props.searchType.includes(media.category)
      ) {
        return true;
      }
    }
  }
  // define the status of the search
  if (searchMediaTemp.length) {
    titleSection.value = `Found ${searchMediaTemp.length} results for '${searchQuery.value}'`;
  } else {
    titleSection.value = "";
  }
  searchMedias.value = searchMediaTemp;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.search-container {
  width: 100%;
  display: flex;
  flex-direction: column;

  .search {
    margin-top: 35px;
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    position: relative;

    input {
      width: 100%;
      font-weight: 200;
      font-size: clamp(16px, 2vw, 24px);
      line-height: 30px;
      color: #fff;
      background: transparent;
      border: none;
      margin-left: 24px;
      outline: none;
    }

    input:focus {
      caret-color: #fc4747;
    }

    input:focus + .underline-search{
      opacity: 1;
    }

    input:focus::after{
      content: "";
      width: 2px;
      height: 100%;
      background: #fc4747;
    }

    .underline-search{
      position: absolute;
      bottom: -10px;
      right: 0;
      width: 100%;
      height: 1px;
      background: #5a698f;
      opacity: 0;
    }

    img {
      width: 32px;
      height: 32px;
    }
  }
}

@media (max-width: 800px) {
  .search-container {
    .search {
      margin-top: 90px;
      input{
        margin-left: 12px;
      }
    }
    
  }
}

@media (max-width: 400px) {
  .search-container {
    .search {
      margin-top: 60px;
      img{
        width: 16px;
        height: 16px;
      }
      .underline-search{
        bottom: -5px;
      }
    }
  }
}
</style>
