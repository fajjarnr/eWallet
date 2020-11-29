import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import Button from '../components/Button';
import colors from '../config/colors';
import fonts from '../config/fonts';
import routes from '../navigations/routes';

export default function WelcomeScreen({navigation}) {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground style={styles.background}>
        <View style={styles.container}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo.png')}
          />
          <View style={styles.logoContainer}>
            <Text style={styles.welcome}>Wellcome to</Text>
            <Text style={styles.logoText}>eWallet</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Button
              title="Login"
              color="primary"
              backgroundColor="white"
              width={200}
              onPress={() => navigation.navigate(routes.LOGIN)}
            />
            <View style={styles.signUpContainer}>
              <Text style={{color: 'white'}}>Don’t have an account?</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(routes.REGISTER)}>
                <Text style={styles.signUpText}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  signUpText: {
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: fonts.bold,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 220,
    marginTop: 30,
  },
  logoText: {
    color: colors.white,
    fontSize: 48,
    fontFamily: fonts.regular,
  },
  welcome: {
    color: colors.light,
    fontSize: 28,
    fontFamily: fonts.regular,
  },
});
