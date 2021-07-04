import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        Upgrading this package often requires the font files linked to your
        projects to be updated as well. If the automatic linking works for you,
        running this again should update the fonts. Otherwise you need to follow
        the steps outlined in the installation section.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMessage;
