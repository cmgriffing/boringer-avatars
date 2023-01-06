import { useStore } from "@builder.io/mitosis";
import type { AvatarProps } from "../avatar.utils";
import { defaultAvatarProps } from "../avatar.utils";
import { generateColors, SIZE } from "./avatar-pixel.utils";

export default function AvatarPixel(props: Omit<AvatarProps, "variant">) {
  const state: any = useStore<any>({
    pixelColors: (name: string, colors: string[]) => {
      return generateColors(name, colors);
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
        id="mask__pixel"
        mask-type="alpha"
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
      <g mask="url(#mask__pixel)">
        <rect
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[0]}
        />
        <rect
          x={20}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[1]}
        />
        <rect
          x={40}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[2]}
        />
        <rect
          x={60}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[3]}
        />
        <rect
          x={10}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[4]}
        />
        <rect
          x={30}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[5]}
        />
        <rect
          x={50}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[6]}
        />
        <rect
          x={70}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[7]}
        />
        <rect
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[8]}
        />
        <rect
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[9]}
        />
        <rect
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[10]}
        />
        <rect
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[11]}
        />
        <rect
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[12]}
        />
        <rect
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[13]}
        />
        <rect
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[14]}
        />
        <rect
          x={20}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[15]}
        />
        <rect
          x={20}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[16]}
        />
        <rect
          x={20}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[17]}
        />
        <rect
          x={20}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[18]}
        />
        <rect
          x={20}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[19]}
        />
        <rect
          x={20}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[20]}
        />
        <rect
          x={20}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[21]}
        />
        <rect
          x={40}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[22]}
        />
        <rect
          x={40}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[23]}
        />
        <rect
          x={40}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[24]}
        />
        <rect
          x={40}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[25]}
        />
        <rect
          x={40}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[26]}
        />
        <rect
          x={40}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[27]}
        />
        <rect
          x={40}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[28]}
        />
        <rect
          x={60}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[29]}
        />
        <rect
          x={60}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[30]}
        />
        <rect
          x={60}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[31]}
        />
        <rect
          x={60}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[32]}
        />
        <rect
          x={60}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[33]}
        />
        <rect
          x={60}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[34]}
        />
        <rect
          x={60}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[35]}
        />
        <rect
          x={10}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[36]}
        />
        <rect
          x={10}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[37]}
        />
        <rect
          x={10}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[38]}
        />
        <rect
          x={10}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[39]}
        />
        <rect
          x={10}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[40]}
        />
        <rect
          x={10}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[41]}
        />
        <rect
          x={10}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[42]}
        />
        <rect
          x={30}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[43]}
        />
        <rect
          x={30}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[44]}
        />
        <rect
          x={30}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[45]}
        />
        <rect
          x={30}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[46]}
        />
        <rect
          x={30}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[47]}
        />
        <rect
          x={30}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[48]}
        />
        <rect
          x={30}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[49]}
        />
        <rect
          x={50}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[50]}
        />
        <rect
          x={50}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[51]}
        />
        <rect
          x={50}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[52]}
        />
        <rect
          x={50}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[53]}
        />
        <rect
          x={50}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[54]}
        />
        <rect
          x={50}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[55]}
        />
        <rect
          x={50}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[56]}
        />
        <rect
          x={70}
          y={10}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[57]}
        />
        <rect
          x={70}
          y={20}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[58]}
        />
        <rect
          x={70}
          y={30}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[59]}
        />
        <rect
          x={70}
          y={40}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[60]}
        />
        <rect
          x={70}
          y={50}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[61]}
        />
        <rect
          x={70}
          y={60}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[62]}
        />
        <rect
          x={70}
          y={70}
          width={10}
          height={10}
          fill={state.pixelColors(props.name, props.colors)[63]}
        />
      </g>
    </svg>
  );
}
