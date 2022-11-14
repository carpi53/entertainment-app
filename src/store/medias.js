import { defineStore } from "pinia";
import BDD from "../BDD";

export const useMediasStore = defineStore("medias", {
  state() {
    let allMedias = [];
    BDD.forEach((element) => {
      if (element.isTrending) {
        allMedias.push({
          title: element.title,
          imgTrendingSmall: element.thumbnail.trending.small,
          imgTrendingLarge: element.thumbnail.trending.large,
          imgSmall: element.thumbnail.regular.small,
          imgMedium: element.thumbnail.regular.medium,
          imgLarge: element.thumbnail.regular.large,
          year: element.year,
          category: element.category,
          rating: element.rating,
          isBookmarked: element.isBookmarked,
          isTrending: element.isTrending,
        });
      } else {
        allMedias.push({
          title: element.title,
          imgTrendingSmall: null,
          imgTrendingLarge: null,
          imgSmall: element.thumbnail.regular.small,
          imgMedium: element.thumbnail.regular.medium,
          imgLarge: element.thumbnail.regular.large,
          year: element.year,
          category: element.category,
          rating: element.rating,
          isBookmarked: element.isBookmarked,
          isTrending: element.isTrending,
        });
      }
    });
    return {
      medias: allMedias,
    };
  },
  getters: {
    getTrendingMedias() {
      return this.medias.filter((media) => media.isTrending);
    },
    getAllMedias() {
      return this.medias;
    },
    getMedias() {
      return this.medias.filter((media) => media.isTrending === false);
    },
    getMovies() {
      return this.medias.filter((media) => media.category === "Movie");
    },
    getSeries() {
      return this.medias.filter((media) => media.category === "TV Series");
    },
    getMoviesBookmarked() {
      return this.medias.filter((media) => media.isBookmarked && media.category === "Movie");
    },
    getSeriesBookmarked() {
      return this.medias.filter((media) => media.isBookmarked && media.category === "TV Series");
    },
  },
  actions: {
    toggleBookmark(mediaTitle) {
      const index = this.medias.findIndex(element => element.title === mediaTitle);
      if (index !== -1) {
        this.medias[index].isBookmarked = !this.medias[index].isBookmarked;
      }
    },
  },
});
