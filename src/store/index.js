import { createStore } from "vuex";
import coaches from "./coaches/index";
import requests from "./requests/index";

export default createStore({
  modules: {
    coaches,
    requests
  },
});
