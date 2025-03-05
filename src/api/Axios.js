import axios from "axios";

export const Axios = axios.create({
  baseURL: 'https://dapi.kakao.com/v3/search/book',
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}` 
  }
});
