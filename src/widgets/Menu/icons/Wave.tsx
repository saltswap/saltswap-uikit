import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 24 15" {...props}>
    <g fillRule="nonzero" fill="none">
      <path
        d="M0 14.777s4.667-.341 6.375-3.984C8.083 7.15 7.798.035 16.108.035c1.822 0 3.818.862 4.91 1.622 5.478 3.814 2.888 11.64-3.544 9.634 0 0 2.334-.1 2.334-3.173 0-3.074-3.848-3.53-4.44-.968-.421 1.825-.17 7.343 7.855 7.627"
        fill="#88E2DB"
      />
      <path
        d="M17.474 11.291c1.992 0 5.891-3.088 3.526-6.768-1.654-2.573-6.172-3.093-9.388.123C8.399 7.858 10.298 14.082.03 14.775c.4-.037 4.718-.51 6.345-3.982C8.083 7.15 7.798.035 16.108.035c1.822 0 3.817.862 4.91 1.622 5.478 3.814 2.888 11.64-3.544 9.634z"
        fill="#A5F2EA"
      />
      <path
        d="M19.06 11.6c4.601-.341 5.9-6.644 1.16-9.943C19.19.941 17.36.134 15.628.044c.157-.006.318-.009.481-.009 1.822 0 3.817.862 4.91 1.622 5.002 3.483 3.277 10.31-1.957 9.943z"
        fill="#C9F7F1"
      />
      <path
        d="M23.223 14.777h-10.64c-1.195-.496-1.668-2.24-1.028-4.838.71-2.886 2.094-4.442 4.155-4.781a3.872 3.872 0 012.811.607c-1.176-.63-2.787-.199-3.153 1.385-.422 1.825-.17 7.343 7.855 7.627z"
        fill="#73C6BE"
      />
    </g>
  </Svg>
);

export default Icon;
