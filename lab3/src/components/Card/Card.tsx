import React, { FC } from "react";

import styled from "styled-components";
import { Card as CardType } from "types/card";

interface CardProps {
  card: CardType;
}

const Card: FC<CardProps> = ({ card }) => {
  const { title, desc, image } = card;

  return (
    <Root>
      <ImageItem src={image} />
      <TextItem>
        <Title>{title}</Title>
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
const Title = styled.h3`
  color: ${({ theme }) => theme.colors.red};
  ${({ theme }) => theme.typography.subtitleM};
  padding-top: 10px;
`;
const Description = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.typography.lightM};
`;
