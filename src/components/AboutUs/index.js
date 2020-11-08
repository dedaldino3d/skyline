import React from "react";
import styled from "styled-components";
import UpTop from "../UpTop";
import Header from "../Header";
import { Card, MainHeader, Info } from "../common";
import Footer from "../Footer";

const Container = styled.div``;

const TextInfo = styled.p`
  word-wrap: break-word;
  font-size: 1.3em;
  padding: 10px;
  max-width: 40em;
  flex: 1 1 auto;
`;

const Title = styled.h1`
  font-size: 2em;
  font-weight: 600;
  line-spacing: 1.5;
  text-align: center;
  margin: 10px auto;
  padding: 1em;
  & > span {
    color: var(--blue);
    text-transform: underline;
  }
`;

const Services = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
`;

const AboutUs = (props) => {
  return (
    <>
      <Container>
        <Header />
        <MainHeader />
        <Info>
          <Title>
            Nossa <span>Historia</span>
          </Title>
          <Services>
            <TextInfo>
              Skyline está a ser fundada em 2020 para ajudar proprietários de
              negócios trabalhadores em Angola a ter controle de sua
              contabilidade de que precisam para crescer. No passado, obter um
              empréstimo comercial significava passar semanas de papelada,
              complicações e obstáculos. Usamos dados para avaliar seu pedido de
              empréstimo comercial, o que significa que podemos manter as coisas
              rápidas e sem complicações. Nossos fundadores são especialistas do
              setor financeiro, apaixonados pelo uso da tecnologia para
              simplificar o financiamento de pequenas empresas e apoiar bons
              negócios.
            </TextInfo>
          </Services>
        </Info>
        <Info>
          <Title>
            Nossos <span>Valores</span>
          </Title>
          <Services>
            <Card>
              <h3>Somos transparentes</h3>
              <p>
                Somos francos sobre quem somos e o que oferecemos. Comunicamos
                claramente o custo de nossos produtos de finanças empresariais.
              </p>
            </Card>
            <Card>
              <h3>Todos os negócios são pessoais</h3>
              <p>
                No centro de cada negócio, você sempre encontrará sonhos e
                ambições humanos.
              </p>
            </Card>
            <Card>
              <h3>Dormimos bem a noite</h3>
              <p>
                Tomamos decisões de crédito comerciais responsáveis ​​e estamos
                abertos sobre como os tomamos.
              </p>
            </Card>
            <Card>
              <h3>Não existe pequena empresa</h3>
              <p>Vemos bons negócios, não pequenos negócios.</p>
            </Card>
            <Card>
              <h3>Nós amamos computadores</h3>
              <p>
                Os computadores nos permitem entender onde nossos clientes e
                seus negócios estão hoje.
              </p>
            </Card>
          </Services>
        </Info>
      </Container>
      <UpTop />
      <Footer />
    </>
  );
};

export default AboutUs;
