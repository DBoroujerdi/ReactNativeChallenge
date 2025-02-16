import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { View } from "react-native";
import { Card, CardData } from "./Card";

const meta = {
  title: "Card",
  component: Card,
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

const data = {
  from: new Date("2018-01-20T12:30Z"),
  to: new Date("2018-01-20T13:00Z"),
  intensity: {
    forecast: 267,
    actual: 265,
    index: "high",
  },
} satisfies CardData;

export const Default: Story = {
  args: { data },
};
