import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useEffect, useState } from 'react';

export default function HelloWorldScreen() {
  // Simple animation state for the text
  const [fontSize, setFontSize] = useState(20);
  
  // Simple animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setFontSize((size) => size === 20 ? 24 : 20);
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, { fontSize }]}>Hello, World!</Text>
        <Text style={styles.subtitle}>
          Welcome to my React Native app
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9fc',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    color: '#0066cc',
    marginBottom: 16,
    // Animation will modify the fontSize
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});