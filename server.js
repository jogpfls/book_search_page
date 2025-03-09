const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config(); // .env 파일 사용

const corsOptions = {
  origin: "http://localhost:3000", // 프론트엔드 주소
  methods: "GET,POST",
  credentials: true,
};
const app = express();
app.use(express.json());
app.use(cors(corsOptions)); // CORS 허용

app.get("/api/books", async (req, res) => {
  const { SearchTarget } = req.query;
  const { Start } = req.query;
  const {MaxResults} = req.query;
  const { QueryType } = req.query;
  try {
    const response = await axios.get("http://www.aladin.co.kr/ttb/api/ItemList.aspx", {
      params: {
        TTBKey: process.env.REACT_APP_ALADIN_KEY, // .env에서 가져오기
        QueryType: QueryType,
        MaxResults: MaxResults,
        Start: Start,
        SearchTarget: SearchTarget,
        Output: "js",
        Version: 20131101,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "API 요청 실패", error: error.message });
  }
});

app.get("/api/search", async (req, res) => {
  const { Query, QueryType, Start, MaxResults, SearchTarget } = req.query;

  try {
    const response = await axios.get("http://www.aladin.co.kr/ttb/api/ItemSearch.aspx", {
      params: {
        TTBKey: process.env.REACT_APP_ALADIN_KEY, // .env에서 가져오기
        Query: Query, // 검색어
        QueryType: QueryType, // 검색 타입
        MaxResults: MaxResults, // 한 번에 가져올 최대 결과 수
        Start: Start, // 시작 페이지
        SearchTarget: SearchTarget, // 검색 대상
        Output: "js", // JSON 출력
        Version: 20131101, // API 버전
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "API 요청 실패", error: error.message });
  }
});

app.listen(5500, () => console.log(`✅ Server running on port 5500`));


