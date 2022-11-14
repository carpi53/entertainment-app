import { defineStore } from "pinia";

export const useScreenStore = defineStore("screen", {
  state() {
    return{
      screenWidth: window.innerWidth
    }
  },
  getters: {
    getScreenWidth(){
      return this.screenWidth;
    }
  },
  actions: {
    setWindowWidth() {
      this.screenWidth = window.innerWidth;
    }
  },
});
