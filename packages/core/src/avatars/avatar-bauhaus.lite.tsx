import { useStore } from "@builder.io/mitosis";
import type { AvatarProps } from "../avatar.utils";
import { defaultAvatarProps } from "../avatar.utils";
import { generateColors, SIZE } from "./avatar-bauhaus.utils";

export default function AvatarBauhaus(props: Omit<AvatarProps, "variant">) {
  const state: any = useStore<any>({
    properties: (name: string, colors: string[]) => {
      return generateColors(name, colors);
    },
    getSquareTransform: () => {
      return (
        "translate(" +
        state.properties(props.name, props.colors)?.[1]?.translateX +
        " " +
        state.properties(props.name, props.colors)?.[1]?.translateY +
        ") rotate(" +
        state.properties(props.name, props.colors)?.[1]?.rotate +
        " " +
        SIZE / 2 +
        " " +
        SIZE / 2 +
        ")"
      );
    },
    getCircleTransform() {
      return (
        "translate(" +
        state.properties(props.name, props.colors)?.[2]?.translateX +
        " " +
        state.properties(props.name, props.colors)?.[2]?.translateY +
        ")"
      );
    },
    getLineTransform() {
      return (
        "translate(" +
        state.properties(props.name, props.colors)?.[3]?.translateX +
        " " +
        state.properties(props.name, props.colors)?.[3]?.translateY +
        ") rotate(" +
        state.properties(props.name, props.colors)?.[3]?.rotate +
        " " +
        SIZE / 2 +
        " " +
        SIZE / 2 +
        ")"
      );
    },
  });

  return (
    <svg
      viewBox={"0 0 " + SIZE + " " + SIZE}
      fill="none"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
    >
      {props.hasTitle && <title>{props.name}</title>}
      <mask
        id="mask__bauhaus"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={SIZE}
        height={SIZE}
      >
        <rect
          width={SIZE}
          height={SIZE}
          rx={props.square ? undefined : SIZE * 2}
          fill="#FFFFFF"
        />
      </mask>
      <g mask="url(#mask__bauhaus)">
        <rect
          width={SIZE}
          height={SIZE}
          fill={state.properties(props.name, props.colors)?.[0]?.color}
        />
        <rect
          x={(SIZE - 60) / 2}
          y={(SIZE - 20) / 2}
          width={SIZE}
          height={
            state.properties(props.name, props.colors)?.[1]?.isSquare
              ? SIZE
              : SIZE / 8
          }
          fill={state.properties(props.name, props.colors)?.[1]?.color}
          transform={state.getSquareTransform()}
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          fill={state.properties(props.name, props.colors)?.[2]?.color}
          r={SIZE / 5}
          transform={state.getCircleTransform()}
        />
        <line
          x1={0}
          y1={SIZE / 2}
          x2={SIZE}
          y2={SIZE / 2}
          strokeWidth={2}
          stroke={state.properties(props.name, props.colors)?.[3]?.color}
          transform={state.getLineTransform()}
        />
      </g>
    </svg>
  );
}
