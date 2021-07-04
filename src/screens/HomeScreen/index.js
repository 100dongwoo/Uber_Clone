import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearchComponent';
const HomeScreen = () => {
  return (
    <ScrollView>
      <HomeMap />
      {/*  Covid message*/}
      <CovidMessage />
      {/*  bottom component*/}
      <HomeSearch />
    </ScrollView>
  );
};

export default HomeScreen;
