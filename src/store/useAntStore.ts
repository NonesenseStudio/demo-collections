import { defineStore } from "pinia";

export const useAntStore = defineStore("ant", {
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
