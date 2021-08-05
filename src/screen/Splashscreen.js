import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {LogoSplash} from '../assets/images';

const Splashscreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('login');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={LogoSplash} style={styles.img} />
    </View>
  );
};

export default Splashscreen;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  img: {
    width: 229,
    height: 194,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
