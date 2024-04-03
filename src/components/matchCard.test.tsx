import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../../test";
import { MatchCard } from "./matchCard.tsx";

describe("matchList", () => {
  it("試合/コースが表示できる", async () => {
    render(<MatchCard
      id={"10"}
      courseIndex={0}
      matchIndex={0}
      isFinished={false}
      matchType={"primary"}
      teams={{
        right: {
          id: "1",
          teamName: "右のチーム",
          isMultiWalk: false,
          category: "elementary",
        },
        left: {
          id: "2",
          teamName: "左のチーム",
          isMultiWalk: false,
          category: "elementary",
        },
      }}
    />);

    expect(screen.findByText("第1試合 1コース")).toBeTruthy();
    expect(screen.findByText("左のチーム")).toBeTruthy();
    expect(screen.findByText("右のチーム")).toBeTruthy();
  });

});

