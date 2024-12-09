import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const Gallery = ({ navigation }) => {
    const coatOfArms = [
        {
          image: require('../assets/emblem1.png'),
          description: `
    Historical Background:
The fleur-de-lis became a symbol of the French monarchy as early as the reign of King Clovis I (481–511). Legend says that Clovis received this symbol from an angel as a divine sign during his baptism. It became a mark of divine favor for French kings, appearing on royal banners, seals, and coins throughout the Middle Ages.
            
    Interesting Fact:
In the 14th century, the fleur-de-lis was adopted by Joan of Arc as an emblem, leading French forces to victory during the Hundred Years' War.
            
     Symbolic Meaning:
The fleur-de-lis represents purity, peace, and legitimacy of power. Its inclusion in the coat of arms emphasizes the spiritual foundation of the French kingdom.
          `,
        },
        {
          image: require('../assets/emblem2.png'),
          description: `
    Historical Background:
The shield in the French coat of arms symbolizes the country’s military strength and protective might. Traditionally, the shield was depicted in blue, adorned with golden fleurs-de-lis, signifying divine support for the monarchy. It represented the unity of the kingdom under a single ruler, even during tumultuous periods like the Hundred Years' War.
            
    Interesting Fact:
The famous ornamentation of blue with golden fleurs-de-lis appeared during the Capetian dynasty and became a classic image of the French coat of arms. Shields with this design were carried by knights in the Battle of Agincourt (1415).
            
    Symbolic Meaning:
The shield signifies France’s readiness to defend its land, people, and ideals.
          `,
        },
        {
          image: require('../assets/emblem3.png'),
          description: `
    Historical Background:
The French royal crown, known as the “Crown of Saint Louis,” became a symbol of the monarchy in the 13th century. Created by King Louis IX, it was used in coronation ceremonies until the French Revolution. Made of gold and adorned with precious stones, it symbolized the wealth and divine authority of kings.
            
    Interesting Fact:
In Versailles, the crown embodied the absolute monarchy of Louis XIV, the “Sun King,” whose reign marked the zenith of royal power.
            
    Symbolic Meaning:
The crown represents royal lineage, wisdom, and supreme authority, inspiring loyalty among subjects.
          `,
        },
        {
          image: require('../assets/emblem4.png'),
          description: `
    Historical Background:
The lion became an emblem of French nobility and knights, particularly during the Crusades. By the 12th century, lions began appearing on the coats of arms of French feudal lords, symbolizing bravery and strength.
            
    Interesting Fact:
Lions on the French coat of arms often represented the kingdom’s struggles against external foes. For example, during the Albigensian Crusade, they symbolized the bravery of French troops.
            
    Symbolic Meaning:
The lion embodies courage, leadership, and resilience, serving as a reminder of heroic efforts to protect the kingdom.
          `,
        },
        {
          image: require('../assets/emblem5.png'),
          description: `
    Historical Background:
The cross is a central symbol of Christianity and was an important part of the French coat of arms, especially during the Crusades. French kings displayed the cross to symbolize their role as defenders of faith and moral principles.
            
    Interesting Fact:
The cross became a symbol of the French monarchs’ struggle for the balance of power between Church and state. Notre-Dame Cathedral and many other Gothic landmarks in France are architectural testament to this spiritual symbol.
            
    Symbolic Meaning:
The cross represents spirituality, faith, and morality, forming the foundation of French identity.
          `,
        }
      ];
      
      

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < coatOfArms.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/ImageBack.jpg')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        {/* Кнопка выхода */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconButton}
        >
          <Image
            source={require('../assets/right-arrow.png')}
            style={styles.exitButtonText}
          />
        </TouchableOpacity>

        {/* Галерея с гербами */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.coatOfArmsContainer}>
            {/* Изображение герба */}
            <Image
              source={coatOfArms[currentIndex].image}
              style={styles.image}
            />

            {/* Фон для текста */}
            <View style={styles.descriptionBackground}>
              <Text style={styles.descriptionText}>
                {coatOfArms[currentIndex].description}
              </Text>
            </View>

            {/* Стрелки переключения */}
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.imageButton, currentIndex === 0 && styles.disabledArrow]}
                onPress={handlePrevious}
                disabled={currentIndex === 0}
              >
                <Text style={styles.arrowText}>←</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.imageButton, currentIndex === coatOfArms.length - 1 && styles.disabledArrow]}
                onPress={handleNext}
                disabled={currentIndex === coatOfArms.length - 1}
              >
                <Text style={styles.arrowText}>→</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
      marginBottom:10,
      
      
    },
    scrollContainer: {
      alignItems: 'center',
    
    },
    coatOfArmsContainer: {
      alignItems: 'center',
    },
    image: {
      width: '90%', 
      height: undefined,
      aspectRatio: 1, 
      marginBottom: 5,
      resizeMode: 'contain', 
    },
    descriptionBackground: {
      backgroundColor: '#F4E3C7', 
      borderRadius: 15,
      padding: 10,
      borderWidth: 2,
      borderColor: '#8B4513', 
      marginBottom: 2,
      width: '90%',
    },
    descriptionText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#8B4513', 
      textAlign: 'justify',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '60%',
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
      color: '#4B3A2F',
      fontWeight: 'bold',
    },
    imageButton: {
      backgroundColor: '#F4E3C7',
      borderRadius: 20,
      borderWidth: 2,
      borderColor: '#8B4513',
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    arrowText: {
      color: '#4B3A2F',
      fontSize: 24,
      fontWeight: 'bold',
    },
    disabledArrow: {
      backgroundColor: '#D3D3D3',
    },
  });

export default Gallery;