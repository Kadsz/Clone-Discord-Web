import React from "react";

import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton mentions={5} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={9} />
      <ServerButton />

    </Container>

  )
}

export default ServerList
