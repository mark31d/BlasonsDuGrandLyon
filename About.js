import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, ImageBackground,TouchableOpacity, Image } from 'react-native';

const About = ({navigation}) => {
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
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.innerContainer}>
            
            <Text style={styles.titleText}>About Us</Text>
            <Text style={styles.descriptionText}>
              Blasons du Grand Lyon is more than just a quiz; it’s an interactive journey into the history and culture of Greater Lyon. Our game blends the exciting elements of a visual novel with interactive quizzes, immersing you in the atmosphere of past centuries while unraveling the mysteries behind the region’s heraldry.

              You’ll engage in captivating dialogues with characters, each of whom will help guide you toward your ultimate goal - restoring the Grand Lyon coat of arms. Every choice you make matters, as your decisions impact the development of the story and future events. Along the way, you’ll explore ancient coats of arms, collect them, and decode the symbolism hidden within each one.

              Our game also features an interactive encyclopedia of France, where you can learn more about the country’s culture and history, as well as receive daily interesting facts about French heritage. The themed music enhances the atmosphere, allowing you to fully immerse yourself in the story of Lyon and its mysteries.

              Blasons du Grand Lyon is a journey where every step brings you closer to uncovering the secrets of coats of arms and lions, which hold deep historical significance for Greater Lyon. Uncover history, collect relics, and discover new aspects of French culture!
            </Text>
          
        </View>
        </ScrollView>
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
    margin:10,
    backgroundColor: '#F4E3C7',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    
  },
  scrollContainer: {
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
    color: '#8B4513',
    textAlign: 'justify',
    lineHeight: 26,
  },
});

export default About;