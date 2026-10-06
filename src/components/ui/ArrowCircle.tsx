import React from "react";

export default function ArrowCircle({
  style,
}: {
  style?: React.CSSProperties;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      style={style}
      viewBox="0 0 40 40"
    >
      <g filter="url(#filter0_i_14_244)">
        <circle cx="20" cy="20" r="20" fill="#F7F8F8"></circle>
      </g>
      <circle
        cx="20"
        cy="20"
        r="19.4"
        stroke="url(#paint0_linear_14_244)"
        strokeWidth="1.2"
      ></circle>
      <path
        fill="url(#paint1_linear_14_244)"
        fillRule="evenodd"
        d="M18.53 13.47a.75.75 0 0 1 0 1.06l-4.72 4.72H28a.75.75 0 0 1 0 1.5H13.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0"
        clipRule="evenodd"
      ></path>
      <defs>
        <linearGradient
          id="paint0_linear_14_244"
          x1="13.065"
          x2="25.904"
          y1="2.358"
          y2="40"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#BAC8D1"></stop>
        </linearGradient>
        <linearGradient
          id="paint1_linear_14_244"
          x1="30.313"
          x2="9.857"
          y1="9.098"
          y2="31.732"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#02ADF7"></stop>
          <stop offset="1" stopColor="#26E05A"></stop>
        </linearGradient>
        <filter
          id="filter0_i_14_244"
          width="44"
          height="44"
          x="-4"
          y="-4"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-4" dy="-4"></feOffset>
          <feGaussianBlur stdDeviation="3"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0.729412 0 0 0 0 0.784314 0 0 0 0 0.819608 0 0 0 0.3 0"></feColorMatrix>
          <feBlend in2="shape" result="effect1_innerShadow_14_244"></feBlend>
        </filter>
      </defs>
    </svg>
  );
}
