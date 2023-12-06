import React from 'react';
import theme from '../../styles/theme';
const { colors } = theme

const IconLogo = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)"></g>
      <path
        stroke={colors.white}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
             L 11, 27
             L 11, 72
             L 50, 95
             L 89, 73
             L 89, 28 z"
      />
    </g>
    <text x="30" y="70" fill={colors.lightestSlate} fontSize="55px" fontFamily="Consolas">
      G
    </text>
  </svg>
);

export default IconLogo;
