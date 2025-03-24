import { defineStore } from "pinia";

export const useElementStore = defineStore("element", {
  state: () => ({
    isLogin: false,
  }),
  actions: {
    setLogin(login: boolean) {
      this.isLogin = login;
    },
    logout() {
      this.isLogin = false;
    },
  },
});
