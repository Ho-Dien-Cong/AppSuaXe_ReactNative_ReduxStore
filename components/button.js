import React from 'react';
import { Button, StyleSheet, Touchable } from 'react-native';
const btton = props => {
  const { text, onPress, icon, style } = props;
  return ( 
      <Touchable onPress={onPress}  style={styles.container}>
        <Text >{text}</Text>
      </Touchable> 
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center', 
  }
})
export default btton;
