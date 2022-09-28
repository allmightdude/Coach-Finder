import { createStore } from "vuex";
import coaches from "./coaches/index";
import requests from "./requests/index";
import auth from "./auth/index";

export default createStore({
  modules: {
    coaches,
    requests,
    auth
  },
});
