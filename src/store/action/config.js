import axios from "axios";

const http = axios.create({
  //baseURL:" https://cnodejs.org/api/v1"
  baseURL:" http://39.99.151.246/api/articles"
});
const http1 = axios.create({
  //baseURL:" https://cnodejs.org/api/v1"
  baseURL:" http://39.99.151.246/api/article"
});

export {http,http1};