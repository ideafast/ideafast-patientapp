/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';
import DevicesRow from '../components/DevicesRow';

const Devices: () => React$Node = props => {
  const state = [
    {
      title: '  Axivity     ',
      image: require('../assets/Axivity.jpg'),
    },
    {
      title: '  Biovotion       ',
      image: require('../assets/Biovotion.jpg'),
    },
    {
      title: '  Dreem       ',
      image: require('../assets/Dreem.jpg'),
    },
    {
      title: '  Byteflies       ',
      image: require('../assets/Byteflies.jpg'),
    },
  ];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {state &&
            state.map((param, i) => {
              return <DevicesRow key={i} {...param} />;
            })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

const mapStateToProps = state => state;

const DevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Devices);

export default DevicesContainer;
