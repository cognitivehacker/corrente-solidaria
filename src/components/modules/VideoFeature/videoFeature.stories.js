import React from "react";
import { storiesOf } from "@storybook/react";
import VideoFeature from "../VideoFeature";

storiesOf("Modules/VideoFeature", module)
  .add("default", () => (
    <VideoFeature
      url="https://www.youtube.com/watch?v=mhtC2tqdhwU"
      title="Build smart, effective landing pages in minutes."
    >
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi 
      architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem.
    </VideoFeature>
  ));
