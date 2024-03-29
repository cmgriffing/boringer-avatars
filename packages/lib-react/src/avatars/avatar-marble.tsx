import * as React from "react";
import type { AvatarProps } from "../avatar.utils";
import { defaultAvatarProps } from "../avatar.utils";
import { SIZE, generateColors } from "./avatar-marble.utils";

export default function AvatarMarble(props: Omit<AvatarProps, "variant">) {
  function properties(name, colors) {
    return generateColors(name, colors);
  }

  function getPathOneTransform() {
    return (
      "translate(" +
      properties(props.name, props.colors)[1].translateX +
      " " +
      properties(props.name, props.colors)[1].translateY +
      ") rotate(" +
      properties(props.name, props.colors)[1].rotate +
      " " +
      SIZE / 2 +
      " " +
      SIZE / 2 +
      ") scale(" +
      properties(props.name, props.colors)[2].scale +
      ")"
    );
  }

  function getPathTwoTransform() {
    return (
      "translate(" +
      properties(props.name, props.colors)[2].translateX +
      " " +
      properties(props.name, props.colors)[2].translateY +
      ") rotate(" +
      properties(props.name, props.colors)[2].rotate +
      " " +
      SIZE / 2 +
      " " +
      SIZE / 2 +
      ") scale(" +
      properties(props.name, props.colors)[2].scale +
      ")"
    );
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
      {props.hasTitle ? <title>{props.name}</title> : null}

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
        <rect
          width={SIZE}
          height={SIZE}
          fill={properties(props.name, props.colors)[0].color}
        />

        <path
          filter="url(#prefix__filter0_f)"
          d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
          fill={properties(props.name, props.colors)[1].color}
          transform={getPathOneTransform()}
        />

        <path
          filter="url(#prefix__filter0_f)"
          d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
          style={{
            mixBlendMode: "overlay",
          }}
          fill={properties(props.name, props.colors)[2].color}
          transform={getPathTwoTransform()}
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
