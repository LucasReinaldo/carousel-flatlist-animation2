import React from "react";

import { enableScreens } from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";

import Home from "./pages/Home";
import Details from "./pages/Details";

enableScreens();

const Stack = createSharedElementStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: { animation: "timing", config: { duration: 600 } },
              close: { animation: "timing", config: { duration: 600 } },
            },
            cardStyleInterpolator: ({ current: { progress } }) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
