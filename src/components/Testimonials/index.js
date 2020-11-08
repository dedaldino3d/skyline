import React from "react";

import ScrollAnimation from "../ScrollAnimation";
import {
  Container,
  Testimonial,
  AvatarMonial,
  HeaderMonial,
  Text,
  Header,
} from "./styles";

export const Testimonials = (props) => {
  return (
    <Container>
      <Header>
        AJUDAMOS EMPRESAS COMO A SUA A ORGANIZAR A CONTABILIDADE TODOS OS DIAS
      </Header>
      <ScrollAnimation
        animateIn="animate__zoomInUp"
        animateOut="animate__zoomOutDown"
      >
        <Testimonial>
          <AvatarMonial src={require("../../images/sky-logo.jpg")} />
          <HeaderMonial>Skyline Tecnologies</HeaderMonial>
          <Text>
            A parceria com a Valiant foi uma das melhores decisões que já
            tomamos. Com o financiamento que obtivemos, agora temos
            flexibilidade para fazer a empresa crescer exatamente da maneira que
            desejamos.
          </Text>
        </Testimonial>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__zoomInUp"
        animateOut="animate__zoomOutDown"
      >
        <Testimonial>
          <AvatarMonial src={require("../../images/renee_lowe.jpg")} />
          <HeaderMonial>Renee Lowe</HeaderMonial>
          <Text>
            A parceria com a Valiant foi uma das melhores decisões que já
            tomamos. Com o financiamento que obtivemos, agora temos
            flexibilidade para fazer a empresa crescer exatamente da maneira que
            desejamos.
          </Text>
        </Testimonial>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__zoomInUp"
        animateOut="animate__zoomOutDown"
      >
        <Testimonial>
          <AvatarMonial src={require("../../images/3D.jpg")} />
          <HeaderMonial>Big Programmer</HeaderMonial>
          <Text>
            A parceria com a Valiant foi uma das melhores decisões que já
            tomamos. Com o financiamento que obtivemos, agora temos
            flexibilidade para fazer a empresa crescer exatamente da maneira que
            desejamos.
          </Text>
        </Testimonial>
      </ScrollAnimation>
      <ScrollAnimation
        animateIn="animate__zoomInUp"
        animateOut="animate__zoomOutDown"
      >
        <Testimonial>
          <AvatarMonial src={require("../../images/jonathan_rowley.jpg")} />
          <HeaderMonial>Jonathan Rowley</HeaderMonial>
          <Text>
            A parceria com a Valiant foi uma das melhores decisões que já
            tomamos. Com o financiamento que obtivemos, agora temos
            flexibilidade para fazer a empresa crescer exatamente da maneira que
            desejamos.
          </Text>
        </Testimonial>
      </ScrollAnimation>
    </Container>
  );
};

export default Testimonials;
