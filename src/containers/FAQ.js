/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';

import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';
import {mapDispatchToProps} from '../ducks/actions';


const IC_ARR_DOWN = require('../icons/ic_arr_down.png');
const IC_ARR_UP = require('../icons/ic_arr_up.png');

const FAQ: () => React$Node = props => {

  state = {
    contents: [
      {
        title: 'How often do I need to use that?',
        body: 'This is the answer and I think this is fantastic:)',
      },
      {
        title: 'Shall I do any special activity?',
        body: 'Yes. You can have more items.',
      },
      {
        title: 'These questions are just for test. yes?',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
       },
      {
        title: 'These questions are just for test. yes?',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
       },
       {
        title: 'These questions are just for test. yes?',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body: 'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },

    ],
  };
  return (
        <>
        <View style={styles.container}>
            <ScrollView style={{ alignSelf: 'stretch' }}>
                {
                    <DropDownItem
                        style={styles.dropDownItem}
                        contentVisible={false}
                        invisibleImage={IC_ARR_DOWN}
                        visibleImage={IC_ARR_UP}
                        header={
                        <View style={styles.header}>
                        <Text style={styles.headerTxt}>{state.contents.title}</Text>
                        </View>
                        }
                        >
                        <Text style={styles.txt}>{state.contents.body}</Text>
                    </DropDownItem>
                }
          <View style={{ height: 96 }}/>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
  },
  txt: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
});

const mapStateToProps = state => state;

const FAQContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FAQ);

export default FAQContainer;
