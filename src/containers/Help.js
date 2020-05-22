/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const Help: () => React$Node = props => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}
                onPress={() => props.navigation.navigate('FAQ')}>FAQ
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}
                onPress={() => props.navigation.navigate('AboutDevices')}>About Devices
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}
                onPress={() => props.navigation.navigate('ContactDetails')}>Study Center Contact Details
              </Text>
            </View>
          </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    //position: 'absolute',
    right: 0,
  },
  body: {
    //backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    //paddingHorizontal: 24,
    paddingHorizontal: 14,
  },
  sectionTitle: {
    fontSize: 20,
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
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '100',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const mapStateToProps = state => state;

const HelpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Help);

export default HelpContainer;
