import { useState } from "react";
import { Avatar, Variant } from "@boringer-avatars/react";
import {
  VariantSelector,
  SizeSelector,
  PaletteSelector,
  ShapeSelector,
  LightDarkToggle,
  LibraryLinks,
  exampleNames,
} from "@demo/react";

export default function Web() {
  const [variant, setVariant] = useState("beam" as Variant);
  const [isSquare, setIsSquare] = useState(false);
  const [size, setSize] = useState("40px" as any);
  const [colors, setColors] = useState([
    "#FFAD08",
    "#EDD75A",
    "#73B06F",
    "#0C8F8F",
    "#405059",
  ]);
  const [theme, setTheme] = useState("light");

  return (
    <div className={`content ${theme}`}>
      <div className="row">
        <div className="row">
          <VariantSelector
            variant={variant}
            onChange={(newVariant: Variant) => {
              setVariant(newVariant);
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
        <div className="row">
          <div className="inner-row">
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
          <div className="inner-row">
            <LibraryLinks githubUrl="https://github.com/cmgriffing/boringer-avatars/packages/lib-react" />
          </div>
        </div>
      </div>
      <div className="avatar-list">
        {exampleNames.map((name: string) => (
          <div className="avatar-list-item">
            <Avatar
              title={false}
              size={size}
              variant={variant}
              name={name}
              square={isSquare}
              colors={colors}
            />
            <div className="avatar-list-item-name">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
