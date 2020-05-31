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
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Newcastle, United Kingdom</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Person Name: </Text> Dr Alex
                barbi
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Center Name: </Text> Urben
                Science building
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Location: </Text> United Kingdom
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Rotterdam, Netherlands</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Person Name: </Text> Dr Alex
                barbi
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Center Name: </Text> Urben
                Science building
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Location: </Text> United Kingdom
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Kiel, Germany</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Person Name: </Text> Dr Alex
                barbi
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Center Name: </Text> Urben
                Science building
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Location: </Text> United Kingdom
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Münster, Germany</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Person Name: </Text> Dr Alex
                barbi
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Center Name: </Text> Urben
                Science building
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Location: </Text> United Kingdom
              </Text>
            </View>
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
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
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
