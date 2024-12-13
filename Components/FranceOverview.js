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

const FranceOverview = ({ navigation }) => {
  const articles = [
    {
      title: "Fleur-de-Lis: The Royal Lily of France",
      description: `
Fleur-de-Lis, or the royal lily, is an elegant and refined symbol that has become an integral part of French culture and history. Its shape resembles a stylized lily flower, which has long been associated with purity and nobility.

The history of this symbol dates back to the time of King Clovis I, the first Christian monarch of France. According to legend, after his baptism, Clovis received the lily as a sign of divine blessing and protection. From that time, this symbol became the emblem of the French monarchy.

In the Middle Ages, Fleur-de-Lis became an important attribute of royal power. It could be seen on coats of arms, royal seals, banners, as well as on crowns and royal attire. This symbol surrounded French monarchs, emphasizing their connection to divine forces and the legitimacy of their rule. Additionally, the lily often appeared in architecture, particularly on Gothic cathedrals, making it a part of sacred spaces.

Over time, Fleur-de-Lis became not only a symbol of the monarchy but also an embodiment of French national identity. Today, this emblem can be seen on the coats of arms of many cities, as well as on national flags, retaining its significance and symbolism. The lily is associated with the grandeur and traditions of France, its beauty, and cultural heritage.
Moreover, Fleur-de-Lis has maintained its relevance in the modern world. Its image can be seen on sports emblems, designer accessories, and in art. This symbol remains an inseparable part of the cultural landscape of France, representing not only royal history but also steadfast traditions and national pride.

Thus, Fleur-de-Lis is not just a historical symbol but also a living element of French culture, continuing to impress with its elegance and grandeur across the centuries.
      `,
      image: require('../assets/fleur-de-lis.png'),
    },
    {
        title: "Versailles: The Palace of Kings and Revolutions",
        description: `
Versailles is a symbol of the grandeur of the French monarchy and an important chapter in European history. Originally a small residence, Versailles was transformed into a lavish palace during the reign of Louis XIV, the “Sun King.” In 1682, it became the main residence of the French kings, and it was here that all political power in the country was concentrated.
      
Louis XIV designed Versailles as a symbol of absolute monarchy, seeking to demonstrate his power through architecture and interior design. The vast gardens, numerous halls, and the famous Hall of Mirrors became embodiments of luxury and status. The palace not only served as the king's home but also as the center of aristocratic life, where important political receptions and balls were held.
      
 However, it was Versailles that became the place where the end of the old monarchy began. During the French Revolution of 1789, Versailles symbolized the opulence that the people could no longer tolerate. Louis XVI and his family were forced to leave the palace and move to Paris, marking the beginning of the fall of the monarchy.
      
Today, Versailles is one of the largest architectural landmarks in the world and part of UNESCO's cultural heritage. The palace not only impresses with its beauty but also serves as a reminder of significant historical events that changed the course of French history. Versailles is not only a symbol of royal power but also a witness to the struggle for human rights and the fall of the monarchy in France.
        `,
        image: require('../assets/versail.jpg'),
      },
      {
        title: "Eiffel Tower: The Iron Lady of Paris",
        description: `
The Eiffel Tower is one of the most famous symbols of Paris and France, as well as an important architectural masterpiece that has become one of the most recognizable buildings in the world. Initially perceived as a temporary structure, the tower eventually became a symbol of the Industrial Revolution and modern progress, impressing with its scale and engineering excellence.

Construction of the Eiffel Tower began in 1887 under the design of engineer Gustave Eiffel, in honor of the 1889 World’s Fair in Paris. Standing at 324 meters tall, it was the world’s tallest structure until 1930. Initially, many criticized it as an “iron monster,” but over time, the tower gained popularity and became an inseparable part of the Parisian landscape.

The Eiffel Tower is not only a technical achievement but also a cultural icon that reflects the spirit of Paris. It has always been—and continues to be—a magnet for tourists who come to enjoy breathtaking views of the city from its observation decks.

Over time, the Eiffel Tower became not just an architectural symbol but also a part of pop culture. It is often featured in cinema, music, and art as a symbol of romance, elegance, and modern engineering. Today, it is one of the most visited tourist attractions in the world, drawing millions of people from across the globe every year.

The Eiffel Tower is more than just a building. It is a symbol of France that has left an unforgettable mark on global culture and history.
 `,
        image: require('../assets/eiffeltower.jpg'),
      },
      {
        title: "Joan of Arc: The Girl Who Saved France",
        description: `
Joan of Arc is one of the most famous figures in French history, a heroine who became a symbol of patriotism, courage, and faith. Her name is inseparably linked to the period of the Hundred Years' War when France fought for its independence from England. Despite having no military experience, Joan led the French army and played a decisive role in the victory over the English.

Born in 1412 in the small French village of Domrémy, Joan was the daughter of peasants, but her life changed when she claimed to have received a divine calling to lead the French forces. She asserted that holy visions, which guided her to crown the Dauphin Charles (the future King Charles VII), inspired her to fight for France.

In 1429, Joan of Arc gained widespread popularity when she convinced the Dauphin to allow her to lead the army. Her early military victories, especially the lifting of the siege of Orléans, were pivotal in the fight against the English and helped secure the coronation of Charles VII in Reims.

However, her path was not without obstacles. In 1430, Joan was captured by the English, accused of heresy and witchcraft, and was executed by burning at the stake in 1431 at the age of just 19.

Joan’s death did not erase her legacy. Within a few decades after her execution, she was rehabilitated, and in 1920, she was canonized as a saint. Joan of Arc became a symbol of unwavering faith, national pride, and the struggle for France’s freedom, inspiring generations of people to fight for their rights and liberty.

Her story is a reminder of the strength of the human spirit and the importance of believing in oneself and one’s country, even when it seems that all hope is lost.
 `,
        image: require('../assets/Joan-of-Arc.jpg'),
      },
      {
        title: "The Louvre: From Fortress to World Museum",
        description: `
The Louvre is not just one of the largest and most famous museums in the world; it is a true symbol of France's cultural heritage. Its history began in the late 12th century, when French King Philip II Augustus built the Louvre as a fortress to protect Paris from invasion. Today, the Louvre is one of the most visited museums, housing countless masterpieces of art.

After several renovations and expansions, the Louvre became a royal palace, and in 1793, during the French Revolution, it was transformed into a museum. The palace, once the center of royal power, was made accessible to the public, symbolizing the beginning of a new era in France's cultural life.

The Louvre is particularly famous for its exhibits, including masterpieces like Leonardo da Vinci's Mona Lisa, the Venus de Milo, and El Greco's The Light of the Star. The museum’s vast collection includes remnants of ancient, Egyptian, and European cultures, as well as numerous works of art from various periods, making the Louvre a crucial center for artistic heritage.

In the 20th century, the Louvre was significantly modernized, and in 1989, a landmark event occurred: a new entrance was unveiled — a glass pyramid in the museum's courtyard, which became another iconic symbol of the museum. This architectural innovation merged classical art with modern design, enhancing the museum's appeal.

Today, the Louvre is not only a museum but also a symbol of cultural grandeur, preserving the most valuable artifacts of human civilization. It is a place where history, art, and culture come together, making the Louvre one of the most important cultural institutions in the world.
`,
        image: require('../assets/louvre.jpg'),
      },
      {
        title: "Baguette and Croissant: Symbols of French Cuisine",
        description: `
The baguette and croissant are not just dishes; they are true symbols of French cuisine that have gained worldwide popularity. Each of these delicacies has its own history and unique place in French culture.

The baguette, a long loaf with a crispy crust and soft inside, has become synonymous with the French way of life. Its origins are often associated with the 19th century, when long, thin loaves were first baked in Paris. Thanks to its light, crispy dough, the baguette quickly gained popularity in France and eventually became a beloved food in many countries. The French often eat baguette for breakfast or lunch, spreading butter or pâté on it. It is an essential part of picnics and traditional French meals.

The croissant is another culinary symbol of France, although its history begins not in France, but in Austria. It is believed that the croissant was created in 1683 in Vienna, when the Austrians celebrated their victory over the Turks. In the 19th century, this type of pastry made its way to France, where it became extremely popular. With its soft, buttery dough and characteristic crescent shape, the croissant became a favorite breakfast item for the French, often paired with a cup of coffee.

In both cases, these dishes embody French culture: simplicity, elegance, and dedication to high quality. They have become symbols of French gastronomy, as every bite of a baguette or croissant transports you to the heart of France, where food is not just a necessity, but a true art form.
`,
        image: require('../assets/baguette.jpg'),
      },
      {
        title: "The French Revolution: The Day the Bastille Fell",
        description: `
The French Revolution is one of the most significant events in world history, radically changing the political landscape of France and other European countries. One of the most pivotal moments of the revolution was the storming of the Bastille on July 14, 1789, which became a symbol of the fight for liberty, equality, and fraternity.

The Bastille, a medieval fortress located in the center of Paris, was at the time a symbol of the absolute power of the monarchy and repression against any opposition. It served as a prison for political dissidents and had become an object of hatred among the French people, who were suffering from poverty, high taxes, and inequality.

On July 14, 1789, a group of revolutionaries, mostly from the lower classes, marched to the Bastille to seize weapons and free political prisoners. This occurred after King Louis XVI attempted to dissolve the National Assembly, which had been created to represent the interests of the people. The protest escalated into a large-scale confrontation, and ultimately, the fortress fell under the pressure of the revolutionaries.

The storming of the Bastille marked the beginning of the Great French Revolution. As a result of the events on July 14, the king was forced to acknowledge the power of the people who demanded changes in the social and political structure. Over the next few years, France underwent significant changes, including the adoption of the Declaration of the Rights of Man and Citizen, the execution of King Louis XVI, and the transition to a republican system.

Today, July 14 is a national holiday in France, Bastille Day, which symbolizes the triumph of the people over tyranny and the struggle for democratic rights and freedoms. This day is important not only for France but for the entire world, as the revolution changed the course of history, inspiring other nations to fight for equality and human rights.
`,
        image: require('../assets/revalution.jpg'),
      },
      {
        title: "Notre-Dame Cathedral: The Heart of Paris",
        description: `
Notre-Dame Cathedral, or Notre-Dame de Paris, is one of the greatest architectural masterpieces of Gothic style, a symbol of Paris, and an integral part of its history. Built in the middle of the 12th century, this immense cathedral became not only a religious center but also a symbol of French culture and spirituality.

Construction of Notre-Dame began in 1163 under the order of Bishop Maurice de Sully and was not completed until the 14th century. The cathedral impresses with its architectural beauty, especially its massive stained-glass windows, high arches, and sculptural details. Notre-Dame is more than just a church; it is an architectural encyclopedia that showcases the development of the Gothic style with its characteristic elements: pointed arches, soaring towers, and vast windows filled with colorful stained glass.

Notre-Dame plays a crucial role not only in the religious life of Paris but also in its cultural, political, and historical context. It was here that the coronations of French kings took place, and the cathedral became a site for prayers and celebrations. It also houses a rich archive tied to the history of France.

In 2019, the cathedral was severely damaged by a large fire that destroyed its roof and spire. However, thanks to the efforts of the state and the international community, the restoration of Notre-Dame is ongoing. This revival has become a symbol of hope and resilience for Parisians and the world.

Notre-Dame Cathedral is not only a religious monument but also a cultural and spiritual symbol of Paris. Its grandeur and beauty inspire millions of people from all over the world who visit to admire this architectural marvel, which stands at the heart of the French capital.
`,
        image: require('../assets/notre-damepari.jpg'),
      },
      {
        title: "Napoleon Bonaparte: Genius and Emperor",
        description: `
Napoleon Bonaparte is one of the most famous and controversial figures in the history of France and Europe. Born in Corsica in 1769, he quickly rose through the ranks of the military and political world, eventually becoming the Emperor of France and transforming it into a powerful empire.

Napoleon gained fame for his military genius, achieving a series of brilliant victories during the Napoleonic Wars. His strategic brilliance and reforms in the military allowed France to gain control over much of Europe. Under his leadership, France became the dominant power on the continent.

In 1804, Napoleon declared himself Emperor of France, shifting the country from a republic to an absolute monarchy. He implemented a number of significant reforms, such as the Napoleonic Code, which became the foundation of many modern legal systems worldwide, as well as reforms in education, the economy, and administration.

However, Napoleon's ambitions led to his downfall. After a failed campaign in Russia and defeat at the Battle of Leipzig, his army was crushed by a coalition of European powers. In 1814, Napoleon was forced to abdicate and was exiled to the island of Elba. After escaping from Elba, he returned to France, but after his final defeat at the Battle of Waterloo in 1815, he was permanently exiled to the island of Saint Helena, where he died in 1821.

Napoleon left a lasting legacy in history. His military achievements, reforms, and ambitions changed the course of European history, and even today, his name remains synonymous with great power and influence.
`,
        image: require('../assets/bomopart.jpg'),
      },
      {
        title: "French Wine: Vineyards and Traditions",
        description: `
France is renowned for its winemaking tradition, which spans over two millennia. The wines of this country are considered some of the best in the world, with French grapes symbolizing quality and sophistication. Winemaking has become an integral part of French culture, with the country hosting numerous wine-producing regions, each with its unique characteristics and traditions.

Among the most famous French wine regions are Bordeaux, Burgundy, Champagne, and Provence. Bordeaux is known for its red wines, particularly varieties such as Cabernet Sauvignon and Merlot, while Burgundy is famous for its exceptional white wines made from Chardonnay. Champagne is world-renowned for its sparkling wine, which is made using the traditional method of secondary fermentation in the bottle.

The French take great pride not only in the quality of their wines but also in the process of their production. Winemaking in France is based on strict traditions passed down from generation to generation. Key stages in the process include the selection of grape varieties, the winemaking technique, aging in barrels, and storage in cellars. This craft is deeply intertwined with a respect for nature and the environment.
`,
        image: require('../assets/french-wine.jpg'),
      },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < articles.length - 1) {
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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconButton}
        >
          <Image
            source={require('../assets/right-arrow.png')}
            style={styles.exitButtonText}
          />
        </TouchableOpacity>

        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.articleContainer}>
            <Text style={styles.titleText}>
              {articles[currentIndex].title}
            </Text>
            <Image
              source={articles[currentIndex].image}
              style={styles.image}
            />
            <View style={styles.descriptionBackground}>
              <Text style={styles.descriptionText}>
                {articles[currentIndex].description}
              </Text>
            </View>
            <View style={styles.row}>
              <TouchableOpacity
                style={[styles.imageButton, currentIndex === 0 && styles.disabledArrow]}
                onPress={handlePrevious}
                disabled={currentIndex === 0}
              >
                <Text style={styles.arrowText}>←</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.imageButton, currentIndex === articles.length - 1 && styles.disabledArrow]}
                onPress={handleNext}
                disabled={currentIndex === articles.length - 1}
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
    marginBottom: 10,
    marginHorizontal:-10,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  articleContainer: {
    alignItems: 'center',
    padding:4,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#8B4513',
    textAlign: 'center',
    marginVertical: 10,
    backgroundColor:'#F4E3C7',
    borderRadius:25,
    paddingHorizontal:2,
    padding:15,
    borderColor:'#8B4513',
    borderWidth:3,
    
  },
  image: {
    width: '90%',
    height: undefined,
    aspectRatio: 1,
    marginBottom: 5,
   
    borderRadius:50,
  },
  descriptionBackground: {
    backgroundColor: '#F4E3C7',
    borderRadius: 15,
    padding: 5,
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

export default FranceOverview;