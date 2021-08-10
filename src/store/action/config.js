import axios from "axios";

const http = axios.create({
  baseURL:" https://cnodejs.org/api/v1"
});

const signHttp = axios.create({
  baseURL:"http://39.99.151.246"
});

export {http, signHttp};