import * as React from "react";
import type { AvatarProps } from "../avatar.utils";
import { defaultAvatarProps } from "../avatar.utils";
import { generateColors, SIZE } from "./avatar-sunset.utils";

export default function AvatarSunset(props: Omit<AvatarProps, "variant">) {
  function formattedName() {
    return props.name.replace(/\s/g, "");
  }

  function sunsetColors(name, colors) {
    return generateColors(name, colors);
  }

  function getPaintFill0() {
    return "url(#gradient_paint0_linear_" + formattedName() + ")";
  }

  function getPaintFill1() {
    return "url(#gradient_paint1_linear_" + formattedName() + ")";
  }

  function getPaintId0() {
    return "gradient_paint0_linear_" + formattedName();
  }

  function getPaintId1() {
    return "gradient_paint1_linear_" + formattedName();
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
        id="mask__sunset"
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

      <g mask="url(#mask__sunset)">
        <path d="M0 0h80v40H0z" fill={getPaintFill0()} />

        <path d="M0 40h80v40H0z" fill={getPaintFill1()} />
      </g>

      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={getPaintId0()}
          x1={SIZE / 2}
          y1={0}
          x2={SIZE / 2}
          y2={SIZE / 2}
        >
          <stop stopColor={sunsetColors(props.name, props.colors)[0]} />

          <stop
            offset={1}
            stopColor={sunsetColors(props.name, props.colors)[1]}
          />
        </linearGradient>

        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={getPaintId1()}
          x1={SIZE / 2}
          y1={SIZE / 2}
          x2={SIZE / 2}
          y2={SIZE}
        >
          <stop stopColor={sunsetColors(props.name, props.colors)[2]} />

          <stop
            offset={1}
            stopColor={sunsetColors(props.name, props.colors)[3]}
          />
        </linearGradient>
      </defs>
    </svg>
  );
}
