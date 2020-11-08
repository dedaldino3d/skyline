import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  max-width: 100%:
`;

const Content = styled.div`
  padding: 1em;
  background: var(--green);
  border-radius: 8px;
`;

const ContactInfo = (props) => (
  <Container>
    <p>
      Nossa equipe está disponível via telefone, e-mail ou para iniciar um chat
      ao vivo das 9h às 17h AEST, de segunda a sexta-feira.
    </p>
    <Content>
      Como alternativa, faça login e visite o Painel do Cliente ; uma maneira
      conveniente e segura de visualizar todas as informações da sua conta e
      explorar as opções de pagamento.
    </Content>
  </Container>
);

export default ContactInfo;
