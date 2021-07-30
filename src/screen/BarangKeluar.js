import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const BarangKeluar = () => {
  return (
    <View style={styles.container}>
      <Header title="barang-keluar" />
    </View>
  );
};

export default BarangKeluar;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
