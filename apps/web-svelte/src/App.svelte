<script lang="ts">
  import { Avatar } from "@boringer-avatars/svelte/package";

  import {
    VariantSelector,
    SizeSelector,
    PaletteSelector,
    ShapeSelector,
    LightDarkToggle,
    LibraryLinks,
    exampleNames,
  } from "@demo/svelte/package";

  let variant = "beam";
  let isSquare = false;
  let size = "40px";
  let colors = ["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"];
  let theme = "light";
</script>

<main>
  <div class={`content ${theme}`}>
    <div class="row">
      <div class="row">
        <VariantSelector
          {variant}
          onChange={(newVariant) => {
            variant = newVariant;
          }}
        />
      </div>
      <PaletteSelector
        {colors}
        onChange={(newColors) => {
          console.log({ newColors });
          colors = newColors;
        }}
      />
      <div class="row">
        <div class="inner-row">
          <ShapeSelector
            shape={isSquare ? "square" : "circle"}
            onChange={(newShape) => {
              console.log({ newShape });
              isSquare = newShape === "square";
            }}
          />
          <SizeSelector
            {size}
            onChange={(newSize) => {
              size = newSize;
            }}
          />
          <LightDarkToggle
            {theme}
            onChange={(newTheme) => {
              theme = newTheme;
            }}
          />
        </div>
        <div class="inner-row">
          <LibraryLinks
            githubUrl="https://github.com/cmgriffing/boringer-avatars/blob/main/packages/lib-svelte"
          />
        </div>
      </div>
    </div>
    <div class="avatar-list">
      {#each exampleNames as name}
        <div class="avatar-list-item">
          <Avatar
            title={false}
            {size}
            {variant}
            {name}
            square={isSquare}
            {colors}
          />
          <div class="avatar-list-item-name">{name}</div>
        </div>
      {/each}
    </div>
  </div>
</main>
