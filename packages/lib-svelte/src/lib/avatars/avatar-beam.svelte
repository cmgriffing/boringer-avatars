<script>
  import { generateData, SIZE } from "./avatar-beam.utils";

  export let name;
  export let colors;
  export let size;
  export let title;
  export let square;

  function data(name, colors) {
    return generateData(name, colors);
  }
  function getRectTransform() {
    return (
      "translate(" +
      data(name, colors).wrapperTranslateX +
      " " +
      data(name, colors).wrapperTranslateY +
      ") rotate(" +
      data(name, colors).wrapperRotate +
      " " +
      SIZE / 2 +
      " " +
      SIZE / 2 +
      ") scale(" +
      data(name, colors).wrapperScale +
      ")"
    );
  }
  function getGroupTransform() {
    return (
      "translate(" +
      data(name, colors).faceTranslateX +
      " " +
      data(name, colors).faceTranslateY +
      ") rotate(" +
      data(name, colors).faceRotate +
      " " +
      SIZE / 2 +
      " " +
      SIZE / 2 +
      ")"
    );
  }
  function getOpenMouthData() {
    return "M15 " + (19 + data(name, colors).mouthSpread) + "c2 1 4 1 6 0";
  }
  function getClosedMouthData() {
    return (
      "M13," + (19 + data(name, colors).mouthSpread) + " a1,0.75 0 0,0 10,0"
    );
  }
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
    id="mask__beam"
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
  <g mask="url(#mask__beam)">
    <rect
      width={SIZE}
      height={SIZE}
      fill={data(name, colors).backgroundColor}
    />
    <rect
      x="0"
      y="0"
      width={SIZE}
      height={SIZE}
      transform={getRectTransform()}
      fill={data(name, colors).wrapperColor}
      rx={data(name, colors).isCircle ? SIZE : SIZE / 6}
    />
    <g transform={getGroupTransform()}>
      {#if data(name, colors).isMouthOpen}
        <path
          fill="none"
          strokeLinecap="round"
          d={getOpenMouthData()}
          stroke={data(name, colors).faceColor}
        />
      {:else}
        <path d={getClosedMouthData()} fill={data(name, colors).faceColor} />
      {/if}
      <rect
        stroke="none"
        x={14 - data(name, colors).eyeSpread}
        y={14}
        width={1.5}
        height={2}
        rx={1}
        fill={data(name, colors).faceColor}
      />
      <rect
        stroke="none"
        x={20 + data(name, colors).eyeSpread}
        y={14}
        width={1.5}
        height={2}
        rx={1}
        fill={data(name, colors).faceColor}
      />
    </g>
  </g>
</svg>