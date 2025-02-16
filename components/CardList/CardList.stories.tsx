import React from "react";
import { View } from "react-native";
import type { Meta, StoryObj } from "@storybook/react";
import dayjs from "dayjs";

import { CardList } from "./CardList";
import type { CardData } from "../Card/Card";

const meta = {
  title: "CardList",
  component: CardList,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof CardList>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData: CardData[] = [
  {
    from: new Date("2018-01-20T12:00Z"),
    to: new Date("2018-01-20T12:30Z"),
    intensity: {
      forecast: 267,
      actual: 265,
      index: "high",
    },
  },
  {
    from: new Date("2018-01-21T12:30Z"),
    to: new Date("2018-01-21T13:00Z"),
    intensity: {
      forecast: 210,
      actual: 205,
      index: "moderate",
    },
  },
  {
    from: new Date("2018-01-22T13:00Z"),
    to: new Date("2018-01-22T13:30Z"),
    intensity: {
      forecast: 150,
      actual: 145,
      index: "low",
    },
  },
];

let date = dayjs();

const indexes = [
  "very-low",
  "low",
  "moderate",
  "high",
  "very-high",
] as CardData["intensity"]["index"][];

for (let i = 0; i < 50; i++) {
  const from = date;
  const to = from.add(1, "hour");
  sampleData.push({
    from: from.toDate(),
    to: to.add(1, "hour").toDate(),
    intensity: {
      forecast: Math.floor(Math.random() * 300),
      actual: Math.floor(Math.random() * 300),
      index: indexes[Math.floor(Math.random() * indexes.length)],
    },
  });
  date = to;
}

export const Default: Story = {
  args: {
    data: sampleData,
  },
};
