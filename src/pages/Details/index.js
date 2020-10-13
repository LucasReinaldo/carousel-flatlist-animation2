import React from "react";
import { Animated } from "react-native";
import { SharedElement } from "react-navigation-shared-element";

import { width } from "../../global.styles";

import {
  Container,
  Background,
  CloseIcon,
  AnimatedHeader,
  AnimatedTitle,
  AnimatedImage,
  BottomContainer,
  AnimatedAdvertisingContainer,
  AnimatedAdvertisingHeader,
  AnimatedAdvertisingBottom,
  AdvertisingText,
  PlayIcon,
  ContentContainer,
  AnimatedImageBackground,
} from "./styles";

const letterAnimation = {
  0: { opacity: 0, translateY: -42 },
  1: { opacity: 1, translateY: 0 },
};

const advertisingAnimation = {
  0: { translateX: -width },
  1: { translateX: 0 },
};

const imageAnimation = {
  0: { translateX: width },
  1: { translateX: 0 },
};

const DURATION = 200;

const Details = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <Container>
      <Background color={item.color} />
      <CloseIcon
        name="ios-close-circle-outline"
        size={32}
        onPress={() => {
          navigation.goBack();
        }}
      />

      <Animated.View style={{ marginLeft: 12 }}>
        <AnimatedHeader>
          {item.type.split("").map((letter, index) => (
            <AnimatedTitle
              useNativeDriver
              animation={letterAnimation}
              delay={DURATION + index * 50}
              key={`${letter}-${index}`}
            >
              {letter}
            </AnimatedTitle>
          ))}
        </AnimatedHeader>
        <SharedElement id={`item.${item.key}.image`}>
          <AnimatedImage style={{ resizeMode: "contain" }} source={item.imageUri} />
        </SharedElement>
      </Animated.View>
      <BottomContainer>
        <AnimatedAdvertisingContainer
          useNativeDriver
          animation={advertisingAnimation}
          delay={DURATION}
        >
          <AnimatedAdvertisingHeader>
            <AdvertisingText>advertising</AdvertisingText>
            <AdvertisingText>Market</AdvertisingText>
          </AnimatedAdvertisingHeader>
          <AnimatedAdvertisingBottom>
            <AdvertisingText>play video</AdvertisingText>
            <PlayIcon name="ios-play-circle" size={24}></PlayIcon>
          </AnimatedAdvertisingBottom>
        </AnimatedAdvertisingContainer>
        <ContentContainer>
          <AnimatedImageBackground
            useNativeDriver
            animation={imageAnimation}
            delay={DURATION}
            source={require("../../../assets/urban.png")}
            style={{
              flex: 1,
              width: "100%",
              height: "100%",
            }}
          />
        </ContentContainer>
      </BottomContainer>
    </Container>
  );
};

Details.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;
  return [{ id: `item.${item.key}.image` }];
};

export default Details;
