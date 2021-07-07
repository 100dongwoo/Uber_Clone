import React from 'react';
import {Pressable, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import UberTypeRow from '../UberTypeRow/UberTypeRow';
import types from '../../assets/data/types';
const UserTypes = () => {
  const confirm = () => {
    console.warn('confirm');
  };
  return (
    <View>
      {types.map(type => (
        <UberTypeRow type={type} key={type.id} />
      ))}
      {/*<UberTypeRow />*/}
      <Pressable
        onPress={confirm}
        style={{
          padding: 10,
          backgroundColor: 'black',
          // padding: 10,
          margin: 10,
          alignItems: 'center',
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>Confirm Uber</Text>
      </Pressable>
    </View>
  );
};

export default UserTypes;
