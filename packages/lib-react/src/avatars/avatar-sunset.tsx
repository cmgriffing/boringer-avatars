import * as React from "react";
import { useLocalObservable, observer } from "mobx-react-lite";
import { generateColors, SIZE } from "./avatar-sunset.utils";

function AvatarSunset(props: any) {
  const state = useLocalObservable(() => ({
    get formattedName() {
      return props.name.replace(/\s/g, "");
    },
    get sunsetColors() {
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
        <path
          d="M0 0h80v40H0z"
          fill={"url(#gradient_paint0_linear_" + state.formattedName + ")"}
        />

        <path
          d="M0 40h80v40H0z"
          fill={"url(#gradient_paint1_linear_" + state.formattedName + ")"}
        />
      </g>

      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={"gradient_paint0_linear_" + state.formattedName}
          x1={SIZE / 2}
          y1={0}
          x2={SIZE / 2}
          y2={SIZE / 2}
        >
          <stop stop-color={state.sunsetColors[0]} />

          <stop offset={1} stop-color={state.sunsetColors[1]} />
        </linearGradient>

        <linearGradient
          gradientUnits="userSpaceOnUse"
          id={"gradient_paint1_linear_" + state.formattedName}
          x1={SIZE / 2}
          y1={SIZE / 2}
          x2={SIZE / 2}
          y2={SIZE}
        >
          <stop stop-color={state.sunsetColors[2]} />

          <stop offset={1} stop-color={state.sunsetColors[3]} />
        </linearGradient>
      </defs>
    </svg>
  );
}

const observedAvatarSunset = observer(AvatarSunset);
export default observedAvatarSunset;
