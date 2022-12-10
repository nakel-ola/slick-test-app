import React from "react";
import styled from "styled-components";
import { Movies } from "../typing";
import Card from "./Card";

interface Props {
  category: string;
  data: Movies[] | null;
}

const CategoryCard = (props: Props) => {
  const { category, data } = props;
  return data ? (
    <Container>
      {/* title */}

      <p className="">{category}</p>

      {/* card row */}

      <CardRow>
        {data.map((item) => (
          <Card key={item.imdbID} {...item} />
        ))}
      </CardRow>
    </Container>
  ) : null;
};

export default CategoryCard;

const Container = styled.div`
  /* mobile */
  min-height: 249px;
  margin-top: 33px;
  max-height: fit-content;

  > p {
    padding-left: 28px;
    width: 210px;
    height: 23px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #000000;
  }

  /* tablet */
  @media only screen and (min-width: 600px) {
    margin-top: 48px;
    height: fit-content;
    > p {
      padding-left: 67px;
      width: 279px;
      height: 31px;
      font-size: 24px;
      line-height: 31px;
    }
  }
`;

const CardRow = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  margin-top: 26px;
  padding-left: 28px;

  @media only screen and (min-width: 600px) {
    padding-left: 67px;
    margin-top: 18px;
    scrollbar-width: none;
    ::-webkit-scrollbar {
      display: none;
    }

    ::-ms-overflow-style {
      display: none;
    }
  }
`;
