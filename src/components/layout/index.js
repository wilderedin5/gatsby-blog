import styled from "@emotion/styled";
import React from "react";
import MetaData from "../page-metadata";
import { Footer } from "./footer";
import { Header } from "./header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const Main = styled.main`
  padding: ${(p) => `${p.theme.space[5]} 0`};
  flex: 1;
`;

export const Layout = ({ children, title }) => (
  <Container>
    <MetaData title={title} />
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Container>
);
