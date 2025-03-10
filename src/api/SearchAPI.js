//SearchAPI.js
import { Axios } from "./Axios";

export const fetchBookSearch = async (QueryType, searchTarget, searchValue, page) => {
  try{
    const response = await Axios.get("/api/search", {
            params: {
              QueryType: QueryType,
              SearchTarget: searchTarget,
              Query: searchValue,
              Start: page,
              MaxResults: 10,
            },
          });

          return response
  }catch(error){
    throw error;
  }
}