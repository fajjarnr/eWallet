import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AuthContext from '../auth/context';
import Button from '../components/Button';
import Screen from '../components/Screen';
import TextInput from '../components/TextInput';
import defaultStyle from '../config/styles';
import routes from '../navigations/routes';

export default function LoginScreen({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          placeholder="Email"
          keyboardType="email-address"
          name="email"
          textContentType="emailAddress"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          placeholder="Password"
          name="password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Login"
            width={210}
            onPress={() => signIn({username, password})}
          />
        </View>
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
