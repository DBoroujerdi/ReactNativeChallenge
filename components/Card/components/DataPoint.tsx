import React from "react";
import { StyleSheet, View, Text, ViewProps } from "react-native";

type Props = {
  value: string;
  label: string;
} & ViewProps;

export const DataPoint = ({
  value,
  label,
  children,
  ...props
}: React.PropsWithChildren<Props>) => {
  return (
    <View
      style={styles.container}
      accessible
      accessibilityRole="text"
      accessibilityLabel={`${label}: ${value}`}
      {...props}
    >
      {children}
      <Text style={styles.label}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  label: {
    fontSize: 16,
  },
});
