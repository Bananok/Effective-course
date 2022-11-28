import React, { FC } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

import LogoIcon from "../../assets/icons/logo.svg";

const Header: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Root>
      <Logo src={LogoIcon} alt="Logo" />
      <Buttons>
        <HeaderButton
          onClick={() => navigate("/")}
          isThisPage={pathname === "/"}
        >
          Characters
        </HeaderButton>
        <HeaderButton
          onClick={() => navigate("/comics")}
          isThisPage={pathname === "/comics"}
        >
          Comics
        </HeaderButton>
        <HeaderButton
          onClick={() => navigate("/series")}
          isThisPage={pathname === "/series"}
        >
          Series
        </HeaderButton>
      </Buttons>
    </Root>
  );
};

export default Header;

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.red};
`;
const Logo = styled.img`
  width: auto;
  height: 60%;
  padding-left: 10px;
`;
const Buttons = styled.div`
  display: flex;
  padding-right: 10px;
`;
const HeaderButton = styled.button<{ isThisPage: boolean }>`
  border: none;
  background: transparent;
  cursor: pointer;
  ${({ theme }) => theme.typography.titleM};
  color: ${({ theme }) => theme.colors.yellow};
  text-decoration: ${({ isThisPage }) => (isThisPage ? "underline" : "none")};

  :hover {
    text-decoration: underline;
  }
`;
