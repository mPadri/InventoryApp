import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  HeaderDataBarang,
  HeaderBarangKeluar,
  HeaderBarangMasuk,
  HeaderEdit,
} from '../assets/images';

const Header = ({title}) => {
  const renderHeader = () => {
    switch (title) {
      case 'data-barang':
        return (
          <Image
            resizeMode="cover"
            source={HeaderDataBarang}
            style={styles.img}
          />
        );
      case 'barang-masuk':
        return (
          <Image
            resizeMode="cover"
            source={HeaderBarangMasuk}
            style={styles.img}
          />
        );
      case 'barang-keluar':
        return (
          <Image
            resizeMode="cover"
            source={HeaderBarangKeluar}
            style={styles.img}
          />
        );
      case 'edit':
        return (
          <Image resizeMode="cover" source={HeaderEdit} style={styles.img} />
        );

      default:
        return <View />;
    }
  };
  return <View style={styles.wrapImg}>{renderHeader()}</View>;
};

export default Header;
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 110,
    borderRadius: 8,
  },
  wrapImg: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#091686',
  },
});
