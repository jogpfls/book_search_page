import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Axios } from '../api/Axios';

const Book = ({searchValue, searchTarget, QueryType}) => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setPage(1);  // page 초기화
    setBooks([]);  // books 초기화
  }, [QueryType]);

  useEffect(() => {
    const fetchBookInfo = async () => {
      try {
        let response;
        
        if (searchValue) { // 검색어가 있을 경우 검색 API 호출
          response = await Axios.get("/api/search", {
            params: {
              QueryType: QueryType,
              SearchTarget: searchTarget,
              Query: searchValue, // 검색어 전달
              Start: page,
              MaxResults: 10,
            },
          });
        } else { // 검색어가 없으면 기본 ItemList API 호출
          response = await Axios.get("/api/books", {
            params: {
              QueryType: QueryType,
              SearchTarget: searchTarget,
              Start: page,
              MaxResults: 10,
            },
          });
        }

        if (page === 1) {
          setBooks(response.data.item || []); // 첫 페이지일 때는 새로 세팅
        } else {
          setBooks(prevBooks => [...prevBooks, ...response.data.item || []]);  // 이후 페이지는 덧붙이기
        }

        if (response.data.length < 10) {
          setHasMore(false); // 더 이상 데이터가 없으면
        }
      } catch (error) {
        console.error("API 요청 실패", error);
      }
    };

    fetchBookInfo();
  }, [searchValue, page, QueryType, searchTarget]); // 검색어 변경 시마다 새로 요청


  const loadMore = () => {
    if (hasMore) {
      setPage(prevPage => prevPage + 1); // 페이지 증가
    }
  };
  
  return (
    <AllWrapper>
      {books.map((book, index)=>(
        <BookWrapper key={index}>
            <LeftWrapper>
              <BookImg src={book.cover || null}/>
            </LeftWrapper>
            <RightWrapper>
              <FirstWrapper>
                <BookTitle>{book.title}</BookTitle>
                <BookInfo>{book.author}</BookInfo>
                <BookDescription>
                  {book.description}
                </BookDescription>
              </FirstWrapper>
              <SecondWrapper>
                <Btn>{book.priceStandard}원</Btn>
                <Btn>{book.publisher}</Btn>
              </SecondWrapper>
            </RightWrapper>
          </BookWrapper>
      ))}
      {hasMore && (
        <LoadMoreBtn onClick={loadMore}>더보기</LoadMoreBtn>
      )}
    </AllWrapper>
  );
};

const AllWrapper = styled.div`
  padding: 18px 24px;
`;

const BookWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const LeftWrapper = styled.div`
`;

const BookImg = styled.img`
  width: 120px;
  height: 174px;
  //background-color: rgb(203, 203, 203);
`;

const BookTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const BookInfo = styled.p`
  margin-top: 20px;
`;

const RightWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const FirstWrapper = styled.div`
  width: 100%;
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BookDescription = styled.div`
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: end;
`;

const Btn = styled.p`
  font-size: 13px;
  width: 60px;
`;

const LoadMoreBtn = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ddd;
  }
`;

export default Book;