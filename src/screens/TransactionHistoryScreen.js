import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Transaction from '../components/Transaction';
import data from '../json/transaction.json';

// const data = [
//   {id: 1, title: 'Fajar', subTitle: '0891283', date: '1 Desember'},
//   {id: 2, title: 'asds', subTitle: '0891283', date: '1 Desember'},
//   {id: 3, title: 'bakdad', subTitle: '0891283', date: '1 Desember'},
//   {id: 4, title: 'asbdas', subTitle: '0891283', date: '1 Desember'},
//   {id: 5, title: 'hua', subTitle: '0891283', date: '1 Desember'},
//   {id: 6, title: 'Fajar', subTitle: '0891283', date: '1 Desember'},
//   {id: 7, title: 'asds', subTitle: '0891283', date: '1 Desember'},
//   {id: 8, title: 'bakdad', subTitle: '0891283', date: '1 Desember'},
//   {id: 9, title: 'asbdas', subTitle: '0891283', date: '1 Desember'},
//   {id: 10, title: 'hua', subTitle: '0891283', date: '1 Desember'},
// ];

export default function TransactionHistoryScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={data.id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <Transaction
            title={item.title}
            subTitle={item.subTitle}
            date={item.date}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 4,
    alignItems: 'center',
  },
});
