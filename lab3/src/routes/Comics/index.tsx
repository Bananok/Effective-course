import React, { FC, useCallback, useEffect, useState } from "react";

import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Virtuoso } from "react-virtuoso";
import styled from "styled-components";

import comics from "../../api/comics";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import appStore from "../../stores/appStore";
import { Card as CardType } from "../../types/card";

const Comics: FC = () => {
  const [searchString, setSearchString] = useState<string>("");
  const [scrollComics, setScrollComics] = useState<CardType[]>([]);
  const [offset, setOffset] = useState(1);
  const [error, setError] = useState<string>();
  const { t } = useTranslation();
  const { themeIsBlack } = appStore;

  const handleSetSearchString = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchString(event.target.value);
  };
  const handleSubmitSearch = (event: React.ChangeEvent<HTMLFormElement>) => {
    searchString
      ? comics
          .getSearchComics(0, searchString)
          .then((res) => setScrollComics(res))
      : comics.getComicsScroll(0).then((res) => setScrollComics(res));
    event.preventDefault();
  };

  const getComics = useCallback(async () => {
    setOffset(offset + 1);
    searchString
      ? comics
          .getSearchComics(offset, searchString)
          .then((res) => setScrollComics((prevState) => [...prevState, ...res]))
      : comics
          .getComicsScroll(offset)
          .then((res) =>
            setScrollComics((prevState) => [...prevState, ...res])
          );
  }, [setScrollComics, offset, searchString]);

  useEffect(() => {
    comics
      .getComicsScroll(0)
      .then((res) => setScrollComics(res))
      .catch((error: { message: string }) => setError(error.message));
  }, []);
  return (
    <Root>
      {!!scrollComics.length ? (
        <>
          <Title>
            {t("comics")}
            <NumberComics>({scrollComics.length})</NumberComics>
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
              data={scrollComics}
              endReached={getComics}
              overscan={200}
              itemContent={(index, comic) => {
                return <Card key={index} card={comic} />;
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

export default observer(Comics);

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
