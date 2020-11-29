import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import axios from 'axios';
import * as React from 'react';
import {ToastAndroid} from 'react-native';
import AuthContext from './src/auth/context';
import AppNavigator from './src/navigations/AppNavigator';
import AuthNavigator from './src/navigations/AuthNavigator';

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        axios
          .post(
            'https://emoneydti.basicteknologi.co.id/index.php/api/users/login',
            {
              email: data.email,
              password: data.password,
            },
          )
          .then(async (response) => {
            if (response.data.status == 'true') {
              try {
                await AsyncStorage.setItem(
                  'userToken',
                  response.data.data.id_user,
                );
                await AsyncStorage.setItem(
                  'email',
                  response.data.data.email_user,
                );
                await AsyncStorage.setItem(
                  'nama',
                  response.data.data.nama_user,
                );
                await AsyncStorage.setItem(
                  'nomorHandphone',
                  response.data.data.nomor_handphone,
                );
              } catch (error) {
                console.log(error);
              }
            } else {
              ToastAndroid.show(response.data.msg, ToastAndroid.SHORT);
            }
          })
          .catch(function (error) {
            console.log(error);
          });

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async (data) => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {state.userToken !== null ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
