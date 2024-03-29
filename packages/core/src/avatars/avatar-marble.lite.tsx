import { useStore } from "@builder.io/mitosis";
import type { AvatarProps } from "../avatar.utils";
import { defaultAvatarProps } from "../avatar.utils";
import { SIZE, generateColors } from "./avatar-marble.utils";

export default function AvatarMarble(props: Omit<AvatarProps, "variant">) {
  const state: any = useStore<any>({
    properties: (name: string, colors: string[]) => {
      return generateColors(name, colors);
    },
    getPathOneTransform: () => {
      return (
        "translate(" +
        state.properties(props.name, props.colors)[1].translateX +
        " " +
        state.properties(props.name, props.colors)[1].translateY +
        ") rotate(" +
        state.properties(props.name, props.colors)[1].rotate +
        " " +
        SIZE / 2 +
        " " +
        SIZE / 2 +
        ") scale(" +
        state.properties(props.name, props.colors)[2].scale +
        ")"
      );
    },
    getPathTwoTransform: () => {
      return (
        "translate(" +
        state.properties(props.name, props.colors)[2].translateX +
        " " +
        state.properties(props.name, props.colors)[2].translateY +
        ") rotate(" +
        state.properties(props.name, props.colors)[2].rotate +
        " " +
        SIZE / 2 +
        " " +
        SIZE / 2 +
        ") scale(" +
        state.properties(props.name, props.colors)[2].scale +
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
        id="mask__marble"
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
      <g mask="url(#mask__marble)">
        <rect
          width={SIZE}
          height={SIZE}
          fill={state.properties(props.name, props.colors)[0].color}
        />
        <path
          filter="url(#prefix__filter0_f)"
          d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
          fill={state.properties(props.name, props.colors)[1].color}
          transform={state.getPathOneTransform()}
        />
        <path
          filter="url(#prefix__filter0_f)"
          style={{
            mixBlendMode: "overlay",
          }}
          d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
          fill={state.properties(props.name, props.colors)[2].color}
          transform={state.getPathTwoTransform()}
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_f"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation={7} result="effect1_foregroundBlur" />
        </filter>
      </defs>
    </svg>
  );
}
