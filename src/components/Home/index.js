import React from "react";

import ScrollAnimation from "../ScrollAnimation";
import UpTop from "../UpTop";
import Footer from "../Footer";
import Header from "../Header";
import Testimonials from "../Testimonials";
import { MainHeader, Info, Card, HomeContact } from "../common";
import { Container, TextInfo, Title, Services, Img } from "./styles";

export const Home = (props) => {
  return (
    <>
      <Container>
        <Header />
        <MainHeader />
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
            Our <span>Services</span>
          </Title>
          <Services>
            <ScrollAnimation
              animateIn="animate__zoomIn"
              animateOut="animate__zoomOut"
            >
              <Card>
                <h3>COMPANY SECRETARIAL SERVICE</h3>
                <p>
                  We offer a free consultation on key matters that are important
                  for you to decide the correct business path to achieve your
                  vision.
                </p>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__zoomIn"
              animateOut="animate__zoomOut"
            >
              <Card>
                <h3>STATUTORY REPORTING SERVICES</h3>
                <p>
                  Our competent team takes a structured approach to complete and
                  submit statutory reports well before the deadline.
                </p>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__zoomIn"
              animateOut="animate__zoomOut"
            >
              <Card>
                <h3>OUTSOURCING YOUR FINANCE</h3>
                <p>
                  Outsourcing brings great benefit to our clients, our services
                  provides substantial savings whilst getting a quality service
                </p>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__zoomIn"
              animateOut="animate__zoomOut"
            >
              <Card>
                <h3>FINANCIAL MANAGEMENT</h3>
                <p>
                  Our Monthly Accounting services entails everything from
                  financial statement compilations to assistance.
                </p>
              </Card>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__zoomIn"
              animateOut="animate__zoomOut"
            >
              <Card>
                <h3>TRUSTED BUSINESS ADVISOR</h3>
                <p>
                  Becoming your trusted business advisor will help your
                  organisation plot a course for your future success.
                </p>
              </Card>
            </ScrollAnimation>
          </Services>
        </Info>
      </Container>
      <Testimonials />
      <Info>
        <Title>
          <h1>Porque escolher a Skyline?</h1>
          <p>
            Nosso objetivo é apoiar bons negócios, por isso queremos que você
            aproveite as oportunidades de crescimento quando e onde for
            possível.
          </p>
        </Title>
        <Services>
          <Card noshadow>
            <h3>Nós pegamos você</h3>
            <p>
              Nosso objetivo é entender as necessidades do seu negócio e
              oferecer as melhores soluções para que ele tenha sucesso.
            </p>
          </Card>
          <Card noshadow>
            <h3>Rápido e fácil</h3>
            <p>
              Aplique em menos de dez minutos. Entraremos em contato com você em
              24 horas com uma decisão.
            </p>
          </Card>
          <Card noshadow>
            <h3>Empréstimos mais inteligentes</h3>
            <p>
              Identificamos os insights de dados mais precisos e úteis para
              garantir a melhor decisão possível.
            </p>
          </Card>
          <Card noshadow>
            <h3>Somos transparentes</h3>
            <p>
              Não acreditamos em taxas ocultas; sempre seremos diretos sobre
              nossos custos.
            </p>
          </Card>
        </Services>
      </Info>
      <HomeContact />
      <UpTop />
      <Footer />
    </>
  );
};

export default Home;
