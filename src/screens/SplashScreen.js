import React, {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import colors from '../config/colors';
import fonts from '../config/fonts';
import routes from '../navigations/routes';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(routes.WELCOME);
    }, 3000);
  }, [navigation]);

  return (
    <>
      <StatusBar hidden={true} />
      <ImageBackground style={styles.background}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <Text style={styles.logoText}>eWallet</Text>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 120,
    width: 120,
  },
  logoText: {
    color: colors.white,
    fontFamily: fonts.light,
    fontSize: 50,
    marginTop: 20,
  },
});
