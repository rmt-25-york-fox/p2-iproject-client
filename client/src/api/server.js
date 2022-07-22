import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "https://iprojectrivaldi.herokuapp.com",
});

export default instanceAxios;
