import { Show, createSignal } from "solid-js";

import { css } from "solid-styled-components";

import { generateData, SIZE } from "./avatar-beam.utils";

function AvatarBeam(props) {
  function data() {
    return generateData(props.name, props.colors);
  }

  return (
    <svg
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={"0 0 " + SIZE + " " + SIZE}
      width={props.size}
      height={props.size}
    >
      <Show when={props.title}>
        <title>{props.name}</title>
      </Show>
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
        <rect width={SIZE} height={SIZE} fill={data().backgroundColor}></rect>
        <rect
          x="0"
          y="0"
          width={SIZE}
          height={SIZE}
          transform={
            "translate(" +
            data().wrapperTranslateX +
            " " +
            data().wrapperTranslateY +
            ") rotate(" +
            data().wrapperRotate +
            " " +
            SIZE / 2 +
            " " +
            SIZE / 2 +
            ") scale(" +
            data().wrapperScale +
            ")"
          }
          fill={data().wrapperColor}
          rx={data().isCircle ? SIZE : SIZE / 6}
        ></rect>
        <g
          transform={
            "translate(" +
            data().faceTranslateX +
            " " +
            data().faceTranslateY +
            ") rotate(" +
            data().faceRotate +
            " " +
            SIZE / 2 +
            " " +
            SIZE / 2 +
            ")"
          }
        >
          <Show
            fallback={
              <path
                d={"M13," + (19 + data().mouthSpread) + " a1,0.75 0 0,0 10,0"}
                fill={data().faceColor}
              ></path>
            }
            when={data().isMouthOpen}
          >
            <path
              fill="none"
              strokeLinecap="round"
              d={"M15 " + (19 + data().mouthSpread) + "c2 1 4 1 6 0"}
              stroke={data().faceColor}
            ></path>
          </Show>
          <rect
            stroke="none"
            x={14 - data().eyeSpread}
            y={14}
            width={1.5}
            height={2}
            rx={1}
            fill={data().faceColor}
          ></rect>
          <rect
            stroke="none"
            x={20 + data().eyeSpread}
            y={14}
            width={1.5}
            height={2}
            rx={1}
            fill={data().faceColor}
          ></rect>
        </g>
      </g>
    </svg>
  );
}

export default AvatarBeam;
