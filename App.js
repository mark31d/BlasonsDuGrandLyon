import React, { useState } from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './Components/Settings';
import Loader from './Components/LoaderScript';
import { AudioProvider } from './Components/AudioScript';
import { VibrationProvider } from './Components/Vibration';
import Menu from './Components/Menu';
import Gallery from './Components/Gallery';
import Journey from './Components/Journey';
import MapScreen from './Components/MapScreen'; 
import Dialog from './Components/Dialog';
import Quiz from './Components/Quiz';
import FranceOverview from './Components/FranceOverview';
import About from './About';
import RateUs from './RateUs';
const Stack = createStackNavigator();

const App = () => {
  const [loaderIsEnded, setLoaderIsEnded] = useState(false);

  return (
    <VibrationProvider>
      <AudioProvider>
        <NavigationContainer>
          {!loaderIsEnded ? (
            <Loader onEnd={() => setLoaderIsEnded(true)} />
          ) : (
            <Stack.Navigator initialRouteName="Menu">
              <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
              <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
              <Stack.Screen name="Gallery" component={Gallery} options={{ headerShown: false }} />
              <Stack.Screen name="Journey" component={Journey} options={{ headerShown: false }} />
              <Stack.Screen name="MapScreen" component={MapScreen} options={{ headerShown: false }} /> 
              <Stack.Screen name="Dialog" component={Dialog} options={{ headerShown: false }} />
              <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
              <Stack.Screen name="FranceOverview" component={FranceOverview} options={{ headerShown: false }} />
              <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
              <Stack.Screen name="RateUs" component={RateUs} options={{ headerShown: false }} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </AudioProvider>
    </VibrationProvider>
  );
};

export default App;