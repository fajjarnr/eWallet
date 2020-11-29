import React, {useState} from 'react';
import axios from 'axios';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Screen from '../components/Screen';
import defaultStyle from '../config/styles';
import routes from '../navigations/routes';
import TextInput from '../components/TextInput';
import AppButton from '../components/Button';

export default function RegisterScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');
  const [nomorHandphone, setNomorHandphone] = useState('');

  const handleSubmit = async () => {
    console.log(email + '' + password + '' + nama + '' + nomorHandphone);
    axios
      .post(
        'https://emoneydti.basicteknologi.co.id/index.php/api/users/registrasi',
        {
          email: email,
          password: password,
          nama: nama,
          nomor_handphone: nomorHandphone,
        },
      )
      .then(function (response) {
        if (response.data.status == 'true') {
          navigation.navigate(routes.LOGIN);
        } else {
          ToastAndroid.show(response.data.msg, ToastAndroid.SHORT);
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.createAccount}>Create Account</Text>
        <Image
          style={styles.registerImage}
          source={require('../../assets/images/office.png')}
        />
      </View>
      <KeyboardAvoidingView
        animation="fadeInUpBig"
        behavior="padding"
        style={styles.footer}>
        <TextInput
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Nama"
          value={nama}
          onChangeText={(text) => setNama(text)}
        />
        <TextInput
          autoCorrect={false}
          icon="phone"
          name="phone"
          placeholder="No. Handphone"
          keyboardType="phone-pad"
          maxLength={14}
          value={nomorHandphone}
          onChangeText={(text) => setNomorHandphone(text)}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          name="email"
          textContentType="emailAddress"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          name="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <View style={styles.buttonContainer}>
          <AppButton
            title="Let’s Get Started"
            width={210}
            onPress={handleSubmit}
          />
        </View>
        <View style={styles.registerContainer}>
          <Text>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(routes.LOGIN)}>
            <Text style={styles.registerText}> Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultStyle.colors.grey,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  header: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 50,
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: defaultStyle.colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  registerImage: {
    width: 308,
    height: 171,
  },
  createAccount: {
    fontSize: 20,
    fontFamily: defaultStyle.fonts.bold,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  registerText: {
    color: defaultStyle.colors.primary,
    fontWeight: 'bold',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
});
