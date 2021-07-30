import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const EditBarang = () => {
  return (
    <View style={styles.container}>
      <Header title="edit" />
    </View>
  );
};

export default EditBarang;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});
