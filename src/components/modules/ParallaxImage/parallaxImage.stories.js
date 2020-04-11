import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";
import ParallaxImage from "../ParallaxImage";
import Text from "../../elements/Text";
import Button from "../../elements/Button";

storiesOf("Modules/ParallaxImage", module).add("default", () => (
  <ThemeProvider theme={theme}>
    <ParallaxImage img="url('http://launchkit.mediumra.re/img/hero10.jpg')">
      <Text color="#FFF" fontWeight="900" fontSize={4} textAlign="center">
        Build better landing pages
      </Text>
      <Text color="#FFF" fontWeight="normal" fontSize={3} textAlign="center">
        Start today with a free 30 day trial - No credit card required.
      </Text>
      <Button bigButton>Buy Launchkit</Button>
    </ParallaxImage>
  </ThemeProvider>
));
