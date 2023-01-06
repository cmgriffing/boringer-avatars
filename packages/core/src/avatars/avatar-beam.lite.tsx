import { useStore } from "@builder.io/mitosis";
import type { AvatarProps } from "../avatar.utils";
import { defaultAvatarProps } from "../avatar.utils";
import { generateData, SIZE } from "./avatar-beam.utils";

export default function AvatarBeam(props: Omit<AvatarProps, "variant">) {
  const state: any = useStore<any>({
    data: (name: string, colors: string[]) => {
      return generateData(name, colors);
    },
    getRectTransform: () => {
      return (
        "translate(" +
        state.data(props.name, props.colors).wrapperTranslateX +
        " " +
        state.data(props.name, props.colors).wrapperTranslateY +
        ") rotate(" +
        state.data(props.name, props.colors).wrapperRotate +
        " " +
        SIZE / 2 +
        " " +
        SIZE / 2 +
        ") scale(" +
        state.data(props.name, props.colors).wrapperScale +
        ")"
      );
    },
    getGroupTransform: () => {
      return (
        "translate(" +
        state.data(props.name, props.colors).faceTranslateX +
        " " +
        state.data(props.name, props.colors).faceTranslateY +
        ") rotate(" +
        state.data(props.name, props.colors).faceRotate +
        " " +
        SIZE / 2 +
        " " +
        SIZE / 2 +
        ")"
      );
    },
    getOpenMouthData: () => {
      return (
        "M15 " +
        (19 + state.data(props.name, props.colors).mouthSpread) +
        "c2 1 4 1 6 0"
      );
    },
    getClosedMouthData: () => {
      return (
        "M13," +
        (19 + state.data(props.name, props.colors).mouthSpread) +
        " a1,0.75 0 0,0 10,0"
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
        <rect
          width={SIZE}
          height={SIZE}
          fill={state.data(props.name, props.colors).backgroundColor}
        />
        <rect
          x="0"
          y="0"
          width={SIZE}
          height={SIZE}
          transform={state.getRectTransform()}
          fill={state.data(props.name, props.colors).wrapperColor}
          rx={state.data(props.name, props.colors).isCircle ? SIZE : SIZE / 6}
        />
        <g transform={state.getGroupTransform()}>
          {state.data(props.name, props.colors).isMouthOpen ? (
            <path
              d={state.getOpenMouthData()}
              stroke={state.data(props.name, props.colors).faceColor}
              fill="none"
              strokeLinecap="round"
            />
          ) : (
            <path
              d={state.getClosedMouthData()}
              fill={state.data(props.name, props.colors).faceColor}
            />
          )}
          <rect
            x={14 - state.data(props.name, props.colors).eyeSpread}
            y={14}
            width={1.5}
            height={2}
            rx={1}
            stroke="none"
            fill={state.data(props.name, props.colors).faceColor}
          />
          <rect
            x={20 + state.data(props.name, props.colors).eyeSpread}
            y={14}
            width={1.5}
            height={2}
            rx={1}
            stroke="none"
            fill={state.data(props.name, props.colors).faceColor}
          />
        </g>
      </g>
    </svg>
  );
}
