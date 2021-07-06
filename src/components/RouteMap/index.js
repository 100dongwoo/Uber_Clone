import React from 'react';
import {Image, FlatList, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import cars from '../../assets/data/cars';
import MapViewDirections from 'react-native-maps-directions';
import {Google_API, Google_API_tEST} from '../../secret/secret';

const RouteMap = () => {
  const origin = {
    latitude: 28.450627,
    longitude: -16.269045,
  };
  const destination = {
    latitude: 28.450127,
    longitude: -16.263045,
  };
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 28.450627,
        longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={Google_API}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker coordinate={origin} title={'Origin'} />
      <Marker coordinate={destination} title={'Destination'} />
    </MapView>
  );
};

export default RouteMap;
