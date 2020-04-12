import React from "react";
import ReactPlayer from 'react-player'

const Video = ({url}) => (
  <>
    <ReactPlayer 
      url={url}
      width='100%'
    />
  </>
);

export default Video;
