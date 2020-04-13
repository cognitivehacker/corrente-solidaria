import React from "react";
import Flex from "../../elements/Flex";
import BoxInformation from "../../elements/BoxInformation";
const GaleryInformation = () => (
  <Flex
    flexDirection={["column", "column", "row"]}
    justifyContent="center"
    alignItems="center"
  >
    <BoxInformation
      title="Riding Solo"
      value="R$ 19"
      text="Single use licence perfect for freelancers."
    />
    <BoxInformation
      title="Team Effort"
      value="R$ 49"
      text="Up to 5 licences Great for small studios."
    />
    <BoxInformation
      title="Big Business"
      value="R$ 79"
      text="Up to 20 licences. Suitable for large businesses."
    />
    <BoxInformation
      title="Megacorp"
      value="R$ 19"
      text="Up to 50 licences. Made for multi-nationals."
    />
  </Flex>
);

export default GaleryInformation;
