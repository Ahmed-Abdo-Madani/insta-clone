import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");

const products = [1, 2, 3, 4, 5];
const ProductsScreen = () => {
  return (
    <>
      <View style={styles.editor}></View>
      <ScrollView>
        {products.map(() => (
          <Card>
            <Card.Title>HELLO WORLD</Card.Title>
            <Card.Divider />
            <Card.Image source={`https://picsum.photos/${width}`}>
              <Text style={{ marginBottom: 10 }}>
                The idea with React Native Elements is more about component
                structure than actual design.
              </Text>
              <Button
                icon={<Icon name="code" color="#ffffff" />}
                buttonStyle={{
                  borderRadius: 0,
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 0,
                }}
                title="VIEW NOW"
              />
            </Card.Image>
          </Card>
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  editor: {
    width: "100%",
    height: "35%",
    backgroundColor: "#000",
  },
});

export default ProductsScreen;
