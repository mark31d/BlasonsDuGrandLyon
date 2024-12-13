const quizData = {
    1: {
      background: require('../assets/antique.jpg'),
      characterImage:require('../assets/shopkeeper.png'),
      questions: [
          {
            question: "What is the name of the main river that flows through Paris?",
            options: [
              { text: "Seine", correct: true, feedback: "Shopkeeper: 'Correct. The Seine is the heart of Paris.'" },
              { text: "Loire", correct: false, feedback: "Shopkeeper: 'No, the Loire flows far from Paris.'" },
            ],
          },
          {
            question: "Which cathedral is a symbol of Paris, renowned for its Gothic architecture?",
            options: [
              { text: "Notre-Dame de Paris", correct: true, feedback: "Shopkeeper: 'Yes, the Notre-Dame Cathedral is a masterpiece of Gothic grandeur.'" },
              { text: "Sacré-Cœur", correct: false, feedback: "Shopkeeper: 'No, Sacré-Cœur is a basilica, built much later.'" },
            ],
          },
          {
            question: "When was the Eiffel Tower built?",
            options: [
              { text: "1889", correct: true, feedback: "Shopkeeper: 'Correct! It was constructed for the World’s Fair.'" },
              { text: "1789", correct: false, feedback: "Shopkeeper: 'No, that’s the year the French Revolution began, not the year of the tower’s construction.'" },
            ],
          },
          {
            question: "Which of these artists lived and worked in Montmartre?",
            options: [
              { text: "Henri de Toulouse-Lautrec", correct: true, feedback: "Shopkeeper: 'That’s right, Toulouse-Lautrec is famous for his posters of cabarets.'" },
              { text: "Claude Monet", correct: false, feedback: "Shopkeeper: 'No, Monet worked in Giverny, far from Montmartre.'" },
            ],
          },
          {
            question: "What historic event took place at the Place de la Bastille in 1789?",
            options: [
              { text: "Storming of the Bastille", correct: true, feedback: "Shopkeeper: 'Correct, it became the symbol of the French Revolution.'" },
              { text: "Napoleon's proclamation as Emperor", correct: false, feedback: "Shopkeeper: 'No, that happened much later.'" },
            ],
          },
        ],
        results: {
            
          crest: {
            image:require('../assets/emblem1.png'),
            id:1,
            message: "Shopkeeper: 'You did it! Here’s the piece of the crest. It’s the key to your next destination.'",
            buttonText: "Accept the Crest Piece",
          },
          map: {
            message: "Shopkeeper: 'Not bad, but you still have some work to do. Here’s a map to lead you to your next challenge.'",
            buttonText: "Accept the Map",
          },
          key: {
            message: "Shopkeeper: 'Perhaps Paris remains a mystery to you for now. Take this key and try again later.'",
            buttonText: "Accept the Key",
          },
        },
      },

      2: {
        background: require('../assets/montmartre.jpg'),
        characterImage:require('../assets/Curator.png'),
        questions: [
          {
            question: "When was the first stone of the Notre-Dame Cathedral foundation laid?",
            options: [
              { text: "1163", correct: true, feedback: "Curator: 'Correct, it happened during the reign of King Louis VII!'" },
              { text: "1204", correct: false, feedback: "Curator: 'No, by 1204, the cathedral had been under construction for over 40 years.'" },
            ],
          },
          {
            question: "What architectural feature of the cathedral most impresses visitors?",
            options: [
              { text: "Stained glass and rose windows", correct: true, feedback: "Curator: 'Exactly, the rose windows are true masterpieces of Gothic art.'" },
              { text: "The golden spire crown", correct: false, feedback: "Curator: 'The golden crown is symbolic, but it was added much later.'" },
            ],
          },
          {
            question: "Who wrote the famous novel The Hunchback of Notre-Dame?",
            options: [
              { text: "Victor Hugo", correct: true, feedback: "Curator: 'Correct! This novel helped save the cathedral from destruction in the 19th century.'" },
              { text: "Gustave Flaubert", correct: false, feedback: "Curator: 'No, Flaubert wrote another classic - Madame Bovary.'" },
            ],
          },
          {
            question: "What mythical creature is associated with Notre-Dame Cathedral?",
            options: [
              { text: "Gargoyles", correct: true, feedback: "Curator: 'Correct, gargoyles protect the cathedral from evil spirits while also serving as water spouts.'" },
              { text: "Griffins", correct: false, feedback: "Curator: 'No, griffins are mythical creatures, but they are not related to Notre-Dame.'" },
            ],
          },
          {
            question: "What happened to Notre-Dame Cathedral in 2019?",
            options: [
              { text: "Major fire", correct: true, feedback: "Curator: 'Unfortunately, that’s true. But the cathedral is currently being restored.'" },
              { text: "Restoration of the spire began", correct: false, feedback: "Curator: 'No, the restoration of the spire began after the fire.'" },
            ],
          },
        ],
        results: {

          crest: {
            image:require('../assets/emblem2.png'),
            id:2,
            message: "Curator: 'Impressive knowledge! As promised, here’s the second fragment of the crest - the royal lilies, symbols of glory and grandeur.'",
            buttonText: "Accept the Crest Fragment",
          },
          map: {
            message: "Curator: 'Well done, but it’s not enough to earn the crest. Here’s a map that will guide you to your next location.'",
            buttonText: "Accept the Map",
          },
          key: {
            message: "Curator: 'This is not easy, but don’t be discouraged. Take this key, it will help you in your future adventures.'",
            buttonText: "Accept the Key",
          },
        },
      },
      3: { 
        background: require('../assets/louvreBG.jpg'), 
        characterImage:require('../assets/Historian.png'),
        questions: [
          {
            question: "What did the Bastille symbolize for the people of France?",
            options: [
              { text: "Royal authoritarianism", correct: true, feedback: "Historian: 'Exactly! The Bastille was a symbol of oppression that spurred the people to storm it.'" },
              { text: "Protection from foreign invaders", correct: false, feedback: "Historian: 'No, it was more a place for political prisoners than a defensive structure.'" },
            ],
          },
          {
            question: "How many prisoners were in the Bastille at the time of its storming?",
            options: [
              { text: "7 prisoners", correct: true, feedback: "Historian: 'Correct! Even though there were so few, the storming became a symbolic victory.'" },
              { text: "Around 200 prisoners", correct: false, feedback: "Historian: 'No, that’s a common myth. In reality, there were only 7 prisoners.'" },
            ],
          },
          {
            question: "What was erected on the site of the destroyed Bastille in 1830?",
            options: [
              { text: "The July Column", correct: true, feedback: "Historian: 'That’s right! The July Column honors those who died fighting for liberty.'" },
              { text: "The Statue of Liberty", correct: false, feedback: "Historian: 'No, the Statue of Liberty was a gift to the United States and stands in New York.'" },
            ],
          },
          {
            question: "What modern landmark now stands at Place de la Bastille?",
            options: [
              { text: "The Bastille Opera House", correct: true, feedback: "Historian: 'Correct, a modern cultural symbol of France!'" },
              { text: "The Palace of the Revolution", correct: false, feedback: "Historian: 'No, such a structure has never existed here.'" },
            ],
          },
          {
            question: "What day became a national holiday in France to commemorate the Revolution?",
            options: [
              { text: "July 14", correct: true, feedback: "Historian: 'That’s right, Bastille Day is a symbol of liberty.'" },
              { text: "May 1", correct: false, feedback: "Historian: 'May Day celebrates labor, but it isn’t directly linked to the Revolution.'" },
            ],
          },
        ],
        results: {
          crest: {
            image:require('../assets/emblem3.png'),
            id:3,
            message: "Historian: 'Your knowledge is impressive! You have earned the next fragment of the crest - a symbol of the revolution. Take it as proof of your mastery.'",
            buttonText: "Accept the Crest Fragment",
          },
          map: {
            message: "Historian: 'Well done, but it’s not enough to claim the crest. Here’s a map to guide you on your next journey.'",
            buttonText: "Accept the Map",
          },
          key: {
            message: "Historian: 'Don’t be discouraged! History is complex, and you have time to learn. Take this key; it may come in handy.'",
            buttonText: "Accept the Key",
          },
        },
      },
      4: { 
        background: require('../assets/notredameBG.jpg'), 
        characterImage:require('../assets/Guide.png'),
        questions: [
          {
            question: "What was originally built on the site of the modern-day Louvre?",
            options: [
              { text: "A fortress to defend Paris", correct: true, feedback: "Guide: 'Correct! The Louvre was constructed in 1190 as a fortress to defend against Viking raids.'" },
              { text: "A royal palace from the very beginning", correct: false, feedback: "Guide: 'No, it only became a royal palace later.'" },
            ],
          },
          {
            question: "What is the most famous painting housed in the Louvre?",
            options: [
              { text: "The Mona Lisa", correct: true, feedback: "Guide: 'Yes! The Mona Lisa, painted by Leonardo da Vinci, is the gem of the Louvre.'" },
              { text: "The Last Supper", correct: false, feedback: "Guide: 'No, that masterpiece is in Milan, not the Louvre.'" },
            ],
          },
          {
            question: "What river flows past the Louvre?",
            options: [{ text: "The Seine", correct: true, feedback: "Guide: 'Exactly! The Seine’s waves have whispered Paris’s secrets for centuries.'" },
              { text: "The Rhône", correct: false, feedback: "Guide: 'No, the Rhône flows in another region of France.'" },
            ],
          },
          {
            question: "When did the Louvre become a museum?",
            options: [
              { text: "During the French Revolution in 1793", correct: true, feedback: "Guide: 'Correct! The Revolution opened the Louvre’s doors to the public.'" },
              { text: "In 1850 under Napoleon III", correct: false, feedback: "Guide: 'No, by then the Louvre had already been a museum for decades.'" },
            ],
          },
          {
            question: "What architectural feature has become the modern symbol of the Louvre?",
            options: [
              { text: "The Glass Pyramid", correct: true, feedback: "Guide: 'Yes, the pyramid was designed by architect I. M. Pei and unveiled in 1989.'" },
              { text: "The Arc de Triomphe du Carrousel", correct: false, feedback: "Guide: 'No, while beautiful, the pyramid is the main modern symbol of the Louvre.'" },
            ],
          },
        ],
        results: {
          crest: {
            image:require('../assets/emblem4.png'),
            id:4,
            message: "Guide: 'Excellent work! You’ve earned the next fragment of the crest - the waves of the Seine. Take it, for it is rightfully yours!'",
            buttonText: "Accept the Crest Fragment",
          },
          map: {
            message: "Guide: 'Your knowledge still needs some refinement, but you’re on the right track. Here’s a map to guide you to the next location.'",
            buttonText: "Accept the Map",
          },
          key: {
            message: "Guide: 'Don’t be discouraged; the Louvre holds many secrets. Take this key; it might help you in the future.'",
            buttonText: "Accept the Key",
          },
        },
      },
      5: { 
        background: require('../assets/montparnasse.jpg'), 
        characterImage:require('../assets/Artist.png'),
        questions: [
          {
            question: "What famous basilica is located at the summit of Montmartre?",
            options: [
              { text: "Sacré-Cœur", correct: true, feedback: "Artist: 'That’s right! Its gleaming white dome is visible from afar, symbolizing Montmartre.'" },
              { text: "Notre-Dame de Paris", correct: false, feedback: "Artist: 'No, Notre-Dame is located on the Île de la Cité.'" },
            ],
          },
          {
            question: "Which of these artists lived and worked in Montmartre?",
            options: [
              { text: "Henri de Toulouse-Lautrec", correct: true, feedback: "Artist: 'Exactly! His works celebrate the vibrant nightlife of Montmartre.'" },
              { text: "Vincent van Gogh", correct: false, feedback: "Artist: 'No, although he lived in France, his path was different.'" },
            ],
          },
          {
            question: "What is the Moulin Rouge, a landmark of Montmartre, known for?",
            options: [
              { text: "The birthplace of the can-can", correct: true, feedback: "Artist: 'Absolutely correct! The Moulin Rouge became a symbol of entertainment and freedom.'" },
              { text: "A classical music theater", correct: false, feedback: "Artist: 'No, this venue is famous for its lively and bold dance.'" },
            ],
          },
          {
            question: "What does the name ‘Montmartre’ mean?",
            options: [
              { text: "The Hill of Martyrs", correct: true, feedback: "Artist: 'Correct! The name originates from the martyrdom of Saint Denis.'" },
              { text: "The Hill of Art", correct: false, feedback: "Artist: 'No, though the place is synonymous with art, its name has historical roots.'" },
            ],
          },
          {
            question: "What monument stands in the center of Place du Tertre?",
            options: [
              { text: "A monument to Montmartre’s artists", correct: false, feedback: "Artist: 'No, this square remains open and dedicated to artists.'" },
              { text: "It’s an open space for artists", correct: true, feedback: "Artist: 'Right! Place du Tertre is a space for creativity, not monuments.'" },
            ],
          },
        ],
        results: {
          crest: {
            image:require('../assets/emblem5.png'),
            id:5,
            message: "Artist: 'Fantastic! You’ve unraveled all the secrets of Montmartre. Here is the final crest fragment - the crown, symbolizing the majesty of Paris!'",
            buttonText: "Accept the Crest Fragment",
          },
          map: {
            message: "Artist: 'Your knowledge is good, but not perfect. Here’s a map to aid you in future adventures.'",
            buttonText: "Accept the Map",
          },
          key: {
            message: "Artist: 'Not to worry, Montmartre is a place to feel with your heart. Take this key; it may come in handy.'",
            buttonText: "Accept the Key",
          },
        },
    },    
  };
  
  export default quizData;