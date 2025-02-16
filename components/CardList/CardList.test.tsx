import { render, screen, within } from "@testing-library/react-native";
import { composeStories } from "@storybook/react";

import * as stories from "./CardList.stories";
import { CardData } from "../Card/Card";

const { Default } = composeStories(stories);

const data: CardData[] = [
  {
    from: new Date("2025-01-20T12:30Z"),
    to: new Date("2025-01-20T13:00Z"),
    intensity: {
      forecast: 267,
      actual: 265,
      index: "high",
    },
  },
  {
    from: new Date("2025-01-21T12:30Z"),
    to: new Date("2025-01-21T13:00Z"),
    intensity: {
      forecast: 210,
      actual: 205,
      index: "moderate",
    },
  },
  {
    from: new Date("2025-01-22T12:30Z"),
    to: new Date("2025-01-22T13:00Z"),
    intensity: {
      forecast: 150,
      actual: 145,
      index: "low",
    },
  },
];

describe("CardList", () => {
  it("renders correctly", () => {
    render(<Default data={[]} />);
    expect(screen.getByTestId("CardListContainer")).toBeTruthy();
  });

  it(`renders ${data.length} cards`, () => {
    render(<Default data={data} />);
    const cards = screen.getAllByTestId("CardContainer");
    expect(cards).toHaveLength(data.length);
  });
});
