// GENERATED BY MITOSIS

import { SIZE, generateColors } from "./avatar-pixel.utils";
import { Fragment, component$, h } from "@builder.io/qwik";
export const pixelColors = function pixelColors(props, state, name, colors) {
  return generateColors(name, colors);
};
export const AvatarPixel = component$((props) => {
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
      {props.hasTitle ? <title>{props.name}</title> : null}
      <mask
        id="mask__pixel"
        mask-type="alpha"
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
      <g mask="url(#mask__pixel)">
        <rect
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[0]}
        ></rect>
        <rect
          x={20}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[1]}
        ></rect>
        <rect
          x={40}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[2]}
        ></rect>
        <rect
          x={60}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[3]}
        ></rect>
        <rect
          x={10}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[4]}
        ></rect>
        <rect
          x={30}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[5]}
        ></rect>
        <rect
          x={50}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[6]}
        ></rect>
        <rect
          x={70}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[7]}
        ></rect>
        <rect
          y={10}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[8]}
        ></rect>
        <rect
          y={20}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[9]}
        ></rect>
        <rect
          y={30}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[10]}
        ></rect>
        <rect
          y={40}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[11]}
        ></rect>
        <rect
          y={50}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[12]}
        ></rect>
        <rect
          y={60}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[13]}
        ></rect>
        <rect
          y={70}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[14]}
        ></rect>
        <rect
          x={20}
          y={10}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[15]}
        ></rect>
        <rect
          x={20}
          y={20}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[16]}
        ></rect>
        <rect
          x={20}
          y={30}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[17]}
        ></rect>
        <rect
          x={20}
          y={40}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[18]}
        ></rect>
        <rect
          x={20}
          y={50}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[19]}
        ></rect>
        <rect
          x={20}
          y={60}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[20]}
        ></rect>
        <rect
          x={20}
          y={70}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[21]}
        ></rect>
        <rect
          x={40}
          y={10}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[22]}
        ></rect>
        <rect
          x={40}
          y={20}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[23]}
        ></rect>
        <rect
          x={40}
          y={30}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[24]}
        ></rect>
        <rect
          x={40}
          y={40}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[25]}
        ></rect>
        <rect
          x={40}
          y={50}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[26]}
        ></rect>
        <rect
          x={40}
          y={60}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[27]}
        ></rect>
        <rect
          x={40}
          y={70}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[28]}
        ></rect>
        <rect
          x={60}
          y={10}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[29]}
        ></rect>
        <rect
          x={60}
          y={20}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[30]}
        ></rect>
        <rect
          x={60}
          y={30}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[31]}
        ></rect>
        <rect
          x={60}
          y={40}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[32]}
        ></rect>
        <rect
          x={60}
          y={50}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[33]}
        ></rect>
        <rect
          x={60}
          y={60}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[34]}
        ></rect>
        <rect
          x={60}
          y={70}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[35]}
        ></rect>
        <rect
          x={10}
          y={10}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[36]}
        ></rect>
        <rect
          x={10}
          y={20}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[37]}
        ></rect>
        <rect
          x={10}
          y={30}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[38]}
        ></rect>
        <rect
          x={10}
          y={40}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[39]}
        ></rect>
        <rect
          x={10}
          y={50}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[40]}
        ></rect>
        <rect
          x={10}
          y={60}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[41]}
        ></rect>
        <rect
          x={10}
          y={70}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[42]}
        ></rect>
        <rect
          x={30}
          y={10}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[43]}
        ></rect>
        <rect
          x={30}
          y={20}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[44]}
        ></rect>
        <rect
          x={30}
          y={30}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[45]}
        ></rect>
        <rect
          x={30}
          y={40}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[46]}
        ></rect>
        <rect
          x={30}
          y={50}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[47]}
        ></rect>
        <rect
          x={30}
          y={60}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[48]}
        ></rect>
        <rect
          x={30}
          y={70}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[49]}
        ></rect>
        <rect
          x={50}
          y={10}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[50]}
        ></rect>
        <rect
          x={50}
          y={20}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[51]}
        ></rect>
        <rect
          x={50}
          y={30}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[52]}
        ></rect>
        <rect
          x={50}
          y={40}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[53]}
        ></rect>
        <rect
          x={50}
          y={50}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[54]}
        ></rect>
        <rect
          x={50}
          y={60}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[55]}
        ></rect>
        <rect
          x={50}
          y={70}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[56]}
        ></rect>
        <rect
          x={70}
          y={10}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[57]}
        ></rect>
        <rect
          x={70}
          y={20}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[58]}
        ></rect>
        <rect
          x={70}
          y={30}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[59]}
        ></rect>
        <rect
          x={70}
          y={40}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[60]}
        ></rect>
        <rect
          x={70}
          y={50}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[61]}
        ></rect>
        <rect
          x={70}
          y={60}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[62]}
        ></rect>
        <rect
          x={70}
          y={70}
          width={10}
          height={10}
          fill={pixelColors(props, state, props.name, props.colors)[63]}
        ></rect>
      </g>
    </svg>
  );
});
export default AvatarPixel;
