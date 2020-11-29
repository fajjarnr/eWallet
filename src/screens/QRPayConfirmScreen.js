import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AppButton from '../components/Button';
import Screen from '../components/Screen';
import AppTextInput from '../components/TextInput';
import colors from '../config/colors';
import fonts from '../config/fonts';

export default function QRPayConfirmScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/social.png')}
        />
        <View style={styles.detailNominal}>
          <AppTextInput width="80%" />
        </View>
        <View style={styles.detailTopUp}>
          <Text style={styles.text}>Pembayaran Kepada</Text>
          <Text style={styles.text}>Fajar Nur Rohman</Text>
          <Text style={styles.text}>Jln. Raya, Pemalang</Text>
        </View>
        <AppButton title="Sumbit" width="80%" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 275,
    height: 275,
  },
  detailNominal: {
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 30,
    marginVertical: 15,
  },
  nominal: {
    fontFamily: fonts.bold,
    fontSize: 24,
  },
  detailTopUp: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: '80%',
    marginVertical: 15,
    padding: 15,
  },
  text: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 20,
  },
});
