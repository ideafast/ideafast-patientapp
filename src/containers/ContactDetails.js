/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';
import ContactRow from '../components/ContactRow';

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
          {state &&
            state.map((param, i) => {
              return <ContactRow key={i} {...param} />;
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

const ContactDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactDetails);

export default ContactDetailsContainer;
