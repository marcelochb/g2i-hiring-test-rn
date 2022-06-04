import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '@src/modules/quiz/presenter';
import { BaseTheme } from '../themes';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export const Routes: React.FC = () => (
  <SafeAreaProvider>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={() => <Home theme={BaseTheme} />} />
    </Stack.Navigator>
  </SafeAreaProvider>
)
