import * as React from "react";
import { useLocalObservable } from "mobx-react-lite";
import { SIZE, generateColors } from "./avatar-marble.utils";

export default function AvatarMarble(props: any) {
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
        id="mask__marble"
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

      <g mask="url(#mask__marble)">
        <rect width={SIZE} height={SIZE} fill={state.properties[0].color} />

        <path
          filter="url(#prefix__filter0_f)"
          d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
          fill={state.properties[1].color}
          transform={
            "translate(" +
            state.properties[1].translateX +
            " " +
            state.properties[1].translateY +
            ") rotate(" +
            state.properties[1].rotate +
            " " +
            SIZE / 2 +
            " " +
            SIZE / 2 +
            ") scale(" +
            state.properties[2].scale +
            ")"
          }
        />

        <path
          filter="url(#prefix__filter0_f)"
          d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
          style={{
            mixBlendMode: "overlay",
          }}
          fill={state.properties[2].color}
          transform={
            "translate(" +
            state.properties[2].translateX +
            " " +
            state.properties[2].translateY +
            ") rotate(" +
            state.properties[2].rotate +
            " " +
            SIZE / 2 +
            " " +
            SIZE / 2 +
            ") scale(" +
            state.properties[2].scale +
            ")"
          }
        />
      </g>

      <defs>
        <filter
          id="prefix__filter0_f"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood result="BackgroundImageFix" floodOpacity={0} />

          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />

          <feGaussianBlur result="effect1_foregroundBlur" stdDeviation={7} />
        </filter>
      </defs>
    </svg>
  );
}
