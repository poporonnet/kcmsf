import { Box, Flex, SegmentedControl, Switch, Title } from "@mantine/core";
import { MatchCard } from "../components/matchCard.tsx";
import { useState } from "react";

// todo: apiからデータを取得する
// 考慮事項: 予選・決勝で同点の時のじゃんけんの入力をどうするか

export const MatchList = () => {
  const [endCheck, setEndCheck] = useState(false);
  const [category, setCategory] = useState("elementary");
  return (
    <Box style={{ width: "100%" }}>
      <Switch
        checked={endCheck}
        onChange={(event) => setEndCheck(event.currentTarget.checked)}
        label="終了した試合を表示しない"
        style={{
          left: "1rem",
          top: "4.5rem",
          position: "absolute",
        }}
      />
      <Box
        style={{
          margin: "0 auto",
          width: "15rem",
          height: "3rem",
        }}
      >
        <SegmentedControl
          data={[
            { value: "elementary", label: "小学生部門" },
            { value: "open", label: "オープン部門" },
          ]}
          value={category}
          onChange={(value) => setCategory(value)}
          fullWidth
        />
      </Box>
      <Title order={2}>予選</Title>
      <Flex gap="1rem">
        <Box
          style={{
            backgroundColor: "#e0f0e0",
            borderRadius: "0.5rem",
          }}
        >
          <Title order={4}>1コート</Title>
          {elements.map((element) => {
            if (
              element.matchType === "primary" &&
              category === element.category &&
              !(element.isEnd && endCheck) &&
              element.coat === 1
            )
              return (
                <MatchCard
                  id={element.id}
                  key={element.id}
                  teamName1={element.teamName1}
                  teamName2={element.teamName2}
                  matchType={element.matchType}
                  isEnd={element.isEnd}
                />
              );
          })}
        </Box>
        <Box
          style={{
            backgroundColor: "#f0f0e0",
            borderRadius: "0.5rem",
          }}
        >
          <Title order={4}>2コート</Title>
          {elements.map((element) => {
            if (
              element.matchType === "primary" &&
              category === element.category &&
              !(element.isEnd && endCheck) &&
              element.coat === 2
            )
              return (
                <MatchCard
                  id={element.id}
                  key={element.id}
                  teamName1={element.teamName1}
                  teamName2={element.teamName2}
                  matchType={element.matchType}
                  isEnd={element.isEnd}
                />
              );
          })}
        </Box>
        <Box
          style={{
            backgroundColor: "#f0e0e0",
            borderRadius: "0.5rem",
          }}
        >
          <Title order={4}>3コート</Title>
          {elements.map((element) => {
            if (
              element.matchType === "primary" &&
              category === element.category &&
              !(element.isEnd && endCheck) &&
              element.coat === 3
            )
              return (
                <MatchCard
                  id={element.id}
                  key={element.id}
                  teamName1={element.teamName1}
                  teamName2={element.teamName2}
                  matchType={element.matchType}
                  isEnd={element.isEnd}
                />
              );
          })}
        </Box>
      </Flex>
      <Title order={2}>決勝</Title>
      <Flex gap="1rem">
        <Box
          style={{
            backgroundColor: "#e0f0e0",
            borderRadius: "0.5rem",
          }}
        >
          {elements.map((element) => {
            if (
              element.matchType === "final" &&
              category === element.category &&
              !(element.isEnd && endCheck) &&
              element.coat === 1
            )
              return (
                <MatchCard
                  id={element.id}
                  key={element.id}
                  teamName1={element.teamName1}
                  teamName2={element.teamName2}
                  matchType={element.matchType}
                  isEnd={element.isEnd}
                />
              );
          })}
        </Box>
        <Box
          style={{
            backgroundColor: "#f0f0e0",
            borderRadius: "0.5rem",
          }}
        >
          {elements.map((element) => {
            if (
              element.matchType === "final" &&
              category === element.category &&
              !(element.isEnd && endCheck) &&
              element.coat === 2
            )
              return (
                <MatchCard
                  id={element.id}
                  key={element.id}
                  teamName1={element.teamName1}
                  teamName2={element.teamName2}
                  matchType={element.matchType}
                  isEnd={element.isEnd}
                />
              );
          })}
        </Box>
        <Box
          style={{
            backgroundColor: "#f0e0e0",
            borderRadius: "0.5rem",
          }}
        >
          {elements.map((element) => {
            if (
              element.matchType === "final" &&
              category === element.category &&
              !(element.isEnd && endCheck) &&
              element.coat === 3
            )
              return (
                <MatchCard
                  id={element.id}
                  key={element.id}
                  teamName1={element.teamName1}
                  teamName2={element.teamName2}
                  matchType={element.matchType}
                  isEnd={element.isEnd}
                />
              );
          })}
        </Box>
      </Flex>
    </Box>
  );
};

const elements = [
  {
    id: 1375209,
    teamName1: "ポケモン",
    teamName2: "ドラえもん",
    matchType: "primary",
    coat: 1,
    isEnd: true,
    category: "elementary",
  },
  {
    id: 9325702,
    teamName1: "ミッキー",
    teamName2: "ドナルド",
    matchType: "primary",
    coat: 1,
    isEnd: false,
    category: "open",
  },
  {
    id: 9237586,
    teamName1: "ピカチュウ",
    teamName2: "イーブイ",
    matchType: "primary",
    coat: 1,
    isEnd: true,
    category: "open",
  },
  {
    id: 9325402,
    teamName1: "スヌーピー",
    teamName2: "ドラゴンボール",
    matchType: "primary",
    coat: 2,
    isEnd: false,
    category: "elementary",
  },
  {
    id: 9324029,
    teamName1: "ポケモン",
    teamName2: "ワンピース",
    matchType: "primary",
    coat: 1,
    isEnd: false,
    category: "elementary",
  },
  {
    id: 9325232,
    teamName1: "ドラえもん",
    teamName2: "ポケモン",
    matchType: "primary",
    coat: 1,
    isEnd: true,
    category: "elementary",
  },
  {
    id: 9323812,
    teamName1: "ピカチュウ",
    teamName2: "イーブイ",
    matchType: "primary",
    coat: 2,
    isEnd: false,
    category: "open",
  },
  {
    id: 9325702,
    teamName1: "ミッキー",
    teamName2: "ドナルド",
    matchType: "primary",
    coat: 2,
    isEnd: false,
    category: "open",
  },
  {
    id: 9325402,
    teamName1: "スヌーピー",
    teamName2: "ドラゴンボール",
    matchType: "primary",
    coat: 3,
    isEnd: false,
    category: "elementary",
  },
  {
    id: 9324029,
    teamName1: "ポケモン",
    teamName2: "ワンピース",
    matchType: "primary",
    coat: 3,
    isEnd: false,
    category: "elementary",
  },
  {
    id: 9321232,
    teamName1: "ドラえもん",
    teamName2: "ポケモン",
    matchType: "primary",
    coat: 3,
    isEnd: true,
    category: "elementary",
  },
  {
    id: 9323812,
    teamName1: "ピカチュウ",
    teamName2: "イーブイ",
    matchType: "primary",
    coat: 3,
    isEnd: false,
    category: "open",
  },
  {
    id: 9376029,
    teamName1: "ドラえもん",
    teamName2: "ポケモン",
    matchType: "primary",
    coat: 1,
    isEnd: false,
    category: "elementary",
  },
  {
    id: 9325232,
    teamName1: "ドラえもん",
    teamName2: "ポケモン",
    matchType: "primary",
    coat: 2,
    isEnd: true,
    category: "elementary",
  },
  {
    id: 8435702,
    teamName1: "ピカチュウ",
    teamName2: "イーブイ",
    matchType: "primary",
    coat: 2,
    isEnd: false,
    category: "open",
  },
  {
    id: 9324029,
    teamName1: "ポケモン",
    teamName2: "ワンピース",
    matchType: "primary",
    coat: 2,
    isEnd: false,
    category: "elementary",
  },
  {
    id: 2397502,
    teamName1: "ピカチュウ",
    teamName2: "イーブイ",
    matchType: "primary",
    coat: 3,
    isEnd: false,
    category: "elementary",
  },
  {
    id: 9323812,
    teamName1: "ピカチュウ",
    teamName2: "イーブイ",
    matchType: "final",
    coat: 1,
    isEnd: false,
    category: "open",
  },
  {
    id: 9325702,
    teamName1: "ミッキー",
    teamName2: "ドナルド",
    matchType: "final",
    coat: 1,
    isEnd: false,
    category: "open",
  },
  {
    id: 9325402,
    teamName1: "スヌーピー",
    teamName2: "ドラゴンボール",
    matchType: "final",
    coat: 2,
    isEnd: false,
    category: "elementary",
  },
  {
    id: 4325602,
    teamName1: "ピカチュウ",
    teamName2: "イーブイ",
    matchType: "final",
    coat: 3,
    isEnd: true,
    category: "open",
  },
  {
    id: 9324029,
    teamName1: "ポケモン",
    teamName2: "ワンピース",
    matchType: "final",
    coat: 3,
    isEnd: false,
  },
  {
    id: 9321232,
    teamName1: "ドラえもん",
    teamName2: "ポケモン",
    matchType: "final",
    coat: 1,
    isEnd: false,
    category: "elementary",
  },
  {
    id: 9323812,
    teamName1: "ピカチュウ",
    teamName2: "イーブイ",
    matchType: "final",
    coat: 2,
    isEnd: false,
    category: "open",
  },
  {
    id: 9325702,
    teamName1: "ミッキー",
    teamName2: "ドナルド",
    matchType: "final",
    coat: 3,
    isEnd: true,
    category: "open",
  },
  {
    id: 9325402,
    teamName1: "スヌーピー",
    teamName2: "ドラゴンボール",
    matchType: "final",
    coat: 1,
    isEnd: false,
    category: "elementary",
  },
  {
    id: 9324029,
    teamName1: "ポケモン",
    teamName2: "ワンピース",
    matchType: "final",
    coat: 2,
    isEnd: false,
    category: "elementary",
  },
  {
    id: 9321232,
    teamName1: "ドラえもん",
    teamName2: "ポケモン",
    matchType: "final",
    coat: 3,
    isEnd: true,
    category: "elementary",
  },
];
