import React, { FunctionComponent } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Container, Logo } from "./style";
import { Center } from "../Center/style";

export const Header: FunctionComponent = () => {
  return (
    <div>
      <Container>
        <Center>
          <Logo>
            <Link href="/">
              <a>What's Next?!</a>
            </Link>
          </Logo>
        </Center>
      </Container>
    </div>
  );
};
