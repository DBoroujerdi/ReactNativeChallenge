import * as React from "react";
import { Text } from "react-native";

type Props = {
  from: Date;
  to: Date;
};

const formatOpts = {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
} as const;

export const TimeRange = ({ from, to }: Props) => {
  const fromTime = from.toLocaleTimeString([], formatOpts);
  const toTime = to.toLocaleTimeString([], formatOpts);
  const value = `${fromTime} - ${toTime}`;

  return (
    <Text
      accessibilityRole="header"
      accessibilityLabel={`Time range: ${fromTime} to ${toTime}`}
      style={{ margin: 10, fontSize: 18, fontWeight: "700" }}
    >
      {value}
    </Text>
  );
};
