import React from "react";
import styled from "styled-components";
import Box from "../Box";
import Text from "../Text";

const Img = styled.img`
  width: 100%;
`;
const CollectionImage = ({ img, title, children }) => (
  <Box p={2}>
    <Img src={img} />
    <Text fontWeight="900" textAlign="center">
      {title}
    </Text>
    <Text textAlign="center" color="#888888">
      {children}
    </Text>
  </Box>
);

export default CollectionImage;
