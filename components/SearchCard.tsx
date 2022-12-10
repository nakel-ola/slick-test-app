import React, { ChangeEvent, FormEvent } from "react";
import styled from "styled-components";

interface Props {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent) => void;
}
const SearchCard = (props: Props) => {
  const { value, onChange, onSubmit } = props;
  return (
    <Container onSubmit={onSubmit}>
      <p className="">Search</p>

      <input type="text" value={value} onChange={onChange} />
    </Container>
  );
};

export default SearchCard;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 56px 0 0 0;
  gap: 4px;
  height: fit-content;
  padding-left: 28px;

  > p {
    width: 51px;
    height: 21px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: #000000;
  }

  > input {
    margin-top: -16px;
    width: 265px;
    height: 34px;
    border: 1px solid #000000;
    flex: none;
    outline: none;
  }

  /* tablet */

  @media only screen and (min-width: 600px) {
    padding-left: 77px;
    margin: 63px 0 0 0;
    > p {
      width: 77px;
      height: 31px;
      font-size: 24px;
      line-height: 31px;
    }

    > input {
      width: 680px;
      height: 54px;
    }
  }

  /* laptop */

  @media only screen and (min-width: 768px) {
    > input {
      width: 90%;
    }
  }
`;
