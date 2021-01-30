import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Create from '../Create';
import List from '../List';

const { Navigator, Screen } = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="List" component={List} />
        <Screen name="Create" component={Create} />
      </Navigator>
    </NavigationContainer>
  );
}
