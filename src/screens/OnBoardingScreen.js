import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import colors from '../config/colors';

const Dots = ({selected}) => {
  return (
    <View
      style={{
        width: selected ? 20 : 6,
        height: 7,
        borderRadius: selected ? 20 : 7,
        marginHorizontal: 3,
        backgroundColor: selected ? colors.primary : colors.light,
      }}
    />
  );
};

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 20}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);

export default function OnBoardingScreen({navigation}) {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <Onboarding
        bottomBarHighlight={false}
        bottomBarHeight={100}
        DotComponent={Dots}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace('Login')}
        onDone={() => navigation.navigate('Login')}
        pages={[
          {
            backgroundColor: '#EDF1F9',
            image: (
              <Image
                source={require('../../assets/images/welcome.png')}
                style={styles.image}
              />
            ),
            title: 'Welcome to E-Wallet',
            subtitle: 'Manage all your crypto assets! It’s simple and easy!',
          },
          {
            backgroundColor: '#EDF1F9',
            image: (
              <Image
                source={require('../../assets/images/send.png')}
                style={styles.image}
              />
            ),
            title: 'Receive and Send Money to Friends!',
            subtitle:
              'Send money to your friends with a personal message attached.',
          },
          {
            backgroundColor: '#EDF1F9',
            image: (
              <Image
                source={require('../../assets/images/safe.png')}
                style={styles.image}
              />
            ),
            title: ' Your Safety is Our Top Priority',
            subtitle:
              'Our top-notch security features will keep you completely safe.',
          },
        ]}
      />
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 325,
    height: 250,
  },
});
