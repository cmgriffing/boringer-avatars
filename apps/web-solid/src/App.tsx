import { Component, createSignal } from "solid-js";
import { Avatar } from "@boringer-avatars/solid";
import { VariantSelector, SizeSelector, PaletteSelector } from "@demo/solid";
import "./styles.css";

const App: Component = () => {
  const [variant, setVariant] = createSignal("beam");
  const [isSquare, setIsSquare] = createSignal(false);
  const [size, setSize] = createSignal("40px");
  const [colors, setColors] = createSignal([
    "#FFAD08",
    "#EDD75A",
    "#73B06F",
    "#0C8F8F",
    "#405059",
  ]);

  return (
    <>
      <div>
        {variant}
        <VariantSelector
          variant={variant}
          onChange={(newVariant) => {
            setVariant(newVariant);
          }}
        />
      </div>
      <div>
        <PaletteSelector
          colors={colors()}
          onChange={(newColors) => {
            console.log({ newColors });
            setColors(newColors);
          }}
        />
      </div>
      <div>
        <SizeSelector
          size={size()}
          onChange={(newSize) => {
            console.log({ newSize });
            setSize(newSize);
          }}
        />
      </div>
      <Avatar
        title={false}
        size={size()}
        variant={variant()}
        name="testing"
        square={isSquare()}
        colors={colors()}
      />
    </>
  );
};

export default App;
