import styled from "styled-components/native";
import { ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";

import { height, width, SPACING } from "../../global.styles";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Background = styled.View`
  width: ${width}px;
  height: ${height}px;
  background-color: ${(props) => props.color || "#FFF"};
  opacity: 0.2;
  position: absolute;
  align-self: center;
`;

export const CloseIcon = styled(Ionicons)`
  color: #333;
  padding: ${SPACING}px;
  top: ${SPACING * 2}px;
  right: 0;
  z-index: 2;
  position: absolute;
`;

const Header = styled.View`
  flex-direction: row;
  overflow: hidden;
`;

export const AnimatedHeader = Animatable.createAnimatableComponent(Header);

const Title = styled.Text`
  color: #444;
  text-transform: uppercase;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 2px;
`;

export const AnimatedTitle = Animatable.createAnimatableComponent(Title);

// const Color = styled.Text`
//   text-transform: uppercase;
//   font-size: 20px;
//   font-weight: 700;
// `;

// export const AnimatedColor = Animatable.createAnimatableComponent(Color);

const Image = styled.Image`
  width: ${width * 0.9}px;
  height: ${width * 0.9}px;
`;

export const AnimatedImage = Animatable.createAnimatableComponent(Image);

export const BottomContainer = styled.View`
  flex: 1;
  flex-direction: row;
  padding: ${SPACING}px;
`;

const AdvertisingContainer = styled.View`
  flex: 0.35;
  padding: ${SPACING}px;
  background-color: #fff;
  justify-content: space-between;
  overflow: hidden;
`;

export const AnimatedAdvertisingContainer = Animatable.createAnimatableComponent(
  AdvertisingContainer
);

const AdvertisingHeader = styled.View``;

export const AnimatedAdvertisingHeader = Animatable.createAnimatableComponent(
  AdvertisingHeader
);

const AdvertisingBottom = styled.View`
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
`;

export const AnimatedAdvertisingBottom = Animatable.createAnimatableComponent(
  AdvertisingBottom
);

export const AdvertisingText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
`;

export const PlayIcon = styled(Ionicons)`
  color: #333;
  margin-left: ${SPACING / 2}px;
`;

export const ContentContainer = styled.View`
  flex: 0.65;
  margin-left: ${SPACING / 2}px;
  overflow: hidden;
`;

export const AnimatedImageBackground = Animatable.createAnimatableComponent(
  ImageBackground
);
