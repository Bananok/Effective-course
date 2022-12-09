import React, { FC, useCallback, useEffect, useState } from "react";

import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { Virtuoso } from "react-virtuoso";
import styled from "styled-components";

import series from "../../api/series";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import appStore from "../../stores/appStore";
import { Card as CardType } from "../../types/card";

const Series: FC = () => {
  const [searchString, setSearchString] = useState<string>("");
  const [scrollSeries, setScrollSeries] = useState<CardType[]>([]);
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
      ? series
          .getSearchSeries(0, searchString)
          .then((res) => setScrollSeries(res))
      : series.getSeriesScroll(0).then((res) => setScrollSeries(res));
    event.preventDefault();
  };

  const getseries = useCallback(async () => {
    setOffset(offset + 1);
    searchString
      ? series
          .getSearchSeries(offset, searchString)
          .then((res) => setScrollSeries((prevState) => [...prevState, ...res]))
      : series
          .getSeriesScroll(offset)
          .then((res) =>
            setScrollSeries((prevState) => [...prevState, ...res])
          );
  }, [setScrollSeries, offset, searchString]);

  useEffect(() => {
    series
      .getSeriesScroll(0)
      .then((res) => setScrollSeries(res))
      .catch((error: { message: string }) => setError(error.message));
  }, []);
  return (
    <Root>
      {!!scrollSeries.length ? (
        <>
          <Title>
            {t("series")}
            <NumberSeries>({scrollSeries.length})</NumberSeries>
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
              data={scrollSeries}
              endReached={getseries}
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

export default observer(Series);

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
