import { Button } from "ui";
import { Avatar } from "@boringer-avatars/react";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <Avatar
        title={false}
        size={420}
        variant="bauhaus"
        name="FOOOOOBAAARRRR"
        square={false}
        colors={["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"]}
      />
    </div>
  );
}
