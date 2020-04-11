import React from "react";
import { storiesOf } from "@storybook/react";
import CollectionImage from "../CollectionImage";
import Flex from "../Flex";

storiesOf("Elements/CollectionImage", module)
  .add("default", () => (
    <CollectionImage
      img="http://launchkit.mediumra.re/img/small7.jpg"
      title="Unique, Engaging Style"
    >
      Launchkit has a bright, flexible persona that can be adapted to suit
      almost any use. Use Launchkit to sell or create a simple business website.
    </CollectionImage>
  ))
  .add("two images", () => (
    <Flex justifyContent={["", "", "space-around"]} flexDirection={["column", "column", "row"]}>
      <CollectionImage
        img="http://launchkit.mediumra.re/img/small7.jpg"
        title="Unique, Engaging Style"
      >
        Launchkit has a bright, flexible persona that can be adapted to suit
        almost any use. Use Launchkit to sell or create a simple business
        website.
      </CollectionImage>
      <CollectionImage
        img="http://launchkit.mediumra.re/img/small8.jpg"
        title="Built for mobile and up"
      >
        Tested comprehensively on a number of mobile devices, Launchkit is well
        prepared to impress your mobile audience.
      </CollectionImage>
    </Flex>
  ))
  .add("three images", () => (
    <Flex justifyContent={["", "", "space-around"]} flexDirection={["column", "column", "row"]}>
      <CollectionImage
        img="http://launchkit.mediumra.re/img/small7.jpg"
        title="Unique, Engaging Style"
      >
        Launchkit has a bright, flexible persona that can be adapted to suit
        almost any use. Use Launchkit to sell or create a simple business
        website.
      </CollectionImage>
      <CollectionImage
        img="http://launchkit.mediumra.re/img/small8.jpg"
        title="Built for mobile and up"
      >
        Tested comprehensively on a number of mobile devices, Launchkit is well
        prepared to impress your mobile audience.
      </CollectionImage>
      <CollectionImage
        img="http://launchkit.mediumra.re/img/small6.jpg"
        title="Variant Builder included"
      >
        Themeforest's most popular HTML page builder just keeps getting better,
        Smart controls and font options give you complete control.
      </CollectionImage>
    </Flex>
  ));
