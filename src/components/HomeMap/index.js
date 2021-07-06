import React from 'react';
import {Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const HomeMap = () => {
  return (
    <MapView
      style={{height: '100%', width: '100%'}}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default HomeMap;
