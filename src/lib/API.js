import axios from "axios";

class API {
  constructor() {
    this.request = axios.create({
      baseURL: process.env.API_URL,
    });
  }
}

export default API;
