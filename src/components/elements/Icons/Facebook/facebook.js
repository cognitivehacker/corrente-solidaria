import React, { useState } from "react";

const Logo = ({ width, height, fill }) => {
  const [color, setColor] = useState(fill);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      version="1.1"
      onMouseOver={() => {
        setColor("blue");
      }}
      onMouseOut={() => {
        setColor(fill);
      }}
    >
      <g>
        <path
          fill={color}
          d="M 22.300781 23.578125 C 23.003906 23.578125 23.578125 23.003906 23.578125 22.300781 L 23.578125 1.691406 C 23.578125 0.984375 23.003906 0.414062 22.300781 0.414062 L 1.691406 0.414062 C 0.984375 0.414062 0.414062 0.984375 0.414062 1.691406 L 0.414062 22.300781 C 0.414062 23.003906 0.984375 23.578125 1.691406 23.578125 Z M 22.300781 23.578125 "
        />
        <path
          fill="#FFF"
          d="M 16.394531 23.578125 L 16.394531 14.605469 L 19.40625 14.605469 L 19.859375 11.109375 L 16.394531 11.109375 L 16.394531 8.878906 C 16.394531 7.867188 16.675781 7.175781 18.128906 7.175781 L 19.980469 7.175781 L 19.980469 4.050781 C 19.660156 4.007812 18.5625 3.910156 17.28125 3.910156 C 14.613281 3.910156 12.785156 5.539062 12.785156 8.53125 L 12.785156 11.109375 L 9.765625 11.109375 L 9.765625 14.605469 L 12.785156 14.605469 L 12.785156 23.578125 Z M 16.394531 23.578125 "
        />
      </g>
    </svg>
  );
};

export default Logo;