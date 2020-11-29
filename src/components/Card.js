import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import colors from '../config/colors';
import IconApp from './Icon';

export default function Card({onPress, title, subTitle, time}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <IconApp name="user" size={40} style={styles.icon} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Fajar Nur Rohman</Text>
          <Text style={styles.subTitle}>6787667687</Text>
        </View>
        <View style={styles.time}>
          <Text style={styles.subTitle}>12/03/9999</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light,
    marginHorizontal: 5,
    borderRadius: 50,
    overflow: 'hidden',
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: colors.dark,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
  },
  icon: {
    margin: 15,
  },
  detailsContainer: {
    marginLeft: 5,
  },
  title: {
    marginBottom: 7,
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.dark,
  },
  time: {
    marginStart: 60,
  },
});
