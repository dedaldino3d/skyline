import React from "react";
import {
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import {
  Container,
  Location,
  Item,
  ListContainer,
  Services,
  Social,
  SocialItem,
} from "./styles";

export const Footer = (props) => {
  let date = new Date().getFullYear();

  return (
    <Container>
      <ListContainer>
        <Services>
          <h4>Serviços</h4>
          <li>Company secretatarial services</li>
          <li>Statutory reporting services</li>
          <li>Outsourcing your finance</li>
          <li>Financial management</li>
          <li>Trusted business advisor</li>
        </Services>
        <Services>
          <h4>Saber mais</h4>
          <li>Perguntas frequentes</li>
          <li>Programa de Parceria</li>
        </Services>
        <Services>
          <h4>Skyline</h4>
          <li>Sobre nós</li>
          <li>Conheça o time</li>
          <li>Contacte-nos</li>
          <li>Carreiras</li>
        </Services>
        <Social>
          <SocialItem>
            <FaFacebook />
          </SocialItem>
          <SocialItem>
            <FaInstagram />
          </SocialItem>
          <SocialItem>
            <FaTwitter />
          </SocialItem>
        </Social>
      </ListContainer>
      <ListContainer>
        <Location>
          <Item>
            <FaMapMarkerAlt />
            Localização
          </Item>
          <Item>Luanda, Angola</Item>
          <Item>Camama, Mundo Novo</Item>
        </Location>
        <Location>
          <Item>
            <FaPhoneAlt />
            Contacto
          </Item>
          <Item>Telefone 1: +244 946334643</Item>
          <Item>Telefone 2: +244 946334642</Item>
          <Item>Email: dedaldino@admin.skyline.com</Item>
        </Location>
        <Location>
          <Item>
            <FaClock />
            Hora de Trabalho
          </Item>
          <Item>Segunda à Sexta</Item>
          <Item>8h a.m às 4h p.m</Item>
        </Location>
      </ListContainer>
      <span className="copyright">
        Copyright © {date} Todos direitos reservados. Builded by dedaldino3D
      </span>
    </Container>
  );
};

export default Footer;
