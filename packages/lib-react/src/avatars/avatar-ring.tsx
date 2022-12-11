import * as React from "react";
import { useLocalObservable, observer } from "mobx-react-lite";
import { generateColors, SIZE } from "./avatar-ring.utils";

function AvatarRing(props: any) {
  const state = useLocalObservable(() => ({
    get ringColors() {
      return generateColors(props.colors, props.name);
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
        id="mask__ring"
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

      <g mask="url(#mask__ring)">
        <path d="M0 0h90v45H0z" fill={state.ringColors[0]} />

        <path d="M0 45h90v45H0z" fill={state.ringColors[1]} />

        <path d="M83 45a38 38 0 00-76 0h76z" fill={state.ringColors[2]} />

        <path d="M83 45a38 38 0 01-76 0h76z" fill={state.ringColors[3]} />

        <path d="M77 45a32 32 0 10-64 0h64z" fill={state.ringColors[4]} />

        <path d="M77 45a32 32 0 11-64 0h64z" fill={state.ringColors[5]} />

        <path d="M71 45a26 26 0 00-52 0h52z" fill={state.ringColors[6]} />

        <path d="M71 45a26 26 0 01-52 0h52z" fill={state.ringColors[7]} />

        <circle cx={45} cy={45} r={23} fill={state.ringColors[8]} />
      </g>
    </svg>
  );
}

const observedAvatarRing = observer(AvatarRing);
export default observedAvatarRing;
