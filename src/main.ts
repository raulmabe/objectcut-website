import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import isImageUrl from "is-image-url";
import titleMixin from "./mixins/titleMixin";
import RapidApi from "./services/api";

Vue.config.productionTip = false;

Vue.mixin(titleMixin);
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    baseURL: "",
    baseValid: false,
    key: "key",
    toRemove: "background",
    loading: false,
    generatedURL: "",
    generatedValid: false,
    error: false,
    errorMessage: "",
  },
  mutations: {
    setBaseURL(state, url) {
      state.baseValid = isImageUrl(url);
      state.baseURL = url;
      state.error = false;
    },
    setKey(state, key) {
      state.key = key;
    },
    setToRemove(state, toRemove) {
      state.toRemove = toRemove;
    },
    setGeneratedURL(state, url) {
      state.generatedValid = isImageUrl(url);
      state.generatedURL = url;
    },
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, errorMsg) {
      state.error = true;
      state.errorMessage = errorMsg;
    },
  },
  actions: {
    async magic({ commit, state }) {
      if (!state.baseValid) {
        return;
      }
      console.log(`Removing ${state.toRemove}`);
      commit("setLoading", true);
      const resp = await RapidApi.request(
        state.baseURL,
        state.key,
        state.toRemove
      );
      commit("setLoading", false);

      if (!resp.error) {
        commit("setGeneratedURL", resp.response.image_url);
      } else {
        commit("setError", resp.message);
      }
    },
  },
  getters: {
    getGeneratedURL: (state) => state.generatedURL,
    getBaseURL: (state) => state.baseURL,
    isBaseURLValid: (state) => state.baseValid,
    isGeneratedURLValid: (state) => state.generatedValid,
    isLoading: (state) => state.loading,
    hasErrored: (state) => state.error,
    getErrorMessage: (state) => state.errorMessage,
  },
});

new Vue({
  render: (h) => h(App),
  store: store,
}).$mount("#app");
