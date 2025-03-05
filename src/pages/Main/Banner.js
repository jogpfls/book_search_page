import React from 'react';
import styled from 'styled-components';
import book1 from "../../assets/book1.jpeg";
import book2 from "../../assets/book2.jpeg";
import book3 from "../../assets/book3.jpeg";

const Banner = () => {
  return (
    <Wrapper>
      <TextWrapper>
        <Text>책으로 하나되는 우리</Text>
        <Text>FinderBook</Text>
      </TextWrapper>
      <BookImgWrapper>
        <BookImg src={book1} alt='책 이미지'/>
        <BookImg src={book2} alt='책 이미지'/>
        <BookImg src={book3} alt='책 이미지'/>
      </BookImgWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 900px;
  background-color: rgb(255, 237, 237);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 150px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
`;

const BookImgWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

const BookImg = styled.img`
  height: 280px;
  width: 200px;
  border-radius: 5px;

  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

export default Banner;