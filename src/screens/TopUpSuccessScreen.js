import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import AppButton from '../components/Button';
import Screen from '../components/Screen';
import AppTextInput from '../components/TextInput';
import colors from '../config/colors';
import fonts from '../config/fonts';

export default function TopUpSuccessScreen() {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/success.png')}
        />
        <View style={styles.detailNominal}>
          <Text style={styles.title}>Top Up Berhasil</Text>
          <Text style={styles.nominal}>Rp.100.000</Text>
        </View>
        <View style={styles.detailTopUp}>
          <Text style={styles.text}>1 November 2020</Text>
          <Text style={styles.text}>Bank Central Asia</Text>
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
  image: {
    width: 330,
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
