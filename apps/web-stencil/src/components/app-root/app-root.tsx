import { Component, h, State } from '@stencil/core';
import { Variant } from '@boringer-avatars/stencil';
import '@boringer-avatars/stencil/dist/components/boringer-avatar';
import { exampleNames } from '@demo/stencil';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false,
})
export class AppRoot {
  @State() colors = ['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059'];
  @State() variant: Variant = 'beam';
  @State() theme = 'light';
  @State() isSquare = false;
  @State() size = '40px';

  handleChange(index, event) {
    const newColors = [...this.colors];
    newColors[index] = event.target.value;
    this.colors = newColors;
  }
  randomizePalette() {
    const newColors = this.colors.map(() => {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });
    this.colors = newColors;
  }
  getInputId(index) {
    return `color-input-${index}`;
  }

  render() {
    return (
      <div>
        <main>
          <div class={`content ${this.theme}`}>
            <div class="row">
              <div class="row">
                <demo-variant-selector
                  variant={this.variant}
                  onChange={newVariant => {
                    this.variant = newVariant.target.value;
                  }}
                />
              </div>

              {/* NO IDEA WHY THE PALETTE SELECTOR DIDN'T WORK */}
              <div class="row">
                <div class="color-inputs">
                  {this.colors?.map((colorOption, index) => (
                    <div>
                      <label class="sr-only" htmlFor={this.getInputId(index)}>
                        Color Input2
                        {index}
                      </label>

                      <input class="color-input" type="color" value={colorOption} id={this.getInputId(index)} onInput={event => this.handleChange(index, event)} />
                    </div>
                  ))}
                </div>

                <div class="spacer"></div>

                <button class="random-palette widget-wrapper radio-label" onClick={() => this.randomizePalette()}>
                  Random Palette
                </button>
              </div>

              <div class="row">
                <div class="inner-row">
                  <demo-shape-selector
                    shape={this.isSquare ? 'square' : 'circle'}
                    onChange={newShape => {
                      this.isSquare = newShape.target.value === 'square';
                    }}
                  />
                  <demo-size-selector
                    size={this.size}
                    onChange={(newSize: any) => {
                      console.log('changing size');
                      this.size = newSize.target.value;
                    }}
                  />
                  <demo-light-dark-toggle
                    theme={this.theme}
                    onChange={newTheme => {
                      this.theme = newTheme.target.checked ? 'dark' : 'light';
                    }}
                  />
                </div>
                <div class="inner-row">
                  <demo-library-links githubUrl="https://github.com/cmgriffing/boringer-avatars/blob/main/packages/lib-stencil" />
                </div>
              </div>
            </div>
            <div class="avatar-list">
              {exampleNames.map((name: string) => (
                <div class="avatar-list-item" key={name}>
                  {this.variant === 'beam' && <boringer-avatar-beam hasTitle={false} size={this.size} name={name} square={this.isSquare} colors={this.colors} />}

                  {this.variant === 'bauhaus' && <boringer-avatar-bauhaus hasTitle={false} size={this.size} name={name} square={this.isSquare} colors={this.colors} />}

                  {this.variant === 'marble' && <boringer-avatar-marble hasTitle={false} size={this.size} name={name} square={this.isSquare} colors={this.colors} />}

                  {this.variant === 'pixel' && <boringer-avatar-pixel hasTitle={false} size={this.size} name={name} square={this.isSquare} colors={this.colors} />}

                  {this.variant === 'ring' && <boringer-avatar-ring hasTitle={false} size={this.size} name={name} square={this.isSquare} colors={this.colors} />}

                  {this.variant === 'sunset' && <boringer-avatar-sunset hasTitle={false} size={this.size} name={name} square={this.isSquare} colors={this.colors} />}
                  <div class="avatar-list-item-name">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
