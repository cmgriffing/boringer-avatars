import * as React from "react";
import { useLocalObservable, observer } from "mobx-react-lite";
import { generateColors, SIZE } from "./avatar-pixel.utils";

function AvatarPixel(props: any) {
  const state = useLocalObservable(() => ({
    get pixelColors() {
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
        id="mask__pixel"
        mask-type="alpha"
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

      <g mask="url(#mask__pixel)">
        <rect width={10} height={10} fill={state.pixelColors[0]} />

        <rect x={20} width={10} height={10} fill={state.pixelColors[1]} />

        <rect x={40} width={10} height={10} fill={state.pixelColors[2]} />

        <rect x={60} width={10} height={10} fill={state.pixelColors[3]} />

        <rect x={10} width={10} height={10} fill={state.pixelColors[4]} />

        <rect x={30} width={10} height={10} fill={state.pixelColors[5]} />

        <rect x={50} width={10} height={10} fill={state.pixelColors[6]} />

        <rect x={70} width={10} height={10} fill={state.pixelColors[7]} />

        <rect y={10} width={10} height={10} fill={state.pixelColors[8]} />

        <rect y={20} width={10} height={10} fill={state.pixelColors[9]} />

        <rect y={30} width={10} height={10} fill={state.pixelColors[10]} />

        <rect y={40} width={10} height={10} fill={state.pixelColors[11]} />

        <rect y={50} width={10} height={10} fill={state.pixelColors[12]} />

        <rect y={60} width={10} height={10} fill={state.pixelColors[13]} />

        <rect y={70} width={10} height={10} fill={state.pixelColors[14]} />

        <rect
          x={20}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors[15]}
        />

        <rect
          x={20}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors[16]}
        />

        <rect
          x={20}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors[17]}
        />

        <rect
          x={20}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors[18]}
        />

        <rect
          x={20}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors[19]}
        />

        <rect
          x={20}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors[20]}
        />

        <rect
          x={20}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors[21]}
        />

        <rect
          x={40}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors[22]}
        />

        <rect
          x={40}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors[23]}
        />

        <rect
          x={40}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors[24]}
        />

        <rect
          x={40}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors[25]}
        />

        <rect
          x={40}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors[26]}
        />

        <rect
          x={40}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors[27]}
        />

        <rect
          x={40}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors[28]}
        />

        <rect
          x={60}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors[29]}
        />

        <rect
          x={60}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors[30]}
        />

        <rect
          x={60}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors[31]}
        />

        <rect
          x={60}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors[32]}
        />

        <rect
          x={60}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors[33]}
        />

        <rect
          x={60}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors[34]}
        />

        <rect
          x={60}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors[35]}
        />

        <rect
          x={10}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors[36]}
        />

        <rect
          x={10}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors[37]}
        />

        <rect
          x={10}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors[38]}
        />

        <rect
          x={10}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors[39]}
        />

        <rect
          x={10}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors[40]}
        />

        <rect
          x={10}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors[41]}
        />

        <rect
          x={10}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors[42]}
        />

        <rect
          x={30}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors[43]}
        />

        <rect
          x={30}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors[44]}
        />

        <rect
          x={30}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors[45]}
        />

        <rect
          x={30}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors[46]}
        />

        <rect
          x={30}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors[47]}
        />

        <rect
          x={30}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors[48]}
        />

        <rect
          x={30}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors[49]}
        />

        <rect
          x={50}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors[50]}
        />

        <rect
          x={50}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors[51]}
        />

        <rect
          x={50}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors[52]}
        />

        <rect
          x={50}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors[53]}
        />

        <rect
          x={50}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors[54]}
        />

        <rect
          x={50}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors[55]}
        />

        <rect
          x={50}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors[56]}
        />

        <rect
          x={70}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors[57]}
        />

        <rect
          x={70}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors[58]}
        />

        <rect
          x={70}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors[59]}
        />

        <rect
          x={70}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors[60]}
        />

        <rect
          x={70}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors[61]}
        />

        <rect
          x={70}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors[62]}
        />

        <rect
          x={70}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors[63]}
        />
      </g>
    </svg>
  );
}

const observedAvatarPixel = observer(AvatarPixel);
export default observedAvatarPixel;
