import React, { FC } from "react";

import styled from "styled-components";

import Card from "../../components/Card";
import { Card as CardType } from "../../types/card";

export const characters: CardType[] = [
  {
    id: 0,
    title: "IRON MAN",
    desc: "Inventor Tony Stark applies his genius for high-tech solutions to problems as Iron Man, the armored Avenger.",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_com_crd_01.jpg",
    comics: [0, 1],
    series: [0, 1, 2],
  },
  {
    id: 1,
    title: "CAPTAIN AMERICA",
    desc: "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world’s mightiest heroes and the leader of the Avengers.",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/003cap_com_crd_01.jpg",
    comics: [1, 2],
    series: [1, 2, 3],
  },
  {
    id: 2,
    title: "Spider-Man (Miles Morales)",
    desc: "In the alternate reality of Earth-1610, a young New York City teen was bitten by a genetically enhanced spider. When the Peter Parker of that dimension was killed, the teen—titled Miles Morales—was inspired to take up the fallen mantle.",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/037smm_com_crd_01.jpg",
    comics: [1, 2],
    series: [2, 3, 4],
  },
  {
    id: 3,
    title: "Hulk",
    desc: "Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk.",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/006hbb_com_crd_01.jpg",
    comics: [0, 1, 2],
    series: [0, 1, 2],
  },
  {
    id: 4,
    title: "thor",
    desc: "Thor Odinson wields the power of the ancient Asgardians to fight evil throughout the Nine Realms and beyond.",
    image:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/004tho_com_crd_01.jpg",
    comics: [0, 1, 2],
    series: [0, 1, 2],
  },
];

const Characters: FC = () => {
  return (
    <Root>
      <Title>
        Characters<NumberCharacters>({characters.length})</NumberCharacters>
      </Title>
      <SearchItem>
        <SearchInput placeholder="Search for Characters by title" />
        <SearchButton>SEARCH</SearchButton>
      </SearchItem>
      <Cards>
        {characters.map((character) => (
          <Card key={character.id} card={character} />
        ))}
      </Cards>
    </Root>
  );
};

export default Characters;

const Root = styled.div``;
const Title = styled.h1`
  padding-left: 20px;
  ${({ theme }) => theme.typography.titleL};
  color: ${({ theme }) => theme.colors.black};
`;
const NumberCharacters = styled.span`
  ${({ theme }) => theme.typography.titleM};
  color: ${({ theme }) => theme.colors.gray};
`;
const SearchItem = styled.form`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  height: 40px;
`;
const SearchInput = styled.input`
  width: 70%;
`;
const SearchButton = styled.button`
  width: 20%;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.typography.lightL};
  cursor: pointer;
`;
const Cards = styled.div`
  margin: 0 auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(1, 1fr);
  column-gap: 20px;
  row-gap: 10px;
  overflow: hidden;
`;
