import React from "react";
import styled from "styled-components";
import { typography, space, color, flex } from "styled-system";

const Container = styled.p`
  ${typography}
  ${space}
  ${color}
  ${flex}
  ::selection{
    background-color: #6dc77a;
  }
`;

const Text = ({ children, ...props }) => (
  <Container {...props}>{children}</Container>
);

export default Text;
