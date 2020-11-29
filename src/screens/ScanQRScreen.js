import React, {useState} from 'react';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

export default function ScanQRScreen() {
  const onSuccess = (e) => {
    console.log(e.data);
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      // flashMode={RNCamera.Constants.FlashMode.torch}
      showMarker={true}
    />
  );
}
