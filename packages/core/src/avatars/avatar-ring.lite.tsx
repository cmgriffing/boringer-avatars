import { useStore } from "@builder.io/mitosis";
import type { AvatarProps } from "../avatar.utils";
import { defaultAvatarProps } from "../avatar.utils";
import { generateColors, SIZE } from "./avatar-ring.utils";

export default function AvatarRing(props: Omit<AvatarProps, "variant">) {
  const state: any = useStore<any>({
    ringColors: (name: string, colors: string[]) => {
      return generateColors(colors, name);
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
      {props.title && <title>{props.name}</title>}
      <mask
        id="mask__ring"
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
      <g mask="url(#mask__ring)">
        <path
          d="M0 0h90v45H0z"
          fill={state.ringColors(props.name, props.colors)[0]}
        />
        <path
          d="M0 45h90v45H0z"
          fill={state.ringColors(props.name, props.colors)[1]}
        />
        <path
          d="M83 45a38 38 0 00-76 0h76z"
          fill={state.ringColors(props.name, props.colors)[2]}
        />
        <path
          d="M83 45a38 38 0 01-76 0h76z"
          fill={state.ringColors(props.name, props.colors)[3]}
        />
        <path
          d="M77 45a32 32 0 10-64 0h64z"
          fill={state.ringColors(props.name, props.colors)[4]}
        />
        <path
          d="M77 45a32 32 0 11-64 0h64z"
          fill={state.ringColors(props.name, props.colors)[5]}
        />
        <path
          d="M71 45a26 26 0 00-52 0h52z"
          fill={state.ringColors(props.name, props.colors)[6]}
        />
        <path
          d="M71 45a26 26 0 01-52 0h52z"
          fill={state.ringColors(props.name, props.colors)[7]}
        />
        <circle
          cx={45}
          cy={45}
          r={23}
          fill={state.ringColors(props.name, props.colors)[8]}
        />
      </g>
    </svg>
  );
}
