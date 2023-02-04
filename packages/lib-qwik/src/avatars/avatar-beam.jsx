// GENERATED BY MITOSIS

import { SIZE, generateData } from "./avatar-beam.utils";
import { Fragment, component$, h } from "@builder.io/qwik";
export const data = function data(props, state, name, colors) {
  return generateData(name, colors);
};
export const getRectTransform = function getRectTransform(props, state) {
  return (
    "translate(" +
    data(props, state, props.name, props.colors).wrapperTranslateX +
    " " +
    data(props, state, props.name, props.colors).wrapperTranslateY +
    ") rotate(" +
    data(props, state, props.name, props.colors).wrapperRotate +
    " " +
    SIZE / 2 +
    " " +
    SIZE / 2 +
    ") scale(" +
    data(props, state, props.name, props.colors).wrapperScale +
    ")"
  );
};
export const getGroupTransform = function getGroupTransform(props, state) {
  return (
    "translate(" +
    data(props, state, props.name, props.colors).faceTranslateX +
    " " +
    data(props, state, props.name, props.colors).faceTranslateY +
    ") rotate(" +
    data(props, state, props.name, props.colors).faceRotate +
    " " +
    SIZE / 2 +
    " " +
    SIZE / 2 +
    ")"
  );
};
export const getOpenMouthData = function getOpenMouthData(props, state) {
  return (
    "M15 " +
    (19 + data(props, state, props.name, props.colors).mouthSpread) +
    "c2 1 4 1 6 0"
  );
};
export const getClosedMouthData = function getClosedMouthData(props, state) {
  return (
    "M13," +
    (19 + data(props, state, props.name, props.colors).mouthSpread) +
    " a1,0.75 0 0,0 10,0"
  );
};
export const AvatarBeam = component$((props) => {
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
        id="mask__beam"
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
      <g mask="url(#mask__beam)">
        <rect
          width={SIZE}
          height={SIZE}
          fill={data(props, state, props.name, props.colors).backgroundColor}
        ></rect>
        <rect
          x="0"
          y="0"
          width={SIZE}
          height={SIZE}
          transform={getRectTransform(props, state)}
          fill={data(props, state, props.name, props.colors).wrapperColor}
          rx={
            data(props, state, props.name, props.colors).isCircle
              ? SIZE
              : SIZE / 6
          }
        ></rect>
        <g transform={getGroupTransform(props, state)}>
          {data(props, state, props.name, props.colors).isMouthOpen ? (
            <path
              fill="none"
              strokeLinecap="round"
              d={getOpenMouthData(props, state)}
              stroke={data(props, state, props.name, props.colors).faceColor}
            ></path>
          ) : (
            <path
              d={getClosedMouthData(props, state)}
              fill={data(props, state, props.name, props.colors).faceColor}
            ></path>
          )}
          <rect
            stroke="none"
            x={14 - data(props, state, props.name, props.colors).eyeSpread}
            y={14}
            width={1.5}
            height={2}
            rx={1}
            fill={data(props, state, props.name, props.colors).faceColor}
          ></rect>
          <rect
            stroke="none"
            x={20 + data(props, state, props.name, props.colors).eyeSpread}
            y={14}
            width={1.5}
            height={2}
            rx={1}
            fill={data(props, state, props.name, props.colors).faceColor}
          ></rect>
        </g>
      </g>
    </svg>
  );
});
export default AvatarBeam;
