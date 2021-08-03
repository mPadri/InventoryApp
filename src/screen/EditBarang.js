import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';

const EditBarang = ({navigation}) => {
  const [kode, setKode] = useState('');
  const [nama, setNama] = useState('');
  const [qty, setQty] = useState('');
  const [ket, setKet] = useState('');

  const goBack = () => navigation.goBack();

  const onSubmit = () => {
    const data = {
      kode,
      nama,
      qty,
      ket,
    };
    if (!kode && !nama && !qty && !ket) {
      alert('Harap Lengkapi Data');
    } else {
      console.log(data);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Header title="edit" />
      <View style={styles.wrapInput}>
        <TextInput
          value={kode}
          onChangeText={val => setKode(val)}
          placeholder="Kode Barang"
          style={styles.input}
        />
        <TextInput
          value={nama}
          onChangeText={val => setNama(val)}
          placeholder="Nama Barang"
          style={styles.input}
        />
        <TextInput
          value={qty}
          onChangeText={val => setQty(val)}
          placeholder="Qty"
          style={styles.input}
          keyboardType="number-pad"
        />
        <TextInput
          value={ket}
          onChangeText={val => setKet(val)}
          placeholder="Keterangan"
          style={styles.input}
        />
      </View>
      <View style={styles.wrapBtn}>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#DD404A'}]}
          onPress={() => goBack()}>
          <Text style={styles.textBtn}>Kembali</Text>
        </TouchableOpacity>
        <View style={{width: 32}} />
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: '#57F31F'}]}
          onPress={() => onSubmit()}>
          <Text style={styles.textBtn}>Simpan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default EditBarang;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  wrapInput: {
    marginVertical: 24,
  },
  input: {
    marginVertical: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
  },
  wrapBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 89,
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 4,
  },
  textBtn: {
    textAlign: 'center',
  },
});
