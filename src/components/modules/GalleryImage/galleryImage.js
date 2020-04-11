import React from "react";
import Box from "../../elements/Box";
import CollectionImage from "../../elements/CollectionImage";
import Flex from "../../elements/Flex";
import Text from "../../elements/Text";

const GalleryImage = () => (
  <Box>
    <Text textAlign="center" fontWeight="normal" fontSize="18px">
      Launchkit is a neat, feature-rich landing page template designed to
      showcase your product or service in style.
    </Text>
    <Text textAlign="center" color="#888888">
      With multiple options for all sections - Launchkit has the right stuff for
      your next landing page.
    </Text>
    <Flex
      justifyContent={["", "", "space-around"]}
      flexDirection={["column", "column", "row"]}
      mt={2}
    >
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
  </Box>
);

export default GalleryImage;
