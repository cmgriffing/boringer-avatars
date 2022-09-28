import { useStore } from "@builder.io/mitosis";
import { generateColors, SIZE } from "./avatar-sunset.utils";

export default function AvatarSunset(props) {
  const state: any = useStore<any>({
    get formattedName() {
      return props.name.replace(/\s/g, "");
    },
    get sunsetColors() {
      return generateColors(props.name, props.colors);
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
        id="mask__sunset"
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
      <g mask="url(#mask__sunset)">
        <path
          fill={"url(#gradient_paint0_linear_" + state.formattedName + ")"}
          d="M0 0h80v40H0z"
        />
        <path
          fill={"url(#gradient_paint1_linear_" + state.formattedName + ")"}
          d="M0 40h80v40H0z"
        />
      </g>
      <defs>
        <linearGradient
          id={"gradient_paint0_linear_" + state.formattedName}
          x1={SIZE / 2}
          y1={0}
          x2={SIZE / 2}
          y2={SIZE / 2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={state.sunsetColors[0]} />
          <stop offset={1} stop-color={state.sunsetColors[1]} />
        </linearGradient>
        <linearGradient
          id={"gradient_paint1_linear_" + state.formattedName}
          x1={SIZE / 2}
          y1={SIZE / 2}
          x2={SIZE / 2}
          y2={SIZE}
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color={state.sunsetColors[2]} />
          <stop offset={1} stop-color={state.sunsetColors[3]} />
        </linearGradient>
      </defs>
    </svg>
  );
}
