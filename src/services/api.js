import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.114:3333",
});
//Com emulador, usar localhost
export default api;
