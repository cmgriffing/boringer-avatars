<script>
  import { generateColors, SIZE } from "./avatar-sunset.utils";

  export let name;
  export let colors;
  export let size;
  export let title;
  export let square;

  $: formattedName = () => {
    return name.replace(/\s/g, "");
  };

  $: sunsetColors = () => {
    return generateColors(name, colors);
  };
</script>

<svg
  fill="none"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox={"0 0 " + SIZE + " " + SIZE}
  width={size}
  height={size}
>
  {#if title}
    <title>{name}</title>
  {/if}
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
      rx={square ? undefined : SIZE * 2}
    />
  </mask>
  <g mask="url(#mask__sunset)">
    <path
      d="M0 0h80v40H0z"
      fill={"url(#gradient_paint0_linear_" + formattedName() + ")"}
    />
    <path
      d="M0 40h80v40H0z"
      fill={"url(#gradient_paint1_linear_" + formattedName() + ")"}
    />
  </g>
  <defs>
    <linearGradient
      gradientUnits="userSpaceOnUse"
      id={"gradient_paint0_linear_" + formattedName()}
      x1={SIZE / 2}
      y1={0}
      x2={SIZE / 2}
      y2={SIZE / 2}
    >
      <stop stop-color={sunsetColors()[0]} />
      <stop offset={1} stop-color={sunsetColors()[1]} />
    </linearGradient>
    <linearGradient
      gradientUnits="userSpaceOnUse"
      id={"gradient_paint1_linear_" + formattedName()}
      x1={SIZE / 2}
      y1={SIZE / 2}
      x2={SIZE / 2}
      y2={SIZE}
    >
      <stop stop-color={sunsetColors()[2]} />
      <stop offset={1} stop-color={sunsetColors()[3]} />
    </linearGradient>
  </defs>
</svg>
