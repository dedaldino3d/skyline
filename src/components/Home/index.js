import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "antd";

import UpTop from '../UpTop'
import Footer from "../Footer";
import {
  Container,
  Header,
  MainHeader,
  Info,
  TextInfo,
  Title,
  SubHeader,
  Services,
  Service,
  Img,
  CarouselContainer,
} from "./styles";

export const Home = (props) => {
  return (
    <>
      <Container>
        <Header>
          <Link to="/">
            <img
              src={require("../../images/sky-logo.jpg")}
              alt="Skyline Logo"
            />
          </Link>
          <SubHeader>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/about">About Us</Link>
            <Link to="/info">Contact</Link>
          </SubHeader>
        </Header>
        <MainHeader>
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
        </MainHeader>
        <Info>
          <Title>
            About <span>Us</span>
          </Title>
          <Services>
            <TextInfo>
              Every business needs a reliable financial business partner – We
              thrive in providing a complete financial management solution to
              your business. We believe numbers without meaning are useless. Our
              mission is to become your trusted business advisor. Our qualified
              and enterprising team are passionate about your success and we
              take the time to provide a real understanding of the numbers that
              matter to your business and personal finances. At FinAcc Direct,
              we are proud to be exceptionally different from our competition.
              Becoming a client is like having your own business consultant
              focused on streamlining your finances and improving profitability.
              Our complete accounting consultancy & financial business
              partnering service entails everything from Secretarial services,
              Bookkeeping, VAT, Payroll, Tax returns & planning to Compilation
              of monthly board pack.
            </TextInfo>
            <Img src={require("../../images/Bigstock.jpg")} alt="bigstock" />
          </Services>
        </Info>
        <Info>
          <Title>
            About <span>Us</span>
          </Title>
          <Services>
            <TextInfo>
              Every business needs a reliable financial business partner – We
              thrive in providing a complete financial management solution to
              your business. We believe numbers without meaning are useless. Our
              mission is to become your trusted business advisor. Our qualified
              and enterprising team are passionate about your success and we
              take the time to provide a real understanding of the numbers that
              matter to your business and personal finances. At FinAcc Direct,
              we are proud to be exceptionally different from our competition.
              Becoming a client is like having your own business consultant
              focused on streamlining your finances and improving profitability.
              Our complete accounting consultancy & financial business
              partnering service entails everything from Secretarial services,
              Bookkeeping, VAT, Payroll, Tax returns & planning to Compilation
              of monthly board pack.
            </TextInfo>
            <Img src={require("../../images/Bigstock.jpg")} alt="bigstock" />
          </Services>
        </Info>
        <UpTop/>
        <Info>
          <Title>
            Our <span>Services</span>
          </Title>
          <Services>
            <Service>
              <h3>COMPANY SECRETARIAL SERVICE</h3>
              <p>
                We offer a free consultation on key matters that are important
                for you to decide the correct business path to achieve your
                vision.
              </p>
            </Service>
            <Service>
              <h3>STATUTORY REPORTING SERVICES</h3>
              <p>
                Our competent team takes a structured approach to complete and
                submit statutory reports well before the deadline.
              </p>
            </Service>
            <Service>
              <h3>OUTSOURCING YOUR FINANCE</h3>
              <p>
                Outsourcing brings great benefit to our clients, our services
                provides substantial savings whilst getting a quality service
              </p>
            </Service>
            <Service>
              <h3>FINANCIAL MANAGEMENT</h3>
              <p>
                Our Monthly Accounting Services entails everything from
                financial statement compilations to assistance.
              </p>
            </Service>
            <Service>
              <h3>TRUSTED BUSINESS ADVISOR</h3>
              <p>
                Becoming your trusted business advisor will help your
                organisation plot a course for your future success.
              </p>
            </Service>
          </Services>
        </Info>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
