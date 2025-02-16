import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { Card, CardData } from "../Card/Card";

type CardListProps = {
  data: CardData[];
};

export const CardList = ({ data }: CardListProps) => {
  const renderItem = ({ item }: { item: CardData }) => <Card data={item} />;

  return (
    <View style={styles.container} testID="CardListContainer">
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
