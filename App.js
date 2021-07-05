import React from 'react';
import type {Node} from 'react';
import {StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';
const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <SearchResults />
    </>
  );
};

export default App;
