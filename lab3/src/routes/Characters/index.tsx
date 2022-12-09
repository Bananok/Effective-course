import React, { FC, useCallback, useEffect, useState } from "react";

import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Virtuoso } from "react-virtuoso";
import styled from "styled-components";

import charactersApi from "../../api/characters";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import appStore from "../../stores/appStore";
import { Card as CardType } from "../../types/card";

const Characters: FC = () => {
  const { themeIsBlack } = appStore;
  const [searchString, setSearchString] = useState<string>("");
  const [scrollCharacters, setScrollCharacters] = useState<CardType[]>([]);
  const [offset, setOffset] = useState(1);
  const [error, setError] = useState<string>();
  const { t } = useTranslation();

  const handleSetSearchString = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchString(event.target.value);
  };
  const handleSubmitSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    searchString
      ? charactersApi
          .getSearchCharacters(0, searchString)
          .then((res) => setScrollCharacters(res))
      : charactersApi
          .getCharactersScroll(0)
          .then((res) => setScrollCharacters(res));
    event.preventDefault();
  };

  const getCharacters = useCallback(async () => {
    setOffset(offset + 1);
    searchString
      ? charactersApi
          .getSearchCharacters(offset, searchString)
          .then((res) =>
            setScrollCharacters((prevState) => [...prevState, ...res])
          )
      : charactersApi
          .getCharactersScroll(offset)
          .then((res) =>
            setScrollCharacters((prevState) => [...prevState, ...res])
          );
  }, [setScrollCharacters, offset, searchString]);

  useEffect(() => {
    charactersApi
      .getCharactersScroll(0)
      .then((res) => setScrollCharacters(res))
      .catch((error: { message: string }) => setError(error.message));
  }, []);
  return (
    <Root>
      {!!scrollCharacters.length ? (
        <>
          <Title>
            {t("characters")}
            <NumberCharacters>({scrollCharacters.length})</NumberCharacters>
          </Title>
          <SearchItem onSubmit={handleSubmitSearch}>
            <SearchInput
              value={searchString}
              onChange={handleSetSearchString}
              placeholder={t("search placeholder") || ""}
            />
            <SearchButton themeIsBlack={themeIsBlack} type="submit">
              {t("search")}
            </SearchButton>
          </SearchItem>
          <Cards>
            <Virtuoso
              style={{
                height: "400px",
                width: "100%",
              }}
              data={scrollCharacters}
              endReached={getCharacters}
              overscan={200}
              itemContent={(index, character) => {
                return <Card key={index} card={character} />;
              }}
            />
          </Cards>
        </>
      ) : (
        <Loader error={error} />
      )}
    </Root>
  );
};

export default observer(Characters);

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
const SearchButton = styled.button<{ themeIsBlack: boolean }>`
  width: 20%;
  background-color: ${({ theme, themeIsBlack }) =>
    themeIsBlack ? theme.colors.black : theme.colors.yellow};
  border-color: ${({ themeIsBlack, theme }) =>
    themeIsBlack ? theme.colors.white : "black"};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.typography.lightL};
  cursor: pointer;
`;
const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;
