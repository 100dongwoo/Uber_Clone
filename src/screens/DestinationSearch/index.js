import React, {useEffect, useState} from 'react';
import {Text, TextInput, View, SafeAreaView} from 'react-native';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {Google_API, Google_API_tEST} from '../../secret/secret';
import PlaceRow from './PlaceRow';

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);
  useEffect(() => {
    // console.warn('useEffect is Called');
    if (originPlace && destinationPlace) {
      console.warn('Redirect to results');
    }
  }, [originPlace, destinationPlace]);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
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
