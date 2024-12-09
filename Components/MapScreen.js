import React, { useState } from 'react';
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

const { width: screenWidth } = Dimensions.get('window');
const MapScreen = ({ navigation }) => {
    const [locations, setLocations] = useState([
      { id: 1, unlocked: true, x: 42, y: 40, image: require('../assets/shop.png') },
      { id: 2, unlocked: false, x: 262, y: 40, image: require('../assets/architecture.png') },
      { id: 3, unlocked: false, x: 155, y: 150, image: require('../assets/glass.png') },
      { id: 4, unlocked: false, x: 42, y: 265, image: require('../assets/notre-dame.png') },
      { id: 5, unlocked: false, x: 262, y: 265, image: require('../assets/eiffel-tower.png') },
    ]);
  
    const [hoveredLocation, setHoveredLocation] = useState(null);
  
    const unlockNextLocation = () => {
      setLocations((prev) => {
        const nextIndex = prev.findIndex((loc) => !loc.unlocked);
        if (nextIndex !== -1) {
          const updated = [...prev];
          updated[nextIndex].unlocked = true;
          return updated;
        }
        return prev;
      });
    };
  
    const mapSize = screenWidth * 0.98;
  
    return (
      <ImageBackground
        source={require('../assets/ImageBack.jpg')}
        style={styles.backgroundImage}
      >
        <SafeAreaView style={styles.safeArea}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.iconButton}
              >
                <Image
                  source={require('../assets/right-arrow.png')}
                  style={styles.exitButtonText}
                />
              </TouchableOpacity>
  
              <View style={[styles.mapContainer, { width: mapSize, height: mapSize, marginHorizontal: (screenWidth - mapSize) / 2 }]}>
                <Image
                  source={require('../assets/map.jpg')}
                  style={styles.mapImage}
                />
                {locations.map((location) => (
                  <TouchableOpacity
                    key={location.id}
                    style={[
                      styles.location,
                      { left: location.x, top: location.y },
                    ]}
                    onPress={() => {
                      if (location.unlocked) {
                        setHoveredLocation(location.id); // Показать кнопку Explore
                      }
                    }}
                  >
                    <Image
                      source={location.image}
                      style={styles.locationImage}
                    />
                    {!location.unlocked && (
                      <Image
                        source={require('../assets/lock.png')}
                        style={styles.lockIcon}
                      />
                    )}
                    {hoveredLocation === location.id && location.unlocked && (
                      <TouchableOpacity
                      style={styles.exploreButton}
                      onPress={() => navigation.navigate('Quiz', { locationId: location.id })}
                    >
                      <Text style={styles.exploreText}>Explore</Text>
                    </TouchableOpacity>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
  
              <TouchableOpacity style={styles.unlockButton} onPress={unlockNextLocation}>
                <Text style={styles.unlockText}>Unlock Next</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  };
  const styles = StyleSheet.create({
    exploreButton: {
        position: 'absolute',
        bottom: -30,
        backgroundColor: '#8B4513',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#F4E3C7',
      },
      exploreText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: 'bold',
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
    width: '100%',
    height: '100%',
    backgroundColor:'#F4E3C7',
    borderRadius:25,
  },
  lockIcon: {
    position: 'absolute',
    width: 30,
    height: 30,
    bottom: 0,
    right: 0,
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
  unlockButton: {
    position: 'absolute',
    bottom: 120,
    alignSelf: 'center',
    backgroundColor: '#8B4513',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor:'#F4E3C7',
    borderWidth:3,
  },
  unlockText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MapScreen;