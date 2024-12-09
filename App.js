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
import MapScreen from './Components/MapScreen'; // Импорт экрана карты
import Quiz from './Components/Quiz';
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
              <Stack.Screen name="Quiz" component={Quiz} options={{ headerShown: false }} />
            
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </AudioProvider>
    </VibrationProvider>
  );
};

export default App;