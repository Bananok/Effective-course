import React from "react";

import { useRoutes } from "react-router-dom";
import styled from "styled-components";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { routes } from "./routes";

const App = () => {
  const route = useRoutes(routes);

  return (
    <Root>
      <Header />
      <Content>{route}</Content>
      <Footer />
    </Root>
  );
};

export default App;

const Root = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Content = styled.div`
  width: 100%;
`;
