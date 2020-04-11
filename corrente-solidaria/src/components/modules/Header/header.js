import React from "react";
import styled from "styled-components";
import { theme } from "styled-tools";
import Flex from "../../elements/Flex";
import Box from "../../elements/Box";
import Button from "../../elements/Button";
import Text from "../../elements/Text";

const Container = styled(Flex)`
  background-color: ${theme("colors.backgrounds.primary.gray")};
`;

const Header = () => (
  <header>
    <Container justifyContent="space-between" alignItems="center" p={2}>
      <Box>
        <Text fontWeight="900">Projeto Solitário</Text>
      </Box>
      <Box>
        <Button borderRadios>Teste</Button>
      </Box>
    </Container>
  </header>
);

export default Header;
