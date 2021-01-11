import axios from "axios";

import config from "./config.jsx";
import { router } from "./URLProvider.jsx";

const api = axios.create({
  baseURL: config.BASE_URL + config.API_VERSION,
  headers: {
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": true,
  },
  timeout: 30000,
});

function category() {
  return api.get(router.category);
}

export const apiManager = {
  category,
};
