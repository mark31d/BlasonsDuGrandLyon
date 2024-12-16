import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
  Dimensions,
  Modal,
  ScrollView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import quizData from './quizData';
import { Vibration } from 'react-native';
import { useVibration } from './Vibration';
const screenWidth = Dimensions.get('window').width;

const Quiz = ({ route, navigation }) => {
  const { locationId } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(20);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState('');
  const [inventory, setInventory] = useState({}); 
  const [showInventory, setShowInventory] = useState(false);
  const [pieces, setPieces] = useState([false, false, false, false, false]); 

  const locationQuiz = quizData[locationId];
  const questions = locationQuiz.questions;

  useEffect(() => {
    const loadInventory = async () => {
      const storedInventory = await AsyncStorage.getItem('inventory');
      let loadedInventory = storedInventory ? JSON.parse(storedInventory) : {};
      
      // Убедимся, что map и key есть в инвентаре
      if (!loadedInventory.hasOwnProperty('map')) {
        loadedInventory.map = 0;
      }
      if (!loadedInventory.hasOwnProperty('key')) {
        loadedInventory.key = 0;
      }
  
      setInventory(loadedInventory);
    };
    loadInventory();
  }, []);

  // Сохранение инвентаря в AsyncStorage
  const saveInventory = async () => {
    await AsyncStorage.setItem('inventory', JSON.stringify(inventory));
  };

  // Добавление предметов в инвентарь
  const addItem = (item, quantity = 1) => {
    setInventory((prev) => {
      const updated = { ...prev, [item]: (prev[item] || 0) + quantity };
      saveInventory();
      return updated;
    });
  };

  // Использование предметов
  const useItem = (item) => {
    if (inventory[item] > 0) {
      setInventory((prev) => {
        const updated = { ...prev, [item]: prev[item] - 1 };
        saveInventory();
        return updated;
      });

      if (item === 'map') {
        setCurrentQuestionIndex((prev) => Math.min(prev + 1, questions.length - 1));
      } else if (item === 'key') {
        handleAnswer(true, 'You used a key to answer correctly!');
      }
    }
  };

  // Таймер и обработка времени
  useEffect(() => {
    let interval;
    if (!showFeedback && !showResults) {
      interval = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }

    if (timer === 0 && !showFeedback) {
      handleAnswer(false, "Time's up! Moving to the next question.");
    }

    return () => clearInterval(interval);
  }, [timer, showFeedback, showResults]);

  const { vibrationOn } = useVibration();
  const handleAnswer = (isCorrect, feedback) => {
    setShowFeedback(true);
    setCurrentFeedback(feedback);
    if (!isCorrect && vibrationOn) {
      Vibration.vibrate(500); 
    }
  
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      const updatedPieces = [...pieces];
      updatedPieces[currentQuestionIndex] = true;
      setPieces(updatedPieces);
    }

    setTimeout(() => {
      setShowFeedback(false);
      setTimer(20);

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        // Выдача наград на основе результата
        if (correctAnswers >= 2 && correctAnswers < 4) {
          addItem('map', 1);
        } else if (correctAnswers < 2) {
          addItem('key', 1);
        }
        saveInventory();
        setShowResults(true);
      }
    }, 3000);
  };

  // Сброс квиза
  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setShowResults(false);
    setPieces([false, false, false, false, false]);
    setTimer(20);
  };// Отображение инвентаря
  const renderInventory = () => (
    <View style={styles.inventoryDropdown}>
      {Object.entries(inventory).map(([item, count]) => (
        <TouchableOpacity
          key={item}
          style={styles.inventoryItem}
          onPress={() => useItem(item)}
          disabled={count <= 0}
        >
          <Image
            source={
              item === 'map'
                ? require('../assets/mapback.png')
                : require('../assets/key.png')
            }
            style={[
              styles.inventoryImage,
              count <= 0 && styles.disabledItem,
            ]}
          />
          <Text style={styles.inventoryText}>
            {item.charAt(0).toUpperCase() + item.slice(1)}: {count}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  // Отображение фрагментов карты
  const renderPieces = () => (
    <View style={styles.piecesContainer}>
      {pieces.map((isRevealed, index) => (
        <Image
          key={index}
          source={isRevealed ? require('../assets/mapback.png') : require('../assets/hexagon.png')}
          style={styles.pieceImage}
        />
      ))}
      <TouchableOpacity
        onPress={() => setShowInventory(!showInventory)}
        style={styles.backpackContainer}
      >
        <Image source={require('../assets/backpack.png')} style={styles.backpackImage} />
      </TouchableOpacity>
      {showInventory && renderInventory()}
    </View>
  );

  return (
    <ImageBackground source={locationQuiz.background} style={styles.background}>
      <SafeAreaView>
        <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate('MapScreen')}
          style={styles.iconButton}
        >
          <Image source={require('../assets/right-arrow.png')} style={styles.exitButtonText} />
        </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
        {!showResults ? (
          <>
            {!showFeedback ? (
              <View style={styles.quizContainer}>
                <View style={styles.timerContainer}>
                  <Image source={require('../assets/timer.png')} style={styles.timerImage} />
                  <Text style={styles.timerText}>{timer}</Text>
                </View>
                <Text style={styles.questionCounter}>
                  {currentQuestionIndex + 1}/{questions.length}
                </Text>
                <Text style={styles.questionText}>
                  {questions[currentQuestionIndex].question}
                </Text>
                {questions[currentQuestionIndex].options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.optionButton}
                    onPress={() => handleAnswer(option.correct, option.feedback)}
                  >
                    <Text style={styles.optionText}>{option.text}</Text>
                  </TouchableOpacity>
                ))}
                {renderPieces()}
              </View>
            ) : (
              <View style={styles.feedbackContainer}>
                <Image source={locationQuiz.characterImage} style={styles.characterImage} />
                <Text style={styles.feedbackText}>{currentFeedback}</Text>
              </View>
            )}
          </>
        ) : (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>
              {correctAnswers >= 4
                ? locationQuiz.results.crest.message
                : correctAnswers >= 2
                ? locationQuiz.results.map.message
                : locationQuiz.results.key.message}
            </Text>
            {correctAnswers >= 4 && (
              <Image
                source={locationQuiz.results.crest.image}
                style={styles.resultImage}
              />
            )}
            {correctAnswers >= 2 && correctAnswers < 4 && (
              <Image
                source={require('../assets/mapback.png')}
                style={styles.resultImage}
              />
            )}{correctAnswers < 2 && (
              <Image
                source={require('../assets/key.png')}
                style={styles.resultImage}
              />
            )}
            <TouchableOpacity
              style={styles.resultButton}
              onPress={() =>
                correctAnswers >= 4
                  ? navigation.navigate('MapScreen', { crestId: locationQuiz.results.crest.id })
                  : resetQuiz()
              }
            >
              <Text style={styles.resultButtonText}>
                {correctAnswers >= 4
                  ? locationQuiz.results.crest.buttonText
                  : correctAnswers >= 2
                  ? locationQuiz.results.map.buttonText
                  : locationQuiz.results.key.buttonText}
              </Text>
            </TouchableOpacity>
          </View>
        )}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
    resultImage: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginVertical: 5,
      },
    iconButton: {
        alignSelf: 'flex-start',
        paddingHorizontal: 10,
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
    inventoryDropdown: {
        position: 'absolute',
        top: 60, 
        left: 10,
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        alignItems: 'center', 
        width: screenWidth * 0.8,
        backgroundColor: '#F4E3C7', 
        borderRadius: 10,
        borderWidth: 3,
        borderColor: '#8B4513',
        padding: 10,
        zIndex: 1, 

      },
      inventoryItem: {
        alignItems: 'center',
        marginVertical: 5,
      },
      inventoryImage: {
        width: 40,
        height: 40,
      },
      inventoryText: {
        fontSize: 14,
        color: '#8B4513',
        marginTop: 5,
      },
      disabledItem: {
        opacity: 0.5,
      },
    disabledButton: {
        opacity: 0.5,
      },
    miniInventory: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#F4E3C7',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#8B4513',
      },
      
      piecesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 20,
      },
      pieceImage: {
        width: 50,
        height: 50,
        marginHorizontal: 5,
      },
      backpackContainer: {
        marginLeft: 10,
      },
      backpackImage: {
        width: 50,
        height: 50,
      },
      inventoryModal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      inventoryTitle: {
        fontSize: 24,
        color: '#FFF',
        marginBottom: 20,
      },
      inventoryItems: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '80%',
      },
      closeButton: {
        marginTop: 20,
        backgroundColor: '#8B4513',
        padding: 10,
        borderRadius: 5,
      },
      closeButtonText: {
        color: '#FFF',
        fontSize: 16,
      },
    inventoryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
      },
      
      activeItem: {
        backgroundColor: '#8B4513',
      },
      inactiveItem: {
        backgroundColor: '#ccc',
      },
     
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  quizContainer: {
    alignItems: 'center',
    backgroundColor: '#F4E3C7',
    padding: 20,
    paddingHorizontal:2,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#8B4513',
  },
  timerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  timerImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  timerText: {
    fontSize: 32,
    color: '#8B4513',
  },
  questionCounter: {
    fontSize: 16,
    color: '#8B4513',
    marginBottom: 10,
  },
  questionText: {
    fontSize: 18,
    color: '#8B4513',
    marginBottom: 20,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#8B4513',
    borderRadius: 5,
    marginVertical: 5,
    width: screenWidth * 0.8, // Ширина кнопки — 80% ширины экрана
    height: 50, // Фиксированная высота кнопок
    justifyContent: 'center', // Выравнивание текста по вертикали
    alignItems: 'center', // Выравнивание текста по горизонтали
  },
  optionText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
  feedbackContainer: {
    alignItems: 'center',
    backgroundColor: '#F4E3C7',
    padding: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#8B4513',
  },
  feedbackText: {
    fontSize: 18,
    color: '#8B4513',
    textAlign: 'center',
    marginTop: 10,
  },
  characterImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#8B4513',
  },
  resultContainer: {
    alignItems: 'center',
    backgroundColor: '#F4E3C7',
    padding: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#8B4513',
  },
  resultText: {
    fontSize: 18,
    color: '#8B4513',
    marginBottom: 20,
    textAlign: 'center',
  },
  resultButton: {
    backgroundColor: '#8B4513',
    padding: 10,
    borderRadius: 5,
  },
  resultButtonText: {
    color: '#FFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Quiz;