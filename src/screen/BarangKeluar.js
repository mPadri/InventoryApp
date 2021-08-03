import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../components/Header';
import DropDownPicker from 'react-native-dropdown-picker';

const BarangKeluar = ({navigation}) => {
  const [nama, setNama] = useState('');
  const [value, setValue] = useState(0);

  const [kode, setKode] = useState(null);
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  const plus = () => {
    let newValue = value + 1;
    setValue(newValue);
  };
  const minus = () => {
    let newValue = value - 1;
    if (newValue >= 0) {
      setValue(newValue);
    }
  };

  const filterData = value => {
    console.log('filter');
    setTimeout(() => {
      setNama(value);
    }, 1000);
  };

  const onSubmit = () => {
    console.log(kode);
    console.log(value);
    console.log(nama);
  };

  return (
    <View style={styles.container}>
      <Header title="barang-keluar" />
      <View style={styles.wrapInput}>
        <DropDownPicker
          open={open}
          value={kode}
          items={items}
          setOpen={setOpen}
          setValue={setKode}
          setItems={setItems}
          onChangeValue={value => {
            filterData(value);
          }}
        />

        <TextInput
          value={nama}
          placeholder="Nama Barang"
          style={styles.input}
        />
      </View>
      <View style={styles.wrap}>
        <View style={styles.wrapCount}>
          <TouchableOpacity style={styles.wrapBtnCount} onPress={() => plus()}>
            <Text style={styles.icon}>+</Text>
          </TouchableOpacity>
          <Text style={styles.count}>{value}</Text>
          <TouchableOpacity style={styles.wrapBtnCount} onPress={() => minus()}>
            <Text style={styles.icon}>-</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
          <Text style={styles.textBtn}>Simpan</Text>
        </TouchableOpacity>
      </View>
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
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapCount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  count: {
    fontSize: 24,
    marginHorizontal: 24,
    fontWeight: 'bold',
  },
  icon: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  wrapBtnCount: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 100,
    elevation: 4,
  },
  btn: {
    width: 89,
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#57F31F',
  },
  textBtn: {
    textAlign: 'center',
  },
});
