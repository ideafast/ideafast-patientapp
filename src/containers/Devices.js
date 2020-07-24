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
  Button,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const Devices: () => React$Node = props => {
  const state = [
    {
      title: 'Dreem',
    },
    {
      title: 'Byteflies',
    },
    {
      title: 'Axitivity',
    },
    {
      title: 'Watch',
    },
  ];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {state
              ? state.map((param, i) => {
                  return (
                    <View key={i} style={styles.sectionContainer}>
                      <View style={styles.border}>
                        <Text style={styles.sectionTitle}>{param.title}</Text>
                        <View style={styles.fixToText}>
                          <Button
                            title="Upload"
                            onPress={() => Alert.alert('Left button pressed')}
                          />
                          <Button
                            title="Sync"
                            onPress={() => Alert.alert('Right button pressed')}
                          />
                        </View>
                      </View>
                    </View>
                  );
                })
              : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
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
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: Colors.black,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    height: 50,
    width: '40%',
  },
});

const mapStateToProps = state => state;

const DevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Devices);

export default DevicesContainer;
