import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CalculatorScreen = ({ displayValue }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.display}>{displayValue}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 2,
    backgroundColor: 'black',
    alignItems: 'flex-end',
    justifyContent: 'center',
    padding: 10,
  },
  display: {
    fontSize: 40,
    color: 'white',
  },
});

export default CalculatorScreen;