import { Component, Prop, h, State, Fragment, Event } from "@stencil/core";

@Component({
  tag: "demo-palette-selector",
})
export class PaletteSelector {
  @Event() onChange: any;
  @Prop() colors: any;

  @State() selectedPalette = [
    "#FFAD08",
    "#EDD75A",
    "#73B06F",
    "#0C8F8F",
    "#405059",
  ];

  handleChange(index, event) {
    const newColors = [...this.selectedPalette];
    newColors[index] = event.target.value;
    this.selectedPalette = newColors;
    this.onChange.emit(newColors);
  }
  randomizePalette() {
    const newColors = this.selectedPalette.map(() => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
    this.selectedPalette = newColors;
    this.onChange.emit(newColors);
  }
  getInputId(index) {
    return `color-input-${index}`;
  }

  componentDidLoad() {
    this.selectedPalette = this.colors;
  }

  componentDidUpdate() {
    this.selectedPalette = this.colors;
  }

  render() {
    return (
      <div>
        <div>
          {this.selectedPalette?.map((colorOption, index) => (
            <div>
              <label htmlFor={this.getInputId(index)}>
                Color Input
                {index}
              </label>

              <input
                type="color"
                value={colorOption}
                id={this.getInputId(index)}
                onInput={(event) => this.handleChange(index, event)}
              />
            </div>
          ))}
        </div>

        <div></div>

        <button onClick={(event) => this.randomizePalette()}>
          Random Palette
        </button>
      </div>
    );
  }
}
