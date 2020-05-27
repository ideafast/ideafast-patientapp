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
                this.state.contents
                ? this.state.contents.map((param, i) => {
                    return (
                        <DropDownItem
                        key={i}
                        style={styles.dropDownItem}
                        contentVisible={false}
                        invisibleImage={IC_ARR_DOWN}
                        visibleImage={IC_ARR_UP}
                        header={
                        <View style={styles.header}>
                        <Text style={{
                          fontSize: 20,
                          fontWeight: '600',
                          color: Colors.black,
                        }}>{param.title}</Text>
                        </View>
                        }
                        >
                        <Text style={[
                            styles.txt,
                            {
                            fontSize: 18,
                            fontWeight: '400',
                            color: Colors.dark,
                            },
                        ]}>
                        {param.body}
                        </Text>
                    </DropDownItem>
                    );
                })
              : null
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
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTxt: {
    fontSize: 12,
    color: 'rgb(74,74,74)',
    marginRight: 60,
    flexWrap: 'wrap',
  },
  txt: {
    fontSize: 14,
  },
});

const mapStateToProps = state => state;

const FAQContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FAQ);

export default FAQContainer;
