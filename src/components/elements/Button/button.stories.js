import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../../../common/theme";

import Button from "../Button";

storiesOf("Elements/Button", module)
  .add("default", () => (
  <ThemeProvider theme={theme}>
    <Button>Hello Button</Button>
  </ThemeProvider>
)).add("Border Radios", () => (
  <ThemeProvider theme={theme}>
    <Button borderRadios>Hello Button</Button>
  </ThemeProvider>
)).add("Big Button", () => (
  <ThemeProvider theme={theme}>
    <Button bigButton>Hello Button</Button>
  </ThemeProvider>
));
