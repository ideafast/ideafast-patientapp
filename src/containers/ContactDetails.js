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
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {connect} from 'react-redux';

import ContactRow from '../components/ContactRow';
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
                return <ContactRow key={i} {...param} />;
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
