import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const greetings = {
  1: 'Добро пожаловать в Антикварный магазин!',
  2: 'Добро пожаловать на Монмартр!',
  3: 'Добро пожаловать в Лувр!',
  4: 'Добро пожаловать в Нотр-Дам!',
  5: 'Добро пожаловать на вершину Парижа!',
};

const backgrounds = {
  1: require('../assets/antique.jpg'),
  2: require('../assets/montmartre.jpg'), 
  3: require('../assets/louvreBG.jpg'),   
  4: require('../assets/notredameBG.jpg'),  
  5: require('../assets/montparnasse.jpg'), 
};

const Quiz = ({ route, navigation }) => {
  const { locationId } = route.params;
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <ImageBackground
      source={backgrounds[locationId]} // Задний фон зависит от locationId
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        {/* Модальное окно с приветствием */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.greetingText}>{greetings[locationId]}</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Начать</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        {/* Контент викторины */}
        <View style={styles.quizContent}>
          <Text style={styles.quizText}>
            Здесь будет викторина для локации {locationId}.
          </Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Назад</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#F4E3C7',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  greetingText: {
    fontSize: 18,
    fontWeight: 'bold',
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
    fontSize: 16,
  },
  quizContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  quizText: {
    fontSize: 16,
    marginBottom: 20,
    color: '#FFF',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#8B4513',
    padding: 10,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default Quiz;