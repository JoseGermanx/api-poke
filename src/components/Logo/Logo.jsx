import React from 'react';
import styled from 'styled-components';
import logo from "../../assets/images/pokebola.png";

const Image = styled.img`
  width: 50px;
`;

const Logo = () => (
  <Image src={logo} />
);

export default Logo;