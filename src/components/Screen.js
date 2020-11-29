import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

export default function Screen({children, style}) {
  return (
    <>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <SafeAreaView style={[styles.screen, style]}>
        <View style={style}>{children}</View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
