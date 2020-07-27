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
  Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import {connect} from 'react-redux';

import {mapDispatchToProps} from '../ducks/actions';

const Devices: () => React$Node = props => {
  const state = [
    {
      title: '  Axivity     ',
      image: require('../assets/Axivity.jpg'),
    },
    {
      title: '  Biovotion       ',
      image: require('../assets/Biovotion.jpg'),
    },
    {
      title: '  Dreem       ',
      image: require('../assets/Dreem.jpg'),
    },
    {
      title: '  Byteflies       ',
      image: require('../assets/Byteflies.jpg'),
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
                        <View style={styles.sectionImage}>
                          <Image source={param.image} style={styles.image} />
                          <Text style={styles.sectionTitle}>{param.title}</Text>
                          <Text style={styles.textStyle}><Image source={require('../assets/battrey-icon.png')} style={styles.icon} />
                              92 % {}
                          </Text>
                        </View>
                        <View style={styles.sectionRow}>
                          <View style={styles.fixToText}>
                            <Button
                              title="Metrics"
                              //color="blue"
                              onPress={() => Alert.alert('Left button pressed')}
                            />
                          </View>
                          <View style={styles.fixToText}>
                            <Button
                              title="Sync"
                              //color="blue"
                              onPress={() =>
                                Alert.alert('Wait to see the battery life')
                              }
                            />
                          </View>
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
    backgroundColor: 'white',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 30,
  },
  icon: {
      width: 30,
      height: 30,
      //borderRadius: 30,
      justifyContent: 'flex-end',
    },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  sectionImage: {
    flexDirection: 'row',
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: Colors.black,
    alignSelf: 'center',
  },
  fixToText: {
    width: 100,
    height: 40,
    backgroundColor: 'white',
    marginTop: 20,
    margin: 5,
    justifyContent: 'flex-end',
  },
  textStyle: {
    fontSize: 16,
    color: 'green',
    fontWeight: '600',
    marginTop: 10,
    marginLeft: 'auto',
  },
});

const mapStateToProps = state => state;

const DevicesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Devices);

export default DevicesContainer;
