import { Component, h } from '@stencil/core';
import { BoringerAvatar } from '@boringer-avatars/stencil/dist/components/boringer-avatar';
import { A } from '@boringer-avatars/stencil/dist/components/avatar-beam';

// TODO: somehow this makes everything work. IT IS BLOWING MY MIND
customElements.define('avatar-beam', A);

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    let colors = ['#FFAD08', '#EDD75A', '#73B06F', '#0C8F8F', '#405059'];
    return (
      <div>
        <header>
          <h1>@boringer-avatars/stencil</h1>
        </header>

        <main>
          Testing
          <boringer-avatar hasTitle={false} size="40" variant="beam" name="testing" square={false} colors={colors} />
          <boringer-avatar hasTitle={false} size="40" variant="beam" name="testing2" square={false} colors={colors} />
          <boringer-avatar hasTitle={false} size="40" variant="bauhaus" name="testing" square={false} colors={colors} />
          <boringer-avatar hasTitle={false} size="40" variant="pixel" name="testing" square={false} colors={colors} />
          <boringer-avatar hasTitle={false} size="40" variant="marble" name="testing" square={false} colors={colors} />
          <boringer-avatar hasTitle={false} size="40" variant="ring" name="testing" square={false} colors={colors} />
          <boringer-avatar hasTitle={false} size="40" variant="sunset" name="testing" square={false} colors={colors} />
        </main>
      </div>
    );
  }
}
