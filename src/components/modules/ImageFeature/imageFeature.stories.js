import React from "react";
import { storiesOf } from "@storybook/react";
import ImageFeature from "../ImageFeature";

storiesOf("Modules/ImageFeature", module)
  .add("default", () => (
    <ImageFeature
      img="http://launchkit.mediumra.re/img/ipad2.png"
      title="Build a landing page in a matter of minutes."
    >
      Launchkit ships with over 50 uniquely designed content blocks ready to be
      fitted out with your copy and images. Get a head-start with one of the
      included page demos or start experimenting with your own layouts in
      Variant.
    </ImageFeature>
  ))
  .add("reverse", () => (
    <ImageFeature
      img="http://launchkit.mediumra.re/img/phone1.png"
      title="Variant Page Builder makes editing a breeze."
      reverse
    >
      With over 50 content blocks to choose from, the perfect layout is now even
      easier to achieve. Make visual adjustments on-the-fly to establish a
      unique look for your website with minimal effort.
    </ImageFeature>
  ));
