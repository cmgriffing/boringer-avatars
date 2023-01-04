import * as React from "react";
import type { AvatarProps } from "../avatar.utils";
import { defaultAvatarProps } from "../avatar.utils";
import { generateData, SIZE } from "./avatar-beam.utils";

export default function AvatarBeam(props: Omit<AvatarProps, "variant">) {
  function data() {
    return generateData(props.name, props.colors);
  }

  function getRectTransform() {
    return (
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
    );
  }

  function getGroupTransform() {
    return (
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
    );
  }

  function getOpenMouthData() {
    return "M15 " + (19 + data().mouthSpread) + "c2 1 4 1 6 0";
  }

  function getClosedMouthData() {
    return "M13," + (19 + data().mouthSpread) + " a1,0.75 0 0,0 10,0";
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
      {props.title ? <title>{props.name}</title> : null}

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
        />
      </mask>

      <g mask="url(#mask__beam)">
        <rect width={SIZE} height={SIZE} fill={data().backgroundColor} />

        <rect
          x="0"
          y="0"
          width={SIZE}
          height={SIZE}
          transform={getRectTransform()}
          fill={data().wrapperColor}
          rx={data().isCircle ? SIZE : SIZE / 6}
        />

        <g transform={getGroupTransform()}>
          {data().isMouthOpen ? (
            <path
              fill="none"
              strokeLinecap="round"
              d={getOpenMouthData()}
              stroke={data().faceColor}
            />
          ) : (
            <path d={getClosedMouthData()} fill={data().faceColor} />
          )}

          <rect
            stroke="none"
            x={14 - data().eyeSpread}
            y={14}
            width={1.5}
            height={2}
            rx={1}
            fill={data().faceColor}
          />

          <rect
            stroke="none"
            x={20 + data().eyeSpread}
            y={14}
            width={1.5}
            height={2}
            rx={1}
            fill={data().faceColor}
          />
        </g>
      </g>
    </svg>
  );
}
