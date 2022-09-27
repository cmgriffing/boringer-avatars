import * as React from "react";
import { useLocalObservable } from "mobx-react-lite";
import { generateColors, SIZE } from "./avatar-bauhaus.utils";

export default function AvatarBauhaus(props: any) {
  const state = useLocalObservable(() => ({
    get properties() {
      return generateColors(props.name, props.colors);
    },
  }));

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
        id="mask__bauhaus"
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

      <g mask="url(#mask__bauhaus)">
        <rect width={SIZE} height={SIZE} fill={state.properties?.[0]?.color} />

        <rect
          x={(SIZE - 60) / 2}
          y={(SIZE - 20) / 2}
          width={SIZE}
          height={state.properties?.[1]?.isSquare ? SIZE : SIZE / 8}
          fill={state.properties?.[1]?.color}
          transform={
            "translate(" +
            state.properties?.[1]?.translateX +
            " " +
            state.properties?.[1]?.translateY +
            ") rotate(" +
            state.properties?.[1]?.rotate +
            " " +
            SIZE / 2 +
            " " +
            SIZE / 2 +
            ")"
          }
        />

        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          fill={state.properties?.[2]?.color}
          r={SIZE / 5}
          transform={
            "translate(" +
            state.properties?.[2]?.translateX +
            " " +
            state.properties?.[2]?.translateY +
            ")"
          }
        />

        <line
          x1={0}
          y1={SIZE / 2}
          x2={SIZE}
          y2={SIZE / 2}
          strokeWidth={2}
          stroke={state.properties?.[3]?.color}
          transform={
            "translate(" +
            state.properties?.[3]?.translateX +
            " " +
            state.properties?.[3]?.translateY +
            ") rotate(" +
            state.properties?.[3]?.rotate +
            " " +
            SIZE / 2 +
            " " +
            SIZE / 2 +
            ")"
          }
        />
      </g>
    </svg>
  );
}
