/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const IC_ARR_DOWN = require('../icons/ic_arr_down.png');
const IC_ARR_UP = require('../icons/ic_arr_up.png');

const FAQ: () => React$Node = props => {
  const state = {
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
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        title: 'These questions are just for test. yes?',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
    ],
  };

  return (
    <>
      <View style={styles.container}>
        <ScrollView style={styles.scroll}>
          {state.contents &&
            state.contents.map((param, i) => {
              return (
                <DropDownItem
                  key={i}
                  style={styles.border}
                  contentVisible={false}
                  invisibleImage={IC_ARR_DOWN}
                  visibleImage={IC_ARR_UP}
                  header={
                    <View style={styles.header}>
                      <Text style={styles.headerTxt}>{param.title}</Text>
                    </View>
                  }>
                  <Text style={styles.txt}>{param.body}</Text>
                </DropDownItem>
              );
            })}
          <View style={styles.bottomView} />
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
    marginTop: 5,
  },
  scroll: {
    alignSelf: 'stretch',
  },
  border: {
    borderWidth: 1,
    borderColor: 'gray',
    //borderRadius: 22,
    marginBottom: 10,
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
  bottomView: {
    //height: 96,
  },
});

const mapStateToProps = state => state;

const FAQContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FAQ);

export default FAQContainer;
