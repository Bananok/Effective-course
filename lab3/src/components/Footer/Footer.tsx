import React, { FC } from "react";

import styled from "styled-components";

import LogoIcon from "../../assets/icons/logo.svg";

const Footer: FC = () => {
  return (
    <Root>
      <Logo src={LogoIcon} alt="Logo" />
      <TextItem>Data provided by Marvel. © 2022 MARVEL</TextItem>
      <Link
        href="https://developer.marvel.com/"
        target="_blank"
        rel="noreferrer"
      >
        https://developer.marvel.com/
      </Link>
    </Root>
  );
};

export default Footer;

const Root = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: end;
  height: 120px;
  background-color: ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.typography.lightL};
`;
const Logo = styled.img`
  width: 150px;
  height: 50px;
`;
const TextItem = styled.div`
  padding-left: 15px;
`;
const Link = styled.a`
  padding-left: 15px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
`;
