import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Axios } from '../api/Axios';

const Book = ({searchValue}) => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setBooks([]); // 새로운 검색어가 입력되면 초기화
    setPage(1);
    setHasMore(true);
  }, [searchValue]);

  useEffect(() => {
    if (!hasMore) return;

    const fetchBookInfo = async () => {
      try {
        const response = await Axios.get("", { 
          params: { 
            query: searchValue,
            page: page,
            size: 10
            }
        });
        setBooks((prevBooks) => [...prevBooks, ...response.data.documents]); // 기존 데이터 유지하며 추가
        setHasMore(!response.data.meta.is_end);
      } catch (error) {
        console.log("API 요청 실패", error);
      }
    };
    fetchBookInfo();
  }, [searchValue, page, hasMore]);

  const loadMore = () => {
    if (hasMore) setPage((prevPage) => prevPage + 1);
  };
  
  return (
    <AllWrapper>
      {searchValue === "" && "도서 검색 사이트입니다. 검색을 해주세요!"}
      {books.map((book, index)=>(
        <BookWrapper key={index}>
            <LeftWrapper>
              <BookImg src={book.thumbnail || null}/>
            </LeftWrapper>
            <RightWrapper>
              <FirstWrapper>
                <BookTitle>{book.title}</BookTitle>
                <BookInfo>{book.authors}</BookInfo>
                <BookDescription>
                  {book.contents}
                </BookDescription>
              </FirstWrapper>
              <SecondWrapper>
                <Btn>{book.price}원</Btn>
                <Btn>{book.status}</Btn>
              </SecondWrapper>
            </RightWrapper>
          </BookWrapper>
      ))}
      {(searchValue !== "" && books.length !== 0) && <LoadMoreBtn onClick={loadMore}>더보기</LoadMoreBtn>}
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