import React, { useState } from "react";
import styled from "styled-components";
import Flex from "../Flex";
import Text from "../Text";

const Container = styled(Flex)`
  border: 1px solid #6dc77a;
  border-radius: 3px;
  background-color: transparent;
  :hover {
    background-color: #6dc77a;
  }
`;

const Title = styled(Text)`
  text-transform: uppercase;
`;

const BoxInformation = ({ title, text, value }) => {
  const [color, setColor] = useState("#888888");
  const [colorText, setColorText] = useState("#6dc77a");
  return (
    <Container
      flexDirection="column"
      alignItems="center"
      alignContent="center"
      width="100%"
      onMouseOver={() => {
        setColor("#FFF");
        setColorText("#FFF");
      }}
      onMouseOut={() => {
        setColor("#888888");
        setColorText("#6dc77a");
      }}
    >
      <Title color={color} textAlign="center">{title}</Title>
      <Text color={colorText} fontWeight="900" fontSize={7} textAlign="center">
        {value}
      </Text>
      <Text color={color} textAlign="center">{text}</Text>
    </Container>
  );
};

export default BoxInformation;
