import React from "react";
import { Form, Input } from "antd";
import styled from "styled-components";

const { TextArea } = Input;

const Container = styled.div`
  background: var(--black-400);
  border-radius: 4px;
  padding: 1em;
  max-width: 100%;
  margin-bottom: 20px
`;

const Text = styled.p`
  word-wrap: break-word;
  font-weight: 600;
  font-size: 1em;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 16px;
  border-radius: 8px;
  background: var(--black-350);
  width: 200px;
  border: none;
`;

const ContactForm = (props) => {
  const handleSubmit = (e) => {
    console.log("Submit Contact e: ", e);
    // const data = {
    //   full_name: e.name,
    //   email: e.email,
    //   phone: e.phone,
    //   subject: e.subject,
    //   message: e.message,
    // }
    // props.submitContact(data);
  };

  return (
    <Container>
      <Text>Deixe uma mensagem e entraremos em contato</Text>
      <Form onFinish={handleSubmit} method="POST">
        <Form.Item>
          <Input
            placeholder="Nome completo"
            name="full_name"
            // onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            type="email"
            placeholder="Seu email"
            name="email"
            // onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Numero de Telefone"
            name="phone"
            // onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Input
            placeholder="Assunto"
            name="subject"
            // onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <TextArea
            placeholder="Sua mensagem"
            name="message"
            // onChange={handleChange}
          />
        </Form.Item>
        <Button>Entrar em Contacto</Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
