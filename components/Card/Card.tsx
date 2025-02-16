import React from "react";
import { StyleSheet, View } from "react-native";

import { DataPoint } from "./components/DataPoint";
import { TimeRange } from "./components/TimeRange";
import { Feather } from "../Feather";

type DataIntensity = {
  forecast: number;
  actual: number;
  index: "very-low" | "low" | "moderate" | "high" | "very-high";
};
export type CardData = {
  from: Date;
  to: Date;
  intensity: DataIntensity;
};

type CardProps = {
  data: CardData;
};

const levelMap = {
  "very-low": {
    label: "Very Low",
    color: "#00FF00",
  },
  low: {
    label: "Low",
    color: "#00FF00",
  },
  moderate: {
    label: "Moderate",
    color: "#FFFF00",
  },
  high: {
    label: "High",
    color: "#FFA500",
  },
  "very-high": {
    label: "Very High",
    color: "#FF0000",
  },
} as const;

export const Card = ({ data }: CardProps) => {
  const level = levelMap[data.intensity.index];

  return (
    <View style={styles.container} testID="CardContainer">
      <TimeRange from={data.from} to={data.to} />

      <View style={styles.row}>
        <DataPoint
          label="Forecast Value"
          value={data.intensity.forecast.toString()}
        >
          <Feather name="trending-up" color="lightblue" />
        </DataPoint>
        <DataPoint
          label="Actual Value"
          value={data.intensity.actual.toString()}
        >
          <Feather name="eye" color="green" />
        </DataPoint>
        <DataPoint label="Intensity Level" value={level.label}>
          <Feather name="bar-chart-2" color={level.color} />
        </DataPoint>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "moccasin",
    height: 150,
    borderRadius: 8,
    alignItems: "center",
    gap: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
