import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import colors from '../config/colors';
import fonts from '../config/fonts';

export default function AppButton({
  title,
  onPress,
  backgroundColor = 'primary',
  color = 'white',
  width = '100%',
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: colors[backgroundColor],
          width: width,
        },
      ]}>
      <Text style={[styles.text, {color: colors[color]}]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 23,
    height: 46,
    justifyContent: 'center',
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: fonts.regular,
  },
});
