import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../config/colors';
import fonts from '../config/fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Transaction({title, subTitle, date}) {
  return (
    <View style={styles.container}>
      <FontAwesome name="exchange" color={colors.dark} size={20} />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text>{subTitle}</Text>
      </View>
      <Text>{date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 4,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
    padding: 15,
    width: '100%',
    shadowColor: colors.black,
    shadowOpacity: 1,
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: 16,
  },
});
