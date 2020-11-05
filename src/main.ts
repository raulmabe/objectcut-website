import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import Vuex from "vuex";
import isImageUrl from "is-image-url";
import titleMixin from "./mixins/titleMixin";

Vue.config.productionTip = false;

Vue.mixin(titleMixin);
Vue.use(Buefy);
Vue.use(Vuex);

const apiUrl = "https://www.raulmabe.dev/api/background-removal";

const store = new Vuex.Store({
  state: {
    baseURL: "",
    baseValid: false,
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

      commit("setLoading", true);
      const resp = await fetch(
        `${apiUrl}?url=${state.baseURL}&remove=background`
      );
      commit("setLoading", false);
      const data = await resp.json();
      if (!data.error) {
        commit("setGeneratedURL", data.response.image_url);
      } else {
        commit("setError", data.message);
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
