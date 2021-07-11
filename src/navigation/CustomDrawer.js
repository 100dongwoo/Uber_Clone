import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Text, View} from 'react-native';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <Text>CustomDrasdawer</Text>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
