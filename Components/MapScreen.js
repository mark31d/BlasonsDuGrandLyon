import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const currentDiagonal = Math.sqrt(screenWidth ** 2 + screenHeight **  2);
const isSmallScreen = screenWidth < 380;
const baseDiagonal = isSmallScreen ? 770 : 885;

const scaleFactor = currentDiagonal / baseDiagonal;

const MapScreen = ({ navigation, route }) => {
  const [locations, setLocations] = useState([
    { id: 1, unlocked: true, x: 42, y: 40, image: require('../assets/shop.png') },
    { id: 2, unlocked: false, x: 262, y: 40, image: require('../assets/architecture.png') },
    { id: 3, unlocked: false, x: 155, y: 150, image: require('../assets/glass.png') },
    { id: 4, unlocked: false, x: 42, y: 265, image: require('../assets/notre-dame.png') },
    { id: 5, unlocked: false, x: 262, y: 265, image: require('../assets/eiffel-tower.png') },
  ]);
  const resetGame = async () => {
    try {
      await AsyncStorage.removeItem('locations');
      // Сбросим состояние вручную
      setLocations([
        { id: 1, unlocked: true, x: 42, y: 40, image: require('../assets/shop.png') },
        { id: 2, unlocked: false, x: 262, y: 40, image: require('../assets/architecture.png') },
        { id: 3, unlocked: false, x: 155, y: 150, image: require('../assets/glass.png') },
        { id: 4, unlocked: false, x: 42, y: 265, image: require('../assets/notre-dame.png') },
        { id: 5, unlocked: false, x: 262, y: 265, image: require('../assets/eiffel-tower.png') },
      ]);
      setShowCongrats(false);
    } catch (e) {
      console.error('Error resetting game:', e);
    }
  };
  const [hoveredLocation, setHoveredLocation] = useState(null);
  const [crestCount, setCrestCount] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const mapSize = screenWidth * 0.98;

 
  const saveLocations = async (locationsToSave) => {
    try {
      const jsonValue = JSON.stringify(locationsToSave);
      await AsyncStorage.setItem('locations', jsonValue);
    } catch (e) {
      console.error('Error saving locations:', e);
    }
  };

  // Загрузка состояния
  const loadLocations = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('locations');
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.error('Error loading locations:', e);
      return null;
    }
  };
  useEffect(() => {
    if (!isLoaded) return; // Ждём, пока данные загрузятся
    const { crestId } = route.params || {};
    if (crestId) {
      console.log('Received crestId:', crestId);
      unlockNextLocation(crestId);
    }
  }, [route.params, isLoaded]);
  // Загрузка при старте
  useEffect(() => {
    const fetchLocations = async () => {
      const stored = await loadLocations();
      if (stored) {
        setLocations(stored);
      }
      setIsLoaded(true); // Данные загружены
    };
    fetchLocations();
  }, []);

  // Сохранение при изменении
  useEffect(() => {
    saveLocations(locations);
  }, [locations]);

  const unlockNextLocation = (crestId) => {
    setLocations((prev) => {
      const updated = prev.map((location) => {
        // Разблокируем текущую локацию (crestId)
        if (location.id === crestId) {
          return { ...location, unlocked: true };
        }
        // Разблокируем следующую локацию (crestId + 1), если она существует и ещё заблокирована
        if (location.id === crestId + 1 && !location.unlocked) {
          return { ...location, unlocked: true };
        }
        return location;
      });
      return updated;
    });
  
    // Если это последняя локация (пятая), показать поздравление
    if (crestId === 5) {
      setShowCongrats(true);
    }
  };

  
  useEffect(() => {
    const { crestId } = route.params || {};
    if (crestId) {
      console.log('Received crestId:', crestId);
      unlockNextLocation(crestId);
    }
  }, [route.params]);
  
  return (
    <ImageBackground
      source={require('../assets/ImageBack.jpg')}
      style={styles.backgroundImage}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Journey')}
              style={styles.iconButton}
            >
              <Image
                source={require('../assets/right-arrow.png')}
                style={styles.exitButtonText}
              />
            </TouchableOpacity>
            <View style={[styles.mapContainer, { width: mapSize, height: mapSize }]}>
              <Image source={require('../assets/map.jpg')} style={styles.mapImage} />
              {locations.map((location) => (
                <TouchableOpacity
                  key={location.id}
                  style={[
                    styles.location,
                    { 
                      left: location.x * scaleFactor, 
                      top: location.y * scaleFactor 
                    },
                  ]}
                  onPress={() => {
                    if (location.unlocked) {
                      setHoveredLocation(location.id);
                    }
                  }}
                >
                  <Image source={location.image} style={styles.locationImage} />
                  {!location.unlocked && (
                    <Image
                      source={require('../assets/lock.png')}
                      style={styles.lockIcon}
                    />
                  )}
                  {hoveredLocation === location.id && location.unlocked && (
                    <TouchableOpacity
                      style={styles.exploreButton}
                      onPress={() =>
                        navigation.navigate('Dialog', { locationId: location.id })
                      }
                    >
                      <Text style={styles.exploreText}>Explore</Text>
                    </TouchableOpacity>
                  )}
                </TouchableOpacity>
              ))}
            </View>

            {showCongrats && (
              <View style={styles.congratsContainer}>

                <Image source={require('../assets/mainemblem.jpg')}  style={styles.emblemImage}/>
                <Text style={styles.congratsText}>
                Greetings, traveler! You have completed your journey and collected all five pieces of the coat of arms. Now this coat of arms symbolizes your skill, courage and deep understanding of the culture and secrets of France. Now it shines in all its glory, and you are its carrier. The coat of arms of France is now yours!

                </Text>
                
                 
                  
              <TouchableOpacity
                style={styles.congratsButton}
                onPress={resetGame}
              >
                <Text style={styles.congratsButtonText}>Start a new journey</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.congratsButton}
                onPress={() => navigation.navigate('Menu')}
              >
                <Text style={styles.congratsButtonText}>Coats of arms</Text>
              </TouchableOpacity>
            
               
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
    emblemImage:{
    width: 200,
    height: 200,
    borderRadius:25,
    marginBottom:10,
    },
  safeArea: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
  },
  iconButton: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 10,
    backgroundColor: '#F4E3C7',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#8B4513',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  exitButtonText: {
    width: 50,
    height: 50,
  },
  mapContainer: {
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#8B4513',
    borderRadius: 10,
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  location: {
    position: 'absolute',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationImage: {
    width: 80,
    height: 80,
    backgroundColor: '#F4E3C7',
    borderRadius: 25,
    borderWidth:3,
    borderColor:'#8B4513',
  },
  lockIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    bottom: -10,
    right: -10,
  },
  exploreButton: {
    position: 'absolute',
    bottom: -20,
    backgroundColor: '#8B4513',
    padding: 5,
    borderRadius: 5,
  },
  exploreText: {
    color: '#FFF',
    fontSize: 14,
  },
  congratsContainer: {
    position: 'absolute',
    width: 340,
    backgroundColor: '#F4E3C7',
    borderRadius: 10,
    padding: 20,
    borderWidth: 3,
    borderColor: '#8B4513',
    alignItems: 'center',
  
    // Располагаем по центру экрана
    top: '50%',
    left: '50%',
    transform: [
      { translateX: -170 }, // половина ширины (340/2)
      { translateY: -300 }  // половина примерной высоты контейнера
    ],
  },
  congratsText: {
    fontSize: 16,
    color: '#8B4513',
    marginBottom: 10,
    textAlign: 'center',
  },
  congratsButton: {
    backgroundColor: '#8B4513', // Цвет кнопки
    paddingVertical: 10, // Отступы сверху и снизу
    paddingHorizontal: 20, // Отступы по бокам
    borderRadius: 10, // Скругленные углы
    borderWidth: 2, // Ширина рамки
    borderColor: '#F4E3C7', // Цвет рамки
    width: 200, // Фиксированная ширина кнопки
    justifyContent: 'center', // Центрирование содержимого по вертикали
    alignItems: 'center', 
  },
  congratsButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapScreen;