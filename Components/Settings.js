import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground, 
  SafeAreaView 
} from 'react-native';
import Slider from '@react-native-community/slider'; // Используем Slider из библиотеки
import { useAudio } from './AudioScript';
import { useVibration } from './Vibration';

const SettingsScreen = ({ navigation }) => {
  const { isMusicPlaying, setIsMusicPlaying, volume, setVolume } = useAudio();
  const { vibrationOn, setVibrationOn } = useVibration();

  return (
    <ImageBackground source={require('../assets/ImageBack.jpg')} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Settings</Text>

        {/* Ползунок для громкости музыки */}
        <View style={styles.setting}>
          <Text style={styles.settingText}>Music Volume: {Math.round(volume * 100)}%</Text>
          <Slider
            style={styles.slider}
            value={volume}
            onValueChange={setVolume}
            minimumValue={0}
            maximumValue={1}
            step={0.01}
            minimumTrackTintColor="#8B4513"
            maximumTrackTintColor="#F4E3C7"
            thumbTintColor="#8B4513"
          />
          <TouchableOpacity
            onPress={() => setIsMusicPlaying(!isMusicPlaying)}
            style={[
              styles.toggleButton, 
              isMusicPlaying && styles.toggleButtonActive
            ]}
          >
            <Text style={styles.toggleButtonText}>
              {isMusicPlaying ? 'Music OFF' : 'Music ON'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Кнопка для вибрации */}
        <View style={styles.setting}>
          <Text style={styles.settingText}>Vibration</Text>
          <TouchableOpacity
            onPress={() => setVibrationOn(!vibrationOn)}
            style={[
              styles.vibrationButton, 
              vibrationOn && styles.vibrationButtonActive
            ]}
          >
            <Text style={styles.vibrationButtonText}>
              {vibrationOn ? 'Vibration OFF' : 'Vibration ON'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Кнопка для возвращения в главное меню */}
        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.exitButtonText}>Return to Menu</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};const styles = StyleSheet.create({
  background: { 
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4B3A2F',
    textAlign: 'center',
    backgroundColor: '#F4E3C7',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#8B4513',
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignSelf: 'center',
  },
  setting: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#F4E3C7',
    padding: 10,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#8B4513',
    width: '90%',
    alignSelf: 'center',
  },
  settingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 10,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  toggleButton: {
    marginTop: 10,
    backgroundColor: '#4B3A2F',
    borderWidth: 2,
    borderColor: '#8B4513',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
  },
  toggleButtonActive: {
    backgroundColor: '#8B4513',
  },
  toggleButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  vibrationButton: {
    marginTop: 10,
    backgroundColor: '#4B3A2F',
    borderWidth: 2,
    borderColor: '#8B4513',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  vibrationButtonActive: {
    backgroundColor: '#8B4513',
  },
  vibrationButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  exitButton: {
    backgroundColor: '#F4E3C7',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#8B4513',
    paddingVertical: 15,
    paddingHorizontal: 30,
    alignSelf: 'center',
  },
  exitButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#4B3A2F',
  },
});

export default SettingsScreen;