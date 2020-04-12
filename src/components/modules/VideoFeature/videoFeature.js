import React from "react";
import Flex from "../../elements/Flex";
import Box from "../../elements/Box";
import Text from "../../elements/Text";
import Video from "../../elements/Video";

const VideoFeature = ({ url, title, children, ...props }) => {
  const { reverse } = props;
  const direction = reverse ? "row-reverse" : "row"
  const directionText = reverse ? "right" : "left"
  return (
    <Flex
      justifyContent={["", "", "space-around"]}
      flexDirection={["column", "column", direction]}
      alignItems="center"
    >
        <Video url={url} />
        <Box width={['100%', '100%', '100%']} p={5}>
            <Text fontWeight="normal" fontSize="21px" textAlign={["center", "center", directionText]}>
                {title}
            </Text>
            <Text textAlign={["center", "center", directionText]} color="#888888">
                {children}
            </Text>
        </Box>
    </Flex>
  );
};

export default VideoFeature;
