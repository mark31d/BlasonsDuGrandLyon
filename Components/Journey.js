import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

const Journey = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/ImageBack.jpg')}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Menu')}
          style={styles.iconButton}
        >
          <Image
            source={require('../assets/right-arrow.png')}
            style={styles.exitButtonText}
          />
        </TouchableOpacity>

        <View style={styles.content}>
          <View style={styles.speechContainer}>
            
            <View style={styles.speechBubble}>
              <Text style={styles.storyText}>
                An ancient legend has it that the five coats of arms representing France's greatest virtues - Courage, Wisdom, Justice, Honor, and Compassion - were separated and hidden in different parts of the country. These coats of arms not only served as talismans for the nation, but also gave their owner strength, the ability to make wise decisions and help the weak. However, over time they were forgotten, and dark forces began to threaten France again.
              </Text>
              <Text style={styles.storyText}>
                You are a brave traveler destined to find these powerful symbols and restore the unity of France. Your mission is to travel through the ancient places of the country, solve riddles and pass tests in order to collect five coats of arms and unite them into a single whole. Only then will you be able to restore the strength of France and protect it from the impending threat.
              </Text>

           
              <View style={styles.bubbleArrow} />
            </View>

           
            <Image
              source={require('../assets/photo.jpg')}
              style={styles.image}
            />
          </View>
          <TouchableOpacity
  style={styles.startButton}
  onPress={() => navigation.navigate('MapScreen')} 
>
  <Text style={styles.startButtonText}>Start</Text>
</TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
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
  },
  exitButtonText: {
    width: 50,
    height: 50,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  speechContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    width: '100%',
  },
  image: {
    top:-90,
    marginLeft:-130,
    width: 230,
    height: 240,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#8B4513',
    
  },
  speechBubble: {
    zIndex: 1,
    flex: 1,
    marginHorizontal:-40,
    backgroundColor: '#F4E3C7', 
      borderRadius: 15,
    padding: 15,
    position: 'relative',
    marginTop: 100, 
    left:30,
    borderWidth: 2,
    borderColor: '#8B4513', 
  },

  storyText: {
    fontSize: 15,
    color: '#8B4513',
    textAlign: 'justify',
    marginBottom: 10,
  },
 
  startButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginTop: 20,
  },
  startButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Journey;