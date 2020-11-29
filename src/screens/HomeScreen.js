import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Transaction from '../components/Transaction';
import colors from '../config/colors';
import fonts from '../config/fonts';
import data from '../json/transaction.json';
import routes from '../navigations/routes';

export default function HomeScreen({navigation}) {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={styles.imageProfile}
            />
            <View>
              <Text>Fajar Nur Rohman</Text>
            </View>
          </View>
        </View>
        <View style={styles.menuPayment}>
          <View style={styles.saldoContainer}>
            <View style={styles.saldo}>
              <Text style={styles.saldoText}>Saldo </Text>
              <Text style={styles.nominalSaldo}>Rp.10.000.000</Text>
            </View>
            <View>
              <Image
                style={styles.logo}
                source={require('../../assets/images/logo.png')}
              />
            </View>
          </View>
          <View style={styles.paymentMethod}>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.SCANQR)}>
              <MaterialCommunityIcons
                name="qrcode-scan"
                color={colors.white}
                size={30}
              />
              <Text style={styles.label}>Bayar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(routes.TOPUP)}>
              <Ionicons name="wallet" color={colors.white} size={30} />
              <Text style={styles.label}>Top Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate(routes.TRANSFER)}>
              <AntDesign name="export" color={colors.white} size={30} />
              <Text style={styles.label}>Transfer</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <MaterialCommunityIcons name="credit-card" color="grey" size={30} />
          <View>
            <Text>Tambahkan Metode Pembayaran</Text>
            <Text>Hubungkan Kartu debit dan sumber dana lain</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text>Riwayat Transaksi</Text>
          <FlatList
            data={data}
            keyExtractor={data.id}
            renderItem={({item}) => (
              <Transaction
                title={item.nama}
                subTitle={item.subTitle}
                date={item.date}
              />
            )}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    paddingTop: 24,
  },
  menuPayment: {
    flex: 1,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 15,
  },
  content: {
    flex: 1,
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingBottom: 5,
    paddingTop: 20,
    top: -20,
    justifyContent: 'space-around',
  },
  info: {
    backgroundColor: colors.white,
    paddingHorizontal: 15,
    paddingTop: 20,
    top: -20,
    zIndex: 4,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userUtility: {
    flexDirection: 'row',
  },
  saldo: {
    alignItems: 'flex-start',
  },
  logo: {
    width: 40,
    height: 40,
  },
  saldoText: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 14,
  },
  nominalSaldo: {
    color: colors.white,
    fontFamily: fonts.bold,
    fontSize: 18,
  },
  saldoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentMethod: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  imageProfile: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginRight: 150,
  },
  label: {
    color: colors.white,
  },
});
