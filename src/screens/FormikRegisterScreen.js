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
import * as Yup from 'yup';
import Form from '../components/Forms/Form';
import FormField from '../components/Forms/FormField';
import SubmitButton from '../components/Forms/SubmitButton';
import Screen from '../components/Screen';
import defaultStyle from '../config/styles';
import routes from '../navigations/routes';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('nama tidak boleh kosong').label('Nama'),
  phone: Yup.string()
    .required('No. Handphone tidak boleh kosong')
    .label('phone'),
  email: Yup.string()
    .required('email tidak boleh kosong')
    .email('email harus valid email')
    .label('email'),
  password: Yup.string()
    .required('password tidak boleh kosong')
    .min(8, 'password minimal 8 karakter')
    .label('password'),
});

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
        <Form
          initialValues={{name: '', phone: '', email: '', password: ''}}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <FormField
            autoCorrect={false}
            icon="account"
            name="name"
            placeholder="Nama"
          />
          <FormField
            autoCorrect={false}
            icon="phone"
            name="phone"
            placeholder="No. Handphone"
            keyboardType="phone-pad"
            maxLength={14}
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            placeholder="Email"
            keyboardType="email-address"
            name="email"
            textContentType="emailAddress"
          />
          <FormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            placeholder="Password"
            name="password"
            secureTextEntry
          />
          <View style={styles.buttonContainer}>
            <SubmitButton title="Let’s Get Started" />
          </View>
        </Form>
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
