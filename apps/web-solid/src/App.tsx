import type { Component } from "solid-js";
import { Avatar } from "@boringer-avatars/solid";

const App: Component = () => {
  return (
    <>
      <Avatar
        title={false}
        size={420}
        variant="bauhaus"
        name="FOOOOOBAAARRRR"
        square={false}
        colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
      />
    </>
  );
};

export default App;
