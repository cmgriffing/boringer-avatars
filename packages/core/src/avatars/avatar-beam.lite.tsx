import { useStore } from "@builder.io/mitosis";
import type { AvatarProps } from "../avatar.utils";
import { defaultAvatarProps } from "../avatar.utils";
import { generateData, SIZE } from "./avatar-beam.utils";

export default function AvatarBeam(props: Omit<AvatarProps, "variant">) {
  const state: any = useStore<any>({
    get data() {
      return generateData(props.name, props.colors);
    },
    getRectTransform: () => {
      return (
        "translate(" +
        state.data.wrapperTranslateX +
        " " +
        state.data.wrapperTranslateY +
        ") rotate(" +
        state.data.wrapperRotate +
        " " +
        SIZE / 2 +
        " " +
        SIZE / 2 +
        ") scale(" +
        state.data.wrapperScale +
        ")"
      );
    },
    getGroupTransform: () => {
      return (
        "translate(" +
        state.data.faceTranslateX +
        " " +
        state.data.faceTranslateY +
        ") rotate(" +
        state.data.faceRotate +
        " " +
        SIZE / 2 +
        " " +
        SIZE / 2 +
        ")"
      );
    },
    getOpenMouthData: () => {
      return "M15 " + (19 + state.data.mouthSpread) + "c2 1 4 1 6 0";
    },
    getClosedMouthData: () => {
      return "M13," + (19 + state.data.mouthSpread) + " a1,0.75 0 0,0 10,0";
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
        id="mask__beam"
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
      <g mask="url(#mask__beam)">
        <rect width={SIZE} height={SIZE} fill={state.data.backgroundColor} />
        <rect
          x="0"
          y="0"
          width={SIZE}
          height={SIZE}
          transform={state.getRectTransform()}
          fill={state.data.wrapperColor}
          rx={state.data.isCircle ? SIZE : SIZE / 6}
        />
        <g transform={state.getGroupTransform()}>
          {state.data.isMouthOpen ? (
            <path
              d={state.getOpenMouthData()}
              stroke={state.data.faceColor}
              fill="none"
              strokeLinecap="round"
            />
          ) : (
            <path d={state.getClosedMouthData()} fill={state.data.faceColor} />
          )}
          <rect
            x={14 - state.data.eyeSpread}
            y={14}
            width={1.5}
            height={2}
            rx={1}
            stroke="none"
            fill={state.data.faceColor}
          />
          <rect
            x={20 + state.data.eyeSpread}
            y={14}
            width={1.5}
            height={2}
            rx={1}
            stroke="none"
            fill={state.data.faceColor}
          />
        </g>
      </g>
    </svg>
  );
}
