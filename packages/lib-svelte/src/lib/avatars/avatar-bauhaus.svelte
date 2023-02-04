<script>
  import { generateColors, SIZE } from "./avatar-bauhaus.utils";

  export let name;
  export let colors;
  export let size;
  export let hasTitle;
  export let square;

  function properties(name, colors) {
    return generateColors(name, colors);
  }
  function getSquareTransform() {
    return (
      "translate(" +
      properties(name, colors)?.[1]?.translateX +
      " " +
      properties(name, colors)?.[1]?.translateY +
      ") rotate(" +
      properties(name, colors)?.[1]?.rotate +
      " " +
      SIZE / 2 +
      " " +
      SIZE / 2 +
      ")"
    );
  }
  function getCircleTransform() {
    return (
      "translate(" +
      properties(name, colors)?.[2]?.translateX +
      " " +
      properties(name, colors)?.[2]?.translateY +
      ")"
    );
  }
  function getLineTransform() {
    return (
      "translate(" +
      properties(name, colors)?.[3]?.translateX +
      " " +
      properties(name, colors)?.[3]?.translateY +
      ") rotate(" +
      properties(name, colors)?.[3]?.rotate +
      " " +
      SIZE / 2 +
      " " +
      SIZE / 2 +
      ")"
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
  {#if hasTitle}
    <title>{name}</title>
  {/if}
  <mask
    id="mask__bauhaus"
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
  <g mask="url(#mask__bauhaus)">
    <rect
      width={SIZE}
      height={SIZE}
      fill={properties(name, colors)?.[0]?.color}
    />
    <rect
      x={(SIZE - 60) / 2}
      y={(SIZE - 20) / 2}
      width={SIZE}
      height={properties(name, colors)?.[1]?.isSquare ? SIZE : SIZE / 8}
      fill={properties(name, colors)?.[1]?.color}
      transform={getSquareTransform()}
    />
    <circle
      cx={SIZE / 2}
      cy={SIZE / 2}
      fill={properties(name, colors)?.[2]?.color}
      r={SIZE / 5}
      transform={getCircleTransform()}
    />
    <line
      x1={0}
      y1={SIZE / 2}
      x2={SIZE}
      y2={SIZE / 2}
      strokeWidth={2}
      stroke={properties(name, colors)?.[3]?.color}
      transform={getLineTransform()}
    />
  </g>
</svg>