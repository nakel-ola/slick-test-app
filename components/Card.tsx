import React from "react";
import styled from "styled-components";
import { Movies } from "../typing";

const Card = (props: Movies) => {
  const { Poster, Title } = props;
  return (
    <Container bgImage={Poster}>
      <div className="">
        <p className="">{Title}</p>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div<{ bgImage: string }>`
  margin-right: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  width: 200px;
  height: 200px;
  background-color: #000000;
  border-radius: 12px;
  background-image: url(${(props) => props.bgImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  flex: none;
  order: 0;
  flex-grow: 0;

  @media only screen and (max-width: 600px) {
    > p {
      font-size: 24px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    > p {
      font-size: 18px;
      font-family: "DM Sans";
      font-style: normal;
      font-weight: 400;
      color: #ffffff;
      text-align: center;
      line-height: 31px;
    }
  }
`;
