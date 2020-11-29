import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/Button';
import Screen from '../components/Screen';
import AppTextInput from '../components/TextInput';
import routes from '../navigations/routes';

export default function TopUpScreen({navigation}) {
  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/images/grow.png')}
        />
        <View style={styles.topUp}>
          <AppTextInput
            placeholder="Nominal Top Up"
            width="80%"
            keyboardType="numeric"
          />
        </View>
        <AppButton
          title="Submit"
          width="80%"
          onPress={() => navigation.navigate(routes.TOPUPSUCCESS)}
        />
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
  topUp: {
    marginVertical: 20,
  },
});
