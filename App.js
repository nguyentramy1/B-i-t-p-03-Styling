import React from 'react';
import { Text, SafeAreaView, StyleSheet, View } from 'react-native';


const Square = ({ color, text }) => {
  return (
    <View style={[styles.square, { backgroundColor: color }]}>
      <Text style={styles.squareText}>{text}</Text>
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.squaresContainer}>
        <Square color="#00BCD4" text="Square 1" />
        <Square color="#009688" text="Square 2" />
        <Square color="#F44336" text="Square 3" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  squaresContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  square: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  squareText: {
    color: '#fff',
  },
});
