import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberTypeRow = props => {
  const {type} = props;
  const getImage = () => {
    if (type.type === 'UberX') {
      return require('../../assets/Images/UberX.jpeg');
    }
    if (type.type === 'Comfort') {
      return require('../../assets/Images/Comfort.jpeg');
    }
    if (type.type === 'UberXL') {
      return require('../../assets/Images/UberXL.jpeg');
    }
  };
  return (
    <View style={styles.container}>
      {/*Image*/}
      <Image style={styles.image} source={getImage()} />
      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type.type} <Ionicons name={'person'} size={17} />3
        </Text>
        <Text style={styles.time}>8:03PM dropoff</Text>
      </View>

      <View style={styles.rightContainer}>
        <Ionicons name={'pricetag'} size={18} color={'#42d742'} />
        <Text style={styles.price}>est . ${type.price}</Text>
      </View>

      {/**/}
    </View>
  );
};

export default UberTypeRow;
