/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <Logo>
        <img src="/MyTestApp.png" alt="" className="" />
      </Logo>
    </Container>
  );
};

const Container = styled.header`
  height: 67px;
  background: #292929;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    justify-content: start;
    height: 140px;
  }
`;

const Logo = styled.div`
  width: 108px;
  height: 33.58px;
  border: 1px solid #ffffff;
  margin: auto 0 auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media only screen and (min-width: 768px) {
    margin-left: 77px;
    height: 60px;
    width: 193px;
  }
`;

export default Header;
