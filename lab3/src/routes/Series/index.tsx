import React, { FC } from "react";

import styled from "styled-components";

import Card from "../../components/Card";
import { Card as CardType } from "../../types/card";

const Series: FC = () => {
  const series: CardType[] = [
    {
      id: 0,
      title: "What If...?",
      desc: '“What If…?” flips the script on the MCU, reimagining famous events from the films in unexpected ways. Marvel Studios’ first animated series focuses on different heroes from the MCU, featuring a voice cast that includes a host of stars who reprise their roles. Directed by Bryan Andrews with AC Bradley as head writer, "What If…?" launches exclusively on Disney+ on August 11, 2021.',
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/whatif_lob_crd_01.jpg",
    },
    {
      id: 1,
      title: "Agents of S.H.I.E.L.D.",
      desc: "“Marvel’s Agents of S.H.I.E.L.D.” stars Clark Gregg, Ming-Na Wen, Chloe Bennet, Iain De Caestecker, Elizabeth Henstridge, Henry Simmons, Natalia Cordova-Buckley and Jeff Ward.",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/agentsofshields7_lob_crd_04.jpg",
    },
    {
      id: 2,
      title: "Marvel's Avengers",
      desc: "The Black Panther must decide his loyalties. Is he an Avenger first or King of Wakanda? As the mysterious Shadow Council rises to challenge Wakanda, T’Challa teams up with his sister Shuri to go on missions that no other Avenger can. It’s a globe-trotting journey of espionage and mystery as old foes resurface and new friends are made. In the end, Black Panther must balance defending his home and stopping threats before they start. Is he a sword or shield? Only he can decide.",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/animatedavengers_lob_crd_02.jpg",
    },
    {
      id: 3,
      title: "Marvel's Cloak and Dagger",
      desc: "In Season 2 of Marvel's Cloak & Dagger, Tyrone (Aubrey Joseph) and Tandy (Olivia Holt) face difficult decisions as young heroes. With new enhanced powers, they tackle a heartless vigilante and uncover an evil preying on young women in their city.",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/cloakanddagger_lob_crd_02_1.jpg",
    },
    {
      id: 4,
      title: "Agent Carter",
      desc: "Dedicated to the fight against new Atomic Age threats in the wake of World War II, Peggy must now journey from New York City to Los Angeles for her most dangerous assignment yet. But even as she descovers new friends, a new home – perhaps even a new love – she's about to find out that the bright lights of the post-war Hollywood mask a more sinister threat to everyone she is sworn to protect.",
      image:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/agentcarters2_lob_crd_03.jpg",
    },
  ];
  return (
    <Root>
      <Title>
        Series<NumberSeries>({series.length})</NumberSeries>
      </Title>
      <SearchItem>
        <SearchInput placeholder="Search for Series by title" />
        <SearchButton>SEARCH</SearchButton>
      </SearchItem>
      <Cards>
        {series.map((episode) => (
          <Card key={episode.id} card={episode} />
        ))}
      </Cards>
    </Root>
  );
};

export default Series;

const Root = styled.div``;
const Title = styled.h1`
  padding-left: 20px;
  ${({ theme }) => theme.typography.titleL};
  color: ${({ theme }) => theme.colors.black};
`;
const NumberSeries = styled.span`
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
