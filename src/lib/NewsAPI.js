import API from "./API";

class NewsAPI extends API {
  getNewsDetails(url) {
    return this.request.get(url);
  }
}

export default NewsAPI;
