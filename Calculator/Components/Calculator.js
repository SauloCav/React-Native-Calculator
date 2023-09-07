import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import CalculatorScreen from './CalculatorScreen';
import Button from './Button';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonPress = (text) => {
    setDisplayValue(displayValue + text);
  };

  const handleCalculate = () => {
    try {
      setDisplayValue(eval(displayValue).toString());
    } catch (error) {
      setDisplayValue('Erro');
    }
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  return (
    <View style={styles.calculator}>
      <CalculatorScreen displayValue={displayValue} />
      <View style={styles.buttons}>
        <View style={styles.buttonRow}>
          <Button text="7" onPress={() => handleButtonPress('7')} />
          <Button text="8" onPress={() => handleButtonPress('8')} />
          <Button text="9" onPress={() => handleButtonPress('9')} />
          <Button text="/" onPress={() => handleButtonPress('/')} />
        </View>
        <View style={styles.buttonRow}>
          <Button text="4" onPress={() => handleButtonPress('4')} />
          <Button text="5" onPress={() => handleButtonPress('5')} />
          <Button text="6" onPress={() => handleButtonPress('6')} />
          <Button text="*" onPress={() => handleButtonPress('*')} />
        </View>
        <View style={styles.buttonRow}>
          <Button text="1" onPress={() => handleButtonPress('1')} />
          <Button text="2" onPress={() => handleButtonPress('2')} />
          <Button text="3" onPress={() => handleButtonPress('3')} />
          <Button text="-" onPress={() => handleButtonPress('-')} />
        </View>
        <View style={styles.buttonRow}>
          <Button text="0" onPress={() => handleButtonPress('0')} />
          <Button text="." onPress={() => handleButtonPress('.')} />
          <Button text="=" onPress={handleCalculate} />
          <Button text="+" onPress={() => handleButtonPress('+')} />
        </View>
        <Button text="C" onPress={handleClear} style={styles.clearButton} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  calculator: {
    flex: 1,
  },
  buttons: {
    flex: 5,
    backgroundColor: 'white',
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
  },
  clearButton: {
    backgroundColor: '#FF4C4C',
  },
});

export default Calculator;