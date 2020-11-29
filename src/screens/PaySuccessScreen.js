import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AppButton from '../components/Button';
import Screen from '../components/Screen';
import colors from '../config/colors';
import fonts from '../config/fonts';

export default function PaySuccessScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.success}
          source={require('../../assets/images/social.png')}
        />
        <View style={styles.infoTransfer}>
          <Text style={styles.title}>Pembayaran Berhasil</Text>
          <Text style={styles.nominal}>Rp.100.000</Text>
        </View>
        <View style={styles.detailTransfer}>
          <Text style={styles.text}>1 November 2020</Text>
          <Text style={styles.text}>Penerima :</Text>
          <Text style={styles.text}>Fajar Nur Rohman</Text>
          <Text style={styles.text}>08123213128</Text>
        </View>
        <AppButton title="Selesai" width="80%" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  success: {
    width: 275,
    height: 275,
  },
  infoTransfer: {
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
  detailTransfer: {
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
