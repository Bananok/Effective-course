import React, { FC } from "react";

import { useParams } from "react-router";
import styled from "styled-components";

import { Card } from "../../types/card";
import { characters } from "../Characters";
import { сomics } from "../Comics";
import { series } from "../Series";

const determineEntity = (entity: string) => {
  let entities: Card[] = series;
  if (entity === "characters") entities = characters;
  else if (entity === "comics") entities = сomics;
  return entities;
};

interface AboutProps {
  entities: string;
  hasCharacters?: boolean;
  hasComics?: boolean;
  hasSeries?: boolean;
}

const About: FC<AboutProps> = ({
  entities,
  hasCharacters,
  hasComics,
  hasSeries,
}) => {
  const { id } = useParams();
  const item = determineEntity(entities).find(
    (entity) => entity.id === Number(id)
  );
  if (!item) return <>Not Found item with id {id}</>;
  const { title, image, desc } = item;
  return (
    <Root>
      <ImageItem src={image} />
      <TextItem>
        <TitleItem>
          <Title>{title}</Title>
          <Desription>{desc}</Desription>
        </TitleItem>
        <CharactersItem hasCharacters={hasCharacters}>
          <LinkTitle>Characters</LinkTitle>
          <Links>
            {item.characters?.map((id) => (
              <MyLink key={id} href={`/${id}`}>
                {characters.find((character) => character.id === id)?.title}
              </MyLink>
            ))}
          </Links>
        </CharactersItem>
        <ComicsItem hasComics={hasComics}>
          <LinkTitle>Comics</LinkTitle>
          <Links>
            {item.comics?.map((id) => (
              <MyLink key={id} href={`/comics/${id}`}>
                {сomics.find((сomic) => сomic.id === id)?.title}
              </MyLink>
            ))}
          </Links>
        </ComicsItem>
        <SeriesItem hasSeries={hasSeries}>
          <LinkTitle>Series</LinkTitle>
          <Links>
            {item.series?.map((id) => (
              <MyLink key={id} href={`/series/${id}`}>
                {series.find((episode) => episode.id === id)?.title}
              </MyLink>
            ))}
          </Links>
        </SeriesItem>
      </TextItem>
    </Root>
  );
};

export default About;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const ImageItem = styled.img`
  width: auto;
  height: 400px;
`;
const TextItem = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  color: ${({ theme }) => theme.colors.black};
`;
const TitleItem = styled.div`
  width: 30%;
`;
const Title = styled.h3`
  ${({ theme }) => theme.typography.titleL};
  padding-bottom: 20px;
`;
const Desription = styled.div`
  ${({ theme }) => theme.typography.lightL};
`;
const LinkTitle = styled.div`
  ${({ theme }) => theme.typography.titleM};
  padding-bottom: 20px;
`;
const Links = styled.div`
  display: flex;
  flex-direction: column;
`;
const MyLink = styled.a`
  text-decoration: none;
  padding-bottom: 10px;
`;
const CharactersItem = styled.div<{ hasCharacters?: boolean }>`
  display: ${({ hasCharacters }) => (hasCharacters ? "flex" : "none")};
  flex-direction: column;
`;
const ComicsItem = styled.div<{ hasComics?: boolean }>`
  display: ${({ hasComics }) => (hasComics ? "flex" : "none")};
  flex-direction: column;
`;
const SeriesItem = styled.div<{ hasSeries?: boolean }>`
  display: ${({ hasSeries }) => (hasSeries ? "flex" : "none")};
  flex-direction: column;
`;
