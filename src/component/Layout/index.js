import React from 'react';
import Header from '../Header'
import styled from 'styled-components';

const index = ({children}) => {
  return (
    <AllWrapper>
      <HeaderWrapper>
        <Header/>
      </HeaderWrapper>
      <ContentsWrapper>
        {children}
      </ContentsWrapper>
      <FooterWrapper>
        <Text>조혜린</Text>
        <Text>카카오 도서 검색 API 이용</Text>
      </FooterWrapper>
    </AllWrapper>
  );
};

const AllWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  height: 110px;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 20px 130px;
  background-color: rgb(245, 245, 245); */
`;

const FooterWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: rgb(109, 109, 109);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const Text = styled.p`
  color: white;
  font-weight: 300;
`;

export default index;