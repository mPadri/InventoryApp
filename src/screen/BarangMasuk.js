import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const BarangMasuk = () => {
  return (
    <View style={styles.container}>
      <Header title="barang-masuk" />
    </View>
  );
};

export default BarangMasuk;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
