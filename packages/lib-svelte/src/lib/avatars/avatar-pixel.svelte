<script>
  import { generateColors, SIZE } from "./avatar-pixel.utils";

  export let size;
  export let title;
  export let name;
  export let square;
  export let colors;

  function pixelColors(name, colors) {
    return generateColors(name, colors);
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
      rx={square ? undefined : SIZE * 2}
    />
  </mask>
  <g mask="url(#mask__pixel)">
    <rect width={10} height={10} fill={pixelColors(name, colors)[0]} />
    <rect x={20} width={10} height={10} fill={pixelColors(name, colors)[1]} />
    <rect x={40} width={10} height={10} fill={pixelColors(name, colors)[2]} />
    <rect x={60} width={10} height={10} fill={pixelColors(name, colors)[3]} />
    <rect x={10} width={10} height={10} fill={pixelColors(name, colors)[4]} />
    <rect x={30} width={10} height={10} fill={pixelColors(name, colors)[5]} />
    <rect x={50} width={10} height={10} fill={pixelColors(name, colors)[6]} />
    <rect x={70} width={10} height={10} fill={pixelColors(name, colors)[7]} />
    <rect y={10} width={10} height={10} fill={pixelColors(name, colors)[8]} />
    <rect y={20} width={10} height={10} fill={pixelColors(name, colors)[9]} />
    <rect y={30} width={10} height={10} fill={pixelColors(name, colors)[10]} />
    <rect y={40} width={10} height={10} fill={pixelColors(name, colors)[11]} />
    <rect y={50} width={10} height={10} fill={pixelColors(name, colors)[12]} />
    <rect y={60} width={10} height={10} fill={pixelColors(name, colors)[13]} />
    <rect y={70} width={10} height={10} fill={pixelColors(name, colors)[14]} />
    <rect
      x={20}
      y={10}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[15]}
    />
    <rect
      x={20}
      y={20}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[16]}
    />
    <rect
      x={20}
      y={30}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[17]}
    />
    <rect
      x={20}
      y={40}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[18]}
    />
    <rect
      x={20}
      y={50}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[19]}
    />
    <rect
      x={20}
      y={60}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[20]}
    />
    <rect
      x={20}
      y={70}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[21]}
    />
    <rect
      x={40}
      y={10}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[22]}
    />
    <rect
      x={40}
      y={20}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[23]}
    />
    <rect
      x={40}
      y={30}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[24]}
    />
    <rect
      x={40}
      y={40}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[25]}
    />
    <rect
      x={40}
      y={50}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[26]}
    />
    <rect
      x={40}
      y={60}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[27]}
    />
    <rect
      x={40}
      y={70}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[28]}
    />
    <rect
      x={60}
      y={10}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[29]}
    />
    <rect
      x={60}
      y={20}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[30]}
    />
    <rect
      x={60}
      y={30}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[31]}
    />
    <rect
      x={60}
      y={40}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[32]}
    />
    <rect
      x={60}
      y={50}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[33]}
    />
    <rect
      x={60}
      y={60}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[34]}
    />
    <rect
      x={60}
      y={70}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[35]}
    />
    <rect
      x={10}
      y={10}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[36]}
    />
    <rect
      x={10}
      y={20}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[37]}
    />
    <rect
      x={10}
      y={30}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[38]}
    />
    <rect
      x={10}
      y={40}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[39]}
    />
    <rect
      x={10}
      y={50}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[40]}
    />
    <rect
      x={10}
      y={60}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[41]}
    />
    <rect
      x={10}
      y={70}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[42]}
    />
    <rect
      x={30}
      y={10}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[43]}
    />
    <rect
      x={30}
      y={20}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[44]}
    />
    <rect
      x={30}
      y={30}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[45]}
    />
    <rect
      x={30}
      y={40}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[46]}
    />
    <rect
      x={30}
      y={50}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[47]}
    />
    <rect
      x={30}
      y={60}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[48]}
    />
    <rect
      x={30}
      y={70}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[49]}
    />
    <rect
      x={50}
      y={10}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[50]}
    />
    <rect
      x={50}
      y={20}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[51]}
    />
    <rect
      x={50}
      y={30}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[52]}
    />
    <rect
      x={50}
      y={40}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[53]}
    />
    <rect
      x={50}
      y={50}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[54]}
    />
    <rect
      x={50}
      y={60}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[55]}
    />
    <rect
      x={50}
      y={70}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[56]}
    />
    <rect
      x={70}
      y={10}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[57]}
    />
    <rect
      x={70}
      y={20}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[58]}
    />
    <rect
      x={70}
      y={30}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[59]}
    />
    <rect
      x={70}
      y={40}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[60]}
    />
    <rect
      x={70}
      y={50}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[61]}
    />
    <rect
      x={70}
      y={60}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[62]}
    />
    <rect
      x={70}
      y={70}
      width={10}
      height={10}
      fill={pixelColors(name, colors)[63]}
    />
  </g>
</svg>