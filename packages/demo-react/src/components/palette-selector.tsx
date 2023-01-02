import * as React from "react";
import { useState, useEffect } from "react";
import type { PaletteSelectorProps } from "./palette-selector.utils";

export default function PaletteSelector(props: any) {
  const [selectedPalette, setSelectedPalette] = useState(() => [
    "#FFAD08",
    "#EDD75A",
    "#73B06F",
    "#0C8F8F",
    "#405059",
  ]);

  function handleChange(index, event) {
    const newColors = [...selectedPalette];
    newColors[index] = event.target.value;
    setSelectedPalette(newColors);
    props.onChange(newColors);
  }

  function randomizePalette() {
    const newColors = selectedPalette.map(() => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
    setSelectedPalette(newColors);
    props.onChange(newColors);
  }

  function getInputId(index) {
    return `color-input-${index}`;
  }

  useEffect(() => {
    setSelectedPalette(props.colors);
  }, []);

  useEffect(() => {
    setSelectedPalette(props.colors);
  }, [props.colors]);

  return (
    <div className="row">
      <div className="color-inputs">
        {selectedPalette?.map((colorOption, index) => (
          <div>
            <label className="sr-only" htmlFor={getInputId(index)}>
              Color Input
              {index}
            </label>

            <input
              type="color"
              className="color-input"
              value={colorOption}
              id={getInputId(index)}
              onChange={(event) => handleChange(index, event)}
            />
          </div>
        ))}
      </div>

      <div className="spacer" />

      <button
        className="random-palette widget-wrapper radio-label"
        onClick={(event) => randomizePalette()}
      >
        Random Palette
      </button>
    </div>
  );
}
