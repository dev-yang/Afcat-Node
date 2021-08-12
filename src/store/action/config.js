import axios from "axios";

// const http = axios.create({
//   baseURL:" http://39.99.151.246/api/articles"
// });
// const http1 = axios.create({
//   baseURL:" http://39.99.151.246/api/article"
// });
// const signHttp = axios.create({
//   baseURL:"http://39.99.151.246"
// });
const http = axios.create({
  baseURL:"/api/articles"
});
const http1 = axios.create({
  baseURL:"/api/article"
});
const signHttp = axios.create({
  baseURL:"/api"
});
const indexNavHttp = axios.create({
  baseURL:"/"
});

export {http, signHttp,http1,indexNavHttp}
