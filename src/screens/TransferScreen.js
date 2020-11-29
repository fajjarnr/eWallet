import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppButton from '../components/Button';
import Screen from '../components/Screen';
import AppTextInput from '../components/TextInput';
import fonts from '../config/fonts';
import routes from '../navigations/routes';

export default function TransferScreen({navigation}) {
  const [isTrue, setIsTrue] = useState(false);

  const handleCheck = () => {
    setIsTrue(true);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Image
          style={styles.transferImage}
          source={require('../../assets/images/send.png')}
        />
        <View style={styles.tranferReciver}>
          <AppTextInput
            placeholder="Nominal Transfer"
            width="80%"
            keyboardType="numeric"
          />
          <AppTextInput
            placeholder="No Handphone Penerima"
            width="80%"
            keyboardType="phone-pad"
            maxLength={14}
          />
        </View>
        <AppButton title="Periksa Nomor" width="80%" onPress={handleCheck} />
        <View style={styles.transferCheck}>
          <Text style={styles.text}>Penerima :</Text>
          <Text style={styles.text}>Fajar Nur Rohman</Text>
        </View>
        <AppButton
          title="Transfer"
          width="80%"
          onPress={() => navigation.navigate(routes.TRANSFERSUCCESS)}
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
  transferImage: {
    width: 275,
    height: 275,
  },
  tranferReciver: {
    marginVertical: 15,
  },
  transferCheck: {
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    fontFamily: fonts.regular,
    fontSize: 24,
  },
});
