import { render, screen, within } from "@testing-library/react-native";
import { composeStories } from "@storybook/react";

import * as stories from "./Card.stories";
import { CardData } from "./Card";

const { Default } = composeStories(stories);

const data: CardData = {
  from: new Date("2018-01-20T12:00Z"),
  to: new Date("2018-01-20T12:30Z"),
  intensity: {
    forecast: 266,
    actual: 263,
    index: "moderate",
  },
};

describe("Card", () => {
  it("renders correctly", () => {
    render(<Default data={data} />);
    expect(screen.getByTestId("CardContainer")).toBeTruthy();

    expect(screen.getByLabelText("Forecast Value: 266")).toBeTruthy();
    expect(screen.getByLabelText("Actual Value: 263")).toBeTruthy();
    expect(screen.getByLabelText("Intensity Level: Moderate")).toBeTruthy();
  });

  it("renders time range", () => {
    render(<Default data={data} />);
    expect(screen.getByText("12:00 - 12:30")).toBeTruthy();
  });

  describe("index/level data point", () => {
    it("renders moderate", () => {
      render(
        <Default
          data={{
            ...data,
            intensity: { ...data.intensity, index: "moderate" },
          }}
        />,
      );

      const intensityElement = screen.getByLabelText(
        "Intensity Level: Moderate",
      );
      expect(intensityElement).toHaveTextContent("Moderate");

      expect(
        within(intensityElement).getByTestId("bar-chart-2-icon"),
      ).toBeTruthy();
    });

    it("renders high", () => {
      render(
        <Default
          data={{
            ...data,
            intensity: { ...data.intensity, index: "high" },
          }}
        />,
      );

      const intensityElement = screen.getByLabelText("Intensity Level: High");
      expect(intensityElement).toHaveTextContent("High");

      expect(
        within(intensityElement).getByTestId("bar-chart-2-icon"),
      ).toBeTruthy();
    });

    // could do a loop to comprehensively test all intensity levels?
  });

  describe("forecast data point", () => {
    it("renders correctly", () => {
      render(
        <Default
          data={{
            ...data,
            intensity: { ...data.intensity, forecast: 1337 },
          }}
        />,
      );

      const intensityElement = screen.getByLabelText("Forecast Value: 1337");
      expect(intensityElement).toHaveTextContent("1337");

      within(intensityElement).getByTestId("trending-up-icon");
    });
  });

  describe("actual data point", () => {
    it("renders correctly", () => {
      render(
        <Default
          data={{
            ...data,
            intensity: { ...data.intensity, actual: 9999 },
          }}
        />,
      );

      const intensityElement = screen.getByLabelText("Actual Value: 9999");
      expect(intensityElement).toHaveTextContent("9999");

      expect(within(intensityElement).getByTestId("eye-icon")).toBeTruthy();
    });
  });
});
