import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';

const Main = () => {
  return (
    <Wrapper>
      <Banner/>
      <TextWrapper>
        <Text>책 검색 사이트입니다.</Text>
        <Text>찾고싶은 책을 검색해주세요!</Text>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 300;
`;

export default Main;