import React from "react";
import styled from "styled-components";

import UpTop from "../UpTop";
import Footer from "../Footer";
import Header from "../Header";
import { Card, MainHeader } from "../common";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  max-width: 100%;
`;

const Services = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
`;

const TwoComponent = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
`;

export const Home = (props) => {
  return (
    <>
      <Container>
        <Header />
        <MainHeader />
        <TwoComponent>
          <ContactInfo />
          <ContactForm />
        </TwoComponent>
        <Services>
          <Card>
            <h3>COMPANY SECRETARIAL SERVICE</h3>
            <p>
              We offer a free consultation on key matters that are important for
              you to decide the correct business path to achieve your vision.
            </p>
          </Card>
          <Card>
            <h3>STATUTORY REPORTING SERVICES</h3>
            <p>
              Our competent team takes a structured approach to complete and
              submit statutory reports well before the deadline.
            </p>
          </Card>
          <Card>
            <h3>OUTSOURCING YOUR FINANCE</h3>
            <p>
              Outsourcing brings great benefit to our clients, our services
              provides substantial savings whilst getting a quality service
            </p>
          </Card>
          <Card>
            <h3>FINANCIAL MANAGEMENT</h3>
            <p>
              Our Monthly Accounting services entails everything from financial
              statement compilations to assistance.
            </p>
          </Card>
          <Card>
            <h3>TRUSTED BUSINESS ADVISOR</h3>
            <p>
              Becoming your trusted business advisor will help your organisation
              plot a course for your future success.
            </p>
          </Card>
        </Services>
      </Container>
      <UpTop />
      <Footer />
    </>
  );
};

export default Home;
