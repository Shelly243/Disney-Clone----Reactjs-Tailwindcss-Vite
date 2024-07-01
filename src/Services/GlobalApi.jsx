import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = '86959f2a15f1cb25613478d095d0b45f';

const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day`, {
  params: {
    api_key: api_key
  }
});

export default {
  getTrendingVideos
};
