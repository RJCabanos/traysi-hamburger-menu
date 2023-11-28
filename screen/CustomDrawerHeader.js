// CustomDrawerHeader.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const CustomDrawerHeader = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./logo.png')} // Assuming logo.png is in the same directory as CustomDrawerHeader.js
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  image: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
  },
});

export default CustomDrawerHeader;
