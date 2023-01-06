import { createSignal } from "solid-js";
import { Avatar } from "@boringer-avatars/solid";

export function HeroImage() {
  const [name, setName] = createSignal(`${Date.now()}`);
  const [animationClass, setAnimationClass] = createSignal("");
  const size = `100%`;
  const colors = ["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"];

  setInterval(() => {
    setAnimationClass("blur");
    setTimeout(() => {
      setName(`${Date.now()}`);
      setAnimationClass("");
    }, 700);
  }, 3000);

  return (
    <div class={`hero-image ${animationClass()}`}>
      <Avatar
        variant={"beam"}
        name={name()}
        colors={colors}
        size={size}
        square={false}
      />
    </div>
  );
}
