import React, { useState } from 'react';
import styled from 'styled-components';
import { CiSearch } from "react-icons/ci";
import Book from "../../component/Book";

const Search = () => {
  const [selectedBook, setSelectedBook] = useState("Book");
  const [searchInput, setSearchInput] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [queryType, setQueryType] = useState("ItemNewAll");
  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSearch = () => {
    setSearchValue(searchInput);
  };

  const handleAllBook = () => {
    setSelectedBook("Book");
  }

  const handleDomesticBook = () => {
    setSelectedBook("eBook")
  }

  const handleForeignBook = () => {
    setSelectedBook("Foreign")
  }

  return (
    <Wrapper>
      <TypeWrapper>
        <BookType
        onClick={handleAllBook}
        $isActive={selectedBook==="Book"}>전체 도서</BookType>
        <BookType
        onClick={handleDomesticBook}
        $isActive={selectedBook==="eBook"}>전자 도서</BookType>
        <BookType
        onClick={handleForeignBook}
        $isActive={selectedBook==="Foreign"}>외국 도서</BookType>
      </TypeWrapper>
      <BookWrapper>
        <CategoryWrapper>
          <LeftWrapper>
            <SearchWrapper>
              <SearchBox 
              placeholder='도서 이름을 검색하세요'
              value={searchInput}
              onChange={handleInputChange}
              ></SearchBox>
              <IconBox onClick={handleSearch}>
                <CiSearch size={24}/>
              </IconBox>
            </SearchWrapper>
            <BtnWrapper>
              <Btn 
              onClick={() => {setQueryType("ItemNewAll")}}
              $isActive={queryType === "ItemNewAll"}>신간 전체 리스트</Btn>
              <Btn 
              onClick={() => {setQueryType("Bestseller")}}
              $isActive={queryType === "Bestseller"}
              >베스트 셀러</Btn>
              <Btn 
              onClick={() => {setQueryType("ItemNewSpecial")}}
              $isActive={queryType === "ItemNewSpecial"}
              >주목할만한 신간 리스트</Btn>
            </BtnWrapper>
          </LeftWrapper>
        </CategoryWrapper>
          <BookInfo>
              <Book 
              QueryType={queryType}
              searchValue={searchValue}
              searchTarget={selectedBook}
              />
          </BookInfo>
      </BookWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px 130px;
  background-color: rgb(245, 245, 245);
`;

const TypeWrapper = styled.div`
  display: flex;
`;

const BookType = styled.div`
  width: 168px;
  height: 48px;
  border-right: 1px solid rgb(224, 224, 224);
  border-top: ${({ isActive }) => (isActive ? "2px solid black" : "1px solid rgb(224, 224, 224)")};
  background-color: ${({ $isActive }) => ($isActive ? "#FFFFFF" : "rgb(250, 250, 250)")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${({ $isActive }) => ($isActive ? "1px solid #FFFFFF" : "1px solid rgb(224, 224, 224)")};
  cursor: pointer;
`;

const BookWrapper = styled.div`
  background-color: white;
`;

const CategoryWrapper = styled.div`
  padding: 16px 24px;
`;

const LeftWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const SearchWrapper = styled.div`
  height: 40px;
  width: 216px;
  border: 1px solid rgb(224, 224, 224);
  display: flex;
  justify-content: space-between;
  border-radius: 4px;
  overflow: hidden;
`;

const SearchBox = styled.input`
  margin: 10px;
  outline: none;
`;

const IconBox = styled.div`
  background-color: rgb(224, 224, 224);
  display: flex;
  align-items: center;
  width: 30px;
  justify-content: center;
  cursor: pointer;

  &:active{
    background-color: rgb(204, 204, 204);
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 8px;
  `;

const Btn = styled.div`
  height: 40px;
  width: auto;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid rgb(224, 224, 224);
  background-color: ${({$isActive})=>($isActive ? "rgb(244, 244, 244)" : "#ffffff")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;

  cursor: pointer;
`;

const BookInfo = styled.div`
  background-color: white;
  width: 100%;
  min-height: 580px;
  border-top: 1px solid rgb(224, 224, 224);
  padding: 18px 24px;
`;

export default Search;