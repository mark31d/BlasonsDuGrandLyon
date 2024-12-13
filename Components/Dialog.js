import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,Image
} from 'react-native';

const greetings = {
  1: 'You find yourself in a cozy antique shop in Montmartre. The air is filled with the scent of old books, and the walls are adorned with paintings depicting scenes of Paris. Your attention is drawn to an unusual lion figurine on a shelf, which seems almost as if it’s watching you.',
  2: 'You stand before the majestic Notre-Dame Cathedral in the heart of Paris. Its gothic spires rise into the sky, and the bas-reliefs tell stories from centuries past. Inside, a curator welcomes you and invites you to explore the legends associated with this historical building.',
  3: 'You find yourself at a site that stands as a symbol of revolution and freedom — Place de la Bastille. Once the location of the infamous fortress-prison destroyed during the French Revolution, the area is now dominated by the July Column, commemorating those who fought for liberty. The atmosphere is steeped in history, and you are greeted by a historian eager to share the stories of the events that reshaped France forever.',
  4: 'You arrive at the Louvre, one of the world’s greatest museums. But today, your goal isn’t art, but the pursuit of a legendary crest fragment. The Seine flows quietly nearby, whispering secrets preserved over centuries. Here, you’re greeted by a Louvre guide who prepares you for an extraordinary challenge.',
  5: 'Your journey concludes in the bohemian heart of Paris - on the hill of Montmartre. Among narrow streets and charming cafes, the famous Sacré-Cœur Basilica rises majestically, while artists paint masterpieces in the open air. But your mission surpasses art: legend says the final crest fragment is hidden here. An artist awaits you, holding the key to this secret.',
};
const dialogues = {
  1: {
    character: 'Shopkeeper',
    image: require('../assets/shopkeeper.png'),
    steps: [
      {
        text: 'Oh, are you interested in this lion? It’s not ordinary. It contains a piece of Paris’s ancient crest, but obtaining it won’t be easy. Did you know that the lions of this city guard its secrets?',
        options: [
          { text: 'What secrets? Tell me more!', next: 1 },
          { text: 'I’m ready for the challenge!', next: 2 },
        ],
      },
      {
        text: 'These are stories that go back to the times of kings, revolutions, and art. But only someone who knows the history of Paris can uncover more.',
        options: [{ text: 'I’m ready!', next: 'quiz' }],
      },
      {
        text: 'Very well. Answer five questions. If you succeed, you’ll earn a piece of the crest.',
        options: [{ text: 'Start Quiz', next: 'quiz' }],
      },
    ],
  },
  2: {
    character: 'Curator',
    image: require('../assets/Curator.png'),
    steps: [
      {
        text: 'Good day, traveler! The Notre-Dame Cathedral is not just an architectural gem, but also the center of many legends of Paris. To understand them, you must know the history of this magnificent building. Are you ready to test your knowledge?',
        options: [{ text: 'Yes, let’s begin!', next: 'quiz' }],
      },
    ],
  },
  3: {
    character: 'Historian',
    image: require('../assets/Historian.png'),
    steps: [
      {
        text: 'Welcome to Place de la Bastille, one of the most significant sites in France\'s history! Have you heard of the events of July 14, 1789? That was the day the people rose and changed the course of history. I’ve prepared a few questions for you to explore the significance of this moment. Are you ready for the challenge?',
        options: [{ text: 'Yes, I’m ready!', next: 'quiz' }],
      },
    ],
  },
  4: {
    character: 'Guide',
    image: require('../assets/Guide.png'),
    steps: [
      {
        text: 'Welcome to the Louvre, traveler! Did you know this building was originally a fortress? Today, it houses the world’s most renowned masterpieces. But you’re not here just for the art, are you? The Louvre and the Seine hold a secret, and to uncover it, you’ll need to answer a few questions. Are you ready?',
        options: [{ text: 'Yes, I’m ready!', next: 'quiz' }],
      },
    ],
  },
  5: {
    character: 'Artist',
    image: require('../assets/Artist.png'),
    steps: [
      {
        text: 'Welcome, seeker of legends! Montmartre is a place where creativity and history intertwine. Today, I will be your guide in the search for the final crest fragment. This mission requires knowledge about this enchanting place. Are you ready for one last challenge?',
        options: [{ text: 'Yes, I’m ready!', next: 'quiz' }],
      },
    ],
  },
};
const buttonLabels = {
  1: 'Start',
  2: 'Enter the Cathedral',
  3: 'Look Around',
  4: 'Enter the Louvre',
  5: 'Climb Montmartre',
};
const backgrounds = {
  1: require('../assets/antique.jpg'),
  2: require('../assets/montmartre.jpg'), 
  3: require('../assets/louvreBG.jpg'),   
  4: require('../assets/notredameBG.jpg'),  
  5: require('../assets/montparnasse.jpg'), 
};
const Dialog = ({ route, navigation }) => {
  const { locationId } = route.params;
  const [welcomeModalVisible, setWelcomeModalVisible] = useState(true);
  const [step, setStep] = useState(0);

  const handleOptionSelect = (nextStep) => {
    if (nextStep === 'quiz') {
      navigation.navigate('Quiz', { locationId });
    } else {
      setStep(nextStep);
    }
  };

  const currentDialogue = dialogues[locationId];

  return (
    <ImageBackground
      source={backgrounds[locationId]}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        {/* Модальное окно приветствия */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={welcomeModalVisible}
          onRequestClose={() => setWelcomeModalVisible(false)}
        >
          <ImageBackground
            source={backgrounds[locationId]}
            style={styles.modalBackground}
          >
            <View style={styles.modalContent}>
              <Text style={styles.greetingText}>{greetings[locationId]}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setWelcomeModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Modal>

        {/* Диалог с персонажем */}
        {!welcomeModalVisible && (
          <View style={styles.dialogContainer}>
            <View style={styles.characterContainer}>
              <Image
                source={currentDialogue.image}
                style={styles.characterImage}
              />
              <Text style={styles.dialogText}>
                {currentDialogue.steps[step].text}
              </Text>
            </View>
            {currentDialogue.steps[step].options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.choiceButton}
                onPress={() => handleOptionSelect(option.next)}
              >
                <Text style={styles.choiceText}>{option.text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </SafeAreaView>
    </ImageBackground>
  );
};const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Добавлен отступ
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
  },
  modalContent: {
    backgroundColor: '#F4E3C7',
    padding: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#8B4513',
    marginHorizontal: 20,
  },
  greetingText: {
    fontSize: 18,
    color: '#8B4513',
    marginBottom: 20,
    textAlign: 'center',
  },
  closeButton: {
    backgroundColor: '#8B4513',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#FFF',
    fontSize: 20,
    alignSelf: 'center',
  },
  dialogContainer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F4E3C7',
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#8B4513',
    maxWidth: '90%', // Ограничение ширины контейнера
  },
  dialogText: {
    fontSize: 18,
    color: '#8B4513',
    marginTop: 10, // Отступ сверху от изображения
    marginBottom: 20,
    textAlign: 'justify',
  },
  choiceButton: {
    backgroundColor: '#8B4513',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    width: '90%', // Кнопки остаются в рамках контейнера
    alignSelf: 'center',
  },
  choiceText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  characterContainer: {
    alignItems: 'center', // Центрирование изображения и текста
    marginBottom: 20,
    width: '100%',
  },
  characterImage: {
    width: 200, // Размер изображения
    height: 200, // Пропорционально увеличено
    borderRadius: 60, // Круглая форма
    borderWidth: 3,
    borderColor: '#8B4513',
    marginBottom: 10, // Отступ от текста
  },
});
export default Dialog;