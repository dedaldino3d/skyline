import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  min-height: 200px;
  padding: 60px 20px;
  color: var(--white-100);
  background: var(--blue-bolder);
  h3 {
    font-size: 1.4em;
    margin-bottom: 20px;
    color: var(--white-100);
  }
  p:first-of-type {
    font-size: 14px;
  }
  p:last-of-type {
    font-size: 12px;
  }
`;

const ButtonContact = styled.button`
  border: none;
  border-radius: 8px;
  background: var(--green);
  padding: 10px 15px;
  font-weight: 600;
  color: var(--blue-bold);
`;

export default function HomeContact(props) {
  return (
    <Container>
      <h3>PRONTO PARA DAR UM IMPULSO AO SEU NEGÓCIO?</h3>
      <p>Vamos começar e ajudá-lo a realizar seus sonhos.</p>
      <ButtonContact>Ligue para 946334642</ButtonContact>
      <p>Ou ligue para +244 946334643, adoraríamos conversar!</p>
    </Container>
  );
}
