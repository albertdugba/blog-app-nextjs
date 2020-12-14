import React, { FunctionComponent } from "react";
import { Center } from "../Center/style";
import { Container } from "../Header/style";

export const Footer: FunctionComponent = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container>
      <Center>
        <a href="www.google.com">Google: {currentYear}</a>
      </Center>
    </Container>
  );
};
