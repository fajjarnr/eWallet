import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Yup from 'yup';
import AuthContext from '../auth/context';
import Form from '../components/Forms/Form';
import FormField from '../components/Forms/FormField';
import SubmitButton from '../components/Forms/SubmitButton';
import Screen from '../components/Screen';
import defaultStyle from '../config/styles';
import routes from '../navigations/routes';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('email tidak boleh kosong')
    .email('email harus valid email')
    .label('email'),
  password: Yup.string()
    .required('password tidak boleh kosong')
    .min(8, 'password minimal 8 karakter')
    .label('password'),
});

export default function LoginScreen({navigation}) {
  const {signIn} = React.useContext(AuthContext);

  return (
    <Screen style={styles.container}>
      <View style={styles.header}>
        <Text animation="bounceIn" style={styles.welcome}>
          Welcome Back!
        </Text>
        <Image
          animation="bounceIn"
          style={styles.loginImage}
          source={require('../../assets/images/login.png')}
        />
      </View>
      <KeyboardAvoidingView
        animation="fadeInUpBig"
        behavior="padding"
        style={styles.footer}>
        <Form
          initialValues={{email: '', password: ''}}
          onSubmit={signIn}
          validationSchema={validationSchema}>
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
            <SubmitButton title="Login" />
          </View>
        </Form>
        <View style={styles.signUpContainer}>
          <Text>Don’t have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.REGISTER)}>
            <Text style={styles.signUpText}> Sign Up</Text>
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
    alignItems: 'center',
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
    flex: 2,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: defaultStyle.colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  loginImage: {
    width: 324,
    height: 228,
  },
  welcome: {
    fontSize: 20,
    fontFamily: defaultStyle.fonts.bold,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  signUpText: {
    color: defaultStyle.colors.primary,
    fontFamily: defaultStyle.fonts.bold,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
});
