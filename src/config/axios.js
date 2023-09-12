import { app_base_url } from "./config_local";

const axios = require("axios");
const base_url = app_base_url

export const call = async (
  config = { method: "GET" },
  data = {},
  params = {}
) => {
  let url = base_url + config.url;

  if (config.method === "GET" && data && Object.keys(data).length > 0) {
    url += "?";
    Object.entries(data).forEach(([key, value]) => {
      url += `${key}=${value}&`;
    });
  }
  if (params && Object.keys(params).length > 0) {
    url += "?";
    Object.entries(params).forEach(([key, value]) => {
      url += `${key}=${value}&`;
    });
  }
  if (url.substr(url.length - 1, url.length) === "&") {
    url = url.slice(0, url.length - 1);
  }
  const options = {
    method: config.method,
    url,
    mode: "cors",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    timeout: 60000,
    headers: {
      Authorization: localStorage.getItem("token")?.replace(/\"/g, ""),
    },
  };
  if (["POST", "PUT", "DELETE"].indexOf(config.method) > -1) {
    // options.data = JSON.stringify(data);
    options.data = data;
  }
  return axios(options);
};
