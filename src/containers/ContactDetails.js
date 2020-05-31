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
  const personNameNCl = 'Dr Alex Babrbi';
  const personNameRotterdam = 'Dr Javad Javidi';
  const personNameKiel = 'Dr Luara Babrbi';
  const personNameMünster = ' Dr Herad Alexi';

  const centerNameNCl = 'Urben Science Building';
  const centerNameRotterdam = 'xx';
  const centerNameKiel = 'yy';
  const centerNameMünster = 'zz';

  const locationNCl = 'UK';
  const locationRotterdam = 'The Netherlands';
  const locationKiel = 'Kiel';
  const locationMünster = 'Munster';

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
                <Text style={styles.highlight}>Person Name: </Text>
                {personNameNCl}
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Center Name: </Text>
                {centerNameNCl}
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Location: </Text>
                {locationNCl}
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Rotterdam, Netherlands</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Person Name: </Text>
                {personNameRotterdam}
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Center Name: </Text>
                {centerNameRotterdam}
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Location: </Text>
                {locationRotterdam}
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Kiel, Germany</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Person Name: </Text>
                {personNameKiel}
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Center Name: </Text>
                {centerNameKiel}
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Location: </Text>
                {locationKiel}
              </Text>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Münster, Germany</Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Person Name: </Text>
                {personNameMünster}
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Center Name: </Text>
                {centerNameMünster}
              </Text>
              <Text style={styles.sectionDescription}>
                <Text style={styles.highlight}>Location: </Text>
                {locationMünster}
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
