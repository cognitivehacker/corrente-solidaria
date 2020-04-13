import React from "react";
import Flex from "../../elements/Flex";
import Facebook from "../../elements/Icons/Facebook";
import Instagram from "../../elements/Icons/Instagram";
import Twitter from "../../elements/Icons/Twitter";

const GallerySocialIcons = () => (
  <Flex bg="#f6f8fa" alignItems="center" justifyContent="space-around" p={4}>
    <a href="#">
      <Facebook width="30px" height="30px" fill="#888888" />
    </a>
    <a href="#">
      <Instagram width="30px" height="30px" fill="#888888" />
    </a>
    <a href="#">
      <Twitter width="30px" height="30px" fill="#888888" />
    </a>
  </Flex>
);

export default GallerySocialIcons;
