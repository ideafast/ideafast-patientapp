/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {StyleSheet, Text, View, Image, Button, Alert} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const DevicesRow: () => React$Node = ({title, image}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.border}>
        <View style={styles.sectionImage}>
          <Image source={image} style={styles.image} />
          <Text style={styles.sectionTitle}>{title}</Text>
          <Text style={styles.textStyle}>
            <Image
              source={require('../assets/battrey-icon.png')}
              style={styles.icon}
            />
            No status {}
          </Text>
        </View>
        <View style={styles.sectionRow}>
          <View style={styles.fixToText}>
            <Button
              title="Metrics"
              //color="blue"
              onPress={() => Alert.alert('Left button pressed')}
            />
          </View>
          <View style={styles.fixToText}>
            <Button
              title="Sync"
              //color="blue"
              onPress={() => Alert.alert('Wait to see the battery status')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  border: {
    borderWidth: 1,
    borderColor: 'blue',
  },
  sectionContainer: {
    marginTop: 30,
    paddingHorizontal: 10,
    marginBottom: 0,
    backgroundColor: 'white',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 30,
  },
  icon: {
    width: 30,
    height: 30,
    //borderRadius: 30,
    justifyContent: 'flex-end',
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  sectionImage: {
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: Colors.black,
    alignSelf: 'center',
  },
  fixToText: {
    width: 100,
    height: 40,
    backgroundColor: 'white',
    marginTop: 20,
    margin: 5,
    justifyContent: 'flex-end',
  },
  textStyle: {
    fontSize: 16,
    color: 'green',
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 'auto',
  },
});

export default DevicesRow;
