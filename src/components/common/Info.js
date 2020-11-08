import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 40px 3em;
  text-align: center;
  max-width: 100%;
  display: block;
  @media screen and (max-width: 640px) {
    padding: 0.8em;
    margin-bottom: 1em;
  }
  background: #f5f6f6 !important;
`;

const Info = ({ children }) => <Container>{children}</Container>;

export default Info;
