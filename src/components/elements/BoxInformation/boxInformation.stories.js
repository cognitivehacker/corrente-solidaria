import React from "react";
import { storiesOf } from "@storybook/react";
import BoxInformation from "./boxInformation";

storiesOf("Elements/BoxInformation", module).add("default", () => (
  <BoxInformation
    title="Riding Solo"
    value="R$ 19"
    text="Single use licence perfect for freelancers."
  />
));
