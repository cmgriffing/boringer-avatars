// GENERATED BY MITOSIS

import { SIZE, generateColors } from "./avatar-sunset.utils";
import { Fragment, component$, h } from "@builder.io/qwik";
export const formattedName = function formattedName(props, state) {
  return props.name.replace(/\s/g, "");
};
export const sunsetColors = function sunsetColors(props, state) {
  return generateColors(props.name, props.colors);
};
export const getPaintFill0 = function getPaintFill0(props, state) {
  return "url(#gradient_paint0_linear_" + formattedName(props, state) + ")";
};
export const getPaintFill1 = function getPaintFill1(props, state) {
  return "url(#gradient_paint1_linear_" + formattedName(props, state) + ")";
};
export const getPaintId0 = function getPaintId0(props, state) {
  return "gradient_paint0_linear_" + formattedName(props, state);
};
export const getPaintId1 = function getPaintId1(props, state) {
  return "gradient_paint1_linear_" + formattedName(props, state);
};
export const AvatarSunset = component$((props) => {
  const state = {};
  return (
    <svg
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={"0 0 " + SIZE + " " + SIZE}
      width={props.size}
      height={props.size}
    >
      {props.title ? <title>{props.name}</title> : null}
      <mask
        id="mask__sunset"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={SIZE}
        height={SIZE}
      >
        <rect
          fill="#FFFFFF"
          width={SIZE}
          height={SIZE}
          rx={props.square ? undefined : SIZE * 2}
        ></rect>
      </mask>
      <g mask="url(#mask__sunset)">
        <path d="M0 0h80v40H0z" fill={getPaintFill0(props, state)}></path>
        <path d="M0 40h80v40H0z" fill={getPaintFill1(props, state)}></path>
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={getPaintId0(props, state)}
          x1={SIZE / 2}
          y1={0}
          x2={SIZE / 2}
          y2={SIZE / 2}
        >
          <stop stop-color={sunsetColors(props, state)[0]}></stop>
          <stop offset={1} stop-color={sunsetColors(props, state)[1]}></stop>
        </linearGradient>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={getPaintId1(props, state)}
          x1={SIZE / 2}
          y1={SIZE / 2}
          x2={SIZE / 2}
          y2={SIZE}
        >
          <stop stop-color={sunsetColors(props, state)[2]}></stop>
          <stop offset={1} stop-color={sunsetColors(props, state)[3]}></stop>
        </linearGradient>
      </defs>
    </svg>
  );
});
export default AvatarSunset;