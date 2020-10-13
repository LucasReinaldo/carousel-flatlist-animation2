import React from "react";
import { useNavigation } from "@react-navigation/native";
import { SharedElement } from "react-navigation-shared-element";

import { width } from "../../global.styles";

import {
  Container,
  AnimatedTextContainer,
  AnimatedImage,
  AnimatedHeading,
  AnimatedDescription,
} from "./styles";

const Item = ({ item, index, scrollListX }) => {
  const navigation = useNavigation();

  const { imageUri, heading, description } = item;
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width]; //prev | current | next slide

  const inputRangeOpacity = [
    (index - 0.8) * width,
    index * width,
    (index + 0.8) * width,
  ]; //side | middle | side

  const translateXHeading = scrollListX.interpolate({
    inputRange,
    outputRange: [width * 0.2, 0, -width * 0.2], //Scrolling to the Right, Middle, Scrolling to the Left
  });

  const translateXDescription = scrollListX.interpolate({
    inputRange,
    outputRange: [width * 0.7, 0, -width * 0.7],
  });

  const scale = scrollListX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  const opacity = scrollListX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });

  return (
    <Container
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Details", { item })}
    >
      <SharedElement
        id={`item.${item.key}.image`}
        style={{ flex: 1, height: width * 0.75, width: width * 0.75 }}
      >
        <AnimatedImage
          source={imageUri}
          style={{ resizeMode: "contain", transform: [{ scale }] }}
        />
      </SharedElement>
      <AnimatedTextContainer style={{ opacity }}>
        <AnimatedHeading
          style={{ transform: [{ translateX: translateXHeading }] }}
        >
          {heading}
        </AnimatedHeading>
        <AnimatedDescription
          style={{ transform: [{ translateX: translateXDescription }] }}
        >
          {description}
        </AnimatedDescription>
      </AnimatedTextContainer>
    </Container>
  );
};

Item.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;
  return [{ id: `item.${item.key}.image` }];
};

export default Item;
