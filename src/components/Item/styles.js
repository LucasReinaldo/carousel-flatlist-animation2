import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";

import { width, height } from "../../global.styles";

export const Container = styled.TouchableOpacity`
  align-items: center;
  height: ${height}px;
  justify-content: center;
  width: ${width}px;
`;

const Touchable = styled.TouchableOpacity``;

const TextContainer = styled.View`
  align-items: flex-start;
  align-self: flex-end;
  flex: 0.5;
`;

export const AnimatedTextContainer = Animatable.createAnimatableComponent(TextContainer);

const Image = styled.Image`
  flex: 1;
  height: ${width * 0.75}px;
  width: ${width * 0.75}px;
`;

export const AnimatedImage = Animatable.createAnimatableComponent(Image);

const Heading = styled.Text`
  color: #444;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 2px;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const AnimatedHeading = Animatable.createAnimatableComponent(Heading);

const Description = styled.Text`
  color: #a6a6a6;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-right: 10px;
  text-align: left;
  width: ${width * 0.75}px;
`;

export const AnimatedDescription = Animatable.createAnimatableComponent(Description);
