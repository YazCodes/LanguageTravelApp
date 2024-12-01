import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import VocabularyModal from './screens/VocabularyModal';
import LandingPage from './screens/LandingPage';
import DestinationMenu from './screens/DestinationMenu';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home page" component={LandingPage} />
        <Stack.Screen name="Your destination" component={DestinationMenu} />
        <Stack.Screen name="JapanMap" component={MapScreen} />
        <Stack.Screen
          name="Vocabulary List"
          component={VocabularyModal}
          options={{ presentation: 'modal' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
