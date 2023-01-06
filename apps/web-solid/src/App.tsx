import { Component, createSignal, For } from "solid-js";
import { Avatar, Variant } from "@boringer-avatars/solid";
import {
  VariantSelector,
  SizeSelector,
  PaletteSelector,
  ShapeSelector,
  LightDarkToggle,
  LibraryLinks,
  exampleNames,
} from "@demo/solid";
import "./styles.css";

const App: Component = () => {
  const [variant, setVariant] = createSignal("beam");
  const [isSquare, setIsSquare] = createSignal(false);
  const [size, setSize] = createSignal("128px");
  const [colors, setColors] = createSignal([
    "#FFAD08",
    "#EDD75A",
    "#73B06F",
    "#0C8F8F",
    "#405059",
  ]);
  const [theme, setTheme] = createSignal("light");

  return (
    <>
      <div class={`content ${theme}`}>
        <div class="row">
          <div class="row">
            <VariantSelector
              variant={variant()}
              onChange={(newVariant: Variant) => {
                setVariant(newVariant);
                console.log({ newVariant, variant: variant() });
              }}
            />
          </div>
          <PaletteSelector
            colors={colors}
            onChange={(newColors: string[]) => {
              console.log({ newColors });
              setColors(newColors);
            }}
          />
          <div class="row">
            <div class="inner-row">
              <ShapeSelector
                shape={isSquare ? "square" : "circle"}
                onChange={(newShape: string) => {
                  console.log({ newShape });
                  setIsSquare(newShape === "square");
                }}
              />
              <SizeSelector
                size={size}
                onChange={(newSize: any) => {
                  console.log({ newSize });
                  setSize(newSize);
                }}
              />
              <LightDarkToggle
                theme={theme}
                onChange={(newTheme: string) => {
                  console.log("new theme", theme);
                  setTheme(newTheme);
                }}
              />
            </div>
            <div class="inner-row">
              <LibraryLinks githubUrl="https://github.com/cmgriffing/boringer-avatars/packages/lib-react" />
            </div>
          </div>
        </div>
        <div class="avatar-list">
          <For each={exampleNames}>
            {(name) => (
              <div class="avatar-list-item">
                <Avatar
                  test={variant() + "foo"}
                  title={false}
                  size={size()}
                  variant={variant()}
                  name={name}
                  square={isSquare()}
                  colors={colors()}
                />
                <div class="avatar-list-item-name">{name}</div>
              </div>
            )}
          </For>
        </div>
      </div>
    </>
  );
};

export default App;

// export default function Web() {
//   const [variant, setVariant] = useState("beam" as Variant);
//   const [isSquare, setIsSquare] = useState(false);
//   const [size, setSize] = useState("40px" as any);
//   const [colors, setColors] = useState([
//     "#FFAD08",
//     "#EDD75A",
//     "#73B06F",
//     "#0C8F8F",
//     "#405059",
//   ]);
//   const [theme, setTheme] = useState("light");

//   return (
//   );
// }
