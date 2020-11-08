import React from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  border-radius: 4px;
  background: var(--white);
  max-width: 25em;
  min-height: 15em;
  box-shadow: 0 6px 20px rgb(0 0 0 /4%), 0 0 10px rgb(0 0 0 /3%);
  border-radius: 8px;
  padding: 30px 20px 20px;
  background: var(--white);
  text-align: center;
  font-weight: 600;

  & > :first-child {
    font-size: 2em;
    color: var(--blue-bold);
    font-weight: 600;
  }
  & p {
    word-wrap: break-word;
    font-size: 0.965934em;
    font-weight: 400;
  }
  :hover {
    transition: 0.15s ease-in-out;
    box-shadow: var(--bs-post);
  }
  ${(props) =>
    props.noshadow &&
    css`
      box-shadow: none;
    `}
`;

export default function Card({ children, noshadow }) {
  return <Container noshadow={noshadow}>{children}</Container>;
}
