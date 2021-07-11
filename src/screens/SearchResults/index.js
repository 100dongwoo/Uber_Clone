import React from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap';
import RouteMap from '../../components/RouteMap';
import DestinationSearch from '../DestinationSearch';
import UserTypes from '../../components/UserTypes';
import {useRoute} from '@react-navigation/native';

const SearchResults = props => {
  const route = useRoute();
  const {originPlace, destinationPlace} = route.params;

  return (
    <View style={{display: 'flex', justifyContent: 'space-between'}}>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap origin={originPlace} destination={destinationPlace} />
      </View>
      <View style={{height: 400}}>
        <UserTypes />
      </View>
      {/*<DestinationSearch />*/}
    </View>
  );
};

export default SearchResults;
