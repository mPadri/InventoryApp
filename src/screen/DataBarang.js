import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import {Add} from '../assets/images';

const DataBarang = ({navigation}) => {
  const goToBarangMasuk = () => navigation.navigate('barang-masuk');
  const goToEdit = () => {
    navigation.navigate('edit-barang');
  };

  const renderCard = () => {
    return (
      <View style={{marginVertical: 16}}>
        <View style={styles.card}>
          <View style={styles.wrapHeader}>
            <Text>002</Text>
            <View style={styles.wrapBtn}>
              <TouchableOpacity
                style={[styles.btn, styles.btnColorEdit]}
                onPress={() => goToEdit()}>
                <Text>Edit</Text>
              </TouchableOpacity>
              <View style={{width: 16}} />
              <TouchableOpacity style={[styles.btn, styles.btnColorDelete]}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginTop: 8}}>
            <Text style={styles.text}>Vanilla Magica</Text>
            <Text style={styles.text}>30 pcs</Text>
            <Text style={styles.text}>Gudang A</Text>
            <Text style={styles.text}>Keterangan :</Text>
            <Text style={styles.text}>Baru</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderFoaltingButton = () => {
    return (
      <TouchableOpacity
        style={styles.wrapAddBtn}
        onPress={() => goToBarangMasuk()}>
        <Image source={Add} style={styles.addBtn} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <View>
          <Header title="data-barang" />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3]}
          keyExtractor={(_, idx) => idx.toString()}
          renderItem={() => renderCard()}
        />
        {renderFoaltingButton()}
      </View>
    </>
  );
};

export default DataBarang;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    borderRadius: 8,
    elevation: 3,
    padding: 16,
    backgroundColor: '#fff',
  },
  wrapHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    padding: 8,
    borderRadius: 5,
  },
  btnColorEdit: {
    backgroundColor: '#36ED27',
  },
  btnColorDelete: {
    backgroundColor: '#CD0909',
  },
  text: {
    marginVertical: 6,
  },
  addBtn: {
    width: 70,
    height: 70,
  },
  wrapAddBtn: {
    backgroundColor: '#fff',
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 24,
    right: 16,
    borderRadius: 100,
    elevation: 2,
  },
});
