import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home';
import Splashscreen from '../screen/Splashscreen';
import Login from '../screen/Login';
import BarangKeluar from '../screen/BarangKeluar';
import BarangMasuk from '../screen/BarangMasuk';
import DataBarang from '../screen/DataBarang';
import EditBarang from '../screen/EditBarang';

const Stack = createStackNavigator();

function Navigations() {
  return (
    <Stack.Navigator initialRouteName="splashscreen">
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="barang-keluar"
        component={BarangKeluar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="barang-masuk"
        component={BarangMasuk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="data-barang"
        component={DataBarang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="edit-barang"
        component={EditBarang}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="splashscreen"
        component={Splashscreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default Navigations;
