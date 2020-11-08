import React from "react";
import { FaHome, FaInfo, FaPhoneAlt, FaServer } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.header`
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1000;
  position: fixed;
  background: var(--white);
  width: 100%;
  padding: 0px 20px;
  top: 0;
  box-shadow: var(--bs-ud);
  font-weight: 600;

  & > a:first-of-type {
    color: var(--blue-bolder);
    font-weight: 600;
    max-width: 100px;
    display: flex;
    align-items: center;
    & img {
      width: 40px;
    }
    & > span {
      font-size: 1.5em;
      font-weight: 600;
      line-spacing: 1.4;
      margin-left: 5px;
      color: var(--blue-60);
      span {
        color: var(--green-500);
      }
    }
  }
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-contnet: center;
  max-width: 400px;
  flex: 1 1 auto;
  height: 100%;
  & > a {
    padding: 10px;
    height: 100%;
    font-weight: 600;
    display: flex;
    align-items: center;
    svg {
      margin-right: 8px;
    }
    :hover {
      background: var(--blue-bolder);
      transition: all 500ms ease-in-out;
      color: var(--white);
      cursor: pointer;
    }
  }
`;

const Header = (props) => {
  return (
    <Container>
      <Link to="/">
        <img src={require("../../images/sky-logo.jpg")} alt="Skyline Logo" />
        <span>
          Sky<span>line</span>
        </span>
      </Link>
      <SubHeader>
        <Link to="/">
          <FaHome />
          Home
        </Link>
        <Link to="/services">
          <FaServer />
          Serviços
        </Link>
        <Link to="/about">
          <FaInfo />
          Sobre nós
        </Link>
        <Link to="/info">
          <FaPhoneAlt />
          Contacto
        </Link>
      </SubHeader>
    </Container>
  );
};

export default Header;
