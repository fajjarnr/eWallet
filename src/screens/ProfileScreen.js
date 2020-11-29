import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Button from '../components/Button';
import colors from '../config/colors';
import fonts from '../config/fonts';
import AuthContext from '../auth/context';

export default function ProfileScreen() {
  const {signOut} = React.useContext(AuthContext);

  return (
    <>
      <View style={styles.header}>
        <Image
          style={styles.imageProfile}
          source={require('../../assets/images/profile.png')}
        />
        <Text style={styles.nameProfile}>FAJAR NUR ROHMAN</Text>
        <Text style={styles.phoneProfile}>071823821</Text>
      </View>
      <View style={styles.footer}>
        <Button
          title="Ubah Profile"
          width={300}
          onPress={() => alert('click')}
        />
        <Button title="Ganti Password" width={300} style={styles.text} />
        <Button title="Logout" width={300} onPress={signOut} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: colors.primary,
    justifyContent: 'center',
  },
  footer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginVertical: 10,
  },
  imageProfile: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  nameProfile: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 24,
    marginVertical: 10,
  },
  phoneProfile: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 18,
  },
});
