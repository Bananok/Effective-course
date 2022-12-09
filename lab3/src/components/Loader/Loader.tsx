import React, { FC } from "react";

import styled from "styled-components";

interface LoaderProps {
  error?: string;
}

const Loader: FC<LoaderProps> = ({ error }) => {
  return <Root>{error || <Loading />}</Root>;
};

export default Loader;

const Root = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.typography.subtitleM};
`;
const Loading = styled.div`
  font-size: 40px;
  color: black;
  border: 16px solid ${({ theme }) => theme.colors.gray2};
  border-top: 16px solid ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  margin: auto;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
