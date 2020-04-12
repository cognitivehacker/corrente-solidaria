import React from "react";
import { storiesOf } from "@storybook/react";
import Video from "../Video";
import Flex from "../Flex";

storiesOf("Elements/Video", module)
  .add("default", () => (
    <Video url='https://www.youtube.com/watch?v=mhtC2tqdhwU'/>
  ));
