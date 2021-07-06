import React from 'react';
import {Text, View, ScrollView, Dimensions} from 'react-native';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearchComponent';
import RouteMap from '../../components/RouteMap';
const HomeScreen = () => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <RouteMap />
        {/*  Covid message*/}
        <CovidMessage />
        {/*  bottom component*/}
        <HomeSearch />
      </View>
    </View>
  );
};

export default HomeScreen;
