/* eslint-disable @next/next/no-img-element */
import React from "react";
import styled from "styled-components";

const Hero = () => {
  return (
    <Container>
      <div className="">
        <p className="">Watch something incredible.</p>
      </div>
    </Container>
  );
};

export default Hero;

const Container = styled.section`
  width: 100%;
  height: 257px;
  background-color: red;
  background-image: url("https://www.commonsensemedia.org/sites/default/files/styles/ratio_16_9_small/public/video-thumbnails/3vqj6m0i6gkuraljmhnzl0xr3by.jpeg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  items-center: center;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    height: 550px;
    justify-content: start;
  }

  > div {
    width: 273px;
    height: 72px;
    display: flex;
    items-center: center;
    justify-content: center;
    margin-top: auto;
    margin-bottom: auto;

    > p {
      font-size: 28px;
      letter-spacing: -0.05em;
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 700;
      color: #ffffff;
      text-align: center;
      line-height: 36px;

      @media only screen and (min-width: 768px) {
        line-height: 94px;
        text-align: start;
        font-size: 72px;
      }
    }

    @media only screen and (min-width: 768px) {
      margin-left: 77px;
      width: 490px;
      height: 282px;
      margin-top: 0;
      margin-bottom: 0;
    }
  }
`;
