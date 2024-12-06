import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Image,
  ImageBackground,
} from 'react-native';

const Menu = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(true);
  const [infoVisible, setInfoVisible] = useState(false);
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0);

 
const facts = [
  {
    title: "The Birth of the Eiffel Tower",
    text: "In 1889, France celebrated the 100th anniversary of the French Revolution by hosting the World’s Fair in Paris. Gustave Eiffel, an engineer known for creating impressive metal structures, was tasked with building a temporary structure to serve as the centerpiece of the exhibition. The Eiffel Tower was criticized by many famous French figures of the time, who considered it ugly and even dangerous. However, over time, it became one of the most iconic landmarks in the world and a symbol of Paris and France.",
  },
  {
    title: "The French Revolution and the Storming of the Bastille",
    text: "On July 14, 1789, the people of Paris stormed the Bastille, a fortress that symbolized the absolute power of the monarchy. This act marked the beginning of the French Revolution, which not only changed France but also the world. Protests against high taxes, hunger, and social inequality led to the overthrow of the monarchy and the establishment of a republican government. The storming of the Bastille became a symbol of the struggle for freedom and equality, and July 14 is still celebrated today as Bastille Day, a national holiday in France.",
  },
  {
    title: "The Birth of Modern Cinema",
    text: "In 1895, the Lumière brothers, French inventors and entrepreneurs, held the first public screening of a film in Paris. This was a revolutionary event, as the Lumière brothers were the first to create a motion picture camera and projector. They filmed short scenes depicting everyday life, such as workers leaving a factory or a train arriving at a station. This marked the beginning of a new form of art known today as cinema.",
  },
  {
    title: "The Mystery of the Mona Lisa",
    text: "The Mona Lisa is one of the most famous paintings in the world, created by Leonardo da Vinci around 1503. But what makes this painting so mysterious? Mona Lisa's smile has been the subject of many studies and theories. It is known that her face changes depending on the angle from which you look at it. The painting was stolen from the Louvre in 1911 and returned two years later, which added to the mystery surrounding the masterpiece. Today, the Mona Lisa remains one of the most visited exhibits in the world.",
  },
  {
    title: "The Legacy of French Cuisine",
    text: "France is renowned for its culinary heritage, which has influenced cuisines worldwide. From delicious croissants and baguettes to sophisticated dishes like foie gras and escargots, French cuisine is considered one of the finest in the world. In 2010, UNESCO recognized French gastronomic culture as an intangible cultural heritage of humanity. An important aspect of French cuisine is etiquette - the French often celebrate food by preparing it slowly and carefully, making each dish special.",
  },
  {
    title: "The Secret of Mont Saint-Michel",
    text: "Mont Saint-Michel is an island located in the northwestern part of France, famous for its stunning abbey perched atop a rock. Every day, the island changes: at low tide, it connects to the mainland, and at high tide, it becomes isolated. Mont Saint-Michel was once an important religious center during the medieval period, and it continues to attract tourists who want to experience its dramatic tides and explore its rich historical heritage.",
  },
  {
    title: "The French Riviera and the Birth of Tourism",
    text: "The French Riviera became a popular vacation spot in the late 19th century, when British doctors began recommending the region for the treatment of tuberculosis. They brought wealthy and famous people to the area, and soon, modern tourism was born. Today, the Riviera is one of the most luxurious destinations on the planet, known for its beaches, glamorous resorts, and the Cannes Film Festival.",
  },
  {
    title: "The Story of French Wine",text: "France is one of the world's largest wine producers. Wines from Bordeaux, Champagne, Burgundy, and other regions have global fame. France has been producing wine for over two thousand years, and each region has its unique winemaking traditions. The French developed and refined methods of wine production, which later became the standard for winemakers around the world. Red, white, rosé - each wine variety has its own story, distinctive features, and unique taste.",
  },
  {
    title: "The French Resistance during World War II",
    text: "During World War II, many French people joined the French Resistance, a movement that fought against Nazi occupation. They organized sabotage missions, gathered intelligence, and helped Jews and other persecuted groups. These brave individuals often worked under great risk, and their contribution to the victory over Nazism became an important chapter in French history.",
  },
  {
    title: "The Beauty of Parisian Cafés",
    text: "Paris is known for its cafés, which became not only places to enjoy food and drinks but also centers for cultural and intellectual life. Art, literature, and politics - all of these were discussed over a cup of coffee in the cafés of Paris. Famous writers, artists, and politicians often met in Parisian cafés to discuss important ideas and social issues that influenced the cultural development of the world.",
  },
];

  useEffect(() => {
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
    setCurrentInfoIndex(dayOfYear % facts.length);
  }, []);

  const handleCloseModal = () => {
    setModalVisible(false);
    setInfoVisible(true);
  };

  return (
    <ImageBackground
      source={require('../assets/ImageBack.jpg')}
      style={styles.background}
    >
      
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <ImageBackground
          source={require('../assets/ImageBack.jpg')}
          style={styles.modalBackground}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Welcome to Blasons du Grand Lyon</Text>
            <Text style={styles.modalText}>
              Prepare yourself for an exciting adventure where history, puzzles, and the coats of arms of Greater Lyon intertwine into one great mystery. 
              Your goal is to restore an ancient coat of arms and uncover its riddles and secrets tied to majestic lions. 
              Are you ready to begin your journey and unlock the secrets of the heraldry?
            </Text>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleCloseModal}
            >
              <Text style={styles.closeButtonText}>Uncover Secrets</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </Modal>

      {/* Interesting Information Screen */}
      {infoVisible && (
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>{facts[currentInfoIndex]?.title || "No Title"}</Text>
          <Text style={styles.modalText}>{facts[currentInfoIndex]?.text || "No Content Available"}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setInfoVisible(false)}
          >
            <Text style={styles.closeButtonText}>Back to Menu</Text>
          </TouchableOpacity>
        </View>
      )}

      {!modalVisible && !infoVisible && (
        <View style={styles.container}>
          {/* Top Row with Arrow and Image Buttons */}
          <View style={styles.row}>
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={styles.imageButton}
            >
               <Image
                source={require('../assets/right-arrow.png')}
                style={styles.iconText}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Gallery')}
              style={styles.imageButton}
            >
              <Image
                source={require('../assets/emblem.png')}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Settings')}
              style={styles.imageButton}
            >
              <Image
                source={require('../assets/brand.png')}
                style={styles.buttonImage}
              />
            </TouchableOpacity>
          </View>{/* Other Menu Buttons */}
          <TouchableOpacity
            onPress={() => navigation.navigate('Journey')}
            style={styles.menuButton}
          >
            <Text style={styles.menuText}>Start Journey</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Overview')}
            style={styles.menuButton}
          >
            <Text style={styles.menuText}>France Overview</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            style={styles.menuButton}
          >
            <Text style={styles.menuText}>About Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Rate')}
            style={styles.menuButton}
          >
            <Text style={[styles.menuText, styles.rateText]}>Rate Us</Text>
            
          </TouchableOpacity>
          <Image
                source={require('../assets/leo.png')}
                style={styles.image}
              />
        </View>
      )}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  image:{
    width: 100,
    height: 100,
    backgroundColor:'#F4E3C7',
    borderRadius:50,
    
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 50,
  },
  iconButton: {
    paddingHorizontal: 10,
  },
  iconText: {
    
    width: 50,
    height: 50,
  },
  imageButton: {
    backgroundColor:'#F4E3C7',
    borderRadius:20,
    borderWidth:2,
    borderColor:'#8B4513',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  menuButton: {
    backgroundColor: '#F4E3C7',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: '80%',
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#8B4513',
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  menuText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4B3A2F',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    textAlign: 'center',
  },
  rateText: {
    color: '#DAA520',
    fontWeight: '700',
  },
  modalBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'rgba(245, 245, 220, 0.9)',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#8B4513',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3,
    elevation: 10,
    alignSelf:'center',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4B3A2F',
    textAlign: 'center',
  },
  modalText: {
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#4B3A2F',
  },
  closeButton: {
    backgroundColor: '#8B4513',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#DAA520',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Menu;