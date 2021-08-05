import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  HeaderHome,
  LogoBarangKeluar,
  LogoBarangMasuk,
  LogoDataBarang,
  Logout,
} from '../assets/images';

const Home = ({navigation}) => {
  const goToDataBarang = () => navigation.navigate('data-barang');
  const goToBarangMasuk = () => navigation.navigate('barang-masuk');
  const goToBarangKeluar = () => navigation.navigate('barang-keluar');

  const doLogout = () => navigation.replace('login');

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Home</Text>
      </View>
      <View style={styles.wrapImg}>
        <Image resizeMode="cover" source={HeaderHome} style={styles.img} />
      </View>
      <View style={{marginTop: 16}}>
        <View style={styles.wrapMenu}>
          <TouchableOpacity onPress={() => goToDataBarang()}>
            <Image source={LogoDataBarang} style={styles.menuImg} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => goToBarangMasuk()}>
            <Image source={LogoBarangMasuk} style={styles.menuImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.wrapMenu}>
          <TouchableOpacity onPress={() => goToBarangKeluar()}>
            <Image source={LogoBarangKeluar} style={styles.menuImg} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => doLogout()}>
            <Image source={Logout} style={styles.menuImg} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: 110,
    borderRadius: 8,
  },
  wrapImg: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 16,
  },
  wrapMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 18,
  },
  menuImg: {
    width: 98,
    height: 105,
  },
});
