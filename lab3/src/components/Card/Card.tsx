import React, { FC } from "react";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { Card as CardType } from "../../types/card";

interface CardProps {
  card: CardType;
}

const Card: FC<CardProps> = ({ card }) => {
  const { id, name, title, description, thumbnail } = card;

  return (
    <Root>
      <NavLink style={{ maxWidth: "max-content" }} to={String(id)}>
        <ImageItem src={`${thumbnail.path}.${thumbnail.extension}`} />
      </NavLink>
      <TextItem>
        <NavLink to={String(id)} style={{ textDecoration: "none" }}>
          <Link>{name || title}</Link>
        </NavLink>
        <Description>{description}</Description>
      </TextItem>
    </Root>
  );
};

export default Card;

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: flex;
  align-items: center;
`;
const ImageItem = styled.img`
  width: 500px;
  height: 250px;
`;
const TextItem = styled.div`
  padding-left: 50px;
`;
const Link = styled.h3`
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.typography.subtitleM};
  padding-top: 10px;
  margin-bottom: 40px;
`;
const Description = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.typography.desRegular};
  width: 700px;
`;
