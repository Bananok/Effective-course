import React, { FC } from "react";

import styled from "styled-components";

import Card from "../../components/Card";
import { Card as CardType } from "../../types/card";

export const сomics: CardType[] = [
  {
    id: 0,
    title: "Captain America/Iron Man (2021 - 2022)",
    desc: "A government agent turned Hydra provocateur stages a daring breakout on her way to prison.",
    image:
      "https://i.annihil.us/u/prod/marvel/i/mg/2/10/61a8e1bdbd3ef/standard_incredible.jpg",
    characters: [0, 1, 2],
    series: [0, 1, 2],
  },
  {
    id: 1,
    title: "Captain America: Steve Rogers (2016) #10",
    desc: "The unbeatable Taskmaster is back! And what's worse for Cap is that he's learned Steve Rogers' greatest secret!",
    image:
      "https://i.annihil.us/u/prod/marvel/i/mg/6/50/58824eb0b4d44/clean.jpg",
    characters: [1, 2, 3],
    series: [1, 2, 3],
  },
  {
    id: 2,
    title: "Thor (2020 - Present)",
    desc: "A BRAND-NEW, SUPERSTAR CREATIVE TEAM TAKES THE KING OF ASGARD TO NEW REALMS OF GLORY! The prince is now a king. All Asgard lies before Thor, the God of Thunder. And after many months of war, the Ten Realms are finally at peace. But the skies above the Realm Eternal are never clear for long. The Black Winter is coming. And the God of the Storm will be powerless before it.",
    image:
      "https://i.annihil.us/u/prod/marvel/i/mg/3/20/5e011a4977a80/standard_incredible.jpg",
    characters: [0, 1, 2],
    series: [0, 1, 2],
  },
];

const Comics: FC = () => {
  return (
    <Root>
      <Title>
        Comics<NumberComics>({сomics.length})</NumberComics>
      </Title>
      <SearchItem>
        <SearchInput placeholder="Search for Comics by title" />
        <SearchButton>SEARCH</SearchButton>
      </SearchItem>
      <Cards>
        {сomics.map((comic) => (
          <Card key={comic.id} card={comic} />
        ))}
      </Cards>
    </Root>
  );
};

export default Comics;

const Root = styled.div``;
const Title = styled.h1`
  padding-left: 20px;
  ${({ theme }) => theme.typography.titleL};
  color: ${({ theme }) => theme.colors.black};
`;
const NumberComics = styled.span`
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
