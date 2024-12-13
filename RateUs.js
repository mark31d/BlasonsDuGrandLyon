import React, { useState , useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ImageBackground , Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const RateUs = ({navigation}) => {
  const [rating, setRating] = useState(0);

  const handleRating = async (value) => {
    setRating(value);
    await AsyncStorage.setItem('userRating', value.toString());
  };
  useEffect(() => {
    const loadRating = async () => {
      const savedRating = await AsyncStorage.getItem('userRating');
      if (savedRating) {
        setRating(parseInt(savedRating));
      }
    };
    loadRating();
  }, []);
  return (
    <ImageBackground
      source={require('./assets/ImageBack.jpg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
      <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconButton}
        >
          <Image
            source={require('./assets/right-arrow.png')}
            style={styles.exitButtonText}
          />
        </TouchableOpacity>
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}>Rate Us</Text>
          <Text style={styles.descriptionText}>
            We hope you’re enjoying your journey through the history and mysteries of Lyon! If you love Blasons du Grand Lyon, please take a moment to rate us.
            Your feedback helps us improve the game and bring you even more exciting content. We’d greatly appreciate your support!
          </Text>

          <View style={styles.starsContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity
                key={star}
                onPress={() => handleRating(star)}
              >
                <Text style={rating >= star ? styles.filledStar : styles.emptyStar}>★</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.thankYouText}>Your review means a lot to us!
            Thank you for being a part of our community!</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
      },
      exitButtonText: {
        width: 50,
        height: 50,
      },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    
    flex: 1,
    padding: 20,
  },
  innerContainer: {
    
    marginHorizontal:5,
    backgroundColor: '#F4E3C7',
    borderWidth:2,
   borderColor:'#8B4513',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    alignItems: 'center',
  
    
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#8B4513',
    textAlign: 'center',
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 16,
    color: '#4B3A2F',
    textAlign: 'justify',
    lineHeight: 26,
    marginBottom: 20,
  },
  starsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  filledStar: {
    fontSize: 32,
    color: '#FFD700',
    marginHorizontal: 5,
  },
  emptyStar: {
    fontSize: 32,
    color: '#D3D3D3',
    marginHorizontal: 5,
  },
  thankYouText: {
    fontSize: 16,
    color: '#4B3A2F',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default RateUs;