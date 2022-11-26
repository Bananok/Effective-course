import React, { FC } from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Card as CardType } from "../../types/card";

interface CardProps {
  card: CardType;
}

const Card: FC<CardProps> = ({ card }) => {
  const { id, title, desc, image } = card;

  return (
    <Root>
      <NavLink to={String(id)}>
        <ImageItem src={image} />
      </NavLink>
      <TextItem>
        <NavLink to={String(id)} style={{ textDecoration: "none" }}>
          <Link>{title}</Link>
        </NavLink>
        <Description>{desc}</Description>
      </TextItem>
    </Root>
  );
};

export default Card;

const Root = styled.div``;
const ImageItem = styled.img`
  width: 100%;
  height: 250px;
`;
const TextItem = styled.div``;
const Link = styled.h3`
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.typography.subtitleM};
  padding-top: 10px;
`;
const Description = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.typography.lightM};
`;
