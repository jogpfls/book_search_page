//BookListAPI.js
import { Axios } from "./Axios";

export const fetchBookInfo = async(QueryType, searchTarget, page) => {
  try{
    const response = await Axios.get("/api/books", {
      params: {
        QueryType: QueryType,
        SearchTarget: searchTarget,
        Start: page,
        MaxResults: 10,
      },
    });
    return response

  }catch(error){
    throw error
  }
}