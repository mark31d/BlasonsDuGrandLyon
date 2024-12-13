import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground, 
  SafeAreaView, 
  Modal
} from 'react-native';
import Slider from '@react-native-community/slider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAudio } from './AudioScript';
import { useVibration } from './Vibration';

const SettingsScreen = ({ navigation }) => {
  const { isMusicPlaying, setIsMusicPlaying, volume, setVolume } = useAudio();
  const { vibrationOn, setVibrationOn } = useVibration();

  const [showResetModal, setShowResetModal] = useState(false);

  const resetProgress = async () => {
    try {
      await AsyncStorage.clear();
      alert('Your progress has been reset!');
    } catch (e) {
      console.error('Failed to reset progress:', e);
    }
  };

  return (
    <ImageBackground source={require('../assets/ImageBack.jpg')} style={styles.background}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Settings</Text>

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

        {/* Кнопка для сброса прогресса */}
        <View style={styles.setting}>
          <Text style={styles.settingText}>Reset Progress</Text>
          <TouchableOpacity
            onPress={() => setShowResetModal(true)}
            style={styles.resetButton}
          >
            <Text style={styles.resetButtonText}>RESET</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.exitButtonText}>Return to Menu</Text>
        </TouchableOpacity>{/* Модальное окно подтверждения сброса */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={showResetModal}
          onRequestClose={() => setShowResetModal(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Are you sure you want to reset your progress?</Text>
              <Text style={styles.modalWarning}>
                Warning! If you reset your progress, all saved information will be lost and cannot be restored.
                Please make sure you want to proceed.
              </Text>
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity
                  style={[styles.modalButton, styles.resetConfirmButton]}
                  onPress={() => {
                    setShowResetModal(false);
                    resetProgress();
                  }}
                >
                  <Text style={styles.modalButtonText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={() => setShowResetModal(false)}
                >
                  <Text style={styles.modalButtonText}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
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
    textAlign: 'center',
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
  resetButton: {
    marginTop: 10,
    backgroundColor: '#4B3A2F',
    borderWidth: 2,
    borderColor: '#8B4513',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  resetButtonText: {
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: '#F4E3C7',
    padding: 20,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#8B4513',
    width: '80%',
  },
  modalText: {fontSize: 18,
    fontWeight: 'bold',
    color: '#4B3A2F',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalWarning: {
    fontSize: 14,
    color: '#4B3A2F',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8B4513',
    backgroundColor: '#4B3A2F',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  resetConfirmButton: {
    backgroundColor: '#8B4513',
  },
  cancelButton: {
    backgroundColor: '#4B3A2F',
  },
});

export default SettingsScreen;