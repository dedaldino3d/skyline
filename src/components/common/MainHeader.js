import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";
import { string } from "prop-types";

const CarouselContainer = styled.div`
  max-width: 100%;
  max-height: 30em;
  margin: 0 auto;

  & img {
    max-height: 30em;
    width: 100%;
  }
`;

const Container = styled.div`
  background-color: var(--blue-bold);
  padding: 0 5em;
  margin-top: 50px;
  position: relative;

  @media screen and (max-width: 640px) {
    padding: 0;
  }
`;

const Overflowed = styled.div`
  position: absolute:
  margin-left: 0;
  padding-left: 10px;
  z-index: 5;
  color: var(--white);
  font-weight: 500;

  h1 {
      font-size: 1em;
      font-weight: 700;
      margin-bottom: 20px;
  }

  p {
      font-size: 1.5em;
      font-weight: 400;
  }
`;

export default function MainHeader({ header, description }) {
  return (
    <Container>
      {header && (
        <Overflowed>
          <h1>{header}</h1>
          <p>{description}</p>
        </Overflowed>
      )}
      <CarouselContainer>
        <Carousel bordered={false} autoplay>
          <div>
            <img src={require("../../images/1.jpg")} alt="bigstock" />
          </div>
          <div>
            <img src={require("../../images/2.jpg")} alt="bigstock" />
          </div>
          <div>
            <img src={require("../../images/3.jpg")} alt="bigstock" />
          </div>
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}

MainHeader.propTypes = {
  header: string.isRequired,
  description: string,
};
