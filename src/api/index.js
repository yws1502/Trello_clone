import axios from "axios";
import router from "../router";

const DOMAIN = "http://localhost:3000";
const UNAUTHORIZED = 401;
const onUnauthorized = () => {
  router.push(`/login?rPath=${ encodeURIComponent(location.pathname) }`);
};

const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data
  })
    .then(res => res.data)
    .catch(err => {
      const { status } = err.response;
      if (status === UNAUTHORIZED) onUnauthorized();
      throw err.response;
    });
};

export const setAuthInHeader = token => {
  axios.defaults.headers.common[ "Authorization" ] = token ? `Bearer ${ token }` : null;
}

export const board = {
  fetch() {
    return request("get", "/boards");
  },
  create(title) {
    return request("post", "/boards", {title})
  }
};

export const auth = {
  login(email, password) {
    return request("post", "/login", {email, password})
  }
};
