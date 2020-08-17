/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import DropDownItem from 'react-native-drop-down-item';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const IC_ARR_DOWN = require('../icons/ic_arr_down.png');
const IC_ARR_UP = require('../icons/ic_arr_up.png');

const AboutDevices: () => React$Node = props => {
  const state = {
    contents: [
      {
        image: require('../assets/Axivity.jpg'),
        title: '    Axivity ',
        body: 'This is the answer and I think this is fantastic:)',
      },
      {
        image: require('../assets/Biovotion.jpg'),
        title: '    Biovotion ',
        body: 'Yes. You can have more items.',
      },
      {
        image: require('../assets/Dreem.jpg'),
        title: '    Dreem ',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        image: require('../assets/Byteflies.jpg'),
        title: '    Byteflies ',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        image: require('../assets/MoveMonitor.jpg'),
        title: '    Move Monitor ',
        body:
          'What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text? What about very long text?',
      },
      {
        image: require('../assets/Mbient.jpg'),
        title: '    Mbient ',
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
                      <Image source={param.image} style={styles.image} />
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
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    marginTop: 12,
  },
  border: {
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 15,
  },
  scroll: {
    alignSelf: 'stretch',
  },
  header: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
    //alignItems: 'center',
  },
  headerTxt: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
    //alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    alignItems: 'center',
  },
  txt: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    alignItems: 'center',
  },
  bottomView: {
    //height: 96,
    //alignItems: 'center',
  },
});

const mapStateToProps = state => state;

const AboutDevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AboutDevices);

export default AboutDevicesContainer;
