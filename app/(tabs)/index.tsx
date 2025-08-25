import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Animated } from 'react-native';
import { useEffect, useState, useRef } from 'react';

export default function HelloWorldScreen() {
  // Animation value for scaling
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const [greetingIndex, setGreetingIndex] = useState(0);
  
  const greetings = [
    'Hello, World!',
    'Hola, Mundo!',
    'Bonjour, Monde!',
    'Ciao, Mondo!',
    'Hallo, Welt!'
  ];

  // Animation sequence
  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Start animation and change greeting on press
  const handlePress = () => {
    startAnimation();
    setGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
  };

  // Initial animation on mount
  useEffect(() => {
    startAnimation();
    
    // Pulse animation every 3 seconds
    const interval = setInterval(() => {
      startAnimation();
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Animated.View
          style={[
            styles.card,
            { transform: [{ scale: scaleAnim }] }
          ]}
        >
          <Text style={styles.title}>{greetings[greetingIndex]}</Text>
          <Text style={styles.subtitle}>
            Welcome to my React Native app
          </Text>
        </Animated.View>

        <TouchableOpacity 
          style={styles.button}
          onPress={handlePress}
          activeOpacity={0.7}
        >
          <Text style={styles.buttonText}>Change Language</Text>
        </TouchableOpacity>

        <Text style={styles.instructions}>
          Tap the button to see the greeting in different languages
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f5ff',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 40,
    width: '90%',
    maxWidth: 350,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a6ee0',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4a6ee0',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    marginVertical: 20,
    shadowColor: '#4a6ee0',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  instructions: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 30,
  },
});