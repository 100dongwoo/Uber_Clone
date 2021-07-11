import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Text, View, Pressable} from 'react-native';

const CustomDrawer = props => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{backgroundColor: 'black', padding: 15}}>
        {/*  User ROw*/}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: '#cacaca',
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 10,
            }}
          />
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 24,
              }}>
              100Dongwoo
            </Text>
            <Text
              style={{
                color: 'lightgrey',
              }}>
              5.00 *
            </Text>
          </View>
        </View>
        {/*  Messages Row*/}
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderTopColor: '#919191',
            borderBottomColor: '#919191',
            paddingVertical: 5,
            marginVertical: 10,
          }}>
          <Pressable
            onPress={() => {
              console.warn('1');
            }}>
            <Text style={{color: '#dddddd', paddingVertical: 5}}>Messages</Text>
          </Pressable>
        </View>
        {/*  Do more with your account*/}
        <Pressable
          onPress={() => {
            console.warn('1');
          }}>
          <Text style={{color: '#dddddd', paddingVertical: 5}}>
            Do more with your account
          </Text>
        </Pressable>
        {/*  Make money driving*/}
        <Pressable
          onPress={() => {
            console.warn('1');
          }}>
          <Text style={{color: 'white', paddingVertical: 5}}>
            Make money driving
          </Text>
        </Pressable>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
