import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log(username);
    console.log(password);
    navigation.replace('home');
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Login</Text>
      </View>

      <View style={styles.wrapInput}>
        <View>
          <Text>Username</Text>
          <TextInput
            value={username}
            onChangeText={val => setUsername(val)}
            placeholder="Type youre username"
            style={styles.input}
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            value={password}
            onChangeText={val => setPassword(val)}
            placeholder="Type youre password"
            secureTextEntry
            style={styles.input}
          />
        </View>
        <View style={styles.wrapBtn}>
          <TouchableOpacity style={styles.btn} onPress={() => onSubmit()}>
            <Text style={styles.textBtn}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  wrapInput: {
    marginVertical: 48,
    padding: 16,
  },
  input: {
    marginVertical: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
  },
  btn: {
    backgroundColor: '#5867E8',
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    width: '100%',
    height: 40,
    marginTop: 16,
    justifyContent: 'center',
  },
  wrapBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    textAlign: 'center',
    alignSelf: 'center',
  },
});
