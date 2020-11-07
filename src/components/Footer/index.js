import React from "react";
// import { Link } from "react-router-dom";
import { FaPhoneAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

import { Container, Location, Item, ListContainer, Services } from "./styles";

export const Footer = (props) => {
  let date = new Date().getFullYear();

  return (
    <Container>
      {/* <Img
        src={require("../../images/w-b-logo3.jpg")}
        alt="Skyline Footer Logo"
      /> */}
      <ListContainer>
        <Services>
          <li>COMPANY SECRETARIAL SERVICES</li>
          <li>STATUTORY REPORTING SERVICES</li>
          <li>REPORTING SERVICES</li>
        </Services>
        <Services>
          <li>OUTSOURCING YOUR FINANCE</li>
          <li>FINANCIAL MANAGEMENT</li>
          <li>TRUSTED BUSINESS ADVISOR</li>
        </Services>
      </ListContainer>
      <ListContainer>
        <Location>
          <Item>
            <FaMapMarkerAlt />
            Location
          </Item>
          <Item>Luanda, Angola</Item>
          <Item>Camama, New World</Item>
        </Location>
        <Location>
          <Item>
            <FaPhoneAlt />
            Contact
          </Item>
          <Item>Phone 1: +244 946334643</Item>
          <Item>Phone 2: +244 946334642</Item>
          <Item>Email: dedaldino@admin.skyline.com</Item>
        </Location>
        <Location>
          <Item>
            <FaClock />
            Working Time
          </Item>
          <Item>From Monday at Friday</Item>
          <Item>From 8h a.m at 4h p.m</Item>
        </Location>
      </ListContainer>
      <span className="copyright">
        Copyright © {date} All rights reserved. Builded by dedaldino3D
      </span>
    </Container>
  );
};

export default Footer;
