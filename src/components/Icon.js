import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Icon({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <AntDesign name="qrcode" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
