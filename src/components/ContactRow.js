/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const ContactRow: () => React$Node = ({
  title,
  personName,
  centerName,
  location,
}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionDescription}>
        <Text style={styles.highlight}>Person Name: </Text>
        {personName}
      </Text>
      <Text style={styles.sectionDescription}>
        <Text style={styles.highlight}>Center Name: </Text>
        {centerName}
      </Text>
      <Text style={styles.sectionDescription}>
        <Text style={styles.highlight}>Location: </Text>
        {location}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default ContactRow;
