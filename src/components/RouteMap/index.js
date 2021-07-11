import React from 'react';
import {Image, FlatList, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import cars from '../../assets/data/cars';
import MapViewDirections from 'react-native-maps-directions';
import {Google_API} from '../../secret/secret';

const RouteMap = () => {
  const getImage = type => {
    if (type === 'UberX') {
      return require('../../assets/Images/top-UberX.png');
    }
    if (type === 'Comfort') {
      return require('../../assets/Images/top-Comfort.png');
    }
    return require('../../assets/Images/top-UberXL.png');
  };
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
      {cars.map(car => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default RouteMap;
