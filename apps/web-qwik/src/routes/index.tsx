import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Avatar, Variant } from "@boringer-avatars/qwik";
import {
  VariantSelector,
  PaletteSelector,
  ShapeSelector,
  SizeSelector,
  LightDarkToggle,
  LibraryLinks,
  exampleNames,
} from "@demo/qwik";

export default component$(() => {
  const state = useStore({
    variant: "beam" as Variant,
    isSquare: false,
    size: 40,
    colors: ["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"],
    theme: "light",
  });

  return (
    <div class={`content ${state.theme}`}>
      <div class="row">
        <div class="row">
          <VariantSelector
            variant={state.variant}
            onChange$={(newVariant: Variant) => {
              console.log({ newVariant });
              state.variant = newVariant;
            }}
          />
        </div>
        <PaletteSelector
          colors={state.colors}
          onChange$={(newColors: string[]) => {
            state.colors = newColors;
          }}
        />
        <div class="row">
          <div class="inner-row">
            <ShapeSelector
              shape={state.isSquare ? "square" : "circle"}
              onChange$={(newShape: string) => {
                state.isSquare = newShape === "square";
              }}
            />
            <SizeSelector
              size={state.size}
              onChange$={(newSize: any) => {
                state.size = newSize;
              }}
            />
            <LightDarkToggle
              theme={state.theme}
              onChange$={(newTheme: string) => {
                state.theme = newTheme;
              }}
            />
          </div>
          <div class="inner-row">
            <LibraryLinks githubUrl="https://github.com/cmgriffing/boringer-avatars/packages/lib-react" />
          </div>
        </div>
      </div>
      <div class="avatar-list">
        {exampleNames.map((name: string) => (
          <div class="avatar-list-item">
            <Avatar
              title={false}
              size={state.size}
              variant={state.variant}
              name={name}
              square={state.isSquare}
              colors={state.colors}
            />
            <div class="avatar-list-item-name">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
