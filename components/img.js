import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
const Img = props => {
  const { url, style } = props;
  return <Image style={style ? style : styles.img} src={url} />;
};
const styles = StyleSheet.create({
  img: {
    
  },
});
export default Img
