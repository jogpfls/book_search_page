import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = () => {
  const [clickState, setClickState] = useState('');

  return (
    <Wrapper>
      <TopWrapper>
        <Link to="/">
          <Logo onClick={() => {setClickState('')}} $isActive={clickState === ''}>FinderCheck</Logo>
        </Link>
      </TopWrapper>
      <BottomWrapper>
        <Link to = "/search">
          <Search onClick={() => {setClickState('search')}} $isActive={clickState === 'search'}>책 검색</Search>
        </Link>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  background-color: white;
`;

const TopWrapper = styled.div`
  width: 100%;
  height: 60px;
  border-bottom: 1px solid rgb(224, 224, 224);
  display: flex;
  align-items: center;
  padding: 0 130px;
`;

const Logo = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const BottomWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid rgb(224, 224, 224);
  padding: 0 130px;
  display: flex;
  align-items: center;
`;

const Search =styled.p`
  font-weight: ${({$isActive})=>($isActive ? "600" : "400")};
`;

export default Header;