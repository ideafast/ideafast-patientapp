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
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const ContactDetails: () => React$Node = props => {
  const state = [
    {
      title: 'Newcastle, United Kingdom',
      personName: 'Dr Alex Babrbi',
      centerName: 'Urben Science Building',
      location: 'UK',
    },
    {
      title: 'Rotterdam, Netherlands',
      personName: 'Dr Javad Javidi',
      centerName: 'xx',
      location: 'The Netherlands',
    },
    {
      title: 'Kiel, Germany',
      personName: 'Dr Alex Babrbi',
      centerName: 'Urben Science Building',
      location: 'Kiel',
    },
    {
      title: 'Münster, Germany',
      personName: 'Dr Alex Babrbi',
      centerName: 'Urben Science Building',
      location: 'Munster',
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
            {state &&
              state.map((param, i) => {
                return (
                  <View key={i} style={styles.sectionContainer}>
                    <Text style={styles.sectionTitle}>{param.title}</Text>
                    <Text style={styles.sectionDescription}>
                      <Text style={styles.highlight}>Person Name: </Text>
                      {param.personName}
                    </Text>
                    <Text style={styles.sectionDescription}>
                      <Text style={styles.highlight}>Center Name: </Text>
                      {param.centerName}
                    </Text>
                    <Text style={styles.sectionDescription}>
                      <Text style={styles.highlight}>Location: </Text>
                      {param.location}
                    </Text>
                  </View>
                );
              })}
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
  body: {
    //backgroundColor: Colors.white,
  },
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
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

const mapStateToProps = state => state;

const ContactDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactDetails);

export default ContactDetailsContainer;
