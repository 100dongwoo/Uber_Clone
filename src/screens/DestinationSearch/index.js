import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, SafeAreaView} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Google_API, Google_API_tEST} from '../../secret/secret';
import PlaceRow from './PlaceRow';
import {useNavigation} from '@react-navigation/native';

const DestinationSearch = () => {
  const navigation = useNavigation();
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  const homePlace = {
    description: 'Home',
    geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
  };
  const workPlace = {
    description: 'Work',
    geometry: {location: {lat: 48.8496818, lng: 2.2940881}},
  };
  useEffect(() => {
    // console.warn('useEffect is Called');
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults');
    }
  }, [originPlace, destinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          predefinedPlaces={[homePlace, workPlace]}
          enablePoweredByContainer={false}
          suppressDefaultStyles
          placeholder="Where from"
          currentLocation={true}
          currentLocationLabel="Current location"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details);
            setOriginPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: Google_API,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
        />
        <GooglePlacesAutocomplete
          enablePoweredByContainer={false}
          placeholder="Where to"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            // console.log(data, details);
            setDestinationPlace({data, details});
          }}
          styles={{
            textInput: styles.textInput,
            container: {
              ...styles.autocompleteContainer,
              top: 55,
            },
            separator: styles.separator,
          }}
          fetchDetails
          query={{
            key: Google_API,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        {/*  Circle near From Origin Input */}
        <View style={styles.circle} />
        {/*  Line Between dots */}
        <View style={styles.line} />
        {/*  Circle near destination Input */}
        <View style={styles.square} />

        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
