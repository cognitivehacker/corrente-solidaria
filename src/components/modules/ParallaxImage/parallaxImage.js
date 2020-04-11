import React from "react";
import styled from "styled-components";
import { backgroundImage } from 'styled-system'
import Flex from "../../elements/Flex";

const Container = styled(Flex)`
  height: 300px;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.8;
  ${backgroundImage}
`;

const ParallaxImage = ({img, children}) => (
  <Container
    flexDirection={"column"}
    alignItems="center"
    justifyContent={"center"}
    backgroundImage={img}
  >
    {children}
  </Container>
);

export default ParallaxImage;
